#include "cjson/cJSON.h"
#include "napi/native_api.h"
#include <hilog/log.h>
#include <string>
#include <stddef.h>

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

void getErrMsgCJSon(napi_status &status, napi_env &env, const napi_extended_error_info *&extended_error_info,
               const char *info, const char *tag) {
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

// [NAPI_GEN]: introduce function
napi_value KH418_CJSON_Parse(napi_env env, napi_callback_info info) {
    // [NAPI_GEN]: get function param in
    size_t argc = 1;
    napi_value args[1] = {nullptr};
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_get_cb_info", tag);
        return nullptr;
    }
    napi_valuetype valuetype0;
    status = napi_typeof(env, args[0], &valuetype0);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_typeof", tag);
        return nullptr;
    }
    size_t str_size0 = 0;
    status = napi_get_value_string_utf8(env, args[0], NULL, 0, &str_size0);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "get value string", tag);
        return NULL;
    }
    char *valueIn0 = new char[str_size0 + 1];
    status = napi_get_value_string_utf8(env, args[0], valueIn0, str_size0 + 1, &str_size0);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "get value string", tag);
        delete[] valueIn0;
        return NULL;
    }
    // delete[] valueIn0; // remember to delete memory
    
    // Todo: add business logic.
    cJSON *json = cJSON_Parse(valueIn0);
    int32_t myInt32Type = static_cast<int32_t>(json->type);
    int32_t myInt32Valueint = static_cast<int32_t>(json->valueint);
    char *valuestring = json->valuestring;
    char *string2 = json->string;
    const char * tset = "test";
    if (json->valuestring == NULL) {
        valuestring = "json->valuestring is NULL";
    }
    if (json->string == NULL) {
        string2 = "json->string is NULL";
    }
    cJSON *jsonNext = json->next;
    napi_value nextOut;
    status = napi_create_object(env, &nextOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
    napi_value typeNextOut;
    if (jsonNext != NULL) {
        int32_t myInt32NextType = static_cast<int32_t>(jsonNext->type);
        status = napi_create_int32(env, myInt32NextType, &typeNextOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, nextOut, "type", typeNextOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
            return nullptr;
        }
    }
  
    napi_value childOut;
    status = napi_create_object(env, &childOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
    cJSON *jsonChild = json->child;
    if (jsonChild != NULL) {
        napi_value typeChildOut;
        napi_value valuestringChildOut;
        napi_value stringChildOut;
        napi_value valueintChildOut;
        napi_value valuedoubleChildOut;

        int32_t myInt32ChildType = static_cast<int32_t>(jsonChild->type);
        status = napi_create_int32(env, myInt32ChildType, &typeChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, childOut, "type", typeChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
            return nullptr;
        }
        char *stringChild = jsonChild->string;
        if (jsonChild->string == NULL) {
            stringChild = "jsonChild->string is NULL";
        }
        status = napi_create_string_utf8(env, stringChild, NAPI_AUTO_LENGTH, &stringChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_string_utf8", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, childOut, "string", stringChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
            return nullptr;
        }

        char *valuestringChild = jsonChild->valuestring;
        if (jsonChild->valuestring == NULL) {
            valuestringChild = "jsonChild->valuestring is NULL";
        }
        status = napi_create_string_utf8(env, valuestringChild, NAPI_AUTO_LENGTH, &valuestringChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_string_utf8", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, childOut, "valuestring", valuestringChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
            return nullptr;
        }

        int32_t myInt32ChildValueint = static_cast<int32_t>(jsonChild->valueint);
        status = napi_create_int32(env, myInt32ChildValueint, &valueintChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, childOut, "valueint", valueintChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
            return nullptr;
        }

        status = napi_create_double(env, json->valuedouble, &valuedoubleChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_double", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, childOut, "valuedouble", valuedoubleChildOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
            return nullptr;
        }
    }
    
    napi_value prevOut;
    status = napi_create_object(env, &prevOut);
    napi_value typePreOut;
    cJSON *jsonPrev = json->prev;
    if (jsonPrev != NULL) {
        int32_t myInt32PreType = static_cast<int32_t>(jsonPrev->type);
        status = napi_create_int32(env, myInt32PreType, &typePreOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, prevOut, "type", typePreOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", tag);
            return nullptr;
        }
    }


     // [NAPI_GEN]: function return value
     napi_value cJSON_ParseOut;
     status = napi_create_object(env, &cJSON_ParseOut);
     if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_object", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, cJSON_ParseOut, "next", nextOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
            return nullptr;
        }
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_object", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, cJSON_ParseOut, "prev", prevOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
            return nullptr;
        }
    
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_create_object", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, cJSON_ParseOut, "child", childOut);
        if (status != napi_ok) {
            getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
            return nullptr;
        }
    napi_value typeOut;
    status = napi_create_int32(env, myInt32Type, &typeOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "type", typeOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    napi_value valuestringOut;
    status = napi_create_string_utf8(env, valuestring, NAPI_AUTO_LENGTH, &valuestringOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_string_utf8", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "valuestring", valuestringOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    napi_value valueintOut;
    status = napi_create_int32(env, myInt32Valueint, &valueintOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_int32", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "valueint", valueintOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    napi_value valuedoubleOut;
    status = napi_create_double(env, json->valuedouble, &valuedoubleOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_double", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "valuedouble", valuedoubleOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    napi_value stringOut;
    status = napi_create_string_utf8(env, string2, NAPI_AUTO_LENGTH, &stringOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_create_string_utf8", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, cJSON_ParseOut, "string", stringOut);
    if (status != napi_ok) {
        getErrMsgCJSon(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }

    return cJSON_ParseOut;
}
