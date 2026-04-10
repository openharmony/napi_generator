# P7Zip OpenHarmony 压缩/解压测试工具

一个基于 p7zip 库的 OpenHarmony 原生压缩解压应用，提供完整的压缩包创建、解压、格式检测等功能。

## 项目简介

本项目是一个功能完整的 OpenHarmony 应用，集成了 p7zip 压缩库，提供了强大的文件压缩和解压功能。项目包含 C++ 原生层实现和 ArkTS UI 界面，展示了如何在 OpenHarmony 平台上使用 Native 模块进行文件压缩/解压处理操作。

### 主要特性

**压缩功能**
- 支持 7z 和 ZIP 格式压缩
- 可配置压缩级别 (0-9)
- 支持单文件、多文件、文件夹压缩
- 实时进度反馈
- 可取消的异步操作
- 自动计算压缩率

**解压功能**
- 自动检测压缩格式（7z, ZIP, TAR, GZ, BZ2, XZ, LZMA 等）
- 支持密码保护的压缩包
- 提取所有文件或单个文件
- 获取压缩包信息（文件列表、大小等）
- 实时进度和文件名反馈
- 可取消的异步操作

## 项目架构

```
p7zipTest/
├── AppScope/                          # 应用级配置
│   └── app.json5                      # 应用基本信息
├── docs/                              # 项目文档
│   ├── USAGE_EXAMPLES.md              # ArkTS/C++ 调用示例
│   ├── BUILD_AND_USAGE_GUIDE.md       # 构建与使用指南
│   ├── DEVELOPMENT_GUIDE.md           # 开发维护指南
│   └── ERROR_CODES_REFERENCE.md       # 错误码文档
├── entry/                             # 主模块
│   ├── build-profile.json5            # Native 构建入口与参数
│   ├── src/main/
│   │   ├── cpp/                       # C++ 原生代码
│   │   │   ├── thirdparty/
│   │   │   │   ├── source/            # 下载并保留的三方源码
│   │   │   │   └── patch/             # 合并后的 OHOS 补丁、基线与脚本
│   │   │   │       └── scripts/       # patch + prebuild + logging 脚本
│   │   │   ├── wrapper/               # napi包裹层代码
│   │   │   │   ├── common/            # 通用工具
│   │   │   │   ├── compress/          # 压缩模块
│   │   │   │   ├── decompress/        # 解压模块
│   │   │   │   └── napi/              # Node-API 接口
│   │   │   └── CMakeLists.txt         # 构建总入口（prebuild/apply/build + entry）
│   │   ├── ets/                       # ArkTS 代码
│   │   │   ├── pages/                 # UI 页面
│   │   │   │   ├── MainMenu.ets       # 主菜单
│   │   │   │   ├── CompressTestPage.ets    # 压缩测试页面
│   │   │   │   └── DecompressTestPage.ets  # 解压测试页面
│   │   │   └── utils/                 # 工具类
│   │   │       ├── Compress.ets       # 压缩 API 封装
│   │   │       ├── Unzip.ets          # 解压 API 封装
│   │   │       └── TestFileGenerator.ets # 测试文件生成器
│   │   └── module.json5               # 模块配置
│   └── libs/                          # 构建时自动生成的三方库产物
│       └── (历史目录，当前流程不依赖)
└── README.md                          # 项目总览
```

当前 `lib7z.so` 产物路径为：

- `entry/src/main/cpp/thirdparty/source/arm64-v8a/lib7z.so`
- `entry/src/main/cpp/thirdparty/source/armeabi-v7a/lib7z.so`
- `entry/src/main/cpp/thirdparty/source/x86_64/lib7z.so`

## 支持的格式

| 格式 | 压缩 | 解压 | 说明 |
|------|------|------|------|
| 7z   | 是   | 是   | 高压缩率，LZMA/LZMA2 |
| ZIP  | 是   | 是   | 通用格式 |
| TAR  | 否   | 是   | 归档格式 |
| GZ   | 否   | 是   | gzip 压缩 |
| BZ2  | 否   | 是   | bzip2 压缩 |
| XZ   | 否   | 是   | xz 压缩 |
| LZMA | 否   | 是   | LZMA 压缩 |
| TAR.GZ | 否 | 是   | tar+gzip |
| TAR.BZ2 | 否 | 是  | tar+bzip2 |

## 快速开始

### 构建（Windows）

#### 环境准备

- DevEco Studio：5.0.2 Release
- OpenHarmony Native SDK：API 18+
- **宿主工具（本机）**：用于打补丁与编译 p7zip 源码，需在工程内配置完整路径（见下），不依赖 DevEco 传入的精简 `PATH`。

1. 编辑 `entry/src/main/cpp/CMakeLists.txt`（这是唯一需要用户填写路径的地方）。
2. 填写以下变量的**完整路径**：
   - `P7ZIP_HOST_MAKE`：GNU `make.exe`
   - `P7ZIP_HOST_GIT`：`git.exe`
   - `P7ZIP_HOST_PATCH`：GNU `patch.exe`
   - `P7ZIP_HOST_SH`（可选，Windows 建议填）：`sh.exe`；留空则使用 `cmd.exe`。
3. 当前环境的完整示例（可直接对照）：
   - `P7ZIP_HOST_MAKE = C:/software/MinGW-w64/w64devkit/bin/make.exe`
   - `P7ZIP_HOST_GIT = C:/software/Git/cmd/git.exe`
   - `P7ZIP_HOST_PATCH = C:/software/Git/usr/bin/patch.exe`
   - `P7ZIP_HOST_SH = C:/software/Git/usr/bin/sh.exe`

#### 配置工程

编辑 `entry/build-profile.json5`，确认 `externalNativeOptions`（可按需保留 `P7ZIP_PATCH_STRICT` 等 CMake 变量；**不再**用 `arguments` 传 `make` 路径）：

```json5
"externalNativeOptions": {
  "path": "./src/main/cpp/CMakeLists.txt",
  "arguments": "-DP7ZIP_PATCH_STRICT=ON",
  "cppFlags": "",
  "abiFilters": [
    "arm64-v8a",
    "armeabi-v7a",
    "x86_64"
  ]
}
```

配置要点：

- 宿主 `make` / `git` / `patch` 路径**仅**在 `entry/src/main/cpp/CMakeLists.txt` 中配置
- 修改 `arguments` 或 `CMakeLists.txt` 中路径变量后建议执行 `clean + rebuild`
- 默认 `P7ZIP_REBUILD_IF_EXISTS=OFF`（已有 `lib7z.so` 时跳过重建）
- 如需每次强制重建可加：`-DP7ZIP_REBUILD_IF_EXISTS=ON`
- 头文件直接使用 `entry/src/main/cpp/thirdparty/source/p7zip-<commit>/CPP`，不再依赖 `entry/libs/include/p7zip` 同步流程
- 下载得到的 p7zip 源码会保留在 `entry/src/main/cpp/thirdparty/source/`

在 DevEco Studio 执行 `Build > Build Hap(s)/APP(s) > Build Hap(s)`，会自动完成 p7zip 下载、补丁应用和 `lib7z.so/libentry.so` 构建。

构建链路（简版）：

1. DevEco 从 `entry/build-profile.json5` 进入 `entry/src/main/cpp/CMakeLists.txt`
2. `include(prebuild_lib7z.cmake)` 在**配置阶段（configure）**触发预构建脚本
3. 预构建脚本下载源码、应用 `ohos-all.patch`、调用上游 `makefile.gcc` 产出 `lib7z.so`
4. `entry` 目标链接 `lib7z.so`、`libace_napi.z.so`、`libhilog_ndk.z.so`
5. **构建阶段（build）**通过 `add_custom_command` + `add_dependencies` 执行兜底构建规则

构建后确认产物：`entry/src/main/cpp/thirdparty/source/arm64-v8a/lib7z.so`、`entry/src/main/cpp/thirdparty/source/armeabi-v7a/lib7z.so`、`entry/src/main/cpp/thirdparty/source/x86_64/lib7z.so`。

### 安装预编译包

如果已有编译好的 HAP 包：

```bash
hdc install entry-default-signed.hap
```

## 使用示例与 API 文档

详细请参见：[使用示例](docs/USAGE_EXAMPLES.md)

## 错误码

完整的错误码列表请参见：[错误码](docs/ERROR_CODES_REFERENCE.md)

常见错误码：

| 错误码 | 名称                | 说明           |
| ------ | ------------------- | -------------- |
| 0      | SUCCESS             | 操作成功       |
| 1001   | INVALID_PARAMETER   | 无效参数       |
| 1002   | OPERATION_CANCELLED | 操作已取消     |
| 1004   | UNSUPPORTED_FORMAT  | 不支持的格式   |
| 2000   | COMPRESS_FAILED     | 压缩失败       |
| 3000   | DECOMPRESS_FAILED   | 解压失败       |
| 4001   | FILE_NOT_FOUND      | 文件不存在     |
| 4003   | FILE_ACCESS_DENIED  | 文件访问被拒绝 |

## 测试

### 使用内置测试页面

1. **启动应用**
   - 运行应用后进入主菜单

2. **压缩测试**
   - 进入"压缩测试"页面
   - 测试单文件/多文件/文件夹压缩
   - 测试 7z 和 ZIP 格式

3. **解压测试**
   - 进入"解压测试"页面
   - 测试各种格式的解压

## 开发指南

详细请参见：[开发指南](docs/DEVELOPMENT_GUIDE.md)

## 已知问题

- [ ] 部分 RAR 格式支持有限（p7zip 库限制）
- [ ] 超大文件（>2GB）在某些设备上可能内存不足
- [ ] 某些特殊字符的文件名可能出现编码问题

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue

---

**注意**: 本项目仅用于学习和测试目的。在生产环境使用前请进行充分测试。

