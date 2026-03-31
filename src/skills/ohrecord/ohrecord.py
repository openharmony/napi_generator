#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OpenHarmony snapshot_record（屏幕录制 MP4）辅助脚本：
源码路径说明、全量编译、设备目录与 SELinux 标签、录制、拉取、hilog、本机/设备 .so 校验。

依赖：本机已配置 hdc，设备已连接（多设备时用 -t 或环境变量 OHRECORD_HDC_TARGET）。
"""

from __future__ import annotations

import argparse
import os
import subprocess
import sys
from pathlib import Path

# 特征串：与服务端 ScreenCaptureServer::InitRecorder 日志一致，用于确认镜像含「路径 open」逻辑
MARKER_INIT_RECORDER_PATH = "InitRecorder open output by file path (no IPC fd)"

DEFAULT_PRODUCT = "rk3568"
DEFAULT_RECORD_DIR = "/data/test/media"
DEFAULT_DEVICE_SO = "/system/lib/libmedia_service.z.so"
DEFAULT_DEVICE_SO_ALT = "/system/lib64/libmedia_service.z.so"


def skill_dir() -> Path:
    return Path(__file__).resolve().parent


def infer_src_root(explicit: str | None) -> Path:
    if explicit:
        return Path(explicit).expanduser().resolve()
    env = os.environ.get("OHOS_SRC", "").strip()
    if env:
        return Path(env).expanduser().resolve()
    # 从脚本位置向上查找含 build.sh 的目录（OpenHarmony 源码根）
    p = Path(__file__).resolve()
    for i in range(1, min(8, len(p.parts))):
        cand = p.parents[i]
        if (cand / "build.sh").is_file():
            return cand
    return p.parents[3]


def hdc_target_arg(target: str | None) -> list[str]:
    t = (target or os.environ.get("OHRECORD_HDC_TARGET", "") or "").strip()
    if t:
        return ["-t", t]
    return []


def run_cmd(
    argv: list[str],
    *,
    cwd: Path | None = None,
    timeout: int | None = None,
    shell: bool = False,
) -> subprocess.CompletedProcess:
    return subprocess.run(
        argv,
        cwd=str(cwd) if cwd else None,
        capture_output=True,
        text=True,
        timeout=timeout,
        shell=shell,
    )


def hdc_shell(target: str | None, inner: str, timeout: int = 300) -> subprocess.CompletedProcess:
    cmd = ["hdc", *hdc_target_arg(target), "shell", inner]
    return run_cmd(cmd, timeout=timeout)


def cmd_paths(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    print("ohrecord — 关键路径（相对源码根）\n")
    print(f"  源码根 (--src / OHOS_SRC): {root}")
    paths = [
        "foundation/window/window_manager/snapshot/src/snapshot_record.cpp",
        "foundation/window/window_manager/snapshot/src/snapshot_record_utils.cpp",
        "foundation/window/window_manager/snapshot/include/snapshot_record_utils.h",
        "foundation/window/window_manager/snapshot/BUILD.gn",
        "foundation/multimedia/player_framework/frameworks/native/screen_capture/screen_capture_impl.cpp",
        "foundation/multimedia/player_framework/services/services/screen_capture/server/screen_capture_server.cpp",
        "foundation/multimedia/player_framework/services/services/screen_capture/ipc/screen_capture_service_proxy.cpp",
        "base/security/selinux_adapter/sepolicy/ohos_policy/multimedia/player/system/media_service.te",
        "base/security/selinux_adapter/sepolicy/ohos_policy/multimedia/player/system/file_contexts",
    ]
    for rel in paths:
        p = root / rel
        ex = "✓" if p.is_file() else "?"
        print(f"  {ex} {rel}")
    print(f"\n  设备录制目录（须匹配 SELinux）: {DEFAULT_RECORD_DIR}")
    print(f"  设备媒体库（常见）: {DEFAULT_DEVICE_SO} 或 {DEFAULT_DEVICE_SO_ALT}")
    print("  详细说明: napi_generator 仓库 src/skills/ohproj/SKILL.md（第十节）")
    return 0


def cmd_build(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    bs = root / "build.sh"
    if not bs.is_file():
        print(f"error: 未找到 build.sh: {bs}", file=sys.stderr)
        return 1
    prod = args.product or DEFAULT_PRODUCT
    print(f"在 {root} 执行: ./build.sh --product-name {prod}")
    r = run_cmd(["/bin/bash", str(bs), "--product-name", prod], cwd=root, timeout=None)
    sys.stdout.write(r.stdout or "")
    sys.stderr.write(r.stderr or "")
    return r.returncode


def cmd_prep_device(args: argparse.Namespace) -> int:
    d = args.dir or DEFAULT_RECORD_DIR
    inner = (
        f"mkdir -p {d} && chmod 777 {d} && "
        f"chcon u:object_r:data_test_media_file:s0 {d} 2>/dev/null; "
        f"ls -laZ {d}"
    )
    r = hdc_shell(args.target, inner, timeout=60)
    print((r.stdout or "") + (r.stderr or ""))
    return 0 if r.returncode == 0 else r.returncode


def cmd_device_status(args: argparse.Namespace) -> int:
    inner = (
        "echo -n 'developermode: '; param get const.security.developermode.state 2>/dev/null; "
        "echo -n 'selinux: '; getenforce 2>/dev/null; "
        f"echo '--- {DEFAULT_RECORD_DIR} ---'; ls -ldZ {DEFAULT_RECORD_DIR} 2>&1"
    )
    r = hdc_shell(args.target, inner, timeout=60)
    print((r.stdout or "") + (r.stderr or ""))
    return 0 if r.returncode == 0 else r.returncode


def cmd_verify_device_so(args: argparse.Namespace) -> int:
    inner = (
        f"s=/system/lib/libmedia_service.z.so; test -f $s || s={DEFAULT_DEVICE_SO_ALT}; "
        f"echo using:$s; strings $s 2>/dev/null | grep -F '{MARKER_INIT_RECORDER_PATH}' || echo 'MISSING_MARKER'"
    )
    r = hdc_shell(args.target, inner, timeout=120)
    out = (r.stdout or "") + (r.stderr or "")
    print(out)
    if "MISSING_MARKER" in out or r.returncode != 0:
        return 1
    return 0


def cmd_verify_host_so(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    out_root = root / "out" / (args.product or DEFAULT_PRODUCT)
    if not out_root.is_dir():
        print(f"warn: 未找到编译输出目录: {out_root}（请先编译）", file=sys.stderr)
    found: list[Path] = []
    if out_root.is_dir():
        for p in out_root.rglob("libmedia_service.z.so"):
            found.append(p)
    if not found:
        print("error: 本机 out 下未找到 libmedia_service.z.so，请先执行 build", file=sys.stderr)
        return 1
    # 优先选路径中含 player_framework 的
    found.sort(key=lambda x: ("player_framework" not in str(x), len(str(x))))
    so = found[0]
    print(f"检查: {so}")
    r = run_cmd(["strings", str(so)], timeout=60)
    if MARKER_INIT_RECORDER_PATH in (r.stdout or ""):
        print(f"OK: 特征串存在于本机 {so}")
        return 0
    print(f"FAIL: 未找到特征串: {MARKER_INIT_RECORDER_PATH}", file=sys.stderr)
    return 1


def cmd_record(args: argparse.Namespace) -> int:
    path = args.file
    if not path.startswith(DEFAULT_RECORD_DIR + "/") and path != DEFAULT_RECORD_DIR:
        print(
            f"error: 设备路径须位于 {DEFAULT_RECORD_DIR}/ 下（与 snapshot_record_utils 校验一致）",
            file=sys.stderr,
        )
        return 1
    sec = max(1, int(args.seconds))
    inner = f"snapshot_record -s {sec} -f {path}"
    print(f"hdc shell: {inner}")
    r = hdc_shell(args.target, inner, timeout=sec + 120)
    print((r.stdout or "") + (r.stderr or ""))
    return 0 if r.returncode == 0 else r.returncode


def cmd_pull(args: argparse.Namespace) -> int:
    recv = skill_dir() / "recv"
    recv.mkdir(parents=True, exist_ok=True)
    remote = args.remote
    if args.local:
        local = Path(args.local).expanduser().resolve()
        local.parent.mkdir(parents=True, exist_ok=True)
    else:
        local = recv / Path(remote).name
    cmd = ["hdc", *hdc_target_arg(args.target), "file", "recv", remote, str(local)]
    print(" ".join(cmd))
    r = run_cmd(cmd, timeout=600)
    print((r.stdout or "") + (r.stderr or ""))
    if r.returncode != 0:
        return r.returncode
    # 简要校验 MP4 头
    if local.is_file() and local.stat().st_size >= 8:
        with open(local, "rb") as f:
            head = f.read(12)
        ok = b"ftyp" in head
        print(f"本地文件: {local}  size={local.stat().st_size}  ftyp_ok={ok}")
    return 0


def cmd_verify_remote_mp4(args: argparse.Namespace) -> int:
    remote = args.remote
    inner = (
        f"ls -la {remote} 2>&1; wc -c {remote} 2>&1; "
        f"head -c 16 {remote} 2>/dev/null | xxd"
    )
    r = hdc_shell(args.target, inner, timeout=60)
    print((r.stdout or "") + (r.stderr or ""))
    return 0 if r.returncode == 0 else r.returncode


def cmd_hilog_capture(args: argparse.Namespace) -> int:
    inner = (
        "hilog -x | grep -iE 'ScreenCaptureServer|InitRecorder|StartScreenCaptureFile|331350054|open path failed' "
        f"| tail -n {max(20, args.tail)}"
    )
    r = hdc_shell(args.target, inner, timeout=90)
    print((r.stdout or "") + (r.stderr or ""))
    return 0 if r.returncode == 0 else r.returncode


def cmd_targets(_: argparse.Namespace) -> int:
    r = run_cmd(["hdc", "list", "targets"], timeout=30)
    print((r.stdout or "") + (r.stderr or ""))
    return 0 if r.returncode == 0 else r.returncode


def main() -> int:
    parent = argparse.ArgumentParser(add_help=False)
    parent.add_argument(
        "-t",
        "--target",
        default=None,
        help="hdc 设备序列号（或设 OHRECORD_HDC_TARGET）",
    )
    parent.add_argument(
        "--src",
        default=None,
        help="OpenHarmony 源码根（含 build.sh），默认推断或 OHOS_SRC",
    )

    ap = argparse.ArgumentParser(description="ohrecord — snapshot_record / MP4 辅助工具")
    sub = ap.add_subparsers(dest="cmd", required=True)

    sub.add_parser(
        "paths",
        parents=[parent],
        help="打印关键源码路径与文档位置",
    ).set_defaults(func=cmd_paths)

    b = sub.add_parser("build", parents=[parent], help="执行 ./build.sh --product-name <product>")
    b.add_argument("--product", default=DEFAULT_PRODUCT)
    b.set_defaults(func=cmd_build)

    p = sub.add_parser("prep-device", help="设备上 mkdir/chmod/chcon 录制目录")
    p.add_argument("--dir", default=DEFAULT_RECORD_DIR, help=f"默认 {DEFAULT_RECORD_DIR}")
    p.set_defaults(func=cmd_prep_device)

    sub.add_parser(
        "device-status",
        parents=[parent],
        help="开发者模式、SELinux、录制目录标签",
    ).set_defaults(func=cmd_device_status)

    sub.add_parser(
        "verify-device-so",
        parents=[parent],
        help="设备 libmedia_service.z.so 特征串",
    ).set_defaults(func=cmd_verify_device_so)

    hs = sub.add_parser("verify-host-so", parents=[parent], help="本机 out 下 libmedia_service.z.so 特征串")
    hs.add_argument("--product", default=DEFAULT_PRODUCT)
    hs.set_defaults(func=cmd_verify_host_so)

    rec = sub.add_parser("record", help="hdc shell 执行 snapshot_record")
    rec.add_argument("--seconds", "-s", type=int, default=10)
    rec.add_argument(
        "--file",
        "-f",
        required=True,
        help=f"设备侧绝对路径，须 {DEFAULT_RECORD_DIR}/xxx.mp4",
    )
    rec.set_defaults(func=cmd_record)

    pl = sub.add_parser("pull", parents=[parent], help="hdc file recv 拉取 MP4 到本技能 recv/ 或 --local")
    pl.add_argument("--remote", "-r", required=True, help="设备侧文件路径")
    pl.add_argument("--local", "-l", default=None, help="本机保存路径（默认 skills/ohrecord/recv/文件名）")
    pl.set_defaults(func=cmd_pull)

    vm = sub.add_parser("verify-remote-mp4", help="设备上 ls/wc/xxd 校验远程 mp4")
    vm.add_argument("--remote", "-r", required=True)
    vm.set_defaults(func=cmd_verify_remote_mp4)

    hl = sub.add_parser("hilog-capture", parents=[parent], help="抓取 ScreenCapture 相关 hilog 尾部")
    hl.add_argument("--tail", type=int, default=80)
    hl.set_defaults(func=cmd_hilog_capture)

    sub.add_parser("targets", parents=[parent], help="hdc list targets").set_defaults(func=cmd_targets)

    args = ap.parse_args()
    return int(args.func(args))


if __name__ == "__main__":
    sys.exit(main())
