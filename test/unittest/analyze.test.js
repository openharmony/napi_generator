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
        let structOfTs = analyzeFile("test/@ohos.xxx.d.ts");
        let ret = JSON.stringify(structOfTs)
        assert.strictEqual(ret, `{"exportDefault":["napitest"],"exports":[],"declareType":[],"declareFunction":[],"declareNamespace":[{"name":"napitest","body":{"exports":[],"enum":[],"const":[],"type":[],"function":[{"name":"fun2","type":1,"value":[{"name":"v2","type":"string"},{"name":"numcc","type":"Array<NUMBER_TYPE_4>"},{"name":"mancc","type":"Human"}],"ret":"Array<Human>"},{"name":"fun3","type":2,"value":[{"name":"v2","type":"string"},{"name":"cb","type":"Callback<string>"}],"ret":"void"},{"name":"fun4","type":4,"value":[{"name":"v2","type":"string"},{"name":"cb","type":"AsyncCallback<string>"}],"ret":"void"}],"interface":[{"name":"Human","body":{"value":[{"name":"name","type":"string"},{"name":"age","type":"NUMBER_TYPE_1"}],"function":[]}},{"name":"TestClass1","body":{"value":[{"name":"ahuman","type":"Human"},{"name":"num1","type":"NUMBER_TYPE_2"},{"name":"str1","type":"string"},{"name":"nums","type":"Array<NUMBER_TYPE_3>"},{"name":"strs","type":"Array<string>"},{"name":"mans","type":"Array<Human>"}],"function":[{"name":"if_direct","type":1,"value":[{"name":"v1","type":"string"}],"ret":"string"},{"name":"if_callback","type":2,"value":[{"name":"v1","type":"string"},{"name":"cb","type":"Callback<string>"}],"ret":"string"},{"name":"if_async","type":4,"value":[{"name":"v1","type":"string"},{"name":"cb","type":"AsyncCallback<string>"}],"ret":"string"}]}}],"class":[],"namespace":[{"name":"Space3","body":{"exports":[],"enum":[],"const":[],"type":[],"function":[{"name":"fun3","type":1,"value":[{"name":"v3","type":"string"}],"ret":"string"}],"interface":[{"name":"TestClass2","body":{"value":[{"name":"haha","type":"NUMBER_TYPE_5"}],"function":[]}}],"class":[],"namespace":[{"name":"Space4","body":{"exports":[],"enum":[],"const":[],"type":[],"function":[{"name":"fun3","type":1,"value":[{"name":"v3","type":"string"}],"ret":"string"}],"interface":[{"name":"TestClass3","body":{"value":[{"name":"hoho","type":"NUMBER_TYPE_6"}],"function":[{"name":"add","type":1,"value":[{"name":"v1","type":"Array<NUMBER_TYPE_7>"}],"ret":"NUMBER_TYPE_8"}]}}],"class":[],"namespace":[]}}]}}]}}],"declareInterface":[]}`);
    });
    
    it('test gen/analyze/function analyzeFunction', function () {
        let ret = analyzeFunction("a", `b:number`, "string");
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `{"name":"a","type":1,"value":[{"name":"b","type":"NUMBER_TYPE_9"}],"ret":"string"}`);
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
