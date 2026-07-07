#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""WordsTool 文档用词扫描（skill / reference markdown）。"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path

SKIP_DIRS = {".git", "node_modules", "build", "out", "__pycache__"}
DOC_SUFFIXES = {".md", ".py", ".sh"}


@dataclass
class DocHit:
    path: Path
    line: int
    rule: str
    message: str


def _build_rules() -> list[tuple[str, re.Pattern[str], str]]:
    vue = "V" + "ue"
    fastest = "最" + "快"
    win_preview = "m" + "i" + "n" + "g" + "w"
    ide_name = "C" + "u" + "r" + "s" + "o" + "r"
    return [
        (
            "WordsTool.VUE",
            re.compile(rf"\b{vue}\b", re.I),
            "避免产品名 VUE，改用 Element Plus 单页报告等中性表述",
        ),
        (
            "WordsTool.FASTEST",
            re.compile(fastest),
            "避免「最快」，改用「优先增量编译验证」或「耗时较短」",
        ),
        (
            "WordsTool.WIN_PREVIEW",
            re.compile(win_preview, re.I),
            "避免 mingw，改用 Windows 预览 SDK / Windows 预览工具链",
        ),
        (
            "WordsTool.IDE_NAME",
            re.compile(ide_name, re.I),
            "避免 IDE 产品名，改用 Agent / IDE / 点开头的本地配置目录",
        ),
    ]


RULES = _build_rules()


def _should_scan_file(path: Path) -> bool:
    if path.suffix not in DOC_SUFFIXES:
        return False
    if any(part in SKIP_DIRS for part in path.parts):
        return False
    if path.name == "scan_wordstool_docs.py":
        return False
    return True


def _iter_doc_files(roots: list[Path]) -> list[Path]:
    files: list[Path] = []
    for root in roots:
        if root.is_file() and _should_scan_file(root):
            files.append(root)
            continue
        if not root.is_dir():
            continue
        for fp in root.rglob("*"):
            if fp.is_file() and _should_scan_file(fp):
                files.append(fp)
    return sorted(set(files))


def scan_text(path: Path, text: str) -> list[DocHit]:
    hits: list[DocHit] = []
    for i, line in enumerate(text.splitlines(), 1):
        for rule_id, pat, msg in RULES:
            if pat.search(line):
                hits.append(DocHit(path, i, rule_id, msg))
    return hits


def scan_roots(roots: list[Path]) -> list[DocHit]:
    all_hits: list[DocHit] = []
    for fp in _iter_doc_files(roots):
        try:
            text = fp.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        all_hits.extend(scan_text(fp, text))
    return all_hits


def main() -> int:
    parser = argparse.ArgumentParser(description="Scan skill docs for WordsTool terms")
    parser.add_argument(
        "paths",
        nargs="+",
        help="Skill directories or files to scan",
    )
    args = parser.parse_args()
    roots = [Path(p).resolve() for p in args.paths]
    hits = scan_roots(roots)
    by_rule: dict[str, int] = {}
    for h in hits:
        by_rule[h.rule] = by_rule.get(h.rule, 0) + 1
    print(f"Scanned docs under {len(roots)} root(s); issues: {len(hits)}")
    for rule, cnt in sorted(by_rule.items()):
        print(f"  {rule}: {cnt}")
    for h in hits[:80]:
        print(f"\n[{h.rule}] {h.path}:{h.line}")
        print(f"  {h.message}")
    if len(hits) > 80:
        print(f"\n... and {len(hits) - 80} more")
    return 1 if hits else 0


if __name__ == "__main__":
    sys.exit(main())
