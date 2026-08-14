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
  * @tc.number dts2cpp_enum_0293
  * @tc.name dts2cpp_enum_0293
  * @tc.desc dts2cpp enum 扩充-矩阵：40 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0293', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0293.ts',
            `enum EnumC40F3 {
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
        M34 = 0x41,
        M35 = 0x42,
        M36 = 0x43,
        M37 = 0x44,
        M38 = 0x45,
        M39 = 0x46
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC40F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 40);
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
      assert.strictEqual(enumItem_0!.members![35], 'M35');
      assert.strictEqual(enumItem_0!.members![36], 'M36');
      assert.strictEqual(enumItem_0!.members![37], 'M37');
      assert.strictEqual(enumItem_0!.members![38], 'M38');
      assert.strictEqual(enumItem_0!.members![39], 'M39');
      assert.strictEqual(enumItem_0!.values!.length, 40);
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
      assert.strictEqual(enumItem_0!.values![35], '0x42');
      assert.strictEqual(enumItem_0!.values![36], '0x43');
      assert.strictEqual(enumItem_0!.values![37], '0x44');
      assert.strictEqual(enumItem_0!.values![38], '0x45');
      assert.strictEqual(enumItem_0!.values![39], '0x46');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0293 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0294
  * @tc.name dts2cpp_enum_0294
  * @tc.desc dts2cpp enum 扩充-矩阵：40 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0294', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0294.ts',
            `enum EnumC40F4 {
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
        M34 = 1 << 34,
        M35 = 1 << 35,
        M36 = 1 << 36,
        M37 = 1 << 37,
        M38 = 1 << 38,
        M39 = 1 << 39
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC40F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 40);
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
      assert.strictEqual(enumItem_0!.members![35], 'M35');
      assert.strictEqual(enumItem_0!.members![36], 'M36');
      assert.strictEqual(enumItem_0!.members![37], 'M37');
      assert.strictEqual(enumItem_0!.members![38], 'M38');
      assert.strictEqual(enumItem_0!.members![39], 'M39');
      assert.strictEqual(enumItem_0!.values!.length, 40);
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
      assert.strictEqual(enumItem_0!.values![35], '1 << 35');
      assert.strictEqual(enumItem_0!.values![36], '1 << 36');
      assert.strictEqual(enumItem_0!.values![37], '1 << 37');
      assert.strictEqual(enumItem_0!.values![38], '1 << 38');
      assert.strictEqual(enumItem_0!.values![39], '1 << 39');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0294 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0294 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0295
  * @tc.name dts2cpp_enum_0295
  * @tc.desc dts2cpp enum 扩充-矩阵：40 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0295', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0295.ts',
            `enum EnumC40F5 {
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
        M34 = 68,
        M35 = "35",
        M36 = 72,
        M37 = "37",
        M38 = 76,
        M39 = "39"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC40F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 40);
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
      assert.strictEqual(enumItem_0!.members![35], 'M35');
      assert.strictEqual(enumItem_0!.members![36], 'M36');
      assert.strictEqual(enumItem_0!.members![37], 'M37');
      assert.strictEqual(enumItem_0!.members![38], 'M38');
      assert.strictEqual(enumItem_0!.members![39], 'M39');
      assert.strictEqual(enumItem_0!.values!.length, 40);
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
      assert.strictEqual(enumItem_0!.values![35], '"35"');
      assert.strictEqual(enumItem_0!.values![36], '72');
      assert.strictEqual(enumItem_0!.values![37], '"37"');
      assert.strictEqual(enumItem_0!.values![38], '76');
      assert.strictEqual(enumItem_0!.values![39], '"39"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0295 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0296
  * @tc.name dts2cpp_enum_0296
  * @tc.desc dts2cpp enum 扩充-命名：UpperCamel 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0296', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0296.ts',
            `enum UpperCamel {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'UpperCamel');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0296 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0297
  * @tc.name dts2cpp_enum_0297
  * @tc.desc dts2cpp enum 扩充-命名：lowerCamel 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0297', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0297.ts',
            `enum lowerCamel {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'lowerCamel');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0297 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0297 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0298
  * @tc.name dts2cpp_enum_0298
  * @tc.desc dts2cpp enum 扩充-命名：snake_case 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0298', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0298.ts',
            `enum snake_case {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'snake_case');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0298 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0299
  * @tc.name dts2cpp_enum_0299
  * @tc.desc dts2cpp enum 扩充-命名：TRAILING_DIGITS2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0299', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0299.ts',
            `enum TRAILING_DIGITS2 {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'TRAILING_DIGITS2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0299 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0300
  * @tc.name dts2cpp_enum_0300
  * @tc.desc dts2cpp enum 扩充-命名：leading_underscore 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0300', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0300.ts',
            `enum leading_underscore {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'leading_underscore');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0300 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0301
  * @tc.name dts2cpp_enum_0301
  * @tc.desc dts2cpp enum 扩充-命名：Double__Under 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0301', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0301.ts',
            `enum Double__Under {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Double__Under');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0301 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0301 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0302
  * @tc.name dts2cpp_enum_0302
  * @tc.desc dts2cpp enum 扩充-命名：ClassName 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0302', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0302.ts',
            `enum ClassName {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ClassName');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0302 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0303
  * @tc.name dts2cpp_enum_0303
  * @tc.desc dts2cpp enum 扩充-命名：E 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0303', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0303.ts',
            `enum E {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'E');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0303 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0304
  * @tc.name dts2cpp_enum_0304
  * @tc.desc dts2cpp enum 扩充-命名：E1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0304', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0304.ts',
            `enum E1 {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'E1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0304 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0304 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0305
  * @tc.name dts2cpp_enum_0305
  * @tc.desc dts2cpp enum 扩充-命名：e1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0305', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0305.ts',
            `enum e1 {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'e1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0305 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0306
  * @tc.name dts2cpp_enum_0306
  * @tc.desc dts2cpp enum 扩充-命名：EN 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0306', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0306.ts',
            `enum EN {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EN');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0306 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0306 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0307
  * @tc.name dts2cpp_enum_0307
  * @tc.desc dts2cpp enum 扩充-命名：en 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0307', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0307.ts',
            `enum en {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'en');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0307 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0307 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0308
  * @tc.name dts2cpp_enum_0308
  * @tc.desc dts2cpp enum 扩充-命名：Enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0308', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0308.ts',
            `enum Enum {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Enum');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0308 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0308 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0309
  * @tc.name dts2cpp_enum_0309
  * @tc.desc dts2cpp enum 扩充-命名：enum1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0309', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0309.ts',
            `enum enum1 {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'enum1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0309 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0309 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0310
  * @tc.name dts2cpp_enum_0310
  * @tc.desc dts2cpp enum 扩充-命名：Enum123 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0310', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0310.ts',
            `enum Enum123 {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Enum123');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0310 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0310 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0311
  * @tc.name dts2cpp_enum_0311
  * @tc.desc dts2cpp enum 扩充-命名：状态码 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0311', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0311.ts',
            `enum 状态码 {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === '状态码');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0311 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0311 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0312
  * @tc.name dts2cpp_enum_0312
  * @tc.desc dts2cpp enum 扩充-命名：状态码2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0312', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0312.ts',
            `enum 状态码2 {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === '状态码2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0312 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0312 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0313
  * @tc.name dts2cpp_enum_0313
  * @tc.desc dts2cpp enum 扩充-命名：_internal 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0313', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0313.ts',
            `enum _internal {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === '_internal');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0313 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0313 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0314
  * @tc.name dts2cpp_enum_0314
  * @tc.desc dts2cpp enum 扩充-命名：VersionV2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0314', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0314.ts',
            `enum VersionV2 {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'VersionV2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0314 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0314 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0315
  * @tc.name dts2cpp_enum_0315
  * @tc.desc dts2cpp enum 扩充-命名：HTTPStatus 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0315', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0315.ts',
            `enum HTTPStatus {
        A,
        B,
        C,
        D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'HTTPStatus');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 4);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.members![3], 'D');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0315 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0315 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0316
  * @tc.name dts2cpp_enum_0316
  * @tc.desc dts2cpp enum 扩充-多声明：同文件 2 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0316', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0316.ts',
            `enum MultiE0 { A0, B0 }
enum MultiE1 { A1, B1 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 2);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'MultiE0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A0');
      assert.strictEqual(enumItem_0!.members![1], 'B0');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'MultiE1');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'A1');
      assert.strictEqual(enumItem_1!.members![1], 'B1');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0316 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0316 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0317
  * @tc.name dts2cpp_enum_0317
  * @tc.desc dts2cpp enum 扩充-多声明：同文件 3 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0317', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0317.ts',
            `enum MultiE0 { A0, B0 }
enum MultiE1 { A1, B1 }
enum MultiE2 { A2, B2 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 3);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'MultiE0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A0');
      assert.strictEqual(enumItem_0!.members![1], 'B0');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'MultiE1');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'A1');
      assert.strictEqual(enumItem_1!.members![1], 'B1');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      const enumItem_2 = parseObj.enums.find(item => item.name === 'MultiE2');
      assert.ok(enumItem_2);
      assert.strictEqual(enumItem_2!.members!.length, 2);
      assert.strictEqual(enumItem_2!.members![0], 'A2');
      assert.strictEqual(enumItem_2!.members![1], 'B2');
      assert.strictEqual(enumItem_2!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0317 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0317 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0318
  * @tc.name dts2cpp_enum_0318
  * @tc.desc dts2cpp enum 扩充-多声明：同文件 4 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0318', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0318.ts',
            `enum MultiE0 { A0, B0 }
enum MultiE1 { A1, B1 }
enum MultiE2 { A2, B2 }
enum MultiE3 { A3, B3 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 4);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'MultiE0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A0');
      assert.strictEqual(enumItem_0!.members![1], 'B0');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'MultiE1');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'A1');
      assert.strictEqual(enumItem_1!.members![1], 'B1');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      const enumItem_2 = parseObj.enums.find(item => item.name === 'MultiE2');
      assert.ok(enumItem_2);
      assert.strictEqual(enumItem_2!.members!.length, 2);
      assert.strictEqual(enumItem_2!.members![0], 'A2');
      assert.strictEqual(enumItem_2!.members![1], 'B2');
      assert.strictEqual(enumItem_2!.values!.length, 0);
      const enumItem_3 = parseObj.enums.find(item => item.name === 'MultiE3');
      assert.ok(enumItem_3);
      assert.strictEqual(enumItem_3!.members!.length, 2);
      assert.strictEqual(enumItem_3!.members![0], 'A3');
      assert.strictEqual(enumItem_3!.members![1], 'B3');
      assert.strictEqual(enumItem_3!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0318 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0318 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0319
  * @tc.name dts2cpp_enum_0319
  * @tc.desc dts2cpp enum 扩充-多声明：同文件 5 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0319', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0319.ts',
            `enum MultiE0 { A0, B0 }
enum MultiE1 { A1, B1 }
enum MultiE2 { A2, B2 }
enum MultiE3 { A3, B3 }
enum MultiE4 { A4, B4 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 5);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'MultiE0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A0');
      assert.strictEqual(enumItem_0!.members![1], 'B0');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'MultiE1');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'A1');
      assert.strictEqual(enumItem_1!.members![1], 'B1');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      const enumItem_2 = parseObj.enums.find(item => item.name === 'MultiE2');
      assert.ok(enumItem_2);
      assert.strictEqual(enumItem_2!.members!.length, 2);
      assert.strictEqual(enumItem_2!.members![0], 'A2');
      assert.strictEqual(enumItem_2!.members![1], 'B2');
      assert.strictEqual(enumItem_2!.values!.length, 0);
      const enumItem_3 = parseObj.enums.find(item => item.name === 'MultiE3');
      assert.ok(enumItem_3);
      assert.strictEqual(enumItem_3!.members!.length, 2);
      assert.strictEqual(enumItem_3!.members![0], 'A3');
      assert.strictEqual(enumItem_3!.members![1], 'B3');
      assert.strictEqual(enumItem_3!.values!.length, 0);
      const enumItem_4 = parseObj.enums.find(item => item.name === 'MultiE4');
      assert.ok(enumItem_4);
      assert.strictEqual(enumItem_4!.members!.length, 2);
      assert.strictEqual(enumItem_4!.members![0], 'A4');
      assert.strictEqual(enumItem_4!.members![1], 'B4');
      assert.strictEqual(enumItem_4!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0319 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0319 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0320
  * @tc.name dts2cpp_enum_0320
  * @tc.desc dts2cpp enum 扩充-多声明：同文件 6 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0320', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0320.ts',
            `enum MultiE0 { A0, B0 }
enum MultiE1 { A1, B1 }
enum MultiE2 { A2, B2 }
enum MultiE3 { A3, B3 }
enum MultiE4 { A4, B4 }
enum MultiE5 { A5, B5 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 6);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'MultiE0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A0');
      assert.strictEqual(enumItem_0!.members![1], 'B0');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'MultiE1');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'A1');
      assert.strictEqual(enumItem_1!.members![1], 'B1');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      const enumItem_2 = parseObj.enums.find(item => item.name === 'MultiE2');
      assert.ok(enumItem_2);
      assert.strictEqual(enumItem_2!.members!.length, 2);
      assert.strictEqual(enumItem_2!.members![0], 'A2');
      assert.strictEqual(enumItem_2!.members![1], 'B2');
      assert.strictEqual(enumItem_2!.values!.length, 0);
      const enumItem_3 = parseObj.enums.find(item => item.name === 'MultiE3');
      assert.ok(enumItem_3);
      assert.strictEqual(enumItem_3!.members!.length, 2);
      assert.strictEqual(enumItem_3!.members![0], 'A3');
      assert.strictEqual(enumItem_3!.members![1], 'B3');
      assert.strictEqual(enumItem_3!.values!.length, 0);
      const enumItem_4 = parseObj.enums.find(item => item.name === 'MultiE4');
      assert.ok(enumItem_4);
      assert.strictEqual(enumItem_4!.members!.length, 2);
      assert.strictEqual(enumItem_4!.members![0], 'A4');
      assert.strictEqual(enumItem_4!.members![1], 'B4');
      assert.strictEqual(enumItem_4!.values!.length, 0);
      const enumItem_5 = parseObj.enums.find(item => item.name === 'MultiE5');
      assert.ok(enumItem_5);
      assert.strictEqual(enumItem_5!.members!.length, 2);
      assert.strictEqual(enumItem_5!.members![0], 'A5');
      assert.strictEqual(enumItem_5!.members![1], 'B5');
      assert.strictEqual(enumItem_5!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0320 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0320 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0321
  * @tc.name dts2cpp_enum_0321
  * @tc.desc dts2cpp enum 扩充-多声明：同文件 7 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0321', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0321.ts',
            `enum MultiE0 { A0, B0 }
enum MultiE1 { A1, B1 }
enum MultiE2 { A2, B2 }
enum MultiE3 { A3, B3 }
enum MultiE4 { A4, B4 }
enum MultiE5 { A5, B5 }
enum MultiE6 { A6, B6 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 7);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'MultiE0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A0');
      assert.strictEqual(enumItem_0!.members![1], 'B0');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'MultiE1');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'A1');
      assert.strictEqual(enumItem_1!.members![1], 'B1');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      const enumItem_2 = parseObj.enums.find(item => item.name === 'MultiE2');
      assert.ok(enumItem_2);
      assert.strictEqual(enumItem_2!.members!.length, 2);
      assert.strictEqual(enumItem_2!.members![0], 'A2');
      assert.strictEqual(enumItem_2!.members![1], 'B2');
      assert.strictEqual(enumItem_2!.values!.length, 0);
      const enumItem_3 = parseObj.enums.find(item => item.name === 'MultiE3');
      assert.ok(enumItem_3);
      assert.strictEqual(enumItem_3!.members!.length, 2);
      assert.strictEqual(enumItem_3!.members![0], 'A3');
      assert.strictEqual(enumItem_3!.members![1], 'B3');
      assert.strictEqual(enumItem_3!.values!.length, 0);
      const enumItem_4 = parseObj.enums.find(item => item.name === 'MultiE4');
      assert.ok(enumItem_4);
      assert.strictEqual(enumItem_4!.members!.length, 2);
      assert.strictEqual(enumItem_4!.members![0], 'A4');
      assert.strictEqual(enumItem_4!.members![1], 'B4');
      assert.strictEqual(enumItem_4!.values!.length, 0);
      const enumItem_5 = parseObj.enums.find(item => item.name === 'MultiE5');
      assert.ok(enumItem_5);
      assert.strictEqual(enumItem_5!.members!.length, 2);
      assert.strictEqual(enumItem_5!.members![0], 'A5');
      assert.strictEqual(enumItem_5!.members![1], 'B5');
      assert.strictEqual(enumItem_5!.values!.length, 0);
      const enumItem_6 = parseObj.enums.find(item => item.name === 'MultiE6');
      assert.ok(enumItem_6);
      assert.strictEqual(enumItem_6!.members!.length, 2);
      assert.strictEqual(enumItem_6!.members![0], 'A6');
      assert.strictEqual(enumItem_6!.members![1], 'B6');
      assert.strictEqual(enumItem_6!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0321 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0321 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0322
  * @tc.name dts2cpp_enum_0322
  * @tc.desc dts2cpp enum 扩充-多声明：同文件 8 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0322', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0322.ts',
            `enum MultiE0 { A0, B0 }
enum MultiE1 { A1, B1 }
enum MultiE2 { A2, B2 }
enum MultiE3 { A3, B3 }
enum MultiE4 { A4, B4 }
enum MultiE5 { A5, B5 }
enum MultiE6 { A6, B6 }
enum MultiE7 { A7, B7 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 8);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'MultiE0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A0');
      assert.strictEqual(enumItem_0!.members![1], 'B0');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'MultiE1');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'A1');
      assert.strictEqual(enumItem_1!.members![1], 'B1');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      const enumItem_2 = parseObj.enums.find(item => item.name === 'MultiE2');
      assert.ok(enumItem_2);
      assert.strictEqual(enumItem_2!.members!.length, 2);
      assert.strictEqual(enumItem_2!.members![0], 'A2');
      assert.strictEqual(enumItem_2!.members![1], 'B2');
      assert.strictEqual(enumItem_2!.values!.length, 0);
      const enumItem_3 = parseObj.enums.find(item => item.name === 'MultiE3');
      assert.ok(enumItem_3);
      assert.strictEqual(enumItem_3!.members!.length, 2);
      assert.strictEqual(enumItem_3!.members![0], 'A3');
      assert.strictEqual(enumItem_3!.members![1], 'B3');
      assert.strictEqual(enumItem_3!.values!.length, 0);
      const enumItem_4 = parseObj.enums.find(item => item.name === 'MultiE4');
      assert.ok(enumItem_4);
      assert.strictEqual(enumItem_4!.members!.length, 2);
      assert.strictEqual(enumItem_4!.members![0], 'A4');
      assert.strictEqual(enumItem_4!.members![1], 'B4');
      assert.strictEqual(enumItem_4!.values!.length, 0);
      const enumItem_5 = parseObj.enums.find(item => item.name === 'MultiE5');
      assert.ok(enumItem_5);
      assert.strictEqual(enumItem_5!.members!.length, 2);
      assert.strictEqual(enumItem_5!.members![0], 'A5');
      assert.strictEqual(enumItem_5!.members![1], 'B5');
      assert.strictEqual(enumItem_5!.values!.length, 0);
      const enumItem_6 = parseObj.enums.find(item => item.name === 'MultiE6');
      assert.ok(enumItem_6);
      assert.strictEqual(enumItem_6!.members!.length, 2);
      assert.strictEqual(enumItem_6!.members![0], 'A6');
      assert.strictEqual(enumItem_6!.members![1], 'B6');
      assert.strictEqual(enumItem_6!.values!.length, 0);
      const enumItem_7 = parseObj.enums.find(item => item.name === 'MultiE7');
      assert.ok(enumItem_7);
      assert.strictEqual(enumItem_7!.members!.length, 2);
      assert.strictEqual(enumItem_7!.members![0], 'A7');
      assert.strictEqual(enumItem_7!.members![1], 'B7');
      assert.strictEqual(enumItem_7!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0322 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0323
  * @tc.name dts2cpp_enum_0323
  * @tc.desc dts2cpp enum 扩充-多声明：同文件 10 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0323', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0323.ts',
            `enum MultiE0 { A0, B0 }
enum MultiE1 { A1, B1 }
enum MultiE2 { A2, B2 }
enum MultiE3 { A3, B3 }
enum MultiE4 { A4, B4 }
enum MultiE5 { A5, B5 }
enum MultiE6 { A6, B6 }
enum MultiE7 { A7, B7 }
enum MultiE8 { A8, B8 }
enum MultiE9 { A9, B9 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 10);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'MultiE0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A0');
      assert.strictEqual(enumItem_0!.members![1], 'B0');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'MultiE1');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 2);
      assert.strictEqual(enumItem_1!.members![0], 'A1');
      assert.strictEqual(enumItem_1!.members![1], 'B1');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      const enumItem_2 = parseObj.enums.find(item => item.name === 'MultiE2');
      assert.ok(enumItem_2);
      assert.strictEqual(enumItem_2!.members!.length, 2);
      assert.strictEqual(enumItem_2!.members![0], 'A2');
      assert.strictEqual(enumItem_2!.members![1], 'B2');
      assert.strictEqual(enumItem_2!.values!.length, 0);
      const enumItem_3 = parseObj.enums.find(item => item.name === 'MultiE3');
      assert.ok(enumItem_3);
      assert.strictEqual(enumItem_3!.members!.length, 2);
      assert.strictEqual(enumItem_3!.members![0], 'A3');
      assert.strictEqual(enumItem_3!.members![1], 'B3');
      assert.strictEqual(enumItem_3!.values!.length, 0);
      const enumItem_4 = parseObj.enums.find(item => item.name === 'MultiE4');
      assert.ok(enumItem_4);
      assert.strictEqual(enumItem_4!.members!.length, 2);
      assert.strictEqual(enumItem_4!.members![0], 'A4');
      assert.strictEqual(enumItem_4!.members![1], 'B4');
      assert.strictEqual(enumItem_4!.values!.length, 0);
      const enumItem_5 = parseObj.enums.find(item => item.name === 'MultiE5');
      assert.ok(enumItem_5);
      assert.strictEqual(enumItem_5!.members!.length, 2);
      assert.strictEqual(enumItem_5!.members![0], 'A5');
      assert.strictEqual(enumItem_5!.members![1], 'B5');
      assert.strictEqual(enumItem_5!.values!.length, 0);
      const enumItem_6 = parseObj.enums.find(item => item.name === 'MultiE6');
      assert.ok(enumItem_6);
      assert.strictEqual(enumItem_6!.members!.length, 2);
      assert.strictEqual(enumItem_6!.members![0], 'A6');
      assert.strictEqual(enumItem_6!.members![1], 'B6');
      assert.strictEqual(enumItem_6!.values!.length, 0);
      const enumItem_7 = parseObj.enums.find(item => item.name === 'MultiE7');
      assert.ok(enumItem_7);
      assert.strictEqual(enumItem_7!.members!.length, 2);
      assert.strictEqual(enumItem_7!.members![0], 'A7');
      assert.strictEqual(enumItem_7!.members![1], 'B7');
      assert.strictEqual(enumItem_7!.values!.length, 0);
      const enumItem_8 = parseObj.enums.find(item => item.name === 'MultiE8');
      assert.ok(enumItem_8);
      assert.strictEqual(enumItem_8!.members!.length, 2);
      assert.strictEqual(enumItem_8!.members![0], 'A8');
      assert.strictEqual(enumItem_8!.members![1], 'B8');
      assert.strictEqual(enumItem_8!.values!.length, 0);
      const enumItem_9 = parseObj.enums.find(item => item.name === 'MultiE9');
      assert.ok(enumItem_9);
      assert.strictEqual(enumItem_9!.members!.length, 2);
      assert.strictEqual(enumItem_9!.members![0], 'A9');
      assert.strictEqual(enumItem_9!.members![1], 'B9');
      assert.strictEqual(enumItem_9!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0323 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0323 执行异常: ${String(err)}`);
    }
  });

});

