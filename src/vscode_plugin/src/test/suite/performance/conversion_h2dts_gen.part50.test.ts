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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part50.');

  /**
  * @tc.number : h2dts_gen_1613
  * @tc.name : h2dts_gen_1613
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1613', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1613(int a, std::priority_queue<int> b);`),
        unions: parseUnion(`void r4mp1613(int a, std::priority_queue<int> b);`),
        structs: parseStruct(`void r4mp1613(int a, std::priority_queue<int> b);`),
        classes: parseClass(`void r4mp1613(int a, std::priority_queue<int> b);`),
        funcs: parseFunction(`void r4mp1613(int a, std::priority_queue<int> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1613 生成结果为空');
      const expectSnippet0 = 'export function r4mp1613(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1613 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1613 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1613 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1614
  * @tc.name : h2dts_gen_1614
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1614', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1614(int a, std::priority_queue<size_t> b);`),
        unions: parseUnion(`void r4mp1614(int a, std::priority_queue<size_t> b);`),
        structs: parseStruct(`void r4mp1614(int a, std::priority_queue<size_t> b);`),
        classes: parseClass(`void r4mp1614(int a, std::priority_queue<size_t> b);`),
        funcs: parseFunction(`void r4mp1614(int a, std::priority_queue<size_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1614 生成结果为空');
      const expectSnippet0 = 'export function r4mp1614(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1614 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1614 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1614 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1615
  * @tc.name : h2dts_gen_1615
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1615', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1615(int a, std::priority_queue<double> b);`),
        unions: parseUnion(`void r4mp1615(int a, std::priority_queue<double> b);`),
        structs: parseStruct(`void r4mp1615(int a, std::priority_queue<double> b);`),
        classes: parseClass(`void r4mp1615(int a, std::priority_queue<double> b);`),
        funcs: parseFunction(`void r4mp1615(int a, std::priority_queue<double> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1615 生成结果为空');
      const expectSnippet0 = 'export function r4mp1615(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1615 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1615 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1615 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1616
  * @tc.name : h2dts_gen_1616
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1616', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1616(int a, std::priority_queue<float> b);`),
        unions: parseUnion(`void r4mp1616(int a, std::priority_queue<float> b);`),
        structs: parseStruct(`void r4mp1616(int a, std::priority_queue<float> b);`),
        classes: parseClass(`void r4mp1616(int a, std::priority_queue<float> b);`),
        funcs: parseFunction(`void r4mp1616(int a, std::priority_queue<float> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1616 生成结果为空');
      const expectSnippet0 = 'export function r4mp1616(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1616 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1616 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1616 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1617
  * @tc.name : h2dts_gen_1617
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1617', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1617(int a, std::priority_queue<long> b);`),
        unions: parseUnion(`void r4mp1617(int a, std::priority_queue<long> b);`),
        structs: parseStruct(`void r4mp1617(int a, std::priority_queue<long> b);`),
        classes: parseClass(`void r4mp1617(int a, std::priority_queue<long> b);`),
        funcs: parseFunction(`void r4mp1617(int a, std::priority_queue<long> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1617 生成结果为空');
      const expectSnippet0 = 'export function r4mp1617(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1617 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1617 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1617 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1618
  * @tc.name : h2dts_gen_1618
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1618', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1618(int a, std::priority_queue<short> b);`),
        unions: parseUnion(`void r4mp1618(int a, std::priority_queue<short> b);`),
        structs: parseStruct(`void r4mp1618(int a, std::priority_queue<short> b);`),
        classes: parseClass(`void r4mp1618(int a, std::priority_queue<short> b);`),
        funcs: parseFunction(`void r4mp1618(int a, std::priority_queue<short> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1618 生成结果为空');
      const expectSnippet0 = 'export function r4mp1618(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1618 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1618 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1618 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1619
  * @tc.name : h2dts_gen_1619
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1619', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1619(int a, std::priority_queue<uint8_t> b);`),
        unions: parseUnion(`void r4mp1619(int a, std::priority_queue<uint8_t> b);`),
        structs: parseStruct(`void r4mp1619(int a, std::priority_queue<uint8_t> b);`),
        classes: parseClass(`void r4mp1619(int a, std::priority_queue<uint8_t> b);`),
        funcs: parseFunction(`void r4mp1619(int a, std::priority_queue<uint8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1619 生成结果为空');
      const expectSnippet0 = 'export function r4mp1619(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1619 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1619 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1619 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1620
  * @tc.name : h2dts_gen_1620
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1620', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1620(int a, std::priority_queue<uint16_t> b);`),
        unions: parseUnion(`void r4mp1620(int a, std::priority_queue<uint16_t> b);`),
        structs: parseStruct(`void r4mp1620(int a, std::priority_queue<uint16_t> b);`),
        classes: parseClass(`void r4mp1620(int a, std::priority_queue<uint16_t> b);`),
        funcs: parseFunction(`void r4mp1620(int a, std::priority_queue<uint16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1620 生成结果为空');
      const expectSnippet0 = 'export function r4mp1620(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1620 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1620 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1620 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1621
  * @tc.name : h2dts_gen_1621
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1621', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1621(int a, std::priority_queue<uint32_t> b);`),
        unions: parseUnion(`void r4mp1621(int a, std::priority_queue<uint32_t> b);`),
        structs: parseStruct(`void r4mp1621(int a, std::priority_queue<uint32_t> b);`),
        classes: parseClass(`void r4mp1621(int a, std::priority_queue<uint32_t> b);`),
        funcs: parseFunction(`void r4mp1621(int a, std::priority_queue<uint32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1621 生成结果为空');
      const expectSnippet0 = 'export function r4mp1621(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1621 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1621 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1621 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1622
  * @tc.name : h2dts_gen_1622
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1622', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1622(int a, std::priority_queue<uint64_t> b);`),
        unions: parseUnion(`void r4mp1622(int a, std::priority_queue<uint64_t> b);`),
        structs: parseStruct(`void r4mp1622(int a, std::priority_queue<uint64_t> b);`),
        classes: parseClass(`void r4mp1622(int a, std::priority_queue<uint64_t> b);`),
        funcs: parseFunction(`void r4mp1622(int a, std::priority_queue<uint64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1622 生成结果为空');
      const expectSnippet0 = 'export function r4mp1622(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1622 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1622 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1622 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1623
  * @tc.name : h2dts_gen_1623
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1623', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1623(int a, std::priority_queue<int8_t> b);`),
        unions: parseUnion(`void r4mp1623(int a, std::priority_queue<int8_t> b);`),
        structs: parseStruct(`void r4mp1623(int a, std::priority_queue<int8_t> b);`),
        classes: parseClass(`void r4mp1623(int a, std::priority_queue<int8_t> b);`),
        funcs: parseFunction(`void r4mp1623(int a, std::priority_queue<int8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1623 生成结果为空');
      const expectSnippet0 = 'export function r4mp1623(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1623 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1623 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1623 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1624
  * @tc.name : h2dts_gen_1624
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1624', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1624(int a, std::priority_queue<int16_t> b);`),
        unions: parseUnion(`void r4mp1624(int a, std::priority_queue<int16_t> b);`),
        structs: parseStruct(`void r4mp1624(int a, std::priority_queue<int16_t> b);`),
        classes: parseClass(`void r4mp1624(int a, std::priority_queue<int16_t> b);`),
        funcs: parseFunction(`void r4mp1624(int a, std::priority_queue<int16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1624 生成结果为空');
      const expectSnippet0 = 'export function r4mp1624(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1624 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1624 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1624 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1625
  * @tc.name : h2dts_gen_1625
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1625', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1625(int a, std::priority_queue<int32_t> b);`),
        unions: parseUnion(`void r4mp1625(int a, std::priority_queue<int32_t> b);`),
        structs: parseStruct(`void r4mp1625(int a, std::priority_queue<int32_t> b);`),
        classes: parseClass(`void r4mp1625(int a, std::priority_queue<int32_t> b);`),
        funcs: parseFunction(`void r4mp1625(int a, std::priority_queue<int32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1625 生成结果为空');
      const expectSnippet0 = 'export function r4mp1625(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1625 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1625 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1625 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1626
  * @tc.name : h2dts_gen_1626
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1626', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1626(int a, std::priority_queue<int64_t> b);`),
        unions: parseUnion(`void r4mp1626(int a, std::priority_queue<int64_t> b);`),
        structs: parseStruct(`void r4mp1626(int a, std::priority_queue<int64_t> b);`),
        classes: parseClass(`void r4mp1626(int a, std::priority_queue<int64_t> b);`),
        funcs: parseFunction(`void r4mp1626(int a, std::priority_queue<int64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1626 生成结果为空');
      const expectSnippet0 = 'export function r4mp1626(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1626 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1626 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1626 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1627
  * @tc.name : h2dts_gen_1627
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1627', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1627(int a, std::priority_queue<unsigned> b);`),
        unions: parseUnion(`void r4mp1627(int a, std::priority_queue<unsigned> b);`),
        structs: parseStruct(`void r4mp1627(int a, std::priority_queue<unsigned> b);`),
        classes: parseClass(`void r4mp1627(int a, std::priority_queue<unsigned> b);`),
        funcs: parseFunction(`void r4mp1627(int a, std::priority_queue<unsigned> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1627 生成结果为空');
      const expectSnippet0 = 'export function r4mp1627(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1627 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1627 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1627 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1628
  * @tc.name : h2dts_gen_1628
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1628', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1628(int a, std::priority_queue<bool> b);`),
        unions: parseUnion(`void r4mp1628(int a, std::priority_queue<bool> b);`),
        structs: parseStruct(`void r4mp1628(int a, std::priority_queue<bool> b);`),
        classes: parseClass(`void r4mp1628(int a, std::priority_queue<bool> b);`),
        funcs: parseFunction(`void r4mp1628(int a, std::priority_queue<bool> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1628 生成结果为空');
      const expectSnippet0 = 'export function r4mp1628(a: number, b: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1628 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1628 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1628 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1629
  * @tc.name : h2dts_gen_1629
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1629', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1629(int a, std::priority_queue<char> b);`),
        unions: parseUnion(`void r4mp1629(int a, std::priority_queue<char> b);`),
        structs: parseStruct(`void r4mp1629(int a, std::priority_queue<char> b);`),
        classes: parseClass(`void r4mp1629(int a, std::priority_queue<char> b);`),
        funcs: parseFunction(`void r4mp1629(int a, std::priority_queue<char> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1629 生成结果为空');
      const expectSnippet0 = 'export function r4mp1629(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1629 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1629 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1629 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1630
  * @tc.name : h2dts_gen_1630
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1630', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1630(int a, std::priority_queue<wchar_t> b);`),
        unions: parseUnion(`void r4mp1630(int a, std::priority_queue<wchar_t> b);`),
        structs: parseStruct(`void r4mp1630(int a, std::priority_queue<wchar_t> b);`),
        classes: parseClass(`void r4mp1630(int a, std::priority_queue<wchar_t> b);`),
        funcs: parseFunction(`void r4mp1630(int a, std::priority_queue<wchar_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1630 生成结果为空');
      const expectSnippet0 = 'export function r4mp1630(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1630 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1630 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1630 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1631
  * @tc.name : h2dts_gen_1631
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1631', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1631(int a, std::priority_queue<char8_t> b);`),
        unions: parseUnion(`void r4mp1631(int a, std::priority_queue<char8_t> b);`),
        structs: parseStruct(`void r4mp1631(int a, std::priority_queue<char8_t> b);`),
        classes: parseClass(`void r4mp1631(int a, std::priority_queue<char8_t> b);`),
        funcs: parseFunction(`void r4mp1631(int a, std::priority_queue<char8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1631 生成结果为空');
      const expectSnippet0 = 'export function r4mp1631(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1631 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1631 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1631 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1632
  * @tc.name : h2dts_gen_1632
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1632', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1632(int a, std::priority_queue<char16_t> b);`),
        unions: parseUnion(`void r4mp1632(int a, std::priority_queue<char16_t> b);`),
        structs: parseStruct(`void r4mp1632(int a, std::priority_queue<char16_t> b);`),
        classes: parseClass(`void r4mp1632(int a, std::priority_queue<char16_t> b);`),
        funcs: parseFunction(`void r4mp1632(int a, std::priority_queue<char16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1632 生成结果为空');
      const expectSnippet0 = 'export function r4mp1632(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1632 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1632 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1632 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1633
  * @tc.name : h2dts_gen_1633
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1633', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1633(int a, std::priority_queue<char32_t> b);`),
        unions: parseUnion(`void r4mp1633(int a, std::priority_queue<char32_t> b);`),
        structs: parseStruct(`void r4mp1633(int a, std::priority_queue<char32_t> b);`),
        classes: parseClass(`void r4mp1633(int a, std::priority_queue<char32_t> b);`),
        funcs: parseFunction(`void r4mp1633(int a, std::priority_queue<char32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1633 生成结果为空');
      const expectSnippet0 = 'export function r4mp1633(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1633 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1633 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1633 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1634
  * @tc.name : h2dts_gen_1634
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1634', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1634(int a, std::priority_queue<int>::iterator b);`),
        unions: parseUnion(`void r4mp1634(int a, std::priority_queue<int>::iterator b);`),
        structs: parseStruct(`void r4mp1634(int a, std::priority_queue<int>::iterator b);`),
        classes: parseClass(`void r4mp1634(int a, std::priority_queue<int>::iterator b);`),
        funcs: parseFunction(`void r4mp1634(int a, std::priority_queue<int>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1634 生成结果为空');
      const expectSnippet0 = 'export function r4mp1634(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1634 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1634 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1634 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1635
  * @tc.name : h2dts_gen_1635
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<size_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1635', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1635(int a, std::priority_queue<size_t>::iterator b);`),
        unions: parseUnion(`void r4mp1635(int a, std::priority_queue<size_t>::iterator b);`),
        structs: parseStruct(`void r4mp1635(int a, std::priority_queue<size_t>::iterator b);`),
        classes: parseClass(`void r4mp1635(int a, std::priority_queue<size_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1635(int a, std::priority_queue<size_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1635 生成结果为空');
      const expectSnippet0 = 'export function r4mp1635(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1635 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1635 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1635 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1636
  * @tc.name : h2dts_gen_1636
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<double>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1636', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1636(int a, std::priority_queue<double>::iterator b);`),
        unions: parseUnion(`void r4mp1636(int a, std::priority_queue<double>::iterator b);`),
        structs: parseStruct(`void r4mp1636(int a, std::priority_queue<double>::iterator b);`),
        classes: parseClass(`void r4mp1636(int a, std::priority_queue<double>::iterator b);`),
        funcs: parseFunction(`void r4mp1636(int a, std::priority_queue<double>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1636 生成结果为空');
      const expectSnippet0 = 'export function r4mp1636(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1636 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1636 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1636 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1637
  * @tc.name : h2dts_gen_1637
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<float>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1637', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1637(int a, std::priority_queue<float>::iterator b);`),
        unions: parseUnion(`void r4mp1637(int a, std::priority_queue<float>::iterator b);`),
        structs: parseStruct(`void r4mp1637(int a, std::priority_queue<float>::iterator b);`),
        classes: parseClass(`void r4mp1637(int a, std::priority_queue<float>::iterator b);`),
        funcs: parseFunction(`void r4mp1637(int a, std::priority_queue<float>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1637 生成结果为空');
      const expectSnippet0 = 'export function r4mp1637(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1637 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1637 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1637 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1638
  * @tc.name : h2dts_gen_1638
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<long>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1638', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1638(int a, std::priority_queue<long>::iterator b);`),
        unions: parseUnion(`void r4mp1638(int a, std::priority_queue<long>::iterator b);`),
        structs: parseStruct(`void r4mp1638(int a, std::priority_queue<long>::iterator b);`),
        classes: parseClass(`void r4mp1638(int a, std::priority_queue<long>::iterator b);`),
        funcs: parseFunction(`void r4mp1638(int a, std::priority_queue<long>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1638 生成结果为空');
      const expectSnippet0 = 'export function r4mp1638(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1638 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1638 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1638 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1639
  * @tc.name : h2dts_gen_1639
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<short>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1639', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1639(int a, std::priority_queue<short>::iterator b);`),
        unions: parseUnion(`void r4mp1639(int a, std::priority_queue<short>::iterator b);`),
        structs: parseStruct(`void r4mp1639(int a, std::priority_queue<short>::iterator b);`),
        classes: parseClass(`void r4mp1639(int a, std::priority_queue<short>::iterator b);`),
        funcs: parseFunction(`void r4mp1639(int a, std::priority_queue<short>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1639 生成结果为空');
      const expectSnippet0 = 'export function r4mp1639(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1639 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1639 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1639 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1640
  * @tc.name : h2dts_gen_1640
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<uint8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1640', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1640(int a, std::priority_queue<uint8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1640(int a, std::priority_queue<uint8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1640(int a, std::priority_queue<uint8_t>::iterator b);`),
        classes: parseClass(`void r4mp1640(int a, std::priority_queue<uint8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1640(int a, std::priority_queue<uint8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1640 生成结果为空');
      const expectSnippet0 = 'export function r4mp1640(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1640 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1640 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1640 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1641
  * @tc.name : h2dts_gen_1641
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<uint16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1641', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1641(int a, std::priority_queue<uint16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1641(int a, std::priority_queue<uint16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1641(int a, std::priority_queue<uint16_t>::iterator b);`),
        classes: parseClass(`void r4mp1641(int a, std::priority_queue<uint16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1641(int a, std::priority_queue<uint16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1641 生成结果为空');
      const expectSnippet0 = 'export function r4mp1641(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1641 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1641 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1641 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1642
  * @tc.name : h2dts_gen_1642
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<uint32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1642', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1642(int a, std::priority_queue<uint32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1642(int a, std::priority_queue<uint32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1642(int a, std::priority_queue<uint32_t>::iterator b);`),
        classes: parseClass(`void r4mp1642(int a, std::priority_queue<uint32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1642(int a, std::priority_queue<uint32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1642 生成结果为空');
      const expectSnippet0 = 'export function r4mp1642(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1642 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1642 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1642 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1643
  * @tc.name : h2dts_gen_1643
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<uint64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1643', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1643(int a, std::priority_queue<uint64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1643(int a, std::priority_queue<uint64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1643(int a, std::priority_queue<uint64_t>::iterator b);`),
        classes: parseClass(`void r4mp1643(int a, std::priority_queue<uint64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1643(int a, std::priority_queue<uint64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1643 生成结果为空');
      const expectSnippet0 = 'export function r4mp1643(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1643 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1643 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1643 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1644
  * @tc.name : h2dts_gen_1644
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1644', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1644(int a, std::priority_queue<int8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1644(int a, std::priority_queue<int8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1644(int a, std::priority_queue<int8_t>::iterator b);`),
        classes: parseClass(`void r4mp1644(int a, std::priority_queue<int8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1644(int a, std::priority_queue<int8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1644 生成结果为空');
      const expectSnippet0 = 'export function r4mp1644(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1644 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1644 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1644 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1645
  * @tc.name : h2dts_gen_1645
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1645', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1645(int a, std::priority_queue<int16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1645(int a, std::priority_queue<int16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1645(int a, std::priority_queue<int16_t>::iterator b);`),
        classes: parseClass(`void r4mp1645(int a, std::priority_queue<int16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1645(int a, std::priority_queue<int16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1645 生成结果为空');
      const expectSnippet0 = 'export function r4mp1645(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1645 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1645 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1645 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1646
  * @tc.name : h2dts_gen_1646
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1646', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1646(int a, std::priority_queue<int32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1646(int a, std::priority_queue<int32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1646(int a, std::priority_queue<int32_t>::iterator b);`),
        classes: parseClass(`void r4mp1646(int a, std::priority_queue<int32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1646(int a, std::priority_queue<int32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1646 生成结果为空');
      const expectSnippet0 = 'export function r4mp1646(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1646 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1646 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1646 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1647
  * @tc.name : h2dts_gen_1647
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::priority_queue<int64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1647', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1647(int a, std::priority_queue<int64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1647(int a, std::priority_queue<int64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1647(int a, std::priority_queue<int64_t>::iterator b);`),
        classes: parseClass(`void r4mp1647(int a, std::priority_queue<int64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1647(int a, std::priority_queue<int64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1647 生成结果为空');
      const expectSnippet0 = 'export function r4mp1647(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1647 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1647 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1647 执行异常: ${String(err)}`);
    }
  });
});
