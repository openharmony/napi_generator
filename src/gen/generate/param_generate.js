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
const { InterfaceList, getArrayType, getArrayTypeTwo, NumberIncrease,
    enumIndex, isEnum, EnumValueType, getMapType, EnumList } = require("../tools/common");
const re = require("../tools/re");
const { NapiLog } = require("../tools/NapiLog");
const { print } = require("../tools/tool");

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

function jsToC(dest, napiVn, type, enumType = 0) {
    if (type == "string") {
        if (napiVn.indexOf("GetValueProperty") >= 0) {
            let lt = LenIncrease.getAndIncrease()
            return `napi_value tnv%d = %s;\n    if(tnv%d!=nullptr){pxt->SwapJs2CUtf8(tnv%d,%s);}`
                .format(lt, napiVn, lt, lt, dest)
        } else {
            return "pxt->SwapJs2CUtf8(%s, %s);".format(napiVn, dest)
        }           
    } else if (type.substring(type.length - 2) == "[]") {
        return arrTemplete(dest, napiVn, type);
    } else if (type.substring(0, 12) == "NUMBER_TYPE_") {
        if (enumType) {
            if (napiVn.indexOf("GetValueProperty") >= 0) {
                let lt = LenIncrease.getAndIncrease()
                return `napi_value tnv%d = %s;\n    if(tnv%d!=nullptr){NUMBER_JS_2_C_ENUM(tnv%d,%s,%s,%s);}`
                .format(lt, napiVn, lt, lt, type, dest, enumType)
            } else {
                return `NUMBER_JS_2_C_ENUM(%s,%s,%s,%s);`.format(napiVn, type, dest, enumType)
            } 
        } else {
            if (napiVn.indexOf("GetValueProperty") >= 0) {
                let lt = LenIncrease.getAndIncrease()
                return `napi_value tnv%d = %s;\n    if(tnv%d!=nullptr){NUMBER_JS_2_C(tnv%d,%s,%s);}`
                .format(lt, napiVn, lt, lt, type, dest)
            } else {
                return `NUMBER_JS_2_C(%s,%s,%s);`.format(napiVn, type, dest)
            } 
       }
    } else if (InterfaceList.getValue(type)) {
        let tt = ""
        let ifl = InterfaceList.getValue(type)
        for (let i in ifl) {
            let name2 = ifl[i].name
            let type2 = ifl[i].type
            tt += jsToC("%s.%s".format(dest, name2), getValueProperty(napiVn, name2), type2)
        }
        return tt
    } else if (EnumList.getValue(type)) {
        return jsToCEnum(type, dest, napiVn)
    } else if (type.indexOf("Array<") == 0) {
        return arrTemplete(dest, napiVn, type);
    } else if (type == "boolean") {
        return `BOOLEAN_JS_2_C(%s,%s,%s);`.format(napiVn, "bool", dest)
    } else if (type.substring(0, 4) == "Map<" || type.indexOf("{") == 0) {
        return mapTempleteFunc(dest, napiVn, type);
    } else {
        printLog(dest, napiVn, type);
    }        
}

function printLog(dest, napiVn, type) {
    let errorLog = `do not support to generate jsToC %s,%s,%s`.format(dest, napiVn, type);
    print(errorLog);
    NapiLog.logError(errorLog);
}

function jsToCEnum(type, dest, napiVn) {
    let tt = ""
    let ifl = EnumList.getValue(type)
    for (let i in ifl) {
        let type2 = ifl[i].type
        tt += jsToC("%s".format(dest), getValueProperty(napiVn, dest), type2, type)
    }
    return tt
}
function getArrayTypeTemplete(type) {
    let arrayType
    if (type.substring(type.length - 2) == "[]") {
        arrayType = getArrayTypeTwo(type)
    } else {
        arrayType = getArrayType(type)
    }    
    if (arrayType == "string") arrayType = "std::string"
    if (arrayType == "[key:string]:string") {
        arrayType = "std::map<std::string, std::string>"
    }
    return arrayType
}

function arrTemplete(dest, napiVn, type) {  
    let lt = LenIncrease.getAndIncrease()
    let arrayType = getArrayTypeTemplete(type)
    let arrTemplete = `\
    uint32_t len[replace_lt]=pxt->GetArrayLength(%s);
    for(uint32_t i[replace_lt]=0;i[replace_lt]<len[replace_lt];i[replace_lt]++) {
        %s tt[replace_lt];
        [replace_swap]
        %s.push_back(tt[replace_lt]);

    }`.format(napiVn, arrayType == "boolean" ? "bool" : arrayType, dest)

    let arrMapTemplete = `\
    uint32_t len[replace_lt]=pxt->GetArrayLength(%s);
    for(uint32_t i[replace_lt]=0;i[replace_lt]<len[replace_lt];i[replace_lt]++) {
        std::map<std::string, std::string> tt[replace_lt];        
        
        napi_value mapPara = pxt->GetArrayElement(pxt->GetArgv(0),i1);
        uint32_t len2=pxt->GetMapLength(mapPara);
        for(uint32_t i2=0;i2<len2;i2++) {
            std::string tt2, tt3;
            pxt->SwapJs2CUtf8(pxt->GetMapElementName(mapPara, i2), tt2);
            pxt->SwapJs2CUtf8(pxt->GetMapElementValue(mapPara,tt2.c_str()), tt3);
            tt[replace_lt].insert(std::make_pair(tt2, tt3)); 
        }
        %s.push_back(tt[replace_lt]);

    }`.format(napiVn, dest)
    arrTemplete = arrTemplete.replaceAll("[replace_lt]", lt)
    arrMapTemplete = arrMapTemplete.replaceAll("[replace_lt]", lt)
    if (arrayType.substring(0, 12) == "NUMBER_TYPE_") {
        arrTemplete = arrTemplete.replaceAll("[replace_swap]",
            "NUMBER_JS_2_C(pxt->GetArrayElement(%s,i%d),%s,tt%d);".format(napiVn, lt, arrayType, lt))
    }
    else if (arrayType == "std::string") {
        arrTemplete = arrTemplete.replaceAll("[replace_swap]",
            "pxt->SwapJs2CUtf8(pxt->GetArrayElement(%s,i%d), tt%d);".format(napiVn, lt, lt))
    }
    else if (InterfaceList.getValue(arrayType)) {
        arrTemplete = arrTemplete.replaceAll("[replace_swap]",
            jsToC("tt" + lt, "pxt->GetArrayElement(%s,i%d)".format(napiVn, lt), arrayType))
    }
    else if (arrayType == "boolean") {
        arrTemplete = arrTemplete.replaceAll("[replace_swap]",
            "pxt->SwapJs2CBool(pxt->GetArrayElement(%s,i%d));".format(napiVn, lt))
    } else if (arrayType == "std::map<std::string, std::string>") {
        return arrMapTemplete
    }
    return arrTemplete
}

function paramGenerateArray(p, name, type, param) {
    if (type.substring(type.length - 2) == "[]") {
        let arrayType = getArrayTypeTwo(type)
        if (arrayType == "string") arrayType = "std::string"
        if (arrayType == "boolean") arrayType = "bool"
        param.valueIn += "\n    std::vector<%s> in%d;".format(arrayType, p)
        param.valueCheckout += jsToC("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.valueFill += "%svio->in%d".format(param.valueFill.length > 0 ? ", " : "", p)
        param.valueDefine += "%sstd::vector<%s> &%s".format(param.valueDefine.length > 0 ? ", " : "", arrayType, name)
    } else if (type.substring(0, 6) == "Array<") {
        let arrayType = getArrayType(type)
        if (arrayType == "string") arrayType = "std::string"
        if (arrayType == "boolean") arrayType = "bool"
        if (arrayType == "[key:string]:string") {
            arrayType = "std::map<std::string, std::string>"
        }
        param.valueIn += "\n    std::vector<%s> in%d;".format(arrayType, p)
        param.valueCheckout += jsToC("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.valueFill += "%svio->in%d".format(param.valueFill.length > 0 ? ", " : "", p)
        param.valueDefine += "%sstd::vector<%s> &%s".format(param.valueDefine.length > 0 ? ", " : "", arrayType, name)
    } else {
        print("The current version do not support to this param to generate :", name, "type :", type);
        NapiLog.logError("The current version do not support to this param to generate :", name, "type :", type);
    }
}

function paramGenerateEnum(data, type, param, name, p) {
    let index = enumIndex(type, data)
    if (data.enum[index].body.enumValueType == EnumValueType.ENUM_VALUE_TYPE_NUMBER) {
        type = "NUMBER_TYPE_" + NumberIncrease.getAndIncrease()
    } else if (data.enum[index].body.enumValueType == EnumValueType.ENUM_VALUE_TYPE_STRING) {
        type = "string"
    } else {
        NapiLog.logError(`paramGenerate is not support`);
        return
    }
    paramGenerate(p, name, type, param, data)
}

function paramGenerateMap(type, param, p, name) {
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
    param.valueIn += "\n    std::map<std::string,%s> in%d;".format(mapTypeString, p)
        param.valueCheckout += jsToC("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.valueFill += "%svio->in%d".format(param.valueFill.length > 0 ? ", " : "", p)
        param.valueDefine += "%sstd::map<std::string,%s> &%s"
            .format(param.valueDefine.length > 0 ? ", " : "", mapTypeString, name)
}

function mapTempleteFunc(dest, napiVn, type) {
    let mapType = getMapType(type)
    let lt = LenIncrease.getAndIncrease()
    let mapTemplete = ""
    if (mapType[1] != undefined && mapType[2] == undefined) {
        mapTemplete = mapValue(mapType, napiVn, dest, lt)
    }
    else if (mapType[2] != undefined) {
        mapTemplete = mapMap(mapType, napiVn, dest, lt)
    }
    else if (mapType[3] != undefined) {
        mapTemplete = mapArray(mapType, napiVn, dest, lt)
    }
    return mapTemplete
}

let mapValueTemplete = `\
uint32_t len[replace_lt]=pxt->GetMapLength(%s);
for(uint32_t i[replace_lt]=0;i[replace_lt]<len[replace_lt];i[replace_lt]++) {
    std::string tt[replace_lt];
    %s tt[replace_lt+1];
    [replace_swap]
    %s.insert(std::make_pair(tt[replace_lt], tt[replace_lt+1]));
}`

function mapInterface(mapTypeString, mapTemplete, napiVn, lt) {
    let interfaceValue = InterfaceList.getValue(mapTypeString)
    let interfaceVarName = ""
    let interfaceVar = ""
    let interfaceFun = ""
    for (let i = 0; i < interfaceValue.length; i++) {
        if (interfaceValue[i].type == 'string') {
            interfaceVarName += `std::string %dName = "%d";\n`.format(interfaceValue[i].name, interfaceValue[i].name)
            interfaceVar += `std::string %s;`.format(interfaceValue[i].name)
            interfaceFun +=
                `pxt->%s(pxt->%s(pxt->GetMapElementValue(pxt->GetArgv(0),tt%d.c_str()),%sName.c_str()),tt%d.%s);`
                    .format("SwapJs2CUtf8", "GetMapElementValue",
                        lt, interfaceValue[i].name, lt+1, interfaceValue[i].name)
        }
        else if (interfaceValue[i].type.substring(0, 12) == "NUMBER_TYPE_") {
            interfaceVarName += `std::string %dName = "%d";\n`.format(interfaceValue[i].name, interfaceValue[i].name)
            interfaceVar += `std::string %s;\n`.format(interfaceValue[i].name)
            interfaceFun +=
                `%s(pxt->%s(pxt->GetMapElementValue(pxt->GetArgv(0),tt%d.c_str()),%sName.c_str()),%s,tt%d.%s);\n`
                    .format("NUMBER_JS_2_C", "GetMapElementValue", lt, interfaceValue[i].name,
                        interfaceValue[i].type, lt + 1, interfaceValue[i].name)
        }
        else if (interfaceValue[i].type == 'boolean') {
            interfaceVarName += `std::string %dName = "%d";\n`.format(interfaceValue[i].name, interfaceValue[i].name)
            interfaceVar += `std::string %s;\n`.format(interfaceValue[i].name)
            interfaceFun +=
                `tt%d.%s = pxt->%s(pxt->%s(pxt->GetMapElementValue(pxt->GetArgv(0),tt%d.c_str()),%sName.c_str()));\n`
                    .format(lt + 1, interfaceValue[i].name, "SwapJs2CBool", "GetMapElementValue",
                        lt, interfaceValue[i].name)
        }
    }
    mapTemplete = mapTemplete.replaceAll("[replace_swap]",
        `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%d), tt%d);
        %d
        %d
        %d`.format(napiVn, lt, lt, interfaceVarName, interfaceVar, interfaceFun))
    return mapTemplete
}

function mapValue(mapType, napiVn, dest, lt) {
    let mapTypeString
    if (mapType[1] == "string") { mapTypeString = "std::string" }
    else if (mapType[1].substring(0, 12) == "NUMBER_TYPE_") { mapTypeString = mapType[1] }
    else if (mapType[1] == "boolean") { mapTypeString = "bool" }
    else if (mapType[1] != null) { mapTypeString = mapType[1] }
    let mapTemplete = mapValueTemplete.format(napiVn, mapTypeString, dest)
    mapTemplete = mapTemplete.replaceAll("[replace_lt]", lt)
    mapTemplete = mapTemplete.replaceAll("[replace_lt+1]", lt + 1)
    if (mapTypeString == "std::string") {
        mapTemplete = mapTemplete.replaceAll("[replace_swap]",
            `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%d), tt%d);
        pxt->SwapJs2CUtf8(pxt->GetMapElementValue(%s,tt%d.c_str()), tt%d);`
                .format(napiVn, lt, lt, napiVn, lt, lt + 1))
    }
    else if (mapTypeString.substring(0, 12) == "NUMBER_TYPE_") {
        mapTemplete = mapTemplete.replaceAll("[replace_swap]",
            `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%d), tt%d);
        NUMBER_JS_2_C(pxt->GetMapElementValue(%s,tt%d.c_str()),%s,tt%d);`
                .format(napiVn, lt, lt, napiVn, lt, mapTypeString, lt + 1))
    }
    else if (mapTypeString == "bool") {
        mapTemplete = mapTemplete.replaceAll("[replace_swap]",
            `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%d), tt%d);
        tt%d = pxt->SwapJs2CBool(pxt->GetMapElementValue(%s,tt%d.c_str()));`
                .format(napiVn, lt, lt, lt + 1, napiVn, lt))
    }
    else if (InterfaceList.getValue(mapTypeString)) {
        mapTemplete = mapInterface(mapTypeString, mapTemplete, napiVn, lt)
    }
    return mapTemplete
}

let mapMapTemplete = `\
uint32_t len[replace_lt]=pxt->GetMapLength(%s);
for(uint32_t i[replace_lt]=0;i[replace_lt]<len[replace_lt];i[replace_lt]++) {
    std::string tt[replace_lt];
    std::map<std::string,%s> tt[replace_lt+1];
    [replace_swap]
    %s.insert(std::make_pair(tt[replace_lt], tt[replace_lt+1]));
}`

function mapMapString (mapTemplete, napiVn, lt) {
    return mapTemplete.replaceAll("[replace_swap]",
    `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%d), tt%d);
    uint32_t len%d=pxt->GetMapLength(pxt->GetMapElementValue(%s,tt%d.c_str()));
    for(uint32_t i%d=0;i%d<len%d;i%d++){
        std::string tt%d;
        std::string tt%d;
        pxt->SwapJs2CUtf8(pxt->GetMapElementName(pxt->GetMapElementValue(%s,tt%d.c_str()), i%d),tt%d);
        pxt->SwapJs2CUtf8(pxt->GetMapElementValue(pxt->GetMapElementValue(%s,tt%d.c_str()),tt%d.c_str()),tt%d);
        tt%d.insert(std::make_pair(tt%d, tt%d));
    }`.format(napiVn, lt, lt, lt + 1, napiVn, lt, lt + 1, lt + 1, lt + 1, lt + 1,
        lt + 2, lt + 3, napiVn, lt, lt + 1, lt + 2, napiVn, lt, lt + 2, lt + 3, lt + 1, lt + 2, lt + 3))
}

function mapMapBoolean (mapTemplete, napiVn, lt) {
    return mapTemplete.replaceAll("[replace_swap]",
    `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%d), tt%d);
    uint32_t len%d=pxt->GetMapLength(pxt->GetMapElementValue(%s,tt%d.c_str()));
    for(uint32_t i%d=0;i%d<len%d;i%d++){
        std::string tt%d;
        bool tt%d;
        pxt->SwapJs2CUtf8(pxt->GetMapElementName(pxt->GetMapElementValue(%s,tt%d.c_str()), i%d),tt%d);
        tt%d = pxt->%s(pxt->GetMapElementValue(pxt->GetMapElementValue(%s,tt%d.c_str()),tt%d.c_str()));
        tt%d.insert(std::make_pair(tt%d, tt%d));
    }`.format(napiVn, lt, lt, lt + 1, napiVn, lt, lt + 1, lt + 1, lt + 1, lt + 1,
        lt + 2, lt + 3, napiVn, lt, lt + 1, lt + 2, lt + 3, "SwapJs2CBool"
        ,napiVn, lt, lt + 2, lt + 1, lt + 2, lt + 3))
}

function mapMapNumber (mapTemplete, napiVn, lt, mapTypeString) {
    return mapTemplete.replaceAll("[replace_swap]",
    `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%d), tt%d);
    uint32_t len%d=pxt->GetMapLength(pxt->GetMapElementValue(%s,tt%d.c_str()));
    for(uint32_t i%d=0;i%d<len%d;i%d++){
        std::string tt%d;
        %s tt%d;
        pxt->SwapJs2CUtf8(pxt->GetMapElementName(pxt->GetMapElementValue(%s,tt%d.c_str()), i%d),tt%d);
        NUMBER_JS_2_C(pxt->GetMapElementValue(pxt->GetMapElementValue(%s,tt%d.c_str()),tt%d.c_str()),%s,tt%d);
        tt%d.insert(std::make_pair(tt%d, tt%d));
    }`.format(napiVn, lt, lt, lt + 1, napiVn, lt, lt + 1, lt + 1, lt + 1, lt + 1,
        lt + 2, mapTypeString, lt + 3, napiVn, lt, lt + 1, lt + 2, napiVn, lt, lt + 2,
        mapTypeString, lt + 3, lt + 1, lt + 2, lt + 3))
}

function mapMap(mapType, napiVn, dest, lt) {
    let mapTypeString
    if (mapType[2] == "string") { mapTypeString = "std::string" }
    else if (mapType[2].substring(0, 12) == "NUMBER_TYPE_") { mapTypeString = mapType[2] }
    else if (mapType[2] == "boolean") { mapTypeString = "bool" }
    let mapTemplete = mapMapTemplete.format(napiVn, mapTypeString, dest)
    mapTemplete = mapTemplete.replaceAll("[replace_lt]", lt)
    mapTemplete = mapTemplete.replaceAll("[replace_lt+1]", lt + 1)
    if (mapType[2] == "string") {
        mapTemplete = mapMapString (mapTemplete, napiVn, lt)
    }
    else if (mapType[2] == "boolean") {
        mapTemplete = mapMapBoolean (mapTemplete, napiVn, lt)
    }
    else if (mapType[2].substring(0, 12) == "NUMBER_TYPE_") {
        mapTemplete = mapMapNumber (mapTemplete, napiVn, lt, mapTypeString)
    }
    return mapTemplete
}

let mapArrayTemplete = `\
uint32_t len[replace_lt]=pxt->GetMapLength(%s);
for(uint32_t i[replace_lt]=0;i[replace_lt]<len[replace_lt];i[replace_lt]++) {
    std::string tt[replace_lt];
    std::vector<%s> tt[replace_lt+1];
    [replace_swap]
    %s.insert(std::make_pair(tt[replace_lt], tt[replace_lt+1]));
}`

function mapArray(mapType, napiVn, dest, lt) {
    let mapTypeString
    if (mapType[3] == "string") { mapTypeString = "std::string" }
    else if (mapType[3].substring(0, 12) == "NUMBER_TYPE_") { mapTypeString = mapType[3] }
    else if (mapType[3] == "boolean") { mapTypeString = "bool" }
    let mapTemplete = mapArrayTemplete.format(napiVn, mapTypeString, dest)
    mapTemplete = mapTemplete.replaceAll("[replace_lt]", lt)
    mapTemplete = mapTemplete.replaceAll("[replace_lt+1]", lt + 1)
    if (mapType[3] == "string") {
        mapTemplete = mapTemplete.replaceAll("[replace_swap]",
            `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%s), tt%d);
            uint32_t len%s=pxt->GetArrayLength(pxt->GetMapElementValue(%s,tt%d.c_str()));
            for(uint32_t i%d=0;i%d<len%d;i%d++){
                std::string tt%d;
                pxt->SwapJs2CUtf8(pxt->GetArrayElement(pxt->GetMapElementValue(%s,tt%d.c_str()),i%d), tt%d);
                tt%d.push_back(tt%d);
            }`.format(napiVn, lt, lt, lt + 1, napiVn, lt, lt + 1, lt + 1, lt + 1,
                lt + 1, lt + 2, napiVn, lt, lt + 1, lt + 2, lt + 1, lt + 2))
    }
    else if (mapType[3] == "boolean") {
        mapTemplete = mapTemplete.replaceAll("[replace_swap]",
            `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%s), tt%d);
            uint32_t len%s=pxt->GetArrayLength(pxt->GetMapElementValue(%s,tt%d.c_str()));
            for(uint32_t i%d=0;i%d<len%d;i%d++){
                bool tt%d;
                tt%d = pxt->SwapJs2CBool(pxt->GetArrayElement(pxt->GetMapElementValue(%s,tt%d.c_str()),i%d));
                tt%d.push_back(tt%d);
            }`.format(napiVn, lt, lt, lt + 1, napiVn, lt, lt + 1, lt + 1, lt + 1,
                lt + 1, lt + 2, lt + 2, napiVn, lt, lt, lt + 1, lt + 2))
    }
    else if (mapType[3].substring(0, 12) == "NUMBER_TYPE_") {
        mapTemplete = mapTemplete.replaceAll("[replace_swap]",
            `pxt->SwapJs2CUtf8(pxt->GetMapElementName(%s,i%s), tt%d);
            uint32_t len%s=pxt->GetArrayLength(pxt->GetMapElementValue(%s,tt%d.c_str()));
            for(uint32_t i%d=0;i%d<len%d;i%d++){
                %s tt%d;
                NUMBER_JS_2_C(pxt->GetArrayElement(pxt->GetMapElementValue(%s,tt%d.c_str()),i%d), %s, tt%d);
                tt%d.push_back(tt%d);
            }`.format(napiVn, lt, lt, lt + 1, napiVn, lt, lt + 1, lt + 1, lt + 1,
                lt + 1, mapTypeString, lt + 2, napiVn, lt, lt + 1, mapTypeString, lt + 2, lt + 1, lt + 2))
    }
    return mapTemplete
}

function paramGenerateCallBack(data, type, param, p) {
    let arrayType = re.match("(Async)*Callback<(Array<([a-zA-Z_0-9]+)>)>", type)
    let regType
    if (arrayType) {
        regType = re.getReg(type, arrayType.regs[2])
    }
    let tt = re.match("(Async)*Callback<([a-zA-Z_0-9]+)>", type)
    if (tt) {
        regType = re.getReg(type, tt.regs[2])
    }
    if (isEnum(regType, data)) {
        let index = enumIndex(regType, data)
        if (data.enum[index].body.enumValueType == EnumValueType.ENUM_VALUE_TYPE_NUMBER) {
            regType = "NUMBER_TYPE_" + NumberIncrease.getAndIncrease()
        } else if (data.enum[index].body.enumValueType == EnumValueType.ENUM_VALUE_TYPE_STRING) {
            regType = "string"
        } else {
            let errorLog = `paramGenerate is not support`;
            print(errorLog);
            NapiLog.logError(errorLog);
            return
        }
    }
    param.callback = {
        type: regType,
        offset: p
    }
}

function isArrayType(type) {    
    if (type.substring(type.length - 2) == "[]" || type.substring(0, 6) == "Array<") {
        return true;
    }
    return false;
}

// 函数的参数处理
function paramGenerate(p, name, type, param, data) {
    if (type == "string") {
        param.valueIn += "\n    std::string in%d;".format(p)
        param.valueCheckout += jsToC("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.valueFill += "%svio->in%d".format(param.valueFill.length > 0 ? ", " : "", p)
        param.valueDefine += "%sstd::string &%s".format(param.valueDefine.length > 0 ? ", " : "", name)
    }
    else if (type.substring(0, 12) == "NUMBER_TYPE_" && type.indexOf("[]") < 0) {
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
    else if (type.substring(0, 9) == "Callback<" || type.substring(0, 14) == "AsyncCallback<") {
        paramGenerateCallBack(data, type, param, p)
    }
    else if (type == "boolean") {
        param.valueIn += "\n    bool in%d;".format(p)
        param.valueCheckout += jsToC("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.valueFill += "%svio->in%d".format(param.valueFill.length > 0 ? ", " : "", p)
        param.valueDefine += "%sbool &%s".format(param.valueDefine.length > 0 ? ", " : "", name)
    }
    else if (isEnum(type, data)) {
        paramGenerateEnum(data, type, param, name, p)
    }
    else if (type.substring(0, 4) == "Map<" || type.indexOf("{") == 0) {
        paramGenerateMap(type, param, p, name)
    } else if (isArrayType(type)) {
        paramGenerateArray(p, name, type, param);
    } else {
        print("function paramGenerate: The current version do not support to this param to generate :"
        , name, "type :", type);
        NapiLog.logError("function paramGenerate: The current version do not support to this param to generate :"
        , name, "type :", type);
    }
}

// on/off 接口的event名称参数处理
function eventParamGenerate(p, name, type, param, data) {
    let regName = re.match("'([a-zA-Z_0-9]+)'", type)
    if (regName) {
        param.eventName = re.getReg(type, regName.regs[1])
        param.valueDefine += "%sstd::string &%s".format(param.valueDefine.length > 0 ? ", " : "", name)
    } else if (type.substring(0, 9) == "Callback<" || type.substring(0, 14) == "AsyncCallback<") {
        paramGenerateCallBack(data, type, param, p)
    } else {
        print("function eventParamGenerate:The current version do not support to this param to generate :"
        , name, "type :", type);
        NapiLog.logError("function eventParamGenerate:The current version do not support to this param to generate :"
        , name, "type :", type);
    }
}

module.exports = {
    jsToC,
    arrTemplete,
    paramGenerate,
    eventParamGenerate
}