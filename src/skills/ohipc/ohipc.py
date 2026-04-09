#!/usr/bin/env python3
# Copyright (c) 2026 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0.
"""OpenHarmony IPC: ipcarch + ipc_example build, push, hdc test with explicit success criteria."""

from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
import time

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SKILL_MD = os.path.join(SCRIPT_DIR, "SKILL.md")
IPCARCH_MD = os.path.join(SCRIPT_DIR, "ipcarch.md")
HOWTOIPC_MD = os.path.join(SCRIPT_DIR, "howtoipc.md")
CROSS_PROCESS_REPORT_MD = os.path.join(SCRIPT_DIR, "IPC_EXAMPLE_CROSS_PROCESS_TEST_REPORT.md")

# Demo magic from ipc_demo_ipc.h
DEMO_MAGIC_HEX = "0x50435049"
PULL_EXPECT = "A=10 B=20"
LAST_NOTIFY_B = "B=25"


def _find_src_root() -> str | None:
    d = os.getcwd()
    for _ in range(12):
        if os.path.isfile(os.path.join(d, "build.sh")):
            return d
        parent = os.path.dirname(d)
        if parent == d:
            break
        d = parent
    return None


def _hdc_prefix(hdc_target: str | None) -> list[str]:
    t = (hdc_target or os.environ.get("OHIPC_HDC_TARGET", "")).strip()
    if t:
        return ["hdc", "-t", t]
    return ["hdc"]


def _run(cmd: list[str], cwd: str | None = None) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)


def cmd_arch(_args: argparse.Namespace) -> int:
    print("SKILL (workflow + test criteria):", SKILL_MD)
    print("Architecture doc:", IPCARCH_MD)
    print("Zero-base how-to (ipc_example):", HOWTOIPC_MD)
    print("Cross-process test report:", CROSS_PROCESS_REPORT_MD)
    for path, label in [(IPCARCH_MD, "ipcarch.md"), (SKILL_MD, "SKILL.md")]:
        if os.path.isfile(path):
            print(f"\n--- {label} (first 45 lines) ---")
            with open(path, "r", encoding="utf-8") as f:
                for i, line in enumerate(f):
                    if i >= 45:
                        break
                    print(line.rstrip())
            print("--- end excerpt ---\n")
    return 0


def cmd_howto(args: argparse.Namespace) -> int:
    """Print howtoipc.md path and excerpt (--full for entire file)."""
    if not os.path.isfile(HOWTOIPC_MD):
        print("missing:", HOWTOIPC_MD, file=sys.stderr)
        return 1
    print("path:", HOWTOIPC_MD)
    if args.full:
        with open(HOWTOIPC_MD, "r", encoding="utf-8") as f:
            print(f.read())
    else:
        print("\n--- howtoipc.md (first 95 lines); use --full for entire file ---\n")
        with open(HOWTOIPC_MD, "r", encoding="utf-8") as f:
            for i, line in enumerate(f):
                if i >= 95:
                    break
                print(line.rstrip())
    return 0


def _out_bins(root: str, product: str) -> tuple[str, str]:
    base = os.path.join(root, "out", product, "communication", "ipc_example_service")
    return os.path.join(base, "ipc_demo_server"), os.path.join(base, "ipc_demo_client")


def _out_parcel_unittest(root: str, product: str) -> str:
    return os.path.join(
        root,
        "out",
        product,
        "tests",
        "unittest",
        "communication",
        "ipc_example_service",
        "ipc_demo_parcel_unittest",
    )


def _out_ipc_demo_framework(root: str, product: str) -> str:
    return os.path.join(
        root, "out", product, "communication", "ipc_example_service", "libipc_demo_framework.z.so"
    )


def _out_ipc_example_parcel(root: str, product: str) -> str:
    return os.path.join(
        root, "out", product, "communication", "ipc_example_service", "libipc_example_parcel.z.so"
    )


def cmd_paths(args: argparse.Namespace) -> int:
    root = _find_src_root()
    if not root:
        print("error: cwd must be under OpenHarmony src (build.sh)", file=sys.stderr)
        return 1
    s, c = _out_bins(root, args.product)
    ut = _out_parcel_unittest(root, args.product)
    print("src_root:", root)
    print("ipc_demo_server:", s, "exists=" + str(os.path.isfile(s)))
    print("ipc_demo_client:", c, "exists=" + str(os.path.isfile(c)))
    print("ipc_demo_parcel_unittest:", ut, "exists=" + str(os.path.isfile(ut)))
    fw = _out_ipc_demo_framework(root, args.product)
    print("libipc_demo_framework.z.so:", fw, "exists=" + str(os.path.isfile(fw)))
    par = _out_ipc_example_parcel(root, args.product)
    print("libipc_example_parcel.z.so:", par, "exists=" + str(os.path.isfile(par)))
    print("HAP: IpcNativeProj46R 内 libipc_example_parcel.so 由 entry CMake 双 ABI 编入 libs/（见 NATIVEPROJ_IPC_FRAMEWORK.md）")
    print("device paths: /data/local/tmp/ipc_demo_server , ipc_demo_client")
    print("device unittest path: /data/local/tmp/ipc_demo_parcel_unittest")
    return 0


def _build(root: str, product: str, targets: list[str]) -> int:
    for t in targets:
        cmd = ["./build.sh", "--product-name", product, "--build-target", t]
        print("exec:", " ".join(cmd), "cwd:", root)
        r = subprocess.run(cmd, cwd=root)
        if r.returncode != 0:
            return r.returncode
    return 0


def cmd_build_server(args: argparse.Namespace) -> int:
    root = _find_src_root()
    if not root:
        return 1
    return _build(root, args.product, ["ipc_demo_server"])


def cmd_build_client(args: argparse.Namespace) -> int:
    root = _find_src_root()
    if not root:
        return 1
    return _build(root, args.product, ["ipc_demo_client"])


def cmd_build_all(args: argparse.Namespace) -> int:
    root = _find_src_root()
    if not root:
        return 1
    return _build(root, args.product, ["ipc_demo_server", "ipc_demo_client"])


def cmd_build_unittest(args: argparse.Namespace) -> int:
    root = _find_src_root()
    if not root:
        return 1
    return _build(root, args.product, ["ipc_demo_parcel_unittest"])


def cmd_push(args: argparse.Namespace) -> int:
    root = _find_src_root()
    if not root:
        print("error: src root", file=sys.stderr)
        return 1
    s, c = _out_bins(root, args.product)
    if not os.path.isfile(s) or not os.path.isfile(c):
        print("error: build first (missing server or client binary)", file=sys.stderr)
        return 1
    hdc = _hdc_prefix(args.hdc_target)
    for local, remote in [(s, "/data/local/tmp/ipc_demo_server"), (c, "/data/local/tmp/ipc_demo_client")]:
        r = subprocess.run(hdc + ["file", "send", local, remote])
        if r.returncode != 0:
            return r.returncode
    r = subprocess.run(
        hdc + ["shell", "chmod 755 /data/local/tmp/ipc_demo_server /data/local/tmp/ipc_demo_client"]
    )
    return r.returncode


def cmd_run_server(args: argparse.Namespace) -> int:
    hdc = _hdc_prefix(args.hdc_target)
    # stop old
    subprocess.run(hdc + ["shell", "pkill -f ipc_demo_server 2>/dev/null"], capture_output=True)
    time.sleep(0.5)
    script = (
        "sh -c 'nohup /data/local/tmp/ipc_demo_server >/data/local/tmp/ipc_srv.log 2>&1 & sleep 1; "
        "ps -ef | grep ipc_demo_server | grep -v grep; cat /data/local/tmp/ipc_srv.log'"
    )
    r = subprocess.run(hdc + ["shell", script])
    return r.returncode


def _parse_client_success(out: str) -> tuple[bool, list[str]]:
    """Return (ok, list of failure reasons)."""
    errs: list[str] = []
    checks = [
        (r"registered session=\d+", "registered session"),
        (r"SendString ret=0\b", "SendString ret=0"),
        (r"PushStruct ret=0\b", "PushStruct ret=0"),
        (rf"PullStruct ret=0.*{re.escape(PULL_EXPECT)}", f"PullStruct + {PULL_EXPECT}"),
        (rf"CallDemoObjectMagic ret=0.*magic={re.escape(DEMO_MAGIC_HEX)}", f"magic={DEMO_MAGIC_HEX}"),
        (r"ServerUpdateStruct ret=0.*notifyCount=1", "ServerUpdateStruct + notifyCount=1"),
        (rf"last notify:.*{re.escape(LAST_NOTIFY_B)}", f"last notify contains {LAST_NOTIFY_B}"),
        (r"GetClientCount ret=0.*count=\d+", "GetClientCount ret=0 + count=N"),
        (r"GetPeerList ret=0", "GetPeerList ret=0"),
        (r"UT_TYPE_SCALARS ok\b", "UT_TYPE_SCALARS"),
        (r"UT_TYPE_STRING16 ok\b", "UT_TYPE_STRING16"),
        (r"UT_BOUND_EMPTY_INT32VEC ok\b", "UT_BOUND_EMPTY_INT32VEC"),
        (r"UT_TYPE_INT32VEC_SMALL ok\b", "UT_TYPE_INT32VEC_SMALL"),
        (r"UT_BOUND_INT32VEC_512 ok\b", "UT_BOUND_INT32VEC_512"),
        (r"UT_TYPE_STRINGVEC ok\b", "UT_TYPE_STRINGVEC"),
        (r"UT_BOUND_BUFFER_1BYTE ok\b", "UT_BOUND_BUFFER_1BYTE"),
        (r"UT_TYPE_BUFFER_512_XOR ok\b", "UT_TYPE_BUFFER_512_XOR"),
        (r"UT_TYPE_FD ok\b", "UT_TYPE_FD"),
        (r"UT_TYPE_PARCELABLE ok\b", "UT_TYPE_PARCELABLE"),
        (r"UT_TYPE_ASHMEM ok\b", "UT_TYPE_ASHMEM"),
        (r"UT_ERR_BAD_SESSION ok\b", "UT_ERR_BAD_SESSION"),
        (r"PERF_echo_scalars loops=\d+ us=\d+", "PERF_echo_scalars"),
        (r"CONC_echo_scalars threads=\d+ ops=\d+ fails=0\b", "CONC_echo_scalars fails=0"),
        (r"UT_CONC_ECHO ok\b", "UT_CONC_ECHO"),
        (r"UT_ERR_LOCAL_AFTER_UNREG ok\b", "UT_ERR_LOCAL_AFTER_UNREG"),
        (r"SUMMARY_UT ALL_OK\b", "SUMMARY_UT ALL_OK"),
    ]
    for pat, name in checks:
        if not re.search(pat, out, re.DOTALL):
            errs.append(f"missing or wrong: {name} (pattern {pat})")
    return (len(errs) == 0, errs)


def cmd_test(args: argparse.Namespace) -> int:
    hdc = _hdc_prefix(args.hdc_target)
    if getattr(args, "push_first", True):
        rc = cmd_push(args)
        if rc != 0:
            return rc
    # list targets
    t = _run(hdc + ["list", "targets"])
    print(t.stdout.strip() or t.stderr.strip())
    if not t.stdout.strip() or "Empty" in t.stdout:
        print("error: no hdc device (hdc list targets)", file=sys.stderr)
        return 2

    # server
    subprocess.run(hdc + ["shell", "pkill -f ipc_demo_server 2>/dev/null"], capture_output=True)
    time.sleep(0.5)
    r = subprocess.run(
        hdc
        + [
            "shell",
            "sh -c 'nohup /data/local/tmp/ipc_demo_server >/data/local/tmp/ipc_srv.log 2>&1 &'",
        ]
    )
    if r.returncode != 0:
        print("error: start server", file=sys.stderr)
        return 1
    time.sleep(float(args.server_wait))

    slog = _run(hdc + ["shell", "cat /data/local/tmp/ipc_srv.log 2>/dev/null"])
    srv = slog.stdout or ""
    print("--- server log (ipc_srv.log) ---")
    print(srv.strip() or "(empty)")
    if "registered, JoinWorkThread" not in srv:
        print("error: server log missing 'registered, JoinWorkThread' -> AddSystemAbility likely failed", file=sys.stderr)
        return 3

    name = args.client_name
    cr = subprocess.run(
        hdc + ["shell", f"/data/local/tmp/ipc_demo_client {name}"],
        capture_output=True,
        text=True,
    )
    out = (cr.stdout or "") + (cr.stderr or "")
    print("--- client stdout/stderr ---")
    print(out.strip())
    if cr.returncode != 0:
        print(f"error: client exit code {cr.returncode}", file=sys.stderr)

    ok, errs = _parse_client_success(out)
    print("\n--- criteria (legacy demo + UT_TYPE_* / PERF / CONC / SUMMARY_UT; see SKILL.md §5.4) ---")
    if ok:
        print("RESULT: PASS — all mandatory patterns matched.")
    else:
        print("RESULT: FAIL")
        for e in errs:
            print(" ", e)
    if not args.keep_server:
        subprocess.run(hdc + ["shell", "pkill -f ipc_demo_server 2>/dev/null"], capture_output=True)
    return 0 if ok and cr.returncode == 0 else 4


def cmd_test_concurrent(args: argparse.Namespace) -> int:
    """Two clients started with short overlap; both logs must pass parse; optional count=2."""
    hdc = _hdc_prefix(args.hdc_target)
    if args.push_first:
        rc = cmd_push(args)
        if rc != 0:
            return rc
    subprocess.run(hdc + ["shell", "pkill -f ipc_demo_server 2>/dev/null"], capture_output=True)
    time.sleep(0.5)
    subprocess.run(
        hdc + ["shell", "sh -c 'nohup /data/local/tmp/ipc_demo_server >/data/local/tmp/ipc_srv.log 2>&1 &'"]
    )
    time.sleep(float(args.server_wait))

    script = r"""
sh -c '
rm -f /data/local/tmp/c1.log /data/local/tmp/c2.log
/data/local/tmp/ipc_demo_client conc_a > /data/local/tmp/c1.log 2>&1 &
P1=$!
sleep 0.35
/data/local/tmp/ipc_demo_client conc_b > /data/local/tmp/c2.log 2>&1 &
P2=$!
wait $P1
wait $P2
echo ==== c1 ====
cat /data/local/tmp/c1.log
echo ==== c2 ====
cat /data/local/tmp/c2.log
'
"""
    cr = subprocess.run(hdc + ["shell", script], capture_output=True, text=True)
    print(cr.stdout or cr.stderr)
    c1 = _run(hdc + ["shell", "cat /data/local/tmp/c1.log"])
    c2 = _run(hdc + ["shell", "cat /data/local/tmp/c2.log"])
    t1, t2 = c1.stdout or "", c2.stdout or ""
    ok1, e1 = _parse_client_success(t1)
    ok2, e2 = _parse_client_success(t2)
    overlap = "count=2" in t1 or "count=2" in t2
    print("\n--- concurrent ---")
    print("client conc_a PASS:", ok1, ("; " + "; ".join(e1)) if e1 else "")
    print("client conc_b PASS:", ok2, ("; " + "; ".join(e2)) if e2 else "")
    print("observed count=2 during overlap (best-effort):", overlap)
    print("NOTE: overlap window is heuristic; false negative is possible (SKILL.md: partial concurrency).")
    if not args.keep_server:
        subprocess.run(hdc + ["shell", "pkill -f ipc_demo_server 2>/dev/null"], capture_output=True)
    return 0 if ok1 and ok2 else 5


def cmd_perf(args: argparse.Namespace) -> int:
    """Sequential full client runs from host — coarse end-to-end latency, not micro-benchmark."""
    hdc = _hdc_prefix(args.hdc_target)
    if args.push_first:
        cmd_push(args)
    subprocess.run(hdc + ["shell", "pkill -f ipc_demo_server 2>/dev/null"], capture_output=True)
    time.sleep(0.5)
    subprocess.run(
        hdc + ["shell", "sh -c 'nohup /data/local/tmp/ipc_demo_server >/data/local/tmp/ipc_srv.log 2>&1 &'"]
    )
    time.sleep(float(args.server_wait))

    n = int(args.iterations)
    t0 = time.perf_counter()
    for i in range(n):
        r = subprocess.run(
            hdc + ["shell", f"/data/local/tmp/ipc_demo_client perf_{i}"],
            capture_output=True,
            text=True,
        )
        if r.returncode != 0:
            print(f"error: iteration {i} exit {r.returncode}", file=sys.stderr)
            return 1
        # hdc shell often routes program output to stderr; same as cmd_test
        out = (r.stdout or "") + (r.stderr or "")
        ok, errs = _parse_client_success(out)
        if not ok:
            print(f"error: iteration {i} criteria fail", errs, file=sys.stderr)
            return 1
    elapsed = time.perf_counter() - t0
    print(f"perf: {n} full client runs in {elapsed:.3f}s, avg {elapsed/n:.3f}s/run (hdc + device)")
    print("NOTE: dominated by hdc/IPC overhead; not a replacement for in-process benchmarks (SKILL.md).")
    if not args.keep_server:
        subprocess.run(hdc + ["shell", "pkill -f ipc_demo_server 2>/dev/null"], capture_output=True)
    return 0


def cmd_test_parcel(args: argparse.Namespace) -> int:
    """Push ipc_demo_parcel_unittest (optional) and run on device; gtest exit code must be 0."""
    hdc = _hdc_prefix(args.hdc_target)
    root = _find_src_root()
    if not root:
        print("error: src root", file=sys.stderr)
        return 1
    local = _out_parcel_unittest(root, args.product)
    remote = "/data/local/tmp/ipc_demo_parcel_unittest"
    if getattr(args, "push_first", True):
        if not os.path.isfile(local):
            print("error: build first:", local, file=sys.stderr)
            return 1
        r = subprocess.run(hdc + ["file", "send", local, remote])
        if r.returncode != 0:
            return r.returncode
        subprocess.run(hdc + ["shell", f"chmod 755 {remote}"])
    t = _run(hdc + ["list", "targets"])
    print(t.stdout.strip() or t.stderr.strip())
    if not t.stdout.strip() or "Empty" in t.stdout:
        print("error: no hdc device", file=sys.stderr)
        return 2
    # OHOS gtest may write *.xml under cwd; default cwd can be unwritable — run from /data/local/tmp.
    cr = subprocess.run(
        hdc + ["shell", f"cd /data/local/tmp && ./{os.path.basename(remote)}"],
        capture_output=True,
        text=True,
    )
    out = (cr.stdout or "") + (cr.stderr or "")
    print(out.strip())
    if cr.returncode != 0:
        print("error: ipc_demo_parcel_unittest exit", cr.returncode, file=sys.stderr)
        return 6
    if re.search(r"\[\s*FAILED\s*\]", out):
        print("error: gtest reported FAILED", file=sys.stderr)
        return 6
    if not re.search(r"\[\s*PASSED\s*\]\s*\d+\s+tests?", out):
        print("error: missing gtest PASSED line (unexpected output?)", file=sys.stderr)
        return 6
    print("RESULT: PASS — ipc_demo_parcel_unittest (in-process Parcel suite on device).")
    return 0


def main() -> int:
    p = argparse.ArgumentParser(description="ohipc: IPC arch + ipc_example build & hdc test")
    p.add_argument("-t", "--hdc-target", default=None, help="hdc -t target (or env OHIPC_HDC_TARGET)")
    p.add_argument("--product", default="rk3568", help="product name for out/ path")

    sub = p.add_subparsers(dest="cmd", required=True)

    sub.add_parser(
        "arch",
        help="print doc paths (incl. howtoipc.md) and excerpt ipcarch.md + SKILL.md",
    ).set_defaults(func=cmd_arch)
    ht = sub.add_parser("howto", help="print howtoipc.md path + excerpt (--full for all)")
    ht.add_argument("--full", action="store_true", help="print entire howtoipc.md")
    ht.set_defaults(func=cmd_howto)
    sub.add_parser("paths", help="print out paths for server/client binaries").set_defaults(func=cmd_paths)
    sub.add_parser("build-server", help="compile ipc_demo_server").set_defaults(func=cmd_build_server)
    sub.add_parser("build-client", help="compile ipc_demo_client").set_defaults(func=cmd_build_client)
    sub.add_parser("build-all", help="compile both").set_defaults(func=cmd_build_all)
    sub.add_parser("build-unittest", help="compile ipc_demo_parcel_unittest (in-process gtest)").set_defaults(
        func=cmd_build_unittest
    )

    pp = sub.add_parser("push", help="hdc file send binaries to /data/local/tmp/")
    pp.set_defaults(func=cmd_push)

    rs = sub.add_parser("run-server", help="start ipc_demo_server in background on device")
    rs.set_defaults(func=cmd_run_server)

    pt = sub.add_parser("test", help="push(optional), start server, one client, verify logs & patterns")
    pt.add_argument("--no-push", action="store_true", help="skip push (binaries already on device)")
    pt.add_argument("--keep-server", action="store_true", help="leave ipc_demo_server running after test")
    pt.add_argument("--server-wait", default="2", help="seconds to wait after starting server")
    pt.add_argument("--client-name", default="ohipc_test", help="argument to ipc_demo_client")

    def _dispatch_test(a):
        a.push_first = not a.no_push
        return cmd_test(a)

    pt.set_defaults(func=_dispatch_test)

    tc = sub.add_parser("test-concurrent", help="two overlapping clients; both must pass criteria")
    tc.add_argument("--no-push", action="store_true")
    tc.add_argument("--keep-server", action="store_true")
    tc.add_argument("--server-wait", default="2")

    def _dispatch_tc(a):
        a.push_first = not a.no_push
        return cmd_test_concurrent(a)

    tc.set_defaults(func=_dispatch_tc)

    pf = sub.add_parser("perf", help="N sequential full client runs; measure total/avg time")
    pf.add_argument("--no-push", action="store_true")
    pf.add_argument("--keep-server", action="store_true")
    pf.add_argument("--server-wait", default="2")
    pf.add_argument("--iterations", default="5", help="number of full client runs")

    def _dispatch_pf(a):
        a.push_first = not a.no_push
        return cmd_perf(a)

    pf.set_defaults(func=_dispatch_pf)

    tp = sub.add_parser(
        "test-parcel",
        help="push(optional) and run ipc_demo_parcel_unittest on device (pure Parcel gtest)",
    )
    tp.add_argument("--no-push", action="store_true", help="binary already on device at /data/local/tmp/")

    def _dispatch_tp(a):
        a.push_first = not a.no_push
        return cmd_test_parcel(a)

    tp.set_defaults(func=_dispatch_tp)

    args = p.parse_args()
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
