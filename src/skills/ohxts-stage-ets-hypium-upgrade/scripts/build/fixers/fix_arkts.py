#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ArkTS 语法类编译错误修复（SKILL 1.5 C 表 / B2 / B3，复用 common/arkts_fixes 模式库）。"""
from __future__ import annotations

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from common.arkts_fixes import (  # noqa: E402
    apply_arkts_fixes, ensure_import, fix_func_expressions as _fix_func_expr,
)


def _err_files(proj: Path, err_file: str) -> list[Path]:
    """报错文件列表：只处理 At File 明确给出的文件。

    关键：err_file 无法解析时返回空（禁止全量 fallback —— 会误改无关文件）。
    """
    if err_file:
        p = Path(err_file)
        if p.is_file():
            return [p]
        p2 = proj / err_file.lstrip("./")
        if p2.is_file():
            return [p2]
    return []


def _rewrite(files: list[Path], fn, changed: list[str]) -> None:
    for f in files:
        try:
            t = f.read_text(errors="replace")
        except OSError:
            continue
        t2 = fn(t)
        if t2 != t:
            f.write_text(t2)
            changed.append(str(f))


def fix_duplicate_identifier(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """Duplicate identifier 'X'：删除重复 import 行（保留第一个）。"""
    sym = match.get("sym", "")
    changed = []
    _rewrite(_err_files(proj, err_file),
             lambda t: _dedup_import_lines(sym, t), changed)
    return changed


def _dedup_import_lines(sym: str, t: str) -> str:
    """删除重复 import 行（保留第一个）。"""
    lines = t.splitlines(True)
    seen = False
    out = []
    for ln in lines:
        if re.search(rf"\bimport\b[^\n]*\b{sym}\b", ln):
            if seen:
                continue  # 重复 import 删除
            seen = True
        out.append(ln)
    return "".join(out)


def fix_missing_import(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """Cannot find namespace/name 'X'：补 import（Want/AbilityConstant/window/BusinessError...）。"""
    sym = match.get("sym", "")
    changed = []

    def fn(t: str) -> str:
        return ensure_import(t, sym)

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_func_expressions(proj: Path, match: dict, err_file: str = "") -> list[str]:
    changed = []
    _rewrite(_err_files(proj, err_file), _fix_func_expr, changed)
    return changed


def fix_for_in(proj: Path, match: dict, err_file: str = "") -> list[str]:
    changed = []

    def fn(t: str) -> str:
        return re.sub(r"\bfor\s*\(\s*const\s+(\w+)\s+in\s+",
                      r"for (const \1 of Object.keys(", t)

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_globalthis(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """globalThis.X = ... → AppStorage.setOrCreate('X', ...)（读写侧同步改）。"""
    changed = []

    def fn(t: str) -> str:
        # 写侧
        t = re.sub(r"globalThis\.(\w+)\s*=\s*([^;]+);",
                   r"AppStorage.setOrCreate('\1', \2);", t)
        # 读侧
        t = re.sub(r"globalThis\.(\w+)",
                   r"AppStorage.get<string>('\1') ?? ''", t)
        return t

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_setuicontent(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """SDK26 WindowStage 无 setUIContent → loadContent(path)。
    保留运行时场景（测试超时/挂测风险）：(windowStage as ESObject).setUIContent(...) 由人工按上下文决定。
    """
    changed = []

    def fn(t: str) -> str:
        return re.sub(r"windowStage\.setUIContent\s*\(\s*this\.context\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*null\s*\)",
                      r"windowStage.loadContent('\1')", t)

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_testtype_enum(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """TestType.Function → TestType.FUNCTION（SDK26 大小写敏感）。"""
    changed = []

    def fn(t: str) -> str:
        return t.replace("TestType.Function", "TestType.FUNCTION") \
                 .replace("TestType.Function", "TestType.FUNCTION")

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_ability_base_class(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """parent class is not constructor：extends Ability → extends UIAbility（3.2 设备基类）。"""
    changed = []

    def fn(t: str) -> str:
        if "extends Ability" in t and "extends UIAbility" not in t:
            t = re.sub(r"import\s+Ability\s+from\s+['\"]@ohos\.app\.ability\.Ability['\"]",
                       "import { UIAbility } from '@ohos.app.ability.UIAbility';", t)
            t = t.replace("extends Ability", "extends UIAbility")
        return t

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_loadcontent_callback(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """arkts-no-any-unknown：loadContent(path, (err, data) =>) 回调参数推断 any。

    SDK26 loadContent 回调是 AsyncCallback<void> → (err: BusinessError, data: void) =>。
    """
    changed = []
    _pat = re.compile(
        r"loadContent\(\s*(['\"][^'\"]+['\"])\s*,\s*\(\s*err\s*,\s*data\s*\)\s*=>")

    def fn(t: str) -> str:
        return _pat.sub(r"loadContent(\1, (err: BusinessError, data: void) =>", t)

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_builder_const(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """@Builder const X = (...) => {} → @Builder function X(...) {}。

    @Builder 只能装饰 function 声明（const 箭头报 wrapBuilder's parameter should be '@Builder' function）。
    """
    changed = []
    _pat = re.compile(
        r"@Builder\s+const\s+(\w+)\s*=\s*(\([^)]*\)|\w+)\s*=>\s*\{")

    def fn(t: str) -> str:
        return _pat.sub(r"@Builder function \1\2 {", t)

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_err_code_guard(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """if (err.code) → if (err && err.code)：回调 err 可能为空时的防崩溃 guard。"""
    changed = []

    def fn(t: str) -> str:
        return re.sub(r"if\s*\(\s*err\.code\s*\)", "if (err && err.code)", t)

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_missing_void_return(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """生命周期无参方法缺返回类型：onDestroy() { → onDestroy(): void { 等。"""
    changed = []
    _pat = re.compile(
        r"^(\s*)(onCreate|onDestroy|onWindowStageCreate|onWindowStageDestroy|"
        r"onForeground|onBackground|onNewWant)\s*\(\s*\)\s*(?!:)\{",
        re.M)

    def fn(t: str) -> str:
        return _pat.sub(r"\1\2(): void {", t)

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_any_to_object(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """显式标注的 : any / as any → : Object / as Object（轻量替代，具体类型难确定时）。

    注意：隐式推断的 any（如回调参数 (err, data)）不适用，需具体类型（见 loadcontent_callback_any）。
    """
    changed = []

    def fn(t: str) -> str:
        t2 = re.sub(r":\s*any\b", ": Object", t)
        t2 = re.sub(r"\bas\s+any\b", "as Object", t2)
        return t2

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def fix_startability_callback(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """startAbility(want, cb) 回调 data 是 void → (error: BusinessError) =>。

    startAbilityForResult 要 AbilityResult 必须传 options 第 3 重载（hint 级，人工处理）。
    """
    changed = []
    _pat = re.compile(
        r"startAbility\(\s*([^,]+)\s*,\s*\(\s*err\s*,\s*\w+\s*\)\s*=>")

    def fn(t: str) -> str:
        return _pat.sub(r"startAbility(\1, (err: BusinessError) =>", t)

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed


def apply_generic_arkts(proj: Path, files: list[Path] | None = None) -> list[str]:
    """通用 ArkTS 适配（var→let/箭头/as unknown as），转换期或编译错批量使用。"""
    changed = []
    targets = files or list((proj / "entry/src").rglob("*.ets"))
    for f in targets:
        try:
            t = f.read_text(errors="replace")
        except OSError:
            continue
        t2 = apply_arkts_fixes(t)
        if t2 != t:
            f.write_text(t2)
            changed.append(str(f))
    return changed


_PARAM_OPT_RE = re.compile(r"(\w+\?\.parameters)\.")
_PARAM_PLAIN_RE = re.compile(r"(commonEventData\.parameters)\.(?!\?)")


def fix_parameters_nullcheck(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """optional-chain parameters for strict null check (10605999)."""
    changed = []

    def fn(t: str) -> str:
        t2 = _PARAM_OPT_RE.sub(r"\1?.", t)
        return _PARAM_PLAIN_RE.sub(r"\1?.", t2)

    _rewrite(_err_files(proj, err_file), fn, changed)
    return changed
