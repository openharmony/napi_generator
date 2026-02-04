#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
测试结果覆盖率分析技能 - 参考 gen_gcovr 实现，不调用 gen_gcovr 程序。
步骤：1) 连接设备，从设备目录查找 *.gcda 并拷贝到 reports/obj；
     2) 在 out/<product>/obj 下找同名 *.gcno 拷贝到 reports/obj；
     3) 在源码模块目录下找对应 .cpp 拷贝到 reports/obj；
     4) 在 reports/obj 内对每个 cpp 执行 gcov --object-directory . <cpp> 生成覆盖率报告。

Usage:
    python3 coverage_analysis.py run [-p 产品名] [--device 设备]  从设备拉取 gcda → 拷贝 gcno/cpp → 执行 gcov
    python3 coverage_analysis.py analyze [目录]  解析已有 .gcov 并输出覆盖率统计
    python3 coverage_analysis.py clear-analyze  清除分析结果并再次拉取、生成、分析
    python3 coverage_analysis.py clear-rerun-fuzz-analyze [-ts 测试套]  清除后重跑 fuzz 测试并分析
    python3 coverage_analysis.py help
"""

import argparse
import glob
import os
import shutil
import subprocess
import sys
from pathlib import Path
from typing import List, Optional, Tuple

# 脚本所在目录：src/.claude/skills/ohtest/
SCRIPT_DIR = Path(__file__).resolve().parent
SRC_ROOT = SCRIPT_DIR.parent.parent.parent
DEV_TEST_ROOT = SRC_ROOT / "test" / "testfwk" / "developer_test"
REPORTS_OBJ = DEV_TEST_ROOT / "reports" / "obj"
# analyze 默认目录：与 run 生成的 .gcov 所在目录一致
DEFAULT_ANALYZE_OBJ = REPORTS_OBJ

# 工程 prebuilts 下的 aarch64 gcov（与设备编译工具链一致，避免 version 不兼容）
GCOV_PATH = SRC_ROOT / "prebuilts" / "gcc" / "linux-x86" / "aarch64" / "gcc-linaro-7.5.0-2019.12-x86_64_aarch64-linux-gnu" / "bin" / "aarch64-linux-gnu-gcov"

# 覆盖率等级阈值
COVERAGE_EXCELLENT_THRESHOLD = 80
COVERAGE_GOOD_THRESHOLD = 60
COVERAGE_FAIR_THRESHOLD = 40
GCOV_UNEXECUTED_MARKER = "#####"
GCOV_NON_EXECUTABLE_MARKER = "-"
SOURCE_EXTENSIONS = (".cpp", ".c", ".cc", ".cxx")
PATTERN_GCOV = "*.gcov"

SKILL_NAME = "ohtest-coverage-analysis"
VERSION = "1.0.0"


def _ensure_hdc_path() -> None:
    """将 OHOS_SDK_PATH/linux/toolchains（及 toolchains/bin）加入 PATH，以便找到 hdc。"""
    sdk_path = os.environ.get("OHOS_SDK_PATH", "").strip()
    if not sdk_path:
        return
    toolchains = os.path.join(sdk_path, "linux", "toolchains")
    path_sep = os.pathsep
    old_path = os.environ.get("PATH", "")
    extra = []
    if os.path.isdir(toolchains):
        extra.append(toolchains)
    toolchains_bin = os.path.join(toolchains, "bin")
    if os.path.isdir(toolchains_bin):
        extra.append(toolchains_bin)
    if extra:
        os.environ["PATH"] = path_sep.join(extra) + path_sep + old_path


def _get_hdc_cmd() -> str:
    """返回 hdc 可执行路径（优先 PATH 中的 hdc）。"""
    _ensure_hdc_path()
    return shutil.which("hdc") or "hdc"


def _hdc(args: list[str], capture: bool = True) -> subprocess.CompletedProcess:
    """执行 hdc 命令。"""
    hdc_exe = _get_hdc_cmd()
    cmd = [hdc_exe] + args
    return subprocess.run(cmd, capture_output=capture, text=True, timeout=120, env=os.environ.copy())


def get_device_list() -> List[str]:
    """获取已连接设备列表。"""
    r = _hdc(["list", "targets"])
    if r.returncode != 0:
        return []
    devices = []
    for line in r.stdout.strip().splitlines():
        line = line.strip()
        if line and line != "list targets" and not line.startswith("[Empty]"):
            devices.append(line)
    return devices


def find_gcda_on_device(device_id: str, search_roots: List[str]) -> List[str]:
    """在设备上查找 *.gcda 文件。search_roots 如 ['/data', '/data/gcov']。"""
    all_files = []
    for root in search_roots:
        r = _hdc(["-t", device_id, "shell", "find", root, "-name", "*.gcda"])
        if r.returncode != 0 or not r.stdout.strip():
            continue
        for line in r.stdout.strip().splitlines():
            line = line.strip()
            if line and not line.startswith("find:") and "No such file" not in line:
                all_files.append(line)
    return all_files


def copy_from_device(device_id: str, device_path: str, local_path: Path) -> bool:
    """从设备拷贝文件到本地。"""
    r = _hdc(["-t", device_id, "file", "recv", device_path, str(local_path)])
    return r.returncode == 0 and local_path.exists() and local_path.stat().st_size > 0


def clear_reports_obj() -> int:
    """清除 reports/obj 下的覆盖率分析结果（*.gcda, *.gcno, *.cpp, *.gcov）。"""
    if not REPORTS_OBJ.is_dir():
        print(f"目录不存在，无需清除: {REPORTS_OBJ}")
        return 0
    patterns = ["*.gcda", "*.gcno", "*.gcov"] + [f"*{ext}" for ext in SOURCE_EXTENSIONS]
    removed = 0
    for pat in patterns:
        for f in REPORTS_OBJ.glob(pat):
            try:
                f.unlink()
                removed += 1
                print(f"  已删除: {f.name}")
            except OSError as e:
                print(f"  删除失败 {f.name}: {e}", file=sys.stderr)
    if removed == 0:
        print("reports/obj 内无覆盖率相关文件，已为空。")
    else:
        print(f"已清除 {removed} 个文件。")
    return 0


def get_device_search_root_from_local(local_root: Optional[Path] = None) -> str:
    """
    根据本地路径取前两个顶层目录，作为设备上的搜索根目录。
    例如本地为 /root/ohos/60release/src → 设备搜索路径 /root/ohos。
    """
    if local_root is None:
        local_root = SRC_ROOT
    p = local_root.resolve()
    parts = p.parts  # ('/', 'root', 'ohos', ...) 或 ('root', 'ohos', ...)
    if len(parts) >= 3:
        # 绝对路径: 取 parts[1] 与 parts[2] 组成 /root/ohos
        return "/" + parts[1].strip("/") + "/" + parts[2].strip("/")
    if len(parts) == 2:
        return "/" + parts[1].strip("/")
    return "/"


def run_coverage(
    product: str = "rk3568",
    device_id: Optional[str] = None,
    search_roots: Optional[List[str]] = None,
) -> int:
    """
    完整流程：连接设备 → 拉取 gcda → 拷贝 gcno/cpp → 在 reports/obj 内执行 gcov。
    """
    _ensure_hdc_path()
    if not shutil.which("hdc"):
        print("未找到 hdc。请设置 OHOS_SDK_PATH（hdc 在 ${OHOS_SDK_PATH}/linux/toolchains）或确保 hdc 在 PATH 中。", file=sys.stderr)
        return 1

    out_obj = SRC_ROOT / "out" / product / "obj"
    if not out_obj.is_dir():
        print(f"out 目录不存在: {out_obj}", file=sys.stderr)
        return 1

    # 1) 设备与 gcda
    devices = get_device_list()
    if not devices:
        print("未找到已连接设备，请确认 hdc list targets 可见设备。", file=sys.stderr)
        return 1
    if device_id is None:
        device_id = devices[0]
        print(f"使用设备: {device_id}")
    elif device_id not in devices:
        print(f"设备 {device_id} 不在列表中: {devices}", file=sys.stderr)
        return 1

    if search_roots is None:
        # 设备上搜索路径：1) 本地根（如 /root/ohos）；2) /data/gcov/<本地根>（如 /data/gcov/root/ohos），中间目录由本地运行根决定
        device_root = get_device_search_root_from_local()
        search_roots = [
            device_root,
            "/data/gcov/" + device_root.strip("/"),
        ]

    print("在设备上查找 *.gcda ...")
    print(f"  搜索目录（本地根 + /data/gcov/<本地根>）: {search_roots}")
    gcda_on_device = find_gcda_on_device(device_id, search_roots)
    if not gcda_on_device:
        print("设备上未找到 *.gcda 文件。请先运行带覆盖率的测试（-cov coverage）。")
        return 1
    print(f"找到 {len(gcda_on_device)} 个 gcda 文件")
    for p in gcda_on_device:
        print(f"    设备路径: {p}")

    REPORTS_OBJ.mkdir(parents=True, exist_ok=True)

    # 拷贝 gcda 到 reports/obj
    for dev_path in gcda_on_device:
        name = os.path.basename(dev_path)
        local = REPORTS_OBJ / name
        if copy_from_device(device_id, dev_path, local):
            print(f"  已拷贝: {name}")
        else:
            print(f"  拷贝失败: {name}")

    # 2) 对 reports/obj 中每个 .gcda，找同名 .gcno（在 out/<product>/obj 下）
    gcda_names = [f.stem for f in REPORTS_OBJ.glob("*.gcda")]
    for base in gcda_names:
        gcno_name = base + ".gcno"
        candidates = list(out_obj.rglob(gcno_name))
        if candidates:
            shutil.copy2(candidates[0], REPORTS_OBJ / gcno_name)
            print(f"  已拷贝 gcno: {gcno_name}")
        else:
            print(f"  未找到 gcno: {gcno_name}")

    # 3) 对每个 base，在源码下找对应 .cpp（从模块目录，即 src 下递归）
    # 排除已在 reports/obj 中的文件，避免 SameFileError
    reports_obj_resolved = REPORTS_OBJ.resolve()
    for base in gcda_names:
        for ext in SOURCE_EXTENSIONS:
            cpp_name = base + ext
            candidates = [
                c for c in SRC_ROOT.rglob(cpp_name)
                if reports_obj_resolved not in c.resolve().parents and c.resolve() != reports_obj_resolved
            ]
            if candidates:
                dst = REPORTS_OBJ / cpp_name
                if candidates[0].resolve() != dst.resolve():
                    shutil.copy2(candidates[0], dst)
                print(f"  已拷贝 cpp: {cpp_name}")
                break
        else:
            print(f"  未找到源码: {base}.cpp/.c/...")

    # 4) 在 reports/obj 内对每个 cpp 执行 gcov --object-directory . <cpp>
    cpp_files = []
    for ext in SOURCE_EXTENSIONS:
        cpp_files.extend(REPORTS_OBJ.glob(f"*{ext}"))
    if not cpp_files:
        print("reports/obj 内无 cpp 文件，跳过 gcov。")
        return 0

    gcov_exe = str(GCOV_PATH) if GCOV_PATH.is_file() else "gcov"
    if GCOV_PATH.is_file():
        print(f"使用 gcov: {GCOV_PATH}")
    print("在 reports/obj 内执行 gcov ...")
    orig_cwd = os.getcwd()
    try:
        os.chdir(REPORTS_OBJ)
        for cpp in cpp_files:
            r = subprocess.run(
                [gcov_exe, "--object-directory", ".", cpp.name],
                capture_output=True,
                text=True,
                timeout=60,
            )
            if r.returncode == 0:
                print(f"  gcov 完成: {cpp.name}")
            else:
                print(f"  gcov 失败: {cpp.name} - {r.stderr[:200] if r.stderr else r.stdout[:200]}")
    finally:
        os.chdir(orig_cwd)

    print()
    print("覆盖率数据已生成，可用 analyze 查看统计：")
    print("  python3 .claude/skills/ohtest/coverage_analysis.py analyze " + str(REPORTS_OBJ))
    return 0


def run_fuzztest(testsuite: str, product: str = "rk3568") -> int:
    """调用 fuzztest.py 在设备上执行带覆盖率的 fuzz 测试。"""
    fuzztest_py = SCRIPT_DIR / "fuzztest.py"
    if not fuzztest_py.is_file():
        print(f"未找到 fuzztest.py: {fuzztest_py}", file=sys.stderr)
        return 1
    cmd = [sys.executable, str(fuzztest_py), "run", "-ts", testsuite, "-p", product, "--coverage"]
    print("执行 fuzz 测试（带覆盖率）...")
    print("  " + " ".join(cmd))
    try:
        r = subprocess.run(cmd, cwd=str(SRC_ROOT), env=os.environ.copy(), timeout=300)
        return r.returncode
    except subprocess.TimeoutExpired:
        print("fuzz 测试执行超时（300s）。", file=sys.stderr)
        return 124


def cmd_clear_analyze(
    product: str = "rk3568",
    device_id: Optional[str] = None,
    search_roots: Optional[List[str]] = None,
) -> int:
    """技能1：清除分析结果，重新从设备拉取 gcda 并生成 .gcov，再分析。"""
    print("=== 清除分析结果并再次分析 ===\n")
    clear_reports_obj()
    print()
    ret = run_coverage(product=product, device_id=device_id, search_roots=search_roots)
    if ret != 0:
        return ret
    print()
    return analyze_coverage(REPORTS_OBJ)


def cmd_clear_rerun_fuzz_analyze(
    testsuite: str = "GetAppStatsMahFuzzTest",
    product: str = "rk3568",
    device_id: Optional[str] = None,
    search_roots: Optional[List[str]] = None,
) -> int:
    """技能2：清除分析结果，重新在设备上运行 fuzz 测试（带覆盖率），再拉取 gcda 生成 .gcov 并分析。"""
    print("=== 清除分析结果、重新运行 fuzztest 并分析 ===\n")
    clear_reports_obj()
    print()
    ret = run_fuzztest(testsuite=testsuite, product=product)
    if ret != 0:
        print("fuzz 测试未成功，仍尝试拉取已有 gcda 并分析。", file=sys.stderr)
    print()
    ret2 = run_coverage(product=product, device_id=device_id, search_roots=search_roots)
    if ret2 != 0:
        return ret2
    print()
    return analyze_coverage(REPORTS_OBJ)


def _parse_gcov_file(gcov_path: Path) -> Tuple[int, int]:
    """解析单个 .gcov 文件，返回 (可执行行数, 已覆盖行数)。"""
    executable = 0
    covered = 0
    try:
        text = gcov_path.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return 0, 0
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("-:    0:"):
            continue
        parts = line.split(":", 2)
        if len(parts) < 2:
            continue
        execution_count = parts[0].strip()
        if execution_count == GCOV_NON_EXECUTABLE_MARKER:
            continue
        executable += 1
        if execution_count != GCOV_UNEXECUTED_MARKER and execution_count.isdigit():
            if int(execution_count) > 0:
                covered += 1
    return executable, covered


def _is_source_gcov(name: str) -> bool:
    """只保留源码 .gcov（过滤头文件等）。"""
    if not name.endswith(".gcov"):
        return False
    base = name[:-5]
    for ext in SOURCE_EXTENSIONS:
        if base.endswith(ext):
            return True
    return False


def analyze_coverage(reports_obj_dir: Path) -> int:
    """对目录下已有 .gcov 做覆盖率分析并打印统计。"""
    if not reports_obj_dir.is_dir():
        print(f"目录不存在: {reports_obj_dir}", file=sys.stderr)
        return 1

    gcov_files = [
        Path(p)
        for p in glob.glob(str(reports_obj_dir / PATTERN_GCOV))
        if _is_source_gcov(os.path.basename(p))
    ]

    if not gcov_files:
        gcda_files = list(reports_obj_dir.glob("*.gcda"))
        if gcda_files:
            print("当前目录下没有 .gcov 报告文件，但有 .gcda 数据。")
            print("请先执行: python3 .claude/skills/ohtest/coverage_analysis.py run")
            return 1
        print(f"目录下未找到可用的 .gcov 文件: {reports_obj_dir}")
        return 1

    total_executable = 0
    total_covered = 0
    file_stats = []

    for gcov_path in gcov_files:
        exe, cov = _parse_gcov_file(gcov_path)
        total_executable += exe
        total_covered += cov
        percent = (cov / exe * 100) if exe > 0 else 0
        file_stats.append(
            {"file": gcov_path.name, "executable": exe, "covered": cov, "percent": percent}
        )

    file_stats.sort(key=lambda x: x["percent"], reverse=True)

    print("=== 覆盖率统计（测试结果覆盖率分析） ===")
    print(f"数据目录: {reports_obj_dir}")
    print()
    print(f"{'文件名':<40} {'可执行':<8} {'已覆盖':<8} {'覆盖率':<8}")
    print("-" * 65)
    for s in file_stats:
        print(f"{s['file']:<40} {s['executable']:<8} {s['covered']:<8} {s['percent']:<7.1f}%")
    print("-" * 65)
    if total_executable > 0:
        overall = total_covered / total_executable * 100
        print(f"{'合计':<40} {total_executable:<8} {total_covered:<8} {overall:<7.1f}%")
        if overall >= COVERAGE_EXCELLENT_THRESHOLD:
            grade = "优秀 🎉"
        elif overall >= COVERAGE_GOOD_THRESHOLD:
            grade = "良好 👍"
        elif overall >= COVERAGE_FAIR_THRESHOLD:
            grade = "一般 📊"
        else:
            grade = "较低 ⚠️"
        print()
        print(f"整体覆盖率: {overall:.1f}% （{grade}）")
    else:
        print("无可执行代码统计。")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(
        description="测试结果覆盖率分析：从设备拉取 gcda → 拷贝 gcno/cpp → gcov 生成报告；或解析已有 .gcov 统计。",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  python3 coverage_analysis.py run
  python3 coverage_analysis.py run -p rk3568
  python3 coverage_analysis.py analyze
  python3 coverage_analysis.py clear-analyze
  python3 coverage_analysis.py clear-rerun-fuzz-analyze -ts GetAppStatsMahFuzzTest
        """,
    )
    parser.add_argument("--version", action="version", version=f"%(prog)s {VERSION}")
    subparsers = parser.add_subparsers(dest="command", help="命令")

    subparsers.add_parser("help", help="显示帮助").set_defaults(which="help")

    run_parser = subparsers.add_parser("run", help="从设备拉取 gcda，拷贝 gcno/cpp，在 reports/obj 内执行 gcov")
    run_parser.add_argument("-p", "--product", default="rk3568", help="产品名，默认 rk3568")
    run_parser.add_argument("--device", default=None, help="指定设备 ID，默认使用第一个")
    run_parser.add_argument(
        "--search-root",
        action="append",
        dest="search_roots",
        metavar="PATH",
        help="设备上查找 *.gcda 的目录，可多次指定；不指定时用本地根（如 /root/ohos）及 /data/gcov/<本地根>",
    )

    analyze_parser = subparsers.add_parser("analyze", help="对已有 .gcov 目录做覆盖率分析")
    analyze_parser.add_argument(
        "path",
        nargs="?",
        default=None,
        help="reports/obj 或 obj 目录，默认 developer_test/reports/obj",
    )

    clear_analyze_parser = subparsers.add_parser(
        "clear-analyze",
        help="清除分析结果，重新从设备拉取 gcda 并生成 .gcov，再分析",
    )
    clear_analyze_parser.add_argument("-p", "--product", default="rk3568", help="产品名")
    clear_analyze_parser.add_argument("--device", default=None, help="指定设备 ID")
    clear_analyze_parser.add_argument(
        "--search-root",
        action="append",
        dest="search_roots",
        metavar="PATH",
        help="设备上查找 *.gcda 的目录，可多次指定",
    )

    clear_rerun_parser = subparsers.add_parser(
        "clear-rerun-fuzz-analyze",
        help="清除分析结果，重新在设备上运行 fuzz 测试（带覆盖率），再拉取 gcda 并分析",
    )
    clear_rerun_parser.add_argument("-ts", "--testsuite", default="GetAppStatsMahFuzzTest", help="fuzz 测试套名")
    clear_rerun_parser.add_argument("-p", "--product", default="rk3568", help="产品名")
    clear_rerun_parser.add_argument("--device", default=None, help="指定设备 ID")
    clear_rerun_parser.add_argument(
        "--search-root",
        action="append",
        dest="search_roots",
        metavar="PATH",
        help="设备上查找 *.gcda 的目录，可多次指定",
    )

    args = parser.parse_args()

    if args.command is None or args.command == "help" or getattr(args, "which", None) == "help":
        parser.print_help()
        return 0

    if args.command == "run":
        return run_coverage(
            product=args.product,
            device_id=args.device,
            search_roots=getattr(args, "search_roots", None),
        )

    if args.command == "analyze":
        path = args.path
        if path is None:
            path = DEFAULT_ANALYZE_OBJ
        else:
            path = Path(path)
        return analyze_coverage(path)

    if args.command == "clear-analyze":
        return cmd_clear_analyze(
            product=args.product,
            device_id=args.device,
            search_roots=getattr(args, "search_roots", None),
        )

    if args.command == "clear-rerun-fuzz-analyze":
        return cmd_clear_rerun_fuzz_analyze(
            testsuite=args.testsuite,
            product=args.product,
            device_id=args.device,
            search_roots=getattr(args, "search_roots", None),
        )

    parser.print_help()
    return 0


if __name__ == "__main__":
    sys.exit(main())
