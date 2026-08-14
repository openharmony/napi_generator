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

suite('Performance_C_Struct_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Struct_Suite part05.');

  /**
  * @tc.number c_struct_0130
  * @tc.name c_struct_0130
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 6 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0130', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti4_0 { int v0; } SMulti4_0;
typedef struct SMulti4_1 { int v1; } SMulti4_1;
typedef struct SMulti4_2 { int v2; } SMulti4_2;
typedef struct SMulti4_3 { int v3; } SMulti4_3;
typedef struct SMulti4_4 { int v4; } SMulti4_4;
typedef struct SMulti4_5 { int v5; } SMulti4_5;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 6);
      assert.strictEqual(objList[0].name, 'SMulti4_0');
      assert.strictEqual(objList[0].alias, 'SMulti4_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti4_1');
      assert.strictEqual(objList[1].alias, 'SMulti4_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'SMulti4_2');
      assert.strictEqual(objList[2].alias, 'SMulti4_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.strictEqual(objList[3].name, 'SMulti4_3');
      assert.strictEqual(objList[3].alias, 'SMulti4_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[3].functions.length, 0);
      assert.strictEqual(objList[4].name, 'SMulti4_4');
      assert.strictEqual(objList[4].alias, 'SMulti4_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[4].functions.length, 0);
      assert.strictEqual(objList[5].name, 'SMulti4_5');
      assert.strictEqual(objList[5].alias, 'SMulti4_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[5].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0131
  * @tc.name c_struct_0131
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 7 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0131', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti5_0 { int v0; } SMulti5_0;
typedef struct SMulti5_1 { int v1; } SMulti5_1;
typedef struct SMulti5_2 { int v2; } SMulti5_2;
typedef struct SMulti5_3 { int v3; } SMulti5_3;
typedef struct SMulti5_4 { int v4; } SMulti5_4;
typedef struct SMulti5_5 { int v5; } SMulti5_5;
typedef struct SMulti5_6 { int v6; } SMulti5_6;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 7);
      assert.strictEqual(objList[0].name, 'SMulti5_0');
      assert.strictEqual(objList[0].alias, 'SMulti5_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti5_1');
      assert.strictEqual(objList[1].alias, 'SMulti5_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'SMulti5_2');
      assert.strictEqual(objList[2].alias, 'SMulti5_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.strictEqual(objList[3].name, 'SMulti5_3');
      assert.strictEqual(objList[3].alias, 'SMulti5_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[3].functions.length, 0);
      assert.strictEqual(objList[4].name, 'SMulti5_4');
      assert.strictEqual(objList[4].alias, 'SMulti5_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[4].functions.length, 0);
      assert.strictEqual(objList[5].name, 'SMulti5_5');
      assert.strictEqual(objList[5].alias, 'SMulti5_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[5].functions.length, 0);
      assert.strictEqual(objList[6].name, 'SMulti5_6');
      assert.strictEqual(objList[6].alias, 'SMulti5_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.strictEqual(objList[6].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0132
  * @tc.name c_struct_0132
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 8 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0132', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti6_0 { int v0; } SMulti6_0;
typedef struct SMulti6_1 { int v1; } SMulti6_1;
typedef struct SMulti6_2 { int v2; } SMulti6_2;
typedef struct SMulti6_3 { int v3; } SMulti6_3;
typedef struct SMulti6_4 { int v4; } SMulti6_4;
typedef struct SMulti6_5 { int v5; } SMulti6_5;
typedef struct SMulti6_6 { int v6; } SMulti6_6;
typedef struct SMulti6_7 { int v7; } SMulti6_7;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 8);
      assert.strictEqual(objList[0].name, 'SMulti6_0');
      assert.strictEqual(objList[0].alias, 'SMulti6_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti6_1');
      assert.strictEqual(objList[1].alias, 'SMulti6_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'SMulti6_2');
      assert.strictEqual(objList[2].alias, 'SMulti6_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.strictEqual(objList[3].name, 'SMulti6_3');
      assert.strictEqual(objList[3].alias, 'SMulti6_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[3].functions.length, 0);
      assert.strictEqual(objList[4].name, 'SMulti6_4');
      assert.strictEqual(objList[4].alias, 'SMulti6_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[4].functions.length, 0);
      assert.strictEqual(objList[5].name, 'SMulti6_5');
      assert.strictEqual(objList[5].alias, 'SMulti6_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[5].functions.length, 0);
      assert.strictEqual(objList[6].name, 'SMulti6_6');
      assert.strictEqual(objList[6].alias, 'SMulti6_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.strictEqual(objList[6].functions.length, 0);
      assert.strictEqual(objList[7].name, 'SMulti6_7');
      assert.strictEqual(objList[7].alias, 'SMulti6_7');
      assert.strictEqual(objList[7].members.length, 1);
      assert.strictEqual(objList[7].members[0].name, 'v7');
      assert.strictEqual(objList[7].members[0].type, 'int');
      assert.strictEqual(objList[7].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0133
  * @tc.name c_struct_0133
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 10 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0133', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti7_0 { int v0; } SMulti7_0;
typedef struct SMulti7_1 { int v1; } SMulti7_1;
typedef struct SMulti7_2 { int v2; } SMulti7_2;
typedef struct SMulti7_3 { int v3; } SMulti7_3;
typedef struct SMulti7_4 { int v4; } SMulti7_4;
typedef struct SMulti7_5 { int v5; } SMulti7_5;
typedef struct SMulti7_6 { int v6; } SMulti7_6;
typedef struct SMulti7_7 { int v7; } SMulti7_7;
typedef struct SMulti7_8 { int v8; } SMulti7_8;
typedef struct SMulti7_9 { int v9; } SMulti7_9;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 10);
      assert.strictEqual(objList[0].name, 'SMulti7_0');
      assert.strictEqual(objList[0].alias, 'SMulti7_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti7_1');
      assert.strictEqual(objList[1].alias, 'SMulti7_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'SMulti7_2');
      assert.strictEqual(objList[2].alias, 'SMulti7_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.strictEqual(objList[3].name, 'SMulti7_3');
      assert.strictEqual(objList[3].alias, 'SMulti7_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[3].functions.length, 0);
      assert.strictEqual(objList[4].name, 'SMulti7_4');
      assert.strictEqual(objList[4].alias, 'SMulti7_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[4].functions.length, 0);
      assert.strictEqual(objList[5].name, 'SMulti7_5');
      assert.strictEqual(objList[5].alias, 'SMulti7_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[5].functions.length, 0);
      assert.strictEqual(objList[6].name, 'SMulti7_6');
      assert.strictEqual(objList[6].alias, 'SMulti7_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.strictEqual(objList[6].functions.length, 0);
      assert.strictEqual(objList[7].name, 'SMulti7_7');
      assert.strictEqual(objList[7].alias, 'SMulti7_7');
      assert.strictEqual(objList[7].members.length, 1);
      assert.strictEqual(objList[7].members[0].name, 'v7');
      assert.strictEqual(objList[7].members[0].type, 'int');
      assert.strictEqual(objList[7].functions.length, 0);
      assert.strictEqual(objList[8].name, 'SMulti7_8');
      assert.strictEqual(objList[8].alias, 'SMulti7_8');
      assert.strictEqual(objList[8].members.length, 1);
      assert.strictEqual(objList[8].members[0].name, 'v8');
      assert.strictEqual(objList[8].members[0].type, 'int');
      assert.strictEqual(objList[8].functions.length, 0);
      assert.strictEqual(objList[9].name, 'SMulti7_9');
      assert.strictEqual(objList[9].alias, 'SMulti7_9');
      assert.strictEqual(objList[9].members.length, 1);
      assert.strictEqual(objList[9].members[0].name, 'v9');
      assert.strictEqual(objList[9].members[0].type, 'int');
      assert.strictEqual(objList[9].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0134
  * @tc.name c_struct_0134
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 12 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0134', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti8_0 { int v0; } SMulti8_0;
typedef struct SMulti8_1 { int v1; } SMulti8_1;
typedef struct SMulti8_2 { int v2; } SMulti8_2;
typedef struct SMulti8_3 { int v3; } SMulti8_3;
typedef struct SMulti8_4 { int v4; } SMulti8_4;
typedef struct SMulti8_5 { int v5; } SMulti8_5;
typedef struct SMulti8_6 { int v6; } SMulti8_6;
typedef struct SMulti8_7 { int v7; } SMulti8_7;
typedef struct SMulti8_8 { int v8; } SMulti8_8;
typedef struct SMulti8_9 { int v9; } SMulti8_9;
typedef struct SMulti8_10 { int v10; } SMulti8_10;
typedef struct SMulti8_11 { int v11; } SMulti8_11;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 12);
      assert.strictEqual(objList[0].name, 'SMulti8_0');
      assert.strictEqual(objList[0].alias, 'SMulti8_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti8_1');
      assert.strictEqual(objList[1].alias, 'SMulti8_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'SMulti8_2');
      assert.strictEqual(objList[2].alias, 'SMulti8_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.strictEqual(objList[3].name, 'SMulti8_3');
      assert.strictEqual(objList[3].alias, 'SMulti8_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[3].functions.length, 0);
      assert.strictEqual(objList[4].name, 'SMulti8_4');
      assert.strictEqual(objList[4].alias, 'SMulti8_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[4].functions.length, 0);
      assert.strictEqual(objList[5].name, 'SMulti8_5');
      assert.strictEqual(objList[5].alias, 'SMulti8_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[5].functions.length, 0);
      assert.strictEqual(objList[6].name, 'SMulti8_6');
      assert.strictEqual(objList[6].alias, 'SMulti8_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.strictEqual(objList[6].functions.length, 0);
      assert.strictEqual(objList[7].name, 'SMulti8_7');
      assert.strictEqual(objList[7].alias, 'SMulti8_7');
      assert.strictEqual(objList[7].members.length, 1);
      assert.strictEqual(objList[7].members[0].name, 'v7');
      assert.strictEqual(objList[7].members[0].type, 'int');
      assert.strictEqual(objList[7].functions.length, 0);
      assert.strictEqual(objList[8].name, 'SMulti8_8');
      assert.strictEqual(objList[8].alias, 'SMulti8_8');
      assert.strictEqual(objList[8].members.length, 1);
      assert.strictEqual(objList[8].members[0].name, 'v8');
      assert.strictEqual(objList[8].members[0].type, 'int');
      assert.strictEqual(objList[8].functions.length, 0);
      assert.strictEqual(objList[9].name, 'SMulti8_9');
      assert.strictEqual(objList[9].alias, 'SMulti8_9');
      assert.strictEqual(objList[9].members.length, 1);
      assert.strictEqual(objList[9].members[0].name, 'v9');
      assert.strictEqual(objList[9].members[0].type, 'int');
      assert.strictEqual(objList[9].functions.length, 0);
      assert.strictEqual(objList[10].name, 'SMulti8_10');
      assert.strictEqual(objList[10].alias, 'SMulti8_10');
      assert.strictEqual(objList[10].members.length, 1);
      assert.strictEqual(objList[10].members[0].name, 'v10');
      assert.strictEqual(objList[10].members[0].type, 'int');
      assert.strictEqual(objList[10].functions.length, 0);
      assert.strictEqual(objList[11].name, 'SMulti8_11');
      assert.strictEqual(objList[11].alias, 'SMulti8_11');
      assert.strictEqual(objList[11].members.length, 1);
      assert.strictEqual(objList[11].members[0].name, 'v11');
      assert.strictEqual(objList[11].members[0].type, 'int');
      assert.strictEqual(objList[11].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0135
  * @tc.name c_struct_0135
  * @tc.desc h2dts parseStruct：扩充-多 struct：同文件 15 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0135', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SMulti9_0 { int v0; } SMulti9_0;
typedef struct SMulti9_1 { int v1; } SMulti9_1;
typedef struct SMulti9_2 { int v2; } SMulti9_2;
typedef struct SMulti9_3 { int v3; } SMulti9_3;
typedef struct SMulti9_4 { int v4; } SMulti9_4;
typedef struct SMulti9_5 { int v5; } SMulti9_5;
typedef struct SMulti9_6 { int v6; } SMulti9_6;
typedef struct SMulti9_7 { int v7; } SMulti9_7;
typedef struct SMulti9_8 { int v8; } SMulti9_8;
typedef struct SMulti9_9 { int v9; } SMulti9_9;
typedef struct SMulti9_10 { int v10; } SMulti9_10;
typedef struct SMulti9_11 { int v11; } SMulti9_11;
typedef struct SMulti9_12 { int v12; } SMulti9_12;
typedef struct SMulti9_13 { int v13; } SMulti9_13;
typedef struct SMulti9_14 { int v14; } SMulti9_14;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 15);
      assert.strictEqual(objList[0].name, 'SMulti9_0');
      assert.strictEqual(objList[0].alias, 'SMulti9_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.strictEqual(objList[1].name, 'SMulti9_1');
      assert.strictEqual(objList[1].alias, 'SMulti9_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[1].functions.length, 0);
      assert.strictEqual(objList[2].name, 'SMulti9_2');
      assert.strictEqual(objList[2].alias, 'SMulti9_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[2].functions.length, 0);
      assert.strictEqual(objList[3].name, 'SMulti9_3');
      assert.strictEqual(objList[3].alias, 'SMulti9_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[3].functions.length, 0);
      assert.strictEqual(objList[4].name, 'SMulti9_4');
      assert.strictEqual(objList[4].alias, 'SMulti9_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[4].functions.length, 0);
      assert.strictEqual(objList[5].name, 'SMulti9_5');
      assert.strictEqual(objList[5].alias, 'SMulti9_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[5].functions.length, 0);
      assert.strictEqual(objList[6].name, 'SMulti9_6');
      assert.strictEqual(objList[6].alias, 'SMulti9_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.strictEqual(objList[6].functions.length, 0);
      assert.strictEqual(objList[7].name, 'SMulti9_7');
      assert.strictEqual(objList[7].alias, 'SMulti9_7');
      assert.strictEqual(objList[7].members.length, 1);
      assert.strictEqual(objList[7].members[0].name, 'v7');
      assert.strictEqual(objList[7].members[0].type, 'int');
      assert.strictEqual(objList[7].functions.length, 0);
      assert.strictEqual(objList[8].name, 'SMulti9_8');
      assert.strictEqual(objList[8].alias, 'SMulti9_8');
      assert.strictEqual(objList[8].members.length, 1);
      assert.strictEqual(objList[8].members[0].name, 'v8');
      assert.strictEqual(objList[8].members[0].type, 'int');
      assert.strictEqual(objList[8].functions.length, 0);
      assert.strictEqual(objList[9].name, 'SMulti9_9');
      assert.strictEqual(objList[9].alias, 'SMulti9_9');
      assert.strictEqual(objList[9].members.length, 1);
      assert.strictEqual(objList[9].members[0].name, 'v9');
      assert.strictEqual(objList[9].members[0].type, 'int');
      assert.strictEqual(objList[9].functions.length, 0);
      assert.strictEqual(objList[10].name, 'SMulti9_10');
      assert.strictEqual(objList[10].alias, 'SMulti9_10');
      assert.strictEqual(objList[10].members.length, 1);
      assert.strictEqual(objList[10].members[0].name, 'v10');
      assert.strictEqual(objList[10].members[0].type, 'int');
      assert.strictEqual(objList[10].functions.length, 0);
      assert.strictEqual(objList[11].name, 'SMulti9_11');
      assert.strictEqual(objList[11].alias, 'SMulti9_11');
      assert.strictEqual(objList[11].members.length, 1);
      assert.strictEqual(objList[11].members[0].name, 'v11');
      assert.strictEqual(objList[11].members[0].type, 'int');
      assert.strictEqual(objList[11].functions.length, 0);
      assert.strictEqual(objList[12].name, 'SMulti9_12');
      assert.strictEqual(objList[12].alias, 'SMulti9_12');
      assert.strictEqual(objList[12].members.length, 1);
      assert.strictEqual(objList[12].members[0].name, 'v12');
      assert.strictEqual(objList[12].members[0].type, 'int');
      assert.strictEqual(objList[12].functions.length, 0);
      assert.strictEqual(objList[13].name, 'SMulti9_13');
      assert.strictEqual(objList[13].alias, 'SMulti9_13');
      assert.strictEqual(objList[13].members.length, 1);
      assert.strictEqual(objList[13].members[0].name, 'v13');
      assert.strictEqual(objList[13].members[0].type, 'int');
      assert.strictEqual(objList[13].functions.length, 0);
      assert.strictEqual(objList[14].name, 'SMulti9_14');
      assert.strictEqual(objList[14].alias, 'SMulti9_14');
      assert.strictEqual(objList[14].members.length, 1);
      assert.strictEqual(objList[14].members[0].name, 'v14');
      assert.strictEqual(objList[14].members[0].type, 'int');
      assert.strictEqual(objList[14].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0136
  * @tc.name c_struct_0136
  * @tc.desc h2dts parseStruct：扩充-namespace 内 struct 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0136', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`namespace ns0 {
typedef struct NsSt0 {
    int v;
    double d;
} NsSt0;
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NsSt0');
      assert.strictEqual(objList[0].alias, 'NsSt0');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0137
  * @tc.name c_struct_0137
  * @tc.desc h2dts parseStruct：扩充-匿名 struct 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0137', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct {
    int v1;
    std::string s1;
} Anon1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Anon1');
      assert.strictEqual(objList[0].alias, 'Anon1');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v1');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's1');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0138
  * @tc.name c_struct_0138
  * @tc.desc h2dts parseStruct：扩充-函数指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0138', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct FpSt2 {
    int (*cb)(int a);
    double (*math)(double x);
} FpSt2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FpSt2');
      assert.strictEqual(objList[0].alias, 'FpSt2');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'x');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0139
  * @tc.name c_struct_0139
  * @tc.desc h2dts parseStruct：扩充-namespace 内 struct 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0139', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`namespace ns3 {
typedef struct NsSt3 {
    int v;
    double d;
} NsSt3;
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NsSt3');
      assert.strictEqual(objList[0].alias, 'NsSt3');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0140
  * @tc.name c_struct_0140
  * @tc.desc h2dts parseStruct：扩充-匿名 struct 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0140', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct {
    int v4;
    std::string s4;
} Anon4;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Anon4');
      assert.strictEqual(objList[0].alias, 'Anon4');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v4');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's4');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0141
  * @tc.name c_struct_0141
  * @tc.desc h2dts parseStruct：扩充-函数指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0141', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct FpSt5 {
    int (*cb)(int a);
    double (*math)(double x);
} FpSt5;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FpSt5');
      assert.strictEqual(objList[0].alias, 'FpSt5');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'x');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0142
  * @tc.name c_struct_0142
  * @tc.desc h2dts parseStruct：扩充-namespace 内 struct 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0142', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`namespace ns6 {
typedef struct NsSt6 {
    int v;
    double d;
} NsSt6;
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NsSt6');
      assert.strictEqual(objList[0].alias, 'NsSt6');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0143
  * @tc.name c_struct_0143
  * @tc.desc h2dts parseStruct：扩充-匿名 struct 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0143', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct {
    int v7;
    std::string s7;
} Anon7;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Anon7');
      assert.strictEqual(objList[0].alias, 'Anon7');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v7');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's7');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0144
  * @tc.name c_struct_0144
  * @tc.desc h2dts parseStruct：扩充-函数指针成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0144', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct FpSt8 {
    int (*cb)(int a);
    double (*math)(double x);
} FpSt8;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FpSt8');
      assert.strictEqual(objList[0].alias, 'FpSt8');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'x');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0145
  * @tc.name c_struct_0145
  * @tc.desc h2dts parseStruct：扩充-namespace 内 struct 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0145', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`namespace ns9 {
typedef struct NsSt9 {
    int v;
    double d;
} NsSt9;
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NsSt9');
      assert.strictEqual(objList[0].alias, 'NsSt9');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'd');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0146
  * @tc.name c_struct_0146
  * @tc.desc h2dts parseStruct：扩充-命名：AlphaSt0 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0146', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct AlphaSt0 {
    int v0;
    std::string s0;
} AlphaSt0;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'AlphaSt0');
      assert.strictEqual(objList[0].alias, 'AlphaSt0');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's0');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0147
  * @tc.name c_struct_0147
  * @tc.desc h2dts parseStruct：扩充-命名：BetaSt1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0147', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct BetaSt1 {
    int v1;
    std::string s1;
} BetaSt1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'BetaSt1');
      assert.strictEqual(objList[0].alias, 'BetaSt1');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v1');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's1');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0148
  * @tc.name c_struct_0148
  * @tc.desc h2dts parseStruct：扩充-命名：GammaSt2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0148', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct GammaSt2 {
    int v2;
    std::string s2;
} GammaSt2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'GammaSt2');
      assert.strictEqual(objList[0].alias, 'GammaSt2');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v2');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's2');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0149
  * @tc.name c_struct_0149
  * @tc.desc h2dts parseStruct：扩充-命名：DeltaSt3 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0149', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct DeltaSt3 {
    int v3;
    std::string s3;
} DeltaSt3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'DeltaSt3');
      assert.strictEqual(objList[0].alias, 'DeltaSt3');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v3');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's3');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0150
  * @tc.name c_struct_0150
  * @tc.desc h2dts parseStruct：扩充-命名：EpsilonSt4 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0150', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct EpsilonSt4 {
    int v4;
    std::string s4;
} EpsilonSt4;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'EpsilonSt4');
      assert.strictEqual(objList[0].alias, 'EpsilonSt4');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v4');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's4');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0151
  * @tc.name c_struct_0151
  * @tc.desc h2dts parseStruct：扩充-命名：ZetaSt5 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0151', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct ZetaSt5 {
    int v5;
    std::string s5;
} ZetaSt5;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ZetaSt5');
      assert.strictEqual(objList[0].alias, 'ZetaSt5');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v5');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's5');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0152
  * @tc.name c_struct_0152
  * @tc.desc h2dts parseStruct：扩充-命名：EtaSt6 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0152', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct EtaSt6 {
    int v6;
    std::string s6;
} EtaSt6;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'EtaSt6');
      assert.strictEqual(objList[0].alias, 'EtaSt6');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v6');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's6');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0153
  * @tc.name c_struct_0153
  * @tc.desc h2dts parseStruct：扩充-命名：ThetaSt7 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0153', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct ThetaSt7 {
    int v7;
    std::string s7;
} ThetaSt7;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ThetaSt7');
      assert.strictEqual(objList[0].alias, 'ThetaSt7');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v7');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's7');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0154
  * @tc.name c_struct_0154
  * @tc.desc h2dts parseStruct：扩充-命名：IotaSt8 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0154', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct IotaSt8 {
    int v8;
    std::string s8;
} IotaSt8;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'IotaSt8');
      assert.strictEqual(objList[0].alias, 'IotaSt8');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v8');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's8');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0155
  * @tc.name c_struct_0155
  * @tc.desc h2dts parseStruct：扩充-命名：KappaSt9 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0155', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct KappaSt9 {
    int v9;
    std::string s9;
} KappaSt9;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'KappaSt9');
      assert.strictEqual(objList[0].alias, 'KappaSt9');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v9');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's9');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0156
  * @tc.name c_struct_0156
  * @tc.desc h2dts parseStruct：扩充-命名：LambdaSt10 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0156', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct LambdaSt10 {
    int v10;
    std::string s10;
} LambdaSt10;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'LambdaSt10');
      assert.strictEqual(objList[0].alias, 'LambdaSt10');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v10');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's10');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0157
  * @tc.name c_struct_0157
  * @tc.desc h2dts parseStruct：扩充-命名：MuSt11 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0157', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct MuSt11 {
    int v11;
    std::string s11;
} MuSt11;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MuSt11');
      assert.strictEqual(objList[0].alias, 'MuSt11');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v11');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's11');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0158
  * @tc.name c_struct_0158
  * @tc.desc h2dts parseStruct：扩充-命名：NuSt12 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0158', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct NuSt12 {
    int v12;
    std::string s12;
} NuSt12;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NuSt12');
      assert.strictEqual(objList[0].alias, 'NuSt12');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v12');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's12');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0159
  * @tc.name c_struct_0159
  * @tc.desc h2dts parseStruct：扩充-命名：XiSt13 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0159', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct XiSt13 {
    int v13;
    std::string s13;
} XiSt13;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'XiSt13');
      assert.strictEqual(objList[0].alias, 'XiSt13');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v13');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's13');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0160
  * @tc.name c_struct_0160
  * @tc.desc h2dts parseStruct：扩充-命名：OmicronSt14 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0160', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct OmicronSt14 {
    int v14;
    std::string s14;
} OmicronSt14;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OmicronSt14');
      assert.strictEqual(objList[0].alias, 'OmicronSt14');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v14');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's14');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0161
  * @tc.name c_struct_0161
  * @tc.desc h2dts parseStruct：扩充-命名：PiSt15 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0161', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct PiSt15 {
    int v15;
    std::string s15;
} PiSt15;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'PiSt15');
      assert.strictEqual(objList[0].alias, 'PiSt15');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v15');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's15');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0162
  * @tc.name c_struct_0162
  * @tc.desc h2dts parseStruct：扩充-命名：RhoSt16 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0162', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct RhoSt16 {
    int v16;
    std::string s16;
} RhoSt16;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'RhoSt16');
      assert.strictEqual(objList[0].alias, 'RhoSt16');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v16');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's16');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0163
  * @tc.name c_struct_0163
  * @tc.desc h2dts parseStruct：扩充-命名：SigmaSt17 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0163', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct SigmaSt17 {
    int v17;
    std::string s17;
} SigmaSt17;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'SigmaSt17');
      assert.strictEqual(objList[0].alias, 'SigmaSt17');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v17');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's17');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0164
  * @tc.name c_struct_0164
  * @tc.desc h2dts parseStruct：扩充-命名：TauSt18 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0164', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct TauSt18 {
    int v18;
    std::string s18;
} TauSt18;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TauSt18');
      assert.strictEqual(objList[0].alias, 'TauSt18');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v18');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's18');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0165
  * @tc.name c_struct_0165
  * @tc.desc h2dts parseStruct：扩充-命名：UpsilonSt19 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0165', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct UpsilonSt19 {
    int v19;
    std::string s19;
} UpsilonSt19;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UpsilonSt19');
      assert.strictEqual(objList[0].alias, 'UpsilonSt19');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'v19');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 's19');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0166
  * @tc.name c_struct_0166
  * @tc.desc h2dts parseStruct：扩充-边界：单成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0166', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Single1 { int v; } Single1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Single1');
      assert.strictEqual(objList[0].alias, 'Single1');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0167
  * @tc.name c_struct_0167
  * @tc.desc h2dts parseStruct：扩充-边界：多数组 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0167', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Arr2 { int a[2][3]; double b[4][5]; } Arr2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Arr2');
      assert.strictEqual(objList[0].alias, 'Arr2');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0168
  * @tc.name c_struct_0168
  * @tc.desc h2dts parseStruct：扩充-边界：混合方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0168', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct Mix3 {
    int i;
    void set(int v);
    int get();
    bool ok();
} Mix3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Mix3');
      assert.strictEqual(objList[0].alias, 'Mix3');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'i');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].functions.length, 3);
      assert.strictEqual(objList[0].functions[0].name, 'set');
      assert.strictEqual(objList[0].functions[0].returns, 'void');
      assert.strictEqual(objList[0].functions[1].name, 'get');
      assert.strictEqual(objList[0].functions[1].returns, 'int');
      assert.strictEqual(objList[0].functions[2].name, 'ok');
      assert.strictEqual(objList[0].functions[2].returns, 'bool');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_struct_0169
  * @tc.name c_struct_0169
  * @tc.desc h2dts parseStruct：扩充-边界：长成员名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_struct_0169', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseStruct(`typedef struct LongName4 {
    int veryLongMemberName; std::string anotherLongMemberName;
} LongName4;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'LongName4');
      assert.strictEqual(objList[0].alias, 'LongName4');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'veryLongMemberName');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'anotherLongMemberName');
      assert.strictEqual(objList[0].members[1].type, 'std::string');
      assert.strictEqual(objList[0].functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_struct_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_struct_0169 执行异常: ${String(err)}`);
    }
  });

});
