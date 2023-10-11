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
    interface TestClass1 {
        on(type: string, callback: Callback<boolean>): void; 
    }
    //function on(type: string, callback: Callback<string>): void;

    function on(type: string, callback: Callback<{topic:string,message:string}>): void;

    

    interface ModelEvent{
        topic: string;
        message: string;
    }
    // function on(type: string, callback: Callback<ModelEvent>): void; //待封装用例
    // function on(type: "heartbeat", callback: Callback<ModelEvent>): void; // 待测试
}

export default napitest;
