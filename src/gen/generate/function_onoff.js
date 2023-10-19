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

/**
 * on和off接口生成模板
 */
let funcOnOffTemplete = `
struct [funcName]_value_struct {
    std::string eventName;
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
    pxt->SwapJs2CUtf8(pxt->GetArgv(XNapiTool::ZERO), vio->eventName);
    [handleRegist]
    [instance][funcName](vio->eventName);
    napi_value result = pxt->UndefinedValue();
    delete vio;
    if (pxt->IsFailed()) {
        result = pxt->GetError();
    }
    delete pxt; // release
    return result;
}
`

let middleAsyncCallbackTemplate = `
void [eventNames]AsyncCallback(const std::string &eventName, [callback_param_type])
{
	if(XNapiTool::asyncFuncs_.count(eventName) <= 0) {
        return;
    }
	AsyncFunc *pAsyncFuncs = &XNapiTool::asyncFuncs_[eventName];
	napi_value exports = nullptr;
	XNapiTool *pxt = std::make_unique<XNapiTool>(pAsyncFuncs->env_, exports).release();
    napi_value result = nullptr;
    napi_status status = napi_create_array(pAsyncFuncs->env_, &result);
    if (status != napi_ok) {
      return;  // napi数组创建失败
    }
    [native_return_define]
    [native_return]
    [value_set_array]
	XNapiTool::CallAsyncFunc(pAsyncFuncs, result);
	delete pxt;
}
`

let middleEventCallbakTemplate = `
void [eventName]Callback([callback_param_type]) {
  struct on_value_struct *vio = new on_value_struct();
	[eventName]AsyncCallback(vio->eventName, [callback_param_name]);
  delete vio;
}
`
let implHEventCallbakTemplate = `
void [eventName]Callback([callback_param_type]);
`

function isOnTypeExist(onTypeList, newType) {
    if (!onTypeList) {
        return false
    }

    for (var i in onTypeList) {
        if (onTypeList[i] == newType) {
            return true
        }
    }
    return false
}

function addOnTypeToList(data, newType) {
    if (!data.onTypeList) {
        data.onTypeList = []
    }

    data.onTypeList.push(newType)
}

function isOnOffFuncExist(data, funcName) {
    return data.onOffList && data.onOffList.indexOf(funcName) > -1
}

function addOnOffFunc(data, funcName) {
    if (!data.onOffList) {
        data.onOffList = []
    }
    data.onOffList.push(funcName)
}

function gennerateOnOffContext(codeContext, func, data, className, param) {
    codeContext.middleFunc = replaceAll(funcOnOffTemplete, "[funcName]", func.name)
    if (className == null) {
        codeContext.middleFunc = codeContext.middleFunc.replaceAll("[static_define]", "")
        codeContext.middleFunc = codeContext.middleFunc.replaceAll("[unwarp_instance]", "")
    }
    else {
        codeContext.middleFunc = codeContext.middleFunc.replaceAll("[static_define]", "static ")
        codeContext.middleFunc = codeContext.middleFunc.replaceAll("[unwarp_instance]",
            `void *instPtr = pxt->UnWarpInstance();
    %s *pInstance = static_cast<%s *>(instPtr);`.format(className, className))
    }
    let instancePtr = "%s".format(className == null ? "" : "pInstance->")
    codeContext.middleFunc = replaceAll(codeContext.middleFunc, "[instance]", instancePtr) //执行

    let registLine = func.name == 'on' ? "pxt->RegistAsyncFunc(vio->eventName, pxt->GetArgv(XNapiTool::ONE));" 
        : "pxt->UnregistAsyncFunc(vio->eventName);"
        codeContext.middleFunc = replaceAll(codeContext.middleFunc, "[handleRegist]", registLine) //注册/去注册event

        codeContext.implH += "\nbool %s(%s);".format(func.name, param.valueDefine)
        codeContext.implCpp += `
bool %s%s(%s)
{
return true;
}
`.format(className == null ? "" : className + "::", func.name, param.valueDefine)

    addOnOffFunc(data, func.name)
}

function gennerateEventCallback(codeContext, data, param) {
    let params = '';        // 回调的一个或者多个参数
    let useParams = '';     // 使用回调的一个或者多个参数
    let nativeReturn = ''
    let resultDefine = ''
    let valueSetArray = ''
    for (let i = 0; i < param.callback.length; i++) {
        returnGenerate(param.callback[i], param, data, i)
        let paramType = param.valueOut.substring(0, param.valueOut.length - "out;".length)  // 待修改
        paramType = re.replaceAll(paramType, " ", "")
        let realParamType = paramType.substring(0, 12) == "NUMBER_TYPE_" ? "uint32_t" : paramType  // 待修改
        let tag = i == param.callback.length - 1? '' : ', '
        params += realParamType + ' &valueIn' + i + tag   // 定义回调函数输入的参数
        useParams += 'valueIn' + i + tag  // 使用回调函数输入的参数
        
       // if (!isOnTypeExist(data.onTypeList, realParamType)) {
            // 为每种callback参数类型的on方法生成一个统一回调方法
            resultDefine +=  'napi_value result%d = nullptr;\n    '.format(i)
            nativeReturn += cToJs("valueIn" + i, param.callback[i].type, "result" + i) + '\n'   // 待修改
            valueSetArray += 'napi_set_element(pAsyncFuncs->env_, result, %d, result%d);\n    '.format(i, i)
            addOnTypeToList(data, realParamType)
       // }
    }
    let callbackFunc = middleAsyncCallbackTemplate
    callbackFunc = replaceAll(middleAsyncCallbackTemplate, "[eventNames]", param.eventName)
    callbackFunc = replaceAll(callbackFunc, "[callback_param_type]", params)
    callbackFunc = replaceAll(callbackFunc, "[native_return_define]", resultDefine)
    callbackFunc = replaceAll(callbackFunc, "[native_return]", nativeReturn)
    callbackFunc = replaceAll(callbackFunc, "[callback_param_length]", param.callback.length)
    callbackFunc = replaceAll(callbackFunc, "[value_set_array]", valueSetArray)
    codeContext.middleFunc += callbackFunc

     // 为每个on的event事件生成回调方法
     let middleEventCallBack = replaceAll(middleEventCallbakTemplate, "[eventName]", param.eventName)
     middleEventCallBack = replaceAll(middleEventCallBack, "[callback_param_name]", useParams)
     middleEventCallBack = replaceAll(middleEventCallBack, "[callback_param_type]", params)
     codeContext.middleFunc += middleEventCallBack;

     // 为每个on的event事件生成回调接口供用户侧使用
     let implHCallBack = replaceAll(implHEventCallbakTemplate, "[eventName]", param.eventName)
     implHCallBack = replaceAll(implHCallBack, "[callback_param_type]", params)
     codeContext.implH += implHCallBack
}

function generateFunctionOnOff(func, data, className) {
    let param = {
        valueIn: "", // 定义输入
        valueOut: "", // 定义输出
        valueCheckout: "", // 解析
        valueFill: "", // 填充到函数内
        valuePackage: "", // 输出参数打包
        valueDefine: "", // impl参数定义
        eventName:"", // 注册/去注册事件名称
        optionalParamDestory: "", // 可选参数内存释放
        callback: []  // 回调函数参数
    }

    for (let i in func.value) {
        eventParamGenerate(i, func.value[i], param, data)
    }

    let codeContext = {
        middleFunc: "",
        implH: "",
        implCpp: ""
    }
    if (!isOnOffFuncExist(data, func.name)) {
        // 同一个ts文件中所有的on和off 接口只需要生成一份公共的native方法
        gennerateOnOffContext(codeContext, func, data, className, param)
    }

    if (func.name == 'on') {
        // 为每个on接口同步生成eventCallback方法供用户回调使用
        gennerateEventCallback(codeContext, data, param)
    }

    return [codeContext.middleFunc, codeContext.implH, codeContext.implCpp]
}

module.exports = {
    generateFunctionOnOff
}