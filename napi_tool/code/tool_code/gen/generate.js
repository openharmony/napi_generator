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
const { generateNamespace } = require("./generate/namespace");
const { writeFile } = require("./tools/FileRW");
const re = require("./tools/re");
const { generateGYP } = require("./extend/binding_gyp");
const { generateGN } = require("./extend/build_gn");
const { generateBase } = require("./extend/x_napi_tool");
const { NumberIncrease } = require("./tools/common");

let moduleCppTmplete = `\
#include <cstring>
#include <string>
#include <memory>
#include <vector>
#include <node_api.h>
#include "x_napi_tool.h"
#include "[implName].h"

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

static napi_module g_[implName]_Module = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = init,
    .nm_modname = "",
    .nm_priv = ((void *)0),
    .reserved = {(void *)0},
};

extern "C" __attribute__((constructor)) void Register_[implName]_Module(void)
{
    napi_module_register(&g_[implName]_Module);
}
`

let implHTemplete = `\
#ifndef IMPL_[impl_name_upper]_H
#define IMPL_[impl_name_upper]_H

#include <cstring>
#include <string>
#include <memory>
#include <vector>
#include <math.h>

[numberUsing]

[implH_detail]

#endif // IMPL_[impl_name_upper]_H
`

let implCppTemplete = `\
#include "[implName].h"

[implCpp_detail]
`

function generateAll(structOfTs, destDir) {
    let ns0 = structOfTs.declareNamespace[0];

    let result = generateNamespace(ns0.name, ns0.body)

    let numberUsing = ""
    for (let i = 1; i < NumberIncrease.get(); i++) {
        numberUsing += "using NUMBER_TYPE_%d = uint32_t;\n".format(i)
    }

    let middleCpp = ReplaceAll(moduleCppTmplete, "[body_replace]", result.middleBody);
    middleCpp = ReplaceAll(middleCpp, "[init_replace]", result.middleInit);
    middleCpp = ReplaceAll(middleCpp, "[implName]", ns0.name);
    writeFile(re.pathJoin(destDir, "%s_middle.cpp".format(ns0.name)), middleCpp)

    let implH = ReplaceAll(implHTemplete, "[impl_name_upper]", ns0.name.toUpperCase())
    implH = implH.ReplaceAll("[numberUsing]", numberUsing);
    implH = ReplaceAll(implH, "[implH_detail]", result.implH)
    writeFile(re.pathJoin(destDir, "%s.h".format(ns0.name)), implH)

    let implCpp = implCppTemplete.ReplaceAll("[implName]", ns0.name)
    implCpp = implCpp.ReplaceAll("[implCpp_detail]", result.implCpp)
    writeFile(re.pathJoin(destDir, "%s.cpp".format(ns0.name)), implCpp)


    generateGYP(destDir, ns0.name)//生成ubuntu下测试的编译脚本
    generateGN(destDir, ns0.name)//生成BUILD.gn for ohos
    generateBase(destDir)//x_napi_tool.h/cpp
    // print(middleCpp)
}

module.exports = {
    generateAll
}