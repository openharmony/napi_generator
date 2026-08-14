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

suite('Performance_C_Union_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Union_Suite part03.');

  /**
  * @tc.number c_union_0055
  * @tc.name c_union_0055
  * @tc.desc h2dts parseUnion：扩充-规模：12 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0055', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
    int m11;
} UnN12;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN12');
      assert.strictEqual(objList[0].alias, 'UnN12');
      assert.strictEqual(objList[0].members.length, 12);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'm11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0056
  * @tc.name c_union_0056
  * @tc.desc h2dts parseUnion：扩充-规模：13 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0056', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
    int m11;
    int m12;
} UnN13;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN13');
      assert.strictEqual(objList[0].alias, 'UnN13');
      assert.strictEqual(objList[0].members.length, 13);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'm11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'm12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0057
  * @tc.name c_union_0057
  * @tc.desc h2dts parseUnion：扩充-规模：14 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0057', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
    int m11;
    int m12;
    int m13;
} UnN14;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN14');
      assert.strictEqual(objList[0].alias, 'UnN14');
      assert.strictEqual(objList[0].members.length, 14);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'm11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'm12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.strictEqual(objList[0].members[13].name, 'm13');
      assert.strictEqual(objList[0].members[13].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0058
  * @tc.name c_union_0058
  * @tc.desc h2dts parseUnion：扩充-规模：15 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0058', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
    int m11;
    int m12;
    int m13;
    int m14;
} UnN15;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN15');
      assert.strictEqual(objList[0].alias, 'UnN15');
      assert.strictEqual(objList[0].members.length, 15);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'm11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'm12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.strictEqual(objList[0].members[13].name, 'm13');
      assert.strictEqual(objList[0].members[13].type, 'int');
      assert.strictEqual(objList[0].members[14].name, 'm14');
      assert.strictEqual(objList[0].members[14].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0059
  * @tc.name c_union_0059
  * @tc.desc h2dts parseUnion：扩充-规模：16 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0059', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
    int m11;
    int m12;
    int m13;
    int m14;
    int m15;
} UnN16;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN16');
      assert.strictEqual(objList[0].alias, 'UnN16');
      assert.strictEqual(objList[0].members.length, 16);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'm11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'm12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.strictEqual(objList[0].members[13].name, 'm13');
      assert.strictEqual(objList[0].members[13].type, 'int');
      assert.strictEqual(objList[0].members[14].name, 'm14');
      assert.strictEqual(objList[0].members[14].type, 'int');
      assert.strictEqual(objList[0].members[15].name, 'm15');
      assert.strictEqual(objList[0].members[15].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0060
  * @tc.name c_union_0060
  * @tc.desc h2dts parseUnion：扩充-规模：17 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0060', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
    int m11;
    int m12;
    int m13;
    int m14;
    int m15;
    int m16;
} UnN17;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN17');
      assert.strictEqual(objList[0].alias, 'UnN17');
      assert.strictEqual(objList[0].members.length, 17);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'm11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'm12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.strictEqual(objList[0].members[13].name, 'm13');
      assert.strictEqual(objList[0].members[13].type, 'int');
      assert.strictEqual(objList[0].members[14].name, 'm14');
      assert.strictEqual(objList[0].members[14].type, 'int');
      assert.strictEqual(objList[0].members[15].name, 'm15');
      assert.strictEqual(objList[0].members[15].type, 'int');
      assert.strictEqual(objList[0].members[16].name, 'm16');
      assert.strictEqual(objList[0].members[16].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0061
  * @tc.name c_union_0061
  * @tc.desc h2dts parseUnion：扩充-规模：18 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0061', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
    int m11;
    int m12;
    int m13;
    int m14;
    int m15;
    int m16;
    int m17;
} UnN18;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN18');
      assert.strictEqual(objList[0].alias, 'UnN18');
      assert.strictEqual(objList[0].members.length, 18);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'm11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'm12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.strictEqual(objList[0].members[13].name, 'm13');
      assert.strictEqual(objList[0].members[13].type, 'int');
      assert.strictEqual(objList[0].members[14].name, 'm14');
      assert.strictEqual(objList[0].members[14].type, 'int');
      assert.strictEqual(objList[0].members[15].name, 'm15');
      assert.strictEqual(objList[0].members[15].type, 'int');
      assert.strictEqual(objList[0].members[16].name, 'm16');
      assert.strictEqual(objList[0].members[16].type, 'int');
      assert.strictEqual(objList[0].members[17].name, 'm17');
      assert.strictEqual(objList[0].members[17].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0062
  * @tc.name c_union_0062
  * @tc.desc h2dts parseUnion：扩充-规模：19 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0062', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
    int m11;
    int m12;
    int m13;
    int m14;
    int m15;
    int m16;
    int m17;
    int m18;
} UnN19;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN19');
      assert.strictEqual(objList[0].alias, 'UnN19');
      assert.strictEqual(objList[0].members.length, 19);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'm11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'm12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.strictEqual(objList[0].members[13].name, 'm13');
      assert.strictEqual(objList[0].members[13].type, 'int');
      assert.strictEqual(objList[0].members[14].name, 'm14');
      assert.strictEqual(objList[0].members[14].type, 'int');
      assert.strictEqual(objList[0].members[15].name, 'm15');
      assert.strictEqual(objList[0].members[15].type, 'int');
      assert.strictEqual(objList[0].members[16].name, 'm16');
      assert.strictEqual(objList[0].members[16].type, 'int');
      assert.strictEqual(objList[0].members[17].name, 'm17');
      assert.strictEqual(objList[0].members[17].type, 'int');
      assert.strictEqual(objList[0].members[18].name, 'm18');
      assert.strictEqual(objList[0].members[18].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0063
  * @tc.name c_union_0063
  * @tc.desc h2dts parseUnion：扩充-规模：20 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0063', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union {
    int m0;
    int m1;
    int m2;
    int m3;
    int m4;
    int m5;
    int m6;
    int m7;
    int m8;
    int m9;
    int m10;
    int m11;
    int m12;
    int m13;
    int m14;
    int m15;
    int m16;
    int m17;
    int m18;
    int m19;
} UnN20;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'UnN20');
      assert.strictEqual(objList[0].alias, 'UnN20');
      assert.strictEqual(objList[0].members.length, 20);
      assert.strictEqual(objList[0].members[0].name, 'm0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'm1');
      assert.strictEqual(objList[0].members[1].type, 'int');
      assert.strictEqual(objList[0].members[2].name, 'm2');
      assert.strictEqual(objList[0].members[2].type, 'int');
      assert.strictEqual(objList[0].members[3].name, 'm3');
      assert.strictEqual(objList[0].members[3].type, 'int');
      assert.strictEqual(objList[0].members[4].name, 'm4');
      assert.strictEqual(objList[0].members[4].type, 'int');
      assert.strictEqual(objList[0].members[5].name, 'm5');
      assert.strictEqual(objList[0].members[5].type, 'int');
      assert.strictEqual(objList[0].members[6].name, 'm6');
      assert.strictEqual(objList[0].members[6].type, 'int');
      assert.strictEqual(objList[0].members[7].name, 'm7');
      assert.strictEqual(objList[0].members[7].type, 'int');
      assert.strictEqual(objList[0].members[8].name, 'm8');
      assert.strictEqual(objList[0].members[8].type, 'int');
      assert.strictEqual(objList[0].members[9].name, 'm9');
      assert.strictEqual(objList[0].members[9].type, 'int');
      assert.strictEqual(objList[0].members[10].name, 'm10');
      assert.strictEqual(objList[0].members[10].type, 'int');
      assert.strictEqual(objList[0].members[11].name, 'm11');
      assert.strictEqual(objList[0].members[11].type, 'int');
      assert.strictEqual(objList[0].members[12].name, 'm12');
      assert.strictEqual(objList[0].members[12].type, 'int');
      assert.strictEqual(objList[0].members[13].name, 'm13');
      assert.strictEqual(objList[0].members[13].type, 'int');
      assert.strictEqual(objList[0].members[14].name, 'm14');
      assert.strictEqual(objList[0].members[14].type, 'int');
      assert.strictEqual(objList[0].members[15].name, 'm15');
      assert.strictEqual(objList[0].members[15].type, 'int');
      assert.strictEqual(objList[0].members[16].name, 'm16');
      assert.strictEqual(objList[0].members[16].type, 'int');
      assert.strictEqual(objList[0].members[17].name, 'm17');
      assert.strictEqual(objList[0].members[17].type, 'int');
      assert.strictEqual(objList[0].members[18].name, 'm18');
      assert.strictEqual(objList[0].members[18].type, 'int');
      assert.strictEqual(objList[0].members[19].name, 'm19');
      assert.strictEqual(objList[0].members[19].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0064
  * @tc.name c_union_0064
  * @tc.desc h2dts parseUnion：扩充-命名：ValueU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0064', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a0; double b0; } ValueU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ValueU');
      assert.strictEqual(objList[0].alias, 'ValueU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b0');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0065
  * @tc.name c_union_0065
  * @tc.desc h2dts parseUnion：扩充-命名：DataU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0065', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a1; double b1; } DataU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'DataU');
      assert.strictEqual(objList[0].alias, 'DataU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a1');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b1');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0066
  * @tc.name c_union_0066
  * @tc.desc h2dts parseUnion：扩充-命名：BufferU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0066', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a2; double b2; } BufferU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'BufferU');
      assert.strictEqual(objList[0].alias, 'BufferU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a2');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b2');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0067
  * @tc.name c_union_0067
  * @tc.desc h2dts parseUnion：扩充-命名：ResultU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0067', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a3; double b3; } ResultU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ResultU');
      assert.strictEqual(objList[0].alias, 'ResultU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a3');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b3');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0068
  * @tc.name c_union_0068
  * @tc.desc h2dts parseUnion：扩充-命名：NumberU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0068', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a4; double b4; } NumberU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NumberU');
      assert.strictEqual(objList[0].alias, 'NumberU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a4');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b4');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0069
  * @tc.name c_union_0069
  * @tc.desc h2dts parseUnion：扩充-命名：MixedU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0069', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a5; double b5; } MixedU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MixedU');
      assert.strictEqual(objList[0].alias, 'MixedU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a5');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b5');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0070
  * @tc.name c_union_0070
  * @tc.desc h2dts parseUnion：扩充-命名：RawU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0070', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a6; double b6; } RawU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'RawU');
      assert.strictEqual(objList[0].alias, 'RawU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a6');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b6');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0071
  * @tc.name c_union_0071
  * @tc.desc h2dts parseUnion：扩充-命名：PacketU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0071', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a7; double b7; } PacketU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'PacketU');
      assert.strictEqual(objList[0].alias, 'PacketU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a7');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b7');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0072
  * @tc.name c_union_0072
  * @tc.desc h2dts parseUnion：扩充-命名：CellU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0072', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a8; double b8; } CellU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'CellU');
      assert.strictEqual(objList[0].alias, 'CellU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a8');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b8');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0073
  * @tc.name c_union_0073
  * @tc.desc h2dts parseUnion：扩充-命名：SlotU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0073', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a9; double b9; } SlotU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'SlotU');
      assert.strictEqual(objList[0].alias, 'SlotU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a9');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b9');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0074
  * @tc.name c_union_0074
  * @tc.desc h2dts parseUnion：扩充-命名：WordU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0074', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a10; double b10; } WordU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'WordU');
      assert.strictEqual(objList[0].alias, 'WordU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a10');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b10');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0075
  * @tc.name c_union_0075
  * @tc.desc h2dts parseUnion：扩充-命名：BlockU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0075', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a11; double b11; } BlockU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'BlockU');
      assert.strictEqual(objList[0].alias, 'BlockU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a11');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b11');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0076
  * @tc.name c_union_0076
  * @tc.desc h2dts parseUnion：扩充-命名：FrameU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0076', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a12; double b12; } FrameU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FrameU');
      assert.strictEqual(objList[0].alias, 'FrameU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a12');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b12');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0077
  * @tc.name c_union_0077
  * @tc.desc h2dts parseUnion：扩充-命名：TokenU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0077', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a13; double b13; } TokenU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TokenU');
      assert.strictEqual(objList[0].alias, 'TokenU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a13');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b13');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0077 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0078
  * @tc.name c_union_0078
  * @tc.desc h2dts parseUnion：扩充-命名：NodeU 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0078', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int a14; double b14; } NodeU;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NodeU');
      assert.strictEqual(objList[0].alias, 'NodeU');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0].name, 'a14');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[0].members[1].name, 'b14');
      assert.strictEqual(objList[0].members[1].type, 'double');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0079
  * @tc.name c_union_0079
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 2 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0079', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU0_0;
typedef union { int v1; } MU0_1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'MU0_0');
      assert.strictEqual(objList[0].alias, 'MU0_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU0_1');
      assert.strictEqual(objList[1].alias, 'MU0_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0080
  * @tc.name c_union_0080
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 3 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0080', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU1_0;
typedef union { int v1; } MU1_1;
typedef union { int v2; } MU1_2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 3);
      assert.strictEqual(objList[0].name, 'MU1_0');
      assert.strictEqual(objList[0].alias, 'MU1_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU1_1');
      assert.strictEqual(objList[1].alias, 'MU1_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[2].name, 'MU1_2');
      assert.strictEqual(objList[2].alias, 'MU1_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0081
  * @tc.name c_union_0081
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 4 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0081', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU2_0;
typedef union { int v1; } MU2_1;
typedef union { int v2; } MU2_2;
typedef union { int v3; } MU2_3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 4);
      assert.strictEqual(objList[0].name, 'MU2_0');
      assert.strictEqual(objList[0].alias, 'MU2_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU2_1');
      assert.strictEqual(objList[1].alias, 'MU2_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[2].name, 'MU2_2');
      assert.strictEqual(objList[2].alias, 'MU2_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[3].name, 'MU2_3');
      assert.strictEqual(objList[3].alias, 'MU2_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0082
  * @tc.name c_union_0082
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 5 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0082', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU3_0;
typedef union { int v1; } MU3_1;
typedef union { int v2; } MU3_2;
typedef union { int v3; } MU3_3;
typedef union { int v4; } MU3_4;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 5);
      assert.strictEqual(objList[0].name, 'MU3_0');
      assert.strictEqual(objList[0].alias, 'MU3_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU3_1');
      assert.strictEqual(objList[1].alias, 'MU3_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[2].name, 'MU3_2');
      assert.strictEqual(objList[2].alias, 'MU3_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[3].name, 'MU3_3');
      assert.strictEqual(objList[3].alias, 'MU3_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[4].name, 'MU3_4');
      assert.strictEqual(objList[4].alias, 'MU3_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0083
  * @tc.name c_union_0083
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 6 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0083', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU4_0;
typedef union { int v1; } MU4_1;
typedef union { int v2; } MU4_2;
typedef union { int v3; } MU4_3;
typedef union { int v4; } MU4_4;
typedef union { int v5; } MU4_5;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 6);
      assert.strictEqual(objList[0].name, 'MU4_0');
      assert.strictEqual(objList[0].alias, 'MU4_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU4_1');
      assert.strictEqual(objList[1].alias, 'MU4_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[2].name, 'MU4_2');
      assert.strictEqual(objList[2].alias, 'MU4_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[3].name, 'MU4_3');
      assert.strictEqual(objList[3].alias, 'MU4_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[4].name, 'MU4_4');
      assert.strictEqual(objList[4].alias, 'MU4_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[5].name, 'MU4_5');
      assert.strictEqual(objList[5].alias, 'MU4_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0084
  * @tc.name c_union_0084
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 7 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0084', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU5_0;
typedef union { int v1; } MU5_1;
typedef union { int v2; } MU5_2;
typedef union { int v3; } MU5_3;
typedef union { int v4; } MU5_4;
typedef union { int v5; } MU5_5;
typedef union { int v6; } MU5_6;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 7);
      assert.strictEqual(objList[0].name, 'MU5_0');
      assert.strictEqual(objList[0].alias, 'MU5_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU5_1');
      assert.strictEqual(objList[1].alias, 'MU5_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[2].name, 'MU5_2');
      assert.strictEqual(objList[2].alias, 'MU5_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[3].name, 'MU5_3');
      assert.strictEqual(objList[3].alias, 'MU5_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[4].name, 'MU5_4');
      assert.strictEqual(objList[4].alias, 'MU5_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[5].name, 'MU5_5');
      assert.strictEqual(objList[5].alias, 'MU5_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[6].name, 'MU5_6');
      assert.strictEqual(objList[6].alias, 'MU5_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0085
  * @tc.name c_union_0085
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 8 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0085', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU6_0;
typedef union { int v1; } MU6_1;
typedef union { int v2; } MU6_2;
typedef union { int v3; } MU6_3;
typedef union { int v4; } MU6_4;
typedef union { int v5; } MU6_5;
typedef union { int v6; } MU6_6;
typedef union { int v7; } MU6_7;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 8);
      assert.strictEqual(objList[0].name, 'MU6_0');
      assert.strictEqual(objList[0].alias, 'MU6_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU6_1');
      assert.strictEqual(objList[1].alias, 'MU6_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[2].name, 'MU6_2');
      assert.strictEqual(objList[2].alias, 'MU6_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[3].name, 'MU6_3');
      assert.strictEqual(objList[3].alias, 'MU6_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[4].name, 'MU6_4');
      assert.strictEqual(objList[4].alias, 'MU6_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[5].name, 'MU6_5');
      assert.strictEqual(objList[5].alias, 'MU6_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[6].name, 'MU6_6');
      assert.strictEqual(objList[6].alias, 'MU6_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.strictEqual(objList[7].name, 'MU6_7');
      assert.strictEqual(objList[7].alias, 'MU6_7');
      assert.strictEqual(objList[7].members.length, 1);
      assert.strictEqual(objList[7].members[0].name, 'v7');
      assert.strictEqual(objList[7].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0086
  * @tc.name c_union_0086
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 10 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0086', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU7_0;
typedef union { int v1; } MU7_1;
typedef union { int v2; } MU7_2;
typedef union { int v3; } MU7_3;
typedef union { int v4; } MU7_4;
typedef union { int v5; } MU7_5;
typedef union { int v6; } MU7_6;
typedef union { int v7; } MU7_7;
typedef union { int v8; } MU7_8;
typedef union { int v9; } MU7_9;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 10);
      assert.strictEqual(objList[0].name, 'MU7_0');
      assert.strictEqual(objList[0].alias, 'MU7_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU7_1');
      assert.strictEqual(objList[1].alias, 'MU7_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[2].name, 'MU7_2');
      assert.strictEqual(objList[2].alias, 'MU7_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[3].name, 'MU7_3');
      assert.strictEqual(objList[3].alias, 'MU7_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[4].name, 'MU7_4');
      assert.strictEqual(objList[4].alias, 'MU7_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[5].name, 'MU7_5');
      assert.strictEqual(objList[5].alias, 'MU7_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[6].name, 'MU7_6');
      assert.strictEqual(objList[6].alias, 'MU7_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.strictEqual(objList[7].name, 'MU7_7');
      assert.strictEqual(objList[7].alias, 'MU7_7');
      assert.strictEqual(objList[7].members.length, 1);
      assert.strictEqual(objList[7].members[0].name, 'v7');
      assert.strictEqual(objList[7].members[0].type, 'int');
      assert.strictEqual(objList[8].name, 'MU7_8');
      assert.strictEqual(objList[8].alias, 'MU7_8');
      assert.strictEqual(objList[8].members.length, 1);
      assert.strictEqual(objList[8].members[0].name, 'v8');
      assert.strictEqual(objList[8].members[0].type, 'int');
      assert.strictEqual(objList[9].name, 'MU7_9');
      assert.strictEqual(objList[9].alias, 'MU7_9');
      assert.strictEqual(objList[9].members.length, 1);
      assert.strictEqual(objList[9].members[0].name, 'v9');
      assert.strictEqual(objList[9].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_union_0087
  * @tc.name c_union_0087
  * @tc.desc h2dts parseUnion：扩充-多 union：同文件 12 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_union_0087', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseUnion(`typedef union { int v0; } MU8_0;
typedef union { int v1; } MU8_1;
typedef union { int v2; } MU8_2;
typedef union { int v3; } MU8_3;
typedef union { int v4; } MU8_4;
typedef union { int v5; } MU8_5;
typedef union { int v6; } MU8_6;
typedef union { int v7; } MU8_7;
typedef union { int v8; } MU8_8;
typedef union { int v9; } MU8_9;
typedef union { int v10; } MU8_10;
typedef union { int v11; } MU8_11;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 12);
      assert.strictEqual(objList[0].name, 'MU8_0');
      assert.strictEqual(objList[0].alias, 'MU8_0');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0].name, 'v0');
      assert.strictEqual(objList[0].members[0].type, 'int');
      assert.strictEqual(objList[1].name, 'MU8_1');
      assert.strictEqual(objList[1].alias, 'MU8_1');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0].name, 'v1');
      assert.strictEqual(objList[1].members[0].type, 'int');
      assert.strictEqual(objList[2].name, 'MU8_2');
      assert.strictEqual(objList[2].alias, 'MU8_2');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0].name, 'v2');
      assert.strictEqual(objList[2].members[0].type, 'int');
      assert.strictEqual(objList[3].name, 'MU8_3');
      assert.strictEqual(objList[3].alias, 'MU8_3');
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0].name, 'v3');
      assert.strictEqual(objList[3].members[0].type, 'int');
      assert.strictEqual(objList[4].name, 'MU8_4');
      assert.strictEqual(objList[4].alias, 'MU8_4');
      assert.strictEqual(objList[4].members.length, 1);
      assert.strictEqual(objList[4].members[0].name, 'v4');
      assert.strictEqual(objList[4].members[0].type, 'int');
      assert.strictEqual(objList[5].name, 'MU8_5');
      assert.strictEqual(objList[5].alias, 'MU8_5');
      assert.strictEqual(objList[5].members.length, 1);
      assert.strictEqual(objList[5].members[0].name, 'v5');
      assert.strictEqual(objList[5].members[0].type, 'int');
      assert.strictEqual(objList[6].name, 'MU8_6');
      assert.strictEqual(objList[6].alias, 'MU8_6');
      assert.strictEqual(objList[6].members.length, 1);
      assert.strictEqual(objList[6].members[0].name, 'v6');
      assert.strictEqual(objList[6].members[0].type, 'int');
      assert.strictEqual(objList[7].name, 'MU8_7');
      assert.strictEqual(objList[7].alias, 'MU8_7');
      assert.strictEqual(objList[7].members.length, 1);
      assert.strictEqual(objList[7].members[0].name, 'v7');
      assert.strictEqual(objList[7].members[0].type, 'int');
      assert.strictEqual(objList[8].name, 'MU8_8');
      assert.strictEqual(objList[8].alias, 'MU8_8');
      assert.strictEqual(objList[8].members.length, 1);
      assert.strictEqual(objList[8].members[0].name, 'v8');
      assert.strictEqual(objList[8].members[0].type, 'int');
      assert.strictEqual(objList[9].name, 'MU8_9');
      assert.strictEqual(objList[9].alias, 'MU8_9');
      assert.strictEqual(objList[9].members.length, 1);
      assert.strictEqual(objList[9].members[0].name, 'v9');
      assert.strictEqual(objList[9].members[0].type, 'int');
      assert.strictEqual(objList[10].name, 'MU8_10');
      assert.strictEqual(objList[10].alias, 'MU8_10');
      assert.strictEqual(objList[10].members.length, 1);
      assert.strictEqual(objList[10].members[0].name, 'v10');
      assert.strictEqual(objList[10].members[0].type, 'int');
      assert.strictEqual(objList[11].name, 'MU8_11');
      assert.strictEqual(objList[11].alias, 'MU8_11');
      assert.strictEqual(objList[11].members.length, 1);
      assert.strictEqual(objList[11].members[0].name, 'v11');
      assert.strictEqual(objList[11].members[0].type, 'int');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_union_0087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_union_0087 执行异常: ${String(err)}`);
    }
  });

});
