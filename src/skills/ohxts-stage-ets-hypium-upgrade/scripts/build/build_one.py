#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""单工程编译入口（build_one）＋批量编译（build_batch）CLI 包装。

用法：
  python3 build/build_one.py <工程> [--log <path>]
  python3 build/build_batch.py --list <清单> [--jobs 8] [--logdir <dir>]
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.build_utils import build_one  # noqa: E402
from common.paths import REPO  # noqa: E402


def main() -> None:
    ap = argparse.ArgumentParser(description="编译工具（双 HAP：main + ohosTest）")
    ap.add_argument("proj", help="工程路径（绝对或 REPO 相对）")
    ap.add_argument("--log", default=None, help="日志路径（默认 /tmp/build_<名>.log）")
    ap.add_argument("--timeout-main", type=int, default=400)
    ap.add_argument("--timeout-test", type=int, default=400)
    args = ap.parse_args()

    proj = Path(args.proj)
    if not proj.is_absolute():
        proj = REPO / args.proj
    r = build_one(proj, args.timeout_main, args.timeout_test,
                  Path(args.log) if args.log else None)
    print("PASS" if r["ok"] else f"FAIL: {r['error']}")
    print(f"main_rc={r['main_rc']} test_rc={r['test_rc']}")
    print(f"log={r['log']}")
    sys.exit(0 if r["ok"] else 1)


if __name__ == "__main__":
    main()
