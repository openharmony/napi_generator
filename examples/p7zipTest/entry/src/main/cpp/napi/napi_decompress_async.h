#ifndef NAPI_DECOMPRESS_ASYNC_H
#define NAPI_DECOMPRESS_ASYNC_H

#include "ErrorCodes.h"
#include "FormatDetector.h"
#include "UnifiedDecompressor.h"
#include "common.h"
#include "hilog/log.h"
#include "napi/native_api.h"
#include <atomic>
#include <cerrno>
#include <cstring>
#include <fstream>
#include <map>
#include <memory>
#include <mutex>

// 声明异步解压函数（在 napi_init_async.cpp 中实现）
napi_value DecompressFileAsync(napi_env env, napi_callback_info info);
napi_value CancelDecompress(napi_env env, napi_callback_info info); // 取消解压任务

#endif // NAPI_DECOMPRESS_ASYNC_H