# CAPI XTS 报告（与 ohxtsdynamic 对齐）

**本地工具根**（不进 xts_acts Git）：`xts_acts_local_tools/<批次>/`（报告与 gen 脚本）。

## 三层交付

| 层级 | 交付物 | 何时 |
|------|--------|------|
| **Tier-1 会话** | 三列表格（用例名｜Pass/Fail｜设计思路） | 每批 `deploy-test` 后 |
| **Tier-2 Hypium HTML** | `REPORT_HTML=.../hypium/.../summary_report.html` | `deploy-test` / `run-capi-pipeline` |
| **Tier-3 汇总** | `gen_xdevice_summary_report.py` → `summary_report.html` | 多模块完成后 |

## 命令

```bash
source use-ohos-sdk.sh normal

# 一键：编签 → 设备 → HTML
python3 src/skills/ohxtscapi/ohxtscflow.py run-capi-pipeline \
  <HAP工程完整路径> -s GridEnableEditModeTest

# 离线报告
python3 src/skills/ohxtscapi/ohxtscflow.py gen-hypium-report <unittest 日志路径>
```

CAPI 模块映射示例：`ace_c_arkui_test_api26` → 在 `gen_xdevice_summary_report.py` 的
`DEFAULT_MODULE_MAP` 中按需追加。

完整说明见 **`ohxtsstatic/REPORTING.md`**（流程相同，工程为 CAPI HAP + ohosTest）。
