
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
import { classMethodDeclareTemplate, classNapiHTemplate, napiFuncHTemplate } from "../../template/func_template";
import { replaceAll } from "../../common/tool";
import * as path from 'path';
import * as fs from 'fs';
import { genClsVariableDeclare, genStructVariableDeclare } from "./gencommonfunc";

export function doGenNapiHFile(rootInfo: GenInfo, fileContent: string) {
  let napiHContent = '';

  // 实现class的
  if (rootInfo.parseObj && rootInfo.parseObj.classes) {
    let classesDeclare = '';
    rootInfo.parseObj.classes.forEach(cls => {
      let clsDeclare = replaceAll(classNapiHTemplate, '[class_name_replace]', cls.name)
      // 每个成员方法的声明
      let clsMethodDeclare = '';
      for (let i = 0; i < cls.functionList.length; ++i) {
        clsMethodDeclare += replaceAll(classMethodDeclareTemplate, '[class_method_name_replace]', cls.functionList[i].name);
      }
      clsDeclare = replaceAll(clsDeclare, '[class_method_declare]', clsMethodDeclare);
      // 每个成员变量的get set方法的声明
      let { clsVariableDeclare, clsVariableGetSetDeclare } = genClsVariableDeclare(cls);
      clsDeclare = replaceAll(clsDeclare, '[class_variable_declare]', clsVariableDeclare);
      clsDeclare = replaceAll(clsDeclare, '[class_property_get_set_declare]', clsVariableGetSetDeclare);
      // 所有class的napi声明
      classesDeclare += clsDeclare;
    });
    napiHContent += classesDeclare;
  }

  // 实现struct的
  if (rootInfo.parseObj && rootInfo.parseObj.structs) {
    let structDeclare = '';
    rootInfo.parseObj.structs.forEach(struct => {
      let clsDeclare = replaceAll(classNapiHTemplate, '[class_name_replace]', struct.name)
      // 每个成员方法的声明
      let clsMethodDeclare = '';
      for (let i = 0; i < struct.functions.length; ++i) {
        clsMethodDeclare += replaceAll(classMethodDeclareTemplate, '[class_method_name_replace]', struct.functions[i].name);
      }
      clsDeclare = replaceAll(clsDeclare, '[class_method_declare]', clsMethodDeclare);
      // 每个成员变量的get set方法的声明
      let { clsVariableDeclare, clsVariableGetSetDeclare } = genStructVariableDeclare(struct);
      clsDeclare = replaceAll(clsDeclare, '[class_variable_declare]', clsVariableDeclare);
      clsDeclare = replaceAll(clsDeclare, '[class_property_get_set_declare]', clsVariableGetSetDeclare);
      // 所有struct的napi声明
      structDeclare += clsDeclare;
    });
    napiHContent += structDeclare;
  }

  // 实现function的
  if (rootInfo.parseObj && rootInfo.parseObj.funcs) {
    rootInfo.parseObj.funcs.forEach(func => {
      let funcParams = '';
      for (let i = 0; i < func.parameters.length; ++i) {
        funcParams += i > 0 ? ', ' : '';
        funcParams += func.parameters[i].name + ': ' + func.parameters[i].type;
      }
      let rawFileName = path.basename(rootInfo.rawFilePath);
      let hContent = replaceAll(napiFuncHTemplate, '[file_introduce_replace]', rawFileName);
      hContent = replaceAll(hContent, '[input_introduce_replace]', funcParams === '' ? 'void' : funcParams);
      hContent = replaceAll(hContent, '[func_name_replace]', func.name);
      hContent = replaceAll(hContent, '[func_param_replace]', funcParams);
      hContent = replaceAll(hContent, '[func_return_replace]',
        func.returns === '' ? 'void' : func.returns);
      napiHContent += hContent;
    });
  }
  let upperFileName = rootInfo.fileName.toLocaleUpperCase();
  fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
  fileContent = replaceAll(fileContent, '[upper_filename]', upperFileName);
  fileContent = replaceAll(fileContent, '[func_declare_replace]', napiHContent);
  return fileContent;
}

// 生成napi.h文件
export function genNapiHFile(rootInfo: GenInfo, filePath: string,
  fileContent: string) {
  fileContent = doGenNapiHFile(rootInfo, fileContent);
  fs.writeFileSync(filePath, fileContent);
}