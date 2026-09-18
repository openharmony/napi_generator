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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part149.');

  /**
  * @tc.number : h2dts_gen_5032
  * @tc.name : h2dts_gen_5032
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5032', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<long>::iterator r5ret5032(int seed);`),
        unions: parseUnion(`std::forward_list<long>::iterator r5ret5032(int seed);`),
        structs: parseStruct(`std::forward_list<long>::iterator r5ret5032(int seed);`),
        classes: parseClass(`std::forward_list<long>::iterator r5ret5032(int seed);`),
        funcs: parseFunction(`std::forward_list<long>::iterator r5ret5032(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5032 生成结果为空');
      const expectSnippet0 = 'export function r5ret5032(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5032 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5033
  * @tc.name : h2dts_gen_5033
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5033', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<short>::iterator r5ret5033(int seed);`),
        unions: parseUnion(`std::forward_list<short>::iterator r5ret5033(int seed);`),
        structs: parseStruct(`std::forward_list<short>::iterator r5ret5033(int seed);`),
        classes: parseClass(`std::forward_list<short>::iterator r5ret5033(int seed);`),
        funcs: parseFunction(`std::forward_list<short>::iterator r5ret5033(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5033 生成结果为空');
      const expectSnippet0 = 'export function r5ret5033(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5033 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5034
  * @tc.name : h2dts_gen_5034
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5034', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint8_t>::iterator r5ret5034(int seed);`),
        unions: parseUnion(`std::forward_list<uint8_t>::iterator r5ret5034(int seed);`),
        structs: parseStruct(`std::forward_list<uint8_t>::iterator r5ret5034(int seed);`),
        classes: parseClass(`std::forward_list<uint8_t>::iterator r5ret5034(int seed);`),
        funcs: parseFunction(`std::forward_list<uint8_t>::iterator r5ret5034(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5034 生成结果为空');
      const expectSnippet0 = 'export function r5ret5034(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5034 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5035
  * @tc.name : h2dts_gen_5035
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5035', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint16_t>::iterator r5ret5035(int seed);`),
        unions: parseUnion(`std::forward_list<uint16_t>::iterator r5ret5035(int seed);`),
        structs: parseStruct(`std::forward_list<uint16_t>::iterator r5ret5035(int seed);`),
        classes: parseClass(`std::forward_list<uint16_t>::iterator r5ret5035(int seed);`),
        funcs: parseFunction(`std::forward_list<uint16_t>::iterator r5ret5035(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5035 生成结果为空');
      const expectSnippet0 = 'export function r5ret5035(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5035 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5036
  * @tc.name : h2dts_gen_5036
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5036', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint32_t>::iterator r5ret5036(int seed);`),
        unions: parseUnion(`std::forward_list<uint32_t>::iterator r5ret5036(int seed);`),
        structs: parseStruct(`std::forward_list<uint32_t>::iterator r5ret5036(int seed);`),
        classes: parseClass(`std::forward_list<uint32_t>::iterator r5ret5036(int seed);`),
        funcs: parseFunction(`std::forward_list<uint32_t>::iterator r5ret5036(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5036 生成结果为空');
      const expectSnippet0 = 'export function r5ret5036(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5036 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5037
  * @tc.name : h2dts_gen_5037
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5037', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<uint64_t>::iterator r5ret5037(int seed);`),
        unions: parseUnion(`std::forward_list<uint64_t>::iterator r5ret5037(int seed);`),
        structs: parseStruct(`std::forward_list<uint64_t>::iterator r5ret5037(int seed);`),
        classes: parseClass(`std::forward_list<uint64_t>::iterator r5ret5037(int seed);`),
        funcs: parseFunction(`std::forward_list<uint64_t>::iterator r5ret5037(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5037 生成结果为空');
      const expectSnippet0 = 'export function r5ret5037(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5037 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5038
  * @tc.name : h2dts_gen_5038
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5038', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int8_t>::iterator r5ret5038(int seed);`),
        unions: parseUnion(`std::forward_list<int8_t>::iterator r5ret5038(int seed);`),
        structs: parseStruct(`std::forward_list<int8_t>::iterator r5ret5038(int seed);`),
        classes: parseClass(`std::forward_list<int8_t>::iterator r5ret5038(int seed);`),
        funcs: parseFunction(`std::forward_list<int8_t>::iterator r5ret5038(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5038 生成结果为空');
      const expectSnippet0 = 'export function r5ret5038(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5038 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5039
  * @tc.name : h2dts_gen_5039
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5039', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int16_t>::iterator r5ret5039(int seed);`),
        unions: parseUnion(`std::forward_list<int16_t>::iterator r5ret5039(int seed);`),
        structs: parseStruct(`std::forward_list<int16_t>::iterator r5ret5039(int seed);`),
        classes: parseClass(`std::forward_list<int16_t>::iterator r5ret5039(int seed);`),
        funcs: parseFunction(`std::forward_list<int16_t>::iterator r5ret5039(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5039 生成结果为空');
      const expectSnippet0 = 'export function r5ret5039(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5039 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5040
  * @tc.name : h2dts_gen_5040
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5040', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int32_t>::iterator r5ret5040(int seed);`),
        unions: parseUnion(`std::forward_list<int32_t>::iterator r5ret5040(int seed);`),
        structs: parseStruct(`std::forward_list<int32_t>::iterator r5ret5040(int seed);`),
        classes: parseClass(`std::forward_list<int32_t>::iterator r5ret5040(int seed);`),
        funcs: parseFunction(`std::forward_list<int32_t>::iterator r5ret5040(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5040 生成结果为空');
      const expectSnippet0 = 'export function r5ret5040(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5040 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5041
  * @tc.name : h2dts_gen_5041
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5041', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<int64_t>::iterator r5ret5041(int seed);`),
        unions: parseUnion(`std::forward_list<int64_t>::iterator r5ret5041(int seed);`),
        structs: parseStruct(`std::forward_list<int64_t>::iterator r5ret5041(int seed);`),
        classes: parseClass(`std::forward_list<int64_t>::iterator r5ret5041(int seed);`),
        funcs: parseFunction(`std::forward_list<int64_t>::iterator r5ret5041(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5041 生成结果为空');
      const expectSnippet0 = 'export function r5ret5041(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5041 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5042
  * @tc.name : h2dts_gen_5042
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5042', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<unsigned>::iterator r5ret5042(int seed);`),
        unions: parseUnion(`std::forward_list<unsigned>::iterator r5ret5042(int seed);`),
        structs: parseStruct(`std::forward_list<unsigned>::iterator r5ret5042(int seed);`),
        classes: parseClass(`std::forward_list<unsigned>::iterator r5ret5042(int seed);`),
        funcs: parseFunction(`std::forward_list<unsigned>::iterator r5ret5042(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5042 生成结果为空');
      const expectSnippet0 = 'export function r5ret5042(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5042 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5043
  * @tc.name : h2dts_gen_5043
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5043', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<bool>::iterator r5ret5043(int seed);`),
        unions: parseUnion(`std::forward_list<bool>::iterator r5ret5043(int seed);`),
        structs: parseStruct(`std::forward_list<bool>::iterator r5ret5043(int seed);`),
        classes: parseClass(`std::forward_list<bool>::iterator r5ret5043(int seed);`),
        funcs: parseFunction(`std::forward_list<bool>::iterator r5ret5043(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5043 生成结果为空');
      const expectSnippet0 = 'export function r5ret5043(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5043 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5044
  * @tc.name : h2dts_gen_5044
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5044', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char>::iterator r5ret5044(int seed);`),
        unions: parseUnion(`std::forward_list<char>::iterator r5ret5044(int seed);`),
        structs: parseStruct(`std::forward_list<char>::iterator r5ret5044(int seed);`),
        classes: parseClass(`std::forward_list<char>::iterator r5ret5044(int seed);`),
        funcs: parseFunction(`std::forward_list<char>::iterator r5ret5044(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5044 生成结果为空');
      const expectSnippet0 = 'export function r5ret5044(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5044 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5045
  * @tc.name : h2dts_gen_5045
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5045', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<wchar_t>::iterator r5ret5045(int seed);`),
        unions: parseUnion(`std::forward_list<wchar_t>::iterator r5ret5045(int seed);`),
        structs: parseStruct(`std::forward_list<wchar_t>::iterator r5ret5045(int seed);`),
        classes: parseClass(`std::forward_list<wchar_t>::iterator r5ret5045(int seed);`),
        funcs: parseFunction(`std::forward_list<wchar_t>::iterator r5ret5045(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5045 生成结果为空');
      const expectSnippet0 = 'export function r5ret5045(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5045 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5046
  * @tc.name : h2dts_gen_5046
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5046', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char8_t>::iterator r5ret5046(int seed);`),
        unions: parseUnion(`std::forward_list<char8_t>::iterator r5ret5046(int seed);`),
        structs: parseStruct(`std::forward_list<char8_t>::iterator r5ret5046(int seed);`),
        classes: parseClass(`std::forward_list<char8_t>::iterator r5ret5046(int seed);`),
        funcs: parseFunction(`std::forward_list<char8_t>::iterator r5ret5046(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5046 生成结果为空');
      const expectSnippet0 = 'export function r5ret5046(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5046 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5047
  * @tc.name : h2dts_gen_5047
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5047', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char16_t>::iterator r5ret5047(int seed);`),
        unions: parseUnion(`std::forward_list<char16_t>::iterator r5ret5047(int seed);`),
        structs: parseStruct(`std::forward_list<char16_t>::iterator r5ret5047(int seed);`),
        classes: parseClass(`std::forward_list<char16_t>::iterator r5ret5047(int seed);`),
        funcs: parseFunction(`std::forward_list<char16_t>::iterator r5ret5047(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5047 生成结果为空');
      const expectSnippet0 = 'export function r5ret5047(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5047 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5048
  * @tc.name : h2dts_gen_5048
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::forward_list<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5048', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::forward_list<char32_t>::iterator r5ret5048(int seed);`),
        unions: parseUnion(`std::forward_list<char32_t>::iterator r5ret5048(int seed);`),
        structs: parseStruct(`std::forward_list<char32_t>::iterator r5ret5048(int seed);`),
        classes: parseClass(`std::forward_list<char32_t>::iterator r5ret5048(int seed);`),
        funcs: parseFunction(`std::forward_list<char32_t>::iterator r5ret5048(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5048 生成结果为空');
      const expectSnippet0 = 'export function r5ret5048(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5048 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5049
  * @tc.name : h2dts_gen_5049
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5049', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int> r5ret5049(int seed);`),
        unions: parseUnion(`std::stack<int> r5ret5049(int seed);`),
        structs: parseStruct(`std::stack<int> r5ret5049(int seed);`),
        classes: parseClass(`std::stack<int> r5ret5049(int seed);`),
        funcs: parseFunction(`std::stack<int> r5ret5049(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5049 生成结果为空');
      const expectSnippet0 = 'export function r5ret5049(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5049 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5050
  * @tc.name : h2dts_gen_5050
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5050', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<size_t> r5ret5050(int seed);`),
        unions: parseUnion(`std::stack<size_t> r5ret5050(int seed);`),
        structs: parseStruct(`std::stack<size_t> r5ret5050(int seed);`),
        classes: parseClass(`std::stack<size_t> r5ret5050(int seed);`),
        funcs: parseFunction(`std::stack<size_t> r5ret5050(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5050 生成结果为空');
      const expectSnippet0 = 'export function r5ret5050(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5050 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5051
  * @tc.name : h2dts_gen_5051
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5051', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<double> r5ret5051(int seed);`),
        unions: parseUnion(`std::stack<double> r5ret5051(int seed);`),
        structs: parseStruct(`std::stack<double> r5ret5051(int seed);`),
        classes: parseClass(`std::stack<double> r5ret5051(int seed);`),
        funcs: parseFunction(`std::stack<double> r5ret5051(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5051 生成结果为空');
      const expectSnippet0 = 'export function r5ret5051(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5051 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5052
  * @tc.name : h2dts_gen_5052
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5052', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<float> r5ret5052(int seed);`),
        unions: parseUnion(`std::stack<float> r5ret5052(int seed);`),
        structs: parseStruct(`std::stack<float> r5ret5052(int seed);`),
        classes: parseClass(`std::stack<float> r5ret5052(int seed);`),
        funcs: parseFunction(`std::stack<float> r5ret5052(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5052 生成结果为空');
      const expectSnippet0 = 'export function r5ret5052(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5052 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5053
  * @tc.name : h2dts_gen_5053
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5053', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<long> r5ret5053(int seed);`),
        unions: parseUnion(`std::stack<long> r5ret5053(int seed);`),
        structs: parseStruct(`std::stack<long> r5ret5053(int seed);`),
        classes: parseClass(`std::stack<long> r5ret5053(int seed);`),
        funcs: parseFunction(`std::stack<long> r5ret5053(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5053 生成结果为空');
      const expectSnippet0 = 'export function r5ret5053(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5053 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5054
  * @tc.name : h2dts_gen_5054
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5054', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<short> r5ret5054(int seed);`),
        unions: parseUnion(`std::stack<short> r5ret5054(int seed);`),
        structs: parseStruct(`std::stack<short> r5ret5054(int seed);`),
        classes: parseClass(`std::stack<short> r5ret5054(int seed);`),
        funcs: parseFunction(`std::stack<short> r5ret5054(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5054 生成结果为空');
      const expectSnippet0 = 'export function r5ret5054(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5054 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5055
  * @tc.name : h2dts_gen_5055
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5055', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint8_t> r5ret5055(int seed);`),
        unions: parseUnion(`std::stack<uint8_t> r5ret5055(int seed);`),
        structs: parseStruct(`std::stack<uint8_t> r5ret5055(int seed);`),
        classes: parseClass(`std::stack<uint8_t> r5ret5055(int seed);`),
        funcs: parseFunction(`std::stack<uint8_t> r5ret5055(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5055 生成结果为空');
      const expectSnippet0 = 'export function r5ret5055(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5055 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5056
  * @tc.name : h2dts_gen_5056
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5056', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint16_t> r5ret5056(int seed);`),
        unions: parseUnion(`std::stack<uint16_t> r5ret5056(int seed);`),
        structs: parseStruct(`std::stack<uint16_t> r5ret5056(int seed);`),
        classes: parseClass(`std::stack<uint16_t> r5ret5056(int seed);`),
        funcs: parseFunction(`std::stack<uint16_t> r5ret5056(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5056 生成结果为空');
      const expectSnippet0 = 'export function r5ret5056(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5056 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5057
  * @tc.name : h2dts_gen_5057
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5057', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint32_t> r5ret5057(int seed);`),
        unions: parseUnion(`std::stack<uint32_t> r5ret5057(int seed);`),
        structs: parseStruct(`std::stack<uint32_t> r5ret5057(int seed);`),
        classes: parseClass(`std::stack<uint32_t> r5ret5057(int seed);`),
        funcs: parseFunction(`std::stack<uint32_t> r5ret5057(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5057 生成结果为空');
      const expectSnippet0 = 'export function r5ret5057(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5057 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5058
  * @tc.name : h2dts_gen_5058
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5058', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<uint64_t> r5ret5058(int seed);`),
        unions: parseUnion(`std::stack<uint64_t> r5ret5058(int seed);`),
        structs: parseStruct(`std::stack<uint64_t> r5ret5058(int seed);`),
        classes: parseClass(`std::stack<uint64_t> r5ret5058(int seed);`),
        funcs: parseFunction(`std::stack<uint64_t> r5ret5058(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5058 生成结果为空');
      const expectSnippet0 = 'export function r5ret5058(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5058 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5059
  * @tc.name : h2dts_gen_5059
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5059', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int8_t> r5ret5059(int seed);`),
        unions: parseUnion(`std::stack<int8_t> r5ret5059(int seed);`),
        structs: parseStruct(`std::stack<int8_t> r5ret5059(int seed);`),
        classes: parseClass(`std::stack<int8_t> r5ret5059(int seed);`),
        funcs: parseFunction(`std::stack<int8_t> r5ret5059(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5059 生成结果为空');
      const expectSnippet0 = 'export function r5ret5059(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5059 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5060
  * @tc.name : h2dts_gen_5060
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5060', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int16_t> r5ret5060(int seed);`),
        unions: parseUnion(`std::stack<int16_t> r5ret5060(int seed);`),
        structs: parseStruct(`std::stack<int16_t> r5ret5060(int seed);`),
        classes: parseClass(`std::stack<int16_t> r5ret5060(int seed);`),
        funcs: parseFunction(`std::stack<int16_t> r5ret5060(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5060 生成结果为空');
      const expectSnippet0 = 'export function r5ret5060(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5060 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5061
  * @tc.name : h2dts_gen_5061
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5061', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int32_t> r5ret5061(int seed);`),
        unions: parseUnion(`std::stack<int32_t> r5ret5061(int seed);`),
        structs: parseStruct(`std::stack<int32_t> r5ret5061(int seed);`),
        classes: parseClass(`std::stack<int32_t> r5ret5061(int seed);`),
        funcs: parseFunction(`std::stack<int32_t> r5ret5061(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5061 生成结果为空');
      const expectSnippet0 = 'export function r5ret5061(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5061 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5062
  * @tc.name : h2dts_gen_5062
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5062', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<int64_t> r5ret5062(int seed);`),
        unions: parseUnion(`std::stack<int64_t> r5ret5062(int seed);`),
        structs: parseStruct(`std::stack<int64_t> r5ret5062(int seed);`),
        classes: parseClass(`std::stack<int64_t> r5ret5062(int seed);`),
        funcs: parseFunction(`std::stack<int64_t> r5ret5062(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5062 生成结果为空');
      const expectSnippet0 = 'export function r5ret5062(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5062 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5063
  * @tc.name : h2dts_gen_5063
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5063', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<unsigned> r5ret5063(int seed);`),
        unions: parseUnion(`std::stack<unsigned> r5ret5063(int seed);`),
        structs: parseStruct(`std::stack<unsigned> r5ret5063(int seed);`),
        classes: parseClass(`std::stack<unsigned> r5ret5063(int seed);`),
        funcs: parseFunction(`std::stack<unsigned> r5ret5063(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5063 生成结果为空');
      const expectSnippet0 = 'export function r5ret5063(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5063 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5064
  * @tc.name : h2dts_gen_5064
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5064', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<bool> r5ret5064(int seed);`),
        unions: parseUnion(`std::stack<bool> r5ret5064(int seed);`),
        structs: parseStruct(`std::stack<bool> r5ret5064(int seed);`),
        classes: parseClass(`std::stack<bool> r5ret5064(int seed);`),
        funcs: parseFunction(`std::stack<bool> r5ret5064(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5064 生成结果为空');
      const expectSnippet0 = 'export function r5ret5064(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5064 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5065
  * @tc.name : h2dts_gen_5065
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5065', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<char> r5ret5065(int seed);`),
        unions: parseUnion(`std::stack<char> r5ret5065(int seed);`),
        structs: parseStruct(`std::stack<char> r5ret5065(int seed);`),
        classes: parseClass(`std::stack<char> r5ret5065(int seed);`),
        funcs: parseFunction(`std::stack<char> r5ret5065(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5065 生成结果为空');
      const expectSnippet0 = 'export function r5ret5065(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5065 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5066
  * @tc.name : h2dts_gen_5066
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::stack<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5066', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::stack<wchar_t> r5ret5066(int seed);`),
        unions: parseUnion(`std::stack<wchar_t> r5ret5066(int seed);`),
        structs: parseStruct(`std::stack<wchar_t> r5ret5066(int seed);`),
        classes: parseClass(`std::stack<wchar_t> r5ret5066(int seed);`),
        funcs: parseFunction(`std::stack<wchar_t> r5ret5066(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5066 生成结果为空');
      const expectSnippet0 = 'export function r5ret5066(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5066 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5066 执行异常: ${String(err)}`);
    }
  });
});
