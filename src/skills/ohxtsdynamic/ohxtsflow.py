#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ohxtsdynamic 全流程编排：动态 ArkUI（@ComponentV2）XTS 编签与设备验证。

与 ohxtsstatic 差异：
  - SDK 使用 normal（Dyn）包：source /root/aiSkill/use-ohos-sdk.sh normal
  - 默认 hvigor（非 hvigor-static）
  - 测试范式：arkui-dynamic-xts-generator

用法：
  python3 ohxtsflow.py env
  python3 ohxtsflow.py build-all <HAP工程完整路径>
  python3 ohxtsflow.py static-device-test <HAP工程完整路径> [--timeout 毫秒]
  python3 ohxtsflow.py run-dynamic-pipeline <HAP工程完整路径>  # build-all → deploy-test → HTML
  python3 ohxtsflow.py deploy-test <HAP工程完整路径> [-s Suite] [-m entry_test]
  python3 ohxtsflow.py gen-hypium-report <日志文件>
  python3 ohxtsflow.py analyze-test-log <日志文件>
  python3 ohxtsflow.py hints
"""

from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
from pathlib import Path

_SKILLS_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(_SKILLS_ROOT / "ohxtsstatic"))
from hypium_html_report import run_subprocess_and_report, write_report_from_log

_AISKILL_ROOT = Path(__file__).resolve().parents[3]
if str(_AISKILL_ROOT) not in sys.path:
    sys.path.insert(0, str(_AISKILL_ROOT))
try:
    import sdk_paths as _sdk_paths
except ImportError:
    _sdk_paths = None  # type: ignore


def _sdk_get(name: str, default: str = "") -> str:
    if _sdk_paths is not None:
        return _sdk_paths.get(name, default)
    return os.environ.get(name, default)


def _resolve_sdk_linux() -> str:
    if _sdk_paths is not None:
        mode = "normal"
        if os.environ.get("OHOS_USE_HVIGOR_STATIC"):
            mode = "static"
        return _sdk_paths.resolve_sdk_linux(mode)
    sdk_root = os.environ.get("OHOS_SDK_PATH", "").rstrip("/")
    linux = os.path.join(sdk_root, "linux") if sdk_root else ""
    return linux if linux and os.path.isdir(linux) else ""


USE_OHOS_SDK_SH = _sdk_get("USE_OHOS_SDK_SH", "/root/aiSkill/use-ohos-sdk.sh")


def _skills_dir() -> Path:
    return Path(__file__).resolve().parent


def _napi_skills() -> Path:
    return _skills_dir().parent


def _py() -> str:
    return sys.executable


def run(argv: list[str], cwd: str | None = None) -> int:
    print("+", " ".join(argv))
    return subprocess.run(argv, cwd=cwd).returncode


def _detect_device_sn() -> str:
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


def _ohhdc_path() -> Path:
    return _napi_skills() / "ohhdc" / "ohhdc.py"


def _build_ohhdc_cmd(action: str, project: str, ns: argparse.Namespace) -> list[str]:
    cmd = [_py(), str(_ohhdc_path()), action, project]
    if getattr(ns, "timeout", None) is not None:
        cmd.extend(["--timeout", str(ns.timeout)])
    if getattr(ns, "module", None):
        cmd.extend(["-m", ns.module])
    if getattr(ns, "unittest_runner", None):
        cmd.extend(["--unittest-runner", ns.unittest_runner])
    if getattr(ns, "suite", None):
        cmd.extend(["-s", ns.suite])
    return cmd


def _run_device_with_report(action: str, ns: argparse.Namespace) -> int:
    proj = os.path.abspath(ns.project)
    cmd = _build_ohhdc_cmd(action, proj, ns)
    device = getattr(ns, "device", None) or _detect_device_sn()
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
        print(f"❌ HOS_CLT_PATH 未设置或不存在: {hclt or '(空)'}")
        ok = False
    else:
        print(f"✓ HOS_CLT_PATH={hclt}")

    sdk_root = os.environ.get("OHOS_SDK_PATH", "")
    if not sdk_root:
        print(f"⚠ OHOS_SDK_PATH 未设置，建议: source {USE_OHOS_SDK_SH} normal")
    else:
        print(f"✓ OHOS_SDK_PATH={sdk_root}")

    sdk_linux = _resolve_sdk_linux()
    if sdk_linux and os.path.isdir(sdk_linux):
        print(f"✓ SDK linux: {sdk_linux}")
        for sub in ("ets", "toolchains", "native"):
            p = os.path.join(sdk_linux, sub)
            mark = "✓" if os.path.isdir(p) else "✗"
            print(f"  {mark} {sub}/")
            if not os.path.isdir(p):
                ok = False
    else:
        print(f"❌ SDK linux 目录不存在: {sdk_linux}")
        ok = False

    if os.environ.get("OHOS_USE_HVIGOR_STATIC") == "1":
        print("⚠ OHOS_USE_HVIGOR_STATIC=1（动态工程应取消该变量）")
    hvigor_js = os.path.join(hclt, "hvigor", "bin", "hvigorw.js")
    print(f"  hvigor (默认): {'✓ ' + hvigor_js if os.path.isfile(hvigor_js) else '✗ 缺失'}")

    r0 = subprocess.run("command -v hdc", shell=True, capture_output=True, text=True)
    if r0.returncode != 0:
        print("❌ hdc 不在 PATH")
        ok = False
    else:
        rv = subprocess.run(["hdc", "-v"], capture_output=True, text=True, timeout=15)
        print("✓ hdc:", (rv.stdout or rv.stderr or "").strip().split("\n")[0])

    docs_chip = "/root/aiSkill/docs/zh-cn/application-dev/reference/apis-arkui/arkui-ts"
    if os.path.isdir(docs_chip):
        print(f"✓ docs: {docs_chip}")
    return 0 if ok else 1


def cmd_build_all(ns: argparse.Namespace) -> int:
    proj = os.path.abspath(ns.project)
    hapbuild = _napi_skills() / "ohhap" / "hapbuild.py"
    if not hapbuild.is_file():
        print(f"❌ 未找到 {hapbuild}")
        return 1
    env = os.environ.copy()
    env.pop("OHOS_USE_HVIGOR_STATIC", None)
    for step in (
        [_py(), str(hapbuild), "build", proj],
        [_py(), str(hapbuild), "build-test", proj],
        [_py(), str(hapbuild), "sign", proj, ns.profile],
    ):
        print("+", " ".join(step))
        if subprocess.run(step, env=env).returncode != 0:
            print("❌ 构建失败，见 compile_error_hints.md")
            return 1
    print("✓ build + build-test + sign 完成")
    return 0


def _ohhdc() -> Path:
    return _napi_skills() / "ohhdc" / "ohhdc.py"


def cmd_deploy_test(ns: argparse.Namespace) -> int:
    """动态双 HAP：卸载 → 装主+测 → unittest 设备命令 -s class。"""
    return _run_device_with_report("deploy-test", ns)


def cmd_static_device_test(ns: argparse.Namespace) -> int:
    proj = os.path.abspath(ns.project)
    ohhdc = _ohhdc()
    if not ohhdc.is_file():
        print(f"❌ 未找到 {ohhdc}")
        return 1
    return _run_device_with_report("static-deploy-test", ns)


def cmd_run_dynamic_pipeline(ns: argparse.Namespace) -> int:
    """build-all → deploy-test（动态双 HAP 标准路径）。"""
    if cmd_build_all(ns) != 0:
        return 1
    return cmd_deploy_test(ns)


def analyze_hypium_like_log(text: str) -> str:
    lines = text.splitlines()
    out = ["=== 日志摘要（ohxtsdynamic）===\n"]
    fail_lines = [
        ln for ln in lines
        if re.search(r"\bFAIL\b|失败|AssertionError|expect\s*\(", ln, re.I)
    ]
    if fail_lines:
        out.append(f"失败相关行（最多 25 行，共 {len(fail_lines)}）:\n")
        for ln in fail_lines[:25]:
            out.append(f"  {ln.strip()[:500]}\n")
    else:
        out.append("未匹配典型失败关键词。\n")
    return "".join(out)


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
    path = Path(ns.log_file).expanduser().resolve()
    if not path.is_file():
        print(f"❌ 文件不存在: {path}")
        return 1
    print(analyze_hypium_like_log(path.read_text(encoding="utf-8", errors="replace")))
    return 0


def cmd_hints(_: argparse.Namespace) -> int:
    p = _skills_dir() / "compile_error_hints.md"
    print(p.read_text(encoding="utf-8") if p.is_file() else "未找到 compile_error_hints.md")
    return 0 if p.is_file() else 1


def _command_handlers() -> dict[str, object]:
    return {
        "env": cmd_env,
        "build-all": cmd_build_all,
        "deploy-test": cmd_deploy_test,
        "static-device-test": cmd_static_device_test,
        "run-dynamic-pipeline": cmd_run_dynamic_pipeline,
        "gen-hypium-report": cmd_gen_hypium_report,
        "analyze-test-log": cmd_analyze_test_log,
        "hints": cmd_hints,
    }


def _add_dynamic_parsers(sp: argparse._SubParsersAction) -> None:
    """注册动态 XTS 子命令参数。"""
    b = sp.add_parser("build-all")
    b.add_argument("project")
    b.add_argument("--profile", default="release", choices=("release", "debug"))

    dt = sp.add_parser("deploy-test", help="动态双 HAP deploy-test + HTML 报告")
    dt.add_argument("project")
    dt.add_argument("--timeout", type=int, default=15000)
    dt.add_argument("-m", "--module", dest="module", default="entry_test")
    dt.add_argument("-s", "--suite", dest="suite", default=None)
    dt.add_argument("--batch", default=None)
    dt.add_argument("--device", default=None)

    sdt = sp.add_parser("static-device-test")
    sdt.add_argument("project")
    sdt.add_argument("--timeout", type=int, default=15000)
    sdt.add_argument("-m", "--module", dest="module", default=None)
    sdt.add_argument("--unittest-runner", dest="unittest_runner", default=None)
    sdt.add_argument("-s", "--suite", dest="suite", default=None)
    sdt.add_argument("--batch", default=None)
    sdt.add_argument("--device", default=None)

    rdp = sp.add_parser("run-dynamic-pipeline")
    rdp.add_argument("project")
    rdp.add_argument("--product", default="default")
    rdp.add_argument("--build-mode", default="debug", choices=("debug", "release"))
    rdp.add_argument("--profile", default="release", choices=("release", "debug"))
    rdp.add_argument("--timeout", type=int, default=15000)
    rdp.add_argument("-m", "--module", dest="module", default="entry_test")
    rdp.add_argument("--unittest-runner", dest="unittest_runner", default=None)
    rdp.add_argument("-s", "--suite", dest="suite", default=None)
    rdp.add_argument("--batch", default=None)
    rdp.add_argument("--device", default=None)

    ghr = sp.add_parser("gen-hypium-report")
    ghr.add_argument("log_file")
    ghr.add_argument("--project", default="")
    ghr.add_argument("--suite", default="")
    ghr.add_argument("--device", default="")

    atl = sp.add_parser("analyze-test-log")
    atl.add_argument("log_file")


def main() -> int:
    ap = argparse.ArgumentParser(description="ohxtsdynamic 动态 XTS 编排")
    sp = ap.add_subparsers(dest="cmd", required=True)

    sp.add_parser("env")
    _add_dynamic_parsers(sp)
    sp.add_parser("hints")

    ns = ap.parse_args()
    handler = _command_handlers().get(ns.cmd)
    if handler is None:
        print(f"未知子命令: {ns.cmd}", file=sys.stderr)
        return 1
    return handler(ns)  # type: ignore[operator]


if __name__ == "__main__":
    sys.exit(main())
