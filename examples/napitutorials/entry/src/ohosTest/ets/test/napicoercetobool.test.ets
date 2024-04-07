/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import hilog from '@ohos.hilog';
import testNapi from 'libentry.so';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';

export default function napicoercetoboolTest() {
  describe('napicoercetoboolTest', () => {
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
    it('testNapiCoerceToBool', 0, () => {
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');

      // Test coercing string/number values to boolean
      let testValue1: string = 'test';
      let testValue2: string = '';
      let testValue3: number = 123;
      let testValue4: number = 0;

      // testNapi.cjson_version()
      let result1 = testNapi.testNapiCoerceToBool(testValue1);
      let result2 = testNapi.testNapiCoerceToBool(testValue2);
      let result3 = testNapi.testNapiCoerceToBool(testValue3);
      let result4 = testNapi.testNapiCoerceToBool(testValue4);

      // Print the results
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testValue1}) = ${result1}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testValue2}) = ${result2}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testValue3}) = ${result3}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testValue4}) = ${result4}`);

      // Define assertion methods for type checking
      expect(result1).assertInstanceOf('Boolean');
      expect(result2).assertInstanceOf('Boolean');
      expect(result3).assertInstanceOf('Boolean');
      expect(result4).assertInstanceOf('Boolean');

      // Define assertion methods for value checking
      expect(result1).assertTrue();
      expect(result2).assertFalse();
      expect(result3).assertTrue();
      expect(result4).assertFalse();
      hilog.info(0x0000, 'testTag', '%{public}s', 'it end');
    })
  })
}
