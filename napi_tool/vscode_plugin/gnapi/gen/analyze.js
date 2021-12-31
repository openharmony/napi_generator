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
const { print, RemoveExplains, RemoveEmptyLine, CheckOutBody } = require("./tools/tool");
const { FuncType, NumberIncrease } = require("./tools/common");
const { ReadFile } = require("./tools/FileRW");

const { AnalyzeNamespace } = require("./analyze/namespace");

function AnalyzeFile(fn) {
    NumberIncrease.Reset();
    let data = ReadFile(fn);
    // print("[",fn,"]")
    data = RemoveExplains(data)//去除注释
    data = RemoveEmptyLine(data)//去除空行
    while (true) {//去除import
        let tt = re.search("import ([{}A-Za-z ,]+) from [\"']{1}([@./a-zA-Z]+)[\"']{1};*", data);
        if (tt != null) data = re.remove_reg(data, tt.regs[0]);
        else break;
    }
    let result = {
        export_default: [],
        exports: [],
        // declare_enum: [],
        // declare_const: [],
        declare_type: [],
        declare_function: [],
        declare_namespace: [],
        declare_interface: [],
    }
    while (true) {
        let old_data = data
        data = RemoveEmptyLine(data)

        let tt = re.match(" *\n*", data)
        if (tt && tt.regs[0][1] == data.length) break//只剩下空格和回车时，解析完成

        tt = re.match("export default ([a-zA-Z]+);", data);
        if (tt != null) {
            let export_name = re.get_reg(data, tt.regs[1])
            data = re.remove_reg(data, tt.regs[0]);
            result.export_default.push(export_name)
            continue;
        }

        tt = re.match("(export )*type ([a-zA-Z]+) = ([()a-zA-Z :=>,\"| ]+);", data)
        if (tt) {
            let export_name = re.get_reg(data, tt.regs[2])
            let export_body = re.get_reg(data, tt.regs[3])
            data = re.remove_reg(data, tt.regs[0]);
            result.declare_type.push({
                name: export_name,
                body: export_body//todo
            })
            if (tt.regs[1][0] != -1) {
                result.exports.push(export_name)
            }
            continue;
        }

        tt = re.match("(export )*type ([a-zA-Z]+) = ({)", data)
        if (tt) {
            let export_name = re.get_reg(data, tt.regs[2])
            let export_body = CheckOutBody(data, tt.regs[3][0], null, true)
            data = data.substring(tt.regs[3][1] + export_body.length + 2, data.length)
            result.declare_type.push({
                name: export_name,
                body: export_body//todo
            })
            if (tt.regs[1][0] != -1) {
                result.exports.push(export_name)
            }
            continue;
        }

        tt = re.match("declare namespace ([a-zA-Z0-9]+) ({)", data);
        if (tt != null)//解析declare
        {
            let namespace_name = re.get_reg(data, tt.regs[1])
            // print(1, "declare namespace", namespace_name)
            let namespace_data = CheckOutBody(data, tt.regs[2][0], null, true)
            // XGenerate.gi().Start(re.get_file_in_path(ifname), namespace_name)
            // CheckOutDeclare(data)
            // XGenerate.gi().End(re.get_path_in_path(ifname))//odname
            data = data.substring(tt.regs[2][1] + namespace_data.length + 1, data.length)
            result.declare_namespace.push({
                name: namespace_name,
                // zzzz: "zzzz",//this is namespace
                body: AnalyzeNamespace(namespace_data)
            })
            continue;
        }

        tt = re.match("(export )*(declare )*interface ([A-Za-z_0-9<>= ]+) (extends [a-zA-Z]+ )*({)", data)
        if (tt) {
            let interface_name = re.get_reg(data, tt.regs[3])
            // print(1, "declare interface", interface_name)
            let interface_data = CheckOutBody(data, tt.regs[5][0], null, true)
            data = data.substring(tt.regs[5][1] + interface_data.length + 1, data.length)
            result.declare_interface.push({
                name: interface_name,
                body: {}//todo
            })
            continue
        }

        tt = re.match("declare function ([A-Za-z0-9_]+)\\(([\n a-zA-Z:;=,_0-9?<>{}|]*)\\) *: *([A-Za-z0-9_<>{}:, .]+);*", data)
        if (tt) {
            let function_name = re.get_reg(data, tt.regs[1])
            let function_body = re.get_reg(data, tt.regs[2])
            // print(1, "declare function", function_name)
            // # print("function :",data[tt.regs[1][0]:tt.regs[1][1]])
            data = re.remove_reg(data, tt.regs[0])
            result.declare_function.push({
                name: function_name,
                body: function_body//todo
            })
            continue
        }

        if (old_data == data) {
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
    AnalyzeFile
}