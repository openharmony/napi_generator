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

#ifndef NAPITUTORIALS_CJSONNAPI_H
#define NAPITUTORIALS_CJSONNAPI_H

#include "common.h"
#include "cjsoncommon.h"

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

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON*) cJSON_AddStringToObject(cJSON * const object, const char * const name,
 * const char * const string);的napi方法，
 * 输入：一个cJSON对象，需要添加的item名字（字符串），需要添加的item内容（字符串）
 * 输出：添加item后的cJSON对象
 */
napi_value KH526_cJSON_AddStringToObject(napi_env env, napi_callback_info info);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON*) cJSON_AddNumberToObject(cJSON * const object, const char * const name,
 * const double number);的napi方法，
 * 输入：一个cJSON对象，需要添加的item名字（字符串），需要添加的item内容（数值）
 * 输出：添加item后的cJSON对象
 */
napi_value KH206_cJSON_AddNumberToObject(napi_env env, napi_callback_info info);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON*) cJSON_AddFalseToObject(cJSON * const object, const char * const name);
 * 的napi方法，
 * 输入：一个cJSON对象，需要添加的item名字（字符串）
 * 输出：添加item后的cJSON对象
 */
napi_value KH545_cJSON_AddFalseToObject(napi_env env, napi_callback_info info);

/* 将C++ cJSON对象返回js层
 * 输入：待返回的js对象，c++ cJSON对象
 * 输出：返回js的对象
 */
napi_value getAdditemtoobjChildOut(napi_env env, napi_value cJSON_AddItemToObjectOut, cJSON *jsonObj);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON_bool) cJSON_AddItemToObject(cJSON *object, const char *string,
 * cJSON *item); 的napi方法，
 * 输入：一个cJSON对象，需要添加的item名字（字符串），需要加入cJSON对象的item（cJSON 对象）
 * 输出：添加item后的cJSON对象
 */
napi_value KH180_cJSON_AddItemToObject(napi_env env, napi_callback_info info);

/* 将C++ cJSON对象返回js层
 * 输入：待返回的js对象，c++ cJSON对象
 * 输出：返回js的对象
 */
napi_value getAdditemtoarrChildOut(napi_env env, napi_value cJSON_AddItemToArrayOut, cJSON *jsonObj);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_CreateArray(void); 的napi方法，
 * 输入：void
 * 输出：创建的cjson array
 */
napi_value KH386_cJSON_CreateArray(napi_env env, napi_callback_info info);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_CreateIntArray(const int *numbers, int count); 的napi方法
 * 输入：一个number数组，number数组中元素的数量
 * 输出：创建的cJSON数组
 */
napi_value KH203_cJSON_CreateIntArray(napi_env env, napi_callback_info info);

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON_bool) cJSON_AddItemToArray(cJSON *array, cJSON *item); 的napi方法
 * 输入：一个cJSON数组对象，想要添加到cJSON数组中的cJSON元素
 * 输出：添加item后的cJSON对象
 */
napi_value KH802_cJSON_AddItemToArray(napi_env env, napi_callback_info info);

#endif // NAPITUTORIALS_CJSONNAPI_H