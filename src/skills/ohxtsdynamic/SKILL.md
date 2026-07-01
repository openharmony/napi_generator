---
name: ohxtsdynamic
description: >-
  OpenHarmony 动态 ArkUI（@ComponentV2）Hypium XTS 一体化技能：常规 API 用例 +
  异常参数（undefined/null）编译探测与成对 Inspector 断言。配合 arkui-dynamic-xts-generator；
  SDK 用 normal（Dyn）。触发词：动态 XTS、ChipV2、ChipGroupV2、异常参数、undefined、null、
  AbnormalAssert、compile_probe、ohxtsdynamic。含 §九 多批次开发经验、§十/REPORTING.md 报告整合。
author: "napi_generator"
version: "1.4.0"
---

# ohxtsdynamic：动态 ArkUI XTS 一体化 Skill

面向 **`@ComponentV2`**、**`@Local`/`@Param`/`@Event`** 等 **V2 状态管理** 的高级组件 XTS（如 **ChipV2**、**ChipGroupV2**）。与 **ohxtsstatic** 互补：后者面向 **`'use static'`** + static SDK。

---

## 与 ohxtsstatic 的关键差异

| 项 | ohxtsstatic | **ohxtsdynamic（本 skill）** |
|----|-------------|------------------------------|
| SDK | `sdk-paths.conf` → static wrapper | **`sdk-paths.conf` → normal wrapper** |
| 切换命令 | `source /root/aiSkill/use-ohos-sdk.sh static` | **`source /root/aiSkill/use-ohos-sdk.sh normal`** |
| Hvigor | **`OHOS_USE_HVIGOR_STATIC=1`** → hvigor-static | **默认 hvigor**（勿设 static 变量） |
| 页面范式 | `'use static'` | **`@ComponentV2`**，无 `'use static'` |
| 生成器 | arkui-static-xts-generator | **arkui-dynamic-xts-generator**（须自行下载，见 **README.md**） |
| 编排脚本 | `ohxtsstatic/ohxtsflow.py` | **`ohxtsdynamic/ohxtsflow.py`** |

---

## ChipV2 / ChipGroupV2 当前工程（示例）

| 项 | 路径 |
|----|------|
| **提交代码仓** | `/root/aiSkill/develop/xts_acts_0622` |
| **模块工程** | `arkui/ace_ets_module_ui/ace_ets_module_advancedComponents/ace_ets_module_chip_nowear/` |
| **SDK（linux）** | `$OHOS_SDK_LINUX_NORMAL`（见 **`/root/aiSkill/sdk-paths.conf`**） |
| **ChipV2 文档** | `/root/aiSkill/docs/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ChipV2.md` |
| **ChipGroupV2 文档** | `/root/aiSkill/docs/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ChipGroupV2.md` |
| **在线文档** | [ChipV2](https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ChipV2.md) · [ChipGroupV2](https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ChipGroupV2.md) |

---

## 触发与默认推断

用户请求 **开发 / 补齐 / 完成** 与 **ChipV2 / ChipGroupV2 / 动态 XTS / `.test.ets`** 组合时，**默认全流程**：

1. 读 API 文档 + **arkui-dynamic-xts-generator** 归类（§〇）
2. 编写页面 + Hypium 用例 + 注册
3. **`ohxtsflow build-all` 或 `run-dynamic-pipeline`**
4. **`hdc` 可用则设备跑测**，会话内输出 **正式测试报告**（三列表格）
5. 多批完成后用户要求「更新报告」→ **§十** + **[REPORTING.md](REPORTING.md)**（汇总 HTML、未覆盖报告）

**例外**（须用户明说）：「只要编译」「不要 hdc」「只改某一文件」。

---

## 必备输入

| 要素 | 说明 |
|------|------|
| **SDK** | `source /root/aiSkill/use-ohos-sdk.sh normal`；`OHOS_SDK_PATH` → normal/26 |
| **HOS_CLT_PATH** | `$HOS_CLT_PATH`（**sdk-paths.conf**） |
| **接口文档** | 上表 docs 路径或 GitCode URL；**以 SDK `.d.ets` 为准** |
| **用例明细** | 待测 API / 属性 / 回调清单 |
| **工程根** | 含 `build-profile.json5`、`entry/` 的 HAP 模块 |
| **生成器** | **`arkui-dynamic-xts-generator/`**（**不内嵌**；从 [arkUISkill](https://gitcode.com/qq_44921954/arkUISkill) 下载后拷贝，见 **`arkui-dynamic-xts-generator/README.md`**） |

---

## 技能融合模型

| 层级 | 来源 |
|------|------|
| **Tier-0** | SDK `normal/26` 下 `.d.ets` |
| **Tier-1** | 本文 + **`compile_error_hints.md`** + **[abnormal-options-xts.md](abnormal-options-xts.md)**（异常参数） |
| **Tier-1.5** | **`arkui-dynamic-xts-generator/categories/*.md`** |
| **Tier-2** | **`arkui-dynamic-xts-generator/common/*.md`** |

**执行顺序**：§〇 归类 → 对齐工程范式 → 写页面 → 写用例 → 注册 → 编签 → 设备 → 报告。

---

## §〇 接口归类（与生成器一致）

读 **`arkui-dynamic-xts-generator/SKILL.md`** 中路由表，打开对应 `categories/` 文档后再编码。

---

## 一、动态 ArkUI 硬约束

**多批次开发经验**（路径、流程、异常范式）见 **§九**；写码前**先打开工程内已 Pass 的相近页面**复制骨架。

1. **页面**：`@Entry` + `@ComponentV2`；状态用 `@Local` / `@Param`；选项类用 `new ChipV2Options({...})` 等。
2. **导入**：`import { ChipV2, ChipV2Options, ... } from '@kit.ArkUI'`；Symbol 修饰器常来自 `@ohos.arkui.modifier`。
3. **禁止**在动态高级组件页使用 `'use static'`（除非工程另有统一要求）。
4. **Hypium**：`findComponent` + `click`；Inspector 链式读取；`expect` 内避免可选链（同 ohxtsstatic）。
5. **路由**：ACTS 工程常用 `router.pushUrl({ url: 'MainAbility/pages/chipV2/ChipV2Api1' })`，与 **`main_pages.json`** 一致。
6. **日志**：建议前缀 **`[ARKUI_DYN]`**。

---

## 二、文件路径（chip_nowear 工程）

| 类型 | 路径 |
|------|------|
| 预览页 | `entry/src/main/ets/MainAbility/pages/chipV2/*.ets` 或 `ChipGroupV2/*.ets` |
| 测试用例 | `entry/src/main/ets/test/chipV2/*.test.ets` 或 `ChipGroupV2Test/*.test.ets` |
| 页面注册 | `entry/src/main/resources/base/profile/main_pages.json` |
| 测试套注册 | `entry/src/main/ets/test/List.test.ets` |
| TestRunner | `TestRunner/OpenHarmonyTestRunner.ts` |

---

## 三、标准阶段流水线

### 阶段 0：环境

```bash
source /root/aiSkill/use-ohos-sdk.sh normal
unset OHOS_USE_HVIGOR_STATIC
# HOS_CLT_PATH 见 sdk-paths.conf
python3 /root/aiSkill/.claude/skills/ohxtsdynamic/ohxtsflow.py env
hdc list targets
```

### 阶段 1：编码

按 **arkui-dynamic-xts-generator** 流程：**先对齐工程内已稳套件** → 写页面 → 写 `.test.ets` → 更新 `main_pages.json` 与 `List.test.ets`。细则见 **§九**。

### 阶段 2～4：编签与设备

**签名（必须先做）**：

```bash
source arkui/ace_ets_module_ui/ace_ets_module_advancedComponents/signing-materials/env.sh
source /root/aiSkill/use-ohos-sdk.sh normal
unset OHOS_USE_HVIGOR_STATIC
```

| 变量 | 要求 |
|------|------|
| `OHOS_HAPSIGNER_RESULT` | 指向 **`signing-materials/`** 等独立源目录 |
| 工程 `autosign/` | 签名**工作目录**，会被 sign 清空，**禁止**作为源 |

```bash
CHIP=/root/aiSkill/develop/xts_acts_0622/arkui/ace_ets_module_ui/ace_ets_module_advancedComponents/ace_ets_module_chip_nowear

# 编签（主包 + ohosTest + 签名）
python3 /root/aiSkill/.claude/skills/ohxtsdynamic/ohxtsflow.py build-all "$CHIP"
ls entry/build/default/outputs/default/entry-default-signed.hap
ls entry/build/default/outputs/default/entry-default-unsigned.hap   # 主包
# ohosTest 测试包路径以 hvigor 产出为准

# 一键：构建 → 装包 → unittest 设备命令
python3 /root/aiSkill/.claude/skills/ohxtsdynamic/ohxtsflow.py run-dynamic-pipeline "$CHIP" --timeout 60000
```

**新批次验证：优先只跑本批套件**（避免 List 中既有用例失败误判新用例）：

```bash
python3 /root/aiSkill/.claude/skills/ohhdc/ohhdc.py deploy-test "$CHIP" \
  --module entry_test --class YourNewSuiteTest --timeout 300000
```

异常参数批次：`tools/run_abnormal_device_test.sh`（**clean 卸载**旧包后再跑）。

设备日志：`python3 /root/aiSkill/.claude/skills/ohhdc/ohhdc.py hilog --grep '[ARKUI_DYN]'`

### 阶段 5：正式测试报告（会话必选 + HTML）

与 ohxtsstatic 相同：**三列表格**（用例名称｜Pass/Fail｜设计思路 ≤5 句），附环境、命令、`OHOS_REPORT_RESULT` 汇总。

**HTML 可视化（推荐）**：`deploy-test` / `run-dynamic-pipeline` 结束后自动输出 `REPORT_HTML=...`，浏览器打开 `summary_report.html`（XTS 风格汇总 + 用例明细表）。

```bash
python3 ohxtsdynamic/ohxtsflow.py deploy-test "$CHIP" \
  -m entry_test -s CounterV2AbnormalOptionsTest --timeout 300000

# 仅由已有日志生成
python3 ohxtsdynamic/ohxtsflow.py gen-hypium-report /tmp/unittest_device.log \
  --project "$CHIP" --suite CounterV2AbnormalOptionsTest
```

报告目录（默认，不进 git）：

`/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/xts_reports/hypium/<工程>_<套件>_<时间>/summary_report.html`

多 HAP 批次加 `--batch recent_chip` 会额外写 `batch_index.html`。

---

## 四、已有覆盖与待补（Chip V2）

**ChipV2 已有**：Api1、Action/Action2、OnClick、OnClose/OnClose2、CloseOptions、Direction、FontSize/FontScale、Padding、BackgroundSystemMaterial、localizedLabelMargin、accessibilitySelectedType、Page。

**ChipGroupV2 已有**：StartSpace、EndSpace、ItemSpace、IconItemOptions(×2)、SymbolItemOptions。

**常见待补**（按文档优先级）：`enabled`/`activated`、`multiple`/`onChange`、`itemStyle`、`chipGroupPadding`、`suffix`/`ChipGroupV2IconGroupSuffix`、`ChipGroupV2Api1`、`activatedBackgroundSystemMaterial` 等。

---

## 五、子技能委托

| 能力 | 脚本 |
|------|------|
| 编签 | `ohhap/hapbuild.py` |
| 设备安装 / unittest 设备命令 | `ohhdc/ohhdc.py` |
| 编排 | **`ohxtsdynamic/ohxtsflow.py`** |

---

## 六、批次清单模板 `xts-batch-manifest.yaml`

```yaml
sdk:
  variant: normal
  api_level: 26
  linux_path: "${OHOS_SDK_LINUX_NORMAL}"  # sdk-paths.conf
docs:
  - title: ChipV2
    path: "/root/aiSkill/docs/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ChipV2.md"
  - title: ChipGroupV2
    path: "/root/aiSkill/docs/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ChipGroupV2.md"
project:
  repo: "/root/aiSkill/develop/xts_acts_0622"
  module: "arkui/ace_ets_module_ui/ace_ets_module_advancedComponents/ace_ets_module_chip_nowear"
cases: []
```

---

## 七、限制

1. **Wearable** 上 ChipV2/ChipGroupV2 按文档会异常；本工程为 **nowear**。
2. 自动修代码依赖 Agent；脚本只保证命令可调用。
3. API 与 `compileSdkVersion: 26` 不一致时先对齐工程再编。

---

## 八、异常参数 XTS（undefined / null）

用户提及 **异常参数、undefined、null、编译矩阵、AbnormalAssert** 时，**必须先读** **[abnormal-options-xts.md](abnormal-options-xts.md)**。

### 8.1 铁律

| 规则 | 说明 |
|------|------|
| **null** | 实测 **全部编译失败** → **不写** Hypium 跑测用例 |
| **undefined** | 仅 **编译通过** 的属性写成对 default/undefined 页面 + 用例 |
| **断言** | **§2.1 单属性** `assertPropSame`；禁止整段 `$attrs` JSON 对比 |
| **包拆分** | `AbnormalInspectorHelper`（主包）/ `AbnormalAssertHelper`（测试包，`expect`） |
| **编译结论** | 禁止「推断」；在**仓库外** `chip_nowear/` 跑 `compile_probe_matrix.py` |

### 8.2 模块内关键路径（chip_nowear）

| 项 | 路径 |
|----|------|
| 生成脚本 | **仓库外** `xts_acts_local_tools/xts_acts_0622/chip_nowear/`（勿提交模块内 `tools/`） |
| 编译矩阵 | 同上 → `abnormal_compile_matrix.xlsx` |
| 设备跑测 | 仓库外 `chip_nowear/run_abnormal_device_test.sh`（或模块内副本，均不提交） |
| 失败归档 | 仓库外 `chip_nowear/abnormal_compile_failures.md` |

### 8.3 默认流程（异常参数）

1. 读 API + 归类待测属性 → 生成器出页面/用例
2. **`ohxtsflow build-all`** 编签
3. 需矩阵时跑 **`compile_probe_matrix.py`**（约 30min）
4. **`run_abnormal_device_test.sh`**（clean 卸载旧包后跑，避免假失败）
5. **全 Pass 后再 commit**；输出三列表格报告

### 8.4 探测页易错点（摘要）

- ChipV2 探测**必须带 `label`**（除测 label 本身）
- ChipGroupV2 对象字面量**属性间逗号**；Item **勿重复 label**
- 批量同文件探测会误判 → **逐条单独编译**才可用于 Excel 矩阵

详见 **[abnormal-options-xts.md](abnormal-options-xts.md)** 与 **`compile_error_hints.md` §4**。

### 8.5 CounterV2（动态，已落地）

| 项 | 路径 / 结论 |
|----|-------------|
| 工程 | `ace_ets_module_counter` |
| 编译矩阵 | `tools/abnormal_compile_matrix.xlsx`（**实测** null 35/35 失败，undefined 35/35 通过） |
| 跑测 | 35 条 undefined，`run_abnormal_device_test.sh` |

### 8.6 CounterV2 静态（待开发）

工程 `ace_ets_module_advance_counter_static`；准备清单见工程内 **`tools/STATIC_ABNORMAL_PREP.md`**。须用 **static SDK + 单独 compile_probe**，禁止沿用动态矩阵结论。

---

## 九、多批次开发经验（动态 XTS）

汇总 **chip_nowear / counter / 异常参数** 等批次**可复用开发做法**与**踩坑**。异常参数细节另见 **[abnormal-options-xts.md](abnormal-options-xts.md)**。

### 9.1 标准开发流程（每批必走）

```
读 API 文档 + SDK .d.ets（normal/26）
  → arkui-dynamic-xts-generator §〇 归类
  → 对齐工程内已 Pass 的相近套件（路由、Options 构造、断言形态）
  → 写 @ComponentV2 预览页 + *.test.ets（单 it 单点）
  → main_pages.json + List.test.ets 注册
  → source signing-materials/env.sh → unset OHOS_USE_HVIGOR_STATIC
  → ohxtsflow build-all（主包 + ohosTest + 签名）
  → deploy-test --class 只跑本批 / run_abnormal_device_test.sh
  → 会话三列表格报告 + OHOS_REPORT_RESULT
  →（用户要求时）commit -sm
```

**常规 API 与异常参数分两路**：常规属性走独立预览页 + Inspector/点击断言；异常 undefined 走成对页 + `AbnormalAssertHelper`（**禁止**混在同一 `it` 里验多个无关属性）。

### 9.2 工程路径与命名（chip_nowear）

**本地工具（仓库外）**：`/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/chip_nowear/`  
新建仓库内 `tools/` 须：`bash .../init_local_tools_dir.sh <path>`

| 类型 | 路径 |
|------|------|
| 常规预览页 | `entry/src/main/ets/MainAbility/pages/chipV2/*.ets`、`ChipGroupV2/*.ets` |
| 异常成对页 | `.../pages/chipV2/abnormal/*.ets`、`ChipGroupV2/abnormal/*.ets` |
| 测试用例 | `entry/src/main/ets/test/chipV2/*.test.ets`、`ChipGroupV2Test/*.test.ets` |
| Inspector 辅助 | `entry/.../MainAbility/common/AbnormalInspectorHelper.ets`（主包，无 expect） |
| 断言辅助 | `entry/.../test/common/AbnormalAssertHelper.ets`（测试包） |
| 生成脚本 | `tools/gen_abnormal_phase{1..4,6_all}.py` |
| 编译矩阵 | `tools/compile_probe_matrix.py` → `abnormal_compile_matrix.xlsx` |

**命名**：

| 场景 | id / 用例 |
|------|-----------|
| 异常 default / undefined | `abn_{suffix}_d` / `abn_{suffix}_u` |
| 异常用例 id | `SUB_ARKUI_CHIPV2_ABN_{属性}_UNDEFINED_0100` |
| 常规用例 id | `SUB_ARKUI_API_{套件名}_0100` 或与工程既有风格一致 |

**版权**：新增文件 **Kaihong** 头；**无** `'use static'`。

### 9.3 页面开发范式（@ComponentV2）

- **状态**：`@Entry` + `@ComponentV2`；字段用 `@Local` / `@Param`；选项 `new ChipV2Options({...})`
- **导入**：`import { ChipV2, ChipV2Options, ... } from '@kit.ArkUI'`；Symbol 修饰器常来自 `@ohos.arkui.modifier`
- **对齐范本**：开发前打开同目录已 Pass 页面（如 `ChipV2Api1.ets`、`ChipV2AbnormalOptions.ets`），**复制骨架再改**
- **路由**：`router.pushUrl({ url: 'MainAbility/pages/chipV2/...' })` 与 `main_pages.json` 一致
- **日志**：`[ARKUI_DYN]` 前缀

**异常成对页要点**：

- 同页并列 default（省略可选字段）与 undefined（显式 `undefined`）样本
- ChipV2 探测页**必须带 `label`**（测 label 本身除外）
- ChipGroupV2 字面量注意属性间**逗号**；Item **勿重复 label**
- **禁止 null**（编译全拒）

### 9.4 常规 API 用例范式

```typescript
beforeEach → router.clear() + pushUrl + CommonFunc.sleep(2000)
afterEach  → hilog / 清理 AppStorage
it         → driver.findComponent(ON.id(...)).click() 或 Inspector 链式读属性
```

- 每条 `it` 对应明细表**一行**或文档**一个验收点**
- `@tc.name` / `@tc.number` / `@tc.desc` / `@tc.level` 与 `it` 标题一致
- 回调类：页面 `AppStorage.setOrCreate` 出口，用例读回断言
- 动效类：只验 **结束态** 属性，不做帧级断言

### 9.5 异常参数开发范式

| 步骤 | 动作 |
|------|------|
| 1 | 读 API，列出 Options 可选字段 |
| 2 | `compile_probe_matrix.py` 逐条编译 → **禁止推断** null/undefined 能否编过 |
| 3 | 仅对 **undefined 编译通过** 项：`gen_abnormal_phase*.py` 或手写成对页 |
| 4 | 每条属性一条 `it`，`assertPropSame` / `assertChildrenSame` / `assertSystemMaterialSame` / `assertSmoke` 按类型选型 |
| 5 | `run_abnormal_device_test.sh`（**clean 卸载**）全 Pass 后再 commit |

**断言铁律**：单属性 `assertPropSame`；**禁止**整段 `$attrs` JSON 对比。

**动态 undefined 编译失败典型项**（只归档）：ChipV2 `label`/`label.text`/`prefixIcon.src`/`suffixIcon.src`；ChipGroupV2 `items` 及子字段、`chipGroupPadding.top/bottom`。

**CounterV2 动态**：35/35 undefined 可编译；静态版须 **单独** compile_probe，禁止沿用动态矩阵。

### 9.6 编签与设备（含踩坑）

```bash
source arkui/.../signing-materials/env.sh
source /root/aiSkill/use-ohos-sdk.sh normal && unset OHOS_USE_HVIGOR_STATIC
python3 ohxtsdynamic/ohxtsflow.py build-all <chip_nowear>
```

| 踩坑 | 预防 |
|------|------|
| 动态工程残留 `OHOS_USE_HVIGOR_STATIC=1` | 编签前 `unset` |
| 签名源指工程 `autosign/` | 必须 `signing-materials/` |
| 异常批次假失败 | `run_abnormal_device_test.sh` clean 卸载 |
| 全量 List 失败误判新用例 | `deploy-test --class SuiteName` |

### 9.7 CodeCheck、Git 与提交纪律

**CodeCheck**：`@Trace public`；单行 ≤ 120 字符。

**禁止默认提交**：`advancedComponents` 下所有 `tools/` 目录由根 `.gitignore` 整目录忽略；脚本/报告只放 `xts_acts_local_tools/`。**不确定是否该提交时必须先问用户**，不得与用例混 commit。

**提交前自检**：

```
[ ] 单笔 commit 变更行数（+/- 合计）≤ 2000
[ ] 未 git add tools/xts_reports、*.xlsx 等本地报告
[ ] 存疑路径已获用户确认
[ ] git commit -sm；禁止 git add -A
```

### 9.8 交付前自检（设备）

```
[ ] source signing-materials/env.sh；normal SDK；unset OHOS_USE_HVIGOR_STATIC
[ ] build-all：主包 + 测试包 signed HAP
[ ] 本批 deploy-test Pass（OHOS_REPORT_RESULT）
[ ] 异常：compile_probe 结论与跑测一致
[ ] 会话三列表格报告
```

### 9.9 已验证样例（可直接对照）

| 类型 | 页面 | 套件 | 要点 |
|------|------|------|------|
| 异常 Options | `chipV2/abnormal/ChipV2AbnormalOptions.ets` | `ChipV2AbnormalOptions.test.ets` | `assertPropSame` / `assertChildrenSame` |
| 异常 SystemMaterial | 动态 `ChipV2AbnormalOptions` 内 `abn_bgSysMaterial_*` | `SUB_ARKUI_CHIPV2_ABN_BGSYSMATERIAL_UNDEFINED_0100` | `assertSystemMaterialSame` |
| CounterV2 异常 | `CounterV2/abnormal/CounterV2Abnormal*.ets` | `CounterV2Abnormal*Test` | 35 条 undefined 全 Pass |

---

## 十、报告与覆盖率整合（2026-06）

动态与静态共用本地报告工具链，详见 **[REPORTING.md](REPORTING.md)**（与 `ohxtsstatic/REPORTING.md` 内容一致，静态章节可跳过）。

### 三层交付（与 ohxtsstatic 对齐）

| 层级 | 动态侧要点 |
|------|------------|
| **Tier-1** | 每批 `deploy-test -s <Suite>` 后会话三列表格 |
| **Tier-2** | `ohxtsdynamic/ohxtsflow.py deploy-test` → `REPORT_HTML=...` |
| **Tier-3A** | `gen_xdevice_summary_report.py` 增加 `chip_nowear:ChipV2AbnormalOptionsTest:...` 等条目 |
| **Tier-3B** | `gen_uncovered_report.py` 更新动态 Counter/ChipV2 未覆盖矩阵 |

### 动态专项

- **异常批次**：`run_abnormal_device_test.sh`（clean 卸载）全 Pass 后再纳入 Tier-3。
- **compile_probe**：禁止沿用静态矩阵；CounterV2 动态 35/35 undefined 可编译须单独探测记录。
- **PR 整测**：`run_pr_batch_report.sh` 中动态项用 `ohxtsdynamic/ohxtsflow.py deploy-test`。

**本地工具根**：`/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/`（不进 develop 仓 Git）。

**提交**：遵循 **xts-git-commit**；报告脚本/HTML 默认不 commit。
