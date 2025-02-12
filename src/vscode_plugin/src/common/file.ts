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

const vscode = require("vscode");
import * as fs from 'fs';
import { getGenerateConf, GEN_TYPE } from './conf';
import { getCurrentTimeString } from './tool';
import * as logs from './log';

export class Filer {
  genType: number = GEN_TYPE.GEN_NEW;
  private static instance: Filer;

  constructor() {
    this.genType = getGenerateConf();
  }

  static getInstance(): Filer {
    if (!Filer.instance) {
      Filer.instance = new Filer();
    }
    return Filer.instance;
  }
 
  setGenType(value: number) {
    this.genType = value;
  }

  getGenType(): number {
    return this.genType;
  }

  getNewFileName(filePath: string): string {
    let pathList = filePath.split('.');
    let prevFile = '';
    for (let i=0;i<pathList.length-1;i++) {
      prevFile = pathList[i];
    }
    let postFile = pathList[pathList.length-1];
    let ctstr = getCurrentTimeString();
    let newFileName = prevFile + ctstr + postFile;
    logs.Logger.getInstance().info('getNewFileName: ' + newFileName);
    return newFileName;
  }

  getNewDirName(dirPath: string): string {
    let ctstr = getCurrentTimeString();
    let newDirName = dirPath + ctstr;
    logs.Logger.getInstance().info('getNewDirName: ' + newDirName);
    return newDirName;
  }

  saveFileSync(filePath: string, fileContent: string): string {
    if (fs.existsSync(filePath)) {
      // TODO: if file exist, replace, append or new file
      switch (this.genType) {
        case GEN_TYPE.GEN_APPEND:
          fs.appendFileSync(filePath, fileContent);
          break;
        case GEN_TYPE.GEN_REPLACE:
          fs.writeFileSync(filePath, fileContent);
          break;
        case GEN_TYPE.GEN_NEW:
          let newFileName = this.getNewFileName(filePath);
          fs.writeFileSync(newFileName, fileContent);
          return newFileName;
          break;
        default:
          logs.Logger.getInstance().error('Unknown gen type!');
          break;
      }
    } else {
      fs.writeFileSync(filePath, fileContent);
    }
    return filePath;
  }

  mkdirSync(dirPath: string): string {
    if (fs.existsSync(dirPath)) {
      // TODO: if file exist, replace, append or new file
      switch (this.genType) {
        case GEN_TYPE.GEN_APPEND:
          logs.Logger.getInstance().warn('Dir ' + dirPath + ' exist');
          break;
        case GEN_TYPE.GEN_REPLACE:
          logs.Logger.getInstance().warn('Dir ' + dirPath + ' exist');
          break;
        case GEN_TYPE.GEN_NEW:
          let newDirName = this.getNewDirName(dirPath);
          fs.mkdirSync(newDirName, { recursive: true });
          return newDirName;
          break;
        default:
          logs.Logger.getInstance().error('Unknown gen type!');
          break;
      }
    } else {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    return dirPath;
  }
}


