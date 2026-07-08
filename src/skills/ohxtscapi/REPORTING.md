# CAPI XTS 报告（与 ohxtsstatic / ohxtsdynamic 对齐）

**本地工具根**（不进 xts_acts Git）：`xts_acts_local_tools/<批次>/`

## 两层交付

| 层级 | 交付物 | 何时 |
|------|--------|------|
| **Tier-1 会话** | 三列表格（用例名｜Pass/Fail｜设计思路） | 每批 `deploy-test` 后 |
| **xDevice HTML** | `REPORT_HTML=.../hypium/.../summary_report.html` | `deploy-test` / `run-capi-pipeline` |

多模块整测汇总见 **`ohxtsstatic/REPORTING.md` §3**（`gen_xdevice_summary_report.py`）。

## 命令

```bash
source use-ohos-sdk.sh normal

# 一键：编签 → 设备 → xDevice HTML
python3 src/skills/ohxtscapi/ohxtscflow.py run-capi-pipeline \
  <HAP工程完整路径> -s ImmersiveMaterialTest,CustomDialogSystemMaterialTest

# 离线报告
python3 src/skills/ohxtscapi/ohxtscflow.py gen-xdevice-report <unittest 日志路径> \
  --project <工程根> -s "<Suite>" --device <SN>
```

**实现**：`ohxtsstatic/hypium_html_report.py`（经 `ohxtscflow` 调用），输出 xDevice 模板，非简版 HTML。

兼容旧命令：`gen-hypium-report`。
