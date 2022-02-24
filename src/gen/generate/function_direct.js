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
const { replaceAll, print } = require("../tools/tool");
const { paramGenerate } = require("./param_generate");
const { returnGenerate } = require("./return_generate");

/**
 * 结果直接返回
 */
let funcDirectTemplete = `
struct [funcName]_value_struct {[valueIn]
    
    [valueOut]
};

[static_define]napi_value [funcName]_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed()) {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    [unwarp_instance]

    struct [funcName]_value_struct *vio = new [funcName]_value_struct();
    
    [valueCheckout]

    [callFunc]

    [valuePackage]

    delete vio;
    if (pxt->IsFailed()) {
        result = pxt->GetError();
    }
    delete pxt; // release
    return result;
}`

function generateFunctionDirect(func, className) {
    let middleFunc = replaceAll(funcDirectTemplete, "[funcName]", func.name)
    if (className == null) {
        middleFunc = middleFunc.replaceAll("[static_define]", "")
        middleFunc = middleFunc.replaceAll("[unwarp_instance]", "")
    }
    else {
        middleFunc = middleFunc.replaceAll("[static_define]", "static ")
        middleFunc = middleFunc.replaceAll("[unwarp_instance]",
            "%s *pInstance = (%s *)pxt->UnWarpInstance();".format(className, className))
    }
    let param = {
        valueIn: "",//定义输入
        valueOut: "",//定义输出

        valueCheckout: "",//解析
        valueFill: "",//填充到函数内
        valuePackage: "",//输出参数打包
        valueDefine: ""//impl参数定义
    }

    for (let i in func.value) {
        let v = func.value[i]
        paramGenerate(i, v.name, v.type, param)
    }

    returnGenerate(func.ret, param)

    middleFunc = replaceAll(middleFunc, "[valueIn]", param.valueIn)//  # 输入参数定义
    middleFunc = replaceAll(middleFunc, "[valueOut]", param.valueOut)//  # 输出参数定义

    middleFunc = replaceAll(middleFunc, "[valueCheckout]", param.valueCheckout)//  # 输入参数解析

    let callFunc = "%s%s(%s);".format(className == null ? "" : "pInstance->", func.name, param.valueFill)
    middleFunc = replaceAll(middleFunc, "[callFunc]", callFunc)//执行

    middleFunc = replaceAll(middleFunc, "[valuePackage]", param.valuePackage)//输出参数打包

    let implH = "\nbool %s(%s);".format(func.name, param.valueDefine)
    let implCpp = `
bool %s%s(%s)
{
    return true;
}
`.format(className == null ? "" : className + "::", func.name, param.valueDefine)

    return [middleFunc, implH, implCpp]
}

module.exports = {
    generateFunctionDirect
}