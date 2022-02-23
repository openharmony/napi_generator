const { TestClass1,TestClass2 } = require("./out/build/Release/napitest")
const test = require("./out/build/Release/napitest")
var assert = require("assert");
const { consumers } = require("stream");

describe('Interface', function () {

    it('test TestClass1 fun1', function () {
        let tc1 = new TestClass1();
        let ret = tc1.fun1(1);
        assert.strictEqual(ret, 0);
    });

    it('test TestClass1 fun2', function () {
        let tc = new TestClass1();
        let ret = tc.fun2([1,2,3],{name:'haha',age:20});
        let retJson=JSON.stringify(ret);
        assert.strictEqual(retJson, '{"name":"","age":0}');
    });

    it('test TestClass1 fun3', function () {
        let tc = new TestClass1();
        let ret = tc.fun3(2);
        let retJson=JSON.stringify(ret);
        assert.strictEqual(retJson, '0');
    });

    it('test TestClass1 fun4', function () {
        let tc = new test.TestClass1();
        let ret = tc.fun4('aaa',[{name:'haha',age:20},{name:'houhou',age:23}]);
        let retJson=JSON.stringify(ret);
        assert.strictEqual(retJson, '{"name":"","age":0}');
    });
});





