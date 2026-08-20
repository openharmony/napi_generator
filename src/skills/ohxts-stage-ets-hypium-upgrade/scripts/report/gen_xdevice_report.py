#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""xdevice/hypium HTML 报告生成（固化自 ohxtsstatic/hypium_html_report.py，自包含）。

用法：
  python3 report/gen_xdevice_report.py <测试日志> [--project <工程>] [--suite <套件>] [--device <设备>] [--out <目录>]

输出：REPORT_HTML=<路径>（summary_report.html）+ parsed_summary.json（供截图门禁/报告留存）。
test_one.py --html 自动调用本脚本（测试通过后生成）。
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))


def main() -> None:
    ap = argparse.ArgumentParser(description="xdevice 日志 → HTML 报告")
    ap.add_argument("log", help="测试日志文件（aa test / xdevice 输出）")
    ap.add_argument("--project", default="")
    ap.add_argument("--suite", default="")
    ap.add_argument("--device", default="")
    ap.add_argument("--out", default="", help="输出目录（默认按工程/套件规则）")
    args = ap.parse_args()

    from hypium_html_report import write_report_from_log
    html = write_report_from_log(
        Path(args.log),
        project=args.project,
        suite=args.suite,
        device=args.device,
        out_dir=args.out or None,
    )
    print(f"REPORT_HTML={html}")


if __name__ == "__main__":
    main()
