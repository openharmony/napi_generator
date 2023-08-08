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
const { Animal } = require("./out/build/Release/napitest")
const test = require("./out/build/Release/napitest")
var assert = require("assert");
const { consumers } = require("stream");

describe('type function', function () {
  it('test fun1', function () {
    let ret = test.fun1({ tomato: 'iutluhkd', tomatoId: 52, isTomato: true });
    assert.deepStrictEqual(ret, 0);
  });

  it('test fun2', function () {
    let ret = test.fun2(true);
    let retJson = JSON.stringify(ret);
    assert.strictEqual(retJson, '{"tomato":"","tomatoId":0,"isTomato":false}');
  });

  it('test fun3', function () {
    let ret = test.fun3('missssss', 24, false);
    assert.deepStrictEqual(ret, false);
  });

  it('test fun4', function () {
    let ret = test.fun4('aaa');
    assert.deepStrictEqual(ret, '');
  });

  it('test fun5', function () {
    let ret = test.fun5(22);
    assert.deepStrictEqual(ret, 0);
  });

  it('test fun6', function () {
    let ret = test.fun6(true);
    assert.deepStrictEqual(ret, false);
  });

  it('test fun7', function () {
    let ret = test.fun7(true);
    assert.deepStrictEqual(ret, 0);
    let ret2 = test.fun7(16);
    assert.deepStrictEqual(ret2, 0);
    let ret3 = test.fun7('fun7');
    assert.deepStrictEqual(ret3, 0);
  });

  it('test fun8', function () {
    let ret = test.fun8('keyup');
    assert.deepStrictEqual(ret, '');
    let ret2 = test.fun8('keydown');
    assert.deepStrictEqual(ret2, '');
  });
});

describe('Interface', function () {
  it('test Animal catFunc1', function () {
      let tc1 = new Animal();
      let ret = tc1.catFunc1('cat');
      assert.deepStrictEqual(ret, '');
  });

  it('test Animal catFunc2', function () {
      let tc = new Animal();
      let ret = tc.catFunc2(23);
      assert.deepStrictEqual(ret, 0);
  });

  it('test Animal catFunc3', function () {
      let tc = new Animal();
      let ret = tc.catFunc3(true);
      assert.deepStrictEqual(ret, false);
  });

  it('test Animal catFunc4', function () {
      let tc = new test.Animal();
      let ret = tc.catFunc4({ tomato: 'ImageTomato', tomatoId: 12, isTomato: true });
      assert.deepStrictEqual(ret, '');
  });

  it('test Animal catFunc5', function () {
    let tc = new test.Animal();
    let ret = tc.catFunc5(66);
    let retJson = JSON.stringify(ret);
    assert.strictEqual(retJson, '{"tomato":"","tomatoId":0,"isTomato":false}');
  });
});




