#ifndef COMMON_H
#define COMMON_H

#include <cstdint>
#include <string>      // 提供 std::string::npos
#include <sys/types.h> // 提供 mode_t 类型定义
// 文件大小相关常量
constexpr uint64_t BYTES_PER_KB = 1024;
constexpr uint64_t BYTES_PER_MB = 1024 * 1024;
constexpr uint64_t SIZE_10MB = 10 * BYTES_PER_MB;
constexpr uint64_t SIZE_50MB = 50 * BYTES_PER_MB;
constexpr uint64_t SIZE_1MB = 1 * BYTES_PER_MB;
// 百分比相关常量
constexpr int PERCENT_100 = 100;
constexpr int PERCENT_95 = 95;
constexpr int PERCENT_70 = 70;
constexpr int PERCENT_10 = 10;
constexpr int PERCENT_2 = 2;
constexpr int PROGRESS_THROTTLE_PERCENT = 2;     // 进度节流：2%
// 缓冲区和数组大小常量
constexpr size_t HEADER_BUFFER_SIZE = 32;        // 文件头缓冲区大小
constexpr size_t MIN_HEADER_SIZE = 4;            // 最小头部大小
constexpr int LZMA_FB_PARAM = 128;               // LZMA fb 参数
constexpr size_t TAR_USTAR_OFFSET = 257;         // TAR ustar 偏移
constexpr size_t TAR_USTAR_CHECK_SIZE = 262;     // TAR 检查需要的最小大小
constexpr uint32_t THREADSAFE_QUEUE_SIZE = 1024; // 线程安全函数队列大小
// 压缩相关常量
constexpr int DEFAULT_COMPRESSION_LEVEL = 5;
constexpr int MIN_COMPRESSION_LEVEL = 0;
constexpr int MAX_COMPRESSION_LEVEL = 9;
constexpr int LZMA_DICT_SIZE_BITS = 24;       // 字典大小位数 (1 << 24)
constexpr int LZMA_DICT_SIZE_BITS_SMALL = 16; // 小字典大小位数 (1 << 16)
constexpr int LZMA_LC_PARAM = 3;              // LZMA lc 参数
constexpr int LZMA_LP_PARAM = 0;              // LZMA lp 参数
constexpr int LZMA_PB_PARAM = 2;              // LZMA pb 参数
constexpr int LZMA_THREAD_COUNT = 2;          // LZMA 线程数
constexpr int LZMA_SINGLE_THREAD = 1;         // 单线程
// UTF-8 / UTF-16 编码相关常量
// UTF-8 字节标记
constexpr uint8_t UTF8_1BYTE_MASK = 0x80;     // 单字节：0xxxxxxx
constexpr uint8_t UTF8_2BYTE_MASK = 0xE0;     // 双字节：110xxxxx
constexpr uint8_t UTF8_2BYTE_PREFIX = 0xC0;
constexpr uint8_t UTF8_3BYTE_MASK = 0xF0; // 三字节：1110xxxx
constexpr uint8_t UTF8_3BYTE_PREFIX = 0xE0;
constexpr uint8_t UTF8_4BYTE_MASK = 0xF8; // 四字节：11110xxx
constexpr uint8_t UTF8_4BYTE_PREFIX = 0xF0;
constexpr uint8_t UTF8_CONTINUATION_PREFIX = 0x80; // 后续字节：10xxxxxx
constexpr uint8_t UTF8_CONTINUATION_MASK = 0x3F;   // 提取后续字节数据：00111111
// UTF-8 位操作掩码
constexpr uint8_t UTF8_2BYTE_DATA_MASK = 0x1F;     // 双字节数据部分
constexpr uint8_t UTF8_3BYTE_DATA_MASK = 0x0F;     // 三字节数据部分
constexpr uint8_t UTF8_4BYTE_DATA_MASK = 0x07;     // 四字节数据部分
// UTF-16 代理对相关
constexpr uint32_t UTF16_SURROGATE_HIGH_START = 0xD800;
constexpr uint32_t UTF16_SURROGATE_HIGH_END = 0xDBFF;
constexpr uint32_t UTF16_SURROGATE_LOW_START = 0xDC00;
constexpr uint32_t UTF16_SURROGATE_LOW_END = 0xDFFF;
constexpr uint32_t UTF16_SURROGATE_OFFSET = 0x10000;
constexpr uint32_t UTF16_SURROGATE_MASK = 0x3FF;
// Unicode 范围
constexpr uint32_t UNICODE_1BYTE_MAX = 0x80;
constexpr uint32_t UNICODE_2BYTE_MAX = 0x800;
constexpr uint32_t UNICODE_3BYTE_MAX = 0x10000;
constexpr uint32_t UNICODE_4BYTE_MAX = 0x110000;
constexpr uint32_t UNICODE_BMP_MAX = 0xFFFF;
// 文件系统相关常量
constexpr mode_t DIR_PERMISSION_DEFAULT = 0755; // 默认目录权限
constexpr uint32_t FILE_ATTR_DIRECTORY = 0x10;  // 目录属性
constexpr uint32_t FILE_ATTR_ARCHIVE = 0x80;    // 文件属性
// ISO 镜像相关常量
constexpr size_t ISO_MAGIC_OFFSET_1 = 0x8001;
constexpr size_t ISO_MAGIC_OFFSET_2 = 0x8801;
constexpr size_t ISO_MAGIC_OFFSET_3 = 0x9001;
constexpr size_t ISO_MAGIC_SIZE = 5;
// 进度报告相关常量
constexpr int PROGRESS_LOG_INTERVAL_FILES = 100;                  // 每100个文件输出一次日志
constexpr uint64_t PROGRESS_LOG_INTERVAL_MB = 10;                 // 每10MB输出一次日志
// 压缩/解压估算常量
constexpr int COMPRESSION_SIZE_MULTIPLIER = 10;                   // 解压估算：压缩包大小 * 10
constexpr int COMPRESSION_RATIO_ESTIMATE = 70;                    // 压缩比估算：70%
constexpr int DECOMPRESSION_SAFETY_MARGIN = 10;                   // 解压安全余量：10%
constexpr int COMPRESSION_BUFFER_OVERHEAD = 3;                    // 压缩缓冲区开销：1/3
// 扫描和检测相关常量
constexpr uint64_t ARCHIVE_SCAN_SIZE = 1 << 23;                   // 8MB 扫描大小
constexpr uint64_t ARCHIVE_SCAN_SIZE_ALT = 1 << 22;               // 4MB 备用扫描大小
// 文件时间类型
constexpr int FILE_TIME_MTIME = 0;                                // 修改时间
constexpr int FILE_TIME_ATIME = 1;                                // 访问时间
constexpr int FILE_TIME_CTIME = 2;                                // 创建时间
// Windows时间转换常量
constexpr uint64_t WINDOWS_TICK = 10000000ULL;                    // Windows文件时间单位：100纳秒
constexpr uint64_t UNIX_TO_WINDOWS_EPOCH = 116444736000000000ULL; // UNIX纪元到Windows纪元的差值
// HRESULT 错误码
constexpr uint32_t HRESULT_E_NOTIMPL = 0x80004001;
constexpr uint32_t HRESULT_E_FAIL = 0x80004005;
constexpr uint32_t HRESULT_E_INVALIDARG = 0x80070057;
constexpr uint32_t HRESULT_E_OUTOFMEMORY = 0x8007000E;
// 魔数相关常量（魔数长度）
constexpr size_t MAGIC_7Z_SIZE = 6;
constexpr size_t MAGIC_ZIP_SIZE = 4;
constexpr size_t MAGIC_RAR_SIZE = 6;
constexpr size_t MAGIC_RAR5_SIZE = 8;
constexpr size_t MAGIC_GZIP_SIZE = 2;
constexpr size_t MAGIC_BZIP2_SIZE = 3;
constexpr size_t MAGIC_XZ_SIZE = 6;
constexpr size_t MAGIC_LZMA_SIZE = 3;
constexpr size_t MAGIC_CAB_SIZE = 4;
constexpr size_t MAGIC_WIM_SIZE = 8;
// 位移操作常量
constexpr int SHIFT_6_BITS = 6;
constexpr int SHIFT_10_BITS = 10;
constexpr int SHIFT_12_BITS = 12;
constexpr int SHIFT_18_BITS = 18;
constexpr int SHIFT_32_BITS = 32;
// 格式化输出相关常量
constexpr int HEX_WIDTH_8 = 8;                         // 十六进制输出宽度：8位（用于HRESULT）
constexpr int DECIMAL_PRECISION_2 = 2;                 // 小数精度：2位
constexpr int LZMA_HEADER_INDEX_2 = 2;                 // LZMA头部索引2
// NAPI 参数相关常量
constexpr size_t NAPI_ARGC_ONE = 1;                    // NAPI函数参数个数：1
constexpr size_t NAPI_ARGC_TWO = 2;                    // NAPI函数参数个数：2
constexpr size_t NAPI_ARGC_THREE = 3;                  // NAPI函数参数个数：3
constexpr size_t NAPI_ARGC_FOUR = 4;                   // NAPI函数参数个数：4
constexpr size_t NAPI_CALLBACK_ARGS_ONE = 1;           // NAPI回调参数个数：1
// 初始化值常量
constexpr int INIT_ZERO = 0;                           // 初始值：0
constexpr int INIT_ONE = 1;                            // 初始值：1
constexpr uint64_t INIT_TASK_ID = 1;                   // 任务ID初始值：1
// 字符串操作常量
constexpr size_t STRING_POS_FIRST = 0;                 // 字符串第一个位置
constexpr size_t STRING_NOT_FOUND = std::string::npos; // 字符串查找未找到
// 其他常用常量
constexpr int INDEX_OFFSET_NEXT = 1;                   // 数组下一个索引偏移
constexpr int INDEX_OFFSET_TWO = 2;                    // 数组后两个索引偏移
constexpr int INDEX_OFFSET_THREE = 3;                  // 数组后三个索引偏移
constexpr int ARRAY_SIZE_ONE = 1;   // 数组大小：1
constexpr int ARRAY_SIZE_TWO = 2;   // 数组大小：2
constexpr int ARRAY_SIZE_THREE = 3; // 数组大小：3
constexpr int ARRAY_SIZE_FOUR = 4;  // 数组大小：4
constexpr int ARRAY_SIZE_FIVE = 5;  // 数组大小：5
constexpr int ARRAY_SIZE_SIX = 6;   // 数组大小：6
constexpr int WCHAR_SIZE_16 = 2; // wchar_t 16位大小
constexpr int WCHAR_SIZE_32 = 4; // wchar_t 32位大小
constexpr uint32_t MASK_LOWER_32BITS = 0xFFFFFFFFULL; // 低32位掩码
constexpr int FILE_COUNT_SINGLE = 1;  // 单个文件计数
constexpr uint64_t TASKID_ZERO = 0;   // 任务ID零值
constexpr double RATIO_ZERO = 0.0;    // 比率零值
constexpr uint64_t SIZE_ZERO = 0;     // 大小零值
constexpr int ERROR_CODE_SUCCESS = 0; // 错误码成功值
constexpr size_t VECTOR_BUFFER_OFFSET = 1; // vector缓冲区偏移量（+1用于null终止符）

#endif // COMMON_H
