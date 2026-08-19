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
        m = re.search(r'"bundleName"\s*:\s*"([^"]+)"', c)
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


def _skip_generated(cand: Path) -> bool:
    """过滤 oh_modules/node_modules/build 生成目录。"""
    return any(seg in cand.parts for seg in ("oh_modules", "node_modules", "build"))


def _find_by_name(base_dir: Path, name: str, recursive: bool,
                  ci: bool) -> Optional[Path]:
    """按目录名反查工程根（大小写 ci 可选）；跳过生成目录；未找到返回 None。"""
    it = base_dir.rglob("*") if recursive else base_dir.glob("*")
    for cand in it:
        if not cand.is_dir():
            continue
        hit = cand.name.lower() == name.lower() if ci else cand.name == name
        if hit and (cand / "build-profile.json5").exists() and not _skip_generated(cand):
            return cand
    return None


def _kit_files(kit: dict) -> list[str]:
    """Test.json kit 的 test-file-name 归一化为非空列表。"""
    fnames = kit.get("test-file-name", [])
    if isinstance(fnames, str):
        fnames = [fnames]
    return [f for f in fnames if f]


def _resolve_one(fname: str, main_bundle: str, proj_rel: str,
                 base_dir: Path, base: Path) -> str:
    """解析单个依赖文件名 → 工程相对路径；无匹配返回 ''。"""
    is_hap = fname.endswith(".hap")
    name = fname[:-4] if is_hap else fname
    if is_hap and name.lower().startswith("module"):
        # 模块级依赖（ModuleN.hap）：反查 工程根::模块目录
        found = _find_by_name(base_dir, name, recursive=True, ci=False)
        return f"{found.parent.relative_to(base)}::{found.name}" if found else ""
    if is_hap and name.lower() == main_bundle.lower():
        return ""  # 自身 bundle 排除
    # 反查工程：目录名大小写不敏感匹配（kits 名常为驼峰，目录为小写）
    found = _find_by_name(base_dir, name, recursive=False, ci=True)
    if found is None:
        # 深层反查（多级目录，如 faapicover/xxx）
        found = _find_by_name(base_dir, name, recursive=True, ci=True)
    if found:
        if str(found.relative_to(base)) == proj_rel:
            return ""  # kits 显式列了自身 → 跳过（主流程已装）
        return str(found.relative_to(base))
    # 模糊映射（命中后仍排除自身；反查完整相对路径）
    alias = ALIAS.get(name) or ALIAS.get(name.lower())
    if not alias or alias == proj_rel.rsplit("/", 1)[-1]:
        return ""
    found = _find_by_name(base_dir, alias, recursive=True, ci=False)
    if found:
        return str(found.relative_to(base))
    print(f"[resolve_deps] ALIAS {alias} 未找到工程目录（{base_dir} 下）", file=sys.stderr)
    return ""


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
    # kits 反查的基准目录：本工程同子系统的上层（如 ability/ability_runtime）
    base_dir = base / "/".join(proj_rel.split("/")[:2])
    main_bundle = d.get("driver", {}).get("bundle-name", "")
    deps: list[str] = []
    for kit in d.get("kits", []):
        for fname in _kit_files(kit):
            dep = _resolve_one(fname, main_bundle, proj_rel, base_dir, base)
            if dep:
                deps.append(dep)
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
