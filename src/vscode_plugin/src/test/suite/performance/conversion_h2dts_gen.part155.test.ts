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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part155.');

  /**
  * @tc.number : h2dts_gen_5242
  * @tc.name : h2dts_gen_5242
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5242', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5242(int a, size_t b, long c, int16_t d);`),
        unions: parseUnion(`void r5qp5242(int a, size_t b, long c, int16_t d);`),
        structs: parseStruct(`void r5qp5242(int a, size_t b, long c, int16_t d);`),
        classes: parseClass(`void r5qp5242(int a, size_t b, long c, int16_t d);`),
        funcs: parseFunction(`void r5qp5242(int a, size_t b, long c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5242 生成结果为空');
      const expectSnippet0 = 'export function r5qp5242(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5242 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5242 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5243
  * @tc.name : h2dts_gen_5243
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5243', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5243(int a, size_t b, long c, int32_t d);`),
        unions: parseUnion(`void r5qp5243(int a, size_t b, long c, int32_t d);`),
        structs: parseStruct(`void r5qp5243(int a, size_t b, long c, int32_t d);`),
        classes: parseClass(`void r5qp5243(int a, size_t b, long c, int32_t d);`),
        funcs: parseFunction(`void r5qp5243(int a, size_t b, long c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5243 生成结果为空');
      const expectSnippet0 = 'export function r5qp5243(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5243 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5243 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5244
  * @tc.name : h2dts_gen_5244
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5244', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5244(int a, size_t b, long c, int64_t d);`),
        unions: parseUnion(`void r5qp5244(int a, size_t b, long c, int64_t d);`),
        structs: parseStruct(`void r5qp5244(int a, size_t b, long c, int64_t d);`),
        classes: parseClass(`void r5qp5244(int a, size_t b, long c, int64_t d);`),
        funcs: parseFunction(`void r5qp5244(int a, size_t b, long c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5244 生成结果为空');
      const expectSnippet0 = 'export function r5qp5244(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5244 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5244 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5245
  * @tc.name : h2dts_gen_5245
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5245', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5245(int a, size_t b, long c, unsigned d);`),
        unions: parseUnion(`void r5qp5245(int a, size_t b, long c, unsigned d);`),
        structs: parseStruct(`void r5qp5245(int a, size_t b, long c, unsigned d);`),
        classes: parseClass(`void r5qp5245(int a, size_t b, long c, unsigned d);`),
        funcs: parseFunction(`void r5qp5245(int a, size_t b, long c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5245 生成结果为空');
      const expectSnippet0 = 'export function r5qp5245(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5245 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5245 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5246
  * @tc.name : h2dts_gen_5246
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5246', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5246(int a, size_t b, long c, bool d);`),
        unions: parseUnion(`void r5qp5246(int a, size_t b, long c, bool d);`),
        structs: parseStruct(`void r5qp5246(int a, size_t b, long c, bool d);`),
        classes: parseClass(`void r5qp5246(int a, size_t b, long c, bool d);`),
        funcs: parseFunction(`void r5qp5246(int a, size_t b, long c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5246 生成结果为空');
      const expectSnippet0 = 'export function r5qp5246(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5246 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5246 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5247
  * @tc.name : h2dts_gen_5247
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5247', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5247(int a, size_t b, long c, char d);`),
        unions: parseUnion(`void r5qp5247(int a, size_t b, long c, char d);`),
        structs: parseStruct(`void r5qp5247(int a, size_t b, long c, char d);`),
        classes: parseClass(`void r5qp5247(int a, size_t b, long c, char d);`),
        funcs: parseFunction(`void r5qp5247(int a, size_t b, long c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5247 生成结果为空');
      const expectSnippet0 = 'export function r5qp5247(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5247 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5247 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5248
  * @tc.name : h2dts_gen_5248
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5248', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5248(int a, size_t b, long c, wchar_t d);`),
        unions: parseUnion(`void r5qp5248(int a, size_t b, long c, wchar_t d);`),
        structs: parseStruct(`void r5qp5248(int a, size_t b, long c, wchar_t d);`),
        classes: parseClass(`void r5qp5248(int a, size_t b, long c, wchar_t d);`),
        funcs: parseFunction(`void r5qp5248(int a, size_t b, long c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5248 生成结果为空');
      const expectSnippet0 = 'export function r5qp5248(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5248 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5248 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5249
  * @tc.name : h2dts_gen_5249
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5249', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5249(int a, size_t b, long c, char8_t d);`),
        unions: parseUnion(`void r5qp5249(int a, size_t b, long c, char8_t d);`),
        structs: parseStruct(`void r5qp5249(int a, size_t b, long c, char8_t d);`),
        classes: parseClass(`void r5qp5249(int a, size_t b, long c, char8_t d);`),
        funcs: parseFunction(`void r5qp5249(int a, size_t b, long c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5249 生成结果为空');
      const expectSnippet0 = 'export function r5qp5249(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5249 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5249 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5250
  * @tc.name : h2dts_gen_5250
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5250', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5250(int a, size_t b, long c, char16_t d);`),
        unions: parseUnion(`void r5qp5250(int a, size_t b, long c, char16_t d);`),
        structs: parseStruct(`void r5qp5250(int a, size_t b, long c, char16_t d);`),
        classes: parseClass(`void r5qp5250(int a, size_t b, long c, char16_t d);`),
        funcs: parseFunction(`void r5qp5250(int a, size_t b, long c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5250 生成结果为空');
      const expectSnippet0 = 'export function r5qp5250(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5250 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5250 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5251
  * @tc.name : h2dts_gen_5251
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5251', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5251(int a, size_t b, long c, char32_t d);`),
        unions: parseUnion(`void r5qp5251(int a, size_t b, long c, char32_t d);`),
        structs: parseStruct(`void r5qp5251(int a, size_t b, long c, char32_t d);`),
        classes: parseClass(`void r5qp5251(int a, size_t b, long c, char32_t d);`),
        funcs: parseFunction(`void r5qp5251(int a, size_t b, long c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5251 生成结果为空');
      const expectSnippet0 = 'export function r5qp5251(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5251 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5251 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5252
  * @tc.name : h2dts_gen_5252
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5252', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5252(int a, size_t b, long c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp5252(int a, size_t b, long c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp5252(int a, size_t b, long c, std::deque<int> d);`),
        classes: parseClass(`void r5qp5252(int a, size_t b, long c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp5252(int a, size_t b, long c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5252 生成结果为空');
      const expectSnippet0 = 'export function r5qp5252(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5252 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5253
  * @tc.name : h2dts_gen_5253
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5253', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5253(int a, size_t b, long c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp5253(int a, size_t b, long c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp5253(int a, size_t b, long c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp5253(int a, size_t b, long c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp5253(int a, size_t b, long c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5253 生成结果为空');
      const expectSnippet0 = 'export function r5qp5253(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5253 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5254
  * @tc.name : h2dts_gen_5254
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5254', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5254(int a, size_t b, long c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp5254(int a, size_t b, long c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp5254(int a, size_t b, long c, std::deque<double> d);`),
        classes: parseClass(`void r5qp5254(int a, size_t b, long c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp5254(int a, size_t b, long c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5254 生成结果为空');
      const expectSnippet0 = 'export function r5qp5254(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5254 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5255
  * @tc.name : h2dts_gen_5255
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5255', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5255(int a, size_t b, long c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp5255(int a, size_t b, long c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp5255(int a, size_t b, long c, std::deque<float> d);`),
        classes: parseClass(`void r5qp5255(int a, size_t b, long c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp5255(int a, size_t b, long c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5255 生成结果为空');
      const expectSnippet0 = 'export function r5qp5255(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5255 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5256
  * @tc.name : h2dts_gen_5256
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5256', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5256(int a, size_t b, long c, std::deque<long> d);`),
        unions: parseUnion(`void r5qp5256(int a, size_t b, long c, std::deque<long> d);`),
        structs: parseStruct(`void r5qp5256(int a, size_t b, long c, std::deque<long> d);`),
        classes: parseClass(`void r5qp5256(int a, size_t b, long c, std::deque<long> d);`),
        funcs: parseFunction(`void r5qp5256(int a, size_t b, long c, std::deque<long> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5256 生成结果为空');
      const expectSnippet0 = 'export function r5qp5256(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5256 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5257
  * @tc.name : h2dts_gen_5257
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5257', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5257(int a, size_t b, long c, std::deque<short> d);`),
        unions: parseUnion(`void r5qp5257(int a, size_t b, long c, std::deque<short> d);`),
        structs: parseStruct(`void r5qp5257(int a, size_t b, long c, std::deque<short> d);`),
        classes: parseClass(`void r5qp5257(int a, size_t b, long c, std::deque<short> d);`),
        funcs: parseFunction(`void r5qp5257(int a, size_t b, long c, std::deque<short> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5257 生成结果为空');
      const expectSnippet0 = 'export function r5qp5257(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5257 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5258
  * @tc.name : h2dts_gen_5258
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5258', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5258(int a, size_t b, long c, std::deque<uint8_t> d);`),
        unions: parseUnion(`void r5qp5258(int a, size_t b, long c, std::deque<uint8_t> d);`),
        structs: parseStruct(`void r5qp5258(int a, size_t b, long c, std::deque<uint8_t> d);`),
        classes: parseClass(`void r5qp5258(int a, size_t b, long c, std::deque<uint8_t> d);`),
        funcs: parseFunction(`void r5qp5258(int a, size_t b, long c, std::deque<uint8_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5258 生成结果为空');
      const expectSnippet0 = 'export function r5qp5258(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5258 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5259
  * @tc.name : h2dts_gen_5259
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5259', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5259(int a, size_t b, long c, std::deque<uint16_t> d);`),
        unions: parseUnion(`void r5qp5259(int a, size_t b, long c, std::deque<uint16_t> d);`),
        structs: parseStruct(`void r5qp5259(int a, size_t b, long c, std::deque<uint16_t> d);`),
        classes: parseClass(`void r5qp5259(int a, size_t b, long c, std::deque<uint16_t> d);`),
        funcs: parseFunction(`void r5qp5259(int a, size_t b, long c, std::deque<uint16_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5259 生成结果为空');
      const expectSnippet0 = 'export function r5qp5259(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5259 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5260
  * @tc.name : h2dts_gen_5260
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5260', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5260(int a, size_t b, long c, std::deque<uint32_t> d);`),
        unions: parseUnion(`void r5qp5260(int a, size_t b, long c, std::deque<uint32_t> d);`),
        structs: parseStruct(`void r5qp5260(int a, size_t b, long c, std::deque<uint32_t> d);`),
        classes: parseClass(`void r5qp5260(int a, size_t b, long c, std::deque<uint32_t> d);`),
        funcs: parseFunction(`void r5qp5260(int a, size_t b, long c, std::deque<uint32_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5260 生成结果为空');
      const expectSnippet0 = 'export function r5qp5260(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5260 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5261
  * @tc.name : h2dts_gen_5261
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5261', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5261(int a, size_t b, uint8_t c, uint16_t d);`),
        unions: parseUnion(`void r5qp5261(int a, size_t b, uint8_t c, uint16_t d);`),
        structs: parseStruct(`void r5qp5261(int a, size_t b, uint8_t c, uint16_t d);`),
        classes: parseClass(`void r5qp5261(int a, size_t b, uint8_t c, uint16_t d);`),
        funcs: parseFunction(`void r5qp5261(int a, size_t b, uint8_t c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5261 生成结果为空');
      const expectSnippet0 = 'export function r5qp5261(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5261 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5262
  * @tc.name : h2dts_gen_5262
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5262', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5262(int a, size_t b, uint8_t c, uint32_t d);`),
        unions: parseUnion(`void r5qp5262(int a, size_t b, uint8_t c, uint32_t d);`),
        structs: parseStruct(`void r5qp5262(int a, size_t b, uint8_t c, uint32_t d);`),
        classes: parseClass(`void r5qp5262(int a, size_t b, uint8_t c, uint32_t d);`),
        funcs: parseFunction(`void r5qp5262(int a, size_t b, uint8_t c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5262 生成结果为空');
      const expectSnippet0 = 'export function r5qp5262(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5262 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5263
  * @tc.name : h2dts_gen_5263
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5263', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5263(int a, size_t b, uint8_t c, uint64_t d);`),
        unions: parseUnion(`void r5qp5263(int a, size_t b, uint8_t c, uint64_t d);`),
        structs: parseStruct(`void r5qp5263(int a, size_t b, uint8_t c, uint64_t d);`),
        classes: parseClass(`void r5qp5263(int a, size_t b, uint8_t c, uint64_t d);`),
        funcs: parseFunction(`void r5qp5263(int a, size_t b, uint8_t c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5263 生成结果为空');
      const expectSnippet0 = 'export function r5qp5263(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5263 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5264
  * @tc.name : h2dts_gen_5264
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5264', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5264(int a, size_t b, uint8_t c, int8_t d);`),
        unions: parseUnion(`void r5qp5264(int a, size_t b, uint8_t c, int8_t d);`),
        structs: parseStruct(`void r5qp5264(int a, size_t b, uint8_t c, int8_t d);`),
        classes: parseClass(`void r5qp5264(int a, size_t b, uint8_t c, int8_t d);`),
        funcs: parseFunction(`void r5qp5264(int a, size_t b, uint8_t c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5264 生成结果为空');
      const expectSnippet0 = 'export function r5qp5264(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5264 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5265
  * @tc.name : h2dts_gen_5265
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5265', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5265(int a, size_t b, uint8_t c, int16_t d);`),
        unions: parseUnion(`void r5qp5265(int a, size_t b, uint8_t c, int16_t d);`),
        structs: parseStruct(`void r5qp5265(int a, size_t b, uint8_t c, int16_t d);`),
        classes: parseClass(`void r5qp5265(int a, size_t b, uint8_t c, int16_t d);`),
        funcs: parseFunction(`void r5qp5265(int a, size_t b, uint8_t c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5265 生成结果为空');
      const expectSnippet0 = 'export function r5qp5265(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5265 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5266
  * @tc.name : h2dts_gen_5266
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5266', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5266(int a, size_t b, uint8_t c, int32_t d);`),
        unions: parseUnion(`void r5qp5266(int a, size_t b, uint8_t c, int32_t d);`),
        structs: parseStruct(`void r5qp5266(int a, size_t b, uint8_t c, int32_t d);`),
        classes: parseClass(`void r5qp5266(int a, size_t b, uint8_t c, int32_t d);`),
        funcs: parseFunction(`void r5qp5266(int a, size_t b, uint8_t c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5266 生成结果为空');
      const expectSnippet0 = 'export function r5qp5266(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5266 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5267
  * @tc.name : h2dts_gen_5267
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5267', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5267(int a, size_t b, uint8_t c, int64_t d);`),
        unions: parseUnion(`void r5qp5267(int a, size_t b, uint8_t c, int64_t d);`),
        structs: parseStruct(`void r5qp5267(int a, size_t b, uint8_t c, int64_t d);`),
        classes: parseClass(`void r5qp5267(int a, size_t b, uint8_t c, int64_t d);`),
        funcs: parseFunction(`void r5qp5267(int a, size_t b, uint8_t c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5267 生成结果为空');
      const expectSnippet0 = 'export function r5qp5267(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5267 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5268
  * @tc.name : h2dts_gen_5268
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5268', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5268(int a, size_t b, uint8_t c, unsigned d);`),
        unions: parseUnion(`void r5qp5268(int a, size_t b, uint8_t c, unsigned d);`),
        structs: parseStruct(`void r5qp5268(int a, size_t b, uint8_t c, unsigned d);`),
        classes: parseClass(`void r5qp5268(int a, size_t b, uint8_t c, unsigned d);`),
        funcs: parseFunction(`void r5qp5268(int a, size_t b, uint8_t c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5268 生成结果为空');
      const expectSnippet0 = 'export function r5qp5268(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5268 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5269
  * @tc.name : h2dts_gen_5269
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5269', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5269(int a, size_t b, uint8_t c, bool d);`),
        unions: parseUnion(`void r5qp5269(int a, size_t b, uint8_t c, bool d);`),
        structs: parseStruct(`void r5qp5269(int a, size_t b, uint8_t c, bool d);`),
        classes: parseClass(`void r5qp5269(int a, size_t b, uint8_t c, bool d);`),
        funcs: parseFunction(`void r5qp5269(int a, size_t b, uint8_t c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5269 生成结果为空');
      const expectSnippet0 = 'export function r5qp5269(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5269 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5270
  * @tc.name : h2dts_gen_5270
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5270', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5270(int a, size_t b, uint8_t c, char d);`),
        unions: parseUnion(`void r5qp5270(int a, size_t b, uint8_t c, char d);`),
        structs: parseStruct(`void r5qp5270(int a, size_t b, uint8_t c, char d);`),
        classes: parseClass(`void r5qp5270(int a, size_t b, uint8_t c, char d);`),
        funcs: parseFunction(`void r5qp5270(int a, size_t b, uint8_t c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5270 生成结果为空');
      const expectSnippet0 = 'export function r5qp5270(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5270 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5271
  * @tc.name : h2dts_gen_5271
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5271', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5271(int a, size_t b, uint8_t c, wchar_t d);`),
        unions: parseUnion(`void r5qp5271(int a, size_t b, uint8_t c, wchar_t d);`),
        structs: parseStruct(`void r5qp5271(int a, size_t b, uint8_t c, wchar_t d);`),
        classes: parseClass(`void r5qp5271(int a, size_t b, uint8_t c, wchar_t d);`),
        funcs: parseFunction(`void r5qp5271(int a, size_t b, uint8_t c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5271 生成结果为空');
      const expectSnippet0 = 'export function r5qp5271(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5271 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5272
  * @tc.name : h2dts_gen_5272
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5272', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5272(int a, size_t b, uint8_t c, char8_t d);`),
        unions: parseUnion(`void r5qp5272(int a, size_t b, uint8_t c, char8_t d);`),
        structs: parseStruct(`void r5qp5272(int a, size_t b, uint8_t c, char8_t d);`),
        classes: parseClass(`void r5qp5272(int a, size_t b, uint8_t c, char8_t d);`),
        funcs: parseFunction(`void r5qp5272(int a, size_t b, uint8_t c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5272 生成结果为空');
      const expectSnippet0 = 'export function r5qp5272(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5272 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5272 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5273
  * @tc.name : h2dts_gen_5273
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5273', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5273(int a, size_t b, uint8_t c, char16_t d);`),
        unions: parseUnion(`void r5qp5273(int a, size_t b, uint8_t c, char16_t d);`),
        structs: parseStruct(`void r5qp5273(int a, size_t b, uint8_t c, char16_t d);`),
        classes: parseClass(`void r5qp5273(int a, size_t b, uint8_t c, char16_t d);`),
        funcs: parseFunction(`void r5qp5273(int a, size_t b, uint8_t c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5273 生成结果为空');
      const expectSnippet0 = 'export function r5qp5273(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5273 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5274
  * @tc.name : h2dts_gen_5274
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5274', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5274(int a, size_t b, uint8_t c, char32_t d);`),
        unions: parseUnion(`void r5qp5274(int a, size_t b, uint8_t c, char32_t d);`),
        structs: parseStruct(`void r5qp5274(int a, size_t b, uint8_t c, char32_t d);`),
        classes: parseClass(`void r5qp5274(int a, size_t b, uint8_t c, char32_t d);`),
        funcs: parseFunction(`void r5qp5274(int a, size_t b, uint8_t c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5274 生成结果为空');
      const expectSnippet0 = 'export function r5qp5274(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5274 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5275
  * @tc.name : h2dts_gen_5275
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5275', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5275(int a, size_t b, uint8_t c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp5275(int a, size_t b, uint8_t c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp5275(int a, size_t b, uint8_t c, std::deque<int> d);`),
        classes: parseClass(`void r5qp5275(int a, size_t b, uint8_t c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp5275(int a, size_t b, uint8_t c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5275 生成结果为空');
      const expectSnippet0 = 'export function r5qp5275(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5275 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5276
  * @tc.name : h2dts_gen_5276
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5276', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5276(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp5276(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp5276(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp5276(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp5276(int a, size_t b, uint8_t c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5276 生成结果为空');
      const expectSnippet0 = 'export function r5qp5276(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5276 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5276 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5276 执行异常: ${String(err)}`);
    }
  });
});
