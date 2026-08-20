#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""失败处置器：依赖辅助 HAP（rely 应用）构建安装。"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from common.paths import REPO  # noqa: E402
from common.proj_utils import resolve_deps  # noqa: E402

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from test_one import build_dep_hap, build_dep_module  # noqa: E402


def handle_deps(proj: Path, match: dict, err_file: str = "") -> str:
    """16000001/not installed：构建并安装依赖辅助 HAP（Test.json kits 解析）。

    返回处置说明；已构建/已安装的动作列出。
    """
    actions = []
    rel = str(proj.relative_to(REPO)) if proj.is_relative_to(REPO) else str(proj)
    deps = resolve_deps(rel)
    if not deps:
        return "Test.json 无 kits 依赖；检查目标 bundle 是否为本工程另一模块（跨模块 call 需指定 moduleName）"
    for dp in deps:
        if "::" in dp:
            dproj, dmod = dp.split("::", 1)
            ok = build_dep_module(dproj, dmod)
            actions.append(f"{'✅' if ok else '❌'} 模块依赖 {dproj}::{dmod} {'构建+签名完成' if ok else '构建失败'}")
        else:
            ok = build_dep_hap(dp)
            actions.append(f"{'✅' if ok else '❌'} 依赖 {dp} {'构建+签名完成' if ok else '构建失败'}")
    actions.append("重新执行 test_one.py（安装顺序：先清理设备 → 再装依赖 → 装测试 HAP）")
    return "；".join(actions)


if __name__ == "__main__":
    from pathlib import Path as _P
    for rel in sys.argv[1:]:
        print(handle_deps(_P("/root/aiSkill/develop/xts_acts") / rel, {}))
