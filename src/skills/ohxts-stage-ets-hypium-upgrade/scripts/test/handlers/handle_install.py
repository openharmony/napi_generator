#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""失败处置器：安装类（9568267/9568289/合包剥离/模块名）。"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from common.paths import REPO  # noqa: E402
from common.proj_utils import hap_meta  # noqa: E402


def handle_permission(proj: Path, match: dict, err_file: str = "") -> str:
    """9568289 grant request permissions failed：ACL 注入全部测试权限。"""
    return ("用 debug 模板签名（acls.allowed-acls 31 个测试权限）或 system 签名；"
            "确认 profile 权限列表覆盖工程 module.json5 的 requestPermissions")


def handle_module_name(proj: Path, match: dict, err_file: str = "") -> str:
    """module not found：测试模块名从 HAP module.json 解析；或 module.json5 name 改 entry_test。"""
    meta = hap_meta(proj)
    actions = []
    if meta.get("tmod"):
        actions.append(f"测试 HAP 实际模块名={meta['tmod']}，aa test 用 -m {meta['tmod']}")
    actions.append("旧工程 ohosTest module.json5 的 name 应为 entry_test + Test.json module-name 同步")
    actions.append("例外：workercontexttest 的 0100 断言 ctx=='entry'，模块名必须保持 entry（-m entry 运行）")
    return "；".join(actions)


def handle_install_conflict(proj: Path, match: dict, err_file: str = "") -> str:
    """install entry already exist：同 bundle 单 module 限制 → 只装测试 HAP。"""
    return ("同 bundle 单 module 限制：xts 测试 HAP 自包含全部 abilities，只装测试 HAP"
            "（不要同时装主 HAP）")


def handle_strip_hint(proj: Path, match: dict, err_file: str = "") -> str:
    """NDK 测试 HAP 合包冲突：剥离 entry 模块后与主 HAP 同装（主 HAP 提供 native）。"""
    return ("测试 HAP 是合包（pack.info 含 entry）→ 与主 HAP 冲突无法同装：剥离 pack.info 的 "
            "entry 模块后主 HAP+测试 HAP 同装；3.2 只解压 libs/arm/（非 arm64-v8a），主 HAP 提供 libs")


if __name__ == "__main__":
    import json
    rel = sys.argv[1] if len(sys.argv) > 1 else ""
    fn = sys.argv[2] if len(sys.argv) > 2 else "handle_permission"
    print(globals()[fn](Path("/root/aiSkill/develop/xts_acts") / rel, {}))
