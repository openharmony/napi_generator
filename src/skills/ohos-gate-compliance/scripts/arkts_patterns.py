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
    return text, n


def scan_ets_text(path: Path, text: str) -> list[PatternHit]:
    if path.suffix != ".ets":
        return []
    static = is_static_file(text)
    hits: list[PatternHit] = []
    for i, line in enumerate(text.splitlines(), 1):
        stripped = line.strip()
        if stripped.startswith("//") or stripped.startswith("*"):
            continue
        for rule_id, pat, msg in RULES:
            if rule_id == "ARKTS_NO_INT" and "ResourceColor" in line:
                continue
            if not pat.search(line):
                continue
            if rule_id == "BARE_KEY_RISK":
                m = re.search(r"\.key\(\s*['\"]([^'\"]+)['\"]", line)
                if m and "_" in m.group(1):
                    continue
            hits.append(PatternHit(i, rule_id, msg))
        if static and re.search(r"@State\s+\w+\s*:\s*number\s*=.*0x[0-9A-Fa-f]", line):
            hits.append(
                PatternHit(
                    i,
                    "STATIC_FONTCOLOR_RISK",
                    "static 文件中 number 赋十六进制色，fontColor 可能需 ResourceColor",
                )
            )
    return hits
