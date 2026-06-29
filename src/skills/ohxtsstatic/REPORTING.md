# XTS 报告与覆盖率（静态 / 动态共用）

**路径约定**（不进 `xts_acts_0622` Git）：

```
/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/
├── xts_reports/                    # xdevice 汇总 + hypium 子报告
│   ├── summary_report.html         # 多模块整测汇总（xdevice 风格）
│   ├── static/data.js
│   └── hypium/<工程>_<套件>_<时间戳>/
├── advancedComponents/
│   ├── gen_xdevice_summary_report.py
│   ├── gen_uncovered_report.py
│   ├── gen_hypium_report.py
│   ├── gen_abnormal_coverage_excel.py
│   ├── run_pr_batch_report.sh
│   └── xts_reports/
│       ├── uncovered_properties_report.html
│       ├── property_coverage_tables.md
│       └── abnormal_param_uncovered_detail.md
```

---

## 1. 三层报告（Agent 必知）

| 层级 | 交付物 | 何时产出 |
|------|--------|----------|
| **L1 会话报告** | 回复正文 **三列表格**（用例名称｜Pass/Fail｜设计思路） | 每批设备跑测结束 |
| **L2 Hypium HTML** | `REPORT_HTML=.../hypium/.../summary_report.html` | `static-device-test` / `deploy-test` 终端 |
| **L3 汇总 / 覆盖率** | `xts_reports/summary_report.html`、`uncovered_properties_report.html` | 多批完成后用户要求「更新报告」 |

**禁止**：只给 log 路径、不在会话写三列表格；**禁止**把 gen 脚本/HTML 提交进 xts_acts 仓。

---

## 2. L2：单套件 Hypium 报告

```bash
source /root/aiSkill/use-ohos-sdk.sh static   # 或 normal（动态）
python3 /root/aiSkill/.claude/skills/ohxtsstatic/ohxtsflow.py static-device-test \
  <工程根> --timeout 600000 -s "<SuiteName>"
# 终端最后一行: REPORT_HTML=.../hypium/.../summary_report.html
```

离线从 log 生成：

```bash
python3 /root/aiSkill/.claude/skills/ohxtsstatic/ohxtsflow.py gen-hypium-report \
  /path/to/aa_test.log
```

**注意**：`-s` 多套件不要用 `|` 拼接（shell 管道）；应分次跑或合并 parsed_summary（见 L3）。

---

## 3. L3-A：xdevice 风格汇总 `summary_report.html`

```bash
HYP=/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/xts_reports/hypium
OUT=/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/xts_reports
GEN=/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/advancedComponents/gen_xdevice_summary_report.py

python3 "$GEN" --out "$OUT" --device "192.168.12.220:8710" \
  "chip_nowear:ChipV2AbnormalOptionsTest:$HYP/.../parsed_summary.json|$HYP/.../summary_report.html" \
  "popup_static:PopupStaticAll:parsed1+parsed2+parsed3|report.html" \
  ...
```

- **`parsed1+parsed2+...`**：同一 Acts 模块多批 parsed 合并为一条（如 popup B+C 批、chip 异常 14 套）。
- 模块名自动从 `Test.json` 解析；也可在第三段加 `|report|ActsAceEtsModuleXxxTest`。
- 浏览器打开：`file://$OUT/summary_report.html`

**已验证模块映射**（`gen_xdevice_summary_report.py` 内）：`menu_static`、`select_static`、`popup_static`、`chip_static` 等。

---

## 4. L3-B：异常参数未覆盖 `uncovered_properties_report.html`

```bash
python3 /root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/advancedComponents/gen_uncovered_report.py
```

输出：`advancedComponents/xts_reports/uncovered_properties_report.html`

**结构**：

1. **总览**：结论卡片 + 5 行覆盖矩阵（动/静 × Counter/ChipV2/ChipGroupV2）+ 汇总数字卡  
2. **明细**：各组件编译阻断项、null 统一说明、静态 Chip 套件 Pass 表  

**维护**：改 `gen_uncovered_report.py` 内 `COVERAGE_MATRIX`、`DYNAMIC_CHIPV2` 等数据后重新生成；明细 Markdown 见 `property_coverage_tables.md`。

---

## 5. 多批开发 → 报告 → 提交 推荐顺序

```
1. 按批开发（A/B/C… 或 异常 Phase）→ 每批 -s 套件设备 Pass
2. 会话内 L1 三列表格
3. 全部批次完成后：
   - gen_xdevice_summary_report.py 更新 summary_report.html
   - gen_uncovered_report.py 更新未覆盖报告（异常批次完成后）
4. 按 xts-git-commit：分批 commit（每笔 <2000 行），用户明确要求再 push
```

---

## 6. 静态专项经验（2026-06 批次）

| 批次 | 工程 | 要点 |
|------|------|------|
| A menu_static | `ace_ets_module_menu_static` | `MenuGridPosition` 从 `@ohos.arkui.component`；`bindContextMenu` 顶层 `@Builder` |
| B popup_static | `ace_ets_module_dialog_Popup_static` | `LevelMode` 从 `@ohos.promptAction`；null→省略字段 |
| C popup displayMode | 同上 | `DialogDisplayMode` + `RowOptions`；`State` 从 stateManagement |
| D select_static | `ace_ets_module_dialog_Select_static` | `menuBackground*`；补 `: void` 类型注解 |
| chip 异常 | `ace_ets_module_advance_chip_static` | 新镜像后 Linker 问题已解；14 套 112 it Pass |

**chip_static 异常**：曾遇 `LinkerVerificationError` → 换镜像 / 新 SDK 后整测通过；注册仅需 `List.test.ets` + `main_pages.json`。

---

## 7. PR 整测脚本（可选）

```bash
bash /root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/advancedComponents/run_pr_batch_report.sh <批次名>
```

静态 **必须** `-s <Suite>`，勿跑全量 `List.test.ets`（极慢）。
