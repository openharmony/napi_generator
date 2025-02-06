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

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

import * as vscode from 'vscode';
import { EVENT_ERROR, EVENT_INFORMATION, EVENT_WARNING } from './eventtype';

export function toastMsg(event: string, msg: string) {
    switch(event) {
        case EVENT_ERROR:
            console.error(msg);
            vscode.window.showErrorMessage(msg);
            break;
        case EVENT_INFORMATION:
            console.info(msg);
            vscode.window.showInformationMessage(msg);
            break;
        case EVENT_WARNING:
            console.warn(msg);
            vscode.window.showWarningMessage(msg);
            break;
        default:
            console.log(msg);
            vscode.window.showInformationMessage(msg);
            break;
    }
}