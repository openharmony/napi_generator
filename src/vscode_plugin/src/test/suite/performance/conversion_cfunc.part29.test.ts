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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part29.');

  /**
  * @tc.number : c_func_1208
  * @tc.name : c_func_1208
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long long` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1208', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1208(long long buf, long long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1208');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1209
  * @tc.name : c_func_1209
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long long[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1209', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1209(long long buf[4], long long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1209');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1210
  * @tc.name : c_func_1210
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long long[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1210', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1210(long long buf[8], long long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1210');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1211
  * @tc.name : c_func_1211
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long long[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1211', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1211(long long buf[16], long long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1211');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1212
  * @tc.name : c_func_1212
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long long[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1212', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1212(long long buf[32], long long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1212');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1213
  * @tc.name : c_func_1213
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned int` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1213', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1213(unsigned int buf, unsigned int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1213');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1214
  * @tc.name : c_func_1214
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned int[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1214', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1214(unsigned int buf[4], unsigned int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1214');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1215
  * @tc.name : c_func_1215
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned int[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1215', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1215(unsigned int buf[8], unsigned int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1215');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1216
  * @tc.name : c_func_1216
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned int[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1216', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1216(unsigned int buf[16], unsigned int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1216');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1217
  * @tc.name : c_func_1217
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned int[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1217', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1217(unsigned int buf[32], unsigned int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1217');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1217 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1218
  * @tc.name : c_func_1218
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned char` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1218', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1218(unsigned char buf, unsigned char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1218');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1218 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1219
  * @tc.name : c_func_1219
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned char[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1219', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1219(unsigned char buf[4], unsigned char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1219');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1219 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1220
  * @tc.name : c_func_1220
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned char[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1220', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1220(unsigned char buf[8], unsigned char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1220');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1220 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1221
  * @tc.name : c_func_1221
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned char[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1221', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1221(unsigned char buf[16], unsigned char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1221');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1221 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1222
  * @tc.name : c_func_1222
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned char[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1222', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1222(unsigned char buf[32], unsigned char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1222');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1222 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1223
  * @tc.name : c_func_1223
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned short` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1223', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1223(unsigned short buf, unsigned short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1223');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1224
  * @tc.name : c_func_1224
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned short[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1224', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1224(unsigned short buf[4], unsigned short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1224');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1225
  * @tc.name : c_func_1225
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned short[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1225', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1225(unsigned short buf[8], unsigned short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1225');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1225 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1226
  * @tc.name : c_func_1226
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned short[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1226', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1226(unsigned short buf[16], unsigned short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1226');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1227
  * @tc.name : c_func_1227
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned short[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1227', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1227(unsigned short buf[32], unsigned short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1227');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1228
  * @tc.name : c_func_1228
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned long` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1228', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1228(unsigned long buf, unsigned long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1228');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1229
  * @tc.name : c_func_1229
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned long[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1229', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1229(unsigned long buf[4], unsigned long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1229');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1230
  * @tc.name : c_func_1230
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned long[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1230', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1230(unsigned long buf[8], unsigned long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1230');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1231
  * @tc.name : c_func_1231
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned long[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1231', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1231(unsigned long buf[16], unsigned long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1231');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1232
  * @tc.name : c_func_1232
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `unsigned long[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1232', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1232(unsigned long buf[32], unsigned long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1232');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1233
  * @tc.name : c_func_1233
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `size_t` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1233', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1233(size_t buf, size_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1233');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1234
  * @tc.name : c_func_1234
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `size_t[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1234', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1234(size_t buf[4], size_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1234');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1235
  * @tc.name : c_func_1235
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `size_t[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1235', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1235(size_t buf[8], size_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1235');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1236
  * @tc.name : c_func_1236
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `size_t[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1236', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1236(size_t buf[16], size_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1236');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1237
  * @tc.name : c_func_1237
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `size_t[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1237', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1237(size_t buf[32], size_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1237');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1238
  * @tc.name : c_func_1238
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int8_t` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1238', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1238(int8_t buf, int8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1238');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1239
  * @tc.name : c_func_1239
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int8_t[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1239', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1239(int8_t buf[4], int8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1239');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1240
  * @tc.name : c_func_1240
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int8_t[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1240', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1240(int8_t buf[8], int8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1240');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1241
  * @tc.name : c_func_1241
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int8_t[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1241', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1241(int8_t buf[16], int8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1241');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1242
  * @tc.name : c_func_1242
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int8_t[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1242', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1242(int8_t buf[32], int8_t val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1242');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1242 执行异常: ${String(err)}`);
    }
  });
});
