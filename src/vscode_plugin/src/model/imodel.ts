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
import { Callback } from "../common/define"
import { Logger } from "../common/log";
export abstract class IModel {
    abstract name: string;
    uri: vscode.Uri | undefined = undefined;
    callbacks: Map<string, Callback> = new Map();

    abstract init(uri: vscode.Uri): void;
    abstract doStart(): void;
    abstract doStop(): void;
    abstract doPause(): void;
    abstract doResume(): void;

    public onEvent(event: string, cb: Callback): void {
        this.callbacks.set(event, cb);
    };

    public offEvent(event: string): void {
        this.callbacks.delete(event);
    };

    public emmitAllEvent(...args: any[]): void {
        this.callbacks.forEach(callback => callback(...args));
    }

    public emmitEventForKey(event: string, ...args: any[]): void {
        const callback = this.callbacks.get(event);
        if (callback) {
            callback(...args);
        } else {
            Logger.getInstance().error(`No callback found with key "${event}".`);
        }
    }
}