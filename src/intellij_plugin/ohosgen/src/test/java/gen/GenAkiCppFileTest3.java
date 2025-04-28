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
class GenAkiCppFileTest3 {
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

    @Test
    void genStructList1() {
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
            String expect = structListContent2;
            assertEquals(expect, structContent);
        }
    }

    @Test
    void genStructList2() {
        StructObj so = new StructObj();
        so.setName("TestStruct");

        so.addMember("name", "string");
        so.addMember("age", "number");

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

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenAkiCppFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = structListContent1;
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
    void genVarList1() {
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

    @Test
    void genVarList2() {
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
    void genVarList3() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("long");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const long TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList4() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("short");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const short TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList5() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("long long");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const long long TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList6() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("float");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const float TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList7() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("double");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const double TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList8() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint8");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint8 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList9() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint16");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint16 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList10() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint32");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint32 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList11() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint64");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint64 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList12() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int8");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int8 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList13() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int16");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int16 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList14() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int32");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int32 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList15() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int64");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int64 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList16() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("size_t");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const size_t TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList17() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("string");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::string TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList18() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::string");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::string TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList19() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::array<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::array<int> TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList20() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::stack<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::stack<int> TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList21() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::vector<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::vector<int> TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList22() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::queue<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::queue<int> TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList23() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::map<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("AKICPP");
        gb.genVarList(pol);

        if (gb instanceof GenAkiCppFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const std::map<int> TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }
}