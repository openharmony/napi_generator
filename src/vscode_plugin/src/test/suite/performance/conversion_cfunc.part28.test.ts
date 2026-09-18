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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part28.');

  /**
  * @tc.number : c_func_1173
  * @tc.name : c_func_1173
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1173', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1173(int buf, int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1173');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1174
  * @tc.name : c_func_1174
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1174', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1174(int buf[4], int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1174');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1175
  * @tc.name : c_func_1175
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1175', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1175(int buf[8], int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1175');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1176
  * @tc.name : c_func_1176
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1176', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1176(int buf[16], int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1176');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1177
  * @tc.name : c_func_1177
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `int[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1177', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1177(int buf[32], int val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1177');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1178
  * @tc.name : c_func_1178
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `double` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1178', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1178(double buf, double val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1178');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1179
  * @tc.name : c_func_1179
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `double[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1179', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1179(double buf[4], double val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1179');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1180
  * @tc.name : c_func_1180
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `double[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1180', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1180(double buf[8], double val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1180');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1181
  * @tc.name : c_func_1181
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `double[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1181', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1181(double buf[16], double val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1181');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1182
  * @tc.name : c_func_1182
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `double[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1182', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1182(double buf[32], double val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1182');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1183
  * @tc.name : c_func_1183
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `float` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1183', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1183(float buf, float val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1183');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1184
  * @tc.name : c_func_1184
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `float[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1184', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1184(float buf[4], float val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1184');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1185
  * @tc.name : c_func_1185
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `float[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1185', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1185(float buf[8], float val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1185');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1185 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1186
  * @tc.name : c_func_1186
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `float[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1186', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1186(float buf[16], float val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1186');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1186 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1187
  * @tc.name : c_func_1187
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `float[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1187', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1187(float buf[32], float val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1187');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1187 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1188
  * @tc.name : c_func_1188
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `bool` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1188', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1188(bool buf, bool val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1188');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1188 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1189
  * @tc.name : c_func_1189
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `bool[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1189', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1189(bool buf[4], bool val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1189');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1189 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1190
  * @tc.name : c_func_1190
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `bool[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1190', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1190(bool buf[8], bool val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1190');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1190 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1191
  * @tc.name : c_func_1191
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `bool[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1191', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1191(bool buf[16], bool val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1191');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1191 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1192
  * @tc.name : c_func_1192
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `bool[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1192', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1192(bool buf[32], bool val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1192');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1192 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1193
  * @tc.name : c_func_1193
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `char` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1193', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1193(char buf, char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1193');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1194
  * @tc.name : c_func_1194
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `char[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1194', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1194(char buf[4], char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1194');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1195
  * @tc.name : c_func_1195
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `char[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1195', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1195(char buf[8], char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1195');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1195 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1196
  * @tc.name : c_func_1196
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `char[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1196', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1196(char buf[16], char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1196');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1196 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1197
  * @tc.name : c_func_1197
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `char[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1197', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1197(char buf[32], char val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1197');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1197 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1198
  * @tc.name : c_func_1198
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `short` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1198', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1198(short buf, short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1198');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1198 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1199
  * @tc.name : c_func_1199
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `short[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1199', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1199(short buf[4], short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1199');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1199 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1200
  * @tc.name : c_func_1200
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `short[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1200', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1200(short buf[8], short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1200');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1200 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1201
  * @tc.name : c_func_1201
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `short[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1201', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1201(short buf[16], short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1201');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1201 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1202
  * @tc.name : c_func_1202
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `short[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1202', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1202(short buf[32], short val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1202');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1202 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1203
  * @tc.name : c_func_1203
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1203', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1203(long buf, long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1203');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1203 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1204
  * @tc.name : c_func_1204
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long[4]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1204', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1204(long buf[4], long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1204');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1205
  * @tc.name : c_func_1205
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long[8]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1205', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1205(long buf[8], long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1205');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1206
  * @tc.name : c_func_1206
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long[16]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1206', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1206(long buf[16], long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1206');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1207
  * @tc.name : c_func_1207
  * @tc.desc : h2dts parseFunction：扩充-R4-数组参数 `long[32]` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('c_func_1207', () => {
    try {
      let objList: FuncObj[] | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseFunction(`void r4arr1207(long buf[32], long val);`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r4arr1207');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1207 执行异常: ${String(err)}`);
    }
  });
});
