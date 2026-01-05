# P7Zip OpenHarmony 压缩/解压测试工具

一个基于 p7zip 库的 OpenHarmony 原生压缩解压应用，提供完整的压缩包创建、解压、格式检测等功能。

## 📋 项目简介

本项目是一个功能完整的 OpenHarmony 应用，集成了 p7zip 压缩库，提供了强大的文件压缩和解压功能。项目包含 C++ 原生层实现和 ArkTS UI 界面，展示了如何在 OpenHarmony 平台上使用 Native 模块进行高性能的文件处理操作。

### 主要特性

✨ **压缩功能**
- 支持 7z 和 ZIP 格式压缩
- 可配置压缩级别 (0-9)
- 支持单文件、多文件、文件夹压缩
- 实时进度反馈
- 可取消的异步操作
- 自动计算压缩率

🔓 **解压功能**
- 自动检测压缩格式（7z, ZIP, TAR, GZ, BZ2, XZ, LZMA 等）
- 支持密码保护的压缩包
- 提取所有文件或单个文件
- 获取压缩包信息（文件列表、大小等）
- 实时进度和文件名反馈
- 可取消的异步操作

🛠 **技术特性**
- C++ Native 实现，高性能
- 完整的错误码系统（详见 [错误码参考](https://gitcode.com/openharmony/napi_generator/examples/p7zipTest/ERROR_CODES_REFERENCE.md)）
- 线程安全的异步操作
- UTF-8/UTF-16 编码支持
- 内存优化和资源管理
- CRC 校验支持

## 🏗 项目架构

```
p7zipTest/
├── AppScope/                          # 应用级配置
│   └── app.json5                      # 应用基本信息
├── entry/                             # 主模块
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
│   │   │   └──  CMakeLists.txt         # 构建配置
│   │   │   
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
│   └── libs/                          # 预编译库
│       ├── arm64-v8a/lib7z.so
│       ├── armeabi-v7a/lib7z.so
│       ├── x86_64/lib7z.so
│       └── include/                   # p7zip 头文件
└── ERROR_CODES_REFERENCE.md           # 错误码文档
└── README.md                          # 本文件
```

## 📦 支持的格式

| 格式 | 压缩 | 解压 | 说明 |
|------|------|------|------|
| 7z   | ✅   | ✅   | 高压缩率，LZMA/LZMA2 |
| ZIP  | ✅   | ✅   | 通用格式 |
| TAR  | ❌   | ✅   | 归档格式 |
| GZ   | ❌   | ✅   | gzip 压缩 |
| BZ2  | ❌   | ✅   | bzip2 压缩 |
| XZ   | ❌   | ✅   | xz 压缩 |
| LZMA | ❌   | ✅   | LZMA 压缩 |
| TAR.GZ | ❌ | ✅   | tar+gzip |
| TAR.BZ2 | ❌ | ✅  | tar+bzip2 |

## 🚀 快速开始

### 环境要求

- OpenHarmony SDK: API 18 或更高
- DevEco Studio: DevEco Studio 5.0.2 Release
- 操作系统: Windows

### 构建步骤

1. **克隆项目**
   ```bash
   git clone git@gitcode.com:openharmony/napi_generator.git 
   ```
   
2. **使用 DevEco Studio 打开项目**
   
- File → Open → napi_generator/examples/p7zipTest
  
3. **配置 SDK**
   
- 确保已安装 OpenHarmony SDK API 18+
  
4. **编译三方库**

   [p7zip三方库编译文档](https://gitcode.com/openharmony/napi_generator/examples/p7zipTest/OHOS_BUILD_STEP_BY_STEP.md)

4. **构建项目**
   
- Build → Build Hap(s)/APP(s)
  
5. **运行**
   - 连接 OpenHarmony 设备
   - Run → Run 'entry'

### 安装预编译包

如果已有编译好的 HAP 包：

```bash
hdc install entry-default-signed.hap
```

## 💻 使用示例

### ArkTS API 使用

#### 压缩文件

```typescript
import { compressItems, CompressOptions, CompressResult } from '../utils/Compress';

// 压缩单个文件
const controller = await compressItems(
  ['/path/to/file.txt'],           // 输入文件列表
  '/path/to/output.7z',             // 输出文件
  { format: '7z', compressionLevel: 5 }, // 选项
  (progress) => {
    console.log(`进度: ${progress.percentage}%`);
    console.log(`当前文件: ${progress.currentFile}`);
  }
);

// 等待完成
const result: CompressResult = await controller.promise;
if (result.success) {
  console.log('压缩成功！');
  console.log(`压缩率: ${result.compressionRatio}%`);
} else {
  console.error(`压缩失败: ${result.message}`);
}

// 取消操作（如需要）
// controller.cancel();
```

#### 解压文件

```typescript
import { Unzip, DecompressResult } from '../utils/Unzip';

// 创建解压实例
const unzip = new Unzip('/path/to/archive.7z', {
  overwrite: true,
  password: 'optional_password'  // 如果有密码
});

// 监听进度
unzip.on('progress', (progress) => {
  console.log(`进度: ${progress.percentage}%`);
  console.log(`${progress.filesCompleted}/${progress.totalFiles} 文件`);
});

// 执行解压
const result: DecompressResult = await unzip.decompress('/output/dir');
if (result.success) {
  console.log('解压成功！');
  console.log(`格式: ${result.format}`);
  console.log(`文件: ${result.files?.join(', ')}`);
} else {
  console.error(`解压失败: ${result.message} (错误码: ${result.errorCode})`);
}

// 取消解压（如需要）
// unzip.cancel();
```

#### 获取压缩包信息

```typescript
// 获取压缩包信息（不解压）
const info = await unzip.getArchiveInfo();
console.log(`格式: ${info.format}`);
console.log(`文件数: ${info.fileCount}`);
console.log(`总大小: ${info.totalSize} 字节`);

info.files.forEach(file => {
  console.log(`- ${file.name}: ${file.size} 字节`);
});
```

### Native API 使用

#### C++ 接口

```cpp
// 注册的 NAPI 函数
// 声明异步解压函数（在 napi_init_async.cpp 中实现）
napi_value DecompressFileAsync(napi_env env, napi_callback_info info);
napi_value CancelDecompress(napi_env env, napi_callback_info info);  // 取消解压任务

// 声明异步压缩函数（在 napi_compress_async.cpp 中实现）
napi_value CompressAsync(napi_env env, napi_callback_info info);  // 统一压缩接口 - 支持文件+文件夹混合
napi_value CancelCompress(napi_env env, napi_callback_info info);  // 取消压缩任务
```

详细实现参见：
- [napi_compress_async.cpp](entry/src/main/cpp/napi/napi_compress_async.cpp)
- [napi_decompress_async.cpp](entry/src/main/cpp/napi/napi_decompress_async.cpp)

## 📖 API 文档

### CompressOptions

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| format | `"7z" \| "zip"` | - | 压缩格式 |
| compressionLevel | `number` | 5 | 压缩级别 (0-9) |

### UnzipOptions

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| overwrite | `boolean` | false | 是否覆盖已存在的文件 |
| password | `string` | undefined | 解压密码 |

### CompressProgress

| 字段 | 类型 | 说明 |
|------|------|------|
| processed | `number` | 已处理字节数 |
| total | `number` | 总字节数 |
| percentage | `number` | 进度百分比 (0-100) |
| currentFile | `string` | 当前处理的文件名 |

### DecompressProgress

| 字段 | 类型 | 说明 |
|------|------|------|
| processed | `number` | 已处理字节数 |
| total | `number` | 总字节数 |
| percentage | `number` | 进度百分比 (0-100) |
| currentFile | `string` | 当前处理的文件名 |
| filesCompleted | `number` | 已完成文件数 |
| totalFiles | `number` | 总文件数 |

## ❌ 错误码

完整的错误码列表请参见：[ERROR_CODES_REFERENCE.md](https://gitcode.com/openharmony/napi_generator/examples/p7zipTest/ERROR_CODES_REFERENCE.md)

常见错误码：

| 错误码 | 名称 | 说明 |
|--------|------|------|
| 0 | SUCCESS | 操作成功 |
| 1001 | INVALID_PARAMETER | 无效参数 |
| 1002 | OPERATION_CANCELLED | 操作已取消 |
| 1004 | UNSUPPORTED_FORMAT | 不支持的格式 |
| 2000 | COMPRESS_FAILED | 压缩失败 |
| 3000 | DECOMPRESS_FAILED | 解压失败 |
| 3004 | DECOMPRESS_PASSWORD_REQUIRED | 需要密码 |
| 3005 | DECOMPRESS_WRONG_PASSWORD | 密码错误 |
| 4001 | FILE_NOT_FOUND | 文件不存在 |
| 4003 | FILE_ACCESS_DENIED | 文件访问被拒绝 |

## 🧪 测试

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


## 🔧 开发指南

### 添加新的压缩格式

1. 在 `FormatDetector.cpp` 中添加格式检测逻辑
2. 在 `ArchiveCompressor.cpp` 或 `ArchiveHandler.cpp` 中实现处理逻辑
3. 更新 `common.h` 中的格式常量
4. 更新 TypeScript 接口定义

### 自定义错误处理

```cpp
#include "common/ErrorCodes.h"

// 使用错误码
ErrorCode code = ErrorCode::FILE_NOT_FOUND;
std::string message = GetErrorMessage(code);
int errorNumber = static_cast<int>(code);
```

### 内存管理

项目使用 RAII 原则进行资源管理：

```cpp
// 自动资源管理
class AutoDeleteFile {
public:
    explicit AutoDeleteFile(const std::string& path) : path_(path) {}
    ~AutoDeleteFile() {
        if (!path_.empty()) {
            remove(path_.c_str());
        }
    }
private:
    std::string path_;
};
```

### 线程安全

```cpp
// 使用互斥锁保护共享资源
std::lock_guard<std::mutex> lock(taskMutex_);
// 安全访问共享数据
```

## 📝 已知问题

- [ ] 部分 RAR 格式支持有限（p7zip 库限制）
- [ ] 超大文件（>2GB）在某些设备上可能内存不足
- [ ] 某些特殊字符的文件名可能出现编码问题

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！


## 📮 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue


---

**注意**: 本项目仅用于学习和测试目的。在生产环境使用前请进行充分测试。

