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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part55.');

  /**
  * @tc.number : h2dts_gen_1788
  * @tc.name : h2dts_gen_1788
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1788', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1788(int a, short b, std::deque<int64_t> c);`),
        unions: parseUnion(`void r4tp1788(int a, short b, std::deque<int64_t> c);`),
        structs: parseStruct(`void r4tp1788(int a, short b, std::deque<int64_t> c);`),
        classes: parseClass(`void r4tp1788(int a, short b, std::deque<int64_t> c);`),
        funcs: parseFunction(`void r4tp1788(int a, short b, std::deque<int64_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1788 生成结果为空');
      const expectSnippet0 = 'export function r4tp1788(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1788 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1788 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1788 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1789
  * @tc.name : h2dts_gen_1789
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1789', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1789(int a, short b, std::deque<unsigned> c);`),
        unions: parseUnion(`void r4tp1789(int a, short b, std::deque<unsigned> c);`),
        structs: parseStruct(`void r4tp1789(int a, short b, std::deque<unsigned> c);`),
        classes: parseClass(`void r4tp1789(int a, short b, std::deque<unsigned> c);`),
        funcs: parseFunction(`void r4tp1789(int a, short b, std::deque<unsigned> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1789 生成结果为空');
      const expectSnippet0 = 'export function r4tp1789(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1789 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1789 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1789 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1790
  * @tc.name : h2dts_gen_1790
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1790', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1790(int a, short b, std::deque<bool> c);`),
        unions: parseUnion(`void r4tp1790(int a, short b, std::deque<bool> c);`),
        structs: parseStruct(`void r4tp1790(int a, short b, std::deque<bool> c);`),
        classes: parseClass(`void r4tp1790(int a, short b, std::deque<bool> c);`),
        funcs: parseFunction(`void r4tp1790(int a, short b, std::deque<bool> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1790 生成结果为空');
      const expectSnippet0 = 'export function r4tp1790(a: number, b: number, c: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1790 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1790 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1790 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1791
  * @tc.name : h2dts_gen_1791
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1791', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1791(int a, short b, std::deque<char> c);`),
        unions: parseUnion(`void r4tp1791(int a, short b, std::deque<char> c);`),
        structs: parseStruct(`void r4tp1791(int a, short b, std::deque<char> c);`),
        classes: parseClass(`void r4tp1791(int a, short b, std::deque<char> c);`),
        funcs: parseFunction(`void r4tp1791(int a, short b, std::deque<char> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1791 生成结果为空');
      const expectSnippet0 = 'export function r4tp1791(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1791 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1791 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1791 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1792
  * @tc.name : h2dts_gen_1792
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1792', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1792(int a, short b, std::deque<wchar_t> c);`),
        unions: parseUnion(`void r4tp1792(int a, short b, std::deque<wchar_t> c);`),
        structs: parseStruct(`void r4tp1792(int a, short b, std::deque<wchar_t> c);`),
        classes: parseClass(`void r4tp1792(int a, short b, std::deque<wchar_t> c);`),
        funcs: parseFunction(`void r4tp1792(int a, short b, std::deque<wchar_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1792 生成结果为空');
      const expectSnippet0 = 'export function r4tp1792(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1792 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1792 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1792 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1793
  * @tc.name : h2dts_gen_1793
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1793', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1793(int a, short b, std::deque<char8_t> c);`),
        unions: parseUnion(`void r4tp1793(int a, short b, std::deque<char8_t> c);`),
        structs: parseStruct(`void r4tp1793(int a, short b, std::deque<char8_t> c);`),
        classes: parseClass(`void r4tp1793(int a, short b, std::deque<char8_t> c);`),
        funcs: parseFunction(`void r4tp1793(int a, short b, std::deque<char8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1793 生成结果为空');
      const expectSnippet0 = 'export function r4tp1793(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1793 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1793 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1793 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1794
  * @tc.name : h2dts_gen_1794
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1794', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1794(int a, long b, uint8_t c);`),
        unions: parseUnion(`void r4tp1794(int a, long b, uint8_t c);`),
        structs: parseStruct(`void r4tp1794(int a, long b, uint8_t c);`),
        classes: parseClass(`void r4tp1794(int a, long b, uint8_t c);`),
        funcs: parseFunction(`void r4tp1794(int a, long b, uint8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1794 生成结果为空');
      const expectSnippet0 = 'export function r4tp1794(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1794 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1794 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1794 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1795
  * @tc.name : h2dts_gen_1795
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1795', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1795(int a, long b, uint16_t c);`),
        unions: parseUnion(`void r4tp1795(int a, long b, uint16_t c);`),
        structs: parseStruct(`void r4tp1795(int a, long b, uint16_t c);`),
        classes: parseClass(`void r4tp1795(int a, long b, uint16_t c);`),
        funcs: parseFunction(`void r4tp1795(int a, long b, uint16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1795 生成结果为空');
      const expectSnippet0 = 'export function r4tp1795(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1795 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1795 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1795 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1796
  * @tc.name : h2dts_gen_1796
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1796', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1796(int a, long b, uint32_t c);`),
        unions: parseUnion(`void r4tp1796(int a, long b, uint32_t c);`),
        structs: parseStruct(`void r4tp1796(int a, long b, uint32_t c);`),
        classes: parseClass(`void r4tp1796(int a, long b, uint32_t c);`),
        funcs: parseFunction(`void r4tp1796(int a, long b, uint32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1796 生成结果为空');
      const expectSnippet0 = 'export function r4tp1796(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1796 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1796 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1796 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1797
  * @tc.name : h2dts_gen_1797
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1797', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1797(int a, long b, uint64_t c);`),
        unions: parseUnion(`void r4tp1797(int a, long b, uint64_t c);`),
        structs: parseStruct(`void r4tp1797(int a, long b, uint64_t c);`),
        classes: parseClass(`void r4tp1797(int a, long b, uint64_t c);`),
        funcs: parseFunction(`void r4tp1797(int a, long b, uint64_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1797 生成结果为空');
      const expectSnippet0 = 'export function r4tp1797(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1797 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1797 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1797 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1798
  * @tc.name : h2dts_gen_1798
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1798', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1798 { int fieldA; size_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1798 { int fieldA; size_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1798 { int fieldA; size_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1798 { int fieldA; size_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1798 { int fieldA; size_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1798 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1798 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1798 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1798 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1798 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1798 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1799
  * @tc.name : h2dts_gen_1799
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1799', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1799 { int fieldA; double fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1799 { int fieldA; double fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1799 { int fieldA; double fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1799 { int fieldA; double fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1799 { int fieldA; double fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1799 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1799 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1799 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1799 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1799 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1799 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1800
  * @tc.name : h2dts_gen_1800
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1800', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1800 { int fieldA; float fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1800 { int fieldA; float fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1800 { int fieldA; float fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1800 { int fieldA; float fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1800 { int fieldA; float fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1800 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1800 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1800 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1800 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1800 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1800 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1801
  * @tc.name : h2dts_gen_1801
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`short` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1801', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1801 { int fieldA; short fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1801 { int fieldA; short fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1801 { int fieldA; short fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1801 { int fieldA; short fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1801 { int fieldA; short fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1801 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1801 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1801 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1801 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1801 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1801 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1802
  * @tc.name : h2dts_gen_1802
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1802', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1802 { int fieldA; long fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1802 { int fieldA; long fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1802 { int fieldA; long fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1802 { int fieldA; long fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1802 { int fieldA; long fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1802 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1802 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1802 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1802 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1802 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1802 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1803
  * @tc.name : h2dts_gen_1803
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`uint8_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1803', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1803 { int fieldA; uint8_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1803 { int fieldA; uint8_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1803 { int fieldA; uint8_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1803 { int fieldA; uint8_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1803 { int fieldA; uint8_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1803 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1803 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1803 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1803 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1803 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1803 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1804
  * @tc.name : h2dts_gen_1804
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`uint16_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1804', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1804 { int fieldA; uint16_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1804 { int fieldA; uint16_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1804 { int fieldA; uint16_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1804 { int fieldA; uint16_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1804 { int fieldA; uint16_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1804 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1804 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1804 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1804 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1804 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1804 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1805
  * @tc.name : h2dts_gen_1805
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`uint32_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1805', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1805 { int fieldA; uint32_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1805 { int fieldA; uint32_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1805 { int fieldA; uint32_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1805 { int fieldA; uint32_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1805 { int fieldA; uint32_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1805 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1805 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1805 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1805 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1805 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1805 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1806
  * @tc.name : h2dts_gen_1806
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`uint64_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1806', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1806 { int fieldA; uint64_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1806 { int fieldA; uint64_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1806 { int fieldA; uint64_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1806 { int fieldA; uint64_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1806 { int fieldA; uint64_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1806 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1806 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1806 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1806 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1806 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1806 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1807
  * @tc.name : h2dts_gen_1807
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`int8_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1807', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1807 { int fieldA; int8_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1807 { int fieldA; int8_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1807 { int fieldA; int8_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1807 { int fieldA; int8_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1807 { int fieldA; int8_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1807 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1807 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1807 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1807 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1807 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1807 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1808
  * @tc.name : h2dts_gen_1808
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`int16_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1808', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1808 { int fieldA; int16_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1808 { int fieldA; int16_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1808 { int fieldA; int16_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1808 { int fieldA; int16_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1808 { int fieldA; int16_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1808 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1808 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1808 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1808 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1808 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1808 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1809
  * @tc.name : h2dts_gen_1809
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`int32_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1809', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1809 { int fieldA; int32_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1809 { int fieldA; int32_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1809 { int fieldA; int32_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1809 { int fieldA; int32_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1809 { int fieldA; int32_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1809 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1809 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1809 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1809 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1809 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1809 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1810
  * @tc.name : h2dts_gen_1810
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`int64_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1810', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1810 { int fieldA; int64_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1810 { int fieldA; int64_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1810 { int fieldA; int64_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1810 { int fieldA; int64_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1810 { int fieldA; int64_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1810 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1810 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1810 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1810 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1810 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1810 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1811
  * @tc.name : h2dts_gen_1811
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`unsigned` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1811', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1811 { int fieldA; unsigned fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1811 { int fieldA; unsigned fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1811 { int fieldA; unsigned fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1811 { int fieldA; unsigned fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1811 { int fieldA; unsigned fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1811 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1811 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1811 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1811 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1811 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1811 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1812
  * @tc.name : h2dts_gen_1812
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1812', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1812 { int fieldA; bool fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1812 { int fieldA; bool fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1812 { int fieldA; bool fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1812 { int fieldA; bool fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1812 { int fieldA; bool fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1812 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1812 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1812 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1812 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1812 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1812 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1812 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1813
  * @tc.name : h2dts_gen_1813
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`char` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1813', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1813 { int fieldA; char fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1813 { int fieldA; char fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1813 { int fieldA; char fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1813 { int fieldA; char fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1813 { int fieldA; char fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1813 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1813 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1813 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1813 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1813 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1813 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1813 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1814
  * @tc.name : h2dts_gen_1814
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`wchar_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1814', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1814 { int fieldA; wchar_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1814 { int fieldA; wchar_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1814 { int fieldA; wchar_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1814 { int fieldA; wchar_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1814 { int fieldA; wchar_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1814 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1814 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1814 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1814 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1814 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1814 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1814 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1815
  * @tc.name : h2dts_gen_1815
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`char8_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1815', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1815 { int fieldA; char8_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1815 { int fieldA; char8_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1815 { int fieldA; char8_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1815 { int fieldA; char8_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1815 { int fieldA; char8_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1815 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1815 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1815 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1815 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1815 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1815 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1815 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1816
  * @tc.name : h2dts_gen_1816
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`char16_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1816', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1816 { int fieldA; char16_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1816 { int fieldA; char16_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1816 { int fieldA; char16_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1816 { int fieldA; char16_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1816 { int fieldA; char16_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1816 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1816 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1816 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1816 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1816 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1816 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1816 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1817
  * @tc.name : h2dts_gen_1817
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`char32_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1817', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1817 { int fieldA; char32_t fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1817 { int fieldA; char32_t fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1817 { int fieldA; char32_t fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1817 { int fieldA; char32_t fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1817 { int fieldA; char32_t fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1817 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1817 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1817 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1817 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1817 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1817 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1817 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1818
  * @tc.name : h2dts_gen_1818
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::string::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1818', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1818 { int fieldA; std::string::iterator fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1818 { int fieldA; std::string::iterator fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1818 { int fieldA; std::string::iterator fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1818 { int fieldA; std::string::iterator fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1818 { int fieldA; std::string::iterator fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1818 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1818 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1818 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1818 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1818 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1818 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1818 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1819
  * @tc.name : h2dts_gen_1819
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1819', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1819 { int fieldA; std::vector<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1819 { int fieldA; std::vector<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1819 { int fieldA; std::vector<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1819 { int fieldA; std::vector<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1819 { int fieldA; std::vector<int> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1819 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1819 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1819 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1819 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1819 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1819 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1820
  * @tc.name : h2dts_gen_1820
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1820', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1820 { int fieldA; std::vector<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1820 { int fieldA; std::vector<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1820 { int fieldA; std::vector<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1820 { int fieldA; std::vector<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1820 { int fieldA; std::vector<size_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1820 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1820 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1820 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1820 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1820 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1820 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1821
  * @tc.name : h2dts_gen_1821
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1821', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1821 { int fieldA; std::vector<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1821 { int fieldA; std::vector<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1821 { int fieldA; std::vector<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1821 { int fieldA; std::vector<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1821 { int fieldA; std::vector<double> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1821 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1821 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1821 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1821 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1821 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1821 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1822
  * @tc.name : h2dts_gen_1822
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1822', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1822 { int fieldA; std::vector<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1822 { int fieldA; std::vector<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1822 { int fieldA; std::vector<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1822 { int fieldA; std::vector<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1822 { int fieldA; std::vector<float> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1822 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1822 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1822 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1822 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1822 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1822 执行异常: ${String(err)}`);
    }
  });
});
