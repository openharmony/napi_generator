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

import { replaceAll, getTab } from '../../common/tool';
import { stubInnerFuncTemplate } from '../../template/func_template';
import * as fs from 'fs';
import { format } from 'util'
import { FuncObj, ServiceRootInfo } from '../datatype';
import { genRead, genWrite } from './gencommonfunc';

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
      'type': param.type,
      'arraySize': -1
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

export function doGenStubCppFile(rootInfo: ServiceRootInfo, fileContent: string): string {
  let stubInnerFuncMap = '';
  let stubInnerFuncCpp = '';
  let funcList: FuncObj[] = rootInfo.funcs;
  for (let i = 0; i < funcList.length; ++i) {
    let funcEnum = funcList[i].name.toUpperCase();
    stubInnerFuncMap += format('innerFuncs_[%s] = &%sStub::%sInner;', funcEnum, rootInfo.serviceName, funcList[i].name);
    stubInnerFuncCpp += genStubInnerFunc(funcList[i], rootInfo.serviceName);
  }
  fileContent = replaceAll(fileContent, '[serviceName]', rootInfo.serviceName);
  fileContent = replaceAll(fileContent, '[lowServiceName]', rootInfo.serviceName.toLowerCase());
  fileContent = replaceAll(fileContent, '[innerFuncMap]', stubInnerFuncMap);
  fileContent = replaceAll(fileContent, '[innerFuncImpl]', stubInnerFuncCpp);
  return fileContent;
}

// 生成 xxx_service_stub.cpp
export function genStubCppFile(rootInfo: ServiceRootInfo, filePath: string, fileContent: string) {
  fileContent = doGenStubCppFile(rootInfo, fileContent);
  fs.writeFileSync(filePath, fileContent);
}