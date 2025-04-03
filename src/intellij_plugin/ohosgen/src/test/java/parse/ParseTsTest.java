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

    String testInterface1 = "export interface CallbackTest {\n" +
            "\t(msg: string): void;\n" +
            "};";

    String testInterface2 = "interface IPerson {\n" +
            "    name: string;\n" +
            "}";

    String testInterface3 = "interface IKeyValueProcessor<T, U>\n" +
            "{\n" +
            "    process(key: T, val: U): void;\n" +
            "};";

    String testInterface4 = "interface IProcessor\n" +
            "{\n" +
            "    result:T;\n" +
            "    process(a: T, b: T) => T;\n" +
            "}";

    String testInterface5 = "interface KeyPair<T, U> {\n" +
            "    key: T;\n" +
            "    value: U;\n" +
            "}";

    String testInterface6 = "interface KeyValueProcessor<T, U>\n" +
            "{\n" +
            "    (key: T, val: U): void;\n" +
            "};";

    String testInterface7 = "export interface IPerson {\n" +
            "    name: string;\n" +
            "    gender: string;\n" +
            "}";

    String testInterface8 = "interface IEmployee extends IPerson{\n" +
            "    empCode: number;\n" +
            "    readonly empName: string;\n" +
            "    empDept?:string;\n" +
            "    getSalary: (number) => number; // arrow function\n" +
            "    getManagerName(number): string;\n" +
            "}";

    String testInterface9 = "declare interface IRouteInfo {\n" +
            "    path: string;\n" +
            "    title: string;\n" +
            "    icon: string;\n" +
            "    class: string;\n" +
            "    allowAnonymous: boolean;\n" +
            "}";

    String testInterface10 = "interface KeyPair {\n" +
            "    key: number;\n" +
            "    value: string;\n" +
            "}\n";

    String testInterface11 = "interface NumList {\n" +
            "    [index:string]:string\n" +
            "}";

    String testInterface12 = "interface IStringList {\n" +
            "    [index:string]:string\n" +
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

    String testFunc16 = "// Try passing a nested type to the function. " +
            " This tests we don't match \">>\" and \">>>\" operators\n" +
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

    String testFunc19 = "function getArray<T>(items : T[] ) : T[] {\n" +
            "    return new Array<T>().concat();\n" +
            "}";

    String testFunc20 = "let myNumArr = getArray<Test>([100, 200, 300]);";

    String testFunc21 = "let myStrArr = getArray<string>([\"Hello\", \"World\"]);";

    String testFunc22 = "function displayType<T, U>(id:T, name:U): void {\n" +
            "    console.log(typeof(id) + \", \" + typeof(name));\n" +
            "}";

    String testFunc23 = "function displayTypeNon<T>(id:T, name:string): void {\n" +
            "    console.log(typeof(id) + \", \" + typeof(name));\n" +
            "}";

    String testFunc24 = "function displayNames<T>(names:T[]): void {\n" +
            "    console.log(names.join(\", \"));\n" +
            "}";

    String testFunc25 = "function display<T extends Person>(per: T): void {\n" +
            "    console.log(`${ per.firstName} ${per.lastName}` );\n" +
            "}";

    String testFunc26 = "function genericWithKeyOf<T, K extends keyof T>(list: T[], field: K): T[] {}";

    String testFunc27 = "function genericParameterWithDefault<T = DefaultType>(field: T) {}";

    String testFunc28 = "function processNumKeyPairs(key:number, value:number):void {\n" +
            "    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value)\n" +
            "}";

    String testFunc29 = "function processEntity(e?: Entity) {\n" +
            "  let s = e!.name;\n" +
            "  let t = e.name;\n" +
            "  let o = e!.obj!.i;\n" +
            "  let p = e?.name;\n" +
            "\n" +
            "  let i = p!;\n" +
            "}";

    String testType2 = "// TypeAlias\n" +
            "type Employee = {\n" +
            "     type: \"employee\" | \"manager\";\n" +
            "     typeId: 1 | 2;\n" +
            "     id: string;\n" +
            "     name: string;\n" +
            "     address?: string; // Optional\n" +
            "     phone?: string | null;\n" +
            "}";

    String testType3 = "type EmployeeType =\n" +
            "     | \"employee\"\n" +
            "     | \"manager\";";

    String testType4 = "type EmployeeNameType = Employee[\"name\"];";

    String testType5 = "type EmployeeMap = Map<string, string>;";

    String testType6 = "type EmployeeMapKey = keyof EmployeeMap;";

    String testVariable1 = "let employeeName = \"John\";";

    String testVariable2 = "let employeeName:string = \"John\";";

    String testVariable3 = "var num1:number = 1;";

    String testVariable4 = "const playerCodes = {\n" +
            "    player1 : 9,\n" +
            "    player2 : 10,\n" +
            "    player3 : 13,\n" +
            "    player4 : 20\n" +
            "};\n" +
            "playerCodes.player2 = 11; // OK";

    String testVariable5 = "playerCodes = {     " +
            "//Compiler Error: Cannot assign to playerCodes because it is a constant or read-only\n" +
            "    player1 : 50,   // Modified value\n" +
            "    player2 : 10,\n" +
            "    player3 : 13,\n" +
            "    player4 : 20\n" +
            "};";

    String testVariable6 = "playerCodesArray = {     " +
        "//Compiler Error: Cannot assign to playerCodes because it is a constant or read-only\n" +
        "    player1 : 50,   // Modified value\n" +
        "    player2 : playerCodes[Test],\n" +
        "    player3 : 13,\n" +
        "    player4 : 20\n" +
        "};";

    String testVariable7 = "export const ROUTES: any[] = [\n" +
        "{path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '', allowAnonymous: false},\n" +
        "{path: '/deals', title: 'Deals', icon: 'assignment', class: '', allowAnonymous: false},\n" +
        "{path: '/pipeline', title: 'Pipeline', icon: 'timeline', class: '', allowAnonymous: false},\n" +
        "{path: '/language-resolver', title: 'Language', icon: 'translate', class: '', allowAnonymous: false},\n" +
        "{path: '/commit-analysis', title: 'Commit History', icon: 'tune', class: '', allowAnonymous: false},\n" +
        "{path: '/login', title: 'Log In', icon: 'lock', class: '', allowAnonymous: true},\n" +
        "];";

    String testVariable8 = "export const Components = _.chain([_.values(ROUTES) as any[]])\n" +
            "       .flatten()\n" +
            "       .filter((item) => item.name && (item.name.toLowerCase().endsWith('component')))\n" +
            "       .value();";

    String testVariable9 = "var fileLanguages = " +
            "_.uniqBy([...this.fileLanguages, ...Components], p => p.fileId);";

    String testVariable10 = "var languageMap = " +
            "new Map(fileLanguages.map(lang => [lang.id, lang] as [string, ILanguage]));";

    String testVariable11 = "let schema = mapEnumToSchema(Joi.boolean())";

    String testVariable12 = "const codesByType = Joi.object()\n" +
            "  .keys({\n" +
            "    type: Joi.string().required(),\n" +
            "    limit: Joi.number().optional(),\n" +
            "    skip: Joi.number().optional(),\n" +
            "  })\n" +
            "  .required();";

    String testVariable13 = "const post = (...args: any[]) => {\n" +
            "};";

    String testVariable14 = "const function = ([x]: any) => x;";

    @Test
    void parseFile() {
    }

    @Test
    void parseContent() {
    }

    @Test
    void parseCStreamEnum() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
    void parseCStreamFunc_1() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc11;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(0, pol.size());
    }

    @Test
    void parseCStreamFunc_12() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
    void parseCStreamFunc_19() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc19;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("getArray", fol.get(0).getName());
        assertEquals("T[]", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("items", pol.get(0).getName());
        assertEquals("T[]", pol.get(0).getType());
    }

    @Test
    void parseCStreamFunc_20() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc20;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("getArray", fol.get(0).getName());
        assertEquals("myNumArr", fol.get(0).getAlias());
        assertEquals("void", fol.get(0).getRetValue());
        assertEquals("<Test>", fol.get(0).getTemplate(0));
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("[100,200,300]", pol.get(0).getStrValue(0));

    }

    @Test
    void parseCStreamFunc_21() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc21;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("getArray", fol.get(0).getName());
        assertEquals("myStrArr", fol.get(0).getAlias());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("[\"Hello\",\"World\"]", pol.get(0).getStrValue(0));

    }

    @Test
    void parseCStreamFunc_22() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc22;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("displayType", fol.get(0).getName());
        assertEquals("T", fol.get(0).getTemplate(0));
        assertEquals("U", fol.get(0).getTemplate(1));
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("id", pol.get(0).getName());
        assertEquals("T", pol.get(0).getType());
        assertEquals("name", pol.get(1).getName());
        assertEquals("U", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_23() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc23;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("displayTypeNon", fol.get(0).getName());
        assertEquals("T", fol.get(0).getTemplate(0));
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("id", pol.get(0).getName());
        assertEquals("T", pol.get(0).getType());
        assertEquals("name", pol.get(1).getName());
        assertEquals("string", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_24() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc24;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("displayNames", fol.get(0).getName());
        assertEquals("T", fol.get(0).getTemplate(0));
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("names", pol.get(0).getName());
        assertEquals("T[]", pol.get(0).getType());
    }

    @Test
    void parseCStreamFunc_25() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc25;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("display", fol.get(0).getName());
        assertEquals("T", fol.get(0).getTemplate(0));
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("per", pol.get(0).getName());
        assertEquals("T", pol.get(0).getType());
    }

    @Test
    void parseCStreamFunc_26() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc26;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("genericWithKeyOf", fol.get(0).getName());
        assertEquals("T", fol.get(0).getTemplate(0));
        assertEquals("K", fol.get(0).getTemplate(1));
        assertEquals("T[]", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("list", pol.get(0).getName());
        assertEquals("T[]", pol.get(0).getType());
        assertEquals("field", pol.get(1).getName());
        assertEquals("K", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_27() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc27;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("genericParameterWithDefault", fol.get(0).getName());
        assertEquals("T", fol.get(0).getTemplate(0));
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("field", pol.get(0).getName());
        assertEquals("T", pol.get(0).getType());
    }

    @Test
    void parseCStreamFunc_28() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc28;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("processNumKeyPairs", fol.get(0).getName());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(2, pol.size());
        assertEquals("key", pol.get(0).getName());
        assertEquals("number", pol.get(0).getType());
        assertEquals("value", pol.get(1).getName());
        assertEquals("number", pol.get(1).getType());
    }

    @Test
    void parseCStreamFunc_29() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
        String testFunc = testFunc29;
        CodePointCharStream cStream = CharStreams.fromString(testFunc);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("processEntity", fol.get(0).getName());
        assertEquals("void", fol.get(0).getRetValue());
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(1, pol.size());
        assertEquals("e", pol.get(0).getName());
        assertEquals("Entity", pol.get(0).getType());
        assertEquals(TsToken.TS_TOKEN_OPTIONAL, pol.get(0).getDecorator());
    }

    @Test
    void parseCStreamInterface() {
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
        ParseBase parser = ParseFactory.getParser("ts2cpp");
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
}