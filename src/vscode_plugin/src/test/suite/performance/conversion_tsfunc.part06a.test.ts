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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Func_Suite part06.');

  /**
  * @tc.number dts2cpp_func_0254
  * @tc.name dts2cpp_func_0254
  * @tc.desc dts2cpp funcs 签名 `(a: null, b: undefined, c: symbol): void`（3 参数 [null, undefined, symbol] → 返回 void）的解析结果与性能。扩充-三参矩阵：(null, undefined, symbol)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0254', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0254.ts',
            `function fnT05K0(a: null, b: undefined, c: symbol): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT05K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0255
  * @tc.name dts2cpp_func_0255
  * @tc.desc dts2cpp funcs 签名 `(a: null, b: bigint, c: object): void`（3 参数 [null, bigint, object] → 返回 void）的解析结果与性能。扩充-三参矩阵：(null, bigint, object)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0255', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0255.ts',
            `function fnT05K1(a: null, b: bigint, c: object): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT05K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'object');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0256
  * @tc.name dts2cpp_func_0256
  * @tc.desc dts2cpp funcs 签名 `(a: undefined, b: symbol, c: bigint): void`（3 参数 [undefined, symbol, bigint] → 返回 void）的解析结果与性能。扩充-三参矩阵：(undefined, symbol, bigint)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0256', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0256.ts',
            `function fnT06K0(a: undefined, b: symbol, c: bigint): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT06K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0257
  * @tc.name dts2cpp_func_0257
  * @tc.desc dts2cpp funcs 签名 `(a: undefined, b: object, c: number[]): void`（3 参数 [undefined, object, number[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(undefined, object, number[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0257', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0257.ts',
            `function fnT06K1(a: undefined, b: object, c: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT06K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'object');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0258
  * @tc.name dts2cpp_func_0258
  * @tc.desc dts2cpp funcs 签名 `(a: symbol, b: bigint, c: object): void`（3 参数 [symbol, bigint, object] → 返回 void）的解析结果与性能。扩充-三参矩阵：(symbol, bigint, object)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0258', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0258.ts',
            `function fnT07K0(a: symbol, b: bigint, c: object): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT07K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'object');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0259
  * @tc.name dts2cpp_func_0259
  * @tc.desc dts2cpp funcs 签名 `(a: symbol, b: number[], c: string[]): void`（3 参数 [symbol, number[], string[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(symbol, number[], string[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0259', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0259.ts',
            `function fnT07K1(a: symbol, b: number[], c: string[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT07K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0260
  * @tc.name dts2cpp_func_0260
  * @tc.desc dts2cpp funcs 签名 `(a: bigint, b: object, c: number[]): void`（3 参数 [bigint, object, number[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(bigint, object, number[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0260', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0260.ts',
            `function fnT08K0(a: bigint, b: object, c: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT08K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'object');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0261
  * @tc.name dts2cpp_func_0261
  * @tc.desc dts2cpp funcs 签名 `(a: bigint, b: string[], c: boolean[]): void`（3 参数 [bigint, string[], boolean[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(bigint, string[], boolean[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0261', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0261.ts',
            `function fnT08K1(a: bigint, b: string[], c: boolean[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT08K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0262
  * @tc.name dts2cpp_func_0262
  * @tc.desc dts2cpp funcs 签名 `(a: object, b: number[], c: string[]): void`（3 参数 [object, number[], string[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(object, number[], string[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0262', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0262.ts',
            `function fnT09K0(a: object, b: number[], c: string[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT09K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0263
  * @tc.name dts2cpp_func_0263
  * @tc.desc dts2cpp funcs 签名 `(a: object, b: boolean[], c: Array<number>): void`（3 参数 [object, boolean[], Array<number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(object, boolean[], Array<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0263', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0263.ts',
            `function fnT09K1(a: object, b: boolean[], c: Array<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT09K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean[]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0264
  * @tc.name dts2cpp_func_0264
  * @tc.desc dts2cpp funcs 签名 `(a: number[], b: string[], c: boolean[]): void`（3 参数 [number[], string[], boolean[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(number[], string[], boolean[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0264', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0264.ts',
            `function fnT10K0(a: number[], b: string[], c: boolean[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT10K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0265
  * @tc.name dts2cpp_func_0265
  * @tc.desc dts2cpp funcs 签名 `(a: number[], b: Array<number>, c: Map<string, number>): void`（3 参数 [number[], Array<number>, Map<string, number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(number[], Array<number>, Map<string, number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0265', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0265.ts',
            `function fnT10K1(a: number[], b: Array<number>, c: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT10K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Array<number>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0266
  * @tc.name dts2cpp_func_0266
  * @tc.desc dts2cpp funcs 签名 `(a: string[], b: boolean[], c: Array<number>): void`（3 参数 [string[], boolean[], Array<number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(string[], boolean[], Array<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0266', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0266.ts',
            `function fnT11K0(a: string[], b: boolean[], c: Array<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT11K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean[]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0267
  * @tc.name dts2cpp_func_0267
  * @tc.desc dts2cpp funcs 签名 `(a: string[], b: Map<string, number>, c: Set<number>): void`（3 参数 [string[], Map<string, number>, Set<number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(string[], Map<string, number>, Set<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0267', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0267.ts',
            `function fnT11K1(a: string[], b: Map<string, number>, c: Set<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT11K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Set<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0268
  * @tc.name dts2cpp_func_0268
  * @tc.desc dts2cpp funcs 签名 `(a: boolean[], b: Array<number>, c: Map<string, number>): void`（3 参数 [boolean[], Array<number>, Map<string, number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(boolean[], Array<number>, Map<string, number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0268', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0268.ts',
            `function fnT12K0(a: boolean[], b: Array<number>, c: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT12K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Array<number>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0269
  * @tc.name dts2cpp_func_0269
  * @tc.desc dts2cpp funcs 签名 `(a: boolean[], b: Set<number>, c: Record<string, string>): void`（3 参数 [boolean[], Set<number>, Record<string, string>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(boolean[], Set<number>, Record<string, string>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0269', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0269.ts',
            `function fnT12K1(a: boolean[], b: Set<number>, c: Record<string, string>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT12K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Set<number>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Record<string, string>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0270
  * @tc.name dts2cpp_func_0270
  * @tc.desc dts2cpp funcs 签名 `(a: Array<number>, b: Map<string, number>, c: Set<number>): void`（3 参数 [Array<number>, Map<string, number>, Set<number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Array<number>, Map<string, number>, Set<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0270', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0270.ts',
            `function fnT13K0(a: Array<number>, b: Map<string, number>, c: Set<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT13K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Array<number>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Set<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0271
  * @tc.name dts2cpp_func_0271
  * @tc.desc dts2cpp funcs 签名 `(a: Array<number>, b: Record<string, string>, c: Promise<string>): void`（3 参数 [Array<number>, Record<string, string>, Promise<string>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Array<number>, Record<string, string>, Promise<string>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0271', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0271.ts',
            `function fnT13K1(a: Array<number>, b: Record<string, string>, c: Promise<string>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT13K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Array<number>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Record<string, string>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Promise<string>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0272
  * @tc.name dts2cpp_func_0272
  * @tc.desc dts2cpp funcs 签名 `(a: Map<string, number>, b: Set<number>, c: Record<string, string>): void`（3 参数 [Map<string, number>, Set<number>, Record<string, string>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Map<string, number>, Set<number>, Record<string, string>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0272', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0272.ts',
            `function fnT14K0(a: Map<string, number>, b: Set<number>, c: Record<string, string>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT14K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Set<number>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Record<string, string>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0272 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0273
  * @tc.name dts2cpp_func_0273
  * @tc.desc dts2cpp funcs 签名 `(a: Map<string, number>, b: Promise<string>, c: [string, number]): void`（3 参数 [Map<string, number>, Promise<string>, [string, number]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Map<string, number>, Promise<string>, [string, number])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0273', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0273.ts',
            `function fnT14K1(a: Map<string, number>, b: Promise<string>, c: [string, number]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT14K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Promise<string>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, '[string, number]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0274
  * @tc.name dts2cpp_func_0274
  * @tc.desc dts2cpp funcs 签名 `(a: Set<number>, b: Record<string, string>, c: Promise<string>): void`（3 参数 [Set<number>, Record<string, string>, Promise<string>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Set<number>, Record<string, string>, Promise<string>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0274', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0274.ts',
            `function fnT15K0(a: Set<number>, b: Record<string, string>, c: Promise<string>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT15K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Set<number>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Record<string, string>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Promise<string>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0275
  * @tc.name dts2cpp_func_0275
  * @tc.desc dts2cpp funcs 签名 `(a: Set<number>, b: [string, number], c: (a: number) => void): void`（3 参数 [Set<number>, [string, number], (a: number) => void] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Set<number>, [string, number], (a: number) => void)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0275', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0275.ts',
            `function fnT15K1(a: Set<number>, b: [string, number], c: (a: number) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT15K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Set<number>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, '[string, number]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, '(a: number) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0276
  * @tc.name dts2cpp_func_0276
  * @tc.desc dts2cpp funcs 签名 `(a: Record<string, string>, b: Promise<string>, c: [string, number]): void`（3 参数 [Record<string, string>, Promise<string>, [string, number]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Record<string, string>, Promise<string>, [string, number])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0276', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0276.ts',
            `function fnT16K0(a: Record<string, string>, b: Promise<string>, c: [string, number]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT16K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Record<string, string>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Promise<string>');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, '[string, number]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0276 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0276 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0277
  * @tc.name dts2cpp_func_0277
  * @tc.desc dts2cpp funcs 签名 `(a: Record<string, string>, b: (a: number) => void, c: number): void`（3 参数 [Record<string, string>, (a: number) => void, number] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Record<string, string>, (a: number) => void, number)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0277', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0277.ts',
            `function fnT16K1(a: Record<string, string>, b: (a: number) => void, c: number): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT16K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Record<string, string>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, '(a: number) => void');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'number');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0277 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0277 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0278
  * @tc.name dts2cpp_func_0278
  * @tc.desc dts2cpp funcs 签名 `(a: Promise<string>, b: [string, number], c: (a: number) => void): void`（3 参数 [Promise<string>, [string, number], (a: number) => void] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Promise<string>, [string, number], (a: number) => void)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0278', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0278.ts',
            `function fnT17K0(a: Promise<string>, b: [string, number], c: (a: number) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT17K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Promise<string>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, '[string, number]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, '(a: number) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0278 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0279
  * @tc.name dts2cpp_func_0279
  * @tc.desc dts2cpp funcs 签名 `(a: Promise<string>, b: number, c: string): void`（3 参数 [Promise<string>, number, string] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Promise<string>, number, string)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0279', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0279.ts',
            `function fnT17K1(a: Promise<string>, b: number, c: string): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT17K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Promise<string>');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'string');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0279 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0280
  * @tc.name dts2cpp_func_0280
  * @tc.desc dts2cpp funcs 签名 `(a: [string, number], b: (a: number) => void, c: number): void`（3 参数 [[string, number], (a: number) => void, number] → 返回 void）的解析结果与性能。扩充-三参矩阵：([string, number], (a: number) => void, number)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0280', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0280.ts',
            `function fnT18K0(a: [string, number], b: (a: number) => void, c: number): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT18K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '[string, number]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, '(a: number) => void');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'number');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0280 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0280 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0281
  * @tc.name dts2cpp_func_0281
  * @tc.desc dts2cpp funcs 签名 `(a: [string, number], b: string, c: boolean): void`（3 参数 [[string, number], string, boolean] → 返回 void）的解析结果与性能。扩充-三参矩阵：([string, number], string, boolean)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0281', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0281.ts',
            `function fnT18K1(a: [string, number], b: string, c: boolean): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT18K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '[string, number]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'boolean');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0281 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0281 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0282
  * @tc.name dts2cpp_func_0282
  * @tc.desc dts2cpp funcs 签名 `(a: (a: number) => void, b: number, c: string): void`（3 参数 [(a: number) => void, number, string] → 返回 void）的解析结果与性能。扩充-三参矩阵：((a: number) => void, number, string)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0282', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0282.ts',
            `function fnT19K0(a: (a: number) => void, b: number, c: string): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT19K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '(a: number) => void');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'string');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0282 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0282 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0283
  * @tc.name dts2cpp_func_0283
  * @tc.desc dts2cpp funcs 签名 `(a: (a: number) => void, b: boolean, c: any): void`（3 参数 [(a: number) => void, boolean, any] → 返回 void）的解析结果与性能。扩充-三参矩阵：((a: number) => void, boolean, any)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0283', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0283.ts',
            `function fnT19K1(a: (a: number) => void, b: boolean, c: any): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnT19K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '(a: number) => void');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'any');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0283 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0283 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0284
  * @tc.name dts2cpp_func_0284
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: boolean, c: unknown, d: undefined): void`（4 参数 [number, boolean, unknown, undefined] → 返回 void）的解析结果与性能。扩充-四参矩阵：(number, boolean, unknown, undefined)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0284', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0284.ts',
            `function fnQ00(a: number, b: boolean, c: unknown, d: undefined): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ00');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'unknown');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'undefined');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0284 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0284 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0285
  * @tc.name dts2cpp_func_0285
  * @tc.desc dts2cpp funcs 签名 `(a: string, b: any, c: null, d: symbol): void`（4 参数 [string, any, null, symbol] → 返回 void）的解析结果与性能。扩充-四参矩阵：(string, any, null, symbol)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0285', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0285.ts',
            `function fnQ01(a: string, b: any, c: null, d: symbol): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ01');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'any');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'null');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0285 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0286
  * @tc.name dts2cpp_func_0286
  * @tc.desc dts2cpp funcs 签名 `(a: boolean, b: unknown, c: undefined, d: bigint): void`（4 参数 [boolean, unknown, undefined, bigint] → 返回 void）的解析结果与性能。扩充-四参矩阵：(boolean, unknown, undefined, bigint)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0286', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0286.ts',
            `function fnQ02(a: boolean, b: unknown, c: undefined, d: bigint): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ02');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'unknown');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0286 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0287
  * @tc.name dts2cpp_func_0287
  * @tc.desc dts2cpp funcs 签名 `(a: any, b: null, c: symbol, d: object): void`（4 参数 [any, null, symbol, object] → 返回 void）的解析结果与性能。扩充-四参矩阵：(any, null, symbol, object)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0287', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0287.ts',
            `function fnQ03(a: any, b: null, c: symbol, d: object): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ03');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'null');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'object');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0287 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0287 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0288
  * @tc.name dts2cpp_func_0288
  * @tc.desc dts2cpp funcs 签名 `(a: unknown, b: undefined, c: bigint, d: number[]): void`（4 参数 [unknown, undefined, bigint, number[]] → 返回 void）的解析结果与性能。扩充-四参矩阵：(unknown, undefined, bigint, number[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0288', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0288.ts',
            `function fnQ04(a: unknown, b: undefined, c: bigint, d: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ04');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0288 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0289
  * @tc.name dts2cpp_func_0289
  * @tc.desc dts2cpp funcs 签名 `(a: null, b: symbol, c: object, d: string[]): void`（4 参数 [null, symbol, object, string[]] → 返回 void）的解析结果与性能。扩充-四参矩阵：(null, symbol, object, string[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0289', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0289.ts',
            `function fnQ05(a: null, b: symbol, c: object, d: string[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ05');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'object');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0289 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0289 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0290
  * @tc.name dts2cpp_func_0290
  * @tc.desc dts2cpp funcs 签名 `(a: undefined, b: bigint, c: number[], d: boolean[]): void`（4 参数 [undefined, bigint, number[], boolean[]] → 返回 void）的解析结果与性能。扩充-四参矩阵：(undefined, bigint, number[], boolean[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0290', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0290.ts',
            `function fnQ06(a: undefined, b: bigint, c: number[], d: boolean[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ06');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0290 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0290 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0291
  * @tc.name dts2cpp_func_0291
  * @tc.desc dts2cpp funcs 签名 `(a: symbol, b: object, c: string[], d: Array<number>): void`（4 参数 [symbol, object, string[], Array<number>] → 返回 void）的解析结果与性能。扩充-四参矩阵：(symbol, object, string[], Array<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0291', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0291.ts',
            `function fnQ07(a: symbol, b: object, c: string[], d: Array<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ07');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'object');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0291 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0291 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0292
  * @tc.name dts2cpp_func_0292
  * @tc.desc dts2cpp funcs 签名 `(a: bigint, b: number[], c: boolean[], d: Map<string, number>): void`（4 参数 [bigint, number[], boolean[], Map<string, number>] → 返回 void）的解析结果与性能。扩充-四参矩阵：(bigint, number[], boolean[], Map<string, number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0292', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0292.ts',
            `function fnQ08(a: bigint, b: number[], c: boolean[], d: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ08');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'boolean[]');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0292 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0292 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0293
  * @tc.name dts2cpp_func_0293
  * @tc.desc dts2cpp funcs 签名 `(a: object, b: string[], c: Array<number>, d: Set<number>): void`（4 参数 [object, string[], Array<number>, Set<number>] → 返回 void）的解析结果与性能。扩充-四参矩阵：(object, string[], Array<number>, Set<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0293', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0293.ts',
            `function fnQ09(a: object, b: string[], c: Array<number>, d: Set<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnQ09');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'Array<number>');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'Set<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0293 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0294
  * @tc.name dts2cpp_func_0294
  * @tc.desc dts2cpp funcs 签名 `(a: number): number[]`（1 参数 [number] → 返回 number[]）的解析结果与性能。扩充-入参+返回：number → number[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0294', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0294.ts',
            `function fnR00K0(a: number): number[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR00K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0294 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0294 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0295
  * @tc.name dts2cpp_func_0295
  * @tc.desc dts2cpp funcs 签名 `(a: number): string | number`（1 参数 [number] → 返回 string | number）的解析结果与性能。扩充-入参+返回：number → string | number。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0295', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0295.ts',
            `function fnR00K1(a: number): string | number { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR00K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'string | number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0295 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0296
  * @tc.name dts2cpp_func_0296
  * @tc.desc dts2cpp funcs 签名 `(a: string): string[]`（1 参数 [string] → 返回 string[]）的解析结果与性能。扩充-入参+返回：string → string[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0296', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0296.ts',
            `function fnR01K0(a: string): string[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR01K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0296 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0297
  * @tc.name dts2cpp_func_0297
  * @tc.desc dts2cpp funcs 签名 `(a: string): string | string`（1 参数 [string] → 返回 string | string）的解析结果与性能。扩充-入参+返回：string → string | string。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0297', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0297.ts',
            `function fnR01K1(a: string): string | string { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR01K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'string | string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0297 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0297 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0298
  * @tc.name dts2cpp_func_0298
  * @tc.desc dts2cpp funcs 签名 `(a: boolean): boolean[]`（1 参数 [boolean] → 返回 boolean[]）的解析结果与性能。扩充-入参+返回：boolean → boolean[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0298', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0298.ts',
            `function fnR02K0(a: boolean): boolean[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR02K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.returns, 'boolean[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0298 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0299
  * @tc.name dts2cpp_func_0299
  * @tc.desc dts2cpp funcs 签名 `(a: boolean): string | boolean`（1 参数 [boolean] → 返回 string | boolean）的解析结果与性能。扩充-入参+返回：boolean → string | boolean。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0299', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0299.ts',
            `function fnR02K1(a: boolean): string | boolean { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR02K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.returns, 'string | boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0299 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0300
  * @tc.name dts2cpp_func_0300
  * @tc.desc dts2cpp funcs 签名 `(a: any): any[]`（1 参数 [any] → 返回 any[]）的解析结果与性能。扩充-入参+返回：any → any[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0300', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0300.ts',
            `function fnR03K0(a: any): any[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR03K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.returns, 'any[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0300 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0301
  * @tc.name dts2cpp_func_0301
  * @tc.desc dts2cpp funcs 签名 `(a: any): string | any`（1 参数 [any] → 返回 string | any）的解析结果与性能。扩充-入参+返回：any → string | any。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0301', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0301.ts',
            `function fnR03K1(a: any): string | any { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR03K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.returns, 'string | any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0301 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0301 执行异常: ${String(err)}`);
    }
  });

});

