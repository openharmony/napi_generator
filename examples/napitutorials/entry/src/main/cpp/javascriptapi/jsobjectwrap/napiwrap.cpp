/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

#include "common.h"
#include "javascriptapi.h"

static const char *TAG = "[javascriptapi_object_wrap]";

class testNapiWrap {
public:
    static napi_value Init(napi_env env, napi_value exports);
    static void Destructor(napi_env env, void *nativeObject, void *finalizeHint);

private:
    explicit testNapiWrap(napi_value value_ = 0);
    ~testNapiWrap();

    static napi_value New(napi_env env, napi_callback_info info);
    static napi_value Tyof(napi_env env, napi_callback_info info);

    napi_value value_;
    napi_env env_;
    napi_ref wrapper_;
};

static thread_local napi_ref g_ref = nullptr;

testNapiWrap::testNapiWrap(napi_value value) : value_(value), env_(nullptr), wrapper_(nullptr) {}

testNapiWrap::~testNapiWrap() { napi_delete_reference(env_, wrapper_); }

void testNapiWrap::Destructor(napi_env env, void *nativeObject, [[maybe_unused]] void *finalizeHint)
{
    reinterpret_cast<testNapiWrap *>(nativeObject)->~testNapiWrap();
}

napi_value testNapiWrap::Tyof(napi_env env, napi_callback_info info)
{
    napi_value jsThis;
    napi_valuetype result;
    napi_value resultStr;
    napi_status status;
    size_t argc = PARAM1;
    napi_value argv[PARAM1];
    const napi_extended_error_info *extended_error_info;
    status = napi_get_cb_info(env, info, &argc, argv, &jsThis, nullptr);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "get cb info", TAG);
        return NULL;
    }
    testNapiWrap *obj;
    status = napi_unwrap(env, jsThis, reinterpret_cast<void **>(&obj));
    if (status != napi_ok || obj == nullptr) {
        getErrMsg(status, env, extended_error_info, "call napi_typeof()", TAG);
        return NULL;
    }
    status = napi_typeof(env, argv[0], &result);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "call napi_typeof()", TAG);
        return NULL;
    }
    status = napiValueType2Str(env, result, &resultStr);
    if (status != napi_ok) {
        std::string errMsg = "Failed to convert napi_valuetype " + std::to_string(status) + " to string";
        napi_throw_error(env, NULL, errMsg.c_str());
        return NULL;
    }
    return resultStr;
}

napi_value testNapiWrap::New(napi_env env, napi_callback_info info)
{
    napi_value newTarget;
    napi_get_new_target(env, info, &newTarget);
    if (newTarget != nullptr) {
        size_t argc = PARAM1;
        napi_value args[PARAM1];
        napi_value jsThis;
        napi_get_cb_info(env, info, &argc, args, &jsThis, nullptr);
        napi_value value;
        testNapiWrap *obj = new testNapiWrap(value);
        obj->env_ = env;
        napi_wrap(env, jsThis, reinterpret_cast<void *>(obj), testNapiWrap::Destructor,
                  nullptr, // finalize_hint
                  &obj->wrapper_);
        return jsThis;
    } else {
        size_t argc = PARAM1;
        napi_value args[PARAM1];
        napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
        napi_value cons;
        napi_get_reference_value(env, g_ref, &cons);
        napi_value instance;
        napi_new_instance(env, cons, argc, args, &instance);
        return instance;
    }
}

napi_value testNapiWrap::Init(napi_env env, napi_value exports)
{
    napi_property_descriptor properties[] = {{"Tyof", nullptr, Tyof, nullptr, nullptr, nullptr, napi_default, nullptr}};
    napi_value cons;
    napi_define_class(env, "testNapiWrap", NAPI_AUTO_LENGTH, New, nullptr, 1, properties, &cons);
    napi_create_reference(env, cons, 1, &g_ref);
    napi_set_named_property(env, exports, "testNapiWrap", cons);
    return exports;
}


napi_value WrapInit(napi_env env, napi_value exports)
{
    testNapiWrap::Init(env, exports);
    return exports;
}
