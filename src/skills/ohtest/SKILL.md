---
name: ohtest
description: "OpenHarmony 单元测试补全技能。1) 根据 .d.ts 接口定义生成 ohosTest 测试套（ohtest.py）：接口方法 4 类边界用例。2) 根据 .ets 页面文件生成 UITest 套件（uitest_gen.py）：对页面内每个控件、布局和动作分别生成 UI 测试用例，使用 @kit.TestKit 的 Driver/ON、abilityDelegatorRegistry，参考 HarmonyOS UITest 指南。"
author: "Created by user"
created: "2026-01-28"
version: "1.0.0"
---

# OpenHarmony 单元测试补全技能 (ohtest)

根据 **.d.ts 接口文件**（如 NAPI 生成的 `Index.d.ts`）在 **ohosTest 的 test 文件夹**下自动补全单元测试套件，参照 `Ability.test.ets` 结构，以接口为测试对象，生成符合 Hypium 规范的测试用例。

## 功能说明

- **输入**：接口定义文件（如 `entry/src/main/cpp/types/libentry/Index.d.ts`）、测试目录（如 `entry/src/ohosTest/ets/test`）、可选模块导入名（如 `libentry.so`）。
- **输出**：在 test 目录下新增一个 `*Test.test.ets` 文件，并在现有 `List.test.ets`（或主测试入口）中注册该测试套。
- **命名规则**：接口文件名去掉特殊符号 + `Test`。例如 `Index.d.ts` → `IndexdtsTest`；函数名为 `indexdtsTest()`，describe 套件名为 `IndexdtsTest`。
- **测试套结构**：与 `Ability.test.ets` 一致：
  - `export default function <name>Test() {`
  - `describe('<Name>Test', () => { ... })`
  - 默认包含 `beforeAll`、`beforeEach`、`afterEach`、`afterAll`。
  - 每个接口方法对应多组 `it('<method>_tc_N', 0, () => { ... })`。

## 四类边界测试用例

对每个 .d.ts 中的导出接口方法，生成 4 个用例：

| 类型     | 说明     | 示例（以 `add(a: number, b: number) => number` 为例） |
|----------|----------|--------------------------------------------------------|
| 正常值   | 各种允许的输入类型、典型值 | `add(1, 2)`，`expect(result).assertEqual(3)` |
| 最大值   | 输入类型的最大值         | `add(Number.MAX_SAFE_INTEGER, 0)`，断言与预期一致 |
| 最小值   | 输入类型的最小值         | `add(Number.MIN_SAFE_INTEGER, 0)` 或负值边界 |
| 异常/压力 | 非数据类型、转换或大量调用 | 如 1000 次 `add(1, 1)`，每次 `expect(...).assertEqual(2)` |

用例内调用接口方法，并用 `expect(返回值).assertEqual(预期值)`（或 `assertContain` 等）做断言。

## 代码结构与编码规范

生成测试用例时需遵守以下约定，本技能在生成代码时已落实基础实现。

### 代码结构

- **公共常量**：测试中使用的数值、字符串等常量应集中在 `constant.ets` 中定义并导出，测试文件通过 `import { ... } from './constant'` 引用。生成器在首次生成前会检查 test 目录下是否存在 `constant.ets`，若不存在则自动创建并写入最小常量集（如 `HILOG_DOMAIN`、`TEST_FILTER`、`VAL_0`～`VAL_3`、`STRESS_1000`、`MAX`、`MIN` 等），后续可手动扩展。

### 编码规范

1. **行宽**：单行不超过 120 字符；过长注释或表达式应换行。
2. **用例间隔**：每个 `it()` 用例块之间保留一个空行，便于阅读与 diff。
3. **魔数**：代码中不直接写魔数（如 `0x0000`、`0`、`1000`），改用 `constant.ets` 中的常量名（如 `HILOG_DOMAIN`、`TEST_FILTER`、`STRESS_1000`）。
4. **文件拆分**：单个测试文件若超过 2000 行，应拆分为多个文件（如 `Indexdts_test_1.ets`、`Indexdts_test_2.ets`），并在主入口中按序引入；生成器目前不自动拆分，需人工处理超大文件。

生成内容已做到：使用 `constant.ets` 与导入常量、`it()` 间空行、hilog/expect 使用常量名、注释控制行宽；更多常量或拆分逻辑可在生成后手动补充。

## UITest（页面 UI 测试）

根据 **.ets 页面文件**（如 `pages/Index.ets`）在 **ohosTest 的 test 目录**下生成 **UI 测试套件**，实现对页面的单元级 UI 测试。参考 [HarmonyOS UITest 指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uitest-guidelines) 与 [arkXtest User Guide](https://www.seaxiang.com/blog/093bade094ba4c79bb42016a9e1efadc)。

### 功能说明

- **输入**：页面 .ets 文件路径（如 `entry/src/main/ets/pages/Index.ets`）、测试目录（如 `entry/src/ohosTest/ets/test`）、可选 Ability 名称（默认 `EntryAbility`）。
- **输出**：在 test 目录下新增 `<StructName>Ui.test.ets`（如 `IndexUi.test.ets`），并在 `List.test.ets` 中注册该测试套。
- **解析内容**：从页面中解析 `struct` 名、`@State` 初始文本、`Text(this.xxx)` / `Text('literal')`、`.onClick` 内 `this.xxx = 'yyy'`、以及 `Row()` / `Column()` 布局。
- **生成用例**：
  - **页面加载**：断言当前 Top Ability 为指定 Ability。
  - **布局**：断言存在 `Row` / `Column`（`ON.type('Row')` / `ON.type('Column')`）。
  - **控件**：对每个初始显示的文本断言存在（`ON.text('...')`、`assertComponentExist`）。
  - **动作**：对每个带 `onClick` 且会改变 `@State` 的控件，生成「findComponent → click → assertComponentExist(变化后文本)」用例。
- **框架**：使用 `@kit.TestKit` 的 `Driver`、`ON`、`abilityDelegatorRegistry`，以及 `@ohos/hypium` 的 `describe` / `it` / `expect`；常量从 `constant.ets` 引入（`TEST_FILTER`、`UI_DELAY_MS`）。

### 何时使用

- 用户说：「对 Index.ets 实现 UI 测试」「为页面生成 UITest」「根据页面控件和布局写 UI 单元测试」。
- 需要对 ArkUI 页面做自动化 UI 测试：页面加载、布局存在、控件存在、点击后状态/文案变化。

### 使用方式

```bash
# 必选：页面 .ets 文件、测试目录；可选：Ability 名、是否更新 List.test.ets
python3 src/skills/ohtest/uitest_gen.py \
  --ets /path/to/entry/src/main/ets/pages/Index.ets \
  --test-dir /path/to/entry/src/ohosTest/ets/test \
  [--ability-name EntryAbility] \
  [--no-update-list]
```

生成文件命名：`<StructName>Ui.test.ets`（如 `IndexUi.test.ets`），套件名为 `<StructName>UiTest`（如 `IndexUiTest`）。若 test 目录下已有 `constant.ets`，生成器会追加 `UI_DELAY_MS`（若缺失），与 dts 单元测试共用同一 constant 文件。

### 参照与限制

- **参照**：[HarmonyOS UITest 指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uitest-guidelines)、[arkXtest UiTest](https://www.seaxiang.com/blog/093bade094ba4c79bb42016a9e1efadc)（Driver.create、findComponent(ON.text)、click、assertComponentExist）。
- **限制**：解析基于简单正则，仅识别 `@State` 字符串、`Text(this.xxx)` / `Text('literal')`、`.onClick` 内 `this.xxx = 'yyy'` 及 `Row()` / `Column()`；复杂表达式或动态文本需生成后人工补充用例。

---

## 何时使用（dts 单元测试）

- 用户说：「根据 Index.d.ts 补全/生成单元测试」「为 libentry 接口写测试」「在 ohtest 里增加以 .d.ts 为对象的测试套」。
- 需要以 NAPI/TS 接口为对象，在 ohosTest 下快速生成符合规范的边界测试用例时。

## 使用方式（dts 单元测试）

```bash
# 必选：接口定义文件、测试目录；可选：模块名（默认 libentry.so）、是否更新 List.test.ets
python3 src/skills/ohtest/ohtest.py \
  --dts /path/to/entry/src/main/cpp/types/libentry/Index.d.ts \
  --test-dir /path/to/entry/src/ohosTest/ets/test \
  [--module libentry.so] \
  [--no-update-list]
```

生成文件命名：`<基名>.test.ets`，基名为接口文件名去掉特殊符号（如 `Index.d.ts` → `Indexdts`），故得 `Indexdts.test.ets`；套件名为基名+`Test`（如 `IndexdtsTest`），describe 与 export default function 分别为 `IndexdtsTest`、`indexdtsTest`。

## 参照模板

- 结构参照：`Ability.test.ets`（`export default function abilityTest()`、`describe('ActsAbilityTest', () => { ... })`、beforeAll/beforeEach/afterEach/afterAll、`it('assertContain', 0, () => { ... expect(...).assertEqual(...) })`）。
- 测试对象：来自 `Index.d.ts` 的导出接口（如 `add`），导入方式与工程一致（如 `import lib from 'libentry.so'`，调用 `lib.add(...)`）。
