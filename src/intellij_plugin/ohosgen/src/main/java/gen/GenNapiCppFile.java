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
import utils.FileUtils;
import utils.StringUtils;

import java.io.File;
import java.util.List;
import java.util.Locale;
import java.util.Map;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class GenNapiCppFile extends GeneratorBase {
    private static final String NAPI_ENUM_TOKEN = "enum";
    private static final String NAPI_CLASS_TOKEN = "class";
    private static final String NAPI_STRUCT_TOKEN = "struct";
    private static final String NAPI_UNION_TOKEN = "union";
    private static final String NAPI_TEMPLATE_TOKEN = "template";
    private static final String NAPI_TYPE_NAME_TOKEN = "typename";
    private static final String NAPI_STAR_TOKEN = "*";
    private static final String NAPI_CHAR_START_TOKEN = "char*";
    private static final String NAPI_AUTO_TOKEN = "auto";
    private static final String NAPI_EXPORT_TOKEN = "export";
    private static final String NAPI_IMPLEMENNAPI_TOKEN = "implements";
    private static final String NAPI_EXTENDS_TOKEN = "extends";
    private static final String NAPI_CONST_TOKEN = "const";
    private static final String NAPI_PRIVATE_TOKEN = "private";
    private static final String NAPI_PUBLIC_TOKEN = "public";
    private static final String NAPI_INTERFACE_TOKEN = "interface";
    private static final String NAPI_PROTECTED_TOKEN = "protected";
    private static final String NAPI_STATIC_TOKEN = "static";
    private static final String NAPI_ANY_TOKEN = "any";
    private static final String NAPI_VOID_TOKEN = "void";
    private static final String NAPI_NUMBER_TOKEN = "number";
    private static final String NAPI_NEVER_TOKEN = "never";
    private static final String NAPI_BOOLEAN_TOKEN = "boolean";
    private static final String NAPI_STRING_TOKEN = "string";
    private static final String NAPI_UNIQUE_TOKEN = "unique";
    private static final String NAPI_SYMBOL_TOKEN = "symbol";
    private static final String NAPI_UNDEFINED_TOKEN = "undefined";
    private static final String NAPI_OBJECT_TOKEN = "object";
    private static final String NAPI_OF_TOKEN = "of";
    private static final String NAPI_KEYOF_TOKEN = "keyof";
    private static final String NAPI_TYPE_TOKEN = "type";
    private static final String NAPI_CONSTRUCTOR_TOKEN = "constructor";
    private static final String NAPI_NAMESPACE_TOKEN = "namespace";
    private static final String NAPI_REQUIRE_TOKEN = "require";
    private static final String NAPI_MODULE_TOKEN = "module";
    private static final String NAPI_DECLARE_TOKEN = "declare";
    private static final String NAPI_ABSTRACT_TOKEN = "abstract";
    private static final String NAPI_DEBUGGER_TOKEN = "debugger";
    private static final String NAPI_FUNCTION_TOKEN = "function";
    private static final String NAPI_THIS_TOKEN = "this";
    private static final String NAPI_WITH_TOKEN = "with";
    private static final String NAPI_DEFAULT_TOKEN = "default";
    private static final String NAPI_READONLY_TOKEN = "readonly";
    private static final String NAPI_ASYNC_TOKEN = "async";
    private static final String NAPI_AWAIT_TOKEN = "await";
    private static final String NAPI_YIELD_TOKEN = "yield";
    private static final String NAPI_NEW_LINE = "\n";
    private static final String NAPI_TAB_SPACE = "\t";
    private static final String NAPI_BLANK_SPACE = " ";
    private static final String NAPI_SPLIT = " | ";
    private static final String NAPI_EQUAL = " = ";
    private static final String NAPI_COMMA = ",";
    private static final String NAPI_DOUBLE_QUOTATION = "\"";
    private static final String NAPI_UNDER_LINE = "_";
    private static final String NAPI_SEMICOLON = ";";
    private static final String NAPI_COLON = ":";
    private static final String NAPI_ELLIPSIS = "...";
    private static final String NAPI_DOT = ".";
    private static final String NAPI_LEFT_BRACE = "{";
    private static final String NAPI_RIGHT_BRACE = "}";
    private static final String NAPI_LEFT_PARENTHESES = "(";
    private static final String NAPI_RIGHT_PARENTHESES = ")";
    private static final String NAPI_LEFT_SQUARE_BRACKET = "[";
    private static final String NAPI_RIGHT_SQUARE_BRACKET = "]";
    private static final String NAPI_LEFT_ANGLE_BRACKET = "<";
    private static final String NAPI_RIGHT_ANGLE_BRACKET = ">";

    private static final String NAPI_STD_STRING = "std::string";
    private static final String NAPI_STD_VECTOR = "std::vector";
    private static final String NAPI_STD_LIST = "std::list";
    private static final String NAPI_STD_ARRAY = "std::array";
    private static final String NAPI_STD_STACK = "std::stack";
    private static final String NAPI_STD_QUEUE = "std::queue";
    private static final String NAPI_STD_PAIR = "std::pair";
    private static final String NAPI_STD_MAP = "std::map";
    private static final String NAPI_STD_SET = "std::set";
    private static final String NAPI_STD_DEQUE = "std::deque";
    private static final String NAPI_STD_MULTIMAP = "std::multimap";
    private static final String NAPI_STD_MULTISET = "std::multiset";

    private static final String NAPI_STR_SUFFIX = "STR";
    private static final String NAPI_FILE_PREFIX = "ag_";
    private static final String NAPI_FILE_H_SUFFIX = ".h";
    private static final String NAPI_FILE_NAPI_SUFFIX = ".cpp";
    private static final String NAPI_FILE_C_SUFFIX = ".c";
    private static final String NAPI_STRUCT_SUFFIX = "ST";

    private static final String NAPI_ENUM_NAME = "NAPI_ENUM_NAME";
    private static final String NAPI_ENUM_MEM_LIST = "NAPI_ENUM_MEM_LIST";
    private static final String NAPI_ENUM_VAL_LIST = "NAPI_ENUM_VAL_LIST";
    private static final String NAPI_ENUM_CNT = "NAPI_ENUM_CNT";
    private static final String NAPI_ENUM_ITEM_VALUE = "NAPI_ENUM_ITEM_VALUE";
    private static final String NAPI_ENUM_VALUE_INDEX = "i";
    private static final String NAPI_ENUM_VALUE_ITER = "values[i]";
    private static final String NAPI_CREATE_ENUM_DECLARE = "\n// 创建枚举对象\n" +
            "napi_value CreateNAPI_ENUM_NAMEEnum(napi_env env) {\n" +
            "\tnapi_value enum_obj;\n" +
            "\tnapi_create_object(env, &enum_obj);\n" +
            "\n" +
            "\t// 添加枚举成员\n" +
            "\tconst char* members[] = {NAPI_ENUM_MEM_LIST};\n" +
            "\tconst int values[] = {NAPI_ENUM_VAL_LIST};\n" +
            "\tfor (int32_t i = 0; i < NAPI_ENUM_CNT; ++i) {\n" +
            "\t\tnapi_value value;\n" +
            "\t\tnapi_create_int32(env, NAPI_ENUM_ITEM_VALUE, &value);\n" +
            "\t\tnapi_set_named_property(env, enum_obj, members[i], value);\n" +
            "\t}\n" +
            "\n" +
            "\treturn enum_obj;\n" +
            "}\n";

    private static final String NAPI_EXPORT_ENUM = "\t// 创建并绑定枚举\n" +
            "\tnapi_value NAPI_ENUM_NAME_enum = CreateNAPI_ENUM_NAMEEnum(env);\n" +
            "\tnapi_set_named_property(env, exports, \"NAPI_ENUM_NAME\", NAPI_ENUM_NAME_enum);\n";

    private static final String NAPI_CLASS_NAME = "NAPI_CLASS_NAME";
    private static final String NAPI_CLASS_METHOD_NAME = "NAPI_CLASS_METHOD_NAME";
    private static final String NAPI_CLASS_ATTRIBUTE_NAME = "NAPI_CLASS_ATTRIBUTE_NAME";
    private static final String NAPI_CONSTRUCTOR_EXPRESSION = "NAPI_CONSTRUCTOR_EXPRESSION";
    private static final String NAPI_CONSTRUCTOR_DECLARE = "\n\tJSBIND_CONSTRUCTOR<NAPI_CONSTRUCTOR_PARAMS>();";
    private static final String NAPI_CONSTRUCTOR_PARAMS = "NAPI_CONSTRUCTOR_PARAMS";
    private static final String NAPI_METHOD_DECLARE = "\n\tJSBIND_METHOD(NAPI_METHOD_NAME, \"NAPI_METHOD_NAME\");" +
            "\n\tJSBIND_PMETHOD(NAPI_METHOD_NAME, \"NAPI_METHOD_NAMEPromise\");";
    private static final String NAPI_METHOD_EXPRESSION = "NAPI_METHOD_EXPRESSION";
    private static final String NAPI_METHOD_NAME = "NAPI_METHOD_NAME";
    private static final String NAPI_PMETHOD_DECLARE = "\n\tJSBIND_PMETHOD(NAPI_PMETHOD_NAME);";
    private static final String NAPI_PMETHOD_EXPRESSION = "NAPI_PMETHOD_EXPRESSION";
    private static final String NAPI_PMETHOD_NAME = "NAPI_PMETHOD_NAME";
    private static final String NAPI_PROPERTY_DECLARE = "\n\tJSBIND_PROPERTY(NAPI_PROPERTY_NAME);";
    private static final String NAPI_PROPERTY_EXPRESSION = "NAPI_PROPERTY_EXPRESSION";
    private static final String NAPI_PROPERTY_NAME = "NAPI_PROPERTY_NAME";


    private static final String NAPI_CLASS_CONSTRUCTURE =
            "\nnapi_value ConstructorNAPI_CLASS_NAME(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == napi_ok &&" +
            " thisVar != nullptr) {\n" +
            "\t\tNAPI_CLASS_NAME *reference = new NAPI_CLASS_NAME();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorNAPI_CLASS_NAME, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n";
    private static final String NAPI_CLASS_DESTRUCTURE =
            "\nvoid DestructorNAPI_CLASS_NAME(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<NAPI_CLASS_NAME *>(nativeObject);\n" +
            "};\n";
    private static final String NAPI_CLASS_GET_ATTRIBUTE_DECLARE =
            "\nnapi_value GetNAPI_CLASS_ATTRIBUTE_NAMENAPI_CLASS_NAME(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tNAPI_CLASS_NAME *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n";
    private static final String NAPI_CLASS_SET_ATTRIBUTE_DECLARE =
            "\nnapi_value SetNAPI_CLASS_ATTRIBUTE_NAMENAPI_CLASS_NAME(napi_env env, napi_callback_info info)\n" +
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
            "\tNAPI_CLASS_NAME *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->NAPI_CLASS_ATTRIBUTE_NAME = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n";
    private static final String NAPI_CLASS_METHOD_DECLARE =
            "\nnapi_value NAPI_CLASS_METHOD_NAMENAPI_CLASS_NAME(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tNAPI_CLASS_NAME *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n";
    private static final String NAPI_CLASS_METHOD_PROPERTY = "NAPI_CLASS_METHOD_PROPERTY";
    private static final String NAPI_CLASS_ATTRIBUTE_PROPERTY = "NAPI_CLASS_ATTRIBUTE_PROPERTY";
    private static final String NAPI_CLASS_METHOD_PROPERTY_DECLARE =
            "\t{\"NAPI_CLASS_METHOD_NAME\", nullptr, NAPI_CLASS_METHOD_NAMENAPI_CLASS_NAME, " +
            "nullptr, nullptr, nullptr, napi_default, nullptr},\n";
    private static final String NAPI_CLASS_ATTRIBUTE_PROPERTY_DECLARE =
            "\t{\"NAPI_CLASS_ATTRIBUTE_NAME\", nullptr, nullptr, GetNAPI_CLASS_ATTRIBUTE_NAMENAPI_CLASS_NAME, " +
                    "SetNAPI_CLASS_ATTRIBUTE_NAMENAPI_CLASS_NAME, nullptr, napi_default, nullptr},\n";
    private static final String NAPI_CLASS_PROPERTY_DECLARE =
            "\nnapi_property_descriptor NAPI_CLASS_NAMEProps[] = {\n" +
            "NAPI_CLASS_METHOD_PROPERTY" +
            "NAPI_CLASS_ATTRIBUTE_PROPERTY" +
            "};\n";
    private static final String NAPI_CLASS_INIT = "\nnapi_value NAPI_CLASS_NAMEIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"NAPI_CLASS_NAME\", NAPI_AUTO_LENGTH, " +
            "ConstructorNAPI_CLASS_NAME, nullptr, sizeof(NAPI_CLASS_NAMEProps) / " +
            "sizeof(NAPI_CLASS_NAMEProps[0]), NAPI_CLASS_NAMEProps, " +
            "&NAPI_CLASS_NAMEIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"NAPI_CLASS_NAME\", NAPI_CLASS_NAMEIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private static final String NAPI_FUNCTION_NAME = "NAPI_FUNCTION_NAME";
    private static final String NAPI_FUNCTION_DESC_PROPERTY = "NAPI_FUNCTION_DESC_DECLARE";
    private static final String NAPI_PARAM_NAME = "NAPI_PARAM_NAME";
    private static final String NAPI_PARAM_TYPE = "NAPI_PARAM_TYPE";

    private static final String NAPI_GET_ARGUMENTS_DECLARE = "NAPI_GET_ARGUMENTS_DECLARE";
    private static final String NAPI_CLASS_CALL_METHOD_DECLARE = "NAPI_CLASS_CALL_METHOD_DECLARE";
    private static final String NAPI_CLASS_RETURN_VALUE_DECLARE = "NAPI_CLASS_RETURN_VALUE_DECLARE";

    private static final String NAPI_FUNCTION_CALL_EXPRESSION = "NAPI_FUNCTION_NAME(NAPI_PARAM_EXPRESSION);";

    private static final String NAPI_PARAM_CNT = "NAPI_PARAM_CNT";
    private static final String NAPI_PARAM_CHECK =
            "size_t argc = NAPI_PARAM_CNT;" +
            "\n\tnapi_value args[NAPI_PARAM_CNT] = {nullptr};" +
            "\n\tnapi_value this_arg;" +
            "\n\tnapi_get_cb_info(env, info, &argc, args, &this_arg, nullptr);" +
            "\n\t// 参数校验" +
            "\n\tif (argc < NAPI_PARAM_CNT) {" +
            "\n\t\tnapi_throw_error(env, \"EINVAL\", \"需要NAPI_PARAM_CNT个参数\");" +
            "\n\t\treturn nullptr;" +
            "\n\t};\n\n";

    private static final String NAPI_FUNCTION_DECLARE =
            "\nnapi_value NAPI_FUNCTION_NAMENapi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\treturn result;\n" +
            "};\n";

    private static final String NAPI_FUNCTION_DESC_DECLARE =
            "\t{ \"NAPI_FUNCTION_NAME\", nullptr, NAPI_FUNCTION_NAMENapi, nullptr, " +
            "nullptr, nullptr, napi_default, nullptr },\n";

    private static final String NAPI_FUNCTION_INIT = "napi_property_descriptor funcDesc[] = {\n" +
            "NAPI_FUNCTION_DESC_DECLARE" +
            "};\n" +
            "napi_define_properties(env, exports, sizeof(funcDesc) / sizeof(funcDesc[0]), funcDesc);";

    private static final String NAPI_VAL_GET_DECLARE =
            "\nnapi_value GetNAPI_CLASS_ATTRIBUTE_NAMENAPI_CLASS_NAME(napi_env env, napi_callback_info info)\n" +
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
                    "};\n";
    private static final String NAPI_VAL_SET_DECLARE =
            "\nnapi_value SetNAPI_CLASS_ATTRIBUTE_NAMENAPI_CLASS_NAME(napi_env env, napi_callback_info info)\n" +
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
                    "\tNAPI_CLASS_ATTRIBUTE_NAME = msg;\n" +
                    "\treturn nullptr;\n" +
                    "};\n";

    private String interfaceContent = "";
    private String enumContent = "";
    private String classContent = "";
    private String funcContent = "";
    private String structContent = "";
    private String typeContent = "";
    private String unionContent = "";
    private String constContent = "";

    private final Map<String, String> ts2cppMap = Map.ofEntries(
        Map.entry("any", "auto"),
        Map.entry("boolean", "bool"),
        Map.entry("string", "std::string"),
        Map.entry("number", "int"),
        Map.entry("void", "void"),
        Map.entry("[]", "*")
    );

    private final Map<String, String> tsTokenMap = Map.ofEntries(
        Map.entry("\"", ""),
        Map.entry("*", ""),
        Map.entry("&", ""),
        Map.entry("(", ""),
        Map.entry(")", "")
    );

    private final Map<String, String> getArguMap = Map.ofEntries(
        Map.entry("bool", "\tnapi_valuetype valuetypeNAPI_PARAM_CNT;" +
                "\n\tif (napi_typeof(env, args[NAPI_PARAM_CNT], &valuetypeNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\tif (type != napi_boolean) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_boolean error\");" +
                "\n\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", " +
                "\"第valuetypeNAPI_PARAM_CNT个参数必须是布尔\");" +
                "\n\t\treturn result;" +
                "\n\t}" +
                "\n" +
                "\n\tbool valueNAPI_PARAM_CNT;\n" +
                "\n\tif (napi_get_value_bool(env, args[NAPI_PARAM_CNT], &valueNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_double error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");" +
                "\n\t\treturn result;" +
                "\n\t};\n\n"),
        Map.entry("string", "\tnapi_valuetype valuetypeNAPI_PARAM_CNT;" +
                "\n\tif (napi_typeof(env, args[NAPI_PARAM_CNT], &valuetypeNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\tif (type != napi_string) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_string error\");" +
                "\n\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", " +
                "\"第NAPI_PARAM_CNT个参数必须是字符串\");" +
                "\n\t\treturn result;" +
                "\n\t}" +
                "\n" +
                "\n\tchar* valueNAPI_PARAM_CNT[MAX_BUFFER_SIZE];" +
                "\n\tsize_t bufferSize = MAX_BUFFER_SIZE;" +
                "\n\tsize_t realSize = 0;" +
                "\n\tif (napi_get_value_string_utf8(env, args[NAPI_PARAM_CNT], " +
                "&valueNAPI_PARAM_CNT, bufferSize, &realSize) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", " +
                "\"napi_get_value_string_utf8 error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");" +
                "\n\t\treturn result;" +
                "\n\t};\n\n"),
        Map.entry("number", "\tnapi_valuetype valuetypeNAPI_PARAM_CNT;" +
                "\n\tif (napi_typeof(env, args[NAPI_PARAM_CNT], &valuetypeNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\tif (type != napi_number) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");" +
                "\n\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", " +
                "\"第valuetypeNAPI_PARAM_CNT个参数必须是数字\");" +
                "\n\t\treturn result;" +
                "\n\t}" +
                "\n" +
                "\n\tint valueNAPI_PARAM_CNT = 0;\n" +
                "\n\tsize_t bufferSize = MAX_BUFFER_SIZE;" +
                "\n\tsize_t realSize = 0;" +
                "\n\tif (napi_get_value_int32(env, args[NAPI_PARAM_CNT], " +
                "&valueNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", " +
                "\"napi_get_value_int32 error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");" +
                "\n\t\treturn result;" +
                "\n\t};\n\n"),
        Map.entry("double", "\tnapi_valuetype valuetypeNAPI_PARAM_CNT;" +
                "\n\tif (napi_typeof(env, args[NAPI_PARAM_CNT], &valuetypeNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\tif (type != napi_number) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_number error\");" +
                "\n\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", " +
                "\"第valuetypeNAPI_PARAM_CNT个参数必须是数字\");" +
                "\n\t\treturn result;" +
                "\n\t}" +
                "\n" +
                "\n\tdouble valueNAPI_PARAM_CNT = 0;\n" +
                "\n\tsize_t bufferSize = MAX_BUFFER_SIZE;" +
                "\n\tsize_t realSize = 0;" +
                "\n\tif (napi_get_value_double(env, args[NAPI_PARAM_CNT], " +
                "&valueNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", " +
                "\"napi_get_value_double error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");" +
                "\n\t\treturn result;" +
                "\n\t};\n\n"),
        Map.entry("object", "\tnapi_valuetype valuetypeNAPI_PARAM_CNT;" +
                "\n\tif (napi_typeof(env, args[NAPI_PARAM_CNT], &valuetypeNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_typeof error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error value type\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\tif (type != napi_object) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_object error\");" +
                "\n\t\tapi_throw_type_error(env, \"ERR_INVALID_ARG_TYPE\", " +
                "\"第valuetypeNAPI_PARAM_CNT个参数必须是对象\");" +
                "\n\t\treturn result;" +
                "\n\t}" +
                "\n" +
                "\n\tobject valueNAPI_PARAM_CNT = 0;\n" +
                "\n\tif (napi_unwrap(env, jsthis, (void **)&valueNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", " +
                "\"napi_unwrap error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");" +
                "\n\t\treturn result;" +
                "\n\t};\n\n")
    );

    private final Map<String, String> setArguMap = Map.ofEntries(
        Map.entry("void", ""),
        Map.entry("bool",
                "napi_value valueRetNAPI_PARAM_CNT;" +
                "\n\tif (napi_create_uint32(env, args[NAPI_PARAM_CNT], &valueNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", \"napi_get_value_double error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\treturn valueRetNAPI_PARAM_CNT;\n"),
        Map.entry("string",
                "napi_value valueRetNAPI_PARAM_CNT;" +
                "\n\tif (napi_create_string_utf8(env, args[NAPI_PARAM_CNT], " +
                "realSize, &valueRetNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", " +
                "\"napi_create_string_utf8 error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\treturn valueRetNAPI_PARAM_CNT;\n"),
        Map.entry("number",
                "napi_value valueRetNAPI_PARAM_CNT;" +
                "\n\tif (napi_create_int32(env, args[NAPI_PARAM_CNT], " +
                "&valueRetNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", " +
                "\"napi_create_int32 error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\treturn valueRetNAPI_PARAM_CNT;\n"),
        Map.entry("double",
                "napi_value valueRetNAPI_PARAM_CNT;" +
                "\n\tif (napi_create_double(env, args[NAPI_PARAM_CNT], " +
                "&valueRetNAPI_PARAM_CNT) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", " +
                "\"napi_create_double error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error get value\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\treturn valueRetNAPI_PARAM_CNT;\n"),
        Map.entry("object",
                "NAPI_PARAM_TYPE *reference = new NAPI_PARAM_TYPE();" +
                "\n\tif (napi_wrap(env, thisVar, reinterpret_cast<void *>(reference), " +
                        "DesNAPI_PARAM_TYPENAPI_FUNCTION_NAMENAPI_PARAM_CNT, nullptr, " +
                        "nullptr) != napi_ok) {" +
                "\n\t\tOH_LOG_Print(LOG_APP, LOG_INFO, GLOBAL_RESMGR, \"Log\", " +
                "\"napi_wrap error\");" +
                "\n\t\tnapi_throw_error(env, \"EINTYPE\", \"error wrap value\");" +
                "\n\t\treturn result;" +
                "\n\t};" +
                "\n\treturn thisVar;\n")
    );

    /**
     * 构造函数
     */
    GenNapiCppFile() {

    }

    /**
     * 将 cpp key 转换成 ts key
     *
     * @param cppKey 枚举对象列表
     * @return ts key
     */
    private String ts2CppKey(String cppKey) {
        if (cppKey == null) {
            return "";
        }
        String retKey = cppKey;
        for (Map.Entry<String, String> entry : ts2cppMap.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            int ret = cppKey.indexOf(key);
            if (ret >= 0 && value.contains(NAPI_STAR_TOKEN)) {
                return cppKey.substring(0, ret) + value;
            } else if (ret >= 0) {
                return value;
            }
        }
        return retKey;
    }

    /**
     * 将cpp token 替换成对应的dts token
     *
     * @param cppKey 语言关键字
     * @return 替换后字符串
     */
    private String replaceTsToken(String cppKey) {
        String retKey = cppKey;
        for (Map.Entry<String, String> entry : tsTokenMap.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            int ret = retKey.indexOf(key);
            if (ret >= 0) {
                retKey = retKey.replace(key, value);
            }
        }
        return retKey;
    }

    /**
     * 获得接口内容
     *
     * @return 接口内容
     */
    public String getInterfaceContent() {
        return interfaceContent;
    }

    /**
     * 获得枚举内容
     *
     * @return 枚举内容
     */
    public String getEnumContent() {
        return enumContent;
    }

    /**
     * 获得类内容
     *
     * @return 类内容
     */
    public String getClassContent() {
        return classContent;
    }

    /**
     * 获得方法内容
     *
     * @return 方法内容
     */
    public String getFuncContent() {
        return funcContent;
    }

    /**
     * 获得结构体内容
     *
     * @return 结构体内容
     */
    public String getStructContent() {
        return structContent;
    }

    /**
     * 获得type内容
     *
     * @return type内容
     */
    public String getTypeContent() {
        return typeContent;
    }

    /**
     * 获得联合体内容
     *
     * @return 联合体内容
     */
    public String getUnionContent() {
        return unionContent;
    }

    /**
     * 获得常量内容
     *
     * @return 常量内容
     */
    public String getConstContent() {
        return constContent;
    }

    /**
     * 生成输出内容
     *
     * @param po 解析类
     */
    @Override
    public void genContent(ParseObj po) {
        genInterfaceList(po.getInterfaceList());
        genEnumList(po.getEnumList());
        genClassList(po.getClassList());
        genFuncList(po.getFuncList());
        genStructList(po.getStructList());
        genTypeList(po.getTypeList());
        genUnionList(po.getUnionList());
        genVarList(po.getVarList());
    }

    /**
     * 生成文件
     *
     * @param fileName 文件名
     * @param filePath 文件路径
     */
    @Override
    public void genFile(String filePath, String fileName) {
        System.out.println("genFile : " + filePath + fileName);
        String outFileName = filePath + File.separator + NAPI_FILE_PREFIX +
                fileName.replace(".", "_") + NAPI_FILE_H_SUFFIX;
        System.out.println("outFileName : " + outFileName);

        FileUtils.createFile(outFileName);

        FileUtils.appendText(outFileName, this.genFileHeader(filePath + File.separator + fileName));
        FileUtils.appendText(outFileName, this.constContent);
        FileUtils.appendText(outFileName, this.enumContent);
        FileUtils.appendText(outFileName, this.typeContent);
        FileUtils.appendText(outFileName, this.interfaceContent);
        FileUtils.appendText(outFileName, this.unionContent);
        FileUtils.appendText(outFileName, this.funcContent);
        FileUtils.appendText(outFileName, this.structContent);
        FileUtils.appendText(outFileName, this.classContent);

    }

    /**
     * 生成输出内容
     *
     * @param iol 接口列表
     */
    @Override
    public void genInterfaceList(List<InterfaceObject> iol) {
        System.out.println("genInterfaceList" + iol.toString());
    };

    private String genCppEnumContent(EnumObj eo) {
        String enumName = eo.getName();
        enumName = !enumName.isEmpty() ? enumName : eo.getAlias();
        List<String> memList = eo.getMemberList();
        List<String> vaList = eo.getValueList();
        int i = 0;
        String resContent = "";
        resContent += NAPI_NEW_LINE + NAPI_ENUM_TOKEN +
                NAPI_BLANK_SPACE + enumName + NAPI_BLANK_SPACE + NAPI_LEFT_BRACE;
        for (String memItem : memList) {
            resContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + memItem;
            if (vaList.size() > i && !vaList.get(i).isEmpty()) {
                resContent += NAPI_EQUAL + replaceTsToken(vaList.get(i)) + NAPI_COMMA;
            } else {
                resContent += NAPI_COMMA;
            }
            i++;
        }

        resContent = StringUtils.removeLastSpace(resContent);
        resContent += NAPI_NEW_LINE + NAPI_RIGHT_BRACE + NAPI_SEMICOLON + NAPI_NEW_LINE;

        i = 0;
        if (vaList.size() > i && !vaList.get(i).isEmpty() &&
                vaList.get(i).contains("\"")) {
            resContent += NAPI_NEW_LINE + NAPI_CHAR_START_TOKEN + NAPI_BLANK_SPACE +
                    enumName.toLowerCase(Locale.ROOT) + NAPI_UNDER_LINE + NAPI_STR_SUFFIX +
                    NAPI_LEFT_SQUARE_BRACKET + NAPI_RIGHT_SQUARE_BRACKET + NAPI_EQUAL + NAPI_LEFT_BRACE;
            for (String val : vaList) {
                resContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + NAPI_LEFT_SQUARE_BRACKET +
                        memList.get(i) + NAPI_RIGHT_SQUARE_BRACKET + NAPI_EQUAL + val + NAPI_COMMA;
                i++;
            }
            resContent = StringUtils.removeLastCharacter(resContent, 1);
            resContent += NAPI_NEW_LINE + NAPI_RIGHT_BRACE + NAPI_SEMICOLON + NAPI_NEW_LINE;
        }
        return resContent;
    }

    private String genNapiEnumContent(EnumObj eo) {
        String enumName = eo.getName();
        enumName = !enumName.isEmpty() ? enumName : eo.getAlias();
        List<String> memList = eo.getMemberList();
        String enumNameList = "";
        for (String memItem : memList) {
            enumNameList += NAPI_DOUBLE_QUOTATION + memItem + NAPI_DOUBLE_QUOTATION + NAPI_COMMA + NAPI_BLANK_SPACE;
        }
        enumNameList = StringUtils.removeLastCharacter(enumNameList, 2);

        String enumValueList = "";
        List<String> valueList = eo.getValueList();
        for (String valItem : valueList) {
            enumValueList += valItem + NAPI_COMMA + NAPI_BLANK_SPACE;
        }
        enumValueList = StringUtils.removeLastCharacter(enumValueList, 2);

        String enumDeclare = NAPI_CREATE_ENUM_DECLARE.replace(NAPI_ENUM_NAME, enumName);
        enumDeclare = enumDeclare.replace(NAPI_ENUM_MEM_LIST, enumNameList);
        enumDeclare = enumDeclare.replace(NAPI_ENUM_VAL_LIST, enumValueList);
        enumDeclare = enumDeclare.replace(NAPI_ENUM_ITEM_VALUE, valueList.isEmpty() ?
                NAPI_ENUM_VALUE_INDEX : NAPI_ENUM_VALUE_ITER);
        enumDeclare = enumDeclare.replace(NAPI_ENUM_CNT, Integer.toString(memList.size()));
        String resContent = "";
        resContent = enumDeclare + NAPI_EXPORT_ENUM.replace(NAPI_ENUM_NAME, enumName);
        return resContent;
    }

    /**
     * 生成输出内容
     *
     * @param eol 枚举列表
     */
    @Override
    public void genEnumList(List<EnumObj> eol) {
        System.out.println("genEnumList" + eol.toString());

        String resContent = "";
        for (EnumObj eo : eol) {
            resContent += genCppEnumContent(eo);
            resContent += genNapiEnumContent(eo);
        }

        this.enumContent = resContent;
    };

    private String setClassFunc(List<FuncObj> funcList, String content) {
        String tempResContent = content;
        for (FuncObj funcItem : funcList) {
            String retValue = funcItem.getRetValue();
            retValue = retValue.isEmpty() ? "" : ts2CppKey(retValue) + NAPI_BLANK_SPACE;
            tempResContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + retValue +
                    replaceTsToken(funcItem.getName()) + NAPI_LEFT_PARENTHESES;
            List<ParamObj> pol = funcItem.getParamList();
            for (ParamObj poItem : pol) {
                String retType = ts2CppKey(poItem.getType()).isEmpty() ?
                        NAPI_AUTO_TOKEN : ts2CppKey(poItem.getType());
                tempResContent += (poItem.getName() == null) ? retType + NAPI_COMMA + NAPI_BLANK_SPACE :
                        retType + NAPI_BLANK_SPACE + replaceTsToken(poItem.getName()) + NAPI_COMMA + NAPI_BLANK_SPACE;
            }
            if (!pol.isEmpty()) {
                tempResContent = StringUtils.removeLastCharacter(tempResContent, 2);
            }
            tempResContent += NAPI_RIGHT_PARENTHESES + NAPI_SEMICOLON;
        }
        return tempResContent;
    }

    private String genCppClassContent(ClassObj co) {
        String className = co.getName();
        className = !className.isEmpty() ? className : co.getAlias();

        String templateStr = !co.getTempList().isEmpty() ?
                NAPI_TEMPLATE_TOKEN + NAPI_BLANK_SPACE + NAPI_LEFT_ANGLE_BRACKET : "";
        for (String teStr : co.getTempList()) {
            templateStr += NAPI_TYPE_NAME_TOKEN + NAPI_BLANK_SPACE + teStr + NAPI_COMMA + NAPI_BLANK_SPACE;
        }
        templateStr = templateStr.length() > 1 ?
                StringUtils.removeLastCharacter(templateStr, 2) + NAPI_RIGHT_ANGLE_BRACKET + NAPI_BLANK_SPACE : "";

        List<String> hnList = co.getHeritageNameList();
        String htStr = hnList.size() > 0 ? NAPI_BLANK_SPACE + NAPI_COLON + NAPI_BLANK_SPACE : "";
        for (String hName : hnList) {
            htStr += NAPI_PUBLIC_TOKEN + NAPI_BLANK_SPACE + hName + NAPI_COMMA + NAPI_BLANK_SPACE;
        }
        htStr = htStr.length() > 1 ? StringUtils.removeLastCharacter(htStr, 2) : htStr;

        List<String> htempList = co.getHeritageTemplateList();
        String htempStr = htempList.size() > 0 ? NAPI_LEFT_ANGLE_BRACKET : "";
        for (String tempStr : htempList) {
            htempStr += tempStr + NAPI_COMMA + NAPI_BLANK_SPACE;
        }
        htempStr = htempList.size() > 0 ?
                StringUtils.removeLastCharacter(htempStr, 2) + NAPI_RIGHT_ANGLE_BRACKET : "";
        String resContent = "";
        resContent += NAPI_NEW_LINE + templateStr + NAPI_CLASS_TOKEN +
                NAPI_BLANK_SPACE + className + htStr + htempStr + NAPI_BLANK_SPACE + NAPI_LEFT_BRACE;
        List<ParamObj> paList = co.getParamList();
        for (ParamObj paItem : paList) {
            String paType = paItem.getType();
            String qualifyStr = paItem.getQualifier() == null || paItem.getQualifier().isEmpty() ?
                    "" : paItem.getQualifier() + NAPI_BLANK_SPACE;
            resContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + qualifyStr + ts2CppKey(paType) +
                    NAPI_BLANK_SPACE + replaceTsToken(paItem.getName());
            List<String> initVList = paItem.getvList();
            if (!initVList.isEmpty()) {
                resContent += NAPI_EQUAL + initVList.get(0) + NAPI_SEMICOLON;
            } else {
                resContent += NAPI_SEMICOLON;
            }
        }

        resContent = setClassFunc(co.getFuncList(), resContent);

        resContent += NAPI_NEW_LINE + NAPI_RIGHT_BRACE + NAPI_SEMICOLON + NAPI_NEW_LINE;
        return resContent;
    }

    private String genNapiClassContent(ClassObj co) {
        String className = co.getName();
        className = !className.isEmpty() ? className : co.getAlias();
        List<FuncObj> funcList = co.getFuncList();
        String classNameList = "";
        String classMethodContent = "";
        String classMethodProperty = "";
        for (FuncObj funcItem : funcList) {
            String classMethodStr = NAPI_CLASS_METHOD_DECLARE.replace(
                    NAPI_CLASS_NAME, className);
            classMethodStr = classMethodStr.replace(
                    NAPI_CLASS_METHOD_NAME, funcItem.getName());

            String funcName = funcItem.getName();
            funcName = funcName.isEmpty() ? funcItem.getAlias() : funcName;
            funcName = StringUtils.unCapitalFirst(funcName);

            String funcGetParamStr = "";
            String funcCallStr = "";
            String funcRetStr = "";
            int i = 0;
            for (ParamObj pa : funcItem.getParamList()) {
                funcGetParamStr += genGetParam(pa, i);
                i++;
            }
            funcCallStr += genFuncCall(funcItem);
            funcRetStr += genFuncRet(funcItem.getRetValue());
            String paCheckStr = NAPI_PARAM_CHECK.replace(NAPI_PARAM_CNT, Integer.toString(funcItem.getParamList().size()));

            classMethodStr = classMethodStr.replace(NAPI_GET_ARGUMENTS_DECLARE, paCheckStr + funcGetParamStr);
            classMethodStr = classMethodStr.replace(NAPI_CLASS_CALL_METHOD_DECLARE, funcCallStr);
            classMethodStr = classMethodStr.replace(NAPI_CLASS_RETURN_VALUE_DECLARE, funcRetStr);

            classMethodContent += classMethodStr;

            String classMethodPropertyStr = NAPI_CLASS_METHOD_PROPERTY_DECLARE.replace(
                    NAPI_CLASS_METHOD_NAME, funcItem.getName());
            classMethodPropertyStr = classMethodPropertyStr.replace(NAPI_CLASS_NAME, className);
            classMethodProperty += classMethodPropertyStr;
        }

        String classAttributeContent = "";
        String classAttributeProperty = "";
        List<ParamObj> paList = co.getParamList();
        for (ParamObj paItem : paList) {
            String getAttributeContent = NAPI_CLASS_GET_ATTRIBUTE_DECLARE.replace(
                    NAPI_CLASS_ATTRIBUTE_NAME, paItem.getName());
            getAttributeContent = getAttributeContent.replace(NAPI_CLASS_NAME, className);
            String setAttributeContent = NAPI_CLASS_SET_ATTRIBUTE_DECLARE.replace(
                    NAPI_CLASS_ATTRIBUTE_NAME, paItem.getName());
            setAttributeContent = setAttributeContent.replace(NAPI_CLASS_NAME, className);
            classAttributeContent += getAttributeContent + setAttributeContent;

            String classAttributeStr = NAPI_CLASS_ATTRIBUTE_PROPERTY_DECLARE.replace(
                    NAPI_CLASS_ATTRIBUTE_NAME, paItem.getName());
            classAttributeStr = classAttributeStr.replace(NAPI_CLASS_NAME, className);
            classAttributeProperty += classAttributeStr;
        }


        String classDeclare = NAPI_CLASS_CONSTRUCTURE.replace(NAPI_CLASS_NAME, className);
        classDeclare += NAPI_CLASS_DESTRUCTURE.replace(NAPI_CLASS_NAME, className);
        classDeclare += classMethodContent + classAttributeContent;

        String classPropertyStr = NAPI_CLASS_PROPERTY_DECLARE.replace(NAPI_CLASS_NAME, className);
        classPropertyStr = classPropertyStr.replace(NAPI_CLASS_METHOD_PROPERTY, classMethodProperty);
        classPropertyStr = classPropertyStr.replace(NAPI_CLASS_ATTRIBUTE_PROPERTY, classAttributeProperty);
        classDeclare += classPropertyStr;

        String classInitStr = NAPI_CLASS_INIT.replace(NAPI_CLASS_NAME, className);
        classDeclare += classInitStr;

        String resContent = "";
        resContent = classDeclare;
        return resContent;
    }

    /**
     * 生成输出内容
     *
     * @param col 类列表
     */
    @Override
    public void genClassList(List<ClassObj> col) {
        System.out.println("genClassList" + col.toString());

        String resContent = "";
        for (ClassObj co : col) {
            resContent += genCppClassContent(co);
            resContent += genNapiClassContent(co);
        }
        this.classContent = resContent;
    };

    private String genCppFunctionContent(FuncObj fo) {
        String funcName = fo.getName();
        funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
        List<String> tempList = fo.getTempList();
        String tempStr = tempList.isEmpty() ? "" : NAPI_TEMPLATE_TOKEN + NAPI_LEFT_ANGLE_BRACKET;
        for (String teStr : tempList) {
            tempStr += NAPI_TYPE_NAME_TOKEN + NAPI_BLANK_SPACE + teStr + NAPI_COMMA + NAPI_BLANK_SPACE;
        }
        tempStr = tempList.isEmpty() ? "" :
                StringUtils.removeLastCharacter(tempStr, 2) + NAPI_RIGHT_ANGLE_BRACKET + NAPI_BLANK_SPACE;
        List<ParamObj> paList = fo.getParamList();
        String retValue = ts2CppKey(fo.getRetValue()).isEmpty() ?
                "" : ts2CppKey(fo.getRetValue()) + NAPI_BLANK_SPACE;
        String resContent = "";
        resContent += NAPI_NEW_LINE + tempStr + retValue +
                replaceTsToken(funcName) + NAPI_LEFT_PARENTHESES;

        for (ParamObj poItem : paList) {
            String paType = ts2CppKey(poItem.getType()).isEmpty() ?
                    NAPI_AUTO_TOKEN + NAPI_BLANK_SPACE : ts2CppKey(poItem.getType()) + NAPI_BLANK_SPACE;
            String paName = poItem.getName();
            String defaultVal = poItem.getStrValue(0);
            defaultVal = defaultVal.isEmpty() ? "" : NAPI_EQUAL + defaultVal;
            resContent += !paName.isEmpty() ? paType + replaceTsToken(paName) +
                    defaultVal + NAPI_COMMA + NAPI_BLANK_SPACE :
                    paType + NAPI_COMMA + NAPI_BLANK_SPACE;
        }
        if (!paList.isEmpty()) {
            resContent = StringUtils.removeLastCharacter(resContent, 2);
        }
        resContent += NAPI_RIGHT_PARENTHESES + NAPI_SEMICOLON;
        return resContent;
    }

    private String genGetParam(ParamObj pa, int off) {
        System.out.println("genGetParam : " + pa.getType());
        if (pa.getType() == null) {
            return "";
        }
        String resContent = getArguMap.get(pa.getType());
        resContent = resContent == null ? "" : resContent;
        resContent = resContent.replace(NAPI_PARAM_CNT, Integer.toString(off));
        resContent = resContent.replace(NAPI_PARAM_TYPE, pa.getType());
        return resContent;
    };

    private String genFuncCall(FuncObj fo) {
        System.out.println("genFuncCall : " + fo.getName());
        return NAPI_FUNCTION_CALL_EXPRESSION.replace(NAPI_FUNCTION_NAME, fo.getName());
    };

    private String genFuncRet(String retType) {
        System.out.println("genFuncRet : " + retType);
        if (retType.isEmpty()) {
            return "";
        }
        String resContent = setArguMap.get(retType);
        if (resContent == null) {
            return "";
        }
        resContent = resContent.replace(NAPI_PARAM_CNT, Integer.toString(0));
        resContent = resContent.replace(NAPI_PARAM_TYPE, retType);
        return resContent;
    };

    private String genNapiFunctionContent(FuncObj fo) {
        String funcName = fo.getName();
        funcName = funcName.isEmpty() ? fo.getAlias() : funcName;
        funcName = StringUtils.unCapitalFirst(funcName);

        String funcGetParamStr = "";
        String funcCallStr = "";
        String funcRetStr = "";
        int i = 0;
        for (ParamObj pa : fo.getParamList()) {
            funcGetParamStr += genGetParam(pa, i);
            i++;
        }
        funcCallStr += genFuncCall(fo);
        funcRetStr += genFuncRet(fo.getRetValue());
        String paCheckStr = NAPI_PARAM_CHECK.replace(NAPI_PARAM_CNT, Integer.toString(fo.getParamList().size()));
        String funcDeclareStr = NAPI_FUNCTION_DECLARE.replace(NAPI_FUNCTION_NAME, funcName);
        funcDeclareStr = funcDeclareStr.replace(NAPI_GET_ARGUMENTS_DECLARE, paCheckStr + funcGetParamStr);
        funcDeclareStr = funcDeclareStr.replace(NAPI_CLASS_CALL_METHOD_DECLARE, funcCallStr);
        funcDeclareStr = funcDeclareStr.replace(NAPI_CLASS_RETURN_VALUE_DECLARE, funcRetStr);

        String funcPropertyStr = NAPI_FUNCTION_DESC_DECLARE.replace(NAPI_FUNCTION_NAME,
                funcName);
        String funcInitStr = NAPI_FUNCTION_INIT.replace(NAPI_FUNCTION_DESC_PROPERTY,
                funcPropertyStr);
        String resContent = "";
        resContent += funcDeclareStr + funcInitStr;
        return resContent;
    }

    /**
     * 生成输出内容
     *
     * @param fol 方法列表
     */
    @Override
    public void genFuncList(List<FuncObj> fol) {
        System.out.println("genFuncList : " + fol.toString());
        String resContent = "";
        for (FuncObj fo : fol) {
            resContent += genCppFunctionContent(fo);
            resContent += genNapiFunctionContent(fo);
        }
        this.funcContent = resContent;
        System.out.println("genFuncList : " + resContent);
    };

    private String genCppStructContent(StructObj so) {
        String structName = so.getName();
        structName = !structName.isEmpty() ? structName : so.getAlias();

        String templateStr = !so.getTemplateList().isEmpty() ?
                NAPI_TEMPLATE_TOKEN + NAPI_BLANK_SPACE + NAPI_LEFT_ANGLE_BRACKET : "";
        for (String teStr : so.getTemplateList()) {
            templateStr += NAPI_TYPE_NAME_TOKEN + NAPI_BLANK_SPACE + teStr + NAPI_COMMA + NAPI_BLANK_SPACE;
        }
        templateStr = templateStr.length() > 1 ?
                StringUtils.removeLastCharacter(templateStr, 2) +
                        NAPI_RIGHT_ANGLE_BRACKET + NAPI_BLANK_SPACE : "";

        List<ParamObj> paList = so.getMemberList();
        String resContent = "";
        resContent += NAPI_NEW_LINE + templateStr + NAPI_STRUCT_TOKEN +
                NAPI_BLANK_SPACE + structName + NAPI_BLANK_SPACE + NAPI_LEFT_BRACE;

        for (ParamObj paItem : paList) {
            String paType = paItem.getType().isEmpty() ? NAPI_AUTO_TOKEN : paItem.getType();
            resContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + ts2CppKey(paType) +
                    NAPI_BLANK_SPACE + paItem.getName();
            ;
            List<String> initVList = paItem.getvList();
            if (initVList.size() > 0) {
                resContent += NAPI_EQUAL + initVList.get(0) + NAPI_SEMICOLON;
            } else {
                resContent += NAPI_SEMICOLON;
            }
        }

        List<FuncObj> funcList = so.getFuncList();
        for (FuncObj funcItem : funcList) {
            String retValue = ts2CppKey(funcItem.getRetValue()).isEmpty() ? "" :
                    ts2CppKey(funcItem.getRetValue()) + NAPI_BLANK_SPACE;
            resContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + retValue +
                    replaceTsToken(funcItem.getName()) + NAPI_LEFT_PARENTHESES;
            List<ParamObj> pol = funcItem.getParamList();
            for (ParamObj poItem : pol) {
                String retType = ts2CppKey(poItem.getType()).isEmpty() ?
                        NAPI_AUTO_TOKEN : ts2CppKey(poItem.getType());
                resContent += retType + NAPI_BLANK_SPACE + replaceTsToken(poItem.getName()) +
                        NAPI_COMMA + NAPI_BLANK_SPACE;
            }
            resContent = !pol.isEmpty() ? StringUtils.removeLastCharacter(resContent, 2) : resContent;
            resContent += NAPI_RIGHT_PARENTHESES + NAPI_SEMICOLON;
        }

        resContent = StringUtils.removeLastSpace(resContent);
        resContent += NAPI_NEW_LINE + NAPI_RIGHT_BRACE + NAPI_SEMICOLON + NAPI_NEW_LINE;
        return resContent;
    }

    private String genNapiStructContent(StructObj so) {
        String structName = so.getName();
        structName = !structName.isEmpty() ? structName : so.getAlias();
        List<FuncObj> funcList = so.getFuncList();
        String structNameList = "";
        String structMethodContent = "";
        String structMethodProperty = "";
        for (FuncObj funcItem : funcList) {
            String structMethodStr = NAPI_CLASS_METHOD_DECLARE.replace(
                    NAPI_CLASS_NAME, structName);
            structMethodStr = structMethodStr.replace(
                    NAPI_CLASS_METHOD_NAME, funcItem.getName());

            String funcName = funcItem.getName();
            funcName = funcName.isEmpty() ? funcItem.getAlias() : funcName;
            funcName = StringUtils.unCapitalFirst(funcName);

            String funcGetParamStr = "";
            String funcCallStr = "";
            String funcRetStr = "";
            int i = 0;
            for (ParamObj pa : funcItem.getParamList()) {
                funcGetParamStr += genGetParam(pa, i);
                i++;
            }
            funcCallStr += genFuncCall(funcItem);
            funcRetStr += genFuncRet(funcItem.getRetValue());
            String paCheckStr = NAPI_PARAM_CHECK.replace(NAPI_PARAM_CNT,
                    Integer.toString(funcItem.getParamList().size()));
            structMethodStr = structMethodStr.replace(NAPI_GET_ARGUMENTS_DECLARE, paCheckStr + funcGetParamStr);
            structMethodStr = structMethodStr.replace(NAPI_CLASS_CALL_METHOD_DECLARE, funcCallStr);
            structMethodStr = structMethodStr.replace(NAPI_CLASS_RETURN_VALUE_DECLARE, funcRetStr);

            structMethodContent += structMethodStr;

            String structMethodPropertyStr = NAPI_CLASS_METHOD_PROPERTY_DECLARE.replace(
                    NAPI_CLASS_METHOD_NAME, funcItem.getName());
            structMethodPropertyStr = structMethodPropertyStr.replace(NAPI_CLASS_NAME, structName);
            structMethodProperty += structMethodPropertyStr;
        }

        String classAttributeContent = "";
        String classAttributeProperty = "";
        List<ParamObj> paList = so.getMemberList();
        for (ParamObj paItem : paList) {
            String getAttributeContent = NAPI_CLASS_GET_ATTRIBUTE_DECLARE.replace(
                    NAPI_CLASS_ATTRIBUTE_NAME, paItem.getName());
            getAttributeContent = getAttributeContent.replace(NAPI_CLASS_NAME, structName);
            String setAttributeContent = NAPI_CLASS_SET_ATTRIBUTE_DECLARE.replace(
                    NAPI_CLASS_ATTRIBUTE_NAME, paItem.getName());
            setAttributeContent = setAttributeContent.replace(NAPI_CLASS_NAME, structName);
            classAttributeContent += getAttributeContent + setAttributeContent;

            String classAttributeStr = NAPI_CLASS_ATTRIBUTE_PROPERTY_DECLARE.replace(
                    NAPI_CLASS_ATTRIBUTE_NAME, paItem.getName());
            classAttributeStr = classAttributeStr.replace(NAPI_CLASS_NAME, structName);
            classAttributeProperty += classAttributeStr;
        }

        String classDeclare = NAPI_CLASS_CONSTRUCTURE.replace(NAPI_CLASS_NAME, structName);
        classDeclare += NAPI_CLASS_DESTRUCTURE.replace(NAPI_CLASS_NAME, structName);
        classDeclare += structMethodContent + classAttributeContent;

        String classPropertyStr = NAPI_CLASS_PROPERTY_DECLARE.replace(NAPI_CLASS_NAME, structName);
        classPropertyStr = classPropertyStr.replace(NAPI_CLASS_METHOD_PROPERTY, structMethodProperty);
        classPropertyStr = classPropertyStr.replace(NAPI_CLASS_ATTRIBUTE_PROPERTY, classAttributeProperty);
        classDeclare += classPropertyStr;

        String classInitStr = NAPI_CLASS_INIT.replace(NAPI_CLASS_NAME, structName);
        classDeclare += classInitStr;

        String resContent = "";
        resContent = classDeclare;
        return resContent;
    }

    /**
     * 生成输出内容
     *
     * @param sol 结构体列表
     */
    @Override
    public void genStructList(List<StructObj> sol) {
        System.out.println("genStructList" + sol.toString());

        String resContent = "";
        for (StructObj so : sol) {
            resContent += genCppStructContent(so);
            resContent += genNapiStructContent(so);
        }
        this.structContent = resContent;
    };

    /**
     * 生成输出内容
     *
     * @param tol 类型列表
     */
    @Override
    public void genTypeList(List<TypeObj> tol) {
        System.out.println("genTypeList : " + tol.toString());
    };

    /**
     * 生成输出内容
     *
     * @param uol 联合体列表
     */
    @Override
    public void genUnionList(List<UnionObj> uol) {
        System.out.println("genUnionList : " + uol.toString());

        String resContent = "";
        for (UnionObj uo : uol) {
            String unionName = uo.getName();
            unionName = !unionName.isEmpty() ? unionName : uo.getAlias();

            String templateStr = !uo.getTemplateList().isEmpty() ?
                    NAPI_TEMPLATE_TOKEN + NAPI_BLANK_SPACE + NAPI_LEFT_ANGLE_BRACKET : "";
            for (String teStr : uo.getTemplateList()) {
                templateStr += NAPI_TYPE_NAME_TOKEN + NAPI_BLANK_SPACE + teStr + NAPI_COMMA + NAPI_BLANK_SPACE;
            }
            templateStr = templateStr.length() > 1 ?
                    StringUtils.removeLastCharacter(templateStr, 2) +
                    NAPI_RIGHT_ANGLE_BRACKET + NAPI_BLANK_SPACE : "";

            resContent += NAPI_NEW_LINE + templateStr + NAPI_UNION_TOKEN +
                    NAPI_BLANK_SPACE + unionName + NAPI_LEFT_BRACE;

            List<ParamObj> paList = uo.getMemList();
            for (ParamObj paItem : paList) {
                String paType = paItem.getType();
                String paName = paItem.getName();
                resContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + ts2CppKey(paType)
                        + NAPI_BLANK_SPACE + paName + NAPI_SEMICOLON;
            }
            resContent += NAPI_NEW_LINE + NAPI_RIGHT_BRACE;
            resContent += NAPI_SEMICOLON + NAPI_NEW_LINE;
        }
        this.unionContent = resContent;
    };

    private String genVarArrayList(String tmpContent, String paName, List<ParamObj> paList) {
        String resContent = tmpContent;
        resContent += NAPI_NEW_LINE + NAPI_STRUCT_TOKEN + NAPI_BLANK_SPACE + paName +
                NAPI_STRUCT_SUFFIX + NAPI_BLANK_SPACE + NAPI_LEFT_BRACE;
        List<ParamObj> paramList = paList.get(0).getPaList();
        for (ParamObj paItem : paramList) {
            String paStr = paItem.getName();
            String paVal = paItem.getStrValue(0);
            String typeStr = StringUtils.isAllDigits(paVal) ?
                    NAPI_NUMBER_TOKEN : NAPI_STD_STRING;
            typeStr = StringUtils.isBoolean(paVal) ? NAPI_BOOLEAN_TOKEN : typeStr;
            resContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + typeStr + NAPI_BLANK_SPACE + paStr + NAPI_SEMICOLON;
        }
        resContent += NAPI_NEW_LINE + NAPI_RIGHT_BRACE + NAPI_SEMICOLON + NAPI_NEW_LINE;

        resContent += NAPI_NEW_LINE + NAPI_CONST_TOKEN + NAPI_BLANK_SPACE + NAPI_STD_VECTOR +
                NAPI_LEFT_ANGLE_BRACKET + paName + NAPI_STRUCT_SUFFIX + NAPI_RIGHT_ANGLE_BRACKET +
                NAPI_BLANK_SPACE + paName + NAPI_EQUAL + NAPI_LEFT_BRACE;
        for (ParamObj paramListItem : paList) {
            List<ParamObj> subParamList = paramListItem.getPaList();
            resContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + NAPI_LEFT_BRACE;
            for (ParamObj paItem : subParamList) {
                String paVal = paItem.getStrValue(0);
                resContent += paVal + NAPI_COMMA + NAPI_BLANK_SPACE;
            }
            resContent = StringUtils.removeLastCharacter(resContent, 2);
            resContent += NAPI_RIGHT_BRACE + NAPI_COMMA;
        }
        resContent += NAPI_NEW_LINE + NAPI_RIGHT_BRACE + NAPI_SEMICOLON + NAPI_NEW_LINE;
        return resContent;
    };

    private String genCppValContent(ParamObj po) {
        String paName = po.getName();
        String paType = ts2CppKey(po.getType()).isEmpty() ? NAPI_AUTO_TOKEN : ts2CppKey(po.getType());
        String paValue = po.getStrValue(0);
        List<ParamObj> paList = po.getPaList();
        String resContent = "";
        if (paList.isEmpty()) {
            resContent += NAPI_NEW_LINE + NAPI_EXTENDS_TOKEN + NAPI_BLANK_SPACE + NAPI_CONST_TOKEN +
                    NAPI_BLANK_SPACE + paType + NAPI_BLANK_SPACE + paName + NAPI_EQUAL + paValue;

            resContent += NAPI_SEMICOLON + NAPI_NEW_LINE;
        } else if (paList.get(0).getPaList().isEmpty()) {
            String valType = StringUtils.isAllDigits(paList.get(0).getStrValue(0)) ?
                    NAPI_NUMBER_TOKEN : NAPI_STD_STRING;
            resContent += NAPI_NEW_LINE + NAPI_EXTENDS_TOKEN + NAPI_BLANK_SPACE + NAPI_CONST_TOKEN +
                    NAPI_BLANK_SPACE + NAPI_STD_MAP + NAPI_LEFT_ANGLE_BRACKET + NAPI_STD_STRING +
                    NAPI_COMMA + NAPI_BLANK_SPACE + valType + NAPI_RIGHT_BRACE + NAPI_BLANK_SPACE +
                    paName + NAPI_EQUAL + NAPI_LEFT_BRACE;
            for (ParamObj paItem : paList) {
                String pName = paItem.getName();
                String pVal = paItem.getStrValue(0);
                resContent += NAPI_NEW_LINE + NAPI_TAB_SPACE + NAPI_LEFT_BRACE + NAPI_DOUBLE_QUOTATION +
                        pName + NAPI_DOUBLE_QUOTATION + NAPI_COMMA + NAPI_BLANK_SPACE + pVal +
                        NAPI_RIGHT_BRACE + NAPI_COMMA;
            }
            resContent = StringUtils.removeLastCharacter(resContent, 1);
            resContent += NAPI_NEW_LINE + NAPI_RIGHT_BRACE + NAPI_SEMICOLON + NAPI_NEW_LINE;
        } else if (!(paList.get(0).getPaList().isEmpty())) {
            resContent = genVarArrayList(resContent, paName, paList);
        }
        return resContent;
    };

    private String genNapiValContent(ParamObj po) {
        String paramAttributeContent = "";
        String paramAttributeProperty = "";
        String structName = "GNAPI";
        {
            String getAttributeContent = NAPI_VAL_GET_DECLARE.replace(
                    NAPI_CLASS_ATTRIBUTE_NAME, po.getName());
            getAttributeContent = getAttributeContent.replace(NAPI_CLASS_NAME, structName);
            String setAttributeContent = NAPI_VAL_SET_DECLARE.replace(
                    NAPI_CLASS_ATTRIBUTE_NAME, po.getName());
            setAttributeContent = setAttributeContent.replace(NAPI_CLASS_NAME, structName);
            paramAttributeContent += getAttributeContent + setAttributeContent;

            String classAttributeStr = NAPI_CLASS_ATTRIBUTE_PROPERTY_DECLARE.replace(
                    NAPI_CLASS_ATTRIBUTE_NAME, po.getName());
            classAttributeStr = classAttributeStr.replace(NAPI_CLASS_NAME, structName);
            paramAttributeProperty += classAttributeStr;
        }

        String classDeclare = "";
        classDeclare += paramAttributeContent;

        String classPropertyStr = NAPI_CLASS_PROPERTY_DECLARE.replace(NAPI_CLASS_NAME, structName);
        classPropertyStr = classPropertyStr.replace(NAPI_CLASS_ATTRIBUTE_PROPERTY, paramAttributeProperty);
        classPropertyStr = classPropertyStr.replace(NAPI_CLASS_METHOD_PROPERTY, "");
        classDeclare += classPropertyStr;

        return classDeclare;
    }

    /**
     * 生成输出内容
     *
     * @param pol 常量列表
     */
    @Override
    public void genVarList(List<ParamObj> pol) {
        System.out.println("genVarList : " + pol.toString());

        String resContent = "";
        for (ParamObj po : pol) {
            resContent += genCppValContent(po);
            resContent += genNapiValContent(po);
        }
        this.constContent = resContent;
        System.out.println("genVarList : " + resContent);
    }
}
