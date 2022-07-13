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
const re = require("../tools/re");
const { removeEmptyLine, checkOutBody } = require("../tools/tool");
const { analyzeFunction } = require("./function");
const { analyzeInterface } = require("./interface");
const { analyzeClass } = require("./class");
const { analyzeEnum } = require("./enum");
const { NapiLog } = require("../tools/NapiLog");

/**namespace解析 */
function analyzeNamespace(data) {
    let result = {
        exports: [],
        enum: [],
        const: [],
        type: [],
        function: [],
        interface: [],
        class: [],
        namespace: [],
    }
    while (data != '\n') {
        let oldData = data
        data = removeEmptyLine(data)
        let matchs = re.match(" *\n*", data)
        // 只剩下空格和回车时，解析完成
        if (matchs && matchs.regs[0][1] == data.length) break
        let parseEnumResult = parseEnum(matchs, data, result)
        if (parseEnumResult != null) {
            data = parseEnumResult
        }
        let parseInterResult = parseInterface(matchs, data, result)
        if (parseInterResult != null) {
            data = parseInterResult
        }
        let parseFunctionResult = parseFunction(matchs, data, result)
        if (parseFunctionResult != null) {
            data = parseFunctionResult
        }
        let parseTypeResult = parseType(matchs, data, result)
        if (parseTypeResult != null) {
            data = parseTypeResult
        }
        let parseClassResult = parseClass(matchs, data, result)
        if (parseClassResult != null) {
            data = parseClassResult
        }
        let parseNamespaceResult = parseNamespace(matchs, data, result)
        if (parseNamespaceResult != null) {
            data = parseNamespaceResult
        }
        data = removeReg(matchs, data, result)
        if (oldData == data) {
            NapiLog.logError("解析Namespace失败");
            NapiLog.logError("[", data.substring(0, data.length > 128 ? 128 : data.length), "]");
            break;
        }
    }
    return result
}

function parseNamespace(matchs, data, result) {
    matchs = re.match("(export )*namespace ([a-zA-Z0-9]+) ({)", data)
    if (matchs) {
        let namespaceName = re.getReg(data, matchs.regs[2])
        let namespaceBody = checkOutBody(data, matchs.regs[3][0], null, true)
        result.namespace.push({
            name: namespaceName,
            body: analyzeNamespace(namespaceBody)
        })
        data = data.substring(matchs.regs[3][0] + namespaceBody.length + 2, data.length)
        if (matchs.regs[1][0] != -1) {
            result.exports.push(namespaceName)
        }
    }
    return data
}

function parseClass(matchs, data, result) {
    matchs = re.match("(export )*class ([a-zA-Z]+) (extends [a-zA-Z]+ )*(implements [a-zA-Z]+ )*({)", data)
    if (matchs) {
        let className = re.getReg(data, matchs.regs[2])
        let classBody = checkOutBody(data, matchs.regs[5][0], null, true)
        result.class.push({
            name: className,
            body: analyzeClass(classBody.substring(1, classBody.length - 1)),
            functiontType: classBody.indexOf('static') > 0 ? 'static' : ''
        })
        data = data.substring(matchs.regs[5][0] + classBody.length + 2, data.length)
        if (matchs.regs[1][0] != -1) {
            result.exports.push(className)
        }
    }
    return data
}

function parseEnum(matchs, data, result) {
    matchs = re.match("(export )*enum *([A-Za-z]+) *({)", data)
    if (matchs != null) {
        let enumName = re.getReg(data, matchs.regs[2]);
        let enumBody = checkOutBody(data, matchs.regs[3][0], null, null)
        result.enum.push({
            name: enumName,
            body: analyzeEnum(enumBody.substring(1, enumBody.length - 1))
        })
        data = data.substring(matchs.regs[3][0] + enumBody.length)
        if (matchs.regs[1][0] != -1) {
            result.exports.push(enumName)
        }
    }
    matchs = re.match("(export )*const ([a-zA-Z_]+) *[:=]{1} ([a-zA-Z0-9]+);", data)
    if (matchs) {
        let constName = re.getReg(data, matchs.regs[1])
        result.const.push({
            name: constName,
            body: re.getReg(data, matchs.regs[2])
        })
        data = re.removeReg(data, matchs.regs[0])
        if (matchs.regs[1][0] != -1) {
            result.exports.push(constName)
        }
    }
    return data
}

function parseType(matchs, data, result) {
    matchs = re.match("(export )*type ([a-zA-Z]+) = *([\\(\\):=a-zA-Z<> |\n']+);", data)
    if (matchs) {
        let typeName = re.getReg(data, matchs.regs[2]);
        result.type.push({
            name: typeName,
            body: re.getReg(data, matchs.regs[3])
        })
        data = re.removeReg(data, matchs.regs[0])
        if (matchs.regs[1][0] != -1) {
            result.exports.push(typeName)
        }
    }
    matchs = re.match("(export )*type ([a-zA-Z]+) = ({)", data)
    if (matchs) {
        let typeName = re.getReg(data, matchs.regs[2]);
        let typeBody = checkOutBody(data, matchs.regs[3][0], null, true)
        result.type.push({
            name: typeName,
            body: typeBody
        })
        data = data.substring(matchs.regs[3][0] + typeBody.length + 2, data.length)
        if (matchs.regs[1][0] != -1) {
            result.exports.push(typeName)
        }
    }
    return data
}

function parseFunction(matchs, data, result) {
    matchs = re.match("(export )*function (\\$*[A-Za-z0-9_]+) *(\\()", data)
    if (null == matchs) {
        matchs = re.match("(export )*function (static )*(\\$*[A-Za-z0-9_]+) *(\\()", data)
    }
    if (matchs) {
        let funcName = re.getReg(data,
            matchs.regs.length == 5 ? [matchs.regs[2][0], matchs.regs[3][1]] : matchs.regs[2])
        let funcValue = checkOutBody(data,
            matchs.regs.length == 5 ? matchs.regs[4][0] : matchs.regs[3][0], ["(", ")"], null)
        let funcRet = checkOutBody(data.substring(matchs.regs.length == 5 ?
            matchs.regs[4][0] : matchs.regs[3][0] + funcValue.length), 0, ["", "\n"], null)
        data = data.substring(matchs.regs.length == 5 ?
            matchs.regs[4][0] : matchs.regs[3][0] + funcValue.length + funcRet.length)
        let matchFunc = re.match(" *: *([A-Za-z0-9_<>{}:, .=]+);*", funcRet)
        let matchFuncArray = re.match(" *: *([A-Za-z0-9]+)(\\[]);*", funcRet)
        if (matchFuncArray) {
            funcRet = re.getReg(funcRet, [matchFuncArray.regs[1][0], matchFuncArray.regs[2][1]])
        }
        else if (matchFunc) {
            funcRet = re.getReg(funcRet, matchFunc.regs[1])
        }
        else {
            funcRet = "void"
        }
        let funcDetail = analyzeFunction(result, funcName, funcValue.substring(1, funcValue.length - 1), funcRet)
        if (funcDetail != null)
            result.function.push(funcDetail)
        if (matchs.regs[1][0] != -1) {
            result.exports.push(funcName)
        }
    }
    return data
}

function parseInterface(matchs, data, result) {
    matchs = re.match("(export )*interface ([A-Za-z_0-9]+)(<T>)* (extends [a-zA-Z]+ )*({)", data)
    if (matchs) {
        let interfaceName = re.getReg(data, matchs.regs[2])
        let interfaceBody = checkOutBody(data, matchs.regs[5][0], null, null)
        result.interface.push({
            name: interfaceName,
            body: analyzeInterface(interfaceBody.substring(1, interfaceBody.length - 1))
        })
        data = data.substring(matchs.regs[5][0] + interfaceBody.length, data.length)
        if (matchs.regs[1][0] != -1) {
            result.exports.push(interfaceName)
        }
    }
    return data
}

function removeReg(matchs, data, result) {
    matchs = re.match("export { ([a-zA-Z]+) };", data)
    if (matchs) {
        let exportName = re.getReg(data, matchs.regs[1])
        result.exports.push(exportName)
        data = re.removeReg(data, matchs.regs[0])
    }
    matchs = re.match("export import [a-zA-Z]+ = [a-zA-Z\\.]+;", data)
    if (matchs) {
        data = re.removeReg(data, matchs.regs[0])
    }
    matchs = re.match("readonly [a-zA-Z]+: [a-z\\[\\]]+;*", data)
    if (matchs) {
        data = re.removeReg(data, matchs.regs[0])
    }
    return data
}
module.exports = {
    analyzeNamespace,
    parseNamespace,
    parseEnum,
    parseFunction,
    parseInterface
}