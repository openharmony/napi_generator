#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ohservices 技能固化脚本：sampletest（SA 9009）编译产物、设备进程、镜像内文件、
落盘 hilog / dmesg 诊断、hidumper 验证等（与 SKILL.md / saguide.md 流程对齐）。

用法摘要:
  python3 ohsa.py build              # 仅检查 out 下编译产物
  python3 ohsa.py device             # 进程 + 实时 hilog（可用 --no-hilog）
  python3 ohsa.py all                # build + device（默认；all 仍以编译产物 exit code 为准）
  python3 ohsa.py device-files       # 设备上 /system 下 cfg/profile/so 是否存在
  python3 ohsa.py hilog-disk         # 落盘 hilog(.gz) 中关键模式（Publish/selinux/hidumper）
  python3 ohsa.py dmesg              # dmesg 中与 init/execv/SELinux 相关行
  python3 ohsa.py hidumper         # 执行 hidumper -s 9009（可看 Dump 是否成功）
  python3 ohsa.py diag               # 综合：device-files + 进程 + hilog-disk 摘要

  python3 ohsa.py -t SERIAL ...     # 指定 hdc 设备（等价于 hdc -t）
  OHSA_HDC_TARGET=SERIAL            # 环境变量指定设备
"""
from __future__ import annotations

import argparse
import os
import subprocess
import sys

# sampletest 预定产物（相对于 out/<product>/packages/phone/system）
ARTIFACTS = [
    ("lib/libsampletest_server.z.so", "SA 服务 so"),
    ("lib64/libsampletest_server.z.so", "SA 服务 so (lib64)"),
    ("profile/sampletest.json", "SA profile"),
    ("etc/init/sampletest.cfg", "init 配置"),
]

SA_NAME = "sampletest"
SA_ID = 9009

# 与 SKILL.md「落盘日志排查」一致的关键模式（extended grep -E）
HILOG_DISK_PATTERNS = (
    r"Sampletest|9009|DumperService|Publish failed|Sampletest started|"
    r"no such system ability|IsDistributedSa|AddSystemAbilityInner|"
    r"selinux permission denied|avc: denied|GetServiceCheck|CheckSystemAbilityInner"
)

DMESG_PATTERNS = r"sampletest|ServiceStart|execv|secon|avc: denied|sampletest_service|hidumper"


def get_src_root() -> str:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.abspath(os.path.join(script_dir, "..", "..", ".."))


def hdc_base_args(hdc_target: str | None) -> list:
    cmd = ["hdc"]
    t = hdc_target or os.environ.get("OHSA_HDC_TARGET")
    if t:
        cmd.extend(["-t", t])
    return cmd


def hdc_shell(
    shell_cmd: str,
    hdc_target: str | None = None,
    timeout: float = 30,
) -> tuple[int, str]:
    """在设备上执行 shell_cmd，返回 (exit_code, combined_output)。"""
    full = " ".join(hdc_base_args(hdc_target)) + f' shell "{shell_cmd}"'
    try:
        r = subprocess.run(
            hdc_base_args(hdc_target) + ["shell", shell_cmd],
            capture_output=True,
            text=True,
            timeout=timeout,
        )
        out = (r.stdout or "") + (r.stderr or "")
        return r.returncode, out
    except FileNotFoundError:
        return -1, ""
    except subprocess.TimeoutExpired:
        return -2, "timeout"


def check_build_artifacts(out_base: str) -> bool:
    system_base = os.path.join(out_base, "packages", "phone", "system")
    if not os.path.isdir(system_base):
        print(f"[ohsa] 目录不存在: {system_base}")
        return False
    all_ok = True
    found_so = False
    found_profile = False
    found_cfg = False
    for rel_path, desc in ARTIFACTS:
        full = os.path.join(system_base, rel_path)
        if os.path.isfile(full):
            if "lib" in rel_path:
                found_so = True
            elif "profile" in rel_path:
                found_profile = True
            elif "init" in rel_path:
                found_cfg = True
            print(f"[ohsa] 存在: {rel_path} ({desc})")
        else:
            if "lib64" in rel_path:
                continue
            print(f"[ohsa] 缺失: {rel_path} ({desc})")
            all_ok = False
    if not found_so:
        print("[ohsa] 未找到 lib 或 lib64 下的 libsampletest_server.z.so")
        all_ok = False
    if not found_profile:
        print("[ohsa] 未找到 profile/sampletest.json")
        all_ok = False
    if not found_cfg:
        print("[ohsa] 未找到 etc/init/sampletest.cfg")
        all_ok = False
    return all_ok


def check_device_process(hdc_target: str | None) -> bool:
    code, out = hdc_shell("ps -ef", hdc_target=hdc_target, timeout=15)
    if code == -1:
        print("[ohsa] 未找到 hdc 命令，请确保 HDC 在 PATH 中")
        return False
    if code == -2:
        print("[ohsa] hdc 执行超时")
        return False
    for line in out.splitlines():
        if "sampletest.json" in line and "sa_main" in line:
            print("[ohsa] 设备上存在 sampletest 进程（sa_main 参数含 sampletest.json）")
            print(f"  {line.strip()}")
            return True
        if "sampletest" in line and (
            " sampletest" in line or line.rstrip().endswith("sampletest")
        ):
            print("[ohsa] 设备上存在 sampletest 进程（进程名 sampletest）")
            print(f"  {line.strip()}")
            return True
    print(
        "[ohsa] 设备上未发现 sampletest 进程（ps 中无 sa_main + sampletest.json 或进程名 sampletest）"
    )
    return False


def check_device_hilog(sample_lines: int, hdc_target: str | None) -> bool:
    code, out = hdc_shell(
        "hilog -x 2>/dev/null || hilog",
        hdc_target=hdc_target,
        timeout=12,
    )
    if code == -1:
        print("[ohsa] 未找到 hdc 命令")
        return False
    lines = [
        l
        for l in out.splitlines()
        if "ampletest" in l.lower() or "9009" in l
    ]
    if lines:
        print(f"[ohsa] 设备 hilog 中近期有 sampletest 相关日志（共 {len(lines)} 条）:")
        for l in lines[:sample_lines]:
            print(f"  {l.strip()}")
        return True
    print("[ohsa] 设备 hilog 中未发现 sampletest 相关日志")
    return False


def check_device_system_files(hdc_target: str | None) -> bool:
    """检查设备 /system 下 sampletest 相关文件是否存在。"""
    code, _ = hdc_shell("echo ok", hdc_target=hdc_target, timeout=8)
    if code == -1:
        print("[ohsa] 未找到 hdc 命令")
        return False
    if code != 0:
        print(f"[ohsa] hdc shell 失败，exit={code}")
        return False

    all_ok = True
    for rel in DEVICE_SYSTEM_PATHS:
        path = f"/system/{rel}"
        c2, out = hdc_shell(f"ls -la {path} 2>&1", hdc_target=hdc_target, timeout=10)
        line = (out or "").strip().splitlines()
        last = line[-1] if line else ""
        if "No such file" in last or c2 != 0:
            print(f"[ohsa] 缺失或不可访问: {path}")
            if rel.startswith("lib64"):
                continue  # lib64 可选
            if rel.startswith("lib/") and "lib64" in " ".join(DEVICE_SYSTEM_PATHS):
                # 若 lib 没有，可能只有 lib64，下面单独判断 so
                pass
            if rel == "lib/libsampletest_server.z.so":
                continue
            if rel == "lib64/libsampletest_server.z.so":
                continue
            all_ok = False
        else:
            print(f"[ohsa] 存在: {path}")
            print(f"       {last}")

    # so 至少 lib 或 lib64 其一
    c_lib, o_lib = hdc_shell("ls -la /system/lib/libsampletest_server.z.so 2>&1", hdc_target=hdc_target)
    c_l64, o_l64 = hdc_shell(
        "ls -la /system/lib64/libsampletest_server.z.so 2>&1", hdc_target=hdc_target
    )
    has_so = "No such file" not in o_lib and c_lib == 0
    has_so64 = "No such file" not in o_l64 and c_l64 == 0
    if not has_so and not has_so64:
        print("[ohsa] 未找到 /system/lib 或 /system/lib64 下的 libsampletest_server.z.so")
        all_ok = False
    return all_ok


def check_hilog_disk(hdc_target: str | None, tail_lines: int) -> bool:
    """在设备上 zcat 落盘 hilog 并 grep 关键模式。"""
    inner = (
        f"zcat /data/log/hilog/hilog.*.gz 2>/dev/null | grep -E '{HILOG_DISK_PATTERNS}' "
        f"| tail -n {tail_lines}"
    )
    code, out = hdc_shell(inner, hdc_target=hdc_target, timeout=120)
    if code == -1:
        print("[ohsa] 未找到 hdc 命令")
        return False
    text = (out or "").strip()
    if not text:
        print("[ohsa] 落盘 hilog 中未匹配到关键模式（或无 .gz 文件）")
        print("[ohsa] 可检查: hdc shell ls /data/log/hilog")
        return False
    print("[ohsa] 落盘 hilog 匹配摘要（尾部若干行）:")
    for line in text.splitlines():
        print(f"  {line}")
    return True


def check_dmesg(hdc_target: str | None, tail_lines: int) -> bool:
    inner = f"dmesg 2>/dev/null | grep -iE '{DMESG_PATTERNS}' | tail -n {tail_lines}"
    code, out = hdc_shell(inner, hdc_target=hdc_target, timeout=20)
    if code == -1:
        print("[ohsa] 未找到 hdc 命令")
        return False
    text = (out or "").strip()
    if not text:
        print("[ohsa] dmesg 中未匹配到与 sampletest/init/execv/secon/avc 相关行")
        return False
    print("[ohsa] dmesg 匹配摘要:")
    for line in text.splitlines():
        print(f"  {line}")
    return True


def run_hidumper(hdc_target: str | None, sa_arg: str) -> bool:
    """设备上执行 hidumper -s <sa_arg>，将输出打印到 stdout。"""
    inner = f"hidumper -s {sa_arg} 2>&1"
    code, out = hdc_shell(inner, hdc_target=hdc_target, timeout=60)
    if code == -1:
        print("[ohsa] 未找到 hdc 命令")
        return False
    print(f"[ohsa] --- hidumper -s {sa_arg} (exit={code}) ---")
    print(out)
    if "no such system ability" in out.lower():
        print("[ohsa] 提示: 若进程已运行仍报此项，见 SKILL — selinux samgr_class get 或 Publish 失败")
        return False
    if "Sampletest SA ID" in out or "Running" in out:
        return True
    return code == 0


def run_diag(hdc_target: str | None, hilog_tail: int) -> None:
    print("[ohsa] ========== diag：设备综合诊断 ==========")
    print("[ohsa] --- /system 文件 ---")
    check_device_system_files(hdc_target)
    print("[ohsa] --- 进程 ---")
    check_device_process(hdc_target)
    print("[ohsa] --- 落盘 hilog（关键模式，若存在）---")
    check_hilog_disk(hdc_target, tail_lines=hilog_tail)
    print("[ohsa] --- dmesg（摘要）---")
    check_dmesg(hdc_target, tail_lines=30)
    print("[ohsa] ========== diag 结束（逐项见上文）==========")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="ohservices 技能固化：sampletest 编译产物 / 设备 / 落盘日志 / dmesg / hidumper"
    )
    parser.add_argument(
        "mode",
        nargs="?",
        default="all",
        choices=[
            "build",
            "device",
            "all",
            "device-files",
            "hilog-disk",
            "dmesg",
            "hidumper",
            "diag",
        ],
        help=(
            "build=编译产物; device=进程+hilog; all=build+device; "
            "device-files=设备/system 文件; hilog-disk=落盘日志 grep; "
            "dmesg=内核/init 摘要; hidumper=执行 hidumper; diag=综合设备诊断"
        ),
    )
    parser.add_argument(
        "--out",
        default=None,
        help="编译产出根目录，默认: <源码根>/out/rk3568",
    )
    parser.add_argument(
        "--product",
        default="rk3568",
        help="产品名，用于默认 out 路径 out/<product>（默认 rk3568）",
    )
    parser.add_argument(
        "--no-hilog",
        action="store_true",
        help="device 模式不抓实时 hilog",
    )
    parser.add_argument(
        "-t",
        "--hdc-target",
        default=None,
        help="hdc 设备序列号（hdc -t），也可用环境变量 OHSA_HDC_TARGET",
    )
    parser.add_argument(
        "--hilog-lines",
        type=int,
        default=8,
        help="实时 hilog / hilog-disk 展示行数上限（默认 8）",
    )
    parser.add_argument(
        "--hidumper-name",
        default=str(SA_ID),
        help="hidumper -s 的参数，默认 9009；可改为 Sampletest",
    )
    args = parser.parse_args()

    src_root = get_src_root()
    out_base = args.out or os.path.join(src_root, "out", args.product)

    print(f"[ohsa] SA = {SA_NAME}, SA ID = {SA_ID}")
    print(f"[ohsa] 源码根: {src_root}")
    if args.hdc_target:
        print(f"[ohsa] hdc target: {args.hdc_target}")

    hdc_t = args.hdc_target

    if args.mode == "device-files":
        ok = check_device_system_files(hdc_t)
        sys.exit(0 if ok else 1)

    if args.mode == "hilog-disk":
        ok = check_hilog_disk(hdc_t, tail_lines=args.hilog_lines)
        sys.exit(0 if ok else 1)

    if args.mode == "dmesg":
        ok = check_dmesg(hdc_t, tail_lines=args.hilog_lines)
        sys.exit(0 if ok else 1)

    if args.mode == "hidumper":
        ok = run_hidumper(hdc_t, args.hidumper_name)
        sys.exit(0 if ok else 1)

    if args.mode == "diag":
        run_diag(hdc_t, hilog_tail=args.hilog_lines)
        sys.exit(0)

    if args.mode in ("build", "all"):
        print("[ohsa] --- 检查编译产物 ---")
        build_ok = check_build_artifacts(out_base)
        print("[ohsa] 编译产物检查: " + ("通过" if build_ok else "不通过"))
    else:
        build_ok = None

    if args.mode in ("device", "all"):
        print("[ohsa] --- 检查设备 ---")
        proc_ok = check_device_process(hdc_t)
        hilog_ok = (
            check_device_hilog(args.hilog_lines, hdc_t) if not args.no_hilog else None
        )
        device_ok = proc_ok or (hilog_ok if hilog_ok is not None else False)
        print(
            "[ohsa] 设备检查: "
            + ("存在 sampletest 运行迹象" if device_ok else "未发现 sampletest 运行")
        )
    else:
        device_ok = None

    if args.mode == "all":
        sys.exit(0 if build_ok else 1)
    if args.mode == "build":
        sys.exit(0 if build_ok else 1)
    sys.exit(0 if device_ok else 1)


if __name__ == "__main__":
    main()
