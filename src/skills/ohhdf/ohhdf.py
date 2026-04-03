#!/usr/bin/env python3
# Copyright (c) 2026 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0.
"""OpenHarmony HDF helper: docs, builds, hdc push, hilog/dmesg snippets."""

from __future__ import annotations

import argparse
import os
import subprocess
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
GUIDE_MD = os.path.join(SCRIPT_DIR, "hdf_guide_zh.md")
HOWTO_MD = os.path.join(SCRIPT_DIR, "howtohdf.md")
SKILL_MD = os.path.join(SCRIPT_DIR, "SKILL.md")


def _find_src_root():
    d = os.getcwd()
    for _ in range(10):
        if os.path.isfile(os.path.join(d, "build.sh")):
            return d
        parent = os.path.dirname(d)
        if parent == d:
            break
        d = parent
    return None


def _hdc_prefix(hdc_target: str | None) -> list:
    t = (hdc_target or os.environ.get("OHHDF_HDC_TARGET", "")).strip()
    if t:
        return ["hdc", "-t", t]
    return ["hdc"]


def cmd_guide(_args):
    print("HDF guide (zh):", GUIDE_MD)
    print("HDF how-to (full):", HOWTO_MD)
    print("Skill index:", SKILL_MD)
    if os.path.isfile(GUIDE_MD):
        print("\n--- hdf_guide_zh.md (first 35 lines) ---")
        with open(GUIDE_MD, "r", encoding="utf-8") as f:
            for i, line in enumerate(f):
                if i >= 35:
                    break
                print(line.rstrip())
        print("--- end excerpt ---\n")
    return 0


def cmd_howto(args):
    if not os.path.isfile(HOWTO_MD):
        print("missing:", HOWTO_MD, file=sys.stderr)
        return 1
    print("path:", HOWTO_MD)
    if args.full:
        with open(HOWTO_MD, "r", encoding="utf-8") as f:
            print(f.read())
    else:
        print("\n--- howtohdf.md (first 90 lines); use --full for entire file ---\n")
        with open(HOWTO_MD, "r", encoding="utf-8") as f:
            for i, line in enumerate(f):
                if i >= 90:
                    break
                print(line.rstrip())
    return 0


def _run_build(root: str, product: str, target: str) -> int:
    cmd = ["./build.sh", "--build-target", target, "--product-name", product]
    print("cwd:", root)
    print("exec:", " ".join(cmd))
    return subprocess.run(cmd, cwd=root).returncode


def cmd_build_demo(args):
    root = _find_src_root()
    if not root:
        print("error: cwd must be under OpenHarmony src (build.sh)", file=sys.stderr)
        return 1
    r = _run_build(root, args.product, "light_demo")
    if r == 0:
        p = os.path.join(root, "out", args.product, "hdf", "drivers_peripheral_light", "light_demo")
        print("binary:", p)
    return r


def cmd_build_blue_demo(args):
    root = _find_src_root()
    if not root:
        print("error: cwd must be under OpenHarmony src (build.sh)", file=sys.stderr)
        return 1
    r = _run_build(root, args.product, "blue_demo")
    if r == 0:
        base = os.path.join(root, "out", args.product, "hdf", "drivers_peripheral_bluehdf")
        print("binary:", os.path.join(base, "blue_demo"))
        print("hal:   ", os.path.join(base, "libhdi_blue.z.so"))
    return r


def cmd_build_target(args):
    root = _find_src_root()
    if not root:
        print("error: cwd must be under OpenHarmony src (build.sh)", file=sys.stderr)
        return 1
    return _run_build(root, args.product, args.target)


def cmd_paths(args):
    root = _find_src_root()
    if not root:
        print("error: need src root", file=sys.stderr)
        return 1
    p = args.product
    hdf_light = os.path.join(root, "out", p, "hdf", "drivers_peripheral_light")
    hdf_blue = os.path.join(root, "out", p, "hdf", "drivers_peripheral_bluehdf")
    pkg = os.path.join(root, "out", p, "packages", "phone", "vendor", "lib")
    hcb = os.path.join(root, "out", p, "packages", "phone", "vendor", "etc", "hdfconfig", "hdf_default.hcb")
    print("light_demo:     ", os.path.join(hdf_light, "light_demo"))
    print("blue_demo:      ", os.path.join(hdf_blue, "blue_demo"))
    print("libhdi_blue:    ", os.path.join(hdf_blue, "libhdi_blue.z.so"))
    print("libbluehdf_drv: ", os.path.join(hdf_blue, "libbluehdf_driver.z.so"))
    print("packages vendor:", pkg)
    print("hdf_default.hcb:", hcb)
    return 0


def cmd_push_blue(args):
    root = _find_src_root()
    if not root:
        print("error: need src root", file=sys.stderr)
        return 1
    base = os.path.join(root, "out", args.product, "hdf", "drivers_peripheral_bluehdf")
    so = os.path.join(base, "libhdi_blue.z.so")
    exe = os.path.join(base, "blue_demo")
    for f in (so, exe):
        if not os.path.isfile(f):
            print("missing build artifact:", f, file=sys.stderr)
            return 1
    hp = _hdc_prefix(args.hdc_target)
    remote_so = "/data/local/tmp/libhdi_blue.z.so"
    remote_exe = "/data/local/tmp/blue_demo"
    r = subprocess.run(hp + ["file", "send", so, remote_so])
    if r.returncode != 0:
        return r.returncode
    r = subprocess.run(hp + ["file", "send", exe, remote_exe])
    if r.returncode != 0:
        return r.returncode
    r = subprocess.run(hp + ["shell", "chmod", "755", remote_exe])
    print("pushed:", remote_so, remote_exe)
    print('run: hdc shell "export LD_LIBRARY_PATH=/data/local/tmp:/vendor/lib:/system/lib && /data/local/tmp/blue_demo info"')
    return r.returncode


def cmd_push_light(args):
    root = _find_src_root()
    if not root:
        print("error: need src root", file=sys.stderr)
        return 1
    exe = os.path.join(root, "out", args.product, "hdf", "drivers_peripheral_light", "light_demo")
    if not os.path.isfile(exe):
        print("missing:", exe, file=sys.stderr)
        return 1
    hp = _hdc_prefix(args.hdc_target)
    remote = "/data/local/tmp/light_demo"
    r = subprocess.run(hp + ["file", "send", exe, remote])
    if r.returncode != 0:
        return r.returncode
    subprocess.run(hp + ["shell", "chmod", "755", remote])
    print("pushed:", remote)
    print("run: hdc shell", remote)
    return 0


def cmd_device_check(args):
    hp = _hdc_prefix(args.hdc_target)
    script = (
        "echo '--- ps (hdf) ---'; ps -ef | grep -E 'bluehdf_host|light_host|hdf_devmgr' | grep -v grep; "
        "echo '--- vendor lib ---'; ls /vendor/lib/libhdi_blue.z.so /vendor/lib/libbluehdf_driver.z.so "
        "/vendor/lib/libhdi_light.z.so 2>/dev/null; "
        "echo '--- leds ---'; ls /sys/class/leds 2>/dev/null | head -20"
    )
    return subprocess.run(hp + ["shell", script]).returncode


def cmd_hilog_hdf(args):
    hp = _hdc_prefix(args.hdc_target)
    pat = args.pattern or "bluehdf|uhdf_blue|light_host|uhdf_light|hdf_devmgr|HDF"
    cmd = f"hilog -x 2>/dev/null | grep -iE '{pat}' | tail -n {args.tail}"
    return subprocess.run(hp + ["shell", cmd]).returncode


def cmd_dmesg_hdf(args):
    hp = _hdc_prefix(args.hdc_target)
    cmd = f"dmesg | grep -iE 'hdf|selinux|avc|bluehdf|init|host' | tail -n {args.tail}"
    return subprocess.run(hp + ["shell", cmd]).returncode


def cmd_hidumper_list(args):
    hp = _hdc_prefix(args.hdc_target)
    return subprocess.run(hp + ["shell", "hidumper -l 2>/dev/null | head -n " + str(args.head)]).returncode


def main():
    p = argparse.ArgumentParser(description="OpenHarmony HDF helper (light / bluehdf)")
    p.add_argument(
        "-t",
        "--hdc-target",
        dest="hdc_target",
        default=None,
        help="hdc -t serial (or env OHHDF_HDC_TARGET); not the GN build target",
    )
    sub = p.add_subparsers(dest="cmd", required=True)

    g = sub.add_parser("guide", help="print doc paths + excerpt of hdf_guide_zh.md")
    g.set_defaults(func=cmd_guide)

    h = sub.add_parser("howto", help="print howtohdf.md path + excerpt (--full for all)")
    h.add_argument("--full", action="store_true", help="print entire howtohdf.md")
    h.set_defaults(func=cmd_howto)

    b = sub.add_parser("build-demo", help="build light_demo")
    b.add_argument("--product", default="rk3568")
    b.set_defaults(func=cmd_build_demo)

    bb = sub.add_parser("build-blue-demo", help="build blue_demo (+ pulls hdi_blue)")
    bb.add_argument("--product", default="rk3568")
    bb.set_defaults(func=cmd_build_blue_demo)

    bt = sub.add_parser("build-target", help="build arbitrary --build-target NAME")
    bt.add_argument("--product", default="rk3568")
    bt.add_argument("target", help="e.g. hdi_blue, libbluehdf_driver, images")
    bt.set_defaults(func=cmd_build_target)

    pp = sub.add_parser("paths", help="print typical out paths for product")
    pp.add_argument("--product", default="rk3568")
    pp.set_defaults(func=cmd_paths)

    pb = sub.add_parser("push-blue", help="hdc send libhdi_blue.z.so + blue_demo to /data/local/tmp/")
    pb.add_argument("--product", default="rk3568")
    pb.set_defaults(func=cmd_push_blue)

    pl = sub.add_parser("push-light", help="hdc send light_demo to /data/local/tmp/")
    pl.add_argument("--product", default="rk3568")
    pl.set_defaults(func=cmd_push_light)

    dc = sub.add_parser("device-check", help="hdc shell: ps + vendor libs + leds")
    dc.set_defaults(func=cmd_device_check)

    hl = sub.add_parser("hilog-hdf", help="hdc shell: hilog filtered by HDF-related pattern")
    hl.add_argument("--tail", type=int, default=80)
    hl.add_argument("--pattern", default=None, help="regex for grep -iE (default: bluehdf|light_host|...)")
    hl.set_defaults(func=cmd_hilog_hdf)

    dm = sub.add_parser("dmesg-hdf", help="hdc shell: dmesg filtered")
    dm.add_argument("--tail", type=int, default=60)
    dm.set_defaults(func=cmd_dmesg_hdf)

    hi = sub.add_parser("hidumper-list", help="hdc shell: hidumper -l (first N lines)")
    hi.add_argument("--head", type=int, default=80)
    hi.set_defaults(func=cmd_hidumper_list)

    ns = p.parse_args()
    return ns.func(ns)


if __name__ == "__main__":
    sys.exit(main())
