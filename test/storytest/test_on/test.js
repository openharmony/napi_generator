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
const { TestClass1, on} = require("./out/build/Release/napitest")
var assert = require("assert");

describe('on', function () { 
    let ret = false;    
    function onAsyncCallback (err) {
        ret = true;
        console.info('onAsyncCallback err = ' + err)
        console.info('onAsyncCallback ret = ' + ret)
    }

    let tc1 = new TestClass1(); 
    it('test TestClass1 fun1', function () {
        tc1.on('OnEvent',onAsyncCallback);
        assert.strictEqual(ret, true);
    });
});