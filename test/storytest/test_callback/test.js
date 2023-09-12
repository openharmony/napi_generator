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
const { TestClass1 } = require("./out/build/Release/napitest")
const testObj = require("./out/build/Release/napitest")
var assert = require("assert");

function onCallback (ret) {
    assert.strictEqual(ret, 0);
}

function onVoidCallback (ret) {
    assert.strictEqual(ret, undefined);
}

function onAsyncCallback (err, ret) {
    assert.strictEqual(err.code, 0);
    assert.strictEqual(ret, 0);
}

function onVoidAsyncCallback (err, ret) {
    assert.strictEqual(err.code, 0);
    assert.strictEqual(ret, undefined);
}

describe('Test callback', function () {
    // fun11(cb: Callback<number>): void;
    it('test callback in interface fun11', function () {
        let testClass = new TestClass1();
        testClass.fun11(onCallback);
    });

    // fun12(cb: Callback<void>): void;
    it('test callback in interface fun12', function () {
        let testClass = new TestClass1();
        testClass.fun12(onVoidCallback);
    });

    // fun13(cb: AsyncCallback<number>): void;
    it('test callback in interface fun13', function () {
        let testClass = new TestClass1();
        testClass.fun13(onAsyncCallback);
    });

    // fun14(cb: AsyncCallback<void>): void; 
    it('test callback in interface fun14', function () {
        let testClass = new TestClass1();
        testClass.fun14(onVoidAsyncCallback);
    });

    // function fun1(cb: Callback<number>): void;
    it('test common func callback fun1', function () {
        let testClass = new TestClass1();
        testObj.fun1(onCallback);
    });

    // function fun2(cb: Callback<void>): void;
    it('test common func callback fun2', function () {
        let testClass = new TestClass1();
        testObj.fun2(onVoidCallback);
    });

    // function fun3(cb: AsyncCallback<number>): void;
    it('test common func callback fun3', function () {
        let testClass = new TestClass1();
        testObj.fun3(onAsyncCallback);
    });

    // function fun4(cb: AsyncCallback<void>): void;
    it('test common func callback fun4', function () {
        let testClass = new TestClass1();
        testObj.fun4(onVoidAsyncCallback);
    });
});

