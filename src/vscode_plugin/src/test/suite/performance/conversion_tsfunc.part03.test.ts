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
  * @tc.number dts2cpp_func_63
  * @tc.name dts2cpp_func_63
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: number): number`（2 参数 [number, number] → 返回 number）的解析结果与性能。对齐 parsetsfunc test_1：一般双 number 参数返回 number。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_63', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc63.ts',
            `function add(a: number, b: number): number { return a + b; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_63 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_63 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_64
  * @tc.name dts2cpp_func_64
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: number[]): number[][]`（2 参数 [number, number[]] → 返回 number[][]）的解析结果与性能。对齐 test_2：数组参数与二维数组返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_64', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc64.ts',
            `function add(a: number, b: number[]): number[][] { return []; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'number[][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_64 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_64 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_65
  * @tc.name dts2cpp_func_65
  * @tc.desc dts2cpp funcs 签名 `(a: { x: number; y: number }): void`（1 参数 [{ x: number; y: number }] → 返回 void）的解析结果与性能。对齐 test_4：对象字面量参数返回 void。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_65', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc65.ts',
            `function add(a: { x: number; y: number }): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '{ x: number; y: number }');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_65 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_65 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_66
  * @tc.name dts2cpp_func_66
  * @tc.desc dts2cpp funcs 签名 `(a: { x: number; y?: string }): void`（1 参数 [{ x: number; y?: string }] → 返回 void）的解析结果与性能。对齐 test_5：对象含可选属性参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_66', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc66.ts',
            `function add(a: { x: number; y?: string }): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '{ x: number; y?: string }');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_66 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_66 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_67
  * @tc.name dts2cpp_func_67
  * @tc.desc dts2cpp funcs 签名 `(a: string | null): void`（1 参数 [string | null] → 返回 void）的解析结果与性能。对齐 test_8：可空联合参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_67', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc67.ts',
            `function add(a: string | null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string | null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_67 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_67 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_68
  * @tc.name dts2cpp_func_68
  * @tc.desc dts2cpp funcs 签名 `(a: string | null): void`（1 参数 [string | null] → 返回 void）的解析结果与性能。对齐 test_9：可选可空参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_68', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc68.ts',
            `function add(a?: string | null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string | null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_68 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_68 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_69
  * @tc.name dts2cpp_func_69
  * @tc.desc dts2cpp funcs 签名 `(fn: (a: string) => void): void`（1 参数 [(a: string) => void] → 返回 void）的解析结果与性能。对齐 test_10：回调函数参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_69', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc69.ts',
            `function add(fn: (a: string) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'fn');
      assert.strictEqual(funcItem!.parameters[0].type, '(a: string) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_69 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_69 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_70
  * @tc.name dts2cpp_func_70
  * @tc.desc dts2cpp funcs 签名 `(fn: (a?: string) => void): void`（1 参数 [(a?: string) => void] → 返回 void）的解析结果与性能。对齐 test_11：回调可选参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_70', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc70.ts',
            `function add(fn: (a?: string) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'fn');
      assert.strictEqual(funcItem!.parameters[0].type, '(a?: string) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_70 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_70 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_71
  * @tc.name dts2cpp_func_71
  * @tc.desc dts2cpp funcs 签名 `(a: Type): Type | undefined`（1 参数 [Type] → 返回 Type | undefined）的解析结果与性能。对齐 test_12：单泛型参数返回联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_71', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc71.ts',
            `function add<Type>(a: Type): Type | undefined { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Type');
      assert.strictEqual(funcItem!.returns, 'Type | undefined');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_71 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_71 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_72
  * @tc.name dts2cpp_func_72
  * @tc.desc dts2cpp funcs 签名 `(a: Input): Output`（1 参数 [Input] → 返回 Output）的解析结果与性能。对齐 test_13：双泛型参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_72', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc72.ts',
            `function add<Input, Output>(a: Input): Output { return a as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Input');
      assert.strictEqual(funcItem!.returns, 'Output');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_72 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_72 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_73
  * @tc.name dts2cpp_func_73
  * @tc.desc dts2cpp funcs 签名 `(a: Type): 无注解(undefined)`（1 参数 [Type] → 返回 无注解(undefined)）的解析结果与性能。对齐 test_14：泛型约束无返回注解。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_73', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc73.ts',
            `function add<Type extends { length: number }>(a: Type) { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Type');
      assert.strictEqual(funcItem!.returns, undefined);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_73 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_73 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_74
  * @tc.name dts2cpp_func_74
  * @tc.desc dts2cpp funcs 签名 `(a: unknown): 无注解(undefined)`（1 参数 [unknown] → 返回 无注解(undefined)）的解析结果与性能。对齐 test_15：unknown 参数无返回注解。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_74', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc74.ts',
            `function add(a: unknown) { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.returns, undefined);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_74 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_74 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_75
  * @tc.name dts2cpp_func_75
  * @tc.desc dts2cpp funcs 签名 `(n: number, m: number[]): void`（2 参数 [number, number[]] → 返回 void）的解析结果与性能。对齐 test_18：剩余形参。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_75', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc75.ts',
            `function add(n: number, ...m: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'n');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'm');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_75 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_75 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_76
  * @tc.name dts2cpp_func_76
  * @tc.desc dts2cpp funcs 签名 `(: { a: number; b: number; c: number }): void`（1 参数 [{ a: number; b: number; c: number }] → 返回 void）的解析结果与性能。对齐 test_19：对象解构参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_76', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc76.ts',
            `function add({ a, b, c }: { a: number; b: number; c: number }): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, '');
      assert.strictEqual(funcItem!.parameters[0].type, '{ a: number; b: number; c: number }');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_76 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_76 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_77
  * @tc.name dts2cpp_func_77
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: number): number`（2 参数 [number, number] → 返回 number）的解析结果与性能。对齐 test_22：单行一般函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_77', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc77.ts',
            `function add(a: number, b: number): number { return 0; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_77 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_77 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_78
  * @tc.name dts2cpp_func_78
  * @tc.desc dts2cpp funcs 签名 `(a: string, b: E): void`（2 参数 [string, E] → 返回 void）的解析结果与性能。对齐 test_24：自定义类型参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_78', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc78.ts',
            `function add(a: string, b: E): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'E');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_78 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_78 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_79
  * @tc.name dts2cpp_func_79
  * @tc.desc dts2cpp funcs 签名 `(a: any, b: Map<string, number>): void`（2 参数 [any, Map<string, number>] → 返回 void）的解析结果与性能。对齐 test_25：any 与 Map 参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_79', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc79.ts',
            `function add(a: any, b: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_79 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_79 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_80
  * @tc.name dts2cpp_func_80
  * @tc.desc dts2cpp funcs 签名 `(a: "left" | "right" | "center"): void`（1 参数 ["left" | "right" | "center"] → 返回 void）的解析结果与性能。对齐 test_30：字符串字面量联合参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_80', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc80.ts',
            `function add(a: "left" | "right" | "center"): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '"left" | "right" | "center"');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_80 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_80 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_81
  * @tc.name dts2cpp_func_81
  * @tc.desc dts2cpp funcs 签名 `(a: number, m: number[]): void`（2 参数 [number, number[]] → 返回 void）的解析结果与性能。对齐 test_40：单行剩余形参。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_81', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc81.ts',
            `function add(a: number, ...m: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'm');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_81 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_81 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_82
  * @tc.name dts2cpp_func_82
  * @tc.desc dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。对齐 test_51：无参数无返回注解。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_82', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc82.ts',
            `function add() { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, undefined);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_82 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_82 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_83
  * @tc.name dts2cpp_func_83
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。对齐 test_54：export function。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_83', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc83.ts',
            `export function add(a: number): number { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_83 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_83 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_84
  * @tc.name dts2cpp_func_84
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。对齐 test_56：declare function。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_84', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc84.ts',
            `declare function add(a: number): number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_84 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_84 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_85
  * @tc.name dts2cpp_func_85
  * @tc.desc dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。对齐 test_57：namespace 内函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_85', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc85.ts',
            `namespace ns { function add(a: number): number { return a; } }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_85 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_85 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_86
  * @tc.name dts2cpp_func_86
  * @tc.desc dts2cpp funcs 签名 `(中文参数: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。对齐 test_61/62：中文函数名与参数名。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_86', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc86.ts',
            `function 中文(中文参数: number): string { return ""; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === '中文');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, '中文参数');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_86 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_86 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_87
  * @tc.name dts2cpp_func_87
  * @tc.desc dts2cpp funcs 签名 `(a: typeof globalThis): void`（1 参数 [typeof globalThis] → 返回 void）的解析结果与性能。对齐 test_67：typeof 参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_87', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc87.ts',
            `function add(a: typeof globalThis): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'typeof globalThis');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_87 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_87 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_88
  * @tc.name dts2cpp_func_88
  * @tc.desc dts2cpp funcs 签名 `(a: unknown & null): never`（1 参数 [unknown & null] → 返回 never）的解析结果与性能。对齐 test_68：交集参数返回 never。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_88', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc88.ts',
            `function add(a: unknown & null): never { throw new Error(); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown & null');
      assert.strictEqual(funcItem!.returns, 'never');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_88 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_88 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_89
  * @tc.name dts2cpp_func_89
  * @tc.desc dts2cpp funcs 签名 `(: [number, number]): void`（1 参数 [[number, number]] → 返回 void）的解析结果与性能。对齐 test_69：元组解构参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_89', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc89.ts',
            `function add([first, second]: [number, number]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, '');
      assert.strictEqual(funcItem!.parameters[0].type, '[number, number]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_89 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_89 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_90
  * @tc.name dts2cpp_func_90
  * @tc.desc dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-入参：number。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_90', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc90.ts',
            `function f1(a: number): void { }`
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
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_90 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_90 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_91
  * @tc.name dts2cpp_func_91
  * @tc.desc dts2cpp funcs 签名 `(a: string): void`（1 参数 [string] → 返回 void）的解析结果与性能。扩充-入参：string。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_91', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc91.ts',
            `function f1(a: string): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_91 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_91 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_92
  * @tc.name dts2cpp_func_92
  * @tc.desc dts2cpp funcs 签名 `(a: boolean): void`（1 参数 [boolean] → 返回 void）的解析结果与性能。扩充-入参：boolean。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_92', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc92.ts',
            `function f1(a: boolean): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_92 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_92 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_93
  * @tc.name dts2cpp_func_93
  * @tc.desc dts2cpp funcs 签名 `(a: any): void`（1 参数 [any] → 返回 void）的解析结果与性能。扩充-入参：any。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_93', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc93.ts',
            `function f1(a: any): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_93 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_93 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_94
  * @tc.name dts2cpp_func_94
  * @tc.desc dts2cpp funcs 签名 `(a: unknown): void`（1 参数 [unknown] → 返回 void）的解析结果与性能。扩充-入参：unknown。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_94', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc94.ts',
            `function f1(a: unknown): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_94 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_94 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_95
  * @tc.name dts2cpp_func_95
  * @tc.desc dts2cpp funcs 签名 `(a: never): void`（1 参数 [never] → 返回 void）的解析结果与性能。扩充-入参：never。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_95', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc95.ts',
            `function f1(a: never): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'never');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_95 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_95 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_96
  * @tc.name dts2cpp_func_96
  * @tc.desc dts2cpp funcs 签名 `(a: null): void`（1 参数 [null] → 返回 void）的解析结果与性能。扩充-入参：null。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_96', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc96.ts',
            `function f1(a: null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_96 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_96 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_97
  * @tc.name dts2cpp_func_97
  * @tc.desc dts2cpp funcs 签名 `(a: undefined): void`（1 参数 [undefined] → 返回 void）的解析结果与性能。扩充-入参：undefined。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_97', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc97.ts',
            `function f1(a: undefined): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_97 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_97 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_98
  * @tc.name dts2cpp_func_98
  * @tc.desc dts2cpp funcs 签名 `(a: symbol): void`（1 参数 [symbol] → 返回 void）的解析结果与性能。扩充-入参：symbol。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_98', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc98.ts',
            `function f1(a: symbol): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_98 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_98 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_99
  * @tc.name dts2cpp_func_99
  * @tc.desc dts2cpp funcs 签名 `(a: bigint): void`（1 参数 [bigint] → 返回 void）的解析结果与性能。扩充-入参：bigint。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_99', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc99.ts',
            `function f1(a: bigint): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_99 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_99 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_100
  * @tc.name dts2cpp_func_100
  * @tc.desc dts2cpp funcs 签名 `(a: object): void`（1 参数 [object] → 返回 void）的解析结果与性能。扩充-入参：object。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_100', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc100.ts',
            `function f1(a: object): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_101
  * @tc.name dts2cpp_func_101
  * @tc.desc dts2cpp funcs 签名 `(a: number[]): void`（1 参数 [number[]] → 返回 void）的解析结果与性能。扩充-入参：一维数组。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_101', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc101.ts',
            `function f1(a: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_102
  * @tc.name dts2cpp_func_102
  * @tc.desc dts2cpp funcs 签名 `(a: string[][]): void`（1 参数 [string[][]] → 返回 void）的解析结果与性能。扩充-入参：二维数组。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_102', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc102.ts',
            `function f1(a: string[][]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[][]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_103
  * @tc.name dts2cpp_func_103
  * @tc.desc dts2cpp funcs 签名 `(a: Array<boolean>): void`（1 参数 [Array<boolean>] → 返回 void）的解析结果与性能。扩充-入参：Array<T> 泛型数组。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_103', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc103.ts',
            `function f1(a: Array<boolean>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Array<boolean>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_104
  * @tc.name dts2cpp_func_104
  * @tc.desc dts2cpp funcs 签名 `(a: Set<number>): void`（1 参数 [Set<number>] → 返回 void）的解析结果与性能。扩充-入参：Set。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_104', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc104.ts',
            `function f1(a: Set<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Set<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_105
  * @tc.name dts2cpp_func_105
  * @tc.desc dts2cpp funcs 签名 `(a: Map<string, number>): void`（1 参数 [Map<string, number>] → 返回 void）的解析结果与性能。扩充-入参：Map。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_105', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc105.ts',
            `function f1(a: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_106
  * @tc.name dts2cpp_func_106
  * @tc.desc dts2cpp funcs 签名 `(a: Record<string, string>): void`（1 参数 [Record<string, string>] → 返回 void）的解析结果与性能。扩充-入参：Record。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_106', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc106.ts',
            `function f1(a: Record<string, string>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Record<string, string>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_107
  * @tc.name dts2cpp_func_107
  * @tc.desc dts2cpp funcs 签名 `(a: Promise<string>): void`（1 参数 [Promise<string>] → 返回 void）的解析结果与性能。扩充-入参：Promise。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_107', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc107.ts',
            `function f1(a: Promise<string>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Promise<string>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_108
  * @tc.name dts2cpp_func_108
  * @tc.desc dts2cpp funcs 签名 `(a: [string, number]): void`（1 参数 [[string, number]] → 返回 void）的解析结果与性能。扩充-入参：元组。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_108', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc108.ts',
            `function f1(a: [string, number]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '[string, number]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_109
  * @tc.name dts2cpp_func_109
  * @tc.desc dts2cpp funcs 签名 `(a: (x: number) => string): void`（1 参数 [(x: number) => string] → 返回 void）的解析结果与性能。扩充-入参：函数类型。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_109', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc109.ts',
            `function f1(a: (x: number) => string): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '(x: number) => string');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_110
  * @tc.name dts2cpp_func_110
  * @tc.desc dts2cpp funcs 签名 `(a: "lit"): void`（1 参数 ["lit"] → 返回 void）的解析结果与性能。扩充-入参：字符串字面量。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_110', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc110.ts',
            `function f1(a: "lit"): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '"lit"');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_111
  * @tc.name dts2cpp_func_111
  * @tc.desc dts2cpp funcs 签名 `(a: 42): void`（1 参数 [42] → 返回 void）的解析结果与性能。扩充-入参：数字字面量。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_111', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc111.ts',
            `function f1(a: 42): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, '42');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_112
  * @tc.name dts2cpp_func_112
  * @tc.desc dts2cpp funcs 签名 `(a: true): void`（1 参数 [true] → 返回 void）的解析结果与性能。扩充-入参：布尔字面量。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_112', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc112.ts',
            `function f1(a: true): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f1');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'true');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_112 执行异常: ${String(err)}`);
    }
  });

});
