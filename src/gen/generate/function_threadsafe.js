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
const { replaceAll } = require("../tools/tool");
const re = require("../tools/re");
const { eventParamGenerate } = require("./param_generate");
const { returnGenerate } = require("./return_generate");
const { cToJs } = require("./return_generate");
const { jsonCfgList, isRegisterFunc, isUnRegisterFunc, getOnObjCallbackType, isOnObjCallback } = 
require("../tools/common");

let middleHTdSafeFuncTemplate = `
struct createThreadSafeFunc[funcName]_value_struct {
    std::string eventName;
};

napi_value createThreadSafeFunc[funcName]_middle(napi_env env, napi_callback_info info);
`
let middleHCallJsTemplate = `

`

/**
 * ThreadsafeFunc接口生成模板
 */
let threadsafeFuncTemplete = `
void threadSafeFuncCallJs[funcName](napi_env env, napi_value jsCallback, void *context, void *data)
{
    // to add user CallJs code
}
napi_value createThreadSafeFunc[funcName]_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed()) {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    struct createThreadSafeFunc[funcName]_value_struct *vio = new createThreadSafeFunc[funcName]_value_struct();

    const size_t argc = pxt->GetArgc();

    // 获取第一个参数，线程安全函数名称 get ThreadSafeFunc name
    pxt->SwapJs2CUtf8(pxt->GetArgv(XNapiTool::ZERO), vio->eventName);

   // 判断最后一个参数是否为回调函数类型
    napi_valuetype valueType = napi_undefined;
    napi_status status = napi_typeof(env, pxt->GetArgv(argc - 1), &valueType);
    if (status != napi_ok) {
        return nullptr;
    }
    if (valueType !=  napi_function) {
       printf("valueType is Err, not napi_function!");
       return nullptr;
    } 

   // create ThreadSafeFunc
    napi_threadsafe_function thraedsafeFunc;
    const size_t maxQueueSize = 0;  // 0 means no limited
    const size_t initialThreadCount = 1;
    napi_value name = pxt->GetArgv(XNapiTool::ZERO); //资源名称复用线程安全函数名称
    napi_create_threadsafe_function(env, pxt->GetArgv(argc - 1), nullptr,
    name, maxQueueSize, initialThreadCount, nullptr, nullptr, nullptr, threadSafeFuncCallJs[funcName], &thraedsafeFunc);
    pxt->RegistThreadsafeFunc(env, vio->eventName, thraedsafeFunc);
    napi_value result = pxt->UndefinedValue();
    delete vio;
    if (pxt->IsFailed()) {
        result = pxt->GetError();
    }
    delete pxt; // release
    return result;
}
`

function generateThreadsafeFunc(func, data, className) {
    let param = {
        valueIn: "", // 定义输入
        valueOut: "", // 定义输出
        valueCheckout: "", // 解析
        valueFill: "", // 填充到函数内
        valuePackage: "", // 输出参数打包
        valueDefine: "", // impl参数定义
        eventName:"", // 注册/去注册事件名称
        eventNameIsStr:false, // 注册/去注册事件名称是否在ts中为string类型
        optionalParamDestory: "" // 可选参数内存释放
    }


    let codeContext = {
        middleFunc: "",
        implH: "",
        implCpp: "",
        middleH: ""
    }
    // if (!isOnOffFuncExist(data, func.name)) {
    //     // 同一个ts文件中所有的on和off 接口只需要生成一份公共的native方法
    //     gennerateOnOffContext(codeContext, func, data, className, param)
    // }
    let name = func.name
    let preFix = 'createThreadSafeFunc'

    let postFix = name.substring(preFix.length, name.length)
    codeContext.middleFunc = replaceAll(threadsafeFuncTemplete, "[funcName]", postFix)
    codeContext.middleH = replaceAll(middleHTdSafeFuncTemplate, "[funcName]", postFix)
    
    return [codeContext.middleFunc, codeContext.implH, codeContext.implCpp, codeContext.middleH]
}

module.exports = {
    generateThreadsafeFunc
}