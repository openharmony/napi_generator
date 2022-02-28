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

function funcAsyncAssert(){
    let valueFi = {name: 'v1', type: 'string'};
        let value1Se = {name: 'cb', type: 'AsyncCallback<string>'};
        let funParam = {name: 'if_async', type: 4, value: [valueFi,value1Se], ret: 'string'}
        let ret = generateFunctionAsync(funParam, 'TestClass1');
        let retJson=JSON.stringify(ret);
        return retJson
}


function funcDirectAssert(){
    let valueFi = {name: 'v1', type: 'string'};
        let value1Se = {name: 'cb', type: 'AsyncCallback<string>'};
        let funParam = {name: 'if_async', type: 4, value:[valueFi,value1Se], ret: 'string'};
        let ret = generateFunctionDirect(funParam, 'TestClass1');
        let retJson=JSON.stringify(ret);
        return retJson
}

function funcSyncAssert(){
    let valueFi = {name: 'v1', type: 'string'};
    let value1Se = {name: 'cb', type: 'Callback<string>'};
    let funParam = {name: 'if_callback', type: 2, value: [valueFi,value1Se], ret: 'string'};
    let ret = generateFunctionSync(funParam, 'TestClass1');
    let retJson=JSON.stringify(ret);
    return retJson
}

function cToJsParam(){
    let value = 'uint32_t len1=a.size();\n' +
    '    for(uint32_t i=0;i<len1;i++) {\n' +
    '        napi_value tnv1 = nullptr;\n' +
    '        tnv1 = pxt->SwapC2JsUtf8(a[i].c_str());\n' +
    '        pxt->SetArrayElement(b, i, tnv1);\n' +
    '    }'
    return value
}

function jsToCParam(){
    let value = '    uint32_t len12=pxt->GetArrayLength(b);\n' +
       '    for(uint32_t i12=0;i12<len12;i12++) {\n' +
       '        std::string tt12;\n' +
       '        pxt->SwapJs2CUtf8(pxt->GetArrayElement(b,i12), tt12);\n' +
       '        a.push_back(tt12);\n' +                   
    '    }'
    return value
}

function paramGenerateAndAssert(dataType){
    param = {
        valueIn: "",
        valueOut: "",

        valueCheckout: "",
        valueFill: "",
        valuePackage: "",
        valueDefine: ""
    }
    paramGenerate(0, "a", dataType, param)
    let result=JSON.stringify(param);
    return result
}

function returnGenerateAndAssert(dataType){
    param = {
        valueIn: "",
        valueOut: "",

        valueCheckout: "",
        valueFill: "",
        valuePackage: "",
        valueDefine: ""
    }
    returnGenerate(dataType, param)
    let result=JSON.stringify(param);
    return result
}

function partOfTest(){
    it('test gen/generate/param_generate jsToC', function () {
        assert.strictEqual(jsToC("a", "b", "string"), "pxt->SwapJs2CUtf8(b, a);");

        assert.strictEqual(jsToC("a", "b", "NUMBER_TYPE_1"), "NUMBER_JS_2_C(b,NUMBER_TYPE_1,a);");

        assert.strictEqual(jsToC("a", "b", "Array<string>"), jsToCParam());
    });

    it('test gen/generate/return_generate cToJs', function () {
        assert.strictEqual(cToJs("a", "string", "b",1), "b = pxt->SwapC2JsUtf8(a.c_str());");

        ret = cToJs("a","NUMBER_TYPE_1","b",1)
        assert.strictEqual(ret, "b = NUMBER_C_2_JS(pxt, a);");

        assert.strictEqual(cToJs("a","Array<string>","b",1), cToJsParam());
    });

}

describe('Generate', function () {
    var structOfTs;
    var testStr;
    var correctResult;
    before(function(){
        let data=readFile("test/unittest/result.json")
        if(data){
            correctResult=JSON.parse(data);
        }
        structOfTs = analyzeFile("test/unittest/@ohos.input_sample.d.ts");
        testStr = readFile("test/unittest/test.txt");
    });

    it('test gen/generate/function_async generateFunctionAsync', function () {
        assert.strictEqual(funcAsyncAssert(), correctResult['Generate']['generateFunctionAsync']);
    });

    it('test gen/generate/function_direct generateFunctionDirect', function () {
        assert.strictEqual(funcDirectAssert(), correctResult['Generate']['generateFunctionDirect']);
    });

    it('test gen/generate/function_sync generateFunctionSync', function () {
        assert.strictEqual(funcSyncAssert(), correctResult['Generate']['generateFunctionSync']);
    });

    it('test gen/generate/interface generateInterface', function () {
        let ns = structOfTs.declareNamespace[0];
        let ret = generateInterface('a', 'name:string',ns);
        assert.strictEqual(JSON.stringify(ret), correctResult['Generate']['generateInterface']);
    });

    it('test gen/generate/namespace generateNamespace', function () {
        let ns = structOfTs.declareNamespace[0];
        let ret = generateNamespace(ns.name, ns.body);
        assert.strictEqual(JSON.stringify(ret), correctResult['Generate']['generateNamespace']);
    });

    partOfTest();

    it('test gen/generate/param_generate ParamGenerate', function () {
        let retJson= paramGenerateAndAssert("string")
        assert.strictEqual(retJson, correctResult['Generate']['ParamGenerate']);

        let retJson1= paramGenerateAndAssert("NUMBER_TYPE_1")
        assert.strictEqual(retJson1, correctResult['Generate1']['ParamGenerate']);

        let retJson2= paramGenerateAndAssert("Array<string>")
        assert.strictEqual(retJson2, correctResult['Generate2']['ParamGenerate']);

      });

    it('test gen/generate/return_generate returnGenerate', function () {
        let retJson= returnGenerateAndAssert("string")
        assert.strictEqual(retJson, correctResult['Generate']['returnGenerate']);

        let retJson1= returnGenerateAndAssert("NUMBER_TYPE_1")
        assert.strictEqual(retJson1, correctResult['Generate1']['returnGenerate']);

        let retJson2= returnGenerateAndAssert("Array<string>")
        assert.strictEqual(retJson2, correctResult['Generate2']['returnGenerate']);
     });
   
});
