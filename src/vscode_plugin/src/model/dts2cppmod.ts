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
import * as path from 'path';
import { IModel } from "./imodel";
import { parseHeaderFile } from '../parse/parsec';
import { GenInfo } from '../gen/datatype';
import { genDtsFile } from '../gen/gendts';
import { GEN_COMPLETE, OPEN_IN_EXPLORER, PARSE_COMPLETE } from '../common/constants';

import {
  EVENT_ERROR,
  EVENT_INFORMATION,
  EVENT_PROGRESS,
  EVENT_WARNING
} from '../common/eventtype';
import { parseTsFile } from '../parse/parsets';
import { genCppFile } from '../gen/gendtscpp';

export class Dts2cppMod extends IModel {
  name: string;
  private static instance: Dts2cppMod;
  constructor() {
    super();
    this.name = 'dts2cppmod';
  }

  static getInstance(): IModel {
    if (!Dts2cppMod.instance) {
        Dts2cppMod.instance = new Dts2cppMod();
    }
    return Dts2cppMod.instance;
  }

  init(uri: vscode.Uri): void {
    this.uri = uri;
  }

  async doStart(): Promise<void> {
    try {
      if (this.uri) {
        const filename = path.basename(this.uri.fsPath);
        console.log('get filename ' );
        if (filename.endsWith('.d.ts')) {
          // Display a message box to the user
          // analyze
          let res = parseTsFile(this.uri.fsPath);
          console.info('res: ' + JSON.stringify(res));
          // progress.report({ increment: 50, message: PARSE_COMPLETE });
          this.emmitEventForKey(EVENT_PROGRESS, 50, PARSE_COMPLETE);
          // generator
          let out = path.dirname(this.uri.fsPath);
          genCppFile(res, this.uri.fsPath, out);
          // progress.report({ increment: 100, message: GEN_COMPLETE + out });
          this.emmitEventForKey(EVENT_PROGRESS, 100, PARSE_COMPLETE + out);

          // show genarate path
          const choice = await vscode.window.showInformationMessage(
            'outPath:', path.dirname(this.uri.fsPath), OPEN_IN_EXPLORER);
          if (choice === OPEN_IN_EXPLORER) {
            // open the folder
            vscode.commands.executeCommand(
              'revealFileInOS', vscode.Uri.file(this.uri.fsPath));
          }
        } else {
          let errmsg = 'not dts uri is : ' + this.uri.fsPath;
          console.error(errmsg);
          // Display a message box to the user
          //vscode.window.showInformationMessage(`${this.uri.fsPath} is not a .d.ts file!`);
          this.emmitEventForKey(EVENT_ERROR, -1, errmsg);
        }
      } else {
        let errmsg = 'parse header file error with undefine uri';
        console.error(errmsg);
        this.emmitEventForKey(EVENT_ERROR, -1, errmsg);
      }
    } catch (e) {
      let errmsg = 'parse header file error: ' + JSON.stringify(e);
      console.error(errmsg);
      this.emmitEventForKey(EVENT_ERROR, -1, errmsg);
    }
  }

  async doStop(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async doPause(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async doResume(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}