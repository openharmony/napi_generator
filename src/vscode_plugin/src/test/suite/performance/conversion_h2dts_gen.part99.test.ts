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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part99.');

  /**
  * @tc.number : h2dts_gen_3313
  * @tc.name : h2dts_gen_3313
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3313', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<long>::iterator r5ret3313(int seed);`),
        unions: parseUnion(`std::forward_list<long>::iterator r5ret3313(int seed);`),
        structs: parseStruct(`std::forward_list<long>::iterator r5ret3313(int seed);`),
        classes: parseClass(`std::forward_list<long>::iterator r5ret3313(int seed);`),
        funcs: parseFunction(`std::forward_list<long>::iterator r5ret3313(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3313 生成结果为空');
      const expectSnippet0 = 'export function r5ret3313(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3313 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3313 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3313 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3314
  * @tc.name : h2dts_gen_3314
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3314', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<short>::iterator r5ret3314(int seed);`),
        unions: parseUnion(`std::forward_list<short>::iterator r5ret3314(int seed);`),
        structs: parseStruct(`std::forward_list<short>::iterator r5ret3314(int seed);`),
        classes: parseClass(`std::forward_list<short>::iterator r5ret3314(int seed);`),
        funcs: parseFunction(`std::forward_list<short>::iterator r5ret3314(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3314 生成结果为空');
      const expectSnippet0 = 'export function r5ret3314(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3314 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3314 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3314 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3315
  * @tc.name : h2dts_gen_3315
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3315', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint8_t>::iterator r5ret3315(int seed);`),
        unions: parseUnion(`std::forward_list<uint8_t>::iterator r5ret3315(int seed);`),
        structs: parseStruct(`std::forward_list<uint8_t>::iterator r5ret3315(int seed);`),
        classes: parseClass(`std::forward_list<uint8_t>::iterator r5ret3315(int seed);`),
        funcs: parseFunction(`std::forward_list<uint8_t>::iterator r5ret3315(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3315 生成结果为空');
      const expectSnippet0 = 'export function r5ret3315(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3315 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3315 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3315 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3316
  * @tc.name : h2dts_gen_3316
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3316', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint16_t>::iterator r5ret3316(int seed);`),
        unions: parseUnion(`std::forward_list<uint16_t>::iterator r5ret3316(int seed);`),
        structs: parseStruct(`std::forward_list<uint16_t>::iterator r5ret3316(int seed);`),
        classes: parseClass(`std::forward_list<uint16_t>::iterator r5ret3316(int seed);`),
        funcs: parseFunction(`std::forward_list<uint16_t>::iterator r5ret3316(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3316 生成结果为空');
      const expectSnippet0 = 'export function r5ret3316(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3316 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3316 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3316 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3317
  * @tc.name : h2dts_gen_3317
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3317', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint32_t>::iterator r5ret3317(int seed);`),
        unions: parseUnion(`std::forward_list<uint32_t>::iterator r5ret3317(int seed);`),
        structs: parseStruct(`std::forward_list<uint32_t>::iterator r5ret3317(int seed);`),
        classes: parseClass(`std::forward_list<uint32_t>::iterator r5ret3317(int seed);`),
        funcs: parseFunction(`std::forward_list<uint32_t>::iterator r5ret3317(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3317 生成结果为空');
      const expectSnippet0 = 'export function r5ret3317(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3317 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3317 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3317 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3318
  * @tc.name : h2dts_gen_3318
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3318', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint64_t>::iterator r5ret3318(int seed);`),
        unions: parseUnion(`std::forward_list<uint64_t>::iterator r5ret3318(int seed);`),
        structs: parseStruct(`std::forward_list<uint64_t>::iterator r5ret3318(int seed);`),
        classes: parseClass(`std::forward_list<uint64_t>::iterator r5ret3318(int seed);`),
        funcs: parseFunction(`std::forward_list<uint64_t>::iterator r5ret3318(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3318 生成结果为空');
      const expectSnippet0 = 'export function r5ret3318(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3318 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3318 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3318 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3319
  * @tc.name : h2dts_gen_3319
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3319', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int8_t>::iterator r5ret3319(int seed);`),
        unions: parseUnion(`std::forward_list<int8_t>::iterator r5ret3319(int seed);`),
        structs: parseStruct(`std::forward_list<int8_t>::iterator r5ret3319(int seed);`),
        classes: parseClass(`std::forward_list<int8_t>::iterator r5ret3319(int seed);`),
        funcs: parseFunction(`std::forward_list<int8_t>::iterator r5ret3319(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3319 生成结果为空');
      const expectSnippet0 = 'export function r5ret3319(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3319 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3319 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3319 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3320
  * @tc.name : h2dts_gen_3320
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3320', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int16_t>::iterator r5ret3320(int seed);`),
        unions: parseUnion(`std::forward_list<int16_t>::iterator r5ret3320(int seed);`),
        structs: parseStruct(`std::forward_list<int16_t>::iterator r5ret3320(int seed);`),
        classes: parseClass(`std::forward_list<int16_t>::iterator r5ret3320(int seed);`),
        funcs: parseFunction(`std::forward_list<int16_t>::iterator r5ret3320(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3320 生成结果为空');
      const expectSnippet0 = 'export function r5ret3320(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3320 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3320 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3320 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3321
  * @tc.name : h2dts_gen_3321
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3321', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int32_t>::iterator r5ret3321(int seed);`),
        unions: parseUnion(`std::forward_list<int32_t>::iterator r5ret3321(int seed);`),
        structs: parseStruct(`std::forward_list<int32_t>::iterator r5ret3321(int seed);`),
        classes: parseClass(`std::forward_list<int32_t>::iterator r5ret3321(int seed);`),
        funcs: parseFunction(`std::forward_list<int32_t>::iterator r5ret3321(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3321 生成结果为空');
      const expectSnippet0 = 'export function r5ret3321(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3321 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3321 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3321 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3322
  * @tc.name : h2dts_gen_3322
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3322', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int64_t>::iterator r5ret3322(int seed);`),
        unions: parseUnion(`std::forward_list<int64_t>::iterator r5ret3322(int seed);`),
        structs: parseStruct(`std::forward_list<int64_t>::iterator r5ret3322(int seed);`),
        classes: parseClass(`std::forward_list<int64_t>::iterator r5ret3322(int seed);`),
        funcs: parseFunction(`std::forward_list<int64_t>::iterator r5ret3322(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3322 生成结果为空');
      const expectSnippet0 = 'export function r5ret3322(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3322 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3322 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3323
  * @tc.name : h2dts_gen_3323
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3323', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<unsigned>::iterator r5ret3323(int seed);`),
        unions: parseUnion(`std::forward_list<unsigned>::iterator r5ret3323(int seed);`),
        structs: parseStruct(`std::forward_list<unsigned>::iterator r5ret3323(int seed);`),
        classes: parseClass(`std::forward_list<unsigned>::iterator r5ret3323(int seed);`),
        funcs: parseFunction(`std::forward_list<unsigned>::iterator r5ret3323(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3323 生成结果为空');
      const expectSnippet0 = 'export function r5ret3323(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3323 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3323 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3323 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3324
  * @tc.name : h2dts_gen_3324
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3324', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<bool>::iterator r5ret3324(int seed);`),
        unions: parseUnion(`std::forward_list<bool>::iterator r5ret3324(int seed);`),
        structs: parseStruct(`std::forward_list<bool>::iterator r5ret3324(int seed);`),
        classes: parseClass(`std::forward_list<bool>::iterator r5ret3324(int seed);`),
        funcs: parseFunction(`std::forward_list<bool>::iterator r5ret3324(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3324 生成结果为空');
      const expectSnippet0 = 'export function r5ret3324(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3324 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3324 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3325
  * @tc.name : h2dts_gen_3325
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3325', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char>::iterator r5ret3325(int seed);`),
        unions: parseUnion(`std::forward_list<char>::iterator r5ret3325(int seed);`),
        structs: parseStruct(`std::forward_list<char>::iterator r5ret3325(int seed);`),
        classes: parseClass(`std::forward_list<char>::iterator r5ret3325(int seed);`),
        funcs: parseFunction(`std::forward_list<char>::iterator r5ret3325(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3325 生成结果为空');
      const expectSnippet0 = 'export function r5ret3325(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3325 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3325 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3325 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3326
  * @tc.name : h2dts_gen_3326
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3326', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<wchar_t>::iterator r5ret3326(int seed);`),
        unions: parseUnion(`std::forward_list<wchar_t>::iterator r5ret3326(int seed);`),
        structs: parseStruct(`std::forward_list<wchar_t>::iterator r5ret3326(int seed);`),
        classes: parseClass(`std::forward_list<wchar_t>::iterator r5ret3326(int seed);`),
        funcs: parseFunction(`std::forward_list<wchar_t>::iterator r5ret3326(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3326 生成结果为空');
      const expectSnippet0 = 'export function r5ret3326(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3326 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3326 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3327
  * @tc.name : h2dts_gen_3327
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3327', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char8_t>::iterator r5ret3327(int seed);`),
        unions: parseUnion(`std::forward_list<char8_t>::iterator r5ret3327(int seed);`),
        structs: parseStruct(`std::forward_list<char8_t>::iterator r5ret3327(int seed);`),
        classes: parseClass(`std::forward_list<char8_t>::iterator r5ret3327(int seed);`),
        funcs: parseFunction(`std::forward_list<char8_t>::iterator r5ret3327(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3327 生成结果为空');
      const expectSnippet0 = 'export function r5ret3327(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3327 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3327 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3328
  * @tc.name : h2dts_gen_3328
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3328', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char16_t>::iterator r5ret3328(int seed);`),
        unions: parseUnion(`std::forward_list<char16_t>::iterator r5ret3328(int seed);`),
        structs: parseStruct(`std::forward_list<char16_t>::iterator r5ret3328(int seed);`),
        classes: parseClass(`std::forward_list<char16_t>::iterator r5ret3328(int seed);`),
        funcs: parseFunction(`std::forward_list<char16_t>::iterator r5ret3328(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3328 生成结果为空');
      const expectSnippet0 = 'export function r5ret3328(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3328 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3328 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3329
  * @tc.name : h2dts_gen_3329
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3329', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char32_t>::iterator r5ret3329(int seed);`),
        unions: parseUnion(`std::forward_list<char32_t>::iterator r5ret3329(int seed);`),
        structs: parseStruct(`std::forward_list<char32_t>::iterator r5ret3329(int seed);`),
        classes: parseClass(`std::forward_list<char32_t>::iterator r5ret3329(int seed);`),
        funcs: parseFunction(`std::forward_list<char32_t>::iterator r5ret3329(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3329 生成结果为空');
      const expectSnippet0 = 'export function r5ret3329(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3329 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3329 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3329 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3330
  * @tc.name : h2dts_gen_3330
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3330', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int> r5ret3330(int seed);`),
        unions: parseUnion(`std::stack<int> r5ret3330(int seed);`),
        structs: parseStruct(`std::stack<int> r5ret3330(int seed);`),
        classes: parseClass(`std::stack<int> r5ret3330(int seed);`),
        funcs: parseFunction(`std::stack<int> r5ret3330(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3330 生成结果为空');
      const expectSnippet0 = 'export function r5ret3330(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3330 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3330 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3330 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3331
  * @tc.name : h2dts_gen_3331
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3331', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<size_t> r5ret3331(int seed);`),
        unions: parseUnion(`std::stack<size_t> r5ret3331(int seed);`),
        structs: parseStruct(`std::stack<size_t> r5ret3331(int seed);`),
        classes: parseClass(`std::stack<size_t> r5ret3331(int seed);`),
        funcs: parseFunction(`std::stack<size_t> r5ret3331(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3331 生成结果为空');
      const expectSnippet0 = 'export function r5ret3331(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3331 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3331 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3331 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3332
  * @tc.name : h2dts_gen_3332
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3332', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<double> r5ret3332(int seed);`),
        unions: parseUnion(`std::stack<double> r5ret3332(int seed);`),
        structs: parseStruct(`std::stack<double> r5ret3332(int seed);`),
        classes: parseClass(`std::stack<double> r5ret3332(int seed);`),
        funcs: parseFunction(`std::stack<double> r5ret3332(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3332 生成结果为空');
      const expectSnippet0 = 'export function r5ret3332(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3332 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3332 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3332 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3333
  * @tc.name : h2dts_gen_3333
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3333', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<float> r5ret3333(int seed);`),
        unions: parseUnion(`std::stack<float> r5ret3333(int seed);`),
        structs: parseStruct(`std::stack<float> r5ret3333(int seed);`),
        classes: parseClass(`std::stack<float> r5ret3333(int seed);`),
        funcs: parseFunction(`std::stack<float> r5ret3333(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3333 生成结果为空');
      const expectSnippet0 = 'export function r5ret3333(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3333 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3333 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3333 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3334
  * @tc.name : h2dts_gen_3334
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3334', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<long> r5ret3334(int seed);`),
        unions: parseUnion(`std::stack<long> r5ret3334(int seed);`),
        structs: parseStruct(`std::stack<long> r5ret3334(int seed);`),
        classes: parseClass(`std::stack<long> r5ret3334(int seed);`),
        funcs: parseFunction(`std::stack<long> r5ret3334(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3334 生成结果为空');
      const expectSnippet0 = 'export function r5ret3334(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3334 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3334 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3334 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3335
  * @tc.name : h2dts_gen_3335
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3335', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<short> r5ret3335(int seed);`),
        unions: parseUnion(`std::stack<short> r5ret3335(int seed);`),
        structs: parseStruct(`std::stack<short> r5ret3335(int seed);`),
        classes: parseClass(`std::stack<short> r5ret3335(int seed);`),
        funcs: parseFunction(`std::stack<short> r5ret3335(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3335 生成结果为空');
      const expectSnippet0 = 'export function r5ret3335(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3335 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3335 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3335 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3336
  * @tc.name : h2dts_gen_3336
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3336', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint8_t> r5ret3336(int seed);`),
        unions: parseUnion(`std::stack<uint8_t> r5ret3336(int seed);`),
        structs: parseStruct(`std::stack<uint8_t> r5ret3336(int seed);`),
        classes: parseClass(`std::stack<uint8_t> r5ret3336(int seed);`),
        funcs: parseFunction(`std::stack<uint8_t> r5ret3336(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3336 生成结果为空');
      const expectSnippet0 = 'export function r5ret3336(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3336 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3336 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3336 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3337
  * @tc.name : h2dts_gen_3337
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3337', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint16_t> r5ret3337(int seed);`),
        unions: parseUnion(`std::stack<uint16_t> r5ret3337(int seed);`),
        structs: parseStruct(`std::stack<uint16_t> r5ret3337(int seed);`),
        classes: parseClass(`std::stack<uint16_t> r5ret3337(int seed);`),
        funcs: parseFunction(`std::stack<uint16_t> r5ret3337(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3337 生成结果为空');
      const expectSnippet0 = 'export function r5ret3337(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3337 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3337 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3337 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3338
  * @tc.name : h2dts_gen_3338
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3338', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint32_t> r5ret3338(int seed);`),
        unions: parseUnion(`std::stack<uint32_t> r5ret3338(int seed);`),
        structs: parseStruct(`std::stack<uint32_t> r5ret3338(int seed);`),
        classes: parseClass(`std::stack<uint32_t> r5ret3338(int seed);`),
        funcs: parseFunction(`std::stack<uint32_t> r5ret3338(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3338 生成结果为空');
      const expectSnippet0 = 'export function r5ret3338(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3338 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3338 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3338 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3339
  * @tc.name : h2dts_gen_3339
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3339', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint64_t> r5ret3339(int seed);`),
        unions: parseUnion(`std::stack<uint64_t> r5ret3339(int seed);`),
        structs: parseStruct(`std::stack<uint64_t> r5ret3339(int seed);`),
        classes: parseClass(`std::stack<uint64_t> r5ret3339(int seed);`),
        funcs: parseFunction(`std::stack<uint64_t> r5ret3339(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3339 生成结果为空');
      const expectSnippet0 = 'export function r5ret3339(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3339 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3339 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3339 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3340
  * @tc.name : h2dts_gen_3340
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3340', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int8_t> r5ret3340(int seed);`),
        unions: parseUnion(`std::stack<int8_t> r5ret3340(int seed);`),
        structs: parseStruct(`std::stack<int8_t> r5ret3340(int seed);`),
        classes: parseClass(`std::stack<int8_t> r5ret3340(int seed);`),
        funcs: parseFunction(`std::stack<int8_t> r5ret3340(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3340 生成结果为空');
      const expectSnippet0 = 'export function r5ret3340(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3340 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3340 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3340 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3341
  * @tc.name : h2dts_gen_3341
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3341', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int16_t> r5ret3341(int seed);`),
        unions: parseUnion(`std::stack<int16_t> r5ret3341(int seed);`),
        structs: parseStruct(`std::stack<int16_t> r5ret3341(int seed);`),
        classes: parseClass(`std::stack<int16_t> r5ret3341(int seed);`),
        funcs: parseFunction(`std::stack<int16_t> r5ret3341(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3341 生成结果为空');
      const expectSnippet0 = 'export function r5ret3341(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3341 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3341 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3341 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3342
  * @tc.name : h2dts_gen_3342
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3342', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int32_t> r5ret3342(int seed);`),
        unions: parseUnion(`std::stack<int32_t> r5ret3342(int seed);`),
        structs: parseStruct(`std::stack<int32_t> r5ret3342(int seed);`),
        classes: parseClass(`std::stack<int32_t> r5ret3342(int seed);`),
        funcs: parseFunction(`std::stack<int32_t> r5ret3342(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3342 生成结果为空');
      const expectSnippet0 = 'export function r5ret3342(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3342 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3342 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3342 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3343
  * @tc.name : h2dts_gen_3343
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3343', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int64_t> r5ret3343(int seed);`),
        unions: parseUnion(`std::stack<int64_t> r5ret3343(int seed);`),
        structs: parseStruct(`std::stack<int64_t> r5ret3343(int seed);`),
        classes: parseClass(`std::stack<int64_t> r5ret3343(int seed);`),
        funcs: parseFunction(`std::stack<int64_t> r5ret3343(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3343 生成结果为空');
      const expectSnippet0 = 'export function r5ret3343(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3343 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3343 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3343 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3344
  * @tc.name : h2dts_gen_3344
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3344', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<unsigned> r5ret3344(int seed);`),
        unions: parseUnion(`std::stack<unsigned> r5ret3344(int seed);`),
        structs: parseStruct(`std::stack<unsigned> r5ret3344(int seed);`),
        classes: parseClass(`std::stack<unsigned> r5ret3344(int seed);`),
        funcs: parseFunction(`std::stack<unsigned> r5ret3344(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3344 生成结果为空');
      const expectSnippet0 = 'export function r5ret3344(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3344 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3344 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3344 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3345
  * @tc.name : h2dts_gen_3345
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3345', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<bool> r5ret3345(int seed);`),
        unions: parseUnion(`std::stack<bool> r5ret3345(int seed);`),
        structs: parseStruct(`std::stack<bool> r5ret3345(int seed);`),
        classes: parseClass(`std::stack<bool> r5ret3345(int seed);`),
        funcs: parseFunction(`std::stack<bool> r5ret3345(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3345 生成结果为空');
      const expectSnippet0 = 'export function r5ret3345(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3345 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3345 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3345 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3346
  * @tc.name : h2dts_gen_3346
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3346', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char> r5ret3346(int seed);`),
        unions: parseUnion(`std::stack<char> r5ret3346(int seed);`),
        structs: parseStruct(`std::stack<char> r5ret3346(int seed);`),
        classes: parseClass(`std::stack<char> r5ret3346(int seed);`),
        funcs: parseFunction(`std::stack<char> r5ret3346(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3346 生成结果为空');
      const expectSnippet0 = 'export function r5ret3346(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3346 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3346 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3346 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3347
  * @tc.name : h2dts_gen_3347
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3347', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<wchar_t> r5ret3347(int seed);`),
        unions: parseUnion(`std::stack<wchar_t> r5ret3347(int seed);`),
        structs: parseStruct(`std::stack<wchar_t> r5ret3347(int seed);`),
        classes: parseClass(`std::stack<wchar_t> r5ret3347(int seed);`),
        funcs: parseFunction(`std::stack<wchar_t> r5ret3347(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3347 生成结果为空');
      const expectSnippet0 = 'export function r5ret3347(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3347 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3347 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3347 执行异常: ${String(err)}`);
    }
  });
});
