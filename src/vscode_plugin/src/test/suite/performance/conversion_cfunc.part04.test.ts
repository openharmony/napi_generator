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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part04.');

  /**
  * @tc.number c_func_0126
  * @tc.name c_func_0126
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0126', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int getR000();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR000');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0127
  * @tc.name c_func_0127
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0127', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`char getR001();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR001');
      assert.strictEqual(funcList[0].returns, 'char');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0128
  * @tc.name c_func_0128
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0128', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`short getR002();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR002');
      assert.strictEqual(funcList[0].returns, 'short');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0129
  * @tc.name c_func_0129
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0129', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`long getR003();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR003');
      assert.strictEqual(funcList[0].returns, 'long');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0130
  * @tc.name c_func_0130
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0130', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`long long getR004();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR004');
      assert.strictEqual(funcList[0].returns, 'long long');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0131
  * @tc.name c_func_0131
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 float 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0131', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`float getR005();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR005');
      assert.strictEqual(funcList[0].returns, 'float');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0132
  * @tc.name c_func_0132
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0132', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`double getR006();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR006');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0133
  * @tc.name c_func_0133
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 bool 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0133', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`bool getR007();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR007');
      assert.strictEqual(funcList[0].returns, 'bool');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0134
  * @tc.name c_func_0134
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0134', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned int getR008();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR008');
      assert.strictEqual(funcList[0].returns, 'unsigned int');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0135
  * @tc.name c_func_0135
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0135', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned char getR009();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR009');
      assert.strictEqual(funcList[0].returns, 'unsigned char');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0136
  * @tc.name c_func_0136
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0136', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned short getR010();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR010');
      assert.strictEqual(funcList[0].returns, 'unsigned short');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0137
  * @tc.name c_func_0137
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0137', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned long getR011();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR011');
      assert.strictEqual(funcList[0].returns, 'unsigned long');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0138
  * @tc.name c_func_0138
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0138', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`unsigned long long getR012();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR012');
      assert.strictEqual(funcList[0].returns, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0139
  * @tc.name c_func_0139
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 signed char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0139', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`signed char getR013();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR013');
      assert.strictEqual(funcList[0].returns, 'signed char');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0140
  * @tc.name c_func_0140
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 signed short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0140', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`signed short getR014();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR014');
      assert.strictEqual(funcList[0].returns, 'signed short');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0141
  * @tc.name c_func_0141
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 signed long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0141', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`signed long getR015();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR015');
      assert.strictEqual(funcList[0].returns, 'signed long');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0142
  * @tc.name c_func_0142
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 wchar_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0142', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`wchar_t getR016();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR016');
      assert.strictEqual(funcList[0].returns, 'wchar_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0143
  * @tc.name c_func_0143
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 char16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0143', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`char16_t getR017();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR017');
      assert.strictEqual(funcList[0].returns, 'char16_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0144
  * @tc.name c_func_0144
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 char32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0144', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`char32_t getR018();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR018');
      assert.strictEqual(funcList[0].returns, 'char32_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0145
  * @tc.name c_func_0145
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 size_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0145', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`size_t getR019();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR019');
      assert.strictEqual(funcList[0].returns, 'size_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0146
  * @tc.name c_func_0146
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 int8_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0146', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int8_t getR020();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR020');
      assert.strictEqual(funcList[0].returns, 'int8_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0147
  * @tc.name c_func_0147
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 int16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0147', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int16_t getR021();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR021');
      assert.strictEqual(funcList[0].returns, 'int16_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0148
  * @tc.name c_func_0148
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 int32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0148', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int32_t getR022();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR022');
      assert.strictEqual(funcList[0].returns, 'int32_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0149
  * @tc.name c_func_0149
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 int64_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0149', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`int64_t getR023();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR023');
      assert.strictEqual(funcList[0].returns, 'int64_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0150
  * @tc.name c_func_0150
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 uint8_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0150', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`uint8_t getR024();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR024');
      assert.strictEqual(funcList[0].returns, 'uint8_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0151
  * @tc.name c_func_0151
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 uint16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0151', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`uint16_t getR025();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR025');
      assert.strictEqual(funcList[0].returns, 'uint16_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0152
  * @tc.name c_func_0152
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 uint32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0152', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`uint32_t getR026();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR026');
      assert.strictEqual(funcList[0].returns, 'uint32_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0153
  * @tc.name c_func_0153
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 uint64_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0153', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`uint64_t getR027();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR027');
      assert.strictEqual(funcList[0].returns, 'uint64_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0154
  * @tc.name c_func_0154
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0154', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::string getR028();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR028');
      assert.strictEqual(funcList[0].returns, 'std::string');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0155
  * @tc.name c_func_0155
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0155', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`string getR029();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR029');
      assert.strictEqual(funcList[0].returns, 'string');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0156
  * @tc.name c_func_0156
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::wstring 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0156', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::wstring getR030();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR030');
      assert.strictEqual(funcList[0].returns, 'std::wstring');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0157
  * @tc.name c_func_0157
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 long double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0157', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`long double getR031();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR031');
      assert.strictEqual(funcList[0].returns, 'long double');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0158
  * @tc.name c_func_0158
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 void 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0158', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void getR032();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR032');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0159
  * @tc.name c_func_0159
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0159', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<int> getR033();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR033');
      assert.strictEqual(funcList[0].returns, 'std::vector<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0160
  * @tc.name c_func_0160
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0160', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<std::string> getR034();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR034');
      assert.strictEqual(funcList[0].returns, 'std::vector<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0161
  * @tc.name c_func_0161
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0161', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<double> getR035();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR035');
      assert.strictEqual(funcList[0].returns, 'std::vector<double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0162
  * @tc.name c_func_0162
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0162', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::vector<bool> getR036();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR036');
      assert.strictEqual(funcList[0].returns, 'std::vector<bool>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0163
  * @tc.name c_func_0163
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::map<std::string,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0163', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<std::string,int> getR037();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR037');
      assert.strictEqual(funcList[0].returns, 'std::map<std::string,int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0164
  * @tc.name c_func_0164
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::map<int,std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0164', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::map<int,std::string> getR038();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR038');
      assert.strictEqual(funcList[0].returns, 'std::map<int,std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0165
  * @tc.name c_func_0165
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::set<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0165', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::set<int> getR039();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR039');
      assert.strictEqual(funcList[0].returns, 'std::set<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0166
  * @tc.name c_func_0166
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::set<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0166', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::set<std::string> getR040();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR040');
      assert.strictEqual(funcList[0].returns, 'std::set<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0167
  * @tc.name c_func_0167
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::list<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0167', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::list<int> getR041();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR041');
      assert.strictEqual(funcList[0].returns, 'std::list<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0168
  * @tc.name c_func_0168
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::list<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0168', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::list<std::string> getR042();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR042');
      assert.strictEqual(funcList[0].returns, 'std::list<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0169
  * @tc.name c_func_0169
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::deque<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0169', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::deque<int> getR043();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR043');
      assert.strictEqual(funcList[0].returns, 'std::deque<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0170
  * @tc.name c_func_0170
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::deque<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0170', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::deque<std::string> getR044();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR044');
      assert.strictEqual(funcList[0].returns, 'std::deque<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0171
  * @tc.name c_func_0171
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::pair<int,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0171', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::pair<int,int> getR045();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR045');
      assert.strictEqual(funcList[0].returns, 'std::pair<int,int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0172
  * @tc.name c_func_0172
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::pair<std::string,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0172', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::pair<std::string,int> getR046();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR046');
      assert.strictEqual(funcList[0].returns, 'std::pair<std::string,int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0173
  * @tc.name c_func_0173
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::tuple<int,int,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0173', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::tuple<int,int,int> getR047();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR047');
      assert.strictEqual(funcList[0].returns, 'std::tuple<int,int,int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0174
  * @tc.name c_func_0174
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::tuple<std::string,int,double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0174', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::tuple<std::string,int,double> getR048();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR048');
      assert.strictEqual(funcList[0].returns, 'std::tuple<std::string,int,double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0175
  * @tc.name c_func_0175
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::queue<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0175', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::queue<int> getR049();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR049');
      assert.strictEqual(funcList[0].returns, 'std::queue<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0176
  * @tc.name c_func_0176
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::stack<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0176', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::stack<int> getR050();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR050');
      assert.strictEqual(funcList[0].returns, 'std::stack<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0177
  * @tc.name c_func_0177
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::priority_queue<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0177', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::priority_queue<int> getR051();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR051');
      assert.strictEqual(funcList[0].returns, 'std::priority_queue<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0178
  * @tc.name c_func_0178
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::multimap<int,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0178', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::multimap<int,int> getR052();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR052');
      assert.strictEqual(funcList[0].returns, 'std::multimap<int,int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0179
  * @tc.name c_func_0179
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::multiset<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0179', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::multiset<int> getR053();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR053');
      assert.strictEqual(funcList[0].returns, 'std::multiset<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0180
  * @tc.name c_func_0180
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_map<std::string,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0180', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::unordered_map<std::string,int> getR054();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR054');
      assert.strictEqual(funcList[0].returns, 'std::unordered_map<std::string,int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0181
  * @tc.name c_func_0181
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_set<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0181', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::unordered_set<int> getR055();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR055');
      assert.strictEqual(funcList[0].returns, 'std::unordered_set<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0182
  * @tc.name c_func_0182
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_multimap<int,int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0182', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::unordered_multimap<int,int> getR056();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR056');
      assert.strictEqual(funcList[0].returns, 'std::unordered_multimap<int,int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0183
  * @tc.name c_func_0183
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_multiset<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0183', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::unordered_multiset<int> getR057();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR057');
      assert.strictEqual(funcList[0].returns, 'std::unordered_multiset<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0184
  * @tc.name c_func_0184
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::array<int,10> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0184', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::array<int,10> getR058();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR058');
      assert.strictEqual(funcList[0].returns, 'std::array<int,10>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0185
  * @tc.name c_func_0185
  * @tc.desc h2dts parseFunction：扩充-返回矩阵：返回类型 std::array<std::string,5> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0185', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`std::array<std::string,5> getR059();`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getR059');
      assert.strictEqual(funcList[0].returns, 'std::array<std::string,5>');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0185 执行异常: ${String(err)}`);
    }
  });

});
