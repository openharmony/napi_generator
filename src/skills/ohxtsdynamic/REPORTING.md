# 动态 XTS 报告

与 **`ohxtsstatic/REPORTING.md`** 一致：单批跑测自动产出 **xDevice 格式** `REPORT_HTML`；多模块汇总用 `gen_xdevice_summary_report.py`。

```bash
# 单批（deploy-test 后终端 REPORT_HTML=...）
python3 src/skills/ohxtsdynamic/ohxtsflow.py deploy-test <工程> -s "<Suite>"

# 离线
python3 src/skills/ohxtsdynamic/ohxtsflow.py gen-xdevice-report /tmp/unittest.log \
  --project <工程根> -s "<Suite>"

# 多模块整测汇总
python3 .../advancedComponents/gen_xdevice_summary_report.py --out .../xts_reports \
  "chip_nowear:ChipV2AbnormalOptionsTest:<hypium>/parsed_summary.json"
```
