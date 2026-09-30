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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part146.');

  /**
  * @tc.number : h2dts_gen_4927
  * @tc.name : h2dts_gen_4927
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4927', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<long> r5ret4927(int seed);`),
        unions: parseUnion(`std::deque<long> r5ret4927(int seed);`),
        structs: parseStruct(`std::deque<long> r5ret4927(int seed);`),
        classes: parseClass(`std::deque<long> r5ret4927(int seed);`),
        funcs: parseFunction(`std::deque<long> r5ret4927(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4927 生成结果为空');
      const expectSnippet0 = 'export function r5ret4927(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4927 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4927 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4927 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4928
  * @tc.name : h2dts_gen_4928
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4928', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<short> r5ret4928(int seed);`),
        unions: parseUnion(`std::deque<short> r5ret4928(int seed);`),
        structs: parseStruct(`std::deque<short> r5ret4928(int seed);`),
        classes: parseClass(`std::deque<short> r5ret4928(int seed);`),
        funcs: parseFunction(`std::deque<short> r5ret4928(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4928 生成结果为空');
      const expectSnippet0 = 'export function r5ret4928(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4928 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4928 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4928 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4929
  * @tc.name : h2dts_gen_4929
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4929', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint8_t> r5ret4929(int seed);`),
        unions: parseUnion(`std::deque<uint8_t> r5ret4929(int seed);`),
        structs: parseStruct(`std::deque<uint8_t> r5ret4929(int seed);`),
        classes: parseClass(`std::deque<uint8_t> r5ret4929(int seed);`),
        funcs: parseFunction(`std::deque<uint8_t> r5ret4929(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4929 生成结果为空');
      const expectSnippet0 = 'export function r5ret4929(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4929 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4929 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4929 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4930
  * @tc.name : h2dts_gen_4930
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4930', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint16_t> r5ret4930(int seed);`),
        unions: parseUnion(`std::deque<uint16_t> r5ret4930(int seed);`),
        structs: parseStruct(`std::deque<uint16_t> r5ret4930(int seed);`),
        classes: parseClass(`std::deque<uint16_t> r5ret4930(int seed);`),
        funcs: parseFunction(`std::deque<uint16_t> r5ret4930(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4930 生成结果为空');
      const expectSnippet0 = 'export function r5ret4930(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4930 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4930 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4930 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4931
  * @tc.name : h2dts_gen_4931
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4931', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint32_t> r5ret4931(int seed);`),
        unions: parseUnion(`std::deque<uint32_t> r5ret4931(int seed);`),
        structs: parseStruct(`std::deque<uint32_t> r5ret4931(int seed);`),
        classes: parseClass(`std::deque<uint32_t> r5ret4931(int seed);`),
        funcs: parseFunction(`std::deque<uint32_t> r5ret4931(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4931 生成结果为空');
      const expectSnippet0 = 'export function r5ret4931(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4931 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4931 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4931 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4932
  * @tc.name : h2dts_gen_4932
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4932', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint64_t> r5ret4932(int seed);`),
        unions: parseUnion(`std::deque<uint64_t> r5ret4932(int seed);`),
        structs: parseStruct(`std::deque<uint64_t> r5ret4932(int seed);`),
        classes: parseClass(`std::deque<uint64_t> r5ret4932(int seed);`),
        funcs: parseFunction(`std::deque<uint64_t> r5ret4932(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4932 生成结果为空');
      const expectSnippet0 = 'export function r5ret4932(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4932 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4932 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4932 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4933
  * @tc.name : h2dts_gen_4933
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4933', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int8_t> r5ret4933(int seed);`),
        unions: parseUnion(`std::deque<int8_t> r5ret4933(int seed);`),
        structs: parseStruct(`std::deque<int8_t> r5ret4933(int seed);`),
        classes: parseClass(`std::deque<int8_t> r5ret4933(int seed);`),
        funcs: parseFunction(`std::deque<int8_t> r5ret4933(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4933 生成结果为空');
      const expectSnippet0 = 'export function r5ret4933(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4933 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4933 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4933 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4934
  * @tc.name : h2dts_gen_4934
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4934', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int16_t> r5ret4934(int seed);`),
        unions: parseUnion(`std::deque<int16_t> r5ret4934(int seed);`),
        structs: parseStruct(`std::deque<int16_t> r5ret4934(int seed);`),
        classes: parseClass(`std::deque<int16_t> r5ret4934(int seed);`),
        funcs: parseFunction(`std::deque<int16_t> r5ret4934(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4934 生成结果为空');
      const expectSnippet0 = 'export function r5ret4934(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4934 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4934 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4934 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4935
  * @tc.name : h2dts_gen_4935
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4935', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int32_t> r5ret4935(int seed);`),
        unions: parseUnion(`std::deque<int32_t> r5ret4935(int seed);`),
        structs: parseStruct(`std::deque<int32_t> r5ret4935(int seed);`),
        classes: parseClass(`std::deque<int32_t> r5ret4935(int seed);`),
        funcs: parseFunction(`std::deque<int32_t> r5ret4935(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4935 生成结果为空');
      const expectSnippet0 = 'export function r5ret4935(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4935 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4935 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4935 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4936
  * @tc.name : h2dts_gen_4936
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4936', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int64_t> r5ret4936(int seed);`),
        unions: parseUnion(`std::deque<int64_t> r5ret4936(int seed);`),
        structs: parseStruct(`std::deque<int64_t> r5ret4936(int seed);`),
        classes: parseClass(`std::deque<int64_t> r5ret4936(int seed);`),
        funcs: parseFunction(`std::deque<int64_t> r5ret4936(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4936 生成结果为空');
      const expectSnippet0 = 'export function r5ret4936(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4936 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4936 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4936 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4937
  * @tc.name : h2dts_gen_4937
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4937', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<unsigned> r5ret4937(int seed);`),
        unions: parseUnion(`std::deque<unsigned> r5ret4937(int seed);`),
        structs: parseStruct(`std::deque<unsigned> r5ret4937(int seed);`),
        classes: parseClass(`std::deque<unsigned> r5ret4937(int seed);`),
        funcs: parseFunction(`std::deque<unsigned> r5ret4937(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4937 生成结果为空');
      const expectSnippet0 = 'export function r5ret4937(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4937 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4937 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4937 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4938
  * @tc.name : h2dts_gen_4938
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4938', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<bool> r5ret4938(int seed);`),
        unions: parseUnion(`std::deque<bool> r5ret4938(int seed);`),
        structs: parseStruct(`std::deque<bool> r5ret4938(int seed);`),
        classes: parseClass(`std::deque<bool> r5ret4938(int seed);`),
        funcs: parseFunction(`std::deque<bool> r5ret4938(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4938 生成结果为空');
      const expectSnippet0 = 'export function r5ret4938(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4938 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4938 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4938 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4939
  * @tc.name : h2dts_gen_4939
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4939', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char> r5ret4939(int seed);`),
        unions: parseUnion(`std::deque<char> r5ret4939(int seed);`),
        structs: parseStruct(`std::deque<char> r5ret4939(int seed);`),
        classes: parseClass(`std::deque<char> r5ret4939(int seed);`),
        funcs: parseFunction(`std::deque<char> r5ret4939(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4939 生成结果为空');
      const expectSnippet0 = 'export function r5ret4939(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4939 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4939 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4939 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4940
  * @tc.name : h2dts_gen_4940
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4940', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<wchar_t> r5ret4940(int seed);`),
        unions: parseUnion(`std::deque<wchar_t> r5ret4940(int seed);`),
        structs: parseStruct(`std::deque<wchar_t> r5ret4940(int seed);`),
        classes: parseClass(`std::deque<wchar_t> r5ret4940(int seed);`),
        funcs: parseFunction(`std::deque<wchar_t> r5ret4940(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4940 生成结果为空');
      const expectSnippet0 = 'export function r5ret4940(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4940 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4940 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4940 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4941
  * @tc.name : h2dts_gen_4941
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4941', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char8_t> r5ret4941(int seed);`),
        unions: parseUnion(`std::deque<char8_t> r5ret4941(int seed);`),
        structs: parseStruct(`std::deque<char8_t> r5ret4941(int seed);`),
        classes: parseClass(`std::deque<char8_t> r5ret4941(int seed);`),
        funcs: parseFunction(`std::deque<char8_t> r5ret4941(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4941 生成结果为空');
      const expectSnippet0 = 'export function r5ret4941(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4941 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4941 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4941 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4942
  * @tc.name : h2dts_gen_4942
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4942', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char16_t> r5ret4942(int seed);`),
        unions: parseUnion(`std::deque<char16_t> r5ret4942(int seed);`),
        structs: parseStruct(`std::deque<char16_t> r5ret4942(int seed);`),
        classes: parseClass(`std::deque<char16_t> r5ret4942(int seed);`),
        funcs: parseFunction(`std::deque<char16_t> r5ret4942(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4942 生成结果为空');
      const expectSnippet0 = 'export function r5ret4942(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4942 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4942 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4942 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4943
  * @tc.name : h2dts_gen_4943
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4943', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char32_t> r5ret4943(int seed);`),
        unions: parseUnion(`std::deque<char32_t> r5ret4943(int seed);`),
        structs: parseStruct(`std::deque<char32_t> r5ret4943(int seed);`),
        classes: parseClass(`std::deque<char32_t> r5ret4943(int seed);`),
        funcs: parseFunction(`std::deque<char32_t> r5ret4943(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4943 生成结果为空');
      const expectSnippet0 = 'export function r5ret4943(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4943 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4943 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4943 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4944
  * @tc.name : h2dts_gen_4944
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4944', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int>::iterator r5ret4944(int seed);`),
        unions: parseUnion(`std::deque<int>::iterator r5ret4944(int seed);`),
        structs: parseStruct(`std::deque<int>::iterator r5ret4944(int seed);`),
        classes: parseClass(`std::deque<int>::iterator r5ret4944(int seed);`),
        funcs: parseFunction(`std::deque<int>::iterator r5ret4944(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4944 生成结果为空');
      const expectSnippet0 = 'export function r5ret4944(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4944 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4944 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4944 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4945
  * @tc.name : h2dts_gen_4945
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4945', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<size_t>::iterator r5ret4945(int seed);`),
        unions: parseUnion(`std::deque<size_t>::iterator r5ret4945(int seed);`),
        structs: parseStruct(`std::deque<size_t>::iterator r5ret4945(int seed);`),
        classes: parseClass(`std::deque<size_t>::iterator r5ret4945(int seed);`),
        funcs: parseFunction(`std::deque<size_t>::iterator r5ret4945(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4945 生成结果为空');
      const expectSnippet0 = 'export function r5ret4945(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4945 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4945 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4945 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4946
  * @tc.name : h2dts_gen_4946
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4946', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<double>::iterator r5ret4946(int seed);`),
        unions: parseUnion(`std::deque<double>::iterator r5ret4946(int seed);`),
        structs: parseStruct(`std::deque<double>::iterator r5ret4946(int seed);`),
        classes: parseClass(`std::deque<double>::iterator r5ret4946(int seed);`),
        funcs: parseFunction(`std::deque<double>::iterator r5ret4946(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4946 生成结果为空');
      const expectSnippet0 = 'export function r5ret4946(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4946 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4946 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4946 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4947
  * @tc.name : h2dts_gen_4947
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4947', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<float>::iterator r5ret4947(int seed);`),
        unions: parseUnion(`std::deque<float>::iterator r5ret4947(int seed);`),
        structs: parseStruct(`std::deque<float>::iterator r5ret4947(int seed);`),
        classes: parseClass(`std::deque<float>::iterator r5ret4947(int seed);`),
        funcs: parseFunction(`std::deque<float>::iterator r5ret4947(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4947 生成结果为空');
      const expectSnippet0 = 'export function r5ret4947(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4947 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4947 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4947 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4948
  * @tc.name : h2dts_gen_4948
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4948', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<long>::iterator r5ret4948(int seed);`),
        unions: parseUnion(`std::deque<long>::iterator r5ret4948(int seed);`),
        structs: parseStruct(`std::deque<long>::iterator r5ret4948(int seed);`),
        classes: parseClass(`std::deque<long>::iterator r5ret4948(int seed);`),
        funcs: parseFunction(`std::deque<long>::iterator r5ret4948(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4948 生成结果为空');
      const expectSnippet0 = 'export function r5ret4948(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4948 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4948 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4948 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4949
  * @tc.name : h2dts_gen_4949
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4949', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<short>::iterator r5ret4949(int seed);`),
        unions: parseUnion(`std::deque<short>::iterator r5ret4949(int seed);`),
        structs: parseStruct(`std::deque<short>::iterator r5ret4949(int seed);`),
        classes: parseClass(`std::deque<short>::iterator r5ret4949(int seed);`),
        funcs: parseFunction(`std::deque<short>::iterator r5ret4949(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4949 生成结果为空');
      const expectSnippet0 = 'export function r5ret4949(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4949 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4949 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4949 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4950
  * @tc.name : h2dts_gen_4950
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4950', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint8_t>::iterator r5ret4950(int seed);`),
        unions: parseUnion(`std::deque<uint8_t>::iterator r5ret4950(int seed);`),
        structs: parseStruct(`std::deque<uint8_t>::iterator r5ret4950(int seed);`),
        classes: parseClass(`std::deque<uint8_t>::iterator r5ret4950(int seed);`),
        funcs: parseFunction(`std::deque<uint8_t>::iterator r5ret4950(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4950 生成结果为空');
      const expectSnippet0 = 'export function r5ret4950(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4950 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4950 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4950 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4951
  * @tc.name : h2dts_gen_4951
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4951', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint16_t>::iterator r5ret4951(int seed);`),
        unions: parseUnion(`std::deque<uint16_t>::iterator r5ret4951(int seed);`),
        structs: parseStruct(`std::deque<uint16_t>::iterator r5ret4951(int seed);`),
        classes: parseClass(`std::deque<uint16_t>::iterator r5ret4951(int seed);`),
        funcs: parseFunction(`std::deque<uint16_t>::iterator r5ret4951(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4951 生成结果为空');
      const expectSnippet0 = 'export function r5ret4951(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4951 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4951 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4951 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4952
  * @tc.name : h2dts_gen_4952
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4952', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint32_t>::iterator r5ret4952(int seed);`),
        unions: parseUnion(`std::deque<uint32_t>::iterator r5ret4952(int seed);`),
        structs: parseStruct(`std::deque<uint32_t>::iterator r5ret4952(int seed);`),
        classes: parseClass(`std::deque<uint32_t>::iterator r5ret4952(int seed);`),
        funcs: parseFunction(`std::deque<uint32_t>::iterator r5ret4952(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4952 生成结果为空');
      const expectSnippet0 = 'export function r5ret4952(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4952 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4952 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4952 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4953
  * @tc.name : h2dts_gen_4953
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4953', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint64_t>::iterator r5ret4953(int seed);`),
        unions: parseUnion(`std::deque<uint64_t>::iterator r5ret4953(int seed);`),
        structs: parseStruct(`std::deque<uint64_t>::iterator r5ret4953(int seed);`),
        classes: parseClass(`std::deque<uint64_t>::iterator r5ret4953(int seed);`),
        funcs: parseFunction(`std::deque<uint64_t>::iterator r5ret4953(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4953 生成结果为空');
      const expectSnippet0 = 'export function r5ret4953(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4953 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4953 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4953 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4954
  * @tc.name : h2dts_gen_4954
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4954', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int8_t>::iterator r5ret4954(int seed);`),
        unions: parseUnion(`std::deque<int8_t>::iterator r5ret4954(int seed);`),
        structs: parseStruct(`std::deque<int8_t>::iterator r5ret4954(int seed);`),
        classes: parseClass(`std::deque<int8_t>::iterator r5ret4954(int seed);`),
        funcs: parseFunction(`std::deque<int8_t>::iterator r5ret4954(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4954 生成结果为空');
      const expectSnippet0 = 'export function r5ret4954(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4954 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4954 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4954 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4955
  * @tc.name : h2dts_gen_4955
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4955', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int16_t>::iterator r5ret4955(int seed);`),
        unions: parseUnion(`std::deque<int16_t>::iterator r5ret4955(int seed);`),
        structs: parseStruct(`std::deque<int16_t>::iterator r5ret4955(int seed);`),
        classes: parseClass(`std::deque<int16_t>::iterator r5ret4955(int seed);`),
        funcs: parseFunction(`std::deque<int16_t>::iterator r5ret4955(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4955 生成结果为空');
      const expectSnippet0 = 'export function r5ret4955(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4955 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4955 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4955 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4956
  * @tc.name : h2dts_gen_4956
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4956', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int32_t>::iterator r5ret4956(int seed);`),
        unions: parseUnion(`std::deque<int32_t>::iterator r5ret4956(int seed);`),
        structs: parseStruct(`std::deque<int32_t>::iterator r5ret4956(int seed);`),
        classes: parseClass(`std::deque<int32_t>::iterator r5ret4956(int seed);`),
        funcs: parseFunction(`std::deque<int32_t>::iterator r5ret4956(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4956 生成结果为空');
      const expectSnippet0 = 'export function r5ret4956(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4956 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4956 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4956 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4957
  * @tc.name : h2dts_gen_4957
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4957', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int64_t>::iterator r5ret4957(int seed);`),
        unions: parseUnion(`std::deque<int64_t>::iterator r5ret4957(int seed);`),
        structs: parseStruct(`std::deque<int64_t>::iterator r5ret4957(int seed);`),
        classes: parseClass(`std::deque<int64_t>::iterator r5ret4957(int seed);`),
        funcs: parseFunction(`std::deque<int64_t>::iterator r5ret4957(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4957 生成结果为空');
      const expectSnippet0 = 'export function r5ret4957(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4957 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4957 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4957 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4958
  * @tc.name : h2dts_gen_4958
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4958', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<unsigned>::iterator r5ret4958(int seed);`),
        unions: parseUnion(`std::deque<unsigned>::iterator r5ret4958(int seed);`),
        structs: parseStruct(`std::deque<unsigned>::iterator r5ret4958(int seed);`),
        classes: parseClass(`std::deque<unsigned>::iterator r5ret4958(int seed);`),
        funcs: parseFunction(`std::deque<unsigned>::iterator r5ret4958(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4958 生成结果为空');
      const expectSnippet0 = 'export function r5ret4958(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4958 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4958 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4958 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4959
  * @tc.name : h2dts_gen_4959
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4959', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<bool>::iterator r5ret4959(int seed);`),
        unions: parseUnion(`std::deque<bool>::iterator r5ret4959(int seed);`),
        structs: parseStruct(`std::deque<bool>::iterator r5ret4959(int seed);`),
        classes: parseClass(`std::deque<bool>::iterator r5ret4959(int seed);`),
        funcs: parseFunction(`std::deque<bool>::iterator r5ret4959(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4959 生成结果为空');
      const expectSnippet0 = 'export function r5ret4959(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4959 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4959 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4959 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4960
  * @tc.name : h2dts_gen_4960
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4960', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char>::iterator r5ret4960(int seed);`),
        unions: parseUnion(`std::deque<char>::iterator r5ret4960(int seed);`),
        structs: parseStruct(`std::deque<char>::iterator r5ret4960(int seed);`),
        classes: parseClass(`std::deque<char>::iterator r5ret4960(int seed);`),
        funcs: parseFunction(`std::deque<char>::iterator r5ret4960(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4960 生成结果为空');
      const expectSnippet0 = 'export function r5ret4960(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4960 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4960 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4960 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4961
  * @tc.name : h2dts_gen_4961
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4961', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<wchar_t>::iterator r5ret4961(int seed);`),
        unions: parseUnion(`std::deque<wchar_t>::iterator r5ret4961(int seed);`),
        structs: parseStruct(`std::deque<wchar_t>::iterator r5ret4961(int seed);`),
        classes: parseClass(`std::deque<wchar_t>::iterator r5ret4961(int seed);`),
        funcs: parseFunction(`std::deque<wchar_t>::iterator r5ret4961(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4961 生成结果为空');
      const expectSnippet0 = 'export function r5ret4961(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4961 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4961 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4961 执行异常: ${String(err)}`);
    }
  });
});
