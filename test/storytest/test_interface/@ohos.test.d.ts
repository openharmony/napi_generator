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
    interface Human {
        name: string;
        age: number;
    }

    // 变换括号位置
    interface Man 
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

    interface TestClass1 {
        ahuman: Human;
        fun1(v: number): number;
        fun2(numcc: Array<number>, mancc: Human): Human;
        fun3: (v: number, v1: string, v2: boolean) => boolean;
        fun4: (mancc: Map<string, string>,v?: string) => Array<number>;
        fun5: (data: Array<Human>) => Human;
        fun6: (v: string[], v1: { [key: string]: boolean }) => string[];
        fun8: () => void;
        fun9(manA: Man): void;
        /*fun7: (v: string, v1: LaunchReason) => LaunchReason;  --待支持*/        
    }

    interface Test {
        aa: string;
        bb?: boolean;
        cc: number;
        dd?: string;
        ee?: number;
        /* ff?: any; --待支持*/  
        /* gg?: object; --待支持*/ 
        /* hh?: LaunchReason; --待支持*/  
    }

    function func1 (v1: Test, v2?: number): string;

    interface ComplexTest {
        a1: Map<string, number>;
        b1?: Map<string, string>;
        c1: Array<number>;
        d1?: Array<string>;
        e1?: number | string | boolean;
        g1?: Test;
    }

    function func2 (v: ComplexTest): string;

    interface testInterface {
        a1: number;
        b1?: string;
        aa: boolean;
        bb?: Array<number>;
        cc?: Map<string, string>;
        dd: Array<boolean>;
        ee: Map<string, number>;
    }

    interface testInterface22 {
        test: testInterface;
    }

    function func3(fp1: testInterface22): string; 
}

export default napitest;
