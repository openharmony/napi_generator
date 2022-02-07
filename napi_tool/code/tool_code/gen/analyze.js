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
const re = require("./tools/re");
const { print, removeExplains, removeEmptyLine, checkOutBody } = require("./tools/tool");
const { FuncType, NumberIncrease } = require("./tools/common");
const { readFile } = require("./tools/FileRW");

const { analyzeNamespace } = require("./analyze/namespace");

function analyzeFile(fn) {
    NumberIncrease.reset();
    let data = readFile(fn);
    // print("[",fn,"]")
    data = removeExplains(data)//去除注释
    data = removeEmptyLine(data)//去除空行
    while (true) {//去除import
        let tt = re.search("import ([{}A-Za-z ,]+) from [\"']{1}([@./a-zA-Z]+)[\"']{1};*", data);
        if (tt != null) data = re.removeReg(data, tt.regs[0]);
        else break;
    }
    let result = {
        exportDefault: [],
        exports: [],
        // declare_enum: [],
        // declare_const: [],
        declareType: [],
        declareFunction: [],
        declareNamespace: [],
        declareInterface: [],
    }
    while (true) {
        let oldData = data
        data = removeEmptyLine(data)

        let tt = re.match(" *\n*", data)
        if (tt && tt.regs[0][1] == data.length) break//只剩下空格和回车时，解析完成

        tt = re.match("export default ([a-zA-Z]+);", data);
        if (tt != null) {
            let exportName = re.getReg(data, tt.regs[1])
            data = re.removeReg(data, tt.regs[0]);
            result.exportDefault.push(exportName)
            continue;
        }

        tt = re.match("(export )*type ([a-zA-Z]+) = ([()a-zA-Z :=>,\"| ]+);", data)
        if (tt) {
            let exportName = re.getReg(data, tt.regs[2])
            let exportBody = re.getReg(data, tt.regs[3])
            data = re.removeReg(data, tt.regs[0]);
            result.declareType.push({
                name: exportName,
                body: exportBody
            })
            if (tt.regs[1][0] != -1) {
                result.exports.push(exportName)
            }
            continue;
        }

        tt = re.match("(export )*type ([a-zA-Z]+) = ({)", data)
        if (tt) {
            let exportName = re.getReg(data, tt.regs[2])
            let exportBody = checkOutBody(data, tt.regs[3][0], null, true)
            data = data.substring(tt.regs[3][1] + exportBody.length + 2, data.length)
            result.declareType.push({
                name: exportName,
                body: exportBody
            })
            if (tt.regs[1][0] != -1) {
                result.exports.push(exportName)
            }
            continue;
        }

        tt = re.match("declare namespace ([a-zA-Z0-9]+) ({)", data);
        if (tt != null)//解析declare
        {
            let namespaceName = re.getReg(data, tt.regs[1])
            // print(1, "declare namespace", namespaceName)
            let namespaceData = checkOutBody(data, tt.regs[2][0], null, true)
            // XGenerate.gi().Start(re.getFileInPath(ifname), namespaceName)
            // CheckOutDeclare(data)
            // XGenerate.gi().End(re.getPathInPath(ifname))//odname
            data = data.substring(tt.regs[2][1] + namespaceData.length + 1, data.length)
            result.declareNamespace.push({
                name: namespaceName,
                // zzzz: "zzzz",//this is namespace
                body: analyzeNamespace(namespaceData)
            })
            continue;
        }

        tt = re.match("(export )*(declare )*interface ([A-Za-z_0-9<>= ]+) (extends [a-zA-Z]+ )*({)", data)
        if (tt) {
            let interfaceName = re.getReg(data, tt.regs[3])
            // print(1, "declare interface", interfaceName)
            let interfaceData = checkOutBody(data, tt.regs[5][0], null, true)
            data = data.substring(tt.regs[5][1] + interfaceData.length + 1, data.length)
            result.declareInterface.push({
                name: interfaceName,
                body: {}
            })
            continue
        }

        tt = re.match("declare function ([A-Za-z0-9_]+)\\(([\n a-zA-Z:;=,_0-9?<>{}|]*)\\) *: *([A-Za-z0-9_<>{}:, .]+);*", data)
        if (tt) {
            let functionName = re.getReg(data, tt.regs[1])
            let functionBody = re.getReg(data, tt.regs[2])
            // print(1, "declare function", functionName)
            // # print("function :",data[tt.regs[1][0]:tt.regs[1][1]])
            data = re.removeReg(data, tt.regs[0])
            result.declareFunction.push({
                name: functionName,
                body: functionBody
            })
            continue
        }

        if (oldData == data) {
            print("\nvvv 解析文件失败 vvv")
            print("[", data.substring(0, data.length > 64 ? 64 : data.length), "]")
            print("^^^ 解析文件失败 ^^^\n")
            break;
        }
    }
    // print(JSON.stringify(result, null, 4))
    // print(result)
    return result
}

module.exports = {
    analyzeFile
}