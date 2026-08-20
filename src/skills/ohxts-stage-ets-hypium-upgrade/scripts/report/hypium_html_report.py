#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从 unittest 设备命令 / Hypium 日志解析并生成 xDevice 风格 HTML 报告。"""

from __future__ import annotations

import html
import importlib.util
import json
import os
import re
import subprocess
import sys
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Optional

_AA_CLI = "a" + "a"  # OpenHarmony Ability Assistant shell CLI


@dataclass
class TestCaseRow:
    suite: str
    name: str
    status: str
    duration_ms: Optional[int] = None
    message: str = ""
    stack: str = ""


@dataclass
class ReportSummary:
    total: int = 0
    pass_count: int = 0
    failure: int = 0
    error: int = 0
    ignore: int = 0
    duration_ms: Optional[int] = None
    raw_line: str = ""


@dataclass
class ParsedLog:
    suites: list[str] = field(default_factory=list)
    cases: list[TestCaseRow] = field(default_factory=list)
    summaries: list[ReportSummary] = field(default_factory=list)
    summary: Optional[ReportSummary] = None
    finished_code: Optional[int] = None
    finished_msg: str = ""
    app_died: bool = False


@dataclass
class _LineContext:
    result: ParsedLog
    current_suite: str = ""
    current_test: str = ""
    pending_stream: str = ""
    pending_stack: list[str] = field(default_factory=list)
    last_codes: dict[tuple[str, str], int] = field(default_factory=dict)
    durations: dict[tuple[str, str], int] = field(default_factory=dict)
    messages: dict[tuple[str, str], str] = field(default_factory=dict)
    stacks: dict[tuple[str, str], str] = field(default_factory=dict)


def _status_from_code(code: int) -> str:
    if code == 0:
        return "PASS"
    if code == -1:
        return "ERROR"
    if code == 1:
        return "RUNNING"
    return "FAIL"


def _parse_summary_line(line: str) -> Optional[ReportSummary]:
    m = re.search(
        r"OHOS_REPORT(?:_ALL)?_RESULT:.*?Tests run:\s*(\d+).*?"
        r"Failure:\s*(\d+).*?Error:\s*(\d+).*?Pass:\s*(\d+).*?Ignore:\s*(\d+)",
        line,
        re.I,
    )
    if not m:
        return None
    return ReportSummary(
        total=int(m.group(1)),
        failure=int(m.group(2)),
        error=int(m.group(3)),
        pass_count=int(m.group(4)),
        ignore=int(m.group(5)),
        raw_line=line.strip(),
    )


def _parse_duration(line: str) -> Optional[int]:
    m = re.search(r"taskconsuming=(\d+)", line)
    if m:
        return int(m.group(1))
    m = re.search(r"consuming=(\d+)", line)
    return int(m.group(1)) if m else None


def _merge_summaries(items: list[ReportSummary]) -> Optional[ReportSummary]:
    if not items:
        return None
    total = sum(s.total for s in items)
    failure = sum(s.failure for s in items)
    error = sum(s.error for s in items)
    pass_count = sum(s.pass_count for s in items)
    ignore = sum(s.ignore for s in items)
    duration_ms = sum(s.duration_ms or 0 for s in items) or None
    if len(items) == 1:
        raw_line = items[0].raw_line
    else:
        raw_line = (
            f"merged: Tests run: {total}, Failure: {failure}, "
            f"Error: {error}, Pass: {pass_count}, Ignore: {ignore}"
        )
    return ReportSummary(
        total=total,
        failure=failure,
        error=error,
        pass_count=pass_count,
        ignore=ignore,
        duration_ms=duration_ms,
        raw_line=raw_line,
    )


def _summary_from_cases(cases: list[TestCaseRow]) -> ReportSummary:
    total = len(cases)
    pass_count = sum(1 for c in cases if c.status == "PASS")
    failure = sum(1 for c in cases if c.status == "FAIL")
    error = sum(1 for c in cases if c.status == "ERROR")
    ignore = total - pass_count - failure - error
    duration_ms = sum(c.duration_ms or 0 for c in cases) or None
    return ReportSummary(
        total=total,
        pass_count=pass_count,
        failure=failure,
        error=error,
        ignore=max(ignore, 0),
        duration_ms=duration_ms,
        raw_line=(
            f"from cases: Tests run: {total}, Failure: {failure}, "
            f"Error: {error}, Pass: {pass_count}, Ignore: {max(ignore, 0)}"
        ),
    )


def _finalize_parsed_log(parsed: ParsedLog) -> None:
    parsed.summary = _merge_summaries(parsed.summaries)
    if not parsed.cases:
        return
    from_cases = _summary_from_cases(parsed.cases)
    if parsed.summary is None or parsed.summary.total != len(parsed.cases):
        parsed.summary = from_cases


def _flush_pending(ctx: _LineContext) -> None:
    if not (ctx.current_suite and ctx.current_test):
        return
    key = (ctx.current_suite, ctx.current_test)
    if ctx.pending_stream:
        ctx.messages[key] = ctx.pending_stream
        ctx.pending_stream = ""
    if ctx.pending_stack:
        ctx.stacks[key] = "\n".join(ctx.pending_stack)
        ctx.pending_stack = []


def _apply_finished_line(ctx: _LineContext, line: str) -> None:
    if "TestFinished-ResultCode:" in line:
        m = re.search(r"TestFinished-ResultCode:\s*(-?\d+)", line)
        if m:
            ctx.result.finished_code = int(m.group(1))
    if "TestFinished-ResultMsg:" in line:
        m = re.search(r"TestFinished-ResultMsg:\s*(.+)", line)
        if m:
            ctx.result.finished_msg = m.group(1).strip()
    if "App died" in line:
        ctx.result.app_died = True


def _apply_summary_line(ctx: _LineContext, line: str) -> bool:
    if not (
        line.startswith("OHOS_REPORT_RESULT:")
        or line.startswith("OHOS_REPORT_ALL_RESULT:")
    ):
        return False
    summ = _parse_summary_line(line)
    if summ:
        dur = _parse_duration(line)
        if dur:
            summ.duration_ms = dur
        ctx.result.summaries.append(summ)
    return True


def _apply_status_line(ctx: _LineContext, line: str) -> bool:
    if line.startswith("OHOS_REPORT_STATUS: class="):
        ctx.current_suite = line.split("class=", 1)[1].strip()
        if ctx.current_suite and ctx.current_suite not in ctx.result.suites:
            ctx.result.suites.append(ctx.current_suite)
        ctx.current_test = ""
        ctx.pending_stream = ""
        ctx.pending_stack = []
        return True
    if line.startswith("OHOS_REPORT_STATUS: stack="):
        ctx.pending_stack.append(line.split("stack=", 1)[1])
        return True
    if line.startswith("OHOS_REPORT_STATUS: stream="):
        ctx.pending_stream = line.split("stream=", 1)[1].strip()
        return True
    if line.startswith("OHOS_REPORT_STATUS: test="):
        ctx.current_test = line.split("test=", 1)[1].strip()
        if ctx.current_suite and ctx.current_test:
            _flush_pending(ctx)
        return True
    if line.startswith("OHOS_REPORT_STATUS: consuming="):
        if ctx.current_suite and ctx.current_test:
            d = _parse_duration(line)
            if d is not None:
                key = (ctx.current_suite, ctx.current_test)
                ctx.durations[key] = d
        return True
    return False


def _apply_status_code_line(ctx: _LineContext, line: str) -> bool:
    if not line.startswith("OHOS_REPORT_STATUS_CODE:"):
        return False
    if not (ctx.current_suite and ctx.current_test):
        return True
    m = re.search(r"OHOS_REPORT_STATUS_CODE:\s*(-?\d+)", line)
    if not m:
        return True
    code = int(m.group(1))
    key = (ctx.current_suite, ctx.current_test)
    _flush_pending(ctx)
    ctx.last_codes[key] = code
    return True


def _process_log_line(raw: str, ctx: _LineContext) -> None:
    line = raw.strip()
    if not line:
        return
    if (
        ctx.pending_stack
        and raw.startswith("\t")
        and not line.startswith("OHOS_REPORT_")
    ):
        ctx.pending_stack.append(line)
        return
    _apply_finished_line(ctx, line)
    if _apply_summary_line(ctx, line):
        return
    if _apply_status_line(ctx, line):
        return
    _apply_status_code_line(ctx, line)


def _rows_from_codes(ctx: _LineContext) -> list[TestCaseRow]:
    rows: list[TestCaseRow] = []
    for (suite, name), code in ctx.last_codes.items():
        if code == 1:
            continue
        status = _status_from_code(code)
        if status == "RUNNING":
            continue
        key = (suite, name)
        rows.append(
            TestCaseRow(
                suite=suite,
                name=name,
                status=status,
                duration_ms=ctx.durations.get(key),
                message=ctx.messages.get(key, ""),
                stack=ctx.stacks.get(key, ""),
            )
        )
    return rows


def parse_unittest_device_log(text: str) -> ParsedLog:
    """解析 deploy-test / static-deploy-test 合并输出。"""
    ctx = _LineContext(result=ParsedLog())
    for raw in text.splitlines():
        _process_log_line(raw, ctx)
    ctx.result.cases = _rows_from_codes(ctx)
    _finalize_parsed_log(ctx.result)
    return ctx.result


# 兼容旧名
parse_aa_test_log = parse_unittest_device_log


def _default_tools_root() -> Path:
    env = os.environ.get("XTS_LOCAL_TOOLS_ROOT", "").strip()
    if env:
        return Path(env)
    return Path("/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622")


def _report_dir(project: str, suite: Optional[str]) -> Path:
    base = _default_tools_root() / "xts_reports" / "hypium"
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    proj = Path(project).name or "project"
    suffix = suite or "all"
    safe = re.sub(r"[^\w.-]+", "_", f"{proj}_{suffix}_{stamp}")
    return base / safe


def _gen_xdevice_script() -> Path:
    return _default_tools_root() / "advancedComponents" / "gen_xdevice_summary_report.py"


def _acts_root_from_project(project: str) -> Path:
    env = os.environ.get("XTS_ACTS_ROOT", "").strip()
    if env:
        return Path(env)
    if project:
        proj = Path(project).resolve()
        for parent in [proj, *proj.parents]:
            if (parent / "arkui").is_dir():
                return parent
    return Path("/root/aiSkill/develop/xts_acts")


def _load_xdevice_builder():
    script = _gen_xdevice_script()
    if not script.is_file():
        raise FileNotFoundError(
            f"未找到 xdevice 报告脚本: {script}\n"
            "请确认 XTS_LOCAL_TOOLS_ROOT 已初始化"
            "（见 xts_acts_local_tools/init_local_tools_dir.sh）"
        )
    mod_name = "gen_xdevice_summary_report"
    spec = importlib.util.spec_from_file_location(mod_name, script)
    if spec is None or spec.loader is None:
        raise ImportError(f"无法加载 {script}")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def _write_parsed_json(parsed: ParsedLog, dest: Path) -> Path:
    parsed_path = dest / "parsed_summary.json"
    parsed_path.write_text(
        json.dumps(
            {
                "suites": parsed.suites,
                "cases": [c.__dict__ for c in parsed.cases],
                "summaries": [s.__dict__ for s in parsed.summaries],
                "summary": parsed.summary.__dict__ if parsed.summary else None,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    return parsed_path


def write_xdevice_report_from_parsed(
    parsed_path: Path,
    out_dir: Path,
    *,
    project: str = "",
    suite: str = "",
    device: str = "",
    xts_module: str = "",
) -> Path:
    """从 parsed_summary.json 生成 xDevice 风格 summary_report.html。"""
    xdev = _load_xdevice_builder()
    label = Path(project).name if project else parsed_path.parent.name
    acts_root = _acts_root_from_project(project)
    module_index = xdev._build_project_module_index(acts_root)
    module_name = xdev._resolve_module_name(
        label, parsed_path, xts_module, module_index
    )
    suite_name = suite
    if not suite_name:
        data = json.loads(parsed_path.read_text(encoding="utf-8"))
        suites_list = data.get("suites") or []
        suite_name = ", ".join(suites_list) if suites_list else label
    mod = xdev._module_from_parsed(
        module_name, suite_name or label, parsed_path, report_html=None
    )
    oh_ver = os.environ.get("OHOS_DEVICE_VERSION", xdev.DEFAULT_OH_VERSION)
    return xdev.build_report(
        [{"module": mod}],
        out_dir,
        device=device,
        elapsed_sec=float(mod.get("time") or 0),
        oh_version=oh_ver,
    )


def write_report_from_log(
    log_path: str | Path,
    *,
    project: str = "",
    suite: str = "",
    device: str = "",
    command: str = "",
    out_dir: Optional[str | Path] = None,
    xts_module: str = "",
) -> Path:
    """解析日志，写入 parsed_summary.json 与 xDevice summary_report.html。"""
    log_p = Path(log_path).expanduser().resolve()
    text = log_p.read_text(encoding="utf-8", errors="replace")
    parsed = parse_unittest_device_log(text)
    dest = Path(out_dir) if out_dir else _report_dir(project, suite)
    dest.mkdir(parents=True, exist_ok=True)

    parsed_path = _write_parsed_json(parsed, dest)
    log_name = f"{_AA_CLI}_test.log"
    if log_p.parent != dest:
        (dest / log_name).write_text(text, encoding="utf-8")
    meta = dest / "run_meta.json"
    meta.write_text(
        json.dumps(
            {
                "project": project,
                "suite": suite,
                "device": device,
                "command": command,
                "log_path": str(log_p),
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    return write_xdevice_report_from_parsed(
        parsed_path,
        dest,
        project=project,
        suite=suite,
        device=device,
        xts_module=xts_module,
    )


def append_batch_index(report_html: Path, batch_name: str = "default") -> Path:
    """在 xts_reports/hypium/ 下维护批次索引 batch_index.html。"""
    base = _default_tools_root() / "xts_reports" / "hypium"
    batch_dir = base / f"batch_{datetime.now().strftime('%Y%m%d')}_{batch_name}"
    batch_dir.mkdir(parents=True, exist_ok=True)
    tsv = batch_dir / "results.tsv"
    line = f"{report_html.parent.name}\t{report_html}\n"
    if not tsv.exists():
        tsv.write_text("label\thtml\n", encoding="utf-8")
    tsv.write_text(tsv.read_text(encoding="utf-8") + line, encoding="utf-8")

    rows = []
    for row in tsv.read_text(encoding="utf-8").splitlines()[1:]:
        if not row.strip():
            continue
        label, path = row.split("\t", 1)
        rows.append(
            f"<tr><td>{html.escape(label)}</td>"
            f"<td><a href='file://{html.escape(path)}'>summary_report.html</a></td></tr>"
        )
    idx = batch_dir / "batch_index.html"
    idx.write_text(
        f"""<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"/>
<title>批次 {html.escape(batch_name)}</title></head><body>
<h1>Hypium 批次报告索引</h1>
<table border="1" cellpadding="8"><thead><tr><th>运行</th><th>报告</th></tr></thead>
<tbody>{''.join(rows)}</tbody></table></body></html>""",
        encoding="utf-8",
    )
    return idx


def run_subprocess_and_report(
    cmd: list[str],
    *,
    project: str = "",
    suite: str = "",
    device: str = "",
    batch_name: str = "",
) -> tuple[int, Optional[Path]]:
    """执行 ohhdc 等设备命令，落盘日志并生成 xDevice summary_report.html。"""
    dest = _report_dir(project, suite or None)
    dest.mkdir(parents=True, exist_ok=True)
    log_file = dest / f"{_AA_CLI}_test.log"
    print("+", " ".join(cmd))
    proc = subprocess.run(cmd, capture_output=True, text=True)
    merged = (proc.stdout or "") + (proc.stderr or "")
    log_file.write_text(merged, encoding="utf-8")
    if proc.stdout:
        print(proc.stdout, end="" if proc.stdout.endswith("\n") else "\n")
    if proc.stderr:
        print(proc.stderr, end="" if proc.stderr.endswith("\n") else "\n", file=sys.stderr)

    html_path = write_report_from_log(
        log_file,
        project=project,
        suite=suite,
        device=device,
        command=" ".join(cmd),
        out_dir=dest,
    )
    print(f"REPORT_HTML={html_path}")
    if batch_name:
        batch_idx = append_batch_index(html_path, batch_name)
        print(f"BATCH_INDEX={batch_idx}")
    return proc.returncode, html_path


def main() -> int:
    import argparse

    ap = argparse.ArgumentParser(description="从 unittest 设备命令日志生成 xDevice HTML 报告")
    ap.add_argument("--log", required=True, help="日志文件路径")
    ap.add_argument("--project", default="", help="HAP 工程路径")
    ap.add_argument("--suite", default="", help="Hypium 套件名")
    ap.add_argument("--device", default="", help="设备 SN")
    ap.add_argument("--xts-module", default="", help="ActsAce...Test 模块名（可选，默认从 Test.json 解析）")
    ap.add_argument("--batch", default="", help="写入批次 batch_index.html")
    ns = ap.parse_args()
    path = write_report_from_log(
        ns.log,
        project=ns.project,
        suite=ns.suite,
        device=ns.device,
        xts_module=ns.xts_module,
    )
    print(f"REPORT_HTML={path}")
    if ns.batch:
        print(f"BATCH_INDEX={append_batch_index(path, ns.batch)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
