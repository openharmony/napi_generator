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
const { Demo, Test, funcTest, funcTest2 } = require("./out/build/Release/napitest")
const test = require("./out/build/Release/napitest")
var assert = require("assert");
const { consumers } = require("stream");

describe('Class Nest', function () {
    it('test Demo equals', function () {
        let tc1 = new Demo();
        let ret = tc1.equals({
          intPro: 1,
          strPro: "string",
          boolPro: true,
          inter: {abc: "abc", def: 7},
          type: test.Type.typeA,
        });
        assert.strictEqual(ret, false);
    });

    it('test Test func', function () {
      let tc1 = new Test();
      let ret = tc1.func(test.Type.typeB);
      assert.strictEqual(ret, false);
    });

    it('test funcTest', function () {
      let ret = funcTest(test.Type.typeA);
      assert.strictEqual(ret, false);
    });

    it('test funcTest2', function () {
      let ret = funcTest2({type: test.Type.typeB});
      assert.strictEqual(ret, false);
    });
});