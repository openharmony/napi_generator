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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part154.');

  /**
  * @tc.number : h2dts_gen_5207
  * @tc.name : h2dts_gen_5207
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5207', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5207(int a, size_t b, float c, std::deque<long> d);`),
        unions: parseUnion(`void r5qp5207(int a, size_t b, float c, std::deque<long> d);`),
        structs: parseStruct(`void r5qp5207(int a, size_t b, float c, std::deque<long> d);`),
        classes: parseClass(`void r5qp5207(int a, size_t b, float c, std::deque<long> d);`),
        funcs: parseFunction(`void r5qp5207(int a, size_t b, float c, std::deque<long> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5207 生成结果为空');
      const expectSnippet0 = 'export function r5qp5207(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5207 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5207 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5208
  * @tc.name : h2dts_gen_5208
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5208', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5208(int a, size_t b, float c, std::deque<short> d);`),
        unions: parseUnion(`void r5qp5208(int a, size_t b, float c, std::deque<short> d);`),
        structs: parseStruct(`void r5qp5208(int a, size_t b, float c, std::deque<short> d);`),
        classes: parseClass(`void r5qp5208(int a, size_t b, float c, std::deque<short> d);`),
        funcs: parseFunction(`void r5qp5208(int a, size_t b, float c, std::deque<short> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5208 生成结果为空');
      const expectSnippet0 = 'export function r5qp5208(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5208 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5209
  * @tc.name : h2dts_gen_5209
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5209', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5209(int a, size_t b, float c, std::deque<uint8_t> d);`),
        unions: parseUnion(`void r5qp5209(int a, size_t b, float c, std::deque<uint8_t> d);`),
        structs: parseStruct(`void r5qp5209(int a, size_t b, float c, std::deque<uint8_t> d);`),
        classes: parseClass(`void r5qp5209(int a, size_t b, float c, std::deque<uint8_t> d);`),
        funcs: parseFunction(`void r5qp5209(int a, size_t b, float c, std::deque<uint8_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5209 生成结果为空');
      const expectSnippet0 = 'export function r5qp5209(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5209 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5210
  * @tc.name : h2dts_gen_5210
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5210', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5210(int a, size_t b, float c, std::deque<uint16_t> d);`),
        unions: parseUnion(`void r5qp5210(int a, size_t b, float c, std::deque<uint16_t> d);`),
        structs: parseStruct(`void r5qp5210(int a, size_t b, float c, std::deque<uint16_t> d);`),
        classes: parseClass(`void r5qp5210(int a, size_t b, float c, std::deque<uint16_t> d);`),
        funcs: parseFunction(`void r5qp5210(int a, size_t b, float c, std::deque<uint16_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5210 生成结果为空');
      const expectSnippet0 = 'export function r5qp5210(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5210 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5210 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5211
  * @tc.name : h2dts_gen_5211
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5211', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5211(int a, size_t b, float c, std::deque<uint32_t> d);`),
        unions: parseUnion(`void r5qp5211(int a, size_t b, float c, std::deque<uint32_t> d);`),
        structs: parseStruct(`void r5qp5211(int a, size_t b, float c, std::deque<uint32_t> d);`),
        classes: parseClass(`void r5qp5211(int a, size_t b, float c, std::deque<uint32_t> d);`),
        funcs: parseFunction(`void r5qp5211(int a, size_t b, float c, std::deque<uint32_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5211 生成结果为空');
      const expectSnippet0 = 'export function r5qp5211(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5211 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5211 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5211 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5212
  * @tc.name : h2dts_gen_5212
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5212', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5212(int a, size_t b, short c, long d);`),
        unions: parseUnion(`void r5qp5212(int a, size_t b, short c, long d);`),
        structs: parseStruct(`void r5qp5212(int a, size_t b, short c, long d);`),
        classes: parseClass(`void r5qp5212(int a, size_t b, short c, long d);`),
        funcs: parseFunction(`void r5qp5212(int a, size_t b, short c, long d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5212 生成结果为空');
      const expectSnippet0 = 'export function r5qp5212(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5212 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5212 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5212 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5213
  * @tc.name : h2dts_gen_5213
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5213', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5213(int a, size_t b, short c, uint8_t d);`),
        unions: parseUnion(`void r5qp5213(int a, size_t b, short c, uint8_t d);`),
        structs: parseStruct(`void r5qp5213(int a, size_t b, short c, uint8_t d);`),
        classes: parseClass(`void r5qp5213(int a, size_t b, short c, uint8_t d);`),
        funcs: parseFunction(`void r5qp5213(int a, size_t b, short c, uint8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5213 生成结果为空');
      const expectSnippet0 = 'export function r5qp5213(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5213 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5213 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5213 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5214
  * @tc.name : h2dts_gen_5214
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5214', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5214(int a, size_t b, short c, uint16_t d);`),
        unions: parseUnion(`void r5qp5214(int a, size_t b, short c, uint16_t d);`),
        structs: parseStruct(`void r5qp5214(int a, size_t b, short c, uint16_t d);`),
        classes: parseClass(`void r5qp5214(int a, size_t b, short c, uint16_t d);`),
        funcs: parseFunction(`void r5qp5214(int a, size_t b, short c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5214 生成结果为空');
      const expectSnippet0 = 'export function r5qp5214(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5214 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5214 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5215
  * @tc.name : h2dts_gen_5215
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5215', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5215(int a, size_t b, short c, uint32_t d);`),
        unions: parseUnion(`void r5qp5215(int a, size_t b, short c, uint32_t d);`),
        structs: parseStruct(`void r5qp5215(int a, size_t b, short c, uint32_t d);`),
        classes: parseClass(`void r5qp5215(int a, size_t b, short c, uint32_t d);`),
        funcs: parseFunction(`void r5qp5215(int a, size_t b, short c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5215 生成结果为空');
      const expectSnippet0 = 'export function r5qp5215(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5215 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5215 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5216
  * @tc.name : h2dts_gen_5216
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5216', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5216(int a, size_t b, short c, uint64_t d);`),
        unions: parseUnion(`void r5qp5216(int a, size_t b, short c, uint64_t d);`),
        structs: parseStruct(`void r5qp5216(int a, size_t b, short c, uint64_t d);`),
        classes: parseClass(`void r5qp5216(int a, size_t b, short c, uint64_t d);`),
        funcs: parseFunction(`void r5qp5216(int a, size_t b, short c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5216 生成结果为空');
      const expectSnippet0 = 'export function r5qp5216(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5216 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5216 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5217
  * @tc.name : h2dts_gen_5217
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5217', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5217(int a, size_t b, short c, int8_t d);`),
        unions: parseUnion(`void r5qp5217(int a, size_t b, short c, int8_t d);`),
        structs: parseStruct(`void r5qp5217(int a, size_t b, short c, int8_t d);`),
        classes: parseClass(`void r5qp5217(int a, size_t b, short c, int8_t d);`),
        funcs: parseFunction(`void r5qp5217(int a, size_t b, short c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5217 生成结果为空');
      const expectSnippet0 = 'export function r5qp5217(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5217 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5217 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5218
  * @tc.name : h2dts_gen_5218
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5218', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5218(int a, size_t b, short c, int16_t d);`),
        unions: parseUnion(`void r5qp5218(int a, size_t b, short c, int16_t d);`),
        structs: parseStruct(`void r5qp5218(int a, size_t b, short c, int16_t d);`),
        classes: parseClass(`void r5qp5218(int a, size_t b, short c, int16_t d);`),
        funcs: parseFunction(`void r5qp5218(int a, size_t b, short c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5218 生成结果为空');
      const expectSnippet0 = 'export function r5qp5218(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5218 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5218 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5219
  * @tc.name : h2dts_gen_5219
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5219', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5219(int a, size_t b, short c, int32_t d);`),
        unions: parseUnion(`void r5qp5219(int a, size_t b, short c, int32_t d);`),
        structs: parseStruct(`void r5qp5219(int a, size_t b, short c, int32_t d);`),
        classes: parseClass(`void r5qp5219(int a, size_t b, short c, int32_t d);`),
        funcs: parseFunction(`void r5qp5219(int a, size_t b, short c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5219 生成结果为空');
      const expectSnippet0 = 'export function r5qp5219(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5219 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5219 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5220
  * @tc.name : h2dts_gen_5220
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5220', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5220(int a, size_t b, short c, int64_t d);`),
        unions: parseUnion(`void r5qp5220(int a, size_t b, short c, int64_t d);`),
        structs: parseStruct(`void r5qp5220(int a, size_t b, short c, int64_t d);`),
        classes: parseClass(`void r5qp5220(int a, size_t b, short c, int64_t d);`),
        funcs: parseFunction(`void r5qp5220(int a, size_t b, short c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5220 生成结果为空');
      const expectSnippet0 = 'export function r5qp5220(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5220 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5220 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5221
  * @tc.name : h2dts_gen_5221
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5221', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5221(int a, size_t b, short c, unsigned d);`),
        unions: parseUnion(`void r5qp5221(int a, size_t b, short c, unsigned d);`),
        structs: parseStruct(`void r5qp5221(int a, size_t b, short c, unsigned d);`),
        classes: parseClass(`void r5qp5221(int a, size_t b, short c, unsigned d);`),
        funcs: parseFunction(`void r5qp5221(int a, size_t b, short c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5221 生成结果为空');
      const expectSnippet0 = 'export function r5qp5221(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5221 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5221 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5222
  * @tc.name : h2dts_gen_5222
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5222', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5222(int a, size_t b, short c, bool d);`),
        unions: parseUnion(`void r5qp5222(int a, size_t b, short c, bool d);`),
        structs: parseStruct(`void r5qp5222(int a, size_t b, short c, bool d);`),
        classes: parseClass(`void r5qp5222(int a, size_t b, short c, bool d);`),
        funcs: parseFunction(`void r5qp5222(int a, size_t b, short c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5222 生成结果为空');
      const expectSnippet0 = 'export function r5qp5222(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5222 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5222 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5223
  * @tc.name : h2dts_gen_5223
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5223', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5223(int a, size_t b, short c, char d);`),
        unions: parseUnion(`void r5qp5223(int a, size_t b, short c, char d);`),
        structs: parseStruct(`void r5qp5223(int a, size_t b, short c, char d);`),
        classes: parseClass(`void r5qp5223(int a, size_t b, short c, char d);`),
        funcs: parseFunction(`void r5qp5223(int a, size_t b, short c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5223 生成结果为空');
      const expectSnippet0 = 'export function r5qp5223(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5223 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5223 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5224
  * @tc.name : h2dts_gen_5224
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5224', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5224(int a, size_t b, short c, wchar_t d);`),
        unions: parseUnion(`void r5qp5224(int a, size_t b, short c, wchar_t d);`),
        structs: parseStruct(`void r5qp5224(int a, size_t b, short c, wchar_t d);`),
        classes: parseClass(`void r5qp5224(int a, size_t b, short c, wchar_t d);`),
        funcs: parseFunction(`void r5qp5224(int a, size_t b, short c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5224 生成结果为空');
      const expectSnippet0 = 'export function r5qp5224(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5224 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5224 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5225
  * @tc.name : h2dts_gen_5225
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5225', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5225(int a, size_t b, short c, char8_t d);`),
        unions: parseUnion(`void r5qp5225(int a, size_t b, short c, char8_t d);`),
        structs: parseStruct(`void r5qp5225(int a, size_t b, short c, char8_t d);`),
        classes: parseClass(`void r5qp5225(int a, size_t b, short c, char8_t d);`),
        funcs: parseFunction(`void r5qp5225(int a, size_t b, short c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5225 生成结果为空');
      const expectSnippet0 = 'export function r5qp5225(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5225 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5225 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5225 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5226
  * @tc.name : h2dts_gen_5226
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5226', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5226(int a, size_t b, short c, char16_t d);`),
        unions: parseUnion(`void r5qp5226(int a, size_t b, short c, char16_t d);`),
        structs: parseStruct(`void r5qp5226(int a, size_t b, short c, char16_t d);`),
        classes: parseClass(`void r5qp5226(int a, size_t b, short c, char16_t d);`),
        funcs: parseFunction(`void r5qp5226(int a, size_t b, short c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5226 生成结果为空');
      const expectSnippet0 = 'export function r5qp5226(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5226 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5226 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5226 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5227
  * @tc.name : h2dts_gen_5227
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5227', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5227(int a, size_t b, short c, char32_t d);`),
        unions: parseUnion(`void r5qp5227(int a, size_t b, short c, char32_t d);`),
        structs: parseStruct(`void r5qp5227(int a, size_t b, short c, char32_t d);`),
        classes: parseClass(`void r5qp5227(int a, size_t b, short c, char32_t d);`),
        funcs: parseFunction(`void r5qp5227(int a, size_t b, short c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5227 生成结果为空');
      const expectSnippet0 = 'export function r5qp5227(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5227 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5227 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5227 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5228
  * @tc.name : h2dts_gen_5228
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5228', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5228(int a, size_t b, short c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp5228(int a, size_t b, short c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp5228(int a, size_t b, short c, std::deque<int> d);`),
        classes: parseClass(`void r5qp5228(int a, size_t b, short c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp5228(int a, size_t b, short c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5228 生成结果为空');
      const expectSnippet0 = 'export function r5qp5228(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5228 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5228 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5229
  * @tc.name : h2dts_gen_5229
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5229', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5229(int a, size_t b, short c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp5229(int a, size_t b, short c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp5229(int a, size_t b, short c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp5229(int a, size_t b, short c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp5229(int a, size_t b, short c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5229 生成结果为空');
      const expectSnippet0 = 'export function r5qp5229(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5229 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5229 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5230
  * @tc.name : h2dts_gen_5230
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5230', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5230(int a, size_t b, short c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp5230(int a, size_t b, short c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp5230(int a, size_t b, short c, std::deque<double> d);`),
        classes: parseClass(`void r5qp5230(int a, size_t b, short c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp5230(int a, size_t b, short c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5230 生成结果为空');
      const expectSnippet0 = 'export function r5qp5230(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5230 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5230 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5231
  * @tc.name : h2dts_gen_5231
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5231', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5231(int a, size_t b, short c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp5231(int a, size_t b, short c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp5231(int a, size_t b, short c, std::deque<float> d);`),
        classes: parseClass(`void r5qp5231(int a, size_t b, short c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp5231(int a, size_t b, short c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5231 生成结果为空');
      const expectSnippet0 = 'export function r5qp5231(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5231 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5231 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5232
  * @tc.name : h2dts_gen_5232
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5232', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5232(int a, size_t b, short c, std::deque<long> d);`),
        unions: parseUnion(`void r5qp5232(int a, size_t b, short c, std::deque<long> d);`),
        structs: parseStruct(`void r5qp5232(int a, size_t b, short c, std::deque<long> d);`),
        classes: parseClass(`void r5qp5232(int a, size_t b, short c, std::deque<long> d);`),
        funcs: parseFunction(`void r5qp5232(int a, size_t b, short c, std::deque<long> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5232 生成结果为空');
      const expectSnippet0 = 'export function r5qp5232(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5232 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5232 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5233
  * @tc.name : h2dts_gen_5233
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5233', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5233(int a, size_t b, short c, std::deque<short> d);`),
        unions: parseUnion(`void r5qp5233(int a, size_t b, short c, std::deque<short> d);`),
        structs: parseStruct(`void r5qp5233(int a, size_t b, short c, std::deque<short> d);`),
        classes: parseClass(`void r5qp5233(int a, size_t b, short c, std::deque<short> d);`),
        funcs: parseFunction(`void r5qp5233(int a, size_t b, short c, std::deque<short> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5233 生成结果为空');
      const expectSnippet0 = 'export function r5qp5233(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5233 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5233 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5234
  * @tc.name : h2dts_gen_5234
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5234', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5234(int a, size_t b, short c, std::deque<uint8_t> d);`),
        unions: parseUnion(`void r5qp5234(int a, size_t b, short c, std::deque<uint8_t> d);`),
        structs: parseStruct(`void r5qp5234(int a, size_t b, short c, std::deque<uint8_t> d);`),
        classes: parseClass(`void r5qp5234(int a, size_t b, short c, std::deque<uint8_t> d);`),
        funcs: parseFunction(`void r5qp5234(int a, size_t b, short c, std::deque<uint8_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5234 生成结果为空');
      const expectSnippet0 = 'export function r5qp5234(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5234 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5234 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5235
  * @tc.name : h2dts_gen_5235
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5235', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5235(int a, size_t b, short c, std::deque<uint16_t> d);`),
        unions: parseUnion(`void r5qp5235(int a, size_t b, short c, std::deque<uint16_t> d);`),
        structs: parseStruct(`void r5qp5235(int a, size_t b, short c, std::deque<uint16_t> d);`),
        classes: parseClass(`void r5qp5235(int a, size_t b, short c, std::deque<uint16_t> d);`),
        funcs: parseFunction(`void r5qp5235(int a, size_t b, short c, std::deque<uint16_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5235 生成结果为空');
      const expectSnippet0 = 'export function r5qp5235(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5235 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5235 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5236
  * @tc.name : h2dts_gen_5236
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5236', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5236(int a, size_t b, short c, std::deque<uint32_t> d);`),
        unions: parseUnion(`void r5qp5236(int a, size_t b, short c, std::deque<uint32_t> d);`),
        structs: parseStruct(`void r5qp5236(int a, size_t b, short c, std::deque<uint32_t> d);`),
        classes: parseClass(`void r5qp5236(int a, size_t b, short c, std::deque<uint32_t> d);`),
        funcs: parseFunction(`void r5qp5236(int a, size_t b, short c, std::deque<uint32_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5236 生成结果为空');
      const expectSnippet0 = 'export function r5qp5236(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5236 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5236 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5237
  * @tc.name : h2dts_gen_5237
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5237', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5237(int a, size_t b, long c, uint8_t d);`),
        unions: parseUnion(`void r5qp5237(int a, size_t b, long c, uint8_t d);`),
        structs: parseStruct(`void r5qp5237(int a, size_t b, long c, uint8_t d);`),
        classes: parseClass(`void r5qp5237(int a, size_t b, long c, uint8_t d);`),
        funcs: parseFunction(`void r5qp5237(int a, size_t b, long c, uint8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5237 生成结果为空');
      const expectSnippet0 = 'export function r5qp5237(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5237 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5237 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5238
  * @tc.name : h2dts_gen_5238
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5238', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5238(int a, size_t b, long c, uint16_t d);`),
        unions: parseUnion(`void r5qp5238(int a, size_t b, long c, uint16_t d);`),
        structs: parseStruct(`void r5qp5238(int a, size_t b, long c, uint16_t d);`),
        classes: parseClass(`void r5qp5238(int a, size_t b, long c, uint16_t d);`),
        funcs: parseFunction(`void r5qp5238(int a, size_t b, long c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5238 生成结果为空');
      const expectSnippet0 = 'export function r5qp5238(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5238 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5238 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5239
  * @tc.name : h2dts_gen_5239
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5239', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5239(int a, size_t b, long c, uint32_t d);`),
        unions: parseUnion(`void r5qp5239(int a, size_t b, long c, uint32_t d);`),
        structs: parseStruct(`void r5qp5239(int a, size_t b, long c, uint32_t d);`),
        classes: parseClass(`void r5qp5239(int a, size_t b, long c, uint32_t d);`),
        funcs: parseFunction(`void r5qp5239(int a, size_t b, long c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5239 生成结果为空');
      const expectSnippet0 = 'export function r5qp5239(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5239 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5239 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5240
  * @tc.name : h2dts_gen_5240
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5240', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5240(int a, size_t b, long c, uint64_t d);`),
        unions: parseUnion(`void r5qp5240(int a, size_t b, long c, uint64_t d);`),
        structs: parseStruct(`void r5qp5240(int a, size_t b, long c, uint64_t d);`),
        classes: parseClass(`void r5qp5240(int a, size_t b, long c, uint64_t d);`),
        funcs: parseFunction(`void r5qp5240(int a, size_t b, long c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5240 生成结果为空');
      const expectSnippet0 = 'export function r5qp5240(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5240 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5240 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5241
  * @tc.name : h2dts_gen_5241
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5241', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5241(int a, size_t b, long c, int8_t d);`),
        unions: parseUnion(`void r5qp5241(int a, size_t b, long c, int8_t d);`),
        structs: parseStruct(`void r5qp5241(int a, size_t b, long c, int8_t d);`),
        classes: parseClass(`void r5qp5241(int a, size_t b, long c, int8_t d);`),
        funcs: parseFunction(`void r5qp5241(int a, size_t b, long c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5241 生成结果为空');
      const expectSnippet0 = 'export function r5qp5241(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5241 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5241 执行异常: ${String(err)}`);
    }
  });
});
