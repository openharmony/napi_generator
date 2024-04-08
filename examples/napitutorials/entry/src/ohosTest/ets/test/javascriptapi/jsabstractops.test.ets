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

export default function jsAbstractOpsTest() {
  describe('jsAbstractOpsTest', () => {
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
    it('napiCoerceToBool', 0, () => {
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToBool begin');

      // Test coercing string/number values to boolean
      const testStr: string = 'test';
      const testEmptyStr: string = '';
      const testNum: number = 123;
      const testZeroNum: number = 0;
      let testStr2BoolResult = testNapi.testNapiCoerceToBool(testStr);
      let testEmptyStr2BoolResult = testNapi.testNapiCoerceToBool(testEmptyStr);
      let testNum2BoolResult = testNapi.testNapiCoerceToBool(testNum);
      let testZeroNum2BoolResult = testNapi.testNapiCoerceToBool(testZeroNum);

      // Print the results
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testStr}) = ${testStr2BoolResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testEmptyStr}) = ${testEmptyStr2BoolResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testNum}) = ${testNum2BoolResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testZeroNum}) = ${testZeroNum2BoolResult}`);

      // Define assertion methods for type checking
      expect(testStr2BoolResult).assertInstanceOf('Boolean');
      expect(testEmptyStr2BoolResult).assertInstanceOf('Boolean');
      expect(testNum2BoolResult).assertInstanceOf('Boolean');
      expect(testZeroNum2BoolResult).assertInstanceOf('Boolean');

      // Define assertion methods for value checking
      expect(testStr2BoolResult).assertTrue();
      expect(testEmptyStr2BoolResult).assertFalse();
      expect(testNum2BoolResult).assertTrue();
      expect(testZeroNum2BoolResult).assertFalse();
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToBool  end');
    })
  })
}
