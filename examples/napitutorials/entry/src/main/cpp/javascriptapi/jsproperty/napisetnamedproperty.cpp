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

napi_value testNapiSetNamedProperty(napi_env env, napi_callback_info info)
{
    // pages/javascript/jsproperties/napisetnamedproperty
    size_t argc = PARAM3;
    napi_value argv[PARAM3];
    napi_status status;
    napi_value obj;
    napi_value propName;
    napi_value propValue;
    const napi_extended_error_info *extended_error_info;
    status = napi_get_cb_info(env, info, &argc, argv, NULL, NULL);    // 解析传入的参数
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "get cb info", TAG);
        return NULL;
    }
    if (argc < PARAM3) { // 检查参数数量
        napi_throw_error(env, NULL, "Expected 2 arguments");
        return NULL;
    }
    obj = argv[PARAM0];
    propName = argv[PARAM1];
    propValue = argv[PARAM2];
    // 判断参数有效性
    bool resValid = validateObjectProperty(env, obj, propName, TAG);
    if (resValid == false) {
        return NULL;
    }
    // 将第二个参数从napi_value转换为C字符串
    size_t str_size = 0;
    status = napi_get_value_string_utf8(env, propName, NULL, 0, &str_size);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "get value string", TAG);
        return NULL;
    }
    char *propertyName = (char *)malloc(str_size + 1);
    status = napi_get_value_string_utf8(env, propName, propertyName, str_size + 1, &str_size);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "get value string", TAG);
        return NULL;
    }
    // 设置对象的属性
    status = napi_set_named_property(env, obj, propertyName, propValue);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "set named property", TAG);
        return NULL;
    }
    free(propertyName);
    // 返回新设置对象
    return obj;
}


//    napi_valuetype valuetype0;
//    napi_valuetype valuetype1;
//
//    // 确认第一个参数是个对象
//    status = napi_typeof(env, obj, &valuetype0);
//    if (status != napi_ok) {
//        getErrMsg(status, env, extended_error_info, "get obj type", TAG);
//        return NULL;
//    }
//    if (valuetype0 != napi_object) {
//        napi_throw_type_error(env, NULL, "Wrong argument type, expected an object");
//        return NULL;
//    }
//
//    // 确认第二个参数是个字符串
//    status = napi_typeof(env, propName, &valuetype1);
//    if (status != napi_ok) {
//        getErrMsg(status, env, extended_error_info, "get propName type", TAG);
//        return NULL;
//    }
//    if (valuetype1 != napi_string) {
//        napi_throw_type_error(env, NULL, "Wrong argument type, expected a string");
//        return NULL;
//    }
