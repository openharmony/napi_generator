// CreateObjectWrapper.cpp - CreateObject 函数包装

#include "Common/MyUnknown.h"
#include "Common/MyWindows.h"
#include "hilog/log.h"
#include <cstring>

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x0000
#define LOG_TAG "CreateObjectWrapper"

// 尝试链接 lib7z.a 中的各种可能的 CreateObject 符号
// 1. 尝试 C 链接
extern "C" {
// 如果库中定义为 C 函数
HRESULT CreateObject(const GUID *clsid, const GUID *iid, void **outObject) __attribute__((weak));
}

// 2. 尝试 C++ 链接（可能在命名空间中）
namespace NArchive {
namespace N7z {
HRESULT CreateObject(const GUID *clsid, const GUID *iid, void **outObject) __attribute__((weak));
}
namespace NZip {
HRESULT CreateObject(const GUID *clsid, const GUID *iid, void **outObject) __attribute__((weak));
}
} // namespace NArchive

// 如果以上都没有定义，提供一个基本的实现
// 这个实现会尝试调用库中的其他可能的入口点
#ifndef CREATE_OBJECT_DEFINED
extern "C" HRESULT CreateObject(const GUID *clsid, const GUID *iid, void **outObject) {
    if (!clsid || !iid || !outObject) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "CreateObject: Invalid arguments");
        return E_INVALIDARG;
    }

    *outObject = nullptr;

    // 对于 7z 格式
    static const GUID CLSID_CFormat7z = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x07, 0x00, 0x00}};
    // 对于 ZIP 格式
    static const GUID CLSID_CFormatZip = {0x23170F69, 0x40C1, 0x278A, {0x10, 0x00, 0x00, 0x01, 0x10, 0x01, 0x00, 0x00}};

    // 检测格式
    bool is7z = (memcmp(clsid, &CLSID_CFormat7z, sizeof(GUID)) == 0);
    bool isZip = (memcmp(clsid, &CLSID_CFormatZip, sizeof(GUID)) == 0);

    // 检查弱符号
    extern HRESULT CreateArchiver(const GUID *, const GUID *, void **) __attribute__((weak));

    // 尝试从命名空间调用
    if (is7z && NArchive::N7z::CreateObject) {
        return NArchive::N7z::CreateObject(clsid, iid, outObject);
    } else if (isZip && NArchive::NZip::CreateObject) {
        return NArchive::NZip::CreateObject(clsid, iid, outObject);
    }

    // 如果命名空间版本不可用，尝试全局 CreateArchiver
    static bool in_fallback = false;
    if (!in_fallback && CreateArchiver != nullptr) {
        in_fallback = true;
        HRESULT result = CreateArchiver(clsid, iid, outObject);
        in_fallback = false;
        return result;
    }

    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "CreateObject failed: No valid implementation found");
    return E_NOTIMPL;
}
#endif
