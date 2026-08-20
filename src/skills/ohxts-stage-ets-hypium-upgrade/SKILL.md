---
name: ohxts-stage-ets-hypium-upgrade
description: >-
  OpenHarmony XTS stage 模型批量升级（架构脚本化 v2.1）：①js/ts→ets 批量转换+需求1管理；
  ②统一签名；③编译+报错自动修复；④测试执行+失败处置；⑤进度表更新；⑥统一问题方案库（检索+自动维护）。
  触发词：后缀升级、js转ets、ts转ets、hypium-binary、字节码har、suffix_update、
  stage ets 升级、arkui 子系统升级、逐个闭环、需求1进度、问题方案库。
version: "2.1.0"
---

# ohxts-stage-ets-hypium-upgrade（脚本化架构 v2.1）

> **架构说明**：本 skill 为「子功能脚本化」模式 —— 所有已遇到问题的处理能力固化在
> `scripts/` 下子功能脚本与**统一问题方案库（solutions/solutions.json）**中。
> **遇到编译/测试报错，先检索方案库复用处置脚本，不重新分析**；新问题解决后
> 用 `add_solution.py` 固化为方案（实时强化脚本能力）。经验速查表不内嵌本文件。

依据需求文档 [suffix_update.md](https://gitcode.com/fengqiang/mydoc/blob/main/suffix_update.md)。
开发仓：`/root/aiSkill/develop/xts_acts`（master 先同步 `upstream/master`）。

## 子功能路由（scripts/ 下，按功能分文件夹）

| 子功能 | 入口脚本 | 知识库/经验固化点 |
|--------|---------|------------------|
| 1️⃣ 后缀转换+需求1管理 | `scripts/convert/batch_convert.py` / `convert_ability.py` / `convert_testrunner.py` / `req1_scan.py` | convert 模板 + req1 判定/进度 |
| 2️⃣ 统一签名 | `scripts/sign/sign_one.py <工程> [--profile release\|debug\|system]` | templates/（release 默认） |
| 3️⃣ 编译+报错修复 | `scripts/build/build_one.py` / `build_batch.py` / `fix_compile_errors.py` | **统一方案库 domain=build** |
| 4️⃣ 测试+失败处置 | `scripts/test/test_one.py` / `test_batch.py` / `triage.py` | **统一方案库 domain=test** |
| 5️⃣ 进度表更新+报告 | `scripts/report/update_xlsx.py` / `progress_report.py` / `gen_xdevice_report.py` / **`gen_xdevice_summary.py`** | TSV/XLSX 数据在 dongwei/进度/；单工程 xdevice HTML 自包含；**多模块合并用官方 xdevice 模板渲染（--shot 自动截图 summary_top.png）** |
| 6️⃣ **问题方案库** | `scripts/solutions/search_solution.py` / `add_solution.py` | **solutions/solutions.json（55 条方案）** |
| 7️⃣ **门禁/编译规则自检** | **统一门禁 skill**：`ohos-gate-compliance/scripts/gate_check.py code <工程> --fix --strict` | 提交前扫描 ESObject/多余分号/大括号/行宽/命名/用例编号/await 捕获/done()/错误码转换/private 越权等（规则注册表 `rules/rules_ets.json` 38 条），命中报规则号+位置+修复建议，`--fix` 自动修复 |

公共库：`scripts/common/`（paths/git_utils/hdc_utils/build_utils/proj_utils/arkts_fixes）。
引号转换与机械格式修复已并入统一门禁 skill（`ohos-gate-compliance/scripts/checkers/ets_checker.py` 的 `dq_to_sq`/`fix_code_quality`）。
所有脚本 `--help` 可查用法。

**报告硬门禁（xdevice 格式）**：对外 HTML 只认官方 xdevice `summary_report.html`（禁止自写汇总页）；
多模块合并汇总用 `gen_xdevice_summary.py`（官方模板渲染，非自写页）；commit 后交付一张
`summary_top.png`（Summary→Test Details，最多 10 行 Module），多 HAP 只截合并汇总那一张：

```bash
# 合并多模块 → 官方 xdevice 格式报告 + 自动截图
python3 report/gen_xdevice_summary.py --shot --out <目录> \
    "hap1:SuiteA:<hap1>/parsed_summary.json" "hap2:SuiteB:<hap2>/parsed_summary.json"
# 未执行/失败模块标记
python3 report/gen_xdevice_summary.py --out <目录> "hap3:SKIP:设备离线" "hap4:FAIL:安装失败"
# 输出 SUMMARY_REPORT=...（--shot 时另输出 SCREENSHOT_PNG=...）
```

## 问题方案库（编译/测试报错优先走这里）

**报错 → 先检索 → 同类问题直接复用处置脚本 → 新问题固化为方案**（自动维护）：

```bash
# 检索（编译/测试错误文本，--domain 过滤）
python3 solutions/search_solution.py "<错误文本>" [--domain build|test] [--apply <工程>]
# 从日志批量检索（自动提取全部错误）
python3 solutions/search_solution.py --log <编译日志> --domain build --apply <工程>
# 列出方案库全部方案（含命中次数）
python3 solutions/search_solution.py --list
# 新问题固化（pattern 为正则；handler 为处置脚本 模块.函数，可空=仅指引）
python3 solutions/add_solution.py --domain build --pattern "<正则>" \
    --handler "fix_arkts.fix_xxx" --hint "<指引>" [--source "<来源>"]
# 从日志收集未匹配错误，逐个确认固化
python3 solutions/add_solution.py --collect --log <日志> --domain build
```

- 检索命中自动**计数**（count/last_hit 写回），可看问题频率
- handler 指向的处置脚本不存在时自动生成骨架（build→fixers/，test→handlers/）
- 工作流已接入：`fix_compile_errors.py`（编译）、`triage.py`（测试）内部都走方案库检索，
  未匹配错误明确提示用 `add_solution.py` 固化

## 需求1 管理（范围判定/待转文件/进度，并入 convert）

```bash
python3 convert/req1_scan.py --subdir ability           # 子系统需求1 工程清单+待转文件（按类型分类）
python3 convert/req1_scan.py --proj <工程相对路径>      # 单工程判定
python3 convert/req1_scan.py --progress --subdir ability # 进度：待转/已转换/完成工程
python3 convert/req1_scan.py --subdir ability --out json # 机器可读
```

判定规则：工程根 = 含 `hvigor/hvigor-config.json5` 的目录；stage 模型（有 build-profile.json5
且无 config.json，FA 不在需求1范围）；有业务 .ts/.js（排除 oh_modules/build/hvigorfile/.d.ts）
或 HEAD 历史有（已转完的也算需求1，计完成）；文件名含 JSProject 的 .js 刻意保留不转。

## 使用流程（闭环）

```bash
cd /root/aiSkill/.claude/skills/ohxts-stage-ets-hypium-upgrade/scripts
# 0. 范围与进度
python3 convert/req1_scan.py --subdir ability --progress
# 1. 转换（有 .ts/.js 的工程）
python3 convert/convert_ability.py <工程>            # Ability 类
python3 convert/convert_testrunner.py <TestRunner.ts> # TestRunner 模板
python3 convert/batch_convert.py --subdir ability --ext ts   # 批量
python3 common/git_utils.py --check-safety           # 数据安全检查（LOST/DUP）
# 2. 编译（自动 patch/恢复 compileSdk；双 HAP）
python3 build/build_one.py <工程>
python3 build/build_batch.py --list 清单 --round rNN  # 批量+错误分类汇总
# 3. 报错 → 方案库检索修复（同类直接复用，新问题固化）
python3 solutions/search_solution.py --log /tmp/req1_build/<工程>.log --domain build --apply <工程>
# 4. 签名（默认 release；特权工程 --profile system）
python3 sign/sign_one.py <工程>
# 5. 测试 + 失败处置（逐个闭环）
python3 test/test_one.py <rel>
python3 test/triage.py <rel>                          # 失败后先走方案库处置
python3 test/test_batch.py --subdir ability/ability_runtime
# 6. 进度
python3 report/update_xlsx.py && python3 report/progress_report.py --snapshot
```

## 不可脚本化的铁律（硬门禁，Agent 必须遵守）

1. **版权头**：禁止删除已有 Apache 2.0 / 既有厂商版权头；只做局部替换；提交前跑
   `common/git_utils.py --check-copyright`（基线 `origin/master`）。
2. **合入全测**：禁止抽样代替全测；批内每个改动 HAP 设备测试全绿才可 commit；失败即停。
3. **数据安全**：批量转换后必须 `--check-safety`（D *.ts 需有对应 .ets，无 LOST/DUP）。
4. **提交边界**：`compileSdkVersion/compatibleSdkVersion` 提交前必须为 `"26.0.0"` 字符串；
   勿提交 autosign/oh_modules/build；勿提交 hypium-binary 探测配置。
5. **签名策略**：默认 **release**；system（特权扩展）用 `--profile system`；
   debug 仅特定必须条件使用并注明原因。
6. **FA 工程**（config.json）不转 ets（Legacy 只认 .ts）；JSProject 等互操作 .js 不转。

## 经验沉淀路径（新问题解决后回写，实时强化）

- **统一问题方案库**：`scripts/solutions/solutions.json`（编译+测试全部经验，55 条，检索复用）
- 处置脚本：build/fixers/fix_*.py（编译）、test/handlers/handle_*.py（测试）
- 失败分析记录：`/root/aiSkill/develop/dongwei/进度/失败分析记录.md`（现象→分析→判定→处理）

## 编测能力自包含说明（2026-08-17 确认）

本 skill 的编译/测试/签名核心能力**已全部脚本化，不再依赖 ohxtsdynamic / ohhdc / ohhap**：

| 能力 | 原依赖 | 现自包含实现 |
|------|--------|-------------|
| 双 HAP 编译（build+test） | ohxtsflow build-all → ohhap/hapbuild.py | `common/build_utils.py`（直调 hvigorw.js，compileSdk 自动 patch/恢复） |
| 签名 | ohhap/hapbuild.py sign | `sign/sign_one.py`（直调 hap-sign-tool.jar，材料复用 /tmp/xts_sign） |
| 设备部署测试 | ohhdc.py deploy-test | `test/test_one.py` + `common/hdc_utils.py`（连接/清理/安装/逐套件/liveness） |
| xdevice HTML 报告 | ohxtsstatic/hypium_html_report.py | `report/hypium_html_report.py` + `gen_xdevice_report.py`（复制固化，自包含） |
| 测试日志摘要 | ohxtsflow analyze-test-log | `common/hdc_utils.parse_test_result` + `build/analyze_build_logs.py` |

`test_one.py --html`：测试通过后自动生成 xdevice HTML 报告（REPORT_HTML= 输出，供截图门禁/报告留存）。

## 关联

- 需求说明：https://gitcode.com/fengqiang/mydoc/blob/main/suffix_update.md
- 编测：自包含（见「编测能力自包含说明」）；历史参考：ohxtsdynamic/ohhdc/ohhap
- 提交：`xts-git-commit`（scripts/do_commit.py + check_precommit.py）
- 进度数据：`/root/aiSkill/develop/dongwei/进度/`（需求1进度表.xlsx、test_summary.tsv、报告）
