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

const { NapiLog } = require("../tools/NapiLog");
const util = require('util');
const path = require('path');
const fs = require("fs");
const { writeFile } = require("../tools/tool");
const re = require("../tools/re");
const LENGTH = 10;
const TWO_DECIMAL = 2;

function analyzeRetIsObject(retType, objectInfo) {
    // 去除 * 和 空格
    retType = retType.replace('*', '').replace('struct', '').trim()
    let objKeys = Object.keys(objectInfo)
    for (let i = 0; i < objKeys.length; i++) {
        if (retType == objKeys[i]) {
            return true;
        }
    }
    return false;
}

function generateDirectFunction(params, tsFuncName, cppFilePath, directFuncJson) {
    let funcInfo = {
        "name": "",
        "params": [],
        "retType": "",
    }
    // 获取.h文件中的头文件
    let includes = params.includes
    let includes_replace = ''
    for (let i in includes) {
        includes_replace += util.format('#include %s\n', includes[i])
    }

    // 获取注册的方法名字 (只读取了一个方法 当前只支持一个方法的转换)
    funcInfo.name = params.functions[0].name
    let serialNum = tsFuncName.substring(0, 6)
    let funcName_replace = serialNum + funcInfo.name.substring(0, 1).toUpperCase() + funcInfo.name.substring(1, funcInfo.name.length)

    // 方法的注册
    let initTemplete = directFuncJson.cppFuncDetails.funcInitTemplete
    let init_replace = util.format(initTemplete, tsFuncName, funcName_replace)

    // 分析方法
    funcInfo.retType = params.functions[0].rtnType
    let parseParams = params.functions[0].parameters
    for (let i = 0; i < parseParams.length; ++i) {
        let param = createParam(parseParams[i])
        funcInfo.params.push(param)
    }

    // 生成
    let paramGenTemplete = directFuncJson.cppFuncDetails.paramGenTemplete
    let funcParamType = directFuncJson.cppFuncDetails.funcParamType
    let paramGenResult = ''
    // napi 获取参数
    for (let i = 0; i < funcInfo.params.length; i++) {
        console.info("funcInfo.params[i].type.substring(0,10): " + funcInfo.params[i].type.substring(0, 10))
        let paramType = funcInfo.params[i].type === 'size_t' ? 'int64_t' : funcInfo.params[i].type
        let paramName = funcInfo.params[i].name
        let paramGen = util.format(paramGenTemplete, i, i, i)
        if (funcInfo.params[i].type === 'double') {
            let getParam = util.format(funcParamType.double, i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        } else if (funcInfo.params[i].type === 'uint32_t') {
            let getParam = util.format(funcParamType.uint32_t, i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        } else if (funcInfo.params[i].type === 'int32_t') {
            let getParam = util.format(funcParamType.int32_t, i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        } else if (funcInfo.params[i].type === 'int64_t' || funcInfo.params[i].type === 'size_t') {
            let getParam = util.format(funcParamType.int64_t, i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        } else if (funcInfo.params[i].type === 'bool') {
            let getParam = util.format(funcParamType.bool, i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        } else if (funcInfo.params[i].type === 'std::string' || funcInfo.params[i].type.substring(0, 10) === 'const char') {
            let getParam = util.format(funcParamType.string, i, i, i, paramName, i, i, paramName, i, i, i, paramName, i, paramName, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        }
    }

    // 返回值处理  对于对象要使用循环处理
    let retGenResult = ''
    let retObjInfo = {
        "objName": '',
        "flag": false
    }
    retGenResult = returnTypeC2Js(directFuncJson, funcInfo, params, retGenResult, retObjInfo);

    let bodyTemplete = directFuncJson.cppFuncDetails.funcBodyTemplete
    let body_replace = replaceAll(bodyTemplete, '[funcName]', funcName_replace)
    let funcGetParamTemplete = directFuncJson.cppFuncDetails.funcGetParamTemplete
    let genParam_replace = replaceAll(funcGetParamTemplete, '[param_length]', funcInfo.params.length)
    genParam_replace = replaceAll(genParam_replace, '[getParam_replace]', paramGenResult)
    genParam_replace = replaceAll(genParam_replace, '[get_error_msg_tag]', funcName_replace)
    if (funcInfo.params.length !== 0) {
        body_replace = replaceAll(body_replace, '[func_getParam_replace]', genParam_replace)
    } else {
        body_replace = replaceAll(body_replace, '[func_getParam_replace]', '')
    }
    if (funcInfo.retType !== 'void') {
        let returnType = funcInfo.retType === 'std::string' ? 'const char *' : funcInfo.retType
        returnType = returnType === 'size_t' ? 'int64_t' : returnType
        let funcReturnTemplete = directFuncJson.cppFuncDetails.funcReturnTemplete
        let = func_return_replace = replaceAll(funcReturnTemplete, '[return_name]', retObjInfo.objName)
        func_return_replace = replaceAll(func_return_replace, '[return_replace]', retGenResult)
        body_replace = replaceAll(body_replace, '[func_return_replace]', func_return_replace)
    } else {
        body_replace = replaceAll(body_replace, '[func_return_replace]', '')
    }
    body_replace = replaceAll(body_replace, '[return_replace]', retGenResult)

    // 将内容写入cpp文件
    // 先判断cppFilePath是否存在,若存在则追加写入内容
    if (fs.existsSync(cppFilePath)) {
        // 读取cpp文件内容
        const cppFileContent = fs.readFileSync(cppFilePath, 'utf8');
        let includePosition = cppFileContent.indexOf('#include');
        let includes = includes_replace.split('\n')
        let newIncludes = ""
        for (let i = 0; i < includes.length; i++) {
            if (cppFileContent.indexOf(includes[i]) < 0) {
                newIncludes += includes[i] + '\n'
            }
        }
        let newCppFileContent = cppFileContent
        if (newIncludes !== "") {
            // 追加写入#include
            newCppFileContent = newCppFileContent.slice(0, includePosition) + newIncludes + newCppFileContent.slice(includePosition);
        }
        // 追加写入方法体
        let funcPosition = newCppFileContent.indexOf('EXTERN_C_START')
        newCppFileContent = newCppFileContent.slice(0, funcPosition) + body_replace + newCppFileContent.slice(funcPosition);

        // 追加写入 方法的初始化
        let initPosition = newCppFileContent.indexOf('napi_property_descriptor desc[] = {') + 'napi_property_descriptor desc[] = {'.length;
        newCppFileContent = newCppFileContent.slice(0, initPosition) + '\n    ' + init_replace + newCppFileContent.slice(initPosition);
        writeFile(cppFilePath, newCppFileContent)
    } else {
        let cppTemplete = directFuncJson.cppFuncTemplete
        let cppContent = replaceAll(cppTemplete, '[include_replace]', includes_replace)
        cppContent = replaceAll(cppContent, '[body_replace]', body_replace)
        cppContent = replaceAll(cppContent, '[init_replace]', init_replace)
        // 第一次生成
        writeFile(cppFilePath, cppContent)
    }
}

function returnTypeC2Js(directFuncJson, funcInfo, params, retGenResult, retObjInfo) {
    let funcReturnType = directFuncJson.cppFuncDetails.funcReturnType;
    let setRetProperty = directFuncJson.cppFuncDetails.funcReturnObjectToSet
    let returnName = funcInfo.name;
    if (!retObjInfo.flag) {
        retObjInfo.objName = returnName
    }
    if (funcInfo.retType === 'uint32_t') {
        retGenResult += util.format(funcReturnType.uint32_t, returnName, returnName);
        if (retObjInfo.flag) {
            retGenResult += util.format(setRetProperty, retObjInfo.objName, returnName, returnName)
        }
    } else if (funcInfo.retType === 'double') {
        retGenResult += util.format(funcReturnType.double, returnName, returnName);
        if (retObjInfo.flag) {
            retGenResult += util.format(setRetProperty, retObjInfo.objName, returnName, returnName)
        }
    } else if (funcInfo.retType === 'int32_t' || funcInfo.retType === 'int') {
        retGenResult += util.format(funcReturnType.int32_t, returnName, returnName);
        if (retObjInfo.flag) {
            retGenResult += util.format(setRetProperty, retObjInfo.objName, returnName, returnName)
        }
    } else if (funcInfo.retType === 'int64_t' || funcInfo.retType === 'size_t') {
        retGenResult += util.format(funcReturnType.int64_t, returnName, returnName);
        if (retObjInfo.flag) {
            retGenResult += util.format(setRetProperty, retObjInfo.objName, returnName, returnName)
        }
    } else if (funcInfo.retType === 'bool') {
        retGenResult += util.format(funcReturnType.bool, returnName, returnName);
        if (retObjInfo.flag) {
            retGenResult += util.format(setRetProperty, retObjInfo.objName, returnName, returnName)
        }
    } else if (funcInfo.retType === 'std::string' || funcInfo.retType.substring(0, 10) === 'const char'
        || funcInfo.retType === 'char *') {
        retGenResult += util.format(funcReturnType.string, returnName, returnName, returnName);
        if (retObjInfo.flag) {
            retGenResult += util.format(setRetProperty, retObjInfo.objName, returnName, returnName)
        }
    } else if (analyzeRetIsObject(funcInfo.retType, params.classes)) { // 返回值是对象
        if (!retObjInfo.flag) {
            retGenResult += util.format(funcReturnType.object, returnName, returnName);
            retObjInfo.flag = true
            let retType = funcInfo.retType.replace('*', '').trim();
            let objectName = '';
            let objectProperty = [];

            let myObject = params.classes[retType]
            objectName = myObject.bare_name;
            let myObjectProperty = myObject.properties.public;
            for (let j = 0; j < myObjectProperty.length; j++) {
                let propertyObj = {
                    "name": '',
                    "retType": ''
                }
                propertyObj.name = myObjectProperty[j].name;
                propertyObj.retType = myObjectProperty[j].type;

                objectProperty.push(propertyObj);
            }
            // 遍历属性
            for (let i = 0; i < objectProperty.length; i++) {
                let testRes = returnTypeC2Js(directFuncJson, objectProperty[i], params, retGenResult, retObjInfo)
                retGenResult = testRes;
            }
        } else {
            if (retObjInfo.objName !== '') {
                retGenResult += util.format(funcReturnType.object, returnName, returnName);
                retGenResult += util.format(setRetProperty, retObjInfo.objName, returnName, returnName)
            }
        }
    }
    return retGenResult;
}

function replaceAll(s, sfrom, sto) {
    while (s.indexOf(sfrom) >= 0) {
        s = s.replace(sfrom, sto)
    }
    return s;
}

function createParam(parseParamInfo) {
    let param = {
        "name": "",
        "type": ""
    }
    param.name = parseParamInfo.name
    param.type = parseParamInfo.type
    return param
}

module.exports = {
    generateDirectFunction
}