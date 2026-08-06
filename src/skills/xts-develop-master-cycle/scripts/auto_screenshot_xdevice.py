#!/usr/bin/env python3
"""Best-effort auto-shot after xdevice summary_report.html is written.

Prints SCREENSHOT_PNG=... on success, or SCREENSHOT_SKIP=... when skipped/failed.
Respects XDEVICE_SKIP_SHOT=1 (multi-HAP batch: only shot merged summary).

Usage:
  auto_screenshot_xdevice.py <summary_report.html|report_dir>
  from auto_screenshot_xdevice import maybe_screenshot; maybe_screenshot(path)
"""
from __future__ import annotations

import os
import subprocess
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
_SHOT_SH = _SCRIPT_DIR / "screenshot-xdevice-summary.sh"


def maybe_screenshot(html_or_dir: str | Path) -> Path | None:
    """Run screenshot-xdevice-summary.sh; return png path or None."""
    if os.environ.get("XDEVICE_SKIP_SHOT", "").strip().lower() in (
        "1",
        "true",
        "yes",
    ):
        print("SCREENSHOT_SKIP=XDEVICE_SKIP_SHOT=1")
        return None
    target = Path(html_or_dir)
    if target.is_dir():
        html = target / "summary_report.html"
    else:
        html = target
    if not html.is_file():
        print(f"SCREENSHOT_SKIP=missing_html:{html}", file=sys.stderr)
        return None
    if not _SHOT_SH.is_file():
        print(f"SCREENSHOT_SKIP=missing_script:{_SHOT_SH}", file=sys.stderr)
        return None
    try:
        proc = subprocess.run(
            ["bash", str(_SHOT_SH), str(html)],
            capture_output=True,
            text=True,
            timeout=240,
            check=False,
        )
    except (OSError, subprocess.TimeoutExpired) as exc:
        print(f"SCREENSHOT_SKIP={exc}", file=sys.stderr)
        return None
    if proc.stdout:
        sys.stdout.write(
            proc.stdout if proc.stdout.endswith("\n") else proc.stdout + "\n"
        )
    if proc.returncode != 0:
        if proc.stderr:
            sys.stderr.write(proc.stderr)
        print(f"SCREENSHOT_SKIP=exit_{proc.returncode}", file=sys.stderr)
        return None
    png = html.parent / "summary_top.png"
    if png.is_file():
        # shell already prints SCREENSHOT_PNG=; ensure if stdout was empty
        if "SCREENSHOT_PNG=" not in (proc.stdout or ""):
            print(f"SCREENSHOT_PNG={png}")
        return png
    print("SCREENSHOT_SKIP=png_not_written", file=sys.stderr)
    return None


def main() -> int:
    if len(sys.argv) < 2:
        print(f"usage: {sys.argv[0]} <summary_report.html|report_dir>", file=sys.stderr)
        return 2
    return 0 if maybe_screenshot(sys.argv[1]) else 1


if __name__ == "__main__":
    sys.exit(main())
