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

import { DirTemp, FuncInfo, GenInfo, InterfaceList, TypeList } from "./datatype";
import { getInterfaceBody, getTypeBody } from "./gendts";
import {
  boolIn, boolRet, doubleIn, doubleRet, funcGetParamTemplate, int32tIn,
  int32tRet, int64tIn, int64tRet, napiFuncCppTemplate,
  napiFuncRetTemplate, objectRet, objectTosetRet, paramGenTemplate, stringIn,
  stringRet, uint32tIn, uint32tRet
} from "../template/func_template";
import { replaceAll } from "../common/tool";
import { cppdir } from "../template/dtscpp/dtscppdir";
import * as path from 'path';
import * as fs from 'fs';
import { genInitCppFile } from "./tools/gennapiinit";
import { genNapiHFile } from "./tools/gennapih";
import { genNapiCppFile } from "./tools/gennapicpp";
import { genCommonHFile } from "./tools/gennapicommonh";
import { genCommonCppFile } from "./tools/gennapicommoncpp";
import { genNapiCommonFile } from "./tools/gencommonfile";

interface RetObjInfo {
  objName: string;
  flag: boolean;
}

export function generateDirectFunction(funcInfo: FuncInfo, rawFileName: string, typeList: TypeList[], interfaceList: InterfaceList[]) {
 
  // 生成
  let paramGenResult = genParamInfo(funcInfo, typeList);

  // 返回值处理  对于对象要使用循环处理
  let retGenResult = '';
  let retObjInfo: RetObjInfo = {
      objName: '',
      flag: false
  };

  let returnType = replaceAll(funcInfo.retType, '*', '').trim();
  retGenResult = returnTypeC2Js(funcInfo.name, returnType, retGenResult, retObjInfo, typeList, interfaceList);

  let bodyReplace = getReplaceInfo(funcInfo, rawFileName);
  
  let genParamReplace = getGenParamReplace(funcInfo, paramGenResult);
  bodyReplace = getBodyReplace2(funcInfo, bodyReplace, genParamReplace);
  if (funcInfo.retType.replace('*', '').trim() !== 'void') {
      let returnType = funcInfo.retType === 'std::string' ? 'const char *' : funcInfo.retType;
      returnType = returnType === 'size_t' ? 'int64_t' : returnType;
      let funcReturnReplace = replaceAll(napiFuncRetTemplate, '[return_name]', retObjInfo.objName);
      funcReturnReplace = replaceAll(funcReturnReplace, '[func_name_replace]', funcInfo.name);
      funcReturnReplace = replaceAll(funcReturnReplace, '[return_replace]', retGenResult);
      bodyReplace = replaceAll(bodyReplace, '[func_return_replace]', funcReturnReplace);
  } else {
      bodyReplace = replaceAll(bodyReplace, '[func_return_replace]', '    return NULL;\n');
  }
  bodyReplace = replaceAll(bodyReplace, '[return_replace]', retGenResult);

 
  return bodyReplace;
}

export function getReplaceInfo(funcInfo: FuncInfo, hFileName: string) {
  let funcInfoParams = genFuncInfoParams(funcInfo);
  let bodyReplace = replaceAll(napiFuncCppTemplate, '[func_name_replace]', funcInfo.name);
  bodyReplace = replaceAll(bodyReplace, '[get_error_msg_tag]', funcInfo.name);
  bodyReplace = replaceAll(bodyReplace, '[file_introduce_replace]', hFileName);
  bodyReplace = replaceAll(bodyReplace, '[func_introduce_replace]', funcInfo.name);
  bodyReplace = replaceAll(bodyReplace, '[input_introduce_replace]', funcInfoParams === '' ? 'void' : funcInfoParams);
  bodyReplace = replaceAll(bodyReplace, '[output_introduce_replace]', funcInfo.retType);
  return bodyReplace;
}

export function getBodyReplace2(funcInfo: FuncInfo, bodyReplace: string, genParamReplace: string) {
  if (funcInfo.params.length !== 0) {
    bodyReplace = replaceAll(bodyReplace, '[func_getParam_replace]', genParamReplace);
  } else {
    bodyReplace = replaceAll(bodyReplace, '[func_getParam_replace]', '');
  }
  return bodyReplace;
}

export function getGenParamReplace(funcInfo: FuncInfo, paramGenResult: string) {
  let genParamReplace = replaceAll(funcGetParamTemplate, '[param_length]', 'PARAMS' + funcInfo.params.length);
  genParamReplace = replaceAll(genParamReplace, '[func_name_replace]', funcInfo.name);
  genParamReplace = replaceAll(genParamReplace, '[getAllParam_replace]', paramGenResult);
  return genParamReplace;
}

export function genFuncInfoParams(funcInfo: FuncInfo) {
  let funcInfoParams = '';
  let funcInfoParamTemp = '[paramName]: [paramType]; ';
  for (let i = 0; i < funcInfo.params.length; i++) {
    let funcInfoParamReplace = replaceAll(funcInfoParamTemp, '[paramName]', funcInfo.params[i].name);
    funcInfoParamReplace = replaceAll(funcInfoParamReplace, '[paramType]', funcInfo.params[i].type);
    funcInfoParams += funcInfoParamReplace;
  }
  return funcInfoParams;
}


export function genParamInfo(funcInfo: FuncInfo, typeList: TypeList[]) {
  let paramGenResult = '';
  // napi 获取参数
  for (let i = 0; i < funcInfo.params.length; i++) {
    paramGenResult = getParamJs2C(funcInfo, i, paramGenResult, typeList);
  }
  return paramGenResult;
}


export function getParamJs2C(funcInfo: FuncInfo, i: number, paramGenResult: string, typeList: TypeList[]) {
  let paramType = funcInfo.params[i].type === 'size_t' ? 'int64_t' : funcInfo.params[i].type;
  // 去除const 和 *
  paramType = paramType.replace('const', '').replace('*', '').trim();
  let paramName = funcInfo.params[i].name;
  let paramGen = replaceAll(paramGenTemplate, '[param_index_replace]', 'PARAMS' + i);
  paramGen = replaceAll(paramGen, '[param_name_replace]', paramName);
  if (paramType === 'double') {
    paramGen = getParamGenCon(doubleIn, i, paramName, paramGen);
    paramGenResult += paramGen;
  } else if (paramType === 'uint32_t') {
    paramGen = getParamGenCon(uint32tIn, i, paramName, paramGen);
    paramGenResult += paramGen;
  } else if (paramType === 'int32_t' || paramType === 'int') {
    paramGen = getParamGenCon(int32tIn, i, paramName, paramGen);
    paramGenResult += paramGen;
  } else if (paramType === 'int64_t' || paramType === 'size_t') {
    paramGen = getParamGenCon(int64tIn, i, paramName, paramGen);
    paramGenResult += paramGen;
  } else if (paramType === 'bool') {
    paramGen = getParamGenCon(boolIn, i, paramName, paramGen);
    paramGenResult += paramGen;
  } else if (paramType === 'std::string' || paramType.indexOf('char') >= 0) {
    paramGen = getParamGenCon(stringIn, i, paramName, paramGen);
    paramGenResult += paramGen;
  } else if (getTypeBody(paramType, typeList)) { 
    // typedefs
    funcInfo.params[i].type = getTypeBody(paramType, typeList) as string;
    paramGenResult = getParamJs2C(funcInfo, i, paramGenResult, typeList);
  } 
  // 其他情况，处理成对象 napi_get_cb_info之后不做任何处理
  return paramGenResult;
}

export function getParamGenCon(getParamContent: string, i: number, paramName: string, paramGen: string) {
  let getParam = replaceAll(getParamContent, '[param_index_replace]', 'PARAMS' + i);
  getParam = replaceAll(getParam, '[param_name_replace]', paramName);
  paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
  return paramGen;
}

export function returnTypeC2Js(returnName: string, retType: string, retGenResult: string, retObjInfo: RetObjInfo, typeList: TypeList[], interfaceList: InterfaceList[]) {
  if (!retObjInfo.flag) {
      retObjInfo.objName = returnName;
  }
  if (retType === 'uint32_t') {
      retGenResult = getRetTypeContent(uint32tRet, returnName, retGenResult, retObjInfo, objectTosetRet);
  } else if (retType === 'double') {
      retGenResult = getRetTypeContent(doubleRet, returnName, retGenResult, retObjInfo, objectTosetRet);
  } else if (retType === 'int32_t' || retType === 'int') {
      retGenResult = getRetTypeContent(int32tRet, returnName, retGenResult, retObjInfo, objectTosetRet);
  } else if (retType === 'int64_t' || retType === 'size_t') {
      retGenResult = getRetTypeContent(int64tRet, returnName, retGenResult, retObjInfo, objectTosetRet);
  } else if (retType === 'bool') {
      retGenResult = getRetTypeContent(boolRet, returnName, retGenResult, retObjInfo, objectTosetRet);
  } else if (retType === 'std::string' || retType.substring(0, 10) === 'const char' ||
        retType === 'char') {
      retGenResult = getRetTypeContent(stringRet, returnName, retGenResult, retObjInfo, objectTosetRet);
  } else if (getInterfaceBody(retType, interfaceList)) { 
      // 返回值是对象
      if (!retObjInfo.flag) {
          retGenResult += replaceAll(objectRet, '[return_name_replace]', returnName);
          retObjInfo.flag = true;
          let objectProperty = getInterfaceBody(retType, interfaceList)
          // 遍历属性
          for (let i = 0; i < objectProperty!.params.length; i++) {
              let name = objectProperty!.params[i].name;
              let type = objectProperty!.params[i].type;
              let testRes = returnTypeC2Js(name, type, retGenResult, retObjInfo, typeList, interfaceList);
              retGenResult = testRes;
          }
      } else {
          retGenResult = getObjRetGenResult(retObjInfo, retGenResult, returnName);
      }
  } else if (getTypeBody(retType, typeList)) { 
    // typedefs
    let funcRetType = getTypeBody(retType, typeList) as string;
    retGenResult = returnTypeC2Js(returnName, funcRetType, retGenResult, retObjInfo,typeList, interfaceList);
  }
  return retGenResult;
}

export function getObjRetGenResult(retObjInfo: RetObjInfo, retGenResult: string, returnName: string) {
  if (retObjInfo.objName !== '') {
    retGenResult += replaceAll(objectRet, '[return_name_replace]', returnName);
    let setRetPropertyObj = replaceAll(objectTosetRet, '[set_objname_replace]', retObjInfo.objName);
    setRetPropertyObj = replaceAll(setRetPropertyObj, '[set_propname_replace]', returnName);
    setRetPropertyObj = replaceAll(setRetPropertyObj, '[set_propvalue_replace]', returnName);
    retGenResult += setRetPropertyObj;
  }
  return retGenResult;
}

export function getRetTypeContent(retTypeTemplate: string, returnName: string, retGenResult: string,
  retObjInfo: RetObjInfo, setRetProperty: string) {
  let funcReturnType = replaceAll(retTypeTemplate, '[return_name_replace]', returnName);
  retGenResult += funcReturnType;
  if (retObjInfo.flag) {
    setRetProperty = replaceAll(setRetProperty, '[set_objname_replace]', retObjInfo.objName);
    setRetProperty = replaceAll(setRetProperty, '[set_propname_replace]', returnName);
    setRetProperty = replaceAll(setRetProperty, '[set_propvalue_replace]', returnName);
    retGenResult += setRetProperty;
  }
  return retGenResult;
}


// ------------------------------  gencpp -----------------------------
const fileHandlers: { [key: string]: Function } = {
  '[fileName]init.cpp': genInitCppFile,
  '[fileName]napi.h': genNapiHFile,
  '[fileName]napi.cpp': genNapiCppFile,
  '[fileName]common.h': genCommonHFile,
  '[fileName]common.cpp': genCommonCppFile,
  '[fileName].h': genNapiCommonFile,
  'readme.md': genNapiCommonFile
};

export function genDir(dirItem: DirTemp, rootInfo: GenInfo, out: string) {
  let dirPath = path.join(out, dirItem.name);
  let lowerFileName = rootInfo.fileName.toLocaleLowerCase();
  // 创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  // 遍历生成当前目录文件
  dirItem.files.forEach(file => {
    let fileName = file.name.replace('[fileName]', lowerFileName);
    let filePath = path.join(dirPath, fileName);
    // 将content写入文件， 这里的content是模板，需要replace里面的部分内容
    if (!fs.existsSync(filePath)) {
      // 拿到每个文件并且根据文件生成内容并写入
      const handler = fileHandlers[file.name];
      if (handler) {
        // 调用对应的生成文件方法
        handler(rootInfo, filePath, file.content);
      }
    }
  })
  // 遍历子目录，生成子目录的文件
  dirItem.dirs.forEach(subDir => {
    genDir(subDir, rootInfo, dirPath);
  })
}

// gen h and cpp file.
export function genHCppFile(rootInfo: GenInfo, out: string) {
  if (out === undefined || out === null || out.trim() === '') {
    out = path.dirname(rootInfo.rawFilePath);
  }
  genDir(cppdir, rootInfo, out);
}


