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

#include "javascriptapi.h"

static const char *TAG = "[javascriptapi_property]";

napi_value testNapiSetProperty(napi_env env, napi_callback_info info)
{
    // pages/javascript/jsproperties/napisetproperty
    size_t argc = PARAM1;
    napi_value argv[PARAM1];
    napi_status status;
    napi_value obj;
    const napi_extended_error_info *extended_error_info;

    // 解析传入的参数
    status = napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "get cb info", TAG);
        return NULL;
    }

    // 检查参数数量
    if (argc < PARAM1) {
        napi_throw_error(env, NULL, "Expected 1 arguments");
        return NULL;
    }

    obj = argv[0];

    // 创建一个新的JavaScript字符串作为属性名
    napi_value prop_name;
    status = napi_create_string_utf8(env, "key", NAPI_AUTO_LENGTH, &prop_name);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "create string utf8", TAG);
        return NULL;
    }

    // 创建一个新的JavaScript字符串作为属性值
    napi_value prop_value;
    status = napi_create_string_utf8(env, "value", NAPI_AUTO_LENGTH, &prop_value);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "create string utf8", TAG);
        return NULL;
    }

    // 设置对象的属性
    status = napi_set_property(env, obj, prop_name, prop_value);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "set property", TAG);
        return NULL;
    }
    // 可以返回新设置的属性值或任何其它值
    return prop_value;
}
