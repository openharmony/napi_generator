
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

import { replaceAll, getTab } from '../common/tool';
import * as fs from 'fs';
import { format } from 'util'
import { FuncObj, ParamObj, ServiceRootInfo } from './datatype';

function getClientFuncParamStr(params: ParamObj[]) {
  let paramStr = '';
  for (let i = 0; i < params.length; ++i) {
    paramStr += (i === 0) ? '' : ', ';
    paramStr += params[i].name;
  }
  return paramStr;
}

// 生成xxx_client.cpp
export function genClientCppFile(rootInfo: ServiceRootInfo, filePath: string, fileContent: string) {
  let clientFuncCpp = '';
  let funcList: FuncObj[] = rootInfo.funcs;
  let funcTab = getTab(1);
  for (let i = 0; i < funcList.length; ++i) {
    let clientParamStr = getClientFuncParamStr(funcList[i].parameters);
    clientFuncCpp += (i === 0) ? '' : '\n' + funcTab;
    clientFuncCpp += format('// proxy->%s(%s);', funcList[i].name, clientParamStr);
  }
  fileContent = replaceAll(fileContent, '[serviceName]', rootInfo.serviceName);
  fileContent = replaceAll(fileContent, '[marcoName]', rootInfo.serviceName.toUpperCase());
  fileContent = replaceAll(fileContent, '[lowServiceName]', rootInfo.serviceName.toLowerCase());
  fileContent = replaceAll(fileContent, '[clientFuncInvoke]', clientFuncCpp);
  fs.writeFileSync(filePath, fileContent);
}