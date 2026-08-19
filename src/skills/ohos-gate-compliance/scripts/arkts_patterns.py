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

"""ArkTS Quality 门禁规则（int/String/key/static fontColor 等）。"""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

RULES: list[tuple[str, re.Pattern[str], str]] = [
    (
        "ARKTS_NO_INT",
        re.compile(r"\bint\b"),
        "使用 int，应改为 number",
    ),
    (
        "ARKTS_NO_STRING_WRAPPER",
        re.compile(r"undefined\s*\|\s*String\b|Record<String\b|: String\b"),
        "使用大写 String，应改为 string",
    ),
    (
        "TESTTYPE_CASE",
        re.compile(r"TestType\.Function\b"),
        "TestType.Function 应改为 TestType.FUNCTION",
    ),
    (
        "BARE_KEY_RISK",
        re.compile(r"\.key\(\s*['\"](?!.*_.+)[^'\"]+['\"]\s*\)"),
        "key 无下划线，可能未按「页面名_组件名」命名",
    ),
    # G.EXT.02: ESObject 仅检测、不自动替换（setUIContent 等须按 API 改 loadContent）
    (
        "G.EXT.02",
        re.compile(r"\bESObject\b"),
        "使用 ESObject 作类型注解，应改为具体类型（G.EXT.02）",
    ),
    (
        "G.EXT.03",
        re.compile(r"\bArray\s*<"),
        "使用 Array<T>，应改为 T[]（G.EXT.03）",
    ),
    (
        "XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01",
        re.compile(r"expect\s*\(\s*true\s*\)\s*\.assertTrue\s*\("),
        "禁止 expect(true).assertTrue 恒真断言（XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01）",
    ),
    (
        "WordsTool.22",
        re.compile(r"\bAudioState\b"),
        "勿裸写 AudioState；用数值常量或改 UI id（WordsTool.22）",
    ),
]


@dataclass
class PatternHit:
    line: int
    rule: str
    message: str


def is_static_file(text: str) -> bool:
    return "'use static'" in text or '"use static"' in text


def fix_arkts_quality(text: str) -> tuple[str, int]:
    """可安全自动替换的 ArkTS Quality 项。"""
    n = 0
    text2, c = re.subn(r"\bTestType\.Function\b", "TestType.FUNCTION", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r"undefined\s*\|\s*String\b", "undefined | string", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r"Record<String\b", "Record<string", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r": String\b", ": string", text)
    if c:
        n += c
        text = text2
    # G.EXT.03: Array<T> → T[]（仅单层标识符泛参，避免嵌套泛型误伤）
    text2, c = re.subn(r"\bArray\s*<\s*([A-Za-z_][\w.]*)\s*>", r"\1[]", text)
    if c:
        n += c
        text = text2
    return text, n


def _is_comment_line(stripped: str) -> bool:
    return stripped.startswith("//") or stripped.startswith("*")


def _match_arkts_rule(
    line: str,
    rule_id: str,
    pat: re.Pattern[str],
    msg: str,
    static: bool = False,
) -> PatternHit | None:
    # 'use static' 工程以 int 为合法数值类型，勿按动态 ArkTS 要求改为 number
    if rule_id == "ARKTS_NO_INT" and static:
        return None
    if rule_id == "ARKTS_NO_INT" and "ResourceColor" in line:
        return None
    if not pat.search(line):
        return None
    if rule_id == "BARE_KEY_RISK":
        m = re.search(r"\.key\(\s*['\"]([^'\"]+)['\"]", line)
        if m and "_" in m.group(1):
            return None
    return PatternHit(0, rule_id, msg)


def _static_fontcolor_hit(line: str, static: bool) -> PatternHit | None:
    if not static:
        return None
    if not re.search(r"@State\s+\w+\s*:\s*number\s*=.*0x[0-9A-Fa-f]", line):
        return None
    return PatternHit(
        0,
        "STATIC_FONTCOLOR_RISK",
        "static 文件中 number 赋十六进制色，fontColor 可能需 ResourceColor",
    )


def _scan_ets_line(line_no: int, line: str, static: bool) -> list[PatternHit]:
    stripped = line.strip()
    if _is_comment_line(stripped):
        return []
    hits: list[PatternHit] = []
    for rule_id, pat, msg in RULES:
        hit = _match_arkts_rule(line, rule_id, pat, msg, static=static)
        if hit is not None:
            hit.line = line_no
            hits.append(hit)
    font_hit = _static_fontcolor_hit(line, static)
    if font_hit is not None:
        font_hit.line = line_no
        hits.append(font_hit)
    return hits


def scan_ets_text(path: Path, text: str) -> list[PatternHit]:
    if path.suffix != ".ets":
        return []
    static = is_static_file(text)
    hits: list[PatternHit] = []
    for i, line in enumerate(text.splitlines(), 1):
        hits.extend(_scan_ets_line(i, line, static))
    return hits
