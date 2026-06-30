#!/usr/bin/env bash
# Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# 从 arkUISkill 拉取 arkui_capi_xts_generator-v3 到本 skill 目录（本地使用，勿提交生成器正文）
set -euo pipefail

SKILL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DST="${SKILL_DIR}/arkui-capi-xts-generator-v3"
REPO="${ARKUI_SKILL_REPO:-https://gitcode.com/qq_44921954/arkUISkill.git}"
TMP="$(mktemp -d)"

cleanup() { rm -rf "$TMP"; }
trap cleanup EXIT

echo "克隆 $REPO ..."
git clone --depth 1 "$REPO" "$TMP"
mkdir -p "$DST"
rsync -a --delete \
  --exclude '.git' \
  --exclude 'README.md' \
  "$TMP/arkui_capi_xts_generator-v3/" "$DST/"
echo "✓ 已更新: $DST"
ls "$DST" | head -10
