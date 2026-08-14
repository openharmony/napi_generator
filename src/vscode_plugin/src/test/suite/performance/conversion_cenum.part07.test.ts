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
import { parseFunction, parseClass, parseStruct, parseEnum, parseUnion } from '../../../parse/parsec';
import { getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions, genDtsFile } from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 执行 10 次 ≤ 6s（实测约 0.1~3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_C_Enum_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Enum_Suite part07.');

  /**
  * @tc.number c_enum_0163
  * @tc.name c_enum_0163
  * @tc.desc h2dts parseEnum：扩充-矩阵：35 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0163', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7,
    M7 = 0x8,
    M8 = 0x9,
    M9 = 0xA,
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A,
    M26 = 0x1B,
    M27 = 0x1C,
    M28 = 0x1D,
    M29 = 0x1E,
    M30 = 0x1F,
    M31 = 0x20,
    M32 = 0x21,
    M33 = 0x22,
    M34 = 0x23
} En35F3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En35F3');
      assert.strictEqual(objList[0].alias, 'En35F3');
      assert.strictEqual(objList[0].members.length, 35);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
      assert.strictEqual(objList[0].members[7], 'M7=0x8');
      assert.strictEqual(objList[0].members[8], 'M8=0x9');
      assert.strictEqual(objList[0].members[9], 'M9=0xA');
      assert.strictEqual(objList[0].members[10], 'M10=0xB');
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
      assert.strictEqual(objList[0].members[26], 'M26=0x1B');
      assert.strictEqual(objList[0].members[27], 'M27=0x1C');
      assert.strictEqual(objList[0].members[28], 'M28=0x1D');
      assert.strictEqual(objList[0].members[29], 'M29=0x1E');
      assert.strictEqual(objList[0].members[30], 'M30=0x1F');
      assert.strictEqual(objList[0].members[31], 'M31=0x20');
      assert.strictEqual(objList[0].members[32], 'M32=0x21');
      assert.strictEqual(objList[0].members[33], 'M33=0x22');
      assert.strictEqual(objList[0].members[34], 'M34=0x23');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0164
  * @tc.name c_enum_0164
  * @tc.desc h2dts parseEnum：扩充-矩阵：36 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0164', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M34,
    M35
} En36F0;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En36F0');
      assert.strictEqual(objList[0].alias, 'En36F0');
      assert.strictEqual(objList[0].members.length, 36);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
      assert.strictEqual(objList[0].members[7], 'M7');
      assert.strictEqual(objList[0].members[8], 'M8');
      assert.strictEqual(objList[0].members[9], 'M9');
      assert.strictEqual(objList[0].members[10], 'M10');
      assert.strictEqual(objList[0].members[11], 'M11');
      assert.strictEqual(objList[0].members[12], 'M12');
      assert.strictEqual(objList[0].members[13], 'M13');
      assert.strictEqual(objList[0].members[14], 'M14');
      assert.strictEqual(objList[0].members[15], 'M15');
      assert.strictEqual(objList[0].members[16], 'M16');
      assert.strictEqual(objList[0].members[17], 'M17');
      assert.strictEqual(objList[0].members[18], 'M18');
      assert.strictEqual(objList[0].members[19], 'M19');
      assert.strictEqual(objList[0].members[20], 'M20');
      assert.strictEqual(objList[0].members[21], 'M21');
      assert.strictEqual(objList[0].members[22], 'M22');
      assert.strictEqual(objList[0].members[23], 'M23');
      assert.strictEqual(objList[0].members[24], 'M24');
      assert.strictEqual(objList[0].members[25], 'M25');
      assert.strictEqual(objList[0].members[26], 'M26');
      assert.strictEqual(objList[0].members[27], 'M27');
      assert.strictEqual(objList[0].members[28], 'M28');
      assert.strictEqual(objList[0].members[29], 'M29');
      assert.strictEqual(objList[0].members[30], 'M30');
      assert.strictEqual(objList[0].members[31], 'M31');
      assert.strictEqual(objList[0].members[32], 'M32');
      assert.strictEqual(objList[0].members[33], 'M33');
      assert.strictEqual(objList[0].members[34], 'M34');
      assert.strictEqual(objList[0].members[35], 'M35');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0165
  * @tc.name c_enum_0165
  * @tc.desc h2dts parseEnum：扩充-矩阵：36 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0165', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M34 = 34,
    M35 = 35
} En36F1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En36F1');
      assert.strictEqual(objList[0].alias, 'En36F1');
      assert.strictEqual(objList[0].members.length, 36);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
      assert.strictEqual(objList[0].members[6], 'M6=6');
      assert.strictEqual(objList[0].members[7], 'M7=7');
      assert.strictEqual(objList[0].members[8], 'M8=8');
      assert.strictEqual(objList[0].members[9], 'M9=9');
      assert.strictEqual(objList[0].members[10], 'M10=10');
      assert.strictEqual(objList[0].members[11], 'M11=11');
      assert.strictEqual(objList[0].members[12], 'M12=12');
      assert.strictEqual(objList[0].members[13], 'M13=13');
      assert.strictEqual(objList[0].members[14], 'M14=14');
      assert.strictEqual(objList[0].members[15], 'M15=15');
      assert.strictEqual(objList[0].members[16], 'M16=16');
      assert.strictEqual(objList[0].members[17], 'M17=17');
      assert.strictEqual(objList[0].members[18], 'M18=18');
      assert.strictEqual(objList[0].members[19], 'M19=19');
      assert.strictEqual(objList[0].members[20], 'M20=20');
      assert.strictEqual(objList[0].members[21], 'M21=21');
      assert.strictEqual(objList[0].members[22], 'M22=22');
      assert.strictEqual(objList[0].members[23], 'M23=23');
      assert.strictEqual(objList[0].members[24], 'M24=24');
      assert.strictEqual(objList[0].members[25], 'M25=25');
      assert.strictEqual(objList[0].members[26], 'M26=26');
      assert.strictEqual(objList[0].members[27], 'M27=27');
      assert.strictEqual(objList[0].members[28], 'M28=28');
      assert.strictEqual(objList[0].members[29], 'M29=29');
      assert.strictEqual(objList[0].members[30], 'M30=30');
      assert.strictEqual(objList[0].members[31], 'M31=31');
      assert.strictEqual(objList[0].members[32], 'M32=32');
      assert.strictEqual(objList[0].members[33], 'M33=33');
      assert.strictEqual(objList[0].members[34], 'M34=34');
      assert.strictEqual(objList[0].members[35], 'M35=35');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0166
  * @tc.name c_enum_0166
  * @tc.desc h2dts parseEnum：扩充-矩阵：36 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0166', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M31 = "v31",
    M32 = "v32",
    M33 = "v33",
    M34 = "v34",
    M35 = "v35"
} En36F2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En36F2');
      assert.strictEqual(objList[0].alias, 'En36F2');
      assert.strictEqual(objList[0].members.length, 36);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
      assert.strictEqual(objList[0].members[6], 'M6="v6"');
      assert.strictEqual(objList[0].members[7], 'M7="v7"');
      assert.strictEqual(objList[0].members[8], 'M8="v8"');
      assert.strictEqual(objList[0].members[9], 'M9="v9"');
      assert.strictEqual(objList[0].members[10], 'M10="v10"');
      assert.strictEqual(objList[0].members[11], 'M11="v11"');
      assert.strictEqual(objList[0].members[12], 'M12="v12"');
      assert.strictEqual(objList[0].members[13], 'M13="v13"');
      assert.strictEqual(objList[0].members[14], 'M14="v14"');
      assert.strictEqual(objList[0].members[15], 'M15="v15"');
      assert.strictEqual(objList[0].members[16], 'M16="v16"');
      assert.strictEqual(objList[0].members[17], 'M17="v17"');
      assert.strictEqual(objList[0].members[18], 'M18="v18"');
      assert.strictEqual(objList[0].members[19], 'M19="v19"');
      assert.strictEqual(objList[0].members[20], 'M20="v20"');
      assert.strictEqual(objList[0].members[21], 'M21="v21"');
      assert.strictEqual(objList[0].members[22], 'M22="v22"');
      assert.strictEqual(objList[0].members[23], 'M23="v23"');
      assert.strictEqual(objList[0].members[24], 'M24="v24"');
      assert.strictEqual(objList[0].members[25], 'M25="v25"');
      assert.strictEqual(objList[0].members[26], 'M26="v26"');
      assert.strictEqual(objList[0].members[27], 'M27="v27"');
      assert.strictEqual(objList[0].members[28], 'M28="v28"');
      assert.strictEqual(objList[0].members[29], 'M29="v29"');
      assert.strictEqual(objList[0].members[30], 'M30="v30"');
      assert.strictEqual(objList[0].members[31], 'M31="v31"');
      assert.strictEqual(objList[0].members[32], 'M32="v32"');
      assert.strictEqual(objList[0].members[33], 'M33="v33"');
      assert.strictEqual(objList[0].members[34], 'M34="v34"');
      assert.strictEqual(objList[0].members[35], 'M35="v35"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0167
  * @tc.name c_enum_0167
  * @tc.desc h2dts parseEnum：扩充-矩阵：36 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0167', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7,
    M7 = 0x8,
    M8 = 0x9,
    M9 = 0xA,
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A,
    M26 = 0x1B,
    M27 = 0x1C,
    M28 = 0x1D,
    M29 = 0x1E,
    M30 = 0x1F,
    M31 = 0x20,
    M32 = 0x21,
    M33 = 0x22,
    M34 = 0x23,
    M35 = 0x24
} En36F3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En36F3');
      assert.strictEqual(objList[0].alias, 'En36F3');
      assert.strictEqual(objList[0].members.length, 36);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
      assert.strictEqual(objList[0].members[7], 'M7=0x8');
      assert.strictEqual(objList[0].members[8], 'M8=0x9');
      assert.strictEqual(objList[0].members[9], 'M9=0xA');
      assert.strictEqual(objList[0].members[10], 'M10=0xB');
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
      assert.strictEqual(objList[0].members[26], 'M26=0x1B');
      assert.strictEqual(objList[0].members[27], 'M27=0x1C');
      assert.strictEqual(objList[0].members[28], 'M28=0x1D');
      assert.strictEqual(objList[0].members[29], 'M29=0x1E');
      assert.strictEqual(objList[0].members[30], 'M30=0x1F');
      assert.strictEqual(objList[0].members[31], 'M31=0x20');
      assert.strictEqual(objList[0].members[32], 'M32=0x21');
      assert.strictEqual(objList[0].members[33], 'M33=0x22');
      assert.strictEqual(objList[0].members[34], 'M34=0x23');
      assert.strictEqual(objList[0].members[35], 'M35=0x24');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0168
  * @tc.name c_enum_0168
  * @tc.desc h2dts parseEnum：扩充-矩阵：37 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0168', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M34,
    M35,
    M36
} En37F0;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En37F0');
      assert.strictEqual(objList[0].alias, 'En37F0');
      assert.strictEqual(objList[0].members.length, 37);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
      assert.strictEqual(objList[0].members[7], 'M7');
      assert.strictEqual(objList[0].members[8], 'M8');
      assert.strictEqual(objList[0].members[9], 'M9');
      assert.strictEqual(objList[0].members[10], 'M10');
      assert.strictEqual(objList[0].members[11], 'M11');
      assert.strictEqual(objList[0].members[12], 'M12');
      assert.strictEqual(objList[0].members[13], 'M13');
      assert.strictEqual(objList[0].members[14], 'M14');
      assert.strictEqual(objList[0].members[15], 'M15');
      assert.strictEqual(objList[0].members[16], 'M16');
      assert.strictEqual(objList[0].members[17], 'M17');
      assert.strictEqual(objList[0].members[18], 'M18');
      assert.strictEqual(objList[0].members[19], 'M19');
      assert.strictEqual(objList[0].members[20], 'M20');
      assert.strictEqual(objList[0].members[21], 'M21');
      assert.strictEqual(objList[0].members[22], 'M22');
      assert.strictEqual(objList[0].members[23], 'M23');
      assert.strictEqual(objList[0].members[24], 'M24');
      assert.strictEqual(objList[0].members[25], 'M25');
      assert.strictEqual(objList[0].members[26], 'M26');
      assert.strictEqual(objList[0].members[27], 'M27');
      assert.strictEqual(objList[0].members[28], 'M28');
      assert.strictEqual(objList[0].members[29], 'M29');
      assert.strictEqual(objList[0].members[30], 'M30');
      assert.strictEqual(objList[0].members[31], 'M31');
      assert.strictEqual(objList[0].members[32], 'M32');
      assert.strictEqual(objList[0].members[33], 'M33');
      assert.strictEqual(objList[0].members[34], 'M34');
      assert.strictEqual(objList[0].members[35], 'M35');
      assert.strictEqual(objList[0].members[36], 'M36');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0169
  * @tc.name c_enum_0169
  * @tc.desc h2dts parseEnum：扩充-矩阵：37 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0169', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M34 = 34,
    M35 = 35,
    M36 = 36
} En37F1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En37F1');
      assert.strictEqual(objList[0].alias, 'En37F1');
      assert.strictEqual(objList[0].members.length, 37);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
      assert.strictEqual(objList[0].members[6], 'M6=6');
      assert.strictEqual(objList[0].members[7], 'M7=7');
      assert.strictEqual(objList[0].members[8], 'M8=8');
      assert.strictEqual(objList[0].members[9], 'M9=9');
      assert.strictEqual(objList[0].members[10], 'M10=10');
      assert.strictEqual(objList[0].members[11], 'M11=11');
      assert.strictEqual(objList[0].members[12], 'M12=12');
      assert.strictEqual(objList[0].members[13], 'M13=13');
      assert.strictEqual(objList[0].members[14], 'M14=14');
      assert.strictEqual(objList[0].members[15], 'M15=15');
      assert.strictEqual(objList[0].members[16], 'M16=16');
      assert.strictEqual(objList[0].members[17], 'M17=17');
      assert.strictEqual(objList[0].members[18], 'M18=18');
      assert.strictEqual(objList[0].members[19], 'M19=19');
      assert.strictEqual(objList[0].members[20], 'M20=20');
      assert.strictEqual(objList[0].members[21], 'M21=21');
      assert.strictEqual(objList[0].members[22], 'M22=22');
      assert.strictEqual(objList[0].members[23], 'M23=23');
      assert.strictEqual(objList[0].members[24], 'M24=24');
      assert.strictEqual(objList[0].members[25], 'M25=25');
      assert.strictEqual(objList[0].members[26], 'M26=26');
      assert.strictEqual(objList[0].members[27], 'M27=27');
      assert.strictEqual(objList[0].members[28], 'M28=28');
      assert.strictEqual(objList[0].members[29], 'M29=29');
      assert.strictEqual(objList[0].members[30], 'M30=30');
      assert.strictEqual(objList[0].members[31], 'M31=31');
      assert.strictEqual(objList[0].members[32], 'M32=32');
      assert.strictEqual(objList[0].members[33], 'M33=33');
      assert.strictEqual(objList[0].members[34], 'M34=34');
      assert.strictEqual(objList[0].members[35], 'M35=35');
      assert.strictEqual(objList[0].members[36], 'M36=36');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0170
  * @tc.name c_enum_0170
  * @tc.desc h2dts parseEnum：扩充-矩阵：37 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0170', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M31 = "v31",
    M32 = "v32",
    M33 = "v33",
    M34 = "v34",
    M35 = "v35",
    M36 = "v36"
} En37F2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En37F2');
      assert.strictEqual(objList[0].alias, 'En37F2');
      assert.strictEqual(objList[0].members.length, 37);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
      assert.strictEqual(objList[0].members[6], 'M6="v6"');
      assert.strictEqual(objList[0].members[7], 'M7="v7"');
      assert.strictEqual(objList[0].members[8], 'M8="v8"');
      assert.strictEqual(objList[0].members[9], 'M9="v9"');
      assert.strictEqual(objList[0].members[10], 'M10="v10"');
      assert.strictEqual(objList[0].members[11], 'M11="v11"');
      assert.strictEqual(objList[0].members[12], 'M12="v12"');
      assert.strictEqual(objList[0].members[13], 'M13="v13"');
      assert.strictEqual(objList[0].members[14], 'M14="v14"');
      assert.strictEqual(objList[0].members[15], 'M15="v15"');
      assert.strictEqual(objList[0].members[16], 'M16="v16"');
      assert.strictEqual(objList[0].members[17], 'M17="v17"');
      assert.strictEqual(objList[0].members[18], 'M18="v18"');
      assert.strictEqual(objList[0].members[19], 'M19="v19"');
      assert.strictEqual(objList[0].members[20], 'M20="v20"');
      assert.strictEqual(objList[0].members[21], 'M21="v21"');
      assert.strictEqual(objList[0].members[22], 'M22="v22"');
      assert.strictEqual(objList[0].members[23], 'M23="v23"');
      assert.strictEqual(objList[0].members[24], 'M24="v24"');
      assert.strictEqual(objList[0].members[25], 'M25="v25"');
      assert.strictEqual(objList[0].members[26], 'M26="v26"');
      assert.strictEqual(objList[0].members[27], 'M27="v27"');
      assert.strictEqual(objList[0].members[28], 'M28="v28"');
      assert.strictEqual(objList[0].members[29], 'M29="v29"');
      assert.strictEqual(objList[0].members[30], 'M30="v30"');
      assert.strictEqual(objList[0].members[31], 'M31="v31"');
      assert.strictEqual(objList[0].members[32], 'M32="v32"');
      assert.strictEqual(objList[0].members[33], 'M33="v33"');
      assert.strictEqual(objList[0].members[34], 'M34="v34"');
      assert.strictEqual(objList[0].members[35], 'M35="v35"');
      assert.strictEqual(objList[0].members[36], 'M36="v36"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0171
  * @tc.name c_enum_0171
  * @tc.desc h2dts parseEnum：扩充-矩阵：37 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0171', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7,
    M7 = 0x8,
    M8 = 0x9,
    M9 = 0xA,
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A,
    M26 = 0x1B,
    M27 = 0x1C,
    M28 = 0x1D,
    M29 = 0x1E,
    M30 = 0x1F,
    M31 = 0x20,
    M32 = 0x21,
    M33 = 0x22,
    M34 = 0x23,
    M35 = 0x24,
    M36 = 0x25
} En37F3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En37F3');
      assert.strictEqual(objList[0].alias, 'En37F3');
      assert.strictEqual(objList[0].members.length, 37);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
      assert.strictEqual(objList[0].members[7], 'M7=0x8');
      assert.strictEqual(objList[0].members[8], 'M8=0x9');
      assert.strictEqual(objList[0].members[9], 'M9=0xA');
      assert.strictEqual(objList[0].members[10], 'M10=0xB');
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
      assert.strictEqual(objList[0].members[26], 'M26=0x1B');
      assert.strictEqual(objList[0].members[27], 'M27=0x1C');
      assert.strictEqual(objList[0].members[28], 'M28=0x1D');
      assert.strictEqual(objList[0].members[29], 'M29=0x1E');
      assert.strictEqual(objList[0].members[30], 'M30=0x1F');
      assert.strictEqual(objList[0].members[31], 'M31=0x20');
      assert.strictEqual(objList[0].members[32], 'M32=0x21');
      assert.strictEqual(objList[0].members[33], 'M33=0x22');
      assert.strictEqual(objList[0].members[34], 'M34=0x23');
      assert.strictEqual(objList[0].members[35], 'M35=0x24');
      assert.strictEqual(objList[0].members[36], 'M36=0x25');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0172
  * @tc.name c_enum_0172
  * @tc.desc h2dts parseEnum：扩充-矩阵：38 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0172', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M34,
    M35,
    M36,
    M37
} En38F0;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En38F0');
      assert.strictEqual(objList[0].alias, 'En38F0');
      assert.strictEqual(objList[0].members.length, 38);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
      assert.strictEqual(objList[0].members[7], 'M7');
      assert.strictEqual(objList[0].members[8], 'M8');
      assert.strictEqual(objList[0].members[9], 'M9');
      assert.strictEqual(objList[0].members[10], 'M10');
      assert.strictEqual(objList[0].members[11], 'M11');
      assert.strictEqual(objList[0].members[12], 'M12');
      assert.strictEqual(objList[0].members[13], 'M13');
      assert.strictEqual(objList[0].members[14], 'M14');
      assert.strictEqual(objList[0].members[15], 'M15');
      assert.strictEqual(objList[0].members[16], 'M16');
      assert.strictEqual(objList[0].members[17], 'M17');
      assert.strictEqual(objList[0].members[18], 'M18');
      assert.strictEqual(objList[0].members[19], 'M19');
      assert.strictEqual(objList[0].members[20], 'M20');
      assert.strictEqual(objList[0].members[21], 'M21');
      assert.strictEqual(objList[0].members[22], 'M22');
      assert.strictEqual(objList[0].members[23], 'M23');
      assert.strictEqual(objList[0].members[24], 'M24');
      assert.strictEqual(objList[0].members[25], 'M25');
      assert.strictEqual(objList[0].members[26], 'M26');
      assert.strictEqual(objList[0].members[27], 'M27');
      assert.strictEqual(objList[0].members[28], 'M28');
      assert.strictEqual(objList[0].members[29], 'M29');
      assert.strictEqual(objList[0].members[30], 'M30');
      assert.strictEqual(objList[0].members[31], 'M31');
      assert.strictEqual(objList[0].members[32], 'M32');
      assert.strictEqual(objList[0].members[33], 'M33');
      assert.strictEqual(objList[0].members[34], 'M34');
      assert.strictEqual(objList[0].members[35], 'M35');
      assert.strictEqual(objList[0].members[36], 'M36');
      assert.strictEqual(objList[0].members[37], 'M37');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0173
  * @tc.name c_enum_0173
  * @tc.desc h2dts parseEnum：扩充-矩阵：38 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0173', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M34 = 34,
    M35 = 35,
    M36 = 36,
    M37 = 37
} En38F1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En38F1');
      assert.strictEqual(objList[0].alias, 'En38F1');
      assert.strictEqual(objList[0].members.length, 38);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
      assert.strictEqual(objList[0].members[6], 'M6=6');
      assert.strictEqual(objList[0].members[7], 'M7=7');
      assert.strictEqual(objList[0].members[8], 'M8=8');
      assert.strictEqual(objList[0].members[9], 'M9=9');
      assert.strictEqual(objList[0].members[10], 'M10=10');
      assert.strictEqual(objList[0].members[11], 'M11=11');
      assert.strictEqual(objList[0].members[12], 'M12=12');
      assert.strictEqual(objList[0].members[13], 'M13=13');
      assert.strictEqual(objList[0].members[14], 'M14=14');
      assert.strictEqual(objList[0].members[15], 'M15=15');
      assert.strictEqual(objList[0].members[16], 'M16=16');
      assert.strictEqual(objList[0].members[17], 'M17=17');
      assert.strictEqual(objList[0].members[18], 'M18=18');
      assert.strictEqual(objList[0].members[19], 'M19=19');
      assert.strictEqual(objList[0].members[20], 'M20=20');
      assert.strictEqual(objList[0].members[21], 'M21=21');
      assert.strictEqual(objList[0].members[22], 'M22=22');
      assert.strictEqual(objList[0].members[23], 'M23=23');
      assert.strictEqual(objList[0].members[24], 'M24=24');
      assert.strictEqual(objList[0].members[25], 'M25=25');
      assert.strictEqual(objList[0].members[26], 'M26=26');
      assert.strictEqual(objList[0].members[27], 'M27=27');
      assert.strictEqual(objList[0].members[28], 'M28=28');
      assert.strictEqual(objList[0].members[29], 'M29=29');
      assert.strictEqual(objList[0].members[30], 'M30=30');
      assert.strictEqual(objList[0].members[31], 'M31=31');
      assert.strictEqual(objList[0].members[32], 'M32=32');
      assert.strictEqual(objList[0].members[33], 'M33=33');
      assert.strictEqual(objList[0].members[34], 'M34=34');
      assert.strictEqual(objList[0].members[35], 'M35=35');
      assert.strictEqual(objList[0].members[36], 'M36=36');
      assert.strictEqual(objList[0].members[37], 'M37=37');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0174
  * @tc.name c_enum_0174
  * @tc.desc h2dts parseEnum：扩充-矩阵：38 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0174', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M31 = "v31",
    M32 = "v32",
    M33 = "v33",
    M34 = "v34",
    M35 = "v35",
    M36 = "v36",
    M37 = "v37"
} En38F2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En38F2');
      assert.strictEqual(objList[0].alias, 'En38F2');
      assert.strictEqual(objList[0].members.length, 38);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
      assert.strictEqual(objList[0].members[6], 'M6="v6"');
      assert.strictEqual(objList[0].members[7], 'M7="v7"');
      assert.strictEqual(objList[0].members[8], 'M8="v8"');
      assert.strictEqual(objList[0].members[9], 'M9="v9"');
      assert.strictEqual(objList[0].members[10], 'M10="v10"');
      assert.strictEqual(objList[0].members[11], 'M11="v11"');
      assert.strictEqual(objList[0].members[12], 'M12="v12"');
      assert.strictEqual(objList[0].members[13], 'M13="v13"');
      assert.strictEqual(objList[0].members[14], 'M14="v14"');
      assert.strictEqual(objList[0].members[15], 'M15="v15"');
      assert.strictEqual(objList[0].members[16], 'M16="v16"');
      assert.strictEqual(objList[0].members[17], 'M17="v17"');
      assert.strictEqual(objList[0].members[18], 'M18="v18"');
      assert.strictEqual(objList[0].members[19], 'M19="v19"');
      assert.strictEqual(objList[0].members[20], 'M20="v20"');
      assert.strictEqual(objList[0].members[21], 'M21="v21"');
      assert.strictEqual(objList[0].members[22], 'M22="v22"');
      assert.strictEqual(objList[0].members[23], 'M23="v23"');
      assert.strictEqual(objList[0].members[24], 'M24="v24"');
      assert.strictEqual(objList[0].members[25], 'M25="v25"');
      assert.strictEqual(objList[0].members[26], 'M26="v26"');
      assert.strictEqual(objList[0].members[27], 'M27="v27"');
      assert.strictEqual(objList[0].members[28], 'M28="v28"');
      assert.strictEqual(objList[0].members[29], 'M29="v29"');
      assert.strictEqual(objList[0].members[30], 'M30="v30"');
      assert.strictEqual(objList[0].members[31], 'M31="v31"');
      assert.strictEqual(objList[0].members[32], 'M32="v32"');
      assert.strictEqual(objList[0].members[33], 'M33="v33"');
      assert.strictEqual(objList[0].members[34], 'M34="v34"');
      assert.strictEqual(objList[0].members[35], 'M35="v35"');
      assert.strictEqual(objList[0].members[36], 'M36="v36"');
      assert.strictEqual(objList[0].members[37], 'M37="v37"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0175
  * @tc.name c_enum_0175
  * @tc.desc h2dts parseEnum：扩充-矩阵：38 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0175', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7,
    M7 = 0x8,
    M8 = 0x9,
    M9 = 0xA,
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A,
    M26 = 0x1B,
    M27 = 0x1C,
    M28 = 0x1D,
    M29 = 0x1E,
    M30 = 0x1F,
    M31 = 0x20,
    M32 = 0x21,
    M33 = 0x22,
    M34 = 0x23,
    M35 = 0x24,
    M36 = 0x25,
    M37 = 0x26
} En38F3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En38F3');
      assert.strictEqual(objList[0].alias, 'En38F3');
      assert.strictEqual(objList[0].members.length, 38);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
      assert.strictEqual(objList[0].members[7], 'M7=0x8');
      assert.strictEqual(objList[0].members[8], 'M8=0x9');
      assert.strictEqual(objList[0].members[9], 'M9=0xA');
      assert.strictEqual(objList[0].members[10], 'M10=0xB');
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
      assert.strictEqual(objList[0].members[26], 'M26=0x1B');
      assert.strictEqual(objList[0].members[27], 'M27=0x1C');
      assert.strictEqual(objList[0].members[28], 'M28=0x1D');
      assert.strictEqual(objList[0].members[29], 'M29=0x1E');
      assert.strictEqual(objList[0].members[30], 'M30=0x1F');
      assert.strictEqual(objList[0].members[31], 'M31=0x20');
      assert.strictEqual(objList[0].members[32], 'M32=0x21');
      assert.strictEqual(objList[0].members[33], 'M33=0x22');
      assert.strictEqual(objList[0].members[34], 'M34=0x23');
      assert.strictEqual(objList[0].members[35], 'M35=0x24');
      assert.strictEqual(objList[0].members[36], 'M36=0x25');
      assert.strictEqual(objList[0].members[37], 'M37=0x26');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0176
  * @tc.name c_enum_0176
  * @tc.desc h2dts parseEnum：扩充-矩阵：39 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0176', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M34,
    M35,
    M36,
    M37,
    M38
} En39F0;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En39F0');
      assert.strictEqual(objList[0].alias, 'En39F0');
      assert.strictEqual(objList[0].members.length, 39);
      assert.strictEqual(objList[0].members[0], 'M0');
      assert.strictEqual(objList[0].members[1], 'M1');
      assert.strictEqual(objList[0].members[2], 'M2');
      assert.strictEqual(objList[0].members[3], 'M3');
      assert.strictEqual(objList[0].members[4], 'M4');
      assert.strictEqual(objList[0].members[5], 'M5');
      assert.strictEqual(objList[0].members[6], 'M6');
      assert.strictEqual(objList[0].members[7], 'M7');
      assert.strictEqual(objList[0].members[8], 'M8');
      assert.strictEqual(objList[0].members[9], 'M9');
      assert.strictEqual(objList[0].members[10], 'M10');
      assert.strictEqual(objList[0].members[11], 'M11');
      assert.strictEqual(objList[0].members[12], 'M12');
      assert.strictEqual(objList[0].members[13], 'M13');
      assert.strictEqual(objList[0].members[14], 'M14');
      assert.strictEqual(objList[0].members[15], 'M15');
      assert.strictEqual(objList[0].members[16], 'M16');
      assert.strictEqual(objList[0].members[17], 'M17');
      assert.strictEqual(objList[0].members[18], 'M18');
      assert.strictEqual(objList[0].members[19], 'M19');
      assert.strictEqual(objList[0].members[20], 'M20');
      assert.strictEqual(objList[0].members[21], 'M21');
      assert.strictEqual(objList[0].members[22], 'M22');
      assert.strictEqual(objList[0].members[23], 'M23');
      assert.strictEqual(objList[0].members[24], 'M24');
      assert.strictEqual(objList[0].members[25], 'M25');
      assert.strictEqual(objList[0].members[26], 'M26');
      assert.strictEqual(objList[0].members[27], 'M27');
      assert.strictEqual(objList[0].members[28], 'M28');
      assert.strictEqual(objList[0].members[29], 'M29');
      assert.strictEqual(objList[0].members[30], 'M30');
      assert.strictEqual(objList[0].members[31], 'M31');
      assert.strictEqual(objList[0].members[32], 'M32');
      assert.strictEqual(objList[0].members[33], 'M33');
      assert.strictEqual(objList[0].members[34], 'M34');
      assert.strictEqual(objList[0].members[35], 'M35');
      assert.strictEqual(objList[0].members[36], 'M36');
      assert.strictEqual(objList[0].members[37], 'M37');
      assert.strictEqual(objList[0].members[38], 'M38');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0177
  * @tc.name c_enum_0177
  * @tc.desc h2dts parseEnum：扩充-矩阵：39 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0177', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M34 = 34,
    M35 = 35,
    M36 = 36,
    M37 = 37,
    M38 = 38
} En39F1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En39F1');
      assert.strictEqual(objList[0].alias, 'En39F1');
      assert.strictEqual(objList[0].members.length, 39);
      assert.strictEqual(objList[0].members[0], 'M0=0');
      assert.strictEqual(objList[0].members[1], 'M1=1');
      assert.strictEqual(objList[0].members[2], 'M2=2');
      assert.strictEqual(objList[0].members[3], 'M3=3');
      assert.strictEqual(objList[0].members[4], 'M4=4');
      assert.strictEqual(objList[0].members[5], 'M5=5');
      assert.strictEqual(objList[0].members[6], 'M6=6');
      assert.strictEqual(objList[0].members[7], 'M7=7');
      assert.strictEqual(objList[0].members[8], 'M8=8');
      assert.strictEqual(objList[0].members[9], 'M9=9');
      assert.strictEqual(objList[0].members[10], 'M10=10');
      assert.strictEqual(objList[0].members[11], 'M11=11');
      assert.strictEqual(objList[0].members[12], 'M12=12');
      assert.strictEqual(objList[0].members[13], 'M13=13');
      assert.strictEqual(objList[0].members[14], 'M14=14');
      assert.strictEqual(objList[0].members[15], 'M15=15');
      assert.strictEqual(objList[0].members[16], 'M16=16');
      assert.strictEqual(objList[0].members[17], 'M17=17');
      assert.strictEqual(objList[0].members[18], 'M18=18');
      assert.strictEqual(objList[0].members[19], 'M19=19');
      assert.strictEqual(objList[0].members[20], 'M20=20');
      assert.strictEqual(objList[0].members[21], 'M21=21');
      assert.strictEqual(objList[0].members[22], 'M22=22');
      assert.strictEqual(objList[0].members[23], 'M23=23');
      assert.strictEqual(objList[0].members[24], 'M24=24');
      assert.strictEqual(objList[0].members[25], 'M25=25');
      assert.strictEqual(objList[0].members[26], 'M26=26');
      assert.strictEqual(objList[0].members[27], 'M27=27');
      assert.strictEqual(objList[0].members[28], 'M28=28');
      assert.strictEqual(objList[0].members[29], 'M29=29');
      assert.strictEqual(objList[0].members[30], 'M30=30');
      assert.strictEqual(objList[0].members[31], 'M31=31');
      assert.strictEqual(objList[0].members[32], 'M32=32');
      assert.strictEqual(objList[0].members[33], 'M33=33');
      assert.strictEqual(objList[0].members[34], 'M34=34');
      assert.strictEqual(objList[0].members[35], 'M35=35');
      assert.strictEqual(objList[0].members[36], 'M36=36');
      assert.strictEqual(objList[0].members[37], 'M37=37');
      assert.strictEqual(objList[0].members[38], 'M38=38');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0178
  * @tc.name c_enum_0178
  * @tc.desc h2dts parseEnum：扩充-矩阵：39 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0178', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
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
    M31 = "v31",
    M32 = "v32",
    M33 = "v33",
    M34 = "v34",
    M35 = "v35",
    M36 = "v36",
    M37 = "v37",
    M38 = "v38"
} En39F2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En39F2');
      assert.strictEqual(objList[0].alias, 'En39F2');
      assert.strictEqual(objList[0].members.length, 39);
      assert.strictEqual(objList[0].members[0], 'M0="v0"');
      assert.strictEqual(objList[0].members[1], 'M1="v1"');
      assert.strictEqual(objList[0].members[2], 'M2="v2"');
      assert.strictEqual(objList[0].members[3], 'M3="v3"');
      assert.strictEqual(objList[0].members[4], 'M4="v4"');
      assert.strictEqual(objList[0].members[5], 'M5="v5"');
      assert.strictEqual(objList[0].members[6], 'M6="v6"');
      assert.strictEqual(objList[0].members[7], 'M7="v7"');
      assert.strictEqual(objList[0].members[8], 'M8="v8"');
      assert.strictEqual(objList[0].members[9], 'M9="v9"');
      assert.strictEqual(objList[0].members[10], 'M10="v10"');
      assert.strictEqual(objList[0].members[11], 'M11="v11"');
      assert.strictEqual(objList[0].members[12], 'M12="v12"');
      assert.strictEqual(objList[0].members[13], 'M13="v13"');
      assert.strictEqual(objList[0].members[14], 'M14="v14"');
      assert.strictEqual(objList[0].members[15], 'M15="v15"');
      assert.strictEqual(objList[0].members[16], 'M16="v16"');
      assert.strictEqual(objList[0].members[17], 'M17="v17"');
      assert.strictEqual(objList[0].members[18], 'M18="v18"');
      assert.strictEqual(objList[0].members[19], 'M19="v19"');
      assert.strictEqual(objList[0].members[20], 'M20="v20"');
      assert.strictEqual(objList[0].members[21], 'M21="v21"');
      assert.strictEqual(objList[0].members[22], 'M22="v22"');
      assert.strictEqual(objList[0].members[23], 'M23="v23"');
      assert.strictEqual(objList[0].members[24], 'M24="v24"');
      assert.strictEqual(objList[0].members[25], 'M25="v25"');
      assert.strictEqual(objList[0].members[26], 'M26="v26"');
      assert.strictEqual(objList[0].members[27], 'M27="v27"');
      assert.strictEqual(objList[0].members[28], 'M28="v28"');
      assert.strictEqual(objList[0].members[29], 'M29="v29"');
      assert.strictEqual(objList[0].members[30], 'M30="v30"');
      assert.strictEqual(objList[0].members[31], 'M31="v31"');
      assert.strictEqual(objList[0].members[32], 'M32="v32"');
      assert.strictEqual(objList[0].members[33], 'M33="v33"');
      assert.strictEqual(objList[0].members[34], 'M34="v34"');
      assert.strictEqual(objList[0].members[35], 'M35="v35"');
      assert.strictEqual(objList[0].members[36], 'M36="v36"');
      assert.strictEqual(objList[0].members[37], 'M37="v37"');
      assert.strictEqual(objList[0].members[38], 'M38="v38"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0179
  * @tc.name c_enum_0179
  * @tc.desc h2dts parseEnum：扩充-矩阵：39 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0179', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    M0 = 0x1,
    M1 = 0x2,
    M2 = 0x3,
    M3 = 0x4,
    M4 = 0x5,
    M5 = 0x6,
    M6 = 0x7,
    M7 = 0x8,
    M8 = 0x9,
    M9 = 0xA,
    M10 = 0xB,
    M11 = 0xC,
    M12 = 0xD,
    M13 = 0xE,
    M14 = 0xF,
    M15 = 0x10,
    M16 = 0x11,
    M17 = 0x12,
    M18 = 0x13,
    M19 = 0x14,
    M20 = 0x15,
    M21 = 0x16,
    M22 = 0x17,
    M23 = 0x18,
    M24 = 0x19,
    M25 = 0x1A,
    M26 = 0x1B,
    M27 = 0x1C,
    M28 = 0x1D,
    M29 = 0x1E,
    M30 = 0x1F,
    M31 = 0x20,
    M32 = 0x21,
    M33 = 0x22,
    M34 = 0x23,
    M35 = 0x24,
    M36 = 0x25,
    M37 = 0x26,
    M38 = 0x27
} En39F3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En39F3');
      assert.strictEqual(objList[0].alias, 'En39F3');
      assert.strictEqual(objList[0].members.length, 39);
      assert.strictEqual(objList[0].members[0], 'M0=0x1');
      assert.strictEqual(objList[0].members[1], 'M1=0x2');
      assert.strictEqual(objList[0].members[2], 'M2=0x3');
      assert.strictEqual(objList[0].members[3], 'M3=0x4');
      assert.strictEqual(objList[0].members[4], 'M4=0x5');
      assert.strictEqual(objList[0].members[5], 'M5=0x6');
      assert.strictEqual(objList[0].members[6], 'M6=0x7');
      assert.strictEqual(objList[0].members[7], 'M7=0x8');
      assert.strictEqual(objList[0].members[8], 'M8=0x9');
      assert.strictEqual(objList[0].members[9], 'M9=0xA');
      assert.strictEqual(objList[0].members[10], 'M10=0xB');
      assert.strictEqual(objList[0].members[11], 'M11=0xC');
      assert.strictEqual(objList[0].members[12], 'M12=0xD');
      assert.strictEqual(objList[0].members[13], 'M13=0xE');
      assert.strictEqual(objList[0].members[14], 'M14=0xF');
      assert.strictEqual(objList[0].members[15], 'M15=0x10');
      assert.strictEqual(objList[0].members[16], 'M16=0x11');
      assert.strictEqual(objList[0].members[17], 'M17=0x12');
      assert.strictEqual(objList[0].members[18], 'M18=0x13');
      assert.strictEqual(objList[0].members[19], 'M19=0x14');
      assert.strictEqual(objList[0].members[20], 'M20=0x15');
      assert.strictEqual(objList[0].members[21], 'M21=0x16');
      assert.strictEqual(objList[0].members[22], 'M22=0x17');
      assert.strictEqual(objList[0].members[23], 'M23=0x18');
      assert.strictEqual(objList[0].members[24], 'M24=0x19');
      assert.strictEqual(objList[0].members[25], 'M25=0x1A');
      assert.strictEqual(objList[0].members[26], 'M26=0x1B');
      assert.strictEqual(objList[0].members[27], 'M27=0x1C');
      assert.strictEqual(objList[0].members[28], 'M28=0x1D');
      assert.strictEqual(objList[0].members[29], 'M29=0x1E');
      assert.strictEqual(objList[0].members[30], 'M30=0x1F');
      assert.strictEqual(objList[0].members[31], 'M31=0x20');
      assert.strictEqual(objList[0].members[32], 'M32=0x21');
      assert.strictEqual(objList[0].members[33], 'M33=0x22');
      assert.strictEqual(objList[0].members[34], 'M34=0x23');
      assert.strictEqual(objList[0].members[35], 'M35=0x24');
      assert.strictEqual(objList[0].members[36], 'M36=0x25');
      assert.strictEqual(objList[0].members[37], 'M37=0x26');
      assert.strictEqual(objList[0].members[38], 'M38=0x27');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0179 执行异常: ${String(err)}`);
    }
  });

});
