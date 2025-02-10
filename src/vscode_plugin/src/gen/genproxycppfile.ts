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

import { getTab, replaceAll } from '../common/tool';
import * as fs from 'fs';
import { format } from 'util'
import { FuncObj, ParamObj, ServiceRootInfo } from './datatype';
import { genRead, genWrite, getFuncParamStr } from './genCommonFunc';
import { proxyFuncTemplate } from '../template/func_template';

function genProxyFunc(funcInfo: FuncObj, className: string, paramStr: string, funcEnum: string) {
  let proxyFunc = replaceAll(proxyFuncTemplate, '[serviceName]', className);
  proxyFunc = replaceAll(proxyFunc, '[funcName]', funcInfo.name);
  proxyFunc = replaceAll(proxyFunc, '[params]', paramStr);
  proxyFunc = replaceAll(proxyFunc, '[retType]', funcInfo.returns);
  proxyFunc = replaceAll(proxyFunc, '[funcEnum]', funcEnum);

  // 入参处理
  let writeDataStr = '';
  let tab = getTab(1);
  for (let i = 0; i < funcInfo.parameters.length; ++i) {
    let param = funcInfo.parameters[i];
    writeDataStr += (i === 0) ? '' : '\n' + tab;
    writeDataStr += genWrite(param.name, 'data', param.type)
  }
  proxyFunc = replaceAll(proxyFunc, '[writeData]', writeDataStr);

  // 返回值处理
  let readReplyStr = '';
  if (funcInfo.returns !== 'void') {
    readReplyStr = format('%s result;', funcInfo.returns);
    let destObj: ParamObj = {
      'name': 'result',
      'type': funcInfo.returns,
      'arraySize': -1,
    };
    readReplyStr += '\n' + tab + genRead('reply', destObj);
    readReplyStr += '\n' + tab + 'return result;';
  }
  proxyFunc = replaceAll(proxyFunc, '[readReply]', readReplyStr);

  return proxyFunc;
}

// 生成 xxx_service_proxy.cpp
export function genProxyCppFile(rootInfo: ServiceRootInfo, filePath: string, fileContent: string) {
  let funcList: FuncObj[] = rootInfo.funcs;
  let proxyFuncCpp = '';
  for (let i = 0; i < funcList.length; ++i) {
    let funcEnum = funcList[i].name.toUpperCase();
    let paramStr = getFuncParamStr(funcList[i].parameters);
    // proxy.cpp中的方法实现
    proxyFuncCpp += genProxyFunc(funcList[i], rootInfo.serviceName, paramStr, funcEnum);
  }
  fileContent = replaceAll(fileContent, '[serviceName]', rootInfo.serviceName);
  fileContent = replaceAll(fileContent, '[marcoName]', rootInfo.serviceName.toUpperCase());
  fileContent = replaceAll(fileContent, '[lowServiceName]', rootInfo.serviceName.toLowerCase());
  fileContent = replaceAll(fileContent, '[remoteFuncImpl]', proxyFuncCpp);
  fs.writeFileSync(filePath, fileContent);
}