#!/usr/bin/env bash
# kh-server 本地 master 预编译 SDK 26 头文件滞后时的同步后补丁（流水线 SDK 正确，无需此补丁）。
set -euo pipefail

DST="${1:?usage: systemmaterial-master-local.sh <master_module_dir>}"

HELPERS="$DST/entry/src/main/cpp/systemMaterial/MaterialHelpers.h"
NODE_TEST="$DST/entry/src/main/cpp/systemMaterial/NodeSystemMaterialTest.cpp"

if [[ ! -f "$HELPERS" ]]; then
  echo "[patch] skip: $HELPERS not found" >&2
  exit 0
fi

cat > "$HELPERS" <<'EOF'
/*
 * Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef ARKUI_CAPI_SYSTEM_MATERIAL_HELPERS_H
#define ARKUI_CAPI_SYSTEM_MATERIAL_HELPERS_H

#include "common/common.h"
#include <arkui/native_dialog.h>
#include <arkui/native_material.h>
#include <arkui/native_node.h>

// kh-server master prebuilts SDK 26 头文件滞后；符号在设备侧 Ace native 动态库上解析。
#if !defined(OH_ARKUI_DIALOG_DISPLAY_MODE_SCREEN_BASED)
typedef enum {
    OH_ARKUI_DIALOG_DISPLAY_MODE_SCREEN_BASED = 0,
    OH_ARKUI_DIALOG_DISPLAY_MODE_WINDOW_BASED = 1,
} OH_ArkUI_DialogDisplayModeInSubWindow;
#endif

#ifdef __cplusplus
extern "C" {
#endif
int32_t OH_ArkUI_NativeModule_CustomDialog_SetSystemMaterialInOptions(
    ArkUI_CustomDialogOptions *options, ArkUI_ImmersiveMaterialHandle material);
int32_t OH_ArkUI_NativeModule_CustomDialog_SetSystemMaterial(
    ArkUI_NativeDialogHandle handle, ArkUI_ImmersiveMaterialHandle material);
int32_t OH_ArkUI_CustomDialog_SetDisplayModeInSubWindow(
    ArkUI_CustomDialogOptions *options, OH_ArkUI_DialogDisplayModeInSubWindow mode);
#ifdef __cplusplus
}
#endif

namespace ArkUICapiTest {

inline const ArkUI_NativeDialogAPI_1 *GetDialogApi()
{
    return reinterpret_cast<const ArkUI_NativeDialogAPI_1 *>(
        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_DIALOG, "ArkUI_NativeDialogAPI_1"));
}

inline ArkUI_NativeNodeAPI_1 *GetNodeApi()
{
    return reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(
        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, "ArkUI_NativeNodeAPI_1"));
}

inline ArkUI_ImmersiveMaterialHandle CreateMaterial(ArkUI_ImmersiveStyle style)
{
    return OH_ArkUI_NativeModule_ImmersiveMaterial_Create(style);
}

inline void DestroyMaterial(ArkUI_ImmersiveMaterialHandle handle)
{
    if (handle != nullptr) {
        OH_ArkUI_NativeModule_ImmersiveMaterial_Destroy(handle);
    }
}

} // namespace ArkUICapiTest

#endif
EOF

if [[ -f "$NODE_TEST" ]]; then
  python3 - "$NODE_TEST" <<'PY'
import re
import sys

path = sys.argv[1]
text = open(path, encoding="utf-8").read()
if "kNodeSystemMaterial" in text:
    print(f"[patch] NodeSystemMaterialTest already patched: {path}")
    sys.exit(0)

text = text.replace("NODE_SYSTEM_MATERIAL", "kNodeSystemMaterial")
insert = (
    "\nnamespace {\n"
    "constexpr ArkUI_NodeAttributeType kNodeSystemMaterial =\n"
    "    static_cast<ArkUI_NodeAttributeType>(PARAM_100 + PARAM_20 + PARAM_7);\n"
    "}\n"
)
text = re.sub(
    r"(namespace ArkUICapiTest \{\n)",
    r"\1" + insert,
    text,
    count=1,
)
open(path, "w", encoding="utf-8").write(text)
print(f"[patch] NodeSystemMaterialTest patched: {path}")
PY
fi

echo "[patch] applied kh-server local SDK shims -> $DST"
