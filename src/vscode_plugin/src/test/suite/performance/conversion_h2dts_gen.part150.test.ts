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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part150.');

  /**
  * @tc.number : h2dts_gen_5067
  * @tc.name : h2dts_gen_5067
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5067', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char8_t> r5ret5067(int seed);`),
        unions: parseUnion(`std::stack<char8_t> r5ret5067(int seed);`),
        structs: parseStruct(`std::stack<char8_t> r5ret5067(int seed);`),
        classes: parseClass(`std::stack<char8_t> r5ret5067(int seed);`),
        funcs: parseFunction(`std::stack<char8_t> r5ret5067(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5067 生成结果为空');
      const expectSnippet0 = 'export function r5ret5067(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5067 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5068
  * @tc.name : h2dts_gen_5068
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5068', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char16_t> r5ret5068(int seed);`),
        unions: parseUnion(`std::stack<char16_t> r5ret5068(int seed);`),
        structs: parseStruct(`std::stack<char16_t> r5ret5068(int seed);`),
        classes: parseClass(`std::stack<char16_t> r5ret5068(int seed);`),
        funcs: parseFunction(`std::stack<char16_t> r5ret5068(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5068 生成结果为空');
      const expectSnippet0 = 'export function r5ret5068(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5068 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5069
  * @tc.name : h2dts_gen_5069
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5069', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char32_t> r5ret5069(int seed);`),
        unions: parseUnion(`std::stack<char32_t> r5ret5069(int seed);`),
        structs: parseStruct(`std::stack<char32_t> r5ret5069(int seed);`),
        classes: parseClass(`std::stack<char32_t> r5ret5069(int seed);`),
        funcs: parseFunction(`std::stack<char32_t> r5ret5069(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5069 生成结果为空');
      const expectSnippet0 = 'export function r5ret5069(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5069 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5070
  * @tc.name : h2dts_gen_5070
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5070', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int>::iterator r5ret5070(int seed);`),
        unions: parseUnion(`std::stack<int>::iterator r5ret5070(int seed);`),
        structs: parseStruct(`std::stack<int>::iterator r5ret5070(int seed);`),
        classes: parseClass(`std::stack<int>::iterator r5ret5070(int seed);`),
        funcs: parseFunction(`std::stack<int>::iterator r5ret5070(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5070 生成结果为空');
      const expectSnippet0 = 'export function r5ret5070(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5070 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5071
  * @tc.name : h2dts_gen_5071
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5071', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<size_t>::iterator r5ret5071(int seed);`),
        unions: parseUnion(`std::stack<size_t>::iterator r5ret5071(int seed);`),
        structs: parseStruct(`std::stack<size_t>::iterator r5ret5071(int seed);`),
        classes: parseClass(`std::stack<size_t>::iterator r5ret5071(int seed);`),
        funcs: parseFunction(`std::stack<size_t>::iterator r5ret5071(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5071 生成结果为空');
      const expectSnippet0 = 'export function r5ret5071(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5071 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5072
  * @tc.name : h2dts_gen_5072
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5072', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<double>::iterator r5ret5072(int seed);`),
        unions: parseUnion(`std::stack<double>::iterator r5ret5072(int seed);`),
        structs: parseStruct(`std::stack<double>::iterator r5ret5072(int seed);`),
        classes: parseClass(`std::stack<double>::iterator r5ret5072(int seed);`),
        funcs: parseFunction(`std::stack<double>::iterator r5ret5072(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5072 生成结果为空');
      const expectSnippet0 = 'export function r5ret5072(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5072 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5073
  * @tc.name : h2dts_gen_5073
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5073', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<float>::iterator r5ret5073(int seed);`),
        unions: parseUnion(`std::stack<float>::iterator r5ret5073(int seed);`),
        structs: parseStruct(`std::stack<float>::iterator r5ret5073(int seed);`),
        classes: parseClass(`std::stack<float>::iterator r5ret5073(int seed);`),
        funcs: parseFunction(`std::stack<float>::iterator r5ret5073(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5073 生成结果为空');
      const expectSnippet0 = 'export function r5ret5073(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5073 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5074
  * @tc.name : h2dts_gen_5074
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5074', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<long>::iterator r5ret5074(int seed);`),
        unions: parseUnion(`std::stack<long>::iterator r5ret5074(int seed);`),
        structs: parseStruct(`std::stack<long>::iterator r5ret5074(int seed);`),
        classes: parseClass(`std::stack<long>::iterator r5ret5074(int seed);`),
        funcs: parseFunction(`std::stack<long>::iterator r5ret5074(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5074 生成结果为空');
      const expectSnippet0 = 'export function r5ret5074(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5074 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5075
  * @tc.name : h2dts_gen_5075
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5075', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<short>::iterator r5ret5075(int seed);`),
        unions: parseUnion(`std::stack<short>::iterator r5ret5075(int seed);`),
        structs: parseStruct(`std::stack<short>::iterator r5ret5075(int seed);`),
        classes: parseClass(`std::stack<short>::iterator r5ret5075(int seed);`),
        funcs: parseFunction(`std::stack<short>::iterator r5ret5075(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5075 生成结果为空');
      const expectSnippet0 = 'export function r5ret5075(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5075 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5076
  * @tc.name : h2dts_gen_5076
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5076', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint8_t>::iterator r5ret5076(int seed);`),
        unions: parseUnion(`std::stack<uint8_t>::iterator r5ret5076(int seed);`),
        structs: parseStruct(`std::stack<uint8_t>::iterator r5ret5076(int seed);`),
        classes: parseClass(`std::stack<uint8_t>::iterator r5ret5076(int seed);`),
        funcs: parseFunction(`std::stack<uint8_t>::iterator r5ret5076(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5076 生成结果为空');
      const expectSnippet0 = 'export function r5ret5076(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5076 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5077
  * @tc.name : h2dts_gen_5077
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5077', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint16_t>::iterator r5ret5077(int seed);`),
        unions: parseUnion(`std::stack<uint16_t>::iterator r5ret5077(int seed);`),
        structs: parseStruct(`std::stack<uint16_t>::iterator r5ret5077(int seed);`),
        classes: parseClass(`std::stack<uint16_t>::iterator r5ret5077(int seed);`),
        funcs: parseFunction(`std::stack<uint16_t>::iterator r5ret5077(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5077 生成结果为空');
      const expectSnippet0 = 'export function r5ret5077(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5077 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5077 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5078
  * @tc.name : h2dts_gen_5078
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5078', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint32_t>::iterator r5ret5078(int seed);`),
        unions: parseUnion(`std::stack<uint32_t>::iterator r5ret5078(int seed);`),
        structs: parseStruct(`std::stack<uint32_t>::iterator r5ret5078(int seed);`),
        classes: parseClass(`std::stack<uint32_t>::iterator r5ret5078(int seed);`),
        funcs: parseFunction(`std::stack<uint32_t>::iterator r5ret5078(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5078 生成结果为空');
      const expectSnippet0 = 'export function r5ret5078(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5078 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5079
  * @tc.name : h2dts_gen_5079
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5079', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint64_t>::iterator r5ret5079(int seed);`),
        unions: parseUnion(`std::stack<uint64_t>::iterator r5ret5079(int seed);`),
        structs: parseStruct(`std::stack<uint64_t>::iterator r5ret5079(int seed);`),
        classes: parseClass(`std::stack<uint64_t>::iterator r5ret5079(int seed);`),
        funcs: parseFunction(`std::stack<uint64_t>::iterator r5ret5079(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5079 生成结果为空');
      const expectSnippet0 = 'export function r5ret5079(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5079 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5080
  * @tc.name : h2dts_gen_5080
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5080', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int8_t>::iterator r5ret5080(int seed);`),
        unions: parseUnion(`std::stack<int8_t>::iterator r5ret5080(int seed);`),
        structs: parseStruct(`std::stack<int8_t>::iterator r5ret5080(int seed);`),
        classes: parseClass(`std::stack<int8_t>::iterator r5ret5080(int seed);`),
        funcs: parseFunction(`std::stack<int8_t>::iterator r5ret5080(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5080 生成结果为空');
      const expectSnippet0 = 'export function r5ret5080(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5080 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5081
  * @tc.name : h2dts_gen_5081
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5081', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int16_t>::iterator r5ret5081(int seed);`),
        unions: parseUnion(`std::stack<int16_t>::iterator r5ret5081(int seed);`),
        structs: parseStruct(`std::stack<int16_t>::iterator r5ret5081(int seed);`),
        classes: parseClass(`std::stack<int16_t>::iterator r5ret5081(int seed);`),
        funcs: parseFunction(`std::stack<int16_t>::iterator r5ret5081(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5081 生成结果为空');
      const expectSnippet0 = 'export function r5ret5081(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5081 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5082
  * @tc.name : h2dts_gen_5082
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5082', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int32_t>::iterator r5ret5082(int seed);`),
        unions: parseUnion(`std::stack<int32_t>::iterator r5ret5082(int seed);`),
        structs: parseStruct(`std::stack<int32_t>::iterator r5ret5082(int seed);`),
        classes: parseClass(`std::stack<int32_t>::iterator r5ret5082(int seed);`),
        funcs: parseFunction(`std::stack<int32_t>::iterator r5ret5082(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5082 生成结果为空');
      const expectSnippet0 = 'export function r5ret5082(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5082 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5083
  * @tc.name : h2dts_gen_5083
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5083', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int64_t>::iterator r5ret5083(int seed);`),
        unions: parseUnion(`std::stack<int64_t>::iterator r5ret5083(int seed);`),
        structs: parseStruct(`std::stack<int64_t>::iterator r5ret5083(int seed);`),
        classes: parseClass(`std::stack<int64_t>::iterator r5ret5083(int seed);`),
        funcs: parseFunction(`std::stack<int64_t>::iterator r5ret5083(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5083 生成结果为空');
      const expectSnippet0 = 'export function r5ret5083(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5083 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5084
  * @tc.name : h2dts_gen_5084
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5084', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<unsigned>::iterator r5ret5084(int seed);`),
        unions: parseUnion(`std::stack<unsigned>::iterator r5ret5084(int seed);`),
        structs: parseStruct(`std::stack<unsigned>::iterator r5ret5084(int seed);`),
        classes: parseClass(`std::stack<unsigned>::iterator r5ret5084(int seed);`),
        funcs: parseFunction(`std::stack<unsigned>::iterator r5ret5084(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5084 生成结果为空');
      const expectSnippet0 = 'export function r5ret5084(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5084 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5085
  * @tc.name : h2dts_gen_5085
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5085', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<bool>::iterator r5ret5085(int seed);`),
        unions: parseUnion(`std::stack<bool>::iterator r5ret5085(int seed);`),
        structs: parseStruct(`std::stack<bool>::iterator r5ret5085(int seed);`),
        classes: parseClass(`std::stack<bool>::iterator r5ret5085(int seed);`),
        funcs: parseFunction(`std::stack<bool>::iterator r5ret5085(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5085 生成结果为空');
      const expectSnippet0 = 'export function r5ret5085(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5085 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5086
  * @tc.name : h2dts_gen_5086
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5086', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char>::iterator r5ret5086(int seed);`),
        unions: parseUnion(`std::stack<char>::iterator r5ret5086(int seed);`),
        structs: parseStruct(`std::stack<char>::iterator r5ret5086(int seed);`),
        classes: parseClass(`std::stack<char>::iterator r5ret5086(int seed);`),
        funcs: parseFunction(`std::stack<char>::iterator r5ret5086(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5086 生成结果为空');
      const expectSnippet0 = 'export function r5ret5086(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5086 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5087
  * @tc.name : h2dts_gen_5087
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5087', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<wchar_t>::iterator r5ret5087(int seed);`),
        unions: parseUnion(`std::stack<wchar_t>::iterator r5ret5087(int seed);`),
        structs: parseStruct(`std::stack<wchar_t>::iterator r5ret5087(int seed);`),
        classes: parseClass(`std::stack<wchar_t>::iterator r5ret5087(int seed);`),
        funcs: parseFunction(`std::stack<wchar_t>::iterator r5ret5087(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5087 生成结果为空');
      const expectSnippet0 = 'export function r5ret5087(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5087 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5088
  * @tc.name : h2dts_gen_5088
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5088', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char8_t>::iterator r5ret5088(int seed);`),
        unions: parseUnion(`std::stack<char8_t>::iterator r5ret5088(int seed);`),
        structs: parseStruct(`std::stack<char8_t>::iterator r5ret5088(int seed);`),
        classes: parseClass(`std::stack<char8_t>::iterator r5ret5088(int seed);`),
        funcs: parseFunction(`std::stack<char8_t>::iterator r5ret5088(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5088 生成结果为空');
      const expectSnippet0 = 'export function r5ret5088(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5088 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5089
  * @tc.name : h2dts_gen_5089
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5089', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char16_t>::iterator r5ret5089(int seed);`),
        unions: parseUnion(`std::stack<char16_t>::iterator r5ret5089(int seed);`),
        structs: parseStruct(`std::stack<char16_t>::iterator r5ret5089(int seed);`),
        classes: parseClass(`std::stack<char16_t>::iterator r5ret5089(int seed);`),
        funcs: parseFunction(`std::stack<char16_t>::iterator r5ret5089(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5089 生成结果为空');
      const expectSnippet0 = 'export function r5ret5089(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5089 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5090
  * @tc.name : h2dts_gen_5090
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5090', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char32_t>::iterator r5ret5090(int seed);`),
        unions: parseUnion(`std::stack<char32_t>::iterator r5ret5090(int seed);`),
        structs: parseStruct(`std::stack<char32_t>::iterator r5ret5090(int seed);`),
        classes: parseClass(`std::stack<char32_t>::iterator r5ret5090(int seed);`),
        funcs: parseFunction(`std::stack<char32_t>::iterator r5ret5090(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5090 生成结果为空');
      const expectSnippet0 = 'export function r5ret5090(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5090 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5091
  * @tc.name : h2dts_gen_5091
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5091', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int> r5ret5091(int seed);`),
        unions: parseUnion(`std::queue<int> r5ret5091(int seed);`),
        structs: parseStruct(`std::queue<int> r5ret5091(int seed);`),
        classes: parseClass(`std::queue<int> r5ret5091(int seed);`),
        funcs: parseFunction(`std::queue<int> r5ret5091(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5091 生成结果为空');
      const expectSnippet0 = 'export function r5ret5091(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5091 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5092
  * @tc.name : h2dts_gen_5092
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5092', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<size_t> r5ret5092(int seed);`),
        unions: parseUnion(`std::queue<size_t> r5ret5092(int seed);`),
        structs: parseStruct(`std::queue<size_t> r5ret5092(int seed);`),
        classes: parseClass(`std::queue<size_t> r5ret5092(int seed);`),
        funcs: parseFunction(`std::queue<size_t> r5ret5092(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5092 生成结果为空');
      const expectSnippet0 = 'export function r5ret5092(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5092 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5093
  * @tc.name : h2dts_gen_5093
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5093', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<double> r5ret5093(int seed);`),
        unions: parseUnion(`std::queue<double> r5ret5093(int seed);`),
        structs: parseStruct(`std::queue<double> r5ret5093(int seed);`),
        classes: parseClass(`std::queue<double> r5ret5093(int seed);`),
        funcs: parseFunction(`std::queue<double> r5ret5093(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5093 生成结果为空');
      const expectSnippet0 = 'export function r5ret5093(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5093 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5094
  * @tc.name : h2dts_gen_5094
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5094', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<float> r5ret5094(int seed);`),
        unions: parseUnion(`std::queue<float> r5ret5094(int seed);`),
        structs: parseStruct(`std::queue<float> r5ret5094(int seed);`),
        classes: parseClass(`std::queue<float> r5ret5094(int seed);`),
        funcs: parseFunction(`std::queue<float> r5ret5094(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5094 生成结果为空');
      const expectSnippet0 = 'export function r5ret5094(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5094 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5095
  * @tc.name : h2dts_gen_5095
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5095', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<long> r5ret5095(int seed);`),
        unions: parseUnion(`std::queue<long> r5ret5095(int seed);`),
        structs: parseStruct(`std::queue<long> r5ret5095(int seed);`),
        classes: parseClass(`std::queue<long> r5ret5095(int seed);`),
        funcs: parseFunction(`std::queue<long> r5ret5095(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5095 生成结果为空');
      const expectSnippet0 = 'export function r5ret5095(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5095 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5096
  * @tc.name : h2dts_gen_5096
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5096', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<short> r5ret5096(int seed);`),
        unions: parseUnion(`std::queue<short> r5ret5096(int seed);`),
        structs: parseStruct(`std::queue<short> r5ret5096(int seed);`),
        classes: parseClass(`std::queue<short> r5ret5096(int seed);`),
        funcs: parseFunction(`std::queue<short> r5ret5096(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5096 生成结果为空');
      const expectSnippet0 = 'export function r5ret5096(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5096 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5097
  * @tc.name : h2dts_gen_5097
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5097', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint8_t> r5ret5097(int seed);`),
        unions: parseUnion(`std::queue<uint8_t> r5ret5097(int seed);`),
        structs: parseStruct(`std::queue<uint8_t> r5ret5097(int seed);`),
        classes: parseClass(`std::queue<uint8_t> r5ret5097(int seed);`),
        funcs: parseFunction(`std::queue<uint8_t> r5ret5097(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5097 生成结果为空');
      const expectSnippet0 = 'export function r5ret5097(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5097 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5098
  * @tc.name : h2dts_gen_5098
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5098', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint16_t> r5ret5098(int seed);`),
        unions: parseUnion(`std::queue<uint16_t> r5ret5098(int seed);`),
        structs: parseStruct(`std::queue<uint16_t> r5ret5098(int seed);`),
        classes: parseClass(`std::queue<uint16_t> r5ret5098(int seed);`),
        funcs: parseFunction(`std::queue<uint16_t> r5ret5098(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5098 生成结果为空');
      const expectSnippet0 = 'export function r5ret5098(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5098 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5099
  * @tc.name : h2dts_gen_5099
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5099', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint32_t> r5ret5099(int seed);`),
        unions: parseUnion(`std::queue<uint32_t> r5ret5099(int seed);`),
        structs: parseStruct(`std::queue<uint32_t> r5ret5099(int seed);`),
        classes: parseClass(`std::queue<uint32_t> r5ret5099(int seed);`),
        funcs: parseFunction(`std::queue<uint32_t> r5ret5099(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5099 生成结果为空');
      const expectSnippet0 = 'export function r5ret5099(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5099 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5100
  * @tc.name : h2dts_gen_5100
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5100', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint64_t> r5ret5100(int seed);`),
        unions: parseUnion(`std::queue<uint64_t> r5ret5100(int seed);`),
        structs: parseStruct(`std::queue<uint64_t> r5ret5100(int seed);`),
        classes: parseClass(`std::queue<uint64_t> r5ret5100(int seed);`),
        funcs: parseFunction(`std::queue<uint64_t> r5ret5100(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5100 生成结果为空');
      const expectSnippet0 = 'export function r5ret5100(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5100 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5101
  * @tc.name : h2dts_gen_5101
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5101', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int8_t> r5ret5101(int seed);`),
        unions: parseUnion(`std::queue<int8_t> r5ret5101(int seed);`),
        structs: parseStruct(`std::queue<int8_t> r5ret5101(int seed);`),
        classes: parseClass(`std::queue<int8_t> r5ret5101(int seed);`),
        funcs: parseFunction(`std::queue<int8_t> r5ret5101(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5101 生成结果为空');
      const expectSnippet0 = 'export function r5ret5101(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5101 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5101 执行异常: ${String(err)}`);
    }
  });
});
