#include "LzmaUtils.h"
#include "common.h"
#include <cstring>
#include <fstream>
#include <vector>

#include "C/7zTypes.h"
#include "C/Alloc.h"
#include "C/LzmaDec.h"
#include "C/LzmaEnc.h"

// 压缩文件
// 读取输入文件数据
static bool ReadInputFile(const std::string &inputFile, std::vector<Byte> &data, size_t &fileSize, std::string *error)
{
    std::ifstream inFile(inputFile, std::ios::binary | std::ios::ate);
    if (!inFile.good()) {
        if (error) {
            *error = "无法打开输入文件: " + inputFile;
        }
        return false;
    }
    fileSize = inFile.tellg();
    inFile.seekg(0, std::ios::beg);
    data.resize(fileSize);
    inFile.read((char *)data.data(), fileSize);
    inFile.close();
    return true;
}
// 配置LZMA压缩参数
static void ConfigureLzmaProps(CLzmaEncProps &props, int level)
{
    LzmaEncProps_Init(&props);
    props.level = level;
    props.dictSize = 1 << LZMA_DICT_SIZE_BITS;
    props.lc = LZMA_LC_PARAM;
    props.lp = LZMA_LP_PARAM;
    props.pb = LZMA_PB_PARAM;
    props.fb = LZMA_FB_PARAM;
    props.numThreads = LZMA_THREAD_COUNT;
}
// 执行LZMA压缩
static bool ExecuteLzmaCompress(const std::vector<Byte> &inputData, std::vector<Byte> &outputData, SizeT &destLen,
                                int level, std::string *error)
{
    CLzmaEncProps props;
    ConfigureLzmaProps(props, level);
    SizeT propsSize = LZMA_PROPS_SIZE;
    size_t fileSize = inputData.size();
    int res = LzmaEncode(outputData.data() + LZMA_PROPS_SIZE, &destLen, inputData.data(), fileSize, &props,
                         outputData.data(), &propsSize, 0, nullptr, &g_Alloc, &g_Alloc);
    if (res != SZ_OK) {
        if (error) {
            *error = "LZMA 压缩失败，错误码: " + std::to_string(res);
        }
        return false;
    }
    return true;
}
// 写入压缩输出文件
static bool WriteCompressedFile(const std::string &outputFile, uint64_t origSize, const std::vector<Byte> &data,
                                SizeT dataLen, std::string *error)
{
    std::ofstream outFile(outputFile, std::ios::binary);
    if (!outFile.good()) {
        if (error) {
            *error = "无法创建输出文件: " + outputFile;
        }
        return false;
    }
    outFile.write((char *)&origSize, sizeof(origSize));
    outFile.write((char *)data.data(), dataLen + LZMA_PROPS_SIZE);
    outFile.close();
    return true;
}

bool LzmaUtils::CompressFile(const std::string &inputFile, const std::string &outputFile, int level,
                             LzmaProgressCallback callback, std::string *error)
{
    std::vector<Byte> inputData;
    size_t fileSize = 0;
    if (!ReadInputFile(inputFile, inputData, fileSize, error)) {
        return false;
    }
    if (callback) {
        callback(0, fileSize);
    }
    SizeT destLen = fileSize + fileSize / COMPRESSION_BUFFER_OVERHEAD + LZMA_FB_PARAM;
    std::vector<Byte> outputData(destLen + LZMA_PROPS_SIZE);
    if (!ExecuteLzmaCompress(inputData, outputData, destLen, level, error)) {
        return false;
    }
    if (callback) {
        callback(fileSize, fileSize);
    }
    return WriteCompressedFile(outputFile, fileSize, outputData, destLen, error);
}
// 解压文件
// 读取压缩文件头和数据
static bool ReadCompressedFile(const std::string &inputFile, uint64_t &origSize, std::vector<Byte> &compressedData,
                               std::string *error)
{
    std::ifstream inFile(inputFile, std::ios::binary | std::ios::ate);
    if (!inFile.good()) {
        if (error) {
            *error = "无法打开输入文件: " + inputFile;
        }
        return false;
    }
    size_t fileSize = inFile.tellg();
    inFile.seekg(0, std::ios::beg);
    if (fileSize < sizeof(uint64_t) + LZMA_PROPS_SIZE) {
        if (error) {
            *error = "文件格式错误：文件太小";
        }
        return false;
    }
    inFile.read((char *)&origSize, sizeof(origSize));
    size_t compressedSize = fileSize - sizeof(uint64_t);
    compressedData.resize(compressedSize);
    inFile.read((char *)compressedData.data(), compressedSize);
    inFile.close();
    return true;
}
// 执行LZMA解压
static bool ExecuteLzmaDecode(const std::vector<Byte> &compressedData, std::vector<Byte> &outputData, uint64_t origSize,
                              SizeT &destLen, std::string *error)
{
    destLen = origSize;
    SizeT srcLen = compressedData.size() - LZMA_PROPS_SIZE;
    ELzmaStatus status;
    int res = LzmaDecode(outputData.data(), &destLen, compressedData.data() + LZMA_PROPS_SIZE, &srcLen,
                         compressedData.data(), LZMA_PROPS_SIZE, LZMA_FINISH_END, &status, &g_Alloc);
    if (res != SZ_OK) {
        if (error) {
            *error = "LZMA 解压失败，错误码: " + std::to_string(res);
        }
        return false;
    }
    return true;
}
// 写入解压输出文件
static bool WriteDecompressedFile(const std::string &outputFile, const std::vector<Byte> &data, SizeT dataLen,
                                  std::string *error)
{
    std::ofstream outFile(outputFile, std::ios::binary);
    if (!outFile.good()) {
        if (error) {
            *error = "无法创建输出文件: " + outputFile;
        }
        return false;
    }
    outFile.write((char *)data.data(), dataLen);
    outFile.close();
    return true;
}

bool LzmaUtils::DecompressFile(const std::string &inputFile, const std::string &outputFile,
                               LzmaProgressCallback callback, std::string *error)
{
    uint64_t origSize = 0;
    std::vector<Byte> compressedData;
    if (!ReadCompressedFile(inputFile, origSize, compressedData, error)) {
        return false;
    }
    if (callback) {
        callback(0, origSize);
    }
    std::vector<Byte> outputData(origSize);
    SizeT destLen = 0;
    if (!ExecuteLzmaDecode(compressedData, outputData, origSize, destLen, error)) {
        return false;
    }
    if (callback) {
        callback(origSize, origSize);
    }
    return WriteDecompressedFile(outputFile, outputData, destLen, error);
}
