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

`src/skills` 目录下为本仓库自有的 OpenHarmony / 社区相关技能，可按需拷贝到 `.claude/skills` 使用，或直接以 `python3 src/skills/<技能名>/<脚本>` 调用。

### 4.1 技能列表与功能

| 目录 | 功能 | 限制 |
|------|------|------|
| **gitlog** | 查看提交历史、仓库状态、按文件/范围查 log、生成 CTS 用 git 报告（git-status.txt、git-log.txt）。**自动提交并推送**（`commit`）：暂存所有修改、按 2000 行/次分批提交、**默认带 Signed-off-by**（`-s`），提交后自动 push；可 `--no-sign` 关闭签名。**补签历史提交**（`sign-commits <range>`）。**推送**（`push`）。 | 依赖本地 `git`；commit 在工程根目录执行。 |
| **helloworld** | 社区共建统计：雇主代码行贡献、贡献者排名、提交详情（按雇主/分支/时间）、按作者邮箱查提交、兼容性设备查询。数据来自 openharmony.cn 接口。 | 依赖 openharmony.cn 开放 API 与网络；时间范围、雇主名等参数需按接口约定传入。 |
| **ohbuild** | **OpenHarmony 构建**：编译 fuzz 测试（`./build.sh --build-target <目标> --product-name rk3568 --gn-args <模块>_feature_coverage=true`）；查看模块 fuzztest 目标及对应 gn-args（`test/fuzztest/BUILD.gn`、模块 BUILD.gn 中的 `<模块>_feature_coverage`）；**验证 gcno**（`verify-coverage [模块名]`）确认覆盖率编译是否生效。 | 需在含 `build.sh` 的源码根目录（如 OpenHarmony src）；产品名默认 rk3568。 |
| **ohhap** | HAP 构建（主包 + ohosTest 测试包）、HAP 签名（debug/release）、清除签名。含环境与 SDK 版本检查。 | **目前仅验证 6.0 release 工程**，5.0/4.0 后续支持；需配置 `HOS_CLT_PATH`、`OHOS_SDK_PATH`；签名依赖证书（如 `~/ohos/60release/.../autosign/result/`）；项目需含 `build-profile.json5`、`hvigorw` 可用。 |
| **ohhdc** | 设备侧 HAP 管理：列出已安装应用、安装/替换安装 HAP、卸载、**install-project**（安装主 HAP + 测试 HAP）、**deploy-test**（部署运行 HAP 测试：卸载 → `hdc install -r` 主/测 HAP → **从 List.test.ets 自动发现测试套件**并执行 `aa test`）、查看设备日志（hilog）、查看错误/故障日志（data/log/faultlog）、查看前台/运行中应用、启停应用、运行 ohosTest（aa test）。建议与 ohhap 配合。 | 需设备通过 HDC 连接；`hdc` 在 PATH；安装/跑测需已签名 HAP。 |
| **ohtest** | **dts 单元测试**（`ohtest.py`）：根据 `.d.ts` 接口定义生成测试套（4 类边界用例），并在 List.test.ets 注册。**UITest**（`uitest_gen.py`）：根据 `.ets` 页面生成 UI 测试套（Driver/ON、assertComponentExist、click），参考 [HarmonyOS UITest 指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uitest-guidelines)。**Fuzz 执行**（`fuzztest.py`）：在 developer_test 下执行指定 fuzz 套（`run -ts <套名>`，可选 `--coverage`）。**覆盖率分析**（`coverage_analysis.py`）：从设备拉取 gcda、生成 .gcov、统计覆盖率（run / analyze / clear-analyze / clear-rerun-fuzz-analyze）。 | dts/UITest 解析基于正则，复杂逻辑需人工补充；fuzz/覆盖率需设备已连接、hdc 可用。 |

### 4.2 使用方式

- **方式一**：将需要的技能目录（如 `gitlog`、`helloworld`、`ohbuild`、`ohhap`、`ohhdc`、`ohtest`）从 `src/skills/` 拷贝到 `.claude/skills/`，便于 Cursor 按技能描述自动选用。
- **方式二**：不拷贝，直接在命令行用工程路径调用，例如：
  - **gitlog**：`python3 src/skills/gitlog/gitlog.py status` / `log 10` / `commit "提交说明"`（默认带 Signed-off-by，加 `--no-sign` 可关闭）/ `push`
  - **ohhap**：`python3 src/skills/ohhap/hapbuild.py build <项目根目录>` / `sign <项目根目录> [debug|release]`
  - **ohhdc**：`python3 src/skills/ohhdc/ohhdc.py deploy-test <项目根目录>`（自动发现测试套件）/ `replace-install <HAP路径>` / `uninstall <bundleName>` / `hilog` / `faultlog [子目录]`
  - **ohtest**：`python3 src/skills/ohtest/ohtest.py --dts <dts路径> --test-dir <test目录>`；UITest：`python3 src/skills/ohtest/uitest_gen.py --ets <页面.ets> --test-dir <test目录>`；Fuzz：`python3 src/skills/ohtest/fuzztest.py run -ts <套名> [--coverage]`；覆盖率：`python3 src/skills/ohtest/coverage_analysis.py run` / `analyze` / `clear-analyze`
  - **ohbuild**：在 OpenHarmony 源码根目录执行 `./build.sh --build-target <目标> --product-name rk3568 --gn-args <模块>_feature_coverage=true`；或 `python3 src/skills/ohbuild/ohbuild.py verify-coverage [模块名]` 验证 gcno

### 4.3 验证示例（语言交互请求）

技能通过对话触发，用户用自然语言提出需求，助手根据技能选用对应脚本。以下每项为**用户可说的一句话请求**及技能对应关系：

1. **gitlog**  
   - 请求示例：「查看最近 10 条提交」「生成 v1.4.4 到当前的 git log 报告」「查看 CMakeLists.txt 的提交历史」「**用 gitlog 技能提交本项目修改**」「提交项目的修改（默认带 Signed-off-by）」  
   - 对应：`gitlog.py log 10`、`gitlog.py report`、`gitlog.py log-file CMakeLists.txt`、`gitlog.py commit "提交说明"`（默认 -s）、`gitlog.py push`。

2. **helloworld**  
   - 请求示例：「最近一周的社区代码共建统计」「查看近一个月的贡献者排名」「查询深开鸿在 master 分支近一个月的提交详情」  
   - 对应：`getcodecnt.py` 查询雇主/贡献者/提交详情等。

3. **ohbuild**  
   - 请求示例：「编译 GetAppStatsMahFuzzTest 并开覆盖率」「某模块有哪些 fuzz 测试、编译时传什么 gn-args」「验证 power_manager 模块是否生成了 gcno」  
   - 对应：在源码根目录执行 `./build.sh --build-target GetAppStatsMahFuzzTest --product-name rk3568 --gn-args <模块>_feature_coverage=true`；查看 `test/fuzztest/BUILD.gn` 与模块 BUILD.gn；`ohbuild.py verify-coverage [模块名]`。

4. **ohhap**  
   - 请求示例：「@NativeProj46R 编译、签名这个项目」「编译 NativeProj46R 的单元测试 HAP」  
   - 对应：`hapbuild.py build`、`hapbuild.py build-test`、`hapbuild.py sign`。

5. **ohhdc**  
   - 请求示例：「**部署运行这个项目的 HAP 测试用例**」「用 ohhdc 把刚签名的两个 HAP 安装到设备」「卸载后安装项目的 HAP」「运行设备上的 IndexdtsTest 测试套」「查看设备错误日志目录 data/log/faultlog」  
   - 对应：`ohhdc.py deploy-test <项目根目录>`（自动从 List.test.ets 发现测试套件）、`ohhdc.py install-project <项目根目录>`、`ohhdc.py uninstall <bundleName>` + `install-project`、`ohhdc.py test ...`、`ohhdc.py faultlog` / `faultlog hilog`。

6. **ohtest**  
   - 请求示例：「根据 Index.d.ts 生成/补全单元测试」「为 libentry 的接口在 ohosTest 里增加测试套」「对 Index.ets 实现 UI 测试 / 为页面生成 UITest」「**执行 GetAppStatsMahFuzzTest 的 fuzz 测试（带覆盖率）**」「收集 fuzz 覆盖率并分析」  
   - 对应：`ohtest.py --dts <dts路径> --test-dir <test目录>`；UITest：`uitest_gen.py --ets <页面.ets> --test-dir <test目录>`；Fuzz：`fuzztest.py run -ts GetAppStatsMahFuzzTest [--coverage]`；覆盖率：`coverage_analysis.py run` / `analyze` / `clear-rerun-fuzz-analyze`。

### 4.4 典型使用流程

| 场景 | 流程 | 涉及技能 |
|------|------|----------|
| **HAP 开发与设备测试** | 1. ohhap 构建主 HAP + 测试 HAP → 2. ohhap 签名（debug/release）→ 3. ohhdc deploy-test（卸载 → 替换安装主/测 HAP → 从 List.test.ets 自动发现测试套件并执行 aa test） | ohhap、ohhdc |
| **仅安装不跑测** | 1. ohhdc uninstall \<bundleName\> → 2. ohhdc install-project \<项目根目录\> | ohhdc |
| **单元测试生成与跑测** | 1. ohtest dts / uitest_gen 生成测试套 → 2. ohhap build + sign → 3. ohhdc deploy-test | ohtest、ohhap、ohhdc |
| **Fuzz 测试与覆盖率** | 1. ohbuild 在源码根目录编译 fuzz（--gn-args \<模块\>_feature_coverage=true）→ 2. ohtest fuzztest.py run -ts \<套名\> --coverage → 3. ohtest coverage_analysis.py run / analyze（或 clear-rerun-fuzz-analyze） | ohbuild、ohtest |
| **代码提交与推送** | 1. gitlog status 查看修改 → 2. gitlog commit "提交说明"（默认 Signed-off-by）→ 自动 push；或 gitlog push | gitlog |

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
