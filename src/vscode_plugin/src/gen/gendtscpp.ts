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

import { DirTemp, DtscppRootInfo, FuncInfo, InterfaceList, TypeList, ParamObj, ParseObj, ClassObj, FuncObj } from "./datatype";
import { replaceAll } from "../common/tool";
import fs = require('fs');
import path = require("path");
import { napiFuncHTemplate, napiFuncInitTemplate } from "../template/func_template";
import { cppout, dtscppout } from "../template/dtscpp/dtscppdir";
import { analyzeRootFunction, genDtsInterface, genTsFunction } from "./gendts";
import { generateDirectFunction } from "./gencpp";
import { generateFuncTestCase } from "./gentest";
import { Logger } from "../common/log";
import { tsTransferType } from "../template/functypemap_template";

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

function genHFunction(func: FuncInfo, rawFileName: string) {
  let funcParams = '';
  for (let i = 0; i < func.params.length; ++i) {
      funcParams += i > 0 ? ', ' : '';
      funcParams += func.params[i].name + ': ' + func.params[i].type;
  }
  let hContent = replaceAll(napiFuncHTemplate, '[file_introduce_replace]', rawFileName);
  hContent = replaceAll(hContent, '[func_introduce_replace]', func.name);
  hContent = replaceAll(hContent, '[input_introduce_replace]', funcParams === '' ? 'void' : funcParams);
  hContent = replaceAll(hContent, '[func_name_replace]', func.genName);
  hContent = replaceAll(hContent, '[func_param_replace]', funcParams);
  hContent = replaceAll(hContent, '[func_return_replace]', func.retType === ''? 'void': func.retType);

  return hContent;
}

function replaceContent(fileContent: string, funcContent: GenResult, rootInfo: DtscppRootInfo) {
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

function genDir(dirItem: DirTemp, funcContent: GenResult, rootInfo: DtscppRootInfo, out: string) 
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

function generateFuncCode(rootInfo: DtscppRootInfo) {
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
    genResult.napiInitContent += replaceAll(napiFuncInitTemplate, '[func_name_replace]', tsfunctions[i].genName);
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

function generateFunctions(parseObj: ParseObj, tsFilePath: string) {
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
    genResult.napiInitContent += replaceAll(napiFuncInitTemplate, '[func_name_replace]', cppfunctions[i].genName);
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
function getInterfaces(parseObj: ParseObj) {
  return parseObj.classes.map(cls => {
    const getParams = (variables: ParamObj[]) => 
      variables.map(variable => ({
        name: variable.name,
        type: getCTypeFromJS(variable.type),
        arraySize: variable.arraySize
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

function getTypes(parseObj: ParseObj) {
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

function getFunctions(parseObj: ParseObj) {
  let cppfunctions: FuncInfo[] = [];
  for (let i = 0; i < parseObj.funcs.length; i++) {
    let cppFuncInfo: FuncInfo = {
      name: '',
      params: [],
      retType: '',
      genName: ''
    };
    cppFuncInfo.name = parseObj.funcs[i].name;
    cppFuncInfo.genName = parseObj.funcs[i].name;
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

function getCTypeFromJS(type: string) {
  let cType = type;
  for (let index = 0; index < tsTransferType.length; index++) {
    if (type === tsTransferType[index].fromType) {
      cType = tsTransferType[index].tranferContent[0];
    }
  }
  return cType;
}

function createFuncParam(params: ParamObj) {
  let cppParam: ParamObj = {
    name: '',
    type: '',
    arraySize: 0
  };
  cppParam.name = params.name;
  cppParam.type = getCTypeFromJS(params.type);
  return cppParam;
}
