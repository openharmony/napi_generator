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
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Func_Suite (part03/04).');

  /**
  * @tc.number dts2cpp_func_113
  * @tc.name dts2cpp_func_113
  * @tc.desc dts2cpp funcs 签名 `(a: string | number | boolean): void`（1 参数 [string | number | boolean] → 返回 void）的解析结果与性能。扩充-入参：三元联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_113', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc113.ts',
            `function f1(a: string | number | boolean): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string | number | boolean');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_114
  * @tc.name dts2cpp_func_114
  * @tc.desc dts2cpp funcs 签名 `(a: string & { tag: "x" }): void`（1 参数 [string & { tag: "x" }] → 返回 void）的解析结果与性能。扩充-入参：交叉类型。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_114', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc114.ts',
            `function f1(a: string & { tag: "x" }): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string & { tag: "x" }');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_115
  * @tc.name dts2cpp_func_115
  * @tc.desc dts2cpp funcs 签名 `(a: Date | null): void`（1 参数 [Date | null] → 返回 void）的解析结果与性能。扩充-入参：内置对象可空联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_115', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc115.ts',
            `function f1(a: Date | null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Date | null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_116
  * @tc.name dts2cpp_func_116
  * @tc.desc dts2cpp funcs 签名 `(a: `tpl-${string}`): void`（1 参数 [`tpl-${string}`] → 返回 void）的解析结果与性能。扩充-入参：模板字面量。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_116', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc116.ts',
            `function f1(a: \`tpl-\${string}\`): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '`tpl-${string}`');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_117
  * @tc.name dts2cpp_func_117
  * @tc.desc dts2cpp funcs 签名 `(a: Uint8Array): void`（1 参数 [Uint8Array] → 返回 void）的解析结果与性能。扩充-入参：TypedArray。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_117', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc117.ts',
            `function f1(a: Uint8Array): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Uint8Array');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_118
  * @tc.name dts2cpp_func_118
  * @tc.desc dts2cpp funcs 签名 `(a: Error): void`（1 参数 [Error] → 返回 void）的解析结果与性能。扩充-入参：Error 对象。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_118', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc118.ts',
            `function f1(a: Error): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Error');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_119
  * @tc.name dts2cpp_func_119
  * @tc.desc dts2cpp funcs 签名 `(a: { id: number; name: string }): void`（1 参数 [{ id: number; name: string }] → 返回 void）的解析结果与性能。扩充-入参：多属性对象。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_119', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc119.ts',
            `function f1(a: { id: number; name: string }): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '{ id: number; name: string }');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_120
  * @tc.name dts2cpp_func_120
  * @tc.desc dts2cpp funcs 签名 `(): void`（0 参数 [] → 返回 void）的解析结果与性能。扩充-参数个数：0 参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_120', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc120.ts',
            `function f2(): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_121
  * @tc.name dts2cpp_func_121
  * @tc.desc dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-参数个数：1 参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_121', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc121.ts',
            `function f2(a: number): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_122
  * @tc.name dts2cpp_func_122
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: string): void`（2 参数 [number, string] → 返回 void）的解析结果与性能。扩充-参数个数：2 参数（number+string）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_122', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc122.ts',
            `function f2(a: number, b: string): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_123
  * @tc.name dts2cpp_func_123
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: string, c: boolean): void`（3 参数 [number, string, boolean] → 返回 void）的解析结果与性能。扩充-参数个数：3 参数（number+string+boolean）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_123', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc123.ts',
            `function f2(a: number, b: string, c: boolean): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'boolean');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_124
  * @tc.name dts2cpp_func_124
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: string, c: boolean, d: any): void`（4 参数 [number, string, boolean, any] → 返回 void）的解析结果与性能。扩充-参数个数：4 参数混合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_124', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc124.ts',
            `function f2(a: number, b: string, c: boolean, d: any): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 4);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'boolean');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'any');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_125
  * @tc.name dts2cpp_func_125
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: string, c: boolean, d: any, e: unknown): void`（5 参数 [number, string, boolean, any, unknown] → 返回 void）的解析结果与性能。扩充-参数个数：5 参数混合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_125', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc125.ts',
            `function f2(a: number, b: string, c: boolean, d: any, e: unknown): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 5);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'boolean');
      assert.strictEqual(funcItem!.parameters[3].name, 'd');
      assert.strictEqual(funcItem!.parameters[3].type, 'any');
      assert.strictEqual(funcItem!.parameters[4].name, 'e');
      assert.strictEqual(funcItem!.parameters[4].type, 'unknown');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_126
  * @tc.name dts2cpp_func_126
  * @tc.desc dts2cpp funcs 签名 `(a: string, b: number): void`（2 参数 [string, number] → 返回 void）的解析结果与性能。扩充-参数个数：双可选参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_126', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc126.ts',
            `function f2(a?: string, b?: number): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_127
  * @tc.name dts2cpp_func_127
  * @tc.desc dts2cpp funcs 签名 `(a: string, b: number): void`（2 参数 [string, number] → 返回 void）的解析结果与性能。扩充-参数个数：默认值参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_127', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc127.ts',
            `function f2(a: string, b: number = 0): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_128
  * @tc.name dts2cpp_func_128
  * @tc.desc dts2cpp funcs 签名 `(args: unknown[]): void`（1 参数 [unknown[]] → 返回 void）的解析结果与性能。扩充-参数个数：纯 rest 参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_128', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc128.ts',
            `function f2(...args: unknown[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f2');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'args');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_129
  * @tc.name dts2cpp_func_129
  * @tc.desc dts2cpp funcs 签名 `(): string`（0 参数 [] → 返回 string）的解析结果与性能。扩充-返回：string。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_129', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc129.ts',
            `function f3(): string { return ""; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_130
  * @tc.name dts2cpp_func_130
  * @tc.desc dts2cpp funcs 签名 `(): boolean`（0 参数 [] → 返回 boolean）的解析结果与性能。扩充-返回：boolean。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_130', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc130.ts',
            `function f3(): boolean { return true; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_131
  * @tc.name dts2cpp_func_131
  * @tc.desc dts2cpp funcs 签名 `(): any`（0 参数 [] → 返回 any）的解析结果与性能。扩充-返回：any。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_131', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc131.ts',
            `function f3(): any { return 0; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_132
  * @tc.name dts2cpp_func_132
  * @tc.desc dts2cpp funcs 签名 `(): unknown`（0 参数 [] → 返回 unknown）的解析结果与性能。扩充-返回：unknown。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_132', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc132.ts',
            `function f3(): unknown { return 0; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'unknown');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_133
  * @tc.name dts2cpp_func_133
  * @tc.desc dts2cpp funcs 签名 `(): never`（0 参数 [] → 返回 never）的解析结果与性能。扩充-返回：never。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_133', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc133.ts',
            `function f3(): never { throw new Error(); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'never');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_134
  * @tc.name dts2cpp_func_134
  * @tc.desc dts2cpp funcs 签名 `(): null`（0 参数 [] → 返回 null）的解析结果与性能。扩充-返回：null。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_134', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc134.ts',
            `function f3(): null { return null; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_135
  * @tc.name dts2cpp_func_135
  * @tc.desc dts2cpp funcs 签名 `(): undefined`（0 参数 [] → 返回 undefined）的解析结果与性能。扩充-返回：undefined。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_135', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc135.ts',
            `function f3(): undefined { return undefined; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'undefined');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_136
  * @tc.name dts2cpp_func_136
  * @tc.desc dts2cpp funcs 签名 `(): symbol`（0 参数 [] → 返回 symbol）的解析结果与性能。扩充-返回：symbol。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_136', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc136.ts',
            `function f3(): symbol { return Symbol(); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'symbol');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_137
  * @tc.name dts2cpp_func_137
  * @tc.desc dts2cpp funcs 签名 `(): bigint`（0 参数 [] → 返回 bigint）的解析结果与性能。扩充-返回：bigint。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_137', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc137.ts',
            `function f3(): bigint { return 1n; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'bigint');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_138
  * @tc.name dts2cpp_func_138
  * @tc.desc dts2cpp funcs 签名 `(): object`（0 参数 [] → 返回 object）的解析结果与性能。扩充-返回：object。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_138', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc138.ts',
            `function f3(): object { return {}; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'object');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_139
  * @tc.name dts2cpp_func_139
  * @tc.desc dts2cpp funcs 签名 `(): number[]`（0 参数 [] → 返回 number[]）的解析结果与性能。扩充-返回：一维数组。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_139', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc139.ts',
            `function f3(): number[] { return []; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_140
  * @tc.name dts2cpp_func_140
  * @tc.desc dts2cpp funcs 签名 `(): boolean[][]`（0 参数 [] → 返回 boolean[][]）的解析结果与性能。扩充-返回：二维数组。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_140', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc140.ts',
            `function f3(): boolean[][] { return []; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'boolean[][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_141
  * @tc.name dts2cpp_func_141
  * @tc.desc dts2cpp funcs 签名 `(): Set<string>`（0 参数 [] → 返回 Set<string>）的解析结果与性能。扩充-返回：Set。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_141', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc141.ts',
            `function f3(): Set<string> { return new Set(); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'Set<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_142
  * @tc.name dts2cpp_func_142
  * @tc.desc dts2cpp funcs 签名 `(): Map<string, number>`（0 参数 [] → 返回 Map<string, number>）的解析结果与性能。扩充-返回：Map。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_142', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc142.ts',
            `function f3(): Map<string, number> { return new Map(); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_143
  * @tc.name dts2cpp_func_143
  * @tc.desc dts2cpp funcs 签名 `(): Record<string, number>`（0 参数 [] → 返回 Record<string, number>）的解析结果与性能。扩充-返回：Record。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_143', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc143.ts',
            `function f3(): Record<string, number> { return {}; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'Record<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_144
  * @tc.name dts2cpp_func_144
  * @tc.desc dts2cpp funcs 签名 `(): Promise<boolean>`（0 参数 [] → 返回 Promise<boolean>）的解析结果与性能。扩充-返回：Promise。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_144', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc144.ts',
            `function f3(): Promise<boolean> { return Promise.resolve(true); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'Promise<boolean>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_145
  * @tc.name dts2cpp_func_145
  * @tc.desc dts2cpp funcs 签名 `(): [number, string]`（0 参数 [] → 返回 [number, string]）的解析结果与性能。扩充-返回：元组。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_145', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc145.ts',
            `function f3(): [number, string] { return [0, ""]; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, '[number, string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_146
  * @tc.name dts2cpp_func_146
  * @tc.desc dts2cpp funcs 签名 `(): (a: number) => void`（0 参数 [] → 返回 (a: number) => void）的解析结果与性能。扩充-返回：函数类型。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_146', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc146.ts',
            `function f3(): (a: number) => void { return () => {}; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, '(a: number) => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_147
  * @tc.name dts2cpp_func_147
  * @tc.desc dts2cpp funcs 签名 `(): "ok" | "err"`（0 参数 [] → 返回 "ok" | "err"）的解析结果与性能。扩充-返回：字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_147', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc147.ts',
            `function f3(): "ok" | "err" { return "ok"; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, '"ok" | "err"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_148
  * @tc.name dts2cpp_func_148
  * @tc.desc dts2cpp funcs 签名 `(): string | null`（0 参数 [] → 返回 string | null）的解析结果与性能。扩充-返回：可空联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_148', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc148.ts',
            `function f3(): string | null { return null; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'string | null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_149
  * @tc.name dts2cpp_func_149
  * @tc.desc dts2cpp funcs 签名 `(): { id: number }`（0 参数 [] → 返回 { id: number }）的解析结果与性能。扩充-返回：对象类型。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_149', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc149.ts',
            `function f3(): { id: number } { return { id: 0 }; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, '{ id: number }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_150
  * @tc.name dts2cpp_func_150
  * @tc.desc dts2cpp funcs 签名 `(): Date`（0 参数 [] → 返回 Date）的解析结果与性能。扩充-返回：内置对象。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_150', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc150.ts',
            `function f3(): Date { return new Date(); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f3');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'Date');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_151
  * @tc.name dts2cpp_func_151
  * @tc.desc dts2cpp funcs 签名 `(a: string[]): number[]`（1 参数 [string[]] → 返回 number[]）的解析结果与性能。扩充-组合：数组入参→数组返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_151', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc151.ts',
            `function f4(a: string[]): number[] { return []; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_152
  * @tc.name dts2cpp_func_152
  * @tc.desc dts2cpp funcs 签名 `(a: Map<string, number>): Set<string>`（1 参数 [Map<string, number>] → 返回 Set<string>）的解析结果与性能。扩充-组合：Map 入参→Set 返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_152', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc152.ts',
            `function f4(a: Map<string, number>): Set<string> { return new Set(); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'Set<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_153
  * @tc.name dts2cpp_func_153
  * @tc.desc dts2cpp funcs 签名 `(a: string | number): boolean | null`（1 参数 [string | number] → 返回 boolean | null）的解析结果与性能。扩充-组合：联合入参→联合返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_153', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc153.ts',
            `function f4(a: string | number): boolean | null { return null; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string | number');
      assert.strictEqual(funcItem!.returns, 'boolean | null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_154
  * @tc.name dts2cpp_func_154
  * @tc.desc dts2cpp funcs 签名 `(a: (x: number) => void): (y: string) => void`（1 参数 [(x: number) => void] → 返回 (y: string) => void）的解析结果与性能。扩充-组合：函数入参→函数返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_154', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc154.ts',
            `function f4(a: (x: number) => void): (y: string) => void { return () => {}; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '(x: number) => void');
      assert.strictEqual(funcItem!.returns, '(y: string) => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_155
  * @tc.name dts2cpp_func_155
  * @tc.desc dts2cpp funcs 签名 `(a: T): T[]`（1 参数 [T] → 返回 T[]）的解析结果与性能。扩充-组合：泛型入参→泛型数组返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_155', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc155.ts',
            `function f4<T>(a: T): T[] { return [a]; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'T');
      assert.strictEqual(funcItem!.returns, 'T[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_156
  * @tc.name dts2cpp_func_156
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: string): boolean`（2 参数 [number, string] → 返回 boolean）的解析结果与性能。扩充-组合：双参→boolean 返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_156', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc156.ts',
            `function f4(a: number, b: string): boolean { return true; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string');
      assert.strictEqual(funcItem!.returns, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_157
  * @tc.name dts2cpp_func_157
  * @tc.desc dts2cpp funcs 签名 `(): void`（0 参数 [] → 返回 void）的解析结果与性能。扩充-组合：无参返回 void。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_157', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc157.ts',
            `function f4(): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f4');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_158
  * @tc.name dts2cpp_func_158
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 2 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_158', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc158.ts',
            `function f5(a: number): number { return a; }
function g5(b: string): string { return b; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f5');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_159
  * @tc.name dts2cpp_func_159
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 3 个函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_159', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc159.ts',
            `function f5(a: number): number { return a; }
function g5(b: string): string { return b; }
function h5(c: boolean): boolean { return c; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f5');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_160
  * @tc.name dts2cpp_func_160
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 5 个函数（吞吐）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_160', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc160.ts',
            `function f5(a: number): number { return a; }
function g5(b: string): string { return b; }
function h5(c: boolean): boolean { return c; }
function i5(d: any): any { return d; }
function j5(e: unknown): unknown { return e; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f5');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_161
  * @tc.name dts2cpp_func_161
  * @tc.desc dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-命名：下划线函数名。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_161', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc161.ts',
            `function _private_fn_1(a: number): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === '_private_fn_1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_162
  * @tc.name dts2cpp_func_162
  * @tc.desc dts2cpp funcs 签名 `(a: string): string`（1 参数 [string] → 返回 string）的解析结果与性能。扩充-命名：超长函数名。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_162', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc162.ts',
            `function fnWithVeryLongName1234567890(a: string): string { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnWithVeryLongName1234567890');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_162 执行异常: ${String(err)}`);
    }
  });

});
