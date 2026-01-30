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
2. 通过agent对话问cursor，现在有多少skll，他回答：“从 anthropics/skills 安装的技能（17个）”
3，使用一个技能，如："使用pdf技能创建个pdf，存到项目根目录"

## 4. 使用工程里的 skill（src/skills 目录概述）

`src/skills` 目录下为本仓库自有的 OpenHarmony / 社区相关技能，可按需拷贝到 `.claude/skills` 使用，或直接以 `python3 src/skills/<技能名>/<脚本>` 调用。

### 4.1 技能列表与功能

| 目录 | 功能 | 限制 |
|------|------|------|
| **gitlog** | 查看提交历史、仓库状态、按文件/范围查 log、生成 CTS 用 git 报告（如 git-status.txt、git-log.txt）。适合代码提交与发布前检查。 | 依赖本地 `git`；部分能力通过 `gitlog.sh` 调用，需在工程内使用。 |
| **helloworld** | 社区共建统计：雇主代码行贡献、贡献者排名、提交详情（按雇主/分支/时间）、按作者邮箱查提交、兼容性设备查询。数据来自 openharmony.cn 接口。 | 依赖 openharmony.cn 开放 API 与网络；时间范围、雇主名等参数需按接口约定传入。 |
| **ohhap** | HAP 构建（主包 + ohosTest 测试包）、HAP 签名（debug/release）、清除签名。含环境与 SDK 版本检查。 | **目前仅验证 6.0 release 工程**，5.0/4.0 后续支持；需配置 `HOS_CLT_PATH`、`OHOS_SDK_PATH`；签名依赖证书（如 `~/ohos/60release/.../autosign/result/`）；项目需含 `build-profile.json5`、`hvigorw` 可用。 |
| **ohhdc** | 设备侧 HAP 管理：列出已安装应用、安装/替换安装 HAP、卸载、**查看设备日志（hilog）**、**查看错误/故障日志（data/log/faultlog：faultlogger/freeze/hilog/temp）**、查看前台/运行中应用、启停应用、**运行 ohosTest 单元测试**（aa test）。建议与 ohhap 配合：编译签名后用 ohhdc 安装并跑测。 | 需设备通过 HDC 连接（如 `hdc list targets` 有输出）；`hdc` 需在 PATH（如 `~/.bashrc` 已配置）；安装/跑测需已签名的 HAP。 |
| **ohtest** | **dts 单元测试**：根据 `.d.ts` 接口定义生成测试套（4 类边界用例）。**UITest**：根据 `.ets` 页面文件生成 UI 测试套（`uitest_gen.py`）：对页面内每个控件、布局和动作分别生成用例（Driver/ON、assertComponentExist、click），参考 [HarmonyOS UITest 指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uitest-guidelines)。 | dts：仅解析 export const/function；UITest：解析基于正则，仅识别 @State/Text/onClick/Row/Column，复杂逻辑需人工补充。 |

### 4.2 使用方式

- **方式一**：将需要的技能目录（如 `gitlog`、`helloworld`、`ohhap`、`ohhdc`、`ohtest`）从 `src/skills/` 拷贝到 `.claude/skills/`，便于 Cursor 按技能描述自动选用。
- **方式二**：不拷贝，直接在命令行用工程路径调用，例如：
  - `python3 src/skills/ohhap/hapbuild.py build src/skills/ohhap/NativeProj46R`
  - `python3 src/skills/ohhdc/ohhdc.py replace-install <HAP路径>`
  - `python3 src/skills/ohtest/ohtest.py --dts <dts路径> --test-dir <test目录>`

### 4.3 验证示例（语言交互请求）

技能通过对话触发，用户用自然语言提出需求，助手根据技能选用对应脚本。以下每项为**用户可说的一句话请求**及技能对应关系：

1. **gitlog**  
   - 请求示例：「查看最近 10 条提交」「生成 v1.4.4 到当前的 git log 报告」「查看 CMakeLists.txt 的提交历史」  
   - 对应：`gitlog.sh log 10`、`gitlog.sh report`、`gitlog.sh log-file CMakeLists.txt` 等。

2. **helloworld**  
   - 请求示例：「最近一周的社区代码共建统计」「查看近一个月的贡献者排名」「查询深开鸿在 master 分支近一个月的提交详情」  
   - 对应：`getcodecnt.py` 查询雇主/贡献者/提交详情等。

3. **ohhap**  
   - 请求示例：「@NativeProj46R 编译、签名这个项目」「编译 NativeProj46R 的单元测试 HAP」  
   - 对应：`hapbuild.py build`、`hapbuild.py build-test`、`hapbuild.py sign`。

4. **ohhdc**  
   - 请求示例：「用 ohhdc 把刚签名的两个 HAP 安装到设备」「运行设备上的 IndexdtsTest 测试套」「查看设备错误日志目录 data/log/faultlog」「列出 faultlog 下的 hilog 并读某个文件」  
   - 对应：`ohhdc.py replace-install <HAP路径>`、`ohhdc.py test ...`、`ohhdc.py faultlog` / `ohhdc.py faultlog hilog` / `ohhdc.py faultlog --cat hilog/xxx.log`。

5. **ohtest**  
   - 请求示例：「根据 Index.d.ts 生成/补全单元测试」「为 libentry 的接口在 ohosTest 里增加测试套」「对 Index.ets 实现 UI 测试 / 为页面生成 UITest」  
   - 对应：`ohtest.py --dts <dts路径> --test-dir <test目录>`；UITest：`uitest_gen.py --ets <页面.ets路径> --test-dir <test目录>`。

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
