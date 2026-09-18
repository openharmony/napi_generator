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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part53.');

  /**
  * @tc.number : h2dts_gen_1718
  * @tc.name : h2dts_gen_1718
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1718', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1718(int a, double b, std::deque<unsigned> c);`),
        unions: parseUnion(`void r4tp1718(int a, double b, std::deque<unsigned> c);`),
        structs: parseStruct(`void r4tp1718(int a, double b, std::deque<unsigned> c);`),
        classes: parseClass(`void r4tp1718(int a, double b, std::deque<unsigned> c);`),
        funcs: parseFunction(`void r4tp1718(int a, double b, std::deque<unsigned> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1718 生成结果为空');
      const expectSnippet0 = 'export function r4tp1718(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1718 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1718 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1718 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1719
  * @tc.name : h2dts_gen_1719
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1719', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1719(int a, double b, std::deque<bool> c);`),
        unions: parseUnion(`void r4tp1719(int a, double b, std::deque<bool> c);`),
        structs: parseStruct(`void r4tp1719(int a, double b, std::deque<bool> c);`),
        classes: parseClass(`void r4tp1719(int a, double b, std::deque<bool> c);`),
        funcs: parseFunction(`void r4tp1719(int a, double b, std::deque<bool> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1719 生成结果为空');
      const expectSnippet0 = 'export function r4tp1719(a: number, b: number, c: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1719 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1719 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1719 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1720
  * @tc.name : h2dts_gen_1720
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1720', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1720(int a, double b, std::deque<char> c);`),
        unions: parseUnion(`void r4tp1720(int a, double b, std::deque<char> c);`),
        structs: parseStruct(`void r4tp1720(int a, double b, std::deque<char> c);`),
        classes: parseClass(`void r4tp1720(int a, double b, std::deque<char> c);`),
        funcs: parseFunction(`void r4tp1720(int a, double b, std::deque<char> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1720 生成结果为空');
      const expectSnippet0 = 'export function r4tp1720(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1720 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1720 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1720 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1721
  * @tc.name : h2dts_gen_1721
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1721', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1721(int a, double b, std::deque<wchar_t> c);`),
        unions: parseUnion(`void r4tp1721(int a, double b, std::deque<wchar_t> c);`),
        structs: parseStruct(`void r4tp1721(int a, double b, std::deque<wchar_t> c);`),
        classes: parseClass(`void r4tp1721(int a, double b, std::deque<wchar_t> c);`),
        funcs: parseFunction(`void r4tp1721(int a, double b, std::deque<wchar_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1721 生成结果为空');
      const expectSnippet0 = 'export function r4tp1721(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1721 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1721 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1721 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1722
  * @tc.name : h2dts_gen_1722
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1722', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1722(int a, double b, std::deque<char8_t> c);`),
        unions: parseUnion(`void r4tp1722(int a, double b, std::deque<char8_t> c);`),
        structs: parseStruct(`void r4tp1722(int a, double b, std::deque<char8_t> c);`),
        classes: parseClass(`void r4tp1722(int a, double b, std::deque<char8_t> c);`),
        funcs: parseFunction(`void r4tp1722(int a, double b, std::deque<char8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1722 生成结果为空');
      const expectSnippet0 = 'export function r4tp1722(a: number, b: number, c: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1722 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1722 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1722 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1723
  * @tc.name : h2dts_gen_1723
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1723', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1723(int a, float b, short c);`),
        unions: parseUnion(`void r4tp1723(int a, float b, short c);`),
        structs: parseStruct(`void r4tp1723(int a, float b, short c);`),
        classes: parseClass(`void r4tp1723(int a, float b, short c);`),
        funcs: parseFunction(`void r4tp1723(int a, float b, short c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1723 生成结果为空');
      const expectSnippet0 = 'export function r4tp1723(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1723 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1723 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1723 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1724
  * @tc.name : h2dts_gen_1724
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1724', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1724(int a, float b, long c);`),
        unions: parseUnion(`void r4tp1724(int a, float b, long c);`),
        structs: parseStruct(`void r4tp1724(int a, float b, long c);`),
        classes: parseClass(`void r4tp1724(int a, float b, long c);`),
        funcs: parseFunction(`void r4tp1724(int a, float b, long c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1724 生成结果为空');
      const expectSnippet0 = 'export function r4tp1724(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1724 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1724 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1724 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1725
  * @tc.name : h2dts_gen_1725
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1725', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1725(int a, float b, uint8_t c);`),
        unions: parseUnion(`void r4tp1725(int a, float b, uint8_t c);`),
        structs: parseStruct(`void r4tp1725(int a, float b, uint8_t c);`),
        classes: parseClass(`void r4tp1725(int a, float b, uint8_t c);`),
        funcs: parseFunction(`void r4tp1725(int a, float b, uint8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1725 生成结果为空');
      const expectSnippet0 = 'export function r4tp1725(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1725 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1725 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1725 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1726
  * @tc.name : h2dts_gen_1726
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1726', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1726(int a, float b, uint16_t c);`),
        unions: parseUnion(`void r4tp1726(int a, float b, uint16_t c);`),
        structs: parseStruct(`void r4tp1726(int a, float b, uint16_t c);`),
        classes: parseClass(`void r4tp1726(int a, float b, uint16_t c);`),
        funcs: parseFunction(`void r4tp1726(int a, float b, uint16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1726 生成结果为空');
      const expectSnippet0 = 'export function r4tp1726(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1726 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1726 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1726 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1727
  * @tc.name : h2dts_gen_1727
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1727', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1727(int a, float b, uint32_t c);`),
        unions: parseUnion(`void r4tp1727(int a, float b, uint32_t c);`),
        structs: parseStruct(`void r4tp1727(int a, float b, uint32_t c);`),
        classes: parseClass(`void r4tp1727(int a, float b, uint32_t c);`),
        funcs: parseFunction(`void r4tp1727(int a, float b, uint32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1727 生成结果为空');
      const expectSnippet0 = 'export function r4tp1727(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1727 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1727 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1727 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1728
  * @tc.name : h2dts_gen_1728
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1728', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1728(int a, float b, uint64_t c);`),
        unions: parseUnion(`void r4tp1728(int a, float b, uint64_t c);`),
        structs: parseStruct(`void r4tp1728(int a, float b, uint64_t c);`),
        classes: parseClass(`void r4tp1728(int a, float b, uint64_t c);`),
        funcs: parseFunction(`void r4tp1728(int a, float b, uint64_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1728 生成结果为空');
      const expectSnippet0 = 'export function r4tp1728(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1728 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1728 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1728 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1729
  * @tc.name : h2dts_gen_1729
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1729', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1729(int a, float b, int8_t c);`),
        unions: parseUnion(`void r4tp1729(int a, float b, int8_t c);`),
        structs: parseStruct(`void r4tp1729(int a, float b, int8_t c);`),
        classes: parseClass(`void r4tp1729(int a, float b, int8_t c);`),
        funcs: parseFunction(`void r4tp1729(int a, float b, int8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1729 生成结果为空');
      const expectSnippet0 = 'export function r4tp1729(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1729 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1729 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1729 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1730
  * @tc.name : h2dts_gen_1730
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1730', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1730(int a, float b, int16_t c);`),
        unions: parseUnion(`void r4tp1730(int a, float b, int16_t c);`),
        structs: parseStruct(`void r4tp1730(int a, float b, int16_t c);`),
        classes: parseClass(`void r4tp1730(int a, float b, int16_t c);`),
        funcs: parseFunction(`void r4tp1730(int a, float b, int16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1730 生成结果为空');
      const expectSnippet0 = 'export function r4tp1730(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1730 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1730 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1730 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1731
  * @tc.name : h2dts_gen_1731
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1731', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1731(int a, float b, int32_t c);`),
        unions: parseUnion(`void r4tp1731(int a, float b, int32_t c);`),
        structs: parseStruct(`void r4tp1731(int a, float b, int32_t c);`),
        classes: parseClass(`void r4tp1731(int a, float b, int32_t c);`),
        funcs: parseFunction(`void r4tp1731(int a, float b, int32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1731 生成结果为空');
      const expectSnippet0 = 'export function r4tp1731(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1731 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1731 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1731 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1732
  * @tc.name : h2dts_gen_1732
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1732', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1732(int a, float b, int64_t c);`),
        unions: parseUnion(`void r4tp1732(int a, float b, int64_t c);`),
        structs: parseStruct(`void r4tp1732(int a, float b, int64_t c);`),
        classes: parseClass(`void r4tp1732(int a, float b, int64_t c);`),
        funcs: parseFunction(`void r4tp1732(int a, float b, int64_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1732 生成结果为空');
      const expectSnippet0 = 'export function r4tp1732(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1732 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1732 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1732 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1733
  * @tc.name : h2dts_gen_1733
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1733', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1733(int a, float b, unsigned c);`),
        unions: parseUnion(`void r4tp1733(int a, float b, unsigned c);`),
        structs: parseStruct(`void r4tp1733(int a, float b, unsigned c);`),
        classes: parseClass(`void r4tp1733(int a, float b, unsigned c);`),
        funcs: parseFunction(`void r4tp1733(int a, float b, unsigned c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1733 生成结果为空');
      const expectSnippet0 = 'export function r4tp1733(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1733 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1733 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1733 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1734
  * @tc.name : h2dts_gen_1734
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1734', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1734(int a, float b, bool c);`),
        unions: parseUnion(`void r4tp1734(int a, float b, bool c);`),
        structs: parseStruct(`void r4tp1734(int a, float b, bool c);`),
        classes: parseClass(`void r4tp1734(int a, float b, bool c);`),
        funcs: parseFunction(`void r4tp1734(int a, float b, bool c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1734 生成结果为空');
      const expectSnippet0 = 'export function r4tp1734(a: number, b: number, c: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1734 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1734 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1734 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1735
  * @tc.name : h2dts_gen_1735
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1735', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1735(int a, float b, char c);`),
        unions: parseUnion(`void r4tp1735(int a, float b, char c);`),
        structs: parseStruct(`void r4tp1735(int a, float b, char c);`),
        classes: parseClass(`void r4tp1735(int a, float b, char c);`),
        funcs: parseFunction(`void r4tp1735(int a, float b, char c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1735 生成结果为空');
      const expectSnippet0 = 'export function r4tp1735(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1735 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1735 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1735 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1736
  * @tc.name : h2dts_gen_1736
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1736', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1736(int a, float b, wchar_t c);`),
        unions: parseUnion(`void r4tp1736(int a, float b, wchar_t c);`),
        structs: parseStruct(`void r4tp1736(int a, float b, wchar_t c);`),
        classes: parseClass(`void r4tp1736(int a, float b, wchar_t c);`),
        funcs: parseFunction(`void r4tp1736(int a, float b, wchar_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1736 生成结果为空');
      const expectSnippet0 = 'export function r4tp1736(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1736 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1736 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1736 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1737
  * @tc.name : h2dts_gen_1737
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1737', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1737(int a, float b, char8_t c);`),
        unions: parseUnion(`void r4tp1737(int a, float b, char8_t c);`),
        structs: parseStruct(`void r4tp1737(int a, float b, char8_t c);`),
        classes: parseClass(`void r4tp1737(int a, float b, char8_t c);`),
        funcs: parseFunction(`void r4tp1737(int a, float b, char8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1737 生成结果为空');
      const expectSnippet0 = 'export function r4tp1737(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1737 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1737 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1737 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1738
  * @tc.name : h2dts_gen_1738
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1738', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1738(int a, float b, char16_t c);`),
        unions: parseUnion(`void r4tp1738(int a, float b, char16_t c);`),
        structs: parseStruct(`void r4tp1738(int a, float b, char16_t c);`),
        classes: parseClass(`void r4tp1738(int a, float b, char16_t c);`),
        funcs: parseFunction(`void r4tp1738(int a, float b, char16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1738 生成结果为空');
      const expectSnippet0 = 'export function r4tp1738(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1738 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1738 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1738 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1739
  * @tc.name : h2dts_gen_1739
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1739', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1739(int a, float b, char32_t c);`),
        unions: parseUnion(`void r4tp1739(int a, float b, char32_t c);`),
        structs: parseStruct(`void r4tp1739(int a, float b, char32_t c);`),
        classes: parseClass(`void r4tp1739(int a, float b, char32_t c);`),
        funcs: parseFunction(`void r4tp1739(int a, float b, char32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1739 生成结果为空');
      const expectSnippet0 = 'export function r4tp1739(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1739 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1739 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1739 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1740
  * @tc.name : h2dts_gen_1740
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1740', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1740(int a, float b, std::deque<int> c);`),
        unions: parseUnion(`void r4tp1740(int a, float b, std::deque<int> c);`),
        structs: parseStruct(`void r4tp1740(int a, float b, std::deque<int> c);`),
        classes: parseClass(`void r4tp1740(int a, float b, std::deque<int> c);`),
        funcs: parseFunction(`void r4tp1740(int a, float b, std::deque<int> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1740 生成结果为空');
      const expectSnippet0 = 'export function r4tp1740(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1740 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1740 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1740 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1741
  * @tc.name : h2dts_gen_1741
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1741', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1741(int a, float b, std::deque<size_t> c);`),
        unions: parseUnion(`void r4tp1741(int a, float b, std::deque<size_t> c);`),
        structs: parseStruct(`void r4tp1741(int a, float b, std::deque<size_t> c);`),
        classes: parseClass(`void r4tp1741(int a, float b, std::deque<size_t> c);`),
        funcs: parseFunction(`void r4tp1741(int a, float b, std::deque<size_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1741 生成结果为空');
      const expectSnippet0 = 'export function r4tp1741(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1741 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1741 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1741 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1742
  * @tc.name : h2dts_gen_1742
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1742', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1742(int a, float b, std::deque<double> c);`),
        unions: parseUnion(`void r4tp1742(int a, float b, std::deque<double> c);`),
        structs: parseStruct(`void r4tp1742(int a, float b, std::deque<double> c);`),
        classes: parseClass(`void r4tp1742(int a, float b, std::deque<double> c);`),
        funcs: parseFunction(`void r4tp1742(int a, float b, std::deque<double> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1742 生成结果为空');
      const expectSnippet0 = 'export function r4tp1742(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1742 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1742 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1742 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1743
  * @tc.name : h2dts_gen_1743
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1743', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1743(int a, float b, std::deque<float> c);`),
        unions: parseUnion(`void r4tp1743(int a, float b, std::deque<float> c);`),
        structs: parseStruct(`void r4tp1743(int a, float b, std::deque<float> c);`),
        classes: parseClass(`void r4tp1743(int a, float b, std::deque<float> c);`),
        funcs: parseFunction(`void r4tp1743(int a, float b, std::deque<float> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1743 生成结果为空');
      const expectSnippet0 = 'export function r4tp1743(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1743 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1743 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1743 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1744
  * @tc.name : h2dts_gen_1744
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1744', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1744(int a, float b, std::deque<long> c);`),
        unions: parseUnion(`void r4tp1744(int a, float b, std::deque<long> c);`),
        structs: parseStruct(`void r4tp1744(int a, float b, std::deque<long> c);`),
        classes: parseClass(`void r4tp1744(int a, float b, std::deque<long> c);`),
        funcs: parseFunction(`void r4tp1744(int a, float b, std::deque<long> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1744 生成结果为空');
      const expectSnippet0 = 'export function r4tp1744(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1744 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1744 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1744 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1745
  * @tc.name : h2dts_gen_1745
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1745', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1745(int a, float b, std::deque<short> c);`),
        unions: parseUnion(`void r4tp1745(int a, float b, std::deque<short> c);`),
        structs: parseStruct(`void r4tp1745(int a, float b, std::deque<short> c);`),
        classes: parseClass(`void r4tp1745(int a, float b, std::deque<short> c);`),
        funcs: parseFunction(`void r4tp1745(int a, float b, std::deque<short> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1745 生成结果为空');
      const expectSnippet0 = 'export function r4tp1745(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1745 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1745 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1745 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1746
  * @tc.name : h2dts_gen_1746
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1746', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1746(int a, float b, std::deque<uint8_t> c);`),
        unions: parseUnion(`void r4tp1746(int a, float b, std::deque<uint8_t> c);`),
        structs: parseStruct(`void r4tp1746(int a, float b, std::deque<uint8_t> c);`),
        classes: parseClass(`void r4tp1746(int a, float b, std::deque<uint8_t> c);`),
        funcs: parseFunction(`void r4tp1746(int a, float b, std::deque<uint8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1746 生成结果为空');
      const expectSnippet0 = 'export function r4tp1746(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1746 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1746 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1746 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1747
  * @tc.name : h2dts_gen_1747
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1747', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1747(int a, float b, std::deque<uint16_t> c);`),
        unions: parseUnion(`void r4tp1747(int a, float b, std::deque<uint16_t> c);`),
        structs: parseStruct(`void r4tp1747(int a, float b, std::deque<uint16_t> c);`),
        classes: parseClass(`void r4tp1747(int a, float b, std::deque<uint16_t> c);`),
        funcs: parseFunction(`void r4tp1747(int a, float b, std::deque<uint16_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1747 生成结果为空');
      const expectSnippet0 = 'export function r4tp1747(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1747 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1747 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1747 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1748
  * @tc.name : h2dts_gen_1748
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1748', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1748(int a, float b, std::deque<uint32_t> c);`),
        unions: parseUnion(`void r4tp1748(int a, float b, std::deque<uint32_t> c);`),
        structs: parseStruct(`void r4tp1748(int a, float b, std::deque<uint32_t> c);`),
        classes: parseClass(`void r4tp1748(int a, float b, std::deque<uint32_t> c);`),
        funcs: parseFunction(`void r4tp1748(int a, float b, std::deque<uint32_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1748 生成结果为空');
      const expectSnippet0 = 'export function r4tp1748(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1748 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1748 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1748 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1749
  * @tc.name : h2dts_gen_1749
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1749', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1749(int a, float b, std::deque<uint64_t> c);`),
        unions: parseUnion(`void r4tp1749(int a, float b, std::deque<uint64_t> c);`),
        structs: parseStruct(`void r4tp1749(int a, float b, std::deque<uint64_t> c);`),
        classes: parseClass(`void r4tp1749(int a, float b, std::deque<uint64_t> c);`),
        funcs: parseFunction(`void r4tp1749(int a, float b, std::deque<uint64_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1749 生成结果为空');
      const expectSnippet0 = 'export function r4tp1749(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1749 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1749 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1749 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1750
  * @tc.name : h2dts_gen_1750
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1750', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1750(int a, float b, std::deque<int8_t> c);`),
        unions: parseUnion(`void r4tp1750(int a, float b, std::deque<int8_t> c);`),
        structs: parseStruct(`void r4tp1750(int a, float b, std::deque<int8_t> c);`),
        classes: parseClass(`void r4tp1750(int a, float b, std::deque<int8_t> c);`),
        funcs: parseFunction(`void r4tp1750(int a, float b, std::deque<int8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1750 生成结果为空');
      const expectSnippet0 = 'export function r4tp1750(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1750 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1750 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1750 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1751
  * @tc.name : h2dts_gen_1751
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1751', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1751(int a, float b, std::deque<int16_t> c);`),
        unions: parseUnion(`void r4tp1751(int a, float b, std::deque<int16_t> c);`),
        structs: parseStruct(`void r4tp1751(int a, float b, std::deque<int16_t> c);`),
        classes: parseClass(`void r4tp1751(int a, float b, std::deque<int16_t> c);`),
        funcs: parseFunction(`void r4tp1751(int a, float b, std::deque<int16_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1751 生成结果为空');
      const expectSnippet0 = 'export function r4tp1751(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1751 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1751 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1751 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1752
  * @tc.name : h2dts_gen_1752
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1752', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1752(int a, float b, std::deque<int32_t> c);`),
        unions: parseUnion(`void r4tp1752(int a, float b, std::deque<int32_t> c);`),
        structs: parseStruct(`void r4tp1752(int a, float b, std::deque<int32_t> c);`),
        classes: parseClass(`void r4tp1752(int a, float b, std::deque<int32_t> c);`),
        funcs: parseFunction(`void r4tp1752(int a, float b, std::deque<int32_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1752 生成结果为空');
      const expectSnippet0 = 'export function r4tp1752(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1752 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1752 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1752 执行异常: ${String(err)}`);
    }
  });
});
