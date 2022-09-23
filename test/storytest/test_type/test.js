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
const { fun5, fun6, fun7, fun8, fun9 } = require("./out/build/Release/napitest")
const { Test1, Cat } = require("./out/build/Release/napitest")
var assert = require("assert");

describe('test', function () {
    function cb(ret) {
        assert.strictEqual(ret, '')
    }

    function cb1(ret) {
        assert.strictEqual(ret, 0)
    }

    it('test fun1', function () {
        let test = new Test1()
        test.fun1('callDetailsChange', cb)
    });

    it('test fun3', function () {
        let test = new Test1()
        test.fun3('activate', 'aaaa', cb1)
    });

    it('test fun4', function () {
        let cat = new Cat()
        let ret = cat.fun4('FixedParamClass', [15, 18])
        assert.deepStrictEqual(ret, false)
    });

    it('test fun5', function () {
        let ret = fun5('FixedParamName', ['aaa', 'bbb'])
        assert.deepStrictEqual(ret, 0)
    });

    it('test fun6', function () {
        let ret = fun6('add', 15)
        assert.deepStrictEqual(ret, '')
    });

    it('test fun7', function () {
        let ret = fun7('remove', ['aaa', 'bbb'])
        assert.deepStrictEqual(typeof ret, 'undefined')
    });
});