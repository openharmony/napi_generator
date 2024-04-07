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
#include "nodeapi.h"

static const char *TAG = "[jsapi_coercetobool]";

napi_value testNapiCoerceToBool(napi_env env, napi_callback_info info)
{
    // pages/javascript/jsabstractops/napicoercetobool
    size_t requireArgc = 1;
    size_t argc = 1;
    napi_status status;
    napi_value result;
    napi_value args[1] = {nullptr};

    // Get args
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    // Call napi_coerce_to_bool(), any -> bool
    status = napi_coerce_to_bool(env, args[0], &result);
    if (status != napi_ok) {
        napi_throw_error(env, NULL, "Failed to coerce to bool");
        return NULL;
    }

    // Check if the result is a boolean
    napi_valuetype resultType;
    napi_typeof(env, result, &resultType);
    if (resultType != napi_boolean) {
        char errmsg[64];
        snprintf_s(errmsg, sizeof(errmsg), sizeof(errmsg), "Expected a boolean, got %d", resultType);
        napi_throw_error(env, NULL, errmsg);
        return NULL;
    }

    return result;
}
