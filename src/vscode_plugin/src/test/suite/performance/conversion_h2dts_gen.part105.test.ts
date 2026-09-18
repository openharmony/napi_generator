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
import { parseFunction, parseClass, parseStruct, parseEnum, parseUnion } from '../../../parse/parsec';
import {
  getDtsFunction, getDtsClasses, getDtsStructs,
  getDtsEnum, getDtsUnions, genDtsFile
} from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_H2DTS_Gen_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part105.');

  /**
  * @tc.number : h2dts_gen_3523
  * @tc.name : h2dts_gen_3523
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3523', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3523(int a, size_t b, long c, int16_t d);`),
        unions: parseUnion(`void r5qp3523(int a, size_t b, long c, int16_t d);`),
        structs: parseStruct(`void r5qp3523(int a, size_t b, long c, int16_t d);`),
        classes: parseClass(`void r5qp3523(int a, size_t b, long c, int16_t d);`),
        funcs: parseFunction(`void r5qp3523(int a, size_t b, long c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3523 生成结果为空');
      const expectSnippet0 = 'export function r5qp3523(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3523 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3523 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3523 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3524
  * @tc.name : h2dts_gen_3524
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3524', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3524(int a, size_t b, long c, int32_t d);`),
        unions: parseUnion(`void r5qp3524(int a, size_t b, long c, int32_t d);`),
        structs: parseStruct(`void r5qp3524(int a, size_t b, long c, int32_t d);`),
        classes: parseClass(`void r5qp3524(int a, size_t b, long c, int32_t d);`),
        funcs: parseFunction(`void r5qp3524(int a, size_t b, long c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3524 生成结果为空');
      const expectSnippet0 = 'export function r5qp3524(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3524 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3524 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3524 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3525
  * @tc.name : h2dts_gen_3525
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3525', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3525(int a, size_t b, long c, int64_t d);`),
        unions: parseUnion(`void r5qp3525(int a, size_t b, long c, int64_t d);`),
        structs: parseStruct(`void r5qp3525(int a, size_t b, long c, int64_t d);`),
        classes: parseClass(`void r5qp3525(int a, size_t b, long c, int64_t d);`),
        funcs: parseFunction(`void r5qp3525(int a, size_t b, long c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3525 生成结果为空');
      const expectSnippet0 = 'export function r5qp3525(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3525 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3525 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3525 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3526
  * @tc.name : h2dts_gen_3526
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3526', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3526(int a, size_t b, long c, unsigned d);`),
        unions: parseUnion(`void r5qp3526(int a, size_t b, long c, unsigned d);`),
        structs: parseStruct(`void r5qp3526(int a, size_t b, long c, unsigned d);`),
        classes: parseClass(`void r5qp3526(int a, size_t b, long c, unsigned d);`),
        funcs: parseFunction(`void r5qp3526(int a, size_t b, long c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3526 生成结果为空');
      const expectSnippet0 = 'export function r5qp3526(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3526 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3526 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3527
  * @tc.name : h2dts_gen_3527
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3527', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3527(int a, size_t b, long c, bool d);`),
        unions: parseUnion(`void r5qp3527(int a, size_t b, long c, bool d);`),
        structs: parseStruct(`void r5qp3527(int a, size_t b, long c, bool d);`),
        classes: parseClass(`void r5qp3527(int a, size_t b, long c, bool d);`),
        funcs: parseFunction(`void r5qp3527(int a, size_t b, long c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3527 生成结果为空');
      const expectSnippet0 = 'export function r5qp3527(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3527 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3527 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3528
  * @tc.name : h2dts_gen_3528
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3528', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3528(int a, size_t b, long c, char d);`),
        unions: parseUnion(`void r5qp3528(int a, size_t b, long c, char d);`),
        structs: parseStruct(`void r5qp3528(int a, size_t b, long c, char d);`),
        classes: parseClass(`void r5qp3528(int a, size_t b, long c, char d);`),
        funcs: parseFunction(`void r5qp3528(int a, size_t b, long c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3528 生成结果为空');
      const expectSnippet0 = 'export function r5qp3528(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3528 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3528 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3529
  * @tc.name : h2dts_gen_3529
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3529', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3529(int a, size_t b, long c, wchar_t d);`),
        unions: parseUnion(`void r5qp3529(int a, size_t b, long c, wchar_t d);`),
        structs: parseStruct(`void r5qp3529(int a, size_t b, long c, wchar_t d);`),
        classes: parseClass(`void r5qp3529(int a, size_t b, long c, wchar_t d);`),
        funcs: parseFunction(`void r5qp3529(int a, size_t b, long c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3529 生成结果为空');
      const expectSnippet0 = 'export function r5qp3529(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3529 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3529 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3529 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3530
  * @tc.name : h2dts_gen_3530
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3530', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3530(int a, size_t b, long c, char8_t d);`),
        unions: parseUnion(`void r5qp3530(int a, size_t b, long c, char8_t d);`),
        structs: parseStruct(`void r5qp3530(int a, size_t b, long c, char8_t d);`),
        classes: parseClass(`void r5qp3530(int a, size_t b, long c, char8_t d);`),
        funcs: parseFunction(`void r5qp3530(int a, size_t b, long c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3530 生成结果为空');
      const expectSnippet0 = 'export function r5qp3530(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3530 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3530 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3531
  * @tc.name : h2dts_gen_3531
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3531', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3531(int a, size_t b, long c, char16_t d);`),
        unions: parseUnion(`void r5qp3531(int a, size_t b, long c, char16_t d);`),
        structs: parseStruct(`void r5qp3531(int a, size_t b, long c, char16_t d);`),
        classes: parseClass(`void r5qp3531(int a, size_t b, long c, char16_t d);`),
        funcs: parseFunction(`void r5qp3531(int a, size_t b, long c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3531 生成结果为空');
      const expectSnippet0 = 'export function r5qp3531(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3531 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3531 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3531 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3532
  * @tc.name : h2dts_gen_3532
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3532', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3532(int a, size_t b, long c, char32_t d);`),
        unions: parseUnion(`void r5qp3532(int a, size_t b, long c, char32_t d);`),
        structs: parseStruct(`void r5qp3532(int a, size_t b, long c, char32_t d);`),
        classes: parseClass(`void r5qp3532(int a, size_t b, long c, char32_t d);`),
        funcs: parseFunction(`void r5qp3532(int a, size_t b, long c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3532 生成结果为空');
      const expectSnippet0 = 'export function r5qp3532(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3532 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3532 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3533
  * @tc.name : h2dts_gen_3533
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3533', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3533(int a, size_t b, long c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp3533(int a, size_t b, long c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp3533(int a, size_t b, long c, std::deque<int> d);`),
        classes: parseClass(`void r5qp3533(int a, size_t b, long c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp3533(int a, size_t b, long c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3533 生成结果为空');
      const expectSnippet0 = 'export function r5qp3533(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3533 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3533 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3533 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3534
  * @tc.name : h2dts_gen_3534
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3534', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3534(int a, size_t b, long c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp3534(int a, size_t b, long c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp3534(int a, size_t b, long c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp3534(int a, size_t b, long c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp3534(int a, size_t b, long c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3534 生成结果为空');
      const expectSnippet0 = 'export function r5qp3534(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3534 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3534 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3534 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3535
  * @tc.name : h2dts_gen_3535
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3535', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3535(int a, size_t b, long c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp3535(int a, size_t b, long c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp3535(int a, size_t b, long c, std::deque<double> d);`),
        classes: parseClass(`void r5qp3535(int a, size_t b, long c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp3535(int a, size_t b, long c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3535 生成结果为空');
      const expectSnippet0 = 'export function r5qp3535(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3535 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3535 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3536
  * @tc.name : h2dts_gen_3536
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3536', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3536(int a, size_t b, long c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp3536(int a, size_t b, long c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp3536(int a, size_t b, long c, std::deque<float> d);`),
        classes: parseClass(`void r5qp3536(int a, size_t b, long c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp3536(int a, size_t b, long c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3536 生成结果为空');
      const expectSnippet0 = 'export function r5qp3536(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3536 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3536 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3537
  * @tc.name : h2dts_gen_3537
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3537', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3537(int a, size_t b, long c, std::deque<long> d);`),
        unions: parseUnion(`void r5qp3537(int a, size_t b, long c, std::deque<long> d);`),
        structs: parseStruct(`void r5qp3537(int a, size_t b, long c, std::deque<long> d);`),
        classes: parseClass(`void r5qp3537(int a, size_t b, long c, std::deque<long> d);`),
        funcs: parseFunction(`void r5qp3537(int a, size_t b, long c, std::deque<long> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3537 生成结果为空');
      const expectSnippet0 = 'export function r5qp3537(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3537 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3537 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3538
  * @tc.name : h2dts_gen_3538
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3538', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3538(int a, size_t b, long c, std::deque<short> d);`),
        unions: parseUnion(`void r5qp3538(int a, size_t b, long c, std::deque<short> d);`),
        structs: parseStruct(`void r5qp3538(int a, size_t b, long c, std::deque<short> d);`),
        classes: parseClass(`void r5qp3538(int a, size_t b, long c, std::deque<short> d);`),
        funcs: parseFunction(`void r5qp3538(int a, size_t b, long c, std::deque<short> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3538 生成结果为空');
      const expectSnippet0 = 'export function r5qp3538(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3538 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3538 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3539
  * @tc.name : h2dts_gen_3539
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3539', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3539(int a, size_t b, long c, std::deque<uint8_t> d);`),
        unions: parseUnion(`void r5qp3539(int a, size_t b, long c, std::deque<uint8_t> d);`),
        structs: parseStruct(`void r5qp3539(int a, size_t b, long c, std::deque<uint8_t> d);`),
        classes: parseClass(`void r5qp3539(int a, size_t b, long c, std::deque<uint8_t> d);`),
        funcs: parseFunction(`void r5qp3539(int a, size_t b, long c, std::deque<uint8_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3539 生成结果为空');
      const expectSnippet0 = 'export function r5qp3539(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3539 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3539 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3540
  * @tc.name : h2dts_gen_3540
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3540', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3540(int a, size_t b, long c, std::deque<uint16_t> d);`),
        unions: parseUnion(`void r5qp3540(int a, size_t b, long c, std::deque<uint16_t> d);`),
        structs: parseStruct(`void r5qp3540(int a, size_t b, long c, std::deque<uint16_t> d);`),
        classes: parseClass(`void r5qp3540(int a, size_t b, long c, std::deque<uint16_t> d);`),
        funcs: parseFunction(`void r5qp3540(int a, size_t b, long c, std::deque<uint16_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3540 生成结果为空');
      const expectSnippet0 = 'export function r5qp3540(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3540 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3540 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3541
  * @tc.name : h2dts_gen_3541
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3541', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3541(int a, size_t b, long c, std::deque<uint32_t> d);`),
        unions: parseUnion(`void r5qp3541(int a, size_t b, long c, std::deque<uint32_t> d);`),
        structs: parseStruct(`void r5qp3541(int a, size_t b, long c, std::deque<uint32_t> d);`),
        classes: parseClass(`void r5qp3541(int a, size_t b, long c, std::deque<uint32_t> d);`),
        funcs: parseFunction(`void r5qp3541(int a, size_t b, long c, std::deque<uint32_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3541 生成结果为空');
      const expectSnippet0 = 'export function r5qp3541(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3541 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3541 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3542
  * @tc.name : h2dts_gen_3542
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3542', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3542(int a, size_t b, uint8_t c, uint16_t d);`),
        unions: parseUnion(`void r5qp3542(int a, size_t b, uint8_t c, uint16_t d);`),
        structs: parseStruct(`void r5qp3542(int a, size_t b, uint8_t c, uint16_t d);`),
        classes: parseClass(`void r5qp3542(int a, size_t b, uint8_t c, uint16_t d);`),
        funcs: parseFunction(`void r5qp3542(int a, size_t b, uint8_t c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3542 生成结果为空');
      const expectSnippet0 = 'export function r5qp3542(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3542 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3542 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3542 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3543
  * @tc.name : h2dts_gen_3543
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3543', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3543(int a, size_t b, uint8_t c, uint32_t d);`),
        unions: parseUnion(`void r5qp3543(int a, size_t b, uint8_t c, uint32_t d);`),
        structs: parseStruct(`void r5qp3543(int a, size_t b, uint8_t c, uint32_t d);`),
        classes: parseClass(`void r5qp3543(int a, size_t b, uint8_t c, uint32_t d);`),
        funcs: parseFunction(`void r5qp3543(int a, size_t b, uint8_t c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3543 生成结果为空');
      const expectSnippet0 = 'export function r5qp3543(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3543 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3543 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3543 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3544
  * @tc.name : h2dts_gen_3544
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3544', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3544(int a, size_t b, uint8_t c, uint64_t d);`),
        unions: parseUnion(`void r5qp3544(int a, size_t b, uint8_t c, uint64_t d);`),
        structs: parseStruct(`void r5qp3544(int a, size_t b, uint8_t c, uint64_t d);`),
        classes: parseClass(`void r5qp3544(int a, size_t b, uint8_t c, uint64_t d);`),
        funcs: parseFunction(`void r5qp3544(int a, size_t b, uint8_t c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3544 生成结果为空');
      const expectSnippet0 = 'export function r5qp3544(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3544 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3544 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3544 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3545
  * @tc.name : h2dts_gen_3545
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3545', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3545(int a, size_t b, uint8_t c, int8_t d);`),
        unions: parseUnion(`void r5qp3545(int a, size_t b, uint8_t c, int8_t d);`),
        structs: parseStruct(`void r5qp3545(int a, size_t b, uint8_t c, int8_t d);`),
        classes: parseClass(`void r5qp3545(int a, size_t b, uint8_t c, int8_t d);`),
        funcs: parseFunction(`void r5qp3545(int a, size_t b, uint8_t c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3545 生成结果为空');
      const expectSnippet0 = 'export function r5qp3545(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3545 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3545 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3545 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3546
  * @tc.name : h2dts_gen_3546
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3546', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3546(int a, size_t b, uint8_t c, int16_t d);`),
        unions: parseUnion(`void r5qp3546(int a, size_t b, uint8_t c, int16_t d);`),
        structs: parseStruct(`void r5qp3546(int a, size_t b, uint8_t c, int16_t d);`),
        classes: parseClass(`void r5qp3546(int a, size_t b, uint8_t c, int16_t d);`),
        funcs: parseFunction(`void r5qp3546(int a, size_t b, uint8_t c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3546 生成结果为空');
      const expectSnippet0 = 'export function r5qp3546(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3546 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3546 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3546 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3547
  * @tc.name : h2dts_gen_3547
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3547', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3547(int a, size_t b, uint8_t c, int32_t d);`),
        unions: parseUnion(`void r5qp3547(int a, size_t b, uint8_t c, int32_t d);`),
        structs: parseStruct(`void r5qp3547(int a, size_t b, uint8_t c, int32_t d);`),
        classes: parseClass(`void r5qp3547(int a, size_t b, uint8_t c, int32_t d);`),
        funcs: parseFunction(`void r5qp3547(int a, size_t b, uint8_t c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3547 生成结果为空');
      const expectSnippet0 = 'export function r5qp3547(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3547 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3547 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3547 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3548
  * @tc.name : h2dts_gen_3548
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3548', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3548(int a, size_t b, uint8_t c, int64_t d);`),
        unions: parseUnion(`void r5qp3548(int a, size_t b, uint8_t c, int64_t d);`),
        structs: parseStruct(`void r5qp3548(int a, size_t b, uint8_t c, int64_t d);`),
        classes: parseClass(`void r5qp3548(int a, size_t b, uint8_t c, int64_t d);`),
        funcs: parseFunction(`void r5qp3548(int a, size_t b, uint8_t c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3548 生成结果为空');
      const expectSnippet0 = 'export function r5qp3548(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3548 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3548 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3548 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3549
  * @tc.name : h2dts_gen_3549
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3549', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3549(int a, size_t b, uint8_t c, unsigned d);`),
        unions: parseUnion(`void r5qp3549(int a, size_t b, uint8_t c, unsigned d);`),
        structs: parseStruct(`void r5qp3549(int a, size_t b, uint8_t c, unsigned d);`),
        classes: parseClass(`void r5qp3549(int a, size_t b, uint8_t c, unsigned d);`),
        funcs: parseFunction(`void r5qp3549(int a, size_t b, uint8_t c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3549 生成结果为空');
      const expectSnippet0 = 'export function r5qp3549(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3549 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3549 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3549 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3550
  * @tc.name : h2dts_gen_3550
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3550', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3550(int a, size_t b, uint8_t c, bool d);`),
        unions: parseUnion(`void r5qp3550(int a, size_t b, uint8_t c, bool d);`),
        structs: parseStruct(`void r5qp3550(int a, size_t b, uint8_t c, bool d);`),
        classes: parseClass(`void r5qp3550(int a, size_t b, uint8_t c, bool d);`),
        funcs: parseFunction(`void r5qp3550(int a, size_t b, uint8_t c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3550 生成结果为空');
      const expectSnippet0 = 'export function r5qp3550(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3550 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3550 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3550 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3551
  * @tc.name : h2dts_gen_3551
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3551', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3551(int a, size_t b, uint8_t c, char d);`),
        unions: parseUnion(`void r5qp3551(int a, size_t b, uint8_t c, char d);`),
        structs: parseStruct(`void r5qp3551(int a, size_t b, uint8_t c, char d);`),
        classes: parseClass(`void r5qp3551(int a, size_t b, uint8_t c, char d);`),
        funcs: parseFunction(`void r5qp3551(int a, size_t b, uint8_t c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3551 生成结果为空');
      const expectSnippet0 = 'export function r5qp3551(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3551 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3551 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3551 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3552
  * @tc.name : h2dts_gen_3552
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3552', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3552(int a, size_t b, uint8_t c, wchar_t d);`),
        unions: parseUnion(`void r5qp3552(int a, size_t b, uint8_t c, wchar_t d);`),
        structs: parseStruct(`void r5qp3552(int a, size_t b, uint8_t c, wchar_t d);`),
        classes: parseClass(`void r5qp3552(int a, size_t b, uint8_t c, wchar_t d);`),
        funcs: parseFunction(`void r5qp3552(int a, size_t b, uint8_t c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3552 生成结果为空');
      const expectSnippet0 = 'export function r5qp3552(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3552 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3552 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3552 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3553
  * @tc.name : h2dts_gen_3553
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3553', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3553(int a, size_t b, uint8_t c, char8_t d);`),
        unions: parseUnion(`void r5qp3553(int a, size_t b, uint8_t c, char8_t d);`),
        structs: parseStruct(`void r5qp3553(int a, size_t b, uint8_t c, char8_t d);`),
        classes: parseClass(`void r5qp3553(int a, size_t b, uint8_t c, char8_t d);`),
        funcs: parseFunction(`void r5qp3553(int a, size_t b, uint8_t c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3553 生成结果为空');
      const expectSnippet0 = 'export function r5qp3553(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3553 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3553 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3553 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3554
  * @tc.name : h2dts_gen_3554
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3554', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3554(int a, size_t b, uint8_t c, char16_t d);`),
        unions: parseUnion(`void r5qp3554(int a, size_t b, uint8_t c, char16_t d);`),
        structs: parseStruct(`void r5qp3554(int a, size_t b, uint8_t c, char16_t d);`),
        classes: parseClass(`void r5qp3554(int a, size_t b, uint8_t c, char16_t d);`),
        funcs: parseFunction(`void r5qp3554(int a, size_t b, uint8_t c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3554 生成结果为空');
      const expectSnippet0 = 'export function r5qp3554(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3554 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3554 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3554 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3555
  * @tc.name : h2dts_gen_3555
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3555', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3555(int a, size_t b, uint8_t c, char32_t d);`),
        unions: parseUnion(`void r5qp3555(int a, size_t b, uint8_t c, char32_t d);`),
        structs: parseStruct(`void r5qp3555(int a, size_t b, uint8_t c, char32_t d);`),
        classes: parseClass(`void r5qp3555(int a, size_t b, uint8_t c, char32_t d);`),
        funcs: parseFunction(`void r5qp3555(int a, size_t b, uint8_t c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3555 生成结果为空');
      const expectSnippet0 = 'export function r5qp3555(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3555 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3555 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3555 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3556
  * @tc.name : h2dts_gen_3556
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3556', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3556(int a, size_t b, uint8_t c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp3556(int a, size_t b, uint8_t c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp3556(int a, size_t b, uint8_t c, std::deque<int> d);`),
        classes: parseClass(`void r5qp3556(int a, size_t b, uint8_t c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp3556(int a, size_t b, uint8_t c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3556 生成结果为空');
      const expectSnippet0 = 'export function r5qp3556(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3556 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3556 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3556 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3557
  * @tc.name : h2dts_gen_3557
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3557', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3557(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp3557(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp3557(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp3557(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp3557(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3557 生成结果为空');
      const expectSnippet0 = 'export function r5qp3557(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3557 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3557 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3557 执行异常: ${String(err)}`);
    }
  });
});
