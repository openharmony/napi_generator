#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""提交前门禁检查（xts-git-commit 脚本化，2026-08）：
①版权头：基线有头、变更后无头 → FAIL（相对 MR 基线 merge-base）
②违禁文件：staged/新增不得含 autosign、oh_modules、build/、*.hap
③bundleName/module 改动清单：AppScope/app.json5、config.json、module.json5（提示确认必要性）
④numstat 可疑整文件重写：insertions==deletions 且超过阈值
用法：check-precommit.py [--base origin/master] [--cwd <repo>]
退出码：0 全部通过；1 有硬门禁违规；2 仅有需确认项
"""
from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path

COPYRIGHT_RE = re.compile(rb"Copyright\s*\(", re.I)
FORBIDDEN = ("autosign/", "oh_modules", "/build/", ".hap")


def sh(cmd: str, cwd: Path) -> str:
    import shlex
    r = subprocess.run(shlex.split(cmd), cwd=str(cwd), capture_output=True, text=True)
    return r.stdout


for _g in ("/root/aiSkill/.claude/skills/ohos-gate-compliance/scripts/checkers",
            "/root/aiSkill/napi_generator/src/skills/ohos-gate-compliance/scripts/checkers"):
    if Path(_g).is_dir():
        sys.path.insert(0, _g)
        break


def _audit(base: str, cwd: Path) -> tuple[int, list[str]]:
    """委托统一门禁 skill：git 层检查（版权/违禁/compileSdk/重写/新增行质量）。"""
    import git_checker
    hits = (git_checker.check_copyright(cwd, base)
            + git_checker.check_forbidden(cwd)
            + git_checker.check_compile_sdk_staged(cwd)
            + git_checker.check_suspicious_rewrites(cwd)
            + git_checker.check_staged_code_quality(cwd))
    hard = {h.rule for h in hits if h.rule in ("COPYRIGHT.01", "FORBIDDEN.01", "CI.SDK.01")}
    problems = []
    for h in hits:
        tag = "HARD" if h.rule in hard else "CHECK"
        problems.append(f"[{tag}] {h.rule} {h.file}:{h.line} — {h.msg}")
    return (1 if hard else (2 if hits else 0)), problems


def main() -> None:
    ap = argparse.ArgumentParser(description="提交前门禁检查（薄包装：统一 ohos-gate-compliance）")
    ap.add_argument("--base", default="origin/master", help="MR 基线（默认 origin/master）")
    ap.add_argument("--cwd", default=".", help="仓库目录")
    args = ap.parse_args()
    cwd = Path(args.cwd).resolve()
    rc, problems = _audit(args.base, cwd)
    for p in problems:
        print(p)
    if rc == 0:
        print("✅ 门禁全部通过")
    elif rc == 1:
        print("❌ 硬门禁未通过，禁止提交")
    else:
        print("⚠️ 有需确认项，确认后提交")
    sys.exit(rc)



if __name__ == "__main__":
    main()
