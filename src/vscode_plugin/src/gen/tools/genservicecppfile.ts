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

import * as fs from 'fs';
import { FuncObj, HdfRootInfo } from "../datatype";
import { replaceAll } from '../../common/tool';
import { getServiceFuncParamStr } from './genservicehfile';
import { hdiServiceFuncTemplate } from '../../template/func_template';

export function doGenServiceCppFile(rootInfo: HdfRootInfo, fileContent: string): string {
  let hdiServiceFuncCpp = '';
  let funcList: FuncObj[] = rootInfo.funcs;
  let upperName = rootInfo.driverName.substring(0, 1).toLocaleUpperCase();
  let marcoName = upperName + rootInfo.driverName.substring(1, rootInfo.driverName.length);
  for (let i = 0; i < funcList.length; ++i) {
    // xxx_interface_service.cpp的实现
    let paramStr = getServiceFuncParamStr(funcList[i]);
    let serviceCppContent = replaceAll(hdiServiceFuncTemplate, '[functionName]', funcList[i].name);
    serviceCppContent = replaceAll(serviceCppContent, '[marcoName]', marcoName);
    hdiServiceFuncCpp = replaceAll(serviceCppContent, '[params]', paramStr);
  }
  fileContent = replaceAll(fileContent, '[driverName]', rootInfo.driverName);
  fileContent = replaceAll(fileContent, '[marcoName]', marcoName);
  fileContent = replaceAll(fileContent, '[serviceFuncListImpl]', hdiServiceFuncCpp);
  return fileContent;
}

export function genServiceCppFile(rootInfo: HdfRootInfo, filePath: string, fileContent: string) {
  fileContent = doGenServiceCppFile(rootInfo, fileContent);
  fs.writeFileSync(filePath, fileContent);
}