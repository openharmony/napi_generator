#ifndef ERROR_CODES_H
#define ERROR_CODES_H

#include <map>
#include <string>

/**
 * 压缩/解压错误码定义
 * 错误码范围：
 * - 0: 成功
 * - 1000-1999: 通用错误
 * - 2000-2999: 压缩相关错误
 * - 3000-3999: 解压相关错误
 * - 4000-4999: 文件系统错误
 * - 5000-5999: 内存/资源错误
 */

enum class ArchiveErrorCode {
    // 成功
    SUCCESS = 0,
    // ===== 通用错误 (1000-1999) =====
    UNKNOWN_ERROR = 1000,           // 未知错误
    INVALID_PARAMETER = 1001,       // 无效参数
    OPERATION_CANCELLED = 1002,     // 操作已取消
    NOT_IMPLEMENTED = 1003,         // 功能未实现
    UNSUPPORTED_FORMAT = 1004,      // 不支持的格式
    FORMAT_DETECTION_FAILED = 1005, // 格式检测失败
    // ===== 压缩错误 (2000-2999) =====
    COMPRESS_FAILED = 2000,                // 压缩失败（通用）
    COMPRESS_CREATE_ARCHIVE_FAILED = 2001, // 创建压缩包失败
    COMPRESS_NO_INPUT_FILES = 2002,        // 没有输入文件
    COMPRESS_INVALID_LEVEL = 2003,         // 无效的压缩级别
    COMPRESS_ENCODER_NOT_AVAILABLE = 2004, // 编码器不可用
    COMPRESS_WRITE_HEADER_FAILED = 2005,   // 写入压缩包头失败
    COMPRESS_DATA_ERROR = 2006,            // 压缩数据错误
    // ===== 解压错误 (3000-3999) =====
    DECOMPRESS_FAILED = 3000,              // 解压失败（通用）
    DECOMPRESS_OPEN_ARCHIVE_FAILED = 3001, // 打开压缩包失败
    DECOMPRESS_INVALID_ARCHIVE = 3002,     // 无效的压缩包
    DECOMPRESS_CORRUPTED_ARCHIVE = 3003,   // 压缩包已损坏
    DECOMPRESS_PASSWORD_REQUIRED = 3004,   // 需要密码
    DECOMPRESS_WRONG_PASSWORD = 3005,      // 密码错误
    DECOMPRESS_EXTRACT_FAILED = 3006,      // 解压失败
    DECOMPRESS_CRC_ERROR = 3007,           // CRC校验失败
    DECOMPRESS_UNSUPPORTED_METHOD = 3008,  // 不支持的压缩方法
    // ===== 文件系统错误 (4000-4999) =====
    FILE_NOT_FOUND = 4000,      // 文件不存在
    FILE_OPEN_FAILED = 4001,    // 打开文件失败
    FILE_READ_FAILED = 4002,    // 读取文件失败
    FILE_WRITE_FAILED = 4003,   // 写入文件失败
    FILE_CREATE_FAILED = 4004,  // 创建文件失败
    FILE_DELETE_FAILED = 4005,  // 删除文件失败
    FILE_SEEK_FAILED = 4006,    // 文件定位失败
    FILE_ACCESS_DENIED = 4007,  // 文件访问被拒绝
    FILE_ALREADY_EXISTS = 4008, // 文件已存在
    FILE_IS_DIRECTORY = 4009,   // 路径是目录而非文件
    FILE_PATH_TOO_LONG = 4010,  // 文件路径过长
    DIRECTORY_NOT_FOUND = 4100,     // 目录不存在
    DIRECTORY_CREATE_FAILED = 4101, // 创建目录失败
    DIRECTORY_ACCESS_DENIED = 4102, // 目录访问被拒绝
    DIRECTORY_NOT_EMPTY = 4103,     // 目录非空
    DIRECTORY_SCAN_FAILED = 4104,   // 扫描目录失败
    DISK_FULL = 4200,           // 磁盘空间不足 ⚠️ 重要
    DISK_QUOTA_EXCEEDED = 4201, // 超出磁盘配额
    DISK_READ_ONLY = 4202,      // 磁盘只读
    DISK_IO_ERROR = 4203,       // 磁盘IO错误
    // ===== 内存/资源错误 (5000-5999) =====
    OUT_OF_MEMORY = 5000,       // 内存不足
    BUFFER_TOO_SMALL = 5001,    // 缓冲区太小
    RESOURCE_BUSY = 5002,       // 资源忙
    TOO_MANY_OPEN_FILES = 5003, // 打开文件过多
    HANDLE_INVALID = 5004,      // 无效的句柄
};

/**
 * 错误信息类
 */
class ArchiveError {
public:
    ArchiveErrorCode code;
    std::string message;
    std::string detail; // 详细信息（如文件路径、errno等）
    ArchiveError() : code(ArchiveErrorCode::SUCCESS), message("成功"), detail("") {}
    ArchiveError(ArchiveErrorCode c, const std::string &msg, const std::string &det = "")
        : code(c), message(msg), detail(det) {}
    // 判断是否成功
    bool IsSuccess() const { return code == ArchiveErrorCode::SUCCESS; }
    // 获取错误码数值
    int GetErrorCode() const { return static_cast<int>(code); }
    // 获取完整错误消息
    std::string GetFullMessage() const {
        std::string fullMsg = message;
        if (!detail.empty()) {
            fullMsg += "\n详细信息: " + detail;
        }
        fullMsg += "\n错误码: " + std::to_string(GetErrorCode());
        return fullMsg;
    }
    // 从errno创建文件系统错误
    static ArchiveError FromErrno(int err, const std::string &context = "");
    // 检查磁盘空间是否足够
    static ArchiveError CheckDiskSpace(const std::string &path, uint64_t requiredBytes);
    // 检查文件/目录权限
    static ArchiveError CheckAccess(const std::string &path, bool needWrite);
};

/**
 * 错误码到消息的映射
 */
class ErrorMessages {
public:
    static std::string GetMessage(ArchiveErrorCode code);

private:
    static const std::map<ArchiveErrorCode, std::string> messages;
};

#endif // ERROR_CODES_H
