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

suite('Performance_DTS2CPP_Struct_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Struct_Suite part04.');

  /**
  * @tc.number dts2cpp_struct_0175
  * @tc.name dts2cpp_struct_0175
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 any（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0175', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0175.ts',
            `interface IfR03N0 {
        m0(): any;
        m1(): any;
        m2(): any;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR03N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'any');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'any');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'any');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0176
  * @tc.name dts2cpp_struct_0176
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 any（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0176', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0176.ts',
            `interface IfR03N1 {
        m0(a: number): any;
        m1(a: string): any;
        m2(a: boolean): any;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR03N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'any');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'any');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'any');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0177
  * @tc.name dts2cpp_struct_0177
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 unknown（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0177', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0177.ts',
            `interface IfR04N0 {
        m0(): unknown;
        m1(): unknown;
        m2(): unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR04N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'unknown');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'unknown');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'unknown');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0178
  * @tc.name dts2cpp_struct_0178
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 unknown（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0178', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0178.ts',
            `interface IfR04N1 {
        m0(a: number): unknown;
        m1(a: string): unknown;
        m2(a: boolean): unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR04N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'unknown');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'unknown');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'unknown');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0179
  * @tc.name dts2cpp_struct_0179
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 null（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0179', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0179.ts',
            `interface IfR05N0 {
        m0(): null;
        m1(): null;
        m2(): null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR05N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'null');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'null');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'null');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0180
  * @tc.name dts2cpp_struct_0180
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 null（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0180', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0180.ts',
            `interface IfR05N1 {
        m0(a: number): null;
        m1(a: string): null;
        m2(a: boolean): null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR05N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'null');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'null');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'null');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0181
  * @tc.name dts2cpp_struct_0181
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 undefined（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0181', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0181.ts',
            `interface IfR06N0 {
        m0(): undefined;
        m1(): undefined;
        m2(): undefined;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR06N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'undefined');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'undefined');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'undefined');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0182
  * @tc.name dts2cpp_struct_0182
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 undefined（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0182', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0182.ts',
            `interface IfR06N1 {
        m0(a: number): undefined;
        m1(a: string): undefined;
        m2(a: boolean): undefined;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR06N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'undefined');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'undefined');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'undefined');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0183
  * @tc.name dts2cpp_struct_0183
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 symbol（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0183', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0183.ts',
            `interface IfR07N0 {
        m0(): symbol;
        m1(): symbol;
        m2(): symbol;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR07N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'symbol');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'symbol');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'symbol');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0184
  * @tc.name dts2cpp_struct_0184
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 symbol（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0184', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0184.ts',
            `interface IfR07N1 {
        m0(a: number): symbol;
        m1(a: string): symbol;
        m2(a: boolean): symbol;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR07N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'symbol');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'symbol');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'symbol');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0185
  * @tc.name dts2cpp_struct_0185
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 bigint（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0185', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0185.ts',
            `interface IfR08N0 {
        m0(): bigint;
        m1(): bigint;
        m2(): bigint;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR08N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'bigint');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'bigint');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'bigint');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0185 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0186
  * @tc.name dts2cpp_struct_0186
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 bigint（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0186', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0186.ts',
            `interface IfR08N1 {
        m0(a: number): bigint;
        m1(a: string): bigint;
        m2(a: boolean): bigint;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR08N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'bigint');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'bigint');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'bigint');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0186 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0187
  * @tc.name dts2cpp_struct_0187
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 object（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0187', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0187.ts',
            `interface IfR09N0 {
        m0(): object;
        m1(): object;
        m2(): object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR09N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'object');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'object');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'object');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0187 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0188
  * @tc.name dts2cpp_struct_0188
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 object（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0188', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0188.ts',
            `interface IfR09N1 {
        m0(a: number): object;
        m1(a: string): object;
        m2(a: boolean): object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR09N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'object');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'object');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'object');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0188 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0189
  * @tc.name dts2cpp_struct_0189
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 number[]（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0189', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0189.ts',
            `interface IfR10N0 {
        m0(): number[];
        m1(): number[];
        m2(): number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR10N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'number[]');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'number[]');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'number[]');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0189 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0190
  * @tc.name dts2cpp_struct_0190
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 number[]（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0190', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0190.ts',
            `interface IfR10N1 {
        m0(a: number): number[];
        m1(a: string): number[];
        m2(a: boolean): number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR10N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'number[]');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'number[]');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'number[]');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0190 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0191
  * @tc.name dts2cpp_struct_0191
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 string[]（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0191', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0191.ts',
            `interface IfR11N0 {
        m0(): string[];
        m1(): string[];
        m2(): string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR11N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'string[]');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'string[]');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'string[]');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0191 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0192
  * @tc.name dts2cpp_struct_0192
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 string[]（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0192', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0192.ts',
            `interface IfR11N1 {
        m0(a: number): string[];
        m1(a: string): string[];
        m2(a: boolean): string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR11N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'string[]');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'string[]');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'string[]');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0192 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0193
  * @tc.name dts2cpp_struct_0193
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean[][]（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0193', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0193.ts',
            `interface IfR12N0 {
        m0(): boolean[][];
        m1(): boolean[][];
        m2(): boolean[][];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR12N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'boolean[][]');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'boolean[][]');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'boolean[][]');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0194
  * @tc.name dts2cpp_struct_0194
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean[][]（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0194', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0194.ts',
            `interface IfR12N1 {
        m0(a: number): boolean[][];
        m1(a: string): boolean[][];
        m2(a: boolean): boolean[][];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR12N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'boolean[][]');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'boolean[][]');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'boolean[][]');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0195
  * @tc.name dts2cpp_struct_0195
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 [string, number]（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0195', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0195.ts',
            `interface IfR13N0 {
        m0(): [string, number];
        m1(): [string, number];
        m2(): [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR13N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '[string, number]');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '[string, number]');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '[string, number]');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0195 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0196
  * @tc.name dts2cpp_struct_0196
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 [string, number]（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0196', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0196.ts',
            `interface IfR13N1 {
        m0(a: number): [string, number];
        m1(a: string): [string, number];
        m2(a: boolean): [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR13N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '[string, number]');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '[string, number]');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '[string, number]');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0196 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0197
  * @tc.name dts2cpp_struct_0197
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 (a: number) => void（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0197', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0197.ts',
            `interface IfR14N0 {
        m0(): (a: number) => void;
        m1(): (a: number) => void;
        m2(): (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR14N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '(a: number) => void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '(a: number) => void');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '(a: number) => void');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0197 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0198
  * @tc.name dts2cpp_struct_0198
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 (a: number) => void（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0198', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0198.ts',
            `interface IfR14N1 {
        m0(a: number): (a: number) => void;
        m1(a: string): (a: number) => void;
        m2(a: boolean): (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR14N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '(a: number) => void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '(a: number) => void');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '(a: number) => void');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0198 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0199
  * @tc.name dts2cpp_struct_0199
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 string | number（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0199', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0199.ts',
            `interface IfR15N0 {
        m0(): string | number;
        m1(): string | number;
        m2(): string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR15N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'string | number');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'string | number');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'string | number');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0199 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0200
  * @tc.name dts2cpp_struct_0200
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 string | number（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0200', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0200.ts',
            `interface IfR15N1 {
        m0(a: number): string | number;
        m1(a: string): string | number;
        m2(a: boolean): string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR15N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'string | number');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'string | number');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'string | number');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0200 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0201
  * @tc.name dts2cpp_struct_0201
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean | null（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0201', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0201.ts',
            `interface IfR16N0 {
        m0(): boolean | null;
        m1(): boolean | null;
        m2(): boolean | null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR16N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'boolean | null');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'boolean | null');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'boolean | null');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0201 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0202
  * @tc.name dts2cpp_struct_0202
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean | null（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0202', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0202.ts',
            `interface IfR16N1 {
        m0(a: number): boolean | null;
        m1(a: string): boolean | null;
        m2(a: boolean): boolean | null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR16N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'boolean | null');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'boolean | null');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'boolean | null');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0202 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0203
  * @tc.name dts2cpp_struct_0203
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 "lit" | 1（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0203', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0203.ts',
            `interface IfR17N0 {
        m0(): "lit" | 1;
        m1(): "lit" | 1;
        m2(): "lit" | 1;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR17N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '"lit" | 1');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '"lit" | 1');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '"lit" | 1');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0203 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0204
  * @tc.name dts2cpp_struct_0204
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 "lit" | 1（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0204', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0204.ts',
            `interface IfR17N1 {
        m0(a: number): "lit" | 1;
        m1(a: string): "lit" | 1;
        m2(a: boolean): "lit" | 1;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR17N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '"lit" | 1');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '"lit" | 1');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '"lit" | 1');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0205
  * @tc.name dts2cpp_struct_0205
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 42（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0205', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0205.ts',
            `interface IfR18N0 {
        m0(): 42;
        m1(): 42;
        m2(): 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR18N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '42');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '42');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '42');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0206
  * @tc.name dts2cpp_struct_0206
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 42（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0206', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0206.ts',
            `interface IfR18N1 {
        m0(a: number): 42;
        m1(a: string): 42;
        m2(a: boolean): 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR18N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '42');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '42');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '42');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0207
  * @tc.name dts2cpp_struct_0207
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 { id: number }（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0207', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0207.ts',
            `interface IfR19N0 {
        m0(): { id: number };
        m1(): { id: number };
        m2(): { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR19N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '{ id: number }');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '{ id: number }');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '{ id: number }');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0207 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0208
  * @tc.name dts2cpp_struct_0208
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 { id: number }（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0208', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0208.ts',
            `interface IfR19N1 {
        m0(a: number): { id: number };
        m1(a: string): { id: number };
        m2(a: boolean): { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR19N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '{ id: number }');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '{ id: number }');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '{ id: number }');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0209
  * @tc.name dts2cpp_struct_0209
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 number（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0209', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0209.ts',
            `interface IfA00P0 {
        f(a: number): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA00P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0210
  * @tc.name dts2cpp_struct_0210
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 number（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0210', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0210.ts',
            `interface IfA00P1 {
        f(a: number, b: number): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA00P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0211
  * @tc.name dts2cpp_struct_0211
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 string（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0211', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0211.ts',
            `interface IfA01P0 {
        f(a: string): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA01P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0212
  * @tc.name dts2cpp_struct_0212
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 string（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0212', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0212.ts',
            `interface IfA01P1 {
        f(a: number, b: string): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA01P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0213
  * @tc.name dts2cpp_struct_0213
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 boolean（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0213', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0213.ts',
            `interface IfA02P0 {
        f(a: boolean): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA02P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0213 执行异常: ${String(err)}`);
    }
  });

});

