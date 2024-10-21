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

const fs = require('fs');

interface TypeArguments {
    pos: number;
    members: [];
}

interface NameObj {
    pos: number;
    escapedText: string;
}

interface TypeObj {
    pos: number;
    escapedText: string;
}

interface MemberObj {
    pos: number;
    name: NameObj;
    type: TypeObj;
}


export interface ParamItem {
    type: string;
    name: string;
}

export interface TypeItem {
    name: string;
    subItemList: ParamItem[];
}

export interface EnumItem {
    name: string;
    subItemList: string[];
}

export interface FuncItem {
    name: string;
    returns: string;
    parameters: ParamItem[];
}

export interface ClassObj {
    name: string;
    funcs: FuncItem[];
}

export interface ParseObj {
    classList: ClassObj[];
    enumList: EnumItem[];
    typeList: TypeItem[];
}

let gchecker: ts.TypeChecker;

function getTypeAliasSubtypes(typeAlias: ts.TypeAliasDeclaration, list: ParamItem[]) {
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

export function parseTsFile(filePath: string): ParseObj {
    let parseRes: ParseObj = {
        classList: [],
        enumList: [],
        typeList: [],
    }
    function visitor(node: ts.Node) {
        if (ts.isClassDeclaration(node) && node.name) {
            console.log(`Class: ${node.name.text}, ${node.members}`);
            let classItem: ClassObj = {
                name: node.name.text,
                funcs: [],
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
                        let paramResList: ParamItem[] = [];
                        const params = member.parameters.map(param => {
                            // `${param.name}: ${param.type ? param.type : 'any'}`
                            let paramObjStr = JSON.stringify(param.name);
                            let paramStr = JSON.parse(paramObjStr).escapedText;
                            let paramTypeStr: string = 'any';
                            if (param.type) {
                                let paramTypeObjStr = JSON.stringify(param.type);
                                // console.log(`paramTypeObjStr: ${paramTypeObjStr} }`);
                                if (JSON.parse(paramTypeObjStr).typeName) {
                                    paramTypeStr = JSON.parse(paramTypeObjStr).typeName.escapedText;
                                }
                            }
                            paramResList.push({
                                name: paramStr,
                                type: paramTypeStr,
                            })
                            return `${paramStr}: ${paramTypeStr}`
                        }).join(', ');
                        console.log(`  Method: ${methodName}, Return Type: ${returnStr}, Parameters: ${params}`);
                        classItem.funcs.push({
                            name: methodName,
                            returns: returnStr,
                            parameters: paramResList,
                        });
                        parseRes.classList.push(classItem);
                    }
                });
            } catch (error) {
                console.error('Error processing node:', error);
            }
        } else if (ts.isEnumDeclaration(node) && node.name) {
            try {
                console.log(`Enum: ${node.name.text}`);
                let enumItem: EnumItem = {
                    name: node.name.text,
                    subItemList: [],
                };
                // console.log(`Enum: ${node.name.text}, ${node.members.length}`);
                node.members.forEach(member => {
                    const memJsonStr = JSON.stringify(member.name);
                    const memJsonObj = JSON.parse(memJsonStr);
                    // console.log(`Member: ${memJsonObj.escapedText}`)
                    enumItem.subItemList.push(memJsonObj.escapedText);
                })
                parseRes.enumList.push(enumItem);
            } catch (error) {
                console.error('Error processing node:', error);
            }
            
        } else if (ts.isTypeAliasDeclaration(node) && node.name) {
            console.log(`Type: ${node.name.text}`);
            let typeItem: TypeItem = {
                name: node.name.text,
                subItemList: [],
            };
            // console.log(`Type: ${node.name.text}, ${node.typeParameters} ${typeof(node.type)}`);
            const subtypes = getTypeAliasSubtypes(node, typeItem.subItemList);
            parseRes.typeList.push(typeItem);
            console.log(`subtypes : ${subtypes}`);
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