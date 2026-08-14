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
 * - parse：同一源码解析 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 解析 10 次 ≤ 6s（实测约 4.0~4.3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_DTS2CPP_Func_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Func_Suite part07.');

  /**
  * @tc.number dts2cpp_func_0344
  * @tc.name dts2cpp_func_0344
  * @tc.desc dts2cpp funcs 签名 `(a: number[]): void`（1 参数 [number[]] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 number[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0344', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0344.ts',
            `function fnO10(a?: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO10');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0344 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0344 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0345
  * @tc.name dts2cpp_func_0345
  * @tc.desc dts2cpp funcs 签名 `(a: string[]): void`（1 参数 [string[]] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 string[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0345', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0345.ts',
            `function fnO11(a?: string[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO11');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0345 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0345 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0346
  * @tc.name dts2cpp_func_0346
  * @tc.desc dts2cpp funcs 签名 `(a: boolean[]): void`（1 参数 [boolean[]] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 boolean[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0346', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0346.ts',
            `function fnO12(a?: boolean[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO12');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0346 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0346 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0347
  * @tc.name dts2cpp_func_0347
  * @tc.desc dts2cpp funcs 签名 `(a: Array<number>): void`（1 参数 [Array<number>] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 Array<number>。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0347', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0347.ts',
            `function fnO13(a?: Array<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO13');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0347 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0347 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0348
  * @tc.name dts2cpp_func_0348
  * @tc.desc dts2cpp funcs 签名 `(a: Map<string, number>): void`（1 参数 [Map<string, number>] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 Map<string, number>。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0348', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0348.ts',
            `function fnO14(a?: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO14');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0348 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0348 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0349
  * @tc.name dts2cpp_func_0349
  * @tc.desc dts2cpp funcs 签名 `(a: number[]): void`（1 参数 [number[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 number[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0349', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0349.ts',
            `function fnS00(...a: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS00');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0349 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0349 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0350
  * @tc.name dts2cpp_func_0350
  * @tc.desc dts2cpp funcs 签名 `(a: string[]): void`（1 参数 [string[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 string[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0350', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0350.ts',
            `function fnS01(...a: string[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS01');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0350 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0350 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0351
  * @tc.name dts2cpp_func_0351
  * @tc.desc dts2cpp funcs 签名 `(a: boolean[]): void`（1 参数 [boolean[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 boolean[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0351', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0351.ts',
            `function fnS02(...a: boolean[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS02');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0351 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0351 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0352
  * @tc.name dts2cpp_func_0352
  * @tc.desc dts2cpp funcs 签名 `(a: any[]): void`（1 参数 [any[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 any[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0352', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0352.ts',
            `function fnS03(...a: any[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS03');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0352 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0352 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0353
  * @tc.name dts2cpp_func_0353
  * @tc.desc dts2cpp funcs 签名 `(a: unknown[]): void`（1 参数 [unknown[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 unknown[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0353', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0353.ts',
            `function fnS04(...a: unknown[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS04');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0353 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0353 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0354
  * @tc.name dts2cpp_func_0354
  * @tc.desc dts2cpp funcs 签名 `(a: null[]): void`（1 参数 [null[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 null[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0354', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0354.ts',
            `function fnS05(...a: null[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS05');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0354 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0355
  * @tc.name dts2cpp_func_0355
  * @tc.desc dts2cpp funcs 签名 `(a: undefined[]): void`（1 参数 [undefined[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 undefined[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0355', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0355.ts',
            `function fnS06(...a: undefined[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS06');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0355 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0356
  * @tc.name dts2cpp_func_0356
  * @tc.desc dts2cpp funcs 签名 `(a: symbol[]): void`（1 参数 [symbol[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 symbol[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0356', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0356.ts',
            `function fnS07(...a: symbol[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS07');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0356 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0356 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0357
  * @tc.name dts2cpp_func_0357
  * @tc.desc dts2cpp funcs 签名 `(a: bigint[]): void`（1 参数 [bigint[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 bigint[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0357', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0357.ts',
            `function fnS08(...a: bigint[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS08');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0357 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0358
  * @tc.name dts2cpp_func_0358
  * @tc.desc dts2cpp funcs 签名 `(a: object[]): void`（1 参数 [object[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 object[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0358', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0358.ts',
            `function fnS09(...a: object[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS09');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0358 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0359
  * @tc.name dts2cpp_func_0359
  * @tc.desc dts2cpp funcs 签名 `(a: number[][]): void`（1 参数 [number[][]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 number[][]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0359', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0359.ts',
            `function fnS10(...a: number[][]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS10');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[][]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0359 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0360
  * @tc.name dts2cpp_func_0360
  * @tc.desc dts2cpp funcs 签名 `(a: string[][]): void`（1 参数 [string[][]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 string[][]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0360', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0360.ts',
            `function fnS11(...a: string[][]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS11');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[][]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0360 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0360 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0361
  * @tc.name dts2cpp_func_0361
  * @tc.desc dts2cpp funcs 签名 `(a: boolean[][]): void`（1 参数 [boolean[][]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 boolean[][]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0361', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0361.ts',
            `function fnS12(...a: boolean[][]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS12');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean[][]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0361 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0361 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0362
  * @tc.name dts2cpp_func_0362
  * @tc.desc dts2cpp funcs 签名 `(a: Array<number>[]): void`（1 参数 [Array<number>[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 Array<number>[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0362', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0362.ts',
            `function fnS13(...a: Array<number>[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS13');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Array<number>[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0362 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0363
  * @tc.name dts2cpp_func_0363
  * @tc.desc dts2cpp funcs 签名 `(a: Map<string, number>[]): void`（1 参数 [Map<string, number>[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 Map<string, number>[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0363', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0363.ts',
            `function fnS14(...a: Map<string, number>[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnS14');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Map<string, number>[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0363 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0363 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0364
  * @tc.name dts2cpp_func_0364
  * @tc.desc dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 number = 0。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0364', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0364.ts',
            `function fnD0(a: number = 0): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnD0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0364 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0364 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0365
  * @tc.name dts2cpp_func_0365
  * @tc.desc dts2cpp funcs 签名 `(a: string): void`（1 参数 [string] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 string = "x"。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0365', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0365.ts',
            `function fnD1(a: string = "x"): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnD1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0365 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0365 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0366
  * @tc.name dts2cpp_func_0366
  * @tc.desc dts2cpp funcs 签名 `(a: boolean): void`（1 参数 [boolean] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 boolean = true。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0366', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0366.ts',
            `function fnD2(a: boolean = true): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnD2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0366 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0366 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0367
  * @tc.name dts2cpp_func_0367
  * @tc.desc dts2cpp funcs 签名 `(a: "lit"): void`（1 参数 ["lit"] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 "lit" = "lit"。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0367', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0367.ts',
            `function fnD3(a: "lit" = "lit"): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnD3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '"lit"');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0367 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0367 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0368
  * @tc.name dts2cpp_func_0368
  * @tc.desc dts2cpp funcs 签名 `(a: 42): void`（1 参数 [42] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 42 = 42。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0368', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0368.ts',
            `function fnD4(a: 42 = 42): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnD4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '42');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0368 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0368 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0369
  * @tc.name dts2cpp_func_0369
  * @tc.desc dts2cpp funcs 签名 `(: { a: number; b: number }): void`（1 参数 [{ a: number; b: number }] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（对象双成员）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0369', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0369.ts',
            `function fnX0({ a, b }: { a: number; b: number }): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnX0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, '');
      assert.strictEqual(funcItem!.parameters[0].type, '{ a: number; b: number }');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0369 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0369 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0370
  * @tc.name dts2cpp_func_0370
  * @tc.desc dts2cpp funcs 签名 `(: { a: number; b: string; c: boolean }): void`（1 参数 [{ a: number; b: string; c: boolean }] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（对象三成员）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0370', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0370.ts',
            `function fnX1({ a, b, c }: { a: number; b: string; c: boolean }): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnX1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, '');
      assert.strictEqual(funcItem!.parameters[0].type, '{ a: number; b: string; c: boolean }');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0370 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0371
  * @tc.name dts2cpp_func_0371
  * @tc.desc dts2cpp funcs 签名 `(: { a: { b: number } }): void`（1 参数 [{ a: { b: number } }] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（对象嵌套）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0371', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0371.ts',
            `function fnX2({ a: { b } }: { a: { b: number } }): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnX2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, '');
      assert.strictEqual(funcItem!.parameters[0].type, '{ a: { b: number } }');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0371 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0372
  * @tc.name dts2cpp_func_0372
  * @tc.desc dts2cpp funcs 签名 `(: [number, string]): void`（1 参数 [[number, string]] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（元组双元素）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0372', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0372.ts',
            `function fnX3([x, y]: [number, string]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnX3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, '');
      assert.strictEqual(funcItem!.parameters[0].type, '[number, string]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0372 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0373
  * @tc.name dts2cpp_func_0373
  * @tc.desc dts2cpp funcs 签名 `(: [number, string, boolean]): void`（1 参数 [[number, string, boolean]] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（元组三元素）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0373', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0373.ts',
            `function fnX4([x, y, z]: [number, string, boolean]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnX4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, '');
      assert.strictEqual(funcItem!.parameters[0].type, '[number, string, boolean]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0373 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0374
  * @tc.name dts2cpp_func_0374
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：UpperCamel。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0374', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0374.ts',
            `function UpperCamel(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'UpperCamel');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0374 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0375
  * @tc.name dts2cpp_func_0375
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：lowerCamel。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0375', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0375.ts',
            `function lowerCamel(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'lowerCamel');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0375 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0375 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0376
  * @tc.name dts2cpp_func_0376
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：snake_case。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0376', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0376.ts',
            `function snake_case(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'snake_case');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0376 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0376 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0377
  * @tc.name dts2cpp_func_0377
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：Trailing2。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0377', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0377.ts',
            `function Trailing2(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'Trailing2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0377 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0377 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0378
  * @tc.name dts2cpp_func_0378
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：_leading。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0378', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0378.ts',
            `function _leading(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === '_leading');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0378 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0378 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0379
  * @tc.name dts2cpp_func_0379
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：Double__Under。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0379', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0379.ts',
            `function Double__Under(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'Double__Under');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0379 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0379 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0380
  * @tc.name dts2cpp_func_0380
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：f。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0380', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0380.ts',
            `function f(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0380 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0380 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0381
  * @tc.name dts2cpp_func_0381
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：f1。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0381', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0381.ts',
            `function f1(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0381 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0381 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0382
  * @tc.name dts2cpp_func_0382
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：F。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0382', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0382.ts',
            `function F(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'F');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0382 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0382 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0383
  * @tc.name dts2cpp_func_0383
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：F1。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0383', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0383.ts',
            `function F1(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'F1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0383 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0383 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0384
  * @tc.name dts2cpp_func_0384
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：fn。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0384', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0384.ts',
            `function fn(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0384 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0384 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0385
  * @tc.name dts2cpp_func_0385
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：func1。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0385', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0385.ts',
            `function func1(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'func1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0385 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0385 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0386
  * @tc.name dts2cpp_func_0386
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：handler。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0386', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0386.ts',
            `function handler(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'handler');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0386 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0387
  * @tc.name dts2cpp_func_0387
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：callback。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0387', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0387.ts',
            `function callback(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'callback');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0387 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0388
  * @tc.name dts2cpp_func_0388
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：process。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0388', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0388.ts',
            `function process(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'process');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0388 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0389
  * @tc.name dts2cpp_func_0389
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：parse。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0389', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0389.ts',
            `function parse(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'parse');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0389 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0390
  * @tc.name dts2cpp_func_0390
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：convert。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0390', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0390.ts',
            `function convert(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'convert');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0390 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0391
  * @tc.name dts2cpp_func_0391
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：transform。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0391', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0391.ts',
            `function transform(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'transform');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0391 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0391 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0392
  * @tc.name dts2cpp_func_0392
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：serialize。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0392', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0392.ts',
            `function serialize(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'serialize');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0392 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0393
  * @tc.name dts2cpp_func_0393
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：deserialize。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0393', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0393.ts',
            `function deserialize(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'deserialize');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0393 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0394
  * @tc.name dts2cpp_func_0394
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：中文函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0394', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0394.ts',
            `function 中文函数(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === '中文函数');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0394 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0395
  * @tc.name dts2cpp_func_0395
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：getData。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0395', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0395.ts',
            `function getData(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'getData');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0395 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0395 执行异常: ${String(err)}`);
    }
  });

});

