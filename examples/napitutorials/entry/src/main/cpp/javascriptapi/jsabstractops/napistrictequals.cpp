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

static const char *TAG = "[jsapi_strictequals]";

napi_value testNapiStrictEquals(napi_env env, napi_callback_info info) {
    // pages/javascript/jsabstractops/napistrictequals
    size_t requireArgc = PARAM2;
    size_t argc = PARAM2;
    napi_status status;
    bool result;
    napi_value bolresult;
    napi_value argv[PARAM2];
    const napi_extended_error_info *extended_error_info;

    // Obtain the parameters of the callback function
    status = napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "get cb info", TAG);
        return NULL;
    }
    // Check if the number of parameters meets expectations
    if (argc != requireArgc) {
        napi_throw_error(env, NULL, "Expected exactly two argument");
        return NULL;
    }

    // Call napi_strict_equals()
    status = napi_strict_equals(env, argv[0], argv[1], &result);
    if (status != napi_ok) {
        napi_throw_error(env, NULL, "Unable to check if the two objects are equal");
        return NULL;
    }

    status = napi_get_boolean(env, result, &bolresult);
    if (status != napi_ok) {
        napi_throw_error(env, NULL, "Unable to convert boolean to napi_value");
        return NULL;
    }
    return bolresult;
}
