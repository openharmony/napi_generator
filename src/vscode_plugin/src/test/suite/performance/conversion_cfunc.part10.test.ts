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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part10.');

  /**
  * @tc.number c_func_0460
  * @tc.name c_func_0460
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint8_t, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0460', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp024006(uint8_t a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp024006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0460 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0461
  * @tc.name c_func_0461
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint16_t, uint32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0461', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp025001(uint16_t a, uint32_t b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp025001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0461 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0462
  * @tc.name c_func_0462
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint16_t, uint64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0462', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp025002(uint16_t a, uint64_t b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp025002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0462 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0463
  * @tc.name c_func_0463
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint16_t, std::string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0463', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp025003(uint16_t a, std::string b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp025003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0463 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0464
  * @tc.name c_func_0464
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint16_t, string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0464', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp025004(uint16_t a, string b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp025004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0464 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0465
  * @tc.name c_func_0465
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint16_t, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0465', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp025005(uint16_t a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp025005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0465 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0466
  * @tc.name c_func_0466
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint16_t, char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0466', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp025006(uint16_t a, char b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp025006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0466 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0467
  * @tc.name c_func_0467
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint32_t, uint64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0467', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp026001(uint32_t a, uint64_t b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp026001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0467 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0468
  * @tc.name c_func_0468
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint32_t, std::string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0468', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp026002(uint32_t a, std::string b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp026002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0468 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0469
  * @tc.name c_func_0469
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint32_t, string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0469', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp026003(uint32_t a, string b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp026003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0469 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0470
  * @tc.name c_func_0470
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint32_t, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0470', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp026004(uint32_t a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp026004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0470 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0471
  * @tc.name c_func_0471
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint32_t, char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0471', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp026005(uint32_t a, char b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp026005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0471 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0471 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0472
  * @tc.name c_func_0472
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint32_t, short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0472', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp026006(uint32_t a, short b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp026006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0472 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0472 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0473
  * @tc.name c_func_0473
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint64_t, std::string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0473', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp027001(uint64_t a, std::string b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp027001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0473 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0474
  * @tc.name c_func_0474
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint64_t, string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0474', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp027002(uint64_t a, string b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp027002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0474 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0475
  * @tc.name c_func_0475
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint64_t, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0475', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp027003(uint64_t a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp027003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0475 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0476
  * @tc.name c_func_0476
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint64_t, char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0476', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp027004(uint64_t a, char b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp027004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0476 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0476 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0477
  * @tc.name c_func_0477
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint64_t, short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0477', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp027005(uint64_t a, short b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp027005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0477 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0478
  * @tc.name c_func_0478
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint64_t, long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0478', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp027006(uint64_t a, long b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp027006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0478 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0478 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0479
  * @tc.name c_func_0479
  * @tc.desc h2dts parseFunction：扩充-双参组合：(std::string, string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0479', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp028001(std::string a, string b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp028001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0479 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0479 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0480
  * @tc.name c_func_0480
  * @tc.desc h2dts parseFunction：扩充-双参组合：(std::string, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0480', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp028002(std::string a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp028002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0480 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0480 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0481
  * @tc.name c_func_0481
  * @tc.desc h2dts parseFunction：扩充-双参组合：(std::string, char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0481', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp028003(std::string a, char b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp028003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0481 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0481 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0482
  * @tc.name c_func_0482
  * @tc.desc h2dts parseFunction：扩充-双参组合：(std::string, short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0482', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp028004(std::string a, short b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp028004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0482 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0482 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0483
  * @tc.name c_func_0483
  * @tc.desc h2dts parseFunction：扩充-双参组合：(std::string, long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0483', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp028005(std::string a, long b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp028005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0483 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0483 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0484
  * @tc.name c_func_0484
  * @tc.desc h2dts parseFunction：扩充-双参组合：(std::string, long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0484', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp028006(std::string a, long long b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp028006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0484 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0484 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0485
  * @tc.name c_func_0485
  * @tc.desc h2dts parseFunction：扩充-双参组合：(string, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0485', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp029001(string a, int b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp029001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0485 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0485 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0486
  * @tc.name c_func_0486
  * @tc.desc h2dts parseFunction：扩充-双参组合：(string, char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0486', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp029002(string a, char b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp029002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0486 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0486 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0487
  * @tc.name c_func_0487
  * @tc.desc h2dts parseFunction：扩充-双参组合：(string, short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0487', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp029003(string a, short b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp029003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0487 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0487 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0488
  * @tc.name c_func_0488
  * @tc.desc h2dts parseFunction：扩充-双参组合：(string, long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0488', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp029004(string a, long b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp029004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0488 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0488 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0489
  * @tc.name c_func_0489
  * @tc.desc h2dts parseFunction：扩充-双参组合：(string, long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0489', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp029005(string a, long long b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp029005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0489 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0489 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0490
  * @tc.name c_func_0490
  * @tc.desc h2dts parseFunction：扩充-双参组合：(string, float) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0490', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pp029006(string a, float b);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp029006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'float');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0490 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0490 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0491
  * @tc.name c_func_0491
  * @tc.desc h2dts parseFunction：扩充-三参组合：(int, char, short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0491', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0000(int a, char b, short c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'short');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0491 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0491 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0492
  * @tc.name c_func_0492
  * @tc.desc h2dts parseFunction：扩充-三参组合：(int, long, long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0492', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0001(int a, long b, long long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0492 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0492 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0493
  * @tc.name c_func_0493
  * @tc.desc h2dts parseFunction：扩充-三参组合：(char, short, long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0493', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0010(char a, short b, long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0493 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0493 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0494
  * @tc.name c_func_0494
  * @tc.desc h2dts parseFunction：扩充-三参组合：(char, long long, float) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0494', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0011(char a, long long b, float c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'float');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0494 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0494 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0495
  * @tc.name c_func_0495
  * @tc.desc h2dts parseFunction：扩充-三参组合：(short, long, long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0495', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0020(short a, long b, long long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0020');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0495 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0495 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0496
  * @tc.name c_func_0496
  * @tc.desc h2dts parseFunction：扩充-三参组合：(short, float, double) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0496', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0021(short a, float b, double c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0021');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'float');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'double');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0496 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0496 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0497
  * @tc.name c_func_0497
  * @tc.desc h2dts parseFunction：扩充-三参组合：(long, long long, float) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0497', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0030(long a, long long b, float c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0030');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'float');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0497 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0497 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0498
  * @tc.name c_func_0498
  * @tc.desc h2dts parseFunction：扩充-三参组合：(long, double, bool) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0498', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0031(long a, double b, bool c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0031');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'double');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'bool');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0498 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0498 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0499
  * @tc.name c_func_0499
  * @tc.desc h2dts parseFunction：扩充-三参组合：(long long, float, double) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0499', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0040(long long a, float b, double c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0040');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'float');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'double');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0499 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0499 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0500
  * @tc.name c_func_0500
  * @tc.desc h2dts parseFunction：扩充-三参组合：(long long, bool, unsigned int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0500', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0041(long long a, bool b, unsigned int c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0041');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'bool');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0500 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0500 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0501
  * @tc.name c_func_0501
  * @tc.desc h2dts parseFunction：扩充-三参组合：(float, double, bool) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0501', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0050(float a, double b, bool c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0050');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'double');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'bool');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0501 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0501 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0502
  * @tc.name c_func_0502
  * @tc.desc h2dts parseFunction：扩充-三参组合：(float, unsigned int, unsigned char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0502', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0051(float a, unsigned int b, unsigned char c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0051');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0502 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0502 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0503
  * @tc.name c_func_0503
  * @tc.desc h2dts parseFunction：扩充-三参组合：(double, bool, unsigned int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0503', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0060(double a, bool b, unsigned int c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0060');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'bool');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0503 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0503 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0504
  * @tc.name c_func_0504
  * @tc.desc h2dts parseFunction：扩充-三参组合：(double, unsigned char, unsigned short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0504', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0061(double a, unsigned char b, unsigned short c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0061');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0504 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0504 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0505
  * @tc.name c_func_0505
  * @tc.desc h2dts parseFunction：扩充-三参组合：(bool, unsigned int, unsigned char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0505', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0070(bool a, unsigned int b, unsigned char c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0070');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0505 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0505 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0506
  * @tc.name c_func_0506
  * @tc.desc h2dts parseFunction：扩充-三参组合：(bool, unsigned short, unsigned long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0506', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0071(bool a, unsigned short b, unsigned long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0071');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0506 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0506 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0507
  * @tc.name c_func_0507
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned int, unsigned char, unsigned short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0507', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0080(unsigned int a, unsigned char b, unsigned short c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0080');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0507 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0507 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0508
  * @tc.name c_func_0508
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned int, unsigned long, unsigned long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0508', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0081(unsigned int a, unsigned long b, unsigned long long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0081');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0508 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0508 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0509
  * @tc.name c_func_0509
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned char, unsigned short, unsigned long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0509', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0090(unsigned char a, unsigned short b, unsigned long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0090');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0509 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0509 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0510
  * @tc.name c_func_0510
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned char, unsigned long long, signed char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0510', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0091(unsigned char a, unsigned long long b, signed char c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0091');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0510 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0510 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0511
  * @tc.name c_func_0511
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned short, unsigned long, unsigned long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0511', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0100(unsigned short a, unsigned long b, unsigned long long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0100');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0511 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0511 执行异常: ${String(err)}`);
    }
  });

});
