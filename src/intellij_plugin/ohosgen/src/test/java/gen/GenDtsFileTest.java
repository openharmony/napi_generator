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
    private final String genClassTestConent = "\nexport class TestClass {\n" +
            "\tname: string;\n" +
            "\tage: number;\n" +
            "\tp1: number;\n" +
            "\tp2: number;\n" +
            "\tp3: number;\n" +
            "\tp4: number;\n" +
            "\tp5: number;\n" +
            "\tp6: number;\n" +
            "\tp7: number;\n" +
            "\tp8: number;\n" +
            "\tp9: number;\n" +
            "\tp10: number;\n" +
            "\tp11: number;\n" +
            "\tp12: number;\n" +
            "\tp13: number;\n" +
            "\tp14: number;\n" +
            "\tp15: string;\n" +
            "\tp16: string;\n" +
            "\tp17: number;\n" +
            "\tp18: number;\n" +
            "\tp19: number;\n" +
            "\tp20: number;\n" +
            "\tadd(a: number, b: number) : number;\n" +
            "\taddAsync(a: number, b: number, cb: (err: string, res: number) => void) : void;\n" +
            "\taddPromise(a: number, b: number) : Promise<number>;\n" +
            "};\n";

    private final String genStructTestContent = "\nexport class TestStruct {\n" +
            "\tname: string;\n" +
            "\tage: number;\n" +
            "\tp1: number;\n" +
            "\tp2: number;\n" +
            "\tp3: number;\n" +
            "\tp4: number;\n" +
            "\tp5: number;\n" +
            "\tp6: number;\n" +
            "\tp7: number;\n" +
            "\tp8: number;\n" +
            "\tp9: number;\n" +
            "\tp10: number;\n" +
            "\tp11: number;\n" +
            "\tp12: number;\n" +
            "\tp13: number;\n" +
            "\tp14: number;\n" +
            "\tp15: string;\n" +
            "\tp16: string;\n" +
            "\tp17: number;\n" +
            "\tp18: number;\n" +
            "\tp19: number;\n" +
            "\tp20: number;\n" +
            "\tadd(a: number, b: number) : number;\n" +
            "\taddAsync(a: number, b: number, cb: (err: string, res: number) => void) : void;\n" +
            "\taddPromise(a: number, b: number) : Promise<number>;\n" +
            "};\n";

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
            String expect = genClassTestConent;
            assertEquals(expect, classContent);
        }
    }

    @Test
    void genFuncList1() {
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
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList2() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "long");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList3() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "short");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList4() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "long long");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList5() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "float");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList6() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "double");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList7() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "uint8");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList8() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "uint16");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList9() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "uint32");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList10() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "uint64");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList11() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int8");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }
    @Test
    void genFuncList12() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int16");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList13() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int32");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList14() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int64");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList15() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "size_t");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList16() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "string");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: string) : void;\n" +
                    "export function TestFuncAsync(name: string, age: string, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: string) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList17() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::string");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: string) : void;\n" +
                    "export function TestFuncAsync(name: string, age: string, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: string) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList18() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::array<int>");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList19() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::stack<int>");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList20() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::vector<int>");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncList21() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::queue<int>");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport function TestFunc(name: string, age: number) : void;\n" +
                    "export function TestFuncAsync(name: string, age: number, cb: (err: string) => void) : void;\n" +
                    "export function TestFuncPromise(name: string, age: number) : Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList1() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList2() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "long");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList3() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "short");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList4() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "long long");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList5() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "float");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList6() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "double");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList7() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "uint8");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList8() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "uint16");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList9() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "uint32");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList10() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "uint64");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList11() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int8");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList12() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int16");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList13() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int32");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList14() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "int64");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList15() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "size_t");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList16() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "string");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: string) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: string, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: string) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList17() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::string");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: string) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: string, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: string) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList18() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::array<int>");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList19() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::stack<int>");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList20() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::vector<int>");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genFuncConstStyleList21() {
        FuncObj fo = new FuncObj();
        fo.setName("TestFunc");

        fo.addParam("name", "char*");
        fo.addParam("age", "std::queue<int>");

        List<FuncObj> fol = new CopyOnWriteArrayList<>();
        fol.add(fo);
        ParseObj po = new ParseObj();
        po.setFuncList(fol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");

        if (gb instanceof GenDtsFile gdts) {
            gdts.setStyleType(GenDtsFile.CONV_CONST_STYLE);
        }

        gb.genFuncList(po.getFuncList());

        if (gb instanceof GenDtsFile gdf) {
            String funcContent = gdf.getFuncContent();
            System.out.println("genFunc: " + funcContent);
            String expect = "\nexport const TestFunc: (name: string, age: number) => void;\n" +
                    "export const TestFuncAsync: (name: string, age: number, cb: (err: string) => void) => void;\n" +
                    "export const TestFuncPromise: (name: string, age: number) => Promise<void>;";
            assertEquals(expect, funcContent);
        }
    }

    @Test
    void genStructList() {
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
            String expect = genStructTestContent;
            assertEquals(expect, structContent);
        }
    }

    @Test
    void genTypeList() {
    }

}