---
name: ohclitools
description: "OpenHarmony CLI 工具闭环：btclitools / wificlitools / dsclitools 等与 btframework inner_kits 对齐；coverage、deploy、build、verify、设备推送运行。须在含 build.sh 的 OH 源码根执行。脚本 ohclitool.py。"
author: "Created by user"
version: "1.0.0"
---

# ohclitools 技能说明

本技能用于将**用户指定的源目录**（如 btclitools）与**框架接口**对齐：支持根据 bundle 中 inner_kits 做接口覆盖检查、生成/补齐对应 CLI 代码、拷贝部署、编译、验证，以及将编译产物推送到设备并测试运行。

## 应用示例与提示词

在 **OpenHarmony 源码 `src` 根**下执行；脚本路径 **`python3 <napi_generator>/src/skills/ohclitools/ohclitool.py`**。默认 **`--source-dir`** 为脚本同目录下 **`btclitools/`**。

| 场景 | 命令示例 | 提示词示例 |
|------|----------|------------|
| 接口覆盖 | `python3 <napi_generator>/src/skills/ohclitools/ohclitool.py coverage --output btclitools/COVERAGE.md` | 「查 btclitools 对 btframework 头文件 include 覆盖率」 |
| 部署到 test | `python3 <napi_generator>/src/skills/ohclitools/ohclitool.py deploy --test-dir foundation/communication/bluetooth/test` | 「把技能里的 btclitools 拷到蓝牙 test 并改 BUILD.gn」 |
| 编译 | `python3 <napi_generator>/src/skills/ohclitools/ohclitool.py build --test-dir foundation/communication/bluetooth/test` | 「在 src 根编 btclitools 对应目标」 |
| 验证并推设备 | `python3 <napi_generator>/src/skills/ohclitools/ohclitool.py verify --push-run` | 「验证 out 产物并 hdc 推上去跑一下」 |
| 一键 all | `python3 <napi_generator>/src/skills/ohclitools/ohclitool.py all --test-dir foundation/communication/bluetooth/test --push-run` | 「deploy+build+verify 全流程」 |

---

## 一、技能能力

| 能力 | 说明 |
|------|------|
| **接口覆盖检查** | 根据 bundle.json 中 btframework 的 inner_kits 声明头文件，扫描 clitools 源码中的 `#include`，输出已覆盖/未覆盖的接口（头文件）列表，可生成覆盖率报告文件。 |
| **生成对应代码** | 针对未覆盖的接口，按约定在独立文件中实现（如 clitools_模块名.h / clitools_模块名.cpp），在 clitools 中注册命令并参与编译。由人工或 AI 按报告补齐实现。 |
| **拷贝部署** | 将源目录（如 btclitools）完整拷贝到 `test_dir/<源目录名>`，并在 test 的 BUILD.gn 的 group deps 中增加 `"<源目录名>:<目标名>"`（目标从源 BUILD.gn 解析）。 |
| **编译** | 从源 BUILD.gn 解析可编译目标（executable/ohos_executable 等），以**仅目标名**传给 `build.sh --build-target`，多个目标用逗号分隔。 |
| **验证** | 在 `out/<product>` 下按目标名查找产物（strip 或 exe.unstripped），检查是否存在。 |
| **推送到设备并运行** | 使用 `OHOS_SDK_PATH` 下的 hdc：将可执行产物推送到设备 `/data/local/tmp/<目标名>`，`chmod +x` 后执行；并解析设备输出的「support command as follows:」与源码 `clitools.cpp` 中 `g_staCliCmds` 的命令列表对比，一致则打印「命令列表一致」，否则报差异。 |

**约定**：
- 源目录与 test 目录由参数指定或使用脚本默认值；编译目标从源目录 BUILD.gn 自动解析。
- 接口检查以 bundle.json 中名为 btframework 的 inner_kit 为准；覆盖指 clitools 源码中 include 了对应头文件或等效实现。

### 支持的 CLI 工具

| 工具 | 源目录（默认） | test 目录（部署目标） | 产物名 | 设计文档 |
|------|----------------|------------------------|--------|----------|
| **btclitools** | `src/skills/ohclitools/btclitools` | `foundation/communication/bluetooth/test` | btcommand | btclitools/DESIGN.md |
| **wificlitools** | `src/skills/ohclitools/wificlitools` | `foundation/communication/wifi/wifi/test` | wificommand | wificlitools/DESIGN.md |
| **dsclitools** | `src/skills/ohclitools/dsclitools` | `foundation/communication/dsoftbus/tests` | dscommand | dsclitools/DESIGN.md |

wificlitools 参考 wifi bundle 的 inner_api（wifi_sdk / wifi_base / wifi_utils），按 STA、Hotspot、P2P、Hid2d 能力域划分模块，设计目标与 btclitools 的 DESIGN.md 一致（文件与功能清晰、降低耦合、功能单一、接口对应可读、**接口全覆盖**）。详见各工具目录下 DESIGN.md。

dsclitools 参考 dsoftbus bundle 的 softbus_client（bus_center、common、session），按 bus_center、session 能力域划分模块，对 softbus_bus_center.h 与 session.h 接口提供命令行全覆盖。部署到 `foundation/communication/dsoftbus/tests/dsclitools`，在 tests/BUILD.gn 的 group("unittest") 中增加 `"dsclitools:dscommand"`。详见 dsclitools/DESIGN.md。

### wificlitools 生成过程与问题摘要

| 阶段 | 问题与处理 |
|------|------------|
| 部署 | 空 `deps = []` 时插入首项产生 `deps = [, "..."` 语法错误 → ohclitool.py 的 _add_dep_to_build_gn 改为仅在已有内容时补逗号。 |
| 编译 | 未使用函数报错 → 删除未调用 stub；define.h 依赖 system_ability_definition.h → BUILD.gn 增加 ipc/samgr 的 external_deps 与 include_dirs。 |
| 类型 | WifiLinkedInfo::ipAddress 为 unsigned int → 打印用 %u。 |
| 覆盖 | 对照 bundle inner_api 全量补充 STA/Scan/Hotspot/P2P 命令并新增 Hid2d 模块，确保所有对外能力有对应命令行。 |

### CLI 代码规范（生成/补齐代码时须遵守）

生成或修改任一 clitools（btclitools、wificlitools、dsclitools 等）代码时，**必须**遵守下表；各工具 DESIGN.md 中的「代码规范」与本节一致，以本节为准。

| 规范项 | 要求 |
|--------|------|
| **魔数禁止** | 不得在逻辑中直接写魔法数字/字符串，一律用具名常量或枚举（如 clitools_constants.h / 工具内常量头文件）。 |
| **行宽** | 单行字符数不超过 120（含缩进与注释），超长时换行缩进。 |
| **函数名** | 大驼峰（PascalCase），如 `HandleWifiEnable`、`ParseIntArg`、`GetArg`。 |
| **常量名** | 全大写 + 下划线（UPPER_SNAKE_CASE），如 `WIFI_OPT_SUCCESS`、`DEFAULT_CALLBACK_TIMEOUT_MS`；禁止 k 前缀或 camelCase。 |
| **变量声明** | 同一行不声明多个变量（如 `std::string ifName, ip;` 改为两行：`std::string ifName;`、`std::string ip;`）。 |
| **注释位置** | 说明性注释不写在行尾；应单独占一行，写在被注释代码的**上一行**。 |
| **换行与运算符** | 续行时运算符放在行尾，行尾与下一行行首不留空格（如 `&&`、`\|\|` 在上一行末尾）。 |
| **头文件** | 不在头文件中使用匿名 namespace 或 static 定义非外部可见符号；常量用 `inline constexpr`（C++17）或移至 .cpp 定义。 |
| **Get 类接口** | 凡「获取信息」类接口（如 GetLinkedInfo、GetDeviceConfigs、GetScanInfoList、GetAllNodeDeviceInfo、GetMySessionName），需在终端 **dump 出具体 info**（字段级打印），不能只打印「success」。 |
| **Callback 接口** | 若框架 API 为异步回调，需：① 注册 callback；② 等待回调结果并带 **timeout**。默认超时 **2s**；对 scan 等长时间操作默认 **30s**，超时后结束动作并返回。 |
| **Usage 两段式** | 每个命令的 usage 分两部分：① 接口功能与参数说明（参数标明 **string** 或 **int**，如 `code= string`、`networkId= int`）；② 使用示例，以 ` ex: <工具命令名> <cmd> [args]` 结尾（如 wificommand / dscommand）。 |
| **Usage 示例值** | 示例取值与框架/测试一致（如 SetCountryCode 测试用 `"86"`，则 usage 写 `code=86` 而非 CN）；枚举型罗列枚举及传入值（如 `band= int 1\|2`）。 |
| **数据结构打印** | 收到的数据结构（如 WifiLinkedInfo、WifiDeviceConfig、NodeBasicInfo、MetaNodeInfo、会话名/deviceId 等）必须通过 **DumpXxx** 方法或字段级 Logd 统一打印到终端，不得只打印「success」。 |
| **函数注释** | 每个函数（含 handler、工具函数、静态回调）需用注释声明**参数说明**与**返回值说明**；**每个 @param、@return 单独占一行**（不得将多个 @param 与 @return 写在同一行）；注释块写在函数签名**上一行**，**不得替换或删除函数体开头的 `{`**。示例：`@param argc`、`@param argv`、`@return void` 各占一行。 |

### 生成/补齐代码时的禁止事项（避免重复错误）

- **禁止在添加函数注释时删除或合并函数体开头的 `{`**。正确做法：注释单独一行在函数签名上方，签名下一行必须是 `{`，再下一行才是函数体。错误示例：把 `void HandleXxx(...)\n{` 替换成 `void HandleXxx(...)\n    const char* x = ...` 导致缺少 `{` 引发编译错误。
- **禁止使用魔数**：缓冲区大小（如 256、128）、默认掩码（如 0xF）、默认频率（如 5180）、默认字符串（如 "{}"）等均需在常量头文件中定义为具名常量。
- **禁止局部变量使用易与常量混淆的 k 前缀**：如用 `keyLen` 而非 `klen`（常量才用全大写+下划线）。
- **禁止 Get 类 handler 只打印 success**：必须对返回的结构体做字段级 dump（DumpXxx 或逐字段 Logd）。

### 安全与行宽（避免静态检查/安全规范报错，生成/修改代码时须遵守）

- **禁止使用不安全函数 `strncpy`、`memset`**：须改用安全接口 **`strncpy_s`**、**`memset_s`**。需在源文件中 `#include "securec.h"`，并在 BUILD.gn 的 **external_deps** 中增加 **`"bounds_checking_function:libsec_shared"`**（勿用绝对路径 `deps = [ "//third_party/..." ]`，否则 GN 报错不允许跨组件绝对依赖）。用法示例：`strncpy_s(dest, destMax, src, count)`；`memset_s(dest, destMax, value, count)`，返回值可 `(void)` 忽略。
- **单行不超过 120 字符**：含缩进与注释在内，超过时须换行（如长字符串拆为多行字面量拼接、参数列表换行等），避免「Current line length is more than 120 characters」类告警。

### 命名与可读性约定（与各工具 DESIGN.md「六」一致，生成/修改代码时须遵守）

以下约定与 wificlitools/dsclitools 等 DESIGN.md 中「六、命名与可读性约定」一致，避免命令/文件/注释风格不一致。

| 约定项 | 要求 |
|--------|------|
| **命令** | 小写、连续字母，如 `wifienable`、`wifiscan`、`getdeviceconfigs`；与框架能力一一对应时在**命令表注释**中标明对应头文件及「bundle inner_api ↔ 命令组」。 |
| **Handler 函数** | 大驼峰（PascalCase），如 `HandleWifiEnable`、`HandleHotspotXxx`、`HandleP2pXxx`、`HandleGetNodeKeyInfo`。 |
| **常量** | 全大写 + 下划线（UPPER_SNAKE_CASE），如 `CMD_IDX`、`MIN_WPA_PASSWORD_LEN`、`DEFAULT_CALLBACK_TIMEOUT_MS`；禁止魔数，凡数值/字符串常量均以常量或枚举形式定义于常量头文件。 |
| **文件** | `clitools_<模块名>.h/cpp` 对应**单一能力域**（如 clitools_sta、clitools_hotspot、clitools_bus_center、clitools_session）；`common.h/cpp` 或 `common_*` 表示跨模块公共能力。 |
| **注释** | ① 各**模块头文件顶部**（如 clitools_sta.h、clitools_bus_center.h）用 @brief 说明对应 **inner_api/头文件**；② **命令表旁**（如 clitools.cpp 中 g_staCliCmds/g_dsCliCmds 上方）用简短注释标明「**bundle inner_api ↔ 命令组**」（如 `STA: wifi_device.h, wifi_scan.h -> clitools_sta`）。 |

生成或补齐任一 clitools 时，除遵守上表「CLI 代码规范」与「禁止事项」外，须同时满足本「命名与可读性约定」，并在各工具 DESIGN.md 中保持「六、命名与可读性约定」及检查清单与本节一致。

---

## 二、对应脚本

- **脚本路径**：`src/src/skills/ohclitools/ohclitool.py`
- **运行位置**：在工程 **src 目录**下执行（即 `build.sh` 所在目录）。

### 命令与参数

| 命令 | 说明 | 主要参数 |
|------|------|----------|
| `coverage` | 根据 bundle 的 btframework inner_kits 检查 clitools 接口覆盖，输出并可选写入报告 | `--bundle-json`、`--source-dir`、`--output` |
| `deploy` | 拷贝源目录到 test 并修改 BUILD.gn | `--source-dir`、`--test-dir` |
| `build` | 编译（--build-target 仅目标名，多目标逗号分隔） | `--source-dir`、`--test-dir`、`--product-name` |
| `verify` | 检查产物是否存在；加 `--push-run` 时推送到设备并运行 | `--source-dir`、`--product-name`、`--push-run` |
| `all` | 顺序执行 deploy → build → verify（可选 `--push-run`） | 同上 |
| `help` | 打印用法与示例 | - |

### 参数说明

- **--bundle-json PATH**：bundle.json 路径（用于 coverage），相对 src 或绝对路径。默认：`foundation/communication/bluetooth/bundle.json`
- **--source-dir PATH**：源目录（如 btclitools），相对 src 或绝对路径。默认：`src/skills/ohclitools/btclitools`
- **--test-dir PATH**：目标 test 目录。默认：`foundation/communication/bluetooth/test`
- **--product-name NAME**：产品名，默认：`rk3568`
- **--output PATH**：coverage 报告输出路径（可选）；不指定则只打印到 stdout
- **--push-run**：verify/all 时推送到设备并执行，并比较设备输出命令列表与源码 g_staCliCmds 是否一致

### 脚本调用示例

```bash
# 在 src 目录下执行
cd /path/to/ohos/src

# 接口覆盖检查，输出到控制台
python3 src/skills/ohclitools/ohclitool.py coverage \
  --bundle-json foundation/communication/bluetooth/bundle.json \
  --source-dir src/skills/ohclitools/btclitools

# 接口覆盖检查，并写入报告文件
python3 src/skills/ohclitools/ohclitool.py coverage \
  --source-dir src/skills/ohclitools/btclitools \
  --output src/skills/ohclitools/btclitools/BTFRAMEWORK_COVERAGE.md

# 一键：拷贝 + 编译 + 验证
python3 src/skills/ohclitools/ohclitool.py all \
  --source-dir src/skills/ohclitools/btclitools \
  --test-dir foundation/communication/bluetooth/test \
  --product-name rk3568

# 验证并将产物推送到设备运行
python3 src/skills/ohclitools/ohclitool.py verify \
  --source-dir src/skills/ohclitools/btclitools \
  --product-name rk3568 \
  --push-run

# wificlitools：拷贝到 wifi test、编译、验证
python3 src/skills/ohclitools/ohclitool.py all \
  --source-dir src/skills/ohclitools/wificlitools \
  --test-dir foundation/communication/wifi/wifi/test \
  --product-name rk3568
```

---

## 三、对应提示词

用户在与 AI 协作时，可用下列提示词触发本技能（由 AI 调用脚本或按流程执行）：

1. **接口检查**
   - 「根据 bundle.json 里 btframework 的 inner_kits 检查 btclitools 接口覆盖」
   - 「用 ohclitools 技能做一次接口覆盖检查并生成报告」

2. **生成对应代码**
   - 「根据接口覆盖报告，对未覆盖的接口在 btclitools 里生成对应代码（不同模块用不同文件）」
   - 「按 BTFRAMEWORK_COVERAGE 里未覆盖的 A2DP/Socket/Profile 生成 clitools_xxx 并接入命令行」

3. **拷贝 + 编译 + 验证**
   - 「使用技能将 @btclitools 拷贝到 @test 目录，然后进行编译和验证」
   - 「用 ohclitools 技能部署 btclitools 到 bluetooth test 并编译验证」

4. **推送到设备并测试运行**
   - 「使用技能将编译生成的 btcommand 发送到设备上并验证运行」
   - 「用 ohclitools 把产物推到设备并运行」

5. **仅编译 / 仅验证**
   - 「用 ohclitools 只编译 btclitools」
   - 「用 ohclitools 验证 btcommand 产物是否存在」

6. **wificlitools / dsclitools 等**
   - 「使用技能将 wificlitools 拷贝到 wifi test 目录，然后进行编译和验证」
   - 「用 ohclitools 部署 wificlitools 并编译」
   - 「参考 wificlitools/DESIGN.md 对未实现接口补齐代码，遵守本技能「CLI 代码规范」「禁止事项」与「命名与可读性约定」（命令小写连续、Handler 大驼峰、模块头/命令表注释标明 inner_api↔命令组；无魔数、Get 类 dump、每个函数有 @param/@return 且不删函数体 `{`）」
   - 「按 dsclitools/DESIGN.md 生成/修改 dsclitools 代码，并严格遵循 SKILL.md 中的 CLI 代码规范、禁止事项与命名与可读性约定」 

---

## 四、完整流程（接口检查 → 代码生成 → 编译 → 验证 → 设备运行）

| 步骤 | 操作 | 脚本命令示例 |
|------|------|--------------|
| 1 | 根据 bundle 检查接口在 clitools 中的覆盖情况 | `ohclitool.py coverage [--output REPORT.md]` |
| 2 | 根据报告对未覆盖接口生成/补齐代码（clitools_模块名.h/cpp，注册命令）；**须遵守「CLI 代码规范」「生成/补齐代码时的禁止事项」与「命名与可读性约定」**（命令小写连续、Handler 大驼峰、常量头文件、模块头注释 inner_api、命令表注释 bundle inner_api↔命令组），避免魔数、缺 `{`、Get 不 dump、无函数注释等错误 | 人工或 AI 按报告与各工具 DESIGN.md 实现 |
| 3 | 拷贝源目录到 test 并修改 BUILD.gn | `ohclitool.py deploy` |
| 4 | 编译 | `ohclitool.py build` |
| 5 | 验证产物是否存在 | `ohclitool.py verify` |
| 6 | 将产物推送到设备并测试运行（含命令列表对比） | `ohclitool.py verify --push-run` |

也可一键执行 3～6：`ohclitool.py all [--push-run]`。生成/补齐代码时 callback 超时参考：`ohclitool.py` 中 `DEFAULT_CALLBACK_TIMEOUT_MS`（2s）、`SCAN_OR_LONG_OP_TIMEOUT_MS`（30s）。

---

## 五、路径与约定（参考）

- 接口检查：bundle 中 inner_kit 的 `name` 包含 `btframework` 的 `header.header_files` 为待覆盖头文件；覆盖指在 source-dir 的 .cpp/.h 中出现 `#include` 对应头或等效实现。
- 部署：`test_dir/<source_dir名>`；编译目标仅传目标名，多目标逗号分隔。
- 推送：hdc 推送到设备 `/data/local/tmp/<目标名>` 并执行，并对比设备输出命令列表与源码 g_staCliCmds；设备需连接且该目录可写。
