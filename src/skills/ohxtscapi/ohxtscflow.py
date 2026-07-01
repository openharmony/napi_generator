#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ohxtscapi 全流程编排：ArkUI CAPI（C++ NAPI + Hypium）XTS 编签与设备验证。

用法：
  python3 ohxtscflow.py env
  python3 ohxtscflow.py build-all <HAP工程完整路径>
  python3 ohxtscflow.py deploy-test <HAP工程完整路径> [-s Suite] [-m entry_test]
  python3 ohxtscflow.py run-capi-pipeline <HAP工程完整路径>
  python3 ohxtscflow.py gen-hypium-report <日志文件>
  python3 ohxtscflow.py analyze-test-log <日志文件>
  python3 ohxtscflow.py hints
  python3 ohxtscflow.py category-routing
"""

from __future__ import annotations

import argparse
import os
import subprocess
import sys
from pathlib import Path

_SKILLS = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(_SKILLS / "ohxtsstatic"))
from hypium_html_report import run_subprocess_and_report, write_report_from_log
from ohxtsflow import analyze_hypium_like_log

_AISKILL = Path(__file__).resolve().parents[3]
if str(_AISKILL) not in sys.path:
    sys.path.insert(0, str(_AISKILL))
try:
    import sdk_paths as _sdk_paths
except ImportError:
    _sdk_paths = None  # type: ignore


def _sdk_get(name: str, default: str = "") -> str:
    if _sdk_paths is not None:
        return _sdk_paths.get(name, default)
    return os.environ.get(name, default)


def _skill_dir() -> Path:
    return Path(__file__).resolve().parent


def _py() -> str:
    return sys.executable


def _run(argv: list[str], cwd: str | None = None) -> int:
    print("+", " ".join(argv))
    return subprocess.run(argv, cwd=cwd).returncode


def _ohhap() -> Path:
    return _skill_dir().parent / "ohhap" / "hapbuild.py"


def _ohhdc() -> Path:
    return _skill_dir().parent / "ohhdc" / "ohhdc.py"


def _detect_device() -> str:
    try:
        r = subprocess.run(
            ["hdc", "list", "targets"],
            capture_output=True,
            text=True,
            timeout=10,
        )
        for ln in (r.stdout or "").splitlines():
            ln = ln.strip()
            if ln:
                return ln
    except (OSError, subprocess.TimeoutExpired):
        pass
    return ""


def _build_ohhdc_cmd(action: str, project: str, ns: argparse.Namespace) -> list[str]:
    cmd = [_py(), str(_ohhdc()), action, project]
    if getattr(ns, "timeout", None) is not None:
        cmd.extend(["--timeout", str(ns.timeout)])
    mod = getattr(ns, "module", None) or "entry_test"
    cmd.extend(["-m", mod])
    if getattr(ns, "suite", None):
        cmd.extend(["-s", ns.suite])
    return cmd


def _run_with_report(action: str, ns: argparse.Namespace) -> int:
    proj = os.path.abspath(ns.project)
    cmd = _build_ohhdc_cmd(action, proj, ns)
    device = getattr(ns, "device", None) or _detect_device()
    suite = getattr(ns, "suite", None) or ""
    batch = getattr(ns, "batch", None) or ""
    rc, _ = run_subprocess_and_report(
        cmd,
        project=proj,
        suite=suite,
        device=device,
        batch_name=batch,
    )
    return rc


def cmd_env(_: argparse.Namespace) -> int:
    ok = True
    if _sdk_paths is not None:
        _sdk_paths.print_env_hint("normal")
    hclt = _sdk_get("HOS_CLT_PATH")
    if not hclt or not os.path.isdir(hclt):
        print(f"❌ HOS_CLT_PATH: {hclt or '(空)'}")
        ok = False
    else:
        print(f"✓ HOS_CLT_PATH={hclt}")
    sdk = os.environ.get("OHOS_SDK_PATH", "")
    if sdk:
        print(f"✓ OHOS_SDK_PATH={sdk}")
    else:
        print("⚠ 建议: source use-ohos-sdk.sh normal")
    gen = _skill_dir() / "arkui-capi-xts-generator-v3" / "SKILL.md"
    mark = "✓" if gen.is_file() else "✗ 需运行 fetch-capi-generator.sh"
    print(f"  生成器 SKILL.md: {mark}")
    return 0 if ok else 1


def cmd_build_all(ns: argparse.Namespace) -> int:
    proj = os.path.abspath(ns.project)
    hap = _ohhap()
    if not hap.is_file():
        print(f"❌ 未找到 {hap}")
        return 1
    profile = getattr(ns, "profile", None) or "release"
    steps = [
        [_py(), str(hap), "build", proj],
        [_py(), str(hap), "build-test", proj],
        [_py(), str(hap), "sign", proj, profile],
    ]
    for step in steps:
        rc = _run(step)
        if rc != 0:
            print(f"❌ 步骤失败: {' '.join(step)}")
            print("提示: 阅读 compile_error_hints.md 并对照 hvigor 报错逐条处理")
            return rc
    print("✓ build + build-test + sign 完成")
    return 0


def cmd_deploy_test(ns: argparse.Namespace) -> int:
    return _run_with_report("deploy-test", ns)


def cmd_run_capi_pipeline(ns: argparse.Namespace) -> int:
    rc = cmd_build_all(ns)
    if rc != 0:
        return rc
    return cmd_deploy_test(ns)


def cmd_gen_hypium_report(ns: argparse.Namespace) -> int:
    path = write_report_from_log(
        ns.log_file,
        project=ns.project or "",
        suite=ns.suite or "",
        device=ns.device or "",
    )
    print(f"REPORT_HTML={path}")
    return 0


def cmd_analyze_test_log(ns: argparse.Namespace) -> int:
    p = Path(ns.log_file).expanduser().resolve()
    if not p.is_file():
        print(f"❌ 文件不存在: {p}")
        return 1
    print(analyze_hypium_like_log(p.read_text(encoding="utf-8", errors="replace")))
    return 0


def cmd_hints(_: argparse.Namespace) -> int:
    p = _skill_dir() / "compile_error_hints.md"
    if not p.is_file():
        return 1
    print(p.read_text(encoding="utf-8"))
    return 0


def cmd_category_routing(_: argparse.Namespace) -> int:
    p = _skill_dir() / "CATEGORY_ROUTING.md"
    if not p.is_file():
        return 1
    print(p.read_text(encoding="utf-8"))
    return 0


def _add_device_parsers(sp: argparse._SubParsersAction) -> None:
    dt = sp.add_parser("deploy-test", help="ohhdc deploy-test（主包+ohosTest）")
    dt.add_argument("project")
    dt.add_argument("--timeout", type=int, default=300000)
    dt.add_argument("-m", "--module", default="entry_test")
    dt.add_argument("-s", "--suite", default=None)
    dt.add_argument("--batch", default=None)
    dt.add_argument("--device", default=None)

    pl = sp.add_parser("run-capi-pipeline", help="build-all → deploy-test → HTML")
    pl.add_argument("project")
    pl.add_argument("--timeout", type=int, default=300000)
    pl.add_argument("-m", "--module", default="entry_test")
    pl.add_argument("-s", "--suite", default=None)
    pl.add_argument("--batch", default=None)
    pl.add_argument("--device", default=None)


def _handlers() -> dict[str, object]:
    return {
        "env": cmd_env,
        "build-all": cmd_build_all,
        "deploy-test": cmd_deploy_test,
        "run-capi-pipeline": cmd_run_capi_pipeline,
        "gen-hypium-report": cmd_gen_hypium_report,
        "analyze-test-log": cmd_analyze_test_log,
        "hints": cmd_hints,
        "category-routing": cmd_category_routing,
    }


def main() -> int:
    ap = argparse.ArgumentParser(description="ohxtscapi CAPI XTS 编排")
    sp = ap.add_subparsers(dest="cmd", required=True)

    sp.add_parser("env")
    b = sp.add_parser("build-all", help="hapbuild build + build-test + sign")
    b.add_argument("project")
    b.add_argument("profile", nargs="?", default="release", choices=["debug", "release"])
    _add_device_parsers(sp)

    ghr = sp.add_parser("gen-hypium-report")
    ghr.add_argument("log_file")
    ghr.add_argument("--project", default="")
    ghr.add_argument("--suite", default="")
    ghr.add_argument("--device", default="")

    atl = sp.add_parser("analyze-test-log")
    atl.add_argument("log_file")

    sp.add_parser("hints")
    sp.add_parser("category-routing")

    ns = ap.parse_args()
    handler = _handlers().get(ns.cmd)
    if handler is None:
        print(f"未知子命令: {ns.cmd}", file=sys.stderr)
        return 1
    return handler(ns)  # type: ignore[operator]


if __name__ == "__main__":
    sys.exit(main())
