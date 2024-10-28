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

import hilog from '@ohos.hilog';
import testNapi, { add } from 'libentry.so';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';

function AddTwo(num: number) {
  return num + 2;
}

export default function abilityTestJsFunctions() {
  describe('ActsAbilityTestJsFunctions', () => {
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

    it('testNapiCallFunction', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it testNapiCallFunction begin');
      let result = testNapi.testNapiCallFunction(AddTwo, 7);
      hilog.info(0x0000, 'testTag', `napi_call_function(AddTwo, 7) = ${result}`);
      expect(result).assertEqual(9);

      let result1 = testNapi.testNapiCallFunction(AddTwo, 888);
      hilog.info(0x0000, 'testTag', `napi_call_function(AddTwo, 888) = ${result1}`);
      expect(result1).assertEqual(890);

      let result2 = testNapi.testNapiCallFunction(AddTwo, 77);
      hilog.info(0x0000, 'testTag', `napi_call_function(AddTwo, 77) = ${result2}`);
      expect(result2).assertEqual(79);
    })

    it('testNapiCreateFunction', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it testNapiCreateFunction begin');
      // let result = testNapi.testNapiCreateFunction();
      hilog.info(0x0000, 'testTag', `type of napi_create_functon() is ${typeof(testNapi.testNapiCreateFunction())}`);
      expect(typeof(testNapi.testNapiCreateFunction())).assertEqual('function');
    })

  })
}