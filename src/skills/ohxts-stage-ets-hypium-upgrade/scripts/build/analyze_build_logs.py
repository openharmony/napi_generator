#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""批量编译日志分析：按知识库（rules.json）分类汇总错误。

输入：日志目录（每工程一个 .log）或单个日志。
输出：按错误类别分组 → 每类列出 (工程, 文件, 消息)，供 fix_compile_errors.py 批量修复。
"""
from __future__ import annotations

import argparse
import re
import sys
from collections import defaultdict
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from solutions.search_solution import search  # noqa: E402


def extract_errors(log_text: str) -> list[dict]:
    """从日志提取 (消息, At file) 错误列表（去重、去色码）。

    At File 可能与消息同行（`Error Message: xxx At File: path:行:列`）。
    """
    text = re.sub(r"\x1b\[[0-9;]*m", "", log_text)
    errors = []
    seen = set()
    for m in re.finditer(r"(?m)^\s*(?:ERROR|Error Message)\s*[:：]\s*([^\n]{10,600})", text):
        msg = m.group(1).strip()
        # 同行 At File（形如 `... At File: /path:12:34`）
        fm = re.search(r"(?:At file|At File|at file)\s*[:：]\s*(.+?)(?::\d+:\d+)?\s*$", msg)
        err_file = ""
        if fm:
            err_file = fm.group(1).strip()
            msg = msg[:fm.start()].rstrip()
        key = (msg[:120], err_file)
        if key not in seen:
            seen.add(key)
            errors.append({"msg": msg, "file": err_file})
    return errors


def analyze_log_dir(logdir: Path) -> dict:
    """分析日志目录，返回 {rule_id: {proj: [(msg, file)]}}。"""
    grouped: dict[str, dict] = defaultdict(lambda: defaultdict(list))
    unmatched = []
    for log in sorted(logdir.glob("*.log")):
        proj = log.stem.replace("_", "/", 2) if "_" in log.stem else log.stem
        errs = extract_errors(log.read_text(errors="replace"))
        for e in errs:
            hits = search(e["msg"], "build")
            rule = hits[0] if hits else None
            if rule and rule.get("id"):
                grouped[rule["id"]][proj].append((e["msg"], e["file"]))
            else:
                unmatched.append((proj, e))
    return {"grouped": grouped, "unmatched": unmatched}


def print_summary(result: dict) -> None:
    grouped, unmatched = result["grouped"], result["unmatched"]
    print(f"=== 错误分类汇总（{len(grouped)} 类）===")
    for rule_id, by_proj in sorted(grouped.items()):
        total = sum(len(v) for v in by_proj.values())
        print(f"\n[{rule_id}] {total} 处 / {len(by_proj)} 工程")
        for proj, items in sorted(by_proj.items()):
            first = items[0][0][:100]
            print(f"  {proj}: {len(items)} 处 | {first}")
    print(f"\n=== 未匹配错误 {len(unmatched)} 条（需人工分析，可新增 rules.json）===")
    for proj, e in unmatched[:30]:
        print(f"  {proj}: {e['msg'][:140]}")
    if len(unmatched) > 30:
        print(f"  ... 其余 {len(unmatched) - 30} 条")


def main() -> None:
    ap = argparse.ArgumentParser(description="批量编译日志错误分类")
    ap.add_argument("logs", help="日志目录或单个 .log 文件")
    ap.add_argument("--proj-name", default="", help="单日志时工程名")
    args = ap.parse_args()

    p = Path(args.logs)
    if p.is_file():
        errs = extract_errors(p.read_text(errors="replace"))
        print(f"日志共 {len(errs)} 条错误：")
        for e in errs[:50]:
            hits = search(e["msg"], "build")
            rule = hits[0] if hits else None
            print(f"  [{rule[id] if rule else UNMATCHED}] {e[msg][:130]}")
        return
    print_summary(analyze_log_dir(p))


if __name__ == "__main__":
    main()
