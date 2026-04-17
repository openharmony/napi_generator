#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ohxtsstatic 全流程编排入口：串联 ohhap / ohhdc / ohtest / ohproj 惯例命令。

一体化流水线与分层权威见同目录 **SKILL.md**（**技能融合模型**、**§〇 路由表**、**§二**）；测试范式细则见 **arkui-static-xts-generator/**（须从 GitCode 下载放置，见该目录 **README.md**）。

不替代各子技能实现；仅统一路径、参数与阶段顺序，便于 Agent 或人工一键执行。

用法（均在 napi_generator 仓库根下执行时可用相对路径）：
  python3 src/skills/ohxtsstatic/ohxtsflow.py env
  python3 src/skills/ohxtsstatic/ohxtsflow.py build-all <HAP工程绝对路径>
  python3 src/skills/ohxtsstatic/ohxtsflow.py install <signed.hap> [--replace]
  python3 src/skills/ohxtsstatic/ohxtsflow.py deploy-test <HAP工程绝对路径> [--timeout 毫秒]   # 主包+ohosTest 双包 + class 套件
  python3 src/skills/ohxtsstatic/ohxtsflow.py static-device-test <HAP工程绝对路径> [--timeout 毫秒]  # 仅主 signed.hap + unittest TestRunner（静态 XTS）
  python3 src/skills/ohxtsstatic/ohxtsflow.py run-static-pipeline <HAP工程绝对路径>  # build（含自动签名）→ static-device-test
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


def cmd_env(_: argparse.Namespace) -> int:
    ok = True
    for var in ("HOS_CLT_PATH", "OHOS_SDK_PATH"):
        v = os.environ.get(var)
        if not v or not os.path.isdir(v):
            print(f"❌ {var} 未设置或路径不存在")
            ok = False
        else:
            print(f"✓ {var}={v}")
    hclt = os.environ.get("HOS_CLT_PATH", "").strip()
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
    steps = [
        [_py(), str(hapbuild), "build", proj],
        [_py(), str(hapbuild), "build-test", proj],
        [_py(), str(hapbuild), "sign", proj, ns.profile],
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
    proj = os.path.abspath(ns.project)
    skills = _repo_skills()
    ohhdc = skills.parent / "ohhdc" / "ohhdc.py"
    cmd = [_py(), str(ohhdc), "deploy-test", proj]
    if ns.timeout is not None:
        cmd.extend(["--timeout", str(ns.timeout)])
    return run(cmd)


def cmd_static_device_test(ns: argparse.Namespace) -> int:
    """静态 XTS：ohhdc static-deploy-test（卸载→装主包→aa test unittest TestRunner）。"""
    proj = os.path.abspath(ns.project)
    skills = _repo_skills()
    ohhdc = skills.parent / "ohhdc" / "ohhdc.py"
    if not ohhdc.is_file():
        print(f"❌ 未找到 {ohhdc}")
        return 1
    cmd = [_py(), str(ohhdc), "static-deploy-test", proj]
    if ns.timeout is not None:
        cmd.extend(["--timeout", str(ns.timeout)])
    if getattr(ns, "module", None):
        cmd.extend(["-m", ns.module])
    if getattr(ns, "unittest_runner", None):
        cmd.extend(["--unittest-runner", ns.unittest_runner])
    return run(cmd)


def cmd_run_static_pipeline(ns: argparse.Namespace) -> int:
    """构建（hapbuild build，含证书时自动签名）→ static-device-test。"""
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
    return cmd_static_device_test(ns)


def analyze_hypium_like_log(text: str) -> str:
    """
    对 aa test / hilog 保存的文本做轻量摘要，便于人工或 Agent 迭代用例。
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
        hints.append("含 timeout/超时：可考虑增大 aa test -s timeout、或减少单 it 内同步等待；对照 test_rules / Hypium。")
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

    dt = sp.add_parser("deploy-test", help="ohhdc deploy-test（卸装→装主+测→aa test）")
    dt.add_argument("project", help="HAP 工程根目录")
    dt.add_argument("--timeout", type=int, default=None)

    sdt = sp.add_parser(
        "static-device-test",
        help="静态 XTS：仅主包 + aa test unittest TestRunner（见 ohhdc static-deploy-test）",
    )
    sdt.add_argument("project", help="HAP 工程根目录")
    sdt.add_argument("--timeout", type=int, default=15000, help="aa test -s timeout（毫秒），默认 15000")
    sdt.add_argument(
        "-m",
        "--module",
        dest="module",
        default=None,
        help="模块名，默认 entry",
    )
    sdt.add_argument(
        "--unittest-runner",
        dest="unittest_runner",
        default=None,
        help="设备侧 TestRunner 路径，默认 /ets/testrunner/OpenHarmonyTestRunner",
    )

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
    rsp.add_argument("--timeout", type=int, default=15000, help="aa test 超时毫秒，默认 15000")
    rsp.add_argument("-m", "--module", dest="module", default=None, help="测试模块名，默认 entry")
    rsp.add_argument("--unittest-runner", dest="unittest_runner", default=None, help="TestRunner 设备路径")

    atl = sp.add_parser("analyze-test-log", help="分析保存的 Hypium/aa test 日志并输出摘要与启发式建议")
    atl.add_argument("log_file", help="本机日志文件路径")

    lg = sp.add_parser("logs", help="设备 hilog 过滤或 faultlog")
    lg.add_argument("--faultlog", action="store_true")
    lg.add_argument("--pattern", default=None, help="hilog 过滤正则")

    sp.add_parser("hints", help="打印 compile_error_hints.md")
    sp.add_parser("workflow-print", help="从 SKILL.md 摘录阶段流水线")

    ns = ap.parse_args()
    handlers = {
        "env": cmd_env,
        "build-all": cmd_build_all,
        "install": cmd_install,
        "deploy-test": cmd_deploy_test,
        "static-device-test": cmd_static_device_test,
        "run-static-pipeline": cmd_run_static_pipeline,
        "analyze-test-log": cmd_analyze_test_log,
        "logs": cmd_logs,
        "hints": cmd_hints,
        "workflow-print": cmd_workflow_print,
    }
    return handlers[ns.cmd](ns)


if __name__ == "__main__":
    sys.exit(main())
