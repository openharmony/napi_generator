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
const { TestClass1,TestClass2 } = require("./out/build/Release/napitest")
var assert = require("assert");

describe('Map', function () {

    it('test fun1', function () {
        let testMap1 = {"name":"jonas","age":"18"};
        let ret = fun1(testMap1);
        assert.strictEqual(ret, {});
    });

    it('test fun2', function () {
        let testMap2 = {"name": 666,"age": 18};
        let ret = fun1(testMap2);
        assert.strictEqual(ret, {});
    });

    it('test fun3', function () {
        let testMap3 = {"name": true,"age": false};
        let ret = fun1(testMap3);
        assert.strictEqual(ret, {});
    });

});