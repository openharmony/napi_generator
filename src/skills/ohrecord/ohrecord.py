#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OpenHarmony snapshot_record（屏幕录制 MP4）、audio_record_demo（麦克风）、audio_play_demo（音乐播放）、
camera_record（摄像头录像 MP4）辅助脚本：源码路径、编译、设备目录、单编/推送/运行、recv 拉取、hilog、.so 校验。

camera_record 实战排障（帧率、时长、画质）已写入与本脚本同目录的 SKILL.md 第六节；其中 §6.9 强调：
RGBA→NV12 的 Y 累加式 66*R+129*G+25*B+128 会超过 int16 范围，SIMD 必须用 int32 累加，否则成片会出现大块发黑「抠图」假像。

依赖：本机已配置 hdc，设备已连接（多设备时用 -t 或环境变量 OHRECORD_HDC_TARGET）。
"""

from __future__ import annotations

import argparse
import os
import shlex
import subprocess
import sys
import struct
from pathlib import Path

# 特征串：与服务端 ScreenCaptureServer::InitRecorder 日志一致，用于确认镜像含「路径 open」逻辑
MARKER_INIT_RECORDER_PATH = "InitRecorder open output by file path (no IPC fd)"

DEFAULT_PRODUCT = "rk3568"
DEFAULT_RECORD_DIR = "/data/test/media"
DEFAULT_DEVICE_SO = "/system/lib/libmedia_service.z.so"
DEFAULT_DEVICE_SO_ALT = "/system/lib64/libmedia_service.z.so"

DEFAULT_AUDIO_DIR = "/data/local/tmp"
DEFAULT_AUDIO_DEMO_BIN = "/data/local/tmp/audio_record_demo"
# ./build.sh --build-target 只填「目标名」，与 ohbuild 技能一致（不要写 path:target 全路径）
AUDIO_RECORD_BUILD_TARGET = "audio_record_demo"
# bundle.json / BUILD.gn 引用用的完整标签（仅供文档与 paths 展示）
AUDIO_RECORD_GN_LABEL = "//foundation/multimedia/audio_framework/test/demo/audio_record_demo:audio_record_demo"

AUDIO_PLAY_BUILD_TARGET = "audio_play_demo"
AUDIO_PLAY_GN_LABEL = "//foundation/multimedia/audio_framework/test/demo/audio_play_demo:audio_play_demo"
DEFAULT_PLAY_BIN = "/data/local/tmp/audio_play_demo"
DEFAULT_PLAY_ASSETS_REMOTE = "/data/local/tmp/ohrecord_assets"
PLAY_ASSET_WAV = "file_example_WAV_10MG.wav"
PLAY_ASSET_MP3 = "test.mp3"

CAMERA_RECORD_BUILD_TARGET = "camera_record"
CAMERA_RECORD_GN_LABEL = (
    "//foundation/multimedia/camera_framework/test/camera_record:camera_record"
)
CAMERA_RECORD_LEGACY_GN_LABEL = (
    "//foundation/multimedia/camera_framework/interfaces/camera_record_demo:camera_record_demo"
)
DEFAULT_CAM_BIN = "/data/local/tmp/camera_record"
DEFAULT_CAM_DIR = "/data/local/tmp"
CAM_STOP_FILE = "/data/local/tmp/.camera_record_stop"
DEFAULT_CAM_RECORD_GLOB = f"{DEFAULT_CAM_DIR}/camera_record_*.mp4"
DEFAULT_CAM_STAGE_DIR = "/data/test/media"
DEFAULT_CAM_STAGE_GLOB = f"{DEFAULT_CAM_STAGE_DIR}/camera_record_stage_*.mp4"


def skill_dir() -> Path:
    return Path(__file__).resolve().parent


def infer_src_root(explicit: str | None) -> Path:
    if explicit:
        return Path(explicit).expanduser().resolve()
    env = os.environ.get("OHOS_SRC", "").strip()
    if env:
        return Path(env).expanduser().resolve()
    # 从脚本位置向上查找含 build.sh 的目录作为 OH 源码根（脚本可位于本仓库 src/skills/ohrecord/ 等路径下）
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
        "foundation/multimedia/audio_framework/test/demo/audio_record_demo/main.cpp",
        "foundation/multimedia/audio_framework/test/demo/audio_record_demo/BUILD.gn",
        "foundation/multimedia/audio_framework/test/demo/audio_play_demo/main.cpp",
        "foundation/multimedia/audio_framework/test/demo/audio_play_demo/BUILD.gn",
        "foundation/multimedia/audio_framework/bundle.json",
        "foundation/multimedia/camera_framework/test/camera_record/main_ndk.cpp",
        "foundation/multimedia/camera_framework/test/camera_record/BUILD.gn",
        "foundation/multimedia/camera_framework/interfaces/camera_record_demo/main_ndk.cpp",
        "foundation/multimedia/camera_framework/interfaces/camera_record_demo/BUILD.gn",
        "foundation/multimedia/camera_framework/bundle.json",
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
    ohproj_skill = skill_dir().parent / "ohproj" / "SKILL.md"
    print(f"  详细说明: {ohproj_skill} （第十节 snapshot_record）")
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


def pick_audio_record_remote_path(log: str) -> str | None:
    """从 audio_record_demo 标准输出中解析最终产物路径（优先 done / mp3 / recording）。"""
    done_p: str | None = None
    mp3_p: str | None = None
    rec_p: str | None = None
    for line in (log or "").splitlines():
        if "audio_record_demo: done " in line:
            done_p = line.split("audio_record_demo: done ", 1)[1].strip()
        elif "audio_record_demo: mp3 -> " in line:
            mp3_p = line.split("audio_record_demo: mp3 -> ", 1)[1].strip()
        elif "audio_record_demo: recording -> " in line:
            rec_p = line.split("audio_record_demo: recording -> ", 1)[1].strip()
    chosen = done_p or mp3_p or rec_p
    if chosen and chosen.startswith("/"):
        return chosen
    return None


def pick_camera_record_remote_path(log: str) -> str | None:
    """从 camera_record / camera_record_demo 标准输出解析 done 路径。"""
    for line in (log or "").splitlines():
        if "camera_record: done " in line:
            p = line.split("camera_record: done ", 1)[1].strip()
            if p.startswith("/"):
                return p
        if "camera_record_demo: done " in line:
            p = line.split("camera_record_demo: done ", 1)[1].strip()
            if p.startswith("/"):
                return p
    return None


def latest_remote_camera_mp4(target: str | None) -> str | None:
    inner = f"ls -t {shlex.quote(DEFAULT_CAM_RECORD_GLOB)} 2>/dev/null | head -n 1"
    r = hdc_shell(target, inner, timeout=30)
    out = (r.stdout or "").strip()
    if r.returncode == 0 and out.startswith("/"):
        return out.splitlines()[0].strip()
    return None


def latest_remote_camera_stage_mp4(target: str | None) -> str | None:
    inner = f"ls -t {shlex.quote(DEFAULT_CAM_STAGE_GLOB)} 2>/dev/null | head -n 1"
    r = hdc_shell(target, inner, timeout=30)
    out = (r.stdout or "").strip()
    if r.returncode == 0 and out.startswith("/"):
        return out.splitlines()[0].strip()
    return None


def hdc_file_recv_to_local(target: str | None, remote: str, local: Path) -> subprocess.CompletedProcess:
    local.parent.mkdir(parents=True, exist_ok=True)
    cmd = ["hdc", *hdc_target_arg(target), "file", "recv", remote, str(local)]
    print(" ".join(shlex.quote(c) for c in cmd))
    return run_cmd(cmd, timeout=600)


def print_local_media_check(local: Path) -> None:
    if not local.is_file() or local.stat().st_size < 12:
        return
    with open(local, "rb") as f:
        head = f.read(12)
    ext = local.suffix.lower()
    sz = local.stat().st_size
    if ext in (".mp4", ".m4v"):
        ok = b"ftyp" in head
        print(f"本地文件: {local}  size={sz}  ftyp_ok={ok}")
        meta = inspect_mp4_file(local)
        if meta is not None:
            mvhd = meta.get("mvhd_seconds")
            mdhd = meta.get("mdhd_seconds")
            samples = meta.get("sample_count")
            stts = meta.get("stts_seconds")
            print(
                "MP4元数据: "
                f"mvhd_seconds={mvhd}  mdhd_seconds={mdhd}  "
                f"sample_count={samples}  stts_seconds={stts}"
            )
            for note in analyze_mp4_meta(meta):
                print(f"MP4诊断: {note}")
    elif ext == ".wav":
        ok = head[:4] == b"RIFF" and len(head) >= 12 and head[8:12] == b"WAVE"
        print(f"本地文件: {local}  size={sz}  riff_wav_ok={ok}")
    else:
        print(f"本地文件: {local}  size={sz}")


def verify_remote_media_file(target: str | None, remote: str) -> bool:
    inner = f"test -f {shlex.quote(remote)} && wc -c {shlex.quote(remote)} && head -c 12 {shlex.quote(remote)} 2>/dev/null | xxd -p"
    r = hdc_shell(target, inner, timeout=60)
    out = (r.stdout or "") + (r.stderr or "")
    print(out)
    if r.returncode != 0:
        return False
    lines = [line.strip() for line in out.splitlines() if line.strip()]
    if not lines:
        return False
    try:
        size = int(lines[0].split()[0])
    except (ValueError, IndexError):
        return False
    if size <= 1024:
        print(f"warn: 远端文件过小，size={size}", file=sys.stderr)
        return False
    if len(lines) >= 2 and "66747970" not in lines[-1].lower():
        print("warn: 远端文件头未见 ftyp", file=sys.stderr)
    return True


def _iter_mp4_boxes(buf: bytes, start: int = 0, end: int | None = None):
    if end is None:
        end = len(buf)
    i = start
    while i + 8 <= end:
        size = struct.unpack(">I", buf[i:i + 4])[0]
        typ = buf[i + 4:i + 8].decode("latin1", "replace")
        header = 8
        if size == 1:
            if i + 16 > end:
                return
            size = struct.unpack(">Q", buf[i + 8:i + 16])[0]
            header = 16
        elif size == 0:
            size = end - i
        if size < header or i + size > end:
            return
        yield i, size, header, typ
        i += size


def _find_mp4_child(buf: bytes, parent_start: int, parent_size: int, want: str):
    for box in _iter_mp4_boxes(buf, parent_start + 8, parent_start + parent_size):
        if box[3] == want:
            return box
    return None


def inspect_mp4_file(path: Path) -> dict[str, float | int | list[tuple[int, int]]] | None:
    try:
        data = path.read_bytes()
    except OSError:
        return None
    try:
        moov = next(box for box in _iter_mp4_boxes(data) if box[3] == "moov")
    except StopIteration:
        return None
    mvhd = _find_mp4_child(data, moov[0], moov[1], "mvhd")
    if mvhd is None:
        return None
    vi, _, vh, _ = mvhd
    version = data[vi + vh]
    if version == 0:
        mvhd_timescale = struct.unpack(">I", data[vi + vh + 12:vi + vh + 16])[0]
        mvhd_duration = struct.unpack(">I", data[vi + vh + 16:vi + vh + 20])[0]
    else:
        mvhd_timescale = struct.unpack(">I", data[vi + vh + 20:vi + vh + 24])[0]
        mvhd_duration = struct.unpack(">Q", data[vi + vh + 24:vi + vh + 32])[0]

    result: dict[str, float | int | list[tuple[int, int]]] = {
        "mvhd_seconds": round(mvhd_duration / mvhd_timescale, 3) if mvhd_timescale else 0.0,
    }

    for trak in _iter_mp4_boxes(data, moov[0] + 8, moov[0] + moov[1]):
        if trak[3] != "trak":
            continue
        mdia = _find_mp4_child(data, trak[0], trak[1], "mdia")
        if mdia is None:
            continue
        mdhd = _find_mp4_child(data, mdia[0], mdia[1], "mdhd")
        minf = _find_mp4_child(data, mdia[0], mdia[1], "minf")
        if mdhd is None or minf is None:
            continue
        stbl = _find_mp4_child(data, minf[0], minf[1], "stbl")
        if stbl is None:
            continue
        stts = _find_mp4_child(data, stbl[0], stbl[1], "stts")
        if stts is None:
            continue

        ii, _, hh, _ = mdhd
        version = data[ii + hh]
        if version == 0:
            mdhd_timescale = struct.unpack(">I", data[ii + hh + 12:ii + hh + 16])[0]
            mdhd_duration = struct.unpack(">I", data[ii + hh + 16:ii + hh + 20])[0]
        else:
            mdhd_timescale = struct.unpack(">I", data[ii + hh + 20:ii + hh + 24])[0]
            mdhd_duration = struct.unpack(">Q", data[ii + hh + 24:ii + hh + 32])[0]
        result["mdhd_seconds"] = round(mdhd_duration / mdhd_timescale, 3) if mdhd_timescale else 0.0

        si, _, sh, _ = stts
        entry_count = struct.unpack(">I", data[si + sh + 4:si + sh + 8])[0]
        offset = si + sh + 8
        sample_count = 0
        total_ticks = 0
        first_entries: list[tuple[int, int]] = []
        for idx in range(entry_count):
            sc, sd = struct.unpack(">II", data[offset:offset + 8])
            if idx < 8:
                first_entries.append((sc, sd))
            sample_count += sc
            total_ticks += sc * sd
            offset += 8
        result["sample_count"] = sample_count
        result["stts_seconds"] = round(total_ticks / mdhd_timescale, 3) if mdhd_timescale else 0.0
        result["stts_first_entries"] = first_entries
        break
    return result


def analyze_mp4_meta(meta: dict[str, float | int | list[tuple[int, int]]]) -> list[str]:
    notes: list[str] = []
    mvhd = float(meta.get("mvhd_seconds", 0.0) or 0.0)
    mdhd = float(meta.get("mdhd_seconds", 0.0) or 0.0)
    stts = float(meta.get("stts_seconds", 0.0) or 0.0)
    sample_count = int(meta.get("sample_count", 0) or 0)
    first_entries = meta.get("stts_first_entries")
    if not isinstance(first_entries, list):
        first_entries = []

    if mvhd <= 0.2 and mdhd <= 0.2 and stts <= 0.2:
        notes.append("时长几乎为 0：大概率是 SET_UI_TIMESTAMP 未递增，或单位/基准点错误。")

    if sample_count <= 1:
        notes.append("sample_count 极少：大概率几乎没有真正送帧到 recorder。")
    elif sample_count < 80 and stts > 0:
        avg_fps = sample_count / stts
        if avg_fps < 8.0:
            notes.append(
                f"实际平均送帧偏低（约 {avg_fps:.2f} fps）：若目标是 10s@10fps，时长偏差可能来自 preview drain 实际送帧不足。"
            )

    if first_entries:
        first_sc, first_sd = first_entries[0]
        if first_sc > 0 and first_sd == 0:
            notes.append("首个 stts delta 为 0：首帧时间戳初始化仍不理想，容易诱发播放器时长/首帧时序解释异常。")
        later_deltas = [int(sd) for _, sd in first_entries[1:] if int(sd) > 0]
        if first_sc > 0 and first_sd > 0 and later_deltas:
            typical = min(later_deltas)
            if typical > 0 and first_sd >= typical * 20:
                notes.append(
                    "首个 stts delta 明显过大：大概率起始时间戳混入了绝对时间，或 recorder 开始计时点与首帧基准未对齐。"
                )

    if mvhd > 0 and mdhd > 0:
        diff = abs(mvhd - mdhd)
        if diff > 0.5:
            notes.append(
                f"mvhd 与 mdhd 相差较大（{diff:.3f}s）：容器总时长与 track 时长不一致，建议继续检查 stop 边界或 muxer 行为。"
            )

    if stts > 0 and mdhd > 0:
        diff = abs(stts - mdhd)
        if diff > 0.5:
            notes.append(
                f"stts 与 mdhd 相差较大（{diff:.3f}s）：sample timeline 与 track duration 不一致，优先回查送帧时间戳是否单调且单位一致。"
            )

    if not notes:
        notes.append("未发现明显的容器级异常；若体感时长仍不对，优先对照 pushed frames 与实际录制起止边界。")
    return notes


def cmd_cam_inspect(args: argparse.Namespace) -> int:
    path = Path(args.local).expanduser().resolve()
    if not path.is_file():
        print(f"error: 文件不存在: {path}", file=sys.stderr)
        return 1
    meta = inspect_mp4_file(path)
    if meta is None:
        print(f"error: 无法解析 MP4 元数据: {path}", file=sys.stderr)
        return 1
    print(f"文件: {path}")
    print(f"  mvhd_seconds: {meta.get('mvhd_seconds')}")
    print(f"  mdhd_seconds: {meta.get('mdhd_seconds')}")
    print(f"  sample_count: {meta.get('sample_count')}")
    print(f"  stts_seconds: {meta.get('stts_seconds')}")
    print(f"  stts_first_entries: {meta.get('stts_first_entries')}")
    print("  diagnosis:")
    for note in analyze_mp4_meta(meta):
        print(f"    - {note}")
    print(
        "  提示: 容器元数据正常但画面大块发黑、像抠图时，常见为 RGBA→NV12 的 SIMD 累加溢出；"
        f"见 {skill_dir() / 'SKILL.md'} §6.9"
    )
    return 0


def cmd_pull(args: argparse.Namespace) -> int:
    recv = skill_dir() / "recv"
    recv.mkdir(parents=True, exist_ok=True)
    remote = args.remote
    if args.local:
        local = Path(args.local).expanduser().resolve()
    else:
        local = recv / Path(remote).name
    r = hdc_file_recv_to_local(args.target, remote, local)
    print((r.stdout or "") + (r.stderr or ""))
    if r.returncode != 0:
        return r.returncode
    print_local_media_check(local)
    return 0


def cmd_audio_pull(args: argparse.Namespace) -> int:
    """与 pull 相同，默认保存到本技能目录下 recv/（便于麦克风 WAV/MP3 流程）。"""
    return cmd_pull(args)


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


def find_audio_record_demo_binary(root: Path, product: str) -> Path | None:
    out_root = root / "out" / product
    if not out_root.is_dir():
        return None
    for p in out_root.rglob("audio_record_demo"):
        if p.is_file() and os.access(p, os.X_OK):
            return p
    for p in out_root.rglob("audio_record_demo"):
        if p.is_file():
            return p
    return None


def cmd_audio_paths(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    print("ohrecord — audio_record_demo 路径\n")
    print(f"  源码根: {root}")
    print(f"  --build-target 取值（部件单编，仅目标名）: {AUDIO_RECORD_BUILD_TARGET}")
    print(f"  示例: ./build.sh --build-target {AUDIO_RECORD_BUILD_TARGET} --product-name rk3568")
    print(f"  bundle.json / GN 标签（参考）: {AUDIO_RECORD_GN_LABEL}")
    print(f"  默认设备输出目录: {DEFAULT_AUDIO_DIR}")
    print(f"  默认设备二进制: {DEFAULT_AUDIO_DEMO_BIN}")
    return 0


def cmd_audio_build(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    bs = root / "build.sh"
    if not bs.is_file():
        print(f"error: 未找到 build.sh: {bs}", file=sys.stderr)
        return 1
    prod = args.product or DEFAULT_PRODUCT
    argv = [
        "/bin/bash",
        str(bs),
        "--build-target",
        AUDIO_RECORD_BUILD_TARGET,
        "--product-name",
        prod,
    ]
    print(f"在 {root} 执行: {' '.join(shlex.quote(a) for a in argv[1:])}")
    r = run_cmd(argv, cwd=root, timeout=None)
    sys.stdout.write(r.stdout or "")
    sys.stderr.write(r.stderr or "")
    return r.returncode


def cmd_prep_audio(args: argparse.Namespace) -> int:
    d = args.dir or DEFAULT_AUDIO_DIR
    inner = f"mkdir -p {shlex.quote(d)} && chmod 777 {shlex.quote(d)} && ls -la {shlex.quote(d)}"
    r = hdc_shell(args.target, inner, timeout=60)
    print((r.stdout or "") + (r.stderr or ""))
    return 0 if r.returncode == 0 else r.returncode


def cmd_audio_push(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    prod = args.product or DEFAULT_PRODUCT
    host = find_audio_record_demo_binary(root, prod)
    if host is None:
        print(
            f"error: 在 {root / 'out' / prod} 下未找到 audio_record_demo，请先执行 audio-build 或全量编译",
            file=sys.stderr,
        )
        return 1
    remote = args.remote or DEFAULT_AUDIO_DEMO_BIN
    cmd = ["hdc", *hdc_target_arg(args.target), "file", "send", str(host), remote]
    print(" ".join(shlex.quote(c) for c in cmd))
    r = run_cmd(cmd, timeout=600)
    sys.stdout.write(r.stdout or "")
    sys.stderr.write(r.stderr or "")
    if r.returncode != 0:
        return r.returncode
    chmod = hdc_shell(args.target, f"chmod 755 {shlex.quote(remote)}", timeout=30)
    sys.stdout.write(chmod.stdout or "")
    sys.stderr.write(chmod.stderr or "")
    print(f"pushed: {host} -> {remote}")
    return 0 if chmod.returncode == 0 else chmod.returncode


def cmd_audio_run(args: argparse.Namespace) -> int:
    remote = args.bin or DEFAULT_AUDIO_DEMO_BIN
    rest = list(args.args or [])
    while rest and rest[0] == "--":
        rest.pop(0)
    parts = [remote]
    parts.extend(rest)
    inner = " ".join(shlex.quote(p) for p in parts)
    print(f"hdc shell: {inner}")
    r = hdc_shell(args.target, inner, timeout=args.timeout)
    out = (r.stdout or "") + (r.stderr or "")
    print(out)
    if r.returncode != 0:
        return r.returncode
    if not getattr(args, "pull", False):
        return 0
    device_path = pick_audio_record_remote_path(out)
    if not device_path:
        print(
            "warn: --pull 未从输出中解析到设备文件路径（需含 audio_record_demo: done / mp3 -> / recording ->）",
            file=sys.stderr,
        )
        return 1
    recv = skill_dir() / "recv"
    recv.mkdir(parents=True, exist_ok=True)
    if args.pull_local:
        local = Path(args.pull_local).expanduser().resolve()
    else:
        local = recv / Path(device_path).name
    pr = hdc_file_recv_to_local(args.target, device_path, local)
    print((pr.stdout or "") + (pr.stderr or ""))
    if pr.returncode != 0:
        return pr.returncode
    print(f"pulled: {device_path} -> {local}")
    print_local_media_check(local)
    return 0


def find_audio_play_demo_binary(root: Path, product: str) -> Path | None:
    out_root = root / "out" / product
    if not out_root.is_dir():
        return None
    for p in out_root.rglob("audio_play_demo"):
        if p.is_file() and os.access(p, os.X_OK):
            return p
    for p in out_root.rglob("audio_play_demo"):
        if p.is_file():
            return p
    return None


def cmd_play_paths(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    sd = skill_dir()
    print("ohrecord — audio_play_demo（音乐播放）\n")
    print(f"  源码根: {root}")
    print(f"  --build-target: {AUDIO_PLAY_BUILD_TARGET}")
    print(f"  GN 标签（参考）: {AUDIO_PLAY_GN_LABEL}")
    print(f"  演示资源（本机）: {sd / 'asserts'}")
    print(f"    - {PLAY_ASSET_WAV}")
    print(f"    - {PLAY_ASSET_MP3}")
    print(f"  设备二进制默认: {DEFAULT_PLAY_BIN}")
    print(f"  设备资源目录默认: {DEFAULT_PLAY_ASSETS_REMOTE}")
    return 0


def cmd_play_build(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    bs = root / "build.sh"
    if not bs.is_file():
        print(f"error: 未找到 build.sh: {bs}", file=sys.stderr)
        return 1
    prod = args.product or DEFAULT_PRODUCT
    argv = [
        "/bin/bash",
        str(bs),
        "--build-target",
        AUDIO_PLAY_BUILD_TARGET,
        "--product-name",
        prod,
    ]
    print(f"在 {root} 执行: {' '.join(shlex.quote(a) for a in argv[1:])}")
    r = run_cmd(argv, cwd=root, timeout=None)
    sys.stdout.write(r.stdout or "")
    sys.stderr.write(r.stderr or "")
    return r.returncode


def cmd_play_assets(args: argparse.Namespace) -> int:
    asserts = skill_dir() / "asserts"
    if not asserts.is_dir():
        print(f"error: 未找到 {asserts}（请放置 {PLAY_ASSET_WAV} 与 {PLAY_ASSET_MP3}）", file=sys.stderr)
        return 1
    remote_base = args.remote_dir or DEFAULT_PLAY_ASSETS_REMOTE
    inner = f"mkdir -p {shlex.quote(remote_base)} && chmod 777 {shlex.quote(remote_base)}"
    pr = hdc_shell(args.target, inner, timeout=60)
    print((pr.stdout or "") + (pr.stderr or ""))
    if pr.returncode != 0:
        return pr.returncode
    files = sorted(p for p in asserts.iterdir() if p.is_file())
    if not files:
        print(f"error: {asserts} 下无文件", file=sys.stderr)
        return 1
    for p in files:
        dest = f"{remote_base.rstrip('/')}/{p.name}"
        cmd = ["hdc", *hdc_target_arg(args.target), "file", "send", str(p), dest]
        print(" ".join(shlex.quote(c) for c in cmd))
        r = run_cmd(cmd, timeout=600)
        sys.stdout.write(r.stdout or "")
        sys.stderr.write(r.stderr or "")
        if r.returncode != 0:
            return r.returncode
    print(f"已推送 {len(files)} 个文件到 {remote_base}")
    return 0


def cmd_play_push(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    prod = args.product or DEFAULT_PRODUCT
    host = find_audio_play_demo_binary(root, prod)
    if host is None:
        print(
            f"error: 在 {root / 'out' / prod} 下未找到 audio_play_demo，请先 play-build",
            file=sys.stderr,
        )
        return 1
    remote = args.remote or DEFAULT_PLAY_BIN
    cmd = ["hdc", *hdc_target_arg(args.target), "file", "send", str(host), remote]
    print(" ".join(shlex.quote(c) for c in cmd))
    r = run_cmd(cmd, timeout=600)
    sys.stdout.write(r.stdout or "")
    sys.stderr.write(r.stderr or "")
    if r.returncode != 0:
        return r.returncode
    chmod = hdc_shell(args.target, f"chmod 755 {shlex.quote(remote)}", timeout=30)
    sys.stdout.write(chmod.stdout or "")
    sys.stderr.write(chmod.stderr or "")
    print(f"pushed: {host} -> {remote}")
    return 0 if chmod.returncode == 0 else chmod.returncode


def cmd_play_run(args: argparse.Namespace) -> int:
    exe = args.bin or DEFAULT_PLAY_BIN
    rest = list(args.args or [])
    while rest and rest[0] == "--":
        rest.pop(0)
    assets_base = (args.assets_dir or DEFAULT_PLAY_ASSETS_REMOTE).rstrip("/")
    if args.preset == "wav":
        media = f"{assets_base}/{PLAY_ASSET_WAV}"
    elif args.preset == "mp3":
        media = f"{assets_base}/{PLAY_ASSET_MP3}"
    elif args.media:
        media = args.media
    elif rest:
        media = rest[0]
    else:
        print(
            "error: 请指定 --preset wav|mp3 或 --media <设备绝对路径> 或在 -- 后传媒体路径",
            file=sys.stderr,
        )
        return 1
    inner = f"{shlex.quote(exe)} {shlex.quote(media)}"
    print(f"hdc shell: {inner}")
    r = hdc_shell(args.target, inner, timeout=args.timeout)
    print((r.stdout or "") + (r.stderr or ""))
    return 0 if r.returncode == 0 else r.returncode


def find_camera_record_binary(root: Path, product: str) -> Path | None:
    out_root = root / "out" / product
    if not out_root.is_dir():
        return None
    for p in out_root.rglob("camera_record"):
        if p.is_file() and os.access(p, os.X_OK):
            return p
    for p in out_root.rglob("camera_record"):
        if p.is_file():
            return p
    return None


def cmd_cam_paths(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    print("ohrecord — camera_record（摄像头录像 MP4）\n")
    print(f"  源码根: {root}")
    print(f"  --build-target: {CAMERA_RECORD_BUILD_TARGET}")
    print(f"  GN 标签: {CAMERA_RECORD_GN_LABEL}")
    print(f"  兼容参考（旧 demo）: {CAMERA_RECORD_LEGACY_GN_LABEL}")
    print(f"  设备二进制默认: {DEFAULT_CAM_BIN}")
    print(f"  设备录像输出目录默认: {DEFAULT_CAM_DIR}")
    print(f"  设备录像文件模式: {DEFAULT_CAM_RECORD_GLOB}")
    print(f"  设备临时 stage 目录: {DEFAULT_CAM_STAGE_DIR}")
    print(f"  停止文件: {CAM_STOP_FILE}")
    print("  文档（必读雷区）:")
    print(f"    {skill_dir() / 'SKILL.md'}  §6.8 帧率/preview 队列 §6.9 NEON int32（禁 int16 累加 Y）")
    print("    §6.10 时长边界 §6.11 回归清单")
    return 0


def cmd_cam_build(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    bs = root / "build.sh"
    if not bs.is_file():
        print(f"error: 未找到 build.sh: {bs}", file=sys.stderr)
        return 1
    prod = args.product or DEFAULT_PRODUCT
    argv = [
        "/bin/bash",
        str(bs),
        "--build-target",
        CAMERA_RECORD_BUILD_TARGET,
        "--product-name",
        prod,
    ]
    print(f"在 {root} 执行: {' '.join(shlex.quote(a) for a in argv[1:])}")
    r = run_cmd(argv, cwd=root, timeout=None)
    sys.stdout.write(r.stdout or "")
    sys.stderr.write(r.stderr or "")
    return r.returncode


def cmd_cam_prep(args: argparse.Namespace) -> int:
    d = args.dir or DEFAULT_CAM_DIR
    inner = (
        f"mkdir -p {shlex.quote(d)} && chmod 777 {shlex.quote(d)} && "
        f"mkdir -p {shlex.quote(DEFAULT_CAM_STAGE_DIR)} && chmod 777 {shlex.quote(DEFAULT_CAM_STAGE_DIR)} && "
        f"chcon u:object_r:data_test_media_file:s0 {shlex.quote(DEFAULT_CAM_STAGE_DIR)} 2>/dev/null; "
        f"echo '--- output dir ---'; ls -la {shlex.quote(d)}; "
        f"echo '--- stage dir ---'; ls -laZ {shlex.quote(DEFAULT_CAM_STAGE_DIR)}"
    )
    r = hdc_shell(args.target, inner, timeout=60)
    print((r.stdout or "") + (r.stderr or ""))
    return 0 if r.returncode == 0 else r.returncode


def cmd_cam_push(args: argparse.Namespace) -> int:
    root = infer_src_root(args.src)
    prod = args.product or DEFAULT_PRODUCT
    host = find_camera_record_binary(root, prod)
    if host is None:
        print(
            f"error: 在 {root / 'out' / prod} 下未找到 camera_record，请先 cam-build",
            file=sys.stderr,
        )
        return 1
    remote = args.remote or DEFAULT_CAM_BIN
    cmd = ["hdc", *hdc_target_arg(args.target), "file", "send", str(host), remote]
    print(" ".join(shlex.quote(c) for c in cmd))
    r = run_cmd(cmd, timeout=600)
    sys.stdout.write(r.stdout or "")
    sys.stderr.write(r.stderr or "")
    if r.returncode != 0:
        return r.returncode
    chmod = hdc_shell(args.target, f"chmod 755 {shlex.quote(remote)}", timeout=30)
    sys.stdout.write(chmod.stdout or "")
    sys.stderr.write(chmod.stderr or "")
    print(f"pushed: {host} -> {remote}")
    return 0 if chmod.returncode == 0 else chmod.returncode


def cmd_cam_run(args: argparse.Namespace) -> int:
    remote = args.bin or DEFAULT_CAM_BIN
    rest = list(args.args or [])
    while rest and rest[0] == "--":
        rest.pop(0)
    if not rest:
        parts = [remote, "auto", "10"]
    else:
        parts = [remote] + rest
    inner = " ".join(shlex.quote(p) for p in parts)
    print(f"hdc shell: {inner}")
    r = hdc_shell(args.target, inner, timeout=args.timeout)
    out = (r.stdout or "") + (r.stderr or "")
    print(out)
    if r.returncode != 0:
        return r.returncode
    if not getattr(args, "pull", False):
        return 0
    device_path = pick_camera_record_remote_path(out)
    if not device_path:
        device_path = latest_remote_camera_mp4(args.target)
    if not device_path:
        print(
            "warn: --pull 未解析到路径，且未在 /data/local/tmp 找到最新 camera_record_*.mp4",
            file=sys.stderr,
        )
        return 1
    if getattr(args, "verify", False):
        if not verify_remote_media_file(args.target, device_path):
            return 1
    recv = skill_dir() / "recv"
    recv.mkdir(parents=True, exist_ok=True)
    if args.pull_local:
        local = Path(args.pull_local).expanduser().resolve()
    else:
        local = recv / Path(device_path).name
    pr = hdc_file_recv_to_local(args.target, device_path, local)
    print((pr.stdout or "") + (pr.stderr or ""))
    if pr.returncode != 0:
        return pr.returncode
    print(f"pulled: {device_path} -> {local}")
    print_local_media_check(local)
    return 0


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

    ap = argparse.ArgumentParser(
        description="ohrecord — snapshot_record / MP4、audio_record_demo、audio_play_demo、camera_record 辅助工具",
    )
    sub = ap.add_subparsers(dest="cmd", required=True)

    sub.add_parser(
        "paths",
        parents=[parent],
        help="打印关键源码路径与文档位置",
    ).set_defaults(func=cmd_paths)

    b = sub.add_parser("build", parents=[parent], help="执行 ./build.sh --product-name <product>")
    b.add_argument("--product", default=DEFAULT_PRODUCT)
    b.set_defaults(func=cmd_build)

    p = sub.add_parser(
        "prep-device",
        parents=[parent],
        help="设备上 mkdir/chmod/chcon 录制目录",
    )
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

    sub.add_parser(
        "audio-paths",
        parents=[parent],
        help="打印 audio_record_demo 源码路径与 GN 目标",
    ).set_defaults(func=cmd_audio_paths)

    ab = sub.add_parser("audio-build", parents=[parent], help="单编 audio_record_demo（需 build.sh）")
    ab.add_argument("--product", default=DEFAULT_PRODUCT)
    ab.set_defaults(func=cmd_audio_build)

    pa = sub.add_parser(
        "prep-audio",
        parents=[parent],
        help="设备上 mkdir/chmod 麦克风录音目录（默认 /data/local/tmp）",
    )
    pa.add_argument("--dir", default=DEFAULT_AUDIO_DIR, help=f"默认 {DEFAULT_AUDIO_DIR}")
    pa.set_defaults(func=cmd_prep_audio)

    apu = sub.add_parser("audio-push", parents=[parent], help="hdc file send 本机 audio_record_demo 到设备")
    apu.add_argument("--product", default=DEFAULT_PRODUCT)
    apu.add_argument(
        "--remote",
        "-r",
        default=None,
        help=f"设备路径（默认 {DEFAULT_AUDIO_DEMO_BIN}）",
    )
    apu.set_defaults(func=cmd_audio_push)

    ar = sub.add_parser(
        "audio-run",
        parents=[parent],
        help="hdc shell 执行设备上的 audio_record_demo（参数放在 -- 之后）",
    )
    ar.add_argument(
        "--bin",
        default=DEFAULT_AUDIO_DEMO_BIN,
        help=f"设备上二进制路径（默认 {DEFAULT_AUDIO_DEMO_BIN}）",
    )
    ar.add_argument(
        "--timeout",
        type=int,
        default=600,
        help="hdc shell 超时秒数（长录时请调大）",
    )
    ar.add_argument(
        "--pull",
        action="store_true",
        help="运行成功后自动 hdc recv 产物到本技能 recv/（解析标准输出中的路径）",
    )
    ar.add_argument(
        "--pull-local",
        default=None,
        help="与 --pull 联用：本机保存路径（默认脚本同目录 recv/ 下文件名）",
    )
    ar.add_argument(
        "args",
        nargs=argparse.REMAINDER,
        help="例如: audio-run -- auto 10  或  audio-run -- start",
    )
    ar.set_defaults(func=cmd_audio_run)

    sub.add_parser(
        "cam-paths",
        parents=[parent],
        help="打印 camera_record 源码路径与 GN 目标",
    ).set_defaults(func=cmd_cam_paths)

    cb = sub.add_parser("cam-build", parents=[parent], help="单编 camera_record")
    cb.add_argument("--product", default=DEFAULT_PRODUCT)
    cb.set_defaults(func=cmd_cam_build)

    cp = sub.add_parser(
        "cam-prep",
        parents=[parent],
        help="设备上准备 camera_record 输出目录与 stage 目录",
    )
    cp.add_argument("--dir", default=DEFAULT_CAM_DIR, help=f"默认 {DEFAULT_CAM_DIR}")
    cp.set_defaults(func=cmd_cam_prep)

    cpu = sub.add_parser("cam-push", parents=[parent], help="hdc file send camera_record 到设备")
    cpu.add_argument("--product", default=DEFAULT_PRODUCT)
    cpu.add_argument(
        "--remote",
        "-r",
        default=None,
        help=f"设备路径（默认 {DEFAULT_CAM_BIN}）",
    )
    cpu.set_defaults(func=cmd_cam_push)

    cr = sub.add_parser(
        "cam-run",
        parents=[parent],
        help="hdc shell 执行 camera_record：auto [秒] [mp4] | start [mp4] | stop",
    )
    cr.add_argument(
        "--bin",
        default=DEFAULT_CAM_BIN,
        help=f"设备上二进制路径（默认 {DEFAULT_CAM_BIN}）",
    )
    cr.add_argument(
        "--timeout",
        type=int,
        default=600,
        help="hdc shell 超时秒数（长录时请调大）",
    )
    cr.add_argument(
        "--pull",
        action="store_true",
        help="运行成功后自动 hdc recv MP4 到本技能 recv/（解析 camera_record: done 行）",
    )
    cr.add_argument(
        "--pull-local",
        default=None,
        help="与 --pull 联用：本机保存路径（默认脚本同目录 recv/ 下文件名）",
    )
    cr.add_argument(
        "--verify",
        action="store_true",
        help="与 --pull 联用：先在设备侧校验文件大小和 MP4 头，再拉回本地",
    )
    cr.add_argument(
        "args",
        nargs=argparse.REMAINDER,
        help="例如: cam-run -- auto 10  |  cam-run -- start /data/local/tmp/a.mp4",
    )
    cr.set_defaults(func=cmd_cam_run)

    ci = sub.add_parser(
        "cam-inspect",
        parents=[parent],
        help="解析本机 MP4 的 mvhd/mdhd/stts 时长元数据",
    )
    ci.add_argument("--local", "-l", required=True, help="本机 MP4 路径")
    ci.set_defaults(func=cmd_cam_inspect)

    apl = sub.add_parser(
        "audio-pull",
        parents=[parent],
        help="拉取设备上 WAV/MP3 到本技能 recv/（同 pull，便于录音流程）",
    )
    apl.add_argument("--remote", "-r", required=True, help="设备侧文件绝对路径")
    apl.add_argument(
        "--local",
        "-l",
        default=None,
        help="本机保存路径（默认 skills/ohrecord/recv/文件名）",
    )
    apl.set_defaults(func=cmd_audio_pull)

    sub.add_parser(
        "play-paths",
        parents=[parent],
        help="打印 audio_play_demo 与 asserts 路径",
    ).set_defaults(func=cmd_play_paths)

    pb = sub.add_parser("play-build", parents=[parent], help="单编 audio_play_demo")
    pb.add_argument("--product", default=DEFAULT_PRODUCT)
    pb.set_defaults(func=cmd_play_build)

    pas = sub.add_parser(
        "play-assets",
        parents=[parent],
        help="将本技能 asserts/ 下文件 hdc send 到设备（默认 ohrecord_assets）",
    )
    pas.add_argument(
        "--remote-dir",
        default=DEFAULT_PLAY_ASSETS_REMOTE,
        help=f"设备目录（默认 {DEFAULT_PLAY_ASSETS_REMOTE}）",
    )
    pas.set_defaults(func=cmd_play_assets)

    ppu = sub.add_parser("play-push", parents=[parent], help="推送 audio_play_demo 二进制到设备")
    ppu.add_argument("--product", default=DEFAULT_PRODUCT)
    ppu.add_argument("--remote", "-r", default=None, help=f"设备路径（默认 {DEFAULT_PLAY_BIN}）")
    ppu.set_defaults(func=cmd_play_push)

    pru = sub.add_parser(
        "play-run",
        parents=[parent],
        help="设备上播放：--preset wav|mp3 或 --media 路径",
    )
    pru.add_argument("--bin", default=DEFAULT_PLAY_BIN, help=f"播放器路径（默认 {DEFAULT_PLAY_BIN}）")
    pru.add_argument(
        "--assets-dir",
        default=DEFAULT_PLAY_ASSETS_REMOTE,
        help=f"与 --preset 联用的目录（默认 {DEFAULT_PLAY_ASSETS_REMOTE}）",
    )
    pru.add_argument(
        "--preset",
        choices=["wav", "mp3"],
        default=None,
        help=f"播放 asserts 中的 {PLAY_ASSET_WAV} 或 {PLAY_ASSET_MP3}",
    )
    pru.add_argument("--media", "-m", default=None, help="设备侧媒体文件绝对路径（覆盖 --preset）")
    pru.add_argument(
        "--timeout",
        type=int,
        default=1800,
        help="hdc shell 超时秒数（大 WAV 播完前勿过短）",
    )
    pru.add_argument(
        "args",
        nargs=argparse.REMAINDER,
        help="或: play-run -- /data/local/tmp/ohrecord_assets/xxx.wav",
    )
    pru.set_defaults(func=cmd_play_run)

    args = ap.parse_args()
    return int(args.func(args))


if __name__ == "__main__":
    sys.exit(main())
