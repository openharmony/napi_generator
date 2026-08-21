#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""代码门禁检查：git 层检查（版权头/违禁文件/配置残留/整文件重写/数据安全）。

迁移来源：
- xts-git-commit/scripts/check_precommit.py（版权头 merge-base 对比、违禁文件、compileSdk 拦截、整文件重写、代码质量增量检查）
- ohxts-stage-ets-hypium-upgrade/scripts/common/git_utils.py（数据安全 LOST/DUP、版权头、违禁、残留、重写）
"""
from __future__ import annotations

import re
import subprocess
from pathlib import Path

from base import Hit

COPYRIGHT_RE = re.compile(rb"Copyright\s*\(", re.I)
FORBIDDEN_SEGMENTS = ("oh_modules", "node_modules", "build", ".hvigor", "autosign", ".preview")
FORBIDDEN_STRICT = ("autosign/", "oh_modules", "/build/", ".hap")


def sh(cmd: str, cwd: Path | None = None) -> str:
    """执行 git 命令（列表参数，无 shell；管道场景由调用方用 git() 列表过滤）。"""
    r = subprocess.run(cmd.split(), cwd=str(cwd) if cwd else None,
                       capture_output=True, text=True)
    return r.stdout


def git(args: list[str], cwd: Path | None = None) -> str:
    """git 命令（列表参数）。"""
    r = subprocess.run(["git"] + args, cwd=str(cwd) if cwd else None,
                       capture_output=True, text=True)
    return r.stdout


def check_copyright(cwd: Path, base: str = "origin/master", head: str = "HEAD") -> list[Hit]:
    """① merge-base 对比：AM 文件删版权行且新版本无头；② 基线有头变更后无头；③ 重命名丢头。"""
    hits: list[Hit] = []
    mb = sh(f"git merge-base {base} {head}", cwd).strip() or base
    # ① 逐文件：diff 删了 Copyright 行且新版本无版权头才报（年份更新/CRLF 重写不误报）
    for f in git(["diff", "--diff-filter=AM", "--name-only", f"{mb}..{head}"], cwd).splitlines():
        d = git(["diff", f"{mb}..{head}", "--", f], cwd)
        deleted = [ln for ln in d.splitlines()
                   if ln.startswith("-") and "Copyright" in ln]
        if not deleted:
            continue
        try:
            if not COPYRIGHT_RE.search((cwd / f).read_bytes()):
                hits.append(Hit("COPYRIGHT.01", f, 0, "删除 Copyright 行且新版本无版权头"))
        except OSError:
            continue
    # ② 普通文件：基线有头、变更后无头
    for f in git(["diff", "--name-only", f"{mb}..{head}"], cwd).splitlines():
        b = subprocess.run(["git", "show", f"{mb}:{f}"], cwd=str(cwd),
                           capture_output=True).stdout
        if b == b"":
            continue
        try:
            h = (cwd / f).read_bytes()
        except OSError:
            continue
        if COPYRIGHT_RE.search(b) and not COPYRIGHT_RE.search(h):
            hits.append(Hit("COPYRIGHT.01", f, 0, "版权头丢失（基线有头、变更后无头）"))
    # ③ 重命名 old→new：old 基线有头、new 无头
    for line in git(["diff", "--name-status", "-M", f"{mb}..{head}"], cwd).splitlines():
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
            hits.append(Hit("COPYRIGHT.01", new, 0, f"重命名后版权头丢失: {old} -> {new}"))
    return hits


def check_forbidden(cwd: Path) -> list[Hit]:
    """违禁文件：staged/变更不得含 autosign/oh_modules/build/*.hap；autosign 不得被 git 跟踪。"""
    hits: list[Hit] = []
    for line in git(["status", "--short"], cwd).splitlines():
        path = line[3:].strip().strip('"')
        if not path or line.startswith("??"):
            continue
        if any(seg in path for seg in FORBIDDEN_STRICT):
            hits.append(Hit("FORBIDDEN.01", path, 0, f"违禁文件路径段: {path}"))
    tracked = [ln for ln in git(["ls-files"], cwd).splitlines() if "autosign/" in ln]
    if tracked:
        hits.append(Hit("FORBIDDEN.01", tracked[0], 0, "autosign 已被 git 跟踪"))
    return hits


def _sdk_line_hits(f: str, i: int, line: str) -> list[Hit]:
    """单行 compileSdkVersion/targetSdkVersion 数字判定。"""
    hits: list[Hit] = []
    for key in ("compileSdkVersion", "targetSdkVersion"):
        if re.search(rf'"{key}"\s*:\s*(\d+\b|"\d+"\s*,?)', line):
            hits.append(Hit("CI.SDK.01", f, i, f"{key} 须为 \"M.S.F\" 完整字符串"))
    return hits


def check_compile_sdk_staged(cwd: Path) -> list[Hit]:
    """staged build-profile.json5 中 compileSdkVersion 非 "M.S.F" 完整字符串。"""
    hits: list[Hit] = []
    for f in git(["diff", "--cached", "--name-only", "-z"], cwd).split("\x00"):
        if not f.endswith("build-profile.json5"):
            continue
        staged = subprocess.run(["git", "show", f":{f}"], cwd=str(cwd),
                                capture_output=True, text=True).stdout
        for i, line in enumerate(staged.splitlines(), 1):
            hits.extend(_sdk_line_hits(f, i, line))
    return hits


def check_suspicious_rewrites(cwd: Path, threshold: int = 20) -> list[Hit]:
    """整文件重写：numstat 增删相等且超过阈值。"""
    hits: list[Hit] = []
    for ln in git(["diff", "--cached", "--numstat"], cwd).splitlines():
        parts = ln.split("\t")
        if len(parts) >= 3 and parts[0].isdigit() and parts[0] == parts[1] \
                and int(parts[0]) > threshold:
            hits.append(Hit("REWRITE.01", parts[2], 0,
                            f"可疑整文件重写（+{parts[0]}/-{parts[1]} 行），确认 EOL/内容变更"))
    return hits


def check_config_changes(cwd: Path) -> list[Hit]:
    """bundleName/module 改动清单（提示确认必要性）。"""
    hits: list[Hit] = []
    names = git(["diff", "--cached", "--name-only"], cwd).splitlines()
    for f in names:
        if any(x in f for x in ("AppScope/app.json5", "config.json", "module.json5")):
            hits.append(Hit("CONFIG.CHANGE.01", f, 0, "bundleName/module 配置改动，确认包名/模块名必要性"))
    return hits


def check_data_safety(cwd: Path) -> list[Hit]:
    """ts→ets 迁移数据安全：D *.ts 必须有对应 .ets；无 LOST/DUP。"""
    hits: list[Hit] = []
    dels, adds = [], []
    for line in git(["status", "--short"], cwd).splitlines():
        code, path = line[:2], line[3:].strip().strip('"')
        if not path:
            continue
        if code.strip() == "D" and path.endswith(".ts") and not any(
                s in path for s in FORBIDDEN_SEGMENTS):
            dels.append(path)
        elif code.strip() == "??" and path.endswith(".ets") and not any(
                s in path for s in FORBIDDEN_SEGMENTS):
            adds.append(path)
    lost = [p for p in dels if not Path(cwd, p[:-3] + ".ets").exists()]
    dup = [p for p in dels if Path(cwd, p[:-3] + ".ets").exists() and Path(cwd, p).exists()]
    for p in lost:
        hits.append(Hit("SAFETY.01", p, 0, "迁移丢失：.ts 已删但无对应 .ets"))
    for p in dup:
        hits.append(Hit("SAFETY.02", p, 0, ".ts/.ets 并存（重复执行残留）"))
    return hits


def check_staged_code_quality(cwd: Path) -> list[Hit]:
    """staged 代码质量增量检查：行宽/命名只查新增行（-U0 diff），整文件规则扫 staged 文件。"""
    hits: list[Hit] = []
    # 整文件规则（ESObject/;;/大括号/用例编号）
    for f in git(["diff", "--cached", "--name-only", "-z"], cwd).split("\x00"):
        if not f.endswith((".ets", ".ts", ".js")):
            continue
        staged = git(["show", f":{f}"], cwd)
        if re.search(r":\s*ESObject\b|\bESObject;", staged):
            hits.append(Hit("G.EXT.02", f, 0, "避免使用 ESObject"))
        if ";;" in staged:
            hits.append(Hit("G.FMT.08", f, 0, "多余分号 ;;"))
        if re.search(r"\)\n\s*\{", staged):
            hits.append(Hit("G.FMT.10", f, 0, "大括号未与语句同行"))
        if re.search(r"\bit\('(?!SUB_)", staged):
            hits.append(Hit("XTS.CHECK.TCNUMBER.01", f, 0, "用例编号非 SUB_ 开头"))
    # 新增行检查（行宽/命名）
    cur, line_no = None, None
    for ln in git(["diff", "--cached", "-U0", "--", "*.ets", "*.ts", "*.js"], cwd).splitlines():
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
                hits.append(Hit("G.FMT.02", cur, line_no, f"新增行行宽 {len(body)}>120"))
            for m in re.finditer(r"\blet\s+([a-z]+_[a-z_]+|[A-Z][a-z][A-Za-z0-9]*)\s*[:=]", body):
                hits.append(Hit("G.NAM.03", cur, line_no, f"新增行变量命名 {m.group(1)} 非小驼峰"))
            line_no += 1
        elif not ln.startswith("-") and not ln.startswith("\\"):
            line_no += 1
    return hits
