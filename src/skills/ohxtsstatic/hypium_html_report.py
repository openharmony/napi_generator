#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从 unittest 设备命令 / Hypium 日志生成 XTS 风格 HTML 可视化报告。"""

from __future__ import annotations

import html
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
        ctx.result.summary = summ
    dur = _parse_duration(line)
    if dur and ctx.result.summary:
        ctx.result.summary.duration_ms = dur
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


def _status_color(status: str) -> str:
    if status == "PASS":
        return "#2e7d32"
    if status == "ERROR":
        return "#c62828"
    return "#ef6c00"


def _build_summary_bar(parsed: ParsedLog) -> str:
    s = parsed.summary
    if not s:
        total = len(parsed.cases)
        passed = sum(1 for c in parsed.cases if c.status == "PASS")
        failed = total - passed
        return (
            f"<p>用例 <b>{total}</b> · Pass <b style='color:#2e7d32'>{passed}</b> · "
            f"Fail/Error <b style='color:#c62828'>{failed}</b></p>"
        )
    dur = f" · 耗时 <b>{s.duration_ms}ms</b>" if s.duration_ms else ""
    return (
        f"<p>Tests run: <b>{s.total}</b> · Pass <b style='color:#2e7d32'>{s.pass_count}</b> · "
        f"Failure <b>{s.failure}</b> · Error <b style='color:#c62828'>{s.error}</b> · "
        f"Ignore <b>{s.ignore}</b>{dur}</p>"
    )


def _case_rows(parsed: ParsedLog) -> str:
    rows: list[str] = []
    for c in parsed.cases:
        color = _status_color(c.status)
        msg = html.escape(c.message[:500])
        stack = html.escape(c.stack[:800]) if c.stack else ""
        err_cell = msg
        if stack:
            err_cell += f"<pre class='stack'>{stack}</pre>"
        dur = f"{c.duration_ms}ms" if c.duration_ms is not None else "—"
        rows.append(
            "<tr>"
            f"<td>{html.escape(c.suite)}</td>"
            f"<td>{html.escape(c.name)}</td>"
            f"<td style='color:{color};font-weight:600'>{c.status}</td>"
            f"<td>{dur}</td>"
            f"<td class='err'>{err_cell or '—'}</td>"
            "</tr>"
        )
    if not rows:
        rows.append(
            "<tr><td colspan='5'>未解析到用例行（检查日志是否含 OHOS_REPORT_STATUS）</td></tr>"
        )
    return "\n".join(rows)


def _overall_status(parsed: ParsedLog) -> str:
    if parsed.app_died:
        return "FAIL"
    if parsed.summary and (parsed.summary.failure or parsed.summary.error):
        return "FAIL"
    if any(c.status != "PASS" for c in parsed.cases):
        return "FAIL"
    return "PASS"


def _meta_rows(
    parsed: ParsedLog,
    *,
    project: str,
    suite: str,
    device: str,
    log_path: str,
    command: str,
) -> list[tuple[str, str]]:
    rows = [
        ("工程", project or "—"),
        ("套件", suite or (", ".join(parsed.suites) if parsed.suites else "—")),
        ("设备", device or "—"),
        ("生成时间", datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
        ("日志", log_path or "—"),
        ("命令", command or "—"),
    ]
    if parsed.finished_msg:
        rows.append(("TestFinished", parsed.finished_msg))
    if parsed.summary and parsed.summary.raw_line:
        rows.append(("OHOS_REPORT", parsed.summary.raw_line))
    return rows


def _html_styles(overall_color: str) -> str:
    return f"""
body {{ font-family: system-ui, sans-serif; margin: 24px; background: #fafafa; }}
.card {{ background: #fff; border-radius: 8px; padding: 20px; margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,.08); }}
h1 {{ margin: 0 0 8px; font-size: 1.4rem; }}
.badge {{ display: inline-block; padding: 4px 12px; border-radius: 4px;
  color: #fff; background: {overall_color}; font-weight: 600; }}
table {{ border-collapse: collapse; width: 100%; font-size: 14px; }}
th, td {{ border: 1px solid #e0e0e0; padding: 8px; text-align: left; vertical-align: top; }}
th {{ background: #f5f5f5; }}
pre.stack {{ margin: 6px 0 0; font-size: 11px; white-space: pre-wrap;
  background: #f5f5f5; padding: 6px; max-height: 120px; overflow: auto; }}
td.err {{ max-width: 480px; word-break: break-word; }}
.meta th {{ width: 120px; }}
"""


def build_html(
    parsed: ParsedLog,
    *,
    project: str = "",
    suite: str = "",
    device: str = "",
    command: str = "",
    log_path: str = "",
) -> str:
    overall = _overall_status(parsed)
    oc = _status_color("PASS" if overall == "PASS" else "ERROR")
    meta_html = "".join(
        f"<tr><th>{html.escape(k)}</th><td>{html.escape(str(v))}</td></tr>"
        for k, v in _meta_rows(
            parsed,
            project=project,
            suite=suite,
            device=device,
            log_path=log_path,
            command=command,
        )
    )
    title = html.escape(suite or Path(project).name)
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8"/>
<title>Hypium 测试报告 — {title}</title>
<style>{_html_styles(oc)}</style>
</head>
<body>
<div class="card">
  <h1>Hypium / unittest 设备命令可视化报告</h1>
  <span class="badge">{overall}</span>
  {_build_summary_bar(parsed)}
</div>
<div class="card">
  <h2>环境</h2>
  <table class="meta"><tbody>{meta_html}</tbody></table>
</div>
<div class="card">
  <h2>用例明细</h2>
  <table>
    <thead><tr>
      <th>Suite</th><th>用例</th><th>结果</th><th>耗时</th><th>错误/说明</th>
    </tr></thead>
    <tbody>{_case_rows(parsed)}</tbody>
  </table>
</div>
</body>
</html>"""


def write_report_from_log(
    log_path: str | Path,
    *,
    project: str = "",
    suite: str = "",
    device: str = "",
    command: str = "",
    out_dir: Optional[str | Path] = None,
) -> Path:
    """解析日志并写入 summary_report.html，返回报告目录。"""
    log_p = Path(log_path).expanduser().resolve()
    text = log_p.read_text(encoding="utf-8", errors="replace")
    parsed = parse_unittest_device_log(text)
    dest = Path(out_dir) if out_dir else _report_dir(project, suite)
    dest.mkdir(parents=True, exist_ok=True)

    html_path = dest / "summary_report.html"
    html_path.write_text(
        build_html(
            parsed,
            project=project,
            suite=suite,
            device=device,
            command=command,
            log_path=str(log_p),
        ),
        encoding="utf-8",
    )
    (dest / "parsed_summary.json").write_text(
        json.dumps(
            {
                "suites": parsed.suites,
                "cases": [c.__dict__ for c in parsed.cases],
                "summary": parsed.summary.__dict__ if parsed.summary else None,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    log_name = f"{_AA_CLI}_test.log"
    if log_p.parent != dest:
        (dest / log_name).write_text(text, encoding="utf-8")
    return html_path


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
    """执行 ohhdc 等设备命令，落盘日志并生成 summary_report.html。"""
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

    ap = argparse.ArgumentParser(description="从 unittest 设备命令日志生成 HTML 报告")
    ap.add_argument("--log", required=True, help="日志文件路径")
    ap.add_argument("--project", default="", help="HAP 工程路径")
    ap.add_argument("--suite", default="", help="Hypium 套件名")
    ap.add_argument("--device", default="", help="设备 SN")
    ap.add_argument("--batch", default="", help="写入批次 batch_index.html")
    ns = ap.parse_args()
    path = write_report_from_log(
        ns.log,
        project=ns.project,
        suite=ns.suite,
        device=ns.device,
    )
    print(f"REPORT_HTML={path}")
    if ns.batch:
        print(f"BATCH_INDEX={append_batch_index(path, ns.batch)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
