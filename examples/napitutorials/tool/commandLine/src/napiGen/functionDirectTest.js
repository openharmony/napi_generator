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
const { NapiLog } = require("../tools/NapiLog");
const util = require('util');
const { generateRandomInteger } = require("../tools/tool");
const path = require('path')
const fs = require("fs");
const LENGTH = 10;
const TWO_DECIMAL = 2;
const MODTWO = 2;

// 随机生成浮点数值
function generateRandomArbitrary(min, max, fixed) {
    let random = (Math.random() * (max - min) + min).toFixed(fixed);
    return parseFloat(random);
}

// 随机生成布尔值
function generateRandomBoolValue() {
    let randomBool = false;
    if (generateRandomInteger(0, LENGTH) % MODTWO === 0) {
        randomBool = true;
    }
    return randomBool;
}

// 随机生成字符串
function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function generateFuncTestCase(params, funcIndex, tsFuncName, abilityTestTemplete) {
    let funcInfo = {
        "name": "",
        "params": [],
        "retType": "",
    }
    funcInfo.name = params.functions[funcIndex].name
    let parseParams =  params.functions[funcIndex].parameters
    for(let i = 0; i < parseParams.length; ++i) {
        let param = createParam(parseParams[i])
        funcInfo.params.push(param)
    }
    funcInfo.retType = params.functions[funcIndex].rtnType
    let funcParamDefine = ''
    let funcParamUse = ''
    // 判断函数有几个参数，依次给参数赋值
    for(let i = 0; i < funcInfo.params.length; i++) {
        if (getTestType(funcInfo.params[i].type) === 'int') {
            funcParamDefine += util.format('let %s = %s\n', funcInfo.params[i].name, generateRandomInteger(0, LENGTH))
            funcParamUse += funcInfo.params[i].name + ', '
        } else if (getTestType(funcInfo.params[i].type) === 'float') {
            funcParamDefine += util.format('let %s = %s\n', funcInfo.params[i].name, generateRandomArbitrary(0, LENGTH, TWO_DECIMAL))
            funcParamUse += funcInfo.params[i].name + ', '
        } else if (getTestType(funcInfo.params[i].type) === 'bool') {
            funcParamDefine += util.format('let %s = %s\n', funcInfo.params[i].name, generateRandomBoolValue())
            funcParamUse += funcInfo.params[i].name + ', '
        } else if (getTestType(funcInfo.params[i].type) === 'string') {
            funcParamDefine += util.format('let %s = "%s"\n', funcInfo.params[i].name, generateRandomString(LENGTH))
            funcParamUse += funcInfo.params[i].name + ', '
        } 
    }
    // 去除调用参数的最后一个','
    let index = funcParamUse.lastIndexOf(', ');
    funcParamUse = funcParamUse.substring(0, index);
    let callFunc = ''
    // 调用函数
    if (getJsType(funcInfo.retType) !== 'void') {
      callFunc = util.format('      let result: %s = testNapi.%s(%s)\n', getJsType(funcInfo.retType), tsFuncName, funcParamUse)
    } else {
      callFunc = util.format('      testNapi.%s(%s)\n', tsFuncName, funcParamUse)
    }
    // 加 hilog 打印
    let hilogContent = util.format('      hilog.info(0x0000, "testTag", "Test NAPI %s: ", result);', tsFuncName)
    let func_test_replace = funcParamDefine + callFunc + hilogContent
    // 替换test_case_name
    let funcTestContent =  replaceAll(abilityTestTemplete,'[func_direct_testCase]', func_test_replace)
    funcTestContent = replaceAll(funcTestContent, '[test_case_name]', tsFuncName)

    return funcTestContent
}

function replaceAll(s, sfrom, sto) {
    while (s.indexOf(sfrom) >= 0) {
        s = s.replace(sfrom, sto)
    }
    return s;
}

function getTestType(type) {
    // 去掉const 和 *
    type = type.replaceAll('const', '').replaceAll('*', '').trim()
    if (type === 'uint32_t' || type === 'int32_t' || type === 'int16_t' ||
        type === 'int64_t' || type === 'int' || type === 'size_t') {
        return 'int'
    } else if (type === 'double_t' || type === 'double' || type === 'float') {
        return 'float'
    } else if (type === 'bool') {
        return 'bool'
    } else if (type === 'std::string' || type.indexOf('char') >= 0) {
        return 'string'
    }
}

function getJsType(type) {
    // 去掉const 和 *
    type = type.replaceAll('const', '').replaceAll('*', '').trim()
    if (type === 'uint32_t' || type === 'int32_t' || type === 'int16_t' || type === 'int64_t' ||
        type === 'int' || type === 'double_t' || type === 'double' || type === 'float' || type === 'size_t') {
        return 'number'
    } else if (type.indexOf('char') >= 0 || type === 'std::string') {
        return 'string'
    } else if (type === 'bool') {
        return 'boolean'
    } else if (type === 'void') {
        return type
    } else {
        // 对象，在ts中定义为interface
        return 'testNapi.' + type.replace('*', '').trim()
    }
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
    generateFuncTestCase
}