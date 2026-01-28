---
name: ohtest
description: "OpenHarmony 单元测试补全技能。根据 .d.ts 接口定义，在 ohosTest 的 test 目录下生成完整测试套：以接口文件名为套件名（去掉特殊符号+Test，如 Index.d.ts → IndexdtsTest），包含 beforeAll/beforeEach/afterEach/afterAll，并为每个接口方法生成 4 类边界用例（正常值、最大值、最小值、异常/压力），使用 expect 断言返回值与预期一致。"
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

## 何时使用

- 用户说：「根据 Index.d.ts 补全/生成单元测试」「为 libentry 接口写测试」「在 ohtest 里增加以 .d.ts 为对象的测试套」。
- 需要以 NAPI/TS 接口为对象，在 ohosTest 下快速生成符合规范的边界测试用例时。

## 使用方式

```bash
# 必选：接口定义文件、测试目录；可选：模块名（默认 libentry.so）、是否更新 List.test.ets
python3 .claude/skills/ohtest/ohtest.py \
  --dts /path/to/entry/src/main/cpp/types/libentry/Index.d.ts \
  --test-dir /path/to/entry/src/ohosTest/ets/test \
  [--module libentry.so] \
  [--no-update-list]
```

生成文件命名：`<基名>.test.ets`，基名为接口文件名去掉特殊符号（如 `Index.d.ts` → `Indexdts`），故得 `Indexdts.test.ets`；套件名为基名+`Test`（如 `IndexdtsTest`），describe 与 export default function 分别为 `IndexdtsTest`、`indexdtsTest`。

## 参照模板

- 结构参照：`Ability.test.ets`（`export default function abilityTest()`、`describe('ActsAbilityTest', () => { ... })`、beforeAll/beforeEach/afterEach/afterAll、`it('assertContain', 0, () => { ... expect(...).assertEqual(...) })`）。
- 测试对象：来自 `Index.d.ts` 的导出接口（如 `add`），导入方式与工程一致（如 `import lib from 'libentry.so'`，调用 `lib.add(...)`）。
