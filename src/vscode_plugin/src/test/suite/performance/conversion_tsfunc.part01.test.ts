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
  * @tc.number dts2cpp_func_0001
  * @tc.name dts2cpp_func_0001
  * @tc.desc dts2cpp funcs union 签名 `(a: string | number): void（1 参数 [string | number] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0001', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0001.ts',
            `function parseFunc0001(a: string | number): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|number');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0002
  * @tc.name dts2cpp_func_0002
  * @tc.desc dts2cpp funcs union 签名 `(a: string | boolean): void（1 参数 [string | boolean] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0002', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0002.ts',
            `function parseFunc0002(a: string | boolean): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|boolean');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0003
  * @tc.name dts2cpp_func_0003
  * @tc.desc dts2cpp funcs union 签名 `(a: number | boolean): void（1 参数 [number | boolean] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0003', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0003.ts',
            `function parseFunc0003(a: number | boolean): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'number|boolean');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0004
  * @tc.name dts2cpp_func_0004
  * @tc.desc dts2cpp funcs union 签名 `(a: string | any): void（1 参数 [string | any] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0004', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0004.ts',
            `function parseFunc0004(a: string | any): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|any');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0005
  * @tc.name dts2cpp_func_0005
  * @tc.desc dts2cpp funcs union 签名 `(a: string | null): void（1 参数 [string | null] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0005', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0005.ts',
            `function parseFunc0005(a: string | null): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|null');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0006
  * @tc.name dts2cpp_func_0006
  * @tc.desc dts2cpp funcs union 签名 `(a: string | undefined): void（1 参数 [string | undefined] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0006', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0006.ts',
            `function parseFunc0006(a: string | undefined): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|undefined');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0007
  * @tc.name dts2cpp_func_0007
  * @tc.desc dts2cpp funcs union 签名 `(a: string | null | undefined): void（1 参数 [string | null | undefined] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0007', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0007.ts',
            `function parseFunc0007(a: string | null | undefined): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|null|undefined');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0008
  * @tc.name dts2cpp_func_0008
  * @tc.desc dts2cpp funcs union 签名 `(a: string | symbol): void（1 参数 [string | symbol] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0008', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0008.ts',
            `function parseFunc0008(a: string | symbol): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|symbol');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0009
  * @tc.name dts2cpp_func_0009
  * @tc.desc dts2cpp funcs union 签名 `(a: "left" | "right" | "center"): void（1 参数 ["left" | "right" | "center"] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0009', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0009.ts',
            `function parseFunc0009(a: "left" | "right" | "center"): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), '"left"|"right"|"center"');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0010
  * @tc.name dts2cpp_func_0010
  * @tc.desc dts2cpp funcs union 签名 `(a: -1 | 0 | 1): void（1 参数 [-1 | 0 | 1] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0010', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0010.ts',
            `function parseFunc0010(a: -1 | 0 | 1): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), '-1|0|1');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0011
  * @tc.name dts2cpp_func_0011
  * @tc.desc dts2cpp funcs union 签名 `(a: true | false): void（1 参数 [true | false] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0011', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0011.ts',
            `function parseFunc0011(a: true | false): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'true|false');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0012
  * @tc.name dts2cpp_func_0012
  * @tc.desc dts2cpp funcs union 签名 `(a: string | number[]): void（1 参数 [string | number[]] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0012', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0012.ts',
            `function parseFunc0012(a: string | number[]): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|number[]');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0013
  * @tc.name dts2cpp_func_0013
  * @tc.desc dts2cpp funcs union 签名 `(a: string[] | number[]): void（1 参数 [string[] | number[]] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0013', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0013.ts',
            `function parseFunc0013(a: string[] | number[]): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string[]|number[]');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0014
  * @tc.name dts2cpp_func_0014
  * @tc.desc dts2cpp funcs union 签名 `(a: Array<string> | Array<number>): void（1 参数 [Array<string> | Array<number>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0014', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0014.ts',
            `function parseFunc0014(a: Array<string> | Array<number>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Array<string>|Array<number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0015
  * @tc.name dts2cpp_func_0015
  * @tc.desc dts2cpp funcs union 签名 `(a: string[] | Array<number>): void（1 参数 [string[] | Array<number>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0015', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0015.ts',
            `function parseFunc0015(a: string[] | Array<number>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string[]|Array<number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0016
  * @tc.name dts2cpp_func_0016
  * @tc.desc dts2cpp funcs union 签名 `(a: Set<string> | Set<number>): void（1 参数 [Set<string> | Set<number>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0016', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0016.ts',
            `function parseFunc0016(a: Set<string> | Set<number>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Set<string>|Set<number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0017
  * @tc.name dts2cpp_func_0017
  * @tc.desc dts2cpp funcs union 签名 `(a: Set<string> | string[]): void（1 参数 [Set<string> | string[]] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0017', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0017.ts',
            `function parseFunc0017(a: Set<string> | string[]): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Set<string>|string[]');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0018
  * @tc.name dts2cpp_func_0018
  * @tc.desc dts2cpp funcs union 签名 `(a: [string, number] | [boolean]): void（1 参数 [[string, number] | [boolean]] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0018', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0018.ts',
            `function parseFunc0018(a: [string, number] | [boolean]): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), '[string,number]|[boolean]');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0019
  * @tc.name dts2cpp_func_0019
  * @tc.desc dts2cpp funcs union 签名 `(a: [string, number] | string[]): void（1 参数 [[string, number] | string[]] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0019', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0019.ts',
            `function parseFunc0019(a: [string, number] | string[]): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), '[string,number]|string[]');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0020
  * @tc.name dts2cpp_func_0020
  * @tc.desc dts2cpp funcs union 签名 `(a: Map<string, number> | Map<string, boolean>): void（1 参数 [Map<string, number> | Map<string, boolean>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0020', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0020.ts',
            `function parseFunc0020(a: Map<string, number> | Map<string, boolean>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Map<string,number>|Map<string,boolean>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0021
  * @tc.name dts2cpp_func_0021
  * @tc.desc dts2cpp funcs union 签名 `(a: Map<string, any> | Record<string, number>): void（1 参数 [Map<string, any> | Record<string, number>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0021', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0021.ts',
            `function parseFunc0021(a: Map<string, any> | Record<string, number>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Map<string,any>|Record<string,number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0022
  * @tc.name dts2cpp_func_0022
  * @tc.desc dts2cpp funcs union 签名 `(a: Record<string, string> | Record<string, number>): void（1 参数 [Record<string, string> | Record<string, number>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0022', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0022.ts',
            `function parseFunc0022(a: Record<string, string> | Record<string, number>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Record<string,string>|Record<string,number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0023
  * @tc.name dts2cpp_func_0023
  * @tc.desc dts2cpp funcs union 签名 `(a: boolean | ((s: string) => boolean)): void（1 参数 [boolean | ((s: string) => boolean)] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0023', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0023.ts',
            `function parseFunc0023(a: boolean | ((s: string) => boolean)): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'boolean|((s:string)=>boolean)');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0024
  * @tc.name dts2cpp_func_0024
  * @tc.desc dts2cpp funcs union 签名 `(a: string | number | boolean | null): void（1 参数 [string | number | boolean | null] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0024', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0024.ts',
            `function parseFunc0024(a: string | number | boolean | null): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'string|number|boolean|null');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0025
  * @tc.name dts2cpp_func_0025
  * @tc.desc dts2cpp funcs union 签名 `(a: number[] | Set<number> | Map<string, number>): void（1 参数 [number[] | Set<number> | Map<string, number>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0025', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0025.ts',
            `function parseFunc0025(a: number[] | Set<number> | Map<string, number>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'number[]|Set<number>|Map<string,number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0026
  * @tc.name dts2cpp_func_0026
  * @tc.desc dts2cpp funcs union 签名 `(a: [number, string] | Map<number, string> | Set<[number, string]>): void（1 参数 [[number, string] | Map<number, string> | Set<[number, string]>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0026', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0026.ts',
            `function parseFunc0026(a: [number, string] | Map<number, string> | Set<[number, string]>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), '[number,string]|Map<number,string>|Set<[number,string]>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0027
  * @tc.name dts2cpp_func_0027
  * @tc.desc dts2cpp funcs union 签名 `(a: ReadonlyArray<string> | ReadonlyArray<number>): void（1 参数 [ReadonlyArray<string> | ReadonlyArray<number>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0027', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0027.ts',
            `function parseFunc0027(a: ReadonlyArray<string> | ReadonlyArray<number>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'ReadonlyArray<string>|ReadonlyArray<number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0028
  * @tc.name dts2cpp_func_0028
  * @tc.desc dts2cpp funcs union 签名 `(a: ReadonlyMap<string, number> | Map<string, number>): void（1 参数 [ReadonlyMap<string, number> | Map<string, number>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0028', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0028.ts',
            `function parseFunc0028(a: ReadonlyMap<string, number> | Map<string, number>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'ReadonlyMap<string,number>|Map<string,number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0029
  * @tc.name dts2cpp_func_0029
  * @tc.desc dts2cpp funcs union 签名 `(a: unknown | never): void（1 参数 [unknown | never] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0029', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0029.ts',
            `function parseFunc0029(a: unknown | never): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'unknown|never');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0030
  * @tc.name dts2cpp_func_0030
  * @tc.desc dts2cpp funcs union 签名 `(a: bigint | number): void（1 参数 [bigint | number] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0030', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0030.ts',
            `function parseFunc0030(a: bigint | number): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'bigint|number');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0031
  * @tc.name dts2cpp_func_0031
  * @tc.desc dts2cpp funcs union 签名 `(a: object | string): void（1 参数 [object | string] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0031', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0031.ts',
            `function parseFunc0031(a: object | string): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'object|string');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0032
  * @tc.name dts2cpp_func_0032
  * @tc.desc dts2cpp funcs union 签名 `(a: Promise<string> | Promise<number>): void（1 参数 [Promise<string> | Promise<number>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0032', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0032.ts',
            `function parseFunc0032(a: Promise<string> | Promise<number>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Promise<string>|Promise<number>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0033
  * @tc.name dts2cpp_func_0033
  * @tc.desc dts2cpp funcs union 签名 `(a: Array<Map<string, number>> | Map<string, number[]>): void（1 参数 [Array<Map<string, number>> | Map<string, number[]>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0033', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0033.ts',
            `function parseFunc0033(a: Array<Map<string, number>> | Map<string, number[]>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Array<Map<string,number>>|Map<string,number[]>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0034
  * @tc.name dts2cpp_func_0034
  * @tc.desc dts2cpp funcs union 签名 `(a: Set<string[]> | Array<Set<string>>): void（1 参数 [Set<string[]> | Array<Set<string>>] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0034', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0034.ts',
            `function parseFunc0034(a: Set<string[]> | Array<Set<string>>): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Set<string[]>|Array<Set<string>>');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0035
  * @tc.name dts2cpp_func_0035
  * @tc.desc dts2cpp funcs union 签名 `(a: Options | "auto"): void（1 参数 [Options | "auto"] → 返回 `void`）` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0035', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0035.ts',
            `interface Options { width: number; }
function parseFunc0035(a: Options | "auto"): void { return 0 as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.strictEqual(parseObj.funcs[0].parameters[0].type.replace(/\s+/g, ''), 'Options|"auto"');
      assert.strictEqual(parseObj.funcs[0].returns.replace(/\s+/g, ''), 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0035 执行异常: ${String(err)}`);
    }
  });

});
