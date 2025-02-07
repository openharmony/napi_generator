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
import { GEN_COMPLETE, PARSE_COMPLETE } from '../common/constants';

import {
  EVENT_ERROR,
  EVENT_INFORMATION,
  EVENT_PROGRESS,
  EVENT_WARNING
} from '../common/eventtype';

export class CrossCompileMod extends IModel {
  name: string;
  private static instance: CrossCompileMod;
  constructor() {
    super();
    this.name = 'h2dtsmod';
  }

  static getInstance(): IModel {
    if (!CrossCompileMod.instance) {
      CrossCompileMod.instance = new CrossCompileMod();
    }
    return CrossCompileMod.instance;
  }

  init(uri: vscode.Uri): void {
    this.uri = uri;
  }

  async doStart(): Promise<void> {
    try {
      if (this.uri) {
        // parse
        let parseRes = await parseHeaderFile(this.uri.fsPath);
        console.log('parse header file res: ', parseRes);
        this.emmitEventForKey(EVENT_PROGRESS, 50, PARSE_COMPLETE);

        let rootInfo: GenInfo = {
            parseObj: parseRes,
            rawFilePath: this.uri.fsPath,  // e://xxx.h
            fileName: path.basename(this.uri.fsPath, '.h')  // xxx
        };
        // generator
        let outPath = genDtsFile(rootInfo);
        this.emmitEventForKey(EVENT_PROGRESS, 100, PARSE_COMPLETE);
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