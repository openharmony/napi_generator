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

---

## 四、完整流程（接口检查 → 代码生成 → 编译 → 验证 → 设备运行）

| 步骤 | 操作 | 脚本命令示例 |
|------|------|--------------|
| 1 | 根据 bundle 检查 btframework 接口在 clitools 中的覆盖情况 | `ohclitool.py coverage [--output REPORT.md]` |
| 2 | 根据报告对未覆盖接口生成/补齐代码（clitools_模块名.h/cpp，注册命令） | 人工或 AI 按报告实现 |
| 3 | 拷贝源目录到 test 并修改 BUILD.gn | `ohclitool.py deploy` |
| 4 | 编译 | `ohclitool.py build` |
| 5 | 验证产物是否存在 | `ohclitool.py verify` |
| 6 | 将产物推送到设备并测试运行（含命令列表对比） | `ohclitool.py verify --push-run` |

也可一键执行 3～6：`ohclitool.py all [--push-run]`。

---

## 五、路径与约定（参考）

- 接口检查：bundle 中 inner_kit 的 `name` 包含 `btframework` 的 `header.header_files` 为待覆盖头文件；覆盖指在 source-dir 的 .cpp/.h 中出现 `#include` 对应头或等效实现。
- 部署：`test_dir/<source_dir名>`；编译目标仅传目标名，多目标逗号分隔。
- 推送：hdc 推送到设备 `/data/local/tmp/<目标名>` 并执行，并对比设备输出命令列表与源码 g_staCliCmds；设备需连接且该目录可写。
