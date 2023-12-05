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
#include <cstring>
#include <string>
#include <memory>
#include <vector>
#include <node_api.h>
#include <any>
#include <optional>
#include "tool_utility.h"
#include "napitest_middle.h"

#define NUMBER_JS_2_C(napi_v, type, dest)        \
    if (typeid(type) == typeid(int32_t)) {       \
        dest = pxt->SwapJs2CInt32(napi_v);       \
    }                                            \
    else if (typeid(type) == typeid(uint32_t)) { \
        dest = pxt->SwapJs2CUint32(napi_v);      \
    }                                            \
    else if (typeid(type) == typeid(int64_t)) {  \
        dest = pxt->SwapJs2CInt64(napi_v);       \
    }                                            \
    else if (typeid(type) == typeid(double_t)) { \
        dest = pxt->SwapJs2CDouble(napi_v);      \
    }

#define NUMBER_JS_2_C_ENUM(napi_v, type, dest, enum_type)      \
    if (typeid(type) == typeid(int32_t))  {    \
        dest = static_cast<enum_type>(pxt->SwapJs2CInt32(napi_v));     \
    }                                           \
    else if (typeid(type) == typeid(uint32_t)) { \
        dest = static_cast<enum_type>(pxt->SwapJs2CUint32(napi_v));    \
    }                                          \
    else if (typeid(type) == typeid(int64_t)) { \
        dest = static_cast<enum_type>(pxt->SwapJs2CInt64(napi_v));     \
    }                                           \
    else if (typeid(type) == typeid(double_t)) { \
        dest = static_cast<enum_type>(pxt->SwapJs2CDouble(napi_v));    \
    }
    
#define BOOLEAN_JS_2_C(napi_v, type, dest) {    \
    dest = pxt->SwapJs2CBool(napi_v);          \
}

#define C_DELETE(p)  \
    if ((p)) {         \
        delete (p);    \
    }

__attribute__((unused)) static napi_value number_c_to_js(XNapiTool *pxt, const std::type_info &n, DataPtr num)
{
    if (n == typeid(int32_t))
        return pxt->SwapC2JsInt32(*(int32_t *)num);
    else if (n == typeid(uint32_t))
        return pxt->SwapC2JsUint32(*(uint32_t *)num);
    else if (n == typeid(int64_t))
        return pxt->SwapC2JsInt64(*(int64_t *)num);
    else if (n == typeid(double_t))
        return pxt->SwapC2JsDouble(*(double_t *)num);
    return nullptr;
}
#define NUMBER_C_2_JS(pxt, n) \
    number_c_to_js(pxt, typeid((n)), reinterpret_cast<DataPtr>(&(n)))

namespace napitest {
namespace napitest_interface {
void threadSafeFuncCallJsTest1(napi_env env, napi_value jsCallback, void *context, void *data)
{
    // to add user CallJs code
}
napi_value createThreadSafeFuncTest1_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed()) {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    struct createThreadSafeFuncTest1_value_struct *vio = new createThreadSafeFuncTest1_value_struct();

    const size_t argc = pxt->GetArgc();

    // 获取第一个参数，线程安全函数名称 get ThreadSafeFunc name
    pxt->SwapJs2CUtf8(pxt->GetArgv(XNapiTool::ZERO), vio->eventName);

   // 判断最后一个参数是否为回调函数类型
    napi_valuetype valueType = napi_undefined;
    napi_status status = napi_typeof(env, pxt->GetArgv(argc - 1), &valueType);
    if (status != napi_ok) {
        return nullptr;
    }
    if (valueType !=  napi_function) {
       printf("valueType is Err, not napi_function!");
       return nullptr;
    } 

   // create ThreadSafeFunc
    napi_threadsafe_function thraedsafeFunc;
    const size_t maxQueueSize = 0;  // 0 means no limited
    const size_t initialThreadCount = 1;
    napi_value name = pxt->GetArgv(XNapiTool::ZERO); //资源名称复用线程安全函数名称
    napi_create_threadsafe_function(env, pxt->GetArgv(argc - 1), nullptr,
    name, maxQueueSize, initialThreadCount, nullptr, nullptr, nullptr, threadSafeFuncCallJsTest1, &thraedsafeFunc);
    pxt->RegistThreadsafeFunc(env, vio->eventName, thraedsafeFunc);
    napi_value result = pxt->UndefinedValue();
    delete vio;
    if (pxt->IsFailed()) {
        result = pxt->GetError();
    }
    delete pxt; // release
    return result;
}

}
}
static napi_value init(napi_env env, napi_value exports)
{
    std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, exports);
        pxt->DefineFunction("createThreadSafeFuncTest1", napitest::napitest_interface::createThreadSafeFuncTest1_middle);

    return exports;
}

static napi_module g_napitest_Module = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = init,
    .nm_modname = "test",
    .nm_priv = ((void *)0),
    .reserved = {(void *)0},
};

extern "C" __attribute__((constructor)) void Register_napitest_Module(void)
{
    napi_module_register(&g_napitest_Module);
}
