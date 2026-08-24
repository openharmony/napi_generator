#!/usr/bin/env bash
# 拦截暂存区 build-profile.json5 中非 CI 形式的 compileSdkVersion/targetSdkVersion。
# CI check_hvigor 要求 "M.S.F" 字符串（如 "26.0.0"）；禁止数字或 "26"。
set -euo pipefail

bad=0
while IFS= read -r -d '' f; do
  [ -z "$f" ] && continue
  case "$f" in
    */build-profile.json5|build-profile.json5) ;;
    *) continue ;;
  esac
  staged=$(git show ":$f" 2>/dev/null || true)
  [ -z "$staged" ] && continue
  if echo "$staged" | grep -Eq \
      '"(compileSdkVersion|targetSdkVersion)"[[:space:]]*:[[:space:]]*[0-9]+'; then
    echo "error: staged $f has numeric compileSdkVersion/targetSdkVersion" >&2
    echo "  CI requires \"M.S.F\" string e.g. \"26.0.0\" (ohxtsdynamic §9.10.3)." >&2
    echo "  Local hvigor 00306042: patch number only in working tree; restore before commit." >&2
    echo "$staged" | grep -nE 'compileSdkVersion|targetSdkVersion' >&2 || true
    bad=1
  fi
  if echo "$staged" | grep -Eq \
      '"(compileSdkVersion|targetSdkVersion)"[[:space:]]*:[[:space:]]*"[0-9]+"'; then
    echo "error: staged $f has short-string SDK version (want \"26.0.0\" not \"26\")" >&2
    echo "$staged" | grep -nE 'compileSdkVersion|targetSdkVersion' >&2 || true
    bad=1
  fi
done < <(git diff --cached --name-only -z 2>/dev/null || true)

exit "$bad"
