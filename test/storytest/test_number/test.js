const { fun1, fun2, fun3,fun4,fun5 } = require("./out/build/Release/napitest")
var assert = require("assert");

describe('Number', function () {

    it('test fun1', function () {
        let ret = fun1(1);
        assert.strictEqual(ret, 0);
    });

    function abc(ret) {
        assert.strictEqual(ret, 0);
    }

    it('test fun2', function () {
        fun2([1, 2, 3, 4], abc);
    });

    // it('test fun2', function () {
    //     fun2([1, 2, 3, 4]).then(abc);
    // });

    it('test fun3', function () {
        fun3({ num1: 3 }).then(abc);
    });

    it('test fun4', function () {
        fun4('aaa',abc);
    });

    function def(ret) {
        assert.strictEqual(ret, '');
    }

    it('test fun5', function () {
        fun5(12,def);
        //fun5(12).then(def);
    });

});

