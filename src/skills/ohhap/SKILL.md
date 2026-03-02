---
name: ohbuild
description: "build ohos acts project."
author: "Created by user"
created: "2026-01-20"
version: "1.0.0"
---

# OpenHarmony HAP 构建工具

## 功能描述

这个 skill 提供了 OpenHarmony HAP 应用的构建和签名功能，包括：

1. **环境检查**：自动检查编译所需的环境配置
2. **版本验证**：验证 SDK 版本与项目配置的一致性
3. **HAP 构建**：执行 HAP 应用的编译
4. **HAP 签名**：对编译生成的 HAP 文件进行签名
5. **清除签名**：清除签名相关的临时文件

## 环境要求

### 必需的环境变量

- `HOS_CLT_PATH`: HarmonyOS Command Line Tools 路径
  - 例如: `/root/toolchains/command-line-tools`
  - 需要包含 `version.txt` 文件

- `OHOS_SDK_PATH`: OpenHarmony SDK 路径
  - 例如: `/root/toolchains/ohos-sdk-6.0-release`
  - 需要包含 `daily_build.log` 文件

### 工具版本要求

- **Node.js**: v18.20.1
- **Hvigor**: 6.21.2
- **项目目录**: 需要包含 `build-profile.json5` 配置文件

## 使用方法

### 命令行方式

#### 构建 HAP

```bash
# 基本用法（使用默认 product 和 debug 模式）
python3 .claude/skills/ohhap/hapbuild.py build <project_dir>

# 向后兼容：直接使用项目目录（自动识别为 build 命令）
python3 .claude/skills/ohhap/hapbuild.py <project_dir>

# 指定 product 和 build_mode
python3 .claude/skills/ohhap/hapbuild.py build <project_dir> <product> <build_mode>

# 示例
python3 .claude/skills/ohhap/hapbuild.py build /path/to/project
python3 .claude/skills/ohhap/hapbuild.py build /path/to/project default debug
python3 .claude/skills/ohhap/hapbuild.py build /path/to/project default release
```

#### 签名 HAP

```bash
# 使用 release profile 签名（默认）
python3 .claude/skills/ohhap/hapbuild.py sign <project_dir>

# 使用 debug profile 签名
python3 .claude/skills/ohhap/hapbuild.py sign <project_dir> debug

# 使用 release profile 签名
python3 .claude/skills/ohhap/hapbuild.py sign <project_dir> release

# 示例
python3 .claude/skills/ohhap/hapbuild.py sign /path/to/project
python3 .claude/skills/ohhap/hapbuild.py sign /path/to/project release
```

#### 清除签名

```bash
# 清除签名（删除 autosign 目录）
python3 .claude/skills/ohhap/hapbuild.py clean-sign <project_dir>

# 示例
python3 .claude/skills/ohhap/hapbuild.py clean-sign /path/to/project
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

4. **HAP 签名流程**（8 步）
   - 步骤 1: 在工程根目录创建 `autosign` 目录
   - 步骤 2: 拷贝证书文件和相关工具文件到 `autosign` 目录
   - 步骤 3: 修改模板 JSON 文件中的 `bundle-name`（从 `app.json5` 读取）
   - 步骤 4: 生成应用签名证书密钥对
   - 步骤 5: 生成应用签名证书
   - 步骤 6: 对 profile 文件进行签名
   - 步骤 7: 对应用包进行签名
   - 步骤 8: 验证应用包签名

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

其中 `(20)` 表示 API 级别，对应 SDK 中的 `sdk/openharmony/20/` 目录。

## 示例输出

```
================================================================================
检查编译环境...
================================================================================
✓ HarmonyOS Command Line Tools 路径: /root/toolchains/command-line-tools
  SDK名称: Command Line Tools
  运行系统: linux-x64
  版本: 6.0.1.260
  Hvigor版本: 6.21.2
  OHPM版本: 6.0.1
✓ OpenHarmony SDK 路径: /root/toolchains/ohos-sdk-6.0-release
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

## HAP 签名功能说明

### 签名流程

签名功能会自动执行以下步骤：

1. **创建 autosign 目录**：在项目根目录创建 `autosign` 目录用于存放签名相关文件
2. **拷贝证书文件**：从 `~/ohos/60release/src/developtools/hapsigner/autosign/result/` 拷贝证书文件
3. **拷贝工具文件**：从 `$OHOS_SDK_PATH/linux/toolchains/lib/` 拷贝签名工具
4. **修改模板文件**：自动从 `AppScope/app.json5` 读取 `bundleName` 并更新到模板文件
5. **生成密钥对**：使用 `hap-sign-tool.jar` 生成应用签名证书密钥对
6. **生成证书**：生成应用签名证书链
7. **签名 profile**：对 profile 文件进行签名
8. **签名 HAP**：对未签名的 HAP 文件进行签名
9. **验证签名**：验证签名后的 HAP 文件

### 签名文件位置

- **签名的 HAP 文件**: `<project_dir>/autosign/app1-signed.hap`
- **证书文件**: `<project_dir>/autosign/app1.cer`
- **Profile 文件**: `<project_dir>/autosign/app1-profile.p7b`

### 签名要求

- 需要先编译项目生成未签名的 HAP 文件
- 需要 `OHOS_SDK_PATH` 环境变量指向正确的 SDK 路径
- 需要证书文件位于 `~/ohos/60release/src/developtools/hapsigner/autosign/result/`
- 项目需要包含 `AppScope/app.json5` 文件，且包含有效的 `bundleName`

### 清除签名

使用 `clean-sign` 命令可以删除 `autosign` 目录，清除所有签名相关的临时文件。

## 脚本文件

- `hapbuild.py`: HAP 构建和签名主脚本
- `crosscompile.py`: 交叉编译脚本（待实现）

## 注意事项

1. 确保在项目根目录中运行脚本，或者确保项目目录包含 `hvigorw` 脚本
2. 环境变量必须在运行前正确设置
3. 版本不一致时会显示警告，但构建仍会继续
4. 构建过程可能需要较长时间，请耐心等待
5. 签名功能需要 Java 环境，确保 `java` 命令可用
6. 签名过程中会使用默认密码 `123456`，生产环境请使用自己的证书和密码