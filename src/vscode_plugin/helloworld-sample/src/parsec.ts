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
import { ParamObj, FuncObj, ParseObj } from './datatype'

import fs = require('fs');

export function parseHeaderFile(filePath: string): Promise<ParseObj> {
  return new Promise((resolve, reject) => {
    let parseRes: ParseObj = { funcs: [] };

    // 读取文件内容
    fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
      if (err) {
        vscode.window.showErrorMessage(`Error reading file: ${err.message}`);
        reject(err);
        return;
      }
      // 使用正则表达式提取函数定义
      const functionRegex1 = /([a-zA-Z_]\w*\s+)+([*a-zA-Z_]\w+)\s*\(([^)]*)\)\s*(?={|;)/g;
      const functionRegex2 = /(\w+\s*\(.*?\)\s+)(\w+)\s*\((.*?)\);\s*/g;
      
      let functions = data.match(functionRegex1) || [];
      if (functions.length <= 0) {
        console.info("use functionRegex2");
        functions = data.match(functionRegex2) || [];
      }
      const functionDetails: (FuncObj | null)[] = functions.map(func => {
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
              })
          }
          console.info(`ret: ${returnType} func: ${functionName} params:(${paramResList.map(ditem => {
              return ' type: ' + ditem.type + ', ' + 'name: ' + ditem.name;
          })})`)
          let funcRes: FuncObj = {
              name: functionName,
              returns: returnType,
              parameters: paramResList 
          } 
          return funcRes;
      }
      return null;
      })
      .filter(detail => detail !== null);

      if (functionDetails.length > 0) {
        parseRes.funcs = [...functionDetails.filter((funcItem) : funcItem is FuncObj => funcItem !== null)];
        const message = functionDetails.map(detail => 
            `Function: ${detail!.name},
            Return Type: ${detail!.returns},
            Parameters: (${detail!.parameters.map(ditem => {
                return ' type: ' + ditem.type + ', ' + 'name: ' + ditem.name;
            })})`
        ).join('\n');
        console.info(` return parseRes: ${JSON.stringify(parseRes)}`);
        vscode.window.showInformationMessage(message);
        resolve(parseRes);
      } else {
        vscode.window.showInformationMessage('No functions found.');    
      }
    });
  });
}
