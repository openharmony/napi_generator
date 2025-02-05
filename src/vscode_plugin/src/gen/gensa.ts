
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

import { replaceAll, getTab } from '../common/tool';
import { getReg, match } from '../common/re';
const numericTypes = ['short', 'int', 'long', 'long long', 'float', 'double'];
const boolType = ['bool'];
const charType = ['char', 'string'];
import { service4_1_dir, service3_2_dir } from '../template/sa/sadir';
import { proxyFuncTemplate, stubInnerFuncTemplate, serviceFuncImplTemplate } from '../template/func_template';
import * as path from 'path';
import * as fs from 'fs';
import { format } from 'util'
import { DirTemp, FuncObj, ParamObj, ServiceRootInfo } from './datatype';
import { transferMap } from '../template/functypemap_template'

// 常用类型转换表, 将C语言常见类型(key)转换为remote data读写函数使用的类型(value)
// 例如 ErrCode 类型在框架中的系统原型为int类型，这里映射成int32_t，
// 因为int32_t类型在 DATA_W_MAP/DATA_R_MAP 表中有对应的读写数据方法(WriteInt32/ReadInt32)
const TYPE_DEF_MAP = new Map(
  [['ErrCode', 'int32_t'], ['char', 'int8_t'], ['short', 'int16_t'], ['int', 'int32_t'], ['long', 'int64_t'],
  ['unsigned char', 'uint8_t'], ['unsigned short', 'uint16_t'], ['unsigned int', 'uint32_t'], 
  ['unsigned long', 'uint64_t'], ['double_t', 'double'], ['float_t', 'float'], ['size_t', 'double'],
  ['long long', 'double'], ['long double', 'double'], ['std::string', 'string']
]);

interface DestObj {
  name: string,
  type: string,
}

interface GenResult {
  funcEnumStr: string,
  // i_service.h 方法定义
  iServiceFuncH: string, 
  // proxy.h 方法定义
  proxyFuncH: string, 
  // stub.h 的inner方法定义
  stubInnerFuncH: string, 
  // proxy.cpp 方法实现
  proxyFuncCpp: string, 
  // stub.cpp 的inner方法映射表
  stubInnerFuncMap: string, 
  // stub.cpp 的inner方法实现
  stubInnerFuncCpp: string, 
  // service.cpp的方法实现: 参数初始化
  serviceFuncCpp: string, 
  // client.cpp 的inner方法定义
  clientFuncCpp: string, 
};

function getParcelType(srcType: string) {
  let parcelType = TYPE_DEF_MAP.get(srcType);
  return parcelType === undefined ? srcType : parcelType;
}

function getFuncParamStr(params: ParamObj[]) {
    let paramStr = '';
    for (let i = 0; i < params.length; ++i) {
        paramStr += (i === 0) ? '' : ', ';
        paramStr += params[i].type + ' ' + params[i].name;
    }
    return paramStr;
}

function getClientFuncParamStr(params: ParamObj[]) {
    let paramStr = '';
    for (let i = 0; i < params.length; ++i) {
        paramStr += (i === 0) ? '' : ', ';
        paramStr += params[i].name;
    }
    return paramStr;
}

function getTransferContent(parcelVecType: string, isWrite: number) {
  let rwFunc = '';
  for (let index = 0; index < transferMap.length; index++) {
    if (parcelVecType === transferMap[index].fromType) {
      rwFunc = transferMap[index].tranferContent[isWrite];
    }
  }
  return rwFunc;
}

function genWrite(srcName: string, parcelName: string, vType: string) {
  let matchs = match('(std::)?vector<([\x21-\x7e]+)[ ]?>', vType);
  if (matchs) {
      // vector类型变量包装成parcel data
      let rawType = getReg(vType, matchs.regs[2]);
      let parcelVecType = 'vector<' + getParcelType(rawType) + '>';
      let wVecFunc = getTransferContent(parcelVecType, 0);
      if (wVecFunc === '') {
          return '';
      }
      return format('%s.%s(%s);', parcelName, wVecFunc, srcName);
  }
  
  let parcelType = getParcelType(vType);
  let wFunc = getTransferContent(parcelType, 0);

  return format('%s.%s(%s);', parcelName, wFunc, srcName);
}

function genRead(parcelName: string, destObj: DestObj) {
  let matchs = match('(std::)?vector<([\x21-\x7e]+)[ ]?>', destObj.type);
  if (matchs) {
      // 从parcel data中读取vector类型变量
      let rawType = getReg(destObj.type, matchs.regs[2]);
      let parcelVecType = getParcelType(rawType);
      let rVecFunc = 'vector<' + getTransferContent(parcelVecType, 1) + '>';
      if (rVecFunc === '') {
          return '';
      }
      return format('%s.%s(&(%s));', parcelName, rVecFunc, parcelName);
  }

  let parcelType = getParcelType(destObj.type);
  let rFunc = getTransferContent(parcelType, 1);
  return format('%s = %s.%s();', destObj.name, parcelName, rFunc);
}

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
        let destObj: DestObj = {
            'name': 'result',
            'type': funcInfo.returns
        };
        readReplyStr += '\n' + tab + genRead('reply', destObj);
        readReplyStr += '\n' + tab + 'return result;';
    }
    proxyFunc = replaceAll(proxyFunc, '[readReply]', readReplyStr);

    return proxyFunc;
}

function genStubInnerFunc(funcInfo: FuncObj, className: string) {
    let innerFunc = replaceAll(stubInnerFuncTemplate, '[serviceName]', className);
    innerFunc = replaceAll(innerFunc, '[funcName]', funcInfo.name);

    // 入参处理
    // 生成服务端读取客户端传参的代码段
    let readDataStr = ''; 
    let tab = getTab(1);
    // 调用业务方法时传入的入参列表
    let innerParamStr = ''; 
    for (let i = 0; i < funcInfo.parameters.length; ++i) {
        let param = funcInfo.parameters[i];
        let innerParamName = param.name + 'Val';
        if (i > 0) {
            readDataStr += '\n' + tab;
            innerParamStr += ' ,';
        }

        //将remote请求中的参数值读取到内部参数变量中
        // 定义内部参数变量
        readDataStr += format('%s %s;', param.type, innerParamName); 
        let destObj = {
            'name': param.name + 'Val',
            'type': param.type
        };
        readDataStr += '\n' + tab + genRead('data', destObj);
        innerParamStr += innerParamName;
    }
    innerFunc = replaceAll(innerFunc, '[readData]', readDataStr);

    // 调用service的实际业务逻辑实现方法
    // 生成调用服务端实现并返回结果的代码段
    let writeReplyStr = ''; 
    if (funcInfo.returns === 'void') {
        writeReplyStr += format('%s(%s); // call business implementation', funcInfo.name, innerParamStr);
        writeReplyStr += '\n' + tab + 'reply.WriteInt32(retCode);';
    } else {
        writeReplyStr += format('%s retVal = %s(%s);  // call business implementation',
          funcInfo.returns, funcInfo.name, innerParamStr);
        writeReplyStr += '\n' + tab + 'reply.WriteInt32(retCode);';
        writeReplyStr += '\n' + tab + genWrite('retVal', 'reply', funcInfo.returns);
    }
    innerFunc = replaceAll(innerFunc, '[writeReply]', writeReplyStr);
    return innerFunc;
}

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
    }8
    serviceFunc = replaceAll(serviceFunc, '[initRetvalue]', initRetvalue);
    serviceFunc = replaceAll(serviceFunc, '[serviceName]', className);
    serviceFunc = replaceAll(serviceFunc, '[funcName]', funcInfo.name);
    serviceFunc = replaceAll(serviceFunc, '[params]', paramStr);
    return serviceFunc;
}

function generateFunctionCode(rootInfo: ServiceRootInfo) {
  let funcList: FuncObj[] = rootInfo.funcs;
  let genResult: GenResult = {
    funcEnumStr:'',
    // i_service.h 方法定义
    iServiceFuncH: '', 
    // proxy.h 方法定义
    proxyFuncH: '', 
    // stub.h 的inner方法定义
    stubInnerFuncH: '', 
    // proxy.cpp 方法实现
    proxyFuncCpp: '', 
    // stub.cpp 的inner方法映射表
    stubInnerFuncMap: '', 
    // stub.cpp 的inner方法实现
    stubInnerFuncCpp: '', 
    // service.cpp的方法实现: 参数初始化
    serviceFuncCpp: '', 
    // client.cpp 的inner方法定义
    clientFuncCpp: '', 
  };
  let enumTab = getTab(2);
  let funcTab = getTab(1);

  for (let i = 0; i < funcList.length; ++i) {
    // remote方法的枚举值
    let funcEnum = funcList[i].name.toUpperCase(); 
    // 生成proxy端的方法
    let paramStr = getFuncParamStr(funcList[i].parameters);
    // proxy.h中的方法定义
    genResult.proxyFuncH += (i === 0) ? '' : '\n' + funcTab;
    genResult.proxyFuncH += format('%s %s(%s) override;', funcList[i].returns, funcList[i].name, paramStr);
    // proxy.cpp中的方法实现
    genResult.proxyFuncCpp += genProxyFunc(funcList[i], rootInfo.serviceName, paramStr, funcEnum);
    // 生成stub端的方法
    // stub.h中的inner方法定义
    genResult.stubInnerFuncH += (i === 0) ? '' : '\n' + funcTab;
    genResult.stubInnerFuncH +=
        format('ErrCode %sInner(MessageParcel &data, MessageParcel &reply);', funcList[i].name);
    // stub.cpp中的inner方法实现
    genResult.stubInnerFuncCpp += genStubInnerFunc(funcList[i], rootInfo.serviceName);

    // stub.cpp中的inner方法映射表
    genResult.stubInnerFuncMap += format('innerFuncs_[%s] = &%sStub::%sInner;',
      funcEnum, rootInfo.serviceName, funcList[i].name);

    // 生成serviceImpl的方法
    // 生成i_xxx_service.h中方法枚举
    genResult.funcEnumStr += (i === 0) ? '' : ',\n' + enumTab;
    genResult.funcEnumStr += funcEnum;
    // i_service.h 方法定义
    genResult.iServiceFuncH += (i === 0) ? '' : '\n' + funcTab;
    genResult.iServiceFuncH += format('virtual %s %s(%s) = 0;', funcList[i].returns, funcList[i].name, paramStr);
    // service.cpp中的方法实现 这里不需要有实现,对参数进行初始化即可
    genResult.serviceFuncCpp += genServiceFunc(funcList[i], rootInfo.serviceName, paramStr);

    // 生成client端的方法
    // client.cpp中的方法实现：inner方法定义
    let clientParamStr = getClientFuncParamStr(funcList[i].parameters);
    genResult.clientFuncCpp += (i === 0) ? '' : '\n' + funcTab;
    genResult.clientFuncCpp += format('// proxy->%s(%s);', funcList[i].name, clientParamStr);
  }
  
  return genResult;
}

function replaceContent(fileContent: string, funcContent: GenResult, rootInfo: ServiceRootInfo) {
  let lowServiceName = rootInfo.serviceName.toLowerCase();
  let upperServiceName = rootInfo.serviceName.toUpperCase();
  fileContent = replaceAll(fileContent, '[serviceName]', rootInfo.serviceName);
  fileContent = replaceAll(fileContent, '[marcoName]', upperServiceName);
  fileContent = replaceAll(fileContent, '[serviceId]', rootInfo.serviceId);
  fileContent = replaceAll(fileContent, '[lowServiceName]', lowServiceName);

  // 替换方法中的[xxx]模板 
  fileContent = replaceAll(fileContent, '[funcEnum]', funcContent.funcEnumStr);
  fileContent = replaceAll(fileContent, '[iServiceHFunctions]', funcContent.iServiceFuncH);
  fileContent = replaceAll(fileContent, '[proxyHFunctions]', funcContent.proxyFuncH);
  fileContent = replaceAll(fileContent, '[innerFuncDef]', funcContent.stubInnerFuncH);
  fileContent = replaceAll(fileContent, '[serviceHFunctions]', funcContent.proxyFuncH);
  fileContent = replaceAll(fileContent, '[remoteFuncImpl]', funcContent.proxyFuncCpp);
  fileContent = replaceAll(fileContent, '[innerFuncMap]', funcContent.stubInnerFuncMap);
  fileContent = replaceAll(fileContent, '[innerFuncImpl]', funcContent.stubInnerFuncCpp);
  fileContent = replaceAll(fileContent, '[serviceFuncImpl]', funcContent.serviceFuncCpp);
  fileContent = replaceAll(fileContent, '[clientFuncInvoke]', funcContent.clientFuncCpp);

  return fileContent;
}

// 循环写入文件， 并将funcContent的内容写入模板
function genDir(dirItem: DirTemp, funcContent: GenResult, rootInfo: ServiceRootInfo, out: string) 
{
  let dirPath = path.join(out, dirItem.name.replace('[serviceName]', rootInfo.serviceName));

  // 创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  } 

  // 遍历文件
  dirItem.files.forEach(file => {
    let fileName = file.name.replace('[serviceName]', rootInfo.serviceName);
    fileName = fileName.replace('[serviceId]', rootInfo.serviceId);
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

export function genServiceFile(rootInfo: ServiceRootInfo, out: string) {
  console.info("rootInfo: " + JSON.stringify(rootInfo))

  // 获取方法相关
  let res: GenResult = generateFunctionCode(rootInfo);

  // 生成文件 和 文件夹
  if (rootInfo.versionTag === '4.1') {
    genDir(service4_1_dir, res, rootInfo, out);
  } else {
    // 默认生成3.2
    genDir(service3_2_dir, res, rootInfo, out);
  }

  console.info('generate success!')
}
