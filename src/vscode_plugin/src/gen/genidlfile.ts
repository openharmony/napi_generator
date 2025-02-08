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
import { idlTransferType } from '../template/functypemap_template';
import { format } from 'util';
import { getTab, replaceAll } from '../common/tool';

// 常用类型转换表, 将C语言常见类型(key)转换为remote data读写函数使用的类型(value)
// 例如 ErrCode 类型在框架中的系统原型为int类型，这里映射成int32_t，
// 因为int32_t类型在 DATA_W_MAP/DATA_R_MAP 表中有对应的读写数据方法(WriteInt32/ReadInt32)
const TYPE_DEF_MAP = new Map(
  [['std::string', 'string'], ['char *', 'string']
]);

function getParcelType(srcType: string) {
  let parcelType = TYPE_DEF_MAP.get(srcType);
  return parcelType === undefined ? srcType : parcelType;
}

// idlTransferType
function getIdlType(cType: string) {
  let rawType = getParcelType(cType);
  for (let index = 0; index < idlTransferType.length; index++) {
    if (rawType === idlTransferType[index].fromType) {
      return idlTransferType[index].tranferContent;
    }
  }
  return cType;
}

function isReturn(type: string) {
  if (type) {
    if (type.indexOf('&')>0 || type.indexOf('**')>0) {
      return true;
    }
  }
  return false;
}

function getIdlFuncParamStr(funcObj: FuncObj) {
  let idlParams = '';
  for (let i = 0; i < funcObj.parameters.length; ++i) {
    let type = getIdlType(funcObj.parameters[i].type);
    // idlParams += (i === 0) && (funcObj.returns !== 'void') ? '' : ', ';
    if (isReturn(funcObj.parameters[i].type)) {
      idlParams += '[out] ' + type + ' ' + funcObj.parameters[i].name + ', ';
    } else {
      idlParams += '[in] ' + type + ' ' + funcObj.parameters[i].name + ', ';
    }
  }
  if (funcObj.returns !== 'void') {
    let retType = getIdlType(funcObj.returns);
    let outName = funcObj.name + 'Out'
    idlParams += '[out] ' + retType + ' ' + outName;
  } else {
    // 如果返回值是void, 去掉参数列表结尾逗号
    idlParams = idlParams.substring(0, idlParams.length - 2);
  }
  return idlParams;
}

// 每个方法一个文件
export function genIdlFile(rootInfo: HdfRootInfo, filePath: string, fileContent: string) {
  let funcTab = getTab(1);
  let idlFuncDefine = '';
  let funcList: FuncObj[] = rootInfo.funcs;
  for (let i = 0; i < funcList.length; ++i) {
    // 生成idl接口定义
    let paramIdlStr = getIdlFuncParamStr(funcList[i]);
    idlFuncDefine += (i === 0) ? '' : '\n' + funcTab;
    idlFuncDefine += format('%s(%s);', funcList[i].name, paramIdlStr);
  }
  let upperName = rootInfo.driverName.substring(0, 1).toLocaleUpperCase();
  let marcoName = upperName + rootInfo.driverName.substring(1, rootInfo.driverName.length);
  fileContent = replaceAll(fileContent, '[driverName]', rootInfo.driverName);
  fileContent = replaceAll(fileContent, '[marcoName]', marcoName);
  fileContent = replaceAll(fileContent, '[idlFunDeclare]', idlFuncDefine);
  fs.writeFileSync(filePath, fileContent);
}