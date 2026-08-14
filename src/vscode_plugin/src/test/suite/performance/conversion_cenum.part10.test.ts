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
  vscode.window.showInformationMessage('Start Performance_C_Enum_Suite part10.');

  /**
  * @tc.number c_enum_0211
  * @tc.name c_enum_0211
  * @tc.desc h2dts parseEnum：扩充-矩阵：47 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0211', () => {
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
    M38 = 0x27,
    M39 = 0x28,
    M40 = 0x29,
    M41 = 0x2A,
    M42 = 0x2B,
    M43 = 0x2C,
    M44 = 0x2D,
    M45 = 0x2E,
    M46 = 0x2F
} En47F3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En47F3');
      assert.strictEqual(objList[0].alias, 'En47F3');
      assert.strictEqual(objList[0].members.length, 47);
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
      assert.strictEqual(objList[0].members[39], 'M39=0x28');
      assert.strictEqual(objList[0].members[40], 'M40=0x29');
      assert.strictEqual(objList[0].members[41], 'M41=0x2A');
      assert.strictEqual(objList[0].members[42], 'M42=0x2B');
      assert.strictEqual(objList[0].members[43], 'M43=0x2C');
      assert.strictEqual(objList[0].members[44], 'M44=0x2D');
      assert.strictEqual(objList[0].members[45], 'M45=0x2E');
      assert.strictEqual(objList[0].members[46], 'M46=0x2F');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0212
  * @tc.name c_enum_0212
  * @tc.desc h2dts parseEnum：扩充-矩阵：48 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0212', () => {
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
    M38,
    M39,
    M40,
    M41,
    M42,
    M43,
    M44,
    M45,
    M46,
    M47
} En48F0;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En48F0');
      assert.strictEqual(objList[0].alias, 'En48F0');
      assert.strictEqual(objList[0].members.length, 48);
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
      assert.strictEqual(objList[0].members[39], 'M39');
      assert.strictEqual(objList[0].members[40], 'M40');
      assert.strictEqual(objList[0].members[41], 'M41');
      assert.strictEqual(objList[0].members[42], 'M42');
      assert.strictEqual(objList[0].members[43], 'M43');
      assert.strictEqual(objList[0].members[44], 'M44');
      assert.strictEqual(objList[0].members[45], 'M45');
      assert.strictEqual(objList[0].members[46], 'M46');
      assert.strictEqual(objList[0].members[47], 'M47');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0213
  * @tc.name c_enum_0213
  * @tc.desc h2dts parseEnum：扩充-矩阵：48 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0213', () => {
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
    M38 = 38,
    M39 = 39,
    M40 = 40,
    M41 = 41,
    M42 = 42,
    M43 = 43,
    M44 = 44,
    M45 = 45,
    M46 = 46,
    M47 = 47
} En48F1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En48F1');
      assert.strictEqual(objList[0].alias, 'En48F1');
      assert.strictEqual(objList[0].members.length, 48);
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
      assert.strictEqual(objList[0].members[39], 'M39=39');
      assert.strictEqual(objList[0].members[40], 'M40=40');
      assert.strictEqual(objList[0].members[41], 'M41=41');
      assert.strictEqual(objList[0].members[42], 'M42=42');
      assert.strictEqual(objList[0].members[43], 'M43=43');
      assert.strictEqual(objList[0].members[44], 'M44=44');
      assert.strictEqual(objList[0].members[45], 'M45=45');
      assert.strictEqual(objList[0].members[46], 'M46=46');
      assert.strictEqual(objList[0].members[47], 'M47=47');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0214
  * @tc.name c_enum_0214
  * @tc.desc h2dts parseEnum：扩充-矩阵：48 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0214', () => {
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
    M38 = "v38",
    M39 = "v39",
    M40 = "v40",
    M41 = "v41",
    M42 = "v42",
    M43 = "v43",
    M44 = "v44",
    M45 = "v45",
    M46 = "v46",
    M47 = "v47"
} En48F2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En48F2');
      assert.strictEqual(objList[0].alias, 'En48F2');
      assert.strictEqual(objList[0].members.length, 48);
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
      assert.strictEqual(objList[0].members[39], 'M39="v39"');
      assert.strictEqual(objList[0].members[40], 'M40="v40"');
      assert.strictEqual(objList[0].members[41], 'M41="v41"');
      assert.strictEqual(objList[0].members[42], 'M42="v42"');
      assert.strictEqual(objList[0].members[43], 'M43="v43"');
      assert.strictEqual(objList[0].members[44], 'M44="v44"');
      assert.strictEqual(objList[0].members[45], 'M45="v45"');
      assert.strictEqual(objList[0].members[46], 'M46="v46"');
      assert.strictEqual(objList[0].members[47], 'M47="v47"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0215
  * @tc.name c_enum_0215
  * @tc.desc h2dts parseEnum：扩充-矩阵：48 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0215', () => {
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
    M38 = 0x27,
    M39 = 0x28,
    M40 = 0x29,
    M41 = 0x2A,
    M42 = 0x2B,
    M43 = 0x2C,
    M44 = 0x2D,
    M45 = 0x2E,
    M46 = 0x2F,
    M47 = 0x30
} En48F3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En48F3');
      assert.strictEqual(objList[0].alias, 'En48F3');
      assert.strictEqual(objList[0].members.length, 48);
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
      assert.strictEqual(objList[0].members[39], 'M39=0x28');
      assert.strictEqual(objList[0].members[40], 'M40=0x29');
      assert.strictEqual(objList[0].members[41], 'M41=0x2A');
      assert.strictEqual(objList[0].members[42], 'M42=0x2B');
      assert.strictEqual(objList[0].members[43], 'M43=0x2C');
      assert.strictEqual(objList[0].members[44], 'M44=0x2D');
      assert.strictEqual(objList[0].members[45], 'M45=0x2E');
      assert.strictEqual(objList[0].members[46], 'M46=0x2F');
      assert.strictEqual(objList[0].members[47], 'M47=0x30');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0216
  * @tc.name c_enum_0216
  * @tc.desc h2dts parseEnum：扩充-矩阵：49 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0216', () => {
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
    M38,
    M39,
    M40,
    M41,
    M42,
    M43,
    M44,
    M45,
    M46,
    M47,
    M48
} En49F0;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En49F0');
      assert.strictEqual(objList[0].alias, 'En49F0');
      assert.strictEqual(objList[0].members.length, 49);
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
      assert.strictEqual(objList[0].members[39], 'M39');
      assert.strictEqual(objList[0].members[40], 'M40');
      assert.strictEqual(objList[0].members[41], 'M41');
      assert.strictEqual(objList[0].members[42], 'M42');
      assert.strictEqual(objList[0].members[43], 'M43');
      assert.strictEqual(objList[0].members[44], 'M44');
      assert.strictEqual(objList[0].members[45], 'M45');
      assert.strictEqual(objList[0].members[46], 'M46');
      assert.strictEqual(objList[0].members[47], 'M47');
      assert.strictEqual(objList[0].members[48], 'M48');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0217
  * @tc.name c_enum_0217
  * @tc.desc h2dts parseEnum：扩充-矩阵：49 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0217', () => {
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
    M38 = 38,
    M39 = 39,
    M40 = 40,
    M41 = 41,
    M42 = 42,
    M43 = 43,
    M44 = 44,
    M45 = 45,
    M46 = 46,
    M47 = 47,
    M48 = 48
} En49F1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En49F1');
      assert.strictEqual(objList[0].alias, 'En49F1');
      assert.strictEqual(objList[0].members.length, 49);
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
      assert.strictEqual(objList[0].members[39], 'M39=39');
      assert.strictEqual(objList[0].members[40], 'M40=40');
      assert.strictEqual(objList[0].members[41], 'M41=41');
      assert.strictEqual(objList[0].members[42], 'M42=42');
      assert.strictEqual(objList[0].members[43], 'M43=43');
      assert.strictEqual(objList[0].members[44], 'M44=44');
      assert.strictEqual(objList[0].members[45], 'M45=45');
      assert.strictEqual(objList[0].members[46], 'M46=46');
      assert.strictEqual(objList[0].members[47], 'M47=47');
      assert.strictEqual(objList[0].members[48], 'M48=48');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0217 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0218
  * @tc.name c_enum_0218
  * @tc.desc h2dts parseEnum：扩充-矩阵：49 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0218', () => {
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
    M38 = "v38",
    M39 = "v39",
    M40 = "v40",
    M41 = "v41",
    M42 = "v42",
    M43 = "v43",
    M44 = "v44",
    M45 = "v45",
    M46 = "v46",
    M47 = "v47",
    M48 = "v48"
} En49F2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En49F2');
      assert.strictEqual(objList[0].alias, 'En49F2');
      assert.strictEqual(objList[0].members.length, 49);
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
      assert.strictEqual(objList[0].members[39], 'M39="v39"');
      assert.strictEqual(objList[0].members[40], 'M40="v40"');
      assert.strictEqual(objList[0].members[41], 'M41="v41"');
      assert.strictEqual(objList[0].members[42], 'M42="v42"');
      assert.strictEqual(objList[0].members[43], 'M43="v43"');
      assert.strictEqual(objList[0].members[44], 'M44="v44"');
      assert.strictEqual(objList[0].members[45], 'M45="v45"');
      assert.strictEqual(objList[0].members[46], 'M46="v46"');
      assert.strictEqual(objList[0].members[47], 'M47="v47"');
      assert.strictEqual(objList[0].members[48], 'M48="v48"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0218 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0219
  * @tc.name c_enum_0219
  * @tc.desc h2dts parseEnum：扩充-矩阵：49 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0219', () => {
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
    M38 = 0x27,
    M39 = 0x28,
    M40 = 0x29,
    M41 = 0x2A,
    M42 = 0x2B,
    M43 = 0x2C,
    M44 = 0x2D,
    M45 = 0x2E,
    M46 = 0x2F,
    M47 = 0x30,
    M48 = 0x31
} En49F3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En49F3');
      assert.strictEqual(objList[0].alias, 'En49F3');
      assert.strictEqual(objList[0].members.length, 49);
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
      assert.strictEqual(objList[0].members[39], 'M39=0x28');
      assert.strictEqual(objList[0].members[40], 'M40=0x29');
      assert.strictEqual(objList[0].members[41], 'M41=0x2A');
      assert.strictEqual(objList[0].members[42], 'M42=0x2B');
      assert.strictEqual(objList[0].members[43], 'M43=0x2C');
      assert.strictEqual(objList[0].members[44], 'M44=0x2D');
      assert.strictEqual(objList[0].members[45], 'M45=0x2E');
      assert.strictEqual(objList[0].members[46], 'M46=0x2F');
      assert.strictEqual(objList[0].members[47], 'M47=0x30');
      assert.strictEqual(objList[0].members[48], 'M48=0x31');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0219 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0220
  * @tc.name c_enum_0220
  * @tc.desc h2dts parseEnum：扩充-矩阵：50 成员（无赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0220', () => {
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
    M38,
    M39,
    M40,
    M41,
    M42,
    M43,
    M44,
    M45,
    M46,
    M47,
    M48,
    M49
} En50F0;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En50F0');
      assert.strictEqual(objList[0].alias, 'En50F0');
      assert.strictEqual(objList[0].members.length, 50);
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
      assert.strictEqual(objList[0].members[39], 'M39');
      assert.strictEqual(objList[0].members[40], 'M40');
      assert.strictEqual(objList[0].members[41], 'M41');
      assert.strictEqual(objList[0].members[42], 'M42');
      assert.strictEqual(objList[0].members[43], 'M43');
      assert.strictEqual(objList[0].members[44], 'M44');
      assert.strictEqual(objList[0].members[45], 'M45');
      assert.strictEqual(objList[0].members[46], 'M46');
      assert.strictEqual(objList[0].members[47], 'M47');
      assert.strictEqual(objList[0].members[48], 'M48');
      assert.strictEqual(objList[0].members[49], 'M49');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0220 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0221
  * @tc.name c_enum_0221
  * @tc.desc h2dts parseEnum：扩充-矩阵：50 成员（数字赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0221', () => {
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
    M38 = 38,
    M39 = 39,
    M40 = 40,
    M41 = 41,
    M42 = 42,
    M43 = 43,
    M44 = 44,
    M45 = 45,
    M46 = 46,
    M47 = 47,
    M48 = 48,
    M49 = 49
} En50F1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En50F1');
      assert.strictEqual(objList[0].alias, 'En50F1');
      assert.strictEqual(objList[0].members.length, 50);
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
      assert.strictEqual(objList[0].members[39], 'M39=39');
      assert.strictEqual(objList[0].members[40], 'M40=40');
      assert.strictEqual(objList[0].members[41], 'M41=41');
      assert.strictEqual(objList[0].members[42], 'M42=42');
      assert.strictEqual(objList[0].members[43], 'M43=43');
      assert.strictEqual(objList[0].members[44], 'M44=44');
      assert.strictEqual(objList[0].members[45], 'M45=45');
      assert.strictEqual(objList[0].members[46], 'M46=46');
      assert.strictEqual(objList[0].members[47], 'M47=47');
      assert.strictEqual(objList[0].members[48], 'M48=48');
      assert.strictEqual(objList[0].members[49], 'M49=49');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0221 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0222
  * @tc.name c_enum_0222
  * @tc.desc h2dts parseEnum：扩充-矩阵：50 成员（字符串赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0222', () => {
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
    M38 = "v38",
    M39 = "v39",
    M40 = "v40",
    M41 = "v41",
    M42 = "v42",
    M43 = "v43",
    M44 = "v44",
    M45 = "v45",
    M46 = "v46",
    M47 = "v47",
    M48 = "v48",
    M49 = "v49"
} En50F2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En50F2');
      assert.strictEqual(objList[0].alias, 'En50F2');
      assert.strictEqual(objList[0].members.length, 50);
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
      assert.strictEqual(objList[0].members[39], 'M39="v39"');
      assert.strictEqual(objList[0].members[40], 'M40="v40"');
      assert.strictEqual(objList[0].members[41], 'M41="v41"');
      assert.strictEqual(objList[0].members[42], 'M42="v42"');
      assert.strictEqual(objList[0].members[43], 'M43="v43"');
      assert.strictEqual(objList[0].members[44], 'M44="v44"');
      assert.strictEqual(objList[0].members[45], 'M45="v45"');
      assert.strictEqual(objList[0].members[46], 'M46="v46"');
      assert.strictEqual(objList[0].members[47], 'M47="v47"');
      assert.strictEqual(objList[0].members[48], 'M48="v48"');
      assert.strictEqual(objList[0].members[49], 'M49="v49"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0222 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0223
  * @tc.name c_enum_0223
  * @tc.desc h2dts parseEnum：扩充-矩阵：50 成员（十六进制赋值） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0223', () => {
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
    M38 = 0x27,
    M39 = 0x28,
    M40 = 0x29,
    M41 = 0x2A,
    M42 = 0x2B,
    M43 = 0x2C,
    M44 = 0x2D,
    M45 = 0x2E,
    M46 = 0x2F,
    M47 = 0x30,
    M48 = 0x31,
    M49 = 0x32
} En50F3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'En50F3');
      assert.strictEqual(objList[0].alias, 'En50F3');
      assert.strictEqual(objList[0].members.length, 50);
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
      assert.strictEqual(objList[0].members[39], 'M39=0x28');
      assert.strictEqual(objList[0].members[40], 'M40=0x29');
      assert.strictEqual(objList[0].members[41], 'M41=0x2A');
      assert.strictEqual(objList[0].members[42], 'M42=0x2B');
      assert.strictEqual(objList[0].members[43], 'M43=0x2C');
      assert.strictEqual(objList[0].members[44], 'M44=0x2D');
      assert.strictEqual(objList[0].members[45], 'M45=0x2E');
      assert.strictEqual(objList[0].members[46], 'M46=0x2F');
      assert.strictEqual(objList[0].members[47], 'M47=0x30');
      assert.strictEqual(objList[0].members[48], 'M48=0x31');
      assert.strictEqual(objList[0].members[49], 'M49=0x32');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0224
  * @tc.name c_enum_0224
  * @tc.desc h2dts parseEnum：扩充-命名：ColorT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0224', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A0, B0, C0, D0 } ColorT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ColorT');
      assert.strictEqual(objList[0].alias, 'ColorT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A0');
      assert.strictEqual(objList[0].members[1], 'B0');
      assert.strictEqual(objList[0].members[2], 'C0');
      assert.strictEqual(objList[0].members[3], 'D0');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0225
  * @tc.name c_enum_0225
  * @tc.desc h2dts parseEnum：扩充-命名：StatusT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0225', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A1, B1, C1, D1 } StatusT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StatusT');
      assert.strictEqual(objList[0].alias, 'StatusT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A1');
      assert.strictEqual(objList[0].members[1], 'B1');
      assert.strictEqual(objList[0].members[2], 'C1');
      assert.strictEqual(objList[0].members[3], 'D1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0225 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0226
  * @tc.name c_enum_0226
  * @tc.desc h2dts parseEnum：扩充-命名：ModeT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0226', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A2, B2, C2, D2 } ModeT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ModeT');
      assert.strictEqual(objList[0].alias, 'ModeT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A2');
      assert.strictEqual(objList[0].members[1], 'B2');
      assert.strictEqual(objList[0].members[2], 'C2');
      assert.strictEqual(objList[0].members[3], 'D2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0227
  * @tc.name c_enum_0227
  * @tc.desc h2dts parseEnum：扩充-命名：LevelT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0227', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A3, B3, C3, D3 } LevelT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'LevelT');
      assert.strictEqual(objList[0].alias, 'LevelT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A3');
      assert.strictEqual(objList[0].members[1], 'B3');
      assert.strictEqual(objList[0].members[2], 'C3');
      assert.strictEqual(objList[0].members[3], 'D3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0228
  * @tc.name c_enum_0228
  * @tc.desc h2dts parseEnum：扩充-命名：TypeT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0228', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A4, B4, C4, D4 } TypeT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TypeT');
      assert.strictEqual(objList[0].alias, 'TypeT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A4');
      assert.strictEqual(objList[0].members[1], 'B4');
      assert.strictEqual(objList[0].members[2], 'C4');
      assert.strictEqual(objList[0].members[3], 'D4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0229
  * @tc.name c_enum_0229
  * @tc.desc h2dts parseEnum：扩充-命名：KindT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0229', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A5, B5, C5, D5 } KindT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'KindT');
      assert.strictEqual(objList[0].alias, 'KindT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A5');
      assert.strictEqual(objList[0].members[1], 'B5');
      assert.strictEqual(objList[0].members[2], 'C5');
      assert.strictEqual(objList[0].members[3], 'D5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0229 执行异常: ${String(err)}`);
    }
  });

});
