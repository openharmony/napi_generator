#include "UnifiedDecompressor.h"
#include "LzmaUtils.h"
#include "ErrorCodes.h"
#include "ArchiveHandler.h"
#include "common.h"
#include <fstream>
#include <vector>
#include <sys/stat.h>
#include <sstream>
#include <iomanip>
#include "hilog/log.h"

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x0000
#define LOG_TAG "UnifiedDecompressor"

// p7zip 解码器
#include "C/LzmaDec.h"
// #include "C/Bz2Dec.h"  // 暂未实现
// #include "C/Xz.h"      // 暂未实现
// #include "C/XzDec.h"   // 暂未实现
#include "C/Alloc.h"

// 外部函数声明
extern "C" {
    HRESULT CreateObject(const GUID *clsid, const GUID *iid, void **outObject);
}

bool UnifiedDecompressor::Decompress(
    const std::string& inputFile,
    const std::string& outputPath,
    DecompressProgressCallback callback,
    std::string* error,
    ArchiveError* archiveError)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== Decompress START ===");
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Input: %s", inputFile.c_str());
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Output: %s", outputPath.c_str());
    
    // 检查输入文件是否存在
    struct stat st;
    if (stat(inputFile.c_str(), &st) != 0) {
        ArchiveError err = ArchiveError::FromErrno(errno, "输入文件: " + inputFile);
        if (error) *error = err.GetFullMessage();
        if (archiveError) *archiveError = err;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return false;
    }
    
    // 检查输入文件访问权限
    ArchiveError accessErr = ArchiveError::CheckAccess(inputFile, false);
    if (!accessErr.IsSuccess()) {
        if (error) *error = accessErr.GetFullMessage();
        if (archiveError) *archiveError = accessErr;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", accessErr.GetFullMessage().c_str());
        return false;
    }
    
    // 自动检测格式
    ArchiveFormat format = FormatDetector::Detect(inputFile);
    
    if (format == ArchiveFormat::UNKNOWN) {
        ArchiveError err(ArchiveErrorCode::FORMAT_DETECTION_FAILED,
            ErrorMessages::GetMessage(ArchiveErrorCode::FORMAT_DETECTION_FAILED),
            "文件: " + inputFile);
        if (error) *error = err.GetFullMessage();
        if (archiveError) *archiveError = err;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return false;
    }
    
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Detected format: %d", (int)format);
    
    // 根据格式调用对应的解压方法
    return DecompressFormat(inputFile, outputPath, format, callback, error, archiveError);
}

// 计算所需磁盘空间
static uint64_t CalculateRequiredSize(const std::string& inputFile, ArchiveFormat format, bool& useRealSize) {
    uint64_t requiredSize = 0;
    useRealSize = false;
    
    if (UnifiedDecompressor::GetUncompressedSize(inputFile, format, &requiredSize)) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "获取到真实大小: %.2f MB", 
            requiredSize / static_cast<double>(BYTES_PER_MB));
        requiredSize = requiredSize + (requiredSize / DECOMPRESSION_SAFETY_MARGIN);
        useRealSize = true;
    } else {
        OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "使用估算大小");
        struct stat st;
        if (stat(inputFile.c_str(), &st) == 0) {
            requiredSize = st.st_size * COMPRESSION_SIZE_MULTIPLIER + SIZE_50MB;
        }
    }
    return requiredSize;
}

// 检查磁盘空间
static bool CheckDiskSpace(const std::string& outputPath, uint64_t requiredSize, 
                          bool useRealSize, std::string* error, ArchiveError* archiveError) {
    if (requiredSize == 0) return true;
    
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "磁盘空间检查: 需要 %.2f MB (%s)", 
        requiredSize / static_cast<double>(BYTES_PER_MB), useRealSize ? "真实" : "估算");
    
    ArchiveError diskErr = ArchiveError::CheckDiskSpace(outputPath, requiredSize);
    if (!diskErr.IsSuccess()) {
        if (error) *error = diskErr.GetFullMessage();
        if (archiveError) *archiveError = diskErr;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", diskErr.GetFullMessage().c_str());
        return false;
    }
    return true;
}

// 处理不支持的格式
static bool HandleUnsupportedFormat(ArchiveFormat format, std::string* error, ArchiveError* archiveError) {
    ArchiveError err(ArchiveErrorCode::UNSUPPORTED_FORMAT,
        ErrorMessages::GetMessage(ArchiveErrorCode::UNSUPPORTED_FORMAT),
        "格式代码: " + std::to_string((int)format));
    if (error) *error = err.GetFullMessage();
    if (archiveError) *archiveError = err;
    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
    return false;
}

bool UnifiedDecompressor::DecompressFormat(
    const std::string& inputFile,
    const std::string& outputPath,
    ArchiveFormat format,
    DecompressProgressCallback callback,
    std::string* error,
    ArchiveError* archiveError)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "DecompressFormat: format=%d", (int)format);
    
    ArchiveError writeErr = ArchiveError::CheckAccess(outputPath, true);
    if (!writeErr.IsSuccess()) {
        if (error) *error = writeErr.GetFullMessage();
        if (archiveError) *archiveError = writeErr;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", writeErr.GetFullMessage().c_str());
        return false;
    }
    
    bool useRealSize = false;
    uint64_t requiredSize = CalculateRequiredSize(inputFile, format, useRealSize);
    if (!CheckDiskSpace(outputPath, requiredSize, useRealSize, error, archiveError)) {
        return false;
    }
    
    if (format == ArchiveFormat::LZMA) {
        return DecompressLZMA(inputFile, outputPath, callback, error);
    }
    
    if (format == ArchiveFormat::GZIP || format == ArchiveFormat::BZIP2 || format == ArchiveFormat::XZ ||
        format == ArchiveFormat::SEVENZ || format == ArchiveFormat::ZIP || format == ArchiveFormat::TAR ||
        format == ArchiveFormat::RAR || format == ArchiveFormat::RAR5 || format == ArchiveFormat::ISO ||
        format == ArchiveFormat::CAB || format == ArchiveFormat::WIM) {
        return ArchiveHandler::ExtractArchive(inputFile, outputPath, "", 
            [callback](uint64_t processed, uint64_t total, const std::string& fileName) {
                if (callback) callback(processed, total, fileName);
            }, error, archiveError);
    }
    
    return HandleUnsupportedFormat(format, error, archiveError);
}

bool UnifiedDecompressor::DecompressLZMA(
    const std::string& input,
    const std::string& output,
    DecompressProgressCallback callback,
    std::string* error)
{
    // 使用现有的 LzmaUtils
    LzmaProgressCallback legacyCallback = nullptr;
    if (callback) {
        legacyCallback = [callback](uint64_t processed, uint64_t total) {
            callback(processed, total, "");
        };
    }
    
    return LzmaUtils::DecompressFile(input, output, legacyCallback, error);
}

// 通用的未实现格式处理
static bool HandleUnimplementedFormat(const std::string& formatName, std::string* error) {
    if (error) *error = formatName + " 解压需要进一步实现";
    return false;
}

bool UnifiedDecompressor::DecompressGZIP(
    const std::string& input,
    const std::string& output,
    DecompressProgressCallback callback,
    std::string* error)
{
    return HandleUnimplementedFormat("GZIP", error);
}

bool UnifiedDecompressor::DecompressBZIP2(
    const std::string& input,
    const std::string& output,
    DecompressProgressCallback callback,
    std::string* error)
{
    return HandleUnimplementedFormat("BZIP2", error);
}

bool UnifiedDecompressor::DecompressXZ(
    const std::string& input,
    const std::string& output,
    DecompressProgressCallback callback,
    std::string* error)
{
    return HandleUnimplementedFormat("XZ", error);
}

// 检查是否为流格式
static bool IsStreamFormat(ArchiveFormat format) {
    return format == ArchiveFormat::LZMA || format == ArchiveFormat::LZMA86 ||
           format == ArchiveFormat::GZIP || format == ArchiveFormat::BZIP2 || 
           format == ArchiveFormat::XZ;
}

// 打开归档并获取文件流
static bool OpenArchiveAndStream(const std::string& inputFile, IInArchive* archive,
                                 CInFileStream** fileSpec) {
    *fileSpec = new CInFileStream();
    if (!(*fileSpec)->Open(inputFile.c_str())) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 打开文件失败: %s", inputFile.c_str());
        archive->Release();
        delete *fileSpec;
        return false;
    }
    
    IArchiveOpenCallback* openCallback = nullptr;
    UInt64 maxCheckStartPosition = ARCHIVE_SCAN_SIZE_ALT;
    HRESULT openResult = archive->Open(*fileSpec, &maxCheckStartPosition, openCallback);
    
    if (openResult != S_OK) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 打开归档失败: 0x%x", openResult);
        archive->Release();
        delete *fileSpec;
        return false;
    }
    return true;
}

// 累加所有文件大小
static void AccumulateFileSizes(IInArchive* archive, UInt32 numItems, uint64_t* totalSize) {
    for (UInt32 i = 0; i < numItems; i++) {
        PROPVARIANT prop;
        prop.vt = VT_EMPTY;
        
        HRESULT hr = archive->GetProperty(i, kpidSize, &prop);
        if (hr == S_OK) {
            UInt64 fileSize = 0;
            if (prop.vt == VT_UI8) {
                fileSize = prop.uhVal.QuadPart;
            } else if (prop.vt == VT_UI4) {
                fileSize = prop.ulVal;
            }
            *totalSize += fileSize;
            
            if ((i + INDEX_OFFSET_NEXT) % PROGRESS_LOG_INTERVAL_FILES == 0) {
                OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "已扫描 %u/%u 文件，累计大小: %lu bytes", 
                            i + INDEX_OFFSET_NEXT, numItems, (unsigned long)*totalSize);
            }
        }
    }
}

// 获取压缩包的真实未压缩大小
bool UnifiedDecompressor::GetUncompressedSize(
    const std::string& inputFile,
    ArchiveFormat format,
    uint64_t* uncompressedSize)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== GetUncompressedSize START ===");
    
    if (!uncompressedSize) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ uncompressedSize 参数为空");
        return false;
    }
    
    *uncompressedSize = 0;
    
    if (IsStreamFormat(format)) {
        OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "⚠️ 流格式无法提前获取未压缩大小");
        return false;
    }
    
    std::string errorMsg;
    IInArchive* archive = ArchiveHandler::CreateArchiveHandler(inputFile, &errorMsg, nullptr);
    
    if (!archive) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 创建归档对象失败: %s", errorMsg.c_str());
        return false;
    }
    
    CInFileStream* fileSpec = nullptr;
    if (!OpenArchiveAndStream(inputFile, archive, &fileSpec)) {
        return false;
    }
    
    try {
        UInt32 numItems = 0;
        archive->GetNumberOfItems(&numItems);
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "文件数量: %u", numItems);
        
        AccumulateFileSizes(archive, numItems, uncompressedSize);
        
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✅ 获取成功：总文件数 %u，未压缩大小 %lu bytes (%.2f MB)", 
                    numItems, (unsigned long)*uncompressedSize, 
                    *uncompressedSize / static_cast<double>(BYTES_PER_MB));
        
        archive->Close();
        archive->Release();
        delete fileSpec;
        
        return true;
        
    } catch (const std::exception& e) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 异常: %s", e.what());
        archive->Close();
        archive->Release();
        delete fileSpec;
        return false;
    }
}

