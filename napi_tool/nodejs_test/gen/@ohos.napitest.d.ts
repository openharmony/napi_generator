
/*
* Copyright (c) 2021 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
import { AsyncCallback, Callback } from './basic';

declare namespace napitest {
    interface Human {
        name: string;
        age: number;
    }
    interface TestClass1 {
        ahuman: Human;
        num1: number;
        str1: string;
        nums: Array<number>;
        strs: Array<string>;
        mans: Array<Human>;
        if_direct(v1: string): string;
        if_callback(v1: string, cb: Callback<string>): string;
        if_async(v1: string, cb: AsyncCallback<string>): string;
    }

    function fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;
    function fun3(v2: string, cb: Callback<string>): void;
    function fun4(v2: string, cb: AsyncCallback<string>): void;

    namespace Space3 {
        function fun3(v3: string): string;
        interface TestClass2 {
            haha: number;
        }
        namespace Space4 {
            function fun3(v3: string): string;
            interface TestClass3 {
                hoho: number;
                add(v1: Array<number>): number;
            }
        }
    }
}

export default napitest;