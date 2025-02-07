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
import { WelcomeMod } from "../model/welcomemod";
import { IModel } from "../model/imodel";
import { IView } from "./iview";
import { 
  EVENT_ERROR,
  EVENT_INFORMATION,
  EVENT_PROGRESS,
  EVENT_WARNING
} from '../common/eventtype';
import { IController } from '../controller/icontroller';
import { doAsyncQuickPick, toastMsg } from '../common/widget';
import { CONFIRM_SELECT, HDF_FRAMEWORK, INPUT_INCONSISTENT, INPUT_NO_EMPTY, INPUT_NUMBER, INPUT_SERVICEID, NAPI_FRAMEWORK, SA_FRAMEWORK, SELECT_FRAMWORK, SELECT_VERSION } from '../common/constants';

export class WelcomeView extends IView {
  name: string;
  model: IModel;
  controller: IController | undefined;
  progress: vscode.Progress<{ message?: string; increment?: number; }> | undefined = undefined;
  constructor() {
    super();
    this.name = 'h2dtsview';
    this.model = WelcomeMod.getInstance();
  }

  init(controller: IController): void {
    this.controller = controller;

    this.model.onEvent(EVENT_PROGRESS, (percent, info) => {
      if (this.progress) {
        this.progress.report({ increment: percent, message: info })
      }
    })
    this.model.onEvent(EVENT_ERROR, (errno, errmsg) => {
      vscode.window.showErrorMessage(errmsg);
    })
    this.model.onEvent(EVENT_WARNING, (errno, errmsg) => {
      vscode.window.showWarningMessage(errmsg);
    })
  }

  asyncCB = async (value: string) => {
    await vscode.window.showInputBox({ 
      placeHolder: CONFIRM_SELECT,
      validateInput: (input) => {
        if (!input) {
          return INPUT_NO_EMPTY;
        }
        if (input !== value) {
          return INPUT_INCONSISTENT;
        }
      }
    });

    if (this.model) {
      let welcomeMode = this.model as WelcomeMod;
      welcomeMode.setGenType(value);

      const options: vscode.OpenDialogOptions = {
        canSelectFiles: true,
        canSelectFolders: true,
        canSelectMany: false,
        defaultUri: vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri : undefined,
        openLabel: 'Select'
      };

      vscode.window.showOpenDialog(options).then(fileUri => {
        if (fileUri && fileUri[0]) {
          const filePath = fileUri[0].fsPath;
          console.log('Selected path:', filePath);
          vscode.window.withProgress({
              location: vscode.ProgressLocation.Notification,
              title: 'Generating DTSCPP...',
              cancellable: false
            }, async (progress) => {
              this.progress = progress;
              if (this.controller) {
                this.controller.uri = fileUri[0];
                this.controller.start();
              }  
            })
        }
      });
    }
  }

  showProgress(): void {
    try {
      doAsyncQuickPick(
        [HDF_FRAMEWORK, SA_FRAMEWORK, NAPI_FRAMEWORK], 
        { placeHolder: SELECT_FRAMWORK },
        this.asyncCB
      )
    } catch (error) {
      let errmsg = this.name + " showProgress error: " + JSON.stringify(error);
      toastMsg(EVENT_ERROR, errmsg);
    }  
  }
  
  showMsg(event: string, msg: string): void {
    toastMsg(event, msg);
  }
}