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

package parse;

import grammar.*;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CodePointCharStream;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * <h3>类名：该类用于xxx</h3>
 * description
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
class ParseCppTest {

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void parseFile() {
    }

    @Test
    void parseContent() {
    }

    @Test
    void parseCStreamEnum1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "enum Colors {\n" +
                "  Red = 1,\n" +
                "  Green = 2,\n" +
                "  Blue = 3\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<EnumObj> eol = po.getEnumList();
        assertEquals(1, eol.size());
        EnumObj eo = eol.get(0);
        assertEquals("Colors", eo.getName());
        List<String> ml = eo.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("Red", ml.get(0));
        assertEquals("Green", ml.get(1));
        assertEquals("Blue", ml.get(2));
        List<String> vl = eo.getValueList();
        assertEquals(3, vl.size());
        assertEquals("1", vl.get(0));
        assertEquals("2", vl.get(1));
        assertEquals("3", vl.get(2));
    }

    @Test
    void parseCStreamEnum2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "enum {\n" +
                "  Red = 1,\n" +
                "  Green = 2,\n" +
                "  Blue = 3\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<EnumObj> eol = po.getEnumList();
        assertEquals(1, eol.size());
        EnumObj eo = eol.get(0);
        assertEquals("", eo.getName());
        List<String> ml = eo.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("Red", ml.get(0));
        assertEquals("Green", ml.get(1));
        assertEquals("Blue", ml.get(2));
        List<String> vl = eo.getValueList();
        assertEquals(3, vl.size());
        assertEquals("1", vl.get(0));
        assertEquals("2", vl.get(1));
        assertEquals("3", vl.get(2));
    }

    @Test
    void parseCStreamEnum3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef enum {\n" +
                "  Red = 1,\n" +
                "  Green = 2,\n" +
                "  Blue = 3\n" +
                "} Colors_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<EnumObj> eol = po.getEnumList();
        assertEquals(1, eol.size());
        EnumObj eo = eol.get(0);
        assertEquals("", eo.getName());
        assertEquals("Colors_T", eo.getAlias());
        List<String> ml = eo.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("Red", ml.get(0));
        assertEquals("Green", ml.get(1));
        assertEquals("Blue", ml.get(2));
        List<String> vl = eo.getValueList();
        assertEquals(3, vl.size());
        assertEquals("1", vl.get(0));
        assertEquals("2", vl.get(1));
        assertEquals("3", vl.get(2));
    }

    @Test
    void parseCStreamEnum4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef enum Colors {\n" +
                "  Red = 1,\n" +
                "  Green = 2,\n" +
                "  Blue = 3\n" +
                "} Colors_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<EnumObj> eol = po.getEnumList();
        assertEquals(1, eol.size());
        EnumObj eo = eol.get(0);
        assertEquals("Colors", eo.getName());
        assertEquals("Colors_T", eo.getAlias());
        List<String> ml = eo.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("Red", ml.get(0));
        assertEquals("Green", ml.get(1));
        assertEquals("Blue", ml.get(2));
        List<String> vl = eo.getValueList();
        assertEquals(3, vl.size());
        assertEquals("1", vl.get(0));
        assertEquals("2", vl.get(1));
        assertEquals("3", vl.get(2));
    }

    @Test
    void parseCStreamStruct1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "struct tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<StructObj> sol = po.getStructList();
        assertEquals(1, sol.size());
        StructObj so = sol.get(0);
        assertEquals("tree_el", so.getName());

        List<ParamObj> ml = so.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamStruct2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "struct {\n" +
                "   int val;\n" +
                "   Tree_el_T * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<StructObj> sol = po.getStructList();
        assertEquals(1, sol.size());
        StructObj so = sol.get(0);
        assertEquals("", so.getName());

        List<ParamObj> ml = so.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("Tree_el_T", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("Tree_el_T", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamStruct3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef struct {\n" +
                "   int val;\n" +
                "   Tree_el_T * right, * left;\n" +
                "} Tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<StructObj> sol = po.getStructList();
        assertEquals(1, sol.size());
        StructObj so = sol.get(0);
        assertEquals("", so.getName());
        assertEquals("Tree_el_T", so.getAlias());

        List<ParamObj> ml = so.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("Tree_el_T", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("Tree_el_T", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamStruct4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef struct tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "} Tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<StructObj> sol = po.getStructList();
        assertEquals(1, sol.size());
        StructObj so = sol.get(0);
        assertEquals("tree_el", so.getName());
        assertEquals("Tree_el_T", so.getAlias());

        List<ParamObj> ml = so.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamUnion1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "union tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<UnionObj> sol = po.getUnionList();
        assertEquals(1, sol.size());
        UnionObj so = sol.get(0);
        assertEquals("tree_el", so.getName());

        List<ParamObj> ml = so.getMemList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamUnion2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "union {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<UnionObj> sol = po.getUnionList();
        assertEquals(1, sol.size());
        UnionObj so = sol.get(0);

        List<ParamObj> ml = so.getMemList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamUnion3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef union {\n" +
                "   int val;\n" +
                "   Tree_el_T * right, * left;\n" +
                "} Tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<UnionObj> sol = po.getUnionList();
        assertEquals(1, sol.size());
        UnionObj so = sol.get(0);
        assertEquals("", so.getName());
        assertEquals("Tree_el_T", so.getAlias());

        List<ParamObj> ml = so.getMemList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("Tree_el_T", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("Tree_el_T", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamUnion4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef union tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "} Tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<UnionObj> sol = po.getUnionList();
        assertEquals(1, sol.size());
        UnionObj so = sol.get(0);
        assertEquals("tree_el", so.getName());
        assertEquals("Tree_el_T", so.getAlias());

        List<ParamObj> ml = so.getMemList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void genParseResult() {
    }

    @Test
    void parseEnum() {
    }

    @Test
    void parseUnion() {
    }

    @Test
    void parseStruct() {
    }

    @Test
    void parseClass() {
    }

    @Test
    void parseFunc() {
    }

    @Test
    void parseType() {
    }
}