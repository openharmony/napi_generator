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
2. 通过 agent 对话问 Cursor，现在有多少 skill，应能答出从 anthropics/skills 安装的技能数量（示例为 17 个，以实际安装为准）
3. 使用一个技能，如："使用 pdf 技能创建个 pdf，存到项目根目录"

## 4. 使用工程里的 skill（src/skills 目录概述）

`src/skills` 目录下为本仓库自有的 OpenHarmony / 社区相关技能，共 **13** 个（各目录内有 `SKILL.md` 详述；部分技能另含 `*.py` 入口）。**文档与示例中的命令一律以 `napi_generator` 仓库根下的 `src/skills/...` 为准**（在仓库根执行时可直接写 `python3 src/skills/<技能>/<脚本>.py`）。若将技能目录拷贝到 **`.claude/skills/<名>/`** 供 Cursor 读取，运行命令时仍可使用本仓库 **`src/skills/...`** 的绝对或相对路径，与拷贝与否无关。

> **区分**：**ohhap** 负责 **HAP 应用** 的 hvigor 构建与签名；**ohbuild** 负责 **fuzz 测试编译、覆盖率 gn-args、部件 fuzztest 目标** 等，与 HAP 流程不同。**rkflash** 负责 **Rockchip 镜像同步与烧录**（与 HAP/fuzz 无关）。**ohrecord** 为 **系统侧 snapshot_record 录屏 MP4** 流程，与 **ohproj** HAP 模板互补（详文见 **ohproj/SKILL.md** 第十节）。

### 4.1 技能总览

| 目录 | 功能概要 | 主要脚本 / 说明 |
|------|----------|-----------------|
| **gitlog** | 仓库状态、按条数/文件/范围查 log、生成报告、**提交**（默认先 **check-style**）、**push**、**check-style** / **check-copyright**、**sign-commits**、**config-token**、**branches** 等 | `gitlog/gitlog.py` |
| **helloworld** | 社区共建统计：雇主贡献、作者排名、提交详情、邮箱查询、兼容性、年度/区间统计；另有示例代码生成 | `helloworld/getcodecnt.py`、`helloworld/generate.py` |
| **ohhap** | HAP 主包 / ohosTest 测试包构建、debug/release 签名、清除签名、环境检查 | `ohhap/hapbuild.py` |
| **ohbuild** | 列出模块 fuzz 目标、编译单个/部件 fuzztest、**verify-coverage**（覆盖率 gn-args 提示） | `ohbuild/ohbuild.py` |
| **ohhdc** | 设备应用列表、安装/替换/卸载 HAP、hilog、**faultlog**、前台应用、启停应用、**aa test**、部署测试等 | `ohhdc/ohhdc.py` |
| **ohtest** | dts 生成单测、**UITest**（ets）、**fuzztest**、查找 fuzz/ACTS 套件、**ACTS run**、覆盖率分析与缺口 | `ohtest/ohtest.py`、`uitest_gen.py`、`fuzztest.py`、`find_fuzztest.py`、`find_actstest.py`、`actstest.py`、`coverage_analysis.py`、`coverage_gap_tests.py` |
| **ohanalysis** | 解析 `bundle.json`、全量扫描生成 MD 报告、两版 `src` **diff** 对比、**executables**（`ohos_executable` 与产物对照；由脚本加载同目录 **`oh_executable_report.py`**） | `ohanalysis/ohanalysis.py`、`ohanalysis/oh_executable_report.py`（大工程建议超时 **60 分钟**） |
| **ohclitools** | btclitools / wificlitools / dsclitools：接口覆盖、部署到 test、编译、验证、推设备跑测 | `ohclitools/ohclitool.py`（在 OH **src** 根执行） |
| **ohppt** | Markdown 表格等 → PPTX；另有架构幻灯片脚本 | `ohppt/ohppt.py`、`ohppt/build_architecture_ppt.py`（需 `python-pptx`） |
| **ohproj** | 模板工程 **create**、**build** / **sign** / **build-test** / **test** / **clean-sign** | `ohproj/ohproj.py` |
| **ohservices** | SystemAbility（sampletest 9009）从白名单、SELinux、init 到 **HiDumper** 的全流程文档与检查 | 以 `SKILL.md`、`saguide.md` 为主；辅助脚本 `ohservices/ohsa.py`（如 `all` / `build` / `device`） |
| **rkflash** | Rockchip **OH 镜像**：SSH 同步（pscp/scp/paramiko 等）到本地 **`images/`**，按 **`config.cfg`** 驱动 **`upgrade_tool` 烧录**；默认版本校验、VERIFY 后关灯；**无内置同步主机/密码**，须 **`rkflash_sync_config.json`**（勿提交真实密码；见根目录 `.gitignore`）或 **`RKFLASH_*` 环境变量** | `rkflash/rkflash.py`；示例配置 `rkflash_sync_config.example.json` |
| **ohrecord** | **snapshot_record** 录屏 **MP4**；**audio_record_demo** / **audio_play_demo** / **camera_record** 等单编与设备链路；路径、SELinux、**hilog**、**.so** 校验；录屏修改清单见 **ohproj/SKILL.md 第十节** | `ohrecord/ohrecord.py`（子命令含 `paths`、`build`、`prep-device`、`device-status`、`record`、`pull`、`verify-host-so`、`verify-device-so`、`verify-remote-mp4`、`hilog-capture`、`targets` 及 **`audio-*` / `play-*` / `cam-*`** 等，完整列表见 **ohrecord/SKILL.md**） |

**常见限制（摘要）**

- **gitlog**：依赖本机 `git`；`commit` 默认会先执行 **C/C++ check-style**，可用 **`--skip-style-check`** 跳过（不推荐）；`commit` 成功后会 **自动 push**。在 **Windows** 控制台若 `gitlog.py` 打印报错 **`UnicodeEncodeError: 'gbk'`**，可先执行 **`$env:PYTHONIOENCODING='utf-8'; $env:PYTHONUTF8='1'`**（PowerShell）再运行脚本。
- **helloworld**：依赖 openharmony.cn 开放接口与网络；时间范围、雇主名等需符合接口约定。
- **ohhap**：**目前主要验证 6.0 release 类工程**；需 `HOS_CLT_PATH`、`OHOS_SDK_PATH`；签名依赖证书与 `build-profile.json5`、可用 `hvigorw`。
- **ohhdc**：设备需 `hdc list targets` 可见；安装/跑测需已签名 HAP。
- **ohtest**：dts 仅解析部分导出形式；UITest 为基于正则的页面解析，复杂交互需人工补全。
- **ohanalysis**：全量 `scan-all` / `diff` 耗时长，**建议单次调用超时约 60 分钟**。
- **rkflash**：依赖本机 **hdc**、**Rockchip upgrade_tool**（常见为 Windows）、同步工具（**pscp** / OpenSSH **scp** / **paramiko** 等）；同步参数须自行配置，**不要将含真实密码的 `rkflash_sync_config.json` 提交到仓库**。
- **ohrecord**：依赖 **hdc** 连接设备；全量 **`build`** 与镜像侧改动见文档，录制路径须落在 **`/data/test/media`** 并注意 **SELinux 标签**（见该技能 `SKILL.md`）。

**环境与路径（常用）**

- HAP / 部分工具：`HOS_CLT_PATH`、`OHOS_SDK_PATH`（见本文档开头）。
- **ohhdc / 设备**：`hdc` 在 PATH；参见下文 **§5**。
- **ohclitools**：在含 `build.sh` 的 OpenHarmony **src** 目录下执行；依赖 `OHOS_SDK_PATH` 中的 hdc 做推送运行。

### 4.2 使用方式

- **方式一**：将需要的技能目录从 `src/skills/<名>/` 拷贝到项目 `.claude/skills/<名>/`，与通过 openskills 安装的技能并列，便于对话中引用「某技能」。
- **方式二**：命令行直接使用仓库内路径（在 **napi_generator 仓库根** 下）：
  - `python3 src/skills/ohhap/hapbuild.py build src/skills/ohhap/NativeProj46R`
  - `python3 src/skills/ohhdc/ohhdc.py replace-install <HAP路径>`
  - `python3 src/skills/gitlog/gitlog.py log 10`
  - `python3 src/skills/ohtest/ohtest.py --dts <路径> --test-dir <目录>`

### 4.3 对话提示句与命令速查

Agent 多由自然语言触发；下表为**用户可说的提示句**与**典型命令**对应关系（细节以各目录 `SKILL.md` 为准）。

| 技能 | 提示句示例 | 典型命令（仓库根下） |
|------|------------|----------------------|
| **gitlog** | 「看下仓库状态」「最近 20 条提交」「从 v1.4.4 到 HEAD 生成 git 报告」「提交本次改动并推送」（默认先 **check-style**，可 **`--skip-style-check`**）「跑 check-style / check-copyright」「配置 token」「签名历史提交」 | `python3 src/skills/gitlog/gitlog.py status` / `log 20` / `report` / `commit "说明"`（**非** `-m`；成功后默认 **push**） / `push` / `check-style` / `check-copyright` / `config-token …` / `sign-commits HEAD~3..HEAD` |
| **helloworld** | 「近一个月贡献者排名」「某雇主在 master 上的提交详情」「按邮箱查提交」「兼容性设备查询」「生成 helloworld 示例」 | `python3 src/skills/helloworld/getcodecnt.py ...`（子命令见 SKILL）；`python3 src/skills/helloworld/generate.py` |
| **ohhap** | 「编译并签名 NativeProj46R」「只打 ohosTest 包」「清除签名」「检查编译环境」 | `python3 src/skills/ohhap/hapbuild.py build …` / `build-test` / `sign` / `clean-sign` |
| **ohbuild** | 「列出某模块的 fuzz 目标」「编译某个 FuzzTest」「编译整个部件的 fuzztest」「查覆盖率要配什么 gn-args」 | `python3 src/skills/ohbuild/ohbuild.py list-fuzztest …` / `build-fuzztest …` / `build-component-fuzztest …` / `verify-coverage …` |
| **ohhdc** | 「把签好的 HAP 装到设备」「替换安装」「跑 ohosTest 某套件」「看 faultlog / hilog」「列出已装应用」 | `python3 src/skills/ohhdc/ohhdc.py install …` / `replace-install …` / `test …` / `faultlog …` / `apps` |
| **ohtest** | 「根据 d.ts 生成单测」「给 Index.ets 生成 UITest」「生成/编译 fuzz」「扫描仓库里所有 fuzz 套件」「扫描 ACTS 套件列表」「在 out 里跑某个 ACTS suite」「做覆盖率分析/缺口」 | 均在 `src/skills/ohtest/`：`python3 …/ohtest.py --dts …`、`…/uitest_gen.py`、`…/fuzztest.py`、`…/find_fuzztest.py`、`…/find_actstest.py`、`…/actstest.py`、`…/coverage_analysis.py`、`…/coverage_gap_tests.py`（参数见 `SKILL.md`） |
| **ohanalysis** | 「解析某个部件的 bundle」「全 src 扫 bundle 出报告」「对比两个 release 的 src 差异」「ohos_executable 与 out 产物对照」 | `python3 src/skills/ohanalysis/ohanalysis.py bundle …` / `scan-all` / `diff PATH1 PATH2` / `executables --out-product rk3568` / `help` |
| **ohclitools** | 「检查 btclitools 对接口覆盖」「部署 wificlitools 并编译验证」「推 dscommand 上设备跑一下」 | 在 OH **src** 下执行：`python3 <本仓库>/src/skills/ohclitools/ohclitool.py`，子命令含 `coverage`、`deploy`、`build`、`verify`、`all`（见 SKILL） |
| **ohppt** | 「把这份 MD 表格转成 PPT」「用 build_architecture_ppt 出架构幻灯片」 | `python3 src/skills/ohppt/ohppt.py …`；`python3 src/skills/ohppt/build_architecture_ppt.py --help` |
| **ohproj** | 「用模板创建一个 OH 工程」「编译/签名/跑测模板工程」 | `python3 src/skills/ohproj/ohproj.py`，子命令如 `create`、`build`、`sign`、`build-test`、`test`、`clean-sign` |
| **ohservices** | 「按 sampletest 配 SystemAbility」「SELinux / init 报错怎么查」「用 ohsa 做设备/编译/HiDumper 诊断」 | 阅读 `src/skills/ohservices/SKILL.md`；`python3 src/skills/ohservices/ohsa.py device` / `diag` / `build --product rk3568` / `hidumper` / `hilog-disk` 等（见 **ohservices/SKILL.md**） |
| **rkflash** | 「从编译机同步 RK 镜像到本机并烧录」「跑 pscp-sync / flash_all」「关掉校验或关灯选项」 | 先配置 **`src/skills/rkflash/rkflash_sync_config.json`**（从 **`rkflash_sync_config.example.json`** 复制）或环境变量；`python3 src/skills/rkflash/rkflash.py pscp-sync` / `flash_all` 等（见 `SKILL.md`） |
| **ohrecord** | 「准备 snapshot_record 目录与标签」「录一段屏并拉回 MP4」「摄像头 cam-run 拉 MP4」「查录屏相关 hilog」 | `python3 src/skills/ohrecord/ohrecord.py prep-device` / `record --seconds 60 -f /data/test/media/x.mp4` / `pull --remote …` / `cam-run --pull --verify -- auto 10` / `hilog-capture`（`-f` 同 `--file`；完整见 **ohrecord/SKILL.md**） |

**典型串联**：**ohhap** 构建签名 → **ohhdc** 安装 → **ohhdc test** 或 **ohtest**（dts/UITest/fuzz/ACTS）→ 日志用 **ohhdc faultlog**。静态体量与依赖对比用 **ohanalysis**；命令行工具闭环用 **ohclitools**。整机 **Rockchip 镜像**同步烧录用 **rkflash**；**系统镜像侧录屏**用 **ohrecord**（与 **ohproj §10** 对照）。

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
