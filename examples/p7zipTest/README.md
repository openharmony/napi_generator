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
│   ├── BUILD_AND_USAGE_GUIDE.md       # 编译与使用指南（自动构建流程）
│   ├── USAGE_EXAMPLES.md              # ArkTS/C++ 调用示例
│   ├── DEVELOPMENT_GUIDE.md           # 开发维护指南
│   └── ERROR_CODES_REFERENCE.md       # 错误码文档
├── entry/                             # 主模块
│   ├── build-profile.json5            # Native 构建入口与参数
│   ├── src/main/
│   │   ├── cpp/                       # C++ 原生代码
│   │   │   ├── common/                # 通用工具
│   │   │   │   ├── common.h           # 常量定义
│   │   │   │   ├── ErrorCodes.h/cpp   # 错误码系统
│   │   │   │   ├── FormatDetector.h/cpp # 格式检测器
│   │   │   │   └── LzmaUtils.h/cpp    # LZMA 工具
│   │   │   ├── compress/              # 压缩模块
│   │   │   │   └── ArchiveCompressor.h/cpp
│   │   │   ├── decompress/            # 解压模块
│   │   │   │   ├── ArchiveHandler.h/cpp
│   │   │   │   └── UnifiedDecompressor.h/cpp
│   │   │   ├── napi/                  # Node-API 接口
│   │   │   │   ├── napi_compress_async.cpp
│   │   │   │   ├── napi_decompress_async.cpp
│   │   │   │   └── napi_init.cpp
│   │   │   └── CMakeLists.txt         # 业务库构建（libentry.so）
│   │   ├── cpp_bootstrap/
│   │   │   └── CMakeLists.txt         # 预构建入口（先构建 lib7z.so，再编译 cpp）
│   │   ├── cmake/p7zip/
│   │   │   ├── patches/               # p7zip 补丁与基线 commit
│   │   │   └── scripts/               # prebuild/apply/build 等脚本
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
│       ├── arm64-v8a/lib7z.so
│       ├── armeabi-v7a/lib7z.so
│       ├── x86_64/lib7z.so
│       └── include/                   # p7zip 头文件
└── README.md                          # 项目总览
```

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

### 环境要求

- OpenHarmony SDK: API 18 或更高
- DevEco Studio: DevEco Studio 5.0.2 Release
- 操作系统: Windows
- GNU make（建议使用 w64devkit 提供的 `make.exe`）

### 构建步骤

1. **克隆项目**
   
   ```bash
   git clone git@gitcode.com:openharmony/napi_generator.git 
   ```
   
2. **使用 DevEco Studio 打开项目**
   
- File → Open → napi_generator/examples/p7zipTest
  
3. **配置 SDK**
   
- 确保已安装 OpenHarmony SDK API 18+

4. **配置 Native 构建参数**

   编辑 `entry/build-profile.json5`，确认：

   - `externalNativeOptions.path` 指向 `./src/main/cpp_bootstrap/CMakeLists.txt`
   - `externalNativeOptions.arguments` 包含 `-DP7ZIP_MAKE=<MAKE_EXE_PATH>`
   - 可选：`-DP7ZIP_MAKE_HINTS=<候选路径1;候选路径2>`
   - 默认 `P7ZIP_REBUILD_IF_EXISTS=OFF`（已有 `lib7z.so` 时跳过重建）

5. **构建项目**

   - 执行 `Build → Build Hap(s)/APP(s)`
   - 构建会自动完成：下载 p7zip、应用补丁、同步 `entry/libs/include/p7zip` 头文件、构建 `lib7z.so`、再构建 `libentry.so`
   - 头文件同步清单维护在 `entry/src/main/cmake/p7zip/scripts/header_manifest.cmake`

> 详细参数说明、环境配置与故障排查请参考：[编译构建](docs/BUILD_AND_USAGE_GUIDE.md)

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

