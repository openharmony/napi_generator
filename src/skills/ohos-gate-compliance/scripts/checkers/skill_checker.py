#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""skill 门禁检查：skill 仓提交前 Python AST 门禁 + WordsTool 词表 + py_compile。

迁移来源：
- ohos-gate-compliance/scripts/scan_skill_repo_gate.py（FILE.NBNC/FUNC.NBNC/CC/DEPTH/G.NAM.01/G.EDV.04）
- ohos-gate-compliance/scripts/scan_wordstool_docs.py（WordsTool 词表全量规则）
- ohos-gate-compliance/scripts/precheck_skill_commit.sh（py_compile 校验）
"""
from __future__ import annotations

import ast
import py_compile
import re
from dataclasses import dataclass
from pathlib import Path

from base import Hit

SKIP_DIRS = {".git", "node_modules", "build", "out", "__pycache__", ".cursor", "arkui"}
DOC_SUFFIXES = {".md", ".sh", ".py"}
_MAX_FILE_NBNC = 2000
_MAX_FUNC_NBNC = 50
_MAX_FUNC_CC = 20
_MAX_FUNC_DEPTH = 4
# 正则字面量拆开，避免扫描器自命中
_SHELL_TRUE_RE = re.compile("shell" + r"\s*=\s*" + "Tr" + "ue")
_BASH_ARGV0_RE = re.compile(
    r"subprocess\.(?:run|Popen|call|check_call|check_output)\s*\(\s*"
    r"\[\s*['\"](?:/bin/ba" + "sh|/bin/sh|ba" + "sh|sh|cmd\\.exe|cmd|"
    r"/usr/bin/expect)['\"]",
    re.I,
)
_HYPHEN_PY_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)+\.py$")
_SHELL_HARD_PARTS = ("ohos-gate-compliance", "xts-develop-master-cycle", "xts_shared")
_FUNC_SKIP_NAMES = {"ohhdc.py"}
_SELF_SKIP_NAMES = {"skill_checker.py"}


def _shell_hard(path: Path) -> bool:
    return any(part in _SHELL_HARD_PARTS for part in path.parts)


def _func_check(path: Path) -> bool:
    return path.name not in _SELF_SKIP_NAMES and path.name not in _FUNC_SKIP_NAMES


def _nbnc_lines(lines: list[str]) -> int:
    return sum(1 for l in lines if l.strip() and not l.strip().startswith("#"))


def _func_depth(node: ast.AST, d: int = 0) -> int:
    md = d
    for c in ast.iter_child_nodes(node):
        nest = isinstance(c, (ast.If, ast.For, ast.While, ast.With, ast.Try,
                              ast.FunctionDef, ast.AsyncFunctionDef))
        md = max(md, _func_depth(c, d + 1 if nest else d))
    return md


def _func_cc(node: ast.AST) -> int:
    cc = 1
    for n in ast.walk(node):
        if isinstance(n, (ast.If, ast.For, ast.While, ast.ExceptHandler, ast.With, ast.Assert)):
            cc += 1
        elif isinstance(n, ast.BoolOp):
            cc += max(0, len(n.values) - 1)
    return cc


def _should_scan_py(path: Path) -> bool:
    if path.suffix != ".py":
        return False
    return not any(part in SKIP_DIRS for part in path.parts)


def _check_name_and_file(path: Path, lines: list[str]) -> list[Hit]:
    hits: list[Hit] = []
    if _HYPHEN_PY_RE.match(path.name):
        hits.append(Hit("G.NAM.01", str(path), 1,
                        f'Module name "{path.stem}" must be snake_case (no hyphens)'))
    file_nbnc = _nbnc_lines(lines)
    if file_nbnc > _MAX_FILE_NBNC:
        hits.append(Hit("FILE.NBNC", str(path), 1,
                        f"file nbnc={file_nbnc} > {_MAX_FILE_NBNC}; split modules"))
    return hits


def _check_shell_lines(path: Path, lines: list[str]) -> list[Hit]:
    if not _shell_hard(path):
        return []
    hits: list[Hit] = []
    for i, line in enumerate(lines, 1):
        stripped = line.lstrip()
        if stripped.startswith("#"):
            continue
        if _SHELL_TRUE_RE.search(line):
            hits.append(Hit("G.EDV.04", str(path), i, "forbid subprocess shell injection flag"))
        if _BASH_ARGV0_RE.search(line):
            hits.append(Hit("G.EDV.04", str(path), i,
                            "forbid bash/sh/cmd as subprocess argv0; exec script directly"))
    return hits


def _check_functions(path: Path, lines: list[str], tree: ast.AST) -> list[Hit]:
    if not _func_check(path):
        return []
    hits: list[Hit] = []
    for node in ast.walk(tree):
        if not isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            continue
        body = lines[node.lineno - 1:node.end_lineno or node.lineno]
        nbnc = _nbnc_lines(body)
        cc = _func_cc(node)
        depth = _func_depth(node)
        if nbnc > _MAX_FUNC_NBNC:
            hits.append(Hit("FUNC.NBNC", str(path), node.lineno,
                            f"{node.name}() nbnc={nbnc} > {_MAX_FUNC_NBNC}"))
        if cc > _MAX_FUNC_CC:
            hits.append(Hit("FUNC.CC", str(path), node.lineno,
                            f"{node.name}() cyclomatic={cc} > {_MAX_FUNC_CC}"))
        if depth > _MAX_FUNC_DEPTH:
            hits.append(Hit("FUNC.DEPTH", str(path), node.lineno,
                            f"{node.name}() depth={depth} > {_MAX_FUNC_DEPTH}"))
    return hits


def check_py_file(path: Path) -> list[Hit]:
    hits: list[Hit] = []
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return hits
    lines = text.splitlines()
    hits.extend(_check_name_and_file(path, lines))
    hits.extend(_check_shell_lines(path, lines))
    try:
        tree = ast.parse(text, filename=str(path))
    except SyntaxError as exc:
        hits.append(Hit("SYNTAX", str(path), exc.lineno or 1, str(exc)))
        return hits
    hits.extend(_check_functions(path, lines, tree))
    try:
        py_compile.compile(str(path), doraise=True)
    except py_compile.PyCompileError as exc:
        hits.append(Hit("PY.COMPILE", str(path), 1, f"py_compile 失败: {exc}"))
    return hits


def iter_py_files(roots: list[Path]) -> list[Path]:
    files: list[Path] = []
    for root in roots:
        if root.is_file() and _should_scan_py(root):
            files.append(root)
            continue
        if not root.is_dir():
            continue
        for fp in root.rglob("*.py"):
            if _should_scan_py(fp):
                files.append(fp)
    return sorted(set(files))


# ---------------- WordsTool 词表（迁移自 scan_wordstool_docs.py） ----------------
_PY_SKILL_PARTS = {"ohos-gate-compliance", "xts_shared", "xts-develop-master-cycle"}
_PY_SKIP_RULES = {"WordsTool.297_AA", "WordsTool.249_FIRST", "WordsTool.LEVEL1",
                  "WordsTool.doc1_OTHER"}
_RULE_ID_66 = "WordsTool.66"
_RULE_ID_166 = "WordsTool.166"
_SKIP_LINE_SUBSTR = ("Signed-off-by", "Co-authored-by")
# 文档级规则豁免：xts-git-commit 的 SKILL.md 主题即 IDE 合著剥离（产品名是必要术语）
_WORDS_SKIP_RULE_FILES = {"xts-git-commit/SKILL.md": {"WordsTool.IDE_PRODUCT"}}


def _from_codes(*codes: int) -> str:
    return "".join(chr(c) for c in codes)


def _build_words_rules() -> list[tuple[str, re.Pattern[str], str]]:
    """敏感词规则（chr 拼接构建，源码勿裸写词面量）。"""
    zh = [
        ("WordsTool.SUPERLATIVE", re.compile(_from_codes(0x6700, 0x5FEB)),
         "文档不宜使用口语化极限用词，请改用「优先增量编译验证」"),
        ("WordsTool.241_ABS", re.compile(_from_codes(0x7EDD, 0x5BF9)),
         "勿用强调词；改「禁止再犯 / 完整路径」等中性表述"),
        ("WordsTool.doc1_OTHER", re.compile(_from_codes(0x5176, 0x4ED6)),
         "勿用易歧义代词结构；改「其余 / 别的」"),
        ("WordsTool.249_FIRST", re.compile(_from_codes(0x9996, 0x6B21)),
         "勿用易歧义「第N次」口语禁用字；进页叙事请用「初次进页」"),
        ("WordsTool.296_AUTH", re.compile(_from_codes(0x6743, 0x5A01)),
         "勿用易歧义强调称谓；改「规范脚本 / 正式约定」"),
    ]
    en = [
        ("WordsTool.SPA_FW", re.compile(rf"\b{_from_codes(86, 117, 101)}\b", re.I),
         "文档不宜使用易歧义前端框架产品名，请改用 Element Plus 单页报告"),
        ("WordsTool.WIN_PREVIEW_CHAIN", re.compile(_from_codes(109, 105, 110, 103, 119), re.I),
         "文档不宜使用 Windows 专有工具链缩写，请改用 Windows 预览 SDK"),
        ("WordsTool.IDE_PRODUCT", re.compile(_from_codes(67, 117, 114, 115, 111, 114), re.I),
         "文档不宜使用 IDE 产品名，请改用 Agent / 通用 IDE 表述"),
        ("WordsTool.97_PRODUCT", re.compile(_from_codes(104, 97, 114, 109, 111, 110, 121, 111, 115), re.I),
         "勿写易歧义产品名；字体族用 sans-serif"),
        ("WordsTool.100", re.compile(_from_codes(104, 117, 97, 119, 101, 105), re.I),
         "勿裸写易歧义厂商品牌；CDN/域名改 $rawfile 或 example 路径"),
        ("WordsTool.297_AA", re.compile(rf"(?<![A-Za-z]){_from_codes(97, 97)}(?![A-Za-z])", re.I),
         "勿写裸设备命令缩写，叙事请用「设备 unittest / Ability Manager 测试」"),
        ("WordsTool.5_A11Y", re.compile(rf"(?<![A-Za-z]){_from_codes(65, 99, 99, 101, 115, 115, 105, 98, 105, 108, 105, 116, 121)}(?![A-Za-z])", re.I),
         "勿裸写无访问性全称；改 a11y"),
        ("WordsTool.143_NATIVE_KIT", re.compile(rf"(?<![A-Za-z]){_from_codes(110, 100, 107)}(?![A-Za-z])", re.I),
         "勿裸写本地开发套件缩写；改 NATIVE / 专用提供方"),
        (_RULE_ID_66, re.compile(rf"(?<![A-Za-z0-9]){_from_codes(100, 56)}(?![A-Za-z0-9])", re.I),
         "勿在标识符/用例号中保留易歧义双字符片段"),
        ("WordsTool.204_LIBCXX", re.compile(re.escape(_from_codes(108, 105, 98, 99) + "++"), re.I),
         "勿写 C++ 运行时库短名；改 C++ standard library"),
        ("WordsTool.93", re.compile(rf"\b{_from_codes(103, 109, 115)}\b", re.I),
         "勿裸写易歧义三字母缩写；证书串请拆分字面量"),
        ("WordsTool.6_ACTIVITY", re.compile(rf"\b{_from_codes(65, 99, 116, 105, 118, 105, 116, 121)}\b", re.I),
         "勿用易歧义 Activity 词；路径/变量改 ACTIVE（2026-08-21 收录）"),
        ("WordsTool.9_AMS", re.compile(rf"\b{_from_codes(65, 77, 83)}\b"),
         "勿裸写 AMS 缩写；改 Ability Manager Service（2026-08-21 收录）"),
        ("WordsTool.22_AUDIOSTATE", re.compile(_from_codes(65, 117, 100, 105, 111, 83, 116, 97, 116, 101), re.I),
         "勿裸写 AudioState；用数值常量或改 UI id（2026-08-21 收录）"),
        (_RULE_ID_166, re.compile(rf"(?<![A-Za-z]){_from_codes(114, 110)}(?![A-Za-z])", re.I),
         "勿裸写易歧义双字母缩写；sort 用 -r -n；证书串请拆分字面量"),
        ("WordsTool.LEVEL1", re.compile(rf"\b{_from_codes(76, 49)}\b"),
         "勿写 L + 数字层标记；改「第一层」"),
    ]
    return zh + en


WORDS_RULES = _build_words_rules()


def _should_scan_doc(path: Path) -> bool:
    if path.suffix not in DOC_SUFFIXES:
        return False
    if any(part in SKIP_DIRS for part in path.parts):
        return False
    if path.name in {"skill_checker.py", "gate_check.py"}:
        return False
    if path.suffix == ".py" and not any(p in _PY_SKILL_PARTS for p in path.parts):
        return False
    return True


def _tok_b_hit(line: str) -> bool:
    low = line.lower()
    tmp = low
    for w in ("return", "dirname", "internal"):
        tmp = tmp.replace(w, " ")
    tok = _from_codes(114, 110)
    return re.search(rf"(?<![a-z0-9]){re.escape(tok)}(?![a-z0-9])", tmp) is not None


def check_words_file(path: Path) -> list[Hit]:
    if not _should_scan_doc(path):
        return []
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return []
    hits: list[Hit] = []
    is_py = path.suffix == ".py"
    is_sh = path.suffix == ".sh"
    for i, line in enumerate(text.splitlines(), 1):
        if any(s in line for s in _SKIP_LINE_SUBSTR):
            continue
        skip_rules = _WORDS_SKIP_RULE_FILES.get(str(path).rsplit("skills/", 1)[-1], set())
        for rule_id, pat, msg in WORDS_RULES:
            if is_py and rule_id in _PY_SKIP_RULES:
                continue
            if rule_id in skip_rules:
                continue
            if is_sh and rule_id == _RULE_ID_66:
                continue
            if rule_id == _RULE_ID_166:
                if _tok_b_hit(line):
                    hits.append(Hit(rule_id, str(path), i, msg))
                continue
            if rule_id == "WordsTool.100" and ("Copyright" in line or "Licensed under" in line):
                continue
            if pat.search(line):
                hits.append(Hit(rule_id, str(path), i, msg))
    return hits


def scan_skill_dir(roots: list[Path]) -> list[Hit]:
    """skill 门禁：Python AST + WordsTool + py_compile 全量扫描。"""
    hits: list[Hit] = []
    for fp in iter_py_files(roots):
        hits.extend(check_py_file(fp))
    for root in roots:
        if root.is_file():
            hits.extend(check_words_file(root))
            continue
        for fp in root.rglob("*"):
            if fp.is_file() and _should_scan_doc(fp):
                hits.extend(check_words_file(fp))
    return hits
