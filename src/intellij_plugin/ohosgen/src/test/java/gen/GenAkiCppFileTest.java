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
class GenAkiCppFileTest {
    private String classContentExpect2 = "\nclass TestClass : public IPerson {\n" +
            "\tpublic char* name;\n" +
            "\tprivate int age;\n" +
            "\tprotected char* no;\n" +
            "\treadonly char* addr;\n" +
            "\tconstructor();\n" +
            "};\n" +
            "\n" +
            "JSBIND_CLASS(TestClass)\n" +
            "{\n" +
            "\tJSBIND_CONSTRUCTOR<>();\n" +
            "\tJSBIND_PROPERTY(name);\n" +
            "\tJSBIND_PROPERTY(age);\n" +
            "\tJSBIND_PROPERTY(no);\n" +
            "\tJSBIND_PROPERTY(addr);\n" +
            "};\n";

    private String classContentExpect3 = "\nclass Employee : public Person {\n" +
            "\tint empCode;\n" +
            "\tauto currentUser;\n" +
            "\tstatic int pi = 3.14;\n" +
            "\tconstructor();\n" +
            "\tvoid displayName();\n" +
            "};\n" +
            "\n" +
            "JSBIND_CLASS(Employee)\n" +
            "{\n" +
            "\tJSBIND_CONSTRUCTOR<>();\n" +
            "\tJSBIND_METHOD(displayName, \"displayName\");\n" +
            "\tJSBIND_PMETHOD(displayName, \"displayNamePromise\");\n" +
            "\tJSBIND_PROPERTY(empCode);\n" +
            "\tJSBIND_PROPERTY(currentUser);\n" +
            "\tJSBIND_PROPERTY(pi);\n" +
            "};\n";

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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenAkiCppFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum TestEnum {\n" +
                    "\tONE,\n" +
                    "\tTWO,\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_ENUM(TestEnum) {\n" +
                    "\tJSBIND_ENUM_VALUE(ONE);\n" +
                    "\tJSBIND_ENUM_VALUE(TWO);\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenAkiCppFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum Colors {\n" +
                    "\tRed = RED,\n" +
                    "\tGreen = GREEN,\n" +
                    "\tBlue = BLUE,\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_ENUM(Colors) {\n" +
                    "\tJSBIND_ENUM_VALUE(Red);\n" +
                    "\tJSBIND_ENUM_VALUE(Green);\n" +
                    "\tJSBIND_ENUM_VALUE(Blue);\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenAkiCppFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum Colors {\n" +
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
                    "JSBIND_ENUM(Colors) {\n" +
                    "\tJSBIND_ENUM_VALUE(Red);\n" +
                    "\tJSBIND_ENUM_VALUE(Green);\n" +
                    "\tJSBIND_ENUM_VALUE(Blue);\n" +
                    "};\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void getEnumContent4() {
        EnumObj eo = new EnumObj();
        eo.setName("TestEnum");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("ONE");
        ml.add("TWO");
        eo.setMemberList(ml);

        EnumObj eo1 = new EnumObj();
        eo1.setName("Colors");
        List<String> ml1 = new CopyOnWriteArrayList<>();
        ml1.add("BLACK");
        ml1.add("WHITE");
        eo1.setMemberList(ml1);

        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        eol.add(eo1);

        ParseObj po = new ParseObj();
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenAkiCppFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum TestEnum {\n" +
                    "\tONE,\n" +
                    "\tTWO,\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_ENUM(TestEnum) {\n" +
                    "\tJSBIND_ENUM_VALUE(ONE);\n" +
                    "\tJSBIND_ENUM_VALUE(TWO);\n" +
                    "};\n" +
                    "\n" +
                    "enum Colors {\n" +
                    "\tBLACK,\n" +
                    "\tWHITE,\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_ENUM(Colors) {\n" +
                    "\tJSBIND_ENUM_VALUE(BLACK);\n" +
                    "\tJSBIND_ENUM_VALUE(WHITE);\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenAkiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass TestClass {\n" +
                    "\tchar* name;\n" +
                    "\tint age;\n" +
                    "\tint add(int a, int b);\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(TestClass)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(add, \"add\");\n" +
                    "\tJSBIND_PMETHOD(add, \"addPromise\");\n" +
                    "\tJSBIND_PROPERTY(name);\n" +
                    "\tJSBIND_PROPERTY(age);\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenAkiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = classContentExpect2;
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenAkiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = classContentExpect3;
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenAkiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass myClass {\n" +
                    "\tauto foo();\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(myClass)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(foo, \"foo\");\n" +
                    "\tJSBIND_PMETHOD(foo, \"fooPromise\");\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenAkiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\ntemplate <typename T, typename U> class KeyValuePair {\n" +
                    "\tprivate T key;\n" +
                    "\tprivate U val;\n" +
                    "\tvoid setKeyValue(T key, U val);\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(KeyValuePair)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(setKeyValue, \"setKeyValue\");\n" +
                    "\tJSBIND_PMETHOD(setKeyValue, \"setKeyValuePromise\");\n" +
                    "\tJSBIND_PROPERTY(key);\n" +
                    "\tJSBIND_PROPERTY(val);\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenAkiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\ntemplate <typename T, typename U> class kvProcessor : " +
                    "public IKeyValueProcessor<T, U> {\n" +
                    "\tvoid process(T key, U val);\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(kvProcessor)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(process, \"process\");\n" +
                    "\tJSBIND_PMETHOD(process, \"processPromise\");\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenAkiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass Shape {\n" +
                    "\tvoid process(auto key, auto val);\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(Shape)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(process, \"process\");\n" +
                    "\tJSBIND_PMETHOD(process, \"processPromise\");\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void getClassContent8() {
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

        ClassObj co1 = new ClassObj();
        co1.setName("myClass2");

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);
        col.add(co1);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenAkiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass myClass {\n" +
                    "\tauto foo();\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(myClass)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(foo, \"foo\");\n" +
                    "\tJSBIND_PMETHOD(foo, \"fooPromise\");\n" +
                    "};\n" +
                    "\n" +
                    "class myClass2 {\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(myClass2)\n" +
                    "{\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int age);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(TestFunc, \"TestFunc\");\n" +
                    "\tJSBIND_PFUNCTION(TestFunc, \"TestFuncPromise\");\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nchar* ToCapital(char* str, int length = 0);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(ToCapital, \"ToCapital\");\n" +
                    "\tJSBIND_PFUNCTION(ToCapital, \"ToCapitalPromise\");\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nchar* Nemw(char* str = \"joke\", int length = 0);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(Nemw, \"Nemw\");\n" +
                    "\tJSBIND_PFUNCTION(Nemw, \"NemwPromise\");\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nchar* Nemw(auto str, auto length);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(Nemw, \"Nemw\");\n" +
                    "\tJSBIND_PFUNCTION(Nemw, \"NemwPromise\");\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nNemw(auto str, auto length);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(Nemw, \"Nemw\");\n" +
                    "\tJSBIND_PFUNCTION(Nemw, \"NemwPromise\");\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\ntemplate<typename T> T* getArray(T* items);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(getArray, \"getArray\");\n" +
                    "\tJSBIND_PFUNCTION(getArray, \"getArrayPromise\");\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\ntemplate<typename T, typename U> void displayType(T id, U name);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(displayType, \"displayType\");\n" +
                    "\tJSBIND_PFUNCTION(displayType, \"displayTypePromise\");\n" +
                    "};\n";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent8() {
        FuncObj fo = new FuncObj();
        fo.setName("Nemw");
        fo.setRetValue("string");
        ParamObj pa1 = new ParamObj();
        pa1.setName("str");
        fo.addParam(pa1);
        ParamObj pa2 = new ParamObj();
        pa2.setName("length");
        fo.addParam(pa2);

        FuncObj fo1 = new FuncObj();
        fo1.setName("getCnt");
        fo1.setRetValue("int");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        fol.add(fo1);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nchar* Nemw(auto str, auto length);\n" +
                    "\n" +
                    "int getCnt();\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(Nemw, \"Nemw\");\n" +
                    "\tJSBIND_PFUNCTION(Nemw, \"NemwPromise\");\n" +
                    "\tJSBIND_FUNCTION(getCnt, \"getCnt\");\n" +
                    "\tJSBIND_PFUNCTION(getCnt, \"getCntPromise\");\n" +
                    "};\n";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent9() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");

        FuncObj foItem = new FuncObj();
        foItem.setRetValue("boolean");
        foItem.addParam("value", "boolean");

        ParamObj paItem = new ParamObj();
        paItem.setName("func");
        paItem.setType("(value:boolean)=>boolean");
        paItem.addFunc(foItem);

        fo.addParam(paItem);

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, aki::SafetyCallback<boolean(bool)> func);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(TestFunc, \"TestFunc\");\n" +
                    "\tJSBIND_PFUNCTION(TestFunc, \"TestFuncPromise\");\n" +
                    "};\n";
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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenAkiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\nstruct TestStruct {\n" +
                    "\tchar* name;\n" +
                    "\tbool age;\n" +
                    "\tint add(bool a, bool b);\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(TestStruct)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(add, \"add\");\n" +
                    "\tJSBIND_PMETHOD(add, \"addPromise\");\n" +
                    "\tJSBIND_PROPERTY(name);\n" +
                    "\tJSBIND_PROPERTY(age);\n" +
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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenAkiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\ntemplate <typename T, typename U> struct TestStruct {\n" +
                    "\tT name;\n" +
                    "\tU age;\n" +
                    "\tint add(T a, U b);\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(TestStruct)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(add, \"add\");\n" +
                    "\tJSBIND_PMETHOD(add, \"addPromise\");\n" +
                    "\tJSBIND_PROPERTY(name);\n" +
                    "\tJSBIND_PROPERTY(age);\n" +
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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenAkiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\nstruct TestStruct {\n" +
                    "\tauto name;\n" +
                    "\tauto age;\n" +
                    "\tadd(auto a, auto b);\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(TestStruct)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(add, \"add\");\n" +
                    "\tJSBIND_PMETHOD(add, \"addPromise\");\n" +
                    "\tJSBIND_PROPERTY(name);\n" +
                    "\tJSBIND_PROPERTY(age);\n" +
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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenAkiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\nstruct TestStruct {\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(TestStruct)\n" +
                    "{\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genContent(po);

        if (gb instanceof GenAkiCppFile gdf) {
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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genContent(po);
        gb.genFile("./", "testGenFile.h");

        File file = new File("./ag_akitestGenFile_h.cpp");
        assertEquals(true, file.exists());
        assertEquals(false, file.isDirectory());

        List<String> fcList = readText("./ag_akitestGenFile_h.cpp");

        assertEquals("// Generated from ./\\testGenFile.h by KaiHong ohgen 1.0.0-PLUGIN",
                fcList.get(0));

        assertEquals("#include <string>",
                fcList.get(1));
        assertEquals("#include <aki/jsbind.h>",
                fcList.get(2));
        assertEquals("",
                fcList.get(3));
        assertEquals("JSBIND_ADDON(testGenFileh)",
                fcList.get(4));
        assertEquals("extends const int TestParam = 100;",
                fcList.get(6));

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenAkiCppFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum TestEnum {\n" +
                    "\tONE = 1,\n" +
                    "\tTWO = 2,\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_ENUM(TestEnum) {\n" +
                    "\tJSBIND_ENUM_VALUE(ONE);\n" +
                    "\tJSBIND_ENUM_VALUE(TWO);\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenAkiCppFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass TestClass {\n" +
                    "\tchar* name;\n" +
                    "\tint age;\n" +
                    "\tint add(int a, int b);\n" +
                    "\tint delete(int);\n" +
                    "};\n" +
                    "\n" +
                    "JSBIND_CLASS(TestClass)\n" +
                    "{\n" +
                    "\tJSBIND_METHOD(add, \"add\");\n" +
                    "\tJSBIND_PMETHOD(add, \"addPromise\");\n" +
                    "\tJSBIND_METHOD(delete, \"delete\");\n" +
                    "\tJSBIND_PMETHOD(delete, \"deletePromise\");\n" +
                    "\tJSBIND_PROPERTY(name);\n" +
                    "\tJSBIND_PROPERTY(age);\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int age);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(TestFunc, \"TestFunc\");\n" +
                    "\tJSBIND_PFUNCTION(TestFunc, \"TestFuncPromise\");\n" +
                    "};\n";
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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenAkiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\nstruct TestStruct {\n" +
                "\tchar* name;\n" +
                "\tint age;\n" +
                "\tint add(int a, int b);\n" +
                "};\n" +
                "\n" +
                "JSBIND_CLASS(TestStruct)\n" +
                "{\n" +
                "\tJSBIND_METHOD(add, \"add\");\n" +
                "\tJSBIND_PMETHOD(add, \"addPromise\");\n" +
                "\tJSBIND_PROPERTY(name);\n" +
                "\tJSBIND_PROPERTY(age);\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenAkiCppFile gdf) {
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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }
}