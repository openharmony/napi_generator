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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part49.');

  /**
  * @tc.number : h2dts_gen_1578
  * @tc.name : h2dts_gen_1578
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1578', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1578(int a, std::valarray<uint16_t> b);`),
        unions: parseUnion(`void r4mp1578(int a, std::valarray<uint16_t> b);`),
        structs: parseStruct(`void r4mp1578(int a, std::valarray<uint16_t> b);`),
        classes: parseClass(`void r4mp1578(int a, std::valarray<uint16_t> b);`),
        funcs: parseFunction(`void r4mp1578(int a, std::valarray<uint16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1578 生成结果为空');
      const expectSnippet0 = 'export function r4mp1578(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1578 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1578 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1578 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1579
  * @tc.name : h2dts_gen_1579
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1579', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1579(int a, std::valarray<uint32_t> b);`),
        unions: parseUnion(`void r4mp1579(int a, std::valarray<uint32_t> b);`),
        structs: parseStruct(`void r4mp1579(int a, std::valarray<uint32_t> b);`),
        classes: parseClass(`void r4mp1579(int a, std::valarray<uint32_t> b);`),
        funcs: parseFunction(`void r4mp1579(int a, std::valarray<uint32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1579 生成结果为空');
      const expectSnippet0 = 'export function r4mp1579(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1579 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1579 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1579 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1580
  * @tc.name : h2dts_gen_1580
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1580', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1580(int a, std::valarray<uint64_t> b);`),
        unions: parseUnion(`void r4mp1580(int a, std::valarray<uint64_t> b);`),
        structs: parseStruct(`void r4mp1580(int a, std::valarray<uint64_t> b);`),
        classes: parseClass(`void r4mp1580(int a, std::valarray<uint64_t> b);`),
        funcs: parseFunction(`void r4mp1580(int a, std::valarray<uint64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1580 生成结果为空');
      const expectSnippet0 = 'export function r4mp1580(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1580 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1580 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1580 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1581
  * @tc.name : h2dts_gen_1581
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1581', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1581(int a, std::valarray<int8_t> b);`),
        unions: parseUnion(`void r4mp1581(int a, std::valarray<int8_t> b);`),
        structs: parseStruct(`void r4mp1581(int a, std::valarray<int8_t> b);`),
        classes: parseClass(`void r4mp1581(int a, std::valarray<int8_t> b);`),
        funcs: parseFunction(`void r4mp1581(int a, std::valarray<int8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1581 生成结果为空');
      const expectSnippet0 = 'export function r4mp1581(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1581 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1581 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1581 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1582
  * @tc.name : h2dts_gen_1582
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1582', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1582(int a, std::valarray<int16_t> b);`),
        unions: parseUnion(`void r4mp1582(int a, std::valarray<int16_t> b);`),
        structs: parseStruct(`void r4mp1582(int a, std::valarray<int16_t> b);`),
        classes: parseClass(`void r4mp1582(int a, std::valarray<int16_t> b);`),
        funcs: parseFunction(`void r4mp1582(int a, std::valarray<int16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1582 生成结果为空');
      const expectSnippet0 = 'export function r4mp1582(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1582 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1582 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1582 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1583
  * @tc.name : h2dts_gen_1583
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1583', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1583(int a, std::valarray<int32_t> b);`),
        unions: parseUnion(`void r4mp1583(int a, std::valarray<int32_t> b);`),
        structs: parseStruct(`void r4mp1583(int a, std::valarray<int32_t> b);`),
        classes: parseClass(`void r4mp1583(int a, std::valarray<int32_t> b);`),
        funcs: parseFunction(`void r4mp1583(int a, std::valarray<int32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1583 生成结果为空');
      const expectSnippet0 = 'export function r4mp1583(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1583 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1583 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1583 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1584
  * @tc.name : h2dts_gen_1584
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1584', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1584(int a, std::valarray<int64_t> b);`),
        unions: parseUnion(`void r4mp1584(int a, std::valarray<int64_t> b);`),
        structs: parseStruct(`void r4mp1584(int a, std::valarray<int64_t> b);`),
        classes: parseClass(`void r4mp1584(int a, std::valarray<int64_t> b);`),
        funcs: parseFunction(`void r4mp1584(int a, std::valarray<int64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1584 生成结果为空');
      const expectSnippet0 = 'export function r4mp1584(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1584 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1584 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1584 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1585
  * @tc.name : h2dts_gen_1585
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1585', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1585(int a, std::valarray<unsigned> b);`),
        unions: parseUnion(`void r4mp1585(int a, std::valarray<unsigned> b);`),
        structs: parseStruct(`void r4mp1585(int a, std::valarray<unsigned> b);`),
        classes: parseClass(`void r4mp1585(int a, std::valarray<unsigned> b);`),
        funcs: parseFunction(`void r4mp1585(int a, std::valarray<unsigned> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1585 生成结果为空');
      const expectSnippet0 = 'export function r4mp1585(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1585 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1585 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1585 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1586
  * @tc.name : h2dts_gen_1586
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1586', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1586(int a, std::valarray<bool> b);`),
        unions: parseUnion(`void r4mp1586(int a, std::valarray<bool> b);`),
        structs: parseStruct(`void r4mp1586(int a, std::valarray<bool> b);`),
        classes: parseClass(`void r4mp1586(int a, std::valarray<bool> b);`),
        funcs: parseFunction(`void r4mp1586(int a, std::valarray<bool> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1586 生成结果为空');
      const expectSnippet0 = 'export function r4mp1586(a: number, b: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1586 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1586 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1586 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1587
  * @tc.name : h2dts_gen_1587
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1587', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1587(int a, std::valarray<char> b);`),
        unions: parseUnion(`void r4mp1587(int a, std::valarray<char> b);`),
        structs: parseStruct(`void r4mp1587(int a, std::valarray<char> b);`),
        classes: parseClass(`void r4mp1587(int a, std::valarray<char> b);`),
        funcs: parseFunction(`void r4mp1587(int a, std::valarray<char> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1587 生成结果为空');
      const expectSnippet0 = 'export function r4mp1587(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1587 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1587 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1587 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1588
  * @tc.name : h2dts_gen_1588
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1588', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1588(int a, std::valarray<wchar_t> b);`),
        unions: parseUnion(`void r4mp1588(int a, std::valarray<wchar_t> b);`),
        structs: parseStruct(`void r4mp1588(int a, std::valarray<wchar_t> b);`),
        classes: parseClass(`void r4mp1588(int a, std::valarray<wchar_t> b);`),
        funcs: parseFunction(`void r4mp1588(int a, std::valarray<wchar_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1588 生成结果为空');
      const expectSnippet0 = 'export function r4mp1588(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1588 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1588 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1588 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1589
  * @tc.name : h2dts_gen_1589
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1589', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1589(int a, std::valarray<char8_t> b);`),
        unions: parseUnion(`void r4mp1589(int a, std::valarray<char8_t> b);`),
        structs: parseStruct(`void r4mp1589(int a, std::valarray<char8_t> b);`),
        classes: parseClass(`void r4mp1589(int a, std::valarray<char8_t> b);`),
        funcs: parseFunction(`void r4mp1589(int a, std::valarray<char8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1589 生成结果为空');
      const expectSnippet0 = 'export function r4mp1589(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1589 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1589 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1589 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1590
  * @tc.name : h2dts_gen_1590
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1590', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1590(int a, std::valarray<char16_t> b);`),
        unions: parseUnion(`void r4mp1590(int a, std::valarray<char16_t> b);`),
        structs: parseStruct(`void r4mp1590(int a, std::valarray<char16_t> b);`),
        classes: parseClass(`void r4mp1590(int a, std::valarray<char16_t> b);`),
        funcs: parseFunction(`void r4mp1590(int a, std::valarray<char16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1590 生成结果为空');
      const expectSnippet0 = 'export function r4mp1590(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1590 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1590 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1590 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1591
  * @tc.name : h2dts_gen_1591
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1591', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1591(int a, std::valarray<char32_t> b);`),
        unions: parseUnion(`void r4mp1591(int a, std::valarray<char32_t> b);`),
        structs: parseStruct(`void r4mp1591(int a, std::valarray<char32_t> b);`),
        classes: parseClass(`void r4mp1591(int a, std::valarray<char32_t> b);`),
        funcs: parseFunction(`void r4mp1591(int a, std::valarray<char32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1591 生成结果为空');
      const expectSnippet0 = 'export function r4mp1591(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1591 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1591 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1591 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1592
  * @tc.name : h2dts_gen_1592
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1592', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1592(int a, std::valarray<int>::iterator b);`),
        unions: parseUnion(`void r4mp1592(int a, std::valarray<int>::iterator b);`),
        structs: parseStruct(`void r4mp1592(int a, std::valarray<int>::iterator b);`),
        classes: parseClass(`void r4mp1592(int a, std::valarray<int>::iterator b);`),
        funcs: parseFunction(`void r4mp1592(int a, std::valarray<int>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1592 生成结果为空');
      const expectSnippet0 = 'export function r4mp1592(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1592 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1592 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1592 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1593
  * @tc.name : h2dts_gen_1593
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<size_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1593', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1593(int a, std::valarray<size_t>::iterator b);`),
        unions: parseUnion(`void r4mp1593(int a, std::valarray<size_t>::iterator b);`),
        structs: parseStruct(`void r4mp1593(int a, std::valarray<size_t>::iterator b);`),
        classes: parseClass(`void r4mp1593(int a, std::valarray<size_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1593(int a, std::valarray<size_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1593 生成结果为空');
      const expectSnippet0 = 'export function r4mp1593(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1593 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1593 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1593 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1594
  * @tc.name : h2dts_gen_1594
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<double>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1594', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1594(int a, std::valarray<double>::iterator b);`),
        unions: parseUnion(`void r4mp1594(int a, std::valarray<double>::iterator b);`),
        structs: parseStruct(`void r4mp1594(int a, std::valarray<double>::iterator b);`),
        classes: parseClass(`void r4mp1594(int a, std::valarray<double>::iterator b);`),
        funcs: parseFunction(`void r4mp1594(int a, std::valarray<double>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1594 生成结果为空');
      const expectSnippet0 = 'export function r4mp1594(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1594 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1594 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1594 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1595
  * @tc.name : h2dts_gen_1595
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<float>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1595', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1595(int a, std::valarray<float>::iterator b);`),
        unions: parseUnion(`void r4mp1595(int a, std::valarray<float>::iterator b);`),
        structs: parseStruct(`void r4mp1595(int a, std::valarray<float>::iterator b);`),
        classes: parseClass(`void r4mp1595(int a, std::valarray<float>::iterator b);`),
        funcs: parseFunction(`void r4mp1595(int a, std::valarray<float>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1595 生成结果为空');
      const expectSnippet0 = 'export function r4mp1595(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1595 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1595 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1595 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1596
  * @tc.name : h2dts_gen_1596
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<long>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1596', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1596(int a, std::valarray<long>::iterator b);`),
        unions: parseUnion(`void r4mp1596(int a, std::valarray<long>::iterator b);`),
        structs: parseStruct(`void r4mp1596(int a, std::valarray<long>::iterator b);`),
        classes: parseClass(`void r4mp1596(int a, std::valarray<long>::iterator b);`),
        funcs: parseFunction(`void r4mp1596(int a, std::valarray<long>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1596 生成结果为空');
      const expectSnippet0 = 'export function r4mp1596(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1596 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1596 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1596 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1597
  * @tc.name : h2dts_gen_1597
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<short>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1597', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1597(int a, std::valarray<short>::iterator b);`),
        unions: parseUnion(`void r4mp1597(int a, std::valarray<short>::iterator b);`),
        structs: parseStruct(`void r4mp1597(int a, std::valarray<short>::iterator b);`),
        classes: parseClass(`void r4mp1597(int a, std::valarray<short>::iterator b);`),
        funcs: parseFunction(`void r4mp1597(int a, std::valarray<short>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1597 生成结果为空');
      const expectSnippet0 = 'export function r4mp1597(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1597 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1597 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1597 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1598
  * @tc.name : h2dts_gen_1598
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<uint8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1598', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1598(int a, std::valarray<uint8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1598(int a, std::valarray<uint8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1598(int a, std::valarray<uint8_t>::iterator b);`),
        classes: parseClass(`void r4mp1598(int a, std::valarray<uint8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1598(int a, std::valarray<uint8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1598 生成结果为空');
      const expectSnippet0 = 'export function r4mp1598(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1598 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1598 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1598 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1599
  * @tc.name : h2dts_gen_1599
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<uint16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1599', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1599(int a, std::valarray<uint16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1599(int a, std::valarray<uint16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1599(int a, std::valarray<uint16_t>::iterator b);`),
        classes: parseClass(`void r4mp1599(int a, std::valarray<uint16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1599(int a, std::valarray<uint16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1599 生成结果为空');
      const expectSnippet0 = 'export function r4mp1599(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1599 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1599 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1599 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1600
  * @tc.name : h2dts_gen_1600
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<uint32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1600', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1600(int a, std::valarray<uint32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1600(int a, std::valarray<uint32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1600(int a, std::valarray<uint32_t>::iterator b);`),
        classes: parseClass(`void r4mp1600(int a, std::valarray<uint32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1600(int a, std::valarray<uint32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1600 生成结果为空');
      const expectSnippet0 = 'export function r4mp1600(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1600 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1600 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1600 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1601
  * @tc.name : h2dts_gen_1601
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<uint64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1601', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1601(int a, std::valarray<uint64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1601(int a, std::valarray<uint64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1601(int a, std::valarray<uint64_t>::iterator b);`),
        classes: parseClass(`void r4mp1601(int a, std::valarray<uint64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1601(int a, std::valarray<uint64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1601 生成结果为空');
      const expectSnippet0 = 'export function r4mp1601(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1601 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1601 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1601 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1602
  * @tc.name : h2dts_gen_1602
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1602', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1602(int a, std::valarray<int8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1602(int a, std::valarray<int8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1602(int a, std::valarray<int8_t>::iterator b);`),
        classes: parseClass(`void r4mp1602(int a, std::valarray<int8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1602(int a, std::valarray<int8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1602 生成结果为空');
      const expectSnippet0 = 'export function r4mp1602(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1602 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1602 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1602 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1603
  * @tc.name : h2dts_gen_1603
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1603', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1603(int a, std::valarray<int16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1603(int a, std::valarray<int16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1603(int a, std::valarray<int16_t>::iterator b);`),
        classes: parseClass(`void r4mp1603(int a, std::valarray<int16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1603(int a, std::valarray<int16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1603 生成结果为空');
      const expectSnippet0 = 'export function r4mp1603(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1603 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1603 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1603 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1604
  * @tc.name : h2dts_gen_1604
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1604', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1604(int a, std::valarray<int32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1604(int a, std::valarray<int32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1604(int a, std::valarray<int32_t>::iterator b);`),
        classes: parseClass(`void r4mp1604(int a, std::valarray<int32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1604(int a, std::valarray<int32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1604 生成结果为空');
      const expectSnippet0 = 'export function r4mp1604(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1604 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1604 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1604 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1605
  * @tc.name : h2dts_gen_1605
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<int64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1605', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1605(int a, std::valarray<int64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1605(int a, std::valarray<int64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1605(int a, std::valarray<int64_t>::iterator b);`),
        classes: parseClass(`void r4mp1605(int a, std::valarray<int64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1605(int a, std::valarray<int64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1605 生成结果为空');
      const expectSnippet0 = 'export function r4mp1605(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1605 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1605 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1605 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1606
  * @tc.name : h2dts_gen_1606
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<unsigned>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1606', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1606(int a, std::valarray<unsigned>::iterator b);`),
        unions: parseUnion(`void r4mp1606(int a, std::valarray<unsigned>::iterator b);`),
        structs: parseStruct(`void r4mp1606(int a, std::valarray<unsigned>::iterator b);`),
        classes: parseClass(`void r4mp1606(int a, std::valarray<unsigned>::iterator b);`),
        funcs: parseFunction(`void r4mp1606(int a, std::valarray<unsigned>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1606 生成结果为空');
      const expectSnippet0 = 'export function r4mp1606(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1606 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1606 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1606 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1607
  * @tc.name : h2dts_gen_1607
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<bool>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1607', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1607(int a, std::valarray<bool>::iterator b);`),
        unions: parseUnion(`void r4mp1607(int a, std::valarray<bool>::iterator b);`),
        structs: parseStruct(`void r4mp1607(int a, std::valarray<bool>::iterator b);`),
        classes: parseClass(`void r4mp1607(int a, std::valarray<bool>::iterator b);`),
        funcs: parseFunction(`void r4mp1607(int a, std::valarray<bool>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1607 生成结果为空');
      const expectSnippet0 = 'export function r4mp1607(a: number, b: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1607 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1607 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1607 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1608
  * @tc.name : h2dts_gen_1608
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<char>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1608', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1608(int a, std::valarray<char>::iterator b);`),
        unions: parseUnion(`void r4mp1608(int a, std::valarray<char>::iterator b);`),
        structs: parseStruct(`void r4mp1608(int a, std::valarray<char>::iterator b);`),
        classes: parseClass(`void r4mp1608(int a, std::valarray<char>::iterator b);`),
        funcs: parseFunction(`void r4mp1608(int a, std::valarray<char>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1608 生成结果为空');
      const expectSnippet0 = 'export function r4mp1608(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1608 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1608 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1608 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1609
  * @tc.name : h2dts_gen_1609
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<wchar_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1609', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1609(int a, std::valarray<wchar_t>::iterator b);`),
        unions: parseUnion(`void r4mp1609(int a, std::valarray<wchar_t>::iterator b);`),
        structs: parseStruct(`void r4mp1609(int a, std::valarray<wchar_t>::iterator b);`),
        classes: parseClass(`void r4mp1609(int a, std::valarray<wchar_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1609(int a, std::valarray<wchar_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1609 生成结果为空');
      const expectSnippet0 = 'export function r4mp1609(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1609 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1609 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1609 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1610
  * @tc.name : h2dts_gen_1610
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<char8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1610', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1610(int a, std::valarray<char8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1610(int a, std::valarray<char8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1610(int a, std::valarray<char8_t>::iterator b);`),
        classes: parseClass(`void r4mp1610(int a, std::valarray<char8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1610(int a, std::valarray<char8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1610 生成结果为空');
      const expectSnippet0 = 'export function r4mp1610(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1610 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1610 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1610 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1611
  * @tc.name : h2dts_gen_1611
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<char16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1611', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1611(int a, std::valarray<char16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1611(int a, std::valarray<char16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1611(int a, std::valarray<char16_t>::iterator b);`),
        classes: parseClass(`void r4mp1611(int a, std::valarray<char16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1611(int a, std::valarray<char16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1611 生成结果为空');
      const expectSnippet0 = 'export function r4mp1611(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1611 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1611 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1611 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1612
  * @tc.name : h2dts_gen_1612
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::valarray<char32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1612', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1612(int a, std::valarray<char32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1612(int a, std::valarray<char32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1612(int a, std::valarray<char32_t>::iterator b);`),
        classes: parseClass(`void r4mp1612(int a, std::valarray<char32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1612(int a, std::valarray<char32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1612 生成结果为空');
      const expectSnippet0 = 'export function r4mp1612(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1612 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1612 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1612 执行异常: ${String(err)}`);
    }
  });
});
