#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
uniflash - UniSoC P7885 (wukong100): hdc reboot autodloader + CmdDloader PAC flash.

Subcommands (argv[1]; default is flash):
  (none) / flash     reboot autodloader, then CmdDloader -Reset -pac <pac>
  check              verify hdc, CmdDloader.exe, and default PAC exist
  flash-from-pac     same as flash with explicit PAC path

Default PAC: images/wukong100_nosec_userdebug.pac (relative to skill base).
Default CmdDloader: bin/CmdDloader.exe or UNIFLASH_CMDDLOADER.

Log: <base>/log/uniflash_<timestamp>.log (UTF-8). Exit 0 = both steps succeeded.
"""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

DEFAULT_PAC_REL = Path("images") / "wukong100_nosec_userdebug.pac"
DEFAULT_CMDDLOADER_REL = Path("bin") / "CmdDloader.exe"
DEFAULT_REBOOT_WAIT_SEC = 15


def _skill_base(explicit: Path | None) -> Path:
    if explicit is not None:
        return explicit.expanduser().resolve()
    return Path(__file__).resolve().parent


def _hdc_target_arg(target: str | None) -> list[str]:
    t = (target or os.environ.get("UNIFLASH_HDC_TARGET", "") or "").strip()
    if t:
        return ["-t", t]
    return []


def _resolve_cmddloader(base: Path, explicit: str | None) -> Path:
    if explicit:
        p = Path(explicit).expanduser().resolve()
        if not p.is_file():
            raise RuntimeError(f"CmdDloader not found: {p}")
        return p
    env = (os.environ.get("UNIFLASH_CMDDLOADER") or "").strip()
    if env:
        p = Path(env).expanduser().resolve()
        if not p.is_file():
            raise RuntimeError(f"UNIFLASH_CMDDLOADER not found: {p}")
        return p
    p = base / DEFAULT_CMDDLOADER_REL
    if not p.is_file():
        raise RuntimeError(
            f"CmdDloader not found: {p}. Place CmdDloader.exe there or set UNIFLASH_CMDDLOADER."
        )
    return p


def _resolve_pac(base: Path, explicit: str | None) -> Path:
    if explicit:
        p = Path(explicit).expanduser().resolve()
        if not p.is_file():
            raise RuntimeError(f"PAC file not found: {p}")
        return p
    p = base / DEFAULT_PAC_REL
    if not p.is_file():
        raise RuntimeError(f"Default PAC not found: {p}")
    return p


def _pac_arg_for_cmddloader(pac: Path) -> str:
    """CmdDloader -pac: use absolute path (cwd is bin/ tool root)."""
    return str(pac.resolve())


def _cmddloader_cwd(cmddloader: Path) -> Path:
    """CmdDloader must run from its tool root (same dir as App/, System/)."""
    return cmddloader.parent


def _ensure_log_dir(base: Path) -> Path:
    log_dir = base / "log"
    log_dir.mkdir(parents=True, exist_ok=True)
    return log_dir


def _new_log_path(base: Path) -> Path:
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    return _ensure_log_dir(base) / f"uniflash_{stamp}.log"


class _FlashLog:
    def __init__(self, path: Path) -> None:
        self.path = path
        self._fh = path.open("w", encoding="utf-8")

    def line(self, msg: str) -> None:
        print(msg)
        self._fh.write(msg + "\n")
        self._fh.flush()

    def close(self) -> None:
        self._fh.close()


def _run_step(
    log: _FlashLog,
    argv: list[str],
    *,
    cwd: Path | None = None,
    timeout: int | None = None,
    title: str,
) -> None:
    log.line(f"=== {title} ===")
    log.line(f"cwd: {cwd or Path.cwd()}")
    log.line(f"cmd: {' '.join(argv)}")
    try:
        proc = subprocess.run(
            argv,
            cwd=str(cwd) if cwd else None,
            capture_output=True,
            text=True,
            timeout=timeout,
            encoding="utf-8",
            errors="replace",
        )
    except subprocess.TimeoutExpired as e:
        log.line(f"TIMEOUT after {timeout}s")
        if e.stdout:
            log.line(f"stdout:\n{e.stdout}")
        if e.stderr:
            log.line(f"stderr:\n{e.stderr}")
        raise RuntimeError(f"{title} timed out") from e
    if proc.stdout:
        log.line(f"stdout:\n{proc.stdout.rstrip()}")
    if proc.stderr:
        log.line(f"stderr:\n{proc.stderr.rstrip()}")
    log.line(f"exit code: {proc.returncode}")
    combined = f"{proc.stdout or ''}{proc.stderr or ''}"
    if "[Fail]" in combined or "Startup Fail" in combined or "Download Result = Failed" in combined:
        raise RuntimeError(f"{title} failed (tool reported error)")
    if proc.returncode != 0:
        raise RuntimeError(f"{title} failed (exit {proc.returncode})")


def _validate_cmddloader_tree(cmddloader: Path) -> None:
    root = cmddloader.parent
    if not (root / "App").is_dir():
        raise RuntimeError(
            f"Missing {root / 'App'}: copy full Spreadtrum Download Bin/ tree (not CmdDloader.exe alone)."
        )
    if not (root / "System").is_dir():
        raise RuntimeError(
            f"Missing {root / 'System'}: copy full Spreadtrum Download Bin/ tree (not CmdDloader.exe alone)."
        )


def _require_hdc() -> str:
    hdc = shutil.which("hdc")
    if not hdc:
        raise RuntimeError("hdc not found in PATH")
    return hdc


def flash_all(
    base: Path,
    *,
    pac: Path,
    cmddloader: Path,
    hdc_target: str | None,
    reboot_wait_sec: int,
    hdc_timeout: int,
    dloader_timeout: int | None,
) -> Path:
    _require_hdc()
    log_path = _new_log_path(base)
    log = _FlashLog(log_path)
    pac_arg = _pac_arg_for_cmddloader(pac)
    dloader_cwd = _cmddloader_cwd(cmddloader)
    try:
        log.line(f"uniflash start: {datetime.now().isoformat(timespec='seconds')}")
        log.line(f"skill base: {base}")
        log.line(f"pac: {pac} (-pac {pac_arg})")
        log.line(f"cmddloader: {cmddloader}")
        log.line(f"cmddloader cwd: {dloader_cwd}")

        reboot_argv = ["hdc", *_hdc_target_arg(hdc_target), "shell", "reboot", "autodloader"]
        _run_step(log, reboot_argv, timeout=hdc_timeout, title="1. hdc shell reboot autodloader")

        log.line(f"Waiting {reboot_wait_sec}s for autodloader...")
        time.sleep(reboot_wait_sec)

        dloader_argv = [str(cmddloader), "-Reset", "-pac", pac_arg]
        _run_step(
            log,
            dloader_argv,
            cwd=dloader_cwd,
            timeout=dloader_timeout,
            title="2. CmdDloader -Reset -pac",
        )
        log.line(f"All steps finished: {datetime.now().isoformat(timespec='seconds')}")
        log.line(f"Flash finished, log: {log_path}")
    except Exception as e:
        log.line(f"FAILED: {e}")
        raise
    finally:
        log.close()
    return log_path


def cmd_check(args: argparse.Namespace) -> int:
    base = _skill_base(args.base)
    try:
        _require_hdc()
        cmddloader = _resolve_cmddloader(base, args.cmddloader)
        _validate_cmddloader_tree(cmddloader)
        pac = _resolve_pac(base, args.pac)
    except RuntimeError as e:
        print(f"CHECK FAIL: {e}", file=sys.stderr)
        return 1
    print("CHECK OK")
    print(f"  base: {base}")
    print(f"  hdc: {shutil.which('hdc')}")
    print(f"  cmddloader: {cmddloader}")
    print(f"  pac: {pac}")
    if args.hdc_target or os.environ.get("UNIFLASH_HDC_TARGET"):
        t = args.hdc_target or os.environ.get("UNIFLASH_HDC_TARGET", "")
        print(f"  hdc target: {t}")
    return 0


def cmd_flash(args: argparse.Namespace) -> int:
    base = _skill_base(args.base)
    try:
        cmddloader = _resolve_cmddloader(base, args.cmddloader)
        _validate_cmddloader_tree(cmddloader)
        pac = _resolve_pac(base, args.pac)
        log_path = flash_all(
            base,
            pac=pac,
            cmddloader=cmddloader,
            hdc_target=args.hdc_target,
            reboot_wait_sec=args.reboot_wait,
            hdc_timeout=args.hdc_timeout,
            dloader_timeout=args.dloader_timeout,
        )
        print(f"OK, log: {log_path}")
        return 0
    except RuntimeError as e:
        print(f"ERROR: {e}", file=sys.stderr)
        return 1


def _build_flash_parser(sub: bool = False) -> argparse.ArgumentParser:
    name = "flash" if sub else "uniflash"
    p = argparse.ArgumentParser(prog=name, description="UniSoC P7885 PAC flash via hdc + CmdDloader")
    p.add_argument("--base", type=Path, default=None, help="Skill root (default: script directory)")
    p.add_argument("--pac", default=None, help="PAC file path (default: images/wukong100_nosec_userdebug.pac)")
    p.add_argument("--cmddloader", default=None, help="CmdDloader.exe path (default: bin/CmdDloader.exe)")
    p.add_argument("-t", "--hdc-target", default=None, help="hdc target (or UNIFLASH_HDC_TARGET)")
    p.add_argument(
        "--reboot-wait",
        type=int,
        default=DEFAULT_REBOOT_WAIT_SEC,
        help=f"Seconds after reboot autodloader before CmdDloader (default {DEFAULT_REBOOT_WAIT_SEC})",
    )
    p.add_argument("--hdc-timeout", type=int, default=120, help="hdc reboot command timeout (seconds)")
    p.add_argument(
        "--dloader-timeout",
        type=int,
        default=None,
        help="CmdDloader timeout (seconds); default unlimited",
    )
    return p


_KNOWN_SUBCOMMANDS = frozenset({"check", "flash", "flash-from-pac"})


def main(argv: list[str] | None = None) -> int:
    argv = list(sys.argv[1:] if argv is None else argv)
    flash_parser = _build_flash_parser()

    if not argv:
        return cmd_flash(flash_parser.parse_args([]))

    if argv[0] in ("-h", "--help"):
        flash_parser.print_help()
        return 0

    if argv[0] == "check":
        p = argparse.ArgumentParser(prog="check", description="Check uniflash environment")
        p.add_argument("--base", type=Path, default=None)
        p.add_argument("--pac", default=None)
        p.add_argument("--cmddloader", default=None)
        p.add_argument("-t", "--hdc-target", default=None)
        args = p.parse_args(argv[1:])
        return cmd_check(args)

    if argv[0] == "flash-from-pac":
        p = _build_flash_parser(sub=True)
        p.add_argument("pac_path", help="Path to .pac file")
        args = p.parse_args(argv[1:])
        args.pac = args.pac_path
        return cmd_flash(args)

    if argv[0] == "flash":
        return cmd_flash(flash_parser.parse_args(argv[1:]))

    if argv[0] not in _KNOWN_SUBCOMMANDS:
        return cmd_flash(flash_parser.parse_args(argv))

    print(f"Unknown subcommand: {argv[0]}", file=sys.stderr)
    print("Use: (default flash), check, flash, flash-from-pac <PAC>", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
