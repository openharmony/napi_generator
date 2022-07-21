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
const { FuncType, NumberIncrease, isEnum, EnumValueType, enumIndex } = require("../tools/common");
const { analyzeParams } = require("./params");
const { analyzeReturn } = require("./return");
const { NapiLog } = require("../tools/NapiLog");
const { randomInt } = require("crypto");
const { print } = require("../tools/tool");

function analyzeSubInterface(data) {
    let body = re.replaceAll(data, "\n", "").split(";")//  # replace(" ", "").
    let result = {
        value: [],
        function: []
    }
    for (let i in body) {
        let t = body[i]
        while (t.length > 0 && t[0] == ' ')//去除前面的空格
            t = t.substring(1, t.length)
        while (t.length > 0 && t[-1] == ' ')//去除后面的空格
            t = t.substring(0, t.length - 1)
        if (t == "") break//如果t为空直接返回
        let tt = re.match(" *([a-zA-Z0-9_]+) *: *([a-zA-Z_0-9<>,:{}[\\] ]+)", t)
        if (tt) {//变量

            let valueName = re.getReg(t, tt.regs[1])
            let valueType = re.getReg(t, tt.regs[2])
            let index = valueType.indexOf("number")
            while (index !== -1) {
                valueType = valueType.replace("number", "NUMBER_TYPE_" + NumberIncrease.getAndIncrease())
                index = valueType.indexOf("number")
            }
            result.value.push({
                name: valueName,
                type: valueType
            })
        }
    }
    return result
}

function getFuncParaType(v, interfaceName, data) {
    let arrayType = re.match("(Async)*Callback<(Array<([a-zA-Z_0-9]+)>)>", v["type"])
    let parameter = v["type"]
    if (arrayType) {
        parameter = re.getReg(v["type"], arrayType.regs[2])
    }
    if (isEnum(parameter, data)) {
        let index = enumIndex(parameter, data)
        if (data.enum[index].body.enumValueType == EnumValueType.ENUM_VALUE_TYPE_NUMBER) {
            v["type"] = v["type"].replace(parameter, "NUMBER_TYPE_" + NumberIncrease.getAndIncrease())
        } else if (data.enum[index].body.enumValueType == EnumValueType.ENUM_VALUE_TYPE_STRING) {
            v["type"] = v["type"].replace(parameter, "string")
        } else {
            NapiLog.logError("analyzeFunction getFuncParaType is not support this type %s"
                .format(data.enum[index].body.enumValueType));
            return null
        }
    }

    let interfaceType = re.match("{([A-Za-z0-9_]+:[A-Za-z0-9_,]+)([A-Za-z0-9_]+:[A-Za-z0-9_]+)}$", v["type"])
    if (interfaceType) {
        v["type"] = interfaceName
    }

    if (parameter.indexOf("number") >= 0) {
        v["type"] = v["type"].replace("number", "NUMBER_TYPE_" + NumberIncrease.getAndIncrease())
    }
    return v
}

/**函数解析 */
function analyzeFunction(data, name, values, ret) {
    values = re.replaceAll(re.replaceAll(values, " ", ""), "\n", "")
    let matchs = re.match("([a-zA-Z_0-9]*):{([A-Za-z0-9_]+:[A-Za-z0-9_,]+)([A-Za-z0-9_]+:[A-Za-z0-9_]+)}$", values)
    let interfaceName = ''
    if (matchs) {
        let interfacePara = re.getReg(values, matchs.regs[1])
        let number = randomInt(10);
        interfaceName = 'AUTO_INTERFACE_%s_%s'.format(interfacePara, number)
        let interfaceBody = values.substring(interfacePara.length+2, values.length-1)
        interfaceBody = re.replaceAll(interfaceBody, ",", ";")
        data.interface.push({
            name: interfaceName,
            body: analyzeSubInterface(interfaceBody)
        })
    }  

    let tmp = analyzeParams(values)
    values = tmp[0]
    let funcType = tmp[1]
    tmp = analyzeReturn(ret)
    ret = tmp[0]
    if (tmp[1])
        funcType = FuncType.PROMISE
    if (funcType == FuncType.ASYNC || funcType == FuncType.PROMISE) {
        // 查看是否有同名的函数，async_callback和promise，
        // 只需要保留一个，这里简单处理，忽略所有promise
        if (funcType == FuncType.PROMISE) return null;
    }
    for (let j in values) {
        let v = values[j]
        v = getFuncParaType(v, interfaceName, data)
        if (v == null) {
            NapiLog.logError("analyzeFunction is not support this type %s".format(v));
        }
    }
    if (ret.indexOf("number") >= 0) {
        ret = ret.replace("number", "NUMBER_TYPE_" + NumberIncrease.getAndIncrease())
    }
    let result = {
        name: name,
        type: funcType,
        value: values,
        ret: ret,
    }
    return result
}

module.exports = {
    analyzeFunction,
    analyzeSubInterface,
    getFuncParaType
}