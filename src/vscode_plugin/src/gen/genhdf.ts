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

import * as path from 'path';
import * as fs from 'fs';
import { DirTemp, FuncObj, HdfRootInfo } from "./datatype";
import { hdf4_1dir } from '../template/hdf/hdfdir';
import { idlTransferType } from '../template/functypemap_template';
import { format } from 'util';
import { getTab, replaceAll } from '../common/tool';
import { hdiServiceFuncTemplate } from '../template/func_template';


// 常用类型转换表, 将C语言常见类型(key)转换为remote data读写函数使用的类型(value)
// 例如 ErrCode 类型在框架中的系统原型为int类型，这里映射成int32_t，
// 因为int32_t类型在 DATA_W_MAP/DATA_R_MAP 表中有对应的读写数据方法(WriteInt32/ReadInt32)
const TYPE_DEF_MAP = new Map(
  [['std::string', 'string'], ['char *', 'string']
]);

interface GenResult {
  idlFuncDefine: string, // idl文件中方法的定义
  hdiServiceFuncH: string, // xxx_interface_service.h文件中方法的定义
  hdiServiceFuncCpp: string, // xxx_interface_service.cpp中方法的实现
}

let nameObj = {
  marcoName: '',
  upperDriverName: ''
}

function getParcelType(srcType: string) {
  let parcelType = TYPE_DEF_MAP.get(srcType);
  return parcelType === undefined ? srcType : parcelType;
}

function replaceContent(fileContent: string, funcContent: GenResult, rootInfo: HdfRootInfo) {
  fileContent = replaceAll(fileContent, '[driverName]', rootInfo.driverName);
  fileContent = replaceAll(fileContent, '[marcoName]', nameObj.marcoName);
  fileContent = replaceAll(fileContent, '[driverUpperName]', nameObj.upperDriverName);

  // 替换方法的[xxx]模板
  fileContent = replaceAll(fileContent, '[idlFunDeclare]', funcContent.idlFuncDefine);
  fileContent = replaceAll(fileContent, '[serviceFuncDeclare]', funcContent.hdiServiceFuncH);
  fileContent = replaceAll(fileContent, '[serviceFuncListImpl]', funcContent.hdiServiceFuncCpp);

  return fileContent;
}

// 循环写入文件， 并将funcContent的内容写入模板
function genDir(dirItem: DirTemp, funcContent: GenResult, rootInfo: HdfRootInfo, out: string) 
{
  let dirPath = path.join(out, dirItem.name.replace('[driverName]', rootInfo.driverName));

  // 创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  } 

  // 遍历文件
  dirItem.files.forEach(file => {
    let fileName = file.name.replace('[driverName]', rootInfo.driverName);
    fileName = fileName.replace('[marcoName]', nameObj.marcoName);
    let filePath = path.join(dirPath, fileName);
    // 将content写入文件， 这里的content是模板，需要replace里面的部分内容
    if (!fs.existsSync(filePath)) {
      // replace file content
      // 这里的替换是替换模板公共的东西，方法的替换在哪里生成呢？
      let fileContent = replaceContent(file.content, funcContent, rootInfo)
      fs.writeFileSync(filePath, fileContent);
    }
  })

  // 递归遍历子目录
  dirItem.dirs.forEach(subDir => {
    genDir(subDir, funcContent, rootInfo, dirPath);
  })
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
   if (type.indexOf('&')>0 || type.indexOf('**')>0) {
    return true;
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

// 生成方法实现
function getServiceFuncParamStr(funcObj: FuncObj) {
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

function generateFunctionCode(rootInfo: HdfRootInfo) {
  let funcList: FuncObj[] = rootInfo.funcs;
  // 分析方法列表，并返回方法
  let genResult: GenResult = {
    idlFuncDefine: '',
    hdiServiceFuncH: '',
    hdiServiceFuncCpp: '',
  }
  let funcTab = getTab(1);
  for (let i = 0; i < funcList.length; ++i) {
    
    // 生成idl接口定义
    let paramIdlStr = getIdlFuncParamStr(funcList[i]);
    genResult.idlFuncDefine += (i === 0) ? '' : '\n' + funcTab;
    genResult.idlFuncDefine += format('%s(%s);', funcList[i].name, paramIdlStr);

    // 生成方法的定义与实现
    // xxx_interface_service.h方法定义
    let paramStr = getServiceFuncParamStr(funcList[i]);
    genResult.hdiServiceFuncH += (i === 0) ? '' : '\n' + funcTab;
    genResult.hdiServiceFuncH += format('int32_t %s(%s) override;', funcList[i].name, paramStr)

    // xxx_interface_service.cpp的实现
    let serviceCppContent = replaceAll(hdiServiceFuncTemplate, '[functionName]', funcList[i].name);
    serviceCppContent = replaceAll(serviceCppContent, '[marcoName]', nameObj.marcoName);
    genResult.hdiServiceFuncCpp = replaceAll(serviceCppContent, '[params]', paramStr);
  }
  
  return genResult;
}

export function genHdfFile(rootInfo: HdfRootInfo, out: string) {
  console.info("rootInfo: " + JSON.stringify(rootInfo))

  let upperName = rootInfo.driverName.substring(0,1).toLocaleUpperCase();
  nameObj.marcoName = upperName + rootInfo.driverName.substring(1, rootInfo.driverName.length);
  nameObj.upperDriverName =  rootInfo.driverName.toLocaleUpperCase();

  // 获取方法相关
  let res: GenResult = generateFunctionCode(rootInfo);

  // 生成文件 和 文件夹
  genDir(hdf4_1dir, res, rootInfo, out);

  console.info('generate success!')
}