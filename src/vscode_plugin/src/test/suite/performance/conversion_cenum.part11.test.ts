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
  vscode.window.showInformationMessage('Start Performance_C_Enum_Suite part11.');

  /**
  * @tc.number c_enum_0230
  * @tc.name c_enum_0230
  * @tc.desc h2dts parseEnum：扩充-命名：StateT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0230', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A6, B6, C6, D6 } StateT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StateT');
      assert.strictEqual(objList[0].alias, 'StateT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A6');
      assert.strictEqual(objList[0].members[1], 'B6');
      assert.strictEqual(objList[0].members[2], 'C6');
      assert.strictEqual(objList[0].members[3], 'D6');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0231
  * @tc.name c_enum_0231
  * @tc.desc h2dts parseEnum：扩充-命名：FlagT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0231', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A7, B7, C7, D7 } FlagT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FlagT');
      assert.strictEqual(objList[0].alias, 'FlagT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A7');
      assert.strictEqual(objList[0].members[1], 'B7');
      assert.strictEqual(objList[0].members[2], 'C7');
      assert.strictEqual(objList[0].members[3], 'D7');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0232
  * @tc.name c_enum_0232
  * @tc.desc h2dts parseEnum：扩充-命名：CodeT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0232', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A8, B8, C8, D8 } CodeT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'CodeT');
      assert.strictEqual(objList[0].alias, 'CodeT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A8');
      assert.strictEqual(objList[0].members[1], 'B8');
      assert.strictEqual(objList[0].members[2], 'C8');
      assert.strictEqual(objList[0].members[3], 'D8');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0233
  * @tc.name c_enum_0233
  * @tc.desc h2dts parseEnum：扩充-命名：ResultT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0233', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A9, B9, C9, D9 } ResultT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ResultT');
      assert.strictEqual(objList[0].alias, 'ResultT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A9');
      assert.strictEqual(objList[0].members[1], 'B9');
      assert.strictEqual(objList[0].members[2], 'C9');
      assert.strictEqual(objList[0].members[3], 'D9');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0234
  * @tc.name c_enum_0234
  * @tc.desc h2dts parseEnum：扩充-命名：GradeT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0234', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A10, B10, C10, D10 } GradeT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'GradeT');
      assert.strictEqual(objList[0].alias, 'GradeT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A10');
      assert.strictEqual(objList[0].members[1], 'B10');
      assert.strictEqual(objList[0].members[2], 'C10');
      assert.strictEqual(objList[0].members[3], 'D10');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0235
  * @tc.name c_enum_0235
  * @tc.desc h2dts parseEnum：扩充-命名：SizeT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0235', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A11, B11, C11, D11 } SizeT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'SizeT');
      assert.strictEqual(objList[0].alias, 'SizeT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A11');
      assert.strictEqual(objList[0].members[1], 'B11');
      assert.strictEqual(objList[0].members[2], 'C11');
      assert.strictEqual(objList[0].members[3], 'D11');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0236
  * @tc.name c_enum_0236
  * @tc.desc h2dts parseEnum：扩充-命名：OrderT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0236', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A12, B12, C12, D12 } OrderT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OrderT');
      assert.strictEqual(objList[0].alias, 'OrderT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A12');
      assert.strictEqual(objList[0].members[1], 'B12');
      assert.strictEqual(objList[0].members[2], 'C12');
      assert.strictEqual(objList[0].members[3], 'D12');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0237
  * @tc.name c_enum_0237
  * @tc.desc h2dts parseEnum：扩充-命名：PhaseT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0237', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A13, B13, C13, D13 } PhaseT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'PhaseT');
      assert.strictEqual(objList[0].alias, 'PhaseT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A13');
      assert.strictEqual(objList[0].members[1], 'B13');
      assert.strictEqual(objList[0].members[2], 'C13');
      assert.strictEqual(objList[0].members[3], 'D13');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0238
  * @tc.name c_enum_0238
  * @tc.desc h2dts parseEnum：扩充-命名：RankT 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0238', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A14, B14, C14, D14 } RankT;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'RankT');
      assert.strictEqual(objList[0].alias, 'RankT');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'A14');
      assert.strictEqual(objList[0].members[1], 'B14');
      assert.strictEqual(objList[0].members[2], 'C14');
      assert.strictEqual(objList[0].members[3], 'D14');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0239
  * @tc.name c_enum_0239
  * @tc.desc h2dts parseEnum：扩充-多 enum：同文件 2 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0239', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { X0_0, Y0_0 } ME0_0;
typedef enum { X0_1, Y0_1 } ME0_1;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'ME0_0');
      assert.strictEqual(objList[0].alias, 'ME0_0');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'X0_0');
      assert.strictEqual(objList[0].members[1], 'Y0_0');
      assert.strictEqual(objList[1].name, 'ME0_1');
      assert.strictEqual(objList[1].alias, 'ME0_1');
      assert.strictEqual(objList[1].members.length, 2);
      assert.strictEqual(objList[1].members[0], 'X0_1');
      assert.strictEqual(objList[1].members[1], 'Y0_1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0240
  * @tc.name c_enum_0240
  * @tc.desc h2dts parseEnum：扩充-多 enum：同文件 3 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0240', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { X1_0, Y1_0 } ME1_0;
typedef enum { X1_1, Y1_1 } ME1_1;
typedef enum { X1_2, Y1_2 } ME1_2;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 3);
      assert.strictEqual(objList[0].name, 'ME1_0');
      assert.strictEqual(objList[0].alias, 'ME1_0');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'X1_0');
      assert.strictEqual(objList[0].members[1], 'Y1_0');
      assert.strictEqual(objList[1].name, 'ME1_1');
      assert.strictEqual(objList[1].alias, 'ME1_1');
      assert.strictEqual(objList[1].members.length, 2);
      assert.strictEqual(objList[1].members[0], 'X1_1');
      assert.strictEqual(objList[1].members[1], 'Y1_1');
      assert.strictEqual(objList[2].name, 'ME1_2');
      assert.strictEqual(objList[2].alias, 'ME1_2');
      assert.strictEqual(objList[2].members.length, 2);
      assert.strictEqual(objList[2].members[0], 'X1_2');
      assert.strictEqual(objList[2].members[1], 'Y1_2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0241
  * @tc.name c_enum_0241
  * @tc.desc h2dts parseEnum：扩充-多 enum：同文件 4 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0241', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { X2_0, Y2_0 } ME2_0;
typedef enum { X2_1, Y2_1 } ME2_1;
typedef enum { X2_2, Y2_2 } ME2_2;
typedef enum { X2_3, Y2_3 } ME2_3;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 4);
      assert.strictEqual(objList[0].name, 'ME2_0');
      assert.strictEqual(objList[0].alias, 'ME2_0');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'X2_0');
      assert.strictEqual(objList[0].members[1], 'Y2_0');
      assert.strictEqual(objList[1].name, 'ME2_1');
      assert.strictEqual(objList[1].alias, 'ME2_1');
      assert.strictEqual(objList[1].members.length, 2);
      assert.strictEqual(objList[1].members[0], 'X2_1');
      assert.strictEqual(objList[1].members[1], 'Y2_1');
      assert.strictEqual(objList[2].name, 'ME2_2');
      assert.strictEqual(objList[2].alias, 'ME2_2');
      assert.strictEqual(objList[2].members.length, 2);
      assert.strictEqual(objList[2].members[0], 'X2_2');
      assert.strictEqual(objList[2].members[1], 'Y2_2');
      assert.strictEqual(objList[3].name, 'ME2_3');
      assert.strictEqual(objList[3].alias, 'ME2_3');
      assert.strictEqual(objList[3].members.length, 2);
      assert.strictEqual(objList[3].members[0], 'X2_3');
      assert.strictEqual(objList[3].members[1], 'Y2_3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0242
  * @tc.name c_enum_0242
  * @tc.desc h2dts parseEnum：扩充-多 enum：同文件 5 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0242', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { X3_0, Y3_0 } ME3_0;
typedef enum { X3_1, Y3_1 } ME3_1;
typedef enum { X3_2, Y3_2 } ME3_2;
typedef enum { X3_3, Y3_3 } ME3_3;
typedef enum { X3_4, Y3_4 } ME3_4;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 5);
      assert.strictEqual(objList[0].name, 'ME3_0');
      assert.strictEqual(objList[0].alias, 'ME3_0');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'X3_0');
      assert.strictEqual(objList[0].members[1], 'Y3_0');
      assert.strictEqual(objList[1].name, 'ME3_1');
      assert.strictEqual(objList[1].alias, 'ME3_1');
      assert.strictEqual(objList[1].members.length, 2);
      assert.strictEqual(objList[1].members[0], 'X3_1');
      assert.strictEqual(objList[1].members[1], 'Y3_1');
      assert.strictEqual(objList[2].name, 'ME3_2');
      assert.strictEqual(objList[2].alias, 'ME3_2');
      assert.strictEqual(objList[2].members.length, 2);
      assert.strictEqual(objList[2].members[0], 'X3_2');
      assert.strictEqual(objList[2].members[1], 'Y3_2');
      assert.strictEqual(objList[3].name, 'ME3_3');
      assert.strictEqual(objList[3].alias, 'ME3_3');
      assert.strictEqual(objList[3].members.length, 2);
      assert.strictEqual(objList[3].members[0], 'X3_3');
      assert.strictEqual(objList[3].members[1], 'Y3_3');
      assert.strictEqual(objList[4].name, 'ME3_4');
      assert.strictEqual(objList[4].alias, 'ME3_4');
      assert.strictEqual(objList[4].members.length, 2);
      assert.strictEqual(objList[4].members[0], 'X3_4');
      assert.strictEqual(objList[4].members[1], 'Y3_4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0242 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0243
  * @tc.name c_enum_0243
  * @tc.desc h2dts parseEnum：扩充-多 enum：同文件 8 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0243', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { X4_0, Y4_0 } ME4_0;
typedef enum { X4_1, Y4_1 } ME4_1;
typedef enum { X4_2, Y4_2 } ME4_2;
typedef enum { X4_3, Y4_3 } ME4_3;
typedef enum { X4_4, Y4_4 } ME4_4;
typedef enum { X4_5, Y4_5 } ME4_5;
typedef enum { X4_6, Y4_6 } ME4_6;
typedef enum { X4_7, Y4_7 } ME4_7;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 8);
      assert.strictEqual(objList[0].name, 'ME4_0');
      assert.strictEqual(objList[0].alias, 'ME4_0');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'X4_0');
      assert.strictEqual(objList[0].members[1], 'Y4_0');
      assert.strictEqual(objList[1].name, 'ME4_1');
      assert.strictEqual(objList[1].alias, 'ME4_1');
      assert.strictEqual(objList[1].members.length, 2);
      assert.strictEqual(objList[1].members[0], 'X4_1');
      assert.strictEqual(objList[1].members[1], 'Y4_1');
      assert.strictEqual(objList[2].name, 'ME4_2');
      assert.strictEqual(objList[2].alias, 'ME4_2');
      assert.strictEqual(objList[2].members.length, 2);
      assert.strictEqual(objList[2].members[0], 'X4_2');
      assert.strictEqual(objList[2].members[1], 'Y4_2');
      assert.strictEqual(objList[3].name, 'ME4_3');
      assert.strictEqual(objList[3].alias, 'ME4_3');
      assert.strictEqual(objList[3].members.length, 2);
      assert.strictEqual(objList[3].members[0], 'X4_3');
      assert.strictEqual(objList[3].members[1], 'Y4_3');
      assert.strictEqual(objList[4].name, 'ME4_4');
      assert.strictEqual(objList[4].alias, 'ME4_4');
      assert.strictEqual(objList[4].members.length, 2);
      assert.strictEqual(objList[4].members[0], 'X4_4');
      assert.strictEqual(objList[4].members[1], 'Y4_4');
      assert.strictEqual(objList[5].name, 'ME4_5');
      assert.strictEqual(objList[5].alias, 'ME4_5');
      assert.strictEqual(objList[5].members.length, 2);
      assert.strictEqual(objList[5].members[0], 'X4_5');
      assert.strictEqual(objList[5].members[1], 'Y4_5');
      assert.strictEqual(objList[6].name, 'ME4_6');
      assert.strictEqual(objList[6].alias, 'ME4_6');
      assert.strictEqual(objList[6].members.length, 2);
      assert.strictEqual(objList[6].members[0], 'X4_6');
      assert.strictEqual(objList[6].members[1], 'Y4_6');
      assert.strictEqual(objList[7].name, 'ME4_7');
      assert.strictEqual(objList[7].alias, 'ME4_7');
      assert.strictEqual(objList[7].members.length, 2);
      assert.strictEqual(objList[7].members[0], 'X4_7');
      assert.strictEqual(objList[7].members[1], 'Y4_7');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0244
  * @tc.name c_enum_0244
  * @tc.desc h2dts parseEnum：扩充-值形态：位运算 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0244', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { B0 = 1 << 0, B1 = 1 << 1, B2 = 1 << 2, B3 = 1 << 3, B4 = 1 << 4 } BitV;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'BitV');
      assert.strictEqual(objList[0].alias, 'BitV');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0], 'B0=1<<0');
      assert.strictEqual(objList[0].members[1], 'B1=1<<1');
      assert.strictEqual(objList[0].members[2], 'B2=1<<2');
      assert.strictEqual(objList[0].members[3], 'B3=1<<3');
      assert.strictEqual(objList[0].members[4], 'B4=1<<4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0245
  * @tc.name c_enum_0245
  * @tc.desc h2dts parseEnum：扩充-值形态：负数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0245', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { N0 = -5, N1 = -4, N2 = -3, N3 = -2, N4 = -1 } NegV;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NegV');
      assert.strictEqual(objList[0].alias, 'NegV');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0], 'N0=-5');
      assert.strictEqual(objList[0].members[1], 'N1=-4');
      assert.strictEqual(objList[0].members[2], 'N2=-3');
      assert.strictEqual(objList[0].members[3], 'N3=-2');
      assert.strictEqual(objList[0].members[4], 'N4=-1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0246
  * @tc.name c_enum_0246
  * @tc.desc h2dts parseEnum：扩充-值形态：字符 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0246', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { C0 = 'a', C1 = 'b', C2 = 'c' } CharV;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'CharV');
      assert.strictEqual(objList[0].alias, 'CharV');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'C0=\'a\'');
      assert.strictEqual(objList[0].members[1], 'C1=\'b\'');
      assert.strictEqual(objList[0].members[2], 'C2=\'c\'');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0247
  * @tc.name c_enum_0247
  * @tc.desc h2dts parseEnum：扩充-值形态：混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0247', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { X0 = 1, X1 = "two", X2 = 3, X3 = 0x4 } MixV;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MixV');
      assert.strictEqual(objList[0].alias, 'MixV');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'X0=1');
      assert.strictEqual(objList[0].members[1], 'X1="two"');
      assert.strictEqual(objList[0].members[2], 'X2=3');
      assert.strictEqual(objList[0].members[3], 'X3=0x4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0248
  * @tc.name c_enum_0248
  * @tc.desc h2dts parseEnum：扩充-值形态：注释 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0248', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { // 注释
 A, // 甲
 B, // 乙
 C, // 丙
} ComV;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ComV');
      assert.strictEqual(objList[0].alias, 'ComV');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'A');
      assert.strictEqual(objList[0].members[1], 'B');
      assert.strictEqual(objList[0].members[2], 'C');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0249
  * @tc.name c_enum_0249
  * @tc.desc h2dts parseEnum：扩充-值形态：尾逗号 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0249', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A, B, C, } TrailV;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TrailV');
      assert.strictEqual(objList[0].alias, 'TrailV');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'A');
      assert.strictEqual(objList[0].members[1], 'B');
      assert.strictEqual(objList[0].members[2], 'C');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0250
  * @tc.name c_enum_0250
  * @tc.desc h2dts parseEnum：扩充-值形态：无分号 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0250', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A, B, C } NoSemiV`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NoSemiV');
      assert.strictEqual(objList[0].alias, 'NoSemiV');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'A');
      assert.strictEqual(objList[0].members[1], 'B');
      assert.strictEqual(objList[0].members[2], 'C');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0251
  * @tc.name c_enum_0251
  * @tc.desc h2dts parseEnum：扩充-值形态：重复值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0251', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A = 1, B = 1, C = 2 } DupV;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'DupV');
      assert.strictEqual(objList[0].alias, 'DupV');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'A=1');
      assert.strictEqual(objList[0].members[1], 'B=1');
      assert.strictEqual(objList[0].members[2], 'C=2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0252
  * @tc.name c_enum_0252
  * @tc.desc h2dts parseEnum：扩充-值形态：大数值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0252', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A = 1000000, B = 2000000, C = 3000000 } BigV;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'BigV');
      assert.strictEqual(objList[0].alias, 'BigV');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'A=1000000');
      assert.strictEqual(objList[0].members[1], 'B=2000000');
      assert.strictEqual(objList[0].members[2], 'C=3000000');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0253
  * @tc.name c_enum_0253
  * @tc.desc h2dts parseEnum：扩充-值形态：浮点值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0253', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { A = 0.5, B = 1.5, C = 2.5 } FloatV;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FloatV');
      assert.strictEqual(objList[0].alias, 'FloatV');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'A=0.5');
      assert.strictEqual(objList[0].members[1], 'B=1.5');
      assert.strictEqual(objList[0].members[2], 'C=2.5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0253 执行异常: ${String(err)}`);
    }
  });

});
