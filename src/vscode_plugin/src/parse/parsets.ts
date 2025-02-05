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
import { ParamObj, FuncObj, ClassObj, EnumObj, TypeObj, ParseObj } from '../gen/datatype'

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

function getTypeAliasSubtypes(typeAlias: ts.TypeAliasDeclaration, list: ParamObj[]) {
    // 检查类型是否为类型节点
    const typeNode = typeAlias.type;
    // console.log('getTypeAliasSubtypes');
    try {
        if (ts.isUnionTypeNode(typeNode)) {
            // 如果是联合类型（Union Type），遍历它的子类型
            console.log('isUnionTypeNode');
            return typeNode.types.map(type => JSON.stringify(type.getText()));
        } else if (ts.isIntersectionTypeNode(typeNode)) {
            // 如果是交叉类型（Intersection Type），遍历它的子类型
            console.log('isIntersectionTypeNode');
            return typeNode.types.map(type => JSON.stringify(type.decorators));
        } else if (ts.isTypeLiteralNode(typeNode)) {
            // 如果是类型字面量（Type Literal），遍历它的属性
            console.log('isTypeLiteralNode');
            return typeNode.members.map(member => {
                let nameStr = JSON.stringify(member.name);
                let nameObj = JSON.parse(nameStr);
                let propType = gchecker.getTypeAtLocation(member);
                let typeStr = gchecker.typeToString(propType);
                let kindStr = typeStr;
                list.push({
                    type: kindStr,
                    name: nameObj.escapedText,
                    arraySize: 0
                })
                return `(${nameObj.escapedText}:${kindStr})`;
            });
        }
        // 处理其他类型
        return [JSON.stringify(typeNode)];
    } catch (error) {
        console.error('Error processing node:', error);
    }
    return [];
}

function getParamType(paramType: any) {
  if (paramType === undefined) {
    return 'void';
  }
  let paramText = paramType.kind === NUMBER_TYPE ? 'number' : // 类型为 number
                  paramType.kind === STRING_TYPE ? 'string' : // 类型为 string
                  paramType.kind === BOOLEAN_TYPE ? 'boolean' : // 类型为 boolean
                  paramType.kind === VOID_TYPE ? 'void' :
                  'any'; // 默认any类型
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

export function parseTsFile(filePath: string): ParseObj {
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
            console.log(`Class: ${node.name.text}, ${node.members}`);
            let classItem: ClassObj = {
                name: node.name.text,
                alias: '',
                functionList: [],
                variableList: []
            };
            try {
                node.members.forEach(member => {
                    // console.log(`Member: ${JSON.stringify(member)}`)
                    if (ts.isMethodDeclaration(member) && member.name) {
                        const methodstr = member.name ? JSON.stringify(member.name) : 'noname';
                        const methodObject = JSON.parse(methodstr);
                        const methodName = methodObject.escapedText;
                        console.log(`memberName: ${methodName} `);
                        let returnStr = 'void';
                        if (member.type) {
                            let returnObjStr = JSON.stringify(member.type);
                            // console.log(`returnObjStr: ${returnObjStr} `);
                            let returnObj = JSON.parse(returnObjStr);
                            returnStr = getParamType(member.type);
                            if (returnObj.typeName) {
                                let returnNameStr = JSON.stringify(returnObj.typeName);
                                let returnName = JSON.parse(returnNameStr).escapedText;
                                let returnArgsStr = JSON.stringify(returnObj.typeArguments);
                                let returnArgsObj = JSON.parse(returnArgsStr);
                                const returnArgs = returnArgsObj.map((argItem: TypeArguments) => {
                                    let argStr = argItem.members.map((memItem: MemberObj) => {
                                        let memNameStr = '';
                                        let memTypeStr = 'void';
                                        if (memItem.name) {
                                            memNameStr = memItem.name.escapedText;
                                        }
                                        if (memItem.type) {
                                            memTypeStr = memItem.type.escapedText ? memItem.type.escapedText : 'any';
                                        }
                                        return `${memNameStr}: ${memTypeStr}`;
                                    }).join(', ');
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
                                // console.log(`paramTypeObjStr: ${paramTypeObjStr} }`);
                                paramTypeStr = getParamType(param.type);
                                if (JSON.parse(paramTypeObjStr).typeName) {
                                    paramTypeStr = JSON.parse(paramTypeObjStr).typeName.escapedText;
                                }
                            }
                            paramResList.push({
                                name: paramStr,
                                type: paramTypeStr,
                                arraySize: 0
                            })
                            return `${paramStr}: ${paramTypeStr}`
                        }).join(', ');
                        console.log(`  Method: ${methodName}, Return Type: ${returnStr}, Parameters: ${params}`);
                        classItem.functionList.push({
                            name: methodName,
                            returns: returnStr,
                            parameters: paramResList,
                            type: '',
                        });
                    } else if (ts.isPropertyDeclaration(member) || ts.isPropertyAssignment(member)) { // 判断是否是类的成员变量
                      if ('type' in member && 'text' in member.name) {
                        let paramTypeText = getParamType(member.type);
                        let parameter: ParamObj = {
                          name: member.name.text,
                          type: paramTypeText,
                          arraySize: 0
                        }
                        classItem.variableList.push(parameter);
                      }
                    }
                    parseRes.classes.push(classItem);
                });
            } catch (error) {
                console.error('Error processing node:', error);
            }
        } else if (ts.isEnumDeclaration(node) && node.name) {
            try {
                console.log(`Enum: ${node.name.text}`);
                let enumItem: EnumObj = {
                    name: node.name.text,
                    alias: '',
                    members: [],
                };
                // console.log(`Enum: ${node.name.text}, ${node.members.length}`);
                node.members.forEach(member => {
                    const memJsonStr = JSON.stringify(member.name);
                    const memJsonObj = JSON.parse(memJsonStr);
                    // console.log(`Member: ${memJsonObj.escapedText}`)
                    enumItem.members.push(memJsonObj.escapedText);
                })
                parseRes.enums.push(enumItem);
            } catch (error) {
                console.error('Error processing node:', error);
            }
        } else if (ts.isTypeAliasDeclaration(node) && node.name) {
            console.log(`Type: ${node.name.text}`);
            let typeItem: TypeObj = {
                name: node.name.text,
                alias: getParamType(node.type),
                members: [],
            };
            // console.log(`Type: ${node.name.text}, ${node.typeParameters} ${typeof(node.type)}`);
            const subtypes = getTypeAliasSubtypes(node, typeItem.members);
            parseRes.types!.push(typeItem);
            console.log(`subtypes : ${subtypes}`);
        } else if (ts.isFunctionDeclaration(node) && node.name) {
          console.log(`Type: ${node.name.text}`);
          const parameters = node.parameters;
          let parames: ParamObj[] = [];
          parameters.forEach(param => {
            let paramName = '';
            if ('text' in param.name) {
              paramName = param.name.text; // 参数名称，如 "v1"
            }
            const paramType = param.type; // 参数类型节点
            let paramText = getParamType(paramType);

            console.log(`  ${paramName}: ${paramText}`);
            let parameter: ParamObj = {
              name: paramName,
              type: paramText,
              arraySize: 0
            }
            parames.push(parameter);
          });
        
          // 获取返回值类型
          const returnTypeNode = node.type;
          let returnTypeText = getParamType(returnTypeNode);
          let funcItem: FuncObj = {
            name: node.name.text,
            returns: returnTypeText,
            parameters: parames,
            type: '',
          }
          parseRes.funcs.push(funcItem);
        }
        ts.forEachChild(node, visitor);
    }
    
    const sourceCode = fs.readFileSync(filePath, 'utf8');
    const sourceFile = ts.createSourceFile(filePath, sourceCode, ts.ScriptTarget.Latest);
    const program = ts.createProgram([filePath], {});
    gchecker = program.getTypeChecker();
    ts.forEachChild(sourceFile, visitor);

    return parseRes;
}