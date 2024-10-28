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

static const char *TAG = "[javascriptapi_function]";

napi_value SayHello(napi_env env, napi_callback_info info)
{
    printf("Hello\n");
    return NULL;
}

napi_value testNapiCreateFunction(napi_env env, napi_callback_info info)
{
    // pages/javascript/jsfunctions/napicreatefunction
    napi_value func;
    napi_status status;
    napi_value obj;
    const napi_extended_error_info *extended_error_info;

    status = napi_create_object(env, &obj);
    if (status != napi_ok) {
        // 错误处理
        return NULL;
    }

    status = napi_create_function(env, NULL, 0, SayHello, NULL, &func);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "create function", TAG);
        return NULL;
    }

    return func;
}
