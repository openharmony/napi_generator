#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""代码门禁检查：ETS/ArkTS/TS/JS 检查与自动修复（规则注册表 rules_ets.json）。

迁移来源（整合为一个 checker）：
- ohxts-stage-ets-hypium-upgrade/scripts/check/code_selfcheck.py（22 条方案库规则）
- ohos-gate-compliance/scripts/arkts_patterns.py（ArkTS Quality 规则）
- ohos-gate-compliance/scripts/gate_review.py（xtscheck @tc / ASYNC.02 / CI.KIT.01 / WordsTool 系列 / 行宽）
- ohxts-stage-ets-hypium-upgrade/scripts/common/code_quality.py（G.FMT.10/08/11 机械修复）
- ohxts-stage-ets-hypium-upgrade/scripts/common/quotes.py（双引号→单引号，提交时转换）
"""
from __future__ import annotations

import re
from pathlib import Path

from base import Hit
from arkts_patterns import fix_arkts_quality, scan_ets_text

# ---------------- 通用常量（迁移自 code_selfcheck） ----------------
EXCLUDE_DIRS = ("oh_modules", "node_modules", "build", ".hvigor", "autosign",
                ".preview", ".idea", ".cxx", ".ohpm")
EXCLUDE_NAMES = ("hvigorfile.ts", "hvigorfile.js")
AWAIT_EXEMPT = ("Utils.sleep", "sleep(")
MAX_LINE = 120
INDENT_STEP = 4


def _collect_dir(d: Path) -> list[Path]:
    out: list[Path] = []
    for f in sorted(d.rglob("*")):
        if not (f.is_file() and f.suffix in (".ets", ".ts", ".js")):
            continue
        if any(seg in f.parts for seg in EXCLUDE_DIRS):
            continue
        if f.name in EXCLUDE_NAMES:
            continue
        out.append(f)
    return out


def collect_files(paths: list[str]) -> list[Path]:
    """收集 .ets/.ts/.js 文件（排除构建产物目录）。"""
    out: list[Path] = []
    for p in paths:
        p = Path(p)
        if p.is_file() and p.suffix in (".ets", ".ts", ".js"):
            out.append(p)
        elif p.is_dir():
            out.extend(_collect_dir(p))
    return out


# ---------------- WordsTool 敏感词（chr 拼接，源码勿裸写；迁移自 gate_review） ----------------
def _from_codes(*codes: int) -> str:
    return "".join(chr(c) for c in codes)


_WT97_TOKEN = _from_codes(104, 97, 114, 109, 111, 110, 121, 111, 115)
_WT97_FONT = (_from_codes(72, 97, 114, 109, 111, 110, 121, 79, 83) + " "
              + _from_codes(83, 97, 110, 115))
_WT97_RE = re.compile(_WT97_TOKEN, re.I)
_WT66_RE = re.compile(_from_codes(100, 56), re.I)
_WT143_RE = re.compile(_from_codes(110, 100, 107), re.I)
_WT100_RE = re.compile(_from_codes(104, 117, 97, 119, 101, 105), re.I)


def _is_resource_string_json(path: Path) -> bool:
    return (path.name == "string.json" and "resources" in path.parts
            and "element" in path.parts)


# ---------------- ETS 规则实现（迁移自 code_selfcheck.scan_file） ----------------
def _update_stack(line: str, stack: list[str]) -> None:
    pos = 0
    while True:
        o = line.find("{", pos)
        c = line.find("}", pos)
        if o == -1 and c == -1:
            break
        if o != -1 and (c == -1 or o < c):
            pre = line[:o].rstrip()
            if re.search(r"(^|[\s;})])try\s*$", pre):
                stack.append("try")
            elif re.search(r"catch\s*\([^)]*\)\s*$", pre):
                stack.append("catch")
            else:
                stack.append("other")
            pos = o + 1
        else:
            if stack:
                stack.pop()
            pos = c + 1


def _check_private_fields(text: str, lines: list[str], add) -> None:
    priv_fields = set(re.findall(r"private\s+([A-Za-z_]\w*)\s*:", text))
    for f in priv_fields:
        for m in re.finditer(rf"(?<!this)\.{f}\b", text):
            line_no = text.count("\n", 0, m.start()) + 1
            ln = lines[line_no - 1]
            if re.match(rf"^\s*(?:private|public)\s+{f}\s*:", ln):
                continue
            add("COMPILE.PRIVATE.01", line_no, f".{f} 类外访问（确认访问范围）")


def _check_await_outside_try(lines: list[str]) -> list[tuple[int, str]]:
    stack: list[str] = []
    hits: list[tuple[int, str]] = []
    for i, ln in enumerate(lines, 1):
        s = ln.strip()
        if s.startswith("await ") and "try" not in stack and "catch" not in stack:
            if not any(e in s for e in AWAIT_EXEMPT):
                hits.append((i, ln.strip()[:60]))
        _update_stack(ln, stack)
    return hits


# ---------------- 迁移自 gate_review：xtscheck @tc ----------------
def _is_hypium_test_ets(path: Path) -> bool:
    """测试用例文件：ohosTest/ets/test/ 下（含 main/ets/test 一体工程）。"""
    s = str(path).replace("\\", "/")
    if path.suffix != ".ets":
        return False
    if "/ohosTest/ets/test/" in s:
        return True
    return s.endswith(".test.ets") and "/ets/test/" in s


def _nearest_jsdoc(before: str) -> str | None:
    tail = before[-3000:] if len(before) > 3000 else before
    doc_match = None
    for doc in re.finditer(r"/\*[\s\S]*?\*/", tail):
        block = doc.group(0)
        if "@tc.number" in block or "@tc.name" in block:
            doc_match = doc
    return doc_match.group(0) if doc_match else None


def _tc_number_value(doc_block: str) -> str | None:
    m = re.search(r"@tc\.number\s*(?::\s*)?(\S+)", doc_block)
    if not m:
        return None
    val = m.group(1)
    return None if val == ":" else val


def _check_one_it_jsdoc(path: Path, text: str, m: re.Match[str], add) -> None:
    it_name = m.group(2)
    before = text[: m.start()]
    line_no = before.count("\n") + 1
    doc_block = _nearest_jsdoc(before)
    if doc_block is None or "@tc.number" not in doc_block or "@tc.name" not in doc_block:
        add("xtscheck", line_no, f"it() 缺少完整 @tc JSDoc: {it_name}")
        return
    num = _tc_number_value(doc_block)
    if num and num != it_name:
        add("xtscheck", line_no, f"@tc.number 与 it() 不一致: {num} != {it_name}")


def _check_async_callback_err(lines: list[str]) -> list[tuple[int, str]]:
    """XTS.CHECK.ASYNC_TESTCASE.02 子规则 2/3（2026-08-21 收录：块体回调 err 未使用实锤）。

    2) 异步 API 回调未声明 error 参数（零参数 () => 回调）
    3) 回调声明 err 但未检查/使用：
       - 表达式体 `(err?: Error) => expr`（原正则）
       - 块体 `(err, data) => { ... }` 内未出现 err 标识符（新增，uiextensioncontext 3 处实锤）
    """
    hits: list[tuple[int, str]] = []
    zero_param_re = re.compile(r"(?:Utils\.registerEvent|Utils\.waitForExist)\([^;\n]*\(\s*\)\s*=>")
    unused_err_re = re.compile(r"\(err\?:\s*Error\)\s*=>\s*[^\s{]")
    for i, ln in enumerate(lines, 1):
        if zero_param_re.search(ln):
            hits.append((i, "异步 API 回调未声明 error 参数：() => 须改 (err: Error)/(err?: Error) 并补错误分支"))
        elif unused_err_re.search(ln):
            hits.append((i, "回调声明 err 但未检查/使用：须 if (err) 错误分支后再返回"))
    # 块体回调 err 未使用：`(err[, ...]) => {` 起，括号配对找块尾，块内无 err 标识符则违规
    text = "\n".join(lines)
    for m in re.finditer(r"\((err)(?:\s*,\s*[A-Za-z_]\w*)*\)\s*=>\s*\{", text):
        line_no = text.count("\n", 0, m.start()) + 1
        block = _block_until_brace(text, m.end() - 1)
        if "err" not in block:
            hits.append((line_no, "回调声明 err 但块体内未检查/使用：须 if (err) 错误分支后再返回"))
    return hits


def _block_until_brace(text: str, start: int) -> str:
    """括号配对：从 start（'{' 位置）取到配对 '}' 的块。"""
    depth = 0
    j = start
    while j < len(text):
        if text[j] == "{":
            depth += 1
        elif text[j] == "}":
            depth -= 1
            if depth == 0:
                break
        j += 1
    return text[start:j + 1]


def _strip_line_for_braces(line: str) -> str:
    out: list[str] = []
    i = 0
    n = len(line)
    while i < n:
        if line[i:i + 2] == "//":
            break
        ch = line[i]
        if ch in ("\"", "'", "`"):
            q = ch
            i += 1
            while i < n:
                if line[i] == "\\":
                    i += 2
                    continue
                if line[i] == q:
                    i += 1
                    break
                i += 1
            continue
        out.append(ch)
        i += 1
    return "".join(out)


def _update_brace_stack(s: str, stack: list[str]) -> None:
    if s.startswith("try") and "{" in s:
        stack.append("try")
    elif s.startswith("}") and ("catch" in s or "else" in s or "finally" in s):
        if stack:
            stack.pop()
        stack.append("other")
    else:
        opens = s.count("{") - s.count("}")
        if opens > 0:
            stack.extend(["other"] * opens)
        elif opens < 0:
            del stack[opens:]


# ---------------- 主扫描入口 ----------------
def _scan_regex_quality(lines: list[str], add) -> None:
    """正则类规则：ESObject/;;/命名/行宽/错误码/空循环体/用例编号/大括号。"""
    for i, ln in enumerate(lines, 1):
        for m in re.finditer(r":\s*ESObject\b|\bESObject;", ln):
            if "Record<string, ESObject>" not in ln:
                add("G.EXT.02", i, ln.strip()[:80])
        if ";;" in ln:
            add("G.FMT.08", i, ";;")
        for m in re.finditer(r"function\s+([A-Z]\w*)", ln):
            add("G.NAM.02", i, f"function {m.group(1)}")
        for m in re.finditer(r"\blet\s+([a-z]+_[a-z_]+)\s*[:=]", ln):
            add("G.NAM.03", i, f"let {m.group(1)}")
        if len(ln) > MAX_LINE:
            add("G.FMT.02", i, f"行宽 {len(ln)}>120")
        if "as BusinessError" in ln:
            add("XTS.CHECK.ERROR_CODE.01", i, "as BusinessError")
        if re.search(r"(for|while)\s*\([^;\n]*;[^;\n]*;[^;\n]*\)\s*;", ln):
            add("G.FMT.11", i, "空循环体")
        if re.search(r"\bit\(\s*'(?!SUB_)", ln):
            add("XTS.CHECK.TCNUMBER.01", i, ln.strip()[:60])
        if re.search(r"\)\s*$", ln) and i < len(lines) and re.match(r"^\s*\{", lines[i]):
            add("G.FMT.10", i, "大括号未与语句同行")


def _scan_import_any(lines: list[str], add) -> None:
    """COMPILE.IMPORT.01 import 错位 / COMPILE.ANY.01 显式 any（多行 import 续行豁免）。"""
    seen_code = False
    in_import = False  # 多行 import { ... } 块内
    for i, ln in enumerate(lines, 1):
        st = ln.strip()
        if st.startswith("import ") or st == "" or st.startswith("//") or st.startswith("/*") or st.startswith("*"):
            if seen_code and st.startswith("import ") and not in_import:
                add("COMPILE.IMPORT.01", i, "import 在代码之后")
            if "{" in st and "}" not in st:
                in_import = True
            continue
        if in_import:
            if "}" in st:
                in_import = False
            continue
        if st.startswith("import"):
            if seen_code:
                add("COMPILE.IMPORT.01", i, "import 在代码之后")
            continue
        seen_code = True
    for i, ln in enumerate(lines, 1):
        if re.search(r":\s*(any|unknown)\b", ln) and not ln.strip().startswith("//"):
            add("COMPILE.ANY.01", i, ln.strip()[:60])


def _scan_heuristic(path: Path, text: str, lines: list[str], add) -> None:
    """启发类：G.EXT.01 属性修饰符 / ASYNC.01 done() / ASYNC.02 await / G.FMT.12 / PRIVATE.01。"""
    for i, ln in enumerate(lines, 1):
        if re.match(r"^\s+(?!public |private |protected )[a-zA-Z_]\w*\s*:\s*"
                    r"(string|number|boolean|LocalStorage|Array|Record|object|any)\s*[=;]", ln):
            add("G.EXT.01", i, ln.strip()[:60])
    if _is_hypium_test_ets(path):
        for m in re.finditer(r"\.(then|catch)\(\([^)]*\)\s*=>\s*\{", text):
            line_no, has_done = _callback_block_has_done(text, m)
            if not has_done:
                add("XTS.CHECK.ASYNC_TESTCASE.01", line_no, f".{m.group(1)} 分支无 done()")
    for line_no, msg in _check_await_outside_try(lines):
        add("XTS.CHECK.ASYNC_TESTCASE.02", line_no, msg)
    _scan_switch_indent(lines, add)
    _check_private_fields(text, lines, add)


def _callback_block_has_done(text: str, m: re.Match[str]) -> tuple[int, bool]:
    """回调块内是否含 done()（简易括号配对）。返回 (起始行号, 是否含 done)。"""
    start = text.find("{", m.start())
    depth = 0
    j = start
    while j < len(text):
        if text[j] == "{":
            depth += 1
        elif text[j] == "}":
            depth -= 1
            if depth == 0:
                break
        j += 1
    block = text[start:j + 1]
    return text.count("\n", 0, m.start()) + 1, "done(" in block


def _scan_switch_indent(lines: list[str], add) -> None:
    """G.FMT.12：switch 的 case 缩进 = switch 缩进 + 2。"""
    for i, ln in enumerate(lines, 1):
        m = re.match(r"^(\s*)switch\s*\(", ln)
        if not m:
            continue
        sw_ind = len(m.group(1))
        for j in range(i + 1, min(i + 20, len(lines) + 1)):
            cm = re.match(r"^(\s*)(case|default)\b", lines[j - 1])
            if cm:
                if len(cm.group(1)) != sw_ind + 2:
                    add("G.FMT.12", j, f"case 缩进 {len(cm.group(1))}（期望 {sw_ind + 2}）")
            elif lines[j - 1].strip() == "}":
                break


def _scan_arkts_xtscheck(path: Path, text: str, lines: list[str], add) -> None:
    """arkts_patterns / xtscheck @tc / ASYNC.02 回调 / CI.KIT.01 Dialog 导入。"""
    for h in scan_ets_text(path, text):
        add(h.rule, h.line, h.message)
    if not _is_hypium_test_ets(path):
        return
    if re.search(r"\.forEach\s*\([^)]*\)\s*=>\s*\{[^}]*\bit\s*\(", text, re.S):
        add("xtscheck", 0, "禁止 forEach 动态生成 it()")
    for m in re.finditer(r"(?m)^(\s*)it\(\s*['\"]([^'\"]+)['\"]", text):
        _check_one_it_jsdoc(path, text, m, add)
    for line_no, msg in _check_async_callback_err(lines):
        add("XTS.CHECK.ASYNC_TESTCASE.02", line_no, msg)
    _DIALOG_KIT_SYMS = frozenset({
        "dialog", "DialogPresenter", "DialogResult", "DialogState",
        "DialogDismissal", "DialogBaseController", "DialogBaseAlignment",
        "DialogButtonOrientation",
    })
    for m in re.finditer(
            r"import\s+(?:([A-Za-z_]\w*)\s*,\s*)?\{([^}]*)\}\s*from\s*['\"]@kit\.ArkUI['\"]",
            text, re.S):
        names: list[str] = []
        if m.group(1):
            names.append(m.group(1))
        names.extend(re.findall(r"[A-Za-z_]\w*", m.group(2)))
        bad = sorted({n for n in names if n in _DIALOG_KIT_SYMS})
        if not bad:
            continue
        line = text[: m.start()].count("\n") + 1
        add("CI.KIT.01", line, "Dialog API " + ",".join(bad)
            + " 勿从 @kit.ArkUI 导入；改用 @ohos.arkui.UIContext/@ohos.arkui.dialog")


def _scan_wordstool(path: Path, lines: list[str], add) -> None:
    """WordsTool 97/66/143/100 敏感词。"""
    for i, ln in enumerate(lines, 1):
        if path.suffix in (".ets", ".ts", ".json", ".json5") or _is_resource_string_json(path):
            if _WT97_RE.search(ln):
                add("WordsTool.97", i, "勿写易歧义产品名；字体族请用行业通用 sans-serif")
        if path.suffix in (".ets", ".ts", ".json", ".json5"):
            if _WT66_RE.search(ln):
                add("WordsTool.66", i, "勿在标识符/用例号中保留易歧义片段；uuid 类编号请改为 SUB_* 语义号")
        if path.suffix in (".ets", ".ts", ".md", ".json", ".json5"):
            if _WT143_RE.search(ln):
                add("WordsTool.143", i, "勿裸写本地开发套件缩写；用例号/文档改 NATIVE 或「专用提供方」表述")
        if path.suffix in (".ets", ".ts"):
            if _WT100_RE.search(ln) and "Copyright" not in ln and "Licensed under" not in ln:
                add("WordsTool.100", i, "开源仓勿写易歧义厂商域名；属性桩页 Web(src) 请用 $rawfile('…')")


def scan_ets_file(path: Path, text: str) -> list[Hit]:
    hits: list[Hit] = []
    lines = text.split("\n")

    def add(rule_id: str, line_no: int, msg: str = "") -> None:
        hits.append(Hit(rule_id, str(path), line_no, msg))

    _scan_regex_quality(lines, add)
    _scan_import_any(lines, add)
    _scan_heuristic(path, text, lines, add)
    _scan_arkts_xtscheck(path, text, lines, add)
    _scan_wordstool(path, lines, add)
    return hits


# ---------------- 自动修复 ----------------
def fix_ets_xtscheck(text: str) -> tuple[str, int]:
    """规范化 @tc 字段为「@tc.xxx : 」冒号格式；去掉 */ 与 it() 之间空行。"""
    n = 0
    text2, c = re.subn(r"(@tc\.(?:name|number|desc|type|size|level))\s*:?\s+", r"\1 : ", text)
    if c:
        n += c
        text = text2
    text2 = re.sub(r"\*/\n\s*\n(\s*it\()", r"*/\n\1", text)
    if text2 != text:
        n += 1
        text = text2
    return text, n


def fix_ets_format(text: str) -> tuple[str, int]:
    """机械格式修复（迁移自 code_quality.fix_code_quality）：G.FMT.10/08/11。"""
    n = 0
    text2, c = re.subn(r"\)\n\s*\{", ") {", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r";;", ";", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r"(for|while)\s*\([^;\n]*;[^;\n]*;[^;\n]*\)\s*;", r"\1(...) { }", text)
    if c:
        n += c
        text = text2
    return text, n


def fix_wordstool_97(text: str) -> tuple[str, int]:
    n = text.count(_WT97_FONT)
    if n:
        text = text.replace(_WT97_FONT, "sans-serif")
    return text, n


def fix_ets_file(path: Path, text: str) -> tuple[str, int]:
    """按文件类型应用全部自动修复，返回 (新文本, 修复数)。"""
    total = 0
    if path.suffix == ".ets":
        text, n = fix_ets_xtscheck(text)
        total += n
        text, n = fix_arkts_quality(text)
        total += n
        text, n = fix_ets_format(text)
        total += n
    if path.suffix in (".ets", ".ts", ".json", ".json5") or _is_resource_string_json(path):
        text, n = fix_wordstool_97(text)
        total += n
    return text, total


# ---------------- 引号规范（提交时转换，迁移自 quotes.py 原始实现） ----------------
def _scan_line_comment(text: str, i: int) -> tuple[str, int]:
    """// 行注释：原样复制到行尾。"""
    j = text.find("\n", i)
    if j == -1:
        j = len(text)
    return text[i:j], j


def _scan_block_comment(text: str, i: int) -> tuple[str, int]:
    """/* */ 块注释：原样复制。"""
    j = text.find("*/", i + 2)
    if j == -1:
        return text[i:], len(text)
    return text[i:j + 2], j + 2


def _scan_quoted(text: str, i: int, q: str) -> tuple[str, int]:
    """单引号/模板串：原样复制（其中的双引号不动）。"""
    j = i + 1
    n = len(text)
    while j < n:
        if text[j] == "\\":
            j += 2
            continue
        if text[j] == q:
            break
        j += 1
    end = j + 1 if j < n else n
    return text[i:end], end


def _scan_double_quote(text: str, i: int) -> tuple[str, int, int]:
    """双引号字面量：内容不含裸单引号则转单引号。返回 (片段, 新 i, 转换数)。"""
    j = i + 1
    n = len(text)
    body: list[str] = []
    while j < n:
        ch = text[j]
        if ch == "\\":
            body.append(ch)
            if j + 1 < n:
                body.append(text[j + 1])
            j += 2
            continue
        if ch == '"':
            break
        body.append(ch)
        j += 1
    if j >= n:
        return text[i:], n, 0
    content = "".join(body)
    if "'" in content:
        return text[i:j + 1], j + 1, 0
    return "'" + content + "'", j + 1, 1


def _dq_to_sq_count(text: str) -> tuple[str, int]:
    """双引号字符串字面量 → 单引号（版权头/注释/模板串除外）。返回 (新文本, 替换数)。"""
    m = re.match(r"^\s*/\*.*?\*/\s*", text, re.S)
    header_end = m.end() if m else 0
    out = [text[:header_end]]
    i = header_end
    cnt = 0
    n = len(text)
    while i < n:
        c = text[i]
        if c == "/" and i + 1 < n and text[i + 1] == "/":
            seg, i = _scan_line_comment(text, i)
            out.append(seg)
            continue
        if c == "/" and i + 1 < n and text[i + 1] == "*":
            seg, i = _scan_block_comment(text, i)
            out.append(seg)
            continue
        if c in "'`":
            seg, i = _scan_quoted(text, i, c)
            out.append(seg)
            continue
        if c == '"':
            seg, i, k = _scan_double_quote(text, i)
            out.append(seg)
            cnt += k
            continue
        out.append(c)
        i += 1
    return "".join(out), cnt


def dq_to_sq(text: str) -> str:
    """把 text 中除版权头/注释之外的双引号字符串字面量替换为单引号，返回新文本。"""
    return _dq_to_sq_count(text)[0]


def dq_count(text: str) -> int:
    """统计可转换的双引号字符串数量（与 dq_to_sq 的替换数一致，用于报告）。"""
    return _dq_to_sq_count(text)[1]


def is_fully_converted(text: str) -> bool:
    """幂等检查：再次转换无变化 = 转化完全。"""
    return _dq_to_sq_count(text)[1] == 0


def fix_code_quality(text: str) -> str:
    """机械格式修复（原 code_quality.py）：大括号同行、多余分号、空循环体大括号。"""
    text = re.sub(r"\)\n(\s*)\{", ") {", text)
    text = text.replace(";;", ";")
    text = re.sub(r"(for\s*\([^;\n]*;[^;\n]*;[^;\n]*\))\s*;", r"\1 { }", text)
    text = re.sub(r"(while\s*\([^;\n]*\))\s*;", r"\1 { }", text)
    return text


