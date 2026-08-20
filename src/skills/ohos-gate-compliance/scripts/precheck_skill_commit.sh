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

# skill 仓（napi_generator/src/skills）提交前本地门禁。
# 用法（仓库根）：
#   bash src/skills/ohos-gate-compliance/scripts/precheck_skill_commit.sh
#   bash src/skills/ohos-gate-compliance/scripts/precheck_skill_commit.sh ohxtsstatic ohhdc

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILLS_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

if [[ $# -gt 0 ]]; then
  DIRS=("$@")
else
  DIRS=(
    ohos-gate-compliance
    ohxtsstatic
    ohxtsdynamic
    ohxtscapi
    xts_shared
    xts-develop-master-cycle
    ohhdc
  )
fi

SCAN_PATHS=()
for name in "${DIRS[@]}"; do
  if [[ -d "$SKILLS_ROOT/$name" ]]; then
    SCAN_PATHS+=("$SKILLS_ROOT/$name")
  elif [[ -d "$name" ]]; then
    SCAN_PATHS+=("$(cd "$name" && pwd)")
  else
    echo "skip missing: $name" >&2
  fi
done

[[ ${#SCAN_PATHS[@]} -gt 0 ]] || { echo "no scan paths" >&2; exit 1; }

echo "=== WordsTool docs/scripts ==="
set +e
python3 "$SCRIPT_DIR/scan_wordstool_docs.py" "${SCAN_PATHS[@]}"
WT_RC=$?
echo "=== Python file/func/shell/name ==="
python3 "$SCRIPT_DIR/scan_skill_repo_gate.py" "${SCAN_PATHS[@]}"
PY_RC=$?
echo "=== py_compile ==="
COMP_RC=0
while read -r f; do
  python3 -m py_compile "$f" || COMP_RC=1
done < <(find "${SCAN_PATHS[@]}" -name '*.py' -not -path '*/__pycache__/*')
set -e
if [[ $WT_RC -ne 0 || $PY_RC -ne 0 || $COMP_RC -ne 0 ]]; then
  echo "precheck_skill_commit: FAIL (wt=$WT_RC py=$PY_RC compile=$COMP_RC)" >&2
  exit 1
fi
echo "precheck_skill_commit: OK"
