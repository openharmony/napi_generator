#ifndef LZMA_UTILS_H
#define LZMA_UTILS_H

#include <string>
#include <functional>

// 进度回调
using LzmaProgressCallback = std::function<void(uint64_t processed, uint64_t total)>;

// ============================================================
// LZMA 文件压缩/解压工具
// ============================================================

class LzmaUtils {
public:
    // 压缩文件
    static bool CompressFile(
        const std::string& inputFile,
        const std::string& outputFile,
        int level = 5,
        LzmaProgressCallback callback = nullptr,
        std::string* error = nullptr
    );
    
    // 解压文件
    static bool DecompressFile(
        const std::string& inputFile,
        const std::string& outputFile,
        LzmaProgressCallback callback = nullptr,
        std::string* error = nullptr
    );
};

#endif // LZMA_UTILS_H

