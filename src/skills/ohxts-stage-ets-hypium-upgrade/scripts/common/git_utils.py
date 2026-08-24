#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""git 工具：批量 mv、数据安全检查（LOST/DUP）、版权头检查（1.4.1）、违禁文件检查。"""
from __future__ import annotations

import re
import subprocess
from pathlib import Path
from typing import Optional

REPO = Path("/root/aiSkill/develop/xts_acts")

# 编译/签名产物路径段（提交门禁与迁移排除用）
FORBIDDEN_SEGMENTS = ("oh_modules", "node_modules", "build", ".hvigor", "autosign", ".preview")
COPYRIGHT_RE = re.compile(rb"Copyright\s*\(", re.I)


def sh(cmd: str, cwd: Optional[Path] = None, check: bool = False) -> tuple[int, str, str]:
    import shlex
    r = subprocess.run(shlex.split(cmd), cwd=str(cwd or REPO),
                       capture_output=True, text=True)
    if check and r.returncode != 0:
        raise RuntimeError(f"cmd failed({r.returncode}): {cmd}\n{r.stderr}")
    return r.returncode, r.stdout, r.stderr


def git(args: list[str], cwd: Optional[Path] = None) -> str:
    """git 命令（列表参数，无 shell）。"""
    r = subprocess.run(["git"] + args, cwd=str(cwd or REPO),
                       capture_output=True, text=True)
    return r.stdout


def git_status_short(cwd: Path = REPO) -> str:
    rc, out, _ = sh("git status --short", cwd=cwd)
    return out


def git_mv(src: str, dst: str, cwd: Path = REPO) -> bool:
    """git mv .ts to .ets; refuse overwrite if target exists."""
    dst_p = Path(cwd, dst)
    if dst_p.exists():
        print(f"[跳过-目标已存在] {dst} 已存在，拒绝覆盖（可能已迁移或上游已修复）")
        return False
    rc, out, err = sh(f"git mv -- {src} {dst}", cwd=cwd)
    if rc == 0:
        return True
    # 未跟踪文件（??）→ 普通 mv
    Path(cwd, src).rename(dst_p)
    return True


def data_safety_check(cwd: Path = REPO, subdir: str = "") -> dict:
    """1.6 数据安全检查：D *.ts 必须有对应 ?? *.ets；检查 .ts/.ets 并存（重复执行残留）。

    返回 {'lost': [...], 'dup': [...], 'dels': [...], 'adds': [...]}
    """
    status = git_status_short(cwd)
    dels, adds = [], []
    for line in status.splitlines():
        code, path = line[:2], line[3:].strip()
        if not path:
            continue
        if path.startswith('"'):
            path = path.strip('"')
        if code.strip() == "D" and path.endswith(".ts") and not any(
                s in path for s in FORBIDDEN_SEGMENTS):
            dels.append(path)
        elif code.strip() == "??" and path.endswith(".ets") and not any(
                s in path for s in FORBIDDEN_SEGMENTS):
            adds.append(path)
    # 丢失判定：.ts 已删且磁盘上无对应 .ets（M/已跟踪的 .ets 不算丢失）
    lost = [p for p in dels if not Path(cwd, p[:-3] + ".ets").exists()]
    # 并存检测：工作区同目录同时存在 .ts 与 .ets（重复执行残留）
    dup = []
    for p in dels:
        ets = Path(cwd, p[:-3] + ".ets")
        ts = Path(cwd, p)
        if ts.exists() and ets.exists():
            dup.append(p)
    return {"lost": lost, "dup": dup, "dels": dels, "adds": adds}


def copyright_check(base: str = "origin/master", head: str = "HEAD",
                    cwd: Path = REPO) -> list[str]:
    """1.4.1 版权头硬门禁：diff 中删除 Copyright 行；或基线有头、HEAD 无头。

    返回违规文件列表（空 = 通过）。
    """
    problems: list[str] = []
    # ① diff 中出现删除 Copyright 行
    diff = git(["diff", f"{base}..{head}"], cwd)
    deleted = [ln for ln in diff.splitlines() if ln.startswith("-") and "Copyright" in ln]
    if deleted:
        problems.append(f"diff 删除版权头: {base}..{head}\n" + "\n".join(deleted[:20]))
    # ② 基线有头、HEAD 无头
    mb = git(["merge-base", base, head], cwd).strip() or base
    out = git(["diff", "--name-only", f"{mb}..{head}"], cwd)
    for f in out.splitlines():
        b = git(["show", f"{mb}:{f}"], cwd).encode()
        if rc != 0:
            continue
        try:
            h = Path(cwd, f).read_bytes()
        except OSError:
            rc, h2, _ = (0, git(["show", f"{head}:{f}"], cwd), "")
            if rc != 0:
                continue
            h = h2.encode()
        if COPYRIGHT_RE.search(b.encode()) and not COPYRIGHT_RE.search(h):
            problems.append(f"版权头丢失: {f}")
    return problems


def forbidden_staged(cwd: Path = REPO) -> list[str]:
    """1.4.2 ② 违禁文件门禁：staged/新增中不得含 autosign、oh_modules、build/、*.hap。"""
    bad = []
    rc, out, _ = sh("git status --short", cwd=cwd)
    for line in out.splitlines():
        path = line[3:].strip().strip('"')
        if not path:
            continue
        if line.startswith("??"):
            continue  # 未跟踪（autosign 未跟踪可忽略，提交时只 add 具体文件即可）
        if any(seg in path for seg in ("autosign/", "oh_modules", "/build/")) or path.endswith(".hap"):
            bad.append(path)
    out = git(["ls-files"], cwd)
    tracked = [ln for ln in out.splitlines() if "autosign/" in ln]
    if tracked:
        bad.append("autosign 已被 git 跟踪: " + tracked[0])
    return bad


def check_config_residue(cwd: Path = REPO) -> list[str]:
    """1.4.2 ③ 编译期配置残留：工作区已跟踪 build-profile.json5 中 numeric compileSdkVersion。"""
    rc, out, _ = sh(
        r"git grep -l '\"compileSdkVersion\": 26,' -- '*/build-profile.json5' || true", cwd=cwd)
    return out.splitlines()


def suspicious_rewrites(cwd: Path = REPO, threshold: int = 20) -> list[str]:
    """xts-git-commit：整文件重写检测 numstat 增删相等且超过阈值。"""
    out = git(["diff", "--cached", "--numstat"], cwd)
    hits = []
    for ln in out.splitlines():
        parts = ln.split("\t")
        if len(parts) >= 3 and parts[0].isdigit() and parts[1].isdigit() \
                and parts[0] == parts[1] and int(parts[0]) > threshold:
            hits.append(ln)
    return hits


def list_changed_config(cwd: Path = REPO) -> list[str]:
    """1.4.2 ④ bundleName/模块名改动审查清单。"""
    names = git(["diff", "--cached", "--name-only"], cwd)
    return [f for f in names.splitlines()
            if any(x in f for x in ("AppScope/app.json5", "config.json", "module.json5"))]


if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser(description="git 数据安全/门禁自检")
    ap.add_argument("--check-safety", action="store_true", help="数据安全检查（LOST/DUP）")
    ap.add_argument("--check-copyright", action="store_true", help="版权头检查")
    ap.add_argument("--check-forbidden", action="store_true", help="违禁文件检查")
    ap.add_argument("--check-config", action="store_true", help="compileSdkVersion 残留")
    ap.add_argument("--check-rewrites", action="store_true", help="可疑整文件重写")
    args = ap.parse_args()

    if args.check_safety:
        r = data_safety_check()
        print(f"LOST({len(r['lost'])}):", r["lost"] or "-")
        print(f"DUP({len(r['dup'])}):", r["dup"] or "-")
    if args.check_copyright:
        p = copyright_check()
        print(f"COPYRIGHT({len(p)}):", p or "OK")
    if args.check_forbidden:
        p = forbidden_staged()
        print(f"FORBIDDEN({len(p)}):", p or "OK")
    if args.check_config:
        p = check_config_residue()
        print(f"CONFIG_RESIDUE({len(p)}):", p or "OK")
    if args.check_rewrites:
        p = suspicious_rewrites()
        print(f"REWRITES({len(p)}):", p or "OK")
    if not any([args.check_safety, args.check_copyright, args.check_forbidden,
                args.check_config, args.check_rewrites]):
        ap.print_help()


def preserve_eol(orig_text: str, new_text: str) -> str:
    """按原文行尾风格规范化新文本：CRLF 保持 CRLF、LF 保持 LF。

    检视/门禁教训：转换脚本用 LF 重写 CRLF 文件会整文件假 diff，必须保持各文件自身约定。
    """
    if "\r\n" in orig_text:
        return new_text.replace("\r\n", "\n").replace("\n", "\r\n")
    return new_text.replace("\r\n", "\n")


def write_preserve_eol(path: Path, orig_text: str, new_text: str) -> None:
    """写文件且保持原文行尾（替代裸 write_text，防 CRLF→LF 整文件假 diff）。"""
    path.write_text(preserve_eol(orig_text, new_text), encoding="utf-8", newline="")


def remove_file(path: Path) -> bool:
    """删除文件（已跟踪 git rm，未跟踪直接删）。返回是否删除。"""
    rel = str(path.relative_to(REPO))
    rc, _, _ = sh(f"git ls-files --error-unmatch -- {rel}")
    if rc == 0:
        rc, _, _ = sh(f"git rm -q -- {rel}")
        return rc == 0
    try:
        path.unlink()
        return True
    except OSError:
        return False


def cleanup_leftover_ts(proj_root: Path) -> int:
    """删除 ts→ets 迁移遗留：同目录已有 .ets 的 .ts（检视：新增 .ets 必须删除原 .ts）。

    - 排除 oh_modules/build/hvigorfile/d.ts；仍被 module.json5/config.json 引用的跳过并告警。
    - 返回删除数。
    """
    removed = 0
    for ts in sorted(proj_root.rglob("*.ts")):
        if any(seg in ts.parts for seg in FORBIDDEN_SEGMENTS):
            continue
        if ts.name == "hvigorfile.ts" or ts.name.endswith(".d.ts"):
            continue
        ets = ts.with_suffix(".ets")
        if not ets.exists():
            continue
        refs = [c for c in proj_root.rglob("module.json5") if ts.name in c.read_text(errors="replace")]
        refs += [c for c in proj_root.rglob("module.json") if ts.name in c.read_text(errors="replace")]
        refs += [c for c in proj_root.rglob("config.json") if ts.name in c.read_text(errors="replace")]
        if refs:
            print(f"[跳过-仍被引用] {ts} 被 {refs[0]} 引用，需先更新引用")
            continue
        if remove_file(ts):
            print(f"[清理遗留.ts] {ts}")
            removed += 1
    return removed
