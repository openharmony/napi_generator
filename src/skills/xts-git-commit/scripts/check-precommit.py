#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""提交前门禁检查（xts-git-commit 脚本化，2026-08）：
①版权头：基线有头、变更后无头 → FAIL（相对 MR 基线 merge-base）
②违禁文件：staged/新增不得含 autosign、oh_modules、build/、*.hap
③bundleName/module 改动清单：AppScope/app.json5、config.json、module.json5（提示确认必要性）
④numstat 可疑整文件重写：insertions==deletions 且超过阈值
用法：check-precommit.py [--base origin/master] [--cwd <repo>]
退出码：0 全部通过；1 有硬门禁违规；2 仅有需确认项
"""
from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path

COPYRIGHT_RE = re.compile(rb"Copyright\s*\(", re.I)
FORBIDDEN = ("autosign/", "oh_modules", "/build/", ".hap")


def sh(cmd: str, cwd: Path) -> str:
    r = subprocess.run(cmd, shell=True, cwd=str(cwd), capture_output=True, text=True)
    return r.stdout


def check_copyright(base: str, cwd: Path) -> list[str]:
    problems = []
    # 用 merge-base 做比较基准：分支若基于旧基线（如 req2 从 req1 链起分支），
    # 直接 diff base..HEAD 会把上游自身更新（版权头等）误算为我们的删除
    mb = sh(f"git merge-base {base} HEAD", cwd).strip() or base
    # ① 仅新增/修改文件的 diff 中删除 Copyright 行。
    #    排除 D（整文件删除含版权头正常）与 R（重命名旧文件头部删除由③逐文件对检查，
    #    避免 git 跨目录 rename 配对导致的误报）。
    #    误报过滤：年份更新/换行规范化（CRLF→LF）会整块重写版权头，diff 同样显示 - 行；
    #    逐文件判断：仅当该文件 diff 删了 Copyright 行且新版本无版权头才报（丢头兜底见②）。
    lost = []
    for f in sh(f"git diff --diff-filter=AM --name-only {mb}..HEAD", cwd).splitlines():
        d = sh(f"git diff {mb}..HEAD -- {f} | grep -E '^-.*Copyright|^- \\* Copyright' || true", cwd)
        if not d.strip():
            continue
        try:
            if not COPYRIGHT_RE.search((cwd / f).read_bytes()):
                lost.append(f)
        except OSError:
            continue
    if lost:
        problems.append(f"diff {mb}..HEAD 删除 Copyright 行且新版本无版权头: {lost[:10]}")
    # ② 普通文件：基线有头、变更后无头
    for f in sh(f"git diff --name-only {mb}..HEAD", cwd).splitlines():
        b = subprocess.run(["git", "show", f"{mb}:{f}"], cwd=str(cwd),
                           capture_output=True).stdout
        if b == b"":  # 基线无此文件（新增）
            continue
        try:
            h = (cwd / f).read_bytes()
        except OSError:
            continue
        if COPYRIGHT_RE.search(b) and not COPYRIGHT_RE.search(h):
            problems.append(f"版权头丢失: {f}")
    # ③ 重命名（old→new）：old 基线有头、new 文件无头 → 丢失
    for line in sh(f"git diff --name-status -M {mb}..HEAD", cwd).splitlines():
        parts = line.split("\t")
        if len(parts) < 3 or not parts[0].startswith("R"):
            continue
        _, old, new = parts[0], parts[1], parts[2]
        b = subprocess.run(["git", "show", f"{mb}:{old}"], cwd=str(cwd),
                           capture_output=True).stdout
        try:
            h = (cwd / new).read_bytes()
        except OSError:
            continue
        if COPYRIGHT_RE.search(b) and not COPYRIGHT_RE.search(h):
            problems.append(f"重命名后版权头丢失: {old} -> {new}")
    return problems


def check_forbidden(cwd: Path) -> list[str]:
    bad = []
    for line in sh("git status --short", cwd).splitlines():
        if line.startswith("??"):
            continue  # 未跟踪不阻塞（只 add 具体文件即可）
        path = line[3:].strip().strip('"')
        if any(seg in path for seg in FORBIDDEN):
            bad.append(f"staged/变更含违禁: {path}")
    tracked = sh("git ls-files | grep -E 'autosign/' || true", cwd).strip()
    if tracked:
        bad.append(f"autosign 已被跟踪: {tracked.splitlines()[0]}")
    return bad


def check_config_changes(cwd: Path) -> list[str]:
    out = sh("git diff --cached --name-only | grep -E 'AppScope/app.json5|config.json|module.json5' || true",
             cwd).splitlines()
    if out:
        return [f"确认包名/模块名改动必要性: {f}" for f in out]
    return []


def check_rewrites(cwd: Path, threshold: int = 20) -> list[str]:
    out = sh(f"git diff --cached --numstat | awk '$1==$2 && $1>{threshold}'", cwd).splitlines()
    if out:
        return [f"可疑整文件重写（增删相等）: {l}" for l in out]
    return []


def check_compile_sdk(cwd: Path) -> list[str]:
    """staged build-profile.json5 中 compileSdkVersion 非 "M.S.F" 字符串（CI 要求）。"""
    bad = []
    out = sh("git diff --cached --name-only -z", cwd)
    for f in out.split("\x00"):
        if not f.endswith("build-profile.json5"):
            continue
        staged = subprocess.run(["git", "show", f":{f}"], cwd=str(cwd),
                                capture_output=True, text=True).stdout
        # 值必须是完整的 "M.S.F" 字符串；数字（26 / 26.0.0）或 "26" 一律拦截
        for m in re.finditer(r'"(compileSdkVersion|targetSdkVersion)"\s*:\s*("[^"]*"|\S+)',
                             staged):
            val = m.group(2)
            if not re.match(r'^"\d+\.\d+\.\d+"$', val):
                bad.append(f"{f}: {m.group(1)} 是 {val}（CI 要求 \"M.S.F\" 字符串）")
    return bad


def check_code_quality(cwd: Path) -> list[str]:
    """代码质量自检（检视意见固化，软检查）：staged 代码文件扫描
    G.EXT.02 ESObject / G.FMT.08 多余分号 / G.FMT.10 大括号同行 /
    G.FMT.02 行宽>120 / G.NAM.03 命名（蛇形/帕斯卡） / XTS.CHECK.TCNUMBER 用例编号。
    行宽与命名只查【本次新增行】（-U0 diff 的 + 行），历史遗留长行不阻塞本次改动；
    命中提示人工确认后提交（中策：自检审查解决）。
    """
    problems = []
    out = sh("git diff --cached --name-only -z", cwd)
    for f in out.split("\x00"):
        if not f.endswith((".ets", ".ts", ".js")):
            continue
        staged = subprocess.run(["git", "show", f":{f}"], cwd=str(cwd),
                                capture_output=True, text=True).stdout
        if re.search(r":\s*ESObject\b|\bESObject;", staged):
            problems.append(f"G.EXT.02 避免使用 ESObject: {f}")
        if ";;" in staged:
            problems.append(f"G.FMT.08 多余分号: {f}")
        if re.search(r"\)\n\s*\{", staged):
            problems.append(f"G.FMT.10 大括号未与语句同行: {f}")
        if re.search(r"\bit\('(?!SUB_)", staged):
            problems.append(f"XTS.CHECK.TCNUMBER 用例编号非 SUB_ 开头: {f}")
    # 行宽 / 命名：只扫新增行（带 hunk 行号定位）
    cur, line_no = None, None
    for ln in sh("git diff --cached -U0 -- '*.ets' '*.ts' '*.js'", cwd).splitlines():
        m = re.match(r"^\+\+\+ b/(.+)$", ln)
        if m:
            cur, line_no = m.group(1).strip(), None
            continue
        m = re.match(r"^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@", ln)
        if m:
            line_no = int(m.group(1))
            continue
        if cur is None or line_no is None:
            continue
        if ln.startswith("+"):
            body = ln[1:]
            if len(body) > 120:
                problems.append(f"G.FMT.02 新增行行宽{len(body)}>120: {cur}:{line_no}")
            for m in re.finditer(r"\blet\s+([a-z]+_[a-z_]+|[A-Z][a-z][A-Za-z0-9]*)\s*[:=]", body):
                problems.append(f"G.NAM.03 新增行变量命名 {m.group(1)} 非小驼峰: {cur}:{line_no}")
            line_no += 1
        elif not ln.startswith("-") and not ln.startswith("\\"):
            line_no += 1
    return problems


def main() -> None:
    ap = argparse.ArgumentParser(description="提交前门禁检查")
    ap.add_argument("--base", default="origin/master", help="MR 基线（默认 origin/master）")
    ap.add_argument("--cwd", default=".", help="仓库目录")
    args = ap.parse_args()
    cwd = Path(args.cwd).resolve()

    hard = check_copyright(args.base, cwd) + check_forbidden(cwd) + check_compile_sdk(cwd)
    soft = check_config_changes(cwd) + check_rewrites(cwd) + check_code_quality(cwd)
    for p in hard:
        print(f"[FAIL] {p}")
    for p in soft:
        print(f"[CHECK] {p}")
    if hard:
        print("\n❌ 硬门禁未通过，禁止提交")
        sys.exit(1)
    if soft:
        print("\n⚠️ 有需确认项，确认后提交")
        sys.exit(2)
    print("✅ 门禁全部通过")
    sys.exit(0)


if __name__ == "__main__":
    main()
