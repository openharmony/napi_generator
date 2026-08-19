#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""按统一问题方案库（solutions.json）自动修复编译错误。

用法：
  python3 build/fix_compile_errors.py --logdir <日志目录> [--proj <工程>] [--dry-run]
  python3 build/fix_compile_errors.py --log <单日志> [--proj <工程>]

工作流：日志错误 → solutions 检索（同类问题直接复用处置脚本）→ 未匹配的新问题
用 solutions/add_solution.py 固化（自动维护，实时强化）。
"""
from __future__ import annotations

import argparse
import sys
from collections import defaultdict
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from solutions.search_solution import search, search_and_apply  # noqa: E402
from common.paths import REPO  # noqa: E402


def fix_from_logs(logdir: Path, proj_filter: str = "", dry_run: bool = False) -> dict:
    """分析日志目录 → 逐工程检索方案库并应用处置脚本。"""
    stats = {"applied": 0, "changed_files": 0, "hints": 0, "unmatched": 0}
    for log in sorted(logdir.glob("*.log")):
        # 工程名从日志名还原（rel 的 / 换成 _）
        proj = log.stem.replace("_", "/", 2) if "_" in log.stem else log.stem
        if proj_filter and proj_filter not in proj:
            continue
        proj_path = REPO / proj
        r = search_and_apply("", proj=proj_path if proj_path.exists() else None,
                             domain="build", dry_run=dry_run, log_file=log)
        for h in r["hits"]:
            stats["applied"] += 1
            print(f"  [{proj}] {h}")
        stats["unmatched"] += len(r["unmatched"])
        for e in r["unmatched"]:
            print(f"  [UNMATCHED] {proj}: {e[:130]}")
    return stats


def main() -> None:
    ap = argparse.ArgumentParser(description="按统一方案库自动修复编译错误")
    ap.add_argument("--logdir", default="", help="编译日志目录")
    ap.add_argument("--log", default="", help="单个日志文件")
    ap.add_argument("--proj", default="", help="只修指定工程（子串匹配）")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    if args.logdir:
        s = fix_from_logs(Path(args.logdir), args.proj, args.dry_run)
        print(f"\nSUMMARY: applied={s['applied']} unmatched={s['unmatched']} "
              f"(未匹配用 solutions/add_solution.py 固化)")
    elif args.log:
        r = search_and_apply("", proj=REPO / args.proj if args.proj else None,
                             domain="build", dry_run=args.dry_run,
                             log_file=Path(args.log))
        print(f"命中 {len(r['hits'])} 条，未匹配 {len(r['unmatched'])} 条")
        for h in r["hits"]:
            print(" ", h)
        for e in r["unmatched"][:20]:
            print("  UNMATCHED:", e[:150])
    else:
        ap.print_help()


if __name__ == "__main__":
    main()
