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
  * @tc.number dts2cpp_func_0302
  * @tc.name dts2cpp_func_0302
  * @tc.desc dts2cpp funcs 签名 `(a: unknown): unknown[]`（1 参数 [unknown] → 返回 unknown[]）的解析结果与性能。扩充-入参+返回：unknown → unknown[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0302', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0302.ts',
            `function fnR04K0(a: unknown): unknown[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR04K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.returns, 'unknown[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0302 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0303
  * @tc.name dts2cpp_func_0303
  * @tc.desc dts2cpp funcs 签名 `(a: unknown): string | unknown`（1 参数 [unknown] → 返回 string | unknown）的解析结果与性能。扩充-入参+返回：unknown → string | unknown。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0303', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0303.ts',
            `function fnR04K1(a: unknown): string | unknown { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR04K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.returns, 'string | unknown');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0303 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0304
  * @tc.name dts2cpp_func_0304
  * @tc.desc dts2cpp funcs 签名 `(a: null): null[]`（1 参数 [null] → 返回 null[]）的解析结果与性能。扩充-入参+返回：null → null[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0304', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0304.ts',
            `function fnR05K0(a: null): null[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR05K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.returns, 'null[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0304 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0304 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0305
  * @tc.name dts2cpp_func_0305
  * @tc.desc dts2cpp funcs 签名 `(a: null): string | null`（1 参数 [null] → 返回 string | null）的解析结果与性能。扩充-入参+返回：null → string | null。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0305', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0305.ts',
            `function fnR05K1(a: null): string | null { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR05K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.returns, 'string | null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0305 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0306
  * @tc.name dts2cpp_func_0306
  * @tc.desc dts2cpp funcs 签名 `(a: undefined): undefined[]`（1 参数 [undefined] → 返回 undefined[]）的解析结果与性能。扩充-入参+返回：undefined → undefined[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0306', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0306.ts',
            `function fnR06K0(a: undefined): undefined[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR06K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.returns, 'undefined[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0306 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0306 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0307
  * @tc.name dts2cpp_func_0307
  * @tc.desc dts2cpp funcs 签名 `(a: undefined): string | undefined`（1 参数 [undefined] → 返回 string | undefined）的解析结果与性能。扩充-入参+返回：undefined → string | undefined。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0307', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0307.ts',
            `function fnR06K1(a: undefined): string | undefined { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR06K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.returns, 'string | undefined');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0307 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0307 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0308
  * @tc.name dts2cpp_func_0308
  * @tc.desc dts2cpp funcs 签名 `(a: symbol): symbol[]`（1 参数 [symbol] → 返回 symbol[]）的解析结果与性能。扩充-入参+返回：symbol → symbol[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0308', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0308.ts',
            `function fnR07K0(a: symbol): symbol[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR07K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'symbol[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0308 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0308 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0309
  * @tc.name dts2cpp_func_0309
  * @tc.desc dts2cpp funcs 签名 `(a: symbol): string | symbol`（1 参数 [symbol] → 返回 string | symbol）的解析结果与性能。扩充-入参+返回：symbol → string | symbol。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0309', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0309.ts',
            `function fnR07K1(a: symbol): string | symbol { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR07K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'string | symbol');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0309 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0309 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0310
  * @tc.name dts2cpp_func_0310
  * @tc.desc dts2cpp funcs 签名 `(a: bigint): bigint[]`（1 参数 [bigint] → 返回 bigint[]）的解析结果与性能。扩充-入参+返回：bigint → bigint[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0310', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0310.ts',
            `function fnR08K0(a: bigint): bigint[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR08K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'bigint[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0310 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0310 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0311
  * @tc.name dts2cpp_func_0311
  * @tc.desc dts2cpp funcs 签名 `(a: bigint): string | bigint`（1 参数 [bigint] → 返回 string | bigint）的解析结果与性能。扩充-入参+返回：bigint → string | bigint。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0311', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0311.ts',
            `function fnR08K1(a: bigint): string | bigint { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR08K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'string | bigint');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0311 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0311 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0312
  * @tc.name dts2cpp_func_0312
  * @tc.desc dts2cpp funcs 签名 `(a: object): object[]`（1 参数 [object] → 返回 object[]）的解析结果与性能。扩充-入参+返回：object → object[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0312', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0312.ts',
            `function fnR09K0(a: object): object[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR09K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.returns, 'object[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0312 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0312 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0313
  * @tc.name dts2cpp_func_0313
  * @tc.desc dts2cpp funcs 签名 `(a: object): string | object`（1 参数 [object] → 返回 string | object）的解析结果与性能。扩充-入参+返回：object → string | object。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0313', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0313.ts',
            `function fnR09K1(a: object): string | object { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR09K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.returns, 'string | object');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0313 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0313 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0314
  * @tc.name dts2cpp_func_0314
  * @tc.desc dts2cpp funcs 签名 `(a: number[]): number[][]`（1 参数 [number[]] → 返回 number[][]）的解析结果与性能。扩充-入参+返回：number[] → number[][]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0314', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0314.ts',
            `function fnR10K0(a: number[]): number[][] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR10K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'number[][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0314 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0314 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0315
  * @tc.name dts2cpp_func_0315
  * @tc.desc dts2cpp funcs 签名 `(a: number[]): string | number[]`（1 参数 [number[]] → 返回 string | number[]）的解析结果与性能。扩充-入参+返回：number[] → string | number[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0315', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0315.ts',
            `function fnR10K1(a: number[]): string | number[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR10K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'string | number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0315 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0315 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0316
  * @tc.name dts2cpp_func_0316
  * @tc.desc dts2cpp funcs 签名 `(a: string[]): string[][]`（1 参数 [string[]] → 返回 string[][]）的解析结果与性能。扩充-入参+返回：string[] → string[][]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0316', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0316.ts',
            `function fnR11K0(a: string[]): string[][] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR11K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'string[][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0316 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0316 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0317
  * @tc.name dts2cpp_func_0317
  * @tc.desc dts2cpp funcs 签名 `(a: string[]): string | string[]`（1 参数 [string[]] → 返回 string | string[]）的解析结果与性能。扩充-入参+返回：string[] → string | string[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0317', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0317.ts',
            `function fnR11K1(a: string[]): string | string[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR11K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'string | string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0317 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0317 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0318
  * @tc.name dts2cpp_func_0318
  * @tc.desc dts2cpp funcs 签名 `(a: boolean[]): boolean[][]`（1 参数 [boolean[]] → 返回 boolean[][]）的解析结果与性能。扩充-入参+返回：boolean[] → boolean[][]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0318', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0318.ts',
            `function fnR12K0(a: boolean[]): boolean[][] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR12K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'boolean[][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0318 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0318 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0319
  * @tc.name dts2cpp_func_0319
  * @tc.desc dts2cpp funcs 签名 `(a: boolean[]): string | boolean[]`（1 参数 [boolean[]] → 返回 string | boolean[]）的解析结果与性能。扩充-入参+返回：boolean[] → string | boolean[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0319', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0319.ts',
            `function fnR12K1(a: boolean[]): string | boolean[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR12K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'string | boolean[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0319 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0319 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0320
  * @tc.name dts2cpp_func_0320
  * @tc.desc dts2cpp funcs 签名 `(a: Array<number>): Array<number>[]`（1 参数 [Array<number>] → 返回 Array<number>[]）的解析结果与性能。扩充-入参+返回：Array<number> → Array<number>[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0320', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0320.ts',
            `function fnR13K0(a: Array<number>): Array<number>[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR13K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'Array<number>[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0320 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0320 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0321
  * @tc.name dts2cpp_func_0321
  * @tc.desc dts2cpp funcs 签名 `(a: Array<number>): string | Array<number>`（1 参数 [Array<number>] → 返回 string | Array<number>）的解析结果与性能。扩充-入参+返回：Array<number> → string | Array<number>。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0321', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0321.ts',
            `function fnR13K1(a: Array<number>): string | Array<number> { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR13K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'string | Array<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0321 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0321 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0322
  * @tc.name dts2cpp_func_0322
  * @tc.desc dts2cpp funcs 签名 `(a: Map<string, number>): Map<string, number>[]`（1 参数 [Map<string, number>] → 返回 Map<string, number>[]）的解析结果与性能。扩充-入参+返回：Map<string, number> → Map<string, number>[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0322', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0322.ts',
            `function fnR14K0(a: Map<string, number>): Map<string, number>[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR14K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'Map<string, number>[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0322 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0323
  * @tc.name dts2cpp_func_0323
  * @tc.desc dts2cpp funcs 签名 `(a: Map<string, number>): string | Map<string, number>`（1 参数 [Map<string, number>] → 返回 string | Map<string, number>）的解析结果与性能。扩充-入参+返回：Map<string, number> → string | Map<string, number>。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0323', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0323.ts',
            `function fnR14K1(a: Map<string, number>): string | Map<string, number> { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR14K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'string | Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0323 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0323 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0324
  * @tc.name dts2cpp_func_0324
  * @tc.desc dts2cpp funcs 签名 `(a: Set<number>): Set<number>[]`（1 参数 [Set<number>] → 返回 Set<number>[]）的解析结果与性能。扩充-入参+返回：Set<number> → Set<number>[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0324', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0324.ts',
            `function fnR15K0(a: Set<number>): Set<number>[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR15K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Set<number>');
      assert.strictEqual(funcItem!.returns, 'Set<number>[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0324 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0325
  * @tc.name dts2cpp_func_0325
  * @tc.desc dts2cpp funcs 签名 `(a: Set<number>): string | Set<number>`（1 参数 [Set<number>] → 返回 string | Set<number>）的解析结果与性能。扩充-入参+返回：Set<number> → string | Set<number>。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0325', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0325.ts',
            `function fnR15K1(a: Set<number>): string | Set<number> { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR15K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Set<number>');
      assert.strictEqual(funcItem!.returns, 'string | Set<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0325 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0325 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0326
  * @tc.name dts2cpp_func_0326
  * @tc.desc dts2cpp funcs 签名 `(a: Record<string, string>): Record<string, string>[]`（1 参数 [Record<string, string>] → 返回 Record<string, string>[]）的解析结果与性能。扩充-入参+返回：Record<string, string> → Record<string, string>[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0326', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0326.ts',
            `function fnR16K0(a: Record<string, string>): Record<string, string>[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR16K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Record<string, string>');
      assert.strictEqual(funcItem!.returns, 'Record<string, string>[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0326 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0327
  * @tc.name dts2cpp_func_0327
  * @tc.desc dts2cpp funcs 签名 `(a: Record<string, string>): string | Record<string, string>`（1 参数 [Record<string, string>] → 返回 string | Record<string, string>）的解析结果与性能。扩充-入参+返回：Record<string, string> → string | Record<string, string>。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0327', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0327.ts',
            `function fnR16K1(a: Record<string, string>): string | Record<string, string> { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR16K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Record<string, string>');
      assert.strictEqual(funcItem!.returns, 'string | Record<string, string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0327 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0328
  * @tc.name dts2cpp_func_0328
  * @tc.desc dts2cpp funcs 签名 `(a: Promise<string>): Promise<string>[]`（1 参数 [Promise<string>] → 返回 Promise<string>[]）的解析结果与性能。扩充-入参+返回：Promise<string> → Promise<string>[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0328', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0328.ts',
            `function fnR17K0(a: Promise<string>): Promise<string>[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR17K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Promise<string>');
      assert.strictEqual(funcItem!.returns, 'Promise<string>[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0328 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0329
  * @tc.name dts2cpp_func_0329
  * @tc.desc dts2cpp funcs 签名 `(a: Promise<string>): string | Promise<string>`（1 参数 [Promise<string>] → 返回 string | Promise<string>）的解析结果与性能。扩充-入参+返回：Promise<string> → string | Promise<string>。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0329', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0329.ts',
            `function fnR17K1(a: Promise<string>): string | Promise<string> { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR17K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Promise<string>');
      assert.strictEqual(funcItem!.returns, 'string | Promise<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0329 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0329 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0330
  * @tc.name dts2cpp_func_0330
  * @tc.desc dts2cpp funcs 签名 `(a: [string, number]): [string, number][]`（1 参数 [[string, number]] → 返回 [string, number][]）的解析结果与性能。扩充-入参+返回：[string, number] → [string, number][]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0330', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0330.ts',
            `function fnR18K0(a: [string, number]): [string, number][] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR18K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '[string, number]');
      assert.strictEqual(funcItem!.returns, '[string, number][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0330 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0330 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0331
  * @tc.name dts2cpp_func_0331
  * @tc.desc dts2cpp funcs 签名 `(a: [string, number]): string | [string, number]`（1 参数 [[string, number]] → 返回 string | [string, number]）的解析结果与性能。扩充-入参+返回：[string, number] → string | [string, number]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0331', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0331.ts',
            `function fnR18K1(a: [string, number]): string | [string, number] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR18K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '[string, number]');
      assert.strictEqual(funcItem!.returns, 'string | [string, number]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0331 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0331 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0332
  * @tc.name dts2cpp_func_0332
  * @tc.desc dts2cpp funcs 签名 `(a: (a: number) => void): (a: number) => void[]`（1 参数 [(a: number) => void] → 返回 (a: number) => void[]）的解析结果与性能。扩充-入参+返回：(a: number) => void → (a: number) => void[]。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0332', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0332.ts',
            `function fnR19K0(a: (a: number) => void): (a: number) => void[] { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR19K0');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '(a: number) => void');
      assert.strictEqual(funcItem!.returns, '(a: number) => void[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0332 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0332 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0333
  * @tc.name dts2cpp_func_0333
  * @tc.desc dts2cpp funcs 签名 `(a: (a: number) => void): string | (a: number) => void`（1 参数 [(a: number) => void] → 返回 string | (a: number) => void）的解析结果与性能。扩充-入参+返回：(a: number) => void → string | (a: number) => void。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0333', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0333.ts',
            `function fnR19K1(a: (a: number) => void): string | (a: number) => void { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnR19K1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '(a: number) => void');
      assert.strictEqual(funcItem!.returns, 'string | (a: number) => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0333 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0333 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0334
  * @tc.name dts2cpp_func_0334
  * @tc.desc dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 number。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0334', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0334.ts',
            `function fnO00(a?: number): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO00');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0334 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0334 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0335
  * @tc.name dts2cpp_func_0335
  * @tc.desc dts2cpp funcs 签名 `(a: string): void`（1 参数 [string] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 string。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0335', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0335.ts',
            `function fnO01(a?: string): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO01');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0335 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0335 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0336
  * @tc.name dts2cpp_func_0336
  * @tc.desc dts2cpp funcs 签名 `(a: boolean): void`（1 参数 [boolean] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 boolean。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0336', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0336.ts',
            `function fnO02(a?: boolean): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO02');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0336 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0336 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0337
  * @tc.name dts2cpp_func_0337
  * @tc.desc dts2cpp funcs 签名 `(a: any): void`（1 参数 [any] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 any。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0337', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0337.ts',
            `function fnO03(a?: any): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO03');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0337 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0337 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0338
  * @tc.name dts2cpp_func_0338
  * @tc.desc dts2cpp funcs 签名 `(a: unknown): void`（1 参数 [unknown] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 unknown。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0338', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0338.ts',
            `function fnO04(a?: unknown): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO04');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0338 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0338 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0339
  * @tc.name dts2cpp_func_0339
  * @tc.desc dts2cpp funcs 签名 `(a: null): void`（1 参数 [null] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 null。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0339', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0339.ts',
            `function fnO05(a?: null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO05');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0339 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0339 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0340
  * @tc.name dts2cpp_func_0340
  * @tc.desc dts2cpp funcs 签名 `(a: undefined): void`（1 参数 [undefined] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 undefined。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0340', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0340.ts',
            `function fnO06(a?: undefined): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO06');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0340 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0340 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0341
  * @tc.name dts2cpp_func_0341
  * @tc.desc dts2cpp funcs 签名 `(a: symbol): void`（1 参数 [symbol] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 symbol。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0341', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0341.ts',
            `function fnO07(a?: symbol): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO07');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0341 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0341 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0342
  * @tc.name dts2cpp_func_0342
  * @tc.desc dts2cpp funcs 签名 `(a: bigint): void`（1 参数 [bigint] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 bigint。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0342', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0342.ts',
            `function fnO08(a?: bigint): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO08');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0342 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0342 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0343
  * @tc.name dts2cpp_func_0343
  * @tc.desc dts2cpp funcs 签名 `(a: object): void`（1 参数 [object] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 object。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0343', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0343.ts',
            `function fnO09(a?: object): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnO09');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0343 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0343 执行异常: ${String(err)}`);
    }
  });

});

