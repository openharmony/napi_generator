#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""批量后缀转换：js/ts → ets（需求1）。

流程：扫描目标范围内的业务 .js/.ts（排除 oh_modules/node_modules/build/.hvigor/hvigorfile）
→ 逐文件 git mv → 更新引用（module.json5 的 srcEntry、module.json、config.json、文档中写死后缀）
→ 数据安全检查（LOST/DUP）→ churn 汇总。

固化经验（SKILL 1.2/1.4/1.6）：
- FA 模型工程（存在 config.json）不转：Legacy 编译只认 .ts
- 排除路径段：oh_modules / node_modules / build / .hvigor / autosign / .preview
- 转换后必须做数据安全检查：D *.ts 需有对应 ?? *.ets；git mv 失败会导致文件丢失
- 禁止动：文件名含 JSProject / 明确测 JS 互操作的 .js（改成 ets 会改变用例语义）
"""
from __future__ import annotations

import argparse
import re
from pathlib import Path

import sys
from pathlib import Path
_GATE_CHECKERS = Path(__file__).resolve().parents[3] / "ohos-gate-compliance" / "scripts" / "checkers"
if not _GATE_CHECKERS.is_dir():
    _GATE_CHECKERS = Path("/root/aiSkill/.claude/skills/ohos-gate-compliance/scripts/checkers")
sys.path.insert(0, str(_GATE_CHECKERS))
from ..common.paths import REPO
from ..common.git_utils import cleanup_leftover_ts, data_safety_check, git_mv, write_preserve_eol
from ets_checker import fix_code_quality  # noqa: E402
from ets_checker import dq_to_sq  # noqa: E402

EXCLUDE_SEGMENTS = ("oh_modules", "node_modules", "build", ".hvigor", "autosign",
                    ".preview", ".idea")
EXCLUDE_NAMES = ("hvigorfile.ts", "hvigorfile.js")
# 文件名含这些关键字的 .js 不转（互操作语义）
JS_SEMANTIC_MARKERS = ("JSProject", "jsinterop", "interop")


def is_stage_project(proj: Path) -> bool:
    """stage 模型判定：存在 build-profile.json5 且无 config.json（FA）。"""
    return (proj / "build-profile.json5").exists() and not (proj / "config.json").exists()


def scan_targets(subdir: str, ext: str = "ts") -> list[Path]:
    """扫描 <REPO>/<subdir> 下业务 .ts/.js 文件（stage 工程内，排除噪声）。"""
    root = REPO / subdir
    if not root.is_dir():
        return []
    out = []
    for f in sorted(root.rglob(f"*.{ext}")):
        if any(seg in f.parts for seg in EXCLUDE_SEGMENTS):
            continue
        if f.name in EXCLUDE_NAMES:
            continue
        # 工程根判定：含 hvigor/hvigor-config.json5 的目录（有的子系统 build-profile 只在 entry/ 下）
        proj_root = f
        while proj_root != root and not (proj_root / "hvigor" / "hvigor-config.json5").exists():
            proj_root = proj_root.parent
        if proj_root == root or not is_stage_project(proj_root):
            continue  # 非 stage 或 FA 模型 → 跳过
        if ext == "js" and any(m in f.name for m in JS_SEMANTIC_MARKERS):
            continue
        out.append(f)
    return out


def update_refs(proj_root: Path, renamed: list[tuple[str, str]]) -> int:
    """更新引用：module.json5/module.json/config.json 中写死的 .ts/.js 后缀 → .ets。

    renamed: [(旧相对路径, 新相对路径)]。返回改动文件数。
    """
    changed = 0
    # 旧文件名的相对路径（去 ./ 前缀）→ 新后缀
    mapping = {}
    for old, new in renamed:
        rel_old = old.replace("\\", "/")
        if rel_old.startswith("./"):
            rel_old = rel_old[2:]
        mapping[rel_old] = new.rsplit(".", 1)[0] + ".ets"
    base_names = {}
    for old, new in mapping.items():
        base_names[old.rsplit("/", 1)[-1]] = new.rsplit("/", 1)[-1]

    for cfg_name in ("module.json5", "module.json", "config.json"):
        for cfg in proj_root.rglob(cfg_name):
            if any(seg in cfg.parts for seg in EXCLUDE_SEGMENTS):
                continue
            try:
                text = open(cfg, encoding="utf-8", errors="replace", newline="").read()
            except OSError:
                continue
            new_text = text
            for rel_old, rel_new in mapping.items():
                new_text = new_text.replace(rel_old, rel_new)
            for base_old, base_new in base_names.items():
                # 引用常是模块内相对路径（./ets/entryability/X.ts），按文件名替换并保留前缀
                new_text = re.sub(
                    r'(["\'])([^"\']*/)*' + re.escape(base_old) + r'\1',
                    lambda m, bn=base_new: "".join((m.group(1), m.group(2) or "", bn)),
                    new_text)
            if new_text != text:
                write_preserve_eol(cfg, text, new_text)
                changed += 1
    return changed


def convert_proj_quotes(proj_root: Path) -> int:
    """工程内代码文件引号规范转换：双引号→单引号（版权头除外），保持行尾。返回替换处数。"""
    total = 0
    for f in sorted(proj_root.rglob("*.ets")) + sorted(proj_root.rglob("*.ts")):
        if any(seg in f.parts for seg in EXCLUDE_SEGMENTS):
            continue
        if f.name in EXCLUDE_NAMES or f.name.endswith(".d.ts"):
            continue
        try:
            text = open(f, encoding="utf-8", errors="replace", newline="").read()
        except OSError:
            continue
        new_text = fix_code_quality(dq_to_sq(text))
        if new_text != text:
            write_preserve_eol(f, text, new_text)
            total += sum(1 for a, b in zip(text, new_text) if a == '"' and b == "'")
    return total


def convert_batch(subdir: str, ext: str = "ts", dry_run: bool = False,
                  limit: int = 0) -> dict:
    """批量转换一个子系统。返回统计。"""
    files = scan_targets(subdir, ext)
    if limit:
        files = files[:limit]
    renamed: list[tuple[str, str]] = []
    converted = skipped = 0
    for f in files:
        if f.name in EXCLUDE_NAMES:
            skipped += 1
            continue
        rel_old = str(f.relative_to(REPO))
        rel_new = rel_old.rsplit(".", 1)[0] + ".ets"
        if dry_run:
            converted += 1
            renamed.append((rel_old, rel_new))
            continue
        if git_mv(rel_old, rel_new):
            converted += 1
            renamed.append((rel_old, rel_new))
    ref_changed = 0
    if not dry_run and renamed:
        # 更新引用（按工程根分组，避免重复读同一文件）
        from collections import defaultdict
        by_proj: dict[Path, list[tuple[str, str]]] = defaultdict(list)
        for old, new in renamed:
            f = REPO / new
            proj_root = f
            while proj_root != REPO and not (proj_root / "hvigor" / "hvigor-config.json5").exists():
                proj_root = proj_root.parent
            if proj_root != REPO:
                by_proj[proj_root].append((old, new))
        for proj, rns in by_proj.items():
            ref_changed += update_refs(proj, rns)
            cleanup_leftover_ts(proj)  # 检视：新增 .ets 必须删除遗留 .ts
            quotes_changed = convert_proj_quotes(proj)  # 代码规范：双引号→单引号（版权头除外）
            if quotes_changed:
                print(f"  [引号转换] {proj} 替换 {quotes_changed} 处双引号")
    return {"converted": converted, "skipped": skipped, "ref_changed": ref_changed,
            "renamed": renamed, "files": len(files)}


def main() -> None:
    ap = argparse.ArgumentParser(description="批量 js/ts → ets 转换（需求1）")
    ap.add_argument("--subdir", default="ability", help="子系统目录（相对 REPO）")
    ap.add_argument("--ext", choices=["ts", "js"], default="ts")
    ap.add_argument("--limit", type=int, default=0, help="只转换前 N 个（调试用）")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--check-safety", action="store_true", help="转换后跑数据安全检查")
    args = ap.parse_args()

    r = convert_batch(args.subdir, args.ext, args.dry_run, args.limit)
    print(f"scan={r['files']} converted={r['converted']} skipped={r['skipped']} "
          f"ref_changed={r['ref_changed']}")
    if args.check_safety:
        s = data_safety_check()
        print(f"SAFETY: LOST={len(s['lost'])} DUP={len(s['dup'])}")
        for f in s["lost"]:
            print("  LOST:", f)
        for f in s["dup"]:
            print("  DUP:", f)


if __name__ == "__main__":
    main()
