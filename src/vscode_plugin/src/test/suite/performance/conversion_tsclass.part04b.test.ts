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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Class_Suite part04.');

  /**
  * @tc.number dts2cpp_class_0178
  * @tc.name dts2cpp_class_0178
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 any（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0178', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0178.ts',
            `class ClsR03N0 {
        m0(): any { return {} as any; }
        m1(): any { return {} as any; }
        m2(): any { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR03N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0179
  * @tc.name dts2cpp_class_0179
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 any（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0179', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0179.ts',
            `class ClsR03N1 {
        m0(a: number): any { return {} as any; }
        m1(a: string): any { return {} as any; }
        m2(a: boolean): any { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR03N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0180
  * @tc.name dts2cpp_class_0180
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 unknown（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0180', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0180.ts',
            `class ClsR04N0 {
        m0(): unknown { return {} as any; }
        m1(): unknown { return {} as any; }
        m2(): unknown { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR04N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'unknown');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'unknown');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'unknown');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0181
  * @tc.name dts2cpp_class_0181
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 unknown（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0181', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0181.ts',
            `class ClsR04N1 {
        m0(a: number): unknown { return {} as any; }
        m1(a: string): unknown { return {} as any; }
        m2(a: boolean): unknown { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR04N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'unknown');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'unknown');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'unknown');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0182
  * @tc.name dts2cpp_class_0182
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 null（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0182', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0182.ts',
            `class ClsR05N0 {
        m0(): null { return {} as any; }
        m1(): null { return {} as any; }
        m2(): null { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR05N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'null');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'null');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'null');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0183
  * @tc.name dts2cpp_class_0183
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 null（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0183', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0183.ts',
            `class ClsR05N1 {
        m0(a: number): null { return {} as any; }
        m1(a: string): null { return {} as any; }
        m2(a: boolean): null { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR05N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'null');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'null');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'null');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0184
  * @tc.name dts2cpp_class_0184
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 undefined（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0184', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0184.ts',
            `class ClsR06N0 {
        m0(): undefined { return {} as any; }
        m1(): undefined { return {} as any; }
        m2(): undefined { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR06N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'undefined');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'undefined');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'undefined');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0185
  * @tc.name dts2cpp_class_0185
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 undefined（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0185', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0185.ts',
            `class ClsR06N1 {
        m0(a: number): undefined { return {} as any; }
        m1(a: string): undefined { return {} as any; }
        m2(a: boolean): undefined { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR06N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'undefined');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'undefined');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'undefined');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0185 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0186
  * @tc.name dts2cpp_class_0186
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 symbol（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0186', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0186.ts',
            `class ClsR07N0 {
        m0(): symbol { return {} as any; }
        m1(): symbol { return {} as any; }
        m2(): symbol { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR07N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'symbol');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'symbol');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'symbol');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0186 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0187
  * @tc.name dts2cpp_class_0187
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 symbol（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0187', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0187.ts',
            `class ClsR07N1 {
        m0(a: number): symbol { return {} as any; }
        m1(a: string): symbol { return {} as any; }
        m2(a: boolean): symbol { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR07N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'symbol');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'symbol');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'symbol');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0187 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0188
  * @tc.name dts2cpp_class_0188
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 bigint（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0188', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0188.ts',
            `class ClsR08N0 {
        m0(): bigint { return {} as any; }
        m1(): bigint { return {} as any; }
        m2(): bigint { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR08N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'bigint');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'bigint');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'bigint');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0188 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0189
  * @tc.name dts2cpp_class_0189
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 bigint（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0189', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0189.ts',
            `class ClsR08N1 {
        m0(a: number): bigint { return {} as any; }
        m1(a: string): bigint { return {} as any; }
        m2(a: boolean): bigint { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR08N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'bigint');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'bigint');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'bigint');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0189 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0190
  * @tc.name dts2cpp_class_0190
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 object（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0190', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0190.ts',
            `class ClsR09N0 {
        m0(): object { return {} as any; }
        m1(): object { return {} as any; }
        m2(): object { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR09N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'object');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'object');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'object');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0190 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0191
  * @tc.name dts2cpp_class_0191
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 object（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0191', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0191.ts',
            `class ClsR09N1 {
        m0(a: number): object { return {} as any; }
        m1(a: string): object { return {} as any; }
        m2(a: boolean): object { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR09N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'object');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'object');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'object');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0191 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0192
  * @tc.name dts2cpp_class_0192
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 number[]（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0192', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0192.ts',
            `class ClsR10N0 {
        m0(): number[] { return {} as any; }
        m1(): number[] { return {} as any; }
        m2(): number[] { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR10N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0192 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0193
  * @tc.name dts2cpp_class_0193
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 number[]（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0193', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0193.ts',
            `class ClsR10N1 {
        m0(a: number): number[] { return {} as any; }
        m1(a: string): number[] { return {} as any; }
        m2(a: boolean): number[] { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR10N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0194
  * @tc.name dts2cpp_class_0194
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 string[]（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0194', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0194.ts',
            `class ClsR11N0 {
        m0(): string[] { return {} as any; }
        m1(): string[] { return {} as any; }
        m2(): string[] { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR11N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'string[]');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'string[]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'string[]');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0195
  * @tc.name dts2cpp_class_0195
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 string[]（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0195', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0195.ts',
            `class ClsR11N1 {
        m0(a: number): string[] { return {} as any; }
        m1(a: string): string[] { return {} as any; }
        m2(a: boolean): string[] { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR11N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'string[]');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'string[]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'string[]');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0195 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0196
  * @tc.name dts2cpp_class_0196
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 boolean[][]（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0196', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0196.ts',
            `class ClsR12N0 {
        m0(): boolean[][] { return {} as any; }
        m1(): boolean[][] { return {} as any; }
        m2(): boolean[][] { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR12N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'boolean[][]');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'boolean[][]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'boolean[][]');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0196 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0197
  * @tc.name dts2cpp_class_0197
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 boolean[][]（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0197', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0197.ts',
            `class ClsR12N1 {
        m0(a: number): boolean[][] { return {} as any; }
        m1(a: string): boolean[][] { return {} as any; }
        m2(a: boolean): boolean[][] { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR12N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'boolean[][]');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'boolean[][]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'boolean[][]');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0197 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0198
  * @tc.name dts2cpp_class_0198
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 [string, number]（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0198', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0198.ts',
            `class ClsR13N0 {
        m0(): [string, number] { return {} as any; }
        m1(): [string, number] { return {} as any; }
        m2(): [string, number] { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR13N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '[string, number]');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '[string, number]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '[string, number]');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0198 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0199
  * @tc.name dts2cpp_class_0199
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 [string, number]（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0199', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0199.ts',
            `class ClsR13N1 {
        m0(a: number): [string, number] { return {} as any; }
        m1(a: string): [string, number] { return {} as any; }
        m2(a: boolean): [string, number] { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR13N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '[string, number]');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '[string, number]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '[string, number]');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0199 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0200
  * @tc.name dts2cpp_class_0200
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 (a: number) => void（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0200', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0200.ts',
            `class ClsR14N0 {
        m0(): (a: number) => void { return {} as any; }
        m1(): (a: number) => void { return {} as any; }
        m2(): (a: number) => void { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR14N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '(a: number) => void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '(a: number) => void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '(a: number) => void');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0200 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0201
  * @tc.name dts2cpp_class_0201
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 (a: number) => void（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0201', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0201.ts',
            `class ClsR14N1 {
        m0(a: number): (a: number) => void { return {} as any; }
        m1(a: string): (a: number) => void { return {} as any; }
        m2(a: boolean): (a: number) => void { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR14N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '(a: number) => void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '(a: number) => void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '(a: number) => void');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0201 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0202
  * @tc.name dts2cpp_class_0202
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 string | number（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0202', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0202.ts',
            `class ClsR15N0 {
        m0(): string | number { return {} as any; }
        m1(): string | number { return {} as any; }
        m2(): string | number { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR15N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'string | number');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'string | number');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'string | number');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0202 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0203
  * @tc.name dts2cpp_class_0203
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 string | number（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0203', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0203.ts',
            `class ClsR15N1 {
        m0(a: number): string | number { return {} as any; }
        m1(a: string): string | number { return {} as any; }
        m2(a: boolean): string | number { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR15N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'string | number');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'string | number');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'string | number');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0203 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0204
  * @tc.name dts2cpp_class_0204
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 boolean | null（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0204', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0204.ts',
            `class ClsR16N0 {
        m0(): boolean | null { return {} as any; }
        m1(): boolean | null { return {} as any; }
        m2(): boolean | null { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR16N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'boolean | null');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'boolean | null');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'boolean | null');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0205
  * @tc.name dts2cpp_class_0205
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 boolean | null（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0205', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0205.ts',
            `class ClsR16N1 {
        m0(a: number): boolean | null { return {} as any; }
        m1(a: string): boolean | null { return {} as any; }
        m2(a: boolean): boolean | null { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR16N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'boolean | null');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'boolean | null');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'boolean | null');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0206
  * @tc.name dts2cpp_class_0206
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 "lit" | 1（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0206', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0206.ts',
            `class ClsR17N0 {
        m0(): "lit" | 1 { return {} as any; }
        m1(): "lit" | 1 { return {} as any; }
        m2(): "lit" | 1 { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR17N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '"lit" | 1');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '"lit" | 1');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '"lit" | 1');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0207
  * @tc.name dts2cpp_class_0207
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 "lit" | 1（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0207', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0207.ts',
            `class ClsR17N1 {
        m0(a: number): "lit" | 1 { return {} as any; }
        m1(a: string): "lit" | 1 { return {} as any; }
        m2(a: boolean): "lit" | 1 { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR17N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '"lit" | 1');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '"lit" | 1');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '"lit" | 1');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0207 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0208
  * @tc.name dts2cpp_class_0208
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 42（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0208', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0208.ts',
            `class ClsR18N0 {
        m0(): 42 { return {} as any; }
        m1(): 42 { return {} as any; }
        m2(): 42 { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR18N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '42');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '42');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '42');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0209
  * @tc.name dts2cpp_class_0209
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 42（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0209', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0209.ts',
            `class ClsR18N1 {
        m0(a: number): 42 { return {} as any; }
        m1(a: string): 42 { return {} as any; }
        m2(a: boolean): 42 { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR18N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '42');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '42');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '42');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0210
  * @tc.name dts2cpp_class_0210
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 { id: number }（无参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0210', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0210.ts',
            `class ClsR19N0 {
        m0(): { id: number } { return {} as any; }
        m1(): { id: number } { return {} as any; }
        m2(): { id: number } { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR19N0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0211
  * @tc.name dts2cpp_class_0211
  * @tc.desc dts2cpp class 扩充-返回矩阵：方法返回 { id: number }（带参方法 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0211', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0211.ts',
            `class ClsR19N1 {
        m0(a: number): { id: number } { return {} as any; }
        m1(a: string): { id: number } { return {} as any; }
        m2(a: boolean): { id: number } { return {} as any; }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsR19N1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, '{ id: number }');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0212
  * @tc.name dts2cpp_class_0212
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 number（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0212', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0212.ts',
            `class ClsA00P0 {
        f(a: number) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA00P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0213
  * @tc.name dts2cpp_class_0213
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 number（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0213', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0213.ts',
            `class ClsA00P1 {
        f(a: number, b: number) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA00P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0214
  * @tc.name dts2cpp_class_0214
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 string（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0214', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0214.ts',
            `class ClsA01P0 {
        f(a: string) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA01P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0215
  * @tc.name dts2cpp_class_0215
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 string（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0215', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0215.ts',
            `class ClsA01P1 {
        f(a: number, b: string) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA01P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0216
  * @tc.name dts2cpp_class_0216
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 boolean（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0216', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0216.ts',
            `class ClsA02P0 {
        f(a: boolean) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA02P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0216 执行异常: ${String(err)}`);
    }
  });

});

