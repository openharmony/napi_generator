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
const { ReplaceAll, print } = require("../tools/tool");
const { InterfaceList, getArrayType } = require("../tools/common");
const re = require("../tools/re");

class LenIncrease { }
LenIncrease.LEN_TO = 1;
LenIncrease.Reset = function () {
    LenIncrease.LEN_TO = 1;
}
LenIncrease.getAndIncrease = function () {
    return LenIncrease.LEN_TO++;
}

function getValueProperty(napiVn, name) {
    return 'pxt->GetValueProperty(%s, "%s")'.format(napiVn, name)
}

function jsToC(dest, napiVn, type) {
    if (type == "string") {
        if (napiVn.indexOf("GetValueProperty") >= 0) {
            let lt = LenIncrease.getAndIncrease()
            return `napi_value tnv%d = %s;\n    if(tnv%d!=nullptr){pxt->SwapJs2CUtf8(tnv%d,%s);}`
                .format(lt, napiVn, lt, lt, dest)
        }
        else
            return "pxt->SwapJs2CUtf8(%s, %s);".format(napiVn, dest)
    }
    else if (type.substring(0, 12) == "NUMBER_TYPE_") {
        if (napiVn.indexOf("GetValueProperty") >= 0) {
            let lt = LenIncrease.getAndIncrease()
            return `napi_value tnv%d = %s;\n    if(tnv%d!=nullptr){NUMBER_JS_2_C(tnv%d,%s,%s);}`
                .format(lt, napiVn, lt, lt, type, dest)
        }
        else
            return `NUMBER_JS_2_C(%s,%s,%s);`.format(napiVn, type, dest)
    }
    else if (InterfaceList.getValue(type)) {
        let tt = ""
        let ifl = InterfaceList.getValue(type)
        for (let i in ifl) {
            let name2 = ifl[i].name
            let type2 = ifl[i].type
            tt += jsToC("%s.%s".format(dest, name2), getValueProperty(napiVn, name2), type2)
        }
        return tt
    }
    else if (type.indexOf("Array<") == 0) {
        let arrayType = getArrayType(type)
        let lt = LenIncrease.getAndIncrease()
        if (arrayType == "string") arrayType = "std::string"
        let arrTemplete = `\
        uint32_t len[replace_lt]=pxt->GetArrayLength(%s);
        for(uint32_t i[replace_lt]=0;i[replace_lt]<len[replace_lt];i[replace_lt]++) {
            %s tt[replace_lt];
            [replace_swap]
            %s.push_back(tt[replace_lt]);
        }`.format(napiVn, arrayType, dest)

        arrTemplete = arrTemplete.ReplaceAll("[replace_lt]", lt)
        if (arrayType.substring(0, 12) == "NUMBER_TYPE_") {
            arrTemplete = arrTemplete.ReplaceAll("[replace_swap]",
                "NUMBER_JS_2_C(pxt->GetArrayElement(%s,i%d),%s,tt%d);".format(napiVn, lt, arrayType, lt))
        }
        else if (arrayType == "std::string") {
            arrTemplete = arrTemplete.ReplaceAll("[replace_swap]",
                "pxt->SwapJs2CUtf8(pxt->GetArrayElement(%s,i%d), tt%d);".format(napiVn, lt, lt))
        }
        else if (InterfaceList.getValue(arrayType)) {
            arrTemplete = arrTemplete.ReplaceAll("[replace_swap]",
                jsToC("tt" + lt, "pxt->GetArrayElement(%s,i%d)".format(napiVn, lt), arrayType))
        }
        return arrTemplete;
    }
    else
        print(`\n---- generate jsToC fail %s,%s,%s ----\n`.format(dest, napiVn, type))
}

function ParamCheckout(name, napiVn, type) {
    if (type in this.interface_list) {
        for (let i in this.interface_list[type]) {
            let e = this.interface_list[type][i]
            let name2 = Object.keys(e)[0]
            let type2 = e[name2]
            this.values_["value_analyze"] += "%s%s".format(new_line(this.values_["value_analyze"]),
                this.jsToC("%s.%s".format(name, name2),
                    this.getValueProperty(napiVn, name2),
                    type2))
        }
    }
    else if (type.substring(0, 12) == "NUMBER_TYPE_" || type == "string" || type.substring(0, 6) == "Array<")
        this.values_["value_analyze"] += "%s%s".format(new_line(this.values_["value_analyze"]),
            this.jsToC(name, napiVn, type))
}

// 函数的参数处理
function paramGenerate(p, name, type, param) {
    if (type == "string") {
        param.valueIn += "\n    std::string in%d;".format(p)
        param.valueCheckout += jsToC("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.valueFill += "%svio->in%d".format(param.valueFill.length > 0 ? ", " : "", p)
        param.valueDefine += "%sstd::string &%s".format(param.valueDefine.length > 0 ? ", " : "", name)
    }
    else if (type.substring(0, 12) == "NUMBER_TYPE_") {
        param.valueIn += "\n    %s in%d;".format(type, p)
        param.valueCheckout += jsToC("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.valueFill += "%svio->in%d".format(param.valueFill.length > 0 ? ", " : "", p)
        param.valueDefine += "%s%s &%s".format(param.valueDefine.length > 0 ? ", " : "", type, name)
    }
    else if (InterfaceList.getValue(type)) {
        param.valueIn += "\n    %s in%d;".format(type, p)
        param.valueCheckout += jsToC("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.valueFill += "%svio->in%d".format(param.valueFill.length > 0 ? ", " : "", p)
        param.valueDefine += "%s%s &%s".format(param.valueDefine.length > 0 ? ", " : "", type, name)
    }
    else if (type.substring(0, 6) == "Array<") {
        let arrayType = getArrayType(type)
        if (arrayType == "string") arrayType = "std::string"
        param.valueIn += "\n    std::vector<%s> in%d;".format(arrayType, p)
        param.valueCheckout += jsToC("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.valueFill += "%svio->in%d".format(param.valueFill.length > 0 ? ", " : "", p)
        param.valueDefine += "%sstd::vector<%s> &%s".format(param.valueDefine.length > 0 ? ", " : "", arrayType, name)
    }
    else if (type.substring(0, 9) == "Callback<" || type.substring(0, 14) == "AsyncCallback<") {
        let tt = re.match("(Async)*Callback<([a-zA-Z_0-9]+)>", type)
        param.callback = {
            type: re.getReg(type, tt.regs[2]),
            offset: p
        }
    }
    else
        print("param generate err :", name, "type :", type)
}

module.exports = {
    jsToC,
    paramGenerate
}