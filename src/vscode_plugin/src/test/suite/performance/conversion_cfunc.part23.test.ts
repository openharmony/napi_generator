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

suite('Performance_C_Func_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part23.');

  /**
  * @tc.number c_func_1127
  * @tc.name c_func_1127
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：int[2][3] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1127', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD000(int arr[2][3]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '2');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '3');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1128
  * @tc.name c_func_1128
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：int[4][5][6] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1128', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD001(int arr[4][5][6]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '4');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '5');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, '6');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1129
  * @tc.name c_func_1129
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：double[3][3] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1129', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD002(double arr[3][3]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '3');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '3');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1130
  * @tc.name c_func_1130
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：double[2][4][8] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1130', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD003(double arr[2][4][8]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '2');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '4');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, '8');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1131
  * @tc.name c_func_1131
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：char[10][10] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1131', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD004(char arr[10][10]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '10');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '10');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1132
  * @tc.name c_func_1132
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：char[5][5][5] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1132', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD005(char arr[5][5][5]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '5');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '5');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, '5');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1133
  * @tc.name c_func_1133
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：float[4][4] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1133', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD006(float arr[4][4]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '4');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '4');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1134
  * @tc.name c_func_1134
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：float[2][6][3] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1134', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD007(float arr[2][6][3]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '2');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '6');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, '3');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1135
  * @tc.name c_func_1135
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：std::string[3][3] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1135', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD008(std::string arr[3][3]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '3');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '3');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1136
  * @tc.name c_func_1136
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：std::string[2][2][2] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1136', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD009(std::string arr[2][2][2]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '2');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '2');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, '2');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1137
  * @tc.name c_func_1137
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：long[6][6] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1137', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD010(long arr[6][6]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '6');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '6');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1138
  * @tc.name c_func_1138
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：long long[3][3][3] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1138', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD011(long long arr[3][3][3]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '3');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '3');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, '3');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1139
  * @tc.name c_func_1139
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：short[8][4] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1139', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD012(short arr[8][4]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '8');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '4');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1140
  * @tc.name c_func_1140
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：unsigned int[5][5] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1140', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD013(unsigned int arr[5][5]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '5');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '5');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1141
  * @tc.name c_func_1141
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：bool[4][4] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1141', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD014(bool arr[4][4]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD014');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '4');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '4');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1142
  * @tc.name c_func_1142
  * @tc.desc h2dts parseFunction：类型覆盖-多维数组：wchar_t[3][3] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1142', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setD015(wchar_t arr[3][3]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setD015');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '3');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '3');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1143
  * @tc.name c_func_1143
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：std::vector<int>[4] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1143', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA000(std::vector<int>[4] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '4');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, 'arr');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1144
  * @tc.name c_func_1144
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：std::vector<std::string>[3] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1144', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA001(std::vector<std::string>[3] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '3');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, 'arr');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1145
  * @tc.name c_func_1145
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：std::map<std::string, int>[2] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1145', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA002(std::map<std::string, int>[2] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, 'int');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, '2');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.strictEqual(funcList[0].parameters[4].type, 'arr');
      assert.strictEqual(funcList[0].parameters[4].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1146
  * @tc.name c_func_1146
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：std::set<int>[5] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1146', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA003(std::set<int>[5] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '5');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, 'arr');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1147
  * @tc.name c_func_1147
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：std::string[8] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1147', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA004(std::string[8] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, '8');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, 'arr');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1148
  * @tc.name c_func_1148
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：char[16] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1148', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA005(char[16] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, '16');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, 'arr');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1149
  * @tc.name c_func_1149
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：std::shared_ptr<int>[4] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1149', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA006(std::shared_ptr<int>[4] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '4');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, 'arr');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1150
  * @tc.name c_func_1150
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：std::optional<int>[6] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1150', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA007(std::optional<int>[6] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '6');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, 'arr');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1151
  * @tc.name c_func_1151
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：std::unique_ptr<std::string>[3] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1151', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA008(std::unique_ptr<std::string>[3] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '3');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, 'arr');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1152
  * @tc.name c_func_1152
  * @tc.desc h2dts parseFunction：类型覆盖-容器数组：std::deque<int>[2] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_1152', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setCA009(std::deque<int>[2] arr);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCA009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::deque');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '2');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, 'arr');
      assert.strictEqual(funcList[0].parameters[3].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_1152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_1152 执行异常: ${String(err)}`);
    }
  });

});
