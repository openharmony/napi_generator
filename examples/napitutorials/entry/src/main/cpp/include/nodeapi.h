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
#include "cjson/cJSON.h"

#include "hilog/log.h"
#include <bits/alltypes.h>
#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x3200
#define LOG_TAG "[nodeapi_cJSON]"
#define OH_LOG_INFOS(type, ...) ((void)OH_LOG_Print((type), LOG_INFO, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))
#define OH_LOG_ERRORS(type, ...) ((void)OH_LOG_Print((type), LOG_ERROR, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))

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

/* 去除字符串中的换行符，便于查找打印, 公共方法
 * str: 待去除\n的字符串
 */
void removeNewlines(std::string &str);

/* 检查JavaScript对象是否为空（不含自己的属性），公共方法
 * env: 当前环境的句柄，代表当前的Node.js环境
 * obj: 类型是napi_object
 * tag: 日志打印标识符
 */
bool IsEmptyObject(napi_env env, napi_value obj, const char *tag);

/* 在native初始化js传递的对象， 公共方法
 * env: 当前环境的句柄，代表当前的Node.js环境
 * cjsonObj: 从js传递的cJSON对象
 * jsonObj: 待初始化的native层cJSON对象
 * tag: 日志打印标识符
 */
cJSON *initCJSON_Object(napi_env env, napi_value cjsonObj, cJSON *jsonObj, const char *tag);

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

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON*) cJSON_AddFalseToObject(cJSON * const object, const char * const name);的napi方法，
 * 输入：一个cJSON对象，需要添加的item名字（字符串）
 * 输出：添加item后的cJSON对象
 */
napi_value KH545_cJSON_AddFalseToObject(napi_env env, napi_callback_info info);
#endif //NAPITUTORIALS_NODEAPI_H
