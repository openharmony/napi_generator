#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""工程元信息：bundleName/测试模块名/主模块名、套件名提取、依赖辅助 HAP 解析。

迁移自 dongwei/scripts 的 hap_meta.py / extract_suites.py / resolve_deps.py。
"""
from __future__ import annotations

import json
import os
import re
import sys
import zipfile
from pathlib import Path
from typing import Optional

# CLI 直跑（python3 common/proj_utils.py）与包导入（from common.proj_utils import ...）都兼容
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
try:
    from .paths import REPO  # noqa: E402
except ImportError:
    from common.paths import REPO  # noqa: E402


# ---------- HAP 元信息（hap_meta.py 迁移） ----------
def hap_meta(proj: Path) -> dict:
    """解析 HAP 工程元信息: bundle / tmod(测试模块名) / pmain(主模块名) / pkg。"""
    proj = Path(proj)
    out: dict = {"bundle": "", "tmod": "", "pmain": "", "pkg": ""}
    try:
        c = (proj / "AppScope" / "app.json5").read_text(errors="replace")
        m = re.search(r"['\"]?bundleName['\"]?\s*:\s*\"([^\"]+)\"", c)
        out["bundle"] = m.group(1) if m else ""
    except OSError:
        pass
    test_hap = next((h for h in proj.rglob("*/build/default/outputs/ohosTest/*-signed.hap")), None)
    if test_hap and test_hap.exists():
        try:
            with zipfile.ZipFile(test_hap) as z:
                d = json.loads(z.read("module.json"))["module"]
            out["tmod"] = d.get("name", "entry")
            out["pkg"] = d.get("packageName", "entry")
        except Exception:
            pass
    main_hap = next((h for h in proj.rglob("*/build/default/outputs/default/*-signed.hap")
                     if "ohosTest" not in h.parts), None)
    if main_hap and main_hap.exists():
        try:
            with zipfile.ZipFile(main_hap) as z:
                out["pmain"] = json.loads(z.read("module.json"))["module"].get("name", "entry")
        except Exception:
            pass
    return out


# ---------- 套件名提取（extract_suites.py 迁移） ----------
def extract_suites(list_test: Path) -> list[str]:
    """从 List.test.ets 提取 describe 套件名列表（含 import 映射解析）。"""
    list_test = Path(list_test)
    test_dir = list_test.parent
    content = list_test.read_text(errors="replace")
    import_map = {}
    for m in re.finditer(r"import\s+(\w+)\s+from\s+['\"]([^'\"]+)['\"]", content):
        name, path = m.group(1), m.group(2)
        if not path.endswith(".ets"):
            path += ".ets"
        import_map[name] = test_dir / path
    body = re.search(r"export default function\s+\w+\(\)\s*\{(.*)\}\s*$", content, re.S)
    if not body:
        return []
    calls = re.findall(r"(\w+)\(\)\s*;?", body.group(1))
    suites = []
    for c in calls:
        f = import_map.get(c)
        if not f or not f.is_file():
            continue
        dm = re.search(r"describe\(\s*['\"]([^'\"]+)['\"]", f.read_text(errors="replace"))
        if dm:
            suites.append(dm.group(1))
    return suites


def fallback_suites(test_dir: Path) -> list[str]:
    """套件解析失败时的兜底：grep describe('xxx') 去重。"""
    suites = []
    for f in sorted(Path(test_dir).glob("*.ets")):
        for m in re.finditer(r"describe\(\s*['\"]([^'\"]+)['\"]",
                             f.read_text(errors="replace")):
            suites.append(m.group(1))
    return sorted(set(suites))


# ---------- 依赖辅助 HAP 解析（resolve_deps.py 迁移） ----------
# 模糊映射表：hap 名（Test.json kits 名）→ 工程目录名
ALIAS = {
    "actserrcodeassithap": "actsassitabilityerrcodehap",
    "actserrcodeassithaptwo": "actsassitabilityerrcodehap2",
    "actserrcodeassithapthree": "actsassitabilityerrcodehap3",
    # systemcall 系列（kits 名与目录名完全不同源，2026-08-18 批量实战补充）
    "actscalltestfeaturerelyhap": "systemcallfeature",
    "actssystemappcallerarelyhap": "systemappcallera",
    "actssystemappcallerbrelyhap": "systemappcallerb",
    "actssystemappcallercrelyhap": "systemappcallerc",
    "actssystemappcalleearelyhap": "systemappcalleea",
    "actsthirdapparelyhap": "thirdappa",
    "actscalltestentrytest": "systemcallentrytest",
    "actscallrely": "actsapprely",
    "actsamsnewwantrelyhap": "actsnewwantrelyhap",
    "actsamsnewwantarelyhap": "actsnewwantarelyhap",
    "actsamsnewwantbrelyhap": "actsnewwantbrelyhap",
    "actsamsnewwantapi7relyhap": "actsnewwantapi7relyhap",
    "actsdebuggabletimeout": "timeout",
}


def _find_project(base_dir: Path, name: str, recursive: bool = False) -> Path | None:
    """按目录名（大小写不敏感）反查工程根（含 build-profile.json5）。"""
    it = base_dir.rglob("*") if recursive else base_dir.glob("*")
    try:
        for cand in it:
            if not cand.is_dir() or cand.name.lower() != name.lower():
                continue
            if not (cand / "build-profile.json5").exists():
                continue
            if any(seg in cand.parts for seg in ("oh_modules", "node_modules", "build")):
                continue
            return cand
    except OSError:
        pass
    return None


def _find_module_dep(base_dir: Path, name: str) -> tuple[Path | None, str]:
    """模块级依赖（ModuleN.hap）：反查 工程根::模块目录。"""
    for cand in base_dir.rglob(name):
        if not (cand.is_dir() and (cand / "build-profile.json5").exists()):
            continue
        if any(seg in cand.parts for seg in ("oh_modules", "node_modules", "build")):
            continue
        return cand.parent, cand.name
    return None, ""


def _resolve_kit_dep(fname: str, main_bundle: str, proj_rel: str,
                     base: Path, base_dir: Path, deps: list[str]) -> None:
    """单个 kits test-file-name → 依赖工程（模块级/自身排除/反查/ALIAS）。"""
    if not fname:
        return
    is_hap = fname.endswith(".hap")
    name = fname[:-4] if is_hap else fname
    if is_hap and name.lower().startswith("module"):
        found_root, found_mod = _find_module_dep(base_dir, name)
        if found_root:
            deps.append(f"{found_root.relative_to(base)}::{found_mod}")
        return
    if is_hap and name.lower() == main_bundle.lower():
        return  # 自身 bundle 排除
    found = _find_project(base_dir, name)
    if found is None:
        found = _find_project(base_dir, name, recursive=True)
    if found:
        if str(found.relative_to(base)) != proj_rel:
            deps.append(str(found.relative_to(base)))
        return
    alias = ALIAS.get(name) or ALIAS.get(name.lower())
    if alias and alias != proj_rel.rsplit("/", 1)[-1]:
        found_alias = _find_project(base_dir, alias, recursive=True)
        if found_alias:
            deps.append(str(found_alias.relative_to(base)))
        else:
            print(f"[resolve_deps] ALIAS {alias} 未找到工程目录（{base_dir} 下）",
                  file=sys.stderr)


def resolve_deps(proj_rel: str, base: Path = REPO) -> list[str]:
    """读取工程 Test.json，解析依赖辅助 HAP（kits）对应的工程相对路径。

    返回工程相对路径列表；模块级依赖以 '工程::模块名' 形式返回。
    """
    test_json = base / proj_rel / "Test.json"
    if not test_json.is_file():
        return []
    try:
        d = json.loads(test_json.read_text(errors="replace"))
    except Exception:
        return []
    main_bundle = d.get("driver", {}).get("bundle-name", "")
    base_dir = base / "/".join(proj_rel.split("/")[:2])
    deps: list[str] = []
    for kit in d.get("kits", []):
        fnames = kit.get("test-file-name", [])
        if isinstance(fnames, str):
            fnames = [fnames]
        for fname in fnames:
            _resolve_kit_dep(fname, main_bundle, proj_rel, base, base_dir, deps)
    return deps





if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser(description="工程元信息工具")
    sub = ap.add_subparsers(dest="cmd")
    p1 = sub.add_parser("meta", help="HAP 元信息")
    p1.add_argument("proj")
    p2 = sub.add_parser("suites", help="套件名")
    p2.add_argument("list_test")
    p3 = sub.add_parser("deps", help="依赖辅助 HAP")
    p3.add_argument("proj_rel")
    args = ap.parse_args()

    if args.cmd == "meta":
        print(json.dumps(hap_meta(Path(args.proj)), ensure_ascii=False))
    elif args.cmd == "suites":
        print(",".join(extract_suites(Path(args.list_test))))
    elif args.cmd == "deps":
        print("\n".join(resolve_deps(args.proj_rel)))
    else:
        ap.print_help()
