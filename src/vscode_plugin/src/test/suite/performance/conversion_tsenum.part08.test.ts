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

suite('Performance_DTS2CPP_Enum_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Enum_Suite part08.');

  /**
  * @tc.number : dts2cpp_enum_0364
  * @tc.name : dts2cpp_enum_0364
  * @tc.desc : dts2cpp enum 扩充-R2-位移 OR 组合 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0364', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum364.ts', `enum E { A = 1 << 0, B = 1 << 1, C = 1 << 2, D = 1 << 3 };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'E');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 4);
      assert.strictEqual(enumItem!.members![0], 'A');
      assert.strictEqual(enumItem!.members![1], 'B');
      assert.strictEqual(enumItem!.members![2], 'C');
      assert.strictEqual(enumItem!.members![3], 'D');
      assert.strictEqual(enumItem!.values!.length, 4);
      assert.strictEqual(enumItem!.values![0], '1 << 0');
      assert.strictEqual(enumItem!.values![1], '1 << 1');
      assert.strictEqual(enumItem!.values![2], '1 << 2');
      assert.strictEqual(enumItem!.values![3], '1 << 3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0364 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0364 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0365
  * @tc.name : dts2cpp_enum_0365
  * @tc.desc : dts2cpp enum 扩充-R2-按位取反 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0365', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum365.ts', `enum E { A = ~0, B = 0 };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'E');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 2);
      assert.strictEqual(enumItem!.members![0], 'A');
      assert.strictEqual(enumItem!.members![1], 'B');
      assert.strictEqual(enumItem!.values!.length, 2);
      assert.strictEqual(enumItem!.values![0], '~0');
      assert.strictEqual(enumItem!.values![1], '0');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0365 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0365 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0366
  * @tc.name : dts2cpp_enum_0366
  * @tc.desc : dts2cpp enum 扩充-R2-二进制字面量 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0366', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum366.ts', `enum E { A = 0b1010, B = 0b0101 };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'E');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 2);
      assert.strictEqual(enumItem!.members![0], 'A');
      assert.strictEqual(enumItem!.members![1], 'B');
      assert.strictEqual(enumItem!.values!.length, 2);
      assert.strictEqual(enumItem!.values![0], '0b1010');
      assert.strictEqual(enumItem!.values![1], '0b0101');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0366 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0366 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0367
  * @tc.name : dts2cpp_enum_0367
  * @tc.desc : dts2cpp enum 扩充-R2-数字分隔符 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0367', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum367.ts', `enum E { A = 1_000, B = 2_000 };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'E');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 2);
      assert.strictEqual(enumItem!.members![0], 'A');
      assert.strictEqual(enumItem!.members![1], 'B');
      assert.strictEqual(enumItem!.values!.length, 2);
      assert.strictEqual(enumItem!.values![0], '1_000');
      assert.strictEqual(enumItem!.values![1], '2_000');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0367 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0367 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0368
  * @tc.name : dts2cpp_enum_0368
  * @tc.desc : dts2cpp enum 扩充-R2-8 方向 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0368', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum368.ts', `enum Dir { N, E, S, W, NE, NW, SE, SW };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'Dir');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 8);
      assert.strictEqual(enumItem!.members![0], 'N');
      assert.strictEqual(enumItem!.members![1], 'E');
      assert.strictEqual(enumItem!.members![2], 'S');
      assert.strictEqual(enumItem!.members![3], 'W');
      assert.strictEqual(enumItem!.members![4], 'NE');
      assert.strictEqual(enumItem!.members![5], 'NW');
      assert.strictEqual(enumItem!.members![6], 'SE');
      assert.strictEqual(enumItem!.members![7], 'SW');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0368 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0368 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0369
  * @tc.name : dts2cpp_enum_0369
  * @tc.desc : dts2cpp enum 扩充-R2-HTTP 状态码 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0369', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum369.ts', `enum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'HttpStatus');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 3);
      assert.strictEqual(enumItem!.members![0], 'OK');
      assert.strictEqual(enumItem!.members![1], 'NotFound');
      assert.strictEqual(enumItem!.members![2], 'ServerError');
      assert.strictEqual(enumItem!.values!.length, 3);
      assert.strictEqual(enumItem!.values![0], '200');
      assert.strictEqual(enumItem!.values![1], '404');
      assert.strictEqual(enumItem!.values![2], '500');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0369 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0369 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0370
  * @tc.name : dts2cpp_enum_0370
  * @tc.desc : dts2cpp enum 扩充-R2-日志级别 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0370', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum370.ts', `enum LogLevel { Trace, Debug, Info, Warn, Error, Fatal };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'LogLevel');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 6);
      assert.strictEqual(enumItem!.members![0], 'Trace');
      assert.strictEqual(enumItem!.members![1], 'Debug');
      assert.strictEqual(enumItem!.members![2], 'Info');
      assert.strictEqual(enumItem!.members![3], 'Warn');
      assert.strictEqual(enumItem!.members![4], 'Error');
      assert.strictEqual(enumItem!.members![5], 'Fatal');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0370 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0371
  * @tc.name : dts2cpp_enum_0371
  * @tc.desc : dts2cpp enum 扩充-R2-三字符串 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0371', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum371.ts', `enum E { A = "alpha", B = "beta", C = "gamma" };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'E');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 3);
      assert.strictEqual(enumItem!.members![0], 'A');
      assert.strictEqual(enumItem!.members![1], 'B');
      assert.strictEqual(enumItem!.members![2], 'C');
      assert.strictEqual(enumItem!.values!.length, 3);
      assert.strictEqual(enumItem!.values![0], '"alpha"');
      assert.strictEqual(enumItem!.values![1], '"beta"');
      assert.strictEqual(enumItem!.values![2], '"gamma"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0371 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0371 执行异常: ${String(err)}`);
    }
  });
});
