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
const tsc = require("../../../node_modules/typescript");

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

module.exports = {
    FuncType,
    NumberIncrease,
    InterfaceList,
    getArrayType,
    checkFileError
}