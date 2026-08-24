#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""公共路径与环境常量：所有子功能脚本统一引用，禁止散落硬编码路径。"""
from __future__ import annotations

import os
from pathlib import Path

# ---- 根目录 ----
AISKILL = Path("/root/aiSkill")
REPO = AISKILL / "develop" / "xts_acts"          # 开发仓（master 先同步 upstream/master）
SKILL = AISKILL / ".claude" / "skills" / "ohxts-stage-ets-hypium-upgrade"
SCRIPTS = SKILL / "scripts"

# ---- 命令行工具链 ----
CLT = AISKILL / "command-line-tools"
NODE = CLT / "tool" / "node" / "bin" / "node"
HVIGOR_DIR = CLT / "hvigor" / "bin"
HVIGORW = CLT / "bin" / "hvigorw"                # hvigorw 包装脚本
HVIGORW_JS = HVIGOR_DIR / "hvigorw.js"           # node 直调入口（脚本内用这个更稳）
OHPM = CLT / "ohpm" / "bin" / "ohpm"
SDK_OPENHARMONY = CLT / "sdk" / "openharmony"    # OHOS_BASE_SDK_HOME
SDK_NORMAL = CLT / "sdk" / "default" / "openharmony" / "normal"  # OHOS_SDK_PATH

# ---- 签名材料（唯一证书源，所有项目复用，勿复制到每工程） ----
HAPSIGNER = Path("/root/master/developtools/hapsigner")
SIGN_MATERIALS = HAPSIGNER / "autosign" / "result"          # OHOS_HAPSIGNER_RESULT
SIGN_TEMPLATES_DIR = HAPSIGNER / "autosign"                 # Unsgned*ProfileTemplate.json 所在
HAP_SIGN_TOOL = HAPSIGNER / "dist" / "hap-sign-tool.jar"

# ---- 设备（默认 150；可用环境变量 OH_XTS_DEVICE 覆盖目标设备，如 "192.168.11.31:8710"） ----
DEVICE_IP = "192.168.13.150"
DEVICE_PORT = 8710
DEVICE = os.environ.get("OH_XTS_DEVICE", f"{DEVICE_IP}:{DEVICE_PORT}")

# ---- 进度与报告（数据留在 dongwei，脚本已迁入 skill） ----
DONGWEI = AISKILL / "develop" / "dongwei"
PROGRESS_DIR = DONGWEI / "进度"
XLSX = PROGRESS_DIR / "需求1进度表.xlsx"
TSV = PROGRESS_DIR / "test_summary.tsv"
BROADCAST_MD = PROGRESS_DIR / "进度播报.md"
ACTIVE_TXT = PROGRESS_DIR / "当前活动.txt"
FAILURE_LOG = PROGRESS_DIR / "失败分析记录.md"
CLOSE_LOG = PROGRESS_DIR / "闭环日志.log"
REPORT_ROOT = DONGWEI / "按子系统划分的报告"

# ---- 环境变量构造 ----
_PATH_DIRS = [
    CLT / "tool" / "node" / "bin",
    HVIGOR_DIR,
    CLT / "ohpm" / "bin",
    AISKILL,
]


def build_env() -> dict:
    """返回标准编译/测试/签名环境变量（PATH 追加 + OHOS 系列）。"""
    env = os.environ.copy()
    env["PATH"] = os.pathsep.join([str(d) for d in _PATH_DIRS] + [env.get("PATH", "")])
    env["OHOS_BASE_SDK_HOME"] = str(SDK_OPENHARMONY)
    env["HOS_CLT_PATH"] = str(CLT)
    env["OHOS_SDK_PATH"] = str(SDK_NORMAL)
    env["OHOS_HAPSIGNER_RESULT"] = str(SIGN_MATERIALS)
    env["OHOS_HAPSIGNER_SERVER_PORT"] = env.get("OHOS_HAPSIGNER_SERVER_PORT", "")
    env.setdefault("OHOS_HDC_SERVER_PORT", "8710")
    env.setdefault("JAVA_HOME", "")
    return env
