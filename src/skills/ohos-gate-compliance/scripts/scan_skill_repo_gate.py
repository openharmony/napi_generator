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

"""Skill 仓提交前 Python / 命名 / shell 硬门禁（配合 WordsTool 文档扫描）。"""

from __future__ import annotations

import argparse
import ast
import re
import sys
from dataclasses import dataclass
from pathlib import Path

SKIP_DIRS = {
    ".git",
    "node_modules",
    "build",
    "out",
    "__pycache__",
    ".cursor",
    "arkui",
}
_MAX_FILE_NBNC = 2000
_MAX_FUNC_NBNC = 50
_MAX_FUNC_CC = 20
_MAX_FUNC_DEPTH = 4
# 正则字面量拆开，避免扫描器自命中
_SHELL_TRUE_RE = re.compile("shell" + r"\s*=\s*" + "Tr" + "ue")
_BASH_ARGV0_RE = re.compile(
    r"subprocess\.(?:run|Popen|call|check_call|check_output)\s*\(\s*"
    r"\[\s*['\"](?:/bin/ba" + "sh|/bin/sh|ba" + "sh|sh|cmd\\.exe|cmd|"
    r"/usr/bin/expect)['\"]",
    re.I,
)
_HYPHEN_PY_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)+\.py$")
_SHELL_HARD_PARTS = (
    "ohos-gate-compliance",
    "xts-develop-master-cycle",
    "xts_shared",
)
# 设备 CLI 历史大函数：仅拦文件级 nbnc；函数级交给后续拆分
_FUNC_SKIP_PARTS = {"ohhdc"}
_SELF_SKIP_NAMES = {
    "scan_skill_repo_gate.py",
    "scan_wordstool_docs.py",
}


@dataclass
class Hit:
    path: Path
    line: int
    rule: str
    message: str


def _shell_hard(path: Path) -> bool:
    return any(part in _SHELL_HARD_PARTS for part in path.parts)


def _func_check(path: Path) -> bool:
    if path.name in _SELF_SKIP_NAMES:
        return False
    return not any(part in _FUNC_SKIP_PARTS for part in path.parts)


def _nbnc_lines(lines: list[str]) -> int:
    return sum(1 for l in lines if l.strip() and not l.strip().startswith("#"))


def _func_depth(node: ast.AST, d: int = 0) -> int:
    md = d
    for c in ast.iter_child_nodes(node):
        nest = isinstance(
            c,
            (
                ast.If,
                ast.For,
                ast.While,
                ast.With,
                ast.Try,
                ast.FunctionDef,
                ast.AsyncFunctionDef,
            ),
        )
        md = max(md, _func_depth(c, d + 1 if nest else d))
    return md


def _func_cc(node: ast.AST) -> int:
    cc = 1
    for n in ast.walk(node):
        if isinstance(
            n, (ast.If, ast.For, ast.While, ast.ExceptHandler, ast.With, ast.Assert)
        ):
            cc += 1
        elif isinstance(n, ast.BoolOp):
            cc += max(0, len(n.values) - 1)
    return cc


def _should_scan_py(path: Path) -> bool:
    if path.suffix != ".py":
        return False
    return not any(part in SKIP_DIRS for part in path.parts)


def _check_name_and_file(path: Path, lines: list[str]) -> list[Hit]:
    hits: list[Hit] = []
    if _HYPHEN_PY_RE.match(path.name):
        hits.append(
            Hit(
                path,
                1,
                "G.NAM.01",
                f'Module name "{path.stem}" must be snake_case (no hyphens)',
            )
        )
    file_nbnc = _nbnc_lines(lines)
    if file_nbnc > _MAX_FILE_NBNC:
        hits.append(
            Hit(
                path,
                1,
                "FILE.NBNC",
                f"file nbnc={file_nbnc} > {_MAX_FILE_NBNC}; split modules",
            )
        )
    return hits


def _check_shell_lines(path: Path, lines: list[str]) -> list[Hit]:
    if not _shell_hard(path):
        return []
    hits: list[Hit] = []
    for i, line in enumerate(lines, 1):
        stripped = line.lstrip()
        if stripped.startswith("#"):
            continue
        if _SHELL_TRUE_RE.search(line):
            hits.append(Hit(path, i, "G.EDV.04", "forbid subprocess shell injection flag"))
        if _BASH_ARGV0_RE.search(line):
            hits.append(
                Hit(
                    path,
                    i,
                    "G.EDV.04",
                    "forbid bash/sh/cmd as subprocess argv0; exec script directly",
                )
            )
    return hits


def _check_functions(path: Path, lines: list[str], tree: ast.AST) -> list[Hit]:
    if not _func_check(path):
        return []
    hits: list[Hit] = []
    for node in ast.walk(tree):
        if not isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            continue
        body = lines[node.lineno - 1 : node.end_lineno or node.lineno]
        nbnc = _nbnc_lines(body)
        cc = _func_cc(node)
        depth = _func_depth(node)
        if nbnc > _MAX_FUNC_NBNC:
            hits.append(
                Hit(
                    path,
                    node.lineno,
                    "FUNC.NBNC",
                    f"{node.name}() nbnc={nbnc} > {_MAX_FUNC_NBNC}",
                )
            )
        if cc > _MAX_FUNC_CC:
            hits.append(
                Hit(
                    path,
                    node.lineno,
                    "FUNC.CC",
                    f"{node.name}() cyclomatic={cc} > {_MAX_FUNC_CC}",
                )
            )
        if depth > _MAX_FUNC_DEPTH:
            hits.append(
                Hit(
                    path,
                    node.lineno,
                    "FUNC.DEPTH",
                    f"{node.name}() depth={depth} > {_MAX_FUNC_DEPTH}",
                )
            )
    return hits


def check_py_file(path: Path) -> list[Hit]:
    hits: list[Hit] = []
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return hits
    lines = text.splitlines()
    hits.extend(_check_name_and_file(path, lines))
    hits.extend(_check_shell_lines(path, lines))
    try:
        tree = ast.parse(text, filename=str(path))
    except SyntaxError as exc:
        hits.append(Hit(path, exc.lineno or 1, "SYNTAX", str(exc)))
        return hits
    hits.extend(_check_functions(path, lines, tree))
    return hits


def iter_py_files(roots: list[Path]) -> list[Path]:
    files: list[Path] = []
    for root in roots:
        if root.is_file() and _should_scan_py(root):
            files.append(root)
            continue
        if not root.is_dir():
            continue
        for fp in root.rglob("*.py"):
            if _should_scan_py(fp):
                files.append(fp)
    return sorted(set(files))


def main() -> int:
    parser = argparse.ArgumentParser(description="Skill repo Python gate scan")
    parser.add_argument("paths", nargs="+", help="skill dirs or files")
    args = parser.parse_args()
    roots = [Path(p).resolve() for p in args.paths]
    hits: list[Hit] = []
    for fp in iter_py_files(roots):
        hits.extend(check_py_file(fp))
    by_rule: dict[str, int] = {}
    for h in hits:
        by_rule[h.rule] = by_rule.get(h.rule, 0) + 1
    print(f"Scanned Python under {len(roots)} root(s); issues: {len(hits)}")
    for rule, cnt in sorted(by_rule.items()):
        print(f"  {rule}: {cnt}")
    for h in hits[:100]:
        print(f"\n[{h.rule}] {h.path}:{h.line}")
        print(f"  {h.message}")
    if len(hits) > 100:
        print(f"\n... and {len(hits) - 100} more")
    return 1 if hits else 0


if __name__ == "__main__":
    sys.exit(main())
