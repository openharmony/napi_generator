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
class ParseTsTest {

    String testClass2 = "abstract class Person {\n" +
            "    name: string;\n" +
            "\n" +
            "    constructor(name: string) {\n" +
            "        this.name = name;\n" +
            "    }\n" +
            "\n" +
            "    abstract find(target: string): Person;\n" +
            "    abstract nameAbs: string;\n" +
            "}";

    String testClass3 = "abstract class Person {\n" +
            "    name: string;\n" +
            "    value: int;\n" +
            "\n" +
            "    constructor(name: string, value: int) {\n" +
            "        this.name = name;\n" +
            "        this.value = value;\n" +
            "    }\n" +
            "\n" +
            "    abstract find(target: string, cnt: int): Person;\n" +
            "    abstract add(int, string): Person;\n" +
            "    abstract nameAbs: string;\n" +
            "}";

    String testClass4 = "abstract class Person {\n" +
            "    name: string;\n" +
            "    value: int;\n" +
            "\n" +
            "    constructor(string, int) {\n" +
            "        this.name = name;\n" +
            "        this.value = value;\n" +
            "    }\n" +
            "\n" +
            "    abstract find(string): Person;\n" +
            "    abstract add(int, string): Person;\n" +
            "    abstract nameAbs: string;\n" +
            "}";

    @Test
    void parseFile() {
    }

    @Test
    void parseContent() {
    }

    @Test
    void parseCStreamEnum() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testEnum = "enum Colors {\n" +
                "  Red = \"RED\",\n" +
                "  Green = \"GREEN\",\n" +
                "  Blue = \"BLUE\"\n" +
                "}";
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
        assertEquals("\"RED\"", vl.get(0));
        assertEquals("\"GREEN\"", vl.get(1));
        assertEquals("\"BLUE\"", vl.get(2));
    }

    @Test
    void parseCStreamClass_1() {
        String testClass = "export class Box {\n" +
                "\tlines: number;\n" +
                "\tsrcType: TestEnum;\n" +
                "\tdestType1: TestSt3;\n" +
                "\tdesType2: TestShap_t;\n" +
                "\tdesType3: TestUnion3_t;\n" +
                "\tcalcArea: number;\n" +
                "\theith_: number;\n" +
                "\ttransform2D(calcCB: Calculate): boolean;\n" +
                "\ttransform3D(ctCB: CallbackTest): boolean;\n" +
                "};";
        ParseBase parser = ParseFactory.getParser("ts");

        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> eol = po.getClassList();
        assertEquals(1, eol.size());
        ClassObj co = eol.get(0);
        assertEquals("Box", co.getName());
        List<ParamObj> pl = co.getParamList();
        assertEquals(7, pl.size());
        ParamObj poItem = pl.get(0);
        assertEquals("lines", poItem.getName());
        assertEquals("number", poItem.getType());
        poItem = pl.get(1);
        assertEquals("srcType", poItem.getName());
        assertEquals("TestEnum", poItem.getType());
        poItem = pl.get(2);
        assertEquals("destType1", poItem.getName());
        assertEquals("TestSt3", poItem.getType());
        poItem = pl.get(3);
        assertEquals("desType2", poItem.getName());
        assertEquals("TestShap_t", poItem.getType());
        poItem = pl.get(4);
        assertEquals("desType3", poItem.getName());
        assertEquals("TestUnion3_t", poItem.getType());
        poItem = pl.get(5);
        assertEquals("calcArea", poItem.getName());
        assertEquals("number", poItem.getType());
        poItem = pl.get(6);
        assertEquals("heith_", poItem.getName());
        assertEquals("number", poItem.getType());
    }

    @Test
    void parseCStreamClass_2() {
        String testClass = testClass2;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> eol = po.getClassList();
        assertEquals(1, eol.size());
        ClassObj co = eol.get(0);
        assertEquals("Person", co.getName());
        List<ParamObj> pl = co.getParamList();
        assertEquals(2, pl.size());
        ParamObj poItem = pl.get(0);
        assertEquals("name", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pl.get(1);
        assertEquals("nameAbs", poItem.getName());
        assertEquals("string", poItem.getType());
        List<FuncObj> fol = co.getFuncList();
        assertEquals(2, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(1, pol.size());
        poItem = pol.get(0);
        assertEquals("name", poItem.getName());
        assertEquals("string", poItem.getType());
        foItem = fol.get(1);
        assertEquals("find", foItem.getName());
        assertEquals("Person", foItem.getRetValue());
        pol = foItem.getParamList();
        assertEquals(1, pol.size());
        poItem = pol.get(0);
        assertEquals("string", poItem.getType());

    }

    @Test
    void parseCStreamClass_3() {
        String testClass = this.testClass3;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> eol = po.getClassList();
        assertEquals(1, eol.size());
        ClassObj co = eol.get(0);
        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        ParamObj poItem = pl.get(1);
        assertEquals("value", poItem.getName());
        assertEquals("int", poItem.getType());
        poItem = pl.get(2);
        assertEquals("nameAbs", poItem.getName());
        assertEquals("string", poItem.getType());
        List<FuncObj> fol = co.getFuncList();
        assertEquals(3, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("name", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(1);
        assertEquals("value", poItem.getName());
        assertEquals("int", poItem.getType());

        foItem = fol.get(1);
        assertEquals("find", foItem.getName());
        assertEquals("Person", foItem.getRetValue());
        pol = foItem.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("target", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(1);
        assertEquals("cnt", poItem.getName());
        assertEquals("int", poItem.getType());

        foItem = fol.get(2);
        assertEquals("add", foItem.getName());
        assertEquals("Person", foItem.getRetValue());
        pol = foItem.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("int", poItem.getName());
        assertEquals("int", poItem.getType());
        poItem = pol.get(1);
        assertEquals("string", poItem.getType());
    }

    @Test
    void parseCStreamClass_4() {
        String testClass = testClass4;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> eol = po.getClassList();
        assertEquals(1, eol.size());
        ClassObj co = eol.get(0);
        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        ParamObj poItem = pl.get(0);
        assertEquals("name", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pl.get(1);
        assertEquals("value", poItem.getName());
        assertEquals("int", poItem.getType());
        poItem = pl.get(2);
        assertEquals("nameAbs", poItem.getName());
        assertEquals("string", poItem.getType());
        List<FuncObj> fol = co.getFuncList();
        assertEquals(3, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("string", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(1);
        assertEquals("int", poItem.getType());

        foItem = fol.get(1);
        assertEquals("find", foItem.getName());
        assertEquals("Person", foItem.getRetValue());
        pol = foItem.getParamList();
        assertEquals(1, pol.size());
        poItem = pol.get(0);
        assertEquals("string", poItem.getName());
        assertEquals("string", poItem.getType());

        foItem = fol.get(2);
        assertEquals("add", foItem.getName());
        assertEquals("Person", foItem.getRetValue());
        pol = foItem.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("int", poItem.getName());
        assertEquals("int", poItem.getType());
        poItem = pol.get(1);
        assertEquals("string", poItem.getName());
        assertEquals("string", poItem.getType());
    }

    @Test
    void parseCStreamFunc() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = "export function transform2D(\n" +
                "\tdirection: number,\n" +
                "\tangle: number,\n" +
                "\tcalcCB: Calculate): boolean;";
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("transform2D", fo.getName());
        assertEquals("boolean", fo.getRetValue());
        List<ParamObj> pol = fo.getParamList();
        assertEquals(3, pol.size());
        ParamObj poItem = pol.get(0);
        assertEquals("direction", poItem.getName());
        assertEquals("number", poItem.getType());
        poItem = pol.get(1);
        assertEquals("angle", poItem.getName());
        assertEquals("number", poItem.getType());
        poItem = pol.get(2);
        assertEquals("calcCB", poItem.getName());
        assertEquals("Calculate", poItem.getType());
    }

    @Test
    void parseCStreamInterface() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testInterface = "export interface CallbackTest {\n" +
                "\t(msg: string): void;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testInterface);
        ParseObj po = parser.parseCStream(cStream);
        List<InterfaceObject> iol = po.getInterfaceList();
        assertEquals(1, iol.size());
        InterfaceObject ioItem = iol.get(0);
        List<FuncObj> fol = ioItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("", foItem.getName());
        assertEquals("void", foItem.getRetValue());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(1, pol.size());
        ParamObj poItem = pol.get(0);
        assertEquals("msg", poItem.getName());
        assertEquals("string", poItem.getType());
    }

    @Test
    void parseCStreamType() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testType = "export type TestShap_t = TestShape;";
        CodePointCharStream cStream = CharStreams.fromString(testType);
        ParseObj po = parser.parseCStream(cStream);
        List<TypeObj> tol = po.getTypeList();
        assertEquals(1, tol.size());
        TypeObj toItem = tol.get(0);
        assertEquals("TestShap_t", toItem.getName());
        List<String> tl = toItem.getTypeList();
        assertEquals(1, tl.size());
        assertEquals("TestShape", tl.get(0));
    }

    @Test
    void receive() {
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

    @Test
    void handleEvent() {
    }
}