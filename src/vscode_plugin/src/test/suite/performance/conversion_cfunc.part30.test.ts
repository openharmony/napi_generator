/*
* Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import * as assert from 'assert';
import * as vscode from 'vscode';
import { parseFunction, parseClass, parseStruct, parseEnum, parseUnion } from '../../../parse/parsec';
import {
  getDtsFunction, getDtsClasses, getDtsStructs,
  getDtsEnum, getDtsUnions, genDtsFile
} from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj, ClassObj, FuncObj, StructObj, EnumObj, UnionObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_C_Func_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part30.');

  /**
  * @tc.number : c_func_1243
  * @tc.name : c_func_1243
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint8_t` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1243', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1243(uint8_t buf, uint8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1243');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1244
  * @tc.name : c_func_1244
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint8_t[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1244', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1244(uint8_t buf[4], uint8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1244');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1245
  * @tc.name : c_func_1245
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint8_t[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1245', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1245(uint8_t buf[8], uint8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1245');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1246
  * @tc.name : c_func_1246
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint8_t[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1246', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1246(uint8_t buf[16], uint8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1246');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1247
  * @tc.name : c_func_1247
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint8_t[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1247', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1247(uint8_t buf[32], uint8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1247');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1248
  * @tc.name : c_func_1248
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int16_t` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1248', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1248(int16_t buf, int16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1248');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1249
  * @tc.name : c_func_1249
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int16_t[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1249', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1249(int16_t buf[4], int16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1249');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1250
  * @tc.name : c_func_1250
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int16_t[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1250', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1250(int16_t buf[8], int16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1250');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1251
  * @tc.name : c_func_1251
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int16_t[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1251', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1251(int16_t buf[16], int16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1251');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1252
  * @tc.name : c_func_1252
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int16_t[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1252', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1252(int16_t buf[32], int16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1252');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1253
  * @tc.name : c_func_1253
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint16_t` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1253', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1253(uint16_t buf, uint16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1253');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1254
  * @tc.name : c_func_1254
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint16_t[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1254', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1254(uint16_t buf[4], uint16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1254');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1255
  * @tc.name : c_func_1255
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint16_t[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1255', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1255(uint16_t buf[8], uint16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1255');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1256
  * @tc.name : c_func_1256
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint16_t[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1256', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1256(uint16_t buf[16], uint16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1256');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1257
  * @tc.name : c_func_1257
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint16_t[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1257', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1257(uint16_t buf[32], uint16_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1257');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1258
  * @tc.name : c_func_1258
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int32_t` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1258', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1258(int32_t buf, int32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1258');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1259
  * @tc.name : c_func_1259
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int32_t[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1259', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1259(int32_t buf[4], int32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1259');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1260
  * @tc.name : c_func_1260
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int32_t[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1260', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1260(int32_t buf[8], int32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1260');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1261
  * @tc.name : c_func_1261
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int32_t[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1261', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1261(int32_t buf[16], int32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1261');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1262
  * @tc.name : c_func_1262
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int32_t[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1262', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1262(int32_t buf[32], int32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1262');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1263
  * @tc.name : c_func_1263
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint32_t` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1263', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1263(uint32_t buf, uint32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1263');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1264
  * @tc.name : c_func_1264
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint32_t[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1264', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1264(uint32_t buf[4], uint32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1264');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1265
  * @tc.name : c_func_1265
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint32_t[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1265', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1265(uint32_t buf[8], uint32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1265');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1266
  * @tc.name : c_func_1266
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint32_t[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1266', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1266(uint32_t buf[16], uint32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1266');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1267
  * @tc.name : c_func_1267
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `uint32_t[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1267', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1267(uint32_t buf[32], uint32_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1267');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1268
  * @tc.name : c_func_1268
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int64_t` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1268', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1268(int64_t buf, int64_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1268');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1269
  * @tc.name : c_func_1269
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int64_t[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1269', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1269(int64_t buf[4], int64_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1269');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1270
  * @tc.name : c_func_1270
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int64_t[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1270', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1270(int64_t buf[8], int64_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1270');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1271
  * @tc.name : c_func_1271
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int64_t[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1271', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1271(int64_t buf[16], int64_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1271');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1272
  * @tc.name : c_func_1272
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int64_t[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1272', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1272(int64_t buf[32], int64_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1272');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1272 执行异常: ${String(err)}`);
    }
  });
});
