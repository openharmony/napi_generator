#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""资源缺失类编译错误修复（SKILL 1.5 A 表）。

每个修复函数签名：fix(proj: Path, match: dict, err_file: str) -> list[str]（改动文件列表）。
match 为 rules.json 正则的 groupdict；err_file 为错误消息里的 At file 路径（可能为空）。
"""
from __future__ import annotations

import json
import re
from pathlib import Path

STANDARD_DESC = "demo for test"


def _find_json(proj: Path, name: str) -> Path | None:
    """找资源 element json（AppScope 优先，其次 entry 等模块）。"""
    for root in ("AppScope", "entry"):
        p = proj / root / "src" / "main" / "resources" / "base" / "element" / name
        if p.exists():
            return p
        p2 = proj / root / "src" / "main" / "resources" / "base" / "element" / (name + ".json")
        if p2.exists():
            return p2
    for p in sorted(proj.rglob(f"**/{name}.json")):
        if "build" not in p.parts and "oh_modules" not in p.parts:
            return p
    return None


def _load_json(p: Path) -> list[dict]:
    try:
        return json.loads(p.read_text(errors="replace")).get("string", [])
    except Exception:
        return []


def _save_json(p: Path, entries: list[dict]) -> None:
    p.write_text(json.dumps({"string": entries}, indent=2, ensure_ascii=False) + "\n")


def _err_file(proj: Path, err_file: str) -> str:
    """错误消息 At file 路径 → 工程内相对路径（默认 AppScope）。"""
    if err_file:
        try:
            return str(Path(err_file).relative_to(proj))
        except ValueError:
            pass
    return "AppScope"


def fix_string_not_defined(proj: Path, match: dict, err_file: str = "") -> list[str]:
    key = match.get("key", "")
    p = _find_json(proj, "string") or proj / "AppScope/src/main/resources/base/element/string.json"
    entries = _load_json(p)
    if not any(e.get("name") == key for e in entries):
        entries.append({"name": key, "value": STANDARD_DESC})
        p.parent.mkdir(parents=True, exist_ok=True)
        _save_json(p, entries)
        return [str(p)]
    return []


def fix_media_not_defined(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """$media:key 未定义 → 引用处改 $media:icon（官方资源多数有 icon）。"""
    key = match.get("key", "")
    changed = []
    # 定位到报错文件（At file 优先）；找不到则在 entry/src/main 下全量替换引用
    files: list[Path] = []
    loc = _err_file(proj, err_file)
    cand = proj / loc
    if cand.is_file():
        files.append(cand)
    else:
        for pat in ("*.json", "*.json5", "*.ets", "*.ts"):
            files.extend(sorted((proj / "entry/src/main").rglob(pat)))
    for f in files:
        try:
            t = f.read_text(errors="replace")
        except OSError:
            continue
        if f"$media:{key}" in t:
            t2 = t.replace(f"$media:{key}", "$media:icon")
            f.write_text(t2)
            changed.append(str(f))
    return changed


def fix_color_not_defined(proj: Path, match: dict, err_file: str = "") -> list[str]:
    key = match.get("key", "")
    p = _find_json(proj, "color") or proj / "AppScope/src/main/resources/base/element/color.json"
    try:
        entries = json.loads(p.read_text(errors="replace")).get("color", [])
    except Exception:
        entries = []
    if not any(e.get("name") == key for e in entries):
        entries.append({"name": key, "value": "#FFFFFF"})
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(json.dumps({"color": entries}, indent=2, ensure_ascii=False) + "\n")
        return [str(p)]
    return []


def fix_float_resource(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """Unknown resource type 'float'：补 float.json（16fp）。"""
    changed = []
    for f in sorted((proj / "AppScope").rglob("*.json5")):
        t = f.read_text(errors="replace")
        if "$r('app.float." in t or "$r(\"app.float." in t:
            p = proj / "AppScope/src/main/resources/base/element/float.json"
            if not p.exists():
                p.parent.mkdir(parents=True, exist_ok=True)
                p.write_text('{\n  "float": [\n    { "name": "base", "value": "16fp" }\n  ]\n}\n')
                changed.append(str(p))
            break
    return changed


def _patch_syscap(syscap: Path) -> bool:
    """单 syscap.json：general 数组值同步 module.json5 deviceTypes；返回是否改动。"""
    module = syscap.parents[1] / "module.json5"
    if not module.exists():
        module = syscap.parent / "module.json5"
    if not module.exists():
        return False
    try:
        dt = json.loads(re.sub(r"//.*", "", module.read_text(errors="replace"))).get("module", {}).get("deviceTypes", [])
        d = json.loads(syscap.read_text(errors="replace"))
    except Exception:
        return False
    changed = False
    for sec in ("general", "system", "system_core"):
        if sec not in d or "projects" not in d[sec]:
            continue
        for proj_sec in d[sec]["projects"]:
            if "general" in proj_sec and proj_sec["general"] != dt:
                proj_sec["general"] = dt
                changed = True
    if changed:
        syscap.write_text(json.dumps(d, indent=2, ensure_ascii=False) + "\n")
    return changed


def fix_syscap_general(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """syscap.json 的 general 数组值 = module.json5 的 deviceTypes。"""
    changed = []
    for syscap in sorted(proj.rglob("syscap.json")):
        if "build" in syscap.parts or "oh_modules" in syscap.parts:
            continue
        if _patch_syscap(syscap):
            changed.append(str(syscap))
    return changed


def _ensure_string_entry(p: Path, reason_key: str, value: str) -> bool:
    """string.json 补条目（已存在不动）；返回是否新增。"""
    entries = _load_json(p)
    if any(e.get("name") == reason_key for e in entries):
        return False
    entries.append({"name": reason_key, "value": value[:60]})
    _save_json(p, entries)
    return True


def fix_permission_reason(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """requestPermissions[].reason pattern 不匹配 → "$string:reason_xxx" + string.json 补条目。"""
    changed = []
    for f in sorted(proj.rglob("module.json5")):
        if "build" in f.parts:
            continue
        try:
            t = f.read_text(errors="replace")
        except OSError:
            continue
        # 找 reason 是纯文本的 permission 段
        m = re.search(r'"reason"\s*:\s*"([^$][^"]{3,})"', t)
        if not m:
            continue
        reason_key = "reason_" + Path(f).parent.name[:20]
        t2 = t.replace(m.group(0), f'"reason": "$string:{reason_key}"')
        f.write_text(t2)
        changed.append(str(f))
        p = _find_json(proj, "string")
        if p and _ensure_string_entry(p, reason_key, m.group(1)):
            changed.append(str(p))
    return changed


def _ensure_start_bg_color(proj: Path, changed: list[str]) -> None:
    """顺带保证 color 有 start_window_background。"""
    c = _find_json(proj, "color")
    if not c:
        return
    try:
        entries = json.loads(c.read_text(errors="replace")).get("color", [])
    except Exception:
        return
    if not any(e.get("name") == "start_window_background" for e in entries):
        entries.append({"name": "start_window_background", "value": "#FFFFFF"})
        c.write_text(json.dumps({"color": entries}, indent=2, ensure_ascii=False) + "\n")
        changed.append(str(c))


def fix_startwindow_icon(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """module.abilities[0] 缺 startWindowIcon → 补 startWindowIcon + startWindowBackground。"""
    changed = []
    for f in sorted(proj.rglob("module.json5")):
        if "build" in f.parts:
            continue
        try:
            t = f.read_text(errors="replace")
        except OSError:
            continue
        if "startWindowIcon" in t:
            continue
        # 只处理 abilities 段缺该字段的
        if "abilities" not in t:
            continue
        new_t = re.sub(
            r'("type"\s*:\s*"page"\s*,\s*\n\s*"name"\s*:\s*"[^"]+")',
            r'\1,\n      "startWindowIcon": "$media:icon",\n      "startWindowBackground": "$color:start_window_background"',
            t)
        if new_t != t:
            f.write_text(new_t)
            changed.append(str(f))
            _ensure_start_bg_color(proj, changed)
    return changed
