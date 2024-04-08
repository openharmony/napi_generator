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
import testNapi from 'libentry.so';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';

export default function abilityTestJsProperty() {
  describe('ActsAbilityTestJsProperty', () => {
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

    it('testNapiGetPropertyNames', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let result = testNapi.testNapiGetPropertyNames({"name": 121});
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertContain("name");
    })

    it('testNapiGetProperty', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let result = testNapi.testNapiGetProperty({key: "val"});
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertContain("val");
    })

    it('testNapiSetProperty', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let result = testNapi.testNapiSetProperty({});
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertContain("value");
    })

    it('testNapiHasProperty', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let result = testNapi.testNapiHasProperty({key: "val"});
      let result2 = testNapi.testNapiHasProperty({differentKey: "anotherVal"});
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result.toString()).assertContain('true');
      expect(result2.toString()).assertContain('false');
    })

    it('testNapiDeleteProperty', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let result = testNapi.testNapiDeleteProperty({key: "val", differentKey: "anotherVal"});
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result.toString()).assertContain('true');
    })

  })
}
