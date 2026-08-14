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
import { doParseTs } from '../../../parse/parsets';
import { ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse：同一源码解析 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 解析 10 次 ≤ 6s（实测约 4.0~4.3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_DTS2CPP_Class_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Class_Suite part05.');

  /**
  * @tc.number dts2cpp_class_0226
  * @tc.name dts2cpp_class_0226
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 symbol（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0226', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0226.ts',
            `class ClsA07P0 {
        f(a: symbol) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA07P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'symbol');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0227
  * @tc.name dts2cpp_class_0227
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 symbol（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0227', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0227.ts',
            `class ClsA07P1 {
        f(a: number, b: symbol) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA07P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'symbol');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0228
  * @tc.name dts2cpp_class_0228
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 bigint（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0228', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0228.ts',
            `class ClsA08P0 {
        f(a: bigint) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA08P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'bigint');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0229
  * @tc.name dts2cpp_class_0229
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 bigint（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0229', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0229.ts',
            `class ClsA08P1 {
        f(a: number, b: bigint) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA08P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'bigint');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0230
  * @tc.name dts2cpp_class_0230
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 object（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0230', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0230.ts',
            `class ClsA09P0 {
        f(a: object) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA09P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'object');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0231
  * @tc.name dts2cpp_class_0231
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 object（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0231', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0231.ts',
            `class ClsA09P1 {
        f(a: number, b: object) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA09P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'object');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0232
  * @tc.name dts2cpp_class_0232
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 number[]（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0232', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0232.ts',
            `class ClsA10P0 {
        f(a: number[]) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA10P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0233
  * @tc.name dts2cpp_class_0233
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 number[]（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0233', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0233.ts',
            `class ClsA10P1 {
        f(a: number, b: number[]) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA10P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0234
  * @tc.name dts2cpp_class_0234
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 string[]（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0234', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0234.ts',
            `class ClsA11P0 {
        f(a: string[]) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA11P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0235
  * @tc.name dts2cpp_class_0235
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 string[]（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0235', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0235.ts',
            `class ClsA11P1 {
        f(a: number, b: string[]) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA11P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0236
  * @tc.name dts2cpp_class_0236
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 boolean[]（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0236', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0236.ts',
            `class ClsA12P0 {
        f(a: boolean[]) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA12P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'boolean[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0237
  * @tc.name dts2cpp_class_0237
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 boolean[]（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0237', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0237.ts',
            `class ClsA12P1 {
        f(a: number, b: boolean[]) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA12P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'boolean[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0238
  * @tc.name dts2cpp_class_0238
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 Array<number>（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0238', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0238.ts',
            `class ClsA13P0 {
        f(a: Array<number>) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA13P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'Array');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0239
  * @tc.name dts2cpp_class_0239
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 Array<number>（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0239', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0239.ts',
            `class ClsA13P1 {
        f(a: number, b: Array<number>) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA13P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'Array');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0240
  * @tc.name dts2cpp_class_0240
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 Map<string, number>（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0240', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0240.ts',
            `class ClsA14P0 {
        f(a: Map<string, number>) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA14P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'Map');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0241
  * @tc.name dts2cpp_class_0241
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 Map<string, number>（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0241', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0241.ts',
            `class ClsA14P1 {
        f(a: number, b: Map<string, number>) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA14P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'Map');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0242
  * @tc.name dts2cpp_class_0242
  * @tc.desc dts2cpp class 扩充-规模：5 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0242', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0242.ts',
            `class ClsC005 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC005');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 5);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0242 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0243
  * @tc.name dts2cpp_class_0243
  * @tc.desc dts2cpp class 扩充-规模：10 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0243', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0243.ts',
            `class ClsC010 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC010');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 10);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0244
  * @tc.name dts2cpp_class_0244
  * @tc.desc dts2cpp class 扩充-规模：15 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0244', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0244.ts',
            `class ClsC015 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC015');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 15);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0245
  * @tc.name dts2cpp_class_0245
  * @tc.desc dts2cpp class 扩充-规模：20 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0245', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0245.ts',
            `class ClsC020 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC020');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 20);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0246
  * @tc.name dts2cpp_class_0246
  * @tc.desc dts2cpp class 扩充-规模：25 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0246', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0246.ts',
            `class ClsC025 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC025');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 25);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0247
  * @tc.name dts2cpp_class_0247
  * @tc.desc dts2cpp class 扩充-规模：30 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0247', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0247.ts',
            `class ClsC030 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC030');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 30);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0248
  * @tc.name dts2cpp_class_0248
  * @tc.desc dts2cpp class 扩充-规模：35 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0248', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0248.ts',
            `class ClsC035 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC035');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 35);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0249
  * @tc.name dts2cpp_class_0249
  * @tc.desc dts2cpp class 扩充-规模：40 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0249', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0249.ts',
            `class ClsC040 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC040');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 40);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0250
  * @tc.name dts2cpp_class_0250
  * @tc.desc dts2cpp class 扩充-规模：45 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0250', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0250.ts',
            `class ClsC045 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC045');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 45);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0251
  * @tc.name dts2cpp_class_0251
  * @tc.desc dts2cpp class 扩充-规模：50 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0251', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0251.ts',
            `class ClsC050 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC050');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 50);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0252
  * @tc.name dts2cpp_class_0252
  * @tc.desc dts2cpp class 扩充-规模：55 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0252', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0252.ts',
            `class ClsC055 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC055');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 55);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0253
  * @tc.name dts2cpp_class_0253
  * @tc.desc dts2cpp class 扩充-规模：60 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0253', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0253.ts',
            `class ClsC060 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC060');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 60);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0254
  * @tc.name dts2cpp_class_0254
  * @tc.desc dts2cpp class 扩充-规模：65 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0254', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0254.ts',
            `class ClsC065 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC065');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 65);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0255
  * @tc.name dts2cpp_class_0255
  * @tc.desc dts2cpp class 扩充-规模：70 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0255', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0255.ts',
            `class ClsC070 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC070');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 70);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0256
  * @tc.name dts2cpp_class_0256
  * @tc.desc dts2cpp class 扩充-规模：75 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0256', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0256.ts',
            `class ClsC075 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
        p70: number[];
        p71: string[];
        p72: boolean[];
        p73: Array<number>;
        p74: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC075');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 75);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0256 执行异常: ${String(err)}`);
    }
  });

});

