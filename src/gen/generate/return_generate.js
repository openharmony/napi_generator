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
const { InterfaceList, getArrayType, NumberIncrease, enumIndex,
    isEnum, EnumValueType, getArrayTypeTwo, getMapType, EnumList } = require("../tools/common");
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
    else if(EnumList.getValue(type)){
        let lt = deep
        let result = ""
        let ifl = EnumList.getValue(type)
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
    else if (type.substring(0, 6) == "Array<" || type.substring(type.length - 2) == "[]") {
        let arrayType = checkArrayParamType(type)
        return arrayTempleteFunc(arrayType, deep, dest, value)
    }
    else if (type.substring(0, 4) == "Map<" || type.indexOf("{") == 0) {
        return mapTempleteFunc(type, deep, dest, value)
    }
    else
        NapiLog.logError(`This type do not generate cToJs %s,%s,%s`.format(value, type, dest));
}

function checkArrayParamType(type) {
    let arrayType
    if (type.substring(type.length - 2) == "[]") {
        arrayType = getArrayTypeTwo(type)
    }
    else {
        arrayType = getArrayType(type)
    }
    return arrayType
}

function arrayTempleteFunc(arrayType, deep, dest, value) {
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

function mapTempleteFunc(type, deep, dest, value) {
    let mapType = getMapType(type)
    let lt = deep
    let tnv = dest
    let tnvdef = `result = nullptr;
    for (auto i = %s.begin(); i != %s.end(); i++)
        {
            const char * tnv%d;
            napi_value tnv%d = nullptr;
            [calc_out]
            pxt->SetMapElement(%s, tnv%d, tnv%d);
        }`.format(value, value, lt, lt + 1, tnv, lt, lt + 1)
    let ret = ""
    if (mapType[1] != undefined && mapType[2] == undefined) {
        ret = mapTempleteValue(mapType, tnvdef, lt, value, tnv)
    }
    else if (mapType[2] != undefined) {
        ret = mapTempleteMap(mapType, tnvdef, lt)
    }
    else if (mapType[3] != undefined) {
        ret = mapTempleteArray(mapType, tnvdef, lt)
    }
    return ret
}

function mapInterface(value, lt, tnv, mapType) {
    let ret
    let tnvdefInterface = `result = nullptr;
    for (auto i = %s.begin(); i != %s.end(); i++)
    {
        const char *tnv%d;
        [calc_out]
    }`.format(value, value, lt, lt + 1, tnv, lt, lt + 1)
    let interfaceValue = InterfaceList.getValue(mapType[1])
    let interfaceVarName = ""
    let interfaceVar = ""
    let interfaceFun = ""
    for (let i = 0; i < interfaceValue.length; i++) {
        if (interfaceValue[i].type == 'string') {
            interfaceVarName += `const char * tnv_%s_name;
                napi_value tnv_%s = nullptr;\n`.format(interfaceValue[i].name, interfaceValue[i].name)
            interfaceVar += `tnv_%s_name = "%s";
                tnv_%s = pxt->SwapC2JsUtf8(i->second.%s.c_str());\n`
                .format(interfaceValue[i].name, interfaceValue[i].name, interfaceValue[i].name, interfaceValue[i].name)
            interfaceFun += `pxt->SetMapElement(result_obj, tnv_%s_name, tnv_%s);\n`
                .format(interfaceValue[i].name, interfaceValue[i].name, interfaceValue[i].name)
        }
        else if (interfaceValue[i].type.substring(0, 12) == "NUMBER_TYPE_") {
            interfaceVarName += `const char * tnv_%s_name;
                napi_value tnv_%s = nullptr;\n`.format(interfaceValue[i].name, interfaceValue[i].name)
            interfaceVar += `tnv_%s_name = "%s";
                tnv_%s = NUMBER_C_2_JS(pxt,i->second.%s);\n`
                .format(interfaceValue[i].name, interfaceValue[i].name, interfaceValue[i].name, interfaceValue[i].name)
            interfaceFun += `pxt->SetMapElement(result_obj, tnv_%s_name, tnv_%s);\n`
                .format(interfaceValue[i].name, interfaceValue[i].name, interfaceValue[i].name)
        }
        else if (interfaceValue[i].type == 'boolean') {
            interfaceVarName += `const char * tnv_%s_name;
                napi_value tnv_%s = nullptr;\n`.format(interfaceValue[i].name, interfaceValue[i].name)
            interfaceVar += `tnv_%s_name = "%s";
                tnv_%s = pxt->SwapC2JsBool(i->second.%s);\n`
                .format(interfaceValue[i].name, interfaceValue[i].name, interfaceValue[i].name, interfaceValue[i].name)
            interfaceFun += `pxt->SetMapElement(result_obj, tnv_%s_name, tnv_%s);\n`
                .format(interfaceValue[i].name, interfaceValue[i].name, interfaceValue[i].name)
        }
    }
    ret = tnvdefInterface.replaceAll("[calc_out]", `tnv%d = (i -> first).c_str();
        napi_value result_obj = nullptr;
        %s
        %s
        %s
        pxt->SetMapElement(result, tnv%d, result_obj);`
        .format(lt, interfaceVarName, interfaceVar, interfaceFun, lt))
    return ret
}

function mapTempleteValue(mapType, tnvdef, lt, value, tnv) {
    let ret
    if (mapType[1] == "string") {
        ret = tnvdef.replaceAll("[calc_out]", `tnv%d = (i -> first).c_str();
        tnv%d = pxt->SwapC2JsUtf8(i->second.c_str());`.format(lt, lt + 1))
    } else if (mapType[1] == "boolean") {
        ret = tnvdef.replaceAll("[calc_out]", `tnv%d = (i -> first).c_str();
        tnv%d = pxt->SwapC2JsBool(i->second);`.format(lt, lt + 1))
    } else if (mapType[1].substring(0, 12) == "NUMBER_TYPE_") {
        ret = tnvdef.replaceAll("[calc_out]", `tnv%d = (i -> first).c_str();
        tnv%d = NUMBER_C_2_JS(pxt,i->second);`.format(lt, lt + 1))
    }
    else if (InterfaceList.getValue(mapType[1])) {
        ret = mapInterface(value, lt, tnv, mapType)
    }
    else
        NapiLog.logError(`This type do not generate cToJs %s,%s,%s`.format(value, type, dest));
    return ret
}

function mapTempleteMap(mapType, tnvdef, lt) {
    let ret
    if (mapType[2] == "string") {
        ret = tnvdef.replaceAll("[calc_out]", `tnv%d = i->first.c_str();
        for(auto j = i->second.begin(); j != i->second.end(); j++){
            const char * tt%d;
            napi_value tt%d;
            tt%d = j->first.c_str();
            tt%d = pxt->SwapC2JsUtf8(j->second.c_str());
            pxt->SetMapElement(tnv%d, tt%d, tt%d);
        }`.format(lt, lt + 2, lt + 3, lt + 2, lt + 3, lt + 1, lt + 2, lt + 3))
    }
    else if (mapType[2] == "boolean") {
        ret = tnvdef.replaceAll("[calc_out]", `tnv%d = i->first.c_str();
        for(auto j = i->second.begin(); j != i->second.end(); j++){
            const char * tt%d;
            napi_value tt%d;
            tt%d = j->first.c_str();
            tt%d = pxt->SwapC2JsBool(j->second);
            pxt->SetMapElement(tnv%d, tt%d, tt%d);
        }`.format(lt, lt + 2, lt + 3, lt + 2, lt + 3, lt + 1, lt + 2, lt + 3))
    }
    if (mapType[2].substring(0, 12) == "NUMBER_TYPE_") {
        ret = tnvdef.replaceAll("[calc_out]", `tnv%d = i->first.c_str();
        for(auto j = i->second.begin(); j != i->second.end(); j++){
            const char * tt%d;
            napi_value tt%d;
            tt%d = j->first.c_str();
            tt%d = NUMBER_C_2_JS(pxt,j->second);
            pxt->SetMapElement(tnv%d, tt%d, tt%d);
        }`.format(lt, lt + 2, lt + 3, lt + 2, lt + 3, lt + 1, lt + 2, lt + 3))
    }
    return ret
}

function mapTempleteArray(mapType, tnvdef, lt) {
    let ret
    if (mapType[3] == "string") {
        ret = tnvdef.replaceAll("[calc_out]", `napi_value tnv%d = nullptr;
        tnv%d = (i -> first).c_str();
        uint32_t len%d = i->second.size();
        for(uint32_t j=0;j<len%d;j++) {
            tnv%d = pxt->SwapC2JsUtf8(i->second[j].c_str());
            pxt->SetArrayElement(tnv%d, j, tnv%d);
        }`.format(lt + 2, lt, lt, lt, lt + 2, lt + 1, lt + 2))
    } else if (mapType[3] == "boolean") {
        ret = tnvdef.replaceAll("[calc_out]", `napi_value tnv%d = nullptr;
        tnv%d = (i -> first).c_str();
        uint32_t len%d = i->second.size();
        for(uint32_t j=0;j<len%d;j++) {
            tnv%d = pxt->SwapC2JsBool(i->second[j]);
            pxt->SetArrayElement(tnv%d, j, tnv%d);
        }`.format(lt + 2, lt, lt, lt, lt + 2, lt + 1, lt + 2))
    } else if (mapType[3].substring(0, 12) == "NUMBER_TYPE_") {
        ret = tnvdef.replaceAll("[calc_out]", `napi_value tnv%d = nullptr;
        tnv%d = (i -> first).c_str();
        uint32_t len%d = i->second.size();
        for(uint32_t j=0;j<len%d;j++) {
            tnv%d = NUMBER_C_2_JS(pxt,i->second[j]);
            pxt->SetArrayElement(tnv%d, j, tnv%d);
        }`.format(lt + 2, lt, lt, lt, lt + 2, lt + 1, lt + 2))
    }
    return ret
}

function returnGenerateMap(type, param) {
    let mapType = getMapType(type)
    let mapTypeString
    if (mapType[1] != undefined && mapType[2] == undefined) {
        if (mapType[1] == "string") { mapTypeString = "std::string" }
        else if (mapType[1].substring(0, 12) == "NUMBER_TYPE_") { mapTypeString = mapType[1] }
        else if (mapType[1] == "boolean") { mapTypeString = "bool" }
        else { mapTypeString = mapType[1] }
    }
    else if (mapType[2] != undefined) {
        if (mapType[2] == "string") { mapTypeString = "std::map<std::string,std::string>" }
        else if (mapType[2].substring(0, 12) == "NUMBER_TYPE_") { "std::map<std::string,"+mapType[2]+">" }
        else if (mapType[2] == "boolean") { mapTypeString = "std::map<std::string,bool>" }
    }
    else if (mapType[3] != undefined) {
        if (mapType[3] == "string") { mapTypeString = "std::vector<std::string>" }
        else if (mapType[3].substring(0, 12) == "NUMBER_TYPE_") { mapTypeString = "std::vector<"+mapType[3]+">" }
        else if (mapType[3] == "boolean") { mapTypeString = "std::vector<bool>" }
    }
    param.valueOut = "std::map<std::string,%s> out;".format(mapTypeString)
        param.valueDefine += "%sstd::map<std::string,%s> &out"
            .format(param.valueDefine.length > 0 ? ", " : "", mapTypeString)
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
        NapiLog.logInfo("The current void type don't need generate");
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
    else if(generateType(type)){
        returnGenerate2(type, param, data)
    }
    else {
        NapiLog.logError("The current version do not support this type return %s`.format(type)");
    }
}

function generateType(type){
    if (InterfaceList.getValue(type)) {
        return true
    }
    else if (type.substring(0, 6) == "Array<") {
        return true
    }
    else if (type.substring(type.length - 2) == "[]") {
        return true
    }
    else if (type.substring(0, 4) == "Map<" || type.indexOf("{") == 0) {
        return true
    }
    else {
        return false
    }
}

function returnGenerate2(type, param, data){
    if (InterfaceList.getValue(type)) {
        param.valueOut = type + " out;"
        param.valueDefine += "%s%s &out".format(param.valueDefine.length > 0 ? ", " : "", type)
    }
    else if (type.substring(0, 6) == "Array<") {
        let arrayType = getArrayType(type)
        if (arrayType == "string") arrayType = "std::string"
        param.valueOut = "std::vector<%s> out;".format(arrayType)
        param.valueDefine += "%sstd::vector<%s> &out".format(param.valueDefine.length > 0 ? ", " : "", arrayType)
    }
    else if (type.substring(type.length - 2) == "[]") {
        let arrayType = getArrayTypeTwo(type)
        if (arrayType == "string") arrayType = "std::string"
        param.valueOut = "std::vector<%s> out;".format(arrayType)
        param.valueDefine += "%sstd::vector<%s> &out".format(param.valueDefine.length > 0 ? ", " : "", arrayType)
    }
    else if (type.substring(0, 4) == "Map<" || type.indexOf("{") == 0) {
        returnGenerateMap(type, param)
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
