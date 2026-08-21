#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""问题方案库维护器：新问题 → 固化进 solutions.json（自动维护，实时强化脚本能力）。

用法（参数式或交互式）：
  python3 solutions/add_solution.py \
      --domain build|test \
      --pattern "<错误正则>" \
      --handler "fix_arkts.fix_xxx"（可选，处置脚本） \
      --hint "<处理指引>" [--source "<来源>"]

  python3 solutions/add_solution.py --collect --log <日志> --domain build
      # 从日志收集未匹配错误，逐个交互确认固化（未匹配 → 方案库）

行为：
- 校验 pattern 可编译、不与其他方案重复
- handler 指向的处置脚本模块不存在时，自动在对应 domain 目录生成骨架
  （build→build/fixers/fix_xxx.py，test→test/handlers/handle_xxx.py）
- 写入 solutions.json 后，后续 search_solution.py 即可检索复用
"""
from __future__ import annotations

import argparse
import importlib
import json
import re
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.paths import REPO as _REPO  # noqa: E402
SOLUTIONS_FILE = Path(__file__).resolve().parent / "solutions.json"
FIXER_DIR = Path(__file__).resolve().parents[1] / "build" / "fixers"
HANDLER_DIR = Path(__file__).resolve().parents[1] / "test" / "handlers"

HANDLER_TEMPLATE = '''#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""处置脚本骨架（由 add_solution.py 生成）：{desc}。

实现 fix(proj: Path, match: dict, err_file: str) -> list[str]（返回改动文件列表）。
"""
from __future__ import annotations

import re
from pathlib import Path


def {fn_name}(proj: Path, match: dict, err_file: str = "") -> list[str]:
    """TODO: 实现处置逻辑。match 为 pattern 的 groupdict。"""
    changed = []
    # 示例：读取报错文件并应用修复
    # files = [Path(err_file)] if err_file and Path(err_file).is_file() else []
    # for f in files:
    #     t = f.read_text(errors="replace")
    #     t2 = re.sub(r"...", r"...", t)
    #     if t2 != t:
    #         f.write_text(t2)
    #         changed.append(str(f))
    return changed


if __name__ == "__main__":
    import sys as _sys
    for p in _sys.argv[1:]:
        print({fn_name}(Path(p), {{}}))
'''


def load() -> list[dict]:
    return json.loads(SOLUTIONS_FILE.read_text())["solutions"]


def save(solutions: list[dict]) -> None:
    data = json.loads(SOLUTIONS_FILE.read_text())
    data["solutions"] = solutions
    SOLUTIONS_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=1))


def validate(pattern: str) -> bool:
    try:
        re.compile(pattern)
        return True
    except re.error as e:
        print(f"❌ pattern 非法: {e}")
        return False


def ensure_handler_script(domain: str, handler: str, desc: str) -> Path | None:
    """handler 模块不存在时生成骨架脚本。返回文件路径或 None。"""
    if not handler:
        return None
    mod_name, fn_name = handler.split(".")
    if mod_name.startswith("fix_"):
        target_dir, pkg = FIXER_DIR, "build.fixers"
    elif mod_name.startswith("handle_"):
        target_dir, pkg = HANDLER_DIR, "test.handlers"
    else:
        print(f"⚠️ handler 模块名应以 fix_/handle_ 开头（{handler}），跳过骨架生成")
        return None
    script = target_dir / f"{mod_name}.py"
    if script.exists():
        return script
    try:
        importlib.import_module(f"{pkg}.{mod_name}")
        return script  # 已是包成员
    except ImportError:
        pass
    script.write_text(HANDLER_TEMPLATE.format(fn_name=fn_name, desc=desc))
    print(f"📄 已生成处置脚本骨架: {script}")
    return script


def validate_handler(domain: str, handler: str) -> bool:
    """handler 指向的模块.函数必须存在（不存在则提示生成骨架）。"""
    if not handler:
        return True
    mod_name, fn_name = handler.split(".")
    try:
        if mod_name.startswith("fix_"):
            importlib.import_module(f"build.fixers.{mod_name}")
        elif mod_name.startswith("handle_"):
            importlib.import_module(f"test.handlers.{mod_name}")
        else:
            importlib.import_module(mod_name)
    except ImportError:
        print(f"⚠️ 处置模块 {mod_name} 不存在，将生成骨架（需手动实现 {fn_name}）")
        return True
    try:
        mod = sys.modules.get(f"build.fixers.{mod_name}") or sys.modules.get(
            f"test.handlers.{mod_name}") or sys.modules.get(mod_name)
        if mod is not None and not hasattr(mod, fn_name):
            print(f"⚠️ 模块 {mod_name} 中无函数 {fn_name}（请实现或改 handler 引用）")
    except Exception:
        pass
    return True


def add(domain: str, pattern: str, handler: str, hint: str, source: str) -> bool:
    if not validate(pattern):
        return False
    solutions = load()
    # 重复检测（同 domain 同 pattern）
    for s in solutions:
        if s["domain"] == domain and s["pattern"] == pattern:
            print(f"⚠️ 已存在相同方案: {s['id']}（如要更新请直接编辑 solutions.json）")
            return False
    # 生成 id
    base = re.sub(r"[^a-z0-9_]+", "_", pattern[:40].lower()).strip("_")[:36] or "solution"
    n = 1
    sid = base
    while any(s["id"] == sid for s in solutions):
        n += 1
        sid = f"{base}_{n}"
    solutions.append({
        "id": sid, "domain": domain, "category": "",
        "pattern": pattern, "handler": handler, "hint": hint,
        "source": source or "add_solution.py 新增",
        "count": 0, "last_hit": "",
    })
    save(solutions)
    ensure_handler_script(domain, handler, hint)
    validate_handler(domain, handler)
    print(f"✅ 已固化方案 [{domain}] {sid}（库内共 {len(solutions)} 条，下次检索即可复用）")
    return True


def collect_from_log(log: Path, domain: str) -> None:
    """从日志收集未匹配错误，逐个确认固化。"""
    text = re.sub(r"\x1b\[[0-9;]*m", "", log.read_text(errors="replace"))
    errs = [m.group(1).strip() for m in
            re.finditer(r"(?m)^\s*(?:ERROR|Error Message)\s*[:：]\s*([^\n]{10,600})", text)]
    if not errs:
        print("日志无错误")
        return
    print(f"日志共 {len(errs)} 条错误；已入库的直接跳过，未匹配的逐个询问：")
    for e in errs:
        from search_solution import search
        if search(e, domain):
            continue
        print(f"\n[未匹配] {e[:160]}")
        ans = input("  固化入库？[y=带指引入库 / n=跳过 / q=退出] ").strip().lower()
        if ans == "q":
            break
        if ans != "y":
            continue
        hint = input("  处理指引（回车默认「待分析，解决后回写」）: ").strip()
        handler = input("  处置脚本（模块.函数，可空，如 fix_arkts.fix_xxx）: ").strip()
        add(domain, re.escape(e), handler, hint or "待分析，解决后回写",
            f"从 {log.name} 收集")


def main() -> None:
    ap = argparse.ArgumentParser(description="问题方案库维护（新问题固化）")
    ap.add_argument("--domain", choices=["build", "test"], default="build")
    ap.add_argument("--pattern", default="", help="错误正则（用于检索匹配）")
    ap.add_argument("--handler", default="", help="处置脚本（模块.函数，可空）")
    ap.add_argument("--hint", default="", help="处理指引")
    ap.add_argument("--source", default="", help="来源说明")
    ap.add_argument("--collect", action="store_true", help="从日志收集未匹配错误")
    ap.add_argument("--log", default="", help="--collect 时的日志路径")
    args = ap.parse_args()

    if args.collect:
        if not args.log:
            print("--collect 需要 --log <日志路径>")
            sys.exit(1)
        collect_from_log(Path(args.log), args.domain)
        return
    if not args.pattern:
        print("需要 --pattern（或用 --collect 从日志收集）")
        sys.exit(1)
    sys.exit(0 if add(args.domain, args.pattern, args.handler, args.hint, args.source) else 1)


if __name__ == "__main__":
    main()
