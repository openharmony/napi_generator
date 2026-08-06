#!/usr/bin/env bash
# 多 HAP 批次：依次同步、编译、xdevice，并生成汇总 HTML 索引。
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=module-lib.sh
source "$SCRIPT_DIR/module-lib.sh"

BATCH_NAME="${1:-recent_chip_counter_state}"
shift || true

SYNC_MODE="patch"
SKIP_SYNC=0
SKIP_BUILD=0
SKIP_TEST=0
FULL_CLEAN=0
FAIL_FAST=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --sync-mode) SYNC_MODE="$2"; shift 2 ;;
    --skip-sync) SKIP_SYNC=1; shift ;;
    --skip-build) SKIP_BUILD=1; shift ;;
    --skip-test) SKIP_TEST=1; shift ;;
    --full-clean) FULL_CLEAN=1; shift ;;
    --device) DEVICE_SN="$2"; shift 2 ;;
    --fail-fast) FAIL_FAST=1; shift ;;
    -h|--help)
      echo "用法: run-batch-cycle.sh [batch_name] [选项]"
      echo "  batch 名见 modules.json _batches（默认 recent_chip_counter_state）"
      exit 0 ;;
    *) echo "未知选项: $1" >&2; exit 1 ;;
  esac
done

SUITES=$(python3 - "$MODULES_JSON" "$BATCH_NAME" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
batch = sys.argv[2]
if batch not in data.get("_batches", {}):
    raise SystemExit(f"Unknown batch: {batch}")
for s in data["_batches"][batch]:
    print(s)
PY
)

if [[ -z "${DEVICE_SN:-}" ]]; then
  DEVICE_SN=$(python3 -c "import json; d=json.load(open('$MODULES_JSON')); print(d.get('_defaults',{}).get('deviceSn',''))")
fi

INDEX_DIR="$REPORT_ROOT/batch_$(date '+%Y%m%d_%H%M%S')_${BATCH_NAME}"
mkdir -p "$INDEX_DIR"
RESULTS_FILE="$INDEX_DIR/results.tsv"
echo -e "suite\tstatus\thtml_report" >"$RESULTS_FILE"

echo "=== batch [$BATCH_NAME] $(date '+%F %T') ==="

# 多 HAP：子 Suite 跑测不截图，仅合并后截一张汇总
export XDEVICE_SKIP_SHOT=1

while IFS= read -r suite; do
  [[ -n "$suite" ]] || continue
  echo ""
  echo "---------- $suite ----------"
  set +e
  args=(--sync-mode "$SYNC_MODE")
  [[ "$SKIP_SYNC" -eq 1 ]] && args+=(--skip-sync)
  [[ "$SKIP_BUILD" -eq 1 ]] && args+=(--skip-build)
  [[ "$SKIP_TEST" -eq 1 ]] && args+=(--skip-test)
  [[ "$FULL_CLEAN" -eq 1 ]] && args+=(--full-clean)
  [[ -n "${DEVICE_SN:-}" ]] && args+=(--device "$DEVICE_SN")

  out=$(bash "$SCRIPT_DIR/run-develop-cycle.sh" "${args[@]}" "$suite" 2>&1)
  rc=$?
  set -e
  echo "$out"

  html=$(echo "$out" | sed -n 's/^REPORT_HTML=//p' | tail -1)
  if [[ "$rc" -eq 0 ]]; then
    echo -e "${suite}\tPASS\t${html:-}" >>"$RESULTS_FILE"
  else
    echo -e "${suite}\tFAIL\t${html:-}" >>"$RESULTS_FILE"
    [[ "$FAIL_FAST" -eq 1 ]] && break
  fi
done <<<"$SUITES"

# 多 HAP 汇总：仅允许官方 xdevice summary_report.html（禁止自写 batch_index / 自定义汇总页）
MERGE_PY="$SCRIPT_DIR/merge-xdevice-reports.py"
python3 "$MERGE_PY" --out "$INDEX_DIR" --name "$BATCH_NAME" --from-tsv "$RESULTS_FILE"
echo "REPORT_HTML=$INDEX_DIR/summary_report.html"
# 整批只截这一张（Summary→最多 10 行 Module），不要对每个子 HAP 截
unset XDEVICE_SKIP_SHOT
SHOT="$SCRIPT_DIR/screenshot-xdevice-summary.sh"
if [[ -x "$SHOT" ]]; then
  set +e
  "$SHOT" "$INDEX_DIR/summary_report.html"
  set -e
fi

echo ""
echo "=== batch done ==="
echo "  xdevice 汇总: $INDEX_DIR/summary_report.html"
echo "  截图: $INDEX_DIR/summary_top.png"
echo "  明细 TSV: $RESULTS_FILE"
