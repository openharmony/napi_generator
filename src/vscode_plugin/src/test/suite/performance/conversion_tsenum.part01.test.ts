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

suite('Performance_DTS2CPP_Enum_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Enum_Suite.');

  /**
  * @tc.number dts2cpp_enum_0001
  * @tc.name dts2cpp_enum_0001
  * @tc.desc dts2cpp enum 对齐 parsetsenum test_1：一般多行 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0001', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0001.ts',
            `enum Direction {
        Up,
        Down,
        Left,
        Right
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0002
  * @tc.name dts2cpp_enum_0002
  * @tc.desc dts2cpp enum 对齐 test_2：成员带行注释 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0002', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0002.ts',
            `enum Direction {
        Up,   // 上
        Down, // 下
        Left, // 左
        Right // 右
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0003
  * @tc.name dts2cpp_enum_0003
  * @tc.desc dts2cpp enum 对齐 test_3：首个成员赋值其余推导 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0003', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0003.ts',
            `enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0004
  * @tc.name dts2cpp_enum_0004
  * @tc.desc dts2cpp enum 对齐 test_4：全部成员位运算赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0004', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0004.ts',
            `enum Direction {
        Up = 1 << 1,
        Down = 1 << 2,
        Left = 1 << 3,
        Right = 1 << 4
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 4);
      assert.strictEqual(enumItem_0!.values![0], '1 << 1');
      assert.strictEqual(enumItem_0!.values![1], '1 << 2');
      assert.strictEqual(enumItem_0!.values![2], '1 << 3');
      assert.strictEqual(enumItem_0!.values![3], '1 << 4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0005
  * @tc.name dts2cpp_enum_0005
  * @tc.desc dts2cpp enum 对齐 test_5：const enum 无赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0005', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0005.ts',
            `const enum Direction {
        Up,
        Down,
        Left,
        Right
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0006
  * @tc.name dts2cpp_enum_0006
  * @tc.desc dts2cpp enum 对齐 test_6：const enum 复杂表达式赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0006', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0006.ts',
            `const enum Direction {
        Active = (2 ** 3) & 0xFF,
        Pending = Math.random(),
        Done
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'Active');
      assert.strictEqual(enumItem_0!.members![1], 'Pending');
      assert.strictEqual(enumItem_0!.members![2], 'Done');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '(2 ** 3) & 0xFF');
      assert.strictEqual(enumItem_0!.values![1], 'Math.random');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0007
  * @tc.name dts2cpp_enum_0007
  * @tc.desc dts2cpp enum 对齐 test_7：const enum 字符串值与乘法赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0007', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0007.ts',
            `const enum Direction {
        Active = "/api/v1",
        Pending = 30 * 1000
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Active');
      assert.strictEqual(enumItem_0!.members![1], 'Pending');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '"/api/v1"');
      assert.strictEqual(enumItem_0!.values![1], '30 * 1000');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0008
  * @tc.name dts2cpp_enum_0008
  * @tc.desc dts2cpp enum 对齐 test_8：联合赋值 ALL = Up | Down 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0008', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0008.ts',
            `enum Direction {
        Up,
        Down,
        ALL = Up | Down
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'ALL');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], 'Up | Down');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0009
  * @tc.name dts2cpp_enum_0009
  * @tc.desc dts2cpp enum 对齐 test_12：单行 enum 带块注释 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0009', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0009.ts',
            `enum Direction { /* 块注释 */ Up, Down, Left, Right };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0010
  * @tc.name dts2cpp_enum_0010
  * @tc.desc dts2cpp enum 对齐 test_14：单行 enum 位运算赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0010', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0010.ts',
            `enum Direction { Up = 1 << 1, Down = 1 << 2 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1 << 1');
      assert.strictEqual(enumItem_0!.values![1], '1 << 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0011
  * @tc.name dts2cpp_enum_0011
  * @tc.desc dts2cpp enum 对齐 test_15：单行 const enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0011', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0011.ts',
            `const enum Direction { Up, Down };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0012
  * @tc.name dts2cpp_enum_0012
  * @tc.desc dts2cpp enum 对齐 test_16：单行 const enum 复杂表达式 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0012', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0012.ts',
            `const enum Direction { Active = (2 ** 3) & 0xFF, Pending = Math.random() };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Active');
      assert.strictEqual(enumItem_0!.members![1], 'Pending');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '(2 ** 3) & 0xFF');
      assert.strictEqual(enumItem_0!.values![1], 'Math.random');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0013
  * @tc.name dts2cpp_enum_0013
  * @tc.desc dts2cpp enum 对齐 test_21：下划线命名 enum/成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0013', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0013.ts',
            `enum Direction_E {
        Up_0,
        Down_1,
        Left_2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction_E');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'Up_0');
      assert.strictEqual(enumItem_0!.members![1], 'Down_1');
      assert.strictEqual(enumItem_0!.members![2], 'Left_2');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0014
  * @tc.name dts2cpp_enum_0014
  * @tc.desc dts2cpp enum 对齐 test_22：export enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0014', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0014.ts',
            `export enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0015
  * @tc.name dts2cpp_enum_0015
  * @tc.desc dts2cpp enum 对齐 test_23：declare enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0015', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0015.ts',
            `declare enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0016
  * @tc.name dts2cpp_enum_0016
  * @tc.desc dts2cpp enum 对齐 test_24：namespace 嵌套 export enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0016', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0016.ts',
            `namespace testspace {
        export enum Direction {
            Up = 1 << 1,
            Down = 1 << 2
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1 << 1');
      assert.strictEqual(enumItem_0!.values![1], '1 << 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0017
  * @tc.name dts2cpp_enum_0017
  * @tc.desc dts2cpp enum 对齐 test_25：成员 as 别名（members 拆分为 as/West） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0017', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0017.ts',
            `enum Direction {
        Up,
        Down,
        Left as West,
        Right
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 6);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'Left');
      assert.strictEqual(enumItem_0!.members![3], 'as');
      assert.strictEqual(enumItem_0!.members![4], 'West');
      assert.strictEqual(enumItem_0!.members![5], 'Right');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0018
  * @tc.name dts2cpp_enum_0018
  * @tc.desc dts2cpp enum 对齐 test_26：装饰符赋值（values 为空串） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0018', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0018.ts',
            `enum Direction {
        Up = 1,
        Pending = @Mathrandom,
        Done
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Pending');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0019
  * @tc.name dts2cpp_enum_0019
  * @tc.desc dts2cpp enum 对齐 test_27：下划线开头成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0019', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0019.ts',
            `enum Direction {
        _Active = "/api/v1",
        _Pending
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], '_Active');
      assert.strictEqual(enumItem_0!.members![1], '_Pending');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], '"/api/v1"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0020
  * @tc.name dts2cpp_enum_0020
  * @tc.desc dts2cpp enum 对齐 test_28：匿名 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0020', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0020.ts',
            `enum {
        Up,
        Down,
        ALL = Up | Down
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === '');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'ALL');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], 'Up | Down');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0021
  * @tc.name dts2cpp_enum_0021
  * @tc.desc dts2cpp enum 对齐 test_31：空成员 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0021', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0021.ts',
            `enum Direction {};`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 0);
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0022
  * @tc.name dts2cpp_enum_0022
  * @tc.desc dts2cpp enum 对齐 test_32：完全匿名空 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0022', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0022.ts',
            `enum {};`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === '');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 0);
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0023
  * @tc.name dts2cpp_enum_0023
  * @tc.desc dts2cpp enum 对齐 test_33：同文件两个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0023', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0023.ts',
            `enum Direction {
        Up,
        Down
    };
enum Direction2 {
        Left,
        Right
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 2);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'Direction2');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'Left');
      assert.strictEqual(enumItem_1!.members![1], 'Right');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0024
  * @tc.name dts2cpp_enum_0024
  * @tc.desc dts2cpp enum 对齐 test_34：整体注释掉的 enum（enums 为空） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0024', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0024.ts',
            `/* enum Direction {
        Up,
        Down
    }; */`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0025
  * @tc.name dts2cpp_enum_0025
  * @tc.desc dts2cpp enum 对齐 test_35：const enum 箭头函数赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0025', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0025.ts',
            `const enum Direction {
        Up = () => {}
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 1);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], '() => {}');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0026
  * @tc.name dts2cpp_enum_0026
  * @tc.desc dts2cpp enum 对齐 test_36：空赋值 Active = , 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0026', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0026.ts',
            `enum Direction {
        Active = ,
        Done
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Active');
      assert.strictEqual(enumItem_0!.members![1], 'Done');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0027
  * @tc.name dts2cpp_enum_0027
  * @tc.desc dts2cpp enum 对齐 test_37：不完整字符串赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0027', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0027.ts',
            `enum Direction {
        Active = ",
        Done
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Active');
      assert.strictEqual(enumItem_0!.members![1], 'Done');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], '",');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0028
  * @tc.name dts2cpp_enum_0028
  * @tc.desc dts2cpp enum 对齐 test_38：不完整联合赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0028', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0028.ts',
            `enum Direction {
        Up,
        Down,
        ALL = Up |
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'Up');
      assert.strictEqual(enumItem_0!.members![1], 'Down');
      assert.strictEqual(enumItem_0!.members![2], 'ALL');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], 'Up |');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0029
  * @tc.name dts2cpp_enum_0029
  * @tc.desc dts2cpp enum 扩充：10 成员无值 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0029', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0029.ts',
            `enum Status10 {
        S0, S1, S2, S3, S4, S5, S6, S7, S8, S9
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Status10');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 10);
      assert.strictEqual(enumItem_0!.members![0], 'S0');
      assert.strictEqual(enumItem_0!.members![1], 'S1');
      assert.strictEqual(enumItem_0!.members![2], 'S2');
      assert.strictEqual(enumItem_0!.members![3], 'S3');
      assert.strictEqual(enumItem_0!.members![4], 'S4');
      assert.strictEqual(enumItem_0!.members![5], 'S5');
      assert.strictEqual(enumItem_0!.members![6], 'S6');
      assert.strictEqual(enumItem_0!.members![7], 'S7');
      assert.strictEqual(enumItem_0!.members![8], 'S8');
      assert.strictEqual(enumItem_0!.members![9], 'S9');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0029 执行异常: ${String(err)}`);
    }
  });

});
