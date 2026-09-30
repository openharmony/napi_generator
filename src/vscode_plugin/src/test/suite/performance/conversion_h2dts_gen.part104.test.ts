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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part104.');

  /**
  * @tc.number : h2dts_gen_3488
  * @tc.name : h2dts_gen_3488
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3488', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3488(int a, size_t b, float c, std::deque<long> d);`),
        unions: parseUnion(`void r5qp3488(int a, size_t b, float c, std::deque<long> d);`),
        structs: parseStruct(`void r5qp3488(int a, size_t b, float c, std::deque<long> d);`),
        classes: parseClass(`void r5qp3488(int a, size_t b, float c, std::deque<long> d);`),
        funcs: parseFunction(`void r5qp3488(int a, size_t b, float c, std::deque<long> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3488 生成结果为空');
      const expectSnippet0 = 'export function r5qp3488(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3488 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3488 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3488 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3489
  * @tc.name : h2dts_gen_3489
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3489', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3489(int a, size_t b, float c, std::deque<short> d);`),
        unions: parseUnion(`void r5qp3489(int a, size_t b, float c, std::deque<short> d);`),
        structs: parseStruct(`void r5qp3489(int a, size_t b, float c, std::deque<short> d);`),
        classes: parseClass(`void r5qp3489(int a, size_t b, float c, std::deque<short> d);`),
        funcs: parseFunction(`void r5qp3489(int a, size_t b, float c, std::deque<short> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3489 生成结果为空');
      const expectSnippet0 = 'export function r5qp3489(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3489 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3489 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3489 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3490
  * @tc.name : h2dts_gen_3490
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3490', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3490(int a, size_t b, float c, std::deque<uint8_t> d);`),
        unions: parseUnion(`void r5qp3490(int a, size_t b, float c, std::deque<uint8_t> d);`),
        structs: parseStruct(`void r5qp3490(int a, size_t b, float c, std::deque<uint8_t> d);`),
        classes: parseClass(`void r5qp3490(int a, size_t b, float c, std::deque<uint8_t> d);`),
        funcs: parseFunction(`void r5qp3490(int a, size_t b, float c, std::deque<uint8_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3490 生成结果为空');
      const expectSnippet0 = 'export function r5qp3490(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3490 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3490 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3490 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3491
  * @tc.name : h2dts_gen_3491
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3491', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3491(int a, size_t b, float c, std::deque<uint16_t> d);`),
        unions: parseUnion(`void r5qp3491(int a, size_t b, float c, std::deque<uint16_t> d);`),
        structs: parseStruct(`void r5qp3491(int a, size_t b, float c, std::deque<uint16_t> d);`),
        classes: parseClass(`void r5qp3491(int a, size_t b, float c, std::deque<uint16_t> d);`),
        funcs: parseFunction(`void r5qp3491(int a, size_t b, float c, std::deque<uint16_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3491 生成结果为空');
      const expectSnippet0 = 'export function r5qp3491(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3491 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3491 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3491 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3492
  * @tc.name : h2dts_gen_3492
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3492', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3492(int a, size_t b, float c, std::deque<uint32_t> d);`),
        unions: parseUnion(`void r5qp3492(int a, size_t b, float c, std::deque<uint32_t> d);`),
        structs: parseStruct(`void r5qp3492(int a, size_t b, float c, std::deque<uint32_t> d);`),
        classes: parseClass(`void r5qp3492(int a, size_t b, float c, std::deque<uint32_t> d);`),
        funcs: parseFunction(`void r5qp3492(int a, size_t b, float c, std::deque<uint32_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3492 生成结果为空');
      const expectSnippet0 = 'export function r5qp3492(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3492 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3492 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3492 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3493
  * @tc.name : h2dts_gen_3493
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3493', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3493(int a, size_t b, short c, long d);`),
        unions: parseUnion(`void r5qp3493(int a, size_t b, short c, long d);`),
        structs: parseStruct(`void r5qp3493(int a, size_t b, short c, long d);`),
        classes: parseClass(`void r5qp3493(int a, size_t b, short c, long d);`),
        funcs: parseFunction(`void r5qp3493(int a, size_t b, short c, long d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3493 生成结果为空');
      const expectSnippet0 = 'export function r5qp3493(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3493 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3493 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3493 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3494
  * @tc.name : h2dts_gen_3494
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3494', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3494(int a, size_t b, short c, uint8_t d);`),
        unions: parseUnion(`void r5qp3494(int a, size_t b, short c, uint8_t d);`),
        structs: parseStruct(`void r5qp3494(int a, size_t b, short c, uint8_t d);`),
        classes: parseClass(`void r5qp3494(int a, size_t b, short c, uint8_t d);`),
        funcs: parseFunction(`void r5qp3494(int a, size_t b, short c, uint8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3494 生成结果为空');
      const expectSnippet0 = 'export function r5qp3494(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3494 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3494 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3494 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3495
  * @tc.name : h2dts_gen_3495
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3495', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3495(int a, size_t b, short c, uint16_t d);`),
        unions: parseUnion(`void r5qp3495(int a, size_t b, short c, uint16_t d);`),
        structs: parseStruct(`void r5qp3495(int a, size_t b, short c, uint16_t d);`),
        classes: parseClass(`void r5qp3495(int a, size_t b, short c, uint16_t d);`),
        funcs: parseFunction(`void r5qp3495(int a, size_t b, short c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3495 生成结果为空');
      const expectSnippet0 = 'export function r5qp3495(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3495 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3495 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3495 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3496
  * @tc.name : h2dts_gen_3496
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3496', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3496(int a, size_t b, short c, uint32_t d);`),
        unions: parseUnion(`void r5qp3496(int a, size_t b, short c, uint32_t d);`),
        structs: parseStruct(`void r5qp3496(int a, size_t b, short c, uint32_t d);`),
        classes: parseClass(`void r5qp3496(int a, size_t b, short c, uint32_t d);`),
        funcs: parseFunction(`void r5qp3496(int a, size_t b, short c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3496 生成结果为空');
      const expectSnippet0 = 'export function r5qp3496(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3496 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3496 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3496 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3497
  * @tc.name : h2dts_gen_3497
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3497', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3497(int a, size_t b, short c, uint64_t d);`),
        unions: parseUnion(`void r5qp3497(int a, size_t b, short c, uint64_t d);`),
        structs: parseStruct(`void r5qp3497(int a, size_t b, short c, uint64_t d);`),
        classes: parseClass(`void r5qp3497(int a, size_t b, short c, uint64_t d);`),
        funcs: parseFunction(`void r5qp3497(int a, size_t b, short c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3497 生成结果为空');
      const expectSnippet0 = 'export function r5qp3497(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3497 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3497 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3497 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3498
  * @tc.name : h2dts_gen_3498
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3498', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3498(int a, size_t b, short c, int8_t d);`),
        unions: parseUnion(`void r5qp3498(int a, size_t b, short c, int8_t d);`),
        structs: parseStruct(`void r5qp3498(int a, size_t b, short c, int8_t d);`),
        classes: parseClass(`void r5qp3498(int a, size_t b, short c, int8_t d);`),
        funcs: parseFunction(`void r5qp3498(int a, size_t b, short c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3498 生成结果为空');
      const expectSnippet0 = 'export function r5qp3498(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3498 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3498 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3498 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3499
  * @tc.name : h2dts_gen_3499
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3499', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3499(int a, size_t b, short c, int16_t d);`),
        unions: parseUnion(`void r5qp3499(int a, size_t b, short c, int16_t d);`),
        structs: parseStruct(`void r5qp3499(int a, size_t b, short c, int16_t d);`),
        classes: parseClass(`void r5qp3499(int a, size_t b, short c, int16_t d);`),
        funcs: parseFunction(`void r5qp3499(int a, size_t b, short c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3499 生成结果为空');
      const expectSnippet0 = 'export function r5qp3499(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3499 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3499 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3499 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3500
  * @tc.name : h2dts_gen_3500
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3500', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3500(int a, size_t b, short c, int32_t d);`),
        unions: parseUnion(`void r5qp3500(int a, size_t b, short c, int32_t d);`),
        structs: parseStruct(`void r5qp3500(int a, size_t b, short c, int32_t d);`),
        classes: parseClass(`void r5qp3500(int a, size_t b, short c, int32_t d);`),
        funcs: parseFunction(`void r5qp3500(int a, size_t b, short c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3500 生成结果为空');
      const expectSnippet0 = 'export function r5qp3500(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3500 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3500 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3500 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3501
  * @tc.name : h2dts_gen_3501
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3501', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3501(int a, size_t b, short c, int64_t d);`),
        unions: parseUnion(`void r5qp3501(int a, size_t b, short c, int64_t d);`),
        structs: parseStruct(`void r5qp3501(int a, size_t b, short c, int64_t d);`),
        classes: parseClass(`void r5qp3501(int a, size_t b, short c, int64_t d);`),
        funcs: parseFunction(`void r5qp3501(int a, size_t b, short c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3501 生成结果为空');
      const expectSnippet0 = 'export function r5qp3501(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3501 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3501 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3501 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3502
  * @tc.name : h2dts_gen_3502
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3502', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3502(int a, size_t b, short c, unsigned d);`),
        unions: parseUnion(`void r5qp3502(int a, size_t b, short c, unsigned d);`),
        structs: parseStruct(`void r5qp3502(int a, size_t b, short c, unsigned d);`),
        classes: parseClass(`void r5qp3502(int a, size_t b, short c, unsigned d);`),
        funcs: parseFunction(`void r5qp3502(int a, size_t b, short c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3502 生成结果为空');
      const expectSnippet0 = 'export function r5qp3502(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3502 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3502 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3502 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3503
  * @tc.name : h2dts_gen_3503
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3503', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3503(int a, size_t b, short c, bool d);`),
        unions: parseUnion(`void r5qp3503(int a, size_t b, short c, bool d);`),
        structs: parseStruct(`void r5qp3503(int a, size_t b, short c, bool d);`),
        classes: parseClass(`void r5qp3503(int a, size_t b, short c, bool d);`),
        funcs: parseFunction(`void r5qp3503(int a, size_t b, short c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3503 生成结果为空');
      const expectSnippet0 = 'export function r5qp3503(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3503 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3503 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3503 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3504
  * @tc.name : h2dts_gen_3504
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3504', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3504(int a, size_t b, short c, char d);`),
        unions: parseUnion(`void r5qp3504(int a, size_t b, short c, char d);`),
        structs: parseStruct(`void r5qp3504(int a, size_t b, short c, char d);`),
        classes: parseClass(`void r5qp3504(int a, size_t b, short c, char d);`),
        funcs: parseFunction(`void r5qp3504(int a, size_t b, short c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3504 生成结果为空');
      const expectSnippet0 = 'export function r5qp3504(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3504 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3504 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3504 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3505
  * @tc.name : h2dts_gen_3505
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3505', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3505(int a, size_t b, short c, wchar_t d);`),
        unions: parseUnion(`void r5qp3505(int a, size_t b, short c, wchar_t d);`),
        structs: parseStruct(`void r5qp3505(int a, size_t b, short c, wchar_t d);`),
        classes: parseClass(`void r5qp3505(int a, size_t b, short c, wchar_t d);`),
        funcs: parseFunction(`void r5qp3505(int a, size_t b, short c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3505 生成结果为空');
      const expectSnippet0 = 'export function r5qp3505(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3505 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3505 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3505 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3506
  * @tc.name : h2dts_gen_3506
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3506', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3506(int a, size_t b, short c, char8_t d);`),
        unions: parseUnion(`void r5qp3506(int a, size_t b, short c, char8_t d);`),
        structs: parseStruct(`void r5qp3506(int a, size_t b, short c, char8_t d);`),
        classes: parseClass(`void r5qp3506(int a, size_t b, short c, char8_t d);`),
        funcs: parseFunction(`void r5qp3506(int a, size_t b, short c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3506 生成结果为空');
      const expectSnippet0 = 'export function r5qp3506(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3506 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3506 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3506 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3507
  * @tc.name : h2dts_gen_3507
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3507', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3507(int a, size_t b, short c, char16_t d);`),
        unions: parseUnion(`void r5qp3507(int a, size_t b, short c, char16_t d);`),
        structs: parseStruct(`void r5qp3507(int a, size_t b, short c, char16_t d);`),
        classes: parseClass(`void r5qp3507(int a, size_t b, short c, char16_t d);`),
        funcs: parseFunction(`void r5qp3507(int a, size_t b, short c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3507 生成结果为空');
      const expectSnippet0 = 'export function r5qp3507(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3507 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3507 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3507 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3508
  * @tc.name : h2dts_gen_3508
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3508', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3508(int a, size_t b, short c, char32_t d);`),
        unions: parseUnion(`void r5qp3508(int a, size_t b, short c, char32_t d);`),
        structs: parseStruct(`void r5qp3508(int a, size_t b, short c, char32_t d);`),
        classes: parseClass(`void r5qp3508(int a, size_t b, short c, char32_t d);`),
        funcs: parseFunction(`void r5qp3508(int a, size_t b, short c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3508 生成结果为空');
      const expectSnippet0 = 'export function r5qp3508(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3508 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3508 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3508 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3509
  * @tc.name : h2dts_gen_3509
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3509', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3509(int a, size_t b, short c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp3509(int a, size_t b, short c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp3509(int a, size_t b, short c, std::deque<int> d);`),
        classes: parseClass(`void r5qp3509(int a, size_t b, short c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp3509(int a, size_t b, short c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3509 生成结果为空');
      const expectSnippet0 = 'export function r5qp3509(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3509 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3509 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3509 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3510
  * @tc.name : h2dts_gen_3510
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3510', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3510(int a, size_t b, short c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp3510(int a, size_t b, short c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp3510(int a, size_t b, short c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp3510(int a, size_t b, short c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp3510(int a, size_t b, short c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3510 生成结果为空');
      const expectSnippet0 = 'export function r5qp3510(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3510 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3510 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3510 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3511
  * @tc.name : h2dts_gen_3511
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3511', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3511(int a, size_t b, short c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp3511(int a, size_t b, short c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp3511(int a, size_t b, short c, std::deque<double> d);`),
        classes: parseClass(`void r5qp3511(int a, size_t b, short c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp3511(int a, size_t b, short c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3511 生成结果为空');
      const expectSnippet0 = 'export function r5qp3511(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3511 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3511 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3511 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3512
  * @tc.name : h2dts_gen_3512
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3512', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3512(int a, size_t b, short c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp3512(int a, size_t b, short c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp3512(int a, size_t b, short c, std::deque<float> d);`),
        classes: parseClass(`void r5qp3512(int a, size_t b, short c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp3512(int a, size_t b, short c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3512 生成结果为空');
      const expectSnippet0 = 'export function r5qp3512(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3512 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3512 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3512 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3513
  * @tc.name : h2dts_gen_3513
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3513', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3513(int a, size_t b, short c, std::deque<long> d);`),
        unions: parseUnion(`void r5qp3513(int a, size_t b, short c, std::deque<long> d);`),
        structs: parseStruct(`void r5qp3513(int a, size_t b, short c, std::deque<long> d);`),
        classes: parseClass(`void r5qp3513(int a, size_t b, short c, std::deque<long> d);`),
        funcs: parseFunction(`void r5qp3513(int a, size_t b, short c, std::deque<long> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3513 生成结果为空');
      const expectSnippet0 = 'export function r5qp3513(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3513 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3513 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3513 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3514
  * @tc.name : h2dts_gen_3514
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3514', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3514(int a, size_t b, short c, std::deque<short> d);`),
        unions: parseUnion(`void r5qp3514(int a, size_t b, short c, std::deque<short> d);`),
        structs: parseStruct(`void r5qp3514(int a, size_t b, short c, std::deque<short> d);`),
        classes: parseClass(`void r5qp3514(int a, size_t b, short c, std::deque<short> d);`),
        funcs: parseFunction(`void r5qp3514(int a, size_t b, short c, std::deque<short> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3514 生成结果为空');
      const expectSnippet0 = 'export function r5qp3514(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3514 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3514 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3514 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3515
  * @tc.name : h2dts_gen_3515
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3515', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3515(int a, size_t b, short c, std::deque<uint8_t> d);`),
        unions: parseUnion(`void r5qp3515(int a, size_t b, short c, std::deque<uint8_t> d);`),
        structs: parseStruct(`void r5qp3515(int a, size_t b, short c, std::deque<uint8_t> d);`),
        classes: parseClass(`void r5qp3515(int a, size_t b, short c, std::deque<uint8_t> d);`),
        funcs: parseFunction(`void r5qp3515(int a, size_t b, short c, std::deque<uint8_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3515 生成结果为空');
      const expectSnippet0 = 'export function r5qp3515(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3515 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3515 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3515 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3516
  * @tc.name : h2dts_gen_3516
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3516', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3516(int a, size_t b, short c, std::deque<uint16_t> d);`),
        unions: parseUnion(`void r5qp3516(int a, size_t b, short c, std::deque<uint16_t> d);`),
        structs: parseStruct(`void r5qp3516(int a, size_t b, short c, std::deque<uint16_t> d);`),
        classes: parseClass(`void r5qp3516(int a, size_t b, short c, std::deque<uint16_t> d);`),
        funcs: parseFunction(`void r5qp3516(int a, size_t b, short c, std::deque<uint16_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3516 生成结果为空');
      const expectSnippet0 = 'export function r5qp3516(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3516 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3516 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3516 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3517
  * @tc.name : h2dts_gen_3517
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3517', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3517(int a, size_t b, short c, std::deque<uint32_t> d);`),
        unions: parseUnion(`void r5qp3517(int a, size_t b, short c, std::deque<uint32_t> d);`),
        structs: parseStruct(`void r5qp3517(int a, size_t b, short c, std::deque<uint32_t> d);`),
        classes: parseClass(`void r5qp3517(int a, size_t b, short c, std::deque<uint32_t> d);`),
        funcs: parseFunction(`void r5qp3517(int a, size_t b, short c, std::deque<uint32_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3517 生成结果为空');
      const expectSnippet0 = 'export function r5qp3517(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3517 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3517 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3517 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3518
  * @tc.name : h2dts_gen_3518
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3518', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3518(int a, size_t b, long c, uint8_t d);`),
        unions: parseUnion(`void r5qp3518(int a, size_t b, long c, uint8_t d);`),
        structs: parseStruct(`void r5qp3518(int a, size_t b, long c, uint8_t d);`),
        classes: parseClass(`void r5qp3518(int a, size_t b, long c, uint8_t d);`),
        funcs: parseFunction(`void r5qp3518(int a, size_t b, long c, uint8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3518 生成结果为空');
      const expectSnippet0 = 'export function r5qp3518(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3518 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3518 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3518 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3519
  * @tc.name : h2dts_gen_3519
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3519', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3519(int a, size_t b, long c, uint16_t d);`),
        unions: parseUnion(`void r5qp3519(int a, size_t b, long c, uint16_t d);`),
        structs: parseStruct(`void r5qp3519(int a, size_t b, long c, uint16_t d);`),
        classes: parseClass(`void r5qp3519(int a, size_t b, long c, uint16_t d);`),
        funcs: parseFunction(`void r5qp3519(int a, size_t b, long c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3519 生成结果为空');
      const expectSnippet0 = 'export function r5qp3519(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3519 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3519 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3519 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3520
  * @tc.name : h2dts_gen_3520
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3520', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3520(int a, size_t b, long c, uint32_t d);`),
        unions: parseUnion(`void r5qp3520(int a, size_t b, long c, uint32_t d);`),
        structs: parseStruct(`void r5qp3520(int a, size_t b, long c, uint32_t d);`),
        classes: parseClass(`void r5qp3520(int a, size_t b, long c, uint32_t d);`),
        funcs: parseFunction(`void r5qp3520(int a, size_t b, long c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3520 生成结果为空');
      const expectSnippet0 = 'export function r5qp3520(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3520 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3520 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3520 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3521
  * @tc.name : h2dts_gen_3521
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3521', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3521(int a, size_t b, long c, uint64_t d);`),
        unions: parseUnion(`void r5qp3521(int a, size_t b, long c, uint64_t d);`),
        structs: parseStruct(`void r5qp3521(int a, size_t b, long c, uint64_t d);`),
        classes: parseClass(`void r5qp3521(int a, size_t b, long c, uint64_t d);`),
        funcs: parseFunction(`void r5qp3521(int a, size_t b, long c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3521 生成结果为空');
      const expectSnippet0 = 'export function r5qp3521(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3521 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3521 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3521 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3522
  * @tc.name : h2dts_gen_3522
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3522', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3522(int a, size_t b, long c, int8_t d);`),
        unions: parseUnion(`void r5qp3522(int a, size_t b, long c, int8_t d);`),
        structs: parseStruct(`void r5qp3522(int a, size_t b, long c, int8_t d);`),
        classes: parseClass(`void r5qp3522(int a, size_t b, long c, int8_t d);`),
        funcs: parseFunction(`void r5qp3522(int a, size_t b, long c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3522 生成结果为空');
      const expectSnippet0 = 'export function r5qp3522(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3522 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3522 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3522 执行异常: ${String(err)}`);
    }
  });
});
