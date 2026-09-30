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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part152.');

  /**
  * @tc.number : h2dts_gen_5137
  * @tc.name : h2dts_gen_5137
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5137', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<long> r5ret5137(int seed);`),
        unions: parseUnion(`std::valarray<long> r5ret5137(int seed);`),
        structs: parseStruct(`std::valarray<long> r5ret5137(int seed);`),
        classes: parseClass(`std::valarray<long> r5ret5137(int seed);`),
        funcs: parseFunction(`std::valarray<long> r5ret5137(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5137 生成结果为空');
      const expectSnippet0 = 'export function r5ret5137(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5137 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5138
  * @tc.name : h2dts_gen_5138
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5138', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<short> r5ret5138(int seed);`),
        unions: parseUnion(`std::valarray<short> r5ret5138(int seed);`),
        structs: parseStruct(`std::valarray<short> r5ret5138(int seed);`),
        classes: parseClass(`std::valarray<short> r5ret5138(int seed);`),
        funcs: parseFunction(`std::valarray<short> r5ret5138(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5138 生成结果为空');
      const expectSnippet0 = 'export function r5ret5138(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5138 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5139
  * @tc.name : h2dts_gen_5139
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5139', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<uint8_t> r5ret5139(int seed);`),
        unions: parseUnion(`std::valarray<uint8_t> r5ret5139(int seed);`),
        structs: parseStruct(`std::valarray<uint8_t> r5ret5139(int seed);`),
        classes: parseClass(`std::valarray<uint8_t> r5ret5139(int seed);`),
        funcs: parseFunction(`std::valarray<uint8_t> r5ret5139(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5139 生成结果为空');
      const expectSnippet0 = 'export function r5ret5139(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5139 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5140
  * @tc.name : h2dts_gen_5140
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5140', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<uint16_t> r5ret5140(int seed);`),
        unions: parseUnion(`std::valarray<uint16_t> r5ret5140(int seed);`),
        structs: parseStruct(`std::valarray<uint16_t> r5ret5140(int seed);`),
        classes: parseClass(`std::valarray<uint16_t> r5ret5140(int seed);`),
        funcs: parseFunction(`std::valarray<uint16_t> r5ret5140(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5140 生成结果为空');
      const expectSnippet0 = 'export function r5ret5140(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5140 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5141
  * @tc.name : h2dts_gen_5141
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5141', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<uint32_t> r5ret5141(int seed);`),
        unions: parseUnion(`std::valarray<uint32_t> r5ret5141(int seed);`),
        structs: parseStruct(`std::valarray<uint32_t> r5ret5141(int seed);`),
        classes: parseClass(`std::valarray<uint32_t> r5ret5141(int seed);`),
        funcs: parseFunction(`std::valarray<uint32_t> r5ret5141(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5141 生成结果为空');
      const expectSnippet0 = 'export function r5ret5141(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5141 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5142
  * @tc.name : h2dts_gen_5142
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5142', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<uint64_t> r5ret5142(int seed);`),
        unions: parseUnion(`std::valarray<uint64_t> r5ret5142(int seed);`),
        structs: parseStruct(`std::valarray<uint64_t> r5ret5142(int seed);`),
        classes: parseClass(`std::valarray<uint64_t> r5ret5142(int seed);`),
        funcs: parseFunction(`std::valarray<uint64_t> r5ret5142(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5142 生成结果为空');
      const expectSnippet0 = 'export function r5ret5142(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5142 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5143
  * @tc.name : h2dts_gen_5143
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5143', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int8_t> r5ret5143(int seed);`),
        unions: parseUnion(`std::valarray<int8_t> r5ret5143(int seed);`),
        structs: parseStruct(`std::valarray<int8_t> r5ret5143(int seed);`),
        classes: parseClass(`std::valarray<int8_t> r5ret5143(int seed);`),
        funcs: parseFunction(`std::valarray<int8_t> r5ret5143(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5143 生成结果为空');
      const expectSnippet0 = 'export function r5ret5143(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5143 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5144
  * @tc.name : h2dts_gen_5144
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5144', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int16_t> r5ret5144(int seed);`),
        unions: parseUnion(`std::valarray<int16_t> r5ret5144(int seed);`),
        structs: parseStruct(`std::valarray<int16_t> r5ret5144(int seed);`),
        classes: parseClass(`std::valarray<int16_t> r5ret5144(int seed);`),
        funcs: parseFunction(`std::valarray<int16_t> r5ret5144(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5144 生成结果为空');
      const expectSnippet0 = 'export function r5ret5144(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5144 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5145
  * @tc.name : h2dts_gen_5145
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5145', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int32_t> r5ret5145(int seed);`),
        unions: parseUnion(`std::valarray<int32_t> r5ret5145(int seed);`),
        structs: parseStruct(`std::valarray<int32_t> r5ret5145(int seed);`),
        classes: parseClass(`std::valarray<int32_t> r5ret5145(int seed);`),
        funcs: parseFunction(`std::valarray<int32_t> r5ret5145(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5145 生成结果为空');
      const expectSnippet0 = 'export function r5ret5145(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5145 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5146
  * @tc.name : h2dts_gen_5146
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5146', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int64_t> r5ret5146(int seed);`),
        unions: parseUnion(`std::valarray<int64_t> r5ret5146(int seed);`),
        structs: parseStruct(`std::valarray<int64_t> r5ret5146(int seed);`),
        classes: parseClass(`std::valarray<int64_t> r5ret5146(int seed);`),
        funcs: parseFunction(`std::valarray<int64_t> r5ret5146(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5146 生成结果为空');
      const expectSnippet0 = 'export function r5ret5146(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5146 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5147
  * @tc.name : h2dts_gen_5147
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5147', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<unsigned> r5ret5147(int seed);`),
        unions: parseUnion(`std::valarray<unsigned> r5ret5147(int seed);`),
        structs: parseStruct(`std::valarray<unsigned> r5ret5147(int seed);`),
        classes: parseClass(`std::valarray<unsigned> r5ret5147(int seed);`),
        funcs: parseFunction(`std::valarray<unsigned> r5ret5147(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5147 生成结果为空');
      const expectSnippet0 = 'export function r5ret5147(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5147 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5148
  * @tc.name : h2dts_gen_5148
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5148', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<bool> r5ret5148(int seed);`),
        unions: parseUnion(`std::valarray<bool> r5ret5148(int seed);`),
        structs: parseStruct(`std::valarray<bool> r5ret5148(int seed);`),
        classes: parseClass(`std::valarray<bool> r5ret5148(int seed);`),
        funcs: parseFunction(`std::valarray<bool> r5ret5148(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5148 生成结果为空');
      const expectSnippet0 = 'export function r5ret5148(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5148 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5149
  * @tc.name : h2dts_gen_5149
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5149', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<char> r5ret5149(int seed);`),
        unions: parseUnion(`std::valarray<char> r5ret5149(int seed);`),
        structs: parseStruct(`std::valarray<char> r5ret5149(int seed);`),
        classes: parseClass(`std::valarray<char> r5ret5149(int seed);`),
        funcs: parseFunction(`std::valarray<char> r5ret5149(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5149 生成结果为空');
      const expectSnippet0 = 'export function r5ret5149(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5149 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5150
  * @tc.name : h2dts_gen_5150
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5150', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<wchar_t> r5ret5150(int seed);`),
        unions: parseUnion(`std::valarray<wchar_t> r5ret5150(int seed);`),
        structs: parseStruct(`std::valarray<wchar_t> r5ret5150(int seed);`),
        classes: parseClass(`std::valarray<wchar_t> r5ret5150(int seed);`),
        funcs: parseFunction(`std::valarray<wchar_t> r5ret5150(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5150 生成结果为空');
      const expectSnippet0 = 'export function r5ret5150(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5150 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5151
  * @tc.name : h2dts_gen_5151
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5151', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<char8_t> r5ret5151(int seed);`),
        unions: parseUnion(`std::valarray<char8_t> r5ret5151(int seed);`),
        structs: parseStruct(`std::valarray<char8_t> r5ret5151(int seed);`),
        classes: parseClass(`std::valarray<char8_t> r5ret5151(int seed);`),
        funcs: parseFunction(`std::valarray<char8_t> r5ret5151(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5151 生成结果为空');
      const expectSnippet0 = 'export function r5ret5151(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5151 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5152
  * @tc.name : h2dts_gen_5152
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5152', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<char16_t> r5ret5152(int seed);`),
        unions: parseUnion(`std::valarray<char16_t> r5ret5152(int seed);`),
        structs: parseStruct(`std::valarray<char16_t> r5ret5152(int seed);`),
        classes: parseClass(`std::valarray<char16_t> r5ret5152(int seed);`),
        funcs: parseFunction(`std::valarray<char16_t> r5ret5152(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5152 生成结果为空');
      const expectSnippet0 = 'export function r5ret5152(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5152 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5153
  * @tc.name : h2dts_gen_5153
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5153', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<char32_t> r5ret5153(int seed);`),
        unions: parseUnion(`std::valarray<char32_t> r5ret5153(int seed);`),
        structs: parseStruct(`std::valarray<char32_t> r5ret5153(int seed);`),
        classes: parseClass(`std::valarray<char32_t> r5ret5153(int seed);`),
        funcs: parseFunction(`std::valarray<char32_t> r5ret5153(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5153 生成结果为空');
      const expectSnippet0 = 'export function r5ret5153(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5153 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5154
  * @tc.name : h2dts_gen_5154
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5154', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int>::iterator r5ret5154(int seed);`),
        unions: parseUnion(`std::valarray<int>::iterator r5ret5154(int seed);`),
        structs: parseStruct(`std::valarray<int>::iterator r5ret5154(int seed);`),
        classes: parseClass(`std::valarray<int>::iterator r5ret5154(int seed);`),
        funcs: parseFunction(`std::valarray<int>::iterator r5ret5154(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5154 生成结果为空');
      const expectSnippet0 = 'export function r5ret5154(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5154 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5155
  * @tc.name : h2dts_gen_5155
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5155', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<size_t>::iterator r5ret5155(int seed);`),
        unions: parseUnion(`std::valarray<size_t>::iterator r5ret5155(int seed);`),
        structs: parseStruct(`std::valarray<size_t>::iterator r5ret5155(int seed);`),
        classes: parseClass(`std::valarray<size_t>::iterator r5ret5155(int seed);`),
        funcs: parseFunction(`std::valarray<size_t>::iterator r5ret5155(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5155 生成结果为空');
      const expectSnippet0 = 'export function r5ret5155(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5155 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5156
  * @tc.name : h2dts_gen_5156
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5156', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<double>::iterator r5ret5156(int seed);`),
        unions: parseUnion(`std::valarray<double>::iterator r5ret5156(int seed);`),
        structs: parseStruct(`std::valarray<double>::iterator r5ret5156(int seed);`),
        classes: parseClass(`std::valarray<double>::iterator r5ret5156(int seed);`),
        funcs: parseFunction(`std::valarray<double>::iterator r5ret5156(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5156 生成结果为空');
      const expectSnippet0 = 'export function r5ret5156(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5156 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5157
  * @tc.name : h2dts_gen_5157
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5157', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<float>::iterator r5ret5157(int seed);`),
        unions: parseUnion(`std::valarray<float>::iterator r5ret5157(int seed);`),
        structs: parseStruct(`std::valarray<float>::iterator r5ret5157(int seed);`),
        classes: parseClass(`std::valarray<float>::iterator r5ret5157(int seed);`),
        funcs: parseFunction(`std::valarray<float>::iterator r5ret5157(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5157 生成结果为空');
      const expectSnippet0 = 'export function r5ret5157(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5157 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5158
  * @tc.name : h2dts_gen_5158
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5158', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<long>::iterator r5ret5158(int seed);`),
        unions: parseUnion(`std::valarray<long>::iterator r5ret5158(int seed);`),
        structs: parseStruct(`std::valarray<long>::iterator r5ret5158(int seed);`),
        classes: parseClass(`std::valarray<long>::iterator r5ret5158(int seed);`),
        funcs: parseFunction(`std::valarray<long>::iterator r5ret5158(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5158 生成结果为空');
      const expectSnippet0 = 'export function r5ret5158(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5158 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5159
  * @tc.name : h2dts_gen_5159
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5159', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5159(int a, size_t b, double c, float d);`),
        unions: parseUnion(`void r5qp5159(int a, size_t b, double c, float d);`),
        structs: parseStruct(`void r5qp5159(int a, size_t b, double c, float d);`),
        classes: parseClass(`void r5qp5159(int a, size_t b, double c, float d);`),
        funcs: parseFunction(`void r5qp5159(int a, size_t b, double c, float d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5159 生成结果为空');
      const expectSnippet0 = 'export function r5qp5159(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5159 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5160
  * @tc.name : h2dts_gen_5160
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5160', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5160(int a, size_t b, double c, short d);`),
        unions: parseUnion(`void r5qp5160(int a, size_t b, double c, short d);`),
        structs: parseStruct(`void r5qp5160(int a, size_t b, double c, short d);`),
        classes: parseClass(`void r5qp5160(int a, size_t b, double c, short d);`),
        funcs: parseFunction(`void r5qp5160(int a, size_t b, double c, short d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5160 生成结果为空');
      const expectSnippet0 = 'export function r5qp5160(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5160 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5161
  * @tc.name : h2dts_gen_5161
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5161', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5161(int a, size_t b, double c, long d);`),
        unions: parseUnion(`void r5qp5161(int a, size_t b, double c, long d);`),
        structs: parseStruct(`void r5qp5161(int a, size_t b, double c, long d);`),
        classes: parseClass(`void r5qp5161(int a, size_t b, double c, long d);`),
        funcs: parseFunction(`void r5qp5161(int a, size_t b, double c, long d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5161 生成结果为空');
      const expectSnippet0 = 'export function r5qp5161(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5161 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5162
  * @tc.name : h2dts_gen_5162
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5162', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5162(int a, size_t b, double c, uint8_t d);`),
        unions: parseUnion(`void r5qp5162(int a, size_t b, double c, uint8_t d);`),
        structs: parseStruct(`void r5qp5162(int a, size_t b, double c, uint8_t d);`),
        classes: parseClass(`void r5qp5162(int a, size_t b, double c, uint8_t d);`),
        funcs: parseFunction(`void r5qp5162(int a, size_t b, double c, uint8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5162 生成结果为空');
      const expectSnippet0 = 'export function r5qp5162(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5162 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5163
  * @tc.name : h2dts_gen_5163
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5163', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5163(int a, size_t b, double c, uint16_t d);`),
        unions: parseUnion(`void r5qp5163(int a, size_t b, double c, uint16_t d);`),
        structs: parseStruct(`void r5qp5163(int a, size_t b, double c, uint16_t d);`),
        classes: parseClass(`void r5qp5163(int a, size_t b, double c, uint16_t d);`),
        funcs: parseFunction(`void r5qp5163(int a, size_t b, double c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5163 生成结果为空');
      const expectSnippet0 = 'export function r5qp5163(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5163 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5164
  * @tc.name : h2dts_gen_5164
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5164', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5164(int a, size_t b, double c, uint32_t d);`),
        unions: parseUnion(`void r5qp5164(int a, size_t b, double c, uint32_t d);`),
        structs: parseStruct(`void r5qp5164(int a, size_t b, double c, uint32_t d);`),
        classes: parseClass(`void r5qp5164(int a, size_t b, double c, uint32_t d);`),
        funcs: parseFunction(`void r5qp5164(int a, size_t b, double c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5164 生成结果为空');
      const expectSnippet0 = 'export function r5qp5164(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5164 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5165
  * @tc.name : h2dts_gen_5165
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5165', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5165(int a, size_t b, double c, uint64_t d);`),
        unions: parseUnion(`void r5qp5165(int a, size_t b, double c, uint64_t d);`),
        structs: parseStruct(`void r5qp5165(int a, size_t b, double c, uint64_t d);`),
        classes: parseClass(`void r5qp5165(int a, size_t b, double c, uint64_t d);`),
        funcs: parseFunction(`void r5qp5165(int a, size_t b, double c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5165 生成结果为空');
      const expectSnippet0 = 'export function r5qp5165(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5165 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5166
  * @tc.name : h2dts_gen_5166
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5166', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5166(int a, size_t b, double c, int8_t d);`),
        unions: parseUnion(`void r5qp5166(int a, size_t b, double c, int8_t d);`),
        structs: parseStruct(`void r5qp5166(int a, size_t b, double c, int8_t d);`),
        classes: parseClass(`void r5qp5166(int a, size_t b, double c, int8_t d);`),
        funcs: parseFunction(`void r5qp5166(int a, size_t b, double c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5166 生成结果为空');
      const expectSnippet0 = 'export function r5qp5166(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5166 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5167
  * @tc.name : h2dts_gen_5167
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5167', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5167(int a, size_t b, double c, int16_t d);`),
        unions: parseUnion(`void r5qp5167(int a, size_t b, double c, int16_t d);`),
        structs: parseStruct(`void r5qp5167(int a, size_t b, double c, int16_t d);`),
        classes: parseClass(`void r5qp5167(int a, size_t b, double c, int16_t d);`),
        funcs: parseFunction(`void r5qp5167(int a, size_t b, double c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5167 生成结果为空');
      const expectSnippet0 = 'export function r5qp5167(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5167 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5168
  * @tc.name : h2dts_gen_5168
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5168', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5168(int a, size_t b, double c, int32_t d);`),
        unions: parseUnion(`void r5qp5168(int a, size_t b, double c, int32_t d);`),
        structs: parseStruct(`void r5qp5168(int a, size_t b, double c, int32_t d);`),
        classes: parseClass(`void r5qp5168(int a, size_t b, double c, int32_t d);`),
        funcs: parseFunction(`void r5qp5168(int a, size_t b, double c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5168 生成结果为空');
      const expectSnippet0 = 'export function r5qp5168(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5168 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5169
  * @tc.name : h2dts_gen_5169
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5169', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5169(int a, size_t b, double c, int64_t d);`),
        unions: parseUnion(`void r5qp5169(int a, size_t b, double c, int64_t d);`),
        structs: parseStruct(`void r5qp5169(int a, size_t b, double c, int64_t d);`),
        classes: parseClass(`void r5qp5169(int a, size_t b, double c, int64_t d);`),
        funcs: parseFunction(`void r5qp5169(int a, size_t b, double c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5169 生成结果为空');
      const expectSnippet0 = 'export function r5qp5169(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5169 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5170
  * @tc.name : h2dts_gen_5170
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5170', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5170(int a, size_t b, double c, unsigned d);`),
        unions: parseUnion(`void r5qp5170(int a, size_t b, double c, unsigned d);`),
        structs: parseStruct(`void r5qp5170(int a, size_t b, double c, unsigned d);`),
        classes: parseClass(`void r5qp5170(int a, size_t b, double c, unsigned d);`),
        funcs: parseFunction(`void r5qp5170(int a, size_t b, double c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5170 生成结果为空');
      const expectSnippet0 = 'export function r5qp5170(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5170 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5171
  * @tc.name : h2dts_gen_5171
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5171', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5171(int a, size_t b, double c, bool d);`),
        unions: parseUnion(`void r5qp5171(int a, size_t b, double c, bool d);`),
        structs: parseStruct(`void r5qp5171(int a, size_t b, double c, bool d);`),
        classes: parseClass(`void r5qp5171(int a, size_t b, double c, bool d);`),
        funcs: parseFunction(`void r5qp5171(int a, size_t b, double c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5171 生成结果为空');
      const expectSnippet0 = 'export function r5qp5171(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5171 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5171 执行异常: ${String(err)}`);
    }
  });
});
