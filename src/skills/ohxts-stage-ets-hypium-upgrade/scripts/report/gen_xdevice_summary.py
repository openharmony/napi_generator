#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从 Hypium parsed_summary.json 生成【官方 xdevice 格式】summary_report.html（合并汇总单页）。

固化自 xts_acts_0622/advancedComponents/gen_xdevice_summary_report.py（ohxtsdynamic/static 同款能力）：
- 使用官方 xdevice 模板（/root/master/test/testfwk/xdevice/src/xdevice/_core/resource/template）
- 输出与设备端 xdevice 完全一致的 summary_report.html（Summary + Test Details，el-table）
- 可选 --shot：生成后自动截图 summary_top.png（Summary→Test Details，最多 10 行 Module）

用法：
  # 合并多个模块（parsed_summary.json），生成官方 xdevice 格式报告
  python3 report/gen_xdevice_summary.py --out <目录> \
      "hap1:SuiteA:<hap1>/parsed_summary.json" "hap2:SuiteB:<hap2>/parsed_summary.json"

  # 生成后自动截图
  python3 report/gen_xdevice_summary.py --shot --out <目录> <条目...>

  # 未执行/失败的模块可直接标记
  python3 report/gen_xdevice_summary.py --out <目录> "hap3:SKIP:设备离线" "hap4:FAIL:安装失败"

输出：SUMMARY_REPORT=<路径>（--shot 时另输出 SCREENSHOT_PNG=<路径>）
"""

from __future__ import annotations

import json
import os
import platform
import shutil
import subprocess
import sys
import urllib.request
from datetime import datetime
from pathlib import Path
from typing import Any

TEMPLATE_ROOT = Path(
    "/root/master/test/testfwk/xdevice/src/xdevice/_core/resource/template"
)
DEFAULT_OUT = Path(
    "/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/xts_reports"
)
DEFAULT_ACTS_ROOT = Path("/root/aiSkill/develop/xts_acts_0622")
DEFAULT_OH_VERSION = "OpenHarmony 7.0.0.31"
# Test.json kits.test-file-name 去掉 .hap 后的 XTS 模块名（ActsAce...Test）
DEFAULT_MODULE_MAP: dict[str, str] = {
    "chip_nowear": "ActsAceEtsModuleChipNoWearTest",
    "counter": "ActsAceEtsModuleCounterTest",
    "chip_static": "ActsAceEtsModuleAdvanceChipStaticTest",
    "counter_static": "ActsAceEtsModuleAdvanceCounterStaticTest",
    "api18_static": "ActsAceEtsModuleStateMangagementApi18StaticTest",
    "customComponent_static": "ActsAceEtsModuleCustomComponentStaticTest",
    "popup_static": "ActsAceEtsModuleDialogPopupStaticTest",
    "menu_static": "ActsAceEtsModuleMenuStaticTest",
    "select_static": "ActsAceEtsModuleDialogSelectStaticTest",
}
CDN_ASSETS = [
    {
        "file": "static/css/element-plus@2.3.4_index.min.css",
        "url": "https://cdn.jsdelivr.net/npm/element-plus@2.3.4/dist/index.min.css",
    },
    {
        "file": "static/element-plus@2.3.4_index.full.min.js",
        "url": "https://cdn.jsdelivr.net/npm/element-plus@2.3.4/dist/index.full.min.js",
    },
    {
        "file": "static/element-plus_icons-" + "v" + "ue@2.0.10_index.iife.min.js",
        "url": "https://cdn.jsdelivr.net/npm/@element-plus/icons-" + "v" + "ue@2.0.10/dist/index.iife.min.js",
    },
    {
        "file": "static/mitt@3.0.1_mitt.umd.min.js",
        "url": "https://cdn.jsdelivr.net/npm/mitt@3.0.1/dist/mitt.umd.min.js",
    },
    {
        "file": "static/" + "v" + "ue@3.2.41_global.min.js",
        "url": "https://cdn.jsdelivr.net/npm/" + "v" + "ue@3.2.41/dist/v" + "ue.global.min.js",
    },
]


def _pct(passed: int, total: int) -> str:
    if total <= 0:
        return "0.00%"
    return f"{100.0 * passed / total:.2f}%"


def _map_status(status: str) -> str:
    s = (status or "").upper()
    if s == "PASS":
        return "passed"
    if s in ("FAIL", "FAILED"):
        return "failure"
    if s == "ERROR":
        return "error"
    if s in ("SKIP", "SKIPPED"):
        return "ignored"
    return "failure"


def _hap_to_xts_module(hap_name: str) -> str:
    if hap_name.endswith(".hap"):
        return hap_name[:-4]
    return hap_name


def _read_xts_module_from_testjson(project_dir: Path) -> str:
    test_json = project_dir / "Test.json"
    if not test_json.is_file():
        return ""
    try:
        data = json.loads(test_json.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return ""
    for kit in data.get("kits") or []:
        if kit.get("type") != "AppInstallKit":
            continue
        names = kit.get("test-file-name") or []
        if isinstance(names, str):
            names = [names]
        for name in names:
            if isinstance(name, str) and name.endswith(".hap") and not name.endswith("TestMain.hap"):
                return _hap_to_xts_module(name)
        for name in names:
            if isinstance(name, str) and name.endswith(".hap"):
                return _hap_to_xts_module(name)
    return ""


def _build_project_module_index(acts_root: Path) -> dict[str, str]:
    index: dict[str, str] = {}
    skip = {"build", "oh_modules", "node_modules", ".hvigor", ".git"}
    roots = [acts_root / "arkui", acts_root / "arkui/ace_ets_module_noui"]
    for root in roots:
        if not root.is_dir():
            continue
        for test_json in root.glob("**/Test.json"):
            if skip.intersection(test_json.parts):
                continue
            proj = test_json.parent.name
            mod_name = _read_xts_module_from_testjson(test_json.parent)
            if mod_name:
                index[proj] = mod_name
    return index


def _module_from_parsed_path(parsed_path: Path, module_index: dict[str, str]) -> str:
    path_str = parsed_path.as_posix()
    best = ""
    best_len = 0
    for proj, mod_name in module_index.items():
        if proj in path_str and len(proj) > best_len:
            best = mod_name
            best_len = len(proj)
    return best


def _resolve_module_name(
    label: str,
    parsed_path: Path | None,
    explicit_name: str,
    module_index: dict[str, str],
) -> str:
    if explicit_name:
        return explicit_name
    if label in DEFAULT_MODULE_MAP:
        return DEFAULT_MODULE_MAP[label]
    if parsed_path and parsed_path.is_file():
        from_path = _module_from_parsed_path(parsed_path, module_index)
        if from_path:
            return from_path
    return label


def _parse_item_third(third: str) -> tuple[str, Path | None, str]:
    """解析 parsed|report|xtsModuleName 三段可选后缀。"""
    parts = third.split("|")
    parsed_raw = parts[0]
    report_html: Path | None = None
    xts_module = ""
    if len(parts) > 1 and parts[1]:
        report_html = Path(parts[1])
    if len(parts) > 2 and parts[2]:
        xts_module = parts[2]
    return parsed_raw, report_html, xts_module


def _format_elapsed(seconds: float) -> str:
    if seconds <= 0:
        return "0s"
    total = int(round(seconds))
    if total < 60:
        return f"{total}s"
    minutes, secs = divmod(total, 60)
    if minutes < 60:
        return f"{minutes}m {secs}s"
    hours, minutes = divmod(minutes, 60)
    return f"{hours}h {minutes}m {secs}s"


def _rel_report_path(out_dir: Path, report_html: Path) -> str:
    try:
        return report_html.resolve().relative_to(out_dir.resolve()).as_posix()
    except ValueError:
        return report_html.as_posix()


def _merge_modules(modules: list[dict[str, Any]], name: str, round_no: int) -> dict[str, Any]:
    """合并多个 parsed 模块为一条 xdevice 模块记录。"""
    if not modules:
        raise ValueError("merge modules 不能为空")
    if len(modules) == 1:
        return modules[0]
    suites: list[dict[str, Any]] = []
    passed = failed = ignored = tests = 0
    time_total = 0.0
    report = ""
    test_start = ""
    test_end = ""
    for mod in modules:
        suites.extend(mod.get("suites") or [])
        passed += int(mod.get("passed") or 0)
        failed += int(mod.get("failed") or 0)
        ignored += int(mod.get("ignored") or 0)
        tests += int(mod.get("tests") or 0)
        time_total += float(mod.get("time") or 0)
        if mod.get("report"):
            report = mod["report"]
        if mod.get("test_start") and not test_start:
            test_start = mod["test_start"]
        if mod.get("test_end"):
            test_end = mod["test_end"]
    return {
        "name": name,
        "report": report,
        "round": round_no,
        "test_type": "OHJSUnitTest",
        "test_start": test_start or "-",
        "test_end": test_end or "-",
        "time": round(time_total, 3),
        "execute_time": _format_elapsed(time_total),
        "tests": tests,
        "passed": passed,
        "failed": failed,
        "blocked": 0,
        "ignored": ignored,
        "unavailable": 0,
        "passingrate": _pct(passed, tests),
        "error": "",
        "logs": {},
        "devices": [],
        "suites": suites,
    }




def _build_suites_from_cases(cases_raw: list, suite: str, name: str) -> tuple[list, int, int, int]:
    """用例列表 → 套件聚合。返回 (suites, passed, failed, ignored)。"""
    suites_map: dict[str, list] = {}
    for c in cases_raw:
        sn = c.get("suite") or suite or name
        suites_map.setdefault(sn, []).append(
            [
                c.get("name", ""),
                sn,
                _map_status(c.get("status", "")),
                (c.get("duration_ms") or 0) / 1000.0,
                c.get("message") or c.get("stack") or "",
                "",
            ]
        )
    suites = []
    passed = failed = ignored = 0
    for sn, cases in suites_map.items():
        sp = sum(1 for x in cases if x[2] == "passed")
        sf = sum(1 for x in cases if x[2] in ("failure", "error"))
        si = sum(1 for x in cases if x[2] == "ignored")
        st = len(cases)
        passed += sp
        failed += sf
        ignored += si
        suites.append({
            "name": sn, "report": "", "time": sum(x[3] for x in cases),
            "tests": st, "passed": sp, "failed": sf, "blocked": 0, "ignored": si,
            "passingrate": _pct(sp, st), "cases": cases,
        })
    return suites, passed, failed, ignored


def _suite_from_summary(summary: dict, suite: str, name: str) -> dict:
    """无用例明细时按 summary 生成套件（仅统计）。"""
    passed = int(summary.get("pass_count") or 0)
    failed = int(summary.get("failure") or 0) + int(summary.get("error") or 0)
    ignored = int(summary.get("ignore") or 0)
    total = int(summary.get("total") or (passed + failed + ignored))
    return {
        "name": suite or name, "report": "",
        "time": (summary.get("duration_ms") or 0) / 1000.0,
        "tests": total, "passed": passed, "failed": failed,
        "blocked": 0, "ignored": ignored,
        "passingrate": _pct(passed, total), "cases": [],
    }




def _time_range(parsed_path: Path, test_start: str, test_end: str) -> tuple[str, str]:
    """测试时间范围：缺省时用文件 mtime。"""
    if not test_start:
        test_start = datetime.fromtimestamp(parsed_path.stat().st_mtime).strftime("%Y-%m-%d %H:%M:%S")
    if not test_end:
        test_end = test_start
    return test_start, test_end


def _rel_report_link(report_html: Path | None) -> str:
    """报告相对链接。"""
    if report_html and report_html.is_file():
        return report_html.as_posix()
    return ""


def _module_from_parsed(
    name: str,
    suite: str,
    parsed_path: Path,
    *,
    round_no: int = 1,
    error: str = "",
    report_html: Path | None = None,
    test_start: str = "",
    test_end: str = "",
) -> dict[str, Any]:
    data = json.loads(parsed_path.read_text(encoding="utf-8"))
    cases_raw = data.get("cases") or []
    summary = data.get("summary") or {}
    suites, passed, failed, ignored = _build_suites_from_cases(cases_raw, suite, name)
    if not suites and summary:
        passed = int(summary.get("pass_count") or 0)
        failed = int(summary.get("failure") or 0) + int(summary.get("error") or 0)
        ignored = int(summary.get("ignore") or 0)
        suites.append(_suite_from_summary(summary, suite, name))
    tests = passed + failed + ignored
    if tests == 0 and error:
        tests = 1
        failed = 1
    unavailable = 1 if error and tests == 0 else 0
    mod_time = sum(s.get("time", 0) for s in suites)
    execute_time = _format_elapsed(mod_time)
    test_start, test_end = _time_range(parsed_path, test_start, test_end)
    report_link = _rel_report_link(report_html)
    return {
        "name": name,
        "report": report_link,
        "round": round_no,
        "test_type": "OHJSUnitTest",
        "test_start": test_start,
        "test_end": test_end,
        "time": mod_time,
        "execute_time": execute_time,
        "tests": tests,
        "passed": passed,
        "failed": failed,
        "blocked": 0,
        "ignored": ignored,
        "unavailable": unavailable,
        "passingrate": _pct(passed, tests) if tests else "0.00%",
        "error": error,
        "logs": {},
        "devices": [],
        "suites": suites,
    }


def _ensure_template(out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    if not TEMPLATE_ROOT.is_dir():
        raise FileNotFoundError(f"xdevice 模板不存在: {TEMPLATE_ROOT}")
    for item in TEMPLATE_ROOT.iterdir():
        dst = out_dir / item.name
        if item.is_dir():
            if dst.exists():
                shutil.rmtree(dst)
            shutil.copytree(item, dst)
        else:
            shutil.copy2(item, dst)
    for asset in CDN_ASSETS:
        target = out_dir / asset["file"]
        target.parent.mkdir(parents=True, exist_ok=True)
        if target.exists() and target.stat().st_size > 0:
            continue
        urllib.request.urlretrieve(asset["url"], target)


def build_report(
    entries: list[dict[str, Any]],
    out_dir: Path,
    *,
    device: str = "",
    test_type: str = "OHJSUnitTest",
    elapsed_sec: float = 0,
    oh_version: str = DEFAULT_OH_VERSION,
) -> Path:
    if not (out_dir / "summary_report.html").is_file():
        _ensure_template(out_dir)
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    start_ts = datetime.now().timestamp() - max(elapsed_sec, 0)
    test_start = datetime.fromtimestamp(start_ts).strftime("%Y-%m-%d %H:%M:%S")
    modules, summary, exec_total = _summarize_modules(entries, elapsed_sec)
    payload = _build_payload(test_start, now, exec_total, test_type, summary,
                             _device_info(device, oh_version), modules)
    data_js = out_dir / "static" / "data.js"
    data_js.write_text(f"window.reportData = {json.dumps(payload, ensure_ascii=False)}", encoding="utf-8")
    return out_dir / "summary_report.html"


def _summarize_modules(entries: list[dict], elapsed_sec: float) -> tuple[list, dict, float]:
    """模块列表 + 汇总统计。"""
    modules = []
    tot_tests = tot_pass = tot_fail = tot_ign = run_mod = 0
    for ent in entries:
        mod = ent["module"]
        modules.append(mod)
        if mod.get("unavailable"):
            continue
        run_mod += 1
        tot_tests += mod.get("tests", 0)
        tot_pass += mod.get("passed", 0)
        tot_fail += mod.get("failed", 0)
        tot_ign += mod.get("ignored", 0)
    exec_total = elapsed_sec if elapsed_sec > 0 else sum(m.get("time", 0) for m in modules)
    summary = {
        "modules": len(modules), "repeat": 1, "runmodules": run_mod,
        "tests": tot_tests, "passed": tot_pass, "failed": tot_fail,
        "blocked": 0, "ignored": tot_ign,
        "unavailable": sum(1 for m in modules if m.get("unavailable")),
    }
    return modules, summary, exec_total


def _device_info(device: str, oh_version: str) -> list:
    """设备信息列表（有 SN 时）。"""
    if not device:
        return []
    return [{
        "sn": device, "model": device, "type": "phone",
        "platform": "OpenHarmony", "version": oh_version,
    }]


def _build_payload(test_start: str, test_end: str, exec_total: float, test_type: str,
                   summary: dict, devices: list, modules: list) -> dict:
    """data.js payload 组装。"""
    return {
        "exec_info": {
            "test_start": test_start, "test_end": test_end,
            "execute_time": _format_elapsed(exec_total),
            "test_type": test_type, "host_info": platform.platform(), "logs": {},
        },
        "summary": summary, "devices": devices, "modules": modules,
    }




def _skip_fail_module(label: str, suite: str, err: str, idx: int, module_name: str) -> dict:
    """SKIP/FAIL 条目 → 模块记录（unavailable/error 展示）。"""
    return {
        "name": module_name, "report": "", "round": idx, "test_type": "OHJSUnitTest",
        "test_start": "-", "test_end": "-", "time": 0, "execute_time": "-",
        "tests": 0 if suite.upper() == "SKIP" else 1,
        "passed": 0, "failed": 0 if suite.upper() == "SKIP" else 1,
        "blocked": 0, "ignored": 0 if suite.upper() == "FAIL" else 1,
        "unavailable": 1 if suite.upper() == "SKIP" else 0,
        "passingrate": "0.00%", "error": err, "logs": {}, "devices": [], "suites": [],
    }


def _parsed_modules(label: str, suite: str, third: str, idx: int, module_index: dict,
                    acts_root: Path, out_dir: Path) -> tuple[list, str]:
    """parsed.json 条目 → 模块列表（合并/报告链接）。返回 (模块列表, 报告相对路径)。"""
    parsed_raw, report_html, xts_module = _parse_item_third(third or suite)
    parsed_parts = [x.strip() for x in parsed_raw.split("+") if x.strip()]
    parsed_paths = [Path(x) for x in parsed_parts]
    first_p = parsed_paths[0] if parsed_paths else Path(parsed_raw)
    module_name = _resolve_module_name(label, first_p if first_p.is_file() else None,
                                       xts_module, module_index)
    if module_name == label and label not in DEFAULT_MODULE_MAP and not module_index:
        module_index = _build_project_module_index(acts_root)
        module_name = _resolve_module_name(label, first_p if first_p.is_file() else None,
                                           xts_module, module_index)
    sub_mods = []
    for p in parsed_paths:
        if not p.is_file():
            mod = _module_from_parsed(module_name, suite, p, round_no=idx, error=f"无报告: {p}")
            mod["unavailable"] = 1
            return [mod], ""
        sub_mods.append(_module_from_parsed(module_name, suite, p, round_no=idx,
                                            report_html=report_html))
    mod = _merge_modules(sub_mods, module_name, idx) if len(sub_mods) > 1 else sub_mods[0]
    if report_html and report_html.is_file():
        mod["report"] = _rel_report_path(out_dir, report_html)
    elif sub_mods[-1].get("report"):
        mod["report"] = sub_mods[-1]["report"]
    return [mod], mod["report"]


def _run_shot(html: str) -> int:
    """xdevice 报告截图（summary_top.png）。"""
    shot_sh = Path("/root/aiSkill/.claude/skills/xts-develop-master-cycle/scripts/screenshot-xdevice-summary.sh")
    if not shot_sh.is_file():
        print("SCREENSHOT_SKIP=截图脚本不存在", file=sys.stderr)
        return 1
    r = subprocess.run([str(shot_sh), str(html)], capture_output=True, text=True)
    print(r.stdout.strip())
    if r.returncode != 0:
        print(r.stderr.strip(), file=sys.stderr)
        return 1
    return 0


def main() -> int:
    import argparse
    ap = argparse.ArgumentParser(description="生成 xdevice 风格 summary_report.html")
    ap.add_argument("--out", default=str(DEFAULT_OUT), help="报告输出目录")
    ap.add_argument("--device", default=os.environ.get("DEVICE_SN", ""), help="设备 SN")
    ap.add_argument("--version", default=os.environ.get("OHOS_DEVICE_VERSION", DEFAULT_OH_VERSION),
                    help="设备 OpenHarmony 版本")
    ap.add_argument("--acts-root", default=str(DEFAULT_ACTS_ROOT),
                    help="xts_acts 工程根目录，用于从 Test.json 解析模块名")
    ap.add_argument("items", nargs="+",
                    help="label:suite:parsed.json|report.html|ActsModuleName 或 label:SKIP:reason")
    ap.add_argument("--shot", action="store_true", help="生成后自动截图 summary_top.png")
    ns = ap.parse_args()
    out_dir = Path(ns.out)
    acts_root = Path(ns.acts_root)
    module_index: dict[str, str] = {}
    entries = []
    elapsed_total = 0.0
    for idx, item in enumerate(ns.items, start=1):
        parts = item.split(":", 2)
        if len(parts) < 2:
            print(f"跳过无效项: {item}", file=sys.stderr)
            continue
        label, suite = parts[0], parts[1]
        third = parts[2] if len(parts) > 2 else ""
        module_name = _resolve_module_name(label, None, "", module_index)
        if module_name == label and label not in DEFAULT_MODULE_MAP and not module_index:
            module_index = _build_project_module_index(acts_root)
            module_name = _resolve_module_name(label, None, "", module_index)
        if suite.upper() in ("SKIP", "FAIL"):
            entries.append({"module": _skip_fail_module(
                label, suite, third or "未执行", idx, module_name)})
            continue
        mods, _ = _parsed_modules(label, suite, third, idx, module_index, acts_root, out_dir)
        if not mods:
            continue
        elapsed_total += float(mods[0].get("time", 0))
        entries.append({"module": mods[0]})
    html = build_report(entries, out_dir, device=ns.device,
                        elapsed_sec=elapsed_total, oh_version=ns.version)
    print(f"SUMMARY_REPORT={html}")
    if ns.shot:
        return _run_shot(html)
    return 0





if __name__ == "__main__":
    sys.exit(main())
