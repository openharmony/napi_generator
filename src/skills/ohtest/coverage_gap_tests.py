#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
根据 .gcov 覆盖率分析文件结合对应 fuzztest 测试用例，生成「覆盖率缺失的测试用例」建议。
输出包含：覆盖率缺失摘要、现有 fuzztest 目标、建议新增/修改文件、构建与运行、预期对覆盖率的影响。

Usage:
    python3 coverage_gap_tests.py analyze-gaps [报告目录] [--module 模块名] [--output 输出文件]
    python3 coverage_gap_tests.py help

报告目录：通常为 developer_test/reports/obj_<模块名>_<id>，如 developer_test/reports/obj_battery_statistics_2602051604。
若省略报告目录，则使用 developer_test/reports/obj（需仅有一个 obj_* 子目录或直接在该目录下有 .gcov）。
--module：若无法从报告目录或 .gcov 的 Source 路径推断模块名，可显式指定，如 battery_statistics。
"""

import argparse
import glob
import os
import re
import sys
from pathlib import Path
from typing import List, Optional, Tuple

SCRIPT_DIR = Path(__file__).resolve().parent
SRC_ROOT = SCRIPT_DIR.parent.parent.parent
DEV_TEST_ROOT = SRC_ROOT / "test" / "testfwk" / "developer_test"
REPORTS_ROOT = DEV_TEST_ROOT / "reports"

GCOV_UNEXECUTED_MARKER = "#####"
GCOV_NON_EXECUTABLE_MARKER = "-"
SOURCE_EXTENSIONS = (".cpp", ".c", ".cc", ".cxx")
PATTERN_GCOV = "*.gcov"

SKILL_NAME = "ohtest-coverage-gap-tests"
VERSION = "1.0.0"


def _is_source_gcov(name: str) -> bool:
    if not name.endswith(".gcov"):
        return False
    base = name[:-5]
    for ext in SOURCE_EXTENSIONS:
        if base.endswith(ext):
            return True
    return False


def _parse_gcov_uncovered(gcov_path: Path) -> Tuple[Optional[str], List[Tuple[int, str]]]:
    """
    解析单个 .gcov，返回 (Source 路径相对 src 的部分, [(行号, 行内容), ...])，仅包含未覆盖的可执行行。
    """
    source_rel = None
    uncovered = []
    try:
        text = gcov_path.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return None, []
    for line in text.splitlines():
        stripped = line.strip()
        if ":Source:" in line and not stripped.startswith("#"):
            parts = line.split("Source:", 1)
            if len(parts) == 2:
                raw = parts[1].strip()
                # 归一化为相对 src 的路径，如 base/powermgr/battery_statistics/...
                if raw.startswith("../"):
                    source_rel = raw
                elif raw.startswith("../../"):
                    source_rel = raw
                else:
                    source_rel = raw
            continue
        parts = line.split(":", 2)
        if len(parts) < 3:
            continue
        execution_count = parts[0].strip()
        line_no_str = parts[1].strip()
        line_content = parts[2].strip() if len(parts) > 2 else ""
        if execution_count == GCOV_NON_EXECUTABLE_MARKER:
            continue
        if execution_count != GCOV_UNEXECUTED_MARKER:
            continue
        try:
            line_no = int(line_no_str)
        except ValueError:
            continue
        uncovered.append((line_no, line_content))
    return source_rel, uncovered


def _infer_module_from_report_dir(report_dir: Path) -> Optional[str]:
    """从报告目录名推断模块，如 obj_battery_statistics_2602051604 -> battery_statistics。"""
    name = report_dir.name
    if name.startswith("obj_") and "_" in name[4:]:
        rest = name[4:]
        # 最后一个 _ 后面通常是数字 id
        idx = rest.rfind("_")
        if idx > 0 and rest[idx + 1:].isdigit():
            return rest[:idx]
        return rest
    return None


def _infer_module_from_source_path(source_rel: Optional[str]) -> Optional[str]:
    """从 Source 路径推断模块，如 base/powermgr/battery_statistics/frameworks/... -> battery_statistics。"""
    if not source_rel:
        return None
    parts = source_rel.replace("\\", "/").strip("/").split("/")
    if len(parts) >= 3 and parts[0] == "base" and parts[1] == "powermgr":
        return parts[2]
    if len(parts) >= 2:
        return parts[-2] if parts[-1].endswith((".cpp", ".c")) else parts[-1]
    return None


def find_module_root(module_name: str) -> Optional[Path]:
    """根据模块名找到模块根目录（src 下）。"""
    name = module_name.strip().rstrip("/")
    direct = SRC_ROOT / name
    if direct.is_dir():
        return direct
    for d in SRC_ROOT.rglob(name):
        if d.is_dir() and d.name == name:
            fuzztest_dir = d / "test" / "fuzztest"
            if fuzztest_dir.is_dir():
                return d
    for d in SRC_ROOT.rglob(name):
        if d.is_dir() and d.name == name:
            return d
    return None


def get_fuzztest_targets(module_root: Path) -> List[str]:
    """从 test/fuzztest/BUILD.gn 的 deps 解析 fuzz 目标名。"""
    build_gn = module_root / "test" / "fuzztest" / "BUILD.gn"
    if not build_gn.is_file():
        return []
    text = build_gn.read_text(encoding="utf-8", errors="ignore")
    targets = []
    for m in re.finditer(r'"[\w/]+:([A-Za-z0-9]+FuzzTest)"', text):
        targets.append(m.group(1))
    return targets


def _extract_symbol_from_line(content: str) -> Optional[str]:
    """从代码行中提取可能的符号名，如 ClassName::MethodName 或 function_name。"""
    if not content:
        return None
    # 匹配 C++ 成员函数：ClassName::method_name 或 Namespace::Class::method
    m = re.search(r"\b(\w+(?:::\w+)+)\s*\(", content)
    if m:
        return m.group(1)
    # 匹配函数名：word(
    m = re.search(r"\b(\w+)\s*\([^)]*\)\s*(?:const)?\s*\{?", content)
    if m:
        return m.group(1)
    return None


def collect_gaps(report_dir: Path) -> Tuple[Optional[str], List[dict]]:
    """
    收集报告目录下所有 .gcov 的未覆盖行。
    返回 (推断的模块名, [{"file": "x.cpp.gcov", "source_rel": "base/.../x.cpp", "uncovered": [(ln, content), ...]}, ...])。
    """
    gcov_files = [
        Path(p)
        for p in glob.glob(str(report_dir / PATTERN_GCOV))
        if _is_source_gcov(os.path.basename(p))
    ]
    if not gcov_files:
        return None, []

    inferred_module = _infer_module_from_report_dir(report_dir)
    file_gaps = []
    for gcov_path in gcov_files:
        source_rel, uncovered = _parse_gcov_uncovered(gcov_path)
        if not uncovered:
            continue
        if not inferred_module and source_rel:
            inferred_module = _infer_module_from_source_path(source_rel)
        file_gaps.append({
            "file": gcov_path.name,
            "source_rel": source_rel or "",
            "uncovered": uncovered,
        })
    file_gaps.sort(key=lambda x: (-len(x["uncovered"]), x["file"]))
    return inferred_module, file_gaps


def format_recommendation(module_name: str, module_root: Optional[Path], file_gaps: List[dict], fuzz_targets: List[str]) -> str:
    """生成建议报告（新增/修改文件、构建与运行、预期对覆盖率的影响）。"""
    lines = []
    lines.append("=" * 60)
    lines.append("一、覆盖率缺失摘要")
    lines.append("=" * 60)
    total_uncovered = 0
    for item in file_gaps:
        n = len(item["uncovered"])
        total_uncovered += n
        lines.append(f"  {item['file']:<45} 未覆盖 {n} 行")
    lines.append(f"  合计未覆盖可执行行: {total_uncovered}")
    lines.append("")

    lines.append("二、现有 fuzztest 目标")
    lines.append("-" * 60)
    if fuzz_targets:
        for t in fuzz_targets:
            lines.append(f"  - {t}")
    else:
        lines.append("  （未找到 test/fuzztest/BUILD.gn 或 deps 中无 FuzzTest 目标）")
    lines.append("")

    lines.append("三、建议新增/修改的测试用例（参考新增 fuzzer 流程）")
    lines.append("-" * 60)
    for item in file_gaps[:10]:  # 最多详列 10 个文件
        lines.append(f"  文件: {item['file']}")
        # 按行号取前 20 个未覆盖行，并尝试提取符号
        symbols = set()
        for ln, content in item["uncovered"][:20]:
            sym = _extract_symbol_from_line(content)
            if sym:
                symbols.add(sym)
        if symbols:
            lines.append(f"    涉及符号（示例）: {', '.join(sorted(symbols)[:15])}")
        for ln, content in item["uncovered"][:8]:
            short = content[:70] + "..." if len(content) > 70 else content
            lines.append(f"    L{ln}: {short}")
        if len(item["uncovered"]) > 8:
            lines.append(f"    ... 共 {len(item['uncovered'])} 行未覆盖")
        lines.append("")
    if len(file_gaps) > 10:
        lines.append(f"  （其余 {len(file_gaps)-10} 个文件未覆盖行已省略详列）")
        lines.append("")

    lines.append("四、新增/修改文件建议")
    lines.append("-" * 60)
    if module_root and file_gaps:
        try:
            fuzztest_rel = (module_root / "test" / "fuzztest").relative_to(SRC_ROOT)
        except ValueError:
            fuzztest_rel = module_root / "test" / "fuzztest"
        lines.append("  1) 新增专用 fuzzer 目录（针对未覆盖的源码）：")
        lines.append(f"     {fuzztest_rel}/<source_stem>_fuzzer/")
        lines.append("       - <source_stem>_fuzzer_test.cpp   # LLVMFuzzerTestOneInput，调用未覆盖的 API/反序列化等")
        lines.append("       - BUILD.gn                       # ohos_fuzztest，deps 指向提供该源码的 target（如 stub）")
        lines.append("       - project.xml")
        lines.append("       - corpus/init")
        lines.append("  2) 在 test/fuzztest/BUILD.gn 的 group(\"fuzztest\") 的 deps 中增加：")
        lines.append('     "<new_fuzzer_dir>:<NewFuzzerTarget>",')
        lines.append("  3) 若未覆盖主要为「反序列化/ReadFromParcel/Unmarshalling」：fuzzer 内用 fuzz 数据构造 MessageParcel 并调用 Unmarshalling(parcel)。")
        lines.append("  4) 若未覆盖主要为「Setter/Getter/分支」：fuzzer 内创建对象，用 fuzz 字节驱动 SetX/GetX 及不同枚举分支。")
    lines.append("")

    lines.append("五、构建与运行")
    lines.append("-" * 60)
    if module_root:
        try:
            rel = module_root.relative_to(SRC_ROOT)
            lines.append(f"  模块路径: {rel}")
        except ValueError:
            lines.append(f"  模块路径: {module_root}")
    lines.append("  构建（开启覆盖率时）：")
    lines.append("    ./build.sh --product-name <product> --build-target <NewFuzzTest> --gn-args <module>_feature_coverage=true")
    lines.append("  或使用 ohbuild 技能：")
    lines.append("    python3 .claude/skills/ohbuild/ohbuild.py build-fuzztest <NewFuzzTest> --gn-args <module>_feature_coverage=true")
    lines.append("  运行 fuzz 并收集覆盖率：")
    lines.append("    python3 .claude/skills/ohtest/fuzztest.py run -ts <NewFuzzTest> --coverage")
    lines.append("  生成 .gcov 并统计：")
    lines.append("    python3 .claude/skills/ohtest/coverage_analysis.py run && python3 .claude/skills/ohtest/coverage_analysis.py analyze")
    lines.append("")

    lines.append("六、预期对覆盖率的影响")
    lines.append("-" * 60)
    for item in file_gaps[:5]:
        lines.append(f"  - {item['file']}: 补充对上述未覆盖行（反序列化/API/分支）的调用，可提高该文件行覆盖率。")
    if len(file_gaps) > 5:
        lines.append(f"  - 其余 {len(file_gaps)-5} 个文件同理，针对未覆盖符号增加 fuzzer 或用例即可提升覆盖率。")
    lines.append("")
    return "\n".join(lines)


def cmd_analyze_gaps(
    report_dir: Optional[Path],
    module_override: Optional[str] = None,
    output_path: Optional[Path] = None,
) -> int:
    """分析报告目录下 .gcov，输出覆盖率缺失与测试用例建议。"""
    if report_dir is None or not report_dir.is_dir():
        # 默认：使用 developer_test/reports/obj 或 reports 下唯一 obj_* 目录
        candidate = REPORTS_ROOT / "obj" if report_dir is None else report_dir
        if candidate.is_dir():
            report_dir = candidate
        elif REPORTS_ROOT.is_dir():
            subdirs = [d for d in REPORTS_ROOT.iterdir() if d.is_dir() and d.name.startswith("obj_")]
            if len(subdirs) == 1:
                report_dir = subdirs[0]
            else:
                print(f"未指定有效报告目录；请传入 developer_test/reports/obj_<模块>_<id>。reports 下 obj_* 数量: {len(subdirs)}", file=sys.stderr)
                return 1
        else:
            print(f"目录不存在: {candidate}", file=sys.stderr)
            return 1

    inferred_module, file_gaps = collect_gaps(report_dir)
    module_name = module_override or inferred_module
    if not file_gaps:
        print(f"在 {report_dir} 下未找到含未覆盖行的 .gcov 文件。")
        return 0

    module_root = find_module_root(module_name) if module_name else None
    fuzz_targets = get_fuzztest_targets(module_root) if module_root else []

    report = format_recommendation(module_name or "unknown", module_root, file_gaps, fuzz_targets)
    if output_path:
        output_path.write_text(report, encoding="utf-8")
        print(f"已写入: {output_path}")
    else:
        print(report)
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(
        description="根据 .gcov 与 fuzztest 生成覆盖率缺失的测试用例建议。",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("--version", action="version", version=f"%(prog)s {VERSION}")
    subparsers = parser.add_subparsers(dest="command", help="命令")

    subparsers.add_parser("help", help="显示帮助").set_defaults(which="help")

    gap_parser = subparsers.add_parser(
        "analyze-gaps",
        help="解析报告目录下 .gcov，输出覆盖率缺失摘要与新增测试用例建议",
    )
    gap_parser.add_argument(
        "report_dir",
        nargs="?",
        type=Path,
        default=None,
        metavar="REPORT_DIR",
        help="报告目录，如 developer_test/reports/obj_battery_statistics_2602051604；默认自动查找 reports 下 obj_*",
    )
    gap_parser.add_argument("--module", "-m", default=None, help="模块名，如 battery_statistics")
    gap_parser.add_argument("--output", "-o", type=Path, default=None, help="将报告写入该文件")

    args = parser.parse_args()
    if getattr(args, "which", None) == "help" or args.command == "help":
        parser.print_help()
        return 0

    if args.command == "analyze-gaps":
        return cmd_analyze_gaps(
            report_dir=args.report_dir,
            module_override=args.module,
            output_path=args.output,
        )

    parser.print_help()
    return 0


if __name__ == "__main__":
    sys.exit(main())
