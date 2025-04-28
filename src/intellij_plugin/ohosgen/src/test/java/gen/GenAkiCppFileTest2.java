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
class GenAkiCppFileTest2 {
    private String structListContent1 = "\nstruct TestStruct {\n" +
            "\tstd::string name;\n" +
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
            "\tstd::string p15;\n" +
            "\tstd::string p16;\n" +
            "\tstd::array<int> p17;\n" +
            "\tstd::stack<int> p18;\n" +
            "\tstd::vector<int> p19;\n" +
            "\tstd::queue<int> p20;\n" +
            "};\n" +
            "\n" +
            "JSBIND_CLASS(TestStruct)\n" +
            "{\n" +
            "\tJSBIND_PROPERTY(name);\n" +
            "\tJSBIND_PROPERTY(age);\n" +
            "\tJSBIND_PROPERTY(p1);\n" +
            "\tJSBIND_PROPERTY(p2);\n" +
            "\tJSBIND_PROPERTY(p3);\n" +
            "\tJSBIND_PROPERTY(p4);\n" +
            "\tJSBIND_PROPERTY(p5);\n" +
            "\tJSBIND_PROPERTY(p6);\n" +
            "\tJSBIND_PROPERTY(p7);\n" +
            "\tJSBIND_PROPERTY(p8);\n" +
            "\tJSBIND_PROPERTY(p9);\n" +
            "\tJSBIND_PROPERTY(p10);\n" +
            "\tJSBIND_PROPERTY(p11);\n" +
            "\tJSBIND_PROPERTY(p12);\n" +
            "\tJSBIND_PROPERTY(p13);\n" +
            "\tJSBIND_PROPERTY(p14);\n" +
            "\tJSBIND_PROPERTY(p15);\n" +
            "\tJSBIND_PROPERTY(p16);\n" +
            "\tJSBIND_PROPERTY(p17);\n" +
            "\tJSBIND_PROPERTY(p18);\n" +
            "\tJSBIND_PROPERTY(p19);\n" +
            "\tJSBIND_PROPERTY(p20);\n" +
            "};\n";

    private String structListContent2 = "\nstruct TestStruct {\n" +
            "\tstd::string name;\n" +
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

    private String genClassContentExpect1 = "\nclass TestClass {\n" +
            "\tstd::string name;\n" +
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
            "\tstd::string p15;\n" +
            "\tstd::string p16;\n" +
            "\tstd::array<int> p17;\n" +
            "\tstd::stack<int> p18;\n" +
            "\tstd::vector<int> p19;\n" +
            "\tstd::queue<int> p20;\n" +
            "\tint delete(int);\n" +
            "};\n" +
            "\n" +
            "JSBIND_CLASS(TestClass)\n" +
            "{\n" +
            "\tJSBIND_METHOD(delete, \"delete\");\n" +
            "\tJSBIND_PMETHOD(delete, \"deletePromise\");\n" +
            "\tJSBIND_PROPERTY(name);\n" +
            "\tJSBIND_PROPERTY(age);\n" +
            "\tJSBIND_PROPERTY(p1);\n" +
            "\tJSBIND_PROPERTY(p2);\n" +
            "\tJSBIND_PROPERTY(p3);\n" +
            "\tJSBIND_PROPERTY(p4);\n" +
            "\tJSBIND_PROPERTY(p5);\n" +
            "\tJSBIND_PROPERTY(p6);\n" +
            "\tJSBIND_PROPERTY(p7);\n" +
            "\tJSBIND_PROPERTY(p8);\n" +
            "\tJSBIND_PROPERTY(p9);\n" +
            "\tJSBIND_PROPERTY(p10);\n" +
            "\tJSBIND_PROPERTY(p11);\n" +
            "\tJSBIND_PROPERTY(p12);\n" +
            "\tJSBIND_PROPERTY(p13);\n" +
            "\tJSBIND_PROPERTY(p14);\n" +
            "\tJSBIND_PROPERTY(p15);\n" +
            "\tJSBIND_PROPERTY(p16);\n" +
            "\tJSBIND_PROPERTY(p17);\n" +
            "\tJSBIND_PROPERTY(p18);\n" +
            "\tJSBIND_PROPERTY(p19);\n" +
            "\tJSBIND_PROPERTY(p20);\n" +
            "};\n";

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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const std::string num1 = 1;\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenAkiCppFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const std::string num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent24() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("std::array<int>");
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
            String expect = "\nextends const std::array<int> num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent25() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("std::stack<int>");
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
            String expect = "\nextends const std::stack<int> num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent26() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("std::vector<int>");
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
            String expect = "\nextends const std::vector<int> num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent27() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("std::queue<int>");
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
            String expect = "\nextends const std::queue<int> num1 = 1;\n";
            assertEquals(expect, constContent);
        }
    }

    @Test
    void getVarContent28() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("std::map<int>");
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
            String expect = "\nextends const std::map<int> num1 = 1;\n";
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
    void genClassList1() {
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
                    "\tstd::string name;\n" +
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
    void genClassList2() {
        ClassObj co = new ClassObj();
        co.setName("TestClass");

        co.addParam("name", "string");
        co.addParam("age", "number");
        co.addParam("p1", "long");
        co.addParam("p2", "short");
        co.addParam("p3", "long long");
        co.addParam("p4", "float");
        co.addParam("p5", "double");
        co.addParam("p6", "uint8");
        co.addParam("p7", "uint16");
        co.addParam("p8", "uint32");
        co.addParam("p9", "uint64");
        co.addParam("p10", "int8");
        co.addParam("p11", "int16");
        co.addParam("p12", "int32");
        co.addParam("p13", "int64");
        co.addParam("p14", "size_t");
        co.addParam("p15", "string");
        co.addParam("p16", "std::string");
        co.addParam("p17", "std::array<int>");
        co.addParam("p18", "std::stack<int>");
        co.addParam("p19", "std::vector<int>");
        co.addParam("p20", "std::queue<int>");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem;
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
            String expect = genClassContentExpect1;
            assertEquals(expect, classContent);
        }
    }

    @Test
    void genFuncList1() {
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
            String expect = "\nvoid TestFunc(std::string name, int age);\n" +
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
    void genFuncList2() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int age);\n" +
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
    void genFuncList3() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "long");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, long age);\n" +
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
    void genFuncList4() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "short");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, short age);\n" +
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
    void genFuncList5() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "long long");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, long long age);\n" +
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
    void genFuncList6() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "float");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, float age);\n" +
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
    void genFuncList7() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "double");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, double age);\n" +
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
    void genFuncList8() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint8");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, uint8 age);\n" +
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
    void genFuncList9() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint16");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, uint16 age);\n" +
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
    void genFuncList10() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint32");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, uint32 age);\n" +
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
    void genFuncList11() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "uint64");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, uint64 age);\n" +
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
    void genFuncList12() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int8");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int8 age);\n" +
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
    void genFuncList13() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int16");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int16 age);\n" +
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
    void genFuncList14() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int32");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int32 age);\n" +
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
    void genFuncList15() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "int64");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, int64 age);\n" +
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
    void genFuncList16() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "size_t");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, size_t age);\n" +
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
    void genFuncList17() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "string");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, std::string age);\n" +
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
    void genFuncList18() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::string");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, std::string age);\n" +
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
    void genFuncList19() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::array<int>");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, std::array<int> age);\n" +
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
    void genFuncList20() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::stack<int>");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, std::stack<int> age);\n" +
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
    void genFuncList21() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::vector<int>");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, std::vector<int> age);\n" +
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
    void genFuncList22() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::queue<int>");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, std::queue<int> age);\n" +
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
    void genFuncList23() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");
        fo.setRetValue("void");
        fo.addParam("name", "string");
        fo.addParam("age", "std::map<int>");
        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenAkiCppFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nvoid TestFunc(std::string name, std::map<int> age);\n" +
                    "\n" +
                    "JSBIND_GLOBAL()\n" +
                    "{\n" +
                    "\tJSBIND_FUNCTION(TestFunc, \"TestFunc\");\n" +
                    "\tJSBIND_PFUNCTION(TestFunc, \"TestFuncPromise\");\n" +
                    "};\n";
            assertEquals(expect, funcContent);
        }
    }
}