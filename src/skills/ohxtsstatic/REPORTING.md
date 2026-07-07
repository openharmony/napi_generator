# XTS 报告与覆盖率（静态 / 动态 / CAPI 共用）

**路径约定**（不进 `xts_acts` Git）：

```
/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/
├── xts_reports/
│   ├── summary_report.html         # 多模块整测汇总（xdevice 风格）
│   ├── static/data.js
│   └── hypium/<工程>_<套件>_<时间戳>/   # 单批跑测产物（xdevice 格式 + parsed_summary.json）
├── advancedComponents/
│   ├── gen_xdevice_summary_report.py   # 多模块合并入口（单批已由 hypium_html_report 自动调用）
│   ├── gen_uncovered_report.py
│   └── gen_hypium_report.py            # CLI 包装，委托 hypium_html_report
```

---

## 1. 两层报告（Agent 必知）

| 层级 | 交付物 | 何时产出 |
|------|--------|----------|
| **Tier-1 会话报告** | 回复正文 **三列表格**（用例名称｜Pass/Fail｜设计思路） | 每批设备跑测结束 |
| **xDevice HTML** | `REPORT_HTML=.../hypium/.../summary_report.html`（Vue + Element Plus） | `static-device-test` / `deploy-test` / pipeline 终端 |

**多模块整测汇总**：全部批次完成后，用 `gen_xdevice_summary_report.py` 合并多条 `parsed_summary.json` → `xts_reports/summary_report.html`。

**禁止**：只给 log 路径、不在会话写三列表格；**禁止**把 gen 脚本/HTML 提交进 xts_acts 仓。

---

## 2. 单批 xDevice 报告（默认）

跑测结束后终端打印：

```bash
source /root/aiSkill/use-ohos-sdk.sh static   # 或 normal（动态/CAPI）
python3 src/skills/ohxtsstatic/ohxtsflow.py static-device-test \
  <工程根> --timeout 600000 -s "<SuiteName>"
# REPORT_HTML=.../hypium/<工程>_<套件>_<时间>/summary_report.html
```

浏览器打开即为 **xDevice Report**（与 `xts_reports/summary_report.html` 同模板）。

离线从 log 生成：

```bash
python3 src/skills/ohxtsstatic/ohxtsflow.py gen-xdevice-report /path/to/unittest.log \
  --project <工程根> -s "<SuiteName>" --device <SN>
```

兼容旧命令名：`gen-hypium-report`（行为相同）。

**实现**：`ohxtsstatic/hypium_html_report.py` 解析日志 → `parsed_summary.json` → 调用 `gen_xdevice_summary_report.build_report`。

**注意**：`-s` 多套件不要用 `|` 拼接（shell 管道）；应分次跑或由 ohhdc 分套件执行后合并 parsed。

---

## 3. 多模块 xdevice 汇总 `xts_reports/summary_report.html`

```bash
HYP=/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/xts_reports/hypium
OUT=/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/xts_reports
GEN=$OUT/../advancedComponents/gen_xdevice_summary_report.py

python3 "$GEN" --out "$OUT" --device "192.168.12.220:8710" \
  --acts-root /root/aiSkill/develop/xts_acts \
  "chip_static:ChipGroupSystemMaterialTest:$HYP/.../parsed_summary.json" \
  "ace_c_arkui_test_api26_systemmaterial:ImmersiveMaterialTest,CustomDialogSystemMaterialTest:\
$HYP/.../parsed_summary.json|ActsAceCArkUI26SystemMaterialTest" \
  ...
```

- **`parsed1+parsed2+...`**：同一 Acts 模块多批 parsed 合并为一条。
- 模块名自动从 `Test.json` 解析；也可在第三段加 `|report|ActsAce...Test`。
- 浏览器打开：`file://$OUT/summary_report.html`

---

## 4. 异常参数未覆盖 `uncovered_properties_report.html`

```bash
python3 .../advancedComponents/gen_uncovered_report.py
```

输出：`advancedComponents/xts_reports/uncovered_properties_report.html`

---

## 5. 推荐顺序

```
1. 按批开发 → 每批 -s 套件设备 Pass → 会话 Tier-1 三列表格
2. 每批自动产出 xDevice REPORT_HTML（单模块）
3. 全部批次完成后：gen_xdevice_summary_report.py 更新整测 summary_report.html
4. 按 xts-git-commit 分批 commit
```
