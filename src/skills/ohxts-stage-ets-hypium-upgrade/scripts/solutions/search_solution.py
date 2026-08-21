#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""问题方案库检索器：编译/测试报错 → 先检索统一方案库（solutions.json），
同类问题直接复用处置脚本，无需重新分析。

用法：
  python3 solutions/search_solution.py "<错误文本>" [--domain build|test|all] [--apply <工程路径>] [--dry-run]
  python3 solutions/search_solution.py --log <编译/测试日志> [--domain build] [--apply <工程路径>]

行为：
- 匹配：按 pattern 正则检索，返回所有命中方案（按匹配位置排序）
- --apply：自动调用处置脚本（handler 指向的模块.函数），命中次数 count+1 写回
- 未命中：输出 UNMATCHED，提示用 add_solution.py 固化新方案（自动维护）
"""
from __future__ import annotations

import argparse
import importlib
import json
import re
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.paths import REPO as _REPO  # noqa: E402
SOLUTIONS_FILE = Path(__file__).resolve().parent / "solutions.json"
DOMAIN_DIRS = {"build": "build.fixers", "test": "test.handlers"}


def load_solutions() -> list[dict]:
    return json.loads(SOLUTIONS_FILE.read_text())["solutions"]


def save_solutions(solutions: list[dict]) -> None:
    data = json.loads(SOLUTIONS_FILE.read_text())
    data["solutions"] = solutions
    SOLUTIONS_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=1))


def search(err: str, domain: str = "all") -> list[dict]:
    """检索：按 pattern 匹配错误文本。返回命中方案列表（含 match 分组）。"""
    hits = []
    for s in load_solutions():
        if domain != "all" and s["domain"] != domain:
            continue
        m = re.search(s["pattern"], err, re.I)
        if m:
            hits.append({**s, "match": m.groupdict() or {}})
    return hits


def _call_handler(handler: str, proj: Path, match: dict, err_file: str = "") -> list[str]:
    if not handler:
        return []
    mod_name, fn_name = handler.split(".")
    if mod_name.startswith("fix_"):
        pkg = "build.fixers"
    elif mod_name.startswith("handle_"):
        pkg = "test.handlers"
    else:
        pkg = ""
    mod = importlib.import_module(f"{pkg}.{mod_name}" if pkg else mod_name)
    fn = getattr(mod, fn_name)
    return fn(proj, match, err_file)


def _err_file_from(msg: str) -> str:
    m = re.search(r"(?:At file|At File|at file)\s*[:：]\s*([^\n:]+)", msg)
    return m.group(1).strip() if m else ""


def search_and_apply(err: str, proj: Path | None = None, domain: str = "all",
                     dry_run: bool = False, log_file: Path | None = None) -> dict:
    """检索并（可选）应用处置。返回 {'hits': [...], 'applied': [...], 'unmatched': [...]}。"""
    errors = [err]
    if log_file and log_file.is_file():
        text = re.sub(r"\x1b\[[0-9;]*m", "", log_file.read_text(errors="replace"))
        errors = [m.group(1).strip() for m in
                  re.finditer(r"(?m)^\s*(?:ERROR|Error Message)\s*[:：]\s*([^\n]{10,600})", text)]
    applied, unmatched = [], []
    solutions = load_solutions()
    today = date.today().isoformat()
    changed = False
    for e in errors:
        hits = search(e, domain)
        if not hits:
            unmatched.append(e)
            continue
        for h in hits:
            # 命中统计（自动维护：count+1）
            for s in solutions:
                if s["id"] == h["id"]:
                    s["count"] = s.get("count", 0) + 1
                    s["last_hit"] = today
                    changed = True
                    break
            if proj and h.get("handler"):
                if dry_run:
                    applied.append(f"[dry-run] {h['id']}: {h['handler']} @ {proj}")
                    continue
                changed_files = _call_handler(h["handler"], proj, h["match"],
                                              _err_file_from(e))
                applied.append(f"{h['id']}: 改动 {len(changed_files)} 文件 "
                               f"{[Path(c).name for c in changed_files][:5]}")
            elif not proj:
                applied.append(f"[{h['id']}] {h['hint']}")
    if changed:
        save_solutions(solutions)
    return {"hits": applied, "unmatched": unmatched}


def main() -> None:
    ap = argparse.ArgumentParser(description="问题方案库检索（优先复用，不重新分析）")
    ap.add_argument("err", nargs="?", default="", help="错误文本")
    ap.add_argument("--log", default="", help="从日志文件检索（自动提取全部错误）")
    ap.add_argument("--domain", choices=["build", "test", "all"], default="all")
    ap.add_argument("--apply", default="", help="应用处置脚本（工程路径，REPO 相对或绝对）")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--list", action="store_true", help="列出方案库全部方案")
    args = ap.parse_args()

    if args.list:
        for s in load_solutions():
            print(f"[{s['domain']}] {s['id']:<32s} hit={s.get('count', 0):>3d} {s['hint'][:50]}")
        return

    proj = None
    if args.apply:
        proj = Path(args.apply)
        if not proj.is_absolute():
            proj = Path("/root/aiSkill/develop/xts_acts") / args.apply
    log = Path(args.log) if args.log else None
    r = search_and_apply(args.err, proj, args.domain, args.dry_run, log)
    print(f"=== 命中 {len(r['hits'])} 条（复用经验脚本）===")
    for h in r["hits"]:
        print(" ", h)
    print(f"=== 未匹配 {len(r['unmatched'])} 条（新问题）===")
    for e in r["unmatched"][:20]:
        print(" ", e[:150])
    if r["unmatched"]:
        print("\n→ 新问题固化：python3 solutions/add_solution.py --domain build "
              "--pattern '<正则>' --handler '<模块.函数>' --hint '<指引>' "
              "（或交互式：add_solution.py）")
    if not r["hits"] and not r["unmatched"]:
        print("（无输入）")


if __name__ == "__main__":
    main()
