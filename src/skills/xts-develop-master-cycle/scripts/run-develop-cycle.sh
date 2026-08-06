#!/usr/bin/env bash
# Linux 一键：develop 同步 -> master 编译 -> xdevice -> summary_report.html
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=module-lib.sh
source "$SCRIPT_DIR/module-lib.sh"

usage() {
  cat <<'EOF'
用法: run-develop-cycle.sh [选项] <SuiteName>

示例:
  ./run-develop-cycle.sh ActsAceEtsModuleChipNoWearTest
  ./run-develop-cycle.sh --full-clean ActsAceEtsModuleAdvanceChipStaticTest
  ./run-develop-cycle.sh --skip-build --skip-sync ActsAceEtsModuleCounterTest

选项:
  --sync-mode patch|full   develop->master 同步模式（默认 patch）
  --skip-sync              跳过同步
  --skip-build             跳过编译（须已有 HAP）
  --skip-test              只同步+编译
  --full-clean             全量 clean 后重编
  --device SN              设备 SN（默认 modules.json _defaults.deviceSn）
  --test-class NAME        xdevice -ta class:NAME（可多次）
EOF
  exit 1
}

SUITE=""
SYNC_MODE="patch"
SKIP_SYNC=0
SKIP_BUILD=0
SKIP_TEST=0
FULL_CLEAN=0
TEST_CLASSES=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --sync-mode) SYNC_MODE="$2"; shift 2 ;;
    --skip-sync) SKIP_SYNC=1; shift ;;
    --skip-build) SKIP_BUILD=1; shift ;;
    --skip-test) SKIP_TEST=1; shift ;;
    --full-clean) FULL_CLEAN=1; shift ;;
    --device) DEVICE_SN="$2"; shift 2 ;;
    --test-class) TEST_CLASSES+=("$2"); shift 2 ;;
    -h|--help) usage ;;
    -*) echo "未知选项: $1" >&2; usage ;;
    *)
      if [[ -z "$SUITE" ]]; then SUITE="$1"; else usage; fi
      shift ;;
  esac
done

[[ -n "$SUITE" ]] || usage

if [[ -z "${DEVICE_SN:-}" ]]; then
  DEVICE_SN=$(python3 -c "import json; d=json.load(open('$MODULES_JSON')); print(d.get('_defaults',{}).get('deviceSn',''))")
fi

REMOTE_REL=$(lookup_remote_rel "$SUITE")
echo "=== [$SUITE] develop-cycle $(date '+%F %T') ==="
echo "  remoteRel: $REMOTE_REL"

if [[ "$SKIP_SYNC" -eq 0 ]]; then
  sync_develop_to_master "$REMOTE_REL" "$SYNC_MODE"
else
  echo "[sync] skip"
fi

if [[ "$SKIP_BUILD" -eq 0 ]]; then
  # 默认即作废 Test+Main HAP；--full-clean 额外清全部 stamp
  clean_module_build "$REMOTE_REL" "$SUITE" "$FULL_CLEAN"
  # 编后校验 modules.abc 新鲜度；假包则自动 full-clean 重编一次
  build_suite_with_freshness_gate "$SUITE" "$REMOTE_REL"
  stage_haps_to_testcases "$SUITE" "$REMOTE_REL"
else
  echo "[build] skip"
fi

if [[ "$SKIP_TEST" -eq 0 ]]; then
  ta_args=()
  if [[ ${#TEST_CLASSES[@]} -gt 0 ]]; then
    joined=$(IFS=,; echo "${TEST_CLASSES[*]}")
    ta_args=("class:$joined")
  fi
  run_xdevice_suite "$SUITE" "${ta_args[@]}"
else
  echo "[test] skip"
fi

echo "=== done ==="
