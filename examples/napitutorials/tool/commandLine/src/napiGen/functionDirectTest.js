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
const { NapiLog } = require("../tools/NapiLog");
const util = require('util');
const { writeFile, generateRandomInteger } = require("../tools/tool");
const path = require('path')
const LENGTH = 10;
const TWO_DECIMAL = 2;

let abilityTestTemplete = `
import hilog from '@ohos.hilog';
import testNapi from 'libentry.so';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';

export default function abilityTest() {
  describe('ActsAbilityTest', () => {
    // Defines a test suite. Two parameters are supported: test suite name and test suite function.
    beforeAll(() => {
      // Presets an action, which is performed only once before all test cases of the test suite start.
      // This API supports only one parameter: preset action function.
    })
    beforeEach(() => {
      // Presets an action, which is performed before each unit test case starts.
      // The number of execution times is the same as the number of test cases defined by **it**.
      // This API supports only one parameter: preset action function.
    })
    afterEach(() => {
      // Presets a clear action, which is performed after each unit test case ends.
      // The number of execution times is the same as the number of test cases defined by **it**.
      // This API supports only one parameter: clear action function.
    })
    afterAll(() => {
      // Presets a clear action, which is performed after all test cases of the test suite end.
      // This API supports only one parameter: clear action function.
    })
    it('assertContain', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let a = 'abc';
      let b = 'b';

      [func_direct_testCase]

      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(a).assertContain(b);
      expect(a).assertEqual(a);
      // 断言 如：expect(result).assertEqual(2+3)
    })
  })
}
`

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

function generateFuncTestCase(params, tsFuncName, indexPath) {
    let funcInfo = {
        "name": "",
        "params": [],
        "retType": "",
    }
    funcInfo.name = params.functions[0].name
    let parseParams =  params.functions[0].parameters
    for(let i = 0; i < parseParams.length; ++i) {
        let param = createParam(parseParams[i])
        funcInfo.params.push(param)
    }
    funcInfo.retType = params.functions[0].rtnType
    let funcParamDefine = ''
    let funcParamUse = ''
    // let funcParamExpect = ''
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
        }
    }
    // 去除调用参数的最后一个','
    let index = funcParamUse.lastIndexOf(', ');
    funcParamUse = funcParamUse.substring(0, index);
    // 调用函数
    let callFunc = util.format('let result: %s = testNapi.%s(%s)\n', getJsType(funcInfo.retType), tsFuncName, funcParamUse)
    // 加 hilog 打印
    let hilogContent = util.format('hilog.info(0x0000, "testTag", "Test NAPI  %s: ", result);', tsFuncName)
    let func_test_replace = funcParamDefine + callFunc + hilogContent
    let funcTestContent =  replaceAll(abilityTestTemplete,'[func_direct_testCase]', func_test_replace)

   // let filePath = './entry/src/ohosTest/ets/test/Ability.test.ets'
    // 将内容写入Ability.test.ets文件
    // __dirname  //当前文件的绝对路径
    // ../
    // let relativeFilePath = './entry/src/ohosTest/ets/test/Ability.test.ets'
    let rootPath = path.resolve(indexPath, '..', '..', '..', '..', '..');
    let filePath = path.join(rootPath, 'ohosTest/ets/test/Ability.test.ets');
    // console.info("filePath: " + filePath)
    writeFile(filePath, funcTestContent)
}

function replaceAll(s, sfrom, sto) {
    while (s.indexOf(sfrom) >= 0) {
        s = s.replace(sfrom, sto)
    }
    return s;
}

function getTestType(type) {
    if (type === 'uint32_t' || type === 'int32_t' || type === 'int16_t' || type === 'int64_t' || type === 'int') {
        return 'int'
    } else if (type === 'double_t' || type === 'double' || type === 'float') {
        return 'float'
    } else if (type === 'bool') {
        return 'bool'
    }
}

function getJsType(type) {
    if (type === 'uint32_t' || type === 'int32_t' || type === 'int16_t' || type === 'int64_t' ||
        type === 'int' || type === 'double_t' || type === 'double' || type === 'float') {
        return 'number'
    } else if (type === 'const char *' || type === 'std::string') {
        return 'string'
    } else if (type === 'bool') {
        return 'boolean'
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