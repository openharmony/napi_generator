#!/usr/bin/env sh
# 剥离 Cursor 合著行，Signed-off-by 与 Co-authored-by: Agent 之间空一行。
# 用法: sanitize-coauthor.sh <path-to-commit-msg-file>
set -eu

MSG_FILE="${1:?usage: sanitize-coauthor.sh <commit-msg-file>}"

if [ ! -f "$MSG_FILE" ]; then
  exit 0
fi

tmp="${MSG_FILE}.san.tmp"
trap 'rm -f "$tmp"' EXIT

sed '/^Co-authored-by:[[:space:]]*Cursor/d' "$MSG_FILE" \
  | sed '/cursoragent@cursor\.com/d' \
  | sed '/^Co-authored-by:[[:space:]]*Agent/d' \
  > "$tmp"

awk '
{
  lines[++n] = $0
  if ($0 ~ /^Signed-off-by:/) {
    signoff = n
  }
}
END {
  if (signoff == 0) {
    for (i = 1; i <= n; i++) {
      print lines[i]
    }
    if (n > 0 && lines[n] != "") {
      print ""
    }
    print "Co-authored-by: Agent"
    exit
  }
  for (i = 1; i <= n; i++) {
    print lines[i]
    if (i == signoff) {
      print ""
      print "Co-authored-by: Agent"
    }
  }
}
' "$tmp" > "$MSG_FILE"
trap - EXIT
