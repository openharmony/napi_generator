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
const { FuncType, InterfaceList, get_array_type } = require("../tools/common");
const { js_to_c } = require("./param_generate");
const { c_to_js } = require("./return_generate");
const re = require("../tools/re");

let middle_body_tmplete = `
class [class_name]_middle {
public:
static napi_value constructor(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = new XNapiTool(env, info);

    [class_name] *p = new [class_name]();
    // printf("static constructor %x\\n", p);

    napi_value thisvar = pxt->WrapInstance(p, release);

    return thisvar;
}
static void release(void *p)
{
    // printf("test2 released\\n");
    [class_name] *p2 = ([class_name] *)p;
    delete p2;
}
[static_funcs]
};`

function GenerateVariable(name, type, variable, class_name) {
    if (type == "string") variable.h_define += "\n    std::string %s;".format(name)
    else if (type.substring(0, 12) == "NUMBER_TYPE_") variable.h_define += "\n    %s %s;".format(type, name)
    else if (InterfaceList.GetValue(type)) variable.h_define += "\n    %s %s;".format(type, name)
    else if (type.indexOf("Array<") == 0) {
        let type2 = get_array_type(type)
        if (type2 == "string") type2 = "std::string"
        variable.h_define += "\n    std::vector<%s> %s;".format(type2, name)
    }
    else
        print(`
---- GenerateVariable fail %s,%s ----
`.format(name, type))
    //todo
    variable.middle_value += `
    static napi_value getvalue_%s(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        %s *p = (%s *)pxt->UnWarpInstance();
        napi_value result;
        `.format(name, class_name, class_name) + c_to_js("p->" + name, type, "result") + `
        delete pxt;
        return result;
    }
    static napi_value setvalue_%s(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        %s *p = (%s *)pxt->UnWarpInstance();
        `.format(name, class_name, class_name) + js_to_c("p->" + name, "pxt->GetArgv(0)", type) + `
        return nullptr;
    }
`
}

function GenerateInterface(name, data, in_namespace) {
    let impl_h = ""
    let impl_cpp = ""
    let middle_func = ""
    let middle_init = ""
    let variable = {
        h_define: "",
        middle_value: "",
    }

    middle_init = `{\n    std::map<const char *,std::map<const char *,napi_callback>> valueList;`
    for (let i in data.value) {
        let v = data.value[i]
        // print(v)
        GenerateVariable(v.name, v.type, variable, name)
        middle_init += `
    valueList["%s"]["getvalue"]=%s%s_middle::getvalue_%s;
    valueList["%s"]["setvalue"]=%s%s_middle::setvalue_%s;`.format(v.name, in_namespace, name, v.name, v.name, in_namespace, name, v.name)
    }
    impl_h += variable.h_define
    middle_func += variable.middle_value
    // 
    // 
    middle_init += `\n    std::map<const char *, napi_callback> funcList;`
    for (let i in data.function) {
        let func = data.function[i]
        // print(func)
        let tmp;
        switch (func.type) {
            case FuncType.DIRECT:
                tmp = GenerateFunctionDirect(func, name)
                break;
            case FuncType.SYNC:
                tmp = GenerateFunctionSync(func, name)
                break
            case FuncType.ASYNC:
            case FuncType.PROMISE:
                tmp = GenerateFunctionAsync(func, name)
                break
            default:
                    //to do yichangchuli
                    return
        }
        middle_func += tmp[0]
        impl_h += tmp[1]
        impl_cpp += tmp[2]

        middle_init += `\n    funcList["%s"] = %s%s_middle::%s_middle;`.format(func.name, in_namespace, name, func.name)
    }

    let self_ns=""
    if (in_namespace.length > 0) {
        let nsl = in_namespace.split("::")
        nsl.pop()
        if (nsl.length >= 2) {
            self_ns = ", "+nsl[nsl.length - 1]
        }
    }
    middle_init += `\n    pxt->DefineClass("%s", %s%s_middle::constructor, valueList ,funcList%s);\n}\n`.format(name, in_namespace, name, self_ns)

    let result = {
        impl_h: `
class %s {
public:%s
};`.format(name, impl_h),
        impl_cpp: impl_cpp,
        middle_body: middle_body_tmplete.ReplaceAll("[class_name]", name).ReplaceAll("[static_funcs]", middle_func),
        middle_init: middle_init
    }
    // print("----------------------------")
    // print(result.impl_h)
    // print("----------------------------")
    // print(result.impl_cpp)
    // print("----------------------------")
    // print(result.middle_body)
    return result
}

module.exports = {
    GenerateInterface
}