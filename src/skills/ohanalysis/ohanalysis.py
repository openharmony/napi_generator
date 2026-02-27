#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OH Analysis Skill - OpenHarmony 工程分析
根据项目目录查找 bundle.json，整理子系统、系统能力、组件、deps、inner_kits、test。

Usage:
    python3 ohanalysis.py bundle [路径] [--src-dir PATH]
    路径: 相对 src 的目录，如 foundation/ability/ability_base；不传则扫描整个 src 下所有 bundle.json（可加 --prefix 过滤）
    python3 ohanalysis.py bundle --src-dir ~/ohos/61release/src foundation/ability/ability_base
"""

import json
import sys
from datetime import datetime
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
# 默认源码根：skills 所在为 src/.claude/skills/ohanalysis
SRC_ROOT_DEFAULT = SCRIPT_DIR.parent.parent.parent

# 全量扫描时排除的顶层目录（以及以.开头的隐藏目录，out 为构建输出目录默认不分析）
EXCLUDE_TOP = ("kernel", "third_party", "applications", "out")

SKILL_NAME = "ohanalysis"
VERSION = "1.0.0"


def get_src_root(src_dir: Path | None) -> Path:
    if src_dir is not None:
        return Path(src_dir).expanduser().resolve()
    if (SCRIPT_DIR.parent.parent / "foundation").is_dir():
        return SCRIPT_DIR.parent.parent
    return Path.cwd()


def find_bundle_jsons(src_root: Path, path_prefix: str | None) -> list[Path]:
    """在 src_root 下查找 bundle.json。若 path_prefix 给定，只返回该前缀下的路径。"""
    if path_prefix:
        prefix_dir = src_root / path_prefix.rstrip("/")
        if prefix_dir.is_dir():
            bundle = prefix_dir / "bundle.json"
            if bundle.is_file():
                return [bundle]
        # 否则在该前缀下递归
        start = prefix_dir if prefix_dir.is_dir() else src_root
        return sorted(start.rglob("bundle.json"))
    return sorted(src_root.rglob("bundle.json"))


def find_bundle_jsons_filtered(src_root: Path) -> list[Path]:
    """扫描 src 下所有 bundle.json，排除以.开头的目录及 kernel、third_party、applications、out。"""
    out = []
    for entry in src_root.iterdir():
        if not entry.is_dir():
            continue
        name = entry.name
        if name.startswith(".") or name in EXCLUDE_TOP:
            continue
        for f in entry.rglob("bundle.json"):
            out.append(f)
    return sorted(out)


def parse_bundle(bundle_path: Path, src_root: Path) -> dict | None:
    """解析单个 bundle.json，提取 subsystem、syscap、component/name、deps、inner_kits、test。"""
    try:
        data = json.loads(bundle_path.read_text(encoding="utf-8", errors="ignore"))
    except Exception:
        return None
    comp = data.get("component") or {}
    build = comp.get("build") or data.get("build") or data.get("component.build") or {}
    deps = comp.get("deps") or {}
    deps_components = deps.get("components") if isinstance(deps, dict) else []
    deps_third_party = deps.get("third_party") if isinstance(deps, dict) else []
    if deps_components is None:
        deps_components = []
    if deps_third_party is None:
        deps_third_party = []
    inner_kits = build.get("inner_kits") or []
    if isinstance(inner_kits, str):
        inner_kits = [inner_kits]
    test = build.get("test") or []
    if isinstance(test, str):
        test = [test]
    sub_component = build.get("sub_component") or []
    if isinstance(sub_component, str):
        sub_component = [sub_component]
    rel_path = bundle_path.relative_to(src_root).as_posix() if bundle_path.is_relative_to(src_root) else bundle_path.name
    return {
        "path": rel_path,
        "name": data.get("name"),
        "subsystem": comp.get("subsystem"),
        "syscap": comp.get("syscap") or [],
        "component_name": comp.get("name"),
        "deps_components": deps_components,
        "deps_third_party": deps_third_party,
        "inner_kits": inner_kits,
        "test": test,
        "sub_component": sub_component,
    }


def format_inner_kit(ik: dict) -> str:
    if isinstance(ik, str):
        return ik
    name = ik.get("name", "")
    header = ik.get("header") or {}
    base = header.get("header_base", "")
    files = header.get("header_files") or []
    if base or files:
        return f"{name}  (header: {base}; files: {', '.join(files[:3])}{'...' if len(files) > 3 else ''})"
    return name


def inner_kit_name_and_path(ik, comp_path: str) -> tuple[str, str]:
    """返回 (名字, 路径)，路径优先用 header_base。"""
    if isinstance(ik, str):
        return ik, comp_path
    name = ik.get("name", "") or str(ik)
    header = ik.get("header") or {}
    base = header.get("header_base", "") or comp_path
    return name, base


def print_bundle_info(info: dict, verbose: bool = True) -> None:
    """打印单条 bundle 整理结果。"""
    print("  path:          ", info["path"])
    print("  name:          ", info["name"])
    print("  子系统:        ", info["subsystem"])
    print("  系统能力:      ", info["syscap"] if info["syscap"] else "(无)")
    print("  组件(component/name):", info["component_name"])
    print("  deps.components:", info["deps_components"] if info["deps_components"] else "(无)")
    print("  deps.third_party:", info["deps_third_party"] if info["deps_third_party"] else "(无)")
    if verbose:
        inner = info["inner_kits"]
        if inner:
            print("  inner_kits:    ")
            for ik in inner:
                print("    -", format_inner_kit(ik))
        else:
            print("  inner_kits:    (无)")
        test = info["test"]
        if test:
            print("  test:          ")
            for t in test:
                print("    -", t)
        else:
            print("  test:          (无)")
    print()


def _dir_from_bundle_path(bundle_path_rel: str) -> str:
    """bundle.json 所在目录相对 src 的路径。"""
    if bundle_path_rel.endswith("/bundle.json"):
        return bundle_path_rel[:- len("/bundle.json")]
    if bundle_path_rel == "bundle.json":
        return "."
    i = bundle_path_rel.rfind("/")
    return bundle_path_rel[:i] if i >= 0 else "."


def run_scan(src_root: Path) -> tuple[list[dict], dict[str, list[dict]], dict]:
    """扫描 src 下 bundle.json，返回 (components, subsystems, counts)。"""
    bundles = find_bundle_jsons_filtered(src_root)
    components: list[dict] = []
    subsystems: dict[str, list[dict]] = {}
    innerkits_total = 0

    for b in bundles:
        info = parse_bundle(b, src_root)
        if not info:
            continue
        comp_name = info.get("component_name") or info.get("name") or "(未命名)"
        subsys = info.get("subsystem") or "(未归类)"
        rel_dir = _dir_from_bundle_path(info["path"])
        inner_kits = info.get("inner_kits") or []
        innerkits_total += len(inner_kits)

        comp_row = {
            "name": comp_name,
            "subsystem": subsys,
            "path": rel_dir,
            "syscap": info.get("syscap") or [],
            "inner_kits": inner_kits,
            "deps": (info.get("deps_components") or []) + (info.get("deps_third_party") or []),
            "sub_component": info.get("sub_component") or [],
            "test": info.get("test") or [],
        }
        components.append(comp_row)
        if subsys not in subsystems:
            subsystems[subsys] = []
        subsystems[subsys].append({"name": comp_name, "path": rel_dir})

    subsystem_count = len(subsystems)
    component_count = len(components)
    syscap_total = sum(len(c.get("syscap") or []) for c in components)
    deps_total = sum(len(c.get("deps") or []) for c in components)
    test_total = sum(len(c.get("test") or []) for c in components)
    counts = {
        "subsystem_count": subsystem_count,
        "component_count": component_count,
        "innerkits_total": innerkits_total,
        "syscap_total": syscap_total,
        "deps_total": deps_total,
        "test_total": test_total,
    }
    return components, subsystems, counts


def write_scan_report(
    components: list[dict],
    subsystems: dict[str, list[dict]],
    counts: dict,
    src_root: Path,
    out_path: Path,
) -> None:
    """将扫描结果写入 MD 报告文件。"""
    subsystem_count = counts["subsystem_count"]
    component_count = counts["component_count"]
    innerkits_total = counts["innerkits_total"]
    syscap_total = counts["syscap_total"]
    deps_total = counts["deps_total"]
    test_total = counts["test_total"]
    analysis_path_str = str(src_root.as_posix())

    lines = [
        "# OpenHarmony 工程分析报告",
        "",
        f"**分析路径**: `{analysis_path_str}`",
        "",
        f"生成时间: {datetime.now().isoformat(timespec='seconds')}",
        "",
        "## 统计",
        "",
        "| 项目 | 数量 |",
        "|------|------|",
        f"| 子系统数量 | {subsystem_count} |",
        f"| 组件数量 | {component_count} |",
        f"| InnerKits 数量 | {innerkits_total} |",
        f"| syscap 数量 | {syscap_total} |",
        f"| deps 数量 | {deps_total} |",
        f"| test 数量 | {test_total} |",
        "",
        "---",
        "",
        "## 子系统排名（按组件数量 Top 50）",
        "",
        "| 排名 | 子系统 | 组件数量 |",
        "|------|--------|----------|",
    ]
    subsys_by_count = sorted(
        [(name, len(items)) for name, items in subsystems.items()],
        key=lambda x: -x[1],
    )[:50]
    for rank, (subsys_name, cnt) in enumerate(subsys_by_count, 1):
        sn = subsys_name.replace("|", "\\|")
        lines.append(f"| {rank} | {sn} | {cnt} |")
    lines.extend([
        "",
        f"## 子系统列表（数量：{subsystem_count}）",
        "",
        "| 子系统 | 组件 | 组件数量 | 相对路径（从 src 开始） |",
        "|--------|------|----------|-------------------------|",
    ])
    for subsys_name in sorted(subsystems.keys()):
        items = subsystems[subsys_name]
        comp_names = ", ".join(x["name"] for x in items)
        paths = "; ".join(x["path"] for x in items)
        comp_cell = comp_names.replace("|", "\\|") if "|" in comp_names else comp_names
        path_cell = paths.replace("|", "\\|") if "|" in paths else paths
        lines.append(f"| {subsys_name} | {comp_cell} | {len(items)} | {path_cell} |")
    lines.append("")
    # 组件排名（按各数量 Top 50）
    lines.extend([
        "",
        "## 组件排名（按 syscap 数量 Top 50）",
        "",
        "| 排名 | 组件名 | 所属子系统 | syscap数量 |",
        "|------|--------|------------|------------|",
    ])
    by_syscap = sorted(components, key=lambda x: -len(x["syscap"]))[:50]
    for rank, c in enumerate(by_syscap, 1):
        n, s = str(c["name"]).replace("|", "\\|"), str(c["subsystem"]).replace("|", "\\|")
        lines.append(f"| {rank} | {n} | {s} | {len(c['syscap'])} |")
    lines.extend([
        "",
        "## 组件排名（按 inner_kits 数量 Top 50）",
        "",
        "| 排名 | 组件名 | 所属子系统 | innerkits数量 |",
        "|------|--------|------------|---------------|",
    ])
    by_ik = sorted(components, key=lambda x: -len(x["inner_kits"]))[:50]
    for rank, c in enumerate(by_ik, 1):
        n, s = str(c["name"]).replace("|", "\\|"), str(c["subsystem"]).replace("|", "\\|")
        lines.append(f"| {rank} | {n} | {s} | {len(c['inner_kits'])} |")
    lines.extend([
        "",
        "## 组件排名（按 deps 数量 Top 50）",
        "",
        "| 排名 | 组件名 | 所属子系统 | deps数量 |",
        "|------|--------|------------|----------|",
    ])
    by_deps = sorted(components, key=lambda x: -len(x["deps"]))[:50]
    for rank, c in enumerate(by_deps, 1):
        n, s = str(c["name"]).replace("|", "\\|"), str(c["subsystem"]).replace("|", "\\|")
        lines.append(f"| {rank} | {n} | {s} | {len(c['deps'])} |")
    lines.extend([
        "",
        "## 组件排名（按 sub_component 数量 Top 50）",
        "",
        "| 排名 | 组件名 | 所属子系统 | sub_component数量 |",
        "|------|--------|------------|------------------|",
    ])
    by_subc = sorted(components, key=lambda x: -len(x["sub_component"]))[:50]
    for rank, c in enumerate(by_subc, 1):
        n, s = str(c["name"]).replace("|", "\\|"), str(c["subsystem"]).replace("|", "\\|")
        lines.append(f"| {rank} | {n} | {s} | {len(c['sub_component'])} |")
    lines.extend([
        "",
        "## 组件排名（按 test 数量 Top 50）",
        "",
        "| 排名 | 组件名 | 所属子系统 | test数量 |",
        "|------|--------|------------|----------|",
    ])
    by_test = sorted(components, key=lambda x: -len(x["test"]))[:50]
    for rank, c in enumerate(by_test, 1):
        n, s = str(c["name"]).replace("|", "\\|"), str(c["subsystem"]).replace("|", "\\|")
        lines.append(f"| {rank} | {n} | {s} | {len(c['test'])} |")
    lines.extend([
        "",
        "---",
        "",
        f"## 组件列表（数量：{component_count}）",
        "",
        "| 组件名 | 所属子系统 | 相对路径 | syscap数量 | innerkits数量 | deps数量 | sub_component数量 | test数量 | syscap | inner_kits | deps | sub_component | test |",
        "|--------|------------|----------|------------|---------------|----------|------------------|----------|--------|------------|------|---------------|------|",
    ])
    for c in sorted(components, key=lambda x: (x["subsystem"], x["name"])):
        name = str(c["name"]).replace("|", "\\|")
        subsys = str(c["subsystem"]).replace("|", "\\|")
        path = str(c["path"]).replace("|", "\\|")
        n_syscap = len(c["syscap"])
        n_ik = len(c["inner_kits"])
        n_deps = len(c["deps"])
        n_subc = len(c["sub_component"])
        n_test = len(c["test"])
        syscap = ", ".join(c["syscap"]) if c["syscap"] else "-"
        inner = ", ".join(format_inner_kit(ik) for ik in c["inner_kits"][:5])
        if len(c["inner_kits"]) > 5:
            inner += f" …(+{len(c['inner_kits'])-5})"
        if not inner:
            inner = "-"
        inner = inner.replace("|", "\\|")
        deps = ", ".join(c["deps"][:5]) if c["deps"] else "-"
        if len(c["deps"]) > 5:
            deps += f" …(+{len(c['deps'])-5})"
        deps = deps.replace("|", "\\|")
        subc = ", ".join(c["sub_component"][:3]) if c["sub_component"] else "-"
        if len(c["sub_component"]) > 3:
            subc += " …"
        subc = subc.replace("|", "\\|")
        test = ", ".join(c["test"][:3]) if c["test"] else "-"
        if len(c["test"]) > 3:
            test += " …"
        test = test.replace("|", "\\|")
        lines.append(f"| {name} | {subsys} | {path} | {n_syscap} | {n_ik} | {n_deps} | {n_subc} | {n_test} | {syscap} | {inner} | {deps} | {subc} | {test} |")

    # syscap 列表：名字，所属子系统，所属组件
    lines.extend([
        "",
        "---",
        "",
        f"## syscap 列表（数量：{syscap_total}）",
        "",
        "| 名字 | 所属子系统 | 所属组件 |",
        "|------|------------|----------|",
    ])
    for c in sorted(components, key=lambda x: (x["subsystem"], x["name"])):
        subsys = str(c["subsystem"]).replace("|", "\\|")
        comp = str(c["name"]).replace("|", "\\|")
        for s in c["syscap"] or []:
            name_cell = str(s).replace("|", "\\|")
            lines.append(f"| {name_cell} | {subsys} | {comp} |")

    # inner_kits 列表：名字，所属子系统，所属组件，路径
    lines.extend([
        "",
        f"## inner_kits 列表（数量：{innerkits_total}）",
        "",
        "| 名字 | 所属子系统 | 所属组件 | 路径 |",
        "|------|------------|----------|------|",
    ])
    for c in sorted(components, key=lambda x: (x["subsystem"], x["name"])):
        subsys = str(c["subsystem"]).replace("|", "\\|")
        comp = str(c["name"]).replace("|", "\\|")
        comp_path = str(c["path"]).replace("|", "\\|")
        for ik in c["inner_kits"] or []:
            ik_name, ik_path = inner_kit_name_and_path(ik, c["path"])
            ik_name = str(ik_name).replace("|", "\\|")
            ik_path = str(ik_path).replace("|", "\\|")
            lines.append(f"| {ik_name} | {subsys} | {comp} | {ik_path} |")

    # deps 列表：名字，所属子系统，所属组件，路径
    lines.extend([
        "",
        f"## deps 列表（数量：{deps_total}）",
        "",
        "| 名字 | 所属子系统 | 所属组件 | 路径 |",
        "|------|------------|----------|------|",
    ])
    for c in sorted(components, key=lambda x: (x["subsystem"], x["name"])):
        subsys = str(c["subsystem"]).replace("|", "\\|")
        comp = str(c["name"]).replace("|", "\\|")
        comp_path = str(c["path"]).replace("|", "\\|")
        for d in c["deps"] or []:
            d_name = str(d).replace("|", "\\|")
            lines.append(f"| {d_name} | {subsys} | {comp} | {comp_path} |")

    # test 列表：名字，所属子系统，所属组件，路径
    lines.extend([
        "",
        f"## test 列表（数量：{test_total}）",
        "",
        "| 名字 | 所属子系统 | 所属组件 | 路径 |",
        "|------|------------|----------|------|",
    ])
    for c in sorted(components, key=lambda x: (x["subsystem"], x["name"])):
        subsys = str(c["subsystem"]).replace("|", "\\|")
        comp = str(c["name"]).replace("|", "\\|")
        comp_path = str(c["path"]).replace("|", "\\|")
        for t in c["test"] or []:
            t_name = str(t).replace("|", "\\|")
            lines.append(f"| {t_name} | {subsys} | {comp} | {comp_path} |")

    lines.append("")
    out_path.write_text("\n".join(lines), encoding="utf-8")


def cmd_scan_all(src_dir: Path | None) -> int:
    """全量扫描 src（排除 kernel、third_party、applications 及隐藏目录），生成 MD 报告。"""
    src_root = get_src_root(src_dir)
    if not src_root.is_dir():
        print(f"错误: 源码根目录不存在: {src_root}", file=sys.stderr)
        return 1
    bundles = find_bundle_jsons_filtered(src_root)
    if not bundles:
        print("未找到符合条件的 bundle.json。", file=sys.stderr)
        return 1
    components, subsystems, counts = run_scan(src_root)
    analysis_path_str = str(src_root.as_posix())
    path_no_slash = analysis_path_str.replace("/", "")
    timestamp = datetime.now().strftime("%Y%m%d%H%M")
    out_path = SCRIPT_DIR / f"{path_no_slash}{timestamp}.md"
    write_scan_report(components, subsystems, counts, src_root, out_path)
    abs_path = out_path.resolve()
    print(f"\n报告已生成并保存。")
    print(f"保存路径: {abs_path}")
    print(f"（子系统 {counts['subsystem_count']}，组件 {counts['component_count']}，InnerKits {counts['innerkits_total']}）\n")
    return 0


def _inner_kit_key(ik) -> str:
    """用于比较的 inner_kit 键（名称）。"""
    if isinstance(ik, str):
        return ik
    return str(ik.get("name", "") or ik)


def _build_diff_report(
    components1: list[dict],
    subsystems1: dict,
    counts1: dict,
    path1_str: str,
    components2: list[dict],
    subsystems2: dict,
    counts2: dict,
    path2_str: str,
) -> list[str]:
    """生成两个扫描结果的对比报告（MD 行列表）。约定：path1 为基准（旧），path2 为对比（新）。"""
    lines = [
        "# OpenHarmony 工程分析对比报告",
        "",
        f"**基准路径（旧）**: `{path1_str}`",
        f"**对比路径（新）**: `{path2_str}`",
        "",
        f"生成时间: {datetime.now().isoformat(timespec='seconds')}",
        "",
        "## 统计对比",
        "",
        "| 项目 | 基准（旧） | 对比（新） | 增减 |",
        "|------|------------|------------|------|",
    ]
    for key, label in [
        ("subsystem_count", "子系统数量"),
        ("component_count", "组件数量"),
        ("innerkits_total", "InnerKits 数量"),
        ("syscap_total", "syscap 数量"),
        ("deps_total", "deps 数量"),
        ("test_total", "test 数量"),
    ]:
        v1, v2 = counts1.get(key, 0), counts2.get(key, 0)
        delta = v2 - v1
        delta_str = f"+{delta}" if delta > 0 else str(delta)
        lines.append(f"| {label} | {v1} | {v2} | {delta_str} |")

    paths1 = {c["path"] for c in components1}
    paths2 = {c["path"] for c in components2}
    comp_by_path1 = {c["path"]: c for c in components1}
    comp_by_path2 = {c["path"]: c for c in components2}

    subs1 = set(subsystems1.keys())
    subs2 = set(subsystems2.keys())
    added_subs = sorted(subs2 - subs1)
    removed_subs = sorted(subs1 - subs2)

    added_paths = sorted(paths2 - paths1)
    removed_paths = sorted(paths1 - paths2)
    common_paths = sorted(paths1 & paths2)

    def _subsystem_table_rows(components: list[dict], subs_list: list[str]) -> list[list]:
        """对给定子系统名列表，从 components 中统计每个子系统的 组件数、deps数、innerkits数、test数、相对路径。"""
        rows = []
        for subs in subs_list:
            comps = [c for c in components if c.get("subsystem") == subs]
            n_comp = len(comps)
            n_deps = sum(len(c.get("deps") or []) for c in comps)
            n_ik = sum(len(c.get("inner_kits") or []) for c in comps)
            n_test = sum(len(c.get("test") or []) for c in comps)
            paths_str = "; ".join(c["path"] for c in comps)
            rows.append((subs, n_comp, n_deps, n_ik, n_test, paths_str))
        return rows

    # 新增/删除子系统（表格：子系统、组件数量、deps数量、innerkits数量、test数量、相对路径）
    lines.extend(["", "---", "", f"## 新增子系统列表（{len(added_subs)}）", ""])
    if added_subs:
        lines.append("| 子系统 | 组件数量 | deps数量 | innerkits数量 | test数量 | 相对路径 |")
        lines.append("|--------|----------|----------|---------------|----------|----------|")
        for subs, n_comp, n_deps, n_ik, n_test, paths_str in _subsystem_table_rows(components2, added_subs):
            subs_esc = subs.replace("|", "\\|")
            paths_esc = paths_str.replace("|", "\\|") if paths_str else "-"
            lines.append(f"| {subs_esc} | {n_comp} | {n_deps} | {n_ik} | {n_test} | {paths_esc} |")
    else:
        lines.append("（无）")
    lines.extend(["", f"## 删除子系统列表（{len(removed_subs)}）", ""])
    if removed_subs:
        lines.append("| 子系统 | 组件数量 | deps数量 | innerkits数量 | test数量 | 相对路径 |")
        lines.append("|--------|----------|----------|---------------|----------|----------|")
        for subs, n_comp, n_deps, n_ik, n_test, paths_str in _subsystem_table_rows(components1, removed_subs):
            subs_esc = subs.replace("|", "\\|")
            paths_esc = paths_str.replace("|", "\\|") if paths_str else "-"
            lines.append(f"| {subs_esc} | {n_comp} | {n_deps} | {n_ik} | {n_test} | {paths_esc} |")
    else:
        lines.append("（无）")

    # 新增/删除组件
    lines.extend(["", f"## 新增组件列表（{len(added_paths)}）", ""])
    if added_paths:
        lines.append("| 组件名 | 子系统名 | 相对路径 |")
        lines.append("|--------|----------|----------|")
        for p in added_paths:
            c = comp_by_path2[p]
            name_esc = str(c["name"]).replace("|", "\\|")
            subs_esc = str(c["subsystem"]).replace("|", "\\|")
            path_esc = str(p).replace("|", "\\|")
            lines.append(f"| {name_esc} | {subs_esc} | {path_esc} |")
    else:
        lines.append("（无）")
    lines.extend(["", f"## 删除组件列表（{len(removed_paths)}）", ""])
    if removed_paths:
        lines.append("| 组件名 | 子系统名 | 相对路径 |")
        lines.append("|--------|----------|----------|")
        for p in removed_paths:
            c = comp_by_path1[p]
            name_esc = str(c["name"]).replace("|", "\\|")
            subs_esc = str(c["subsystem"]).replace("|", "\\|")
            path_esc = str(p).replace("|", "\\|")
            lines.append(f"| {name_esc} | {subs_esc} | {path_esc} |")
    else:
        lines.append("（无）")

    # 变更组件（同一 path 下 syscap/deps/inner_kits/test 等有变化）
    changed_entries = []
    for p in common_paths:
        c1, c2 = comp_by_path1[p], comp_by_path2[p]
        syscap1 = set(c1.get("syscap") or [])
        syscap2 = set(c2.get("syscap") or [])
        deps1 = set(c1.get("deps") or [])
        deps2 = set(c2.get("deps") or [])
        ik1 = {_inner_kit_key(ik) for ik in (c1.get("inner_kits") or [])}
        ik2 = {_inner_kit_key(ik) for ik in (c2.get("inner_kits") or [])}
        test1 = set(c1.get("test") or [])
        test2 = set(c2.get("test") or [])
        if syscap1 != syscap2 or deps1 != deps2 or ik1 != ik2 or test1 != test2:
            table_rows = []  # (变更类型, 条目)
            if syscap1 != syscap2:
                add_s, rem_s = syscap2 - syscap1, syscap1 - syscap2
                for item in sorted(add_s):
                    table_rows.append(("syscap 新增", item))
                for item in sorted(rem_s):
                    table_rows.append(("syscap 删除", item))
            if deps1 != deps2:
                add_d, rem_d = deps2 - deps1, deps1 - deps2
                for item in sorted(add_d):
                    table_rows.append(("deps 新增", item))
                for item in sorted(rem_d):
                    table_rows.append(("deps 删除", item))
            if ik1 != ik2:
                add_ik, rem_ik = ik2 - ik1, ik1 - ik2
                for item in sorted(add_ik):
                    table_rows.append(("inner_kits 新增", item))
                for item in sorted(rem_ik):
                    table_rows.append(("inner_kits 删除", item))
            if test1 != test2:
                add_t, rem_t = test2 - test1, test1 - test2
                for item in sorted(add_t):
                    table_rows.append(("test 新增", item))
                for item in sorted(rem_t):
                    table_rows.append(("test 删除", item))
            parts = [f"**{p}**", "", "| 变更类型 | 条目 |", "|----------|------|"]
            for typ, item in table_rows:
                item_esc = str(item).replace("|", "\\|")
                parts.append(f"| {typ} | {item_esc} |")
            changed_entries.append("\n".join(parts))
    lines.extend(["", f"## 变更组件列表（同一路径下内容有变化）（{len(changed_entries)}）", ""])
    if changed_entries:
        lines.append("\n\n".join(changed_entries))
    else:
        lines.append("（无）")

    # 新增/删除 syscap（全局：出现在某组件下的 syscap 条目）
    set_syscap1 = set()
    set_syscap2 = set()
    for c in components1:
        for s in c.get("syscap") or []:
            set_syscap1.add(s)
    for c in components2:
        for s in c.get("syscap") or []:
            set_syscap2.add(s)
    added_syscap = sorted(set_syscap2 - set_syscap1)
    removed_syscap = sorted(set_syscap1 - set_syscap2)
    lines.extend(["", f"## 新增 syscap 列表（{len(added_syscap)}）", ""])
    if added_syscap:
        for s in added_syscap:
            lines.append("- " + s.replace("|", "\\|"))
    else:
        lines.append("（无）")
    lines.extend(["", f"## 删除 syscap 列表（{len(removed_syscap)}）", ""])
    if removed_syscap:
        for s in removed_syscap:
            lines.append("- " + s.replace("|", "\\|"))
    else:
        lines.append("（无）")

    # 新增/删除 inner_kits（按名称）
    set_ik1 = set()
    set_ik2 = set()
    for c in components1:
        for ik in c.get("inner_kits") or []:
            set_ik1.add(_inner_kit_key(ik))
    for c in components2:
        for ik in c.get("inner_kits") or []:
            set_ik2.add(_inner_kit_key(ik))
    added_ik = sorted(set_ik2 - set_ik1)
    removed_ik = sorted(set_ik1 - set_ik2)
    lines.extend(["", f"## 新增 inner_kits 列表（{len(added_ik)}）", ""])
    if added_ik:
        for ik in added_ik:
            lines.append("- " + ik.replace("|", "\\|"))
    else:
        lines.append("（无）")
    lines.extend(["", f"## 删除 inner_kits 列表（{len(removed_ik)}）", ""])
    if removed_ik:
        for ik in removed_ik:
            lines.append("- " + ik.replace("|", "\\|"))
    else:
        lines.append("（无）")

    # 新增/删除 deps（表格：deps名称、子系统、组件）
    set_deps1 = set()
    set_deps2 = set()
    for c in components1:
        for d in c.get("deps") or []:
            set_deps1.add(d)
    for c in components2:
        for d in c.get("deps") or []:
            set_deps2.add(d)
    added_deps_set = set_deps2 - set_deps1
    removed_deps_set = set_deps1 - set_deps2
    added_deps_rows = []
    for c in components2:
        subsys = str(c.get("subsystem") or "")
        comp_name = str(c.get("name") or c.get("path") or "")
        for d in c.get("deps") or []:
            if d in added_deps_set:
                added_deps_rows.append((d, subsys, comp_name))
    removed_deps_rows = []
    for c in components1:
        subsys = str(c.get("subsystem") or "")
        comp_name = str(c.get("name") or c.get("path") or "")
        for d in c.get("deps") or []:
            if d in removed_deps_set:
                removed_deps_rows.append((d, subsys, comp_name))
    added_deps_rows.sort(key=lambda x: (x[0], x[1], x[2]))
    removed_deps_rows.sort(key=lambda x: (x[0], x[1], x[2]))
    lines.extend(["", f"## 新增 deps 列表（{len(added_deps_rows)}）", ""])
    if added_deps_rows:
        lines.append("| deps名称 | 子系统 | 组件 |")
        lines.append("|----------|--------|------|")
        for d, subsys, comp_name in added_deps_rows:
            d_esc = str(d).replace("|", "\\|")
            subsys_esc = subsys.replace("|", "\\|")
            comp_esc = comp_name.replace("|", "\\|")
            lines.append(f"| {d_esc} | {subsys_esc} | {comp_esc} |")
    else:
        lines.append("（无）")
    lines.extend(["", f"## 删除 deps 列表（{len(removed_deps_rows)}）", ""])
    if removed_deps_rows:
        lines.append("| deps名称 | 子系统 | 组件 |")
        lines.append("|----------|--------|------|")
        for d, subsys, comp_name in removed_deps_rows:
            d_esc = str(d).replace("|", "\\|")
            subsys_esc = subsys.replace("|", "\\|")
            comp_esc = comp_name.replace("|", "\\|")
            lines.append(f"| {d_esc} | {subsys_esc} | {comp_esc} |")
    else:
        lines.append("（无）")

    # 新增/删除 test（表格：test名称、子系统、组件）
    set_test1 = set()
    set_test2 = set()
    for c in components1:
        for t in c.get("test") or []:
            set_test1.add(t)
    for c in components2:
        for t in c.get("test") or []:
            set_test2.add(t)
    added_test_set = set_test2 - set_test1
    removed_test_set = set_test1 - set_test2
    added_test_rows = []
    for c in components2:
        subsys = str(c.get("subsystem") or "")
        comp_name = str(c.get("name") or c.get("path") or "")
        for t in c.get("test") or []:
            if t in added_test_set:
                added_test_rows.append((t, subsys, comp_name))
    removed_test_rows = []
    for c in components1:
        subsys = str(c.get("subsystem") or "")
        comp_name = str(c.get("name") or c.get("path") or "")
        for t in c.get("test") or []:
            if t in removed_test_set:
                removed_test_rows.append((t, subsys, comp_name))
    added_test_rows.sort(key=lambda x: (x[0], x[1], x[2]))
    removed_test_rows.sort(key=lambda x: (x[0], x[1], x[2]))
    lines.extend(["", f"## 新增 test 列表（{len(added_test_rows)}）", ""])
    if added_test_rows:
        lines.append("| test名称 | 子系统 | 组件 |")
        lines.append("|----------|--------|------|")
        for t, subsys, comp_name in added_test_rows:
            t_esc = str(t).replace("|", "\\|")
            subsys_esc = subsys.replace("|", "\\|")
            comp_esc = comp_name.replace("|", "\\|")
            lines.append(f"| {t_esc} | {subsys_esc} | {comp_esc} |")
    else:
        lines.append("（无）")
    lines.extend(["", f"## 删除 test 列表（{len(removed_test_rows)}）", ""])
    if removed_test_rows:
        lines.append("| test名称 | 子系统 | 组件 |")
        lines.append("|----------|--------|------|")
        for t, subsys, comp_name in removed_test_rows:
            t_esc = str(t).replace("|", "\\|")
            subsys_esc = subsys.replace("|", "\\|")
            comp_esc = comp_name.replace("|", "\\|")
            lines.append(f"| {t_esc} | {subsys_esc} | {comp_esc} |")
    else:
        lines.append("（无）")

    lines.append("")
    return lines


def cmd_diff(path1: Path, path2: Path) -> int:
    """比较两个 src 目录：分别生成报告，再生成对比报告。"""
    path1 = path1.expanduser().resolve()
    path2 = path2.expanduser().resolve()
    if not path1.is_dir():
        print(f"错误: 路径不存在或不是目录: {path1}", file=sys.stderr)
        return 1
    if not path2.is_dir():
        print(f"错误: 路径不存在或不是目录: {path2}", file=sys.stderr)
        return 1

    # 先分别扫描并生成两份报告
    components1, subsystems1, counts1 = run_scan(path1)
    components2, subsystems2, counts2 = run_scan(path2)
    ts = datetime.now().strftime("%Y%m%d%H%M")
    path1_no_slash = str(path1.as_posix()).replace("/", "")
    path2_no_slash = str(path2.as_posix()).replace("/", "")

    out1 = SCRIPT_DIR / f"{path1_no_slash}{ts}.md"
    out2 = SCRIPT_DIR / f"{path2_no_slash}{ts}.md"
    write_scan_report(components1, subsystems1, counts1, path1, out1)
    write_scan_report(components2, subsystems2, counts2, path2, out2)

    # 生成对比报告：diff + 两个路径名 + 时间
    diff_name = f"diff_{path1_no_slash}_{path2_no_slash}_{ts}.md"
    diff_path = SCRIPT_DIR / diff_name
    diff_lines = _build_diff_report(
        components1, subsystems1, counts1, str(path1),
        components2, subsystems2, counts2, str(path2),
    )
    diff_path.write_text("\n".join(diff_lines), encoding="utf-8")

    print("\n已生成两份分析报告及一份对比报告。")
    print(f"基准路径报告: {out1.resolve()}")
    print(f"对比路径报告: {out2.resolve()}")
    print(f"对比报告: {diff_path.resolve()}\n")
    return 0


def cmd_bundle(path_arg: str | None, src_dir: Path | None, prefix: str | None, verbose: bool) -> int:
    src_root = get_src_root(src_dir)
    if not src_root.is_dir():
        print(f"错误: 源码根目录不存在: {src_root}", file=sys.stderr)
        return 1
    path_prefix = path_arg or prefix
    bundles = find_bundle_jsons(src_root, path_prefix)
    if not bundles:
        print(f"未找到 bundle.json（src_root={src_root}, path_prefix={path_prefix}）", file=sys.stderr)
        return 1
    print(f"共 {len(bundles)} 个 bundle.json（src_root={src_root}）\n")
    for b in bundles:
        info = parse_bundle(b, src_root)
        if info:
            print("---")
            print_bundle_info(info, verbose=verbose)
    print("\n提示：以上结果仅输出到终端，未写入文件。如需保存请使用重定向，例如：")
    print("  python3 .claude/skills/ohanalysis/ohanalysis.py bundle [路径] [选项] --src-dir <src路径> > bundle_result.txt\n")
    return 0


def show_help() -> None:
    print("""ohanalysis - OpenHarmony 工程分析
Usage:
  bundle [路径] [--src-dir PATH] [--prefix PATH] [--brief]
    解析 bundle.json，整理：子系统、系统能力、组件、deps、inner_kits、test。
    路径: 相对 src 的目录，如 foundation/ability/ability_base，只解析该目录下 bundle.json；
          不传则扫描 src 下全部 bundle.json（可用 --prefix 限制，如 foundation/ability）。
    --src-dir: 工程 src 根目录，默认自动推断。
    --prefix:  只处理路径以此前缀开头的 bundle（与路径二选一或配合无路径使用）。
    --brief:   不输出 inner_kits / test 详情。
  scan-all [--src-dir PATH]
    扫描 src 下所有目录（排除 . 开头、kernel、third_party、applications），
    根据 bundle.json 生成 MD 报告：统计子系统/组件/InnerKits 数量，子系统列表，组件列表。
    报告文件名：分析路径去掉“/”后 + YYYYMMDDHHMM.md，保存在 skills/ohanalysis 目录下。
  diff PATH1 PATH2
    比较两个 src 目录：先分别分析并生成两份 MD 报告，再生成增删改对比报告。
    对比报告文件名：diff_路径1_路径2_时间.md，保存在 skills/ohanalysis 目录下。
  help
""")


def main() -> int:
    args = sys.argv[1:]
    if not args or args[0] in ("-h", "--help", "help"):
        show_help()
        return 0
    cmd = args[0]
    if cmd == "scan-all":
        i = 1
        src_dir = None
        while i < len(args):
            if args[i] == "--src-dir" and i + 1 < len(args):
                src_dir = args[i + 1]
                i += 2
                continue
            i += 1
        return cmd_scan_all(Path(src_dir) if src_dir else None)
    if cmd == "diff":
        if len(args) < 3:
            print("用法: diff PATH1 PATH2", file=sys.stderr)
            return 1
        return cmd_diff(Path(args[1]), Path(args[2]))
    if cmd != "bundle":
        print("未知命令，使用 help 查看用法。", file=sys.stderr)
        return 1
    i = 1
    path_arg = None
    src_dir = None
    prefix = None
    verbose = True
    while i < len(args):
        if args[i] == "--src-dir" and i + 1 < len(args):
            src_dir = args[i + 1]
            i += 2
            continue
        if args[i] == "--prefix" and i + 1 < len(args):
            prefix = args[i + 1]
            i += 2
            continue
        if args[i] == "--brief":
            verbose = False
            i += 1
            continue
        if not args[i].startswith("--"):
            path_arg = args[i]
            i += 1
            continue
        i += 1
    return cmd_bundle(path_arg=path_arg, src_dir=Path(src_dir) if src_dir else None, prefix=prefix, verbose=verbose)


if __name__ == "__main__":
    sys.exit(main())
