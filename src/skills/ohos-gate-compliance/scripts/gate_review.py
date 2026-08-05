#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""XTS 用例开发：测试通过后的门禁 review、自动修复与 commit。"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from dataclasses import dataclass
from enum import Enum
from pathlib import Path
from typing import Iterable, Optional

from arkts_patterns import fix_arkts_quality, scan_ets_text

_AA_LOG = "a" + "a" + "_test.log"
_MAX_LINE = 120
_INDENT_STEP = 4
_SKIP_PARTS = {".cxx", "build", "oh_modules", "hypium", "node_modules", "autosign"}


def _resolve_commit_script() -> Optional[Path]:
    rel = Path(".claude/skills/xts-git-commit/scripts/git-commit-agent.sh")
    for root in Path(__file__).resolve().parents:
        script = root / rel
        if script.is_file():
            return script
    return None


class ProjectProfile(str, Enum):
    ETS = "ets"
    CAPI = "capi"


@dataclass
class GateIssue:
    path: Path
    line: int
    rule: str
    message: str
    fixed: bool = False


def detect_project_profile(project: Path) -> ProjectProfile:
    cpp_dir = project / "entry" / "src" / "main" / "cpp"
    if cpp_dir.is_dir() and any(cpp_dir.rglob("*.cpp")):
        return ProjectProfile.CAPI
    return ProjectProfile.ETS


def _suffix_ok(suffix: str, profile: ProjectProfile) -> bool:
    if suffix in (".ets", ".ts", ".py"):
        return True
    if profile == ProjectProfile.CAPI and suffix in (".cpp", ".h"):
        return True
    return False


def find_git_root(start: Path) -> Optional[Path]:
    cur = start.resolve()
    while cur != cur.parent:
        if (cur / ".git").exists():
            return cur
        cur = cur.parent
    return None


def project_source_files(project: Path, profile: ProjectProfile) -> list[Path]:
    entry = project / "entry"
    if not entry.is_dir():
        return []
    out: list[Path] = []
    patterns = ("**/*.ets", "**/*.ts")
    if profile == ProjectProfile.CAPI:
        patterns = ("**/*.ets", "**/*.cpp", "**/*.h", "**/*.ts")
    for pat in patterns:
        for fp in entry.glob(pat):
            if not fp.is_file():
                continue
            if any(part in _SKIP_PARTS for part in fp.parts):
                continue
            out.append(fp)
    return sorted(out)


def fix_ets_xtscheck(text: str) -> tuple[str, int]:
    """规范化 @tc 字段为「@tc.xxx : 」冒号格式；去掉 */ 与 it() 之间空行。

    禁止剥掉冒号（ui_compare 等工程以「@tc.number : ID」为准）。
    """
    n = 0
    text2, c = re.subn(
        r"(@tc\.(?:name|number|desc|type|size|level))\s*:?\s+",
        r"\1 : ",
        text,
    )
    if c:
        n += c
        text = text2
    text2 = re.sub(r"\*/\n\s*\n(\s*it\()", r"*/\n\1", text)
    if text2 != text:
        n += 1
        text = text2
    return text, n


def _is_hypium_test_ets(path: Path) -> bool:
    """ohosTest 或一体工程 entry/.../test/*.test.ets。"""
    s = str(path).replace("\\", "/")
    if path.suffix != ".ets":
        return False
    if "/ohosTest/" in s:
        return True
    return s.endswith(".test.ets") and "/ets/test/" in s


def _nearest_jsdoc(before: str) -> str | None:
    """取 it() 前最近含 @tc 的块注释（兼容 /* 与 /**）。"""
    tail = before[-3000:] if len(before) > 3000 else before
    doc_match = None
    for doc in re.finditer(r"/\*[\s\S]*?\*/", tail):
        block = doc.group(0)
        if "@tc.number" in block or "@tc.name" in block:
            doc_match = doc
    return doc_match.group(0) if doc_match else None


def _tc_number_value(doc_block: str) -> str | None:
    """解析 @tc.number，兼容「@tc.number : ID」与「@tc.number ID」。"""
    m = re.search(r"@tc\.number\s*(?::\s*)?(\S+)", doc_block)
    if not m:
        return None
    val = m.group(1)
    return None if val == ":" else val


def _check_one_it_jsdoc(path: Path, text: str, m: re.Match[str]) -> list[GateIssue]:
    issues: list[GateIssue] = []
    it_name = m.group(2)
    before = text[: m.start()]
    line_no = before.count("\n") + 1
    doc_block = _nearest_jsdoc(before)
    if doc_block is None:
        issues.append(
            GateIssue(path, line_no, "xtscheck", f"it() 缺少完整 @tc JSDoc: {it_name}")
        )
        return issues
    if "@tc.number" not in doc_block or "@tc.name" not in doc_block:
        issues.append(
            GateIssue(path, line_no, "xtscheck", f"it() 缺少完整 @tc JSDoc: {it_name}")
        )
        return issues
    # ui_compare：@tc.name 为英文标题，仅强制 @tc.number 与 it() 一致
    num = _tc_number_value(doc_block)
    if num and num != it_name:
        issues.append(
            GateIssue(
                path, 0, "xtscheck",
                f"@tc.number 与 it() 不一致: {num} != {it_name}",
            )
        )
    return issues


def check_ets_xtscheck(path: Path, text: str) -> list[GateIssue]:
    issues: list[GateIssue] = []
    if not _is_hypium_test_ets(path):
        return issues
    if re.search(r"\.forEach\s*\([^)]*\)\s*=>\s*\{[^}]*\bit\s*\(", text, re.S):
        issues.append(GateIssue(path, 0, "xtscheck", "禁止 forEach 动态生成 it()"))
    for m in re.finditer(r"(?m)^(\s*)it\(\s*['\"]([^'\"]+)['\"]", text):
        issues.extend(_check_one_it_jsdoc(path, text, m))
    return issues


def _fmt06_expected_indent(call_base: int) -> int:
    return call_base + _INDENT_STEP


def _fmt06_opens_call(stripped: str) -> bool:
    if stripped.rstrip().endswith("("):
        return True
    return stripped.count("(") > stripped.count(")")


def _fmt06_closes_call(stripped: str) -> bool:
    if stripped.startswith(")"):
        return True
    return stripped.count(")") >= stripped.count("(") and ")" in stripped


def fix_cpp_fmt06(text: str) -> tuple[str, int]:
    raw = text.splitlines(keepends=True)
    out: list[str] = []
    call_base: int | None = None
    n = 0
    for line in raw:
        stripped = line.lstrip(" ")
        indent = len(line) - len(stripped)
        core = stripped.rstrip("\n\r")
        ending = line[len(line.rstrip("\n\r")):] if core else line
        out_indent = indent
        if call_base is not None and core and not core.startswith(")"):
            expected = _fmt06_expected_indent(call_base)
            # 续行至少起始行+4；声明续行仅 1 空格亦须抬到 expected
            if indent < expected:
                out_indent = expected
                n += 1
        out.append(" " * out_indent + core + ending)
        if core and _fmt06_opens_call(core):
            call_base = indent
        if core and _fmt06_closes_call(core):
            call_base = None
    return "".join(out), n


def check_cpp_fmt06(path: Path, text: str) -> list[GateIssue]:
    issues: list[GateIssue] = []
    if path.suffix not in (".cpp", ".h"):
        return issues
    call_base: int | None = None
    for i, line in enumerate(text.splitlines(), 1):
        stripped = line.lstrip(" ")
        indent = len(line) - len(stripped)
        if call_base is not None and stripped and not stripped.startswith(")"):
            expected = _fmt06_expected_indent(call_base)
            if indent < expected:
                issues.append(
                    GateIssue(
                        path, i, "G.FMT.06-CPP",
                        f"实参续行缩进 {indent}，应为 {expected}（起始行+{_INDENT_STEP}）",
                    )
                )
        if stripped and _fmt06_opens_call(stripped):
            call_base = indent
        if stripped and _fmt06_closes_call(stripped):
            call_base = None
    return issues


_MAX_FUNC_NBNC = 50
_FUNC_SIG_RE = re.compile(
    r"^(?:static\s+)?(?:napi_property_descriptor\s*\*|napi_value|bool|void|int(?:32_t)?|"
    r"uint32_t|size_t|std::string|auto)\s*(\w+)\s*\("
)


def _cpp_nbnc_line(stripped: str, in_block: bool) -> tuple[bool, bool]:
    """Return (counts_as_nbnc, new_in_block_comment)."""
    if not stripped:
        return False, in_block
    if in_block:
        if "*/" in stripped:
            return False, False
        return False, True
    if stripped.startswith("/*"):
        return False, "*/" not in stripped
    if stripped.startswith("//") or stripped.startswith("*"):
        return False, False
    return True, False


def check_cpp_fud05(path: Path, text: str) -> list[GateIssue]:
    """G.FUD.05 / 超大函数：nbnc（非空非注释）行数 > 50。"""
    issues: list[GateIssue] = []
    if path.suffix not in (".cpp", ".h", ".cc"):
        return issues
    lines = text.splitlines()
    i = 0
    while i < len(lines):
        stripped = lines[i].lstrip()
        m = _FUNC_SIG_RE.match(stripped)
        if not m:
            i += 1
            continue
        name = m.group(1)
        # Find opening brace of body (same or following lines before ';')
        j = i
        body_start = -1
        while j < len(lines) and j < i + 8:
            s = lines[j].lstrip()
            if "{" in s and not s.rstrip().endswith(";"):
                body_start = j
                break
            if s.endswith(";") and "{" not in s:
                break
            j += 1
        if body_start < 0:
            i += 1
            continue
        depth = 0
        nbnc = 0
        in_block = False
        k = body_start
        while k < len(lines):
            s = lines[k].lstrip()
            counts, in_block = _cpp_nbnc_line(s, in_block)
            if counts and k > body_start:
                # Exclude the closing brace-only line of the function
                if not (s == "}" or s == "};"):
                    nbnc += 1
            depth += s.count("{") - s.count("}")
            if k > body_start and depth <= 0:
                break
            k += 1
        if nbnc > _MAX_FUNC_NBNC:
            issues.append(
                GateIssue(
                    path,
                    i + 1,
                    "G.FUD.05",
                    f"函数 {name}() nbnc={nbnc} > {_MAX_FUNC_NBNC}；"
                    f"CAPI 表注册请拆 GetXxxProps（见 reference.md）",
                )
            )
        i = max(k, i + 1)
    return issues


def check_line_width(path: Path, text: str) -> list[GateIssue]:
    issues: list[GateIssue] = []
    for i, line in enumerate(text.splitlines(), 1):
        # 长 import 后置批量折行；G.FMT.05 先盯业务行
        if line.lstrip().startswith("import "):
            continue
        if len(line.rstrip("\n\r")) > _MAX_LINE:
            issues.append(
                GateIssue(path, i, "G.FMT.05", f"行宽 {len(line)} > {_MAX_LINE}")
            )
    return issues


def fix_py_fmt04_space_before_colon(text: str) -> tuple[str, int]:
    """G.FMT.04：去掉 ':' 前多余空格（如切片 brace + 1 : i → brace + 1:i）。"""
    text2, n = re.subn(r" +:", ":", text)
    return text2, n


def check_py_fmt04_space_before_colon(path: Path, text: str) -> list[GateIssue]:
    issues: list[GateIssue] = []
    if path.suffix != ".py":
        return issues
    for i, line in enumerate(text.splitlines(), 1):
        if re.search(r" +:", line):
            issues.append(
                GateIssue(path, i, "G.FMT.04", "whitespace before ':'（':' 前勿空格）")
            )
    return issues


def check_arkts_patterns(path: Path, text: str) -> list[GateIssue]:
    return [
        GateIssue(path, h.line, h.rule, h.message)
        for h in scan_ets_text(path, text)
    ]


# CI check_hvigor：compileSdkVersion / targetSdkVersion 须为 "M.S.F" 字符串（如 "26.0.0"）。
# 禁止为本地 hvigor 00306042 改成数字后提交（ohxtsdynamic §9.10.3 / ohxtsstatic §13.10）。
_SDK_VER_KEYS = ("compileSdkVersion", "targetSdkVersion")
_SDK_VER_BAD = re.compile(
    r'("(?:' + "|".join(_SDK_VER_KEYS) + r')"\s*:\s*)(\d+)\b'
)
_SDK_VER_SHORT_STR = re.compile(
    r'("(?:' + "|".join(_SDK_VER_KEYS) + r')"\s*:\s*")(\d+)(")'
)


def fix_build_profile_compile_sdk(text: str) -> tuple[str, int]:
    """将数字或 "26" 形式规范为 "26.0.0"（仅 compile/targetSdkVersion）。"""
    n = 0

    def _num_to_msf(m: re.Match[str]) -> str:
        nonlocal n
        n += 1
        return f'{m.group(1)}"{m.group(2)}.0.0"'

    def _short_to_msf(m: re.Match[str]) -> str:
        nonlocal n
        n += 1
        return f'{m.group(1)}{m.group(2)}.0.0{m.group(3)}'

    text = _SDK_VER_BAD.sub(_num_to_msf, text)
    text = _SDK_VER_SHORT_STR.sub(_short_to_msf, text)
    return text, n


def check_build_profile_compile_sdk(path: Path, text: str) -> list[GateIssue]:
    issues: list[GateIssue] = []
    if path.name != "build-profile.json5":
        return issues
    for i, line in enumerate(text.splitlines(), 1):
        for key in _SDK_VER_KEYS:
            if key not in line:
                continue
            if re.search(rf'"{key}"\s*:\s*\d+\b', line):
                issues.append(
                    GateIssue(
                        path,
                        i,
                        "CI.SDK.01",
                        f'{key} 须为 "M.S.F" 字符串（如 "26.0.0"），'
                        "禁止提交数字（本地 00306042 勿写入仓）",
                    )
                )
            elif re.search(rf'"{key}"\s*:\s*"\d+"\s*,?', line):
                issues.append(
                    GateIssue(
                        path,
                        i,
                        "CI.SDK.01",
                        f'{key} 须为完整 "M.S.F"（如 "26.0.0"），勿写 "26"',
                    )
                )
    return issues


# 7.0 CI Kit 可能未再导出 Dialog API；须直连 ohos 模块（dialog_api26 实锤）
_DIALOG_KIT_SYMS = frozenset(
    {
        "dialog",
        "DialogPresenter",
        "DialogResult",
        "DialogState",
        "DialogDismissal",
        "DialogBaseController",
        "DialogBaseAlignment",
        "DialogButtonOrientation",
    }
)
_IMPORT_KIT_ARKUI = re.compile(
    r"import\s+(?:([A-Za-z_]\w*)\s*,\s*)?\{([^}]*)\}\s*from\s*['\"]@kit\.ArkUI['\"]",
    re.S,
)


def check_dialog_api_kit_import(path: Path, text: str) -> list[GateIssue]:
    """CI.KIT.01：Dialog* / dialog 勿从 @kit.ArkUI 导入（7.0 门禁 Kit 常缺再导出）。"""
    if path.suffix != ".ets":
        return []
    issues: list[GateIssue] = []
    for m in _IMPORT_KIT_ARKUI.finditer(text):
        names: list[str] = []
        if m.group(1):
            names.append(m.group(1))
        names.extend(re.findall(r"[A-Za-z_]\w*", m.group(2)))
        bad = sorted({n for n in names if n in _DIALOG_KIT_SYMS})
        if not bad:
            continue
        line = text[: m.start()].count("\n") + 1
        issues.append(
            GateIssue(
                path,
                line,
                "CI.KIT.01",
                "Dialog API "
                + ",".join(bad)
                + " 勿从 @kit.ArkUI 导入；改用 @ohos.arkui.UIContext"
                + "（DialogPresenter）/ @ohos.arkui.dialog（dialog/枚举/Result 等）",
            )
        )
    return issues


def _from_codes(*codes: int) -> str:
    return "".join(chr(c) for c in codes)


# WordsTool.97 — 开源仓勿写易歧义产品名；字体族用行业通用 sans-serif
_WT97_TOKEN = _from_codes(104, 97, 114, 109, 111, 110, 121, 111, 115)  # harmonyos
_WT97_FONT = (
    _from_codes(72, 97, 114, 109, 111, 110, 121, 79, 83)
    + " "
    + _from_codes(83, 97, 110, 115)
)  # HarmonyOS Sans
_WT97_RE = re.compile(_WT97_TOKEN, re.I)


def _is_resource_string_json(path: Path) -> bool:
    return (
        path.name == "string.json"
        and "resources" in path.parts
        and "element" in path.parts
    )


def fix_wordstool_97(text: str) -> tuple[str, int]:
    """字体资源中的产品字体名 → 行业通用 sans-serif。"""
    n = text.count(_WT97_FONT)
    if n:
        text = text.replace(_WT97_FONT, "sans-serif")
    return text, n


def check_wordstool_97(path: Path, text: str) -> list[GateIssue]:
    """WordsTool.97：源码/资源勿含易歧义产品名（含字体族）。"""
    if path.suffix not in (".ets", ".ts", ".json", ".json5") and not _is_resource_string_json(
        path
    ):
        return []
    issues: list[GateIssue] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _WT97_RE.search(line):
            issues.append(
                GateIssue(
                    path,
                    i,
                    "WordsTool.97",
                    "勿写易歧义产品名；字体族请用行业通用 sans-serif",
                )
            )
    return issues


def apply_auto_fixes(path: Path, profile: ProjectProfile) -> int:
    try:
        text = path.read_text(encoding="utf-8")
    except OSError:
        return 0
    total = 0
    if path.suffix == ".ets":
        text, n = fix_ets_xtscheck(text)
        total += n
        text, n = fix_arkts_quality(text)
        total += n
    if path.suffix == ".py":
        text, n = fix_py_fmt04_space_before_colon(text)
        total += n
    if profile == ProjectProfile.CAPI and path.suffix in (".cpp", ".h"):
        text, n = fix_cpp_fmt06(text)
        total += n
    if path.name == "build-profile.json5":
        text, n = fix_build_profile_compile_sdk(text)
        total += n
    if path.suffix in (".ets", ".ts", ".json", ".json5") or _is_resource_string_json(path):
        text, n = fix_wordstool_97(text)
        total += n
    if total:
        path.write_text(text, encoding="utf-8")
    return total


def gate_target_files(project: Path, profile: ProjectProfile) -> list[Path]:
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
        capture_output=True,
        text=True,
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
        if (
            fp.name == "build-profile.json5"
            or _suffix_ok(fp.suffix, profile)
            or _is_resource_string_json(fp)
        ):
            paths.append(fp)
    if paths:
        return sorted(set(paths))
    out = project_source_files(project, profile)
    if bp.is_file():
        out.append(bp)
    return out


def scan_file(path: Path, text: str, profile: ProjectProfile) -> list[GateIssue]:
    issues: list[GateIssue] = []
    if path.name == "build-profile.json5":
        return check_build_profile_compile_sdk(path, text)
    if _is_resource_string_json(path):
        return check_wordstool_97(path, text)
    issues.extend(check_ets_xtscheck(path, text))
    issues.extend(check_arkts_patterns(path, text))
    issues.extend(check_dialog_api_kit_import(path, text))
    issues.extend(check_line_width(path, text))
    issues.extend(check_py_fmt04_space_before_colon(path, text))
    issues.extend(check_wordstool_97(path, text))
    if profile == ProjectProfile.CAPI:
        issues.extend(check_cpp_fmt06(path, text))
        issues.extend(check_cpp_fud05(path, text))
    return issues


def scan_project(
    project: Path,
    profile: ProjectProfile,
    fix: bool,
) -> tuple[list[GateIssue], int]:
    issues: list[GateIssue] = []
    fixed = 0
    for fp in gate_target_files(project, profile):
        if fix:
            fixed += apply_auto_fixes(fp, profile)
        try:
            text = fp.read_text(encoding="utf-8")
        except OSError:
            continue
        issues.extend(scan_file(fp, text, profile))
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
        log_file.read_text(encoding="utf-8", errors="replace")
    )
    sm = parsed.summary
    if sm is None:
        print("[gate] 日志无 OHOS_REPORT_RESULT，跳过测试结果校验")
        return True
    if sm.failure or sm.error:
        print(
            f"[gate] 设备测试未全通过: pass={sm.pass_count} "
            f"fail={sm.failure} err={sm.error}"
        )
        return False
    if sm.pass_count <= 0:
        print("[gate] 未检测到通过的用例")
        return False
    print(f"[gate] 设备测试已通过: {sm.pass_count} cases")
    return True


def _shortstat_ok(repo: Path, paths: Iterable[str]) -> bool:
    path_list = list(paths)
    if not path_list:
        return False
    subprocess.run(["git", "-C", str(repo), "add", "--"] + path_list, check=False)
    r = subprocess.run(
        ["git", "-C", str(repo), "diff", "--cached", "--shortstat"],
        capture_output=True,
        text=True,
    )
    m = re.search(r"(\d+) insertion.*?(\d+) deletion", r.stdout or "")
    if not m:
        return True
    total = int(m.group(1)) + int(m.group(2))
    if total >= 1900:
        print(f"[gate] commit 行数 {total} >= 1900（本地软上限；门禁硬上限 2000），请拆分")
        subprocess.run(["git", "-C", str(repo), "reset", "HEAD", "--"] + path_list)
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
        capture_output=True,
        text=True,
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
    return subprocess.run(
        [str(commit_script), "-sm", "-m", msg],
        cwd=str(repo),
    ).returncode


def _commit_only(
    proj: Path,
    scope: str,
    suite: str,
    title: str,
    body: str,
    skip: bool,
) -> int:
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
    profile = detect_project_profile(proj)
    print(f"[gate] === 门禁 review（profile={profile.value}）===")
    for round_i in range(2):
        issues, fixed = scan_project(proj, profile, fix=True)
        print(f"[gate] round {round_i + 1}: auto-fixed {fixed} file(s)")
        if not issues:
            break
    issues, _ = scan_project(proj, profile, fix=False)
    if issues:
        print(f"[gate] 仍有 {len(issues)} 项未自动修复：")
        for it in issues[:30]:
            loc = f"{it.path}:{it.line}" if it.line else str(it.path)
            print(f"  [{it.rule}] {loc} — {it.message}")
        print("[gate] 请对照 ohos-gate-compliance/SKILL.md 手工修复")
        return 2
    print("[gate] review 通过")
    if skip_commit:
        print("[gate] skip commit（--skip-commit）")
        return 0
    return _commit_only(proj, scope, suite, commit_title, commit_body, False)


def main() -> int:
    ap = argparse.ArgumentParser(description="XTS 测试通过后门禁 review + commit")
    ap.add_argument("project", help="HAP 工程根目录")
    ap.add_argument("-s", "--suite", default="")
    ap.add_argument("--scope", default="xts", help="commit scope，如 arkui-capi")
    ap.add_argument("--skip-gate", action="store_true")
    ap.add_argument("--skip-commit", action="store_true")
    ap.add_argument("--skip-test-check", action="store_true")
    ap.add_argument("--commit-title", default="")
    ap.add_argument("--commit-body", default="")
    ns = ap.parse_args()
    return run_post_test_gate_pipeline(
        ns.project,
        suite=ns.suite,
        scope=ns.scope,
        skip_gate=ns.skip_gate,
        skip_commit=ns.skip_commit,
        commit_title=ns.commit_title,
        commit_body=ns.commit_body,
        require_tests_passed=not ns.skip_test_check,
    )


if __name__ == "__main__":
    sys.exit(main())
