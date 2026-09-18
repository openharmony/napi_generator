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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part42.');

  /**
  * @tc.number : h2dts_gen_1333
  * @tc.name : h2dts_gen_1333
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1333', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1333(int a, std::vector<unsigned> b);`),
        unions: parseUnion(`void r4mp1333(int a, std::vector<unsigned> b);`),
        structs: parseStruct(`void r4mp1333(int a, std::vector<unsigned> b);`),
        classes: parseClass(`void r4mp1333(int a, std::vector<unsigned> b);`),
        funcs: parseFunction(`void r4mp1333(int a, std::vector<unsigned> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1333 生成结果为空');
      const expectSnippet0 = 'export function r4mp1333(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1333 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1333 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1333 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1334
  * @tc.name : h2dts_gen_1334
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1334', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1334(int a, std::vector<bool> b);`),
        unions: parseUnion(`void r4mp1334(int a, std::vector<bool> b);`),
        structs: parseStruct(`void r4mp1334(int a, std::vector<bool> b);`),
        classes: parseClass(`void r4mp1334(int a, std::vector<bool> b);`),
        funcs: parseFunction(`void r4mp1334(int a, std::vector<bool> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1334 生成结果为空');
      const expectSnippet0 = 'export function r4mp1334(a: number, b: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1334 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1334 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1334 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1335
  * @tc.name : h2dts_gen_1335
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1335', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1335(int a, std::vector<char> b);`),
        unions: parseUnion(`void r4mp1335(int a, std::vector<char> b);`),
        structs: parseStruct(`void r4mp1335(int a, std::vector<char> b);`),
        classes: parseClass(`void r4mp1335(int a, std::vector<char> b);`),
        funcs: parseFunction(`void r4mp1335(int a, std::vector<char> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1335 生成结果为空');
      const expectSnippet0 = 'export function r4mp1335(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1335 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1335 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1335 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1336
  * @tc.name : h2dts_gen_1336
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1336', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1336(int a, std::vector<wchar_t> b);`),
        unions: parseUnion(`void r4mp1336(int a, std::vector<wchar_t> b);`),
        structs: parseStruct(`void r4mp1336(int a, std::vector<wchar_t> b);`),
        classes: parseClass(`void r4mp1336(int a, std::vector<wchar_t> b);`),
        funcs: parseFunction(`void r4mp1336(int a, std::vector<wchar_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1336 生成结果为空');
      const expectSnippet0 = 'export function r4mp1336(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1336 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1336 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1336 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1337
  * @tc.name : h2dts_gen_1337
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1337', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1337(int a, std::vector<char8_t> b);`),
        unions: parseUnion(`void r4mp1337(int a, std::vector<char8_t> b);`),
        structs: parseStruct(`void r4mp1337(int a, std::vector<char8_t> b);`),
        classes: parseClass(`void r4mp1337(int a, std::vector<char8_t> b);`),
        funcs: parseFunction(`void r4mp1337(int a, std::vector<char8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1337 生成结果为空');
      const expectSnippet0 = 'export function r4mp1337(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1337 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1337 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1337 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1338
  * @tc.name : h2dts_gen_1338
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1338', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1338(int a, std::vector<char16_t> b);`),
        unions: parseUnion(`void r4mp1338(int a, std::vector<char16_t> b);`),
        structs: parseStruct(`void r4mp1338(int a, std::vector<char16_t> b);`),
        classes: parseClass(`void r4mp1338(int a, std::vector<char16_t> b);`),
        funcs: parseFunction(`void r4mp1338(int a, std::vector<char16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1338 生成结果为空');
      const expectSnippet0 = 'export function r4mp1338(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1338 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1338 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1338 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1339
  * @tc.name : h2dts_gen_1339
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1339', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1339(int a, std::vector<char32_t> b);`),
        unions: parseUnion(`void r4mp1339(int a, std::vector<char32_t> b);`),
        structs: parseStruct(`void r4mp1339(int a, std::vector<char32_t> b);`),
        classes: parseClass(`void r4mp1339(int a, std::vector<char32_t> b);`),
        funcs: parseFunction(`void r4mp1339(int a, std::vector<char32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1339 生成结果为空');
      const expectSnippet0 = 'export function r4mp1339(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1339 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1339 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1339 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1340
  * @tc.name : h2dts_gen_1340
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1340', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1340(int a, std::vector<int>::iterator b);`),
        unions: parseUnion(`void r4mp1340(int a, std::vector<int>::iterator b);`),
        structs: parseStruct(`void r4mp1340(int a, std::vector<int>::iterator b);`),
        classes: parseClass(`void r4mp1340(int a, std::vector<int>::iterator b);`),
        funcs: parseFunction(`void r4mp1340(int a, std::vector<int>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1340 生成结果为空');
      const expectSnippet0 = 'export function r4mp1340(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1340 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1340 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1340 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1341
  * @tc.name : h2dts_gen_1341
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<size_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1341', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1341(int a, std::vector<size_t>::iterator b);`),
        unions: parseUnion(`void r4mp1341(int a, std::vector<size_t>::iterator b);`),
        structs: parseStruct(`void r4mp1341(int a, std::vector<size_t>::iterator b);`),
        classes: parseClass(`void r4mp1341(int a, std::vector<size_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1341(int a, std::vector<size_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1341 生成结果为空');
      const expectSnippet0 = 'export function r4mp1341(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1341 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1341 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1341 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1342
  * @tc.name : h2dts_gen_1342
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<double>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1342', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1342(int a, std::vector<double>::iterator b);`),
        unions: parseUnion(`void r4mp1342(int a, std::vector<double>::iterator b);`),
        structs: parseStruct(`void r4mp1342(int a, std::vector<double>::iterator b);`),
        classes: parseClass(`void r4mp1342(int a, std::vector<double>::iterator b);`),
        funcs: parseFunction(`void r4mp1342(int a, std::vector<double>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1342 生成结果为空');
      const expectSnippet0 = 'export function r4mp1342(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1342 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1342 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1342 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1343
  * @tc.name : h2dts_gen_1343
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<float>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1343', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1343(int a, std::vector<float>::iterator b);`),
        unions: parseUnion(`void r4mp1343(int a, std::vector<float>::iterator b);`),
        structs: parseStruct(`void r4mp1343(int a, std::vector<float>::iterator b);`),
        classes: parseClass(`void r4mp1343(int a, std::vector<float>::iterator b);`),
        funcs: parseFunction(`void r4mp1343(int a, std::vector<float>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1343 生成结果为空');
      const expectSnippet0 = 'export function r4mp1343(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1343 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1343 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1343 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1344
  * @tc.name : h2dts_gen_1344
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<long>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1344', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1344(int a, std::vector<long>::iterator b);`),
        unions: parseUnion(`void r4mp1344(int a, std::vector<long>::iterator b);`),
        structs: parseStruct(`void r4mp1344(int a, std::vector<long>::iterator b);`),
        classes: parseClass(`void r4mp1344(int a, std::vector<long>::iterator b);`),
        funcs: parseFunction(`void r4mp1344(int a, std::vector<long>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1344 生成结果为空');
      const expectSnippet0 = 'export function r4mp1344(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1344 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1344 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1344 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1345
  * @tc.name : h2dts_gen_1345
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<short>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1345', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1345(int a, std::vector<short>::iterator b);`),
        unions: parseUnion(`void r4mp1345(int a, std::vector<short>::iterator b);`),
        structs: parseStruct(`void r4mp1345(int a, std::vector<short>::iterator b);`),
        classes: parseClass(`void r4mp1345(int a, std::vector<short>::iterator b);`),
        funcs: parseFunction(`void r4mp1345(int a, std::vector<short>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1345 生成结果为空');
      const expectSnippet0 = 'export function r4mp1345(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1345 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1345 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1345 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1346
  * @tc.name : h2dts_gen_1346
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<uint8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1346', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1346(int a, std::vector<uint8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1346(int a, std::vector<uint8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1346(int a, std::vector<uint8_t>::iterator b);`),
        classes: parseClass(`void r4mp1346(int a, std::vector<uint8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1346(int a, std::vector<uint8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1346 生成结果为空');
      const expectSnippet0 = 'export function r4mp1346(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1346 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1346 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1346 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1347
  * @tc.name : h2dts_gen_1347
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<uint16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1347', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1347(int a, std::vector<uint16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1347(int a, std::vector<uint16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1347(int a, std::vector<uint16_t>::iterator b);`),
        classes: parseClass(`void r4mp1347(int a, std::vector<uint16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1347(int a, std::vector<uint16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1347 生成结果为空');
      const expectSnippet0 = 'export function r4mp1347(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1347 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1347 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1347 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1348
  * @tc.name : h2dts_gen_1348
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<uint32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1348', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1348(int a, std::vector<uint32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1348(int a, std::vector<uint32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1348(int a, std::vector<uint32_t>::iterator b);`),
        classes: parseClass(`void r4mp1348(int a, std::vector<uint32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1348(int a, std::vector<uint32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1348 生成结果为空');
      const expectSnippet0 = 'export function r4mp1348(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1348 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1348 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1348 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1349
  * @tc.name : h2dts_gen_1349
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<uint64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1349', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1349(int a, std::vector<uint64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1349(int a, std::vector<uint64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1349(int a, std::vector<uint64_t>::iterator b);`),
        classes: parseClass(`void r4mp1349(int a, std::vector<uint64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1349(int a, std::vector<uint64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1349 生成结果为空');
      const expectSnippet0 = 'export function r4mp1349(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1349 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1349 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1349 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1350
  * @tc.name : h2dts_gen_1350
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1350', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1350(int a, std::vector<int8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1350(int a, std::vector<int8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1350(int a, std::vector<int8_t>::iterator b);`),
        classes: parseClass(`void r4mp1350(int a, std::vector<int8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1350(int a, std::vector<int8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1350 生成结果为空');
      const expectSnippet0 = 'export function r4mp1350(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1350 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1350 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1350 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1351
  * @tc.name : h2dts_gen_1351
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1351', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1351(int a, std::vector<int16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1351(int a, std::vector<int16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1351(int a, std::vector<int16_t>::iterator b);`),
        classes: parseClass(`void r4mp1351(int a, std::vector<int16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1351(int a, std::vector<int16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1351 生成结果为空');
      const expectSnippet0 = 'export function r4mp1351(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1351 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1351 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1351 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1352
  * @tc.name : h2dts_gen_1352
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1352', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1352(int a, std::vector<int32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1352(int a, std::vector<int32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1352(int a, std::vector<int32_t>::iterator b);`),
        classes: parseClass(`void r4mp1352(int a, std::vector<int32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1352(int a, std::vector<int32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1352 生成结果为空');
      const expectSnippet0 = 'export function r4mp1352(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1352 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1352 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1352 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1353
  * @tc.name : h2dts_gen_1353
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1353', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1353(int a, std::vector<int64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1353(int a, std::vector<int64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1353(int a, std::vector<int64_t>::iterator b);`),
        classes: parseClass(`void r4mp1353(int a, std::vector<int64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1353(int a, std::vector<int64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1353 生成结果为空');
      const expectSnippet0 = 'export function r4mp1353(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1353 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1353 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1353 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1354
  * @tc.name : h2dts_gen_1354
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<unsigned>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1354', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1354(int a, std::vector<unsigned>::iterator b);`),
        unions: parseUnion(`void r4mp1354(int a, std::vector<unsigned>::iterator b);`),
        structs: parseStruct(`void r4mp1354(int a, std::vector<unsigned>::iterator b);`),
        classes: parseClass(`void r4mp1354(int a, std::vector<unsigned>::iterator b);`),
        funcs: parseFunction(`void r4mp1354(int a, std::vector<unsigned>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1354 生成结果为空');
      const expectSnippet0 = 'export function r4mp1354(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1354 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1354 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1355
  * @tc.name : h2dts_gen_1355
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<bool>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1355', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1355(int a, std::vector<bool>::iterator b);`),
        unions: parseUnion(`void r4mp1355(int a, std::vector<bool>::iterator b);`),
        structs: parseStruct(`void r4mp1355(int a, std::vector<bool>::iterator b);`),
        classes: parseClass(`void r4mp1355(int a, std::vector<bool>::iterator b);`),
        funcs: parseFunction(`void r4mp1355(int a, std::vector<bool>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1355 生成结果为空');
      const expectSnippet0 = 'export function r4mp1355(a: number, b: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1355 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1355 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1356
  * @tc.name : h2dts_gen_1356
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<char>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1356', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1356(int a, std::vector<char>::iterator b);`),
        unions: parseUnion(`void r4mp1356(int a, std::vector<char>::iterator b);`),
        structs: parseStruct(`void r4mp1356(int a, std::vector<char>::iterator b);`),
        classes: parseClass(`void r4mp1356(int a, std::vector<char>::iterator b);`),
        funcs: parseFunction(`void r4mp1356(int a, std::vector<char>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1356 生成结果为空');
      const expectSnippet0 = 'export function r4mp1356(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1356 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1356 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1356 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1357
  * @tc.name : h2dts_gen_1357
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<wchar_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1357', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1357(int a, std::vector<wchar_t>::iterator b);`),
        unions: parseUnion(`void r4mp1357(int a, std::vector<wchar_t>::iterator b);`),
        structs: parseStruct(`void r4mp1357(int a, std::vector<wchar_t>::iterator b);`),
        classes: parseClass(`void r4mp1357(int a, std::vector<wchar_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1357(int a, std::vector<wchar_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1357 生成结果为空');
      const expectSnippet0 = 'export function r4mp1357(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1357 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1357 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1358
  * @tc.name : h2dts_gen_1358
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<char8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1358', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1358(int a, std::vector<char8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1358(int a, std::vector<char8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1358(int a, std::vector<char8_t>::iterator b);`),
        classes: parseClass(`void r4mp1358(int a, std::vector<char8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1358(int a, std::vector<char8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1358 生成结果为空');
      const expectSnippet0 = 'export function r4mp1358(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1358 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1358 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1359
  * @tc.name : h2dts_gen_1359
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<char16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1359', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1359(int a, std::vector<char16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1359(int a, std::vector<char16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1359(int a, std::vector<char16_t>::iterator b);`),
        classes: parseClass(`void r4mp1359(int a, std::vector<char16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1359(int a, std::vector<char16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1359 生成结果为空');
      const expectSnippet0 = 'export function r4mp1359(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1359 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1359 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1360
  * @tc.name : h2dts_gen_1360
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<char32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1360', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1360(int a, std::vector<char32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1360(int a, std::vector<char32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1360(int a, std::vector<char32_t>::iterator b);`),
        classes: parseClass(`void r4mp1360(int a, std::vector<char32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1360(int a, std::vector<char32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1360 生成结果为空');
      const expectSnippet0 = 'export function r4mp1360(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1360 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1360 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1360 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1361
  * @tc.name : h2dts_gen_1361
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1361', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1361(int a, std::deque<int> b);`),
        unions: parseUnion(`void r4mp1361(int a, std::deque<int> b);`),
        structs: parseStruct(`void r4mp1361(int a, std::deque<int> b);`),
        classes: parseClass(`void r4mp1361(int a, std::deque<int> b);`),
        funcs: parseFunction(`void r4mp1361(int a, std::deque<int> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1361 生成结果为空');
      const expectSnippet0 = 'export function r4mp1361(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1361 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1361 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1361 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1362
  * @tc.name : h2dts_gen_1362
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1362', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1362(int a, std::deque<size_t> b);`),
        unions: parseUnion(`void r4mp1362(int a, std::deque<size_t> b);`),
        structs: parseStruct(`void r4mp1362(int a, std::deque<size_t> b);`),
        classes: parseClass(`void r4mp1362(int a, std::deque<size_t> b);`),
        funcs: parseFunction(`void r4mp1362(int a, std::deque<size_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1362 生成结果为空');
      const expectSnippet0 = 'export function r4mp1362(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1362 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1362 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1363
  * @tc.name : h2dts_gen_1363
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1363', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1363(int a, std::deque<double> b);`),
        unions: parseUnion(`void r4mp1363(int a, std::deque<double> b);`),
        structs: parseStruct(`void r4mp1363(int a, std::deque<double> b);`),
        classes: parseClass(`void r4mp1363(int a, std::deque<double> b);`),
        funcs: parseFunction(`void r4mp1363(int a, std::deque<double> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1363 生成结果为空');
      const expectSnippet0 = 'export function r4mp1363(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1363 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1363 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1363 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1364
  * @tc.name : h2dts_gen_1364
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1364', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1364(int a, std::deque<float> b);`),
        unions: parseUnion(`void r4mp1364(int a, std::deque<float> b);`),
        structs: parseStruct(`void r4mp1364(int a, std::deque<float> b);`),
        classes: parseClass(`void r4mp1364(int a, std::deque<float> b);`),
        funcs: parseFunction(`void r4mp1364(int a, std::deque<float> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1364 生成结果为空');
      const expectSnippet0 = 'export function r4mp1364(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1364 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1364 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1364 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1365
  * @tc.name : h2dts_gen_1365
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1365', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1365(int a, std::deque<long> b);`),
        unions: parseUnion(`void r4mp1365(int a, std::deque<long> b);`),
        structs: parseStruct(`void r4mp1365(int a, std::deque<long> b);`),
        classes: parseClass(`void r4mp1365(int a, std::deque<long> b);`),
        funcs: parseFunction(`void r4mp1365(int a, std::deque<long> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1365 生成结果为空');
      const expectSnippet0 = 'export function r4mp1365(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1365 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1365 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1365 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1366
  * @tc.name : h2dts_gen_1366
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1366', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1366(int a, std::deque<short> b);`),
        unions: parseUnion(`void r4mp1366(int a, std::deque<short> b);`),
        structs: parseStruct(`void r4mp1366(int a, std::deque<short> b);`),
        classes: parseClass(`void r4mp1366(int a, std::deque<short> b);`),
        funcs: parseFunction(`void r4mp1366(int a, std::deque<short> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1366 生成结果为空');
      const expectSnippet0 = 'export function r4mp1366(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1366 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1366 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1366 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1367
  * @tc.name : h2dts_gen_1367
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1367', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1367(int a, std::deque<uint8_t> b);`),
        unions: parseUnion(`void r4mp1367(int a, std::deque<uint8_t> b);`),
        structs: parseStruct(`void r4mp1367(int a, std::deque<uint8_t> b);`),
        classes: parseClass(`void r4mp1367(int a, std::deque<uint8_t> b);`),
        funcs: parseFunction(`void r4mp1367(int a, std::deque<uint8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1367 生成结果为空');
      const expectSnippet0 = 'export function r4mp1367(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1367 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1367 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1367 执行异常: ${String(err)}`);
    }
  });
});
