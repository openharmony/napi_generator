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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part47.');

  /**
  * @tc.number : h2dts_gen_1508
  * @tc.name : h2dts_gen_1508
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1508', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1508(int a, std::stack<int>::iterator b);`),
        unions: parseUnion(`void r4mp1508(int a, std::stack<int>::iterator b);`),
        structs: parseStruct(`void r4mp1508(int a, std::stack<int>::iterator b);`),
        classes: parseClass(`void r4mp1508(int a, std::stack<int>::iterator b);`),
        funcs: parseFunction(`void r4mp1508(int a, std::stack<int>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1508 生成结果为空');
      const expectSnippet0 = 'export function r4mp1508(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1508 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1508 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1508 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1509
  * @tc.name : h2dts_gen_1509
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<size_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1509', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1509(int a, std::stack<size_t>::iterator b);`),
        unions: parseUnion(`void r4mp1509(int a, std::stack<size_t>::iterator b);`),
        structs: parseStruct(`void r4mp1509(int a, std::stack<size_t>::iterator b);`),
        classes: parseClass(`void r4mp1509(int a, std::stack<size_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1509(int a, std::stack<size_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1509 生成结果为空');
      const expectSnippet0 = 'export function r4mp1509(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1509 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1509 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1509 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1510
  * @tc.name : h2dts_gen_1510
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<double>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1510', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1510(int a, std::stack<double>::iterator b);`),
        unions: parseUnion(`void r4mp1510(int a, std::stack<double>::iterator b);`),
        structs: parseStruct(`void r4mp1510(int a, std::stack<double>::iterator b);`),
        classes: parseClass(`void r4mp1510(int a, std::stack<double>::iterator b);`),
        funcs: parseFunction(`void r4mp1510(int a, std::stack<double>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1510 生成结果为空');
      const expectSnippet0 = 'export function r4mp1510(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1510 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1510 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1510 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1511
  * @tc.name : h2dts_gen_1511
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<float>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1511', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1511(int a, std::stack<float>::iterator b);`),
        unions: parseUnion(`void r4mp1511(int a, std::stack<float>::iterator b);`),
        structs: parseStruct(`void r4mp1511(int a, std::stack<float>::iterator b);`),
        classes: parseClass(`void r4mp1511(int a, std::stack<float>::iterator b);`),
        funcs: parseFunction(`void r4mp1511(int a, std::stack<float>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1511 生成结果为空');
      const expectSnippet0 = 'export function r4mp1511(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1511 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1511 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1511 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1512
  * @tc.name : h2dts_gen_1512
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<long>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1512', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1512(int a, std::stack<long>::iterator b);`),
        unions: parseUnion(`void r4mp1512(int a, std::stack<long>::iterator b);`),
        structs: parseStruct(`void r4mp1512(int a, std::stack<long>::iterator b);`),
        classes: parseClass(`void r4mp1512(int a, std::stack<long>::iterator b);`),
        funcs: parseFunction(`void r4mp1512(int a, std::stack<long>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1512 生成结果为空');
      const expectSnippet0 = 'export function r4mp1512(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1512 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1512 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1512 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1513
  * @tc.name : h2dts_gen_1513
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<short>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1513', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1513(int a, std::stack<short>::iterator b);`),
        unions: parseUnion(`void r4mp1513(int a, std::stack<short>::iterator b);`),
        structs: parseStruct(`void r4mp1513(int a, std::stack<short>::iterator b);`),
        classes: parseClass(`void r4mp1513(int a, std::stack<short>::iterator b);`),
        funcs: parseFunction(`void r4mp1513(int a, std::stack<short>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1513 生成结果为空');
      const expectSnippet0 = 'export function r4mp1513(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1513 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1513 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1513 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1514
  * @tc.name : h2dts_gen_1514
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<uint8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1514', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1514(int a, std::stack<uint8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1514(int a, std::stack<uint8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1514(int a, std::stack<uint8_t>::iterator b);`),
        classes: parseClass(`void r4mp1514(int a, std::stack<uint8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1514(int a, std::stack<uint8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1514 生成结果为空');
      const expectSnippet0 = 'export function r4mp1514(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1514 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1514 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1514 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1515
  * @tc.name : h2dts_gen_1515
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<uint16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1515', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1515(int a, std::stack<uint16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1515(int a, std::stack<uint16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1515(int a, std::stack<uint16_t>::iterator b);`),
        classes: parseClass(`void r4mp1515(int a, std::stack<uint16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1515(int a, std::stack<uint16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1515 生成结果为空');
      const expectSnippet0 = 'export function r4mp1515(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1515 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1515 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1515 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1516
  * @tc.name : h2dts_gen_1516
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<uint32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1516', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1516(int a, std::stack<uint32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1516(int a, std::stack<uint32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1516(int a, std::stack<uint32_t>::iterator b);`),
        classes: parseClass(`void r4mp1516(int a, std::stack<uint32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1516(int a, std::stack<uint32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1516 生成结果为空');
      const expectSnippet0 = 'export function r4mp1516(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1516 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1516 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1516 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1517
  * @tc.name : h2dts_gen_1517
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<uint64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1517', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1517(int a, std::stack<uint64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1517(int a, std::stack<uint64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1517(int a, std::stack<uint64_t>::iterator b);`),
        classes: parseClass(`void r4mp1517(int a, std::stack<uint64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1517(int a, std::stack<uint64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1517 生成结果为空');
      const expectSnippet0 = 'export function r4mp1517(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1517 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1517 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1517 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1518
  * @tc.name : h2dts_gen_1518
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1518', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1518(int a, std::stack<int8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1518(int a, std::stack<int8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1518(int a, std::stack<int8_t>::iterator b);`),
        classes: parseClass(`void r4mp1518(int a, std::stack<int8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1518(int a, std::stack<int8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1518 生成结果为空');
      const expectSnippet0 = 'export function r4mp1518(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1518 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1518 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1518 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1519
  * @tc.name : h2dts_gen_1519
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1519', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1519(int a, std::stack<int16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1519(int a, std::stack<int16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1519(int a, std::stack<int16_t>::iterator b);`),
        classes: parseClass(`void r4mp1519(int a, std::stack<int16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1519(int a, std::stack<int16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1519 生成结果为空');
      const expectSnippet0 = 'export function r4mp1519(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1519 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1519 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1519 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1520
  * @tc.name : h2dts_gen_1520
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1520', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1520(int a, std::stack<int32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1520(int a, std::stack<int32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1520(int a, std::stack<int32_t>::iterator b);`),
        classes: parseClass(`void r4mp1520(int a, std::stack<int32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1520(int a, std::stack<int32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1520 生成结果为空');
      const expectSnippet0 = 'export function r4mp1520(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1520 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1520 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1520 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1521
  * @tc.name : h2dts_gen_1521
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1521', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1521(int a, std::stack<int64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1521(int a, std::stack<int64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1521(int a, std::stack<int64_t>::iterator b);`),
        classes: parseClass(`void r4mp1521(int a, std::stack<int64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1521(int a, std::stack<int64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1521 生成结果为空');
      const expectSnippet0 = 'export function r4mp1521(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1521 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1521 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1521 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1522
  * @tc.name : h2dts_gen_1522
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<unsigned>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1522', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1522(int a, std::stack<unsigned>::iterator b);`),
        unions: parseUnion(`void r4mp1522(int a, std::stack<unsigned>::iterator b);`),
        structs: parseStruct(`void r4mp1522(int a, std::stack<unsigned>::iterator b);`),
        classes: parseClass(`void r4mp1522(int a, std::stack<unsigned>::iterator b);`),
        funcs: parseFunction(`void r4mp1522(int a, std::stack<unsigned>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1522 生成结果为空');
      const expectSnippet0 = 'export function r4mp1522(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1522 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1522 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1522 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1523
  * @tc.name : h2dts_gen_1523
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<bool>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1523', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1523(int a, std::stack<bool>::iterator b);`),
        unions: parseUnion(`void r4mp1523(int a, std::stack<bool>::iterator b);`),
        structs: parseStruct(`void r4mp1523(int a, std::stack<bool>::iterator b);`),
        classes: parseClass(`void r4mp1523(int a, std::stack<bool>::iterator b);`),
        funcs: parseFunction(`void r4mp1523(int a, std::stack<bool>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1523 生成结果为空');
      const expectSnippet0 = 'export function r4mp1523(a: number, b: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1523 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1523 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1523 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1524
  * @tc.name : h2dts_gen_1524
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<char>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1524', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1524(int a, std::stack<char>::iterator b);`),
        unions: parseUnion(`void r4mp1524(int a, std::stack<char>::iterator b);`),
        structs: parseStruct(`void r4mp1524(int a, std::stack<char>::iterator b);`),
        classes: parseClass(`void r4mp1524(int a, std::stack<char>::iterator b);`),
        funcs: parseFunction(`void r4mp1524(int a, std::stack<char>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1524 生成结果为空');
      const expectSnippet0 = 'export function r4mp1524(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1524 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1524 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1524 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1525
  * @tc.name : h2dts_gen_1525
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<wchar_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1525', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1525(int a, std::stack<wchar_t>::iterator b);`),
        unions: parseUnion(`void r4mp1525(int a, std::stack<wchar_t>::iterator b);`),
        structs: parseStruct(`void r4mp1525(int a, std::stack<wchar_t>::iterator b);`),
        classes: parseClass(`void r4mp1525(int a, std::stack<wchar_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1525(int a, std::stack<wchar_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1525 生成结果为空');
      const expectSnippet0 = 'export function r4mp1525(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1525 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1525 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1525 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1526
  * @tc.name : h2dts_gen_1526
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<char8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1526', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1526(int a, std::stack<char8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1526(int a, std::stack<char8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1526(int a, std::stack<char8_t>::iterator b);`),
        classes: parseClass(`void r4mp1526(int a, std::stack<char8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1526(int a, std::stack<char8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1526 生成结果为空');
      const expectSnippet0 = 'export function r4mp1526(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1526 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1526 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1527
  * @tc.name : h2dts_gen_1527
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<char16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1527', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1527(int a, std::stack<char16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1527(int a, std::stack<char16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1527(int a, std::stack<char16_t>::iterator b);`),
        classes: parseClass(`void r4mp1527(int a, std::stack<char16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1527(int a, std::stack<char16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1527 生成结果为空');
      const expectSnippet0 = 'export function r4mp1527(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1527 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1527 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1528
  * @tc.name : h2dts_gen_1528
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<char32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1528', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1528(int a, std::stack<char32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1528(int a, std::stack<char32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1528(int a, std::stack<char32_t>::iterator b);`),
        classes: parseClass(`void r4mp1528(int a, std::stack<char32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1528(int a, std::stack<char32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1528 生成结果为空');
      const expectSnippet0 = 'export function r4mp1528(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1528 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1528 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1529
  * @tc.name : h2dts_gen_1529
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1529', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1529(int a, std::queue<int> b);`),
        unions: parseUnion(`void r4mp1529(int a, std::queue<int> b);`),
        structs: parseStruct(`void r4mp1529(int a, std::queue<int> b);`),
        classes: parseClass(`void r4mp1529(int a, std::queue<int> b);`),
        funcs: parseFunction(`void r4mp1529(int a, std::queue<int> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1529 生成结果为空');
      const expectSnippet0 = 'export function r4mp1529(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1529 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1529 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1529 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1530
  * @tc.name : h2dts_gen_1530
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1530', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1530(int a, std::queue<size_t> b);`),
        unions: parseUnion(`void r4mp1530(int a, std::queue<size_t> b);`),
        structs: parseStruct(`void r4mp1530(int a, std::queue<size_t> b);`),
        classes: parseClass(`void r4mp1530(int a, std::queue<size_t> b);`),
        funcs: parseFunction(`void r4mp1530(int a, std::queue<size_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1530 生成结果为空');
      const expectSnippet0 = 'export function r4mp1530(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1530 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1530 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1531
  * @tc.name : h2dts_gen_1531
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1531', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1531(int a, std::queue<double> b);`),
        unions: parseUnion(`void r4mp1531(int a, std::queue<double> b);`),
        structs: parseStruct(`void r4mp1531(int a, std::queue<double> b);`),
        classes: parseClass(`void r4mp1531(int a, std::queue<double> b);`),
        funcs: parseFunction(`void r4mp1531(int a, std::queue<double> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1531 生成结果为空');
      const expectSnippet0 = 'export function r4mp1531(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1531 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1531 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1531 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1532
  * @tc.name : h2dts_gen_1532
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1532', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1532(int a, std::queue<float> b);`),
        unions: parseUnion(`void r4mp1532(int a, std::queue<float> b);`),
        structs: parseStruct(`void r4mp1532(int a, std::queue<float> b);`),
        classes: parseClass(`void r4mp1532(int a, std::queue<float> b);`),
        funcs: parseFunction(`void r4mp1532(int a, std::queue<float> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1532 生成结果为空');
      const expectSnippet0 = 'export function r4mp1532(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1532 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1532 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1533
  * @tc.name : h2dts_gen_1533
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1533', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1533(int a, std::queue<long> b);`),
        unions: parseUnion(`void r4mp1533(int a, std::queue<long> b);`),
        structs: parseStruct(`void r4mp1533(int a, std::queue<long> b);`),
        classes: parseClass(`void r4mp1533(int a, std::queue<long> b);`),
        funcs: parseFunction(`void r4mp1533(int a, std::queue<long> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1533 生成结果为空');
      const expectSnippet0 = 'export function r4mp1533(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1533 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1533 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1533 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1534
  * @tc.name : h2dts_gen_1534
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1534', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1534(int a, std::queue<short> b);`),
        unions: parseUnion(`void r4mp1534(int a, std::queue<short> b);`),
        structs: parseStruct(`void r4mp1534(int a, std::queue<short> b);`),
        classes: parseClass(`void r4mp1534(int a, std::queue<short> b);`),
        funcs: parseFunction(`void r4mp1534(int a, std::queue<short> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1534 生成结果为空');
      const expectSnippet0 = 'export function r4mp1534(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1534 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1534 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1534 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1535
  * @tc.name : h2dts_gen_1535
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1535', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1535(int a, std::queue<uint8_t> b);`),
        unions: parseUnion(`void r4mp1535(int a, std::queue<uint8_t> b);`),
        structs: parseStruct(`void r4mp1535(int a, std::queue<uint8_t> b);`),
        classes: parseClass(`void r4mp1535(int a, std::queue<uint8_t> b);`),
        funcs: parseFunction(`void r4mp1535(int a, std::queue<uint8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1535 生成结果为空');
      const expectSnippet0 = 'export function r4mp1535(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1535 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1535 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1536
  * @tc.name : h2dts_gen_1536
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1536', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1536(int a, std::queue<uint16_t> b);`),
        unions: parseUnion(`void r4mp1536(int a, std::queue<uint16_t> b);`),
        structs: parseStruct(`void r4mp1536(int a, std::queue<uint16_t> b);`),
        classes: parseClass(`void r4mp1536(int a, std::queue<uint16_t> b);`),
        funcs: parseFunction(`void r4mp1536(int a, std::queue<uint16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1536 生成结果为空');
      const expectSnippet0 = 'export function r4mp1536(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1536 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1536 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1537
  * @tc.name : h2dts_gen_1537
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1537', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1537(int a, std::queue<uint32_t> b);`),
        unions: parseUnion(`void r4mp1537(int a, std::queue<uint32_t> b);`),
        structs: parseStruct(`void r4mp1537(int a, std::queue<uint32_t> b);`),
        classes: parseClass(`void r4mp1537(int a, std::queue<uint32_t> b);`),
        funcs: parseFunction(`void r4mp1537(int a, std::queue<uint32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1537 生成结果为空');
      const expectSnippet0 = 'export function r4mp1537(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1537 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1537 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1538
  * @tc.name : h2dts_gen_1538
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1538', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1538(int a, std::queue<uint64_t> b);`),
        unions: parseUnion(`void r4mp1538(int a, std::queue<uint64_t> b);`),
        structs: parseStruct(`void r4mp1538(int a, std::queue<uint64_t> b);`),
        classes: parseClass(`void r4mp1538(int a, std::queue<uint64_t> b);`),
        funcs: parseFunction(`void r4mp1538(int a, std::queue<uint64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1538 生成结果为空');
      const expectSnippet0 = 'export function r4mp1538(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1538 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1538 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1539
  * @tc.name : h2dts_gen_1539
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1539', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1539(int a, std::queue<int8_t> b);`),
        unions: parseUnion(`void r4mp1539(int a, std::queue<int8_t> b);`),
        structs: parseStruct(`void r4mp1539(int a, std::queue<int8_t> b);`),
        classes: parseClass(`void r4mp1539(int a, std::queue<int8_t> b);`),
        funcs: parseFunction(`void r4mp1539(int a, std::queue<int8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1539 生成结果为空');
      const expectSnippet0 = 'export function r4mp1539(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1539 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1539 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1540
  * @tc.name : h2dts_gen_1540
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1540', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1540(int a, std::queue<int16_t> b);`),
        unions: parseUnion(`void r4mp1540(int a, std::queue<int16_t> b);`),
        structs: parseStruct(`void r4mp1540(int a, std::queue<int16_t> b);`),
        classes: parseClass(`void r4mp1540(int a, std::queue<int16_t> b);`),
        funcs: parseFunction(`void r4mp1540(int a, std::queue<int16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1540 生成结果为空');
      const expectSnippet0 = 'export function r4mp1540(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1540 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1540 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1541
  * @tc.name : h2dts_gen_1541
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1541', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1541(int a, std::queue<int32_t> b);`),
        unions: parseUnion(`void r4mp1541(int a, std::queue<int32_t> b);`),
        structs: parseStruct(`void r4mp1541(int a, std::queue<int32_t> b);`),
        classes: parseClass(`void r4mp1541(int a, std::queue<int32_t> b);`),
        funcs: parseFunction(`void r4mp1541(int a, std::queue<int32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1541 生成结果为空');
      const expectSnippet0 = 'export function r4mp1541(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1541 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1541 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1542
  * @tc.name : h2dts_gen_1542
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::queue<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1542', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1542(int a, std::queue<int64_t> b);`),
        unions: parseUnion(`void r4mp1542(int a, std::queue<int64_t> b);`),
        structs: parseStruct(`void r4mp1542(int a, std::queue<int64_t> b);`),
        classes: parseClass(`void r4mp1542(int a, std::queue<int64_t> b);`),
        funcs: parseFunction(`void r4mp1542(int a, std::queue<int64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1542 生成结果为空');
      const expectSnippet0 = 'export function r4mp1542(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1542 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1542 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1542 执行异常: ${String(err)}`);
    }
  });
});
