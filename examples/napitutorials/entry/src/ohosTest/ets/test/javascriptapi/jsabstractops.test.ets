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

interface NumObj {
  key1: number;
  key2: number;
  key3: number
}

interface NumObject {
  true: number;
  key2: number;
  key3: number
}

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

    /**
     * cpp/javascriptapi/jsabstractops/napicoercetobool.cpp
     * pages/javascript/jsabstractops/napicoercetobool.ets
     */
    it('napiCoerceToBoolTest', 0, () => {
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToBool begin');

      // Test coercing string/number/null/undefined values to boolean
      const testStr: string = 'test';
      const testEmptyStr: string = '';
      const testNum: number = 123;
      const testZeroNum: number = 0;
      const testNull: null = null;
      const testUndef: undefined = undefined;
      const testStr2BoolResult = testNapi.testNapiCoerceToBool(testStr);
      const testEmptyStr2BoolResult = testNapi.testNapiCoerceToBool(testEmptyStr);
      const testNum2BoolResult = testNapi.testNapiCoerceToBool(testNum);
      const testZeroNum2BoolResult = testNapi.testNapiCoerceToBool(testZeroNum);
      const testNull2BoolResult = testNapi.testNapiCoerceToBool(testNull);
      const testUndef2BoolResult = testNapi.testNapiCoerceToBool(testUndef);

      // Print the results
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testStr}) = ${testStr2BoolResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testEmptyStr}) = ${testEmptyStr2BoolResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testNum}) = ${testNum2BoolResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testZeroNum}) = ${testZeroNum2BoolResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testNull}) = ${testNull2BoolResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_bool(${testUndef}) = ${testUndef2BoolResult}`);

      // Define assertion methods for type checking
      expect(testStr2BoolResult).assertInstanceOf('Boolean');
      expect(testEmptyStr2BoolResult).assertInstanceOf('Boolean');
      expect(testNum2BoolResult).assertInstanceOf('Boolean');
      expect(testZeroNum2BoolResult).assertInstanceOf('Boolean');
      expect(testNull2BoolResult).assertInstanceOf('Boolean');
      expect(testUndef2BoolResult).assertInstanceOf('Boolean');

      // Define assertion methods for value checking
      expect(testStr2BoolResult).assertTrue();
      expect(testEmptyStr2BoolResult).assertFalse();
      expect(testNum2BoolResult).assertTrue();
      expect(testZeroNum2BoolResult).assertFalse();
      expect(testNull2BoolResult).assertFalse();
      expect(testUndef2BoolResult).assertFalse();
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToBool  end');
    })

    /**
     * cpp/javascriptapi/jsabstractops/napicoercetonumber.cpp
     * pages/javascript/jsabstractops/napicoercetonumber.ets
     */
    it('napiCoerceToNumberTest', 0, () => {
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToNumber begin');

      // Test coercing string/boolean/null/undefined values to number
      const testNumStr: string = '-123.456';
      const testZeroStr: string = '0';
      const testTextStr: string = 'test'
      const testTrueBool: boolean = true;
      const testFalseBool: boolean = false;
      const testNull: null = null;
      const testUndef: undefined = undefined;
      const testNumStr2NumResult = testNapi.testNapiCoerceToNumber(testNumStr);
      const testZeroStr2NumberResult = testNapi.testNapiCoerceToNumber(testZeroStr);
      const testTextStr2NumResult = testNapi.testNapiCoerceToNumber(testTextStr);
      const testTrueBool2NumberResult = testNapi.testNapiCoerceToNumber(testTrueBool);
      const testFalseBool2NumberResult = testNapi.testNapiCoerceToNumber(testFalseBool);
      const testNull2NumberResult = testNapi.testNapiCoerceToNumber(testNull);
      const testUndef2NumberResult = testNapi.testNapiCoerceToNumber(testUndef);

      // Print the results
      hilog.info(0x0000, 'testTag', `napi_coerce_to_number(${testNumStr}) = ${testNumStr2NumResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_number(${testZeroStr}) = ${testZeroStr2NumberResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_number(${testTextStr}) = ${testTextStr2NumResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_number(${testTrueBool}) = ${testTrueBool2NumberResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_number(${testFalseBool}) = ${testFalseBool2NumberResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_number(${testNull}) = ${testNull2NumberResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_number(${testUndef}) = ${testUndef2NumberResult}`);

      // Define assertion methods for type checking
      expect(testNumStr2NumResult).assertInstanceOf('Number');
      expect(testZeroStr2NumberResult).assertInstanceOf('Number');
      expect(testTextStr2NumResult).assertInstanceOf('Number');
      expect(testTrueBool2NumberResult).assertInstanceOf('Number');
      expect(testFalseBool2NumberResult).assertInstanceOf('Number');
      expect(testNull2NumberResult).assertInstanceOf('Number');
      expect(testUndef2NumberResult).assertInstanceOf('Number');

      // Define assertion methods for value checking
      expect(testNumStr2NumResult).assertEqual(-123.456);
      expect(testZeroStr2NumberResult).assertEqual(0);
      expect(testTextStr2NumResult).assertNaN();
      expect(testTrueBool2NumberResult).assertEqual(1);
      expect(testFalseBool2NumberResult).assertEqual(0);
      expect(testNull2NumberResult).assertEqual(0);
      expect(testUndef2NumberResult).assertNaN();
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToNumber  end');
    })

    /**
     * cpp/javascriptapi/jsabstractops/napicoercetoobject.cpp
     * pages/javascript/jsabstractops/napicoercetoobject.ets
     */
    it('napiCoerceToObjectTest', 0, () => {
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToObject begin');

      // Test coercing boolean/number/string/null/undefined values to object
      const testBool: boolean = true;
      const testNum: number = -123.456;
      const testStr: string = 'test'
      const testNull: null = null;
      const testUndef: undefined = undefined;
      const testBool2ObjResult = testNapi.testNapiCoerceToObject(testBool);
      const testNum2ObjResult = testNapi.testNapiCoerceToObject(testNum);
      const testStr2ObjResult = testNapi.testNapiCoerceToObject(testStr);
      const testNull2ObjResult = testNapi.testNapiCoerceToObject(testNull);
      const testUndef2ObjResult = testNapi.testNapiCoerceToObject(testUndef);

      // Print the results
      hilog.info(0x0000, 'testTag', `napi_coerce_to_object(${testBool}) = ${testBool2ObjResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_object(${testNum}) = ${testNum2ObjResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_object(${testStr}) = ${testStr2ObjResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_object(${testNull}) = ${testNull2ObjResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_object(${testUndef}) = ${testUndef2ObjResult}`);

      // Define assertion methods for type checking
      expect(typeof testBool2ObjResult).assertEqual('object');
      expect(typeof testNum2ObjResult).assertEqual('object');
      expect(typeof testStr2ObjResult).assertEqual('object');
      expect(typeof testNull2ObjResult).assertEqual('undefined');
      expect(typeof testUndef2ObjResult).assertEqual('undefined');
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToObject  end');
    })

    /**
     * cpp/javascriptapi/jsabstractops/napicoercetostring.cpp
     * pages/javascript/jsabstractops/napicoercetostring.ets
     */
    it('napiCoerceToStringTest', 0, () => {
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToString begin');

      // Test coercing boolean/number/string/null/undefined values to string
      const testBool: boolean = true;
      const testNum: number = -123.456;
      const testNull: null = null;
      const testUndef: undefined = undefined;
      const testBool2StrResult = testNapi.testNapiCoerceToString(testBool);
      const testNum2StrResult = testNapi.testNapiCoerceToString(testNum);
      const testNull2StrResult = testNapi.testNapiCoerceToString(testNull);
      const testUndef2StrResult = testNapi.testNapiCoerceToString(testUndef);

      // Print the results
      hilog.info(0x0000, 'testTag', `napi_coerce_to_string(${testBool}) = ${testBool2StrResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_string(${testNum}) = ${testNum2StrResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_string(${testNull}) = ${testNull2StrResult}`);
      hilog.info(0x0000, 'testTag', `napi_coerce_to_string(${testUndef}) = ${testUndef2StrResult}`);

      // Define assertion methods for type checking
      expect(testBool2StrResult).assertInstanceOf('String');
      expect(testNum2StrResult).assertInstanceOf('String');
      expect(testNull2StrResult).assertInstanceOf('String');
      expect(testUndef2StrResult).assertInstanceOf('String');

      // Define assertion methods for value checking
      expect(testBool2StrResult).assertEqual('true');
      expect(testNum2StrResult).assertEqual('-123.456');
      expect(testNull2StrResult).assertEqual('null');
      expect(testUndef2StrResult).assertEqual('undefined');
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiCoerceToString  end');
    })

    /**
     * cpp/javascriptapi/jsabstractops/napitypeof.cpp
     * pages/javascript/jsabstractops/napitypeof.ets
     */
    it('napiTypeof', 0, () => {
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiTypeof begin');

      // Test querying types
      const testUndef: undefined = undefined;
      const testNull: null = null;
      const testBool: boolean = true;
      const testNum: number = -123.456;
      const testStr: string = 'test';
      const testSym: symbol = Symbol();
      const testObj = {};
      const testFunc = () => {
      };
      const testUndefResult = testNapi.testNapiTypeof(testUndef);
      const testNullResult = testNapi.testNapiTypeof(testNull);
      const testBoolResult = testNapi.testNapiTypeof(testBool);
      const testNumResult = testNapi.testNapiTypeof(testNum);
      const testStrResult = testNapi.testNapiTypeof(testStr);
      const testSymResult = testNapi.testNapiTypeof(testSym);
      const testObjResult = testNapi.testNapiTypeof(testObj);
      const testFuncResult = testNapi.testNapiTypeof(testFunc);

      // Print the results
      hilog.info(0x0000, 'testTag', `napi_typeof(${testUndef}) = ${testUndefResult}`);
      hilog.info(0x0000, 'testTag', `napi_typeof(${testNull}) = ${testNullResult}`);
      hilog.info(0x0000, 'testTag', `napi_typeof(${testBool}) = ${testBoolResult}`);
      hilog.info(0x0000, 'testTag', `napi_typeof(${testNum}) = ${testNumResult}`);
      hilog.info(0x0000, 'testTag', `napi_typeof(${testStr}) = ${testStrResult}`);
      hilog.info(0x0000, 'testTag', `napi_typeof(${String(testSym)}) = ${testSymResult}`);
      hilog.info(0x0000, 'testTag', `napi_typeof(${testObj}) = ${testObjResult}`);
      hilog.info(0x0000, 'testTag', `napi_typeof(${testFunc}) = ${testFuncResult}`);

      // Define assertion methods for type checking
      expect(testUndefResult).assertInstanceOf('String');
      expect(testNullResult).assertInstanceOf('String');
      expect(testBoolResult).assertInstanceOf('String');
      expect(testNumResult).assertInstanceOf('String');
      expect(testStrResult).assertInstanceOf('String');
      expect(testSymResult).assertInstanceOf('String');
      expect(testObjResult).assertInstanceOf('String');
      expect(testFuncResult).assertInstanceOf('String');

      // Define assertion methods for value checking
      expect(testUndefResult).assertEqual('undefined');
      expect(testNullResult).assertEqual('null');
      expect(testBoolResult).assertEqual('boolean');
      expect(testNumResult).assertEqual('number');
      expect(testStrResult).assertEqual('string');
      expect(testSymResult).assertEqual('symbol');
      expect(testObjResult).assertEqual('object');
      expect(testFuncResult).assertEqual('function');
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiTypeof  end');
    })

    /**
     * cpp/javascriptapi/jsabstractops/napiisarray.cpp
     * pages/javascript/jsabstractops/napiisarray.ets
     */
    it('napiIsArrayTest', 0, () => {
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiIsArray begin');

      // Test if number/string/boolean/null/undefined/array is array
      const testNum: number = 123;
      const testStr: string = 'test123'
      const testBool: boolean = true;
      const testNull: null = null;
      const testUndef: undefined = undefined;
      const testArr: Array<number | string | boolean | null | undefined> = [1, '2', false, null, undefined];
      const testNumIsArrayResult = testNapi.testNapiIsArray(testNum);
      const testStrIsArrayResult = testNapi.testNapiIsArray(testStr);
      const testBoolIsArrayResult = testNapi.testNapiIsArray(testBool);
      const testNullIsArrayResult = testNapi.testNapiIsArray(testNull);
      const testUndefIsArrayResult = testNapi.testNapiIsArray(testUndef);
      const testArrIsArrayResult = testNapi.testNapiIsArray(testArr);

      // Print the results
      hilog.info(0x0000, 'testTag', `napi_is_array(${testNum}) = ${testNumIsArrayResult}`);
      hilog.info(0x0000, 'testTag', `napi_is_array(${testStr}) = ${testStrIsArrayResult}`);
      hilog.info(0x0000, 'testTag', `napi_is_array(${testBool}) = ${testBoolIsArrayResult}`);
      hilog.info(0x0000, 'testTag', `napi_is_array(${testNull}) = ${testNullIsArrayResult}`);
      hilog.info(0x0000, 'testTag', `napi_is_array(${testUndef}) = ${testUndefIsArrayResult}`);
      hilog.info(0x0000, 'testTag', `napi_is_array(${testArr}) = ${testArrIsArrayResult}`);

      // Define assertion methods for type checking
      expect(testNumIsArrayResult).assertEqual(false);
      expect(testStrIsArrayResult).assertEqual(false);
      expect(testBoolIsArrayResult).assertEqual(false);
      expect(testNullIsArrayResult).assertEqual(false);
      expect(testUndefIsArrayResult).assertEqual(false);
      expect(testArrIsArrayResult).assertEqual(true);
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiIsArray end');
    })

    /**
     * cpp/javascriptapi/jsabstractops/napistrictequals.cpp
     * pages/javascript/jsabstractops/napistrictequals.ets
     */
    it('napiStrictEqualsTest', 0, () => {
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiStrictEquals begin');

      // Test if the two objects are equal
      const testNum: number = 123;
      const testNumEqu: number = 123;
      const testNumb: number = 986;
      const testZeroNum: number = 0;
      const testNumStr: string = '123';
      const testZeroNumStr: string = '0';
      const testBoolStr: string = 'true';
      const testTrueBool: boolean = true;
      const testTrueBoolean: boolean = true;
      const testFalseBool: boolean = false;
      const testNull: null = null;
      const testNullEqu: null = null;
      const testUndef: undefined = undefined;
      const testNumArr: Array<number> = [1, 2, 3];
      const testNumArrUnequ: Array<number> = [1, 2, 3];
      const testNumObj: NumObj = {
        key1: 1,
        key2: 2,
        key3: 3
      }
      const testNumObjEqu: NumObj = {
        key1: 1,
        key2: 2,
        key3: 3
      }
      const testNumObject: NumObject = {
        true: 1,
        key2: 2,
        key3: 3
      }
      const testNumStrStrictEqualsResult = testNapi.testNapiStrictEquals(testNum, testNumStr);
      const testZeroNumStrStrictEqualsResult = testNapi.testNapiStrictEquals(testZeroNum, testZeroNumStr);
      const testTrueBoolStrStrictEqualsResult = testNapi.testNapiStrictEquals(testBoolStr, testTrueBool);
      const testNullZeroStrictEqualsResult = testNapi.testNapiStrictEquals(testNull, testZeroNum);
      const testNullUndefStrictEqualsResult = testNapi.testNapiStrictEquals(testNull, testUndef);
      const testBoolStrictEqualsResult = testNapi.testNapiStrictEquals(testTrueBool, testFalseBool);
      const testArrObjStrictEqualsResult = testNapi.testNapiStrictEquals(testNumArr, testNumObj);
      const testNumbStrictEqualsResult = testNapi.testNapiStrictEquals(testNum, testNumb);
      const testNumbObjStrictEqualsResult = testNapi.testNapiStrictEquals(testNumObj, testNumObject);
      const testNumArrUnequStrictEqualsResult = testNapi.testNapiStrictEquals(testNumArr, testNumArrUnequ);
      const testNumObjEquStrictEqualsResult = testNapi.testNapiStrictEquals(testNumObj, testNumObjEqu);
      const testNumStrictEqualsResult = testNapi.testNapiStrictEquals(testNum, testNumEqu);
      const testNullStrictEqualsResult = testNapi.testNapiStrictEquals(testNull, testNullEqu);
      const testTruBoolStrictEqualsResult = testNapi.testNapiStrictEquals(testTrueBool, testTrueBoolean);

      // Print the results
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNum}, ${testNumStr}) = ${testNumStrStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testZeroNum}, ${testZeroNumStr}) = ${testZeroNumStrStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testBoolStr}, ${testTrueBool}) = ${testTrueBoolStrStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNull}, ${testZeroNum}) = ${testNullZeroStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNull}, ${testUndef}) = ${testNullUndefStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testTrueBool}, ${testFalseBool}) = ${testBoolStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNumArr}, ${testNumObj}) = ${testArrObjStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNum}, ${testNumb}) = ${testNumbStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNumObj}, ${testNumObject}) = ${testNumbObjStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNumArr}, ${testNumArrUnequ}) = ${testNumArrUnequStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNumObj}, ${testNumObjEqu}) = ${testNumObjEquStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNum}, ${testNumEqu}) = ${testNumStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testNull}, ${testNullEqu}) = ${testNullStrictEqualsResult}`);
      hilog.info(0x0000, 'testTag', `napi_strict_equals(${testTrueBool}, ${testTrueBoolean}) = ${testTruBoolStrictEqualsResult}`);

      // Define assertion methods for type checking
      expect(testNumStrStrictEqualsResult).assertEqual(false);
      expect(testZeroNumStrStrictEqualsResult).assertEqual(false);
      expect(testTrueBoolStrStrictEqualsResult).assertEqual(false);
      expect(testNullZeroStrictEqualsResult).assertEqual(false);
      expect(testNullUndefStrictEqualsResult).assertEqual(false);
      expect(testBoolStrictEqualsResult).assertEqual(false);
      expect(testArrObjStrictEqualsResult).assertEqual(false);
      expect(testNumbStrictEqualsResult).assertEqual(false);
      expect(testNumbObjStrictEqualsResult).assertEqual(false);
      expect(testNumArrUnequStrictEqualsResult).assertEqual(false);
      expect(testNumObjEquStrictEqualsResult).assertEqual(false);
      expect(testNumStrictEqualsResult).assertEqual(true);
      expect(testNullStrictEqualsResult).assertEqual(true);
      expect(testTruBoolStrictEqualsResult).assertEqual(true);
      hilog.info(0x0000, 'testTag', '%{public}s', 'it napiStrictEquals end');
    })
  })
}
