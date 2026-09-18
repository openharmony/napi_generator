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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part45.');

  /**
  * @tc.number : h2dts_gen_1438
  * @tc.name : h2dts_gen_1438
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<unsigned>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1438', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1438(int a, std::list<unsigned>::iterator b);`),
        unions: parseUnion(`void r4mp1438(int a, std::list<unsigned>::iterator b);`),
        structs: parseStruct(`void r4mp1438(int a, std::list<unsigned>::iterator b);`),
        classes: parseClass(`void r4mp1438(int a, std::list<unsigned>::iterator b);`),
        funcs: parseFunction(`void r4mp1438(int a, std::list<unsigned>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1438 生成结果为空');
      const expectSnippet0 = 'export function r4mp1438(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1438 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1438 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1438 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1439
  * @tc.name : h2dts_gen_1439
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<bool>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1439', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1439(int a, std::list<bool>::iterator b);`),
        unions: parseUnion(`void r4mp1439(int a, std::list<bool>::iterator b);`),
        structs: parseStruct(`void r4mp1439(int a, std::list<bool>::iterator b);`),
        classes: parseClass(`void r4mp1439(int a, std::list<bool>::iterator b);`),
        funcs: parseFunction(`void r4mp1439(int a, std::list<bool>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1439 生成结果为空');
      const expectSnippet0 = 'export function r4mp1439(a: number, b: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1439 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1439 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1439 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1440
  * @tc.name : h2dts_gen_1440
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<char>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1440', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1440(int a, std::list<char>::iterator b);`),
        unions: parseUnion(`void r4mp1440(int a, std::list<char>::iterator b);`),
        structs: parseStruct(`void r4mp1440(int a, std::list<char>::iterator b);`),
        classes: parseClass(`void r4mp1440(int a, std::list<char>::iterator b);`),
        funcs: parseFunction(`void r4mp1440(int a, std::list<char>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1440 生成结果为空');
      const expectSnippet0 = 'export function r4mp1440(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1440 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1440 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1440 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1441
  * @tc.name : h2dts_gen_1441
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<wchar_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1441', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1441(int a, std::list<wchar_t>::iterator b);`),
        unions: parseUnion(`void r4mp1441(int a, std::list<wchar_t>::iterator b);`),
        structs: parseStruct(`void r4mp1441(int a, std::list<wchar_t>::iterator b);`),
        classes: parseClass(`void r4mp1441(int a, std::list<wchar_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1441(int a, std::list<wchar_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1441 生成结果为空');
      const expectSnippet0 = 'export function r4mp1441(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1441 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1441 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1441 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1442
  * @tc.name : h2dts_gen_1442
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<char8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1442', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1442(int a, std::list<char8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1442(int a, std::list<char8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1442(int a, std::list<char8_t>::iterator b);`),
        classes: parseClass(`void r4mp1442(int a, std::list<char8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1442(int a, std::list<char8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1442 生成结果为空');
      const expectSnippet0 = 'export function r4mp1442(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1442 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1442 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1442 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1443
  * @tc.name : h2dts_gen_1443
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<char16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1443', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1443(int a, std::list<char16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1443(int a, std::list<char16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1443(int a, std::list<char16_t>::iterator b);`),
        classes: parseClass(`void r4mp1443(int a, std::list<char16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1443(int a, std::list<char16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1443 生成结果为空');
      const expectSnippet0 = 'export function r4mp1443(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1443 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1443 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1443 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1444
  * @tc.name : h2dts_gen_1444
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<char32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1444', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1444(int a, std::list<char32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1444(int a, std::list<char32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1444(int a, std::list<char32_t>::iterator b);`),
        classes: parseClass(`void r4mp1444(int a, std::list<char32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1444(int a, std::list<char32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1444 生成结果为空');
      const expectSnippet0 = 'export function r4mp1444(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1444 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1444 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1444 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1445
  * @tc.name : h2dts_gen_1445
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1445', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1445(int a, std::forward_list<int> b);`),
        unions: parseUnion(`void r4mp1445(int a, std::forward_list<int> b);`),
        structs: parseStruct(`void r4mp1445(int a, std::forward_list<int> b);`),
        classes: parseClass(`void r4mp1445(int a, std::forward_list<int> b);`),
        funcs: parseFunction(`void r4mp1445(int a, std::forward_list<int> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1445 生成结果为空');
      const expectSnippet0 = 'export function r4mp1445(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1445 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1445 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1445 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1446
  * @tc.name : h2dts_gen_1446
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1446', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1446(int a, std::forward_list<size_t> b);`),
        unions: parseUnion(`void r4mp1446(int a, std::forward_list<size_t> b);`),
        structs: parseStruct(`void r4mp1446(int a, std::forward_list<size_t> b);`),
        classes: parseClass(`void r4mp1446(int a, std::forward_list<size_t> b);`),
        funcs: parseFunction(`void r4mp1446(int a, std::forward_list<size_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1446 生成结果为空');
      const expectSnippet0 = 'export function r4mp1446(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1446 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1446 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1446 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1447
  * @tc.name : h2dts_gen_1447
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1447', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1447(int a, std::forward_list<double> b);`),
        unions: parseUnion(`void r4mp1447(int a, std::forward_list<double> b);`),
        structs: parseStruct(`void r4mp1447(int a, std::forward_list<double> b);`),
        classes: parseClass(`void r4mp1447(int a, std::forward_list<double> b);`),
        funcs: parseFunction(`void r4mp1447(int a, std::forward_list<double> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1447 生成结果为空');
      const expectSnippet0 = 'export function r4mp1447(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1447 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1447 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1447 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1448
  * @tc.name : h2dts_gen_1448
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1448', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1448(int a, std::forward_list<float> b);`),
        unions: parseUnion(`void r4mp1448(int a, std::forward_list<float> b);`),
        structs: parseStruct(`void r4mp1448(int a, std::forward_list<float> b);`),
        classes: parseClass(`void r4mp1448(int a, std::forward_list<float> b);`),
        funcs: parseFunction(`void r4mp1448(int a, std::forward_list<float> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1448 生成结果为空');
      const expectSnippet0 = 'export function r4mp1448(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1448 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1448 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1448 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1449
  * @tc.name : h2dts_gen_1449
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1449', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1449(int a, std::forward_list<long> b);`),
        unions: parseUnion(`void r4mp1449(int a, std::forward_list<long> b);`),
        structs: parseStruct(`void r4mp1449(int a, std::forward_list<long> b);`),
        classes: parseClass(`void r4mp1449(int a, std::forward_list<long> b);`),
        funcs: parseFunction(`void r4mp1449(int a, std::forward_list<long> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1449 生成结果为空');
      const expectSnippet0 = 'export function r4mp1449(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1449 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1449 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1449 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1450
  * @tc.name : h2dts_gen_1450
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1450', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1450(int a, std::forward_list<short> b);`),
        unions: parseUnion(`void r4mp1450(int a, std::forward_list<short> b);`),
        structs: parseStruct(`void r4mp1450(int a, std::forward_list<short> b);`),
        classes: parseClass(`void r4mp1450(int a, std::forward_list<short> b);`),
        funcs: parseFunction(`void r4mp1450(int a, std::forward_list<short> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1450 生成结果为空');
      const expectSnippet0 = 'export function r4mp1450(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1450 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1450 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1450 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1451
  * @tc.name : h2dts_gen_1451
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1451', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1451(int a, std::forward_list<uint8_t> b);`),
        unions: parseUnion(`void r4mp1451(int a, std::forward_list<uint8_t> b);`),
        structs: parseStruct(`void r4mp1451(int a, std::forward_list<uint8_t> b);`),
        classes: parseClass(`void r4mp1451(int a, std::forward_list<uint8_t> b);`),
        funcs: parseFunction(`void r4mp1451(int a, std::forward_list<uint8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1451 生成结果为空');
      const expectSnippet0 = 'export function r4mp1451(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1451 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1451 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1451 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1452
  * @tc.name : h2dts_gen_1452
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1452', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1452(int a, std::forward_list<uint16_t> b);`),
        unions: parseUnion(`void r4mp1452(int a, std::forward_list<uint16_t> b);`),
        structs: parseStruct(`void r4mp1452(int a, std::forward_list<uint16_t> b);`),
        classes: parseClass(`void r4mp1452(int a, std::forward_list<uint16_t> b);`),
        funcs: parseFunction(`void r4mp1452(int a, std::forward_list<uint16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1452 生成结果为空');
      const expectSnippet0 = 'export function r4mp1452(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1452 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1452 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1452 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1453
  * @tc.name : h2dts_gen_1453
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1453', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1453(int a, std::forward_list<uint32_t> b);`),
        unions: parseUnion(`void r4mp1453(int a, std::forward_list<uint32_t> b);`),
        structs: parseStruct(`void r4mp1453(int a, std::forward_list<uint32_t> b);`),
        classes: parseClass(`void r4mp1453(int a, std::forward_list<uint32_t> b);`),
        funcs: parseFunction(`void r4mp1453(int a, std::forward_list<uint32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1453 生成结果为空');
      const expectSnippet0 = 'export function r4mp1453(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1453 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1453 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1454
  * @tc.name : h2dts_gen_1454
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1454', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1454(int a, std::forward_list<uint64_t> b);`),
        unions: parseUnion(`void r4mp1454(int a, std::forward_list<uint64_t> b);`),
        structs: parseStruct(`void r4mp1454(int a, std::forward_list<uint64_t> b);`),
        classes: parseClass(`void r4mp1454(int a, std::forward_list<uint64_t> b);`),
        funcs: parseFunction(`void r4mp1454(int a, std::forward_list<uint64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1454 生成结果为空');
      const expectSnippet0 = 'export function r4mp1454(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1454 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1454 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1455
  * @tc.name : h2dts_gen_1455
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1455', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1455(int a, std::forward_list<int8_t> b);`),
        unions: parseUnion(`void r4mp1455(int a, std::forward_list<int8_t> b);`),
        structs: parseStruct(`void r4mp1455(int a, std::forward_list<int8_t> b);`),
        classes: parseClass(`void r4mp1455(int a, std::forward_list<int8_t> b);`),
        funcs: parseFunction(`void r4mp1455(int a, std::forward_list<int8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1455 生成结果为空');
      const expectSnippet0 = 'export function r4mp1455(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1455 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1455 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1455 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1456
  * @tc.name : h2dts_gen_1456
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1456', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1456(int a, std::forward_list<int16_t> b);`),
        unions: parseUnion(`void r4mp1456(int a, std::forward_list<int16_t> b);`),
        structs: parseStruct(`void r4mp1456(int a, std::forward_list<int16_t> b);`),
        classes: parseClass(`void r4mp1456(int a, std::forward_list<int16_t> b);`),
        funcs: parseFunction(`void r4mp1456(int a, std::forward_list<int16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1456 生成结果为空');
      const expectSnippet0 = 'export function r4mp1456(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1456 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1456 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1457
  * @tc.name : h2dts_gen_1457
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1457', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1457(int a, std::forward_list<int32_t> b);`),
        unions: parseUnion(`void r4mp1457(int a, std::forward_list<int32_t> b);`),
        structs: parseStruct(`void r4mp1457(int a, std::forward_list<int32_t> b);`),
        classes: parseClass(`void r4mp1457(int a, std::forward_list<int32_t> b);`),
        funcs: parseFunction(`void r4mp1457(int a, std::forward_list<int32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1457 生成结果为空');
      const expectSnippet0 = 'export function r4mp1457(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1457 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1457 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1458
  * @tc.name : h2dts_gen_1458
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1458', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1458(int a, std::forward_list<int64_t> b);`),
        unions: parseUnion(`void r4mp1458(int a, std::forward_list<int64_t> b);`),
        structs: parseStruct(`void r4mp1458(int a, std::forward_list<int64_t> b);`),
        classes: parseClass(`void r4mp1458(int a, std::forward_list<int64_t> b);`),
        funcs: parseFunction(`void r4mp1458(int a, std::forward_list<int64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1458 生成结果为空');
      const expectSnippet0 = 'export function r4mp1458(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1458 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1458 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1459
  * @tc.name : h2dts_gen_1459
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1459', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1459(int a, std::forward_list<unsigned> b);`),
        unions: parseUnion(`void r4mp1459(int a, std::forward_list<unsigned> b);`),
        structs: parseStruct(`void r4mp1459(int a, std::forward_list<unsigned> b);`),
        classes: parseClass(`void r4mp1459(int a, std::forward_list<unsigned> b);`),
        funcs: parseFunction(`void r4mp1459(int a, std::forward_list<unsigned> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1459 生成结果为空');
      const expectSnippet0 = 'export function r4mp1459(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1459 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1459 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1459 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1460
  * @tc.name : h2dts_gen_1460
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1460', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1460(int a, std::forward_list<bool> b);`),
        unions: parseUnion(`void r4mp1460(int a, std::forward_list<bool> b);`),
        structs: parseStruct(`void r4mp1460(int a, std::forward_list<bool> b);`),
        classes: parseClass(`void r4mp1460(int a, std::forward_list<bool> b);`),
        funcs: parseFunction(`void r4mp1460(int a, std::forward_list<bool> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1460 生成结果为空');
      const expectSnippet0 = 'export function r4mp1460(a: number, b: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1460 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1460 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1461
  * @tc.name : h2dts_gen_1461
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1461', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1461(int a, std::forward_list<char> b);`),
        unions: parseUnion(`void r4mp1461(int a, std::forward_list<char> b);`),
        structs: parseStruct(`void r4mp1461(int a, std::forward_list<char> b);`),
        classes: parseClass(`void r4mp1461(int a, std::forward_list<char> b);`),
        funcs: parseFunction(`void r4mp1461(int a, std::forward_list<char> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1461 生成结果为空');
      const expectSnippet0 = 'export function r4mp1461(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1461 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1461 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1462
  * @tc.name : h2dts_gen_1462
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1462', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1462(int a, std::forward_list<wchar_t> b);`),
        unions: parseUnion(`void r4mp1462(int a, std::forward_list<wchar_t> b);`),
        structs: parseStruct(`void r4mp1462(int a, std::forward_list<wchar_t> b);`),
        classes: parseClass(`void r4mp1462(int a, std::forward_list<wchar_t> b);`),
        funcs: parseFunction(`void r4mp1462(int a, std::forward_list<wchar_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1462 生成结果为空');
      const expectSnippet0 = 'export function r4mp1462(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1462 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1462 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1463
  * @tc.name : h2dts_gen_1463
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1463', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1463(int a, std::forward_list<char8_t> b);`),
        unions: parseUnion(`void r4mp1463(int a, std::forward_list<char8_t> b);`),
        structs: parseStruct(`void r4mp1463(int a, std::forward_list<char8_t> b);`),
        classes: parseClass(`void r4mp1463(int a, std::forward_list<char8_t> b);`),
        funcs: parseFunction(`void r4mp1463(int a, std::forward_list<char8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1463 生成结果为空');
      const expectSnippet0 = 'export function r4mp1463(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1463 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1463 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1464
  * @tc.name : h2dts_gen_1464
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1464', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1464(int a, std::forward_list<char16_t> b);`),
        unions: parseUnion(`void r4mp1464(int a, std::forward_list<char16_t> b);`),
        structs: parseStruct(`void r4mp1464(int a, std::forward_list<char16_t> b);`),
        classes: parseClass(`void r4mp1464(int a, std::forward_list<char16_t> b);`),
        funcs: parseFunction(`void r4mp1464(int a, std::forward_list<char16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1464 生成结果为空');
      const expectSnippet0 = 'export function r4mp1464(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1464 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1464 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1465
  * @tc.name : h2dts_gen_1465
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1465', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1465(int a, std::forward_list<char32_t> b);`),
        unions: parseUnion(`void r4mp1465(int a, std::forward_list<char32_t> b);`),
        structs: parseStruct(`void r4mp1465(int a, std::forward_list<char32_t> b);`),
        classes: parseClass(`void r4mp1465(int a, std::forward_list<char32_t> b);`),
        funcs: parseFunction(`void r4mp1465(int a, std::forward_list<char32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1465 生成结果为空');
      const expectSnippet0 = 'export function r4mp1465(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1465 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1465 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1466
  * @tc.name : h2dts_gen_1466
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1466', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1466(int a, std::forward_list<int>::iterator b);`),
        unions: parseUnion(`void r4mp1466(int a, std::forward_list<int>::iterator b);`),
        structs: parseStruct(`void r4mp1466(int a, std::forward_list<int>::iterator b);`),
        classes: parseClass(`void r4mp1466(int a, std::forward_list<int>::iterator b);`),
        funcs: parseFunction(`void r4mp1466(int a, std::forward_list<int>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1466 生成结果为空');
      const expectSnippet0 = 'export function r4mp1466(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1466 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1466 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1467
  * @tc.name : h2dts_gen_1467
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<size_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1467', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1467(int a, std::forward_list<size_t>::iterator b);`),
        unions: parseUnion(`void r4mp1467(int a, std::forward_list<size_t>::iterator b);`),
        structs: parseStruct(`void r4mp1467(int a, std::forward_list<size_t>::iterator b);`),
        classes: parseClass(`void r4mp1467(int a, std::forward_list<size_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1467(int a, std::forward_list<size_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1467 生成结果为空');
      const expectSnippet0 = 'export function r4mp1467(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1467 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1467 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1468
  * @tc.name : h2dts_gen_1468
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<double>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1468', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1468(int a, std::forward_list<double>::iterator b);`),
        unions: parseUnion(`void r4mp1468(int a, std::forward_list<double>::iterator b);`),
        structs: parseStruct(`void r4mp1468(int a, std::forward_list<double>::iterator b);`),
        classes: parseClass(`void r4mp1468(int a, std::forward_list<double>::iterator b);`),
        funcs: parseFunction(`void r4mp1468(int a, std::forward_list<double>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1468 生成结果为空');
      const expectSnippet0 = 'export function r4mp1468(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1468 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1468 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1469
  * @tc.name : h2dts_gen_1469
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<float>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1469', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1469(int a, std::forward_list<float>::iterator b);`),
        unions: parseUnion(`void r4mp1469(int a, std::forward_list<float>::iterator b);`),
        structs: parseStruct(`void r4mp1469(int a, std::forward_list<float>::iterator b);`),
        classes: parseClass(`void r4mp1469(int a, std::forward_list<float>::iterator b);`),
        funcs: parseFunction(`void r4mp1469(int a, std::forward_list<float>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1469 生成结果为空');
      const expectSnippet0 = 'export function r4mp1469(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1469 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1469 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1470
  * @tc.name : h2dts_gen_1470
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<long>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1470', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1470(int a, std::forward_list<long>::iterator b);`),
        unions: parseUnion(`void r4mp1470(int a, std::forward_list<long>::iterator b);`),
        structs: parseStruct(`void r4mp1470(int a, std::forward_list<long>::iterator b);`),
        classes: parseClass(`void r4mp1470(int a, std::forward_list<long>::iterator b);`),
        funcs: parseFunction(`void r4mp1470(int a, std::forward_list<long>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1470 生成结果为空');
      const expectSnippet0 = 'export function r4mp1470(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1470 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1470 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1471
  * @tc.name : h2dts_gen_1471
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<short>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1471', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1471(int a, std::forward_list<short>::iterator b);`),
        unions: parseUnion(`void r4mp1471(int a, std::forward_list<short>::iterator b);`),
        structs: parseStruct(`void r4mp1471(int a, std::forward_list<short>::iterator b);`),
        classes: parseClass(`void r4mp1471(int a, std::forward_list<short>::iterator b);`),
        funcs: parseFunction(`void r4mp1471(int a, std::forward_list<short>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1471 生成结果为空');
      const expectSnippet0 = 'export function r4mp1471(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1471 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1471 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1471 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1472
  * @tc.name : h2dts_gen_1472
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<uint8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1472', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1472(int a, std::forward_list<uint8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1472(int a, std::forward_list<uint8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1472(int a, std::forward_list<uint8_t>::iterator b);`),
        classes: parseClass(`void r4mp1472(int a, std::forward_list<uint8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1472(int a, std::forward_list<uint8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1472 生成结果为空');
      const expectSnippet0 = 'export function r4mp1472(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1472 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1472 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1472 执行异常: ${String(err)}`);
    }
  });
});
