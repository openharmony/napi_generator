const { fun1, fun2, fun3 } = require("./out/build/Release/napitest")
var assert = require("assert");

describe('String', function () {

    it('test fun1', function () {
        let ret = fun1("1");
        assert.strictEqual(ret, '');
    });

    function abc(ret) {
        assert.strictEqual(ret, '');
    }

    it('test fun2', function () {
        fun2(['1', '2', '3', '4'], abc);
    });

    it('test fun3', function () {
        fun3({ string1: '3' }).then(abc);
    });

});

