/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
const fs = require("fs");
const os = require("os");
const { NapiLog } = require("../tools/NapiLog");
const path = require('path');

function parseFileAll(hFilePath) {
    let execSync = require("child_process").execSync;
    let cmd = "";
    if(fs.existsSync("./hdc/service/service-gen/src/gen/header_parser.py")) {
        // call python file (for debug test)
        cmd = "python ./hdc/service/service-gen/src/gen/header_parser.py " + hFilePath;
    } else {
        // call exe file (for real runtime)
        let sysInfo = os.platform();
        let execPath = path.dirname(process.execPath);
        let exeFile = sysInfo === 'win32' ? path.join(execPath, "header_parser.exe") : 
                                            path.join(execPath, "header_parser");
        cmd = exeFile + " " + hFilePath;
    }

    let parseResult = null;
    let stdout = execSync(cmd);
    parseResult = JSON.parse(stdout.toString()).result;
    return parseResult;
}

function analyzeNameSpace(rootInfo, parseResult) {
    if (parseResult.namespaces.length == 0) {
        return;
    }
    let lastNameSpace = parseResult.namespaces[parseResult.namespaces.length - 1];
    rootInfo.nameSpace = lastNameSpace.split('::');
}

function createParam(parseParamInfo) {
    let param = {};
    param.name = parseParamInfo.name;
    param.type = parseParamInfo.type;
    param.rawType = parseParamInfo.raw_type;
    param.isPointer = (parseParamInfo.pointer == 1);
    param.isReference = (parseParamInfo.reference == 1);
    param.isArray = (parseParamInfo.array == 1);
    param.isConstant = (parseParamInfo.constant == 1);
    return param;
}

function createFuncInfo(parseFuncInfo) {
    let funcInfo = {
        "name": "", // 方法名
        "params": [], // 参数列表
        "retType": "", // 返回值
        "rawStr": "" // 方法原始代码
    }
    funcInfo.name = parseFuncInfo.name;

    let parseParams = parseFuncInfo.parameters;
    for(var i = 0; i < parseParams.length; ++i) {
        let param = createParam(parseParams[i]);
        funcInfo.params.push(param);
    }

    funcInfo.retType = parseFuncInfo.returns === '' ? parseFuncInfo.rtnType : parseFuncInfo.returns;
    funcInfo.rawStr = parseFuncInfo.debug;
    return funcInfo;
}

function createClassFunctions(parseFuncs) {
    let funcList = [];
    for(var i = 0; i < parseFuncs.length; ++i) {
        if (!(parseFuncs[i].constructor || parseFuncs[i].destructor)) { // 构造和析构方法不需要生成remote接口代码
            let funcInfo = createFuncInfo(parseFuncs[i]);
            funcList.push(funcInfo);
        }
    }
    return funcList;
}

function createClassInfo(parseClassInfo) {
    let classInfo = {
        "name": "",
        "namespace": [],
        "properties": [],
        "functions": [],
        "extends":[]
    }
    classInfo.name = parseClassInfo.name;
    classInfo.namespace = parseClassInfo.namespace.split('::');
    classInfo.functions = createClassFunctions(parseClassInfo.methods.public);

    return classInfo;
}

function analyzeClasses(rootInfo, parseClasses) {
    if (parseClasses.length == 0) {
        return;
    }

    for(var className in parseClasses) {
        rootInfo.serviceName = className;
        let classInfo = createClassInfo(parseClasses[className]);
        rootInfo.class.push(classInfo);
        break; // 只取首个class（每个接口文件中应该只包含一个service class）
    }
}

function doAnalyze(hFilePath, cmdParam) {
    let parseResult = parseFileAll(hFilePath);
    let rootInfo = {
        "serviceName": "",
        "nameSpace": [],
        "class": [],
        "includes": [],
        "serviceId": cmdParam.serviceId == null ? "9002" : cmdParam.serviceId
    }

    analyzeNameSpace(rootInfo, parseResult);
    analyzeClasses(rootInfo, parseResult.classes);
    rootInfo.includes = parseResult.includes;
    return rootInfo;
}

module.exports = {
    doAnalyze
}
