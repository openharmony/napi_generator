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
    void parseCStreamClass1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "class tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj co = col.get(0);
        assertEquals("tree_el", co.getName());

        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        assertEquals("val", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
        assertEquals("structtree_el", pl.get(1).getType());
        assertEquals("*right", pl.get(1).getName());
        assertEquals("structtree_el", pl.get(2).getType());
        assertEquals("*left", pl.get(2).getName());

    }

    @Test
    void parseCStreamClass2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "class {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj co = col.get(0);

        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        assertEquals("val", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
        assertEquals("structtree_el", pl.get(1).getType());
        assertEquals("*right", pl.get(1).getName());
        assertEquals("structtree_el", pl.get(2).getType());
        assertEquals("*left", pl.get(2).getName());

    }
    @Test
    void parseCStreamClass3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef class {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "} tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj co = col.get(0);
        assertEquals("tree_el_T", co.getAlias());

        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        assertEquals("val", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
        assertEquals("structtree_el", pl.get(1).getType());
        assertEquals("*right", pl.get(1).getName());
        assertEquals("structtree_el", pl.get(2).getType());
        assertEquals("*left", pl.get(2).getName());

    }

    @Test
    void parseCStreamClass4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef class tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "} tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj co = col.get(0);
        assertEquals("tree_el", co.getName());
        assertEquals("tree_el_T", co.getAlias());

        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        assertEquals("val", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
        assertEquals("structtree_el", pl.get(1).getType());
        assertEquals("*right", pl.get(1).getName());
        assertEquals("structtree_el", pl.get(2).getType());
        assertEquals("*left", pl.get(2).getName());

    }

    @Test
    void parseCStreamFunction1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo();";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

    }

    @Test
    void parseCStreamFunction2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( short s );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("s", pl.get(0).getName());
        assertEquals("short", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( short int si );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("si", pl.get(0).getName());
        assertEquals("short int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed short ss );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ss", pl.get(0).getName());
        assertEquals("signed short", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction5() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed short int ssi);";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ssi", pl.get(0).getName());
        assertEquals("signed short int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction6() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned short us );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("us", pl.get(0).getName());
        assertEquals("unsigned short", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction7() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned short int usi );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("usi", pl.get(0).getName());
        assertEquals("unsigned short int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction8() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( int i);";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("i", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction9() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed s );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("s", pl.get(0).getName());
        assertEquals("signed", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction10() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed int si );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("si", pl.get(0).getName());
        assertEquals("signed int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction11() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned u );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("u", pl.get(0).getName());
        assertEquals("unsigned", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction12() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned int ui );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ui", pl.get(0).getName());
        assertEquals("unsigned int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction13() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long l );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("l", pl.get(0).getName());
        assertEquals("long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction14() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long int li );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("li", pl.get(0).getName());
        assertEquals("long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction15() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed long sl );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("sl", pl.get(0).getName());
        assertEquals("signed long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction16() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed long int sli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("sli", pl.get(0).getName());
        assertEquals("signed long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction17() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long ul );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ul", pl.get(0).getName());
        assertEquals("unsigned long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction18() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long int uli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("uli", pl.get(0).getName());
        assertEquals("unsigned long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction19() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long long ll );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ll", pl.get(0).getName());
        assertEquals("long long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction20() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long long int lli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("lli", pl.get(0).getName());
        assertEquals("long long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction21() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed long long sll );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("sll", pl.get(0).getName());
        assertEquals("signed long long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction22() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed long long int slli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("slli", pl.get(0).getName());
        assertEquals("signed long long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction23() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long long ull );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ull", pl.get(0).getName());
        assertEquals("unsigned long long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction24() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long long int ulli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ulli", pl.get(0).getName());
        assertEquals("unsigned long long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction25() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( double d );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("d", pl.get(0).getName());
        assertEquals("double", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction26() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long double ld );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ld", pl.get(0).getName());
        assertEquals("long double", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction27() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("unsigned long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction28() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long int );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("unsigned long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction29() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long long );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("long long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction30() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long long int );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("long long int", pl.get(0).getType());
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