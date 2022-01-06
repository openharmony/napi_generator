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
const re = require("./re");

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
NumberIncrease.GetAndIncrease = function () {
    return NumberIncrease.num++;
}
NumberIncrease.Get = function () {
    return NumberIncrease.num;
}
NumberIncrease.Reset = function () {
    NumberIncrease.num = 1
}

class InterfaceList { }
InterfaceList.interfacess_ = [];
InterfaceList.Push = function (ifs) {
    InterfaceList.interfacess_.push(ifs)
}
InterfaceList.Pop = function () {
    InterfaceList.interfacess_.pop()
}
InterfaceList.GetValue = function (name) {
    let ifs = InterfaceList.interfacess_[InterfaceList.interfacess_.length - 1]
    for (let i in ifs) {
        if (ifs[i].name == name) {
            return ifs[i].body.value;
        }
    }
    return null;
}

function get_array_type(type) {
    let tt = re.match("Array<([a-zA-Z_0-9]+)>", type)
    return re.get_reg(type, tt.regs[1])
}

module.exports = {
    FuncType,
    NumberIncrease,
    InterfaceList,
    get_array_type
}