/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
// const { paramGenerate } = require("./param_generate");
// const { returnGenerate } = require("./return_generate");
const { NapiLog } = require("../tools/NapiLog");
const util = require('util');
const path = require('path')
const { writeFile } = require("../tools/tool");
const re = require("../tools/re");
const LENGTH = 10;
const TWO_DECIMAL = 2;

let cppTemplete = `
#include "napi/native_api.h"
[include_replace]
static napi_value [funcName](napi_env env, napi_callback_info info)
{
[body_replace]
}

EXTERN_C_START
static napi_value Init(napi_env env, napi_value exports)
{
    napi_property_descriptor desc[] = {
         [init_replace]
};
napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
return exports;
}
EXTERN_C_END

static napi_module demoModule = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = Init,
    .nm_modname = "entry",
    .nm_priv = ((void*)0),
    .reserved = { 0 },
};

extern "C" __attribute__((constructor)) void RegisterEntryModule(void)
{
    napi_module_register(&demoModule);
}`

let bodyTemplete = `
   size_t requireArgc = [param_length];
   size_t argc = [param_length];
   napi_value args[[param_length]] = {nullptr};
   napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);
   [getParme_replace]
   [return_type_define]
   // Todo
   // eg. res = value0 + value1;
   napi_value result;
   [return_replace]
   return result;
`

// 暂不考虑interface情况
function generateDirectFunction(params, tsFuncName, indexPath) {
    let funcInfo = {
        "name": "",
        "params": [],
        "retType": "",
    }
    // 获取.h文件中的头文件
    let includes = params.includes
    let includes_replace = ''
    for(let i in includes) {
        includes_replace += util.format('#include %s\n', includes[i])
    }
    // console.info("includes_replace: " + includes_replace)

    // 获取注册的方法名字 (只读取了一个方法 当前只支持一个方法的转换)
    funcInfo.name = params.functions[0].name
    let funcName_replace = funcInfo.name.substring(0,1).toUpperCase() + funcInfo.name.substring(1,funcInfo.name.length)
    // console.info("funcName_replace: " + funcName_replace)

    // 方法的注册
    let init_replace = util.format('{ "%s" , nullptr, %s, nullptr, nullptr, nullptr, napi_default, nullptr }', tsFuncName, funcName_replace)
    // console.info("init_replace: " + init_replace)

    // 分析方法
    funcInfo.retType = params.functions[0].rtnType
    let parseParams =  params.functions[0].parameters
    for(let i = 0; i < parseParams.length; ++i) {
        let param = createParam(parseParams[i])
        funcInfo.params.push(param)
    }
    // 生成
    let paramGenTemplete = `
   napi_valuetype valuetype%s;
   napi_typeof(env, args[%s], &valuetype%s);
   %s value%s;
   [getParam_replace]
   `
    let paramGenResult = ''
    // napi 获取参数
    for(let i = 0; i < funcInfo.params.length; i++) {
        let paramGen = util.format(paramGenTemplete, i, i, i, funcInfo.params[i].type, i)
        if (funcInfo.params[i].type === 'double' || funcInfo.params[i].type === 'double_t' || funcInfo.params[i].type === 'float') {
            let getParam = util.format('napi_get_value_double(env, args[%s], &value%s);', i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        } else if (funcInfo.params[i].type === 'uint32_t') {
            let getParam = util.format('napi_get_value_uint32(env, args[%s], &value%s);', i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        } else if (funcInfo.params[i].type === 'int32_t') {
            let getParam = util.format('napi_get_value_int32(env, args[%s], &value%s);', i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        } else if (funcInfo.params[i].type === 'int64_t') {
            let getParam = util.format('napi_get_value_int64_t(env, args[%s], &value%s);', i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        } else if (funcInfo.params[i].type === 'bool') {
            let getParam = util.format('napi_get_value_bool(env, args[%s], &value%s);', i, i)
            paramGen = replaceAll(paramGen, '[getParam_replace]', getParam);
            paramGenResult += paramGen;
        }
    }
    // console.info("paramGenResult: " + paramGenResult)
    // 返回值处理
    let retGenResult = ''
    if (funcInfo.retType === 'uint32_t') {
        retGenResult = 'napi_create_uint32(env, res, &result);'
    } else if (funcInfo.retType === 'double' || funcInfo.retType === 'double_t' || funcInfo.retType === 'float') {
        retGenResult = 'napi_create_double(env, res, &result);'
    } else if (funcInfo.retType === 'int32_t') {
        retGenResult = 'napi_create_int32(env, res, &result);'
    } else if (funcInfo.retType === 'int64_t') {
        retGenResult = 'napi_create_int64(env, res, &result);'
    } else if (funcInfo.retType === 'bool') {
        retGenResult = 'napi_get_boolean(env, res, &result);'
    }
    // console.info("retGenResult: " + retGenResult)

    let body_replace = replaceAll(bodyTemplete, '[param_length]', funcInfo.params.length)
    body_replace  = replaceAll(body_replace, '[getParme_replace]', paramGenResult)
    if(funcInfo.retType !== 'void') {
        body_replace  = replaceAll(body_replace, '[return_type_define]', funcInfo.retType + ' res;')
    } else {
        body_replace  = replaceAll(body_replace, '[return_type_define]', '')
    }
    body_replace  = replaceAll(body_replace, '[return_replace]', retGenResult)
    // console.info("body_replace: " + body_replace)

    let cppContent = replaceAll(cppTemplete, '[include_replace]', includes_replace)
    cppContent = replaceAll(cppContent, '[funcName]', funcName_replace)
    cppContent = replaceAll(cppContent, '[body_replace]', body_replace)
    cppContent = replaceAll(cppContent, '[init_replace]', init_replace)
    // console.info("Last cppContent: " + cppContent)

    // 将内容写入cpp文件
    let rootPath = path.resolve(indexPath, '..', '..', '..');
    let cppFilePath = path.join(rootPath, 'test.cpp');
    // console.info("cppFilePath: " + cppFilePath)
    writeFile(cppFilePath, cppContent)
}

function replaceAll(s, sfrom, sto) {
    while (s.indexOf(sfrom) >= 0) {
        s = s.replace(sfrom, sto)
    }
    return s;
}

function createParam(parseParamInfo) {
    let param = {
        "name": "",
        "type": ""
    }
    param.name = parseParamInfo.name
    param.type = parseParamInfo.type
    return param
}

module.exports = {
    generateDirectFunction
}