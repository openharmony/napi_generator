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
const { TestClass1, TestClass2,ModelEvent, TestClass3, on} = require("./out/build/Release/napitest")
var assert = require("assert");

describe('on', function () {  
    let ret = false;
    let inter = new ModelEvent({topic:'aa', message:'sit down'});
    function onAsyncCallback (err) {
        ret = true;
        console.info('onAsyncCallback err = ' + err)
        console.info('onAsyncCallback ret = ' + ret)
    }

    function onCallback (inter) {
        ret = true;
        // console.info('onCallback inter.topic = ' + inter.topic)
        // console.info('onCallback inter.message = ' + inter.message)
    }
    let topic = 'hh';
    let message = 'jjj';
    function onCallbackTest3({topic, message}) {
        ret = true;
        console.info('onCallback topic = ' + topic)
        // console.info('onCallback inter.message = ' + inter.message)
    }

    // interface TestClass1 {
    //     on(type: string, callback: Callback<boolean>): void; 
    // }    
    let tc1 = new TestClass1(); 
    it('test TestClass1 fun1', function () {
        tc1.on('OnEvent', onAsyncCallback);
        assert.strictEqual(ret, true);
    });

    // interface ModelEvent{
    //     topic: string;
    //     message: string;
    // }
    // interface TestClass2 {
    //     on(type: string, callback: Callback<ModelEvent>): void; // Callback为interface
    // }
    let tc2 = new TestClass2(); 
    it('test TestClass2 on', function () {
        tc2.on('OnEvent', onCallback);
        assert.strictEqual(ret, true);
    });

    // interface TestClass3 {
    //     on(type: string, callback: Callback<{topic:string,message:string}>): void; // Callback为匿名interface
    // }
    let tc3 = new TestClass3(); 
    it('test TestClass3 on', function () {
        tc3.on('OnEvent', onCallbackTest3);
        assert.strictEqual(ret, true);
    });
});