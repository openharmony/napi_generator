#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ohxtsstatic 全流程编排入口：串联 ohhap / ohhdc / ohtest / ohproj 惯例命令。

一体化流水线与分层模型见同目录 **SKILL.md**（**技能融合模型**、**§〇 路由表**、**§二**）；测试范式细则见 **arkui-static-xts-generator/**（须从 GitCode 下载放置，见该目录 **README.md**）。

不替代各子技能实现；仅统一路径、参数与阶段顺序，便于 Agent 或人工一键执行。

用法（均在 napi_generator 仓库根下执行时可用相对路径）：
  python3 src/skills/ohxtsstatic/ohxtsflow.py env
  python3 src/skills/ohxtsstatic/ohxtsflow.py build-all <HAP工程完整路径>
  python3 src/skills/ohxtsstatic/ohxtsflow.py install <signed.hap> [--replace]
  python3 src/skills/ohxtsstatic/ohxtsflow.py deploy-test <HAP工程完整路径> [--timeout 毫秒]
  python3 src/skills/ohxtsstatic/ohxtsflow.py static-device-test <HAP工程完整路径> [--timeout 毫秒]
  python3 src/skills/ohxtsstatic/ohxtsflow.py run-static-pipeline <HAP工程完整路径>
  python3 src/skills/ohxtsstatic/ohxtsflow.py gen-xdevice-report <日志文件>
  python3 src/skills/ohxtsstatic/ohxtsflow.py logs [--faultlog] [--pattern 正则]
  python3 src/skills/ohxtsstatic/ohxtsflow.py analyze-test-log <日志文件>  # 摘要失败原因与优化提示
  python3 src/skills/ohxtsstatic/ohxtsflow.py hints
  python3 src/skills/ohxtsstatic/ohxtsflow.py workflow-print
"""

from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
from pathlib import Path

from hypium_html_report import run_subprocess_and_report, write_report_from_log

_SKILLS_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(_SKILLS_ROOT))
sys.path.insert(0, str(_SKILLS_ROOT / "ohos-gate-compliance" / "scripts"))
from gate_review import run_post_test_gate_pipeline  # noqa: E402

for _cand in (
    Path(__file__).resolve().parents[4],
    Path(__file__).resolve().parents[3],
):
    if (_cand / "sdk_paths.py").is_file():
        sys.path.insert(0, str(_cand))
        break
try:
    import sdk_paths as _sdk_paths
except ImportError:
    _sdk_paths = None  # type: ignore


def _sdk_get(name: str, default: str = "") -> str:
    if _sdk_paths is not None:
        return _sdk_paths.get(name, default)
    return os.environ.get(name, default)


def _repo_skills() -> Path:
    return Path(__file__).resolve().parent


def _napi_root() -> Path:
    return _repo_skills().parent.parent.parent


def _py() -> str:
    return sys.executable


def run(argv: list[str], cwd: str | None = None) -> int:
    print("+", " ".join(argv))
    r = subprocess.run(argv, cwd=cwd)
    return r.returncode


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
    return _repo_skills().parent / "ohhdc" / "ohhdc.py"


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
    # 根源：作废过期 HAP；缺失则强制重编，禁止查找/使用旧包
    if _ensure_installable_haps_or_rebuild(action, ns) != 0:
        return 1
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


def _load_ohhdc_module():
    import importlib.util

    path = _repo_skills().parent / "ohhdc" / "ohhdc.py"
    spec = importlib.util.spec_from_file_location("ohhdc_mod", path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"无法加载 ohhdc: {path}")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def _is_dual_hap_project(proj: str) -> bool:
    return os.path.isdir(os.path.join(proj, "entry", "src", "ohosTest"))


def _rebuild_for_deploy(action: str, ns: argparse.Namespace) -> int:
    """静态一体只 hapbuild build；双 HAP / deploy-test 走 build-all。"""
    proj = os.path.abspath(ns.project)
    dual = _is_dual_hap_project(proj)
    if action == "static-deploy-test" and not dual:
        skills = _repo_skills()
        hapbuild = skills.parent / "ohhap" / "hapbuild.py"
        if not hapbuild.is_file():
            print(f"❌ 未找到 {hapbuild}")
            return 1
        product = getattr(ns, "product", None) or "default"
        mode = getattr(ns, "build_mode", None) or "debug"
        print("→ 自动 hapbuild build+sign 后再测（禁止用旧包）")
        return run([_py(), str(hapbuild), "build", proj, product, mode])
    print("→ 自动 build-all 后再测（禁止用旧包）")
    return cmd_build_all(ns)


def _ensure_installable_haps_or_rebuild(action: str, ns: argparse.Namespace) -> int:
    proj = os.path.abspath(ns.project)
    try:
        oh = _load_ohhdc_module()
    except Exception as exc:  # noqa: BLE001
        print(f"❌ 加载 ohhdc 失败: {exc}")
        return 1
    purged = oh.purge_stale_project_haps(proj)
    if purged:
        print(f"🗑 已作废过期 HAP {len(purged)} 个（禁止用旧包测试）")
    need_test = action == "deploy-test" and _is_dual_hap_project(proj)
    _m, _t, err = oh.resolve_installable_haps(proj, need_test_hap=need_test)
    if not err:
        return 0
    print(f"ℹ {err}")
    return _rebuild_for_deploy(action, ns)


def cmd_env(_: argparse.Namespace) -> int:
    ok = True
    if _sdk_paths is not None:
        _sdk_paths.print_env_hint("static")
    for var in ("HOS_CLT_PATH", "OHOS_SDK_PATH"):
        v = os.environ.get(var) or _sdk_get(var)
        if not v or not os.path.isdir(v):
            print(f"❌ {var} 未设置或路径不存在: {v or '(空)'}")
            ok = False
        else:
            print(f"✓ {var}={v}")
    hclt = (os.environ.get("HOS_CLT_PATH") or _sdk_get("HOS_CLT_PATH")).strip()
    if hclt and os.path.isdir(hclt):
        static_js = os.path.join(hclt, "hvigor-static", "bin", "hvigorw.js")
        default_js = os.path.join(hclt, "hvigor", "bin", "hvigorw.js")
        print(f"  hvigor-static: {'✓ ' + static_js if os.path.isfile(static_js) else '✗ 缺失 ' + static_js}")
        print(f"  hvigor (默认): {'✓ ' + default_js if os.path.isfile(default_js) else '✗ 缺失 ' + default_js}")
    for var in ("OHOS_USE_HVIGOR_STATIC", "OHOS_HVIGORW_JS"):
        v = os.environ.get(var)
        if v:
            print(f"✓ {var}={v}")
    r0 = subprocess.run("command -v hdc", shell=True, capture_output=True, text=True)
    if r0.returncode != 0 or not r0.stdout.strip():
        print("❌ hdc 不在 PATH")
        ok = False
    else:
        rv = subprocess.run(["hdc", "-v"], capture_output=True, text=True, timeout=15)
        print("✓ hdc:", (rv.stdout or rv.stderr or "").strip().split("\n")[0])
    r2 = subprocess.run([_py(), "--version"], capture_output=True, text=True)
    if r2.returncode == 0:
        print("✓", r2.stdout.strip())
    return 0 if ok else 1


def cmd_build_all(ns: argparse.Namespace) -> int:
    proj = os.path.abspath(ns.project)
    skills = _repo_skills()
    hapbuild = skills.parent / "ohhap" / "hapbuild.py"
    if not hapbuild.is_file():
        print(f"❌ 未找到 {hapbuild}")
        return 1
    profile = getattr(ns, "profile", None) or "release"
    steps = [
        [_py(), str(hapbuild), "build", proj],
        [_py(), str(hapbuild), "build-test", proj],
        [_py(), str(hapbuild), "sign", proj, profile],
    ]
    for s in steps:
        c = run(s)
        if c != 0:
            print(f"❌ 步骤失败: {' '.join(s)}")
            print("提示: 阅读 compile_error_hints.md 并对照 hvigor 报错逐条处理")
            return c
    print("✓ build + build-test + sign 完成")
    return 0


def cmd_install(ns: argparse.Namespace) -> int:
    skills = _repo_skills()
    ohhdc = skills.parent / "ohhdc" / "ohhdc.py"
    hap = os.path.abspath(ns.hap)
    action = "replace-install" if ns.replace else "install"
    return run([_py(), str(ohhdc), action, hap])


def cmd_deploy_test(ns: argparse.Namespace) -> int:
    return _run_device_with_report("deploy-test", ns)


def cmd_static_device_test(ns: argparse.Namespace) -> int:
    """静态 XTS：ohhdc static-deploy-test（卸载→装主包→设备 unittest）。"""
    return _run_device_with_report("static-deploy-test", ns)


def cmd_run_static_pipeline(ns: argparse.Namespace) -> int:
    """构建（hapbuild build，含证书时自动签名）→ static-device-test → gate → commit。"""
    proj = os.path.abspath(ns.project)
    skills = _repo_skills()
    hapbuild = skills.parent / "ohhap" / "hapbuild.py"
    if not hapbuild.is_file():
        print(f"❌ 未找到 {hapbuild}")
        return 1
    c0 = run([_py(), str(hapbuild), "build", proj, ns.product, ns.build_mode])
    if c0 != 0:
        print("❌ 构建失败，已中止设备侧测试")
        return c0
    rc = cmd_static_device_test(ns)
    return _run_gate_after_test(ns, rc)


def _run_gate_after_test(ns: argparse.Namespace, test_rc: int) -> int:
    if test_rc != 0:
        return test_rc
    if getattr(ns, "skip_gate", False) and getattr(ns, "skip_commit", False):
        return 0
    return run_post_test_gate_pipeline(
        os.path.abspath(ns.project),
        suite=getattr(ns, "suite", None) or "",
        scope=getattr(ns, "commit_scope", None) or "arkui-static",
        skip_gate=getattr(ns, "skip_gate", False),
        skip_commit=getattr(ns, "skip_commit", False),
        commit_title=getattr(ns, "commit_title", "") or "",
        commit_body=getattr(ns, "commit_body", "") or "",
    )


def cmd_gate_review_commit(ns: argparse.Namespace) -> int:
    return run_post_test_gate_pipeline(
        os.path.abspath(ns.project),
        suite=getattr(ns, "suite", None) or "",
        scope=getattr(ns, "commit_scope", None) or "arkui-static",
        skip_gate=getattr(ns, "skip_gate", False),
        skip_commit=getattr(ns, "skip_commit", False),
        commit_title=getattr(ns, "commit_title", "") or "",
        commit_body=getattr(ns, "commit_body", "") or "",
        require_tests_passed=not getattr(ns, "skip_test_check", False),
    )


def cmd_gen_xdevice_report(ns: argparse.Namespace) -> int:
    path = write_report_from_log(
        ns.log_file,
        project=ns.project or "",
        suite=ns.suite or "",
        device=ns.device or "",
        xts_module=getattr(ns, "xts_module", "") or "",
    )
    print(f"REPORT_HTML={path}")
    return 0


cmd_gen_hypium_report = cmd_gen_xdevice_report


def analyze_hypium_like_log(text: str) -> str:
    """
    对设备 unittest 日志 / hilog 保存的文本做轻量摘要，便于人工或 Agent 迭代用例。
    非完整解析器；以关键词与行级模式为主。
    """
    lines = text.splitlines()
    out: list[str] = []
    joined = text[:80000]

    fail_lines = [ln for ln in lines if re.search(r"\bFAIL\b|失败|AssertionError|expect\s*\(|Error:", ln, re.I)]
    pass_hint = re.findall(r"(?:passed|成功|PASS)[^\n]{0,120}", joined, re.I)
    nums = re.findall(r"\b(\d+)\s*(?:tests?|passed|failed|failures?)\b", joined, re.I)

    out.append("=== 日志摘要（ohxtsstatic analyze-test-log）===\n")
    if nums:
        out.append(f"数字线索: {', '.join(nums[:20])}\n")
    if pass_hint:
        out.append("可能的成功提示（节选）:\n  " + "\n  ".join(pass_hint[:5]) + "\n")
    if fail_lines:
        out.append(f"失败相关行（共 {len(fail_lines)} 行，最多展示 25 行）:\n")
        for ln in fail_lines[:25]:
            out.append(f"  {ln.strip()[:500]}\n")
    else:
        out.append("未匹配到典型失败关键词（仍请通读原日志）。\n")

    hints: list[str] = []
    low = joined.lower()
    if "timeout" in low or "超时" in joined:
        hints.append(
            "含 timeout/超时：可增大 ohhdc --timeout、或减少单 it 内同步等待；对照 test_rules / Hypium。"
        )
    if "findcomponent" in low or "Component is not found" in joined:
        hints.append("组件未找到：核对 id、页面是否已导航、afterEach 是否清状态导致树变化。")
    if "assert" in low and "fail" in low:
        hints.append("断言失败：对照 §〇 categories 检查点，确认可观测出口（AppStorage/Inspector）与时机。")
    if "permission" in low or "权限" in joined:
        hints.append("权限相关：检查 module.json5 权限声明与设备侧授权。")
    if hints:
        out.append("优化方向（启发式）:\n")
        for h in hints:
            out.append(f"  - {h}\n")
    out.append("\n建议：结合 `ohxtsflow hints` 与 `compile_error_hints.md`，并抓 `[ARKUI_NEW]` hilog 对照。\n")
    return "".join(out)


def cmd_analyze_test_log(ns: argparse.Namespace) -> int:
    path = Path(ns.log_file).expanduser().resolve()
    if not path.is_file():
        print(f"❌ 文件不存在: {path}")
        return 1
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError as e:
        print(f"❌ 读取失败: {e}")
        return 1
    print(analyze_hypium_like_log(text))
    return 0


def cmd_logs(ns: argparse.Namespace) -> int:
    skills = _repo_skills()
    ohhdc = skills.parent / "ohhdc" / "ohhdc.py"
    if ns.faultlog:
        return run([_py(), str(ohhdc), "faultlog"])
    pat = ns.pattern or "[ARKUI_NEW]"
    return run([_py(), str(ohhdc), "hilog", "--grep", pat])


def cmd_hints(_: argparse.Namespace) -> int:
    p = _repo_skills() / "compile_error_hints.md"
    if p.is_file():
        print(p.read_text(encoding="utf-8"))
    else:
        print("未找到 compile_error_hints.md")
        return 1
    return 0


def cmd_workflow_print(_: argparse.Namespace) -> int:
    md = _repo_skills() / "SKILL.md"
    if not md.is_file():
        return 1
    text = md.read_text(encoding="utf-8")
    start = text.find("## 六、标准阶段流水线")
    if start < 0:
        start = text.find("## 标准阶段流水线")
    end = text.find("## 八、与子技能委托关系", start + 1)
    if end < 0:
        end = text.find("## 与子技能的委托关系", start + 1)
    if start >= 0 and end > start:
        print(text[start:end].strip())
    else:
        print("请直接阅读 SKILL.md 全文")
    return 0


def _add_gate_args(p: argparse.ArgumentParser) -> None:
    p.add_argument("--skip-gate", action="store_true", help="跳过门禁 review")
    p.add_argument("--skip-commit", action="store_true", help="跳过自动 commit")
    p.add_argument("--commit-scope", default="arkui-static")
    p.add_argument("--commit-title", default="")
    p.add_argument("--commit-body", default="")


def _add_gate_review_parser(sp: argparse._SubParsersAction, default_scope: str) -> None:
    gr = sp.add_parser("gate-review-commit", help="测试通过后的门禁 review + commit")
    gr.add_argument("project")
    gr.add_argument("-s", "--suite", default=None)
    gr.add_argument("--skip-gate", action="store_true")
    gr.add_argument("--skip-commit", action="store_true")
    gr.add_argument("--skip-test-check", action="store_true")
    gr.add_argument("--commit-scope", default=default_scope)
    gr.add_argument("--commit-title", default="")
    gr.add_argument("--commit-body", default="")


def _add_device_test_parsers(sp: argparse._SubParsersAction) -> None:
    """注册设备跑测相关子命令。"""
    dt = sp.add_parser("deploy-test", help="ohhdc deploy-test（卸装→装主+测→unittest）")
    dt.add_argument("project", help="HAP 工程根目录")
    dt.add_argument("--timeout", type=int, default=None)
    dt.add_argument("-s", "--suite", dest="suite", default=None, help="Hypium 套件名（-s class）")
    dt.add_argument("--batch", default=None, help="写入批次 batch_index.html")
    dt.add_argument("--device", default=None, help="设备 SN（仅写入报告）")

    sdt = sp.add_parser(
        "static-device-test",
        help="静态 XTS：仅主包 + unittest TestRunner（见 ohhdc static-deploy-test）",
    )
    sdt.add_argument("project", help="HAP 工程根目录")
    sdt.add_argument("--timeout", type=int, default=15000, help="设备超时（毫秒），默认 15000")
    sdt.add_argument("-m", "--module", dest="module", default=None, help="模块名，默认 entry")
    sdt.add_argument(
        "--unittest-runner",
        dest="unittest_runner",
        default=None,
        help="设备侧 TestRunner 路径，默认 /ets/testrunner/OpenHarmonyTestRunner",
    )
    sdt.add_argument("-s", "--suite", dest="suite", default=None, help="Hypium 套件名")
    sdt.add_argument("--batch", default=None, help="写入批次 batch_index.html")
    sdt.add_argument("--device", default=None, help="设备 SN（仅写入报告）")

    rsp = sp.add_parser(
        "run-static-pipeline",
        help="hapbuild build（含自动签名）→ static-device-test，一键设备验证",
    )
    rsp.add_argument("project", help="HAP 工程根目录")
    rsp.add_argument("--product", default="default", help="hvigor product，默认 default")
    rsp.add_argument(
        "--build-mode",
        default="debug",
        choices=("debug", "release"),
        help="hvigor 构建模式，默认 debug",
    )
    rsp.add_argument("--timeout", type=int, default=15000, help="设备超时毫秒，默认 15000")
    rsp.add_argument("-m", "--module", dest="module", default=None, help="测试模块名，默认 entry")
    rsp.add_argument("--unittest-runner", dest="unittest_runner", default=None, help="TestRunner 设备路径")
    rsp.add_argument("-s", "--suite", dest="suite", default=None, help="Hypium 套件名")
    rsp.add_argument("--batch", default=None, help="写入批次 batch_index.html")
    rsp.add_argument("--device", default=None, help="设备 SN（仅写入报告）")
    _add_gate_args(rsp)
    _add_gate_review_parser(sp, "arkui-static")


def _command_handlers() -> dict[str, object]:
    return {
        "env": cmd_env,
        "build-all": cmd_build_all,
        "install": cmd_install,
        "deploy-test": cmd_deploy_test,
        "static-device-test": cmd_static_device_test,
        "run-static-pipeline": cmd_run_static_pipeline,
        "gate-review-commit": cmd_gate_review_commit,
        "gen-xdevice-report": cmd_gen_xdevice_report,
        "gen-hypium-report": cmd_gen_hypium_report,
        "analyze-test-log": cmd_analyze_test_log,
        "logs": cmd_logs,
        "hints": cmd_hints,
        "workflow-print": cmd_workflow_print,
    }


def main() -> int:
    ap = argparse.ArgumentParser(description="ohxtsstatic 全流程编排")
    sp = ap.add_subparsers(dest="cmd", required=True)

    sp.add_parser("env", help="检查 HOS_CLT_PATH / OHOS_SDK_PATH / hdc / python")

    b = sp.add_parser("build-all", help="hapbuild build + build-test + sign")
    b.add_argument("project", help="HAP 工程根目录（含 build-profile.json5）")
    b.add_argument("--profile", default="release", choices=("release", "debug"))

    ins = sp.add_parser("install", help="ohhdc install / replace-install 单个 HAP")
    ins.add_argument("hap", help="已签名 .hap 路径")
    ins.add_argument("--replace", action="store_true", help="使用 replace-install")

    _add_device_test_parsers(sp)

    for cmd_name, help_text in (
        ("gen-xdevice-report", "从 unittest 日志生成 xDevice HTML 报告"),
        ("gen-hypium-report", "（兼容旧名，同 gen-xdevice-report）"),
    ):
        ghr = sp.add_parser(cmd_name, help=help_text)
        ghr.add_argument("log_file", help="日志文件")
        ghr.add_argument("--project", default="")
        ghr.add_argument("--suite", default="")
        ghr.add_argument("--device", default="")
        ghr.add_argument("--xts-module", default="")

    atl = sp.add_parser("analyze-test-log", help="分析 Hypium/unittest 日志并输出摘要")
    atl.add_argument("log_file", help="本机日志文件路径")

    lg = sp.add_parser("logs", help="设备 hilog 过滤或 faultlog")
    lg.add_argument("--faultlog", action="store_true")
    lg.add_argument("--pattern", default=None, help="hilog 过滤正则")

    sp.add_parser("hints", help="打印 compile_error_hints.md")
    sp.add_parser("workflow-print", help="从 SKILL.md 摘录阶段流水线")

    ns = ap.parse_args()
    handler = _command_handlers().get(ns.cmd)
    if handler is None:
        print(f"未知子命令: {ns.cmd}", file=sys.stderr)
        return 1
    return handler(ns)  # type: ignore[operator]


if __name__ == "__main__":
    sys.exit(main())
