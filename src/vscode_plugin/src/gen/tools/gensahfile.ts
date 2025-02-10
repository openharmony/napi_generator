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

import { replaceAll } from '../../common/tool';
import * as fs from 'fs';
import { FuncObj, ServiceRootInfo } from '../datatype';
import { genDeclareContent } from './gencommonfunc';

export function doGenSaHFile(rootInfo: ServiceRootInfo, fileContent: string): string {
  let funcList: FuncObj[] = rootInfo.funcs;
  let saFuncHContent = genDeclareContent(funcList);
  fileContent = replaceAll(fileContent, '[serviceName]', rootInfo.serviceName);
  fileContent = replaceAll(fileContent, '[marcoName]', rootInfo.serviceName.toUpperCase());
  fileContent = replaceAll(fileContent, '[lowServiceName]', rootInfo.serviceName.toLowerCase());
  fileContent = replaceAll(fileContent, '[serviceHFunctions]', saFuncHContent);
  return fileContent;
}

// 生成 xxx_service.h
export function genSaHFile(rootInfo: ServiceRootInfo, filePath: string, fileContent: string) {
  fileContent = doGenSaHFile(rootInfo, fileContent);
  fs.writeFileSync(filePath, fileContent);
}