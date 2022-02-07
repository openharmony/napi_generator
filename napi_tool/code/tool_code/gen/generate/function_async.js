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
const { ReplaceAll, print } = require("../tools/tool");
const { paramGenerate } = require("./param_generate");
const { returnGenerate } = require("./return_generate");

/**
 * 结果异步返回Async|Promise
 */
let funcAsyncTemplete = `
struct [funcName]_value_struct {[valueIn]
    
    [valueOut]
};

[static_define]void [funcName]_execute(XNapiTool *pxt, void *data)
{
    [funcName]_value_struct *vio = ([funcName]_value_struct *)data;
    [checkout_async_instance]

    [callFunc]
}

[static_define]void [funcName]_complete(XNapiTool *pxt, void *data)
{
    [funcName]_value_struct *vio = ([funcName]_value_struct *)data;
    
    [valuePackage]
    
    {
        napi_value args[1] = {result};
        pxt->FinishAsync(1, args);
    }

    delete vio;
}

[static_define]napi_value [funcName]_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    [unwarp_instance]

    struct [funcName]_value_struct *vio=new [funcName]_value_struct();
    
    [valueCheckout]

    [start_async]

    if (pxt->IsFailed())
        result = pxt->GetError();
    return result;
}`

function generateFunctionAsync(func, className) {
    //     this.len_to = 0
    //     // print(type, name, values, ret_type)
    let middleFunc = ReplaceAll(funcAsyncTemplete, "[funcName]", func.name)
    if (className == null) {
        middleFunc = middleFunc.ReplaceAll("[static_define]", "")
        middleFunc = middleFunc.ReplaceAll("[unwarp_instance]", "")
        middleFunc = middleFunc.ReplaceAll("[checkout_async_instance]", "")
    }
    else {
        middleFunc = middleFunc.ReplaceAll("[static_define]", "static ")
        middleFunc = middleFunc.ReplaceAll("[unwarp_instance]",
            `pxt->SetAsyncInstance(pxt->UnWarpInstance());`)
        middleFunc = middleFunc.ReplaceAll("[checkout_async_instance]",
            "%s *pInstance = (%s *)pxt->GetAsyncInstance();".format(className, className))
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

    returnGenerate(param.callback.type, param)

    middleFunc = ReplaceAll(middleFunc, "[valueIn]", param.valueIn)//  # 输入参数定义
    middleFunc = ReplaceAll(middleFunc, "[valueOut]", param.valueOut)//  # 输出参数定义

    middleFunc = ReplaceAll(middleFunc, "[valueCheckout]", param.valueCheckout)//  # 输入参数解析

    middleFunc = ReplaceAll(middleFunc, "[start_async]", `
    napi_value result = \
pxt->StartAsync(%s_execute, vio, %s_complete, pxt->GetArgc() == %s ? pxt->GetArgv(%d) : nullptr);`.format(func.name,
        func.name, parseInt(param.callback.offset) + 1, param.callback.offset))// 注册异步调用

    let callFunc = "%s%s(%s);".format(className == null ? "" : "pInstance->", func.name, param.valueFill)
    middleFunc = ReplaceAll(middleFunc, "[callFunc]", callFunc)//执行

    middleFunc = ReplaceAll(middleFunc, "[valuePackage]", param.valuePackage)//输出参数打包

    let implH = "\nbool %s(%s);".format(func.name, param.valueDefine)
    let implCpp = `
bool %s%s(%s) {
    return true;
}
`.format(className == null ? "" : className + "::", func.name, param.valueDefine)

    return [middleFunc, implH, implCpp]
}

module.exports = {
    generateFunctionAsync
}