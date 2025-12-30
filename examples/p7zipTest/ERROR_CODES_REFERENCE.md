# 错误码快速参考

## 成功码

| 错误码 | 名称 | 说明 |
|--------|------|------|
| 0 | SUCCESS | 操作成功 |

## 通用错误 (1000-1999)

| 错误码 | 名称 | 说明 | 常见原因 |
|--------|------|------|----------|
| 1000 | UNKNOWN_ERROR | 未知错误 | 未分类的错误 |
| 1001 | INVALID_PARAMETER | 无效参数 | 参数为空或格式错误 |
| 1002 | OPERATION_CANCELLED | 操作已取消 | 用户主动取消 |
| 1003 | NOT_IMPLEMENTED | 功能未实现 | 调用了未实现的功能 |
| 1004 | UNSUPPORTED_FORMAT | 不支持的格式 | 压缩格式不支持 |
| 1005 | FORMAT_DETECTION_FAILED | 格式检测失败 | 无法识别文件格式 |

## 压缩错误 (2000-2999)

| 错误码 | 名称 | 说明 | 常见原因 |
|--------|------|------|----------|
| 2000 | COMPRESS_FAILED | 压缩失败 | 通用压缩错误 |
| 2001 | COMPRESS_CREATE_ARCHIVE_FAILED | 创建压缩包失败 | 无法创建输出文件 |
| 2002 | COMPRESS_NO_INPUT_FILES | 没有输入文件 | 输入文件列表为空 |
| 2003 | COMPRESS_INVALID_LEVEL | 无效的压缩级别 | 级别不在0-9范围内 |
| 2004 | COMPRESS_ENCODER_NOT_AVAILABLE | 编码器不可用 | 7z编码器未编译 |
| 2005 | COMPRESS_WRITE_HEADER_FAILED | 写入压缩包头失败 | IO错误 |
| 2006 | COMPRESS_DATA_ERROR | 压缩数据错误 | 数据处理异常 |

## 解压错误 (3000-3999)

| 错误码 | 名称 | 说明 | 常见原因 |
|--------|------|------|----------|
| 3000 | DECOMPRESS_FAILED | 解压失败 | 通用解压错误 |
| 3001 | DECOMPRESS_OPEN_ARCHIVE_FAILED | 打开压缩包失败 | 文件不存在或损坏 |
| 3002 | DECOMPRESS_INVALID_ARCHIVE | 无效的压缩包 | 格式不正确 |
| 3003 | DECOMPRESS_CORRUPTED_ARCHIVE | 压缩包已损坏 | 文件不完整或损坏 |
| 3004 | DECOMPRESS_PASSWORD_REQUIRED | 需要密码 | 压缩包加密 |
| 3005 | DECOMPRESS_WRONG_PASSWORD | 密码错误 | 提供的密码不正确 |
| 3006 | DECOMPRESS_EXTRACT_FAILED | 解压失败 | 提取文件失败 |
| 3007 | DECOMPRESS_CRC_ERROR | CRC校验失败 | 数据完整性错误 |
| 3008 | DECOMPRESS_UNSUPPORTED_METHOD | 不支持的压缩方法 | 压缩算法不支持 |

## 文件系统错误 (4000-4999)

### 文件错误 (4000-4099)

| 错误码 | 名称 | 说明 | errno | 解决方案 |
|--------|------|------|-------|----------|
| 4000 | FILE_NOT_FOUND | 文件不存在 | ENOENT | 检查文件路径 |
| 4001 | FILE_OPEN_FAILED | 打开文件失败 | - | 检查权限和路径 |
| 4002 | FILE_READ_FAILED | 读取文件失败 | - | 检查权限 |
| 4003 | FILE_WRITE_FAILED | 写入文件失败 | - | 检查权限和空间 |
| 4004 | FILE_CREATE_FAILED | 创建文件失败 | - | 检查目录权限 |
| 4005 | FILE_DELETE_FAILED | 删除文件失败 | - | 检查权限 |
| 4006 | FILE_SEEK_FAILED | 文件定位失败 | - | 文件可能损坏 |
| 4007 | FILE_ACCESS_DENIED | 文件访问被拒绝 | EACCES/EPERM | 检查文件权限 |
| 4008 | FILE_ALREADY_EXISTS | 文件已存在 | EEXIST | 使用不同的文件名 |
| 4009 | FILE_IS_DIRECTORY | 路径是目录 | EISDIR | 提供文件路径 |
| 4010 | FILE_PATH_TOO_LONG | 文件路径过长 | ENAMETOOLONG | 缩短路径 |

### 目录错误 (4100-4199)

| 错误码 | 名称 | 说明 | errno | 解决方案 |
|--------|------|------|-------|----------|
| 4100 | DIRECTORY_NOT_FOUND | 目录不存在 | ENOTDIR | 检查目录路径 |
| 4101 | DIRECTORY_CREATE_FAILED | 创建目录失败 | - | 检查权限 |
| 4102 | DIRECTORY_ACCESS_DENIED | 目录访问被拒绝 | EACCES | 检查目录权限 |
| 4103 | DIRECTORY_NOT_EMPTY | 目录非空 | ENOTEMPTY | 清空目录或使用递归删除 |
| 4104 | DIRECTORY_SCAN_FAILED | 扫描目录失败 | - | 检查权限 |

### 磁盘错误 (4200-4299) ⚠️ 重要

| 错误码 | 名称 | 说明 | errno | 解决方案 |
|--------|------|------|-------|----------|
| **4200** | **DISK_FULL** | **磁盘空间不足** | **ENOSPC** | **释放磁盘空间** |
| **4201** | **DISK_QUOTA_EXCEEDED** | **超出磁盘配额** | **EDQUOT** | **增加配额或清理文件** |
| 4202 | DISK_READ_ONLY | 磁盘只读 | EROFS | 检查挂载选项 |
| 4203 | DISK_IO_ERROR | 磁盘IO错误 | EIO | 检查磁盘健康 |

## 内存/资源错误 (5000-5999)

| 错误码 | 名称 | 说明 | errno | 解决方案 |
|--------|------|------|-------|----------|
| 5000 | OUT_OF_MEMORY | 内存不足 | ENOMEM | 减小文件大小或压缩级别 |
| 5001 | BUFFER_TOO_SMALL | 缓冲区太小 | - | 增加缓冲区 |
| 5002 | RESOURCE_BUSY | 资源忙 | EBUSY | 稍后重试 |
| 5003 | TOO_MANY_OPEN_FILES | 打开文件过多 | EMFILE/ENFILE | 关闭不需要的文件 |
| 5004 | HANDLE_INVALID | 无效的句柄 | - | 检查文件是否已关闭 |

## 磁盘空间不足处理指南

### 错误码 4200: DISK_FULL

**错误示例：**
```
⚠️ 磁盘空间不足
详细信息: 路径: /data/app/output.zip
需要空间: 512.00 MB
可用空间: 100.00 MB
空间不足: 412.00 MB
错误码: 4200
```

**解决步骤：**

1. **立即操作**
   - 停止当前压缩/解压操作
   - 释放临时文件
   - 删除不需要的文件

2. **用户提示**
   ```typescript
   if (result.errorCode === 4200) {
       showDialog({
           title: '磁盘空间不足',
           message: `需要至少 ${requiredSpace} MB 可用空间`,
           actions: [
               { text: '清理空间', action: () => openStorageSettings() },
               { text: '取消', action: () => cancel() }
           ]
       });
   }
   ```

3. **预防措施**
   - 在操作前检查磁盘空间
   - 提供磁盘空间预估
   - 允许用户选择输出位置

### 错误码 4201: DISK_QUOTA_EXCEEDED

**用户提示：**
```
您的磁盘配额已用尽。
请联系管理员增加配额，或删除不需要的文件。
```

## 权限错误处理指南

### 错误码 4007: FILE_ACCESS_DENIED

**常见场景：**

1. **只读文件**
   ```bash
   chmod +w file.txt  # Linux/HarmonyOS
   ```

2. **无读取权限**
   ```bash
   chmod +r file.txt
   ```

3. **无执行权限（目录）**
   ```bash
   chmod +x directory/
   ```

**用户提示：**
```typescript
if (result.errorCode === 4007) {
    showDialog({
        title: '权限不足',
        message: '无法访问该文件，请检查权限设置',
        detail: errorDetail
    });
}
```

## 压缩包损坏处理

### 错误码 3003: DECOMPRESS_CORRUPTED_ARCHIVE

**检测方法：**

1. 打开归档失败
2. CRC 校验失败
3. 文件头损坏

**用户提示：**
```
压缩包文件已损坏，无法解压。
可能原因：
- 下载不完整
- 传输过程中损坏
- 存储介质故障

建议：
1. 重新下载文件
2. 检查原始文件
3. 使用其他解压工具验证
```

## JavaScript 层错误码映射

```typescript
enum ArchiveErrorCode {
    // 成功
    SUCCESS = 0,
    
    // 通用错误
    UNKNOWN_ERROR = 1000,
    INVALID_PARAMETER = 1001,
    OPERATION_CANCELLED = 1002,
    UNSUPPORTED_FORMAT = 1004,
    
    // 压缩错误
    COMPRESS_FAILED = 2000,
    COMPRESS_NO_INPUT_FILES = 2002,
    COMPRESS_ENCODER_NOT_AVAILABLE = 2004,
    
    // 解压错误
    DECOMPRESS_FAILED = 3000,
    DECOMPRESS_CORRUPTED_ARCHIVE = 3003,
    DECOMPRESS_PASSWORD_REQUIRED = 3004,
    
    // 文件系统错误
    FILE_NOT_FOUND = 4000,
    FILE_ACCESS_DENIED = 4007,
    DIRECTORY_NOT_FOUND = 4100,
    
    // 磁盘错误（最重要）
    DISK_FULL = 4200,
    DISK_QUOTA_EXCEEDED = 4201,
    
    // 内存错误
    OUT_OF_MEMORY = 5000,
}

// 错误消息映射
const ERROR_MESSAGES: Record<number, string> = {
    [ArchiveErrorCode.DISK_FULL]: '磁盘空间不足',
    [ArchiveErrorCode.FILE_ACCESS_DENIED]: '文件访问被拒绝',
    [ArchiveErrorCode.DECOMPRESS_CORRUPTED_ARCHIVE]: '压缩包已损坏',
    // ... 更多映射
};
```

## 错误处理流程图

```
开始压缩/解压
    ↓
检查输入文件是否存在
    ↓ 是
检查访问权限
    ↓ 有权限
检查磁盘空间
    ↓ 空间充足
执行压缩/解压
    ↓
写入文件时监测IO错误
    ↓
成功完成
```

任何步骤失败都会：
1. 停止操作
2. 设置对应错误码
3. 返回详细错误信息
4. 记录到日志

## 日志查询

**查看特定错误码的日志：**

```bash
# 查看磁盘空间不足的日志
hdc shell hilog | grep "ENOSPC\|磁盘空间不足"

# 查看权限错误
hdc shell hilog | grep "EACCES\|权限"

# 查看所有错误
hdc shell hilog | grep "❌"
```

## 常见问题 FAQ

### Q1: 如何预估需要的磁盘空间？

**A:** 系统自动估算：
- 压缩：原文件大小的 70% + 1MB
- 解压：压缩包大小的 3 倍 + 10MB
- 可通过日志查看具体估算值

### Q2: 为什么会出现磁盘空间充足但仍失败的情况？

**A:** 可能原因：
1. 磁盘配额限制（错误码 4201）
2. 文件系统限制（单文件大小限制）
3. inode 耗尽（Linux）
4. 磁盘只读（错误码 4202）

### Q3: 如何处理大文件压缩时的内存不足？

**A:** 解决方案：
1. 降低压缩级别（从 9 降到 5 或更低）
2. 使用流式压缩（分批处理）
3. 检查是否有内存泄漏

### Q4: 7z 格式不可用怎么办？

**A:** 错误码 2004，解决方案：
1. 使用 ZIP 格式替代
2. 重新编译 p7zip 库，包含 LZMA 编码器
3. 检查静态库是否完整

## 总结

- ✅ 所有错误都有明确的错误码
- ✅ 磁盘空间不足会提前检测（错误码 4200）
- ✅ 权限问题会在操作前检查
- ✅ 每个错误都有详细的上下文信息
- ✅ 便于用户界面展示友好的错误提示

