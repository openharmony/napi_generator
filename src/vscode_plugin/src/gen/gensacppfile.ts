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

import { replaceAll } from '../common/tool';
const numericTypes = ['short', 'int', 'long', 'long long', 'float', 'double'];
const boolType = ['bool'];
const charType = ['char', 'string'];
import { serviceFuncImplTemplate } from '../template/func_template';
import * as fs from 'fs';
import { FuncObj, ServiceRootInfo } from './datatype';
import { getFuncParamStr } from './genCommonFunc';

function genServiceFunc(funcInfo: FuncObj, className: string, paramStr: string) {
  let serviceFunc = replaceAll(serviceFuncImplTemplate, '[retType]', funcInfo.returns);
  // 根据类型初始化返回值
  let initRetvalue;
  // let paramsName = '';
  if (numericTypes.includes(funcInfo.returns)) {
    // 数值类型初始化为0
    initRetvalue = '0';
  } else if (boolType.includes(funcInfo.returns)) {
    // 布尔类型初始化为true
    initRetvalue = 'true';
  } else if (charType.includes(funcInfo.returns)) {
    // 字符类型初始化为空字符''
    initRetvalue = '';
  } else {
    // 对于其他类型，这里可以根据需要进行处理
    // 假设是指针类型或其他复杂类型
    initRetvalue = 'nullptr';
  }
  serviceFunc = replaceAll(serviceFunc, '[initRetvalue]', initRetvalue);
  serviceFunc = replaceAll(serviceFunc, '[serviceName]', className);
  serviceFunc = replaceAll(serviceFunc, '[funcName]', funcInfo.name);
  serviceFunc = replaceAll(serviceFunc, '[params]', paramStr);
  return serviceFunc;
}

// 生成 xxx_service.cpp
export function genSaCppFile(rootInfo: ServiceRootInfo, filePath: string, fileContent: string) {
  let funcList: FuncObj[] = rootInfo.funcs;
  let serviceFuncCpp = '';
  for (let i = 0; i < funcList.length; ++i) {
    let paramStr = getFuncParamStr(funcList[i].parameters);
    serviceFuncCpp += genServiceFunc(funcList[i], rootInfo.serviceName, paramStr);
  }
  fileContent = replaceAll(fileContent, '[serviceName]', rootInfo.serviceName);
  fileContent = replaceAll(fileContent, '[marcoName]', rootInfo.serviceName.toUpperCase());
  fileContent = replaceAll(fileContent, '[lowServiceName]', rootInfo.serviceName.toLowerCase());
  fileContent = replaceAll(fileContent, '[serviceFuncImpl]', serviceFuncCpp);
  fs.writeFileSync(filePath, fileContent);
}