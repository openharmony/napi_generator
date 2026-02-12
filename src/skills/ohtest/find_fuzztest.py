#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从工程目录查找含 bundle.json 的部件，有 fuzztest 的解析测试套件与覆盖率选项，无 fuzztest 的也列入表格（对应列填无）。
默认输出 src/partwithfuzztest.md。

Usage:
    python3 find_fuzztest.py [--root <目录>] [--output <文件.md>]
    默认 root=. 即扫描整个 src（含 base、arkcompiler、developtools、device 等），默认输出 src/partwithfuzztest.md。
    若只扫描 base：--root base。
"""

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Optional

SCRIPT_DIR = Path(__file__).resolve().parent
# 从 src/.claude/skills/ohtest 到 src
SRC_ROOT = SCRIPT_DIR.parent.parent.parent


def _get_bundle_component_info(bundle_path: Path) -> Optional[tuple[str, str]]:
    """从 bundle.json 解析 subsystem 与部件名。返回 (subsystem, component_name) 或 None。"""
    if not bundle_path.is_file():
        return None
    try:
        data = json.loads(bundle_path.read_text(encoding="utf-8", errors="ignore"))
    except Exception:
        return None
    comp = data.get("component") or {}
    name = comp.get("name")
    subsystem = comp.get("subsystem")
    if not name or not subsystem:
        return None
    return (str(subsystem), str(name))


def _has_fuzz_in_test_list(bundle_path: Path) -> bool:
    """bundle 的 build.test 中是否包含 fuzztest 或 fuzz_test。"""
    try:
        data = json.loads(bundle_path.read_text(encoding="utf-8", errors="ignore"))
    except Exception:
        return False
    build = data.get("build") or (data.get("component") or {}).get("build")
    if not build:
        return False
    test_list = build.get("test")
    if not isinstance(test_list, list):
        return False
    for item in test_list:
        s = (item or "").lower() if isinstance(item, str) else ""
        if "fuzztest" in s or "fuzz_test" in s:
            return True
    return False


def _has_fuzztest_dir(component_root: Path) -> bool:
    """部件下是否存在 test/fuzztest 目录（含子目录）。"""
    return (component_root / "test" / "fuzztest").is_dir()


def _get_coverage_arg(component_root: Path) -> Optional[str]:
    """在部件下查找 declare_args 中的 *_feature_coverage 或 *_coverage 变量名。"""
    # 先查常见位置
    for p in [
        component_root / "config" / "BUILD.gn",
        component_root / "common" / "build" / "BUILD.gn",
        component_root / "utils" / "BUILD.gn",
        component_root / "BUILD.gn",
    ]:
        if p.is_file():
            m = re.search(r"(\w+(?:feature_)?coverage)\s*=", p.read_text(encoding="utf-8", errors="ignore"))
            if m:
                return m.group(1)
    for build_gn in component_root.rglob("BUILD.gn"):
        text = build_gn.read_text(encoding="utf-8", errors="ignore")
        if "declare_args" not in text:
            continue
        m = re.search(r"(\w+(?:feature_)?coverage)\s*=", text)
        if m:
            return m.group(1)
    return None


def _collect_fuzztest_suites(component_root: Path) -> list[str]:
    """从 test/fuzztest 下（含子目录）所有 BUILD.gn 的 group deps 中解析测试套件名。只保留 *FuzzTest 或 fuzzServerTest。"""
    fuzztest_dir = component_root / "test" / "fuzztest"
    if not fuzztest_dir.is_dir():
        return []
    suites = []
    # 只匹配明确的 fuzz 测试套件：xxx:XXXFuzzTest 或 xxx:fuzzServerTest
    pattern = re.compile(r'["\'](?:[^"\']+):([A-Za-z0-9_]+FuzzTest|fuzzServerTest)["\']')
    for build_gn in fuzztest_dir.rglob("BUILD.gn"):
        text = build_gn.read_text(encoding="utf-8", errors="ignore")
        for m in pattern.finditer(text):
            name = m.group(1)
            if name:
                suites.append(name)
    return sorted(set(suites))


def _rel_path_from_src(component_root: Path) -> str:
    """部件从 src 开始的相对路径。"""
    try:
        return component_root.relative_to(SRC_ROOT).as_posix()
    except ValueError:
        return str(component_root)


def find_all_parts_with_bundle(scan_root: Path) -> list[dict]:
    """
    扫描 scan_root 下所有 bundle.json，有 fuzztest 的收集覆盖率选项与测试套件，没有的也列入（对应列填无）。
    返回列表，每项: {"subsystem", "component", "rel_path", "coverage_arg", "suites", "has_fuzz"}.
    """
    if not scan_root.is_dir():
        return []
    results = []
    for bundle_path in scan_root.rglob("bundle.json"):
        component_root = bundle_path.parent
        info = _get_bundle_component_info(bundle_path)
        if not info:
            continue
        subsystem, component_name = info
        rel_path = _rel_path_from_src(component_root)
        dir_name = rel_path.split("/")[0] if "/" in rel_path else rel_path
        has_test_node = _has_fuzz_in_test_list(bundle_path)
        has_dir = _has_fuzztest_dir(component_root)
        has_fuzz = has_test_node or has_dir
        if has_fuzz:
            coverage_arg = _get_coverage_arg(component_root)
            suites = _collect_fuzztest_suites(component_root)
        else:
            coverage_arg = None
            suites = []
        results.append({
            "dir_name": dir_name,
            "subsystem": subsystem,
            "component": component_name,
            "rel_path": rel_path,
            "coverage_arg": coverage_arg or ("" if has_fuzz else None),
            "suites": suites,
            "has_fuzz": has_fuzz,
        })
    results.sort(key=lambda x: (x["dir_name"], x["subsystem"], x["component"]))
    return results


def _compute_stats(rows: list[dict]) -> tuple[list[str], dict]:
    """
    从 rows 计算统计信息，返回 (总览/按子系统表格行, 按子系统汇总 dict)。
    """
    total_parts = len(rows)
    subsystems = sorted(set(r["subsystem"] for r in rows))
    total_subsystems = len(subsystems)
    parts_with_fuzz = sum(1 for r in rows if r["has_fuzz"])
    total_suites = sum(len(r["suites"]) for r in rows)

    # 按子系统汇总：目录名称集合、部件数、含 fuzz 部件数、测试套件数
    by_subsys: dict[str, dict] = {}
    for r in rows:
        s = r["subsystem"]
        if s not in by_subsys:
            by_subsys[s] = {"dirs": set(), "parts": 0, "parts_with_fuzz": 0, "suites": 0}
        by_subsys[s]["dirs"].add(r["dir_name"])
        by_subsys[s]["parts"] += 1
        if r["has_fuzz"]:
            by_subsys[s]["parts_with_fuzz"] += 1
            by_subsys[s]["suites"] += len(r["suites"])

    # 按目录名称排序子系统（目录名称相同时按子系统名）
    subsystems_sorted = sorted(subsystems, key=lambda s: ("、".join(sorted(by_subsys[s]["dirs"])), s))

    lines = [
        "## 统计信息",
        "",
        "- **子系统总数**：{}".format(total_subsystems),
        "- **部件总数**：{}".format(total_parts),
        "- **含 fuzztest 的部件数**：{}".format(parts_with_fuzz),
        "- **fuzztest 测试套件总数**：{}".format(total_suites),
        "",
        "### 按子系统统计",
        "",
        "| 目录名称 | 子系统 | 部件数 | 含 fuzztest 部件数 | 测试套件数 |",
        "|----------|--------|--------|---------------------|------------|",
    ]
    for s in subsystems_sorted:
        t = by_subsys[s]
        dir_str = "、".join(sorted(t["dirs"]))
        lines.append("| {} | {} | {} | {} | {} |".format(dir_str, s, t["parts"], t["parts_with_fuzz"], t["suites"]))
    lines.append("")
    return lines, by_subsys


def to_markdown_table(rows: list[dict], output_path: Optional[Path] = None) -> str:
    """生成 Markdown 表格（含统计信息、相对路径列）；无 fuzztest 的部件对应列填无。若 output_path 给定则写入文件。"""
    stats_lines, _ = _compute_stats(rows)
    lines = [
        "# 含 bundle.json 的部件一览（含无 fuzztest 的部件）",
        "",
    ] + stats_lines + [
        "### 部件明细表",
        "",
        "| 目录名称 | 子系统 | 部件 | 相对路径（从 src 起） | 覆盖率编译选项 | Fuzztest 测试套件 |",
        "|----------|--------|------|------------------------|----------------|-------------------|",
    ]
    for r in rows:
        dir_name = r["dir_name"]
        subs = r["subsystem"]
        comp = r["component"]
        rel = r["rel_path"]
        if r["has_fuzz"]:
            cov = r["coverage_arg"] or "—"
            suites = "、".join(r["suites"]) if r["suites"] else "—"
        else:
            cov = "无"
            suites = "无"
        lines.append(f"| {dir_name} | {subs} | {comp} | {rel} | {cov} | {suites} |")
    text = "\n".join(lines)
    if output_path:
        output_path.write_text(text, encoding="utf-8")
    return text


def main() -> int:
    parser = argparse.ArgumentParser(description="从工程目录查找含 bundle.json 的部件并输出 Markdown 表格（有/无 fuzztest 共一表）")
    parser.add_argument("--root", default=".", help="相对 src 的扫描根目录，默认 . 表示整个 src（含 base、developtools、device 等）；仅 base 时传 base")
    parser.add_argument("--output", "-o", default=None, help="输出 Markdown 文件路径，默认 src/partwithfuzztest.md")
    args = parser.parse_args()
    scan_root = SRC_ROOT / args.root
    if not scan_root.is_dir():
        print(f"扫描根目录不存在: {scan_root}", file=sys.stderr)
        return 1
    rows = find_all_parts_with_bundle(scan_root)
    out_path = Path(args.output) if args.output else (SRC_ROOT / "partwithfuzztest.md")
    md = to_markdown_table(rows, output_path=out_path)
    with_fuzz = sum(1 for r in rows if r["has_fuzz"])
    print(f"已写入 {out_path}，共 {len(rows)} 个部件（其中 {with_fuzz} 个含 fuzztest）", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
