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

import * as vscode from 'vscode';
import * as path from 'path';
import * as ts from 'typescript';
import { ParamObj, FuncObj, StructObj, ClassObj, EnumObj, UnionObj, ParseObj } from './datatype'

import fs = require('fs');

function parseEnum(data: string) {
  // 使用正则表达式提取枚举定义
  const enumRegex = /typedef\s+enum\s+(\w*)\s*{([^}]*)}\s*(\w+);|enum\s+(\w+)\s*{([^}]*)}\s*;/g;
  const enums: EnumObj[] = [];
  let match;
  while ((match = enumRegex.exec(data)) !== null) {
    const enumName = match[1] ||match[3] || match[4];
    const aliasName = match[3];
    const membersString = match[2] || match[5];
    const members = membersString.split(',')
        .map(member => member.trim().replace(/[\n\r\s]/g, ''))
        .filter(member => member.length > 0);
    let enumItem = {
      "name": enumName,
      "alias": aliasName,
      "members": members
    }
    enums.push(enumItem);
  }
  console.info(` return enums: ${JSON.stringify(enums)}`);
  return enums;
}

function parseUnion(data: string) {
  // 使用正则表达式提取联合体定义
  const unionRegex = /typedef\s+union\s*(\w*)\s*{([^}]*)}\s*(\w+)\s*;|union\s+(\w+)\s*{([^}]*)}\s*;/g;
  const unions: UnionObj[] = [];
  let match;
  while ((match = unionRegex.exec(data)) !== null) {
    const unionName = match[1] || match[3] || match[4]; // 获取结构体名字
    const aliasName = match[3];
    const membersString = match[2] || match[5]; // 获取成员声明
    const members = membersString.split(';')
        .map(member => member.trim().replace(/[\n\r]/g, ''))
        .filter(member => member.length > 0);
    
    let unionItem: UnionObj = {
      "name": unionName,
      "alias": aliasName,
      "members": []
    }
    
    members.forEach(declaration => {
      // 使用正则表达式匹配类型和变量名
      // const match = declaration.match(/(\w+)\s+(\w+)(\[(\d+)\])?/);
      const match = declaration.match(/(\w[\w\s\*]+)\s+(\w+)\s*/);
      if (match) {
        const type = match[1]; // 类型
        const variable = match[2]; // 变量名
        const arrayLength = match[4] ? parseInt(match[4], 10) : -1; // 解析数组长度
        // console.log(`Type: ${type}, Variable:${variable}, Size:${arrayLength}`);
        let paramItem: ParamObj = {
          "type": type,
          "name": variable,
          "arraySize": arrayLength
        }
        unionItem.members.push(paramItem);
      }
    });

    unions.push(unionItem);
  }
  console.info(` return unions: ${JSON.stringify(unions)}`);
  return unions;
}

function parseStruct(data: string) {
  // 使用正则表达式提取结构体定义
  // const structRegex = /typedef\s+struct\s+(\w+)\s*{([^}]*)}\s*(\w+);/g;
  // const structRegex = /(\btypedef\b\s+)?struct\s+\w*\s*{([^}]*)}\s*(\w+);/g;
  const structRegex = /typedef\s+struct\s*(\w*)\s*{([^}]*)}\s*(\w+)\s*;|struct\s+(\w+)\s*{([^}]*)}\s*;/g;
  // const structs: Record<string, string[]> = {};
  const structs: StructObj[] = [];
  let match;
  while ((match = structRegex.exec(data)) !== null) {
    const structName = match[1] ||match[3] || match[4]; // 获取结构体名字
    const alias = match[3];
    const membersString = match[2] || match[5]; // 获取成员声明

    const members = membersString.split(';')
        .map(member => member.trim().replace(/[\n\r]/g, ''))
        .filter(member => member.length > 0);

    const variables: string[] = [];
    const methods: string[] = [];

    members.forEach(member => {
        // 匹配方法声明
        const methodRegex = /(\w[\w\s\*]+)\s+(\w+)\(([^)]*)\)\s*/;
        const variableRegex = /(\w[\w\s\*]+)\s+(\w+)\s*/;

        if (methodRegex.test(member)) {
            methods.push(member.trim().replace(/[\n\r]/g, ''));
        } else if (variableRegex.test(member)) {
            variables.push(member.trim().replace(/[\n\r]/g, ''));
        }
    });
    
    let structItem: StructObj = {
      "name": structName,
      "alias": alias,
      "members": parseMembers(variables),
      "functions": parseMethods(methods)
    }

    structs.push(structItem);
  }
  // console.info(` return structs: ${JSON.stringify(structs)}`);
  return structs;
}
// /^(const\s+)?([\w\s*]+)\s+(\w+)(?:\[(\d+)\])?$/
function parseParameters(members: string[]): ParamObj[] {
  // const memberRegex = /^(const\s+)?([\w\s*]+)\s+(\w+)(?:\[(\d+)\])?$/;
  const memberRegex = /^(const\s+)?([\w\s*]+)\s+(\w+)(?:\[(\d*)\])?$/;
  // console.info(` parseParameters members: ${JSON.stringify(members)}`);
  return members.map(member => {
      const match = member.trim().match(memberRegex);
      // console.info(` parseParameters match: ${JSON.stringify(match)}`);
      if (match) {
          const type = match[2];
          const name = match[3];
          // const arraySize = match[4] ? parseInt(match[4], 10) : -1;
          const arraySize = match[4] && match[4] !== "" ? parseInt(match[4], 10) : -1;
          return { type, name, arraySize };
      }
      return {};
  }).filter((m): m is ParamObj => m !== null); // 类型保护
}

function parseMembers(members: string[]): ParamObj[] {
  const memberRegex = /(?:public:|private:)?\s*(\w+(?:\s+\w+)?)\s+(\w+)(?:\[(\d+)\])?/;
  // console.info(` parseMembers members: ${JSON.stringify(members)}`);
  return members.map(member => {
      const match = member.trim().match(memberRegex);
      // console.info(` parseMembers match: ${JSON.stringify(match)}`);
      if (match) {
          const type = match[1];
          const name = match[2];
          const arraySize = match[3] ? parseInt(match[3], 10) : -1;
          return { type, name, arraySize };
      }
      return {};
  }).filter((m): m is ParamObj => m !== null); // 类型保护
}

function parseMethods(functions: string[]): FuncObj[] {
  const functionRegex = /^(\w[\w\s]*\*?)\s+(\w+)\((.*?)\)$/;
  // const functionRegex = /(\w+)\s+(\w+)\(([^)]*)\)/; // 正则表达式匹配返回值、函数名和参数

  return functions.map(func => {
      const match = func.trim().match(functionRegex);
      if (match) {
          const returns = match[1]; // 返回值类型
          const name = match[2]; // 方法名
          const parameterstr = match[3].split(',').map(param => param.trim()).filter(Boolean); // 分割参数并去除空值
          const parameters = parseParameters(parameterstr);
          return { returns, name, parameters };
      }
      return {};
  }).filter((f): f is FuncObj => f !== null); // 类型保护
}

function parseClass(data: string) {
  // 使用正则表达式提取类定义
  const classRegex = /class\s+(\w+)\s*{([^}]*)}/g;
  const classes: ClassObj[] = []
  let match;
  while ((match = classRegex.exec(data)) !== null) {
      const className = match[1];
      const classMembers = match[2]
        .split(';')
        .map(member => member.trim().replace(/[\n\r]/g, ''))
        .filter(member => member.length > 0);

      const variables: string[] = [];
      const methods: string[] = [];

      classMembers.forEach(member => {
          // 匹配方法声明
          const methodRegex = /(\w[\w\s\*]+)\s+(\w+)\(([^)]*)\)\s*/;
          const variableRegex = /(\w[\w\s\*]+)\s+(\w+)\s*/;

          if (methodRegex.test(member)) {
              methods.push(member.trim().replace(/[\n\r]/g, ''));
          } else if (variableRegex.test(member)) {
              variables.push(member.trim().replace(/[\n\r]/g, ''));
          }
      });
      
      const variableList = parseMembers(variables);
      // console.log(`parseMembers: ${JSON.stringify(variableList)}`)

      const functionList: FuncObj[] = parseMethods(methods);
      // console.log(`parsedFunctions: ${JSON.stringify(functionList)}`);

      const classItem: ClassObj = {
        "name": className,
        "alias": '',
        "variableList": variableList,
        "functionList": functionList
      }
      classes.push(classItem);
  }
  // console.info(` return classes: ${JSON.stringify(classes)}`);
  return classes;
}

function parseFunctionOld(data: string) {
  // 使用正则表达式提取函数定义
  const functionRegex1 = /([a-zA-Z_]\w*\s+)+([*a-zA-Z_]\w+)\s*\(([^)]*)\)\s*(?={|;)/g;
  const functionRegex2 = /(\w+\s*\(.*?\)\s+)(\w+)\s*\((.*?)\);\s*/g;

  let functions = data.match(functionRegex1) || [];
  if (functions.length <= 0) {
    console.info("use functionRegex2");
    functions = data.match(functionRegex2) || [];
  }
  const functionDetails: FuncObj[] = functions.map(func => {
    // 函数解析逻辑...
    // 普通类型的函数识别
    if (func.trim().startsWith('typedef')) {
      func = func.replace('typedef', '');
    }
    let parts = func.trim().match(/([a-zA-Z_]\w+)\s+\(*([*a-zA-Z_]\w+)\)*\s*\(([^)]*)\)/);
    if (!parts) {
      console.info("use regex2");
      parts = func.trim().match(/(\w+\s*\(.*?\)\s+)(\w+)\s*\((.*?)\);\s*/);
    }
    if (parts) {
      let index = 1;
      let returnType = parts[index].trim();
      let functionName = parts[index + 1].trim();
      let paramList = parts[index + 2].split(',');
      if (parts[index].trim() === 'typedef') {
          console.info("typedef -------------", parts);
          returnType = parts[index + 1].trim();
          functionName = parts[index + 2].trim();
          paramList = parts[index + 3].split(',');
      }
      
      let paramResList = [];
      for (let i=0; i<paramList.length; i++) {
          let paramItem = paramList[i].trim();

          let lastTabIndex = paramItem.lastIndexOf(' ');
          let paramType = paramItem.substring(0, lastTabIndex).trim();
          let paramName = paramItem.substring(lastTabIndex, paramItem.length).trim();
          paramResList.push({
              name: paramName,
              type: paramType,
              arraySize: 0,
          })
      }
      // console.info(`ret: ${returnType} func: ${functionName} params:(${paramResList.map(ditem => {
      //     return ' type: ' + ditem.type + ', ' + 'name: ' + ditem.name;
      // })})`)
      let funcRes: FuncObj = {
        type: 'function',
        name: functionName,
        returns: returnType,
        parameters: paramResList 
      } 
      return funcRes;
    }
    let res: FuncObj = {
      type: '',
      name: '',
      returns: '',
      parameters: []
    }
    return res;
  })
  .filter(detail => detail !== null);

  console.log(`parse oldfunc : ${JSON.stringify(functionDetails)}`)
  return functionDetails;
  // if (functionDetails.length > 0) {
  //   const funcs = [...functionDetails.filter((funcItem) : funcItem is FuncObj => funcItem !== null)];
  //   const message = functionDetails.map(detail => 
  //       `Function: ${detail!.name},
  //       Return Type: ${detail!.returns},
  //       Parameters: (${detail!.parameters.map(ditem => {
  //           return ' type: ' + ditem.type + ', ' + 'name: ' + ditem.name;
  //       })})`
  //   ).join('\n');
  //   console.info(` return parseMethods: ${JSON.stringify(funcs)}`);
  //   return funcs;
  // } else {
  //   vscode.window.showInformationMessage('No functions found.');    
  // }
}

function parseFunction(data: string): FuncObj[] {
  // const funcRegex = /^(static\s+)?(const\s+)?([\w\s\[\]*]+)\s+(\w+)\s*\(([^)]*)\);/gm;
  const funcRegex = /(?:typedef\s+([\w\s\[\]*]+)\s+\(\*\s*(\w+)\)\s*\(([^)]*)\);|^(static\s+)?(const\s+)?([\w\s\[\]*]+)\s+(\w+)\s*\(([^)]*)\);)/gm
  const functions: FuncObj[] = []
  let match;
  while ((match = funcRegex.exec(data)) !== null) {
    // console.log(`func match: ${JSON.stringify(match)}`)
    const returnType = match[1] ? match[1].trim() : match[6].trim(); //match[3].trim();
    const name = match[2] ? match[2].trim() : match[7].trim(); //match[4].trim();
    const params = (match[3] ? match[3] : match[8] || "").split(',').map(param => param.trim()).filter(param => param); //match[5].split(',').map(param => param.trim()).filter(param => param);
    let isInterface = match[0].includes('typedef');
    let funcItem: FuncObj = {
      "type": isInterface ? "typedef" : "function",
      "returns": returnType,
      "name": name,
      "parameters": parseParameters(params)
    }

    functions.push(funcItem);
  }
  // console.info(` return functions: ${JSON.stringify(functions)}`);
  return functions;
}

export function parseHeaderFile(filePath: string): Promise<ParseObj> {
  return new Promise((resolve, reject) => {
    let parseRes: ParseObj = {
      enums: [],
      unions: [],
      structs: [],
      classes: [],
      funcs: []
    };

    // 读取文件内容
    fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
      if (err) {
        vscode.window.showErrorMessage(`Error reading file: ${err.message}`);
        reject(err);
        return;
      }

      const enumList = parseEnum(data);
      const unionList = parseUnion(data);
      const structList = parseStruct(data);
      const classList = parseClass(data);
      const funcList = parseFunction(data);
      parseRes = {
        enums: enumList,
        unions: unionList,
        structs: structList,
        classes: classList,
        funcs: funcList
      }
      // console.info(` return parse result: ${JSON.stringify(parseRes)}`);
      resolve(parseRes);
    });
  });
}
