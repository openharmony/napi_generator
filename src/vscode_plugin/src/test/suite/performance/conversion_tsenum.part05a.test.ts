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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Enum_Suite part05.');

  /**
  * @tc.number dts2cpp_enum_0252
  * @tc.name dts2cpp_enum_0252
  * @tc.desc dts2cpp enum 扩充-矩阵：33 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0252', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0252.ts',
            `enum EnumC33F4 {
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
        M16 = 1 << 16,
        M17 = 1 << 17,
        M18 = 1 << 18,
        M19 = 1 << 19,
        M20 = 1 << 20,
        M21 = 1 << 21,
        M22 = 1 << 22,
        M23 = 1 << 23,
        M24 = 1 << 24,
        M25 = 1 << 25,
        M26 = 1 << 26,
        M27 = 1 << 27,
        M28 = 1 << 28,
        M29 = 1 << 29,
        M30 = 1 << 30,
        M31 = 1 << 31,
        M32 = 1 << 32
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC33F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 33);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.values!.length, 33);
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
      assert.strictEqual(enumItem_0!.values![17], '1 << 17');
      assert.strictEqual(enumItem_0!.values![18], '1 << 18');
      assert.strictEqual(enumItem_0!.values![19], '1 << 19');
      assert.strictEqual(enumItem_0!.values![20], '1 << 20');
      assert.strictEqual(enumItem_0!.values![21], '1 << 21');
      assert.strictEqual(enumItem_0!.values![22], '1 << 22');
      assert.strictEqual(enumItem_0!.values![23], '1 << 23');
      assert.strictEqual(enumItem_0!.values![24], '1 << 24');
      assert.strictEqual(enumItem_0!.values![25], '1 << 25');
      assert.strictEqual(enumItem_0!.values![26], '1 << 26');
      assert.strictEqual(enumItem_0!.values![27], '1 << 27');
      assert.strictEqual(enumItem_0!.values![28], '1 << 28');
      assert.strictEqual(enumItem_0!.values![29], '1 << 29');
      assert.strictEqual(enumItem_0!.values![30], '1 << 30');
      assert.strictEqual(enumItem_0!.values![31], '1 << 31');
      assert.strictEqual(enumItem_0!.values![32], '1 << 32');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0253
  * @tc.name dts2cpp_enum_0253
  * @tc.desc dts2cpp enum 扩充-矩阵：33 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0253', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0253.ts',
            `enum EnumC33F5 {
        M0 = 0,
        M1 = "1",
        M2 = 4,
        M3 = "3",
        M4 = 8,
        M5 = "5",
        M6 = 12,
        M7 = "7",
        M8 = 16,
        M9 = "9",
        M10 = 20,
        M11 = "11",
        M12 = 24,
        M13 = "13",
        M14 = 28,
        M15 = "15",
        M16 = 32,
        M17 = "17",
        M18 = 36,
        M19 = "19",
        M20 = 40,
        M21 = "21",
        M22 = 44,
        M23 = "23",
        M24 = 48,
        M25 = "25",
        M26 = 52,
        M27 = "27",
        M28 = 56,
        M29 = "29",
        M30 = 60,
        M31 = "31",
        M32 = 64
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC33F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 33);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.values!.length, 33);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '"1"');
      assert.strictEqual(enumItem_0!.values![2], '4');
      assert.strictEqual(enumItem_0!.values![3], '"3"');
      assert.strictEqual(enumItem_0!.values![4], '8');
      assert.strictEqual(enumItem_0!.values![5], '"5"');
      assert.strictEqual(enumItem_0!.values![6], '12');
      assert.strictEqual(enumItem_0!.values![7], '"7"');
      assert.strictEqual(enumItem_0!.values![8], '16');
      assert.strictEqual(enumItem_0!.values![9], '"9"');
      assert.strictEqual(enumItem_0!.values![10], '20');
      assert.strictEqual(enumItem_0!.values![11], '"11"');
      assert.strictEqual(enumItem_0!.values![12], '24');
      assert.strictEqual(enumItem_0!.values![13], '"13"');
      assert.strictEqual(enumItem_0!.values![14], '28');
      assert.strictEqual(enumItem_0!.values![15], '"15"');
      assert.strictEqual(enumItem_0!.values![16], '32');
      assert.strictEqual(enumItem_0!.values![17], '"17"');
      assert.strictEqual(enumItem_0!.values![18], '36');
      assert.strictEqual(enumItem_0!.values![19], '"19"');
      assert.strictEqual(enumItem_0!.values![20], '40');
      assert.strictEqual(enumItem_0!.values![21], '"21"');
      assert.strictEqual(enumItem_0!.values![22], '44');
      assert.strictEqual(enumItem_0!.values![23], '"23"');
      assert.strictEqual(enumItem_0!.values![24], '48');
      assert.strictEqual(enumItem_0!.values![25], '"25"');
      assert.strictEqual(enumItem_0!.values![26], '52');
      assert.strictEqual(enumItem_0!.values![27], '"27"');
      assert.strictEqual(enumItem_0!.values![28], '56');
      assert.strictEqual(enumItem_0!.values![29], '"29"');
      assert.strictEqual(enumItem_0!.values![30], '60');
      assert.strictEqual(enumItem_0!.values![31], '"31"');
      assert.strictEqual(enumItem_0!.values![32], '64');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0254
  * @tc.name dts2cpp_enum_0254
  * @tc.desc dts2cpp enum 扩充-矩阵：34 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0254', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0254.ts',
            `enum EnumC34F0 {
        M0,
        M1,
        M2,
        M3,
        M4,
        M5,
        M6,
        M7,
        M8,
        M9,
        M10,
        M11,
        M12,
        M13,
        M14,
        M15,
        M16,
        M17,
        M18,
        M19,
        M20,
        M21,
        M22,
        M23,
        M24,
        M25,
        M26,
        M27,
        M28,
        M29,
        M30,
        M31,
        M32,
        M33
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC34F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 34);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0255
  * @tc.name dts2cpp_enum_0255
  * @tc.desc dts2cpp enum 扩充-矩阵：34 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0255', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0255.ts',
            `enum EnumC34F1 {
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
        M16 = 16,
        M17 = 17,
        M18 = 18,
        M19 = 19,
        M20 = 20,
        M21 = 21,
        M22 = 22,
        M23 = 23,
        M24 = 24,
        M25 = 25,
        M26 = 26,
        M27 = 27,
        M28 = 28,
        M29 = 29,
        M30 = 30,
        M31 = 31,
        M32 = 32,
        M33 = 33
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC34F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 34);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.values!.length, 34);
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
      assert.strictEqual(enumItem_0!.values![17], '17');
      assert.strictEqual(enumItem_0!.values![18], '18');
      assert.strictEqual(enumItem_0!.values![19], '19');
      assert.strictEqual(enumItem_0!.values![20], '20');
      assert.strictEqual(enumItem_0!.values![21], '21');
      assert.strictEqual(enumItem_0!.values![22], '22');
      assert.strictEqual(enumItem_0!.values![23], '23');
      assert.strictEqual(enumItem_0!.values![24], '24');
      assert.strictEqual(enumItem_0!.values![25], '25');
      assert.strictEqual(enumItem_0!.values![26], '26');
      assert.strictEqual(enumItem_0!.values![27], '27');
      assert.strictEqual(enumItem_0!.values![28], '28');
      assert.strictEqual(enumItem_0!.values![29], '29');
      assert.strictEqual(enumItem_0!.values![30], '30');
      assert.strictEqual(enumItem_0!.values![31], '31');
      assert.strictEqual(enumItem_0!.values![32], '32');
      assert.strictEqual(enumItem_0!.values![33], '33');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0256
  * @tc.name dts2cpp_enum_0256
  * @tc.desc dts2cpp enum 扩充-矩阵：34 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0256', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0256.ts',
            `enum EnumC34F2 {
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
        M16 = "v16",
        M17 = "v17",
        M18 = "v18",
        M19 = "v19",
        M20 = "v20",
        M21 = "v21",
        M22 = "v22",
        M23 = "v23",
        M24 = "v24",
        M25 = "v25",
        M26 = "v26",
        M27 = "v27",
        M28 = "v28",
        M29 = "v29",
        M30 = "v30",
        M31 = "v31",
        M32 = "v32",
        M33 = "v33"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC34F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 34);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.values!.length, 34);
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
      assert.strictEqual(enumItem_0!.values![17], '"v17"');
      assert.strictEqual(enumItem_0!.values![18], '"v18"');
      assert.strictEqual(enumItem_0!.values![19], '"v19"');
      assert.strictEqual(enumItem_0!.values![20], '"v20"');
      assert.strictEqual(enumItem_0!.values![21], '"v21"');
      assert.strictEqual(enumItem_0!.values![22], '"v22"');
      assert.strictEqual(enumItem_0!.values![23], '"v23"');
      assert.strictEqual(enumItem_0!.values![24], '"v24"');
      assert.strictEqual(enumItem_0!.values![25], '"v25"');
      assert.strictEqual(enumItem_0!.values![26], '"v26"');
      assert.strictEqual(enumItem_0!.values![27], '"v27"');
      assert.strictEqual(enumItem_0!.values![28], '"v28"');
      assert.strictEqual(enumItem_0!.values![29], '"v29"');
      assert.strictEqual(enumItem_0!.values![30], '"v30"');
      assert.strictEqual(enumItem_0!.values![31], '"v31"');
      assert.strictEqual(enumItem_0!.values![32], '"v32"');
      assert.strictEqual(enumItem_0!.values![33], '"v33"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0257
  * @tc.name dts2cpp_enum_0257
  * @tc.desc dts2cpp enum 扩充-矩阵：34 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0257', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0257.ts',
            `enum EnumC34F3 {
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
        M16 = 0x2F,
        M17 = 0x30,
        M18 = 0x31,
        M19 = 0x32,
        M20 = 0x33,
        M21 = 0x34,
        M22 = 0x35,
        M23 = 0x36,
        M24 = 0x37,
        M25 = 0x38,
        M26 = 0x39,
        M27 = 0x3A,
        M28 = 0x3B,
        M29 = 0x3C,
        M30 = 0x3D,
        M31 = 0x3E,
        M32 = 0x3F,
        M33 = 0x40
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC34F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 34);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.values!.length, 34);
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
      assert.strictEqual(enumItem_0!.values![17], '0x30');
      assert.strictEqual(enumItem_0!.values![18], '0x31');
      assert.strictEqual(enumItem_0!.values![19], '0x32');
      assert.strictEqual(enumItem_0!.values![20], '0x33');
      assert.strictEqual(enumItem_0!.values![21], '0x34');
      assert.strictEqual(enumItem_0!.values![22], '0x35');
      assert.strictEqual(enumItem_0!.values![23], '0x36');
      assert.strictEqual(enumItem_0!.values![24], '0x37');
      assert.strictEqual(enumItem_0!.values![25], '0x38');
      assert.strictEqual(enumItem_0!.values![26], '0x39');
      assert.strictEqual(enumItem_0!.values![27], '0x3A');
      assert.strictEqual(enumItem_0!.values![28], '0x3B');
      assert.strictEqual(enumItem_0!.values![29], '0x3C');
      assert.strictEqual(enumItem_0!.values![30], '0x3D');
      assert.strictEqual(enumItem_0!.values![31], '0x3E');
      assert.strictEqual(enumItem_0!.values![32], '0x3F');
      assert.strictEqual(enumItem_0!.values![33], '0x40');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0258
  * @tc.name dts2cpp_enum_0258
  * @tc.desc dts2cpp enum 扩充-矩阵：34 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0258', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0258.ts',
            `enum EnumC34F4 {
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
        M16 = 1 << 16,
        M17 = 1 << 17,
        M18 = 1 << 18,
        M19 = 1 << 19,
        M20 = 1 << 20,
        M21 = 1 << 21,
        M22 = 1 << 22,
        M23 = 1 << 23,
        M24 = 1 << 24,
        M25 = 1 << 25,
        M26 = 1 << 26,
        M27 = 1 << 27,
        M28 = 1 << 28,
        M29 = 1 << 29,
        M30 = 1 << 30,
        M31 = 1 << 31,
        M32 = 1 << 32,
        M33 = 1 << 33
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC34F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 34);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.values!.length, 34);
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
      assert.strictEqual(enumItem_0!.values![17], '1 << 17');
      assert.strictEqual(enumItem_0!.values![18], '1 << 18');
      assert.strictEqual(enumItem_0!.values![19], '1 << 19');
      assert.strictEqual(enumItem_0!.values![20], '1 << 20');
      assert.strictEqual(enumItem_0!.values![21], '1 << 21');
      assert.strictEqual(enumItem_0!.values![22], '1 << 22');
      assert.strictEqual(enumItem_0!.values![23], '1 << 23');
      assert.strictEqual(enumItem_0!.values![24], '1 << 24');
      assert.strictEqual(enumItem_0!.values![25], '1 << 25');
      assert.strictEqual(enumItem_0!.values![26], '1 << 26');
      assert.strictEqual(enumItem_0!.values![27], '1 << 27');
      assert.strictEqual(enumItem_0!.values![28], '1 << 28');
      assert.strictEqual(enumItem_0!.values![29], '1 << 29');
      assert.strictEqual(enumItem_0!.values![30], '1 << 30');
      assert.strictEqual(enumItem_0!.values![31], '1 << 31');
      assert.strictEqual(enumItem_0!.values![32], '1 << 32');
      assert.strictEqual(enumItem_0!.values![33], '1 << 33');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0259
  * @tc.name dts2cpp_enum_0259
  * @tc.desc dts2cpp enum 扩充-矩阵：34 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0259', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0259.ts',
            `enum EnumC34F5 {
        M0 = 0,
        M1 = "1",
        M2 = 4,
        M3 = "3",
        M4 = 8,
        M5 = "5",
        M6 = 12,
        M7 = "7",
        M8 = 16,
        M9 = "9",
        M10 = 20,
        M11 = "11",
        M12 = 24,
        M13 = "13",
        M14 = 28,
        M15 = "15",
        M16 = 32,
        M17 = "17",
        M18 = 36,
        M19 = "19",
        M20 = 40,
        M21 = "21",
        M22 = 44,
        M23 = "23",
        M24 = 48,
        M25 = "25",
        M26 = 52,
        M27 = "27",
        M28 = 56,
        M29 = "29",
        M30 = 60,
        M31 = "31",
        M32 = 64,
        M33 = "33"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC34F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 34);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.values!.length, 34);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '"1"');
      assert.strictEqual(enumItem_0!.values![2], '4');
      assert.strictEqual(enumItem_0!.values![3], '"3"');
      assert.strictEqual(enumItem_0!.values![4], '8');
      assert.strictEqual(enumItem_0!.values![5], '"5"');
      assert.strictEqual(enumItem_0!.values![6], '12');
      assert.strictEqual(enumItem_0!.values![7], '"7"');
      assert.strictEqual(enumItem_0!.values![8], '16');
      assert.strictEqual(enumItem_0!.values![9], '"9"');
      assert.strictEqual(enumItem_0!.values![10], '20');
      assert.strictEqual(enumItem_0!.values![11], '"11"');
      assert.strictEqual(enumItem_0!.values![12], '24');
      assert.strictEqual(enumItem_0!.values![13], '"13"');
      assert.strictEqual(enumItem_0!.values![14], '28');
      assert.strictEqual(enumItem_0!.values![15], '"15"');
      assert.strictEqual(enumItem_0!.values![16], '32');
      assert.strictEqual(enumItem_0!.values![17], '"17"');
      assert.strictEqual(enumItem_0!.values![18], '36');
      assert.strictEqual(enumItem_0!.values![19], '"19"');
      assert.strictEqual(enumItem_0!.values![20], '40');
      assert.strictEqual(enumItem_0!.values![21], '"21"');
      assert.strictEqual(enumItem_0!.values![22], '44');
      assert.strictEqual(enumItem_0!.values![23], '"23"');
      assert.strictEqual(enumItem_0!.values![24], '48');
      assert.strictEqual(enumItem_0!.values![25], '"25"');
      assert.strictEqual(enumItem_0!.values![26], '52');
      assert.strictEqual(enumItem_0!.values![27], '"27"');
      assert.strictEqual(enumItem_0!.values![28], '56');
      assert.strictEqual(enumItem_0!.values![29], '"29"');
      assert.strictEqual(enumItem_0!.values![30], '60');
      assert.strictEqual(enumItem_0!.values![31], '"31"');
      assert.strictEqual(enumItem_0!.values![32], '64');
      assert.strictEqual(enumItem_0!.values![33], '"33"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0260
  * @tc.name dts2cpp_enum_0260
  * @tc.desc dts2cpp enum 扩充-矩阵：35 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0260', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0260.ts',
            `enum EnumC35F0 {
        M0,
        M1,
        M2,
        M3,
        M4,
        M5,
        M6,
        M7,
        M8,
        M9,
        M10,
        M11,
        M12,
        M13,
        M14,
        M15,
        M16,
        M17,
        M18,
        M19,
        M20,
        M21,
        M22,
        M23,
        M24,
        M25,
        M26,
        M27,
        M28,
        M29,
        M30,
        M31,
        M32,
        M33,
        M34
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC35F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 35);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.members![34], 'M34');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0261
  * @tc.name dts2cpp_enum_0261
  * @tc.desc dts2cpp enum 扩充-矩阵：35 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0261', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0261.ts',
            `enum EnumC35F1 {
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
        M16 = 16,
        M17 = 17,
        M18 = 18,
        M19 = 19,
        M20 = 20,
        M21 = 21,
        M22 = 22,
        M23 = 23,
        M24 = 24,
        M25 = 25,
        M26 = 26,
        M27 = 27,
        M28 = 28,
        M29 = 29,
        M30 = 30,
        M31 = 31,
        M32 = 32,
        M33 = 33,
        M34 = 34
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC35F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 35);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.members![34], 'M34');
      assert.strictEqual(enumItem_0!.values!.length, 35);
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
      assert.strictEqual(enumItem_0!.values![17], '17');
      assert.strictEqual(enumItem_0!.values![18], '18');
      assert.strictEqual(enumItem_0!.values![19], '19');
      assert.strictEqual(enumItem_0!.values![20], '20');
      assert.strictEqual(enumItem_0!.values![21], '21');
      assert.strictEqual(enumItem_0!.values![22], '22');
      assert.strictEqual(enumItem_0!.values![23], '23');
      assert.strictEqual(enumItem_0!.values![24], '24');
      assert.strictEqual(enumItem_0!.values![25], '25');
      assert.strictEqual(enumItem_0!.values![26], '26');
      assert.strictEqual(enumItem_0!.values![27], '27');
      assert.strictEqual(enumItem_0!.values![28], '28');
      assert.strictEqual(enumItem_0!.values![29], '29');
      assert.strictEqual(enumItem_0!.values![30], '30');
      assert.strictEqual(enumItem_0!.values![31], '31');
      assert.strictEqual(enumItem_0!.values![32], '32');
      assert.strictEqual(enumItem_0!.values![33], '33');
      assert.strictEqual(enumItem_0!.values![34], '34');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0262
  * @tc.name dts2cpp_enum_0262
  * @tc.desc dts2cpp enum 扩充-矩阵：35 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0262', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0262.ts',
            `enum EnumC35F2 {
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
        M16 = "v16",
        M17 = "v17",
        M18 = "v18",
        M19 = "v19",
        M20 = "v20",
        M21 = "v21",
        M22 = "v22",
        M23 = "v23",
        M24 = "v24",
        M25 = "v25",
        M26 = "v26",
        M27 = "v27",
        M28 = "v28",
        M29 = "v29",
        M30 = "v30",
        M31 = "v31",
        M32 = "v32",
        M33 = "v33",
        M34 = "v34"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC35F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 35);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.members![34], 'M34');
      assert.strictEqual(enumItem_0!.values!.length, 35);
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
      assert.strictEqual(enumItem_0!.values![17], '"v17"');
      assert.strictEqual(enumItem_0!.values![18], '"v18"');
      assert.strictEqual(enumItem_0!.values![19], '"v19"');
      assert.strictEqual(enumItem_0!.values![20], '"v20"');
      assert.strictEqual(enumItem_0!.values![21], '"v21"');
      assert.strictEqual(enumItem_0!.values![22], '"v22"');
      assert.strictEqual(enumItem_0!.values![23], '"v23"');
      assert.strictEqual(enumItem_0!.values![24], '"v24"');
      assert.strictEqual(enumItem_0!.values![25], '"v25"');
      assert.strictEqual(enumItem_0!.values![26], '"v26"');
      assert.strictEqual(enumItem_0!.values![27], '"v27"');
      assert.strictEqual(enumItem_0!.values![28], '"v28"');
      assert.strictEqual(enumItem_0!.values![29], '"v29"');
      assert.strictEqual(enumItem_0!.values![30], '"v30"');
      assert.strictEqual(enumItem_0!.values![31], '"v31"');
      assert.strictEqual(enumItem_0!.values![32], '"v32"');
      assert.strictEqual(enumItem_0!.values![33], '"v33"');
      assert.strictEqual(enumItem_0!.values![34], '"v34"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0263
  * @tc.name dts2cpp_enum_0263
  * @tc.desc dts2cpp enum 扩充-矩阵：35 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0263', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0263.ts',
            `enum EnumC35F3 {
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
        M16 = 0x2F,
        M17 = 0x30,
        M18 = 0x31,
        M19 = 0x32,
        M20 = 0x33,
        M21 = 0x34,
        M22 = 0x35,
        M23 = 0x36,
        M24 = 0x37,
        M25 = 0x38,
        M26 = 0x39,
        M27 = 0x3A,
        M28 = 0x3B,
        M29 = 0x3C,
        M30 = 0x3D,
        M31 = 0x3E,
        M32 = 0x3F,
        M33 = 0x40,
        M34 = 0x41
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC35F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 35);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.members![34], 'M34');
      assert.strictEqual(enumItem_0!.values!.length, 35);
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
      assert.strictEqual(enumItem_0!.values![17], '0x30');
      assert.strictEqual(enumItem_0!.values![18], '0x31');
      assert.strictEqual(enumItem_0!.values![19], '0x32');
      assert.strictEqual(enumItem_0!.values![20], '0x33');
      assert.strictEqual(enumItem_0!.values![21], '0x34');
      assert.strictEqual(enumItem_0!.values![22], '0x35');
      assert.strictEqual(enumItem_0!.values![23], '0x36');
      assert.strictEqual(enumItem_0!.values![24], '0x37');
      assert.strictEqual(enumItem_0!.values![25], '0x38');
      assert.strictEqual(enumItem_0!.values![26], '0x39');
      assert.strictEqual(enumItem_0!.values![27], '0x3A');
      assert.strictEqual(enumItem_0!.values![28], '0x3B');
      assert.strictEqual(enumItem_0!.values![29], '0x3C');
      assert.strictEqual(enumItem_0!.values![30], '0x3D');
      assert.strictEqual(enumItem_0!.values![31], '0x3E');
      assert.strictEqual(enumItem_0!.values![32], '0x3F');
      assert.strictEqual(enumItem_0!.values![33], '0x40');
      assert.strictEqual(enumItem_0!.values![34], '0x41');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0264
  * @tc.name dts2cpp_enum_0264
  * @tc.desc dts2cpp enum 扩充-矩阵：35 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0264', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0264.ts',
            `enum EnumC35F4 {
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
        M16 = 1 << 16,
        M17 = 1 << 17,
        M18 = 1 << 18,
        M19 = 1 << 19,
        M20 = 1 << 20,
        M21 = 1 << 21,
        M22 = 1 << 22,
        M23 = 1 << 23,
        M24 = 1 << 24,
        M25 = 1 << 25,
        M26 = 1 << 26,
        M27 = 1 << 27,
        M28 = 1 << 28,
        M29 = 1 << 29,
        M30 = 1 << 30,
        M31 = 1 << 31,
        M32 = 1 << 32,
        M33 = 1 << 33,
        M34 = 1 << 34
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC35F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 35);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.members![34], 'M34');
      assert.strictEqual(enumItem_0!.values!.length, 35);
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
      assert.strictEqual(enumItem_0!.values![17], '1 << 17');
      assert.strictEqual(enumItem_0!.values![18], '1 << 18');
      assert.strictEqual(enumItem_0!.values![19], '1 << 19');
      assert.strictEqual(enumItem_0!.values![20], '1 << 20');
      assert.strictEqual(enumItem_0!.values![21], '1 << 21');
      assert.strictEqual(enumItem_0!.values![22], '1 << 22');
      assert.strictEqual(enumItem_0!.values![23], '1 << 23');
      assert.strictEqual(enumItem_0!.values![24], '1 << 24');
      assert.strictEqual(enumItem_0!.values![25], '1 << 25');
      assert.strictEqual(enumItem_0!.values![26], '1 << 26');
      assert.strictEqual(enumItem_0!.values![27], '1 << 27');
      assert.strictEqual(enumItem_0!.values![28], '1 << 28');
      assert.strictEqual(enumItem_0!.values![29], '1 << 29');
      assert.strictEqual(enumItem_0!.values![30], '1 << 30');
      assert.strictEqual(enumItem_0!.values![31], '1 << 31');
      assert.strictEqual(enumItem_0!.values![32], '1 << 32');
      assert.strictEqual(enumItem_0!.values![33], '1 << 33');
      assert.strictEqual(enumItem_0!.values![34], '1 << 34');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0265
  * @tc.name dts2cpp_enum_0265
  * @tc.desc dts2cpp enum 扩充-矩阵：35 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0265', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0265.ts',
            `enum EnumC35F5 {
        M0 = 0,
        M1 = "1",
        M2 = 4,
        M3 = "3",
        M4 = 8,
        M5 = "5",
        M6 = 12,
        M7 = "7",
        M8 = 16,
        M9 = "9",
        M10 = 20,
        M11 = "11",
        M12 = 24,
        M13 = "13",
        M14 = 28,
        M15 = "15",
        M16 = 32,
        M17 = "17",
        M18 = 36,
        M19 = "19",
        M20 = 40,
        M21 = "21",
        M22 = 44,
        M23 = "23",
        M24 = 48,
        M25 = "25",
        M26 = 52,
        M27 = "27",
        M28 = 56,
        M29 = "29",
        M30 = 60,
        M31 = "31",
        M32 = 64,
        M33 = "33",
        M34 = 68
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC35F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 35);
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
      assert.strictEqual(enumItem_0!.members![17], 'M17');
      assert.strictEqual(enumItem_0!.members![18], 'M18');
      assert.strictEqual(enumItem_0!.members![19], 'M19');
      assert.strictEqual(enumItem_0!.members![20], 'M20');
      assert.strictEqual(enumItem_0!.members![21], 'M21');
      assert.strictEqual(enumItem_0!.members![22], 'M22');
      assert.strictEqual(enumItem_0!.members![23], 'M23');
      assert.strictEqual(enumItem_0!.members![24], 'M24');
      assert.strictEqual(enumItem_0!.members![25], 'M25');
      assert.strictEqual(enumItem_0!.members![26], 'M26');
      assert.strictEqual(enumItem_0!.members![27], 'M27');
      assert.strictEqual(enumItem_0!.members![28], 'M28');
      assert.strictEqual(enumItem_0!.members![29], 'M29');
      assert.strictEqual(enumItem_0!.members![30], 'M30');
      assert.strictEqual(enumItem_0!.members![31], 'M31');
      assert.strictEqual(enumItem_0!.members![32], 'M32');
      assert.strictEqual(enumItem_0!.members![33], 'M33');
      assert.strictEqual(enumItem_0!.members![34], 'M34');
      assert.strictEqual(enumItem_0!.values!.length, 35);
      assert.strictEqual(enumItem_0!.values![0], '0');
      assert.strictEqual(enumItem_0!.values![1], '"1"');
      assert.strictEqual(enumItem_0!.values![2], '4');
      assert.strictEqual(enumItem_0!.values![3], '"3"');
      assert.strictEqual(enumItem_0!.values![4], '8');
      assert.strictEqual(enumItem_0!.values![5], '"5"');
      assert.strictEqual(enumItem_0!.values![6], '12');
      assert.strictEqual(enumItem_0!.values![7], '"7"');
      assert.strictEqual(enumItem_0!.values![8], '16');
      assert.strictEqual(enumItem_0!.values![9], '"9"');
      assert.strictEqual(enumItem_0!.values![10], '20');
      assert.strictEqual(enumItem_0!.values![11], '"11"');
      assert.strictEqual(enumItem_0!.values![12], '24');
      assert.strictEqual(enumItem_0!.values![13], '"13"');
      assert.strictEqual(enumItem_0!.values![14], '28');
      assert.strictEqual(enumItem_0!.values![15], '"15"');
      assert.strictEqual(enumItem_0!.values![16], '32');
      assert.strictEqual(enumItem_0!.values![17], '"17"');
      assert.strictEqual(enumItem_0!.values![18], '36');
      assert.strictEqual(enumItem_0!.values![19], '"19"');
      assert.strictEqual(enumItem_0!.values![20], '40');
      assert.strictEqual(enumItem_0!.values![21], '"21"');
      assert.strictEqual(enumItem_0!.values![22], '44');
      assert.strictEqual(enumItem_0!.values![23], '"23"');
      assert.strictEqual(enumItem_0!.values![24], '48');
      assert.strictEqual(enumItem_0!.values![25], '"25"');
      assert.strictEqual(enumItem_0!.values![26], '52');
      assert.strictEqual(enumItem_0!.values![27], '"27"');
      assert.strictEqual(enumItem_0!.values![28], '56');
      assert.strictEqual(enumItem_0!.values![29], '"29"');
      assert.strictEqual(enumItem_0!.values![30], '60');
      assert.strictEqual(enumItem_0!.values![31], '"31"');
      assert.strictEqual(enumItem_0!.values![32], '64');
      assert.strictEqual(enumItem_0!.values![33], '"33"');
      assert.strictEqual(enumItem_0!.values![34], '68');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0265 执行异常: ${String(err)}`);
    }
  });

});

