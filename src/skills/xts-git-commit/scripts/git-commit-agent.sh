#!/usr/bin/env bash
# 安全提交：Signed-off-by 下一行 Co-authored-by: Agent；自动剥离 Cursor 合著行。
# 用法:
#   git-commit-agent.sh -sm "$(cat <<'EOF'
#   test(scope): 标题
#
#   说明。
#   EOF
#   )"
set -euo pipefail

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname "$0")" && pwd)
SANITIZE="$SCRIPT_DIR/sanitize-coauthor.sh"

if [ ! -x "$SANITIZE" ]; then
  echo "error: missing $SANITIZE" >&2
  exit 1
fi

msg=""
use_signoff=false

while [ $# -gt 0 ]; do
  case "$1" in
    -s)
      use_signoff=true
      shift
      ;;
    -sm)
      # 支持: -sm "msg"  或  -sm -m "msg"
      use_signoff=true
      shift
      if [ $# -gt 0 ] && [ "${1#-}" = "$1" ]; then
        msg="$1"
        shift
      fi
      ;;
    -m)
      shift
      msg="${1:-}"
      shift
      ;;
    -F|--file)
      echo "error: use -m message; -F bypasses sanitize" >&2
      exit 1
      ;;
    *)
      echo "error: unsupported arg: $1" >&2
      exit 1
      ;;
  esac
done

if [ -z "$msg" ]; then
  echo "usage: git-commit-agent.sh -sm \"\$(cat <<'EOF' ... EOF)\"" >&2
  exit 1
fi

# CI：build-profile compileSdkVersion 必须是 "26.0.0" 字符串，禁止数字入仓
CHECK_BP="$SCRIPT_DIR/check-staged-build-profile.sh"
if [ -x "$CHECK_BP" ]; then
  "$CHECK_BP" || exit 1
fi

# 本地软上限 1900（门禁硬上限 2000；预留缓冲，规避平台与 shortstat 统计偏差）
MAX_COMMIT_LINES=1900
shortstat=$(git diff --cached --shortstat 2>/dev/null || true)
if [ -n "$shortstat" ]; then
  ins=$(echo "$shortstat" | grep -oE '[0-9]+ insertion' | grep -oE '[0-9]+' || true)
  del=$(echo "$shortstat" | grep -oE '[0-9]+ deletion' | grep -oE '[0-9]+' || true)
  ins=${ins:-0}
  del=${del:-0}
  total=$((ins + del))
  if [ "$total" -ge "$MAX_COMMIT_LINES" ]; then
    echo "error: staged diff ${total} lines (ins=${ins} del=${del}) >= ${MAX_COMMIT_LINES} local soft limit; split commit (CI hard limit 2000)" >&2
    echo "  $shortstat" >&2
    exit 1
  fi
fi

tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT
printf '%s\n' "$msg" > "$tmp"

if [ "$use_signoff" = true ]; then
  name=$(git config user.name 2>/dev/null || true)
  email=$(git config user.email 2>/dev/null || true)
  if [ -n "$name" ] && [ -n "$email" ]; then
    signoff="Signed-off-by: $name <$email>"
    if ! grep -q '^Signed-off-by:' "$tmp"; then
      printf '\n%s\n' "$signoff" >> "$tmp"
    fi
  fi
fi

"$SANITIZE" "$tmp"

if ! grep -q '^Co-authored-by:[[:space:]]*Agent' "$tmp"; then
  echo "error: commit message must contain: Co-authored-by: Agent" >&2
  exit 1
fi
if grep -qi 'cursoragent@cursor\.com\|^Co-authored-by:[[:space:]]*Cursor' "$tmp"; then
  echo "error: IDE co-author still present after sanitize" >&2
  exit 1
fi

git commit -F "$tmp"
trap - EXIT
rm -f "$tmp"

if git log -1 --format='%B' | grep -qiE 'cursoragent@cursor\.com|^Co-authored-by:[[:space:]]*Cursor'; then
  echo "error: latest commit still contains IDE co-author; fix before push" >&2
  git log -1 --format=full
  exit 1
fi

git log -1 --format=full
