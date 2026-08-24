#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""代码门禁检查：C/C++ 检查与自动修复（规则注册表 rules_cpp.json）。

迁移来源：
- ohos-gate-compliance/scripts/gate_review.py（G.FMT.06-CPP 修复、G.FUD.05、行宽）
- ohos-gate-compliance-pr-check（FUNC.CC≤20 / FUNC.DEPTH≤4 / MAGIC.NUM / HEADER.NBNC≤300 / OAT.3 —— md 文本规则全部脚本化）
"""
from __future__ import annotations

import re
from pathlib import Path

from base import Hit

MAX_LINE = 120
INDENT_STEP = 4
MAX_FUNC_NBNC = 50
MAX_FUNC_CC = 20
MAX_FUNC_DEPTH = 4
MAX_HEADER_NBNC = 300

_FUNC_SIG_RE = re.compile(
    r"^(?:static\s+)?(?:napi_property_descriptor\s*\*|napi_value|bool|void|int(?:32_t)?|"
    r"uint32_t|size_t|std::string|auto)\s*(\w+)\s*\("
)
# 魔法数白名单：0/1/2/-1/1000（时间片/布尔/计数常见值）与进制前缀常量
_MAGIC_ALLOW = {"0", "1", "2", "-1", "1000", "0x0", "0x1", "0xFF", "0xffffffff"}


def _cpp_nbnc_line(stripped: str, in_block: bool) -> tuple[bool, bool]:
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


def _cpp_find_body_start(lines: list[str], sig_idx: int) -> int:
    j = sig_idx
    while j < len(lines) and j < sig_idx + 8:
        s = lines[j].lstrip()
        if "{" in s and not s.rstrip().endswith(";"):
            return j
        if s.endswith(";") and "{" not in s:
            return -1
        j += 1
    return -1


def _cpp_func_body(lines: list[str], body_start: int) -> tuple[int, int, list[str]]:
    """返回 (nbnc, 结束行索引, 函数体行列表)。"""
    depth = 0
    nbnc = 0
    in_block = False
    body: list[str] = []
    k = body_start
    while k < len(lines):
        s = lines[k].lstrip()
        counts, in_block = _cpp_nbnc_line(s, in_block)
        if counts and k > body_start and s not in ("}", "};"):
            nbnc += 1
        depth += s.count("{") - s.count("}")
        body.append(lines[k])
        if k > body_start and depth <= 0:
            break
        k += 1
    return nbnc, k, body


def _strip_cpp_comment(line: str) -> str:
    """剥行内 // 注释（保留字符串近似，启发式足够）。"""
    return re.split(r"//", line)[0]


def _func_cc_heuristic(body: list[str]) -> int:
    """启发式圈复杂度：if/for/while/case/catch/&&/|| 计数。"""
    cc = 1
    for ln in body:
        s = _strip_cpp_comment(ln)
        cc += len(re.findall(r"\b(?:if|for|while|catch)\b", s))
        cc += len(re.findall(r"\bcase\b", s))
        cc += len(re.findall(r"&&|\|\|", s))
    return cc


def _func_depth_heuristic(body: list[str]) -> int:
    """启发式嵌套深度：行内最大括号嵌套（剥注释）。"""
    max_depth = 0
    depth = 0
    for ln in body:
        s = _strip_cpp_comment(ln)
        depth += s.count("{") - s.count("}")
        max_depth = max(max_depth, depth)
    return max_depth


def _magic_numbers_hits(body: list[str], base_line: int) -> list[tuple[int, str]]:
    """启发式魔法数：函数体内裸数字字面量（白名单/宏行/case 标签/声明排除）。"""
    hits: list[tuple[int, str]] = []
    for idx, ln in enumerate(body):
        s = _strip_cpp_comment(ln)
        if not s.strip():
            continue
        if s.lstrip().startswith(("#", "case ", "return ", "if ", "while ", "for ", "switch ")):
            # return/case/流程行的裸数字多为合法语义，仅提示风格
            pass
        if re.match(r"^\s*#", s):
            continue
        for m in re.finditer(r"(?<![\w.])-?\d+(?![\w.])", s):
            num = m.group(0)
            if num in _MAGIC_ALLOW:
                continue
            # 数组尺寸/初始化列表、struct 字段初始化多为合法值 → 仍提示（人工确认）
            hits.append((base_line + idx, f"魔法数 {num}，建议抽 constexpr 命名常量"))
    return hits


# ---------------- G.FMT.06-CPP（迁移自 gate_review） ----------------
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
            expected = call_base + INDENT_STEP
            if indent < expected:
                out_indent = expected
                n += 1
        out.append(" " * out_indent + core + ending)
        if core and _fmt06_opens_call(core):
            call_base = indent
        if core and _fmt06_closes_call(core):
            call_base = None
    return "".join(out), n


# ---------------- 主扫描入口 ----------------
def _scan_fmt06_width(lines: list[str], add) -> None:
    """G.FMT.06-CPP 实参续行缩进 + G.FMT.05 行宽。"""
    call_base: int | None = None
    for i, line in enumerate(lines, 1):
        stripped = line.lstrip(" ")
        indent = len(line) - len(stripped)
        if call_base is not None and stripped and not stripped.startswith(")"):
            expected = call_base + INDENT_STEP
            if indent < expected:
                add("G.FMT.06-CPP", i, f"实参续行缩进 {indent}，应为 {expected}（起始行+{INDENT_STEP}）")
        if stripped and _fmt06_opens_call(stripped):
            call_base = indent
        if stripped and _fmt06_closes_call(stripped):
            call_base = None
        if not line.lstrip().startswith("#include") and len(line.rstrip("\n\r")) > MAX_LINE:
            add("G.FMT.05", i, f"行宽 {len(line)} > {MAX_LINE}")


def _scan_license_head(lines: list[str], add) -> None:
    """OAT.3：前 15 行须含 Copyright + Apache License。"""
    head = "\n".join(lines[:15])
    if "Copyright" not in head or "Apache License" not in head:
        add("OAT.3", 1, "缺少 Apache-2.0 许可证头（Copyright + Apache License 声明）")


def _scan_one_func(lines: list[str], i: int, add) -> int:
    """检查单个函数（G.FUD.05/FUNC.CC/FUNC.DEPTH/MAGIC.NUM），返回下一行索引。"""
    m = _FUNC_SIG_RE.match(lines[i].lstrip())
    if not m:
        return i + 1
    body_start = _cpp_find_body_start(lines, i)
    if body_start < 0:
        return i + 1
    nbnc, end_k, body = _cpp_func_body(lines, body_start)
    if nbnc > MAX_FUNC_NBNC:
        add("G.FUD.05", i + 1,
            f"函数 {m.group(1)}() nbnc={nbnc} > {MAX_FUNC_NBNC}；请拆分（CAPI 表注册拆 GetXxxProps）")
    cc = _func_cc_heuristic(body)
    if cc > MAX_FUNC_CC:
        add("FUNC.CC", i + 1, f"函数 {m.group(1)}() 圈复杂度启发值 {cc} > {MAX_FUNC_CC}（拆分分支）")
    depth = _func_depth_heuristic(body)
    if depth > MAX_FUNC_DEPTH:
        add("FUNC.DEPTH", i + 1, f"函数 {m.group(1)}() 嵌套深度启发值 {depth} > {MAX_FUNC_DEPTH}（提取子函数）")
    for ln, msg in _magic_numbers_hits(body, body_start + 1):
        add("MAGIC.NUM", ln, msg)
    return max(end_k, i + 1)


def scan_cpp_file(path: Path, text: str) -> list[Hit]:
    hits: list[Hit] = []
    if path.suffix not in (".cpp", ".h", ".cc"):
        return hits
    lines = text.splitlines()

    def add(rule_id: str, line_no: int, msg: str) -> None:
        hits.append(Hit(rule_id, str(path), line_no, msg))

    _scan_fmt06_width(lines, add)
    _scan_license_head(lines, add)
    i = 0
    while i < len(lines):
        i = _scan_one_func(lines, i, add)
    if path.suffix == ".h":
        nbnc = sum(1 for ln in lines
                   if ln.strip() and not ln.strip().startswith(("//", "*", "/*")))
        if nbnc > MAX_HEADER_NBNC:
            add("HEADER.NBNC", 1, f"头文件 nbnc={nbnc} > {MAX_HEADER_NBNC}；声明进 .cpp / 拆分")
    return hits


def fix_cpp_file(path: Path, text: str) -> tuple[str, int]:
    if path.suffix not in (".cpp", ".h", ".cc"):
        return text, 0
    return fix_cpp_fmt06(text)
