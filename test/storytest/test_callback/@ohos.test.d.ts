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
        fun11(cb: Callback<number>): void;
        fun12(cb: Callback<void>): void;
        fun13(cb: AsyncCallback<number>): void;
        fun14(cb: AsyncCallback<void>): void;
        fun15(cb: Callback<number>): string;
        fun16(tt: Function): void;
    }

    interface TestClass2 {
        str: string;

    }
    function fun1(cb: Callback<number>): void;
    function fun2(cb: Callback<void>): void;
    function fun3(cb: AsyncCallback<number>): void;
    function fun4(cb: AsyncCallback<void>): void;
    function fun6(tt: Function): void;
 
    // 以下测试用例待支持
    function fun5(cb: Callback<number>): string; // to add testcase for return type is not void
    // function fun6(cb: (wid: boolean) => void): string; // to add testcase cb type is arrow function
    // function fun7(cb: (wid: boolean) => string): string; // to support return type of cbfunction is not void
    // function fun8(cb: (wid: boolean) => string): string; // to support return type of cbfunction is not void 
    // function fun9(cb: (wid: boolean, str: string, tc2:TestClass2) => string): string; // 回调函数参数个数大于1，待支持

    // function registerCbFunc7(cb: Function): void; // 待支持
    // function registerCbFunc8(cb: Function): string; // 待支持
}

export default napitest;
