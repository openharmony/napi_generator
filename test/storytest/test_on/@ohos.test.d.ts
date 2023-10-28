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
import { AsyncCallback, Callback } from './../basic';

declare namespace napitest {
    interface ModelEvent{
        topic: string;
        message: string;
    }

    // function on(type: string, callback: Callback<number>): void;
    // function on(type: string, callback: Callback<ModelEvent>): void; // Callback为interface
    // function on(type: string, callback: Callback<{topic:string,message:string}>): void; // Callback为匿名interface
    // function on(type: string, callback: Callback<string>): void; // Callback为string
    function on(type: "onEvents", callback: (wid: number) => void): void; // 箭头函数支持
    // function on(type: "onEventFunc", callback: (wid: number, mol: ModelEvent) => void): void; // 箭头函数支持

    interface TestClass1 {
      on(type: string, callback: Callback<boolean>): void;
    }

    interface TestClass2 {
        on(type: string, callback: Callback<ModelEvent>): void; // Callback为interface
    }

    interface TestClass3 {
        on(type: string, callback: Callback<{topic:string,message:string}>): void; // Callback为匿名interface
    }

    interface TestClass4 {
        on(type: string, callback: (wid: boolean) => void): void; // 箭头函数支持
    }

    interface TestClass5 {
        on(type: "inputStart", callback: (wid: boolean, modeEv: ModelEvent) => void): void // 回调函数参数个数大于1，支持
    }

    interface TestClass6 {
        on(type: string, asyncCallback: AsyncCallback<boolean>): void;
    }

    interface TestClass7 {
        on(type: string, asyncCallback: AsyncCallback<ModelEvent>): void; // Callback为interface
    }

    // interface TestClass10 {
    //   // on(type: "heartbeat", callback: Callback<number>): void; // 固定事件，回调参数为boolean支持
    //   // on(type: "heartbeat2", callback: Callback<ModelEvent>): void; // 固定事件，回调参数为ModelEvent支持
    //   // on(type: string, asyncCallback: AsyncCallback<string>): void;
    //   // on(type: string, callback: (wid: boolean) => void): void; // 箭头函数支持
    //   // on(type: string, callback: (wid: boolean) => string): void; // 返回值待支持
    //   // on(type: "inputStart", callback: (wid: boolean, modeEv: ModelEvent) => void): void // 回调函数参数个数大于1，支持
    // }
}

export default napitest;
