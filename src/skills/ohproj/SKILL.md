---
name: ohproj
description: "创建、编译、签名、编译测试、执行测试 OpenHarmony 原生应用项目（基于 NativeProj46R 模板），含 NAPI 对接规范与测试报告说明。"
author: "Created by user"
created: "2026-01-20"
version: "1.3.0"
---

# ohproj 技能说明

本技能提供 **创建**、**编译**、**签名**、**编译测试用例**、**执行测试用例** 与 **清除签名** 六类能力，面向基于模板 NativeProj46R 的原生应用项目（含 NAPI + ArkTS）。配套设计文档与代码规范见 **DESIGN.md**，测试报告格式见 **八、测试报告格式**。

---

## 一、能力总览

| 能力 | 说明 | 调用方式 |
|------|------|----------|
| **创建项目** | 从模板拷贝并重命名目录与 bundleName，可选接入用户 C/C++ 代码目录 | `ohproj.py create <项目名> [--code-dir <路径>]` 或按 SKILL 步骤 4.x 手工执行 |
| **编译** | 检查环境并构建主 HAP（委托 ohhap/hapbuild.py） | `ohproj.py build <项目目录>` |
| **签名** | 对未签名主 HAP 与测试 HAP 进行 release/debug 签名 | `ohproj.py sign <项目目录> [release\|debug]` |
| **编译测试用例** | 构建 ohosTest 模块的单元测试 HAP（委托 hapbuild.py build-test） | `ohproj.py build-test <项目目录>` |
| **执行测试用例** | 卸载→安装主 HAP→安装测试 HAP→执行 aa test（委托 ohhdc deploy-test），输出测试报告 | `ohproj.py test <项目目录> [--timeout 毫秒]` |
| **清除签名** | 删除项目下的 autosign 目录 | `ohproj.py clean-sign <项目目录>` |

**环境依赖**：编译与签名需 HarmonyOS Command Line Tools、OpenHarmony SDK（见 ohhap 技能）；签名还需 Java 及证书目录。执行测试需设备已连接且 hdc 可用（见 ohhdc 技能）。

---

## 二、使用方法

### 2.1 命令行（推荐使用绝对路径）

在仓库根目录（或任意目录）下执行，**项目目录建议使用绝对路径**，避免工作目录歧义。

```bash
# 创建项目（在 ohproj 目录下生成 <项目名>NativeProj46R）
python3 .claude/skills/ohproj/ohproj.py create <项目名> [--code-dir <用户代码目录>]

# 编译主 HAP
python3 .claude/skills/ohproj/ohproj.py build <项目目录绝对路径>

# 签名（默认 release）
python3 .claude/skills/ohproj/ohproj.py sign <项目目录绝对路径> [release|debug]

# 编译单元测试 HAP
python3 .claude/skills/ohproj/ohproj.py build-test <项目目录绝对路径>

# 执行单元测试（部署到设备并运行）
python3 .claude/skills/ohproj/ohproj.py test <项目目录绝对路径> [--timeout 毫秒]

# 清除签名
python3 .claude/skills/ohproj/ohproj.py clean-sign <项目目录绝对路径>
```

**直接调用 ohhap / ohhdc（与 ohproj 等价）：**

```bash
python3 .claude/skills/ohhap/hapbuild.py build <项目目录绝对路径>
python3 .claude/skills/ohhap/hapbuild.py sign <项目目录绝对路径> [release|debug]
python3 .claude/skills/ohhap/hapbuild.py build-test <项目目录绝对路径>
python3 .claude/skills/ohhap/hapbuild.py clean-sign <项目目录绝对路径>
python3 .claude/skills/ohhdc/ohhdc.py deploy-test <项目目录绝对路径> [--timeout 毫秒]
```

### 2.2 对话/提示词（供 AI 与用户使用）

**创建与接入**

- 「用 ohproj 创建原生项目，项目名 xxx，要接入的代码目录是 yyy」
- 「执行创建原生项目技能，项目名称 ohson，需要引入目录是 cJSON-master，需要导出的接口是 cJSON.h 里 CJSON_PUBLIC 声明的接口，并完成应用代码调用和测试用例编写，最后编译、签名并检查结果」
- 「对导出的接口完善对应单元测试，并编译和执行测试用例」

**编译与签名**

- 「使用 ohproj/ohhap 技能编译 @arkcJsonNativeProj46R」
- 「使用技能签名这个项目 @arkcJsonNativeProj46R」
- 「对项目 /path/to/arkcJsonNativeProj46R 执行编译并签名」
- 「使用技能编译这个项目的单元测试并执行」→ 先 `build-test` 再 `sign` 再 `test`

**测试**

- 「@ohsonNativeProj46R 使用技能编译单元测试并执行」
- 「编译、执行这个项目的单元测试」
- 「执行测试用例后生成的测试报告里，每个测试 suite 和内部所有测试用例的执行情况怎么看？」→ 见 **八、测试报告格式**

**问题排查**

- 「为啥 Index.d.ts 没有暴露接口？」→ 检查 `entry/src/main/cpp/types/libentry/Index.d.ts` 与 `entry/oh_modules/libentry.so/Index.d.ts` 是否同步、是否导出全部 NAPI 接口。
- 「CjsondtsTest 报 undefined is not callable」→ 按步骤 4.5 将 `entry/src/mock/mock-config.json5` 清空为 `{}`。
- 「某条用例失败了，修改下」→ 根据测试报告中 `OHOS_REPORT_STATUS_CODE: -2` 与 `test=CaseName`、`stream=` 定位用例，结合 DESIGN.md 代码规范修复。

---

## 三、调用命令汇总

| 意图 | 命令 |
|------|------|
| 创建项目（仅拷贝+重命名+bundleName） | `python3 .claude/skills/ohproj/ohproj.py create arkcJson` |
| 创建并接入代码目录 | `python3 .claude/skills/ohproj/ohproj.py create arkcJson --code-dir .claude/skills/ohproj/cJSON-master` |
| 编译主 HAP | `python3 .claude/skills/ohproj/ohproj.py build /root/ohos/61release/src/.claude/skills/ohproj/arkcJsonNativeProj46R` |
| 签名（release） | `python3 .claude/skills/ohproj/ohproj.py sign /root/ohos/61release/src/.claude/skills/ohproj/arkcJsonNativeProj46R` |
| 签名（debug） | `python3 .claude/skills/ohproj/ohproj.py sign /path/to/project debug` |
| 编译单元测试 HAP | `python3 .claude/skills/ohproj/ohproj.py build-test /path/to/ohsonNativeProj46R` |
| 执行单元测试（部署并运行） | `python3 .claude/skills/ohproj/ohproj.py test /path/to/ohsonNativeProj46R` |
| 执行测试（指定超时毫秒） | `python3 .claude/skills/ohproj/ohproj.py test /path/to/project --timeout 120000` |
| 清除签名 | `python3 .claude/skills/ohproj/ohproj.py clean-sign /path/to/project` |

---

## 四、创建原生应用项目（详细步骤）

当用户需要「完整创建并接入 NAPI + 测试」时，按下列步骤执行（或由 AI 按步骤生成代码）。

### 4.1 步骤一：拷贝模板并修改命名与 bundleName

- **模板路径**：`.claude/skills/ohhap/NativeProj46R`
- **目标路径**：`.claude/skills/ohproj/<命名>NativeProj46R`
- **bundleName**：`ohos.<命名小写>.nativeproj46r`（如 `arkcJson` → `ohos.arkcjson.nativeproj46r`）
- **修改文件**：`AppScope/app.json5`、`autosign/UnsgnedReleasedProfileTemplate.json` 中的 `bundleName` / `bundle-name`

### 4.2 步骤二：拷贝用户代码目录并加入 CMake

- 将用户指定目录（如 `cJSON-master`）拷贝到项目的 `entry/src/main/cpp/` 下。
- 在 `entry/src/main/cpp/CMakeLists.txt` 中增加 `include_directories` 与 `add_library` 中的源文件。

### 4.3 步骤三：NAPI 与 Index.d.ts、ArkTS 调用

- 在 `napi_init.cpp` 中实现 C 接口的 NAPI 封装并注册到 exports。
- 在 `entry/src/main/cpp/types/libentry/Index.d.ts` 中声明 TypeScript 接口。
- 同步更新 `entry/oh_modules/libentry.so/Index.d.ts`（与 types 一致），避免编译使用旧声明。
- 在 `Index.ets` 中为变量添加**显式类型**（避免 arkts-no-any-unknown）。

**重要注意——须导出原有代码的全体接口**：以接入代码的头文件为准（如 cJSON.h 中所有 `CJSON_PUBLIC` 声明的接口），必须在 `napi_init.cpp` 中**全部**实现 NAPI 封装，并在 `Index.d.ts` 中**全部**声明，不得只实现或声明部分接口。若只导出部分接口，会导致应用层或测试无法调用未导出接口，且与“完整对接原有 C/C++ API”的目标不符。创建项目时请先对照头文件逐项核对，确保每个公开接口都有对应的 NAPI 与 .d.ts 声明。

### 4.4 步骤四：测试用例与 List.test.ets

- 新增 `*dts.test.ets`，在 `List.test.ets` 中 import 并注册测试套件。

**重要注意——单元测试须覆盖所有导出接口**：为每个通过 NAPI 导出的接口编写至少一个测试用例，测试用例需**覆盖所有**在 Index.d.ts 中声明的接口，不得遗漏。若只对部分接口写测试，未覆盖的接口在后续修改中容易引入回归且难以发现。创建项目时请根据 Index.d.ts 的导出列表逐项编写或补充测试，确保每个接口都有对应测试。

### 4.5 步骤五：单元测试使用真实 NAPI（必做，避免 CjsondtsTest 等失败）

模板中 `entry/src/mock/mock-config.json5` 会将 `libentry.so` 映射到 mock 实现（`Libentry.mock.ets` 仅实现 `add`）。若测试用例（如 `*dts.test.ets`）中调用了 NAPI 的其他接口（如 `cjsonVersion`、`cjsonParse` 等），运行时会加载 mock 而非主 HAP 中的真实 .so，未在 mock 中实现的接口为 **undefined**，导致报错 **"undefined is not callable"**，整组用例失败。

**正确做法**：在接入 NAPI 并编写调用该 NAPI 的单元测试后，必须**关闭对 libentry.so 的 mock**，让测试运行时加载主 HAP 中的真实 native 模块：

- 修改 **`entry/src/mock/mock-config.json5`**，清空对 `libentry.so` 的映射（使用空对象 `{}`），例如：
  ```json5
  {
  }
  ```
- 不要保留类似 `"libentry.so": { "source": "src/mock/Libentry.mock.ets" }` 的配置。

这样执行 `build-test` → `sign` → `test` 时，设备会加载主 HAP 中的真实 libentry.so，所有 NAPI 测试用例即可通过。若未做此步，仅 mock 中的接口（如 `add`）能通过，其余接口会报 "undefined is not callable"。

---

## 五、输出示例

### 5.1 创建项目

```
创建项目: arkcJson
  模板: .../NativeProj46R -> .../ohproj/arkcJsonNativeProj46R
  bundleName: ohos.arkcjson.nativeproj46r
  已修改 AppScope/app.json5、autosign/UnsgnedReleasedProfileTemplate.json
✓ 项目已创建: .../arkcJsonNativeProj46R
  后续: 接入代码、NAPI、Index.d.ts、测试用例 见 SKILL 步骤 4.2–4.4
```

### 5.2 编译

```
================================================================================
检查编译环境...
================================================================================
✓ HarmonyOS Command Line Tools 路径: /root/toolchains/command-line-tools
✓ OpenHarmony SDK 路径: /root/toolchains/ohos-sdk-6.0-release
...
================================================================================
开始构建 HAP...
================================================================================
工作目录: /root/ohos/61release/src/.claude/skills/ohproj/arkcJsonNativeProj46R
执行清理...
执行构建...
✓ HAP 构建成功！
================================================================================
检查生成的 HAP 文件...
找到 1 个 HAP 文件:
  1. entry/build/default/outputs/default/entry-default-unsigned.hap
主要 HAP 文件: entry/build/default/outputs/default/entry-default-unsigned.hap
```

### 5.3 签名

```
================================================================================
开始 HAP 签名流程...
================================================================================
✓ 项目 bundleName: ohos.arkcjson.nativeproj46r
✓ 未签名的 HAP 文件: .../entry/build/default/outputs/default/entry-default-unsigned.hap
步骤 1: 创建 autosign 目录...
...
步骤 8: 验证应用包签名...
  ✓ 验证成功: entry-default-signed.hap
✓ HAP 签名流程完成！
  签名的 HAP 文件: .../entry/build/default/outputs/default/entry-default-signed.hap
```

### 5.4 编译测试用例

```
================================================================================
开始构建测试 HAP...
================================================================================
工作目录: /root/ohos/.../ohsonNativeProj46R
...
✓ 测试 HAP 构建成功！
  测试 HAP: entry/build/default/outputs/default/entry_test-default-unsigned.hap
```

### 5.5 执行测试用例

执行前需已 build、build-test、sign，且设备已连接。

```
卸载已安装应用...
安装主 HAP...
安装测试 HAP...
执行 aa test...
✓ 部署运行测试完成: /path/to/ohsonNativeProj46R
```

若部分用例（如 UI 测试）报 "App died"，可为环境或已知问题；可关注 ActsAbilityTest、自定义 *dts 测试套件等结果。

---

## 六、路径与文件参考

| 用途 | 路径或文件 |
|------|------------|
| 模板工程 | `.claude/skills/ohhap/NativeProj46R` |
| 生成项目目录 | `.claude/skills/ohproj/<命名>NativeProj46R` |
| 编译/签名/编译测试脚本 | `.claude/skills/ohhap/hapbuild.py` |
| 执行测试脚本 | `.claude/skills/ohhdc/ohhdc.py`（deploy-test） |
| 未签名主 HAP | `entry/build/default/outputs/default/entry-default-unsigned.hap` |
| 已签名主 HAP | `entry/build/default/outputs/default/entry-default-signed.hap` |
| 测试 HAP（未签名/已签名） | `entry/build/default/outputs/ohosTest/entry-ohosTest-unsigned.hap` / `entry-ohosTest-signed.hap` |
| NAPI 与 TS 声明 | `entry/src/main/cpp/napi_init.cpp`、`entry/src/main/cpp/types/libentry/Index.d.ts`、`entry/oh_modules/libentry.so/Index.d.ts` |
| 单元测试 mock 配置 | `entry/src/mock/mock-config.json5`（NAPI 测试须取消对 libentry.so 的 mock，见 4.5） |
| 设计文档与代码规范 | `.claude/skills/ohproj/DESIGN.md` |

---

## 七、提示词与输出约定

- **提示词**：用户可说「用 ohproj 创建/编译/签名」「使用技能编译/签名 @项目名」「编译单元测试并执行」「使用技能编译这个项目的单元测试并执行」。
- **输出**：执行命令后给出简要结论（成功/失败）及产物路径；若失败，摘录关键报错便于排查。
- **执行测试流程**：通常顺序为 `build` → `build-test` → `sign`（对主 HAP 与测试 HAP 均签名）→ `test`；`test` 会先卸载再安装主 HAP 与测试 HAP，然后执行 `aa test`。
- **NAPI 单元测试失败**：若 CjsondtsTest 等报 "undefined is not callable"，检查 `entry/src/mock/mock-config.json5` 是否仍对 `libentry.so` 做了 mock；按步骤 4.5 清空该配置后重新 build-test、sign、test。
- **导出与测试范围**：用户要求“导出某头文件的 CJSON_PUBLIC/全部公开接口”时，须导出**所有**该头文件中的公开接口（napi_init.cpp + Index.d.ts 全量对应），且单元测试须**覆盖所有**已导出接口，每个接口至少一个测试用例（见步骤 4.3、4.4 注意）。
- **设计文档与代码规范**：详见本目录下 **DESIGN.md**（NAPI 封装约定、ArkTS/测试代码规范、已知问题与修复）。

---

## 八、测试报告格式

执行 `ohproj.py test <项目目录>` 后，设备通过 Hypium 输出测试报告，主要包含以下内容。解析时可按 **测试套件（class）** 与 **用例（test）** 两级查看执行情况。

### 8.1 报告结构概览

- **OHOS_REPORT_SUM: N** — 当前输出的测试套件包含的用例数量（或套件数，依 Hypium 版本）。
- **OHOS_REPORT_STATUS: class=SuiteName** — 测试套件名称（如 `ActsAbilityTest`、`CjsondtsTest`）。
- **OHOS_REPORT_STATUS: current=M** — 当前执行到的用例序号（从 1 开始）。
- **OHOS_REPORT_STATUS: numtests=K** — 当前运行计划中的总用例数。
- **OHOS_REPORT_STATUS: test=CaseName** — 当前执行的测试用例名称（如 `assertContain`、`cjsonParse_valid_json_returns_handle`）。
- **OHOS_REPORT_STATUS_CODE: 0** — 该用例**通过**。
- **OHOS_REPORT_STATUS_CODE: -2** — 该用例**失败**；通常伴随 **OHOS_REPORT_STATUS: stream=** 错误信息及 **stack=** 堆栈。
- **OHOS_REPORT_STATUS: consuming=T** — 该用例耗时（毫秒）。
- **OHOS_REPORT_RESULT: stream=Tests run: R, Failure: F, Error: E, Pass: P, Ignore: I** — 汇总：总运行 R，失败 F，错误 E，通过 P，忽略 I。
- **OHOS_REPORT_CODE: -1** — 表示存在失败或错误（F 或 E > 0 时）。
- **TestFinished-ResultCode: 0** / **TestFinished-ResultMsg: ...** — 测试跑完的退出信息。

### 8.2 按套件与用例解读

| 含义 | 报告行示例 |
|------|------------|
| 套件开始 | `OHOS_REPORT_STATUS: class=CjsondtsTest` |
| 用例名称 | `OHOS_REPORT_STATUS: test=cjsonVersion_returns_string` |
| 用例通过 | 该 test 后出现 `OHOS_REPORT_STATUS_CODE: 0` |
| 用例失败 | 该 test 后出现 `OHOS_REPORT_STATUS_CODE: -2`，且常有 `stream=...`、`stack=...` |
| 套件耗时 | `OHOS_REPORT_STATUS: suiteconsuming=T` |
| 全局汇总 | `OHOS_REPORT_RESULT: stream=Tests run: 63, Failure: 0, Error: 0, Pass: 63, Ignore: 0` |

### 8.3 典型输出片段

```
OHOS_REPORT_SUM: 1
OHOS_REPORT_STATUS: class=ActsAbilityTest
OHOS_REPORT_STATUS: current=1
OHOS_REPORT_STATUS: numtests=63
OHOS_REPORT_STATUS: test=assertContain
OHOS_REPORT_STATUS_CODE: 1
OHOS_REPORT_STATUS_CODE: 0
OHOS_REPORT_STATUS: consuming=14

OHOS_REPORT_SUM: 62
OHOS_REPORT_STATUS: class=CjsondtsTest
OHOS_REPORT_STATUS: test=cjsonVersion_returns_string
OHOS_REPORT_STATUS_CODE: 0
...
OHOS_REPORT_RESULT: stream=Tests run: 63, Failure: 0, Error: 0, Pass: 63, Ignore: 0
OHOS_REPORT_CODE: -1
TestFinished-ResultCode: 0
TestFinished-ResultMsg: your test finished!!!
```

**说明**：若某用例失败，在报告中搜索 `OHOS_REPORT_STATUS_CODE: -2`，其前的 `test=CaseName` 即为失败用例名，`stream=` 为断言或错误信息；可根据 DESIGN.md 中的代码规范与已知问题排查（如 mock 配置、AddItemToObjectCS 键生命周期、assertContain 替代写法等）。
