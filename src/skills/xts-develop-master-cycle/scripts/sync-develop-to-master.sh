#!/usr/bin/env bash
# Sync one XTS module from develop tree to master acts tree (run on kh-server).
set -euo pipefail

DEVELOP_ROOT="${DEVELOP_ROOT:-/root/aiSkill/develop/xts_acts_0622}"
MASTER_ACTS="${MASTER_ACTS:-/root/master/test/xts/acts}"
REMOTE_REL="${1:?usage: sync-develop-to-master.sh <remoteRel> [patch|full]}"
MODE="${2:-patch}"

SRC="${DEVELOP_ROOT}/${REMOTE_REL}"
DST="${MASTER_ACTS}/${REMOTE_REL}"

if [[ ! -d "$SRC" ]]; then
  echo "ERROR: develop module not found: $SRC" >&2
  exit 1
fi

mkdir -p "$DST"

if [[ "$MODE" == "full" ]]; then
  echo "[sync/full] rsync $SRC -> $DST"
  rsync -a --delete "${SRC}/" "${DST}/"
else
  echo "[sync/patch] rsync entry -> $DST"
  rsync -a "${SRC}/entry/" "${DST}/entry/"
  if [[ -f "${SRC}/BUILD.gn" ]]; then
    cp -f "${SRC}/BUILD.gn" "${DST}/BUILD.gn"
  fi
  if [[ -d "${SRC}/signature" ]]; then
    rsync -a "${SRC}/signature/" "${DST}/signature/"
  fi
  if [[ -f "${SRC}/Test.json" ]]; then
    cp -f "${SRC}/Test.json" "${DST}/Test.json"
  fi
  if [[ -f "${SRC}/build-profile.json5" ]]; then
    cp -f "${SRC}/build-profile.json5" "${DST}/build-profile.json5"
  fi
  # Web XTS: xtstestserver.har + oh-package deps (PR #40604)
  if [[ -d "${SRC}/libs" ]]; then
    mkdir -p "${DST}/libs"
    rsync -a "${SRC}/libs/" "${DST}/libs/"
  fi
  if [[ -f "${SRC}/oh-package.json5" ]]; then
    cp -f "${SRC}/oh-package.json5" "${DST}/oh-package.json5"
  fi
  if [[ -d "${SRC}/AppScope" ]]; then
    rsync -a "${SRC}/AppScope/" "${DST}/AppScope/"
  fi
  if [[ -f "${SRC}/hvigorfile.ts" ]]; then
    cp -f "${SRC}/hvigorfile.ts" "${DST}/hvigorfile.ts"
  fi
fi

# kh-server 本地 master 预编译 SDK 可能滞后；流水线 SDK 正确，设 APPLY_MASTER_LOCAL_PATCH=0 跳过。
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ "${APPLY_MASTER_LOCAL_PATCH:-1}" == "1" \
  && "$REMOTE_REL" == "arkui/ace_c_arkui_test_api26_systemmaterial" ]]; then
  bash "$SCRIPT_DIR/patches/systemmaterial-master-local.sh" "$DST"
fi

echo "SYNC_OK"
echo "  develop: $SRC"
echo "  master:  $DST"
