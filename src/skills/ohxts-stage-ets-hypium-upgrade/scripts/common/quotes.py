#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""引号规范转换库：代码文件中除版权头之外的双引号字符串 → 单引号。

背景：OpenHarmony XTS 测试代码规范要求字符串使用单引号（review 明确），
版权头（文件头 /* */ 块注释）内的双引号（如 "License"、"AS IS"）保留不动。

安全规则（保证不影响代码功能）：
- 版权头（文件开头块注释）内的双引号不处理
- 仅处理普通双引号字符串字面量 `"..."`；配对时识别 `\` 转义
- 字符串内容含裸单引号 `'` → 跳过（避免 `it's` 之类需要转义的情况）
- 字符串内容含转义序列（`\n`、`\"` 等）→ 原样保留（单引号串中语义等价）
- 行注释 // 与块注释 /* */ 内的双引号不处理
- 模板字符串（反引号）、单引号字符串内的双引号不处理
- 不修改行尾（调用方负责 EOL 规范化）
"""
from __future__ import annotations

import re

HEADER_RE = re.compile(r"^\s*/\*.*?\*/\s*", re.S)


def dq_to_sq(text: str) -> str:
    """把 text 中除版权头之外的双引号字符串字面量替换为单引号，返回新文本。"""
    n = len(text)
    m = HEADER_RE.match(text)
    header_end = m.end() if m else 0
    out = [text[:header_end]]
    i = header_end
    while i < n:
        c = text[i]
        if c == "/" and i + 1 < n and text[i + 1] == "/":
            j = text.find("\n", i)
            if j == -1:
                j = n
            out.append(text[i:j])
            i = j
            continue
        if c == "/" and i + 1 < n and text[i + 1] == "*":
            j = text.find("*/", i + 2)
            if j == -1:
                out.append(text[i:])
                break
            out.append(text[i:j + 2])
            i = j + 2
            continue
        if c in "'`":
            # 单引号/模板字符串：原样复制（其中的双引号不动）
            j = i + 1
            while j < n:
                if text[j] == "\\":
                    j += 2
                    continue
                if text[j] == c:
                    break
                j += 1
            end = j + 1 if j < n else n
            out.append(text[i:end])
            i = end
            continue
        if c == '"':
            j = i + 1
            body = []
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
            if j >= n:  # 未闭合：原样保留
                out.append(text[i:])
                break
            content = "".join(body)
            if "'" in content:  # 含裸单引号 → 跳过，避免转义歧义
                out.append(text[i:j + 1])
            else:
                out.append("'" + content + "'")
            i = j + 1
            continue
        out.append(c)
        i += 1
    return "".join(out)


def dq_count(text: str) -> int:
    """统计可转换的双引号字符串数量（与 dq_to_sq 的替换数一致，用于报告）。"""
    return sum(1 for a, b in zip(text, dq_to_sq(text)) if a == '"' and b == "'")


def is_fully_converted(text: str) -> bool:
    """幂等检查：再次转换无变化 = 转化完全。"""
    return dq_to_sq(text) == text
