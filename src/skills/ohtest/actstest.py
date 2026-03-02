#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ACTS 测试运行技能：在 out/rk3568/suites/acts/acts 下执行 run.sh run -l <suite名>，
解析 ResultReporter 的 Test Summary，并定位最新 reports 下的 summary_report.html / summary_report.xml。

Usage:
    python3 actstest.py run <suite名> [--src-dir PATH] [--product-name rk3568] [--acts-dir PATH]
    python3 actstest.py run ActsAACommandTest
    python3 actstest.py run ActsAACommandPrintOneTest --src-dir ~/ohos/6.1release/src
    python3 actstest.py help
"""

import argparse
import re
import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
# 技能在 src/.claude/skills/ohtest/，源码根为 src（上三级）
SRC_ROOT = SCRIPT_DIR.parent.parent.parent

# 默认 ACTS 运行目录：<src_root>/out/<product>/suites/acts/acts
def default_acts_dir(product_name: str = "rk3568", src_root: Path | None = None) -> Path:
    root = (src_root if src_root is not None else SRC_ROOT)
    return root / "out" / product_name / "suites" / "acts" / "acts"

# 日志中 ResultReporter 的 Test Summary 行，解析 total / passed / failed / blocked
SUMMARY_RE = re.compile(
    r"\[ResultReporter\].*?\[Test Summary:.*?total:\s*(\d+).*?passed:\s*(\d+).*?failed:\s*(\d+).*?blocked:\s*(\d+)",
    re.DOTALL,
)
# 兼容单行
SUMMARY_LINE_RE = re.compile(
    r"total:\s*(\d+),\s*passed:\s*(\d+),\s*failed:\s*(\d+),\s*blocked:\s*(\d+)",
)


def parse_summary_from_text(text: str) -> dict | None:
    """从完整输出文本中解析 Test Summary，返回 {total, passed, failed, blocked} 或 None。"""
    for line in text.splitlines():
        if "Test Summary:" in line and "ResultReporter" in line:
            m = SUMMARY_LINE_RE.search(line)
            if m:
                return {
                    "total": int(m.group(1)),
                    "passed": int(m.group(2)),
                    "failed": int(m.group(3)),
                    "blocked": int(m.group(4)),
                }
    return None


def find_latest_report_dir(acts_dir: Path) -> Path | None:
    """reports 下按目录名（时间戳）取最新的一个，如 2026-02-25-15-14-08。"""
    reports = acts_dir / "reports"
    if not reports.is_dir():
        return None
    subs = [d for d in reports.iterdir() if d.is_dir()]
    if not subs:
        return None
    return max(subs, key=lambda p: p.name)


def cmd_run(
    suite_name: str,
    product_name: str = "rk3568",
    acts_dir: Path | None = None,
    src_dir: Path | None = None,
) -> int:
    """
    在 acts 目录下执行 ./run.sh run -l <suite_name>，
    解析输出中的 Test Summary，并打印最新 reports 下的 summary 文件路径。
    src_dir 指定时作为工程 src 根，用于计算默认 acts 目录；acts_dir 指定时优先使用。
    """
    suite_name = (suite_name or "").strip()
    if not suite_name:
        print("请指定要运行的 ACTS 用例名，例如: ActsAACommandTest", file=sys.stderr)
        return 1

    src_root = (src_dir if src_dir else None)
    run_dir = acts_dir if acts_dir is not None else default_acts_dir(product_name, src_root)
    run_dir = run_dir.resolve()
    if not run_dir.is_dir():
        print(f"ACTS 运行目录不存在: {run_dir}", file=sys.stderr)
        print("请先完成 ACTS 编译（如 ohbuild build-acts ActsAACommandTest）并确认 out 下已有 suites/acts/acts。", file=sys.stderr)
        return 1

    run_sh = run_dir / "run.sh"
    if not run_sh.is_file():
        print(f"未找到 run.sh: {run_sh}", file=sys.stderr)
        return 1

    cmd = ["./run.sh", "run", "-l", suite_name]
    cmd_str = " ".join(cmd)
    print(f"工作目录: {run_dir}")
    print(f"执行命令: {cmd_str}")
    print()

    proc = subprocess.run(
        cmd,
        cwd=run_dir,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    out = (proc.stdout or "") + "\n" + (proc.stderr or "")
    # 实时感：可把 stdout 打出来（这里为便于解析已 capture，只打最后摘要）
    if proc.returncode != 0:
        print(out[-8000:] if len(out) > 8000 else out)  # 末尾一段便于看错
        print(f"\n[退出码: {proc.returncode}]", file=sys.stderr)
        # 仍尝试解析 summary 和报告路径
    else:
        # 成功时只打印与结果相关的几行 + summary
        for line in out.splitlines():
            if "ResultReporter" in line or "Test Summary" in line or "build  successful" in line.lower() or "failed" in line.lower():
                print(line)

    summary = parse_summary_from_text(out)
    if summary:
        print()
        print("--- Test Summary ---")
        print(f"  总用例(total):   {summary['total']}")
        print(f"  通过(passed):    {summary['passed']}")
        print(f"  失败(failed):    {summary['failed']}")
        print(f"  阻塞(blocked):   {summary['blocked']}")
        print("--------------------")
    else:
        print("\n(未在输出中解析到 [ResultReporter] Test Summary 行)")

    latest = find_latest_report_dir(run_dir)
    if latest:
        html_path = latest / "summary_report.html"
        xml_path = latest / "summary_report.xml"
        print()
        print("--- 测试结果目录（时间最近） ---")
        print(f"  {latest}")
        if html_path.is_file():
            print(f"  报告(HTML): {html_path}")
        if xml_path.is_file():
            print(f"  用例(XML):  {xml_path}")
        print("--------------------------------")
    else:
        print("\n未找到 reports 下时间戳目录。")

    return proc.returncode


def show_help() -> None:
    print("""ACTS 测试运行 (actstest)
用法:
  python3 actstest.py run <suite名> [--product-name rk3568] [--acts-dir PATH]
  python3 actstest.py help

说明:
  - 在 <src_dir>/out/<product>/suites/acts/acts 下执行: ./run.sh run -l <suite名>（未指定 --src-dir 时使用脚本所在工程）
  - --src-dir 指定工程 src 根路径，如 ~/ohos/6.1release/src，据此确定运行目录
  - 从输出中解析 [ResultReporter] Test Summary: total / passed / failed / blocked
  - 执行目录下 reports 中时间戳最新的目录为本次结果；summary_report.html 为测试报告，summary_report.xml 为各用例结果

示例:
  python3 actstest.py run ActsAACommandTest
  python3 actstest.py run ActsAACommandPrintOneTest --src-dir ~/ohos/6.1release/src
  python3 actstest.py run ActsAACommandTest --product-name rk3568
""")


def main() -> int:
    args = sys.argv[1:]
    if not args or args[0].lower() in ("help", "-h", "--help"):
        show_help()
        return 0

    if args[0].lower() != "run":
        print(f"未知子命令: {args[0]}，请使用 run 或 help", file=sys.stderr)
        return 1

    rest = args[1:]  # 去掉 "run"
    parser = argparse.ArgumentParser(description="Run ACTS test suite")
    parser.add_argument("suite_name", nargs="?", default="", help="ACTS 用例/套件名，如 ActsAACommandTest")
    parser.add_argument("--src-dir", type=Path, default=None, help="工程 src 根路径，如 ~/ohos/6.1release/src，用于确定 out/ 下的 acts 目录")
    parser.add_argument("--product-name", default="rk3568", help="产品名，用于默认 acts 目录 out/<product>/suites/acts/acts")
    parser.add_argument("--acts-dir", type=Path, default=None, help="ACTS 运行目录，指定后优先于 --src-dir 计算")
    parsed, unknown = parser.parse_known_args(rest)
    suite_name = (parsed.suite_name or "").strip() or (unknown[0] if unknown else "")
    src_dir = Path(parsed.src_dir).expanduser().resolve() if parsed.src_dir else None

    return cmd_run(
        suite_name=suite_name,
        product_name=parsed.product_name,
        acts_dir=parsed.acts_dir,
        src_dir=src_dir,
    )


if __name__ == "__main__":
    sys.exit(main())
