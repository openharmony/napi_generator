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
class GenNapiCppFileTest {
    private String enumContTest3 = "\nenum Colors {\n" +
            "\tRed = RED,\n" +
            "\tGreen = GREEN,\n" +
            "\tBlue = BLUE,\n" +
            "};\n" +
            "\n" +
            "char* colors_STR[] = {\n" +
            "\t[Red] = \"RED\",\n" +
            "\t[Green] = \"GREEN\",\n" +
            "\t[Blue] = \"BLUE\"\n" +
            "};\n" +
            "\n" +
            "// 创建枚举对象\n" +
            "napi_value CreateColorsEnum(napi_env env) {\n" +
            "\tnapi_value enum_obj;\n" +
            "\tnapi_create_object(env, &enum_obj);\n" +
            "\n" +
            "\t// 添加枚举成员\n" +
            "\tconst char* members[] = {\"Red\", \"Green\", \"Blue\"};\n" +
            "\tconst int values[] = {\"RED\", \"GREEN\", \"BLUE\"};\n" +
            "\tfor (int32_t i = 0; i < 3; ++i) {\n" +
            "\t\tnapi_value value;\n" +
            "\t\tnapi_create_int32(env, value[i], &value);\n" +
            "\t\tnapi_set_named_property(env, enum_obj, members[i], value);\n" +
            "\t}\n" +
            "\n" +
            "\treturn enum_obj;\n" +
            "}\n" +
            "\t// 创建并绑定枚举\n" +
            "\tnapi_value Colors_enum = CreateColorsEnum(env);\n" +
            "\tnapi_set_named_property(env, exports, \"Colors\", Colors_enum);\n";

    private String classContTest1 = "\nclass TestClass {\n" +
            "\tstd::string name;\n" +
            "\tint age;\n" +
            "\tint add(int a, int b);\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorTestClass(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == " +
            "napi_ok && thisVar != nullptr) {\n" +
            "\t\tTestClass *reference = new TestClass();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorTestClass, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorTestClass(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<TestClass *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value addTestClass(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Getname(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setname(napi_env env, napi_callback_info info)\n" +
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
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->name = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value Getage(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setage(napi_env env, napi_callback_info info)\n" +
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
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->age = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor TestClassProps[] = {\n" +
            "\t{add, nullptr, addTestClass, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "\t{name, nullptr, nullptr, GetnameTestClass, SetnameTestClass, nullptr, napi_default, nullptr},\n" +
            "\t{age, nullptr, nullptr, GetageTestClass, SetageTestClass, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value TestClassIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"TestClass\", NAPI_AUTO_LENGTH, ConstructorTestClass, nullptr, " +
            "sizeof(TestClassProps) / sizeof(TestClassProps[0]), TestClassProps, &TestClassIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"TestClass\", TestClassIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String classContTest2 = "\nclass TestClass : public IPerson {\n" +
            "\tpublic std::string name;\n" +
            "\tprivate int age;\n" +
            "\tprotected std::string no;\n" +
            "\treadonly std::string addr;\n" +
            "\tconstructor();\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorTestClass(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == napi_ok && " +
            "thisVar != nullptr) {\n" +
            "\t\tTestClass *reference = new TestClass();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorTestClass, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorTestClass(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<TestClass *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value constructorTestClass(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Getname(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setname(napi_env env, napi_callback_info info)\n" +
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
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->name = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value Getage(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setage(napi_env env, napi_callback_info info)\n" +
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
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->age = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value Getno(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setno(napi_env env, napi_callback_info info)\n" +
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
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->no = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value Getaddr(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setaddr(napi_env env, napi_callback_info info)\n" +
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
            "\tTestClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->addr = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor TestClassProps[] = {\n" +
            "\t{constructor, nullptr, constructorTestClass, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "\t{name, nullptr, nullptr, GetnameTestClass, SetnameTestClass, nullptr, napi_default, nullptr},\n" +
            "\t{age, nullptr, nullptr, GetageTestClass, SetageTestClass, nullptr, napi_default, nullptr},\n" +
            "\t{no, nullptr, nullptr, GetnoTestClass, SetnoTestClass, nullptr, napi_default, nullptr},\n" +
            "\t{addr, nullptr, nullptr, GetaddrTestClass, SetaddrTestClass, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value TestClassIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"TestClass\", NAPI_AUTO_LENGTH, ConstructorTestClass, " +
            "nullptr, sizeof(TestClassProps) / sizeof(TestClassProps[0]), TestClassProps, " +
            "&TestClassIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"TestClass\", TestClassIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String classContTest3 = "\nclass Employee : public Person {\n" +
            "\tint empCode;\n" +
            "\tauto currentUser;\n" +
            "\tstatic int pi = 3.14;\n" +
            "\tconstructor();\n" +
            "\tvoid displayName();\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorEmployee(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) ==" +
            " napi_ok && thisVar != nullptr) {\n" +
            "\t\tEmployee *reference = new Employee();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorEmployee, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorEmployee(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<Employee *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value constructorEmployee(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tEmployee *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value displayNameEmployee(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tEmployee *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value GetempCode(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tEmployee *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetempCode(napi_env env, napi_callback_info info)\n" +
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
            "\tEmployee *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->empCode = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value GetcurrentUser(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tEmployee *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value SetcurrentUser(napi_env env, napi_callback_info info)\n" +
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
            "\tEmployee *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->currentUser = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value Getpi(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tEmployee *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setpi(napi_env env, napi_callback_info info)\n" +
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
            "\tEmployee *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->pi = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor EmployeeProps[] = {\n" +
            "\t{constructor, nullptr, constructorEmployee, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "\t{displayName, nullptr, displayNameEmployee, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "\t{empCode, nullptr, nullptr, GetempCodeEmployee, SetempCodeEmployee, nullptr, napi_default, nullptr},\n" +
            "\t{currentUser, nullptr, nullptr, GetcurrentUserEmployee, SetcurrentUserEmployee, nullptr, " +
            "napi_default, nullptr},\n" +
            "\t{pi, nullptr, nullptr, GetpiEmployee, SetpiEmployee, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value EmployeeIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"Employee\", NAPI_AUTO_LENGTH, ConstructorEmployee, nullptr, " +
            "sizeof(EmployeeProps) / sizeof(EmployeeProps[0]), EmployeeProps, &EmployeeIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"Employee\", EmployeeIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String classContTest4 = "\nclass myClass {\n" +
            "\tauto foo();\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructormyClass(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == " +
            "napi_ok && thisVar != nullptr) {\n" +
            "\t\tmyClass *reference = new myClass();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructormyClass, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructormyClass(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<myClass *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value foomyClass(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tmyClass *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor myClassProps[] = {\n" +
            "\t{foo, nullptr, foomyClass, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value myClassIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"myClass\", NAPI_AUTO_LENGTH, ConstructormyClass, nullptr, " +
            "sizeof(myClassProps) / sizeof(myClassProps[0]), myClassProps, &myClassIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"myClass\", myClassIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String classContTest5 = "\ntemplate <typename T, typename U> class KeyValuePair {\n" +
            "\tprivate T key;\n" +
            "\tprivate U val;\n" +
            "\tvoid setKeyValue(T key, U val);\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorKeyValuePair(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == napi_ok && thisVar != nullptr) {\n" +
            "\t\tKeyValuePair *reference = new KeyValuePair();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorKeyValuePair, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorKeyValuePair(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<KeyValuePair *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value setKeyValueKeyValuePair(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tKeyValuePair *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Getkey(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tKeyValuePair *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setkey(napi_env env, napi_callback_info info)\n" +
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
            "\tKeyValuePair *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->key = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_value Getval(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tKeyValuePair *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\n" +
            "\t// 创建返回对象\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_value Setval(napi_env env, napi_callback_info info)\n" +
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
            "\tKeyValuePair *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\tobj->val = msg;\n" +
            "\treturn nullptr;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor KeyValuePairProps[] = {\n" +
            "\t{setKeyValue, nullptr, setKeyValueKeyValuePair, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "\t{key, nullptr, nullptr, GetkeyKeyValuePair, SetkeyKeyValuePair, nullptr, napi_default, nullptr},\n" +
            "\t{val, nullptr, nullptr, GetvalKeyValuePair, SetvalKeyValuePair, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value KeyValuePairIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"KeyValuePair\", NAPI_AUTO_LENGTH, ConstructorKeyValuePair, nullptr, sizeof(KeyValuePairProps) / sizeof(KeyValuePairProps[0]), KeyValuePairProps, &KeyValuePairIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"KeyValuePair\", KeyValuePairIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String classContTest6 =
            "\ntemplate <typename T, typename U> class kvProcessor : public IKeyValueProcessor<T, U> {\n" +
            "\tvoid process(T key, U val);\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorkvProcessor(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == napi_ok && " +
            "thisVar != nullptr) {\n" +
            "\t\tkvProcessor *reference = new kvProcessor();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorkvProcessor, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorkvProcessor(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<kvProcessor *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value processkvProcessor(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tkvProcessor *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor kvProcessorProps[] = {\n" +
            "\t{process, nullptr, processkvProcessor, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value kvProcessorIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"kvProcessor\", NAPI_AUTO_LENGTH, ConstructorkvProcessor, nullptr, " +
            "sizeof(kvProcessorProps) / sizeof(kvProcessorProps[0]), " +
            "kvProcessorProps, &kvProcessorIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"kvProcessor\", kvProcessorIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    private String classContTest7 = "\nclass Shape {\n" +
            "\tvoid process(auto key, auto val);\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorShape(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == " +
            "napi_ok && thisVar != nullptr) {\n" +
            "\t\tShape *reference = new Shape();\n" +
            "\t\tif (napi_wrap(env, thisVar,\n" +
            "\t\t\treinterpret_cast<void *>(reference), DestructorShape, nullptr, nullptr) == napi_ok) {\n" +
            "\t\t\treturn thisVar;\n" +
            "\t\t}\n" +
            "\t\treturn thisVar;\n" +
            "\t}\n" +
            "\treturn undefineVar;\n" +
            "};\n" +
            "\n" +
            "void DestructorShape(napi_env env, void *nativeObject, void *finalize)\n" +
            "{\n" +
            "\tdelete reinterpret_cast<Shape *>(nativeObject);\n" +
            "};\n" +
            "\n" +
            "napi_value processShape(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value result = nullptr;\n" +
            "\tnapi_value jsthis;\n" +
            "\tnapi_status status;\n" +
            "\tnapi_get_undefined(env, &result);\n" +
            "\t// 获取napi对象\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &jsthis, nullptr) != napi_ok) {\n" +
            "\t\treturn result;\n" +
            "\t}\n" +
            "\tShape *obj;\n" +
            "\tstatus = napi_unwrap(env, jsthis, (void **)&obj);\n" +
            "\t\n" +
            "\t// 获取参数\n" +
            "\tNAPI_GET_ARGUMENTS_DECLARE\n" +
            "\t// 调用原始类方法\n" +
            "\tNAPI_CLASS_CALL_METHOD_DECLARE\n" +
            "\t// 创建返回参数\n" +
            "\tNAPI_CLASS_RETURN_VALUE_DECLARE\n" +
            "\t}\n" +
            "\treturn result;\n" +
            "};\n" +
            "\n" +
            "napi_property_descriptor ShapeProps[] = {\n" +
            "\t{process, nullptr, processShape, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value ShapeIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"Shape\", NAPI_AUTO_LENGTH, ConstructorShape, nullptr, " +
            "sizeof(ShapeProps) / sizeof(ShapeProps[0]), ShapeProps, &ShapeIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"Shape\", ShapeIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    @Test
    void getInterfaceContent() {
    }

    @Test
    void getEnumContent1() {
        EnumObj eo = new EnumObj();
        eo.setName("TestEnum");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("ONE");
        ml.add("TWO");
        eo.setMemberList(ml);
        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        ParseObj po = new ParseObj();
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenNapiCppFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum TestEnum {\n" +
                    "\tONE,\n" +
                    "\tTWO,\n" +
                    "};\n" +
                    "\n" +
                    "// 创建枚举对象\n" +
                    "napi_value CreateTestEnumEnum(napi_env env) {\n" +
                    "\tnapi_value enum_obj;\n" +
                    "\tnapi_create_object(env, &enum_obj);\n" +
                    "\n" +
                    "\t// 添加枚举成员\n" +
                    "\tconst char* members[] = {\"ONE\", \"TWO\"};\n" +
                    "\tconst int values[] = {};\n" +
                    "\tfor (int32_t i = 0; i < 2; ++i) {\n" +
                    "\t\tnapi_value value;\n" +
                    "\t\tnapi_create_int32(env, i, &value);\n" +
                    "\t\tnapi_set_named_property(env, enum_obj, members[i], value);\n" +
                    "\t}\n" +
                    "\n" +
                    "\treturn enum_obj;\n" +
                    "}\n" +
                    "\t// 创建并绑定枚举\n" +
                    "\tnapi_value TestEnum_enum = CreateTestEnumEnum(env);\n" +
                    "\tnapi_set_named_property(env, exports, \"TestEnum\", TestEnum_enum);\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void getEnumContent2() {
        EnumObj eo = new EnumObj();
        eo.setName("Colors");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("Red");
        ml.add("Green");
        ml.add("Blue");
        eo.setMemberList(ml);
        List<String> vl = new CopyOnWriteArrayList<>();
        vl.add("RED");
        vl.add("GREEN");
        vl.add("BLUE");
        eo.setValueList(vl);
        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        ParseObj po = new ParseObj();
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenNapiCppFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum Colors {\n" +
                    "\tRed = RED,\n" +
                    "\tGreen = GREEN,\n" +
                    "\tBlue = BLUE,\n" +
                    "};\n" +
                    "\n" +
                    "// 创建枚举对象\n" +
                    "napi_value CreateColorsEnum(napi_env env) {\n" +
                    "\tnapi_value enum_obj;\n" +
                    "\tnapi_create_object(env, &enum_obj);\n" +
                    "\n" +
                    "\t// 添加枚举成员\n" +
                    "\tconst char* members[] = {\"Red\", \"Green\", \"Blue\"};\n" +
                    "\tconst int values[] = {RED, GREEN, BLUE};\n" +
                    "\tfor (int32_t i = 0; i < 3; ++i) {\n" +
                    "\t\tnapi_value value;\n" +
                    "\t\tnapi_create_int32(env, values[i], &value);\n" +
                    "\t\tnapi_set_named_property(env, enum_obj, members[i], value);\n" +
                    "\t}\n" +
                    "\n" +
                    "\treturn enum_obj;\n" +
                    "}\n" +
                    "\t// 创建并绑定枚举\n" +
                    "\tnapi_value Colors_enum = CreateColorsEnum(env);\n" +
                    "\tnapi_set_named_property(env, exports, \"Colors\", Colors_enum);\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void getEnumContent3() {
        EnumObj eo = new EnumObj();
        eo.setName("Colors");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("Red");
        ml.add("Green");
        ml.add("Blue");
        eo.setMemberList(ml);
        List<String> vl = new CopyOnWriteArrayList<>();
        vl.add("\"RED\"");
        vl.add("\"GREEN\"");
        vl.add("\"BLUE\"");
        eo.setValueList(vl);
        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        ParseObj po = new ParseObj();
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenNapiCppFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = enumContTest3;
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void getClassContent1() {
        ClassObj co = new ClassObj();
        co.setName("TestClass");

        co.addParam("name", "string");
        co.addParam("age", "number");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("number");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("number");
        poList.add(poItem2);

        co.addFunc("add", "number", poList);

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenNapiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = classContTest1;
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent2() {
        ClassObj co = new ClassObj();
        co.setName("TestClass");
        List<String> hList = new CopyOnWriteArrayList<>();
        hList.add("IPerson");
        co.setHeritageNameList(hList);

        ParamObj pa = new ParamObj();
        pa.setName("name");
        pa.setType("string");
        pa.setQualifier("public");
        co.addParam(pa);
        ParamObj pa1 = new ParamObj();
        pa1.setName("age");
        pa1.setType("number");
        pa1.setQualifier("private");
        co.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("no");
        pa2.setType("string");
        pa2.setQualifier("protected");
        co.addParam(pa2);
        ParamObj pa3 = new ParamObj();
        pa3.setName("addr");
        pa3.setType("string");
        pa3.setQualifier("readonly");
        co.addParam(pa3);

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        co.addFunc("constructor", "", poList);

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenNapiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = classContTest2;
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent3() {
        ClassObj co = new ClassObj();
        co.setName("Employee");
        List<String> hList = new CopyOnWriteArrayList<>();
        hList.add("Person");
        co.setHeritageNameList(hList);

        ParamObj pa = new ParamObj();
        pa.setName("empCode");
        pa.setType("number");
        co.addParam(pa);

        ParamObj pa1 = new ParamObj();
        pa1.setName("currentUser");
        pa1.setType("any");
        co.addParam(pa1);

        ParamObj pa2 = new ParamObj();
        pa2.setName("pi");
        pa2.setType("number");
        pa2.setQualifier("static");
        pa2.setStrValue("3.14");
        co.addParam(pa2);

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj p1 = new ParamObj();
        p1.setName("empcode");
        p1.setType("number");
        ParamObj p2 = new ParamObj();
        p2.setName("name");
        p2.setType("string");
        co.addFunc("constructor", "", poList);
        List<ParamObj> poList1 = new CopyOnWriteArrayList<>();
        co.addFunc("displayName", "void", poList1);

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenNapiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = classContTest3;
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent4() {
        ClassObj co = new ClassObj();
        co.setName("myClass");

        List<ParamObj> poList1 = new CopyOnWriteArrayList<>();
        FuncObj fo = new FuncObj();
        fo.setName("foo");
        fo.setRetValue("Promise<any>");
        fo.setAccessor("public");
        fo.setType("async");
        fo.setParamList(poList1);
        co.addFunc(fo);
        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenNapiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = classContTest4;
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent5() {
        ClassObj co = new ClassObj();
        co.setName("KeyValuePair");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        ParamObj pa = new ParamObj();
        pa.setName("key");
        pa.setType("T");
        pa.setQualifier("private");
        pol.add(pa);
        ParamObj po1 = new ParamObj();
        po1.setName("val");
        po1.setType("U");
        po1.setQualifier("private");
        pol.add(po1);
        co.setParamList(pol);

        List<String> tmpList = new CopyOnWriteArrayList<>();
        tmpList.add("T");
        tmpList.add("U");
        co.setTempList(tmpList);

        List<ParamObj> poList1 = new CopyOnWriteArrayList<>();
        FuncObj fo = new FuncObj();
        fo.setName("setKeyValue");
        fo.setRetValue("void");
        fo.addParam("key", "T");
        fo.addParam("val", "U");
        co.addFunc(fo);
        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenNapiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = classContTest5;
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent6() {
        ClassObj co = new ClassObj();
        co.setName("kvProcessor");
        List<String> tmpList = new CopyOnWriteArrayList<>();
        tmpList.add("T");
        tmpList.add("U");
        co.setTempList(tmpList);
        List<String> htList = new CopyOnWriteArrayList<>();
        htList.add("implements");
        co.setHeritageTypeList(htList);
        List<String> hnList = new CopyOnWriteArrayList<>();
        hnList.add("IKeyValueProcessor");
        co.setHeritageNameList(hnList);
        List<String> htempList = new CopyOnWriteArrayList<>();
        htempList.add("T");
        htempList.add("U");
        co.setHeritageTemplateList(htempList);

        List<ParamObj> poList1 = new CopyOnWriteArrayList<>();
        FuncObj fo = new FuncObj();
        fo.setName("process");
        fo.setRetValue("void");
        fo.addParam("key", "T");
        fo.addParam("val", "U");
        co.addFunc(fo);
        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenNapiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = classContTest6;
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent7() {
        ClassObj co = new ClassObj();
        co.setName("Shape");

        FuncObj fo = new FuncObj();
        fo.setName("process");
        fo.setRetValue("void");
        fo.addParam("key", "");
        fo.addParam("val", "");
        co.addFunc(fo);
        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenNapiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = classContTest7;
            assertEquals(expect, classContent);
        }
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
            String expect = "\nvoid TestFunc(char* name, int age);";
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
            String expect = "\nchar* ToCapital(char* str, int length = 0);";
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
            String expect = "\nchar* Nemw(char* str = \"joke\", int length = 0);";
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
            String expect = "\nchar* Nemw(auto str, auto length);";
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
            String expect = "\nNemw(auto str, auto length);";
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
            String expect = "\ntemplate<typename T> T* getArray(T* items);";
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
            String expect = "\ntemplate<typename T, typename U> void displayType(T id, U name);";
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
            String expect = "\nstruct TestStruct {\n" +
                    "\tchar* name;\n" +
                    "\tbool age;\n" +
                    "\tint add(bool a, bool b);\n" +
                    "};\n";
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
            String expect = "\ntemplate <typename T, typename U> struct TestStruct {\n" +
                    "\tT name;\n" +
                    "\tU age;\n" +
                    "\tint add(T a, U b);\n" +
                    "};\n";
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
            String expect = "\nstruct TestStruct {\n" +
                    "\tauto name;\n" +
                    "\tauto age;\n" +
                    "\tadd(auto a, auto b);\n" +
                    "};\n";
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
            String expect = "\nstruct TestStruct {\n" +
                    "};\n";
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
                    "\tchar* name;\n" +
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
            String expect = "\nextends const auto employeeName = \"John\";\n";
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
            String expect = "\nextends const char* employeeName = \"John\";\n";
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
            String expect = "\nextends const int num1 = 1;\n";
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
            String expect = "\nextends const std::map<std::string, number} playerCodes = {\n" +
                    "\t{\"player1\", 9},\n" +
                    "\t{\"player2\", 10}\n" +
                    "};\n";
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
            String expect = "\nextends const auto playerCodes.player2 = 11;\n";
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
            String expect = "\nstruct ROUTESST {\n" +
                    "\tstd::string path;\n" +
                    "\tboolean allowAnonymous;\n" +
                    "};\n" +
                    "\n" +
                    "const std::vector<ROUTESST> ROUTES = {\n" +
                    "\t{'/dashboard', false},\n" +
                    "\t{'/deals', true},\n" +
                    "};\n";
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
            String expect = "\nextends const int TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

}