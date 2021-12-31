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
/**结果异步返回Async|Promise */
let func_async_templete = `
struct [func_name]_value_struct {[value_in]
    
    [value_out]
};

[static_define]void [func_name]_execute(XNapiTool *pxt, void *data)
{
    [func_name]_value_struct *vio = ([func_name]_value_struct *)data;
    [checkout_async_instance]

    [call_func]
}

[static_define]void [func_name]_complete(XNapiTool *pxt, void *data)
{
    [func_name]_value_struct *vio = ([func_name]_value_struct *)data;
    
    [value_package]
    
    {
        napi_value args[1] = {result};
        pxt->FinishAsync(1, args);
    }

    delete vio;
}

[static_define]napi_value [func_name]_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    [unwarp_instance]

    struct [func_name]_value_struct *vio=new [func_name]_value_struct();
    
    [value_checkout]

    [start_async]

    if (pxt->IsFailed())
        result = pxt->GetError();
    return result;
}`

function GenerateFunctionAsync(func, class_name) {
    //     this.len_to = 0
    //     // print(type, name, values, ret_type)
    let middle_func = ReplaceAll(func_async_templete, "[func_name]", func.name)
    if (class_name == null) {
        middle_func = middle_func.ReplaceAll("[static_define]", "")
        middle_func = middle_func.ReplaceAll("[unwarp_instance]", "")
        middle_func = middle_func.ReplaceAll("[checkout_async_instance]", "")
    }
    else {
        middle_func = middle_func.ReplaceAll("[static_define]", "static ")
        middle_func = middle_func.ReplaceAll("[unwarp_instance]", `pxt->SetAsyncInstance(pxt->UnWarpInstance());`)
        middle_func = middle_func.ReplaceAll("[checkout_async_instance]", "%s *pInstance = (%s *)pxt->GetAsyncInstance();".format(class_name, class_name))
    }
    let param = {
        value_in: "",//定义输入
        value_out: "",//定义输出

        value_checkout: "",//解析
        value_fill: "",//填充到函数内
        value_package: "",//输出参数打包
        value_define: ""//impl参数定义
    }

    for (let i in func.value) {
        let v = func.value[i]
        ParamGenerate(i, v.name, v.type, param)
    }

    // ReturnGenerate(func.ret, param)
    ReturnGenerate(param.callback.type, param)

    middle_func = ReplaceAll(middle_func, "[value_in]", param.value_in)//  # 输入参数定义
    middle_func = ReplaceAll(middle_func, "[value_out]", param.value_out)//  # 输出参数定义

    middle_func = ReplaceAll(middle_func, "[value_checkout]", param.value_checkout)//  # 输入参数解析

    middle_func = ReplaceAll(middle_func, "[start_async]", `
    napi_value result = \
pxt->StartAsync(%s_execute, vio, %s_complete, pxt->GetArgc() == %s ? pxt->GetArgv(%d) : nullptr);`.format(func.name,
        func.name, parseInt(param.callback.offset) + 1, param.callback.offset))// 注册异步调用

    let call_func = "%s%s(%s);".format(class_name == null ? "" : "pInstance->", func.name, param.value_fill)
    middle_func = ReplaceAll(middle_func, "[call_func]", call_func)//执行

    middle_func = ReplaceAll(middle_func, "[value_package]", param.value_package)//输出参数打包

    //         middle_func = ReplaceAll(middle_func, "    delete vio;", "")
    //         middle_func = ReplaceAll(middle_func, "    delete pxt;// release", "")
    //         let ttt = ReplaceAll(codestring.func_promise, "[func_name]", name)
    //         let call_func;

    //         if (cvs == null)
    //             call_func = "%s::%s(%s);".format(this.declare_name, name, param["value_call"])
    //         else
    //             call_func = "%s::%s(%s);".format(cvs[0], cvs[1], param["value_call"])
    //         // print(call_func)
    //         ttt = ReplaceAll(ttt, "[call_static_func]", call_func)
    //         print("=====1======")
    //         let ttt2 = "napi_value result = nullptr;\n%s".format(this.c_to_js("vio->out", this.callback_type, "result"))
    //         // print(this.callback_type)
    //         print("=====2======")
    //         ttt = ReplaceAll(ttt, "[promise_arg]", "%s    napi_value args[1] = {result,};".format(ttt2))
    //         middle_func = middle_func.replace("};", ttt)
    //     }


    //     if (ret_type == "void" && type != (FuncType.ASYNC | FuncType.PROMISE))
    //         param["value_package"] = "napi_value result = XNapiTool::UndefinedValue(env);"

    //     middle_func = ReplaceAll(middle_func, "[value_out]", param["value_out"])
    //     if (type != (FuncType.ASYNC | FuncType.PROMISE))
    //         middle_func = ReplaceAll(middle_func, "[value_package]", param["value_package"])
    //     else
    //         middle_func = ReplaceAll(middle_func, "[value_package]", "")

    //     if (cvs == null) {
    let impl_h = "\nbool %s(%s);".format(func.name, param.value_define)
    let impl_cpp = `
bool %s%s(%s) {
    // TODO
    return true;
}
`.format(class_name == null ? "" : class_name + "::", func.name, param.value_define)

    return [middle_func, impl_h, impl_cpp]
}

module.exports = {
    GenerateFunctionAsync
}