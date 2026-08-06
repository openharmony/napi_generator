#!/usr/bin/env bash
# Shared helpers: develop -> master sync, GN build, xdevice, HTML report path.
set -euo pipefail

SKILL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MODULES_JSON="${MODULES_JSON:-$SKILL_DIR/modules.json}"

DEVELOP_ROOT="${DEVELOP_ROOT:-/root/aiSkill/develop/xts_acts_0622}"
MASTER_ACTS="${MASTER_ACTS:-/root/master/test/xts/acts}"
MASTER_OUT="${MASTER_OUT:-/root/master/out/rk3568}"
PRODUCT="${PRODUCT:-rk3568}"
DEVICE_SN="${DEVICE_SN:-}"

TC_DIR="$MASTER_OUT/suites/acts/acts/testcases"
HAP_DIR="$MASTER_OUT/suites/haps"
ACTS_HOME="$MASTER_OUT/suites/acts/acts"
REPORT_ROOT="$ACTS_HOME/xdevice_reports"

lookup_remote_rel() {
  local suite="$1"
  python3 - "$MODULES_JSON" "$suite" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
suite = sys.argv[2]
if suite not in data:
    raise SystemExit(f"Unknown suite: {suite}")
print(data[suite]["remoteRel"])
PY
}

lookup_module_type() {
  local suite="$1"
  python3 - "$MODULES_JSON" "$suite" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
suite = sys.argv[2]
if suite not in data:
    raise SystemExit(f"Unknown suite: {suite}")
print(data[suite].get("type", "dynamic"))
PY
}

xts_suitetype_for_type() {
  local mod_type="$1"
  if [[ "$mod_type" == "static" ]]; then
    echo "bin,hap_dynamic,hap_static"
  else
    echo "bin,hap_dynamic"
  fi
}

print_build_errors() {
  local log="$1"
  echo "[build] tail errors from $log:" >&2
  grep -iE 'ArkTS:ERROR|COMPILE Failed|build  error|OHOSException' "$log" 2>/dev/null \
    | tail -20 >&2 || tail -30 "$log" >&2
}

sync_develop_to_master() {
  local remote_rel="$1"
  local mode="${2:-patch}"
  bash "$SKILL_DIR/scripts/sync-develop-to-master.sh" "$remote_rel" "$mode"
}

clean_module_build() {
  local remote_rel="$1"
  local suite="$2"
  local full="${3:-0}"
  local obj_base="$MASTER_OUT/obj/test/xts/acts/$remote_rel"
  local remote_src="$MASTER_ACTS/$remote_rel"
  local main="${suite}Main"

  # P0：每次编签前必须同时作废 Test + Main HAP 与对应 ninja/hvigor 缓存。
  # 禁止「只清 Test stamp、Main modules.abc 仍停在旧时间戳」的假重编。
  find "$obj_base" -name '*compile_app.stamp' -delete 2>/dev/null || true
  rm -f "$obj_base/${suite}.stamp" "$obj_base/${main}.stamp" 2>/dev/null || true
  rm -f "$HAP_DIR/${suite}.hap" "$HAP_DIR/${main}.hap" \
    "$TC_DIR/${suite}.hap" "$TC_DIR/${main}.hap" 2>/dev/null || true
  rm -rf "$obj_base/module_${suite}" "$obj_base/module_${main}" \
    "$obj_base/${suite}" "$obj_base/${main}" 2>/dev/null || true
  rm -rf "$remote_src/entry/build" "$remote_src/entry/.hvigor" \
    "$remote_src/build" "$remote_src/.hvigor" 2>/dev/null || true
  touch "$remote_src/entry/src/main/module.json5" 2>/dev/null || true
  touch "$remote_src/entry/src/ohosTest/module.json5" 2>/dev/null || true

  if [[ "$full" == "1" ]]; then
    echo "[clean] full-clean: wipe all stamps under $obj_base"
    find "$obj_base" -name '*.stamp' -delete 2>/dev/null || true
  else
    echo "[clean] force Test+Main recompile (HAP/obj/hvigor purged)"
  fi
}

# 校验 HAP 内 ets/modules.abc 的 zip 时间戳不早于 entry/src 最新源文件（防 stamp-only 假包）
assert_hap_modules_abc_fresh() {
  local hap="$1"
  local src_root="$2"
  local label="$3"
  python3 - "$hap" "$src_root" "$label" <<'PY'
import os, sys, zipfile, time
from datetime import datetime

hap, src_root, label = sys.argv[1], sys.argv[2], sys.argv[3]
if not os.path.isfile(hap):
    print(f"[freshness] FAIL {label}: missing {hap}", file=sys.stderr)
    sys.exit(2)

newest = 0.0
for root, _dirs, files in os.walk(os.path.join(src_root, "entry", "src")):
    for name in files:
        if name.endswith((".ets", ".ts", ".json5", ".json")):
            newest = max(newest, os.path.getmtime(os.path.join(root, name)))
if newest <= 0:
    print(f"[freshness] WARN {label}: no src under entry/src, skip abc check")
    sys.exit(0)

with zipfile.ZipFile(hap) as zf:
    try:
        info = zf.getinfo("ets/modules.abc")
    except KeyError:
        print(f"[freshness] FAIL {label}: no ets/modules.abc in {hap}", file=sys.stderr)
        sys.exit(2)
    # ZipInfo.date_time is local wall time; treat as local epoch
    abc_ts = time.mktime(info.date_time + (0, 0, -1))

# allow 120s skew (zip stores 2s resolution; build clock)
if abc_ts + 120 < newest:
    print(
        f"[freshness] FAIL {label}: modules.abc zip_ts="
        f"{datetime.fromtimestamp(abc_ts)} < src_newest="
        f"{datetime.fromtimestamp(newest)} hap={hap}",
        file=sys.stderr,
    )
    sys.exit(3)
print(
    f"[freshness] OK {label}: modules.abc>="
    f"{datetime.fromtimestamp(abc_ts).strftime('%F %T')} "
    f"src_newest={datetime.fromtimestamp(newest).strftime('%F %T')}"
)
PY
}

verify_suite_haps_fresh() {
  local suite="$1"
  local remote_rel="$2"
  local mod_type main src
  mod_type=$(lookup_module_type "$suite")
  main="${suite}Main"
  src="$MASTER_ACTS/$remote_rel"

  assert_hap_modules_abc_fresh "$HAP_DIR/${suite}.hap" "$src" "${suite}.hap" || return $?
  if [[ "$mod_type" == "dynamic" ]]; then
    if [[ ! -f "$HAP_DIR/${main}.hap" ]]; then
      echo "[freshness] FAIL: dynamic suite missing Main HAP $HAP_DIR/${main}.hap" >&2
      return 2
    fi
    assert_hap_modules_abc_fresh "$HAP_DIR/${main}.hap" "$src" "${main}.hap" || return $?
  fi
  return 0
}

lookup_subsystem() {
  local suite="$1"
  python3 - "$MODULES_JSON" "$suite" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
suite = sys.argv[2]
print(data.get(suite, {}).get("subsystem", "arkui") or "arkui")
PY
}

build_suite() {
  local suite="$1"
  local mod_type suitetype log rc lines subsystem
  mod_type=$(lookup_module_type "$suite")
  suitetype=$(xts_suitetype_for_type "$mod_type")
  subsystem=$(lookup_subsystem "$suite")
  log="/tmp/${suite}_build.log"
  echo "[build] $suite type=$mod_type subsystem=$subsystem xts_suitetype=$suitetype -> $log"
  set +e
  (
    cd "$MASTER_ACTS"
    ./build.sh suite=acts system_size=standard "product_name=$PRODUCT" \
      "target_subsystem=$subsystem" "xts_suitetype=$suitetype" "suite=$suite"
  ) >"$log" 2>&1
  rc=$?
  set -e
  if [[ "$rc" -ne 0 ]]; then
    echo "[build] FAILED exit=$rc" >&2
    print_build_errors "$log"
    exit 1
  fi
  if grep -qE 'build  error|COMPILE Failed' "$log"; then
    echo "[build] FAILED (error in log)" >&2
    print_build_errors "$log"
    exit 1
  fi
  lines=$(grep -ciE 'compile_app|hvigor' "$log" || true)
  echo "[build] hvigor/compile lines=$lines"
  if [[ ! -f "$HAP_DIR/${suite}.hap" ]]; then
    echo "[build] FAILED: missing $HAP_DIR/${suite}.hap" >&2
    if [[ "${lines:-0}" -lt 20 ]]; then
      echo "[hint] stamp-only build? static 模块须 xts_suitetype 含 hap_static；或加 --full-clean" >&2
    fi
    print_build_errors "$log"
    exit 1
  fi
  if [[ "${lines:-0}" -lt 20 ]]; then
    echo "[WARN] hvigor lines=$lines — HAP exists but compile may be stale; freshness gate will decide" >&2
  fi
}

# 编签后硬门禁：modules.abc 必须新于源码；失败则自动 full-clean 重编一次
build_suite_with_freshness_gate() {
  local suite="$1"
  local remote_rel="$2"
  local attempt=1
  while [[ "$attempt" -le 2 ]]; do
    build_suite "$suite"
    if verify_suite_haps_fresh "$suite" "$remote_rel"; then
      return 0
    fi
    echo "[freshness] stale HAP detected (attempt=$attempt) → auto full-clean rebuild" >&2
    clean_module_build "$remote_rel" "$suite" 1
    attempt=$((attempt + 1))
  done
  echo "[freshness] FAILED after auto full-clean; refusing to stage stale HAP" >&2
  exit 1
}

lookup_assist_hap() {
  local suite="$1"
  python3 - "$MODULES_JSON" "$suite" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
suite = sys.argv[2]
print(data.get(suite, {}).get("assistHap", ""))
PY
}

stage_haps_to_testcases() {
  local suite="$1"
  local remote_rel="$2"
  local main="${suite}Main"
  local assist
  assist=$(lookup_assist_hap "$suite")
  test -f "$HAP_DIR/${suite}.hap" || {
    echo "ERROR: missing $HAP_DIR/${suite}.hap" >&2
    exit 1
  }
  cp -f "$HAP_DIR/${suite}.hap" "$TC_DIR/"
  if [[ -f "$HAP_DIR/${main}.hap" ]]; then
    cp -f "$HAP_DIR/${main}.hap" "$TC_DIR/"
  elif [[ -n "$assist" && -f "$TC_DIR/${assist}.hap" ]]; then
    echo "[stage] assist HAP already in testcases: ${assist}.hap"
  elif [[ -n "$assist" ]]; then
    echo "[WARN] assist HAP ${assist}.hap not in haps/ or testcases/" >&2
  fi
  ensure_testcase_json "$suite" "$remote_rel"
  stat -c '%y %s %n' "$TC_DIR/${suite}.hap" 2>/dev/null || true
  if [[ -n "$assist" && -f "$TC_DIR/${assist}.hap" ]]; then
    stat -c '%y %s %n' "$TC_DIR/${assist}.hap" 2>/dev/null || true
  fi
}

ensure_testcase_json() {
  local suite="$1"
  local remote_rel="$2"
  local json="$TC_DIR/${suite}.json"
  if [[ -f "$json" ]]; then
    return 0
  fi
  local src="$MASTER_ACTS/$remote_rel/Test.json"
  if [[ -f "$src" ]]; then
    cp -f "$src" "$json"
    echo "[stage] Test.json -> $json"
  else
    echo "[WARN] no Test.json at $src" >&2
  fi
}

resolve_xdevice_module_name() {
  local suite="$1"
  local info="$TC_DIR/module_info.list"
  if [[ ! -f "$info" ]]; then
    echo "$suite"
    return
  fi
  awk -v t="$suite" '$1 == t { print $2; exit }' "$info"
}

install_xdevice_tools() {
  local pkg
  for pkg in xdevice xdevice_devicetest xdevice_ohos; do
    local tar="$ACTS_HOME/tools/${pkg}-0.0.0.tar.gz"
    if [[ -f "$tar" ]]; then
      python3 -m easy_install --quiet "$tar" 2>/dev/null || true
    fi
  done
}

run_xdevice_suite() {
  local suite="$1"
  shift
  local extra_ta=("$@")
  local mapped json report_dir html
  mapped=$(resolve_xdevice_module_name "$suite")
  json="$TC_DIR/${mapped}.json"
  if [[ ! -f "$json" ]]; then
    echo "ERROR: no xdevice config $json (build may not have deployed testcases)" >&2
    exit 1
  fi

  report_dir="$REPORT_ROOT/$(date '+%Y.%m.%d-%H.%M.%S')"
  mkdir -p "$report_dir"

  export PATH="/root/master/prebuilts/python/linux-x86/3.8.5/bin:${PATH:-}"
  install_xdevice_tools

  local sn_args=()
  if [[ -n "$DEVICE_SN" ]]; then
    sn_args+=(-sn "$DEVICE_SN")
  fi

  local ta_args=()
  if [[ ${#extra_ta[@]} -gt 0 ]]; then
    ta_args+=(-ta "${extra_ta[*]}")
  fi

  echo "[xdevice] module=$mapped report=$report_dir device=${DEVICE_SN:-auto}"
  set +e
  (
    cd "$ACTS_HOME"
    python3 -m xdevice run acts -l "$mapped" \
      -tcpath "$TC_DIR" -respath "$ACTS_HOME/resource/" -rp "$report_dir" \
      "${sn_args[@]}" "${ta_args[@]}"
  )
  local xrc=$?
  set -e
  if [[ "$xrc" -ne 0 ]]; then
    echo "[xdevice] exit=$xrc" >&2
  fi

  html="$report_dir/summary_report.html"
  if [[ -f "$html" ]]; then
    echo "REPORT_HTML=$html"
    # 单 HAP：自动截图。多 HAP 批次由 run-batch-cycle 设 XDEVICE_SKIP_SHOT=1，
    # 只在合并后的 summary 截一张（禁止每个子 HAP 再截）。
    if [[ "${XDEVICE_SKIP_SHOT:-0}" != "1" ]]; then
      shot="$SCRIPT_DIR/screenshot-xdevice-summary.sh"
      if [[ -x "$shot" ]]; then
        set +e
        "$shot" "$html"
        set -e
      fi
    else
      echo "[screenshot] skip (batch will shot merged summary only)"
    fi
    return "$xrc"
  fi
  echo "WARN: summary_report.html not found under $report_dir" >&2
  find "$report_dir" -name '*.html' -maxdepth 3 2>/dev/null | head -5
  return "$xrc"
}

latest_report_html() {
  find "$REPORT_ROOT" -name 'summary_report.html' -printf '%T@ %p\n' 2>/dev/null \
    | sort -r -n | head -1 | awk '{ print $2 }'
}
