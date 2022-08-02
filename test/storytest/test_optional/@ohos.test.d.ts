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

    // test basic type
    interface TestClass1 {
		interFun1(v0?:string, v1?: string, v2?: number, v3?: boolean): number;
    }
	function fun1(v0:string, v1?: string, v2?: number, v3?: boolean): number;
	
    // test array
	function fun21(v0: string, v1?: Array<string>): number;
	interface TestClass2 {
        interFun21(v0?: Array<number>, v1?: Array<string>, v2?: Array<boolean>): number; 
    }
    
    // test enum
    export enum GrantStatus {
        PERMISSION_DEFAULT = "",
        PERMISSION_DENIED = "-1",
        PERMISSION_GRANTED = "2",
        PERMISSION_PASS = "3",
    }
    export enum HttpStatus {
        STATUS0 = 0,
        STATUS1 = 500,
        STATUS2 = 503,
    }
    function fun31(v0?: HttpStatus, v1?: GrantStatus): number;
    function fun32(reason: string, callback?: Callback<HttpStatus>): void;
    
    // test interface
    interface TestClass4 {
        interFun41(v0?: Human, v1?: Human, v2?: Human): number;
    }
    function fun41(v0?: Human, v1?: Human, v2?: Human): number;
    function fun42(v0?: Human, v2?: Array<Human>): number;
    function fun43(v0?: Human, callback?: Callback<Human>): void;
    function fun44(v0?: {name: string, age: number}): number;
}

export default napitest;
