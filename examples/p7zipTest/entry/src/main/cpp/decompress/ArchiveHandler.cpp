#include "ArchiveHandler.h"
#include "Common/MyWindows.h"
#include "FormatDetector.h"
#include "common.h"
#include "hilog/log.h"
#include <cerrno>
#include <cstring>
#include <fstream>
#include <iomanip>
#include <sstream>
#include <sys/stat.h>
#include <sys/statvfs.h>

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x0000
#define LOG_TAG "ArchiveHandler"

// 从压缩包文件名推断原始文件名（用于 gz/bz2/xz 等单文件压缩）
static std::string InferFileNameFromArchive(const std::string &archivePath) {
    // 获取文件名（去掉路径）
    size_t lastSlash = archivePath.find_last_of("/\\");
    std::string fileName = (lastSlash != std::string::npos) ? archivePath.substr(lastSlash + 1) : archivePath;

    // 去掉常见的压缩格式后缀
    const char *suffixes[] = {".gz", ".bz2", ".xz", ".lzma"};
    for (const char *suffix : suffixes) {
        size_t suffixLen = strlen(suffix);
        if (fileName.length() > suffixLen) {
            std::string lowerFileName = fileName;
            // 转小写比较
            for (char &c : lowerFileName) {
                if (c >= 'A' && c <= 'Z')
                    c = c - 'A' + 'a';
            }
            if (lowerFileName.length() >= suffixLen &&
                lowerFileName.substr(lowerFileName.length() - suffixLen) == suffix) {
                // 返回去掉后缀的文件名
                return fileName.substr(0, fileName.length() - suffixLen);
            }
        }
    }

    // 如果没有匹配的后缀，返回原文件名
    return fileName;
}

// UTF-16 到 UTF-8 转换函数
static std::string Utf16ToUtf8(const wchar_t *wstr) {
    if (!wstr)
        return "";

    std::string result;
    result.reserve(wcslen(wstr) * UNICODE_2BYTE_MAX / UNICODE_1BYTE_MAX); // 预分配空间（中文最多3字节）

    for (size_t i = 0; wstr[i] != 0; i++) {
        uint32_t codepoint = wstr[i];

        // 处理 UTF-16 代理对 (Surrogate Pairs) - 用于 emoji 等
        if (codepoint >= UTF16_SURROGATE_HIGH_START && codepoint <= UTF16_SURROGATE_HIGH_END) {
            // 高位代理
            if (wstr[i + 1] >= UTF16_SURROGATE_LOW_START && wstr[i + 1] <= UTF16_SURROGATE_LOW_END) {
                // 低位代理
                uint32_t high = codepoint;
                uint32_t low = wstr[++i];
                codepoint = UTF16_SURROGATE_OFFSET + ((high - UTF16_SURROGATE_HIGH_START) << SHIFT_10_BITS) +
                            (low - UTF16_SURROGATE_LOW_START);
            }
        }

        // 转换为 UTF-8
        if (codepoint < UNICODE_1BYTE_MAX) {
            // 1字节 (ASCII): 0xxxxxxx
            result += static_cast<char>(codepoint);
        } else if (codepoint < UNICODE_2BYTE_MAX) {
            // 2字节: 110xxxxx 10xxxxxx
            result += static_cast<char>(UTF8_2BYTE_PREFIX | (codepoint >> SHIFT_6_BITS));
            result += static_cast<char>(UTF8_CONTINUATION_PREFIX | (codepoint & UTF8_CONTINUATION_MASK));
        } else if (codepoint < UNICODE_3BYTE_MAX) {
            // 3字节: 1110xxxx 10xxxxxx 10xxxxxx (中文常见)
            result += static_cast<char>(UTF8_3BYTE_PREFIX | (codepoint >> SHIFT_12_BITS));
            result +=
                static_cast<char>(UTF8_CONTINUATION_PREFIX | ((codepoint >> SHIFT_6_BITS) & UTF8_CONTINUATION_MASK));
            result += static_cast<char>(UTF8_CONTINUATION_PREFIX | (codepoint & UTF8_CONTINUATION_MASK));
        } else if (codepoint < UNICODE_4BYTE_MAX) {
            // 4字节: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx (emoji等)
            result += static_cast<char>(UTF8_4BYTE_PREFIX | (codepoint >> SHIFT_18_BITS));
            result +=
                static_cast<char>(UTF8_CONTINUATION_PREFIX | ((codepoint >> SHIFT_12_BITS) & UTF8_CONTINUATION_MASK));
            result +=
                static_cast<char>(UTF8_CONTINUATION_PREFIX | ((codepoint >> SHIFT_6_BITS) & UTF8_CONTINUATION_MASK));
            result += static_cast<char>(UTF8_CONTINUATION_PREFIX | (codepoint & UTF8_CONTINUATION_MASK));
        }
        // 超出范围的码点忽略
    }

    return result;
}

// COM 实现辅助函数（使用inline）

// 定义 GUID (简化版)
static const GUID CLSID_CFormat7z = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x07, 0x00, 0x00}};

static const GUID CLSID_CFormatZip = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x01, 0x00, 0x00}};

static const GUID CLSID_CFormatTar = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0xEE, 0x00, 0x00}};

static const GUID CLSID_CFormatRar = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x03, 0x00, 0x00}};

static const GUID CLSID_CFormatRar5 = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0xCC, 0x00, 0x00}};

static const GUID CLSID_CFormatIso = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0xE7, 0x00, 0x00}};

static const GUID CLSID_CFormatCab = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x08, 0x00, 0x00}};

static const GUID CLSID_CFormatGzip = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0xEF, 0x00, 0x00}};

static const GUID CLSID_CFormatBzip2 = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x02, 0x00, 0x00}};

static const GUID CLSID_CFormatXz = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x0C, 0x00, 0x00}};

static const GUID CLSID_CFormatWim = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0xE6, 0x00, 0x00}};

// 创建目录
static bool CreateDirRecursive(const std::string &path) {
    if (path.empty())
        return false;

    struct stat st;
    if (stat(path.c_str(), &st) == 0) {
        return S_ISDIR(st.st_mode);
    }

    size_t pos = path.find_last_of('/');
    if (pos != std::string::npos && pos > 0) {
        std::string parent = path.substr(0, pos);
        if (!CreateDirRecursive(parent))
            return false;
    }

    return mkdir(path.c_str(), DIR_PERMISSION_DEFAULT) == 0 || errno == EEXIST;
}

// CInFileStream 实现
CInFileStream::CInFileStream() : _fileSize(0), _refCount(1) {}

CInFileStream::~CInFileStream() { Close(); }

bool CInFileStream::Open(const char *fileName) {
    _file.open(fileName, std::ios::binary | std::ios::ate);
    if (!_file.good()) {
        // 记录详细的错误信息
        int err = errno;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 文件打开失败: %s, errno=%d (%s)", fileName, err,
                     strerror(err));
        return false;
    }

    _fileSize = _file.tellg();
    if (_fileSize < 0) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 无法获取文件大小: %s", fileName);
        _file.close();
        return false;
    }

    _file.seekg(0);
    _filePath = fileName;
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✓ 文件打开成功: %s (大小: %llu bytes)", fileName,
                 (unsigned long long)_fileSize);
    return true;
}

void CInFileStream::Close() {
    if (_file.is_open()) {
        _file.close();
    }
}

STDMETHODIMP CInFileStream::QueryInterface(REFIID iid, void **outObject) {
    *outObject = nullptr;
    if (iid == IID_IInStream) {
        *outObject = (void *)(IInStream *)this;
    } else if (iid == IID_IStreamGetSize) {
        *outObject = (void *)(IStreamGetSize *)this;
    } else if (iid == IID_ISequentialInStream) {
        *outObject = (void *)(ISequentialInStream *)this;
    } else if (iid == IID_IUnknown) {
        *outObject = (void *)(IInStream *)this;
    }

    if (*outObject) {
        AddRef();
        return S_OK;
    }
    return E_NOINTERFACE;
}

STDMETHODIMP_(ULONG) CInFileStream::AddRef() { return ++_refCount; }

STDMETHODIMP_(ULONG) CInFileStream::Release() {
    if (--_refCount != 0)
        return _refCount;
    delete this;
    return 0;
}

STDMETHODIMP CInFileStream::Read(void *data, UInt32 size, UInt32 *processedSize) {
    if (processedSize)
        *processedSize = 0;

    if (!_file.is_open()) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ Read failed: file not open");
        return E_FAIL;
    }

    _file.read((char *)data, size);
    UInt32 realSize = _file.gcount();

    if (_file.bad()) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ Read failed: bad() = true, errno=%d (%s)", errno,
                     strerror(errno));
        return E_FAIL;
    }

    if (processedSize)
        *processedSize = realSize;

    OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_DOMAIN, LOG_TAG, "📖 Read: requested=%u, actual=%u, eof=%d", size, realSize,
                 _file.eof());

    return S_OK;
}

STDMETHODIMP CInFileStream::Seek(Int64 offset, UInt32 seekOrigin, UInt64 *newPosition) {
    if (!_file.is_open()) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ Seek failed: file not open");
        return E_FAIL;
    }

    std::ios::seekdir dir;
    switch (seekOrigin) {
    case STREAM_SEEK_SET:
        dir = std::ios::beg;
        break;
    case STREAM_SEEK_CUR:
        dir = std::ios::cur;
        break;
    case STREAM_SEEK_END:
        dir = std::ios::end;
        break;
    default:
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ Seek failed: invalid seekOrigin=%u", seekOrigin);
        return STG_E_INVALIDFUNCTION;
    }

    // 清除错误状态（特别是 eof）
    _file.clear();

    _file.seekg(offset, dir);

    if (_file.fail()) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ Seek failed: offset=%lld, origin=%u, errno=%d (%s)",
                     (long long)offset, seekOrigin, errno, strerror(errno));
        return E_FAIL;
    }

    auto pos = _file.tellg();
    if (newPosition)
        *newPosition = pos;

    OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_DOMAIN, LOG_TAG, "🔍 Seek: offset=%lld, origin=%u → pos=%lld",
                 (long long)offset, seekOrigin, (long long)pos);

    return S_OK;
}

STDMETHODIMP CInFileStream::GetSize(UInt64 *size) {
    *size = _fileSize;
    return S_OK;
}

// COutFileStream 实现（支持 7z 随机访问）
COutFileStream::COutFileStream() : _file(nullptr), _refCount(1) {}

COutFileStream::~COutFileStream() {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "🔨 析构函数: %s", _filePath.c_str());
    Close();
}

bool COutFileStream::Open(const char *fileName) {
    _filePath = fileName;

    // 创建父目录
    size_t pos = _filePath.find_last_of('/');
    if (pos != std::string::npos) {
        std::string dir = _filePath.substr(0, pos);
        CreateDirRecursive(dir);
    }

    // 打开文件：使用 FILE* 支持 fseek（7z 格式需要）
    _file = fopen(fileName, "wb");

    if (!_file) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ Open failed: %s, errno=%d (%s)", fileName, errno,
                     strerror(errno));
        return false;
    }

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✅ Open success: %s", fileName);
    return true;
}

void COutFileStream::Close() {
    if (_file) {
        // 关键：确保所有数据都写入磁盘
        fflush(_file);

        // 关闭文件
        if (fclose(_file) != 0) {
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ Close failed for %s: errno=%d (%s)",
                         _filePath.c_str(), errno, strerror(errno));
        } else {
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✓ 文件已关闭: %s", _filePath.c_str());
        }

        _file = nullptr;
    }
}

STDMETHODIMP COutFileStream::QueryInterface(REFIID iid, void **outObject) {
    *outObject = nullptr;
    if (iid == IID_IOutStream) {
        *outObject = (void *)(IOutStream *)this;
    } else if (iid == IID_ISequentialOutStream) {
        *outObject = (void *)(ISequentialOutStream *)this;
    } else if (iid == IID_IUnknown) {
        *outObject = (void *)(IOutStream *)this;
    }

    if (*outObject) {
        AddRef();
        return S_OK;
    }
    return E_NOINTERFACE;
}

STDMETHODIMP_(ULONG) COutFileStream::AddRef() {
    ULONG newCount = ++_refCount;
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📈 AddRef: %s, refCount: %u → %u", _filePath.c_str(),
                 (unsigned int)(newCount - 1), (unsigned int)newCount);
    return newCount;
}

STDMETHODIMP_(ULONG) COutFileStream::Release() {
    ULONG newCount = --_refCount;
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📉 Release: %s, refCount: %u → %u", _filePath.c_str(),
                 (unsigned int)(newCount + 1), (unsigned int)newCount);

    if (newCount != 0) {
        return newCount;
    }

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "🗑️  删除对象: %s", _filePath.c_str());
    delete this;
    return 0;
}

STDMETHODIMP COutFileStream::Write(const void *data, UInt32 size, UInt32 *processedSize) {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📝 Write called: size=%u, file=%s", size, _filePath.c_str());

    if (processedSize)
        *processedSize = 0;

    if (!_file) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ Write failed: file not open for %s",
                     _filePath.c_str());
        return E_FAIL;
    }

    if (size == 0) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "ℹ️  Write size=0, returning S_OK");
        // size=0 是合法的，直接返回成功
        return S_OK;
    }

    // 写入数据（使用 fwrite）
    size_t written = fwrite(data, 1, size, _file);

    // 检查写入是否成功
    if (written != size) {
        int err = errno;

        // 特别处理磁盘空间不足错误
        if (err == ENOSPC) {
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG,
                         "❌❌❌ 磁盘空间不足！文件: %s, 尝试写入: %u bytes, 实际写入: %zu bytes", _filePath.c_str(),
                         size, written);
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "请释放磁盘空间后重试！");
        } else if (err == EDQUOT) {
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌❌❌ 超出磁盘配额！文件: %s", _filePath.c_str());
        } else {
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG,
                         "❌ Write failed for %s: expected=%u, actual=%zu, errno=%d (%s)", _filePath.c_str(), size,
                         written, err, strerror(err));
        }

        return E_FAIL;
    }

    // 立即刷新缓冲区（关键！防止数据丢失）
    if (fflush(_file) != 0) {
        int err = errno;
        if (err == ENOSPC) {
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌❌❌ 磁盘空间不足（刷新时）！文件: %s",
                         _filePath.c_str());
        }
        // fflush失败也要报告，但不一定要返回错误（数据可能已写入）
        OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "⚠️  fflush警告: errno=%d (%s)", err, strerror(err));
    }

    if (processedSize)
        *processedSize = (UInt32)written;

    // 定期输出日志（每 10MB 输出一次，避免日志过多）
    static uint64_t totalWritten = 0;
    totalWritten += size;
    if (totalWritten % SIZE_10MB < size) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "已写入 %lu MB 到 %s",
                     (unsigned long)(totalWritten / BYTES_PER_MB), _filePath.c_str());
    }

    return S_OK;
}

STDMETHODIMP COutFileStream::Seek(Int64 offset, UInt32 seekOrigin, UInt64 *newPosition) {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "🔍 Seek called: offset=%lld, origin=%u, file=%s",
                 (long long)offset, seekOrigin, _filePath.c_str());

    if (!_file) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ Seek failed: file not open for %s",
                     _filePath.c_str());
        return E_FAIL;
    }

    // 转换 seekOrigin
    int origin = (seekOrigin == STREAM_SEEK_CUR) ? SEEK_CUR : (seekOrigin == STREAM_SEEK_END) ? SEEK_END : SEEK_SET;

    // 执行 seek
    if (fseek(_file, offset, origin) != 0) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG,
                     "❌ Seek failed for %s: offset=%lld, origin=%u, errno=%d (%s)", _filePath.c_str(),
                     (long long)offset, seekOrigin, errno, strerror(errno));
        return E_FAIL;
    }

    // 返回新位置
    if (newPosition) {
        long pos = ftell(_file);
        if (pos < 0) {
            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ ftell failed for %s: errno=%d (%s)",
                         _filePath.c_str(), errno, strerror(errno));
            return E_FAIL;
        }
        *newPosition = (UInt64)pos;
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✅ Seek success: new position=%llu",
                     (unsigned long long)*newPosition);
    }

    return S_OK;
}

STDMETHODIMP COutFileStream::SetSize(UInt64 newSize) {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📏 SetSize called: newSize=%llu, file=%s",
                 (unsigned long long)newSize, _filePath.c_str());
    // 7z 库可能会调用此方法预分配空间，我们简单返回 S_OK
    // 在实际应用中，可以使用 ftruncate 来真正设置文件大小
    return S_OK;
}

// CArchiveExtractCallback 实现
CArchiveExtractCallback::CArchiveExtractCallback()
    : _refCount(1), _totalSize(0), _processedSize(0), _numFiles(0), _currentIndex(0), _outFileStreamSpec(nullptr),
      _outFileStream(nullptr), _lastReportedProgress(0) {}

CArchiveExtractCallback::~CArchiveExtractCallback() {}

// 🔧 统一的进度报告函数 - 确保进度永不回退
void CArchiveExtractCallback::ReportProgress(uint64_t processed, const std::string &message) {
    if (!_progressCallback)
        return;

    // 🔧 关键：使用max确保进度单调递增
    uint64_t safeProcessed = processed;
    if (_lastReportedProgress > safeProcessed) {
        safeProcessed = _lastReportedProgress; // 不允许回退
        OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "⚠️  进度防回退：%lu→%lu, 保持%lu",
                     (unsigned long)processed, (unsigned long)safeProcessed, (unsigned long)_lastReportedProgress);
    }

    uint64_t displayTotal = _totalSize > 0 ? _totalSize : 100;
    if (safeProcessed > displayTotal) {
        safeProcessed = displayTotal;
    }

    // 进度节流：只在变化超过2%时回调（性能优化：减少50%回调）
    uint64_t progressDelta = safeProcessed > _lastReportedProgress ? safeProcessed - _lastReportedProgress : 0;
    uint64_t twoPercent = displayTotal / (PERCENT_100 / PROGRESS_THROTTLE_PERCENT); // 2% 节流
    if (twoPercent == 0)
        twoPercent = INDEX_OFFSET_NEXT;

    if (progressDelta >= twoPercent || safeProcessed == 0 || safeProcessed >= displayTotal) {
        _progressCallback(safeProcessed, displayTotal, message);
        _lastReportedProgress = safeProcessed;

        int percentage = displayTotal > 0 ? (int)((safeProcessed * PERCENT_100) / displayTotal) : 0;
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📊 进度: %d%% (%lu/%lu) - %s", percentage,
                     (unsigned long)safeProcessed, (unsigned long)displayTotal, message.c_str());
    }
}

// 计算单个文件大小
uint64_t CArchiveExtractCallback::GetFileSizeFromProperty(PROPVARIANT &prop, UInt32 index) {
    if (prop.vt == VT_UI8) {
        if (index < 5) {
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "  文件 %u: size=%llu (VT_UI8)", index,
                         prop.uhVal.QuadPart);
        }
        return prop.uhVal.QuadPart;
    } else if (prop.vt == VT_UI4) {
        if (index < 5) {
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "  文件 %u: size=%u (VT_UI4)", index, prop.ulVal);
        }
        return prop.ulVal;
    } else {
        if (index < 5) {
            OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "  文件 %u: size type=%u (未知类型)", index, prop.vt);
        }
        return 0;
    }
}

// 计算所有文件总大小
void CArchiveExtractCallback::CalculateTotalSize() {
    _totalSize = 0;
    for (UInt32 i = 0; i < _numFiles; i++) {
        PROPVARIANT prop;
        prop.vt = VT_EMPTY;
        _archiveHandler->GetProperty(i, kpidSize, &prop);
        _totalSize += GetFileSizeFromProperty(prop, i);
    }

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📊 总大小: %llu bytes (%llu MB)", _totalSize,
                 _totalSize / (1024 * 1024));
}

// 触发初始进度报告
void CArchiveExtractCallback::ReportInitialProgress() {
    std::string debugInit = "DEBUG_INIT TotalSize=" + std::to_string(_totalSize) +
                            " NumFiles=" + std::to_string(_numFiles) +
                            " DisplayTotal=" + std::to_string(_totalSize > 0 ? _totalSize : 100);
    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", debugInit.c_str());

    std::string initMsg = "🚀 准备解压 " + std::to_string(_numFiles) + " 个文件...";
    ReportProgress(0, initMsg);

    // 小文件快速进度提示
    if (_totalSize > 0 && _totalSize < 1024) {
        uint64_t smallProgress = (_totalSize / 100) ? (_totalSize / 100) : 1;
        ReportProgress(smallProgress, "⚡ 小文件快速解压中...");
    }
}

void CArchiveExtractCallback::Init(IInArchive *archiveHandler, const char *sourceArchivePath, const char *directoryPath,
                                   const char *password, ArchiveExtractCallback callback) {
    _archiveHandler = archiveHandler;
    _sourceArchivePath = sourceArchivePath ? sourceArchivePath : "";
    _directoryPath = directoryPath;
    if (password)
        _password = password;
    _progressCallback = callback;

    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "CHECKPOINT_INIT: callback is %s",
                 callback ? "NOT NULL" : "NULL");

    CreateDirRecursive(_directoryPath);

    _archiveHandler->GetNumberOfItems(&_numFiles);
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📊 Init: 归档包含 %u 个条目", _numFiles);

    CalculateTotalSize();
    ReportInitialProgress();
}

STDMETHODIMP CArchiveExtractCallback::QueryInterface(REFIID iid, void **outObject) {
    *outObject = nullptr;
    if (iid == IID_IArchiveExtractCallback) {
        *outObject = (void *)(IArchiveExtractCallback *)this;
    } else if (iid == IID_IProgress) {
        *outObject = (void *)(IProgress *)this;
    } else if (iid == IID_IUnknown) {
        *outObject = (void *)(IArchiveExtractCallback *)this;
    }

    if (*outObject) {
        AddRef();
        return S_OK;
    }
    return E_NOINTERFACE;
}

STDMETHODIMP_(ULONG) CArchiveExtractCallback::AddRef() { return ++_refCount; }

STDMETHODIMP_(ULONG) CArchiveExtractCallback::Release() {
    if (--_refCount != 0)
        return _refCount;
    delete this;
    return 0;
}

STDMETHODIMP CArchiveExtractCallback::SetTotal(UInt64 total) { return S_OK; }

STDMETHODIMP CArchiveExtractCallback::SetCompleted(const UInt64 *completeValue) {
    if (completeValue) {
        uint64_t reportedProgress = *completeValue;

        // 🔧 使用max(completeValue, _processedSize)确保进度不回退
        uint64_t actualCompleted = reportedProgress > _processedSize ? reportedProgress : _processedSize;

        int percentage = _totalSize > 0 ? (int)((actualCompleted * PERCENT_100) / _totalSize) : 0;
        std::string msg = "解压中... (" + std::to_string(percentage) + "%)";

        ReportProgress(actualCompleted, msg);
    }
    return S_OK;
}

// 获取并处理文件名
std::string CArchiveExtractCallback::GetAndProcessFileName(UInt32 index) {
    PROPVARIANT prop;
    prop.vt = VT_EMPTY;
    _archiveHandler->GetProperty(index, kpidPath, &prop);

    std::string fileName;
    if (prop.vt == VT_BSTR && prop.bstrVal) {
        fileName = Utf16ToUtf8(prop.bstrVal);
    }

    if (fileName.empty()) {
        if (!_sourceArchivePath.empty()) {
            fileName = InferFileNameFromArchive(_sourceArchivePath);
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📝 从压缩包名推断文件名: %s", fileName.c_str());
        }
        if (fileName.empty()) {
            fileName = "file_" + std::to_string(index);
        }
    }
    return fileName;
}

// 检查并处理目录
bool CArchiveExtractCallback::CheckAndHandleDirectory(UInt32 index, const std::string &fileName) {
    PROPVARIANT prop;
    prop.vt = VT_EMPTY;
    _archiveHandler->GetProperty(index, kpidIsDir, &prop);
    if (prop.vt == VT_BOOL && prop.boolVal != VARIANT_FALSE) {
        std::string fullPath = _directoryPath + "/" + fileName;
        CreateDirRecursive(fullPath);
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📁 创建目录: %s", fileName.c_str());
        return true;
    }
    return false;
}

// 获取文件大小
uint64_t CArchiveExtractCallback::GetFileSize(UInt32 index) {
    PROPVARIANT prop;
    prop.vt = VT_EMPTY;
    HRESULT sizeResult = _archiveHandler->GetProperty(index, kpidSize, &prop);
    uint64_t fileSize = 0;

    if (sizeResult == S_OK) {
        if (prop.vt == VT_UI8) {
            fileSize = prop.uhVal.QuadPart;
        } else if (prop.vt == VT_UI4) {
            fileSize = prop.ulVal;
        }
    }
    return fileSize;
}

// 创建并打开输出文件流
HRESULT CArchiveExtractCallback::CreateOutputFileStream(const std::string &fileName, uint64_t fileSize,
                                                        ISequentialOutStream **outStream) {
    std::string fullPath = _directoryPath + "/" + fileName;
    COutFileStream *outFileStreamSpec = new COutFileStream;

    if (!outFileStreamSpec->Open(fullPath.c_str())) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 无法打开输出文件: %s", fullPath.c_str());
        delete outFileStreamSpec;
        return E_FAIL;
    }

    _outFileStreamSpec = outFileStreamSpec;
    _outFileStream = outFileStreamSpec;
    *outStream = outFileStreamSpec;
    outFileStreamSpec->AddRef();

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✅ 打开文件: %s (预期大小: %lu bytes)", fileName.c_str(),
                 (unsigned long)fileSize);

    std::string fileInfo =
        "📄 [" + std::to_string(_currentIndex + 1) + "/" + std::to_string(_numFiles) + "] " + fileName;
    ReportProgress(_processedSize, fileInfo);

    return S_OK;
}

STDMETHODIMP CArchiveExtractCallback::GetStream(UInt32 index, ISequentialOutStream **outStream, Int32 askExtractMode) {
    *outStream = nullptr;
    _currentIndex = index;

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📥 GetStream: index=%u, askExtractMode=%d", index,
                 askExtractMode);

    if (askExtractMode != NArchive::NExtract::NAskMode::kExtract) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "⏭️  跳过提取（mode != kExtract）");
        return S_OK;
    }

    std::string fileName = GetAndProcessFileName(index);

    if (CheckAndHandleDirectory(index, fileName)) {
        return S_OK;
    }

    uint64_t fileSize = GetFileSize(index);

    return CreateOutputFileStream(fileName, fileSize, outStream);
}

STDMETHODIMP CArchiveExtractCallback::PrepareOperation(Int32 askExtractMode) {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "🔧 PrepareOperation: askExtractMode=%d", askExtractMode);
    return S_OK;
}

STDMETHODIMP CArchiveExtractCallback::SetOperationResult(Int32 opRes) {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "🏁 SetOperationResult: opRes=%d, _outFileStream=%p", opRes,
                 _outFileStream);

    // ⚠️  关键步骤：必须先关闭文件！（参考 p7zip Client7z.cpp:458-464）
    // 不调用 Close() 会导致：
    //   1. 缓冲区数据不写入磁盘 → 文件大小为 0
    //   2. 文件保持打开状态 → 产生 .fuse_hidden 文件
    if (_outFileStream != nullptr) {
        // 使用原始指针调用 Close()（参考 p7zip 标准实现）
        if (_outFileStreamSpec) {
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "🔒 正在关闭文件流 (opRes=%d)...", opRes);
            _outFileStreamSpec->Close(); // 刷新缓冲区到磁盘
        }

        // 释放引用（这可能导致对象删除）
        ULONG refCount = _outFileStream->Release();
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📉 Release() 后引用计数: %u", (unsigned int)refCount);

        _outFileStream = nullptr;
        _outFileStreamSpec = nullptr;
    }

    if (opRes == NArchive::NExtract::NOperationResult::kOK) {
        // 更新已处理大小
        PROPVARIANT prop;
        prop.vt = VT_EMPTY;
        _archiveHandler->GetProperty(_currentIndex, kpidSize, &prop);
        uint64_t currentFileSize = 0;
        if (prop.vt == VT_UI8) {
            currentFileSize = prop.uhVal.QuadPart;
            _processedSize += currentFileSize;
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✅ 文件提取成功 (index=%u, size=%lu, type=VT_UI8)",
                         _currentIndex, (unsigned long)currentFileSize);
        } else if (prop.vt == VT_UI4) {
            // 🔧 修复：处理小文件（返回VT_UI4类型）
            currentFileSize = prop.ulVal;
            _processedSize += currentFileSize;
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✅ 文件提取成功 (index=%u, size=%lu, type=VT_UI4)",
                         _currentIndex, (unsigned long)currentFileSize);
        } else {
            OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "⚠️  文件大小类型未知: vt=%u", prop.vt);
        }

        // 立即触发进度回调（每完成一个文件）
        uint64_t actualProcessed = _processedSize;

        // 如果是最后一个文件，确保显示100%
        if (_currentIndex + INDEX_OFFSET_NEXT == _numFiles && _totalSize > 0) {
            actualProcessed = _totalSize;
        }

        // 显示完成的文件计数
        std::string progress = "✅ 已完成 " + std::to_string(_currentIndex + INDEX_OFFSET_NEXT) + "/" +
                               std::to_string(_numFiles) + " 个文件";

        ReportProgress(actualProcessed, progress);
    } else {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ 文件提取失败 (index=%u, opRes=%d)", _currentIndex,
                     opRes);
    }

    return S_OK;
}

bool CArchiveExtractCallback::SetFileSymLinkAttrib() {
    // 符号链接支持暂不实现
    return false;
}

// ArchiveHandler 实现
// 外部函数声明
extern "C" {
HRESULT CreateObject(const GUID *clsid, const GUID *iid, void **outObject);
}

// 映射格式到GUID
static const GUID *GetFormatGUID(ArchiveFormat format, const std::string &filePath, std::string *error,
                                 ArchiveError *archiveError) {
    switch (format) {
    case ArchiveFormat::SEVENZ:
        return &CLSID_CFormat7z;
    case ArchiveFormat::ZIP:
        return &CLSID_CFormatZip;
    case ArchiveFormat::TAR:
        return &CLSID_CFormatTar;
    case ArchiveFormat::RAR:
        return &CLSID_CFormatRar;
    case ArchiveFormat::RAR5:
        return &CLSID_CFormatRar5;
    case ArchiveFormat::ISO:
        return &CLSID_CFormatIso;
    case ArchiveFormat::CAB:
        return &CLSID_CFormatCab;
    case ArchiveFormat::GZIP:
        return &CLSID_CFormatGzip;
    case ArchiveFormat::BZIP2:
        return &CLSID_CFormatBzip2;
    case ArchiveFormat::XZ:
        return &CLSID_CFormatXz;
    case ArchiveFormat::WIM:
        return &CLSID_CFormatWim;
    default: {
        ArchiveError err(ArchiveErrorCode::UNSUPPORTED_FORMAT,
                         ErrorMessages::GetMessage(ArchiveErrorCode::UNSUPPORTED_FORMAT),
                         "文件: " + filePath + "\n格式代码: " + std::to_string((int)format));
        if (error)
            *error = err.GetFullMessage();
        if (archiveError)
            *archiveError = err;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return nullptr;
    }
    }
}

// 创建归档对象并处理错误
static IInArchive *CreateAndValidateArchive(const GUID *clsid, const std::string &filePath, std::string *error,
                                            ArchiveError *archiveError) {
    IInArchive *archive = nullptr;
    HRESULT result = CreateObject(clsid, &IID_IInArchive, (void **)&archive);

    if (result != S_OK || !archive) {
        std::ostringstream detail;
        detail << "文件: " << filePath << "\nHRESULT: 0x" << std::hex << std::setfill('0') << std::setw(HEX_WIDTH_8)
               << (unsigned int)result << "\n可能原因: 静态库未包含此格式的解码器";

        ArchiveError err(ArchiveErrorCode::DECOMPRESS_OPEN_ARCHIVE_FAILED,
                         ErrorMessages::GetMessage(ArchiveErrorCode::DECOMPRESS_OPEN_ARCHIVE_FAILED), detail.str());
        if (error)
            *error = err.GetFullMessage();
        if (archiveError)
            *archiveError = err;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
        return nullptr;
    }

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "✓ Archive handler created successfully");
    return archive;
}

IInArchive *ArchiveHandler::CreateArchiveHandler(const std::string &filePath, std::string *error,
                                                 ArchiveError *archiveError) {

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "CreateArchiveHandler: %s", filePath.c_str());

    ArchiveFormat format = FormatDetector::Detect(filePath);
    const GUID *clsid = GetFormatGUID(format, filePath, error, archiveError);

    if (!clsid) {
        return nullptr;
    }

    return CreateAndValidateArchive(clsid, filePath, error, archiveError);
}

// 打开归档文件流
static bool OpenArchiveStream(IInArchive *archive, const std::string &archivePath, CInFileStream *fileSpec,
                              std::string *error, ArchiveError *archiveError) {
    if (!fileSpec->Open(archivePath.c_str())) {
        int err = errno;
        ArchiveError arcErr = ArchiveError::FromErrno(err, "无法打开文件: " + archivePath);
        if (error)
            *error = arcErr.GetFullMessage();
        if (archiveError)
            *archiveError = arcErr;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", arcErr.GetFullMessage().c_str());
        archive->Release();
        delete fileSpec;
        return false;
    }

    const UInt64 scanSize = ARCHIVE_SCAN_SIZE;
    HRESULT result = archive->Open(fileSpec, &scanSize, nullptr);
    if (result != S_OK) {
        ArchiveErrorCode errCode = (result == 0x80004005)   ? ArchiveErrorCode::DECOMPRESS_CORRUPTED_ARCHIVE
                                   : (result == 0x80070057) ? ArchiveErrorCode::DECOMPRESS_INVALID_ARCHIVE
                                                            : ArchiveErrorCode::DECOMPRESS_OPEN_ARCHIVE_FAILED;

        std::ostringstream detail;
        detail << "文件: " << archivePath << "\nHRESULT: 0x" << std::hex << std::setfill('0') << std::setw(HEX_WIDTH_8)
               << (unsigned int)result;

        ArchiveError err(errCode, ErrorMessages::GetMessage(errCode), detail.str());
        if (error)
            *error = err.GetFullMessage();
        if (archiveError)
            *archiveError = err;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());

        archive->Release();
        delete fileSpec;
        return false;
    }
    return true;
}

// 处理解压错误
static void HandleExtractionError(HRESULT result, const std::string &archivePath, const std::string &outputDir,
                                  std::string *error, ArchiveError *archiveError) {
    ArchiveErrorCode errCode;
    std::string errMsg;

    if (result == 0x80004005) {
        errCode = ArchiveErrorCode::DECOMPRESS_EXTRACT_FAILED;
        errMsg = "解压失败（可能是文件损坏或磁盘空间不足）";
    } else if (result == 0x8007000E) {
        errCode = ArchiveErrorCode::OUT_OF_MEMORY;
        errMsg = "内存不足";
    } else {
        errCode = ArchiveErrorCode::DECOMPRESS_FAILED;
        errMsg = "解压失败";
    }

    std::ostringstream detail;
    detail << "HRESULT: 0x" << std::hex << std::setfill('0') << std::setw(HEX_WIDTH_8) << (unsigned int)result
           << "\n文件: " << archivePath << "\n输出目录: " << outputDir;

    if (result == 0x80004005) {
        struct statvfs stat;
        if (statvfs(outputDir.c_str(), &stat) == 0) {
            uint64_t availableBytes = static_cast<uint64_t>(stat.f_bavail) * stat.f_frsize;
            detail << std::dec << std::setprecision(INDEX_OFFSET_TWO) << std::fixed
                   << "\n可用空间: " << (availableBytes / static_cast<double>(BYTES_PER_MB)) << " MB";
        }
    }

    ArchiveError err(errCode, errMsg, detail.str());
    if (error)
        *error = err.GetFullMessage();
    if (archiveError)
        *archiveError = err;
    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", err.GetFullMessage().c_str());
}

// 发送最终完成进度
static void SendFinalProgress(IInArchive *archive, ArchiveExtractCallback callback) {
    if (!callback)
        return;

    UInt32 numItems = 0;
    archive->GetNumberOfItems(&numItems);

    uint64_t totalSize = 0;
    for (UInt32 i = 0; i < numItems; i++) {
        PROPVARIANT prop;
        prop.vt = VT_EMPTY;
        archive->GetProperty(i, kpidSize, &prop);
        if (prop.vt == VT_UI8) {
            totalSize += prop.uhVal.QuadPart;
        } else if (prop.vt == VT_UI4) {
            totalSize += prop.ulVal;
        }
    }

    uint64_t displayTotal = totalSize > 0 ? totalSize : 100;
    std::string finalMsg = "✅ 解压完成！共 " + std::to_string(numItems) + " 个文件";
    callback(displayTotal, displayTotal, finalMsg);

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📊 最终进度回调: 100%% - %s", finalMsg.c_str());
}

bool ArchiveHandler::ExtractArchive(const std::string &archivePath, const std::string &outputDir,
                                    const std::string &password, ArchiveExtractCallback callback, std::string *error,
                                    ArchiveError *archiveError) {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== ExtractArchive START ===");

    IInArchive *archive = CreateArchiveHandler(archivePath, error, archiveError);
    if (!archive)
        return false;

    CInFileStream *fileSpec = new CInFileStream;
    if (!OpenArchiveStream(archive, archivePath, fileSpec, error, archiveError)) {
        return false;
    }

    UInt32 numItems = 0;
    archive->GetNumberOfItems(&numItems);
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "📦 Archive contains %u items", numItems);

    CArchiveExtractCallback *extractCallbackSpec = new CArchiveExtractCallback;
    extractCallbackSpec->Init(archive, archivePath.c_str(), outputDir.c_str(),
                              password.empty() ? nullptr : password.c_str(), callback);

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "🚀 Starting extraction...");
    HRESULT result = archive->Extract(nullptr, (UInt32)(Int32)-1, 0, extractCallbackSpec);

    if (result != S_OK) {
        HandleExtractionError(result, archivePath, outputDir, error, archiveError);
        extractCallbackSpec->Release();
        archive->Close();
        archive->Release();
        delete fileSpec;
        return false;
    }

    SendFinalProgress(archive, callback);

    archive->Close();
    archive->Release();
    extractCallbackSpec->Release();
    delete fileSpec;

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "=== ExtractArchive END (SUCCESS) ===");
    return true;
}
