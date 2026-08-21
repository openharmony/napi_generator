#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""统一门禁基础：命中模型 + 规则注册表加载 + 报告输出。"""
from __future__ import annotations

import json
import sys
from dataclasses import dataclass, field
from pathlib import Path

RULES_ROOT = Path(__file__).resolve().parents[2] / "rules"


@dataclass
class Hit:
    rule: str
    file: str
    line: int
    msg: str
    fixed: bool = False


def load_rules(domain: str) -> list[dict]:
    """加载 rules/rules_<domain>.json 规则注册表。"""
    fp = RULES_ROOT / f"rules_{domain}.json"
    return json.loads(fp.read_text(encoding="utf-8"))["rules"]


def rule_map(domain: str) -> dict[str, dict]:
    return {r["id"]: r for r in load_rules(domain)}


def format_hits(hits: list[Hit], domain: str, limit: int = 20) -> str:
    """按规则分组的人类可读报告。"""
    if not hits:
        return "共 0 处违规"
    rmap = rule_map(domain)
    by_rule: dict[str, list[Hit]] = {}
    for h in hits:
        by_rule.setdefault(h.rule, []).append(h)
    out: list[str] = []
    for rid in sorted(by_rule):
        r = rmap.get(rid, {})
        hs = by_rule[rid]
        out.append(f"\n[{rid}] {r.get('name', '')} ({r.get('category', '')}/{r.get('severity', '')})"
                   f" — {len(hs)} 处")
        for h in hs[:limit]:
            out.append(f"  {h.file}:{h.line}  {h.msg}")
        if len(hs) > limit:
            out.append(f"  ... 共 {len(hs)} 处")
        out.append(f"  修复: {r.get('fix', '')}")
    out.append(f"\n共 {len(hits)} 处违规，涉及 {len(by_rule)} 条规则")
    return "\n".join(out)


def exit_code(hits: list[Hit], strict: bool) -> int:
    """0 通过；1 有违规且 strict（阻断）；无 strict 仅提示。"""
    return 1 if (hits and strict) else 0
