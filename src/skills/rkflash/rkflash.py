#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
rkflash - Rockchip board: sync OH phone images from a server, upgrade_tool flash, default post-flash version verify.

Subcommands (pass as argv[1]; otherwise flash mode):
  (none)       main -> flash_all() then verify_flashed_version_against_server() unless --no-verify-version.
               Log: <base>/log/rkflash_<timestamp>.log (UTF-8).
               Exit 0 means flash steps succeeded AND (by default) version verify matched; exit 1 otherwise.
               Treat a run as "flash complete" only after the process exits 0 with default verify enabled.
               Do not treat "command started" as done: wait for the process to finish and check exit code + log.
               --no-verify-version skips version check; use only for debugging, not to confirm production flash.
               After VERIFY OK (default path): best-effort hdc turns off sysfs LEDs; --no-leds-off to skip.
  sync-images  cmd_sync_images -> sync_images_from_server() into <base>/images/. Exit 0/1.
  raw-scp      cmd_raw_scp: shell command from --cmd / RKFLASH_RAW_SCP_CMD / config raw_scp_cmd; cwd=<base>/images.
  pscp-sync    cmd_pscp_sync: pscp -batch -pw -r ... Exit 0 ok, 1 error, 124 subprocess timeout.
  analyze-config  cmd_analyze_config: parse binary <base>/images/config.cfg; print loader basename,
                  partition cfg labels, di flags (-resource, -u, ...), and image basenames. Exit 0/1.

images/config.cfg (required for flash):
  - Rockchip binary config with UTF-16-LE strings: Windows-style paths to .img/.bin and partition labels.
  - load_flash_layout_from_config() / parse_rockchip_config_cfg_flash_layout() build CfgFlashLayout:
      loader_basename (first .bin path, e.g. ul), partitions: CfgFlashPartition(cfg_label, di_flag, image_basename).
  - Label to upgrade_tool di flag: Uboot -> -u; otherwise '-' + label.lower() (e.g. resource -> -resource,
    sys-prod -> -sys-prod, Boot_linux -> -boot_linux).
  - flash_all() and _check_images_layout() use this layout only; there is no hardcoded REQUIRED_IMAGES list.

Capabilities (see SKILL.md for full CLI tables and Chinese prose):
  - _flatten_nested_images_subdir: after pscp-sync/raw-scp exit 0, hoist images/images/* to images/.
  - Post-flash verify: hdc shell param get -> SOFTWARE_VERSION_PARAM vs remote ohos.para (same key).
    Remote ohos.para path is derived from sync_remote when it ends with /images (see _derive_remote_ohos_para).
    Fetch order: pscp single file to tempfile, else paramiko SFTP.
    After VERIFY OK: best-effort hdc shell sh -c turns off Linux sysfs LEDs (/sys/class/leds/*/brightness);
    rkflash_sync_config.json leds_off_cmd overrides script; --no-leds-off disables; failures do not change exit 0.
  - sync-images transport priority: if --expect-scp then pexpect scp; elif --scp-only then sshpass scp only;
    elif prefer_scp and sshpass then sshpass scp; else paramiko SFTP recursive.
  - User-facing script output: English ASCII; log files UTF-8.

Module constants:
  CONFIG_JSON_NAME (rkflash_sync_config.json under --base), DEFAULT_PSCP_SYNC_TIMEOUT_SEC (1800), DEFAULT_PSCP_EXE,
  SOFTWARE_VERSION_PARAM (= const.product.software.version).
  SSH host/user/password/remote paths: no defaults; CLI, env, <base>/rkflash_sync_config.json, or TTY prompts.

Public layout helpers:
  load_flash_layout_from_config(cfg_path), parse_rockchip_config_cfg_flash_layout(bytes),
  parse_rockchip_config_cfg_burn_files(bytes) -> (img basenames, [loader bin]).

Env:
  RKFLASH_SYNC_HOST, RKFLASH_SYNC_USER, RKFLASH_SSH_PASSWORD, RKFLASH_SYNC_REMOTE, RKFLASH_SYNC_PORT,
  RKFLASH_REMOTE_OHOS_PARA, RKFLASH_RAW_SCP_CMD,
  RKFLASH_PSCP, RKFLASH_SSHPASS, RKFLASH_SCP, RKFLASH_EXPECT_PHASE1_TIMEOUT,
  RKFLASH_LEDS_NAMES (optional comma-separated names under /sys/class/leds/); else rkflash_sync_config.json leds_off_names; else default blue,green,red.
  leds_off_cmd in rkflash_sync_config.json (optional full sh for hdc after VERIFY OK; highest priority among LED options).
  leds_off_names in rkflash_sync_config.json (array or comma string), same meaning.

Flash: upgrade_tool output must contain ok (except rcb step). Dependencies: pip install -r requirements-sync.txt for paramiko/pexpect.

External tools: pscp, scp+ssh, sshpass, hdc, bin/upgrade_tool.exe, system shell (raw-scp); pip: paramiko, pexpect. Full table: SKILL.md (section on external tools / dependencies).
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
import os
import re
import shutil
import tempfile
import stat
import subprocess
import sys
import threading
import time
from datetime import datetime
from pathlib import Path


def _skill_base(explicit: Path | None) -> Path:
    if explicit is not None:
        return explicit.expanduser().resolve()
    return Path(__file__).resolve().parent


def _skill_base_from_flash_log(log_path: Path) -> Path | None:
    """Skill root from ``<base>/log/rkflash_*.log``."""
    p = log_path.resolve()
    if p.parent.name == "log":
        return p.parent.parent
    return None


# Sysfs LED directory basename under /sys/class/leds/<name>/brightness
_LED_SYSFS_NAME_RE = re.compile(r"^[A-Za-z0-9][A-Za-z0-9_.-]{0,127}$")


def _split_led_name_tokens(s: str) -> list[str]:
    return [p.strip() for p in s.replace(";", ",").split(",") if p.strip()]


def _leds_off_script_for_named_leds(names: list[str]) -> str:
    """Write 0 to each /sys/class/leds/<name>/brightness if present."""
    parts: list[str] = []
    for raw in names:
        n = str(raw).strip()
        if not _LED_SYSFS_NAME_RE.match(n):
            continue
        parts.append(
            f'[ -e "/sys/class/leds/{n}/brightness" ] && '
            f'echo 0 > "/sys/class/leds/{n}/brightness" 2>/dev/null; '
        )
    return "".join(parts) if parts else _DEFAULT_LEDS_OFF_SH


def _collect_led_names_from_config(log_path: Path | None) -> list[str]:
    """Env RKFLASH_LEDS_NAMES wins; else rkflash_sync_config.json ``leds_off_names``."""
    env = (os.environ.get("RKFLASH_LEDS_NAMES") or "").strip()
    if env:
        return [n for n in _split_led_name_tokens(env) if _LED_SYSFS_NAME_RE.match(n)]
    if log_path is None:
        return []
    base = _skill_base_from_flash_log(log_path)
    if base is None:
        return []
    cfg = _load_sync_config_json(base)
    raw = cfg.get("leds_off_names")
    out: list[str] = []
    if isinstance(raw, list):
        for x in raw:
            n = str(x).strip()
            if _LED_SYSFS_NAME_RE.match(n):
                out.append(n)
    elif isinstance(raw, str) and raw.strip():
        out = [n for n in _split_led_name_tokens(raw) if _LED_SYSFS_NAME_RE.match(n)]
    return out


def _load_leds_off_cmd_from_rkflash_config(log_path: Path | None) -> str | None:
    """Full sh body from ``<base>/rkflash_sync_config.json`` key ``leds_off_cmd``."""
    if log_path is None:
        return None
    base = _skill_base_from_flash_log(log_path)
    if base is None:
        return None
    cfg = _load_sync_config_json(base)
    c = cfg.get("leds_off_cmd")
    if isinstance(c, str) and c.strip():
        return c.strip()
    return None


def _resolve_leds_off_script(log_path: Path | None) -> tuple[str, str | None]:
    """
    Returns (sh_body, note for log).
    Priority: rkflash_sync_config.json leds_off_cmd >
             RKFLASH_LEDS_NAMES / config leds_off_names >
             default blue,green,red (same as prior hardcoded named set).
    """
    custom = _load_leds_off_cmd_from_rkflash_config(log_path)
    if custom:
        return custom, "rkflash_sync_config.json leds_off_cmd"
    names = _collect_led_names_from_config(log_path)
    if names:
        script = _leds_off_script_for_named_leds(names)
        return script, "named LEDs: " + ",".join(names)
    script = _leds_off_script_for_named_leds(["blue", "green", "red"])
    return script, "default blue,green,red"


def _flatten_nested_images_subdir(images_dir: Path) -> None:
    """
    pscp/scp -r user@host:.../images . with cwd=<base>/images/ often creates a nested images/ dir.
    Move children up into images/ and remove the empty inner images/ directory.
    """
    images_dir = images_dir.resolve()
    nested = (images_dir / "images").resolve()
    if not nested.is_dir() or nested == images_dir:
        return
    try:
        nested.relative_to(images_dir)
    except ValueError:
        return
    for child in list(nested.iterdir()):
        target = images_dir / child.name
        if target.resolve() == nested:
            continue
        if target.exists():
            if target.is_file() or target.is_symlink():
                target.unlink()
            else:
                shutil.rmtree(target)
        shutil.move(str(child), str(images_dir))
    try:
        nested.rmdir()
    except OSError:
        shutil.rmtree(nested, ignore_errors=True)


CONFIG_JSON_NAME = "rkflash_sync_config.json"

# PuTTY pscp common path on Windows; used only if that file exists
DEFAULT_PSCP_EXE = Path(r"C:\PuTTY\pscp.exe")
# Large syncs can take many minutes; full pscp subprocess max wait (sec); exit 124 on timeout
DEFAULT_PSCP_SYNC_TIMEOUT_SEC = 1800

SOFTWARE_VERSION_PARAM = "const.product.software.version"


@dataclass(frozen=True)
class RkflashSshConfig:
    host: str
    port: int
    user: str
    password: str
    remote_images: str
    remote_ohos_para: str


def _empty_to_none(s: str | None) -> str | None:
    if s is None:
        return None
    t = str(s).strip()
    return t if t else None


def _interactive_config_allowed() -> bool:
    try:
        return bool(sys.stdin.isatty() and sys.stderr.isatty())
    except Exception:
        return False


def _load_sync_config_json(base: Path) -> dict:
    p = (base / CONFIG_JSON_NAME).resolve()
    if not p.is_file():
        return {}
    import json

    try:
        with p.open(encoding="utf-8") as f:
            data = json.load(f)
    except (OSError, json.JSONDecodeError) as e:
        raise RuntimeError(f"Invalid {CONFIG_JSON_NAME}: {p} ({e})") from e
    return data if isinstance(data, dict) else {}


def _derive_remote_ohos_para(remote_images: str) -> str:
    r = remote_images.rstrip("/")
    if r.endswith("/images"):
        return r[: -len("/images")] + "/system/etc/param/ohos.para"
    return r + "/system/etc/param/ohos.para"


def _config_missing_message(base: Path) -> str:
    here = Path(__file__).resolve().parent
    example = here / "rkflash_sync_config.example.json"
    return (
        "rkflash: SSH/sync configuration is incomplete.\n"
        "Provide CLI flags, environment variables, or copy the template into your skill root:\n"
        f"  copy template: {example}\n"
        f"  config file:   {base / CONFIG_JSON_NAME}\n"
        "Environment variables:\n"
        "  RKFLASH_SYNC_HOST, RKFLASH_SYNC_USER, RKFLASH_SSH_PASSWORD,\n"
        "  RKFLASH_SYNC_REMOTE (absolute path to phone images on server),\n"
        "  RKFLASH_REMOTE_OHOS_PARA (optional; derived if sync_remote ends with /images),\n"
        "  RKFLASH_SYNC_PORT (optional, default 22),\n"
        "  RKFLASH_RAW_SCP_CMD (for raw-scp subcommand).\n"
    )


def _resolve_port(port_cli: int | None, cfg: dict) -> int:
    if port_cli is not None:
        return int(port_cli)
    e = _empty_to_none(os.environ.get("RKFLASH_SYNC_PORT"))
    if e is not None:
        try:
            return int(e)
        except ValueError:
            pass
    sp = cfg.get("sync_port")
    if sp is not None:
        try:
            return int(sp)
        except (ValueError, TypeError):
            pass
    return 22


def _resolve_rkflash_ssh_config(
    base: Path,
    *,
    host_cli: str | None,
    port_cli: int | None,
    user_cli: str | None,
    password_cli: str | None,
    remote_images_cli: str | None,
    remote_ohos_cli: str | None,
    require_remote_images: bool,
    require_remote_ohos: bool,
    interactive: bool | None = None,
) -> RkflashSshConfig:
    if interactive is None:
        interactive = _interactive_config_allowed()
    cfg = _load_sync_config_json(base)

    def pick_str(
        cli: str | None,
        env_key: str,
        json_key: str,
        prompt_label: str,
        *,
        required: bool,
        secret: bool = False,
    ) -> str | None:
        v = _empty_to_none(cli)
        if v is not None:
            return v
        if env_key:
            v = _empty_to_none(os.environ.get(env_key))
            if v is not None:
                return v
        jv = cfg.get(json_key)
        if isinstance(jv, str) and jv.strip():
            return jv.strip()
        if interactive and required:
            if secret:
                import getpass

                got = getpass.getpass(f"rkflash: {prompt_label}: ")
            else:
                got = input(f"rkflash: {prompt_label}: ")
            got = got.strip()
            if got:
                return got
        return None

    host = pick_str(
        host_cli,
        "RKFLASH_SYNC_HOST",
        "sync_host",
        "SSH host",
        required=True,
    )
    user = pick_str(
        user_cli,
        "RKFLASH_SYNC_USER",
        "sync_user",
        "SSH username",
        required=True,
    )
    pwd = pick_str(
        password_cli,
        "RKFLASH_SSH_PASSWORD",
        "sync_password",
        "SSH password",
        required=True,
        secret=True,
    )

    remote_images_opt = pick_str(
        remote_images_cli,
        "RKFLASH_SYNC_REMOTE",
        "sync_remote",
        "remote images directory (absolute path on server)",
        required=require_remote_images,
    )
    if require_remote_images and not remote_images_opt:
        raise RuntimeError(
            _config_missing_message(base) + "\nMissing remote images directory for sync."
        )

    port = _resolve_port(port_cli, cfg)

    rohos = pick_str(
        remote_ohos_cli,
        "RKFLASH_REMOTE_OHOS_PARA",
        "remote_ohos_para",
        "remote path to ohos.para",
        required=False,
    )
    if rohos is None and remote_images_opt:
        rohos = _derive_remote_ohos_para(remote_images_opt)
    if require_remote_ohos and not rohos:
        if interactive:
            got = input("rkflash: remote path to ohos.para: ").strip()
            if got:
                rohos = got
        if not rohos:
            raise RuntimeError(
                _config_missing_message(base)
                + "\nMissing remote ohos.para path (RKFLASH_REMOTE_OHOS_PARA or derive from sync_remote ending with /images)."
            )

    if not host or not user or not pwd:
        raise RuntimeError(_config_missing_message(base))

    return RkflashSshConfig(
        host=host,
        port=port,
        user=user,
        password=pwd,
        remote_images=remote_images_opt or "",
        remote_ohos_para=rohos or "",
    )


def _resolve_raw_scp_command(
    base: Path, cmd_cli: str | None, interactive: bool | None = None
) -> str:
    if interactive is None:
        interactive = _interactive_config_allowed()
    v = _empty_to_none(cmd_cli)
    if v:
        return v
    v = _empty_to_none(os.environ.get("RKFLASH_RAW_SCP_CMD"))
    if v:
        return v
    cfg = _load_sync_config_json(base)
    rc = cfg.get("raw_scp_cmd")
    if isinstance(rc, str) and rc.strip():
        return rc.strip()
    if interactive:
        got = input(
            "rkflash raw-scp: full shell command (cwd will be <base>/images): "
        ).strip()
        if got:
            return got
    raise RuntimeError(
        "rkflash raw-scp: missing command. Use --cmd, environment RKFLASH_RAW_SCP_CMD, "
        f"or raw_scp_cmd in {CONFIG_JSON_NAME} (see rkflash_sync_config.example.json)."
    )
_SOFTWARE_VERSION_RE = re.compile(
    rf"^[ \t]*{re.escape(SOFTWARE_VERSION_PARAM)}[ \t]*=[ \t]*([^\r\n]+)[ \t]*\r?$",
    re.IGNORECASE | re.MULTILINE,
)

# After VERIFY OK: hdc shell sh -c "<script>" turns off Linux sysfs LEDs (best-effort, non-fatal).
# Prefer rkflash_sync_config.json "leds_off_cmd" (full sh body) or "leds_off_names" / env RKFLASH_LEDS_NAMES.
# Fallback when unset: blue,green,red via _leds_off_script_for_named_leds. _DEFAULT_LEDS_OFF_SH: all leds/* (used if named list empty).
_DEFAULT_LEDS_OFF_SH = (
    "if [ -d /sys/class/leds ]; then "
    "for d in /sys/class/leds/*; do "
    '[ -e "$d/brightness" ] && echo 0 > "$d/brightness" 2>/dev/null; '
    "done; fi"
)


def _sftp_get_recursive(sftp, remote_dir: str, local_dir: Path) -> None:
    """Recursively download remote dir over SFTP (same SSH session family as scp)."""
    local_dir.mkdir(parents=True, exist_ok=True)
    rdir = remote_dir.rstrip("/")
    try:
        entries = sftp.listdir_attr(rdir)
    except OSError as e:
        raise RuntimeError(f"Cannot list remote directory {rdir!r}: {e}") from e
    for entry in entries:
        if entry.filename in (".", ".."):
            continue
        rpath = f"{rdir}/{entry.filename}"
        lpath = local_dir / entry.filename
        mode = entry.st_mode
        if stat.S_ISDIR(mode):
            _sftp_get_recursive(sftp, rpath, lpath)
        elif stat.S_ISREG(mode):
            sftp.get(rpath, str(lpath))


def _sync_images_paramiko(
    host: str,
    port: int,
    user: str,
    password: str,
    remote_dir: str,
    local_images: Path,
) -> None:
    try:
        import paramiko
    except ImportError as e:
        raise RuntimeError(
            "paramiko not found (needed without sshpass). Run: pip install -r src/skills/rkflash/requirements-sync.txt"
        ) from e
    local_images.mkdir(parents=True, exist_ok=True)
    t = paramiko.Transport((host, port))
    try:
        t.connect(username=user, password=password)
        sftp = paramiko.SFTPClient.from_transport(t)
        if sftp is None:
            raise RuntimeError("Failed to create SFTP session")
        try:
            _sftp_get_recursive(sftp, remote_dir, local_images)
        finally:
            sftp.close()
    finally:
        t.close()


def _resolve_sshpass_path(explicit: str | None) -> str | None:
    """Prefer --sshpass, then RKFLASH_SSHPASS, then sshpass on PATH."""
    if explicit:
        p = Path(explicit).expanduser()
        if p.is_file():
            return str(p.resolve())
        raise RuntimeError(f"sshpass executable not found: {explicit}")
    envp = os.environ.get("RKFLASH_SSHPASS", "").strip()
    if envp:
        pe = Path(envp).expanduser()
        if pe.is_file():
            return str(pe.resolve())
        raise RuntimeError(f"RKFLASH_SSHPASS points to missing file: {envp}")
    w = shutil.which("sshpass")
    return w


def _sync_images_scp_cli(
    host: str,
    port: int,
    user: str,
    password: str,
    remote_dir: str,
    local_images: Path,
    sshpass_bin: str,
) -> None:
    """
    Equivalent:
      scp -r -P <port> -o StrictHostKeyChecking=accept-new <user>@<host>:<remote_dir>/. <local_images>/
    Password via sshpass (common on Linux).
    """
    local_images.mkdir(parents=True, exist_ok=True)
    src = f"{user}@{host}:{remote_dir.rstrip('/')}/."
    dst = str(local_images.resolve()).replace("\\", "/")
    cmd = [
        sshpass_bin,
        "-p",
        password,
        "scp",
        "-r",
        "-P",
        str(port),
        "-o",
        "StrictHostKeyChecking=accept-new",
        src,
        dst if dst.endswith("/") else dst + "/",
    ]
    r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode != 0:
        out = (r.stdout or "") + (r.stderr or "")
        raise RuntimeError(f"scp failed (exit {r.returncode}): {out.strip() or '(no output)'}")


def _prefer_scp_executable() -> str | None:
    """
    On Windows, Git usr/bin/scp often uses MSYS ssh which may never show password: without a TTY.
    Prefer system OpenSSH scp.exe.
    """
    env = os.environ.get("RKFLASH_SCP", "").strip()
    if env:
        pe = Path(env).expanduser()
        if pe.is_file():
            return str(pe.resolve())
    if sys.platform == "win32":
        sysroot = os.environ.get("SystemRoot", r"C:\Windows")
        openssh = Path(sysroot) / "System32" / "OpenSSH" / "scp.exe"
        if openssh.is_file():
            return str(openssh.resolve())
    return shutil.which("scp")


def _repr_tail(s: object, max_len: int) -> str:
    if s is None:
        return repr(s)
    if not isinstance(s, str):
        return repr(s)
    if len(s) <= max_len:
        return repr(s)
    return repr("..." + s[-max_len:])


def _sync_images_pexpect_scp(
    host: str,
    port: int,
    user: str,
    password: str,
    remote_dir: str,
    local_images: Path,
    *,
    transfer_timeout: int = 86400,
) -> Path:
    """
    Run local scp under pexpect (host key yes, then password prompt).

    OpenSSH may print ``Permission denied (publickey,password).`` before ``password:``.
    Do not match ``permission denied`` in phase1 or pexpect can match too early.

    Debug log: ``<skill-root>/log/rkflash_sync_expect_<timestamp>.log``.
    """
    try:
        import pexpect
        from pexpect import popen_spawn
    except ImportError as e:
        raise RuntimeError(
            "pexpect required for interactive scp: pip install pexpect"
        ) from e

    skill_root = local_images.parent
    log_dir = skill_root / "log"
    log_dir.mkdir(parents=True, exist_ok=True)
    log_ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    log_path = log_dir / f"rkflash_sync_expect_{log_ts}.log"

    def logln(msg: str) -> None:
        with log_path.open("a", encoding="utf-8", newline="\n") as lf:
            lf.write(msg + "\n")
            lf.flush()

    logln(f"rkflash expect-scp debug log started {datetime.now().isoformat()}")
    logln(f"scp_exe(which-first)={shutil.which('scp')!r}")
    logln(f"host={host!r} port={port} user={user!r} remote_dir={remote_dir!r}")
    logln(f"local_images={local_images.resolve()!r}")

    scp_exe = _prefer_scp_executable()
    if not scp_exe:
        logln("ERROR: scp not found")
        raise RuntimeError("scp not found (install OpenSSH client or Git and add to PATH)")
    logln(f"scp_exe(used)={scp_exe!r}")
    local_images.mkdir(parents=True, exist_ok=True)
    remote = f"{user}@{host}:{remote_dir.rstrip('/')}/."
    dst = str(local_images.resolve())
    cmd = [
        scp_exe,
        "-r",
        "-P",
        str(port),
        "-o",
        "StrictHostKeyChecking=accept-new",
        "-o",
        "BatchMode=no",
        "-o",
        "PubkeyAuthentication=no",
        "-o",
        "PreferredAuthentications=password,keyboard-interactive",
        remote,
        dst,
    ]
    logln(f"cmd={cmd!r}")

    try:
        child = popen_spawn.PopenSpawn(
            cmd,
            encoding="utf-8",
            codec_errors="replace",
            timeout=120,
        )
        host_new = r"(?i)are you sure you want to continue connecting"
        # e.g. root@host's password:
        pwd_prompt = r"(?i).{0,120}password\s*:\s*"
        denied = r"(?i)permission denied"

        # Phase1: do not match denied; see docstring
        phase1_patterns = [host_new, pwd_prompt, pexpect.EOF]
        phase1_timeout = int(os.environ.get("RKFLASH_EXPECT_PHASE1_TIMEOUT", "300"))
        logln(f"phase1_timeout_sec={phase1_timeout} (env RKFLASH_EXPECT_PHASE1_TIMEOUT)")
        for round_i in range(30):
            try:
                idx = child.expect(phase1_patterns, timeout=phase1_timeout)
            except pexpect.TIMEOUT:
                logln(f"TIMEOUT phase1 round={round_i} before={_repr_tail(child.before, 4000)}")
                raise RuntimeError(
                    "Timed out waiting for SSH output (host confirm or password prompt). Check network, port, scp."
                ) from None

            logln(f"phase1 round={round_i} idx={idx} (0=host_new 1=password 2=EOF)")
            logln(f"  before={_repr_tail(child.before, 4000)}")
            logln(f"  after={_repr_tail(child.after, 500)}")

            if idx == 0:
                logln("  action: sendline yes")
                child.sendline("yes")
                continue
            if idx == 1:
                logln("  action: sendline <password redacted>")
                child.sendline(password)
                break
            if idx == 2:
                snippet = (child.before or "")[-1500:]
                logln(f"ERROR: EOF before password snippet={snippet!r}")
                raise RuntimeError(
                    "scp ended before password prompt; check command and remote path."
                    f"\nRemote should be user@host:/absolute/path; if you use host://path manually, --remote still takes the directory path.\nOutput tail: {snippet!r}"
                )
        else:
            logln("ERROR: too many phase1 rounds")
            raise RuntimeError("Too many phase1 rounds waiting for password prompt; check network and SSH.")

        logln("phase2: wait transfer finished (denied or EOF)")
        try:
            idx2 = child.expect([denied, pexpect.EOF], timeout=transfer_timeout)
        except pexpect.TIMEOUT:
            logln(f"TIMEOUT phase2 before={_repr_tail(child.before, 4000)}")
            try:
                child.terminate(force=True)
            except Exception:
                pass
            raise RuntimeError(
                f"Transfer did not finish within {transfer_timeout}s (increase --transfer-timeout for large images)"
            ) from None

        logln(f"phase2 idx={idx2} (0=denied 1=EOF)")
        logln(f"  before={_repr_tail(child.before, 4000)}")
        logln(f"  after={_repr_tail(child.after, 500)}")

        if idx2 == 0:
            tail = (child.before or "")[-1500:]
            logln(f"ERROR: permission denied after password tail={tail!r}")
            raise RuntimeError(f"Authentication failed (Permission denied). Tail: {tail!r}")

        child.close()
        code = getattr(child, "exitstatus", None)
        logln(f"child.close() exitstatus={code!r}")
        if code:
            tail = (child.before or "")[-2000:]
            logln(f"ERROR: scp nonzero exit tail={tail!r}")
            raise RuntimeError(f"scp exited with {code}. Output tail: {tail!r}")
        logln("SUCCESS")
        print(f"expect-scp debug log: {log_path}")
    except Exception:
        logln("EXCEPTION (see stderr / raise)")
        import traceback

        logln(traceback.format_exc())
        print(f"expect-scp failed; see log: {log_path}", file=sys.stderr)
        raise

    return log_path


def sync_images_from_server(
    base: Path,
    *,
    host: str,
    port: int = 22,
    user: str,
    password: str,
    remote_dir: str,
    prefer_scp: bool = True,
    sshpass_path: str | None = None,
    scp_only: bool = False,
    expect_scp: bool = False,
    transfer_timeout: int = 86400,
) -> Path:
    """
    Sync remote directory to base/images.
    expect_scp=True: pexpect-driven scp with password (no sshpass).
    Else: sshpass+scp if available, else paramiko SFTP.
    scp_only=True: sshpass+scp only (mutually exclusive with expect_scp; expect wins).
    """
    pwd = password
    images_dir = (base / "images").resolve()

    if expect_scp:
        _sync_images_pexpect_scp(
            host,
            port,
            user,
            pwd,
            remote_dir,
            images_dir,
            transfer_timeout=transfer_timeout,
        )
        return images_dir

    sshpass_bin = _resolve_sshpass_path(sshpass_path)

    if scp_only:
        if not sshpass_bin:
            raise RuntimeError(
                "scp-only mode but sshpass not found. Add to PATH, set RKFLASH_SSHPASS, or use --sshpass."
            )
        _sync_images_scp_cli(host, port, user, pwd, remote_dir, images_dir, sshpass_bin)
        return images_dir

    if prefer_scp and sshpass_bin:
        _sync_images_scp_cli(host, port, user, pwd, remote_dir, images_dir, sshpass_bin)
    else:
        _sync_images_paramiko(host, port, user, pwd, remote_dir, images_dir)
    return images_dir


def _parse_sync_argv(argv: list[str]) -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Sync images from server (scp / SFTP)")
    p.add_argument(
        "--base",
        type=Path,
        default=None,
        help="Skill root directory (default: directory containing rkflash.py)",
    )
    p.add_argument(
        "--host",
        default=None,
        help="SSH host (else RKFLASH_SYNC_HOST or rkflash_sync_config.json)",
    )
    p.add_argument(
        "-P",
        "--port",
        type=int,
        default=None,
        help="SSH port (default 22; or RKFLASH_SYNC_PORT / sync_port in config)",
    )
    p.add_argument(
        "--user",
        default=None,
        help="SSH username (else RKFLASH_SYNC_USER or config)",
    )
    p.add_argument(
        "--password",
        default=None,
        help="SSH password (else RKFLASH_SSH_PASSWORD or sync_password in config)",
    )
    p.add_argument(
        "--remote",
        default=None,
        help="Remote images directory (else RKFLASH_SYNC_REMOTE or config)",
    )
    p.add_argument(
        "--no-prefer-scp",
        action="store_true",
        help="Do not use sshpass+scp; force paramiko",
    )
    p.add_argument(
        "--sshpass",
        default=None,
        metavar="EXE",
        help="sshpass executable path (or env RKFLASH_SSHPASS)",
    )
    p.add_argument(
        "--scp-only",
        action="store_true",
        help="sshpass+scp only; no SFTP/paramiko",
    )
    p.add_argument(
        "--expect-scp",
        action="store_true",
        help="Use pexpect to drive scp and send password (when sshpass fails on Windows)",
    )
    p.add_argument(
        "--transfer-timeout",
        type=int,
        default=86400,
        metavar="SEC",
        help="expect-scp transfer max wait seconds (default 86400 = 24h)",
    )
    return p.parse_args(argv)


def _parse_raw_scp_argv(argv: list[str]) -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Run the same scp as manual use via shell under images/ (inherits stdin/stdout/stderr)",
    )
    p.add_argument(
        "--base",
        type=Path,
        default=None,
        help="Skill root (cwd will be <base>/images)",
    )
    p.add_argument(
        "--cmd",
        default=None,
        help="Full scp shell command (else RKFLASH_RAW_SCP_CMD or raw_scp_cmd in config)",
    )
    return p.parse_args(argv)


def cmd_raw_scp(argv: list[str]) -> int:
    """Shell-run the same command as the user; cwd=<base>/images for password typing."""
    args = _parse_raw_scp_argv(argv)
    base = _skill_base(args.base)
    images_dir = (base / "images").resolve()
    images_dir.mkdir(parents=True, exist_ok=True)
    try:
        cmd = _resolve_raw_scp_command(base, args.cmd).strip()
    except RuntimeError as e:
        print(str(e), file=sys.stderr)
        return 1
    print(f"[raw-scp] cwd={images_dir}", flush=True)
    print(f"[raw-scp] cmd={cmd!r}", flush=True)
    code = subprocess.call(
        cmd,
        shell=True,
        cwd=str(images_dir),
        stdin=sys.stdin,
        stdout=sys.stdout,
        stderr=sys.stderr,
    )
    if code == 0:
        _flatten_nested_images_subdir(images_dir)
        print("[raw-scp] flattened nested images/images/ into images/ (if present)", flush=True)
    return int(code)


def _resolve_pscp_exe(explicit: str | None) -> Path:
    if explicit:
        p = Path(explicit).expanduser()
        if p.is_file():
            return p.resolve()
        raise RuntimeError(f"pscp not found: {explicit}")
    env = os.environ.get("RKFLASH_PSCP", "").strip()
    if env:
        pe = Path(env).expanduser()
        if pe.is_file():
            return pe.resolve()
        raise RuntimeError(f"RKFLASH_PSCP points to missing file: {env}")
    if sys.platform == "win32" and DEFAULT_PSCP_EXE.is_file():
        return DEFAULT_PSCP_EXE.resolve()
    w = shutil.which("pscp")
    if w:
        return Path(w).resolve()
    raise RuntimeError(
        "pscp.exe not found. Install PuTTY (e.g. C:\\PuTTY), set RKFLASH_PSCP, or use pscp-sync --pscp <path>"
    )


def _parse_pscp_sync_argv(argv: list[str]) -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Non-interactive pull with PuTTY pscp -pw into images/ (Windows)",
    )
    p.add_argument("--base", type=Path, default=None, help="Skill root directory")
    p.add_argument(
        "--pscp",
        default=None,
        metavar="EXE",
        help="pscp.exe path (RKFLASH_PSCP, optional C:\\PuTTY\\pscp.exe if present, or PATH)",
    )
    p.add_argument(
        "--host",
        default=None,
        help="SSH host (else RKFLASH_SYNC_HOST or config)",
    )
    p.add_argument(
        "--user",
        default=None,
        help="SSH user (else RKFLASH_SYNC_USER or config)",
    )
    p.add_argument(
        "--password",
        default=None,
        help="SSH password (else RKFLASH_SSH_PASSWORD or config)",
    )
    p.add_argument(
        "-P",
        "--port",
        type=int,
        default=None,
        help="SSH port (default 22; passed to pscp -P)",
    )
    p.add_argument(
        "--remote",
        default=None,
        help="Remote directory absolute path (else RKFLASH_SYNC_REMOTE or config)",
    )
    p.add_argument(
        "--timeout",
        type=int,
        default=DEFAULT_PSCP_SYNC_TIMEOUT_SEC,
        metavar="SEC",
        help="Max seconds for entire pscp run; kill child on timeout (default 1800 = 30 min)",
    )
    return p.parse_args(argv)


def cmd_pscp_sync(argv: list[str]) -> int:
    """Like: pscp -pw ... -r user@host:remote . with cwd=<base>/images"""
    args = _parse_pscp_sync_argv(argv)
    base = _skill_base(args.base)
    images_dir = (base / "images").resolve()
    images_dir.mkdir(parents=True, exist_ok=True)
    try:
        pscp = _resolve_pscp_exe(args.pscp)
    except RuntimeError as e:
        print(str(e), file=sys.stderr)
        return 1
    try:
        sc = _resolve_rkflash_ssh_config(
            base,
            host_cli=args.host,
            port_cli=args.port,
            user_cli=args.user,
            password_cli=args.password,
            remote_images_cli=args.remote,
            remote_ohos_cli=None,
            require_remote_images=True,
            require_remote_ohos=False,
        )
    except RuntimeError as e:
        print(str(e), file=sys.stderr)
        return 1
    pwd = sc.password
    remote = sc.remote_images.strip().rstrip("/")
    spec = f"{sc.user}@{sc.host}:{remote}"
    cmd: list[str] = [
        str(pscp),
        "-batch",
        "-pw",
        pwd,
        "-r",
        "-P",
        str(sc.port),
        spec,
        ".",
    ]
    print(f"[pscp-sync] pscp={pscp}", flush=True)
    print(f"[pscp-sync] cwd={images_dir}", flush=True)
    print(f"[pscp-sync] remote={spec}", flush=True)
    print(f"[pscp-sync] timeout_sec={args.timeout}", flush=True)
    try:
        r = subprocess.run(
            cmd,
            cwd=str(images_dir),
            stdin=subprocess.DEVNULL,
            timeout=args.timeout,
        )
    except subprocess.TimeoutExpired:
        print(
            f"[pscp-sync] timeout ({args.timeout}s): pscp terminated; increase --timeout for large syncs",
            file=sys.stderr,
        )
        return 124
    if r.returncode == 0:
        _flatten_nested_images_subdir(images_dir)
        print("[pscp-sync] flattened nested images/images/ into images/ (if present)", flush=True)
    return int(r.returncode) if r.returncode is not None else 1


def cmd_sync_images(argv: list[str]) -> int:
    args = _parse_sync_argv(argv)
    base = _skill_base(args.base)
    try:
        sc = _resolve_rkflash_ssh_config(
            base,
            host_cli=args.host,
            port_cli=args.port,
            user_cli=args.user,
            password_cli=args.password,
            remote_images_cli=args.remote,
            remote_ohos_cli=None,
            require_remote_images=True,
            require_remote_ohos=False,
        )
        sync_images_from_server(
            base,
            host=sc.host,
            port=sc.port,
            user=sc.user,
            password=sc.password,
            remote_dir=sc.remote_images,
            prefer_scp=not args.no_prefer_scp,
            sshpass_path=args.sshpass,
            scp_only=args.scp_only,
            expect_scp=args.expect_scp,
            transfer_timeout=args.transfer_timeout,
        )
    except RuntimeError as e:
        print(str(e), file=sys.stderr)
        return 1
    print(f"Synced {sc.user}@{sc.host}:{sc.remote_images} -> {base / 'images'}")
    return 0


def _ensure_dirs(base: Path) -> tuple[Path, Path]:
    bin_dir = base / "bin"
    images_dir = base / "images"
    tool = bin_dir / "upgrade_tool.exe"
    if not bin_dir.is_dir():
        raise RuntimeError(f"Missing directory: {bin_dir}")
    if not images_dir.is_dir():
        raise RuntimeError(f"Missing directory: {images_dir}")
    if not tool.is_file():
        raise RuntimeError(f"Tool not found: {tool}")
    return tool, images_dir


# Rockchip upgrade_tool config.cfg: binary, embedded paths often UTF-16-LE (e.g. ...\uboot.img).
_UTF16_DOT_IMG = bytes([0x2E, 0, 0x69, 0, 0x6D, 0, 0x67, 0])
_UTF16_DOT_BIN = bytes([0x2E, 0, 0x62, 0, 0x69, 0, 0x6E, 0])
_BURN_BASENAME_RE = re.compile(r"^[A-Za-z0-9][A-Za-z0-9_.-]*\.(img|bin)$")
_CFG_LABEL_RE = re.compile(r"^[A-Za-z][A-Za-z0-9_-]{1,31}$")
# Labels before .img paths that are not upgrade_tool partition names (noise in cfg).
_CFG_SKIP_LABELS_FOR_IMG = frozenset(
    {
        "bin",
        "txt",
        "ter",
        "Loader",
        "eng_chipset",
        "eng_system",
        "misc",
        "bootctrl",
        "Parameter",
    }
)


@dataclass(frozen=True)
class CfgFlashPartition:
    """One partition image: upgrade_tool argv flag (e.g. -resource) and local basename."""

    cfg_label: str
    di_flag: str
    image_basename: str


@dataclass(frozen=True)
class CfgFlashLayout:
    loader_basename: str
    partitions: tuple[CfgFlashPartition, ...]


def _utf16le_path_before_dot_ext(data: bytes, dot_idx: int, ext_len_utf16_bytes: int) -> str | None:
    """Slice UTF-16-LE path ending at dot_idx+ext_len (inclusive). ext_len_utf16_bytes is 8 for .img/.bin."""
    j = dot_idx
    while j >= 2:
        lo, hi = data[j - 2], data[j - 1]
        if hi != 0 or not (32 <= lo < 127):
            break
        j -= 2
    raw = data[j : dot_idx + ext_len_utf16_bytes]
    if len(raw) < 8 or len(raw) % 2:
        return None
    try:
        s = raw.decode("utf-16-le")
    except UnicodeDecodeError:
        return None
    s = s.strip("\x00").strip()
    if not s:
        return None
    name = Path(s.replace("/", "\\")).name
    if not _BURN_BASENAME_RE.match(name):
        return None
    return name


def _cfg_label_to_di_flag(label: str) -> str:
    low = label.strip().lower()
    if low == "uboot":
        return "-u"
    return "-" + low


def _scan_cfg_utf16_paths_and_labels(data: bytes) -> list[tuple[int, str, str]]:
    """
    Scan config.cfg for UTF-16-LE ASCII runs: partition labels and Windows-style image paths.
    Returns sorted (byte_offset, 'lab'|'path', text).
    """
    items: list[tuple[int, str, str]] = []
    i = 0
    while i < len(data) - 3:
        if data[i + 1] == 0 and 32 <= data[i] < 127:
            j = i
            while j + 1 < len(data) and data[j + 1] == 0 and 32 <= data[j] < 127:
                j += 2
            s = data[i:j].decode("utf-16-le")
            low = s.lower()
            if ("\\" in s or "/" in s) and (".img" in low or ".bin" in low):
                norm = Path(s.replace("/", "\\")).name
                if _BURN_BASENAME_RE.match(norm):
                    items.append((i, "path", s))
            elif _CFG_LABEL_RE.match(s) and len(s) >= 3:
                items.append((i, "lab", s))
            i = j
        else:
            i += 1
    items.sort(key=lambda t: t[0])
    return items


def parse_rockchip_config_cfg_flash_layout(data: bytes) -> CfgFlashLayout:
    """
    Parse Rockchip binary config.cfg: loader .bin basename, partition list with di flags
    from UTF-16 labels (e.g. resource -> -resource, Uboot -> -u) and image basenames from paths.
    Order is first occurrence of each unique .img basename in the file.
    """
    items = _scan_cfg_utf16_paths_and_labels(data)
    seen_img: set[str] = set()
    partitions: list[CfgFlashPartition] = []
    loader_basename: str | None = None

    for off, kind, text in items:
        if kind != "path":
            continue
        norm = Path(text.replace("/", "\\")).name
        if norm.endswith(".bin"):
            if loader_basename is None:
                loader_basename = norm
            continue
        if norm in seen_img:
            continue
        seen_img.add(norm)
        prev_labs = [
            lab
            for o, k, lab in items
            if o < off and k == "lab" and lab not in _CFG_SKIP_LABELS_FOR_IMG
        ]
        if not prev_labs:
            raise RuntimeError(
                f"config.cfg: no partition label before image path {norm!r} "
                f"(byte offset {off})"
            )
        label = prev_labs[-1]
        flag = _cfg_label_to_di_flag(label)
        partitions.append(
            CfgFlashPartition(
                cfg_label=label, di_flag=flag, image_basename=norm
            )
        )

    if loader_basename is None:
        raise RuntimeError("config.cfg: no .bin loader path found (e.g. MiniLoaderAll.bin)")
    if not partitions:
        raise RuntimeError("config.cfg: no .img partition paths found")
    uboot_n = sum(1 for p in partitions if p.di_flag == "-u")
    if uboot_n != 1:
        raise RuntimeError(
            f"config.cfg: expected exactly one Uboot partition for di -u, found {uboot_n}"
        )
    return CfgFlashLayout(
        loader_basename=loader_basename,
        partitions=tuple(partitions),
    )


def parse_rockchip_config_cfg_burn_files(data: bytes) -> tuple[list[str], list[str]]:
    """
    Partition .img basenames (ordered) and loader .bin basename from config.cfg.
    Kept for callers that only need names; see parse_rockchip_config_cfg_flash_layout for di flags.
    """
    layout = parse_rockchip_config_cfg_flash_layout(data)
    imgs = [p.image_basename for p in layout.partitions]
    bins = [layout.loader_basename]
    return imgs, bins


def load_flash_layout_from_config(cfg_path: Path) -> CfgFlashLayout:
    if not cfg_path.is_file():
        raise RuntimeError(f"Missing {cfg_path} (required for flash layout and file checks)")
    data = cfg_path.read_bytes()
    if len(data) < 4 or not data.startswith(b"CFG\x00"):
        raise RuntimeError(f"{cfg_path} does not look like a Rockchip binary config (expected CFG header)")
    try:
        return parse_rockchip_config_cfg_flash_layout(data)
    except RuntimeError:
        raise
    except Exception as e:
        raise RuntimeError(f"Failed to parse {cfg_path}: {e}") from e


def _check_images_layout(images_dir: Path, layout: CfgFlashLayout) -> None:
    missing: list[str] = []
    if not (images_dir / layout.loader_basename).is_file():
        missing.append(layout.loader_basename)
    for p in layout.partitions:
        if not (images_dir / p.image_basename).is_file():
            missing.append(p.image_basename)
    if missing:
        raise RuntimeError("images/ missing files: " + ", ".join(missing))


def _parse_analyze_config_argv(argv: list[str]) -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Analyze Rockchip binary config.cfg for burn image basenames"
    )
    p.add_argument(
        "--base",
        type=Path,
        default=None,
        help="Skill root (default: this script's directory)",
    )
    p.add_argument(
        "--config",
        type=Path,
        default=None,
        metavar="PATH",
        help="config.cfg path (default: <base>/images/config.cfg)",
    )
    return p.parse_args(argv)


def cmd_analyze_config(argv: list[str]) -> int:
    args = _parse_analyze_config_argv(argv)
    base = _skill_base(args.base)
    cfg = args.config
    if cfg is None:
        cfg_path = (base / "images" / "config.cfg").resolve()
    else:
        cfg_path = cfg.expanduser().resolve()
    if not cfg_path.is_file():
        print(f"Not found: {cfg_path}", file=sys.stderr)
        return 1
    try:
        layout = load_flash_layout_from_config(cfg_path)
    except RuntimeError as e:
        print(str(e), file=sys.stderr)
        return 1
    print(f"config.cfg: {cfg_path}")
    print(f"Loader (ul): {layout.loader_basename}")
    print("Partitions (di <flag> <basename>), flash order:")
    for i, p in enumerate(layout.partitions, start=1):
        print(
            f"  {i}. cfg label {p.cfg_label!r} -> {p.di_flag} {p.image_basename}"
        )
    return 0


def _extract_software_version_value(text: str) -> str | None:
    m = _SOFTWARE_VERSION_RE.search(text)
    if not m:
        return None
    return m.group(1).strip()


def _get_device_software_version(hdc_timeout: int) -> str:
    try:
        proc = subprocess.run(
            ["hdc", "shell", "param", "get"],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=hdc_timeout,
        )
    except FileNotFoundError:
        raise RuntimeError("hdc not found (needed for version check)") from None
    except subprocess.TimeoutExpired:
        raise RuntimeError("hdc shell param get timed out") from None
    out = (proc.stdout or "") + "\n" + (proc.stderr or "")
    if proc.returncode != 0:
        raise RuntimeError(f"hdc shell param get failed, exit code {proc.returncode}")
    val = _extract_software_version_value(out)
    if not val:
        raise RuntimeError(
            f"{SOFTWARE_VERSION_PARAM} not found in hdc shell param get output"
        )
    return val


def _fetch_remote_ohos_para_text(
    host: str,
    port: int,
    user: str,
    password: str,
    remote_path: str,
    pscp_timeout: int,
) -> str:
    errors: list[str] = []
    pscp: Path | None = None
    try:
        pscp = _resolve_pscp_exe(None)
    except RuntimeError as e:
        errors.append(str(e))

    if pscp is not None:
        fd, tmp_name = tempfile.mkstemp(suffix=".para")
        os.close(fd)
        tmp = Path(tmp_name)
        try:
            spec = f"{user}@{host}:{remote_path}"
            cmd = [
                str(pscp),
                "-batch",
                "-pw",
                password,
                "-P",
                str(port),
                spec,
                str(tmp),
            ]
            r = subprocess.run(cmd, stdin=subprocess.DEVNULL, timeout=pscp_timeout)
            if r.returncode == 0 and tmp.is_file():
                try:
                    return tmp.read_text(encoding="utf-8", errors="replace")
                finally:
                    pass
            errors.append(f"pscp exit code {r.returncode}")
        finally:
            try:
                tmp.unlink(missing_ok=True)
            except OSError:
                pass

    try:
        import paramiko
    except ImportError as e:
        raise RuntimeError(
            "Cannot fetch remote ohos.para: pscp failed or unavailable, and paramiko "
            "is not installed (pip install paramiko). "
            + ("; ".join(errors) if errors else "")
        ) from e

    t = paramiko.Transport((host, port))
    try:
        t.connect(username=user, password=password)
        sftp = paramiko.SFTPClient.from_transport(t)
        if sftp is None:
            raise RuntimeError("Failed to create SFTP session for ohos.para")
        try:
            with sftp.open(remote_path, "rb") as rf:
                data = rf.read()
            return data.decode("utf-8", errors="replace")
        finally:
            sftp.close()
    finally:
        t.close()


def _append_log_lines(log_path: Path, lines: list[str]) -> None:
    with log_path.open("a", encoding="utf-8", newline="\n") as lf:
        for line in lines:
            lf.write(line if line.endswith("\n") else line + "\n")
        lf.flush()


def _hdc_turn_off_all_leds_after_verify(log_path: Path, hdc_timeout: int) -> None:
    """Best-effort: write 0 to /sys/class/leds/*/brightness via hdc. Does not raise."""
    script, mode_note = _resolve_leds_off_script(log_path)
    cmd_note = "hdc shell sh -c <LED script>"
    extra = f" ({mode_note})\n" if mode_note else "\n"
    _append_log_lines(
        log_path,
        ["\n=== Turn off all LEDs (after VERIFY OK) ===\n", extra, f"$ {cmd_note}\n"],
    )
    argv = ["hdc", "shell", "sh", "-c", script]
    try:
        proc = subprocess.run(
            argv,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=hdc_timeout,
        )
    except FileNotFoundError:
        _append_log_lines(log_path, ["hdc not found; skip LEDs off.\n"])
        print("LEDs off skipped: hdc not found", file=sys.stderr)
        return
    except subprocess.TimeoutExpired:
        _append_log_lines(
            log_path,
            [f"hdc shell (LEDs off) timed out after {hdc_timeout}s (non-fatal).\n"],
        )
        print("LEDs off: hdc timed out (non-fatal)", file=sys.stderr)
        return
    out = (proc.stdout or "") + (proc.stderr or "")
    if out.strip():
        _append_log_lines(log_path, [out if out.endswith("\n") else out + "\n"])
    _append_log_lines(log_path, [f"[exit code] {proc.returncode}\n"])
    if proc.returncode == 0:
        _append_log_lines(log_path, ["[step ok] LEDs off script finished.\n"])
        print("All LEDs off (best-effort).")
    else:
        _append_log_lines(
            log_path,
            [
                f"LEDs off: hdc exit {proc.returncode} (non-fatal; flash+verify already OK).\n",
            ],
        )
        print(
            f"LEDs off: hdc exited {proc.returncode} (non-fatal)",
            file=sys.stderr,
        )


def verify_flashed_version_against_server(
    log_path: Path,
    *,
    host: str,
    port: int,
    user: str,
    password: str,
    remote_ohos_para: str,
    delay_sec: int,
    hdc_timeout: int,
    pscp_timeout: int,
    leds_off: bool = True,
) -> None:
    """
    After flash + reset: wait, read const.product.software.version from device (hdc shell param get),
    fetch same key from server ohos.para, compare. Match => success proof; mismatch => RuntimeError.
    hdc_timeout applies to both param get and the optional post-verify LEDs-off hdc shell.
    If leds_off and match, run best-effort hdc script (see _resolve_leds_off_script: config leds_off_cmd, names, or default blue,green,red).
    """
    _append_log_lines(
        log_path,
        [
            "\n=== Post-flash version check ===\n",
            f"Compare device {SOFTWARE_VERSION_PARAM} to server file {remote_ohos_para!r}\n",
            f"Waiting {delay_sec}s for device boot after reset before hdc...\n",
        ],
    )
    time.sleep(delay_sec)

    _append_log_lines(log_path, ["$ hdc shell param get (parse key in script)\n"])
    device_val = _get_device_software_version(hdc_timeout)
    _append_log_lines(
        log_path,
        [f"device: {SOFTWARE_VERSION_PARAM}={device_val!r}\n"],
    )

    _append_log_lines(
        log_path,
        [f"Fetching server file: {user}@{host}:{remote_ohos_para}\n"],
    )
    para_text = _fetch_remote_ohos_para_text(
        host, port, user, password, remote_ohos_para, pscp_timeout
    )
    server_val = _extract_software_version_value(para_text)
    if not server_val:
        raise RuntimeError(
            f"{SOFTWARE_VERSION_PARAM} not found in remote {remote_ohos_para!r}"
        )
    _append_log_lines(
        log_path,
        [f"server: {SOFTWARE_VERSION_PARAM}={server_val!r}\n"],
    )

    if device_val == server_val:
        _append_log_lines(
            log_path,
            [
                "VERIFY OK: value matches server ohos.para (flash verified).\n",
            ],
        )
        print(
            f"Version verify OK: {SOFTWARE_VERSION_PARAM} matches server ({device_val!r})"
        )
        if leds_off:
            _hdc_turn_off_all_leds_after_verify(log_path, hdc_timeout)
        return

    _append_log_lines(
        log_path,
        [
            f"VERIFY FAIL: mismatch device={device_val!r} server={server_val!r}\n",
        ],
    )
    raise RuntimeError(
        f"Version mismatch: device {device_val!r} != server ohos.para {server_val!r}"
    )


def _log_line(log_fp, text: str) -> None:
    log_fp.write(text)
    if not text.endswith("\n"):
        log_fp.write("\n")
    log_fp.flush()


def _output_has_ok(text: str) -> bool:
    return "ok" in text.lower()


def _run_hdc_reboot_loader(log_fp, timeout: int) -> None:
    argv = ["hdc", "shell", "reboot", "loader"]
    cmd_str = " ".join(argv)
    _log_line(log_fp, f"\n=== 1. Reboot to loader mode ===\n$ {cmd_str}\n")
    try:
        proc = subprocess.run(
            argv,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=timeout,
        )
    except FileNotFoundError:
        raise RuntimeError("hdc not found; add to PATH or install OpenHarmony SDK tools.") from None
    except subprocess.TimeoutExpired:
        raise RuntimeError("hdc shell reboot loader timed out.") from None
    out = proc.stdout or ""
    _log_line(log_fp, out)
    _log_line(log_fp, f"[exit code] {proc.returncode}\n")
    if proc.returncode != 0:
        raise RuntimeError(f"hdc failed, exit code {proc.returncode}")
    # Device may disconnect after reboot; output may lack ok; trust exit code 0
    _log_line(log_fp, "[step ok] hdc reboot loader succeeded (exit code 0)\n")
    _log_line(log_fp, "Waiting for device in loader (15s)...\n")
    time.sleep(15)


def _run_upgrade_tool(
    tool: Path,
    work_cwd: Path,
    step_title: str,
    args: list[str],
    log_fp,
    timeout: int,
    require_ok_in_output: bool,
) -> None:
    argv = [str(tool)] + args
    cmd_str = " ".join(argv)
    _log_line(log_fp, f"\n=== {step_title} ===\n$ {cmd_str}\n")
    proc = subprocess.Popen(
        argv,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        cwd=str(work_cwd),
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    chunks: list[str] = []

    def reader() -> None:
        assert proc.stdout is not None
        for line in proc.stdout:
            chunks.append(line)
            log_fp.write(line)
            log_fp.flush()

    th = threading.Thread(target=reader, daemon=True)
    th.start()
    try:
        proc.wait(timeout=timeout)
    except subprocess.TimeoutExpired:
        proc.kill()
        try:
            proc.wait(timeout=10)
        except subprocess.TimeoutExpired:
            pass
        th.join(timeout=5)
        raise RuntimeError(f"Timeout: {step_title}")
    th.join(timeout=5)
    full = "".join(chunks)
    _log_line(log_fp, f"[exit code] {proc.returncode}\n")
    if proc.returncode != 0:
        raise RuntimeError(f"{step_title} failed, exit code {proc.returncode}")
    if require_ok_in_output and not _output_has_ok(full):
        raise RuntimeError(f"{step_title}: output did not contain ok; aborting.")
    _log_line(log_fp, "[step ok]\n")


def flash_all(base: Path, hdc_timeout: int, step_timeout: int, long_timeout: int) -> Path:
    tool, images_dir = _ensure_dirs(base)
    layout = load_flash_layout_from_config(images_dir / "config.cfg")
    _check_images_layout(images_dir, layout)

    log_dir = base / "log"
    log_dir.mkdir(parents=True, exist_ok=True)
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    log_path = log_dir / f"rkflash_{ts}.log"
    with log_path.open("w", encoding="utf-8", newline="\n") as log_fp:
        _log_line(log_fp, f"rkflash log started at {datetime.now().isoformat()}\n")
        _log_line(log_fp, f"base={base}\n")

        _run_hdc_reboot_loader(log_fp, hdc_timeout)

        # 2-5: short commands
        _run_upgrade_tool(
            tool, base, "2. Test device (td)", ["td"], log_fp, step_timeout, True
        )
        # rcb: success prints Capability/enabled etc., not literal ok; trust exit 0 only
        _run_upgrade_tool(
            tool, base, "3. Get flashinfo (rcb)", ["rcb"], log_fp, step_timeout, False
        )
        _run_upgrade_tool(
            tool,
            base,
            f"4. Prepare IDB (ul {layout.loader_basename} -noreset)",
            ["ul", str(images_dir / layout.loader_basename), "-noreset"],
            log_fp,
            long_timeout,
            True,
        )
        _run_upgrade_tool(
            tool, base, "5. Test device (td)", ["td"], log_fp, step_timeout, True
        )

        uboot_part = next(p for p in layout.partitions if p.di_flag == "-u")
        uboot_path = str(images_dir / uboot_part.image_basename)
        _run_upgrade_tool(
            tool,
            base,
            f"6. Download GPT (di -u {uboot_part.image_basename})",
            ["di", "-u", uboot_path],
            log_fp,
            long_timeout,
            True,
        )
        _run_upgrade_tool(
            tool,
            base,
            f"7. Download uboot (di -u {uboot_part.image_basename})",
            ["di", "-u", uboot_path],
            log_fp,
            long_timeout,
            True,
        )

        step_no = 8
        for p in layout.partitions:
            if p.di_flag == "-u":
                continue
            title = (
                f"{step_no}. Download {p.cfg_label.lower()} "
                f"(di {p.di_flag} {p.image_basename})"
            )
            _run_upgrade_tool(
                tool,
                base,
                title,
                ["di", p.di_flag, str(images_dir / p.image_basename)],
                log_fp,
                long_timeout,
                True,
            )
            step_no += 1

        _run_upgrade_tool(
            tool, base, f"{step_no}. reset device (rd)", ["rd"], log_fp, step_timeout, True
        )

        _log_line(log_fp, f"\nAll steps finished: {datetime.now().isoformat()}\n")

    return log_path


def main() -> int:
    if len(sys.argv) > 1 and sys.argv[1] == "sync-images":
        return cmd_sync_images(sys.argv[2:])
    if len(sys.argv) > 1 and sys.argv[1] == "raw-scp":
        return cmd_raw_scp(sys.argv[2:])
    if len(sys.argv) > 1 and sys.argv[1] == "pscp-sync":
        return cmd_pscp_sync(sys.argv[2:])
    if len(sys.argv) > 1 and sys.argv[1] == "analyze-config":
        return cmd_analyze_config(sys.argv[2:])

    p = argparse.ArgumentParser(
        description=(
            "Rockchip flash: upgrade_tool + hdc; image list and di flags from images/config.cfg; "
            "default post-flash version verify (exit 0 = flash + verify OK)."
        ),
        epilog=(
            "Subcommands: sync-images | raw-scp | pscp-sync | analyze-config. "
            "Flash completion: wait for exit 0 with default verify (see SKILL.md / module docstring)."
        ),
    )
    p.add_argument(
        "--base",
        type=Path,
        default=None,
        help="Skill root (default: this script's directory; must contain bin/ and images/)",
    )
    p.add_argument(
        "--hdc-timeout",
        type=int,
        default=120,
        help="Timeout seconds for hdc reboot loader (default 120)",
    )
    p.add_argument(
        "--step-timeout",
        type=int,
        default=600,
        help="Timeout for short steps td/rcb/rd etc. (default 600)",
    )
    p.add_argument(
        "--long-timeout",
        type=int,
        default=7200,
        help="Timeout for long steps image download, ul, etc. (default 7200)",
    )
    p.add_argument(
        "--no-verify-version",
        action="store_true",
        help=(
            "Skip post-flash version check (hdc param get vs server ohos.para). "
            "Not sufficient to confirm a successful release flash; use only when debugging."
        ),
    )
    p.add_argument(
        "--no-leds-off",
        action="store_true",
        help=(
            "After VERIFY OK, do not run hdc to turn off sysfs LEDs "
            "(default: best-effort LEDs off; failures are non-fatal)."
        ),
    )
    p.add_argument(
        "--verify-host",
        default=None,
        help="SSH host for ohos.para (else RKFLASH_SYNC_HOST or config)",
    )
    p.add_argument(
        "--verify-user",
        default=None,
        help="SSH user for ohos.para (else RKFLASH_SYNC_USER or config)",
    )
    p.add_argument(
        "--verify-password",
        default=None,
        help="SSH password for ohos.para (else RKFLASH_SSH_PASSWORD or config)",
    )
    p.add_argument(
        "--verify-port",
        type=int,
        default=None,
        help="SSH port for ohos.para (default 22; or RKFLASH_SYNC_PORT / config)",
    )
    p.add_argument(
        "--remote-ohos-para",
        default=None,
        metavar="PATH",
        help="Remote ohos.para path (else RKFLASH_REMOTE_OHOS_PARA, config, or derived from sync_remote)",
    )
    p.add_argument(
        "--verify-delay",
        type=int,
        default=60,
        metavar="SEC",
        help="Wait after flash reset before hdc param get (default 60)",
    )
    p.add_argument(
        "--verify-hdc-timeout",
        type=int,
        default=120,
        metavar="SEC",
        help=(
            "Timeout seconds for hdc during post-flash: param get and LEDs-off script "
            "(default 120)"
        ),
    )
    p.add_argument(
        "--verify-pscp-timeout",
        type=int,
        default=120,
        metavar="SEC",
        help="Timeout for pscp/SFTP fetch of ohos.para (default 120)",
    )
    args = p.parse_args()
    base = _skill_base(args.base)
    try:
        log_path = flash_all(base, args.hdc_timeout, args.step_timeout, args.long_timeout)
    except RuntimeError as e:
        print(str(e), file=sys.stderr)
        return 1
    print(f"Flash finished, log: {log_path}")
    if not args.no_verify_version:
        try:
            vcfg = _resolve_rkflash_ssh_config(
                base,
                host_cli=args.verify_host,
                port_cli=args.verify_port,
                user_cli=args.verify_user,
                password_cli=args.verify_password,
                remote_images_cli=None,
                remote_ohos_cli=args.remote_ohos_para,
                require_remote_images=False,
                require_remote_ohos=True,
            )
        except RuntimeError as e:
            print(str(e), file=sys.stderr)
            return 1
        try:
            verify_flashed_version_against_server(
                log_path,
                host=vcfg.host,
                port=vcfg.port,
                user=vcfg.user,
                password=vcfg.password,
                remote_ohos_para=vcfg.remote_ohos_para.strip(),
                delay_sec=args.verify_delay,
                hdc_timeout=args.verify_hdc_timeout,
                pscp_timeout=args.verify_pscp_timeout,
                leds_off=not args.no_leds_off,
            )
        except RuntimeError as e:
            print(str(e), file=sys.stderr)
            return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

