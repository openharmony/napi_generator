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
import { FuncObj, HdfRootInfo } from "./datatype";
import { format } from 'util';
import { getTab, replaceAll } from '../common/tool';

// 干脆这个用来表示hdf的service.h算了， 暂时先把hdf和sa的分开

// 生成方法实现
export function getServiceFuncParamStr(funcObj: FuncObj) {
  let paramStr = '';
  for (let i = 0; i < funcObj.parameters.length; ++i) {
    // paramStr += (i === 0) ? '' : ', ';
    // paramStr += funcObj.parameters[i].type + ' ' + funcObj.parameters[i].name + ', ';
    paramStr += format('const %s& %s, ', funcObj.parameters[i].type, funcObj.parameters[i].name);
  }
  if (funcObj.returns !== 'void') {
    let outName = funcObj.name + 'Out'
    if (funcObj.returns === 'string') {
      funcObj.returns = 'std::string';
    }
    paramStr += funcObj.returns + '& ' + outName;
  } else {
    // 如果返回值是void, 去掉参数列表结尾逗号
    paramStr = paramStr.substring(0, paramStr.length - 2);
  }
  return paramStr;
}

export function genServiceHFile(rootInfo: HdfRootInfo, filePath: string, fileContent: string) {
  let hdiServiceFuncH = '';
  let funcTab = getTab(1);
  let funcList: FuncObj[] = rootInfo.funcs;
  for (let i = 0; i < funcList.length; ++i) {
    // xxx_interface_service.h方法定义
    let paramStr = getServiceFuncParamStr(funcList[i]);
    hdiServiceFuncH += (i === 0) ? '' : '\n' + funcTab;
    hdiServiceFuncH += format('int32_t %s(%s) override;', funcList[i].name, paramStr)
  }
  let upperName = rootInfo.driverName.substring(0, 1).toLocaleUpperCase();
  let marcoName = upperName + rootInfo.driverName.substring(1, rootInfo.driverName.length);
  let upperDriverName = rootInfo.driverName.toLocaleUpperCase();
  fileContent = replaceAll(fileContent, '[driverName]', rootInfo.driverName);
  fileContent = replaceAll(fileContent, '[marcoName]', marcoName);
  fileContent = replaceAll(fileContent, '[driverUpperName]', upperDriverName);
  fileContent = replaceAll(fileContent, '[serviceFuncDeclare]', hdiServiceFuncH);
  fs.writeFileSync(filePath, fileContent);
}