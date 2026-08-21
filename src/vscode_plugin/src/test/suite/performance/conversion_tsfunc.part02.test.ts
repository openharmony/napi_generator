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
const PARSE_LOOP = 5;
const PARSE_TOTAL_MS = 9000;      // 解析 5 次 ≤ 9s（与原 100 次/180s 同每迭代预算）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_DTS2CPP_Func_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Func_Suite.');

  /**
  * @tc.number dts2cpp_func_0036
  * @tc.name dts2cpp_func_0036
  * @tc.desc dts2cpp funcs union 签名 `(): string | number（0 参数 → 返回 `string | number`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0036', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0036.ts',
            `function parseFunc0036(): string | number { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'string|number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0037
  * @tc.name dts2cpp_func_0037
  * @tc.desc dts2cpp funcs union 签名 `(): string | boolean（0 参数 → 返回 `string | boolean`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0037', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0037.ts',
            `function parseFunc0037(): string | boolean { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'string|boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0038
  * @tc.name dts2cpp_func_0038
  * @tc.desc dts2cpp funcs union 签名 `(): string | null（0 参数 → 返回 `string | null`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0038', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0038.ts',
            `function parseFunc0038(): string | null { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'string|null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0039
  * @tc.name dts2cpp_func_0039
  * @tc.desc dts2cpp funcs union 签名 `(): string | undefined（0 参数 → 返回 `string | undefined`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0039', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0039.ts',
            `function parseFunc0039(): string | undefined { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'string|undefined');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0040
  * @tc.name dts2cpp_func_0040
  * @tc.desc dts2cpp funcs union 签名 `(): "ok" | "err"（0 参数 → 返回 `"ok" | "err"`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0040', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0040.ts',
            `function parseFunc0040(): "ok" | "err" { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), '"ok"|"err"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0041
  * @tc.name dts2cpp_func_0041
  * @tc.desc dts2cpp funcs union 签名 `(): -1 | 0 | 1（0 参数 → 返回 `-1 | 0 | 1`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0041', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0041.ts',
            `function parseFunc0041(): -1 | 0 | 1 { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), '-1|0|1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0042
  * @tc.name dts2cpp_func_0042
  * @tc.desc dts2cpp funcs union 签名 `(): string[] | number[]（0 参数 → 返回 `string[] | number[]`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0042', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0042.ts',
            `function parseFunc0042(): string[] | number[] { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'string[]|number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0043
  * @tc.name dts2cpp_func_0043
  * @tc.desc dts2cpp funcs union 签名 `(): Array<string> | Array<number>（0 参数 → 返回 `Array<string> | Array<number>`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0043', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0043.ts',
            `function parseFunc0043(): Array<string> | Array<number> { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'Array<string>|Array<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0044
  * @tc.name dts2cpp_func_0044
  * @tc.desc dts2cpp funcs union 签名 `(): Set<string> | Set<number>（0 参数 → 返回 `Set<string> | Set<number>`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0044', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0044.ts',
            `function parseFunc0044(): Set<string> | Set<number> { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'Set<string>|Set<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0045
  * @tc.name dts2cpp_func_0045
  * @tc.desc dts2cpp funcs union 签名 `(): [string, number] | [boolean, boolean]（0 参数 → 返回 `[string, number] | [boolean, boolean]`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0045', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0045.ts',
            `function parseFunc0045(): [string, number] | [boolean, boolean] { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), '[string,number]|[boolean,boolean]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0046
  * @tc.name dts2cpp_func_0046
  * @tc.desc dts2cpp funcs union 签名 `(): Map<string, number> | Map<string, boolean>（0 参数 → 返回 `Map<string, number> | Map<string, boolean>`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0046', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0046.ts',
            `function parseFunc0046(): Map<string, number> | Map<string, boolean> { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'Map<string,number>|Map<string,boolean>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0047
  * @tc.name dts2cpp_func_0047
  * @tc.desc dts2cpp funcs union 签名 `(): Record<string, any> | Map<string, any>（0 参数 → 返回 `Record<string, any> | Map<string, any>`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0047', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0047.ts',
            `function parseFunc0047(): Record<string, any> | Map<string, any> { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'Record<string,any>|Map<string,any>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0048
  * @tc.name dts2cpp_func_0048
  * @tc.desc dts2cpp funcs union 签名 `(): boolean | ((s: string) => boolean)（0 参数 → 返回 `boolean | ((s: string) => boolean)`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0048', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0048.ts',
            `function parseFunc0048(): boolean | ((s: string) => boolean) { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'boolean|((s:string)=>boolean)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0049
  * @tc.name dts2cpp_func_0049
  * @tc.desc dts2cpp funcs union 签名 `(): string | number | boolean（0 参数 → 返回 `string | number | boolean`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0049', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0049.ts',
            `function parseFunc0049(): string | number | boolean { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'string|number|boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0050
  * @tc.name dts2cpp_func_0050
  * @tc.desc dts2cpp funcs union 签名 `(): number[] | Set<number> | Map<string, number>（0 参数 → 返回 `number[] | Set<number> | Map<string, number>`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0050', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0050.ts',
            `function parseFunc0050(): number[] | Set<number> | Map<string, number> { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'number[]|Set<number>|Map<string,number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0051
  * @tc.name dts2cpp_func_0051
  * @tc.desc dts2cpp funcs union 签名 `(): Promise<string> | string（0 参数 → 返回 `Promise<string> | string`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0051', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0051.ts',
            `function parseFunc0051(): Promise<string> | string { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'Promise<string>|string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0052
  * @tc.name dts2cpp_func_0052
  * @tc.desc dts2cpp funcs union 签名 `(): unknown | null（0 参数 → 返回 `unknown | null`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0052', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0052.ts',
            `function parseFunc0052(): unknown | null { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'unknown|null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0053
  * @tc.name dts2cpp_func_0053
  * @tc.desc dts2cpp funcs union 签名 `(): ReadonlyArray<number> | number[]（0 参数 → 返回 `ReadonlyArray<number> | number[]`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0053', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0053.ts',
            `function parseFunc0053(): ReadonlyArray<number> | number[] { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'ReadonlyArray<number>|number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0054
  * @tc.name dts2cpp_func_0054
  * @tc.desc dts2cpp funcs union 签名 `(): [string] | string[] | Set<string>（0 参数 → 返回 `[string] | string[] | Set<string>`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0054', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0054.ts',
            `function parseFunc0054(): [string] | string[] | Set<string> { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), '[string]|string[]|Set<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0055
  * @tc.name dts2cpp_func_0055
  * @tc.desc dts2cpp funcs union 签名 `(): bigint | number（0 参数 → 返回 `bigint | number`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0055', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0055.ts',
            `function parseFunc0055(): bigint | number { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters.length, 0);
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'bigint|number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0056
  * @tc.name dts2cpp_func_0056
  * @tc.desc dts2cpp funcs union 签名 `(a: string | number): boolean | null（1 参数 [string | number] → 返回 `boolean | null`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0056', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0056.ts',
            `function parseFunc0056(a: string | number): boolean | null { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|number');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'boolean|null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0057
  * @tc.name dts2cpp_func_0057
  * @tc.desc dts2cpp funcs union 签名 `(a: string[] | number[]): Set<string> | Set<number>（1 参数 [string[] | number[]] → 返回 `Set<string> | Set<number>`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0057', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0057.ts',
            `function parseFunc0057(a: string[] | number[]): Set<string> | Set<number> { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string[]|number[]');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'Set<string>|Set<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0058
  * @tc.name dts2cpp_func_0058
  * @tc.desc dts2cpp funcs union 签名 `(a: Map<string, any> | Record<string, any>): Map<string, number> | number（1 参数 [Map<string, any> | Record<string, any>] → 返回 `Map<string, number> | number`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0058', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0058.ts',
            `function parseFunc0058(a: Map<string, any> | Record<string, any>): Map<string, number> | number { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Map<string,any>|Record<string,any>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'Map<string,number>|number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0059
  * @tc.name dts2cpp_func_0059
  * @tc.desc dts2cpp funcs union 签名 `(a: [string, number] | string): [boolean, boolean] | boolean（1 参数 [[string, number] | string] → 返回 `[boolean, boolean] | boolean`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0059', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0059.ts',
            `function parseFunc0059(a: [string, number] | string): [boolean, boolean] | boolean { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), '[string,number]|string');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), '[boolean,boolean]|boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0060
  * @tc.name dts2cpp_func_0060
  * @tc.desc dts2cpp funcs union 签名 `(a: string | null): string | undefined（1 参数 [string | null] → 返回 `string | undefined`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0060', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0060.ts',
            `function parseFunc0060(a: string | null): string | undefined { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|null');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'string|undefined');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0061
  * @tc.name dts2cpp_func_0061
  * @tc.desc dts2cpp funcs union 签名 `(a: number[] | Set<number> | Map<string, number>): string | number | boolean（1 参数 [number[] | Set<number> | Map<string, number>] → 返回 `string | number | boolean`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0061', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0061.ts',
            `function parseFunc0061(a: number[] | Set<number> | Map<string, number>): string | number | boolean { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'number[]|Set<number>|Map<string,number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'string|number|boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0062
  * @tc.name dts2cpp_func_0062
  * @tc.desc dts2cpp funcs union 签名 `(a: string | number | boolean): null | undefined（1 参数 [string | number | boolean] → 返回 `null | undefined`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0062', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0062.ts',
            `function parseFunc0062(a: string | number | boolean): null | undefined { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|number|boolean');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'null|undefined');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0062 执行异常: ${String(err)}`);
    }
  });

});
