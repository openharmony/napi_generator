/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
* Licensed under the Apache License, Version 2.0 (the "License"); 
* you may not use this file except in compliance with the License. 
* You may obtain a copy of the License at 
*
* http://www.apache.org/licenses/LICENSE-2.0 
*
* Unless required by applicable law or agreed to in writing, software 
* distributed under the License is distributed on an "AS IS" BASIS, 
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
* See the License for the specific language governing permissions and 
* limitations under the License. 
*/
const { writeFile } = require("../tools/FileRW");
const re = require("../tools/re");

let xNapiToolH = `\
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
    const uint32_t DEFAULT_ARG_COUNT = 8;
    napi_value UndefinedValue();

    napi_value CreateSubObject(napi_value parent, const char *name);
    void DefineFunction(const char *funcName, napi_callback callback, napi_value dest = nullptr);
    void DefineClass(const char *className, napi_callback constructorFunc,
        std::map<const char *, std::map<const char *, napi_callback>> &valueList, std::map<const char *,
        napi_callback> &funcList, napi_value dest = nullptr);

    XNapiTool(napi_env env, napi_callback_info info);
    XNapiTool(napi_env env, napi_value exports);
    ~XNapiTool();

    bool SwapJs2CBool(napi_value value);
    int32_t SwapJs2CInt32(napi_value value);
    uint32_t SwapJs2CUint32(napi_value value);
    int64_t SwapJs2CInt64(napi_value value);
    double_t SwapJs2CDouble(napi_value value);
    size_t SwapJs2CUtf8(napi_value value, std::string &str);

    napi_value SwapC2JsBool(bool value);
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

    // analyze params
    napi_value argv_[8];
    size_t argc_size;
    napi_value thisVar_;
    void *data_;

    // error message
    napi_value error_;
    bool bFailed_;
    bool CheckFailed(bool b, const char *errStr);
    bool CheckValueType(napi_value value, napi_valuetype type);

    // asynchronous call related code
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

    // create code related class
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
`

let xNapiToolCpp = `

#include "x_napi_tool.h"
#include <cassert>
#include <cstring>

#define CC_ASSERT(btrue)   \\
    if (!(btrue)) {        \\
                           \\
    }                      \\
    assert(btrue);

XNapiTool::XNapiTool(napi_env env, napi_callback_info info)
{
    env_ = env;
    bFailed_ = false;
    executeFunction_ = nullptr;
    completeFunction_ = nullptr;
    valueData_ = nullptr;
    asyncNeedRelease_ = false;
    asyncMode_ = AsyncMode::NONE;
    pInstance_ = nullptr;
    releaseInstance_ = nullptr;
    wrapper_ = nullptr;

    argc_size = DEFAULT_ARG_COUNT;

    napi_status result_status = napi_get_cb_info(env, info, &argc_size, argv_, &thisVar_, &data_);
    CheckFailed(result_status == napi_ok, "get args fail");
}

XNapiTool::XNapiTool(napi_env env, napi_value exports)
{
    env_ = env;
    exports_ = exports;

    asyncMode_ = AsyncMode::NONE;
    wrapper_ = nullptr;
}

XNapiTool::~XNapiTool()
{
    if (asyncMode_ == AsyncMode::PROMISE) {
        napi_status result_status = napi_delete_async_work(env_, work_);
        CC_ASSERT(result_status == napi_ok);
    }
    if (asyncMode_ == AsyncMode::CALLBACK) {
        napi_status result_status = napi_delete_reference(env_, callbackFunc_);
        CC_ASSERT(result_status == napi_ok);
        result_status = napi_delete_async_work(env_, work_);
        CC_ASSERT(result_status == napi_ok);
    }
    if (wrapper_ != nullptr) {
        napi_status result_status = napi_delete_reference(env_, wrapper_);
        CC_ASSERT(result_status == napi_ok);
    }
}

bool XNapiTool::SwapJs2CBool(napi_value value)
{
   bool result;
   napi_status result_status = napi_get_value_bool(env_, value, &result);
   if (CheckFailed(result_status == napi_ok, "swap_js_2_c_bool fail"))
    return -1;
   return result;
}

napi_value XNapiTool::GetArgv(uint32_t p)
{
    if (CheckFailed(p < argc_size, "GetArgv失败"))
        return error_;

    return argv_[p];
}

uint32_t XNapiTool::GetArgc()
{
    return argc_size;
}

napi_value XNapiTool::GetValueProperty(napi_value value, const char *propertyName)
{
    napi_value result;
    napi_status result_status = napi_get_named_property(env_, value, propertyName, &result);
    CC_ASSERT(result_status == napi_ok);
    return result;
}

napi_value XNapiTool::SetValueProperty(napi_value &value, const char *propertyName, napi_value property)
{
    napi_status result_status;
    if (value == nullptr) {
        result_status = napi_create_object(env_, &value);
        CC_ASSERT(result_status == napi_ok);
    }
    result_status = napi_set_named_property(env_, value, propertyName, property);
    CC_ASSERT(result_status == napi_ok);
    return value;
}

uint32_t XNapiTool::GetArrayLength(napi_value value)
{
    uint32_t ret;
    napi_status result_status = napi_get_array_length(env_, value, &ret);
    CC_ASSERT(result_status == napi_ok);
    return ret;
}

napi_value XNapiTool::GetArrayElement(napi_value value, uint32_t p)
{
    napi_value result;
    napi_status result_status = napi_get_element(env_, value, p, &result);
    CC_ASSERT(result_status == napi_ok);
    return result;
}

napi_value XNapiTool::SetArrayElement(napi_value &value, uint32_t p, napi_value ele)
{
    napi_status result_status;
    if (value == nullptr) {
        result_status = napi_create_array(env_, &value);
        CC_ASSERT(result_status == napi_ok);
    }
    result_status = napi_set_element(env_, value, p, ele);
    CC_ASSERT(result_status == napi_ok);
    return value;
}

bool XNapiTool::CheckFailed(bool b, const char *errStr)
{
    if (bFailed_)
        return true;
    if (b)
        return false;

    napi_value errCode = nullptr;
    napi_value errMessage = nullptr;

    napi_create_string_utf8(env_, "x_tool", strlen("x_tool"), &errCode);
    napi_create_string_utf8(env_, errStr, strlen(errStr), &errMessage);
    napi_create_error(env_, errCode, errMessage, &error_);
    printf("x_napi_tool err : %s\\n", errStr);

    bFailed_ = true;
    return true;
}

int32_t XNapiTool::SwapJs2CInt32(napi_value value)
{
    int32_t result;
    napi_status result_status = napi_get_value_int32(env_, value, &result);
    if (CheckFailed(result_status == napi_ok, "swap_js_2_c_int32 fail"))
        return -1;
    return result;
}

uint32_t XNapiTool::SwapJs2CUint32(napi_value value)
{
    uint32_t result;
    napi_status result_status = napi_get_value_uint32(env_, value, &result);
    if (CheckFailed(result_status == napi_ok, "swap_js_2_c_uint32 fail"))
        return -1;
    return result;
}

int64_t XNapiTool::SwapJs2CInt64(napi_value value)
{
    int64_t result;
    napi_status result_status = napi_get_value_int64(env_, value, &result);
    if (CheckFailed(result_status == napi_ok, "swap_js_2_c_int32 fail"))
        return -1;
    return result;
}

double_t XNapiTool::SwapJs2CDouble(napi_value value)
{
    double_t result;
    napi_status result_status = napi_get_value_double(env_, value, &result);
    if (CheckFailed(result_status == napi_ok, "swap_js_2_c_int32 fail"))
        return -1;
    return result;
}

size_t XNapiTool::SwapJs2CUtf8(napi_value value, std::string &str)
{
    char buf[1024];
    size_t result;
    napi_status result_status = napi_get_value_string_utf8(env_, value, buf, 1024, &result);
    if (CheckFailed(result_status == napi_ok, "napi_get_value_string_utf8 fail"))
        return -1;
    str = buf;
    return result;
}

napi_value XNapiTool::SwapC2JsBool(bool value)
{
    napi_value result;
    napi_status result_status = napi_create_int32(env_, value, &result);
    CC_ASSERT(result_status == napi_ok);
    return result;
}

napi_value XNapiTool::SwapC2JsInt32(int32_t value)
{
    napi_value result;
    napi_status result_status = napi_create_int32(env_, value, &result);
    CC_ASSERT(result_status == napi_ok);
    return result;
}

napi_value XNapiTool::SwapC2JsUint32(uint32_t value)
{
    napi_value result;
    napi_status result_status = napi_create_uint32(env_, value, &result);
    CC_ASSERT(result_status == napi_ok);
    return result;
}

napi_value XNapiTool::SwapC2JsInt64(int64_t value)
{
    napi_value result;
    napi_status result_status = napi_create_int64(env_, value, &result);
    CC_ASSERT(result_status == napi_ok);
    return result;
}

napi_value XNapiTool::SwapC2JsDouble(double_t value)
{
    napi_value result;
    napi_status result_status = napi_create_double(env_, value, &result);
    CC_ASSERT(result_status == napi_ok);
    return result;
}

napi_value XNapiTool::SwapC2JsUtf8(const char *value)
{
    napi_value result;
    napi_status result_status = napi_create_string_utf8(env_, value, NAPI_AUTO_LENGTH, &result);
    CC_ASSERT(result_status == napi_ok);
    return result;
}

bool XNapiTool::CheckValueType(napi_value value, napi_valuetype type)
{
    napi_valuetype valueType;
    napi_status result_status = napi_typeof(env_, value, &valueType);
    CC_ASSERT(result_status == napi_ok);
    if (CheckFailed(valueType == type, "传入参数类型不是回调函数"))
        return false;
    return true;
}

napi_value XNapiTool::SyncCallBack(napi_value func, size_t argc, napi_value *args)
{
    napi_value cb_result;
    napi_status result_status = napi_call_function(env_, thisVar_, func, argc, args, &cb_result);
    CC_ASSERT(result_status == napi_ok);
    return cb_result;
}

void XNapiTool::AsyncExecuteFunction()
{
    if (executeFunction_ != nullptr) {
        executeFunction_(this, valueData_);
    }
}
void XNapiTool::AsyncExecute(napi_env env, void *p)
{
    XNapiTool *pxt = (XNapiTool *)p;
    pxt->AsyncExecuteFunction();
}
void XNapiTool::AsyncCompleteFunction()
{
    if (completeFunction_ != nullptr) {
        completeFunction_(this, valueData_);
    }
}
void XNapiTool::AsyncComplete(napi_env env, napi_status status, void *p)
{
    XNapiTool *pxt = (XNapiTool *)p;
    pxt->AsyncCompleteFunction();
    delete pxt;
}

napi_value XNapiTool::StartAsync(CallbackFunction pe, void *data, CallbackFunction pc, napi_value func)
{
    napi_value result;
    napi_status result_status;

    if (func == nullptr) {
        // promise
        result_status = napi_create_promise(env_, &deferred_, &result);
        CC_ASSERT(result_status == napi_ok);
        asyncMode_ = AsyncMode::PROMISE;
    } else {
        // callback
        result_status = napi_create_reference(env_, func, 1, &callbackFunc_);
        CC_ASSERT(result_status == napi_ok);
        asyncMode_ = AsyncMode::CALLBACK;
        result = UndefinedValue(env_);
    }

    napi_value resourceName = nullptr;
    result_status = napi_create_string_utf8(env_, "x_napi_tool", NAPI_AUTO_LENGTH, &resourceName);
    CC_ASSERT(result_status == napi_ok);
    result_status = napi_create_async_work(env_, nullptr, resourceName, XNapiTool::AsyncExecute,
        XNapiTool::AsyncComplete, this, &work_);
    CC_ASSERT(result_status == napi_ok);
    result_status = napi_queue_async_work(env_, work_);
    CC_ASSERT(result_status == napi_ok);

    asyncNeedRelease_ = true;
    executeFunction_ = pe;
    completeFunction_ = pc;
    valueData_ = data;

    return result;
}

void XNapiTool::FinishAsync(size_t argc, napi_value *args)
{
    if (asyncMode_ == AsyncMode::PROMISE) {
        if (argc > 0) {
            napi_resolve_deferred(env_, deferred_, args[0]);
        } else {
            napi_reject_deferred(env_, deferred_, SwapC2JsUtf8("promise fail"));
        }
        return;
    }
    napi_value result = 0;
    napi_value cb = 0;

    napi_status result_status = napi_get_reference_value(env_, callbackFunc_, &cb);
    CC_ASSERT(result_status == napi_ok);
    result_status = napi_call_function(env_, thisVar_, cb, argc, args, &result);
    CC_ASSERT(result_status == napi_ok);
}

napi_value XNapiTool::UndefinedValue(napi_env env)
{
    napi_value result;
    napi_get_undefined(env, &result);
    return result;
}

napi_value XNapiTool::UndefinedValue()
{
    napi_value result;
    napi_get_undefined(env_, &result);
    return result;
}

napi_value XNapiTool::CreateSubObject(napi_value parent, const char *name)
{
    napi_value result;
    napi_status result_status = napi_create_object(env_, &result);
    CC_ASSERT(result_status == napi_ok);

    result_status = napi_set_named_property(env_, parent, name, result);
    CC_ASSERT(result_status == napi_ok);

    return result;
}

void XNapiTool::DefineFunction(const char *funcName, napi_callback callback, napi_value dest)
{
    if (dest == nullptr)
        dest = exports_;
    napi_property_descriptor descriptor[] = {
        {funcName, 0, callback, 0, 0, 0, napi_default, 0}};

    napi_status result_status = napi_define_properties(env_, dest, 1, descriptor);
    CC_ASSERT(result_status == napi_ok);
}

void XNapiTool::DefineClass(const char *className, napi_callback constructorFunc,
    std::map<const char *, std::map<const char *, napi_callback>> &valueList,
    std::map<const char *, napi_callback> &funcList, napi_value dest)
{
    if (dest == nullptr)
        dest = exports_;
    napi_value tmpClass = nullptr;
    napi_property_descriptor funcs[funcList.size() + valueList.size()];

    uint32_t p = 0;
    for (auto it = valueList.begin(); it != valueList.end(); it++) {
        funcs[p++] = {it->first, 0, 0, it->second["getvalue"], it->second["setvalue"], 0, napi_default, 0}; // get,set
    }
    for (auto it = funcList.begin(); it != funcList.end(); it++) {
        funcs[p++] = {it->first, 0, it->second, 0, 0, 0, napi_default, 0};
    }

    napi_status result_status = napi_define_class(env_, className, NAPI_AUTO_LENGTH, constructorFunc, 
    nullptr, p, funcs, &tmpClass);
    CC_ASSERT(result_status == napi_ok);

    result_status = napi_set_named_property(env_, dest, className, tmpClass);
    CC_ASSERT(result_status == napi_ok);
}

void XNapiTool::WrapFinalize(napi_env env, void *data, void *hint)
{
    XNapiTool *pxt = (XNapiTool *)data;
    pxt->ReleaseInstance();
    delete pxt;
}

void XNapiTool::ReleaseInstance()
{
    if (releaseInstance_ != nullptr) {
        releaseInstance_(pInstance_);
    }
}

napi_value XNapiTool::WrapInstance(void *instance, RELEASE_INSTANCE ri)
{
    pInstance_ = instance;
    releaseInstance_ = ri;
    napi_status result_status = napi_wrap(env_, thisVar_, this, WrapFinalize, nullptr, &wrapper_);
    CC_ASSERT(result_status == napi_ok);
    return thisVar_;
}

void *XNapiTool::UnWarpInstance()
{
    XNapiTool *p;
    napi_status result_status = napi_unwrap(env_, thisVar_, (void **)&p);
    CC_ASSERT(result_status == napi_ok);
    return p->pInstance_;
}

void XNapiTool::SetAsyncInstance(void *p)
{
    asyncInstance_ = p;
}

void *XNapiTool::GetAsyncInstance()
{
    return asyncInstance_;
}
`

function generateBase(destDir, license) {
    writeFile(re.pathJoin(destDir, "x_napi_tool.h"), null != license ? (license + "\n" + xNapiToolH) : xNapiToolH)
    writeFile(re.pathJoin(destDir, "x_napi_tool.cpp"), null != license ? (license + "\n" + xNapiToolCpp) : xNapiToolCpp)
}

module.exports = {
    generateBase
}