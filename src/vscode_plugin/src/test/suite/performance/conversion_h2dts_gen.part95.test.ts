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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part95.');

  /**
  * @tc.number : h2dts_gen_3173
  * @tc.name : h2dts_gen_3173
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3173', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int16_t> r5ret3173(int seed);`),
        unions: parseUnion(`std::vector<int16_t> r5ret3173(int seed);`),
        structs: parseStruct(`std::vector<int16_t> r5ret3173(int seed);`),
        classes: parseClass(`std::vector<int16_t> r5ret3173(int seed);`),
        funcs: parseFunction(`std::vector<int16_t> r5ret3173(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3173 生成结果为空');
      const expectSnippet0 = 'export function r5ret3173(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3173 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3174
  * @tc.name : h2dts_gen_3174
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3174', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int32_t> r5ret3174(int seed);`),
        unions: parseUnion(`std::vector<int32_t> r5ret3174(int seed);`),
        structs: parseStruct(`std::vector<int32_t> r5ret3174(int seed);`),
        classes: parseClass(`std::vector<int32_t> r5ret3174(int seed);`),
        funcs: parseFunction(`std::vector<int32_t> r5ret3174(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3174 生成结果为空');
      const expectSnippet0 = 'export function r5ret3174(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3174 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3175
  * @tc.name : h2dts_gen_3175
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3175', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int64_t> r5ret3175(int seed);`),
        unions: parseUnion(`std::vector<int64_t> r5ret3175(int seed);`),
        structs: parseStruct(`std::vector<int64_t> r5ret3175(int seed);`),
        classes: parseClass(`std::vector<int64_t> r5ret3175(int seed);`),
        funcs: parseFunction(`std::vector<int64_t> r5ret3175(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3175 生成结果为空');
      const expectSnippet0 = 'export function r5ret3175(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3175 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3176
  * @tc.name : h2dts_gen_3176
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3176', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<unsigned> r5ret3176(int seed);`),
        unions: parseUnion(`std::vector<unsigned> r5ret3176(int seed);`),
        structs: parseStruct(`std::vector<unsigned> r5ret3176(int seed);`),
        classes: parseClass(`std::vector<unsigned> r5ret3176(int seed);`),
        funcs: parseFunction(`std::vector<unsigned> r5ret3176(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3176 生成结果为空');
      const expectSnippet0 = 'export function r5ret3176(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3176 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3177
  * @tc.name : h2dts_gen_3177
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3177', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<bool> r5ret3177(int seed);`),
        unions: parseUnion(`std::vector<bool> r5ret3177(int seed);`),
        structs: parseStruct(`std::vector<bool> r5ret3177(int seed);`),
        classes: parseClass(`std::vector<bool> r5ret3177(int seed);`),
        funcs: parseFunction(`std::vector<bool> r5ret3177(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3177 生成结果为空');
      const expectSnippet0 = 'export function r5ret3177(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3177 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3178
  * @tc.name : h2dts_gen_3178
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3178', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char> r5ret3178(int seed);`),
        unions: parseUnion(`std::vector<char> r5ret3178(int seed);`),
        structs: parseStruct(`std::vector<char> r5ret3178(int seed);`),
        classes: parseClass(`std::vector<char> r5ret3178(int seed);`),
        funcs: parseFunction(`std::vector<char> r5ret3178(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3178 生成结果为空');
      const expectSnippet0 = 'export function r5ret3178(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3178 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3179
  * @tc.name : h2dts_gen_3179
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3179', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<wchar_t> r5ret3179(int seed);`),
        unions: parseUnion(`std::vector<wchar_t> r5ret3179(int seed);`),
        structs: parseStruct(`std::vector<wchar_t> r5ret3179(int seed);`),
        classes: parseClass(`std::vector<wchar_t> r5ret3179(int seed);`),
        funcs: parseFunction(`std::vector<wchar_t> r5ret3179(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3179 生成结果为空');
      const expectSnippet0 = 'export function r5ret3179(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3179 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3180
  * @tc.name : h2dts_gen_3180
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3180', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char8_t> r5ret3180(int seed);`),
        unions: parseUnion(`std::vector<char8_t> r5ret3180(int seed);`),
        structs: parseStruct(`std::vector<char8_t> r5ret3180(int seed);`),
        classes: parseClass(`std::vector<char8_t> r5ret3180(int seed);`),
        funcs: parseFunction(`std::vector<char8_t> r5ret3180(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3180 生成结果为空');
      const expectSnippet0 = 'export function r5ret3180(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3180 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3181
  * @tc.name : h2dts_gen_3181
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3181', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char16_t> r5ret3181(int seed);`),
        unions: parseUnion(`std::vector<char16_t> r5ret3181(int seed);`),
        structs: parseStruct(`std::vector<char16_t> r5ret3181(int seed);`),
        classes: parseClass(`std::vector<char16_t> r5ret3181(int seed);`),
        funcs: parseFunction(`std::vector<char16_t> r5ret3181(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3181 生成结果为空');
      const expectSnippet0 = 'export function r5ret3181(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3181 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3182
  * @tc.name : h2dts_gen_3182
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3182', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char32_t> r5ret3182(int seed);`),
        unions: parseUnion(`std::vector<char32_t> r5ret3182(int seed);`),
        structs: parseStruct(`std::vector<char32_t> r5ret3182(int seed);`),
        classes: parseClass(`std::vector<char32_t> r5ret3182(int seed);`),
        funcs: parseFunction(`std::vector<char32_t> r5ret3182(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3182 生成结果为空');
      const expectSnippet0 = 'export function r5ret3182(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3182 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3183
  * @tc.name : h2dts_gen_3183
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3183', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int>::iterator r5ret3183(int seed);`),
        unions: parseUnion(`std::vector<int>::iterator r5ret3183(int seed);`),
        structs: parseStruct(`std::vector<int>::iterator r5ret3183(int seed);`),
        classes: parseClass(`std::vector<int>::iterator r5ret3183(int seed);`),
        funcs: parseFunction(`std::vector<int>::iterator r5ret3183(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3183 生成结果为空');
      const expectSnippet0 = 'export function r5ret3183(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3183 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3184
  * @tc.name : h2dts_gen_3184
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3184', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<size_t>::iterator r5ret3184(int seed);`),
        unions: parseUnion(`std::vector<size_t>::iterator r5ret3184(int seed);`),
        structs: parseStruct(`std::vector<size_t>::iterator r5ret3184(int seed);`),
        classes: parseClass(`std::vector<size_t>::iterator r5ret3184(int seed);`),
        funcs: parseFunction(`std::vector<size_t>::iterator r5ret3184(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3184 生成结果为空');
      const expectSnippet0 = 'export function r5ret3184(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3184 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3185
  * @tc.name : h2dts_gen_3185
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3185', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<double>::iterator r5ret3185(int seed);`),
        unions: parseUnion(`std::vector<double>::iterator r5ret3185(int seed);`),
        structs: parseStruct(`std::vector<double>::iterator r5ret3185(int seed);`),
        classes: parseClass(`std::vector<double>::iterator r5ret3185(int seed);`),
        funcs: parseFunction(`std::vector<double>::iterator r5ret3185(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3185 生成结果为空');
      const expectSnippet0 = 'export function r5ret3185(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3185 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3185 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3186
  * @tc.name : h2dts_gen_3186
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3186', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<float>::iterator r5ret3186(int seed);`),
        unions: parseUnion(`std::vector<float>::iterator r5ret3186(int seed);`),
        structs: parseStruct(`std::vector<float>::iterator r5ret3186(int seed);`),
        classes: parseClass(`std::vector<float>::iterator r5ret3186(int seed);`),
        funcs: parseFunction(`std::vector<float>::iterator r5ret3186(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3186 生成结果为空');
      const expectSnippet0 = 'export function r5ret3186(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3186 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3186 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3187
  * @tc.name : h2dts_gen_3187
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3187', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<long>::iterator r5ret3187(int seed);`),
        unions: parseUnion(`std::vector<long>::iterator r5ret3187(int seed);`),
        structs: parseStruct(`std::vector<long>::iterator r5ret3187(int seed);`),
        classes: parseClass(`std::vector<long>::iterator r5ret3187(int seed);`),
        funcs: parseFunction(`std::vector<long>::iterator r5ret3187(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3187 生成结果为空');
      const expectSnippet0 = 'export function r5ret3187(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3187 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3187 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3188
  * @tc.name : h2dts_gen_3188
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3188', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<short>::iterator r5ret3188(int seed);`),
        unions: parseUnion(`std::vector<short>::iterator r5ret3188(int seed);`),
        structs: parseStruct(`std::vector<short>::iterator r5ret3188(int seed);`),
        classes: parseClass(`std::vector<short>::iterator r5ret3188(int seed);`),
        funcs: parseFunction(`std::vector<short>::iterator r5ret3188(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3188 生成结果为空');
      const expectSnippet0 = 'export function r5ret3188(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3188 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3188 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3189
  * @tc.name : h2dts_gen_3189
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3189', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint8_t>::iterator r5ret3189(int seed);`),
        unions: parseUnion(`std::vector<uint8_t>::iterator r5ret3189(int seed);`),
        structs: parseStruct(`std::vector<uint8_t>::iterator r5ret3189(int seed);`),
        classes: parseClass(`std::vector<uint8_t>::iterator r5ret3189(int seed);`),
        funcs: parseFunction(`std::vector<uint8_t>::iterator r5ret3189(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3189 生成结果为空');
      const expectSnippet0 = 'export function r5ret3189(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3189 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3189 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3190
  * @tc.name : h2dts_gen_3190
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3190', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint16_t>::iterator r5ret3190(int seed);`),
        unions: parseUnion(`std::vector<uint16_t>::iterator r5ret3190(int seed);`),
        structs: parseStruct(`std::vector<uint16_t>::iterator r5ret3190(int seed);`),
        classes: parseClass(`std::vector<uint16_t>::iterator r5ret3190(int seed);`),
        funcs: parseFunction(`std::vector<uint16_t>::iterator r5ret3190(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3190 生成结果为空');
      const expectSnippet0 = 'export function r5ret3190(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3190 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3190 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3191
  * @tc.name : h2dts_gen_3191
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3191', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint32_t>::iterator r5ret3191(int seed);`),
        unions: parseUnion(`std::vector<uint32_t>::iterator r5ret3191(int seed);`),
        structs: parseStruct(`std::vector<uint32_t>::iterator r5ret3191(int seed);`),
        classes: parseClass(`std::vector<uint32_t>::iterator r5ret3191(int seed);`),
        funcs: parseFunction(`std::vector<uint32_t>::iterator r5ret3191(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3191 生成结果为空');
      const expectSnippet0 = 'export function r5ret3191(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3191 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3191 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3192
  * @tc.name : h2dts_gen_3192
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3192', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint64_t>::iterator r5ret3192(int seed);`),
        unions: parseUnion(`std::vector<uint64_t>::iterator r5ret3192(int seed);`),
        structs: parseStruct(`std::vector<uint64_t>::iterator r5ret3192(int seed);`),
        classes: parseClass(`std::vector<uint64_t>::iterator r5ret3192(int seed);`),
        funcs: parseFunction(`std::vector<uint64_t>::iterator r5ret3192(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3192 生成结果为空');
      const expectSnippet0 = 'export function r5ret3192(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3192 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3192 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3193
  * @tc.name : h2dts_gen_3193
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3193', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int8_t>::iterator r5ret3193(int seed);`),
        unions: parseUnion(`std::vector<int8_t>::iterator r5ret3193(int seed);`),
        structs: parseStruct(`std::vector<int8_t>::iterator r5ret3193(int seed);`),
        classes: parseClass(`std::vector<int8_t>::iterator r5ret3193(int seed);`),
        funcs: parseFunction(`std::vector<int8_t>::iterator r5ret3193(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3193 生成结果为空');
      const expectSnippet0 = 'export function r5ret3193(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3193 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3194
  * @tc.name : h2dts_gen_3194
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3194', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int16_t>::iterator r5ret3194(int seed);`),
        unions: parseUnion(`std::vector<int16_t>::iterator r5ret3194(int seed);`),
        structs: parseStruct(`std::vector<int16_t>::iterator r5ret3194(int seed);`),
        classes: parseClass(`std::vector<int16_t>::iterator r5ret3194(int seed);`),
        funcs: parseFunction(`std::vector<int16_t>::iterator r5ret3194(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3194 生成结果为空');
      const expectSnippet0 = 'export function r5ret3194(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3194 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3195
  * @tc.name : h2dts_gen_3195
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3195', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int32_t>::iterator r5ret3195(int seed);`),
        unions: parseUnion(`std::vector<int32_t>::iterator r5ret3195(int seed);`),
        structs: parseStruct(`std::vector<int32_t>::iterator r5ret3195(int seed);`),
        classes: parseClass(`std::vector<int32_t>::iterator r5ret3195(int seed);`),
        funcs: parseFunction(`std::vector<int32_t>::iterator r5ret3195(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3195 生成结果为空');
      const expectSnippet0 = 'export function r5ret3195(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3195 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3195 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3196
  * @tc.name : h2dts_gen_3196
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3196', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int64_t>::iterator r5ret3196(int seed);`),
        unions: parseUnion(`std::vector<int64_t>::iterator r5ret3196(int seed);`),
        structs: parseStruct(`std::vector<int64_t>::iterator r5ret3196(int seed);`),
        classes: parseClass(`std::vector<int64_t>::iterator r5ret3196(int seed);`),
        funcs: parseFunction(`std::vector<int64_t>::iterator r5ret3196(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3196 生成结果为空');
      const expectSnippet0 = 'export function r5ret3196(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3196 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3196 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3197
  * @tc.name : h2dts_gen_3197
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3197', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<unsigned>::iterator r5ret3197(int seed);`),
        unions: parseUnion(`std::vector<unsigned>::iterator r5ret3197(int seed);`),
        structs: parseStruct(`std::vector<unsigned>::iterator r5ret3197(int seed);`),
        classes: parseClass(`std::vector<unsigned>::iterator r5ret3197(int seed);`),
        funcs: parseFunction(`std::vector<unsigned>::iterator r5ret3197(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3197 生成结果为空');
      const expectSnippet0 = 'export function r5ret3197(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3197 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3197 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3198
  * @tc.name : h2dts_gen_3198
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3198', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<bool>::iterator r5ret3198(int seed);`),
        unions: parseUnion(`std::vector<bool>::iterator r5ret3198(int seed);`),
        structs: parseStruct(`std::vector<bool>::iterator r5ret3198(int seed);`),
        classes: parseClass(`std::vector<bool>::iterator r5ret3198(int seed);`),
        funcs: parseFunction(`std::vector<bool>::iterator r5ret3198(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3198 生成结果为空');
      const expectSnippet0 = 'export function r5ret3198(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3198 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3198 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3199
  * @tc.name : h2dts_gen_3199
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3199', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char>::iterator r5ret3199(int seed);`),
        unions: parseUnion(`std::vector<char>::iterator r5ret3199(int seed);`),
        structs: parseStruct(`std::vector<char>::iterator r5ret3199(int seed);`),
        classes: parseClass(`std::vector<char>::iterator r5ret3199(int seed);`),
        funcs: parseFunction(`std::vector<char>::iterator r5ret3199(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3199 生成结果为空');
      const expectSnippet0 = 'export function r5ret3199(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3199 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3199 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3200
  * @tc.name : h2dts_gen_3200
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3200', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<wchar_t>::iterator r5ret3200(int seed);`),
        unions: parseUnion(`std::vector<wchar_t>::iterator r5ret3200(int seed);`),
        structs: parseStruct(`std::vector<wchar_t>::iterator r5ret3200(int seed);`),
        classes: parseClass(`std::vector<wchar_t>::iterator r5ret3200(int seed);`),
        funcs: parseFunction(`std::vector<wchar_t>::iterator r5ret3200(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3200 生成结果为空');
      const expectSnippet0 = 'export function r5ret3200(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3200 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3200 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3201
  * @tc.name : h2dts_gen_3201
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3201', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char8_t>::iterator r5ret3201(int seed);`),
        unions: parseUnion(`std::vector<char8_t>::iterator r5ret3201(int seed);`),
        structs: parseStruct(`std::vector<char8_t>::iterator r5ret3201(int seed);`),
        classes: parseClass(`std::vector<char8_t>::iterator r5ret3201(int seed);`),
        funcs: parseFunction(`std::vector<char8_t>::iterator r5ret3201(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3201 生成结果为空');
      const expectSnippet0 = 'export function r5ret3201(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3201 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3201 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3202
  * @tc.name : h2dts_gen_3202
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3202', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char16_t>::iterator r5ret3202(int seed);`),
        unions: parseUnion(`std::vector<char16_t>::iterator r5ret3202(int seed);`),
        structs: parseStruct(`std::vector<char16_t>::iterator r5ret3202(int seed);`),
        classes: parseClass(`std::vector<char16_t>::iterator r5ret3202(int seed);`),
        funcs: parseFunction(`std::vector<char16_t>::iterator r5ret3202(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3202 生成结果为空');
      const expectSnippet0 = 'export function r5ret3202(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3202 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3202 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3203
  * @tc.name : h2dts_gen_3203
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3203', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char32_t>::iterator r5ret3203(int seed);`),
        unions: parseUnion(`std::vector<char32_t>::iterator r5ret3203(int seed);`),
        structs: parseStruct(`std::vector<char32_t>::iterator r5ret3203(int seed);`),
        classes: parseClass(`std::vector<char32_t>::iterator r5ret3203(int seed);`),
        funcs: parseFunction(`std::vector<char32_t>::iterator r5ret3203(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3203 生成结果为空');
      const expectSnippet0 = 'export function r5ret3203(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3203 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3203 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3204
  * @tc.name : h2dts_gen_3204
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3204', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int> r5ret3204(int seed);`),
        unions: parseUnion(`std::deque<int> r5ret3204(int seed);`),
        structs: parseStruct(`std::deque<int> r5ret3204(int seed);`),
        classes: parseClass(`std::deque<int> r5ret3204(int seed);`),
        funcs: parseFunction(`std::deque<int> r5ret3204(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3204 生成结果为空');
      const expectSnippet0 = 'export function r5ret3204(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3204 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3205
  * @tc.name : h2dts_gen_3205
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3205', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<size_t> r5ret3205(int seed);`),
        unions: parseUnion(`std::deque<size_t> r5ret3205(int seed);`),
        structs: parseStruct(`std::deque<size_t> r5ret3205(int seed);`),
        classes: parseClass(`std::deque<size_t> r5ret3205(int seed);`),
        funcs: parseFunction(`std::deque<size_t> r5ret3205(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3205 生成结果为空');
      const expectSnippet0 = 'export function r5ret3205(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3205 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3206
  * @tc.name : h2dts_gen_3206
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3206', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<double> r5ret3206(int seed);`),
        unions: parseUnion(`std::deque<double> r5ret3206(int seed);`),
        structs: parseStruct(`std::deque<double> r5ret3206(int seed);`),
        classes: parseClass(`std::deque<double> r5ret3206(int seed);`),
        funcs: parseFunction(`std::deque<double> r5ret3206(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3206 生成结果为空');
      const expectSnippet0 = 'export function r5ret3206(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3206 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3207
  * @tc.name : h2dts_gen_3207
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3207', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<float> r5ret3207(int seed);`),
        unions: parseUnion(`std::deque<float> r5ret3207(int seed);`),
        structs: parseStruct(`std::deque<float> r5ret3207(int seed);`),
        classes: parseClass(`std::deque<float> r5ret3207(int seed);`),
        funcs: parseFunction(`std::deque<float> r5ret3207(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3207 生成结果为空');
      const expectSnippet0 = 'export function r5ret3207(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3207 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3207 执行异常: ${String(err)}`);
    }
  });
});
