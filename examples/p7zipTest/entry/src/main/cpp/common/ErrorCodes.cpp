#include "ErrorCodes.h"
#include "common.h"
#include "hilog/log.h"
#include <cerrno>
#include <cstring>
#include <iomanip>
#include <sstream>
#include <sys/stat.h>
#include <sys/statvfs.h>
#include <unistd.h>

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x0000
#define LOG_TAG "ErrorCodes"

// 错误消息映射表
const std::map<ArchiveErrorCode, std::string> ErrorMessages::messages = {
    // 成功
    {ArchiveErrorCode::SUCCESS, "操作成功"},

    // 通用错误
    {ArchiveErrorCode::UNKNOWN_ERROR, "未知错误"},
    {ArchiveErrorCode::INVALID_PARAMETER, "无效的参数"},
    {ArchiveErrorCode::OPERATION_CANCELLED, "操作已取消"},
    {ArchiveErrorCode::NOT_IMPLEMENTED, "功能未实现"},
    {ArchiveErrorCode::UNSUPPORTED_FORMAT, "不支持的压缩格式"},
    {ArchiveErrorCode::FORMAT_DETECTION_FAILED, "无法识别压缩格式"},

    // 压缩错误
    {ArchiveErrorCode::COMPRESS_FAILED, "压缩失败"},
    {ArchiveErrorCode::COMPRESS_CREATE_ARCHIVE_FAILED, "创建压缩包失败"},
    {ArchiveErrorCode::COMPRESS_NO_INPUT_FILES, "没有要压缩的文件"},
    {ArchiveErrorCode::COMPRESS_INVALID_LEVEL, "无效的压缩级别"},
    {ArchiveErrorCode::COMPRESS_ENCODER_NOT_AVAILABLE, "压缩编码器不可用"},
    {ArchiveErrorCode::COMPRESS_WRITE_HEADER_FAILED, "写入压缩包头失败"},
    {ArchiveErrorCode::COMPRESS_DATA_ERROR, "压缩数据错误"},

    // 解压错误
    {ArchiveErrorCode::DECOMPRESS_FAILED, "解压失败"},
    {ArchiveErrorCode::DECOMPRESS_OPEN_ARCHIVE_FAILED, "打开压缩包失败"},
    {ArchiveErrorCode::DECOMPRESS_INVALID_ARCHIVE, "无效的压缩包格式"},
    {ArchiveErrorCode::DECOMPRESS_CORRUPTED_ARCHIVE, "压缩包文件已损坏"},
    {ArchiveErrorCode::DECOMPRESS_PASSWORD_REQUIRED, "压缩包需要密码"},
    {ArchiveErrorCode::DECOMPRESS_WRONG_PASSWORD, "密码错误"},
    {ArchiveErrorCode::DECOMPRESS_EXTRACT_FAILED, "提取文件失败"},
    {ArchiveErrorCode::DECOMPRESS_CRC_ERROR, "CRC校验失败，文件可能已损坏"},
    {ArchiveErrorCode::DECOMPRESS_UNSUPPORTED_METHOD, "不支持的压缩方法"},

    // 文件系统错误
    {ArchiveErrorCode::FILE_NOT_FOUND, "文件不存在"},
    {ArchiveErrorCode::FILE_OPEN_FAILED, "打开文件失败"},
    {ArchiveErrorCode::FILE_READ_FAILED, "读取文件失败"},
    {ArchiveErrorCode::FILE_WRITE_FAILED, "写入文件失败"},
    {ArchiveErrorCode::FILE_CREATE_FAILED, "创建文件失败"},
    {ArchiveErrorCode::FILE_DELETE_FAILED, "删除文件失败"},
    {ArchiveErrorCode::FILE_SEEK_FAILED, "文件定位失败"},
    {ArchiveErrorCode::FILE_ACCESS_DENIED, "文件访问被拒绝，权限不足"},
    {ArchiveErrorCode::FILE_ALREADY_EXISTS, "文件已存在"},
    {ArchiveErrorCode::FILE_IS_DIRECTORY, "路径是目录而非文件"},
    {ArchiveErrorCode::FILE_PATH_TOO_LONG, "文件路径过长"},

    {ArchiveErrorCode::DIRECTORY_NOT_FOUND, "目录不存在"},
    {ArchiveErrorCode::DIRECTORY_CREATE_FAILED, "创建目录失败"},
    {ArchiveErrorCode::DIRECTORY_ACCESS_DENIED, "目录访问被拒绝，权限不足"},
    {ArchiveErrorCode::DIRECTORY_NOT_EMPTY, "目录非空"},
    {ArchiveErrorCode::DIRECTORY_SCAN_FAILED, "扫描目录失败"},

    {ArchiveErrorCode::DISK_FULL, "⚠️ 磁盘空间不足"},
    {ArchiveErrorCode::DISK_QUOTA_EXCEEDED, "超出磁盘配额限制"},
    {ArchiveErrorCode::DISK_READ_ONLY, "磁盘为只读，无法写入"},
    {ArchiveErrorCode::DISK_IO_ERROR, "磁盘IO错误"},

    // 内存/资源错误
    {ArchiveErrorCode::OUT_OF_MEMORY, "内存不足"},
    {ArchiveErrorCode::BUFFER_TOO_SMALL, "缓冲区太小"},
    {ArchiveErrorCode::RESOURCE_BUSY, "资源正忙"},
    {ArchiveErrorCode::TOO_MANY_OPEN_FILES, "打开的文件过多"},
    {ArchiveErrorCode::HANDLE_INVALID, "无效的文件句柄"},
};

std::string ErrorMessages::GetMessage(ArchiveErrorCode code) {
    auto it = messages.find(code);
    if (it != messages.end()) {
        return it->second;
    }
    return "未定义的错误 (code: " + std::to_string(static_cast<int>(code)) + ")";
}

// 映射errno到错误代码
static ArchiveErrorCode MapErrnoToCode(int err) {
    switch (err) {
    case ENOENT:
        return ArchiveErrorCode::FILE_NOT_FOUND;
    case EACCES:
    case EPERM:
        return ArchiveErrorCode::FILE_ACCESS_DENIED;
    case ENOSPC:
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 磁盘空间不足！errno=ENOSPC");
        return ArchiveErrorCode::DISK_FULL;
    case EDQUOT:
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 超出磁盘配额！errno=EDQUOT");
        return ArchiveErrorCode::DISK_QUOTA_EXCEEDED;
    case EROFS:
        return ArchiveErrorCode::DISK_READ_ONLY;
    case EIO:
        return ArchiveErrorCode::DISK_IO_ERROR;
    case EEXIST:
        return ArchiveErrorCode::FILE_ALREADY_EXISTS;
    case EISDIR:
        return ArchiveErrorCode::FILE_IS_DIRECTORY;
    case ENOTDIR:
        return ArchiveErrorCode::DIRECTORY_NOT_FOUND;
    case ENAMETOOLONG:
        return ArchiveErrorCode::FILE_PATH_TOO_LONG;
    case EMFILE:
    case ENFILE:
        return ArchiveErrorCode::TOO_MANY_OPEN_FILES;
    case ENOMEM:
        return ArchiveErrorCode::OUT_OF_MEMORY;
    default:
        return ArchiveErrorCode::UNKNOWN_ERROR;
    }
}

// 从errno创建错误
ArchiveError ArchiveError::FromErrno(int err, const std::string &context) {
    std::string detail = context;
    if (!detail.empty()) {
        detail += ", ";
    }
    detail += "errno=" + std::to_string(err) + " (" + strerror(err) + ")";

    ArchiveErrorCode code = MapErrnoToCode(err);
    return ArchiveError(code, ErrorMessages::GetMessage(code), detail);
}

// 获取父目录路径
static std::string GetParentDirectory(const std::string &path) {
    size_t pos = path.find_last_of("/\\");
    if (pos != std::string::npos) {
        std::string parent = path.substr(0, pos);
        return parent.empty() ? "." : parent;
    }
    return ".";
}

// 解析检查路径（文件→父目录，不存在→父目录）
static std::string ResolveCheckPath(const std::string &path) {
    struct stat pathStat;
    if (::stat(path.c_str(), &pathStat) == 0) {
        if (!S_ISDIR(pathStat.st_mode)) {
            return GetParentDirectory(path);
        }
        return path;
    }
    return GetParentDirectory(path);
}

// 获取可用磁盘空间
static bool GetAvailableSpace(const std::string &checkPath, uint64_t &availableBytes) {
    struct statvfs stat;
    if (statvfs(checkPath.c_str(), &stat) != 0) {
        return false;
    }
    availableBytes = static_cast<uint64_t>(stat.f_bavail) * stat.f_frsize;
    return true;
}

// 创建磁盘空间不足错误
static ArchiveError CreateDiskFullError(const std::string &path, uint64_t requiredBytes, uint64_t availableBytes) {
    double availableMB = availableBytes / static_cast<double>(BYTES_PER_MB);
    double requiredMB = requiredBytes / static_cast<double>(BYTES_PER_MB);

    std::ostringstream detail;
    detail << "路径: " << path << "\n需要空间: " << std::fixed << std::setprecision(DECIMAL_PRECISION_2) << requiredMB
           << " MB"
           << "\n可用空间: " << availableMB << " MB"
           << "\n空间不足: " << (requiredMB - availableMB) << " MB";

    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 磁盘空间不足！需要=%.2f MB, 可用=%.2f MB", requiredMB,
                 availableMB);

    return ArchiveError(ArchiveErrorCode::DISK_FULL, ErrorMessages::GetMessage(ArchiveErrorCode::DISK_FULL),
                        detail.str());
}

// 检查磁盘空间
ArchiveError ArchiveError::CheckDiskSpace(const std::string &path, uint64_t requiredBytes) {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "检查磁盘空间: path=%s, 需要=%.2f MB", path.c_str(),
                 requiredBytes / static_cast<double>(BYTES_PER_MB));

    std::string checkPath = ResolveCheckPath(path);
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "实际检查路径: %s", checkPath.c_str());

    uint64_t availableBytes = 0;
    if (!GetAvailableSpace(checkPath, availableBytes)) {
        int err = errno;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ statvfs失败: errno=%d (%s)", err, strerror(err));
        return FromErrno(err, "无法获取磁盘空间信息: " + checkPath);
    }

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "磁盘可用空间: %.2f MB",
                 availableBytes / static_cast<double>(BYTES_PER_MB));

    uint64_t requiredWithMargin = requiredBytes + (requiredBytes / DECOMPRESSION_SAFETY_MARGIN);
    if (availableBytes < requiredWithMargin) {
        return CreateDiskFullError(path, requiredBytes, availableBytes);
    }

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✓ 磁盘空间充足");
    return ArchiveError(); // SUCCESS
}

// 处理路径不存在的情况
static ArchiveError HandlePathNotFound(const std::string &path, bool needWrite) {
    size_t pos = path.find_last_of("/\\");
    if (pos != std::string::npos) {
        std::string parent = path.substr(0, pos);
        if (!parent.empty()) {
            return ArchiveError::CheckAccess(parent, needWrite);
        }
    }
    return ArchiveError(ArchiveErrorCode::FILE_NOT_FOUND, ErrorMessages::GetMessage(ArchiveErrorCode::FILE_NOT_FOUND),
                        "路径: " + path);
}

// 检查路径访问权限
static ArchiveError CheckPathPermissions(const std::string &path, const struct stat &pathStat, bool needWrite) {
    int mode = needWrite ? (R_OK | W_OK) : R_OK;
    if (access(path.c_str(), mode) != 0) {
        int err = errno;
        ArchiveErrorCode code = S_ISDIR(pathStat.st_mode) ? ArchiveErrorCode::DIRECTORY_ACCESS_DENIED
                                                          : ArchiveErrorCode::FILE_ACCESS_DENIED;
        std::string detail = "路径: " + path + "\n需要权限: " + (needWrite ? "读写" : "只读");
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 权限不足！path=%s, needWrite=%d", path.c_str(),
                     needWrite);
        return ArchiveError(code, ErrorMessages::GetMessage(code), detail);
    }
    return ArchiveError(); // SUCCESS
}

// 检查文件/目录访问权限
ArchiveError ArchiveError::CheckAccess(const std::string &path, bool needWrite) {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "检查访问权限: path=%s, needWrite=%d", path.c_str(),
                 needWrite);

    struct stat pathStat;
    if (::stat(path.c_str(), &pathStat) != 0) {
        int err = errno;
        if (err == ENOENT) {
            return HandlePathNotFound(path, needWrite);
        }
        return FromErrno(err, "检查路径失败: " + path);
    }

    ArchiveError result = CheckPathPermissions(path, pathStat, needWrite);
    if (result.IsSuccess()) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✓ 权限检查通过");
    }
    return result;
}
