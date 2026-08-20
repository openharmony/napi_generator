#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""需求1 范围判定与进度（并入 convert 子功能，脚本实现）。

功能：
- 判定子系统内哪些工程属于需求1（stage 模型 + 有业务 .ts/.js 需转 ets）
- 列出每工程待转换文件（按类型分类：TestRunner/Ability/AbilityStage/用例/其他）
- 转换进度：已转（D .ts 有对应 .ets）/ 待转（残留业务 .ts）

判定规则（固化 SKILL 1.2/1.4）：
1. 工程根 = 含 hvigor/hvigor-config.json5 的目录（有的子系统 build-profile 只在 entry/ 下）
2. stage 模型：有 build-profile.json5 且无 config.json（FA 工程不在需求1范围，Legacy 只认 .ts）
3. 需求1涉及：目录内有业务 .ts/.js（排除 oh_modules/node_modules/build/.hvigor/hvigorfile.ts/*.d.ts）
4. 刻意保留不转：文件名含 JSProject（测 JS 互操作，改 ets 改变语义）

用法：
  python3 convert/req1_scan.py --subdir ability            # 子系统扫描（文本输出）
  python3 convert/req1_scan.py --subdir ability --out json # 机器可读
  python3 convert/req1_scan.py --proj <工程相对路径>       # 单工程判定
  python3 convert/req1_scan.py --progress --subdir ability # 进度统计
"""
from __future__ import annotations

import argparse
import json
import re
import shlex
import subprocess
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.paths import REPO  # noqa: E402

EXCLUDE_SEGMENTS = ("oh_modules", "node_modules", "build", ".hvigor", "autosign",
                    ".preview", ".idea")
EXCLUDE_NAMES = ("hvigorfile.ts", "hvigorfile.js")
JS_SEMANTIC_MARKERS = ("JSProject", "jsinterop", "interop")


def sh(cmd: str) -> str:
    """执行命令（shell=False，参数列表化；仅支持无管道/重定向的简单命令）。"""
    r = subprocess.run(shlex.split(cmd), cwd=str(REPO), capture_output=True, text=True)
    return r.stdout


def find_project_roots(subdir: str) -> list[Path]:
    """扫描子系统下全部工程根（含 hvigor/hvigor-config.json5 的目录的上一级）。"""
    root = REPO / subdir
    if not root.is_dir():
        return []
    return sorted(p.parent.parent for p in root.rglob("hvigor/hvigor-config.json5")
                  if not any(seg in p.parts for seg in EXCLUDE_SEGMENTS))


def classify_file(f: Path) -> str:
    name = f.name
    if name == "OpenHarmonyTestRunner.ts":
        return "TestRunner"
    if "Ability" in name and name.endswith(".ts"):
        return "Ability"
    if name.endswith(".test.ts") or "List.test" in name:
        return "用例"
    if name == "AbilityStage.ts":
        return "AbilityStage"
    return "其他"


def business_ts_js(proj: Path) -> list[Path]:
    """工程内业务 .ts/.js（排除噪声与互操作标记）。"""
    out = []
    for ext in ("ts", "js"):
        for f in sorted(proj.rglob(f"*.{ext}")):
            if any(seg in f.parts for seg in EXCLUDE_SEGMENTS):
                continue
            if f.name in EXCLUDE_NAMES or f.name.endswith(".d.ts"):
                continue
            if ext == "js" and any(m in f.name for m in JS_SEMANTIC_MARKERS):
                continue
            out.append(f)
    return out


def is_stage(proj: Path) -> bool:
    return (proj / "build-profile.json5").exists() and not (proj / "config.json").exists()


def git_status_map() -> dict[str, str]:
    """git status --short → {路径: 状态码}（用于 D/?? 配对）。"""
    m = {}
    for line in sh("git status --short").splitlines():
        if len(line) < 4:
            continue
        m[line[3:].strip().strip('"')] = line[:2].strip()
    return m


def head_business_ts(proj: Path) -> list[str]:
    """HEAD 中该工程内的业务 .ts（历史需转文件，用于已完成工程的 req1 判定）。"""
    rel = str(proj.relative_to(REPO))
    out = []
    # ls-tree 输出 + Python 过滤（替代 shell 管道 grep）
    for line in sh(f"git ls-tree -r --name-only HEAD -- {rel}").splitlines():
        if not line.endswith(".ts"):
            continue
        f = REPO / line
        if any(seg in f.parts for seg in EXCLUDE_SEGMENTS):
            continue
        if f.name in EXCLUDE_NAMES or f.name.endswith(".d.ts"):
            continue
        out.append(line)
    return out


def is_req1_project(proj: Path, pending: list[Path]) -> bool:
    """需求1判定：有业务 .ts 待转，或 HEAD 历史有业务 .ts（已转完也算）。"""
    if pending:
        return True
    return bool(head_business_ts(proj))


def scan_subdir(subdir: str) -> dict:
    """扫描子系统：工程清单 + 需求1 判定 + 待转文件。"""
    projects = []
    for proj in find_project_roots(subdir):
        if not is_stage(proj):
            continue
        rel = str(proj.relative_to(REPO))
        files = business_ts_js(proj)
        if not is_req1_project(proj, files):
            continue  # 无业务 ts/js 且 HEAD 无历史 → 不在需求1范围
        by_type = Counter(classify_file(f) for f in files)
        # 无待转文件（已全部转换）时，列出 HEAD 历史文件作为记录
        listed = [str(f.relative_to(proj)) for f in files]
        if not listed:
            listed = [f.replace(rel + "/", "") for f in head_business_ts(proj)]
            by_type = Counter(classify_file(Path(f)) for f in listed)
        projects.append({
            "proj": rel,
            "req1": True,
            "pending": len(files),
            "files": len(files) or len(listed),
            "by_type": dict(by_type),
            "list": listed,
        })
    return {"subdir": subdir, "projects": projects,
            "total_req1": len(projects),
            "total_pending": sum(p["pending"] for p in projects),
            "total_files": sum(p["files"] for p in projects)}


def scan_project(rel: str) -> dict:
    proj = REPO / rel
    if not proj.is_dir():
        return {"proj": rel, "error": "工程不存在"}
    stage = is_stage(proj)
    files = business_ts_js(proj)
    req1 = is_req1_project(proj, files)
    listed = [str(f.relative_to(proj)) for f in files]
    by_type = Counter(classify_file(f) for f in files)
    if not listed and req1:
        listed = [f.replace(rel + "/", "") for f in head_business_ts(proj)]
        by_type = Counter(classify_file(Path(f)) for f in listed)
    return {"proj": rel, "stage": stage, "req1": req1,
            "pending": len(files),
            "files": listed,
            "by_type": dict(by_type)}


def progress(subdir: str) -> dict:
    """进度：待转文件数 / 已转换（D.ts 有对应 .ets）/ 完成工程数。"""
    status = git_status_map()
    pending_files = converted_files = 0
    done_projects = pending_projects = 0
    for proj in find_project_roots(subdir):
        if not is_stage(proj):
            continue
        rel = str(proj.relative_to(REPO))
        files = business_ts_js(proj)
        if not is_req1_project(proj, files):
            continue
        # 待转：工作区残留业务 .ts
        pf = len(files)
        # 已转换：git 状态 D .ts 且磁盘有对应 .ets
        cf = sum(
            1 for line, st in status.items()
            if "D" in st and line.endswith(".ts") and line.startswith(rel + "/")
            and (REPO / (line[:-3] + ".ets")).exists())
        pending_files += pf
        converted_files += cf
        if pf == 0:
            done_projects += 1
        else:
            pending_projects += 1
    return {"subdir": subdir, "pending_files": pending_files,
            "converted_files": converted_files,
            "done_projects": done_projects, "pending_projects": pending_projects}


def main() -> None:
    ap = argparse.ArgumentParser(description="需求1 范围判定与进度")
    ap.add_argument("--subdir", default="", help="子系统目录（相对 REPO）")
    ap.add_argument("--proj", default="", help="单工程相对路径")
    ap.add_argument("--progress", action="store_true", help="进度统计")
    ap.add_argument("--out", choices=["text", "json"], default="text")
    args = ap.parse_args()

    if args.proj:
        r = scan_project(args.proj)
        print(json.dumps(r, ensure_ascii=False, indent=1) if args.out == "json"
              else (f"工程: {r['proj']}  stage={r.get('stage')}  req1={r.get('req1')}\n"
                    + "\n".join(f"  {t}: {c}" for t, c in r.get("by_type", {}).items())
                    + "\n".join(f"  {f}" for f in r.get("files", []))))
        return
    if not args.subdir:
        ap.print_help()
        return
    if args.progress:
        p = progress(args.subdir)
        print(json.dumps(p, ensure_ascii=False, indent=1) if args.out == "json" else
              f"[{args.subdir}] 待转文件 {p['pending_files']} | 已转换 {p['converted_files']} | "
              f"完成工程 {p['done_projects']} | 待转工程 {p['pending_projects']}")
        return
    r = scan_subdir(args.subdir)
    if args.out == "json":
        print(json.dumps(r, ensure_ascii=False, indent=1))
        return
    print(f"[{args.subdir}] 需求1 涉及工程 {r['total_req1']} 个，待转文件 {r['total_files']} 个：")
    for p in r["projects"]:
        types = " ".join(f"{t}×{c}" for t, c in p["by_type"].items())
        print(f"  {p['proj']:<70s} {p['files']:>3d} 文件  [{types}]")


if __name__ == "__main__":
    main()
