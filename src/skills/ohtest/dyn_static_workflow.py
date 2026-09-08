#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
动静态 ACTS 一站式工作流：压短 sleep → 编静态 HAP → 同步 testcases → 配对耗时对比。

与 compare_dyn_static.py 配合使用。默认作用域为 test/xts/acts/web。

Usage:
  # 把 *_static 下所有 Utils.msSleep(N)/msSleep(N) 改为 msSleep(1)
  python3 dyn_static_workflow.py patch-sleep --src-dir <src>

  # 编译子系统静态 HAP（xts_suitetype=hap_static）并拷到 testcases
  python3 dyn_static_workflow.py build-static --src-dir <src> [--subsystem web]

  # 仅把 suites/haps/*Static*.hap 同步到 acts/testcases
  python3 dyn_static_workflow.py sync-haps --src-dir <src>

  # 全流程：可选 patch-sleep → build-static → compare run
  python3 dyn_static_workflow.py pipeline --src-dir <src> --sn <device> [--patch-sleep] [--paired-only]

  python3 dyn_static_workflow.py help
"""

from __future__ import annotations

import argparse
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
DEFAULT_PRODUCT = "rk3568"
MSSLEEP_RE = re.compile(r"msSleep\(\s*[0-9]+\s*\)")


def resolve_src_root(src_dir: str | None) -> Path:
    if src_dir:
        return Path(src_dir).expanduser().resolve()
    p = SCRIPT_DIR
    for _ in range(8):
        if (p / "test" / "xts" / "acts").is_dir():
            return p
        if p.parent == p:
            break
        p = p.parent
    return Path.cwd().resolve()


def acts_dir(src: Path) -> Path:
    return src / "test" / "xts" / "acts"


def web_dir(src: Path, subsystem: str = "web") -> Path:
    return acts_dir(src) / subsystem


def out_acts(src: Path, product: str) -> Path:
    return src / "out" / product / "suites" / "acts" / "acts"


def out_haps(src: Path, product: str) -> Path:
    return src / "out" / product / "suites" / "haps"


def cmd_patch_sleep(args: argparse.Namespace) -> int:
    src = resolve_src_root(args.src_dir)
    root = Path(args.web_dir) if args.web_dir else web_dir(src, args.subsystem)
    if not root.is_dir():
        print(f"目录不存在: {root}", file=sys.stderr)
        return 1
    target_ms = int(args.ms)
    static_dirs = sorted(p for p in root.rglob("*_static") if p.is_dir())
    changed_files = 0
    replaced = 0
    before_non1 = 0
    for sd in static_dirs:
        for ets in sd.rglob("*.ets"):
            text = ets.read_text(encoding="utf-8", errors="ignore")
            nums = [int(m.group(1)) for m in re.finditer(r"msSleep\(\s*(\d+)\s*\)", text)]
            before_non1 += sum(1 for n in nums if n != target_ms)
            new_text, n = MSSLEEP_RE.subn(f"msSleep({target_ms})", text)
            if n and new_text != text:
                ets.write_text(new_text, encoding="utf-8")
                changed_files += 1
                replaced += n
    print(f"root: {root}")
    print(f"static_dirs: {len(static_dirs)}")
    print(f"replaced_calls: {replaced}  files: {changed_files}  (non-{target_ms} before≈{before_non1})")
    return 0


def sync_static_haps(src: Path, product: str, pattern: str = "*Static*.hap") -> int:
    haps = out_haps(src, product)
    tc = out_acts(src, product) / "testcases"
    if not haps.is_dir():
        print(f"haps 目录不存在: {haps}", file=sys.stderr)
        return 0
    tc.mkdir(parents=True, exist_ok=True)
    n = 0
    for f in sorted(haps.glob(pattern)):
        shutil.copy2(f, tc / f.name)
        n += 1
    print(f"synced {n} HAP(s): {haps}/{pattern} -> {tc}")
    return n


def cmd_sync_haps(args: argparse.Namespace) -> int:
    src = resolve_src_root(args.src_dir)
    n = sync_static_haps(src, args.product, args.pattern)
    return 0 if n >= 0 else 1


def _run_single_suite_build(src: Path, product: str, target: str, dry_run: bool) -> int:
    if ":" not in target and not target.startswith("test/"):
        print(
            "单套件请传 --build-target，例如:\n"
            "  test/xts/acts/web/web_life_cycle/component_life_cycle_static:"
            "ActsWebComponentLifeCycleStaticTest",
            file=sys.stderr,
        )
        return 1
    env = dict(os.environ)
    env["XTS_SUITENAME"] = "acts"
    env["XTS_SUITETYPE"] = "hap_static"
    cmd = [
        "./build.sh",
        f"--product-name={product}",
        "--gn-args=build_xts=true",
        "--gn-args=is_standard_system=true",
        f"--build-target={target}",
    ]
    print(f"cwd={src}")
    print(" ".join(cmd))
    if dry_run:
        return 0
    return subprocess.run(cmd, cwd=src, env=env).returncode


def _run_subsystem_build(src: Path, product: str, system_size: str, subsystem: str, dry_run: bool) -> int:
    build_py = acts_dir(src) / "build.py"
    if not build_py.is_file():
        print(f"未找到 {build_py}", file=sys.stderr)
        return 1
    cmd = [
        sys.executable,
        str(build_py),
        f"product_name={product}",
        f"system_size={system_size}",
        "xts_suitetype=hap_static",
        f"target_subsystem={subsystem}",
    ]
    print(f"cwd={acts_dir(src)}")
    print(" ".join(cmd))
    if dry_run:
        return 0
    return subprocess.run(cmd, cwd=acts_dir(src)).returncode


def cmd_build_static(args: argparse.Namespace) -> int:
    """编 hap_static：单套件走 build.sh，否则走 acts/build.py。"""
    src = resolve_src_root(args.src_dir)
    product = args.product
    if args.suite:
        target = args.build_target or args.suite
        rc = _run_single_suite_build(src, product, target, args.dry_run)
    else:
        rc = _run_subsystem_build(
            src, product, args.system_size, args.subsystem, args.dry_run
        )
    if rc != 0:
        return rc
    if not args.no_sync:
        sync_static_haps(src, product)
    return 0


def _build_compare_run_cmd(args: argparse.Namespace, src: Path) -> list[str]:
    cmd = [
        sys.executable,
        str(SCRIPT_DIR / "compare_dyn_static.py"),
        "run",
        "--src-dir",
        str(src),
        "--product",
        args.product,
        "--sn",
        args.sn,
    ]
    if args.web_dir:
        cmd.extend(["--web-dir", args.web_dir])
    elif args.subsystem != "web":
        cmd.extend(["--web-dir", str(web_dir(src, args.subsystem))])
    if args.suite:
        cmd.extend(["--suite", args.suite])
    if args.limit:
        cmd.extend(["--limit", str(args.limit)])
    if args.paired_only:
        cmd.append("--paired-only")
    return cmd


def cmd_pipeline(args: argparse.Namespace) -> int:
    src = resolve_src_root(args.src_dir)
    if args.patch_sleep:
        rc = cmd_patch_sleep(
            argparse.Namespace(
                src_dir=str(src),
                web_dir=args.web_dir,
                subsystem=args.subsystem,
                ms=args.ms,
            )
        )
        if rc != 0:
            return rc
    if not args.skip_build:
        rc = cmd_build_static(
            argparse.Namespace(
                src_dir=str(src),
                product=args.product,
                system_size=args.system_size,
                subsystem=args.subsystem,
                suite=args.suite_build,
                build_target=args.build_target,
                dry_run=False,
                no_sync=False,
            )
        )
        if rc != 0:
            return rc
    if args.skip_run:
        print("skip compare run (--skip-run)")
        return 0
    if not args.sn:
        print("pipeline 跑对比需要 --sn <device>", file=sys.stderr)
        return 1
    cmd = _build_compare_run_cmd(args, src)
    print(" ".join(cmd))
    return subprocess.run(cmd).returncode


def cmd_help(_: argparse.Namespace) -> int:
    print(__doc__)
    print(
        """
推荐用法（编静态 + 动静态对比）:

  SKILL=<src>/napi_generator/src/skills/ohtest
  SRC=<OpenHarmony src 根>
  SN=<设备 sn，如 192.168.10.142:8710>

  # 1) 仅统计可对应用例
  python3 $SKILL/compare_dyn_static.py stats --src-dir $SRC

  # 2) 编 web 静态 HAP 并同步 testcases
  python3 $SKILL/dyn_static_workflow.py build-static --src-dir $SRC --subsystem web

  # 3) 设备上跑配对用例对比耗时
  python3 $SKILL/compare_dyn_static.py run --src-dir $SRC --sn $SN --paired-only

  # 或一键（可选先把静态 msSleep 改成 1）
  python3 $SKILL/dyn_static_workflow.py pipeline --src-dir $SRC --sn $SN \\
    --patch-sleep --paired-only
"""
    )
    return 0


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="Dyn/static ACTS build + compare workflow")
    sub = p.add_subparsers(dest="cmd", required=True)

    def add_src(sp: argparse.ArgumentParser) -> None:
        sp.add_argument("--src-dir", help="OpenHarmony src 根")
        sp.add_argument("--product", default=DEFAULT_PRODUCT)
        sp.add_argument(
            "--subsystem",
            default="web",
            help="ACTS 子系统目录名，默认 web（对应 test/xts/acts/web）",
        )
        sp.add_argument("--web-dir", help="覆盖默认的 subsystem 源码目录")

    sp = sub.add_parser("patch-sleep", help="*_static 下 msSleep(N) -> msSleep(ms)")
    add_src(sp)
    sp.add_argument("--ms", type=int, default=1, help="目标毫秒，默认 1")
    sp.set_defaults(func=cmd_patch_sleep)

    bp = sub.add_parser("build-static", help="编译 hap_static 并同步 HAP")
    add_src(bp)
    bp.add_argument("--system-size", default="standard")
    bp.add_argument("--suite", help="兼容参数；单套件请用 --build-target")
    bp.add_argument("--build-target", help="GN target，如 test/xts/acts/web/...:Suite")
    bp.add_argument("--dry-run", action="store_true")
    bp.add_argument("--no-sync", action="store_true", help="编完不拷贝到 testcases")
    bp.set_defaults(func=cmd_build_static)

    sy = sub.add_parser("sync-haps", help="同步 *Static*.hap 到 testcases")
    add_src(sy)
    sy.add_argument("--pattern", default="*Static*.hap")
    sy.set_defaults(func=cmd_sync_haps)

    pl = sub.add_parser("pipeline", help="可选 patch-sleep → build → compare run")
    add_src(pl)
    pl.add_argument("--sn", help="设备序列号")
    pl.add_argument("--system-size", default="standard")
    pl.add_argument("--patch-sleep", action="store_true", help="先把静态 msSleep 改为 --ms")
    pl.add_argument("--ms", type=int, default=1)
    pl.add_argument("--skip-build", action="store_true")
    pl.add_argument("--skip-run", action="store_true")
    pl.add_argument("--suite", help="只对比该 suite（传给 compare run）")
    pl.add_argument("--suite-build", help="单套件编译时的占位，配合 --build-target")
    pl.add_argument("--build-target", help="单套件 GN target")
    pl.add_argument("--limit", type=int, default=0)
    pl.add_argument("--paired-only", action="store_true")
    pl.set_defaults(func=cmd_pipeline)

    hp = sub.add_parser("help", help="说明")
    hp.set_defaults(func=cmd_help)
    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
