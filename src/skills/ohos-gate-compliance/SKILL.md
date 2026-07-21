---
name: ohos-gate-compliance
description: >-
  OpenHarmony PR 门禁合规（统一入口）：XTS pipeline 自动 review+commit、ArkTS Quality、
  xtscheck、CAPI G.FMT.05/06。按工程类型 ets/capi 自动选规则。触发词：门禁、CodeCheck、
  gate-review、PR 提交前、G.FMT.06、门禁加固。
version: "1.2.0"
---

# OpenHarmony 门禁合规（统一入口）

**所有自动化门禁脚本均在本目录 `scripts/`**，不再使用 `xts_shared/`。

## 工程类型与自动选规则

`gate_review.py` 检测 `entry/src/main/cpp/*.cpp` 是否存在：

| profile | 典型工程 | 自动检查 | 自动修复 |
|---------|----------|----------|----------|
| **ets** | ohxtsstatic / ohxtsdynamic HAP | xtscheck、ArkTS Quality、G.FMT.05、**CI.SDK.01** | @tc 冒号、空行、String→string、TestType.FUNCTION、**compileSdkVersion→"M.S.F"** |
| **capi** | ohxtscapi HAP | 上述 + **G.FMT.06-CPP**（仅 `.cpp/.h`） | 上述 + 实参续行 **起始行+4** |

**ETS 工程不跑 C++ 规则**；CAPI 工程对 `.ets` 仍跑 ArkTS 规则。

复杂项（圈复杂度、nbnc、Inspector、key 命名语义）仍须 Agent 对照 checklist 手工修。

---

## 门禁修复 → Skill 加固（强制，与用例修复同任务）

**凡因门禁失败而修改用例/C++ 代码，须在同一任务内同步加固本 skill**，避免同类问题重复手工修。

| 修复类型 | 加固位置 | 动作 |
|----------|----------|------|
| 可确定性自动替换 | `scripts/arkts_patterns.py` | 增 `RULES` + `fix_arkts_quality()` |
| xtscheck / G.FMT.06 | `scripts/gate_review.py` | 增 `check_*` / `fix_*` |
| 须语义判断 | `checklist.md` / `reference.md` | 增条目 + before/after 示例 |
| 新 profile 或域 | `gate_review.py` `ProjectProfile` | 扩展检测与规则映射 |

**工作流**：

```
门禁报错 → 修工程代码 → 加固本 skill（上表）→ py_compile scripts/*.py
         → 用例仓 commit（xts_acts）与 skill 仓 commit（napi_generator）分开提交
```

**已加固案例**（维护时追加）：

| 规则 | 加固方式 |
|------|----------|
| G.FMT.06-CPP 实参续行 | 起始行缩进 + 4（8→12，4→8） | `gate_review.fix_cpp_fmt06` |
| **G.FMT.04** `:` 前空格 | `brace + 1 : i` → `brace + 1:i` | `gate_review.fix_py_fmt04_space_before_colon` |
| G.CNS.02 Inspector 魔法数 | `constexpr` 命名边界值 | 见 `examples-cpp-inspector.md` 案例 8 |
| `TestType.Function` | `arkts_patterns` 检测 + 自动替换 |
| 大写 `String` | `arkts_patterns.fix_arkts_quality` |
| `'use static'` 下 `int` 误报 ARKTS_NO_INT | `arkts_patterns`：static 文件跳过该规则 |
| `@tc.name:` 冒号、`*/` 空行 | `gate_review.fix_ets_xtscheck` |
| WordsTool 文档用词 | `scripts/scan_wordstool_docs.py` + `codecheck-words.sh` | 禁用易歧义产品名与口语化极限词；扫描器源码仅用 `chr()` 拼词；含 **.297**（勿裸写设备命令缩写，叙事用「设备 unittest」）、**.241**（勿强调词）、**doc1**（勿易歧义代词结构，改用「其余」） |
| Python 嵌套深度 ≤4 / nbnc ≤50 | 拆 helper（`ohhdc._warn_if_main_hap_stale`、`gate_review._check_one_it_jsdoc` 等） | 提交 skill 前 `py_compile` |
| G.FUD.05 / 超大函数 `GetXxxProps` | 按域拆多表 + 多次 `napi_define_properties` | 见 `reference.md` NAPI 表注册 |
| **CI.SDK.01** `compileSdkVersion` 数字/"26" | `gate_review` 检测+自动改 `"26.0.0"`；**`git-commit-agent.sh` 暂存预检拦截** | 以 CI 为准，本地 00306042 勿入仓 |

Agent **禁止**只修工程、不更新 skill（除非用户明确「仅 hotfix」）。

---

## XTS pipeline 自动门禁（无需手动）

**ohxtscapi / ohxtsstatic / ohxtsdynamic** 的 `run-*-pipeline` 设备全 Pass 后**自动**调用本目录 `scripts/gate_review.py`：

1. 校验 `OHOS_REPORT_RESULT`
2. 扫描本工程 **git 变更** 文件（排除 build/autosign/hypium）
3. 按 profile 跑规则 + 两轮自动修复
4. 未修复项 → exit 2
5. 通过后 `git-commit-agent.sh -sm` 仅提交本工程

```bash
# 一键（推荐，无需单独跑 scan）
python3 src/skills/ohxtscapi/ohxtscflow.py run-capi-pipeline <工程> -s <Suite> \
  --commit-title "简短说明"

python3 src/skills/ohxtsstatic/ohxtsflow.py run-static-pipeline <工程> -s <Suite>

python3 src/skills/ohxtsdynamic/ohxtsflow.py run-dynamic-pipeline <工程> -s <Suite>

# 测试已过，单独补跑门禁+commit
python3 src/skills/ohos-gate-compliance/scripts/gate_review.py <工程> -s <Suite> \
  --skip-test-check --commit-title "说明"

# 三 skill 均有 gate-review-commit 子命令（等价）
python3 src/skills/ohxtsstatic/ohxtsflow.py gate-review-commit <工程> -s Suite \
  --skip-test-check
```

`--skip-gate` / `--skip-commit` 可跳过对应阶段。

---

## 脚本一览（均在 `scripts/`）

| 脚本 | 用途 |
|------|------|
| **`gate_review.py`** | pipeline 主入口：review + 修复 + commit |
| **`arkts_patterns.py`** | ArkTS Quality 规则库（被 gate_review 引用） |
| **`scan_gate_patterns.py`** | 独立 CLI，扫仓库路径下 `.ets`（调试/PR 前粗查） |
| **`scan_wordstool_docs.py`** | WordsTool 文档用词扫描（skill `.md` / 脚本，提交前必跑） |

---

## 设备整测硬门禁（全量 / PR 宣称绿）

> **适用范围（三 skill 共用）**：**ohxtsdynamic**（动态 ArkTS）、**ohxtsstatic**（`'use static'`）、**ohxtscapi**（C++ NAPI + Hypium）。  
> **实锤**：Dialog ErrorCode 拆多次 `deploy-test` 每次卸装 → Suite 间遮罩/`pressBack` 串扰被洗掉 → **本地假绿、门禁/xDevice 整包大面积 `null.click`**。

| 场景 | 必须 | 禁止 |
|------|------|------|
| **工程整测**（交付、commit/push 前、对标 xDevice/CI 产物） | **一次**装包：`deploy-test` / `static-deploy-test` / `ohxtscflow deploy-test`（或 pipeline 内设备阶段）—— `-s` 列齐 `List.test` **全部** Suite，或省略 `-s` 自动发现；**卸装安装各一次后连跑** | Agent **自己**多次调用 `deploy-test`/`static-deploy-test`/`run-*-pipeline`（每次都卸装重装）；再把各段 Pass **拼成「全绿」** |
| **单批/开发中调试** | 允许 `-s OneSuite` | 不得据此宣称「工程整测通过」 |

**与 ohhdc 多 Suite 分次设备 unittest 的区别**（勿混）：

| 做法 | 是否允许 | 说明 |
|------|----------|------|
| **一次** `deploy-test -s A,B,C` | ✅ | ohhdc **内部**对多 class **分次**设备 unittest（避免设备挂起），但 **只卸装/安装一次** → **算连跑** |
| 循环三次各自 `deploy-test -s A` / `-s B` / `-s C` | ❌ | 每次重装，洗掉 Suite 间状态 → **假绿** |

报告可信条件：会话/HTML 须对应**同一次**装包后的连跑日志；禁止多段日志人工相加当整测。

### 动态双 HAP：主包页面 vs 测包用例（StateMgmtNullUndefined 实锤）

> **现象**：本地宣称全绿，门禁/xDevice 产物手动测才发现「装饰器异常入参导致页面崩溃」（如 `@Monitor(null)` → `Cannot read property enableWildcard of null`）。

| 根因 | 说明 | 必须 |
|------|------|------|
| **主包过期** | 页面在 `entry/src/main`（主 HAP），用例在 ohosTest；只 `build-test`/`只装测包` 时主包仍是旧页面 → **本地装不到崩溃页** | 改页面后必须 `build` + `build-test` + `sign`，`deploy-test` 装 **主+测** 两包；宣称绿前核对两包 mtime |
| **push 吞错** | `PagePushHelper.pushPage` 若 `catch` 后不 `throw`，页面 abc 崩溃（`Cannot execute ark file` / push `code:100001`）可能被后续弱断言漏掉 | `pushUrl` 失败必须抛出；`assertTitleVisible` 找不到节点必须 Fail |
| **编过 ≠ 可加载** | 部分装饰器 null/undefined **编译通过、运行崩溃** | 不可测则删异常用例并归档；禁止「用合法参数冒充已覆盖异常入参」 |

**宣称工程全绿前自检**：同一次 `deploy-test` 日志中无 `Cannot execute ark file`、`enableWildcard of null`、`[PagePushHelper] push ... error`；HTML 对应该次装包。

## ArkTS 高频

| 问题 | 自动？ | 修复 |
|------|--------|------|
| `TestType.Function` | ✅ | `TestType.FUNCTION` |
| 大写 `String` | ✅ | `string` |
| `@tc.name:` 冒号 | ✅ | 空格分隔 |
| `*/` 与 `it()` 空行 | ✅ | 删空行 |
| `int` | 报告（**仅动态**） | 改 `number`；**`'use static'` 文件跳过**（`int` 合法） |
| `.key('foo')` 无下划线 | 报告 | `页面名_组件名` |
| static 十六进制 fontColor | 报告 | `ResourceColor` 或字符串 |
| Dialog 遮罩/`pressBack` → 下 Suite `Empty Text`/`null.click` | — | NORMAL 后关弹窗；空 Inspector 勿 `JSON.parse`；Suite **间**禁 `pressBack`；见上节**整测须一次连跑** |
| Dialog `DocumentViewPicker` 模拟 UEC → 后续 Suite 全 `component not found` | — | **禁止**系统 FilePicker/UIExtension；改可自动化子窗正例；禁 `expect(true)`/`env skip` 假绿 |
| 拆多次 deploy-test 重装后宣称全绿 | — | 工程整测改为**一次连跑**全部 Suite（见上节） |
| 双 HAP 只编测包 / 主包过期 → 本地假绿、门禁页崩溃 | — | 改 `MainAbility/pages` 后必须重编**主+测**并双包安装；见上节「主包页面 vs 测包」 |
| `PagePushHelper` 吞 `pushUrl` 错误 | — | catch 后必须 `throw`；页面装饰器崩溃应直接 Fail |
| 裸 `it()` 无 `@tc.*` JSDoc | 报告 | 每条 `it` 同批写全六字段；`gate_review` 扫 `*.test.ets`（含一体工程 `entry/.../test/`） |

## C++ 高频（仅 capi profile / ohxtscapi）

| 规则 | 自动？ | 修复 |
|------|--------|------|
| G.FMT.06-CPP | ✅ | 实参续行 = **起始行缩进 + 4**（非固定 8） |
| G.FMT.05 行宽 | 报告 | 手工折行 |
| nbnc / 圈复杂度 | — | 见 [reference.md](reference.md) |
| CAPI 工程整测拆多次 `deploy-test` 重装拼绿 | — | **一次** `ohxtscflow deploy-test -s SuiteA,SuiteB,...`（ohhdc 内部分次设备 unittest、**不重装**）；见上节 |

G.FMT.06 示例见 [reference.md](reference.md)。

---

## PR 前 / ace_engine / Inspector

- 勾选清单：[checklist.md](checklist.md)
- C++ 详解：[reference.md](reference.md)、[references/cpp-compliance-reference.md](references/cpp-compliance-reference.md)
- Inspector 案例：[examples-cpp-inspector.md](examples-cpp-inspector.md)

---

## AI 执行要点

1. **禁止**让用户手动跑 `scan_gate_patterns.py`，除非调试；正常走 `run-*-pipeline`
2. 设备测试未全 Pass 不做 gate commit
3. gate exit 2 → 修代码 → **加固本 skill** → `--skip-test-check` 重跑
4. 只 `git add` 本工程路径；单笔 diff +与-之和 <2000
5. **门禁手工修复后必须加固本 skill**（见上文「门禁修复 → Skill 加固」）
