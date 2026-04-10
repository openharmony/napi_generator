---
name: ohhap
description: "OpenHarmony HAP 应用构建与签名：环境检查、SDK 版本校验、hvigor 编译主包与 ohosTest、release/debug 签名、清除签名。需 HOS_CLT_PATH、OHOS_SDK_PATH（签名可兼用 DEVECO_SDK_HOME）、hapsigner 证书目录（OHOS_HAPSIGNER_RESULT 等）与 build-profile.json5。脚本 hapbuild.py；Windows/Linux 同一套逻辑，SDK 与证书路径自动适配。与 ohbuild（fuzz/部件编译）不同。"
author: "Created by user"
created: "2026-01-20"
version: "1.0.3"
---

# OpenHarmony HAP 构建工具

## 功能描述

这个 skill 提供了 OpenHarmony HAP 应用的构建和签名功能，包括：

1. **环境检查**：自动检查编译所需的环境配置
2. **版本验证**：验证 SDK 版本与项目配置的一致性
3. **HAP 构建**：执行 HAP 应用的编译
4. **HAP 签名**：对编译生成的 HAP 文件进行签名
5. **清除签名**：清除签名相关的临时文件

## 应用示例与提示词

需 **`HOS_CLT_PATH`**、**`OHOS_SDK_PATH`**；**签名**还需 hapsigner 证书（见下文 **`OHOS_HAPSIGNER_RESULT`**）。在 **napi_generator 仓库根** 执行时脚本路径如下，**`<项目目录>`** 可为 **`src/skills/ohhap/EmptyProj46R`**、**`NativeProj46R`** 或自建 HAP 工程绝对路径。Windows 下命令把 `python3` 换成 `python` 即可。

| 场景 | 命令示例 | 提示词示例 |
|------|----------|------------|
| 编译 HAP | `python3 src/skills/ohhap/hapbuild.py build src/skills/ohhap/NativeProj46R` | 「用 ohhap 编译 NativeProj46R 模板工程」 |
| 指定 product/mode | `python3 src/skills/ohhap/hapbuild.py build <项目> default release` | 「打成 release 主包」 |
| 签主包 | `python3 src/skills/ohhap/hapbuild.py sign <项目> release` | 「对未签名 HAP 做 release 签名」 |
| 编测试包 | `python3 src/skills/ohhap/hapbuild.py build-test <项目>` | 「只构建 ohosTest HAP」 |
| 清签名 | `python3 src/skills/ohhap/hapbuild.py clean-sign <项目>` | 「清除 autosign 临时文件」 |
| 查看用法 | `python3 src/skills/ohhap/hapbuild.py`（无参打印命令列表） | 「hapbuild 支持哪些子命令」 |

## 环境要求

### 必需的环境变量

- `HOS_CLT_PATH`: HarmonyOS Command Line Tools 路径
  - 例如: `<本机 Command Line Tools 根目录>`
  - 需要包含 `version.txt` 文件

- `OHOS_SDK_PATH`: OpenHarmony / DevEco SDK 根目录（构建与签名校验均用）
  - 例如 Linux: `<本机 ohos-sdk>`；Windows 常见: `D:\Program Files\Huawei\ohossdk`
  - 构建侧：通常需要存在 `daily_build.log`（依你本机 SDK 布局而定）
- `DEVECO_SDK_HOME`（可选）: 与 `OHOS_SDK_PATH` 二选一或同时设置时，**签名**解析 `hap-sign-tool.jar` 会读取其中任一

**仅签名额外需要（证书来自 OpenHarmony 源码 hapsigner 或自备合并目录）：**

- `OHOS_HAPSIGNER_RESULT`: 指向含 **`OpenHarmony.p12`、`rootCA.cer`、`subCA.cer`** 及 profile 用 **`.pem`** 的目录  
  - 源码标准布局：`.../developtools/hapsigner/autosign/result`  
  - 若证书与 **`Unsgned*ProfileTemplate.json` 在同一目录**（自备 `autosign` 合并目录），设此变量指向该目录即可，脚本会自动在同一目录找模板
- `OHOS_HAPSIGNER_AUTOSIGN`（可选）: 仅当证书在 `.../result`、模板在上级 `.../autosign` 且自动推断失败时再设，指向含模板 JSON 的 `autosign` 目录
- 未设置 `OHOS_HAPSIGNER_RESULT` 时，会尝试 `~/ohos/<*release>/src/developtools/hapsigner/autosign/result`（Linux/macOS 或 Windows 下对应 **`%USERPROFILE%\ohos\...`**）

### 工具版本要求

- **Node.js**: v18.20.1
- **Hvigor**: 6.21.2
- **项目目录**: 需要包含 `build-profile.json5` 配置文件
- **Java / keytool**: 签名依赖 `java`；若 `OpenHarmony.p12` 中已有损坏或与工具链不兼容的 **`oh-app1-key-v1`**，脚本会尝试用 **`keytool`**（随 JDK/JRE，通常与 `java` 同套件）在工作副本中删除该别名后再生成密钥对

## Windows 与 Linux

### Windows 下编译：如何传工程路径、要改什么

- **`hapbuild.py build <project_dir> …`**：`<project_dir>` 必须是 **HAP 工程根目录**（含 **`build-profile.json5`**）。传参方式与 Linux **相同**：
  - **相对路径**（在 **napi_generator 仓库根** 执行）：如 `src/skills/ohhap/EmptyProj46R`。
  - **绝对路径**：如 `D:\gitcode\wshikh\napi_generator_9904\src\skills\ohhap\EmptyProj46R`。
  - 脚本内会对目录做 **`os.path.abspath`** 规范化；**正斜杠 `/` 与反斜杠 `\` 均可**。
- **路径中含空格**（如 `D:\Program Files\...`）：在 **PowerShell / CMD** 里对**参数或环境变量值**加 **英文双引号**，例如  
  `$env:OHOS_SDK_PATH = "D:\Program Files\Huawei\ohossdk"`，  
  `python src\skills\ohhap\hapbuild.py build "D:\my projects\MyApp"`。
- **`local.properties`（工程根目录）**：Gradle/hvigor 用 **`sdk.dir=`** 指向本机 **SDK 根目录**（与 **`OHOS_SDK_PATH`** 应一致）。执行 **`hapbuild.py`** 做环境检查时，会 **读取并可在缺失/无效时自动创建或修正** `sdk.dir`（以 **`OHOS_SDK_PATH`** 为准），一般**无需**在 Windows 上为编译单独再改一版脚本；若仅命令行构建，保证 **`OHOS_SDK_PATH`** 正确即可。该文件常含本机绝对路径，**多数团队不提交版本库**，每人本地一份或由脚本生成。
- **子命令与参数**：**build / build-test / sign / clean-sign** 在 Windows 与 Linux **一致**，仅需把文档里的 **`python3`** 换成 **`python`**（若本机如此）。

- **同一脚本 `hapbuild.py`**，不按系统分支写两套命令；路径用 `os.path`，在家目录等处 Windows 为 **`%USERPROFILE%`**，等价于文档中的 `~`。
- **差异主要在 SDK 目录结构**：Linux 常见 **`$OHOS_SDK_PATH/linux/toolchains/lib/hap-sign-tool.jar`**；Windows 上 DevEco 常放在 **`$OHOS_SDK_PATH/<API>/toolchains/lib/`**（如 `20/toolchains/lib`）。脚本会按 **`build-profile.json5` 中的 API 级别** 与 `linux/toolchains/lib` 等路径依次查找。
- **构建**：`hvigorw` 通过 `node $HOS_CLT_PATH/hvigor/bin/hvigorw.js` 调用，与系统无关；**`build-profile.json5` 中含 Windows 绝对路径的签名字段**时，脚本内另有逻辑会提示或清理，避免在 Linux 上误用 Windows 路径。
- **签名**：流程均为「项目根下建 **`autosign/`** → 拷贝证书与工具 → `java -jar hap-sign-tool.jar`」；与 Ubuntu 上一致。
- **p12 里已有 `oh-app1-key-v1` 导致 `generate-app-cert` 报错（如别名已存在、私钥格式/口令与 `hap-sign-tool` 不一致）**：这是**证书/历史操作**问题，**与 Linux 或 Windows 无本质区别**；同一套逻辑已在 `hapbuild.py` 固化——优先用 **`keytool`** 在工作副本的 `OpenHarmony.p12` 上删除该别名（自动解析 **`JAVA_HOME`** 或当前 **`java`** 的 `java.home`，Windows 下查找 **`keytool.exe`**，Linux/macOS 下查找 **`keytool`**），再执行 `generate-keypair`；若无 **keytool**，仍保留「别名已存在则跳过 `generate-keypair`」的退路（可能继续在问题 p12 上失败，需换干净 **`OHOS_HAPSIGNER_RESULT`** 中的 p12 或安装 JDK）。

## 使用方法

### 命令行方式

#### 构建 HAP

```bash
# 基本用法（使用默认 product 和 debug 模式）
python3 src/skills/ohhap/hapbuild.py build <project_dir>

# 向后兼容：直接使用项目目录（自动识别为 build 命令）
python3 src/skills/ohhap/hapbuild.py <project_dir>

# 指定 product 和 build_mode
python3 src/skills/ohhap/hapbuild.py build <project_dir> <product> <build_mode>

# 示例
python3 src/skills/ohhap/hapbuild.py build /path/to/project
python3 src/skills/ohhap/hapbuild.py build /path/to/project default debug
python3 src/skills/ohhap/hapbuild.py build /path/to/project default release
```

#### 签名 HAP

```bash
# 使用 release profile 签名（默认）
python3 src/skills/ohhap/hapbuild.py sign <project_dir>

# 使用 debug profile 签名
python3 src/skills/ohhap/hapbuild.py sign <project_dir> debug

# 使用 release profile 签名
python3 src/skills/ohhap/hapbuild.py sign <project_dir> release

# 示例
python3 src/skills/ohhap/hapbuild.py sign /path/to/project
python3 src/skills/ohhap/hapbuild.py sign /path/to/project release
```

#### 清除签名

```bash
# 清除签名（删除 autosign 目录）
python3 src/skills/ohhap/hapbuild.py clean-sign <project_dir>

# 示例
python3 src/skills/ohhap/hapbuild.py clean-sign /path/to/project
```

### 对话方式

- "编译 OpenHarmony 项目 /path/to/project"
- "构建 HAP 应用 /path/to/project"
- "使用 release 模式编译项目 /path/to/project"
- "对项目 /path/to/project 的 HAP 进行签名"
- "清除项目 /path/to/project 的签名"

## 工作流程

1. **环境检查**
   - 检查 `HOS_CLT_PATH` 和 `OHOS_SDK_PATH` 环境变量
   - 检查 Node.js 版本
   - 检查 Hvigor 版本
   - 读取 Command Line Tools 版本信息（从 `version.txt`）
   - 读取 SDK 版本信息（从 `daily_build.log`）

2. **版本验证**
   - 解析项目的 `build-profile.json5` 配置文件
   - 提取 `targetSdkVersion` 和 `compatibleSdkVersion`
   - 验证 SDK 版本与项目配置的一致性
   - 检查 SDK 中是否存在项目所需的 API 级别

3. **执行构建**
   - 使用 `node $HOS_CLT_PATH/hvigor/bin/hvigorw.js` 替代项目内的 `hvigorw`
   - 执行 `node hvigorw.js clean --no-daemon` 清理项目
   - 执行 `node hvigorw.js --mode module -p product=default assembleHap --analyze=normal --parallel --incremental --daemon` 构建主 HAP
   - 单元测试 HAP：`node hvigorw.js --mode module -p module=entry@ohosTest -p isOhosTest=true -p product=default -p buildMode=test assembleHap --analyze=normal --parallel --incremental --daemon`
   - 自动检查生成的 HAP 文件

4. **HAP 签名流程**（8 步，与下文「HAP 签名功能说明」一致；Windows / Linux 相同）
   - 步骤 1: 在工程根目录创建 `autosign` 目录（已存在则清空）
   - 步骤 2: 拷贝证书与工具到 `autosign`（证书来自 `OHOS_HAPSIGNER_RESULT` 等；工具来自 SDK 解析到的 toolchains/lib）
   - 步骤 3: 修改模板 JSON 中的 `bundle-name`（从 `AppScope/app.json5` 读取）
   - 步骤 4: 必要时 `keytool` 删除工作副本 p12 内旧 `oh-app1-key-v1`，再 `generate-keypair`（或别名已存在则跳过）
   - 步骤 5: `generate-app-cert`
   - 步骤 6: `sign-profile`（release / debug 别名与 pem 不同）
   - 步骤 7: `sign-app`，已签名 HAP 与 `*-unsigned.hap` 同目录，文件名 `unsigned` → `signed`
   - 步骤 8: `verify-app`

## 版本信息解析

### Command Line Tools 版本文件格式

`$HOS_CLT_PATH/version.txt` 文件格式：
```
# ======================
# Command Line Tools(linux-x64)
# Version: 6.0.1.260
# ======================
...
hvigor 6.21.2
ohpm 6.0.1
```

### SDK 版本文件格式

`$OHOS_SDK_PATH/daily_build.log` 文件包含：
```
'versionName': 'OpenHarmony_6.0.0.47'
```

### 项目配置文件格式

`build-profile.json5` 文件包含：
```json5
{
  "app": {
    "products": [
      {
        "targetSdkVersion": "6.0.0(20)",
        "compatibleSdkVersion": "6.0.0(20)"
      }
    ]
  }
}
```

其中 `(20)` 表示 API 级别；**`compileSdkVersion` / `targetSdkVersion` 也可直接写数字 `20`**（与 `hapbuild.py` 解析一致）。SDK 中对应 `.../20/` 或 `openharmony/20/` 等布局依安装而定。

## 示例输出

```
================================================================================
检查编译环境...
================================================================================
✓ HarmonyOS Command Line Tools 路径: <你的 Command Line Tools 目录>
  SDK名称: Command Line Tools
  运行系统: linux-x64
  版本: 6.0.1.260
  Hvigor版本: 6.21.2
  OHPM版本: 6.0.1
✓ OpenHarmony SDK 路径: <你的 ohos-sdk 目录>
  SDK版本: OpenHarmony_6.0.0.47
✓ Node.js 版本: v18.20.1 (符合要求)
✓ Hvigor 版本: 6.21.2 (符合要求)

================================================================================
验证版本一致性...
================================================================================
项目配置:
  targetSdkVersion: 6.0.0(20)
  compatibleSdkVersion: 6.0.0(20)
  API级别: 20
✓ SDK 主版本一致: 6.0
✓ SDK 中存在 API 20

================================================================================
开始构建 HAP...
================================================================================
工作目录: /path/to/project

执行清理...
命令: hvigorw clean --no-daemon

执行构建...
命令: hvigorw assembleHap --mode module -p product=default -p buildMode=debug --no-daemon

✓ HAP 构建成功！
```

## HAP 签名功能说明（与 `hapbuild.py` 中 `sign_hap` 一致）

### 签名流程（8 步）

1. **创建 `autosign` 目录**：在项目根目录创建（若已存在会先清空）
2. **拷贝证书**：自 **`OHOS_HAPSIGNER_RESULT`**（或自动发现的 `~/ohos/.../result`）拷贝 `OpenHarmony.p12`、`rootCA.cer`、`subCA.cer` 及当前模式所需 profile **`.pem`**
3. **拷贝工具**：自 SDK 解析到的目录拷贝 `hap-sign-tool.jar` 等（**Linux：`linux/toolchains/lib`；Windows：常为 `<API>/toolchains/lib`**）
4. **拷贝模板**：自 **`OHOS_HAPSIGNER_AUTOSIGN`** 或证书目录的上一级 / 与证书同目录（合并 layout）拷贝 `UnsgnedDebugProfileTemplate.json` / `UnsgnedReleasedProfileTemplate.json`
5. **改模板**：从 `AppScope/app.json5` 读取 `bundleName` 写入模板
6. **生成应用密钥与证书**：必要时 **`keytool -delete`** 去掉工作副本 p12 内旧的 `oh-app1-key-v1` 后，再 `generate-keypair` → `generate-app-cert`
7. **`sign-profile` → `sign-app`**：未签名 HAP 文件名中的 `unsigned` 替换为 `signed`，**输出在与未签名 HAP 同一 `outputs` 目录**
8. **`verify-app`**：校验签名后的 HAP

### 产物位置

- **已签名 HAP**（典型）：`<module>/build/default/outputs/default/*-signed.hap`（例如 `entry-default-signed.hap`），与 `*-unsigned.hap` 同目录
- **中间文件**：`<project_dir>/autosign/`（`app1.cer`、`app1-profile.p7b`、临时 p12 副本等）

### 签名要求

- 已执行 **build** 生成带 **`unsigned`** 的 HAP
- **`OHOS_SDK_PATH` 或 `DEVECO_SDK_HOME`**、`java` 可用；证书目录见上文 **`OHOS_HAPSIGNER_RESULT`**
- **`AppScope/app.json5`** 中含有效 **`bundleName`**

### 清除签名

使用 `clean-sign` 命令可以删除 `autosign` 目录，清除所有签名相关的临时文件。

## 脚本文件

- `hapbuild.py`: HAP 构建和签名主脚本（文件头含与 **SKILL.md** 对齐的摘要说明）
- `crosscompile.py`: 交叉编译脚本（待实现）
- 仓库级 **`src/skills/HOWTOSKILLS.md` §4.4**：ohhap 构建/签名环境变量、**Linux / Windows PowerShell** 示例与产物路径速查（与本文档互为补充）

## 注意事项

1. 确保在项目根目录中运行脚本，或者确保项目目录包含 `hvigorw` 脚本
2. 环境变量必须在运行前正确设置
3. 版本不一致时会显示警告，但构建仍会继续
4. 构建过程可能需要较长时间，请耐心等待
5. 签名需要 **Java**；若需自动清理 p12 内旧 **`oh-app1-key-v1`**，请保证 **`keytool`** 可用（与 `java` 同属一个 JDK/JRE 时最省事）
6. 脚本中 keystore 默认口令为 **`123456`**（与 OpenHarmony 预置调试链一致）；生产环境请改用自有证书与口令并自行调整脚本或流程