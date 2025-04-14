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
import fs = require('fs');
import { DtscppRootInfo, FuncObj, InterfaceBody, ParamObj, FuncInfo, GenInfo, InterfaceList, TypeList } from './datatype';
import { dts2cpp_key } from '../template/dtscpp/dts2cpp_key';
import path = require('path');
import { Logger } from '../common/log';

import { generateRandomInteger, removeComments, removeTab, replaceAll } from '../common/tool';
import util = require('util');
import re = require('../common/re');
import { dtsFuncTemplate } from '../template/func_template';


export function genTsFunction(func: FuncInfo, rawFileName: string) {
  let funcParams = '';
  for (let i = 0; i < func.params.length; ++i) {
      funcParams += i > 0 ? ', ' : '';
      funcParams += func.params[i].name + ': ' + func.params[i].type;
  }
  let funcContent = replaceAll(dtsFuncTemplate, '[file_introduce_replace]', rawFileName);
  funcContent = replaceAll(funcContent, '[func_introduce_replace]', func.name);
  funcContent = replaceAll(funcContent, '[input_introduce_replace]', funcParams === '' ? 'void' : funcParams);
  funcContent = replaceAll(funcContent, '[func_name_replace]', func.name);
  funcContent = replaceAll(funcContent, '[func_param_replace]', funcParams);
  funcContent = replaceAll(funcContent, '[func_return_replace]', func.retType);

  return funcContent;
}


export function getInterFuncRetType(str: string) {
  let strArr = str.split(' ');
  // let retType = getJsTypeFromC(replaceAll(strArr[0], '*', ''));
  return replaceAll(strArr[0], '*', '');
}

export function getInterFuncName(str: string) {
  let strArr = str.split(' ');
  return replaceAll(strArr[1], '*', '');
}


export function getInterFuncParams(str: string, paramObj: ParamObj[]) {
  let paramsStr = '';
  let paramObject: ParamObj = {
    name: '',
    type: '',
    arraySize: 0,
    arraySizeList: []
  }
  let paramArr = replaceAll(str, '*', '').split(',');
  for (let i = 0; i < paramArr.length; i++) {
    let param = removeTab(paramArr[i]).split(' ');
    const paramType = replaceAll(param[0], ' ', '');
    const paramVal = replaceAll(param[1], ' ', '');
    paramObject.name = paramVal;
    paramObject.type = paramType;
    paramObj.push(paramObject);
    let rawType = transTskey2Ckey(paramType);
    paramsStr += paramVal + ': ' + rawType;
    if (i !== paramArr.length - 1) {
      paramsStr += ', ';
    }
  }
  return paramsStr;
}

export function isJsBasicType(type: string) {
  if (type === 'number' || type === 'string' || type === 'boolean') {
    return true;
  } else {
    return false;
  }
}

export function removeMarco(type: string) {
  // 去掉宏定义
  if (type) {
    let leftCraftIndex = type.indexOf('(');
    let rightCraftIndex = type.indexOf(')');
    if (leftCraftIndex >= 0 && rightCraftIndex > 0) {
      type = removeTab(type.substring(leftCraftIndex + 1, rightCraftIndex));
    }
  }
  
  return type;
}

export function createParam(parseParamInfo: ParamObj) {
  let tsParam: ParamObj = {
      name: '',
      type: '',
      arraySize: 0,
      arraySizeList: []
  };

  let cppParam: ParamObj = {
    name: '',
    type: '',
    arraySize: 0,
    arraySizeList: []
  };
  tsParam.name = replaceAll(parseParamInfo.name, '*', '');
  cppParam.name = tsParam.name;
  cppParam.type = removeMarco(parseParamInfo.type);
  let rawType = transTskey2Ckey(parseParamInfo.type);
  tsParam.type = removeMarco(rawType);
  return [tsParam, cppParam];
}

export function createFuncInfo(parseFuncInfo: FuncObj) {
  let funcInfo: FuncInfo = {
      name: '',
      params: [],
      retType: '',
  };

  let cppFuncInfo: FuncInfo = {
    name: '',
    params: [],
    retType: '',
  }
  funcInfo.name = parseFuncInfo.name;
  cppFuncInfo.name = parseFuncInfo.name;
  let parseParams = parseFuncInfo.parameters;
  for (let i = 0; i < parseParams.length; ++i) {
      let paramsRes = createParam(parseParams[i]);
      let tsParam = paramsRes[0]
      let cppParam = paramsRes[1];
      if (tsParam.type !== '') {
        funcInfo.params.push(tsParam);
        cppFuncInfo.params.push(cppParam);
      }
  }

  let retType = parseFuncInfo.returns === '' ? 'void' : parseFuncInfo.returns;
  retType = removeMarco(retType);
  cppFuncInfo.retType = retType;
  funcInfo.retType = transTskey2Ckey(retType);
  return [funcInfo, cppFuncInfo];
}

export function analyzeRootFunction(funcInfo: FuncInfo[], cppFuncInfo: FuncInfo[], parseFunctions: FuncObj[]) {
  for (let i = 0; i < parseFunctions.length; ++i) {
      let result = createFuncInfo(parseFunctions[i]);
      funcInfo[i] = result[0];
      cppFuncInfo[i] = result[1];
  }
}

export function genDtsInterface(path: string, typeList: TypeList[], interfaceList: InterfaceList[]) {
  // 解析typedef: 使用正则表达式提取typedef struct定义
  const typedefsRegex1 = /typedef\s+struct\s+\w+\s*{\s*[\s\S]*?}\s*\w+;/g;
  // 正则表达式匹配 typedef 后跟基本数据类型和自定义类型名称
  const typedefsRegex2 = /typedef\s+\w+\s+\w+\s*;/g;
  // 正则表达式匹配 class xxx {};
  const classRegex = /class\s+(\w+)\s+([a-zA-Z0-9_]+)?\s*(\{[^}]*\};)/g;
  let rawContent = removeComments(fs.readFileSync(path).toString());
  let structMatch = rawContent.match(typedefsRegex1);
  if (!structMatch) {
    structMatch = rawContent.match(classRegex);
  }
  let basicTypeMatch = rawContent.match(typedefsRegex2);
  let interfaceListDef: string = '';

  // 使用正则表达式的 exec 方法来获取匹配项
  if (structMatch) {
  for (let index = 0; index < structMatch.length; index++) {
    let matchs = removeComments(structMatch[index]);
      let structIndex = matchs.indexOf('struct');
      let classIndex = matchs.indexOf('class')
      let leftIndex = matchs.indexOf('{');
      let rightIndex = matchs.indexOf('}');
      let interfaceName = '';
      if (structIndex >= 0) {
        interfaceName = matchs.substring(structIndex + 6, leftIndex).trim();
      } else if (classIndex >= 0) {
        interfaceName = matchs.substring(classIndex + 5, leftIndex).trim();
      }
      let params = matchs.substring(leftIndex + 1, rightIndex).split(';');
      let interDefine = 'interface ' + interfaceName + ' {\n';
      let paramsContent: ParamObj[] = [];
      let interFuncsContent: FuncObj[] = []; 
      let interfaceBody: InterfaceBody = {
        params: paramsContent,
        funcs: interFuncsContent
      }
      let interfaceContent: InterfaceList = {
        interfaceName: interfaceName,
        interfaceBody: interfaceBody
      }
      for (let i = 0; i < params.length; i++) {
        // 去除空格和换行符
        let paramStr = removeTab(params[i]);
        if (paramStr === '') {
          continue;
        }
        // 成员函数的处理
        const funcRegex = /\w+\s+\*?\(([^\)]+)\)\s*\(([^\)]*)\)\s*/;
        const funcRegex2 = /(\w+)\s+(::\w+|[\w:]+)\s*\(([^)]*)\)\s*/;
        let match = paramStr.match(funcRegex);
        let match2 = paramStr.match(funcRegex2);
        if (match) {
          // 处理成员函数  仅仅限于成员函数是函数指针的情况
          let interFuncParams: ParamObj[] = []
          let returnType = getInterFuncRetType(match[0]);
          let funcName = getInterFuncName(match[1]);
          let params = getInterFuncParams(match[2], interFuncParams);
          interDefine += util.format('  %s:(%s) => %s;\n',funcName, params, returnType);
          let funcObj: FuncObj = {
            type: '',
            name: funcName,
            returns: returnType,
            parameters: interFuncParams
          }
          interFuncsContent.push(funcObj);
        } else if (match2) {
          let interFuncParams: ParamObj[] = []
          let returnType = getInterFuncRetType(match2[1]);
          let funcName = match2[2];
          let params = getInterFuncParams(match2[3], interFuncParams);
          interDefine += util.format('  %s:(%s) => %s;\n',funcName, params, returnType);
          let funcObj: FuncObj = {
            type: '',
            name: funcName,
            returns: returnType,
            parameters: interFuncParams
          }
          interFuncsContent.push(funcObj);
        } else {
          let lastTabIndex = paramStr.lastIndexOf(' ');
          const variableName = paramStr.substring(lastTabIndex + 1, paramStr.length).replace('*', '')
          const variabletype = paramStr.substring(0, lastTabIndex);
          let rawType = transTskey2Ckey(variabletype);
          if (!isJsBasicType(rawType)) {
            rawType += ' | null';
          }
          let variableDefine = '  ' + variableName + ': ' + rawType + ';\n'
          interDefine += variableDefine;
          let paramObj: ParamObj = {
            name: variableName,
            type: replaceAll(variabletype, 'struct', '').trim(),
            arraySize: 0,
            arraySizeList: []
          }
          paramsContent.push(paramObj);
        }
        }
        interfaceBody.funcs = interFuncsContent;
        interfaceBody.params = paramsContent;
        interfaceContent.interfaceBody = interfaceBody;
        interfaceList.push(interfaceContent);

        interDefine += '}\n';
        interfaceListDef += interDefine;
      }
    }
    
    if (basicTypeMatch) {
      for (let index = 0; index < basicTypeMatch.length; index++) {
        // 输出匹配的基本类型定义
        Logger.getInstance().debug('Basic type typedef match:' + basicTypeMatch[0]); 
        let matchs = basicTypeMatch[index].split(' ');
        let rawType = transTskey2Ckey(matchs[1].trim());
        let defineType = matchs[2].split(';')
        let typedefine = 'type ' + defineType[0] + ' = ' + rawType + ';\n';
        interfaceListDef += typedefine;
        let typeListContent: TypeList = {
          typeName: defineType[0],
          typeBody: matchs[1].trim()
        }
        typeList.push(typeListContent);
      }
    }

    return interfaceListDef;
}

export function getTypeBody(testType: string, typeList: TypeList[]) {
  for (let i = 0; i < typeList.length; i++)
  {
    if (typeList[i].typeName === testType) {
      return typeList[i].typeBody;
    }
    return '';
  }
}

export function getInterfaceBody(testType: string, interfaceList: InterfaceList[]) {
  for (let i = 0; i < interfaceList.length; i++)
  {
    if (interfaceList[i].interfaceName === testType) {
      return interfaceList[i].interfaceBody;
    }
  }
}

//----------------------------
export function transTskey2Ckey(key: string) {
  for(const keyItem of dts2cpp_key) {
    for(const str of keyItem.keys) {
      if (key.includes(str)) {
        const match = key.match(/(std::)?vector<([\w\s*::<>]+)>/);
        if (match) {
          return 'Array<' + keyItem.value + '>';
        }
        return keyItem.value;
      }
    }
  }
  let replaceKeyList = ['enum', 'struct', 'union'];
  for(const rkey of replaceKeyList) {
    key = key.replace(rkey, '').trim();
  }
  return key;
}

export function getDtsEnum(rootInfo: GenInfo) {
  let enumList = rootInfo.parseObj.enums;
  let out = '';
  for(const enumItem of enumList) {
    let enumHead = `export enum ${enumItem.name} {\n`
    let enumBody = ''
    enumItem.members.forEach(element => {
      enumBody += `\t${element},\n`
    });
    out += enumHead + enumBody + '};\n\n'
    if (enumItem.name && enumItem.alias && enumItem.name !== enumItem.alias) {
      out += `export type ${enumItem.alias} = ${enumItem.name};\n\n`
    }
  }
  return out;
}

export function getDtsFunction(rootInfo: GenInfo) {
  let funcList = rootInfo.parseObj.funcs;
  let out = '';
  for(const funcItem of funcList) {
    let funcHead = '';
    let funcTail = '';
    let enumBody = ''
    let returnType = transTskey2Ckey(funcItem.returns);
    if (funcItem.type === 'typedef') {
      funcHead = `export interface ${funcItem.name} {\n`;
      funcTail = '};\n\n';
      funcItem.parameters.forEach(element => {
        if (element.name && element.type) {
          enumBody += `${element.name}: ${transTskey2Ckey(element.type)}, `
        }
      });
      enumBody = `\t(${enumBody.slice(0, -2)}): ${returnType};\n`
      out += funcHead + `${enumBody}` + funcTail;
    } else {
      funcHead = `export function ${funcItem.name}(`
      funcTail = `): ${returnType};\n\n`;
      funcItem.parameters.forEach(element => {
        if (element.name && element.type) {
          enumBody += `${element.name}: ${transTskey2Ckey(element.type)}, `
        }
      });
      out += funcHead + enumBody.slice(0, -2) + funcTail;
    }
  }
  return out;
}

export function getDtsClasses(rootInfo: GenInfo) {
  let classList = rootInfo.parseObj.classes;
  let out = '';
  for(const classItem of classList) {
    let classHead = `export class ${classItem.name} {\n`
    let classBody = ''
    for(const attribute of classItem.variableList) {
      classBody += `\t${attribute.name}: ${transTskey2Ckey(attribute.type)};\n`
    };
    for(const method of classItem.functionList) {
      let methodContent = '';
      for(const param of method.parameters) {
        methodContent = `${param.name}: ${transTskey2Ckey(param.type)}, `;
      }
      classBody += `\t${method.name}(${methodContent.slice(0, -2)}): ${transTskey2Ckey(method.returns)};\n`
    };
    out += classHead + classBody + '};\n\n'
    if (classItem.name && classItem.alias) {
      out += `export type ${classItem.alias} = ${classItem.name};\n\n`
    }
  }
  return out;
}

export function getDtsStructs(rootInfo: GenInfo) {
  let structList = rootInfo.parseObj.structs;
  let out = '';
  for(const structItem of structList) {
    let structHead = `export type ${structItem.name} = {\n`
    let structBody = ''
    for(const attribute of structItem.members) {
      structBody += `\t${attribute.name}: ${transTskey2Ckey(attribute.type)};\n`
    };
    for(const method of structItem.functions) {
      let methodContent = '';
      for(const param of method.parameters) {
        if (param.name && param.type) {
          methodContent = `${param.name}: ${transTskey2Ckey(param.type)}, `;
        }
      }
      structBody += `\t${method.name}(${methodContent.slice(0, -2)}): ${transTskey2Ckey(method.returns)};\n`
    };
    out += structHead + structBody + '};\n\n'
    if (structItem.name && structItem.alias && structItem.name !== structItem.alias) {
      out += `export type ${structItem.alias} = ${structItem.name};\n\n`
    }
  }
  return out;
}

export function getDtsUnions(rootInfo: GenInfo) {
  let unionList = rootInfo.parseObj.unions;
  let out = '';
  for(const unionItem of unionList) {
    let unionHead = `export type ${unionItem.name} = `
    let unionBody = ''
    for(const element of unionItem.members) {
      unionBody += `${transTskey2Ckey(element.type)} | `
    };
    out += unionHead + unionBody.slice(0, -2) + ';\n\n'
    if (unionItem.name && unionItem.alias && unionItem.name !== unionItem.alias) {
      out += `export type ${unionItem.alias} = ${unionItem.name};\n\n`
    }
  }
  return out;
}

export function genDtsFile(rootInfo: GenInfo) {
  // gen enums
  let fileContent = getDtsEnum(rootInfo);
  // gen functions
  fileContent += getDtsFunction(rootInfo);
  // gen classes
  fileContent += getDtsClasses(rootInfo);
  // gen struct
  fileContent += getDtsStructs(rootInfo);
  // gen union
  fileContent += getDtsUnions(rootInfo);

  let dtsFileName = rootInfo.fileName + '.d.ts';
  let dirPath = path.dirname(rootInfo.rawFilePath);
  let outPath = path.join(dirPath, dtsFileName);
  fs.writeFileSync(outPath, fileContent);
  Logger.getInstance().info('generate success!')
  return outPath;
}