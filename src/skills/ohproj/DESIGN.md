# ohproj 设计文档与代码规范

本文档描述基于 NativeProj46R 的原生应用项目结构、NAPI 封装约定、ArkTS/测试代码规范，以及测试报告含义与常见问题修复。与技能说明配合使用：SKILL.md 负责能力与命令，本文负责设计与规范。

---

## 一、项目结构概览

- **模板**：`.claude/skills/ohhap/NativeProj46R`
- **生成项目**：`.claude/skills/ohproj/<命名>NativeProj46R`
- **bundleName**：`ohos.<命名小写无符号>.nativeproj46r`

关键目录与文件：

| 路径 | 说明 |
|------|------|
| `entry/src/main/cpp/` | 原生 C/C++ 与 NAPI 实现；用户接入代码（如 cJSON-master）放此目录下 |
| `entry/src/main/cpp/napi_init.cpp` | NAPI 注册与各接口实现 |
| `entry/src/main/cpp/types/libentry/Index.d.ts` | NAPI 的 TypeScript 声明（须与 napi_init 导出一致） |
| `entry/oh_modules/libentry.so/Index.d.ts` | 编译时使用的 .d.ts，须与 types 目录同步 |
| `entry/src/main/ets/` | ArkTS 应用代码 |
| `entry/src/ohosTest/ets/test/` | 单元测试（*dts.test.ets、List.test.ets） |
| `entry/src/mock/mock-config.json5` | 测试时 native 模块 mock 配置；NAPI 测试须清空为 `{}` |

---

## 二、NAPI 封装约定

### 2.1 Handle 模型

- C 侧指针（如 `cJSON*`）不以指针形式暴露给 ArkTS，而是通过 **Handle（int64 句柄）** 映射。
- 维护两张表：**g_cjsonHandles**（所有权归 NAPI，需在适当时机 cJSON_Delete）、**g_cjsonBorrowed**（仅引用，不 Delete）。
- 通过 `StoreHandle` / `StoreBorrowed` 存入，`GetHandle` 统一查找，`RemoveHandle` / 从 map 中 erase 释放或转移所有权。

### 2.2 所有权与 Add* 接口

- `cJSON_AddItemToObject` / `cJSON_AddItemToArray` 等会将子节点所有权交给父节点；NAPI 中在添加成功后应从 **g_cjsonHandles** 中 erase 该 item 的 handle，避免重复 Delete。
- **AddItemToObjectCS**：cJSON 的 `cJSON_AddItemToObjectCS` 使用 **constant_key**，不复制 key 字符串，key 指针必须在对象生命周期内有效。NAPI 侧 key 来自临时 `std::string`，返回后即失效，会导致未定义行为或添加失败。**规范**：在 NAPI 封装中改用 **cJSON_AddItemToObject**（会复制 key），并注释说明原因。参见 SKILL 步骤 4.3 与本文「已知问题与修复」。

### 2.3 引用类接口

- `CreateStringReference`：C 侧不复制字符串，NAPI 若传临时字符串会悬空。规范做法：在 NAPI 中改为调用 `cJSON_CreateString` 并 `StoreHandle`，在注释中说明“NAPI 侧按拷贝语义提供”。
- `AddItemReferenceToArray` / `AddItemReferenceToObject`：引用加入后，父节点在 Delete 时会一并释放该子节点；测试中不要对已通过 Reference 加入的 item 再调用 `cjsonDelete(item)`，否则双释。

### 2.4 Index.d.ts 与 oh_modules 同步

- 凡在 `napi_init.cpp` 中注册的接口，必须在 **entry/src/main/cpp/types/libentry/Index.d.ts** 中声明。
- 若 ArkTS 编译仍报“不存在某属性”，多半是 **entry/oh_modules/libentry.so/Index.d.ts** 未与 types 目录一致；需将 types 下 Index.d.ts 内容同步到 oh_modules 下同名文件。

---

## 三、ArkTS 与测试代码规范

### 3.1 显式类型（避免 arkts-no-any-unknown）

- 所有变量、返回值处尽量写清类型，例如：`const ver: string = lib.cjsonVersion();`、`const h: number = lib.cjsonParse('{}');`、`const out: string | null = lib.cjsonPrint(h);`。
- 测试用例中同样避免未标注类型的变量，防止编译报“Use explicit types instead of any/unknown”。

### 3.2 Hypium assertContain 替代写法

- Hypium 的 `expect(a).assertContain(b)` 在部分环境或类型下存在实现问题（如对字符串的 contain 判断不稳定）。
- **规范**：需要“字符串 a 包含 b”的断言时，使用 **expect(a.includes(b)).assertEqual(true)**，语义等价且稳定。

### 3.3 测试用例命名与注册

- 测试文件命名：**<接口或模块名>dts.test.ets**（如 Cjsondts.test.ets）。
- 在 **List.test.ets** 中 import 并调用对应测试套件函数（如 `cjsondtsTest()`），确保执行时能跑到所有 NAPI 相关用例。
- 每个 Index.d.ts 中导出的接口应有至少一个测试用例覆盖，避免遗漏回归。

### 3.4 mock-config.json5（NAPI 测试必做）

- 若测试用例中调用了 NAPI（如 `lib.cjsonVersion()`、`lib.cjsonParse()`），而 **mock-config.json5** 仍将 `libentry.so` 映射到 mock 实现（如 Libentry.mock.ets），则未在 mock 中实现的接口在运行时为 **undefined**，报错 **"undefined is not callable"**。
- **规范**：在接入 NAPI 并编写调用该 NAPI 的单元测试后，将 **entry/src/mock/mock-config.json5** 清空为 **`{}`**，使测试加载主 HAP 中的真实 libentry.so。详见 SKILL 步骤 4.5。

---

## 四、测试报告解读（与 SKILL 八对应）

- **测试套件**：报告中 `OHOS_REPORT_STATUS: class=SuiteName` 表示一个测试套件（如 ActsAbilityTest、CjsondtsTest）。
- **用例名称**：`OHOS_REPORT_STATUS: test=CaseName` 表示当前执行的用例。
- **通过**：该用例后出现 `OHOS_REPORT_STATUS_CODE: 0`。
- **失败**：该用例后出现 `OHOS_REPORT_STATUS_CODE: -2`，并常有 `stream=...`（断言或错误信息）、`stack=...`（堆栈）。
- **汇总**：`OHOS_REPORT_RESULT: stream=Tests run: R, Failure: F, Error: E, Pass: P, Ignore: I` 表示总运行 R、失败 F、错误 E、通过 P、忽略 I。全部通过时 F=0、E=0、P=R。

定位失败用例：在报告中搜索 **OHOS_REPORT_STATUS_CODE: -2**，向前找最近的 **test=CaseName** 即为失败用例，**stream=** 为原因；再结合本文「已知问题与修复」和 SKILL 步骤 4.5 排查。

---

## 五、已知问题与修复

| 现象 | 原因 | 修复 |
|------|------|------|
| Index.d.ts 只有 add，没有其他接口 | 创建或修改时未全量导出 NAPI，或 oh_modules 下 .d.ts 未同步 | 对照头文件（如 CJSON_PUBLIC）在 napi_init.cpp 与 Index.d.ts 中全量实现并声明，并同步到 entry/oh_modules/libentry.so/Index.d.ts |
| CjsondtsTest 报 "undefined is not callable" | 测试时加载的是 mock 的 libentry.so，未实现 cjson* 等接口 | 将 entry/src/mock/mock-config.json5 改为 `{}`，重新 build-test、sign、test |
| cjsonAddItemToObjectCS 返回 false / 用例失败 | AddItemToObjectCS 使用 constant key，NAPI 传的 key 为临时字符串 | 在 NAPI 实现中改用 cJSON_AddItemToObject，使 cJSON 内部复制 key |
| ActsAbilityTest 的 assertContain 失败 | Hypium assertContain 对字符串行为不稳定 | 改用 expect(a.includes(b)).assertEqual(true) |
| 编译报“Property 'xxx' does not exist on type...” | oh_modules 下 Index.d.ts 未更新 | 将 entry/src/main/cpp/types/libentry/Index.d.ts 内容同步到 entry/oh_modules/libentry.so/Index.d.ts |

---

## 六、命令行与能力速查

- **创建**：`python3 ohproj.py create <项目名> [--code-dir <路径>]`
- **编译**：`python3 ohproj.py build <项目目录>`
- **签名**：`python3 ohproj.py sign <项目目录> [release|debug]`
- **编译测试**：`python3 ohproj.py build-test <项目目录>`
- **执行测试**：`python3 ohproj.py test <项目目录> [--timeout 毫秒]`
- **清除签名**：`python3 ohproj.py clean-sign <项目目录>`

执行测试前需已完成 build、build-test、sign，且设备已连接。测试报告格式与各 suite/case 含义见 SKILL.md 第八节。
