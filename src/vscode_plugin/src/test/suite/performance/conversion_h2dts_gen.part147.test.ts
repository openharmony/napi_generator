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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part147.');

  /**
  * @tc.number : h2dts_gen_4962
  * @tc.name : h2dts_gen_4962
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4962', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char8_t>::iterator r5ret4962(int seed);`),
        unions: parseUnion(`std::deque<char8_t>::iterator r5ret4962(int seed);`),
        structs: parseStruct(`std::deque<char8_t>::iterator r5ret4962(int seed);`),
        classes: parseClass(`std::deque<char8_t>::iterator r5ret4962(int seed);`),
        funcs: parseFunction(`std::deque<char8_t>::iterator r5ret4962(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4962 生成结果为空');
      const expectSnippet0 = 'export function r5ret4962(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4962 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4962 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4962 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4963
  * @tc.name : h2dts_gen_4963
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4963', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char16_t>::iterator r5ret4963(int seed);`),
        unions: parseUnion(`std::deque<char16_t>::iterator r5ret4963(int seed);`),
        structs: parseStruct(`std::deque<char16_t>::iterator r5ret4963(int seed);`),
        classes: parseClass(`std::deque<char16_t>::iterator r5ret4963(int seed);`),
        funcs: parseFunction(`std::deque<char16_t>::iterator r5ret4963(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4963 生成结果为空');
      const expectSnippet0 = 'export function r5ret4963(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4963 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4963 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4963 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4964
  * @tc.name : h2dts_gen_4964
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4964', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char32_t>::iterator r5ret4964(int seed);`),
        unions: parseUnion(`std::deque<char32_t>::iterator r5ret4964(int seed);`),
        structs: parseStruct(`std::deque<char32_t>::iterator r5ret4964(int seed);`),
        classes: parseClass(`std::deque<char32_t>::iterator r5ret4964(int seed);`),
        funcs: parseFunction(`std::deque<char32_t>::iterator r5ret4964(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4964 生成结果为空');
      const expectSnippet0 = 'export function r5ret4964(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4964 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4964 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4964 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4965
  * @tc.name : h2dts_gen_4965
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4965', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int> r5ret4965(int seed);`),
        unions: parseUnion(`std::list<int> r5ret4965(int seed);`),
        structs: parseStruct(`std::list<int> r5ret4965(int seed);`),
        classes: parseClass(`std::list<int> r5ret4965(int seed);`),
        funcs: parseFunction(`std::list<int> r5ret4965(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4965 生成结果为空');
      const expectSnippet0 = 'export function r5ret4965(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4965 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4965 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4965 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4966
  * @tc.name : h2dts_gen_4966
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4966', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<size_t> r5ret4966(int seed);`),
        unions: parseUnion(`std::list<size_t> r5ret4966(int seed);`),
        structs: parseStruct(`std::list<size_t> r5ret4966(int seed);`),
        classes: parseClass(`std::list<size_t> r5ret4966(int seed);`),
        funcs: parseFunction(`std::list<size_t> r5ret4966(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4966 生成结果为空');
      const expectSnippet0 = 'export function r5ret4966(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4966 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4966 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4966 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4967
  * @tc.name : h2dts_gen_4967
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4967', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<double> r5ret4967(int seed);`),
        unions: parseUnion(`std::list<double> r5ret4967(int seed);`),
        structs: parseStruct(`std::list<double> r5ret4967(int seed);`),
        classes: parseClass(`std::list<double> r5ret4967(int seed);`),
        funcs: parseFunction(`std::list<double> r5ret4967(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4967 生成结果为空');
      const expectSnippet0 = 'export function r5ret4967(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4967 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4967 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4967 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4968
  * @tc.name : h2dts_gen_4968
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4968', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<float> r5ret4968(int seed);`),
        unions: parseUnion(`std::list<float> r5ret4968(int seed);`),
        structs: parseStruct(`std::list<float> r5ret4968(int seed);`),
        classes: parseClass(`std::list<float> r5ret4968(int seed);`),
        funcs: parseFunction(`std::list<float> r5ret4968(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4968 生成结果为空');
      const expectSnippet0 = 'export function r5ret4968(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4968 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4968 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4968 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4969
  * @tc.name : h2dts_gen_4969
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4969', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<long> r5ret4969(int seed);`),
        unions: parseUnion(`std::list<long> r5ret4969(int seed);`),
        structs: parseStruct(`std::list<long> r5ret4969(int seed);`),
        classes: parseClass(`std::list<long> r5ret4969(int seed);`),
        funcs: parseFunction(`std::list<long> r5ret4969(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4969 生成结果为空');
      const expectSnippet0 = 'export function r5ret4969(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4969 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4969 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4969 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4970
  * @tc.name : h2dts_gen_4970
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4970', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<short> r5ret4970(int seed);`),
        unions: parseUnion(`std::list<short> r5ret4970(int seed);`),
        structs: parseStruct(`std::list<short> r5ret4970(int seed);`),
        classes: parseClass(`std::list<short> r5ret4970(int seed);`),
        funcs: parseFunction(`std::list<short> r5ret4970(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4970 生成结果为空');
      const expectSnippet0 = 'export function r5ret4970(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4970 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4970 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4970 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4971
  * @tc.name : h2dts_gen_4971
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4971', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint8_t> r5ret4971(int seed);`),
        unions: parseUnion(`std::list<uint8_t> r5ret4971(int seed);`),
        structs: parseStruct(`std::list<uint8_t> r5ret4971(int seed);`),
        classes: parseClass(`std::list<uint8_t> r5ret4971(int seed);`),
        funcs: parseFunction(`std::list<uint8_t> r5ret4971(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4971 生成结果为空');
      const expectSnippet0 = 'export function r5ret4971(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4971 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4971 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4971 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4972
  * @tc.name : h2dts_gen_4972
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4972', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint16_t> r5ret4972(int seed);`),
        unions: parseUnion(`std::list<uint16_t> r5ret4972(int seed);`),
        structs: parseStruct(`std::list<uint16_t> r5ret4972(int seed);`),
        classes: parseClass(`std::list<uint16_t> r5ret4972(int seed);`),
        funcs: parseFunction(`std::list<uint16_t> r5ret4972(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4972 生成结果为空');
      const expectSnippet0 = 'export function r5ret4972(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4972 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4972 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4972 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4973
  * @tc.name : h2dts_gen_4973
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4973', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint32_t> r5ret4973(int seed);`),
        unions: parseUnion(`std::list<uint32_t> r5ret4973(int seed);`),
        structs: parseStruct(`std::list<uint32_t> r5ret4973(int seed);`),
        classes: parseClass(`std::list<uint32_t> r5ret4973(int seed);`),
        funcs: parseFunction(`std::list<uint32_t> r5ret4973(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4973 生成结果为空');
      const expectSnippet0 = 'export function r5ret4973(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4973 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4973 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4973 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4974
  * @tc.name : h2dts_gen_4974
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4974', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint64_t> r5ret4974(int seed);`),
        unions: parseUnion(`std::list<uint64_t> r5ret4974(int seed);`),
        structs: parseStruct(`std::list<uint64_t> r5ret4974(int seed);`),
        classes: parseClass(`std::list<uint64_t> r5ret4974(int seed);`),
        funcs: parseFunction(`std::list<uint64_t> r5ret4974(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4974 生成结果为空');
      const expectSnippet0 = 'export function r5ret4974(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4974 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4974 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4974 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4975
  * @tc.name : h2dts_gen_4975
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4975', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int8_t> r5ret4975(int seed);`),
        unions: parseUnion(`std::list<int8_t> r5ret4975(int seed);`),
        structs: parseStruct(`std::list<int8_t> r5ret4975(int seed);`),
        classes: parseClass(`std::list<int8_t> r5ret4975(int seed);`),
        funcs: parseFunction(`std::list<int8_t> r5ret4975(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4975 生成结果为空');
      const expectSnippet0 = 'export function r5ret4975(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4975 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4975 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4975 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4976
  * @tc.name : h2dts_gen_4976
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4976', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int16_t> r5ret4976(int seed);`),
        unions: parseUnion(`std::list<int16_t> r5ret4976(int seed);`),
        structs: parseStruct(`std::list<int16_t> r5ret4976(int seed);`),
        classes: parseClass(`std::list<int16_t> r5ret4976(int seed);`),
        funcs: parseFunction(`std::list<int16_t> r5ret4976(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4976 生成结果为空');
      const expectSnippet0 = 'export function r5ret4976(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4976 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4976 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4976 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4977
  * @tc.name : h2dts_gen_4977
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4977', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int32_t> r5ret4977(int seed);`),
        unions: parseUnion(`std::list<int32_t> r5ret4977(int seed);`),
        structs: parseStruct(`std::list<int32_t> r5ret4977(int seed);`),
        classes: parseClass(`std::list<int32_t> r5ret4977(int seed);`),
        funcs: parseFunction(`std::list<int32_t> r5ret4977(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4977 生成结果为空');
      const expectSnippet0 = 'export function r5ret4977(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4977 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4977 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4977 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4978
  * @tc.name : h2dts_gen_4978
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4978', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int64_t> r5ret4978(int seed);`),
        unions: parseUnion(`std::list<int64_t> r5ret4978(int seed);`),
        structs: parseStruct(`std::list<int64_t> r5ret4978(int seed);`),
        classes: parseClass(`std::list<int64_t> r5ret4978(int seed);`),
        funcs: parseFunction(`std::list<int64_t> r5ret4978(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4978 生成结果为空');
      const expectSnippet0 = 'export function r5ret4978(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4978 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4978 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4978 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4979
  * @tc.name : h2dts_gen_4979
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4979', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<unsigned> r5ret4979(int seed);`),
        unions: parseUnion(`std::list<unsigned> r5ret4979(int seed);`),
        structs: parseStruct(`std::list<unsigned> r5ret4979(int seed);`),
        classes: parseClass(`std::list<unsigned> r5ret4979(int seed);`),
        funcs: parseFunction(`std::list<unsigned> r5ret4979(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4979 生成结果为空');
      const expectSnippet0 = 'export function r5ret4979(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4979 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4979 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4979 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4980
  * @tc.name : h2dts_gen_4980
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4980', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<bool> r5ret4980(int seed);`),
        unions: parseUnion(`std::list<bool> r5ret4980(int seed);`),
        structs: parseStruct(`std::list<bool> r5ret4980(int seed);`),
        classes: parseClass(`std::list<bool> r5ret4980(int seed);`),
        funcs: parseFunction(`std::list<bool> r5ret4980(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4980 生成结果为空');
      const expectSnippet0 = 'export function r5ret4980(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4980 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4980 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4980 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4981
  * @tc.name : h2dts_gen_4981
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4981', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char> r5ret4981(int seed);`),
        unions: parseUnion(`std::list<char> r5ret4981(int seed);`),
        structs: parseStruct(`std::list<char> r5ret4981(int seed);`),
        classes: parseClass(`std::list<char> r5ret4981(int seed);`),
        funcs: parseFunction(`std::list<char> r5ret4981(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4981 生成结果为空');
      const expectSnippet0 = 'export function r5ret4981(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4981 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4981 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4981 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4982
  * @tc.name : h2dts_gen_4982
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4982', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<wchar_t> r5ret4982(int seed);`),
        unions: parseUnion(`std::list<wchar_t> r5ret4982(int seed);`),
        structs: parseStruct(`std::list<wchar_t> r5ret4982(int seed);`),
        classes: parseClass(`std::list<wchar_t> r5ret4982(int seed);`),
        funcs: parseFunction(`std::list<wchar_t> r5ret4982(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4982 生成结果为空');
      const expectSnippet0 = 'export function r5ret4982(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4982 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4982 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4982 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4983
  * @tc.name : h2dts_gen_4983
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4983', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char8_t> r5ret4983(int seed);`),
        unions: parseUnion(`std::list<char8_t> r5ret4983(int seed);`),
        structs: parseStruct(`std::list<char8_t> r5ret4983(int seed);`),
        classes: parseClass(`std::list<char8_t> r5ret4983(int seed);`),
        funcs: parseFunction(`std::list<char8_t> r5ret4983(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4983 生成结果为空');
      const expectSnippet0 = 'export function r5ret4983(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4983 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4983 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4983 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4984
  * @tc.name : h2dts_gen_4984
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4984', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char16_t> r5ret4984(int seed);`),
        unions: parseUnion(`std::list<char16_t> r5ret4984(int seed);`),
        structs: parseStruct(`std::list<char16_t> r5ret4984(int seed);`),
        classes: parseClass(`std::list<char16_t> r5ret4984(int seed);`),
        funcs: parseFunction(`std::list<char16_t> r5ret4984(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4984 生成结果为空');
      const expectSnippet0 = 'export function r5ret4984(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4984 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4984 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4984 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4985
  * @tc.name : h2dts_gen_4985
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4985', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char32_t> r5ret4985(int seed);`),
        unions: parseUnion(`std::list<char32_t> r5ret4985(int seed);`),
        structs: parseStruct(`std::list<char32_t> r5ret4985(int seed);`),
        classes: parseClass(`std::list<char32_t> r5ret4985(int seed);`),
        funcs: parseFunction(`std::list<char32_t> r5ret4985(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4985 生成结果为空');
      const expectSnippet0 = 'export function r5ret4985(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4985 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4985 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4985 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4986
  * @tc.name : h2dts_gen_4986
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4986', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int>::iterator r5ret4986(int seed);`),
        unions: parseUnion(`std::list<int>::iterator r5ret4986(int seed);`),
        structs: parseStruct(`std::list<int>::iterator r5ret4986(int seed);`),
        classes: parseClass(`std::list<int>::iterator r5ret4986(int seed);`),
        funcs: parseFunction(`std::list<int>::iterator r5ret4986(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4986 生成结果为空');
      const expectSnippet0 = 'export function r5ret4986(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4986 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4986 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4986 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4987
  * @tc.name : h2dts_gen_4987
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4987', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<size_t>::iterator r5ret4987(int seed);`),
        unions: parseUnion(`std::list<size_t>::iterator r5ret4987(int seed);`),
        structs: parseStruct(`std::list<size_t>::iterator r5ret4987(int seed);`),
        classes: parseClass(`std::list<size_t>::iterator r5ret4987(int seed);`),
        funcs: parseFunction(`std::list<size_t>::iterator r5ret4987(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4987 生成结果为空');
      const expectSnippet0 = 'export function r5ret4987(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4987 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4987 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4987 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4988
  * @tc.name : h2dts_gen_4988
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4988', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<double>::iterator r5ret4988(int seed);`),
        unions: parseUnion(`std::list<double>::iterator r5ret4988(int seed);`),
        structs: parseStruct(`std::list<double>::iterator r5ret4988(int seed);`),
        classes: parseClass(`std::list<double>::iterator r5ret4988(int seed);`),
        funcs: parseFunction(`std::list<double>::iterator r5ret4988(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4988 生成结果为空');
      const expectSnippet0 = 'export function r5ret4988(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4988 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4988 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4988 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4989
  * @tc.name : h2dts_gen_4989
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4989', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<float>::iterator r5ret4989(int seed);`),
        unions: parseUnion(`std::list<float>::iterator r5ret4989(int seed);`),
        structs: parseStruct(`std::list<float>::iterator r5ret4989(int seed);`),
        classes: parseClass(`std::list<float>::iterator r5ret4989(int seed);`),
        funcs: parseFunction(`std::list<float>::iterator r5ret4989(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4989 生成结果为空');
      const expectSnippet0 = 'export function r5ret4989(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4989 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4989 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4989 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4990
  * @tc.name : h2dts_gen_4990
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4990', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<long>::iterator r5ret4990(int seed);`),
        unions: parseUnion(`std::list<long>::iterator r5ret4990(int seed);`),
        structs: parseStruct(`std::list<long>::iterator r5ret4990(int seed);`),
        classes: parseClass(`std::list<long>::iterator r5ret4990(int seed);`),
        funcs: parseFunction(`std::list<long>::iterator r5ret4990(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4990 生成结果为空');
      const expectSnippet0 = 'export function r5ret4990(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4990 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4990 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4990 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4991
  * @tc.name : h2dts_gen_4991
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4991', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<short>::iterator r5ret4991(int seed);`),
        unions: parseUnion(`std::list<short>::iterator r5ret4991(int seed);`),
        structs: parseStruct(`std::list<short>::iterator r5ret4991(int seed);`),
        classes: parseClass(`std::list<short>::iterator r5ret4991(int seed);`),
        funcs: parseFunction(`std::list<short>::iterator r5ret4991(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4991 生成结果为空');
      const expectSnippet0 = 'export function r5ret4991(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4991 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4991 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4991 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4992
  * @tc.name : h2dts_gen_4992
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4992', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint8_t>::iterator r5ret4992(int seed);`),
        unions: parseUnion(`std::list<uint8_t>::iterator r5ret4992(int seed);`),
        structs: parseStruct(`std::list<uint8_t>::iterator r5ret4992(int seed);`),
        classes: parseClass(`std::list<uint8_t>::iterator r5ret4992(int seed);`),
        funcs: parseFunction(`std::list<uint8_t>::iterator r5ret4992(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4992 生成结果为空');
      const expectSnippet0 = 'export function r5ret4992(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4992 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4992 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4992 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4993
  * @tc.name : h2dts_gen_4993
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4993', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint16_t>::iterator r5ret4993(int seed);`),
        unions: parseUnion(`std::list<uint16_t>::iterator r5ret4993(int seed);`),
        structs: parseStruct(`std::list<uint16_t>::iterator r5ret4993(int seed);`),
        classes: parseClass(`std::list<uint16_t>::iterator r5ret4993(int seed);`),
        funcs: parseFunction(`std::list<uint16_t>::iterator r5ret4993(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4993 生成结果为空');
      const expectSnippet0 = 'export function r5ret4993(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4993 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4993 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4993 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4994
  * @tc.name : h2dts_gen_4994
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4994', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint32_t>::iterator r5ret4994(int seed);`),
        unions: parseUnion(`std::list<uint32_t>::iterator r5ret4994(int seed);`),
        structs: parseStruct(`std::list<uint32_t>::iterator r5ret4994(int seed);`),
        classes: parseClass(`std::list<uint32_t>::iterator r5ret4994(int seed);`),
        funcs: parseFunction(`std::list<uint32_t>::iterator r5ret4994(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4994 生成结果为空');
      const expectSnippet0 = 'export function r5ret4994(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4994 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4994 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4994 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4995
  * @tc.name : h2dts_gen_4995
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4995', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<uint64_t>::iterator r5ret4995(int seed);`),
        unions: parseUnion(`std::list<uint64_t>::iterator r5ret4995(int seed);`),
        structs: parseStruct(`std::list<uint64_t>::iterator r5ret4995(int seed);`),
        classes: parseClass(`std::list<uint64_t>::iterator r5ret4995(int seed);`),
        funcs: parseFunction(`std::list<uint64_t>::iterator r5ret4995(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4995 生成结果为空');
      const expectSnippet0 = 'export function r5ret4995(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4995 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4995 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4995 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4996
  * @tc.name : h2dts_gen_4996
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4996', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int8_t>::iterator r5ret4996(int seed);`),
        unions: parseUnion(`std::list<int8_t>::iterator r5ret4996(int seed);`),
        structs: parseStruct(`std::list<int8_t>::iterator r5ret4996(int seed);`),
        classes: parseClass(`std::list<int8_t>::iterator r5ret4996(int seed);`),
        funcs: parseFunction(`std::list<int8_t>::iterator r5ret4996(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4996 生成结果为空');
      const expectSnippet0 = 'export function r5ret4996(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4996 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4996 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4996 执行异常: ${String(err)}`);
    }
  });
});
