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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part145.');

  /**
  * @tc.number : h2dts_gen_4892
  * @tc.name : h2dts_gen_4892
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4892', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int16_t> r5ret4892(int seed);`),
        unions: parseUnion(`std::vector<int16_t> r5ret4892(int seed);`),
        structs: parseStruct(`std::vector<int16_t> r5ret4892(int seed);`),
        classes: parseClass(`std::vector<int16_t> r5ret4892(int seed);`),
        funcs: parseFunction(`std::vector<int16_t> r5ret4892(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4892 生成结果为空');
      const expectSnippet0 = 'export function r5ret4892(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4892 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4892 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4892 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4893
  * @tc.name : h2dts_gen_4893
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4893', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int32_t> r5ret4893(int seed);`),
        unions: parseUnion(`std::vector<int32_t> r5ret4893(int seed);`),
        structs: parseStruct(`std::vector<int32_t> r5ret4893(int seed);`),
        classes: parseClass(`std::vector<int32_t> r5ret4893(int seed);`),
        funcs: parseFunction(`std::vector<int32_t> r5ret4893(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4893 生成结果为空');
      const expectSnippet0 = 'export function r5ret4893(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4893 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4893 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4893 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4894
  * @tc.name : h2dts_gen_4894
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4894', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int64_t> r5ret4894(int seed);`),
        unions: parseUnion(`std::vector<int64_t> r5ret4894(int seed);`),
        structs: parseStruct(`std::vector<int64_t> r5ret4894(int seed);`),
        classes: parseClass(`std::vector<int64_t> r5ret4894(int seed);`),
        funcs: parseFunction(`std::vector<int64_t> r5ret4894(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4894 生成结果为空');
      const expectSnippet0 = 'export function r5ret4894(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4894 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4894 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4894 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4895
  * @tc.name : h2dts_gen_4895
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4895', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<unsigned> r5ret4895(int seed);`),
        unions: parseUnion(`std::vector<unsigned> r5ret4895(int seed);`),
        structs: parseStruct(`std::vector<unsigned> r5ret4895(int seed);`),
        classes: parseClass(`std::vector<unsigned> r5ret4895(int seed);`),
        funcs: parseFunction(`std::vector<unsigned> r5ret4895(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4895 生成结果为空');
      const expectSnippet0 = 'export function r5ret4895(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4895 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4895 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4895 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4896
  * @tc.name : h2dts_gen_4896
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4896', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<bool> r5ret4896(int seed);`),
        unions: parseUnion(`std::vector<bool> r5ret4896(int seed);`),
        structs: parseStruct(`std::vector<bool> r5ret4896(int seed);`),
        classes: parseClass(`std::vector<bool> r5ret4896(int seed);`),
        funcs: parseFunction(`std::vector<bool> r5ret4896(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4896 生成结果为空');
      const expectSnippet0 = 'export function r5ret4896(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4896 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4896 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4896 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4897
  * @tc.name : h2dts_gen_4897
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4897', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char> r5ret4897(int seed);`),
        unions: parseUnion(`std::vector<char> r5ret4897(int seed);`),
        structs: parseStruct(`std::vector<char> r5ret4897(int seed);`),
        classes: parseClass(`std::vector<char> r5ret4897(int seed);`),
        funcs: parseFunction(`std::vector<char> r5ret4897(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4897 生成结果为空');
      const expectSnippet0 = 'export function r5ret4897(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4897 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4897 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4897 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4898
  * @tc.name : h2dts_gen_4898
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4898', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<wchar_t> r5ret4898(int seed);`),
        unions: parseUnion(`std::vector<wchar_t> r5ret4898(int seed);`),
        structs: parseStruct(`std::vector<wchar_t> r5ret4898(int seed);`),
        classes: parseClass(`std::vector<wchar_t> r5ret4898(int seed);`),
        funcs: parseFunction(`std::vector<wchar_t> r5ret4898(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4898 生成结果为空');
      const expectSnippet0 = 'export function r5ret4898(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4898 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4898 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4898 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4899
  * @tc.name : h2dts_gen_4899
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4899', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char8_t> r5ret4899(int seed);`),
        unions: parseUnion(`std::vector<char8_t> r5ret4899(int seed);`),
        structs: parseStruct(`std::vector<char8_t> r5ret4899(int seed);`),
        classes: parseClass(`std::vector<char8_t> r5ret4899(int seed);`),
        funcs: parseFunction(`std::vector<char8_t> r5ret4899(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4899 生成结果为空');
      const expectSnippet0 = 'export function r5ret4899(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4899 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4899 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4899 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4900
  * @tc.name : h2dts_gen_4900
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4900', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char16_t> r5ret4900(int seed);`),
        unions: parseUnion(`std::vector<char16_t> r5ret4900(int seed);`),
        structs: parseStruct(`std::vector<char16_t> r5ret4900(int seed);`),
        classes: parseClass(`std::vector<char16_t> r5ret4900(int seed);`),
        funcs: parseFunction(`std::vector<char16_t> r5ret4900(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4900 生成结果为空');
      const expectSnippet0 = 'export function r5ret4900(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4900 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4900 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4900 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4901
  * @tc.name : h2dts_gen_4901
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4901', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char32_t> r5ret4901(int seed);`),
        unions: parseUnion(`std::vector<char32_t> r5ret4901(int seed);`),
        structs: parseStruct(`std::vector<char32_t> r5ret4901(int seed);`),
        classes: parseClass(`std::vector<char32_t> r5ret4901(int seed);`),
        funcs: parseFunction(`std::vector<char32_t> r5ret4901(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4901 生成结果为空');
      const expectSnippet0 = 'export function r5ret4901(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4901 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4901 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4901 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4902
  * @tc.name : h2dts_gen_4902
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4902', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int>::iterator r5ret4902(int seed);`),
        unions: parseUnion(`std::vector<int>::iterator r5ret4902(int seed);`),
        structs: parseStruct(`std::vector<int>::iterator r5ret4902(int seed);`),
        classes: parseClass(`std::vector<int>::iterator r5ret4902(int seed);`),
        funcs: parseFunction(`std::vector<int>::iterator r5ret4902(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4902 生成结果为空');
      const expectSnippet0 = 'export function r5ret4902(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4902 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4902 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4902 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4903
  * @tc.name : h2dts_gen_4903
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4903', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<size_t>::iterator r5ret4903(int seed);`),
        unions: parseUnion(`std::vector<size_t>::iterator r5ret4903(int seed);`),
        structs: parseStruct(`std::vector<size_t>::iterator r5ret4903(int seed);`),
        classes: parseClass(`std::vector<size_t>::iterator r5ret4903(int seed);`),
        funcs: parseFunction(`std::vector<size_t>::iterator r5ret4903(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4903 生成结果为空');
      const expectSnippet0 = 'export function r5ret4903(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4903 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4903 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4903 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4904
  * @tc.name : h2dts_gen_4904
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4904', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<double>::iterator r5ret4904(int seed);`),
        unions: parseUnion(`std::vector<double>::iterator r5ret4904(int seed);`),
        structs: parseStruct(`std::vector<double>::iterator r5ret4904(int seed);`),
        classes: parseClass(`std::vector<double>::iterator r5ret4904(int seed);`),
        funcs: parseFunction(`std::vector<double>::iterator r5ret4904(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4904 生成结果为空');
      const expectSnippet0 = 'export function r5ret4904(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4904 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4904 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4904 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4905
  * @tc.name : h2dts_gen_4905
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4905', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<float>::iterator r5ret4905(int seed);`),
        unions: parseUnion(`std::vector<float>::iterator r5ret4905(int seed);`),
        structs: parseStruct(`std::vector<float>::iterator r5ret4905(int seed);`),
        classes: parseClass(`std::vector<float>::iterator r5ret4905(int seed);`),
        funcs: parseFunction(`std::vector<float>::iterator r5ret4905(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4905 生成结果为空');
      const expectSnippet0 = 'export function r5ret4905(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4905 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4905 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4905 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4906
  * @tc.name : h2dts_gen_4906
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4906', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<long>::iterator r5ret4906(int seed);`),
        unions: parseUnion(`std::vector<long>::iterator r5ret4906(int seed);`),
        structs: parseStruct(`std::vector<long>::iterator r5ret4906(int seed);`),
        classes: parseClass(`std::vector<long>::iterator r5ret4906(int seed);`),
        funcs: parseFunction(`std::vector<long>::iterator r5ret4906(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4906 生成结果为空');
      const expectSnippet0 = 'export function r5ret4906(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4906 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4906 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4906 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4907
  * @tc.name : h2dts_gen_4907
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4907', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<short>::iterator r5ret4907(int seed);`),
        unions: parseUnion(`std::vector<short>::iterator r5ret4907(int seed);`),
        structs: parseStruct(`std::vector<short>::iterator r5ret4907(int seed);`),
        classes: parseClass(`std::vector<short>::iterator r5ret4907(int seed);`),
        funcs: parseFunction(`std::vector<short>::iterator r5ret4907(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4907 生成结果为空');
      const expectSnippet0 = 'export function r5ret4907(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4907 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4907 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4907 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4908
  * @tc.name : h2dts_gen_4908
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4908', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint8_t>::iterator r5ret4908(int seed);`),
        unions: parseUnion(`std::vector<uint8_t>::iterator r5ret4908(int seed);`),
        structs: parseStruct(`std::vector<uint8_t>::iterator r5ret4908(int seed);`),
        classes: parseClass(`std::vector<uint8_t>::iterator r5ret4908(int seed);`),
        funcs: parseFunction(`std::vector<uint8_t>::iterator r5ret4908(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4908 生成结果为空');
      const expectSnippet0 = 'export function r5ret4908(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4908 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4908 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4908 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4909
  * @tc.name : h2dts_gen_4909
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4909', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint16_t>::iterator r5ret4909(int seed);`),
        unions: parseUnion(`std::vector<uint16_t>::iterator r5ret4909(int seed);`),
        structs: parseStruct(`std::vector<uint16_t>::iterator r5ret4909(int seed);`),
        classes: parseClass(`std::vector<uint16_t>::iterator r5ret4909(int seed);`),
        funcs: parseFunction(`std::vector<uint16_t>::iterator r5ret4909(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4909 生成结果为空');
      const expectSnippet0 = 'export function r5ret4909(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4909 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4909 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4909 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4910
  * @tc.name : h2dts_gen_4910
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4910', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint32_t>::iterator r5ret4910(int seed);`),
        unions: parseUnion(`std::vector<uint32_t>::iterator r5ret4910(int seed);`),
        structs: parseStruct(`std::vector<uint32_t>::iterator r5ret4910(int seed);`),
        classes: parseClass(`std::vector<uint32_t>::iterator r5ret4910(int seed);`),
        funcs: parseFunction(`std::vector<uint32_t>::iterator r5ret4910(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4910 生成结果为空');
      const expectSnippet0 = 'export function r5ret4910(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4910 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4910 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4910 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4911
  * @tc.name : h2dts_gen_4911
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4911', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint64_t>::iterator r5ret4911(int seed);`),
        unions: parseUnion(`std::vector<uint64_t>::iterator r5ret4911(int seed);`),
        structs: parseStruct(`std::vector<uint64_t>::iterator r5ret4911(int seed);`),
        classes: parseClass(`std::vector<uint64_t>::iterator r5ret4911(int seed);`),
        funcs: parseFunction(`std::vector<uint64_t>::iterator r5ret4911(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4911 生成结果为空');
      const expectSnippet0 = 'export function r5ret4911(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4911 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4911 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4911 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4912
  * @tc.name : h2dts_gen_4912
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4912', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int8_t>::iterator r5ret4912(int seed);`),
        unions: parseUnion(`std::vector<int8_t>::iterator r5ret4912(int seed);`),
        structs: parseStruct(`std::vector<int8_t>::iterator r5ret4912(int seed);`),
        classes: parseClass(`std::vector<int8_t>::iterator r5ret4912(int seed);`),
        funcs: parseFunction(`std::vector<int8_t>::iterator r5ret4912(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4912 生成结果为空');
      const expectSnippet0 = 'export function r5ret4912(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4912 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4912 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4912 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4913
  * @tc.name : h2dts_gen_4913
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4913', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int16_t>::iterator r5ret4913(int seed);`),
        unions: parseUnion(`std::vector<int16_t>::iterator r5ret4913(int seed);`),
        structs: parseStruct(`std::vector<int16_t>::iterator r5ret4913(int seed);`),
        classes: parseClass(`std::vector<int16_t>::iterator r5ret4913(int seed);`),
        funcs: parseFunction(`std::vector<int16_t>::iterator r5ret4913(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4913 生成结果为空');
      const expectSnippet0 = 'export function r5ret4913(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4913 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4913 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4913 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4914
  * @tc.name : h2dts_gen_4914
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4914', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int32_t>::iterator r5ret4914(int seed);`),
        unions: parseUnion(`std::vector<int32_t>::iterator r5ret4914(int seed);`),
        structs: parseStruct(`std::vector<int32_t>::iterator r5ret4914(int seed);`),
        classes: parseClass(`std::vector<int32_t>::iterator r5ret4914(int seed);`),
        funcs: parseFunction(`std::vector<int32_t>::iterator r5ret4914(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4914 生成结果为空');
      const expectSnippet0 = 'export function r5ret4914(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4914 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4914 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4914 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4915
  * @tc.name : h2dts_gen_4915
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4915', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int64_t>::iterator r5ret4915(int seed);`),
        unions: parseUnion(`std::vector<int64_t>::iterator r5ret4915(int seed);`),
        structs: parseStruct(`std::vector<int64_t>::iterator r5ret4915(int seed);`),
        classes: parseClass(`std::vector<int64_t>::iterator r5ret4915(int seed);`),
        funcs: parseFunction(`std::vector<int64_t>::iterator r5ret4915(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4915 生成结果为空');
      const expectSnippet0 = 'export function r5ret4915(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4915 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4915 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4915 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4916
  * @tc.name : h2dts_gen_4916
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4916', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<unsigned>::iterator r5ret4916(int seed);`),
        unions: parseUnion(`std::vector<unsigned>::iterator r5ret4916(int seed);`),
        structs: parseStruct(`std::vector<unsigned>::iterator r5ret4916(int seed);`),
        classes: parseClass(`std::vector<unsigned>::iterator r5ret4916(int seed);`),
        funcs: parseFunction(`std::vector<unsigned>::iterator r5ret4916(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4916 生成结果为空');
      const expectSnippet0 = 'export function r5ret4916(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4916 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4916 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4916 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4917
  * @tc.name : h2dts_gen_4917
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4917', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<bool>::iterator r5ret4917(int seed);`),
        unions: parseUnion(`std::vector<bool>::iterator r5ret4917(int seed);`),
        structs: parseStruct(`std::vector<bool>::iterator r5ret4917(int seed);`),
        classes: parseClass(`std::vector<bool>::iterator r5ret4917(int seed);`),
        funcs: parseFunction(`std::vector<bool>::iterator r5ret4917(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4917 生成结果为空');
      const expectSnippet0 = 'export function r5ret4917(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4917 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4917 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4917 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4918
  * @tc.name : h2dts_gen_4918
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4918', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char>::iterator r5ret4918(int seed);`),
        unions: parseUnion(`std::vector<char>::iterator r5ret4918(int seed);`),
        structs: parseStruct(`std::vector<char>::iterator r5ret4918(int seed);`),
        classes: parseClass(`std::vector<char>::iterator r5ret4918(int seed);`),
        funcs: parseFunction(`std::vector<char>::iterator r5ret4918(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4918 生成结果为空');
      const expectSnippet0 = 'export function r5ret4918(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4918 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4918 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4918 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4919
  * @tc.name : h2dts_gen_4919
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4919', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<wchar_t>::iterator r5ret4919(int seed);`),
        unions: parseUnion(`std::vector<wchar_t>::iterator r5ret4919(int seed);`),
        structs: parseStruct(`std::vector<wchar_t>::iterator r5ret4919(int seed);`),
        classes: parseClass(`std::vector<wchar_t>::iterator r5ret4919(int seed);`),
        funcs: parseFunction(`std::vector<wchar_t>::iterator r5ret4919(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4919 生成结果为空');
      const expectSnippet0 = 'export function r5ret4919(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4919 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4919 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4919 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4920
  * @tc.name : h2dts_gen_4920
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4920', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char8_t>::iterator r5ret4920(int seed);`),
        unions: parseUnion(`std::vector<char8_t>::iterator r5ret4920(int seed);`),
        structs: parseStruct(`std::vector<char8_t>::iterator r5ret4920(int seed);`),
        classes: parseClass(`std::vector<char8_t>::iterator r5ret4920(int seed);`),
        funcs: parseFunction(`std::vector<char8_t>::iterator r5ret4920(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4920 生成结果为空');
      const expectSnippet0 = 'export function r5ret4920(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4920 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4920 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4920 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4921
  * @tc.name : h2dts_gen_4921
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4921', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char16_t>::iterator r5ret4921(int seed);`),
        unions: parseUnion(`std::vector<char16_t>::iterator r5ret4921(int seed);`),
        structs: parseStruct(`std::vector<char16_t>::iterator r5ret4921(int seed);`),
        classes: parseClass(`std::vector<char16_t>::iterator r5ret4921(int seed);`),
        funcs: parseFunction(`std::vector<char16_t>::iterator r5ret4921(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4921 生成结果为空');
      const expectSnippet0 = 'export function r5ret4921(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4921 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4921 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4921 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4922
  * @tc.name : h2dts_gen_4922
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4922', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char32_t>::iterator r5ret4922(int seed);`),
        unions: parseUnion(`std::vector<char32_t>::iterator r5ret4922(int seed);`),
        structs: parseStruct(`std::vector<char32_t>::iterator r5ret4922(int seed);`),
        classes: parseClass(`std::vector<char32_t>::iterator r5ret4922(int seed);`),
        funcs: parseFunction(`std::vector<char32_t>::iterator r5ret4922(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4922 生成结果为空');
      const expectSnippet0 = 'export function r5ret4922(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4922 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4922 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4922 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4923
  * @tc.name : h2dts_gen_4923
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4923', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int> r5ret4923(int seed);`),
        unions: parseUnion(`std::deque<int> r5ret4923(int seed);`),
        structs: parseStruct(`std::deque<int> r5ret4923(int seed);`),
        classes: parseClass(`std::deque<int> r5ret4923(int seed);`),
        funcs: parseFunction(`std::deque<int> r5ret4923(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4923 生成结果为空');
      const expectSnippet0 = 'export function r5ret4923(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4923 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4923 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4923 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4924
  * @tc.name : h2dts_gen_4924
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4924', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<size_t> r5ret4924(int seed);`),
        unions: parseUnion(`std::deque<size_t> r5ret4924(int seed);`),
        structs: parseStruct(`std::deque<size_t> r5ret4924(int seed);`),
        classes: parseClass(`std::deque<size_t> r5ret4924(int seed);`),
        funcs: parseFunction(`std::deque<size_t> r5ret4924(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4924 生成结果为空');
      const expectSnippet0 = 'export function r5ret4924(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4924 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4924 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4924 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4925
  * @tc.name : h2dts_gen_4925
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4925', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<double> r5ret4925(int seed);`),
        unions: parseUnion(`std::deque<double> r5ret4925(int seed);`),
        structs: parseStruct(`std::deque<double> r5ret4925(int seed);`),
        classes: parseClass(`std::deque<double> r5ret4925(int seed);`),
        funcs: parseFunction(`std::deque<double> r5ret4925(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4925 生成结果为空');
      const expectSnippet0 = 'export function r5ret4925(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4925 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4925 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4925 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4926
  * @tc.name : h2dts_gen_4926
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4926', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<float> r5ret4926(int seed);`),
        unions: parseUnion(`std::deque<float> r5ret4926(int seed);`),
        structs: parseStruct(`std::deque<float> r5ret4926(int seed);`),
        classes: parseClass(`std::deque<float> r5ret4926(int seed);`),
        funcs: parseFunction(`std::deque<float> r5ret4926(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4926 生成结果为空');
      const expectSnippet0 = 'export function r5ret4926(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4926 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4926 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4926 执行异常: ${String(err)}`);
    }
  });
});
