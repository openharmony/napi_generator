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
const re = require("./re");
const tsc = require("../../node_modules/typescript");

function checkFileError(ifname) {
    let program = tsc.createProgram([ifname], {})
    let emitResult = program.emit();
    let allDiagnostics = tsc.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

    let errorMsg = ''
    allDiagnostics.forEach(diagnostic => {
        if (diagnostic.file) {
            let { line, character } = tsc.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start);
            let message = tsc.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
            errorMsg += `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}\n`;
        } else {
            errorMsg += tsc.flattenDiagnosticMessageText(diagnostic.messageText, "\n") + "\n";
        }
    });

    if (allDiagnostics.length > 0) {
        return [false, errorMsg];
    }
    return [true, ""];
}

class FuncType { }
FuncType.DIRECT = 1
FuncType.SYNC = 2
FuncType.ASYNC = 4
FuncType.PROMISE = 8
FuncType.ToString = function (type) {
    if (type == FuncType.DIRECT) return "DIRECT";
    else if (type == FuncType.SYNC) return "SYNC";
    else if (type == FuncType.ASYNC) return "ASYNC";
    else if (type == FuncType.PROMISE) return "PROMISE";
    return "UNKNOW";
}

class NumberIncrease { }
NumberIncrease.num = 1
NumberIncrease.getAndIncrease = function () {
    return NumberIncrease.num++;
}
NumberIncrease.get = function () {
    return NumberIncrease.num;
}
NumberIncrease.reset = function () {
    NumberIncrease.num = 1
}

class InterfaceList { }
InterfaceList.interfacess_ = [];
InterfaceList.push = function (ifs) {
    InterfaceList.interfacess_.push(ifs)
}
InterfaceList.pop = function () {
    InterfaceList.interfacess_.pop()
}
InterfaceList.getValue = function (name) {
    let ifs = InterfaceList.interfacess_[InterfaceList.interfacess_.length - 1]
    for (let i in ifs) {
        if (ifs[i].name == name) {
            return ifs[i].body.value;
        }
    }
    return null;
}

function getArrayType(type) {
    let tt = re.match("Array<([a-zA-Z_0-9]+)>", type)
    return re.getReg(type, tt.regs[1])
}

function getArrayTypeTwo(type) {
    let tt = re.match("([a-zA-Z_0-9]+)", type)
    return re.getReg(type, tt.regs[1])
}

class EnumValueType { }
EnumValueType.ENUM_VALUE_TYPE_NUMBER = 0
EnumValueType.ENUM_VALUE_TYPE_STRING = 1

function isEnum(type, data) {
    let isEnum = false
    if (null == data) {
        return isEnum
    }
    for (let i in data.enum) {
        let enumm = data.enum[i]
        if (type == enumm.name) {
            isEnum = true
        }
    }
    return isEnum
}

function enumIndex(type, data) {
    let index;
    if (null == data) {
        return index
    }
    for (let i in data.enum) {
        let enumm = data.enum[i]
        if (type == enumm.name) {
            index = i
        }
    }
    return index
}

function getMapType(type) {
    type = type.replace(/\s*/g,"")
    let tt1 = re.search("Map<([a-zA-Z_0-9]+),", type)
    let tt2 = re.search(",([a-zA-Z_0-9]+)>", type)
    let tt3
    let tt4

    let valueType
    let valueMapType
    let valueArrayType
    if(tt1 == null && tt2 == null){
        tt1 = re.search("key:([a-zA-Z_0-9]+)", type)
        tt2 = re.search(":([a-zA-Z_0-9]+)}", type)
        tt3 = re.search(":([a-zA-Z_0-9]+)}}", type)
        tt4 = re.search("Array<([a-zA-Z_0-9]+)>", type)
    }
    if(tt2 != null){
        valueType = re.getReg(type, tt2.regs[1])
    }
    if(tt3 != null){
        valueMapType = re.getReg(type, tt3.regs[1])
    }
    if(tt4 != null){
        valueArrayType = re.getReg(type, tt4.regs[1])
    }
    return [re.getReg(type, tt1.regs[1]), valueType, valueMapType, valueArrayType]
}

module.exports = {
    FuncType,
    EnumValueType,
    NumberIncrease,
    InterfaceList,
    getArrayType,
    getArrayTypeTwo,
    checkFileError,
    isEnum,
    enumIndex,
    getMapType
}