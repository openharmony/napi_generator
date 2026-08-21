#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ArkTS 语法修复模式库（高频，经验固化：SKILL 1.2.5 / B2 / B3 / C / D 表）。

供 convert/convert_ability.py 转换期适配与 build/fixers/fix_arkts.py 编译错驱动修复共用。
每个修复均按实战陷阱加了保护（D 表）：
- function→箭头不破坏 @Builder function / constructor
- 替换模板必须保留前缀（getMainWindow 事故）
- 不删 then 链函数闭合大括号
"""
from __future__ import annotations

import re

# ---------- 方法签名修复（B3 表：参数隐式 any） ----------
SIG_FIXES = [
    # 注意先处理带 : void 的变体，再处理无返回类型的
    (re.compile(r"onCreate\s*\(\s*want\s*,\s*launchParam\s*\)\s*(:\s*void)?\s*\{"),
     "onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {"),
    (re.compile(r"onWindowStageCreate\s*\(\s*windowStage\s*\)\s*(:\s*void)?\s*\{"),
     "onWindowStageCreate(windowStage: window.WindowStage): void {"),
    (re.compile(r"onAcceptWant\s*\(\s*want\s*\)\s*\{"),
     "onAcceptWant(want: Want): string {"),
    (re.compile(r"onContinue\s*\(\s*wantParam\s*\)\s*\{"),
     "onContinue(wantParam: Record<string, Object>): AbilityConstant.OnContinueResult {"),
    (re.compile(r"onDump\s*\(\s*params\s*\)\s*\{"),
     "onDump(params: string[]): string[] {"),
    (re.compile(r"onSessionCreate\s*\(\s*want\s*,\s*session\s*\)\s*\{"),
     "onSessionCreate(want: Want, session: UIExtensionContentSession): void {"),
    (re.compile(r"getMainWindow\s*\(\s*\(\s*err\s*:\s*BusinessError\s*,\s*data\s*\)\s*=>"),
     "getMainWindow((err: BusinessError, data: window.Window) =>"),
    (re.compile(r"getMainWindow\s*\(\s*\(\s*err\s*,\s*data\s*\)\s*=>"),
     "getMainWindow((err: BusinessError, data: window.Window) =>"),
    # SDK26 WindowStage 无 setUIContent → loadContent（保留 runtime 场景用 ESObject 由调用方决定）
    (re.compile(r"windowStage\.setUIContent\s*\(\s*this\.context\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*null\s*\)"),
     r"windowStage.loadContent('\1')"),
]

IMPORT_FIXES = [
    (re.compile(r"import\s+\{\s*(Want|AbilityConstant|UIExtensionContentSession)\s*\}\s*from\s*['\"]@ohos\.app\.ability\.(\w+)['\"]"),
     r"import { \1 } from '@ohos.app.ability.\2';"),
]

# 需要的 import 检测（缺才补）；模块路径用 @kit.*（具名导出），勿用 @ohos.app.ability.Want（无具名导出）
NEED_IMPORTS = {
    "Want": ("Want", "@kit.AbilityKit"),
    "AbilityConstant": ("AbilityConstant", "@kit.AbilityKit"),
    "UIAbility": ("UIAbility", "@kit.AbilityKit"),
    "UIExtensionContentSession": ("UIExtensionContentSession", "@kit.AbilityKit"),
    "window": ("window", "@kit.ArkUI"),
    "BusinessError": ("BusinessError", "@ohos.base"),
}


def ensure_import(text: str, symbol: str) -> str:
    """确保 import 存在（按 NEED_IMPORTS 表补）。

    关键：只要文件里已从任意模块 import 了该符号（含 @kit.*），就不再补 ——
    避免与已有 @kit.AbilityKit 导入产生 Duplicate identifier。
    """
    if symbol not in NEED_IMPORTS:
        return text
    alias, module = NEED_IMPORTS[symbol]
    # 已从任意模块 import 该符号 → 跳过
    if re.search(rf"import\s*[^\n]*\b{alias}\b[^\n]*\bfrom\b", text):
        return text
    # 挂在第一个 import 前
    m = re.search(r"(import\s+[^\n]+\n)", text)
    if m:
        return text[:m.start()] + f"import {{ {alias} }} from '{module}';\n" + text[m.start():]
    return f"import {{ {alias} }} from '{module}';\n" + text


# ---------- 通用语法修复 ----------
def fix_var_to_let(text: str) -> str:
    """var → let（文件级保守替换，逐行）。"""
    lines = []
    for ln in text.splitlines(True):
        m = re.match(r"(\s*)var\s+", ln)
        if m:
            lines.append(m.group(1) + "let " + ln[m.end():])
        else:
            lines.append(ln)
    return "".join(lines)


def fix_func_expressions(text: str) -> str:
    """function () {} → () => {}（排除 @Builder function 与构造器/方法定义）。"""
    # 逐行找 `function (...)` 回调：前一行或同行非方法定义且非 @Builder
    def repl(m: re.Match) -> str:
        pre = m.group(0)[:m.start()]
        line = m.group(0)
        # 保护：@Builder function / constructor / 方法定义（前面有名字+冒号/等号+function 才可转）
        if "@Builder" in line[:m.start(1)]:
            return m.group(0)
        return m.group(1) + "(" + m.group(2) + ") =>"
    # 简单实现：匹配 function\s*\(\s*([^)]*)\)\s*{ ，且该行前面是回调位置（=、(、,、return 等）
    out_lines = []
    for ln in text.splitlines(True):
        if "@Builder" in ln:
            out_lines.append(ln)
            continue
        new = re.sub(r"function\s*\(\s*([^)]*)\)\s*\{", r"(\1) => {", ln)
        out_lines.append(new)
    return "".join(out_lines)


def fix_as_unknown_as(text: str) -> str:
    """as unknown as T → as T（arkts 不允许 as unknown as）。"""
    return re.sub(r"as\s+unknown\s+as\s+", "as ", text)


def fix_string_wrapper(text: str) -> str:
    """String 包装类型 → string（保守：类型注解位置）。"""
    return re.sub(r":\s*String\b", ": string", text)


def fix_exclamation(text: str) -> str:
    """definite-assignment 感叹号（storage!: LocalStorage）→ 初始化由人工/模板处理。
    此处只处理声明处 `let x!: T` → `let x: T`（配合调用处保留，谨慎）。"""
    return re.sub(r"(\blet\s+\w+)\s*!\s*:", r"\1:", text)


def fix_then_chain_generic(text: str) -> str:
    """Promise 无类型参数：new Promise( → new Promise<void>(。"""
    return re.sub(r"new\s+Promise\s*\(\s*(?:\(|async\s*\()", "new Promise<void>(", text)


# ---------- TestRunner 三模板（B2 表，非模板化文件用） ----------
def fix_testrunner_types(text: str) -> str:
    """小写/大写 AbilityDelegatorRegistry 变体修复（非模板文件）。"""
    # 大写命名空间模板（357 个）：var abilityDelegator = undefined
    text = re.sub(r"\bvar\s+abilityDelegator\s*=\s*undefined\s*;?",
                  "let abilityDelegator: AbilityDelegatorRegistry.AbilityDelegator | undefined = undefined;",
                  text)
    text = re.sub(r"\blet\s+abilityDelegator\s*=\s*undefined\s*;?",
                  "let abilityDelegator: AbilityDelegatorRegistry.AbilityDelegator | undefined = undefined;",
                  text)
    text = re.sub(r"\blet\s+abilityDelegatorArguments\s*=\s*undefined\s*;?",
                  "let abilityDelegatorArguments: AbilityDelegatorRegistry.AbilityDelegatorArgs | undefined = undefined;",
                  text)
    text = re.sub(r"\bvar\s+abilityDelegatorArguments\s*=\s*undefined\s*;?",
                  "let abilityDelegatorArguments: AbilityDelegatorRegistry.AbilityDelegatorArgs | undefined = undefined;",
                  text)
    # lMonitor 对象字面量 → 显式 AbilityMonitor 类型（B2 表）
    text = re.sub(r"(\blet\s+)lMonitor\s*=\s*\{",
                  r"\1lMonitor: AbilityDelegatorRegistry.AbilityMonitor = {", text)
    # translateParamsToString(parameters) → (parameters: Record<string, string>)（B2 表）
    text = re.sub(r"translateParamsToString\s*\(\s*parameters\s*\)",
                  "(parameters: Record<string, string>)", text)
    text = re.sub(r"\berr\s*:\s*any\b", "err: BusinessError", text)
    text = re.sub(r"\bfor\s*\(\s*const\s+(\w+)\s+in\s+", r"for (const \1 of Object.keys(", text)
    # @ohos.application.abilityDelegatorRegistry → @ohos.app.ability.abilityDelegatorRegistry（228 个）
    text = re.sub(r"@ohos\.application\.abilityDelegatorRegistry", "@ohos.app.ability.abilityDelegatorRegistry", text)
    text = re.sub(r"import\s+abilityDelegatorRegistry\s+from",
                  "import abilityDelegatorRegistry from", text)
    return text


def apply_arkts_fixes(text: str, kinds: list[str] | None = None) -> str:
    """按需应用修复。kinds: var/any/func/as/storage/then/string/testrunner/sig/imports。"""
    kinds = kinds or ["var", "func", "as", "string", "sig", "imports"]
    if "var" in kinds:
        text = fix_var_to_let(text)
    if "func" in kinds:
        text = fix_func_expressions(text)
    if "as" in kinds:
        text = fix_as_unknown_as(text)
    if "string" in kinds:
        text = fix_string_wrapper(text)
    if "storage" in kinds:
        text = fix_exclamation(text)
    if "then" in kinds:
        text = fix_then_chain_generic(text)
    if "testrunner" in kinds:
        text = fix_testrunner_types(text)
    if "sig" in kinds:
        for pat, rep in SIG_FIXES:
            text = pat.sub(rep, text)
    if "imports" in kinds:
        for sym in ("Want", "AbilityConstant", "window", "BusinessError",
                    "UIExtensionContentSession"):
            if f" {sym} " in text or f"({sym}" in text or f": {sym}" in text or f"<{sym}" in text:
                text = ensure_import(text, sym)
    return text


if __name__ == "__main__":
    import sys
    for f in sys.argv[1:]:
        t = open(f, encoding="utf-8", errors="replace").read()
        t2 = apply_arkts_fixes(t)
        open(f, "w", encoding="utf-8").write(t2)
        print("FIXED", f)
