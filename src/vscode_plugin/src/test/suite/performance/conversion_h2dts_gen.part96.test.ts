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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part96.');

  /**
  * @tc.number : h2dts_gen_3208
  * @tc.name : h2dts_gen_3208
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3208', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<long> r5ret3208(int seed);`),
        unions: parseUnion(`std::deque<long> r5ret3208(int seed);`),
        structs: parseStruct(`std::deque<long> r5ret3208(int seed);`),
        classes: parseClass(`std::deque<long> r5ret3208(int seed);`),
        funcs: parseFunction(`std::deque<long> r5ret3208(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3208 生成结果为空');
      const expectSnippet0 = 'export function r5ret3208(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3208 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3209
  * @tc.name : h2dts_gen_3209
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3209', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<short> r5ret3209(int seed);`),
        unions: parseUnion(`std::deque<short> r5ret3209(int seed);`),
        structs: parseStruct(`std::deque<short> r5ret3209(int seed);`),
        classes: parseClass(`std::deque<short> r5ret3209(int seed);`),
        funcs: parseFunction(`std::deque<short> r5ret3209(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3209 生成结果为空');
      const expectSnippet0 = 'export function r5ret3209(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3209 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3210
  * @tc.name : h2dts_gen_3210
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3210', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint8_t> r5ret3210(int seed);`),
        unions: parseUnion(`std::deque<uint8_t> r5ret3210(int seed);`),
        structs: parseStruct(`std::deque<uint8_t> r5ret3210(int seed);`),
        classes: parseClass(`std::deque<uint8_t> r5ret3210(int seed);`),
        funcs: parseFunction(`std::deque<uint8_t> r5ret3210(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3210 生成结果为空');
      const expectSnippet0 = 'export function r5ret3210(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3210 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3211
  * @tc.name : h2dts_gen_3211
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3211', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint16_t> r5ret3211(int seed);`),
        unions: parseUnion(`std::deque<uint16_t> r5ret3211(int seed);`),
        structs: parseStruct(`std::deque<uint16_t> r5ret3211(int seed);`),
        classes: parseClass(`std::deque<uint16_t> r5ret3211(int seed);`),
        funcs: parseFunction(`std::deque<uint16_t> r5ret3211(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3211 生成结果为空');
      const expectSnippet0 = 'export function r5ret3211(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3211 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3212
  * @tc.name : h2dts_gen_3212
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3212', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint32_t> r5ret3212(int seed);`),
        unions: parseUnion(`std::deque<uint32_t> r5ret3212(int seed);`),
        structs: parseStruct(`std::deque<uint32_t> r5ret3212(int seed);`),
        classes: parseClass(`std::deque<uint32_t> r5ret3212(int seed);`),
        funcs: parseFunction(`std::deque<uint32_t> r5ret3212(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3212 生成结果为空');
      const expectSnippet0 = 'export function r5ret3212(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3212 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3213
  * @tc.name : h2dts_gen_3213
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3213', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint64_t> r5ret3213(int seed);`),
        unions: parseUnion(`std::deque<uint64_t> r5ret3213(int seed);`),
        structs: parseStruct(`std::deque<uint64_t> r5ret3213(int seed);`),
        classes: parseClass(`std::deque<uint64_t> r5ret3213(int seed);`),
        funcs: parseFunction(`std::deque<uint64_t> r5ret3213(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3213 生成结果为空');
      const expectSnippet0 = 'export function r5ret3213(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3213 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3214
  * @tc.name : h2dts_gen_3214
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3214', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int8_t> r5ret3214(int seed);`),
        unions: parseUnion(`std::deque<int8_t> r5ret3214(int seed);`),
        structs: parseStruct(`std::deque<int8_t> r5ret3214(int seed);`),
        classes: parseClass(`std::deque<int8_t> r5ret3214(int seed);`),
        funcs: parseFunction(`std::deque<int8_t> r5ret3214(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3214 生成结果为空');
      const expectSnippet0 = 'export function r5ret3214(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3214 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3215
  * @tc.name : h2dts_gen_3215
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3215', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int16_t> r5ret3215(int seed);`),
        unions: parseUnion(`std::deque<int16_t> r5ret3215(int seed);`),
        structs: parseStruct(`std::deque<int16_t> r5ret3215(int seed);`),
        classes: parseClass(`std::deque<int16_t> r5ret3215(int seed);`),
        funcs: parseFunction(`std::deque<int16_t> r5ret3215(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3215 生成结果为空');
      const expectSnippet0 = 'export function r5ret3215(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3215 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3216
  * @tc.name : h2dts_gen_3216
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3216', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int32_t> r5ret3216(int seed);`),
        unions: parseUnion(`std::deque<int32_t> r5ret3216(int seed);`),
        structs: parseStruct(`std::deque<int32_t> r5ret3216(int seed);`),
        classes: parseClass(`std::deque<int32_t> r5ret3216(int seed);`),
        funcs: parseFunction(`std::deque<int32_t> r5ret3216(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3216 生成结果为空');
      const expectSnippet0 = 'export function r5ret3216(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3216 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3217
  * @tc.name : h2dts_gen_3217
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3217', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int64_t> r5ret3217(int seed);`),
        unions: parseUnion(`std::deque<int64_t> r5ret3217(int seed);`),
        structs: parseStruct(`std::deque<int64_t> r5ret3217(int seed);`),
        classes: parseClass(`std::deque<int64_t> r5ret3217(int seed);`),
        funcs: parseFunction(`std::deque<int64_t> r5ret3217(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3217 生成结果为空');
      const expectSnippet0 = 'export function r5ret3217(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3217 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3217 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3218
  * @tc.name : h2dts_gen_3218
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3218', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<unsigned> r5ret3218(int seed);`),
        unions: parseUnion(`std::deque<unsigned> r5ret3218(int seed);`),
        structs: parseStruct(`std::deque<unsigned> r5ret3218(int seed);`),
        classes: parseClass(`std::deque<unsigned> r5ret3218(int seed);`),
        funcs: parseFunction(`std::deque<unsigned> r5ret3218(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3218 生成结果为空');
      const expectSnippet0 = 'export function r5ret3218(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3218 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3218 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3219
  * @tc.name : h2dts_gen_3219
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3219', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<bool> r5ret3219(int seed);`),
        unions: parseUnion(`std::deque<bool> r5ret3219(int seed);`),
        structs: parseStruct(`std::deque<bool> r5ret3219(int seed);`),
        classes: parseClass(`std::deque<bool> r5ret3219(int seed);`),
        funcs: parseFunction(`std::deque<bool> r5ret3219(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3219 生成结果为空');
      const expectSnippet0 = 'export function r5ret3219(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3219 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3219 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3220
  * @tc.name : h2dts_gen_3220
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3220', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char> r5ret3220(int seed);`),
        unions: parseUnion(`std::deque<char> r5ret3220(int seed);`),
        structs: parseStruct(`std::deque<char> r5ret3220(int seed);`),
        classes: parseClass(`std::deque<char> r5ret3220(int seed);`),
        funcs: parseFunction(`std::deque<char> r5ret3220(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3220 生成结果为空');
      const expectSnippet0 = 'export function r5ret3220(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3220 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3220 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3221
  * @tc.name : h2dts_gen_3221
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3221', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<wchar_t> r5ret3221(int seed);`),
        unions: parseUnion(`std::deque<wchar_t> r5ret3221(int seed);`),
        structs: parseStruct(`std::deque<wchar_t> r5ret3221(int seed);`),
        classes: parseClass(`std::deque<wchar_t> r5ret3221(int seed);`),
        funcs: parseFunction(`std::deque<wchar_t> r5ret3221(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3221 生成结果为空');
      const expectSnippet0 = 'export function r5ret3221(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3221 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3221 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3222
  * @tc.name : h2dts_gen_3222
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3222', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char8_t> r5ret3222(int seed);`),
        unions: parseUnion(`std::deque<char8_t> r5ret3222(int seed);`),
        structs: parseStruct(`std::deque<char8_t> r5ret3222(int seed);`),
        classes: parseClass(`std::deque<char8_t> r5ret3222(int seed);`),
        funcs: parseFunction(`std::deque<char8_t> r5ret3222(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3222 生成结果为空');
      const expectSnippet0 = 'export function r5ret3222(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3222 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3222 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3223
  * @tc.name : h2dts_gen_3223
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3223', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char16_t> r5ret3223(int seed);`),
        unions: parseUnion(`std::deque<char16_t> r5ret3223(int seed);`),
        structs: parseStruct(`std::deque<char16_t> r5ret3223(int seed);`),
        classes: parseClass(`std::deque<char16_t> r5ret3223(int seed);`),
        funcs: parseFunction(`std::deque<char16_t> r5ret3223(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3223 生成结果为空');
      const expectSnippet0 = 'export function r5ret3223(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3223 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3224
  * @tc.name : h2dts_gen_3224
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3224', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char32_t> r5ret3224(int seed);`),
        unions: parseUnion(`std::deque<char32_t> r5ret3224(int seed);`),
        structs: parseStruct(`std::deque<char32_t> r5ret3224(int seed);`),
        classes: parseClass(`std::deque<char32_t> r5ret3224(int seed);`),
        funcs: parseFunction(`std::deque<char32_t> r5ret3224(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3224 生成结果为空');
      const expectSnippet0 = 'export function r5ret3224(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3224 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3225
  * @tc.name : h2dts_gen_3225
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3225', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int>::iterator r5ret3225(int seed);`),
        unions: parseUnion(`std::deque<int>::iterator r5ret3225(int seed);`),
        structs: parseStruct(`std::deque<int>::iterator r5ret3225(int seed);`),
        classes: parseClass(`std::deque<int>::iterator r5ret3225(int seed);`),
        funcs: parseFunction(`std::deque<int>::iterator r5ret3225(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3225 生成结果为空');
      const expectSnippet0 = 'export function r5ret3225(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3225 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3225 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3226
  * @tc.name : h2dts_gen_3226
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3226', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<size_t>::iterator r5ret3226(int seed);`),
        unions: parseUnion(`std::deque<size_t>::iterator r5ret3226(int seed);`),
        structs: parseStruct(`std::deque<size_t>::iterator r5ret3226(int seed);`),
        classes: parseClass(`std::deque<size_t>::iterator r5ret3226(int seed);`),
        funcs: parseFunction(`std::deque<size_t>::iterator r5ret3226(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3226 生成结果为空');
      const expectSnippet0 = 'export function r5ret3226(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3226 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3227
  * @tc.name : h2dts_gen_3227
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3227', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<double>::iterator r5ret3227(int seed);`),
        unions: parseUnion(`std::deque<double>::iterator r5ret3227(int seed);`),
        structs: parseStruct(`std::deque<double>::iterator r5ret3227(int seed);`),
        classes: parseClass(`std::deque<double>::iterator r5ret3227(int seed);`),
        funcs: parseFunction(`std::deque<double>::iterator r5ret3227(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3227 生成结果为空');
      const expectSnippet0 = 'export function r5ret3227(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3227 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3228
  * @tc.name : h2dts_gen_3228
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3228', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<float>::iterator r5ret3228(int seed);`),
        unions: parseUnion(`std::deque<float>::iterator r5ret3228(int seed);`),
        structs: parseStruct(`std::deque<float>::iterator r5ret3228(int seed);`),
        classes: parseClass(`std::deque<float>::iterator r5ret3228(int seed);`),
        funcs: parseFunction(`std::deque<float>::iterator r5ret3228(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3228 生成结果为空');
      const expectSnippet0 = 'export function r5ret3228(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3228 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3229
  * @tc.name : h2dts_gen_3229
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3229', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<long>::iterator r5ret3229(int seed);`),
        unions: parseUnion(`std::deque<long>::iterator r5ret3229(int seed);`),
        structs: parseStruct(`std::deque<long>::iterator r5ret3229(int seed);`),
        classes: parseClass(`std::deque<long>::iterator r5ret3229(int seed);`),
        funcs: parseFunction(`std::deque<long>::iterator r5ret3229(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3229 生成结果为空');
      const expectSnippet0 = 'export function r5ret3229(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3229 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3230
  * @tc.name : h2dts_gen_3230
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3230', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<short>::iterator r5ret3230(int seed);`),
        unions: parseUnion(`std::deque<short>::iterator r5ret3230(int seed);`),
        structs: parseStruct(`std::deque<short>::iterator r5ret3230(int seed);`),
        classes: parseClass(`std::deque<short>::iterator r5ret3230(int seed);`),
        funcs: parseFunction(`std::deque<short>::iterator r5ret3230(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3230 生成结果为空');
      const expectSnippet0 = 'export function r5ret3230(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3230 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3231
  * @tc.name : h2dts_gen_3231
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3231', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint8_t>::iterator r5ret3231(int seed);`),
        unions: parseUnion(`std::deque<uint8_t>::iterator r5ret3231(int seed);`),
        structs: parseStruct(`std::deque<uint8_t>::iterator r5ret3231(int seed);`),
        classes: parseClass(`std::deque<uint8_t>::iterator r5ret3231(int seed);`),
        funcs: parseFunction(`std::deque<uint8_t>::iterator r5ret3231(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3231 生成结果为空');
      const expectSnippet0 = 'export function r5ret3231(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3231 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3232
  * @tc.name : h2dts_gen_3232
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3232', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint16_t>::iterator r5ret3232(int seed);`),
        unions: parseUnion(`std::deque<uint16_t>::iterator r5ret3232(int seed);`),
        structs: parseStruct(`std::deque<uint16_t>::iterator r5ret3232(int seed);`),
        classes: parseClass(`std::deque<uint16_t>::iterator r5ret3232(int seed);`),
        funcs: parseFunction(`std::deque<uint16_t>::iterator r5ret3232(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3232 生成结果为空');
      const expectSnippet0 = 'export function r5ret3232(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3232 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3233
  * @tc.name : h2dts_gen_3233
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3233', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint32_t>::iterator r5ret3233(int seed);`),
        unions: parseUnion(`std::deque<uint32_t>::iterator r5ret3233(int seed);`),
        structs: parseStruct(`std::deque<uint32_t>::iterator r5ret3233(int seed);`),
        classes: parseClass(`std::deque<uint32_t>::iterator r5ret3233(int seed);`),
        funcs: parseFunction(`std::deque<uint32_t>::iterator r5ret3233(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3233 生成结果为空');
      const expectSnippet0 = 'export function r5ret3233(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3233 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3234
  * @tc.name : h2dts_gen_3234
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3234', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<uint64_t>::iterator r5ret3234(int seed);`),
        unions: parseUnion(`std::deque<uint64_t>::iterator r5ret3234(int seed);`),
        structs: parseStruct(`std::deque<uint64_t>::iterator r5ret3234(int seed);`),
        classes: parseClass(`std::deque<uint64_t>::iterator r5ret3234(int seed);`),
        funcs: parseFunction(`std::deque<uint64_t>::iterator r5ret3234(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3234 生成结果为空');
      const expectSnippet0 = 'export function r5ret3234(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3234 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3235
  * @tc.name : h2dts_gen_3235
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3235', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int8_t>::iterator r5ret3235(int seed);`),
        unions: parseUnion(`std::deque<int8_t>::iterator r5ret3235(int seed);`),
        structs: parseStruct(`std::deque<int8_t>::iterator r5ret3235(int seed);`),
        classes: parseClass(`std::deque<int8_t>::iterator r5ret3235(int seed);`),
        funcs: parseFunction(`std::deque<int8_t>::iterator r5ret3235(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3235 生成结果为空');
      const expectSnippet0 = 'export function r5ret3235(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3235 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3236
  * @tc.name : h2dts_gen_3236
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3236', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int16_t>::iterator r5ret3236(int seed);`),
        unions: parseUnion(`std::deque<int16_t>::iterator r5ret3236(int seed);`),
        structs: parseStruct(`std::deque<int16_t>::iterator r5ret3236(int seed);`),
        classes: parseClass(`std::deque<int16_t>::iterator r5ret3236(int seed);`),
        funcs: parseFunction(`std::deque<int16_t>::iterator r5ret3236(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3236 生成结果为空');
      const expectSnippet0 = 'export function r5ret3236(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3236 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3237
  * @tc.name : h2dts_gen_3237
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3237', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int32_t>::iterator r5ret3237(int seed);`),
        unions: parseUnion(`std::deque<int32_t>::iterator r5ret3237(int seed);`),
        structs: parseStruct(`std::deque<int32_t>::iterator r5ret3237(int seed);`),
        classes: parseClass(`std::deque<int32_t>::iterator r5ret3237(int seed);`),
        funcs: parseFunction(`std::deque<int32_t>::iterator r5ret3237(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3237 生成结果为空');
      const expectSnippet0 = 'export function r5ret3237(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3237 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3238
  * @tc.name : h2dts_gen_3238
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3238', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<int64_t>::iterator r5ret3238(int seed);`),
        unions: parseUnion(`std::deque<int64_t>::iterator r5ret3238(int seed);`),
        structs: parseStruct(`std::deque<int64_t>::iterator r5ret3238(int seed);`),
        classes: parseClass(`std::deque<int64_t>::iterator r5ret3238(int seed);`),
        funcs: parseFunction(`std::deque<int64_t>::iterator r5ret3238(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3238 生成结果为空');
      const expectSnippet0 = 'export function r5ret3238(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3238 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3239
  * @tc.name : h2dts_gen_3239
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3239', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<unsigned>::iterator r5ret3239(int seed);`),
        unions: parseUnion(`std::deque<unsigned>::iterator r5ret3239(int seed);`),
        structs: parseStruct(`std::deque<unsigned>::iterator r5ret3239(int seed);`),
        classes: parseClass(`std::deque<unsigned>::iterator r5ret3239(int seed);`),
        funcs: parseFunction(`std::deque<unsigned>::iterator r5ret3239(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3239 生成结果为空');
      const expectSnippet0 = 'export function r5ret3239(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3239 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3240
  * @tc.name : h2dts_gen_3240
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3240', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<bool>::iterator r5ret3240(int seed);`),
        unions: parseUnion(`std::deque<bool>::iterator r5ret3240(int seed);`),
        structs: parseStruct(`std::deque<bool>::iterator r5ret3240(int seed);`),
        classes: parseClass(`std::deque<bool>::iterator r5ret3240(int seed);`),
        funcs: parseFunction(`std::deque<bool>::iterator r5ret3240(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3240 生成结果为空');
      const expectSnippet0 = 'export function r5ret3240(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3240 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3241
  * @tc.name : h2dts_gen_3241
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3241', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<char>::iterator r5ret3241(int seed);`),
        unions: parseUnion(`std::deque<char>::iterator r5ret3241(int seed);`),
        structs: parseStruct(`std::deque<char>::iterator r5ret3241(int seed);`),
        classes: parseClass(`std::deque<char>::iterator r5ret3241(int seed);`),
        funcs: parseFunction(`std::deque<char>::iterator r5ret3241(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3241 生成结果为空');
      const expectSnippet0 = 'export function r5ret3241(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3241 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3241 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3242
  * @tc.name : h2dts_gen_3242
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::deque<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3242', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::deque<wchar_t>::iterator r5ret3242(int seed);`),
        unions: parseUnion(`std::deque<wchar_t>::iterator r5ret3242(int seed);`),
        structs: parseStruct(`std::deque<wchar_t>::iterator r5ret3242(int seed);`),
        classes: parseClass(`std::deque<wchar_t>::iterator r5ret3242(int seed);`),
        funcs: parseFunction(`std::deque<wchar_t>::iterator r5ret3242(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3242 生成结果为空');
      const expectSnippet0 = 'export function r5ret3242(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3242 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3242 执行异常: ${String(err)}`);
    }
  });
});
