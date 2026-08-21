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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Enum_Suite part04.');

  /**
  * @tc.number dts2cpp_enum_0214
  * @tc.name dts2cpp_enum_0214
  * @tc.desc dts2cpp enum 扩充-矩阵：27 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0214', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0214.ts',
            `enum EnumC27F2 {
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
        M26 = "v26"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC27F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 27);
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
      assert.strictEqual(enumItem_0!.values!.length, 27);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0215
  * @tc.name dts2cpp_enum_0215
  * @tc.desc dts2cpp enum 扩充-矩阵：27 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0215', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0215.ts',
            `enum EnumC27F3 {
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
        M26 = 0x39
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC27F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 27);
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
      assert.strictEqual(enumItem_0!.values!.length, 27);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0216
  * @tc.name dts2cpp_enum_0216
  * @tc.desc dts2cpp enum 扩充-矩阵：27 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0216', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0216.ts',
            `enum EnumC27F4 {
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
        M26 = 1 << 26
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC27F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 27);
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
      assert.strictEqual(enumItem_0!.values!.length, 27);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0217
  * @tc.name dts2cpp_enum_0217
  * @tc.desc dts2cpp enum 扩充-矩阵：27 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0217', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0217.ts',
            `enum EnumC27F5 {
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
        M26 = 52
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC27F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 27);
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
      assert.strictEqual(enumItem_0!.values!.length, 27);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0217 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0218
  * @tc.name dts2cpp_enum_0218
  * @tc.desc dts2cpp enum 扩充-矩阵：28 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0218', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0218.ts',
            `enum EnumC28F0 {
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
        M27
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC28F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 28);
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
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0218 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0219
  * @tc.name dts2cpp_enum_0219
  * @tc.desc dts2cpp enum 扩充-矩阵：28 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0219', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0219.ts',
            `enum EnumC28F1 {
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
        M27 = 27
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC28F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 28);
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
      assert.strictEqual(enumItem_0!.values!.length, 28);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0219 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0220
  * @tc.name dts2cpp_enum_0220
  * @tc.desc dts2cpp enum 扩充-矩阵：28 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0220', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0220.ts',
            `enum EnumC28F2 {
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
        M27 = "v27"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC28F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 28);
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
      assert.strictEqual(enumItem_0!.values!.length, 28);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0220 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0221
  * @tc.name dts2cpp_enum_0221
  * @tc.desc dts2cpp enum 扩充-矩阵：28 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0221', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0221.ts',
            `enum EnumC28F3 {
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
        M27 = 0x3A
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC28F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 28);
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
      assert.strictEqual(enumItem_0!.values!.length, 28);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0221 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0222
  * @tc.name dts2cpp_enum_0222
  * @tc.desc dts2cpp enum 扩充-矩阵：28 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0222', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0222.ts',
            `enum EnumC28F4 {
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
        M27 = 1 << 27
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC28F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 28);
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
      assert.strictEqual(enumItem_0!.values!.length, 28);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0222 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0223
  * @tc.name dts2cpp_enum_0223
  * @tc.desc dts2cpp enum 扩充-矩阵：28 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0223', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0223.ts',
            `enum EnumC28F5 {
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
        M27 = "27"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC28F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 28);
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
      assert.strictEqual(enumItem_0!.values!.length, 28);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0224
  * @tc.name dts2cpp_enum_0224
  * @tc.desc dts2cpp enum 扩充-矩阵：29 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0224', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0224.ts',
            `enum EnumC29F0 {
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
        M28
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC29F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 29);
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
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0225
  * @tc.name dts2cpp_enum_0225
  * @tc.desc dts2cpp enum 扩充-矩阵：29 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0225', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0225.ts',
            `enum EnumC29F1 {
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
        M28 = 28
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC29F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 29);
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
      assert.strictEqual(enumItem_0!.values!.length, 29);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0225 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0226
  * @tc.name dts2cpp_enum_0226
  * @tc.desc dts2cpp enum 扩充-矩阵：29 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0226', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0226.ts',
            `enum EnumC29F2 {
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
        M28 = "v28"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC29F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 29);
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
      assert.strictEqual(enumItem_0!.values!.length, 29);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0227
  * @tc.name dts2cpp_enum_0227
  * @tc.desc dts2cpp enum 扩充-矩阵：29 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0227', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0227.ts',
            `enum EnumC29F3 {
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
        M28 = 0x3B
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC29F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 29);
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
      assert.strictEqual(enumItem_0!.values!.length, 29);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0228
  * @tc.name dts2cpp_enum_0228
  * @tc.desc dts2cpp enum 扩充-矩阵：29 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0228', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0228.ts',
            `enum EnumC29F4 {
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
        M28 = 1 << 28
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC29F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 29);
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
      assert.strictEqual(enumItem_0!.values!.length, 29);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0229
  * @tc.name dts2cpp_enum_0229
  * @tc.desc dts2cpp enum 扩充-矩阵：29 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0229', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0229.ts',
            `enum EnumC29F5 {
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
        M28 = 56
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC29F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 29);
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
      assert.strictEqual(enumItem_0!.values!.length, 29);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0229 执行异常: ${String(err)}`);
    }
  });

});

