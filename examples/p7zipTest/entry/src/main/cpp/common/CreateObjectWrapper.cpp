// CreateObjectWrapper.cpp - CreateObject 函数包装
#include "Common/MyUnknown.h"
#include "Common/MyWindows.h"
#include "hilog/log.h"
#include <cstring>
#include <dlfcn.h>

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x0000
#define LOG_TAG "CreateObjectWrapper"

// 尝试链接 lib7z.a 中的各种可能的 CreateObject 符号
// 1. 尝试 C 链接
extern "C"
{
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

// 3. 尝试 CreateArchiver 函数
HRESULT CreateArchiver(const GUID *, const GUID *, void **) __attribute__((weak));

// 如果以上都没有定义，提供一个基本的实现
// 这个实现会尝试调用库中的其他可能的入口点
#ifndef CREATE_OBJECT_DEFINED
// 动态加载函数指针
typedef HRESULT (*CreateObjectFunc)(const GUID *, const GUID *, void **);

static CreateObjectFunc GetDynamicCreateObject()
{
    static CreateObjectFunc cachedFunc = nullptr;
    static bool initialized = false;
    
    if (initialized) {
        return cachedFunc;
    }
    initialized = true;
    
    // 尝试从 lib7z.so 动态加载 CreateObject
    void *handle = dlopen("lib7z.so", RTLD_NOW | RTLD_GLOBAL);
    if (!handle) {
        OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "dlopen lib7z.so failed: %s", dlerror());
        return nullptr;
    }
    
    // 尝试多个可能的符号名称
    const char *symbolNames[] = {
        "CreateObject",
        "_Z12CreateObjectPK5_GUIDS1_PPv",  // C++ mangled name
        "CreateArchiver"
    };
    
    for (const char *name : symbolNames) {
        cachedFunc = (CreateObjectFunc)dlsym(handle, name);
        if (cachedFunc) {
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Found symbol: %s", name);
            return cachedFunc;
        }
    }
    
    OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "No CreateObject symbol found in lib7z.so");
    return nullptr;
}

extern "C" HRESULT CreateObject(const GUID *clsid, const GUID *iid, void **outObject)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "CreateObject called");
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
    
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Format: 7z=%d, Zip=%d", is7z, isZip);
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Weak symbols: N7z=%p, NZip=%p, CreateArchiver=%p",
                 (void*)NArchive::N7z::CreateObject, (void*)NArchive::NZip::CreateObject, (void*)CreateArchiver);
    
    // 1. 尝试从命名空间调用（弱符号）
    if (is7z && NArchive::N7z::CreateObject) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "→ Using NArchive::N7z::CreateObject");
        return NArchive::N7z::CreateObject(clsid, iid, outObject);
    } else if (isZip && NArchive::NZip::CreateObject) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "→ Using NArchive::NZip::CreateObject");
        return NArchive::NZip::CreateObject(clsid, iid, outObject);
    }
    
    // 2. 尝试全局 CreateArchiver（弱符号）
    if (CreateArchiver != nullptr) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "→ Using CreateArchiver");
        static bool inFallback = false;
        if (!inFallback) {
            inFallback = true;
            HRESULT result = CreateArchiver(clsid, iid, outObject);
            inFallback = false;
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "CreateArchiver returned: 0x%08X", result);
            return result;
        }
    }
    
    // 3. 尝试动态加载
    CreateObjectFunc dynamicFunc = GetDynamicCreateObject();
    if (dynamicFunc) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "→ Using dynamically loaded CreateObject");
        HRESULT result = dynamicFunc(clsid, iid, outObject);
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "Dynamic CreateObject returned: 0x%08X", result);
        return result;
    }
    
    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "❌ CreateObject failed: No valid implementation found");
    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "   Please ensure lib7z.so exports CreateObject symbol");
    return E_NOTIMPL;
}
#endif
