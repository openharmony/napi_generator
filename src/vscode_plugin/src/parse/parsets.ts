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
import { json } from 'stream/consumers';
import internal = require('stream');
import { ParamObj, FuncObj, ClassObj, StructObj, EnumObj, TypeObj, ParseObj } from '../gen/datatype'
import { Logger } from '../common/log';

const fs = require('fs');

interface TypeArguments {
    pos: number;
    members: [];
}

interface NameObj {
    pos: number;
    escapedText: string;
}

interface TypeObject {
    pos: number;
    escapedText: string;
}

interface MemberObj {
    pos: number;
    name: NameObj;
    type: TypeObject;
}


const NUMBER_TYPE = 148;
const STRING_TYPE = 152;
const BOOLEAN_TYPE = 134;
const VOID_TYPE = 114;
const ARRAY_TYPE = 185;
const OBJECT_TYPE = 180;

let gchecker: ts.TypeChecker;

export function getTypeAliasSubtypes(typeAlias: ts.TypeAliasDeclaration, list: ParamObj[]) {
    // 检查类型是否为类型节点
    const typeNode = typeAlias.type;
    // Logger.getInstance().debug('getTypeAliasSubtypes');
    try {
        if (ts.isUnionTypeNode(typeNode)) {
            // 如果是联合类型（Union Type），遍历它的子类型
            Logger.getInstance().debug('isUnionTypeNode');
            return typeNode.types.map(type => JSON.stringify(type.getText()));
        } else if (ts.isIntersectionTypeNode(typeNode)) {
            // 如果是交叉类型（Intersection Type），遍历它的子类型
            Logger.getInstance().debug('isIntersectionTypeNode');
            return typeNode.types.map(type => JSON.stringify(type.decorators));
        } else if (ts.isTypeLiteralNode(typeNode)) {
            // 如果是类型字面量（Type Literal），遍历它的属性
            Logger.getInstance().debug('isTypeLiteralNode');
            return typeNode.members.map(member => {
                let nameStr = JSON.stringify(member.name);
                let nameObj = JSON.parse(nameStr);
                let propType = gchecker.getTypeAtLocation(member);
                let typeStr = gchecker.typeToString(propType);
                let kindStr = typeStr;
                list.push({
                    type: kindStr,
                    name: nameObj.escapedText,
                    arraySize: 0,
                    arraySizeList: []
                })
                return `(${nameObj.escapedText}:${kindStr})`;
            });
        }
        // 处理其他类型
        return [JSON.stringify(typeNode)];
    } catch (error) {
        Logger.getInstance().error('Error processing node:' + error);
    }
    return [];
}

export function getParamType(paramType: any) {
  if (paramType === undefined) {
    return 'void';
  }
  Logger.getInstance().info('getParamType: ' + paramType.kind)
  // 类型为 number
  let paramText = paramType.kind === NUMBER_TYPE ? 'number' : 
                  // 类型为 string
                  paramType.kind === STRING_TYPE ? 'string' : 
                  // 类型为 boolean
                  paramType.kind === BOOLEAN_TYPE ? 'boolean' : 
                  paramType.kind === VOID_TYPE ? 'void' :
                  // 默认any类型
                  'any'; 
  if (paramType.kind === OBJECT_TYPE) {
    const type = paramType.typeName.escapedText;
    if (paramType.typeArguments) {
      const subType = paramType.typeArguments[0].kind === NUMBER_TYPE ? 'number' :
      paramType.typeArguments[0].kind === STRING_TYPE ? 'string' :
      paramType.typeArguments[0].kind === BOOLEAN_TYPE ? 'boolean' : 'any';
      if (type === 'Array') {
        paramText = 'Array<' + subType + '>';
      }
    } else {
      return type
    }
  }
  if (paramType.kind === ARRAY_TYPE) {
    const subType = paramType.elementType.kind === NUMBER_TYPE ? 'number' :
                    paramType.elementType.kind === STRING_TYPE ? 'string' :
                    paramType.elementType.kind === BOOLEAN_TYPE ? 'boolean' :
                    'any';
    paramText = 'Array<' + subType + '>';
  }
  return paramText;
}

export function doParseTs(filePath: string, sourceCode: string): ParseObj {
    let parseRes: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
        types: [],
    }
    function visitor(node: ts.Node) {
        if (ts.isClassDeclaration(node) && node.name) {
          Logger.getInstance().debug(`Class: ${node.name.text}, ${node.members}`);
          let classItem: ClassObj = {
            name: node.name.text,
            alias: '',
            functionList: [],
            variableList: []
          };
          try {
            node.members.forEach(member => {
                // Logger.getInstance().debug(`Member: ${JSON.stringify(member)}`)
                if (ts.isMethodDeclaration(member) && member.name) {
                  const methodstr = member.name ? JSON.stringify(member.name) : 'noname';
                  const methodObject = JSON.parse(methodstr);
                  const methodName = methodObject.escapedText;
                  Logger.getInstance().debug(`memberName: ${methodName} `);
                  let returnStr = 'void';
                  if (member.type) {
                    let returnObjStr = JSON.stringify(member.type);
                    // Logger.getInstance().debug(`returnObjStr: ${returnObjStr} `);
                    let returnObj = JSON.parse(returnObjStr);
                    returnStr = member.type?.getText(sourceFile); //getParamType(member.type);
                    if (returnObj.typeName) {
                        let returnNameStr = JSON.stringify(returnObj.typeName);
                        let returnName = JSON.parse(returnNameStr).escapedText;
                        let returnArgsStr = JSON.stringify(returnObj.typeArguments);
                        let returnArgsObj = JSON.parse(returnArgsStr);
                        const returnArgs = returnArgsObj.map((argItem: TypeArguments) => {
                            if (argItem.members) {
                              
                            }
                            let argStr = argItem.members ? argItem.members.map((memItem: MemberObj) => {
                                let memNameStr = '';
                                let memTypeStr = 'void';
                                if (memItem.name) {
                                    memNameStr = memItem.name.escapedText;
                                }
                                if (memItem.type) {
                                    memTypeStr = memItem.type.escapedText ? memItem.type.escapedText : 'any';
                                }
                                return `${memNameStr}: ${memTypeStr}`;
                            }).join(', ') : "";
                            return argStr;
                        })
                        returnStr = `${returnName} <${returnArgs}>`
                    };
                  }
                  let paramResList: ParamObj[] = [];
                  const params = member.parameters.map(param => {
                      // `${param.name}: ${param.type ? param.type : 'any'}`
                      let paramObjStr = JSON.stringify(param.name);
                      let paramStr = JSON.parse(paramObjStr).escapedText;
                      let paramTypeStr: string = 'any';
                      
                      if (param.type) {
                          let paramTypeObjStr = JSON.stringify(param.type);
                          // Logger.getInstance().debug(`paramTypeObjStr: ${paramTypeObjStr} }`);
                          paramTypeStr = param.type?.getText(sourceFile); //getParamType(param.type);
                          if (JSON.parse(paramTypeObjStr).typeName) {
                              paramTypeStr = JSON.parse(paramTypeObjStr).typeName.escapedText;
                          }
                      }
                      paramResList.push({
                          name: paramStr,
                          type: paramTypeStr,
                          arraySize: 0,
                          arraySizeList: []
                      })
                      return `${paramStr}: ${paramTypeStr}`
                  }).join(', ');
                  Logger.getInstance().debug(`  Method: ${methodName}, Return Type: ${returnStr}, Parameters: ${params}`);
                  classItem.functionList.push({
                    name: methodName,
                    returns: returnStr,
                    parameters: paramResList,
                    type: '',
                  });
                } else if (ts.isPropertyDeclaration(member) || ts.isPropertyAssignment(member)) { 
                  // 判断是否是类的成员变量
                  if ('type' in member && 'text' in member.name) {
                    let paramTypeText = member.type?.getText(sourceFile); //getParamType(member.type);
                    let parameter: ParamObj = {
                      name: member.name.text,
                      type: paramTypeText,
                      arraySize: 0,
                      arraySizeList: []
                    }
                    classItem.variableList.push(parameter);
                  }
                }
            });
            parseRes.classes.push(classItem);
          } catch (error) {
            Logger.getInstance().error('Error processing node:' + error);
          }
        } else if (ts.isEnumDeclaration(node) && node.name) {
          try {
              Logger.getInstance().debug(`Enum: ${node.name.text}`);
              let enumItem: EnumObj = {
                  name: node.name.text,
                  alias: '',
                  members: [],
                  values: [],
              };
              // Logger.getInstance().debug(`Enum: ${node.name.text}, ${node.members.length}`);
              node.members.forEach(member => {
                  const memJsonStr = JSON.stringify(member.name);
                  const memJsonObj = JSON.parse(memJsonStr);
                  // Logger.getInstance().debug(`Member: ${memJsonObj.escapedText}`)
                  if (ts.isEnumMember(member)) {
                    if (ts.isIdentifier(member.name)) {
                      enumItem.members.push(member.name.getText(sourceFile));
                    }
                  }
                  // enumItem.members.push(memJsonObj.escapedText);

                  let valueText = "";
                  let computedValue: number | undefined;
                  // 提取初始化表达式
                  if (member.initializer) {
                    valueText = member.initializer.getText(sourceFile);
                    if (ts.isCallExpression(member.initializer)) {
                      valueText = member.initializer.expression.getText(sourceFile);
                    }
                    // 编译时计算表达式值（仅限常量表达式）
                    const checker = (sourceFile as any).symbol?.parent?.checker;
                    if (checker) {
                        const type = checker.getTypeAtLocation(member.initializer);
                        computedValue = type.isNumberLiteral() ? type.value : undefined;
                    }
                    enumItem.values?.push(valueText);
                  }
              })

              
              parseRes.enums.push(enumItem);
          } catch (error) {
              Logger.getInstance().error('Error processing node:' + error);
          }
        } else if (ts.isTypeAliasDeclaration(node) && node.name) {
          Logger.getInstance().debug(`Type: ${node.name.text}`);
          let typeItem: TypeObj = {
              name: node.name.text,
              alias: node.type?.getText(sourceFile), //getParamType(node.type),
              members: [],
              functions: [],
              types: [],
          };
          if (node.type && node.type.members) {
            node.type.members.forEach(member => {
              // 处理属性
              if (ts.isPropertySignature(member)) {
                typeItem.members.push({
                  name: member.name.getText(sourceFile),
                  type: member.type?.getText(sourceFile) || "unknown",
                  arraySize: 0,
                  arraySizeList: []
                });
              }
              // 处理方法
              if (ts.isMethodSignature(member)) {
                const parameters = member.parameters.map(param => ({
                  name: param.name.getText(sourceFile),
                  type: param.type?.getText(sourceFile) || "any",
                  arraySize: 0,
                  arraySizeList: []
                }));
        
                typeItem.functions.push({
                  name: member.name.getText(sourceFile),
                  returns: member.type?.getText(sourceFile) || "void",
                  type: '',
                  parameters: parameters
                });
              }
              
            });
          } else if (ts.isUnionTypeNode(node.type)) {
            // 处理联合类型
            node.type.types.forEach(typeNode => {
              typeItem.types.push(typeNode.getText(sourceFile));
            });
          }
          
          parseRes.types!.push(typeItem);
        } else if (ts.isFunctionDeclaration(node) && node.name) {
          Logger.getInstance().debug(`Type: ${node.name.text}`);
          const parameters = node.parameters;
          let parames: ParamObj[] = [];
          parameters.forEach(param => {
            let paramName = '';
            if ('text' in param.name) {
              // 参数名称，如 "v1"
              paramName = param.name.text; 
            }
            // 参数类型节点
            const paramType = param.type; 
            let paramText = param.type?.getText(sourceFile); //getParamType(paramType);

            Logger.getInstance().debug(`  ${paramName}: ${paramText}`);
            let parameter: ParamObj = {
              name: paramName,
              type: paramText,
              arraySize: 0,
              arraySizeList: []
            }
            parames.push(parameter);
          });
        
          // 获取返回值类型
          const returnTypeNode = node.type;
          let returnTypeText = node.type?.getText(sourceFile); //getParamType(returnTypeNode);
          let funcItem: FuncObj = {
            name: node.name.text,
            returns: returnTypeText,
            parameters: parames,
            type: '',
          }
          parseRes.funcs.push(funcItem);
        } else if (ts.isInterfaceDeclaration(node) && node.name) {
          Logger.getInstance().debug(`structItem: ${node.name.text}, ${node.members}`);
          let structItem: StructObj = {
            name: node.name.text,
            alias: '',
            members: [],
            functions: []
          };
          try {
              node.members.forEach(member => {
                // Logger.getInstance().debug(`Member: ${JSON.stringify(member)}`)
                if (ts.isMethodDeclaration(member) && member.name) {
                  // 判断是否是方法
                  let paramTypeText = member.type?.getText(sourceFile); //getParamType(member.type);
                  let parameter: ParamObj = {
                    name: 'test',
                    type: paramTypeText,
                    arraySize: 0,
                    arraySizeList: []
                  }
                  structItem.members.push(parameter);
                } else if (ts.isPropertyDeclaration(member) || ts.isPropertyAssignment(member)) { 
                  // 判断是否是类的成员变量
                  if ('type' in member && 'text' in member.name) {
                    let paramTypeText = member.type?.getText(sourceFile); //getParamType(member.type);
                    let parameter: ParamObj = {
                      name: member.name.text,
                      type: paramTypeText,
                      arraySize: 0,
                      arraySizeList: []
                    }
                    structItem.members.push(parameter);
                  }
                } else if (ts.isPropertySignature(member)) {
                  const name = member.name.getText(sourceFile);
                  const type = member.type?.getText(sourceFile) || 'any';
                  let parameter = {
                    name: name,
                    type: type,
                    arraySize: 0,
                    arraySizeList: []
                  };
                  structItem.members.push(parameter);
                } else if (ts.isMethodSignature(member)) {
                  const parameters = member.parameters.map(param => ({
                    name: param.name.getText(sourceFile),
                    type: param.type?.getText(sourceFile) || "any",
                    arraySize: 0,
                    arraySizeList: []
                  }));

                  const name = member.name.getText(sourceFile);
                  const type = member.type?.getText(sourceFile) || 'void';
                  let funcobj = {
                    type: '',
                    name: name,
                    returns: type,
                    parameters: parameters
                  }
                  structItem.functions.push(funcobj);
                }
              });
              parseRes.structs.push(structItem);
          } catch (error) {
              Logger.getInstance().error('Error processing node:' + error);
          }
        }
        ts.forEachChild(node, visitor);
    }

    const sourceFile = ts.createSourceFile(filePath, sourceCode, ts.ScriptTarget.Latest);
    const program = ts.createProgram([filePath], {});
    gchecker = program.getTypeChecker();
    ts.forEachChild(sourceFile, visitor);

    return parseRes;
}

export function parseTsFile(filePath: string): ParseObj {
    const sourceCode = fs.readFileSync(filePath, 'utf8');
    return doParseTs(filePath, sourceCode);
}