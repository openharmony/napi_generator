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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part148.');

  /**
  * @tc.number : h2dts_gen_4997
  * @tc.name : h2dts_gen_4997
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4997', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int16_t>::iterator r5ret4997(int seed);`),
        unions: parseUnion(`std::list<int16_t>::iterator r5ret4997(int seed);`),
        structs: parseStruct(`std::list<int16_t>::iterator r5ret4997(int seed);`),
        classes: parseClass(`std::list<int16_t>::iterator r5ret4997(int seed);`),
        funcs: parseFunction(`std::list<int16_t>::iterator r5ret4997(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4997 生成结果为空');
      const expectSnippet0 = 'export function r5ret4997(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4997 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4997 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4997 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4998
  * @tc.name : h2dts_gen_4998
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4998', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int32_t>::iterator r5ret4998(int seed);`),
        unions: parseUnion(`std::list<int32_t>::iterator r5ret4998(int seed);`),
        structs: parseStruct(`std::list<int32_t>::iterator r5ret4998(int seed);`),
        classes: parseClass(`std::list<int32_t>::iterator r5ret4998(int seed);`),
        funcs: parseFunction(`std::list<int32_t>::iterator r5ret4998(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4998 生成结果为空');
      const expectSnippet0 = 'export function r5ret4998(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4998 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4998 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4998 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4999
  * @tc.name : h2dts_gen_4999
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4999', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<int64_t>::iterator r5ret4999(int seed);`),
        unions: parseUnion(`std::list<int64_t>::iterator r5ret4999(int seed);`),
        structs: parseStruct(`std::list<int64_t>::iterator r5ret4999(int seed);`),
        classes: parseClass(`std::list<int64_t>::iterator r5ret4999(int seed);`),
        funcs: parseFunction(`std::list<int64_t>::iterator r5ret4999(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4999 生成结果为空');
      const expectSnippet0 = 'export function r5ret4999(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4999 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4999 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4999 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5000
  * @tc.name : h2dts_gen_5000
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5000', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<unsigned>::iterator r5ret5000(int seed);`),
        unions: parseUnion(`std::list<unsigned>::iterator r5ret5000(int seed);`),
        structs: parseStruct(`std::list<unsigned>::iterator r5ret5000(int seed);`),
        classes: parseClass(`std::list<unsigned>::iterator r5ret5000(int seed);`),
        funcs: parseFunction(`std::list<unsigned>::iterator r5ret5000(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5000 生成结果为空');
      const expectSnippet0 = 'export function r5ret5000(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5000 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5000 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5000 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5001
  * @tc.name : h2dts_gen_5001
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5001', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<bool>::iterator r5ret5001(int seed);`),
        unions: parseUnion(`std::list<bool>::iterator r5ret5001(int seed);`),
        structs: parseStruct(`std::list<bool>::iterator r5ret5001(int seed);`),
        classes: parseClass(`std::list<bool>::iterator r5ret5001(int seed);`),
        funcs: parseFunction(`std::list<bool>::iterator r5ret5001(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5001 生成结果为空');
      const expectSnippet0 = 'export function r5ret5001(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5001 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5002
  * @tc.name : h2dts_gen_5002
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5002', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char>::iterator r5ret5002(int seed);`),
        unions: parseUnion(`std::list<char>::iterator r5ret5002(int seed);`),
        structs: parseStruct(`std::list<char>::iterator r5ret5002(int seed);`),
        classes: parseClass(`std::list<char>::iterator r5ret5002(int seed);`),
        funcs: parseFunction(`std::list<char>::iterator r5ret5002(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5002 生成结果为空');
      const expectSnippet0 = 'export function r5ret5002(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5002 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5003
  * @tc.name : h2dts_gen_5003
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5003', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<wchar_t>::iterator r5ret5003(int seed);`),
        unions: parseUnion(`std::list<wchar_t>::iterator r5ret5003(int seed);`),
        structs: parseStruct(`std::list<wchar_t>::iterator r5ret5003(int seed);`),
        classes: parseClass(`std::list<wchar_t>::iterator r5ret5003(int seed);`),
        funcs: parseFunction(`std::list<wchar_t>::iterator r5ret5003(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5003 生成结果为空');
      const expectSnippet0 = 'export function r5ret5003(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5003 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5004
  * @tc.name : h2dts_gen_5004
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5004', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char8_t>::iterator r5ret5004(int seed);`),
        unions: parseUnion(`std::list<char8_t>::iterator r5ret5004(int seed);`),
        structs: parseStruct(`std::list<char8_t>::iterator r5ret5004(int seed);`),
        classes: parseClass(`std::list<char8_t>::iterator r5ret5004(int seed);`),
        funcs: parseFunction(`std::list<char8_t>::iterator r5ret5004(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5004 生成结果为空');
      const expectSnippet0 = 'export function r5ret5004(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5004 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5005
  * @tc.name : h2dts_gen_5005
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5005', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char16_t>::iterator r5ret5005(int seed);`),
        unions: parseUnion(`std::list<char16_t>::iterator r5ret5005(int seed);`),
        structs: parseStruct(`std::list<char16_t>::iterator r5ret5005(int seed);`),
        classes: parseClass(`std::list<char16_t>::iterator r5ret5005(int seed);`),
        funcs: parseFunction(`std::list<char16_t>::iterator r5ret5005(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5005 生成结果为空');
      const expectSnippet0 = 'export function r5ret5005(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5005 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5006
  * @tc.name : h2dts_gen_5006
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::list<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5006', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::list<char32_t>::iterator r5ret5006(int seed);`),
        unions: parseUnion(`std::list<char32_t>::iterator r5ret5006(int seed);`),
        structs: parseStruct(`std::list<char32_t>::iterator r5ret5006(int seed);`),
        classes: parseClass(`std::list<char32_t>::iterator r5ret5006(int seed);`),
        funcs: parseFunction(`std::list<char32_t>::iterator r5ret5006(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5006 生成结果为空');
      const expectSnippet0 = 'export function r5ret5006(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5006 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5007
  * @tc.name : h2dts_gen_5007
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5007', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int> r5ret5007(int seed);`),
        unions: parseUnion(`std::forward_list<int> r5ret5007(int seed);`),
        structs: parseStruct(`std::forward_list<int> r5ret5007(int seed);`),
        classes: parseClass(`std::forward_list<int> r5ret5007(int seed);`),
        funcs: parseFunction(`std::forward_list<int> r5ret5007(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5007 生成结果为空');
      const expectSnippet0 = 'export function r5ret5007(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5007 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5008
  * @tc.name : h2dts_gen_5008
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5008', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<size_t> r5ret5008(int seed);`),
        unions: parseUnion(`std::forward_list<size_t> r5ret5008(int seed);`),
        structs: parseStruct(`std::forward_list<size_t> r5ret5008(int seed);`),
        classes: parseClass(`std::forward_list<size_t> r5ret5008(int seed);`),
        funcs: parseFunction(`std::forward_list<size_t> r5ret5008(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5008 生成结果为空');
      const expectSnippet0 = 'export function r5ret5008(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5008 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5009
  * @tc.name : h2dts_gen_5009
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5009', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<double> r5ret5009(int seed);`),
        unions: parseUnion(`std::forward_list<double> r5ret5009(int seed);`),
        structs: parseStruct(`std::forward_list<double> r5ret5009(int seed);`),
        classes: parseClass(`std::forward_list<double> r5ret5009(int seed);`),
        funcs: parseFunction(`std::forward_list<double> r5ret5009(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5009 生成结果为空');
      const expectSnippet0 = 'export function r5ret5009(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5009 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5010
  * @tc.name : h2dts_gen_5010
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5010', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<float> r5ret5010(int seed);`),
        unions: parseUnion(`std::forward_list<float> r5ret5010(int seed);`),
        structs: parseStruct(`std::forward_list<float> r5ret5010(int seed);`),
        classes: parseClass(`std::forward_list<float> r5ret5010(int seed);`),
        funcs: parseFunction(`std::forward_list<float> r5ret5010(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5010 生成结果为空');
      const expectSnippet0 = 'export function r5ret5010(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5010 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5011
  * @tc.name : h2dts_gen_5011
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5011', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<long> r5ret5011(int seed);`),
        unions: parseUnion(`std::forward_list<long> r5ret5011(int seed);`),
        structs: parseStruct(`std::forward_list<long> r5ret5011(int seed);`),
        classes: parseClass(`std::forward_list<long> r5ret5011(int seed);`),
        funcs: parseFunction(`std::forward_list<long> r5ret5011(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5011 生成结果为空');
      const expectSnippet0 = 'export function r5ret5011(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5011 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5012
  * @tc.name : h2dts_gen_5012
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5012', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<short> r5ret5012(int seed);`),
        unions: parseUnion(`std::forward_list<short> r5ret5012(int seed);`),
        structs: parseStruct(`std::forward_list<short> r5ret5012(int seed);`),
        classes: parseClass(`std::forward_list<short> r5ret5012(int seed);`),
        funcs: parseFunction(`std::forward_list<short> r5ret5012(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5012 生成结果为空');
      const expectSnippet0 = 'export function r5ret5012(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5012 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5013
  * @tc.name : h2dts_gen_5013
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5013', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint8_t> r5ret5013(int seed);`),
        unions: parseUnion(`std::forward_list<uint8_t> r5ret5013(int seed);`),
        structs: parseStruct(`std::forward_list<uint8_t> r5ret5013(int seed);`),
        classes: parseClass(`std::forward_list<uint8_t> r5ret5013(int seed);`),
        funcs: parseFunction(`std::forward_list<uint8_t> r5ret5013(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5013 生成结果为空');
      const expectSnippet0 = 'export function r5ret5013(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5013 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5014
  * @tc.name : h2dts_gen_5014
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5014', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint16_t> r5ret5014(int seed);`),
        unions: parseUnion(`std::forward_list<uint16_t> r5ret5014(int seed);`),
        structs: parseStruct(`std::forward_list<uint16_t> r5ret5014(int seed);`),
        classes: parseClass(`std::forward_list<uint16_t> r5ret5014(int seed);`),
        funcs: parseFunction(`std::forward_list<uint16_t> r5ret5014(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5014 生成结果为空');
      const expectSnippet0 = 'export function r5ret5014(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5014 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5015
  * @tc.name : h2dts_gen_5015
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5015', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint32_t> r5ret5015(int seed);`),
        unions: parseUnion(`std::forward_list<uint32_t> r5ret5015(int seed);`),
        structs: parseStruct(`std::forward_list<uint32_t> r5ret5015(int seed);`),
        classes: parseClass(`std::forward_list<uint32_t> r5ret5015(int seed);`),
        funcs: parseFunction(`std::forward_list<uint32_t> r5ret5015(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5015 生成结果为空');
      const expectSnippet0 = 'export function r5ret5015(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5015 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5016
  * @tc.name : h2dts_gen_5016
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5016', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint64_t> r5ret5016(int seed);`),
        unions: parseUnion(`std::forward_list<uint64_t> r5ret5016(int seed);`),
        structs: parseStruct(`std::forward_list<uint64_t> r5ret5016(int seed);`),
        classes: parseClass(`std::forward_list<uint64_t> r5ret5016(int seed);`),
        funcs: parseFunction(`std::forward_list<uint64_t> r5ret5016(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5016 生成结果为空');
      const expectSnippet0 = 'export function r5ret5016(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5016 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5017
  * @tc.name : h2dts_gen_5017
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5017', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int8_t> r5ret5017(int seed);`),
        unions: parseUnion(`std::forward_list<int8_t> r5ret5017(int seed);`),
        structs: parseStruct(`std::forward_list<int8_t> r5ret5017(int seed);`),
        classes: parseClass(`std::forward_list<int8_t> r5ret5017(int seed);`),
        funcs: parseFunction(`std::forward_list<int8_t> r5ret5017(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5017 生成结果为空');
      const expectSnippet0 = 'export function r5ret5017(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5017 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5018
  * @tc.name : h2dts_gen_5018
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5018', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int16_t> r5ret5018(int seed);`),
        unions: parseUnion(`std::forward_list<int16_t> r5ret5018(int seed);`),
        structs: parseStruct(`std::forward_list<int16_t> r5ret5018(int seed);`),
        classes: parseClass(`std::forward_list<int16_t> r5ret5018(int seed);`),
        funcs: parseFunction(`std::forward_list<int16_t> r5ret5018(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5018 生成结果为空');
      const expectSnippet0 = 'export function r5ret5018(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5018 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5019
  * @tc.name : h2dts_gen_5019
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5019', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int32_t> r5ret5019(int seed);`),
        unions: parseUnion(`std::forward_list<int32_t> r5ret5019(int seed);`),
        structs: parseStruct(`std::forward_list<int32_t> r5ret5019(int seed);`),
        classes: parseClass(`std::forward_list<int32_t> r5ret5019(int seed);`),
        funcs: parseFunction(`std::forward_list<int32_t> r5ret5019(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5019 生成结果为空');
      const expectSnippet0 = 'export function r5ret5019(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5019 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5020
  * @tc.name : h2dts_gen_5020
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5020', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int64_t> r5ret5020(int seed);`),
        unions: parseUnion(`std::forward_list<int64_t> r5ret5020(int seed);`),
        structs: parseStruct(`std::forward_list<int64_t> r5ret5020(int seed);`),
        classes: parseClass(`std::forward_list<int64_t> r5ret5020(int seed);`),
        funcs: parseFunction(`std::forward_list<int64_t> r5ret5020(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5020 生成结果为空');
      const expectSnippet0 = 'export function r5ret5020(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5020 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5021
  * @tc.name : h2dts_gen_5021
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5021', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<unsigned> r5ret5021(int seed);`),
        unions: parseUnion(`std::forward_list<unsigned> r5ret5021(int seed);`),
        structs: parseStruct(`std::forward_list<unsigned> r5ret5021(int seed);`),
        classes: parseClass(`std::forward_list<unsigned> r5ret5021(int seed);`),
        funcs: parseFunction(`std::forward_list<unsigned> r5ret5021(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5021 生成结果为空');
      const expectSnippet0 = 'export function r5ret5021(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5021 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5022
  * @tc.name : h2dts_gen_5022
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5022', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<bool> r5ret5022(int seed);`),
        unions: parseUnion(`std::forward_list<bool> r5ret5022(int seed);`),
        structs: parseStruct(`std::forward_list<bool> r5ret5022(int seed);`),
        classes: parseClass(`std::forward_list<bool> r5ret5022(int seed);`),
        funcs: parseFunction(`std::forward_list<bool> r5ret5022(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5022 生成结果为空');
      const expectSnippet0 = 'export function r5ret5022(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5022 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5023
  * @tc.name : h2dts_gen_5023
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5023', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char> r5ret5023(int seed);`),
        unions: parseUnion(`std::forward_list<char> r5ret5023(int seed);`),
        structs: parseStruct(`std::forward_list<char> r5ret5023(int seed);`),
        classes: parseClass(`std::forward_list<char> r5ret5023(int seed);`),
        funcs: parseFunction(`std::forward_list<char> r5ret5023(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5023 生成结果为空');
      const expectSnippet0 = 'export function r5ret5023(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5023 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5024
  * @tc.name : h2dts_gen_5024
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5024', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<wchar_t> r5ret5024(int seed);`),
        unions: parseUnion(`std::forward_list<wchar_t> r5ret5024(int seed);`),
        structs: parseStruct(`std::forward_list<wchar_t> r5ret5024(int seed);`),
        classes: parseClass(`std::forward_list<wchar_t> r5ret5024(int seed);`),
        funcs: parseFunction(`std::forward_list<wchar_t> r5ret5024(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5024 生成结果为空');
      const expectSnippet0 = 'export function r5ret5024(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5024 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5025
  * @tc.name : h2dts_gen_5025
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5025', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char8_t> r5ret5025(int seed);`),
        unions: parseUnion(`std::forward_list<char8_t> r5ret5025(int seed);`),
        structs: parseStruct(`std::forward_list<char8_t> r5ret5025(int seed);`),
        classes: parseClass(`std::forward_list<char8_t> r5ret5025(int seed);`),
        funcs: parseFunction(`std::forward_list<char8_t> r5ret5025(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5025 生成结果为空');
      const expectSnippet0 = 'export function r5ret5025(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5025 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5026
  * @tc.name : h2dts_gen_5026
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5026', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char16_t> r5ret5026(int seed);`),
        unions: parseUnion(`std::forward_list<char16_t> r5ret5026(int seed);`),
        structs: parseStruct(`std::forward_list<char16_t> r5ret5026(int seed);`),
        classes: parseClass(`std::forward_list<char16_t> r5ret5026(int seed);`),
        funcs: parseFunction(`std::forward_list<char16_t> r5ret5026(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5026 生成结果为空');
      const expectSnippet0 = 'export function r5ret5026(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5026 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5027
  * @tc.name : h2dts_gen_5027
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5027', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char32_t> r5ret5027(int seed);`),
        unions: parseUnion(`std::forward_list<char32_t> r5ret5027(int seed);`),
        structs: parseStruct(`std::forward_list<char32_t> r5ret5027(int seed);`),
        classes: parseClass(`std::forward_list<char32_t> r5ret5027(int seed);`),
        funcs: parseFunction(`std::forward_list<char32_t> r5ret5027(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5027 生成结果为空');
      const expectSnippet0 = 'export function r5ret5027(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5027 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5028
  * @tc.name : h2dts_gen_5028
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5028', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int>::iterator r5ret5028(int seed);`),
        unions: parseUnion(`std::forward_list<int>::iterator r5ret5028(int seed);`),
        structs: parseStruct(`std::forward_list<int>::iterator r5ret5028(int seed);`),
        classes: parseClass(`std::forward_list<int>::iterator r5ret5028(int seed);`),
        funcs: parseFunction(`std::forward_list<int>::iterator r5ret5028(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5028 生成结果为空');
      const expectSnippet0 = 'export function r5ret5028(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5028 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5029
  * @tc.name : h2dts_gen_5029
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5029', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<size_t>::iterator r5ret5029(int seed);`),
        unions: parseUnion(`std::forward_list<size_t>::iterator r5ret5029(int seed);`),
        structs: parseStruct(`std::forward_list<size_t>::iterator r5ret5029(int seed);`),
        classes: parseClass(`std::forward_list<size_t>::iterator r5ret5029(int seed);`),
        funcs: parseFunction(`std::forward_list<size_t>::iterator r5ret5029(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5029 生成结果为空');
      const expectSnippet0 = 'export function r5ret5029(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5029 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5030
  * @tc.name : h2dts_gen_5030
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5030', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<double>::iterator r5ret5030(int seed);`),
        unions: parseUnion(`std::forward_list<double>::iterator r5ret5030(int seed);`),
        structs: parseStruct(`std::forward_list<double>::iterator r5ret5030(int seed);`),
        classes: parseClass(`std::forward_list<double>::iterator r5ret5030(int seed);`),
        funcs: parseFunction(`std::forward_list<double>::iterator r5ret5030(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5030 生成结果为空');
      const expectSnippet0 = 'export function r5ret5030(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5030 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5031
  * @tc.name : h2dts_gen_5031
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5031', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<float>::iterator r5ret5031(int seed);`),
        unions: parseUnion(`std::forward_list<float>::iterator r5ret5031(int seed);`),
        structs: parseStruct(`std::forward_list<float>::iterator r5ret5031(int seed);`),
        classes: parseClass(`std::forward_list<float>::iterator r5ret5031(int seed);`),
        funcs: parseFunction(`std::forward_list<float>::iterator r5ret5031(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5031 生成结果为空');
      const expectSnippet0 = 'export function r5ret5031(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5031 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5031 执行异常: ${String(err)}`);
    }
  });
});
