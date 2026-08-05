# PR 提交前自检清单（打印勾选）

## 域选择

- [ ] **ArkTS 动态**（ohxtsdynamic）— 勾选 A～F + **整测一次连跑**
- [ ] **ArkTS 静态**（ohxtsstatic）— 勾选 A～F + **整测一次连跑**
- [ ] **CAPI / C++ NAPI**（ohxtscapi）— 勾选 A～F（ets）+ G～J（若改 framework）+ **整测一次连跑**
- [ ] **C++ / ace_engine** — 改 `frameworks/` 等 → 勾选 G～J
- [ ] **双域同批** — 两域分别勾选并分 commit

---

## A. 变更范围（ArkTS）

- [ ] 仅 `arkui/` 下本批 HAP 白名单路径（`validate_commit_scope.py` 通过）
- [ ] 未误改 `main_pages.json` / 整仓格式化 / 无关模块
- [ ] `git diff -w --shortstat` 单笔 commit < 1900 行（本地软上限；门禁硬上限 2000）

## B. ArkTS 类型（Quality）

- [ ] 无 `int`（`rg "\bint\b" <files>`）
- [ ] 无 `String` 包装类型（`Record<String`、`undefined | String`）
- [ ] **`'use static'` 文件**：颜色不用 `number` 传 `fontColor` → 用 `ResourceColor` 或 `string`
- [ ] 无新增裸 `any` / 不当 `ESObject`（Inspector 用显式类型）

## C. Key 命名（Quality / Reliability）

- [ ] 新 key 均为 `页面名_组件名`（页面名 = 路由末段）
- [ ] 同 HAP 内无重复 key（`rg "\.key\('" | sort | uniq -d` 思路自查）
- [ ] 每个 `.key('新')` 已搜测试：`getInspectorByKey` / `sendEventByKey` / `ON.id` / `ON.key`
- [ ] 页面内 `getInspectorByKey('旧')` 已改（onClick 等）
- [ ] RelativeContainer `alignRules` 字符串锚点已随 key 更新

## D. 代码质量（ArkTS）

- [ ] 无大段注释掉的废弃代码
- [ ] **G.OTH.05**：禁止硬编码公网 URL/IP（如 `'https://www.example.com/...'`）
  - schemeHandler 假地址：拆成 `scheme + host + path` 拼接（host 用 `local.test` 等非公网），勿整段字面量
  - 业务请求：用 `XtsTestServer` / `resource://rawfile/...`，勿写公网域名
  ```ets
  // bad
  this.controller.postUrl('https://www.example.com/body-stream-read', data);
  // good
  let schemePart: string = 'https://';
  let hostPart: string = 'local.test';
  let pathPart: string = '/body-stream-read';
  this.controller.postUrl(schemePart + hostPart + pathPart, data);
  ```
- [ ] G.FMT.05：源码单行 ≤120 字符；长日志参数、对象字面量按语义折行
  - Options 一行塞多字段易超宽，改为：
    ```ets
    // bad: let opts: BackgroundBlurStyleOptions = { policy: ..., inactiveColor: ..., colorMode: ... };
    let opts: BackgroundBlurStyleOptions = {
      policy: BlurStyleActivePolicy.ALWAYS_ACTIVE,
      inactiveColor: Color.Blue,
      colorMode: ThemeColorMode.LIGHT
    };
    ```
  - `@tc.desc` 过长时缩短为可读摘要，勿堆完整类名
- [ ] `@tc.number` 与 `it()` 一致（`@tc.name` 可为英文标题，不强制等于用例号）
- [ ] 无裸 `it()`：每条 `it` 前紧邻完整 `@tc` 块（`/*` 或 `/**`，含 `@tc.number` / `@tc.name`；一体工程 `entry/.../*.test.ets`）
- [ ] `@tc` 字段保留冒号格式：`@tc.number : ID`（`fix_ets_xtscheck` 勿剥冒号）
- [ ] 合并冲突未保留「仅 id 无 key」或旧 key 版本
- [ ] Dialog/Present 类：`NORMAL`/`UEC` 后只点 OK/取消关遮罩；Inspector 防空 JSON；**禁止**「找不到取消就 pressBack」（会把 Ability 切后台）
- [ ] **CI.KIT.01 / CI.SDK.DIALOG.01**（7.0 门禁）：
  - 本地/设备 SDK 有 Dialog API 时：`DialogPresenter` ← `@ohos.arkui.UIContext`；`dialog`/枚举/`DialogResult` ← `@ohos.arkui.dialog`；**勿** `from '@kit.ArkUI'`。
  - **若 CI 报** `Cannot find module '@ohos.arkui.dialog'` **或** `UIContext` **无** `getDialogPresenter`：属 **CI prebuilts SDK 未带该 API**（与导入路径无关）→ 父级 `BUILD.gn` **暂注释**该 HAP deps，注释标明 SDK 补齐后恢复。**禁止**仅因本地 DevEco/`command-line-tools` SDK 已有 API 就恢复编入（CI 用 `prebuilts/ohos-sdk`）。
  - 嵌套 Options 须显式类型：`dialog.DialogMessage` / `dialog.DialogButton[]`。
- [ ] Dialog **禁止** `DocumentViewPicker`/`FilePicker`/`系统 UIExtension` 模拟 UEC：Extension 退出后 UiTest `FindWidgets` 可永久失联并污染后续 Suite；103306 系统 UEC 勿用 `expect(true)`/`env skip` 假绿
- [ ] **工程整测**：全部 Suite **一次** `deploy-test`/`static-deploy-test` 连跑（禁止拆多次且每次重装后拼结果）
- [ ] **改码必重编（DEV.REBUILD.01）**：本批有 `.ets`/resources 改动 → 过期 HAP **已作废**；须 `build-all`/`hapbuild build`+sign 出新包再测；**禁止**查找/安装改码前旧 signed.hap
- [ ] **双包双装**：有 `entry/src/ohosTest/` → 主+测两包均新编并均已 `hdc install`（勿 `install -g` 对 release）
- [ ] **PR 范围（DEV.SCOPE.01）**：工程列表来自 `git diff <base>...HEAD --name-only` 反推，**未**按单 commit 文案跳过同 PR 其它 HAP
- [ ] **结果真实（DEV.REPORT.01）**：每 HAP 日志含 `OHOS_REPORT_RESULT` 且 Fail=0 Error=0；无 RESULT / App died **不得**写「通过」
- [ ] **设备卫生**：跑测前已解锁（wakeup/setmode/上滑）；无锁屏挡 UiTest

## E. 加固批次附加（ArkTS）

- [ ] `audit_key_sync.py` 非 static **0** 未同步
- [ ] `--scan-page-inspector` 页面内无旧 key
- [ ] changelog 与改动文件一致

## F. Git 提交（通用）

- [ ] `git commit -sm` + Signed-off-by
- [ ] `git log -1 --format=full` 已核对
- [ ] 未提交 `root/`、IDE 点开头的本地配置目录等无关路径
- [ ] skill 文档已通过 `scan_wordstool_docs.py`（WordsTool 文档用词，规则号 .297 / .241 / doc1）
- [ ] **WordsTool.97**：资源 `string.json` / 用例勿写易歧义产品字体名；字体族用 `sans-serif`（`gate_review` 可自动替换）
- [ ] skill 内 Python：函数嵌套深度 ≤4、nbnc 行数 ≤50（超限须拆 helper）
- [ ] skill 内 Python：G.FMT.04 无冒号前空格（切片写 `a + 1:b` 而非带空格的冒号写法）

## G. C++ 合规（ace_engine）

- [ ] 圈复杂度 ≤20、函数 nbnc ≤50、嵌套 ≤4（NAPI `GetXxxProps` 超长表：拆多函数 + 多次 define，见 reference）
- [ ] 行宽 ≤120（G.FMT.05）
- [ ] 函数调用实参续行 = 起始行缩进 + 4（G.FMT.06-CPP，非固定 8；如 8→12）
- [ ] CAPI `GetXxxProps` / Init 注册函数 nbnc ≤50（G.FUD.05；超限按域拆表）
- [ ] 无裸魔法数（已用 `constexpr` / 命名常量）（**G.CNS.02**）
  - 错误码：`ASSERT_EQ(NAME, 103306)` 仍算裸字面量；数值只放在命名 `constexpr`，用例侧用 `ASSERT_NE`/`ASSERT_EQ` 对命名常量或 SDK 枚举
  - stub/回调：`401`/`-1` 改用已有 `INVALID_PARAM` / `PARAM_NEGATIVE_1`
  ```cpp
  // bad
  ASSERT_EQ(DIALOG_ERR_NODE_MOUNT_FAILURE, 103306);
  callback(401, -1, userData);
  // good（数值仅在 Compat.h：constexpr int32_t DIALOG_ERR_... = ...）
  ASSERT_NE(DIALOG_ERR_NODE_MOUNT_FAILURE, SUCCESS);
  callback(INVALID_PARAM, PARAM_NEGATIVE_1, userData);
  ```
- [ ] **WordsTool.204**：源码/CMake 注释勿写 `libc++`；改「C++ standard headers / C++ standard library」
- [ ] 头文件 nbnc 未超标（大实现已迁 `.cpp` + `BUILD.gn` 已注册）
- [ ] 新/改文件含 Apache 2.0 许可证头（OAT.3）
- [ ] 无注释掉的大段废弃代码
- [ ] 命名符合 lowerCamelCase / `kXxx` 常量规范

## H. Inspector 行为不变（C++）

- [ ] `UpdateInspectorId` / `BuildXxxInspectorId` 拼接规则未改
- [ ] `__NavDestinationField__` 等前缀语义未改
- [ ] resolve key → update host → update children 顺序未变
- [ ] `git diff` 确认仅为结构拆分，无逻辑删改

## I. C++ 编译验证

- [ ] `ace_core_components_base_ng_ohos` 通过
- [ ] `libace_compatible` 通过（若改动面大）
- [ ] 无 `-Werror` unused function / 链接 undefined symbol
- [ ] struct 参数无 `const T&` 成员导致构造/赋值失败

## J. Push 后

- [ ] Git Hooks Checking **PASSED**
- [ ] CodeArts / 流水线 Quality 无新增 Critical/High
