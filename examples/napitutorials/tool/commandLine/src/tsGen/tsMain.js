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
const { writeFile, appendWriteFile, generateRandomInteger, getJsonCfg } = require("../tools/Tool");
const path = require('path')
const re = require("../tools/re");
const fs = require("fs");
const os = require("os");
const util = require('util');
const readline = require('readline');
const { generateDirectFunction } = require('../napiGen/functionDirect')
const { generateFuncTestCase } = require('../napiGen/functionDirectTest')

const MIN_RANDOM = 100
const MAX_RANDOM = 999
let tsFuncName = ''

function parseFileAll(hFilePath) {
    let execSync = require("child_process").execSync
    let cmd = ""
    // node命令直接执行
    if (fs.existsSync("tool/commandLine/src/tsGen/header_parser.py")) {
        cmd = "python tool/commandLine/src/tsGen/header_parser.py " + hFilePath
    } else {
        // call exe file (for real runtime)
        let sysInfo = os.platform()
        let execPath = path.dirname(process.execPath)
        console.info("execPath : " + execPath)
        let exeFile = sysInfo === 'win32' ? path.join(execPath, "header_parser.exe") :
        path.join(execPath, "header_parser")
        cmd = exeFile + " " + hFilePath
    }

    let parseResult = null
    let stdout = execSync(cmd)
    parseResult = JSON.parse(stdout.toString()).result
    return parseResult
}

function createNameSpaceInfo(parseNameSpaceInfo) {
    let nameSpaceInfo = {
        "name": "",
        "classes": [],
        "functions": []
    }
    nameSpaceInfo.name = parseNameSpaceInfo
    return nameSpaceInfo
}

function analyzeNameSpace(rootInfo, parseResult) {
    let parseNameSpaces = parseResult.namespaces
    for (var i = 0; i < parseNameSpaces.length; ++i) {
        let nameSpaceInfo = createNameSpaceInfo(parseNameSpaces[i])
        rootInfo.namespaces.push(nameSpaceInfo)
    }
}

function isStringType(cType) {
    switch (cType) {
        case 'string':
        case 'std::string':
        case 'char':
        case 'wchar_t':
        case 'char16_t':
        case 'char32_t':
        case 'char *':
            return true
        default:
            return false
    }
}

function isBoolType(cType) {
    if (cType === 'bool') {
        return true
    }
    return false
}

function isNumberType(cType) {
    switch (cType) {
        case 'short':
        case 'int':
        case 'uint32_t':
        case 'size_t':
        case 'long':
        case 'long long':
        case 'float':
        case 'double':
        case 'long double':
        case 'int16_t':
        case 'uint16_t':
        case 'int32_t':
        case 'int64_t':
        case 'uint64_t':
        case 'double_t':
        case 'float_t':
            return true
        default:
            return false
    }
}

function basicC2js(cType) {
    let jsType = ""
    if (isStringType(cType)) {
        jsType = 'string'
    } else if (isBoolType(cType)) {
        jsType = 'boolean'
    } else if (isNumberType(cType)) {
        jsType = 'number'
    } else {
        jsType = cType
    }
    return jsType
}

function getJsTypeFromC(cType, typeInfo) {
    let basicCtype = cType
    let matchs = re.match("(std::)?vector<([\x21-\x7e ]+)>", basicCtype);
    if (matchs) {
        basicCtype = re.getReg(basicCtype, matchs.regs[2]).trim()
        typeInfo.array = 1
    }

    let unsignedIdx = basicCtype.indexOf('unsigned')
    if (unsignedIdx >= 0) {
        // cut off the keywords 'unsigned'
        basicCtype = basicCtype.substring(unsignedIdx + 8, basicCtype.length).trim()
    }
    let jsType = basicC2js(basicCtype)
    if (typeInfo.array) {
        jsType = util.format("Array<%s>", jsType)
    }
    // struct cJson * 的情况
    let matchStruct = re.match("struct[A-Z_a-z0-9 *]+", basicCtype);
    if (matchStruct) {
        let index = basicCtype.indexOf('struct')
        // 去掉struct和*
        jsType = jsType.substring(index + 6, basicCtype.length).replace('*', '').trim()
    }
    return jsType
}

function createParam(parseParamInfo) {
    let param = {
        "name": "",
        "type": ""
    }
    param.name = parseParamInfo.name
    let rawType = getJsTypeFromC(parseParamInfo.raw_type, parseParamInfo)
    param.type = rawType

    return param
}

function createFuncInfo(parseFuncInfo, isClassFunc) {
    let funcInfo = {
        "name": "",
        "params": [],
        "namespace": "",
        "retType": "",
        "static": ""
    }
    funcInfo.name = parseFuncInfo.name
    funcInfo.namespace = parseFuncInfo.namespace
    let tokenIndex = funcInfo.namespace.indexOf('::')
    if (tokenIndex >= 0) {
        // delete '::' in namespace, get the pure space name.
        funcInfo.namespace = funcInfo.namespace.substring(0, tokenIndex)
    }

    let parseParams = parseFuncInfo.parameters
    // console.info("parseParams:  " +   JSON.stringify(parseParams))
    for (var i = 0; i < parseParams.length; ++i) {
        let param = createParam(parseParams[i])
        funcInfo.params.push(param)
    }

    funcInfo.isClassFunc = isClassFunc

    if (parseFuncInfo.static && isClassFunc) {
        funcInfo.static = "static "
    }
    let retType = parseFuncInfo.returns === '' ? parseFuncInfo.rtnType : parseFuncInfo.returns
    funcInfo.retType = getJsTypeFromC(retType, parseFuncInfo)
    return funcInfo
}

function putFuncIntoNamespace(funcInfo, namespaces) {
    for (var i = 0; i < namespaces.length; ++i) {
        if (namespaces[i].name === funcInfo.namespace) {
            namespaces[i].functions.push(funcInfo)
            return
        }
    }
    // NapiLog.logError('The namespace [%s] of function %s is not found.'.format(funcInfo.namespace, funcInfo.name));
}

function analyzeRootFunction(rootInfo, parseResult) {
    let parseFunctions = parseResult.functions
    // console.info("parseFunctions:  " +   JSON.stringify(parseFunctions))
    for (var i = 0; i < parseFunctions.length; ++i) {
        // 普通方法生成模板
        let funcInfo = createFuncInfo(parseFunctions[i], false)
        //rootInfo.functions.push(funcInfo)
        if (parseFunctions[i].namespace != '') {
            // function in namespace
            putFuncIntoNamespace(funcInfo, rootInfo.namespaces)
        } else {
            // function without namespace, put on root
            rootInfo.functions.push(funcInfo)
        }
    }
}

function createProperties(parseProperties) {
    let propertyList = []
    for (var i = 0; i < parseProperties.length; ++i) {
        let property = {}
        property.name = parseProperties[i].name
        property.type = getJsTypeFromC(parseProperties[i].type, parseProperties[i])
        propertyList.push(property)
    }
    return propertyList
}

function createClassFunctions(parseFuncs) {
    let funcList = []
    for (var i = 0; i < parseFuncs.length; ++i) {
        let funcInfo = createFuncInfo(parseFuncs[i], true)
        funcList.push(funcInfo)
    }
    return funcList
}

function createClassInfo(parseClassInfo) {
    let classInfo = {
        "name": "",
        "namespace": "",
        "properties": [],
        "functions": [],
        "extends": []
    }
    classInfo.name = parseClassInfo.name
    classInfo.namespace = parseClassInfo.namespace
    classInfo.properties = createProperties(parseClassInfo.properties.public)
    classInfo.functions = createClassFunctions(parseClassInfo.methods.public)

    return classInfo
}

function putClassIntoNamespace(classInfo, namespaces) {
    for (var i = 0; i < namespaces.length; ++i) {
        if (namespaces[i].name === classInfo.namespace) {
            namespaces[i].classes.push(classInfo)
            return
        }
    }
    // NapiLog.logError('The namespace [%s] of class %s is not found.'.format(classInfo.namespace, classInfo.name));
}

function analyzeClasses(rootInfo, parseResult) {
    let parseClasses = parseResult.classes;

    for (var className in parseClasses) {
        let classInfo = createClassInfo(parseClasses[className])
        if (classInfo.namespace != '') {
            // class in namespace
            putClassIntoNamespace(classInfo, rootInfo.namespaces)
        } else {
            // class without namespace, put on root
            rootInfo.classes.push(classInfo)
        }
    }
}

function getTab(tabLv) {
    let tab = ""
    for (var i = 0; i < tabLv; ++i) {
        tab += "    "
    }
    return tab
}

function genFunction(func, funcJson) {
    let funcPrefix = func.isClassFunc ? "" : "function "
    let funcParams = ""
    for (var i = 0; i < func.params.length; ++i) {
        funcParams += i > 0 ? ", " : ""
        funcParams += func.params[i].name + ": " + func.params[i].type
    }
    let indexTemplete = funcJson.directFunction.indexTemplete
    tsFuncName = 'KH' + generateRandomInteger(MIN_RANDOM, MAX_RANDOM) + '_' + func.name
    return util.format(indexTemplete, tsFuncName, funcParams, func.retType)
}

function genClass(classInfo, tabLv, needDeclare = false) {
    let tab = getTab(tabLv)
    let tsClass = tab + 'export ' + "interface " + classInfo.name + " {\n"
    let tab1 = getTab(tabLv + 1)
    for (var i = 0; i < classInfo.properties.length; ++i) {
        tsClass += util.format("%s%s: %s;\n", tab1, classInfo.properties[i].name, classInfo.properties[i].type)
    }
    tsClass += tab + "}\n"
    return tsClass
}

function genNamespace(namespace, tabLv) {
    let tab = getTab(tabLv)
    let tsNamespace = tab + util.format("declare namespace %s {\n", namespace.name)
    for (var i = 0; i < namespace.functions.length; ++i) {
        tsNamespace += genFunction(namespace.functions[i], tabLv + 1)
    }
    for (var i = 0; i < namespace.classes.length; ++i) {
        tsNamespace += genClass(namespace.classes[i], tabLv + 1)
    }
    tsNamespace += tab + "}\n"
    return tsNamespace
}

function genTsContent(rootInfo, funcJson) {
    let tsContent = rootInfo.needCallback ? "import { AsyncCallback, Callback } from './../basic';\n\n" : ""

    for (var i = 0; i < rootInfo.classes.length; ++i) {
        tsContent += genClass(rootInfo.classes[i], 0, true)
    }

    for (var i = 0; i < rootInfo.namespaces.length; ++i) {
        tsContent += genNamespace(rootInfo.namespaces[i], 0)
    }

    for (var i = 0; i < rootInfo.functions.length; ++i) {
        tsContent += genFunction(rootInfo.functions[i], funcJson)
    }

    return tsContent
}

function removeMarco(hFilePath, tempFilePath) {
    // 创建读取文件的流
    const fileStream = fs.createReadStream(hFilePath);
    // 创建逐行读取的接口
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // 存储处理后的文件内容
    let processedContent = '';
    // 逐行读取文件内容并处理
    rl.on('line', (line) => {
        let tt = re.match('[A-Z_]+\([A-Za-z_ *]+\)', line)
        if (tt) {
            let removeContent = re.getReg(line, tt.regs[0])
            line = line.substring(removeContent.length + 1, line.length)
            let index = line.indexOf(') ')
            if (index >= 0) {
                line = line.substring(0, index) + line.substring(index + 1, line.length)
            }
        }
        processedContent += line + '\n';
    });

    // 完成读取操作
    rl.on('close', () => {
        writeFile(tempFilePath, processedContent)
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function doGenerate(hFilePath, testFilePath, tsFilePath, cppFilePath) {
    let random = generateRandomInteger(MIN_RANDOM, MAX_RANDOM)
    let tempFileName = '../temp_' + random + '.h'
    let tempFilePath = path.join(hFilePath, tempFileName)
    removeMarco(hFilePath, tempFilePath)

    while (!fs.existsSync(tempFilePath)) {
        await sleep(20); // 延迟 20 毫秒
    }
    const fileContent = fs.readFileSync(tempFilePath, 'utf8');
    console.info("fileContent: " + fileContent)

    let parseResult = parseFileAll(tempFilePath)
    console.info("parseResult.functions: " + JSON.stringify(parseResult.functions))

    let rootInfo = {
        "namespaces": [],
        "classes": [],
        "functions": [],
        "needCallback": false
    }

    analyzeNameSpace(rootInfo, parseResult)
    analyzeRootFunction(rootInfo, parseResult)
    analyzeClasses(rootInfo, parseResult)

    // 读取Json文件
    let funcJsonPath = path.join(__dirname, '../function.json');
    let funcJson = getJsonCfg(funcJsonPath);

    let tsContent = genTsContent(rootInfo, funcJson)
    console.info("tsContent: " + tsContent)
    appendWriteFile(tsFilePath, '\n' + tsContent)

    // 调用napi转换的方法
    generateDirectFunction(parseResult, tsFuncName, cppFilePath, funcJson.directFunction)

    // 生成测试用例
    generateFuncTestCase(parseResult, tsFuncName, testFilePath, funcJson.directFunction)

    // 删除生成的中间文件
    clearTmpFile(tempFilePath)

    console.info('Generate success')
}

function clearTmpFile(filePath) {
    try {
        fs.unlinkSync(filePath);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    doGenerate
}
