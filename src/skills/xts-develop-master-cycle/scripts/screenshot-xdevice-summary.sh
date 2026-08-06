#!/usr/bin/env bash
# 截取官方 xdevice summary_report.html 顶部：Summary → Test Details（最多 10 行 HAP）
# 用法:
#   screenshot-xdevice-summary.sh /path/to/summary_report.html
#   screenshot-xdevice-summary.sh /path/to/report_dir
# 输出: 同目录 summary_top.png，并打印 SCREENSHOT_PNG=...
#
# 多 HAP：只对合并后的那一份 summary_report.html 截一次（不要对每个子 HAP 再截）。
set -euo pipefail

HTML_IN="${1:-}"
if [[ -z "$HTML_IN" ]]; then
  echo "usage: $0 <summary_report.html|report_dir>" >&2
  exit 1
fi

if [[ -d "$HTML_IN" ]]; then
  HTML="$HTML_IN/summary_report.html"
else
  HTML="$HTML_IN"
fi
if [[ ! -f "$HTML" ]]; then
  echo "error: not found: $HTML" >&2
  exit 1
fi

REPORT_DIR="$(cd "$(dirname "$HTML")" && pwd)"
HTML="$REPORT_DIR/summary_report.html"
OUT="$REPORT_DIR/summary_top.png"

export PATH="${PATH}:/root/aiSkill/command-line-tools/tool/node/bin"
NODE="$(command -v node || true)"
if [[ -z "$NODE" ]]; then
  echo "error: node not found" >&2
  exit 1
fi

PUP_ROOT="${PUPPETEER_ROOT:-}"
if [[ -z "$PUP_ROOT" ]]; then
  for d in \
    /tmp/puppeteer_shot \
    "$REPORT_DIR/.puppeteer_shot" \
    "$(cd "$(dirname "$0")" && pwd)/.puppeteer"
  do
    if [[ -d "$d/node_modules/puppeteer" ]]; then
      PUP_ROOT="$d"
      break
    fi
  done
fi
if [[ -z "$PUP_ROOT" ]]; then
  PUP_ROOT="/tmp/puppeteer_shot"
  if [[ ! -d "$PUP_ROOT/node_modules/puppeteer" ]]; then
    echo "[screenshot] installing puppeteer into $PUP_ROOT ..."
    mkdir -p "$PUP_ROOT"
    (
      cd "$PUP_ROOT"
      [[ -f package.json ]] || npm init -y >/dev/null 2>&1
      npm install puppeteer@24.2.0 --no-fund --no-audit
    )
  fi
fi

PORT=$((18700 + RANDOM % 200))
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$REPORT_DIR" >/tmp/xdevice_shot_http.log 2>&1 &
HTTP_PID=$!
cleanup() { kill "$HTTP_PID" 2>/dev/null || true; }
trap cleanup EXIT
sleep 0.6

export PUP_ROOT OUT PORT
"$NODE" <<'JS'
const puppeteer = require(process.env.PUP_ROOT + '/node_modules/puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1200, deviceScaleFactor: 1 });
  const url = `http://127.0.0.1:${process.env.PORT}/summary_report.html`;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForSelector('.summary, .statistic, .details-table', { timeout: 30000 });
  await new Promise(r => setTimeout(r, 800));

  // 保持默认分页 10：不改 pageSize。Summary → Test Details（最多约 10 行）
  const clip = await page.evaluate(() => {
    const details = document.querySelector('.details-table') ||
      document.querySelector('.list .el-table');
    const pager = document.querySelector('.pager');
    let bottom = 900;
    if (details) {
      const r = details.getBoundingClientRect();
      bottom = Math.min(r.bottom + 4, r.top + 48 + 10 * 49 + 8);
    }
    if (pager) {
      const pt = pager.getBoundingClientRect().top;
      if (pt > 500 && pt < bottom + 80) bottom = Math.min(bottom, pt - 2);
    }
    return {
      x: 0,
      y: 0,
      width: Math.min(1400, document.documentElement.clientWidth),
      height: Math.ceil(Math.max(520, Math.min(bottom, 1100)))
    };
  });

  await page.screenshot({ path: process.env.OUT, clip, type: 'png' });
  console.log('clip=' + JSON.stringify(clip));
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
JS

echo "SCREENSHOT_PNG=$OUT"
