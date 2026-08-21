#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""代码门禁检查：工程配置文件（build-profile.json5 compileSdkVersion 等）。迁移自 gate_review.py。"""
from __future__ import annotations

import re
from pathlib import Path

from base import Hit

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


def scan_config_file(path: Path, text: str) -> list[Hit]:
    """CI.SDK.01：compileSdkVersion/targetSdkVersion 须为 "M.S.F" 字符串。"""
    hits: list[Hit] = []
    if path.name != "build-profile.json5":
        return hits
    for i, line in enumerate(text.splitlines(), 1):
        for key in _SDK_VER_KEYS:
            if key not in line:
                continue
            if re.search(rf'"{key}"\s*:\s*\d+\b', line):
                hits.append(Hit("CI.SDK.01", str(path), i,
                                f'{key} 须为 "M.S.F" 字符串（如 "26.0.0"），禁止提交数字'))
            elif re.search(rf'"{key}"\s*:\s*"\d+"\s*,?', line):
                hits.append(Hit("CI.SDK.01", str(path), i,
                                f'{key} 须为完整 "M.S.F"（如 "26.0.0"），勿写 "26"'))
    return hits


def fix_config_file(path: Path, text: str) -> tuple[str, int]:
    if path.name != "build-profile.json5":
        return text, 0
    return fix_build_profile_compile_sdk(text)
