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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part11.');

  /**
  * @tc.number c_func_0512
  * @tc.name c_func_0512
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned short, signed char, signed short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0512', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0101(unsigned short a, signed char b, signed short c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0101');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0512 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0512 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0513
  * @tc.name c_func_0513
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned long, unsigned long long, signed char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0513', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0110(unsigned long a, unsigned long long b, signed char c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0110');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0513 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0513 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0514
  * @tc.name c_func_0514
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned long, signed short, signed long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0514', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0111(unsigned long a, signed short b, signed long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0111');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0514 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0514 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0515
  * @tc.name c_func_0515
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned long long, signed char, signed short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0515', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0120(unsigned long long a, signed char b, signed short c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0120');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0515 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0515 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0516
  * @tc.name c_func_0516
  * @tc.desc h2dts parseFunction：扩充-三参组合：(unsigned long long, signed long, wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0516', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0121(unsigned long long a, signed long b, wchar_t c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0121');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0516 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0516 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0517
  * @tc.name c_func_0517
  * @tc.desc h2dts parseFunction：扩充-三参组合：(signed char, signed short, signed long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0517', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0130(signed char a, signed short b, signed long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0130');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0517 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0517 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0518
  * @tc.name c_func_0518
  * @tc.desc h2dts parseFunction：扩充-三参组合：(signed char, wchar_t, char16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0518', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0131(signed char a, wchar_t b, char16_t c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0131');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0518 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0518 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0519
  * @tc.name c_func_0519
  * @tc.desc h2dts parseFunction：扩充-三参组合：(signed short, signed long, wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0519', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0140(signed short a, signed long b, wchar_t c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0140');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0519 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0519 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0520
  * @tc.name c_func_0520
  * @tc.desc h2dts parseFunction：扩充-三参组合：(signed short, char16_t, char32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0520', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0141(signed short a, char16_t b, char32_t c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0141');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0520 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0520 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0521
  * @tc.name c_func_0521
  * @tc.desc h2dts parseFunction：扩充-三参组合：(signed long, wchar_t, char16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0521', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0150(signed long a, wchar_t b, char16_t c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0150');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0521 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0521 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0522
  * @tc.name c_func_0522
  * @tc.desc h2dts parseFunction：扩充-三参组合：(signed long, char32_t, size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0522', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0151(signed long a, char32_t b, size_t c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0151');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0522 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0522 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0523
  * @tc.name c_func_0523
  * @tc.desc h2dts parseFunction：扩充-三参组合：(wchar_t, char16_t, char32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0523', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0160(wchar_t a, char16_t b, char32_t c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0160');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0523 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0523 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0524
  * @tc.name c_func_0524
  * @tc.desc h2dts parseFunction：扩充-三参组合：(wchar_t, size_t, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0524', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0161(wchar_t a, size_t b, int c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0161');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'int');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0524 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0524 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0525
  * @tc.name c_func_0525
  * @tc.desc h2dts parseFunction：扩充-三参组合：(char16_t, char32_t, size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0525', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0170(char16_t a, char32_t b, size_t c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0170');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0525 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0525 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0526
  * @tc.name c_func_0526
  * @tc.desc h2dts parseFunction：扩充-三参组合：(char16_t, int, char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0526', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0171(char16_t a, int b, char c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0171');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'char');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0526 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0527
  * @tc.name c_func_0527
  * @tc.desc h2dts parseFunction：扩充-三参组合：(char32_t, size_t, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0527', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0180(char32_t a, size_t b, int c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0180');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'int');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0527 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0528
  * @tc.name c_func_0528
  * @tc.desc h2dts parseFunction：扩充-三参组合：(char32_t, char, short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0528', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0181(char32_t a, char b, short c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0181');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'short');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0528 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0529
  * @tc.name c_func_0529
  * @tc.desc h2dts parseFunction：扩充-三参组合：(size_t, int, char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0529', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0190(size_t a, int b, char c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0190');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'char');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0529 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0529 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0530
  * @tc.name c_func_0530
  * @tc.desc h2dts parseFunction：扩充-三参组合：(size_t, short, long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0530', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pt0191(size_t a, short b, long c);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pt0191');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0530 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0531
  * @tc.name c_func_0531
  * @tc.desc h2dts parseFunction：扩充-四参组合：(int, short, long long, double) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0531', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq000(int a, short b, long long c, double d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'double');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0531 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0531 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0532
  * @tc.name c_func_0532
  * @tc.desc h2dts parseFunction：扩充-四参组合：(char, long, float, bool) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0532', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq001(char a, long b, float c, bool d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'float');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'bool');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0532 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0533
  * @tc.name c_func_0533
  * @tc.desc h2dts parseFunction：扩充-四参组合：(short, long long, double, unsigned int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0533', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq002(short a, long long b, double c, unsigned int d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'double');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0533 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0533 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0534
  * @tc.name c_func_0534
  * @tc.desc h2dts parseFunction：扩充-四参组合：(long, float, bool, unsigned char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0534', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq003(long a, float b, bool c, unsigned char d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'float');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'bool');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0534 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0534 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0535
  * @tc.name c_func_0535
  * @tc.desc h2dts parseFunction：扩充-四参组合：(long long, double, unsigned int, unsigned short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0535', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq004(long long a, double b, unsigned int c, unsigned short d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'double');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0535 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0536
  * @tc.name c_func_0536
  * @tc.desc h2dts parseFunction：扩充-四参组合：(float, bool, unsigned char, unsigned long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0536', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq005(float a, bool b, unsigned char c, unsigned long d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'bool');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0536 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0537
  * @tc.name c_func_0537
  * @tc.desc h2dts parseFunction：扩充-四参组合：(double, unsigned int, unsigned short, unsigned long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0537', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq006(double a, unsigned int b, unsigned short c, unsigned long long d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0537 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0538
  * @tc.name c_func_0538
  * @tc.desc h2dts parseFunction：扩充-四参组合：(bool, unsigned char, unsigned long, signed char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0538', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq007(bool a, unsigned char b, unsigned long c, signed char d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0538 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0539
  * @tc.name c_func_0539
  * @tc.desc h2dts parseFunction：扩充-四参组合：(unsigned int, unsigned short, unsigned long long, signed short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0539', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq008(unsigned int a, unsigned short b, unsigned long long c, signed short d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0539 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0540
  * @tc.name c_func_0540
  * @tc.desc h2dts parseFunction：扩充-四参组合：(unsigned char, unsigned long, signed char, signed long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0540', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq009(unsigned char a, unsigned long b, signed char c, signed long d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0540 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0541
  * @tc.name c_func_0541
  * @tc.desc h2dts parseFunction：扩充-四参组合：(unsigned short, unsigned long long, signed short, wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0541', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq010(unsigned short a, unsigned long long b, signed short c, wchar_t d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0541 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0542
  * @tc.name c_func_0542
  * @tc.desc h2dts parseFunction：扩充-四参组合：(unsigned long, signed char, signed long, char16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0542', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq011(unsigned long a, signed char b, signed long c, char16_t d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0542 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0542 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0543
  * @tc.name c_func_0543
  * @tc.desc h2dts parseFunction：扩充-四参组合：(unsigned long long, signed short, wchar_t, char32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0543', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq012(unsigned long long a, signed short b, wchar_t c, char32_t d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0543 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0543 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0544
  * @tc.name c_func_0544
  * @tc.desc h2dts parseFunction：扩充-四参组合：(signed char, signed long, char16_t, size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0544', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq013(signed char a, signed long b, char16_t c, size_t d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0544 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0544 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0545
  * @tc.name c_func_0545
  * @tc.desc h2dts parseFunction：扩充-四参组合：(signed short, wchar_t, char32_t, int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0545', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq014(signed short a, wchar_t b, char32_t c, int d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq014');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'int');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0545 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0545 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0546
  * @tc.name c_func_0546
  * @tc.desc h2dts parseFunction：扩充-四参组合：(signed long, char16_t, size_t, char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0546', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq015(signed long a, char16_t b, size_t c, char d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq015');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'char');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0546 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0546 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0547
  * @tc.name c_func_0547
  * @tc.desc h2dts parseFunction：扩充-四参组合：(wchar_t, char32_t, int, short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0547', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq016(wchar_t a, char32_t b, int c, short d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq016');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'int');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'short');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0547 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0547 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0548
  * @tc.name c_func_0548
  * @tc.desc h2dts parseFunction：扩充-四参组合：(char16_t, size_t, char, long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0548', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq017(char16_t a, size_t b, char c, long d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq017');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'char');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'long');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0548 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0548 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0549
  * @tc.name c_func_0549
  * @tc.desc h2dts parseFunction：扩充-四参组合：(char32_t, int, short, long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0549', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq018(char32_t a, int b, short c, long long d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq018');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'short');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'long long');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0549 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0549 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0550
  * @tc.name c_func_0550
  * @tc.desc h2dts parseFunction：扩充-四参组合：(size_t, char, long, float) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0550', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pq019(size_t a, char b, long c, float d);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pq019');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'long');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'float');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0550 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0550 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0551
  * @tc.name c_func_0551
  * @tc.desc h2dts parseFunction：扩充-五参组合：int + long + double + unsigned char + unsigned long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0551', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf000(int a0, long a1, double a2, unsigned char a3, unsigned long long a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'double');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0551 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0551 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0552
  * @tc.name c_func_0552
  * @tc.desc h2dts parseFunction：扩充-五参组合：char + long long + bool + unsigned short + signed char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0552', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf001(char a0, long long a1, bool a2, unsigned short a3, signed char a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'bool');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0552 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0552 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0553
  * @tc.name c_func_0553
  * @tc.desc h2dts parseFunction：扩充-五参组合：short + float + unsigned int + unsigned long + signed short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0553', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf002(short a0, float a1, unsigned int a2, unsigned long a3, signed short a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'float');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0553 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0553 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0554
  * @tc.name c_func_0554
  * @tc.desc h2dts parseFunction：扩充-五参组合：long + double + unsigned char + unsigned long long + signed long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0554', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf003(long a0, double a1, unsigned char a2, unsigned long long a3, signed long a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'double');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0554 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0554 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0555
  * @tc.name c_func_0555
  * @tc.desc h2dts parseFunction：扩充-五参组合：long long + bool + unsigned short + signed char + wchar_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0555', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf004(long long a0, bool a1, unsigned short a2, signed char a3, wchar_t a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'bool');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0555 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0555 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0556
  * @tc.name c_func_0556
  * @tc.desc h2dts parseFunction：扩充-五参组合：float + unsigned int + unsigned long + signed short + char16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0556', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf005(float a0, unsigned int a1, unsigned long a2, signed short a3, char16_t a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0556 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0556 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0557
  * @tc.name c_func_0557
  * @tc.desc h2dts parseFunction：扩充-五参组合：double + unsigned char + unsigned long long + signed long + char32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0557', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf006(double a0, unsigned char a1, unsigned long long a2, signed long a3, char32_t a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0557 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0557 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0558
  * @tc.name c_func_0558
  * @tc.desc h2dts parseFunction：扩充-五参组合：bool + unsigned short + signed char + wchar_t + size_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0558', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf007(bool a0, unsigned short a1, signed char a2, wchar_t a3, size_t a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0558 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0558 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0559
  * @tc.name c_func_0559
  * @tc.desc h2dts parseFunction：扩充-五参组合：unsigned int + unsigned long + signed short + char16_t + int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0559', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf008(unsigned int a0, unsigned long a1, signed short a2, char16_t a3, int a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'int');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0559 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0559 执行异常: ${String(err)}`);
    }
  });

});
