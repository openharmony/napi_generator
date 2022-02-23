const { TestClass1 } = require("./out/build/Release/napitest")
var assert = require("assert");

describe('Number', function () {
    function abc(ret) {
        assert.strictEqual(ret, 0);
    }

    it('test TestClass1 fun1', function () {
        let tc1 = new TestClass1();
        let ret = tc1.fun1(1);
        assert.strictEqual(ret, 0);
    });

    
    it('test TestClass1 fun2', function () {
        let tc1 = new TestClass1();
        let ret = tc1.fun2('aaa');
        let retJson = JSON.stringify(ret);
        assert.strictEqual(retJson, '{"code":0,"data":""}');
    });

});

