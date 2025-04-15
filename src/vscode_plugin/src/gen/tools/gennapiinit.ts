
/*
* Copyright (c) 2025 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
import { GenInfo } from "../datatype";
import { classInitTemplate, classMethodDeclareTemplate, napiFuncInitTemplate } from "../../template/func_template";
import { replaceAll } from "../../common/tool";
import * as fs from 'fs';
import {genClsVariableDeclare, genStructVariableDeclare} from "./gencommonfunc";

export function doGenNapiInitFile(rootInfo: GenInfo, fileContent: string) {
  let napiInitContent = '';

  // class 的声明
  let classesInit = '';
  if (rootInfo.parseObj && rootInfo.parseObj.classes) {
    let classInit = '';
    rootInfo.parseObj.classes.forEach(classObj => {
      classInit = replaceAll(classInitTemplate, '[class_name_replace]', classObj.name);
      let clsMethodDeclare = '';
      for (let i = 0; i < classObj.functionList.length; ++i) {
        clsMethodDeclare += replaceAll(classMethodDeclareTemplate, '[class_method_name_replace]', classObj.functionList[i].name);
      }
      classInit = replaceAll(classInit, '[class_method_replace]', clsMethodDeclare);
      let { clsVariableDeclare, clsVariableGetSetDeclare } = genClsVariableDeclare(classObj);
      classInit = replaceAll(classInit, '[class_property_replace]', clsVariableGetSetDeclare);
      classesInit += classInit;
    });
  }

  // struct的声明
  let structsInit = '';
  if (rootInfo.parseObj && rootInfo.parseObj.structs) {
    let structInit = '';
    rootInfo.parseObj.structs.forEach(classObj => {
      structInit = replaceAll(classInitTemplate, '[class_name_replace]', classObj.name);
      let clsMethodDeclare = '';
      for (let i = 0; i < classObj.functions.length; ++i) {
        clsMethodDeclare += replaceAll(classMethodDeclareTemplate, '[class_method_name_replace]', classObj.functions[i].name);
      }
      structInit = replaceAll(structInit, '[class_method_replace]', clsMethodDeclare);
      let { clsVariableDeclare, clsVariableGetSetDeclare } = genStructVariableDeclare(classObj);
      structInit = replaceAll(structInit, '[class_property_replace]', clsVariableGetSetDeclare);
      structsInit += structInit;
    });
  }

  if (rootInfo.parseObj && rootInfo.parseObj.funcs) {
    rootInfo.parseObj.funcs.forEach(func => {
      let funcName = func.name;
      napiInitContent += replaceAll(napiFuncInitTemplate,
        '[func_name_replace]', funcName);
    });
  }
  // 写文件
  fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
  fileContent = replaceAll(fileContent, '[init_replace]', napiInitContent);
  // class 的init  如果class是空的这里会不会替换出错？ 后面再测试
  fileContent = replaceAll(fileContent, '[class_init_replace]', classesInit);
  fileContent = replaceAll(fileContent, '[struct_init_replace]', structsInit);
  return fileContent;
}

// 生成napiinit.cpp
export function genInitCppFile(rootInfo: GenInfo, filePath: string,
  fileContent: string) {
  fileContent = doGenNapiInitFile(rootInfo, fileContent);
  fs.writeFileSync(filePath, fileContent);
}
