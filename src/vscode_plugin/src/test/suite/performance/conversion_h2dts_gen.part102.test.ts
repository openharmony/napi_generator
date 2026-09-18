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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part102.');

  /**
  * @tc.number : h2dts_gen_3418
  * @tc.name : h2dts_gen_3418
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3418', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<long> r5ret3418(int seed);`),
        unions: parseUnion(`std::valarray<long> r5ret3418(int seed);`),
        structs: parseStruct(`std::valarray<long> r5ret3418(int seed);`),
        classes: parseClass(`std::valarray<long> r5ret3418(int seed);`),
        funcs: parseFunction(`std::valarray<long> r5ret3418(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3418 生成结果为空');
      const expectSnippet0 = 'export function r5ret3418(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3418 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3418 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3418 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3419
  * @tc.name : h2dts_gen_3419
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3419', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<short> r5ret3419(int seed);`),
        unions: parseUnion(`std::valarray<short> r5ret3419(int seed);`),
        structs: parseStruct(`std::valarray<short> r5ret3419(int seed);`),
        classes: parseClass(`std::valarray<short> r5ret3419(int seed);`),
        funcs: parseFunction(`std::valarray<short> r5ret3419(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3419 生成结果为空');
      const expectSnippet0 = 'export function r5ret3419(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3419 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3419 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3419 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3420
  * @tc.name : h2dts_gen_3420
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3420', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<uint8_t> r5ret3420(int seed);`),
        unions: parseUnion(`std::valarray<uint8_t> r5ret3420(int seed);`),
        structs: parseStruct(`std::valarray<uint8_t> r5ret3420(int seed);`),
        classes: parseClass(`std::valarray<uint8_t> r5ret3420(int seed);`),
        funcs: parseFunction(`std::valarray<uint8_t> r5ret3420(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3420 生成结果为空');
      const expectSnippet0 = 'export function r5ret3420(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3420 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3420 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3420 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3421
  * @tc.name : h2dts_gen_3421
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3421', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<uint16_t> r5ret3421(int seed);`),
        unions: parseUnion(`std::valarray<uint16_t> r5ret3421(int seed);`),
        structs: parseStruct(`std::valarray<uint16_t> r5ret3421(int seed);`),
        classes: parseClass(`std::valarray<uint16_t> r5ret3421(int seed);`),
        funcs: parseFunction(`std::valarray<uint16_t> r5ret3421(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3421 生成结果为空');
      const expectSnippet0 = 'export function r5ret3421(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3421 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3421 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3421 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3422
  * @tc.name : h2dts_gen_3422
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3422', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<uint32_t> r5ret3422(int seed);`),
        unions: parseUnion(`std::valarray<uint32_t> r5ret3422(int seed);`),
        structs: parseStruct(`std::valarray<uint32_t> r5ret3422(int seed);`),
        classes: parseClass(`std::valarray<uint32_t> r5ret3422(int seed);`),
        funcs: parseFunction(`std::valarray<uint32_t> r5ret3422(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3422 生成结果为空');
      const expectSnippet0 = 'export function r5ret3422(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3422 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3422 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3422 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3423
  * @tc.name : h2dts_gen_3423
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3423', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<uint64_t> r5ret3423(int seed);`),
        unions: parseUnion(`std::valarray<uint64_t> r5ret3423(int seed);`),
        structs: parseStruct(`std::valarray<uint64_t> r5ret3423(int seed);`),
        classes: parseClass(`std::valarray<uint64_t> r5ret3423(int seed);`),
        funcs: parseFunction(`std::valarray<uint64_t> r5ret3423(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3423 生成结果为空');
      const expectSnippet0 = 'export function r5ret3423(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3423 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3423 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3423 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3424
  * @tc.name : h2dts_gen_3424
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3424', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int8_t> r5ret3424(int seed);`),
        unions: parseUnion(`std::valarray<int8_t> r5ret3424(int seed);`),
        structs: parseStruct(`std::valarray<int8_t> r5ret3424(int seed);`),
        classes: parseClass(`std::valarray<int8_t> r5ret3424(int seed);`),
        funcs: parseFunction(`std::valarray<int8_t> r5ret3424(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3424 生成结果为空');
      const expectSnippet0 = 'export function r5ret3424(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3424 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3424 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3424 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3425
  * @tc.name : h2dts_gen_3425
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3425', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int16_t> r5ret3425(int seed);`),
        unions: parseUnion(`std::valarray<int16_t> r5ret3425(int seed);`),
        structs: parseStruct(`std::valarray<int16_t> r5ret3425(int seed);`),
        classes: parseClass(`std::valarray<int16_t> r5ret3425(int seed);`),
        funcs: parseFunction(`std::valarray<int16_t> r5ret3425(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3425 生成结果为空');
      const expectSnippet0 = 'export function r5ret3425(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3425 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3425 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3425 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3426
  * @tc.name : h2dts_gen_3426
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3426', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int32_t> r5ret3426(int seed);`),
        unions: parseUnion(`std::valarray<int32_t> r5ret3426(int seed);`),
        structs: parseStruct(`std::valarray<int32_t> r5ret3426(int seed);`),
        classes: parseClass(`std::valarray<int32_t> r5ret3426(int seed);`),
        funcs: parseFunction(`std::valarray<int32_t> r5ret3426(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3426 生成结果为空');
      const expectSnippet0 = 'export function r5ret3426(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3426 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3426 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3426 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3427
  * @tc.name : h2dts_gen_3427
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3427', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int64_t> r5ret3427(int seed);`),
        unions: parseUnion(`std::valarray<int64_t> r5ret3427(int seed);`),
        structs: parseStruct(`std::valarray<int64_t> r5ret3427(int seed);`),
        classes: parseClass(`std::valarray<int64_t> r5ret3427(int seed);`),
        funcs: parseFunction(`std::valarray<int64_t> r5ret3427(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3427 生成结果为空');
      const expectSnippet0 = 'export function r5ret3427(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3427 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3427 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3427 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3428
  * @tc.name : h2dts_gen_3428
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3428', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<unsigned> r5ret3428(int seed);`),
        unions: parseUnion(`std::valarray<unsigned> r5ret3428(int seed);`),
        structs: parseStruct(`std::valarray<unsigned> r5ret3428(int seed);`),
        classes: parseClass(`std::valarray<unsigned> r5ret3428(int seed);`),
        funcs: parseFunction(`std::valarray<unsigned> r5ret3428(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3428 生成结果为空');
      const expectSnippet0 = 'export function r5ret3428(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3428 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3428 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3428 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3429
  * @tc.name : h2dts_gen_3429
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3429', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<bool> r5ret3429(int seed);`),
        unions: parseUnion(`std::valarray<bool> r5ret3429(int seed);`),
        structs: parseStruct(`std::valarray<bool> r5ret3429(int seed);`),
        classes: parseClass(`std::valarray<bool> r5ret3429(int seed);`),
        funcs: parseFunction(`std::valarray<bool> r5ret3429(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3429 生成结果为空');
      const expectSnippet0 = 'export function r5ret3429(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3429 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3429 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3429 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3430
  * @tc.name : h2dts_gen_3430
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3430', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<char> r5ret3430(int seed);`),
        unions: parseUnion(`std::valarray<char> r5ret3430(int seed);`),
        structs: parseStruct(`std::valarray<char> r5ret3430(int seed);`),
        classes: parseClass(`std::valarray<char> r5ret3430(int seed);`),
        funcs: parseFunction(`std::valarray<char> r5ret3430(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3430 生成结果为空');
      const expectSnippet0 = 'export function r5ret3430(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3430 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3430 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3430 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3431
  * @tc.name : h2dts_gen_3431
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3431', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<wchar_t> r5ret3431(int seed);`),
        unions: parseUnion(`std::valarray<wchar_t> r5ret3431(int seed);`),
        structs: parseStruct(`std::valarray<wchar_t> r5ret3431(int seed);`),
        classes: parseClass(`std::valarray<wchar_t> r5ret3431(int seed);`),
        funcs: parseFunction(`std::valarray<wchar_t> r5ret3431(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3431 生成结果为空');
      const expectSnippet0 = 'export function r5ret3431(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3431 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3431 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3431 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3432
  * @tc.name : h2dts_gen_3432
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3432', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<char8_t> r5ret3432(int seed);`),
        unions: parseUnion(`std::valarray<char8_t> r5ret3432(int seed);`),
        structs: parseStruct(`std::valarray<char8_t> r5ret3432(int seed);`),
        classes: parseClass(`std::valarray<char8_t> r5ret3432(int seed);`),
        funcs: parseFunction(`std::valarray<char8_t> r5ret3432(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3432 生成结果为空');
      const expectSnippet0 = 'export function r5ret3432(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3432 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3432 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3432 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3433
  * @tc.name : h2dts_gen_3433
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3433', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<char16_t> r5ret3433(int seed);`),
        unions: parseUnion(`std::valarray<char16_t> r5ret3433(int seed);`),
        structs: parseStruct(`std::valarray<char16_t> r5ret3433(int seed);`),
        classes: parseClass(`std::valarray<char16_t> r5ret3433(int seed);`),
        funcs: parseFunction(`std::valarray<char16_t> r5ret3433(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3433 生成结果为空');
      const expectSnippet0 = 'export function r5ret3433(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3433 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3433 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3433 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3434
  * @tc.name : h2dts_gen_3434
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3434', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<char32_t> r5ret3434(int seed);`),
        unions: parseUnion(`std::valarray<char32_t> r5ret3434(int seed);`),
        structs: parseStruct(`std::valarray<char32_t> r5ret3434(int seed);`),
        classes: parseClass(`std::valarray<char32_t> r5ret3434(int seed);`),
        funcs: parseFunction(`std::valarray<char32_t> r5ret3434(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3434 生成结果为空');
      const expectSnippet0 = 'export function r5ret3434(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3434 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3434 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3434 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3435
  * @tc.name : h2dts_gen_3435
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3435', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int>::iterator r5ret3435(int seed);`),
        unions: parseUnion(`std::valarray<int>::iterator r5ret3435(int seed);`),
        structs: parseStruct(`std::valarray<int>::iterator r5ret3435(int seed);`),
        classes: parseClass(`std::valarray<int>::iterator r5ret3435(int seed);`),
        funcs: parseFunction(`std::valarray<int>::iterator r5ret3435(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3435 生成结果为空');
      const expectSnippet0 = 'export function r5ret3435(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3435 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3435 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3435 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3436
  * @tc.name : h2dts_gen_3436
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3436', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<size_t>::iterator r5ret3436(int seed);`),
        unions: parseUnion(`std::valarray<size_t>::iterator r5ret3436(int seed);`),
        structs: parseStruct(`std::valarray<size_t>::iterator r5ret3436(int seed);`),
        classes: parseClass(`std::valarray<size_t>::iterator r5ret3436(int seed);`),
        funcs: parseFunction(`std::valarray<size_t>::iterator r5ret3436(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3436 生成结果为空');
      const expectSnippet0 = 'export function r5ret3436(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3436 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3436 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3436 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3437
  * @tc.name : h2dts_gen_3437
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3437', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<double>::iterator r5ret3437(int seed);`),
        unions: parseUnion(`std::valarray<double>::iterator r5ret3437(int seed);`),
        structs: parseStruct(`std::valarray<double>::iterator r5ret3437(int seed);`),
        classes: parseClass(`std::valarray<double>::iterator r5ret3437(int seed);`),
        funcs: parseFunction(`std::valarray<double>::iterator r5ret3437(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3437 生成结果为空');
      const expectSnippet0 = 'export function r5ret3437(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3437 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3437 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3437 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3438
  * @tc.name : h2dts_gen_3438
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3438', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<float>::iterator r5ret3438(int seed);`),
        unions: parseUnion(`std::valarray<float>::iterator r5ret3438(int seed);`),
        structs: parseStruct(`std::valarray<float>::iterator r5ret3438(int seed);`),
        classes: parseClass(`std::valarray<float>::iterator r5ret3438(int seed);`),
        funcs: parseFunction(`std::valarray<float>::iterator r5ret3438(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3438 生成结果为空');
      const expectSnippet0 = 'export function r5ret3438(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3438 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3438 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3438 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3439
  * @tc.name : h2dts_gen_3439
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3439', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<long>::iterator r5ret3439(int seed);`),
        unions: parseUnion(`std::valarray<long>::iterator r5ret3439(int seed);`),
        structs: parseStruct(`std::valarray<long>::iterator r5ret3439(int seed);`),
        classes: parseClass(`std::valarray<long>::iterator r5ret3439(int seed);`),
        funcs: parseFunction(`std::valarray<long>::iterator r5ret3439(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3439 生成结果为空');
      const expectSnippet0 = 'export function r5ret3439(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3439 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3439 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3439 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3440
  * @tc.name : h2dts_gen_3440
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3440', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3440(int a, size_t b, double c, float d);`),
        unions: parseUnion(`void r5qp3440(int a, size_t b, double c, float d);`),
        structs: parseStruct(`void r5qp3440(int a, size_t b, double c, float d);`),
        classes: parseClass(`void r5qp3440(int a, size_t b, double c, float d);`),
        funcs: parseFunction(`void r5qp3440(int a, size_t b, double c, float d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3440 生成结果为空');
      const expectSnippet0 = 'export function r5qp3440(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3440 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3440 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3440 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3441
  * @tc.name : h2dts_gen_3441
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3441', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3441(int a, size_t b, double c, short d);`),
        unions: parseUnion(`void r5qp3441(int a, size_t b, double c, short d);`),
        structs: parseStruct(`void r5qp3441(int a, size_t b, double c, short d);`),
        classes: parseClass(`void r5qp3441(int a, size_t b, double c, short d);`),
        funcs: parseFunction(`void r5qp3441(int a, size_t b, double c, short d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3441 生成结果为空');
      const expectSnippet0 = 'export function r5qp3441(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3441 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3441 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3441 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3442
  * @tc.name : h2dts_gen_3442
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3442', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3442(int a, size_t b, double c, long d);`),
        unions: parseUnion(`void r5qp3442(int a, size_t b, double c, long d);`),
        structs: parseStruct(`void r5qp3442(int a, size_t b, double c, long d);`),
        classes: parseClass(`void r5qp3442(int a, size_t b, double c, long d);`),
        funcs: parseFunction(`void r5qp3442(int a, size_t b, double c, long d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3442 生成结果为空');
      const expectSnippet0 = 'export function r5qp3442(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3442 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3442 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3442 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3443
  * @tc.name : h2dts_gen_3443
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3443', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3443(int a, size_t b, double c, uint8_t d);`),
        unions: parseUnion(`void r5qp3443(int a, size_t b, double c, uint8_t d);`),
        structs: parseStruct(`void r5qp3443(int a, size_t b, double c, uint8_t d);`),
        classes: parseClass(`void r5qp3443(int a, size_t b, double c, uint8_t d);`),
        funcs: parseFunction(`void r5qp3443(int a, size_t b, double c, uint8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3443 生成结果为空');
      const expectSnippet0 = 'export function r5qp3443(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3443 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3443 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3443 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3444
  * @tc.name : h2dts_gen_3444
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3444', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3444(int a, size_t b, double c, uint16_t d);`),
        unions: parseUnion(`void r5qp3444(int a, size_t b, double c, uint16_t d);`),
        structs: parseStruct(`void r5qp3444(int a, size_t b, double c, uint16_t d);`),
        classes: parseClass(`void r5qp3444(int a, size_t b, double c, uint16_t d);`),
        funcs: parseFunction(`void r5qp3444(int a, size_t b, double c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3444 生成结果为空');
      const expectSnippet0 = 'export function r5qp3444(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3444 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3444 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3444 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3445
  * @tc.name : h2dts_gen_3445
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3445', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3445(int a, size_t b, double c, uint32_t d);`),
        unions: parseUnion(`void r5qp3445(int a, size_t b, double c, uint32_t d);`),
        structs: parseStruct(`void r5qp3445(int a, size_t b, double c, uint32_t d);`),
        classes: parseClass(`void r5qp3445(int a, size_t b, double c, uint32_t d);`),
        funcs: parseFunction(`void r5qp3445(int a, size_t b, double c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3445 生成结果为空');
      const expectSnippet0 = 'export function r5qp3445(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3445 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3445 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3445 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3446
  * @tc.name : h2dts_gen_3446
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3446', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3446(int a, size_t b, double c, uint64_t d);`),
        unions: parseUnion(`void r5qp3446(int a, size_t b, double c, uint64_t d);`),
        structs: parseStruct(`void r5qp3446(int a, size_t b, double c, uint64_t d);`),
        classes: parseClass(`void r5qp3446(int a, size_t b, double c, uint64_t d);`),
        funcs: parseFunction(`void r5qp3446(int a, size_t b, double c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3446 生成结果为空');
      const expectSnippet0 = 'export function r5qp3446(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3446 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3446 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3446 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3447
  * @tc.name : h2dts_gen_3447
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3447', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3447(int a, size_t b, double c, int8_t d);`),
        unions: parseUnion(`void r5qp3447(int a, size_t b, double c, int8_t d);`),
        structs: parseStruct(`void r5qp3447(int a, size_t b, double c, int8_t d);`),
        classes: parseClass(`void r5qp3447(int a, size_t b, double c, int8_t d);`),
        funcs: parseFunction(`void r5qp3447(int a, size_t b, double c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3447 生成结果为空');
      const expectSnippet0 = 'export function r5qp3447(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3447 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3447 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3447 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3448
  * @tc.name : h2dts_gen_3448
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3448', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3448(int a, size_t b, double c, int16_t d);`),
        unions: parseUnion(`void r5qp3448(int a, size_t b, double c, int16_t d);`),
        structs: parseStruct(`void r5qp3448(int a, size_t b, double c, int16_t d);`),
        classes: parseClass(`void r5qp3448(int a, size_t b, double c, int16_t d);`),
        funcs: parseFunction(`void r5qp3448(int a, size_t b, double c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3448 生成结果为空');
      const expectSnippet0 = 'export function r5qp3448(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3448 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3448 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3448 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3449
  * @tc.name : h2dts_gen_3449
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3449', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3449(int a, size_t b, double c, int32_t d);`),
        unions: parseUnion(`void r5qp3449(int a, size_t b, double c, int32_t d);`),
        structs: parseStruct(`void r5qp3449(int a, size_t b, double c, int32_t d);`),
        classes: parseClass(`void r5qp3449(int a, size_t b, double c, int32_t d);`),
        funcs: parseFunction(`void r5qp3449(int a, size_t b, double c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3449 生成结果为空');
      const expectSnippet0 = 'export function r5qp3449(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3449 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3449 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3449 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3450
  * @tc.name : h2dts_gen_3450
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3450', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3450(int a, size_t b, double c, int64_t d);`),
        unions: parseUnion(`void r5qp3450(int a, size_t b, double c, int64_t d);`),
        structs: parseStruct(`void r5qp3450(int a, size_t b, double c, int64_t d);`),
        classes: parseClass(`void r5qp3450(int a, size_t b, double c, int64_t d);`),
        funcs: parseFunction(`void r5qp3450(int a, size_t b, double c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3450 生成结果为空');
      const expectSnippet0 = 'export function r5qp3450(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3450 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3450 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3450 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3451
  * @tc.name : h2dts_gen_3451
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3451', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3451(int a, size_t b, double c, unsigned d);`),
        unions: parseUnion(`void r5qp3451(int a, size_t b, double c, unsigned d);`),
        structs: parseStruct(`void r5qp3451(int a, size_t b, double c, unsigned d);`),
        classes: parseClass(`void r5qp3451(int a, size_t b, double c, unsigned d);`),
        funcs: parseFunction(`void r5qp3451(int a, size_t b, double c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3451 生成结果为空');
      const expectSnippet0 = 'export function r5qp3451(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3451 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3451 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3451 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3452
  * @tc.name : h2dts_gen_3452
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3452', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3452(int a, size_t b, double c, bool d);`),
        unions: parseUnion(`void r5qp3452(int a, size_t b, double c, bool d);`),
        structs: parseStruct(`void r5qp3452(int a, size_t b, double c, bool d);`),
        classes: parseClass(`void r5qp3452(int a, size_t b, double c, bool d);`),
        funcs: parseFunction(`void r5qp3452(int a, size_t b, double c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3452 生成结果为空');
      const expectSnippet0 = 'export function r5qp3452(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3452 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3452 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3452 执行异常: ${String(err)}`);
    }
  });
});
