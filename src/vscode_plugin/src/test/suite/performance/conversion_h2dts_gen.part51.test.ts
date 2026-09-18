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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part51.');

  /**
  * @tc.number : h2dts_gen_1648
  * @tc.name : h2dts_gen_1648
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1648', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1648(int a, size_t b, double c);`),
        unions: parseUnion(`void r4tp1648(int a, size_t b, double c);`),
        structs: parseStruct(`void r4tp1648(int a, size_t b, double c);`),
        classes: parseClass(`void r4tp1648(int a, size_t b, double c);`),
        funcs: parseFunction(`void r4tp1648(int a, size_t b, double c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1648 生成结果为空');
      const expectSnippet0 = 'export function r4tp1648(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1648 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1648 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1648 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1649
  * @tc.name : h2dts_gen_1649
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1649', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1649(int a, size_t b, float c);`),
        unions: parseUnion(`void r4tp1649(int a, size_t b, float c);`),
        structs: parseStruct(`void r4tp1649(int a, size_t b, float c);`),
        classes: parseClass(`void r4tp1649(int a, size_t b, float c);`),
        funcs: parseFunction(`void r4tp1649(int a, size_t b, float c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1649 生成结果为空');
      const expectSnippet0 = 'export function r4tp1649(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1649 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1649 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1649 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1650
  * @tc.name : h2dts_gen_1650
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1650', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1650(int a, size_t b, short c);`),
        unions: parseUnion(`void r4tp1650(int a, size_t b, short c);`),
        structs: parseStruct(`void r4tp1650(int a, size_t b, short c);`),
        classes: parseClass(`void r4tp1650(int a, size_t b, short c);`),
        funcs: parseFunction(`void r4tp1650(int a, size_t b, short c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1650 生成结果为空');
      const expectSnippet0 = 'export function r4tp1650(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1650 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1650 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1650 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1651
  * @tc.name : h2dts_gen_1651
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1651', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1651(int a, size_t b, long c);`),
        unions: parseUnion(`void r4tp1651(int a, size_t b, long c);`),
        structs: parseStruct(`void r4tp1651(int a, size_t b, long c);`),
        classes: parseClass(`void r4tp1651(int a, size_t b, long c);`),
        funcs: parseFunction(`void r4tp1651(int a, size_t b, long c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1651 生成结果为空');
      const expectSnippet0 = 'export function r4tp1651(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1651 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1651 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1651 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1652
  * @tc.name : h2dts_gen_1652
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1652', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1652(int a, size_t b, uint8_t c);`),
        unions: parseUnion(`void r4tp1652(int a, size_t b, uint8_t c);`),
        structs: parseStruct(`void r4tp1652(int a, size_t b, uint8_t c);`),
        classes: parseClass(`void r4tp1652(int a, size_t b, uint8_t c);`),
        funcs: parseFunction(`void r4tp1652(int a, size_t b, uint8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1652 生成结果为空');
      const expectSnippet0 = 'export function r4tp1652(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1652 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1652 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1652 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1653
  * @tc.name : h2dts_gen_1653
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1653', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1653(int a, size_t b, uint16_t c);`),
        unions: parseUnion(`void r4tp1653(int a, size_t b, uint16_t c);`),
        structs: parseStruct(`void r4tp1653(int a, size_t b, uint16_t c);`),
        classes: parseClass(`void r4tp1653(int a, size_t b, uint16_t c);`),
        funcs: parseFunction(`void r4tp1653(int a, size_t b, uint16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1653 生成结果为空');
      const expectSnippet0 = 'export function r4tp1653(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1653 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1653 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1653 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1654
  * @tc.name : h2dts_gen_1654
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1654', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1654(int a, size_t b, uint32_t c);`),
        unions: parseUnion(`void r4tp1654(int a, size_t b, uint32_t c);`),
        structs: parseStruct(`void r4tp1654(int a, size_t b, uint32_t c);`),
        classes: parseClass(`void r4tp1654(int a, size_t b, uint32_t c);`),
        funcs: parseFunction(`void r4tp1654(int a, size_t b, uint32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1654 生成结果为空');
      const expectSnippet0 = 'export function r4tp1654(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1654 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1654 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1654 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1655
  * @tc.name : h2dts_gen_1655
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1655', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1655(int a, size_t b, uint64_t c);`),
        unions: parseUnion(`void r4tp1655(int a, size_t b, uint64_t c);`),
        structs: parseStruct(`void r4tp1655(int a, size_t b, uint64_t c);`),
        classes: parseClass(`void r4tp1655(int a, size_t b, uint64_t c);`),
        funcs: parseFunction(`void r4tp1655(int a, size_t b, uint64_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1655 生成结果为空');
      const expectSnippet0 = 'export function r4tp1655(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1655 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1655 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1655 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1656
  * @tc.name : h2dts_gen_1656
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1656', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1656(int a, size_t b, int8_t c);`),
        unions: parseUnion(`void r4tp1656(int a, size_t b, int8_t c);`),
        structs: parseStruct(`void r4tp1656(int a, size_t b, int8_t c);`),
        classes: parseClass(`void r4tp1656(int a, size_t b, int8_t c);`),
        funcs: parseFunction(`void r4tp1656(int a, size_t b, int8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1656 生成结果为空');
      const expectSnippet0 = 'export function r4tp1656(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1656 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1656 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1656 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1657
  * @tc.name : h2dts_gen_1657
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1657', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1657(int a, size_t b, int16_t c);`),
        unions: parseUnion(`void r4tp1657(int a, size_t b, int16_t c);`),
        structs: parseStruct(`void r4tp1657(int a, size_t b, int16_t c);`),
        classes: parseClass(`void r4tp1657(int a, size_t b, int16_t c);`),
        funcs: parseFunction(`void r4tp1657(int a, size_t b, int16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1657 生成结果为空');
      const expectSnippet0 = 'export function r4tp1657(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1657 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1657 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1657 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1658
  * @tc.name : h2dts_gen_1658
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1658', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1658(int a, size_t b, int32_t c);`),
        unions: parseUnion(`void r4tp1658(int a, size_t b, int32_t c);`),
        structs: parseStruct(`void r4tp1658(int a, size_t b, int32_t c);`),
        classes: parseClass(`void r4tp1658(int a, size_t b, int32_t c);`),
        funcs: parseFunction(`void r4tp1658(int a, size_t b, int32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1658 生成结果为空');
      const expectSnippet0 = 'export function r4tp1658(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1658 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1658 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1658 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1659
  * @tc.name : h2dts_gen_1659
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1659', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1659(int a, size_t b, int64_t c);`),
        unions: parseUnion(`void r4tp1659(int a, size_t b, int64_t c);`),
        structs: parseStruct(`void r4tp1659(int a, size_t b, int64_t c);`),
        classes: parseClass(`void r4tp1659(int a, size_t b, int64_t c);`),
        funcs: parseFunction(`void r4tp1659(int a, size_t b, int64_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1659 生成结果为空');
      const expectSnippet0 = 'export function r4tp1659(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1659 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1659 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1659 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1660
  * @tc.name : h2dts_gen_1660
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1660', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1660(int a, size_t b, unsigned c);`),
        unions: parseUnion(`void r4tp1660(int a, size_t b, unsigned c);`),
        structs: parseStruct(`void r4tp1660(int a, size_t b, unsigned c);`),
        classes: parseClass(`void r4tp1660(int a, size_t b, unsigned c);`),
        funcs: parseFunction(`void r4tp1660(int a, size_t b, unsigned c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1660 生成结果为空');
      const expectSnippet0 = 'export function r4tp1660(a: number, b: number, c: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1660 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1660 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1660 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1661
  * @tc.name : h2dts_gen_1661
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1661', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1661(int a, size_t b, bool c);`),
        unions: parseUnion(`void r4tp1661(int a, size_t b, bool c);`),
        structs: parseStruct(`void r4tp1661(int a, size_t b, bool c);`),
        classes: parseClass(`void r4tp1661(int a, size_t b, bool c);`),
        funcs: parseFunction(`void r4tp1661(int a, size_t b, bool c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1661 生成结果为空');
      const expectSnippet0 = 'export function r4tp1661(a: number, b: number, c: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1661 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1661 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1661 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1662
  * @tc.name : h2dts_gen_1662
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1662', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1662(int a, size_t b, char c);`),
        unions: parseUnion(`void r4tp1662(int a, size_t b, char c);`),
        structs: parseStruct(`void r4tp1662(int a, size_t b, char c);`),
        classes: parseClass(`void r4tp1662(int a, size_t b, char c);`),
        funcs: parseFunction(`void r4tp1662(int a, size_t b, char c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1662 生成结果为空');
      const expectSnippet0 = 'export function r4tp1662(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1662 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1662 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1662 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1663
  * @tc.name : h2dts_gen_1663
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1663', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1663(int a, size_t b, wchar_t c);`),
        unions: parseUnion(`void r4tp1663(int a, size_t b, wchar_t c);`),
        structs: parseStruct(`void r4tp1663(int a, size_t b, wchar_t c);`),
        classes: parseClass(`void r4tp1663(int a, size_t b, wchar_t c);`),
        funcs: parseFunction(`void r4tp1663(int a, size_t b, wchar_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1663 生成结果为空');
      const expectSnippet0 = 'export function r4tp1663(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1663 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1663 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1663 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1664
  * @tc.name : h2dts_gen_1664
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1664', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1664(int a, size_t b, char8_t c);`),
        unions: parseUnion(`void r4tp1664(int a, size_t b, char8_t c);`),
        structs: parseStruct(`void r4tp1664(int a, size_t b, char8_t c);`),
        classes: parseClass(`void r4tp1664(int a, size_t b, char8_t c);`),
        funcs: parseFunction(`void r4tp1664(int a, size_t b, char8_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1664 生成结果为空');
      const expectSnippet0 = 'export function r4tp1664(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1664 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1664 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1664 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1665
  * @tc.name : h2dts_gen_1665
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1665', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1665(int a, size_t b, char16_t c);`),
        unions: parseUnion(`void r4tp1665(int a, size_t b, char16_t c);`),
        structs: parseStruct(`void r4tp1665(int a, size_t b, char16_t c);`),
        classes: parseClass(`void r4tp1665(int a, size_t b, char16_t c);`),
        funcs: parseFunction(`void r4tp1665(int a, size_t b, char16_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1665 生成结果为空');
      const expectSnippet0 = 'export function r4tp1665(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1665 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1665 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1665 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1666
  * @tc.name : h2dts_gen_1666
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1666', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1666(int a, size_t b, char32_t c);`),
        unions: parseUnion(`void r4tp1666(int a, size_t b, char32_t c);`),
        structs: parseStruct(`void r4tp1666(int a, size_t b, char32_t c);`),
        classes: parseClass(`void r4tp1666(int a, size_t b, char32_t c);`),
        funcs: parseFunction(`void r4tp1666(int a, size_t b, char32_t c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1666 生成结果为空');
      const expectSnippet0 = 'export function r4tp1666(a: number, b: number, c: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1666 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1666 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1666 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1667
  * @tc.name : h2dts_gen_1667
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1667', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1667(int a, size_t b, std::deque<int> c);`),
        unions: parseUnion(`void r4tp1667(int a, size_t b, std::deque<int> c);`),
        structs: parseStruct(`void r4tp1667(int a, size_t b, std::deque<int> c);`),
        classes: parseClass(`void r4tp1667(int a, size_t b, std::deque<int> c);`),
        funcs: parseFunction(`void r4tp1667(int a, size_t b, std::deque<int> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1667 生成结果为空');
      const expectSnippet0 = 'export function r4tp1667(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1667 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1667 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1667 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1668
  * @tc.name : h2dts_gen_1668
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1668', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1668(int a, size_t b, std::deque<size_t> c);`),
        unions: parseUnion(`void r4tp1668(int a, size_t b, std::deque<size_t> c);`),
        structs: parseStruct(`void r4tp1668(int a, size_t b, std::deque<size_t> c);`),
        classes: parseClass(`void r4tp1668(int a, size_t b, std::deque<size_t> c);`),
        funcs: parseFunction(`void r4tp1668(int a, size_t b, std::deque<size_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1668 生成结果为空');
      const expectSnippet0 = 'export function r4tp1668(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1668 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1668 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1668 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1669
  * @tc.name : h2dts_gen_1669
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1669', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1669(int a, size_t b, std::deque<double> c);`),
        unions: parseUnion(`void r4tp1669(int a, size_t b, std::deque<double> c);`),
        structs: parseStruct(`void r4tp1669(int a, size_t b, std::deque<double> c);`),
        classes: parseClass(`void r4tp1669(int a, size_t b, std::deque<double> c);`),
        funcs: parseFunction(`void r4tp1669(int a, size_t b, std::deque<double> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1669 生成结果为空');
      const expectSnippet0 = 'export function r4tp1669(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1669 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1669 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1669 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1670
  * @tc.name : h2dts_gen_1670
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1670', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1670(int a, size_t b, std::deque<float> c);`),
        unions: parseUnion(`void r4tp1670(int a, size_t b, std::deque<float> c);`),
        structs: parseStruct(`void r4tp1670(int a, size_t b, std::deque<float> c);`),
        classes: parseClass(`void r4tp1670(int a, size_t b, std::deque<float> c);`),
        funcs: parseFunction(`void r4tp1670(int a, size_t b, std::deque<float> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1670 生成结果为空');
      const expectSnippet0 = 'export function r4tp1670(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1670 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1670 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1670 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1671
  * @tc.name : h2dts_gen_1671
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1671', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1671(int a, size_t b, std::deque<long> c);`),
        unions: parseUnion(`void r4tp1671(int a, size_t b, std::deque<long> c);`),
        structs: parseStruct(`void r4tp1671(int a, size_t b, std::deque<long> c);`),
        classes: parseClass(`void r4tp1671(int a, size_t b, std::deque<long> c);`),
        funcs: parseFunction(`void r4tp1671(int a, size_t b, std::deque<long> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1671 生成结果为空');
      const expectSnippet0 = 'export function r4tp1671(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1671 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1671 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1671 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1672
  * @tc.name : h2dts_gen_1672
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1672', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1672(int a, size_t b, std::deque<short> c);`),
        unions: parseUnion(`void r4tp1672(int a, size_t b, std::deque<short> c);`),
        structs: parseStruct(`void r4tp1672(int a, size_t b, std::deque<short> c);`),
        classes: parseClass(`void r4tp1672(int a, size_t b, std::deque<short> c);`),
        funcs: parseFunction(`void r4tp1672(int a, size_t b, std::deque<short> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1672 生成结果为空');
      const expectSnippet0 = 'export function r4tp1672(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1672 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1672 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1672 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1673
  * @tc.name : h2dts_gen_1673
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1673', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1673(int a, size_t b, std::deque<uint8_t> c);`),
        unions: parseUnion(`void r4tp1673(int a, size_t b, std::deque<uint8_t> c);`),
        structs: parseStruct(`void r4tp1673(int a, size_t b, std::deque<uint8_t> c);`),
        classes: parseClass(`void r4tp1673(int a, size_t b, std::deque<uint8_t> c);`),
        funcs: parseFunction(`void r4tp1673(int a, size_t b, std::deque<uint8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1673 生成结果为空');
      const expectSnippet0 = 'export function r4tp1673(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1673 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1673 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1673 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1674
  * @tc.name : h2dts_gen_1674
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1674', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1674(int a, size_t b, std::deque<uint16_t> c);`),
        unions: parseUnion(`void r4tp1674(int a, size_t b, std::deque<uint16_t> c);`),
        structs: parseStruct(`void r4tp1674(int a, size_t b, std::deque<uint16_t> c);`),
        classes: parseClass(`void r4tp1674(int a, size_t b, std::deque<uint16_t> c);`),
        funcs: parseFunction(`void r4tp1674(int a, size_t b, std::deque<uint16_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1674 生成结果为空');
      const expectSnippet0 = 'export function r4tp1674(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1674 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1674 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1674 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1675
  * @tc.name : h2dts_gen_1675
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1675', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1675(int a, size_t b, std::deque<uint32_t> c);`),
        unions: parseUnion(`void r4tp1675(int a, size_t b, std::deque<uint32_t> c);`),
        structs: parseStruct(`void r4tp1675(int a, size_t b, std::deque<uint32_t> c);`),
        classes: parseClass(`void r4tp1675(int a, size_t b, std::deque<uint32_t> c);`),
        funcs: parseFunction(`void r4tp1675(int a, size_t b, std::deque<uint32_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1675 生成结果为空');
      const expectSnippet0 = 'export function r4tp1675(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1675 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1675 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1675 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1676
  * @tc.name : h2dts_gen_1676
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1676', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1676(int a, size_t b, std::deque<uint64_t> c);`),
        unions: parseUnion(`void r4tp1676(int a, size_t b, std::deque<uint64_t> c);`),
        structs: parseStruct(`void r4tp1676(int a, size_t b, std::deque<uint64_t> c);`),
        classes: parseClass(`void r4tp1676(int a, size_t b, std::deque<uint64_t> c);`),
        funcs: parseFunction(`void r4tp1676(int a, size_t b, std::deque<uint64_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1676 生成结果为空');
      const expectSnippet0 = 'export function r4tp1676(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1676 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1676 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1676 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1677
  * @tc.name : h2dts_gen_1677
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1677', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1677(int a, size_t b, std::deque<int8_t> c);`),
        unions: parseUnion(`void r4tp1677(int a, size_t b, std::deque<int8_t> c);`),
        structs: parseStruct(`void r4tp1677(int a, size_t b, std::deque<int8_t> c);`),
        classes: parseClass(`void r4tp1677(int a, size_t b, std::deque<int8_t> c);`),
        funcs: parseFunction(`void r4tp1677(int a, size_t b, std::deque<int8_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1677 生成结果为空');
      const expectSnippet0 = 'export function r4tp1677(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1677 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1677 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1677 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1678
  * @tc.name : h2dts_gen_1678
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1678', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1678(int a, size_t b, std::deque<int16_t> c);`),
        unions: parseUnion(`void r4tp1678(int a, size_t b, std::deque<int16_t> c);`),
        structs: parseStruct(`void r4tp1678(int a, size_t b, std::deque<int16_t> c);`),
        classes: parseClass(`void r4tp1678(int a, size_t b, std::deque<int16_t> c);`),
        funcs: parseFunction(`void r4tp1678(int a, size_t b, std::deque<int16_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1678 生成结果为空');
      const expectSnippet0 = 'export function r4tp1678(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1678 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1678 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1678 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1679
  * @tc.name : h2dts_gen_1679
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1679', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1679(int a, size_t b, std::deque<int32_t> c);`),
        unions: parseUnion(`void r4tp1679(int a, size_t b, std::deque<int32_t> c);`),
        structs: parseStruct(`void r4tp1679(int a, size_t b, std::deque<int32_t> c);`),
        classes: parseClass(`void r4tp1679(int a, size_t b, std::deque<int32_t> c);`),
        funcs: parseFunction(`void r4tp1679(int a, size_t b, std::deque<int32_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1679 生成结果为空');
      const expectSnippet0 = 'export function r4tp1679(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1679 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1679 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1679 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1680
  * @tc.name : h2dts_gen_1680
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1680', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1680(int a, size_t b, std::deque<int64_t> c);`),
        unions: parseUnion(`void r4tp1680(int a, size_t b, std::deque<int64_t> c);`),
        structs: parseStruct(`void r4tp1680(int a, size_t b, std::deque<int64_t> c);`),
        classes: parseClass(`void r4tp1680(int a, size_t b, std::deque<int64_t> c);`),
        funcs: parseFunction(`void r4tp1680(int a, size_t b, std::deque<int64_t> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1680 生成结果为空');
      const expectSnippet0 = 'export function r4tp1680(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1680 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1680 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1680 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1681
  * @tc.name : h2dts_gen_1681
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1681', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1681(int a, size_t b, std::deque<unsigned> c);`),
        unions: parseUnion(`void r4tp1681(int a, size_t b, std::deque<unsigned> c);`),
        structs: parseStruct(`void r4tp1681(int a, size_t b, std::deque<unsigned> c);`),
        classes: parseClass(`void r4tp1681(int a, size_t b, std::deque<unsigned> c);`),
        funcs: parseFunction(`void r4tp1681(int a, size_t b, std::deque<unsigned> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1681 生成结果为空');
      const expectSnippet0 = 'export function r4tp1681(a: number, b: number, c: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1681 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1681 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1681 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1682
  * @tc.name : h2dts_gen_1682
  * @tc.desc : h2dts gen：扩充-R4-三参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1682', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4tp1682(int a, size_t b, std::deque<bool> c);`),
        unions: parseUnion(`void r4tp1682(int a, size_t b, std::deque<bool> c);`),
        structs: parseStruct(`void r4tp1682(int a, size_t b, std::deque<bool> c);`),
        classes: parseClass(`void r4tp1682(int a, size_t b, std::deque<bool> c);`),
        funcs: parseFunction(`void r4tp1682(int a, size_t b, std::deque<bool> c);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1682 生成结果为空');
      const expectSnippet0 = 'export function r4tp1682(a: number, b: number, c: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1682 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1682 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1682 执行异常: ${String(err)}`);
    }
  });
});
