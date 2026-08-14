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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Func_Suite part05.');

  /**
  * @tc.number dts2cpp_func_0164
  * @tc.name dts2cpp_func_0164
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: string): void`（2 参数 [number, string] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number, string)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0164', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0164.ts',
            `function fnA00B01(a: number, b: string): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA00B01');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0165
  * @tc.name dts2cpp_func_0165
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: boolean): void`（2 参数 [number, boolean] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number, boolean)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0165', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0165.ts',
            `function fnA00B02(a: number, b: boolean): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA00B02');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0166
  * @tc.name dts2cpp_func_0166
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: any): void`（2 参数 [number, any] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number, any)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0166', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0166.ts',
            `function fnA00B03(a: number, b: any): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA00B03');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'any');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0167
  * @tc.name dts2cpp_func_0167
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: unknown): void`（2 参数 [number, unknown] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number, unknown)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0167', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0167.ts',
            `function fnA00B04(a: number, b: unknown): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA00B04');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'unknown');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0168
  * @tc.name dts2cpp_func_0168
  * @tc.desc dts2cpp funcs 签名 `(a: string, b: boolean): void`（2 参数 [string, boolean] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string, boolean)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0168', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0168.ts',
            `function fnA01B02(a: string, b: boolean): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA01B02');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0169
  * @tc.name dts2cpp_func_0169
  * @tc.desc dts2cpp funcs 签名 `(a: string, b: any): void`（2 参数 [string, any] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string, any)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0169', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0169.ts',
            `function fnA01B03(a: string, b: any): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA01B03');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'any');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0170
  * @tc.name dts2cpp_func_0170
  * @tc.desc dts2cpp funcs 签名 `(a: string, b: unknown): void`（2 参数 [string, unknown] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string, unknown)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0170', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0170.ts',
            `function fnA01B04(a: string, b: unknown): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA01B04');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'unknown');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0171
  * @tc.name dts2cpp_func_0171
  * @tc.desc dts2cpp funcs 签名 `(a: string, b: null): void`（2 参数 [string, null] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string, null)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0171', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0171.ts',
            `function fnA01B05(a: string, b: null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA01B05');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0172
  * @tc.name dts2cpp_func_0172
  * @tc.desc dts2cpp funcs 签名 `(a: boolean, b: any): void`（2 参数 [boolean, any] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean, any)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0172', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0172.ts',
            `function fnA02B03(a: boolean, b: any): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA02B03');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'any');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0173
  * @tc.name dts2cpp_func_0173
  * @tc.desc dts2cpp funcs 签名 `(a: boolean, b: unknown): void`（2 参数 [boolean, unknown] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean, unknown)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0173', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0173.ts',
            `function fnA02B04(a: boolean, b: unknown): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA02B04');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'unknown');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0174
  * @tc.name dts2cpp_func_0174
  * @tc.desc dts2cpp funcs 签名 `(a: boolean, b: null): void`（2 参数 [boolean, null] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean, null)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0174', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0174.ts',
            `function fnA02B05(a: boolean, b: null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA02B05');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0175
  * @tc.name dts2cpp_func_0175
  * @tc.desc dts2cpp funcs 签名 `(a: boolean, b: undefined): void`（2 参数 [boolean, undefined] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean, undefined)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0175', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0175.ts',
            `function fnA02B06(a: boolean, b: undefined): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA02B06');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'undefined');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0176
  * @tc.name dts2cpp_func_0176
  * @tc.desc dts2cpp funcs 签名 `(a: any, b: unknown): void`（2 参数 [any, unknown] → 返回 void）的解析结果与性能。扩充-双参矩阵：(any, unknown)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0176', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0176.ts',
            `function fnA03B04(a: any, b: unknown): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA03B04');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'unknown');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0177
  * @tc.name dts2cpp_func_0177
  * @tc.desc dts2cpp funcs 签名 `(a: any, b: null): void`（2 参数 [any, null] → 返回 void）的解析结果与性能。扩充-双参矩阵：(any, null)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0177', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0177.ts',
            `function fnA03B05(a: any, b: null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA03B05');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0178
  * @tc.name dts2cpp_func_0178
  * @tc.desc dts2cpp funcs 签名 `(a: any, b: undefined): void`（2 参数 [any, undefined] → 返回 void）的解析结果与性能。扩充-双参矩阵：(any, undefined)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0178', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0178.ts',
            `function fnA03B06(a: any, b: undefined): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA03B06');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'undefined');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0179
  * @tc.name dts2cpp_func_0179
  * @tc.desc dts2cpp funcs 签名 `(a: any, b: symbol): void`（2 参数 [any, symbol] → 返回 void）的解析结果与性能。扩充-双参矩阵：(any, symbol)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0179', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0179.ts',
            `function fnA03B07(a: any, b: symbol): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA03B07');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0180
  * @tc.name dts2cpp_func_0180
  * @tc.desc dts2cpp funcs 签名 `(a: unknown, b: null): void`（2 参数 [unknown, null] → 返回 void）的解析结果与性能。扩充-双参矩阵：(unknown, null)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0180', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0180.ts',
            `function fnA04B05(a: unknown, b: null): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA04B05');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'null');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0181
  * @tc.name dts2cpp_func_0181
  * @tc.desc dts2cpp funcs 签名 `(a: unknown, b: undefined): void`（2 参数 [unknown, undefined] → 返回 void）的解析结果与性能。扩充-双参矩阵：(unknown, undefined)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0181', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0181.ts',
            `function fnA04B06(a: unknown, b: undefined): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA04B06');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'undefined');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0182
  * @tc.name dts2cpp_func_0182
  * @tc.desc dts2cpp funcs 签名 `(a: unknown, b: symbol): void`（2 参数 [unknown, symbol] → 返回 void）的解析结果与性能。扩充-双参矩阵：(unknown, symbol)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0182', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0182.ts',
            `function fnA04B07(a: unknown, b: symbol): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA04B07');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0183
  * @tc.name dts2cpp_func_0183
  * @tc.desc dts2cpp funcs 签名 `(a: unknown, b: bigint): void`（2 参数 [unknown, bigint] → 返回 void）的解析结果与性能。扩充-双参矩阵：(unknown, bigint)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0183', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0183.ts',
            `function fnA04B08(a: unknown, b: bigint): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA04B08');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'unknown');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0184
  * @tc.name dts2cpp_func_0184
  * @tc.desc dts2cpp funcs 签名 `(a: null, b: undefined): void`（2 参数 [null, undefined] → 返回 void）的解析结果与性能。扩充-双参矩阵：(null, undefined)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0184', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0184.ts',
            `function fnA05B06(a: null, b: undefined): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA05B06');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'undefined');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0185
  * @tc.name dts2cpp_func_0185
  * @tc.desc dts2cpp funcs 签名 `(a: null, b: symbol): void`（2 参数 [null, symbol] → 返回 void）的解析结果与性能。扩充-双参矩阵：(null, symbol)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0185', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0185.ts',
            `function fnA05B07(a: null, b: symbol): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA05B07');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0185 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0186
  * @tc.name dts2cpp_func_0186
  * @tc.desc dts2cpp funcs 签名 `(a: null, b: bigint): void`（2 参数 [null, bigint] → 返回 void）的解析结果与性能。扩充-双参矩阵：(null, bigint)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0186', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0186.ts',
            `function fnA05B08(a: null, b: bigint): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA05B08');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0186 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0187
  * @tc.name dts2cpp_func_0187
  * @tc.desc dts2cpp funcs 签名 `(a: null, b: object): void`（2 参数 [null, object] → 返回 void）的解析结果与性能。扩充-双参矩阵：(null, object)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0187', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0187.ts',
            `function fnA05B09(a: null, b: object): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA05B09');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'null');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'object');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0187 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0188
  * @tc.name dts2cpp_func_0188
  * @tc.desc dts2cpp funcs 签名 `(a: undefined, b: symbol): void`（2 参数 [undefined, symbol] → 返回 void）的解析结果与性能。扩充-双参矩阵：(undefined, symbol)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0188', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0188.ts',
            `function fnA06B07(a: undefined, b: symbol): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA06B07');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'symbol');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0188 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0189
  * @tc.name dts2cpp_func_0189
  * @tc.desc dts2cpp funcs 签名 `(a: undefined, b: bigint): void`（2 参数 [undefined, bigint] → 返回 void）的解析结果与性能。扩充-双参矩阵：(undefined, bigint)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0189', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0189.ts',
            `function fnA06B08(a: undefined, b: bigint): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA06B08');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0189 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0190
  * @tc.name dts2cpp_func_0190
  * @tc.desc dts2cpp funcs 签名 `(a: undefined, b: object): void`（2 参数 [undefined, object] → 返回 void）的解析结果与性能。扩充-双参矩阵：(undefined, object)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0190', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0190.ts',
            `function fnA06B09(a: undefined, b: object): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA06B09');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'object');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0190 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0191
  * @tc.name dts2cpp_func_0191
  * @tc.desc dts2cpp funcs 签名 `(a: undefined, b: number[]): void`（2 参数 [undefined, number[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(undefined, number[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0191', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0191.ts',
            `function fnA06B10(a: undefined, b: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA06B10');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'undefined');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0191 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0192
  * @tc.name dts2cpp_func_0192
  * @tc.desc dts2cpp funcs 签名 `(a: symbol, b: bigint): void`（2 参数 [symbol, bigint] → 返回 void）的解析结果与性能。扩充-双参矩阵：(symbol, bigint)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0192', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0192.ts',
            `function fnA07B08(a: symbol, b: bigint): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA07B08');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'bigint');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0192 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0193
  * @tc.name dts2cpp_func_0193
  * @tc.desc dts2cpp funcs 签名 `(a: symbol, b: object): void`（2 参数 [symbol, object] → 返回 void）的解析结果与性能。扩充-双参矩阵：(symbol, object)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0193', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0193.ts',
            `function fnA07B09(a: symbol, b: object): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA07B09');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'object');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0194
  * @tc.name dts2cpp_func_0194
  * @tc.desc dts2cpp funcs 签名 `(a: symbol, b: number[]): void`（2 参数 [symbol, number[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(symbol, number[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0194', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0194.ts',
            `function fnA07B10(a: symbol, b: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA07B10');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0195
  * @tc.name dts2cpp_func_0195
  * @tc.desc dts2cpp funcs 签名 `(a: symbol, b: string[]): void`（2 参数 [symbol, string[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(symbol, string[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0195', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0195.ts',
            `function fnA07B11(a: symbol, b: string[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA07B11');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'symbol');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0195 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0196
  * @tc.name dts2cpp_func_0196
  * @tc.desc dts2cpp funcs 签名 `(a: bigint, b: object): void`（2 参数 [bigint, object] → 返回 void）的解析结果与性能。扩充-双参矩阵：(bigint, object)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0196', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0196.ts',
            `function fnA08B09(a: bigint, b: object): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA08B09');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'object');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0196 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0197
  * @tc.name dts2cpp_func_0197
  * @tc.desc dts2cpp funcs 签名 `(a: bigint, b: number[]): void`（2 参数 [bigint, number[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(bigint, number[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0197', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0197.ts',
            `function fnA08B10(a: bigint, b: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA08B10');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0197 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0198
  * @tc.name dts2cpp_func_0198
  * @tc.desc dts2cpp funcs 签名 `(a: bigint, b: string[]): void`（2 参数 [bigint, string[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(bigint, string[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0198', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0198.ts',
            `function fnA08B11(a: bigint, b: string[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA08B11');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0198 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0199
  * @tc.name dts2cpp_func_0199
  * @tc.desc dts2cpp funcs 签名 `(a: bigint, b: boolean[]): void`（2 参数 [bigint, boolean[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(bigint, boolean[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0199', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0199.ts',
            `function fnA08B12(a: bigint, b: boolean[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA08B12');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'bigint');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0199 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0200
  * @tc.name dts2cpp_func_0200
  * @tc.desc dts2cpp funcs 签名 `(a: object, b: number[]): void`（2 参数 [object, number[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(object, number[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0200', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0200.ts',
            `function fnA09B10(a: object, b: number[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA09B10');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0200 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0201
  * @tc.name dts2cpp_func_0201
  * @tc.desc dts2cpp funcs 签名 `(a: object, b: string[]): void`（2 参数 [object, string[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(object, string[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0201', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0201.ts',
            `function fnA09B11(a: object, b: string[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA09B11');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0201 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0202
  * @tc.name dts2cpp_func_0202
  * @tc.desc dts2cpp funcs 签名 `(a: object, b: boolean[]): void`（2 参数 [object, boolean[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(object, boolean[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0202', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0202.ts',
            `function fnA09B12(a: object, b: boolean[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA09B12');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0202 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0203
  * @tc.name dts2cpp_func_0203
  * @tc.desc dts2cpp funcs 签名 `(a: object, b: Array<number>): void`（2 参数 [object, Array<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(object, Array<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0203', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0203.ts',
            `function fnA09B13(a: object, b: Array<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA09B13');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'object');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0203 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0204
  * @tc.name dts2cpp_func_0204
  * @tc.desc dts2cpp funcs 签名 `(a: number[], b: string[]): void`（2 参数 [number[], string[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number[], string[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0204', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0204.ts',
            `function fnA10B11(a: number[], b: string[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA10B11');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'string[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0205
  * @tc.name dts2cpp_func_0205
  * @tc.desc dts2cpp funcs 签名 `(a: number[], b: boolean[]): void`（2 参数 [number[], boolean[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number[], boolean[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0205', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0205.ts',
            `function fnA10B12(a: number[], b: boolean[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA10B12');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0206
  * @tc.name dts2cpp_func_0206
  * @tc.desc dts2cpp funcs 签名 `(a: number[], b: Array<number>): void`（2 参数 [number[], Array<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number[], Array<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0206', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0206.ts',
            `function fnA10B13(a: number[], b: Array<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA10B13');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0207
  * @tc.name dts2cpp_func_0207
  * @tc.desc dts2cpp funcs 签名 `(a: number[], b: Map<string, number>): void`（2 参数 [number[], Map<string, number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number[], Map<string, number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0207', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0207.ts',
            `function fnA10B14(a: number[], b: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA10B14');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0207 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0208
  * @tc.name dts2cpp_func_0208
  * @tc.desc dts2cpp funcs 签名 `(a: string[], b: boolean[]): void`（2 参数 [string[], boolean[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string[], boolean[])。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0208', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0208.ts',
            `function fnA11B12(a: string[], b: boolean[]): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA11B12');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'boolean[]');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0209
  * @tc.name dts2cpp_func_0209
  * @tc.desc dts2cpp funcs 签名 `(a: string[], b: Array<number>): void`（2 参数 [string[], Array<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string[], Array<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0209', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0209.ts',
            `function fnA11B13(a: string[], b: Array<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA11B13');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0210
  * @tc.name dts2cpp_func_0210
  * @tc.desc dts2cpp funcs 签名 `(a: string[], b: Map<string, number>): void`（2 参数 [string[], Map<string, number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string[], Map<string, number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0210', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0210.ts',
            `function fnA11B14(a: string[], b: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA11B14');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0211
  * @tc.name dts2cpp_func_0211
  * @tc.desc dts2cpp funcs 签名 `(a: string[], b: Set<number>): void`（2 参数 [string[], Set<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string[], Set<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0211', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0211.ts',
            `function fnA11B15(a: string[], b: Set<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA11B15');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Set<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0212
  * @tc.name dts2cpp_func_0212
  * @tc.desc dts2cpp funcs 签名 `(a: boolean[], b: Array<number>): void`（2 参数 [boolean[], Array<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean[], Array<number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0212', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0212.ts',
            `function fnA12B13(a: boolean[], b: Array<number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA12B13');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Array<number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0213
  * @tc.name dts2cpp_func_0213
  * @tc.desc dts2cpp funcs 签名 `(a: boolean[], b: Map<string, number>): void`（2 参数 [boolean[], Map<string, number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean[], Map<string, number>)。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0213', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0213.ts',
            `function fnA12B14(a: boolean[], b: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'fnA12B14');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'boolean[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0213 执行异常: ${String(err)}`);
    }
  });

});

