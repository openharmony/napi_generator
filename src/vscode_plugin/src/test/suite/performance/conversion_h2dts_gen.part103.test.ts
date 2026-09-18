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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part103.');

  /**
  * @tc.number : h2dts_gen_3453
  * @tc.name : h2dts_gen_3453
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3453', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3453(int a, size_t b, double c, char d);`),
        unions: parseUnion(`void r5qp3453(int a, size_t b, double c, char d);`),
        structs: parseStruct(`void r5qp3453(int a, size_t b, double c, char d);`),
        classes: parseClass(`void r5qp3453(int a, size_t b, double c, char d);`),
        funcs: parseFunction(`void r5qp3453(int a, size_t b, double c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3453 生成结果为空');
      const expectSnippet0 = 'export function r5qp3453(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3453 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3453 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3454
  * @tc.name : h2dts_gen_3454
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3454', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3454(int a, size_t b, double c, wchar_t d);`),
        unions: parseUnion(`void r5qp3454(int a, size_t b, double c, wchar_t d);`),
        structs: parseStruct(`void r5qp3454(int a, size_t b, double c, wchar_t d);`),
        classes: parseClass(`void r5qp3454(int a, size_t b, double c, wchar_t d);`),
        funcs: parseFunction(`void r5qp3454(int a, size_t b, double c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3454 生成结果为空');
      const expectSnippet0 = 'export function r5qp3454(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3454 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3454 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3455
  * @tc.name : h2dts_gen_3455
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3455', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3455(int a, size_t b, double c, char8_t d);`),
        unions: parseUnion(`void r5qp3455(int a, size_t b, double c, char8_t d);`),
        structs: parseStruct(`void r5qp3455(int a, size_t b, double c, char8_t d);`),
        classes: parseClass(`void r5qp3455(int a, size_t b, double c, char8_t d);`),
        funcs: parseFunction(`void r5qp3455(int a, size_t b, double c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3455 生成结果为空');
      const expectSnippet0 = 'export function r5qp3455(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3455 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3455 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3455 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3456
  * @tc.name : h2dts_gen_3456
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3456', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3456(int a, size_t b, double c, char16_t d);`),
        unions: parseUnion(`void r5qp3456(int a, size_t b, double c, char16_t d);`),
        structs: parseStruct(`void r5qp3456(int a, size_t b, double c, char16_t d);`),
        classes: parseClass(`void r5qp3456(int a, size_t b, double c, char16_t d);`),
        funcs: parseFunction(`void r5qp3456(int a, size_t b, double c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3456 生成结果为空');
      const expectSnippet0 = 'export function r5qp3456(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3456 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3456 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3457
  * @tc.name : h2dts_gen_3457
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3457', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3457(int a, size_t b, double c, char32_t d);`),
        unions: parseUnion(`void r5qp3457(int a, size_t b, double c, char32_t d);`),
        structs: parseStruct(`void r5qp3457(int a, size_t b, double c, char32_t d);`),
        classes: parseClass(`void r5qp3457(int a, size_t b, double c, char32_t d);`),
        funcs: parseFunction(`void r5qp3457(int a, size_t b, double c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3457 生成结果为空');
      const expectSnippet0 = 'export function r5qp3457(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3457 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3457 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3458
  * @tc.name : h2dts_gen_3458
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3458', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3458(int a, size_t b, double c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp3458(int a, size_t b, double c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp3458(int a, size_t b, double c, std::deque<int> d);`),
        classes: parseClass(`void r5qp3458(int a, size_t b, double c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp3458(int a, size_t b, double c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3458 生成结果为空');
      const expectSnippet0 = 'export function r5qp3458(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3458 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3458 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3459
  * @tc.name : h2dts_gen_3459
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3459', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3459(int a, size_t b, double c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp3459(int a, size_t b, double c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp3459(int a, size_t b, double c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp3459(int a, size_t b, double c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp3459(int a, size_t b, double c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3459 生成结果为空');
      const expectSnippet0 = 'export function r5qp3459(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3459 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3459 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3459 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3460
  * @tc.name : h2dts_gen_3460
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3460', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3460(int a, size_t b, double c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp3460(int a, size_t b, double c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp3460(int a, size_t b, double c, std::deque<double> d);`),
        classes: parseClass(`void r5qp3460(int a, size_t b, double c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp3460(int a, size_t b, double c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3460 生成结果为空');
      const expectSnippet0 = 'export function r5qp3460(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3460 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3460 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3461
  * @tc.name : h2dts_gen_3461
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3461', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3461(int a, size_t b, double c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp3461(int a, size_t b, double c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp3461(int a, size_t b, double c, std::deque<float> d);`),
        classes: parseClass(`void r5qp3461(int a, size_t b, double c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp3461(int a, size_t b, double c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3461 生成结果为空');
      const expectSnippet0 = 'export function r5qp3461(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3461 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3461 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3462
  * @tc.name : h2dts_gen_3462
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3462', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3462(int a, size_t b, double c, std::deque<long> d);`),
        unions: parseUnion(`void r5qp3462(int a, size_t b, double c, std::deque<long> d);`),
        structs: parseStruct(`void r5qp3462(int a, size_t b, double c, std::deque<long> d);`),
        classes: parseClass(`void r5qp3462(int a, size_t b, double c, std::deque<long> d);`),
        funcs: parseFunction(`void r5qp3462(int a, size_t b, double c, std::deque<long> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3462 生成结果为空');
      const expectSnippet0 = 'export function r5qp3462(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3462 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3462 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3463
  * @tc.name : h2dts_gen_3463
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3463', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3463(int a, size_t b, double c, std::deque<short> d);`),
        unions: parseUnion(`void r5qp3463(int a, size_t b, double c, std::deque<short> d);`),
        structs: parseStruct(`void r5qp3463(int a, size_t b, double c, std::deque<short> d);`),
        classes: parseClass(`void r5qp3463(int a, size_t b, double c, std::deque<short> d);`),
        funcs: parseFunction(`void r5qp3463(int a, size_t b, double c, std::deque<short> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3463 生成结果为空');
      const expectSnippet0 = 'export function r5qp3463(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3463 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3463 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3464
  * @tc.name : h2dts_gen_3464
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3464', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3464(int a, size_t b, double c, std::deque<uint8_t> d);`),
        unions: parseUnion(`void r5qp3464(int a, size_t b, double c, std::deque<uint8_t> d);`),
        structs: parseStruct(`void r5qp3464(int a, size_t b, double c, std::deque<uint8_t> d);`),
        classes: parseClass(`void r5qp3464(int a, size_t b, double c, std::deque<uint8_t> d);`),
        funcs: parseFunction(`void r5qp3464(int a, size_t b, double c, std::deque<uint8_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3464 生成结果为空');
      const expectSnippet0 = 'export function r5qp3464(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3464 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3464 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3465
  * @tc.name : h2dts_gen_3465
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3465', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3465(int a, size_t b, double c, std::deque<uint16_t> d);`),
        unions: parseUnion(`void r5qp3465(int a, size_t b, double c, std::deque<uint16_t> d);`),
        structs: parseStruct(`void r5qp3465(int a, size_t b, double c, std::deque<uint16_t> d);`),
        classes: parseClass(`void r5qp3465(int a, size_t b, double c, std::deque<uint16_t> d);`),
        funcs: parseFunction(`void r5qp3465(int a, size_t b, double c, std::deque<uint16_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3465 生成结果为空');
      const expectSnippet0 = 'export function r5qp3465(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3465 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3465 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3466
  * @tc.name : h2dts_gen_3466
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3466', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3466(int a, size_t b, double c, std::deque<uint32_t> d);`),
        unions: parseUnion(`void r5qp3466(int a, size_t b, double c, std::deque<uint32_t> d);`),
        structs: parseStruct(`void r5qp3466(int a, size_t b, double c, std::deque<uint32_t> d);`),
        classes: parseClass(`void r5qp3466(int a, size_t b, double c, std::deque<uint32_t> d);`),
        funcs: parseFunction(`void r5qp3466(int a, size_t b, double c, std::deque<uint32_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3466 生成结果为空');
      const expectSnippet0 = 'export function r5qp3466(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3466 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3466 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3467
  * @tc.name : h2dts_gen_3467
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3467', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3467(int a, size_t b, float c, short d);`),
        unions: parseUnion(`void r5qp3467(int a, size_t b, float c, short d);`),
        structs: parseStruct(`void r5qp3467(int a, size_t b, float c, short d);`),
        classes: parseClass(`void r5qp3467(int a, size_t b, float c, short d);`),
        funcs: parseFunction(`void r5qp3467(int a, size_t b, float c, short d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3467 生成结果为空');
      const expectSnippet0 = 'export function r5qp3467(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3467 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3467 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3468
  * @tc.name : h2dts_gen_3468
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3468', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3468(int a, size_t b, float c, long d);`),
        unions: parseUnion(`void r5qp3468(int a, size_t b, float c, long d);`),
        structs: parseStruct(`void r5qp3468(int a, size_t b, float c, long d);`),
        classes: parseClass(`void r5qp3468(int a, size_t b, float c, long d);`),
        funcs: parseFunction(`void r5qp3468(int a, size_t b, float c, long d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3468 生成结果为空');
      const expectSnippet0 = 'export function r5qp3468(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3468 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3468 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3469
  * @tc.name : h2dts_gen_3469
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3469', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3469(int a, size_t b, float c, uint8_t d);`),
        unions: parseUnion(`void r5qp3469(int a, size_t b, float c, uint8_t d);`),
        structs: parseStruct(`void r5qp3469(int a, size_t b, float c, uint8_t d);`),
        classes: parseClass(`void r5qp3469(int a, size_t b, float c, uint8_t d);`),
        funcs: parseFunction(`void r5qp3469(int a, size_t b, float c, uint8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3469 生成结果为空');
      const expectSnippet0 = 'export function r5qp3469(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3469 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3469 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3470
  * @tc.name : h2dts_gen_3470
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3470', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3470(int a, size_t b, float c, uint16_t d);`),
        unions: parseUnion(`void r5qp3470(int a, size_t b, float c, uint16_t d);`),
        structs: parseStruct(`void r5qp3470(int a, size_t b, float c, uint16_t d);`),
        classes: parseClass(`void r5qp3470(int a, size_t b, float c, uint16_t d);`),
        funcs: parseFunction(`void r5qp3470(int a, size_t b, float c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3470 生成结果为空');
      const expectSnippet0 = 'export function r5qp3470(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3470 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3470 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3471
  * @tc.name : h2dts_gen_3471
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3471', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3471(int a, size_t b, float c, uint32_t d);`),
        unions: parseUnion(`void r5qp3471(int a, size_t b, float c, uint32_t d);`),
        structs: parseStruct(`void r5qp3471(int a, size_t b, float c, uint32_t d);`),
        classes: parseClass(`void r5qp3471(int a, size_t b, float c, uint32_t d);`),
        funcs: parseFunction(`void r5qp3471(int a, size_t b, float c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3471 生成结果为空');
      const expectSnippet0 = 'export function r5qp3471(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3471 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3471 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3471 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3472
  * @tc.name : h2dts_gen_3472
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3472', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3472(int a, size_t b, float c, uint64_t d);`),
        unions: parseUnion(`void r5qp3472(int a, size_t b, float c, uint64_t d);`),
        structs: parseStruct(`void r5qp3472(int a, size_t b, float c, uint64_t d);`),
        classes: parseClass(`void r5qp3472(int a, size_t b, float c, uint64_t d);`),
        funcs: parseFunction(`void r5qp3472(int a, size_t b, float c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3472 生成结果为空');
      const expectSnippet0 = 'export function r5qp3472(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3472 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3472 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3472 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3473
  * @tc.name : h2dts_gen_3473
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3473', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3473(int a, size_t b, float c, int8_t d);`),
        unions: parseUnion(`void r5qp3473(int a, size_t b, float c, int8_t d);`),
        structs: parseStruct(`void r5qp3473(int a, size_t b, float c, int8_t d);`),
        classes: parseClass(`void r5qp3473(int a, size_t b, float c, int8_t d);`),
        funcs: parseFunction(`void r5qp3473(int a, size_t b, float c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3473 生成结果为空');
      const expectSnippet0 = 'export function r5qp3473(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3473 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3473 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3474
  * @tc.name : h2dts_gen_3474
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3474', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3474(int a, size_t b, float c, int16_t d);`),
        unions: parseUnion(`void r5qp3474(int a, size_t b, float c, int16_t d);`),
        structs: parseStruct(`void r5qp3474(int a, size_t b, float c, int16_t d);`),
        classes: parseClass(`void r5qp3474(int a, size_t b, float c, int16_t d);`),
        funcs: parseFunction(`void r5qp3474(int a, size_t b, float c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3474 生成结果为空');
      const expectSnippet0 = 'export function r5qp3474(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3474 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3474 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3475
  * @tc.name : h2dts_gen_3475
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3475', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3475(int a, size_t b, float c, int32_t d);`),
        unions: parseUnion(`void r5qp3475(int a, size_t b, float c, int32_t d);`),
        structs: parseStruct(`void r5qp3475(int a, size_t b, float c, int32_t d);`),
        classes: parseClass(`void r5qp3475(int a, size_t b, float c, int32_t d);`),
        funcs: parseFunction(`void r5qp3475(int a, size_t b, float c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3475 生成结果为空');
      const expectSnippet0 = 'export function r5qp3475(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3475 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3475 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3476
  * @tc.name : h2dts_gen_3476
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3476', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3476(int a, size_t b, float c, int64_t d);`),
        unions: parseUnion(`void r5qp3476(int a, size_t b, float c, int64_t d);`),
        structs: parseStruct(`void r5qp3476(int a, size_t b, float c, int64_t d);`),
        classes: parseClass(`void r5qp3476(int a, size_t b, float c, int64_t d);`),
        funcs: parseFunction(`void r5qp3476(int a, size_t b, float c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3476 生成结果为空');
      const expectSnippet0 = 'export function r5qp3476(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3476 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3476 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3476 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3477
  * @tc.name : h2dts_gen_3477
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3477', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3477(int a, size_t b, float c, unsigned d);`),
        unions: parseUnion(`void r5qp3477(int a, size_t b, float c, unsigned d);`),
        structs: parseStruct(`void r5qp3477(int a, size_t b, float c, unsigned d);`),
        classes: parseClass(`void r5qp3477(int a, size_t b, float c, unsigned d);`),
        funcs: parseFunction(`void r5qp3477(int a, size_t b, float c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3477 生成结果为空');
      const expectSnippet0 = 'export function r5qp3477(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3477 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3477 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3478
  * @tc.name : h2dts_gen_3478
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3478', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3478(int a, size_t b, float c, bool d);`),
        unions: parseUnion(`void r5qp3478(int a, size_t b, float c, bool d);`),
        structs: parseStruct(`void r5qp3478(int a, size_t b, float c, bool d);`),
        classes: parseClass(`void r5qp3478(int a, size_t b, float c, bool d);`),
        funcs: parseFunction(`void r5qp3478(int a, size_t b, float c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3478 生成结果为空');
      const expectSnippet0 = 'export function r5qp3478(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3478 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3478 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3478 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3479
  * @tc.name : h2dts_gen_3479
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3479', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3479(int a, size_t b, float c, char d);`),
        unions: parseUnion(`void r5qp3479(int a, size_t b, float c, char d);`),
        structs: parseStruct(`void r5qp3479(int a, size_t b, float c, char d);`),
        classes: parseClass(`void r5qp3479(int a, size_t b, float c, char d);`),
        funcs: parseFunction(`void r5qp3479(int a, size_t b, float c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3479 生成结果为空');
      const expectSnippet0 = 'export function r5qp3479(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3479 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3479 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3479 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3480
  * @tc.name : h2dts_gen_3480
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3480', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3480(int a, size_t b, float c, wchar_t d);`),
        unions: parseUnion(`void r5qp3480(int a, size_t b, float c, wchar_t d);`),
        structs: parseStruct(`void r5qp3480(int a, size_t b, float c, wchar_t d);`),
        classes: parseClass(`void r5qp3480(int a, size_t b, float c, wchar_t d);`),
        funcs: parseFunction(`void r5qp3480(int a, size_t b, float c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3480 生成结果为空');
      const expectSnippet0 = 'export function r5qp3480(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3480 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3480 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3480 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3481
  * @tc.name : h2dts_gen_3481
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3481', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3481(int a, size_t b, float c, char8_t d);`),
        unions: parseUnion(`void r5qp3481(int a, size_t b, float c, char8_t d);`),
        structs: parseStruct(`void r5qp3481(int a, size_t b, float c, char8_t d);`),
        classes: parseClass(`void r5qp3481(int a, size_t b, float c, char8_t d);`),
        funcs: parseFunction(`void r5qp3481(int a, size_t b, float c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3481 生成结果为空');
      const expectSnippet0 = 'export function r5qp3481(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3481 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3481 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3481 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3482
  * @tc.name : h2dts_gen_3482
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3482', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3482(int a, size_t b, float c, char16_t d);`),
        unions: parseUnion(`void r5qp3482(int a, size_t b, float c, char16_t d);`),
        structs: parseStruct(`void r5qp3482(int a, size_t b, float c, char16_t d);`),
        classes: parseClass(`void r5qp3482(int a, size_t b, float c, char16_t d);`),
        funcs: parseFunction(`void r5qp3482(int a, size_t b, float c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3482 生成结果为空');
      const expectSnippet0 = 'export function r5qp3482(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3482 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3482 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3482 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3483
  * @tc.name : h2dts_gen_3483
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3483', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3483(int a, size_t b, float c, char32_t d);`),
        unions: parseUnion(`void r5qp3483(int a, size_t b, float c, char32_t d);`),
        structs: parseStruct(`void r5qp3483(int a, size_t b, float c, char32_t d);`),
        classes: parseClass(`void r5qp3483(int a, size_t b, float c, char32_t d);`),
        funcs: parseFunction(`void r5qp3483(int a, size_t b, float c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3483 生成结果为空');
      const expectSnippet0 = 'export function r5qp3483(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3483 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3483 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3483 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3484
  * @tc.name : h2dts_gen_3484
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3484', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3484(int a, size_t b, float c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp3484(int a, size_t b, float c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp3484(int a, size_t b, float c, std::deque<int> d);`),
        classes: parseClass(`void r5qp3484(int a, size_t b, float c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp3484(int a, size_t b, float c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3484 生成结果为空');
      const expectSnippet0 = 'export function r5qp3484(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3484 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3484 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3484 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3485
  * @tc.name : h2dts_gen_3485
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3485', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3485(int a, size_t b, float c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp3485(int a, size_t b, float c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp3485(int a, size_t b, float c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp3485(int a, size_t b, float c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp3485(int a, size_t b, float c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3485 生成结果为空');
      const expectSnippet0 = 'export function r5qp3485(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3485 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3485 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3485 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3486
  * @tc.name : h2dts_gen_3486
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3486', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3486(int a, size_t b, float c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp3486(int a, size_t b, float c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp3486(int a, size_t b, float c, std::deque<double> d);`),
        classes: parseClass(`void r5qp3486(int a, size_t b, float c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp3486(int a, size_t b, float c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3486 生成结果为空');
      const expectSnippet0 = 'export function r5qp3486(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3486 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3486 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3486 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3487
  * @tc.name : h2dts_gen_3487
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3487', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3487(int a, size_t b, float c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp3487(int a, size_t b, float c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp3487(int a, size_t b, float c, std::deque<float> d);`),
        classes: parseClass(`void r5qp3487(int a, size_t b, float c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp3487(int a, size_t b, float c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3487 生成结果为空');
      const expectSnippet0 = 'export function r5qp3487(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3487 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3487 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3487 执行异常: ${String(err)}`);
    }
  });
});
