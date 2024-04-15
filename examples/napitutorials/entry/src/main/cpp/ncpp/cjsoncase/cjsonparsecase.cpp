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
#include "cjson/cJSON.h"
#include "napi/native_api.h"
#include <bits/alltypes.h>
#include <hilog/log.h>
#include <string>

#define GLOBAL_RESMGR (0xFFEE)
constexpr int32_t STR_MAX_SIZE = 200;
constexpr int32_t LONG_STR_MAX_SIZE = 1024;
constexpr int32_t ERR_OK = 0;
constexpr int8_t NO_ERROR = 0;
constexpr int8_t ERROR = -1;
constexpr uint8_t PARAM0 = 0;
constexpr uint8_t PARAM1 = 1;
constexpr uint8_t PARAM2 = 2;
constexpr uint8_t PARAM3 = 3;
constexpr uint8_t PARAM4 = 4;
constexpr uint8_t PARAM5 = 5;
constexpr uint8_t PARAM6 = 6;
constexpr uint8_t PARAM7 = 7;
constexpr uint8_t PARAM8 = 8;
constexpr uint8_t PARAM9 = 9;
constexpr uint8_t PARAM10 = 10;
constexpr uint8_t PARAM11 = 11;
constexpr uint8_t PARAM12 = 12;
constexpr uint8_t PARAM100 = 100;

static const char *TAG = "[KH418_CJSON_Parse]";

void getErrMsgCJSon(napi_status &status, napi_env &env, const napi_extended_error_info *&extended_error_info,
    const char *info, const char *tag)
{
    status = napi_get_last_error_info(env, &extended_error_info);
    if (status == napi_ok && extended_error_info != NULL) {
        const char *errorMessage =
            extended_error_info->error_message != NULL ? extended_error_info->error_message : "Unknown error";
        OH_LOG_Print(LOG_APP, LOG_ERROR, GLOBAL_RESMGR, tag, "errmsg %{public}s!, engine_err_code %{public}d!.",
                     std::to_string(extended_error_info->engine_error_code).c_str(), extended_error_info->error_code);
        std::string myInfo = info;
        std::string res = "Failed to " + myInfo + " em = " + errorMessage +
                          ", eec = " + std::to_string(extended_error_info->engine_error_code) +
                          ", ec = " + std::to_string(extended_error_info->error_code);
        napi_throw_error(env, NULL, res.c_str());
    }
}

napi_value cJsonParsePrevOut(napi_env env, cJSON *json)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_value prevOut;
    status = napi_create_object(env, &prevOut);
    napi_value typePreOut;
    cJSON *jsonPrev = json->prev;
    if (jsonPrev != NULL) {
        int32_t myInt32PreType = static_cast<int32_t>(jsonPrev->type);
        status = napi_create_int32(env, myInt32PreType, &typePreOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", TAG);
            return nullptr;
        }
        status = napi_set_named_property(env, prevOut, "type", typePreOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", TAG);
            return nullptr;
        }
    }
    return prevOut;
}

napi_value getChildTypeOut(napi_env env, napi_value childOut, cJSON *jsonChild)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_value typeChildOut;
    int32_t myInt32ChildType = static_cast<int32_t>(jsonChild->type);
    status = napi_create_int32(env, myInt32ChildType, &typeChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "type", typeChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    return childOut;
}

napi_value getChildStringOut(napi_env env, napi_value childOut, char *stringChild)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_value stringChildOut;
    status = napi_create_string_utf8(env, stringChild, NAPI_AUTO_LENGTH, &stringChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_string_utf8", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "string", stringChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    return childOut;
}

napi_value getChildValueStringOut(napi_env env, napi_value childOut, char *valuestringChild)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_value valuestringChildOut;
    status = napi_create_string_utf8(env, valuestringChild, NAPI_AUTO_LENGTH, &valuestringChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_string_utf8", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "valuestring", valuestringChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    return childOut;
}

napi_value getChildValueIntOut(napi_env env, napi_value childOut, cJSON *jsonChild)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_value valueintChildOut;
    int32_t myInt32ChildValueint = static_cast<int32_t>(jsonChild->valueint);
    status = napi_create_int32(env, myInt32ChildValueint, &valueintChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "valueint", valueintChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    return childOut;
}

napi_value getChildValueDoubleOut(napi_env env, napi_value childOut, cJSON *jsonChild)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_value valuedoubleChildOut;
    status = napi_create_double(env, jsonChild->valuedouble, &valuedoubleChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_double", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "valuedouble", valuedoubleChildOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    return childOut;
}

napi_value cJsonParseChildOut(napi_env env, cJSON *json)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_value childOut;
    status = napi_create_object(env, &childOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_object", TAG);
        return nullptr;
    }
    cJSON *jsonChild = json->child;
    if (jsonChild != NULL) {
        childOut = getChildTypeOut(env, childOut, jsonChild);
        char *stringChild = jsonChild->string;
        if (jsonChild->string == NULL) {
            stringChild = "jsonChild->string is NULL";
        }
        childOut = getChildStringOut(env, childOut, stringChild);
        char *valuestringChild = jsonChild->valuestring;
        if (jsonChild->valuestring == NULL) {
            valuestringChild = "jsonChild->valuestring is NULL";
        }
        childOut = getChildValueStringOut(env, childOut, valuestringChild);
        childOut = getChildValueIntOut(env, childOut, jsonChild);
        childOut = getChildValueDoubleOut(env, childOut, jsonChild);
    }
    return childOut;
}

napi_value cJsonParseNextOut(napi_env env, cJSON *json)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    cJSON *jsonNext = json->next;
    napi_value nextOut;
    status = napi_create_object(env, &nextOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_object", TAG);
        return nullptr;
    }
    napi_value typeNextOut;
    if (jsonNext != NULL) {
        int32_t myInt32NextType = static_cast<int32_t>(jsonNext->type);
        status = napi_create_int32(env, myInt32NextType, &typeNextOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", TAG);
            return nullptr;
        }
        status = napi_set_named_property(env, nextOut, "type", typeNextOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
            return nullptr;
        }
    }
    return nextOut;
}

char *getInfo(napi_env env, napi_value param0)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_valuetype valuetype0;
    status = napi_typeof(env, param0, &valuetype0);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_typeof", TAG);
        return nullptr;
    }
    size_t strSize0 = 0;
    status = napi_get_value_string_utf8(env, param0, NULL, 0, &strSize0);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "get value string", TAG);
        return NULL;
    }
    char *valueIn0 = new char[strSize0 + 1];
    status = napi_get_value_string_utf8(env, param0, valueIn0, strSize0 + 1, &strSize0);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "get value string", TAG);
        delete[] valueIn0;
        return NULL;
    }
    return valueIn0;
}

napi_value getReturnObj(napi_env env, napi_value cJSON_ParseOut, napi_value nextOut, napi_value prevOut,
    napi_value childOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    status = napi_set_named_property(env, cJSON_ParseOut, "next", nextOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "prev", prevOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "child", childOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
   
    return cJSON_ParseOut;
}

napi_value getReturnObj2(napi_env env, napi_value cJSON_ParseOut, char *valuestring, int32_t myInt32Type)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_value typeOut;
    status = napi_create_int32(env, myInt32Type, &typeOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "type", typeOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    napi_value valuestringOut;
    status = napi_create_string_utf8(env, valuestring, NAPI_AUTO_LENGTH, &valuestringOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_string_utf8", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "valuestring", valuestringOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    return cJSON_ParseOut;
}

napi_value getReturnObj3(napi_env env, napi_value cJSON_ParseOut, int32_t myInt32Valueint,double myValueDouble, char *string2)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    napi_value valueintOut;
    status = napi_create_int32(env, myInt32Valueint, &valueintOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "valueint", valueintOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }

    napi_value valuedoubleOut;
    status = napi_create_double(env, myValueDouble, &valuedoubleOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_double", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "valuedouble", valuedoubleOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }

    napi_value stringOut;
    status = napi_create_string_utf8(env, string2, NAPI_AUTO_LENGTH, &stringOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_string_utf8", TAG);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "string", stringOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", TAG);
        return nullptr;
    }
    return cJSON_ParseOut;
}

    // [NAPI_GEN]: introduce function
    napi_value KH418_CJSON_Parse(napi_env env, napi_callback_info info) {
    // [NAPI_GEN]: get function param in
    size_t argc = 1;
    napi_value args[1] = {nullptr};
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_get_cb_info", TAG);
        return nullptr;
    }
    napi_value param0 = args[0];
    char *valueIn0 = getInfo(env, param0);

    // Todo: add business logic.
    cJSON *json = cJSON_Parse(valueIn0);
    int32_t myInt32Type = static_cast<int32_t>(json->type);
    int32_t myInt32Valueint = static_cast<int32_t>(json->valueint);
    double myValueDouble = json->valuedouble;
    char *valuestring = json->valuestring;
    char *string2 = json->string;
    if (json->valuestring == NULL) {
        valuestring = "json->valuestring is NULL";
    }
    if (json->string == NULL) {
        string2 = "json->string is NULL";
    }
    napi_value nextOut = cJsonParseNextOut(env, json);
    napi_value childOut = cJsonParseChildOut(env, json);
    napi_value prevOut = cJsonParsePrevOut(env, json);
    delete[] valueIn0;
    
    // [NAPI_GEN]: function return value
    napi_value cJSON_ParseOut;
    status = napi_create_object(env, &cJSON_ParseOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_object", TAG);
        return nullptr;
    }
    cJSON_ParseOut = getReturnObj(env, cJSON_ParseOut, nextOut, prevOut, childOut);
    cJSON_ParseOut = getReturnObj2(env, cJSON_ParseOut, valuestring, myInt32Type);
    cJSON_ParseOut = getReturnObj3(env, cJSON_ParseOut, myInt32Valueint, myValueDouble, string2);

    return cJSON_ParseOut;
}
