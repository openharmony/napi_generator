/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
import re = require('./common/re');
import fs = require('fs');
import util = require('util');
import { DtscppRootInfo, FuncInfo, FuncObj, InterfaceBody, InterfaceList, ParamObj, TypeList } from './datatype';
import { dtsFuncTemplate } from './template/func_template';
import { generateRandomInteger, removeComments, removeTab, replaceAll } from './common/tool';
import path = require('path');
const MIN_RANDOM = 100;
const MAX_RANDOM = 999

export function isStringType(cType: string) {
  switch (cType) {
      case 'string':
      case 'std::string':
      case 'char':
      case 'wchar_t':
      case 'char16_t':
      case 'char32_t':
          return true;
      default:
          return false;
  }
}

export function isBoolType(cType: string) {
  if (cType === 'bool') {
      return true;
  }
  return false;
}

export function isNumberType(cType: string) {
  switch (cType) {
      case 'short':
      case 'int':
      case 'uint32_t':
      case 'size_t':
      case 'long':
      case 'long long':
      case 'float':
      case 'double':
      case 'long double':
      case 'int16_t':
      case 'uint16_t':
      case 'int32_t':
      case 'int64_t':
      case 'uint64_t':
      case 'double_t':
      case 'float_t':
          return true;
      default:
          return false;
  }
}

function basicC2js(cType: string) {
  let jsType = '';
  if (isStringType(cType)) {
      jsType = 'string';
  } else if (isBoolType(cType)) {
      jsType = 'boolean';
  } else if (isNumberType(cType)) {
      jsType = 'number';
  } else {
      jsType = cType;
  }
  return jsType;
}

export function getJsTypeFromC(cType: string) {
  let basicCtype = cType;
  let matchs = re.match('(std::)?vector<([\x21-\x7e ]+)>', basicCtype);
  let isArray = 0;
  if (matchs) {
      basicCtype = re.getReg(basicCtype, matchs.regs[2]).trim();
      isArray = 1;
  }

  let unsignedIdx = basicCtype.indexOf('unsigned');
  if (unsignedIdx >= 0) {
      // cut off the keywords 'unsigned'
      basicCtype = basicCtype.substring(unsignedIdx + 8, basicCtype.length).trim();
  }
  let jsType = basicC2js(basicCtype);
  if (isArray) {
      jsType = util.format('Array<%s>', jsType);
  }
  // 去掉const
  jsType = replaceAll(jsType, 'const', '');
  // struct cJson * 的情况
  let matchStruct = re.match('(struct)?[A-Z_a-z0-9 *]+', basicCtype);
  if (matchStruct) {
      let index = basicCtype.indexOf('struct');
      // 去掉struct和*
      if (index >= 0) {
        jsType = jsType.substring(index + 6, basicCtype.length);
      }
      jsType = replaceAll(jsType, '*', '').trim();
  }
  jsType = basicC2js(jsType);
  return jsType;
}

function isJsBasicType(type: string) {
  if (type === 'number' || type === 'string' || type === 'boolean') {
    return true;
  } else {
    return false;
  }
}

function getInterFuncName(str: string) {
  let strArr = str.split(' ');
  return replaceAll(strArr[1], '*', '');
}

function getInterFuncRetType(str: string) {
  let strArr = str.split(' ');
  // let retType = getJsTypeFromC(replaceAll(strArr[0], '*', ''));
  return replaceAll(strArr[0], '*', '');
}

function getInterFuncParams(str: string, paramObj: ParamObj[]) {
  let paramsStr = '';
  let paramObject: ParamObj = {
    name: '',
    type: ''
  }
  let paramArr = replaceAll(str, '*', '').split(',');
  for (let i = 0; i < paramArr.length; i++) {
    let param = removeTab(paramArr[i]).split(' ');
    const paramType = replaceAll(param[0], ' ', '');
    const paramVal = replaceAll(param[1], ' ', '');
    paramObject.name = paramVal;
    paramObject.type = paramType;
    paramObj.push(paramObject);
    let rawType = getJsTypeFromC(paramType);
    paramsStr += paramVal + ': ' + rawType;
    if (i !== paramArr.length - 1) {
      paramsStr += ', ';
    }
  }
  return paramsStr;
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


export function genDtsInterface(path: string, typeList: TypeList[], interfaceList: InterfaceList[]) {
    // 解析typedef: 使用正则表达式提取typedef struct定义
    const typedefsRegex1 = /typedef\s+struct\s+\w+\s*{\s*[\s\S]*?}\s*\w+;/g;
    // 正则表达式匹配 typedef 后跟基本数据类型和自定义类型名称
    const typedefsRegex2 = /typedef\s+\w+\s+\w+\s*;/g;
    let rawContent = removeComments(fs.readFileSync(path).toString());
    let structMatch = rawContent.match(typedefsRegex1);
    let basicTypeMatch = rawContent.match(typedefsRegex2);
    let interfaceListDef: string = '';

    // 使用正则表达式的 exec 方法来获取匹配项
    if (structMatch) {
    for (let index = 0; index < structMatch.length; index++) {
      let matchs = removeComments(structMatch[index]);
        let structIndex = matchs.indexOf('struct');
        let leftIndex = matchs.indexOf('{');
        let rightIndex = matchs.indexOf('}');
        let interfaceName = matchs.substring(structIndex + 6, leftIndex).trim();
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
          const match = paramStr.match(funcRegex);
          if (match) {
            // 处理成员函数  仅仅限于成员函数是函数指针的情况
            let interFuncParams: ParamObj[] = []
            let returnType = getInterFuncRetType(match[0]);
            let funcName = getInterFuncName(match[1]);
            funcName = util.format('KH%s_%s', generateRandomInteger(MIN_RANDOM, MAX_RANDOM), funcName);
            let params = getInterFuncParams(match[2], interFuncParams);
            interDefine += util.format('  %s:(%s) => %s;\n',funcName, params, returnType);
            let funcObj: FuncObj = {
              name: funcName,
              returns: returnType,
              parameters: interFuncParams
            }
            interFuncsContent.push(funcObj);
          } else {
            let lastTabIndex = paramStr.lastIndexOf(' ');
            const variableName = paramStr.substring(lastTabIndex + 1, paramStr.length).replace('*', '')
            const variabletype = paramStr.substring(0, lastTabIndex);
            let rawType = getJsTypeFromC(variabletype);
            if (!isJsBasicType(rawType)) {
              rawType += ' | null';
            }
            let variableDefine = '  ' + variableName + ': ' + rawType + ';\n'
            interDefine += variableDefine;
            let paramObj: ParamObj = {
              name: variableName,
              type: replaceAll(variabletype, 'struct', '').trim()
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
          console.log('Basic type typedef match:', basicTypeMatch[0]); // 输出匹配的基本类型定义
          let matchs = basicTypeMatch[index].split(' ');
          let rawType = getJsTypeFromC(matchs[1].trim());
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

export function genTsFunction(func: FuncInfo, rawFileName: string) {
  let funcParams = '';
  for (let i = 0; i < func.params.length; ++i) {
      funcParams += i > 0 ? ', ' : '';
      funcParams += func.params[i].name + ': ' + func.params[i].type;
  }
  let funcContent = replaceAll(dtsFuncTemplate, '[file_introduce_replace]', rawFileName);
  funcContent = replaceAll(funcContent, '[func_introduce_replace]', func.name);
  funcContent = replaceAll(funcContent, '[input_introduce_replace]', funcParams === '' ? 'void' : funcParams);
  funcContent = replaceAll(funcContent, '[func_name_replace]', func.genName);
  funcContent = replaceAll(funcContent, '[func_param_replace]', funcParams);
  funcContent = replaceAll(funcContent, '[func_return_replace]', func.retType);

  return funcContent;
}

function createParam(parseParamInfo: ParamObj) {
  let tsParam: ParamObj = {
      name: '',
      type: '',
  };

  let cppParam: ParamObj = {
    name: '',
    type: '',
  };
  tsParam.name = replaceAll(parseParamInfo.name, '*', '');
  cppParam.name = tsParam.name;
  cppParam.type = removeMarco(parseParamInfo.type);
  let rawType = getJsTypeFromC(parseParamInfo.type);
  tsParam.type = removeMarco(rawType);
  return [tsParam, cppParam];
}

function removeMarco(type: string) {
  // 去掉宏定义
  let leftCraftIndex = type.indexOf('(');
  let rightCraftIndex = type.indexOf(')');
  if (leftCraftIndex >= 0 && rightCraftIndex > 0) {
    type = removeTab(type.substring(leftCraftIndex + 1, rightCraftIndex));
  }
  return type;
}

function createFuncInfo(parseFuncInfo: FuncObj) {
  let funcInfo: FuncInfo = {
      name: '',
      params: [],
      retType: '',
      genName: ''
  };

  let cppFuncInfo: FuncInfo = {
    name: '',
    params: [],
    retType: '',
    genName: ''
  }
  funcInfo.name = parseFuncInfo.name;
  cppFuncInfo.name = parseFuncInfo.name;
  funcInfo.genName = util.format('KH%s_%s', generateRandomInteger(MIN_RANDOM, MAX_RANDOM), funcInfo.name);
  cppFuncInfo.genName = funcInfo.genName;
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
  funcInfo.retType = getJsTypeFromC(retType);
  return [funcInfo, cppFuncInfo];
}

export function analyzeRootFunction(funcInfo: FuncInfo[], cppFuncInfo: FuncInfo[], parseFunctions: FuncObj[]) {
  for (let i = 0; i < parseFunctions.length; ++i) {
      let result = createFuncInfo(parseFunctions[i]);
      funcInfo[i] = result[0];
      cppFuncInfo[i] = result[1];
  }
}

export function genDtsFile(rootInfo: DtscppRootInfo, out: string) {
  let typeList: TypeList[] = []
  let interfaceList: InterfaceList[] = []
  let interDef = genDtsInterface(rootInfo.rawFilePath, typeList, interfaceList);
  let tsFuncContent = '';
  // analyze
  let tsfunctions: FuncInfo[] = [];  
  let cppfunctions: FuncInfo[] = [];
  analyzeRootFunction(tsfunctions, cppfunctions, rootInfo.funcs);
  let rawFileName = path.basename(rootInfo.rawFilePath);
  for (let i = 0; i < rootInfo.funcs.length; i++) {
    // gen dts function
    tsFuncContent += genTsFunction(tsfunctions[i], rawFileName);
  }
  let dtsFileName = rootInfo.fileName + '.d.ts';
  let dtsContent = interDef + tsFuncContent;

  let outPath = path.join(out, dtsFileName);
  fs.writeFileSync(outPath, dtsContent);

  console.info('generate success!')
}