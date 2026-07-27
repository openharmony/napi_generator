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
- [ ] `git diff -w --shortstat` 单笔 commit < 2000 行

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
- [ ] G.FMT.05：源码单行 ≤120 字符；长日志参数、对象字面量按语义折行
- [ ] `@tc.number` / `@tc.name` 与用例一致（若改测试）
- [ ] 无裸 `it()`：每条 `it` 前紧邻完整 `/** @tc.number … @tc.level */`（含一体工程 `entry/.../*.test.ets`）
- [ ] 合并冲突未保留「仅 id 无 key」或旧 key 版本
- [ ] Dialog/Present 类：`NORMAL`/`UEC` 后只点 OK/取消关遮罩；Inspector 防空 JSON；**禁止**「找不到取消就 pressBack」（会把 Ability 切后台）
- [ ] Dialog **禁止** `DocumentViewPicker`/`FilePicker`/`系统 UIExtension` 模拟 UEC：Extension 退出后 UiTest `FindWidgets` 可永久失联并污染后续 Suite；103306 系统 UEC 勿用 `expect(true)`/`env skip` 假绿
- [ ] **工程整测**：全部 Suite **一次** `deploy-test`/`static-deploy-test` 连跑（禁止拆多次且每次重装后拼结果）

## E. 加固批次附加（ArkTS）

- [ ] `audit_key_sync.py` 非 static **0** 未同步
- [ ] `--scan-page-inspector` 页面内无旧 key
- [ ] changelog 与改动文件一致

## F. Git 提交（通用）

- [ ] `git commit -sm` + Signed-off-by
- [ ] `git log -1 --format=full` 已核对
- [ ] 未提交 `root/`、IDE 点开头的本地配置目录等无关路径
- [ ] skill 文档已通过 `scan_wordstool_docs.py`（WordsTool 文档用词，规则号 .297 / .241 / doc1）
- [ ] skill 内 Python：函数嵌套深度 ≤4、nbnc 行数 ≤50（超限须拆 helper）
- [ ] skill 内 Python：G.FMT.04 无冒号前空格（切片写 `a + 1:b` 而非带空格的冒号写法）

## G. C++ 合规（ace_engine）

- [ ] 圈复杂度 ≤20、函数 nbnc ≤50、嵌套 ≤4（NAPI `GetXxxProps` 超长表：拆多函数 + 多次 define，见 reference）
- [ ] 行宽 ≤120（G.FMT.05）
- [ ] 函数调用实参续行 = 起始行缩进 + 4（G.FMT.06-CPP，非固定 8；如 8→12）
- [ ] CAPI `GetXxxProps` / Init 注册函数 nbnc ≤50（G.FUD.05；超限按域拆表）
- [ ] 无裸魔法数（已用 `constexpr` / 命名常量）
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
