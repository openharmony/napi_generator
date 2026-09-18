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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part52.');

  /**
  * @tc.number : h2dts_gen_1683
  * @tc.name : h2dts_gen_1683
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1683', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1683(int a, size_t b, std::deque<char> c);`),
        unions: parseUnion(`void r4tp1683(int a, size_t b, std::deque<char> c);`),
        structs: parseStruct(`void r4tp1683(int a, size_t b, std::deque<char> c);`),
        classes: parseClass(`void r4tp1683(int a, size_t b, std::deque<char> c);`),
        funcs: parseFunction(`void r4tp1683(int a, size_t b, std::deque<char> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1683 生成结果为空');
      const expectSnippet0 = 'export function r4tp1683(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1683 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1683 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1683 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1684
  * @tc.name : h2dts_gen_1684
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1684', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1684(int a, size_t b, std::deque<wchar_t> c);`),
        unions: parseUnion(`void r4tp1684(int a, size_t b, std::deque<wchar_t> c);`),
        structs: parseStruct(`void r4tp1684(int a, size_t b, std::deque<wchar_t> c);`),
        classes: parseClass(`void r4tp1684(int a, size_t b, std::deque<wchar_t> c);`),
        funcs: parseFunction(`void r4tp1684(int a, size_t b, std::deque<wchar_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1684 生成结果为空');
      const expectSnippet0 = 'export function r4tp1684(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1684 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1684 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1684 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1685
  * @tc.name : h2dts_gen_1685
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1685', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1685(int a, size_t b, std::deque<char8_t> c);`),
        unions: parseUnion(`void r4tp1685(int a, size_t b, std::deque<char8_t> c);`),
        structs: parseStruct(`void r4tp1685(int a, size_t b, std::deque<char8_t> c);`),
        classes: parseClass(`void r4tp1685(int a, size_t b, std::deque<char8_t> c);`),
        funcs: parseFunction(`void r4tp1685(int a, size_t b, std::deque<char8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1685 生成结果为空');
      const expectSnippet0 = 'export function r4tp1685(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1685 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1685 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1685 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1686
  * @tc.name : h2dts_gen_1686
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1686', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1686(int a, double b, float c);`),
        unions: parseUnion(`void r4tp1686(int a, double b, float c);`),
        structs: parseStruct(`void r4tp1686(int a, double b, float c);`),
        classes: parseClass(`void r4tp1686(int a, double b, float c);`),
        funcs: parseFunction(`void r4tp1686(int a, double b, float c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1686 生成结果为空');
      const expectSnippet0 = 'export function r4tp1686(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1686 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1686 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1686 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1687
  * @tc.name : h2dts_gen_1687
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1687', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1687(int a, double b, short c);`),
        unions: parseUnion(`void r4tp1687(int a, double b, short c);`),
        structs: parseStruct(`void r4tp1687(int a, double b, short c);`),
        classes: parseClass(`void r4tp1687(int a, double b, short c);`),
        funcs: parseFunction(`void r4tp1687(int a, double b, short c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1687 生成结果为空');
      const expectSnippet0 = 'export function r4tp1687(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1687 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1687 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1687 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1688
  * @tc.name : h2dts_gen_1688
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1688', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1688(int a, double b, long c);`),
        unions: parseUnion(`void r4tp1688(int a, double b, long c);`),
        structs: parseStruct(`void r4tp1688(int a, double b, long c);`),
        classes: parseClass(`void r4tp1688(int a, double b, long c);`),
        funcs: parseFunction(`void r4tp1688(int a, double b, long c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1688 生成结果为空');
      const expectSnippet0 = 'export function r4tp1688(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1688 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1688 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1688 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1689
  * @tc.name : h2dts_gen_1689
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1689', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1689(int a, double b, uint8_t c);`),
        unions: parseUnion(`void r4tp1689(int a, double b, uint8_t c);`),
        structs: parseStruct(`void r4tp1689(int a, double b, uint8_t c);`),
        classes: parseClass(`void r4tp1689(int a, double b, uint8_t c);`),
        funcs: parseFunction(`void r4tp1689(int a, double b, uint8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1689 生成结果为空');
      const expectSnippet0 = 'export function r4tp1689(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1689 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1689 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1689 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1690
  * @tc.name : h2dts_gen_1690
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1690', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1690(int a, double b, uint16_t c);`),
        unions: parseUnion(`void r4tp1690(int a, double b, uint16_t c);`),
        structs: parseStruct(`void r4tp1690(int a, double b, uint16_t c);`),
        classes: parseClass(`void r4tp1690(int a, double b, uint16_t c);`),
        funcs: parseFunction(`void r4tp1690(int a, double b, uint16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1690 生成结果为空');
      const expectSnippet0 = 'export function r4tp1690(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1690 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1690 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1690 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1691
  * @tc.name : h2dts_gen_1691
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1691', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1691(int a, double b, uint32_t c);`),
        unions: parseUnion(`void r4tp1691(int a, double b, uint32_t c);`),
        structs: parseStruct(`void r4tp1691(int a, double b, uint32_t c);`),
        classes: parseClass(`void r4tp1691(int a, double b, uint32_t c);`),
        funcs: parseFunction(`void r4tp1691(int a, double b, uint32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1691 生成结果为空');
      const expectSnippet0 = 'export function r4tp1691(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1691 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1691 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1691 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1692
  * @tc.name : h2dts_gen_1692
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1692', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1692(int a, double b, uint64_t c);`),
        unions: parseUnion(`void r4tp1692(int a, double b, uint64_t c);`),
        structs: parseStruct(`void r4tp1692(int a, double b, uint64_t c);`),
        classes: parseClass(`void r4tp1692(int a, double b, uint64_t c);`),
        funcs: parseFunction(`void r4tp1692(int a, double b, uint64_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1692 生成结果为空');
      const expectSnippet0 = 'export function r4tp1692(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1692 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1692 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1692 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1693
  * @tc.name : h2dts_gen_1693
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1693', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1693(int a, double b, int8_t c);`),
        unions: parseUnion(`void r4tp1693(int a, double b, int8_t c);`),
        structs: parseStruct(`void r4tp1693(int a, double b, int8_t c);`),
        classes: parseClass(`void r4tp1693(int a, double b, int8_t c);`),
        funcs: parseFunction(`void r4tp1693(int a, double b, int8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1693 生成结果为空');
      const expectSnippet0 = 'export function r4tp1693(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1693 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1693 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1693 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1694
  * @tc.name : h2dts_gen_1694
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1694', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1694(int a, double b, int16_t c);`),
        unions: parseUnion(`void r4tp1694(int a, double b, int16_t c);`),
        structs: parseStruct(`void r4tp1694(int a, double b, int16_t c);`),
        classes: parseClass(`void r4tp1694(int a, double b, int16_t c);`),
        funcs: parseFunction(`void r4tp1694(int a, double b, int16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1694 生成结果为空');
      const expectSnippet0 = 'export function r4tp1694(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1694 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1694 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1694 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1695
  * @tc.name : h2dts_gen_1695
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1695', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1695(int a, double b, int32_t c);`),
        unions: parseUnion(`void r4tp1695(int a, double b, int32_t c);`),
        structs: parseStruct(`void r4tp1695(int a, double b, int32_t c);`),
        classes: parseClass(`void r4tp1695(int a, double b, int32_t c);`),
        funcs: parseFunction(`void r4tp1695(int a, double b, int32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1695 生成结果为空');
      const expectSnippet0 = 'export function r4tp1695(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1695 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1695 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1695 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1696
  * @tc.name : h2dts_gen_1696
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1696', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1696(int a, double b, int64_t c);`),
        unions: parseUnion(`void r4tp1696(int a, double b, int64_t c);`),
        structs: parseStruct(`void r4tp1696(int a, double b, int64_t c);`),
        classes: parseClass(`void r4tp1696(int a, double b, int64_t c);`),
        funcs: parseFunction(`void r4tp1696(int a, double b, int64_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1696 生成结果为空');
      const expectSnippet0 = 'export function r4tp1696(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1696 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1696 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1696 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1697
  * @tc.name : h2dts_gen_1697
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1697', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1697(int a, double b, unsigned c);`),
        unions: parseUnion(`void r4tp1697(int a, double b, unsigned c);`),
        structs: parseStruct(`void r4tp1697(int a, double b, unsigned c);`),
        classes: parseClass(`void r4tp1697(int a, double b, unsigned c);`),
        funcs: parseFunction(`void r4tp1697(int a, double b, unsigned c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1697 生成结果为空');
      const expectSnippet0 = 'export function r4tp1697(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1697 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1697 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1697 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1698
  * @tc.name : h2dts_gen_1698
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1698', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1698(int a, double b, bool c);`),
        unions: parseUnion(`void r4tp1698(int a, double b, bool c);`),
        structs: parseStruct(`void r4tp1698(int a, double b, bool c);`),
        classes: parseClass(`void r4tp1698(int a, double b, bool c);`),
        funcs: parseFunction(`void r4tp1698(int a, double b, bool c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1698 生成结果为空');
      const expectSnippet0 = 'export function r4tp1698(a: number, b: number, c: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1698 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1698 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1698 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1699
  * @tc.name : h2dts_gen_1699
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1699', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1699(int a, double b, char c);`),
        unions: parseUnion(`void r4tp1699(int a, double b, char c);`),
        structs: parseStruct(`void r4tp1699(int a, double b, char c);`),
        classes: parseClass(`void r4tp1699(int a, double b, char c);`),
        funcs: parseFunction(`void r4tp1699(int a, double b, char c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1699 生成结果为空');
      const expectSnippet0 = 'export function r4tp1699(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1699 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1699 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1699 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1700
  * @tc.name : h2dts_gen_1700
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1700', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1700(int a, double b, wchar_t c);`),
        unions: parseUnion(`void r4tp1700(int a, double b, wchar_t c);`),
        structs: parseStruct(`void r4tp1700(int a, double b, wchar_t c);`),
        classes: parseClass(`void r4tp1700(int a, double b, wchar_t c);`),
        funcs: parseFunction(`void r4tp1700(int a, double b, wchar_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1700 生成结果为空');
      const expectSnippet0 = 'export function r4tp1700(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1700 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1700 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1700 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1701
  * @tc.name : h2dts_gen_1701
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1701', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1701(int a, double b, char8_t c);`),
        unions: parseUnion(`void r4tp1701(int a, double b, char8_t c);`),
        structs: parseStruct(`void r4tp1701(int a, double b, char8_t c);`),
        classes: parseClass(`void r4tp1701(int a, double b, char8_t c);`),
        funcs: parseFunction(`void r4tp1701(int a, double b, char8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1701 生成结果为空');
      const expectSnippet0 = 'export function r4tp1701(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1701 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1701 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1701 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1702
  * @tc.name : h2dts_gen_1702
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1702', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1702(int a, double b, char16_t c);`),
        unions: parseUnion(`void r4tp1702(int a, double b, char16_t c);`),
        structs: parseStruct(`void r4tp1702(int a, double b, char16_t c);`),
        classes: parseClass(`void r4tp1702(int a, double b, char16_t c);`),
        funcs: parseFunction(`void r4tp1702(int a, double b, char16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1702 生成结果为空');
      const expectSnippet0 = 'export function r4tp1702(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1702 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1702 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1702 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1703
  * @tc.name : h2dts_gen_1703
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1703', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1703(int a, double b, char32_t c);`),
        unions: parseUnion(`void r4tp1703(int a, double b, char32_t c);`),
        structs: parseStruct(`void r4tp1703(int a, double b, char32_t c);`),
        classes: parseClass(`void r4tp1703(int a, double b, char32_t c);`),
        funcs: parseFunction(`void r4tp1703(int a, double b, char32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1703 生成结果为空');
      const expectSnippet0 = 'export function r4tp1703(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1703 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1703 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1703 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1704
  * @tc.name : h2dts_gen_1704
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1704', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1704(int a, double b, std::deque<int> c);`),
        unions: parseUnion(`void r4tp1704(int a, double b, std::deque<int> c);`),
        structs: parseStruct(`void r4tp1704(int a, double b, std::deque<int> c);`),
        classes: parseClass(`void r4tp1704(int a, double b, std::deque<int> c);`),
        funcs: parseFunction(`void r4tp1704(int a, double b, std::deque<int> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1704 生成结果为空');
      const expectSnippet0 = 'export function r4tp1704(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1704 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1704 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1704 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1705
  * @tc.name : h2dts_gen_1705
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1705', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1705(int a, double b, std::deque<size_t> c);`),
        unions: parseUnion(`void r4tp1705(int a, double b, std::deque<size_t> c);`),
        structs: parseStruct(`void r4tp1705(int a, double b, std::deque<size_t> c);`),
        classes: parseClass(`void r4tp1705(int a, double b, std::deque<size_t> c);`),
        funcs: parseFunction(`void r4tp1705(int a, double b, std::deque<size_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1705 生成结果为空');
      const expectSnippet0 = 'export function r4tp1705(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1705 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1705 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1705 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1706
  * @tc.name : h2dts_gen_1706
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1706', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1706(int a, double b, std::deque<double> c);`),
        unions: parseUnion(`void r4tp1706(int a, double b, std::deque<double> c);`),
        structs: parseStruct(`void r4tp1706(int a, double b, std::deque<double> c);`),
        classes: parseClass(`void r4tp1706(int a, double b, std::deque<double> c);`),
        funcs: parseFunction(`void r4tp1706(int a, double b, std::deque<double> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1706 生成结果为空');
      const expectSnippet0 = 'export function r4tp1706(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1706 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1706 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1706 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1707
  * @tc.name : h2dts_gen_1707
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1707', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1707(int a, double b, std::deque<float> c);`),
        unions: parseUnion(`void r4tp1707(int a, double b, std::deque<float> c);`),
        structs: parseStruct(`void r4tp1707(int a, double b, std::deque<float> c);`),
        classes: parseClass(`void r4tp1707(int a, double b, std::deque<float> c);`),
        funcs: parseFunction(`void r4tp1707(int a, double b, std::deque<float> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1707 生成结果为空');
      const expectSnippet0 = 'export function r4tp1707(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1707 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1707 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1707 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1708
  * @tc.name : h2dts_gen_1708
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1708', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1708(int a, double b, std::deque<long> c);`),
        unions: parseUnion(`void r4tp1708(int a, double b, std::deque<long> c);`),
        structs: parseStruct(`void r4tp1708(int a, double b, std::deque<long> c);`),
        classes: parseClass(`void r4tp1708(int a, double b, std::deque<long> c);`),
        funcs: parseFunction(`void r4tp1708(int a, double b, std::deque<long> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1708 生成结果为空');
      const expectSnippet0 = 'export function r4tp1708(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1708 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1708 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1708 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1709
  * @tc.name : h2dts_gen_1709
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1709', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1709(int a, double b, std::deque<short> c);`),
        unions: parseUnion(`void r4tp1709(int a, double b, std::deque<short> c);`),
        structs: parseStruct(`void r4tp1709(int a, double b, std::deque<short> c);`),
        classes: parseClass(`void r4tp1709(int a, double b, std::deque<short> c);`),
        funcs: parseFunction(`void r4tp1709(int a, double b, std::deque<short> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1709 生成结果为空');
      const expectSnippet0 = 'export function r4tp1709(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1709 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1709 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1709 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1710
  * @tc.name : h2dts_gen_1710
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1710', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1710(int a, double b, std::deque<uint8_t> c);`),
        unions: parseUnion(`void r4tp1710(int a, double b, std::deque<uint8_t> c);`),
        structs: parseStruct(`void r4tp1710(int a, double b, std::deque<uint8_t> c);`),
        classes: parseClass(`void r4tp1710(int a, double b, std::deque<uint8_t> c);`),
        funcs: parseFunction(`void r4tp1710(int a, double b, std::deque<uint8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1710 生成结果为空');
      const expectSnippet0 = 'export function r4tp1710(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1710 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1710 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1710 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1711
  * @tc.name : h2dts_gen_1711
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1711', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1711(int a, double b, std::deque<uint16_t> c);`),
        unions: parseUnion(`void r4tp1711(int a, double b, std::deque<uint16_t> c);`),
        structs: parseStruct(`void r4tp1711(int a, double b, std::deque<uint16_t> c);`),
        classes: parseClass(`void r4tp1711(int a, double b, std::deque<uint16_t> c);`),
        funcs: parseFunction(`void r4tp1711(int a, double b, std::deque<uint16_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1711 生成结果为空');
      const expectSnippet0 = 'export function r4tp1711(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1711 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1711 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1711 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1712
  * @tc.name : h2dts_gen_1712
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1712', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1712(int a, double b, std::deque<uint32_t> c);`),
        unions: parseUnion(`void r4tp1712(int a, double b, std::deque<uint32_t> c);`),
        structs: parseStruct(`void r4tp1712(int a, double b, std::deque<uint32_t> c);`),
        classes: parseClass(`void r4tp1712(int a, double b, std::deque<uint32_t> c);`),
        funcs: parseFunction(`void r4tp1712(int a, double b, std::deque<uint32_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1712 生成结果为空');
      const expectSnippet0 = 'export function r4tp1712(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1712 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1712 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1712 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1713
  * @tc.name : h2dts_gen_1713
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1713', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1713(int a, double b, std::deque<uint64_t> c);`),
        unions: parseUnion(`void r4tp1713(int a, double b, std::deque<uint64_t> c);`),
        structs: parseStruct(`void r4tp1713(int a, double b, std::deque<uint64_t> c);`),
        classes: parseClass(`void r4tp1713(int a, double b, std::deque<uint64_t> c);`),
        funcs: parseFunction(`void r4tp1713(int a, double b, std::deque<uint64_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1713 生成结果为空');
      const expectSnippet0 = 'export function r4tp1713(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1713 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1713 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1713 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1714
  * @tc.name : h2dts_gen_1714
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1714', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1714(int a, double b, std::deque<int8_t> c);`),
        unions: parseUnion(`void r4tp1714(int a, double b, std::deque<int8_t> c);`),
        structs: parseStruct(`void r4tp1714(int a, double b, std::deque<int8_t> c);`),
        classes: parseClass(`void r4tp1714(int a, double b, std::deque<int8_t> c);`),
        funcs: parseFunction(`void r4tp1714(int a, double b, std::deque<int8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1714 生成结果为空');
      const expectSnippet0 = 'export function r4tp1714(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1714 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1714 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1714 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1715
  * @tc.name : h2dts_gen_1715
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1715', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1715(int a, double b, std::deque<int16_t> c);`),
        unions: parseUnion(`void r4tp1715(int a, double b, std::deque<int16_t> c);`),
        structs: parseStruct(`void r4tp1715(int a, double b, std::deque<int16_t> c);`),
        classes: parseClass(`void r4tp1715(int a, double b, std::deque<int16_t> c);`),
        funcs: parseFunction(`void r4tp1715(int a, double b, std::deque<int16_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1715 生成结果为空');
      const expectSnippet0 = 'export function r4tp1715(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1715 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1715 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1715 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1716
  * @tc.name : h2dts_gen_1716
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1716', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1716(int a, double b, std::deque<int32_t> c);`),
        unions: parseUnion(`void r4tp1716(int a, double b, std::deque<int32_t> c);`),
        structs: parseStruct(`void r4tp1716(int a, double b, std::deque<int32_t> c);`),
        classes: parseClass(`void r4tp1716(int a, double b, std::deque<int32_t> c);`),
        funcs: parseFunction(`void r4tp1716(int a, double b, std::deque<int32_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1716 生成结果为空');
      const expectSnippet0 = 'export function r4tp1716(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1716 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1716 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1716 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1717
  * @tc.name : h2dts_gen_1717
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1717', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1717(int a, double b, std::deque<int64_t> c);`),
        unions: parseUnion(`void r4tp1717(int a, double b, std::deque<int64_t> c);`),
        structs: parseStruct(`void r4tp1717(int a, double b, std::deque<int64_t> c);`),
        classes: parseClass(`void r4tp1717(int a, double b, std::deque<int64_t> c);`),
        funcs: parseFunction(`void r4tp1717(int a, double b, std::deque<int64_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1717 生成结果为空');
      const expectSnippet0 = 'export function r4tp1717(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1717 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1717 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1717 执行异常: ${String(err)}`);
    }
  });
});
