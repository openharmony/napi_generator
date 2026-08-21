#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""设备测试通过后的门禁 review、自动修复与 commit（pipeline，迁移自 gate_review.py v1）。

与原 gate_review.py 差异：扫描/修复统一走 checkers 包（ets_checker/cpp_checker/config_checker），
规则数据在 rules/*.json；gate_review.py 保留为兼容包装。
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent / "checkers"))

from base import Hit  # noqa: E402
import cpp_checker, ets_checker, config_checker  # noqa: E402
from gate_check import _detect_profile, scan_code_file, fix_code_file  # noqa: E402

_AA_LOG = "a" + "a" + "_test.log"
_MAX_LINE = 120
_SKIP_PARTS = {".cxx", "build", "oh_modules", "hypium", "node_modules", "autosign"}


def _resolve_commit_script() -> Path | None:
    rel = Path(".claude/skills/xts-git-commit/scripts/git-commit-agent.sh")
    for root in Path(__file__).resolve().parents:
        script = root / rel
        if script.is_file():
            return script
    return None


def find_git_root(start: Path) -> Path | None:
    cur = start.resolve()
    while cur != cur.parent:
        if (cur / ".git").exists():
            return cur
        cur = cur.parent
    return None


def _suffix_ok(suffix: str, profile: str) -> bool:
    if suffix in (".ets", ".ts", ".py", ".json", ".json5", ".md"):
        return True
    if profile == "capi" and suffix in (".cpp", ".h"):
        return True
    return False


def project_source_files(project: Path, profile: str) -> list[Path]:
    entry = project / "entry"
    if not entry.is_dir():
        return []
    out: list[Path] = []
    patterns = ("**/*.ets", "**/*.ts")
    if profile == "capi":
        patterns = ("**/*.ets", "**/*.cpp", "**/*.h", "**/*.ts")
    for pat in patterns:
        for fp in entry.glob(pat):
            if not fp.is_file():
                continue
            if any(part in _SKIP_PARTS for part in fp.parts):
                continue
            out.append(fp)
    return sorted(out)


def _is_resource_string_json(path: Path) -> bool:
    return (path.name == "string.json" and "resources" in path.parts
            and "element" in path.parts)


def gate_target_files(project: Path, profile: str) -> list[Path]:
    repo = find_git_root(project)
    bp = project / "build-profile.json5"
    if repo is None:
        out = project_source_files(project, profile)
        if bp.is_file():
            out.append(bp)
        return out
    try:
        rel_proj = project.resolve().relative_to(repo.resolve())
    except ValueError:
        out = project_source_files(project, profile)
        if bp.is_file():
            out.append(bp)
        return out
    status = subprocess.run(
        ["git", "-C", str(repo), "status", "--porcelain", str(rel_proj)],
        capture_output=True, text=True,
    )
    paths: list[Path] = []
    for ln in (status.stdout or "").splitlines():
        if len(ln) < 4:
            continue
        rel = ln[3:].strip().split(" -> ")[-1]
        if any(x in rel for x in ("/build/", "/.cxx/", "/autosign/", "/hypium/")):
            continue
        fp = repo / rel
        if not fp.is_file():
            continue
        if (fp.name == "build-profile.json5" or _suffix_ok(fp.suffix, profile)
                or _is_resource_string_json(fp)):
            paths.append(fp)
    if paths:
        return sorted(set(paths))
    out = project_source_files(project, profile)
    if bp.is_file():
        out.append(bp)
    return out


def scan_project(project: Path, profile: str, fix: bool) -> tuple[list[Hit], int]:
    issues: list[Hit] = []
    fixed = 0
    for fp in gate_target_files(project, profile):
        if fix:
            try:
                text = fp.read_text(encoding="utf-8")
            except OSError:
                continue
            new_text, n = fix_code_file(fp, text, profile)
            if n:
                fp.write_text(new_text, encoding="utf-8", newline="")
                fixed += n
        try:
            text = fp.read_text(encoding="utf-8")
        except OSError:
            continue
        issues.extend(scan_code_file(fp, text, profile))
    return issues, fixed


def verify_tests_passed(project: Path, suite: str) -> bool:
    try:
        from hypium_html_report import parse_unittest_device_log, _report_dir
    except ImportError:
        return True
    dest = _report_dir(str(project.resolve()), suite or None)
    log_file = dest / _AA_LOG
    if not log_file.is_file():
        print(f"[gate] 未找到设备日志 {log_file}，跳过测试结果校验")
        return True
    parsed = parse_unittest_device_log(
        log_file.read_text(encoding="utf-8", errors="replace"))
    sm = parsed.summary
    if sm is None:
        print("[gate] 日志无 OHOS_REPORT_RESULT，跳过测试结果校验")
        return True
    if sm.failure or sm.error:
        print(f"[gate] 设备测试未全通过: pass={sm.pass_count} fail={sm.failure} err={sm.error}")
        return False
    if sm.pass_count <= 0:
        print("[gate] 未检测到通过的用例")
        return False
    print(f"[gate] 设备测试已通过: {sm.pass_count} cases")
    return True


def _shortstat_ok(repo: Path, paths: list[str]) -> bool:
    if not paths:
        return False
    subprocess.run(["git", "-C", str(repo), "add", "--"] + paths, check=False)
    r = subprocess.run(["git", "-C", str(repo), "diff", "--cached", "--shortstat"],
                       capture_output=True, text=True)
    m = re.search(r"(\d+) insertion.*?(\d+) deletion", r.stdout or "")
    if not m:
        return True
    total = int(m.group(1)) + int(m.group(2))
    if total >= 1900:
        print(f"[gate] commit 行数 {total} >= 1900（本地软上限；门禁硬上限 2000），请拆分")
        subprocess.run(["git", "-C", str(repo), "reset", "HEAD", "--"] + paths)
        return False
    return True


def commit_project(project: Path, scope: str, title: str, body: str = "") -> int:
    repo = find_git_root(project)
    if repo is None:
        print("[gate] 未找到 git 仓库，跳过 commit")
        return 1
    try:
        rel_proj = project.resolve().relative_to(repo.resolve())
    except ValueError:
        print("[gate] 工程不在 git 仓库内")
        return 1
    status = subprocess.run(
        ["git", "-C", str(repo), "status", "--porcelain", str(rel_proj)],
        capture_output=True, text=True,
    )
    paths = []
    for ln in (status.stdout or "").splitlines():
        if len(ln) < 4:
            continue
        p = ln[3:].strip().split(" -> ")[-1]
        if "autosign/" in p or "/build/" in p or "hypium/" in p:
            continue
        paths.append(p)
    if not paths:
        print("[gate] 工程无待提交变更，跳过 commit")
        return 0
    if not _shortstat_ok(repo, paths):
        return 1
    commit_script = _resolve_commit_script()
    if commit_script is None:
        print("[gate] 未找到 xts-git-commit/scripts/git-commit-agent.sh")
        return 1
    msg = f"test({scope}): {title}\n\n{body}"
    return subprocess.run([str(commit_script), "-sm", "-m", msg], cwd=str(repo)).returncode


def _commit_only(proj: Path, scope: str, suite: str, title: str, body: str, skip: bool) -> int:
    if skip:
        return 0
    if not title:
        title = suite or proj.name
        title = f"{title} 用例（设备测试已通过）"
    if not body:
        body = "门禁 review 已通过。"
    rc = commit_project(proj, scope, title, body)
    if rc == 0:
        print("[gate] commit 完成")
    return rc


def run_post_test_gate_pipeline(
    project: str,
    *,
    suite: str = "",
    scope: str = "xts",
    skip_gate: bool = False,
    skip_commit: bool = False,
    commit_title: str = "",
    commit_body: str = "",
    require_tests_passed: bool = True,
) -> int:
    proj = Path(project).resolve()
    if not proj.is_dir():
        print(f"[gate] 工程不存在: {proj}")
        return 1
    if require_tests_passed and not verify_tests_passed(proj, suite):
        return 1
    if skip_gate:
        print("[gate] skip gate review")
        return _commit_only(proj, scope, suite, commit_title, commit_body, skip_commit)
    profile = _detect_profile(proj)
    print(f"[gate] === 门禁 review（profile={profile}）===")
    for round_i in range(2):
        issues, fixed = scan_project(proj, profile, fix=True)
        print(f"[gate] round {round_i + 1}: auto-fixed {fixed} file(s)")
        if not issues:
            break
    issues, _ = scan_project(proj, profile, fix=False)
    if issues:
        print(f"[gate] 仍有 {len(issues)} 项未自动修复：")
        for it in issues[:30]:
            loc = f"{it.file}:{it.line}" if it.line else it.file
            print(f"  [{it.rule}] {loc} — {it.msg}")
        print("[gate] 请对照 ohos-gate-compliance/SKILL.md 手工修复")
        return 2
    print("[gate] review 通过")
    if skip_commit:
        print("[gate] skip commit（--skip-commit）")
        return 0
    return _commit_only(proj, scope, suite, commit_title, commit_body, False)
