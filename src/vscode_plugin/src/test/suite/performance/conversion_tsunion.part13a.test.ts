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

suite('Performance_DTS2CPP_Union_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Union_Suite (part11/12/13).');


  /**
  * @tc.number dts2cpp_union_0477
  * @tc.name dts2cpp_union_0477
  * @tc.desc dts2cpp union type alias 三参函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0477', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0477.ts',
            `type UnionType0477 = ((a: string, b: number, c: boolean) => void) | ((a: number) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0477');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string, b: number, c: boolean) => void)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0477 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0478
  * @tc.name dts2cpp_union_0478
  * @tc.desc dts2cpp union type alias 柯里化返回函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0478', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0478.ts',
            `type UnionType0478 = ((a: string) => (b: number) => string) | ((a: number) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0478');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string) => (b: number) => string)');
      assert.strictEqual(typeItem!.types[1], '((a: number) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0478 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0478 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0479
  * @tc.name dts2cpp_union_0479
  * @tc.desc dts2cpp union type alias 泛型约束箭头函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0479', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0479.ts',
            `type UnionType0479 = (<T extends string>(v: T) => T) | (<T extends number>(v: T) => T);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0479');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(<T extends string>(v: T) => T)');
      assert.strictEqual(typeItem!.types[1], '(<T extends number>(v: T) => T)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0479 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0479 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0480
  * @tc.name dts2cpp_union_0480
  * @tc.desc dts2cpp union type alias 同入参不同返回函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0480', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0480.ts',
            `type UnionType0480 = ((a: string) => boolean) | ((a: string) => number);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0480');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: string) => boolean)');
      assert.strictEqual(typeItem!.types[1], '((a: string) => number)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0480 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0480 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0481
  * @tc.name dts2cpp_union_0481
  * @tc.desc dts2cpp union type alias 不同参数名/类型函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0481', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0481.ts',
            `type UnionType0481 = ((a: number | string) => void) | ((b: boolean) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0481');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((a: number | string) => void)');
      assert.strictEqual(typeItem!.types[1], '((b: boolean) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0481 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0481 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0482
  * @tc.name dts2cpp_union_0482
  * @tc.desc dts2cpp union type alias any/unknown rest 函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0482', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0482.ts',
            `type UnionType0482 = ((...args: any[]) => any) | ((...args: unknown[]) => unknown);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0482');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((...args: any[]) => any)');
      assert.strictEqual(typeItem!.types[1], '((...args: unknown[]) => unknown)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0482 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0482 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0483
  * @tc.name dts2cpp_union_0483
  * @tc.desc dts2cpp union type alias Promise<void>/Promise<never> 函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0483', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0483.ts',
            `type UnionType0483 = (() => Promise<void>) | (() => Promise<never>);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0483');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(() => Promise<void>)');
      assert.strictEqual(typeItem!.types[1], '(() => Promise<never>)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0483 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0483 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0484
  * @tc.name dts2cpp_union_0484
  * @tc.desc dts2cpp union type alias 可选回调参函数类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0484', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0484.ts',
            `type UnionType0484 = ((err?: Error) => void) | ((data: string) => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0484');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((err?: Error) => void)');
      assert.strictEqual(typeItem!.types[1], '((data: string) => void)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0484 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0484 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0485
  * @tc.name dts2cpp_union_0485
  * @tc.desc dts2cpp union type alias 带参对象构造签名联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0485', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0485.ts',
            `type UnionType0485 = { new (a: string): Date } | { new (a: number): RegExp };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0485');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ new (a: string): Date }');
      assert.strictEqual(typeItem!.types[1], '{ new (a: number): RegExp }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0485 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0485 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0486
  * @tc.name dts2cpp_union_0486
  * @tc.desc dts2cpp union type alias 构造签名与调用签名混合对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0486', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0486.ts',
            `type UnionType0486 = { new (): Date; (): void } | { new (): RegExp };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0486');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ new (): Date; (): void }');
      assert.strictEqual(typeItem!.types[1], '{ new (): RegExp }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0486 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0486 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0487
  * @tc.name dts2cpp_union_0487
  * @tc.desc dts2cpp union type alias 无括号可选参函数类型（成员不可拆分，断言 types 为空）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0487', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0487.ts',
            `type UnionType0487 = (a?: string) => void | (b?: number) => void;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0487');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0487 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0487 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0488
  * @tc.name dts2cpp_union_0488
  * @tc.desc dts2cpp union type alias 超集/子集对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0488', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0488.ts',
            `type UnionType0488 = { a: string; b: number; c: boolean } | { a: string };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0488');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a: string; b: number; c: boolean }');
      assert.strictEqual(typeItem!.types[1], '{ a: string }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0488 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0488 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0489
  * @tc.name dts2cpp_union_0489
  * @tc.desc dts2cpp union type alias 同键不同类型对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0489', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0489.ts',
            `type UnionType0489 = { a: string } | { a: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0489');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a: string }');
      assert.strictEqual(typeItem!.types[1], '{ a: number }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0489 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0489 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0490
  * @tc.name dts2cpp_union_0490
  * @tc.desc dts2cpp union type alias 四成员单键对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0490', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0490.ts',
            `type UnionType0490 = { a: string } | { b: string } | { c: string } | { d: string };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0490');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '{ a: string }');
      assert.strictEqual(typeItem!.types[1], '{ b: string }');
      assert.strictEqual(typeItem!.types[2], '{ c: string }');
      assert.strictEqual(typeItem!.types[3], '{ d: string }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0490 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0490 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0491
  * @tc.name dts2cpp_union_0491
  * @tc.desc dts2cpp union type alias readonly 与普通属性混用对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0491', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0491.ts',
            `type UnionType0491 = { readonly a: string; readonly b: number } | { a: string };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0491');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ readonly a: string; readonly b: number }');
      assert.strictEqual(typeItem!.types[1], '{ a: string }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0491 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0491 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0492
  * @tc.name dts2cpp_union_0492
  * @tc.desc dts2cpp union type alias 多可选属性对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0492', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0492.ts',
            `type UnionType0492 = { a?: string; b?: number } | { c: boolean };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0492');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a?: string; b?: number }');
      assert.strictEqual(typeItem!.types[1], '{ c: boolean }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0492 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0492 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0493
  * @tc.name dts2cpp_union_0493
  * @tc.desc dts2cpp union type alias 数字/字符串索引签名对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0493', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0493.ts',
            `type UnionType0493 = { [key: number]: string } | { [key: string]: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0493');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ [key: number]: string }');
      assert.strictEqual(typeItem!.types[1], '{ [key: string]: number }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0493 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0493 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0494
  * @tc.name dts2cpp_union_0494
  * @tc.desc dts2cpp union type alias 索引签名值含 union 对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0494', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0494.ts',
            `type UnionType0494 = { [key: string]: string | number } | { [key: string]: boolean };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0494');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ [key: string]: string | number }');
      assert.strictEqual(typeItem!.types[1], '{ [key: string]: boolean }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0494 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0494 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0495
  * @tc.name dts2cpp_union_0495
  * @tc.desc dts2cpp union type alias getter/setter 对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0495', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0495.ts',
            `type UnionType0495 = { get a(): string } | { set a(v: number): void };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0495');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ get a(): string }');
      assert.strictEqual(typeItem!.types[1], '{ set a(v: number): void }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0495 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0495 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0496
  * @tc.name dts2cpp_union_0496
  * @tc.desc dts2cpp union type alias 重载调用签名对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0496', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0496.ts',
            `type UnionType0496 = { (a: string): string; (a: number): number } | { (a: boolean): boolean };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0496');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ (a: string): string; (a: number): number }');
      assert.strictEqual(typeItem!.types[1], '{ (a: boolean): boolean }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0496 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0496 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0497
  * @tc.name dts2cpp_union_0497
  * @tc.desc dts2cpp union type alias 三层嵌套对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0497', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0497.ts',
            `type UnionType0497 = { a: { b: { c: string } } } | { a: { b: { c: number } } };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0497');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a: { b: { c: string } } }');
      assert.strictEqual(typeItem!.types[1], '{ a: { b: { c: number } } }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0497 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0497 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0498
  * @tc.name dts2cpp_union_0498
  * @tc.desc dts2cpp union type alias 属性为数组/Set 对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0498', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0498.ts',
            `type UnionType0498 = { a: string[] } | { a: Set<string> };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0498');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a: string[] }');
      assert.strictEqual(typeItem!.types[1], '{ a: Set<string> }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0498 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0498 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0499
  * @tc.name dts2cpp_union_0499
  * @tc.desc dts2cpp union type alias 属性为 Map/Record 对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0499', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0499.ts',
            `type UnionType0499 = { a: Map<string, number> } | { a: Record<string, number> };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0499');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a: Map<string, number> }');
      assert.strictEqual(typeItem!.types[1], '{ a: Record<string, number> }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0499 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0499 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0500
  * @tc.name dts2cpp_union_0500
  * @tc.desc dts2cpp union type alias Parameters 双参函数联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0500', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0500.ts',
            `type UnionType0500 = Parameters<(a: string, b: number) => void> | [string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0500');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Parameters<(a: string, b: number) => void>');
      assert.strictEqual(typeItem!.types[1], '[string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0500 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0500 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0501
  * @tc.name dts2cpp_union_0501
  * @tc.desc dts2cpp union type alias ReturnType 返回 union 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0501', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0501.ts',
            `type UnionType0501 = ReturnType<() => string | number> | boolean;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0501');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReturnType<() => string | number>');
      assert.strictEqual(typeItem!.types[1], 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0501 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0501 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0502
  * @tc.name dts2cpp_union_0502
  * @tc.desc dts2cpp union type alias Awaited 三层嵌套联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0502', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0502.ts',
            `type UnionType0502 = Awaited<Promise<Promise<Promise<string>>>> | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0502');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Awaited<Promise<Promise<Promise<string>>>>');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0502 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0502 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0503
  * @tc.name dts2cpp_union_0503
  * @tc.desc dts2cpp union type alias Pick 内嵌 Record 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0503', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0503.ts',
            `type UnionType0503 = Pick<Record<"a" | "b" | "c", number>, "a" | "c"> | Record<string, string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0503');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Pick<Record<"a" | "b" | "c", number>, "a" | "c">');
      assert.strictEqual(typeItem!.types[1], 'Record<string, string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0503 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0503 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0504
  * @tc.name dts2cpp_union_0504
  * @tc.desc dts2cpp union type alias Omit 内嵌 Record 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0504', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0504.ts',
            `type UnionType0504 = Omit<Record<"a" | "b" | "c", number>, "b"> | Map<string, string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0504');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Omit<Record<"a" | "b" | "c", number>, "b">');
      assert.strictEqual(typeItem!.types[1], 'Map<string, string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0504 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0504 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0505
  * @tc.name dts2cpp_union_0505
  * @tc.desc dts2cpp union type alias Partial 内联对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0505', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0505.ts',
            `type UnionType0505 = Partial<{ a: string; b: number }> | { a: string };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0505');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Partial<{ a: string; b: number }>');
      assert.strictEqual(typeItem!.types[1], '{ a: string }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0505 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0505 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0506
  * @tc.name dts2cpp_union_0506
  * @tc.desc dts2cpp union type alias Required 内联对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0506', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0506.ts',
            `type UnionType0506 = Required<{ a?: string }> | { a: string };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0506');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Required<{ a?: string }>');
      assert.strictEqual(typeItem!.types[1], '{ a: string }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0506 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0506 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0507
  * @tc.name dts2cpp_union_0507
  * @tc.desc dts2cpp union type alias Readonly 内联对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0507', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0507.ts',
            `type UnionType0507 = Readonly<{ a: string; b: number }> | { a: string };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0507');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Readonly<{ a: string; b: number }>');
      assert.strictEqual(typeItem!.types[1], '{ a: string }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0507 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0507 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0508
  * @tc.name dts2cpp_union_0508
  * @tc.desc dts2cpp union type alias Record 同键不同值类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0508', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0508.ts',
            `type UnionType0508 = Record<"a", string> | Record<"a", number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0508');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<"a", string>');
      assert.strictEqual(typeItem!.types[1], 'Record<"a", number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0508 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0508 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0509
  * @tc.name dts2cpp_union_0509
  * @tc.desc dts2cpp union type alias InstanceType 内置对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0509', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0509.ts',
            `type UnionType0509 = InstanceType<typeof Date> | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0509');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'InstanceType<typeof Date>');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0509 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0509 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0510
  * @tc.name dts2cpp_union_0510
  * @tc.desc dts2cpp union type alias ConstructorParameters 内置对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0510', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0510.ts',
            `type UnionType0510 = ConstructorParameters<typeof Date> | [string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0510');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ConstructorParameters<typeof Date>');
      assert.strictEqual(typeItem!.types[1], '[string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0510 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0510 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0511
  * @tc.name dts2cpp_union_0511
  * @tc.desc dts2cpp union type alias OmitThisParameter void this 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0511', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0511.ts',
            `type UnionType0511 = OmitThisParameter<(this: void, n: number) => string> | [number];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0511');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'OmitThisParameter<(this: void, n: number) => string>');
      assert.strictEqual(typeItem!.types[1], '[number]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0511 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0511 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0512
  * @tc.name dts2cpp_union_0512
  * @tc.desc dts2cpp union type alias keyof 内联对象联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0512', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0512.ts',
            `type UnionType0512 = keyof { a: string; b: number } | "c";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0512');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'keyof { a: string; b: number }');
      assert.strictEqual(typeItem!.types[1], '"c"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0512 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0512 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0513
  * @tc.name dts2cpp_union_0513
  * @tc.desc dts2cpp union type alias 双映射类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0513', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0513.ts',
            `type UnionType0513 = { [K in "a" | "b"]: K } | { [K in "x" | "y"]: K };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0513');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ [K in "a" | "b"]: K }');
      assert.strictEqual(typeItem!.types[1], '{ [K in "x" | "y"]: K }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0513 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0513 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0514
  * @tc.name dts2cpp_union_0514
  * @tc.desc dts2cpp union type alias 泛型 keyof 映射类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0514', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0514.ts',
            `type UnionType0514<T> = { [K in keyof T]: T[K] } | T;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0514');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ [K in keyof T]: T[K] }');
      assert.strictEqual(typeItem!.types[1], 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0514 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0514 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0515
  * @tc.name dts2cpp_union_0515
  * @tc.desc dts2cpp union type alias 泛型索引访问联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0515', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0515.ts',
            `type UnionType0515<T> = T["a"] | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0515');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'T["a"]');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0515 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0515 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0516
  * @tc.name dts2cpp_union_0516
  * @tc.desc dts2cpp union type alias 无泛型直接条件类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0516', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0516.ts',
            `type UnionType0516 = (string extends number ? never : string | number) | boolean;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0516');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(string extends number ? never : string | number)');
      assert.strictEqual(typeItem!.types[1], 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0516 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0516 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0517
  * @tc.name dts2cpp_union_0517
  * @tc.desc dts2cpp union type alias infer 条件类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0517', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0517.ts',
            `type UnionType0517<T> = (T extends Array<infer E> ? E : T) | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0517');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(T extends Array<infer E> ? E : T)');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0517 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0517 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0518
  * @tc.name dts2cpp_union_0518
  * @tc.desc dts2cpp union type alias 双泛型 keyof 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0518', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0518.ts',
            `type UnionType0518<T, V> = keyof T | keyof V;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0518');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'keyof T');
      assert.strictEqual(typeItem!.types[1], 'keyof V');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0518 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0518 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0519
  * @tc.name dts2cpp_union_0519
  * @tc.desc dts2cpp union type alias typeof 成员访问联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0519', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0519.ts',
            `type UnionType0519 = typeof Date.now | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0519');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'typeof Date.now');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0519 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0519 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0520
  * @tc.name dts2cpp_union_0520
  * @tc.desc dts2cpp union type alias typeof Symbol 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0520', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0520.ts',
            `type UnionType0520 = typeof Symbol | symbol;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0520');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'typeof Symbol');
      assert.strictEqual(typeItem!.types[1], 'symbol');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0520 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0520 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0521
  * @tc.name dts2cpp_union_0521
  * @tc.desc dts2cpp union type alias Function/object/null 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0521', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0521.ts',
            `type UnionType0521 = Function | object | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0521');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Function');
      assert.strictEqual(typeItem!.types[1], 'object');
      assert.strictEqual(typeItem!.types[2], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0521 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0521 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0522
  * @tc.name dts2cpp_union_0522
  * @tc.desc dts2cpp union type alias 类属性索引访问联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0522', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0522.ts',
            `type UnionType0522 = Error["message"] | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0522');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Error["message"]');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0522 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0522 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0523
  * @tc.name dts2cpp_union_0523
  * @tc.desc dts2cpp union type alias 包装类型/基本类型/字面量混联。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0523', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0523.ts',
            `type UnionType0523 = Number | number | 1;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0523');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Number');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0523 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0523 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0524
  * @tc.name dts2cpp_union_0524
  * @tc.desc dts2cpp union type alias unknown/any 数组联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0524', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0524.ts',
            `type UnionType0524 = unknown[] | any[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0524');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'unknown[]');
      assert.strictEqual(typeItem!.types[1], 'any[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0524 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0524 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0525
  * @tc.name dts2cpp_union_0525
  * @tc.desc dts2cpp union type alias 双交叉类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0525', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0525.ts',
            `type UnionType0525 = (string & {}) | (number & {});`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0525');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(string & {})');
      assert.strictEqual(typeItem!.types[1], '(number & {})');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0525 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0525 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0526
  * @tc.name dts2cpp_union_0526
  * @tc.desc dts2cpp union type alias this 类型联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0526', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0526.ts',
            `type UnionType0526 = this | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0526');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'this');
      assert.strictEqual(typeItem!.types[1], 'null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0526 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0527
  * @tc.name dts2cpp_union_0527
  * @tc.desc dts2cpp union type alias 泛型 NoInfer 联合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0527', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0527.ts',
            `type UnionType0527<T> = NoInfer<T> | T;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0527');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'NoInfer<T>');
      assert.strictEqual(typeItem!.types[1], 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0527 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0528
  * @tc.name dts2cpp_union_0528
  * @tc.desc dts2cpp union type alias 交叉类型 alias 引用联合（同文件 3 个 alias）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0528', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0528.ts',
            `type UnionType0528A = { a: string };
type UnionType0528B = { b: number };
type UnionType0528 = UnionType0528A & UnionType0528B | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 3);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0528A'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0528B'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0528'));
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0528');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'UnionType0528A & UnionType0528B');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0528 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0529
  * @tc.name dts2cpp_union_0529
  * @tc.desc dts2cpp union type alias enum+interface+type 同文件组合联合（校验 ParseObj.enums）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0529', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0529.ts',
            `enum Direction { North, South, East, West }
interface Point { x: number; y: number; }
type UnionType0529 = Direction | Point | "origin";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0529');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Direction');
      assert.strictEqual(typeItem!.types[1], 'Point');
      assert.strictEqual(typeItem!.types[2], '"origin"');
      assert.ok(parseObj.enums.length >= 1, 'dts2cpp_union_0529 应解析出 enum');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0529 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0529 执行异常: ${String(err)}`);
    }
  });

});

