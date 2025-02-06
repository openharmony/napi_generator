/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import { IController } from "../controller/icontroller";
import { IModel } from "../model/imodel";

export abstract class IView {
    abstract name: string;
    abstract model: IModel;
    abstract controller: IController | undefined;

    abstract init(controller: IController): void;
    abstract showProgress(): void;
    abstract showMsg(event: string, msg: string): void;
}