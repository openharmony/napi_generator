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
import { ParamObj, FuncObj, StructObj, ClassObj, EnumObj, UnionObj, ParseObj } from '../gen/datatype'
import { Logger } from '../common/log';
import fs = require('fs');

export function doParseEnum(data: string) {
  // const enumRegex = /typedef\s+enum\s+(\w*)\s*\{\s*([a-zA-Z0-9 _,]+)\}\s*(\w*)/g;
  const enumRegex = /enum\s+(\w*)\s*{([^}]*)}/g;
  const enums: EnumObj[] = [];
  let match;
  while ((match = enumRegex.exec(data)) !== null) {
    const enumName = match[1] || match[3] || match[4];
    const aliasName = match[3];
    const membersString = match[2] || match[5];
    const comregex = /,\s*\/\/.*$/gm;
    const cleanedEnumString = membersString.replace(comregex, '');

    const enumMembers = cleanedEnumString.split('\n')
      .map(member => member.trim().replace(/[,\n\r\s]/g, ''))
      .filter(member => member);

    let enumItem = {
      "name": enumName,
      "alias": aliasName,
      "members": enumMembers
    };
    enums.push(enumItem);
  }
  Logger.getInstance().info(` return enums: ${JSON.stringify(enums)}`);
  return enums;
}


export function parseEnum(data: string) {
  // 使用正则表达式提取枚举定义
  const enumRegex = /typedef\s+enum\s+(\w*)\s*{([^}]*)}\s*(\w+)|enum\s+(\w*)\s*{([^}]*)}/g;
  const enums: EnumObj[] = [];
  let match;
  while ((match = enumRegex.exec(data)) !== null) {
    const enumName = match[1] || match[3] || match[4];
    const aliasName = match[3];
    const membersString = match[2] || match[5];
    const comregex = /\/\/.*$/gm;
    const cleanedEnumString = membersString.replace(comregex, '');

    const enumMembers = cleanedEnumString.split(',')
      .map(member => member.trim().replace(/[,\n\r\s]/g, ''))
      .filter(member => member);

    let enumItem = {
      "name": enumName,
      "alias": aliasName,
      "members": enumMembers
    };
    enums.push(enumItem);
  }
  Logger.getInstance().info(` return enums: ${JSON.stringify(enums)}`);
  return enums;
}

export function parseUnion(data: string) {
  // 使用正则表达式提取联合体定义
  const unionRegex = /typedef\s+union\s*(\w*)\s*{([^}]*)}\s*(\w+)\s*;|union\s+(\w+)\s*{([^}]*)}\s*;/g;
  const unions: UnionObj[] = [];
  let match;
  while ((match = unionRegex.exec(data)) !== null) {
    // 获取结构体名字
    const unionName = match[1] || match[3] || match[4]; 
    const aliasName = match[3];
    // 获取成员声明
    const membersString = match[2] || match[5]; 
    const comregex = /\/\/.*$/gm;
    const cleanedMembersString = membersString.replace(comregex, '');
    const members = cleanedMembersString.split(';')
        .map(member => member.trim().replace(/[\n\r]/g, ''))
        .filter(member => member.length > 0);
    
    let unionItem: UnionObj = {
      "name": unionName,
      "alias": aliasName,
      "members": []
    }
    
    if (members.length >= 1) {
      for (let i=0;i<members.length;i++) {
        let declaration = members[i];
      // members.forEach(declaration => {
        // 使用正则表达式匹配类型和变量名
        // const match = declaration.match(/(\w+)\s+(\w+)(\[(\d+)\])?/);
        const memReg = /(\w[\w\s\*]+)\s+(\w+)\s*(\s*\[\s*\d+\s*(\]\s*\[\s*\d+\s*)*\])?/;
        const match = declaration.match(memReg);
        let arraySizes: string[] | null  = null;
        if (match) {
          // 类型
          const type = match[1]; 
          // 变量名
          const variable = match[2]; 
          
          // 解析数组长度
          if ( match[3]) {
            arraySizes = match[3]
              .replace(/\s/g, '') // Remove all whitespace
              .match(/\d+/g); // Find all numbers
          }
          // 解析数组长度
          const numberList = arraySizes ? arraySizes.map(str => parseInt(str, 10)) : [];
          // Logger.getInstance().debug(`Type: ${type}, Variable:${variable}, Size:${arrayLength}`);
          let paramItem: ParamObj = {
            "type": type,
            "name": variable,
            "arraySize": numberList.length>0 ? numberList[0] : -1,
            "arraySizeList": numberList
          }
          unionItem.members.push(paramItem);
        } else {
          let paramItem: ParamObj = {
            "type": declaration,
            "name": '',
            "arraySize": -1,
            "arraySizeList": []
          }
          unionItem.members.push(paramItem);
        }
      }  
    } else if (members.length == 1) {
      const type = members[0]; 
      let paramItem: ParamObj = {
        "type": type,
        "name": "",
        "arraySize": -1,
        "arraySizeList": []
      }
      unionItem.members.push(paramItem);
    }
    
    unions.push(unionItem);
  }
  Logger.getInstance().info(` return unions: ${JSON.stringify(unions)}`);
  return unions;
}

export function parseStruct(data: string) {
  // 使用正则表达式提取结构体定义
  // const structRegex = /typedef\s+struct\s+(\w+)\s*{([^}]*)}\s*(\w+);/g;
  // const structRegex = /(\btypedef\b\s+)?struct\s+\w*\s*{([^}]*)}\s*(\w+);/g;
  const structRegex = /typedef\s+struct\s*(\w*)\s*{([^}]*)}\s*(\w+)\s*;|struct\s+(\w+)\s*{([^}]*)}\s*;/g;
  // const structs: Record<string, string[]> = {};
  const structs: StructObj[] = [];
  let match;
  while ((match = structRegex.exec(data)) !== null) {
    // 获取结构体名字
    const structName = match[1] ||match[3] || match[4]; 
    const alias = match[3];
    // 获取成员声明
    const membersString = match[2] || match[5]; 
    // 去注释
    const comregex = /\/\/.*$/gm;
    const cleanedMembersString = membersString.replace(comregex, '');
    const members = cleanedMembersString.split(';')
        .map(member => member.trim().replace(/[\n\r]/g, ''))
        .filter(member => member.length > 0);

    const variables: string[] = [];
    const methods: string[] = [];

    members.forEach(member => {
        // 匹配方法声明
        const methodRegex = /(\w[\w\s\*]+)\s+(\w+)\(([^)]*)\)\s*/;
        const variableRegex = /(\w[\w\s\*]+)\s+(\w+)\s*/;
        const pattern = /(\w+)\s*\(\s*\*([^\)]+)\s*\)\s*\(\s*([\w\s,]*)\s*\)/;
        if (methodRegex.test(member)) {
            methods.push(member.trim().replace(/[\n\r]/g, ''));
        } else if (variableRegex.test(member)) {
            variables.push(member.trim().replace(/[\n\r]/g, ''));
        } else if (pattern.test(member)) {
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
  // Logger.getInstance().info(` return structs: ${JSON.stringify(structs)}`);
  return structs;
}
// /^(const\s+)?([\w\s*]+)\s+(\w+)(?:\[(\d+)\])?$/
export function parseParameters(members: string[]): ParamObj[] {
  // const memberRegex = /^(const\s+)?([\w\s*]+)\s+(\w+)(?:\[(\d+)\])?$/;
  // const memberRegex = /^(const\s+)?([\w\:\<\>\,\s*]+)\s+(\w+)(?:\[(\d*)\])?$/;
  const memberRegex = /^(const\s+)?([\w:<>,\s*()]+)\s+(\w+)(?:\[(\d*)])?$/;
  // Logger.getInstance().info(` parseParameters members: ${JSON.stringify(members)}`);
  return members.map(member => {
      const match = member.trim().match(memberRegex);
      // Logger.getInstance().info(` parseParameters match: ${JSON.stringify(match)}`);
      if (match) {
          const type = match[2].trim();
          const name = match[3].trim();
          // const arraySize = match[4] ? parseInt(match[4], 10) : -1;
          const arraySize = match[4] && match[4] !== "" ? parseInt(match[4], 10) : -1;
          return { type, name, arraySize };
      } else {
          const type = member;
          const name = '';
          // const arraySize = match[4] ? parseInt(match[4], 10) : -1;
          const arraySize = -1;
          return { type, name, arraySize };
      }
      return {};
  // 类型保护
  }).filter((m): m is ParamObj => m !== null); 
}

export function parseMembers(members: string[]): ParamObj[] {
  // const memberRegex = /(?:public:|private:)?\s*(\w+(?:\s+\w+)?)\s+(\w+)(?:\[(\d+)\])?/;
  // // Logger.getInstance().info(` parseMembers members: ${JSON.stringify(members)}`);
  // return members.map(member => {
  //     const match = member.trim().match(memberRegex);
  //     // Logger.getInstance().info(` parseMembers match: ${JSON.stringify(match)}`);
  //     if (match) {
  //         const type = match[1];
  //         const name = match[2];
  //         const arraySize = match[3] ? parseInt(match[3], 10) : -1;
  //         return { type, name, arraySize };
  //     }
  //     return {};
  // // 类型保护
  // }).filter((m): m is ParamObj => m !== null);
  const memReg = /(\w[\w\s\:\*]+)\s+(\w+)\s*(\s*\[\s*\d+\s*(\]\s*\[\s*\d+\s*)*\])?/;
  const pattern = /(\w+)\s*\(\s*\*([^\)]+)\s*\)\s*\(\s*([\w\s,]*)\s*\)/;
  const commPattern = /([\S\,\ ]+)\s+(\w+)/;
  let arraySizes: string[] | null  = null;
  return members.map(member => {
    member = member.replace(/\s*private\s*:\s*/, '');
    member = member.replace(/\s*public\s*:\s*/, '');
    const match = member.trim().match(memReg);
    if (match) {
      const type = match[1].trim();
      const name = match[2].trim();
      let arraySize = 0;
      // 解析数组长度
      if ( match[3]) {
        arraySizes = match[3]
          .replace(/\s/g, '') // Remove all whitespace
          .match(/\d+/g); // Find all numbers
      }
      // 解析数组长度
      const numberList = arraySizes ? arraySizes.map(str => parseInt(str, 10)) : [];
      let asize = numberList.length>0 ? numberList[0] : -1;
      return { 
        "type": type, 
        "name": name,
        "arraySize": asize,
        "arraySizeList": numberList
      };
    } else {
      let funcmatch = member.trim().match(pattern);
      if (funcmatch) {
          const type = funcmatch[1].trim();
          const name = funcmatch[2].trim();
          let paramstr = funcmatch[3];
          paramstr = paramstr.replace(/\s+/g, '');
          const paramlist = paramstr.split(',');
          return {
              "type": type,
              "name": name,
              "arraySize": paramlist.length,
              "arraySizeList": paramlist.map(item => item.trim())
          }
      } else {
        let cmatch = member.trim().match(commPattern);
        if (cmatch) {
          const type = cmatch[1].trim();
          const name = cmatch[2].trim();
          return {
              "type": type,
              "name": name,
              "arraySize": -1,
              "arraySizeList": []
          }
        } else {
          return {
              "type": member,
              "name": '',
              "arraySize": -1,
              "arraySizeList": []
          };
        }
      }
    }
    return {};
  // 类型保护
  }).filter((m): m is ParamObj => m !== null); 
}

export function parseMethods(functions: string[]): FuncObj[] {
  const functionRegex = /^(\w[\w\s]*\*?)\s+(\w+)\((.*?)\)$/;
  // 正则表达式匹配返回值、函数名和参数
  // const functionRegex = /(\w+)\s+(\w+)\(([^)]*)\)/; 

  return functions.map(func => {
      const match = func.trim().match(functionRegex);
      if (match) {
          // 返回值类型
          const returns = match[1]; 
          // 方法名
          const name = match[2]; 
          // 分割参数并去除空值
          const parameterstr = match[3].split(',').map(param => param.trim()).filter(Boolean); 
          const parameters = parseParameters(parameterstr);
          return { returns, name, parameters };
      }
      return {};
  // 类型保护
  }).filter((f): f is FuncObj => f !== null); 
}

export function parseClass(data: string) {
  // 使用正则表达式提取类定义
  const classRegex = /class\s+(\w+)\s*{([^}]*)}\s*(\w*)\s*;/g;
  const classes: ClassObj[] = []
  let match;
  while ((match = classRegex.exec(data)) !== null) {
    const className = match[1];
    const alias = match[3];
    const classMembers = match[2]
    // 去注释
    const comregex = /\/\/.*$/gm;
    const cleanedMembersString = classMembers.replace(comregex, '');
    const memlist = cleanedMembersString.split(';')
      .map(member => member.trim().replace(/[\n\r]/g, ''))
      .filter(member => member.length > 0);

    const variables: string[] = [];
    const methods: string[] = [];

    memlist.forEach(member => {
      // 匹配方法声明
      const methodRegex = /(\w[\w\s\*]+)\s+(\w+)\(([^)]*)\)\s*/;
      const variableRegex = /(\w[\w\s\*]+)\s+(\w+)\s*/;
      const pattern = /(\w+)\s*\(\s*\*([^\)]+)\s*\)\s*\(\s*([\w\s,]*)\s*\)/;
      const comParrtern = /([\S\,\ ]+)\s+(\w+)/;
      if (methodRegex.test(member)) {
        methods.push(member.trim().replace(/[\n\r]/g, ''));
      } else if (variableRegex.test(member)) {
        variables.push(member.trim().replace(/[\n\r]/g, ''));
      } else if (pattern.test(member)) {
        variables.push(member.trim().replace(/[\n\r]/g, '')); 
      } else if (comParrtern.test(member)) {
        variables.push(member.trim().replace(/[\n\r]/g, '')); 
      } else if (member.length > 0) {
        variables.push(member.trim().replace(/[\n\r]/g, '')); 
      }
    });
    
    const variableList = parseMembers(variables);
    // Logger.getInstance().debug(`parseMembers: ${JSON.stringify(variableList)}`)

    const functionList: FuncObj[] = parseMethods(methods);
    // Logger.getInstance().debug(`parsedFunctions: ${JSON.stringify(functionList)}`);

    const classItem: ClassObj = {
      "name": className,
      "alias": alias,
      "variableList": variableList,
      "functionList": functionList
    }
    classes.push(classItem);
  }
  // Logger.getInstance().info(` return classes: ${JSON.stringify(classes)}`);
  return classes;
}

export function parseFunctionOld(data: string) {
  // 使用正则表达式提取函数定义
  const functionRegex1 = /([a-zA-Z_]\w*\s+)+([*a-zA-Z_]\w+)\s*\(([^)]*)\)\s*(?={|;)/g;
  const functionRegex2 = /(\w+\s*\(.*?\)\s+)(\w+)\s*\((.*?)\);\s*/g;

  let functions = data.match(functionRegex1) || [];
  if (functions.length <= 0) {
    Logger.getInstance().info("use functionRegex2");
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
      Logger.getInstance().info("use regex2");
      parts = func.trim().match(/(\w+\s*\(.*?\)\s+)(\w+)\s*\((.*?)\);\s*/);
    }
    if (parts) {
      let index = 1;
      let returnType = parts[index].trim();
      let functionName = parts[index + 1].trim();
      let paramList = parts[index + 2].split(',');
      if (parts[index].trim() === 'typedef') {
          Logger.getInstance().info("typedef -------------" + parts);
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
              arraySizeList: []
          })
      }
      // Logger.getInstance().info(`ret: ${returnType} func: ${functionName} params:(${paramResList.map(ditem => {
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

  Logger.getInstance().debug(`parse oldfunc : ${JSON.stringify(functionDetails)}`)
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
  //   Logger.getInstance().info(` return parseMethods: ${JSON.stringify(funcs)}`);
  //   return funcs;
  // } else {
  //   vscode.window.showInformationMessage('No functions found.');    
  // }
}

export function parseFunction(data: string): FuncObj[] {
  // const funcRegex = /^(static\s+)?(const\s+)?([\w\s\[\]*]+)\s+(\w+)\s*\(([^)]*)\);/gm;
  // const funcRegex = /(?:typedef\s+([\w\:\<\>\s\[\]*]+)\s+\(\*\s*(\w+)\)\s*\(([^)]*)\);|^(static\s+)?(const\s+)?([\w\:\s\[\]*]+)\s+(\w+)\s*\(([^)]*)\);)/gm
  // const funcRegex = 
  //                 /(?:typedef\s+([\S\,\ ]+)\s+\(\*\s*(\w+)\)\s*\(([^)]*)\);|^(static\s+)?(const\s+)?([\S\,\ ]+)\s+(\w+)\s*\(([^)]*)\);)/gm
  let funcRegLines = '(?:typedef\\s+([\\S\\,\\ ]+)\\s+\\(\\*\\s*(\\w+)\\)\\s*\\(([^)]*)\\);|' +
    '^(static\\s+)?(const\\s+)?([\\S\\,\\ ]+)\\s+(\\w+)\\s*\\(([^)]*)\\);)';
  // let comfucRegex = /(static\s+)?(const\s+)?((?:[\w:]+\s*<[^<>]+>|[\w:*]+\s*)+)\s+(\w+)\s*\(\s*((?:[\w:]+\s*<[^<>]+>|[\w:*]+)\s+\w+(?:,\s*)*)*\s*\)/g;
  let comfucRegex = /(static\s+)?(const\s+)?((?:[\w:]+\s*<[^<>]+>|[\w:*]+\s*)+)\s+(\w+)\s*\(\s*((?:[\w:]+\s*<[^<>]+>|[\w:*]+)\s+\w+(?:,\s*)*)*\s*\)/g;
///(static\s+)?(const\s+)?((?:\w+(?:::\w+)*(?:<[^<>]+>)?\s*)+)\s+(\w+)\s*\(\s*((?:[\w\s:<>,*]+\s+\w+\s*,?\s*)*)\s*\)/g;
  // const comfucRegex = /(static\s+)?(const\s+)?((?:(?:long|short|signed|unsigned)\s+){1,3}\w+|\w+[\w:*]*(?:::\w+[\w:*<>]*)*)\s+(\w+)\s*\(\s*((?:\s*(?:[\w\s:<>,*]+)\s+\w+\s*,?)*)\s*\)/g;
  const funcRegex = new RegExp(funcRegLines, 'gm');
  const functions: FuncObj[] = []
  let match;
  let isFind = false;
  while ((match = funcRegex.exec(data)) !== null) {
    // Logger.getInstance().debug(`func match: ${JSON.stringify(match)}`)
    // match[3].trim();
    const returnType = match[1] ? match[1].trim() : match[6].trim(); 
    // match[4].trim();
    const name = match[2] ? match[2].trim() : match[7].trim(); 
    // match[5].split(',').map(param => param.trim()).filter(param => param);
    let paramstr = (match[3] ? match[3] : match[8] || "")
    let paramreg = /([\w\s\:\*]+<[^>]*>[\s\w\:\*]+|[\*\w\s\:]+)/g;
    let pmatch;
    let matches = [];

    while ((pmatch = paramreg.exec(paramstr)) !== null) {
        matches.push(pmatch[0].trim());
    }
    
    let isInterface = match[0].includes('typedef');
    let funcItem: FuncObj = {
      "type": isInterface ? "typedef" : "function",
      "returns": returnType,
      "name": name,
      "parameters": parseParameters(matches)
    }
    isFind = true;
    functions.push(funcItem);
  }

  if (!isFind) {
    while ((match = comfucRegex.exec(data)) !== null) {
      const returnType = match[3].trim();
      const name = match[4].trim();
      let paramstr = match[5];

      let paramreg = /([\w\s\:\*]+<[^>]*>[\s\w\:\*]+|[\*\w\s\:]+)/g;
      let pmatch;
      let matches = [];

      while ((pmatch = paramreg.exec(paramstr)) !== null) {
          matches.push(pmatch[0].trim());
      }

      let funcItem: FuncObj = {
        "type": "function",
        "returns": returnType,
        "name": name,
        "parameters": parseParameters(matches)
      }
      isFind = true;
      functions.push(funcItem);
    }
  } 
  // Logger.getInstance().info(` return functions: ${JSON.stringify(functions)}`);
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
      // Logger.getInstance().info(` return parse result: ${JSON.stringify(parseRes)}`);
      resolve(parseRes);
    });
  });
}
