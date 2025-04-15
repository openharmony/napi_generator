
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
import { FuncObj, GenInfo, ParamObj } from "../datatype";
import { classMethodGetParamTemplate, classMethodNoParamTemplate, classMethodTemplate, classPropertyGetTemplate,
  classPropertySetTemplate, classTemplate, funcGetParamTemplate, napiFuncCppTemplate, napiFuncRetTemplate,
  paramGenTemplate } from "../../template/func_template";
import { replaceAll } from "../../common/tool";
import * as path from 'path';
import * as fs from 'fs';
import { transCkey2NapiInkey, transCkey2NapiOutkey } from "./gencommonfunc";

export function genClassMethodContent(funcInfo: FuncObj, className: string, classMethodContent: string) {
  let methodContent = replaceAll(classMethodTemplate, '[class_method_name_replace]', funcInfo.name);
  methodContent = replaceAll(methodContent, '[class_name_replace]', className);
  if (funcInfo.parameters.length <= 0) {
    methodContent = replaceAll(methodContent, '[class_method_param_in]', classMethodNoParamTemplate);
  } else {
    // 方法入参替换
    let paramGenResult = '';
    let methodParamIn = replaceAll(classMethodGetParamTemplate, '[param_count_replace]', 'PARAMS' + funcInfo.parameters.length);
    for (let i = 0; i < funcInfo.parameters.length; ++i) {
      // 这里是入参替换 比如输入2个参数 double/int  napi_get_double_value/ napi_get_int32_value
      let getParamInTemplate = transCkey2NapiInkey(funcInfo.parameters[i].type);
      // 如果getParamInTemplate是空，则默认是对象输入，不做任何处理
      if (getParamInTemplate === '') {
        paramGenResult += '// Todo: handle object input.\n';
        continue;
      }
      let getParam = replaceAll(getParamInTemplate, '[param_index_replace]',
        'PARAMS' + i);
      getParam = replaceAll(getParam, '[param_name_replace]',
        funcInfo.parameters[i].name);
      let paramGen = replaceAll(paramGenTemplate, '[param_index_replace]',
        'PARAMS' + i);
      paramGen = replaceAll(paramGen, '[param_name_replace]',
        funcInfo.parameters[i].name);
      paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
      paramGenResult += paramGen;
    }
    // 替换get param in
    methodParamIn = replaceAll(methodParamIn, '[class_method_get_param]', paramGenResult);
    methodContent = replaceAll(methodContent, '[class_method_param_in]', methodParamIn);
  }
  // 方法返回值替换
  let returnGenResult = genCppReturnGen(funcInfo);
  methodContent = replaceAll(methodContent, '[class_method_return]', returnGenResult);
  // 该class的所有成员方法内容拼接起来
  classMethodContent += methodContent;
  return classMethodContent;
}

export function genClassGetSetContent(variableInfo: ParamObj, className: string, classPropertyGetSetContent: string) {
  let name = variableInfo.name.toLocaleLowerCase();
  name = name.substring(0, 1).toLocaleUpperCase() + name.substring(1);
  // class的属性get函数生成
  let getPropertyContent = replaceAll(classPropertyGetTemplate, '[class_property_name_replace]', name);
  getPropertyContent = replaceAll(getPropertyContent, '[class_name_replace]', className);
  let returnGetfuncContent = transCkey2NapiOutkey(variableInfo.type);
  returnGetfuncContent = replaceAll(returnGetfuncContent, '[return_name_replace]', variableInfo.name);
  getPropertyContent = replaceAll(getPropertyContent, '[class_property_get]', returnGetfuncContent);
  classPropertyGetSetContent += getPropertyContent;
  // class的属性set函数生成
  let setPropertyContent = replaceAll(classPropertySetTemplate, '[class_property_name_replace]', name);
  setPropertyContent = replaceAll(setPropertyContent, '[class_name_replace]', className);
  let returnSetfuncContent = transCkey2NapiInkey(variableInfo.type);
  returnSetfuncContent = replaceAll(returnSetfuncContent, '[param_index_replace]', 'PARAMS0');
  returnSetfuncContent = replaceAll(returnSetfuncContent, '[param_name_replace]', variableInfo.name);
  setPropertyContent = replaceAll(setPropertyContent, '[class_property_set]', returnSetfuncContent);
  classPropertyGetSetContent += setPropertyContent;
  return classPropertyGetSetContent;
}

// 方法输入参数的处理,只处理基本类型，像数组/map/set/class/struct等都全部当作
// object，且不做处理
export function getCppParamGen(funcInfo: FuncObj): string {
  // 处理输入的参数，生成napi的参数处理代码
  if (funcInfo.parameters.length === 0) {
    return '// no input params';
  }

  // 下面这段代码是不是可以优化一下，把下面这段代码提取出来，放到一个函数中，class与struct生成成员方法的时候也可以调用
  let paramGenResult = '';
  for (let i = 0; i < funcInfo.parameters.length; ++i) {
    let getParamInTemplate = transCkey2NapiInkey(funcInfo.parameters[i].type);
    // 如果getParamInTemplate是空，则默认是对象输入，不做任何处理
    if (getParamInTemplate === '') {
      paramGenResult += '// Todo: handle object input.\n';
      continue;
    }
    let getParam = replaceAll(getParamInTemplate, '[param_index_replace]',
      'PARAMS' + i);
    getParam = replaceAll(getParam, '[param_name_replace]',
      funcInfo.parameters[i].name);
    let paramGen = replaceAll(paramGenTemplate, '[param_index_replace]',
      'PARAMS' + i);
    paramGen = replaceAll(paramGen, '[param_name_replace]',
      funcInfo.parameters[i].name);
    paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
    paramGenResult += paramGen;
  }
  let genParamReplace = replaceAll(funcGetParamTemplate, '[param_length]',
    'PARAMS' + funcInfo.parameters.length);
  genParamReplace = replaceAll(genParamReplace, '[func_name_replace]',
    funcInfo.name);
  genParamReplace = replaceAll(genParamReplace, '[getAllParam_replace]',
    paramGenResult);
  return genParamReplace
}

// 方法返回值的处理
export function genCppReturnGen(funcInfo: FuncObj): string {
  // 如果函数返回值是空，直接返回NULL
  if (funcInfo.returns === 'void') {
    return '    return NULL;\n';
  }
  let returnName = funcInfo.name;
  let funcReturnReplace = replaceAll(napiFuncRetTemplate, '[return_name]',
    returnName);
  let retGenResult = transCkey2NapiOutkey(funcInfo.returns);
  retGenResult = replaceAll(retGenResult, '[return_name_replace]', returnName);
  funcReturnReplace = replaceAll(funcReturnReplace, '[func_name_replace]',
    funcInfo.name);
  funcReturnReplace = replaceAll(funcReturnReplace, '[return_replace]',
    retGenResult);
  return funcReturnReplace;
}

export function doGenNapiCppFile(rootInfo: GenInfo, fileContent: string) {
    let napiCppContent = '';

    // class的实现
    if (rootInfo.parseObj && rootInfo.parseObj.classes) {
      let classesContent = '';
      rootInfo.parseObj.classes.forEach(classInfo => {
        // 拿到每个class的信息 这里是类的主体
        let className = classInfo.name; // class的名字
        let classInfoContent = replaceAll(classTemplate, '[class_name_replace]', className)
  
        let classPropertyGetSetContent = '';
        // class中属性的生成 把一个class的所有属性都生成对应的get set函数
        classInfo.variableList.forEach(variableInfo => {
          classPropertyGetSetContent = genClassGetSetContent(variableInfo, className, classPropertyGetSetContent);
        });
        classInfoContent = replaceAll(classInfoContent, '[class_property_get_set_replace]',
          classPropertyGetSetContent)
  
        let classMethodContent = '';
        // class中方法的生成 把一个class的所有方法都生成对应的函数
        classInfo.functionList.forEach(funcInfo => {
          // 替换每个方法主体 生成每个方法的函数
          classMethodContent = genClassMethodContent(funcInfo, className, classMethodContent);
        });
        classInfoContent = replaceAll(classInfoContent, '[class_method_content_replace]',
          classMethodContent);
        // 所有class拼接起来 
        classesContent += classInfoContent;
      });
      // 将class的生成内容写入cpp文件
      napiCppContent += classesContent;
    }
  
    // struct的实现
    if (rootInfo.parseObj && rootInfo.parseObj.structs) {
      // structs的生成内容
      let structsContent = '';
      rootInfo.parseObj.structs.forEach(structInfo => {
        let className = structInfo.name;
        let structInfoContent = replaceAll(classTemplate, '[class_name_replace]', className)
  
        let classPropertyGetSetContent = '';
        // struct中属性的生成 把一个struct的所有属性都生成对应的get set函数
        structInfo.members.forEach(variableInfo => {
          classPropertyGetSetContent = genClassGetSetContent(variableInfo, className, classPropertyGetSetContent);
        });
        structInfoContent = replaceAll(structInfoContent, '[class_property_get_set_replace]',
          classPropertyGetSetContent)
  
        let structMethodContent = '';
        // struct中方法的生成 把一个class的所有方法都生成对应的函数
        structInfo.functions.forEach(funcInfo => {
          // 替换每个方法主体 生成每个方法的函数
          structMethodContent = genClassMethodContent(funcInfo, className, structMethodContent);
        });
        structInfoContent = replaceAll(structInfoContent, '[class_method_content_replace]',
          structMethodContent);
        // 所有struct拼接起来 
        structsContent += structInfoContent;
      });
      // 将struct的生成内容写入cpp文件
      napiCppContent += structsContent;
    }
  
    // funcs的napi实现
    if (rootInfo.parseObj && rootInfo.parseObj.funcs) {
      rootInfo.parseObj.funcs.forEach(funcInfo => {
        // 替换每个方法主体
        let hFileName = path.basename(rootInfo.rawFilePath);
        let bodyReplace = replaceAll(napiFuncCppTemplate, '[func_name_replace]',
          funcInfo.name);
        bodyReplace = replaceAll(bodyReplace, '[get_error_msg_tag]',
          funcInfo.name);
        bodyReplace = replaceAll(bodyReplace, '[file_introduce_replace]',
          hFileName);
        // 生成方法注释
        let funcInfoParams = funcInfo.parameters.length > 0 ? '' : 'void';
        let funcInfoParamTemp = '[paramName]: [paramType]; ';
        for (let i = 0; i < funcInfo.parameters.length; i++) {
          let funcInfoParamReplace = replaceAll(funcInfoParamTemp, '[paramName]',
            funcInfo.parameters[i].name);
          funcInfoParamReplace = replaceAll(funcInfoParamReplace, '[paramType]',
            funcInfo.parameters[i].type);
          funcInfoParams += funcInfoParamReplace;
        }
        bodyReplace = replaceAll(bodyReplace, '[input_introduce_replace]',
          funcInfoParams === '' ? 'void' : funcInfoParams);
        bodyReplace = replaceAll(bodyReplace, '[output_introduce_replace]',
          funcInfo.returns);
        // 方法参数的处理，解析参数类型，生成napi的参数处理代码
        let paramGenResult = getCppParamGen(funcInfo);
        bodyReplace = replaceAll(bodyReplace, '[func_getParam_replace]',
          paramGenResult);
        // 方法返回值的处理，解析返回值类型，生成napi的返回值处理代码
        let returnGenResult = genCppReturnGen(funcInfo);
        bodyReplace = replaceAll(bodyReplace, '[func_return_replace]',
          returnGenResult);
        // 组合一个个方法
        napiCppContent += bodyReplace;
      });
    }
  
    fileContent = replaceAll(fileContent, '[fileName]', rootInfo.fileName);
    fileContent = replaceAll(fileContent, '[func_content_replace]', napiCppContent);
    return fileContent;
}
export function genNapiCppFile(rootInfo: GenInfo, filePath: string,
  fileContent: string) {
  fileContent = doGenNapiCppFile(rootInfo, fileContent);
  fs.writeFileSync(filePath, fileContent);
}