/*
* Copyright (c) 2021 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
const { print, removeExplains, removeEmptyLine, checkOutBody } = require("../tools/tool");
const { FuncType, NumberIncrease } = require("../tools/common");

const { analyzeFunction } = require("./function");
const { analyzeInterface } = require("./interface");

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
        let tt = re.match(" *\n*", data)
        if (tt && tt.regs[0][1] == data.length) break//只剩下空格和回车时，解析完成

        tt = re.match("(export )*enum *([A-Za-z]+) *({)", data)
        if (tt != null) {
            let enumName = re.getReg(data, tt.regs[2]);
            let enumBody = checkOutBody(data, tt.regs[3][0], null, null)
            result.enum.push({
                name: enumName,
                body: enumBody.substring(1, -1)
            })
            data = data.substring(tt.regs[3][0] + enumBody.length)
            if (tt.regs[1][0] != -1) {
                result.exports.push(enumName)
            }
            continue
        }

        tt = re.match("(export )*const ([a-zA-Z_]+) *[:=]{1} ([a-zA-Z0-9]+);", data)
        if (tt) {
            let constName = re.getReg(data, tt.regs[1])
            result.const.push({
                name: constName,
                body: re.getReg(data, tt.regs[2])
            })
            data = re.removeReg(data, tt.regs[0])
            if (tt.regs[1][0] != -1) {
                result.exports.push(constName)
            }
            continue
        }

        tt = re.match("(export )*interface ([A-Za-z_0-9]+)(<T>)* (extends [a-zA-Z]+ )*({)", data)
        if (tt) {
            let interfaceName = re.getReg(data, tt.regs[2])
            let interfaceBody = checkOutBody(data, tt.regs[5][0], null, null)
            // print(interfaceBody)
            result.interface.push({
                name: interfaceName,
                body: analyzeInterface(interfaceBody.substring(1, interfaceBody.length - 1))
            })
            // XGenerate.gi().AddInterface(re.getReg(data,tt.regs[2]),
            // data1.substring(1,data1.length-1))
            data = data.substring(tt.regs[5][0] + interfaceBody.length, data.length)
            if (tt.regs[1][0] != -1) {
                result.exports.push(interfaceName)
            }
            continue
        }

        // tt = re.match("(export )*function
        // ([A-Za-z0-9_]+)\\(([\n a-zA-Z:;=,_0-9?<>{}|\\.\\[\\]]*)\\) *: *([A-Za-z0-9_<>{}:, .=]+);*", data)
        tt = re.match("(export )*function ([A-Za-z0-9_]+) *(\\()", data)
        if (tt) {
            let funcName = re.getReg(data, tt.regs[2])
            // print(funcName)
            let funcValue = checkOutBody(data, tt.regs[3][0], ["(", ")"], null)
            let funcRet = checkOutBody(data.substring(tt.regs[3][0] + funcValue.length), 0, ["", "\n"], null)

            data = data.substring(tt.regs[3][0] + funcValue.length + funcRet.length)
            // print(funcValue)
            // print(funcRet)
            let tt2 = re.match(" *: *([A-Za-z0-9_<>{}:, .=]+);*", funcRet)
            if (tt2) {
                funcRet = re.getReg(funcRet, tt2.regs[1])
            }
            else {//maybe error
                // print(funcRet)
                funcRet = "void"
            }

            let funcDetail = analyzeFunction(funcName, funcValue.substring(1, funcValue.length - 1), funcRet)
            if (funcDetail != null)
                result.function.push(funcDetail)

            if (tt.regs[1][0] != -1) {
                result.exports.push(funcName)
            }
            continue
        }

        tt = re.match("(export )*type ([a-zA-Z]+) = *([\\(\\):=a-zA-Z<> |\n']+);", data)
        if (tt) {
            let typeName = re.getReg(data, tt.regs[2]);
            result.type.push({
                name: typeName,
                body: re.getReg(data, tt.regs[3])
            })
            data = re.removeReg(data, tt.regs[0])
            if (tt.regs[1][0] != -1) {
                result.exports.push(typeName)
            }
            continue
        }

        tt = re.match("(export )*type ([a-zA-Z]+) = ({)", data)
        if (tt) {
            let typeName = re.getReg(data, tt.regs[2]);
            let typeBody = checkOutBody(data, tt.regs[3][0], null, true)
            result.type.push({
                name: typeName,
                body: typeBody
            })
            data = data.substring(tt.regs[3][0] + typeBody.length + 2, data.length)
            if (tt.regs[1][0] != -1) {
                result.exports.push(typeName)
            }
            continue
        }

        tt = re.match("(export )*class ([a-zA-Z]+) (extends [a-zA-Z]+ )*(implements [a-zA-Z]+ )*({)", data)
        if (tt) {
            let className = re.getReg(data, tt.regs[2])
            let classBody = checkOutBody(data, tt.regs[5][0], null, true)
            result.class.push({
                name: className,
                body: classBody
            })
            // print(className)
            // print(classBody)
            data = data.substring(tt.regs[5][0] + classBody.length + 2, data.length)
            if (tt.regs[1][0] != -1) {
                result.exports.push(className)
            }
            continue
        }

        tt = re.match("(export )*namespace ([a-zA-Z0-9]+) ({)", data)
        if (tt) {
            let namespaceName = re.getReg(data, tt.regs[2])
            let namespaceBody = checkOutBody(data, tt.regs[3][0], null, true)
            result.namespace.push({
                name: namespaceName,
                body: analyzeNamespace(namespaceBody)
            })
            data = data.substring(tt.regs[3][0] + namespaceBody.length + 2, data.length)
            if (tt.regs[1][0] != -1) {
                result.exports.push(namespaceName)
            }
            continue
        }

        tt = re.match("export { ([a-zA-Z]+) };", data)
        if (tt) {
            let exportName = re.getReg(data, tt.regs[1])
            result.exports.push(exportName)
            data = re.removeReg(data, tt.regs[0])
            continue
        }

        tt = re.match("export import [a-zA-Z]+ = [a-zA-Z\\.]+;", data)
        if (tt) {
            data = re.removeReg(data, tt.regs[0])
            continue
        }

        tt = re.match("readonly [a-zA-Z]+: [a-z\\[\\]]+;*", data)
        if (tt) {
            data = re.removeReg(data, tt.regs[0])
            continue
        }

        if (oldData == data) {
            print("\nvvv 解析Namespace失败 vvv")
            print("[", data.substring(0, data.length > 128 ? 128 : data.length), "]")
            print("^^^ 解析Namespace失败 ^^^\n")
            break;
        }
    }
    // print(result)
    // print(JSON.stringify(result, null, 4))
    return result
}

module.exports = {
    analyzeNamespace
}