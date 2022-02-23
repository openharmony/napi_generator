const { analyzeFile } = require("../gen/analyze");
const { readFile, writeFile } = require("../gen/tools/FileRW");
const { getArrayType } = require("../gen/tools/common");
const { search,match,removeReg,getReg,getFileInPath,getPathInPath,pathJoin,replaceAll,all } = require("../gen/tools/re");
const { checkOutBody,removeExplains,removeEmptyLine,removeEmptyLine2,print} = require("../gen/tools/tool");
const assert = require("assert");
const rewire = require("rewire");
require("should");

describe('Tools', function () {
   
    it('test gen/tools/re print', function () {
        // 测试内部方法
        let lib = rewire('../gen/tools/re.js');
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
        assert.strictEqual(retJson, `"\\n *//([a-zA-Z .]+)\\n"`);
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
        writeFile("test/testrw.txt",content);
        let ret = readFile("test/testrw.txt")
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
        assert.strictEqual(retJson, `"\\nstruct if_direct_value_struct {[valueIn]\\n    \\n    [valueOut]\\n};\\n\\n[static_define]napi_value if_direct_middle(napi_env env, napi_callback_info info)\\n{\\n    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();\\n    if (pxt->IsFailed())\\n    {\\n        napi_value err = pxt->GetError();\\n        delete pxt;\\n        return err;\\n    }\\n    [unwarp_instance]\\n\\n    struct if_direct_value_struct *vio=new if_direct_value_struct();\\n    \\n    [valueCheckout]\\n\\n    [callFunc]\\n\\n    [valuePackage]\\n\\n    delete vio;\\n    if (pxt->IsFailed())\\n        result = pxt->GetError();\\n    delete pxt;// release\\n    return result;\\n}"`);
    });

    it('test gen/tools/tool print', function () {
        // 测试内部方法
        let lib = rewire('../gen/tools/tool.js');
        let print = lib.__get__("print");
        print("tool test print");
    });

    
    it('test gen/tools/tool removeEmptyLine2', function () {
        let ret = removeEmptyLine2('\nstruct if_direct_value_struct {[valueIn]\n    \n    [valueOut]\n};\n\n[static_define]napi_value if_direct_middle(napi_env env, napi_callback_info info)\n{\n    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();\n    if (pxt->IsFailed())\n    {\n        napi_value err = pxt->GetError();\n        delete pxt;\n        return err;\n    }\n    [unwarp_instance]\n\n    struct [funcName]_value_struct *vio=new [funcName]_value_struct();\n    \n    [valueCheckout]\n\n    [callFunc]\n\n    [valuePackage]\n\n    delete vio;\n    if (pxt->IsFailed())\n        result = pxt->GetError();\n    delete pxt;// release\n    return result;\n}','[funcName]','if_direct');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, '"\\nstruct if_direct_value_struct {[valueIn]\\n\\n    [valueOut]\\n};\\n\\n[static_define]napi_value if_direct_middle(napi_env env, napi_callback_info info)\\n{\\n    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();\\n    if (pxt->IsFailed())\\n    {\\n        napi_value err = pxt->GetError();\\n        delete pxt;\\n        return err;\\n    }\\n    [unwarp_instance]\\n\\n    struct [funcName]_value_struct *vio=new [funcName]_value_struct();\\n\\n    [valueCheckout]\\n\\n    [callFunc]\\n\\n    [valuePackage]\\n\\n    delete vio;\\n    if (pxt->IsFailed())\\n        result = pxt->GetError();\\n    delete pxt;// release\\n    return result;\\n}"');
    });
  
    it('test gen/tools/tool checkOutBody', function () {
        let ret = checkOutBody('declare namespace napitest {\ninterface Human {\nname: string;\nage: number;\n}\ninterface TestClass1 {\nahuman: Human;\nnum1: number;\nstr1: string;\nnums: Array<number>;\nstrs: Array<string>;\nmans: Array<Human>;\nif_direct(v1: string): string;\nif_callback(v1: string, cb: Callback<string>): string;\nif_async(v1: string, cb: AsyncCallback<string>): string;\n}\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\nfunction fun3(v2: string, cb: Callback<string>): void;\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\nnamespace Space3 {\nfunction fun3(v3: string): string;\ninterface TestClass2 {\nhaha: number;\n}\nnamespace Space4 {\nfunction fun3(v3: string): string;\ninterface TestClass3 {\nhoho: number;\nadd(v1: Array<number>): number;\n}\n}\n}\n}\nexport default napitest;',27,null,true);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, '"\\ninterface Human {\\nname: string;\\nage: number;\\n}\\ninterface TestClass1 {\\nahuman: Human;\\nnum1: number;\\nstr1: string;\\nnums: Array<number>;\\nstrs: Array<string>;\\nmans: Array<Human>;\\nif_direct(v1: string): string;\\nif_callback(v1: string, cb: Callback<string>): string;\\nif_async(v1: string, cb: AsyncCallback<string>): string;\\n}\\nfunction fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;\\nfunction fun3(v2: string, cb: Callback<string>): void;\\nfunction fun4(v2: string, cb: AsyncCallback<string>): void;\\nnamespace Space3 {\\nfunction fun3(v3: string): string;\\ninterface TestClass2 {\\nhaha: number;\\n}\\nnamespace Space4 {\\nfunction fun3(v3: string): string;\\ninterface TestClass3 {\\nhoho: number;\\nadd(v1: Array<number>): number;\\n}\\n}\\n}\\n"');
    });

});