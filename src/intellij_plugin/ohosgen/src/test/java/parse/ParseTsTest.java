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

    String testClass11 = "class KeyValuePair<T,U>\n" +
            "{\n" +
            "    private key: T;\n" +
            "    private val: U;\n" +
            "\n" +
            "    setKeyValue(key: T, val: U): void {\n" +
            "        this.key = key;\n" +
            "        this.val = val;\n" +
            "    }\n" +
            "\n" +
            "    display():void {\n" +
            "        console.log(`Key = ${this.key}, val = ${this.val}`);\n" +
            "    }\n" +
            "}";

    String testClass12 = "class kvProcessor<T, U> implements IKeyValueProcessor<T, U>\n" +
            "{\n" +
            "    process(key:T, val:U):void {\n" +
            "        console.log(`Key = ${key}, val = ${val}`);\n" +
            "    }\n" +
            "}";

    String testClass13 = "class Employee implements IEmployee {\n" +
            "    empCode: number;\n" +
            "    name: string;\n" +
            "\n" +
            "    constructor(code: number, name: string) {\n" +
            "        this.empCode = code;\n" +
            "        this.name = name;\n" +
            "    }\n" +
            "\n" +
            "    getSalary(empCode:number):number {\n" +
            "        return 20000;\n" +
            "    }\n" +
            "}";

    String testClass14 = "class Shape {\n" +
        "    constructor (id, x, y) {\n" +
        "        this.id = id\n" +
        "        this.move(x, y)\n" +
        "    }\n" +
        "    move (x, y) {\n" +
        "        this.x = x\n" +
        "        this.y = y\n" +
        "    }\n" +
        "}";

    String testClass15 = "class Rectangle extends Shape {\n" +
        "    constructor (id, x, y, width, height) {\n" +
        "        super(id, x, y)\n" +
        "        this.width  = width\n" +
        "        this.height = height\n" +
        "    }\n" +
        "}";

    String testClass16 = "class Circle extends Shape {\n" +
        "    constructor (id, x, y, radius) {\n" +
        "        super(id, x, y)\n" +
        "        this.radius = radius\n" +
        "    }\n" +
        "}";

    String testClass17 = "var aggregation = (baseClass, ...mixins) => {\n" +
        "let base = class _Combined extends baseClass {\n" +
        "    constructor (...args) {\n" +
        "        super(...args)\n" +
        "        mixins.forEach((mixin) => {\n" +
        "            mixin.prototype.initializer.call(this)\n" +
        "        })\n" +
        "    }\n" +
        "}\n" +
        "let copyProps = (target, source) => {\n" +
        "    Object.getOwnPropertyNames(source)\n" +
        "    .concat(Object.getOwnPropertySymbols(source))\n" +
        "    .forEach((prop) => {\n" +
        "    if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))\n" +
        "            return\n" +
        "        Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))\n" +
        "    })\n" +
        "}\n" +
        "mixins.forEach((mixin) => {\n" +
        "    copyProps(base.prototype, mixin.prototype)\n" +
        "    copyProps(base, mixin)\n" +
        "})\n" +
        "return base\n" +
        "}";

    String testClass18 = "class Colored {\n" +
        "    initializer ()     { this._color = \"white\" }\n" +
        "    get color ()       { return this._color }\n" +
        "    set color (v)      { this._color = v }\n" +
        "}";

    String testClass19 = "class ZCoord {\n" +
        "    initializer ()     { this._z = 0 }\n" +
        "    get z ()           { return this._z }\n" +
        "    set z (v)          { this._z = v }\n" +
        "}";

    String testClass20 = "class Shape {\n" +
        "    constructor (x, y) { this._x = x; this._y = y }\n" +
        "    get x ()           { return this._x }\n" +
        "    set x (v)          { this._x = v }\n" +
        "    get y ()           { return this._y }\n" +
        "    set y (v)          { this._y = v }\n" +
        "}";

    String testClass21 = "class Rectangle extends aggregation(Shape, Colored, ZCoord) {}";

    String testClass22 = "class Shape {\n" +
        "    // …\n" +
        "    toString () {\n" +
        "        return `Shape(${this.id})`\n" +
        "    }\n" +
        "}";

    String testClass23 = "class Rectangle extends Shape {\n" +
        "    constructor (id, x, y, width, height) {\n" +
        "        super(id, x, y)\n" +
        "        // …\n" +
        "    }\n" +
        "\n" +
        "    toString () {\n" +
        "        return \"Rectangle > \" + super.toString()\n" +
        "    }\n" +
        "}";

    String testClass24 = "class Circle extends Shape {\n" +
        "    constructor (id, x, y, radius) {\n" +
        "        super(id, x, y)\n" +
        "        // …\n" +
        "    }\n" +
        "    toString () {\n" +
        "        return \"Circle > \" + super.toString()\n" +
        "    }\n" +
        "}";

    String testClass25 = "class Rectangle extends Shape {\n" +
        "    // …\n" +
        "    static contextTypes = {\n" +
        "        router: PropTypes.object,\n" +
        "    };\n" +
        "\n" +
        "    static defaultRectangle () {\n" +
        "        return new Rectangle(\"default\", 0, 0, 100, 100)\n" +
        "    }\n" +
        "}";

    String testClass26 = "class Circle extends Shape {\n" +
        "    // …\n" +
        "    static defaultCircle () {\n" +
        "        return new Circle(\"default\", 0, 0, 100)\n" +
        "    }\n" +
        "}";

    String testClass27 = "class Rectangle {\n" +
        "    constructor (width, height) {\n" +
        "        this._width  = width\n" +
        "        this._height = height\n" +
        "    }\n" +
        "    set width  (width)  { this._width = width               }\n" +
        "    get width  ()       { return this._width                }\n" +
        "    set height (height) { this._height = height             }\n" +
        "    get height ()       { return this._height               }\n" +
        "    get area   ()       { return this._width * this._height }\n" +
        "}";

    String testClass28 = "class A {\n" +
        "    ;\n" +
        "}";

    String testClass29 = "class B {\n" +
        "    get [runtimeCalc]() {return 1};\n" +
        "    set [runtimeCalc](p) {};\n" +
        "    get 'string as key'() {};\n" +
        "}";

    String testClass30 = "const PREFIX = \"prefix\";" +
        "class ClassWithField {\n" +
        "  field;\n" +
        "  fieldWithInitializer = \"instance field\";\n" +
        "  [`${PREFIX}Field`] = \"prefixed field\";\n" +
        "}";

    String testClass31 = "class ClassWithStaticInitializationBlock {\n" +
        "  static staticProperty1 = 'Property 1';\n" +
        "  static staticProperty2;\n" +
        "  static {\n" +
        "    this.staticProperty2 = 'Property 2';\n" +
        "  }\n" +
        "}";

    String testClass32 = "export class Employee {\n" +
        "    empCode: number;\n" +
        "    empName: string;\n" +
        "    constructor(name: string, code: number) {\n" +
        "        this.empName = name;\n" +
        "        this.empCode = code;\n" +
        "    }\n" +
        "    displayEmployee() {\n" +
        "        console.log (\"Employee Code: \" + this.empCode + \", Employee Name: \" + this.empName );\n" +
        "    }\n" +
        "}";

    String testClass33 = "class O{\n" +
        "    i = 1;\n" +
        "}";

    String testClass34 = "class Entity{\n" +
        "    name = \"test\";\n" +
        "    obj = new O();\n" +
        "}\n";

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
        assertEquals("void", poItem.getType());
        poItem = pol.get(1);
        assertEquals("int", poItem.getName());
        assertEquals("void", poItem.getType());

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
    void parseCStreamClass_11() {
        String testClass = testClass11;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("KeyValuePair", coItem.getName());
        assertEquals(2, coItem.getParamList().size());
        assertEquals("T", coItem.getTempList().get(0));
        assertEquals("U", coItem.getTempList().get(1));

        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(2, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("setKeyValue", foItem.getName());
        assertEquals("void", foItem.getRetValue());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(2, pol.size());
        assertEquals("key", pol.get(0).getName());
        assertEquals("T", pol.get(0).getType());
        assertEquals("val", pol.get(1).getName());
        assertEquals("U", pol.get(1).getType());

        pol = coItem.getParamList();
        assertEquals(2, pol.size());
        assertEquals("key", pol.get(0).getName());
        assertEquals("T", pol.get(0).getType());
        assertEquals("private", pol.get(0).getQualifier());

        assertEquals("val", pol.get(1).getName());
        assertEquals("U", pol.get(1).getType());
        assertEquals("private", pol.get(1).getQualifier());
    }

    @Test
    void parseCStreamClass_12() {
        String testClass = testClass12;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("kvProcessor", coItem.getName());
                assertEquals("T", coItem.getTempList().get(0));
        assertEquals("U", coItem.getTempList().get(1));
        assertEquals("IKeyValueProcessor", coItem.getHeritageNameList().get(0));
        assertEquals("implements", coItem.getHeritageTypeList().get(0));
        assertEquals("T", coItem.getHeritageTemplateList().get(0));
        assertEquals("U", coItem.getHeritageTemplateList().get(1));

        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("process", foItem.getName());
        assertEquals("", foItem.getType());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(2, pol.size());
        assertEquals("key", pol.get(0).getName());
        assertEquals("T", pol.get(0).getType());
        assertEquals("val", pol.get(1).getName());
        assertEquals("U", pol.get(1).getType());
    }

    @Test
    void parseCStreamClass_13() {
        String testClass = testClass13;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Employee", coItem.getName());
        assertEquals("IEmployee", coItem.getHeritageNameList().get(0));
        assertEquals("implements", coItem.getHeritageTypeList().get(0));

        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(2, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(2, pol.size());
        assertEquals("code", pol.get(0).getName());
        assertEquals("number", pol.get(0).getType());
        assertEquals("name", pol.get(1).getName());
        assertEquals("string", pol.get(1).getType());

        foItem = fol.get(1);
        assertEquals("getSalary", foItem.getName());
        assertEquals("number", foItem.getRetValue());
        pol = foItem.getParamList();
        assertEquals(1, pol.size());
        assertEquals("empCode", pol.get(0).getName());
        assertEquals("number", pol.get(0).getType());

        pol = coItem.getParamList();
        assertEquals("empCode", pol.get(0).getName());
        assertEquals("number", pol.get(0).getType());
        assertEquals("name", pol.get(1).getName());
        assertEquals("string", pol.get(1).getType());
    }

    @Test
    void parseCStreamClass_14() {
        String testClass = testClass14;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Shape", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(2, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(3, pol.size());
        assertEquals("id", pol.get(0).getName());
        assertEquals("x", pol.get(1).getName());
        assertEquals("y", pol.get(2).getName());
        foItem = fol.get(1);
        assertEquals("move", foItem.getName());
        pol = foItem.getParamList();
        assertEquals(2, pol.size());
        assertEquals("x", pol.get(0).getName());
        assertEquals("y", pol.get(1).getName());
    }

    @Test
    void parseCStreamClass_15() {
        String testClass = testClass15;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Rectangle", coItem.getName());
        assertEquals("Shape", coItem.getHeritageNameList().get(0));
        assertEquals("extends", coItem.getHeritageTypeList().get(0));

        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(5, pol.size());
        assertEquals("id", pol.get(0).getName());
        assertEquals("x", pol.get(1).getName());
        assertEquals("y", pol.get(2).getName());
        assertEquals("width", pol.get(3).getName());
        assertEquals("height", pol.get(4).getName());

    }

    @Test
    void parseCStreamClass_16() {
        String testClass = testClass16;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Circle", coItem.getName());
        assertEquals("Shape", coItem.getHeritageNameList().get(0));
        assertEquals("extends", coItem.getHeritageTypeList().get(0));

        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(4, pol.size());
        assertEquals("id", pol.get(0).getName());
        assertEquals("x", pol.get(1).getName());
        assertEquals("y", pol.get(2).getName());
        assertEquals("radius", pol.get(3).getName());
    }

    @Test
    void parseCStreamClass_17() {
        String testClass = testClass17;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("_Combined", coItem.getName());
        assertEquals("baseClass", coItem.getHeritageNameList().get(0));
        assertEquals("extends", coItem.getHeritageTypeList().get(0));
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        assertEquals("constructor", fol.get(0).getName());

    }

    @Test
    void parseCStreamClass_18() {
        String testClass = testClass18;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Colored", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(3, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("initializer", foItem.getName());
        foItem = fol.get(1);
        assertEquals("color", foItem.getName());
        assertEquals("get", foItem.getType());
        foItem = fol.get(2);
        assertEquals("color", foItem.getName());
        assertEquals("set", foItem.getType());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(1, pol.size());
        assertEquals("v", pol.get(0).getName());
    }

    @Test
    void parseCStreamClass_19() {
        String testClass = testClass19;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("ZCoord", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(3, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("initializer", foItem.getName());
        foItem = fol.get(1);
        assertEquals("z", foItem.getName());
        assertEquals("get", foItem.getType());
        foItem = fol.get(2);
        assertEquals("z", foItem.getName());
        assertEquals("set", foItem.getType());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals("v", pol.get(0).getName());
    }

    @Test
    void parseCStreamClass_20() {
        String testClass = testClass20;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Shape", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(5, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(2, pol.size());
        assertEquals("x", pol.get(0).getName());
        assertEquals("y", pol.get(1).getName());

        foItem = fol.get(1);
        assertEquals("x", foItem.getName());
        assertEquals("get", foItem.getType());

        foItem = fol.get(2);
        assertEquals("x", foItem.getName());
        assertEquals("set", foItem.getType());
        pol = foItem.getParamList();
        assertEquals("v", pol.get(0).getName());

        foItem = fol.get(3);
        assertEquals("y", foItem.getName());
        assertEquals("get", foItem.getType());

        foItem = fol.get(4);
        assertEquals("y", foItem.getName());
        assertEquals("set", foItem.getType());
        pol = foItem.getParamList();
        assertEquals("v", pol.get(0).getName());
    }

    @Test
    void parseCStreamClass_21() {
        String testClass = testClass21;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        /**
         * aggregation 是JavaScript支持的多继承方法，ts不支持
         */
        assertEquals(0, col.size());

    }

    @Test
    void parseCStreamClass_22() {
        String testClass = testClass22;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Shape", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("toString", foItem.getName());

    }

    @Test
    void parseCStreamClass_23() {
        String testClass = testClass23;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Rectangle", coItem.getName());
        assertEquals("Shape", coItem.getHeritageNameList().get(0));
        assertEquals("extends", coItem.getHeritageTypeList().get(0));

        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(2, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(5, pol.size());
        assertEquals("id", pol.get(0).getName());
        assertEquals("x", pol.get(1).getName());
        assertEquals("y", pol.get(2).getName());
        assertEquals("width", pol.get(3).getName());
        assertEquals("height", pol.get(4).getName());
        foItem = fol.get(1);
        assertEquals("toString", foItem.getName());

    }

    @Test
    void parseCStreamClass_24() {
        String testClass = testClass24;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Circle", coItem.getName());
        assertEquals("Shape", coItem.getHeritageNameList().get(0));
        assertEquals("extends", coItem.getHeritageTypeList().get(0));

        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(2, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(4, pol.size());
        assertEquals("id", pol.get(0).getName());
        assertEquals("x", pol.get(1).getName());
        assertEquals("y", pol.get(2).getName());
        assertEquals("radius", pol.get(3).getName());

        foItem = fol.get(1);
        assertEquals("toString", foItem.getName());
    }

    @Test
    void parseCStreamClass_25() {
        String testClass = testClass25;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Rectangle", coItem.getName());
        assertEquals("Shape", coItem.getHeritageNameList().get(0));
        assertEquals("extends", coItem.getHeritageTypeList().get(0));

        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("defaultRectangle", foItem.getName());
        List<ParamObj> pol = coItem.getParamList();
        assertEquals(1, pol.size());
        assertEquals("contextTypes", pol.get(0).getName());
        assertEquals("void", pol.get(0).getType());
        assertEquals("static", pol.get(0).getQualifier());
    }

    @Test
    void parseCStreamClass_26() {
        String testClass = testClass26;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Circle", coItem.getName());
        assertEquals("Shape", coItem.getHeritageNameList().get(0));
        assertEquals("extends", coItem.getHeritageTypeList().get(0));
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(1, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("defaultCircle", foItem.getName());
        assertEquals("", foItem.getType());

    }

    @Test
    void parseCStreamClass_27() {
        String testClass = testClass27;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Rectangle", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(6, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(2, pol.size());
        assertEquals("width", pol.get(0).getName());
        assertEquals("height", pol.get(1).getName());
        foItem = fol.get(1);
        assertEquals("width", foItem.getName());
        assertEquals("set", foItem.getType());
        pol = foItem.getParamList();
        assertEquals(1, pol.size());
        assertEquals("width", pol.get(0).getName());
        foItem = fol.get(2);
        assertEquals("width", foItem.getName());
        assertEquals("get", foItem.getType());
        foItem = fol.get(3);
        assertEquals("height", foItem.getName());
        assertEquals("set", foItem.getType());
        pol = foItem.getParamList();
        assertEquals(1, pol.size());
        assertEquals("height", pol.get(0).getName());
        foItem = fol.get(4);
        assertEquals("height", foItem.getName());
        assertEquals("get", foItem.getType());
        foItem = fol.get(5);
        assertEquals("area", foItem.getName());
        assertEquals("get", foItem.getType());
    }

    @Test
    void parseCStreamClass_28() {
        String testClass = testClass28;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("A", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(0, fol.size());
    }

    @Test
    void parseCStreamClass_29() {
        String testClass = testClass29;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("B", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(3, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("[runtimeCalc]", foItem.getName());
        assertEquals("get", foItem.getType());
        foItem = fol.get(1);
        assertEquals("[runtimeCalc]", foItem.getName());
        assertEquals("set", foItem.getType());
        foItem = fol.get(2);
        assertEquals("'string as key'", foItem.getName());
        assertEquals("get", foItem.getType());
    }

    @Test
    void parseCStreamClass_30() {
        String testClass = testClass30;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("ClassWithField", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(0, fol.size());
        List<ParamObj> pol = coItem.getParamList();
        assertEquals("field", pol.get(0).getName());
        assertEquals("fieldWithInitializer", pol.get(1).getName());
        assertEquals("\"instance field\"", pol.get(1).getStrValue(0));
        assertEquals("[`${PREFIX}Field`]", pol.get(2).getName());
        assertEquals("\"prefixed field\"", pol.get(2).getStrValue(0));
    }

    @Test
    void parseCStreamClass_31() {
        String testClass = testClass31;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("ClassWithStaticInitializationBlock", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(0, fol.size());
        List<ParamObj> pol = coItem.getParamList();
        assertEquals(2, pol.size());

        assertEquals("staticProperty1", pol.get(0).getName());
        assertEquals("void", pol.get(0).getType());
        assertEquals("static", pol.get(0).getQualifier());
        assertEquals("'Property 1'", pol.get(0).getStrValue(0));
        assertEquals("staticProperty2", pol.get(1).getName());
        assertEquals("void", pol.get(1).getType());
        assertEquals("static", pol.get(1).getQualifier());

    }

    @Test
    void parseCStreamClass_32() {
        String testClass = testClass32;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Employee", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(2, fol.size());
        FuncObj foItem = fol.get(0);
        assertEquals("constructor", foItem.getName());
        List<ParamObj> pol = foItem.getParamList();
        assertEquals(2, pol.size());
        assertEquals("name", pol.get(0).getName());
        assertEquals("string", pol.get(0).getType());
        assertEquals("code", pol.get(1).getName());
        assertEquals("number", pol.get(1).getType());
        foItem = fol.get(1);
        assertEquals("displayEmployee", foItem.getName());
    }

    @Test
    void parseCStreamClass_33() {
        String testClass = testClass33;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("O", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(0, fol.size());
        List<ParamObj> pol = coItem.getParamList();
        assertEquals(1, pol.size());
        assertEquals("i", pol.get(0).getName());
        assertEquals("1", pol.get(0).getStrValue(0));

    }

    @Test
    void parseCStreamClass_34() {
        String testClass = testClass34;
        CodePointCharStream cStream = CharStreams.fromString(testClass);
        ParseBase parser = ParseFactory.getParser("ts");
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj coItem = col.get(0);
        assertEquals("Entity", coItem.getName());
        List<FuncObj> fol = coItem.getFuncList();
        assertEquals(0, fol.size());
        List<ParamObj> pol = coItem.getParamList();
        assertEquals(2, pol.size());
        assertEquals("name", pol.get(0).getName());
        assertEquals("\"test\"", pol.get(0).getStrValue(0));
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
        List<ParamObj> pol = fol.get(0).getParamList();
        assertEquals(0, pol.size());
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
    void parseCStreamFunc_19() {
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
        ParseBase parser = ParseFactory.getParser("ts");
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
}