# ohclitools 技能说明

本技能用于将**用户指定的源目录**（如 btclitools）拷贝到**目标 test 目录**，从源目录的 BUILD.gn 自动识别可编译目标并加入 test 的 BUILD.gn，执行编译、验证，并可选择将产物推送到设备并运行。

---

## 一、技能能力

| 能力 | 说明 |
|------|------|
| **拷贝部署** | 将源目录（如 `btclitools`）完整拷贝到 `test_dir/<源目录名>`，并在 test 目录的 BUILD.gn 的 group deps 中增加 `"<源目录名>:<目标名>"`（目标从源 BUILD.gn 解析，可多个）。 |
| **编译** | 从源 BUILD.gn 解析可编译目标（executable/ohos_executable/shared_library/static_library），以**仅目标名**（如 `btcommand`）传给 `build.sh --build-target`，多个目标用逗号分隔。 |
| **验证** | 在 `out/<product>` 下按目标名查找产物（strip 或 exe.unstripped），检查是否存在。 |
| **推送到设备并运行** | 使用 `OHOS_SDK_PATH` 下的 hdc：将首个可执行产物推送到设备 `/tmp/<目标名>`，`chmod +x` 后执行。需设备已连接且环境变量已配置。 |

**约定**：
- 源目录与 test 目录均由用户通过参数指定（或使用脚本内默认值）。
- 编译目标不写死：从源目录的 `BUILD.gn` 中正则匹配 `executable("x")`、`ohos_executable("x")` 等得到目标名列表。

---

## 二、对应脚本

- **脚本路径**：`src/.claude/skills/ohclitools/ohclitool.py`
- **运行位置**：在工程 **src 目录**下执行（即 `build.sh` 所在目录）。

### 命令与参数

| 命令 | 说明 | 主要参数 |
|------|------|----------|
| `deploy` | 拷贝源目录到 test 并修改 BUILD.gn | `--source-dir`、`--test-dir` |
| `build` | 编译（--build-target 仅传目标名，多目标逗号分隔） | `--source-dir`、`--test-dir`、`--product-name` |
| `verify` | 检查产物是否存在；加 `--push-run` 时推送到设备并运行 | `--source-dir`、`--product-name`、`--push-run` |
| `all` | 顺序执行 deploy → build → verify（可选 `--push-run`） | 同上 |
| `help` | 打印用法与示例 | - |

### 参数说明

- **--source-dir PATH**：源目录（如 btclitools），相对 src 或绝对路径。默认：`.claude/skills/ohclitools/btclitools`
- **--test-dir PATH**：目标 test 目录，相对 src 或绝对路径。默认：`foundation/communication/bluetooth/test`
- **--product-name NAME**：产品名，默认：`rk3568`
- **--push-run**：仅在 `verify`/`all` 时有效；验证后使用 hdc 推送到设备 `/tmp/<目标名>` 并执行

### 脚本调用示例

```bash
# 在 src 目录下执行
cd /path/to/ohos/src

# 一键：拷贝 + 编译 + 验证（不推设备）
python3 .claude/skills/ohclitools/ohclitool.py all \
  --source-dir .claude/skills/ohclitools/btclitools \
  --test-dir foundation/communication/bluetooth/test \
  --product-name rk3568

# 仅推送到设备并运行（需已编译过且设置 OHOS_SDK_PATH）
python3 .claude/skills/ohclitools/ohclitool.py verify \
  --source-dir .claude/skills/ohclitools/btclitools \
  --product-name rk3568 \
  --push-run
```

---

## 三、对应提示词

用户在与 AI 协作时，可使用下列提示词触发本技能（由 AI 调用上述脚本完成）：

1. **拷贝并接入**
   - 「使用技能将 @btclitools 拷贝到 @test 目录」
   - 「把 xx 目录拷贝到 yy/test 下并改 BUILD.gn」

2. **拷贝 + 编译 + 验证**
   - 「使用技能将 @btclitools 拷贝到 @test 目录，然后进行编译和验证」
   - 「用 ohclitools 技能部署 btclitools 到 bluetooth test 并编译验证」

3. **推送到设备并运行**
   - 「使用技能将编译生成的 btcommand 发送到设备上并验证运行」
   - 「用 ohclitools 把产物推到设备并运行」

4. **仅编译 / 仅验证**
   - 「用 ohclitools 只编译 btclitools」
   - 「用 ohclitools 验证 btcommand 产物是否存在」

**提示词要点**：指明「源目录」「test 目录」时可用 @ 引用；需要推设备时说明「发送到设备」「验证运行」或「push-run」。

---

## 四、流程与路径约定（参考）

| 步骤 | 操作 |
|------|------|
| 1 | 将 `--source-dir` 指向的目录拷贝到 `test_dir/<source_dir名>`（如 `test/btclitools`） |
| 2 | 解析源目录下 `BUILD.gn` 中的 executable/ohos_executable 等，得到目标名列表；在 `test_dir/BUILD.gn` 的 group deps 中增加 `"<源目录名>:<目标名>"` |
| 3 | 执行 `build.sh --build-target <目标名1>,<目标名2>,... --product-name <产品名>`（仅目标名，无路径） |
| 4 | 在 `out/<product>` 及 `exe.unstripped` 下按目标名查找可执行文件；若带 `--push-run`，则用 hdc 推送到设备 `/tmp/<目标名>` 并执行 |

若目标 test 下已有同名子目录或 BUILD.gn 中已有对应 dep，脚本会覆盖拷贝并跳过重复添加依赖。
