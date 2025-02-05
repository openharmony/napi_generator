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

import util = require('util');
import { replaceAll } from "../common/tool";
import { FuncInfo, InterfaceList, ParamObj, TypeList } from "./datatype";
import { getInterfaceBody, getJsTypeFromC, getTypeBody, isBoolType, isNumberType, isStringType } from './gendts';
import { testAbilityFuncTemplate } from "../template/func_template";
const INTVALUE = 5;
const FLOATVALUE = 2.5;

export function generateFuncTestCase(funcInfo: FuncInfo, rawFileName: string,  typeList: TypeList[], interfaceList: InterfaceList[]) {
  let { funcParamUse, funcParamDefine, funcInfoParams } = genInitTestfunc(funcInfo, typeList, interfaceList);
  // 去除调用参数的最后一个','
  let index = funcParamUse.lastIndexOf(', ');
  funcParamUse = funcParamUse.substring(0, index);
  let callFunc = '';
  let hilogContent = '';
  // 调用函数
  console.info("test funcInfo:" + JSON.stringify(funcInfo));
  if (getJsType(funcInfo.retType) !== 'void') {
    callFunc = util.format('let result: %s = testNapi.%s(%s)\n    ', getJsType(funcInfo.retType), funcInfo.genName, funcParamUse);
    // 加 hilog 打印
    hilogContent = util.format('hilog.info(0x0000, "testTag", "Test NAPI %s: ", JSON.stringify(result));\n    ', funcInfo.genName);
    hilogContent += util.format('console.info("testTag", "Test NAPI %s: ", JSON.stringify(result));\n    ', funcInfo.genName);
  } else {
    callFunc = util.format('testNapi.%s(%s)\n    ', funcInfo.genName, funcParamUse);
  }
  let funcTestReplace = funcParamDefine + callFunc + hilogContent;
  // 替换test_case_name
  let funcTestContent = replaceAll(testAbilityFuncTemplate, '[func_direct_testCase]', funcTestReplace);
  funcTestContent = replaceAll(funcTestContent, '[test_case_name]', funcInfo.genName);
  funcTestContent = replaceAll(funcTestContent, '[file_introduce_replace]', rawFileName);
  funcTestContent = replaceAll(funcTestContent, '[func_introduce_replace]', funcInfo.name);
  funcTestContent = replaceAll(funcTestContent, '[input_introduce_replace]', funcInfoParams === '' ? 'void' : funcInfoParams);
  funcTestContent = replaceAll(funcTestContent, '[func_return_replace]', funcInfo.retType);

  return funcTestContent;
}

function genInitTestfunc(funcInfo: FuncInfo, typeList: TypeList[], interfaceList: InterfaceList[]) {
  let funcParamDefine = '';
  let funcParamUse = '';
  let funcInfoParams = '';
  let funcInfoParamTemp = '[paramName]: [paramType]; ';
  // 判断函数有几个参数，依次给参数赋值
  for (let i = 0; i < funcInfo.params.length; i++) {
    let funcInfoParamReplace = replaceAll(funcInfoParamTemp, '[paramName]', funcInfo.params[i].name);
    funcInfoParamReplace = replaceAll(funcInfoParamReplace, '[paramType]', funcInfo.params[i].type);
    funcInfoParams += funcInfoParamReplace;
    let testType = getTestType(funcInfo.params[i].type);
    if (testType === 'int') {
      funcParamDefine += util.format('let %s = %s\n    ', funcInfo.params[i].name, INTVALUE);
      funcParamUse += funcInfo.params[i].name + ', ';
    } else if (testType === 'float') {
      funcParamDefine += util.format('let %s = %s\n    ', funcInfo.params[i].name, FLOATVALUE);
      funcParamUse += funcInfo.params[i].name + ', ';
    } else if (testType === 'bool') {
      funcParamDefine += util.format('let %s = %s\n    ', funcInfo.params[i].name, true);
      funcParamUse += funcInfo.params[i].name + ', ';
    } else if (testType === 'string') {
      funcParamDefine += util.format('let %s = "%s"\n    ', funcInfo.params[i].name, 'hello');
      funcParamUse += funcInfo.params[i].name + ', ';
    } else if (getTypeBody(testType, typeList)) {
      let typeDefineRes = getTypeDefine(testType, funcParamDefine, funcInfo, i, funcParamUse, typeList);
      funcParamDefine = typeDefineRes[0];
      funcParamUse = typeDefineRes[1];
    } else if (getInterfaceBody(testType, interfaceList)) {
      let interfaceDefineRes = getInterfaceDefine(testType, funcParamDefine, funcInfo, i, funcParamUse, interfaceList);
      funcParamDefine = interfaceDefineRes[0];
      funcParamUse = interfaceDefineRes[1];
    }
  }
  return { funcParamUse, funcParamDefine, funcInfoParams };
}

function getTypeDefine(testType: string, funcParamDefine: string, funcInfo: FuncInfo, i: number, funcParamUse: string, typeList: TypeList[]) {
  let cTypeDefine = getTypeBody(testType, typeList);
  let typeDefType = getJsTypeFromC(cTypeDefine as string);
  // genType
  if (typeDefType === 'number') {
    funcParamDefine += util.format('let %s = %s\n    ', funcInfo.params[i].name, INTVALUE);
    funcParamUse += funcInfo.params[i].name + ', ';
  } else if (typeDefType === 'string') {
    funcParamDefine += util.format('let %s = "%s"\n    ', funcInfo.params[i].name, 'hello');
    funcParamUse += funcInfo.params[i].name + ', ';
  } else if (typeDefType === 'boolean') {
    funcParamDefine += util.format('let %s = %s\n    ', funcInfo.params[i].name, false);
    funcParamUse += funcInfo.params[i].name + ', ';
  }
  return [funcParamDefine, funcParamUse];
}

function genInterFuncParamStr(param: ParamObj[]) {
  let paramsStr = '';
  for(let i = 0; i < param.length; i++) {
    let rawType = getJsTypeFromC(param[i].type);
    paramsStr += param[i].name + ': ' + rawType;
    if (i !== param.length - 1) {
      paramsStr += ', ';
    }
  }
  return paramsStr;
}

function getInterfaceDefine(testType: string, funcParamDefine: string, funcInfo: FuncInfo, i: number, funcParamUse: string, interfaceList: InterfaceList[]) {
  let objValue = getInterfaceBody(testType, interfaceList);
  let objTestData = 'let %s:testNapi.%s = { ';
  let interParams = objValue!.params;
  let interFuncs = objValue!.funcs;
  // 成员变量赋值
  for (let j = 0; j < interParams.length; j++) {
    let paramType = getJsTypeFromC(interParams[j].type);
    if (paramType === 'number') {
      objTestData += util.format('%s: %s, ', interParams[j].name, INTVALUE);
    } else if (paramType === 'string') {
      objTestData += util.format('%s: "%s", ', interParams[j].name, 'hello');
    } else if (paramType === 'boolean') {
      objTestData += util.format('%s: %s, ', interParams[j].name, true);
    } else if (getInterfaceBody(paramType, interfaceList)) {
      objTestData += util.format('%s: null, ', interParams[j].name);
    } 
  }
  
  // 成员函数
  for (let j = 0; j < interFuncs.length; j++) {
    let paramStr = genInterFuncParamStr(interFuncs[j].parameters);
    let initInterFunc = util.format('%s:(%s) => ',interFuncs[j].name, paramStr);
    let interFuncRetType = getJsTypeFromC(interFuncs[j].returns);
    if (interFuncRetType === 'void') {
      let interfaceFuncRetDefine = initInterFunc + '{}';
      objTestData += util.format('%s, ', interfaceFuncRetDefine);
    } else if (interFuncRetType === 'string') {
      let interfaceFuncRetDefine = initInterFunc + '{return ""}';
      objTestData += util.format('%s, ', interfaceFuncRetDefine);
    } else if (interFuncRetType === 'boolean') {
      let interfaceFuncRetDefine = initInterFunc + '{ return true }';
      objTestData += util.format('%s, ', interfaceFuncRetDefine);
    } else if (interFuncRetType === 'number') {
      let interfaceFuncRetDefine = initInterFunc + '{ return 0 }';
      objTestData += util.format('%s, ', interfaceFuncRetDefine);
    }
  }

  // 去除调用参数的最后一个','
  let index = objTestData.lastIndexOf(', ');
  if (index !== -1) {
    objTestData = objTestData.substring(0, index) + ' }\n    ';
  } else {
    objTestData = 'let %s:testNapi.%s = null;\n    ';
  }
  funcParamDefine += util.format(objTestData, funcInfo.params[i].name, testType);
  funcParamUse += funcInfo.params[i].name + ', ';
  return [funcParamDefine, funcParamUse];
}

function getTestType(type: string) {
    // 去掉const 和 *
    type = replaceAll(type,'const', '');
    type = replaceAll(type, '*', '').trim();
    if (type === 'uint32_t' || type === 'int32_t' || type === 'int16_t' ||
        type === 'int64_t' || type === 'int' || type === 'size_t') {
        return 'int';
    } else if (type === 'double_t' || type === 'double' || type === 'float') {
        return 'float';
    } else if (type === 'bool') {
        return 'bool';
    } else if (type === 'std::string' || type.indexOf('char') >= 0) {
        return 'string';
    }
    return type;
}

function getJsType(type: string) {
    type = replaceAll(type,'const', '');
    type = replaceAll(type, '*', '').trim();
    if (isNumberType(type) || isStringType(type) || isBoolType(type) || type === 'void') {
      return getJsTypeFromC(type);
    } else {
      return 'testNapi.' + type.replace('*', '').trim();
    }  
}