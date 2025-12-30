#include "ArchiveCompressor.h"
#include "ArchiveHandler.h"
#include "C/Alloc.h"
#include "C/LzmaEnc.h"
#include "Common/MyUnknown.h"
#include "Common/MyWindows.h"
#include "ErrorCodes.h"
#include "IArchive.h"
#include "ICoder.h"
#include "IProgress.h"
#include "IStream.h"
#include "PropID.h"
#include "common.h"
#include "hilog/log.h"
#include <algorithm>
#include <codecvt>
#include <cstring>
#include <dirent.h>
#include <errno.h>
#include <filesystem>
#include <fstream>
#include <iomanip>
#include <locale>
#include <sstream>
#include <sys/stat.h>
#include <sys/statvfs.h>

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x0000
#define LOG_TAG "ArchiveCompressor"

// UTF-8 编码转换工具函数
// UTF-8 字符串转换为 wstring (用于压缩时设置文件名)
static std::wstring Utf8ToWstring(const std::string &utf8Str)
{
    if (utf8Str.empty()) {
        return std::wstring();
    }
    std::wstring result;
    result.reserve(utf8Str.size());
    size_t i = 0;
    while (i < utf8Str.size()) {
        uint32_t codepoint = 0;
        unsigned char c = utf8Str[i];
        if ((c & UTF8_1BYTE_MASK) == 0) {
            // 单字节 ASCII (0xxxxxxx)
            codepoint = c;
            i += INDEX_OFFSET_NEXT;
        } else if ((c & UTF8_2BYTE_MASK) == UTF8_2BYTE_PREFIX) {
            // 双字节 (110xxxxx 10xxxxxx)
            if (i + INDEX_OFFSET_NEXT >= utf8Str.size()) {
                break;
            }
            codepoint = (c & UTF8_2BYTE_DATA_MASK) << SHIFT_6_BITS;
            codepoint |= (utf8Str[i + INDEX_OFFSET_NEXT] & UTF8_CONTINUATION_MASK);
            i += INDEX_OFFSET_TWO;
        } else if ((c & UTF8_3BYTE_MASK) == UTF8_3BYTE_PREFIX) {
            // 三字节 (1110xxxx 10xxxxxx 10xxxxxx) - 常见中文
            if (i + INDEX_OFFSET_TWO >= utf8Str.size()) {
                break;
            }
            codepoint = (c & UTF8_3BYTE_DATA_MASK) << SHIFT_12_BITS;
            codepoint |= (utf8Str[i + INDEX_OFFSET_NEXT] & UTF8_CONTINUATION_MASK) << SHIFT_6_BITS;
            codepoint |= (utf8Str[i + INDEX_OFFSET_TWO] & UTF8_CONTINUATION_MASK);
            i += INDEX_OFFSET_THREE;
        } else if ((c & UTF8_4BYTE_MASK) == UTF8_4BYTE_PREFIX) {
            // 四字节 (11110xxx 10xxxxxx 10xxxxxx 10xxxxxx)
            if (i + INDEX_OFFSET_THREE >= utf8Str.size()) {
                break;
            }
            codepoint = (c & UTF8_4BYTE_DATA_MASK) << SHIFT_18_BITS;
            codepoint |= (utf8Str[i + INDEX_OFFSET_NEXT] & UTF8_CONTINUATION_MASK) << SHIFT_12_BITS;
            codepoint |= (utf8Str[i + INDEX_OFFSET_TWO] & UTF8_CONTINUATION_MASK) << SHIFT_6_BITS;
            codepoint |= (utf8Str[i + INDEX_OFFSET_THREE] & UTF8_CONTINUATION_MASK);
            i += INDEX_OFFSET_THREE + INDEX_OFFSET_NEXT;
        } else {
            // 无效的 UTF-8 序列，跳过
            i += 1;
            continue;
        }
        // 将 codepoint 转换为 wchar_t
        if (sizeof(wchar_t) == WCHAR_SIZE_32) {
            // Linux/HarmonyOS: wchar_t 是 32 位
            result += static_cast<wchar_t>(codepoint);
        } else {
            // Windows: wchar_t 是 16 位，需要处理代理对
            if (codepoint <= UNICODE_BMP_MAX) {
                result += static_cast<wchar_t>(codepoint);
            } else {
                // 需要代理对 (surrogate pair)
                codepoint -= UTF16_SURROGATE_OFFSET;
                result += static_cast<wchar_t>(UTF16_SURROGATE_HIGH_START + (codepoint >> SHIFT_10_BITS));
                result += static_cast<wchar_t>(UTF16_SURROGATE_LOW_START + (codepoint & UTF16_SURROGATE_MASK));
            }
        }
    }
    return result;
}

// 使用 __fs::filesystem 命名空间 (HarmonyOS)
namespace fs = std::__fs::filesystem;
// 压缩更新回调实现
class CArchiveUpdateCallback : public IArchiveUpdateCallback2 {
private:
    ULONG _refCount;
    const std::vector<CompressFileItem> *_files;
    std::string _basePath;
    CompressProgressCallback _progressCallback;
    uint64_t _totalSize;
    uint64_t _processedSize;
    uint64_t _maxProcessedSize; // 新增：记录最大进度值，防止倒退
    uint32_t _currentIndex;
    bool _isFinalized; // 标记是否已完成（用于最后报告100%）
    // 嵌套类实现ICompressProgressInfo
    class CCompressProgressInfoImpl : public ICompressProgressInfo {
    private:
        CArchiveUpdateCallback *_parent;

    public:
        CCompressProgressInfoImpl(CArchiveUpdateCallback *parent) : _parent(parent) {}

        STDMETHOD(QueryInterface)(REFIID iid, void **outObject) { return _parent->QueryInterface(iid, outObject); }

        STDMETHOD_(ULONG, AddRef)() { return _parent->AddRef(); }

        STDMETHOD_(ULONG, Release)() { return _parent->Release(); }

        STDMETHOD(SetRatioInfo)(const UInt64 *inSize, const UInt64 *outSize) {
            if (inSize && outSize) {
                OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "  SetRatioInfo: in=%llu, out=%llu",
                             (unsigned long long)*inSize, (unsigned long long)*outSize);
            }
            return S_OK;
        }
    };

    CCompressProgressInfoImpl _compressProgressInfo;

public:
    CArchiveUpdateCallback(const std::vector<CompressFileItem> *files, const std::string &basePath, uint64_t totalSize,
                           CompressProgressCallback callback):
          _refCount(1), _files(files), _basePath(basePath), _progressCallback(callback), _totalSize(totalSize),
          _processedSize(0), _maxProcessedSize(0), // 初始化最大进度值
          _currentIndex(0), _isFinalized(false), // 初始化为未完成
          _compressProgressInfo(this) {}

    virtual ~CArchiveUpdateCallback() {}

    // IUnknown
    STDMETHOD(QueryInterface)(REFIID iid, void **outObject)
    {
        if (iid == IID_IArchiveUpdateCallback2) {
            *outObject = static_cast<IArchiveUpdateCallback2 *>(this);
            AddRef();
            return S_OK;
        }
        if (iid == IID_IArchiveUpdateCallback) {
            *outObject = static_cast<IArchiveUpdateCallback2 *>(this);
            AddRef();
            return S_OK;
        }
        if (iid == IID_IProgress) {
            *outObject = static_cast<IProgress *>(this);
            AddRef();
            return S_OK;
        }
        if (iid == IID_ICompressProgressInfo) {
            // Optional interface, not implemented
            *outObject = nullptr;
            return E_NOINTERFACE;
        }
        if (iid == IID_IUnknown) {
            *outObject = static_cast<IArchiveUpdateCallback2 *>(this);
            AddRef();
            return S_OK;
        }
        *outObject = nullptr;
        return E_NOINTERFACE;
    }

    STDMETHOD_(ULONG, AddRef)() { return ++_refCount; }

    STDMETHOD_(ULONG, Release)()
    {
        if (--_refCount == 0) {
            delete this;
            return 0;
        }
        return _refCount;
    }
    // IProgress
    STDMETHOD(SetTotal)(UInt64 total)
    {
        if (_totalSize == 0) {
            _totalSize = total;
        }
        return S_OK;
    }

private:
    // 辅助函数：处理正常递增进度
    void HandleNormalProgress(uint64_t currentValue, uint64_t maxDataProgress)
    {
        _maxProcessedSize = currentValue;
        if (currentValue >= _totalSize * PERCENT_95 / PERCENT_100) {
            _processedSize = maxDataProgress;
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG,
                         "[Progress] Data phase capped at %d%%: raw=%llu, display=%llu / %llu", PERCENT_95,
                         (unsigned long long)currentValue, (unsigned long long)_processedSize,
                         (unsigned long long)_totalSize);
        } else {
            _processedSize = currentValue;
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "[Progress] Normal: %llu / %llu (%.1f%%)",
                         (unsigned long long)_processedSize, (unsigned long long)_totalSize,
                         _totalSize > 0 ? (_processedSize * PERCENT_100 / _totalSize) : 0.0);
        }
    }
    // 辅助函数：处理finalize阶段进度
    void HandleFinalizeProgress(uint64_t currentValue, uint64_t maxDataProgress)
    {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG,
                     "[Progress] Finalize detected: currentValue=%llu, maxProcessed=%llu",
                     (unsigned long long)currentValue, (unsigned long long)_maxProcessedSize);
        uint64_t finalizeRange = _totalSize - maxDataProgress;
        if (_maxProcessedSize > 0 && finalizeRange > 0) {
            uint64_t finalizeProgress = (finalizeRange * currentValue) / _maxProcessedSize;
            _processedSize = maxDataProgress + std::min(finalizeProgress, finalizeRange);
        } else {
            _processedSize = maxDataProgress;
        }
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG,
                     "[Progress] Finalize: %llu / %llu (%.1f%%) [mapped from %llu]", (unsigned long long)_processedSize,
                     (unsigned long long)_totalSize, _totalSize > 0 ? (_processedSize * PERCENT_100 / _totalSize) : 0.0,
                     (unsigned long long)currentValue);
    }

public:
    STDMETHOD(SetCompleted)(const UInt64 *completeValue)
    {
        if (!completeValue) {
            return S_OK;
        }
        uint64_t currentValue = *completeValue;
        const uint64_t MAX_DATA_PROGRESS = _totalSize * PERCENT_95 / PERCENT_100;
        if (currentValue > _maxProcessedSize) {
            HandleNormalProgress(currentValue, MAX_DATA_PROGRESS);
        } else if (currentValue < _maxProcessedSize && _maxProcessedSize >= _totalSize * PERCENT_95 / PERCENT_100) {
            HandleFinalizeProgress(currentValue, MAX_DATA_PROGRESS);
        } else {
            _processedSize = _maxProcessedSize;
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "[Progress] Hold: %llu / %llu (%.1f%%)",
                         (unsigned long long)_processedSize, (unsigned long long)_totalSize,
                         _totalSize > 0 ? (_processedSize * PERCENT_100 / _totalSize) : 0.0);
        }
        std::string currentFile = (_currentIndex < _files->size()) ? (*_files)[_currentIndex].archivePath : "";
        if (_progressCallback) {
            _progressCallback(_processedSize, _totalSize, currentFile);
        }
        return S_OK;
    }
    // 在压缩完成后调用，报告真正的100%
    void ReportFinalized()
    {
        _isFinalized = true;
        _processedSize = _totalSize;
        std::string currentFile = (_currentIndex < _files->size()) ? (*_files)[_currentIndex].archivePath : "";
        if (_progressCallback) {
            _progressCallback(_totalSize, _totalSize, "完成");
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "[Progress] Finalized: 100%% complete");
        }
    }
    // IArchiveUpdateCallback
    STDMETHOD(GetUpdateItemInfo)(UInt32 index, Int32 *newData, Int32 *newProperties, UInt32 *indexInArchive)
    {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG,
                     "  GetUpdateItemInfo[%u]: newData=1, newProps=1, indexInArchive=-1", index);
        if (newData) {
            *newData = 1;
        }
        if (newProperties) {
            *newProperties = 1;
        }
        if (indexInArchive) {
            *indexInArchive = (UInt32)(Int32)-1;
        }
        return S_OK;
    }

private:
    // 辅助函数：设置文件时间属性
    void SetFileTimeProperty(PROPVARIANT *value, const std::string &path, time_t timeValue)
    {
        if (timeValue > 0) {
            value->vt = VT_FILETIME;
            uint64_t fileTime = ((uint64_t)timeValue * WINDOWS_TICK) + UNIX_TO_WINDOWS_EPOCH;
            value->filetime.dwLowDateTime = (DWORD)(fileTime & MASK_LOWER_32BITS);
            value->filetime.dwHighDateTime = (DWORD)(fileTime >> SHIFT_32_BITS);
        } else {
            value->vt = VT_EMPTY;
        }
    }
    // 辅助函数：获取文件统计信息时间戳
    time_t GetFileStatTime(const std::string &path, int timeType)
    {
        struct stat st;
        if (stat(path.c_str(), &st) != 0) {
            return 0;
        }
        if (timeType == FILE_TIME_MTIME) {
            return st.st_mtime;
        }
        if (timeType == FILE_TIME_ATIME) {
            return st.st_atime;
        }
        return st.st_ctime;
    }
    // 辅助函数：处理时间属性
    void HandleTimeProperty(PROPVARIANT *value, const CompressFileItem &item, int timeType)
    {
        time_t timeValue = GetFileStatTime(item.sourcePath, timeType);
        SetFileTimeProperty(value, item.sourcePath, timeValue);
    }

private:
    // 辅助函数：根据propID处理属性（合并简单属性设置，减少函数调用开销）
    void ProcessPropertyByType(PROPID propID, PROPVARIANT *value, const CompressFileItem &item)
    {
        switch (propID) {
            case kpidPath:
                value->vt = VT_BSTR;
                value->bstrVal = ::SysAllocString(Utf8ToWstring(item.archivePath).c_str());
                break;
            case kpidIsDir:
                value->vt = VT_BOOL;
                value->boolVal = item.isDirectory ? VARIANT_TRUE : VARIANT_FALSE;
                break;
            case kpidSize:
                value->vt = VT_UI8;
                if (!item.isDirectory) {
                    struct stat st;
                    value->uhVal.QuadPart = (stat(item.sourcePath.c_str(), &st) == 0) ? st.st_size : 0;
                } else {
                    value->uhVal.QuadPart = 0;
                }
                break;
            case kpidAttrib:
                value->vt = VT_UI4;
                value->ulVal = item.isDirectory ? FILE_ATTR_DIRECTORY : FILE_ATTR_ARCHIVE;
                break;
            case kpidMTime:
                HandleTimeProperty(value, item, FILE_TIME_MTIME);
                break;
            case kpidATime:
                HandleTimeProperty(value, item, FILE_TIME_ATIME);
                break;
            case kpidCTime:
                HandleTimeProperty(value, item, FILE_TIME_CTIME);
                break;
            case kpidIsAnti:
                value->vt = VT_BOOL;
                value->boolVal = VARIANT_FALSE;
                break;
            default:
                OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG,
                    "  GetProperty: unknown propID=%d, returning VT_EMPTY", propID);
                break;
        }
    }

public:
    STDMETHOD(GetProperty)(UInt32 index, PROPID propID, PROPVARIANT *value)
    {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "  GetProperty[%u]: propID=%d", index, propID);
        if (index >= _files->size()) {
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "  GetProperty: index out of range!");
            return E_INVALIDARG;
        }
        const auto &item = (*_files)[index];
        memset(value, 0, sizeof(PROPVARIANT));
        value->vt = VT_EMPTY;
        ProcessPropertyByType(propID, value, item);
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "  GetProperty[%u] propID=%d → vt=%d (success)", index,
                     propID, value->vt);
        return S_OK;
    }

    STDMETHOD(GetStream)(UInt32 index, ISequentialInStream **inStream)
    {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "  GetStream[%u]", index);
        if (index >= _files->size()) {
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "  GetStream: index out of range!");
            return E_INVALIDARG;
        }
        _currentIndex = index;
        const auto &item = (*_files)[index];
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "    File: %s", item.sourcePath.c_str());
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "    IsDir: %d", item.isDirectory ? 1 : 0);
        if (item.isDirectory) {
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "    → Directory, returning NULL stream");
            *inStream = nullptr;
            return S_OK;
        }
        CInFileStream *fileStream = new CInFileStream();
        if (!fileStream->Open(item.sourcePath.c_str())) {
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "    → Failed to open file stream: %s",
                         item.sourcePath.c_str());
            delete fileStream;
            return E_FAIL;
        }
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "    → Stream opened successfully: %p", fileStream);
        *inStream = fileStream;
        return S_OK;
    }

    STDMETHOD(SetOperationResult)(Int32 operationResult)
    {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "  SetOperationResult: result=%d (%s)", operationResult,
                     operationResult == 0 ? "OK" : "ERROR");
        return S_OK;
    }
    // IArchiveUpdateCallback2
    STDMETHOD(GetVolumeSize)(UInt32 index, UInt64 *size)
    {
        return S_FALSE; // 不支持分卷
    }
    STDMETHOD(GetVolumeStream)(UInt32 index, ISequentialOutStream **volumeStream)
    {
        return S_FALSE; // 不支持分卷
    }
};

// 外部函数声明（从p7zip静态库）
extern "C"
{
HRESULT CreateObject(const GUID *clsid, const GUID *iid, void **outObject);
}

// GUID 定义
static const GUID CLSID_CFormat7z = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x07, 0x00, 0x00}};
static const GUID CLSID_CFormatZip = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x01, 0x00, 0x00}};

// IOutArchive 接口 ID (已在IArchive.h中通过ARCHIVE_INTERFACE宏定义)
// extern const GUID IID_IOutArchive;
// ArchiveCompressor 实现
std::string ArchiveCompressor::GetFormatName(CompressFormat format)
{
    switch (format) {
        case CompressFormat::SEVENZ:
            return "7z";
        case CompressFormat::ZIP:
            return "Zip";
        default:
            return "Unknown";
    }
}

bool ArchiveCompressor::CompressFile(const std::string &inputFile, const std::string &outputArchive,
                                     const CompressOptions &options)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== CompressFile START ===");
    // 检查输入文件是否存在
    if (!fs::exists(inputFile)) {
        ArchiveError err(ArchiveErrorCode::FILE_NOT_FOUND, ErrorMessages::GetMessage(ArchiveErrorCode::FILE_NOT_FOUND),
                         "文件路径: " + inputFile);
        if (options.error) {
            *options.error = err.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = err;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return false;
    }
    // 检查输入文件访问权限
    ArchiveError accessErr = ArchiveError::CheckAccess(inputFile, false);
    if (!accessErr.IsSuccess()) {
        if (options.error) {
            *options.error = accessErr.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = accessErr;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", accessErr.GetFullMessage().c_str());
        return false;
    }
    // 获取文件大小并检查磁盘空间
    try {
        uint64_t inputSize = fs::file_size(inputFile);
        // 估算压缩后大小（最坏情况：无压缩）
        uint64_t estimatedSize = inputSize + SIZE_1MB; // 加1MB余量
        ArchiveError diskErr = ArchiveError::CheckDiskSpace(outputArchive, estimatedSize);
        if (!diskErr.IsSuccess()) {
            if (options.error) {
                *options.error = diskErr.GetFullMessage();
            }
            if (options.archiveError) {
                *options.archiveError = diskErr;
            }
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", diskErr.GetFullMessage().c_str());
            return false;
        }
    } catch (const std::exception &e) {
        OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "获取文件大小失败，跳过磁盘空间检查: %s", e.what());
    }
    // 检查输出路径的写权限
    ArchiveError writeErr = ArchiveError::CheckAccess(outputArchive, true);
    if (!writeErr.IsSuccess()) {
        if (options.error) {
            *options.error = writeErr.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = writeErr;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", writeErr.GetFullMessage().c_str());
        return false;
    }
    // 创建文件项
    std::vector<CompressFileItem> files;
    CompressFileItem item;
    item.sourcePath = inputFile;
    // 获取文件名作为压缩包内路径
    fs::path p(inputFile);
    item.archivePath = p.filename().string();
    item.isDirectory = fs::is_directory(inputFile);
    files.push_back(item);
    return CompressWithP7zip(files, outputArchive, options);
}

bool ArchiveCompressor::CompressFiles(const std::vector<CompressFileItem> &files, const std::string &outputArchive,
                                      const CompressOptions &options)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== CompressFiles START ===");
    if (files.empty()) {
        ArchiveError err(ArchiveErrorCode::COMPRESS_NO_INPUT_FILES,
                         ErrorMessages::GetMessage(ArchiveErrorCode::COMPRESS_NO_INPUT_FILES), "文件列表为空");
        if (options.error) {
            *options.error = err.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = err;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return false;
    }
    // 计算所有文件的总大小
    uint64_t totalSize = 0;
    for (const auto &item : files) {
        if (!item.isDirectory) {
            try {
                // 检查文件是否存在和可访问
                ArchiveError accessErr = ArchiveError::CheckAccess(item.sourcePath, false);
                if (!accessErr.IsSuccess()) {
                    if (options.error) {
                        *options.error = accessErr.GetFullMessage();
                    }
                    if (options.archiveError) {
                        *options.archiveError = accessErr;
                    }
                    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", accessErr.GetFullMessage().c_str());
                    return false;
                }
                totalSize += fs::file_size(item.sourcePath);
            } catch (const std::exception &e) {
                OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "获取文件大小失败: %s, 错误: %s",
                             item.sourcePath.c_str(), e.what());
            }
        }
    }
    // 检查磁盘空间（估算压缩后大小为原大小的70% + 1MB余量）
    uint64_t estimatedSize = (totalSize * COMPRESSION_RATIO_ESTIMATE / PERCENT_100) + SIZE_1MB;
    ArchiveError diskErr = ArchiveError::CheckDiskSpace(outputArchive, estimatedSize);
    if (!diskErr.IsSuccess()) {
        if (options.error) {
            *options.error = diskErr.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = diskErr;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", diskErr.GetFullMessage().c_str());
        return false;
    }
    // 检查输出路径写权限
    ArchiveError writeErr = ArchiveError::CheckAccess(outputArchive, true);
    if (!writeErr.IsSuccess()) {
        if (options.error) {
            *options.error = writeErr.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = writeErr;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", writeErr.GetFullMessage().c_str());
        return false;
    }
    return CompressWithP7zip(files, outputArchive, options);
}
// 辅助函数：验证目录并检查权限
static bool ValidateDirectory(const std::string &inputDir, const CompressOptions &options)
{
    struct stat st;
    if (stat(inputDir.c_str(), &st) != 0) {
        ArchiveError err = ArchiveError::FromErrno(errno, "输入目录: " + inputDir);
        if (options.error) {
            *options.error = err.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = err;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return false;
    }
    if (!S_ISDIR(st.st_mode)) {
        ArchiveError err(ArchiveErrorCode::FILE_IS_DIRECTORY, "路径不是目录", "路径: " + inputDir);
        if (options.error) {
            *options.error = err.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = err;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return false;
    }
    ArchiveError accessErr = ArchiveError::CheckAccess(inputDir, false);
    if (!accessErr.IsSuccess()) {
        if (options.error) {
            *options.error = accessErr.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = accessErr;
        } 
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", accessErr.GetFullMessage().c_str());
        return false;
    }
    return true;
}

// 辅助函数：扫描并收集目录文件
static bool CollectDirectoryFiles(const std::string &inputDir, std::vector<CompressFileItem> &files,
                                  const CompressOptions &options)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Scanning directory...");
    if (!ArchiveCompressor::ScanDirectory(inputDir, inputDir, files, options.error)) {
        ArchiveError err(ArchiveErrorCode::DIRECTORY_SCAN_FAILED,
                         ErrorMessages::GetMessage(ArchiveErrorCode::DIRECTORY_SCAN_FAILED),
                         "目录: " + inputDir + (options.error ? "\n原因: " + *options.error : ""));
        if (options.error) {
            *options.error = err.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = err;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return false;
    }
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Scan completed, found %zu items", files.size());
    if (files.empty()) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Directory is empty");
    }
    return true;
}
// 辅助函数：检查磁盘空间并验证输出权限
static bool CheckSpaceAndPermissions(const std::vector<CompressFileItem> &files, const std::string &outputArchive,
                                     const CompressOptions &options)
{
    uint64_t totalSize = 0;
    for (const auto &item : files) {
        if (!item.isDirectory) {
            try {
                totalSize += fs::file_size(item.sourcePath);
            } catch (const std::exception &e) {
                OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "获取文件大小失败: %s", item.sourcePath.c_str());
            }
        }
    }
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Total size = %.2f MB",
                 totalSize / static_cast<double>(BYTES_PER_MB));
    uint64_t estimatedSize = (totalSize * COMPRESSION_RATIO_ESTIMATE / PERCENT_100) + SIZE_1MB;
    ArchiveError diskErr = ArchiveError::CheckDiskSpace(outputArchive, estimatedSize);
    if (!diskErr.IsSuccess()) {
        if (options.error) {
            *options.error = diskErr.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = diskErr;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", diskErr.GetFullMessage().c_str());
        return false;
    }
    ArchiveError writeErr = ArchiveError::CheckAccess(outputArchive, true);
    if (!writeErr.IsSuccess()) {
        if (options.error) {
            *options.error = writeErr.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = writeErr;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", writeErr.GetFullMessage().c_str());
        return false;
    }
    return true;
}

bool ArchiveCompressor::CompressDirectory(const std::string &inputDir, const std::string &outputArchive,
                                          const CompressOptions &options)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== CompressDirectory START ===");
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Input: %s, Output: %s", inputDir.c_str(),
                 outputArchive.c_str());
    if (!ValidateDirectory(inputDir, options)) {
        return false;
    }
    std::vector<CompressFileItem> files;
    if (!CollectDirectoryFiles(inputDir, files, options)) {
        return false;
    }
    if (!CheckSpaceAndPermissions(files, outputArchive, options)) {
        return false;
    }
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Starting compression...");
    bool result = CompressWithP7zip(files, outputArchive, options);
    if (result) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== CompressDirectory SUCCESS ===");
    } else {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "=== CompressDirectory FAILED ===");
    }
    return result;
}
// 辅助函数：递归扫描目录（使用POSIX API）
static bool ScanDirectoryRecursive(const std::string &currentPath, const std::string &basePath,
                                   const std::string &relativePrefix, std::vector<CompressFileItem> &files)
{
    DIR *dir = opendir(currentPath.c_str());
    if (!dir) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "无法打开目录: %s (errno=%d)", currentPath.c_str(),
                     errno);
        return false;
    }
    struct dirent *entry;
    while ((entry = readdir(dir)) != nullptr) {
        // 跳过 . 和 ..
        if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) {
            continue;
        }
        // 构建完整路径
        std::string fullPath = currentPath;
        if (fullPath.back() != '/') {
            fullPath += '/';
        }
        fullPath += entry->d_name;
        // 构建相对路径
        std::string relativePath = relativePrefix;
        if (!relativePath.empty() && relativePath.back() != '/') {
            relativePath += '/';
        }
        relativePath += entry->d_name;
        // 获取文件信息
        struct stat st;
        if (stat(fullPath.c_str(), &st) != 0) {
            OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "无法获取文件信息，跳过: %s (errno=%d)",
                         fullPath.c_str(), errno);
            continue;
        }
        CompressFileItem item;
        item.sourcePath = fullPath;
        item.archivePath = relativePath;
        item.isDirectory = S_ISDIR(st.st_mode);
        files.push_back(item);
        // 如果是目录，递归扫描
        if (item.isDirectory) {
            if (!ScanDirectoryRecursive(fullPath, basePath, relativePath, files)) {
                OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "递归扫描子目录失败: %s", fullPath.c_str());
            }
        }
    }
    closedir(dir);
    return true;
}

bool ArchiveCompressor::ScanDirectory(const std::string &dirPath, const std::string &basePath,
                                      std::vector<CompressFileItem> &files, std::string *error)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "ScanDirectory: dirPath=%s, basePath=%s", dirPath.c_str(),
                 basePath.c_str());
    // 检查目录是否存在（使用stat而不是filesystem）
    struct stat st;
    if (stat(dirPath.c_str(), &st) != 0) {
        if (error)
            *error = "目录不存在或无法访问: " + dirPath;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "stat failed for %s, errno=%d", dirPath.c_str(), errno);
        return false;
    }
    if (!S_ISDIR(st.st_mode)) {
        if (error)
            *error = "路径不是目录: " + dirPath;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "Path is not a directory: %s", dirPath.c_str());
        return false;
    }
    // 使用C风格API递归扫描，不会抛出C++异常
    if (!ScanDirectoryRecursive(dirPath, basePath, "", files)) {
        if (error)
            *error = "扫描目录失败";
        return false;
    }
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "ScanDirectory completed, found %zu items", files.size());
    if (files.empty()) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Directory is empty: %s (this is OK)", dirPath.c_str());
        // 空目录是合法的，返回成功
    }
    return true;
}
// 获取文件总大小（静态辅助函数）
static uint64_t GetTotalSize(const std::vector<CompressFileItem> &files)
{
    uint64_t total = 0;
    for (const auto &item : files) {
        if (!item.isDirectory) {
            try {
                total += fs::file_size(item.sourcePath);
            } catch (...) {
                // 忽略错误
            }
        }
    }
    return total;
}
// 创建IOutArchive对象（静态辅助函数）
static IOutArchive *CreateOutArchive(CompressFormat format, const CompressOptions &options)
{
    const GUID *clsid = (format == CompressFormat::SEVENZ) ? &CLSID_CFormat7z : &CLSID_CFormatZip;
    IOutArchive *outArchive = nullptr;
    HRESULT result = CreateObject(clsid, &IID_IOutArchive, (void **)&outArchive);
    if (result != S_OK || !outArchive) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "CreateObject failed: 0x%08X", (unsigned int)result);
        ArchiveErrorCode errCode = ArchiveErrorCode::COMPRESS_ENCODER_NOT_AVAILABLE;
        std::ostringstream detail;
        detail << "HRESULT: 0x" << std::hex << std::setfill('0') << std::setw(HEX_WIDTH_8) << (unsigned int)result;
        if (format == CompressFormat::SEVENZ) {
            detail << "\n【7z编码器不可用】" << "\n原因: lib7z.a缺少7z编码器模块" << "\n现象: 解压7z正常，但压缩7z失败" <<
                "\n解决方案:" << "\n  1. 重新编译p7zip，包含LZMA编码器" << "\n  2. 或使用ZIP格式替代";
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "7z encoder not available in lib7z.a");
        }
        ArchiveError err(errCode, ErrorMessages::GetMessage(errCode), detail.str());
        if (options.error) {
            *options.error = err.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = err;
        }
        return nullptr;
    }
    return outArchive;
}
// 设置压缩属性（静态辅助函数）
static bool SetCompressionProperties(IOutArchive *outArchive, const CompressOptions &options)
{
    ISetProperties *setProperties = nullptr;
    HRESULT qiResult = outArchive->QueryInterface(IID_ISetProperties, (void **)&setProperties);
    if (qiResult != S_OK || !setProperties) {
        return true; // 不是错误，某些格式可能不支持
    }
    if (options.format == CompressFormat::ZIP) {
        // ZIP 格式：设置压缩级别和 UTF-8 编码（支持中文文件名）
        const wchar_t *names[] = {L"x", L"cu"};
        PROPVARIANT values[2];
        memset(values, 0, sizeof(values));
        values[0].vt = VT_UI4;
        values[0].ulVal = options.compressionLevel;
        values[1].vt = VT_BSTR;
        values[1].bstrVal = ::SysAllocString(L"on");
        HRESULT setPropResult = setProperties->SetProperties(names, values, ARRAY_SIZE_TWO);
        if (values[1].bstrVal) {
            ::SysFreeString(values[1].bstrVal);
        }
        if (setPropResult != S_OK) {
            OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "SetProperties failed: 0x%08X", setPropResult);
        } else {
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✓ ZIP UTF-8 encoding enabled (cu=on)");
        }
    } else {
        // 7z 格式：设置压缩级别和线程数
        const wchar_t *names[] = {L"x", L"mt"};
        PROPVARIANT values[ARRAY_SIZE_TWO];
        memset(values, 0, sizeof(values));
        values[0].vt = VT_UI4;
        values[0].ulVal = (options.compressionLevel > DEFAULT_COMPRESSION_LEVEL) ? DEFAULT_COMPRESSION_LEVEL
                                                                                 : options.compressionLevel;
        values[1].vt = VT_UI4;
        values[1].ulVal = LZMA_SINGLE_THREAD;
        setProperties->SetProperties(names, values, ARRAY_SIZE_TWO);
    }
    setProperties->Release();
    return true;
}
// 创建空压缩包（静态辅助函数）
static bool CreateEmptyArchive(const std::string &outputArchive, const CompressOptions &options,
                               const std::vector<CompressFileItem> &files)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Empty file list, creating empty archive...");
    COutFileStream *outStream = new COutFileStream();
    if (!outStream->Open(outputArchive.c_str())) {
        int err = errno;
        ArchiveError arcErr = ArchiveError::FromErrno(err, "无法创建输出文件: " + outputArchive);
        if (options.error) {
            *options.error = arcErr.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = arcErr;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", arcErr.GetFullMessage().c_str());
        delete outStream;
        return false;
    }
    IOutArchive *outArchive = CreateOutArchive(options.format, options);
    if (!outArchive) {
        outStream->Close();
        delete outStream;
        return false;
    }
    CArchiveUpdateCallback *updateCallback = new CArchiveUpdateCallback(&files, "", 0, options.callback);
    HRESULT result = outArchive->UpdateItems((ISequentialOutStream *)outStream, 0, updateCallback);
    // 空压缩包也报告完成
    if (result == S_OK) {
        updateCallback->ReportFinalized();
    }
    updateCallback->Release();
    outStream->Release();
    outArchive->Release();
    if (result != S_OK) {
        ArchiveErrorCode errCode = ArchiveErrorCode::COMPRESS_CREATE_ARCHIVE_FAILED;
        std::ostringstream detail;
        detail << "HRESULT: 0x" << std::hex << std::setfill('0') << std::setw(HEX_WIDTH_8) << (unsigned int)result;
        ArchiveError err(errCode, "创建空压缩包失败", detail.str());
        if (options.error) {
            *options.error = err.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = err;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return false;
    }
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== Empty archive created successfully ===");
    if (options.callback) {
        options.callback(0, 0, "完成");
    }
    return true;
}
// 映射HRESULT到错误信息（使用if-else避免类型收窄问题）
static void MapHResultToError(HRESULT result, ArchiveErrorCode &errCode, std::string &errName)
{
    if (result == static_cast<HRESULT>(HRESULT_E_NOTIMPL)) {
        errCode = ArchiveErrorCode::COMPRESS_ENCODER_NOT_AVAILABLE;
        errName = "E_NOTIMPL (编码器不可用)";
    } else if (result == static_cast<HRESULT>(HRESULT_E_FAIL)) {
        errCode = ArchiveErrorCode::COMPRESS_FAILED;
        errName = "E_FAIL";
    } else if (result == static_cast<HRESULT>(HRESULT_E_INVALIDARG)) {
        errCode = ArchiveErrorCode::INVALID_PARAMETER;
        errName = "E_INVALIDARG (无效参数)";
    } else if (result == static_cast<HRESULT>(HRESULT_E_OUTOFMEMORY)) {
        errCode = ArchiveErrorCode::OUT_OF_MEMORY;
        errName = "E_OUTOFMEMORY (内存不足)";
    } else {
        errCode = ArchiveErrorCode::COMPRESS_FAILED;
        errName = "UNKNOWN";
    }
}
// 处理压缩错误
static void HandleCompressionError(HRESULT result, const std::string &outputArchive, const CompressOptions &options)
{
    ArchiveErrorCode errCode;
    std::string errName;
    MapHResultToError(result, errCode, errName);
    std::ostringstream detail;
    detail << "HRESULT: 0x" << std::hex << std::setfill('0') << std::setw(HEX_WIDTH_8) << (unsigned int)result <<
            " (" << errName << ")\n输出文件: " << outputArchive;
    if (options.format == CompressFormat::SEVENZ && result == HRESULT_E_NOTIMPL) {
        detail << "\n\n⚠️ 提示：7z编码器不可用，请使用ZIP格式";
        OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "7z encoder not available, please use ZIP format instead");
    }
    ArchiveError err(errCode, ErrorMessages::GetMessage(errCode), detail.str());
    if (options.error) {
        *options.error = err.GetFullMessage();
    }
    if (options.archiveError) {
        *options.archiveError = err;
    }
    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
}
// 执行压缩操作（静态辅助函数）
static bool ExecuteCompression(IOutArchive *outArchive, const std::string &outputArchive,
                               const std::vector<CompressFileItem> &files, const CompressOptions &options)
{
    COutFileStream *outStream = new COutFileStream();
    if (!outStream->Open(outputArchive.c_str())) {
        int err = errno;
        ArchiveError arcErr = ArchiveError::FromErrno(err, "无法创建输出文件: " + outputArchive);
        if (options.error) {
            *options.error = arcErr.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = arcErr;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", arcErr.GetFullMessage().c_str());
        delete outStream;
        return false;
    }
    uint64_t totalSize = GetTotalSize(files);
    CArchiveUpdateCallback *updateCallback = new CArchiveUpdateCallback(&files, "", totalSize, options.callback);
    HRESULT result = outArchive->UpdateItems((ISequentialOutStream *)outStream, files.size(), updateCallback);
    if (result == S_OK) {
        updateCallback->ReportFinalized();
    }
    updateCallback->Release();
    outStream->Release();
    if (result != S_OK) {
        HandleCompressionError(result, outputArchive, options);
        return false;
    }
    return true;
}
// 使用p7zip标准接口压缩
bool ArchiveCompressor::CompressWithP7zip(const std::vector<CompressFileItem> &files, const std::string &outputArchive,
                                          const CompressOptions &options)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== CompressWithP7zip START ===");
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Files count: %zu", files.size());
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Output: %s", outputArchive.c_str());
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Format: %s, Level: %d",
                 ArchiveCompressor::GetFormatName(options.format).c_str(), options.compressionLevel);
    // 验证压缩级别
    if (options.compressionLevel < MIN_COMPRESSION_LEVEL || options.compressionLevel > MAX_COMPRESSION_LEVEL) {
        ArchiveError err(ArchiveErrorCode::COMPRESS_INVALID_LEVEL,
                         ErrorMessages::GetMessage(ArchiveErrorCode::COMPRESS_INVALID_LEVEL),
                         "压缩级别: " + std::to_string(options.compressionLevel) + " (有效范围: " +
                             std::to_string(MIN_COMPRESSION_LEVEL) + "-" + std::to_string(MAX_COMPRESSION_LEVEL) + ")");
        if (options.error) {
            *options.error = err.GetFullMessage();
        }
        if (options.archiveError) {
            *options.archiveError = err;
        }
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return false;
    }
    // 处理空文件列表（空文件夹）
    if (files.empty()) {
        return CreateEmptyArchive(outputArchive, options, files);
    }
    // 创建IOutArchive对象
    IOutArchive *outArchive = CreateOutArchive(options.format, options);
    if (!outArchive) {
        return false;
    }
    // 设置压缩属性
    if (!SetCompressionProperties(outArchive, options)) {
        outArchive->Release();
        return false;
    }
    // 执行压缩
    bool result = ExecuteCompression(outArchive, outputArchive, files, options);
    // 释放资源
    outArchive->Release();
    if (result) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== CompressWithP7zip SUCCESS ===");
    } else {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "=== CompressWithP7zip FAILED ===");
    }
    return result;
}
