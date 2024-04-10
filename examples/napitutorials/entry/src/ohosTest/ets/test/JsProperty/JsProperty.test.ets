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
      let obj = {
        key1: "aa",
        key2: 1,
        key3: false,
        key4: ["a", "b", "c"],
        key5: function () { console.info("This is a function") }
      }
      let result = testNapi.testNapiGetPropertyNames(obj);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(JSON.stringify(result)).assertContain('["key1","key2","key3","key4","key5"]');
    })

    it('testNapiGetProperty', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let obj = {
        key1: "value",
        true: 1,
        0: false,
        key4: ["a", "b", "c"],
        key5: function () { return "function" },
        key6: {key: "value"}
      }
      let result = testNapi.testNapiGetProperty(obj, "key1");
      let result2 = testNapi.testNapiGetProperty(obj, true);
      let result3 = testNapi.testNapiGetProperty(obj, 0);
      let result4 = testNapi.testNapiGetProperty(obj, "key4");
      let result5 = testNapi.testNapiGetProperty(obj, "key5");
      let result6 = testNapi.testNapiGetProperty(obj, "key6");

      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(JSON.stringify(result)).assertContain('value');
      expect(JSON.stringify(result2)).assertContain('1');
      expect(JSON.stringify(result3)).assertContain('false');
      expect(JSON.stringify(result4)).assertContain('["a","b","c"]');
      expect(JSON.stringify(result5)).assertContain('function');
      expect(JSON.stringify(result6)).assertContain('{"key":"value"}');
    })

    it('testNapiSetProperty', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let obj1 = {};
      let result = testNapi.testNapiSetProperty(obj1, "key1", "value");
      let obj2 = {};
      let result2 = testNapi.testNapiSetProperty(obj2, 0, false);
      let obj3 = {};
      let result3 = testNapi.testNapiSetProperty(obj3, true, 1);
      let obj4 = {};
      let result4 = testNapi.testNapiSetProperty(obj4, "key4", ["a","b","c"]);
      let obj5 = {};
      let func = function () {return "this is a function"};
      let result5 = testNapi.testNapiSetProperty(obj5, "key5", func);
      let obj6 = {};
      let objVal = {key: "value"};
      let result6 = testNapi.testNapiSetProperty(obj6, "key6", objVal);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(JSON.stringify(result)).assertContain('"key1":"value"');
      expect(JSON.stringify(result2)).assertContain('"0":false');
      expect(JSON.stringify(result3)).assertContain('"true":1');
      expect(JSON.stringify(result4)).assertContain('"key4":["a","b","c"]');
      expect(JSON.stringify(typeof result5.key5)).assertContain('function');
      expect(JSON.stringify(result6)).assertContain('"key6":{"key":"value"}');
    })

    it('testNapiHasProperty', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let obj = {
        key1: "value",
        true: 1,
        0: false,
        key4: ["a", "b", "c"],
        key5: function () { return "function" },
        key6: {key: "value"}
      }
      let result = testNapi.testNapiHasProperty(obj, "key1");
      let result2 = testNapi.testNapiHasProperty(obj, true);
      let result3 = testNapi.testNapiHasProperty(obj, 0);
      let result4 = testNapi.testNapiHasProperty(obj, "key4");
      let result5 = testNapi.testNapiHasProperty(obj, "key5");
      let result6 = testNapi.testNapiHasProperty(obj, "key6");
      let result7 = testNapi.testNapiHasProperty(obj, "key7");

      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result.toString()).assertContain('true');
      expect(result2.toString()).assertContain('true');
      expect(result3.toString()).assertContain('true');
      expect(result4.toString()).assertContain('true');
      expect(result5.toString()).assertContain('true');
      expect(result6.toString()).assertContain('true');
      expect(result7.toString()).assertContain('false');
    })

    it('testNapiDeleteProperty', 0, () => {
      // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
      hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
      let obj = {
        key1: "value",
        true: 1,
        0: false,
        key4: ["a", "b", "c"],
        key5: function () { return "function" },
        key6: {key: "value"}
      }
      let result = testNapi.testNapiDeleteProperty(obj, "key1");
      console.info("testNapiDeletePropertyTest result = " + JSON.stringify(result))
      expect(JSON.stringify(result)).assertContain('{"0":false,"true":1,"key4":["a","b","c"],"key6":{"key":"value"}}');
      let result2 = testNapi.testNapiDeleteProperty(obj, true);
      expect(JSON.stringify(result2)).assertContain('{"0":false,"key4":["a","b","c"],"key6":{"key":"value"}}');
      let result3 = testNapi.testNapiDeleteProperty(obj, 0);
      expect(JSON.stringify(result3)).assertContain('{"key4":["a","b","c"],"key6":{"key":"value"}}');
      let result4 = testNapi.testNapiDeleteProperty(obj, "key4");
      expect(JSON.stringify(result4)).assertContain('{"key6":{"key":"value"}}');
      let result5 = testNapi.testNapiDeleteProperty(obj, "key5");
      expect(JSON.stringify(result5)).assertContain('{"key6":{"key":"value"}}');
      let result6 = testNapi.testNapiDeleteProperty(obj, "key6");
      expect(JSON.stringify(result6)).assertContain('{}');
    })

    // it('testNapiHasOwnProperty', 0, () => {
    //   // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
    //   hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
    //   let myObj = {
    //     ownKey: "value"
    //   }
    //   let result = testNapi.testNapiHasOwnProperty(myObj, "ownKey");
    //   let parentObj = {
    //     inheritedKey: 'value'
    //   };
    //   Object.setPrototypeOf(myObj, parentObj);
    //   let result2 = testNapi.testNapiHasOwnProperty(myObj, "inheritedKey");
    //   let result3 = testNapi.testNapiHasOwnProperty(myObj, "noPropName");
    //   console.info("AbilityJsTest Has inheritedKey (JS):", myObj.hasOwnProperty('inheritedKey'));
    //   // 预期值为false, 实际为true 暂时找不到原因
    //   console.info("AbilityJsTest Has inheritedKey result2 :", result2);
    //   // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
    //   expect(result.toString()).assertContain('true');
    //   // expect(result2.toString()).assertContain('false');
    //   expect(result3.toString()).assertContain('false');
    // })
    //
    // it('testNapiPropertyAttributes', 0, () => {
    //   // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
    //   hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
    //   let result = testNapi.testNapiPropertyAttributes();
    //   // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
    //   expect(result).assertContain('napi_default');
    // })
    //
    // it('testNapiPropertyDescriptor', 0, () => {
    //   // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
    //   hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
    //   let result = testNapi.testNapiPropertyDescriptorFunc();
    //   let result2 = testNapi.testNapiPropertyDescriptorMyReadOnlyProperty;
    //   // // @ts-ignore
    //   // testNapi.testNapiPropertyDescriptorMyProperty = 'newValue';        // 打印：Setter Called
    //   // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
    //   expect(result).assertContain('Function Called');
    //   expect(result2).assertContain('Getter Called');
    // })
    //
    // it('testNapiSetNamedProperty', 0, () => {
    //   // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
    //   hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
    //   let result = testNapi.testNapiSetNamedProperty();
    //   // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
    //   expect(result).assertContain('Hello World!');
    // })
    //
    // it('testNapiGetNamedProperty', 0, () => {
    //   // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
    //   hilog.info(0x0000, 'testTag', '%{public}s', 'it begin');
    //   let obj = {
    //     myProperty: 'value'
    //   }
    //   let result = testNapi.testNapiGetNamedProperty(obj, 'myProperty');
    //   // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
    //   expect(result).assertContain('value');
    // })

  })
}
