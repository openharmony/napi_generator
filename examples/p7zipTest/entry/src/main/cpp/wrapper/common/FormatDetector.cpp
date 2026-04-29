#include "FormatDetector.h"
#include "common.h"
#include <algorithm>
#include <cstring>
#include <fstream>
#include <unordered_map>
// 文件魔数定义
static const unsigned char MAGIC_7Z[] = {0x37, 0x7A, 0xBC, 0xAF, 0x27, 0x1C};
static const unsigned char MAGIC_ZIP[] = {0x50, 0x4B, 0x03, 0x04};
static const unsigned char MAGIC_ZIP_EMPTY[] = {0x50, 0x4B, 0x05, 0x06};
static const unsigned char MAGIC_ZIP_SPANNED[] = {0x50, 0x4B, 0x07, 0x08};
static const unsigned char MAGIC_RAR[] = {0x52, 0x61, 0x72, 0x21, 0x1A, 0x07};
static const unsigned char MAGIC_RAR5[] = {0x52, 0x61, 0x72, 0x21, 0x1A, 0x07, 0x01, 0x00};
static const unsigned char MAGIC_GZIP[] = {0x1F, 0x8B};
static const unsigned char MAGIC_BZIP2[] = {0x42, 0x5A, 0x68};
static const unsigned char MAGIC_XZ[] = {0xFD, 0x37, 0x7A, 0x58, 0x5A, 0x00};
static const unsigned char MAGIC_LZMA[] = {0x5D, 0x00, 0x00};
static const unsigned char MAGIC_ISO[] = {0x43, 0x44, 0x30, 0x30, 0x31}; // at offset 0x8001 or 0x8801 or 0x9001
static const unsigned char MAGIC_CAB[] = {0x4D, 0x53, 0x43, 0x46};
static const unsigned char MAGIC_WIM[] = {0x4D, 0x53, 0x57, 0x49, 0x4D, 0x00, 0x00, 0x00}; // "MSWIM\0\0\0"
// 读取文件头数据
static bool ReadFileHeader(const std::string &filePath, unsigned char *header, size_t headerSize, size_t &bytesRead)
{
    std::ifstream file(filePath, std::ios::binary);
    if (!file.good()) {
        return false;
    }
    file.read(reinterpret_cast<char *>(header), headerSize);
    bytesRead = file.gcount();
    file.close();
    return bytesRead >= MIN_HEADER_SIZE;
}

// 魔数检查规则结构
struct MagicCheckRule {
    const unsigned char *magic;
    size_t size;
    ArchiveFormat format;
};

// 检查 ZIP 格式（包含多个魔数变体）
static bool IsZipFormat(const unsigned char *header, size_t bytesRead)
{
    if (bytesRead < MAGIC_ZIP_SIZE) {
        return false;
    }
    return memcmp(header, MAGIC_ZIP, MAGIC_ZIP_SIZE) == 0 ||
           memcmp(header, MAGIC_ZIP_EMPTY, MAGIC_ZIP_SIZE) == 0 ||
           memcmp(header, MAGIC_ZIP_SPANNED, MAGIC_ZIP_SIZE) == 0;
}

// 检查 LZMA 格式（特殊的字节检查）
static bool IsLzmaFormat(const unsigned char *header, size_t bytesRead)
{
    if (bytesRead < MAGIC_LZMA_SIZE) {
        return false;
    }
    return header[0] == 0x5D && header[1] == 0x00 && header[LZMA_HEADER_INDEX_2] == 0x00;
}

// 检查基本格式魔数
static ArchiveFormat CheckBasicFormats(const unsigned char *header, size_t bytesRead)
{
    // ZIP 格式特殊处理（多个魔数）
    if (IsZipFormat(header, bytesRead)) {
        return ArchiveFormat::ZIP;
    }
    
    // LZMA 格式特殊处理（多字节检查）
    if (IsLzmaFormat(header, bytesRead)) {
        return ArchiveFormat::LZMA;
    }
    
    // 标准魔数检查规则表
    static const MagicCheckRule rules[] = {
        {MAGIC_7Z, MAGIC_7Z_SIZE, ArchiveFormat::SEVENZ},
        {MAGIC_RAR5, MAGIC_RAR5_SIZE, ArchiveFormat::RAR5},
        {MAGIC_RAR, MAGIC_RAR_SIZE, ArchiveFormat::RAR},
        {MAGIC_GZIP, MAGIC_GZIP_SIZE, ArchiveFormat::GZIP},
        {MAGIC_BZIP2, MAGIC_BZIP2_SIZE, ArchiveFormat::BZIP2},
        {MAGIC_XZ, MAGIC_XZ_SIZE, ArchiveFormat::XZ},
        {MAGIC_CAB, MAGIC_CAB_SIZE, ArchiveFormat::CAB},
        {MAGIC_WIM, MAGIC_WIM_SIZE, ArchiveFormat::WIM}
    };
    
    // 遍历规则表进行检查
    for (const auto &rule : rules) {
        if (bytesRead >= rule.size && memcmp(header, rule.magic, rule.size) == 0) {
            return rule.format;
        }
    }
    
    return ArchiveFormat::UNKNOWN;
}
// 检查TAR格式
static ArchiveFormat CheckTarFormat(const std::string &filePath)
{
    std::ifstream tarFile(filePath, std::ios::binary);
    tarFile.seekg(TAR_USTAR_OFFSET);
    char ustar[ARRAY_SIZE_SIX] = {0};
    tarFile.read(ustar, ARRAY_SIZE_FIVE);
    return (strcmp(ustar, "ustar") == 0) ? ArchiveFormat::TAR : ArchiveFormat::UNKNOWN;
}
// 检查ISO格式
static ArchiveFormat CheckIsoFormat(const std::string &filePath)
{
    std::ifstream isoFile(filePath, std::ios::binary);
    if (!isoFile.good()) {
        return ArchiveFormat::UNKNOWN;
    }
    const size_t offsets[] = {ISO_MAGIC_OFFSET_1, ISO_MAGIC_OFFSET_2, ISO_MAGIC_OFFSET_3};
    unsigned char cdMagic[ISO_MAGIC_SIZE];
    for (size_t offset : offsets) {
        isoFile.seekg(offset);
        isoFile.read(reinterpret_cast<char *>(cdMagic), ISO_MAGIC_SIZE);
        if (isoFile.gcount() == ISO_MAGIC_SIZE && memcmp(cdMagic, MAGIC_ISO, ISO_MAGIC_SIZE) == 0) {
            return ArchiveFormat::ISO;
        }
    }
    return ArchiveFormat::UNKNOWN;
}

ArchiveFormat FormatDetector::DetectBySignature(const std::string &filePath)
{
    unsigned char header[HEADER_BUFFER_SIZE] = {0};
    size_t bytesRead = 0;
    if (!ReadFileHeader(filePath, header, sizeof(header), bytesRead)) {
        return ArchiveFormat::UNKNOWN;
    }
    ArchiveFormat format = CheckBasicFormats(header, bytesRead);
    if (format != ArchiveFormat::UNKNOWN) {
        return format;
    }
    if (bytesRead >= TAR_USTAR_CHECK_SIZE) {
        format = CheckTarFormat(filePath);
        if (format != ArchiveFormat::UNKNOWN) {
            return format;
        }
    }
    return CheckIsoFormat(filePath);
}

ArchiveFormat FormatDetector::DetectByExtension(const std::string &filePath)
{
    // 扩展名到格式的映射表（静态初始化，只创建一次）
    static const std::unordered_map<std::string, ArchiveFormat> extensionMap = {
        // 基本格式
        {"7z", ArchiveFormat::SEVENZ},
        {"zip", ArchiveFormat::ZIP},
        {"jar", ArchiveFormat::ZIP},
        {"apk", ArchiveFormat::ZIP},
        {"rar", ArchiveFormat::RAR},
        {"gz", ArchiveFormat::GZIP},
        {"gzip", ArchiveFormat::GZIP},
        {"bz2", ArchiveFormat::BZIP2},
        {"bzip2", ArchiveFormat::BZIP2},
        {"xz", ArchiveFormat::XZ},
        {"lzma", ArchiveFormat::LZMA},
        {"lzma86", ArchiveFormat::LZMA86},
        {"tar", ArchiveFormat::TAR},
        {"iso", ArchiveFormat::ISO},
        {"img", ArchiveFormat::ISO},
        {"cab", ArchiveFormat::CAB},
        {"wim", ArchiveFormat::WIM},
        {"swm", ArchiveFormat::WIM},
        {"esd", ArchiveFormat::WIM},
        // 复合扩展名
        {"tgz", ArchiveFormat::GZIP},
        {"tpz", ArchiveFormat::GZIP},
        {"tbz", ArchiveFormat::BZIP2},
        {"tbz2", ArchiveFormat::BZIP2},
        {"txz", ArchiveFormat::XZ}
    };

    // 获取小写扩展名
    size_t dotPos = filePath.find_last_of('.');
    if (dotPos == std::string::npos) {
        return ArchiveFormat::UNKNOWN;
    }
    std::string ext = filePath.substr(dotPos + 1);
    std::transform(ext.begin(), ext.end(), ext.begin(), ::tolower);
    
    // 在映射表中查找
    auto it = extensionMap.find(ext);
    if (it != extensionMap.end()) {
        return it->second;
    }
    
    return ArchiveFormat::UNKNOWN;
}

ArchiveFormat FormatDetector::Detect(const std::string &filePath)
{
    // 优先通过魔数检测
    ArchiveFormat format = DetectBySignature(filePath);
    // 如果魔数检测失败，使用扩展名
    if (format == ArchiveFormat::UNKNOWN) {
        format = DetectByExtension(filePath);
    }
    return format;
}

std::string FormatDetector::GetFormatName(ArchiveFormat format)
{
    switch (format) {
        case ArchiveFormat::SEVENZ:
            return "7z";
        case ArchiveFormat::ZIP:
            return "Zip";
        case ArchiveFormat::RAR:
            return "RAR";
        case ArchiveFormat::RAR5:
            return "RAR5";
        case ArchiveFormat::GZIP:
            return "Gzip";
        case ArchiveFormat::BZIP2:
            return "Bzip2";
        case ArchiveFormat::XZ:
            return "XZ";
        case ArchiveFormat::LZMA:
            return "LZMA";
        case ArchiveFormat::TAR:
            return "Tar";
        case ArchiveFormat::ISO:
            return "ISO";
        case ArchiveFormat::CAB:
            return "CAB";
        case ArchiveFormat::WIM:
            return "WIM";
        case ArchiveFormat::LZMA86:
            return "LZMA86";
        default:
            return "Unknown";
    }
}
