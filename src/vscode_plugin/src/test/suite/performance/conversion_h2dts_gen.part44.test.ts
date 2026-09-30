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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part44.');

  /**
  * @tc.number : h2dts_gen_1403
  * @tc.name : h2dts_gen_1403
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1403', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1403(int a, std::list<int> b);`),
        unions: parseUnion(`void r4mp1403(int a, std::list<int> b);`),
        structs: parseStruct(`void r4mp1403(int a, std::list<int> b);`),
        classes: parseClass(`void r4mp1403(int a, std::list<int> b);`),
        funcs: parseFunction(`void r4mp1403(int a, std::list<int> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1403 生成结果为空');
      const expectSnippet0 = 'export function r4mp1403(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1403 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1403 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1403 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1404
  * @tc.name : h2dts_gen_1404
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1404', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1404(int a, std::list<size_t> b);`),
        unions: parseUnion(`void r4mp1404(int a, std::list<size_t> b);`),
        structs: parseStruct(`void r4mp1404(int a, std::list<size_t> b);`),
        classes: parseClass(`void r4mp1404(int a, std::list<size_t> b);`),
        funcs: parseFunction(`void r4mp1404(int a, std::list<size_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1404 生成结果为空');
      const expectSnippet0 = 'export function r4mp1404(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1404 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1404 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1404 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1405
  * @tc.name : h2dts_gen_1405
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1405', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1405(int a, std::list<double> b);`),
        unions: parseUnion(`void r4mp1405(int a, std::list<double> b);`),
        structs: parseStruct(`void r4mp1405(int a, std::list<double> b);`),
        classes: parseClass(`void r4mp1405(int a, std::list<double> b);`),
        funcs: parseFunction(`void r4mp1405(int a, std::list<double> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1405 生成结果为空');
      const expectSnippet0 = 'export function r4mp1405(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1405 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1405 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1405 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1406
  * @tc.name : h2dts_gen_1406
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1406', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1406(int a, std::list<float> b);`),
        unions: parseUnion(`void r4mp1406(int a, std::list<float> b);`),
        structs: parseStruct(`void r4mp1406(int a, std::list<float> b);`),
        classes: parseClass(`void r4mp1406(int a, std::list<float> b);`),
        funcs: parseFunction(`void r4mp1406(int a, std::list<float> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1406 生成结果为空');
      const expectSnippet0 = 'export function r4mp1406(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1406 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1406 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1406 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1407
  * @tc.name : h2dts_gen_1407
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1407', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1407(int a, std::list<long> b);`),
        unions: parseUnion(`void r4mp1407(int a, std::list<long> b);`),
        structs: parseStruct(`void r4mp1407(int a, std::list<long> b);`),
        classes: parseClass(`void r4mp1407(int a, std::list<long> b);`),
        funcs: parseFunction(`void r4mp1407(int a, std::list<long> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1407 生成结果为空');
      const expectSnippet0 = 'export function r4mp1407(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1407 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1407 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1407 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1408
  * @tc.name : h2dts_gen_1408
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1408', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1408(int a, std::list<short> b);`),
        unions: parseUnion(`void r4mp1408(int a, std::list<short> b);`),
        structs: parseStruct(`void r4mp1408(int a, std::list<short> b);`),
        classes: parseClass(`void r4mp1408(int a, std::list<short> b);`),
        funcs: parseFunction(`void r4mp1408(int a, std::list<short> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1408 生成结果为空');
      const expectSnippet0 = 'export function r4mp1408(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1408 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1408 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1408 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1409
  * @tc.name : h2dts_gen_1409
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1409', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1409(int a, std::list<uint8_t> b);`),
        unions: parseUnion(`void r4mp1409(int a, std::list<uint8_t> b);`),
        structs: parseStruct(`void r4mp1409(int a, std::list<uint8_t> b);`),
        classes: parseClass(`void r4mp1409(int a, std::list<uint8_t> b);`),
        funcs: parseFunction(`void r4mp1409(int a, std::list<uint8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1409 生成结果为空');
      const expectSnippet0 = 'export function r4mp1409(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1409 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1409 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1409 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1410
  * @tc.name : h2dts_gen_1410
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1410', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1410(int a, std::list<uint16_t> b);`),
        unions: parseUnion(`void r4mp1410(int a, std::list<uint16_t> b);`),
        structs: parseStruct(`void r4mp1410(int a, std::list<uint16_t> b);`),
        classes: parseClass(`void r4mp1410(int a, std::list<uint16_t> b);`),
        funcs: parseFunction(`void r4mp1410(int a, std::list<uint16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1410 生成结果为空');
      const expectSnippet0 = 'export function r4mp1410(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1410 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1410 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1410 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1411
  * @tc.name : h2dts_gen_1411
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1411', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1411(int a, std::list<uint32_t> b);`),
        unions: parseUnion(`void r4mp1411(int a, std::list<uint32_t> b);`),
        structs: parseStruct(`void r4mp1411(int a, std::list<uint32_t> b);`),
        classes: parseClass(`void r4mp1411(int a, std::list<uint32_t> b);`),
        funcs: parseFunction(`void r4mp1411(int a, std::list<uint32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1411 生成结果为空');
      const expectSnippet0 = 'export function r4mp1411(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1411 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1411 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1411 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1412
  * @tc.name : h2dts_gen_1412
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1412', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1412(int a, std::list<uint64_t> b);`),
        unions: parseUnion(`void r4mp1412(int a, std::list<uint64_t> b);`),
        structs: parseStruct(`void r4mp1412(int a, std::list<uint64_t> b);`),
        classes: parseClass(`void r4mp1412(int a, std::list<uint64_t> b);`),
        funcs: parseFunction(`void r4mp1412(int a, std::list<uint64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1412 生成结果为空');
      const expectSnippet0 = 'export function r4mp1412(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1412 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1412 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1413
  * @tc.name : h2dts_gen_1413
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1413', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1413(int a, std::list<int8_t> b);`),
        unions: parseUnion(`void r4mp1413(int a, std::list<int8_t> b);`),
        structs: parseStruct(`void r4mp1413(int a, std::list<int8_t> b);`),
        classes: parseClass(`void r4mp1413(int a, std::list<int8_t> b);`),
        funcs: parseFunction(`void r4mp1413(int a, std::list<int8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1413 生成结果为空');
      const expectSnippet0 = 'export function r4mp1413(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1413 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1413 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1414
  * @tc.name : h2dts_gen_1414
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1414', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1414(int a, std::list<int16_t> b);`),
        unions: parseUnion(`void r4mp1414(int a, std::list<int16_t> b);`),
        structs: parseStruct(`void r4mp1414(int a, std::list<int16_t> b);`),
        classes: parseClass(`void r4mp1414(int a, std::list<int16_t> b);`),
        funcs: parseFunction(`void r4mp1414(int a, std::list<int16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1414 生成结果为空');
      const expectSnippet0 = 'export function r4mp1414(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1414 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1414 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1415
  * @tc.name : h2dts_gen_1415
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1415', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1415(int a, std::list<int32_t> b);`),
        unions: parseUnion(`void r4mp1415(int a, std::list<int32_t> b);`),
        structs: parseStruct(`void r4mp1415(int a, std::list<int32_t> b);`),
        classes: parseClass(`void r4mp1415(int a, std::list<int32_t> b);`),
        funcs: parseFunction(`void r4mp1415(int a, std::list<int32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1415 生成结果为空');
      const expectSnippet0 = 'export function r4mp1415(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1415 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1415 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1416
  * @tc.name : h2dts_gen_1416
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1416', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1416(int a, std::list<int64_t> b);`),
        unions: parseUnion(`void r4mp1416(int a, std::list<int64_t> b);`),
        structs: parseStruct(`void r4mp1416(int a, std::list<int64_t> b);`),
        classes: parseClass(`void r4mp1416(int a, std::list<int64_t> b);`),
        funcs: parseFunction(`void r4mp1416(int a, std::list<int64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1416 生成结果为空');
      const expectSnippet0 = 'export function r4mp1416(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1416 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1416 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1416 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1417
  * @tc.name : h2dts_gen_1417
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1417', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1417(int a, std::list<unsigned> b);`),
        unions: parseUnion(`void r4mp1417(int a, std::list<unsigned> b);`),
        structs: parseStruct(`void r4mp1417(int a, std::list<unsigned> b);`),
        classes: parseClass(`void r4mp1417(int a, std::list<unsigned> b);`),
        funcs: parseFunction(`void r4mp1417(int a, std::list<unsigned> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1417 生成结果为空');
      const expectSnippet0 = 'export function r4mp1417(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1417 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1417 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1417 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1418
  * @tc.name : h2dts_gen_1418
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1418', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1418(int a, std::list<bool> b);`),
        unions: parseUnion(`void r4mp1418(int a, std::list<bool> b);`),
        structs: parseStruct(`void r4mp1418(int a, std::list<bool> b);`),
        classes: parseClass(`void r4mp1418(int a, std::list<bool> b);`),
        funcs: parseFunction(`void r4mp1418(int a, std::list<bool> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1418 生成结果为空');
      const expectSnippet0 = 'export function r4mp1418(a: number, b: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1418 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1418 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1418 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1419
  * @tc.name : h2dts_gen_1419
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1419', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1419(int a, std::list<char> b);`),
        unions: parseUnion(`void r4mp1419(int a, std::list<char> b);`),
        structs: parseStruct(`void r4mp1419(int a, std::list<char> b);`),
        classes: parseClass(`void r4mp1419(int a, std::list<char> b);`),
        funcs: parseFunction(`void r4mp1419(int a, std::list<char> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1419 生成结果为空');
      const expectSnippet0 = 'export function r4mp1419(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1419 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1419 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1419 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1420
  * @tc.name : h2dts_gen_1420
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1420', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1420(int a, std::list<wchar_t> b);`),
        unions: parseUnion(`void r4mp1420(int a, std::list<wchar_t> b);`),
        structs: parseStruct(`void r4mp1420(int a, std::list<wchar_t> b);`),
        classes: parseClass(`void r4mp1420(int a, std::list<wchar_t> b);`),
        funcs: parseFunction(`void r4mp1420(int a, std::list<wchar_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1420 生成结果为空');
      const expectSnippet0 = 'export function r4mp1420(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1420 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1420 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1420 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1421
  * @tc.name : h2dts_gen_1421
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1421', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1421(int a, std::list<char8_t> b);`),
        unions: parseUnion(`void r4mp1421(int a, std::list<char8_t> b);`),
        structs: parseStruct(`void r4mp1421(int a, std::list<char8_t> b);`),
        classes: parseClass(`void r4mp1421(int a, std::list<char8_t> b);`),
        funcs: parseFunction(`void r4mp1421(int a, std::list<char8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1421 生成结果为空');
      const expectSnippet0 = 'export function r4mp1421(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1421 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1421 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1421 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1422
  * @tc.name : h2dts_gen_1422
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1422', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1422(int a, std::list<char16_t> b);`),
        unions: parseUnion(`void r4mp1422(int a, std::list<char16_t> b);`),
        structs: parseStruct(`void r4mp1422(int a, std::list<char16_t> b);`),
        classes: parseClass(`void r4mp1422(int a, std::list<char16_t> b);`),
        funcs: parseFunction(`void r4mp1422(int a, std::list<char16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1422 生成结果为空');
      const expectSnippet0 = 'export function r4mp1422(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1422 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1422 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1422 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1423
  * @tc.name : h2dts_gen_1423
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1423', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1423(int a, std::list<char32_t> b);`),
        unions: parseUnion(`void r4mp1423(int a, std::list<char32_t> b);`),
        structs: parseStruct(`void r4mp1423(int a, std::list<char32_t> b);`),
        classes: parseClass(`void r4mp1423(int a, std::list<char32_t> b);`),
        funcs: parseFunction(`void r4mp1423(int a, std::list<char32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1423 生成结果为空');
      const expectSnippet0 = 'export function r4mp1423(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1423 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1423 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1423 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1424
  * @tc.name : h2dts_gen_1424
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1424', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1424(int a, std::list<int>::iterator b);`),
        unions: parseUnion(`void r4mp1424(int a, std::list<int>::iterator b);`),
        structs: parseStruct(`void r4mp1424(int a, std::list<int>::iterator b);`),
        classes: parseClass(`void r4mp1424(int a, std::list<int>::iterator b);`),
        funcs: parseFunction(`void r4mp1424(int a, std::list<int>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1424 生成结果为空');
      const expectSnippet0 = 'export function r4mp1424(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1424 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1424 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1424 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1425
  * @tc.name : h2dts_gen_1425
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<size_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1425', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1425(int a, std::list<size_t>::iterator b);`),
        unions: parseUnion(`void r4mp1425(int a, std::list<size_t>::iterator b);`),
        structs: parseStruct(`void r4mp1425(int a, std::list<size_t>::iterator b);`),
        classes: parseClass(`void r4mp1425(int a, std::list<size_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1425(int a, std::list<size_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1425 生成结果为空');
      const expectSnippet0 = 'export function r4mp1425(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1425 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1425 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1425 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1426
  * @tc.name : h2dts_gen_1426
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<double>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1426', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1426(int a, std::list<double>::iterator b);`),
        unions: parseUnion(`void r4mp1426(int a, std::list<double>::iterator b);`),
        structs: parseStruct(`void r4mp1426(int a, std::list<double>::iterator b);`),
        classes: parseClass(`void r4mp1426(int a, std::list<double>::iterator b);`),
        funcs: parseFunction(`void r4mp1426(int a, std::list<double>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1426 生成结果为空');
      const expectSnippet0 = 'export function r4mp1426(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1426 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1426 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1426 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1427
  * @tc.name : h2dts_gen_1427
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<float>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1427', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1427(int a, std::list<float>::iterator b);`),
        unions: parseUnion(`void r4mp1427(int a, std::list<float>::iterator b);`),
        structs: parseStruct(`void r4mp1427(int a, std::list<float>::iterator b);`),
        classes: parseClass(`void r4mp1427(int a, std::list<float>::iterator b);`),
        funcs: parseFunction(`void r4mp1427(int a, std::list<float>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1427 生成结果为空');
      const expectSnippet0 = 'export function r4mp1427(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1427 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1427 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1427 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1428
  * @tc.name : h2dts_gen_1428
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<long>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1428', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1428(int a, std::list<long>::iterator b);`),
        unions: parseUnion(`void r4mp1428(int a, std::list<long>::iterator b);`),
        structs: parseStruct(`void r4mp1428(int a, std::list<long>::iterator b);`),
        classes: parseClass(`void r4mp1428(int a, std::list<long>::iterator b);`),
        funcs: parseFunction(`void r4mp1428(int a, std::list<long>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1428 生成结果为空');
      const expectSnippet0 = 'export function r4mp1428(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1428 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1428 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1428 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1429
  * @tc.name : h2dts_gen_1429
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<short>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1429', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1429(int a, std::list<short>::iterator b);`),
        unions: parseUnion(`void r4mp1429(int a, std::list<short>::iterator b);`),
        structs: parseStruct(`void r4mp1429(int a, std::list<short>::iterator b);`),
        classes: parseClass(`void r4mp1429(int a, std::list<short>::iterator b);`),
        funcs: parseFunction(`void r4mp1429(int a, std::list<short>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1429 生成结果为空');
      const expectSnippet0 = 'export function r4mp1429(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1429 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1429 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1429 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1430
  * @tc.name : h2dts_gen_1430
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<uint8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1430', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1430(int a, std::list<uint8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1430(int a, std::list<uint8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1430(int a, std::list<uint8_t>::iterator b);`),
        classes: parseClass(`void r4mp1430(int a, std::list<uint8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1430(int a, std::list<uint8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1430 生成结果为空');
      const expectSnippet0 = 'export function r4mp1430(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1430 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1430 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1430 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1431
  * @tc.name : h2dts_gen_1431
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<uint16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1431', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1431(int a, std::list<uint16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1431(int a, std::list<uint16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1431(int a, std::list<uint16_t>::iterator b);`),
        classes: parseClass(`void r4mp1431(int a, std::list<uint16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1431(int a, std::list<uint16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1431 生成结果为空');
      const expectSnippet0 = 'export function r4mp1431(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1431 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1431 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1431 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1432
  * @tc.name : h2dts_gen_1432
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<uint32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1432', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1432(int a, std::list<uint32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1432(int a, std::list<uint32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1432(int a, std::list<uint32_t>::iterator b);`),
        classes: parseClass(`void r4mp1432(int a, std::list<uint32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1432(int a, std::list<uint32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1432 生成结果为空');
      const expectSnippet0 = 'export function r4mp1432(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1432 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1432 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1432 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1433
  * @tc.name : h2dts_gen_1433
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<uint64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1433', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1433(int a, std::list<uint64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1433(int a, std::list<uint64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1433(int a, std::list<uint64_t>::iterator b);`),
        classes: parseClass(`void r4mp1433(int a, std::list<uint64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1433(int a, std::list<uint64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1433 生成结果为空');
      const expectSnippet0 = 'export function r4mp1433(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1433 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1433 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1433 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1434
  * @tc.name : h2dts_gen_1434
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1434', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1434(int a, std::list<int8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1434(int a, std::list<int8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1434(int a, std::list<int8_t>::iterator b);`),
        classes: parseClass(`void r4mp1434(int a, std::list<int8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1434(int a, std::list<int8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1434 生成结果为空');
      const expectSnippet0 = 'export function r4mp1434(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1434 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1434 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1434 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1435
  * @tc.name : h2dts_gen_1435
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1435', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1435(int a, std::list<int16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1435(int a, std::list<int16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1435(int a, std::list<int16_t>::iterator b);`),
        classes: parseClass(`void r4mp1435(int a, std::list<int16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1435(int a, std::list<int16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1435 生成结果为空');
      const expectSnippet0 = 'export function r4mp1435(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1435 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1435 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1435 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1436
  * @tc.name : h2dts_gen_1436
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1436', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1436(int a, std::list<int32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1436(int a, std::list<int32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1436(int a, std::list<int32_t>::iterator b);`),
        classes: parseClass(`void r4mp1436(int a, std::list<int32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1436(int a, std::list<int32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1436 生成结果为空');
      const expectSnippet0 = 'export function r4mp1436(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1436 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1436 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1436 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1437
  * @tc.name : h2dts_gen_1437
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::list<int64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1437', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1437(int a, std::list<int64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1437(int a, std::list<int64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1437(int a, std::list<int64_t>::iterator b);`),
        classes: parseClass(`void r4mp1437(int a, std::list<int64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1437(int a, std::list<int64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1437 生成结果为空');
      const expectSnippet0 = 'export function r4mp1437(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1437 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1437 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1437 执行异常: ${String(err)}`);
    }
  });
});
