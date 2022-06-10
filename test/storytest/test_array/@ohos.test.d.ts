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
import { AsyncCallback } from './../basic';

declare namespace napitest {
    interface PeerInfo {
        readonly deviceName: string;
        readonly networkId: string;
        readonly isOnline: boolean;
    }
    function fun1(v1: Array<string>): number;
    function fun2(v1: Array<number>): number;
    function fun3(v1: Array<boolean>): number;
    function fun4(callback: AsyncCallback<Array<PeerInfo>>): void;
}

export default napitest;
