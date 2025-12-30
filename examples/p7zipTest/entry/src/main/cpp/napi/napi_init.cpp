#include "UnifiedDecompressor.h"
#include "napi/native_api.h"
#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x0000
#define LOG_TAG "P7ZIP_NAPI"

// 声明异步解压函数（在 napi_init_async.cpp 中实现）
extern napi_value DecompressFileAsync(napi_env env, napi_callback_info info);
extern napi_value CancelDecompress(napi_env env, napi_callback_info info); // 取消解压任务

// 声明异步压缩函数（在 napi_compress_async.cpp 中实现）
extern napi_value CompressAsync(napi_env env, napi_callback_info info); // 统一压缩接口 - 支持文件+文件夹混合
extern napi_value CancelCompress(napi_env env, napi_callback_info info); // 取消压缩任务

EXTERN_C_START
static napi_value Init(napi_env env, napi_value exports) {
    napi_property_descriptor desc[] = {
        // 文件压缩/解压功能
        // 统一压缩接口 - 支持文件+文件夹混合
        {"compress", nullptr, CompressAsync, nullptr, nullptr, nullptr, napi_default, nullptr},
        // 取消压缩任务
        {"cancelCompress", nullptr, CancelCompress, nullptr, nullptr, nullptr, napi_default, nullptr},
        // 使用异步版本
        {"decompressFile", nullptr, DecompressFileAsync, nullptr, nullptr, nullptr, napi_default, nullptr},
        // 取消解压任务
        {"cancelDecompress", nullptr, CancelDecompress, nullptr, nullptr, nullptr, napi_default, nullptr},
    };
    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
    return exports;
}
EXTERN_C_END

static napi_module demoModule = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = Init,
    .nm_modname = "entry",
    .nm_priv = ((void *)0),
    .reserved = {0},
};

extern "C" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }
