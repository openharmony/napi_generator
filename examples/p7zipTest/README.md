# P7Zip OpenHarmony 压缩/解压测试工具

一个基于 p7zip 库的 OpenHarmony 原生压缩解压应用，提供完整的压缩包创建、解压、格式检测等功能。

## 📋 项目简介

本项目是一个功能完整的 OpenHarmony 应用，集成了 p7zip 压缩库，提供了强大的文件压缩和解压功能。项目包含 C++ 原生层实现和 ArkTS UI 界面，展示了如何在 OpenHarmony 平台上使用 Native 模块进行文件压缩/解压处理操作。

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

   将编译好的产物拷贝到`napi_generator/examples/p7zipTest/entry/libs`下面，同时将[三方库头文件]()中的`include`文件夹拷贝到这里；最终目录结构如下：
   
   ```
   │   └── libs/                          # 预编译库
   │       ├── arm64-v8a/lib7z.so
   │       ├── armeabi-v7a/lib7z.so
   │       ├── x86_64/lib7z.so
   │       └── include/                   # p7zip 头文件
   ```

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

## 📖 API 文档

### 压缩相关 API

#### compress()

统一压缩接口 - 支持混合文件和文件夹

```typescript
compress(
  inputPaths: string[],
  outputFile: string,
  format: "7z" | "zip",
  progressCallback?: CompressProgressCallback | null
): CompressController
```

**参数**

| 参数             | 类型                               | 说明                                 |
| ---------------- | ---------------------------------- | ------------------------------------ |
| inputPaths       | `string[]`                         | 输入路径数组（可以包含文件和文件夹） |
| outputFile       | `string`                           | 输出压缩包路径                       |
| format           | `"7z" \| "zip"`                    | 压缩格式                             |
| progressCallback | `CompressProgressCallback \| null` | 可选的进度回调函数                   |

**返回值**

返回 `CompressController` 对象，包含：

- `promise`: 压缩结果的 Promise
- `taskId`: 任务 ID，用于取消操作

**示例**

```typescript
// 压缩多个文件和文件夹
const result = await compress(
  ['/path/to/file.txt', '/path/to/dir', '/path/to/file2.txt'],
  '/output/archive.zip',
  'zip',
  (progress) => console.log(`${progress.percentage}%`)
);
```

#### cancelCompress()

取消正在进行的压缩任务

```typescript
cancelCompress(taskId: number): boolean
```

**参数**

| 参数   | 类型     | 说明                                 |
| ------ | -------- | ------------------------------------ |
| taskId | `number` | 任务 ID（从 compress 返回的 taskId） |

**返回值**

返回 `boolean`：

- `true`: 成功发送取消请求
- `false`: 任务不存在或已完成

**示例**

```typescript
const ctrl = compress(['/bigdir'], '/output.zip', 'zip');

// 几秒后取消
setTimeout(() => {
  const cancelled = cancelCompress(ctrl.taskId);
  console.log(cancelled ? '取消成功' : '任务已完成');
}, 3000);
```

#### CompressController

压缩任务控制器接口

| 字段    | 类型                      | 说明                  |
| ------- | ------------------------- | --------------------- |
| promise | `Promise<CompressResult>` | 压缩结果的 Promise    |
| taskId  | `number`                  | 任务 ID，用于取消操作 |

**CompressResult 结构**

| 字段             | 类型       | 说明               |
| ---------------- | ---------- | ------------------ |
| success          | `boolean`  | 是否成功           |
| message          | `string`   | 结果消息           |
| format           | `string`   | 压缩格式           |
| cancelled        | `boolean?` | 是否被取消         |
| originalSize     | `number?`  | 原始大小（字节）   |
| compressedSize   | `number?`  | 压缩后大小（字节） |
| compressionRatio | `number?`  | 压缩率             |
| fileCount        | `number?`  | 文件数量           |

#### CompressProgressCallback

压缩进度回调函数类型

```typescript
type CompressProgressCallback = (progress: {
  processed: number;      // 已处理字节数
  total: number;          // 总字节数
  percentage: number;     // 进度百分比 (0-100)
  currentFile: string;    // 当前处理的文件名
}) => void;
```

### 解压相关 API

#### decompressFile()

解压文件 - 自动识别格式，支持多种压缩格式（异步，支持取消）

```typescript
decompressFile(
  inputFile: string,
  outputFile: string,
  progressCallback?: DecompressProgressCallback
): DecompressController
```

**参数**

| 参数             | 类型                          | 说明                                                         |
| ---------------- | ----------------------------- | ------------------------------------------------------------ |
| inputFile        | `string`                      | 输入压缩文件路径（支持 LZMA, GZIP, BZIP2, XZ, 7z, Zip, Tar 等） |
| outputFile       | `string`                      | 输出文件路径                                                 |
| progressCallback | `DecompressProgressCallback?` | 可选的进度回调函数                                           |

**返回值**

返回 `DecompressController` 对象（包含 taskId 和 promise）

#### cancelDecompress()

取消解压任务

```typescript
cancelDecompress(taskId: number): boolean
```

**参数**

| 参数   | 类型     | 说明    |
| ------ | -------- | ------- |
| taskId | `number` | 任务 ID |

**返回值**

返回 `boolean`：`true` 表示取消成功

#### DecompressController

解压控制器接口

| 字段    | 类型                        | 说明               |
| ------- | --------------------------- | ------------------ |
| taskId  | `number`                    | 任务 ID            |
| promise | `Promise<DecompressResult>` | 解压结果的 Promise |

**DecompressResult 结构**

| 字段      | 类型        | 说明             |
| --------- | ----------- | ---------------- |
| success   | `boolean`   | 是否成功         |
| message   | `string`    | 结果消息         |
| format    | `string?`   | 压缩格式         |
| files     | `string[]?` | 解压出的文件列表 |
| errorCode | `number?`   | 错误码           |
| cancelled | `boolean?`  | 是否被取消       |

#### DecompressProgressCallback

解压进度回调函数类型

```typescript
type DecompressProgressCallback = (progress: {
  processed: number;      // 已处理字节数
  total: number;          // 总字节数
  percentage: number;     // 进度百分比 (0-100)
  currentFile: string;    // 当前处理的文件名
  filesCompleted: number; // 已完成文件数
  totalFiles: number;     // 总文件数
}) => void;
```

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

