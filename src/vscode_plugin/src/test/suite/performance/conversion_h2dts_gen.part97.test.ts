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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part97.');

  /**
  * @tc.number : h2dts_gen_3243
  * @tc.name : h2dts_gen_3243
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3243', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char8_t>::iterator r5ret3243(int seed);`),
        unions: parseUnion(`std::deque<char8_t>::iterator r5ret3243(int seed);`),
        structs: parseStruct(`std::deque<char8_t>::iterator r5ret3243(int seed);`),
        classes: parseClass(`std::deque<char8_t>::iterator r5ret3243(int seed);`),
        funcs: parseFunction(`std::deque<char8_t>::iterator r5ret3243(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3243 生成结果为空');
      const expectSnippet0 = 'export function r5ret3243(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3243 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3244
  * @tc.name : h2dts_gen_3244
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3244', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char16_t>::iterator r5ret3244(int seed);`),
        unions: parseUnion(`std::deque<char16_t>::iterator r5ret3244(int seed);`),
        structs: parseStruct(`std::deque<char16_t>::iterator r5ret3244(int seed);`),
        classes: parseClass(`std::deque<char16_t>::iterator r5ret3244(int seed);`),
        funcs: parseFunction(`std::deque<char16_t>::iterator r5ret3244(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3244 生成结果为空');
      const expectSnippet0 = 'export function r5ret3244(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3244 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3245
  * @tc.name : h2dts_gen_3245
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3245', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char32_t>::iterator r5ret3245(int seed);`),
        unions: parseUnion(`std::deque<char32_t>::iterator r5ret3245(int seed);`),
        structs: parseStruct(`std::deque<char32_t>::iterator r5ret3245(int seed);`),
        classes: parseClass(`std::deque<char32_t>::iterator r5ret3245(int seed);`),
        funcs: parseFunction(`std::deque<char32_t>::iterator r5ret3245(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3245 生成结果为空');
      const expectSnippet0 = 'export function r5ret3245(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3245 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3246
  * @tc.name : h2dts_gen_3246
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3246', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int> r5ret3246(int seed);`),
        unions: parseUnion(`std::list<int> r5ret3246(int seed);`),
        structs: parseStruct(`std::list<int> r5ret3246(int seed);`),
        classes: parseClass(`std::list<int> r5ret3246(int seed);`),
        funcs: parseFunction(`std::list<int> r5ret3246(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3246 生成结果为空');
      const expectSnippet0 = 'export function r5ret3246(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3246 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3247
  * @tc.name : h2dts_gen_3247
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3247', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<size_t> r5ret3247(int seed);`),
        unions: parseUnion(`std::list<size_t> r5ret3247(int seed);`),
        structs: parseStruct(`std::list<size_t> r5ret3247(int seed);`),
        classes: parseClass(`std::list<size_t> r5ret3247(int seed);`),
        funcs: parseFunction(`std::list<size_t> r5ret3247(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3247 生成结果为空');
      const expectSnippet0 = 'export function r5ret3247(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3247 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3248
  * @tc.name : h2dts_gen_3248
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3248', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<double> r5ret3248(int seed);`),
        unions: parseUnion(`std::list<double> r5ret3248(int seed);`),
        structs: parseStruct(`std::list<double> r5ret3248(int seed);`),
        classes: parseClass(`std::list<double> r5ret3248(int seed);`),
        funcs: parseFunction(`std::list<double> r5ret3248(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3248 生成结果为空');
      const expectSnippet0 = 'export function r5ret3248(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3248 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3249
  * @tc.name : h2dts_gen_3249
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3249', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<float> r5ret3249(int seed);`),
        unions: parseUnion(`std::list<float> r5ret3249(int seed);`),
        structs: parseStruct(`std::list<float> r5ret3249(int seed);`),
        classes: parseClass(`std::list<float> r5ret3249(int seed);`),
        funcs: parseFunction(`std::list<float> r5ret3249(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3249 生成结果为空');
      const expectSnippet0 = 'export function r5ret3249(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3249 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3250
  * @tc.name : h2dts_gen_3250
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3250', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<long> r5ret3250(int seed);`),
        unions: parseUnion(`std::list<long> r5ret3250(int seed);`),
        structs: parseStruct(`std::list<long> r5ret3250(int seed);`),
        classes: parseClass(`std::list<long> r5ret3250(int seed);`),
        funcs: parseFunction(`std::list<long> r5ret3250(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3250 生成结果为空');
      const expectSnippet0 = 'export function r5ret3250(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3250 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3251
  * @tc.name : h2dts_gen_3251
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3251', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<short> r5ret3251(int seed);`),
        unions: parseUnion(`std::list<short> r5ret3251(int seed);`),
        structs: parseStruct(`std::list<short> r5ret3251(int seed);`),
        classes: parseClass(`std::list<short> r5ret3251(int seed);`),
        funcs: parseFunction(`std::list<short> r5ret3251(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3251 生成结果为空');
      const expectSnippet0 = 'export function r5ret3251(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3251 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3252
  * @tc.name : h2dts_gen_3252
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3252', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint8_t> r5ret3252(int seed);`),
        unions: parseUnion(`std::list<uint8_t> r5ret3252(int seed);`),
        structs: parseStruct(`std::list<uint8_t> r5ret3252(int seed);`),
        classes: parseClass(`std::list<uint8_t> r5ret3252(int seed);`),
        funcs: parseFunction(`std::list<uint8_t> r5ret3252(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3252 生成结果为空');
      const expectSnippet0 = 'export function r5ret3252(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3252 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3253
  * @tc.name : h2dts_gen_3253
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3253', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint16_t> r5ret3253(int seed);`),
        unions: parseUnion(`std::list<uint16_t> r5ret3253(int seed);`),
        structs: parseStruct(`std::list<uint16_t> r5ret3253(int seed);`),
        classes: parseClass(`std::list<uint16_t> r5ret3253(int seed);`),
        funcs: parseFunction(`std::list<uint16_t> r5ret3253(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3253 生成结果为空');
      const expectSnippet0 = 'export function r5ret3253(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3253 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3254
  * @tc.name : h2dts_gen_3254
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3254', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint32_t> r5ret3254(int seed);`),
        unions: parseUnion(`std::list<uint32_t> r5ret3254(int seed);`),
        structs: parseStruct(`std::list<uint32_t> r5ret3254(int seed);`),
        classes: parseClass(`std::list<uint32_t> r5ret3254(int seed);`),
        funcs: parseFunction(`std::list<uint32_t> r5ret3254(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3254 生成结果为空');
      const expectSnippet0 = 'export function r5ret3254(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3254 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3255
  * @tc.name : h2dts_gen_3255
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3255', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint64_t> r5ret3255(int seed);`),
        unions: parseUnion(`std::list<uint64_t> r5ret3255(int seed);`),
        structs: parseStruct(`std::list<uint64_t> r5ret3255(int seed);`),
        classes: parseClass(`std::list<uint64_t> r5ret3255(int seed);`),
        funcs: parseFunction(`std::list<uint64_t> r5ret3255(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3255 生成结果为空');
      const expectSnippet0 = 'export function r5ret3255(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3255 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3256
  * @tc.name : h2dts_gen_3256
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3256', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int8_t> r5ret3256(int seed);`),
        unions: parseUnion(`std::list<int8_t> r5ret3256(int seed);`),
        structs: parseStruct(`std::list<int8_t> r5ret3256(int seed);`),
        classes: parseClass(`std::list<int8_t> r5ret3256(int seed);`),
        funcs: parseFunction(`std::list<int8_t> r5ret3256(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3256 生成结果为空');
      const expectSnippet0 = 'export function r5ret3256(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3256 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3257
  * @tc.name : h2dts_gen_3257
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3257', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int16_t> r5ret3257(int seed);`),
        unions: parseUnion(`std::list<int16_t> r5ret3257(int seed);`),
        structs: parseStruct(`std::list<int16_t> r5ret3257(int seed);`),
        classes: parseClass(`std::list<int16_t> r5ret3257(int seed);`),
        funcs: parseFunction(`std::list<int16_t> r5ret3257(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3257 生成结果为空');
      const expectSnippet0 = 'export function r5ret3257(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3257 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3258
  * @tc.name : h2dts_gen_3258
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3258', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int32_t> r5ret3258(int seed);`),
        unions: parseUnion(`std::list<int32_t> r5ret3258(int seed);`),
        structs: parseStruct(`std::list<int32_t> r5ret3258(int seed);`),
        classes: parseClass(`std::list<int32_t> r5ret3258(int seed);`),
        funcs: parseFunction(`std::list<int32_t> r5ret3258(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3258 生成结果为空');
      const expectSnippet0 = 'export function r5ret3258(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3258 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3259
  * @tc.name : h2dts_gen_3259
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3259', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int64_t> r5ret3259(int seed);`),
        unions: parseUnion(`std::list<int64_t> r5ret3259(int seed);`),
        structs: parseStruct(`std::list<int64_t> r5ret3259(int seed);`),
        classes: parseClass(`std::list<int64_t> r5ret3259(int seed);`),
        funcs: parseFunction(`std::list<int64_t> r5ret3259(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3259 生成结果为空');
      const expectSnippet0 = 'export function r5ret3259(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3259 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3260
  * @tc.name : h2dts_gen_3260
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3260', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<unsigned> r5ret3260(int seed);`),
        unions: parseUnion(`std::list<unsigned> r5ret3260(int seed);`),
        structs: parseStruct(`std::list<unsigned> r5ret3260(int seed);`),
        classes: parseClass(`std::list<unsigned> r5ret3260(int seed);`),
        funcs: parseFunction(`std::list<unsigned> r5ret3260(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3260 生成结果为空');
      const expectSnippet0 = 'export function r5ret3260(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3260 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3261
  * @tc.name : h2dts_gen_3261
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3261', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<bool> r5ret3261(int seed);`),
        unions: parseUnion(`std::list<bool> r5ret3261(int seed);`),
        structs: parseStruct(`std::list<bool> r5ret3261(int seed);`),
        classes: parseClass(`std::list<bool> r5ret3261(int seed);`),
        funcs: parseFunction(`std::list<bool> r5ret3261(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3261 生成结果为空');
      const expectSnippet0 = 'export function r5ret3261(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3261 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3262
  * @tc.name : h2dts_gen_3262
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3262', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char> r5ret3262(int seed);`),
        unions: parseUnion(`std::list<char> r5ret3262(int seed);`),
        structs: parseStruct(`std::list<char> r5ret3262(int seed);`),
        classes: parseClass(`std::list<char> r5ret3262(int seed);`),
        funcs: parseFunction(`std::list<char> r5ret3262(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3262 生成结果为空');
      const expectSnippet0 = 'export function r5ret3262(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3262 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3263
  * @tc.name : h2dts_gen_3263
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3263', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<wchar_t> r5ret3263(int seed);`),
        unions: parseUnion(`std::list<wchar_t> r5ret3263(int seed);`),
        structs: parseStruct(`std::list<wchar_t> r5ret3263(int seed);`),
        classes: parseClass(`std::list<wchar_t> r5ret3263(int seed);`),
        funcs: parseFunction(`std::list<wchar_t> r5ret3263(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3263 生成结果为空');
      const expectSnippet0 = 'export function r5ret3263(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3263 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3264
  * @tc.name : h2dts_gen_3264
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3264', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char8_t> r5ret3264(int seed);`),
        unions: parseUnion(`std::list<char8_t> r5ret3264(int seed);`),
        structs: parseStruct(`std::list<char8_t> r5ret3264(int seed);`),
        classes: parseClass(`std::list<char8_t> r5ret3264(int seed);`),
        funcs: parseFunction(`std::list<char8_t> r5ret3264(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3264 生成结果为空');
      const expectSnippet0 = 'export function r5ret3264(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3264 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3265
  * @tc.name : h2dts_gen_3265
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3265', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char16_t> r5ret3265(int seed);`),
        unions: parseUnion(`std::list<char16_t> r5ret3265(int seed);`),
        structs: parseStruct(`std::list<char16_t> r5ret3265(int seed);`),
        classes: parseClass(`std::list<char16_t> r5ret3265(int seed);`),
        funcs: parseFunction(`std::list<char16_t> r5ret3265(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3265 生成结果为空');
      const expectSnippet0 = 'export function r5ret3265(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3265 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3266
  * @tc.name : h2dts_gen_3266
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3266', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char32_t> r5ret3266(int seed);`),
        unions: parseUnion(`std::list<char32_t> r5ret3266(int seed);`),
        structs: parseStruct(`std::list<char32_t> r5ret3266(int seed);`),
        classes: parseClass(`std::list<char32_t> r5ret3266(int seed);`),
        funcs: parseFunction(`std::list<char32_t> r5ret3266(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3266 生成结果为空');
      const expectSnippet0 = 'export function r5ret3266(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3266 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3267
  * @tc.name : h2dts_gen_3267
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3267', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int>::iterator r5ret3267(int seed);`),
        unions: parseUnion(`std::list<int>::iterator r5ret3267(int seed);`),
        structs: parseStruct(`std::list<int>::iterator r5ret3267(int seed);`),
        classes: parseClass(`std::list<int>::iterator r5ret3267(int seed);`),
        funcs: parseFunction(`std::list<int>::iterator r5ret3267(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3267 生成结果为空');
      const expectSnippet0 = 'export function r5ret3267(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3267 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3268
  * @tc.name : h2dts_gen_3268
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3268', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<size_t>::iterator r5ret3268(int seed);`),
        unions: parseUnion(`std::list<size_t>::iterator r5ret3268(int seed);`),
        structs: parseStruct(`std::list<size_t>::iterator r5ret3268(int seed);`),
        classes: parseClass(`std::list<size_t>::iterator r5ret3268(int seed);`),
        funcs: parseFunction(`std::list<size_t>::iterator r5ret3268(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3268 生成结果为空');
      const expectSnippet0 = 'export function r5ret3268(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3268 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3269
  * @tc.name : h2dts_gen_3269
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3269', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<double>::iterator r5ret3269(int seed);`),
        unions: parseUnion(`std::list<double>::iterator r5ret3269(int seed);`),
        structs: parseStruct(`std::list<double>::iterator r5ret3269(int seed);`),
        classes: parseClass(`std::list<double>::iterator r5ret3269(int seed);`),
        funcs: parseFunction(`std::list<double>::iterator r5ret3269(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3269 生成结果为空');
      const expectSnippet0 = 'export function r5ret3269(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3269 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3270
  * @tc.name : h2dts_gen_3270
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3270', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<float>::iterator r5ret3270(int seed);`),
        unions: parseUnion(`std::list<float>::iterator r5ret3270(int seed);`),
        structs: parseStruct(`std::list<float>::iterator r5ret3270(int seed);`),
        classes: parseClass(`std::list<float>::iterator r5ret3270(int seed);`),
        funcs: parseFunction(`std::list<float>::iterator r5ret3270(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3270 生成结果为空');
      const expectSnippet0 = 'export function r5ret3270(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3270 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3271
  * @tc.name : h2dts_gen_3271
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3271', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<long>::iterator r5ret3271(int seed);`),
        unions: parseUnion(`std::list<long>::iterator r5ret3271(int seed);`),
        structs: parseStruct(`std::list<long>::iterator r5ret3271(int seed);`),
        classes: parseClass(`std::list<long>::iterator r5ret3271(int seed);`),
        funcs: parseFunction(`std::list<long>::iterator r5ret3271(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3271 生成结果为空');
      const expectSnippet0 = 'export function r5ret3271(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3271 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3272
  * @tc.name : h2dts_gen_3272
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3272', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<short>::iterator r5ret3272(int seed);`),
        unions: parseUnion(`std::list<short>::iterator r5ret3272(int seed);`),
        structs: parseStruct(`std::list<short>::iterator r5ret3272(int seed);`),
        classes: parseClass(`std::list<short>::iterator r5ret3272(int seed);`),
        funcs: parseFunction(`std::list<short>::iterator r5ret3272(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3272 生成结果为空');
      const expectSnippet0 = 'export function r5ret3272(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3272 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3272 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3273
  * @tc.name : h2dts_gen_3273
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3273', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint8_t>::iterator r5ret3273(int seed);`),
        unions: parseUnion(`std::list<uint8_t>::iterator r5ret3273(int seed);`),
        structs: parseStruct(`std::list<uint8_t>::iterator r5ret3273(int seed);`),
        classes: parseClass(`std::list<uint8_t>::iterator r5ret3273(int seed);`),
        funcs: parseFunction(`std::list<uint8_t>::iterator r5ret3273(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3273 生成结果为空');
      const expectSnippet0 = 'export function r5ret3273(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3273 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3274
  * @tc.name : h2dts_gen_3274
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3274', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint16_t>::iterator r5ret3274(int seed);`),
        unions: parseUnion(`std::list<uint16_t>::iterator r5ret3274(int seed);`),
        structs: parseStruct(`std::list<uint16_t>::iterator r5ret3274(int seed);`),
        classes: parseClass(`std::list<uint16_t>::iterator r5ret3274(int seed);`),
        funcs: parseFunction(`std::list<uint16_t>::iterator r5ret3274(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3274 生成结果为空');
      const expectSnippet0 = 'export function r5ret3274(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3274 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3275
  * @tc.name : h2dts_gen_3275
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3275', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint32_t>::iterator r5ret3275(int seed);`),
        unions: parseUnion(`std::list<uint32_t>::iterator r5ret3275(int seed);`),
        structs: parseStruct(`std::list<uint32_t>::iterator r5ret3275(int seed);`),
        classes: parseClass(`std::list<uint32_t>::iterator r5ret3275(int seed);`),
        funcs: parseFunction(`std::list<uint32_t>::iterator r5ret3275(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3275 生成结果为空');
      const expectSnippet0 = 'export function r5ret3275(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3275 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3276
  * @tc.name : h2dts_gen_3276
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3276', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint64_t>::iterator r5ret3276(int seed);`),
        unions: parseUnion(`std::list<uint64_t>::iterator r5ret3276(int seed);`),
        structs: parseStruct(`std::list<uint64_t>::iterator r5ret3276(int seed);`),
        classes: parseClass(`std::list<uint64_t>::iterator r5ret3276(int seed);`),
        funcs: parseFunction(`std::list<uint64_t>::iterator r5ret3276(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3276 生成结果为空');
      const expectSnippet0 = 'export function r5ret3276(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3276 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3276 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3276 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3277
  * @tc.name : h2dts_gen_3277
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3277', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int8_t>::iterator r5ret3277(int seed);`),
        unions: parseUnion(`std::list<int8_t>::iterator r5ret3277(int seed);`),
        structs: parseStruct(`std::list<int8_t>::iterator r5ret3277(int seed);`),
        classes: parseClass(`std::list<int8_t>::iterator r5ret3277(int seed);`),
        funcs: parseFunction(`std::list<int8_t>::iterator r5ret3277(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3277 生成结果为空');
      const expectSnippet0 = 'export function r5ret3277(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3277 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3277 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3277 执行异常: ${String(err)}`);
    }
  });
});
