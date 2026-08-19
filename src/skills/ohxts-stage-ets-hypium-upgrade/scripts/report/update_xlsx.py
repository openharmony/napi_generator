#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从 test_summary.tsv 同步最新测试状态到 Excel（迁移自 dongwei/scripts/update_xlsx.py）。

优先级规则（固化）：history PASS > 真实 PASS > 其他；已有 PASS 后失败不覆盖；DEVICE_OFFLINE 不覆盖。
SKIP 辅助包在主包通过后也判 PR 满足（Test.json kits 映射）。
"""
from __future__ import annotations

import json
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.paths import REPO, TSV, XLSX  # noqa: E402

from openpyxl import load_workbook  # noqa: E402


def latest_from_tsv() -> dict:
    """每工程最新状态（history PASS 最高优先级）。"""
    latest: dict[str, tuple] = {}
    for line in TSV.read_text(errors="replace").splitlines():
        parts = line.rstrip("\n").split("\t")
        if len(parts) < 7:
            continue
        ts, rel, status, passed, total, err, report = parts[:7]
        if rel not in latest:
            latest[rel] = (status, passed, total, err, report)
            continue
        cur = latest[rel]
        if cur[0] == "PASS" and line.startswith("history"):
            continue
        if status == "PASS":
            latest[rel] = (status, passed, total, err, report)
        elif cur[0] == "PASS":
            continue
        elif status == "DEVICE_OFFLINE":
            continue
        else:
            latest[rel] = (status, passed, total, err, report)
    return latest


def build_hap_to_main_map() -> dict[str, list[str]]:
    """辅助包 hap 名 → 主工程相对路径（Test.json kits AppInstallKit）。"""
    hap_to_main: dict[str, list[str]] = {}
    for root, dirs, files in os.walk(str(REPO / "ability")):
        if "oh_modules" in root or "/build/" in root:
            continue
        if "Test.json" in files:
            try:
                d = json.load(open(os.path.join(root, "Test.json")))
            except Exception:
                continue
            for kit in d.get("kits", []):
                if kit.get("type") != "AppInstallKit":
                    continue
                for hap in kit.get("test-file-name", []):
                    hap_to_main.setdefault(os.path.splitext(hap)[0], []).append(
                        os.path.relpath(root, str(REPO)))
    return hap_to_main


_TST_MAP = {"PASS": "通过", "FAIL": "失败", "BUILD_FAIL": "编译失败",
            "INSTALL_FAIL": "安装失败", "DEVICE_OFFLINE": "设备离线",
            "NO_RESULT": "无结果", "SIGN_FAIL": "签名失败"}


def _collect_main_status(ws) -> dict:
    """主工程（ability/ 前缀）行的状态/PR 快照，供 SKIP 辅助包判定。"""
    out = {}
    for row in ws.iter_rows(min_row=2):
        p = row[2].value or ""
        if p.startswith("ability/"):
            out[p] = (row[6].value, row[8].value)
    return out


def _merge_note(cur_note: str, note: str) -> str:
    """备注合并：已判定限制/主hap未测备注保留不覆盖；其余按 [auto] 前缀规则。"""
    if "已判定限制" in cur_note or "主hap暂未测试通过" in cur_note or "主包(" in cur_note:
        return cur_note
    if cur_note and not cur_note.startswith("[auto]"):
        return f"{cur_note}；[auto]{note}"
    return f"[auto]{note}"


def _append_note(cur_note: str, note: str) -> str:
    """备注追加（SKIP 判定用，保持 [auto] 前缀规则）。"""
    if cur_note and not cur_note.startswith("[auto]"):
        return f"{cur_note}；[auto]{note}"
    return f"[auto]{note}"


def _skip_to_pr(p: str, hap_to_main: dict, main_status: dict, row) -> str:
    """SKIP 辅助包 PR 判定：主 hap 测试通过判是，否则备注写明主hap未测。"""
    name = os.path.basename(p).lower()
    main_names: list[str] = []
    for hap, mains in hap_to_main.items():
        if name in hap.lower() or hap.lower() in name:
            main_names = mains
            if any(main_status.get(m, ("", ""))[0] == "通过" for m in mains):
                return "是"
    # 口径（2026-08-18 用户确认）：辅助hap满足PR = 主hap测试通过；
    # 主hap未通过/未列入表格时备注写明"主hap暂未测试通过"
    if main_names:
        note = "主hap暂未测试通过：" + "、".join(m.rsplit("/", 1)[-1] for m in main_names)
        cur = str(row[10].value or "")
        row[10].value = _append_note(cur, note)
    return "否"


def _apply_status(row, latest: dict, hap_to_main: dict, main_status: dict) -> bool:
    """按 TSV 最新状态更新单行（状态/通过率/报告/备注/PR 列）；返回是否更新。"""
    p = row[2].value
    if p not in latest:
        return False
    status, passed, total, err, report = latest[p]
    tst = _TST_MAP.get(status, status)
    row[6].value = tst
    row[7].value = f"{passed}/{total}" if passed != "-" else ""
    row[9].value = report if report != "-" else ""
    # 备注列（第 11 列）：失败详情同步；PASS 清空 [auto] 备注
    if status == "PASS":
        if row[10].value and str(row[10].value).startswith("[auto]"):
            row[10].value = None
    elif err and err != "-":
        note = str(err)[:200]
        row[10].value = _merge_note(str(row[10].value or ""), note)
    comp = row[4].value
    # [manual] 手工判定保护：备注含"已通过"判是，否则保持（映射未命中的人工补偿，2026-08-19）
    if str(row[10].value or "").startswith("[manual]"):
        if "已通过" in str(row[10].value):
            row[8].value = "是"
        return False  # 原逻辑 continue：手工行不计入更新数
    pr = "是" if (comp == "编译通过" and tst == "通过") else "否"
    if pr == "否" and tst == "SKIP" and p.startswith("ability/"):
        pr = _skip_to_pr(p, hap_to_main, main_status, row)
    row[8].value = pr
    return True


def sync_xlsx() -> int:
    latest = latest_from_tsv()
    wb = load_workbook(XLSX)
    ws = wb["需求1进度总表"]
    updated = 0
    main_status = _collect_main_status(ws)
    hap_to_main = build_hap_to_main_map()
    for row in ws.iter_rows(min_row=2):
        if _apply_status(row, latest, hap_to_main, main_status):
            updated += 1
    wb.save(XLSX)
    return updated


def main() -> None:
    print(f"Excel 已更新 {sync_xlsx()} 行")


if __name__ == "__main__":
    main()
