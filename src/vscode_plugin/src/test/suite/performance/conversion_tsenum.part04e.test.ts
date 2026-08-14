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
  * @tc.number dts2cpp_enum_0230
  * @tc.name dts2cpp_enum_0230
  * @tc.desc dts2cpp enum 扩充-矩阵：30 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0230', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0230.ts',
            `enum EnumC30F0 {
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
        M29
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC30F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 30);
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
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0231
  * @tc.name dts2cpp_enum_0231
  * @tc.desc dts2cpp enum 扩充-矩阵：30 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0231', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0231.ts',
            `enum EnumC30F1 {
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
        M29 = 29
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC30F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 30);
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
      assert.strictEqual(enumItem_0!.values!.length, 30);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0232
  * @tc.name dts2cpp_enum_0232
  * @tc.desc dts2cpp enum 扩充-矩阵：30 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0232', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0232.ts',
            `enum EnumC30F2 {
        M0 = "v0",
        M1 = "v1",
        M2 = "v2",
        M3 = "v3",
        M4 = "v4",
        M5 = "v5",
        M6 = "v6",
        M7 = "v7",
        M8 = "v8",
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
        M29 = "v29"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC30F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 30);
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
      assert.strictEqual(enumItem_0!.values!.length, 30);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.strictEqual(enumItem_0!.values![2], '"v2"');
      assert.strictEqual(enumItem_0!.values![3], '"v3"');
      assert.strictEqual(enumItem_0!.values![4], '"v4"');
      assert.strictEqual(enumItem_0!.values![5], '"v5"');
      assert.strictEqual(enumItem_0!.values![6], '"v6"');
      assert.strictEqual(enumItem_0!.values![7], '"v7"');
      assert.strictEqual(enumItem_0!.values![8], '"v8"');
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0233
  * @tc.name dts2cpp_enum_0233
  * @tc.desc dts2cpp enum 扩充-矩阵：30 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0233', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0233.ts',
            `enum EnumC30F3 {
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
        M29 = 0x3C
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC30F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 30);
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
      assert.strictEqual(enumItem_0!.values!.length, 30);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0234
  * @tc.name dts2cpp_enum_0234
  * @tc.desc dts2cpp enum 扩充-矩阵：30 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0234', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0234.ts',
            `enum EnumC30F4 {
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
        M29 = 1 << 29
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC30F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 30);
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
      assert.strictEqual(enumItem_0!.values!.length, 30);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0235
  * @tc.name dts2cpp_enum_0235
  * @tc.desc dts2cpp enum 扩充-矩阵：30 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0235', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0235.ts',
            `enum EnumC30F5 {
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
        M29 = "29"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC30F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 30);
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
      assert.strictEqual(enumItem_0!.values!.length, 30);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0236
  * @tc.name dts2cpp_enum_0236
  * @tc.desc dts2cpp enum 扩充-矩阵：31 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0236', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0236.ts',
            `enum EnumC31F0 {
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
        M30
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC31F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 31);
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
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0237
  * @tc.name dts2cpp_enum_0237
  * @tc.desc dts2cpp enum 扩充-矩阵：31 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0237', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0237.ts',
            `enum EnumC31F1 {
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
        M30 = 30
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC31F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 31);
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
      assert.strictEqual(enumItem_0!.values!.length, 31);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0238
  * @tc.name dts2cpp_enum_0238
  * @tc.desc dts2cpp enum 扩充-矩阵：31 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0238', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0238.ts',
            `enum EnumC31F2 {
        M0 = "v0",
        M1 = "v1",
        M2 = "v2",
        M3 = "v3",
        M4 = "v4",
        M5 = "v5",
        M6 = "v6",
        M7 = "v7",
        M8 = "v8",
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
        M30 = "v30"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC31F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 31);
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
      assert.strictEqual(enumItem_0!.values!.length, 31);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.strictEqual(enumItem_0!.values![2], '"v2"');
      assert.strictEqual(enumItem_0!.values![3], '"v3"');
      assert.strictEqual(enumItem_0!.values![4], '"v4"');
      assert.strictEqual(enumItem_0!.values![5], '"v5"');
      assert.strictEqual(enumItem_0!.values![6], '"v6"');
      assert.strictEqual(enumItem_0!.values![7], '"v7"');
      assert.strictEqual(enumItem_0!.values![8], '"v8"');
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0239
  * @tc.name dts2cpp_enum_0239
  * @tc.desc dts2cpp enum 扩充-矩阵：31 成员 enum（全部十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0239', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0239.ts',
            `enum EnumC31F3 {
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
        M30 = 0x3D
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC31F3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 31);
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
      assert.strictEqual(enumItem_0!.values!.length, 31);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0240
  * @tc.name dts2cpp_enum_0240
  * @tc.desc dts2cpp enum 扩充-矩阵：31 成员 enum（全部位运算赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0240', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0240.ts',
            `enum EnumC31F4 {
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
        M30 = 1 << 30
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC31F4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 31);
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
      assert.strictEqual(enumItem_0!.values!.length, 31);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0241
  * @tc.name dts2cpp_enum_0241
  * @tc.desc dts2cpp enum 扩充-矩阵：31 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0241', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0241.ts',
            `enum EnumC31F5 {
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
        M30 = 60
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC31F5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 31);
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
      assert.strictEqual(enumItem_0!.values!.length, 31);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0242
  * @tc.name dts2cpp_enum_0242
  * @tc.desc dts2cpp enum 扩充-矩阵：32 成员 enum（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0242', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0242.ts',
            `enum EnumC32F0 {
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
        M31
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC32F0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 32);
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
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0242 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0243
  * @tc.name dts2cpp_enum_0243
  * @tc.desc dts2cpp enum 扩充-矩阵：32 成员 enum（全部数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0243', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0243.ts',
            `enum EnumC32F1 {
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
        M31 = 31
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC32F1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 32);
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
      assert.strictEqual(enumItem_0!.values!.length, 32);
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0244
  * @tc.name dts2cpp_enum_0244
  * @tc.desc dts2cpp enum 扩充-矩阵：32 成员 enum（全部字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0244', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0244.ts',
            `enum EnumC32F2 {
        M0 = "v0",
        M1 = "v1",
        M2 = "v2",
        M3 = "v3",
        M4 = "v4",
        M5 = "v5",
        M6 = "v6",
        M7 = "v7",
        M8 = "v8",
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
        M31 = "v31"
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EnumC32F2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 32);
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
      assert.strictEqual(enumItem_0!.values!.length, 32);
      assert.strictEqual(enumItem_0!.values![0], '"v0"');
      assert.strictEqual(enumItem_0!.values![1], '"v1"');
      assert.strictEqual(enumItem_0!.values![2], '"v2"');
      assert.strictEqual(enumItem_0!.values![3], '"v3"');
      assert.strictEqual(enumItem_0!.values![4], '"v4"');
      assert.strictEqual(enumItem_0!.values![5], '"v5"');
      assert.strictEqual(enumItem_0!.values![6], '"v6"');
      assert.strictEqual(enumItem_0!.values![7], '"v7"');
      assert.strictEqual(enumItem_0!.values![8], '"v8"');
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
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0244 执行异常: ${String(err)}`);
    }
  });

});

