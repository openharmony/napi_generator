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
class GenCHFileTest {
    private String genUnionContentTest = "\nstruct TestStruct {\n" +
            "\tchar* name;\n" +
            "\tint age;\n" +
            "\tlong p1;\n" +
            "\tshort p2;\n" +
            "\tlong long p3;\n" +
            "\tfloat p4;\n" +
            "\tdouble p5;\n" +
            "\tuint8 p6;\n" +
            "\tuint16 p7;\n" +
            "\tuint32 p8;\n" +
            "\tuint64 p9;\n" +
            "\tint8 p10;\n" +
            "\tint16 p11;\n" +
            "\tint32 p12;\n" +
            "\tint64 p13;\n" +
            "\tsize_t p14;\n" +
            "\tchar* p15;\n" +
            "\tchar* p16;\n" +
            "\tint* p17;\n" +
            "\tint* p18;\n" +
            "\tint* p19;\n" +
            "\tint* p20;\n" +
            "\tint add(int a, int b);\n" +
            "};\n";

    private String genStructCOntentTest = "\nstruct TestStruct {\n" +
            "\tchar* name;\n" +
            "\tint age;\n" +
            "\tlong p1;\n" +
            "\tshort p2;\n" +
            "\tlong long p3;\n" +
            "\tfloat p4;\n" +
            "\tdouble p5;\n" +
            "\tuint8 p6;\n" +
            "\tuint16 p7;\n" +
            "\tuint32 p8;\n" +
            "\tuint64 p9;\n" +
            "\tint8 p10;\n" +
            "\tint16 p11;\n" +
            "\tint32 p12;\n" +
            "\tint64 p13;\n" +
            "\tsize_t p14;\n" +
            "\tchar* p15;\n" +
            "\tchar* p16;\n" +
            "\tint* p17;\n" +
            "\tint* p18;\n" +
            "\tint* p19;\n" +
            "\tint* p20;\n" +
            "};\n";

    private String genClassContentTest = "\nclass TestClass {\n" +
            "\tchar* name;\n" +
            "\tint age;\n" +
            "\tlong p1;\n" +
            "\tshort p2;\n" +
            "\tlong long p3;\n" +
            "\tfloat p4;\n" +
            "\tdouble p5;\n" +
            "\tuint8 p6;\n" +
            "\tuint16 p7;\n" +
            "\tuint32 p8;\n" +
            "\tuint64 p9;\n" +
            "\tint8 p10;\n" +
            "\tint16 p11;\n" +
            "\tint32 p12;\n" +
            "\tint64 p13;\n" +
            "\tsize_t p14;\n" +
            "\tchar* p15;\n" +
            "\tchar* p16;\n" +
            "\tint* p17;\n" +
            "\tint* p18;\n" +
            "\tint* p19;\n" +
            "\tint* p20;\n" +
            "\tint add(int a, int b);\n" +
            "\tint delete(int);\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenCHFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum TestEnum {\n" +
                    "\tONE,\n" +
                    "\tTWO,\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenCHFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum Colors {\n" +
                    "\tRed = RED,\n" +
                    "\tGreen = GREEN,\n" +
                    "\tBlue = BLUE,\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass TestClass {\n" +
                    "\tchar* name;\n" +
                    "\tint age;\n" +
                    "\tint add(int a, int b);\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass TestClass : public IPerson {\n" +
                    "\tpublic char* name;\n" +
                    "\tprivate int age;\n" +
                    "\tprotected char* no;\n" +
                    "\treadonly char* addr;\n" +
                    "\tconstructor();\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass Employee : public Person {\n" +
                    "\tint empCode;\n" +
                    "\tauto currentUser;\n" +
                    "\tstatic int pi = 3.14;\n" +
                    "\tconstructor();\n" +
                    "\tvoid displayName();\n" +
                    "};\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass myClass {\n" +
                    "\tauto foo();\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\ntemplate <typename T, typename U> class KeyValuePair {\n" +
                    "\tprivate T key;\n" +
                    "\tprivate U val;\n" +
                    "\tvoid setKeyValue(T key, U val);\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\ntemplate <typename T, typename U> class kvProcessor : " +
                    "public IKeyValueProcessor<T, U> {\n" +
                    "\tvoid process(T key, U val);\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nclass Shape {\n" +
                    "\tvoid process(auto key, auto val);\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\ntemplate<typename T, typename U> void displayType(T id, U name);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent8() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent9() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "long");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, long age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent10() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "short");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, short age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent11() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "long long");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, long long age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent12() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "float");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, float age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent13() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "double");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, double age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent14() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint8");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, uint8 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent15() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint16");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, uint16 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent16() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint32");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, uint32 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent17() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint64");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, uint64 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent18() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int8");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int8 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent19() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int16");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int16 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent20() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int32");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int32 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent21() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int64");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int64 age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent22() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "size_t");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, size_t age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent23() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "string");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, char* age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent24() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::string");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, char* age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent25() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::array<int>");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int* age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent26() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::stack<int>");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int* age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent27() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::vector<int>");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int* age);";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void getFuncContent28() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::queue<int>");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenCHFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(char* name, int* age);";
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

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCHFile gdf) {
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

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCHFile gdf) {
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

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCHFile gdf) {
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

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCHFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\nstruct TestStruct {\n" +
                    "};\n";
            assertEquals(expect, structContent);
        }
    }

    @Test
    void getStructContent5() {
        StructObj so = new StructObj();
        so.setName("TestStruct");
        so.addMember("name", "char*");
        so.addMember("age", "int");
        so.addMember("p1", "long");
        so.addMember("p2", "short");
        so.addMember("p3", "long long");
        so.addMember("p4", "float");
        so.addMember("p5", "double");
        so.addMember("p6", "uint8");
        so.addMember("p7", "uint16");
        so.addMember("p8", "uint32");
        so.addMember("p9", "uint64");
        so.addMember("p10", "int8");
        so.addMember("p11", "int16");
        so.addMember("p12", "int32");
        so.addMember("p13", "int64");
        so.addMember("p14", "size_t");
        so.addMember("p15", "string");
        so.addMember("p16", "std::string");
        so.addMember("p17", "std::array<int>");
        so.addMember("p18", "std::stack<int>");
        so.addMember("p19", "std::vector<int>");
        so.addMember("p20", "std::queue<int>");

        List<StructObj> sol = new CopyOnWriteArrayList<>();
        sol.add(so);
        ParseObj po = new ParseObj();
        po.setStructList(sol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCHFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = genStructCOntentTest;
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
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
    void getVarContent7() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("int");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const int num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent8() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("long");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const long num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent9() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("short");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const short num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent10() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("long long");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const long long num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent11() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("float");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const float num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent12() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("double");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const double num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent13() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("uint8");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const uint8 num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent14() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("uint16");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const uint16 num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent15() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("uint32");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const uint32 num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent16() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("uint64");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const uint64 num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent17() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("int8");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const int8 num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent18() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("int16");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const int16 num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent19() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("int32");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const int32 num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent20() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("int64");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const int64 num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent21() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("size_t");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const size_t num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent22() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("string");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const char* num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent23() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("std::string");
        paObj.setStrValue("1");

        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(paObj);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const char* num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

}