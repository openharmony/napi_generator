#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""兼容包装：gate_review.py v1 入口，逻辑已迁 pipeline.py（ohxtscapi/ohxtsdynamic/ohxtsstatic 的 ohxtsflow.py 经 from gate_review import run_post_test_gate_pipeline 引用）。"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent / "checkers"))

from pipeline import run_post_test_gate_pipeline  # noqa: E402,F401
from gate_check import _detect_profile  # noqa: E402


def detect_project_profile(project) -> str:
    """兼容 v1 语义：entry/src/main/cpp 存在 .cpp → 'capi'，否则 'ets'。"""
    return _detect_profile(Path(project))


if __name__ == "__main__":
    import argparse

    ap = argparse.ArgumentParser(description="XTS 测试通过后门禁 review + commit（v1 兼容入口）")
    ap.add_argument("project", help="HAP 工程根目录")
    ap.add_argument("-s", "--suite", default="")
    ap.add_argument("--scope", default="xts")
    ap.add_argument("--skip-gate", action="store_true")
    ap.add_argument("--skip-commit", action="store_true")
    ap.add_argument("--skip-test-check", action="store_true")
    ap.add_argument("--commit-title", default="")
    ap.add_argument("--commit-body", default="")
    ns = ap.parse_args()
    sys.exit(run_post_test_gate_pipeline(
        ns.project, suite=ns.suite, scope=ns.scope, skip_gate=ns.skip_gate,
        skip_commit=ns.skip_commit, commit_title=ns.commit_title,
        commit_body=ns.commit_body, require_tests_passed=not ns.skip_test_check))
