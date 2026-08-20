#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""进度快照播报：输出当前测试进度到 进度播报.md（迁移自 progress_report.sh，python 化）。

每 3 分钟刷新一次（test_batch 自动调 refresh_snapshot()）；也可手动执行。
"""
from __future__ import annotations

import re
import sys
from collections import Counter
from datetime import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.paths import CURRENT_TXT, BROADCAST_MD, PROGRESS_DIR, REPORT_ROOT, TSV  # noqa: E402


def _status_newer(cur: str, new: str) -> bool:
    """状态升级规则：PASS 优先；DEVICE_OFFLINE/BUILD_FAIL 可被更新状态覆盖。"""
    if new == "PASS" and cur != "PASS":
        return True
    if cur == "DEVICE_OFFLINE" and new != "DEVICE_OFFLINE":
        return True
    if cur == "BUILD_FAIL" and new not in ("DEVICE_OFFLINE", "BUILD_FAIL"):
        return True
    return False


def latest_status() -> dict[str, str]:
    """每工程最新状态（PASS 优先，DEVICE_OFFLINE 不覆盖）。"""
    latest: dict[str, str] = {}
    for line in TSV.read_text(errors="replace").splitlines():
        parts = line.rstrip("\n").split("\t")
        if len(parts) < 3:
            continue
        rel, status = parts[1], parts[2]
        if rel not in latest or _status_newer(latest[rel], status):
            latest[rel] = status
    return latest


def refresh_snapshot() -> str:
    """生成 进度播报.md。返回文件路径。"""
    st = latest_status()
    c = Counter(st.values())
    pass_n = c.get("PASS", 0)
    report_cnt = sum(1 for p in (REPORT_ROOT / "ability").glob("*.txt"))
    recent = []
    try:
        log = (PROGRESS_DIR / "batch_test.log").read_text(errors="replace").splitlines()
        for line in log:
            if "PASS" in line and "SKIP" not in line and "SUMMARY" not in line:
                recent.append(line.strip())
    except OSError:
        recent = []
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    md = f"""# 📊 需求1 HAP 测试进度播报
更新时间: {ts}

## 测试结果统计（按 HAP，最新状态）
| 状态 | 数量 |
|------|------|
| ✅ 通过（含历史PR） | {pass_n} |
| ❌ 测试失败（有用例失败） | {c.get('FAIL', 0)} |
| ⏭️ SKIP（辅助工程无测试） | {c.get('SKIP', 0)} |
| 🔧 编译失败 | {c.get('BUILD_FAIL', 0)} |
| 📦 安装失败 | {c.get('INSTALL_FAIL', 0)} |
| ⏱️ 无结果/挂起 | {c.get('NO_RESULT', 0)} |
| 📡 设备离线 | {c.get('DEVICE_OFFLINE', 0)} |
| 其他 | {sum(v for k, v in c.items() if k not in ('PASS','FAIL','SKIP','BUILD_FAIL','INSTALL_FAIL','NO_RESULT','DEVICE_OFFLINE'))} |

## 报告留存
- 留存报告数: {report_cnt}（目录: 按子系统划分的报告/ability/）
- 表格: 需求1进度表.xlsx（已同步）

## 最近活动
{chr(10).join('  ' + l for l in recent[-5:]) if recent else '  (无)'}
"""
    BROADCAST_MD.write_text(md)
    return str(BROADCAST_MD)


def summarize() -> str:
    """会话播报摘要（给 Agent/用户看的一行式统计）。"""
    st = latest_status()
    c = Counter(st.values())
    total = len(st)
    return (f"进度 {total} 工程: PASS {c.get('PASS', 0)} | FAIL {c.get('FAIL', 0)} | "
            f"BUILD_FAIL {c.get('BUILD_FAIL', 0)} | INSTALL_FAIL {c.get('INSTALL_FAIL', 0)} | "
            f"NO_RESULT {c.get('NO_RESULT', 0)} | DEVICE_OFFLINE {c.get('DEVICE_OFFLINE', 0)} | "
            f"SKIP {c.get('SKIP', 0)}")


def main() -> None:
    import argparse
    ap = argparse.ArgumentParser(description="进度快照播报")
    ap.add_argument("--snapshot", action="store_true", help="生成 进度播报.md")
    ap.add_argument("--summary", action="store_true", help="输出会话摘要")
    args = ap.parse_args()
    if args.summary:
        print(summarize())
    else:
        print("进度快照已生成:", refresh_snapshot())


if __name__ == "__main__":
    main()
