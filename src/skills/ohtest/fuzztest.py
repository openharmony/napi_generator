#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ohtest 技能 - 执行 Fuzz 测试。
在正确的工作目录和环境（含 hdc 路径）下调用 developer_test 的 start.sh 执行 FUZZ 用例。

hdc 路径：${OHOS_SDK_PATH}/linux/toolchains，会将其加入 PATH 以便框架找到 hdc。

Usage:
    python3 fuzztest.py run -ts <测试套名> [-p 产品名] [--dry-run]
    python3 fuzztest.py run -ss <子系统> -tp <部件> [-p 产品名]  # 按子系统/部件跑 FUZZ
    python3 fuzztest.py run -ts <测试套名> --coverage  # 需收集覆盖率时可选
    python3 fuzztest.py help
"""

import argparse
import os
import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
SRC_ROOT = SCRIPT_DIR.parent.parent.parent
DEV_TEST_ROOT = SRC_ROOT / "test" / "testfwk" / "developer_test"
SKILL_NAME = "ohtest-fuzztest"
VERSION = "1.0.0"


def _ensure_env(use_coverage: bool = False) -> int:
    """
    设置执行环境：DEVTESTDIR、PATH（加入 OHOS_SDK_PATH/linux/toolchains 以便找到 hdc）。
    返回 0 成功，1 环境缺失。
    """
    os.environ["DEVTESTDIR"] = str(DEV_TEST_ROOT)

    sdk_path = os.environ.get("OHOS_SDK_PATH", "").strip()
    if sdk_path:
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
        # 若目录不存在，仅打印提示，不阻断执行（可能系统 PATH 里已有 hdc）
    else:
        print("提示: 未设置 OHOS_SDK_PATH，请确保 hdc 已在 PATH 中，否则 FUZZ 可能因找不到设备而失败。", file=sys.stderr)
    return 0


def run_fuzz(
    testsuite: str = None,
    product: str = "rk3568",
    coverage: bool = False,
    dry_run: bool = False,
    subsystem: str = None,
    testpart: str = None,
) -> int:
    """在 developer_test 目录下执行 start.sh，运行 FUZZ 测试（可指定测试套名或 -ss/-tp 子系统/部件）。"""
    if not DEV_TEST_ROOT.is_dir():
        print(f"developer_test 目录不存在: {DEV_TEST_ROOT}", file=sys.stderr)
        return 1

    start_sh = DEV_TEST_ROOT / "start.sh"
    if not start_sh.is_file():
        print(f"start.sh 不存在: {start_sh}", file=sys.stderr)
        return 1

    if not testsuite and not subsystem and not testpart:
        print("请指定 -ts 测试套名 或 -ss 子系统 或 -tp 部件（至少其一）。", file=sys.stderr)
        return 1

    _ensure_env(use_coverage=coverage)

    cmd = [
        str(start_sh),
        "-p", product,
        "run",
        "-t", "FUZZ",
    ]
    if testsuite:
        cmd.extend(["-ts", testsuite])
    if subsystem:
        cmd.extend(["-ss", subsystem])
    if testpart:
        cmd.extend(["-tp", testpart])
    if coverage:
        cmd.extend(["-cov", "coverage"])

    if dry_run:
        print("（dry-run）将执行：")
        print("  " + " ".join(cmd))
        print("  工作目录:", DEV_TEST_ROOT)
        print("  PATH 前缀:", os.environ.get("OHOS_SDK_PATH", "<未设置>") + "/linux/toolchains" if os.environ.get("OHOS_SDK_PATH") else "<未设置 OHOS_SDK_PATH>")
        return 0

    try:
        ret = subprocess.run(
            cmd,
            cwd=str(DEV_TEST_ROOT),
            env=os.environ.copy(),
            timeout=3600,  # 60 分钟，fuzz 测试通常需长时间运行
        )
        return ret.returncode
    except subprocess.TimeoutExpired:
        print("执行超时（60 分钟）。", file=sys.stderr)
        return 124
    except FileNotFoundError as e:
        print(f"执行失败: {e}", file=sys.stderr)
        return 127


def main() -> int:
    parser = argparse.ArgumentParser(
        description="执行 OpenHarmony Fuzz 测试（依赖 developer_test/start.sh，需设备与 hdc）。",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  python3 fuzztest.py run -ts GetAppStatsMahFuzzTest
  python3 fuzztest.py run -ts GetAppStatsMahFuzzTest -p rk3568
  python3 fuzztest.py run -ss customization -tp customization -p rk3568
  python3 fuzztest.py run -ss customization -tp customization --dry-run
  python3 fuzztest.py run -ts GetAppStatsMahFuzzTest --coverage
  python3 fuzztest.py run -ts GetAppStatsMahFuzzTest --dry-run

环境:
  设置 OHOS_SDK_PATH 后，会将 ${OHOS_SDK_PATH}/linux/toolchains 加入 PATH，供框架查找 hdc。
  未设置时需确保系统 PATH 中已有 hdc。
        """,
    )
    parser.add_argument("--version", action="version", version=f"%(prog)s {VERSION}")
    subparsers = parser.add_subparsers(dest="command", help="命令")

    subparsers.add_parser("help", help="显示帮助").set_defaults(which="help")

    run_parser = subparsers.add_parser("run", help="执行 FUZZ 测试套或按子系统/部件执行")
    run_parser.add_argument("-ts", "--testsuite", default=None, metavar="NAME", help="测试套名，如 GetAppStatsMahFuzzTest；与 -ss/-tp 至少填其一")
    run_parser.add_argument("-ss", "--subsystem", default=None, metavar="SUBSYSTEM", help="子系统，如 customization，与 start.sh run -t FUZZ -ss 一致")
    run_parser.add_argument("-tp", "--testpart", default=None, metavar="TESTPART", help="部件，如 customization，与 start.sh run -t FUZZ -tp 一致")
    run_parser.add_argument("-p", "--product", default="rk3568", help="产品名，默认 rk3568")
    run_parser.add_argument("--coverage", action="store_true", help="可选：附加 -cov coverage 以收集覆盖率（拉取与分析时需设备上有 gcda）")
    run_parser.add_argument("--dry-run", action="store_true", help="仅打印将要执行的命令，不实际执行")

    args = parser.parse_args()

    if args.command is None or args.command == "help" or getattr(args, "which", None) == "help":
        parser.print_help()
        return 0

    if args.command == "run":
        return run_fuzz(
            testsuite=args.testsuite,
            product=args.product,
            coverage=args.coverage,
            dry_run=args.dry_run,
            subsystem=args.subsystem,
            testpart=args.testpart,
        )

    parser.print_help()
    return 0


if __name__ == "__main__":
    sys.exit(main())
