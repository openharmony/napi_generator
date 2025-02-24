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

import { DirTemp, FuncInfo, FuncObj, GenInfo, InterfaceList, TypeList } from "./datatype";
import { getInterfaceBody, getTypeBody } from "./gendts";
import {
  boolIn, boolRet, doubleIn, doubleRet, funcGetParamTemplate, int32tIn, int32tRet, int64tIn, int64tRet,
  napiFuncCppTemplate, napiFuncHTemplate, napiFuncInitTemplate, napiFuncRetTemplate, objectRet, objectTosetRet, paramGenTemplate, stringIn, stringRet,
  uint32tIn, uint32tRet
} from "../template/func_template";
import { replaceAll } from "../common/tool";
import { cppout, dts2cpp_cppdir } from "../template/dtscpp/dtscppdir";
import * as path from 'path';
import * as fs from 'fs';
import { h2napi_in_key, h2napi_out_key } from "../template/dtscpp/dts2cpp_key";
import { napiCppTemplate } from "../template/dtscpp/dtscpp_napicpp_template";

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
  '[fileName].h': genCommonFile,
  'readme.md': genCommonFile
};

// 通过类型值映射模板，比如：uint32_t返回值 -> uint32tRet -> napi_create_uint32
export function transCkey2NapiOutkey(key: string) {
  // 数组 map set iterator tuple pair 等都当作objectOut处理
  for (const keyItem of h2napi_out_key) {
    for (const str of keyItem.keys) {
      if (key.includes(str)) {
        return keyItem.value;
      }
    }
  }
  let replaceKeyList = ['enum', 'struct', 'union'];
  for (const rkey of replaceKeyList) {
    key = key.replace(rkey, '').trim();
  }
  // 其他的全部当作object处理, 如typeDef/enum/struct/union/class等,当作objectOut处理，返回objectRet
  // return key;
  return objectRet;
}

// 通过类型值映射模板，比如：uint32_t输入 -> uint32tIn -> napi_get_value_uint32
export function transCkey2NapiInkey(key: string) {

  // std::数组
  // napi_get_array_length
  // std::map  这个当object处理，不管
  // std::set 怎么处理？？？ 当作object处理，不管
  // 迭代器 iterator如何处理？？？ 当作object处理，不管
  // std::function如何处理？？？ callbackIn
  // 数组和map之类的东西是全部生成出来还是当作object

  // 这里要做一个判断，用于确定类型是基本类型还是object ?
  // 数组 map set iterator tuple pair

  // 指针类型的咋整？ 不管？ 直接替换？

  for (const keyItem of h2napi_in_key) {
    for (const str of keyItem.keys) {
      if (key.includes(str)) {
        return keyItem.value;
      }
    }
  }
  let replaceKeyList = ['enum', 'struct', 'union'];
  for (const rkey of replaceKeyList) {
    key = key.replace(rkey, '').trim();
  }
  // 其他的全部当作object处理, 如typeDef/enum/struct/union/class等, 此时不需要做任何处理，因此返回空
  // return key;
  return '';

}

// 把这些东西分成一个个文件
// 根据文件内容来生成
export function genCommonFile(rootInfo: GenInfo, filePath: string, fileContent: string) {
  fs.writeFileSync(filePath, fileContent);
}
// 生成Init的文件
export function genInitCppFile(rootInfo: GenInfo, filePath: string, fileContent: string) {
  let napiInitContent = '';
  if (rootInfo.parseObj && rootInfo.parseObj.funcs) {
    rootInfo.parseObj.funcs.forEach(func => {
      let funcName = func.name;
      napiInitContent += replaceAll(napiFuncInitTemplate, '[func_name_replace]', funcName);
    });
  }
  // 写文件
  fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
  fileContent = replaceAll(fileContent, '[init_replace]', napiInitContent);
  fs.writeFileSync(filePath, fileContent);
}

// 生成common.h文件
// 这个读模板直接生成
export function genCommonHFile(rootInfo: GenInfo, filePath: string, fileContent: string) {
  let upperFileName = rootInfo.fileName.toLocaleUpperCase();
  fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
  fileContent = replaceAll(fileContent, '[upper_filename]', upperFileName);
  fs.writeFileSync(filePath, fileContent);
}
// 生成common.cpp文件
// 读模板直接生成
export function genCommonCppFile(rootInfo: GenInfo, filePath: string, fileContent: string) {
  fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
  fs.writeFileSync(filePath, fileContent);
}

// 生成napi.h文件
export function genNapiHFile(rootInfo: GenInfo, filePath: string, fileContent: string) {
  let napiHContent = '';
  if (rootInfo.parseObj && rootInfo.parseObj.funcs) {
    rootInfo.parseObj.funcs.forEach(func => {
      let funcParams = '';
      for (let i = 0; i < func.parameters.length; ++i) {
        funcParams += i > 0 ? ', ' : '';
        funcParams += func.parameters[i].name + ': ' + func.parameters[i].type;
      }
      let rawFileName = path.basename(rootInfo.rawFilePath);
      let hContent = replaceAll(napiFuncHTemplate, '[file_introduce_replace]', rawFileName);
      hContent = replaceAll(hContent, '[input_introduce_replace]', funcParams === '' ? 'void' : funcParams);
      hContent = replaceAll(hContent, '[func_name_replace]', func.name);
      hContent = replaceAll(hContent, '[func_param_replace]', funcParams);
      hContent = replaceAll(hContent, '[func_return_replace]', func.returns === '' ? 'void' : func.returns);
      napiHContent += hContent;
    });
  }
  let upperFileName = rootInfo.fileName.toLocaleUpperCase();
  fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
  fileContent = replaceAll(fileContent, '[upper_filename]', upperFileName);
  fileContent = replaceAll(fileContent, '[func_declare_replace]', napiHContent);
  fs.writeFileSync(filePath, fileContent);
}

// 生成napi.cpp文件
export function genNapiCppFile(rootInfo: GenInfo, filePath: string, fileContent: string) {
  let napiCppContent = '';
  if (rootInfo.parseObj && rootInfo.parseObj.funcs) {
    rootInfo.parseObj.funcs.forEach(funcInfo => {
      // 替换每个方法主体
      let hFileName = path.basename(rootInfo.rawFilePath);
      let bodyReplace = replaceAll(napiFuncCppTemplate, '[func_name_replace]', funcInfo.name);
      bodyReplace = replaceAll(bodyReplace, '[get_error_msg_tag]', funcInfo.name);
      bodyReplace = replaceAll(bodyReplace, '[file_introduce_replace]', hFileName);
      // // 生成方法注释
      let funcInfoParams = funcInfo.parameters.length > 0 ? '': 'void';
      let funcInfoParamTemp = '[paramName]: [paramType]; ';
      for (let i = 0; i < funcInfo.parameters.length; i++) {
        let funcInfoParamReplace = replaceAll(funcInfoParamTemp, '[paramName]', funcInfo.parameters[i].name);
        funcInfoParamReplace = replaceAll(funcInfoParamReplace, '[paramType]', funcInfo.parameters[i].type);
        funcInfoParams += funcInfoParamReplace;
      }
      bodyReplace = replaceAll(bodyReplace, '[input_introduce_replace]', funcInfoParams === '' ? 'void' : funcInfoParams);
      bodyReplace = replaceAll(bodyReplace, '[output_introduce_replace]', funcInfo.returns);
      // // 替换参数模板
      // 方法参数的处理，解析参数类型，生成napi的参数处理代码
      let paramGenResult = getCppParamGen(funcInfo);
      bodyReplace = replaceAll(bodyReplace, '[func_getParam_replace]', paramGenResult);
      // // 替换返回值模板
      // 方法返回值的处理，解析返回值类型，生成napi的返回值处理代码
      let returnGenResult = genCppReturnGen(funcInfo);
      bodyReplace = replaceAll(bodyReplace, '[func_return_replace]', returnGenResult);
      // 组合一个个方法
      napiCppContent += bodyReplace;
    });

    // 生成xxxNapi.cpp文件
    fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
    fileContent = replaceAll(fileContent, '[func_content_replace]', napiCppContent);
    fs.writeFileSync(filePath, fileContent);
  }

  fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
  fileContent = replaceAll(fileContent, '[func_content_replace]', napiCppContent);
  fs.writeFileSync(filePath, fileContent);
}

// 方法输入参数的处理  只处理基本类型，像数组/map/set/class/struct等都全部当作object，且不做处理
export function getCppParamGen(funcInfo: FuncObj): string {
  // 处理输入的参数，生成napi的参数处理代码
  if (funcInfo.parameters.length === 0) {
    return '// no input params';
  }
  let paramGenResult = '';
  for (let i = 0; i < funcInfo.parameters.length; ++i) {
    let getParamInTemplate = transCkey2NapiInkey(funcInfo.parameters[i].type);
    // 如果getParamInTemplate是空，则默认是对象输入，不做任何处理
    if (getParamInTemplate === '') {
      paramGenResult = '// Todo: handle object input';
      continue;
    }
    let getParam = replaceAll(getParamInTemplate, '[param_index_replace]', 'PARAMS' + i);
    getParam = replaceAll(getParam, '[param_name_replace]', funcInfo.parameters[i].name);
    let paramGen = replaceAll(paramGenTemplate, '[param_index_replace]', 'PARAMS' + i);
    paramGen = replaceAll(paramGen, '[param_name_replace]', funcInfo.parameters[i].name);
    paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
    paramGenResult += paramGen;
  }
  let genParamReplace = replaceAll(funcGetParamTemplate, '[param_length]', 'PARAMS' + funcInfo.parameters.length);
  genParamReplace = replaceAll(genParamReplace, '[func_name_replace]', funcInfo.name);
  genParamReplace = replaceAll(genParamReplace, '[getAllParam_replace]', paramGenResult);
  return genParamReplace
}

// 方法返回值的处理
export function genCppReturnGen(funcInfo: FuncObj): string {
  // 如果函数返回值是空，直接返回NULL
  if (funcInfo.returns === 'void') {
    return '    return NULL;\n';
  }
  let returnName = funcInfo.name + 'Out';
  let funcReturnReplace = replaceAll(napiFuncRetTemplate, '[return_name]', returnName);
  let retGenResult = transCkey2NapiOutkey(funcInfo.returns);
  retGenResult = replaceAll(retGenResult, '[return_name_replace]', returnName);
  funcReturnReplace = replaceAll(funcReturnReplace, '[func_name_replace]', funcInfo.name);
  funcReturnReplace = replaceAll(funcReturnReplace, '[return_replace]', retGenResult);
  return funcReturnReplace;
}

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

// gen h and cpp file. 如果是dts2cpp,那么就拿到parcets的结果后，再根据translateTs2C来翻译，接着拿翻译的结果生成
export function genHCppFile(rootInfo: GenInfo, out: string) {
  // log
  if (out === undefined || out === null || out.trim() === '') {
    out = path.dirname(rootInfo.rawFilePath);
  }
  genDir(dts2cpp_cppdir, rootInfo, out);
  // log
}


