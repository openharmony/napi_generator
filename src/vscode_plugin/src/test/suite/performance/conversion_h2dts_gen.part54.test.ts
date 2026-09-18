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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part54.');

  /**
  * @tc.number : h2dts_gen_1753
  * @tc.name : h2dts_gen_1753
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1753', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1753(int a, float b, std::deque<int64_t> c);`),
        unions: parseUnion(`void r4tp1753(int a, float b, std::deque<int64_t> c);`),
        structs: parseStruct(`void r4tp1753(int a, float b, std::deque<int64_t> c);`),
        classes: parseClass(`void r4tp1753(int a, float b, std::deque<int64_t> c);`),
        funcs: parseFunction(`void r4tp1753(int a, float b, std::deque<int64_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1753 生成结果为空');
      const expectSnippet0 = 'export function r4tp1753(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1753 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1753 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1753 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1754
  * @tc.name : h2dts_gen_1754
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1754', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1754(int a, float b, std::deque<unsigned> c);`),
        unions: parseUnion(`void r4tp1754(int a, float b, std::deque<unsigned> c);`),
        structs: parseStruct(`void r4tp1754(int a, float b, std::deque<unsigned> c);`),
        classes: parseClass(`void r4tp1754(int a, float b, std::deque<unsigned> c);`),
        funcs: parseFunction(`void r4tp1754(int a, float b, std::deque<unsigned> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1754 生成结果为空');
      const expectSnippet0 = 'export function r4tp1754(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1754 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1754 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1754 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1755
  * @tc.name : h2dts_gen_1755
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1755', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1755(int a, float b, std::deque<bool> c);`),
        unions: parseUnion(`void r4tp1755(int a, float b, std::deque<bool> c);`),
        structs: parseStruct(`void r4tp1755(int a, float b, std::deque<bool> c);`),
        classes: parseClass(`void r4tp1755(int a, float b, std::deque<bool> c);`),
        funcs: parseFunction(`void r4tp1755(int a, float b, std::deque<bool> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1755 生成结果为空');
      const expectSnippet0 = 'export function r4tp1755(a: number, b: number, c: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1755 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1755 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1755 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1756
  * @tc.name : h2dts_gen_1756
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1756', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1756(int a, float b, std::deque<char> c);`),
        unions: parseUnion(`void r4tp1756(int a, float b, std::deque<char> c);`),
        structs: parseStruct(`void r4tp1756(int a, float b, std::deque<char> c);`),
        classes: parseClass(`void r4tp1756(int a, float b, std::deque<char> c);`),
        funcs: parseFunction(`void r4tp1756(int a, float b, std::deque<char> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1756 生成结果为空');
      const expectSnippet0 = 'export function r4tp1756(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1756 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1756 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1756 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1757
  * @tc.name : h2dts_gen_1757
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1757', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1757(int a, float b, std::deque<wchar_t> c);`),
        unions: parseUnion(`void r4tp1757(int a, float b, std::deque<wchar_t> c);`),
        structs: parseStruct(`void r4tp1757(int a, float b, std::deque<wchar_t> c);`),
        classes: parseClass(`void r4tp1757(int a, float b, std::deque<wchar_t> c);`),
        funcs: parseFunction(`void r4tp1757(int a, float b, std::deque<wchar_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1757 生成结果为空');
      const expectSnippet0 = 'export function r4tp1757(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1757 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1757 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1757 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1758
  * @tc.name : h2dts_gen_1758
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1758', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1758(int a, float b, std::deque<char8_t> c);`),
        unions: parseUnion(`void r4tp1758(int a, float b, std::deque<char8_t> c);`),
        structs: parseStruct(`void r4tp1758(int a, float b, std::deque<char8_t> c);`),
        classes: parseClass(`void r4tp1758(int a, float b, std::deque<char8_t> c);`),
        funcs: parseFunction(`void r4tp1758(int a, float b, std::deque<char8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1758 生成结果为空');
      const expectSnippet0 = 'export function r4tp1758(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1758 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1758 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1758 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1759
  * @tc.name : h2dts_gen_1759
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1759', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1759(int a, short b, long c);`),
        unions: parseUnion(`void r4tp1759(int a, short b, long c);`),
        structs: parseStruct(`void r4tp1759(int a, short b, long c);`),
        classes: parseClass(`void r4tp1759(int a, short b, long c);`),
        funcs: parseFunction(`void r4tp1759(int a, short b, long c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1759 生成结果为空');
      const expectSnippet0 = 'export function r4tp1759(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1759 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1759 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1759 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1760
  * @tc.name : h2dts_gen_1760
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1760', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1760(int a, short b, uint8_t c);`),
        unions: parseUnion(`void r4tp1760(int a, short b, uint8_t c);`),
        structs: parseStruct(`void r4tp1760(int a, short b, uint8_t c);`),
        classes: parseClass(`void r4tp1760(int a, short b, uint8_t c);`),
        funcs: parseFunction(`void r4tp1760(int a, short b, uint8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1760 生成结果为空');
      const expectSnippet0 = 'export function r4tp1760(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1760 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1760 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1760 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1761
  * @tc.name : h2dts_gen_1761
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1761', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1761(int a, short b, uint16_t c);`),
        unions: parseUnion(`void r4tp1761(int a, short b, uint16_t c);`),
        structs: parseStruct(`void r4tp1761(int a, short b, uint16_t c);`),
        classes: parseClass(`void r4tp1761(int a, short b, uint16_t c);`),
        funcs: parseFunction(`void r4tp1761(int a, short b, uint16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1761 生成结果为空');
      const expectSnippet0 = 'export function r4tp1761(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1761 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1761 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1761 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1762
  * @tc.name : h2dts_gen_1762
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1762', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1762(int a, short b, uint32_t c);`),
        unions: parseUnion(`void r4tp1762(int a, short b, uint32_t c);`),
        structs: parseStruct(`void r4tp1762(int a, short b, uint32_t c);`),
        classes: parseClass(`void r4tp1762(int a, short b, uint32_t c);`),
        funcs: parseFunction(`void r4tp1762(int a, short b, uint32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1762 生成结果为空');
      const expectSnippet0 = 'export function r4tp1762(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1762 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1762 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1762 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1763
  * @tc.name : h2dts_gen_1763
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1763', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1763(int a, short b, uint64_t c);`),
        unions: parseUnion(`void r4tp1763(int a, short b, uint64_t c);`),
        structs: parseStruct(`void r4tp1763(int a, short b, uint64_t c);`),
        classes: parseClass(`void r4tp1763(int a, short b, uint64_t c);`),
        funcs: parseFunction(`void r4tp1763(int a, short b, uint64_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1763 生成结果为空');
      const expectSnippet0 = 'export function r4tp1763(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1763 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1763 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1763 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1764
  * @tc.name : h2dts_gen_1764
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1764', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1764(int a, short b, int8_t c);`),
        unions: parseUnion(`void r4tp1764(int a, short b, int8_t c);`),
        structs: parseStruct(`void r4tp1764(int a, short b, int8_t c);`),
        classes: parseClass(`void r4tp1764(int a, short b, int8_t c);`),
        funcs: parseFunction(`void r4tp1764(int a, short b, int8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1764 生成结果为空');
      const expectSnippet0 = 'export function r4tp1764(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1764 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1764 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1764 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1765
  * @tc.name : h2dts_gen_1765
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1765', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1765(int a, short b, int16_t c);`),
        unions: parseUnion(`void r4tp1765(int a, short b, int16_t c);`),
        structs: parseStruct(`void r4tp1765(int a, short b, int16_t c);`),
        classes: parseClass(`void r4tp1765(int a, short b, int16_t c);`),
        funcs: parseFunction(`void r4tp1765(int a, short b, int16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1765 生成结果为空');
      const expectSnippet0 = 'export function r4tp1765(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1765 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1765 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1765 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1766
  * @tc.name : h2dts_gen_1766
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1766', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1766(int a, short b, int32_t c);`),
        unions: parseUnion(`void r4tp1766(int a, short b, int32_t c);`),
        structs: parseStruct(`void r4tp1766(int a, short b, int32_t c);`),
        classes: parseClass(`void r4tp1766(int a, short b, int32_t c);`),
        funcs: parseFunction(`void r4tp1766(int a, short b, int32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1766 生成结果为空');
      const expectSnippet0 = 'export function r4tp1766(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1766 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1766 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1766 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1767
  * @tc.name : h2dts_gen_1767
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1767', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1767(int a, short b, int64_t c);`),
        unions: parseUnion(`void r4tp1767(int a, short b, int64_t c);`),
        structs: parseStruct(`void r4tp1767(int a, short b, int64_t c);`),
        classes: parseClass(`void r4tp1767(int a, short b, int64_t c);`),
        funcs: parseFunction(`void r4tp1767(int a, short b, int64_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1767 生成结果为空');
      const expectSnippet0 = 'export function r4tp1767(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1767 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1767 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1767 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1768
  * @tc.name : h2dts_gen_1768
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1768', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1768(int a, short b, unsigned c);`),
        unions: parseUnion(`void r4tp1768(int a, short b, unsigned c);`),
        structs: parseStruct(`void r4tp1768(int a, short b, unsigned c);`),
        classes: parseClass(`void r4tp1768(int a, short b, unsigned c);`),
        funcs: parseFunction(`void r4tp1768(int a, short b, unsigned c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1768 生成结果为空');
      const expectSnippet0 = 'export function r4tp1768(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1768 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1768 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1768 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1769
  * @tc.name : h2dts_gen_1769
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1769', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1769(int a, short b, bool c);`),
        unions: parseUnion(`void r4tp1769(int a, short b, bool c);`),
        structs: parseStruct(`void r4tp1769(int a, short b, bool c);`),
        classes: parseClass(`void r4tp1769(int a, short b, bool c);`),
        funcs: parseFunction(`void r4tp1769(int a, short b, bool c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1769 生成结果为空');
      const expectSnippet0 = 'export function r4tp1769(a: number, b: number, c: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1769 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1769 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1769 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1770
  * @tc.name : h2dts_gen_1770
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1770', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1770(int a, short b, char c);`),
        unions: parseUnion(`void r4tp1770(int a, short b, char c);`),
        structs: parseStruct(`void r4tp1770(int a, short b, char c);`),
        classes: parseClass(`void r4tp1770(int a, short b, char c);`),
        funcs: parseFunction(`void r4tp1770(int a, short b, char c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1770 生成结果为空');
      const expectSnippet0 = 'export function r4tp1770(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1770 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1770 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1770 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1771
  * @tc.name : h2dts_gen_1771
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1771', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1771(int a, short b, wchar_t c);`),
        unions: parseUnion(`void r4tp1771(int a, short b, wchar_t c);`),
        structs: parseStruct(`void r4tp1771(int a, short b, wchar_t c);`),
        classes: parseClass(`void r4tp1771(int a, short b, wchar_t c);`),
        funcs: parseFunction(`void r4tp1771(int a, short b, wchar_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1771 生成结果为空');
      const expectSnippet0 = 'export function r4tp1771(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1771 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1771 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1771 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1772
  * @tc.name : h2dts_gen_1772
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1772', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1772(int a, short b, char8_t c);`),
        unions: parseUnion(`void r4tp1772(int a, short b, char8_t c);`),
        structs: parseStruct(`void r4tp1772(int a, short b, char8_t c);`),
        classes: parseClass(`void r4tp1772(int a, short b, char8_t c);`),
        funcs: parseFunction(`void r4tp1772(int a, short b, char8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1772 生成结果为空');
      const expectSnippet0 = 'export function r4tp1772(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1772 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1772 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1772 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1773
  * @tc.name : h2dts_gen_1773
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1773', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1773(int a, short b, char16_t c);`),
        unions: parseUnion(`void r4tp1773(int a, short b, char16_t c);`),
        structs: parseStruct(`void r4tp1773(int a, short b, char16_t c);`),
        classes: parseClass(`void r4tp1773(int a, short b, char16_t c);`),
        funcs: parseFunction(`void r4tp1773(int a, short b, char16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1773 生成结果为空');
      const expectSnippet0 = 'export function r4tp1773(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1773 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1773 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1773 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1774
  * @tc.name : h2dts_gen_1774
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1774', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1774(int a, short b, char32_t c);`),
        unions: parseUnion(`void r4tp1774(int a, short b, char32_t c);`),
        structs: parseStruct(`void r4tp1774(int a, short b, char32_t c);`),
        classes: parseClass(`void r4tp1774(int a, short b, char32_t c);`),
        funcs: parseFunction(`void r4tp1774(int a, short b, char32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1774 生成结果为空');
      const expectSnippet0 = 'export function r4tp1774(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1774 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1774 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1774 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1775
  * @tc.name : h2dts_gen_1775
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1775', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1775(int a, short b, std::deque<int> c);`),
        unions: parseUnion(`void r4tp1775(int a, short b, std::deque<int> c);`),
        structs: parseStruct(`void r4tp1775(int a, short b, std::deque<int> c);`),
        classes: parseClass(`void r4tp1775(int a, short b, std::deque<int> c);`),
        funcs: parseFunction(`void r4tp1775(int a, short b, std::deque<int> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1775 生成结果为空');
      const expectSnippet0 = 'export function r4tp1775(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1775 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1775 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1775 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1776
  * @tc.name : h2dts_gen_1776
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1776', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1776(int a, short b, std::deque<size_t> c);`),
        unions: parseUnion(`void r4tp1776(int a, short b, std::deque<size_t> c);`),
        structs: parseStruct(`void r4tp1776(int a, short b, std::deque<size_t> c);`),
        classes: parseClass(`void r4tp1776(int a, short b, std::deque<size_t> c);`),
        funcs: parseFunction(`void r4tp1776(int a, short b, std::deque<size_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1776 生成结果为空');
      const expectSnippet0 = 'export function r4tp1776(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1776 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1776 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1776 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1777
  * @tc.name : h2dts_gen_1777
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1777', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1777(int a, short b, std::deque<double> c);`),
        unions: parseUnion(`void r4tp1777(int a, short b, std::deque<double> c);`),
        structs: parseStruct(`void r4tp1777(int a, short b, std::deque<double> c);`),
        classes: parseClass(`void r4tp1777(int a, short b, std::deque<double> c);`),
        funcs: parseFunction(`void r4tp1777(int a, short b, std::deque<double> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1777 生成结果为空');
      const expectSnippet0 = 'export function r4tp1777(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1777 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1777 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1777 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1778
  * @tc.name : h2dts_gen_1778
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1778', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1778(int a, short b, std::deque<float> c);`),
        unions: parseUnion(`void r4tp1778(int a, short b, std::deque<float> c);`),
        structs: parseStruct(`void r4tp1778(int a, short b, std::deque<float> c);`),
        classes: parseClass(`void r4tp1778(int a, short b, std::deque<float> c);`),
        funcs: parseFunction(`void r4tp1778(int a, short b, std::deque<float> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1778 生成结果为空');
      const expectSnippet0 = 'export function r4tp1778(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1778 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1778 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1778 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1779
  * @tc.name : h2dts_gen_1779
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1779', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1779(int a, short b, std::deque<long> c);`),
        unions: parseUnion(`void r4tp1779(int a, short b, std::deque<long> c);`),
        structs: parseStruct(`void r4tp1779(int a, short b, std::deque<long> c);`),
        classes: parseClass(`void r4tp1779(int a, short b, std::deque<long> c);`),
        funcs: parseFunction(`void r4tp1779(int a, short b, std::deque<long> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1779 生成结果为空');
      const expectSnippet0 = 'export function r4tp1779(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1779 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1779 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1779 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1780
  * @tc.name : h2dts_gen_1780
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1780', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1780(int a, short b, std::deque<short> c);`),
        unions: parseUnion(`void r4tp1780(int a, short b, std::deque<short> c);`),
        structs: parseStruct(`void r4tp1780(int a, short b, std::deque<short> c);`),
        classes: parseClass(`void r4tp1780(int a, short b, std::deque<short> c);`),
        funcs: parseFunction(`void r4tp1780(int a, short b, std::deque<short> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1780 生成结果为空');
      const expectSnippet0 = 'export function r4tp1780(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1780 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1780 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1780 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1781
  * @tc.name : h2dts_gen_1781
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1781', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1781(int a, short b, std::deque<uint8_t> c);`),
        unions: parseUnion(`void r4tp1781(int a, short b, std::deque<uint8_t> c);`),
        structs: parseStruct(`void r4tp1781(int a, short b, std::deque<uint8_t> c);`),
        classes: parseClass(`void r4tp1781(int a, short b, std::deque<uint8_t> c);`),
        funcs: parseFunction(`void r4tp1781(int a, short b, std::deque<uint8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1781 生成结果为空');
      const expectSnippet0 = 'export function r4tp1781(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1781 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1781 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1781 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1782
  * @tc.name : h2dts_gen_1782
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1782', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1782(int a, short b, std::deque<uint16_t> c);`),
        unions: parseUnion(`void r4tp1782(int a, short b, std::deque<uint16_t> c);`),
        structs: parseStruct(`void r4tp1782(int a, short b, std::deque<uint16_t> c);`),
        classes: parseClass(`void r4tp1782(int a, short b, std::deque<uint16_t> c);`),
        funcs: parseFunction(`void r4tp1782(int a, short b, std::deque<uint16_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1782 生成结果为空');
      const expectSnippet0 = 'export function r4tp1782(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1782 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1782 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1782 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1783
  * @tc.name : h2dts_gen_1783
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1783', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1783(int a, short b, std::deque<uint32_t> c);`),
        unions: parseUnion(`void r4tp1783(int a, short b, std::deque<uint32_t> c);`),
        structs: parseStruct(`void r4tp1783(int a, short b, std::deque<uint32_t> c);`),
        classes: parseClass(`void r4tp1783(int a, short b, std::deque<uint32_t> c);`),
        funcs: parseFunction(`void r4tp1783(int a, short b, std::deque<uint32_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1783 生成结果为空');
      const expectSnippet0 = 'export function r4tp1783(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1783 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1783 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1783 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1784
  * @tc.name : h2dts_gen_1784
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1784', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1784(int a, short b, std::deque<uint64_t> c);`),
        unions: parseUnion(`void r4tp1784(int a, short b, std::deque<uint64_t> c);`),
        structs: parseStruct(`void r4tp1784(int a, short b, std::deque<uint64_t> c);`),
        classes: parseClass(`void r4tp1784(int a, short b, std::deque<uint64_t> c);`),
        funcs: parseFunction(`void r4tp1784(int a, short b, std::deque<uint64_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1784 生成结果为空');
      const expectSnippet0 = 'export function r4tp1784(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1784 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1784 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1784 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1785
  * @tc.name : h2dts_gen_1785
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1785', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1785(int a, short b, std::deque<int8_t> c);`),
        unions: parseUnion(`void r4tp1785(int a, short b, std::deque<int8_t> c);`),
        structs: parseStruct(`void r4tp1785(int a, short b, std::deque<int8_t> c);`),
        classes: parseClass(`void r4tp1785(int a, short b, std::deque<int8_t> c);`),
        funcs: parseFunction(`void r4tp1785(int a, short b, std::deque<int8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1785 生成结果为空');
      const expectSnippet0 = 'export function r4tp1785(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1785 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1785 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1785 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1786
  * @tc.name : h2dts_gen_1786
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1786', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1786(int a, short b, std::deque<int16_t> c);`),
        unions: parseUnion(`void r4tp1786(int a, short b, std::deque<int16_t> c);`),
        structs: parseStruct(`void r4tp1786(int a, short b, std::deque<int16_t> c);`),
        classes: parseClass(`void r4tp1786(int a, short b, std::deque<int16_t> c);`),
        funcs: parseFunction(`void r4tp1786(int a, short b, std::deque<int16_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1786 生成结果为空');
      const expectSnippet0 = 'export function r4tp1786(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1786 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1786 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1786 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1787
  * @tc.name : h2dts_gen_1787
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1787', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1787(int a, short b, std::deque<int32_t> c);`),
        unions: parseUnion(`void r4tp1787(int a, short b, std::deque<int32_t> c);`),
        structs: parseStruct(`void r4tp1787(int a, short b, std::deque<int32_t> c);`),
        classes: parseClass(`void r4tp1787(int a, short b, std::deque<int32_t> c);`),
        funcs: parseFunction(`void r4tp1787(int a, short b, std::deque<int32_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1787 生成结果为空');
      const expectSnippet0 = 'export function r4tp1787(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1787 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1787 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1787 执行异常: ${String(err)}`);
    }
  });
});
