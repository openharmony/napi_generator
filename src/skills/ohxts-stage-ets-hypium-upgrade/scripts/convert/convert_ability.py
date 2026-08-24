#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Ability 类文件转换：EntryAbility/MainAbility/AbilityStage/TestAbility .ts → .ets。

流程：git mv → 应用 ArkTS 适配（common/arkts_fixes：方法签名/import/var/箭头/as）→
更新 module.json5 的 srcEntry 引用（.ts → .ets）。

固化经验（SKILL 1.2/1.4.1/B3）：
- module.json5 的 srcEntry 是 abilities 内字段（module 级才是 srcEntrance），局部替换防混淆
- 版权头保留（git mv 天然保留，不整文件重写）
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
_GATE_CHECKERS = Path(__file__).resolve().parents[3] / "ohos-gate-compliance" / "scripts" / "checkers"
if not _GATE_CHECKERS.is_dir():
    _GATE_CHECKERS = Path("/root/aiSkill/.claude/skills/ohos-gate-compliance/scripts/checkers")
sys.path.insert(0, str(_GATE_CHECKERS))

from common.arkts_fixes import apply_arkts_fixes  # noqa: E402
from ets_checker import fix_code_quality  # noqa: E402
from ets_checker import dq_to_sq  # noqa: E402
from common.git_utils import cleanup_leftover_ts, git_mv, write_preserve_eol  # noqa: E402
from common.paths import REPO  # noqa: E402

ABILITY_NAMES = ("EntryAbility", "MainAbility", "AbilityStage", "TestAbility")


def find_ability_ts(proj: Path) -> list[Path]:
    """找工程内业务 Ability 类 .ts（排除 build/oh_modules 等）。"""
    out = []
    for f in sorted(proj.rglob("*.ts")):
        if any(seg in f.parts for seg in
               ("oh_modules", "node_modules", "build", ".hvigor", "autosign")):
            continue
        if f.name == "hvigorfile.ts" or f.name.endswith(".d.ts"):
            continue
        if any(n in f.name for n in ABILITY_NAMES):
            out.append(f)
    return out


def update_srcentry(proj: Path, renamed: list[tuple[Path, Path]]) -> int:
    """更新 module.json5/module.json 的 srcEntry（仅局部替换对应文件名后缀）。"""
    changed = 0
    for cfg_name in ("module.json5", "module.json"):
        for cfg in proj.rglob(cfg_name):
            if any(seg in cfg.parts for seg in ("build", "oh_modules")):
                continue
            try:
                text = open(cfg, encoding="utf-8", errors="replace", newline="").read()
            except OSError:
                continue
            new_text = text
            for old, new in renamed:
                new_text = new_text.replace(
                    old.name.rsplit(".", 1)[0] + ".ts",
                    new.name.rsplit(".", 1)[0] + ".ets")
            if new_text != text:
                write_preserve_eol(cfg, text, new_text)
                changed += 1
    return changed


def convert_project(proj: Path, dry_run: bool = False) -> dict:
    """转换单工程全部 Ability 类 .ts。"""
    files = find_ability_ts(proj)
    converted = []
    for f in files:
        rel_old = str(f.relative_to(REPO))
        rel_new = rel_old.rsplit(".", 1)[0] + ".ets"
        if dry_run:
            converted.append((f, f.with_suffix(".ets")))
            continue
        # 先 git mv（保留历史/版权头），再对 .ets 应用 ArkTS 适配
        if not git_mv(rel_old, rel_new):
            continue
        new_p = f.with_suffix(".ets")
        text = open(new_p, encoding="utf-8", errors="replace", newline="").read()
        # 保持原 .ts 行尾（git mv 保留原字节，write_text 默认 LF 会破坏 CRLF）
        # 代码规范：双引号→单引号（版权头除外）+ 机械格式修复（大括号同行等）
        write_preserve_eol(new_p, text,
                           fix_code_quality(dq_to_sq(apply_arkts_fixes(text))))
        converted.append((f, new_p))
    ref_changed = 0
    if not dry_run:
        ref_changed = update_srcentry(proj, converted)
        cleanup_leftover_ts(proj)  # 检视：新增 .ets 必须删除遗留 .ts
    return {"converted": len(converted), "ref_changed": ref_changed,
            "files": [(str(o), str(n)) for o, n in converted]}


def main() -> None:
    ap = argparse.ArgumentParser(description="Ability 类文件转换（单工程）")
    ap.add_argument("proj", help="工程路径（绝对或 REPO 相对）")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    proj = Path(args.proj)
    if not proj.is_absolute():
        proj = REPO / args.proj
    r = convert_project(proj, args.dry_run)
    print(f"converted={r['converted']} ref_changed={r['ref_changed']}")
    for old, new in r["files"]:
        print(f"  {old} -> {new}")


if __name__ == "__main__":
    main()
