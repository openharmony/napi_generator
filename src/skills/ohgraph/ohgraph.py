#!/usr/bin/env python3
# Copyright (c) 2026 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0.
"""ohgraph: OpenHarmony graphic 2D/3D architecture helper — grapharch.md + path index."""

from __future__ import annotations

import argparse
import os
import subprocess
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
GRAPHARCH_MD = os.path.join(SCRIPT_DIR, "grapharch.md")
GRAPHARCH_CORPUS_MD = os.path.join(SCRIPT_DIR, "grapharch_source_corpus.md")
GEN_CORPUS_PY = os.path.join(SCRIPT_DIR, "gen_grapharch_corpus.py")
SKILL_MD = os.path.join(SCRIPT_DIR, "SKILL.md")


def _find_src_root() -> str | None:
    d = os.getcwd()
    for _ in range(16):
        if os.path.isfile(os.path.join(d, "build.sh")):
            return d
        parent = os.path.dirname(d)
        if parent == d:
            break
        d = parent
    return None


def _graphic_root(src_root: str) -> str:
    return os.path.join(src_root, "foundation", "graphic")


def cmd_doc(args: argparse.Namespace) -> int:
    if not os.path.isfile(GRAPHARCH_MD):
        print("missing:", GRAPHARCH_MD, file=sys.stderr)
        return 1
    print("grapharch.md:", GRAPHARCH_MD)
    if args.full:
        with open(GRAPHARCH_MD, "r", encoding="utf-8") as f:
            print(f.read())
    else:
        print("\n--- grapharch.md v3.1 (first 80 lines); use doc --full ---\n")
        with open(GRAPHARCH_MD, "r", encoding="utf-8") as f:
            for i, line in enumerate(f):
                if i >= 80:
                    break
                print(line.rstrip())
    return 0


def cmd_paths(_args: argparse.Namespace) -> int:
    root = _find_src_root()
    if not root:
        print("error: cwd must be under OpenHarmony tree (build.sh)", file=sys.stderr)
        return 1
    g = _graphic_root(root)
    if not os.path.isdir(g):
        print("error: not found:", g, file=sys.stderr)
        return 1
    print("src_root:", root)
    print("foundation/graphic:", g)
    print("grapharch.md:", GRAPHARCH_MD)
    print("\n--- top-level dirs under foundation/graphic ---")
    try:
        for name in sorted(os.listdir(g)):
            p = os.path.join(g, name)
            if os.path.isdir(p):
                print(" ", name)
    except OSError as e:
        print("listdir error:", e, file=sys.stderr)
        return 1
    return 0


def cmd_bundles(_args: argparse.Namespace) -> int:
    root = _find_src_root()
    if not root:
        print("error: cwd must be under OpenHarmony tree (build.sh)", file=sys.stderr)
        return 1
    g = _graphic_root(root)
    if not os.path.isdir(g):
        print("error: not found:", g, file=sys.stderr)
        return 1
    print("bundle.json under foundation/graphic:")
    for dirpath, _dirnames, filenames in os.walk(g):
        if "bundle.json" in filenames:
            rel = os.path.relpath(os.path.join(dirpath, "bundle.json"), root)
            print(" ", rel)
    return 0


def cmd_corpus(args: argparse.Namespace) -> int:
    print("grapharch_source_corpus.md:", GRAPHARCH_CORPUS_MD)
    print("generator:", GEN_CORPUS_PY)
    if args.paths_only:
        return 0
    if not os.path.isfile(GEN_CORPUS_PY):
        print("error: missing", GEN_CORPUS_PY, file=sys.stderr)
        return 1
    root = _find_src_root()
    if not root:
        print("error: cwd must be under OpenHarmony tree (build.sh)", file=sys.stderr)
        return 1
    cmd = [sys.executable, GEN_CORPUS_PY, "-o", GRAPHARCH_CORPUS_MD]
    if args.no_embed:
        cmd.append("--no-embed-full")
    for p in args.embed_full:
        cmd.extend(["--embed-full", p])
    r = subprocess.run(cmd, cwd=root)
    return r.returncode


def cmd_arch(_args: argparse.Namespace) -> int:
    print("Skill:", SKILL_MD)
    print("Architecture doc:", GRAPHARCH_MD)
    print("Source corpus:", GRAPHARCH_CORPUS_MD)
    if os.path.isfile(SKILL_MD):
        print("\n--- SKILL.md (first 40 lines) ---")
        with open(SKILL_MD, "r", encoding="utf-8") as f:
            for i, line in enumerate(f):
                if i >= 40:
                    break
                print(line.rstrip())
        print("--- end ---\n")
    return 0


def main() -> int:
    p = argparse.ArgumentParser(description="ohgraph: graphic 2D/3D architecture (grapharch.md)")
    sub = p.add_subparsers(dest="cmd", required=True)

    d = sub.add_parser("doc", help="print grapharch.md path + excerpt (--full for all)")
    d.add_argument("--full", action="store_true")
    d.set_defaults(func=cmd_doc)

    sub.add_parser("paths", help="print foundation/graphic paths from cwd src root").set_defaults(func=cmd_paths)
    sub.add_parser("bundles", help="list bundle.json under foundation/graphic").set_defaults(func=cmd_bundles)
    sub.add_parser("arch", help="print skill paths + SKILL excerpt").set_defaults(func=cmd_arch)

    c = sub.add_parser("corpus", help="regenerate grapharch_source_corpus.md (run from src root)")
    c.add_argument("--paths-only", action="store_true", help="only print corpus and script paths")
    c.add_argument("--no-embed", action="store_true", help="manifest only, no default full-text embeds")
    c.add_argument(
        "--embed-full",
        action="append",
        default=[],
        metavar="REL_PATH",
        help="extra --embed-full for generator (repeatable)",
    )
    c.set_defaults(func=cmd_corpus)

    args = p.parse_args()
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
