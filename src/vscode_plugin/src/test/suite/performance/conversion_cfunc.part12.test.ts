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
  vscode.window.showInformationMessage('Start Performance_C_Func_Suite part12.');

  /**
  * @tc.number c_func_0560
  * @tc.name c_func_0560
  * @tc.desc h2dts parseFunction：扩充-五参组合：unsigned char + unsigned long long + signed long + char32_t + char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0560', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf009(unsigned char a0, unsigned long long a1, signed long a2, char32_t a3, char a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'char');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0560 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0560 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0561
  * @tc.name c_func_0561
  * @tc.desc h2dts parseFunction：扩充-五参组合：unsigned short + signed char + wchar_t + size_t + short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0561', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf010(unsigned short a0, signed char a1, wchar_t a2, size_t a3, short a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'short');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0561 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0561 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0562
  * @tc.name c_func_0562
  * @tc.desc h2dts parseFunction：扩充-五参组合：unsigned long + signed short + char16_t + int + long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0562', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf011(unsigned long a0, signed short a1, char16_t a2, int a3, long a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'int');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'long');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0562 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0562 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0563
  * @tc.name c_func_0563
  * @tc.desc h2dts parseFunction：扩充-五参组合：unsigned long long + signed long + char32_t + char + long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0563', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf012(unsigned long long a0, signed long a1, char32_t a2, char a3, long long a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'char');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'long long');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0563 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0563 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0564
  * @tc.name c_func_0564
  * @tc.desc h2dts parseFunction：扩充-五参组合：signed char + wchar_t + size_t + short + float 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0564', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf013(signed char a0, wchar_t a1, size_t a2, short a3, float a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'short');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'float');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0564 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0564 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0565
  * @tc.name c_func_0565
  * @tc.desc h2dts parseFunction：扩充-五参组合：signed short + char16_t + int + long + double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0565', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf014(signed short a0, char16_t a1, int a2, long a3, double a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf014');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'int');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'double');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0565 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0565 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0566
  * @tc.name c_func_0566
  * @tc.desc h2dts parseFunction：扩充-五参组合：signed long + char32_t + char + long long + bool 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0566', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf015(signed long a0, char32_t a1, char a2, long long a3, bool a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf015');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'char');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'long long');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'bool');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0566 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0566 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0567
  * @tc.name c_func_0567
  * @tc.desc h2dts parseFunction：扩充-五参组合：wchar_t + size_t + short + float + unsigned int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0567', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf016(wchar_t a0, size_t a1, short a2, float a3, unsigned int a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf016');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'short');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'float');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0567 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0567 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0568
  * @tc.name c_func_0568
  * @tc.desc h2dts parseFunction：扩充-五参组合：char16_t + int + long + double + unsigned char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0568', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf017(char16_t a0, int a1, long a2, double a3, unsigned char a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf017');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'double');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0568 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0568 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0569
  * @tc.name c_func_0569
  * @tc.desc h2dts parseFunction：扩充-五参组合：char32_t + char + long long + bool + unsigned short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0569', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf018(char32_t a0, char a1, long long a2, bool a3, unsigned short a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf018');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'char');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'long long');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'bool');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0569 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0569 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0570
  * @tc.name c_func_0570
  * @tc.desc h2dts parseFunction：扩充-五参组合：size_t + short + float + unsigned int + unsigned long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0570', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void pf019(size_t a0, short a1, float a2, unsigned int a3, unsigned long a4);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pf019');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a0');
      assert.strictEqual(funcList[0].parameters[1].type, 'short');
      assert.strictEqual(funcList[0].parameters[1].name, 'a1');
      assert.strictEqual(funcList[0].parameters[2].type, 'float');
      assert.strictEqual(funcList[0].parameters[2].name, 'a2');
      assert.strictEqual(funcList[0].parameters[3].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[3].name, 'a3');
      assert.strictEqual(funcList[0].parameters[4].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[4].name, 'a4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0570 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0570 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0571
  * @tc.name c_func_0571
  * @tc.desc h2dts parseFunction：扩充-数组入参：int[4] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0571', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA000(int arr[4]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '4');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0571 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0571 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0572
  * @tc.name c_func_0572
  * @tc.desc h2dts parseFunction：扩充-数组入参：char[8] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0572', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA001(char arr[8]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '8');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0572 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0572 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0573
  * @tc.name c_func_0573
  * @tc.desc h2dts parseFunction：扩充-数组入参：short[10] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0573', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA002(short arr[10]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '10');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0573 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0573 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0574
  * @tc.name c_func_0574
  * @tc.desc h2dts parseFunction：扩充-数组入参：long[16] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0574', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA003(long arr[16]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '16');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0574 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0574 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0575
  * @tc.name c_func_0575
  * @tc.desc h2dts parseFunction：扩充-数组入参：long long[20] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0575', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA004(long long arr[20]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '20');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0575 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0575 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0576
  * @tc.name c_func_0576
  * @tc.desc h2dts parseFunction：扩充-数组入参：float[32] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0576', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA005(float arr[32]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '32');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0576 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0576 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0577
  * @tc.name c_func_0577
  * @tc.desc h2dts parseFunction：扩充-数组入参：double[64] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0577', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA006(double arr[64]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '64');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0577 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0577 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0578
  * @tc.name c_func_0578
  * @tc.desc h2dts parseFunction：扩充-数组入参：bool[100] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0578', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA007(bool arr[100]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '100');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0578 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0578 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0579
  * @tc.name c_func_0579
  * @tc.desc h2dts parseFunction：扩充-数组入参：unsigned int[128] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0579', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA008(unsigned int arr[128]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '128');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0579 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0579 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0580
  * @tc.name c_func_0580
  * @tc.desc h2dts parseFunction：扩充-数组入参：unsigned char[256] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0580', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA009(unsigned char arr[256]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '256');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0580 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0580 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0581
  * @tc.name c_func_0581
  * @tc.desc h2dts parseFunction：扩充-数组入参：unsigned short[4] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0581', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA010(unsigned short arr[4]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '4');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0581 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0581 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0582
  * @tc.name c_func_0582
  * @tc.desc h2dts parseFunction：扩充-数组入参：unsigned long[8] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0582', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA011(unsigned long arr[8]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '8');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0582 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0582 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0583
  * @tc.name c_func_0583
  * @tc.desc h2dts parseFunction：扩充-数组入参：unsigned long long[10] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0583', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA012(unsigned long long arr[10]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '10');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0583 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0583 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0584
  * @tc.name c_func_0584
  * @tc.desc h2dts parseFunction：扩充-数组入参：signed char[16] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0584', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA013(signed char arr[16]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '16');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0584 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0584 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0585
  * @tc.name c_func_0585
  * @tc.desc h2dts parseFunction：扩充-数组入参：signed short[20] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0585', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA014(signed short arr[20]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA014');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '20');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0585 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0585 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0586
  * @tc.name c_func_0586
  * @tc.desc h2dts parseFunction：扩充-数组入参：signed long[32] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0586', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA015(signed long arr[32]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA015');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '32');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0586 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0586 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0587
  * @tc.name c_func_0587
  * @tc.desc h2dts parseFunction：扩充-数组入参：wchar_t[64] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0587', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA016(wchar_t arr[64]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA016');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '64');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0587 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0587 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0588
  * @tc.name c_func_0588
  * @tc.desc h2dts parseFunction：扩充-数组入参：char16_t[100] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0588', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA017(char16_t arr[100]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA017');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '100');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0588 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0588 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0589
  * @tc.name c_func_0589
  * @tc.desc h2dts parseFunction：扩充-数组入参：char32_t[128] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0589', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA018(char32_t arr[128]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA018');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '128');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0589 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0589 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0590
  * @tc.name c_func_0590
  * @tc.desc h2dts parseFunction：扩充-数组入参：size_t[256] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0590', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA019(size_t arr[256]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA019');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '256');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0590 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0590 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0591
  * @tc.name c_func_0591
  * @tc.desc h2dts parseFunction：扩充-数组入参：int[4] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0591', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA020(int arr[4]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA020');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '4');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0591 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0591 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0592
  * @tc.name c_func_0592
  * @tc.desc h2dts parseFunction：扩充-数组入参：char[8] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0592', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA021(char arr[8]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA021');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '8');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0592 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0592 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0593
  * @tc.name c_func_0593
  * @tc.desc h2dts parseFunction：扩充-数组入参：short[10] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0593', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA022(short arr[10]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA022');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '10');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0593 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0593 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0594
  * @tc.name c_func_0594
  * @tc.desc h2dts parseFunction：扩充-数组入参：long[16] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0594', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA023(long arr[16]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA023');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '16');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0594 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0594 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0595
  * @tc.name c_func_0595
  * @tc.desc h2dts parseFunction：扩充-数组入参：long long[20] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0595', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA024(long long arr[20]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA024');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '20');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0595 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0595 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0596
  * @tc.name c_func_0596
  * @tc.desc h2dts parseFunction：扩充-数组入参：float[32] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0596', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA025(float arr[32]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA025');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '32');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0596 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0596 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0597
  * @tc.name c_func_0597
  * @tc.desc h2dts parseFunction：扩充-数组入参：double[64] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0597', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA026(double arr[64]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA026');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '64');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0597 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0597 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0598
  * @tc.name c_func_0598
  * @tc.desc h2dts parseFunction：扩充-数组入参：bool[100] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0598', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA027(bool arr[100]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA027');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '100');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0598 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0598 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0599
  * @tc.name c_func_0599
  * @tc.desc h2dts parseFunction：扩充-数组入参：unsigned int[128] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0599', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA028(unsigned int arr[128]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA028');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '128');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0599 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0599 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0600
  * @tc.name c_func_0600
  * @tc.desc h2dts parseFunction：扩充-数组入参：unsigned char[256] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0600', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setA029(unsigned char arr[256]);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setA029');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '256');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0600 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0600 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0601
  * @tc.name c_func_0601
  * @tc.desc h2dts parseFunction：扩充-指针入参：char* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0601', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr000(char* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0601 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0601 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0602
  * @tc.name c_func_0602
  * @tc.desc h2dts parseFunction：扩充-指针入参：int* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0602', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr001(int* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0602 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0602 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0603
  * @tc.name c_func_0603
  * @tc.desc h2dts parseFunction：扩充-指针入参：double* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0603', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr002(double* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0603 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0603 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0604
  * @tc.name c_func_0604
  * @tc.desc h2dts parseFunction：扩充-指针入参：float* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0604', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr003(float* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'float*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0604 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0604 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0605
  * @tc.name c_func_0605
  * @tc.desc h2dts parseFunction：扩充-指针入参：long* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0605', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr004(long* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0605 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0605 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0606
  * @tc.name c_func_0606
  * @tc.desc h2dts parseFunction：扩充-指针入参：short* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0606', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr005(short* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'short*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0606 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0606 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0607
  * @tc.name c_func_0607
  * @tc.desc h2dts parseFunction：扩充-指针入参：bool* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0607', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr006(bool* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0607 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0607 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0608
  * @tc.name c_func_0608
  * @tc.desc h2dts parseFunction：扩充-指针入参：wchar_t* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0608', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr007(wchar_t* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0608 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0608 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0609
  * @tc.name c_func_0609
  * @tc.desc h2dts parseFunction：扩充-指针入参：std::string* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0609', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr008(std::string* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0609 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0609 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0610
  * @tc.name c_func_0610
  * @tc.desc h2dts parseFunction：扩充-指针入参：void* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0610', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr009(void* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'void*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0610 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0610 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0611
  * @tc.name c_func_0611
  * @tc.desc h2dts parseFunction：扩充-指针入参：unsigned int* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_func_0611', () => {
    try {
      let funcList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          funcList = parseFunction(`void setPtr010(unsigned int* p);`);
        }
      });
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_func_0611 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_func_0611 执行异常: ${String(err)}`);
    }
  });

});
