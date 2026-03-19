#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ohservices 技能：查看 sampletest SystemAbility 是否存在。
支持检查：(1) 编译产物是否包含 sampletest 三项；(2) 设备上 sampletest 进程/日志是否存在。
"""
import argparse
import os
import subprocess
import sys

# sampletest 预定产物（相对于 out/rk3568/packages/phone/system）
ARTIFACTS = [
    ("lib/libsampletest_server.z.so", "SA 服务 so"),
    ("lib64/libsampletest_server.z.so", "SA 服务 so (lib64)"),
    ("profile/sampletest.json", "SA profile"),
    ("etc/init/sampletest.cfg", "init 配置"),
]
SA_NAME = "sampletest"
SA_ID = 9009


def get_src_root():
    """技能目录在 src/.claude/skills/ohservices，源码根为 src。"""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.abspath(os.path.join(script_dir, "..", "..", ".."))


def check_build_artifacts(out_base: str) -> bool:
    """检查编译产物中是否包含 sampletest 相关文件。"""
    system_base = os.path.join(out_base, "packages", "phone", "system")
    if not os.path.isdir(system_base):
        print(f"[ohsa] 目录不存在: {system_base}")
        return False
    all_ok = True
    # 至少需要：so（lib 或 lib64 其一）、profile、cfg
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
                continue  # lib64 可选
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


def check_device_process() -> bool:
    """通过 hdc 检查设备上是否有 sampletest 相关进程（sa_main + sampletest.json，或进程名为 sampletest）。"""
    try:
        r = subprocess.run(
            ["hdc", "shell", "ps -ef"],
            capture_output=True,
            text=True,
            timeout=10,
        )
        out = (r.stdout or "") + (r.stderr or "")
        for line in out.splitlines():
            # 匹配：命令行含 sa_main 与 sampletest.json
            if "sampletest.json" in line and "sa_main" in line:
                print("[ohsa] 设备上存在 sampletest 进程（sa_main 参数含 sampletest.json）")
                print(f"  {line.strip()}")
                return True
            # 匹配：进程名为 sampletest（部分设备 ps 只显示进程名）
            if "sampletest" in line and (" sampletest" in line or line.rstrip().endswith("sampletest")):
                print("[ohsa] 设备上存在 sampletest 进程（进程名 sampletest）")
                print(f"  {line.strip()}")
                return True
        print("[ohsa] 设备上未发现 sampletest 进程（ps 中无 sa_main + sampletest.json 或进程名 sampletest）")
        return False
    except FileNotFoundError:
        print("[ohsa] 未找到 hdc 命令，请确保 HDC 在 PATH 中")
        return False
    except subprocess.TimeoutExpired:
        print("[ohos] hdc 执行超时")
        return False


def check_device_hilog(sample_lines: int = 5) -> bool:
    """通过 hilog 抓取最近是否出现过 Sampletest 相关日志。"""
    try:
        # 短时抓取（部分设备支持 hilog -x 导出后退出，否则用 timeout 截断）
        r = subprocess.run(
            ["hdc", "shell", "hilog -x 2>/dev/null || hilog"],
            capture_output=True,
            text=True,
            timeout=8,
        )
        out = (r.stdout or "") + (r.stderr or "")
        lines = [l for l in out.splitlines() if "ampletest" in l.lower() or "9009" in l]
        if lines:
            print(f"[ohsa] 设备 hilog 中近期有 sampletest 相关日志（共 {len(lines)} 条）:")
            for l in lines[:sample_lines]:
                print(f"  {l.strip()}")
            return True
        print("[ohsa] 设备 hilog 中未发现 sampletest 相关日志")
        return False
    except FileNotFoundError:
        print("[ohsa] 未找到 hdc 命令")
        return False
    except subprocess.TimeoutExpired:
        print("[ohsa] hilog 抓取超时")
        return False


def main():
    parser = argparse.ArgumentParser(
        description="查看 sampletest SystemAbility 是否存在（编译产物 / 设备）"
    )
    parser.add_argument(
        "mode",
        nargs="?",
        default="all",
        choices=["build", "device", "all"],
        help="build=仅检查编译产物; device=仅检查设备; all=都检查（默认）",
    )
    parser.add_argument(
        "--out",
        default=None,
        help="编译产出根目录，默认: <源码根>/out/rk3568",
    )
    parser.add_argument(
        "--no-hilog",
        action="store_true",
        help="device 检查时不抓 hilog",
    )
    args = parser.parse_args()
    src_root = get_src_root()
    out_base = args.out or os.path.join(src_root, "out", "rk3568")

    print(f"[ohsa] sampletest SA ID = {SA_ID}")
    print(f"[ohsa] 源码根: {src_root}")
    if args.mode in ("build", "all"):
        print("[ohsa] --- 检查编译产物 ---")
        build_ok = check_build_artifacts(out_base)
        print("[ohsa] 编译产物检查: " + ("通过" if build_ok else "不通过"))
    else:
        build_ok = None

    if args.mode in ("device", "all"):
        print("[ohsa] --- 检查设备 ---")
        proc_ok = check_device_process()
        hilog_ok = check_device_hilog() if not args.no_hilog else None
        device_ok = proc_ok or (hilog_ok if hilog_ok is not None else False)
        print("[ohsa] 设备检查: " + ("存在 sampletest 运行迹象" if device_ok else "未发现 sampletest 运行"))
    else:
        device_ok = None

    if args.mode == "all":
        # 以编译产物为准；设备未连接时 device_ok 可能为 False，不因此失败
        sys.exit(0 if build_ok else 1)
    elif args.mode == "build":
        sys.exit(0 if build_ok else 1)
    else:
        sys.exit(0 if device_ok else 1)


if __name__ == "__main__":
    main()
