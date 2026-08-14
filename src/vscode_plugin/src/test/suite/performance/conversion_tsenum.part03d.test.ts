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
  * @tc.number dts2cpp_enum_0153
  * @tc.name dts2cpp_enum_0153
  * @tc.desc dts2cpp enum 扩充-矩阵：17 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0153', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0153.ts',
            `enum EnumC17F1 {
        M0 = 0,
        M1 = 1,
        M2 = 2,
        M3 = 3,
        M4 = 4,
        M5 = 5,
        M6 = 6,
        M7 = 7,
        M8 = 8,
        M9 = 9,
        M10 = 10,
        M11 = 11,
        M12 = 12,
        M13 = 13,
        M14 = 14,
        M15 = 15,
        M16 = 16
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC17F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 17);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.members![7], 'M7');
      assert.strictEqual(enumItem_0!.members![8], 'M8');
      assert.strictEqual(enumItem_0!.members![9], 'M9');
      assert.strictEqual(enumItem_0!.members![10], 'M10');
      assert.strictEqual(enumItem_0!.members![11], 'M11');
      assert.strictEqual(enumItem_0!.members![12], 'M12');
      assert.strictEqual(enumItem_0!.members![13], 'M13');
      assert.strictEqual(enumItem_0!.members![14], 'M14');
      assert.strictEqual(enumItem_0!.members![15], 'M15');
      assert.strictEqual(enumItem_0!.members![16], 'M16');
      assert.strictEqual(enumItem_0!.values!.length, 17);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.strictEqual(enumItem_0!.values![2], '2');
      assert.strictEqual(enumItem_0!.values![3], '3');
      assert.strictEqual(enumItem_0!.values![4], '4');
      assert.strictEqual(enumItem_0!.values![5], '5');
      assert.strictEqual(enumItem_0!.values![6], '6');
      assert.strictEqual(enumItem_0!.values![7], '7');
      assert.strictEqual(enumItem_0!.values![8], '8');
      assert.strictEqual(enumItem_0!.values![9], '9');
      assert.strictEqual(enumItem_0!.values![10], '10');
      assert.strictEqual(enumItem_0!.values![11], '11');
      assert.strictEqual(enumItem_0!.values![12], '12');
      assert.strictEqual(enumItem_0!.values![13], '13');
      assert.strictEqual(enumItem_0!.values![14], '14');
      assert.strictEqual(enumItem_0!.values![15], '15');
      assert.strictEqual(enumItem_0!.values![16], '16');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0154
  * @tc.name dts2cpp_enum_0154
  * @tc.desc dts2cpp enum 扩充-矩阵：17 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0154', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0154.ts',
            `enum EnumC17F2 {
        M0 = "v0",
        M1 = "v1",
        M2 = "v2",
        M3 = "v3",
        M4 = "v4",
        M5 = "v5",
        M6 = "v6",
        M7 = "v7",
        M8 = "x8",
        M9 = "v9",
        M10 = "v10",
        M11 = "v11",
        M12 = "v12",
        M13 = "v13",
        M14 = "v14",
        M15 = "v15",
        M16 = "v16"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC17F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 17);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.members![7], 'M7');
      assert.strictEqual(enumItem_0!.members![8], 'M8');
      assert.strictEqual(enumItem_0!.members![9], 'M9');
      assert.strictEqual(enumItem_0!.members![10], 'M10');
      assert.strictEqual(enumItem_0!.members![11], 'M11');
      assert.strictEqual(enumItem_0!.members![12], 'M12');
      assert.strictEqual(enumItem_0!.members![13], 'M13');
      assert.strictEqual(enumItem_0!.members![14], 'M14');
      assert.strictEqual(enumItem_0!.members![15], 'M15');
      assert.strictEqual(enumItem_0!.members![16], 'M16');
      assert.strictEqual(enumItem_0!.values!.length, 17);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.strictEqual(enumItem_0!.values![2], '"v2"');
      assert.strictEqual(enumItem_0!.values![3], '"v3"');
      assert.strictEqual(enumItem_0!.values![4], '"v4"');
      assert.strictEqual(enumItem_0!.values![5], '"v5"');
      assert.strictEqual(enumItem_0!.values![6], '"v6"');
      assert.strictEqual(enumItem_0!.values![7], '"v7"');
      assert.strictEqual(enumItem_0!.values![8], '"x8"');
      assert.strictEqual(enumItem_0!.values![9], '"v9"');
      assert.strictEqual(enumItem_0!.values![10], '"v10"');
      assert.strictEqual(enumItem_0!.values![11], '"v11"');
      assert.strictEqual(enumItem_0!.values![12], '"v12"');
      assert.strictEqual(enumItem_0!.values![13], '"v13"');
      assert.strictEqual(enumItem_0!.values![14], '"v14"');
      assert.strictEqual(enumItem_0!.values![15], '"v15"');
      assert.strictEqual(enumItem_0!.values![16], '"v16"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0155
  * @tc.name dts2cpp_enum_0155
  * @tc.desc dts2cpp enum 扩充-矩阵：17 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0155', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0155.ts',
            `enum EnumC17F3 {
        M0 = 0x1F,
        M1 = 0x20,
        M2 = 0x21,
        M3 = 0x22,
        M4 = 0x23,
        M5 = 0x24,
        M6 = 0x25,
        M7 = 0x26,
        M8 = 0x27,
        M9 = 0x28,
        M10 = 0x29,
        M11 = 0x2A,
        M12 = 0x2B,
        M13 = 0x2C,
        M14 = 0x2D,
        M15 = 0x2E,
        M16 = 0x2F
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC17F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 17);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.members![7], 'M7');
      assert.strictEqual(enumItem_0!.members![8], 'M8');
      assert.strictEqual(enumItem_0!.members![9], 'M9');
      assert.strictEqual(enumItem_0!.members![10], 'M10');
      assert.strictEqual(enumItem_0!.members![11], 'M11');
      assert.strictEqual(enumItem_0!.members![12], 'M12');
      assert.strictEqual(enumItem_0!.members![13], 'M13');
      assert.strictEqual(enumItem_0!.members![14], 'M14');
      assert.strictEqual(enumItem_0!.members![15], 'M15');
      assert.strictEqual(enumItem_0!.members![16], 'M16');
      assert.strictEqual(enumItem_0!.values!.length, 17);
      assert.strictEqual(enumItem_0!.values![0], '0x1F');
      assert.strictEqual(enumItem_0!.values![1], '0x20');
      assert.strictEqual(enumItem_0!.values![2], '0x21');
      assert.strictEqual(enumItem_0!.values![3], '0x22');
      assert.strictEqual(enumItem_0!.values![4], '0x23');
      assert.strictEqual(enumItem_0!.values![5], '0x24');
      assert.strictEqual(enumItem_0!.values![6], '0x25');
      assert.strictEqual(enumItem_0!.values![7], '0x26');
      assert.strictEqual(enumItem_0!.values![8], '0x27');
      assert.strictEqual(enumItem_0!.values![9], '0x28');
      assert.strictEqual(enumItem_0!.values![10], '0x29');
      assert.strictEqual(enumItem_0!.values![11], '0x2A');
      assert.strictEqual(enumItem_0!.values![12], '0x2B');
      assert.strictEqual(enumItem_0!.values![13], '0x2C');
      assert.strictEqual(enumItem_0!.values![14], '0x2D');
      assert.strictEqual(enumItem_0!.values![15], '0x2E');
      assert.strictEqual(enumItem_0!.values![16], '0x2F');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0156
  * @tc.name dts2cpp_enum_0156
  * @tc.desc dts2cpp enum 扩充-矩阵：17 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0156', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0156.ts',
            `enum EnumC17F4 {
        M0 = 1 << 0,
        M1 = 1 << 1,
        M2 = 1 << 2,
        M3 = 1 << 3,
        M4 = 1 << 4,
        M5 = 1 << 5,
        M6 = 1 << 6,
        M7 = 1 << 7,
        M8 = 1 << 8,
        M9 = 1 << 9,
        M10 = 1 << 10,
        M11 = 1 << 11,
        M12 = 1 << 12,
        M13 = 1 << 13,
        M14 = 1 << 14,
        M15 = 1 << 15,
        M16 = 1 << 16
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC17F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 17);
      assert.strictEqual(enumItem_0!.members![0], 'M0');
      assert.strictEqual(enumItem_0!.members![1], 'M1');
      assert.strictEqual(enumItem_0!.members![2], 'M2');
      assert.strictEqual(enumItem_0!.members![3], 'M3');
      assert.strictEqual(enumItem_0!.members![4], 'M4');
      assert.strictEqual(enumItem_0!.members![5], 'M5');
      assert.strictEqual(enumItem_0!.members![6], 'M6');
      assert.strictEqual(enumItem_0!.members![7], 'M7');
      assert.strictEqual(enumItem_0!.members![8], 'M8');
      assert.strictEqual(enumItem_0!.members![9], 'M9');
      assert.strictEqual(enumItem_0!.members![10], 'M10');
      assert.strictEqual(enumItem_0!.members![11], 'M11');
      assert.strictEqual(enumItem_0!.members![12], 'M12');
      assert.strictEqual(enumItem_0!.members![13], 'M13');
      assert.strictEqual(enumItem_0!.members![14], 'M14');
      assert.strictEqual(enumItem_0!.members![15], 'M15');
      assert.strictEqual(enumItem_0!.members![16], 'M16');
      assert.strictEqual(enumItem_0!.values!.length, 17);
      assert.strictEqual(enumItem_0!.values![0], '1 << 0');
      assert.strictEqual(enumItem_0!.values![1], '1 << 1');
      assert.strictEqual(enumItem_0!.values![2], '1 << 2');
      assert.strictEqual(enumItem_0!.values![3], '1 << 3');
      assert.strictEqual(enumItem_0!.values![4], '1 << 4');
      assert.strictEqual(enumItem_0!.values![5], '1 << 5');
      assert.strictEqual(enumItem_0!.values![6], '1 << 6');
      assert.strictEqual(enumItem_0!.values![7], '1 << 7');
      assert.strictEqual(enumItem_0!.values![8], '1 << 8');
      assert.strictEqual(enumItem_0!.values![9], '1 << 9');
      assert.strictEqual(enumItem_0!.values![10], '1 << 10');
      assert.strictEqual(enumItem_0!.values![11], '1 << 11');
      assert.strictEqual(enumItem_0!.values![12], '1 << 12');
      assert.strictEqual(enumItem_0!.values![13], '1 << 13');
      assert.strictEqual(enumItem_0!.values![14], '1 << 14');
      assert.strictEqual(enumItem_0!.values![15], '1 << 15');
      assert.strictEqual(enumItem_0!.values![16], '1 << 16');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0156 执行异常: ${String(err)}`);
    }
  });

});

