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

const { analyzeFile } = require(genDir + "analyze");
var assert = require("assert");
const { JsxEmit } = require("typescript");
const { readFile } = require(genDir + "tools/FileRW");
const { generateEnum } = require(genDir + "generate/enum");
const { jsToC, jsToCEnum, paramGenerate, paramGenerateArray } = require(genDir + "generate/param_generate");
const { paramGenerateMap, mapTempleteFunc } = require(genDir + "generate/param_generate");
const { cToJs, cToJsForInterface, returnGenerate } = require(genDir + "generate/return_generate");
const { generateInterface, generateVariable } = require(genDir + "generate/interface");
const { mapTypeString, connectResult } = require(genDir + "generate/interface");
const { generateNamespace, formatMiddleInit } = require(genDir + "generate/namespace");
const { generateEnumResult, generateFunction } = require(genDir + "generate/namespace");
const { generateFunctionAsync } = require(genDir + "generate/function_async");
const { generateFunctionDirect } = require(genDir + "generate/function_direct");
const { generateFunctionSync } = require(genDir + "generate/function_sync");


var structOfTs;
var correctResult;

function before(){
    let data = readFile("test/unittest/result.json")
    if (data) {
        correctResult = JSON.parse(data);
    }
    structOfTs = analyzeFile("test/unittest/@ohos.input_sample.d.ts");
    result = analyzeFile("test/unittest/@ohos.input_sample.d.ts");
}

describe('Generate', function () {
    before(function () {
        before()
    });

    it('test gen/generate/enum generateEnum', function () {
        let data = {
            element: [{ name: "STATUS0", value: "0", type: "NUMBER_TYPE_1" }],
            function: [],
            enumValueType: 0
        }
        let ret = generateEnum('GrantStatus', data);
        let retJson = JSON.stringify(ret);
        let result = { "implH": "\nenum GrantStatus {\n    STATUS0 = 0,\n};\n", "implCpp": "" };
        assert.strictEqual(retJson, JSON.stringify(result));
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

    partOfInterface(correctResult);
   
    partOfTest();

    partOfNamespace(correctResult)

    partofParamGenerate(correctResult)
    
});

function funcAsyncAssert() {
    let valueFi = { name: 'v1', type: 'string' };
    let value1Se = { name: 'cb', type: 'AsyncCallback<string>' };
    let funParam = { name: 'if_async', type: 4, value: [valueFi, value1Se], ret: 'string' }
    let data = {
        class: [],
        const: [],
        enum: [],
        exports: [],
        function: [{ name: 'if_async', type: 4, value: [valueFi, value1Se], ret: 'string' }],
        interface: [],
        namespace: [],
        type: [],
    }
    let ret = generateFunctionAsync(funParam, data, 'TestClass1');
    let retJson = JSON.stringify(ret);
    return retJson
}


function funcDirectAssert() {
    let valueFi = { name: 'v1', type: 'string' };
    let funParam = { name: 'if_direct', type: 1, value: [valueFi], ret: 'string' };
    let data = {
        class: [],
        const: [],
        enum: [],
        exports: [],
        function: [{ name: 'if_direct', type: 1, value: [valueFi], ret: 'string' }],
        interface: [],
        namespace: [],
        type: [],
    }
    let ret = generateFunctionDirect(funParam, data, 'TestClass1');
    let retJson = JSON.stringify(ret);
    return retJson
}

function funcSyncAssert() {
    let valueFi = { name: 'v1', type: 'string' };
    let value1Se = { name: 'cb', type: 'Callback<string>' };
    let funParam = { name: 'if_callback', type: 2, value: [valueFi, value1Se], ret: 'string' };
    let data = {
        class: [],
        const: [],
        enum: [],
        exports: [],
        function: [{ name: 'if_callback', type: 2, value: [valueFi, value1Se], ret: 'string' }],
        interface: [],
        namespace: [],
        type: [],
    }
    let ret = generateFunctionSync(funParam, data, 'TestClass1');
    let retJson = JSON.stringify(ret);
    return retJson
}

function partOfInterface(correctResult){

    it('test gen/generate/interface generateVariable', function () {
        variable = {
            hDefine: '', 
            middleValue: ''
        };
        let ret = generateVariable('disable', 'boolean', variable, 'ConfigOption');
        assert.strictEqual(JSON.stringify(ret), undefined);
    });

    it('test gen/generate/interface mapTypeString', function () {
        let ret = mapTypeString("Map<string,string>", "map1");
        let result = "\n    std::map<std::string,std::string> map1;";
        assert.strictEqual(JSON.stringify(ret), JSON.stringify(result));
    });

    it('test gen/generate/interface generateInterface', function () {
        let data = {
            function:[],
            value:[{name:"disable",type:"boolean"},{name:"map1",type:"Map<string,string>"}]
        }
        let ret = generateInterface('ConfigOption', data, 'napitest::');
        assert.strictEqual(JSON.stringify(ret), correctResult['Generate']['generateInterface']);
    });


    it('test gen/generate/interface connectResult', function () {
        let data = {
            function:[],
            value:[{name:"disable",type:"boolean"},{name:"map1",type:"Map<string,string>"}]
        }
        let ret = connectResult(data, 'napitest::','ConfigOption');
        assert.strictEqual(JSON.stringify(ret), correctResult['Generate']['connectResult']);
    });
}

function partOfTest() {
    it('test gen/generate/param_generate jsToC', function () {
        assert.strictEqual(jsToC("a", "b", "string"), "pxt->SwapJs2CUtf8(b, a);");

        assert.strictEqual(jsToC("a", "b", "NUMBER_TYPE_1"), "NUMBER_JS_2_C(b,NUMBER_TYPE_1,a);");

        assert.strictEqual(jsToC("a", "b", "boolean"), "BOOLEAN_JS_2_C(b,bool,a);");

        assert.strictEqual(jsToC("a", "b", "Array<string>"), jsToCParam());

        assert.strictEqual(jsToC("a", "b", "string[]"), jsToCParamArray());

        assert.strictEqual(jsToC("a", "b", "{[key:string]:boolean}"), jsToCParamMap());
        
        assert.strictEqual(jsToC("a", "b", "Map<string,number>"), jsToCParamMap1());
    });

    it('test gen/generate/param_generate jsToCEnum', function () {
        let ret = jsToCEnum('string','vio->in0','pxt->GetArgv(0)');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson,'""')
    });

    it('test gen/generate/return_generate cToJs', function () {
        assert.strictEqual(cToJs("a", "string", "b", 1), "b = pxt->SwapC2JsUtf8(a.c_str());");

        ret = cToJs("a", "NUMBER_TYPE_1", "b", 1)
        assert.strictEqual(ret, "b = NUMBER_C_2_JS(pxt, a);");

        ret1 = cToJs("a", "boolean", "b", 1)
        assert.strictEqual(ret1, "b = pxt->SwapC2JsBool(a);");

        assert.strictEqual(cToJs("a", "Array<string>", "b", 1), cToJsParam());

        assert.strictEqual(cToJs("a", "string[]", "b", 1), cToJsParamArray());

        ret2 = cToJs("a", "Map<string,string>", "b", 1)
        assert.strictEqual(ret2, cToJsParamMap());

        ret3 = cToJs("a", "{[key:string]:string}", "b", 1)
        assert.strictEqual(ret3, cToJsParamMap1());
    });

    it('test gen/generate/return_generate cToJsForInterface', function () {
        let ret = cToJsForInterface('vio->out','ConfigOption','result',1);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson,'""')
    });
}

function cToJsParam() {
    let value = 'uint32_t len1=a.size();\n' +
        '    for(uint32_t i=0;i<len1;i++) {\n' +
        '        napi_value tnv1 = nullptr;\n' +
        '        tnv1 = pxt->SwapC2JsUtf8(a[i].c_str());\n' +
        '        pxt->SetArrayElement(b, i, tnv1);\n' +
        '    }'
    return value
}

function cToJsParamArray() {
    let value = 'uint32_t len1=a.size();\n' +
        '    for(uint32_t i=0;i<len1;i++) {\n' +
        '        napi_value tnv1 = nullptr;\n' +
        '        tnv1 = pxt->SwapC2JsUtf8(a[i].c_str());\n' +
        '        pxt->SetArrayElement(b, i, tnv1);\n' +
        '    }'
    return value
}

function cToJsParamMap() {
    let value = 'result = nullptr;\n' +
        '    for (auto i = a.begin(); i != a.end(); i++)\n' +
        '        {\n' +
        '            const char * tnv1;\n' +
        '            napi_value tnv2 = nullptr;\n' +
        '            tnv1 = (i -> first).c_str();\n' +
        '        tnv2 = pxt->SwapC2JsUtf8(i->second.c_str());\n' +
        '            pxt->SetMapElement(b, tnv1, tnv2);\n' +
        '        }'
    return value
}

function cToJsParamMap1() {
    let value = 'result = nullptr;\n' +
        '    for (auto i = a.begin(); i != a.end(); i++)\n' +
        '        {\n' +
        '            const char * tnv1;\n' +
        '            napi_value tnv2 = nullptr;\n' +
        '            tnv1 = (i -> first).c_str();\n' +
        '        tnv2 = pxt->SwapC2JsUtf8(i->second.c_str());\n' +
        '            pxt->SetMapElement(b, tnv1, tnv2);\n' +
        '        }'
    return value
}

function jsToCParam() {
    let value =  '    uint32_t len3=pxt->GetArrayLength(b);\n' +
       '    for(uint32_t i3=0;i3<len3;i3++) {\n' +
       '        std::string tt3;\n' +
       '        pxt->SwapJs2CUtf8(pxt->GetArrayElement(b,i3), tt3);\n' +
       '        a.push_back(tt3);\n' +
       '\n' +
       '    }'
    return value
}

function jsToCParamArray() {
    let value = '    uint32_t len4=pxt->GetArrayLength(b);\n' +
       '    for(uint32_t i4=0;i4<len4;i4++) {\n' +
       '        std::string tt4;\n' +
       '        pxt->SwapJs2CUtf8(pxt->GetArrayElement(b,i4), tt4);\n' +
       '        a.push_back(tt4);\n' +
       '\n' +
        '    }'
    return value
}

function jsToCParamMap() {
    let value =  'uint32_t len5=pxt->GetMapLength(b);\n' +
       'for(uint32_t i5=0;i5<len5;i5++) {\n' +
       '    std::string tt5;\n' +
       '    bool tt6;\n' +
       '    pxt->SwapJs2CUtf8(pxt->GetMapElementName(b,i5), tt5);\n' +
       '        tt6 = pxt->SwapJs2CBool(pxt->GetMapElementValue(b,tt5.c_str()));\n' +
       '    a.insert(std::make_pair(tt5, tt6));\n' +
        '}'
    return value
}

function jsToCParamMap1() {
    let value =  'uint32_t len6=pxt->GetMapLength(b);\n' +
       'for(uint32_t i6=0;i6<len6;i6++) {\n' +
       '    std::string tt6;\n' +
       '    number tt7;\n' +
       '    [replace_swap]\n' +
       '    a.insert(std::make_pair(tt6, tt7));\n' +
       '}'
    return value
}

function partOfNamespace(correctResult){

    it('test gen/generate/namespace generateNamespace', function () {
        let enumElement= [{name:"name",value:"",type:"string"}];
        let data = {
            class: [],
            const: [],
            enum: [{name:"TestClass",body:{element:enumElement,function:[],enumValueType:0}}],
            export: [],
            function: [{name:"fun1",type:1,value:[{name:"v",type:"Array<string>"}],ret:"string"}],
            interface:[{name:"TestClass1",body:{function:[],value:[{name:"age",type:"NUMBER_TYPE_1"}]}}],
            namespace: []
        };
        let ret = generateNamespace('napitest', data,inNamespace = "");
        assert.strictEqual(JSON.stringify(ret), correctResult['Generate']['generateNamespace']);
    });

    it('test gen/generate/namespace generateEnumResult', function () {
        let enumElement = [{name:"name",value:"qwerty",type:"string"}];
        let data = {
            class: [],
            const: [],
            enum: [{name:"TestClass",body:{element:enumElement,function:[],enumValueType:0}}],
            export: [],
            function: [{name:"fun1",type:1,value:[{name:"v",type:"Array<string>"}],ret:"string"}],
            interface:[{name:"TestClass1",body:{function:[],value:[{name:"age",type:"NUMBER_TYPE_1"}]}}],
            namespace: []
        };
        let ret = generateEnumResult('napitest', data,inNamespace = "");
        assert.strictEqual(JSON.stringify(ret), correctResult['Generate']['generateEnumResult']);
    });

    it('test gen/generate/namespace generateFunction', function () {
        let func = {name:"fun1",type:4,value:[{name:"cb",type:"AsyncCallback<string>"}]};
        let data = {
            class: [],
            const: [],
            enum: [],
            export: [],
            function: [{name:"fun1",type:4,value:[{name:"cb",type:"AsyncCallback<string>"}],ret:"string"}],
            interface:[],
            namespace: []
        };
        let ret = generateFunction(func,data);
        assert.strictEqual(JSON.stringify(ret), correctResult['Generate']['generateFunction']);
    });

    it('test gen/generate/namespace formatMiddleInit', function () {
        let ret = formatMiddleInit('','napitest');
        assert.strictEqual(JSON.stringify(ret), '""');
    });

}

function partofParamGenerate(correctResult){

    it('test gen/generate/param_generate paramGenerateArray', function () {
        let param = {
            valueCheckout: '',
            valueDefine: '',
            valueFill: '',
            valueIn: '',
            valueOut: '',
            valuePackage: ''
        }
        paramGenerateArray('0','v','Array<string>',param);
        assert.strictEqual(JSON.stringify(param), correctResult['Generate']['paramGenerateArray']);
    });

    it('test gen/generate/param_generate paramGenerateMap', function () {
        let param1 = {
            valueCheckout: '',
            valueDefine: '',
            valueFill: '',
            valueIn: '',
            valueOut: '',
            valuePackage: ''
        }
        paramGenerateMap('Map<string,Array<string>>',param1,'0','v');
        assert.strictEqual(JSON.stringify(param1), correctResult['Generate']['paramGenerateMap']);
    });

    it('test gen/generate/param_generate mapTempleteFunc', function () {
        let ret = mapTempleteFunc('vio->in0','pxt->GetArgv(0)','Map<string,Array<string>>');
        assert.strictEqual(JSON.stringify(ret), correctResult['Generate']['mapTempleteFunc']);
    });

    it('test gen/generate/param_generate ParamGenerate', function () {
        paramGenerateResult(correctResult);
    });

    it('test gen/generate/return_generate returnGenerate', function () {
        returnGenerateParam(correctResult);
    });
}

function returnGenerateParam(correctResult) {
    let retJson = returnGenerateAndAssert("string")
    assert.strictEqual(retJson, correctResult['Generate']['returnGenerate']);

    let retJson1 = returnGenerateAndAssert("NUMBER_TYPE_1")
    assert.strictEqual(retJson1, correctResult['Generate1']['returnGenerate']);

    let retJsonBool = returnGenerateAndAssert("boolean")
    assert.strictEqual(retJsonBool, correctResult['Generate1']['returnGenerateBool']);

    let retJson2 = returnGenerateAndAssert("Array<string>")
    assert.strictEqual(retJson2, correctResult['Generate2']['returnGenerate']);

    let retJsonNum = returnGenerateAndAssert("Array<number>")
    assert.strictEqual(retJsonNum, correctResult['Generate2']['returnGenerateNum']);

    let retJson3 = returnGenerateAndAssert("Array<boolean>")
    assert.strictEqual(retJson3, correctResult['Generate3']['returnGenerate']);

    let retJson4 = returnGenerateAndAssert("string[]")
    assert.strictEqual(retJson4, correctResult['Generate4']['returnGenerate']);

    let retJson5 = returnGenerateAndAssert("boolean[]")
    assert.strictEqual(retJson5, correctResult['Generate5']['returnGenerate']);

    let retJson6 = returnGenerateAndAssert("number[]")
    assert.strictEqual(retJson6, correctResult['Generate6']['returnGenerate']);
}

function returnGenerateAndAssert(dataType, structOfTs) {
    param = {
        valueIn: "",
        valueOut: "",

        valueCheckout: "",
        valueFill: "",
        valuePackage: "",
        valueDefine: ""
    }
    if (null != structOfTs) {
        returnGenerate(dataType, param, structOfTs)
    } else {
        returnGenerate(dataType, param)
    }
    let result = JSON.stringify(param);
    return result
}
function paramGenerateResult(correctResult) {
    let retJson = paramGenerateAndAssert("string")
    ret = JSON.stringify(retJson)
    assert.strictEqual(ret, correctResult['Generate']['ParamGenerate']);

    let retJson1 = paramGenerateAndAssert("NUMBER_TYPE_1")
    assert.strictEqual(retJson1, correctResult['Generate1']['ParamGenerate']);

    let retJsonBool = paramGenerateAndAssert("boolean")
    assert.strictEqual(retJsonBool, correctResult['Generate1']['ParamGenerateBoolean']);

    let retJson2 = paramGenerateAndAssert("Array<string>")
    assert.strictEqual(retJson2, correctResult['Generate2']['ParamGenerate']);

    let retJson3 = paramGenerateAndAssert("Array<boolean>")
    ret = JSON.stringify(retJson3)
    assert.strictEqual(retJson3, correctResult['Generate3']['ParamGenerate']);

    let retJsonNum = paramGenerateAndAssert("Array<number>")
    ret = JSON.stringify(retJsonNum)
    assert.strictEqual(retJsonNum, correctResult['Generate3']['ParamGenerateNum']);

    let retJson4 = paramGenerateAndAssert("string[]")
    assert.strictEqual(retJson4, correctResult['Generate4']['ParamGenerate']);

    let retJson5 = paramGenerateAndAssert("boolean[]")
    assert.strictEqual(retJson5, correctResult['Generate5']['ParamGenerate']);

    let retJsonNumber = paramGenerateAndAssert("number[]")
    assert.strictEqual(retJsonNumber, correctResult['Generate5']['ParamGenerateNum']);

}

function paramGenerateAndAssert(dataType, structOfTs) {
    param = {
        valueIn: "",
        valueOut: "",

        valueCheckout: "",
        valueFill: "",
        valuePackage: "",
        valueDefine: ""
    }
    if (null != structOfTs) {
        paramGenerate(0, "a", dataType, param, structOfTs)
    } else {
        paramGenerate(0, "a", dataType, param)
    }
    let result = JSON.stringify(param);
    return result
}