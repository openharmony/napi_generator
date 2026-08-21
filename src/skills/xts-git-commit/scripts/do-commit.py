#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""提交编排（xts-git-commit 脚本化）：门禁 → 行数审计 → 超限拆分建议 → -sm 提交 → 提交后验证。

用法：
  do-commit.py -m "test(ability): xxx"            # 提交已 add 内容
  do-commit.py --stage <文件...> -m "msg"          # 只 add 指定文件后提交（禁 git add <目录>）
  do-commit.py --check                            # 只跑门禁+行数审计，不提交

铁律固化：-sm（Signed-off-by）、仅 Co-authored-by: Agent（禁 Cursor）、单笔 ≤2000 行
（本地软上限 1900）、提交后 git log -1 --format=full 校验、提交后工作区归零验证。
"""
from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
from pathlib import Path

HARD_LIMIT = 2000
SOFT_LIMIT = 1900


def sh(cmd: str, cwd: Path) -> tuple[int, str, str]:
    r = subprocess.run(cmd, shell=True, cwd=str(cwd), capture_output=True, text=True)
    return r.returncode, r.stdout, r.stderr


def staged_churn(cwd: Path) -> int:
    rc, out, _ = sh("git diff --cached --shortstat", cwd)
    m = re.search(r"(\d+) insertions.*?(\d+) deletions", out)
    return (int(m.group(1)) + int(m.group(2))) if m else 0


def audit(cwd: Path, base: str = "origin/master") -> tuple[int, list[str]]:
    """门禁审计。返回 (rc, 问题列表)；rc=0 通过 / 1 硬门禁 / 2 需确认。"""
    problems: list[str] = []
    rc, out, _ = sh(f"python3 {Path(__file__).parent / 'check-precommit.py'} --base {base} --cwd {cwd}", cwd)
    problems.append(out.strip())
    return rc, problems


def do_commit(message: str, cwd: Path, author_env: dict | None = None) -> int:
    """执行提交：消息消毒（禁 Cursor）→ -sm → 提交后验证。"""
    if "Cursor" in message or "cursoragent" in message.lower():
        print("FAIL: 消息含 Cursor/cursoragent，禁止")
        return 1
    # 组装消息：Signed-off-by 后空一行 + Co-authored-by: Agent
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
    # 提交后验证
    rc, out, _ = sh("git log -1 --format=full", cwd)
    if "Cursor" in out or "cursoragent" in out.lower():
        print(f"FAIL: 提交后仍含 Cursor 合著行:\n{out}")
        return 1
    if "Signed-off-by:" not in out or "Co-authored-by: Agent" not in out:
        print(f"WARN: 提交消息缺 Sign-off 或 Agent 合著（hook 未生效？）:\n{out}")
        return 2
    # 工作区归零验证（staged 已清空）
    rc, out, _ = sh("git status --short", cwd)
    leftover = [l for l in out.splitlines()
                if not l.startswith("??") or "autosign" in l or "oh_modules" in l]
    if leftover:
        print(f"WARN: 提交后工作区仍有变更:\n{out[:500]}")
        return 2
    print(out)
    return 0


def main() -> None:
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
        sh("git add " + " ".join(args.stage), cwd)

    rc, problems = audit(cwd, args.base)
    churn = staged_churn(cwd)
    print(f"staged churn: {churn} 行（软上限 {SOFT_LIMIT}，硬上限 {HARD_LIMIT}）")
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


if __name__ == "__main__":
    main()
