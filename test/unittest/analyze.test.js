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
let genDir = "../../src/gen/"
const re = require(genDir + "tools/re");
const { analyzeFile } = require(genDir + "analyze");
const { analyzeEnum, analyzeEnumResult } = require(genDir + "analyze/enum");
const { analyzeFunction, analyzeSubInterface, getFuncParaType } = require(genDir + "analyze/function");
const { analyzeInterface } = require(genDir + "analyze/interface");
const { analyzeNamespace, parseNamespace } = require(genDir + "analyze/namespace");
const { parseEnum, parseFunction, parseInterface } = require(genDir + "analyze/namespace");
const { analyzeParams } = require(genDir + "analyze/params");
const { analyzeReturn } = require(genDir + "analyze/return");
const { readFile } = require("../../src/gen/tools/FileRW");

var assert = require("assert");
var correctResult;
function before(){
    let data = readFile("test/unittest/result.json")
    if (data) {
        correctResult = JSON.parse(data);
    }
}

describe('Analyze', function () { 
    before(function () {
        before();
    });

    it('test gen/analyze analyzeFile', function () {
        let structOfTs = analyzeFile("test/unittest/@ohos.input_sample.d.ts");
        let ret = JSON.stringify(structOfTs)
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeFile']);
    });

    partOfEnum(correctResult);

    partOfFunction(correctResult);

    it('test gen/analyze/interface analyzeInterface', function () {
        let ret = analyzeInterface(correctResult['ParamIn']['analyzeInterface']);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeInterface']);
    });

    partOfNamespace(correctResult);

    partOfParam(correctResult);

    it('test gen/analyze/return analyzeReturn', function () {
        let ret = analyzeReturn("string");
        assert.strictEqual(ret[0], 'string');
        assert.strictEqual(ret[1], false);
    });

    it('test gen/analyze/return analyzeReturn', function () {
        let ret = analyzeReturn("Promise<string>");
        assert.strictEqual(ret[0], 'Promise<string>');
        assert.strictEqual(ret[1], true);
    });


});

function partOfEnum(correctResult){
    it('test gen/analyze/enum analyzeNumberEnum', function () {
        let data = '\nDEFAULT = "",\nDENIED = "-1",\nGRANTED = "2",\n';
        let ret = analyzeEnum(data);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeNumberEnum']);
    });

    it('test gen/analyze/enum analyzeStringEnum', function () {
        let data = '\nFAULT = 1,\nSTATISTIC = 2,\nSECURITY = 3,\nBEHAVIOR = 4,\n';
        let ret = analyzeEnum(data);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeStringEnum']);
    });

    it('test gen/analyze/enum analyzeEnumStringResult', function () {
        let result = {
            element: [{ name: "", value: "", type: "" }],
            function: [],
            enumValueType: 0
        }
        let ret = analyzeEnumResult(result, 'STATUS0 = 0', '0');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeEnumStringResult']);
    });

}

function partOfFunction(correctResult){
    it('test gen/analyze/function analyzeSubInterface', function () {
        let data = correctResult['ParamIn']['analyzeSubInterface'];
        let ret = analyzeSubInterface(data);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeSubInterface']);
    });

    it('test gen/analyze/function getFuncParaType', function () {
        let data = 'if_direct(v1: string, v2: boolean): string;';
        let v = { name: 'v1', type: 'string' };
        let ret = getFuncParaType(v, '', data);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['getFuncParaType']);
    });

    it('test gen/analyze/function analyzeDirectFunction', function () {
        let data = "if_direct(v1: string, v2: boolean): string;";
        let ret = analyzeFunction(data, `if_direct`, "v1: string, v2: boolean", "asdfgh");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeDirectFunction']);
    });

    it('test gen/analyze/function analyzeAsyncFunction', function () {
        let data = "if_async(v1: string, cb: AsyncCallback<string>): string;";
        let ret = analyzeFunction(data, `if_async`, "v1: string, cb: AsyncCallback<string>", "qwerty");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeAsyncFunction']);
    });

    it('test gen/analyze/function analyzeSyncFunction', function () {
        let data = "if_callback(v1: string, cb: Callback<Array<string>>): string;";
        let ret = analyzeFunction(data, `if_callback`, "v1: string, cb: Callback<Array<string>>", "zxcvbn");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeSyncFunction']);
    });

    it('test gen/analyze/function analyzePromiseFunction', function () {
        let data = "if_promise(v1: Array<number>): Promise<boolean>;";
        let ret = analyzeFunction(data, `if_promise`, "v1: Array<number>", "Promise<boolean>");
        assert.strictEqual(ret, null);
    });
}

function partOfNamespace(correctResult){
    it('test gen/analyze/namespace analyzeNamespace', function () {
        let ret = analyzeNamespace(correctResult['ParamIn']['analyzeNamespace']);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeNamespace']);
    });

    it('test gen/analyze/namespace parseNamespace', function () {
        let data = correctResult['ParamIn']['parseNamespace'];
        let matchs = re.match(" *\n*", data)
        let result = {
            exports: [],
            enum: [],
            const: [],
            type: [],
            function: [],
            interface: [],
            class: [],
            namespace: [],
        }
        let ret = parseNamespace(matchs, data, result);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['parseNamespace']);
    });

    it('test gen/analyze/namespace parseEnum', function () {
        let data = correctResult['ParamIn']['parseEnum']
        let matchs = re.match(" *\n*", data)
        let result = {
            exports: [],
            enum: [],
            const: [],
            type: [],
            function: [],
            interface: [],
            class: [],
            namespace: [],
        }
        let ret = parseEnum(matchs, data, result);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['parseEnum']);
    });

    partOfNamespaceTwo(correctResult);
}

function partOfNamespaceTwo(correctResult){
    it('test gen/analyze/namespace parseFunction', function () {
        let data = 'function fun1(name: string, flags: number): boolean;\n';
        let matchs = re.match(" *\n*", data)
        let result = {
            exports: [],
            enum: [],
            const: [],
            type: [],
            function: [],
            interface: [],
            class: [],
            namespace: [],
        }
        let ret = parseFunction(matchs, data, result);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['parseFunction']);
    });

    it('test gen/analyze/namespace parseInterface', function () {
        let data = correctResult['ParamIn']['parseInterface']
        let matchs = re.match(" *\n*", data)
        let result = {
            exports: [],
            enum: [],
            const: [],
            type: [],
            function: [],
            interface: [],
            class: [],
            namespace: [],
        }
        let ret = parseInterface(matchs, data, result);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['parseInterface']);
    });
}

function partOfParam(correctResult) {
    it('test gen/analyze/params analyzeDirectParams', function () {
        let ret = analyzeParams('v1:string,v2:boolean');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeDirectParams']);
        assert.strictEqual(ret[1], 1);
    });

    it('test gen/analyze/params analyzeAsynctParams', function () {
        let ret = analyzeParams('v2:string,cb:AsyncCallback<string>');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeAsynctParams']);
        assert.strictEqual(ret[1], 4);
    });

    it('test gen/analyze/params analyzeSynctParams', function () {
        let ret = analyzeParams('v2:boolean,cb:Callback<boolean>');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeSynctParams']);
        assert.strictEqual(ret[1], 2);
    });

    it('test gen/analyze/params analyzeArrayParams', function () {
        let ret = analyzeParams("v1: Array<number>,v2:Map<string,boolean>");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeArrayParams']);
    });

    it('test gen/analyze/params analyzeMapParams', function () {
        let ret = analyzeParams("v1: string[],v2:{[key:string]:boolean}");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['Analyze']['analyzeMapParams']);
    });

}

