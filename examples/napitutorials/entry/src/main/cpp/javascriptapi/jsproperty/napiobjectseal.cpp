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

static const char *TAG = "[javascriptapi_property]";

napi_value testNapiObjectSeal(napi_env env, napi_callback_info info)
{
    // pages/javascript/jsproperty/napiobjectseal
    // 获取参数数量
    size_t argc = PARAM1;
    // 准备接收参数的变量
    napi_value argv[PARAM1];
    napi_value obj;
    napi_status status;
    const napi_extended_error_info *extended_error_info;

    // 获取回调函数的参数信息
    status = napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "Failed to get callback info", TAG);
        return NULL;
    }

    // 检查参数数量是否符合预期
    if (argc != PARAM1) {
        napi_throw_error(env, NULL, "Expected exactly one argument");
        return NULL;
    }

    // 检查传入参数是否为object
    napi_valuetype resultType;
    napi_typeof(env, argv[0], &resultType);
    if (resultType != napi_object) {
        napi_throw_error(env, NULL, "The incoming parameters are not as expected");
        return NULL;
    }
    obj = argv[PARAM0];
    status = napi_object_seal(env, obj);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "object freeze", TAG);
        return NULL;
    }
    return obj;
}
