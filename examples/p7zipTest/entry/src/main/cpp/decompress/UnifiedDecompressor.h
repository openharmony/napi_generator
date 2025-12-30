#ifndef UNIFIED_DECOMPRESSOR_H
#define UNIFIED_DECOMPRESSOR_H

#include <string>
#include <functional>
#include "FormatDetector.h"
#include "ArchiveHandler.h"
#include "ErrorCodes.h"

// 进度回调类型
using DecompressProgressCallback = std::function<void(uint64_t processed, uint64_t total, const std::string& currentFile)>;

class UnifiedDecompressor {
public:
    /**
     * 统一解压接口 - 自动识别格式
     * @param inputFile 输入压缩文件路径
     * @param outputPath 输出路径（文件或目录）
     * @param callback 进度回调
     * @param error 错误信息输出（兼容旧接口）
     * @param archiveError 详细错误信息输出（新增）
     * @return 是否成功
     */
    static bool Decompress(
        const std::string& inputFile,
        const std::string& outputPath,
        DecompressProgressCallback callback = nullptr,
        std::string* error = nullptr,
        ArchiveError* archiveError = nullptr
    );
    
    /**
     * 解压指定格式
     * @param inputFile 输入文件
     * @param outputPath 输出路径
     * @param format 指定格式
     * @param callback 进度回调
     * @param error 错误信息（兼容旧接口）
     * @param archiveError 详细错误信息（新增）
     * @return 是否成功
     */
    static bool DecompressFormat(
        const std::string& inputFile,
        const std::string& outputPath,
        ArchiveFormat format,
        DecompressProgressCallback callback = nullptr,
        std::string* error = nullptr,
        ArchiveError* archiveError = nullptr
    );
    
    /**
     * 获取压缩包的真实未压缩大小（通过读取元数据）
     * @param inputFile 压缩文件路径
     * @param format 压缩格式
     * @param uncompressedSize 输出：未压缩大小（字节）
     * @return 是否成功获取
     */
    static bool GetUncompressedSize(
        const std::string& inputFile,
        ArchiveFormat format,
        uint64_t* uncompressedSize
    );

private:
    // LZMA 格式解压
    static bool DecompressLZMA(const std::string& input, const std::string& output, 
                               DecompressProgressCallback callback, std::string* error);
    
    // GZIP 格式解压
    static bool DecompressGZIP(const std::string& input, const std::string& output,
                               DecompressProgressCallback callback, std::string* error);
    
    // BZIP2 格式解压
    static bool DecompressBZIP2(const std::string& input, const std::string& output,
                                DecompressProgressCallback callback, std::string* error);
    
    // XZ 格式解压
    static bool DecompressXZ(const std::string& input, const std::string& output,
                             DecompressProgressCallback callback, std::string* error);
};

#endif // UNIFIED_DECOMPRESSOR_H

