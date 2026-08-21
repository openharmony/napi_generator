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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Enum_Suite part03.');

  /**
  * @tc.number dts2cpp_enum_0062
  * @tc.name dts2cpp_enum_0062
  * @tc.desc dts2cpp enum 扩充-矩阵：2 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0062', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0062.ts',
            `enum EnumC02F0 {
        M0,
        M1
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC02F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0063
  * @tc.name dts2cpp_enum_0063
  * @tc.desc dts2cpp enum 扩充-矩阵：2 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0063', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0063.ts',
            `enum EnumC02F1 {
        M0 = 0,
        M1 = 1
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC02F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0064
  * @tc.name dts2cpp_enum_0064
  * @tc.desc dts2cpp enum 扩充-矩阵：2 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0064', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0064.ts',
            `enum EnumC02F2 {
        M0 = "v0",
        M1 = "v1"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC02F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0065
  * @tc.name dts2cpp_enum_0065
  * @tc.desc dts2cpp enum 扩充-矩阵：2 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0065', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0065.ts',
            `enum EnumC02F3 {
        M0 = 0x1F,
        M1 = 0x20
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC02F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '0x1F');
      assert.strictEqual(enumItem_0!.values![1], '0x20');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0066
  * @tc.name dts2cpp_enum_0066
  * @tc.desc dts2cpp enum 扩充-矩阵：2 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0066', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0066.ts',
            `enum EnumC02F4 {
        M0 = 1 << 0,
        M1 = 1 << 1
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC02F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1 << 0');
      assert.strictEqual(enumItem_0!.values![1], '1 << 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0067
  * @tc.name dts2cpp_enum_0067
  * @tc.desc dts2cpp enum 扩充-矩阵：2 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0067', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0067.ts',
            `enum EnumC02F5 {
        M0 = 0,
        M1 = "1"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC02F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '"1"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0068
  * @tc.name dts2cpp_enum_0068
  * @tc.desc dts2cpp enum 扩充-矩阵：3 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0068', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0068.ts',
            `enum EnumC03F0 {
        M0,
        M1,
        M2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC03F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0069
  * @tc.name dts2cpp_enum_0069
  * @tc.desc dts2cpp enum 扩充-矩阵：3 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0069', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0069.ts',
            `enum EnumC03F1 {
        M0 = 0,
        M1 = 1,
        M2 = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC03F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.strictEqual(enumItem_0!.values![2], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0070
  * @tc.name dts2cpp_enum_0070
  * @tc.desc dts2cpp enum 扩充-矩阵：3 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0070', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0070.ts',
            `enum EnumC03F2 {
        M0 = "v0",
        M1 = "v1",
        M2 = "v2"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC03F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.strictEqual(enumItem_0!.values![2], '"v2"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0071
  * @tc.name dts2cpp_enum_0071
  * @tc.desc dts2cpp enum 扩充-矩阵：3 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0071', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0071.ts',
            `enum EnumC03F3 {
        M0 = 0x1F,
        M1 = 0x20,
        M2 = 0x21
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC03F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '0x1F');
      assert.strictEqual(enumItem_0!.values![1], '0x20');
      assert.strictEqual(enumItem_0!.values![2], '0x21');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0072
  * @tc.name dts2cpp_enum_0072
  * @tc.desc dts2cpp enum 扩充-矩阵：3 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0072', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0072.ts',
            `enum EnumC03F4 {
        M0 = 1 << 0,
        M1 = 1 << 1,
        M2 = 1 << 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC03F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '1 << 0');
      assert.strictEqual(enumItem_0!.values![1], '1 << 1');
      assert.strictEqual(enumItem_0!.values![2], '1 << 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0073
  * @tc.name dts2cpp_enum_0073
  * @tc.desc dts2cpp enum 扩充-矩阵：3 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0073', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0073.ts',
            `enum EnumC03F5 {
        M0 = 0,
        M1 = "1",
        M2 = 4
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC03F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '"1"');
      assert.strictEqual(enumItem_0!.values![2], '4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0074
  * @tc.name dts2cpp_enum_0074
  * @tc.desc dts2cpp enum 扩充-矩阵：4 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0074', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0074.ts',
            `enum EnumC04F0 {
        M0,
        M1,
        M2,
        M3
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC04F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0075
  * @tc.name dts2cpp_enum_0075
  * @tc.desc dts2cpp enum 扩充-矩阵：4 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0075', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0075.ts',
            `enum EnumC04F1 {
        M0 = 0,
        M1 = 1,
        M2 = 2,
        M3 = 3
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC04F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.values!.length, 4);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.strictEqual(enumItem_0!.values![2], '2');
      assert.strictEqual(enumItem_0!.values![3], '3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0076
  * @tc.name dts2cpp_enum_0076
  * @tc.desc dts2cpp enum 扩充-矩阵：4 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0076', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0076.ts',
            `enum EnumC04F2 {
        M0 = "v0",
        M1 = "v1",
        M2 = "v2",
        M3 = "v3"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC04F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.values!.length, 4);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.strictEqual(enumItem_0!.values![2], '"v2"');
      assert.strictEqual(enumItem_0!.values![3], '"v3"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0077
  * @tc.name dts2cpp_enum_0077
  * @tc.desc dts2cpp enum 扩充-矩阵：4 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0077', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0077.ts',
            `enum EnumC04F3 {
        M0 = 0x1F,
        M1 = 0x20,
        M2 = 0x21,
        M3 = 0x22
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC04F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.values!.length, 4);
      assert.strictEqual(enumItem_0!.values![0], '0x1F');
      assert.strictEqual(enumItem_0!.values![1], '0x20');
      assert.strictEqual(enumItem_0!.values![2], '0x21');
      assert.strictEqual(enumItem_0!.values![3], '0x22');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0077 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0078
  * @tc.name dts2cpp_enum_0078
  * @tc.desc dts2cpp enum 扩充-矩阵：4 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0078', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0078.ts',
            `enum EnumC04F4 {
        M0 = 1 << 0,
        M1 = 1 << 1,
        M2 = 1 << 2,
        M3 = 1 << 3
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC04F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.values!.length, 4);
      assert.strictEqual(enumItem_0!.values![0], '1 << 0');
      assert.strictEqual(enumItem_0!.values![1], '1 << 1');
      assert.strictEqual(enumItem_0!.values![2], '1 << 2');
      assert.strictEqual(enumItem_0!.values![3], '1 << 3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0079
  * @tc.name dts2cpp_enum_0079
  * @tc.desc dts2cpp enum 扩充-矩阵：4 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0079', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0079.ts',
            `enum EnumC04F5 {
        M0 = 0,
        M1 = "1",
        M2 = 4,
        M3 = "3"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC04F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.values!.length, 4);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '"1"');
      assert.strictEqual(enumItem_0!.values![2], '4');
      assert.strictEqual(enumItem_0!.values![3], '"3"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0080
  * @tc.name dts2cpp_enum_0080
  * @tc.desc dts2cpp enum 扩充-矩阵：5 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0080', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0080.ts',
            `enum EnumC05F0 {
        M0,
        M1,
        M2,
        M3,
        M4
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC05F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 5);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0081
  * @tc.name dts2cpp_enum_0081
  * @tc.desc dts2cpp enum 扩充-矩阵：5 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0081', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0081.ts',
            `enum EnumC05F1 {
        M0 = 0,
        M1 = 1,
        M2 = 2,
        M3 = 3,
        M4 = 4
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC05F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 5);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.values!.length, 5);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.strictEqual(enumItem_0!.values![2], '2');
      assert.strictEqual(enumItem_0!.values![3], '3');
      assert.strictEqual(enumItem_0!.values![4], '4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0082
  * @tc.name dts2cpp_enum_0082
  * @tc.desc dts2cpp enum 扩充-矩阵：5 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0082', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0082.ts',
            `enum EnumC05F2 {
        M0 = "v0",
        M1 = "v1",
        M2 = "v2",
        M3 = "v3",
        M4 = "v4"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC05F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 5);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.values!.length, 5);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.strictEqual(enumItem_0!.values![2], '"v2"');
      assert.strictEqual(enumItem_0!.values![3], '"v3"');
      assert.strictEqual(enumItem_0!.values![4], '"v4"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0083
  * @tc.name dts2cpp_enum_0083
  * @tc.desc dts2cpp enum 扩充-矩阵：5 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0083', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0083.ts',
            `enum EnumC05F3 {
        M0 = 0x1F,
        M1 = 0x20,
        M2 = 0x21,
        M3 = 0x22,
        M4 = 0x23
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC05F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 5);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.values!.length, 5);
      assert.strictEqual(enumItem_0!.values![0], '0x1F');
      assert.strictEqual(enumItem_0!.values![1], '0x20');
      assert.strictEqual(enumItem_0!.values![2], '0x21');
      assert.strictEqual(enumItem_0!.values![3], '0x22');
      assert.strictEqual(enumItem_0!.values![4], '0x23');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0084
  * @tc.name dts2cpp_enum_0084
  * @tc.desc dts2cpp enum 扩充-矩阵：5 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0084', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0084.ts',
            `enum EnumC05F4 {
        M0 = 1 << 0,
        M1 = 1 << 1,
        M2 = 1 << 2,
        M3 = 1 << 3,
        M4 = 1 << 4
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC05F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 5);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.values!.length, 5);
      assert.strictEqual(enumItem_0!.values![0], '1 << 0');
      assert.strictEqual(enumItem_0!.values![1], '1 << 1');
      assert.strictEqual(enumItem_0!.values![2], '1 << 2');
      assert.strictEqual(enumItem_0!.values![3], '1 << 3');
      assert.strictEqual(enumItem_0!.values![4], '1 << 4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0085
  * @tc.name dts2cpp_enum_0085
  * @tc.desc dts2cpp enum 扩充-矩阵：5 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0085', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0085.ts',
            `enum EnumC05F5 {
        M0 = 0,
        M1 = "1",
        M2 = 4,
        M3 = "3",
        M4 = 8
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC05F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 5);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.values!.length, 5);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '"1"');
      assert.strictEqual(enumItem_0!.values![2], '4');
      assert.strictEqual(enumItem_0!.values![3], '"3"');
      assert.strictEqual(enumItem_0!.values![4], '8');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0086
  * @tc.name dts2cpp_enum_0086
  * @tc.desc dts2cpp enum 扩充-矩阵：6 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0086', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0086.ts',
            `enum EnumC06F0 {
        M0,
        M1,
        M2,
        M3,
        M4,
        M5
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC06F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 6);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0087
  * @tc.name dts2cpp_enum_0087
  * @tc.desc dts2cpp enum 扩充-矩阵：6 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0087', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0087.ts',
            `enum EnumC06F1 {
        M0 = 0,
        M1 = 1,
        M2 = 2,
        M3 = 3,
        M4 = 4,
        M5 = 5
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC06F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 6);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.values!.length, 6);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.strictEqual(enumItem_0!.values![2], '2');
      assert.strictEqual(enumItem_0!.values![3], '3');
      assert.strictEqual(enumItem_0!.values![4], '4');
      assert.strictEqual(enumItem_0!.values![5], '5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0088
  * @tc.name dts2cpp_enum_0088
  * @tc.desc dts2cpp enum 扩充-矩阵：6 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0088', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0088.ts',
            `enum EnumC06F2 {
        M0 = "v0",
        M1 = "v1",
        M2 = "v2",
        M3 = "v3",
        M4 = "v4",
        M5 = "v5"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC06F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 6);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.values!.length, 6);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.strictEqual(enumItem_0!.values![2], '"v2"');
      assert.strictEqual(enumItem_0!.values![3], '"v3"');
      assert.strictEqual(enumItem_0!.values![4], '"v4"');
      assert.strictEqual(enumItem_0!.values![5], '"v5"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0089
  * @tc.name dts2cpp_enum_0089
  * @tc.desc dts2cpp enum 扩充-矩阵：6 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0089', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0089.ts',
            `enum EnumC06F3 {
        M0 = 0x1F,
        M1 = 0x20,
        M2 = 0x21,
        M3 = 0x22,
        M4 = 0x23,
        M5 = 0x24
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC06F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 6);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.values!.length, 6);
      assert.strictEqual(enumItem_0!.values![0], '0x1F');
      assert.strictEqual(enumItem_0!.values![1], '0x20');
      assert.strictEqual(enumItem_0!.values![2], '0x21');
      assert.strictEqual(enumItem_0!.values![3], '0x22');
      assert.strictEqual(enumItem_0!.values![4], '0x23');
      assert.strictEqual(enumItem_0!.values![5], '0x24');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0090
  * @tc.name dts2cpp_enum_0090
  * @tc.desc dts2cpp enum 扩充-矩阵：6 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0090', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0090.ts',
            `enum EnumC06F4 {
        M0 = 1 << 0,
        M1 = 1 << 1,
        M2 = 1 << 2,
        M3 = 1 << 3,
        M4 = 1 << 4,
        M5 = 1 << 5
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC06F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 6);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.values!.length, 6);
      assert.strictEqual(enumItem_0!.values![0], '1 << 0');
      assert.strictEqual(enumItem_0!.values![1], '1 << 1');
      assert.strictEqual(enumItem_0!.values![2], '1 << 2');
      assert.strictEqual(enumItem_0!.values![3], '1 << 3');
      assert.strictEqual(enumItem_0!.values![4], '1 << 4');
      assert.strictEqual(enumItem_0!.values![5], '1 << 5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0091
  * @tc.name dts2cpp_enum_0091
  * @tc.desc dts2cpp enum 扩充-矩阵：6 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0091', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0091.ts',
            `enum EnumC06F5 {
        M0 = 0,
        M1 = "1",
        M2 = 4,
        M3 = "3",
        M4 = 8,
        M5 = "5"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC06F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 6);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.values!.length, 6);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '"1"');
      assert.strictEqual(enumItem_0!.values![2], '4');
      assert.strictEqual(enumItem_0!.values![3], '"3"');
      assert.strictEqual(enumItem_0!.values![4], '8');
      assert.strictEqual(enumItem_0!.values![5], '"5"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0092
  * @tc.name dts2cpp_enum_0092
  * @tc.desc dts2cpp enum 扩充-矩阵：7 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0092', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0092.ts',
            `enum EnumC07F0 {
        M0,
        M1,
        M2,
        M3,
        M4,
        M5,
        M6
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC07F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 7);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0093
  * @tc.name dts2cpp_enum_0093
  * @tc.desc dts2cpp enum 扩充-矩阵：7 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0093', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0093.ts',
            `enum EnumC07F1 {
        M0 = 0,
        M1 = 1,
        M2 = 2,
        M3 = 3,
        M4 = 4,
        M5 = 5,
        M6 = 6
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC07F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 7);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.values!.length, 7);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.strictEqual(enumItem_0!.values![2], '2');
      assert.strictEqual(enumItem_0!.values![3], '3');
      assert.strictEqual(enumItem_0!.values![4], '4');
      assert.strictEqual(enumItem_0!.values![5], '5');
      assert.strictEqual(enumItem_0!.values![6], '6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0094
  * @tc.name dts2cpp_enum_0094
  * @tc.desc dts2cpp enum 扩充-矩阵：7 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0094', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0094.ts',
            `enum EnumC07F2 {
        M0 = "v0",
        M1 = "v1",
        M2 = "v2",
        M3 = "v3",
        M4 = "v4",
        M5 = "v5",
        M6 = "v6"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC07F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 7);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.values!.length, 7);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.strictEqual(enumItem_0!.values![2], '"v2"');
      assert.strictEqual(enumItem_0!.values![3], '"v3"');
      assert.strictEqual(enumItem_0!.values![4], '"v4"');
      assert.strictEqual(enumItem_0!.values![5], '"v5"');
      assert.strictEqual(enumItem_0!.values![6], '"v6"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0095
  * @tc.name dts2cpp_enum_0095
  * @tc.desc dts2cpp enum 扩充-矩阵：7 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0095', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0095.ts',
            `enum EnumC07F3 {
        M0 = 0x1F,
        M1 = 0x20,
        M2 = 0x21,
        M3 = 0x22,
        M4 = 0x23,
        M5 = 0x24,
        M6 = 0x25
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC07F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 7);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.values!.length, 7);
      assert.strictEqual(enumItem_0!.values![0], '0x1F');
      assert.strictEqual(enumItem_0!.values![1], '0x20');
      assert.strictEqual(enumItem_0!.values![2], '0x21');
      assert.strictEqual(enumItem_0!.values![3], '0x22');
      assert.strictEqual(enumItem_0!.values![4], '0x23');
      assert.strictEqual(enumItem_0!.values![5], '0x24');
      assert.strictEqual(enumItem_0!.values![6], '0x25');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0096
  * @tc.name dts2cpp_enum_0096
  * @tc.desc dts2cpp enum 扩充-矩阵：7 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0096', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0096.ts',
            `enum EnumC07F4 {
        M0 = 1 << 0,
        M1 = 1 << 1,
        M2 = 1 << 2,
        M3 = 1 << 3,
        M4 = 1 << 4,
        M5 = 1 << 5,
        M6 = 1 << 6
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC07F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 7);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.values!.length, 7);
      assert.strictEqual(enumItem_0!.values![0], '1 << 0');
      assert.strictEqual(enumItem_0!.values![1], '1 << 1');
      assert.strictEqual(enumItem_0!.values![2], '1 << 2');
      assert.strictEqual(enumItem_0!.values![3], '1 << 3');
      assert.strictEqual(enumItem_0!.values![4], '1 << 4');
      assert.strictEqual(enumItem_0!.values![5], '1 << 5');
      assert.strictEqual(enumItem_0!.values![6], '1 << 6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0097
  * @tc.name dts2cpp_enum_0097
  * @tc.desc dts2cpp enum 扩充-矩阵：7 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0097', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0097.ts',
            `enum EnumC07F5 {
        M0 = 0,
        M1 = "1",
        M2 = 4,
        M3 = "3",
        M4 = 8,
        M5 = "5",
        M6 = 12
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC07F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 7);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.values!.length, 7);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '"1"');
      assert.strictEqual(enumItem_0!.values![2], '4');
      assert.strictEqual(enumItem_0!.values![3], '"3"');
      assert.strictEqual(enumItem_0!.values![4], '8');
      assert.strictEqual(enumItem_0!.values![5], '"5"');
      assert.strictEqual(enumItem_0!.values![6], '12');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0098
  * @tc.name dts2cpp_enum_0098
  * @tc.desc dts2cpp enum 扩充-矩阵：8 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0098', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0098.ts',
            `enum EnumC08F0 {
        M0,
        M1,
        M2,
        M3,
        M4,
        M5,
        M6,
        M7
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC08F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 8);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.members![7], 'M7');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0099
  * @tc.name dts2cpp_enum_0099
  * @tc.desc dts2cpp enum 扩充-矩阵：8 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0099', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0099.ts',
            `enum EnumC08F1 {
        M0 = 0,
        M1 = 1,
        M2 = 2,
        M3 = 3,
        M4 = 4,
        M5 = 5,
        M6 = 6,
        M7 = 7
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC08F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 8);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.members![7], 'M7');
      assert.strictEqual(enumItem_0!.values!.length, 8);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.strictEqual(enumItem_0!.values![2], '2');
      assert.strictEqual(enumItem_0!.values![3], '3');
      assert.strictEqual(enumItem_0!.values![4], '4');
      assert.strictEqual(enumItem_0!.values![5], '5');
      assert.strictEqual(enumItem_0!.values![6], '6');
      assert.strictEqual(enumItem_0!.values![7], '7');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0099 执行异常: ${String(err)}`);
    }
  });

});

