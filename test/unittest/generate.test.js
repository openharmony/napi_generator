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
const { generateNamespace } = require(genDir+"generate/namespace");
const { analyzeFile } = require(genDir+"analyze");
var assert = require("assert");
const { readFile, writeFile } = require(genDir+"tools/FileRW");
const { jsToC, paramGenerate } = require(genDir+"generate/param_generate");
const { cToJs, returnGenerate } = require(genDir+"generate/return_generate");
const { generateInterface } = require(genDir+"generate/interface");
const { generateFunctionAsync } = require(genDir+"generate/function_async");
const { generateFunctionDirect } = require(genDir+"generate/function_direct");
const { generateFunctionSync } = require(genDir+"generate/function_sync");
const { AssertionError } = require("assert");
const rewire = require("rewire");

describe('Generate', function () {
    var structOfTs;
    var testStr;

    before(function(){
        structOfTs = analyzeFile("test/unittest/@ohos.input_sample.d.ts");

        testStr = readFile("test/unittest/test.txt");
    });

    it('test gen/generate/function_async generateFunctionAsync', function () {
        let ret = generateFunctionAsync({name: 'if_async', type: 4, value: [{name: 'v1', type: 'string'},{name: 'cb', type: 'AsyncCallback<string>'}], ret: 'string'}, 'TestClass1');
        let retJson=JSON.stringify(ret);
        assert.strictEqual(retJson,'["\\nstruct if_async_value_struct {\\n    std::string in0;\\n    \\n    std::string out;\\n};\\n\\nstatic void if_async_execute(XNapiTool *pxt, void *data)\\n{\\n    if_async_value_struct *vio = (if_async_value_struct *)data;\\n    TestClass1 *pInstance = (TestClass1 *)pxt->GetAsyncInstance();\\n\\n    pInstance->if_async(vio->in0, vio->out);\\n}\\n\\nstatic void if_async_complete(XNapiTool *pxt, void *data)\\n{\\n    if_async_value_struct *vio = (if_async_value_struct *)data;\\n    \\n    napi_value result = nullptr;\\n    result = pxt->SwapC2JsUtf8(vio->out.c_str());\\n    \\n    {\\n        napi_value args[1] = {result};\\n        pxt->FinishAsync(1, args);\\n    }\\n\\n    delete vio;\\n}\\n\\nstatic napi_value if_async_middle(napi_env env, napi_callback_info info)\\n{\\n    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();\\n    if (pxt->IsFailed()) {\\n        napi_value err = pxt->GetError();\\n        delete pxt;\\n        return err;\\n    }\\n    pxt->SetAsyncInstance(pxt->UnWarpInstance());\\n\\n    struct if_async_value_struct *vio = new if_async_value_struct();\\n    \\n    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);\\n\\n    \\n    napi_value result = pxt->StartAsync(if_async_execute, vio, if_async_complete, pxt->GetArgc() == 2 ? pxt->GetArgv(1) : nullptr);\\n\\n    if (pxt->IsFailed()) {\\n        result = pxt->GetError();\\n    }\\n    return result;\\n}","\\nbool if_async(std::string &v1, std::string &out);","\\nbool TestClass1::if_async(std::string &v1, std::string &out)\\n{\\n    return true;\\n}\\n"]');
    });

    it('test gen/generate/function_direct generateFunctionDirect', function () {
        let ret = generateFunctionDirect({name: 'if_async', type: 4, value:[{name: 'v1', type: 'string'},{name: 'cb', type: 'AsyncCallback<string>'}], ret: 'string'}, 'TestClass1');
        let retJson=JSON.stringify(ret);
        assert.strictEqual(retJson,'["\\nstruct if_async_value_struct {\\n    std::string in0;\\n    \\n    std::string out;\\n};\\n\\nstatic napi_value if_async_middle(napi_env env, napi_callback_info info)\\n{\\n    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();\\n    if (pxt->IsFailed()) {\\n        napi_value err = pxt->GetError();\\n        delete pxt;\\n        return err;\\n    }\\n    TestClass1 *pInstance = (TestClass1 *)pxt->UnWarpInstance();\\n\\n    struct if_async_value_struct *vio = new if_async_value_struct();\\n    \\n    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);\\n\\n    pInstance->if_async(vio->in0, vio->out);\\n\\n    napi_value result = nullptr;\\n    result = pxt->SwapC2JsUtf8(vio->out.c_str());\\n\\n    delete vio;\\n    if (pxt->IsFailed()) {\\n        result = pxt->GetError();\\n    }\\n    delete pxt; // release\\n    return result;\\n}","\\nbool if_async(std::string &v1, std::string &out);","\\nbool TestClass1::if_async(std::string &v1, std::string &out)\\n{\\n    return true;\\n}\\n"]');
    });

    it('test gen/generate/function_sync generateFunctionSync', function () {
        let ret = generateFunctionSync({name: 'if_callback', type: 2, value: [{name: 'v1', type: 'string'},{name: 'cb', type: 'Callback<string>'}], ret: 'string'}, 'TestClass1');
        let retJson=JSON.stringify(ret);
        assert.strictEqual(retJson,'["\\nstruct if_callback_value_struct {\\n    std::string in0;\\n    \\n    std::string out;\\n};\\n\\nstatic napi_value if_callback_middle(napi_env env, napi_callback_info info)\\n{\\n    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();\\n    if (pxt->IsFailed()) {\\n        napi_value err = pxt->GetError();\\n        delete pxt;\\n        return err;\\n    }\\n    TestClass1 *pInstance = (TestClass1 *)pxt->UnWarpInstance();\\n\\n    struct if_callback_value_struct *vio = new if_callback_value_struct();\\n    \\n    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);\\n\\n    pInstance->if_callback(vio->in0, vio->out);\\n\\n    napi_value result = nullptr;\\n    result = pxt->SwapC2JsUtf8(vio->out.c_str());\\n\\n    {\\n        napi_value args[1] = {result};\\n        pxt->SyncCallBack(pxt->GetArgv(1), 1, args);\\n    }\\n    result = pxt->UndefinedValue();\\n\\n    delete vio;\\n    if (pxt->IsFailed()) {\\n        result = pxt->GetError();\\n    }\\n    delete pxt; // release\\n    return result;\\n}","\\nbool if_callback(std::string &v1, std::string &out);","\\nbool TestClass1::if_callback(std::string &v1, std::string &out)\\n{\\n    return true;\\n}\\n"]');
    });

    it('test gen/generate/interface generateInterface', function () {
        let ns = structOfTs.declareNamespace[0];
        let ret = generateInterface('a', 'name:string',ns);
        let retJson=JSON.stringify(ret);
        assert.strictEqual(retJson,'{"implH":"\\nclass a {\\npublic:\\n};","implCpp":"","middleBody":"\\nclass a_middle {\\npublic:\\nstatic napi_value constructor(napi_env env, napi_callback_info info)\\n{\\n    XNapiTool *pxt = new XNapiTool(env, info);\\n\\n    a *p = new a();\\n\\n    napi_value thisvar = pxt->WrapInstance(p, release);\\n\\n    return thisvar;\\n}\\nstatic void release(void *p)\\n{\\n    a *p2 = (a *)p;\\n    delete p2;\\n}\\n\\n};","middleInit":"{\\n    std::map<const char *,std::map<const char *,napi_callback>> valueList;\\n    std::map<const char *, napi_callback> funcList;\\n    pxt->DefineClass(\\"a\\", [object Object]a_middle::constructor, valueList ,funcList);\\n}\\n"}');
    });

    it('test gen/generate/namespace generateNamespace', function () {
        let ns = structOfTs.declareNamespace[0];
        let ret = generateNamespace(ns.name, ns.body);
        let retJson=JSON.stringify(ret);
        let lib = rewire(genDir+'tools/re.js');
        let print = lib.__get__("print");
        if(typeof(retJson)=="undefined"){
            print("check success") 
        }
    });

    it('test gen/generate/param_generate jsToC', function () {

        let ret = jsToC("a", "b", "string")
        assert.strictEqual(ret, "pxt->SwapJs2CUtf8(b, a);");

        ret = jsToC("a", "b", "NUMBER_TYPE_1")
        assert.strictEqual(ret, "NUMBER_JS_2_C(b,NUMBER_TYPE_1,a);");

        ret = jsToC("a", "b", "Array<string>")
        assert.strictEqual(ret,   '    uint32_t len12=pxt->GetArrayLength(b);\n' +
           '    for(uint32_t i12=0;i12<len12;i12++) {\n' +
           '        std::string tt12;\n' +
           '        pxt->SwapJs2CUtf8(pxt->GetArrayElement(b,i12), tt12);\n' +
           '        a.push_back(tt12);\n' +             
           '    }');
    });

    it('test gen/generate/param_generate ParamGenerate', function () {

        let param = {
            valueIn: "",//定义输入
            valueOut: "",//定义输出

            valueCheckout: "",//解析
            valueFill: "",//填充到函数内
            valuePackage: "",//输出参数打包
            valueDefine: ""//impl参数定义
        }
        paramGenerate(0, "a", "string", param)
        assert.strictEqual(JSON.stringify(param), `{"valueIn":"\\n    std::string in0;","valueOut":"","valueCheckout":"pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);","valueFill":"vio->in0","valuePackage":"","valueDefine":"std::string &a"}`);

        param = {
            valueIn: "",//定义输入
            valueOut: "",//定义输出

            valueCheckout: "",//解析
            valueFill: "",//填充到函数内
            valuePackage: "",//输出参数打包
            valueDefine: ""//impl参数定义
        }
        paramGenerate(0, "a", "NUMBER_TYPE_1", param)
        assert.strictEqual(JSON.stringify(param), `{"valueIn":"\\n    NUMBER_TYPE_1 in0;","valueOut":"","valueCheckout":"NUMBER_JS_2_C(pxt->GetArgv(0),NUMBER_TYPE_1,vio->in0);","valueFill":"vio->in0","valuePackage":"","valueDefine":"NUMBER_TYPE_1 &a"}`);

        param = {
            valueIn: "",//定义输入
            valueOut: "",//定义输出

            valueCheckout: "",//解析
            valueFill: "",//填充到函数内
            valuePackage: "",//输出参数打包
            valueDefine: ""//impl参数定义
        }
        paramGenerate(0, "a", "Array<string>", param)
        assert.strictEqual(JSON.stringify(param), `{"valueIn":"\\n    std::vector<std::string> in0;","valueOut":"","valueCheckout":"    uint32_t len13=pxt->GetArrayLength(pxt->GetArgv(0));\\n    for(uint32_t i13=0;i13<len13;i13++) {\\n        std::string tt13;\\n        pxt->SwapJs2CUtf8(pxt->GetArrayElement(pxt->GetArgv(0),i13), tt13);\\n        vio->in0.push_back(tt13);\\n    }","valueFill":"vio->in0","valuePackage":"","valueDefine":"std::vector<std::string> &a"}`);

     });

    it('test gen/generate/return_generate cToJs', function () {

        let ret = cToJs("a", "string", "b",1)
        assert.strictEqual(ret, "b = pxt->SwapC2JsUtf8(a.c_str());");

        ret = cToJs("a","NUMBER_TYPE_1","b",1)
        assert.strictEqual(ret, "b = NUMBER_C_2_JS(pxt, a);");

        ret = cToJs("a","Array<string>","b",1)
        assert.strictEqual(ret,   'uint32_t len1=a.size();\n' +
           '    for(uint32_t i=0;i<len1;i++) {\n' +
           '        napi_value tnv1 = nullptr;\n' +
           '        tnv1 = pxt->SwapC2JsUtf8(a[i].c_str());\n' +
           '        pxt->SetArrayElement(b, i, tnv1);\n' +
           '    }');
    });

    it('test gen/generate/return_generate returnGenerate', function () {

        let param = {
            valueIn: "",//定义输入
            valueOut: "",//定义输出

            valueCheckout: "",//解析
            valueFill: "",//填充到函数内
            valuePackage: "",//输出参数打包
            valueDefine: ""//impl参数定义
        }
        returnGenerate("string", param)
        assert.strictEqual(JSON.stringify(param), `{"valueIn":"","valueOut":"std::string out;","valueCheckout":"","valueFill":"vio->out","valuePackage":"napi_value result = nullptr;\\n    result = pxt->SwapC2JsUtf8(vio->out.c_str());","valueDefine":"std::string &out"}`);

        param = {    
            valueIn: "",//定义输入
            valueOut: "",//定义输出

            valueCheckout: "",//解析
            valueFill: "",//填充到函数内
            valuePackage: "",//输出参数打包
            valueDefine: ""//impl参数定义
        }
        returnGenerate("NUMBER_TYPE_1", param)
        assert.strictEqual(JSON.stringify(param), `{"valueIn":"","valueOut":"NUMBER_TYPE_1 out;","valueCheckout":"","valueFill":"vio->out","valuePackage":"napi_value result = nullptr;\\n    result = NUMBER_C_2_JS(pxt, vio->out);","valueDefine":"NUMBER_TYPE_1 &out"}`);

        param = {
            valueIn: "",//定义输入
            valueOut: "",//定义输出

            valueCheckout: "",//解析
            valueFill: "",//填充到函数内
            valuePackage: "",//输出参数打包
            valueDefine: ""//impl参数定义
        }
        returnGenerate("Array<string>", param)
        assert.strictEqual(JSON.stringify(param), `{"valueIn":"","valueOut":"std::vector<std::string> out;","valueCheckout":"","valueFill":"vio->out","valuePackage":"napi_value result = nullptr;\\n    uint32_t len1=vio->out.size();\\n    for(uint32_t i=0;i<len1;i++) {\\n        napi_value tnv1 = nullptr;\\n        tnv1 = pxt->SwapC2JsUtf8(vio->out[i].c_str());\\n        pxt->SetArrayElement(result, i, tnv1);\\n    }","valueDefine":"std::vector<std::string> &out"}`);
     });
});
