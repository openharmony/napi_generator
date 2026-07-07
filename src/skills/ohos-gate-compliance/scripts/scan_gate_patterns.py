#!/usr/bin/env python3
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

"""Scan ArkTS files for common PR gate / Quality issues (CLI)."""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

from arkts_patterns import RULES, scan_ets_text

SKIP_DIRS = {".git", "node_modules", "oh_modules", "build", "out", "autosign", "hypium"}


def iter_ets_files(root: Path, subpaths: list[str]) -> list[Path]:
    files: list[Path] = []
    for sp in subpaths:
        p = root / sp.replace("\\", "/")
        if p.is_file() and p.suffix == ".ets":
            files.append(p)
            continue
        if p.is_dir():
            for f in p.rglob("*.ets"):
                if any(part in SKIP_DIRS for part in f.parts):
                    continue
                files.append(f)
    return sorted(set(files))


def main() -> int:
    parser = argparse.ArgumentParser(description="Scan ArkTS gate patterns")
    parser.add_argument("--repo", required=True, help="Repository root")
    parser.add_argument(
        "--paths",
        nargs="+",
        default=["arkui/"],
        help="Files or dirs under repo (default: arkui/)",
    )
    args = parser.parse_args()
    root = Path(args.repo).resolve()
    if not root.is_dir():
        print(f"ERROR: not a directory: {root}", file=sys.stderr)
        return 2

    files = iter_ets_files(root, args.paths)
    all_hits: list[tuple[Path, str, int, str]] = []
    for f in files:
        text = f.read_text(encoding="utf-8", errors="replace")
        rel = f.relative_to(root).as_posix()
        for h in scan_ets_text(f, text):
            all_hits.append((f, h.rule, h.line, h.message))

    by_rule: dict[str, int] = {}
    for _, rule, _, _ in all_hits:
        by_rule[rule] = by_rule.get(rule, 0) + 1

    print(f"Scanned {len(files)} .ets files under {root}")
    print(f"Issues: {len(all_hits)}")
    for rule, cnt in sorted(by_rule.items()):
        print(f"  {rule}: {cnt}")

    for path, rule, line_no, msg in all_hits[:80]:
        rel = path.relative_to(root).as_posix()
        print(f"\n[{rule}] {rel}:{line_no}")
        print(f"  {msg}")
    if len(all_hits) > 80:
        print(f"\n... and {len(all_hits) - 80} more")

    return 1 if all_hits else 0


if __name__ == "__main__":
    sys.exit(main())
