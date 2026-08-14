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
  vscode.window.showInformationMessage('Start Performance_C_Enum_Suite.');

  /**
  * @tc.number c_enum_0001
  * @tc.name c_enum_0001
  * @tc.desc h2dts parseEnum：enum：typedef 基本 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0001', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { NEW, APPEND, REPLACE } OperationType;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'OperationType');
      assert.strictEqual(objList[0].alias, 'OperationType');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'NEW');
      assert.strictEqual(objList[0].members[1], 'APPEND');
      assert.strictEqual(objList[0].members[2], 'REPLACE');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0002
  * @tc.name c_enum_0002
  * @tc.desc h2dts parseEnum：enum：具名基本 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0002', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`enum Color { RED, GREEN, BLUE };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Color');
      assert.strictEqual(objList[0].alias, undefined);
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'RED');
      assert.strictEqual(objList[0].members[1], 'GREEN');
      assert.strictEqual(objList[0].members[2], 'BLUE');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0003
  * @tc.name c_enum_0003
  * @tc.desc h2dts parseEnum：enum：带值 + 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0003', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum Color { RED = 1, GREEN = 2, BLUE = 3 } ColorEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Color');
      assert.strictEqual(objList[0].alias, 'ColorEnum');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'RED=1');
      assert.strictEqual(objList[0].members[1], 'GREEN=2');
      assert.strictEqual(objList[0].members[2], 'BLUE=3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0004
  * @tc.name c_enum_0004
  * @tc.desc h2dts parseEnum：enum：多值 HTTP 状态 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0004', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    OK = 200,
    NOT_FOUND = 404,
    ERROR = 500
} StatusCode;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StatusCode');
      assert.strictEqual(objList[0].alias, 'StatusCode');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'OK=200');
      assert.strictEqual(objList[0].members[1], 'NOT_FOUND=404');
      assert.strictEqual(objList[0].members[2], 'ERROR=500');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0005
  * @tc.name c_enum_0005
  * @tc.desc h2dts parseEnum：enum：10 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0005', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    A0, A1, A2, A3, A4, A5, A6, A7, A8, A9
} TenEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TenEnum');
      assert.strictEqual(objList[0].alias, 'TenEnum');
      assert.strictEqual(objList[0].members.length, 10);
      assert.strictEqual(objList[0].members[0], 'A0');
      assert.strictEqual(objList[0].members[1], 'A1');
      assert.strictEqual(objList[0].members[2], 'A2');
      assert.strictEqual(objList[0].members[3], 'A3');
      assert.strictEqual(objList[0].members[4], 'A4');
      assert.strictEqual(objList[0].members[5], 'A5');
      assert.strictEqual(objList[0].members[6], 'A6');
      assert.strictEqual(objList[0].members[7], 'A7');
      assert.strictEqual(objList[0].members[8], 'A8');
      assert.strictEqual(objList[0].members[9], 'A9');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0006
  * @tc.name c_enum_0006
  * @tc.desc h2dts parseEnum：enum：20 成员（规模） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0006', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    B0, B1, B2, B3, B4, B5, B6, B7, B8, B9,
    B10, B11, B12, B13, B14, B15, B16, B17, B18, B19
} TwentyEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TwentyEnum');
      assert.strictEqual(objList[0].alias, 'TwentyEnum');
      assert.strictEqual(objList[0].members.length, 20);
      assert.strictEqual(objList[0].members[0], 'B0');
      assert.strictEqual(objList[0].members[1], 'B1');
      assert.strictEqual(objList[0].members[2], 'B2');
      assert.strictEqual(objList[0].members[3], 'B3');
      assert.strictEqual(objList[0].members[4], 'B4');
      assert.strictEqual(objList[0].members[5], 'B5');
      assert.strictEqual(objList[0].members[6], 'B6');
      assert.strictEqual(objList[0].members[7], 'B7');
      assert.strictEqual(objList[0].members[8], 'B8');
      assert.strictEqual(objList[0].members[9], 'B9');
      assert.strictEqual(objList[0].members[10], 'B10');
      assert.strictEqual(objList[0].members[11], 'B11');
      assert.strictEqual(objList[0].members[12], 'B12');
      assert.strictEqual(objList[0].members[13], 'B13');
      assert.strictEqual(objList[0].members[14], 'B14');
      assert.strictEqual(objList[0].members[15], 'B15');
      assert.strictEqual(objList[0].members[16], 'B16');
      assert.strictEqual(objList[0].members[17], 'B17');
      assert.strictEqual(objList[0].members[18], 'B18');
      assert.strictEqual(objList[0].members[19], 'B19');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0007
  * @tc.name c_enum_0007
  * @tc.desc h2dts parseEnum：enum：方向枚举 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0007', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum Direction { UP = 0, DOWN, LEFT, RIGHT } DirEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Direction');
      assert.strictEqual(objList[0].alias, 'DirEnum');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'UP=0');
      assert.strictEqual(objList[0].members[1], 'DOWN');
      assert.strictEqual(objList[0].members[2], 'LEFT');
      assert.strictEqual(objList[0].members[3], 'RIGHT');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0008
  * @tc.name c_enum_0008
  * @tc.desc h2dts parseEnum：namespace：域内 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0008', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`namespace ns {
typedef enum { A, B, C } InnerEnum;
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'InnerEnum');
      assert.strictEqual(objList[0].alias, 'InnerEnum');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'A');
      assert.strictEqual(objList[0].members[1], 'B');
      assert.strictEqual(objList[0].members[2], 'C');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0009
  * @tc.name c_enum_0009
  * @tc.desc h2dts parseEnum：多 enum：同文件 2 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0009', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`enum E1 { X };
enum E2 { Y };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'E1');
      assert.strictEqual(objList[0].alias, undefined);
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0], 'X');
      assert.strictEqual(objList[1].name, 'E2');
      assert.strictEqual(objList[1].alias, undefined);
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0], 'Y');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0010
  * @tc.name c_enum_0010
  * @tc.desc h2dts parseEnum：enum：性别枚举 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0010', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    MALE = 1,
    FEMALE = 2,
    OTHER = 3
} Gender;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Gender');
      assert.strictEqual(objList[0].alias, 'Gender');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'MALE=1');
      assert.strictEqual(objList[0].members[1], 'FEMALE=2');
      assert.strictEqual(objList[0].members[2], 'OTHER=3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0011
  * @tc.name c_enum_0011
  * @tc.desc h2dts parseEnum：enum：状态枚举 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0011', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    SUCCESS,
    FAILURE,
    PENDING,
    CANCELED
} State;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'State');
      assert.strictEqual(objList[0].alias, 'State');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'SUCCESS');
      assert.strictEqual(objList[0].members[1], 'FAILURE');
      assert.strictEqual(objList[0].members[2], 'PENDING');
      assert.strictEqual(objList[0].members[3], 'CANCELED');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0012
  * @tc.name c_enum_0012
  * @tc.desc h2dts parseEnum：enum：位运算值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0012', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum { BIT0 = 1 << 0, BIT1 = 1 << 1, BIT2 = 1 << 2, BIT3 = 1 << 3 } Flags;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Flags');
      assert.strictEqual(objList[0].alias, 'Flags');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'BIT0=1<<0');
      assert.strictEqual(objList[0].members[1], 'BIT1=1<<1');
      assert.strictEqual(objList[0].members[2], 'BIT2=1<<2');
      assert.strictEqual(objList[0].members[3], 'BIT3=1<<3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0013
  * @tc.name c_enum_0013
  * @tc.desc h2dts parseEnum：扩充-enum：30 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0013', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    E0, E1, E2, E3, E4, E5, E6, E7, E8, E9,
    E10, E11, E12, E13, E14, E15, E16, E17, E18, E19,
    E20, E21, E22, E23, E24, E25, E26, E27, E28, E29
} ThirtyEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ThirtyEnum');
      assert.strictEqual(objList[0].alias, 'ThirtyEnum');
      assert.strictEqual(objList[0].members.length, 30);
      assert.strictEqual(objList[0].members[0], 'E0');
      assert.strictEqual(objList[0].members[1], 'E1');
      assert.strictEqual(objList[0].members[2], 'E2');
      assert.strictEqual(objList[0].members[3], 'E3');
      assert.strictEqual(objList[0].members[4], 'E4');
      assert.strictEqual(objList[0].members[5], 'E5');
      assert.strictEqual(objList[0].members[6], 'E6');
      assert.strictEqual(objList[0].members[7], 'E7');
      assert.strictEqual(objList[0].members[8], 'E8');
      assert.strictEqual(objList[0].members[9], 'E9');
      assert.strictEqual(objList[0].members[10], 'E10');
      assert.strictEqual(objList[0].members[11], 'E11');
      assert.strictEqual(objList[0].members[12], 'E12');
      assert.strictEqual(objList[0].members[13], 'E13');
      assert.strictEqual(objList[0].members[14], 'E14');
      assert.strictEqual(objList[0].members[15], 'E15');
      assert.strictEqual(objList[0].members[16], 'E16');
      assert.strictEqual(objList[0].members[17], 'E17');
      assert.strictEqual(objList[0].members[18], 'E18');
      assert.strictEqual(objList[0].members[19], 'E19');
      assert.strictEqual(objList[0].members[20], 'E20');
      assert.strictEqual(objList[0].members[21], 'E21');
      assert.strictEqual(objList[0].members[22], 'E22');
      assert.strictEqual(objList[0].members[23], 'E23');
      assert.strictEqual(objList[0].members[24], 'E24');
      assert.strictEqual(objList[0].members[25], 'E25');
      assert.strictEqual(objList[0].members[26], 'E26');
      assert.strictEqual(objList[0].members[27], 'E27');
      assert.strictEqual(objList[0].members[28], 'E28');
      assert.strictEqual(objList[0].members[29], 'E29');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0014
  * @tc.name c_enum_0014
  * @tc.desc h2dts parseEnum：扩充-enum：50 成员（规模） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0014', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    F0, F1, F2, F3, F4, F5, F6, F7, F8, F9,
    F10, F11, F12, F13, F14, F15, F16, F17, F18, F19,
    F20, F21, F22, F23, F24, F25, F26, F27, F28, F29,
    F30, F31, F32, F33, F34, F35, F36, F37, F38, F39,
    F40, F41, F42, F43, F44, F45, F46, F47, F48, F49
} FiftyEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FiftyEnum');
      assert.strictEqual(objList[0].alias, 'FiftyEnum');
      assert.strictEqual(objList[0].members.length, 50);
      assert.strictEqual(objList[0].members[0], 'F0');
      assert.strictEqual(objList[0].members[1], 'F1');
      assert.strictEqual(objList[0].members[2], 'F2');
      assert.strictEqual(objList[0].members[3], 'F3');
      assert.strictEqual(objList[0].members[4], 'F4');
      assert.strictEqual(objList[0].members[5], 'F5');
      assert.strictEqual(objList[0].members[6], 'F6');
      assert.strictEqual(objList[0].members[7], 'F7');
      assert.strictEqual(objList[0].members[8], 'F8');
      assert.strictEqual(objList[0].members[9], 'F9');
      assert.strictEqual(objList[0].members[10], 'F10');
      assert.strictEqual(objList[0].members[11], 'F11');
      assert.strictEqual(objList[0].members[12], 'F12');
      assert.strictEqual(objList[0].members[13], 'F13');
      assert.strictEqual(objList[0].members[14], 'F14');
      assert.strictEqual(objList[0].members[15], 'F15');
      assert.strictEqual(objList[0].members[16], 'F16');
      assert.strictEqual(objList[0].members[17], 'F17');
      assert.strictEqual(objList[0].members[18], 'F18');
      assert.strictEqual(objList[0].members[19], 'F19');
      assert.strictEqual(objList[0].members[20], 'F20');
      assert.strictEqual(objList[0].members[21], 'F21');
      assert.strictEqual(objList[0].members[22], 'F22');
      assert.strictEqual(objList[0].members[23], 'F23');
      assert.strictEqual(objList[0].members[24], 'F24');
      assert.strictEqual(objList[0].members[25], 'F25');
      assert.strictEqual(objList[0].members[26], 'F26');
      assert.strictEqual(objList[0].members[27], 'F27');
      assert.strictEqual(objList[0].members[28], 'F28');
      assert.strictEqual(objList[0].members[29], 'F29');
      assert.strictEqual(objList[0].members[30], 'F30');
      assert.strictEqual(objList[0].members[31], 'F31');
      assert.strictEqual(objList[0].members[32], 'F32');
      assert.strictEqual(objList[0].members[33], 'F33');
      assert.strictEqual(objList[0].members[34], 'F34');
      assert.strictEqual(objList[0].members[35], 'F35');
      assert.strictEqual(objList[0].members[36], 'F36');
      assert.strictEqual(objList[0].members[37], 'F37');
      assert.strictEqual(objList[0].members[38], 'F38');
      assert.strictEqual(objList[0].members[39], 'F39');
      assert.strictEqual(objList[0].members[40], 'F40');
      assert.strictEqual(objList[0].members[41], 'F41');
      assert.strictEqual(objList[0].members[42], 'F42');
      assert.strictEqual(objList[0].members[43], 'F43');
      assert.strictEqual(objList[0].members[44], 'F44');
      assert.strictEqual(objList[0].members[45], 'F45');
      assert.strictEqual(objList[0].members[46], 'F46');
      assert.strictEqual(objList[0].members[47], 'F47');
      assert.strictEqual(objList[0].members[48], 'F48');
      assert.strictEqual(objList[0].members[49], 'F49');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0015
  * @tc.name c_enum_0015
  * @tc.desc h2dts parseEnum：扩充-enum：十六进制值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0015', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    HEX_A = 0x1F,
    HEX_B = 0x2A,
    HEX_C = 0x3C
} HexEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'HexEnum');
      assert.strictEqual(objList[0].alias, 'HexEnum');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'HEX_A=0x1F');
      assert.strictEqual(objList[0].members[1], 'HEX_B=0x2A');
      assert.strictEqual(objList[0].members[2], 'HEX_C=0x3C');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0016
  * @tc.name c_enum_0016
  * @tc.desc h2dts parseEnum：扩充-enum：负数值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0016', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    NEG_A = -1,
    NEG_B = -2,
    NEG_C = 0
} NegEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NegEnum');
      assert.strictEqual(objList[0].alias, 'NegEnum');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'NEG_A=-1');
      assert.strictEqual(objList[0].members[1], 'NEG_B=-2');
      assert.strictEqual(objList[0].members[2], 'NEG_C=0');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0017
  * @tc.name c_enum_0017
  * @tc.desc h2dts parseEnum：扩充-enum：字符值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0017', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    CH_A = 'a',
    CH_B = 'b',
    CH_C = 'c'
} CharEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'CharEnum');
      assert.strictEqual(objList[0].alias, 'CharEnum');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'CH_A=\'a\'');
      assert.strictEqual(objList[0].members[1], 'CH_B=\'b\'');
      assert.strictEqual(objList[0].members[2], 'CH_C=\'c\'');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0018
  * @tc.name c_enum_0018
  * @tc.desc h2dts parseEnum：扩充-enum-多声明：同文件 4 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0018', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`enum E1 { A };
enum E2 { B };
enum E3 { C };
enum E4 { D };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 4);
      assert.strictEqual(objList[0].name, 'E1');
      assert.strictEqual(objList[0].alias, undefined);
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0], 'A');
      assert.strictEqual(objList[1].name, 'E2');
      assert.strictEqual(objList[1].alias, undefined);
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0], 'B');
      assert.strictEqual(objList[2].name, 'E3');
      assert.strictEqual(objList[2].alias, undefined);
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0], 'C');
      assert.strictEqual(objList[3].name, 'E4');
      assert.strictEqual(objList[3].alias, undefined);
      assert.strictEqual(objList[3].members.length, 1);
      assert.strictEqual(objList[3].members[0], 'D');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0019
  * @tc.name c_enum_0019
  * @tc.desc h2dts parseEnum：扩充-enum：3 个带别名带值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0019', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum E1 { X = 1 } E1Alias;
typedef enum E2 { Y = 2 } E2Alias;
typedef enum E3 { Z = 3 } E3Alias;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 3);
      assert.strictEqual(objList[0].name, 'E1');
      assert.strictEqual(objList[0].alias, 'E1Alias');
      assert.strictEqual(objList[0].members.length, 1);
      assert.strictEqual(objList[0].members[0], 'X=1');
      assert.strictEqual(objList[1].name, 'E2');
      assert.strictEqual(objList[1].alias, 'E2Alias');
      assert.strictEqual(objList[1].members.length, 1);
      assert.strictEqual(objList[1].members[0], 'Y=2');
      assert.strictEqual(objList[2].name, 'E3');
      assert.strictEqual(objList[2].alias, 'E3Alias');
      assert.strictEqual(objList[2].members.length, 1);
      assert.strictEqual(objList[2].members[0], 'Z=3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0020
  * @tc.name c_enum_0020
  * @tc.desc h2dts parseEnum：扩充-enum：注释 + 尾逗号 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0020', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    // 注释成员
    A, // 甲
    B, // 乙
    C, // 丙
} CommentEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'CommentEnum');
      assert.strictEqual(objList[0].alias, 'CommentEnum');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'A');
      assert.strictEqual(objList[0].members[1], 'B');
      assert.strictEqual(objList[0].members[2], 'C');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0021
  * @tc.name c_enum_0021
  * @tc.desc h2dts parseEnum：扩充-enum：数字/字符串混合值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0021', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    MIX_A = 1,
    MIX_B = "two",
    MIX_C = 3
} MixEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MixEnum');
      assert.strictEqual(objList[0].alias, 'MixEnum');
      assert.strictEqual(objList[0].members.length, 3);
      assert.strictEqual(objList[0].members[0], 'MIX_A=1');
      assert.strictEqual(objList[0].members[1], 'MIX_B="two"');
      assert.strictEqual(objList[0].members[2], 'MIX_C=3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0022
  * @tc.name c_enum_0022
  * @tc.desc h2dts parseEnum：扩充-enum-namespace：域内 2 个 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0022', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`namespace svc {
typedef enum { OK = 0, FAIL = 1 } Result;
enum Level { LOW, MID, HIGH };
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'Result');
      assert.strictEqual(objList[0].alias, 'Result');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'OK=0');
      assert.strictEqual(objList[0].members[1], 'FAIL=1');
      assert.strictEqual(objList[1].name, 'Level');
      assert.strictEqual(objList[1].alias, undefined);
      assert.strictEqual(objList[1].members.length, 3);
      assert.strictEqual(objList[1].members[0], 'LOW');
      assert.strictEqual(objList[1].members[1], 'MID');
      assert.strictEqual(objList[1].members[2], 'HIGH');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0023
  * @tc.name c_enum_0023
  * @tc.desc h2dts parseEnum：扩充-enum：5 位运算值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0023', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    BIT_A = 1 << 0,
    BIT_B = 1 << 1,
    BIT_C = 1 << 2,
    BIT_D = 1 << 3,
    BIT_E = 1 << 4
} BitFlags;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'BitFlags');
      assert.strictEqual(objList[0].alias, 'BitFlags');
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0], 'BIT_A=1<<0');
      assert.strictEqual(objList[0].members[1], 'BIT_B=1<<1');
      assert.strictEqual(objList[0].members[2], 'BIT_C=1<<2');
      assert.strictEqual(objList[0].members[3], 'BIT_D=1<<3');
      assert.strictEqual(objList[0].members[4], 'BIT_E=1<<4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0024
  * @tc.name c_enum_0024
  * @tc.desc h2dts parseEnum：扩充-enum：布尔语义值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0024', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    TRUE_V = 1,
    FALSE_V = 0
} BoolEnum;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'BoolEnum');
      assert.strictEqual(objList[0].alias, 'BoolEnum');
      assert.strictEqual(objList[0].members.length, 2);
      assert.strictEqual(objList[0].members[0], 'TRUE_V=1');
      assert.strictEqual(objList[0].members[1], 'FALSE_V=0');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0025
  * @tc.name c_enum_0025
  * @tc.desc h2dts parseEnum：扩充-enum：星期枚举 + 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0025', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum Day { MON, TUE, WED, THU, FRI, SAT, SUN } WeekDay;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Day');
      assert.strictEqual(objList[0].alias, 'WeekDay');
      assert.strictEqual(objList[0].members.length, 7);
      assert.strictEqual(objList[0].members[0], 'MON');
      assert.strictEqual(objList[0].members[1], 'TUE');
      assert.strictEqual(objList[0].members[2], 'WED');
      assert.strictEqual(objList[0].members[3], 'THU');
      assert.strictEqual(objList[0].members[4], 'FRI');
      assert.strictEqual(objList[0].members[5], 'SAT');
      assert.strictEqual(objList[0].members[6], 'SUN');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0026
  * @tc.name c_enum_0026
  * @tc.desc h2dts parseEnum：扩充-enum：方位枚举 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0026', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`typedef enum {
    NORTH = 0,
    SOUTH = 1,
    EAST = 2,
    WEST = 3
} Direction4;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Direction4');
      assert.strictEqual(objList[0].alias, 'Direction4');
      assert.strictEqual(objList[0].members.length, 4);
      assert.strictEqual(objList[0].members[0], 'NORTH=0');
      assert.strictEqual(objList[0].members[1], 'SOUTH=1');
      assert.strictEqual(objList[0].members[2], 'EAST=2');
      assert.strictEqual(objList[0].members[3], 'WEST=3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_enum_0027
  * @tc.name c_enum_0027
  * @tc.desc h2dts parseEnum：扩充-enum：具名无 typedef 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_enum_0027', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseEnum(`enum Plain { P1, P2, P3, P4, P5 };`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Plain');
      assert.strictEqual(objList[0].alias, undefined);
      assert.strictEqual(objList[0].members.length, 5);
      assert.strictEqual(objList[0].members[0], 'P1');
      assert.strictEqual(objList[0].members[1], 'P2');
      assert.strictEqual(objList[0].members[2], 'P3');
      assert.strictEqual(objList[0].members[3], 'P4');
      assert.strictEqual(objList[0].members[4], 'P5');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_enum_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_enum_0027 执行异常: ${String(err)}`);
    }
  });

});
