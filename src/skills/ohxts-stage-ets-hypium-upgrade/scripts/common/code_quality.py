#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""代码质量机械修复（门禁 G.FMT/G.NAM 类，转化时自动规避）。

检视/门禁教训固化（上策：开发侧规避）：
- G.FMT.10 大括号{和语句在同一行：')' 换行 '{' → 同行
- G.FMT.08 分号后空格/多余分号：';;' → ';'
- G.FMT.11 for/while 空循环体用 ';' → '{ }'
以上均为纯格式修复，不影响语义；复杂类问题（ESObject 类型化、行宽换行、
异步回调 done()、用例编号）由提交门禁自检（中策）提示人工处理。
"""
from __future__ import annotations

import re


def fix_code_quality(text: str) -> str:
    """机械格式修复：大括号同行、多余分号、空循环体大括号。"""
    # ① 大括号与语句同行：')\n{' → ') {'（多行条件时 { 并入末行，语法安全）
    text = re.sub(r"\)\n(\s*)\{", ") {", text)
    # ② 多余分号
    text = text.replace(";;", ";")
    # ③ for/while 空循环体 ';' → '{ }'
    text = re.sub(r"(for\s*\([^;\n]*;[^;\n]*;[^;\n]*\))\s*;", r"\1 { }", text)
    text = re.sub(r"(while\s*\([^;\n]*\))\s*;", r"\1 { }", text)
    return text
