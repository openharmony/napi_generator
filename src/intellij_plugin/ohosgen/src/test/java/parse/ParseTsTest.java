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
import utils.TsToken;

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

    String testClass5 = "class Employee extends Person {\n" +
            "    empCode: number;\n" +
            "\n" +
            "    constructor(name: string, code: number) {\n" +
            "        super(name); // must call super()\n" +
            "        this.empCode = code;\n" +
            "    }\n" +
            "\n" +
            "    find(name:string): Person {\n" +
            "        // execute AJAX request to find an employee from a db\n" +
            "        return new Employee(name, 1);\n" +
            "    }\n" +
            "}";

    String testInterface1 = "export interface CallbackTest {\n" +
            "\t(msg: string): void;\n" +
            "};";

    String testInterface2 = "interface IPerson {\n" +
            "    name: string;\n" +
            "}";

    String testClass6 = "interface IPerson {\n" +
            "    name: string;\n" +
            "}\n" +
            "\n" +
            "class Person implements IPerson {\n" +
            "    public publicString: string;\n" +
            "    private privateString: string;\n" +
            "    protected protectedString: string;\n" +
            "    readonly readonlyString: string;\n" +
            "    name: string;\n" +
            "\n" +
            "    constructor(name: string) {\n" +
            "        this.name = name;\n" +
            "    }\n" +
            "}";

    String testClass7 = "interface IPerson {\n" +
            "    name: string;\n" +
            "}\n" +
            "\n" +
            "class Person implements IPerson {\n" +
            "    public publicString: string;\n" +
            "    private privateString: string;\n" +
            "    protected protectedString: string;\n" +
            "    readonly readonlyString: string;\n" +
            "    name: string;\n" +
            "\n" +
            "    constructor(name: string) {\n" +
            "        this.name = name;\n" +
            "    }\n" +
            "}\n" +
            "\n" +
            "class Employee extends Person {\n" +
            "    empCode: number;\n" +
            "    currentUser: any;\n" +
            "    static pi: number = 3.14;\n" +
            "\n" +
            "    constructor(empcode: number, name:string) {\n" +
            "        super(name);\n" +
            "        this.empCode = empcode;\n" +
            "    }\n" +
            "\n" +
            "    get user() {\n" +
            "        return this.currentUser;\n" +
            "    }\n" +
            "\n" +
            "    set user(usr: any) {\n" +
            "        this.currentUser = usr;\n" +
            "    }\n" +
            "\n" +
            "    displayName():void {\n" +
            "        console.log(\"Name = \" + this.name +  \", Employee Code = \" + this.empCode);\n" +
            "    }\n" +
            "}";

    String testClass8 = "export class myClass {\n" +
            "    public async foo(    ): Promise<any> {\n" +
            "    }\n" +
            "}";

    String testClass9 = "export class NotController {\n" +
            "    @Post()\n" +
            "    notControllerPost(body) {\n" +
            "        return 'This is not an api method';\n" +
            "    }\n" +
            "}";

    String testClass10 = "export default class CustomerModel {\n" +
            "    constructor(data) {\n" +
            "        this.cardAccountId = data.cardAccountId;\n" +
            "        this.accountHolderId = data.accountHolderId;\n" +
            "        this.firstName = data.firstName;\n" +
            "        this.lastName = data.lastName;\n" +
            "    }\n" +
            "}";

    String testFunc2 = "namespace StringUtility\n" +
            "{\n" +
            "    function ToCapital(str: string): string {\n" +
            "        return str.toUpperCase();\n" +
            "    }\n" +
            "\n" +
            "    function Nemw(str: string, length: number = 0): string {\n" +
            "        return str.toUpperCase();\n" +
            "    }\n" +
            "    export function Eported(from: string, length: number = 0): string {\n" +
            "        return from.toUpperCase();\n" +
            "    }\n" +
            "\n" +
            "    export function Eported2(str: string, length: number = 0): string {\n" +
            "        return str.toUpperCase();\n" +
            "    }\n" +
            "}";

    String testFunc3 = "function Sum(x: number, y: number) : void {\n" +
            "    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value)\n" +
            "    return x + y;\n" +
            "}";

    String testFunc4 = "let greeting = function() {\n" +
            "    console.log(\"Hello TypeScript!\");\n" +
            "};";

    String testFunc5 = "let SumAnon = function(x: number, y: number) : number\n" +
            "{\n" +
            "    return x + y;\n" +
            "}";

    String testFunc6 = "function Greet(greeting: string, name?: string ) : string {\n" +
            "    return greeting + ' ' + name + '!';\n" +
            "}";

    String testFunc7 = "function terminateJob(jobId: string) {\n" +
            "    return this.http.delete<IOperationResult<any>>();\n" +
            "}";

    String testFunc8 = "function Greet2(name: string, greeting: string = \"Hello\") : string {\n" +
            "    return greeting + ' ' + name + '!';\n" +
            "}";

    String testFunc9 = "Greet(undefined, 'Steve');";

    String testFunc10 = "let sumArrow = (x: number, y: number): number => {\n" +
            "    return x + y\n" +
            "}";

    String testFunc11 = "let Print = () => console.log(\"Hello TypeScript\");";

    String testFunc12 = "let sumShortArrow = (x: number, y: number) => x + y;";

    String testFunc13 = "function Greet(greeting: string, ...names: string[]) {\n" +
            "    return greeting + \" \" + names.join(\", \") + \"!\";\n" +
            "}";

    String testFunc14 = "function Test(value: TestClass | TestClass2): value is TestClass {\n" +
            "    return (<TestClass>value).someFunction !== undefined;\n" +
            "}";

    String testFunc15 = "function buildName(firstName: string, lastName?: string) {\n" +
            "    if (lastName) return firstName + \" \" + lastName;\n" +
            "    else return firstName;\n" +
            "  }";

    String testFunc16 = "// Try passing a nested type to the function. This tests we don't match \">>\" and \">>>\" operators\n" +
            "// when closing nested types.\n" +
            "function nestedType(map: Map<string, Map<string, Set<string>>>) {\n" +
            "    // Check that we can parse these too.\n" +
            "    let a = 12;\n" +
            "    let b = a >> 5;\n" +
            "    let c = b >>> 5;\n" +
            "}";

    String testFunc17 = "// Function parameter lists can have a trailing comma.\n" +
            "// See https://github.com/Microsoft/TypeScript/issues/16152\n" +
            "function TrailingComma(arg1: string, arg2: number,) {}";

    String testFunc18 = "var myFunction = function(arg1: string, arg2: number,) {};";


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
    void parseCStreamClass_5() {
        String testClass = testClass5;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Employee", coItem.getName());
        List<String> hnl = coItem.getHeritageNameList();
        assertEquals(1, hnl.size());
        assertEquals("Person", hnl.get(0));
        List<String> htl = coItem.getHeritageTypeList();
        assertEquals(1, htl.size());
        assertEquals("extends", htl.get(0));
        List<ParamObj> pol = coItem.getParamList();
        assertEquals(1, pol.size());
        ParamObj poItem = pol.get(0);
        assertEquals("empCode", poItem.getName());
        assertEquals("number", poItem.getType());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(2, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        assertEquals("void", foItem.getRetValue());
        pol = foItem.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("name", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(1);
        assertEquals("code", poItem.getName());
        assertEquals("number", poItem.getType());
        foItem = fol.get(1);
        assertEquals("find", foItem.getName());
        assertEquals("Person", foItem.getRetValue());
        pol = foItem.getParamList();
        assertEquals(1, pol.size());
        poItem = pol.get(0);
        assertEquals("name", poItem.getName());
        assertEquals("string", poItem.getType());
    }

    @Test
    void parseCStreamClass_6() {
        String testClass = testClass6;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Person", coItem.getName());
        List<String> htl = coItem.getHeritageTypeList();
        List<String> hnl = coItem.getHeritageNameList();
        assertEquals("implements", htl.get(0));
        assertEquals("IPerson", hnl.get(0));
        List<ParamObj> pol = coItem.getParamList();
        assertEquals(5, pol.size());
        ParamObj poItem = pol.get(0);
        assertEquals("string", poItem.getType());
        assertEquals("publicString", poItem.getName());
        assertEquals("public", poItem.getQualifier());
        poItem = pol.get(1);
        assertEquals("string", poItem.getType());
        assertEquals("privateString", poItem.getName());
        assertEquals("private", poItem.getQualifier());
        poItem = pol.get(2);
        assertEquals("string", poItem.getType());
        assertEquals("protectedString", poItem.getName());
        assertEquals("protected", poItem.getQualifier());
        poItem = pol.get(3);
        assertEquals("string", poItem.getType());
        assertEquals("readonlyString", poItem.getName());
        assertEquals("readonly", poItem.getQualifier());
        poItem = pol.get(4);
        assertEquals("string", poItem.getType());
        assertEquals("name", poItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        assertEquals("void", foItem.getRetValue());
        pol = foItem.getParamList();
        assertEquals(1, pol.size());
        poItem = pol.get(0);
        assertEquals("name", poItem.getName());
        assertEquals("string", poItem.getType());
    }

    @Test
    void parseCStreamClass_7_1() {
        String testClass = testClass7;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(2, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Person", coItem.getName());
        List<String> hnl = coItem.getHeritageNameList();
        assertEquals(1, hnl.size());
        assertEquals("IPerson", hnl.get(0));
        List<String> htl = coItem.getHeritageTypeList();
        assertEquals(1, htl.size());
        assertEquals("implements", htl.get(0));
        List<ParamObj> pol = coItem.getParamList();
        assertEquals(5, pol.size());
        ParamObj poItem = pol.get(0);
        assertEquals("public", poItem.getQualifier());
        assertEquals("publicString", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(1);
        assertEquals("private", poItem.getQualifier());
        assertEquals("privateString", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(2);
        assertEquals("protected", poItem.getQualifier());
        assertEquals("protectedString", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(3);
        assertEquals("readonly", poItem.getQualifier());
        assertEquals("readonlyString", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(4);
        assertEquals("name", poItem.getName());
        assertEquals("string", poItem.getType());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        assertEquals("void", foItem.getRetValue());
    }

    @Test
    void parseCStreamClass_7_2() {
        CodePointCharStream cStream = CharStreams.fromString(testClass7);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(2, col.size());

        ClassObj coItem = col.get(1);
        assertEquals("Employee", coItem.getName());
        List<String> hnl = coItem.getHeritageNameList();
        assertEquals(1, hnl.size());
        assertEquals("Person", hnl.get(0));
        List<String> htl = coItem.getHeritageTypeList();
        assertEquals(1, htl.size());
        assertEquals("extends", htl.get(0));
        List<ParamObj> pol = coItem.getParamList();
        assertEquals(3, pol.size());
        ParamObj poItem = pol.get(0);
        assertEquals("empCode", poItem.getName());
        assertEquals("number", poItem.getType());
        assertEquals("currentUser", pol.get(1).getName());
        assertEquals("any", pol.get(1).getType());
        assertEquals("pi", pol.get(2).getName());
        assertEquals("number", pol.get(2).getType());
        assertEquals("static", pol.get(2).getQualifier());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(4, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        pol = foItem.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("empcode", poItem.getName());
        assertEquals("number", poItem.getType());
        poItem = pol.get(1);
        assertEquals("name", poItem.getName());
        assertEquals("string", poItem.getType());
        foItem = fol.get(1);
        assertEquals("user", foItem.getName());
        assertEquals("get", foItem.getType());
        pol = foItem.getParamList();
        assertEquals(0, pol.size());
        foItem = fol.get(2);
        assertEquals("user", foItem.getName());
        assertEquals("set", foItem.getType());
        pol = foItem.getParamList();
        assertEquals(1, pol.size());
        assertEquals("usr", pol.get(0).getName());
        assertEquals("any", pol.get(0).getType());
        assertEquals("displayName", fol.get(3).getName());
        assertEquals(0, fol.get(3).getParamList().size());
    }

    @Test
    void parseCStreamClass_8() {
        String testClass = testClass8;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("myClass", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("foo", foItem.getName());
        assertEquals("Promise<any>", foItem.getRetValue());
        assertEquals("async", foItem.getType());
        assertEquals("public", foItem.getAccessor());
    }

    @Test
    void parseCStreamClass_9() {
        String testClass = testClass9;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("NotController", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("notControllerPost", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(1, pol.size());
        assertEquals("body", pol.get(0).getName());
    }

    @Test
    void parseCStreamClass_10() {
        String testClass = testClass10;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("CustomerModel", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(1, pol.size());
        assertEquals("data", pol.get(0).getName());
    }

    @Test
    void parseCStreamFunc_1() {
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
    void parseCStreamFunc_2() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc2;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(4, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("ToCapital", fo.getName());
        assertEquals("string", fo.getRetValue());
        List<ParamObj> pol = fo.getParamList();
        assertEquals(1, pol.size());
        ParamObj poItem = pol.get(0);
        assertEquals("str", poItem.getName());
        assertEquals("string", poItem.getType());

        fo = fol.get(1);
        assertEquals("Nemw", fo.getName());
        assertEquals("string", fo.getRetValue());
        pol = fo.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("str", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(1);
        assertEquals("length", poItem.getName());
        assertEquals("number", poItem.getType());

        fo = fol.get(2);
        assertEquals("Eported", fo.getName());
        assertEquals("string", fo.getRetValue());
        pol = fo.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("from", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(1);
        assertEquals("length", poItem.getName());
        assertEquals("number", poItem.getType());

        fo = fol.get(3);
        assertEquals("Eported2", fo.getName());
        assertEquals("string", fo.getRetValue());
        pol = fo.getParamList();
        assertEquals(2, pol.size());
        poItem = pol.get(0);
        assertEquals("str", poItem.getName());
        assertEquals("string", poItem.getType());
        poItem = pol.get(1);
        assertEquals("length", poItem.getName());
        assertEquals("number", poItem.getType());
    }

    @Test
    void parseCStreamFunc_3() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc3;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("Sum", fol.get(0).getName());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("x", pol.get(0).getName());
        assertEquals("number", pol.get(0).getType());
        assertEquals("y", pol.get(1).getName());
        assertEquals("number", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_4() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc4;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("greeting", fol.get(0).getAlias());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(0, pol.size());
    }

    @Test
    void parseCStreamFunc_5() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc5;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("SumAnon", fol.get(0).getAlias());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("x", pol.get(0).getName());
        assertEquals("number", pol.get(0).getType());
        assertEquals("y", pol.get(1).getName());
        assertEquals("number", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_6() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc6;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("Greet", fol.get(0).getName());
        assertEquals("string", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("greeting", pol.get(0).getName());
        assertEquals("string", pol.get(0).getType());
        assertEquals("name", pol.get(1).getName());
        assertEquals("string", pol.get(1).getType());
        assertEquals(TsToken.TS_TOKEN_OPTIONAL, pol.get(1).getDecorator());
    }

    @Test
    void parseCStreamFunc_7() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc7;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("terminateJob", fol.get(0).getName());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("jobId", pol.get(0).getName());
        assertEquals("string", pol.get(0).getType());

    }

    @Test
    void parseCStreamFunc_8() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc8;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("Greet2", fol.get(0).getName());
        assertEquals("string", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("name", pol.get(0).getName());
        assertEquals("string", pol.get(0).getType());
        assertEquals("greeting", pol.get(1).getName());
        assertEquals("string", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_9() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc9;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("Greet", fol.get(0).getAlias());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("undefined", pol.get(0).getName());
        assertEquals("", pol.get(0).getType());
        assertEquals("'Steve'", pol.get(1).getName());
        assertEquals("", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_10() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc10;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("sumArrow", fol.get(0).getAlias());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("x", pol.get(0).getName());
        assertEquals("number", pol.get(0).getType());
        assertEquals("y", pol.get(1).getName());
        assertEquals("number", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_11() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc11;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
//        assertEquals("Greet", fol.get(0).getName());
//        assertEquals("number", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(0, pol.size());
//        assertEquals("x", pol.get(0).getName());
//        assertEquals("number", pol.get(0).getType());
//        assertEquals("y", pol.get(1).getName());
//        assertEquals("number", pol.get(1).getType());

    }

    @Test
    void parseCStreamFunc_12() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc12;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("sumShortArrow", fol.get(0).getAlias());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("x", pol.get(0).getName());
        assertEquals("number", pol.get(0).getType());
        assertEquals("y", pol.get(1).getName());
        assertEquals("number", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_13() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc13;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("Greet", fol.get(0).getName());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("greeting", pol.get(0).getName());
        assertEquals("string", pol.get(0).getType());
        assertEquals("names", pol.get(1).getName());
        assertEquals("string[]", pol.get(1).getType());
        assertEquals(TsToken.TS_TOKEN_REST_PARAM, pol.get(1).getDecorator());
    }

    @Test
    void parseCStreamFunc_14() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc14;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("Test", fol.get(0).getName());
        assertEquals("boolean", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("value", pol.get(0).getName());
        assertEquals("TestClass|TestClass2", pol.get(0).getType());

    }

    @Test
    void parseCStreamFunc_15() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc15;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("buildName", fol.get(0).getName());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("firstName", pol.get(0).getName());
        assertEquals("string", pol.get(0).getType());
        assertEquals(TsToken.TS_TOKEN_REQUIRED, pol.get(0).getDecorator());
        assertEquals("lastName", pol.get(1).getName());
        assertEquals("string", pol.get(1).getType());
        assertEquals(TsToken.TS_TOKEN_OPTIONAL, pol.get(1).getDecorator());
    }

    @Test
    void parseCStreamFunc_16() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc16;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("nestedType", fol.get(0).getName());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("map", pol.get(0).getName());
        assertEquals("Map<string,Map<string,Set<string>>>", pol.get(0).getType());
    }

    @Test
    void parseCStreamFunc_17() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc17;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("TrailingComma", fol.get(0).getName());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("arg1", pol.get(0).getName());
        assertEquals("string", pol.get(0).getType());
        assertEquals("arg2", pol.get(1).getName());
        assertEquals("number", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_18() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testFunc = testFunc18;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("myFunction", fol.get(0).getAlias());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("arg1", pol.get(0).getName());
        assertEquals("string", pol.get(0).getType());
        assertEquals("arg2", pol.get(1).getName());
        assertEquals("number", pol.get(1).getType());
    }

    @Test
    void parseCStreamInterface() {
        ParseBase parser = ParseFactory.getParser("ts");
        String testInterface = testInterface1;
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