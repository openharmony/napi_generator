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
const { FuncType,NumberIncrease } = require("../tools/common");

/**函数参数解析 */
function AnalyzeParams(values) {
    let result = []
    let func_type = FuncType.DIRECT
    while (values.length > 0) {
        let v = CheckOutBody(values, 0, ["", ","])
        if (v == null)
            v = values
        values = values.substring(v.length, values.length)
        let tt = re.match("([a-zA-Z0-9\\.]+)\\?*:([a-zA-Z<>_0-9\\(\\):='{}]+)", v)
        if (tt != null) {
            let type = re.get_reg(v, tt.regs[2])
            result.push({ "name": re.get_reg(v, tt.regs[1]), "type": type })
            if (type.indexOf("AsyncCallback") >= 0)
                func_type = FuncType.ASYNC
            if (func_type == FuncType.DIRECT && type.indexOf("Callback") >= 0 && type.indexOf("AsyncCallback") < 0)
                func_type = FuncType.SYNC
        }
        else {
            print("\nvvv 参数列表解析失败 vvv")
            print(v, values)
            print("^^^ 参数列表解析失败 ^^^\n")
        }
    }
    return [result, func_type]
}

module.exports = {
    AnalyzeParams
}