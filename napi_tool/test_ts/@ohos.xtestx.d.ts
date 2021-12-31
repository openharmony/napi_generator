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

declare namespace xtestx {
    interface valuein_d2 {
        i: Array<string>;
    }
    interface valuein_d1 {
        k: number;
        m: valuein_d2;
    }
    interface valuein {
        a: number;
        b: string;
        c: Array<number>;
        d: Array<string>;
        e: Array<valuein_d1>;
    }

    function test1(z:valuein):number;
}

export default xtestx;
/*
enum->enum
const->const
type->???
function*->function

interface{变量，function}*->class
class{变量，function}->class
namespace{所有}*->namespace
*/