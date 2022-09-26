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
import { Callback } from './../basic';

declare namespace napitest {

    interface Test1 {
        fun1(type: 'callDetailsChange', callback: Callback<string>): void;
        fun3(type: 'activate' | 'activating', name: string, callback: Callback<number>): void;
    }

    class Cat {
        fun4(v: 'FixedParamClass', v1: number[]): boolean;
    }

    type WindowUpdateType = 'add' | 'remove' | 'bounds' | 'active' | 'focus';
    function fun5(type: 'FixedParamName', tag: Array<string>): number;
    function fun6(type: WindowUpdateType, v: number): string;
    function fun7(type: 'add' | 'remove' | 'change', v: string[]): void;
    function fun8(commands: Array<'set_status' | 'set_navigation'>, autoHide: boolean): void;
    function fun9(v: string, v1: { name: number, type: 'delete' | 'return' }): number;
    /*
    interface Test {
        name: 'IPv4' | 'IPv6';
    }*/
}

export default napitest;