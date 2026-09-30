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
import { doParseTs } from '../../../parse/parsets';
import { ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_DTS2CPP_Func_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Func_Suite part09.');

  /**
  * @tc.number : dts2cpp_func_0473
  * @tc.name : dts2cpp_func_0473
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp473(a: number): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0473', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc473.ts', `function fnExp473(a: number): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp473');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0473 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0474
  * @tc.name : dts2cpp_func_0474
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp474(a: string): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0474', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc474.ts', `function fnExp474(a: string): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp474');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0474 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0475
  * @tc.name : dts2cpp_func_0475
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp475(a: boolean): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0475', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc475.ts', `function fnExp475(a: boolean): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp475');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0475 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0476
  * @tc.name : dts2cpp_func_0476
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp476(a: void): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0476', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc476.ts', `function fnExp476(a: void): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp476');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0476 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0476 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0477
  * @tc.name : dts2cpp_func_0477
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp477(a: any): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0477', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc477.ts', `function fnExp477(a: any): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp477');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0477 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0478
  * @tc.name : dts2cpp_func_0478
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp478(a: unknown): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0478', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc478.ts', `function fnExp478(a: unknown): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp478');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'unknown');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0478 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0478 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0479
  * @tc.name : dts2cpp_func_0479
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp479(a: never): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0479', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc479.ts', `function fnExp479(a: never): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp479');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'never');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0479 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0479 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0480
  * @tc.name : dts2cpp_func_0480
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp480(a: number[]): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0480', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc480.ts', `function fnExp480(a: number[]): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp480');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0480 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0480 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0481
  * @tc.name : dts2cpp_func_0481
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp481(a: string[]): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0481', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc481.ts', `function fnExp481(a: string[]): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp481');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0481 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0481 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0482
  * @tc.name : dts2cpp_func_0482
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp482(a: boolean[]): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0482', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc482.ts', `function fnExp482(a: boolean[]): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp482');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0482 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0482 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0483
  * @tc.name : dts2cpp_func_0483
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp483(a: number[]): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0483', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc483.ts', `function fnExp483(a: number[]): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp483');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0483 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0483 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0484
  * @tc.name : dts2cpp_func_0484
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp484(a: ReadonlyArray<string>): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0484', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc484.ts', `function fnExp484(a: ReadonlyArray<string>): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp484');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'ReadonlyArray<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0484 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0484 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0485
  * @tc.name : dts2cpp_func_0485
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp485(a: Map<string, number>): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0485', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc485.ts', `function fnExp485(a: Map<string, number>): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp485');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0485 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0485 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0486
  * @tc.name : dts2cpp_func_0486
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp486(a: Set<number>): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0486', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc486.ts', `function fnExp486(a: Set<number>): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp486');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Set<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0486 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0486 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0487
  * @tc.name : dts2cpp_func_0487
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp487(a: Record<string, boolean>): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0487', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc487.ts', `function fnExp487(a: Record<string, boolean>): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp487');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Record<string, boolean>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0487 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0487 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0488
  * @tc.name : dts2cpp_func_0488
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp488(a: Promise<string>): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0488', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc488.ts', `function fnExp488(a: Promise<string>): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp488');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0488 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0488 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0489
  * @tc.name : dts2cpp_func_0489
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp489(a: Promise<number>): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0489', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc489.ts', `function fnExp489(a: Promise<number>): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp489');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0489 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0489 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0490
  * @tc.name : dts2cpp_func_0490
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp490(a: [string, number]): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0490', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc490.ts', `function fnExp490(a: [string, number]): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp490');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[string, number]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0490 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0490 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0491
  * @tc.name : dts2cpp_func_0491
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp491(a: [number, number, number]): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0491', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc491.ts', `function fnExp491(a: [number, number, number]): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp491');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[number, number, number]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0491 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0491 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0492
  * @tc.name : dts2cpp_func_0492
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp492(a: (x: number) => void): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0492', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc492.ts', `function fnExp492(a: (x: number) => void): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp492');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(x: number) => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0492 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0492 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0493
  * @tc.name : dts2cpp_func_0493
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp493(a: (a: string, b: number) => boolean): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0493', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc493.ts', `function fnExp493(a: (a: string, b: number) => boolean): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp493');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(a: string, b: number) => boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0493 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0493 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0494
  * @tc.name : dts2cpp_func_0494
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp494(a: number | string): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0494', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc494.ts', `function fnExp494(a: number | string): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp494');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0494 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0494 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0495
  * @tc.name : dts2cpp_func_0495
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp495(a: string | null): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0495', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc495.ts', `function fnExp495(a: string | null): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp495');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string | null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0495 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0495 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0496
  * @tc.name : dts2cpp_func_0496
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp496(a: number | undefined): number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0496', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc496.ts', `function fnExp496(a: number | undefined): number {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp496');
      assert.strictEqual(parseObj.funcs![0].returns, 'number');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | undefined');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0496 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0496 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0497
  * @tc.name : dts2cpp_func_0497
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp497(a: number): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0497', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc497.ts', `function fnExp497(a: number): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp497');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0497 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0497 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0498
  * @tc.name : dts2cpp_func_0498
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp498(a: string): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0498', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc498.ts', `function fnExp498(a: string): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp498');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0498 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0498 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0499
  * @tc.name : dts2cpp_func_0499
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp499(a: boolean): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0499', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc499.ts', `function fnExp499(a: boolean): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp499');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0499 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0499 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0500
  * @tc.name : dts2cpp_func_0500
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp500(a: void): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0500', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc500.ts', `function fnExp500(a: void): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp500');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0500 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0500 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0501
  * @tc.name : dts2cpp_func_0501
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp501(a: any): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0501', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc501.ts', `function fnExp501(a: any): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp501');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0501 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0501 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0502
  * @tc.name : dts2cpp_func_0502
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp502(a: unknown): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0502', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc502.ts', `function fnExp502(a: unknown): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp502');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'unknown');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0502 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0502 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0503
  * @tc.name : dts2cpp_func_0503
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp503(a: never): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0503', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc503.ts', `function fnExp503(a: never): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp503');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'never');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0503 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0503 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0504
  * @tc.name : dts2cpp_func_0504
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp504(a: number[]): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0504', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc504.ts', `function fnExp504(a: number[]): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp504');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0504 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0504 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0505
  * @tc.name : dts2cpp_func_0505
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp505(a: string[]): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0505', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc505.ts', `function fnExp505(a: string[]): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp505');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0505 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0505 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0506
  * @tc.name : dts2cpp_func_0506
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp506(a: boolean[]): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0506', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc506.ts', `function fnExp506(a: boolean[]): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp506');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0506 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0506 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0507
  * @tc.name : dts2cpp_func_0507
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp507(a: number[]): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0507', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseFunc507.ts', `function fnExp507(a: number[]): string {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp507');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0507 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0507 执行异常: ${String(err)}`);
    }
  });
});
