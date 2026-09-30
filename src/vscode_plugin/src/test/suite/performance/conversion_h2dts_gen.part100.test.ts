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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part100.');

  /**
  * @tc.number : h2dts_gen_3348
  * @tc.name : h2dts_gen_3348
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3348', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char8_t> r5ret3348(int seed);`),
        unions: parseUnion(`std::stack<char8_t> r5ret3348(int seed);`),
        structs: parseStruct(`std::stack<char8_t> r5ret3348(int seed);`),
        classes: parseClass(`std::stack<char8_t> r5ret3348(int seed);`),
        funcs: parseFunction(`std::stack<char8_t> r5ret3348(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3348 生成结果为空');
      const expectSnippet0 = 'export function r5ret3348(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3348 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3348 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3348 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3349
  * @tc.name : h2dts_gen_3349
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3349', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char16_t> r5ret3349(int seed);`),
        unions: parseUnion(`std::stack<char16_t> r5ret3349(int seed);`),
        structs: parseStruct(`std::stack<char16_t> r5ret3349(int seed);`),
        classes: parseClass(`std::stack<char16_t> r5ret3349(int seed);`),
        funcs: parseFunction(`std::stack<char16_t> r5ret3349(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3349 生成结果为空');
      const expectSnippet0 = 'export function r5ret3349(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3349 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3349 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3349 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3350
  * @tc.name : h2dts_gen_3350
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3350', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char32_t> r5ret3350(int seed);`),
        unions: parseUnion(`std::stack<char32_t> r5ret3350(int seed);`),
        structs: parseStruct(`std::stack<char32_t> r5ret3350(int seed);`),
        classes: parseClass(`std::stack<char32_t> r5ret3350(int seed);`),
        funcs: parseFunction(`std::stack<char32_t> r5ret3350(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3350 生成结果为空');
      const expectSnippet0 = 'export function r5ret3350(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3350 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3350 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3350 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3351
  * @tc.name : h2dts_gen_3351
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3351', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int>::iterator r5ret3351(int seed);`),
        unions: parseUnion(`std::stack<int>::iterator r5ret3351(int seed);`),
        structs: parseStruct(`std::stack<int>::iterator r5ret3351(int seed);`),
        classes: parseClass(`std::stack<int>::iterator r5ret3351(int seed);`),
        funcs: parseFunction(`std::stack<int>::iterator r5ret3351(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3351 生成结果为空');
      const expectSnippet0 = 'export function r5ret3351(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3351 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3351 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3351 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3352
  * @tc.name : h2dts_gen_3352
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3352', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<size_t>::iterator r5ret3352(int seed);`),
        unions: parseUnion(`std::stack<size_t>::iterator r5ret3352(int seed);`),
        structs: parseStruct(`std::stack<size_t>::iterator r5ret3352(int seed);`),
        classes: parseClass(`std::stack<size_t>::iterator r5ret3352(int seed);`),
        funcs: parseFunction(`std::stack<size_t>::iterator r5ret3352(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3352 生成结果为空');
      const expectSnippet0 = 'export function r5ret3352(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3352 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3352 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3352 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3353
  * @tc.name : h2dts_gen_3353
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3353', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<double>::iterator r5ret3353(int seed);`),
        unions: parseUnion(`std::stack<double>::iterator r5ret3353(int seed);`),
        structs: parseStruct(`std::stack<double>::iterator r5ret3353(int seed);`),
        classes: parseClass(`std::stack<double>::iterator r5ret3353(int seed);`),
        funcs: parseFunction(`std::stack<double>::iterator r5ret3353(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3353 生成结果为空');
      const expectSnippet0 = 'export function r5ret3353(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3353 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3353 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3353 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3354
  * @tc.name : h2dts_gen_3354
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3354', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<float>::iterator r5ret3354(int seed);`),
        unions: parseUnion(`std::stack<float>::iterator r5ret3354(int seed);`),
        structs: parseStruct(`std::stack<float>::iterator r5ret3354(int seed);`),
        classes: parseClass(`std::stack<float>::iterator r5ret3354(int seed);`),
        funcs: parseFunction(`std::stack<float>::iterator r5ret3354(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3354 生成结果为空');
      const expectSnippet0 = 'export function r5ret3354(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3354 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3354 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3355
  * @tc.name : h2dts_gen_3355
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3355', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<long>::iterator r5ret3355(int seed);`),
        unions: parseUnion(`std::stack<long>::iterator r5ret3355(int seed);`),
        structs: parseStruct(`std::stack<long>::iterator r5ret3355(int seed);`),
        classes: parseClass(`std::stack<long>::iterator r5ret3355(int seed);`),
        funcs: parseFunction(`std::stack<long>::iterator r5ret3355(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3355 生成结果为空');
      const expectSnippet0 = 'export function r5ret3355(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3355 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3355 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3356
  * @tc.name : h2dts_gen_3356
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3356', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<short>::iterator r5ret3356(int seed);`),
        unions: parseUnion(`std::stack<short>::iterator r5ret3356(int seed);`),
        structs: parseStruct(`std::stack<short>::iterator r5ret3356(int seed);`),
        classes: parseClass(`std::stack<short>::iterator r5ret3356(int seed);`),
        funcs: parseFunction(`std::stack<short>::iterator r5ret3356(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3356 生成结果为空');
      const expectSnippet0 = 'export function r5ret3356(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3356 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3356 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3356 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3357
  * @tc.name : h2dts_gen_3357
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3357', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint8_t>::iterator r5ret3357(int seed);`),
        unions: parseUnion(`std::stack<uint8_t>::iterator r5ret3357(int seed);`),
        structs: parseStruct(`std::stack<uint8_t>::iterator r5ret3357(int seed);`),
        classes: parseClass(`std::stack<uint8_t>::iterator r5ret3357(int seed);`),
        funcs: parseFunction(`std::stack<uint8_t>::iterator r5ret3357(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3357 生成结果为空');
      const expectSnippet0 = 'export function r5ret3357(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3357 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3357 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3358
  * @tc.name : h2dts_gen_3358
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3358', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint16_t>::iterator r5ret3358(int seed);`),
        unions: parseUnion(`std::stack<uint16_t>::iterator r5ret3358(int seed);`),
        structs: parseStruct(`std::stack<uint16_t>::iterator r5ret3358(int seed);`),
        classes: parseClass(`std::stack<uint16_t>::iterator r5ret3358(int seed);`),
        funcs: parseFunction(`std::stack<uint16_t>::iterator r5ret3358(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3358 生成结果为空');
      const expectSnippet0 = 'export function r5ret3358(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3358 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3358 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3359
  * @tc.name : h2dts_gen_3359
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3359', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint32_t>::iterator r5ret3359(int seed);`),
        unions: parseUnion(`std::stack<uint32_t>::iterator r5ret3359(int seed);`),
        structs: parseStruct(`std::stack<uint32_t>::iterator r5ret3359(int seed);`),
        classes: parseClass(`std::stack<uint32_t>::iterator r5ret3359(int seed);`),
        funcs: parseFunction(`std::stack<uint32_t>::iterator r5ret3359(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3359 生成结果为空');
      const expectSnippet0 = 'export function r5ret3359(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3359 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3359 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3360
  * @tc.name : h2dts_gen_3360
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3360', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint64_t>::iterator r5ret3360(int seed);`),
        unions: parseUnion(`std::stack<uint64_t>::iterator r5ret3360(int seed);`),
        structs: parseStruct(`std::stack<uint64_t>::iterator r5ret3360(int seed);`),
        classes: parseClass(`std::stack<uint64_t>::iterator r5ret3360(int seed);`),
        funcs: parseFunction(`std::stack<uint64_t>::iterator r5ret3360(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3360 生成结果为空');
      const expectSnippet0 = 'export function r5ret3360(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3360 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3360 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3360 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3361
  * @tc.name : h2dts_gen_3361
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3361', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int8_t>::iterator r5ret3361(int seed);`),
        unions: parseUnion(`std::stack<int8_t>::iterator r5ret3361(int seed);`),
        structs: parseStruct(`std::stack<int8_t>::iterator r5ret3361(int seed);`),
        classes: parseClass(`std::stack<int8_t>::iterator r5ret3361(int seed);`),
        funcs: parseFunction(`std::stack<int8_t>::iterator r5ret3361(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3361 生成结果为空');
      const expectSnippet0 = 'export function r5ret3361(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3361 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3361 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3361 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3362
  * @tc.name : h2dts_gen_3362
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3362', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int16_t>::iterator r5ret3362(int seed);`),
        unions: parseUnion(`std::stack<int16_t>::iterator r5ret3362(int seed);`),
        structs: parseStruct(`std::stack<int16_t>::iterator r5ret3362(int seed);`),
        classes: parseClass(`std::stack<int16_t>::iterator r5ret3362(int seed);`),
        funcs: parseFunction(`std::stack<int16_t>::iterator r5ret3362(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3362 生成结果为空');
      const expectSnippet0 = 'export function r5ret3362(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3362 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3362 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3363
  * @tc.name : h2dts_gen_3363
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3363', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int32_t>::iterator r5ret3363(int seed);`),
        unions: parseUnion(`std::stack<int32_t>::iterator r5ret3363(int seed);`),
        structs: parseStruct(`std::stack<int32_t>::iterator r5ret3363(int seed);`),
        classes: parseClass(`std::stack<int32_t>::iterator r5ret3363(int seed);`),
        funcs: parseFunction(`std::stack<int32_t>::iterator r5ret3363(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3363 生成结果为空');
      const expectSnippet0 = 'export function r5ret3363(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3363 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3363 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3363 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3364
  * @tc.name : h2dts_gen_3364
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3364', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int64_t>::iterator r5ret3364(int seed);`),
        unions: parseUnion(`std::stack<int64_t>::iterator r5ret3364(int seed);`),
        structs: parseStruct(`std::stack<int64_t>::iterator r5ret3364(int seed);`),
        classes: parseClass(`std::stack<int64_t>::iterator r5ret3364(int seed);`),
        funcs: parseFunction(`std::stack<int64_t>::iterator r5ret3364(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3364 生成结果为空');
      const expectSnippet0 = 'export function r5ret3364(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3364 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3364 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3364 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3365
  * @tc.name : h2dts_gen_3365
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3365', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<unsigned>::iterator r5ret3365(int seed);`),
        unions: parseUnion(`std::stack<unsigned>::iterator r5ret3365(int seed);`),
        structs: parseStruct(`std::stack<unsigned>::iterator r5ret3365(int seed);`),
        classes: parseClass(`std::stack<unsigned>::iterator r5ret3365(int seed);`),
        funcs: parseFunction(`std::stack<unsigned>::iterator r5ret3365(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3365 生成结果为空');
      const expectSnippet0 = 'export function r5ret3365(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3365 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3365 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3365 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3366
  * @tc.name : h2dts_gen_3366
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3366', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<bool>::iterator r5ret3366(int seed);`),
        unions: parseUnion(`std::stack<bool>::iterator r5ret3366(int seed);`),
        structs: parseStruct(`std::stack<bool>::iterator r5ret3366(int seed);`),
        classes: parseClass(`std::stack<bool>::iterator r5ret3366(int seed);`),
        funcs: parseFunction(`std::stack<bool>::iterator r5ret3366(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3366 生成结果为空');
      const expectSnippet0 = 'export function r5ret3366(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3366 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3366 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3366 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3367
  * @tc.name : h2dts_gen_3367
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3367', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char>::iterator r5ret3367(int seed);`),
        unions: parseUnion(`std::stack<char>::iterator r5ret3367(int seed);`),
        structs: parseStruct(`std::stack<char>::iterator r5ret3367(int seed);`),
        classes: parseClass(`std::stack<char>::iterator r5ret3367(int seed);`),
        funcs: parseFunction(`std::stack<char>::iterator r5ret3367(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3367 生成结果为空');
      const expectSnippet0 = 'export function r5ret3367(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3367 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3367 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3367 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3368
  * @tc.name : h2dts_gen_3368
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3368', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<wchar_t>::iterator r5ret3368(int seed);`),
        unions: parseUnion(`std::stack<wchar_t>::iterator r5ret3368(int seed);`),
        structs: parseStruct(`std::stack<wchar_t>::iterator r5ret3368(int seed);`),
        classes: parseClass(`std::stack<wchar_t>::iterator r5ret3368(int seed);`),
        funcs: parseFunction(`std::stack<wchar_t>::iterator r5ret3368(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3368 生成结果为空');
      const expectSnippet0 = 'export function r5ret3368(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3368 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3368 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3368 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3369
  * @tc.name : h2dts_gen_3369
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3369', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char8_t>::iterator r5ret3369(int seed);`),
        unions: parseUnion(`std::stack<char8_t>::iterator r5ret3369(int seed);`),
        structs: parseStruct(`std::stack<char8_t>::iterator r5ret3369(int seed);`),
        classes: parseClass(`std::stack<char8_t>::iterator r5ret3369(int seed);`),
        funcs: parseFunction(`std::stack<char8_t>::iterator r5ret3369(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3369 生成结果为空');
      const expectSnippet0 = 'export function r5ret3369(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3369 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3369 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3369 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3370
  * @tc.name : h2dts_gen_3370
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3370', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char16_t>::iterator r5ret3370(int seed);`),
        unions: parseUnion(`std::stack<char16_t>::iterator r5ret3370(int seed);`),
        structs: parseStruct(`std::stack<char16_t>::iterator r5ret3370(int seed);`),
        classes: parseClass(`std::stack<char16_t>::iterator r5ret3370(int seed);`),
        funcs: parseFunction(`std::stack<char16_t>::iterator r5ret3370(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3370 生成结果为空');
      const expectSnippet0 = 'export function r5ret3370(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3370 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3370 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3371
  * @tc.name : h2dts_gen_3371
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3371', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char32_t>::iterator r5ret3371(int seed);`),
        unions: parseUnion(`std::stack<char32_t>::iterator r5ret3371(int seed);`),
        structs: parseStruct(`std::stack<char32_t>::iterator r5ret3371(int seed);`),
        classes: parseClass(`std::stack<char32_t>::iterator r5ret3371(int seed);`),
        funcs: parseFunction(`std::stack<char32_t>::iterator r5ret3371(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3371 生成结果为空');
      const expectSnippet0 = 'export function r5ret3371(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3371 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3371 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3372
  * @tc.name : h2dts_gen_3372
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3372', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int> r5ret3372(int seed);`),
        unions: parseUnion(`std::queue<int> r5ret3372(int seed);`),
        structs: parseStruct(`std::queue<int> r5ret3372(int seed);`),
        classes: parseClass(`std::queue<int> r5ret3372(int seed);`),
        funcs: parseFunction(`std::queue<int> r5ret3372(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3372 生成结果为空');
      const expectSnippet0 = 'export function r5ret3372(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3372 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3372 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3373
  * @tc.name : h2dts_gen_3373
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3373', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<size_t> r5ret3373(int seed);`),
        unions: parseUnion(`std::queue<size_t> r5ret3373(int seed);`),
        structs: parseStruct(`std::queue<size_t> r5ret3373(int seed);`),
        classes: parseClass(`std::queue<size_t> r5ret3373(int seed);`),
        funcs: parseFunction(`std::queue<size_t> r5ret3373(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3373 生成结果为空');
      const expectSnippet0 = 'export function r5ret3373(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3373 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3373 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3374
  * @tc.name : h2dts_gen_3374
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3374', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<double> r5ret3374(int seed);`),
        unions: parseUnion(`std::queue<double> r5ret3374(int seed);`),
        structs: parseStruct(`std::queue<double> r5ret3374(int seed);`),
        classes: parseClass(`std::queue<double> r5ret3374(int seed);`),
        funcs: parseFunction(`std::queue<double> r5ret3374(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3374 生成结果为空');
      const expectSnippet0 = 'export function r5ret3374(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3374 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3374 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3375
  * @tc.name : h2dts_gen_3375
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3375', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<float> r5ret3375(int seed);`),
        unions: parseUnion(`std::queue<float> r5ret3375(int seed);`),
        structs: parseStruct(`std::queue<float> r5ret3375(int seed);`),
        classes: parseClass(`std::queue<float> r5ret3375(int seed);`),
        funcs: parseFunction(`std::queue<float> r5ret3375(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3375 生成结果为空');
      const expectSnippet0 = 'export function r5ret3375(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3375 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3375 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3375 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3376
  * @tc.name : h2dts_gen_3376
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3376', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<long> r5ret3376(int seed);`),
        unions: parseUnion(`std::queue<long> r5ret3376(int seed);`),
        structs: parseStruct(`std::queue<long> r5ret3376(int seed);`),
        classes: parseClass(`std::queue<long> r5ret3376(int seed);`),
        funcs: parseFunction(`std::queue<long> r5ret3376(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3376 生成结果为空');
      const expectSnippet0 = 'export function r5ret3376(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3376 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3376 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3376 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3377
  * @tc.name : h2dts_gen_3377
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3377', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<short> r5ret3377(int seed);`),
        unions: parseUnion(`std::queue<short> r5ret3377(int seed);`),
        structs: parseStruct(`std::queue<short> r5ret3377(int seed);`),
        classes: parseClass(`std::queue<short> r5ret3377(int seed);`),
        funcs: parseFunction(`std::queue<short> r5ret3377(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3377 生成结果为空');
      const expectSnippet0 = 'export function r5ret3377(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3377 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3377 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3377 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3378
  * @tc.name : h2dts_gen_3378
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3378', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint8_t> r5ret3378(int seed);`),
        unions: parseUnion(`std::queue<uint8_t> r5ret3378(int seed);`),
        structs: parseStruct(`std::queue<uint8_t> r5ret3378(int seed);`),
        classes: parseClass(`std::queue<uint8_t> r5ret3378(int seed);`),
        funcs: parseFunction(`std::queue<uint8_t> r5ret3378(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3378 生成结果为空');
      const expectSnippet0 = 'export function r5ret3378(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3378 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3378 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3378 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3379
  * @tc.name : h2dts_gen_3379
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3379', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint16_t> r5ret3379(int seed);`),
        unions: parseUnion(`std::queue<uint16_t> r5ret3379(int seed);`),
        structs: parseStruct(`std::queue<uint16_t> r5ret3379(int seed);`),
        classes: parseClass(`std::queue<uint16_t> r5ret3379(int seed);`),
        funcs: parseFunction(`std::queue<uint16_t> r5ret3379(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3379 生成结果为空');
      const expectSnippet0 = 'export function r5ret3379(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3379 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3379 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3379 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3380
  * @tc.name : h2dts_gen_3380
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3380', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint32_t> r5ret3380(int seed);`),
        unions: parseUnion(`std::queue<uint32_t> r5ret3380(int seed);`),
        structs: parseStruct(`std::queue<uint32_t> r5ret3380(int seed);`),
        classes: parseClass(`std::queue<uint32_t> r5ret3380(int seed);`),
        funcs: parseFunction(`std::queue<uint32_t> r5ret3380(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3380 生成结果为空');
      const expectSnippet0 = 'export function r5ret3380(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3380 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3380 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3380 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3381
  * @tc.name : h2dts_gen_3381
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3381', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint64_t> r5ret3381(int seed);`),
        unions: parseUnion(`std::queue<uint64_t> r5ret3381(int seed);`),
        structs: parseStruct(`std::queue<uint64_t> r5ret3381(int seed);`),
        classes: parseClass(`std::queue<uint64_t> r5ret3381(int seed);`),
        funcs: parseFunction(`std::queue<uint64_t> r5ret3381(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3381 生成结果为空');
      const expectSnippet0 = 'export function r5ret3381(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3381 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3381 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3381 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3382
  * @tc.name : h2dts_gen_3382
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3382', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int8_t> r5ret3382(int seed);`),
        unions: parseUnion(`std::queue<int8_t> r5ret3382(int seed);`),
        structs: parseStruct(`std::queue<int8_t> r5ret3382(int seed);`),
        classes: parseClass(`std::queue<int8_t> r5ret3382(int seed);`),
        funcs: parseFunction(`std::queue<int8_t> r5ret3382(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3382 生成结果为空');
      const expectSnippet0 = 'export function r5ret3382(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3382 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3382 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3382 执行异常: ${String(err)}`);
    }
  });
});
