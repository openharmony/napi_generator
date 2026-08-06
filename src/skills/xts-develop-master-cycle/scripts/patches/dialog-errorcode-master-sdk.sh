#!/usr/bin/env bash
# kh-server 本地 master 预编译 SDK 26 滞后时的头文件补齐（仅本地 GN 编过用）。
# 流水线 SDK 已含 @kit.ShareKit / DialogPresenter，**勿**将此脚本逻辑带入 develop 源码。
set -euo pipefail

MASTER_SDK="${MASTER_SDK:-/root/master/prebuilts/ohos-sdk/linux/26}"
CLT_SDK="${CLT_SDK:-/root/aiSkill/command-line-tools/sdk/default/openharmony/normal/26}"

overlay_file() {
  local rel="$1"
  local src="$2"
  local dst="$MASTER_SDK/$rel"
  if [[ ! -f "$src" ]]; then
    echo "[sdk-patch] skip missing src: $src" >&2
    return 0
  fi
  mkdir -p "$(dirname "$dst")"
  if [[ -f "$dst" && ! -f "${dst}.bak" ]]; then
    cp -a "$dst" "${dst}.bak"
  fi
  cp -afL "$src" "$dst"
  echo "[sdk-patch] overlay $rel"
}

echo "[sdk-patch] master=$MASTER_SDK clt=$CLT_SDK"
overlay_file "ets/kits/@kit.ArkUI.d.ts" "$CLT_SDK/ets/kits/@kit.ArkUI.d.ts"
overlay_file "ets/api/@ohos.arkui.dialog.d.ts" "$CLT_SDK/ets/api/@ohos.arkui.dialog.d.ts"
overlay_file "ets/api/@ohos.arkui.UIContext.d.ts" "$CLT_SDK/ets/api/@ohos.arkui.UIContext.d.ts"
overlay_file "ets/build-tools/ets-loader/kit_configs/@kit.ArkUI.json" \
  "$CLT_SDK/ets/build-tools/ets-loader/kit_configs/@kit.ArkUI.json"
overlay_file "ets/kits/@kit.ShareKit.d.ts" "$CLT_SDK/ets/kits/@kit.ShareKit.d.ts"
# ShareKit kit 配置与 HMS API 声明随 normal SDK 符号链接一并覆盖
if [[ -f "$CLT_SDK/ets/build-tools/ets-loader/kit_configs/@kit.ShareKit.json" ]]; then
  overlay_file "ets/build-tools/ets-loader/kit_configs/@kit.ShareKit.json" \
    "$CLT_SDK/ets/build-tools/ets-loader/kit_configs/@kit.ShareKit.json"
fi
HMS_API="$(readlink -f "$CLT_SDK/ets/kits/@kit.ShareKit.d.ts" 2>/dev/null || true)"
HMS_API="${HMS_API%/@kit.ShareKit.d.ts}"
if [[ -n "$HMS_API" && -f "$HMS_API/api/@hms.collaboration.systemShare.d.ts" ]]; then
  overlay_file "ets/api/@hms.collaboration.systemShare.d.ts" \
    "$HMS_API/api/@hms.collaboration.systemShare.d.ts"
fi
echo "[sdk-patch] done"
