#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""批量编译（并行）+ 每轮错误汇总。

用法：
  python3 build/build_batch.py --list <工程清单> [--jobs 8] [--logdir <dir>] [--round rNN]
  python3 build/build_batch.py --summary --logdir <dir>   # 只汇总已落盘日志
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.build_utils import build_batch  # noqa: E402
from common.paths import REPO  # noqa: E402

sys.path.insert(0, str(Path(__file__).resolve().parent))
from analyze_build_logs import analyze_log_dir, print_summary  # noqa: E402


def main() -> None:
    ap = argparse.ArgumentParser(description="批量编译 + 错误汇总")
    ap.add_argument("--list", default="", help="工程相对路径清单文件（每行一个）")
    ap.add_argument("--jobs", type=int, default=8)
    ap.add_argument("--logdir", default="/tmp/req1_build")
    ap.add_argument("--round", default="", help="轮次标签（日志名前缀，如 r85）")
    ap.add_argument("--summary", action="store_true", help="只汇总不编译")
    args = ap.parse_args()

    logdir = Path(args.logdir)
    if args.summary:
        print_summary(analyze_log_dir(logdir))
        return

    projects = [ln.strip() for ln in open(args.list) if ln.strip()]
    if not projects:
        print("empty list")
        return
    results = build_batch(projects, args.jobs, logdir)
    fails = {k: v for k, v in results.items() if not v["ok"]}
    print(f"\n===== ROUND {args.round} SUMMARY: {len(results) - len(fails)}/{len(results)} PASS =====")
    for k, v in sorted(fails.items()):
        print(f"FAIL {k}: {v['error']}")
    # 错误分类汇总
    print()
    print_summary(analyze_log_dir(logdir))


if __name__ == "__main__":
    main()
