#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""hdc 设备工具：连接保活、清理、常亮、安装、aa test（liveness 检测）、hilog/faultlog。

固化经验（SKILL 7.1/7.2/7.4/7.7）：
- 多设备必须 -t <ip>:<port>；bm dump 行首是 tab（grep -oE '\\t...' 提取）
- 设备断连：list targets 无设备 → tconn → 仍无 → hdc kill + start + tconn
- aa test 60s 无日志输出判挂起强杀，总限 600s；设备侧 -s timeout 300000
- power-shell setmode 602 常亮（3.2 无 settings 命令）
"""
from __future__ import annotations

import os
import re
import subprocess
import time
from pathlib import Path
from typing import Optional

from .paths import DEVICE, DEVICE_IP, DEVICE_PORT, build_env

ENV = build_env()
SYSTEM_BUNDLES = re.compile(r"^(ohos|com.ohos|com.hua" + "wei)")

# 卸载 bm dump 时的系统保留 bundle 前缀


def hdc(*args: str, timeout: int = 60) -> str:
    """执行 hdc 命令（自动加 -t 目标设备），返回 stdout。失败返回 ''。"""
    cmd = ["hdc", "-t", DEVICE, *args]
    try:
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout,
                           env=ENV)
        return r.stdout or ""
    except (subprocess.TimeoutExpired, FileNotFoundError):
        return ""


def ensure_device(retries: int = 3) -> bool:
    """设备就绪：list targets → tconn → kill/start → tconn。返回是否在线。"""
    for _ in range(retries):
        if DEVICE_IP in hdc("list", "targets", timeout=15):
            return True
        hdc("tconn", f"{DEVICE_IP}:{DEVICE_PORT}", timeout=20)
        time.sleep(3)
    # server 重启后重试
    subprocess.run(["hdc", "kill"], capture_output=True, env=ENV)
    time.sleep(2)
    subprocess.run(["hdc", "start"], capture_output=True, env=ENV)
    time.sleep(3)
    for _ in range(2):
        if DEVICE_IP in hdc("list", "targets", timeout=15):
            return True
        hdc("tconn", f"{DEVICE_IP}:{DEVICE_PORT}", timeout=20)
        time.sleep(3)
    return DEVICE_IP in hdc("list", "targets", timeout=15)


def keep_awake() -> None:
    """设备常亮（3.2 用 power-shell setmode 602）。"""
    hdc("shell", "power-shell setmode 602", timeout=15)
    hdc("shell", "power-shell wakeup", timeout=15)


def list_non_system_bundles() -> list[str]:
    """列出全部非系统应用 bundle（bm dump 行首是 tab）。"""
    out = hdc("shell", "bm dump -a", timeout=20)
    bundles = []
    for m in re.finditer(r"\t([a-zA-Z0-9._]+)", out):
        b = m.group(1)
        if not SYSTEM_BUNDLES.match(b):
            bundles.append(b)
    return bundles


def cleanup_device(target_bundle: str = "") -> None:
    """清理设备：卸载目标 bundle（验证生效，失败重试）+ 全部非系统应用（空结果重试）→
    清 hilog/faultlog → force-stop。

    实战教训（2026-08-17）：bm dump -a 偶发超时返回空 → 旧逻辑直接 break 空转，
    残留 bundle 导致主 HAP 安装 9568267 install entry already exist。
    """
    if target_bundle:
        for _ in range(3):
            hdc("shell", f"bm uninstall -n {target_bundle}", timeout=20)
            time.sleep(1)
            # 验证：dump -n 报 not installed（或输出为空）才算卸掉
            out = hdc("shell", f"bm dump -n {target_bundle}", timeout=20)
            if "not installed" in out.lower() or "failed" in out.lower() or not out.strip():
                break
    for _ in range(4):
        bundles = list_non_system_bundles()
        if not bundles:
            # 防 dump 瞬时空：重查一次再判定
            time.sleep(1)
            bundles = list_non_system_bundles()
            if not bundles:
                break
        for b in bundles[:80]:
            hdc("shell", f"bm uninstall -n {b}", timeout=15)
            time.sleep(0.3)
    hdc("shell", "hilog -r", timeout=15)
    hdc("shell", "rm -rf /data/log/faultlog/faultlogger/* 2>/dev/null", timeout=15)
    if target_bundle:
        hdc("shell", f"aa force-stop {target_bundle}", timeout=15)


def mem_free_kb() -> int:
    out = hdc("shell", "cat /proc/meminfo 2>/dev/null | grep MemFree", timeout=15)
    m = re.search(r"(\d+)", out)
    return int(m.group(1)) if m else -1


def install_hap(hap_path: str, timeout: int = 90) -> tuple[bool, str]:
    """安装 HAP。返回 (是否成功, 错误信息)。"""
    out = hdc("install", hap_path, timeout=timeout)
    ok = "success" in out.lower() or ("install" in out.lower() and "error" not in out.lower() and "fail" not in out.lower())
    err = ""
    if not ok:
        m = re.search(r"(error[^\n]*|fail[^\n]*|9568\d{3})", out, re.I)
        err = m.group(1).strip() if m else (out.strip()[:200] or "install failed")
    return ok, err


def _read_chunk(proc) -> str:
    """select 轮询读 hdc 输出（二进制 os.read，防文本 read(n) 阻塞）。"""
    import select
    r, _, _ = select.select([proc.stdout], [], [], 2)
    if not r:
        return ""
    try:
        return os.read(proc.stdout.fileno(), 4096).decode(errors="replace")
    except Exception:
        return ""


def _drain_output(proc) -> str:
    """测试结束后排空剩余输出。"""
    out = ""
    try:
        while True:
            b = os.read(proc.stdout.fileno(), 4096)
            if not b:
                break
            out += b.decode(errors="replace")
    except Exception:
        pass
    return out


def run_aa_test(bundle: str, module: str, suite: str, timeout: int = 300,
                idle_limit: int = 30, progress_limit: int = 60) -> tuple[str, bool]:
    """逐套件 aa test（liveness + 进展检测）。

    超时策略（2026-08-18 用户确认）：非性能用例最多等 1 分钟——
    progress_limit=60s（无新用例进展即停，不逐步延长等待）；总上限 300s。
    返回 (输出, 是否挂起)。
    """
    cmd = ("aa test -b {} -m {} -s unittest OpenHarmonyTestRunner -s class {} "
           "-s timeout 300000").format(bundle, module, suite)
    timeout = int(os.environ.get("OH_XTS_TEST_TIMEOUT", str(timeout)))
    idle_limit = int(os.environ.get("OH_XTS_TEST_IDLE", str(idle_limit)))
    progress_limit = int(os.environ.get("OH_XTS_TEST_PROGRESS", str(progress_limit)))
    proc = subprocess.Popen(
        ["hdc", "-t", DEVICE, "shell", cmd], stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT, env=ENV)
    out = ""
    last_active = last_progress = time.time()
    hung = False
    deadline = time.time() + timeout
    progress_re = re.compile(r"OHOS_REPORT_STATUS|\[Hypium\]|case begin|Tests run:")
    while proc.poll() is None:
        chunk = _read_chunk(proc)
        if chunk:
            out += chunk
            last_active = time.time()
            if progress_re.search(chunk):
                last_progress = time.time()
        if time.time() - last_active > idle_limit:
            hung = True
            proc.kill()
            break
        if time.time() - last_progress > progress_limit:
            hung = True
            proc.kill()
            break
        if time.time() > deadline:
            hung = True
            proc.kill()
            break
    out += _drain_output(proc)
    proc.wait(timeout=10)
    if hung:
        out += "\n[__HUNG__] 无进展/无输出超时终止"
        # 本地 kill 只杀 hdc 客户端，设备端 aa test 会成孤儿继续跑（2026-08-18 实战），补杀
        hdc("shell", f"pkill -f 'aa test -b {bundle}'", timeout=20)
    return out, hung





def parse_test_result(out: str) -> dict:
    """解析 Tests run/Failure/Error/Pass；找不到报告标记 NO_RESULT。"""
    m = re.search(r"Tests run: (\d+), Failure: (\d+), Error: (\d+), Pass: (\d+)",
                  out)
    if not m:
        return {"ok": False, "reason": "NO_RESULT：无 OHOS_REPORT_RESULT"}
    total, fail, err, passed = (int(m.group(i)) for i in range(1, 5))
    return {"ok": fail == 0 and err == 0 and total > 0,
            "total": total, "fail": fail, "err": err, "passed": passed}


def hilog_grep(pattern: str, lines: int = 200) -> str:
    """抓取 hilog 匹配内容（调试用）。"""
    out = hdc("shell", f"hilog -x | grep -a '{pattern}' | tail -{lines}", timeout=30)
    return out


def faultlog_list() -> str:
    """列出 faultlog 目录内容（App died 定位用）。"""
    return hdc("shell", "ls -t /data/log/faultlog/faultlogger/ 2>/dev/null | head -10",
               timeout=20)


if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser(description="hdc 设备工具")
    ap.add_argument("--ensure", action="store_true", help="确保设备在线")
    ap.add_argument("--cleanup", metavar="BUNDLE", help="清理设备（卸载非系统应用）")
    ap.add_argument("--install", metavar="HAP", help="安装 HAP")
    ap.add_argument("--aa-test", nargs=3, metavar=("BUNDLE", "MODULE", "SUITE"),
                    help="运行套件测试")
    ap.add_argument("--mem", action="store_true", help="空闲内存")
    args = ap.parse_args()

    if args.ensure:
        print("ONLINE" if ensure_device() else "OFFLINE")
    elif args.cleanup is not None:
        cleanup_device(args.cleanup)
        print("CLEANED, mem_free_kb:", mem_free_kb())
    elif args.install:
        ok, err = install_hap(args.install)
        print("INSTALL_OK" if ok else f"INSTALL_FAIL: {err}")
    elif args.aa_test:
        out, hung = run_aa_test(*args.aa_test)
        print(out)
        print("__HUNG__" if hung else "__DONE__")
    elif args.mem:
        print(mem_free_kb())
    else:
        ap.print_help()
