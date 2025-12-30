#ifndef ARCHIVE_HANDLER_H
#define ARCHIVE_HANDLER_H

#include <string>
#include <functional>
#include <fstream>

// 必须先包含 Windows 兼容层
#include "Common/MyWindows.h"
#include "Common/MyUnknown.h"

#include "IArchive.h"
#include "IStream.h"
#include "ErrorCodes.h"

using ArchiveExtractCallback = std::function<void(uint64_t processed, uint64_t total, const std::string& fileName)>;

// 输入流实现
class CInFileStream:
  public IInStream,
  public IStreamGetSize
{
  std::ifstream _file;
  std::string _filePath;
  uint64_t _fileSize;
  ULONG _refCount;
  
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
class COutFileStream:
  public IOutStream
{
  FILE* _file;
  std::string _filePath;
  ULONG _refCount;
  
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
class CArchiveExtractCallback:
  public IArchiveExtractCallback
{
  IInArchive* _archiveHandler;
  std::string _directoryPath;
  std::string _sourceArchivePath;  // 源压缩包路径，用于推断文件名
  std::string _password;
  ArchiveExtractCallback _progressCallback;
  
  UInt64 _totalSize;
  UInt64 _processedSize;
  UInt64 _lastReportedProgress;  // 上次报告的进度，用于减少回调频率
  UInt32 _numFiles;
  UInt32 _currentIndex;
  ULONG _refCount;
  
  // 保存两个指针（参考 p7zip Client7z.cpp:234-235）
  COutFileStream* _outFileStreamSpec;           // 原始指针，用于调用 Close()
  ISequentialOutStream* _outFileStream;         // 接口指针，用于生命周期管理
  
public:
  
  CArchiveExtractCallback();
  virtual ~CArchiveExtractCallback();
  
  void Init(IInArchive *archiveHandler, const char *sourceArchivePath,
            const char *directoryPath, const char *password, 
            ArchiveExtractCallback callback);
  
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
  // 🔧 统一的进度报告函数，确保进度单调递增
  void ReportProgress(uint64_t processed, const std::string& message);
  
  // 辅助方法
  uint64_t GetFileSizeFromProperty(PROPVARIANT& prop, UInt32 index);
  void CalculateTotalSize();
  void ReportInitialProgress();
  std::string GetAndProcessFileName(UInt32 index);
  bool CheckAndHandleDirectory(UInt32 index, const std::string& fileName);
  uint64_t GetFileSize(UInt32 index);
  HRESULT CreateOutputFileStream(const std::string& fileName, uint64_t fileSize,
                                 ISequentialOutStream** outStream);
};

// Archive 处理器
class ArchiveHandler {
public:
    static bool ExtractArchive(
        const std::string& archivePath,
        const std::string& outputDir,
        const std::string& password,
        ArchiveExtractCallback callback,
        std::string* error,
        ArchiveError* archiveError = nullptr
    );
    
    static IInArchive* CreateArchiveHandler(
        const std::string& filePath, 
        std::string* error,
        ArchiveError* archiveError = nullptr
    );
};

#endif // ARCHIVE_HANDLER_H

