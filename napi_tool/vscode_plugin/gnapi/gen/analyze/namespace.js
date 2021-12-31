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
const { print, RemoveExplains, RemoveEmptyLine, CheckOutBody } = require("../tools/tool");
const { FuncType, NumberIncrease } = require("../tools/common");

const { AnalyzeFunction } = require("./function");
const { AnalyzeInterface } = require("./interface");

/**namespace解析 */
function AnalyzeNamespace(data) {
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
        let old_data = data
        data = RemoveEmptyLine(data)
        let tt = re.match(" *\n*", data)
        if (tt && tt.regs[0][1] == data.length) break//只剩下空格和回车时，解析完成

        tt = re.match("(export )*enum *([A-Za-z]+) *({)", data)
        if (tt != null) {
            let enum_name = re.get_reg(data, tt.regs[2]);
            let enum_body = CheckOutBody(data, tt.regs[3][0], null, null)
            result.enum.push({
                name: enum_name,
                body: enum_body.substring(1, -1)
            })
            data = data.substring(tt.regs[3][0] + enum_body.length)
            //todo
            if (tt.regs[1][0] != -1) {
                result.exports.push(enum_name)
            }
            continue
        }

        tt = re.match("(export )*const ([a-zA-Z_]+) *[:=]{1} ([a-zA-Z0-9]+);", data)
        if (tt) {
            let const_name = re.get_reg(data, tt.regs[1])
            result.const.push({
                name: const_name,
                body: re.get_reg(data, tt.regs[2])
            })
            data = re.remove_reg(data, tt.regs[0])
            //todo
            if (tt.regs[1][0] != -1) {
                result.exports.push(const_name)
            }
            continue
        }

        tt = re.match("(export )*interface ([A-Za-z_0-9]+)(<T>)* (extends [a-zA-Z]+ )*({)", data)
        if (tt) {
            let interface_name = re.get_reg(data, tt.regs[2])
            let interface_body = CheckOutBody(data, tt.regs[5][0], null, null)
            // print(interface_body)
            result.interface.push({
                name: interface_name,
                body: AnalyzeInterface(interface_body.substring(1, interface_body.length - 1))
            })
            // XGenerate.gi().AddInterface(re.get_reg(data,tt.regs[2]), data1.substring(1,data1.length-1))
            data = data.substring(tt.regs[5][0] + interface_body.length, data.length)
            //todo
            if (tt.regs[1][0] != -1) {
                result.exports.push(interface_name)
            }
            continue
        }

        // tt = re.match("(export )*function ([A-Za-z0-9_]+)\\(([\n a-zA-Z:;=,_0-9?<>{}|\\.\\[\\]]*)\\) *: *([A-Za-z0-9_<>{}:, .=]+);*", data)
        tt = re.match("(export )*function ([A-Za-z0-9_]+) *(\\()", data)
        if (tt) {
            let func_name = re.get_reg(data, tt.regs[2])
            // print(func_name)
            let func_value = CheckOutBody(data, tt.regs[3][0], ["(", ")"], null)
            let func_ret = CheckOutBody(data.substring(tt.regs[3][0] + func_value.length), 0, ["", "\n"], null)

            data = data.substring(tt.regs[3][0] + func_value.length + func_ret.length)
            // print(func_value)
            // print(func_ret)
            let tt2 = re.match(" *: *([A-Za-z0-9_<>{}:, .=]+);*", func_ret)
            if (tt2) {
                func_ret = re.get_reg(func_ret, tt2.regs[1])
            }
            else {//maybe error
                // print(func_ret)
                func_ret = "void"
            }

            let func_detail = AnalyzeFunction(func_name, func_value.substring(1, func_value.length - 1), func_ret)
            if (func_detail != null)
                result.function.push(func_detail)

            //todo
            if (tt.regs[1][0] != -1) {
                result.exports.push(func_name)
            }
            continue
        }

        tt = re.match("(export )*type ([a-zA-Z]+) = *([\\(\\):=a-zA-Z<> |\n']+);", data)
        if (tt) {
            let type_name = re.get_reg(data, tt.regs[2]);
            result.type.push({
                name: type_name,
                body: re.get_reg(data, tt.regs[3])
            })
            data = re.remove_reg(data, tt.regs[0])
            //todo
            if (tt.regs[1][0] != -1) {
                result.exports.push(type_name)
            }
            continue
        }

        tt = re.match("(export )*type ([a-zA-Z]+) = ({)", data)
        if (tt) {
            let type_name = re.get_reg(data, tt.regs[2]);
            let type_body = CheckOutBody(data, tt.regs[3][0], null, true)
            result.type.push({
                name: type_name,
                body: type_body
            })
            data = data.substring(tt.regs[3][0] + type_body.length + 2, data.length)
            //todo
            if (tt.regs[1][0] != -1) {
                result.exports.push(type_name)
            }
            continue
        }

        tt = re.match("(export )*class ([a-zA-Z]+) (extends [a-zA-Z]+ )*(implements [a-zA-Z]+ )*({)", data)
        if (tt) {
            let class_name = re.get_reg(data, tt.regs[2])
            let class_body = CheckOutBody(data, tt.regs[5][0], null, true)
            result.class.push({
                name: class_name,
                body: class_body
            })
            // print(class_name)
            // print(class_body)
            data = data.substring(tt.regs[5][0] + class_body.length + 2, data.length)
            //todo
            if (tt.regs[1][0] != -1) {
                result.exports.push(class_name)
            }
            continue
        }

        tt = re.match("(export )*namespace ([a-zA-Z0-9]+) ({)", data)
        if (tt) {
            let namespace_name = re.get_reg(data, tt.regs[2])
            let namespace_body = CheckOutBody(data, tt.regs[3][0], null, true)
            result.namespace.push({
                name: namespace_name,
                body: AnalyzeNamespace(namespace_body)
            })
            data = data.substring(tt.regs[3][0] + namespace_body.length + 2, data.length)
            //todo
            if (tt.regs[1][0] != -1) {
                result.exports.push(namespace_name)
            }
            continue
        }

        tt = re.match("export { ([a-zA-Z]+) };", data)
        if (tt) {
            let export_name = re.get_reg(data, tt.regs[1])
            result.exports.push(export_name)
            data = re.remove_reg(data, tt.regs[0])
            //todo
            continue
        }

        tt = re.match("export import [a-zA-Z]+ = [a-zA-Z\\.]+;", data)
        if (tt) {//todo
            data = re.remove_reg(data, tt.regs[0])
            continue
        }

        tt = re.match("readonly [a-zA-Z]+: [a-z\\[\\]]+;*", data)
        if (tt) {//todo
            data = re.remove_reg(data, tt.regs[0])
            continue
        }

        if (old_data == data) {
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
    AnalyzeNamespace
}