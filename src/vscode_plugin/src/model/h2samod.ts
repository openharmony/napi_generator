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
import { genServiceFile } from '../gen/gensa';

import { 
  EVENT_ERROR,
  EVENT_INFORMATION,
  EVENT_PROGRESS,
  EVENT_WARNING
} from '../common/eventtype';

export class H2saMod extends IModel {
  name: string;
  private static instance: H2saMod;
  versionTag: string = '3.2';
  serviceId: string = '19000';

  constructor() {
      super();
      this.name = 'h2dtsmod';
  }

  static getInstance(): IModel {
      if (!H2saMod.instance) {
          H2saMod.instance = new H2saMod();
      }
      return H2saMod.instance;
  }

  init(uri: vscode.Uri): void {
      this.uri = uri;
  }

  setVersionTag(version: string) {
      this.versionTag = version;
  }

  setServiceId(id: string) {
      this.serviceId = id;
  }

  async generateSa(hPath: string, versionTag: string, serviceId: string) {
    // analyze
    let funDescList = await parseHeaderFile(hPath);
    console.log('parse header file res: ', funDescList);
    console.log('parse header file jsonstr: ', JSON.stringify(funDescList));

    this.emmitEventForKey(EVENT_PROGRESS, 50, PARSE_COMPLETE);

    // generator
    let out = path.dirname(hPath);
    let serviceName = path.basename(hPath, '.h');
    let rootInfo = {
      serviceName: serviceName,
      funcs: funDescList.funcs,
      serviceId: serviceId,
      versionTag: versionTag
    };
    genServiceFile(rootInfo, out);
    // progress.report({ increment: 100, message: GEN_COMPLETE + out });
    this.emmitEventForKey(EVENT_PROGRESS, 100, GEN_COMPLETE + out);
  
    // select output dir
    const choice = await vscode.window.showInformationMessage('outPath:', path.dirname(hPath), OPEN_IN_EXPLORER);
    if (choice === OPEN_IN_EXPLORER) {
      // open the folder
      vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(hPath));
    }
  }

  async doStart(): Promise<void> {
    try {
      if (this.uri) {
          this.generateSa(this.uri.fsPath, this.versionTag, this.serviceId);
      } else {
          console.error('parse header file error with undefine uri.');
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