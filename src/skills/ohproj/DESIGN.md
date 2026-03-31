# ohproj 设计文档与代码规范

本文档描述基于 NativeProj46R 的原生应用项目结构、NAPI 封装约定、ArkTS/测试代码规范，以及测试报告含义与常见问题修复。与技能说明配合使用：SKILL.md 负责能力与命令，本文负责设计与规范。

---

## 一、项目结构概览

- **模板**：`src/skills/ohhap/NativeProj46R`
- **生成项目**：`src/skills/ohproj/<命名>NativeProj46R`
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

## 六、单元测试设计规范与方法

本节整理自 **entry/src/ohosTest/ets/test** 下 Ability.test.ets、Indexdts.test.ets、Cjsondts.test.ets 与 cJSON 源码 **tests/misc_tests.c** 的设计与实现，作为 ohproj 下 NAPI 单元测试的规范。

### 6.1 测试结构（Hypium）

- **套件**：`describe('SuiteName', () => { ... })`，如 `CjsondtsTest`、`ActsAbilityTest`。
- **用例**：`it('caseName', TEST_FILTER, () => { ... })`，第三参数为测试函数；TEST_FILTER 来自 constant.ets（通常为 0）。
- **生命周期**：`beforeAll`、`beforeEach`、`afterEach`、`afterAll` 按需使用；无共享资源时可留空。

### 6.2 用例命名

- **推荐**：`apiName_scenario` 或 `apiName_inputOrCondition_expected`。  
  例：`cjsonParse_valid_json_returns_handle`、`cjsonParse_invalid_json_returns_zero`、`cjsonGetObjectItem_and_getStringValue`。
- **可选**（与 Indexdts 对齐）：`api_tc_NNN_category`，如 `add_tc_001_zero_zero`，NNN 为三位编号，category 为语义分类。
- 名称需能直接对应到「测哪个接口、什么场景、期望结果」，便于从报告中的 `test=CaseName` 定位。

### 6.3 常量与魔数

- 使用 **constant.ets** 中的常量，避免魔数：`TEST_FILTER`、`HILOG_DOMAIN`、`VAL_0`、`VAL_1`、`NEG_1`、`MAX`、`MIN`、浮点用 `F_1_5` 等；NAPI 句柄无效值可用 `VAL_0` 或单独定义 `INVALID_HANDLE = 0` 并在 constant 中导出。
- 与 Indexdts.test.ets 一致：同一类测试（如加法）尽量用 constant 中的 VAL_*/NEG_*/F_* 表达输入与期望，便于维护与对照。

### 6.4 Arrange-Act-Assert 与清理

- **Arrange**：准备输入（如 JSON 字符串、handle、key）。
- **Act**：调用被测接口（如 `lib.cjsonParse(...)`、`lib.cjsonGetObjectItem(h, 'key')`）。
- **Assert**：`expect(actual).assertEqual(expected)` 或 `expect(condition).assertEqual(true)`；布尔/空值用明确比较，避免依赖不稳定的断言（如 assertContain 改用 `expect(a.includes(b)).assertEqual(true)`）。
- **清理**：对 NAPI 返回的、由调用方拥有的 handle 在用例末尾调用 `lib.cjsonDelete(h)`，避免句柄泄漏；已通过 Add* 转移所有权的 item 不要再 Delete。

### 6.5 显式类型与单焦点

- 所有变量、返回值使用**显式类型**（如 `const ver: string = ...`、`const h: number = ...`、`const out: string | null = ...`），满足 ArkTS 的 arkts-no-any-unknown 要求。
- 单用例单焦点：一个 it 验证一种行为或一个场景；可在一个用例内组合多个 API 调用（如 GetObjectItem + GetStringValue），但断言目标应清晰。

### 6.6 正向、边界与无效输入

- **正向**：合法输入，期望成功结果（如有效 JSON 解析得到非 0 handle，GetObjectItem 得到子节点）。
- **边界**：空字符串、空数组、长度为 0、下标边界等（如 CreateIntArray([])、GetArrayItem 越界行为若 NAPI 有定义则覆盖）。
- **无效输入**：参考 cJSON misc_tests 的 null/非法输入；在 NAPI 层对应为无效 handle（0）、错误输入（如无效 JSON），期望返回 0/false 或安全不崩溃。

### 6.7 日志与可追溯

- 每个 it 内可用 `hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'caseName');` 打一条与用例名一致的日志，便于从设备日志或报告反查。

### 6.8 与 Cjsondts.test.ets 的对应

- Cjsondts.test.ets 按「接口名_场景」命名，每个导出接口至少一条正向用例，部分接口补充无效输入（如 cjsonParse_invalid_json_returns_zero）。
- 新增接口时：在 Index.d.ts 与 napi_init 中声明/实现后，在 Cjsondts.test.ets 中按 6.1–6.6 增加对应 it，并在 List.test.ets 中已通过 `cjsondtsTest()` 统一注册，无需改 List。

### 6.9 测试数据要求

- **数据来源**：ohosTest 中不使用文件 IO，测试输入以内联字符串/常量形式写在用例内。
- **数值与字面量**：优先从 constant.ets 引入（VAL_0、VAL_42、NEG_1、INVALID_HANDLE 等），避免魔数。
- **JSON 字符串**：用例内直接写 JSON 字面量；若需与 C 侧 tests/inputs 对齐，可将典型内容内联复制到用例中，不读文件。
- **句柄无效值**：统一用 INVALID_HANDLE（0）；断言用 expect(h === INVALID_HANDLE).assertEqual(true) 或 expect(h !== INVALID_HANDLE).assertEqual(true)。
- **补全策略**：同一接口多种输入（如 Compare 对 string/number/null/array/boolean）分用例覆盖；打印类补零、负数等典型值。

### 6.10 补全清单与 C 侧对照

- Index.d.ts 中每个导出接口至少一条正向用例（含 IsInvalid、IsRaw、DetachItemViaPointer 等）。
- Compare 除 equal/not_equal 外，补 strings、numbers、null、arrays、booleans 及与 invalid handle 比较返回 false。
- 边界与无效：空串解析、missing key、array 上 GetObjectItem、GetArrayItem 越界、Delete(INVALID_HANDLE) 不抛。
- 打印与 Minify：Print 对 number 零/负数；Minify 对带空格输入断言去空白并保留内容。
- 与 C 侧差异见 ohproj 下 CJSONDTS_comparison.md；设计见 cJSON_tests_design.md。

---

## 七、命令行与能力速查

- **创建**：`python3 ohproj.py create <项目名> [--code-dir <路径>]`
- **编译**：`python3 ohproj.py build <项目目录>`
- **签名**：`python3 ohproj.py sign <项目目录> [release|debug]`
- **编译测试**：`python3 ohproj.py build-test <项目目录>`
- **执行测试**：`python3 ohproj.py test <项目目录> [--timeout 毫秒]`
- **清除签名**：`python3 ohproj.py clean-sign <项目目录>`

执行测试前需已完成 build、build-test、sign，且设备已连接。测试报告格式与各 suite/case 含义见 SKILL.md 第八节。
