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
#include "common.h"

constexpr uint8_t AGE = 12;

napi_value getAgeItemOut(napi_env env, napi_value nextOut, cJSON *ageItem)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    // 往next里面塞数据
    napi_value ageItemStringOut;
    status = napi_create_string_utf8(env, ageItem->string, NAPI_AUTO_LENGTH, &ageItemStringOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_string_utf8 ageItem->string", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, nextOut, "string", ageItemStringOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property ageItemStringOut", tag);
        return nullptr;
    }
    napi_value ageItemValueintOut;
    status = napi_create_double(env, ageItem->valueint, &ageItemValueintOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_double ageItem->valueint", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, nextOut, "valueint", ageItemValueintOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property ageItemValueintOut", tag);
        return nullptr;
    }
    return nextOut;
}

napi_value getNameItemOut(napi_env env, napi_value childOut, cJSON *nameItem)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    // 往child里面塞数据
    napi_value nameItemStringOut;
    status = napi_create_string_utf8(env, nameItem->string, NAPI_AUTO_LENGTH, &nameItemStringOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_string_utf8 nameItem->string", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "string", nameItemStringOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property nameItemStringOut", tag);
        return nullptr;
    }
    napi_value nameItemValuestringOut;
    status = napi_create_string_utf8(env, nameItem->valuestring, NAPI_AUTO_LENGTH, &nameItemValuestringOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_string_utf8 nameItem->valuestring", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "valuestring", nameItemValuestringOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property nameItemValuestringOut", tag);
        return nullptr;
    }
    return childOut;
}

napi_value getNextOut(napi_env env, cJSON *ageItem, napi_value cJSON_CreateObjectOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    napi_value nextOut;
    /* [NAPI_GEN]: 返回值是对象时，需要使用napi_create_object创建一个js的对象与js代码交互
     * env: 当前环境的句柄
     * result: 一个napi_value的指针，该指针将被设置为新创建的js对象
     */
    status = napi_create_object(env, &nextOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
    nextOut = getAgeItemOut(env, nextOut, ageItem);
    /* [NAPI_GEN]:
     * 返回值是对象时，将native侧的对象的属性和值依次塞入napi_create_object创建出的对象，最终将该对象返回js env:
     * 当前环境的句柄 object: 要设置属性的js对象，该对象是由上文napi_create_object创建的 utf8name:
     * 属性的名称，是一个以UTF-8编码的字符串 value:
     * 与属性名称关联的值，这个值可以是任何js类型（如一个数值、字符串、另一个对象等）
     */
    status = napi_set_named_property(env, cJSON_CreateObjectOut, "next", nextOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: 错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_CreateObjectOut;
}

napi_value getPrevOut(napi_env env, napi_value cJSON_CreateObjectOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    napi_value prevOut;
    /* [NAPI_GEN]: 返回值是对象时，需要使用napi_create_object创建一个js的对象与js代码交互
     * env: 当前环境的句柄
     * result: 一个napi_value的指针，该指针将被设置为新创建的js对象
     */
    status = napi_create_object(env, &prevOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: 返回值是对象时，将native侧的对象的属性和值依次塞入napi_create_object创建出的对象，最终将该对象返回js
     * env: 当前环境的句柄
     * object: 要设置属性的js对象，该对象是由上文napi_create_object创建的
     * utf8name: 属性的名称，是一个以UTF-8编码的字符串
     * value: 与属性名称关联的值，这个值可以是任何js类型（如一个数值、字符串、另一个对象等）
     */
    status = napi_set_named_property(env, cJSON_CreateObjectOut, "prev", prevOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: 错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_CreateObjectOut;
}

napi_value getChildOut(napi_env env, cJSON *nameItem, napi_value cJSON_CreateObjectOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    napi_value childOut;
    /* [NAPI_GEN]: 返回值是对象时，需要使用napi_create_object创建一个js的对象与js代码交互
     * env: 当前环境的句柄
     * result: 一个napi_value的指针，该指针将被设置为新创建的js对象
     */
    status = napi_create_object(env, &childOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
    childOut = getNameItemOut(env, childOut, nameItem);
    /* [NAPI_GEN]: 返回值是对象时，将native侧的对象的属性和值依次塞入napi_create_object创建出的对象，最终将该对象返回js
     * env: 当前环境的句柄
     * object: 要设置属性的js对象，该对象是由上文napi_create_object创建的
     * utf8name: 属性的名称，是一个以UTF-8编码的字符串
     * value: 与属性名称关联的值，这个值可以是任何js类型（如一个数值、字符串、另一个对象等）
     */
    status = napi_set_named_property(env, cJSON_CreateObjectOut, "child", childOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: 错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_CreateObjectOut;
}

napi_value getTypeOut(napi_env env, napi_value cJSON_CreateObjectOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    napi_value typeOut;
    /* [NAPI_GEN]: 返回值是int32_t类型时，napi_create_int32 创建一个包含32位整数(int32_t)的js数值（Number）对象
     * env: 当前环境的句柄
     * value: 要准换成js数值的int32_t的值,这里以传入1为例,用例新增业务代码时可根据自身需求修改
     * result: 指向napi_value的指针，这个指针会被设置为新创建的js数值对象
     */
    status = napi_create_int32(env, 1, &typeOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_int32", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: 返回值是对象时，将native侧的对象的属性和值依次塞入napi_create_object创建出的对象，最终将该对象返回js
     * env: 当前环境的句柄
     * object: 要设置属性的js对象，该对象是由上文napi_create_object创建的
     * utf8name: 属性的名称，是一个以UTF-8编码的字符串
     * value: 与属性名称关联的值，这个值可以是任何js类型（如一个数值、字符串、另一个对象等）
     */
    status = napi_set_named_property(env, cJSON_CreateObjectOut, "type", typeOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: 错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_CreateObjectOut;
}

napi_value getValuestringOut(napi_env env, napi_value cJSON_CreateObjectOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    napi_value valuestringOut;
    /* [NAPI_GEN]:
     * 返回值是字符串时，napi_create_string_utf8用于在原生代码中创建一个新的js字符串。这个函数会根据提供的UTF-8编码的字符串创建一个等价的js字符串
     * env: 当前环境的句柄
     * str: 指向以null结尾的UTF-8编码的C字符串的指针，这里以valuestring举例，用户可根据需求修改
     * length:
     * 字符串的长度，可以是具体的字节数，或者使用特殊的值NAPI_AUTO_LENGTH来让函数自己计算长度(假定字符串以null结尾)
     * result: 指向napi_value的指针，函数执行成功后这个指针将指向新创建的js字符串
     */
    status = napi_create_string_utf8(env, "", NAPI_AUTO_LENGTH, &valuestringOut);
    if (status != napi_ok) {
        /*错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_create_string_utf8", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: 返回值是对象时，将native侧的对象的属性和值依次塞入napi_create_object创建出的对象，最终将该对象返回js
     * env: 当前环境的句柄
     * object: 要设置属性的js对象，该对象是由上文napi_create_object创建的
     * utf8name: 属性的名称，是一个以UTF-8编码的字符串
     * value: 与属性名称关联的值，这个值可以是任何js类型（如一个数值、字符串、另一个对象等）
     */
    status = napi_set_named_property(env, cJSON_CreateObjectOut, "valuestring", valuestringOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: 错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_CreateObjectOut;
}

napi_value getValueintOut(napi_env env, napi_value cJSON_CreateObjectOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    napi_value valueintOut;
    /* [NAPI_GEN]: 返回值是int32_t类型时，napi_create_int32 创建一个包含32位整数(int32_t)的js数值（Number）对象
     * env: 当前环境的句柄
     * value: 要准换成js数值的int32_t的值,这里以传入1为例,用例新增业务代码时可根据自身需求修改
     * result: 指向napi_value的指针，这个指针会被设置为新创建的js数值对象
     */
    status = napi_create_int32(env, 1, &valueintOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_int32", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: 返回值是对象时，将native侧的对象的属性和值依次塞入napi_create_object创建出的对象，最终将该对象返回js
     * env: 当前环境的句柄
     * object: 要设置属性的js对象，该对象是由上文napi_create_object创建的
     * utf8name: 属性的名称，是一个以UTF-8编码的字符串
     * value: 与属性名称关联的值，这个值可以是任何js类型（如一个数值、字符串、另一个对象等）
     */
    status = napi_set_named_property(env, cJSON_CreateObjectOut, "valueint", valueintOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: 错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_CreateObjectOut;
}

napi_value getValuedoubleOut(napi_env env, napi_value cJSON_CreateObjectOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    napi_value valuedoubleOut;
    /* [NAPI_GEN]: 返回值是double类型时，napi_create_double 创建一个包含双精度浮点数的js数值（Number）对象
     * env: 当前环境的句柄
     * value: 要传递给js的双精度浮点数值,这里以传入1.0为例，用例新增业务代码时可根据自身需求修改
     * result: 指向napi_value的指针，这个指针会被设置为新创建的js数值对象
     */
    status = napi_create_double(env, 1.0, &valuedoubleOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_double", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: 返回值是对象时，将native侧的对象的属性和值依次塞入napi_create_object创建出的对象，最终将该对象返回js
     * env: 当前环境的句柄
     * object: 要设置属性的js对象，该对象是由上文napi_create_object创建的
     * utf8name: 属性的名称，是一个以UTF-8编码的字符串
     * value: 与属性名称关联的值，这个值可以是任何js类型（如一个数值、字符串、另一个对象等）
     */
    status = napi_set_named_property(env, cJSON_CreateObjectOut, "valuedouble", valuedoubleOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: 错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_CreateObjectOut;
}

napi_value getStringOut(napi_env env, napi_value cJSON_CreateObjectOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH361_cJSON_CreateObject]";
    napi_value stringOut;
    /* [NAPI_GEN]:
     * 返回值是字符串时，napi_create_string_utf8用于在原生代码中创建一个新的js字符串。这个函数会根据提供的UTF-8编码的字符串创建一个等价的js字符串
     * env: 当前环境的句柄
     * str: 指向以null结尾的UTF-8编码的C字符串的指针，这里以string举例，用户可根据需求修改
     * length:
     * 字符串的长度，可以是具体的字节数，或者使用特殊的值NAPI_AUTO_LENGTH来让函数自己计算长度(假定字符串以null结尾)
     * result: 指向napi_value的指针，函数执行成功后这个指针将指向新创建的js字符串
     */
    status = napi_create_string_utf8(env, "", NAPI_AUTO_LENGTH, &stringOut);
    if (status != napi_ok) {
        /*错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_create_string_utf8", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: 返回值是对象时，将native侧的对象的属性和值依次塞入napi_create_object创建出的对象，最终将该对象返回js
     * env: 当前环境的句柄
     * object: 要设置属性的js对象，该对象是由上文napi_create_object创建的
     * utf8name: 属性的名称，是一个以UTF-8编码的字符串
     * value: 与属性名称关联的值，这个值可以是任何js类型（如一个数值、字符串、另一个对象等）
     */
    status = napi_set_named_property(env, cJSON_CreateObjectOut, "string", stringOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: 错误处理*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_CreateObjectOut;
}

/* [NAPI_GEN]:对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_CreateObject(void);的napi方法，
 * 输入为空
 * 输出创建的cJSON对象
 */
napi_value KH361_cJSON_CreateObject(napi_env env, napi_callback_info info)
{
    napi_status status;
    /* [NAPI_GEN]: Node.js在其N-API中用来提供错误的扩展信息的结构体,结构体包含以下字段
     * error_message: 一个指向错误详细字符串的指针，提供了关于错误的文本描述
     * engin_reserved: 一个保留给Js引擎使用的指针
     * error_code: 错误码，指示了错误的种类，比如napi_pending_exception表示有一个JavaScript异常未被清理。
     * engine_error_code：一个引擎特定的错误码，为引擎实现保留，具体含义依赖于使用的JavaScript引擎。
     * error_message_len：错误消息字符串的长度。
     */
    const napi_extended_error_info *extended_error_info;
    /* [NAPI_GEN]: tag: 日志打印标签*/
    const char *tag = "[KH361_cJSON_CreateObject]";

    // Todo: add business logic. 在这前后代码为框架所生成
    cJSON *jsonObject = cJSON_CreateObject();
    // 向JSON对象添加一个键值对
    cJSON_AddStringToObject(jsonObject, "name", "may");
    cJSON_AddNumberToObject(jsonObject, "age", AGE);
    cJSON *nameItem = jsonObject->child;
    cJSON *ageItem = nameItem->next;
    if (jsonObject == NULL) {
        return NULL;
    }
    
    /* [NAPI_GEN]: function return value*/
    napi_value cJSON_CreateObjectOut;
    /* [NAPI_GEN]: 返回值是对象时，需要使用napi_create_object创建一个js的对象与js代码交互
     * env: 当前环境的句柄
     * result: 一个napi_value的指针，该指针将被设置为新创建的js对象
     */
    status = napi_create_object(env, &cJSON_CreateObjectOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
    cJSON_CreateObjectOut = getNextOut(env, ageItem,cJSON_CreateObjectOut);
    cJSON_CreateObjectOut = getPrevOut(env, cJSON_CreateObjectOut);
    cJSON_CreateObjectOut = getChildOut(env, nameItem, cJSON_CreateObjectOut);
    cJSON_CreateObjectOut = getTypeOut(env, cJSON_CreateObjectOut);
    cJSON_CreateObjectOut = getValuestringOut(env, cJSON_CreateObjectOut);
    cJSON_CreateObjectOut = getValueintOut(env, cJSON_CreateObjectOut);
    cJSON_CreateObjectOut = getValuedoubleOut(env, cJSON_CreateObjectOut);
    cJSON_CreateObjectOut = getStringOut(env, cJSON_CreateObjectOut);
    
    return cJSON_CreateObjectOut;
}
