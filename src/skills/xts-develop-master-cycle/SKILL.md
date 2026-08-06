---
name: xts-develop-master-cycle
description: >-
  XTS develop→master 闭环：xts_acts_0622 同步到 /root/master，GN 编译多 HAP，
  本机 xdevice 跑测，生成官方 summary_report.html；commit 后交付一张汇总截图
  （多 HAP 只截合并页）。触发词：develop 同步 master、xdevice HTML 报告、
  多 HAP 批次测试、master 编译跑测、汇总截图。
version: "1.4.0"
---

# XTS develop → master → 编译 → xdevice HTML 报告

## HTML 报告硬门禁（P0 · 接口人只认这一种）

**对外交付的 HTML 测试报告有且仅有一种格式：官方 xdevice `summary_report.html`**
（Element Plus：Summary 描述表 + Modules/Passed/Failed 统计条 + Test Details）。

| 禁止 | 必须 |
|------|------|
| 自写深色/表格汇总页、`batch_index.html` 自定义页 | 单次跑测：xdevice 产出的 `summary_report.html` |
| 另造「dashboard / 汇总卡片」HTML | 多 HAP 合并：`scripts/merge-xdevice-reports.py` 合并各次 `data.js` → 同一套 xdevice 模板 |
| 把自写页当作正式交付给接口人 | 路径形如 `.../xdevice_reports/<dir>/summary_report.html` |

违反即视为未交付报告。会话内可用文字表格；**文件级 HTML 只交 xdevice**。

## 汇总截图硬门禁（P0 · 接入流水线 + 会话必交）

**仅有 `REPORT_HTML=` 路径、无 `summary_top.png` / 未 Read 出图 = 未完成交付。**

| 场景 | 截几张 | 截什么 |
|------|--------|--------|
| **单个 HAP** | **1 张** | 该次 `summary_report.html` → `summary_top.png` |
| **多个 HAP** | **仅 1 张**（合并汇总） | `merge-xdevice-reports.py` 产出的合并 `summary_report.html` → `summary_top.png` |
| 多 HAP 子 Suite 单独跑测目录 | **禁止再截** | `run-batch-cycle` / 手动多跑设 `XDEVICE_SKIP_SHOT=1` |

### 流水线自动截图（避免硬门禁落空）

| 入口 | 行为 |
|------|------|
| `module-lib.sh` xdevice 单 HAP | 自动 `screenshot-xdevice-summary.sh` |
| `run-batch-cycle.sh` | 子 HAP `XDEVICE_SKIP_SHOT=1` → **合并后**自动截一张 |
| `merge-xdevice-reports.py` | 合并结束调用 `auto_screenshot_xdevice.py` |
| hypium `deploy-test` / `gen-xdevice-report` | `hypium_html_report.py` 写完 HTML 后自动截 |

终端应出现 `SCREENSHOT_PNG=...`（或 `SCREENSHOT_SKIP=...` 时须补跑脚本并说明原因）。

### Agent 会话义务（自动化不能替代）

- commit/push 或批次交付回复：**Read** `summary_top.png`，用户须在对话里直接看到图
- 打印 `SCREENSHOT_PNG=` 路径
- 范围：Summary → Test Details，**最多 10 行** Module
- 兜底：`scripts/screenshot-xdevice-summary.sh` / `scripts/auto_screenshot_xdevice.py`

**禁止**：自写汇总页截图；多 HAP 时给每个子 HAP 各截一张；只丢 HTML 路径收工。

## 适用场景

在 **develop 树**改码（`/root/aiSkill/develop/xts_acts_0622`），落到 **master acts** 编译，用 **xdevice** 在真机跑测，产出 **summary_report.html**。

| 树 | 路径 |
|----|------|
| develop（开发提交） | `/root/aiSkill/develop/xts_acts_0622` |
| master（GN 编译） | `/root/master/test/xts/acts` |
| HAP 产物 | `/root/master/out/rk3568/suites/haps/` → 拷贝到 `.../acts/testcases/` |
| xdevice 报告 | `/root/master/out/rk3568/suites/acts/acts/xdevice_reports/<时间戳>/summary_report.html` |
| 多 HAP 合并报告 | `.../xdevice_reports/<batch_dir>/summary_report.html`（`merge-xdevice-reports.py`） |
| 汇总截图 | 同目录 `summary_top.png`（Summary→最多 10 行 Module） |

## 最近批次涉及的多 HAP（已注册）

| Suite（GN） | 工程 | 类型 |
|-------------|------|------|
| `ActsAceEtsModuleChipNoWearTest` | chip_nowear | 动态双 HAP |
| `ActsAceEtsModuleAdvanceChipStaticTest` | advance_chip_static | 静态单 HAP |
| `ActsAceEtsModuleCounterTest` | counter | 动态双 HAP |
| `ActsAceEtsModuleAdvanceCounterStaticTest` | advance_counter_static | 静态单 HAP |
| `ActsAceEtsModuleStateMangagementApi18StaticTest` | api18_static | 静态单 HAP |
| `ActsAceEtsModuleCustomComponentStaticTest` | customComponent_static | 静态单 HAP |
| `ActsAceEtsModuleAlertDialogStaticTest` | ace_ets_module_dialog_AlertDalog_static | 静态单 HAP（OpenOrderOverlay） |

配置见 **`modules.json`** 的 `_batches.recent_chip_counter_state`（AlertDalog 可单独注册批次）。

## 标准流程

```
develop 改码并 push
  → rsync develop/<remoteRel> → master/<remoteRel>（entry/ + BUILD.gn）
  → light/full clean（删 compile_app.stamp）
  → ./build.sh suite=acts product_name=rk3568 ... suite=<SuiteName>
  → cp HAP → testcases/
  → python -m xdevice run acts -l <ModuleName>
  → 打开 summary_report.html（仅此 HTML 格式）
```

## Linux 一键（本机 kh-server）

### 单模块

```bash
cd /root/aiSkill/.claude/skills/xts-develop-master-cycle/scripts

# Chip 动态
./run-develop-cycle.sh ActsAceEtsModuleChipNoWearTest

# 静态 chip（怀疑 HAP 过期时）
./run-develop-cycle.sh --full-clean ActsAceEtsModuleAdvanceChipStaticTest

# 只跑本批套件（不同步不编译）
./run-develop-cycle.sh --skip-sync --skip-build \
  --test-class ChipV2AbnormalOptionsTest ActsAceEtsModuleChipNoWearTest
```

### 多 HAP 批次（最近 6 个工程）

```bash
./run-batch-cycle.sh recent_chip_counter_state
# 或跳过编译只跑测（HAP 已编好）
./run-batch-cycle.sh recent_chip_counter_state --skip-sync --skip-build
```

完成后打开批次目录下的 **官方 xdevice** 汇总（禁止再交付自写 index）：

```
/root/master/out/rk3568/suites/acts/acts/xdevice_reports/<batch_dir>/summary_report.html
```

手工合并已有多次跑测报告：

```bash
python3 scripts/merge-xdevice-reports.py --out /path/to/out_dir --name my_batch \
  /path/to/report_a /path/to/report_b
```

### 仅同步（不编译）

```bash
DEVELOP_ROOT=/root/aiSkill/develop/xts_acts_0622 \
MASTER_ACTS=/root/master/test/xts/acts \
bash scripts/sync-develop-to-master.sh \
  'arkui/ace_ets_module_ui/ace_ets_module_advancedComponents/ace_ets_module_chip_nowear' \
  patch
```

## Windows 一键（D:\acts，可选）

```powershell
powershell -File scripts/run-develop-cycle.ps1 -Suite ActsAceEtsModuleChipNoWearTest
```

## 与 ohxtsstatic / ohhdc 的分工

| 阶段 | 工具 |
|------|------|
| develop 侧编签（hapbuild + hdc） | **ohxtsstatic** / **ohxtsdynamic** + **ohhdc** |
| develop→master 同步 + GN 编 HAP | **本 skill** |
| 官方 xdevice + HTML 报告 | **本 skill** `run-develop-cycle.sh` |

develop 树用 `hapbuild` 验证通过后，再同步 master 走 xdevice 出正式 HTML 报告。

## 编译注意（P0 · Main/Test HAP 假重编硬门禁）

**禁止**：改了 `entry/src/main` 页面/用例后，增量编签只更新 Test HAP 外壳，**Main HAP 内 `ets/modules.abc` 仍停在旧时间戳** → 设备上跑旧 UI、假绿/假红。

| 门禁 | 行为（`module-lib.sh` / `run-develop-cycle.sh`） |
|------|--------------------------------------------------|
| **编前** | **每次**（含非 `--full-clean`）删除 `${Suite}.hap` + `${Suite}Main.hap`、对应 `obj/.../module_*`、工程 `entry/build`+`.hvigor` |
| **编后** | `verify_suite_haps_fresh`：解压 HAP 读 `ets/modules.abc` 的 zip 时间，须 **≥** `entry/src` 最新 `.ets/.ts/.json5`（允许 120s 偏差） |
| **失败** | 自动 **full-clean 再编一次**；仍失败则 **exit 1**，禁止 stage 到 `testcases/` |
| Agent | 改码后跑 cycle **不必**再猜要不要 `--full-clean`；默认已强制双 HAP 真重编。怀疑缓存时仍可显式 `--full-clean` |

- 动态工程须同时产出 **Test HAP + Main HAP**（`${Suite}.hap` + `${Suite}Main.hap`）
- hvigor 日志行数应 **>>50**；过少会触发 freshness 门禁 / 自动重编
- 同步须含 `entry/src/main/resources`（`main_pages.json`）
- **patch 同步**已含 `signature/`、`Test.json`、`build-profile.json5`（p7b 须 develop 侧 **§13.12 生成** 后再同步）
- **新静态一体工程**（如 `AlertDalog_static`）若 master GN 因 prebuilt hvigor **不支持 `arkTSVersion: "1.2"`** 等配置失败：**不否定** develop 侧 `hapbuild build` + `ohhdc static-deploy-test` 结论；xdevice 可 **hapbuild 产出 HAP 手动 cp 到 testcases/** 后跑测（见 **ohxtsstatic §13.11.4**）

## 注册新模块

编辑 `modules.json`：

```json
"ActsYourSuiteTest": {
  "remoteRel": "arkui/.../your_module_dir",
  "type": "static"
}
```

并加入 `_batches` 列表（可选）。

## 脚本

| 文件 | 说明 |
|------|------|
| `scripts/run-develop-cycle.sh` | Linux 单 Suite 闭环（单 HAP 自动截 `summary_top.png`） |
| `scripts/run-batch-cycle.sh` | 多 Suite → 合并 xdevice；**子 HAP 不截图**，合并后只截 **1** 张 |
| `scripts/merge-xdevice-reports.py` | 多份 xdevice 报告合并（唯一允许的多 HAP HTML 汇总方式；结束后自动截图） |
| `scripts/auto_screenshot_xdevice.py` | 报告后自动截图入口（尊重 `XDEVICE_SKIP_SHOT`；打印 `SCREENSHOT_PNG=`） |
| `scripts/screenshot-xdevice-summary.sh` | 截 Summary→Test Details（最多 10 行）→ `summary_top.png` |
| `scripts/module-lib.sh` | sync / build / xdevice 封装（`XDEVICE_SKIP_SHOT=1` 跳过单次截图） |
| `scripts/sync-develop-to-master.sh` | develop→master rsync |
| `scripts/run-develop-cycle.ps1` | Windows 闭环 |
| `modules.json` | Suite → remoteRel、批次列表 |

## 设备

默认设备 SN 在 `modules.json` → `_defaults.deviceSn`（当前 `192.168.12.220:8710`）。  
覆盖：`./run-develop-cycle.sh --device <SN> <Suite>`。

## Git 提交

同步/编译/跑测**不自动 commit**。develop 侧提交规范见 **`xts-git-commit`** skill。
