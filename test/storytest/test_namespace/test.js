const { TestClass2 } = require("./out/build/Release/napitest")
const test = require("./out/build/Release/napitest")
var assert = require("assert");
const { consumers } = require("stream");

describe('Interface', function () {
    it('test TestClass2 fun3', function () {
        let ret = test.Space3.fun3("kkk");
        assert.strictEqual(ret, '');
    });

    it('test TestClass2 fix', function () {
        let tc1 = new test.Space3.TestClass2();
        let ret = tc1.fix('ccc');
        assert.strictEqual(ret, '');
    });

    it('test TestClass2 fun4', function () {
        let tc1 = new test.Space3.TestClass2();
        let ret = tc1.fun2([1,2,3,4],{name:'haha',age:20});
        let retJson=JSON.stringify(ret);
        assert.strictEqual(retJson, '{"name":"","age":0}');
    });
});





