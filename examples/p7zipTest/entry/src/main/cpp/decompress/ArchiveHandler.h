#ifndef ARCHIVE_HANDLER_H
#define ARCHIVE_HANDLER_H

#include <fstream>
#include <functional>
#include <string>

// 必须先包含 Windows 兼容层
#include "Common/MyUnknown.h"
#include "Common/MyWindows.h"

#include "ErrorCodes.h"
#include "IArchive.h"
#include "IStream.h"

using ArchiveExtractCallback = std::function<void(uint64_t processed, uint64_t total, const std::string &fileName)>;

// 解压选项结构体
struct ExtractOptions {
    std::string archivePath;        // 压缩包路径
    std::string outputDir;          // 输出目录
    std::string password;           // 密码（可选）
    ArchiveExtractCallback callback; // 进度回调（可选）
    std::string *error;             // 错误信息输出（可选）
    ArchiveError *archiveError;     // 详细错误信息（可选）
    
    // 构造函数，提供默认值
    ExtractOptions(const std::string &archive, const std::string &output)
        : archivePath(archive), outputDir(output), error(nullptr), archiveError(nullptr) {}
};

// 输入流实现
class CInFileStream : public IInStream, public IStreamGetSize {
    std::ifstream file;
    std::string filePath;
    uint64_t fileSize;
    ULONG refCount;

public:
    CInFileStream();
    virtual ~CInFileStream();

    bool Open(const char *fileName);
    void Close();

    STDMETHOD(Read)(void *data, UInt32 size, UInt32 *processedSize);
    STDMETHOD(Seek)(Int64 offset, UInt32 seekOrigin, UInt64 *newPosition);
    STDMETHOD(GetSize)(UInt64 *size);

    STDMETHOD(QueryInterface)(REFIID iid, void **outObject);
    STDMETHOD_(ULONG, AddRef)();
    STDMETHOD_(ULONG, Release)();
};

// 输出流实现（支持 7z 格式的随机访问）
class COutFileStream : public IOutStream {
    FILE *file;
    std::string filePath;
    ULONG refCount;

public:
    COutFileStream();
    virtual ~COutFileStream();

    bool Open(const char *fileName);
    void Close();

    STDMETHOD(Write)(const void *data, UInt32 size, UInt32 *processedSize);
    STDMETHOD(Seek)(Int64 offset, UInt32 seekOrigin, UInt64 *newPosition);
    STDMETHOD(SetSize)(UInt64 newSize);

    STDMETHOD(QueryInterface)(REFIID iid, void **outObject);
    STDMETHOD_(ULONG, AddRef)();
    STDMETHOD_(ULONG, Release)();
};

// 解压回调实现
class CArchiveExtractCallback : public IArchiveExtractCallback {
    IInArchive *archiveHandler;
    std::string directoryPath;
    std::string sourceArchivePath; // 源压缩包路径，用于推断文件名
    std::string password;
    ArchiveExtractCallback progressCallback;

    UInt64 totalSize;
    UInt64 processedSize;
    UInt64 lastReportedProgress; // 上次报告的进度，用于减少回调频率
    UInt32 numFiles;
    UInt32 currentIndex;
    ULONG refCount;

    // 保存两个指针（参考 p7zip Client7z.cpp:234-235）
    COutFileStream *outFileStreamSpec;   // 原始指针，用于调用 Close()
    ISequentialOutStream *outFileStream; // 接口指针，用于生命周期管理

public:
    CArchiveExtractCallback();
    virtual ~CArchiveExtractCallback();

    void Init(IInArchive *archiveHandler, const char *sourceArchivePath, const char *directoryPath,
              const char *password, ArchiveExtractCallback callback);

    STDMETHOD(SetTotal)(UInt64 total);
    STDMETHOD(SetCompleted)(const UInt64 *completeValue);

    STDMETHOD(GetStream)(UInt32 index, ISequentialOutStream **outStream, Int32 askExtractMode);
    STDMETHOD(PrepareOperation)(Int32 askExtractMode);
    STDMETHOD(SetOperationResult)(Int32 resultEOperationResult);
    virtual bool SetFileSymLinkAttrib();

    STDMETHOD(QueryInterface)(REFIID iid, void **outObject);
    STDMETHOD_(ULONG, AddRef)();
    STDMETHOD_(ULONG, Release)();

private:
    // 统一的进度报告函数，确保进度单调递增
    void ReportProgress(uint64_t processed, const std::string &message);
    // 辅助方法
    uint64_t GetFileSizeFromProperty(PROPVARIANT &prop, UInt32 index);
    void CalculateTotalSize();
    void ReportInitialProgress();
    std::string GetAndProcessFileName(UInt32 index);
    bool CheckAndHandleDirectory(UInt32 index, const std::string &fileName);
    uint64_t GetFileSize(UInt32 index);
    HRESULT CreateOutputFileStream(const std::string &fileName, uint64_t fileSize, ISequentialOutStream **outStream);
};

// Archive 处理器
class ArchiveHandler {
public:
    // 解压压缩包（使用 ExtractOptions 结构体）
    static bool ExtractArchive(const ExtractOptions &options);

    static IInArchive *CreateArchiveHandler(const std::string &filePath, std::string *error,
                                            ArchiveError *archiveError = nullptr);
};

#endif // ARCHIVE_HANDLER_H
