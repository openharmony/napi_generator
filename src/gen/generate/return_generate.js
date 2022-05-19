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
const { InterfaceList, getArrayType, NumberIncrease, enumIndex, isEnum, EnumValueType } = require("../tools/common");
const { NapiLog } = require("../tools/NapiLog");

function cToJs(value, type, dest, deep = 1) {
    if (type == "void")
        return "%s = pxt->UndefinedValue();".format(dest);
    else if (type == "boolean")
        return "%s = pxt->SwapC2JsBool(%s);".format(dest, value);
    else if (type == "string")
        return `%s = pxt->SwapC2JsUtf8(%s.c_str());`.format(dest, value)
    else if (type.substring(0, 12) == "NUMBER_TYPE_")
        return `%s = NUMBER_C_2_JS(pxt, %s);`.format(dest, value)
    else if (InterfaceList.getValue(type)) {
        let lt = deep
        let result = ""
        let ifl = InterfaceList.getValue(type)
        for (let i in ifl) {
            let name2 = ifl[i].name
            let type2 = ifl[i].type
            let interfaceType = cToJs("%s.%s".format(value, name2), type2, "tnv%d".format(lt), deep + 1)
            result += "{\nnapi_value tnv%d = nullptr;\n".format(lt) +
                interfaceType + `\npxt->SetValueProperty(%s,"%s",tnv%d);\n}`
                    .format(dest, name2, lt)
        }
        return result
    }
    else if (type.substring(0, 6) == "Array<") {
        let arrayType = getArrayType(type)
        let lt = deep
        let tnv = dest
        let tnvdef = `uint32_t len%d=%s.size();
    for(uint32_t i=0;i<len%d;i++) {
        napi_value tnv%d = nullptr;
        [calc_out]
        pxt->SetArrayElement(%s, i, tnv%d);
    }`.format(lt, value, lt, lt, tnv, lt)
        let ret = ""
        if (arrayType.substring(0, 12) == "NUMBER_TYPE_") {
            ret = tnvdef.replaceAll("[calc_out]", `tnv%d = NUMBER_C_2_JS(pxt,%s[i]);`.format(lt, value))
        }
        else if (arrayType == "string") {
            ret = tnvdef.replaceAll("[calc_out]", `tnv%d = pxt->SwapC2JsUtf8(%s[i].c_str());`.format(lt, value))
        }
        else if (InterfaceList.getValue(arrayType)) {
            ret = tnvdef.replaceAll("[calc_out]", cToJs(value + "[i]", arrayType, "tnv" + lt, deep + 1))
        }
        return ret
    }
    else
        NapiLog.logError(`This type do not generate cToJs %s,%s,%s`.format(value, type, dest));
}

function returnGenerate(type, param, data) {
    param.valueFill += "%svio->out".format(param.valueFill.length > 0 ? ", " : "")
    if (!isEnum(type, data)) {
        param.valuePackage = "napi_value result = nullptr;\n    " + cToJs("vio->out", type, "result")
    }
    if (type == "string") {
        param.valueOut = "std::string out;"
        param.valueDefine += "%sstd::string &out".format(param.valueDefine.length > 0 ? ", " : "")
    }
    else if (type == "void") {
        NapiLog.logInfo("The current type don't need generate return %s`.format(type)");
    }
    else if (type == "boolean") {
        param.valueOut = "bool out;"
        param.valueDefine += "%sbool &out".format(param.valueDefine.length > 0 ? ", " : "")
    }
    else if (isEnum(type, data)) {
        returnGenerateEnum(data, type, param)
    }
    else if (type.substring(0, 12) == "NUMBER_TYPE_") {
        param.valueOut = type + " out;"
        param.valueDefine += "%s%s &out".format(param.valueDefine.length > 0 ? ", " : "", type)
    }
    else if (InterfaceList.getValue(type)) {
        param.valueOut = type + " out;"
        param.valueDefine += "%s%s &out".format(param.valueDefine.length > 0 ? ", " : "", type)
    }
    else if (type.substring(0, 6) == "Array<") {
        let arrayType = getArrayType(type)
        if (arrayType == "string") arrayType = "std::string"
        param.valueOut = "std::vector<%s> out;".format(arrayType)
        param.valueDefine += "%sstd::vector<%s> &out".format(param.valueDefine.length > 0 ? ", " : "", arrayType)
    }
    else {
        NapiLog.logError("The current version do not support this type return %s`.format(type)");
    }
}

function returnGenerateEnum(data, type, param) {
    let index = enumIndex(type, data)
    if (data.enum[index].body.enumValueType == EnumValueType.ENUM_VALUE_TYPE_NUMBER) {
        type = "NUMBER_TYPE_" + NumberIncrease.getAndIncrease()
    } else if (data.enum[index].body.enumValueType == EnumValueType.ENUM_VALUE_TYPE_STRING) {
        type = "string"
    } else {
        NapiLog.logError(`returnGenerate is not support`);
        return
    }
    param.valuePackage = "napi_value result = nullptr;\n    " + cToJs("vio->out", type, "result")
    if (type == "string") {
        param.valueOut = "std::string out;"
        param.valueDefine += "%sstd::string &out".format(param.valueDefine.length > 0 ? ", " : "")
    }
    else if (type.substring(0, 12) == "NUMBER_TYPE_") {
        param.valueOut = type + " out;"
        param.valueDefine += "%s%s &out".format(param.valueDefine.length > 0 ? ", " : "", type)
    }
}

module.exports = {
    cToJs,
    returnGenerate
}
