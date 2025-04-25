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
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
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
class GenDtsFileTest2 {
    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void genUnionList1() {
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
    void genUnionList2() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "long");

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
    void genUnionList3() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "short");

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
    void genUnionList4() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "long long");

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
    void genUnionList5() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "float");

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
    void genUnionList6() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "double");

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
    void genUnionList7() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "uint8");

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
    void genUnionList8() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "uint16");

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
    void genUnionList9() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "uint32");

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
    void genUnionList10() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "uint64");

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
    void genUnionList11() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "int8");

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
    void genUnionList12() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "int16");

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
    void genUnionList13() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "int32");

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
    void genUnionList14() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "int64");

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
    void genUnionList15() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "size_t");

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
    void genUnionList16() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "string");

        List<UnionObj> uol = new CopyOnWriteArrayList<>();
        uol.add(uo);
        ParseObj po = new ParseObj();
        po.setUnionList(uol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenDtsFile gdf) {
            String unionContent = gdf.getUnionContent();
            System.out.println("genUnion: " + unionContent);
            String expect = "\nexport type TestUnion = string | string;\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList17() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "std::string");

        List<UnionObj> uol = new CopyOnWriteArrayList<>();
        uol.add(uo);
        ParseObj po = new ParseObj();
        po.setUnionList(uol);
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        gb.genUnionList(po.getUnionList());

        if (gb instanceof GenDtsFile gdf) {
            String unionContent = gdf.getUnionContent();
            System.out.println("genUnion: " + unionContent);
            String expect = "\nexport type TestUnion = string | string;\n";
            assertEquals(expect, unionContent);
        }
    }

    @Test
    void genUnionList18() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "std::array<int>");

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
    void genUnionList19() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "std::stack<int>");

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
    void genUnionList20() {
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
    void genUnionList21() {
        UnionObj uo = new UnionObj();
        uo.setName("TestUnion");

        uo.addMember("name", "char*");
        uo.addMember("age", "std::queue<int>");

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
    void genVarList1() {
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

    @Test
    void genVarList2() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("long");
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

    @Test
    void genVarList3() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("short");
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

    @Test
    void genVarList4() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("long long");
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

    @Test
    void genVarList5() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("float");
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

    @Test
    void genVarList6() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("double");
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

    @Test
    void genVarList7() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint8");
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

    @Test
    void genVarList8() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint16");
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

    @Test
    void genVarList9() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint32");
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

    @Test
    void genVarList10() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("uint64");
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

    @Test
    void genVarList11() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int8");
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

    @Test
    void genVarList12() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int32");
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

    @Test
    void genVarList13() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("int64");
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

    @Test
    void genVarList14() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("size_t");
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

    @Test
    void genVarList15() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("string");
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
            String expect = "\nexport const TestParam : string = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList16() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::string");
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
            String expect = "\nexport const TestParam : string = 100;\n";
            assertEquals(expect, varContent);
        }
    }

    @Test
    void genVarList17() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::array<int>");
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

    @Test
    void genVarList18() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::stack<int>");
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

    @Test
    void genVarList19() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::vector<int>");
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

    @Test
    void genVarList20() {
        ParamObj pao = new ParamObj();
        pao.setName("TestParam");
        pao.setType("std::queue<int>");
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