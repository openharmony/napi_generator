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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Enum_Suite part07.');

  /**
  * @tc.number : dts2cpp_enum_0354
  * @tc.name : dts2cpp_enum_0354
  * @tc.desc : dts2cpp enum 扩充-computed 位移表达式 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0354', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum354.ts', `enum E { A = 1 << 1, B = 1 << 2, C = 1 << 3 };`);
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
      assert.strictEqual(enumItem!.values![0], '1 << 1');
      assert.strictEqual(enumItem!.values![1], '1 << 2');
      assert.strictEqual(enumItem!.values![2], '1 << 3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0354 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0355
  * @tc.name : dts2cpp_enum_0355
  * @tc.desc : dts2cpp enum 扩充-computed 混合赋值 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0355', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum355.ts', `enum E { A = 1 << 1, B, C = A | 4 };`);
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
      assert.strictEqual(enumItem!.values!.length, 2);
      assert.strictEqual(enumItem!.values![0], '1 << 1');
      assert.strictEqual(enumItem!.values![1], 'A | 4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0355 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0356
  * @tc.name : dts2cpp_enum_0356
  * @tc.desc : dts2cpp enum 扩充-const enum 声明 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0356', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum356.ts', `const enum CE { X, Y, Z };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'CE');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 3);
      assert.strictEqual(enumItem!.members![0], 'X');
      assert.strictEqual(enumItem!.members![1], 'Y');
      assert.strictEqual(enumItem!.members![2], 'Z');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0356 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0356 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0357
  * @tc.name : dts2cpp_enum_0357
  * @tc.desc : dts2cpp enum 扩充-hex 字面量 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0357', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum357.ts', `enum E { A = 0xFF, B = 0x100, C = 0xFFFF };`);
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
      assert.strictEqual(enumItem!.values![0], '0xFF');
      assert.strictEqual(enumItem!.values![1], '0x100');
      assert.strictEqual(enumItem!.values![2], '0xFFFF');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0357 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0358
  * @tc.name : dts2cpp_enum_0358
  * @tc.desc : dts2cpp enum 扩充-负数起始 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0358', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum358.ts', `enum E { A = -1, B = 0, C = 1 };`);
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
      assert.strictEqual(enumItem!.values![0], '-1');
      assert.strictEqual(enumItem!.values![1], '0');
      assert.strictEqual(enumItem!.values![2], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0358 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0359
  * @tc.name : dts2cpp_enum_0359
  * @tc.desc : dts2cpp enum 扩充-全字符串 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0359', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum359.ts', `enum E { A = "a", B = "b", C = "c" };`);
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
      assert.strictEqual(enumItem!.values![0], '"a"');
      assert.strictEqual(enumItem!.values![1], '"b"');
      assert.strictEqual(enumItem!.values![2], '"c"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0359 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0360
  * @tc.name : dts2cpp_enum_0360
  * @tc.desc : dts2cpp enum 扩充-数字字符串混合 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0360', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum360.ts', `enum E { A = 1, B = "two", C = 3 };`);
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
      assert.strictEqual(enumItem!.values![0], '1');
      assert.strictEqual(enumItem!.values![1], '"two"');
      assert.strictEqual(enumItem!.values![2], '3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0360 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0360 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0361
  * @tc.name : dts2cpp_enum_0361
  * @tc.desc : dts2cpp enum 扩充-boolean 表达式 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0361', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum361.ts', `enum E { A = true as any, B = false as any };`);
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
      assert.strictEqual(enumItem!.values![0], 'true as any');
      assert.strictEqual(enumItem!.values![1], 'false as any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0361 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0361 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0362
  * @tc.name : dts2cpp_enum_0362
  * @tc.desc : dts2cpp enum 扩充-颜色 hex 字符串 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0362', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum362.ts', `enum Color { Red = "#f00", Green = "#0f0", Blue = "#00f" };`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'Color');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 3);
      assert.strictEqual(enumItem!.members![0], 'Red');
      assert.strictEqual(enumItem!.members![1], 'Green');
      assert.strictEqual(enumItem!.members![2], 'Blue');
      assert.strictEqual(enumItem!.values!.length, 3);
      assert.strictEqual(enumItem!.values![0], '"#f00"');
      assert.strictEqual(enumItem!.values![1], '"#0f0"');
      assert.strictEqual(enumItem!.values![2], '"#00f"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0362 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0363
  * @tc.name : dts2cpp_enum_0363
  * @tc.desc : dts2cpp enum 扩充-算术表达式 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0363', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum363.ts', `enum E { A = 1 + 2, B = 3 * 4, C = 10 - 5 };`);
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
      assert.strictEqual(enumItem!.values![0], '1 + 2');
      assert.strictEqual(enumItem!.values![1], '3 * 4');
      assert.strictEqual(enumItem!.values![2], '10 - 5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0363 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0363 执行异常: ${String(err)}`);
    }
  });
});
