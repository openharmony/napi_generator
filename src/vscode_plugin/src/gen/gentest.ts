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
import { ClassObj, StructObj, FuncInfo, FuncObj, GenInfo, InterfaceList, ParamObj, TypeList } from "./datatype";
import { getInterfaceBody, getTypeBody, transTskey2Ckey } from './gendts';
import { testAbilityFuncTemplate } from "../template/func_template";
import { Logger } from '../common/log';
import { cpp2DtsKey, dts2TestValue } from '../template/dtscpp/dts2cpp_key';
import * as path from 'path';
import * as fs from 'fs';
import { testFirstGenTemplate } from '../template/dtscpp/dtscpp_testfirstgen_template';
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
  Logger.getInstance().info("test funcInfo:" + JSON.stringify(funcInfo));
  if (getJsType(funcInfo.retType) !== 'void') {
    callFunc = util.format('let result: %s = testNapi.%s(%s)\n    ', getJsType(funcInfo.retType), funcInfo.name, funcParamUse);
    // 加 hilog 打印
    hilogContent = util.format('hilog.info(0x0000, "testTag", "Test NAPI %s: ", JSON.stringify(result));\n    ', funcInfo.name);
    hilogContent += util.format('Logger.getInstance().info("testTag", "Test NAPI %s: ", JSON.stringify(result));\n    ', funcInfo.name);
  } else {
    callFunc = util.format('testNapi.%s(%s)\n    ', funcInfo.name, funcParamUse);
  }
  let funcTestReplace = funcParamDefine + callFunc + hilogContent;
  // 替换test_case_name
  let funcTestContent = replaceAll(testAbilityFuncTemplate, '[func_direct_testCase]', funcTestReplace);
  funcTestContent = replaceAll(funcTestContent, '[test_case_name]', funcInfo.name);
  funcTestContent = replaceAll(funcTestContent, '[file_introduce_replace]', rawFileName);
  funcTestContent = replaceAll(funcTestContent, '[func_introduce_replace]', funcInfo.name);
  funcTestContent = replaceAll(funcTestContent, '[input_introduce_replace]', funcInfoParams === '' ? 'void' : funcInfoParams);
  funcTestContent = replaceAll(funcTestContent, '[func_return_replace]', funcInfo.retType);

  return funcTestContent;
}

export function genInitTestfunc(funcInfo: FuncInfo, typeList: TypeList[], interfaceList: InterfaceList[]) {
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

export function getTypeDefine(testType: string, funcParamDefine: string, funcInfo: FuncInfo, i: number, funcParamUse: string, typeList: TypeList[]) {
  let cTypeDefine = getTypeBody(testType, typeList);
  let typeDefType = transTskey2Ckey(cTypeDefine as string);
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

export function genInterFuncParamStr(param: ParamObj[]) {
  let paramsStr = '';
  for(let i = 0; i < param.length; i++) {
    let rawType = transTskey2Ckey(param[i].type);
    paramsStr += param[i].name + ': ' + rawType;
    if (i !== param.length - 1) {
      paramsStr += ', ';
    }
  }
  return paramsStr;
}

export function getInterfaceDefine(testType: string, funcParamDefine: string, funcInfo: FuncInfo, i: number, funcParamUse: string, interfaceList: InterfaceList[]) {
  let objValue = getInterfaceBody(testType, interfaceList);
  let objTestData = 'let %s:testNapi.%s = { ';
  let interParams = objValue!.params;
  let interFuncs = objValue!.funcs;
  // 成员变量赋值
  for (let j = 0; j < interParams.length; j++) {
    let paramType = transTskey2Ckey(interParams[j].type);
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
    let interFuncRetType = transTskey2Ckey(interFuncs[j].returns);
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

export function getTestType(type: string) {
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

export function getJsType(type: string) {
    type = replaceAll(type,'const', '');
    type = replaceAll(type, '*', '').trim(); 
    for(const keyItem of cpp2DtsKey) {
      for(const str of keyItem.keys) {
        if (type.includes(str)) {
          return transTskey2Ckey(type);
        }
      }
    }
    return 'testNapi.' + type.replace('*', '').trim();
}

// ----------------------- gentest ------------------------
// 用H文件为源文件生成Ability.test.ets文件
export function genAbilitytestFile(rootInfo: GenInfo, out: string) {
  if (out === undefined || out === null || out.trim() === '') {
    out = path.dirname(rootInfo.rawFilePath);
  }
  let testContent = ''
  // 1.遍历所有class
  testContent = genClassTestcase(rootInfo, testContent);

  // 1.遍历所有struct
  testContent = genStructTestcase(rootInfo, testContent);

  // 2.遍历所有函数
  testContent = genFunctionTestcase(rootInfo, testContent);

  let fileContent = replaceAll(testFirstGenTemplate.content,
    '[testAbilityFunctions]', testContent);
  // 将文件写入out文件夹
  if (!fs.existsSync(out)) {
    fs.mkdirSync(out, { recursive: true });
  }
  let lowerFileName = rootInfo.fileName.toLocaleLowerCase();
  let fileName = testFirstGenTemplate.name.replace('[fileName]',
    lowerFileName);
  fileContent = replaceAll(fileContent, '[fileName]', lowerFileName); 
  let filePath = path.join(out, fileName);
  fs.writeFileSync(filePath, fileContent);
}

export function genFunctionTestcase(rootInfo: GenInfo, testContent: string) {
  if (rootInfo.parseObj && rootInfo.parseObj.funcs) {
    rootInfo.parseObj.funcs.forEach(funcInfo => {
      let { funcTestReplace, funcInfoParams } = genMethodTestcase(funcInfo, false, '');
      let rawFileName = path.basename(rootInfo.rawFilePath);
      // 替换test_case_name
      let funcTestContent = replaceAll(testAbilityFuncTemplate,
        '[func_direct_testCase]', funcTestReplace);
      funcTestContent = replaceAll(funcTestContent, '[test_case_name]',
        funcInfo.name);
      funcTestContent = replaceAll(funcTestContent, '[file_introduce_replace]',
        rawFileName);
      funcTestContent = replaceAll(funcTestContent,
        '[input_introduce_replace]', funcInfoParams === '' ? 'void' : funcInfoParams);
      funcTestContent = replaceAll(funcTestContent, '[func_return_replace]',
        funcInfo.returns);
      testContent += funcTestContent;
    });
  }
  return testContent;
}

export function genStructTestcase(rootInfo: GenInfo, testContent: string) {
  if (rootInfo.parseObj && rootInfo.parseObj.structs) {
    // 只测试成员方法，不测试成员变量的get/set函数??? 还是得测试吧？
    rootInfo.parseObj.structs.forEach(structItem => {
      let structTestContent = util.format('let %sObj = new testNapi.%s();\n    ', structItem.name.toLocaleLowerCase(), structItem.name);
      // 1.1.遍历所有成员变量 测试set/get函数
      structItem.members.forEach(variable => {
        structTestContent = genClassGetSetTestcase(variable, structTestContent, structItem);
      });

      // 1.2.遍历所有成员函数
      structItem.functions.forEach(funcInfo => {
        // 无法判断函数是否为静态函数/是否为constructor/析构函数，所以先全部测试一遍
        let { funcTestReplace, funcInfoParams } = genMethodTestcase(funcInfo, true, structItem.name);
        structTestContent += funcTestReplace;
      });
      let clsTestContent = replaceAll(testAbilityFuncTemplate, '[func_direct_testCase]', structTestContent);
      clsTestContent = replaceAll(clsTestContent, '[test_case_name]', structItem.name);
      clsTestContent = replaceAll(clsTestContent, '[file_introduce_replace]', path.basename(rootInfo.rawFilePath));
      clsTestContent = replaceAll(clsTestContent, '[input_introduce_replace]', 'this is a test case for class.');
      clsTestContent = replaceAll(clsTestContent, '[func_return_replace]', 'this is a test case for class.');

      testContent += clsTestContent;
    });
  }
  return testContent;
}

export function genClassTestcase(rootInfo: GenInfo, testContent: string) {
  if (rootInfo.parseObj && rootInfo.parseObj.classes) {
    rootInfo.parseObj.classes.forEach(classItem => {
      let classTestContent = util.format('let %sObj = new testNapi.%s();\n    ', classItem.name.toLocaleLowerCase(), classItem.name);
      // 1.1.遍历所有成员变量 测试set/get函数
      classItem.variableList.forEach(variable => {
        classTestContent = genClassGetSetTestcase(variable, classTestContent, classItem);
      });

      // 1.2.遍历所有成员函数
      classItem.functionList.forEach(funcInfo => {
        // 无法判断函数是否为静态函数/是否为constructor/析构函数，所以先全部测试一遍
        let { funcTestReplace, funcInfoParams } = genMethodTestcase(funcInfo, true, classItem.name);
        classTestContent += funcTestReplace;
      });
      let clsTestContent = replaceAll(testAbilityFuncTemplate, '[func_direct_testCase]', classTestContent);
      clsTestContent = replaceAll(clsTestContent, '[test_case_name]', classItem.name);
      clsTestContent = replaceAll(clsTestContent, '[file_introduce_replace]', path.basename(rootInfo.rawFilePath));
      clsTestContent = replaceAll(clsTestContent, '[input_introduce_replace]', 'this is a test case for class.');
      clsTestContent = replaceAll(clsTestContent, '[func_return_replace]', 'this is a test case for class.');

      testContent += clsTestContent;
    });
  }
  return testContent;
}

export function genClassGetSetTestcase(variable: ParamObj, classTestContent: string, classItem: ClassObj | StructObj) {
  let variableType = transTskey2Ckey(variable.type);
  let testValue = 'undefined; // Please give an any value.';
  dts2TestValue.forEach(item => {
    if (item.key === variableType) {
      testValue = item.value;
    }
  });
  // 成员变量的set
  classTestContent += util.format('%sObj.%s = %s;\n    ', classItem.name.toLocaleLowerCase(), variable.name, testValue);
  // 成员变量的get  //即打印log
  classTestContent += util.format('console.log("%sObj.%s = ", %sObj.%s);\n    ', classItem.name.toLocaleLowerCase(),
    variable.name, classItem.name.toLocaleLowerCase(), variable.name);
  return classTestContent;
}

export function genMethodTestcase(funcInfo: FuncObj, isClassMethod: boolean, className: string = '') {
  let callFunc = ''; // 调用函数内容
  let hilogContent = ''; // hilog内容
  let funcParamDefine = ''; // 函数参数定义并初始化
  let funcParamUse = ''; // 函数参数使用
  let funcInfoParams = ''; // 注释
  let funcInfoParamTemp = '[paramName]: [paramType]; ';
  // 遍历方法参数，给参数赋初始值，生成注释和参数使用内容
  // 1. 先将所有type转换为ts的type
  for (let i = 0; i < funcInfo.parameters.length; ++i) {
    // 注释
    let funcInfoParamReplace = replaceAll(funcInfoParamTemp, '[paramName]',
      funcInfo.parameters[i].name);
    funcInfoParamReplace = replaceAll(funcInfoParamReplace, '[paramType]',
      funcInfo.parameters[i].type);
    funcInfoParams += funcInfoParamReplace;
    // 参数定义并初始化
    const param = funcInfo.parameters[i];
    let paramType = transTskey2Ckey(param.type);
    let testValue = 'undefined; // Please give an any value.'; // any类型咋赋值？
    dts2TestValue.forEach(item => {
      if (item.key === paramType) {
        testValue = item.value;
      }
    });
    funcParamDefine += util.format('let %s: %s = %s;\n    ',
      funcInfo.parameters[i].name, paramType, testValue);
    funcParamUse += funcInfo.parameters[i].name + ', ';
    // 如果是最后一个参数，去掉最后的逗号和空格
    if (funcInfo.parameters.length === i + 1) {
      funcParamUse = funcParamUse.slice(0, -2); // 去掉最后一个逗号和空格
    }
  }
  // 返回值,如果本来就是ts类型就不用替换了：如Promise<unknown>，就不用替换了
  let tsPromiseReg = /Promise<([^>]+)>/g;
  let returnType = tsPromiseReg.exec(funcInfo.returns) ? funcInfo.returns :
    transTskey2Ckey(funcInfo.returns);
  if (returnType === 'void') {
    callFunc = util.format('%s%s(%s)\n    ', isClassMethod ? className.toLocaleLowerCase() + 'Obj.' : 'testNapi.',
      funcInfo.name, funcParamUse);
  } else {
    callFunc = util.format('let result: %s = %s%s(%s)\n    ', returnType,
      isClassMethod ? className.toLocaleLowerCase() + 'Obj.' : 'testNapi.', funcInfo.name, funcParamUse);
    hilogContent = util.format(
      'hilog.info(0x0000, "testTag", "Test NAPI %s: ", JSON.stringify(result));\n    ', funcInfo.name);
  }
  let funcTestReplace = funcParamDefine + callFunc + hilogContent;
  return { funcTestReplace, funcInfoParams };
}