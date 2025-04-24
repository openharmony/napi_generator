/*
 * Copyright (c) 2025 Shenzhen Kaihong Digital.
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

package gen;

import grammar.*;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * <h3>类名：该类用于xxx</h3>
 * description
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
class GenNapiCppFileTest3 {
    private String testFuncContent1 = "\nvoid TestFunc(std::string name, int age);\n" +
            "napi_value testFuncNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype0;\n" +
            "\tif (napi_typeof(env, args[0], &valuetype0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_string) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第0个参数必须是字符串\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tchar* value0[MAX_BUFFER_SIZE];\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_string_utf8(env, args[0], &value0, bufferSize, &realSize) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype1;\n" +
            "\tif (napi_typeof(env, args[1], &valuetype1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_number) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第valuetype1个参数必须是数字\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tint value1 = 0;\n" +
            "\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_int32(env, args[1], &value1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tTestFunc(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"testFunc\", nullptr, testFuncNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "struct testFuncAsyncData {\n" +
            "\tnapi_async_work work;\t\t\t// 异步工作句柄\n" +
            "\tnapi_deferred deferred;\t\t\t// Promise句柄（如果使用Promise）\n" +
            "\tnapi_ref callback_ref;\t\t\t// JS回调引用\n" +
            "\tstring name;\n" +
            "\tnumber age;\n" +
            "\tvoid result;\t\t\t// 返回值\n" +
            "\tnapi_status status;\t\t\t// 执行状态\n" +
            "};\n" +
            "\n" +
            "// 实际执行计算的线程池任务\n" +
            "void testFuncAsyncExecuteWork(napi_env env, void* data) {\n" +
            "\ttestFuncAsyncData* async_data = static_cast<testFuncAsyncData*>(data);\n" +
            "\t// 调用原始类方法\n" +
            "\tTestFunc(name, age);\n" +
            "\tasync_data->result = res; // 实际计算\n" +
            "}\n" +
            "\n" +
            "// 计算结果返回给JS事件循环\n" +
            "void testFuncAsyncCompleteWork(napi_env env, napi_status status, void* data) {\n" +
            "\ttestFuncAsyncData* async_data = static_cast<testFuncAsyncData*>(data);\n" +
            "\n" +
            "\t// 准备回调参数\n" +
            "\tnapi_value argv[2] = { nullptr };\n" +
            "\tif (async_data->status == napi_ok) {\n" +
            "\t\t\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t} else {\n" +
            "\t\tnapi_value error_msg;\n" +
            "\t\tnapi_create_string_utf8(env, \"testFuncAsync failed\", NAPI_AUTO_LENGTH, &error_msg);\n" +
            "\t\tnapi_create_error(env, NULL, error_msg, &argv[1]);\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t}\n" +
            "\n" +
            "\t// 获取JS回调函数\n" +
            "\tnapi_value callback;\n" +
            "\tnapi_get_reference_value(env, async_data->callback_ref, &callback);\n" +
            "\n" +
            "\t// 调用回调\n" +
            "\tnapi_value global;\n" +
            "\tnapi_get_global(env, &global);\n" +
            "\tnapi_call_function(env, global, callback, 2, argv, nullptr);\n" +
            "\n" +
            "\t// 清理资源\n" +
            "\tnapi_delete_async_work(env, async_data->work);\n" +
            "\tnapi_delete_reference(env, async_data->callback_ref);\n" +
            "\tdelete async_data;\n" +
            "};\n" +
            "\n" +
            "napi_value testFuncAsyncNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype0;\n" +
            "\tif (napi_typeof(env, args[0], &valuetype0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_string) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第0个参数必须是字符串\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tchar* value0[MAX_BUFFER_SIZE];\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_string_utf8(env, args[0], &value0, bufferSize, &realSize) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype1;\n" +
            "\tif (napi_typeof(env, args[1], &valuetype1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_number) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第valuetype1个参数必须是数字\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tint value1 = 0;\n" +
            "\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_int32(env, args[1], &value1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tTestFunc(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"testFuncAsync\", nullptr, testFuncAsyncNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "napi_value testFuncPromiseNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype0;\n" +
            "\tif (napi_typeof(env, args[0], &valuetype0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_string) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第0个参数必须是字符串\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tchar* value0[MAX_BUFFER_SIZE];\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_string_utf8(env, args[0], &value0, bufferSize, &realSize) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype1;\n" +
            "\tif (napi_typeof(env, args[1], &valuetype1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_number) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第valuetype1个参数必须是数字\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tint value1 = 0;\n" +
            "\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_int32(env, args[1], &value1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tTestFunc(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"testFuncPromise\", nullptr, testFuncPromiseNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n";

    private String testFuncContent2 = "\nstd::string ToCapital(std::string str, int length = 0);\n" +
            "napi_value toCapitalNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype0;\n" +
            "\tif (napi_typeof(env, args[0], &valuetype0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_string) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第0个参数必须是字符串\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tchar* value0[MAX_BUFFER_SIZE];\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_string_utf8(env, args[0], &value0, bufferSize, &realSize) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype1;\n" +
            "\tif (napi_typeof(env, args[1], &valuetype1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_number) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第valuetype1个参数必须是数字\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tint value1 = 0;\n" +
            "\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_int32(env, args[1], &value1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tToCapital(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"toCapital\", nullptr, toCapitalNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "struct toCapitalAsyncData {\n" +
            "\tnapi_async_work work;\t\t\t// 异步工作句柄\n" +
            "\tnapi_deferred deferred;\t\t\t// Promise句柄（如果使用Promise）\n" +
            "\tnapi_ref callback_ref;\t\t\t// JS回调引用\n" +
            "\tstring str;\n" +
            "\tnumber length;\n" +
            "\tvoid result;\t\t\t// 返回值\n" +
            "\tnapi_status status;\t\t\t// 执行状态\n" +
            "};\n" +
            "\n" +
            "// 实际执行计算的线程池任务\n" +
            "void toCapitalAsyncExecuteWork(napi_env env, void* data) {\n" +
            "\ttoCapitalAsyncData* async_data = static_cast<toCapitalAsyncData*>(data);\n" +
            "\t// 调用原始类方法\n" +
            "\tToCapital(str, length);\n" +
            "\tasync_data->result = res; // 实际计算\n" +
            "}\n" +
            "\n" +
            "// 计算结果返回给JS事件循环\n" +
            "void toCapitalAsyncCompleteWork(napi_env env, napi_status status, void* data) {\n" +
            "\ttoCapitalAsyncData* async_data = static_cast<toCapitalAsyncData*>(data);\n" +
            "\n" +
            "\t// 准备回调参数\n" +
            "\tnapi_value argv[2] = { nullptr };\n" +
            "\tif (async_data->status == napi_ok) {\n" +
            "\t\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t} else {\n" +
            "\t\tnapi_value error_msg;\n" +
            "\t\tnapi_create_string_utf8(env, \"toCapitalAsync failed\", NAPI_AUTO_LENGTH, &error_msg);\n" +
            "\t\tnapi_create_error(env, NULL, error_msg, &argv[1]);\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t}\n" +
            "\n" +
            "\t// 获取JS回调函数\n" +
            "\tnapi_value callback;\n" +
            "\tnapi_get_reference_value(env, async_data->callback_ref, &callback);\n" +
            "\n" +
            "\t// 调用回调\n" +
            "\tnapi_value global;\n" +
            "\tnapi_get_global(env, &global);\n" +
            "\tnapi_call_function(env, global, callback, 2, argv, nullptr);\n" +
            "\n" +
            "\t// 清理资源\n" +
            "\tnapi_delete_async_work(env, async_data->work);\n" +
            "\tnapi_delete_reference(env, async_data->callback_ref);\n" +
            "\tdelete async_data;\n" +
            "};\n" +
            "\n" +
            "napi_value toCapitalAsyncNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype0;\n" +
            "\tif (napi_typeof(env, args[0], &valuetype0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_string) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第0个参数必须是字符串\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tchar* value0[MAX_BUFFER_SIZE];\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_string_utf8(env, args[0], &value0, bufferSize, &realSize) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype1;\n" +
            "\tif (napi_typeof(env, args[1], &valuetype1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_number) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第valuetype1个参数必须是数字\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tint value1 = 0;\n" +
            "\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_int32(env, args[1], &value1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tToCapital(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"toCapitalAsync\", nullptr, toCapitalAsyncNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "napi_value toCapitalPromiseNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype0;\n" +
            "\tif (napi_typeof(env, args[0], &valuetype0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_string) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第0个参数必须是字符串\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tchar* value0[MAX_BUFFER_SIZE];\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_string_utf8(env, args[0], &value0, bufferSize, &realSize) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype1;\n" +
            "\tif (napi_typeof(env, args[1], &valuetype1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_number) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第valuetype1个参数必须是数字\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tint value1 = 0;\n" +
            "\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_int32(env, args[1], &value1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tToCapital(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"toCapitalPromise\", nullptr, toCapitalPromiseNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n";

    private String testFuncContent3 = "\nstd::string Nemw(std::string str = \"joke\", int length = 0);\n" +
            "napi_value nemwNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype0;\n" +
            "\tif (napi_typeof(env, args[0], &valuetype0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_string) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第0个参数必须是字符串\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tchar* value0[MAX_BUFFER_SIZE];\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_string_utf8(env, args[0], &value0, bufferSize, &realSize) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype1;\n" +
            "\tif (napi_typeof(env, args[1], &valuetype1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_number) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第valuetype1个参数必须是数字\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tint value1 = 0;\n" +
            "\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_int32(env, args[1], &value1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"nemw\", nullptr, nemwNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "struct nemwAsyncData {\n" +
            "\tnapi_async_work work;\t\t\t// 异步工作句柄\n" +
            "\tnapi_deferred deferred;\t\t\t// Promise句柄（如果使用Promise）\n" +
            "\tnapi_ref callback_ref;\t\t\t// JS回调引用\n" +
            "\tstring str;\n" +
            "\tnumber length;\n" +
            "\tvoid result;\t\t\t// 返回值\n" +
            "\tnapi_status status;\t\t\t// 执行状态\n" +
            "};\n" +
            "\n" +
            "// 实际执行计算的线程池任务\n" +
            "void nemwAsyncExecuteWork(napi_env env, void* data) {\n" +
            "\tnemwAsyncData* async_data = static_cast<nemwAsyncData*>(data);\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(str, length);\n" +
            "\tasync_data->result = res; // 实际计算\n" +
            "}\n" +
            "\n" +
            "// 计算结果返回给JS事件循环\n" +
            "void nemwAsyncCompleteWork(napi_env env, napi_status status, void* data) {\n" +
            "\tnemwAsyncData* async_data = static_cast<nemwAsyncData*>(data);\n" +
            "\n" +
            "\t// 准备回调参数\n" +
            "\tnapi_value argv[2] = { nullptr };\n" +
            "\tif (async_data->status == napi_ok) {\n" +
            "\t\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t} else {\n" +
            "\t\tnapi_value error_msg;\n" +
            "\t\tnapi_create_string_utf8(env, \"nemwAsync failed\", NAPI_AUTO_LENGTH, &error_msg);\n" +
            "\t\tnapi_create_error(env, NULL, error_msg, &argv[1]);\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t}\n" +
            "\n" +
            "\t// 获取JS回调函数\n" +
            "\tnapi_value callback;\n" +
            "\tnapi_get_reference_value(env, async_data->callback_ref, &callback);\n" +
            "\n" +
            "\t// 调用回调\n" +
            "\tnapi_value global;\n" +
            "\tnapi_get_global(env, &global);\n" +
            "\tnapi_call_function(env, global, callback, 2, argv, nullptr);\n" +
            "\n" +
            "\t// 清理资源\n" +
            "\tnapi_delete_async_work(env, async_data->work);\n" +
            "\tnapi_delete_reference(env, async_data->callback_ref);\n" +
            "\tdelete async_data;\n" +
            "};\n" +
            "\n" +
            "napi_value nemwAsyncNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype0;\n" +
            "\tif (napi_typeof(env, args[0], &valuetype0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_string) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第0个参数必须是字符串\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tchar* value0[MAX_BUFFER_SIZE];\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_string_utf8(env, args[0], &value0, bufferSize, &realSize) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype1;\n" +
            "\tif (napi_typeof(env, args[1], &valuetype1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_number) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第valuetype1个参数必须是数字\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tint value1 = 0;\n" +
            "\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_int32(env, args[1], &value1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"nemwAsync\", nullptr, nemwAsyncNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "napi_value nemwPromiseNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype0;\n" +
            "\tif (napi_typeof(env, args[0], &valuetype0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_string) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第0个参数必须是字符串\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tchar* value0[MAX_BUFFER_SIZE];\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_string_utf8(env, args[0], &value0, bufferSize, &realSize) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\tnapi_valuetype valuetype1;\n" +
            "\tif (napi_typeof(env, args[1], &valuetype1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\tif (type != napi_number) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");\n" +
            "\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", \"第valuetype1个参数必须是数字\");\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\tint value1 = 0;\n" +
            "\n" +
            "\tsize_t bufferSize = MAX_BUFFER_SIZE;\n" +
            "\tsize_t realSize = 0;\n" +
            "\tif (napi_get_value_int32(env, args[1], &value1) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"nemwPromise\", nullptr, nemwPromiseNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n";

    private String testFuncContent4 = "\nstd::string Nemw(auto str, auto length);\n" +
            "napi_value nemwNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"nemw\", nullptr, nemwNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "struct nemwAsyncData {\n" +
            "\tnapi_async_work work;\t\t\t// 异步工作句柄\n" +
            "\tnapi_deferred deferred;\t\t\t// Promise句柄（如果使用Promise）\n" +
            "\tnapi_ref callback_ref;\t\t\t// JS回调引用\n" +
            "\tauto str;\n" +
            "\tauto length;\n" +
            "\tvoid result;\t\t\t// 返回值\n" +
            "\tnapi_status status;\t\t\t// 执行状态\n" +
            "};\n" +
            "\n" +
            "// 实际执行计算的线程池任务\n" +
            "void nemwAsyncExecuteWork(napi_env env, void* data) {\n" +
            "\tnemwAsyncData* async_data = static_cast<nemwAsyncData*>(data);\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(str, length);\n" +
            "\tasync_data->result = res; // 实际计算\n" +
            "}\n" +
            "\n" +
            "// 计算结果返回给JS事件循环\n" +
            "void nemwAsyncCompleteWork(napi_env env, napi_status status, void* data) {\n" +
            "\tnemwAsyncData* async_data = static_cast<nemwAsyncData*>(data);\n" +
            "\n" +
            "\t// 准备回调参数\n" +
            "\tnapi_value argv[2] = { nullptr };\n" +
            "\tif (async_data->status == napi_ok) {\n" +
            "\t\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t} else {\n" +
            "\t\tnapi_value error_msg;\n" +
            "\t\tnapi_create_string_utf8(env, \"nemwAsync failed\", NAPI_AUTO_LENGTH, &error_msg);\n" +
            "\t\tnapi_create_error(env, NULL, error_msg, &argv[1]);\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t}\n" +
            "\n" +
            "\t// 获取JS回调函数\n" +
            "\tnapi_value callback;\n" +
            "\tnapi_get_reference_value(env, async_data->callback_ref, &callback);\n" +
            "\n" +
            "\t// 调用回调\n" +
            "\tnapi_value global;\n" +
            "\tnapi_get_global(env, &global);\n" +
            "\tnapi_call_function(env, global, callback, 2, argv, nullptr);\n" +
            "\n" +
            "\t// 清理资源\n" +
            "\tnapi_delete_async_work(env, async_data->work);\n" +
            "\tnapi_delete_reference(env, async_data->callback_ref);\n" +
            "\tdelete async_data;\n" +
            "};\n" +
            "\n" +
            "napi_value nemwAsyncNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"nemwAsync\", nullptr, nemwAsyncNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "napi_value nemwPromiseNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_string_utf8(env, args[0], realSize, &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_string_utf8 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"nemwPromise\", nullptr, nemwPromiseNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n";

    private String testFuncContent5 = "\nNemw(auto str, auto length);\n" +
            "napi_value nemwNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"nemw\", nullptr, nemwNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "struct nemwAsyncData {\n" +
            "\tnapi_async_work work;\t\t\t// 异步工作句柄\n" +
            "\tnapi_deferred deferred;\t\t\t// Promise句柄（如果使用Promise）\n" +
            "\tnapi_ref callback_ref;\t\t\t// JS回调引用\n" +
            "\tauto str;\n" +
            "\tauto length;\n" +
            "\tvoid result;\t\t\t// 返回值\n" +
            "\tnapi_status status;\t\t\t// 执行状态\n" +
            "};\n" +
            "\n" +
            "// 实际执行计算的线程池任务\n" +
            "void nemwAsyncExecuteWork(napi_env env, void* data) {\n" +
            "\tnemwAsyncData* async_data = static_cast<nemwAsyncData*>(data);\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(str, length);\n" +
            "\tasync_data->result = res; // 实际计算\n" +
            "}\n" +
            "\n" +
            "// 计算结果返回给JS事件循环\n" +
            "void nemwAsyncCompleteWork(napi_env env, napi_status status, void* data) {\n" +
            "\tnemwAsyncData* async_data = static_cast<nemwAsyncData*>(data);\n" +
            "\n" +
            "\t// 准备回调参数\n" +
            "\tnapi_value argv[2] = { nullptr };\n" +
            "\tif (async_data->status == napi_ok) {\n" +
            "\t\t\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t} else {\n" +
            "\t\tnapi_value error_msg;\n" +
            "\t\tnapi_create_string_utf8(env, \"nemwAsync failed\", NAPI_AUTO_LENGTH, &error_msg);\n" +
            "\t\tnapi_create_error(env, NULL, error_msg, &argv[1]);\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t}\n" +
            "\n" +
            "\t// 获取JS回调函数\n" +
            "\tnapi_value callback;\n" +
            "\tnapi_get_reference_value(env, async_data->callback_ref, &callback);\n" +
            "\n" +
            "\t// 调用回调\n" +
            "\tnapi_value global;\n" +
            "\tnapi_get_global(env, &global);\n" +
            "\tnapi_call_function(env, global, callback, 2, argv, nullptr);\n" +
            "\n" +
            "\t// 清理资源\n" +
            "\tnapi_delete_async_work(env, async_data->work);\n" +
            "\tnapi_delete_reference(env, async_data->callback_ref);\n" +
            "\tdelete async_data;\n" +
            "};\n" +
            "\n" +
            "napi_value nemwAsyncNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"nemwAsync\", nullptr, nemwAsyncNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "napi_value nemwPromiseNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tNemw(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"nemwPromise\", nullptr, nemwPromiseNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n";

    private String testFuncContent6 = "\ntemplate<typename T> T* getArray(T* items);\n" +
            "napi_value getArrayNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 1;\n" +
            "\tnapi_value args[1] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 1) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 1 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要1个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tgetArray(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"getArray\", nullptr, getArrayNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "struct getArrayAsyncData {\n" +
            "\tnapi_async_work work;\t\t\t// 异步工作句柄\n" +
            "\tnapi_deferred deferred;\t\t\t// Promise句柄（如果使用Promise）\n" +
            "\tnapi_ref callback_ref;\t\t\t// JS回调引用\n" +
            "\tT[] items;\n" +
            "\tvoid result;\t\t\t// 返回值\n" +
            "\tnapi_status status;\t\t\t// 执行状态\n" +
            "};\n" +
            "\n" +
            "// 实际执行计算的线程池任务\n" +
            "void getArrayAsyncExecuteWork(napi_env env, void* data) {\n" +
            "\tgetArrayAsyncData* async_data = static_cast<getArrayAsyncData*>(data);\n" +
            "\t// 调用原始类方法\n" +
            "\tgetArray(items);\n" +
            "\tasync_data->result = res; // 实际计算\n" +
            "}\n" +
            "\n" +
            "// 计算结果返回给JS事件循环\n" +
            "void getArrayAsyncCompleteWork(napi_env env, napi_status status, void* data) {\n" +
            "\tgetArrayAsyncData* async_data = static_cast<getArrayAsyncData*>(data);\n" +
            "\n" +
            "\t// 准备回调参数\n" +
            "\tnapi_value argv[2] = { nullptr };\n" +
            "\tif (async_data->status == napi_ok) {\n" +
            "\t\t\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t} else {\n" +
            "\t\tnapi_value error_msg;\n" +
            "\t\tnapi_create_string_utf8(env, \"getArrayAsync failed\", NAPI_AUTO_LENGTH, &error_msg);\n" +
            "\t\tnapi_create_error(env, NULL, error_msg, &argv[1]);\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t}\n" +
            "\n" +
            "\t// 获取JS回调函数\n" +
            "\tnapi_value callback;\n" +
            "\tnapi_get_reference_value(env, async_data->callback_ref, &callback);\n" +
            "\n" +
            "\t// 调用回调\n" +
            "\tnapi_value global;\n" +
            "\tnapi_get_global(env, &global);\n" +
            "\tnapi_call_function(env, global, callback, 2, argv, nullptr);\n" +
            "\n" +
            "\t// 清理资源\n" +
            "\tnapi_delete_async_work(env, async_data->work);\n" +
            "\tnapi_delete_reference(env, async_data->callback_ref);\n" +
            "\tdelete async_data;\n" +
            "};\n" +
            "\n" +
            "napi_value getArrayAsyncNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 1;\n" +
            "\tnapi_value args[1] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 1) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 1 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要1个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tgetArray(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"getArrayAsync\", nullptr, getArrayAsyncNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "napi_value getArrayPromiseNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 1;\n" +
            "\tnapi_value args[1] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 1) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 1 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要1个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tgetArray(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"getArrayPromise\", nullptr, getArrayPromiseNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n";

    private String testFuncContent7 = "\ntemplate<typename T, typename U> void displayType(T id, U name);\n" +
            "napi_value displayTypeNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tdisplayType(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"displayType\", nullptr, displayTypeNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "struct displayTypeAsyncData {\n" +
            "\tnapi_async_work work;\t\t\t// 异步工作句柄\n" +
            "\tnapi_deferred deferred;\t\t\t// Promise句柄（如果使用Promise）\n" +
            "\tnapi_ref callback_ref;\t\t\t// JS回调引用\n" +
            "\tT id;\n" +
            "\tU name;\n" +
            "\tvoid result;\t\t\t// 返回值\n" +
            "\tnapi_status status;\t\t\t// 执行状态\n" +
            "};\n" +
            "\n" +
            "// 实际执行计算的线程池任务\n" +
            "void displayTypeAsyncExecuteWork(napi_env env, void* data) {\n" +
            "\tdisplayTypeAsyncData* async_data = static_cast<displayTypeAsyncData*>(data);\n" +
            "\t// 调用原始类方法\n" +
            "\tdisplayType(id, name);\n" +
            "\tasync_data->result = res; // 实际计算\n" +
            "}\n" +
            "\n" +
            "// 计算结果返回给JS事件循环\n" +
            "void displayTypeAsyncCompleteWork(napi_env env, napi_status status, void* data) {\n" +
            "\tdisplayTypeAsyncData* async_data = static_cast<displayTypeAsyncData*>(data);\n" +
            "\n" +
            "\t// 准备回调参数\n" +
            "\tnapi_value argv[2] = { nullptr };\n" +
            "\tif (async_data->status == napi_ok) {\n" +
            "\t\t\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t} else {\n" +
            "\t\tnapi_value error_msg;\n" +
            "\t\tnapi_create_string_utf8(env, \"displayTypeAsync failed\", NAPI_AUTO_LENGTH, &error_msg);\n" +
            "\t\tnapi_create_error(env, NULL, error_msg, &argv[1]);\n" +
            "\t\tnapi_get_null(env, &argv[0]);\n" +
            "\t}\n" +
            "\n" +
            "\t// 获取JS回调函数\n" +
            "\tnapi_value callback;\n" +
            "\tnapi_get_reference_value(env, async_data->callback_ref, &callback);\n" +
            "\n" +
            "\t// 调用回调\n" +
            "\tnapi_value global;\n" +
            "\tnapi_get_global(env, &global);\n" +
            "\tnapi_call_function(env, global, callback, 2, argv, nullptr);\n" +
            "\n" +
            "\t// 清理资源\n" +
            "\tnapi_delete_async_work(env, async_data->work);\n" +
            "\tnapi_delete_reference(env, async_data->callback_ref);\n" +
            "\tdelete async_data;\n" +
            "};\n" +
            "\n" +
            "napi_value displayTypeAsyncNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tdisplayType(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"displayTypeAsync\", nullptr, displayTypeAsyncNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n" +
            "\n" +
            "napi_value displayTypePromiseNapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tdisplayType(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\treturn result;\n" +
            "};\n" +
            "napi_property_descriptor funcDesc[] = {\n" +
            "\t{ \"displayTypePromise\", nullptr, displayTypePromiseNapi, nullptr, nullptr, nullptr, napi_default, nullptr },\n" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);\n";

    private String testStructContent1 = "\nstruct TestStruct {\n" +
            "\tstd::string name;\n" +
            "\tbool age;\n" +
            "\tint add(bool a, bool b);\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == " +
            "napi_ok && thisVar != nullptr) {\n" +
            "\t\tTestStruct *reference = new TestStruct();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorTestStruct, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorTestStruct(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<TestStruct *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value addTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tadd(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_int32(env, args[0], &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value GetnameTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetnameTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->name = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value GetageTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetageTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->age = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor TestStructProps[] = {\n" +
            "\t{\"add\", nullptr, addTestStruct, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "\t{\"name\", nullptr, nullptr, GetnameTestStruct, SetnameTestStruct, nullptr, napi_default, nullptr},\n" +
            "\t{\"age\", nullptr, nullptr, GetageTestStruct, SetageTestStruct, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value TestStructIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"TestStruct\", NAPI_AUTO_LENGTH, ConstructorTestStruct, nullptr, " +
            "sizeof(TestStructProps) / sizeof(TestStructProps[0]), TestStructProps, &TestStructIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"TestStruct\", TestStructIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String testStructContent2 = "\ntemplate <typename T, typename U> struct TestStruct {\n" +
            "\tT name;\n" +
            "\tU age;\n" +
            "\tint add(T a, U b);\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == napi_ok " +
            "&& thisVar != nullptr) {\n" +
            "\t\tTestStruct *reference = new TestStruct();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorTestStruct, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorTestStruct(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<TestStruct *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value addTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法" +
            "\n" +
            "\tadd(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\tnapi_value valueRet0;\n" +
            "\tif (napi_create_int32(env, args[0], &valueRet0) != napi_ok) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_create_int32 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");\n" +
            "\t\treturn result;\n" +
            "\t};\n" +
            "\treturn valueRet0;\n\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value GetnameTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetnameTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->name = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value GetageTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetageTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->age = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor TestStructProps[] = {\n" +
            "\t{\"add\", nullptr, addTestStruct, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "\t{\"name\", nullptr, nullptr, GetnameTestStruct, SetnameTestStruct, nullptr, napi_default, nullptr},\n" +
            "\t{\"age\", nullptr, nullptr, GetageTestStruct, SetageTestStruct, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value TestStructIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"TestStruct\", NAPI_AUTO_LENGTH, ConstructorTestStruct, nullptr, " +
            "sizeof(TestStructProps) / sizeof(TestStructProps[0]), TestStructProps, &TestStructIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"TestStruct\", TestStructIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String testStructContent3 = "\nstruct TestStruct {\n" +
            "\tauto name;\n" +
            "\tauto age;\n" +
            "\tadd(auto a, auto b);\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == napi_ok && " +
            "thisVar != nullptr) {\n" +
            "\t\tTestStruct *reference = new TestStruct();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorTestStruct, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorTestStruct(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<TestStruct *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value addTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tsize_t argc = 2;\n" +
            "\tnapi_value args[2] = {nullptr};\n" +
            "\tnapi_value this_arg;\n" +
            "\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);\n" +
            "\t// 参数校验\n" +
            "\tif (argc < 2) {\n" +
            "\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"argc < 2 error\");\n" +
            "\t\tnapi_throw_error(env, \"EINVAL\", \"需要2个参数\");\n" +
            "\t\treturn nullptr;\n" +
            "\t};\n" +
            "\n" +
            "\t// 调用原始类方法\n" +
            "\tadd(NAPI_PARAM_EXPRESSION);\n" +
            "\t// 创建返回参数\n" +
            "\t\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value GetnameTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetnameTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->name = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value GetageTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetageTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestStruct *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->age = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor TestStructProps[] = {\n" +
            "\t{\"add\", nullptr, addTestStruct, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "\t{\"name\", nullptr, nullptr, GetnameTestStruct, SetnameTestStruct, nullptr, napi_default, nullptr},\n" +
            "\t{\"age\", nullptr, nullptr, GetageTestStruct, SetageTestStruct, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value TestStructIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"TestStruct\", NAPI_AUTO_LENGTH, ConstructorTestStruct, nullptr, " +
            "sizeof(TestStructProps) / sizeof(TestStructProps[0]), TestStructProps, &TestStructIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"TestStruct\", TestStructIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String testStructContent4 = "\nstruct TestStruct {\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorTestStruct(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == napi_ok && " +
            "thisVar != nullptr) {\n" +
            "\t\tTestStruct *reference = new TestStruct();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorTestStruct, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorTestStruct(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<TestStruct *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor TestStructProps[] = {\n" +
            "};\n" +
            "\n" +
            "napi_value TestStructIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"TestStruct\", NAPI_AUTO_LENGTH, ConstructorTestStruct, nullptr, " +
            "sizeof(TestStructProps) / sizeof(TestStructProps[0]), TestStructProps, &TestStructIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"TestStruct\", TestStructIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String testValContent1 = "\nextends const auto employeeName = \"John\";\n" +
            "\n" +
            "napi_value GetemployeeNameGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetemployeeNameGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\temployeeName = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor GNAPIProps[] = {\n" +
            "\t{\"employeeName\", nullptr, nullptr, GetemployeeNameGNAPI, SetemployeeNameGNAPI, nullptr, " +
            "napi_default, nullptr},\n" +
            "};\n";

    private String testValContent2 = "\nextends const std::string employeeName = \"John\";\n" +
            "\n" +
            "napi_value GetemployeeNameGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetemployeeNameGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\temployeeName = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor GNAPIProps[] = {\n" +
            "\t{\"employeeName\", nullptr, nullptr, GetemployeeNameGNAPI, SetemployeeNameGNAPI, nullptr, " +
            "napi_default, nullptr},\n" +
            "};\n";

    private String testValContent3 = "\nextends const int num1 = 1;\n" +
            "\n" +
            "napi_value Getnum1GNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setnum1GNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tnum1 = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor GNAPIProps[] = {\n" +
            "\t{\"num1\", nullptr, nullptr, Getnum1GNAPI, Setnum1GNAPI, nullptr, napi_default, nullptr},\n" +
            "};\n";

    private String testValContent4 = "\nextends const std::map<std::string, number} playerCodes = {\n" +
            "\t{\"player1\", 9},\n" +
            "\t{\"player2\", 10}\n" +
            "};\n" +
            "\n" +
            "napi_value GetplayerCodesGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetplayerCodesGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tplayerCodes = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor GNAPIProps[] = {\n" +
            "\t{\"playerCodes\", nullptr, nullptr, GetplayerCodesGNAPI, SetplayerCodesGNAPI, " +
            "nullptr, napi_default, nullptr},\n" +
            "};\n";

    private String testValContent5 = "\nextends const auto playerCodes.player2 = 11;\n" +
            "\n" +
            "napi_value GetplayerCodes.player2GNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetplayerCodes.player2GNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tplayerCodes.player2 = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor GNAPIProps[] = {\n" +
            "\t{\"playerCodes.player2\", nullptr, nullptr, GetplayerCodes.player2GNAPI, " +
            "SetplayerCodes.player2GNAPI, nullptr, napi_default, nullptr},\n" +
            "};\n";

    private String testValContent6 = "\nstruct ROUTESST {\n" +
            "\tstd::string path;\n" +
            "\tboolean allowAnonymous;\n" +
            "};\n" +
            "\n" +
            "const std::vector<ROUTESST> ROUTES = {\n" +
            "\t{'/dashboard', false},\n" +
            "\t{'/deals', true},\n" +
            "};\n" +
            "\n" +
            "napi_value GetROUTESGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetROUTESGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tROUTES = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor GNAPIProps[] = {\n" +
            "\t{\"ROUTES\", nullptr, nullptr, GetROUTESGNAPI, SetROUTESGNAPI, nullptr, napi_default, nullptr},\n" +
            "};\n";

    private String testGenConstContent = "\nextends const int TestParam = 100;\n" +
            "\n" +
            "napi_value GetTestParamGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetTestParamGNAPI(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tchar msg[128] = {0};\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_value msgvalue;\n" +
            "\tnapi_status status;\n" +
            "\tsize_t argc = 1, size = 0;\n" +
            "\tif (napi_get_cb_info(env, info, &argc, &msgvalue, nullptr, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tTestParam = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor GNAPIProps[] = {\n" +
            "\t{\"TestParam\", nullptr, nullptr, GetTestParamGNAPI, " +
            "SetTestParamGNAPI, nullptr, napi_default, nullptr},\n" +
            "};\n";

    @Test
    void getInterfaceContent() {
    }

    @Test
    void getFuncContent1() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "number");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenNapiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = testFuncContent1;
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent2() {
        FuncObj fo = new FuncObj();
        fo.setName("ToCapital");
        fo.setRetValue("string");
        fo.addParam("str", "string");
        ParamObj pa = new ParamObj();
        pa.setName("length");
        pa.setType("number");
        pa.setStrValue("0");
        fo.addParam(pa);
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenNapiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = testFuncContent2;
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent3() {
        FuncObj fo = new FuncObj();
        fo.setName("Nemw");
        fo.setRetValue("string");
        ParamObj pa1 = new ParamObj();
        pa1.setName("str");
        pa1.setType("string");
        pa1.setStrValue("\"joke\"");
        fo.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("length");
        pa2.setType("number");
        pa2.setStrValue("0");
        fo.addParam(pa2);
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenNapiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = testFuncContent3;
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent4() {
        FuncObj fo = new FuncObj();
        fo.setName("Nemw");
        fo.setRetValue("string");
        ParamObj pa1 = new ParamObj();
        pa1.setName("str");
        fo.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("length");
        fo.addParam(pa2);
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenNapiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = testFuncContent4;
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent5() {
        FuncObj fo = new FuncObj();
        fo.setName("Nemw");
        fo.setRetValue("");
        ParamObj pa1 = new ParamObj();
        pa1.setName("str");
        fo.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("length");
        fo.addParam(pa2);
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenNapiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = testFuncContent5;
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent6() {
        FuncObj fo = new FuncObj();
        fo.setName("getArray");
        fo.setRetValue("T[]");

        List<String> tempList = new CopyOnWriteArrayList<>();
        tempList.add("T");
        fo.setTempList(tempList);
        ParamObj pa1 = new ParamObj();
        pa1.setName("items");
        pa1.setType("T[]");
        fo.addParam(pa1);

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenNapiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = testFuncContent6;
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent7() {
        FuncObj fo = new FuncObj();
        fo.setName("displayType");
        fo.setRetValue("void");

        List<String> tempList = new CopyOnWriteArrayList<>();
        tempList.add("T");
        tempList.add("U");
        fo.setTempList(tempList);
        ParamObj pa1 = new ParamObj();
        pa1.setName("id");
        pa1.setType("T");
        fo.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("name");
        pa2.setType("U");
        fo.addParam(pa2);

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenNapiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = testFuncContent7;
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getStructContent1() {
        StructObj so = new StructObj();
        so.setName("TestStruct");

        so.addMember("name", "string");
        so.addMember("age", "boolean");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("boolean");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("boolean");
        poList.add(poItem2);

        so.addFunc("add", "number", poList);

        List<StructObj> sol = new CopyOnWriteArrayList<>();
        sol.add(so);
        ParseObj po = new ParseObj();
        po.setStructList(sol);

        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenNapiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = testStructContent1;
            assertEquals(expect, structContent);
        }
    }

    @Test
    void getStructContent2() {
        StructObj so = new StructObj();
        so.setName("TestStruct");
        so.addMember("name", "T");
        so.addMember("age", "U");
        so.addTemplate("T");
        so.addTemplate("U");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("T");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("U");
        poList.add(poItem2);

        so.addFunc("add", "number", poList);

        List<StructObj> sol = new CopyOnWriteArrayList<>();
        sol.add(so);
        ParseObj po = new ParseObj();
        po.setStructList(sol);

        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenNapiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = testStructContent2;
            assertEquals(expect, structContent);
        }
    }

    @Test
    void getStructContent3() {
        StructObj so = new StructObj();
        so.setName("TestStruct");

        so.addMember("name", "");
        so.addMember("age", "");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("");
        poList.add(poItem2);

        so.addFunc("add", "", poList);

        List<StructObj> sol = new CopyOnWriteArrayList<>();
        sol.add(so);
        ParseObj po = new ParseObj();
        po.setStructList(sol);

        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenNapiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = testStructContent3;
            assertEquals(expect, structContent);
        }
    }

    @Test
    void getStructContent4() {
        StructObj so = new StructObj();
        so.setName("TestStruct");

        List<StructObj> sol = new CopyOnWriteArrayList<>();
        sol.add(so);
        ParseObj po = new ParseObj();
        po.setStructList(sol);

        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenNapiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = testStructContent4;
            assertEquals(expect, structContent);
        }
    }

    @Test
    void getTypeContent() {
    }

    @Test
    void getUnionContent1() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "string");
        uo.addMember("age", "number");

        List<UnionObj> uol = new CopyOnWriteArrayList<>();
        uol.add(uo);
        ParseObj po = new ParseObj();
        po.setUnionList(uol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenNapiCppFile gdf) {
            String unionContent = gdf.getUnionContent();
            System.out.println("genUnion: " + unionContent);
            String expect = "\nunion TestUnion{\n" +
                    "\tstd::string name;\n" +
                    "\tint age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void getUnionContent2() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");
        uo.addMember("name", "T");
        uo.addMember("age", "U");

        uo.addTemplate("T");
        uo.addTemplate("U");

        List<UnionObj> uol = new CopyOnWriteArrayList<>();
        uol.add(uo);
        ParseObj po = new ParseObj();
        po.setUnionList(uol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenNapiCppFile gdf) {
            String unionContent = gdf.getUnionContent();
            System.out.println("genUnion: " + unionContent);
            String expect = "\ntemplate <typename T, typename U> union TestUnion{\n" +
                    "\tT name;\n" +
                    "\tU age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void getVarContent1() {
        ParamObj paObj = new ParamObj();
        paObj.setName("employeeName");
        paObj.setStrValue("\"John\"");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenNapiCppFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = testValContent1;
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent2() {
        ParamObj paObj = new ParamObj();
        paObj.setName("employeeName");
        paObj.setType("string");
        paObj.setStrValue("\"John\"");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenNapiCppFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = testValContent2;
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent3() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("number");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenNapiCppFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = testValContent3;
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent4() {
        ParamObj paObj = new ParamObj();
        paObj.setName("playerCodes");

        ParamObj paItem1 = new ParamObj();
        paItem1.setName("player1");
        paItem1.setStrValue("9");
        paObj.addParam(paItem1);
        ParamObj paItem2 = new ParamObj();
        paItem2.setName("player2");
        paItem2.setStrValue("10");
        paObj.addParam(paItem2);

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenNapiCppFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = testValContent4;
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent5() {
        ParamObj paObj = new ParamObj();
        paObj.setName("playerCodes.player2");
        paObj.setStrValue("11");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenNapiCppFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = testValContent5;
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent6() {
        ParamObj paObj = new ParamObj();
        paObj.setName("ROUTES");
        paObj.setType("any[]");

        ParamObj paListItem1 = new ParamObj();
        ParamObj paItem1 = new ParamObj();
        paItem1.setName("path");
        paItem1.setStrValue("'/dashboard'");
        paListItem1.addParam(paItem1);

        ParamObj paItem3 = new ParamObj();
        paItem3.setName("allowAnonymous");
        paItem3.setStrValue("false");
        paListItem1.addParam(paItem3);
        paObj.addParam(paListItem1);

        ParamObj paListItem2 = new ParamObj();
        ParamObj paItem21 = new ParamObj();
        paItem21.setName("path");
        paItem21.setStrValue("'/deals'");
        paListItem2.addParam(paItem21);

        ParamObj paItem23 = new ParamObj();
        paItem23.setName("allowAnonymous");
        paItem23.setStrValue("true");
        paListItem2.addParam(paItem23);
        paObj.addParam(paListItem2);

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenNapiCppFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = testValContent6;
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getConstContent() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genVarList(pol);

        if (gb instanceof GenNapiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = testGenConstContent;
            assertEquals(expect, varContent);
        }
    }

}