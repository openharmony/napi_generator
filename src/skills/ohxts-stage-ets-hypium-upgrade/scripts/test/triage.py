#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""测试失败处置：统一问题方案库（solutions.json domain=test）检索 → 自动处置或输出指引。

用法：
  python3 triage.py <工程相对路径> "<错误信息>"
  python3 triage.py --tsv <rel>          # 从 test_summary.tsv 取该工程最新失败原因

经验固化：handler 解决后新问题写入统一方案库（solutions/add_solution.py），实时强化。
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from solutions.search_solution import search  # noqa: E402


def dispatch(rel: str, err: str, dry_run: bool = False) -> dict:
    """检索方案库 → 调 handler 或返回指引。返回 {'rule','handled','actions','hint','verdict'}。"""
    hits = search(err, "test")
    if not hits:
        return {"rule": None, "handled": False, "actions": [],
                "hint": "方案库未匹配（新问题）：需人工分析（hilog/faultlog/用例代码/依赖）→ "
                        "解决后固化为方案：solutions/add_solution.py --domain test",
                "verdict": ""}
    rule = hits[0]
    base = {"rule": rule["id"],
            "verdict": rule.get("verdict", ""),
            "hint": rule.get("hint", "")}
    if dry_run or not rule.get("handler"):
        return {**base, "handled": False, "actions": []}
    try:
        from solutions.search_solution import _call_handler
        actions = _call_handler(rule["handler"], Path("/root/aiSkill/develop/xts_acts") / rel,
                                rule["match"], err)
        return {**base, "handled": True, "actions": actions}
    except Exception as e:
        return {**base, "handled": False,
                "actions": [], "hint": f"handler 执行失败({e})：{rule.get('hint', '')}"}


def last_error_from_tsv(rel: str) -> str:
    """从 test_summary.tsv 取该工程最新失败原因。"""
    tsv = Path("/root/aiSkill/develop/dongwei/进度/test_summary.tsv")
    err = ""
    for line in tsv.read_text(errors="replace").splitlines():
        parts = line.split("\t")
        if len(parts) >= 6 and parts[1] == rel:
            err = parts[5]
    return err


def main() -> None:
    ap = argparse.ArgumentParser(description="测试失败处置（知识库驱动）")
    ap.add_argument("rel", help="工程相对路径")
    ap.add_argument("err", nargs="?", default="", help="错误信息（缺省从 TSV 取）")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    err = args.err or last_error_from_tsv(args.rel)
    if not err:
        print("无错误信息（TSV 无记录）")
        return
    print(f"工程: {args.rel}")
    print(f"错误: {err[:200]}")
    r = dispatch(args.rel, err, args.dry_run)
    print(f"规则: {r['rule']}")
    print(f"自动处置: {'✅ 已执行' if r['handled'] else '⏸️ 需人工'}")
    if r["actions"]:
        print("处置动作:")
        if isinstance(r["actions"], str):
            for a in r["actions"].split("；"):
                print(f"  - {a}")
        else:
            for a in r["actions"]:
                print(f"  - {a}")
    if r["hint"]:
        print(f"指引: {r['hint']}")


if __name__ == "__main__":
    main()
