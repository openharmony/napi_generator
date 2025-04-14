
/*
* Copyright (c) 2025 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
import { GenInfo } from "../datatype";
import { replaceAll } from "../../common/tool";
import * as fs from 'fs';
import { Logger } from '../../common/log';

// 生成common.h文件,这个读模板直接生成
export function doGenCommonHFile(rootInfo: GenInfo, fileContent: string) {
  try {
    let upperFileName = rootInfo.fileName.toLocaleUpperCase();
    fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
    fileContent = replaceAll(fileContent, '[upper_filename]', upperFileName);
  } catch (error) {
    let errmsg = 'generate napi common.h fileContent error: ' + JSON.stringify(error);
    Logger.getInstance().error(errmsg);
  }
  return fileContent;
}

export function genCommonHFile(rootInfo: GenInfo, filePath: string,
  fileContent: string) {
  fileContent = doGenCommonHFile(rootInfo, fileContent);
  fs.writeFileSync(filePath, fileContent);
}