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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part151.');

  /**
  * @tc.number : h2dts_gen_5102
  * @tc.name : h2dts_gen_5102
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5102', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int16_t> r5ret5102(int seed);`),
        unions: parseUnion(`std::queue<int16_t> r5ret5102(int seed);`),
        structs: parseStruct(`std::queue<int16_t> r5ret5102(int seed);`),
        classes: parseClass(`std::queue<int16_t> r5ret5102(int seed);`),
        funcs: parseFunction(`std::queue<int16_t> r5ret5102(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5102 生成结果为空');
      const expectSnippet0 = 'export function r5ret5102(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5102 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5103
  * @tc.name : h2dts_gen_5103
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5103', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int32_t> r5ret5103(int seed);`),
        unions: parseUnion(`std::queue<int32_t> r5ret5103(int seed);`),
        structs: parseStruct(`std::queue<int32_t> r5ret5103(int seed);`),
        classes: parseClass(`std::queue<int32_t> r5ret5103(int seed);`),
        funcs: parseFunction(`std::queue<int32_t> r5ret5103(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5103 生成结果为空');
      const expectSnippet0 = 'export function r5ret5103(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5103 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5104
  * @tc.name : h2dts_gen_5104
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5104', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int64_t> r5ret5104(int seed);`),
        unions: parseUnion(`std::queue<int64_t> r5ret5104(int seed);`),
        structs: parseStruct(`std::queue<int64_t> r5ret5104(int seed);`),
        classes: parseClass(`std::queue<int64_t> r5ret5104(int seed);`),
        funcs: parseFunction(`std::queue<int64_t> r5ret5104(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5104 生成结果为空');
      const expectSnippet0 = 'export function r5ret5104(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5104 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5105
  * @tc.name : h2dts_gen_5105
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5105', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<unsigned> r5ret5105(int seed);`),
        unions: parseUnion(`std::queue<unsigned> r5ret5105(int seed);`),
        structs: parseStruct(`std::queue<unsigned> r5ret5105(int seed);`),
        classes: parseClass(`std::queue<unsigned> r5ret5105(int seed);`),
        funcs: parseFunction(`std::queue<unsigned> r5ret5105(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5105 生成结果为空');
      const expectSnippet0 = 'export function r5ret5105(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5105 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5106
  * @tc.name : h2dts_gen_5106
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5106', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<bool> r5ret5106(int seed);`),
        unions: parseUnion(`std::queue<bool> r5ret5106(int seed);`),
        structs: parseStruct(`std::queue<bool> r5ret5106(int seed);`),
        classes: parseClass(`std::queue<bool> r5ret5106(int seed);`),
        funcs: parseFunction(`std::queue<bool> r5ret5106(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5106 生成结果为空');
      const expectSnippet0 = 'export function r5ret5106(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5106 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5107
  * @tc.name : h2dts_gen_5107
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5107', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char> r5ret5107(int seed);`),
        unions: parseUnion(`std::queue<char> r5ret5107(int seed);`),
        structs: parseStruct(`std::queue<char> r5ret5107(int seed);`),
        classes: parseClass(`std::queue<char> r5ret5107(int seed);`),
        funcs: parseFunction(`std::queue<char> r5ret5107(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5107 生成结果为空');
      const expectSnippet0 = 'export function r5ret5107(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5107 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5108
  * @tc.name : h2dts_gen_5108
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5108', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<wchar_t> r5ret5108(int seed);`),
        unions: parseUnion(`std::queue<wchar_t> r5ret5108(int seed);`),
        structs: parseStruct(`std::queue<wchar_t> r5ret5108(int seed);`),
        classes: parseClass(`std::queue<wchar_t> r5ret5108(int seed);`),
        funcs: parseFunction(`std::queue<wchar_t> r5ret5108(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5108 生成结果为空');
      const expectSnippet0 = 'export function r5ret5108(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5108 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5109
  * @tc.name : h2dts_gen_5109
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5109', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char8_t> r5ret5109(int seed);`),
        unions: parseUnion(`std::queue<char8_t> r5ret5109(int seed);`),
        structs: parseStruct(`std::queue<char8_t> r5ret5109(int seed);`),
        classes: parseClass(`std::queue<char8_t> r5ret5109(int seed);`),
        funcs: parseFunction(`std::queue<char8_t> r5ret5109(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5109 生成结果为空');
      const expectSnippet0 = 'export function r5ret5109(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5109 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5110
  * @tc.name : h2dts_gen_5110
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5110', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char16_t> r5ret5110(int seed);`),
        unions: parseUnion(`std::queue<char16_t> r5ret5110(int seed);`),
        structs: parseStruct(`std::queue<char16_t> r5ret5110(int seed);`),
        classes: parseClass(`std::queue<char16_t> r5ret5110(int seed);`),
        funcs: parseFunction(`std::queue<char16_t> r5ret5110(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5110 生成结果为空');
      const expectSnippet0 = 'export function r5ret5110(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5110 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5111
  * @tc.name : h2dts_gen_5111
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5111', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char32_t> r5ret5111(int seed);`),
        unions: parseUnion(`std::queue<char32_t> r5ret5111(int seed);`),
        structs: parseStruct(`std::queue<char32_t> r5ret5111(int seed);`),
        classes: parseClass(`std::queue<char32_t> r5ret5111(int seed);`),
        funcs: parseFunction(`std::queue<char32_t> r5ret5111(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5111 生成结果为空');
      const expectSnippet0 = 'export function r5ret5111(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5111 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5112
  * @tc.name : h2dts_gen_5112
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5112', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int>::iterator r5ret5112(int seed);`),
        unions: parseUnion(`std::queue<int>::iterator r5ret5112(int seed);`),
        structs: parseStruct(`std::queue<int>::iterator r5ret5112(int seed);`),
        classes: parseClass(`std::queue<int>::iterator r5ret5112(int seed);`),
        funcs: parseFunction(`std::queue<int>::iterator r5ret5112(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5112 生成结果为空');
      const expectSnippet0 = 'export function r5ret5112(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5112 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5113
  * @tc.name : h2dts_gen_5113
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5113', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<size_t>::iterator r5ret5113(int seed);`),
        unions: parseUnion(`std::queue<size_t>::iterator r5ret5113(int seed);`),
        structs: parseStruct(`std::queue<size_t>::iterator r5ret5113(int seed);`),
        classes: parseClass(`std::queue<size_t>::iterator r5ret5113(int seed);`),
        funcs: parseFunction(`std::queue<size_t>::iterator r5ret5113(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5113 生成结果为空');
      const expectSnippet0 = 'export function r5ret5113(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5113 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5114
  * @tc.name : h2dts_gen_5114
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5114', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<double>::iterator r5ret5114(int seed);`),
        unions: parseUnion(`std::queue<double>::iterator r5ret5114(int seed);`),
        structs: parseStruct(`std::queue<double>::iterator r5ret5114(int seed);`),
        classes: parseClass(`std::queue<double>::iterator r5ret5114(int seed);`),
        funcs: parseFunction(`std::queue<double>::iterator r5ret5114(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5114 生成结果为空');
      const expectSnippet0 = 'export function r5ret5114(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5114 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5115
  * @tc.name : h2dts_gen_5115
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5115', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<float>::iterator r5ret5115(int seed);`),
        unions: parseUnion(`std::queue<float>::iterator r5ret5115(int seed);`),
        structs: parseStruct(`std::queue<float>::iterator r5ret5115(int seed);`),
        classes: parseClass(`std::queue<float>::iterator r5ret5115(int seed);`),
        funcs: parseFunction(`std::queue<float>::iterator r5ret5115(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5115 生成结果为空');
      const expectSnippet0 = 'export function r5ret5115(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5115 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5116
  * @tc.name : h2dts_gen_5116
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5116', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<long>::iterator r5ret5116(int seed);`),
        unions: parseUnion(`std::queue<long>::iterator r5ret5116(int seed);`),
        structs: parseStruct(`std::queue<long>::iterator r5ret5116(int seed);`),
        classes: parseClass(`std::queue<long>::iterator r5ret5116(int seed);`),
        funcs: parseFunction(`std::queue<long>::iterator r5ret5116(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5116 生成结果为空');
      const expectSnippet0 = 'export function r5ret5116(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5116 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5117
  * @tc.name : h2dts_gen_5117
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5117', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<short>::iterator r5ret5117(int seed);`),
        unions: parseUnion(`std::queue<short>::iterator r5ret5117(int seed);`),
        structs: parseStruct(`std::queue<short>::iterator r5ret5117(int seed);`),
        classes: parseClass(`std::queue<short>::iterator r5ret5117(int seed);`),
        funcs: parseFunction(`std::queue<short>::iterator r5ret5117(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5117 生成结果为空');
      const expectSnippet0 = 'export function r5ret5117(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5117 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5118
  * @tc.name : h2dts_gen_5118
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5118', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint8_t>::iterator r5ret5118(int seed);`),
        unions: parseUnion(`std::queue<uint8_t>::iterator r5ret5118(int seed);`),
        structs: parseStruct(`std::queue<uint8_t>::iterator r5ret5118(int seed);`),
        classes: parseClass(`std::queue<uint8_t>::iterator r5ret5118(int seed);`),
        funcs: parseFunction(`std::queue<uint8_t>::iterator r5ret5118(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5118 生成结果为空');
      const expectSnippet0 = 'export function r5ret5118(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5118 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5119
  * @tc.name : h2dts_gen_5119
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5119', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint16_t>::iterator r5ret5119(int seed);`),
        unions: parseUnion(`std::queue<uint16_t>::iterator r5ret5119(int seed);`),
        structs: parseStruct(`std::queue<uint16_t>::iterator r5ret5119(int seed);`),
        classes: parseClass(`std::queue<uint16_t>::iterator r5ret5119(int seed);`),
        funcs: parseFunction(`std::queue<uint16_t>::iterator r5ret5119(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5119 生成结果为空');
      const expectSnippet0 = 'export function r5ret5119(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5119 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5120
  * @tc.name : h2dts_gen_5120
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5120', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint32_t>::iterator r5ret5120(int seed);`),
        unions: parseUnion(`std::queue<uint32_t>::iterator r5ret5120(int seed);`),
        structs: parseStruct(`std::queue<uint32_t>::iterator r5ret5120(int seed);`),
        classes: parseClass(`std::queue<uint32_t>::iterator r5ret5120(int seed);`),
        funcs: parseFunction(`std::queue<uint32_t>::iterator r5ret5120(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5120 生成结果为空');
      const expectSnippet0 = 'export function r5ret5120(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5120 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5121
  * @tc.name : h2dts_gen_5121
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5121', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint64_t>::iterator r5ret5121(int seed);`),
        unions: parseUnion(`std::queue<uint64_t>::iterator r5ret5121(int seed);`),
        structs: parseStruct(`std::queue<uint64_t>::iterator r5ret5121(int seed);`),
        classes: parseClass(`std::queue<uint64_t>::iterator r5ret5121(int seed);`),
        funcs: parseFunction(`std::queue<uint64_t>::iterator r5ret5121(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5121 生成结果为空');
      const expectSnippet0 = 'export function r5ret5121(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5121 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5122
  * @tc.name : h2dts_gen_5122
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5122', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int8_t>::iterator r5ret5122(int seed);`),
        unions: parseUnion(`std::queue<int8_t>::iterator r5ret5122(int seed);`),
        structs: parseStruct(`std::queue<int8_t>::iterator r5ret5122(int seed);`),
        classes: parseClass(`std::queue<int8_t>::iterator r5ret5122(int seed);`),
        funcs: parseFunction(`std::queue<int8_t>::iterator r5ret5122(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5122 生成结果为空');
      const expectSnippet0 = 'export function r5ret5122(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5122 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5123
  * @tc.name : h2dts_gen_5123
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5123', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int16_t>::iterator r5ret5123(int seed);`),
        unions: parseUnion(`std::queue<int16_t>::iterator r5ret5123(int seed);`),
        structs: parseStruct(`std::queue<int16_t>::iterator r5ret5123(int seed);`),
        classes: parseClass(`std::queue<int16_t>::iterator r5ret5123(int seed);`),
        funcs: parseFunction(`std::queue<int16_t>::iterator r5ret5123(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5123 生成结果为空');
      const expectSnippet0 = 'export function r5ret5123(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5123 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5124
  * @tc.name : h2dts_gen_5124
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5124', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int32_t>::iterator r5ret5124(int seed);`),
        unions: parseUnion(`std::queue<int32_t>::iterator r5ret5124(int seed);`),
        structs: parseStruct(`std::queue<int32_t>::iterator r5ret5124(int seed);`),
        classes: parseClass(`std::queue<int32_t>::iterator r5ret5124(int seed);`),
        funcs: parseFunction(`std::queue<int32_t>::iterator r5ret5124(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5124 生成结果为空');
      const expectSnippet0 = 'export function r5ret5124(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5124 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5125
  * @tc.name : h2dts_gen_5125
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5125', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int64_t>::iterator r5ret5125(int seed);`),
        unions: parseUnion(`std::queue<int64_t>::iterator r5ret5125(int seed);`),
        structs: parseStruct(`std::queue<int64_t>::iterator r5ret5125(int seed);`),
        classes: parseClass(`std::queue<int64_t>::iterator r5ret5125(int seed);`),
        funcs: parseFunction(`std::queue<int64_t>::iterator r5ret5125(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5125 生成结果为空');
      const expectSnippet0 = 'export function r5ret5125(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5125 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5126
  * @tc.name : h2dts_gen_5126
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5126', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<unsigned>::iterator r5ret5126(int seed);`),
        unions: parseUnion(`std::queue<unsigned>::iterator r5ret5126(int seed);`),
        structs: parseStruct(`std::queue<unsigned>::iterator r5ret5126(int seed);`),
        classes: parseClass(`std::queue<unsigned>::iterator r5ret5126(int seed);`),
        funcs: parseFunction(`std::queue<unsigned>::iterator r5ret5126(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5126 生成结果为空');
      const expectSnippet0 = 'export function r5ret5126(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5126 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5127
  * @tc.name : h2dts_gen_5127
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5127', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<bool>::iterator r5ret5127(int seed);`),
        unions: parseUnion(`std::queue<bool>::iterator r5ret5127(int seed);`),
        structs: parseStruct(`std::queue<bool>::iterator r5ret5127(int seed);`),
        classes: parseClass(`std::queue<bool>::iterator r5ret5127(int seed);`),
        funcs: parseFunction(`std::queue<bool>::iterator r5ret5127(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5127 生成结果为空');
      const expectSnippet0 = 'export function r5ret5127(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5127 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5128
  * @tc.name : h2dts_gen_5128
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5128', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char>::iterator r5ret5128(int seed);`),
        unions: parseUnion(`std::queue<char>::iterator r5ret5128(int seed);`),
        structs: parseStruct(`std::queue<char>::iterator r5ret5128(int seed);`),
        classes: parseClass(`std::queue<char>::iterator r5ret5128(int seed);`),
        funcs: parseFunction(`std::queue<char>::iterator r5ret5128(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5128 生成结果为空');
      const expectSnippet0 = 'export function r5ret5128(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5128 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5129
  * @tc.name : h2dts_gen_5129
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5129', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<wchar_t>::iterator r5ret5129(int seed);`),
        unions: parseUnion(`std::queue<wchar_t>::iterator r5ret5129(int seed);`),
        structs: parseStruct(`std::queue<wchar_t>::iterator r5ret5129(int seed);`),
        classes: parseClass(`std::queue<wchar_t>::iterator r5ret5129(int seed);`),
        funcs: parseFunction(`std::queue<wchar_t>::iterator r5ret5129(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5129 生成结果为空');
      const expectSnippet0 = 'export function r5ret5129(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5129 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5130
  * @tc.name : h2dts_gen_5130
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5130', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char8_t>::iterator r5ret5130(int seed);`),
        unions: parseUnion(`std::queue<char8_t>::iterator r5ret5130(int seed);`),
        structs: parseStruct(`std::queue<char8_t>::iterator r5ret5130(int seed);`),
        classes: parseClass(`std::queue<char8_t>::iterator r5ret5130(int seed);`),
        funcs: parseFunction(`std::queue<char8_t>::iterator r5ret5130(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5130 生成结果为空');
      const expectSnippet0 = 'export function r5ret5130(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5130 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5131
  * @tc.name : h2dts_gen_5131
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5131', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char16_t>::iterator r5ret5131(int seed);`),
        unions: parseUnion(`std::queue<char16_t>::iterator r5ret5131(int seed);`),
        structs: parseStruct(`std::queue<char16_t>::iterator r5ret5131(int seed);`),
        classes: parseClass(`std::queue<char16_t>::iterator r5ret5131(int seed);`),
        funcs: parseFunction(`std::queue<char16_t>::iterator r5ret5131(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5131 生成结果为空');
      const expectSnippet0 = 'export function r5ret5131(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5131 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5132
  * @tc.name : h2dts_gen_5132
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5132', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char32_t>::iterator r5ret5132(int seed);`),
        unions: parseUnion(`std::queue<char32_t>::iterator r5ret5132(int seed);`),
        structs: parseStruct(`std::queue<char32_t>::iterator r5ret5132(int seed);`),
        classes: parseClass(`std::queue<char32_t>::iterator r5ret5132(int seed);`),
        funcs: parseFunction(`std::queue<char32_t>::iterator r5ret5132(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5132 生成结果为空');
      const expectSnippet0 = 'export function r5ret5132(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5132 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5133
  * @tc.name : h2dts_gen_5133
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5133', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int> r5ret5133(int seed);`),
        unions: parseUnion(`std::valarray<int> r5ret5133(int seed);`),
        structs: parseStruct(`std::valarray<int> r5ret5133(int seed);`),
        classes: parseClass(`std::valarray<int> r5ret5133(int seed);`),
        funcs: parseFunction(`std::valarray<int> r5ret5133(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5133 生成结果为空');
      const expectSnippet0 = 'export function r5ret5133(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5133 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5134
  * @tc.name : h2dts_gen_5134
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5134', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<size_t> r5ret5134(int seed);`),
        unions: parseUnion(`std::valarray<size_t> r5ret5134(int seed);`),
        structs: parseStruct(`std::valarray<size_t> r5ret5134(int seed);`),
        classes: parseClass(`std::valarray<size_t> r5ret5134(int seed);`),
        funcs: parseFunction(`std::valarray<size_t> r5ret5134(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5134 生成结果为空');
      const expectSnippet0 = 'export function r5ret5134(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5134 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5135
  * @tc.name : h2dts_gen_5135
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5135', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<double> r5ret5135(int seed);`),
        unions: parseUnion(`std::valarray<double> r5ret5135(int seed);`),
        structs: parseStruct(`std::valarray<double> r5ret5135(int seed);`),
        classes: parseClass(`std::valarray<double> r5ret5135(int seed);`),
        funcs: parseFunction(`std::valarray<double> r5ret5135(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5135 生成结果为空');
      const expectSnippet0 = 'export function r5ret5135(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5135 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5136
  * @tc.name : h2dts_gen_5136
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5136', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<float> r5ret5136(int seed);`),
        unions: parseUnion(`std::valarray<float> r5ret5136(int seed);`),
        structs: parseStruct(`std::valarray<float> r5ret5136(int seed);`),
        classes: parseClass(`std::valarray<float> r5ret5136(int seed);`),
        funcs: parseFunction(`std::valarray<float> r5ret5136(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5136 生成结果为空');
      const expectSnippet0 = 'export function r5ret5136(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5136 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5136 执行异常: ${String(err)}`);
    }
  });
});
