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
static const int MAX_BUFFER_SIZE = 128;

class Node {
public:
    Node(napi_env env, napi_value id)
    {
        // 将 JavaScript 字符串转换为 C++ 字符串
        size_t idLength = MAX_BUFFER_SIZE;
        char buf[MAX_BUFFER_SIZE];
        char *buffer = buf;
        napi_get_value_string_utf8(env, id, buffer, idLength, nullptr);
        // 将 C++ 字符串转换为 std::string
        _id = std::string(buffer);
    }
    std::string GetId() { return _id; }
private:
    std::string _id; // 成员变量，存储 id
};

napi_value testNapiWrap(napi_env env, napi_callback_info info)
{
    size_t argc = PARAM1;
    napi_value argv[PARAM1] = {0};
    napi_value thisObj = nullptr;
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
    napi_valuetype resultType;
    napi_typeof(env, argv[PARAM0], &resultType);
    if (resultType != napi_string) {
        std::string res = "Expected a string, got " + std::to_string(resultType);
        napi_throw_error(env, NULL, res.c_str());
        return NULL;
    }
    auto instance = new Node(env, argv[PARAM0]);
    status = napi_wrap(env, thisObj, instance,
        [](napi_env environment, void *data, void *hint) {
            auto objInfo = reinterpret_cast<Node *>(data);
            if (objInfo != nullptr) {
                delete objInfo;
            }
        }, NULL, NULL);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "wrap", TAG);
        return NULL;
    }
    return thisObj;
}
