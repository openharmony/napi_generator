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
| **ets** | ohxtsstatic / ohxtsdynamic HAP | xtscheck、ArkTS Quality、G.FMT.05 | @tc 冒号、空行、String→string、TestType.FUNCTION |
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
| G.CNS.02 Inspector 魔法数 | `constexpr` 命名边界值 | 见 `examples-cpp-inspector.md` 案例 8 |
| `TestType.Function` | `arkts_patterns` 检测 + 自动替换 |
| 大写 `String` | `arkts_patterns.fix_arkts_quality` |
| `@tc.name:` 冒号、`*/` 空行 | `gate_review.fix_ets_xtscheck` |
| WordsTool 文档用词 | `scripts/scan_wordstool_docs.py` + `codecheck-words.sh` | 禁用易歧义产品名与口语化极限词 |
| Python 嵌套深度 ≤4 | 拆 helper（`arkts_patterns._scan_ets_line` 等） | 提交 skill 前 `py_compile` |

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

## ArkTS 高频

| 问题 | 自动？ | 修复 |
|------|--------|------|
| `TestType.Function` | ✅ | `TestType.FUNCTION` |
| 大写 `String` | ✅ | `string` |
| `@tc.name:` 冒号 | ✅ | 空格分隔 |
| `*/` 与 `it()` 空行 | ✅ | 删空行 |
| `int` | 报告 | 改 `number` |
| `.key('foo')` 无下划线 | 报告 | `页面名_组件名` |
| static 十六进制 fontColor | 报告 | `ResourceColor` 或字符串 |

## C++ 高频（仅 capi profile）

| 规则 | 自动？ | 修复 |
|------|--------|------|
| G.FMT.06-CPP | ✅ | 实参续行 = **起始行缩进 + 4**（非固定 8） |
| G.FMT.05 行宽 | 报告 | 手工折行 |
| nbnc / 圈复杂度 | — | 见 [reference.md](reference.md) |

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
