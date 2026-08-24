#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""失败处置器：运行类（16000001/202/1011/挂起/NO_RESULT/App died/设备）。"""
from __future__ import annotations

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from common import hdc_utils  # noqa: E402


def handle_app_died(proj: Path, match: dict, err_file: str = "") -> str:
    """App died/启动失败：查 faultlog 与 hilog；NATIVE 类多为设备能力限制。"""
    fl = hdc_utils.faultlog_list().strip().splitlines()[:5]
    actions = ["查 faultlog: " + (", ".join(fl) if fl else "(空)")]
    actions.append("hilog 定位：hdc_utils.hilog_grep('<测试前缀>')；hilog -r 后重跑单套件")
    actions.append("NATIVE/taskpool 类全失败 → 3.2 设备无法运行 API26 NATIVE 库（libentry.so 版本不兼容）→ 设备能力限制，历史 PASS 保留")
    actions.append("多实例/事件类首次失败 → aa force-stop 相关 bundle + hilog -r 后重跑即过")
    return "；".join(actions)


def handle_ability_not_found(proj: Path, match: dict, err_file: str = "") -> str:
    """16000002/ability not found：启动方式/TestRunner -a 名/跨模块 moduleName。"""
    actions = []
    if re.search(r"16000002", err):
        actions.append("stage 扩展启动用 startServiceExtensionAbility（不是 startAbility）；跨模块 call 指定 moduleName")
        actions.append("202 NOT_SYSTEM_APP → 调用方也需 hos_system_app 签名（system 签名）")
    if re.search(r"ability does not exist", err):
        actions.append("检查 TestRunner 的 -a 名（MainAbility vs TestAbility，勿写死）→ 与 HAP module.json abilities 对齐")
    actions.append("aa start 解析到主包同名 EntryAbility → 只装测试 HAP 或 aa start 带 -m entry_test")
    return "；".join(actions)


def handle_hung(proj: Path, match: dict, err_file: str = "") -> str:
    """挂起/NO_RESULT：屏幕态 → 权限 → 代码；openLink 回调 3.2 限制。"""
    hdc_utils.keep_awake()
    actions = ["已执行 power-shell wakeup + setmode 602（常亮）"]
    actions.append("单条用例 >60s 未完成即中止查因（hilog grep 用例名定位卡点），禁等 240s+ 超时")
    actions.append("openLink 回调形式卡死 → 3.2 只实现 promise 重载（设备限制，promise 用例正常）")
    actions.append("执行用例进程被杀 → 查 faultlog + hilog 崩溃栈")
    return "；".join(actions)


def handle_testrunner(proj: Path, match: dict, err_file: str = "") -> str:
    """TestRunner not found：FA 需 -p package-name；ohosTest 补 testRunner 配置。"""
    actions = ["FA 测试 aa test 加 -p <package-name>（Test.json driver.package-name）"]
    actions.append("ohosTest config.json 缺 testRunner 段（name/srsPath）→ 补配置；改 config 后必须清理 build 重编（hvigor 缓存不重新打包 TestRunner）")
    return "；".join(actions)


def handle_device(proj: Path, match: dict, err_file: str = "") -> str:
    """设备断连/多设备：重启 hdc server + tconn；-t 指定目标。"""
    actions = []
    if "multiple targets" in err or "need connect-key" in err:
        actions.append("多设备：所有 hdc 命令加 -t <ip>:<port>；必要时 hdc tconn <其它IP>:8710 -remove 只留一台")
    else:
        ok = hdc_utils.ensure_device(retries=3)
        actions.append(f"hdc start → tconn 重连: {'✅ 在线' if ok else '❌ 仍离线（设备网络/供电检查）'}")
    return "；".join(actions)


if __name__ == "__main__":
    rel = sys.argv[1] if len(sys.argv) > 1 else ""
    err = sys.argv[2] if len(sys.argv) > 2 else ""
    fn = sys.argv[3] if len(sys.argv) > 3 else "handle_hung"
    print(globals()[fn](Path("/root/aiSkill/develop/xts_acts") / rel, {}, err))
