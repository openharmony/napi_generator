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
import * as vscode from 'vscode';
import { IView } from "../view/iview";
import { IModel } from "../model/imodel";
import { Callback } from "../common/define";

export abstract class IController {
    abstract name: string;
    abstract view: IView;
    abstract model: IModel;
    abstract uri: vscode.Uri;

    private callbacks: Map<string, Callback> = new Map();

    constructor() {
    }

    public abstract init(): void;

    public abstract start(): void;

    public abstract stop(): void;

    public abstract pause(): void;

    public abstract resume(): void;

    public onEvent(event: string, cb: Callback): void {
        this.callbacks.set(event, cb);
    };
    public offEvent(event: string): void {
        this.callbacks.delete(event);
    };
}