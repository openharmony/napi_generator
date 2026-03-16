/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 */

import { hilog } from '@kit.PerformanceAnalysisKit';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';
import lib from 'libentry.so';
import { HILOG_DOMAIN, TEST_FILTER } from './constant';

const INVALID_HANDLE = 0;

export default function cjsondtsTest() {
  describe('CjsondtsTest', () => {
    beforeAll(() => {})
    beforeEach(() => {})
    afterEach(() => {})
    afterAll(() => {})

    it('cjsonVersion_returns_string', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonVersion_returns_string');
      const ver: string = lib.cjsonVersion();
      expect(ver !== null && ver.length > 0).assertEqual(true);
    })

    it('cjsonParse_valid_json_returns_handle', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonParse_valid_json_returns_handle');
      const h: number = lib.cjsonParse('{"a":1}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      if (h !== INVALID_HANDLE) {
        lib.cjsonDelete(h);
      }
    })

    it('cjsonParse_invalid_json_returns_zero', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonParse_invalid_json_returns_zero');
      const h: number = lib.cjsonParse('{ invalid }');
      expect(h === INVALID_HANDLE).assertEqual(true);
    })

    it('cjsonParseWithLength_valid_returns_handle', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonParseWithLength_valid_returns_handle');
      const s: string = '{"x":2}';
      const h: number = lib.cjsonParseWithLength(s, s.length);
      expect(h !== INVALID_HANDLE).assertEqual(true);
      if (h !== INVALID_HANDLE) lib.cjsonDelete(h);
    })

    it('cjsonPrint_after_parse', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonPrint_after_parse');
      const jsonStr: string = '{"name":"test","value":42}';
      const h: number = lib.cjsonParse(jsonStr);
      expect(h !== INVALID_HANDLE).assertEqual(true);
      const out: string | null = lib.cjsonPrint(h);
      expect(out !== null).assertEqual(true);
      if (out !== null) {
        expect(out.includes('"name"') && out.includes('"test"')).assertEqual(true);
      }
      lib.cjsonDelete(h);
    })

    it('cjsonPrintUnformatted_returns_compact', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonPrintUnformatted_returns_compact');
      const h: number = lib.cjsonParse('{"a":1}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      const out: string | null = lib.cjsonPrintUnformatted(h);
      expect(out !== null && (out as string).indexOf('\n') < 0).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonPrintBuffered_formatted', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonPrintBuffered_formatted');
      const h: number = lib.cjsonParse('{"b":2}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      const out: string | null = lib.cjsonPrintBuffered(h, 256, true);
      expect(out !== null).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonGetErrorPtr_after_invalid_parse', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonGetErrorPtr_after_invalid_parse');
      lib.cjsonParse('{ bad }');
      const err: string | null = lib.cjsonGetErrorPtr();
      expect(err === null || (typeof err === 'string')).assertEqual(true);
    })

    it('cjsonGetObjectItem_and_getStringValue', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonGetObjectItem_and_getStringValue');
      const h: number = lib.cjsonParse('{"key":"hello"}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      const itemH: number = lib.cjsonGetObjectItem(h, 'key');
      expect(itemH !== INVALID_HANDLE).assertEqual(true);
      const str: string | null = lib.cjsonGetStringValue(itemH);
      expect(str).assertEqual('hello');
      lib.cjsonDelete(h);
    })

    it('cjsonGetObjectItemCaseSensitive', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonGetObjectItemCaseSensitive');
      const h: number = lib.cjsonParse('{"Key":1}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      const item: number = lib.cjsonGetObjectItemCaseSensitive(h, 'Key');
      expect(item !== INVALID_HANDLE && lib.cjsonGetNumberValue(item) === 1).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonHasObjectItem_true', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonHasObjectItem_true');
      const h: number = lib.cjsonParse('{"k":1}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonHasObjectItem(h, 'k')).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonHasObjectItem_false', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonHasObjectItem_false');
      const h: number = lib.cjsonParse('{"k":1}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonHasObjectItem(h, 'missing')).assertEqual(false);
      lib.cjsonDelete(h);
    })

    it('cjsonGetObjectItem_and_getNumberValue', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonGetObjectItem_and_getNumberValue');
      const h: number = lib.cjsonParse('{"num":99}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      const itemH: number = lib.cjsonGetObjectItem(h, 'num');
      expect(itemH !== INVALID_HANDLE).assertEqual(true);
      const num: number = lib.cjsonGetNumberValue(itemH);
      expect(num).assertEqual(99);
      lib.cjsonDelete(h);
    })

    it('cjsonIsObject_on_root', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonIsObject_on_root');
      const h: number = lib.cjsonParse('{"x":1}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonIsObject(h)).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonIsArray_on_array', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonIsArray_on_array');
      const h: number = lib.cjsonParse('[1,2,3]');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonIsArray(h)).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonIsString_on_string', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonIsString_on_string');
      const h: number = lib.cjsonCreateString('s');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonIsString(h)).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonIsNumber_on_number', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonIsNumber_on_number');
      const h: number = lib.cjsonCreateNumber(3.14);
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonIsNumber(h)).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonIsNull_on_null', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonIsNull_on_null');
      const h: number = lib.cjsonCreateNull();
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonIsNull(h)).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonIsTrue_on_true', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonIsTrue_on_true');
      const h: number = lib.cjsonCreateTrue();
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonIsTrue(h)).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonIsFalse_on_false', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonIsFalse_on_false');
      const h: number = lib.cjsonCreateFalse();
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonIsFalse(h)).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonIsBool_on_bool', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonIsBool_on_bool');
      const h: number = lib.cjsonCreateBool(true);
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonIsBool(h)).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonCreateObject_addItemToObject_print', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonCreateObject_addItemToObject_print');
      const obj: number = lib.cjsonCreateObject();
      expect(obj !== INVALID_HANDLE).assertEqual(true);
      const s: number = lib.cjsonCreateString('world');
      expect(s !== INVALID_HANDLE).assertEqual(true);
      const added: boolean = lib.cjsonAddItemToObject(obj, 'msg', s);
      expect(added).assertEqual(true);
      const out: string | null = lib.cjsonPrint(obj);
      expect(out !== null).assertEqual(true);
      if (out !== null) {
        expect(out.includes('"msg"') && out.includes('"world"')).assertEqual(true);
      }
      lib.cjsonDelete(obj);
    })

    it('cjsonAddItemToObjectCS', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonAddItemToObjectCS');
      const obj: number = lib.cjsonCreateObject();
      const item: number = lib.cjsonCreateNumber(1);
      const ok: boolean = lib.cjsonAddItemToObjectCS(obj, 'n', item);
      expect(ok).assertEqual(true);
      const out: string | null = lib.cjsonPrint(obj);
      expect(out !== null && out.includes('"n"')).assertEqual(true);
      lib.cjsonDelete(obj);
    })

    it('cjsonCreateArray_getArraySize', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonCreateArray_getArraySize');
      const arr: number = lib.cjsonCreateArray();
      expect(arr !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonGetArraySize(arr)).assertEqual(0);
      const n: number = lib.cjsonCreateNumber(10);
      lib.cjsonAddItemToArray(arr, n);
      expect(lib.cjsonGetArraySize(arr)).assertEqual(1);
      lib.cjsonDelete(arr);
    })

    it('cjsonGetArrayItem', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonGetArrayItem');
      const h: number = lib.cjsonParse('[100,"elem"]');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonGetArraySize(h)).assertEqual(2);
      const first: number = lib.cjsonGetArrayItem(h, 0);
      const second: number = lib.cjsonGetArrayItem(h, 1);
      expect(first !== INVALID_HANDLE).assertEqual(true);
      expect(second !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonGetNumberValue(first)).assertEqual(100);
      expect(lib.cjsonGetStringValue(second)).assertEqual('elem');
      lib.cjsonDelete(h);
    })

    it('cjsonAddItemReferenceToArray', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonAddItemReferenceToArray');
      const arr: number = lib.cjsonCreateArray();
      const item: number = lib.cjsonCreateNumber(5);
      const ok: boolean = lib.cjsonAddItemReferenceToArray(arr, item);
      expect(ok).assertEqual(true);
      expect(lib.cjsonGetArraySize(arr)).assertEqual(1);
      lib.cjsonDelete(arr);
      lib.cjsonDelete(item);
    })

    it('cjsonDetachItemFromArray', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonDetachItemFromArray');
      const h: number = lib.cjsonParse('[1,2,3]');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      const detached: number = lib.cjsonDetachItemFromArray(h, 1);
      expect(detached !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonGetNumberValue(detached)).assertEqual(2);
      expect(lib.cjsonGetArraySize(h)).assertEqual(2);
      lib.cjsonDelete(h);
      lib.cjsonDelete(detached);
    })

    it('cjsonDeleteItemFromArray', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonDeleteItemFromArray');
      const h: number = lib.cjsonParse('[10,20]');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      lib.cjsonDeleteItemFromArray(h, 0);
      expect(lib.cjsonGetArraySize(h)).assertEqual(1);
      lib.cjsonDelete(h);
    })

    it('cjsonInsertItemInArray', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonInsertItemInArray');
      const arr: number = lib.cjsonCreateArray();
      lib.cjsonAddItemToArray(arr, lib.cjsonCreateNumber(1));
      lib.cjsonAddItemToArray(arr, lib.cjsonCreateNumber(3));
      const mid: number = lib.cjsonCreateNumber(2);
      const ok: boolean = lib.cjsonInsertItemInArray(arr, 1, mid);
      expect(ok).assertEqual(true);
      expect(lib.cjsonGetNumberValue(lib.cjsonGetArrayItem(arr, 1))).assertEqual(2);
      lib.cjsonDelete(arr);
    })

    it('cjsonReplaceItemInArray', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonReplaceItemInArray');
      const arr: number = lib.cjsonCreateArray();
      lib.cjsonAddItemToArray(arr, lib.cjsonCreateNumber(0));
      const rep: number = lib.cjsonCreateNumber(99);
      const ok: boolean = lib.cjsonReplaceItemInArray(arr, 0, rep);
      expect(ok).assertEqual(true);
      expect(lib.cjsonGetNumberValue(lib.cjsonGetArrayItem(arr, 0))).assertEqual(99);
      lib.cjsonDelete(arr);
    })

    it('cjsonDetachItemFromObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonDetachItemFromObject');
      const h: number = lib.cjsonParse('{"a":1,"b":2}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      const det: number = lib.cjsonDetachItemFromObject(h, 'a');
      expect(det !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonGetNumberValue(det)).assertEqual(1);
      lib.cjsonDelete(h);
      lib.cjsonDelete(det);
    })

    it('cjsonDeleteItemFromObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonDeleteItemFromObject');
      const h: number = lib.cjsonParse('{"x":1}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      lib.cjsonDeleteItemFromObject(h, 'x');
      expect(lib.cjsonHasObjectItem(h, 'x')).assertEqual(false);
      lib.cjsonDelete(h);
    })

    it('cjsonReplaceItemInObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonReplaceItemInObject');
      const h: number = lib.cjsonParse('{"v":1}');
      const rep: number = lib.cjsonCreateNumber(2);
      const ok: boolean = lib.cjsonReplaceItemInObject(h, 'v', rep);
      expect(ok).assertEqual(true);
      expect(lib.cjsonGetNumberValue(lib.cjsonGetObjectItem(h, 'v'))).assertEqual(2);
      lib.cjsonDelete(h);
    })

    it('cjsonDuplicate', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonDuplicate');
      const h: number = lib.cjsonParse('{"a":1}');
      expect(h !== INVALID_HANDLE).assertEqual(true);
      const dup: number = lib.cjsonDuplicate(h, true);
      expect(dup !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonCompare(h, dup, true)).assertEqual(true);
      lib.cjsonDelete(h);
      lib.cjsonDelete(dup);
    })

    it('cjsonCompare_compare_numbers', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonCompare_compare_numbers');
      const a: number = lib.cjsonCreateNumber(1);
      const b: number = lib.cjsonCreateNumber(1);
      expect(lib.cjsonCompare(a, b, true)).assertEqual(true);
      lib.cjsonDelete(a);
      lib.cjsonDelete(b);
    })

    it('cjsonCompare_compare_null', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonCompare_compare_null');
      const a: number = lib.cjsonCreateNull();
      const b: number = lib.cjsonCreateNull();
      expect(lib.cjsonCompare(a, b, true)).assertEqual(true);
      lib.cjsonDelete(a);
      lib.cjsonDelete(b);
    })

    it('cjsonCompare_with_invalid_handle_returns_false', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonCompare_with_invalid_handle_returns_false');
      const a: number = lib.cjsonCreateNull();
      expect(lib.cjsonCompare(a, INVALID_HANDLE, true)).assertEqual(false);
      lib.cjsonDelete(a);
    })

    it('cjsonMinify_removes_whitespace', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonMinify_removes_whitespace');
      const input: string = '  { "a" : 1 }  ';
      const out: string = lib.cjsonMinify(input);
      expect(out !== null && out.indexOf(' ') < 0).assertEqual(true);
    })

    it('cjsonAddNullToObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonAddNullToObject');
      const obj: number = lib.cjsonCreateObject();
      const added: number = lib.cjsonAddNullToObject(obj, 'n');
      expect(added !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonHasObjectItem(obj, 'n')).assertEqual(true);
      lib.cjsonDelete(obj);
    })

    it('cjsonAddTrueToObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonAddTrueToObject');
      const obj: number = lib.cjsonCreateObject();
      lib.cjsonAddTrueToObject(obj, 't');
      const item: number = lib.cjsonGetObjectItem(obj, 't');
      expect(lib.cjsonIsTrue(item)).assertEqual(true);
      lib.cjsonDelete(obj);
    })

    it('cjsonAddFalseToObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonAddFalseToObject');
      const obj: number = lib.cjsonCreateObject();
      lib.cjsonAddFalseToObject(obj, 'f');
      const item: number = lib.cjsonGetObjectItem(obj, 'f');
      expect(lib.cjsonIsFalse(item)).assertEqual(true);
      lib.cjsonDelete(obj);
    })

    it('cjsonAddNumberToObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonAddNumberToObject');
      const obj: number = lib.cjsonCreateObject();
      lib.cjsonAddNumberToObject(obj, 'num', 42);
      expect(lib.cjsonGetNumberValue(lib.cjsonGetObjectItem(obj, 'num'))).assertEqual(42);
      lib.cjsonDelete(obj);
    })

    it('cjsonAddStringToObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonAddStringToObject');
      const obj: number = lib.cjsonCreateObject();
      lib.cjsonAddStringToObject(obj, 's', 'val');
      expect(lib.cjsonGetStringValue(lib.cjsonGetObjectItem(obj, 's'))).assertEqual('val');
      lib.cjsonDelete(obj);
    })

    it('cjsonAddObjectToObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonAddObjectToObject');
      const obj: number = lib.cjsonCreateObject();
      const child: number = lib.cjsonAddObjectToObject(obj, 'nested');
      expect(child !== INVALID_HANDLE).assertEqual(true);
      lib.cjsonAddNumberToObject(child, 'x', 1);
      expect(lib.cjsonGetNumberValue(lib.cjsonGetObjectItem(child, 'x'))).assertEqual(1);
      lib.cjsonDelete(obj);
    })

    it('cjsonAddArrayToObject', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonAddArrayToObject');
      const obj: number = lib.cjsonCreateObject();
      const arr: number = lib.cjsonAddArrayToObject(obj, 'arr');
      expect(arr !== INVALID_HANDLE).assertEqual(true);
      lib.cjsonAddItemToArray(arr, lib.cjsonCreateNumber(1));
      expect(lib.cjsonGetArraySize(arr)).assertEqual(1);
      lib.cjsonDelete(obj);
    })

    it('cjsonSetValuestring', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonSetValuestring');
      const h: number = lib.cjsonCreateString('old');
      const out: string | null = lib.cjsonSetValuestring(h, 'new');
      expect(out !== null).assertEqual(true);
      expect(lib.cjsonGetStringValue(h)).assertEqual('new');
      lib.cjsonDelete(h);
    })

    it('cjsonPrint_number_zero', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonPrint_number_zero');
      const h: number = lib.cjsonCreateNumber(0);
      const out: string | null = lib.cjsonPrint(h);
      expect(out !== null && out.includes('0')).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonPrint_number_negative', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonPrint_number_negative');
      const h: number = lib.cjsonCreateNumber(-1);
      const out: string | null = lib.cjsonPrint(h);
      expect(out !== null && out.includes('-')).assertEqual(true);
      lib.cjsonDelete(h);
    })

    it('cjsonDetachItemViaPointer', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonDetachItemViaPointer');
      const arr: number = lib.cjsonCreateArray();
      lib.cjsonAddItemToArray(arr, lib.cjsonCreateNumber(7));
      const itemRef: number = lib.cjsonGetArrayItem(arr, 0);
      expect(itemRef !== INVALID_HANDLE).assertEqual(true);
      const detached: number = lib.cjsonDetachItemViaPointer(arr, itemRef);
      expect(detached !== INVALID_HANDLE).assertEqual(true);
      expect(lib.cjsonGetNumberValue(detached)).assertEqual(7);
      lib.cjsonDelete(arr);
      lib.cjsonDelete(detached);
    })

    it('cjsonDelete_on_invalid_handle_no_throw', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'cjsonDelete_on_invalid_handle_no_throw');
      lib.cjsonDelete(INVALID_HANDLE);
    })

    it('add_tc_001_still_works', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_001_still_works');
      expect(lib.add(0, 0)).assertEqual(0);
      expect(lib.add(2, 3)).assertEqual(5);
    })
  })
}
