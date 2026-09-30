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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part48.');

  /**
  * @tc.number : h2dts_gen_1543
  * @tc.name : h2dts_gen_1543
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1543', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1543(int a, std::queue<unsigned> b);`),
        unions: parseUnion(`void r4mp1543(int a, std::queue<unsigned> b);`),
        structs: parseStruct(`void r4mp1543(int a, std::queue<unsigned> b);`),
        classes: parseClass(`void r4mp1543(int a, std::queue<unsigned> b);`),
        funcs: parseFunction(`void r4mp1543(int a, std::queue<unsigned> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1543 生成结果为空');
      const expectSnippet0 = 'export function r4mp1543(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1543 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1543 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1543 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1544
  * @tc.name : h2dts_gen_1544
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1544', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1544(int a, std::queue<bool> b);`),
        unions: parseUnion(`void r4mp1544(int a, std::queue<bool> b);`),
        structs: parseStruct(`void r4mp1544(int a, std::queue<bool> b);`),
        classes: parseClass(`void r4mp1544(int a, std::queue<bool> b);`),
        funcs: parseFunction(`void r4mp1544(int a, std::queue<bool> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1544 生成结果为空');
      const expectSnippet0 = 'export function r4mp1544(a: number, b: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1544 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1544 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1544 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1545
  * @tc.name : h2dts_gen_1545
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1545', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1545(int a, std::queue<char> b);`),
        unions: parseUnion(`void r4mp1545(int a, std::queue<char> b);`),
        structs: parseStruct(`void r4mp1545(int a, std::queue<char> b);`),
        classes: parseClass(`void r4mp1545(int a, std::queue<char> b);`),
        funcs: parseFunction(`void r4mp1545(int a, std::queue<char> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1545 生成结果为空');
      const expectSnippet0 = 'export function r4mp1545(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1545 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1545 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1545 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1546
  * @tc.name : h2dts_gen_1546
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1546', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1546(int a, std::queue<wchar_t> b);`),
        unions: parseUnion(`void r4mp1546(int a, std::queue<wchar_t> b);`),
        structs: parseStruct(`void r4mp1546(int a, std::queue<wchar_t> b);`),
        classes: parseClass(`void r4mp1546(int a, std::queue<wchar_t> b);`),
        funcs: parseFunction(`void r4mp1546(int a, std::queue<wchar_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1546 生成结果为空');
      const expectSnippet0 = 'export function r4mp1546(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1546 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1546 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1546 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1547
  * @tc.name : h2dts_gen_1547
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1547', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1547(int a, std::queue<char8_t> b);`),
        unions: parseUnion(`void r4mp1547(int a, std::queue<char8_t> b);`),
        structs: parseStruct(`void r4mp1547(int a, std::queue<char8_t> b);`),
        classes: parseClass(`void r4mp1547(int a, std::queue<char8_t> b);`),
        funcs: parseFunction(`void r4mp1547(int a, std::queue<char8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1547 生成结果为空');
      const expectSnippet0 = 'export function r4mp1547(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1547 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1547 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1547 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1548
  * @tc.name : h2dts_gen_1548
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1548', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1548(int a, std::queue<char16_t> b);`),
        unions: parseUnion(`void r4mp1548(int a, std::queue<char16_t> b);`),
        structs: parseStruct(`void r4mp1548(int a, std::queue<char16_t> b);`),
        classes: parseClass(`void r4mp1548(int a, std::queue<char16_t> b);`),
        funcs: parseFunction(`void r4mp1548(int a, std::queue<char16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1548 生成结果为空');
      const expectSnippet0 = 'export function r4mp1548(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1548 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1548 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1548 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1549
  * @tc.name : h2dts_gen_1549
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1549', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1549(int a, std::queue<char32_t> b);`),
        unions: parseUnion(`void r4mp1549(int a, std::queue<char32_t> b);`),
        structs: parseStruct(`void r4mp1549(int a, std::queue<char32_t> b);`),
        classes: parseClass(`void r4mp1549(int a, std::queue<char32_t> b);`),
        funcs: parseFunction(`void r4mp1549(int a, std::queue<char32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1549 生成结果为空');
      const expectSnippet0 = 'export function r4mp1549(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1549 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1549 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1549 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1550
  * @tc.name : h2dts_gen_1550
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1550', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1550(int a, std::queue<int>::iterator b);`),
        unions: parseUnion(`void r4mp1550(int a, std::queue<int>::iterator b);`),
        structs: parseStruct(`void r4mp1550(int a, std::queue<int>::iterator b);`),
        classes: parseClass(`void r4mp1550(int a, std::queue<int>::iterator b);`),
        funcs: parseFunction(`void r4mp1550(int a, std::queue<int>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1550 生成结果为空');
      const expectSnippet0 = 'export function r4mp1550(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1550 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1550 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1550 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1551
  * @tc.name : h2dts_gen_1551
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<size_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1551', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1551(int a, std::queue<size_t>::iterator b);`),
        unions: parseUnion(`void r4mp1551(int a, std::queue<size_t>::iterator b);`),
        structs: parseStruct(`void r4mp1551(int a, std::queue<size_t>::iterator b);`),
        classes: parseClass(`void r4mp1551(int a, std::queue<size_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1551(int a, std::queue<size_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1551 生成结果为空');
      const expectSnippet0 = 'export function r4mp1551(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1551 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1551 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1551 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1552
  * @tc.name : h2dts_gen_1552
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<double>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1552', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1552(int a, std::queue<double>::iterator b);`),
        unions: parseUnion(`void r4mp1552(int a, std::queue<double>::iterator b);`),
        structs: parseStruct(`void r4mp1552(int a, std::queue<double>::iterator b);`),
        classes: parseClass(`void r4mp1552(int a, std::queue<double>::iterator b);`),
        funcs: parseFunction(`void r4mp1552(int a, std::queue<double>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1552 生成结果为空');
      const expectSnippet0 = 'export function r4mp1552(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1552 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1552 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1552 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1553
  * @tc.name : h2dts_gen_1553
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<float>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1553', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1553(int a, std::queue<float>::iterator b);`),
        unions: parseUnion(`void r4mp1553(int a, std::queue<float>::iterator b);`),
        structs: parseStruct(`void r4mp1553(int a, std::queue<float>::iterator b);`),
        classes: parseClass(`void r4mp1553(int a, std::queue<float>::iterator b);`),
        funcs: parseFunction(`void r4mp1553(int a, std::queue<float>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1553 生成结果为空');
      const expectSnippet0 = 'export function r4mp1553(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1553 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1553 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1553 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1554
  * @tc.name : h2dts_gen_1554
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<long>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1554', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1554(int a, std::queue<long>::iterator b);`),
        unions: parseUnion(`void r4mp1554(int a, std::queue<long>::iterator b);`),
        structs: parseStruct(`void r4mp1554(int a, std::queue<long>::iterator b);`),
        classes: parseClass(`void r4mp1554(int a, std::queue<long>::iterator b);`),
        funcs: parseFunction(`void r4mp1554(int a, std::queue<long>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1554 生成结果为空');
      const expectSnippet0 = 'export function r4mp1554(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1554 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1554 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1554 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1555
  * @tc.name : h2dts_gen_1555
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<short>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1555', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1555(int a, std::queue<short>::iterator b);`),
        unions: parseUnion(`void r4mp1555(int a, std::queue<short>::iterator b);`),
        structs: parseStruct(`void r4mp1555(int a, std::queue<short>::iterator b);`),
        classes: parseClass(`void r4mp1555(int a, std::queue<short>::iterator b);`),
        funcs: parseFunction(`void r4mp1555(int a, std::queue<short>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1555 生成结果为空');
      const expectSnippet0 = 'export function r4mp1555(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1555 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1555 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1555 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1556
  * @tc.name : h2dts_gen_1556
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<uint8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1556', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1556(int a, std::queue<uint8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1556(int a, std::queue<uint8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1556(int a, std::queue<uint8_t>::iterator b);`),
        classes: parseClass(`void r4mp1556(int a, std::queue<uint8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1556(int a, std::queue<uint8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1556 生成结果为空');
      const expectSnippet0 = 'export function r4mp1556(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1556 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1556 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1556 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1557
  * @tc.name : h2dts_gen_1557
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<uint16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1557', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1557(int a, std::queue<uint16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1557(int a, std::queue<uint16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1557(int a, std::queue<uint16_t>::iterator b);`),
        classes: parseClass(`void r4mp1557(int a, std::queue<uint16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1557(int a, std::queue<uint16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1557 生成结果为空');
      const expectSnippet0 = 'export function r4mp1557(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1557 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1557 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1557 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1558
  * @tc.name : h2dts_gen_1558
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<uint32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1558', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1558(int a, std::queue<uint32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1558(int a, std::queue<uint32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1558(int a, std::queue<uint32_t>::iterator b);`),
        classes: parseClass(`void r4mp1558(int a, std::queue<uint32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1558(int a, std::queue<uint32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1558 生成结果为空');
      const expectSnippet0 = 'export function r4mp1558(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1558 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1558 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1558 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1559
  * @tc.name : h2dts_gen_1559
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<uint64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1559', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1559(int a, std::queue<uint64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1559(int a, std::queue<uint64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1559(int a, std::queue<uint64_t>::iterator b);`),
        classes: parseClass(`void r4mp1559(int a, std::queue<uint64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1559(int a, std::queue<uint64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1559 生成结果为空');
      const expectSnippet0 = 'export function r4mp1559(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1559 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1559 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1559 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1560
  * @tc.name : h2dts_gen_1560
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1560', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1560(int a, std::queue<int8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1560(int a, std::queue<int8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1560(int a, std::queue<int8_t>::iterator b);`),
        classes: parseClass(`void r4mp1560(int a, std::queue<int8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1560(int a, std::queue<int8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1560 生成结果为空');
      const expectSnippet0 = 'export function r4mp1560(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1560 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1560 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1560 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1561
  * @tc.name : h2dts_gen_1561
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1561', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1561(int a, std::queue<int16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1561(int a, std::queue<int16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1561(int a, std::queue<int16_t>::iterator b);`),
        classes: parseClass(`void r4mp1561(int a, std::queue<int16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1561(int a, std::queue<int16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1561 生成结果为空');
      const expectSnippet0 = 'export function r4mp1561(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1561 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1561 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1561 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1562
  * @tc.name : h2dts_gen_1562
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1562', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1562(int a, std::queue<int32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1562(int a, std::queue<int32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1562(int a, std::queue<int32_t>::iterator b);`),
        classes: parseClass(`void r4mp1562(int a, std::queue<int32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1562(int a, std::queue<int32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1562 生成结果为空');
      const expectSnippet0 = 'export function r4mp1562(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1562 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1562 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1562 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1563
  * @tc.name : h2dts_gen_1563
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1563', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1563(int a, std::queue<int64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1563(int a, std::queue<int64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1563(int a, std::queue<int64_t>::iterator b);`),
        classes: parseClass(`void r4mp1563(int a, std::queue<int64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1563(int a, std::queue<int64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1563 生成结果为空');
      const expectSnippet0 = 'export function r4mp1563(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1563 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1563 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1563 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1564
  * @tc.name : h2dts_gen_1564
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<unsigned>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1564', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1564(int a, std::queue<unsigned>::iterator b);`),
        unions: parseUnion(`void r4mp1564(int a, std::queue<unsigned>::iterator b);`),
        structs: parseStruct(`void r4mp1564(int a, std::queue<unsigned>::iterator b);`),
        classes: parseClass(`void r4mp1564(int a, std::queue<unsigned>::iterator b);`),
        funcs: parseFunction(`void r4mp1564(int a, std::queue<unsigned>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1564 生成结果为空');
      const expectSnippet0 = 'export function r4mp1564(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1564 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1564 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1564 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1565
  * @tc.name : h2dts_gen_1565
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<bool>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1565', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1565(int a, std::queue<bool>::iterator b);`),
        unions: parseUnion(`void r4mp1565(int a, std::queue<bool>::iterator b);`),
        structs: parseStruct(`void r4mp1565(int a, std::queue<bool>::iterator b);`),
        classes: parseClass(`void r4mp1565(int a, std::queue<bool>::iterator b);`),
        funcs: parseFunction(`void r4mp1565(int a, std::queue<bool>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1565 生成结果为空');
      const expectSnippet0 = 'export function r4mp1565(a: number, b: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1565 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1565 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1565 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1566
  * @tc.name : h2dts_gen_1566
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<char>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1566', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1566(int a, std::queue<char>::iterator b);`),
        unions: parseUnion(`void r4mp1566(int a, std::queue<char>::iterator b);`),
        structs: parseStruct(`void r4mp1566(int a, std::queue<char>::iterator b);`),
        classes: parseClass(`void r4mp1566(int a, std::queue<char>::iterator b);`),
        funcs: parseFunction(`void r4mp1566(int a, std::queue<char>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1566 生成结果为空');
      const expectSnippet0 = 'export function r4mp1566(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1566 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1566 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1566 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1567
  * @tc.name : h2dts_gen_1567
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<wchar_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1567', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1567(int a, std::queue<wchar_t>::iterator b);`),
        unions: parseUnion(`void r4mp1567(int a, std::queue<wchar_t>::iterator b);`),
        structs: parseStruct(`void r4mp1567(int a, std::queue<wchar_t>::iterator b);`),
        classes: parseClass(`void r4mp1567(int a, std::queue<wchar_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1567(int a, std::queue<wchar_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1567 生成结果为空');
      const expectSnippet0 = 'export function r4mp1567(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1567 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1567 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1567 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1568
  * @tc.name : h2dts_gen_1568
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<char8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1568', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1568(int a, std::queue<char8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1568(int a, std::queue<char8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1568(int a, std::queue<char8_t>::iterator b);`),
        classes: parseClass(`void r4mp1568(int a, std::queue<char8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1568(int a, std::queue<char8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1568 生成结果为空');
      const expectSnippet0 = 'export function r4mp1568(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1568 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1568 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1568 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1569
  * @tc.name : h2dts_gen_1569
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<char16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1569', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1569(int a, std::queue<char16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1569(int a, std::queue<char16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1569(int a, std::queue<char16_t>::iterator b);`),
        classes: parseClass(`void r4mp1569(int a, std::queue<char16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1569(int a, std::queue<char16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1569 生成结果为空');
      const expectSnippet0 = 'export function r4mp1569(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1569 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1569 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1569 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1570
  * @tc.name : h2dts_gen_1570
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<char32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1570', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1570(int a, std::queue<char32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1570(int a, std::queue<char32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1570(int a, std::queue<char32_t>::iterator b);`),
        classes: parseClass(`void r4mp1570(int a, std::queue<char32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1570(int a, std::queue<char32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1570 生成结果为空');
      const expectSnippet0 = 'export function r4mp1570(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1570 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1570 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1570 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1571
  * @tc.name : h2dts_gen_1571
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1571', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1571(int a, std::valarray<int> b);`),
        unions: parseUnion(`void r4mp1571(int a, std::valarray<int> b);`),
        structs: parseStruct(`void r4mp1571(int a, std::valarray<int> b);`),
        classes: parseClass(`void r4mp1571(int a, std::valarray<int> b);`),
        funcs: parseFunction(`void r4mp1571(int a, std::valarray<int> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1571 生成结果为空');
      const expectSnippet0 = 'export function r4mp1571(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1571 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1571 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1571 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1572
  * @tc.name : h2dts_gen_1572
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1572', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1572(int a, std::valarray<size_t> b);`),
        unions: parseUnion(`void r4mp1572(int a, std::valarray<size_t> b);`),
        structs: parseStruct(`void r4mp1572(int a, std::valarray<size_t> b);`),
        classes: parseClass(`void r4mp1572(int a, std::valarray<size_t> b);`),
        funcs: parseFunction(`void r4mp1572(int a, std::valarray<size_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1572 生成结果为空');
      const expectSnippet0 = 'export function r4mp1572(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1572 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1572 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1572 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1573
  * @tc.name : h2dts_gen_1573
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1573', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1573(int a, std::valarray<double> b);`),
        unions: parseUnion(`void r4mp1573(int a, std::valarray<double> b);`),
        structs: parseStruct(`void r4mp1573(int a, std::valarray<double> b);`),
        classes: parseClass(`void r4mp1573(int a, std::valarray<double> b);`),
        funcs: parseFunction(`void r4mp1573(int a, std::valarray<double> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1573 生成结果为空');
      const expectSnippet0 = 'export function r4mp1573(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1573 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1573 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1573 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1574
  * @tc.name : h2dts_gen_1574
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1574', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1574(int a, std::valarray<float> b);`),
        unions: parseUnion(`void r4mp1574(int a, std::valarray<float> b);`),
        structs: parseStruct(`void r4mp1574(int a, std::valarray<float> b);`),
        classes: parseClass(`void r4mp1574(int a, std::valarray<float> b);`),
        funcs: parseFunction(`void r4mp1574(int a, std::valarray<float> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1574 生成结果为空');
      const expectSnippet0 = 'export function r4mp1574(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1574 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1574 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1574 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1575
  * @tc.name : h2dts_gen_1575
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1575', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1575(int a, std::valarray<long> b);`),
        unions: parseUnion(`void r4mp1575(int a, std::valarray<long> b);`),
        structs: parseStruct(`void r4mp1575(int a, std::valarray<long> b);`),
        classes: parseClass(`void r4mp1575(int a, std::valarray<long> b);`),
        funcs: parseFunction(`void r4mp1575(int a, std::valarray<long> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1575 生成结果为空');
      const expectSnippet0 = 'export function r4mp1575(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1575 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1575 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1575 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1576
  * @tc.name : h2dts_gen_1576
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1576', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1576(int a, std::valarray<short> b);`),
        unions: parseUnion(`void r4mp1576(int a, std::valarray<short> b);`),
        structs: parseStruct(`void r4mp1576(int a, std::valarray<short> b);`),
        classes: parseClass(`void r4mp1576(int a, std::valarray<short> b);`),
        funcs: parseFunction(`void r4mp1576(int a, std::valarray<short> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1576 生成结果为空');
      const expectSnippet0 = 'export function r4mp1576(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1576 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1576 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1576 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1577
  * @tc.name : h2dts_gen_1577
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1577', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1577(int a, std::valarray<uint8_t> b);`),
        unions: parseUnion(`void r4mp1577(int a, std::valarray<uint8_t> b);`),
        structs: parseStruct(`void r4mp1577(int a, std::valarray<uint8_t> b);`),
        classes: parseClass(`void r4mp1577(int a, std::valarray<uint8_t> b);`),
        funcs: parseFunction(`void r4mp1577(int a, std::valarray<uint8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1577 生成结果为空');
      const expectSnippet0 = 'export function r4mp1577(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1577 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1577 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1577 执行异常: ${String(err)}`);
    }
  });
});
