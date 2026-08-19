#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""辅助包 master 源码 GN 编译（2026-08-18 新增，第 3 点）。

背景：部分辅助包（rely/assist）在本仓 hvigor 直接编译失败时，可通过
master 源码 xts 子系统 GN 编译（xts-develop-master-cycle 能力封装）。

用法：
  python3 build/build_dep_master.py <工程相对路径> [--suite <modules.json 套件名>]
  python3 build/build_dep_master.py --list            # 列出可用套件

流程：查 modules.json（工程目录名匹配 suite）→ 调 run-develop-cycle.sh --skip-test
（同步 develop→master + GN 编译）→ 输出 HAP 路径（MASTER_OUT/suites/haps）。
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

SKILL = Path("/root/aiSkill/.claude/skills/xts-develop-master-cycle")
MODULES_JSON = SKILL / "modules.json"
CYCLE_SH = SKILL / "scripts" / "run-develop-cycle.sh"
MASTER_ACTS = Path("/root/master/test/xts/acts")
MASTER_OUT = Path("/root/master/out/rk3568")


def load_modules() -> dict:
    return json.loads(MODULES_JSON.read_text())


def find_suite(proj_rel: str) -> str | None:
    """按工程相对路径反查 suite 名（remoteRel 匹配）。"""
    d = load_modules()
    for suite, meta in d.items():
        if suite.startswith("_"):
            continue
        rel = meta.get("remoteRel", "")
        if rel and (rel == proj_rel or proj_rel.endswith("/" + rel)
                    or rel.endswith(proj_rel.rsplit("/", 1)[-1])):
            return suite
    return None


def build(proj_rel: str, suite: str = "") -> list[Path]:
    suite = suite or find_suite(proj_rel) or ""
    if not suite:
        print(f"[build_dep_master] modules.json 未找到 {proj_rel} 对应套件；"
              f"可 --suite 指定（--list 查看）")
        return []
    print(f"[build_dep_master] 套件 {suite} 走 master GN 编译（同步 + 编译，跳过测试）")
    r = subprocess.run(["bash", str(CYCLE_SH), "--skip-test", suite],
                       capture_output=True, text=True, timeout=1800)
    print(r.stdout[-1500:])
    if r.returncode != 0:
        print(f"[build_dep_master] FAIL: {r.stderr[-500:]}")
        return []
    # 收集编译产物
    haps = []
    if MASTER_OUT.exists():
        for p in sorted(MASTER_OUT.rglob("*.hap")):
            if "suites" in p.parts:
                haps.append(p)
    print(f"[build_dep_master] 产物 {len(haps)} 个 HAP")
    return haps


def main() -> None:
    ap = argparse.ArgumentParser(description="辅助包 master GN 编译")
    ap.add_argument("proj", nargs="?", default="", help="工程相对路径")
    ap.add_argument("--suite", default="", help="modules.json 套件名")
    ap.add_argument("--list", action="store_true", help="列出可用套件")
    args = ap.parse_args()
    if args.list:
        for s in sorted(load_modules()):
            if not s.startswith("_"):
                print(f"  {s}")
        return
    if not args.proj:
        ap.print_help()
        return
    haps = build(args.proj, args.suite)
    for h in haps:
        print("HAP:", h)


if __name__ == "__main__":
    main()
