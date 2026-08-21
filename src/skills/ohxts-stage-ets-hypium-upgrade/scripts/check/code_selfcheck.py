#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""代码规范/门禁/编译规则自检（子功能 7️⃣，方案库驱动）。

依据 scripts/check/rules_gate.json（方案库，历轮检视意见与编译报错归类固化）：
提交前对代码文件/目录/分支执行全部可静态检测的规则，命中即报告规则号+位置+修复建议，
把门禁/编译问题在开发侧提前拦截，避免反复触发 PR 检视浪费时间。

用法：
  # 扫描文件/目录（默认排除 oh_modules/build/.hvigor 等）
  python3 code_selfcheck.py <file|dir>...
  # 扫描整个 HAP 目录
  python3 code_selfcheck.py ability/xxx/yyy
  # 只看某类规则
  python3 code_selfcheck.py <dir> --rule G.EXT.02,XTS.CHECK.ASYNC_TESTCASE.02
  # JSON 输出（供脚本集成）
  python3 code_selfcheck.py <dir> --json
退出码：0 无违规；1 有违规（--strict 时提交流程可据此拦截）。

实现规则（与方案库一一对应）：
  正则类：ESObject/多余分号/大括号同行/行宽/蛇形命名/Pascal函数/用例编号/错误码转换/空循环体
  启发类：类属性无修饰符、.then/.catch 无 done()、await 在 try 外、switch case 缩进、private 字段类外访问
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
RULES_FILE = SCRIPT_DIR / "rules_gate.json"

EXCLUDE_DIRS = ("oh_modules", "node_modules", "build", ".hvigor", "autosign",
                ".preview", ".idea", ".cxx", "oh_modules", ".ohpm")
EXCLUDE_NAMES = ("hvigorfile.ts", "hvigorfile.js")
# await 规则豁免：测试工具类调用（实测不触发门禁）
AWAIT_EXEMPT = ("Utils.sleep", "sleep(")


def load_rules() -> list[dict]:
    return json.loads(RULES_FILE.read_text(encoding="utf-8"))["rules"]


def scan_file(path: Path) -> list[dict]:
    """扫描单个 .ets/.ts/.js 文件，返回违规列表 [{rule, line, msg}]。"""
    hits: list[dict] = []
    text = open(path, encoding="utf-8", errors="replace", newline="").read()
    lines = text.split("\n")

    def add(rule_id: str, line_no: int, msg: str = "") -> None:
        hits.append({"rule": rule_id, "file": str(path), "line": line_no, "msg": msg})

    # ---- 正则类规则 ----
    for i, ln in enumerate(lines, 1):
        # G.EXT.02 ESObject（排除 Record<string, ESObject>）
        for m in re.finditer(r":\s*ESObject\b|\bESObject;", ln):
            if "Record<string, ESObject>" not in ln:
                add("G.EXT.02", i, ln.strip()[:80])
        # G.FMT.08 多余分号
        if ";;" in ln:
            add("G.FMT.08", i, ";;")
        # G.NAM.02 Pascal 函数名
        for m in re.finditer(r"function\s+([A-Z]\w*)", ln):
            add("G.NAM.02", i, f"function {m.group(1)}")
        # G.NAM.03 蛇形变量
        for m in re.finditer(r"\blet\s+([a-z]+_[a-z_]+)\s*[:=]", ln):
            add("G.NAM.03", i, f"let {m.group(1)}")
        # G.FMT.02 行宽
        if len(ln) > 120:
            add("G.FMT.02", i, f"行宽 {len(ln)}>120")
        # XTS.CHECK.ERROR_CODE.01 错误码转换
        if "as BusinessError" in ln:
            add("XTS.CHECK.ERROR_CODE.01", i, "as BusinessError")
        # G.FMT.11 空循环体
        if re.search(r"(for|while)\s*\([^;\n]*;[^;\n]*;[^;\n]*\)\s*;", ln):
            add("G.FMT.11", i, "空循环体")
        # XTS.CHECK.TCNUMBER.01 用例编号（\bit\( 词边界避免 onWait 误报）
        if re.search(r"\bit\(\s*'(?!SUB_)", ln):
            add("XTS.CHECK.TCNUMBER.01", i, ln.strip()[:60])
        # G.FMT.10 大括号同行
        if re.search(r"\)\s*$", ln) and i < len(lines) and re.match(r"^\s*\{", lines[i]):
            add("G.FMT.10", i, "大括号未与语句同行")

    # COMPILE.IMPORT.01 import 错位（import 出现在非顶部代码之后）
    seen_code = False
    for i, ln in enumerate(lines, 1):
        st = ln.strip()
        if st.startswith("import ") or st.startswith("//") or st == "" or st.startswith("/*") or st.startswith("*"):
            if seen_code and st.startswith("import "):
                add("COMPILE.IMPORT.01", i, "import 在代码之后")
            continue
        if st.startswith("import"):
            if seen_code:
                add("COMPILE.IMPORT.01", i, "import 在代码之后")
            continue
        seen_code = True

    # COMPILE.ANY.01 显式 any/unknown 类型标注
    for i, ln in enumerate(lines, 1):
        if re.search(r":\s*(any|unknown)\b", ln) and not ln.strip().startswith("//"):
            add("COMPILE.ANY.01", i, ln.strip()[:60])

    # ---- 启发类规则 ----
    # G.EXT.01 类属性无修饰符（行内属性声明：name: type = ...;）
    for i, ln in enumerate(lines, 1):
        if re.match(r"^\s+(?!public |private |protected )[a-zA-Z_]\w*\s*:\s*"
                    r"(string|number|boolean|LocalStorage|Array|Record|object|any)\s*[=;]", ln):
            add("G.EXT.01", i, ln.strip()[:60])

    # XTS.CHECK.ASYNC_TESTCASE.01 .then/.catch 分支无 done()
    for m in re.finditer(r"\.(then|catch)\(\([^)]*\)\s*=>\s*\{", text):
        # 找回调块结束（简易括号配对），块内无 done( 则违规
        start = text.find("{", m.start())
        depth = 0
        j = start
        while j < len(text):
            if text[j] == "{":
                depth += 1
            elif text[j] == "}":
                depth -= 1
                if depth == 0:
                    break
            j += 1
        block = text[start:j + 1]
        if "done(" not in block:
            line_no = text.count("\n", 0, m.start()) + 1
            add("XTS.CHECK.ASYNC_TESTCASE.01", line_no, f".{m.group(1)} 分支无 done()")

    # XTS.CHECK.ASYNC_TESTCASE.02 await 在 try/catch 外
    stack: list[str] = []
    for i, ln in enumerate(lines, 1):
        s = ln.strip()
        if s.startswith("await ") and "try" not in stack and "catch" not in stack:
            if not any(e in s for e in AWAIT_EXEMPT):
                add("XTS.CHECK.ASYNC_TESTCASE.02", i, ln.strip()[:60])
        _update_stack(ln, stack)

    # G.FMT.12 switch case 缩进
    for i, ln in enumerate(lines, 1):
        m = re.match(r"^(\s*)switch\s*\(", ln)
        if m:
            sw_ind = len(m.group(1))
            for j in range(i + 1, min(i + 20, len(lines) + 1)):
                cm = re.match(r"^(\s*)(case|default)\b", lines[j - 1])
                if cm:
                    if len(cm.group(1)) != sw_ind + 2:
                        add("G.FMT.12", j, f"case 缩进 {len(cm.group(1))}（期望 {sw_ind + 2}）")
                elif lines[j - 1].strip() == "}":
                    break

    # COMPILE.PRIVATE.01 private 字段类外访问（粗检：private X 声明 + 类外 .X 访问）
    _check_private_fields(text, lines, add)

    return hits


def _update_stack(line: str, stack: list[str]) -> None:
    """维护 try/catch 块栈（与提交脚本 wrap 逻辑一致）。"""
    pos = 0
    while True:
        o = line.find("{", pos)
        c = line.find("}", pos)
        if o == -1 and c == -1:
            break
        if o != -1 and (c == -1 or o < c):
            pre = line[:o].rstrip()
            if re.search(r"(^|[\s;})])try\s*$", pre):
                stack.append("try")
            elif re.search(r"catch\s*\([^)]*\)\s*$", pre):
                stack.append("catch")
            else:
                stack.append("other")
            pos = o + 1
        else:
            if stack:
                stack.pop()
            pos = c + 1


def _check_private_fields(text: str, lines: list[str], add) -> None:
    """COMPILE.PRIVATE.01：private 字段名出现在类外 .field 访问。

    粗检：收集 `private X: type` 字段名；对每个名字，找 `\b(?!this\.)\.X\b` 的访问位置，
    且该访问不在声明所属类的 `{...}` 块内（简化：不在声明行后最近类块内，命中即提示人工确认）。
    """
    priv_fields = set(re.findall(r"private\s+([A-Za-z_]\w*)\s*:", text))
    for f in priv_fields:
        for m in re.finditer(rf"(?<!this)\.{f}\b", text):
            # 排除类型声明处本身
            line_no = text.count("\n", 0, m.start()) + 1
            ln = lines[line_no - 1]
            if re.match(rf"^\s*private\s+{f}\s*:", ln):
                continue
            if re.match(rf"^\s*public\s+{f}\s*:", ln):
                continue
            add("COMPILE.PRIVATE.01", line_no, f".{f} 类外访问（确认访问范围）")


def collect_files(paths: list[str]) -> list[Path]:
    out: list[Path] = []
    for p in paths:
        p = Path(p)
        if p.is_file():
            if p.suffix in (".ets", ".ts", ".js"):
                out.append(p)
        elif p.is_dir():
            for f in sorted(p.rglob("*")):
                if f.is_file() and f.suffix in (".ets", ".ts", ".js"):
                    if any(seg in f.parts for seg in EXCLUDE_DIRS):
                        continue
                    if f.name in EXCLUDE_NAMES:
                        continue
                    out.append(f)
    return out


def main() -> None:
    ap = argparse.ArgumentParser(description="代码规范/门禁/编译规则自检（方案库驱动）")
    ap.add_argument("paths", nargs="+", help="文件或目录")
    ap.add_argument("--rule", default="", help="只检查指定规则（逗号分隔）")
    ap.add_argument("--json", action="store_true", help="JSON 输出")
    ap.add_argument("--strict", action="store_true", help="有违规退出码 1")
    args = ap.parse_args()

    rules = load_rules()
    rule_ids = [r["id"] for r in rules]
    want = set(args.rule.split(",")) if args.rule else set()

    all_hits: list[dict] = []
    for f in collect_files(args.paths):
        for h in scan_file(f):
            if want and h["rule"] not in want:
                continue
            all_hits.append(h)

    by_rule: dict[str, list[dict]] = {}
    for h in all_hits:
        by_rule.setdefault(h["rule"], []).append(h)

    if args.json:
        print(json.dumps({"total": len(all_hits),
                          "by_rule": {k: len(v) for k, v in by_rule.items()},
                          "hits": all_hits}, ensure_ascii=False))
    else:
        rmap = {r["id"]: r for r in rules}
        for rid in sorted(by_rule):
            r = rmap.get(rid, {})
            print(f"\n[{rid}] {r.get('name', '')} ({r.get('category', '')}/{r.get('severity', '')})"
                  f" — {len(by_rule[rid])} 处")
            for h in by_rule[rid][:10]:
                print(f"  {h['file']}:{h['line']}  {h['msg']}")
            if len(by_rule[rid]) > 10:
                print(f"  ... 共 {len(by_rule[rid])} 处")
            print(f"  修复: {r.get('fix', '')}")
        print(f"\n共 {len(all_hits)} 处违规，涉及 {len(by_rule)} 条规则")

    sys.exit(1 if (all_hits and args.strict) else 0)


if __name__ == "__main__":
    main()
