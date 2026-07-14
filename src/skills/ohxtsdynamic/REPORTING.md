# 动态 XTS 报告

与 **`ohxtsstatic/REPORTING.md`** 一致：单批跑测自动产出 **xDevice 格式** `REPORT_HTML`；多模块汇总用 `gen_xdevice_summary_report.py`。

**工程整测**：全绿须来自**一次** `deploy-test` 装包连跑全部 Suite；禁止多次重装拼表（见 **SKILL.md**「工程整测硬门禁」）。

```bash
# 单批调试（deploy-test 后终端 REPORT_HTML=...）
python3 src/skills/ohxtsdynamic/ohxtsflow.py deploy-test <工程> -s "<Suite>"
# 工程整测：-s 列齐全部 Suite（一次装包；ohhdc 可内部分次 aa test）
python3 src/skills/ohxtsdynamic/ohxtsflow.py deploy-test <工程> -s "SuiteA,SuiteB,SuiteC"

# 离线
python3 src/skills/ohxtsdynamic/ohxtsflow.py gen-xdevice-report /tmp/unittest.log \
  --project <工程根> -s "<Suite>"

# 多模块整测汇总
python3 .../advancedComponents/gen_xdevice_summary_report.py --out .../xts_reports \
  "chip_nowear:ChipV2AbnormalOptionsTest:<hypium>/parsed_summary.json"
```
