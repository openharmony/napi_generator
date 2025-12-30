#ifndef FORMAT_DETECTOR_H
#define FORMAT_DETECTOR_H

#include <string>

enum class ArchiveFormat {
    LZMA,      // .lzma
    LZMA86,    // .lzma86
    XZ,        // .xz
    GZIP,      // .gz
    BZIP2,     // .bz2
    SEVENZ,    // .7z
    ZIP,       // .zip
    TAR,       // .tar
    RAR,       // .rar (RAR4)
    RAR5,      // .rar (RAR5)
    ISO,       // .iso
    CAB,       // .cab
    WIM,       // .wim
    UNKNOWN
};

class FormatDetector {
public:
    // 根据文件头魔数检测格式
    static ArchiveFormat DetectBySignature(const std::string& filePath);
    
    // 根据文件扩展名检测格式
    static ArchiveFormat DetectByExtension(const std::string& filePath);
    
    // 综合检测（优先魔数，后备扩展名）
    static ArchiveFormat Detect(const std::string& filePath);
    
    // 获取格式名称
    static std::string GetFormatName(ArchiveFormat format);
};

#endif // FORMAT_DETECTOR_H

