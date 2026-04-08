#!/usr/bin/env python3
# Copyright (c) 2026 Huawei Device Co., Ltd.
# SPDX-License-Identifier: Apache-2.0
"""Generate grapharch_source_corpus.md — exhaustive header manifest under foundation/graphic.

Produces one section per .h (path, line count, first declaration line) so the output
scales with the tree (~3.5k headers → ~10k+ lines). For full file bodies, use IDE or
--embed-full for selected paths.

  python3 gen_grapharch_corpus.py [--graphic-root DIR] [--output FILE] [--embed-full PATH]*
"""

from __future__ import annotations

import argparse
import os
import re
import sys
from datetime import datetime, timezone

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# Default full-text embeds (relative to OpenHarmony src root) when --embed-full not passed
DEFAULT_EMBED_FULL = [
    "foundation/graphic/graphic_2d/rosen/modules/render_service_base/include/common/rs_common_def.h",
    "foundation/graphic/graphic_2d/rosen/modules/render_service/core/pipeline/main_thread/rs_main_thread.h",
]

FIRST_DECL_RE = re.compile(
    r"^\s*(?:template\s*<[^>]{1,400}>\s*)?"
    r"(?:class|struct|enum|enum\s+class|union)\s+"
    r"([A-Za-z_][\w:]*)\b",
    re.MULTILINE,
)
TYPEDEF_RE = re.compile(r"^\s*(typedef\s+.+);?\s*$")


def find_src_root(start: str) -> str | None:
    d = os.path.abspath(start)
    for _ in range(24):
        if os.path.isfile(os.path.join(d, "build.sh")):
            return d
        parent = os.path.dirname(d)
        if parent == d:
            break
        d = parent
    return None


def iter_headers(graphic_root: str):
    skip_dir = {"test", "unittest", "mock", ".git"}
    for dirpath, dirnames, filenames in os.walk(graphic_root):
        dirnames[:] = [d for d in dirnames if d not in skip_dir]
        for name in sorted(filenames):
            if name.endswith(".h"):
                yield os.path.join(dirpath, name)


def first_decl_line(text: str) -> str | None:
    m = FIRST_DECL_RE.search(text)
    if m:
        line = text[m.start() : m.end()]
        return line.strip().replace("`", "'")[:400]
    for line in text.splitlines():
        s = line.strip()
        tm = TYPEDEF_RE.match(s)
        if tm:
            return tm.group(1).replace("`", "'")[:400]
    return None


def embed_numbered(path: str, rel: str, emit) -> None:
    text = open(path, "r", encoding="utf-8", errors="replace").read()
    lines = text.splitlines()
    emit(f"### 完整正文：`{rel}`（{len(lines)} 行）")
    emit()
    emit("```cpp")
    for i, line in enumerate(lines, start=1):
        emit(f"{i:6d} | {line}")
    emit("```")
    emit()


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--graphic-root", default="", help="foundation/graphic path")
    ap.add_argument("-o", "--output", default=os.path.join(SCRIPT_DIR, "grapharch_source_corpus.md"))
    ap.add_argument(
        "--embed-full",
        action="append",
        default=[],
        help="Relative path from src root to embed full numbered body (repeatable)",
    )
    args = ap.parse_args()

    if args.graphic_root:
        graphic_root = os.path.abspath(args.graphic_root)
    else:
        root = find_src_root(os.getcwd())
        if not root:
            print("error: use --graphic-root or cwd under tree with build.sh", file=sys.stderr)
            return 1
        graphic_root = os.path.join(root, "foundation", "graphic")
    if not os.path.isdir(graphic_root):
        print("error:", graphic_root, file=sys.stderr)
        return 1

    src_root = find_src_root(graphic_root) or os.path.dirname(os.path.dirname(graphic_root))
    out: list[str] = []

    def emit(s: str = "") -> None:
        out.append(s)

    emit("# grapharch_source_corpus.md")
    emit()
    emit("> **生成**：`python3 .claude/skills/ohgraph/gen_grapharch_corpus.py`")
    emit("> **源码根**：`" + src_root + "`")
    emit("> **扫描**：`" + graphic_root + "`（**test/unittest/mock** 目录已跳过）")
    emit("> **时间**：" + datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"))
    emit()
    emit("## 使用说明")
    emit()
    emit("- **第一节**：`foundation/graphic` 下 **每个 `.h` 一条记录**（路径、行数、首条类型声明摘抄）。")
    emit("- **编程时**：用路径在仓库内打开头文件；本附录保证 **不遗漏头文件路径**（在跳过规则内）。")
    emit("- **`.cpp` / 实现**：请用 IDE 或 `rg`/LSP 从头文件符号跳转；若需扩展本脚本可加入 `.cpp` 扫描。")
    emit("- **嵌入全文**：`--embed-full foundation/graphic/.../foo.h` 可将指定文件 **带行号全文** 追加到文末。")
    emit()
    emit("---")
    emit()
    emit("## 全量头文件索引（foundation/graphic）")
    emit()

    paths = sorted(iter_headers(graphic_root))
    emit(f"**文件总数**：{len(paths)}")
    emit()

    errors = 0
    for abspath in paths:
        rel = os.path.relpath(abspath, src_root).replace("\\", "/")
        try:
            raw = open(abspath, "rb").read()
        except OSError:
            errors += 1
            emit(f"## `{rel}`")
            emit("- **错误**：无法读取")
            emit()
            continue
        try:
            text = raw.decode("utf-8")
        except UnicodeDecodeError:
            text = raw.decode("utf-8", errors="replace")
        n = text.count("\n")
        if not text.endswith("\n") and text:
            n += 1
        decl = first_decl_line(text)
        emit(f"## `{rel}`")
        emit(f"- **行数**：{n}")
        if decl:
            emit(f"- **首条类型声明摘抄**：`{decl}`")
        else:
            emit("- **首条类型声明摘抄**：*（无匹配，可能仅有宏/内联包含）*")
        emit()

    emit("---")
    emit()
    emit("## 指定文件全文嵌入（带行号）")
    emit()

    for rel in embed_full:
        rel = rel.replace("\\", "/")
        full = os.path.join(src_root, rel)
        if not os.path.isfile(full):
            emit(f"### 跳过（不存在）：`{rel}`")
            emit()
            continue
        embed_numbered(full, rel, emit)

    emit("---")
    emit("## 生成脚本文末统计")
    emit(f"- **头文件数**：{len(paths)}")
    emit(f"- **读失败数**：{errors}")
    emit(f"- **总行数**：{len(out)}")
    emit()

    with open(args.output, "w", encoding="utf-8") as fp:
        fp.write("\n".join(out) + "\n")

    print("wrote", args.output, "lines", len(out), file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
