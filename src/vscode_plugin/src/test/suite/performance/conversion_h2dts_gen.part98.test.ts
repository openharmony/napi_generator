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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part98.');

  /**
  * @tc.number : h2dts_gen_3278
  * @tc.name : h2dts_gen_3278
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3278', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int16_t>::iterator r5ret3278(int seed);`),
        unions: parseUnion(`std::list<int16_t>::iterator r5ret3278(int seed);`),
        structs: parseStruct(`std::list<int16_t>::iterator r5ret3278(int seed);`),
        classes: parseClass(`std::list<int16_t>::iterator r5ret3278(int seed);`),
        funcs: parseFunction(`std::list<int16_t>::iterator r5ret3278(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3278 生成结果为空');
      const expectSnippet0 = 'export function r5ret3278(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3278 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3278 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3279
  * @tc.name : h2dts_gen_3279
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3279', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int32_t>::iterator r5ret3279(int seed);`),
        unions: parseUnion(`std::list<int32_t>::iterator r5ret3279(int seed);`),
        structs: parseStruct(`std::list<int32_t>::iterator r5ret3279(int seed);`),
        classes: parseClass(`std::list<int32_t>::iterator r5ret3279(int seed);`),
        funcs: parseFunction(`std::list<int32_t>::iterator r5ret3279(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3279 生成结果为空');
      const expectSnippet0 = 'export function r5ret3279(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3279 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3279 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3280
  * @tc.name : h2dts_gen_3280
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3280', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int64_t>::iterator r5ret3280(int seed);`),
        unions: parseUnion(`std::list<int64_t>::iterator r5ret3280(int seed);`),
        structs: parseStruct(`std::list<int64_t>::iterator r5ret3280(int seed);`),
        classes: parseClass(`std::list<int64_t>::iterator r5ret3280(int seed);`),
        funcs: parseFunction(`std::list<int64_t>::iterator r5ret3280(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3280 生成结果为空');
      const expectSnippet0 = 'export function r5ret3280(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3280 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3280 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3280 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3281
  * @tc.name : h2dts_gen_3281
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3281', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<unsigned>::iterator r5ret3281(int seed);`),
        unions: parseUnion(`std::list<unsigned>::iterator r5ret3281(int seed);`),
        structs: parseStruct(`std::list<unsigned>::iterator r5ret3281(int seed);`),
        classes: parseClass(`std::list<unsigned>::iterator r5ret3281(int seed);`),
        funcs: parseFunction(`std::list<unsigned>::iterator r5ret3281(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3281 生成结果为空');
      const expectSnippet0 = 'export function r5ret3281(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3281 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3281 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3281 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3282
  * @tc.name : h2dts_gen_3282
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3282', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<bool>::iterator r5ret3282(int seed);`),
        unions: parseUnion(`std::list<bool>::iterator r5ret3282(int seed);`),
        structs: parseStruct(`std::list<bool>::iterator r5ret3282(int seed);`),
        classes: parseClass(`std::list<bool>::iterator r5ret3282(int seed);`),
        funcs: parseFunction(`std::list<bool>::iterator r5ret3282(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3282 生成结果为空');
      const expectSnippet0 = 'export function r5ret3282(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3282 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3282 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3282 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3283
  * @tc.name : h2dts_gen_3283
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3283', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char>::iterator r5ret3283(int seed);`),
        unions: parseUnion(`std::list<char>::iterator r5ret3283(int seed);`),
        structs: parseStruct(`std::list<char>::iterator r5ret3283(int seed);`),
        classes: parseClass(`std::list<char>::iterator r5ret3283(int seed);`),
        funcs: parseFunction(`std::list<char>::iterator r5ret3283(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3283 生成结果为空');
      const expectSnippet0 = 'export function r5ret3283(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3283 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3283 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3283 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3284
  * @tc.name : h2dts_gen_3284
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3284', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<wchar_t>::iterator r5ret3284(int seed);`),
        unions: parseUnion(`std::list<wchar_t>::iterator r5ret3284(int seed);`),
        structs: parseStruct(`std::list<wchar_t>::iterator r5ret3284(int seed);`),
        classes: parseClass(`std::list<wchar_t>::iterator r5ret3284(int seed);`),
        funcs: parseFunction(`std::list<wchar_t>::iterator r5ret3284(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3284 生成结果为空');
      const expectSnippet0 = 'export function r5ret3284(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3284 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3284 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3284 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3285
  * @tc.name : h2dts_gen_3285
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3285', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char8_t>::iterator r5ret3285(int seed);`),
        unions: parseUnion(`std::list<char8_t>::iterator r5ret3285(int seed);`),
        structs: parseStruct(`std::list<char8_t>::iterator r5ret3285(int seed);`),
        classes: parseClass(`std::list<char8_t>::iterator r5ret3285(int seed);`),
        funcs: parseFunction(`std::list<char8_t>::iterator r5ret3285(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3285 生成结果为空');
      const expectSnippet0 = 'export function r5ret3285(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3285 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3285 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3286
  * @tc.name : h2dts_gen_3286
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3286', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char16_t>::iterator r5ret3286(int seed);`),
        unions: parseUnion(`std::list<char16_t>::iterator r5ret3286(int seed);`),
        structs: parseStruct(`std::list<char16_t>::iterator r5ret3286(int seed);`),
        classes: parseClass(`std::list<char16_t>::iterator r5ret3286(int seed);`),
        funcs: parseFunction(`std::list<char16_t>::iterator r5ret3286(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3286 生成结果为空');
      const expectSnippet0 = 'export function r5ret3286(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3286 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3286 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3287
  * @tc.name : h2dts_gen_3287
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3287', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char32_t>::iterator r5ret3287(int seed);`),
        unions: parseUnion(`std::list<char32_t>::iterator r5ret3287(int seed);`),
        structs: parseStruct(`std::list<char32_t>::iterator r5ret3287(int seed);`),
        classes: parseClass(`std::list<char32_t>::iterator r5ret3287(int seed);`),
        funcs: parseFunction(`std::list<char32_t>::iterator r5ret3287(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3287 生成结果为空');
      const expectSnippet0 = 'export function r5ret3287(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3287 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3287 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3287 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3288
  * @tc.name : h2dts_gen_3288
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3288', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int> r5ret3288(int seed);`),
        unions: parseUnion(`std::forward_list<int> r5ret3288(int seed);`),
        structs: parseStruct(`std::forward_list<int> r5ret3288(int seed);`),
        classes: parseClass(`std::forward_list<int> r5ret3288(int seed);`),
        funcs: parseFunction(`std::forward_list<int> r5ret3288(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3288 生成结果为空');
      const expectSnippet0 = 'export function r5ret3288(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3288 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3288 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3289
  * @tc.name : h2dts_gen_3289
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3289', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<size_t> r5ret3289(int seed);`),
        unions: parseUnion(`std::forward_list<size_t> r5ret3289(int seed);`),
        structs: parseStruct(`std::forward_list<size_t> r5ret3289(int seed);`),
        classes: parseClass(`std::forward_list<size_t> r5ret3289(int seed);`),
        funcs: parseFunction(`std::forward_list<size_t> r5ret3289(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3289 生成结果为空');
      const expectSnippet0 = 'export function r5ret3289(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3289 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3289 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3289 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3290
  * @tc.name : h2dts_gen_3290
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3290', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<double> r5ret3290(int seed);`),
        unions: parseUnion(`std::forward_list<double> r5ret3290(int seed);`),
        structs: parseStruct(`std::forward_list<double> r5ret3290(int seed);`),
        classes: parseClass(`std::forward_list<double> r5ret3290(int seed);`),
        funcs: parseFunction(`std::forward_list<double> r5ret3290(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3290 生成结果为空');
      const expectSnippet0 = 'export function r5ret3290(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3290 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3290 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3290 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3291
  * @tc.name : h2dts_gen_3291
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3291', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<float> r5ret3291(int seed);`),
        unions: parseUnion(`std::forward_list<float> r5ret3291(int seed);`),
        structs: parseStruct(`std::forward_list<float> r5ret3291(int seed);`),
        classes: parseClass(`std::forward_list<float> r5ret3291(int seed);`),
        funcs: parseFunction(`std::forward_list<float> r5ret3291(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3291 生成结果为空');
      const expectSnippet0 = 'export function r5ret3291(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3291 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3291 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3291 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3292
  * @tc.name : h2dts_gen_3292
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3292', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<long> r5ret3292(int seed);`),
        unions: parseUnion(`std::forward_list<long> r5ret3292(int seed);`),
        structs: parseStruct(`std::forward_list<long> r5ret3292(int seed);`),
        classes: parseClass(`std::forward_list<long> r5ret3292(int seed);`),
        funcs: parseFunction(`std::forward_list<long> r5ret3292(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3292 生成结果为空');
      const expectSnippet0 = 'export function r5ret3292(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3292 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3292 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3292 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3293
  * @tc.name : h2dts_gen_3293
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3293', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<short> r5ret3293(int seed);`),
        unions: parseUnion(`std::forward_list<short> r5ret3293(int seed);`),
        structs: parseStruct(`std::forward_list<short> r5ret3293(int seed);`),
        classes: parseClass(`std::forward_list<short> r5ret3293(int seed);`),
        funcs: parseFunction(`std::forward_list<short> r5ret3293(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3293 生成结果为空');
      const expectSnippet0 = 'export function r5ret3293(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3293 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3293 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3294
  * @tc.name : h2dts_gen_3294
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3294', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint8_t> r5ret3294(int seed);`),
        unions: parseUnion(`std::forward_list<uint8_t> r5ret3294(int seed);`),
        structs: parseStruct(`std::forward_list<uint8_t> r5ret3294(int seed);`),
        classes: parseClass(`std::forward_list<uint8_t> r5ret3294(int seed);`),
        funcs: parseFunction(`std::forward_list<uint8_t> r5ret3294(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3294 生成结果为空');
      const expectSnippet0 = 'export function r5ret3294(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3294 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3294 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3294 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3295
  * @tc.name : h2dts_gen_3295
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3295', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint16_t> r5ret3295(int seed);`),
        unions: parseUnion(`std::forward_list<uint16_t> r5ret3295(int seed);`),
        structs: parseStruct(`std::forward_list<uint16_t> r5ret3295(int seed);`),
        classes: parseClass(`std::forward_list<uint16_t> r5ret3295(int seed);`),
        funcs: parseFunction(`std::forward_list<uint16_t> r5ret3295(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3295 生成结果为空');
      const expectSnippet0 = 'export function r5ret3295(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3295 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3295 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3296
  * @tc.name : h2dts_gen_3296
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3296', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint32_t> r5ret3296(int seed);`),
        unions: parseUnion(`std::forward_list<uint32_t> r5ret3296(int seed);`),
        structs: parseStruct(`std::forward_list<uint32_t> r5ret3296(int seed);`),
        classes: parseClass(`std::forward_list<uint32_t> r5ret3296(int seed);`),
        funcs: parseFunction(`std::forward_list<uint32_t> r5ret3296(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3296 生成结果为空');
      const expectSnippet0 = 'export function r5ret3296(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3296 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3296 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3297
  * @tc.name : h2dts_gen_3297
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3297', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint64_t> r5ret3297(int seed);`),
        unions: parseUnion(`std::forward_list<uint64_t> r5ret3297(int seed);`),
        structs: parseStruct(`std::forward_list<uint64_t> r5ret3297(int seed);`),
        classes: parseClass(`std::forward_list<uint64_t> r5ret3297(int seed);`),
        funcs: parseFunction(`std::forward_list<uint64_t> r5ret3297(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3297 生成结果为空');
      const expectSnippet0 = 'export function r5ret3297(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3297 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3297 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3297 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3298
  * @tc.name : h2dts_gen_3298
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3298', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int8_t> r5ret3298(int seed);`),
        unions: parseUnion(`std::forward_list<int8_t> r5ret3298(int seed);`),
        structs: parseStruct(`std::forward_list<int8_t> r5ret3298(int seed);`),
        classes: parseClass(`std::forward_list<int8_t> r5ret3298(int seed);`),
        funcs: parseFunction(`std::forward_list<int8_t> r5ret3298(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3298 生成结果为空');
      const expectSnippet0 = 'export function r5ret3298(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3298 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3298 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3299
  * @tc.name : h2dts_gen_3299
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3299', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int16_t> r5ret3299(int seed);`),
        unions: parseUnion(`std::forward_list<int16_t> r5ret3299(int seed);`),
        structs: parseStruct(`std::forward_list<int16_t> r5ret3299(int seed);`),
        classes: parseClass(`std::forward_list<int16_t> r5ret3299(int seed);`),
        funcs: parseFunction(`std::forward_list<int16_t> r5ret3299(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3299 生成结果为空');
      const expectSnippet0 = 'export function r5ret3299(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3299 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3299 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3300
  * @tc.name : h2dts_gen_3300
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3300', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int32_t> r5ret3300(int seed);`),
        unions: parseUnion(`std::forward_list<int32_t> r5ret3300(int seed);`),
        structs: parseStruct(`std::forward_list<int32_t> r5ret3300(int seed);`),
        classes: parseClass(`std::forward_list<int32_t> r5ret3300(int seed);`),
        funcs: parseFunction(`std::forward_list<int32_t> r5ret3300(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3300 生成结果为空');
      const expectSnippet0 = 'export function r5ret3300(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3300 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3300 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3301
  * @tc.name : h2dts_gen_3301
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3301', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int64_t> r5ret3301(int seed);`),
        unions: parseUnion(`std::forward_list<int64_t> r5ret3301(int seed);`),
        structs: parseStruct(`std::forward_list<int64_t> r5ret3301(int seed);`),
        classes: parseClass(`std::forward_list<int64_t> r5ret3301(int seed);`),
        funcs: parseFunction(`std::forward_list<int64_t> r5ret3301(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3301 生成结果为空');
      const expectSnippet0 = 'export function r5ret3301(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3301 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3301 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3301 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3302
  * @tc.name : h2dts_gen_3302
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3302', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<unsigned> r5ret3302(int seed);`),
        unions: parseUnion(`std::forward_list<unsigned> r5ret3302(int seed);`),
        structs: parseStruct(`std::forward_list<unsigned> r5ret3302(int seed);`),
        classes: parseClass(`std::forward_list<unsigned> r5ret3302(int seed);`),
        funcs: parseFunction(`std::forward_list<unsigned> r5ret3302(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3302 生成结果为空');
      const expectSnippet0 = 'export function r5ret3302(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3302 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3302 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3303
  * @tc.name : h2dts_gen_3303
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3303', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<bool> r5ret3303(int seed);`),
        unions: parseUnion(`std::forward_list<bool> r5ret3303(int seed);`),
        structs: parseStruct(`std::forward_list<bool> r5ret3303(int seed);`),
        classes: parseClass(`std::forward_list<bool> r5ret3303(int seed);`),
        funcs: parseFunction(`std::forward_list<bool> r5ret3303(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3303 生成结果为空');
      const expectSnippet0 = 'export function r5ret3303(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3303 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3303 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3304
  * @tc.name : h2dts_gen_3304
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3304', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char> r5ret3304(int seed);`),
        unions: parseUnion(`std::forward_list<char> r5ret3304(int seed);`),
        structs: parseStruct(`std::forward_list<char> r5ret3304(int seed);`),
        classes: parseClass(`std::forward_list<char> r5ret3304(int seed);`),
        funcs: parseFunction(`std::forward_list<char> r5ret3304(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3304 生成结果为空');
      const expectSnippet0 = 'export function r5ret3304(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3304 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3304 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3304 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3305
  * @tc.name : h2dts_gen_3305
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3305', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<wchar_t> r5ret3305(int seed);`),
        unions: parseUnion(`std::forward_list<wchar_t> r5ret3305(int seed);`),
        structs: parseStruct(`std::forward_list<wchar_t> r5ret3305(int seed);`),
        classes: parseClass(`std::forward_list<wchar_t> r5ret3305(int seed);`),
        funcs: parseFunction(`std::forward_list<wchar_t> r5ret3305(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3305 生成结果为空');
      const expectSnippet0 = 'export function r5ret3305(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3305 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3305 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3306
  * @tc.name : h2dts_gen_3306
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3306', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char8_t> r5ret3306(int seed);`),
        unions: parseUnion(`std::forward_list<char8_t> r5ret3306(int seed);`),
        structs: parseStruct(`std::forward_list<char8_t> r5ret3306(int seed);`),
        classes: parseClass(`std::forward_list<char8_t> r5ret3306(int seed);`),
        funcs: parseFunction(`std::forward_list<char8_t> r5ret3306(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3306 生成结果为空');
      const expectSnippet0 = 'export function r5ret3306(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3306 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3306 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3306 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3307
  * @tc.name : h2dts_gen_3307
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3307', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char16_t> r5ret3307(int seed);`),
        unions: parseUnion(`std::forward_list<char16_t> r5ret3307(int seed);`),
        structs: parseStruct(`std::forward_list<char16_t> r5ret3307(int seed);`),
        classes: parseClass(`std::forward_list<char16_t> r5ret3307(int seed);`),
        funcs: parseFunction(`std::forward_list<char16_t> r5ret3307(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3307 生成结果为空');
      const expectSnippet0 = 'export function r5ret3307(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3307 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3307 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3307 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3308
  * @tc.name : h2dts_gen_3308
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3308', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char32_t> r5ret3308(int seed);`),
        unions: parseUnion(`std::forward_list<char32_t> r5ret3308(int seed);`),
        structs: parseStruct(`std::forward_list<char32_t> r5ret3308(int seed);`),
        classes: parseClass(`std::forward_list<char32_t> r5ret3308(int seed);`),
        funcs: parseFunction(`std::forward_list<char32_t> r5ret3308(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3308 生成结果为空');
      const expectSnippet0 = 'export function r5ret3308(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3308 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3308 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3308 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3309
  * @tc.name : h2dts_gen_3309
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3309', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int>::iterator r5ret3309(int seed);`),
        unions: parseUnion(`std::forward_list<int>::iterator r5ret3309(int seed);`),
        structs: parseStruct(`std::forward_list<int>::iterator r5ret3309(int seed);`),
        classes: parseClass(`std::forward_list<int>::iterator r5ret3309(int seed);`),
        funcs: parseFunction(`std::forward_list<int>::iterator r5ret3309(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3309 生成结果为空');
      const expectSnippet0 = 'export function r5ret3309(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3309 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3309 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3309 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3310
  * @tc.name : h2dts_gen_3310
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3310', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<size_t>::iterator r5ret3310(int seed);`),
        unions: parseUnion(`std::forward_list<size_t>::iterator r5ret3310(int seed);`),
        structs: parseStruct(`std::forward_list<size_t>::iterator r5ret3310(int seed);`),
        classes: parseClass(`std::forward_list<size_t>::iterator r5ret3310(int seed);`),
        funcs: parseFunction(`std::forward_list<size_t>::iterator r5ret3310(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3310 生成结果为空');
      const expectSnippet0 = 'export function r5ret3310(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3310 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3310 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3310 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3311
  * @tc.name : h2dts_gen_3311
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3311', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<double>::iterator r5ret3311(int seed);`),
        unions: parseUnion(`std::forward_list<double>::iterator r5ret3311(int seed);`),
        structs: parseStruct(`std::forward_list<double>::iterator r5ret3311(int seed);`),
        classes: parseClass(`std::forward_list<double>::iterator r5ret3311(int seed);`),
        funcs: parseFunction(`std::forward_list<double>::iterator r5ret3311(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3311 生成结果为空');
      const expectSnippet0 = 'export function r5ret3311(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3311 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3311 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3311 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3312
  * @tc.name : h2dts_gen_3312
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3312', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<float>::iterator r5ret3312(int seed);`),
        unions: parseUnion(`std::forward_list<float>::iterator r5ret3312(int seed);`),
        structs: parseStruct(`std::forward_list<float>::iterator r5ret3312(int seed);`),
        classes: parseClass(`std::forward_list<float>::iterator r5ret3312(int seed);`),
        funcs: parseFunction(`std::forward_list<float>::iterator r5ret3312(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3312 生成结果为空');
      const expectSnippet0 = 'export function r5ret3312(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3312 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3312 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3312 执行异常: ${String(err)}`);
    }
  });
});
