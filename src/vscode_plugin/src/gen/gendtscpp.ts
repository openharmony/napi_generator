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

import { DirTemp, DtscppRootInfo, FuncInfo, InterfaceList, TypeList, 
ParamObj, ParseObj, ClassObj, FuncObj, GenInfo, 
UnionObj, StructObj, TypeObj } from "./datatype";
import { replaceAll } from "../common/tool";
import fs = require('fs');
import path = require("path");
import { napiFuncHTemplate, napiFuncInitTemplate } from "../template/func_template";
import { cppout, dtscppout } from "../template/dtscpp/dtscppdir";
import { analyzeRootFunction, genDtsFile, genDtsInterface, genTsFunction } from "./gendts";
import { generateDirectFunction, genHCppFile } from "./gencpp";
import { genAbilitytestFile, generateFuncTestCase } from "./gentest";
import { Logger } from "../common/log";
import { tsTransferType } from "../template/functypemap_template";
import { dts2CppKey } from "../template/dtscpp/dts2cpp_key";

interface GenResult {
  // dts文件中的内容
  dtsContent: string; 
  // abilitytest文件中的内容
  testContet: string; 
  // h文件中的内容
  napiHContent: string; 
  napiInitContent: string,
  napiCppContent: string
}

export function genHFunction(func: FuncInfo, rawFileName: string) {
  let funcParams = '';
  for (let i = 0; i < func.params.length; ++i) {
      funcParams += i > 0 ? ', ' : '';
      funcParams += func.params[i].name + ': ' + func.params[i].type;
  }
  let hContent = replaceAll(napiFuncHTemplate, '[file_introduce_replace]', rawFileName);
  hContent = replaceAll(hContent, '[func_introduce_replace]', func.name);
  hContent = replaceAll(hContent, '[input_introduce_replace]', funcParams === '' ? 'void' : funcParams);
  hContent = replaceAll(hContent, '[func_name_replace]', func.name);
  hContent = replaceAll(hContent, '[func_param_replace]', funcParams);
  hContent = replaceAll(hContent, '[func_return_replace]', func.retType === ''? 'void': func.retType);

  return hContent;
}

export function replaceContent(fileContent: string, funcContent: GenResult, rootInfo: DtscppRootInfo) {
  let upperFileName = rootInfo.fileName.toLocaleUpperCase();

  fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
  fileContent = replaceAll(fileContent, '[upper_filename]', upperFileName);
  fileContent = replaceAll(fileContent, '[dts_content_template]', funcContent.dtsContent);
  fileContent = replaceAll(fileContent, '[init_replace]', funcContent.napiInitContent);
  fileContent = replaceAll(fileContent, '[func_declare_replace]', funcContent.napiHContent);
  fileContent = replaceAll(fileContent, '[func_content_replace]', funcContent.napiCppContent);
  fileContent = replaceAll(fileContent, '[testAbilityFunctions]', funcContent.testContet);

  return fileContent;
}

export function genDir(dirItem: DirTemp, funcContent: GenResult, rootInfo: DtscppRootInfo, out: string) 
{
  let dirPath = path.join(out, dirItem.name);
  let lowerFileName = rootInfo.fileName.toLocaleLowerCase();

  // 创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  } 

  // 遍历文件
  dirItem.files.forEach(file => {
    let fileName = file.name.replace('[fileName]', lowerFileName);
    let filePath = path.join(dirPath, fileName);
    // 将content写入文件， 这里的content是模板，需要replace里面的部分内容
    if (!fs.existsSync(filePath)) {
      // replace file content
      // 这里的替换是替换模板公共的东西，方法的替换在哪里生成呢？
      let fileContent = replaceContent(file.content, funcContent, rootInfo);
      fs.writeFileSync(filePath, fileContent);
    }
  })

  // 递归遍历子目录
  dirItem.dirs.forEach(subDir => {
    genDir(subDir, funcContent, rootInfo, dirPath);
  })
}

export function generateFuncCode(rootInfo: DtscppRootInfo) {
  let genResult: GenResult = {
    dtsContent: '',
    testContet: '',
    napiHContent: '', 
    napiInitContent: '',
    napiCppContent: '',
  }

  let typeList: TypeList[] = []
  let interfaceList: InterfaceList[] = []

  // 分析的时候拿到typeList和interfaceList
  let interDef = genDtsInterface(rootInfo.rawFilePath, typeList, interfaceList);
  let tsFuncContent = '';
  // analyze
  let tsfunctions: FuncInfo[] = [];  
  let cppfunctions: FuncInfo[] = [];
  analyzeRootFunction(tsfunctions, cppfunctions, rootInfo.funcs);
  let rawFileName = path.basename(rootInfo.rawFilePath);
  // gen
  for (let i = 0; i < rootInfo.funcs.length; i++) {
    // gen dts function
    tsFuncContent += genTsFunction(tsfunctions[i], rawFileName);
    // 每个napi方法的init
    genResult.napiInitContent += replaceAll(napiFuncInitTemplate, '[func_name_replace]', tsfunctions[i].name);
    // 每个napi方法的h声明
    genResult.napiHContent += genHFunction(cppfunctions[i], rawFileName);
    // 每个Napi方法的cpp说明
    genResult.napiCppContent += generateDirectFunction(cppfunctions[i], rawFileName, typeList, interfaceList);
    // gen test function
    genResult.testContet += generateFuncTestCase(cppfunctions[i], rawFileName, typeList, interfaceList);

  }
  genResult.dtsContent = interDef + tsFuncContent;
  return genResult;
}

// h2dtscpp
export function genDtsCppFile(rootInfo: DtscppRootInfo, out: string) {
  let res: GenResult = generateFuncCode(rootInfo);
  genDir(dtscppout, res, rootInfo, out);
  Logger.getInstance().info('generate success!')
}

// dts2cpp
export function genCppFile(parseObj: ParseObj, tsFilePath: string, out: string) {
  let rootInfo: DtscppRootInfo = {
    funcs: parseObj.funcs,
    rawFilePath: tsFilePath,
    fileName: path.basename(tsFilePath, '.d.ts')// xxx
  };
  let genResult: GenResult = generateFunctions(parseObj, tsFilePath);
  genDir(cppout, genResult, rootInfo, out);
  Logger.getInstance().info('generate success!')
}

export function generateFunctions(parseObj: ParseObj, tsFilePath: string) {
  let cppfunctions: FuncInfo[] = getFunctions(parseObj);
  let typeList: TypeList[] = getTypes(parseObj);
  let interfaceList: InterfaceList[] = getInterfaces(parseObj);

  let genResult: GenResult = {
    dtsContent: '',
    testContet: '',
    napiHContent: '',
    napiInitContent: '',
    napiCppContent: '',
  };
  let rawFileName = path.basename(tsFilePath);
  for (let i = 0; i < cppfunctions.length; i++) {
    // 每个napi方法的init
    genResult.napiInitContent += replaceAll(napiFuncInitTemplate, '[func_name_replace]', cppfunctions[i].name);
    // 每个napi方法的h声明
    genResult.napiHContent += genHFunction(cppfunctions[i], rawFileName);
    // 每个Napi方法的cpp说明
    genResult.napiCppContent += generateDirectFunction(cppfunctions[i], rawFileName, typeList, interfaceList);
    // gen test function
    genResult.testContet += generateFuncTestCase(cppfunctions[i], rawFileName, typeList, interfaceList);

  }
  return genResult;
}

// 将interface列表中的js type全部转换为c type
export function getInterfaces(parseObj: ParseObj) {
  return parseObj.classes.map(cls => {
    const getParams = (variables: ParamObj[]) => 
      variables.map(variable => ({
        name: variable.name,
        type: getCTypeFromJS(variable.type),
        arraySize: variable.arraySize,
        arraySizeList: []
      }));
      
    const getFunctions = (functions: FuncObj[]) => 
      functions.map(func => ({
        type: func.type,
        name: func.name,
        returns: getCTypeFromJS(func.returns),
        parameters: getParams(func.parameters)
      }));
      
    return {
      interfaceName: cls.name,
      interfaceBody: {
        params: getParams(cls.variableList),
        funcs: getFunctions(cls.functionList)
      }
    };
  });
}

export function getTypes(parseObj: ParseObj) {
  let typeList: TypeList[] = [];
  for (let i = 0; i < parseObj.types!.length; i++) {
    let typeObj: TypeList = {
      typeName: parseObj.types![i].name,
      typeBody: getCTypeFromJS(parseObj.types![i].alias),
    };
    typeList.push(typeObj);
  }
  return typeList;
}

export function getFunctions(parseObj: ParseObj) {
  let cppfunctions: FuncInfo[] = [];
  for (let i = 0; i < parseObj.funcs.length; i++) {
    let cppFuncInfo: FuncInfo = {
      name: '',
      params: [],
      retType: '',
    };
    cppFuncInfo.name = parseObj.funcs[i].name;
    let parseParams = parseObj.funcs[i].parameters;
    for (let i = 0; i < parseParams.length; ++i) {
      let paramsRes = createFuncParam(parseParams[i]);
      cppFuncInfo.params.push(paramsRes);
    }
    cppFuncInfo.retType = getCTypeFromJS(parseObj.funcs[i].returns);
    cppfunctions.push(cppFuncInfo);
  }
  return cppfunctions;
}

export function getCTypeFromJS(type: string) {
  let cType = type;
  for (let index = 0; index < tsTransferType.length; index++) {
    if (type === tsTransferType[index].fromType) {
      cType = tsTransferType[index].tranferContent[0];
    }
  }
  return cType;
}

export function createFuncParam(params: ParamObj) {
  let cppParam: ParamObj = {
    name: '',
    type: '',
    arraySize: 0,
    arraySizeList: []
  };
  cppParam.name = params.name;
  cppParam.type = getCTypeFromJS(params.type);
  return cppParam;
}

// -----------------------h2dtscpp------------------------
export function createDir(path: string) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}
export function genDtscppFromH(rootInfo: GenInfo) {
  let rootDir = path.dirname(rootInfo.rawFilePath);
  let cppOutPath = path.join(rootDir, 'cpp');
  createDir(cppOutPath);
  let dtsOutPath = path.join(cppOutPath, 'types');
  createDir(dtsOutPath);
  // 生成dts文件: 这里将文件生成在cpp/types目录下,该路径是ndk工程中的dts文件的默
  // 认路径
  genDtsFile(rootInfo, dtsOutPath);
  // 生成.cpp和.h文件:这里将文件生成在cpp目录下,该路径是ndk工程中的cpp文件的默
  // 认路径
  genHCppFile(rootInfo, cppOutPath);
  let testOutPath = path.join(rootDir, 'test');
  createDir(testOutPath);
  testOutPath = path.join(testOutPath, 'ets');
  createDir(testOutPath);
  // 生成Ability.test.ets文件：这里将文件生成在test/ets目录下,该路径是ndk工程中
  // 的test文件的默认路径
  genAbilitytestFile(rootInfo, testOutPath);
  Logger.getInstance().info('generate success!')
}

// -------------------dts2cpp------------------------
// 将dts类型转换为c++类型
export function transCkey2Dtskey(key: string): string {
  // 箭头函数类型: (a:number,b:string)=>void -> std::function<void(double, string)> 
  const arrowFuncReg = /\(([\w\:\<\>\,\s*]*)\)\s*=>([\w\s\:<\>\,\s*]+)/;
  const arrowFuncMatch = key.match(arrowFuncReg);
  if (arrowFuncMatch) {
    const paramsStr = arrowFuncMatch[1] ? arrowFuncMatch[1].trim() : '';
    let paramreg = /([\w\s\:\*]+<[^>]*>|[\*\w\s\:]+)/g;
    let pmatch;
    let paramList = [];
    while ((pmatch = paramreg.exec(paramsStr)) !== null) {
      paramList.push(pmatch[0]);
    }
    let str = '';
    for (let i = 0; i < paramList.length; ++i) {
      const [paramName, paramType] = paramList[i].split(':').map((item) => item.trim());
      str += paramType === '' ? '' : transCkey2Dtskey(paramType);
      if (i != paramList.length - 1) {
        str += ', ';
      }
    }
    return `std::function<${transCkey2Dtskey(arrowFuncMatch[2].trim())}(${str})>`;
  }

  // Callback<boolean> -> std::function<void(bool)>
  const callbackReg = /Callback\s*<([^>]+)>/g;
  const callbackMatch = callbackReg.exec(key);
  if (callbackMatch) {
    return `std::function<void(${transCkey2Dtskey(callbackMatch[1].trim())})>`;
  }

  // 基本类型：number/string/boolean/Map/Set/Array
  for (const keyItem of dts2CppKey) {
    for (const str of keyItem.keys) {
      if (key.trim().replace(' ', '') === str) {
        return keyItem.value;
      }
    }
  }
  // 如果是object类型，直接返回类型名如：a: AType  -> AType
  return key;
}

export function transParseObj(parseObj: ParseObj) {
  // trans enums
  let enums = parseObj.enums;
  // trans unions
  let unions: UnionObj[] = [];
  for (let union of parseObj.unions) {
    unions.push({
      name: union.name,
      alias: union.alias,
      members: transParameters(union.members),
    });
  }
  // trans structs
  let structs: StructObj[] = [];
  for (let struct of parseObj.structs) {
    structs.push({
      name: struct.name,
      alias: struct.alias,
      members: transParameters(struct.members),
      functions: transFunctions(struct.functions)
    });
  }
  // trans classes
  let classes: ClassObj[] = [];
  for (let classObj of parseObj.classes) {
    classes.push({
      name: classObj.name,
      alias: classObj.alias,
      variableList: transParameters(classObj.variableList),
      functionList: transFunctions(classObj.functionList)
    });
  }
  // trans funcs
  let funcs: FuncObj[] = transFunctions(parseObj.funcs);

  // trans types : 首先判断types是否存在
  let types: TypeObj[] = [];
  if (parseObj.types && parseObj.types.length > 0) {
    for (let type of parseObj.types) {
      let memberType: string[] = type.types; // 这个types是啥？里面的成员是不是需要转换啊
      for (let member of memberType) {
        let cType = transCkey2Dtskey(member); 
        memberType.push(cType);
      }
      types.push({
        name: type.name,
        alias: type.alias,
        members: transParameters(type.members),
        types: memberType,  // for test. 这里面是啥还不知道
        functions: transFunctions(type.functions)
      });
    }
  }

  let transParseObj: ParseObj = {
    enums: enums,
    unions: unions,
    structs: structs,
    classes: classes,
    funcs: funcs,
    types: types
  };

  return transParseObj;
}

// 将FuncObj[]中的ts type全转换成cpp type
function transFunctions(tranFuncs: FuncObj[]) {
  let funcs: FuncObj[] = [];
  for (let func of tranFuncs) {
    funcs.push({
      name: func.name,
      type: func.type,
      returns: transCkey2Dtskey(func.returns),
      parameters: transParameters(func.parameters),
    });
  }
  return funcs;
}

// 将ParamObj[]中的ts type全转换成cpp type
export function transParameters(transMembers: ParamObj[]) {
  let members: ParamObj[] = [];
  for (let member of transMembers) {
    members.push({
      type: transCkey2Dtskey(member.type),
      name: member.name,
      arraySize: member.arraySize,
      arraySizeList: member.arraySizeList
    });
  }
  return members;
}

export function genCppFromDts(rootInfo: GenInfo) {
  // 要将rootInfo中的type信息转换为c++类型，然后写入cpp文件中
  let hRootInfo: GenInfo = {
    parseObj: transParseObj(rootInfo.parseObj),
    rawFilePath: rootInfo.rawFilePath,
    fileName: rootInfo.fileName
  }
  // 生成napi框架(.h文件和.cpp文件):这里将文件生成在cpp目录下,该路径是ndk工程中
  // 的cpp文件的默认路径
  let rootDir = path.dirname(hRootInfo.rawFilePath);
  let cppOutPath = path.join(rootDir, 'cpp');
  createDir(cppOutPath);
  genHCppFile(hRootInfo, cppOutPath);
  // 生成Ability.test.ets文件: 这里将文件生成在test/ets目录下,该路径是ndk工程中
  // 的test文件的默认路径
  let testOutPath = path.join(rootDir, 'test');
  createDir(testOutPath);
  testOutPath = path.join(testOutPath, 'ets');
  createDir(testOutPath);
  genAbilitytestFile(hRootInfo, testOutPath);
}

