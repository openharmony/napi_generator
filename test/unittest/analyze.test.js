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
const { analyzeFunction } = require(genDir+"analyze/function");
const { analyzeInterface } = require(genDir+"analyze/interface");
const { analyzeNamespace } = require(genDir+"analyze/namespace");
const { analyzeParams } = require(genDir+"analyze/params");
const { analyzeReturn } = require(genDir+"analyze/return");
var assert = require("assert");


describe('Analyze', function () {

    it('test gen/analyze analyzeFile', function () {
        let structOfTs = analyzeFile("test/@ohos.input_sample.d.ts");
        let ret = JSON.stringify(structOfTs)
        assert.strictEqual(ret, `{"exportDefault":[],"exports":[],"declareType":[],"declareFunction":[],"declareNamespace":[],"declareInterface":[],"declareLicense":[]}`);
    });
    
    it('test gen/analyze/function analyzeFunction', function () {
        let ret = analyzeFunction("a", `b:number`, "string");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `{"name":"a","type":1,"value":[{"name":"b","type":"NUMBER_TYPE_1"}],"ret":"string"}`);
    });
    
    it('test gen/analyze/interface analyzeInterface', function () {
        let ret = analyzeInterface("name: string;");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `{"value":[{"name":"name","type":"string"}],"function":[]}`);
    });

    it('test gen/analyze/namespace analyzeNamespace', function () {
        let ret = analyzeNamespace("name: string;");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `{"exports":[],"enum":[],"const":[],"type":[],"function":[],"interface":[],"class":[],"namespace":[]}`);
    });

    it('test gen/analyze/params analyzeParams', function () {
        let ret = analyzeParams("name: string");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `[[],1]`);
    });

    it('test gen/analyze/return analyzeReturn', function () {
        let ret = analyzeReturn("string");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `["string",false]`);
    });

});
