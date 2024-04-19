/*
* Copyright (c) 2023 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

#ifndef NAPITUTORIALS_NODEAPI_H
#define NAPITUTORIALS_NODEAPI_H

#include "common.h"

extern napi_threadsafe_function g_threadsafeFunction;
extern napi_threadsafe_function g_threadsafeFunction_call;
extern napi_threadsafe_function g_threadsafeFunction_rel;

napi_value setInstancedata(napi_env env, napi_value exports);
napi_value testNapiStatus(napi_env env, napi_callback_info info);
napi_value testNapiExterrinfo(napi_env env, napi_callback_info info);
napi_value testNapiEnv(napi_env env, napi_callback_info info);
napi_value testNapiValue(napi_env env, napi_callback_info info);
napi_value setThreadsafefunc(napi_env env, napi_callback_info info);
napi_value setThreadsafefuncrel(napi_env env, napi_callback_info info);
napi_value setThreadsafefuncall(napi_env env, napi_callback_info info);

napi_value cJSONVersion(napi_env env, napi_callback_info info);

/* [NAPI_GEN]: 对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_Parse(const char *value);的napi方法，
 * 输入一个待转换的字符串
 * 输出cJSON序列化之后的字符串
 */
napi_value KH418_CJSON_Parse(napi_env env, napi_callback_info info);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(int) cJSON_GetArraySize(const cJSON *array);的napi方法，
 * 输入一个cJSON数组
 * 输出数组长度
 */
napi_value KH373_cJSON_GetArraySize(napi_env env, napi_callback_info info);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(char *) cJSON_Print(const cJSON *item);的napi方法，
 * 输入一个cJSON对象
 * 输出该对象序列化之后的字符串
 */
napi_value KH735_cJSON_Print(napi_env env, napi_callback_info info);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_CreateObject(void);的napi方法，
 * 输入为空
 * 输出创建的cJSON对象
 */
napi_value KH361_cJSON_CreateObject(napi_env env, napi_callback_info info);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_CreateString(const char *string);的napi方法，
 * 输入一个字符串
 * 输出根据字符串创建的cJSON对象
 */
napi_value KH515_cJSON_CreateString(napi_env env, napi_callback_info info);

#endif //NAPITUTORIALS_NODEAPI_H
