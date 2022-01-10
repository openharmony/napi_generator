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
//生成BUILD.gn
//生成x_napi_tool.h，生成x_napi_tool.cpp
const { ReplaceAll, print } = require("./tools/tool");
const { GenerateNamespace } = require("./generate/namespace");
const { WriteFile } = require("./tools/FileRW");
const re = require("./tools/re");
const { GenerateGYP } = require("./extend/binding_gyp");
const { GenerateGN } = require("./extend/build_gn");
const { GenerateBase } = require("./extend/x_napi_tool");
const { NumberIncrease } = require("./tools/common");

let module_cpp_tmplete = `\
#include <cstring>
#include <string>
#include <memory>
#include <vector>
#include <node_api.h>
#include "x_napi_tool.h"
#include "[impl_name].h"

#define NUMBER_JS_2_C(napi_v, type, dest)      \\
    if (typeid(type) == typeid(int32_t))       \\
        dest = pxt->SwapJs2CInt32(napi_v);     \\
    else if (typeid(type) == typeid(uint32_t)) \\
        dest = pxt->SwapJs2CUint32(napi_v);    \\
    else if (typeid(type) == typeid(int64_t))  \\
        dest = pxt->SwapJs2CInt64(napi_v);     \\
    else if (typeid(type) == typeid(double_t)) \\
        dest = pxt->SwapJs2CDouble(napi_v);

napi_value number_c_to_js(XNapiTool *pxt, const std::type_info &n, void *num)
{
    if (n == typeid(int32_t))
        return pxt->SwapC2JsInt32(*(int32_t *)num);
    else if (n == typeid(uint32_t))
        return pxt->SwapC2JsUint32(*(uint32_t *)num);
    else if (n == typeid(int64_t))
        return pxt->SwapC2JsInt64(*(int64_t *)num);
    else if (n == typeid(double_t))
        return pxt->SwapC2JsDouble(*(double_t *)num);
    return nullptr;
}
#define NUMBER_C_2_JS(pxt, n) \\
    number_c_to_js(pxt, typeid(n), &n)

[body_replace]

napi_value init(napi_env env, napi_value exports)
{
    std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, exports);

    [init_replace]

    return exports;
}

static napi_module g_[impl_name]_Module = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = init,
    .nm_modname = "",
    .nm_priv = ((void *)0),
    .reserved = {(void *)0},
};

extern "C" __attribute__((constructor)) void Register_[impl_name]_Module(void)
{
    napi_module_register(&g_[impl_name]_Module);
}
`

let impl_h_templete = `\
#ifndef IMPL_[impl_name_upper]_H
#define IMPL_[impl_name_upper]_H

#include <cstring>
#include <string>
#include <memory>
#include <vector>
#include <math.h>

[number_using]

[impl_h_detail]

#endif // IMPL_[impl_name_upper]_H
`

let impl_cpp_templete = `\
#include "[impl_name].h"

[impl_cpp_detail]
`

function GenerateAll(struct_of_ts, dest_dir) {
    let ns0 = struct_of_ts.declare_namespace[0];

    let result = GenerateNamespace(ns0.name, ns0.body)

    let number_using = ""
    for (let i = 1; i < NumberIncrease.Get(); i++) {
        number_using += "using NUMBER_TYPE_%d = uint32_t;\n".format(i)
    }

    let middle_cpp = ReplaceAll(module_cpp_tmplete, "[body_replace]", result.middle_body);
    middle_cpp = ReplaceAll(middle_cpp, "[init_replace]", result.middle_init);
    middle_cpp = ReplaceAll(middle_cpp, "[impl_name]", ns0.name);
    WriteFile(re.path_join(dest_dir, "%s_middle.cpp".format(ns0.name)), middle_cpp)

    let impl_h = ReplaceAll(impl_h_templete, "[impl_name_upper]", ns0.name.toUpperCase())
    impl_h = impl_h.ReplaceAll("[number_using]", number_using);
    impl_h = ReplaceAll(impl_h, "[impl_h_detail]", result.impl_h)
    WriteFile(re.path_join(dest_dir, "%s.h".format(ns0.name)), impl_h)

    let impl_cpp = impl_cpp_templete.ReplaceAll("[impl_name]", ns0.name)
    impl_cpp = impl_cpp.ReplaceAll("[impl_cpp_detail]", result.impl_cpp)
    WriteFile(re.path_join(dest_dir, "%s.cpp".format(ns0.name)), impl_cpp)


    GenerateGYP(dest_dir, ns0.name)//生成ubuntu下测试的编译脚本
    GenerateGN(dest_dir, ns0.name)//生成BUILD.gn for ohos
    GenerateBase(dest_dir)//x_napi_tool.h/cpp
    // print(middle_cpp)
}

module.exports = {
    GenerateAll
}