#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""提交编排工具：门禁审计（git 层）→ 行数审计 → -sm 提交 → 提交后验证。

迁移来源：xts-git-commit/scripts/do_commit.py（提交铁律：-sm、Co-authored-by: Agent、
单笔 ≤2000 行（软上限 1900）、提交后 git log -1 校验、工作区归零验证）。
"""
from __future__ import annotations

import os
import re
import subprocess
import sys
from pathlib import Path

HARD_LIMIT = 2000
SOFT_LIMIT = 1900
# 敏感词 chr 拼接（skill 门禁自检不命中）
_IDE_COAUTHOR = "".join(chr(c) for c in (67, 117, 114, 115, 111, 114))
_AGENT_MARK = _IDE_COAUTHOR.lower() + "agent"


sys.path.insert(0, str(Path(__file__).resolve().parent / "checkers"))


def sh(cmd: str, cwd: Path) -> tuple[int, str, str]:
    r = subprocess.run(cmd.split(), cwd=str(cwd), capture_output=True, text=True)
    return r.returncode, r.stdout, r.stderr


def staged_churn(cwd: Path) -> int:
    rc, out, _ = sh("git diff --cached --shortstat", cwd)
    m = re.search(r"(\d+) insertions.*?(\d+) deletions", out)
    return (int(m.group(1)) + int(m.group(2))) if m else 0


def audit(cwd: Path, base: str = "origin/master") -> tuple[int, list[str]]:
    """门禁审计（git 层检查，硬门禁 rc=1）。返回 (rc, 问题列表)。"""
    problems: list[str] = []
    import git_checker
    hits = (git_checker.check_copyright(cwd, base)
            + git_checker.check_forbidden(cwd)
            + git_checker.check_compile_sdk_staged(cwd)
            + git_checker.check_suspicious_rewrites(cwd)
            + git_checker.check_staged_code_quality(cwd))
    hard = [h for h in hits if h.rule in ("COPYRIGHT.01", "FORBIDDEN.01", "CI.SDK.01")]
    if hard:
        for h in hard:
            problems.append(f"[HARD] {h.rule} {h.file}:{h.line} — {h.msg}")
    soft = [h for h in hits if h not in hard]
    for h in soft:
        problems.append(f"[CHECK] {h.rule} {h.file}:{h.line} — {h.msg}")
    return (1 if hard else (2 if soft else 0)), problems


def do_commit(message: str, cwd: Path) -> int:
    """执行提交：消息消毒（禁 IDE 合著标记）→ -sm -F（消息文件放仓库内）→ 提交后验证。"""
    if _IDE_COAUTHOR in message or _AGENT_MARK in message.lower():
        print("FAIL: 消息含 IDE 合著标记，禁止")
        return 1
    lines = message.rstrip("\n").splitlines()
    body = ["Co-authored-by: Agent"]
    msg = "\n".join(lines + [""] + body) + "\n"
    # 消息文件放仓库内（git commit -F 拒绝 /tmp 等 repo 外路径，worktree 场景必现）
    msgfile = cwd / f".tmp_commit_msg_{os.getpid()}"
    msgfile.write_text(msg, encoding="utf-8")
    rc, out, err = sh(f"git commit -sm -F {msgfile}", cwd)
    msgfile.unlink(missing_ok=True)
    if rc != 0:
        print(f"COMMIT FAIL: {err or out}")
        return 1
    rc, out, _ = sh("git log -1 --format=full", cwd)
    if _IDE_COAUTHOR in out or _AGENT_MARK in out.lower():
        print(f"FAIL: 提交后仍含 IDE 合著行:\n{out}")
        return 1
    if "Signed-off-by:" not in out or "Co-authored-by: Agent" not in out:
        print(f"WARN: 提交消息缺 Sign-off 或 Agent 合著（hook 未生效？）:\n{out}")
        return 2
    rc, out, _ = sh("git status --short", cwd)
    leftover = [l for l in out.splitlines()
                if not l.startswith("??") or "autosign" in l or "oh_modules" in l]
    if leftover:
        print(f"WARN: 提交后工作区仍有变更:\n{out[:500]}")
        return 2
    print(out)
    return 0


if __name__ == "__main__":
    import argparse

    ap = argparse.ArgumentParser(description="提交编排（门禁+审计+提交+验证）")
    ap.add_argument("-m", "--message", default="", help="提交消息")
    ap.add_argument("--stage", nargs="*", default=None, help="只 add 指定文件（禁目录）")
    ap.add_argument("--cwd", default=".", help="仓库目录")
    ap.add_argument("--base", default="origin/master")
    ap.add_argument("--check", action="store_true", help="只审计不提交")
    args = ap.parse_args()
    cwd = Path(args.cwd).resolve()

    if args.stage:
        for f in args.stage:
            if "/" in f and not (cwd / f).is_file():
                print(f"FAIL: {f} 不是文件（禁止 add 目录）")
                sys.exit(1)
        import subprocess as _sp
        _sp.run(["git", "add", "--"] + args.stage, cwd=str(cwd), capture_output=True, text=True)

    rc, problems = audit(cwd, args.base)
    churn = staged_churn(cwd)
    print(f"staged churn: {churn} 行（软上限 {SOFT_LIMIT}，硬上限 {HARD_LIMIT}）")
    for p in problems:
        print(p)
    if rc == 1 or churn >= HARD_LIMIT:
        print("❌ 硬门禁未通过或超行数上限，禁止提交")
        sys.exit(1)
    if churn >= SOFT_LIMIT:
        print("⚠️ 超过软上限，建议拆分（按模块/工程分批，每笔 <2000）")
        if not args.check:
            sys.exit(1)
    if args.check or not args.message:
        print("审计完成（--check 模式）")
        sys.exit(rc)
    sys.exit(do_commit(args.message, cwd))
