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
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Union_Suite (part08/09/10).');


  /**
  * @tc.number dts2cpp_union_0311
  * @tc.name dts2cpp_union_0311
  * @tc.desc dts2cpp union type alias 接口引用联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0311', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0311.ts',
            `interface Options { width: number; height: number; }
type UnionType0311 = Options | "auto";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0311');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Options');
      assert.strictEqual(typeItem!.types[1], '"auto"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0311 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0311 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0312
  * @tc.name dts2cpp_union_0312
  * @tc.desc dts2cpp union type alias keyof 接口联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0312', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0312.ts',
            `interface Options { width: number; height: number; }
type UnionType0312 = keyof Options | "auto";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0312');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'keyof Options');
      assert.strictEqual(typeItem!.types[1], '"auto"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0312 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0312 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0313
  * @tc.name dts2cpp_union_0313
  * @tc.desc dts2cpp union type alias 接口索引访问联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0313', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0313.ts',
            `interface Options { width: number; height: number; }
type UnionType0313 = Options["width" | "height"] | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0313');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Options["width" | "height"]');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0313 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0313 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0314
  * @tc.name dts2cpp_union_0314
  * @tc.desc dts2cpp union type alias enum 引用联合（同时校验 ParseObj.enums）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0314', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0314.ts',
            `enum Color { Red, Green, Blue }
type UnionType0314 = Color | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0314');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Color');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(parseObj.enums.length >= 1, 'dts2cpp_union_0314 应解析出 enum');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0314 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0314 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0315
  * @tc.name dts2cpp_union_0315
  * @tc.desc dts2cpp union type alias enum 成员联合（同时校验 ParseObj.enums）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0315', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0315.ts',
            `enum Color { Red = 1, Green = 2 }
type UnionType0315 = Color.Red | Color.Green | 0;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0315');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Color.Red');
      assert.strictEqual(typeItem!.types[1], 'Color.Green');
      assert.strictEqual(typeItem!.types[2], '0');
      assert.ok(parseObj.enums.length >= 1, 'dts2cpp_union_0315 应解析出 enum');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0315 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0315 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0316
  * @tc.name dts2cpp_union_0316
  * @tc.desc dts2cpp union type alias 泛型 Box alias 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0316', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0316.ts',
            `type UnionType0316<T> = { value: T } | T;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0316');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ value: T }');
      assert.strictEqual(typeItem!.types[1], 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0316 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0316 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0317
  * @tc.name dts2cpp_union_0317
  * @tc.desc dts2cpp union type alias 双泛型 Pair alias 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0317', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0317.ts',
            `type UnionType0317<A, B> = [A, B] | Map<A, B>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0317');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[A, B]');
      assert.strictEqual(typeItem!.types[1], 'Map<A, B>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0317 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0317 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0318
  * @tc.name dts2cpp_union_0318
  * @tc.desc dts2cpp union type alias 泛型参数联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0318', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0318.ts',
            `type UnionType0318<T> = T | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0318');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'T');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0318 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0318 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0319
  * @tc.name dts2cpp_union_0319
  * @tc.desc dts2cpp union type alias 构造签名 alias 引用联合（同文件 2 个 alias）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0319', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0319.ts',
            `type UnionType0319Ctor = new (n: number) => Error;
type UnionType0319 = UnionType0319Ctor | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 2);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0319Ctor'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0319'));
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0319');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'UnionType0319Ctor');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0319 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0319 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0320
  * @tc.name dts2cpp_union_0320
  * @tc.desc dts2cpp union type alias 十成员容器 mega union。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0320', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0320.ts',
            `type UnionType0320 = string[] | Set<string> | Map<string, number> | [string, number] | Record<string, string> | Promise<string> | ((a: string) => void) | { id: number } | Array<string | number> | ReadonlyArray<boolean>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0320');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 10);
      assert.strictEqual(typeItem!.types[0], 'string[]');
      assert.strictEqual(typeItem!.types[1], 'Set<string>');
      assert.strictEqual(typeItem!.types[2], 'Map<string, number>');
      assert.strictEqual(typeItem!.types[3], '[string, number]');
      assert.strictEqual(typeItem!.types[4], 'Record<string, string>');
      assert.strictEqual(typeItem!.types[5], 'Promise<string>');
      assert.strictEqual(typeItem!.types[6], '((a: string) => void)');
      assert.strictEqual(typeItem!.types[7], '{ id: number }');
      assert.strictEqual(typeItem!.types[8], 'Array<string | number>');
      assert.strictEqual(typeItem!.types[9], 'ReadonlyArray<boolean>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0320 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0320 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0321
  * @tc.name dts2cpp_union_0321
  * @tc.desc dts2cpp union type alias 同文件 5 个 union 批量解析。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0321', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0321.ts',
            `type UnionType0321A = string | number;
type UnionType0321B = boolean | null;
type UnionType0321C = string[] | number[];
type UnionType0321D = Set<string> | Map<string, number>;
type UnionType0321E = "a" | "b" | "c";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 5);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0321A'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0321B'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0321C'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0321D'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0321E'));
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0321 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0321 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0322
  * @tc.name dts2cpp_union_0322
  * @tc.desc dts2cpp union type alias 同文件 10 个 union 批量解析。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0322', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0322.ts',
            `type UnionType0322A = string | number;
type UnionType0322B = boolean | null;
type UnionType0322C = string[] | number[];
type UnionType0322D = Set<string> | Map<string, number>;
type UnionType0322E = "a" | "b" | "c";
type UnionType0322F = [string, number] | [boolean];
type UnionType0322G = Record<string, string> | Map<string, number>;
type UnionType0322H = Promise<string> | Promise<number>;
type UnionType0322I = { id: number } | { name: string };
type UnionType0322J = keyof Options | "auto";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 10);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322A'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322B'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322C'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322D'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322E'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322F'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322G'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322H'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322I'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0322J'));
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0322 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0323
  * @tc.name dts2cpp_union_0323
  * @tc.desc dts2cpp union type alias 同文件 20 个 union 批量解析。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0323', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0323.ts',
            `type UnionType0323A = string | number;
type UnionType0323B = boolean | null;
type UnionType0323C = string[] | number[];
type UnionType0323D = Set<string> | Map<string, number>;
type UnionType0323E = "a" | "b" | "c";
type UnionType0323F = [string, number] | [boolean];
type UnionType0323G = Record<string, string> | Map<string, number>;
type UnionType0323H = Promise<string> | Promise<number>;
type UnionType0323I = { id: number } | { name: string };
type UnionType0323J = keyof Options | "auto";
type UnionType0323K = bigint | number;
type UnionType0323L = symbol | string;
type UnionType0323M = object | null;
type UnionType0323N = any | unknown;
type UnionType0323O = void | never;
type UnionType0323P = readonly [string, number] | [string];
type UnionType0323Q = Array<string | number> | Array<boolean>;
type UnionType0323R = ReadonlySet<string> | ReadonlySet<number>;
type UnionType0323S = WeakMap<object, string> | WeakMap<object, number>;
type UnionType0323T = ((a: string) => void) | ((a: number) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 20);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323A'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323B'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323C'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323D'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323E'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323F'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323G'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323H'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323I'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323J'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323K'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323L'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323M'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323N'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323O'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323P'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323Q'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323R'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323S'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0323T'));
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0323 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0323 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0324
  * @tc.name dts2cpp_union_0324
  * @tc.desc dts2cpp union type alias 容错：空成员联合（对齐 parsetsunion test_31）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0324', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0324.ts',
            `type UnionType0324 = string | ;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0324');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], '');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0324 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0325
  * @tc.name dts2cpp_union_0325
  * @tc.desc dts2cpp union type alias 容错：数组缺右括号联合（对齐 parsetsunion test_32）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0325', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0325.ts',
            `type UnionType0325 = string | number[;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0325');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number[');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0325 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0325 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0326
  * @tc.name dts2cpp_union_0326
  * @tc.desc dts2cpp union type alias 容错：字符串缺右引号联合（对齐 parsetsunion test_33）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0326', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0326.ts',
            `type UnionType0326 = "string" | "number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0326');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"string"');
      assert.strictEqual(typeItem!.types[1], '"number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0326 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0327
  * @tc.name dts2cpp_union_0327
  * @tc.desc dts2cpp union type alias 容错：数字拼接联合（对齐 parsetsunion test_34）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0327', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0327.ts',
            `type UnionType0327 = -1 | 0-1;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0327');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '-1');
      assert.strictEqual(typeItem!.types[1], '0');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0327 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0328
  * @tc.name dts2cpp_union_0328
  * @tc.desc dts2cpp union type alias 容错：拼写错误 null 联合（对齐 parsetsunion test_36）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0328', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0328.ts',
            `type UnionType0328 = string | nul;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0328');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'nul');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0328 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0329
  * @tc.name dts2cpp_union_0329
  * @tc.desc dts2cpp union type alias 容错：拼写错误 undefined 联合（对齐 parsetsunion test_37）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0329', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0329.ts',
            `type UnionType0329 = string | undefine;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0329');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'undefine');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0329 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0329 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0330
  * @tc.name dts2cpp_union_0330
  * @tc.desc dts2cpp union type alias 容错：拼写错误 boolean 联合（对齐 parsetsunion test_39）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0330', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0330.ts',
            `type UnionType0330 = string | bool;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0330');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'bool');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0330 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0330 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0331
  * @tc.name dts2cpp_union_0331
  * @tc.desc dts2cpp union type alias 容错：拼写错误 any 联合（对齐 parsetsunion test_40）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0331', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0331.ts',
            `type UnionType0331 = string | anyone;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0331');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'anyone');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0331 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0331 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0332
  * @tc.name dts2cpp_union_0332
  * @tc.desc dts2cpp union type alias 容错：Awaited 空泛参（对齐 parsetsunion test_43，成员不可拆分）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0332', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0332.ts',
            `type UnionType0332 = Awaited<boolean | Promise<>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0332');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0332 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0332 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0333
  * @tc.name dts2cpp_union_0333
  * @tc.desc dts2cpp union type alias 容错：Pick 缺逗号（对齐 parsetsunion test_44，成员不可拆分）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0333', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0333.ts',
            `type UnionType0333 = Pick<Todo | "title" | "completed">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0333');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0333 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0333 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0334
  * @tc.name dts2cpp_union_0334
  * @tc.desc dts2cpp union type alias 容错：Omit 缺逗号（对齐 parsetsunion test_45，成员不可拆分）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0334', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0334.ts',
            `type UnionType0334 = Omit<Todo & "completed" | "createdAt">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0334');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0334 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0334 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0335
  * @tc.name dts2cpp_union_0335
  * @tc.desc dts2cpp union type alias 开关字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0335', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0335.ts',
            `type UnionType0335 = "on" | "off";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0335');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '"on"');
      assert.strictEqual(typeItem!.types[1], '"off"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0335 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0335 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0336
  * @tc.name dts2cpp_union_0336
  * @tc.desc dts2cpp union type alias 颜色字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0336', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0336.ts',
            `type UnionType0336 = "red" | "green" | "blue";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0336');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"red"');
      assert.strictEqual(typeItem!.types[1], '"green"');
      assert.strictEqual(typeItem!.types[2], '"blue"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0336 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0336 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0337
  * @tc.name dts2cpp_union_0337
  * @tc.desc dts2cpp union type alias 三成员对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0337', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0337.ts',
            `type UnionType0337 = { a: string } | { b: number } | { c: boolean };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0337');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '{ a: string }');
      assert.strictEqual(typeItem!.types[1], '{ b: number }');
      assert.strictEqual(typeItem!.types[2], '{ c: boolean }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0337 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0337 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0338
  * @tc.name dts2cpp_union_0338
  * @tc.desc dts2cpp union type alias Promise 泛参内含 union 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0338', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0338.ts',
            `type UnionType0338 = Promise<string | number> | Promise<boolean>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0338');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<string | number>');
      assert.strictEqual(typeItem!.types[1], 'Promise<boolean>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0338 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0338 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0339
  * @tc.name dts2cpp_union_0339
  * @tc.desc dts2cpp union type alias Array/Set 泛参内含 union 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0339', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0339.ts',
            `type UnionType0339 = Array<string | number | boolean> | Set<string | number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0339');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<string | number | boolean>');
      assert.strictEqual(typeItem!.types[1], 'Set<string | number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0339 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0339 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0340
  * @tc.name dts2cpp_union_0340
  * @tc.desc dts2cpp union type alias Map 值内含四元 union 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0340', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0340.ts',
            `type UnionType0340 = Map<string, string | number | boolean | null> | Record<string, string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0340');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, string | number | boolean | null>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0340 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0340 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0341
  * @tc.name dts2cpp_union_0341
  * @tc.desc dts2cpp union type alias Promise 嵌套 Set/Map 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0341', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0341.ts',
            `type UnionType0341 = Promise<Set<string>> | Promise<Map<string, number>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0341');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<Set<string>>');
      assert.strictEqual(typeItem!.types[1], 'Promise<Map<string, number>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0341 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0341 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0342
  * @tc.name dts2cpp_union_0342
  * @tc.desc dts2cpp union type alias Map/Record 值嵌套 Promise 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0342', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0342.ts',
            `type UnionType0342 = Map<string, Promise<number>> | Record<string, Promise<string>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0342');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, Promise<number>>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, Promise<string>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0342 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0342 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0343
  * @tc.name dts2cpp_union_0343
  * @tc.desc dts2cpp union type alias tuple 数组两种写法联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0343', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0343.ts',
            `type UnionType0343 = Array<[string, number]> | [string, number][];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0343');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<[string, number]>');
      assert.strictEqual(typeItem!.types[1], '[string, number][]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0343 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0343 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0344
  * @tc.name dts2cpp_union_0344
  * @tc.desc dts2cpp union type alias 无占位符模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0344', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0344.ts',
            `type UnionType0344 = \`a\` | \`b\` | \`c\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0344');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '`a`');
      assert.strictEqual(typeItem!.types[1], '`b`');
      assert.strictEqual(typeItem!.types[2], '`c`');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0344 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0344 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0345
  * @tc.name dts2cpp_union_0345
  * @tc.desc dts2cpp union type alias 单占位符模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0345', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0345.ts',
            `type UnionType0345 = \`\${string}\` | number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0345');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`${string}`');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0345 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0345 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0346
  * @tc.name dts2cpp_union_0346
  * @tc.desc dts2cpp union type alias 前缀模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0346', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0346.ts',
            `type UnionType0346 = \`x\${string}\` | \`y\${number}\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0346');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`x${string}`');
      assert.strictEqual(typeItem!.types[1], '`y${number}`');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0346 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0346 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0347
  * @tc.name dts2cpp_union_0347
  * @tc.desc dts2cpp union type alias 三占位符模板字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0347', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0347.ts',
            `type UnionType0347 = \`A\${string}\` | \`B\${number}\` | \`C\${boolean}\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0347');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '`A${string}`');
      assert.strictEqual(typeItem!.types[1], '`B${number}`');
      assert.strictEqual(typeItem!.types[2], '`C${boolean}`');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0347 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0347 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0348
  * @tc.name dts2cpp_union_0348
  * @tc.desc dts2cpp union type alias WeakMap 变体联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0348', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0348.ts',
            `type UnionType0348 = WeakMap<object, string> | WeakMap<object, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0348');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'WeakMap<object, string>');
      assert.strictEqual(typeItem!.types[1], 'WeakMap<object, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0348 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0348 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0349
  * @tc.name dts2cpp_union_0349
  * @tc.desc dts2cpp union type alias ReadonlySet 变体联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0349', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0349.ts',
            `type UnionType0349 = ReadonlySet<string> | ReadonlySet<number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0349');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReadonlySet<string>');
      assert.strictEqual(typeItem!.types[1], 'ReadonlySet<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0349 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0349 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0350
  * @tc.name dts2cpp_union_0350
  * @tc.desc dts2cpp union type alias any/unknown 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0350', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0350.ts',
            `type UnionType0350 = any | unknown;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0350');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'any');
      assert.strictEqual(typeItem!.types[1], 'unknown');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0350 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0350 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0351
  * @tc.name dts2cpp_union_0351
  * @tc.desc dts2cpp union type alias void/never 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0351', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0351.ts',
            `type UnionType0351 = void | never;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0351');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'void');
      assert.strictEqual(typeItem!.types[1], 'never');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0351 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0351 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0352
  * @tc.name dts2cpp_union_0352
  * @tc.desc dts2cpp union type alias readonly tuple 与普通 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0352', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0352.ts',
            `type UnionType0352 = readonly [string, number] | [string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0352');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly [string, number]');
      assert.strictEqual(typeItem!.types[1], '[string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0352 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0352 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0353
  * @tc.name dts2cpp_union_0353
  * @tc.desc dts2cpp union type alias Array 泛参 union 变体联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0353', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0353.ts',
            `type UnionType0353 = Array<string | number> | Array<boolean>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0353');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<string | number>');
      assert.strictEqual(typeItem!.types[1], 'Array<boolean>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0353 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0353 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0354
  * @tc.name dts2cpp_union_0354
  * @tc.desc dts2cpp union type alias symbol/string 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0354', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0354.ts',
            `type UnionType0354 = symbol | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0354');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'symbol');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0354 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0355
  * @tc.name dts2cpp_union_0355
  * @tc.desc dts2cpp union type alias object/null 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0355', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0355.ts',
            `type UnionType0355 = object | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0355');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'object');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0355 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0356
  * @tc.name dts2cpp_union_0356
  * @tc.desc dts2cpp union type alias 入参不同返回 void 的函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0356', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0356.ts',
            `type UnionType0356 = ((a: string) => void) | ((a: number) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0356');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string) => void)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0356 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0356 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0357
  * @tc.name dts2cpp_union_0357
  * @tc.desc dts2cpp union type alias 四元基本类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0357', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0357.ts',
            `type UnionType0357 = string | number | boolean | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0357');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], 'boolean');
      assert.strictEqual(typeItem!.types[3], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0357 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0358
  * @tc.name dts2cpp_union_0358
  * @tc.desc dts2cpp union type alias 三成员 Array 泛型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0358', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0358.ts',
            `type UnionType0358 = Array<boolean> | Array<number> | Array<string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0358');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Array<boolean>');
      assert.strictEqual(typeItem!.types[1], 'Array<number>');
      assert.strictEqual(typeItem!.types[2], 'Array<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0358 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0359
  * @tc.name dts2cpp_union_0359
  * @tc.desc dts2cpp union type alias 三成员单元素 tuple 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0359', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0359.ts',
            `type UnionType0359 = [boolean] | [number] | [string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0359');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '[boolean]');
      assert.strictEqual(typeItem!.types[1], '[number]');
      assert.strictEqual(typeItem!.types[2], '[string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0359 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0360
  * @tc.name dts2cpp_union_0360
  * @tc.desc dts2cpp union type alias 尺寸字面量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0360', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0360.ts',
            `type UnionType0360 = "small" | "medium" | "large";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0360');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '"small"');
      assert.strictEqual(typeItem!.types[1], '"medium"');
      assert.strictEqual(typeItem!.types[2], '"large"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0360 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0360 执行异常: ${String(err)}`);
    }
  });
});
