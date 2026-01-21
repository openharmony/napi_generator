#ifndef NAPI_COMPRESS_ASYNC_H
#define NAPI_COMPRESS_ASYNC_H

#include "ArchiveCompressor.h"
#include "ErrorCodes.h"
#include "common.h"
#include "hilog/log.h"
#include "napi/native_api.h"
#include <atomic>
#include <fstream>
#include <map>
#include <memory>
#include <mutex>
#include <string>
#include <sys/stat.h>
#include <vector>

// 声明异步压缩函数（在 napi_compress_async.cpp 中实现）
napi_value CompressAsync(napi_env env, napi_callback_info info); // 统一压缩接口 - 支持文件+文件夹混合
napi_value CancelCompress(napi_env env, napi_callback_info info); // 取消压缩任务

#endif // NAPI_COMPRESS_ASYNC_H