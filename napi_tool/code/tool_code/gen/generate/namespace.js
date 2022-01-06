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
const { print } = require("../tools/tool");
const { GenerateFunctionDirect } = require("./function_direct");
const { GenerateFunctionSync } = require("./function_sync");
const { GenerateFunctionAsync } = require("./function_async");
const { GenerateInterface } = require("./interface");
const { FuncType, InterfaceList } = require("../tools/common");

function GenerateNamespace(name, data, in_namespace = "") {
    // print(name)
    // print(data)
    // print(in_namespace)
    // print(JSON.stringify(result, null, 4))
    //生成module_middle.cpp
    //生成module.h
    //生成module.cpp

    let impl_h = ""
    let impl_cpp = ""
    let middle_func = ""
    let middle_init = ""

    if (in_namespace.length > 0) {
        let nsl = in_namespace.split("::")
        nsl.pop()
        let parent_ns = nsl[nsl.length - 1]
        // print("parent=", parent_ns)
        middle_init = `{\nnapi_value %s=pxt->CreateSubObject(%s,"%s");\n`.format(name, nsl.length == 1 ? "exports" : parent_ns, name)
    }

    InterfaceList.Push(data.interface)
    // InterfaceList.GetValue("TestClass1")
    for (let i in data.interface) {
        let ii = data.interface[i]
        // print(ii)
        let result = GenerateInterface(ii.name, ii.body, in_namespace + name + "::")

        middle_func += result.middle_body
        impl_h += result.impl_h
        impl_cpp += result.impl_cpp
        middle_init += result.middle_init
    }

    for (let i in data.function) {
        let func = data.function[i]
        // print(func)
        let tmp;
        switch (func.type) {
            case FuncType.DIRECT:
                tmp = GenerateFunctionDirect(func)
                break;
            case FuncType.SYNC:
                tmp = GenerateFunctionSync(func)
                break
            case FuncType.ASYNC:
            case FuncType.PROMISE:
                tmp = GenerateFunctionAsync(func)
                break
            default:
                // to do yichangchuli
                return
        }
        middle_func += tmp[0]
        impl_h += tmp[1]
        impl_cpp += tmp[2]
        middle_init += '    pxt->DefineFunction("%s", %s%s::%s_middle%s);\n'.format(func.name, in_namespace, name, func.name, in_namespace.length > 0 ? ", "+name : "")
    }

    for (let i in data.namespace) {
        let ns = data.namespace[i]
        // print(ns)
        let result = GenerateNamespace(ns.name, ns.body, in_namespace + name + "::")
        middle_func += result.middle_body
        impl_h += result.impl_h
        impl_cpp += result.impl_cpp
        middle_init += result.middle_init
    }
    InterfaceList.Pop();

    if (in_namespace.length > 0) {
        middle_init += "}"
    }
    let result = {
        impl_h: `
namespace %s {
%s
}`.format(name, impl_h),
        impl_cpp: `
namespace %s {
%s
}
`.format(name, impl_cpp),
        middle_body: `
namespace %s {
%s
}
`.format(name, middle_func),
        middle_init: middle_init
    }
    return result
}

module.exports = {
    GenerateNamespace
}