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

export default function abilityTestJsObjectWrap() {
  describe('ActsAbilityTestJsObjectWrap', () => {
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

    it('testNapiWrap', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it testNapiWrap begin');
      let ret: testNapi.testNapiWrap = new testNapi.testNapiWrap();
      hilog.info(0x0000, 'testTag', `type of napi_wrap() is = ${typeof (ret)}`);
      expect(typeof (ret)).assertEqual('object');
      let ret1 = ret.Tyof('');
      hilog.info(0x0000, 'testTag', `type of ret.Tyof('') is = ${typeof (ret1)}`);
      expect(ret1).assertEqual('string');


      let ret2 = ret.Tyof(false);
      hilog.info(0x0000, 'testTag', `type of ret.Tyof(false) is = ${typeof (ret2)}`);
      expect(ret2).assertEqual('boolean');

      let ret3 = ret.Tyof(3);
      hilog.info(0x0000, 'testTag', `type of ret.Tyof(3) is = ${typeof (ret3)}`);
      expect(ret3).assertEqual('number');

      let ret4 = ret.Tyof(null);
      hilog.info(0x0000, 'testTag', `type of ret.Tyof(null) is = ${typeof (ret4)}`);
      expect(ret4).assertEqual('null');

      let ret5 = ret.Tyof(undefined);
      hilog.info(0x0000, 'testTag', `type of ret.Tyof(3) is = ${typeof (ret5)}`);
      expect(ret5).assertEqual('undefined');
    })

    it('testNapiUnwrap', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it testNapiUnwrap begin');
      let ret = testNapi.testNapiUnwrap(7);
      hilog.info(0x0000, 'testTag', `type of napi_unwrap(7) is = ${ret}`);
      expect(ret).assertEqual('number');

      let ret1 = testNapi.testNapiUnwrap('tree');
      hilog.info(0x0000, 'testTag', `type of napi_unwrap('tree') is = ${ret1}`);
      expect(ret1).assertEqual('string');

      let ret2 = testNapi.testNapiUnwrap(false);
      hilog.info(0x0000, 'testTag', `type of napi_unwrap(false) is = ${ret2}`);
      expect(ret2).assertEqual('boolean');

      let ret3 = testNapi.testNapiUnwrap(null);
      hilog.info(0x0000, 'testTag', `type of napi_unwrap(null) is = ${ret3}`);
      expect(ret3).assertEqual('null');
    })

  })
}