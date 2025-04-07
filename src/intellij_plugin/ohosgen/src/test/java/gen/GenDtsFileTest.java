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

import com.thaiopensource.relaxng.edit.Param;
import grammar.*;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import static org.junit.jupiter.api.Assertions.*;
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
class GenDtsFileTest {

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
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

        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genContent(po);

        if (gb instanceof GenDtsFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nexport const TestParam : number = 100;\n";
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

        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genContent(po);
        gb.genFile("./", "testGenFile.h");

        File file = new File("./ag_testGenFile_h.d.ts");
        assertEquals(true, file.exists());
        assertEquals(false, file.isDirectory());

        List<String> fcList = readText("./ag_testGenFile_h.d.ts");

        assertEquals("// Generated from ./\\testGenFile.h by KaiHong ohgen 1.0.0-PLUGIN",
                fcList.get(0));
        assertEquals("export const TestParam : number = 100;",
                fcList.get(1));

        if (gb instanceof GenDtsFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nexport const TestParam : number = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genInterfaceList() {
    }

    @Test
    void genEnumList1() {
        ParseObj po = new ParseObj();
        EnumObj eo = new EnumObj();
        eo.setName("TestEnum");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("ONE");
        ml.add("TWO");
        eo.setMemberList(ml);
        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenDtsFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nexport enum TestEnum {\n" +
                    "\tONE,\n" +
                    "\tTWO,\n" +
                    "};\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void genEnumList2() {
        ParseObj po = new ParseObj();
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
        po.setEnumList(eol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenDtsFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nexport enum Colors {\n" +
                    "\tRed = RED,\n" +
                    "\tGreen = GREEN,\n" +
                    "\tBlue = BLUE,\n" +
                    "};\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void genClassList() {
        ClassObj co = new ClassObj();
        co.setName("TestClass");

        co.addParam("name", "char*");
        co.addParam("age", "int");

        List<ParamObj> poList = new CopyOnWriteArrayList<>();
        ParamObj poItem = new ParamObj();
        poItem.setName("a");
        poItem.setType("int");
        poList.add(poItem);
        ParamObj poItem2 = new ParamObj();
        poItem2.setName("b");
        poItem2.setType("int");
        poList.add(poItem2);

        co.addFunc("add", "int", poList);

        List<ClassObj> col = new CopyOnWriteArrayList<>();
        col.add(co);

        ParseObj po = new ParseObj();
        po.setClassList(col);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genClassList(po.getClassList());

        if (gb instanceof GenDtsFile gdf) {
            String classContent = gdf.getClassContent();
            System.out.println("genClass: " + classContent);
            String expect = "\nexport class TestClass {\n" +
                    "\tname: string;\n" +
                    "\tage: number;\n" +
                    "\tadd(a: number, b: number) : number;\n" +
                    "};\n";
            assertEquals(expect, classContent);
        }
    }

    @Test
    void genFuncList() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genStructList() {
        StructObj so = new StructObj();
        so.setName("TestStruct");

        so.addMember("name", "char*");
        so.addMember("age", "int");

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

        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genStructList(po.getStructList());

        if (gb instanceof GenDtsFile gdf) {
            String structContent = gdf.getStructContent();
            System.out.println("genStruct: " + structContent);
            String expect = "\nexport class TestStruct {\n" +
                    "\tname: string;\n" +
                    "\tage: number;\n" +
                    "\tadd(a: number, b: number) : number;\n" +
                    "};\n";
            assertEquals(expect, structContent);
        }
    }

    @Test
    void genTypeList() {
    }

    @Test
    void genUnionList() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "int");

        List<UnionObj> uol = new CopyOnWriteArrayList<>();
        uol.add(uo);
        ParseObj po = new ParseObj();
        po.setUnionList(uol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenDtsFile gdf) {
            String unionContent = gdf.getUnionContent();
            System.out.println("genUnion: " + unionContent);
            String expect = "\nexport type TestUnion = string | number;\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genVarList() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int");
        pao.setStrValue("100");
        List<ParamObj> pol = new CopyOnWriteArrayList<>();
        pol.add(pao);
        ParseObj po = new ParseObj();
        po.setVarList(pol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genVarList(po.getVarList());

        if (gb instanceof GenDtsFile gdf) {
            String varContent = gdf.getConstContent();
            System.out.println("genVar: " + varContent);
            String expect = "\nexport const TestParam : number = 100;\n";
            assertEquals(expect, varContent);
        }
    }
}