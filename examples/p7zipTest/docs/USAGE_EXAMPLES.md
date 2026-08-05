# P7ZIP 使用示例

## API 文档

### Native C++ API 总览

项目提供以下 NAPI 接口：

```cpp
// 压缩相关（napi_compress_async.cpp）
napi_value CompressAsync(napi_env env, napi_callback_info info);
napi_value CancelCompress(napi_env env, napi_callback_info info);

// 解压相关（napi_decompress_async.cpp）
napi_value DecompressFileAsync(napi_env env, napi_callback_info info);
napi_value CancelDecompress(napi_env env, napi_callback_info info);
```

详细实现参见：

- [napi_compress_async.cpp](../entry/src/main/cpp/wrapper/napi/napi_compress_async.cpp)
- [napi_decompress_async.cpp](../entry/src/main/cpp/wrapper/napi/napi_decompress_async.cpp)
- [napi_init.cpp](../entry/src/main/cpp/wrapper/napi/napi_init.cpp)

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

## 使用示例

### ArkTS API 使用

### 压缩文件示例

```typescript
import testNapi from 'libentry.so';

// 基本压缩
const ctrl = testNapi.compress(
  ['/data/storage/el2/base/haps/entry/files/test.txt'],
  '/data/storage/el2/base/haps/entry/files/output.7z',
  '7z',
  (progress) => {
    console.log(`进度: ${progress.percentage}%`);
    console.log(`当前文件: ${progress.currentFile}`);
    console.log(`已处理: ${progress.processed}/${progress.total} 字节`);
  }
);

// 等待压缩完成
ctrl.promise.then(result => {
  if (result.success) {
    console.log('压缩成功！');
    console.log(`格式: ${result.format}`);
    console.log(`原始大小: ${result.originalSize} 字节`);
    console.log(`压缩后大小: ${result.compressedSize} 字节`);
    console.log(`压缩率: ${result.compressionRatio}%`);
    console.log(`文件数: ${result.fileCount}`);
  } else {
    console.error(`压缩失败: ${result.message}`);
  }
});

// 取消压缩（可选）
// setTimeout(() => {
//   const cancelled = testNapi.cancelCompress(ctrl.taskId);
//   console.log(cancelled ? '取消成功' : '任务已完成');
// }, 1000);
```

### 压缩多个文件和文件夹

```typescript
import testNapi from 'libentry.so';

// 混合压缩文件和文件夹
const ctrl = testNapi.compress(
  [
    '/data/storage/el2/base/haps/entry/files/file1.txt',
    '/data/storage/el2/base/haps/entry/files/folder1',
    '/data/storage/el2/base/haps/entry/files/file2.jpg'
  ],
  '/data/storage/el2/base/haps/entry/files/archive.zip',
  'zip',
  (progress) => {
    console.log(`${progress.percentage}% - ${progress.currentFile}`);
  }
);

const result = await ctrl.promise;
console.log(result.success ? '✅ 压缩成功' : `❌ ${result.message}`);
```

### 解压文件示例

```typescript
import testNapi from 'libentry.so';

// 解压文件
const ctrl = testNapi.decompressFile(
  '/data/storage/el2/base/haps/entry/files/archive.7z',
  '/data/storage/el2/base/haps/entry/files/extracted',
  (progress) => {
    console.log(`进度: ${progress.percentage}%`);
    console.log(`当前文件: ${progress.currentFile}`);
    console.log(`已完成: ${progress.filesCompleted}/${progress.totalFiles} 文件`);
  }
);

// 等待解压完成
ctrl.promise.then(result => {
  if (result.success) {
    console.log('解压成功！');
    console.log(`格式: ${result.format}`);
    console.log(`文件列表: ${result.files?.join(', ')}`);
  } else {
    console.error(`解压失败: ${result.message} (错误码: ${result.errorCode})`);
  }
});

// 取消解压（可选）
// setTimeout(() => {
//   const cancelled = testNapi.cancelDecompress(ctrl.taskId);
//   console.log(cancelled ? '取消成功' : '任务已完成');
// }, 1000);
```
