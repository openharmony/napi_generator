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

import { genHdfFile } from '../gen/genhdf';

export class H2hdfMod extends IModel {
  name: string;
  versionTag: string = '4.1';
  serviceId: string = '19000';
  private static instance: H2hdfMod;

  constructor() {
    super();
    this.name = 'h2dtsmod';
  }

  static getInstance(): IModel {
    if (!H2hdfMod.instance) {
        H2hdfMod.instance = new H2hdfMod();
    }
    return H2hdfMod.instance;
  }

  setVersionTag(version: string) {
    this.versionTag = version;
  }

  setServiceId(id: string) {
    this.serviceId = id;
  }

  init(uri: vscode.Uri): void {
    this.uri = uri;
  }

  async generateHdf(hdfInputPath: string, versionTag: string) {
    // analyze
    let funDescList = await parseHeaderFile(hdfInputPath);
    console.log('parse header file res: ', funDescList);
    console.log('parse header file jsonstr: ', JSON.stringify(funDescList));
    this.emmitEventForKey(EVENT_PROGRESS, 50, PARSE_COMPLETE);
    // generator
    let out = path.dirname(hdfInputPath);
    let driverName = path.basename(hdfInputPath, '.h').toLocaleLowerCase();
    let rootInfo = {
      driverName: driverName,
      funcs: funDescList.funcs,
      versionTag: versionTag
    };
    genHdfFile(rootInfo, out);
    // progress.report({ increment: 100, message: GEN_COMPLETE + out});
    this.emmitEventForKey(EVENT_PROGRESS, 100, GEN_COMPLETE + out);
  
    // toast the message of output dir
    const choice = await vscode.window.showInformationMessage('outPath:', path.dirname(hdfInputPath), OPEN_IN_EXPLORER);
    if (choice === OPEN_IN_EXPLORER) {
      // open the output in folder
      vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(hdfInputPath));
    }
  }
  
  async doStart(): Promise<void> {
    try {
      if (this.uri) {
        this.generateHdf(this.uri.fsPath, this.versionTag);
      } else {
        let errmsg = 'parse header file error with undefine uri.';
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