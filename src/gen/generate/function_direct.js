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
const { replaceAll, getPrefix } = require("../tools/tool");
const { paramGenerate } = require("./param_generate");
const { returnGenerate } = require("./return_generate");

/**
 * 结果直接返回
 */
let funcDirectMiddleHTemplete = `
struct [funcName]_value_struct {[valueIn][valueOut]
};

[static_define]napi_value [funcName]_middle(napi_env env, napi_callback_info info);
`

let funcDirectTemplete = `
napi_value [middleClassName][funcName]_middle(napi_env env, napi_callback_info info)
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
    napi_value result = nullptr;
    [valuePackage][optionalParamDestory]
    delete vio;
    if (pxt->IsFailed()) {
        result = pxt->GetError();
    }
    delete pxt; // release
    return result;
}`

let cppTemplate = `
bool %s%s(%s)
{
    return true;
}
`

function removeEndlineEnter(value) {
    for (var i = value.length; i > 0; i--) {
        let len = value.length
        if (value.substring(len - 1, len) == "\n" || value.substring(len - 1, len) == ' ') {
            value = value.substring(0, len - 1)
        } else {
            value = '    ' + value
            break
        }
    }
    return value
}

function generateFunctionDirect(func, data, className, implHVariable) {
    let middleFunc = replaceAll(funcDirectTemplete, "[funcName]", func.name)
    let middleH = ""
    if (func.name != "constructor") {
      middleH = replaceAll(funcDirectMiddleHTemplete, "[funcName]", func.name)
    }

    let isClassresult = isClassFunc(className, middleFunc, middleH);
    middleFunc = isClassresult[0]
    middleH = isClassresult[1]
    // 定义输入,定义输出,解析,填充到函数内,输出参数打包,impl参数定义,可选参数内存释放
    let param = { valueIn: "", valueOut: "", valueCheckout: "", valueFill: "",
        valuePackage: "", valueDefine: "", optionalParamDestory: "" }

    for (let i in func.value) {
        paramGenerate(i, func.value[i], param, data)
    }
    let returnInfo = {type: func.ret, optional: false}
    if (func.ret == 'void') {
        param.valuePackage = "result = pxt->UndefinedValue();";
    } else {
        returnGenerate(returnInfo, param, data)
    }
    middleH = replaceValueOut(middleH, param);

    param.valueCheckout = removeEndlineEnter(param.valueCheckout)
    middleFunc = replaceAll(middleFunc, "[valueCheckout]", param.valueCheckout) // # 输入参数解析
    let callFunc = "%s%s(%s);".format(className == null ? "" : "pInstance->", func.name, param.valueFill)
    middleFunc = replaceAll(middleFunc, "[callFunc]", callFunc) // 执行
    middleFunc = replaceAll(middleFunc, "[valuePackage]", param.valuePackage) // 输出参数打包
    if (param.optionalParamDestory == "") {
        middleFunc = replaceAll(middleFunc, "[optionalParamDestory]", param.optionalParamDestory) // 可选参数内存释放
    } else {
        middleFunc = replaceAll(middleFunc, "[optionalParamDestory]", "\n    " + param.optionalParamDestory) // 可选参数内存释放
    }
    let prefixArr = getPrefix(data, func)
    let implH = ""
    let implCpp = ""
    if (!func.isParentMember) {
        if (func.name == 'constructor') {
            // 构造函数去掉&或* (在内部去掉较麻烦，生成后统一去除)
            implH = constructorFunc(param, implHVariable, implH, prefixArr, className);
            middleFunc = ""
        } else {
            // 只有类/接口自己的成员方法需要在.h.cpp中生成，父类/父接口不需要
            implH = "\n%s%s%sbool %s(%s)%s;".format(
              prefixArr[0], prefixArr[1], prefixArr[2], func.name, param.valueDefine, prefixArr[3])
            implCpp = cppTemplate.format(className == null ? "" : className + "::", func.name, param.valueDefine)
        }   
    }
    return [middleFunc, implH, implCpp, middleH]
}

function replaceValueOut(middleH, param) {
    middleH = replaceAll(middleH, "[valueIn]", param.valueIn); // # 输入参数定义
    if (param.valueOut == "") {
        middleH = replaceAll(middleH, "[valueOut]", param.valueOut); // # 输出参数定义
    } else {
        middleH = replaceAll(middleH, "[valueOut]", "\n    " + param.valueOut); // # 输出参数定义
    }
    return middleH;
}

function isClassFunc(className, middleFunc, middleH) {
    if (className == null) {
        middleH = middleH.replaceAll("[static_define]", "");
        middleFunc = middleFunc.replaceAll("[unwarp_instance]", "");
        middleFunc = middleFunc.replaceAll("[middleClassName]", "");
    }
    else {
        middleH = middleH.replaceAll("[static_define]", "static ");
        middleFunc = middleFunc.replaceAll("[unwarp_instance]",
      `void *instPtr = pxt->UnWarpInstance();
    %s *pInstance = static_cast<%s *>(instPtr);`.format(className, className));
        middleFunc = middleFunc.replaceAll("[middleClassName]", className + "_middle" + "::");
  }
  return [middleFunc, middleH];
}

function constructorFunc(param, implHVariable, implH, prefixArr, className) {
    let valueDef = param.valueDefine;
    if (valueDef.indexOf('&') > 0 || valueDef.indexOf('*') > 0) {
        let index = valueDef.indexOf('&');
        while (index > 0) {
            valueDef = valueDef.substring(0, index) + valueDef.substring(index + 1, valueDef.length);
            index = valueDef.indexOf('&');
        }
        index = valueDef.indexOf('*');
        while (index > 0) {
            valueDef = valueDef.substring(0, index) + valueDef.substring(index + 1, valueDef.length);
            index = valueDef.indexOf('*');
        }
    }
    let body = valueDef.split(',');
    let result = [];
    let body2 = implHVariable.split(';');
    let result2 = [];
    for (let i = 0; i < body.length; i++) {
        let ii = body[i].lastIndexOf(' ');
        result[i] = body[i].substring(ii + 1, body[i].length);
    }
    for (let k = 0; k < body2.length; k++) {
        let kk = body2[k].lastIndexOf(' ');
        result2[k] = body2[k].substring(kk + 1, body2[k].length);
    }
    let len = result.length;
    let costructorStr = '';
    for (let m = 0; m < len - 1; m++) {
        costructorStr += "%s(%s), ".format(result2[m], result[m]);
    }
    costructorStr += "%s(%s)".format(result2[len - 1], result[len - 1]);

    // 构造函数只在h文件中，cpp文件中不包含
    if (len > 0) {
        implH = "\n%s%s%s%s() {};".format(
          prefixArr[0], prefixArr[1], prefixArr[2], className);
        implH += "\n%s%s%s%s(%s) : %s {};".format(
          prefixArr[0], prefixArr[1], prefixArr[2], className, valueDef, costructorStr);
    } else {
        implH = "\n%s%s%s%s() {};".format(
          prefixArr[0], prefixArr[1], prefixArr[2], className);
    }
    return implH;
}

module.exports = {
    generateFunctionDirect
}