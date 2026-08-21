#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""module.json5 / build-profile 配置类编译错误修复（SKILL 1.5 B 表）。"""
from __future__ import annotations

import json
import re
from pathlib import Path


def _iter_json5(proj: Path):
    for f in sorted(proj.rglob("*.json5")):
        if "build" in f.parts or "oh_modules" in f.parts or ".hvigor" in f.parts:
            continue
        yield f


def fix_srcentry(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """abilities 内 srcEntrance → srcEntry（module 级才是 srcEntrance）。"""
    changed = []
    for f in _iter_json5(proj):
        if f.name != "module.json5":
            continue
        try:
            t = f.read_text(errors="replace")
        except OSError:
            continue
        if re.search(r'"abilities"\s*:\s*\[', t) and re.search(r'"srcEntrance"', t):
            t2 = t.replace("srcEntrance", "srcEntry")
            f.write_text(t2)
            changed.append(str(f))
    return changed


def fix_module_name_mismatch(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """统一 build-profile.json5 与 module.json5 的 name。"""
    name = match.get("name", "")
    # build-profile.json5 的 modules[].name ← module.json5 的 module.name
    bp = proj / "build-profile.json5"
    if not bp.exists():
        return []
    try:
        t = bp.read_text(errors="replace")
    except OSError:
        return []
    return _fix_first_module_name(proj, bp, t, name)


def _module_name(f: Path) -> str:
    """读取 module.json5 的 module.name（失败空串）。"""
    try:
        raw = re.sub(r"//.*", "", f.read_text(errors="replace"))
        return json.loads(raw).get("module", {}).get("name", "")
    except Exception:
        return ""


def _fix_first_module_name(proj: Path, bp: Path, t: str, name: str) -> list[str]:
    """遍历 module.json5 找首个 name 不同者改写 build-profile（count=1）。"""
    changed: list[str] = []
    for f in _iter_json5(proj):
        if f.name != "module.json5":
            continue
        mn = _module_name(f)
        if mn and mn != name:
            t2 = re.sub(r'"name"\s*:\s*"' + re.escape(name) + r'"',
                        f'"name": "{mn}"', t, count=1)
            if t2 != t:
                bp.write_text(t2)
                changed.append(str(bp))
        break
    return changed


def fix_ohostest_target(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """entry/build-profile.json5 的 targets 补 {"name": "ohosTest"}。"""
    mod = match.get("mod", "entry")
    changed = []
    for bp in (proj / mod / "build-profile.json5", proj / "build-profile.json5"):
        if not bp.exists():
            continue
        t = bp.read_text(errors="replace")
        if '"targets"' in t and "ohosTest" in t.split("targets")[1][:500]:
            continue
        if '"targets"' not in t:
            t = t.rstrip()[:-1] + ',\n  "targets": [\n    { "name": "ohosTest" }\n  ]\n}\n'
        else:
            t = re.sub(r'"targets"\s*:\s*\[',
                       '"targets": [\n      { "name": "ohosTest" },', t, count=1)
        bp.write_text(t)
        changed.append(str(bp))
        break
    return changed


def fix_srcentry_file(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """Module-srcEntry X not found：官方引用不存在的文件 → 从 ohosTest 复制同名或修正。"""
    src = match.get("path", "")
    changed = []
    # 找引用该 srcEntry 的 module.json5
    for f in _iter_json5(proj):
        if f.name != "module.json5":
            continue
        try:
            t = f.read_text(errors="replace")
        except OSError:
            continue
        if src not in t:
            continue
        # 目标：srcEntry 相对模块目录；尝试从 ohosTest 复制同名文件
        fname = Path(src).name
        target = f.parent / src.lstrip("./")
        if not target.exists() and _copy_from_ohos_test(proj, fname, target):
            changed.append(str(target))
        break
    return changed


def _copy_from_ohos_test(proj: Path, fname: str, target: Path) -> bool:
    """从 ohosTest 找同名文件复制到 target，返回是否成功。"""
    for cand in sorted((proj / "entry/src/ohosTest").rglob(fname)):
        if "build" in cand.parts:
            continue
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(cand.read_text(errors="replace"))
        return True
    return False


def fix_ets_ets_dir(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """双层 ets/ets/ 官方坏数据 → git mv 到单层。"""
    import subprocess
    changed = []
    for d in sorted(proj.rglob("ets/ets")):
        if "build" in d.parts or "oh_modules" in d.parts:
            continue
        parent = d.parent  # .../src/main/ets
        for f in sorted(d.rglob("*")):
            if f.is_file():
                rel = f.relative_to(d)
                dst = parent / rel
                dst.parent.mkdir(parents=True, exist_ok=True)
                subprocess.run(["git", "mv", str(f), str(dst)], cwd=str(proj),
                               capture_output=True)
                changed.append(str(dst))
        # 删除空目录
        for f in sorted(d.rglob("*"), reverse=True):
            if f.is_dir() and not any(f.iterdir()):
                f.rmdir()
    return changed
