#!/usr/bin/env bash
# 安装 napi_generator pre-commit hook（skill 门禁，仅提交 src/skills 时触发）。
# 用法: bash install_hooks.sh [napi_generator 仓库路径]
set -euo pipefail

REPO="${1:-/root/aiSkill/napi_generator}"
HOOK_SRC="$(cd "$(dirname "$0")" && pwd)/hooks/pre-commit.skill-gate"
HOOK_DST="$REPO/.git/hooks/pre-commit"

if [ ! -d "$REPO/.git" ]; then
  echo "error: $REPO 不是 git 仓库" >&2
  exit 1
fi
if [ ! -f "$HOOK_SRC" ]; then
  echo "error: 未找到 hook 模板 $HOOK_SRC" >&2
  exit 1
fi

if [ -f "$HOOK_DST" ] && ! grep -q "skill-gate" "$HOOK_DST" 2>/dev/null; then
  cp "$HOOK_DST" "$HOOK_DST.bak.$(date +%Y%m%d_%H%M%S)"
  echo "[备份] 已有 pre-commit 已备份"
fi
cp "$HOOK_SRC" "$HOOK_DST"
chmod +x "$HOOK_DST"
echo "✅ skill 门禁 pre-commit 已安装: $HOOK_DST"
echo "   （仅提交 napi_generator/src/skills 时触发，其余仓库/目录不影响）"
