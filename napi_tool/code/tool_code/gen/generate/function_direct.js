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
const { ParamGenerate } = require("./param_generate");
const { ReturnGenerate } = require("./return_generate");
/**结果直接返回 */
let funcDirectTemplete = `
struct [funcName]_value_struct {[valueIn]
    
    [valueOut]
};

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

    [callFunc]

    [valuePackage]

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}`

function GenerateFunctionDirect(func, className) {
    //     this.len_to = 0
    //     // print(type, name, values, ret_type)
    let middleFunc = ReplaceAll(funcDirectTemplete, "[funcName]", func.name)
    if(className==null)
    {
        middleFunc=middleFunc.ReplaceAll("[static_define]","")
        middleFunc=middleFunc.ReplaceAll("[unwarp_instance]","")
    }
    else
    {
        middleFunc=middleFunc.ReplaceAll("[static_define]","static ")
        middleFunc=middleFunc.ReplaceAll("[unwarp_instance]","%s *pInstance = (%s *)pxt->UnWarpInstance();".format(className,className))
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
        ParamGenerate(i, v.name, v.type, param)
    }

    ReturnGenerate(func.ret, param)

    middleFunc = ReplaceAll(middleFunc, "[valueIn]", param.valueIn)//  # 输入参数定义
    middleFunc = ReplaceAll(middleFunc, "[valueOut]", param.valueOut)//  # 输出参数定义

    middleFunc = ReplaceAll(middleFunc, "[valueCheckout]", param.valueCheckout)//  # 输入参数解析

    let callFunc = "%s%s(%s);".format(className==null?"":"pInstance->",func.name, param.valueFill)
    middleFunc = ReplaceAll(middleFunc, "[callFunc]", callFunc)//执行

    middleFunc = ReplaceAll(middleFunc, "[valuePackage]", param.valuePackage)//输出参数打包

    //     if (type == (FuncType.ASYNC | FuncType.PROMISE)) {
    //         this.generate_valueOut(this.callback_type)
    //         middleFunc = ReplaceAll(middleFunc, "[call_static_func]",
    //             `
    // napi_value result = pxt->StartAsync(%s_execute, vio, %s_complete, pxt->GetArgc() == %s ? pxt->GetArgv(%d) : nullptr);`.format
    //                 (name, name, this.callback_offet + 1, this.callback_offet))
    //         middleFunc = ReplaceAll(middleFunc, "    delete vio;", "")
    //         middleFunc = ReplaceAll(middleFunc, "    delete pxt;// release", "")
    //         let ttt = ReplaceAll(codestring.func_promise, "[funcName]", name)
    //         let callFunc;

    //         if (cvs == null)
    //             callFunc = "%s::%s(%s);".format(this.declare_name, name, param["value_call"])
    //         else
    //             callFunc = "%s::%s(%s);".format(cvs[0], cvs[1], param["value_call"])
    //         // print(callFunc)
    //         ttt = ReplaceAll(ttt, "[call_static_func]", callFunc)
    //         print("=====1======")
    //         let ttt2 = "napi_value result = nullptr;\n%s".format(this.c_to_js("vio->out", this.callback_type, "result"))
    //         // print(this.callback_type)
    //         print("=====2======")
    //         ttt = ReplaceAll(ttt, "[promise_arg]", "%s    napi_value args[1] = {result,};".format(ttt2))
    //         middleFunc = middleFunc.replace("};", ttt)
    //     }
    //     else if (type == FuncType.SYNC) {
    //         this.generate_valueOut(this.callback_type)
    //         let callFunc;
    //         if (cvs == null)
    //             callFunc = "%s::%s(%s);".format(this.declare_name, name, param["value_call"])
    //         else
    //             callFunc = "%s::%s(%s);".format(cvs[0], cvs[1], param["value_call"])
    //         middleFunc = ReplaceAll(middleFunc, "[call_static_func]",
    //             `%s
    // {
    // napi_value result = nullptr;
    // %s
    // napi_value args[1] = {result};
    // pxt->SyncCallBack(pxt->GetArgv(%d), 1, args);}`.format(callFunc,
    //                 this.c_to_js("vio->out", this.callback_type, "result"),
    //                 this.callback_offet))
    //     }

    //     if (ret_type == "void" && type != (FuncType.ASYNC | FuncType.PROMISE))
    //         param["valuePackage"] = "napi_value result = XNapiTool::UndefinedValue(env);"

    //     middleFunc = ReplaceAll(middleFunc, "[valueOut]", param["valueOut"])
    //     if (type != (FuncType.ASYNC | FuncType.PROMISE))
    //         middleFunc = ReplaceAll(middleFunc, "[valuePackage]", param["valuePackage"])
    //     else
    //         middleFunc = ReplaceAll(middleFunc, "[valuePackage]", "")

    //     if (cvs == null) {
    let implH = "\nbool %s(%s);".format(func.name, param.valueDefine)
    let implCpp = `
bool %s%s(%s) {
    // TODO
    return true;
}
`.format(className==null?"":className+"::",func.name, param.valueDefine)

    return [middleFunc, implH, implCpp]
}

module.exports = {
    GenerateFunctionDirect
}