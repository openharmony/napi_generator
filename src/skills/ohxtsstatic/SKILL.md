---
name: ohxtsstatic
description: "OpenHarmony ArkTS use static + Hypium XTS 一体化技能：三要素 + 工程根；**会话正式测试报告**须含**三列表格**（用例名称｜Pass/Fail｜**非开发也能懂的设计思路**，≤5 句/格），见「正式测试报告」。默认全流程与触发见「触发与默认推断」。ohxtsflow/ohhdc/analyze-test-log、arkui-static-xts-generator。"
author: "napi_generator"
version: "1.10.0"
---

# ohxtsstatic：ArkTS **`use static`** + Hypium 静态 XTS **一体化** Skill

本目录提供**可独立入仓**的完整工作流：**不是**「主 SKILL + 旁边外挂一份生成器」的简单合并，而是 **同一套流水线**——先按 ArkUI 六类 **选对测试范式**，再按 ohxtsstatic **硬约束** 落地页面与 Hypium，最后走 **ohhap/ohhdc** 闭环。

**规范与速查**：主文 **`SKILL.md`** + **`compile_error_hints.md`**；**测试设计细则**须从 **[arkUISkill（GitCode）](https://gitcode.com/qq_44921954/arkUISkill)** 下载 **`arkui-static-xts-generator`** 放到本 skill 下（见 **`arkui-static-xts-generator/README.md`**），再阅读其中 **`categories/`**、**`common/`**，其角色见下文 **「技能融合模型」**，服从 **SDK 与本文优先**。

**本 skill 不实现 hvigor / hdc 协议**，由 **ohhap**、**ohhdc**、**ohproj**、**ohtest** 执行；**`ohxtsflow.py`** 串联阶段命令。**输入始终以「三要素 + 工程根」为准**；`common/` 中的 **示例路径**（如 `MainAbility/pages`）仅作模板参考，**以目标工程真实目录为准**。

---

## 触发与默认推断（Agent 必读）

**不是能力设置遗漏，而是执行纪律**：全文 **DoD**、**正式测试报告**、**§六** 已定义「开发完成」的边界；若某次只写了代码未跑设备/未出报告，**视为未按本 skill 执行完毕**，应在**同一会话补做**或下一回复补做，**不应**要求用户换一种说法才触发全流程。

### 用户需要额外说明吗？

**不需要。** 凡用户请求中出现 **开发 / 编写 / 实现 / 补齐 / 完成 / 重做** 与 **用例 / 测试 / Hypium / 静态 XTS / XTS 批次 / `.test.ets`** 等组合（或自然语言等价表述），**默认即**要求本 skill 的 **全流程**：**编码 → 编签 →（`hdc` 可用则）设备跑测 → 失败则调试迭代 → 会话内「正式测试报告」**。用户**不必**再写「请测试」「请调试」「请给报告」。

### 唯一例外（须用户显式说明）

仅当用户**明确**说清以下之一时，Agent 可**不跑设备**或**只做编译**（仍须在报告中写明阶段与原因）：

- 「只要编译」「只编过就行」「不要跑设备 / 不要 hdc」  
- 「本机无开发板 / 无 hdc」（则设备阶段 Skip，**报告必填**）  
- 「只改接口不改测」等范围收缩（须在回复中确认范围）

**未出现上述例外 → 禁止**停在「只提交源码/只 hapbuild」并宣称完成。

### Agent 默认执行顺序（不可跳步）

1. **§〇～§二**：设计、页面、Hypium、入口注册。  
2. **`ohxtsflow build-all` 或 `hapbuild`**：编签至成功。  
3. **`hdc list targets`**：若非空 → **`run-static-pipeline` 或 `static-device-test`**（参数见 **ohhdc/SKILL.md**）。  
4. **失败**：根据 stdout / hilog / `analyze-test-log` 改代码，重复 2～3，直至通过或阻塞已记录。  
5. **同一会话回复**：按 **「正式测试报告」** 节输出 **核心三列表格**（用例名称｜Pass/Fail｜设计思路）及后续小节（不得只丢 log 路径）。

---

## 用例开发「完成」定义（DoD）

在本 skill 语义下，**「开发用例」= 端到端交付**，**不是**只提交 `.ets`、**也不是**「本地能编过」即收工。**仅完成编译签包，不算开发全流程完成。**

**开发全流程必须包含**（在 **`hdc` 可用**的前提下，Agent 应实际执行；不可用则单独一节说明阻塞，见下）：

1. **自动跑设备用例**：**`run-static-pipeline`** 或 **`static-device-test`**（或与设备侧 **应用测试** 命令 **`aa`** + **`test`** 等价流程），使本批次 Hypium 在设备上执行。  
2. **抓 log**：保留 **应用测试子命令标准输出**（含 `OHOS_REPORT_*`）；必要时配合 **`ohhdc` 附带的 hilog 摘录**、`hilog --grep '[ARKUI_NEW]'`。  
3. **迭代调试**：若失败，根据日志与 **`analyze-test-log`** 修改页面/用例，重复 **编签 → 设备**，直至通过或明确不可达原因。  
4. **正式测试报告（会话交付物）**：在**当前对话的回复中**输出结构化报告，**禁止**仅以「请打开某某 log 文件」作为唯一交付；log 文件路径只能作为**附录**，主交付物必须是**下文「正式测试报告」**中的 **三列表格**（用例名称｜Pass/Fail｜设计思路）及汇总等。

| 阶段 | 须达成 | 未达成则**不算完成** |
|------|--------|----------------------|
| 设计 | **§〇** 归类，打开对应 **`categories/*.md`**，检查点 → 页面出口 → 断言可追溯 | 无归类、文档与代码脱节 |
| 实现 | 预览页 + **`*.test.ets`** + **`List.test.ets`（或工程入口）注册** | 仅有页面或仅有用例 |
| 编译签包 | **`ohhap` / `ohxtsflow build-all` 成功**，产出可安装 HAP（含签名约定） | 未走工具链、仅 IDE 无红杠 |
| 设备执行 | **`hdc` 可用**时跑 **`static-device-test`** 或 **`run-static-pipeline`**，设备应用测试对本批次 **全部通过** | **仅编译通过从未装包跑测** |
| 调试闭环 | 失败时抓 log、**`analyze-test-log`**、对照 **compile_error_hints / ohhdc SKILL** 改代码并重跑 | 失败后不迭代 |
| **会话报告** | 按 **「正式测试报告」** 输出 **三列表格**（用例名称｜Pass/Fail｜设计思路）+ 汇总 | **无表格、或仅有 log 路径** |

**无设备或环境阻塞时**：须在本节语义下明确写出 **阻塞原因**、**已完成的阶段**、**复测命令**；仍须在会话中给出**结构化报告**（结果列为「跳过 / 未执行」），不得宣称「开发已完成」。

**执行约定**：用户说「开发 / 完成某批用例」时，Agent **默认按 §六 阶段 0→5 推满**；最小设备闭环为 **`run-static-pipeline <工程>`**（或 **`build-all` + `static-device-test`**）。

---

## 正式测试报告（会话中输出，必选）

**性质**：面向用户与评审的**结论**，必须在 Agent **回复正文**中写出；**不是**仓库里新增一个未打开的 `.md` / `.log` 路径了事。

### 核心主表（必选，Markdown 表格）

**每一轮设备跑测结束后**，须在会话中给出下表（**可**在表前用两三行写环境/命令；**主交付物是本表**）。列含义如下：

| 列 | 要求 |
|----|------|
| **用例名称** | 与 Hypium 中 `it` / `@tc.name` 一致（或用户可读的完整标题）。 |
| **测试结果** | 仅填 **Pass**、**Fail** 或 **Skip**（未跑设备时）。 |
| **用例设计思路** | **简明精要，同一格内不超过 5 句话**；**面向非程序员**：用日常语言说明「测什么、为什么这样测、怎样算通过」；避免堆砌 API 名，必要时用「界面上的按钮/提示」代替类名。**失败**时在本格末尾用一两句写现象（不必抄整段 log）。 |

**示例（格式示意）：**

| 用例名称 | 测试结果 | 用例设计思路 |
|----------|----------|----------------|
| SUB_xxx_page_loads_0100 | Pass | 打开本批次预览页后，检查标题是否在屏幕上。通过表示路由与页面能正常显示，用户能看到本批测试入口。 |
| SUB_xxx_api_0200 | Fail | 点击「执行」后应出现成功标记。当前未出现，可能页面未刷新或接口未调用成功。 |

**禁止**：用「见代码」「自己看 log」代替「设计思路」列；禁止整表只有两列、缺少「设计思路」。

### 报告其余部分（在核心主表之后，按需）

1. **环境摘要**（列表，可极短）  
   - `hdc` 目标、工程路径、`OHOS_SDK_PATH` / `OHOS_USE_HVIGOR_STATIC` 一行即可。  

2. **执行命令**（代码块）  
   - 完整可复制的 `run-static-pipeline` / `static-deploy-test` / 设备应用测试命令（`aa` + `test`）。  

3. **阶段结果**（列表）  
   - 编签：通过/失败；设备：通过/失败/跳过。  

4. **汇总行**（一行）  
   - 设备输出：`OHOS_REPORT_RESULT: Tests run: n, Failure: x, Pass: y, ...`  

5. **日志要点**（列表 3～10 条）  
   - 提炼自 stdout / `analyze-test-log`；**不**整段粘贴万行。  

6. **迭代说明**（若有多轮）  
   - 第几轮、改了什么、重跑结果。  

7. **附录（可选）**  
   - 完整 log 文件路径 — **不得替代核心主表**。  

**与工具的关系**：`analyze-test-log` 用于提炼失败原因，填入 **Fail** 行的「设计思路」末尾或第 5 节；**用户第一眼应看到核心主表三列**。

---

## 何时使用（触发条件）

- 用户给出 **SDK / API Level**（或 `compileSdkVersion`、`ets/static` 在本机的路径）；
- 用户给出 **用例明细**（组件、属性、场景、批次表）；
- 用户给出 **接口说明文档**（官方 docs 或内网 mirror）；
- 工程为 **HAP + entry + ohosTest**，页面 **`'use static'`**，需 **设备上 Hypium** 跑通。
- **触发即全流程**：见 **「触发与默认推断」**；**不要**等用户再说「测试」「报告」。

---

## 必备输入（三要素 + 工程）

| 要素 | 说明 | 优先级 |
|------|------|--------|
| **SDK** | 与 `build-profile.json5` 一致；本机 **`HOS_CLT_PATH`**、**`OHOS_SDK_PATH`**；类型与 API **只以 `.d.ets` 为准** | P0 |
| **Hvigor（静态 XTS 专用）** | 开发 **`use static` + Hypium** 的静态用例工程时，须使用与 **`arkTSVersion` / `compileSdkVersion`** 匹配的 **hvigor**（通常独立于默认 **`hvigor/bin`**）。将 **`hvigor-static`** 置于 **`$HOS_CLT_PATH/hvigor-static/`**，入口为 **`bin/hvigorw.js`**。编译编排（**`ohhap` `hapbuild`** / **`ohxtsflow build-all`**）前执行：**`export OHOS_USE_HVIGOR_STATIC=1`**；或 **`export OHOS_HVIGORW_JS=<hvigorw.js 完整路径>`**（优先级最高）。未设置时仍使用默认 **`$HOS_CLT_PATH/hvigor/bin/hvigorw.js`**。 | P0（静态批次） |
| **接口文档** | 语义、约束、推荐用法；**不能**替代 SDK；**不能**据此发明文档未写的 API | P0 |
| **用例明细** | 清单 → 映射到「预览页 `.ets` + `.test.ets`」并在 **`List.test.ets`**（或工程约定入口）注册 | P0 |
| **工程根** | 含 `build-profile.json5`、`entry/`、`AppScope/` | P0 |
| **`arkui-static-xts-generator/`** | **测试范式资料层（第 1.5 / 第 2 层）**：目录内 **`categories/`**、**`common/`**、**`SKILL.md`** 应与 **[arkUISkill（GitCode）](https://gitcode.com/qq_44921954/arkUISkill)** 仓库中 **`arkui-static-xts-generator`** 保持同步；本仓在 `ohxtsstatic/arkui-static-xts-generator/` 下另附 **`README.md`**（集成说明）。若你持有其它副本（例如本机下载的 zip），请与官方对比后再合并，对比方式见 **`/root/aiSkill/_compare_upload/README.md`**。 | P0 |

**可选**：用户可在业务工程内维护更长的内部规范文档；**非阅读前置条件**，本 skill 已覆盖日常开发与排障所需条款。

---

## 技能融合模型：分层协作与优先级（一体化）

将 **ohxtsstatic 工程经验** 与 **ArkUI 静态 XTS 六类范式** 合成 **一条流水线**，冲突时按下表 **自上而下** 裁决，**禁止**用分类文档推翻 SDK 或未经验证的臆造 API。

| 层级 | 来源 | 职责 |
|------|------|------|
| **第 0 层（L0）** | **SDK `.d.ets`** | 能否编译、签名、类型；**最终以本列为准** |
| **第 1 层（L1）** | 本文 **§一～五**、**`compile_error_hints.md`** | `use static` + Hypium/UiTest **硬约束**、多机布局、隔离、日志、路由 |
| **第 1.5 层（L1.5）** | **`arkui-static-xts-generator/categories/*.md`** | **测什么、怎么验收**：核心思路、检查点、验证方法（按接口 **§〇** 选篇） |
| **第 2 层（L2）** | **`arkui-static-xts-generator/common/`**（`import` / `ets_rules` / `test_rules`） | **书写细则**：显式导入参考、页面与用例骨架、**`@tc.*` JSDoc**；与第 0 / 第 1 层冲突时 **服从第 0 / 第 1 层** |

**一体化执行顺序（五步；第 1 步为设计，不可跳过）**

1. **§〇**：接口 **归类 → 打开对应 `categories` 文档**，明确检查点与验证方法（写入 **§ 九 `arkui_category`（推荐）**）。  
2. **§二 A**：在工程内找 **同类已稳套件**，对齐路由与生命周期。  
3. **§二 B + `ets_rules`**：页面只负责 **可观测状态**（id、AppStorage 出口、§ 三布局）；落实 §〇 的 **页面侧**检查点。  
4. **§二 C + `test_rules`**：用例落实 §〇 的 **验证方法**；叠加本文 **§一.3**、**§四**。  
5. **§二 D + §六～七**：自检、**build-all / 签包**、**设备安装与设备端应用测试**、**抓 log 与迭代**；在会话中输出 **「正式测试报告」**（**三列表格**为主，见专节）；静态 XTS 多为 **`static-device-test` / `run-static-pipeline`**。

---

## 〇、接口归类与测试设计（流水线第 1 步）

**目的**：在写代码前选定 **`categories/`** 文档，固定 **断言形态**（Inspector 属性、回调/AppStorage 标志、导航可达性、动效 **终态** 等），避免页面写完再改测法。

### 快速路由表（从「验证目标」到文档）

| 接口主要验证什么 | 大类 | 优先打开的 `categories/` 子文档 |
|------------------|------|----------------------------------|
| 构造参数 / 实例是否在树内 | **1** | `1-组件创建型API/1.1-构造方法.md` |
| `promptAction` 等上下文弹窗 | **1** | `1.2-通过上下文调用弹窗.md` |
| 属性值、禁用/焦点、动态属性、绑定气泡 | **2** | `2.1`～`2.4` 按语义选 |
| 触摸/按键/鼠标等输入 | **3** | `3.1-基本输入事件.md` |
| 点击/拖拽等交互 | **3** | `3.2-交互响应事件.md` |
| 尺寸/挂载卸载等组件变化 | **3** | `3.3-组件变化事件.md` |
| `aboutToAppear` 等生命周期 | **3** | `3.4-生命周期触发.md` |
| `@State`/`@Link`/存储/`@Watch` | **4** | `4.1`～`4.3` |
| 页面上下文系统能力 / 纯函数能力 / 控制器 / 导航 / FrameNode | **5** | `5.1`～`5.5` |
| 动画/过渡/路径（XTS：**不 crash + 结束后属性/状态**） | **6** | `6.1`～`6.3` |

**组合场景**：若 **属性 + 事件** 同时出现，一般以 **事件驱动的可观测出口**（类 3）为主线，属性作 **辅助断言**；**类 6** 不做帧级断言，以分类文档与 SDK 能力为界。

### 六大类目录索引（相对 `arkui-static-xts-generator/categories/`）

| 类 | 目录 | 子文档 |
|----|------|--------|
| 1 组件创建型 API | `1-组件创建型API/` | `1.1-构造方法.md`、`1.2-通过上下文调用弹窗.md` |
| 2 属性 API | `2-属性API/` | `2.1-基础属性.md`、`2.2-交互属性.md`、`2.3-动态属性设置.md`、`2.4-弹窗控制.md` |
| 3 回调类事件 | `3-回调类事件/` | `3.1-基本输入事件.md`、`3.2-交互响应事件.md`、`3.3-组件变化事件.md`、`3.4-生命周期触发.md` |
| 4 状态管理装饰器 | `4-状态管理装饰器/` | `4.1-状态管理装饰器.md`、`4.2-应用程序的数据存储能力.md`、`4.3-状态变量变化监听.md` |
| 5 扩展能力 API | `5-其他能力API/` | `5.1-页面绑定型系统能力.md`、`5.2-独立型系统能力.md`、`5.3-基础控制器.md`、`5.4-导航类API.md`、`5.5-FrameNode.md` |
| 6 动效类 API | `6-动效类API/` | `6.1-属性动画.md`、`6.2-布局过渡.md`、`6.3-路径与运动.md` |

**读完分类文档后的产出**：用 1～3 条 **检查点** + 对应 **验证方法**（可记在 MR 或 `xts-batch-manifest.yaml` 的 `focus` 旁）；再进入 **§二** 动键盘。

**路径提示**：分类 md 位于 **`arkui-static-xts-generator/categories/…`**（相对本 skill 目录，**须先按「必备输入」与 `arkui-static-xts-generator/README.md` 下载放置**）；上游 [arkUISkill](https://gitcode.com/qq_44921954/arkUISkill) 中的 **`SKILL.md`**（生成器原文）可置于同目录备查。

### 与 §二 B/C 的接力（融合要点）

- **页面**：为 §〇 的检查点提供 **稳定 id**（及工程 **key**）、**AppStorage/状态** 等可观测出口；弹窗/气泡按 **1.2 / 2.4** 等篇用 **文本或能力内约定** 定位，并与 **§ 三** 布局策略一致。  
- **测试**：按 §〇 **验证方法** 写 `findComponent` / Inspector **链式** / 必要时 `sleep`；**`describe`/`it` 命名** 与批次或接口 id 对齐；需要 **`@tc.*` JSDoc** 时对照 **`common/test_rules.md`**，且不与 **§一～五** 冲突。  
- **统一质量条**：**单 `it` 单测试点**；**页面配置 / 测试断言** 分离；**等价类精简**；禁止在页面里堆 **expect**。

## 一、核心原则（必须遵守）

### 1.1 API / SDK 优先

- **冲突时以 SDK `.d.ets` 为准**，文档用于语义与用法补充。  
- **禁止**使用文档未列且 SDK 不存在的成员（例如臆造 `Xxx.create()`）。  
- **禁止**凭「别的类有 create」类比推广。  
- **不确定**时向需求方确认或仅在 SDK 中存在时写代码。

### 1.2 导入与模块

- **`use static`**：凡在页面/用例中用到的 **组件与类型** 均须 **显式 import**；模块路径以 **第 0 层（SDK）类型定义 + 本仓已能编过的套件** 为准。  
- **候选清单**：按符号查阅 **`arkui-static-xts-generator/common/import.md`**（同类符号多路径时 **以工程现有为准**）；**禁止**照抄接口文档或过时代码里的路径导致与当前 kit 不一致。  
- **接口文档中的 import 示例**若与当前工程 kit 不一致，**不要盲改**工程全局风格；**新增代码**遵循上两条。

### 1.3 静态测试（Hypium + UiTest）硬约束

| 禁止 | 正确 |
|------|------|
| `ON.id('x').click()` | `findComponent(ON.id('x'))` 再对组件 `click()` |
| `expect(obj?.a).assertEqual(v)` | `if (obj) { expect(obj.a).assertEqual(v) }` |
| 无统一前缀的散乱 `console.info`（排障困难） | 日志含 **`[ARKUI_NEW]`** 或套件内统一 **`LOG_TAG`** |
| 用例间残留 **AppStorage** / 未关 **Dialog** | `afterEach` 删除本套件键；`dialogController.close()` |

---

## 二、编码落地（流水线第 2～5 步：工作流 A–D + 自检）

**前置**：**§〇** 已完成（已打开目标 **`categories/*.md`**，检查点与验证方法明确）；**L2** 细则按需查阅 **`common/ets_rules.md`、`test_rules.md`**。

### A. 对齐工程内范式

- 打开**本工程**中已稳定的一条套件，**优先与 §〇 大类一致**（例如同为属性 2.x 或事件 3.x），如 **`.../test/old/`** 下结构接近的 `*.test.ets`。  
- 对齐：**`UtilsTest.startAbility`**（若工程使用）、**`beforeEach` 路由**（`router.clear()` / `replaceUrl`）、**`afterEach` 清理**。  
- **`main_pages.json`** 中 **path** 与 **`Router.replaceUrl({ url: 'pages/...' })`** **逐字一致**。

### B. 页面（预览页 `.ets`）

- **承接 §〇**：每个 **检查点** 都应有 **可观测出口**（id、`$attrs` 可读字段、**AppStorage**、显隐结果）；**动效类**以 **结束态** 暴露，避免在页面写断言。  
- 需要 Inspector / 自动化：组件 **`.id('语义化稳定名')`**（可与 **`ets_rules`** 的 `{component}_{场景}` 风格对齐），并按工程约定加 **`.key(...)`**。  
- 回调里 **`AppStorage.setOrCreate('suitePrefix_key', value)`** 供用例断言（与 **§ 四** 清理键一致）。  
- **Options** 在 **`aboutToAppear` / 字段初始化** 集中构造；**§ 三** 的根布局与多按钮 **constraintSize** 策略优先于个人随意排版。

### C. 测试（`.test.ets`）

- **明细表默认粒度**：用户或台账给出 **「模块/类/方法/函数」明细表** 时，**默认一行对应一条 `it` 单独验收**，**不得**在未说明的情况下合并多行到单条用例；若需合并，须由需求方**书面约定**。
- **承接 §〇**：每条用例对应 **分类文档中的验证方法** 之一（或一条主验证 + 一条辅助）；**`it` 标题 / `id` / 可选 `@tc.number`** 与批次或接口规范一致（细则 **`test_rules.md`**）。  
- **Inspector**：`parseJsonElement` / `getInspectorByKey` 后 **链式** `.getElement('$attrs').getString(...)`，避免中间变量被推断为 `Object`。  
- **点击**：一律 **`driver.findComponent` + `click()`**，禁止对 **`ON`** 调 `click`。  
- **枚举 / 属性**：`getString` 常为 **字符串**（如 `'0'`），断言与之一致。  
- **日志**：`beforeAll` / `beforeEach` / `afterEach` 打 **`start`/`end`**；用例内打 **`execute`/`step`**，内容含 **`[ARKUI_NEW]`**（或与 `LOG_TAG` 组合）。

### D. 本地自检

- 对改动文件执行工程约定 Lint / `read_lints`；若有 **`tsc`/`hvigorw`** 前置检查则执行。  
- 对照本文 **§ 七、编译与提交检查清单**。

---

## 三、页面与多设备布局（静态 XTS 常见要求）

**目标**：手机 / 折叠 / 小屏等设备上 **一屏内** 能点到本页主要入口，减少整页 **`Scroll`** 与 UiTest 行为差异。

| 项 | 建议 |
|----|------|
| 根布局 | 优先 **`Column`**，**`.width('100%').height('100%')`** 链在**根组件**闭合 `}` 之后，不要像挂在 `build()` 名上 |
| 纵向分配 | 多按钮：`layoutWeight(1)` + **`constraintSize({ minHeight: 0, maxHeight: '7%~18%' })`**，按单屏控件数量粗调百分比 |
| 文案 | **短标签**；长说明放注释或日志 |
| 路由 | **`main_pages.json` ↔ `replaceUrl`** 必须对齐 |
| 定位 | 测试优先 **`ON.id`** / **Inspector key**；避免长串 **`ON.text`**；若改页面文案须同步 **`ON.text` 断言** |

---

## 四、测试隔离与生命周期（骨架要点）

**每个套件建议包含**：

1. **`beforeAll`**：启动被测 Ability（按工程封装如 `UtilsTest.startAbility`）。  
2. **`beforeEach`**：根据 `router.getState()` 判断；必要时 **`replaceUrl`** 到本套件页；可打印 `router` 状态便于排障。  
3. **用例内**：必要时关闭上一轮对话框（`AppStorage.get` 取 `CustomDialogController` 再 **`close()`**），避免 **`pressBack`** 误退栈。  
4. **`afterEach`**：删除**本套件**使用的 **AppStorage** 键；短 **`sleep`**；打清理日志。

**独立性**：单条用例应可单独重跑；**禁止**依赖同套件内其余用例的「残留状态」。

---

## 五、日志规范（设备侧 grep）

- **统一前缀**：`**[ARKUI_NEW]**`（全工程一致）或与现有套件一致 **`LOG_TAG`**。  
- **建议 phase**：生命周期用 `start`/`end`；用例体用 **`用例名 START` / `END ok|fail`**；关键步骤 **`step`** + 简短变量摘要。  
- **禁止**只有 `catch` 里一行、生命周期无输出——不利于 **`hilog --grep`** 定位。

---

## 六、标准阶段流水线（与上架工具链对齐）

### 阶段 0：环境

1. `python3 src/skills/ohxtsstatic/ohxtsflow.py env`（需已配置 **`HOS_CLT_PATH`**、**`OHOS_SDK_PATH`**，见同仓库 **HOWTOSKILLS.md** 开头）；输出中会列出 **`hvigor-static`** 与默认 **`hvigor`** 下 **`hvigorw.js`** 是否存在。  
2. **静态用例工程**：在 **`env` 与 `build-all` 前**设置 **`export OHOS_USE_HVIGOR_STATIC=1`**（或 **`OHOS_HVIGORW_JS`**），确保 **`hapbuild`** 使用 **`$HOS_CLT_PATH/hvigor-static/bin/hvigorw.js`**，而非默认 **`hvigor/bin`**。  
3. **`hdc list targets`**；网络设备 **`hdc tconn ip:port`**（同仓库 **HOWTOSKILLS.md §5**）。  
4. 核对 **`build-profile.json5`** 与真实 SDK **API** 一致。

### 阶段 1：编码

按 **技能融合模型** 顺序执行：**§〇** → **§二 A–D**；编码阶段 **§ 一～五** 与 **`arkui-static-xts-generator/common/`** 交叉对照。批次可采用 **`xts-batch-manifest.yaml`**（§ 九），**`arkui_category` 必填推荐**（可审计归类是否一致）。

### 阶段 2：编译与签名

```bash
python3 src/skills/ohxtsstatic/ohxtsflow.py build-all <工程根目录完整路径>
```

等价 **`hapbuild build` → `build-test` → `sign`**（受 **`OHOS_USE_HVIGOR_STATIC`** / **`OHOS_HVIGORW_JS`** 约束，见上表 **Hvigor（静态 XTS 专用）**）。失败时：读 hvigor 日志 + **`compile_error_hints.md`** + 本文 **§ 七**；由 Agent 迭代改代码。

### 阶段 3：安装

- **双包**（主 HAP + ohosTest）：**`ohhdc install-project <工程>`** 或 **`ohxtsflow deploy-test`**。  
- **单包静态 XTS**（仅 `entry-default-signed.hap`，测试打在主模块内）：**`ohhdc replace-install <*.hap>`**，或直接用下阶段 **`static-deploy-test`**（脚本内先卸再装主包）。  
- 单 HAP 覆盖安装：**`ohhdc replace-install <*.hap>`**。

### 阶段 4：执行与日志

**传统双包 + class 套件**（`entry_test` 等）：

```bash
python3 src/skills/ohhdc/ohhdc.py deploy-test <工程根目录完整路径> [--timeout 毫秒]
```

**静态 XTS（`-m entry`，`-s unittest` 多为类名 `OpenHarmonyTestRunner`）**——官方推荐形态接近  
`aa test -b <bundle> -m entry -s timeout <ms> -s unittest OpenHarmonyTestRunner`（**timeout 在 unittest 前**）；由 **`ohhdc static-deploy-test`** 封装。若仍用路径形式，可通过 **`OHOS_AA_TEST_UNITTEST_RUNNER`** 或 **`--unittest-runner`** 指定。

```bash
python3 src/skills/ohhdc/ohhdc.py static-deploy-test <工程根目录完整路径> [--timeout 15000] [-m entry] [--unittest-runner /ets/testrunner/OpenHarmonyTestRunner]
```

**编排（推荐）**：

```bash
# 仅设备：已本地编签后，装包并跑 unittest
python3 src/skills/ohxtsstatic/ohxtsflow.py static-device-test <工程根目录完整路径> [--timeout 15000]

# 一键：构建（hapbuild，含 OHOS_HAPSIGNER_RESULT 时自动签名）→ static-device-test
python3 src/skills/ohxtsstatic/ohxtsflow.py run-static-pipeline <工程根目录完整路径> [--build-mode debug]
```

长时间 Hypium 全量：**先** `export OHOS_AA_TEST_WALL_SEC=7200`（秒）再跑 **`static-device-test` / `run-static-pipeline`**，避免本机过早终止设备应用测试子进程（与 `--timeout` 设备毫秒不是同一含义，见 **ohhdc/SKILL.md**）。

**阶段 4 结束时的 Agent 义务**：在 **`hdc` 可用且已执行设备命令**的情况下，必须在**同一会话回复**中按上文 **「正式测试报告」** 输出 **三列表格**（用例名称｜Pass/Fail｜设计思路）及汇总；**不得**只告知用户「去打开某个 log 文件」而不给出结构化报告。

设备日志：

```bash
python3 src/skills/ohhdc/ohhdc.py hilog --grep '[ARKUI_NEW]' --flowctrl-off
python3 src/skills/ohhdc/ohhdc.py faultlog
```

子命令细节以 **`ohhdc/SKILL.md`** 为准。

### 阶段 5：分析与优化

- 将 **应用测试标准输出** / **hilog** 保存为文本后，可做轻量摘要（关键词、失败行、启发式建议）：

```bash
python3 src/skills/ohxtsstatic/ohxtsflow.py analyze-test-log <本机日志文件>
```

- 对照 **`compile_error_hints.md` §2**；优化脆性断言、路由与清理逻辑；重复阶段 2–4。  
- **每轮设备跑测结束后**，在会话中**更新「正式测试报告」**（含失败时的迭代说明），直至通过或阻塞已文档化。

---

## 七、编译与提交检查清单（提交前逐项打勾）

**交付完整性（DoD）**

- [ ] **设备侧已验证**：在 **`hdc` 可用**条件下 **`static-device-test` 或 `run-static-pipeline` 执行**，本批次 **`it` 全绿**；或已写明 **阻塞原因**与 **复测命令**  
- [ ] **非仅编译**：若仅完成本地 **build-all**，不得宣称「用例开发完成」  
- [ ] **会话内正式测试报告**：已按 **「正式测试报告」** 节在回复中输出 **核心三列表格**（用例名称｜Pass/Fail｜**非开发也能懂的设计思路**，≤5 句/格），以及环境、命令、汇总、日志要点等；**禁止**以「仅 log 文件路径」作为唯一交付  
- [ ] **迭代闭环**：设备失败时已改代码并重跑，或已记录不可复现原因

**一体化设计（第 1.5 层 + 第 2 层）**

- [ ] **§〇 路由表** 与所选 **`categories/…/*.md`** 一致；**检查点 → 页面出口 → 断言** 可追溯（非「先写码再套文档」）  
- [ ] 已按需查阅 **`common/import.md`、`ets_rules.md`、`test_rules.md`**；无不存在的 SDK API、无与 **§一.3** 抵触的 Hypium 写法  
- [ ] **单 `it` 单点**；页面 **无 expect**；`describe`/`it`（及 `@tc.*` 若适用）与批次或接口 id 一致  

**页面**

- [ ] 导入与 API 调用均能在 **SDK `.d.ets`** 中找到依据  
- [ ] `onClick` / 异步写法与 **当前 SDK** 签名一致  
- [ ] **ComponentContent** 等使用 **`@Builder`**，不用箭头 builder  
- [ ] **`main_pages.json`** 与 **`Router.replaceUrl`** 一致  
- [ ] 需要读 Inspector / 驱动点击的组件具备 **id**（及工程要求的 **key**）  
- [ ] 日志带 **`[ARKUI_NEW]`**（或统一 `LOG_TAG`）  
- [ ] 布局满足 **§ 三**（根宽高、多按钮 `maxHeight` 等）

**测试**

- [ ] 断言主要用 **`assertEqual`**；可选链不进 **`expect`**  
- [ ] 点击路径为 **`findComponent` + `click`**  
- [ ] Inspector **链式**读取，无 `Object` 上调用 `getString`  
- [ ] **`afterEach`** 清理 AppStorage；对话框在用例结束或 `afterEach` 中关闭  
- [ ] 已在 **`List.test.ets`**（或约定入口）**`import`** 并 **`execute`** 新套件  

**工具链**

- [ ] `build-all` 通过；签名与环境变量满足 **ohhap/SKILL.md**  
- [ ] 设备 **`deploy-test`** 或通过 **`ohhdc test`** 指定套件时结果可解释  

---

## 八、与子技能委托关系

| 能力 | 脚本 |
|------|------|
| HAP / ohosTest **编译、签名** | `src/skills/ohhap/hapbuild.py` |
| **安装、deploy-test、hilog、faultlog、test** | `src/skills/ohhdc/ohhdc.py` |
| 模板 **create / build / test** | `src/skills/ohproj/ohproj.py` |
| **dts → 单测骨架**、UITest、fuzz、ACTS | `src/skills/ohtest/*.py` |

**编排入口**：`src/skills/ohxtsstatic/ohxtsflow.py`（`env` / `build-all` / `install` / `deploy-test` / **`static-device-test`** / **`run-static-pipeline`** / `logs` / **`analyze-test-log`** / `hints` / `workflow-print`）。

---

## 九、批次清单（可选）`xts-batch-manifest.yaml`

便于 Agent 不遗漏套件；放在工程根或 `docs/` 均可。

```yaml
sdk:
  api_level: 26
  ets_static_path: "/path/to/openharmony/static/26/ets/static"   # 仅便于人读，编译以 build-profile 为准
docs:
  - title: "组件或 Options 说明"
    path_or_url: "https://..."
cases:
  - id: "YourBatchSuiteName"
    arkui_category: "2-属性API/2.1-基础属性"   # **强烈推荐**：相对 arkui-static-xts-generator/categories/，与 §〇 路由表一致，便于评审
    page: "entry/src/main/ets/testability/pages/foo/foo.ets"    # 以目标工程为准，勿照搬生成器示例路径
    test: "entry/src/main/src/ohosTest/ets/test/Foo.test.ets"
    focus: ["attrA", "onBar"]
```

---

## 十、附录：报错速查文件

**`compile_error_hints.md`**：编译与运行期 **表格式** 速查，与 **`ohxtsflow.py hints`** 输出一致；可与本文 **技能融合模型（第 1 层）**、**§ 一、五、七** 交叉对照。

**`arkui-static-xts-generator/README.md`**：**下载与放置说明**（正文资料不在仓库内嵌）；下载后的 **`SKILL.md`（生成器原文）** 与 ohxtsstatic 主 **`SKILL.md`** 并列阅读时，**执行仍以 ohxtsstatic 主文分层与流水线为准**。

---

## 十一、限制说明

1. **自动修复代码**依赖 Agent/人对报错的理解；脚本只保证**可调用的命令集合**。  
2. **ohhap** 与证书路径以 **ohhap/SKILL.md** 为准（如 `hap-sign-tool.jar`、autosign 目录）。  
3. **API 大版本**与 **`compileSdkVersion`** 不一致时，先对齐工程再编。

---

## 十二、应用示例与提示词（中文）

| 场景 | 提示词示例 |
|------|------------|
| 全流程 | 「按 ohxtsstatic：§〇→**编签→设备应用测试→抓 log→迭代**；**在会话中输出「正式测试报告」三列表格**（用例名称｜Pass/Fail｜设计思路），不只给 log 路径」 |
| 静态 XTS 设备一键 | 「`ohxtsflow run-static-pipeline <工程>`；**会话报告**含**三列表格**与 `OHOS_REPORT_RESULT`」 |
| 仅跑设备（已编签） | 「`ohxtsflow static-device-test <工程>`；**同上，必须会话内三列表格报告**」 |
| 日志摘要 | 「`analyze-test-log` 仅作提炼；**填入报告「日志要点」列表**，勿替代整份报告」 |
| 只排障 | 「对照 ohxtsstatic **compile_error_hints**、**技能融合模型**（第 0 / 第 1 层）与 § 七清单，修路由/AppStorage/断言」 |
| 只编 | 「`ohxtsflow build-all <路径>`，失败则按 hints 与 hvigor 日志修」 |
| 归类/设计 | 「接口 XXX：按 ohxtsstatic §〇 **路由表** 选型，摘录检查点与验证方法后再生成 B/C 草稿」 |
