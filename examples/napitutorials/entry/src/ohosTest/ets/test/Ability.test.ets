/*
* Copyright (c) 2023 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import testNapi from 'libentry.so';
import hilog from '@ohos.hilog';
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
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(a).assertContain(b);
      expect(a).assertEqual(a);
    })

    it('KH418_cJSON_Parse', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let value = '"helloworld"'
      let result: testNapi.cJSON = testNapi.KH418_cJSON_Parse(value);
      let value2 = '1.8'
      let result2: testNapi.cJSON = testNapi.KH418_cJSON_Parse(value2);
      let value3 = '["a","b"]'
      let result3: testNapi.cJSON = testNapi.KH418_cJSON_Parse(value3);
      let value4 = '{"name":"JohnDoe","age":18}'
      let result4: testNapi.cJSON = testNapi.KH418_cJSON_Parse(value4);
      console.info("Test NAPI KH418_cJSON_Parse result1: ", JSON.stringify(result))
      console.info("Test NAPI KH418_cJSON_Parse result2: ", JSON.stringify(result2))
      console.info("Test NAPI KH418_cJSON_Parse result3: ", JSON.stringify(result3))
      console.info("Test NAPI KH418_cJSON_Parse result4: ", JSON.stringify(result4))
    })

    // [NAPI_GEN]:输出测试方法，加注释
    it('KH373_cJSON_GetArraySize', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let value: testNapi.cJSON = {
        next: null,
        prev: null,
        child: null,
        type: 0,
        valuestring: '["apple","banana","cherry","pear","strawberry"]',
        valueint: 0,
        valuedouble: 0,
        string: ''
      }
      let result: number = testNapi.KH373_cJSON_GetArraySize(value);
      hilog.info(0x0000, "testTag", "Test NAPI KH734_CJSON_GetArraySize: ", result);
      console.info("Test NAPI KH734_CJSON_GetArraySize result: ", JSON.stringify(result))
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
    })

    // [NAPI_GEN]:输出测试方法，加注释
    it('KH735_cJSON_Print', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let paramIn: testNapi.cJSON = {
        next: null,
        prev: null,
        child: null,
        type: 16,
        valuestring: 'JohnDoe',
        valueint: 0,
        valuedouble: 0,
        string: 'name'
      }
      let result: string = testNapi.KH735_cJSON_Print(paramIn)
      hilog.info(0x0000, "testTag", "Test NAPI  KH735_cJSON_Print: ", result);
      console.info("Test NAPI KH735_cJSON_Print result: ", JSON.stringify(result))
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      // e.g. expect(result).assertEqual(2+3)
    })

    // [NAPI_GEN]:输出测试方法，加注释
    it('KH361_cJSON_CreateObject', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');

      let result: testNapi.cJSON = testNapi.KH361_cJSON_CreateObject()
      hilog.info(0x0000, "testTag", "Test NAPI  KH735_cJSON_Print: ", result);
      console.info("Test NAPI KH361_cJSON_CreateObject result: ", JSON.stringify(result))
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      // e.g. expect(result).assertEqual(2+3)
    })

    // [NAPI_GEN]:输出测试方法，加注释
    it('KH515_cJSON_CreateString', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');

      let string = "gOtkqDFR0z"
      let result: testNapi.cJSON = testNapi.KH515_cJSON_CreateString(string)
      hilog.info(0x0000, "testTag", "Test NAPI KH515_cJSON_CreateString: ", JSON.stringify(result));
      console.info("Test NAPI KH515_cJSON_CreateString result: ", JSON.stringify(result))
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      // e.g. expect(result).assertEqual(2+3)
    })

})
}