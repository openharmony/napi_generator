#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""编译工具：单工程双 HAP 编译（compileSdk 临时 patch/恢复、module 名动态提取）。

固化经验（SKILL 三/3.1/E 表）：
- compatibleSdkVersion/compatibleSdkVersion 字符串必须临时转数字（SDK26 下报 must be a number）
- module 名不一定是 entry（可能 second/default/com.example.xxx），从 build-profile.json5 动态提取
- 双 HAP：main assembleHap + ohosTest（-p module=<m>@ohosTest -p isOhosTest=true -p buildMode=test）
- 环境：OHOS_BASE_SDK_HOME / HOS_CLT_PATH / OHOS_SDK_PATH 父进程导出后再调 xargs
"""
from __future__ import annotations

import json
import os
import re
import subprocess
import tempfile
from pathlib import Path
from typing import Optional

from .paths import HVIGORW_JS, NODE, REPO, build_env

ENV = build_env()


# ---------- module 名提取 ----------
def extract_module_name(build_profile: Path) -> str:
    """从 build-profile.json5 提取 modules[0].name（兼容无引号键 JSON5 与 com.example.xxx）。"""
    try:
        text = build_profile.read_text(errors="replace")
    except OSError:
        return "entry"
    m = re.search(r"""["']?modules["']?\s*:\s*\[\s*\{[^}]*?["']name["']\s*:\s*["']([^"']+)["']""",
                  text, re.S)
    if m:
        return m.group(1)
    m2 = re.search(r"""["']?modules["']?\s*:\s*\[.*?["']name["']\s*:\s*["']([^"']+)["']""",
                   text, re.S)
    return m2.group(1) if m2 else "entry"


def extract_module_names(build_profile: Path) -> list[str]:
    """提取 build-profile.json5 modules 数组的全部 name（JSON5 兼容，多模块工程）。"""
    try:
        text = build_profile.read_text(errors="replace")
    except OSError:
        return []
    m = re.search(r"""["']?modules["']?\s*:\s*\[""", text)
    if not m:
        return []
    # 深度计数找 modules 数组的闭合 ]（嵌套 targets 等也含 [ ]）
    depth = 0
    end = -1
    for i in range(m.end() - 1, len(text)):
        c = text[i]
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                end = i
                break
    if end < 0:
        return []
    block = text[m.end():end]
    return re.findall(r"""["']?name["']?\s*:\s*["']([^"']+)["']""", block)


# ---------- compileSdk 临时 patch ----------
def patch_sdk_versions(build_profile: Path) -> Optional[Path]:
    """把 compileSdkVersion/compatibleSdkVersion 字符串 → 数字（临时）。

    修改前备份到同目录 .bak_sdk，返回备份路径（恢复用）；无匹配返回 None。
    """
    text = build_profile.read_text(errors="replace")
    new = re.sub(r'"compileSdkVersion"\s*:\s*"[0-9.]+"', '"compileSdkVersion": 26', text)
    new = re.sub(r'"compatibleSdkVersion"\s*:\s*"([0-9]+)(\.[0-9]+)*"',
                 r'"compatibleSdkVersion": \1', new)
    if new == text:
        return None
    bak = build_profile.with_name(build_profile.name + ".bak_sdk")
    bak.write_text(text)
    build_profile.write_text(new)
    return bak


def restore_sdk_versions(bak: Optional[Path]) -> None:
    if bak and bak.exists():
        orig = bak.with_name(bak.name.replace(".bak_sdk", ""))
        orig.write_text(bak.read_text())
        bak.unlink()


# ---------- 单工程编译 ----------
def build_one(proj: Path, timeout_main: int = 400, timeout_test: int = 400,
              log: Optional[Path] = None) -> dict:
    """编译单工程：main HAP + （有 ohosTest 时）test HAP。

    返回 {'ok': bool, 'main_rc': int, 'test_rc': int, 'log': Path,
          'error': 首条 Error Message（失败时）}
    """
    proj = Path(proj)
    log = log or Path(tempfile.gettempdir()) / f"build_{proj.name}.log"
    bp = proj / "build-profile.json5"
    bak = None
    if bp.exists():
        bak = patch_sdk_versions(bp)

    def run(args: list[str], timeout: int) -> int:
        cmd = [str(NODE), str(HVIGORW_JS), "--mode", "module",
               "-p", "product=default", *args, "assembleHap",
               "--analyze=normal", "--parallel", "--incremental", "--no-daemon"]
        try:
            with open(log, "a") as f:
                r = subprocess.run(cmd, cwd=str(proj), env=ENV, timeout=timeout,
                                   stdout=f, stderr=subprocess.STDOUT)
            return r.returncode
        except subprocess.TimeoutExpired:
            return 255

    try:
        log.write_text("")
        rc1 = run([], timeout_main)
        has_test = (proj / "entry/src/ohosTest").is_dir()
        rc2 = 0
        if has_test:
            module = extract_module_name(bp) if bp.exists() else "entry"
            rc2 = run(["-p", f"module={module}@ohosTest", "-p", "isOhosTest=true",
                       "-p", "buildMode=test"], timeout_test)
        # shared 类型模块（library/library2…）产出 .hsp，assembleHap 不覆盖，单独 assembleHsp
        # （2026-08-18 实战：evictModuleFilePages 依赖 library 模块 .hsp 安装）
        rc3 = 0
        if bp.exists():
            main_mod = extract_module_name(bp)
            for mod in extract_module_names(bp):
                if mod == main_mod:
                    continue
                mcfg = proj / mod / "src/main/module.json5"
                if mcfg.is_file() and '"type": "shared"' in mcfg.read_text(errors="replace"):
                    cmd = [str(NODE), str(HVIGORW_JS), "--mode", "module",
                           "-p", "product=default", "-p", f"module={mod}", "assembleHsp",
                           "--analyze=normal", "--parallel", "--incremental", "--no-daemon"]
                    try:
                        with open(log, "a") as f:
                            r = subprocess.run(cmd, cwd=str(proj), env=ENV,
                                               timeout=timeout_main, stdout=f,
                                               stderr=subprocess.STDOUT)
                        rc3 |= r.returncode
                    except subprocess.TimeoutExpired:
                        rc3 = 255
    finally:
        restore_sdk_versions(bak)

    ok = rc1 == 0 and rc2 == 0 and rc3 == 0
    err = ""
    if not ok:
        try:
            text = log.read_text(errors="replace")
        except OSError:
            text = ""
        m = re.search(r"Error Message[:：]\s*([^\n]+)", text)
        if m:
            err = m.group(1).strip()[:200]
        elif "timed out" in text.lower() or rc1 == 255 or rc2 == 255 or rc3 == 255:
            err = "timeout"
        else:
            m2 = re.search(r"ERROR:?\s+[^\n]{10,200}", text)
            err = m2.group(0).strip()[:200] if m2 else f"rc main={rc1} test={rc2} hsp={rc3}"
    return {"ok": ok, "main_rc": rc1, "test_rc": rc2, "hsp_rc": rc3, "log": log, "error": err}


# ---------- 批量编译 ----------
def build_batch(projects: list[Path], jobs: int = 8,
                logdir: Optional[Path] = None) -> dict:
    """并行批量编译（线程池）。返回 {rel: result}。"""
    import concurrent.futures
    logdir = logdir or Path(tempfile.gettempdir()) / "req1_build"
    logdir.mkdir(parents=True, exist_ok=True)
    results: dict[str, dict] = {}

    def work(rel: str) -> tuple[str, dict]:
        p = REPO / rel
        log = logdir / f"{rel.replace('/', '_')}.log"
        return rel, build_one(p, log=log)

    with concurrent.futures.ThreadPoolExecutor(max_workers=jobs) as ex:
        futures = {ex.submit(work, rel): rel for rel in projects}
        for f in concurrent.futures.as_completed(futures):
            rel, res = f.result()
            results[rel] = res
            print(f"{'PASS' if res['ok'] else 'FAIL'} {rel} {res['error']}")
    return results


if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser(description="编译工具")
    sub = ap.add_subparsers(dest="cmd")
    p1 = sub.add_parser("one", help="单工程编译")
    p1.add_argument("proj", help="工程绝对路径或 REPO 相对路径")
    p1.add_argument("--log", default=None)
    p2 = sub.add_parser("batch", help="批量并行编译")
    p2.add_argument("--list", required=True, help="工程相对路径清单文件（每行一个）")
    p2.add_argument("--jobs", type=int, default=8)
    p2.add_argument("--logdir", default=None)
    args = ap.parse_args()

    if args.cmd == "one":
        proj = Path(args.proj)
        if not proj.is_absolute():
            proj = REPO / args.proj
        r = build_one(proj, log=Path(args.log) if args.log else None)
        print("PASS" if r["ok"] else f"FAIL: {r['error']}")
        print(f"main_rc={r['main_rc']} test_rc={r['test_rc']} log={r['log']}")
    elif args.cmd == "batch":
        projs = [ln.strip() for ln in open(args.list) if ln.strip()]
        res = build_batch(projs, jobs=args.jobs,
                          logdir=Path(args.logdir) if args.logdir else None)
        fails = [k for k, v in res.items() if not v["ok"]]
        print(f"\nSUMMARY: {len(res) - len(fails)}/{len(res)} PASS")
        for k in fails:
            print(f"FAIL {k}: {res[k]['error']}")
    else:
        ap.print_help()
