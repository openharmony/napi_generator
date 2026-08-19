#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""失败处置器：签名类错误（11111002/9568329/9568344/202/1011/FA release）。"""
from __future__ import annotations

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from common.paths import REPO  # noqa: E402


def _get_bundle(proj: Path) -> str:
    try:
        m = re.search(r'"bundleName"\s*:\s*"([^"]+)"',
                      (proj / "AppScope/app.json5").read_text(errors="replace"))
        return m.group(1) if m else ""
    except OSError:
        return ""


def handle_sign_error(proj: Path, match: dict, err_file: str = "") -> str:
    """11111002 Certificates error：profile 与 HAP bundle 不匹配 / 同 bundle 证书不一致。

    返回处置说明（已执行的动作）。
    """
    bundle = _get_bundle(proj)
    actions = []
    # 同 bundle 多 hap 必须同一套证书：重签全部 unsigned HAP（统一材料天然同源）
    if bundle:
        actions.append(f"确认 bundle={bundle} 的所有 HAP 使用同一套证书（sign/sign_one.py 统一材料保证同源）")
    actions.append("使用 --profile release 重签；若测试 HAP bundle 与主包不同，确认 profile 按各自 bundle 生成")
    return "；".join(actions)


def handle_privilege(proj: Path, match: dict, err_file: str = "") -> str:
    """9568344/202：system 特权签名（release + hos_system_app + AllowAppUsePrivilegeExtension）。"""
    actions = []
    actions.append("用 system 签名重签（sign_one.py --profile system）：app-feature=hos_system_app + AllowAppUsePrivilegeExtension")
    actions.append("注意：app-privilege-capabilities 必须大驼峰 AllowAppUsePrivilegeExtension（小驼峰无效）；模板 bundle-name 必须替换为实际 bundle")
    actions.append("同 bundle 各 hap app-feature 必须一致；更换签名后先 bm uninstall 再装")
    return "；".join(actions)


def handle_fa_release(proj: Path, match: dict, err_file: str = "") -> str:
    """FA 应用（config.json）9568344：debug profile 绑 development-certificate → release 签名。"""
    return ("FA 模型工程用 release profile 签名（UnsgnedReleasedProfileTemplate + profile release key "
            "+ 重排链 leaf-first），不用 debug")


if __name__ == "__main__":
    import json
    for rel in sys.argv[1:]:
        print(handle_sign_error(Path("/root/aiSkill/develop/xts_acts") / rel, {}))
