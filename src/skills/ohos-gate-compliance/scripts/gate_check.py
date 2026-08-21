#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""统一门禁检查入口（ohos-gate-compliance v2.0）。

两大功能：
  code    代码门禁检查（核心）：ETS/ArkTS + C++ 项目，检查改动代码并自动修复。
          ETS 规则 38 条（rules_ets.json），C++ 规则 8 条（rules_cpp.json，含启发式）。
  skill   skill 门禁检查：仅在提交 napi_generator/src/skills 下 skill 代码时运行
          （Python AST 门禁 + WordsTool 词表 + py_compile）。
  pipeline  设备测试通过后的门禁 review + commit（兼容原 gate_review.py 入口）。

用法：
  # 代码门禁：扫描指定路径（工程目录自动识别 ets/capi profile）
  python3 gate_check.py code <path...> [--fix] [--strict] [--json] [--rule IDS]
  # 只查改动代码（--base 分支对比 / --staged 暂存区）
  python3 gate_check.py code <path> --base origin/master
  python3 gate_check.py code <path> --staged
  # skill 门禁（napi_generator/src/skills 提交前）
  python3 gate_check.py skill [<paths...>] [--staged] [--strict] [--json]
  # pipeline（设备整测通过后）
  python3 gate_check.py pipeline <工程> -s <Suite> [--skip-commit] [--commit-title "..."]
退出码：0 通过；1 有违规（--strict 阻断）或执行失败；2 pipeline 未修复项。
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPTS))
sys.path.insert(0, str(SCRIPTS / "checkers"))

from base import Hit, format_hits, load_rules  # noqa: E402
import cpp_checker, ets_checker, config_checker, git_checker, skill_checker  # noqa: E402

SKILLS_ROOT = Path("/root/aiSkill/napi_generator/src/skills")


# ---------------------------------------------------------------- code 子命令
def _detect_profile(project: Path) -> str:
    cpp_dir = project / "entry" / "src" / "main" / "cpp"
    if cpp_dir.is_dir() and any(cpp_dir.rglob("*.cpp")):
        return "capi"
    return "ets"


def _changed_target(rel: str, repo: Path, profile: str) -> Path | None:
    """改动文件是否属于门禁扫描范围。"""
    if not rel:
        return None
    fp = repo / rel
    if not fp.is_file():
        return None
    if any(seg in fp.parts for seg in ets_checker.EXCLUDE_DIRS):
        return None
    if fp.suffix in (".ets", ".ts", ".js") or fp.name == "build-profile.json5":
        return fp
    if profile == "capi" and fp.suffix in (".cpp", ".h", ".cc"):
        return fp
    return None


def _full_targets(paths: list[Path], profile: str) -> list[Path]:
    out: list[Path] = []
    for p in paths:
        p = p.resolve()
        if p.is_file():
            out.append(p)
        elif p.is_dir():
            out.extend(ets_checker.collect_files([str(p)]))
            out.extend(p.rglob("build-profile.json5"))
            if profile == "capi":
                out.extend(p.rglob("*.cpp"))
                out.extend(p.rglob("*.h"))
    return out


def _target_files(paths: list[Path], profile: str, base: str = "", staged: bool = False,
                  cwd: Path | None = None) -> list[Path]:
    """收集扫描目标：--base/--staged 时只取改动文件，否则全量。"""
    if base or staged:
        repo = cwd or Path.cwd()
        if staged:
            out = git_checker.sh("git diff --cached --name-only -z", repo).split("\x00")
        else:
            out = git_checker.sh(f"git diff --name-only {base} -z", repo).split("\x00")
        targets = []
        for rel in out:
            fp = _changed_target(rel, repo, profile)
            if fp is not None:
                targets.append(fp)
        return sorted(set(targets))
    return sorted(set(_full_targets(paths, profile)))


def scan_code_file(fp: Path, text: str, profile: str) -> list[Hit]:
    hits: list[Hit] = []
    if fp.name == "build-profile.json5":
        return config_checker.scan_config_file(fp, text)
    if fp.suffix in (".ets", ".ts", ".js"):
        hits.extend(ets_checker.scan_ets_file(fp, text))
    if profile == "capi" and fp.suffix in (".cpp", ".h", ".cc"):
        hits.extend(cpp_checker.scan_cpp_file(fp, text))
    return hits


def fix_code_file(fp: Path, text: str, profile: str) -> tuple[str, int]:
    fixed = 0
    text, n = ets_checker.fix_ets_file(fp, text)
    fixed += n
    text, n = config_checker.fix_config_file(fp, text)
    fixed += n
    if profile == "capi" and fp.suffix in (".cpp", ".h", ".cc"):
        text, n = cpp_checker.fix_cpp_file(fp, text)
        fixed += n
    return text, fixed


def cmd_code(args) -> int:
    profile = args.profile if args.profile != "auto" else (
        _detect_profile(Path(args.paths[0])) if args.paths else "ets")
    cwd = Path(args.cwd).resolve() if args.cwd else Path.cwd()
    targets = _target_files([Path(p) for p in args.paths], profile,
                            base=args.base, staged=args.staged, cwd=cwd)
    if not targets:
        print(f"[gate] 无可扫描文件（profile={profile}，{'staged' if args.staged else args.base or '全量'}）")
        return 0
    want = set(args.rule.split(",")) if args.rule else set()
    # 两轮自动修复 + 复查
    if args.fix:
        for _ in range(2):
            fixed_total = 0
            for fp in targets:
                try:
                    text = fp.read_text(encoding="utf-8")
                except OSError:
                    continue
                new_text, n = fix_code_file(fp, text, profile)
                if n:
                    fp.write_text(new_text, encoding="utf-8", newline="")
                    fixed_total += n
            if not fixed_total:
                break
    hits: list[Hit] = []
    for fp in targets:
        try:
            text = fp.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        hits.extend(scan_code_file(fp, text, profile))
    if want:
        hits = [h for h in hits if h.rule in want]
    if args.json:
        print(json.dumps({"total": len(hits), "profile": profile,
                          "hits": [h.__dict__ for h in hits]}, ensure_ascii=False))
    else:
        print(f"[gate] === 代码门禁检查（profile={profile}，{len(targets)} 文件）===")
        cpp_ids = {r["id"] for r in load_rules("cpp")}
        ets_hits = [h for h in hits if h.rule not in cpp_ids]
        cpp_hits = [h for h in hits if h.rule in cpp_ids]
        print(format_hits(ets_hits, "ets"))
        if cpp_hits:
            print(format_hits(cpp_hits, "cpp"))
    return 1 if (hits and args.strict) else 0


# ---------------------------------------------------------------- skill 子命令
def cmd_skill(args) -> int:
    roots: list[Path] = []
    if args.paths:
        roots = [Path(p).resolve() for p in args.paths]
    else:
        # 默认：napi_generator/src/skills（或在 napi 仓内时）
        if SKILLS_ROOT.is_dir():
            roots = [SKILLS_ROOT]
        else:
            print("[gate] 未指定路径且未找到 napi_generator/src/skills", file=sys.stderr)
            return 1
    if args.staged:
        # 只查 staged 的 skill 文件
        repo = Path(args.cwd).resolve() if args.cwd else Path.cwd()
        staged = git_checker.sh("git diff --cached --name-only -z", repo).split("\x00")
        files = [repo / rel for rel in staged if rel and (repo / rel).is_file()]
        hits: list[Hit] = []
        for fp in files:
            if fp.suffix == ".py":
                hits.extend(skill_checker.check_py_file(fp))
            hits.extend(skill_checker.check_words_file(fp))
    else:
        hits = skill_checker.scan_skill_dir(roots)
    if args.json:
        print(json.dumps({"total": len(hits),
                          "hits": [h.__dict__ for h in hits]}, ensure_ascii=False))
    else:
        print(f"[gate] === skill 门禁检查（{len(roots)} 根目录）===")
        print(format_hits(hits, "skill"))
    return 1 if (hits and args.strict) else 0


# ---------------------------------------------------------------- main
def main() -> int:
    ap = argparse.ArgumentParser(description="统一门禁检查（代码/skill）")
    sub = ap.add_subparsers(dest="cmd", required=True)

    p_code = sub.add_parser("code", help="代码门禁检查（ETS/C++）")
    p_code.add_argument("paths", nargs="+", help="文件或工程目录")
    p_code.add_argument("--base", default="", help="相对该分支只查改动文件（如 origin/master）")
    p_code.add_argument("--staged", action="store_true", help="只查暂存区改动")
    p_code.add_argument("--profile", default="auto", choices=["auto", "ets", "capi"])
    p_code.add_argument("--fix", action="store_true", help="自动修复（两轮）")
    p_code.add_argument("--strict", action="store_true", help="有违规退出码 1")
    p_code.add_argument("--json", action="store_true")
    p_code.add_argument("--rule", default="", help="只检查指定规则（逗号分隔）")
    p_code.add_argument("--cwd", default="", help="git 仓库目录（--base/--staged 用）")
    p_code.set_defaults(func=cmd_code)

    p_skill = sub.add_parser("skill", help="skill 门禁检查（提交 src/skills 前）")
    p_skill.add_argument("paths", nargs="*", help="skill 目录（默认 napi_generator/src/skills）")
    p_skill.add_argument("--staged", action="store_true", help="只查暂存区文件")
    p_skill.add_argument("--strict", action="store_true")
    p_skill.add_argument("--json", action="store_true")
    p_skill.add_argument("--cwd", default="", help="git 仓库目录（--staged 用）")
    p_skill.set_defaults(func=cmd_skill)

    # pipeline 子命令 → 兼容 gate_review.py
    import pipeline
    p_pipe = sub.add_parser("pipeline", help="设备测试通过后门禁 review + commit（兼容 gate_review）")
    p_pipe.add_argument("project", help="HAP 工程根目录")
    p_pipe.add_argument("-s", "--suite", default="")
    p_pipe.add_argument("--scope", default="xts")
    p_pipe.add_argument("--skip-gate", action="store_true")
    p_pipe.add_argument("--skip-commit", action="store_true")
    p_pipe.add_argument("--skip-test-check", action="store_true")
    p_pipe.add_argument("--commit-title", default="")
    p_pipe.add_argument("--commit-body", default="")
    p_pipe.set_defaults(func=lambda a: pipeline.run_post_test_gate_pipeline(
        a.project, suite=a.suite, scope=a.scope, skip_gate=a.skip_gate,
        skip_commit=a.skip_commit, commit_title=a.commit_title,
        commit_body=a.commit_body, require_tests_passed=not a.skip_test_check))

    args = ap.parse_args()
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
