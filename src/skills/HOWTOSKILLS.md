# 如何使用SKILL
> 以下内容描述了怎么在cursor的工程里增加skill能力，方便开发和使用。
> 需要的环境如下：
> 1. cursor，打开一个工程，比如napi_generator
> 2. openharmony sdk：ohos-sdk-6.0-release
> 3. commandline tools：# Command Line Tools(linux-x64) Version: 6.0.1.260
> 4. node：v20.20.0
> 5. python3
> 6. 在command-line-tools文件夹里的sdk目录下，建立openharmony目录，里面建立9,11,20（对应的api版本目录，然后里面存openharmony sdk的linux或windows的工具链，这部分类似deveco的配置sdk）
> 7. 配置环境变量：export HOS_CLT_PATH=/root/toolchains/command-line-tools; export OHOS_SDK_PATH=/root/toolchains/ohos-sdk-6.0-release

**注意**：若增加配置本地PATH配置，会导致编译ohos, 如./build.sh --product-name rk3568会出现一些问题，所以使用的时候最好用绝对路径调用sdk里的具体命令，或者两个编译环境区分开

## 1. 安装openskills
```
npm install -g openskills
```
**注意**：node的版本号要大于18，我验证的环境是v20.20.0

## 2. 安装skills
```
npx openskills install anthropics/skills

root@ubuntu:~/workspace/napi_generator# npx openskills install anthropics/skills 
Installing from: anthropics/skills
Location: project (.claude/skills)
Default install is project-local (./.claude/skills). Use --global for ~/.claude/skills.

✔ Repository cloned
Found 17 skill(s)

✔ Select skills to install algorithmic-art           58.4KB, brand-guidelines          13.3KB, canvas-design            
5.3MB, doc-coauthoring           15.4KB, docx                      1.1MB, frontend-design           14.3KB, internal-comms    
        21.9KB, mcp-builder               118.9KB, pdf                       62.8KB, pptx                      1.2MB,
skill-creator             48.3KB, slack-gif-creator         42.7KB, theme-factory             140.7KB, web-artifacts-builder  
   44.8KB, webapp-testing            21.9KB, xlsx                      18.1KB, template                  140B
✅ Installed: algorithmic-art
✅ Installed: brand-guidelines
✅ Installed: canvas-design
✅ Installed: doc-coauthoring
✅ Installed: docx
✅ Installed: frontend-design
✅ Installed: internal-comms
✅ Installed: mcp-builder
✅ Installed: pdf
✅ Installed: pptx
✅ Installed: skill-creator
✅ Installed: slack-gif-creator
✅ Installed: theme-factory
✅ Installed: web-artifacts-builder
✅ Installed: webapp-testing
✅ Installed: xlsx
✅ Installed: template

✅ Installation complete: 17 skill(s) installed

Read skill: npx openskills read <skill-name>
Sync to AGENTS.md: npx openskills sync
```
**注意**：因为是从github下载，所以可能会下载失败，需多尝试几次

## 3. 检查skill安装
1. 项目目录里多出来.claude/skills目录，里面有17个skill
2. 通过agent对话问cursor，现在有多少skll，他回答：“从 anthropics/skills 安装的技能（17个）”
3，使用一个技能，如："使用pdf技能创建个pdf，存到项目根目录"

## 4. 使用工程里的 skill（src/skills 目录概述）

`src/skills` 下为本仓库自有的 OpenHarmony / 社区相关技能（共 9 个）。可拷贝到 `.claude/skills` 供 Cursor 自动选用，或直接 `python3 src/skills/<技能名>/<脚本>` 调用。每个技能按 **功能**、**用法**、**提示句** 说明如下。

---

### 4.1 gitlog

| 项 | 说明 |
|----|------|
| **功能** | 查看提交历史、仓库状态（status）；按条数/文件/范围查 log（log、log-oneline、log-stat、log-patch、log-file、log-range、log-first-parent）；生成 CTS 报告（report）。**自动提交并推送**（commit，默认 Signed-off-by，`--no-sign` 可关）；推送（push）；补签历史（sign-commits）；配置 Git 令牌（config-token）；**检查/修复源码版权头**（check-copyright，支持 .ets/.h/.cpp/.c/.d.ts，`--fix`/`--dry-run`）。 |
| **用法** | `python3 src/skills/gitlog/gitlog.py status` \| `log [n]` \| `log-oneline [n]` \| `log-stat [n]` \| `log-patch [n]` \| `log-file <文件>` \| `log-range <from>..<to>` \| `log-first-parent <range>` \| `report [tag]` \| **`commit ["说明"]`**（默认 -s） \| `push` \| `sign-commits <range>` \| `config-token [user] [token]` \| `check-copyright [--fix] [--dry-run]` \| `help` |
| **提示句** | 「查看最近 10 条提交」「查看 CMakeLists.txt 的提交历史」「生成 v1.4.4 到当前的 git log 报告」「用 gitlog 技能提交本项目修改」「为最近 5 个提交补 Signed-off-by」「检查/修复版权头」「配置 Git 令牌」 |

---

### 4.2 helloworld

| 项 | 说明 |
|----|------|
| **功能** | **getcodecnt.py**：OpenHarmony 社区共建数据（openharmony.cn 接口）— 雇主贡献（employer）、贡献者排名（author）、提交详情（detail/alldetail）、提交统计报告（stats）、按作者邮箱查提交（email）、按年份查询（yearquery）、兼容性设备（compatibility）。**generate.py**：生成 Hello World Python 文件。 |
| **用法** | getcodecnt：`python3 src/skills/helloworld/getcodecnt.py` [employer \| author \| detail \| alldetail \| stats \| email \| yearquery \| compatibility] [时间范围] [雇主名 分支 \| 邮箱 \| 公司ID 版本 系统类型]。时间范围：1week/1month/2month/3month/6month/1year/2year/3year/all。generate：`python3 src/skills/helloworld/generate.py` [输出文件名]。 |
| **提示句** | 「查看 OpenHarmony 雇主贡献代码信息」「查看近 1 个月的贡献者排名」「查看深开鸿在 master 分支近 1 个月的提交详情」「查看 xxx@kaihong.com 近一月的提交详情」「查询深开鸿的兼容性设备」「查询 OpenHarmony 6.0 的轻量系统兼容设备」「生成 Hello World Python 文件」 |

---

### 4.3 ohbuild

| 项 | 说明 |
|----|------|
| **功能** | OpenHarmony 构建：编译 fuzz 测试（需在含 `build.sh` 的源码根目录）；查看模块 fuzztest 目标及 gn-args（list-fuzztest）；生成**单个** fuzz 目标编译命令（build-fuzztest）；生成**部件全部** fuzztest 编译命令（build-component-fuzztest）；验证编译后是否生成 gcno（verify-coverage）。**编译 ACTS**（build-acts）：编译指定 ACTS 测试套件（可多 suite 逗号分隔），生成 out/\<product\>/suites/acts/acts，可选 `--no-run` 仅编译不执行。 |
| **用法** | 源码根目录执行：`./build.sh --build-target <目标名> --product-name rk3568 --gn-args <模块>_feature_coverage=true`。或：`python3 src/skills/ohbuild/ohbuild.py list-fuzztest <模块名或路径>` \| `build-fuzztest <目标名> [--product-name rk3568] [--gn-args xxx=true]` \| `build-component-fuzztest <模块名或路径> [--product-name rk3568] [--gn-args xxx=true]` \| `verify-coverage [模块名] [--product-name rk3568]` \| **`build-acts <suite名> [--src-dir PATH] [--product-name rk3568] [--system-size standard] [--no-run]`**（多 suite 用逗号分隔） \| `help`。 |
| **提示句** | 「编译 GetAppStatsMahFuzzTest 并开覆盖率」「某模块有哪些 fuzz 测试、编译时传什么 gn-args」「打印编译 battery_statistics 部件全部 fuzztest 的命令」「验证 power_manager 模块是否生成了 gcno」「列出 battery_statistics 的 fuzz 目标」「编译 ACTS 测试套件 ActsAACommandTest」「编译 ACTS 多个 suite 仅编译不运行（--no-run）」 |

---

### 4.4 ohhap

| 项 | 说明 |
|----|------|
| **功能** | HAP 构建：主包（build）、**测试包 build-test**；HAP 签名（sign，debug/release）、清除签名（clean-sign）。含环境与 SDK 版本检查。目前仅验证 6.0 release 工程；需 `HOS_CLT_PATH`、`OHOS_SDK_PATH`，项目含 `build-profile.json5`、hvigorw 可用。 |
| **用法** | `python3 src/skills/ohhap/hapbuild.py build <项目根目录>` \| `build-test <项目根目录>` \| `build <项目根目录> default [debug\|release]`；`sign <项目根目录> [debug\|release]`；`clean-sign <项目根目录>`。 |
| **提示句** | 「编译 / 构建 NativeProj46R」「编译 NativeProj46R 的单元测试 HAP」「@NativeProj46R 编译、签名这个项目」「对项目 xxx 的 HAP 进行签名」「清除项目 xxx 的签名」 |

---

### 4.5 ohhdc

| 项 | 说明 |
|----|------|
| **功能** | 设备侧 HAP 管理：列出已安装应用（apps/list-apps）；卸载（uninstall）；安装/替换安装（install/replace-install）；**install-project**（安装主 HAP + 测试 HAP）；**deploy-test**（卸载 → 替换安装主/测 HAP → 从 List.test.ets 自动发现测试套件并 aa test）；查看前台/运行中应用（foreground/fg、dump-all、running/dump-running）；**启停应用**（force-stop/stop、start）；查看设备日志（hilog/logs）、错误/故障日志（faultlog/error-log）；运行 ohosTest（test）。需设备 HDC 连接、hdc 在 PATH。 |
| **用法** | `python3 src/skills/ohhdc/ohhdc.py apps` \| `uninstall <bundleName>` \| `install <HAP路径>` \| `replace-install <HAP路径>` \| `install-project <项目根目录>` \| **`deploy-test <项目根目录>`** [--suite "A,B"] [--timeout N] \| `test <bundleName> [--suite A,B]` \| `foreground`/`fg`/`dump-all` \| `running`/`dump-running` \| `force-stop`/`stop <bundleName>` \| `start <bundleName> [--ability <abilityName>]` \| `hilog`/`logs [关键字]` \| `faultlog`/`error-log [子目录]`。 |
| **提示句** | 「查看设备上安装的 HAP」「卸载 ohos.test.xxx」「替换安装这个 HAP」「安装这个项目的两个 HAP」「部署运行这个项目的 HAP 测试用例」「查看前台/运行中应用」「强制关闭/启动应用」「查看设备日志」「查看设备错误日志 data/log/faultlog」 |

---

### 4.6 ohtest

| 项 | 说明 |
|----|------|
| **功能** | **dts 单元测试**（ohtest.py）：根据 `.d.ts` 接口生成 ohosTest 测试套（4 类边界用例），并在 List.test.ets 注册。**UITest**（uitest_gen.py）：根据 `.ets` 页面生成 UI 测试套（Driver/ON、assertComponentExist、click）。**Fuzz 执行**（fuzztest.py）：在 developer_test 下执行指定 fuzz 套，可选 `--coverage`、`--dry-run`。**ACTS 运行**（actstest.py）：在 out/<product>/suites/acts/acts 下执行 run.sh run -l <套件名>，解析 Test Summary，定位最新 reports 下的 summary_report。**覆盖率分析**（coverage_analysis.py）：从设备拉取 gcda、生成 .gcov、统计覆盖率（run/analyze/clear-analyze/clear-rerun-fuzz-analyze）。**覆盖率缺口测试建议**（coverage_gap_tests.py）：根据 .gcov 生成「覆盖率缺失的测试用例」建议（analyze-gaps）。**ACTS/Fuzz 发现**（find_actstest.py / find_fuzztest.py）：扫描 test/xts/acts 得 ACTS 套件列表（all_acts.md）、或扫描含 fuzztest 的部件列表（partwithfuzztest.md）。 |
| **用法** | dts：`python3 src/skills/ohtest/ohtest.py --dts <dts路径> --test-dir <test目录>`。UITest：`python3 src/skills/ohtest/uitest_gen.py --ets <页面.ets> --test-dir <test目录>`。Fuzz：`python3 src/skills/ohtest/fuzztest.py run -ts <套名> [--coverage] [--dry-run]`。**ACTS 运行**：`python3 src/skills/ohtest/actstest.py run <套件名> [--product-name rk3568] [--acts-dir PATH]`。覆盖率：`python3 src/skills/ohtest/coverage_analysis.py run` \| `analyze` \| `clear-analyze` \| `clear-rerun-fuzz-analyze [-ts 套名]`。缺口建议：`python3 src/skills/ohtest/coverage_gap_tests.py analyze-gaps [报告目录] [--module 模块名] [--output 输出文件]`。发现：`python3 src/skills/ohtest/find_actstest.py [--output src/all_acts.md]`；`python3 src/skills/ohtest/find_fuzztest.py [--root base] [--output src/partwithfuzztest.md]`。 |
| **提示句** | 「根据 Index.d.ts 生成/补全单元测试」「为 libentry 接口在 ohosTest 里增加测试套」「对 Index.ets 实现 UI 测试 / 为页面生成 UITest」「执行 GetAppStatsMahFuzzTest 的 fuzz 测试（带覆盖率）」「运行 ACTS 测试套件 ActsAACommandTest」「收集 fuzz 覆盖率并分析」「根据覆盖率报告生成缺失的测试用例建议」「扫描 test/xts/acts 列出所有 ACTS 测试套」「列出工程里带 fuzztest 的部件」 |

---

### 4.7 ohclitools

| 项 | 说明 |
|----|------|
| **功能** | 将 **clitools** 集成到工程编译：**deploy**（拷贝 clitools 到目标 test 目录并在 BUILD.gn 的 deps 中增加 clitools 目标）；**build**（在源码根目录执行 build.sh 编译该 test）；**verify**（检查产物是否存在，可选 **--push-run** 用 hdc 推送到设备并运行）；**all**（依次 deploy → build → verify）。默认目标为 bluetooth test，可 `--test-dir`、`--product-name`。需 `OHOS_SDK_PATH`（verify --push-run 时）。 |
| **用法** | `python3 src/skills/ohclitools/ohclitool.py deploy [--test-dir PATH]` \| `build [--test-dir PATH] [--product-name NAME]` \| `verify [--product-name NAME] [--push-run]` \| `all [--test-dir PATH] [--product-name NAME] [--push-run]` \| `help`。选项：`--test-dir` 目标 test 目录（默认 foundation/communication/bluetooth/test），`--product-name` 默认 rk3568。 |
| **提示句** | 「把 clitools 部署到蓝牙 test 并编译」「部署、编译、验证 clitools 并推送到设备运行」「验证 btcommand 产物并推到设备执行」 |

---

### 4.8 ohppt

| 项 | 说明 |
|----|------|
| **功能** | **ohppt.py**：根据 Markdown **表格**生成**结构图 PPT**，一行一个矩形框（深灰），列内容为框内子模块；支持 `；` 分多组、` - ` 分标题与子项；黑体 12 号左对齐。**build_architecture_ppt.py**：根据内置架构分析结构生成**固定版式架构图 PPT**（应用层/应用框架层/系统服务层/内核层/芯片层 + 右侧 IDE 和工具链）。依赖：`pip install python-pptx`。 |
| **用法** | **表格转结构图**：`python3 src/skills/ohppt/ohppt.py <input.md> [output.pptx]`（不指定输出则与输入同名的 .pptx）。**架构图**：`python3 src/skills/ohppt/build_architecture_ppt.py [output.pptx]`。 |
| **提示句** | 「根据 example.md 的表格生成结构图 PPT」「根据架构分析文档生成 OpenHarmony 架构图 PPT」 |

---

### 4.9 ohanalysis

| 项 | 说明 |
|----|------|
| **功能** | OpenHarmony 工程**静态分析**（ohanalysis.py）：在项目 `src` 下查找 `bundle.json`，整理子系统、系统能力、组件、deps、inner_kits、test。**bundle**：解析指定路径或前缀下的 bundle.json，输出上述字段（可 `--brief` 仅输出概要）。**scan-all**：全量扫描 src（排除 kernel、third_party、applications 等），生成 Markdown 报告（统计、子系统/组件排名与列表、syscap/inner_kits/deps/test 列表）。**diff**：对比两个 src 路径（如 61release 与 60release），生成两份分析报告及一份增删改对比报告。全量/对比建议超时 60 分钟。 |
| **用法** | `python3 src/skills/ohanalysis/ohanalysis.py bundle [路径] [--src-dir PATH] [--prefix PATH] [--brief]`（路径不传则扫描整个 src）。`scan-all [--src-dir PATH]`。`diff <PATH1> <PATH2>`（两 src 根目录）。`help`。 |
| **提示句** | 「解析 foundation/ability/ability_base 的 bundle.json」「扫描整个 OpenHarmony src 生成组件分析报告」「对比 61release 与 60release 的 src 差异」「列出某子系统的 inner_kits 和 test」 |

---

### 4.10 典型使用流程

| 场景 | 流程 | 涉及技能 |
|------|------|----------|
| **HAP 开发与设备测试** | ohhap build → sign → ohhdc deploy-test（自动发现测试套件并跑 aa test） | ohhap、ohhdc |
| **仅安装不跑测** | ohhdc uninstall \<bundleName\> → ohhdc install-project \<项目根目录\> | ohhdc |
| **单元测试生成与跑测** | ohtest dts / uitest_gen 生成测试套 → ohhap build + sign → ohhdc deploy-test | ohtest、ohhap、ohhdc |
| **Fuzz 测试与覆盖率** | ohbuild 编译 fuzz（--gn-args \<模块\>_feature_coverage=true）→ ohtest fuzztest run -ts \<套名\> --coverage → ohtest coverage_analysis run/analyze | ohbuild、ohtest |
| **ACTS 测试运行** | ohbuild build-acts \<套件名\> 编译 ACTS → 在 out/\<product\>/suites/acts/acts 下：`python3 src/skills/ohtest/actstest.py run <套件名> [--product-name rk3568]`，解析 Test Summary 并定位 reports | ohbuild、ohtest |
| **clitools 集成与验证** | ohclitools deploy [--test-dir PATH] → build → verify [--push-run]；或一键 `all [--push-run]` | ohclitools |
| **工程静态分析** | ohanalysis bundle [路径] 解析单组件；scan-all 全量扫描生成报告；diff PATH1 PATH2 对比两版本 src | ohanalysis |
| **代码提交与推送** | gitlog status → gitlog commit "提交说明"（默认 Signed-off-by）→ 自动 push | gitlog |

## 5. 配置hdc连接（确保开发版联网且和Linux服务器可以互相ping通）
1. 把${OHOS_SDK_PATH}/linux/toolchains加入环境变量
2. 配置hdc为联网模式
```
# hdc tmode port 8710
Set device run mode successful.
```
3. 远程网络连接设备
```
root@ubuntu:# hdc tconn 192.168.10.40:8710
Connect OK
root@ubuntu:# hdc shell
# ls
bin        config       eng_system  lost+found     storage   tmp
chip_ckm   data         etc         mnt            sys       updater
chip_prod  dev          init        module_update  sys_prod  vendor
chipset    eng_chipset  lib         proc           system
# exit
```
