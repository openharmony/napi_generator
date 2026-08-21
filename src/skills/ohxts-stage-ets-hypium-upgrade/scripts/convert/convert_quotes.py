#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""引号规范批量转换：工程内代码文件（.ets/.ts/.js）双引号 → 单引号（版权头除外）。

用法：
  # 转换整个工程（保持行尾）
  python3 convert_quotes.py --proj ability/xxx/yyy
  # 只检查不改写（幂等检查：是否转化完全）
  python3 convert_quotes.py --proj ability/xxx/yyy --check
  # 单文件
  python3 convert_quotes.py --file path/to/File.ets

排除：oh_modules/node_modules/build/.hvigor/autosign/.preview；不处理 .json5/.json（JSON 语法要求双引号）。
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.git_utils import REPO, write_preserve_eol  # noqa: E402
from common.quotes import dq_to_sq, is_fully_converted  # noqa: E402

EXCLUDE_SEGMENTS = ("oh_modules", "node_modules", "build", ".hvigor",
                    "autosign", ".preview", ".idea", ".cxx")


def convert_file(path: Path, dry_run: bool = False) -> dict:
    """转换单文件，保持行尾。返回 {'path', 'converted', 'changed'}。"""
    text = path.read_text(errors="replace")
    new_text = dq_to_sq(text)
    converted = sum(1 for a, b in zip(text, new_text) if a == '"' and b == "'")
    if converted and not dry_run:
        write_preserve_eol(path, text, new_text)
    return {"path": str(path), "converted": converted,
            "changed": converted > 0}


def convert_project(proj: Path, dry_run: bool = False, check: bool = False) -> list[dict]:
    """转换工程内全部代码文件。check=True 只检查不改写。"""
    results = []
    for f in sorted(proj.rglob("*.ets")) + sorted(proj.rglob("*.ts")) + sorted(proj.rglob("*.js")):
        if any(seg in f.parts for seg in EXCLUDE_SEGMENTS):
            continue
        if f.name == "hvigorfile.ts" or f.name == "hvigorfile.js" or f.name.endswith(".d.ts"):
            continue
        if check:
            text = f.read_text(errors="replace")
            if not is_fully_converted(text):
                results.append({"path": str(f), "converted": 0, "changed": False,
                                "incomplete": True})
            continue
        results.append(convert_file(f, dry_run))
    return results


def main() -> None:
    ap = argparse.ArgumentParser(description="引号规范批量转换（双→单，版权头除外）")
    ap.add_argument("--proj", help="工程路径（REPO 相对）")
    ap.add_argument("--file", help="单文件路径（REPO 相对）")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--check", action="store_true", help="只检查转化是否完全，不改写")
    args = ap.parse_args()

    if args.file:
        results = [convert_file(REPO / args.file, args.dry_run)]
    elif args.proj:
        results = convert_project(REPO / args.proj, args.dry_run, args.check)
    else:
        sys.exit("需指定 --proj 或 --file")

    total = sum(r.get("converted", 0) for r in results)
    incomplete = [r["path"] for r in results if r.get("incomplete")]
    changed = [r["path"] for r in results if r.get("changed")]
    print(f"scan={len(results)} converted_quotes={total} "
          f"changed_files={len(changed)} incomplete={len(incomplete)}")
    for r in results:
        if r.get("incomplete"):
            print(f"  [转化不完全] {r['path']}")
        elif r.get("changed"):
            print(f"  {r['converted']:3d} 处 | {r['path']}")


if __name__ == "__main__":
    main()
