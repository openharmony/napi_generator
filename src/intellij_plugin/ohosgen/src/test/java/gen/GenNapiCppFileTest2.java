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

import java.io.File;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static utils.FileUtils.readText;

/**
 * <h3>类名：该类用于xxx</h3>
 * description
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
class GenNapiCppFileTest2 {
    private String classContTest1 = "\nclass TestClass {\n" +
            "\tstd::string name;\n" +
            "\tint age;\n" +
            "\tint add(int a, int b);\n" +
            "\tint delete(int);\n" +
            "};\n" +
            "\n" +
            "napi_value ConstructorTestClass(napi_env env, napi_callback_info info)\n" +
            "{\n" +
            "\tnapi_value undefineVar = nullptr, thisVar = nullptr;\n" +
            "\tnapi_get_undefined(env, &undefineVar);\n" +
            "\n" +
            "\tif (napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr) == napi_ok && thisVar != nullptr) {\n" +
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
            "napi_value deleteTestClass(napi_env env, napi_callback_info info)\n" +
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
            "\t{delete, nullptr, deleteTestClass, nullptr, nullptr, nullptr, napi_default, nullptr},\n" +
            "\t{name, nullptr, nullptr, GetnameTestClass, SetnameTestClass, nullptr, napi_default, nullptr},\n" +
            "\t{age, nullptr, nullptr, GetageTestClass, SetageTestClass, nullptr, napi_default, nullptr},\n" +
            "};\n" +
            "\n" +
            "napi_value TestClassIns = nullptr;\n" +
            "\tif (napi_define_class(env, \"TestClass\", NAPI_AUTO_LENGTH, ConstructorTestClass, nullptr, sizeof(TestClassProps) / sizeof(TestClassProps[0]), TestClassProps, &TestClassIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}\n" +
            "\tif (napi_set_named_property(env, exports, \"TestClass\", TestClassIns) != napi_ok) {\n" +
            "\t\treturn nullptr;\n" +
            "\t}";

    @Test
    void getInterfaceContent() {
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
            String expect = "\nextends const std::string employeeName = \"John\";\n";
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

    @Test
    void genContent() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genContent(po);

        if (gb instanceof GenNapiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genFile() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);

        ParseObj po = new ParseObj();
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("NAPICPP");
        gb.genContent(po);
        gb.genFile("./", "testGenFile.d.ts");

        File file = new File("./ag_testGenFile_d_ts.h");
        assertEquals(true, file.exists());
        assertEquals(false, file.isDirectory());

        List<String> fcList = readText("./ag_testGenFile_d_ts.h");

        assertEquals("// Generated from ./\\testGenFile.d.ts by KaiHong ohgen 1.0.0-PLUGIN",
                fcList.get(0));
        assertEquals("const int TestParam = 100;",
                fcList.get(1));

        if (gb instanceof GenNapiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genInterfaceList() {
    }

    @Test
    void genEnumList() {
        EnumObj eo = new EnumObj();
        eo.setName("TestEnum");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("ONE");
        ml.add("TWO");
        eo.setMemberList(ml);
        List<String> vl = new CopyOnWriteArrayList<>();
        vl.add("1");
        vl.add("2");
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
            String expect = "\nenum TestEnum {\n" +
                    "\tONE = 1,\n" +
                    "\tTWO = 2,\n" +
                    "};\n" +
                    "\n" +
                    "// 创建枚举对象\n" +
                    "napi_value CreateTestEnumEnum(napi_env env) {\n" +
                    "\tnapi_value enum_obj;\n" +
                    "\tnapi_create_object(env, &enum_obj);\n" +
                    "\n" +
                    "\t// 添加枚举成员\n" +
                    "\tconst char* members[] = {\"ONE\", \"TWO\"};\n" +
                    "\tconst int values[] = {1, 2};\n" +
                    "\tfor (int32_t i = 0; i < 2; ++i) {\n" +
                    "\t\tnapi_value value;\n" +
                    "\t\tnapi_create_int32(env, value[i], &value);\n" +
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
    void genClassList() {
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

        poList = new CopyOnWriteArrayList<>();
        poItem = new ParamObj();
        poItem.setType("number");
        poList.add(poItem);

        co.addFunc("delete", "number", poList);

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
    void genFuncList() {
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
            String expect = "\nvoid TestFunc(std::string name, int age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genStructList() {
        StructObj so = new StructObj();
        so.setName("TestStruct");

        so.addMember("name", "string");
        so.addMember("age", "number");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("int");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("int");
        poList.add(poItem2);

        so.addFunc("add", "int", poList);

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
                    "\tstd::string name;\n" +
                    "\tint age;\n" +
                    "\tint add(int a, int b);\n" +
                    "};\n";
            assertEquals(expect, structContent);
        }
    }

    @Test
    void genTypeList() {
        TypeObj to = new TypeObj();
    }

    @Test
    void genUnionList() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
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
                    "\tauto name;\n" +
                    "\tint age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genVarList() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("number");
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