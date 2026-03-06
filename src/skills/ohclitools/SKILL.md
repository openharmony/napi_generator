# ohclitools 技能说明

本技能用于将**用户指定的源目录**（如 btclitools）与**框架接口**对齐：支持根据 bundle 中 inner_kits 做接口覆盖检查、生成/补齐对应 CLI 代码、拷贝部署、编译、验证，以及将编译产物推送到设备并测试运行。

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
| **btclitools** | `.claude/skills/ohclitools/btclitools` | `foundation/communication/bluetooth/test` | btcommand | btclitools/DESIGN.md |
| **wificlitools** | `.claude/skills/ohclitools/wificlitools` | `foundation/communication/wifi/wifi/test` | wificommand | wificlitools/DESIGN.md |

wificlitools 参考 wifi bundle 的 inner_api（wifi_sdk / wifi_base / wifi_utils），按 STA、Hotspot、P2P、Hid2d 能力域划分模块，设计目标与 btclitools 的 DESIGN.md 一致（文件与功能清晰、降低耦合、功能单一、接口对应可读、**接口全覆盖**）。详见各工具目录下 DESIGN.md。

### wificlitools 生成过程与问题摘要

| 阶段 | 问题与处理 |
|------|------------|
| 部署 | 空 `deps = []` 时插入首项产生 `deps = [, "..."` 语法错误 → ohclitool.py 的 _add_dep_to_build_gn 改为仅在已有内容时补逗号。 |
| 编译 | 未使用函数报错 → 删除未调用 stub；define.h 依赖 system_ability_definition.h → BUILD.gn 增加 ipc/samgr 的 external_deps 与 include_dirs。 |
| 类型 | WifiLinkedInfo::ipAddress 为 unsigned int → 打印用 %u。 |
| 覆盖 | 对照 bundle inner_api 全量补充 STA/Scan/Hotspot/P2P 命令并新增 Hid2d 模块，确保所有对外能力有对应命令行。 |

### CLI 代码规范（生成/补齐代码时须遵守）

| 规范项 | 要求 |
|--------|------|
| **魔数禁止** | 不得使用魔数，一律用具名常量或枚举。 |
| **行宽** | 单行不超过 120 字符（含缩进与注释）。 |
| **函数名** | 大驼峰（PascalCase）。 |
| **常量名** | 全大写 + 下划线（UPPER_SNAKE_CASE）；禁止 k 前缀或 camelCase（如 `kDefaultXxx` 改为 `DEFAULT_XXX`）。 |
| **变量声明** | 同一行不声明多个变量（如 `std::string ifName, ip;` 改为两行：`std::string ifName;`、`std::string ip;`）。 |
| **注释位置** | 说明性注释不写在行尾；应单独占一行，写在被注释代码的**上一行**（如 `// 0 = BR/EDR` 放在 `GetRemoteDevice(mac, 0)` 上一行）。 |
| **换行与运算符** | 续行时运算符放在行尾，行尾与下一行行首不留空格（如 `&&`、`\|\|` 在上一行末尾，下一行直接接表达式）。 |
| **头文件** | 不在头文件中使用匿名 namespace 或 static 定义非外部可见符号；常量用 `inline constexpr`（C++17）或移至 .cpp 中定义。 |
| **Get 类接口** | 必须在终端 dump 出具体 info（字段级），不能只打印 success。 |
| **Callback** | 需注册 callback 并等待返回值；**必须带 timeout**。默认 2s；scan 等长时间操作默认 30s，超时后结束动作。 |
| **Usage 两段式** | 每个命令的 usage 分两部分：① **接口功能与参数说明**（参数需标明 **string** 或 **int**，如 `code= string`、`networkId= int`）；② **使用示例**，固定以 ` ex: wificommand <cmd> [args]` 结尾。 |
| **Usage 示例值** | 示例中的取值应与框架/测试代码一致（如 SetCountryCode 测试用 `"86"`，则 usage 写 `ex: wificommand setcountrycode code=86`，不写 CN）。枚举型在说明中罗列所有枚举及对应传入值（如 `band= int 1\|2`）。 |

---

## 二、对应脚本

- **脚本路径**：`src/.claude/skills/ohclitools/ohclitool.py`
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
- **--source-dir PATH**：源目录（如 btclitools），相对 src 或绝对路径。默认：`.claude/skills/ohclitools/btclitools`
- **--test-dir PATH**：目标 test 目录。默认：`foundation/communication/bluetooth/test`
- **--product-name NAME**：产品名，默认：`rk3568`
- **--output PATH**：coverage 报告输出路径（可选）；不指定则只打印到 stdout
- **--push-run**：verify/all 时推送到设备并执行，并比较设备输出命令列表与源码 g_staCliCmds 是否一致

### 脚本调用示例

```bash
# 在 src 目录下执行
cd /path/to/ohos/src

# 接口覆盖检查，输出到控制台
python3 .claude/skills/ohclitools/ohclitool.py coverage \
  --bundle-json foundation/communication/bluetooth/bundle.json \
  --source-dir .claude/skills/ohclitools/btclitools

# 接口覆盖检查，并写入报告文件
python3 .claude/skills/ohclitools/ohclitool.py coverage \
  --source-dir .claude/skills/ohclitools/btclitools \
  --output .claude/skills/ohclitools/btclitools/BTFRAMEWORK_COVERAGE.md

# 一键：拷贝 + 编译 + 验证
python3 .claude/skills/ohclitools/ohclitool.py all \
  --source-dir .claude/skills/ohclitools/btclitools \
  --test-dir foundation/communication/bluetooth/test \
  --product-name rk3568

# 验证并将产物推送到设备运行
python3 .claude/skills/ohclitools/ohclitool.py verify \
  --source-dir .claude/skills/ohclitools/btclitools \
  --product-name rk3568 \
  --push-run

# wificlitools：拷贝到 wifi test、编译、验证
python3 .claude/skills/ohclitools/ohclitool.py all \
  --source-dir .claude/skills/ohclitools/wificlitools \
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

6. **wificlitools**
   - 「使用技能将 wificlitools 拷贝到 wifi test 目录，然后进行编译和验证」
   - 「用 ohclitools 部署 wificlitools 并编译」
   - 「参考 wificlitools/DESIGN.md 对未实现接口补齐代码，遵守代码规范（无魔数、行宽≤110、Get 类 dump info、callback 带 timeout、usage 两段式且标明参数 string/int、示例与框架/测试一致如 code=86）」 

---

## 四、完整流程（接口检查 → 代码生成 → 编译 → 验证 → 设备运行）

| 步骤 | 操作 | 脚本命令示例 |
|------|------|--------------|
| 1 | 根据 bundle 检查接口在 clitools 中的覆盖情况 | `ohclitool.py coverage [--output REPORT.md]` |
| 2 | 根据报告对未覆盖接口生成/补齐代码（clitools_模块名.h/cpp，注册命令）；须遵守上文「CLI 代码规范」 | 人工或 AI 按报告与 DESIGN.md 实现 |
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
