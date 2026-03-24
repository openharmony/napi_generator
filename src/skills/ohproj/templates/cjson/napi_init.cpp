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

#include "napi/native_api.h"
#include "cJSON.h"
#include <map>
#include <string>
#include <cstring>

static std::map<int64_t, cJSON*> g_cjsonHandles;
static std::map<int64_t, cJSON*> g_cjsonBorrowed;
static int64_t g_cjsonNextId = 1;

static int64_t StoreHandle(cJSON* p)
{
    if (!p) return 0;
    g_cjsonHandles[g_cjsonNextId] = p;
    return g_cjsonNextId++;
}

static int64_t StoreBorrowed(cJSON* p)
{
    if (!p) return 0;
    g_cjsonBorrowed[g_cjsonNextId] = p;
    return g_cjsonNextId++;
}

static cJSON* GetHandle(int64_t id)
{
    auto it = g_cjsonHandles.find(id);
    if (it != g_cjsonHandles.end()) return it->second;
    auto itb = g_cjsonBorrowed.find(id);
    return (itb == g_cjsonBorrowed.end()) ? nullptr : itb->second;
}

static void RemoveHandle(int64_t id)
{
    auto it = g_cjsonHandles.find(id);
    if (it != g_cjsonHandles.end()) {
        cJSON_Delete(it->second);
        g_cjsonHandles.erase(it);
        return;
    }
    auto itb = g_cjsonBorrowed.find(id);
    if (itb != g_cjsonBorrowed.end()) {
        g_cjsonBorrowed.erase(itb);
    }
}

static napi_value CjsonVersion(napi_env env, napi_callback_info info)
{
    const char* ver = cJSON_Version();
    napi_value result;
    napi_create_string_utf8(env, ver, NAPI_AUTO_LENGTH, &result);
    return result;
}

static napi_value CjsonParse(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[0], nullptr, 0, &len);
    std::string str(len + 1, '\0');
    napi_get_value_string_utf8(env, args[0], &str[0], len + 1, &len);
    cJSON* root = cJSON_Parse(str.c_str());
    int64_t id = StoreHandle(root);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonPrint(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    if (!item) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    char* out = cJSON_Print(item);
    if (!out) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    napi_value result;
    napi_create_string_utf8(env, out, NAPI_AUTO_LENGTH, &result);
    cJSON_free(out);
    return result;
}

static napi_value CjsonPrintUnformatted(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    if (!item) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    char* out = cJSON_PrintUnformatted(item);
    if (!out) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    napi_value result;
    napi_create_string_utf8(env, out, NAPI_AUTO_LENGTH, &result);
    cJSON_free(out);
    return result;
}

static napi_value CjsonDelete(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    RemoveHandle(id);
    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

static napi_value CjsonGetObjectItem(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    cJSON* obj = GetHandle(id);
    cJSON* item = obj ? cJSON_GetObjectItem(obj, key.c_str()) : nullptr;
    int64_t outId = StoreBorrowed(item);
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonGetArrayItem(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    int32_t index = 0;
    napi_get_value_int32(env, args[1], &index);
    cJSON* arr = GetHandle(id);
    cJSON* item = arr ? cJSON_GetArrayItem(arr, index) : nullptr;
    int64_t outId = StoreBorrowed(item);
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonGetArraySize(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* arr = GetHandle(id);
    int size = arr ? cJSON_GetArraySize(arr) : 0;
    napi_value result;
    napi_create_int32(env, size, &result);
    return result;
}

static napi_value CjsonGetStringValue(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    char* s = item ? cJSON_GetStringValue(item) : nullptr;
    if (!s) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    napi_value result;
    napi_create_string_utf8(env, s, NAPI_AUTO_LENGTH, &result);
    return result;
}

static napi_value CjsonGetNumberValue(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    double v = item ? cJSON_GetNumberValue(item) : 0.0;
    napi_value result;
    napi_create_double(env, v, &result);
    return result;
}

static napi_value CjsonIsObject(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    bool b = item ? cJSON_IsObject(item) : false;
    napi_value result;
    napi_get_boolean(env, b, &result);
    return result;
}

static napi_value CjsonIsArray(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    bool b = item ? cJSON_IsArray(item) : false;
    napi_value result;
    napi_get_boolean(env, b, &result);
    return result;
}

static napi_value CjsonIsString(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    bool b = item ? cJSON_IsString(item) : false;
    napi_value result;
    napi_get_boolean(env, b, &result);
    return result;
}

static napi_value CjsonIsNumber(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    bool b = item ? cJSON_IsNumber(item) : false;
    napi_value result;
    napi_get_boolean(env, b, &result);
    return result;
}

static napi_value CjsonIsNull(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    bool b = item ? cJSON_IsNull(item) : false;
    napi_value result;
    napi_get_boolean(env, b, &result);
    return result;
}

static napi_value CjsonCreateObject(napi_env env, napi_callback_info info)
{
    cJSON* obj = cJSON_CreateObject();
    int64_t id = StoreHandle(obj);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonCreateArray(napi_env env, napi_callback_info info)
{
    cJSON* arr = cJSON_CreateArray();
    int64_t id = StoreHandle(arr);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonCreateString(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[0], nullptr, 0, &len);
    std::string str(len + 1, '\0');
    napi_get_value_string_utf8(env, args[0], &str[0], len + 1, &len);
    cJSON* item = cJSON_CreateString(str.c_str());
    int64_t id = StoreHandle(item);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonCreateNumber(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    double num = 0;
    napi_get_value_double(env, args[0], &num);
    cJSON* item = cJSON_CreateNumber(num);
    int64_t id = StoreHandle(item);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonCreateBool(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    bool b = false;
    napi_get_value_bool(env, args[0], &b);
    cJSON* item = cJSON_CreateBool(b ? 1 : 0);
    int64_t id = StoreHandle(item);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonCreateNull(napi_env env, napi_callback_info info)
{
    cJSON* item = cJSON_CreateNull();
    int64_t id = StoreHandle(item);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonAddItemToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0, itemId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    napi_get_value_int64(env, args[2], &itemId);
    cJSON* obj = GetHandle(objId);
    cJSON* item = GetHandle(itemId);
    cJSON_bool ok = (obj && item) ? cJSON_AddItemToObject(obj, key.c_str(), item) : 0;
    if (ok && item) {
        g_cjsonHandles.erase(itemId);
    }
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonAddItemToArray(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t arrId = 0, itemId = 0;
    napi_get_value_int64(env, args[0], &arrId);
    napi_get_value_int64(env, args[1], &itemId);
    cJSON* arr = GetHandle(arrId);
    cJSON* item = GetHandle(itemId);
    cJSON_bool ok = (arr && item) ? cJSON_AddItemToArray(arr, item) : 0;
    if (ok && item) {
        g_cjsonHandles.erase(itemId);
    }
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonParseWithLength(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[0], nullptr, 0, &len);
    std::string str(len + 1, '\0');
    napi_get_value_string_utf8(env, args[0], &str[0], len + 1, &len);
    uint32_t uLen = 0;
    napi_get_value_uint32(env, args[1], &uLen);
    size_t bufLen = (uLen > 0) ? (size_t)uLen : len;
    cJSON* root = cJSON_ParseWithLength(str.c_str(), bufLen);
    int64_t id = StoreHandle(root);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonGetErrorPtr(napi_env env, napi_callback_info info)
{
    const char* err = cJSON_GetErrorPtr();
    if (!err) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    napi_value result;
    napi_create_string_utf8(env, err, NAPI_AUTO_LENGTH, &result);
    return result;
}

static napi_value CjsonHasObjectItem(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    cJSON* obj = GetHandle(id);
    cJSON_bool b = obj ? cJSON_HasObjectItem(obj, key.c_str()) : 0;
    napi_value result;
    napi_get_boolean(env, b != 0, &result);
    return result;
}

static napi_value CjsonGetObjectItemCaseSensitive(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    cJSON* obj = GetHandle(id);
    cJSON* item = obj ? cJSON_GetObjectItemCaseSensitive(obj, key.c_str()) : nullptr;
    int64_t outId = StoreBorrowed(item);
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonIsInvalid(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    cJSON_bool b = item ? cJSON_IsInvalid(item) : 1;
    napi_value result;
    napi_get_boolean(env, b != 0, &result);
    return result;
}

static napi_value CjsonIsFalse(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    bool b = item ? cJSON_IsFalse(item) : false;
    napi_value result;
    napi_get_boolean(env, b, &result);
    return result;
}

static napi_value CjsonIsTrue(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    bool b = item ? cJSON_IsTrue(item) : false;
    napi_value result;
    napi_get_boolean(env, b, &result);
    return result;
}

static napi_value CjsonIsBool(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    bool b = item ? cJSON_IsBool(item) : false;
    napi_value result;
    napi_get_boolean(env, b, &result);
    return result;
}

static napi_value CjsonIsRaw(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    cJSON* item = GetHandle(id);
    bool b = item ? cJSON_IsRaw(item) : false;
    napi_value result;
    napi_get_boolean(env, b, &result);
    return result;
}

static napi_value CjsonCreateTrue(napi_env env, napi_callback_info info)
{
    cJSON* item = cJSON_CreateTrue();
    int64_t id = StoreHandle(item);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonCreateFalse(napi_env env, napi_callback_info info)
{
    cJSON* item = cJSON_CreateFalse();
    int64_t id = StoreHandle(item);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonCreateRaw(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[0], nullptr, 0, &len);
    std::string str(len + 1, '\0');
    napi_get_value_string_utf8(env, args[0], &str[0], len + 1, &len);
    cJSON* item = cJSON_CreateRaw(str.c_str());
    int64_t id = StoreHandle(item);
    napi_value result;
    napi_create_int64(env, id, &result);
    return result;
}

static napi_value CjsonPrintBuffered(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    int32_t prebuffer = 256;
    napi_get_value_int32(env, args[1], &prebuffer);
    bool fmt = false;
    napi_get_value_bool(env, args[2], &fmt);
    cJSON* item = GetHandle(id);
    if (!item) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    char* out = cJSON_PrintBuffered(item, prebuffer, fmt ? 1 : 0);
    if (!out) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    napi_value result;
    napi_create_string_utf8(env, out, NAPI_AUTO_LENGTH, &result);
    cJSON_free(out);
    return result;
}

static napi_value CjsonAddItemToObjectCS(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0, itemId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    napi_get_value_int64(env, args[2], &itemId);
    cJSON* obj = GetHandle(objId);
    cJSON* item = GetHandle(itemId);
    cJSON_bool ok = (obj && item) ? cJSON_AddItemToObjectCS(obj, key.c_str(), item) : 0;
    if (ok && item) {
        g_cjsonHandles.erase(itemId);
    }
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonAddItemReferenceToArray(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t arrId = 0, itemId = 0;
    napi_get_value_int64(env, args[0], &arrId);
    napi_get_value_int64(env, args[1], &itemId);
    cJSON* arr = GetHandle(arrId);
    cJSON* item = GetHandle(itemId);
    cJSON_bool ok = (arr && item) ? cJSON_AddItemReferenceToArray(arr, item) : 0;
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonAddItemReferenceToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0, itemId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    napi_get_value_int64(env, args[2], &itemId);
    cJSON* obj = GetHandle(objId);
    cJSON* item = GetHandle(itemId);
    cJSON_bool ok = (obj && item) ? cJSON_AddItemReferenceToObject(obj, key.c_str(), item) : 0;
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonDetachItemViaPointer(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t parentId = 0, itemId = 0;
    napi_get_value_int64(env, args[0], &parentId);
    napi_get_value_int64(env, args[1], &itemId);
    cJSON* parent = GetHandle(parentId);
    cJSON* item = GetHandle(itemId);
    cJSON* detached = (parent && item) ? cJSON_DetachItemViaPointer(parent, item) : nullptr;
    if (item && g_cjsonHandles.count(itemId))
        g_cjsonHandles.erase(itemId);
    if (item && g_cjsonBorrowed.count(itemId))
        g_cjsonBorrowed.erase(itemId);
    int64_t outId = detached ? StoreHandle(detached) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonDetachItemFromArray(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t arrId = 0;
    int32_t which = 0;
    napi_get_value_int64(env, args[0], &arrId);
    napi_get_value_int32(env, args[1], &which);
    cJSON* arr = GetHandle(arrId);
    cJSON* detached = arr ? cJSON_DetachItemFromArray(arr, which) : nullptr;
    int64_t outId = detached ? StoreHandle(detached) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonDeleteItemFromArray(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t arrId = 0;
    int32_t which = 0;
    napi_get_value_int64(env, args[0], &arrId);
    napi_get_value_int32(env, args[1], &which);
    cJSON* arr = GetHandle(arrId);
    if (arr) cJSON_DeleteItemFromArray(arr, which);
    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

static napi_value CjsonDetachItemFromObject(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    cJSON* obj = GetHandle(objId);
    cJSON* detached = obj ? cJSON_DetachItemFromObject(obj, key.c_str()) : nullptr;
    int64_t outId = detached ? StoreHandle(detached) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonDetachItemFromObjectCaseSensitive(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    cJSON* obj = GetHandle(objId);
    cJSON* detached = obj ? cJSON_DetachItemFromObjectCaseSensitive(obj, key.c_str()) : nullptr;
    int64_t outId = detached ? StoreHandle(detached) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonDeleteItemFromObject(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    cJSON* obj = GetHandle(objId);
    if (obj) cJSON_DeleteItemFromObject(obj, key.c_str());
    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

static napi_value CjsonDeleteItemFromObjectCaseSensitive(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    cJSON* obj = GetHandle(objId);
    if (obj) cJSON_DeleteItemFromObjectCaseSensitive(obj, key.c_str());
    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

static napi_value CjsonInsertItemInArray(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t arrId = 0, itemId = 0;
    int32_t which = 0;
    napi_get_value_int64(env, args[0], &arrId);
    napi_get_value_int32(env, args[1], &which);
    napi_get_value_int64(env, args[2], &itemId);
    cJSON* arr = GetHandle(arrId);
    cJSON* item = GetHandle(itemId);
    cJSON_bool ok = (arr && item) ? cJSON_InsertItemInArray(arr, which, item) : 0;
    if (ok && item) g_cjsonHandles.erase(itemId);
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonReplaceItemViaPointer(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t parentId = 0, itemId = 0, replacementId = 0;
    napi_get_value_int64(env, args[0], &parentId);
    napi_get_value_int64(env, args[1], &itemId);
    napi_get_value_int64(env, args[2], &replacementId);
    cJSON* parent = GetHandle(parentId);
    cJSON* item = GetHandle(itemId);
    cJSON* replacement = GetHandle(replacementId);
    cJSON_bool ok = (parent && item && replacement) ? cJSON_ReplaceItemViaPointer(parent, item, replacement) : 0;
    if (ok && item) {
        g_cjsonHandles.erase(itemId);
        g_cjsonBorrowed.erase(itemId);
    }
    if (ok && replacement) g_cjsonHandles.erase(replacementId);
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonReplaceItemInArray(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t arrId = 0, itemId = 0;
    int32_t which = 0;
    napi_get_value_int64(env, args[0], &arrId);
    napi_get_value_int32(env, args[1], &which);
    napi_get_value_int64(env, args[2], &itemId);
    cJSON* arr = GetHandle(arrId);
    cJSON* item = GetHandle(itemId);
    cJSON_bool ok = (arr && item) ? cJSON_ReplaceItemInArray(arr, which, item) : 0;
    if (ok && item) g_cjsonHandles.erase(itemId);
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonReplaceItemInObject(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0, itemId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    napi_get_value_int64(env, args[2], &itemId);
    cJSON* obj = GetHandle(objId);
    cJSON* item = GetHandle(itemId);
    cJSON_bool ok = (obj && item) ? cJSON_ReplaceItemInObject(obj, key.c_str(), item) : 0;
    if (ok && item) g_cjsonHandles.erase(itemId);
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonReplaceItemInObjectCaseSensitive(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0, itemId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string key(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &key[0], len + 1, &len);
    napi_get_value_int64(env, args[2], &itemId);
    cJSON* obj = GetHandle(objId);
    cJSON* item = GetHandle(itemId);
    cJSON_bool ok = (obj && item) ? cJSON_ReplaceItemInObjectCaseSensitive(obj, key.c_str(), item) : 0;
    if (ok && item) g_cjsonHandles.erase(itemId);
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonDuplicate(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    bool recurse = true;
    napi_get_value_int64(env, args[0], &id);
    napi_get_value_bool(env, args[1], &recurse);
    cJSON* item = GetHandle(id);
    cJSON* dup = item ? cJSON_Duplicate(item, recurse ? 1 : 0) : nullptr;
    int64_t outId = dup ? StoreHandle(dup) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonCompare(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t idA = 0, idB = 0;
    bool caseSensitive = false;
    napi_get_value_int64(env, args[0], &idA);
    napi_get_value_int64(env, args[1], &idB);
    napi_get_value_bool(env, args[2], &caseSensitive);
    cJSON* a = GetHandle(idA);
    cJSON* b = GetHandle(idB);
    cJSON_bool ok = (a && b) ? cJSON_Compare(a, b, caseSensitive ? 1 : 0) : 0;
    napi_value result;
    napi_get_boolean(env, ok != 0, &result);
    return result;
}

static napi_value CjsonMinify(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[0], nullptr, 0, &len);
    std::string str(len + 1, '\0');
    napi_get_value_string_utf8(env, args[0], &str[0], len + 1, &len);
    cJSON_Minify(&str[0]);
    napi_value result;
    napi_create_string_utf8(env, str.c_str(), NAPI_AUTO_LENGTH, &result);
    return result;
}

static napi_value CjsonAddNullToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string name(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &name[0], len + 1, &len);
    cJSON* obj = GetHandle(objId);
    cJSON* added = obj ? cJSON_AddNullToObject(obj, name.c_str()) : nullptr;
    int64_t outId = added ? StoreBorrowed(added) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonAddTrueToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string name(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &name[0], len + 1, &len);
    cJSON* obj = GetHandle(objId);
    cJSON* added = obj ? cJSON_AddTrueToObject(obj, name.c_str()) : nullptr;
    int64_t outId = added ? StoreBorrowed(added) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonAddFalseToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string name(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &name[0], len + 1, &len);
    cJSON* obj = GetHandle(objId);
    cJSON* added = obj ? cJSON_AddFalseToObject(obj, name.c_str()) : nullptr;
    int64_t outId = added ? StoreBorrowed(added) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonAddBoolToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string name(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &name[0], len + 1, &len);
    bool b = false;
    napi_get_value_bool(env, args[2], &b);
    cJSON* obj = GetHandle(objId);
    cJSON* added = obj ? cJSON_AddBoolToObject(obj, name.c_str(), b ? 1 : 0) : nullptr;
    int64_t outId = added ? StoreBorrowed(added) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonAddNumberToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string name(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &name[0], len + 1, &len);
    double num = 0;
    napi_get_value_double(env, args[2], &num);
    cJSON* obj = GetHandle(objId);
    cJSON* added = obj ? cJSON_AddNumberToObject(obj, name.c_str(), num) : nullptr;
    int64_t outId = added ? StoreBorrowed(added) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonAddStringToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t nlen = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &nlen);
    std::string name(nlen + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &name[0], nlen + 1, &nlen);
    size_t vlen = 0;
    napi_get_value_string_utf8(env, args[2], nullptr, 0, &vlen);
    std::string val(vlen + 1, '\0');
    napi_get_value_string_utf8(env, args[2], &val[0], vlen + 1, &vlen);
    cJSON* obj = GetHandle(objId);
    cJSON* added = obj ? cJSON_AddStringToObject(obj, name.c_str(), val.c_str()) : nullptr;
    int64_t outId = added ? StoreBorrowed(added) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonAddRawToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t nlen = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &nlen);
    std::string name(nlen + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &name[0], nlen + 1, &nlen);
    size_t vlen = 0;
    napi_get_value_string_utf8(env, args[2], nullptr, 0, &vlen);
    std::string raw(vlen + 1, '\0');
    napi_get_value_string_utf8(env, args[2], &raw[0], vlen + 1, &vlen);
    cJSON* obj = GetHandle(objId);
    cJSON* added = obj ? cJSON_AddRawToObject(obj, name.c_str(), raw.c_str()) : nullptr;
    int64_t outId = added ? StoreBorrowed(added) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonAddObjectToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string name(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &name[0], len + 1, &len);
    cJSON* obj = GetHandle(objId);
    cJSON* added = obj ? cJSON_AddObjectToObject(obj, name.c_str()) : nullptr;
    int64_t outId = added ? StoreHandle(added) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonAddArrayToObject(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t objId = 0;
    napi_get_value_int64(env, args[0], &objId);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string name(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &name[0], len + 1, &len);
    cJSON* obj = GetHandle(objId);
    cJSON* added = obj ? cJSON_AddArrayToObject(obj, name.c_str()) : nullptr;
    int64_t outId = added ? StoreHandle(added) : 0;
    napi_value result;
    napi_create_int64(env, outId, &result);
    return result;
}

static napi_value CjsonSetValuestring(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    size_t len = 0;
    napi_get_value_string_utf8(env, args[1], nullptr, 0, &len);
    std::string val(len + 1, '\0');
    napi_get_value_string_utf8(env, args[1], &val[0], len + 1, &len);
    cJSON* item = GetHandle(id);
    char* out = item ? cJSON_SetValuestring(item, val.c_str()) : nullptr;
    if (!out) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    napi_value result;
    napi_create_string_utf8(env, out, NAPI_AUTO_LENGTH, &result);
    return result;
}

static napi_value CjsonMalloc(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int32_t sizeVal = 0;
    napi_get_value_int32(env, args[0], &sizeVal);
    size_t size = (sizeVal > 0) ? (size_t)sizeVal : 0;
    void* ptr = cJSON_malloc(size);
    if (!ptr) {
        napi_value nullVal;
        napi_get_null(env, &nullVal);
        return nullVal;
    }
    napi_value result;
    napi_create_int64(env, (int64_t)(uintptr_t)ptr, &result);
    return result;
}

static napi_value CjsonFree(napi_env env, napi_callback_info info)
{
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    int64_t id = 0;
    napi_get_value_int64(env, args[0], &id);
    void* ptr = (void*)(uintptr_t)id;
    cJSON_free(ptr);
    napi_value undef;
    napi_get_undefined(env, &undef);
    return undef;
}

static napi_value Add(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    double value0 = 0, value1 = 0;
    napi_get_value_double(env, args[0], &value0);
    napi_get_value_double(env, args[1], &value1);
    napi_value sum;
    napi_create_double(env, value0 + value1, &sum);
    return sum;
}

EXTERN_C_START
static napi_value Init(napi_env env, napi_value exports)
{
    napi_property_descriptor desc[] = {
        { "add", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonVersion", nullptr, CjsonVersion, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonParse", nullptr, CjsonParse, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonParseWithLength", nullptr, CjsonParseWithLength, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonPrint", nullptr, CjsonPrint, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonPrintUnformatted", nullptr, CjsonPrintUnformatted, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonPrintBuffered", nullptr, CjsonPrintBuffered, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonDelete", nullptr, CjsonDelete, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonGetObjectItem", nullptr, CjsonGetObjectItem, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonGetObjectItemCaseSensitive", nullptr, CjsonGetObjectItemCaseSensitive, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonHasObjectItem", nullptr, CjsonHasObjectItem, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonGetErrorPtr", nullptr, CjsonGetErrorPtr, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonGetArrayItem", nullptr, CjsonGetArrayItem, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonGetArraySize", nullptr, CjsonGetArraySize, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonGetStringValue", nullptr, CjsonGetStringValue, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonGetNumberValue", nullptr, CjsonGetNumberValue, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsObject", nullptr, CjsonIsObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsArray", nullptr, CjsonIsArray, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsString", nullptr, CjsonIsString, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsNumber", nullptr, CjsonIsNumber, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsNull", nullptr, CjsonIsNull, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsInvalid", nullptr, CjsonIsInvalid, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsFalse", nullptr, CjsonIsFalse, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsTrue", nullptr, CjsonIsTrue, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsBool", nullptr, CjsonIsBool, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonIsRaw", nullptr, CjsonIsRaw, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCreateObject", nullptr, CjsonCreateObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCreateArray", nullptr, CjsonCreateArray, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCreateString", nullptr, CjsonCreateString, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCreateNumber", nullptr, CjsonCreateNumber, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCreateBool", nullptr, CjsonCreateBool, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCreateNull", nullptr, CjsonCreateNull, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCreateTrue", nullptr, CjsonCreateTrue, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCreateFalse", nullptr, CjsonCreateFalse, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCreateRaw", nullptr, CjsonCreateRaw, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddItemToObject", nullptr, CjsonAddItemToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddItemToObjectCS", nullptr, CjsonAddItemToObjectCS, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddItemToArray", nullptr, CjsonAddItemToArray, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddItemReferenceToArray", nullptr, CjsonAddItemReferenceToArray, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddItemReferenceToObject", nullptr, CjsonAddItemReferenceToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonDetachItemViaPointer", nullptr, CjsonDetachItemViaPointer, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonDetachItemFromArray", nullptr, CjsonDetachItemFromArray, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonDeleteItemFromArray", nullptr, CjsonDeleteItemFromArray, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonDetachItemFromObject", nullptr, CjsonDetachItemFromObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonDetachItemFromObjectCaseSensitive", nullptr, CjsonDetachItemFromObjectCaseSensitive, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonDeleteItemFromObject", nullptr, CjsonDeleteItemFromObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonDeleteItemFromObjectCaseSensitive", nullptr, CjsonDeleteItemFromObjectCaseSensitive, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonInsertItemInArray", nullptr, CjsonInsertItemInArray, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonReplaceItemViaPointer", nullptr, CjsonReplaceItemViaPointer, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonReplaceItemInArray", nullptr, CjsonReplaceItemInArray, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonReplaceItemInObject", nullptr, CjsonReplaceItemInObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonReplaceItemInObjectCaseSensitive", nullptr, CjsonReplaceItemInObjectCaseSensitive, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonDuplicate", nullptr, CjsonDuplicate, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonCompare", nullptr, CjsonCompare, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonMinify", nullptr, CjsonMinify, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddNullToObject", nullptr, CjsonAddNullToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddTrueToObject", nullptr, CjsonAddTrueToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddFalseToObject", nullptr, CjsonAddFalseToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddBoolToObject", nullptr, CjsonAddBoolToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddNumberToObject", nullptr, CjsonAddNumberToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddStringToObject", nullptr, CjsonAddStringToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddRawToObject", nullptr, CjsonAddRawToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddObjectToObject", nullptr, CjsonAddObjectToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonAddArrayToObject", nullptr, CjsonAddArrayToObject, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonSetValuestring", nullptr, CjsonSetValuestring, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonMalloc", nullptr, CjsonMalloc, nullptr, nullptr, nullptr, napi_default, nullptr },
        { "cjsonFree", nullptr, CjsonFree, nullptr, nullptr, nullptr, napi_default, nullptr },
    };
    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
    return exports;
}
EXTERN_C_END

static napi_module demoModule = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = Init,
    .nm_modname = "entry",
    .nm_priv = ((void*)0),
    .reserved = { 0 },
};

extern "C" __attribute__((constructor)) void RegisterEntryModule(void)
{
    napi_module_register(&demoModule);
}
