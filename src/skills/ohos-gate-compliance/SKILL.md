---
name: ohos-gate-compliance
description: >-
  OpenHarmony 统一门禁检查（v2.0 整合版）：代码门禁检查（ETS/ArkTS + C++ 项目，检查+自动修复）
  + skill 门禁检查（提交 napi_generator/src/skills 时自动触发）。规则全部脚本化
  （rules/*.json 规则注册表 + scripts/checkers/* 检查器），无 md 文本规则。
  触发词：门禁、CodeCheck、gate-review、PR 提交前、skill 门禁、G.FMT.06。
version: "2.0.0"
---

# 统一门禁检查（ohos-gate-compliance v2.0）

整合来源：原 ohos-gate-compliance + ohos-gate-compliance-pr-check（已并入，脚本化）
+ ohxts-stage-ets-hypium-upgrade 门禁能力 + xts-git-commit/commit_push 代码检查规范能力。

## 两大功能

| 功能 | 时机 | 入口 |
|------|------|------|
| **代码门禁检查**（核心） | XTS 用例工程提交前（ETS/ArkTS + C++） | `gate_check.py code` |
| **skill 门禁检查** | 提交 napi_generator/src/skills 时（pre-commit hook 自动） | `gate_check.py skill` |

## 入口命令

```bash
# 代码门禁：扫描工程（自动识别 ets/capi profile），--fix 自动修复两轮后复查
python3 src/skills/ohos-gate-compliance/scripts/gate_check.py code <工程目录> [--fix] [--strict]
# 只查改动代码（提交前）：--base 分支对比 / --staged 暂存区
python3 .../gate_check.py code <工程> --base origin/master
python3 .../gate_check.py code <工程> --staged
# 指定 profile / 只看某类规则
python3 .../gate_check.py code <工程> --profile capi --rule G.FMT.02,G.NAM.03
# skill 门禁（提交 src/skills 前；hook 已自动执行）
python3 .../gate_check.py skill [<skill目录>] [--staged] [--strict]
# pipeline（设备整测通过后门禁 review + commit，兼容原 gate_review.py）
python3 .../gate_check.py pipeline <工程> -s <Suite> [--skip-commit] [--commit-title "..."]
# 提交编排（门禁审计 + 行数审计 + -sm 提交 + 验证）
python3 .../scripts/commit_utils.py -m "test(ability): xxx" --cwd <仓库>
```

退出码：`0` 通过；`1` 有违规（--strict 阻断）或失败；`2` pipeline 未修复项。

## 规则注册表（全部脚本化，规则本体在 checkers/）

| 注册表 | 规则数 | 覆盖 |
|--------|--------|------|
| `rules/rules_ets.json` | 38 | G.EXT/G.FMT/G.NAM、XTS.CHECK.*（TCNUMBER/ASYNC/ERROR_CODE/恒真断言）、COMPILE.*（import/any/private）、xtscheck @tc、CI.KIT.01、WordsTool 系列、ArkTS Quality（int/String/TestType/Array/ESObject） |
| `rules/rules_cpp.json` | 8 | G.FMT.06-CPP（自动修复）、G.FUD.05 nbnc≤50、行宽、FUNC.CC≤20 / FUNC.DEPTH≤4 / MAGIC.NUM / HEADER.NBNC≤300（启发式）、OAT.3 许可证头 |
| `rules/rules_skill.json` | 9 | FILE.NBNC≤2000、FUNC.NBNC≤50、FUNC.CC≤20、FUNC.DEPTH≤4、G.NAM.01、G.EDV.04（禁 shell=True/bash argv0）、SYNTAX、WordsTool 词表、PY.COMPILE |

规则字段：`{id, name, category, severity, detect, pattern, fix}`；detect 取值
`regex/heuristic/length/ast/build/manual`，对应 checkers 内实现。

## 检查器（scripts/checkers/）

| 模块 | 职责 | 自动修复 |
|------|------|----------|
| `ets_checker.py` | ETS/TS/JS 全量规则（迁移自 code_selfcheck+arkts_patterns+gate_review） | @tc 冒号/空行、ArkTS Quality、G.FMT.10/08/11、WordsTool.97 字体、引号转换 dq_to_sq |
| `cpp_checker.py` | C++ 规则（fmt06 修复 + 启发式 CC/深度/魔法数/头文件/许可证头） | G.FMT.06-CPP 缩进 |
| `config_checker.py` | build-profile.json5 compileSdkVersion | CI.SDK.01 → "M.S.F" |
| `git_checker.py` | git 层：版权头（merge-base）/违禁文件/整文件重写/数据安全/新增行质量 | 无（报告） |
| `skill_checker.py` | skill 仓：Python AST 门禁 + WordsTool 词表 + py_compile | 无（报告） |
| `pipeline.py` | 设备整测通过后：测试校验→profile→两轮修复→commit（兼容 gate_review.py） | 聚合以上修复 |
| `commit_utils.py` | 提交编排：审计→行数（≤1900）→`-sm -F`→提交后验证 | 无 |

## 门禁铁律

- **代码门禁**：设备整测全绿 → `gate_check.py code <工程> --fix --strict` → 剩余项人工修 →
  `commit_utils.py -m "test(scope): ..."`（自动 -sm + Co-authored-by: Agent，单笔 ≤1900 行）
- **skill 门禁**：pre-commit hook（`scripts/hooks/pre-commit.skill-gate`）在提交
  `napi_generator/src/skills` 时自动执行；安装：`bash scripts/install_hooks.sh`
- **自举**：本 skill 自身代码也必须过 skill 门禁（FUNC.NBNC/CC/DEPTH、G.EDV.04、WordsTool）
- **加固**：门禁失败手工修复的规则须同步固化（rules/*.json 或 checker 实现），禁止只改代码

## 兼容与迁移

- `scripts/gate_review.py` 保留为 v1 兼容入口（ohxtscapi/ohxtsdynamic/ohxtsstatic 的
  `ohxtsflow.py` 继续可用），内部走 pipeline.py + checkers
- 原 `scripts/scan_skill_repo_gate.py` / `scan_wordstool_docs.py` / `precheck_skill_commit.sh`
  已并入 `checkers/skill_checker.py` + `gate_check.py skill`，不再单独维护
- C++ 手册（编译陷阱/Inspector 约束）见 `docs/cpp-guide.md`；PR 自检清单见 `docs/checklist.md`
