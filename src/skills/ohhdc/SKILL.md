---
name: ohhdc
description: "OpenHarmony HDC tool for device HAP management. Use when users need to list installed apps, uninstall a HAP (bm uninstall -n <bundleName>), install a HAP (hdc install <path>), install-project to install main HAP and test HAP with two hdc install commands, deploy-test to uninstall then hdc install -r both HAPs and run aa test (部署运行 HAP 测试用例), replace-install a HAP (hdc -r install <path>), view device logs (hdc shell hilog; hilog -b D for debug, hilog -p off to show private, param set hilog.flowctrl.proc.on false to disable flow control, hilog | grep <pattern> to filter by keyword/pid), view error/fault logs under data/log/faultlog (subdirs faultlogger, freeze, hilog, temp; list or cat files for analysis), view foreground/running apps (aa dump -a / aa dump -r), force-stop an app (aa force-stop <bundleName>), start an app (aa start -a <abilityName> -b <bundleName>), or run tests (aa test -b <bundleName> -m <moduleName> -s unittest OpenHarmonyTestRunner -s class <suiteName>[#<caseName>] -s timeout <timeout>). Presents results in Markdown format."
author: "Created by user"
created: "2026-01-28"
version: "1.0.0"
---

# OpenHarmony HDC Skill

This skill provides capabilities for OpenHarmony/HarmonyOS devices via HDC (HarmonyOS Device Connector): **list installed HAP apps**, **uninstall HAP**, **install HAP**, **install-project** (install main + test HAP with two `hdc install` commands), **deploy-test** (部署运行 HAP 测试用例: uninstall → `hdc install -r` main + test HAP → `aa test`), **replace-install HAP**, **view device logs (hilog)**, **view error/fault logs (data/log/faultlog)**, **view foreground/running applications**, **force-stop applications**, **start applications**, and **run tests**.

## Query Installed Apps

### Feature Description

**List device-installed HAP applications.** The skill runs `hdc shell "bm dump -a"` to get all installed bundle names (HAP apps) from the connected device, then formats the output as Markdown for easy reading.

### When to Use

- User asks: "查看设备上安装的 HAP" / "查看设备安装的 app" / "设备上装了多少 hap"
- User asks: "List installed apps on device" / "Show device HAP apps" / "How many apps are installed"
- User needs to inspect or count installed applications on an OpenHarmony/HarmonyOS device

### How It Works

1. Execute: `bash -c "source ~/.bashrc && hdc shell 'bm dump -a'"` (so `hdc` is in PATH from bashrc)
2. Parse output: skip `ID:` lines, strip leading tabs/spaces, extract bundle names (lines containing `.` or starting with `ohos.`)
3. Deduplicate and format as Markdown: table + bullet list

### Usage in Conversation

**Natural language examples:**

- "查看设备上安装的 HAP"
- "查看设备安装的 app"
- "设备上装了多少 hap"
- "List installed apps on the device"
- "Show me the installed HAP apps"

The assistant uses this skill to run the script and show the result in Markdown.

### Quick Start – Using the Script

```bash
# From project root; ensure hdc is available (e.g. source ~/.bashrc in your shell first)

# List installed apps, Markdown format (default)
python3 .claude/skills/ohhdc/ohhdc.py apps

# Same, explicit format
python3 .claude/skills/ohhdc/ohhdc.py list-apps --format markdown

# Plain text list
python3 .claude/skills/ohhdc/ohhdc.py apps --format plain
```

**Available commands:**

- `apps` / `list-apps` – List installed HAP apps (bundle names).
- `--format markdown` or `--format md` – Output as Markdown (default).
- `--format plain` or `--format list` – Output as plain text list.

---

## Uninstall HAP

### Feature Description

**Uninstall a HAP from the device** by bundle name. Uses:  
`hdc shell "bm uninstall -n <bundleName>"`.

### When to Use

- User says: "卸载设备上的 xxx 应用" / "卸载 com.example.p7zipTest" / "uninstall HAP com.xxx.xxx"
- User needs to remove a specific app by its bundle name.

### How It Works

1. Execute: `bash -c "source ~/.bashrc && hdc shell \"bm uninstall -n <bundleName>\""`
2. Print success or error.

### Usage in Conversation

- "卸载 com.example.p7zipTest"
- "Uninstall the app com.example.p7zipTest from the device"

### Quick Start – Script

```bash
# Uninstall by bundle name (required)
python3 .claude/skills/ohhdc/ohhdc.py uninstall com.example.p7zipTest
```

**Parameter:** `target` = bundle name (e.g. `com.example.p7zipTest`).

---

## Install HAP

### Feature Description

**Install a HAP file onto the device.** Uses:  
`hdc install <hap_path>`.

### When to Use

- User says: "安装这个 HAP 到设备" / "把 xxx.hap 装到设备" / "install HAP /path/to/app.hap"
- User provides a HAP file path and wants to install it.

### How It Works

1. Execute: `bash -c "source ~/.bashrc && hdc install <hap_path>"`
2. Path is quoted so spaces are safe.
3. Print success or error.

### Usage in Conversation

- "安装 /root/workspace/napi_generator/src/skills/ohhap/NativeProj46R/autosign/app1-signed.hap"
- "Install the HAP at .../app1-signed.hap to the device"

### Quick Start – Script

```bash
# Install HAP (target = full path to .hap file)
python3 .claude/skills/ohhdc/ohhdc.py install /root/workspace/napi_generator/src/skills/ohhap/NativeProj46R/autosign/app1-signed.hap
```

**Parameter:** `target` = absolute or relative path to the `.hap` file.

---

## Install Project (主 HAP + 测试 HAP，推荐)

### Feature Description

**按项目安装两个 HAP**：先安装主 HAP，再安装测试 HAP，均使用 `hdc install`（不用 `-r`）。  
等价于依次执行：

- `hdc install <project_dir>/entry/build/default/outputs/default/entry-default-signed.hap`
- `hdc install <project_dir>/entry/build/default/outputs/ohosTest/entry-ohosTest-signed.hap`

安装前如设备上已有同包名应用且签名不一致，需先卸载再执行本安装。

### When to Use

- User says: "安装这个项目的两个 HAP" / "按项目安装 NativeProj46R" / "install project"
- 签名、编译完成后，需要将主 HAP 与测试 HAP 部署到设备。

### Quick Start – Script

```bash
# 按项目安装（target = 项目根目录）
python3 src/skills/ohhdc/ohhdc.py install-project /root/workspace/napi_generator/examples/NativeProj46R
```

或手动执行两个命令：

```bash
hdc install /root/workspace/napi_generator/examples/NativeProj46R/entry/build/default/outputs/default/entry-default-signed.hap
hdc install /root/workspace/napi_generator/examples/NativeProj46R/entry/build/default/outputs/ohosTest/entry-ohosTest-signed.hap
```

**Parameter:** `target` = 项目根目录（含 `entry/build/...` 的上级目录）。

---

## 部署运行 HAP 测试用例（deploy-test）

### Feature Description

**部署并运行 HAP 测试用例**：依次执行「卸载同包名应用 → 使用 `hdc install -r` 安装主 HAP → 使用 `hdc install -r` 安装测试 HAP → 执行 `hdc shell aa test` 运行指定测试套件」。  
等价于历史记录中的完整流程：先卸载，再两条 `hdc install -r`，最后 `aa test -b ... -m entry_test -s unittest OpenHarmonyTestRunner -s class <套件名列表> -s timeout 15000`。

- 包名（bundleName）未指定时，从项目 `AppScope/app.json5` 解析。
- 主 HAP、测试 HAP 路径约定与 install-project 相同。
- **测试套件自动发现**：未通过 `--suite` 指定时，从项目 `entry/src/ohosTest/ets/test/List.test.ets` 解析调用的测试函数（如 `abilityTest()`、`indexUitestTest()`），再在各对应 `.test.ets` 文件中读取 `describe('SuiteName', ...)` 的 `SuiteName`，按 List 中的顺序拼成 `-s class ActsAbilityTest,IndexUitestTest,IndexdtsTest` 等形式；解析失败时回退为 `ActsAbilityTest,IndexUitestTest`。

### When to Use

- User says: "部署运行 HAP 测试用例" / "卸载后安装两个 HAP 再跑测试" / "deploy and run HAP tests"
- 需要一键完成：卸载 → 安装主 HAP + 测试 HAP → 运行测试。

### Quick Start – Script

```bash
# 部署运行测试（target = 项目根目录；测试套件从 List.test.ets 自动发现，默认 -m entry_test -t 15000）
python3 src/skills/ohhdc/ohhdc.py deploy-test /root/workspace/napi_generator/examples/NativeProj46R

# 指定测试套件与超时（覆盖自动发现）
python3 src/skills/ohhdc/ohhdc.py deploy-test /path/to/NativeProj46R --suite "ActsAbilityTest,IndexUitestTest" --timeout 20000
```

**Parameters:** `target` = 项目根目录；`--module` / `-m` = 测试模块名（默认 entry_test）；`--suite` / `-s` = `-s class` 的取值，多个套件逗号分隔（**不指定时从 List.test.ets 及各 .test.ets 的 describe 名自动发现**）；`--timeout` / `-t` = 超时毫秒（默认 15000）。

---

## Replace Install HAP

### Feature Description

**Replace-install a HAP** (overwrite existing app with same bundle name). Uses:  
`hdc -r install <hap_path>`.

### When to Use

- User says: "替换安装这个 HAP" / "覆盖安装 xxx.hap" / "replace install /path/to/app.hap"
- User wants to update an already installed app by reinstalling the HAP.

### How It Works

1. Execute: `bash -c "source ~/.bashrc && hdc -r install <hap_path>"`
2. Path is quoted so spaces are safe.
3. Print success or error.

### Usage in Conversation

- "替换安装 /root/workspace/napi_generator/src/skills/ohhap/NativeProj46R/autosign/app1-signed.hap"
- "Replace-install the HAP at .../app1-signed.hap"

### Quick Start – Script

```bash
# Replace-install HAP (target = full path to .hap file)
python3 .claude/skills/ohhdc/ohhdc.py replace-install /root/workspace/napi_generator/src/skills/ohhap/NativeProj46R/autosign/app1-signed.hap
```

**Parameter:** `target` = absolute or relative path to the `.hap` file.

---

## View Device Logs (hilog)

### Feature Description

**View device hilog output** from the connected device. The skill runs `hdc shell hilog` to stream log output. Optional behavior:

- **Debug level**: `hdc shell hilog -b D` – show debug-level logs.
- **Show private info**: `hdc shell hilog -p off` – turn off filtering of private information.
- **Disable flow control**: `hdc shell param set hilog.flowctrl.proc.on false` – run once before hilog to reduce dropped logs.
- **Filter by keyword or PID**: `hdc shell hilog | grep <pattern>` – filter on the host (e.g. `grep BMS` for keyword "BMS", or grep by process tag/pid). The filter can be a keyword or a PID.

Because hilog streams continuously, the skill captures output for a configurable number of seconds (default 15), then stops.

### When to Use

- User asks: "查看设备日志" / "抓一下设备 hilog" / "看下 debug 级别日志" / "用 grep 过滤 BMS 相关日志"
- User asks: "View device logs" / "Show hilog from device" / "Capture debug-level hilog" / "Filter hilog by keyword"
- User needs to debug or inspect runtime logs on the device

### How It Works

1. Optionally run: `hdc shell "param set hilog.flowctrl.proc.on false"` when `--flowctrl-off` is set.
2. Build hilog command: `hdc shell "hilog [-b D] [-p off]"` according to `--level` and `--private-off`.
3. Run with `timeout <N>` so capture ends after N seconds; if `--grep` or positional filter is given, pipe output through `grep --line-buffered <pattern>` on the host.
4. Print captured stdout (and stderr when relevant).

### Usage in Conversation

- "查看设备日志"
- "抓 20 秒设备 hilog，用 debug 级别"
- "关闭 private 屏蔽并查看 hilog"
- "查看设备日志，只显示包含 BMS 的行"
- "View device hilog with debug level"
- "Filter device logs by keyword testTag"

### Quick Start – Script

```bash
# 查看设备日志（默认采集 15 秒）
python3 src/skills/ohhdc/ohhdc.py hilog
python3 src/skills/ohhdc/ohhdc.py logs

# Debug 级别
python3 src/skills/ohhdc/ohhdc.py hilog --level D
python3 src/skills/ohhdc/ohhdc.py hilog -b D

# 关闭对 private 信息的屏蔽
python3 src/skills/ohhdc/ohhdc.py hilog --private-off
python3 src/skills/ohhdc/ohhdc.py hilog -p

# 先关闭 hilog 流量控制再抓日志
python3 src/skills/ohhdc/ohhdc.py hilog --flowctrl-off
python3 src/skills/ohhdc/ohhdc.py hilog -f

# 按关键字或 pid 过滤（BMS 为示例，可为任意关键字或 pid）
python3 src/skills/ohhdc/ohhdc.py hilog BMS
python3 src/skills/ohhdc/ohhdc.py hilog --grep testTag
python3 src/skills/ohhdc/ohhdc.py hilog -g 12345

# 组合：debug 级别 + 关闭 private 屏蔽 + 过滤 BMS + 采集 30 秒
python3 src/skills/ohhdc/ohhdc.py hilog BMS -b D -p -f --hilog-timeout 30
```

**Parameters:**

- `hilog` / `logs` – View device hilog (stream captured for a limited time).
- `target` (positional) – Optional filter pattern for grep (e.g. `ohhdc.py hilog BMS`).
- `--level` / `-b` – Log level (e.g. `D` for debug).
- `--private-off` / `-p` – Use `hilog -p off` to show private info.
- `--flowctrl-off` / `-f` – Run `param set hilog.flowctrl.proc.on false` before hilog.
- `--grep` / `-g` – Filter lines by keyword or pid (grep on host).
- `--hilog-timeout` – Capture duration in seconds (default 15).

---

## View Error / Fault Logs (faultlog)

### Feature Description

**View device error/fault logs** under `/data/log/faultlog`. The directory contains four subdirectories for analysis:

- **faultlogger** – fault logger 相关日志
- **freeze** – 卡死/冻结类日志
- **hilog** – 持久化 hilog 错误日志
- **temp** – 临时错误日志

The skill runs `hdc shell "ls -la /data/log/faultlog"` (or a subdir) to list files, and `hdc shell "cat <path>"` (or `tail -n N`) to read file content. Use this to **analyze crash/freeze/error logs** on the device.

### When to Use

- User asks: "查看设备错误日志" / "data/log/faultlog 下有什么" / "看下 faultlogger 目录" / "读取 hilog 错误日志文件"
- User asks: "View device fault log" / "List error log directory" / "Analyze faultlog content"
- User needs to debug crashes, freezes, or errors using faultlog/faultlogger/freeze/hilog/temp

### How It Works

1. **List**: Run `hdc shell "ls -la /data/log/faultlog"` or `ls -la /data/log/faultlog/<subdir>` (subdir: faultlogger, freeze, hilog, temp).
2. **Read**: Run `hdc shell "cat /data/log/faultlog/<rel_path>"` (or `tail -n N` when `--tail` is set). `rel_path` is relative to faultlog (e.g. `hilog/xxx.log`).
3. Print output for user to analyze.

### Usage in Conversation

- "查看设备错误日志目录"
- "列出 data/log/faultlog 下的 faultlogger"
- "读取 faultlog 里 hilog 目录下的某个日志文件"
- "View faultlog directory" / "Show last 100 lines of faultlogger log file"

### Quick Start – Script

```bash
# 列出 /data/log/faultlog 根目录
python3 src/skills/ohhdc/ohhdc.py faultlog
python3 src/skills/ohhdc/ohhdc.py error-log

# 列出子目录（faultlogger / freeze / hilog / temp）
python3 src/skills/ohhdc/ohhdc.py faultlog faultlogger
python3 src/skills/ohhdc/ohhdc.py faultlog hilog
python3 src/skills/ohhdc/ohhdc.py faultlog freeze
python3 src/skills/ohhdc/ohhdc.py faultlog temp

# 读取某文件内容（相对 data/log/faultlog 的路径）
python3 src/skills/ohhdc/ohhdc.py faultlog --cat hilog/2024-01-01-12.log
python3 src/skills/ohhdc/ohhdc.py faultlog --cat faultlogger/xxx

# 只读最后 N 行
python3 src/skills/ohhdc/ohhdc.py faultlog --cat hilog/xxx.log --tail 100
```

**Parameters:**

- `faultlog` / `error-log` – List or read error/fault logs under `/data/log/faultlog`.
- `target` (positional) – Optional subdir: `faultlogger`, `freeze`, `hilog`, or `temp` (list that subdir).
- `--cat` – Read file content; path is relative to `/data/log/faultlog` (e.g. `hilog/xxx.log`).
- `--tail` – When used with `--cat`, output only the last N lines of the file.

---

## View Foreground/Running Apps

### Feature Description

**View foreground applications and running app processes** on the device. Uses:  
- `hdc shell "aa dump -a"` - View all abilities (foreground and background)
- `hdc shell "aa dump -r"` - View running abilities (app processes)

Extracts key information: bundle name, ability name, ability type, app state (FOREGROUND/BACKGROUND), start time, AbilityRecord ID, and running app processes (process name, PID, UID, state).

### When to Use

- User says: "查看前台应用" / "查看正在运行的应用" / "查看设备上的前台应用"
- User says: "Show foreground apps" / "View running applications" / "What apps are running"
- User needs to inspect which apps are currently active on the device

### How It Works

1. Execute: `bash -c "source ~/.bashrc && hdc shell \"aa dump -a\""` (or `aa dump -r` for running only)
2. Parse output: extract AbilityRecord info (bundle name, ability type, app state, etc.) and AppRunningRecords (process info)
3. Format as Markdown: show foreground apps table and running app processes table

### Usage in Conversation

- "查看前台应用"
- "查看正在运行的应用"
- "设备上哪些应用在前台"
- "Show foreground apps on the device"
- "View running applications"

### Quick Start – Script

```bash
# View foreground apps (default: shows foreground + running processes)
python3 .claude/skills/ohhdc/ohhdc.py foreground

# Same, short form
python3 .claude/skills/ohhdc/ohhdc.py fg

# View all abilities (including background)
python3 .claude/skills/ohhdc/ohhdc.py dump-all

# View running abilities only
python3 .claude/skills/ohhdc/ohhdc.py running
python3 .claude/skills/ohhdc/ohhdc.py dump-running
```

**Available commands:**

- `foreground` / `fg` – View foreground apps and running processes (default view)
- `dump-all` – View all abilities including background ones
- `running` / `dump-running` – View running abilities/app processes only

**Output includes:**

- **Foreground Apps Table**: Bundle Name, Ability Name, Type, State, AbilityRecord ID, Start Time
- **Running App Processes Table**: Process Name, PID, UID, State

---

## Force Stop Application

### Feature Description

**Force-stop an application** by bundle name. Uses:  
`hdc shell "aa force-stop <bundleName>"`.

### When to Use

- User says: "强制关闭 xxx 应用" / "关闭 com.ohos.settings" / "force stop app com.xxx.xxx"
- User needs to forcefully terminate a running application on the device.

### How It Works

1. Execute: `bash -c "source ~/.bashrc && hdc shell \"aa force-stop <bundleName>\""`
2. Print success or error.

### Usage in Conversation

- "强制关闭 com.ohos.settings"
- "关闭设置应用"
- "Force stop the app com.ohos.settings"

### Quick Start – Script

```bash
# Force-stop by bundle name (required)
python3 .claude/skills/ohhdc/ohhdc.py force-stop com.ohos.settings

# Same, short form
python3 .claude/skills/ohhdc/ohhdc.py stop com.ohos.settings
```

**Parameter:** `target` = bundle name (e.g. `com.ohos.settings`).

---

## Start Application

### Feature Description

**Start an application** by bundle name and ability name. Uses:  
`hdc shell "aa start -a <abilityName> -b <bundleName>"`.

### When to Use

- User says: "启动 xxx 应用" / "打开 com.ohos.settings" / "start app com.xxx.xxx"
- User needs to launch an application on the device.

### How It Works

1. Execute: `bash -c "source ~/.bashrc && hdc shell \"aa start -a <abilityName> -b <bundleName>\""`
2. Print success or error.

### Usage in Conversation

- "启动 com.ohos.settings 应用"
- "打开设置应用，使用 EntryAbility"
- "Start the app com.ohos.settings with EntryAbility"

### Quick Start – Script

```bash
# Start app (requires bundleName and ability name)
python3 .claude/skills/ohhdc/ohhdc.py start com.ohos.settings --ability EntryAbility

# Same, using short form
python3 .claude/skills/ohhdc/ohhdc.py start com.ohos.settings -a EntryAbility
```

**Parameters:**
- `target` = bundle name (e.g. `com.ohos.settings`)
- `--ability` / `-a` = ability name (e.g. `EntryAbility`)

**Note:** Common ability names include:
- `EntryAbility` - Main entry ability
- `com.ohos.settings.MainAbility` - Settings main ability
- Check installed apps or use `aa dump -a` to find ability names

---

## Run Tests

### Feature Description

**Run test cases** for an application. Uses:  
`hdc shell "aa test -b <bundleName> -m <moduleName> -s unittest OpenHarmonyTestRunner -s class <suiteName>[#<caseName>] -s timeout <timeout>"`.

Supports:
- **Run specific test case**: Provide suite name and case name (e.g., `ActsAbilityTest#assertContain`)
- **Run full test suite**: Provide only suite name (e.g., `ActsAbilityTest`)

### When to Use

- User says: "运行测试" / "执行测试用例" / "运行 ohos.test.nativeproj46r 的测试"
- User says: "Run tests for app" / "Execute test case" / "Run ActsAbilityTest#assertContain"
- User needs to run unit tests or specific test cases on the device.

### How It Works

1. Execute: `bash -c "source ~/.bashrc && hdc shell \"aa test -b <bundleName> -m <moduleName> -s unittest OpenHarmonyTestRunner -s class <suiteName>[#<caseName>] -s timeout <timeout>\""`
2. If `caseName` is provided, runs specific test case: `suiteName#caseName`
3. If `caseName` is not provided, runs full test suite: `suiteName`
4. Print test execution results.

### Usage in Conversation

- "运行 ohos.test.nativeproj46r 的测试"
- "执行 ActsAbilityTest#assertContain 测试用例"
- "运行 entry_test 模块的全量测试"
- "Run tests for ohos.test.nativeproj46r"
- "Execute test case ActsAbilityTest#assertContain"

### Quick Start – Script

```bash
# Run specific test case
python3 .claude/skills/ohhdc/ohhdc.py test ohos.test.nativeproj46r \
  --module entry_test \
  --suite ActsAbilityTest \
  --case assertContain \
  --timeout 15000

# Run full test suite (omit --case)
python3 .claude/skills/ohhdc/ohhdc.py test ohos.test.nativeproj46r \
  --module entry_test \
  --suite ActsAbilityTest \
  --timeout 15000

# Using short form
python3 .claude/skills/ohhdc/ohhdc.py test ohos.test.nativeproj46r \
  -m entry_test \
  -s ActsAbilityTest \
  -c assertContain \
  -t 15000
```

**Parameters:**
- `target` = bundle name (e.g. `ohos.test.nativeproj46r`) - **required**
- `--module` / `-m` = module name (e.g. `entry_test`) - **required**
- `--suite` / `-s` = test suite name (e.g. `ActsAbilityTest`) - **required**
- `--case` / `-c` = test case name (e.g. `assertContain`) - **optional**, if provided runs specific case, otherwise runs full suite
- `--timeout` / `-t` = timeout in milliseconds (default: 15000) - **optional**

**Examples:**

```bash
# Run specific test case
python3 .claude/skills/ohhdc/ohhdc.py test ohos.test.nativeproj46r \
  -m entry_test -s ActsAbilityTest -c assertContain

# Run full test suite
python3 .claude/skills/ohhdc/ohhdc.py test ohos.test.nativeproj46r \
  -m entry_test -s ActsAbilityTest

# With custom timeout (30 seconds)
python3 .claude/skills/ohhdc/ohhdc.py test ohos.test.nativeproj46r \
  -m entry_test -s ActsAbilityTest -t 30000
```

---

## 环境与通用说明

### Environment Requirements（适用于所有操作）

- **hdc**: OpenHarmony/HarmonyOS HDC 需在 PATH 中。若通过 `source ~/.bashrc` 配置，脚本会执行 `bash -c "source ~/.bashrc && hdc ..."` 以保证能找到 `hdc`。
- **Device**: 设备或模拟器需已连接并被 `hdc` 识别。

### Example Output（仅“查看已安装应用”）

```markdown
## 已安装应用

共找到 **48** 个已安装应用：

| 序号 | Bundle Name |
|------|-------------|
| 1 | `com.OpenHarmony.app.test` |
| 2 | `com.example.kikakeyboard` |
...

### 应用列表（纯文本）

- `com.OpenHarmony.app.test`
- `com.example.kikakeyboard`
...
```

### Script Location

- **Skill**: `.claude/skills/ohhdc/SKILL.md`
- **Script**: `.claude/skills/ohhdc/ohhdc.py`

### Summary

| Trigger (conversation)       | Action |
|-----------------------------|--------|
| 查看设备上的已安装应用/HAP  | Run `ohhdc.py apps`，展示 Markdown 结果 |
| 设备上装了多少 hap           | Run `ohhdc.py apps`，展示数量与列表 |
| 卸载 xxx 应用 / uninstall   | Run `ohhdc.py uninstall <bundleName>`，如 `uninstall com.example.p7zipTest` |
| 安装 HAP / install          | Run `ohhdc.py install <HAP 路径>`，如 `install /path/to/app-signed.hap` |
| 按项目安装 / install-project | Run `ohhdc.py install-project <项目根目录>`，依次执行 `hdc install` 主 HAP 与测试 HAP |
| 部署运行 HAP 测试用例 / deploy-test | Run `ohhdc.py deploy-test <项目根目录>`，卸载 → `hdc install -r` 主 HAP、测试 HAP → `aa test` |
| 替换安装 HAP / replace-install | Run `ohhdc.py replace-install <HAP 路径>`，如 `replace-install /path/to/app-signed.hap` |
| 查看前台应用 / foreground   | Run `ohhdc.py foreground` 或 `ohhdc.py fg`，展示前台应用和运行进程 |
| 查看正在运行的应用 / running | Run `ohhdc.py running`，展示运行中的应用进程 |
| 查看所有 ability / dump-all | Run `ohhdc.py dump-all`，展示所有 ability（包括后台） |
| 强制关闭应用 / force-stop   | Run `ohhdc.py force-stop <bundleName>` 或 `ohhdc.py stop <bundleName>`，如 `force-stop com.ohos.settings` |
| 启动应用 / start            | Run `ohhdc.py start <bundleName> --ability <abilityName>`，如 `start com.ohos.settings --ability EntryAbility` |
| 运行测试 / test             | Run `ohhdc.py test <bundleName> --module <moduleName> --suite <suiteName> [--case <caseName>]`，如 `test ohos.test.nativeproj46r -m entry_test -s ActsAbilityTest -c assertContain` |
