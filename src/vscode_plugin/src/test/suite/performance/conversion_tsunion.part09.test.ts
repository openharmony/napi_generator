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
  * @tc.number dts2cpp_union_0261
  * @tc.name dts2cpp_union_0261
  * @tc.desc dts2cpp union type alias 可选参函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0261', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0261.ts',
            `type UnionType0261 = ((a: string, b?: number) => void) | ((a: number) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0261');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string, b?: number) => void)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0262
  * @tc.name dts2cpp_union_0262
  * @tc.desc dts2cpp union type alias rest 参函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0262', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0262.ts',
            `type UnionType0262 = ((...args: number[]) => string) | ((...args: string[]) => boolean);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0262');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((...args: number[]) => string)');
      assert.strictEqual(typeItem!.types[1], '((...args: string[]) => boolean)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0263
  * @tc.name dts2cpp_union_0263
  * @tc.desc dts2cpp union type alias rest 参内含 union 的函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0263', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0263.ts',
            `type UnionType0263 = ((a: string, ...rest: (number | boolean)[]) => void) | ((a: number) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0263');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string, ...rest: (number | boolean)[]) => void)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0264
  * @tc.name dts2cpp_union_0264
  * @tc.desc dts2cpp union type alias 泛型箭头函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0264', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0264.ts',
            `type UnionType0264 = (<T>(v: T) => T) | ((v: any) => any);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0264');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(<T>(v: T) => T)');
      assert.strictEqual(typeItem!.types[1], '((v: any) => any)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0265
  * @tc.name dts2cpp_union_0265
  * @tc.desc dts2cpp union type alias Promise 返回函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0265', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0265.ts',
            `type UnionType0265 = ((a: string) => Promise<string>) | ((a: number) => Promise<number>);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0265');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string) => Promise<string>)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => Promise<number>)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0266
  * @tc.name dts2cpp_union_0266
  * @tc.desc dts2cpp union type alias 回调风格 union 入参函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0266', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0266.ts',
            `type UnionType0266 = ((err: Error | null) => void) | ((data: string | Uint8Array) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0266');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((err: Error | null) => void)');
      assert.strictEqual(typeItem!.types[1], '((data: string | Uint8Array) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0267
  * @tc.name dts2cpp_union_0267
  * @tc.desc dts2cpp union type alias 双泛型箭头函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0267', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0267.ts',
            `type UnionType0267 = (<T>(x: T, y: T) => T) | (<T, U>(x: T) => U);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0267');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(<T>(x: T, y: T) => T)');
      assert.strictEqual(typeItem!.types[1], '(<T, U>(x: T) => U)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0268
  * @tc.name dts2cpp_union_0268
  * @tc.desc dts2cpp union type alias rest 参布尔返回函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0268', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0268.ts',
            `type UnionType0268 = ((a: string, ...rest: number[]) => boolean) | ((a: number) => boolean);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0268');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string, ...rest: number[]) => boolean)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => boolean)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0269
  * @tc.name dts2cpp_union_0269
  * @tc.desc dts2cpp union type alias 入参返回均含 union 的函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0269', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0269.ts',
            `type UnionType0269 = ((a: string | number, b?: boolean) => string | null) | ((a: number) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0269');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string | number, b?: boolean) => string | null)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0270
  * @tc.name dts2cpp_union_0270
  * @tc.desc dts2cpp union type alias 基本函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0270', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0270.ts',
            `type UnionType0270 = ((a: string) => number) | ((a: number) => string);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0270');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string) => number)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => string)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0271
  * @tc.name dts2cpp_union_0271
  * @tc.desc dts2cpp union type alias 双 void 函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0271', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0271.ts',
            `type UnionType0271 = (() => void) | (() => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0271');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(() => void)');
      assert.strictEqual(typeItem!.types[1], '(() => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0272
  * @tc.name dts2cpp_union_0272
  * @tc.desc dts2cpp union type alias async 箭头函数类型联合（成员不可拆分，断言 types 为空）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0272', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0272.ts',
            `type UnionType0272 = (async () => Promise<string>) | (() => Promise<number>);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0272');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0272 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0273
  * @tc.name dts2cpp_union_0273
  * @tc.desc dts2cpp union type alias 无括号函数类型混 union（成员不可拆分，断言 types 为空）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0273', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0273.ts',
            `type UnionType0273 = (a: string | number) => void | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0273');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0274
  * @tc.name dts2cpp_union_0274
  * @tc.desc dts2cpp union type alias Generator 返回函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0274', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0274.ts',
            `type UnionType0274 = (() => Generator<string>) | (() => Generator<number>);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0274');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(() => Generator<string>)');
      assert.strictEqual(typeItem!.types[1], '(() => Generator<number>)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0275
  * @tc.name dts2cpp_union_0275
  * @tc.desc dts2cpp union type alias Generator 入参函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0275', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0275.ts',
            `type UnionType0275 = ((a: string) => Generator<number>) | ((a: number) => Generator<string>);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0275');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string) => Generator<number>)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => Generator<string>)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0276
  * @tc.name dts2cpp_union_0276
  * @tc.desc dts2cpp union type alias 对象构造签名联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0276', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0276.ts',
            `type UnionType0276 = { new (): Date } | { new (): RegExp };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0276');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ new (): Date }');
      assert.strictEqual(typeItem!.types[1], '{ new (): RegExp }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0276 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0276 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0277
  * @tc.name dts2cpp_union_0277
  * @tc.desc dts2cpp union type alias 对象 this 签名联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0277', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0277.ts',
            `type UnionType0277 = { (this: void, a: string): void } | { (a: number): void };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0277');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ (this: void, a: string): void }');
      assert.strictEqual(typeItem!.types[1], '{ (a: number): void }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0277 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0277 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0278
  * @tc.name dts2cpp_union_0278
  * @tc.desc dts2cpp union type alias 对象调用签名联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0278', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0278.ts',
            `type UnionType0278 = { (a: string): boolean } | { (a: number): boolean };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0278');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ (a: string): boolean }');
      assert.strictEqual(typeItem!.types[1], '{ (a: number): boolean }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0278 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0279
  * @tc.name dts2cpp_union_0279
  * @tc.desc dts2cpp union type alias 无参/有参调用签名联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0279', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0279.ts',
            `type UnionType0279 = { (): void } | { (n: number): void };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0279');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ (): void }');
      assert.strictEqual(typeItem!.types[1], '{ (n: number): void }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0279 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0280
  * @tc.name dts2cpp_union_0280
  * @tc.desc dts2cpp union type alias 无括号构造签名混函数类型（成员不可拆分，断言 types 为空）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0280', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0280.ts',
            `type UnionType0280 = new () => Date | (() => string);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0280');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0280 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0280 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0281
  * @tc.name dts2cpp_union_0281
  * @tc.desc dts2cpp union type alias 无括号 this 函数类型（成员不可拆分，断言 types 为空）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0281', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0281.ts',
            `type UnionType0281 = (this: void, a: string) => void | (a: number) => void;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0281');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0281 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0281 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0282
  * @tc.name dts2cpp_union_0282
  * @tc.desc dts2cpp union type alias NoInfer 工具类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0282', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0282.ts',
            `type UnionType0282 = NoInfer<string | number> | boolean;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0282');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'NoInfer<string | number>');
      assert.strictEqual(typeItem!.types[1], 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0282 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0282 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0283
  * @tc.name dts2cpp_union_0283
  * @tc.desc dts2cpp union type alias OmitThisParameter 工具类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0283', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0283.ts',
            `type UnionType0283 = OmitThisParameter<(this: Date, n: number) => string> | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0283');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'OmitThisParameter<(this: Date, n: number) => string>');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0283 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0283 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0284
  * @tc.name dts2cpp_union_0284
  * @tc.desc dts2cpp union type alias Awaited 嵌套 Promise 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0284', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0284.ts',
            `type UnionType0284 = Awaited<Promise<Promise<string>>> | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0284');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Awaited<Promise<Promise<string>>>');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0284 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0284 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0285
  * @tc.name dts2cpp_union_0285
  * @tc.desc dts2cpp union type alias Readonly 工具类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0285', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0285.ts',
            `type UnionType0285 = Readonly<Map<string, number>> | Map<string, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0285');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Readonly<Map<string, number>>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0285 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0286
  * @tc.name dts2cpp_union_0286
  * @tc.desc dts2cpp union type alias 条件类型结果联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0286', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0286.ts',
            `type UnionType0286<T> = (T extends string ? string : number) | boolean;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0286');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(T extends string ? string : number)');
      assert.strictEqual(typeItem!.types[1], 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0286 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0287
  * @tc.name dts2cpp_union_0287
  * @tc.desc dts2cpp union type alias 索引访问 union 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0287', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0287.ts',
            `type UnionType0287 = Options["width" | "height"] | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0287');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Options["width" | "height"]');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0287 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0287 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0288
  * @tc.name dts2cpp_union_0288
  * @tc.desc dts2cpp union type alias 映射类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0288', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0288.ts',
            `type UnionType0288 = { [K in "a" | "b" | "c"]: K } | Record<string, never>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0288');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ [K in "a" | "b" | "c"]: K }');
      assert.strictEqual(typeItem!.types[1], 'Record<string, never>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0288 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0289
  * @tc.name dts2cpp_union_0289
  * @tc.desc dts2cpp union type alias keyof 映射类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0289', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0289.ts',
            `type UnionType0289 = { [K in keyof Options]: Options[K] } | Options;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0289');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ [K in keyof Options]: Options[K] }');
      assert.strictEqual(typeItem!.types[1], 'Options');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0289 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0289 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0290
  * @tc.name dts2cpp_union_0290
  * @tc.desc dts2cpp union type alias keyof typeof 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0290', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0290.ts',
            `type UnionType0290 = keyof typeof obj | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0290');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'keyof typeof obj');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0290 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0290 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0291
  * @tc.name dts2cpp_union_0291
  * @tc.desc dts2cpp union type alias 可选属性对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0291', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0291.ts',
            `type UnionType0291 = { a?: string } | { b: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0291');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a?: string }');
      assert.strictEqual(typeItem!.types[1], '{ b: number }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0291 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0291 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0292
  * @tc.name dts2cpp_union_0292
  * @tc.desc dts2cpp union type alias readonly 属性对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0292', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0292.ts',
            `type UnionType0292 = { readonly a: string } | { readonly b: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0292');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ readonly a: string }');
      assert.strictEqual(typeItem!.types[1], '{ readonly b: number }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0292 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0292 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0293
  * @tc.name dts2cpp_union_0293
  * @tc.desc dts2cpp union type alias 方法签名对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0293', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0293.ts',
            `type UnionType0293 = { m(): void } | { m(n: number): string };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0293');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ m(): void }');
      assert.strictEqual(typeItem!.types[1], '{ m(n: number): string }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0293 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0294
  * @tc.name dts2cpp_union_0294
  * @tc.desc dts2cpp union type alias 嵌套对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0294', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0294.ts',
            `type UnionType0294 = { a: { b: string } } | { a: { c: number } };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0294');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a: { b: string } }');
      assert.strictEqual(typeItem!.types[1], '{ a: { c: number } }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0294 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0294 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0295
  * @tc.name dts2cpp_union_0295
  * @tc.desc dts2cpp union type alias 属性含 union 的对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0295', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0295.ts',
            `type UnionType0295 = { x: 1 | 2 } | { y: "a" | "b" };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0295');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ x: 1 | 2 }');
      assert.strictEqual(typeItem!.types[1], '{ y: "a" | "b" }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0295 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0296
  * @tc.name dts2cpp_union_0296
  * @tc.desc dts2cpp union type alias 交叉类型与 union 混用联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0296', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0296.ts',
            `type UnionType0296 = (string | number) & { x: number } | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0296');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(string | number) & { x: number }');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0296 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0297
  * @tc.name dts2cpp_union_0297
  * @tc.desc dts2cpp union type alias typeof 变量联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0297', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0297.ts',
            `type UnionType0297 = typeof myVar | number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0297');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'typeof myVar');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0297 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0297 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0298
  * @tc.name dts2cpp_union_0298
  * @tc.desc dts2cpp union type alias typeof 函数联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0298', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0298.ts',
            `type UnionType0298 = typeof console.log | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0298');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'typeof console.log');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0298 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0299
  * @tc.name dts2cpp_union_0299
  * @tc.desc dts2cpp union type alias 错误类型链联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0299', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0299.ts',
            `type UnionType0299 = Error | TypeError | RangeError | SyntaxError;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0299');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'Error');
      assert.strictEqual(typeItem!.types[1], 'TypeError');
      assert.strictEqual(typeItem!.types[2], 'RangeError');
      assert.strictEqual(typeItem!.types[3], 'SyntaxError');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0299 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0300
  * @tc.name dts2cpp_union_0300
  * @tc.desc dts2cpp union type alias DOM 元素类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0300', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0300.ts',
            `type UnionType0300 = HTMLElement | SVGElement | Text;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0300');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'HTMLElement');
      assert.strictEqual(typeItem!.types[1], 'SVGElement');
      assert.strictEqual(typeItem!.types[2], 'Text');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0300 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0301
  * @tc.name dts2cpp_union_0301
  * @tc.desc dts2cpp union type alias 包装类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0301', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0301.ts',
            `type UnionType0301 = String | Number | Boolean | Object;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0301');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'String');
      assert.strictEqual(typeItem!.types[1], 'Number');
      assert.strictEqual(typeItem!.types[2], 'Boolean');
      assert.strictEqual(typeItem!.types[3], 'Object');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0301 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0301 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0302
  * @tc.name dts2cpp_union_0302
  * @tc.desc dts2cpp union type alias 命名空间引用联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0302', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0302.ts',
            `type UnionType0302 = Math | JSON | Date;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0302');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Math');
      assert.strictEqual(typeItem!.types[1], 'JSON');
      assert.strictEqual(typeItem!.types[2], 'Date');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0302 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0303
  * @tc.name dts2cpp_union_0303
  * @tc.desc dts2cpp union type alias Promise 链联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0303', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0303.ts',
            `type UnionType0303 = Promise<Promise<string>> | Promise<string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0303');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<Promise<string>>');
      assert.strictEqual(typeItem!.types[1], 'Promise<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0303 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0304
  * @tc.name dts2cpp_union_0304
  * @tc.desc dts2cpp union type alias Promise<void> 与 void 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0304', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0304.ts',
            `type UnionType0304 = Promise<void> | void;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0304');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<void>');
      assert.strictEqual(typeItem!.types[1], 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0304 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0304 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0305
  * @tc.name dts2cpp_union_0305
  * @tc.desc dts2cpp union type alias 数字 key 的 Map/Record 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0305', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0305.ts',
            `type UnionType0305 = Map<number, string> | Record<number, string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0305');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<number, string>');
      assert.strictEqual(typeItem!.types[1], 'Record<number, string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0305 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0306
  * @tc.name dts2cpp_union_0306
  * @tc.desc dts2cpp union type alias 嵌套 ReadonlyArray 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0306', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0306.ts',
            `type UnionType0306 = ReadonlyArray<ReadonlyArray<string>> | Array<Array<number>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0306');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReadonlyArray<ReadonlyArray<string>>');
      assert.strictEqual(typeItem!.types[1], 'Array<Array<number>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0306 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0306 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0307
  * @tc.name dts2cpp_union_0307
  * @tc.desc dts2cpp union type alias 三层嵌套容器联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0307', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0307.ts',
            `type UnionType0307 = Array<Map<string, Array<number>>> | Map<string, Array<Map<string, number>>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0307');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<Map<string, Array<number>>>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, Array<Map<string, number>>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0307 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0307 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0308
  * @tc.name dts2cpp_union_0308
  * @tc.desc dts2cpp union type alias Record 值嵌套容器联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0308', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0308.ts',
            `type UnionType0308 = Record<"a", Map<string, number>> | Record<"b", Set<string>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0308');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<"a", Map<string, number>>');
      assert.strictEqual(typeItem!.types[1], 'Record<"b", Set<string>>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0308 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0308 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0309
  * @tc.name dts2cpp_union_0309
  * @tc.desc dts2cpp union type alias Set/Map/Record 三容器联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0309', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0309.ts',
            `type UnionType0309 = Set<string> | Map<string, string> | Record<string, string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0309');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Set<string>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, string>');
      assert.strictEqual(typeItem!.types[2], 'Record<string, string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0309 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0309 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0310
  * @tc.name dts2cpp_union_0310
  * @tc.desc dts2cpp union type alias unique symbol 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0310', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0310.ts',
            `type UnionType0310 = unique symbol | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0310');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'unique symbol');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0310 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0310 执行异常: ${String(err)}`);
    }
  });
});
