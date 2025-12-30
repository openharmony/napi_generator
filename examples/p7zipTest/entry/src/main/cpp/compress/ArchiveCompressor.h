#ifndef ARCHIVE_COMPRESSOR_H
#define ARCHIVE_COMPRESSOR_H

#include <string>
#include <vector>
#include <functional>
#include "ErrorCodes.h"

// 压缩进度回调类型
// 返回 true 表示继续压缩，返回 false 表示取消压缩
using CompressProgressCallback = std::function<bool(uint64_t processed, uint64_t total, const std::string& currentFile)>;

// 压缩格式
enum class CompressFormat {
    SEVENZ,  // 7z
    ZIP      // zip
};

// 要压缩的文件信息
struct CompressFileItem {
    std::string sourcePath;  // 源文件路径
    std::string archivePath; // 在压缩包中的路径
    bool isDirectory;
};

// 压缩选项参数
struct CompressOptions {
    CompressFormat format;
    int compressionLevel;
    CompressProgressCallback callback;
    std::string* error;           // 兼容旧接口
    ArchiveError* archiveError;   // 新增：详细错误信息
    
    CompressOptions(CompressFormat fmt = CompressFormat::ZIP,
                   int level = 5,
                   CompressProgressCallback cb = nullptr,
                   std::string* err = nullptr,
                   ArchiveError* arcErr = nullptr)
        : format(fmt), compressionLevel(level), callback(cb), error(err), archiveError(arcErr) {}
};

/**
 * 压缩器类 - 支持 7z 和 Zip 格式压缩
 */
class ArchiveCompressor {
public:
    /**
     * 压缩单个文件
     * @param inputFile 输入文件路径
     * @param outputArchive 输出压缩包路径
     * @param options 压缩选项
     * @return 是否成功
     */
    static bool CompressFile(
        const std::string& inputFile,
        const std::string& outputArchive,
        const CompressOptions& options
    );
    
    /**
     * 压缩多个文件
     * @param files 要压缩的文件列表
     * @param outputArchive 输出压缩包路径
     * @param options 压缩选项
     * @return 是否成功
     */
    static bool CompressFiles(
        const std::vector<CompressFileItem>& files,
        const std::string& outputArchive,
        const CompressOptions& options
    );
    
    /**
     * 压缩整个目录
     * @param inputDir 输入目录路径
     * @param outputArchive 输出压缩包路径
     * @param options 压缩选项
     * @return 是否成功
     */
    static bool CompressDirectory(
        const std::string& inputDir,
        const std::string& outputArchive,
        const CompressOptions& options
    );
    
    /**
     * 获取格式名称
     */
    static std::string GetFormatName(CompressFormat format);
    
    /**
     * 扫描目录获取所有文件（公共方法，供混合压缩使用）
     * @param dirPath 要扫描的目录路径
     * @param basePath 基础路径（用于计算相对路径）
     * @param files 输出文件列表
     * @param error 错误信息输出
     * @return 是否成功
     */
    static bool ScanDirectory(const std::string& dirPath, 
                             const std::string& basePath,
                             std::vector<CompressFileItem>& files,
                             std::string* error);

private:
    
    // 使用p7zip标准接口压缩
    static bool CompressWithP7zip(
        const std::vector<CompressFileItem>& files,
        const std::string& outputArchive,
        const CompressOptions& options
    );
};

#endif // ARCHIVE_COMPRESSOR_H

