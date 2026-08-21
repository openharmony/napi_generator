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


def sync_xlsx() -> int:
    latest = latest_from_tsv()
    wb = load_workbook(XLSX)
    ws = wb["需求1进度总表"]
    updated = 0
    main_status = {}
    for row in ws.iter_rows(min_row=2):
        p = row[2].value or ""
        if p.startswith("ability/"):
            main_status[p] = (row[6].value, row[8].value)
    hap_to_main = build_hap_to_main_map()
    for row in ws.iter_rows(min_row=2):
        p = row[2].value
        if p in latest:
            status, passed, total, err, report = latest[p]
            tst = {"PASS": "通过", "FAIL": "失败", "BUILD_FAIL": "编译失败",
                   "INSTALL_FAIL": "安装失败", "DEVICE_OFFLINE": "设备离线",
                   "NO_RESULT": "无结果", "SIGN_FAIL": "签名失败"}.get(status, status)
            row[6].value = tst
            row[7].value = f"{passed}/{total}" if passed != "-" else ""
            row[9].value = report if report != "-" else ""
            # 备注列（第 11 列）：失败详情同步（第 5 点，2026-08-18 固化）
            # PASS 清空备注；失败/限制类写入 err 详情（截断 200 字）
            if status == "PASS":
                if row[10].value and str(row[10].value).startswith("[auto]"):
                    row[10].value = None
            elif err and err != "-":
                note = str(err)[:200]
                cur_note = str(row[10].value or "")
                # 已判定限制/主hap未通过的备注保留（不覆盖，2026-08-19）
                if "已判定限制" in cur_note or "主hap暂未测试通过" in cur_note or "主包(" in cur_note:
                    pass
                elif cur_note and not cur_note.startswith("[auto]"):
                    row[10].value = f"{cur_note}；[auto]{note}"
                else:
                    row[10].value = f"[auto]{note}"
            comp = row[4].value
            # [manual] 手工判定保护：备注含"已通过"判是，否则保持（映射未命中的人工补偿，2026-08-19）
            if str(row[10].value or "").startswith("[manual]"):
                if "已通过" in str(row[10].value):
                    row[8].value = "是"
                continue
            pr = "是" if (comp == "编译通过" and tst == "通过") else "否"
            if pr == "否" and tst == "SKIP" and p.startswith("ability/"):
                name = os.path.basename(p).lower()
                main_names: list[str] = []
                for hap, mains in hap_to_main.items():
                    if name in hap.lower() or hap.lower() in name:
                        main_names = mains
                        if any(main_status.get(m, ("", ""))[0] == "通过" for m in mains):
                            pr = "是"
                            break
                # 口径（2026-08-18 用户确认）：辅助hap满足PR = 主hap测试通过；
                # 主hap未通过/未列入表格时备注写明"主hap暂未测试通过"
                if pr == "否" and main_names:
                    note = "主hap暂未测试通过：" + "、".join(m.rsplit("/", 1)[-1] for m in main_names)
                    cur = row[10].value or ""
                    if cur:
                        row[10].value = f"{cur}；[auto]{note}" if not str(cur).startswith("[auto]") else f"[auto]{note}"
                    else:
                        row[10].value = f"[auto]{note}"
            row[8].value = pr
            updated += 1
    wb.save(XLSX)
    return updated


def main() -> None:
    print(f"Excel 已更新 {sync_xlsx()} 行")


if __name__ == "__main__":
    main()
