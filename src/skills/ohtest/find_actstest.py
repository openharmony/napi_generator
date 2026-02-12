#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
查找 test/xts/acts 下所有 ACTS 测试套件：扫描 BUILD.gn 中的 ohos_*_suite 定义，
解析 hap_name、subsystem_name、part_name 及编译对象类型，输出到 src/all_acts.md。

规则：从 test/xts/acts/bundle.json 的 test 节点得到编译入口（如 //test/xts/acts/build:acts_group），
build/BUILD.gn 中 acts_group 依赖 xts_acts，实际套件分布在各子目录 BUILD.gn 中，
通过 group 的 deps（如 "模块名:套件名"）逐层汇聚；叶子节点为 ohos_app_assist_suite、ohos_js_app_suite、
ohos_moduletest_suite 等，套件名即 target 名，目录为相对 test/xts/acts 的路径。

Usage:
    python3 find_actstest.py [--output <文件.md>]
    默认输出 src/all_acts.md。
"""

import argparse
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
SRC_ROOT = SCRIPT_DIR.parent.parent.parent
ACTS_ROOT = SRC_ROOT / "test" / "xts" / "acts"


def _parse_suite_block(text: str, start: int) -> tuple[int, dict]:
    """
    从 start 位置起解析一个 suite("name") { ... } 块，返回 (块结束位置, 属性 dict)。
    属性包含: suite_type, suite_name, hap_name, subsystem_name, part_name。
    """
    # 匹配 suite_type("suite_name") {
    m = re.search(
        r'(ohos_\w+_suite)\s*\(\s*["\']([^"\']+)["\']\s*\)\s*\{',
        text[start:],
        re.DOTALL
    )
    if not m:
        return start, {}
    suite_type = m.group(1)
    suite_name = m.group(2)
    block_start = start + m.end()
    depth = 1
    i = block_start
    while i < len(text) and depth > 0:
        if text[i] == '{':
            depth += 1
        elif text[i] == '}':
            depth -= 1
        i += 1
    block = text[block_start:i - 1]

    def _attr(attr_name: str) -> str:
        # 匹配 attr_name = "value" 或 attr_name = "value"
        pat = re.compile(
            r'\b' + re.escape(attr_name) + r'\s*=\s*["\']([^"\']*)["\']',
            re.IGNORECASE
        )
        mm = pat.search(block)
        return mm.group(1).strip() if mm else ""

    return i, {
        "suite_type": suite_type,
        "suite_name": suite_name,
        "hap_name": _attr("hap_name"),
        "subsystem_name": _attr("subsystem_name"),
        "part_name": _attr("part_name"),
    }


def _read_sdk_versions_from_build_profile(build_profile: Path) -> tuple[str, str]:
    """从 build-profile.json5 中解析 compileSdkVersion、targetSdkVersion，返回 (compile, target)。"""
    if not build_profile.is_file():
        return "", ""
    try:
        text = build_profile.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return "", ""
    compile_m = re.search(r'"compileSdkVersion"\s*:\s*(\d+)', text)
    target_m = re.search(r'"targetSdkVersion"\s*:\s*(\d+)', text)
    compile_ver = compile_m.group(1) if compile_m else ""
    target_ver = target_m.group(1) if target_m else ""
    return compile_ver, target_ver


def _collect_suites_from_build_gn(build_gn: Path, rel_dir: str) -> list[dict]:
    """从单个 BUILD.gn 中解析所有 ohos_*_suite 定义，返回套件列表（含 rel_dir）。"""
    try:
        text = build_gn.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return []
    results = []
    pos = 0
    while True:
        idx = text.find("ohos_", pos)
        if idx == -1:
            break
        if "_suite" not in text[idx:idx + 60]:
            pos = idx + 1
            continue
        end_pos, attrs = _parse_suite_block(text, idx)
        if attrs:
            attrs["rel_dir"] = rel_dir
            results.append(attrs)
        pos = end_pos
    return results


def find_all_acts_suites() -> list[dict]:
    """扫描 test/xts/acts 下所有 BUILD.gn，收集 ACTS 测试套件（排除 build/、根 BUILD.gn 等）。"""
    if not ACTS_ROOT.is_dir():
        return []
    results = []
    for build_gn in ACTS_ROOT.rglob("BUILD.gn"):
        # 跳过 acts/build、acts 根下 BUILD.gn（仅 group/merge）
        rel = build_gn.relative_to(ACTS_ROOT)
        if rel.parts[0] == "build" or len(rel.parts) == 1:
            continue
        rel_dir = str(rel.parent).replace("\\", "/")
        build_gn_dir = build_gn.parent
        for suite in _collect_suites_from_build_gn(build_gn, rel_dir):
            suite["_build_gn_dir"] = build_gn_dir
            results.append(suite)
    # 有 hap_name 时从同目录 build-profile.json5 读取 compileSdkVersion、targetSdkVersion
    for r in results:
        compile_ver, target_ver = "", ""
        if r.get("hap_name"):
            profile = r["_build_gn_dir"] / "build-profile.json5"
            compile_ver, target_ver = _read_sdk_versions_from_build_profile(profile)
        r["compile_sdk_version"] = compile_ver
        r["target_sdk_version"] = target_ver
        r.pop("_build_gn_dir", None)
    # 按目录、子系统、部件、套件名排序
    results.sort(key=lambda x: (
        x.get("rel_dir", ""),
        x.get("subsystem_name", ""),
        x.get("part_name", ""),
        x.get("suite_name", ""),
    ))
    return results


def _compute_stats(rows: list[dict]) -> tuple[list[str], set, set]:
    """统计子系统、部件、目录数、各类型套件数，返回 (统计行, 子系统集合, 部件集合)。"""
    subsystems = set()
    parts = set()
    dirs = set()
    type_count: dict[str, int] = {}
    for r in rows:
        if r.get("subsystem_name"):
            subsystems.add(r["subsystem_name"])
        if r.get("part_name"):
            parts.add(r["part_name"])
        dirs.add(r.get("rel_dir", ""))
        t = r.get("suite_type", "")
        type_count[t] = type_count.get(t, 0) + 1
    lines = [
        "# ACTS 测试套件一览",
        "",
        "## 统计信息",
        "",
        "- **子系统数**：{}".format(len(subsystems)),
        "- **部件数**：{}".format(len(parts)),
        "- **ACTS 测试套件数**：{}".format(len(rows)),
        "- **目录数**：{}".format(len(dirs)),
        "",
        "### 各类型测试套件数量",
        "",
    ]
    for suite_type in sorted(type_count.keys()):
        lines.append("- **{}**：{}".format(suite_type, type_count[suite_type]))
    lines.extend([
        "",
        "## 编译入口（bundle.json test）",
        "",
        "`//test/xts/acts/build:acts_group`",
        "",
        "## ACTS 测试套件明细",
        "",
        "| 目录 | 子系统 | 部件 | 测试套件名 | hap_name | compileSdkVersion | targetSdkVersion | 编译对象 |",
        "|------|--------|------|------------|----------|-------------------|------------------|----------|",
    ])
    return lines, subsystems, parts


def to_markdown(rows: list[dict], output_path: Path) -> str:
    """生成 Markdown 并写入 output_path。"""
    stats_lines, _, _ = _compute_stats(rows)
    lines = stats_lines
    for r in rows:
        rel_dir = r.get("rel_dir", "")
        subs = r.get("subsystem_name", "") or "—"
        part = r.get("part_name", "") or "—"
        suite_name = r.get("suite_name", "")
        hap = r.get("hap_name", "") or "—"
        compile_ver = r.get("compile_sdk_version", "") or "—"
        target_ver = r.get("target_sdk_version", "") or "—"
        suite_type = r.get("suite_type", "")
        lines.append("| {} | {} | {} | {} | {} | {} | {} | {} |".format(
            rel_dir, subs, part, suite_name, hap, compile_ver, target_ver, suite_type
        ))
    text = "\n".join(lines)
    output_path.write_text(text, encoding="utf-8")
    return text


def main() -> int:
    parser = argparse.ArgumentParser(description="查找 test/xts/acts 下所有 ACTS 测试套件，输出到 all_acts.md")
    parser.add_argument("--output", "-o", default=None, help="输出 Markdown 文件路径，默认 src/all_acts.md")
    args = parser.parse_args()
    out_path = Path(args.output) if args.output else (SRC_ROOT / "all_acts.md")
    rows = find_all_acts_suites()
    to_markdown(rows, out_path)
    subsystems = set(r.get("subsystem_name") for r in rows if r.get("subsystem_name"))
    parts = set(r.get("part_name") for r in rows if r.get("part_name"))
    print("已写入 {}，共 {} 个 ACTS 测试套件（{} 个子系统，{} 个部件）".format(
        out_path, len(rows), len(subsystems), len(parts)
    ), file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
