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
const { TestClass1, TestClass2, ModelEvent, TestClass3, on, TestClass4,
  TestClass5, TestClass6, TestClass7} = require("./out/build/Release/napitest")
var assert = require("assert");

describe('test 1 on', function () {  
    let ret = false;
    let inter = new ModelEvent({topic:'aa', message:'sit down'});
    function onCallback(val) {
        ret = true;
        console.info('onAsyncCallback val = ' + val)
        console.info('onAsyncCallback ret = ' + ret)
    }

    function onCallback2(inter) {
        ret = true;
        console.info('onCallback inter.topic = ' + inter.topic)
        console.info('onCallback inter.message = ' + inter.message)
    }

    let topic = 'hh';
    let message = 'jjj';
    function onCallbackTest3({topic, message}) {
        ret = true;
        console.info('onCallback topic = ' + topic)
        console.info('onCallback inter.message = ' + inter.message)
    }

    // function on(type: "onEvents", callback: (wid: number) => void): void; // 箭头函数支持
    it('test function on', function () {
        ret = false;
        on('onEvents', onCallback);
        // assert.strictEqual(ret, true);
    });

    // interface TestClass1 {
    //     on(type: string, callback: Callback<boolean>): void; 
    // }
    let tc1 = new TestClass1(); 
    it('test TestClass1 fun1', function () {
        ret = false;
        tc1.on('OnEvent', onCallback);
        // assert.strictEqual(ret, true);
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
        ret = false;
        tc2.on('OnEvent', onCallback2);
        // assert.strictEqual(ret, true);
    });

    // interface TestClass3 {
    //     on(type: string, callback: Callback<{topic:string,message:string}>): void; // Callback为匿名interface
    // }
    let tc3 = new TestClass3(); 
    it('test TestClass3 on', function () {
        ret = false;
        tc3.on('OnEvent', onCallbackTest3);
        // assert.strictEqual(ret, true);
    });
});

describe('test 2 on', function () {
    let ret = false;
    let inter = new ModelEvent({topic:'aa', message:'sit down'});
    function onCallback(val) {
        ret = true;
        console.info('onCallback err = ' + val)
        console.info('onCallback ret = ' + ret)
    }

    function onCallback2(val, inter) {
        ret = true;
        console.info('onCallback2 val = ' + val)
        console.info('onCallback2 inter.topic = ' + inter.topic)
        console.info('onCallback2 inter.message = ' + inter.message)
    }
    
    // interface TestClass4 {
    //   on(type: "heartbeat", callback: (wid: boolean) => void): void; // 箭头函数支持
    // }
    let tc4 = new TestClass4(); 
    it('test TestClass4 on', function () {
        ret = false;
        tc4.on('heartbeat', onCallback);
        // assert.strictEqual(ret, true);
    });

    // interface TestClass5 {
    //   on(type: "inputStart", callback: (wid: boolean, modeEv: ModelEvent) => void): void // 回调函数参数个数大于1，支持
    // }
    let tc5 = new TestClass5(); 
    it('test TestClass5 on', function () {
        ret = false;
        tc5.on('inputStart', onCallback2);
        // assert.strictEqual(ret, true);
    });
});

describe('test 3 on', function () {
    let ret = false;
    let inter = new ModelEvent({topic:'aa', message:'sit down'});
    function onAsyncCallback1(err) {
        ret = true;
        console.info('onAsyncCallback1 err = ' + err)
        console.info('onAsyncCallback1 ret = ' + ret)
    }

    function onAsyncCallback2(inter) {
      ret = true;
      console.info('onAsyncCallback2 inter.topic = ' + inter.topic)
      console.info('onAsyncCallback2 inter.message = ' + inter.message)
    }

    // interface TestClass6 {
    //   on(type: string, asyncCallback: AsyncCallback<boolean>): void;
    // }
    let tc6 = new TestClass6(); 
    it('test TestClass6 on', function () {
        ret = false;
        tc6.on('test1', onAsyncCallback1);
        // assert.strictEqual(ret, true);
    });
  
    // interface TestClass7 {
    //   on(type: string, asyncCallback: AsyncCallback<ModelEvent>): void; // Callback为interface
    // }
    let tc7 = new TestClass7();
    it('test TestClass7 on', function () {
        ret = false;
        tc7.on('test2', onAsyncCallback2);
       // assert.strictEqual(ret, true);
    });
});
