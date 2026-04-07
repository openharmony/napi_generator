# 如何使用SKILL
> 以下内容描述了怎么在cursor的工程里增加skill能力，方便开发和使用。
> 需要的环境如下：
> 1. cursor，打开一个工程，比如napi_generator
> 2. openharmony sdk：ohos-sdk-6.0-release
> 3. commandline tools：# Command Line Tools(linux-x64) Version: 6.0.1.260
> 4. node：v20.20.0
> 5. python3
> 6. 在command-line-tools文件夹里的sdk目录下，建立openharmony目录，里面建立9,11,20（对应的api版本目录，然后里面存openharmony sdk的linux或windows的工具链，这部分类似deveco的配置sdk）
> 7. 配置环境变量（路径换成你本机实际目录）：`export HOS_CLT_PATH=<Command Line Tools 根目录>`；`export OHOS_SDK_PATH=<ohos-sdk 根目录>`

## 1. 安装openskills
```
npm install -g openskills
```
**注意**：node的版本号要大于18，我验证的环境是v20.20.0

## 2. 安装skills
```
npx openskills install anthropics/skills

user@host:~/your-repo$ npx openskills install anthropics/skills 
Installing from: anthropics/skills
Location: project-local skills directory (openskills prints the exact path)
Default install is project-local. Use --global for a user-wide skills directory (path shown by the installer).

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
1. 项目目录里出现 openskills 安装的技能目录（终端会打印路径），其中有已安装的 skill（示例为 17 个，以实际为准）
2. 通过 agent 对话问 Cursor，现在有多少 skill，应能答出从 anthropics/skills 安装的技能数量（示例为 17 个，以实际安装为准）
3. 使用一个技能，如："使用 pdf 技能创建个 pdf，存到项目根目录"

## 4. 使用工程里的 skill（src/skills 目录概述）

`src/skills` 目录下为本仓库自有的 OpenHarmony / 社区相关技能，共 **15** 个（各目录内有 `SKILL.md` 详述；部分技能另含 `*.py` 入口）。**文档与示例中的命令一律以 `napi_generator` 仓库根下的 `src/skills/...` 为准**（在仓库根执行时可直接写 `python3 src/skills/<技能>/<脚本>.py`）。**运行脚本时请始终使用本仓库内路径**（或环境变量 **`${NAPI_GENERATOR_ROOT}/src/skills/...`**），勿混用编辑器侧技能安装目录中的副本路径。

> **区分**：**ohhap** 负责 **HAP 应用** 的 hvigor 构建与签名；**ohbuild** 负责 **fuzz 编译**、**verify-coverage / gn-args**、**build-acts（ACTS suite 在 `test/xts/acts` 下编译）** 等，与 HAP 流程不同（**跑** ACTS 用例见 **ohtest/actstest.py**）。**ohhdf** 负责 **标准系统（如 rk3568）HDF**：Light / bluehdf 样例、**单编与推送**、**hilog / dmesg / hidumper** 调试（见 **ohhdf/howtohdf.md**、**ohhdf.py**）。**ohipc** 负责 **`foundation/communication/ipc_example`**：**IPC 架构**（**ipcarch.md**）、**零基础长文**（**howtoipc.md**，体例对齐 **howtohdf**）、**`ohipc.py`**：`howto`（**`--full`**）、`arch`、`paths`、**build / push / `test` / `test-concurrent` / `perf` / `test-parcel`** 等。**rkflash** 负责 **Rockchip 镜像同步与烧录**（与 HAP/fuzz 无关）。**ohrecord** 为 **系统侧 snapshot_record 录屏 MP4** 流程，与 **ohproj** HAP 模板互补（详文见 **ohproj/SKILL.md** 第十节）。

### 4.1 技能总览

| 目录 | 功能概要 | 主要脚本 / 说明 |
|------|----------|-----------------|
| **gitlog** | 仓库状态、按条数/文件/范围查 log、生成报告、**提交**（默认先 **check-style**）、**push**、**check-style** / **check-copyright**、**sign-commits**、**config-token**、**branches** 等 | `gitlog/gitlog.py` |
| **helloworld** | 社区共建统计：雇主贡献、作者排名、提交详情、邮箱查询、兼容性、年度/区间统计；另有示例代码生成 | `helloworld/getcodecnt.py`、`helloworld/generate.py` |
| **ohhap** | HAP 主包 / ohosTest 测试包构建、debug/release 签名、清除签名、环境检查 | `ohhap/hapbuild.py` |
| **ohbuild** | 列出模块 fuzz 目标、编译单个/部件 fuzztest、**verify-coverage**（覆盖率 gn-args 提示）、**build-acts**（在 `test/xts/acts` 下编指定 ACTS suite，多 suite 逗号分隔） | `ohbuild/ohbuild.py` |
| **ohhdc** | 设备应用列表、**install** / **replace-install** / **install-project** / **uninstall**、**deploy-test**（卸装后装主包+测试包并 **aa test**）、**hilog** / **faultlog**、前台/运行中应用、**force-stop** / **start**、**test**（ohosTest）、**screenshot** / **screenshot-app**、**layout** / **dump-layout**、**led**、**wifi-kaihong** 等 | `ohhdc/ohhdc.py`（`--help` 查看全部 **action**） |
| **ohhdf** | **HDF**（rk3568 等）：**Light** / **bluehdf** 架构与样例、**HCS / UHDF / HAL** 路径索引；**单编** `light_demo` / `blue_demo` / **`build-target`**；**hdc** 推送 so 与 demo、**device-check**、**hilog-hdf** / **dmesg-hdf** / **hidumper-list**；长文 **howtohdf.md**、摘要 **hdf_guide_zh.md** | `ohhdf/ohhdf.py`（在 OH **源码根**或子目录执行；多设备 **`-t`** / **`OHHDF_HDC_TARGET`**） |
| **ohipc** | **IPC** 与 **`ipc_example`**：**ipcarch.md**、**howtoipc.md**（零基础全链路）；**Stub/Proxy** 双进程 demo、**Parcel** 进程内 GTest；**`ohipc.py`**：**`howto`**（**`--full`**）/ **`arch`** / **`paths`** / **`build-server|client|all|unittest`** / **`push`** / **`run-server`** / **`test`** / **`test-concurrent`** / **`perf`** / **`test-parcel`**；跨进程用例见 **IPC_EXAMPLE_CROSS_PROCESS_TEST_REPORT.md**；NDK/HAP 见 **NATIVEPROJ_IPC_FRAMEWORK.md** | `ohipc/ohipc.py`（cwd 在 **OH 源码树**内以便解析 **`build.sh`**；脚本路径用 **`src/skills/ohipc/ohipc.py`**；**`-t`** / **`OHIPC_HDC_TARGET`**） |
| **ohtest** | dts 生成单测、**UITest**（ets）、**fuzztest**、查找 fuzz/ACTS 套件、**ACTS run**、覆盖率分析与缺口 | `ohtest/ohtest.py`、`uitest_gen.py`、`fuzztest.py`、`find_fuzztest.py`、`find_actstest.py`、`actstest.py`、`coverage_analysis.py`、`coverage_gap_tests.py` |
| **ohanalysis** | 解析 `bundle.json`、全量扫描生成 MD 报告、两版 `src` **diff** 对比、**executables**（`ohos_executable` 与产物对照；由脚本加载同目录 **`oh_executable_report.py`**） | `ohanalysis/ohanalysis.py`、`ohanalysis/oh_executable_report.py`（大工程建议超时 **60 分钟**） |
| **ohclitools** | btclitools / wificlitools / dsclitools：接口覆盖、部署到 test、编译、验证、推设备跑测 | `ohclitools/ohclitool.py`（在 OH **src** 根执行） |
| **ohppt** | Markdown 表格等 → PPTX；另有架构幻灯片脚本 | `ohppt/ohppt.py`、`ohppt/build_architecture_ppt.py`（需 `python-pptx`） |
| **ohproj** | 模板工程 **create**、**build** / **sign** / **build-test** / **test** / **clean-sign** | `ohproj/ohproj.py` |
| **ohservices** | SystemAbility（sampletest 9009）从白名单、SELinux、init 到 **HiDumper** 的全流程文档与检查 | 以 `SKILL.md`、`saguide.md` 为主；辅助脚本 **`ohservices/ohsa.py`**：`build`、`device`、`all`、`device-files`、`hilog-disk`、`dmesg`、`hidumper`、`diag`（多设备 **`-t`** / **`OHSA_HDC_TARGET`**） |
| **rkflash** | Rockchip **OH 镜像**：SSH 同步（pscp/scp/paramiko 等）到本地 **`images/`**，按 **`config.cfg`** 驱动 **`upgrade_tool` 烧录**；默认版本校验、VERIFY 后关灯；**无内置同步主机/密码**，须 **`rkflash_sync_config.json`**（勿提交真实密码；见根目录 `.gitignore`）或 **`RKFLASH_*` 环境变量** | `rkflash/rkflash.py`；示例配置 `rkflash_sync_config.example.json` |
| **ohrecord** | **snapshot_record** 录屏 **MP4**；**audio_record_demo** / **audio_play_demo** / **camera_record** 等单编与设备链路；路径、SELinux、**hilog**、**.so** 校验；录屏修改清单见 **ohproj/SKILL.md 第十节** | `ohrecord/ohrecord.py`（子命令含 `paths`、`build`、`prep-device`、`device-status`、`record`、`pull`、`verify-host-so`、`verify-device-so`、`verify-remote-mp4`、`hilog-capture`、`targets` 及 **`audio-*` / `play-*` / `cam-*`** 等，完整列表见 **ohrecord/SKILL.md**） |

**常见限制（摘要）**

- **gitlog**：依赖本机 `git`；`commit` 默认会先执行 **C/C++ check-style**，可用 **`--skip-style-check`** 跳过（不推荐）；`commit` 成功后会 **自动 push**。在 **Windows** 控制台若 `gitlog.py` 打印报错 **`UnicodeEncodeError: 'gbk'`**，可先执行 **`$env:PYTHONIOENCODING='utf-8'; $env:PYTHONUTF8='1'`**（PowerShell）再运行脚本。
- **helloworld**：依赖 openharmony.cn 开放接口与网络；时间范围、雇主名等需符合接口约定。
- **ohhap**：**目前主要验证 6.0 release 类工程**；需 `HOS_CLT_PATH`、`OHOS_SDK_PATH`；签名依赖证书与 `build-profile.json5`、可用 `hvigorw`。
- **ohhdc**：设备需 `hdc list targets` 可见；安装/跑测需已签名 HAP。
- **ohhdf**：依赖本机 OpenHarmony **源码树**（含 **`drivers/peripheral/light`**、**`bluehdf`** 等）与 **`./build.sh`**；**推送 / 设备子命令**需 **hdc**；详见 **ohhdf/howtohdf.md**。
- **ohipc**：依赖含 **`foundation/communication/ipc_example`** 的 OH **源码根**与 **`./build.sh`**；**`push` / `test*` / `run-server` / `perf`** 需 **hdc**；成功判据以 **ohipc/SKILL.md** 与脚本正则为准。
- **ohtest**：dts 仅解析部分导出形式；UITest 为基于正则的页面解析，复杂交互需人工补全。
- **ohanalysis**：全量 `scan-all` / `diff` 耗时长，**建议单次调用超时约 60 分钟**。
- **ohbuild**：**`build-acts`** 依赖 OpenHarmony 工程内 **`test/xts/acts/build.sh`**；**`--src-dir`** 应指向你的 **`src` 根**（勿依赖脚本默认推断，除非目录布局与说明一致）。
- **rkflash**：依赖本机 **hdc**、**Rockchip upgrade_tool**（常见为 Windows）、同步工具（**pscp** / OpenSSH **scp** / **paramiko** 等）；同步参数须自行配置，**不要将含真实密码的 `rkflash_sync_config.json` 提交到仓库**。
- **ohrecord**：依赖 **hdc** 连接设备；全量 **`build`** 与镜像侧改动见文档，录制路径须落在 **`/data/test/media`** 并注意 **SELinux 标签**（见该技能 `SKILL.md`）。

**环境与路径（常用）**

- HAP / 部分工具：`HOS_CLT_PATH`、`OHOS_SDK_PATH`（见本文档开头）。
- **ohhdc / 设备**：`hdc` 在 PATH；参见下文 **§5**。
- **ohclitools**：在含 `build.sh` 的 OpenHarmony **src** 目录下执行；依赖 `OHOS_SDK_PATH` 中的 hdc 做推送运行。
- **ohhdf**：在 OpenHarmony **源码根**（含 **`build.sh`**）下执行 **`ohhdf.py`**；设备调试子命令与 **ohhdc** 类似需 **hdc**。
- **ohipc**：在 OpenHarmony **源码根**下执行 **`ohipc.py`**；板测与 **ohhdc** 一样依赖 **hdc** 与可写的 **`/data/local/tmp/`**（**`test-parcel`** 等）。

### 4.2 使用方式

- **方式一**：将需要的技能目录从 `src/skills/<名>/` 拷贝到编辑器/Agent 所读取的技能目录（由工具配置决定，路径以各工具说明为准），与通过 openskills 安装的技能并列，便于对话中引用「某技能」。**执行命令时仍建议使用本仓库 `src/skills/...` 路径。**
- **方式二**：命令行直接使用仓库内路径（在 **napi_generator 仓库根** 下）：
  - `python3 src/skills/ohhap/hapbuild.py build src/skills/ohhap/NativeProj46R`
  - `python3 src/skills/ohhdc/ohhdc.py replace-install <HAP路径>`
  - `python3 src/skills/gitlog/gitlog.py log 10`
  - `python3 src/skills/ohtest/ohtest.py --dts <路径> --test-dir <目录>`
  - `python3 src/skills/ohbuild/ohbuild.py build-acts ActsAACommandPrintSyncTest --src-dir /path/to/openharmony/src`
  - `cd /path/to/openharmony/src && python3 /path/to/napi_generator/src/skills/ohhdf/ohhdf.py build-demo`
  - `cd /path/to/openharmony/src && python3 /path/to/napi_generator/src/skills/ohipc/ohipc.py test --product rk3568`
  - `cd /path/to/openharmony/src && python3 /path/to/napi_generator/src/skills/ohipc/ohipc.py howto --full`

### 4.3 对话提示句与命令速查

Agent 多由自然语言触发；下表为**用户可说的提示句**与**典型命令**对应关系（细节以各目录 `SKILL.md` 为准）。

| 技能 | 提示句示例 | 典型命令（仓库根下） |
|------|------------|----------------------|
| **gitlog** | 「看下仓库状态」「最近 N 条提交」「某文件的提交历史」「两个引用之间的 log」「CTS 式 first-parent」「生成 git 报告」「分支统计」「提交并推送」「check-style / check-copyright」「配置 token」「签名历史提交」 | `status` / `log 20` / `log-stat` / `log-patch` / `log-file <路径>` / `log-range v1..v2` / `log-first-parent tag^..HEAD` / `report [tag]` / `branches`（可加 **`--remote`** / **`--local`**）/ `commit "说明"`（可加 **`--no-sign`**、**`--skip-style-check`**；成功后默认 **push**）/ `push` / `check-style`（可加 **`--all`**）/ `check-copyright`（**`--dry-run`** / **`--fix`**）/ `config-token user token` / `sign-commits HEAD~3..HEAD`（命令前均加 **`python3 src/skills/gitlog/gitlog.py`**） |
| **helloworld** | 「近一个月贡献者排名」「某雇主在 master 上的提交详情」「按邮箱查提交」「兼容性设备查询」「生成 helloworld 示例」 | `getcodecnt.py employer 1month` / `author 1month` / `detail 1month <雇主> <分支>` / `email 1month user@example.com` / `compatibility` 等（完整子命令见 **helloworld/SKILL.md**）；`python3 src/skills/helloworld/generate.py` |
| **ohhap** | 「编译并签名 NativeProj46R」「只打 ohosTest 包」「清除签名」「检查编译环境」 | `python3 src/skills/ohhap/hapbuild.py build …` / `build-test` / `sign` / `clean-sign` |
| **ohbuild** | 「列出某模块的 fuzz 目标」「编译某个 FuzzTest」「编译整个部件的 fuzztest」「查覆盖率要配什么 gn-args」「在 acts 目录编 ACTS suite」 | `python3 src/skills/ohbuild/ohbuild.py list-fuzztest …` / `build-fuzztest …` / `build-component-fuzztest …` / `verify-coverage …` / **`build-acts <Suite>[,Suite2] --src-dir <OH/src>`**（可选 **`--product-name`**、**`--system-size`**、**`--no-run`**）/ `help` |
| **ohhdc** | 「装 HAP」「覆盖安装」「主包+测试包一起装」「卸装」「部署并跑单元测试」「截屏 / 按应用截屏」「导出 UI layout」「faultlog / hilog」「前台应用」「起停应用」「跑 ohosTest」「连 KaiHong Wi‑Fi」「点灯」 | `install` / `replace-install` / `install-project` / `uninstall` / `deploy-test <项目目录>` / `apps` / `test …`（**`-b` `-m` `-s` `-c` `-t` 毫秒** 等见 **ohhdc/SKILL.md**）/ `hilog` / `faultlog` / `foreground` / `start` / `force-stop` / `screenshot` / `screenshot-app`（别名见脚本内 **`SCREENSHOT_APP_ALIASES`**）/ `layout` / `wifi-kaihong` / `led red on` 等（命令前加 **`python3 src/skills/ohhdc/ohhdc.py`**；**`--help`** 列出全部 **action**） |
| **ohhdf** | 「HDF light/bluehdf 怎么编」「单编 light_demo / blue_demo」「推送 hdi_blue 到设备」「设备上查 HDF hilog / dmesg」「看 hidumper 列表」「跟零基础 HDF 教程走」 | 在 OH **源码根**：`python3 <napi_generator>/src/skills/ohhdf/ohhdf.py guide` / `howto`（**`--full`** 全文）/ `build-demo` / `build-blue-demo` / `build-target hdi_blue --product rk3568` / `paths --product rk3568`；需设备时加 **`-t <hdc>`** 或 **`OHHDF_HDC_TARGET`**：`push-blue` / `push-light` / `device-check` / `hilog-hdf`（**`--tail`**）/ `dmesg-hdf` / `hidumper-list`（细节见 **ohhdf/SKILL.md**、**howtohdf.md**） |
| **ohipc** | 「跟 IPC 零基础教程走」「终端打印 howtoipc 摘要/全文」「看下 IPC 架构摘录」「ipc_example 产物路径」「单编 server/client」「推送并跑板端联调」「双客户端并发」「IPC 性能多轮」「板端 Parcel 单测」 | `cd <OHOS_SRC>` 后：`python3 <napi_generator>/src/skills/ohipc/ohipc.py howto` / **`howto --full`** / `arch` / `paths --product rk3568` / `build-server` … / `test` / `test-concurrent` / `perf --iterations 5` / `test-parcel`（参数同前；**`-t`** / **`OHIPC_HDC_TARGET`**）；长文 **ohipc/howtoipc.md** |
| **ohtest** | 「根据 d.ts 生成单测」「给 Index.ets 生成 UITest」「生成/编译 fuzz」「扫描仓库里所有 fuzz 套件」「扫描 ACTS 套件列表」「在 out 里跑某个 ACTS suite」「做覆盖率分析/缺口」 | 均在 `src/skills/ohtest/`：`python3 …/ohtest.py --dts …`、`…/uitest_gen.py`、`…/fuzztest.py`、`…/find_fuzztest.py`、`…/find_actstest.py`、`…/actstest.py`、`…/coverage_analysis.py`、`…/coverage_gap_tests.py`（参数见 `SKILL.md`） |
| **ohanalysis** | 「解析某个部件的 bundle」「全 src 扫 bundle 出报告」「对比两个 release 的 src 差异」「ohos_executable 与 out 产物对照」 | `python3 src/skills/ohanalysis/ohanalysis.py bundle …` / `scan-all` / `diff PATH1 PATH2` / `executables --out-product rk3568` / `help` |
| **ohclitools** | 「检查 btclitools 对接口覆盖」「部署 wificlitools 并编译验证」「推 dscommand 上设备跑一下」 | 在 OH **src** 下执行：`python3 <本仓库>/src/skills/ohclitools/ohclitool.py`，子命令含 `coverage`、`deploy`、`build`、`verify`、`all`（见 SKILL） |
| **ohppt** | 「把这份 MD 表格转成 PPT」「用 build_architecture_ppt 出架构幻灯片」 | `python3 src/skills/ohppt/ohppt.py …`；`python3 src/skills/ohppt/build_architecture_ppt.py --help` |
| **ohproj** | 「用模板创建一个 OH 工程」「一键 cJSON 模板接入」「编译/签名/跑测模板工程」 | `python3 src/skills/ohproj/ohproj.py create <名> [--code-dir …] [--setup-cjson]` / `build` / `sign` / `build-test` / `test` / `clean-sign`（参数见 **ohproj/SKILL.md**） |
| **ohservices** | 「按 sampletest 配 SystemAbility」「SELinux / init 报错怎么查」「用 ohsa 做设备/编译/HiDumper 诊断」 | 阅读 `src/skills/ohservices/SKILL.md`；`python3 src/skills/ohservices/ohsa.py device` / `diag` / `build --product rk3568` / `hidumper` / `hilog-disk` 等（见 **ohservices/SKILL.md**） |
| **rkflash** | 「从编译机同步 RK 镜像到本机并烧录」「跑 pscp-sync / flash_all」「关掉校验或关灯选项」 | 先配置 **`src/skills/rkflash/rkflash_sync_config.json`**（从 **`rkflash_sync_config.example.json`** 复制）或环境变量；`python3 src/skills/rkflash/rkflash.py pscp-sync` / `flash_all` 等（见 `SKILL.md`） |
| **ohrecord** | 「准备 snapshot_record 目录与标签」「录一段屏并拉回 MP4」「麦克风 audio / 音乐 play / 摄像头 cam」「查录屏相关 hilog」 | `prep-device` / `record --seconds 60 -f /data/test/media/x.mp4` / `pull --remote …` / `verify-host-so` / `verify-device-so` / **`audio-*` / `play-*` / `cam-*`**（含 **`audio-pull`**）/ `cam-run --pull --verify -- auto 10` / `hilog-capture` / `targets`（命令前加 **`python3 src/skills/ohrecord/ohrecord.py`**；**`-f` 同 `--file`**；完整见 **ohrecord/SKILL.md**） |

**典型串联**：**ohhap** 构建签名 → **ohhdc** 安装 → **ohhdc test** 或 **ohtest**（dts/UITest/fuzz/ACTS）→ 日志用 **ohhdc faultlog**。**HDF 驱动 / light / bluehdf** 开发与设备验证：**ohhdf**（编推、**hilog-hdf**）并可配合 **ohhdc**（如 **led**）。**Binder / ipc_example 跨进程与 Parcel 单测**：**ohipc**（**`ohipc.py test`** / **`test-parcel`**）+ **ohhdc**（hdc）。静态体量与依赖对比用 **ohanalysis**；命令行工具闭环用 **ohclitools**。整机 **Rockchip 镜像**同步烧录用 **rkflash**；**系统镜像侧录屏**用 **ohrecord**（与 **ohproj §10** 对照）。

## 5. 配置hdc连接（确保开发版联网且和Linux服务器可以互相ping通）
1. 把${OHOS_SDK_PATH}/linux/toolchains加入环境变量
2. 配置hdc为联网模式
```
# hdc tmode port 8710
Set device run mode successful.
```
3. 远程网络连接设备
```
user@host$ hdc tconn <设备IP或域名>:8710
Connect OK
user@host$ hdc shell
# ls
bin        config       eng_system  lost+found     storage   tmp
chip_ckm   data         etc         mnt            sys       updater
chip_prod  dev          init        module_update  sys_prod  vendor
chipset    eng_chipset  lib         proc           system
# exit
```
