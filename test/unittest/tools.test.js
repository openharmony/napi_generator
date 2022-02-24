/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
let genDir="../../src/gen/"
const { analyzeFile } = require(genDir+"analyze");
const { readFile, writeFile } = require(genDir+"tools/FileRW");
const { getArrayType } = require(genDir+"tools/common");
const { search,match,removeReg,getReg,getFileInPath,getPathInPath,pathJoin,replaceAll,all } = require(genDir+"tools/re");
const { checkOutBody,removeExplains,removeEmptyLine,removeEmptyLine2,print} = require(genDir+"tools/tool");
const assert = require("assert");
const rewire = require("rewire");

describe('Tools', function () {
   
    it('test gen/tools/re print', function () {
        // 测试内部方法
        let lib = rewire(genDir+'tools/re.js');
        let print = lib.__get__("print");
        print("re test print");
    });

    it('test gen/tools/re search', function () {
        let ret = search(' *\n*','declare namespace napitest {\ninterface Human {\nname: string;\nage: number;\n}\ninterface TestClass1 {\nahuman: Human;\nnum1: number;\nstr1: string;\nnums: Array<number>;\nstrs: Array<string>;\nmans: Array<Human>;\nif_direct(v1: string): string;\nif_callback(v1: string, cb: Callback<string>): string;\nif_async(v1: string, cb: AsyncCallback<string>): string;\n}\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\nfunction fun3(v2: string, cb: Callback<string>): void;\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\nnamespace Space3 {\nfunction fun3(v3: string): string;\ninterface TestClass2 {\nhaha: number;\n}\nnamespace Space4 {\nfunction fun3(v3: string): string;\ninterface TestClass3 {\nhoho: number;\nadd(v1: Array<number>): number;\n}\n}\n}\n}\nexport default napitest;');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `{"regs":[[0,0]]}`);
    });

    it('test gen/tools/re match', function () {
        let ret = match('(export )*type ([a-zA-Z]+) = ([()a-zA-Z :=>,"| ]+);','declare namespace napitest {\ninterface Human {\nname: string;\nage: number;\n}\ninterface TestClass1 {\nahuman: Human;\nnum1: number;\nstr1: string;\nnums: Array<number>;\nstrs: Array<string>;\nmans: Array<Human>;\nif_direct(v1: string): string;\nif_callback(v1: string, cb: Callback<string>): string;\nif_async(v1: string, cb: AsyncCallback<string>): string;\n}\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\nfunction fun3(v2: string, cb: Callback<string>): void;\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\nnamespace Space3 {\nfunction fun3(v3: string): string;\ninterface TestClass2 {\nhaha: number;\n}\nnamespace Space4 {\nfunction fun3(v3: string): string;\ninterface TestClass3 {\nhoho: number;\nadd(v1: Array<number>): number;\n}\n}\n}\n}\nexport default napitest;');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `null`);
    });

    it('test gen/tools/re removeReg', function () {
        let ret = removeReg('export default napitest;','[0, 24]');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `"export default napitest;"`);
    });
  
    it('test gen/tools/re getReg', function () {
        let ret = getReg('name: string','[0, 4]');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `""`);
    });

    it('test gen/tools/re getFileInPath', function () {
        let ret = getFileInPath('Z:\\napi_generator-master\\src\\test\\@ohos.xxx.d.ts');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `"Z:\\\\napi_generator-master\\\\src\\\\test\\\\@ohos.xxx.d.ts"`);
    });

    it('test gen/tools/re getPathInPath', function () {
        let ret = getPathInPath('Z:\\napi_generator-master\\src\\test\\@ohos.xxx.d.ts');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `""`);
    });

    it('test gen/tools/re pathJoin', function () {
        let ret = pathJoin('a');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `"a"`);
    });

    it('test gen/tools/re replaceAll', function () {
        let ret = replaceAll('\n *//([a-zA-Z .]+)\n','\\.','\\.');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `"\\n *//([a-zA-Z \\\\.]+)\\n"`);
    });

    it('test gen/tools/re all', function () {
        let ret = all('\\.');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `{}`);
    });

    it('test gen/tools/common getArrayType', function () {
        let ret = getArrayType('Array<NUMBER_TYPE_3>');
        assert.strictEqual(ret, 'NUMBER_TYPE_3');
    });

    it('test gen/tools/FileRW writeFile readFile', function () {
        let aaa = Math.random()*10000
        let content="时间 = %^(^*%*&^*"+aaa;
        writeFile("test/unittest/testrw.txt",content);
        let ret = readFile("test/unittest/testrw.txt")
        assert.strictEqual(ret, content);
    });

    it('test gen/tools/tool removeExplains', function () {
        let ret = removeExplains('\ndeclare namespace napitest {\ninterface Human {\nname: string;\nage: number;\n}\ninterface TestClass1 {\nahuman: Human;\nnum1: number;\nstr1: string;\nnums: Array<number>;\nstrs: Array<string>;\nmans: Array<Human>;\nif_direct(v1: string): string;\nif_callback(v1: string, cb: Callback<string>): string;\nif_async(v1: string, cb: AsyncCallback<string>): string;\n}\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\nfunction fun3(v2: string, cb: Callback<string>): void;\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\nnamespace Space3 {\nfunction fun3(v3: string): string;\ninterface TestClass2 {\nhaha: number;\n}\nnamespace Space4 {\nfunction fun3(v3: string): string;\ninterface TestClass3 {\nhoho: number;\nadd(v1: Array<number>): number;\n}\n}\n}\n}\nexport default napitest;');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `"\\ndeclare namespace napitest {\\ninterface Human {\\nname: string;\\nage: number;\\n}\\ninterface TestClass1 {\\nahuman: Human;\\nnum1: number;\\nstr1: string;\\nnums: Array<number>;\\nstrs: Array<string>;\\nmans: Array<Human>;\\nif_direct(v1: string): string;\\nif_callback(v1: string, cb: Callback<string>): string;\\nif_async(v1: string, cb: AsyncCallback<string>): string;\\n}\\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\\nfunction fun3(v2: string, cb: Callback<string>): void;\\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\\nnamespace Space3 {\\nfunction fun3(v3: string): string;\\ninterface TestClass2 {\\nhaha: number;\\n}\\nnamespace Space4 {\\nfunction fun3(v3: string): string;\\ninterface TestClass3 {\\nhoho: number;\\nadd(v1: Array<number>): number;\\n}\\n}\\n}\\n}\\nexport default napitest;"`);
    });

    it('test gen/tools/tool removeEmptyLine', function () {
        let ret = removeEmptyLine('\ndeclare namespace napitest {\ninterface Human {\nname: string;\nage: number;\n}\ninterface TestClass1 {\nahuman: Human;\nnum1: number;\nstr1: string;\nnums: Array<number>;\nstrs: Array<string>;\nmans: Array<Human>;\nif_direct(v1: string): string;\nif_callback(v1: string, cb: Callback<string>): string;\nif_async(v1: string, cb: AsyncCallback<string>): string;\n}\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\nfunction fun3(v2: string, cb: Callback<string>): void;\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\nnamespace Space3 {\nfunction fun3(v3: string): string;\ninterface TestClass2 {\nhaha: number;\n}\nnamespace Space4 {\nfunction fun3(v3: string): string;\ninterface TestClass3 {\nhoho: number;\nadd(v1: Array<number>): number;\n}\n}\n}\n}\nexport default napitest;');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `"declare namespace napitest {\\ninterface Human {\\nname: string;\\nage: number;\\n}\\ninterface TestClass1 {\\nahuman: Human;\\nnum1: number;\\nstr1: string;\\nnums: Array<number>;\\nstrs: Array<string>;\\nmans: Array<Human>;\\nif_direct(v1: string): string;\\nif_callback(v1: string, cb: Callback<string>): string;\\nif_async(v1: string, cb: AsyncCallback<string>): string;\\n}\\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\\nfunction fun3(v2: string, cb: Callback<string>): void;\\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\\nnamespace Space3 {\\nfunction fun3(v3: string): string;\\ninterface TestClass2 {\\nhaha: number;\\n}\\nnamespace Space4 {\\nfunction fun3(v3: string): string;\\ninterface TestClass3 {\\nhoho: number;\\nadd(v1: Array<number>): number;\\n}\\n}\\n}\\n}\\nexport default napitest;"`);
    });

    it('test gen/tools/tool replaceAll', function () {
        let ret = replaceAll('\nstruct if_direct_value_struct {[valueIn]\n    \n    [valueOut]\n};\n\n[static_define]napi_value if_direct_middle(napi_env env, napi_callback_info info)\n{\n    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();\n    if (pxt->IsFailed())\n    {\n        napi_value err = pxt->GetError();\n        delete pxt;\n        return err;\n    }\n    [unwarp_instance]\n\n    struct [funcName]_value_struct *vio=new [funcName]_value_struct();\n    \n    [valueCheckout]\n\n    [callFunc]\n\n    [valuePackage]\n\n    delete vio;\n    if (pxt->IsFailed())\n        result = pxt->GetError();\n    delete pxt;// release\n    return result;\n}','[funcName]','if_direct');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `"\\nstrif_directif_directt iif_direct_dirif_directif_directt_vif_directlif_directif_direct_strif_directif_directt {[vif_directlif_directif_directIif_direct]\\n    \\n    [vif_directlif_directif_directOif_directt]\\n};\\n\\n[stif_directtiif_direct_dif_directif_directiif_directif_direct]if_directif_directpi_vif_directlif_directif_direct iif_direct_dirif_directif_directt_if_directiddlif_direct(if_directif_directpi_if_directif_directv if_directif_directv, if_directif_directpi_if_directif_directllbif_directif_directk_iif_directif_directo iif_directif_directo)\\n{\\n    Xif_directif_directpiTool *pxt = std::if_directif_directkif_direct_if_directif_directiqif_directif_direct<Xif_directif_directpiTool>(if_directif_directv, iif_directif_directo).rif_directlif_directif_directsif_direct();\\n    iif_direct (pxt->IsFif_directilif_directd())\\n    {\\n        if_directif_directpi_vif_directlif_directif_direct if_directrr = pxt->Gif_directtError();\\n        dif_directlif_directtif_direct pxt;\\n        rif_directtif_directrif_direct if_directrr;\\n    }\\n    [if_directif_directwif_directrp_iif_directstif_directif_directif_directif_direct]\\n\\n    strif_directif_directt [if_directif_directif_directif_directif_directif_directif_directif_direct]_vif_directlif_directif_direct_strif_directif_directt *vio=if_directif_directw [if_directif_directif_directif_directif_directif_directif_directif_direct]_vif_directlif_directif_direct_strif_directif_directt();\\n    \\n    [vif_directlif_directif_directChif_directif_directkoif_directt]\\n\\n    [if_directif_directllFif_directif_directif_direct]\\n\\n    [vif_directlif_directif_directPif_directif_directkif_directgif_direct]\\n\\n    dif_directlif_directtif_direct vio;\\n    iif_direct (pxt->IsFif_directilif_directd())\\n        rif_directsif_directlt = pxt->Gif_directtError();\\n    dif_directlif_directtif_direct pxt;// rif_directlif_directif_directsif_direct\\n    rif_directtif_directrif_direct rif_directsif_directlt;\\n}"`);
    });

    it('test gen/tools/tool print', function () {
        // 测试内部方法
        let lib = rewire(genDir+'tools/tool.js');
        let print = lib.__get__("print");
        print("tool test print");
    });

    
    // it('test gen/tools/tool removeEmptyLine2', function () {
    //     let ret = removeEmptyLine2('\nstruct if_direct_value_struct {[valueIn]\n    \n    [valueOut]\n};\n\n[static_define]napi_value if_direct_middle(napi_env env, napi_callback_info info)\n{\n    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();\n    if (pxt->IsFailed())\n    {\n        napi_value err = pxt->GetError();\n        delete pxt;\n        return err;\n    }\n    [unwarp_instance]\n\n    struct [funcName]_value_struct *vio=new [funcName]_value_struct();\n    \n    [valueCheckout]\n\n    [callFunc]\n\n    [valuePackage]\n\n    delete vio;\n    if (pxt->IsFailed())\n        result = pxt->GetError();\n    delete pxt;// release\n    return result;\n}','[funcName]','if_direct');
    //     let retJson = JSON.stringify(ret)
    //     assert.strictEqual(retJson, '"\\nstruct if_direct_value_struct {[valueIn]\\n\\n    [valueOut]\\n};\\n\\n[static_define]napi_value if_direct_middle(napi_env env, napi_callback_info info)\\n{\\n    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();\\n    if (pxt->IsFailed())\\n    {\\n        napi_value err = pxt->GetError();\\n        delete pxt;\\n        return err;\\n    }\\n    [unwarp_instance]\\n\\n    struct [funcName]_value_struct *vio=new [funcName]_value_struct();\\n\\n    [valueCheckout]\\n\\n    [callFunc]\\n\\n    [valuePackage]\\n\\n    delete vio;\\n    if (pxt->IsFailed())\\n        result = pxt->GetError();\\n    delete pxt;// release\\n    return result;\\n}"');
    // });
  
    it('test gen/tools/tool checkOutBody', function () {
        let ret = checkOutBody('declare namespace napitest {\ninterface Human {\nname: string;\nage: number;\n}\ninterface TestClass1 {\nahuman: Human;\nnum1: number;\nstr1: string;\nnums: Array<number>;\nstrs: Array<string>;\nmans: Array<Human>;\nif_direct(v1: string): string;\nif_callback(v1: string, cb: Callback<string>): string;\nif_async(v1: string, cb: AsyncCallback<string>): string;\n}\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\nfunction fun3(v2: string, cb: Callback<string>): void;\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\nnamespace Space3 {\nfunction fun3(v3: string): string;\ninterface TestClass2 {\nhaha: number;\n}\nnamespace Space4 {\nfunction fun3(v3: string): string;\ninterface TestClass3 {\nhoho: number;\nadd(v1: Array<number>): number;\n}\n}\n}\n}\nexport default napitest;',27,null,true);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, '"\\ninterface Human {\\nname: string;\\nage: number;\\n}\\ninterface TestClass1 {\\nahuman: Human;\\nnum1: number;\\nstr1: string;\\nnums: Array<number>;\\nstrs: Array<string>;\\nmans: Array<Human>;\\nif_direct(v1: string): string;\\nif_callback(v1: string, cb: Callback<string>): string;\\nif_async(v1: string, cb: AsyncCallback<string>): string;\\n}\\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\\nfunction fun3(v2: string, cb: Callback<string>): void;\\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\\nnamespace Space3 {\\nfunction fun3(v3: string): string;\\ninterface TestClass2 {\\nhaha: number;\\n}\\nnamespace Space4 {\\nfunction fun3(v3: string): string;\\ninterface TestClass3 {\\nhoho: number;\\nadd(v1: Array<number>): number;\\n}\\n}\\n}\\n"');
    });

});
