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
class GenCHFileTest2 {
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
    void getVarContent24() {
        ParamObj paObj = new ParamObj();
        paObj.setName("num1");
        paObj.setType("std::array<int>");
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
            String expect = "\nextends const int* num1 = 1;\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const int* num1 = 1;\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const int* num1 = 1;\n";
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenCHFile gdf) {
            String constContent = gdf.getConstContent();
            System.out.println("getVar: " + constContent);
            String expect = "\nextends const int* num1 = 1;\n";
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

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
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

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genContent(po);

        if (gb instanceof GenCHFile gdf) {
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

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genContent(po);
        gb.genFile("./", "testGenFile.d.ts");

        File file = new File("./ag_testGenFile_d_ts.h");
        assertEquals(true, file.exists());
        assertEquals(false, file.isDirectory());

        List<String> fcList = readText("./ag_testGenFile_d_ts.h");

        assertEquals("// Generated from ./\\testGenFile.d.ts by KaiHong ohgen 1.0.0-PLUGIN",
                fcList.get(0));
        assertEquals("extends const int TestParam = 100;",
                fcList.get(1));

        if (gb instanceof GenCHFile gdf) {
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenCHFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nenum TestEnum {\n" +
                    "\tONE = 1,\n" +
                    "\tTWO = 2,\n" +
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
        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenCHFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = genClassContentTest;
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
    void genStructList() {
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

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenCHFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = genUnionContentTest;
            assertEquals(expect, structContent);
        }
    }

    @Test
    void genTypeList() {
        TypeObj to = new TypeObj();
    }

    @Test
    void genUnionList1() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
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
                    "\tauto name;\n" +
                    "\tint age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList2() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "int");

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
                    "\tauto name;\n" +
                    "\tint age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList3() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "long");

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
                    "\tauto name;\n" +
                    "\tlong age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList4() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "short");

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
                    "\tauto name;\n" +
                    "\tshort age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList5() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "long long");

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
                    "\tauto name;\n" +
                    "\tlong long age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList6() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "float");

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
                    "\tauto name;\n" +
                    "\tfloat age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList7() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "double");

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
                    "\tauto name;\n" +
                    "\tdouble age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList8() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "uint8");

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
                    "\tauto name;\n" +
                    "\tuint8 age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList9() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "uint16");

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
                    "\tauto name;\n" +
                    "\tuint16 age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList10() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "uint32");

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
                    "\tauto name;\n" +
                    "\tuint32 age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }
    @Test
    void genUnionList11() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "uint64");

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
                    "\tauto name;\n" +
                    "\tuint64 age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList12() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "int8");

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
                    "\tauto name;\n" +
                    "\tint8 age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList13() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "int16");

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
                    "\tauto name;\n" +
                    "\tint16 age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList14() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "int32");

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
                    "\tauto name;\n" +
                    "\tint32 age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList15() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "int64");

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
                    "\tauto name;\n" +
                    "\tint64 age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList16() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "size_t");

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
                    "\tauto name;\n" +
                    "\tsize_t age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList17() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "string");

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
                    "\tauto name;\n" +
                    "\tchar* age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList18() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "std::string");

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
                    "\tauto name;\n" +
                    "\tchar* age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList19() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "std::array<int>");

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
                    "\tauto name;\n" +
                    "\tint* age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList20() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "std::stack<int>");

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
                    "\tauto name;\n" +
                    "\tint* age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList21() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "std::vector<int>");

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
                    "\tauto name;\n" +
                    "\tint* age;\n" +
                    "};\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList22() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "any");
        uo.addMember("age", "std::queue<int>");

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
                    "\tauto name;\n" +
                    "\tint* age;\n" +
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

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
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
        pao.setType("long");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const long TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList3() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("short");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const short TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList4() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("long long");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const long long TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList5() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("float");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const float TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList6() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("double");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const double TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList7() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint8");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint8 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList8() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint16");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint16 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList9() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint32");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint32 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList10() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint64");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const uint64 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList11() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int8");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int8 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList12() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int16");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int16 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList13() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int32");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int32 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList14() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int64");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int64 TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList15() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("size_t");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const size_t TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList16() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("string");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const char* TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList17() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::string");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const char* TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList18() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::array<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int* TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList19() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::stack<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int* TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList20() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::vector<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int* TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }


    @Test
    void genVarList21() {
        ParseObj po = new ParseObj();
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::queue<int>");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        po.setVarList(pol);

        GeneratorBase gb = GenerateFactory.getGenerator("CH");
        gb.genVarList(pol);

        if (gb instanceof GenCHFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nextends const int* TestParam = 100;\n";
            assertEquals(expect, varContent);
        }
    }
}