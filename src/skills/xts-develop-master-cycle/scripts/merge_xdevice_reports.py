#!/usr/bin/env python3
"""Merge multiple xdevice report dirs into one official-format summary_report.html.

ONLY allowed HTML report format for multi-HAP / batch delivery.
Forbidden: custom batch_index tables, dark-theme dashboards, hand-written summary pages.

Usage:
  merge_xdevice_reports.py --out <dir> [--name LABEL] <report_dir> [<report_dir> ...]
  merge_xdevice_reports.py --out <dir> --from-tsv results.tsv
    # TSV columns: suite\\tPASS|FAIL\\t/path/to/summary_report.html
"""
from __future__ import annotations

import argparse
import importlib.util
import json
import os
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path


def load_report_data(report_html: Path) -> dict:
    data_js = report_html.parent / "static" / "data.js"
    if not data_js.is_file():
        raise FileNotFoundError(f"missing {data_js}")
    text = data_js.read_text(encoding="utf-8")
    m = re.search(r"window\.reportData\s*=\s*(\{.*\})\s*;?\s*$", text, re.S)
    if not m:
        raise ValueError(f"cannot parse reportData in {data_js}")
    return json.loads(m.group(1))


def parse_dt(s: str) -> datetime:
    return datetime.strptime(s, "%Y-%m-%d %H:%M:%S")


def fmt_elapsed(sec: float) -> str:
    sec = int(round(sec))
    h, rem = divmod(sec, 3600)
    m, s = divmod(rem, 60)
    if h:
        return f"{h}h{m}m{s}s"
    if m:
        return f"{m}m{s}s"
    return f"{s}s"


def resolve_inputs(args: argparse.Namespace) -> list[tuple[str, Path]]:
    """Return list of (label, report_html_path)."""
    items: list[tuple[str, Path]] = []
    if args.from_tsv:
        for line in Path(args.from_tsv).read_text(encoding="utf-8").splitlines()[1:]:
            if not line.strip():
                continue
            parts = line.split("\t")
            suite = parts[0] if parts else ""
            report = parts[2] if len(parts) > 2 else ""
            if not report:
                continue
            p = Path(report)
            if p.is_dir():
                p = p / "summary_report.html"
            items.append((suite, p))
        return items
    for raw in args.report_dirs:
        p = Path(raw)
        if p.is_dir():
            items.append((p.name, p / "summary_report.html"))
        else:
            items.append((p.parent.name, p))
    return items


def os_path_rel(target: str, start: str) -> str:
    return os.path.relpath(target, start)


def os_relpath(target: Path, start: Path) -> str:
    return Path(os_path_rel(str(target), str(start))).as_posix()


def _empty_totals() -> dict[str, int]:
    return {
        "tests": 0,
        "passed": 0,
        "failed": 0,
        "blocked": 0,
        "ignored": 0,
        "unavailable": 0,
    }


def _prepare_out_dir(tmpl_dir: Path, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(tmpl_dir / "summary_report.html", out_dir / "summary_report.html")
    static_dst = out_dir / "static"
    if static_dst.exists():
        shutil.rmtree(static_dst)
    shutil.copytree(tmpl_dir / "static", static_dst)
    (out_dir / "static" / "data.js").unlink(missing_ok=True)


def _rewrite_module_logs(mod: dict, rel: str) -> dict:
    mod = dict(mod)
    new_logs = {}
    for k, v in (mod.get("logs") or {}).items():
        new_logs[k] = f"{rel}/{v}"
    mod["logs"] = new_logs
    mod["report"] = ""
    return mod


def _collect_modules(
    items: list[tuple[str, Path]], out_dir: Path
) -> tuple[list[dict], list | None, str, list[str], list[str], dict[str, int]]:
    modules: list[dict] = []
    devices = None
    host_info = ""
    starts: list[str] = []
    ends: list[str] = []
    total = _empty_totals()
    for _label, html in items:
        data = load_report_data(html)
        if devices is None:
            devices = data.get("devices") or []
        if not host_info:
            host_info = (data.get("exec_info") or {}).get("host_info") or ""
        ei = data.get("exec_info") or {}
        if ei.get("test_start"):
            starts.append(ei["test_start"])
        if ei.get("test_end"):
            ends.append(ei["test_end"])
        rel = os_relpath(html.parent, out_dir)
        for mod in data.get("modules") or []:
            mod = _rewrite_module_logs(mod, rel)
            modules.append(mod)
            for k in total:
                total[k] += int(mod.get(k, 0) or 0)
    return modules, devices, host_info, starts, ends, total


def _build_report_data(
    modules: list[dict],
    devices: list | None,
    host_info: str,
    starts: list[str],
    ends: list[str],
    total: dict[str, int],
) -> tuple[dict, datetime, datetime, float]:
    t0 = min(parse_dt(x) for x in starts) if starts else datetime.now()
    t1 = max(parse_dt(x) for x in ends) if ends else t0
    sum_sec = sum(float(m.get("time") or 0) for m in modules)
    report_data = {
        "exec_info": {
            "test_start": t0.strftime("%Y-%m-%d %H:%M:%S"),
            "test_end": t1.strftime("%Y-%m-%d %H:%M:%S"),
            "execute_time": fmt_elapsed(sum_sec),
            "test_type": "ACTS",
            "host_info": host_info,
            "logs": {},
        },
        "summary": {
            "modules": len(modules),
            "repeat": 1,
            "runmodules": len(modules),
            **total,
        },
        "devices": devices or [],
        "modules": modules,
    }
    return report_data, t0, t1, sum_sec


def _write_summary_ini(
    out_dir: Path,
    label: str,
    devices: list | None,
    host_info: str,
    t0: datetime,
    t1: datetime,
    sum_sec: float,
    modules: list[dict],
    total: dict[str, int],
) -> None:
    sn = devices[0].get("sn") if devices else ""
    (out_dir / "summary.ini").write_text(
        "\n".join(
            [
                "[default]",
                "Platform=OpenHarmony",
                "Test Type=ACTS",
                f"Device Name={sn}",
                f"Host Info={host_info}",
                f'Test Start/ End Time={t0.strftime("%Y-%m-%d %H:%M:%S")}/ '
                f'{t1.strftime("%Y-%m-%d %H:%M:%S")}',
                f"Execution Time={fmt_elapsed(sum_sec)}",
                "Device Type=Phone",
                f"Log Path={out_dir}",
                f"Label={label}",
                f"Modules={len(modules)}",
                f'Tests={total["tests"]}',
                f'Passed={total["passed"]}',
                f'Failed={total["failed"]}',
                "",
            ]
        ),
        encoding="utf-8",
    )


def _maybe_screenshot(out_html: Path) -> None:
    shot_py = Path(__file__).resolve().parent / "auto_screenshot_xdevice.py"
    if not shot_py.is_file():
        return
    spec = importlib.util.spec_from_file_location("auto_screenshot_xdevice", shot_py)
    if spec is None or spec.loader is None:
        return
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    mod.maybe_screenshot(out_html)


def merge(items: list[tuple[str, Path]], out_dir: Path, label: str) -> Path:
    if not items:
        raise SystemExit("no report inputs")
    _prepare_out_dir(items[0][1].parent, out_dir)
    modules, devices, host_info, starts, ends, total = _collect_modules(items, out_dir)
    report_data, t0, t1, sum_sec = _build_report_data(
        modules, devices, host_info, starts, ends, total
    )
    (out_dir / "static" / "data.js").write_text(
        "window.reportData = "
        + json.dumps(report_data, ensure_ascii=False, separators=(",", ":"))
        + ";",
        encoding="utf-8",
    )
    _write_summary_ini(
        out_dir, label, devices, host_info, t0, t1, sum_sec, modules, total
    )
    out_html = out_dir / "summary_report.html"
    print(f"REPORT_HTML={out_html}")
    print(
        f"SUMMARY modules={len(modules)} tests={total['tests']} "
        f"passed={total['passed']} failed={total['failed']}"
    )
    _maybe_screenshot(out_html)
    return out_html


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--out", required=True, help="output report directory")
    ap.add_argument("--name", default="merged", help="label written into summary.ini")
    ap.add_argument("--from-tsv", help="results.tsv from run-batch-cycle.sh")
    ap.add_argument(
        "report_dirs", nargs="*", help="xdevice report dirs or summary_report.html"
    )
    args = ap.parse_args()
    merge(resolve_inputs(args), Path(args.out), args.name)
    return 0


if __name__ == "__main__":
    sys.exit(main())
