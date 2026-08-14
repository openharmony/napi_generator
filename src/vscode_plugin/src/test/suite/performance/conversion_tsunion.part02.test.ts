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
const PARSE_TOTAL_MS = 6000;      // 解析 10 次 ≤ 6s（实测约 4.5~6s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_DTS2CPP_Union_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Union_Suite.');

  /**
  * @tc.number dts2cpp_union_0031
  * @tc.name dts2cpp_union_0031
  * @tc.desc dts2cpp union type alias `type UnionType0031 = readonly [string, number] | [string, number]` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0031', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0031.ts',
            `type UnionType0031 = readonly [string, number] | [string, number];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0031');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly [string, number]');
      assert.strictEqual(typeItem!.types[1], '[string, number]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0032
  * @tc.name dts2cpp_union_0032
  * @tc.desc dts2cpp union type alias `type UnionType0032 = [string, ...number[]] | string[]` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0032', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0032.ts',
            `type UnionType0032 = [string, ...number[]] | string[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0032');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[string, ...number[]]');
      assert.strictEqual(typeItem!.types[1], 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0033
  * @tc.name dts2cpp_union_0033
  * @tc.desc dts2cpp union type alias `type UnionType0033 = Map<string, number> | Map<string, boolean>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0033', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0033.ts',
            `type UnionType0033 = Map<string, number> | Map<string, boolean>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0033');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, number>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, boolean>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0034
  * @tc.name dts2cpp_union_0034
  * @tc.desc dts2cpp union type alias `type UnionType0034 = Map<string, any> | Record<string, number>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0034', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0034.ts',
            `type UnionType0034 = Map<string, any> | Record<string, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0034');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, any>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0035
  * @tc.name dts2cpp_union_0035
  * @tc.desc dts2cpp union type alias `type UnionType0035 = Record<string, string> | Record<string, number>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0035', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0035.ts',
            `type UnionType0035 = Record<string, string> | Record<string, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0035');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<string, string>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0036
  * @tc.name dts2cpp_union_0036
  * @tc.desc dts2cpp union type alias `type UnionType0036 = ReadonlyMap<string, number> | Map<string, number>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0036', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0036.ts',
            `type UnionType0036 = ReadonlyMap<string, number> | Map<string, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0036');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReadonlyMap<string, number>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0037
  * @tc.name dts2cpp_union_0037
  * @tc.desc dts2cpp union type alias `type UnionType0037 = WeakMap<object, string> | Map<object, string>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0037', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0037.ts',
            `type UnionType0037 = WeakMap<object, string> | Map<object, string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0037');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'WeakMap<object, string>');
      assert.strictEqual(typeItem!.types[1], 'Map<object, string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0038
  * @tc.name dts2cpp_union_0038
  * @tc.desc dts2cpp union type alias `type UnionType0038 = Map<string, number[]> | Record<string, number[]>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0038', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0038.ts',
            `type UnionType0038 = Map<string, number[]> | Record<string, number[]>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0038');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, number[]>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, number[]>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0039
  * @tc.name dts2cpp_union_0039
  * @tc.desc dts2cpp union type alias `type UnionType0039 = boolean | ((s: string) => boolean)` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0039', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0039.ts',
            `type UnionType0039 = boolean | ((s: string) => boolean);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0039');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'boolean');
      assert.strictEqual(typeItem!.types[1], '((s: string) => boolean)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0040
  * @tc.name dts2cpp_union_0040
  * @tc.desc dts2cpp union type alias `type UnionType0040 = (() => string) | (() => number)` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0040', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0040.ts',
            `type UnionType0040 = (() => string) | (() => number);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0040');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(() => string)');
      assert.strictEqual(typeItem!.types[1], '(() => number)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0041
  * @tc.name dts2cpp_union_0041
  * @tc.desc dts2cpp union type alias `type UnionType0041 = ((value: string) => void) | ((value: number) => void)` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0041', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0041.ts',
            `type UnionType0041 = ((value: string) => void) | ((value: number) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0041');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((value: string) => void)');
      assert.strictEqual(typeItem!.types[1], '((value: number) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0042
  * @tc.name dts2cpp_union_0042
  * @tc.desc dts2cpp union type alias `type UnionType0042 = Promise<string> | Promise<number>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0042', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0042.ts',
            `type UnionType0042 = Promise<string> | Promise<number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0042');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<string>');
      assert.strictEqual(typeItem!.types[1], 'Promise<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0043
  * @tc.name dts2cpp_union_0043
  * @tc.desc dts2cpp union type alias `type UnionType0043 = Promise<string> | string` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0043', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0043.ts',
            `type UnionType0043 = Promise<string> | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0043');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<string>');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0044
  * @tc.name dts2cpp_union_0044
  * @tc.desc dts2cpp union type alias `type UnionType0044 = PromiseLike<string> | Promise<string>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0044', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0044.ts',
            `type UnionType0044 = PromiseLike<string> | Promise<string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0044');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'PromiseLike<string>');
      assert.strictEqual(typeItem!.types[1], 'Promise<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0045
  * @tc.name dts2cpp_union_0045
  * @tc.desc dts2cpp union type alias `type UnionType0045 = Array<Map<string, number>> | Map<string, number[]>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0045', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0045.ts',
            `type UnionType0045 = Array<Map<string, number>> | Map<string, number[]>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0045');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<Map<string, number>>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, number[]>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0046
  * @tc.name dts2cpp_union_0046
  * @tc.desc dts2cpp union type alias `type UnionType0046 = Set<string[]> | Array<Set<string>>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0046', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0046.ts',
            `type UnionType0046 = Set<string[]> | Array<Set<string>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0046');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Set<string[]>');
      assert.strictEqual(typeItem!.types[1], 'Array<Set<string>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0047
  * @tc.name dts2cpp_union_0047
  * @tc.desc dts2cpp union type alias `type UnionType0047 = Map<string, Set<number>> | Set<Map<string, number>>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0047', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0047.ts',
            `type UnionType0047 = Map<string, Set<number>> | Set<Map<string, number>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0047');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, Set<number>>');
      assert.strictEqual(typeItem!.types[1], 'Set<Map<string, number>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0048
  * @tc.name dts2cpp_union_0048
  * @tc.desc dts2cpp union type alias `type UnionType0048 = [Map<string, number>, Set<boolean>] | Array<string>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0048', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0048.ts',
            `type UnionType0048 = [Map<string, number>, Set<boolean>] | Array<string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0048');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[Map<string, number>, Set<boolean>]');
      assert.strictEqual(typeItem!.types[1], 'Array<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0049
  * @tc.name dts2cpp_union_0049
  * @tc.desc dts2cpp union type alias `type UnionType0049 = number[] | Set<number> | Map<string, number>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0049', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0049.ts',
            `type UnionType0049 = number[] | Set<number> | Map<string, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0049');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'number[]');
      assert.strictEqual(typeItem!.types[1], 'Set<number>');
      assert.strictEqual(typeItem!.types[2], 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0050
  * @tc.name dts2cpp_union_0050
  * @tc.desc dts2cpp union type alias `type UnionType0050 = [number, string] | Map<number, string> | Set<[number, string]>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0050', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0050.ts',
            `type UnionType0050 = [number, string] | Map<number, string> | Set<[number, string]>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0050');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '[number, string]');
      assert.strictEqual(typeItem!.types[1], 'Map<number, string>');
      assert.strictEqual(typeItem!.types[2], 'Set<[number, string]>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0051
  * @tc.name dts2cpp_union_0051
  * @tc.desc dts2cpp union type alias `type UnionType0051 = string | number | boolean | null | undefined` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0051', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0051.ts',
            `type UnionType0051 = string | number | boolean | null | undefined;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0051');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], 'boolean');
      assert.strictEqual(typeItem!.types[3], 'null');
      assert.strictEqual(typeItem!.types[4], 'undefined');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0052
  * @tc.name dts2cpp_union_0052
  * @tc.desc dts2cpp union type alias `type UnionType0052 = string[] | Set<string> | Map<string, string> | [string]` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0052', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0052.ts',
            `type UnionType0052 = string[] | Set<string> | Map<string, string> | [string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0052');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'string[]');
      assert.strictEqual(typeItem!.types[1], 'Set<string>');
      assert.strictEqual(typeItem!.types[2], 'Map<string, string>');
      assert.strictEqual(typeItem!.types[3], '[string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0053
  * @tc.name dts2cpp_union_0053
  * @tc.desc dts2cpp union type alias `type UnionType0053 = Options | "auto"` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0053', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0053.ts',
            `interface Options { width: number; }
type UnionType0053 = Options | "auto";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0053');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Options');
      assert.strictEqual(typeItem!.types[1], '"auto"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0054
  * @tc.name dts2cpp_union_0054
  * @tc.desc dts2cpp union type alias `type UnionType0054 = Success | Failure` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0054', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0054.ts',
            `interface Success { ok: true; value: string; }
interface Failure { ok: false; error: string; }
type UnionType0054 = Success | Failure;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0054');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Success');
      assert.strictEqual(typeItem!.types[1], 'Failure');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0055
  * @tc.name dts2cpp_union_0055
  * @tc.desc dts2cpp union type alias `type UnionType0055 = Circle | Square` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0055', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0055.ts',
            `interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; size: number; }
type UnionType0055 = Circle | Square;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0055');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Circle');
      assert.strictEqual(typeItem!.types[1], 'Square');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0056
  * @tc.name dts2cpp_union_0056
  * @tc.desc dts2cpp union type alias `type UnionType0056 = Base | Derived` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0056', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0056.ts',
            `class Base { id: number = 0; }
class Derived extends Base { name: string = ""; }
type UnionType0056 = Base | Derived;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0056');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Base');
      assert.strictEqual(typeItem!.types[1], 'Derived');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0057
  * @tc.name dts2cpp_union_0057
  * @tc.desc dts2cpp union type alias `type UnionType0057 = Status | string` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0057', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0057.ts',
            `enum Status { Ready, Running, Done }
type UnionType0057 = Status | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0057');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Status');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0058
  * @tc.name dts2cpp_union_0058
  * @tc.desc dts2cpp union type alias `type UnionType0058 = UserId | OrderId` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0058', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0058.ts',
            `type UserId = string;
type OrderId = number;
type UnionType0058 = UserId | OrderId;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0058');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'UserId');
      assert.strictEqual(typeItem!.types[1], 'OrderId');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0059
  * @tc.name dts2cpp_union_0059
  * @tc.desc dts2cpp union type alias `type UnionType0059 = T[] | Set<T>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0059', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0059.ts',
            `type T = string | number;
type UnionType0059 = T[] | Set<T>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0059');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'T[]');
      assert.strictEqual(typeItem!.types[1], 'Set<T>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0060
  * @tc.name dts2cpp_union_0060
  * @tc.desc dts2cpp union type alias `type UnionType0060 = Array<Options> | Map<string, Options>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0060', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0060.ts',
            `interface Options { width: number; }
type UnionType0060 = Array<Options> | Map<string, Options>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0060');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<Options>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, Options>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0060 执行异常: ${String(err)}`);
    }
  });

});
