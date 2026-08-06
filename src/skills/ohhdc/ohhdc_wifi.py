#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""ohhdc Wi‑Fi（wificlitools / wificommand）辅助：推送、连接与 CLI 分发。"""

from __future__ import annotations

import argparse
import os
import shlex
import sys
from pathlib import Path

# 由 ohhdc.bind_wifi_hdc() 注入，避免与 ohhdc 循环导入。
_run_hdc_command = None

# wificlitools 产物：见 foundation/communication/wifi/wifi/test/wificlitools/BUILD.gn（ohos_executable wificommand）
# 默认未 install 进 system 分区；可 push 到可写目录后用绝对路径调用（与 ohclitools 约定一致）。
WIFICOMMAND_BIN_DEFAULT = "wificommand"
DEFAULT_WIFI_KAIHONG_SSID = "xxx"
DEFAULT_WIFI_KAIHONG_PASSWORD = "xxxxxx"
DEFAULT_WIFICOMMAND_REMOTE_PATH = "/data/local/tmp/wificommand"
DEFAULT_WIFI_PRODUCT = "rk3568"


def bind_wifi_hdc(run_hdc_command) -> None:
    """注入 ohhdc.run_hdc_command，供本模块 hdc 封装调用。"""
    global _run_hdc_command
    _run_hdc_command = run_hdc_command


def _hdc(command, timeout_sec=120):
    if _run_hdc_command is None:
        raise RuntimeError("ohhdc_wifi: call bind_wifi_hdc(run_hdc_command) before use")
    return _run_hdc_command(command, timeout_sec=timeout_sec)


def infer_ohos_src_root(explicit: str | None) -> Path | None:
    """从 --ohos-src、环境变量 OHOS_SRC 或本脚本向上查找含 build.sh 的源码根。"""
    if explicit:
        p = Path(explicit).expanduser().resolve()
        return p if p.is_dir() else None
    env = os.environ.get("OHOS_SRC", "").strip()
    if env:
        p = Path(env).expanduser().resolve()
        return p if p.is_dir() else None
    c = Path(__file__).resolve().parent
    for _ in range(10):
        if (c / "build.sh").is_file():
            return c
        if c.parent == c:
            break
        c = c.parent
    return None


def find_wificommand_host_binary(ohos_src: Path, product: str) -> Path | None:
    """在 out/<product> 下查找 wificommand 可执行文件（strip 或 unstripped）。"""
    out = ohos_src / "out" / product
    candidates = [
        out / "communication" / "wifi" / "wificommand",
        out / "exe.unstripped" / "communication" / "wifi" / "wificommand",
    ]
    for p in candidates:
        if p.is_file() and os.access(p, os.X_OK):
            return p
        if p.is_file():
            return p
    return None


def hdc_file_send(local_path: str, remote_path: str, timeout_sec: int = 120):
    """hdc file send local remote（经 bash -c + source bashrc 以找到 hdc）。"""
    inner = (
        "source ~/.bashrc 2>/dev/null; "
        f"hdc file send {shlex.quote(local_path)} {shlex.quote(remote_path)}"
    )
    cmd = "bash -c " + shlex.quote(inner)
    return _hdc(cmd, timeout_sec=timeout_sec)


def run_hdc_shell_remote(remote_cmd: str, timeout_sec: int = 120):
    """
    执行 hdc shell，remote_cmd 为设备侧完整命令行（经 shlex.quote，避免主机 shell 注入）。

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    full = "hdc shell " + shlex.quote(remote_cmd)
    return _hdc(full, timeout_sec=timeout_sec)


def run_wifi_push_wificommand(
    *,
    local_bin: str | None,
    ohos_src: Path | None,
    product: str,
    remote_path: str,
) -> tuple[bool, str]:
    """
    将本机 wificommand 推到设备 remote_path 并 chmod +x。

    Returns:
        (success, message)
    """
    host_path: Path | None = None
    if local_bin:
        host_path = Path(local_bin).expanduser().resolve()
        if not host_path.is_file():
            return False, f"本机文件不存在: {host_path}"
    elif ohos_src is not None:
        host_path = find_wificommand_host_binary(ohos_src, product)
        if host_path is None:
            return (
                False,
                f"未在 {ohos_src / 'out' / product} 下找到 wificommand；"
                f"请先编译: ./build.sh --product-name {product} --build-target wificommand",
            )
    else:
        return False, "请指定本机 wificommand 路径（target 参数）或 --ohos-src 以自动查找 out 目录"

    ok, out, err = hdc_file_send(str(host_path), remote_path, timeout_sec=180)
    detail = (out or "") + (err or "")
    if not ok:
        return False, f"hdc file send 失败: {detail.strip() or err}"

    ok2, out2, err2 = run_hdc_shell_remote(f"chmod 755 {shlex.quote(remote_path)}", timeout_sec=30)
    if not ok2:
        return False, f"chmod 失败: {(out2 or '') + (err2 or '')}"

    return True, f"已推送 {host_path} -> {remote_path}"


def wifi_wificommand_enable_and_connect(
    ssid: str,
    password: str,
    *,
    wificommand_bin: str = WIFICOMMAND_BIN_DEFAULT,
    fetch_status: bool = True,
    timeout_enable_sec: int = 60,
    timeout_connect_sec: int = 120,
    timeout_status_sec: int = 30,
):
    """
    使用 wificommand（wificlitools）打开 Wi‑Fi 并按 SSID/密码连接；可选再查状态。

    Args:
        wificommand_bin: 设备侧可执行文件名或绝对路径（如 /data/local/tmp/wificommand）。

    Returns:
        tuple: (all_ok: bool, log: list of (step_name, success, stdout, stderr))
    """
    log = []
    bin_name = wificommand_bin

    def _step(name: str, remote: str, tmo: int) -> bool:
        ok, out, err = run_hdc_shell_remote(remote, timeout_sec=tmo)
        log.append((name, ok, out or "", err or ""))
        return ok

    ok_enable = _step("wifienable", f"{bin_name} wifienable", timeout_enable_sec)
    if not ok_enable:
        return False, log

    connect_remote = f"{bin_name} wificonnect ssid={ssid} password={password}"
    ok_connect = _step("wificonnect", connect_remote, timeout_connect_sec)
    if not ok_connect:
        return False, log

    if fetch_status:
        _step("wifigetstatus", f"{bin_name} wifigetstatus", timeout_status_sec)

    return True, log


def _ohhdc_fill_parser_wifi(parser: argparse.ArgumentParser) -> None:
    parser.add_argument(
        '--wifi-ssid',
        default=DEFAULT_WIFI_KAIHONG_SSID,
        help=f'wifi-kaihong：SSID，默认 {DEFAULT_WIFI_KAIHONG_SSID}',
    )
    parser.add_argument(
        '--wifi-password',
        default=DEFAULT_WIFI_KAIHONG_PASSWORD,
        help='wifi-kaihong：密码，默认 KaiHong@888',
    )
    parser.add_argument(
        '--no-wifi-status',
        action='store_true',
        dest='wifi_no_status',
        help='wifi-kaihong：连接成功后不执行 wifigetstatus',
    )
    parser.add_argument(
        '--ohos-src',
        default=None,
        help='wifi-push / wifi-check / --push-wificommand：OpenHarmony 源码根（含 build.sh），或设环境变量 OHOS_SRC',
    )
    parser.add_argument(
        '--wifi-product',
        default=DEFAULT_WIFI_PRODUCT,
        help=f'在 out/<product> 下查找 wificommand，默认 {DEFAULT_WIFI_PRODUCT}',
    )
    parser.add_argument(
        '--wificommand-remote',
        default=DEFAULT_WIFICOMMAND_REMOTE_PATH,
        help=f'推送到设备上的路径，默认 {DEFAULT_WIFICOMMAND_REMOTE_PATH}',
    )
    parser.add_argument(
        '--push-wificommand',
        action='store_true',
        dest='push_wificommand',
        help='wifi-kaihong：执行前先推送本机编译的 wificommand 到 --wificommand-remote（需 --ohos-src 或 OHOS_SRC）',
    )
    parser.add_argument(
        '--wifi-device-bin',
        default=None,
        metavar='PATH_OR_NAME',
        help='设备侧 wificommand：命令名或绝对路径；默认 wificommand（依赖 PATH）。与 --push-wificommand 连用时以推送路径为准',
    )


def _wifi_cli_check_wificommand(args) -> None:
    print("=== 设备侧（wificommand 是否存在）===\n")
    checks = [
        ("PATH", "command -v wificommand 2>/dev/null || echo NOT_IN_PATH"),
        ("/system/bin", "ls -la /system/bin/wificommand 2>&1"),
        ("常用临时路径", f"ls -la {DEFAULT_WIFICOMMAND_REMOTE_PATH} 2>&1"),
    ]
    for title, rcmd in checks:
        ok, o, e = run_hdc_shell_remote(rcmd, timeout_sec=20)
        text = (o or e or "").strip() or "(无输出)"
        print(f"[{title}]\n{text}\n")
    src = infer_ohos_src_root(args.ohos_src)
    print("=== 本机编译产物（out 目录）===\n")
    if src:
        found = find_wificommand_host_binary(src, args.wifi_product)
        print(f"OHOS_SRC={src}")
        print(f"product={args.wifi_product}")
        print(f"查找结果: {found or '未找到可执行文件'}")
        if not found:
            print(
                f"\n可执行: cd {src} && ./build.sh --product-name {args.wifi_product} "
                f"--build-target wificommand"
            )
    else:
        print("未推断源码根：请传 --ohos-src 或设置 OHOS_SRC")
    print(
        "\n说明：wificlitools 的 GN **未** 设置 install_enable，默认 **不会** 进 system 镜像；"
        "需单独编 wificommand 后使用 **wifi-push-wificommand** 或 **wifi-kaihong --push-wificommand**。"
    )


def _wifi_print_connect_steps(steps_log) -> None:
    for step_name, step_ok, out, err in steps_log:
        mark = "✓" if step_ok else "❌"
        print(f"{mark} {step_name}")
        if out.strip():
            print(out.rstrip())
        if err.strip():
            print(err.rstrip(), file=sys.stderr)


def _wifi_cli_push_wificommand(args) -> None:
    src = infer_ohos_src_root(args.ohos_src)
    ok_push, msg = run_wifi_push_wificommand(
        local_bin=args.target,
        ohos_src=src,
        product=args.wifi_product,
        remote_path=args.wificommand_remote,
    )
    print(msg)
    if ok_push:
        r = args.wificommand_remote
        print(f"\n✓ 设备上可执行: {r}")
        print(f"  示例: hdc shell \"{r} wifienable\"")
    else:
        print("\n❌ 推送失败。", file=sys.stderr)
        sys.exit(1)


def _wifi_cli_kaihong(args) -> None:
    ssid = args.wifi_ssid
    password = args.wifi_password
    pwd_hint = "(空，开放热点)" if not password else "********"

    device_bin = args.wifi_device_bin or WIFICOMMAND_BIN_DEFAULT
    if args.push_wificommand:
        src = infer_ohos_src_root(args.ohos_src)
        if src is None:
            print(
                "❌ --push-wificommand 需要源码根：请传 --ohos-src 或设置环境变量 OHOS_SRC",
                file=sys.stderr,
            )
            sys.exit(1)
        ok_push, msg = run_wifi_push_wificommand(
            local_bin=None,
            ohos_src=src,
            product=args.wifi_product,
            remote_path=args.wificommand_remote,
        )
        print(msg)
        if not ok_push:
            sys.exit(1)
        device_bin = args.wificommand_remote

    print(
        f"→ 使用设备侧 `{device_bin}`：wifienable，然后 "
        f"wificonnect ssid={ssid!r} password={pwd_hint}"
    )
    ok, steps_log = wifi_wificommand_enable_and_connect(
        ssid,
        password,
        wificommand_bin=device_bin,
        fetch_status=not args.wifi_no_status,
    )
    _wifi_print_connect_steps(steps_log)
    if ok:
        print(
            "\n✓ wifi-kaihong：已执行 wifienable 与 wificonnect；"
            "若未连上请检查设备是否包含 wificommand、热点是否可达、密码与加密方式（开放网可省略密码参数见 wificlitools 说明）。"
        )
    else:
        print(
            "\n❌ wifi-kaihong：wifienable 或 wificonnect 失败；"
            "请确认镜像已安装 wificommand（wificlitools），且 hdc 已连接设备。",
            file=sys.stderr,
        )
        sys.exit(1)


def _try_dispatch_wifi_family(args, parser) -> bool:
    if args.action == 'wifi-check-wificommand':
        _wifi_cli_check_wificommand(args)
        return True

    if args.action == 'wifi-push-wificommand':
        _wifi_cli_push_wificommand(args)
        return True

    if args.action == 'wifi-kaihong':
        _wifi_cli_kaihong(args)
        return True

    return False
