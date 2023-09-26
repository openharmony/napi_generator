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
    export class Image {
        width: number;
        height: number;
        toDataURL(type?: string, quality?: number): string;
    }

    export class Human {
        name: string;
        age: number;
    }

    // 变换括号位置
    class Man 
    {
        name: string;
        age: number;
    }

    export enum LaunchReason {
        UNKNOWN = 0,
        START_ABILITY = 1,
        CALL = 2,
        CONTINUATION = 3,
    }

    export class TestClass1 {
        ahuman: Human;
        fun1(v: number): number;
        fun2(numcc: Array<number>, mancc: Human): Human;
        fun3: (v: number, v1: string, v2: boolean) => boolean;
        fun4: (mancc: Map<string, string>,v?: string) => Array<number>;
        fun5: (data: Array<Human>) => Human;
        fun6: (v: string[], v1: { [key: string]: boolean }) => string[];
        fun8: () => void;
        fun9(manA: Man): string;
        fun10(v: Image): string;
        
        //参数为enum
        fun11(v: LaunchReason): string;
        fun12(v: TestStatus): string;
        fun13(v: TestEnumString): string;

        // return value is enum type of defined later
        // to support
        // fun14(v: string): ReturnStatus; 
        // fun15(v: string): ReturnEnumString;

        /*fun7: (v: string, v1: LaunchReason) => LaunchReason;  --待支持*/
    }

    // 数值型枚举
    export enum TestStatus {
        UNKNOWN = 0,
        START_ABILITY = 1,
        CALL = 2,
        CONTINUATION = 3,
    }

    // 字符型枚举
    export enum TestEnumString {
        ACTION_HOME = 'ohos.want.action.home',
        ACTION_DIAL = 'ohos.want.action.dial',
        ACTION_SEARCH = 'ohos.want.action.search',
        ACTION_WIRELESS_SETTINGS = 'ohos.settings.wireless',
    }

    // 数值型枚举
    export enum ReturnStatus {
        UNKNOWN = 0,
        START_RETURN = 1,
        MIDDLE_RETURN = 2,
        END_RETURN = 3,
    }

    // 字符型枚举
    export enum ReturnEnumString {
        RETURN_HOME = 'ohos.want.return.home',
        RETURN_DIAL = 'ohos.want.return.dial',
        RETURN_SEARCH = 'ohos.want.return.search',
        RETURN_WIRELESS_SETTINGS = 'ohos.settings.return.wireless',
    }

    export class TestClass2 {
        // 函数多参数非嵌套场景
        func1(name : string, fp3: {nm: string, age: number, flag: boolean}): string;

        // 函数返回值场景
        func2(input: string): { read: number; written: number; flag: boolean };

        // Promise返回值逗号场景
        func3(from: string, to: string): Promise<{result: number, errMsg: string, isT: boolean}>;

        // Promise返回值分号场景
        func4(from: string, to: string): Promise<{result: number; errMsg: string; isT: boolean}>;
    }
}

export default napitest;
