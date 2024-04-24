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

#include "nodeapi.h"

constexpr uint8_t TYPE1 = 1;
constexpr uint8_t TYPE2 = 2;

/* 去除字符串中的换行符，便于查找打印, 公共方法
 * str: 待去除\n的字符串
 */
void RemoveNewlines(std::string &str)
{
    std::string::size_type pos = 0;
    while ((pos = str.find("\n", pos)) != std::string::npos) {
        str.replace(pos, 1, "");
    }
}

/* 检查JavaScript对象是否为空（不含自己的属性），公共方法
 * env: 当前环境的句柄，代表当前的Node.js环境
 * obj: 类型是napi_object
 * tag: 日志打印标识符
 */
bool IsEmptyObject(napi_env env, napi_value obj, const char *tag)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    bool isEmpty = true; // 默认对象为空
    // 首先检查传入的参数是否是对象
    napi_valuetype valuetype;
    status = napi_typeof(env, obj, &valuetype);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "IsEmptyObject: napi_typeof obj", tag);
        return NULL;
    }
    if (valuetype == napi_object) {
        // 创建一个属性名数组
        uint32_t propertyCount;
        napi_value propertyNames;
        status = napi_get_property_names(env, obj, &propertyNames);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "IsEmptyObject: napi_get_property_names obj", tag);
            return NULL;
        }
        // 计算属性的个数
        status = napi_get_array_length(env, propertyNames, &propertyCount);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "IsEmptyObject: napi_get_array_length propertyNames", tag);
            return NULL;
        }
        // 如果属性个数大于0，对象不为空
        if (propertyCount > 0) {
            isEmpty = false;
        }
    } else {
        napi_throw_type_error(env, NULL, "Argument must be an object");
        return NULL;
    }

    return isEmpty;
}

char *getNapiCjsonString(napi_env env, napi_value cjsonObj, const char *tag)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    // 获取string
    napi_value napiPropStr;
    status = napi_get_named_property(env, cjsonObj, "string", &napiPropStr);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: napi_get_named_property 1", tag);
        return NULL;
    }
    size_t strSize1 = 0;
    status = napi_get_value_string_utf8(env, napiPropStr, NULL, 0, &strSize1);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: get value string", tag);
        return NULL;
    }
    char *objStrIn = new char[strSize1 + 1];
    /* [NAPI_GEN]: 用于获取字符串*/
    status = napi_get_value_string_utf8(env, napiPropStr, objStrIn, strSize1 + 1, &strSize1);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: get value string", tag);
        delete[] objStrIn;
        return NULL;
    }
    return objStrIn;
}

char *getNapiCjsonValuestring(napi_env env, napi_value cjsonObj, const char *tag)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    // 获取valuestring
    napi_value napiPropValueStr;
    status = napi_get_named_property(env, cjsonObj, "valuestring", &napiPropValueStr);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: napi_get_named_property", tag);
        return NULL;
    }
    size_t strSize2 = 0;
    status = napi_get_value_string_utf8(env, napiPropValueStr, NULL, 0, &strSize2);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: get value string", tag);
        return NULL;
    }
    char *objValueStrIn = new char[strSize2 + 1];
    /* [NAPI_GEN]: 用于获取字符串*/
    status = napi_get_value_string_utf8(env, napiPropValueStr, objValueStrIn, strSize2 + 1, &strSize2);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: get value string", tag);
        delete[] objValueStrIn;
        return NULL;
    }
    return objValueStrIn;
}

double getNapiCjsonValuedouble(napi_env env, napi_value cjsonObj, const char *tag)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    // 获取valuedouble 并加入obj
    napi_value napiPropValueDouble;
    status = napi_get_named_property(env, cjsonObj, "valuedouble", &napiPropValueDouble);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: napi_get_named_property 2", tag);
        return NULL;
    }
    double objValueDoubleIn = 0;
    status = napi_get_value_double(env, napiPropValueDouble, &objValueDoubleIn);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: napi_get_value_double", tag);
        return NULL;
    }
    return objValueDoubleIn;
}

int getNapiCjsonType(napi_env env, napi_value cjsonObj, const char *tag)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    // 获取cjson bool 并加入obj
    napi_value napiPropValueBoolean;
    status = napi_get_named_property(env, cjsonObj, "type", &napiPropValueBoolean);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: napi_get_named_property 3", tag);
        return NULL;
    }

    int objValueTypeIn = 0;
    status = napi_get_value_int32(env, napiPropValueBoolean, &objValueTypeIn);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: napi_get_value_int32", tag);
        return NULL;
    }
    return objValueTypeIn;
}

cJSON *getNapiCjsonChild(napi_env env, napi_value cjsonObj, cJSON *jsonObj, const char *tag)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    // 遍历child
    napi_value napiChildObj;
    status = napi_get_named_property(env, cjsonObj, "child", &napiChildObj);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: napi_get_named_property", tag);
        return NULL;
    }
    napi_valuetype valuetype;
    status = napi_typeof(env, napiChildObj, &valuetype);
    if (valuetype == napi_object) {
        if (!IsEmptyObject(env, napiChildObj, tag)) {
            jsonObj = initCJSON_Object(env, napiChildObj, jsonObj, tag);
        }
    }
    return jsonObj;
}

cJSON *getNapiCjsonNext(napi_env env, napi_value cjsonObj, cJSON *jsonObj, const char *tag)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    // 遍历next
    napi_value napiNextObj;
    status = napi_get_named_property(env, cjsonObj, "next", &napiNextObj);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: napi_get_named_property", tag);
        return NULL;
    }
    napi_valuetype valuetypeNext;
    status = napi_typeof(env, napiNextObj, &valuetypeNext);
    if (valuetypeNext == napi_object) {
        if (!IsEmptyObject(env, napiNextObj, tag)) {
            jsonObj = initCJSON_Object(env, napiNextObj, jsonObj, tag);
        }
    }
    return jsonObj;
}

cJSON *getNapiCjsonPrev(napi_env env, napi_value cjsonObj, cJSON *jsonObj, const char *tag)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    // 遍历prev
    napi_value napiPrevObj;
    status = napi_get_named_property(env, cjsonObj, "prev", &napiPrevObj);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "initCJSON_Object: napi_get_named_property", tag);
        return NULL;
    }
    napi_valuetype valuetypePrev;
    status = napi_typeof(env, napiPrevObj, &valuetypePrev);
    if (valuetypePrev == napi_object) {
        if (!IsEmptyObject(env, napiPrevObj, tag)) {
            jsonObj = initCJSON_Object(env, napiPrevObj, jsonObj, tag);
        }
    }
    return jsonObj;
}

/* 在native初始化js传递的对象， 公共方法
 * env: 当前环境的句柄，代表当前的Node.js环境
 * cjsonObj: 从js传递的cJSON对象
 * jsonObj: 待初始化的native层cJSON对象
 * tag: 日志打印标识符
 */
cJSON *initCJSON_Object(napi_env env, napi_value cjsonObj, cJSON *jsonObj, const char *tag)
{
    cJSON *jsonOut = nullptr;
    char *objStrIn = getNapiCjsonString(env, cjsonObj, tag);
    if (objStrIn != NULL && objStrIn[0] != '\0') {
        char *objValueStrIn = getNapiCjsonValuestring(env, cjsonObj, tag);
        if (objValueStrIn != NULL && objValueStrIn[0] != '\0') {
            jsonOut = cJSON_AddStringToObject(jsonObj, objStrIn, objValueStrIn);
        }
        double objValueDoubleIn = getNapiCjsonValuedouble(env, cjsonObj, tag);
        if (objValueDoubleIn != 0) {
            jsonOut = cJSON_AddNumberToObject(jsonObj, objStrIn, objValueDoubleIn);
        }
        int objValueTypeIn = getNapiCjsonType(env, cjsonObj, tag);
        if (objValueTypeIn == TYPE1) {
            jsonOut = cJSON_AddFalseToObject(jsonObj, objStrIn);
        } else if (objValueTypeIn == TYPE2) {
            jsonOut = cJSON_AddTrueToObject(jsonObj, objStrIn);
        }
    }

    jsonObj = getNapiCjsonChild(env, cjsonObj, jsonObj, tag);
    jsonObj = getNapiCjsonNext(env, cjsonObj, jsonObj, tag);
    jsonObj = getNapiCjsonPrev(env, cjsonObj, jsonObj, tag);
    
    return jsonObj;
}