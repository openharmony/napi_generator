# XTS 报告与覆盖率（动态侧）

与 **`ohxtsstatic/REPORTING.md`** 内容一致；动态开发时重点看 **§2 L2**（`deploy-test`）与 **§7 PR 整测**。

**本地工具根**（不进 Git）：

```
/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/
```

**快速命令**：

```bash
# L2 单套件
source /root/aiSkill/use-ohos-sdk.sh normal && unset OHOS_USE_HVIGOR_STATIC
python3 /root/aiSkill/.claude/skills/ohxtsdynamic/ohxtsflow.py deploy-test \
  <chip_nowear 工程> -s ChipV2AbnormalOptionsTest --device 192.168.12.220:8710

# L3 汇总（与静态模块同一 summary_report.html）
python3 .../advancedComponents/gen_xdevice_summary_report.py --out .../xts_reports \
  "chip_nowear:ChipV2AbnormalOptionsTest:<hypium>/parsed_summary.json|<hypium>/summary_report.html"

# L3 未覆盖
python3 .../advancedComponents/gen_uncovered_report.py
```

完整说明、批次经验、禁止提交表 → **`../ohxtsstatic/REPORTING.md`**。
