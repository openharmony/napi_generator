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
import { DtscppRootInfo, GenInfo } from '../gen/datatype';
import { genDtsFile } from '../gen/gendts';
import { GEN_COMPLETE, OPEN_IN_EXPLORER, PARSE_COMPLETE } from '../common/constants';
import { Logger } from '../common/log';
import {
  EVENT_ERROR,
  EVENT_INFORMATION,
  EVENT_PROGRESS,
  EVENT_WARNING
} from '../common/eventtype';
import { genDtsCppFile } from '../gen/gendtscpp';

export class H2dtscppMod extends IModel {
  name: string;
  private static instance: H2dtscppMod;
  constructor() {
    super();
    this.name = 'h2dtscppmod';
  }

  static getInstance(): IModel {
    if (!H2dtscppMod.instance) {
      H2dtscppMod.instance = new H2dtscppMod();
    }
    return H2dtscppMod.instance;
  }

  init(uri: vscode.Uri): void {
    this.uri = uri;
  }

  async doStart(): Promise<void> {
    try {
      if (this.uri) {
        // analyze
        let parseRes = await parseHeaderFile(this.uri.fsPath);
        let fileName = path.basename(this.uri.fsPath, '.h');
        Logger.getInstance().debug('parse header file res: ' + parseRes);
        Logger.getInstance().debug('parse header file jsonstr: ' + JSON.stringify(parseRes));
    
        // progress.report({ increment: 50, message: PARSE_COMPLETE });
        this.emmitEventForKey(EVENT_PROGRESS, 50, PARSE_COMPLETE);

        // let rootInfo: DtscppRootInfo = {
        //   funcs: funDescList.funcs,
        //   rawFilePath: this.uri.fsPath,
        //   fileName: fileName // xxx
        // };

        let rootInfo: GenInfo = {
          parseObj: parseRes,
          rawFilePath: this.uri.fsPath,  // e://xxx.h
          fileName: path.basename(this.uri.fsPath, '.h')  // xxx
        };
    
        // generator
        let out = path.dirname(this.uri.fsPath);
        // genDtsCppFile(rootInfo, out);
        gendtscppFromH(rootInfo);
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
        let errmsg = 'parse header file error with undefine uri';
        Logger.getInstance().error(errmsg);
        this.emmitEventForKey(EVENT_ERROR, -1, errmsg);
      }
    } catch (e) {
      let errmsg = 'parse header file error: ' + JSON.stringify(e);
      Logger.getInstance().error(errmsg);
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