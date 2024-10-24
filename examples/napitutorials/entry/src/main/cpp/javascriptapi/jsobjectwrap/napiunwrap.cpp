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
#include "hilog/log.h"
static const char *TAG = "[javascriptapi_object_wrap]";

class MyNode {
public:
    napi_status status;
    napi_valuetype result;
    napi_value resultStr;
    const napi_extended_error_info *extended_error_info;
    MyNode(napi_env env, napi_value val)
    {
        // Call napi_typeof(), any -> napi_valuetype
        status = napi_typeof(env, val, &result);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "call napi_typeof()", TAG);
        }

        // napi_valuetype -> string
        status = napiValueType2Str(env, result, &resultStr);
        if (status != napi_ok) {
            std::string errMsg = "Failed to convert napi_valuetype " + std::to_string(status) + " to string";
            napi_throw_error(env, NULL, errMsg.c_str());
        }
    }
    napi_value GetResult(napi_env env)
    {
        return resultStr;
    }
};

napi_value testNapiUnwrap(napi_env env, napi_callback_info info)
{
    size_t argc = PARAM1;
    napi_value argv[PARAM1];
    napi_value thisObj;
    void *data = nullptr;
    napi_status status;
    napi_value cons;
    const napi_extended_error_info *extended_error_info;
    // 获取回调函数的参数信息
    status = napi_get_cb_info(env, info, &argc, argv, &thisObj, &data);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "Failed to get callback info", TAG);
        return NULL;
    }
    auto instance = new MyNode(env, argv[PARAM0]);
    status = napi_wrap(
        env, thisObj, instance,
        [](napi_env environment, void *data, void *hint) {
            auto objInfo = reinterpret_cast<MyNode *>(data);
            if (objInfo != nullptr) {
                delete objInfo;
            }
        }, NULL, NULL);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "wrap", TAG);
        return NULL;
    }

    MyNode *obj;
    status = napi_unwrap(env, thisObj, reinterpret_cast<void **>(&obj));
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "unwrap", TAG);
        return NULL;
    }
    napi_value resultStrValue = obj->GetResult(env);
    if (resultStrValue == nullptr) {
        // 处理错误情况
        napi_throw_error(env, NULL, "Failed to get result string");
        return NULL;
    }
    return resultStrValue;
}
