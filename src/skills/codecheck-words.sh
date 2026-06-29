#!/usr/bin/env bash
# WordsTool 本地粗查（模式集中在此脚本，避免 CODECHECK.md 自触发）
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIRS=(ohxtsstatic ohxtsdynamic)
rg -n '绝对路径|权威|Cursor 侧|`aa test`|[^a-z]L0[^0-9]' \
  "${DIRS[@]/#/$ROOT/}" || true
