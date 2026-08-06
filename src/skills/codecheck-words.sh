#!/usr/bin/env bash
# Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

# WordsTool 本地粗查：扫描本目录下 XTS skill 文档。
# 模式集中在此脚本，避免文档自触发门禁。
# 用法（在 napi_generator 仓库根）：
#   bash src/skills/codecheck-words.sh [skill 目录名 …]
# 默认：ohxtsstatic ohxtsdynamic ohos-gate-compliance；可追加 ohxtscapi 等目录名
#
# skill 仓提交前完整检查请用：
#   bash src/skills/ohos-gate-compliance/scripts/precheck_skill_commit.sh

set -euo pipefail

SKILLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ $# -gt 0 ]]; then
  DIRS=("$@")
else
  DIRS=(ohxtsstatic ohxtsdynamic ohos-gate-compliance xts_shared xts-develop-master-cycle)
fi

SCAN_PATHS=()
for name in "${DIRS[@]}"; do
  path="${SKILLS_ROOT}/${name}"
  if [[ -d "$path" ]]; then
    SCAN_PATHS+=("$path")
  else
    echo "跳过（不存在）: $path" >&2
  fi
done

if [[ ${#SCAN_PATHS[@]} -eq 0 ]]; then
  echo "无有效扫描目录" >&2
  exit 1
fi

GATE_SCRIPT="${SKILLS_ROOT}/ohos-gate-compliance/scripts/scan_wordstool_docs.py"
PY_GATE="${SKILLS_ROOT}/ohos-gate-compliance/scripts/scan_skill_repo_gate.py"

echo "--- scan_wordstool_docs.py ---"
python3 "$GATE_SCRIPT" "${SCAN_PATHS[@]}"
WT_RC=$?

echo "--- scan_skill_repo_gate.py ---"
python3 "$PY_GATE" "${SCAN_PATHS[@]}"
PY_RC=$?

if [[ $WT_RC -ne 0 || $PY_RC -ne 0 ]]; then
  exit 1
fi
exit 0
