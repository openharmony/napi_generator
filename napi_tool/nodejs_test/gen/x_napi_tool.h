#ifndef CC_TOOL_H
#define CC_TOOL_H

#include <node_api.h>
#include <string>
#include <memory>
#include <map>
#include <vector>
#include <cmath>

class XNapiTool
{
public:
    using CallbackFunction = void (*)(XNapiTool *pxt, void *data);
    using RELEASE_INSTANCE = void (*)(void *p);
    static napi_value UndefinedValue(napi_env env);
    napi_value UndefinedValue();

    napi_value CreateSubObject(napi_value parent, const char *name);
    void DefineFunction(const char *funcName, napi_callback callback, napi_value dest = nullptr);
    void DefineClass(const char *className, napi_callback constructorFunc, std::map<const char *, std::map<const char *, napi_callback>> &valueList, std::map<const char *, napi_callback> &funcList, napi_value dest = nullptr);

    XNapiTool(napi_env env, napi_callback_info info);
    XNapiTool(napi_env env, napi_value exports);
    ~XNapiTool();

    int32_t SwapJs2CInt32(napi_value value);
    uint32_t SwapJs2CUint32(napi_value value);
    int64_t SwapJs2CInt64(napi_value value);
    double_t SwapJs2CDouble(napi_value value);
    size_t SwapJs2CUtf8(napi_value value, std::string &str);

    napi_value SwapC2JsInt32(int32_t value);
    napi_value SwapC2JsUint32(uint32_t value);
    napi_value SwapC2JsInt64(int64_t value);
    napi_value SwapC2JsDouble(double_t value);
    napi_value SwapC2JsUtf8(const char *value);

    napi_value GetArgv(uint32_t p);
    uint32_t GetArgc();

    napi_value GetValueProperty(napi_value value, const char *propertyName);
    napi_value SetValueProperty(napi_value &value, const char *propertyName, napi_value property);

    uint32_t GetArrayLength(napi_value value);
    napi_value GetArrayElement(napi_value value, uint32_t p);
    napi_value SetArrayElement(napi_value &value, uint32_t p, napi_value ele);

    napi_value SyncCallBack(napi_value func, size_t argc, napi_value *args);

    napi_value StartAsync(CallbackFunction pe, void *data, CallbackFunction pc, napi_value func = nullptr);
    void FinishAsync(size_t argc, napi_value *args);

    bool IsFailed()
    {
        return bFailed_;
    }
    napi_value GetError()
    {
        return error_;
    }
    napi_env GetEnv()
    {
        return env_;
    }

    napi_value tmp_value;

private:
    napi_env env_;
    napi_value exports_;

    //解析参数
    napi_value argv_[8];
    size_t argc_;
    napi_value thisVar_;
    void *data_;

    //错误信息
    napi_value error_;
    bool bFailed_;
    bool CheckFailed(bool b, const char *errStr);
    bool CheckValueType(napi_value value, napi_valuetype type);

    //异步调用相关代码
    static void AsyncExecute(napi_env env, void *p);
    void AsyncExecuteFunction();
    static void AsyncComplete(napi_env env, napi_status status, void *p);
    void AsyncCompleteFunction();
    napi_ref callbackFunc_;
    napi_async_work work_;
    bool asyncNeedRelease_;
    CallbackFunction executeFunction_;
    CallbackFunction completeFunction_;
    void *valueData_;
    napi_deferred deferred_;
    enum class AsyncMode
    {
        NONE,
        CALLBACK,
        PROMISE,
    };
    AsyncMode asyncMode_;

    //创建类相关代码
public:
    static void WrapFinalize(napi_env env, void *data, void *hint);
    void ReleaseInstance();
    napi_value WrapInstance(void *instance, RELEASE_INSTANCE ri);
    void *UnWarpInstance();

    void SetAsyncInstance(void *p);
    void *GetAsyncInstance();

private:
    napi_ref wrapper_;
    void *pInstance_;
    RELEASE_INSTANCE releaseInstance_;
    void *asyncInstance_;
};

#endif
