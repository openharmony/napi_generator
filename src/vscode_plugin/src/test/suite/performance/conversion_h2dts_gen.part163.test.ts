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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part163.');

  /**
  * @tc.number : h2dts_gen_5512
  * @tc.name : h2dts_gen_5512
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5512', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55512(int a, size_t b, double c, short d, int16_t e);`),
        unions: parseUnion(`void r6p55512(int a, size_t b, double c, short d, int16_t e);`),
        structs: parseStruct(`void r6p55512(int a, size_t b, double c, short d, int16_t e);`),
        classes: parseClass(`void r6p55512(int a, size_t b, double c, short d, int16_t e);`),
        funcs: parseFunction(`void r6p55512(int a, size_t b, double c, short d, int16_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5512 生成结果为空');
      const expectSnippet0 = 'export function r6p55512(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5512 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5512 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5512 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5513
  * @tc.name : h2dts_gen_5513
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5513', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55513(int a, size_t b, double c, short d, int32_t e);`),
        unions: parseUnion(`void r6p55513(int a, size_t b, double c, short d, int32_t e);`),
        structs: parseStruct(`void r6p55513(int a, size_t b, double c, short d, int32_t e);`),
        classes: parseClass(`void r6p55513(int a, size_t b, double c, short d, int32_t e);`),
        funcs: parseFunction(`void r6p55513(int a, size_t b, double c, short d, int32_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5513 生成结果为空');
      const expectSnippet0 = 'export function r6p55513(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5513 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5513 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5513 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5514
  * @tc.name : h2dts_gen_5514
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5514', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55514(int a, size_t b, double c, short d, int64_t e);`),
        unions: parseUnion(`void r6p55514(int a, size_t b, double c, short d, int64_t e);`),
        structs: parseStruct(`void r6p55514(int a, size_t b, double c, short d, int64_t e);`),
        classes: parseClass(`void r6p55514(int a, size_t b, double c, short d, int64_t e);`),
        funcs: parseFunction(`void r6p55514(int a, size_t b, double c, short d, int64_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5514 生成结果为空');
      const expectSnippet0 = 'export function r6p55514(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5514 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5514 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5514 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5515
  * @tc.name : h2dts_gen_5515
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5515', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55515(int a, size_t b, double c, short d, unsigned e);`),
        unions: parseUnion(`void r6p55515(int a, size_t b, double c, short d, unsigned e);`),
        structs: parseStruct(`void r6p55515(int a, size_t b, double c, short d, unsigned e);`),
        classes: parseClass(`void r6p55515(int a, size_t b, double c, short d, unsigned e);`),
        funcs: parseFunction(`void r6p55515(int a, size_t b, double c, short d, unsigned e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5515 生成结果为空');
      const expectSnippet0 = 'export function r6p55515(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5515 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5515 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5515 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5516
  * @tc.name : h2dts_gen_5516
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5516', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55516(int a, size_t b, double c, short d, bool e);`),
        unions: parseUnion(`void r6p55516(int a, size_t b, double c, short d, bool e);`),
        structs: parseStruct(`void r6p55516(int a, size_t b, double c, short d, bool e);`),
        classes: parseClass(`void r6p55516(int a, size_t b, double c, short d, bool e);`),
        funcs: parseFunction(`void r6p55516(int a, size_t b, double c, short d, bool e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5516 生成结果为空');
      const expectSnippet0 = 'export function r6p55516(a: number, b: number, c: number, d: number, e: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5516 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5516 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5516 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5517
  * @tc.name : h2dts_gen_5517
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5517', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55517(int a, size_t b, double c, short d, char e);`),
        unions: parseUnion(`void r6p55517(int a, size_t b, double c, short d, char e);`),
        structs: parseStruct(`void r6p55517(int a, size_t b, double c, short d, char e);`),
        classes: parseClass(`void r6p55517(int a, size_t b, double c, short d, char e);`),
        funcs: parseFunction(`void r6p55517(int a, size_t b, double c, short d, char e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5517 生成结果为空');
      const expectSnippet0 = 'export function r6p55517(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5517 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5517 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5517 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5518
  * @tc.name : h2dts_gen_5518
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5518', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55518(int a, size_t b, double c, short d, wchar_t e);`),
        unions: parseUnion(`void r6p55518(int a, size_t b, double c, short d, wchar_t e);`),
        structs: parseStruct(`void r6p55518(int a, size_t b, double c, short d, wchar_t e);`),
        classes: parseClass(`void r6p55518(int a, size_t b, double c, short d, wchar_t e);`),
        funcs: parseFunction(`void r6p55518(int a, size_t b, double c, short d, wchar_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5518 生成结果为空');
      const expectSnippet0 = 'export function r6p55518(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5518 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5518 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5518 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5519
  * @tc.name : h2dts_gen_5519
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5519', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55519(int a, size_t b, double c, short d, char8_t e);`),
        unions: parseUnion(`void r6p55519(int a, size_t b, double c, short d, char8_t e);`),
        structs: parseStruct(`void r6p55519(int a, size_t b, double c, short d, char8_t e);`),
        classes: parseClass(`void r6p55519(int a, size_t b, double c, short d, char8_t e);`),
        funcs: parseFunction(`void r6p55519(int a, size_t b, double c, short d, char8_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5519 生成结果为空');
      const expectSnippet0 = 'export function r6p55519(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5519 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5519 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5519 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5520
  * @tc.name : h2dts_gen_5520
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5520', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55520(int a, size_t b, double c, short d, char16_t e);`),
        unions: parseUnion(`void r6p55520(int a, size_t b, double c, short d, char16_t e);`),
        structs: parseStruct(`void r6p55520(int a, size_t b, double c, short d, char16_t e);`),
        classes: parseClass(`void r6p55520(int a, size_t b, double c, short d, char16_t e);`),
        funcs: parseFunction(`void r6p55520(int a, size_t b, double c, short d, char16_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5520 生成结果为空');
      const expectSnippet0 = 'export function r6p55520(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5520 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5520 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5520 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5521
  * @tc.name : h2dts_gen_5521
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5521', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55521(int a, size_t b, double c, long d, uint8_t e);`),
        unions: parseUnion(`void r6p55521(int a, size_t b, double c, long d, uint8_t e);`),
        structs: parseStruct(`void r6p55521(int a, size_t b, double c, long d, uint8_t e);`),
        classes: parseClass(`void r6p55521(int a, size_t b, double c, long d, uint8_t e);`),
        funcs: parseFunction(`void r6p55521(int a, size_t b, double c, long d, uint8_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5521 生成结果为空');
      const expectSnippet0 = 'export function r6p55521(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5521 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5521 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5521 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5522
  * @tc.name : h2dts_gen_5522
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5522', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55522(int a, size_t b, double c, long d, uint16_t e);`),
        unions: parseUnion(`void r6p55522(int a, size_t b, double c, long d, uint16_t e);`),
        structs: parseStruct(`void r6p55522(int a, size_t b, double c, long d, uint16_t e);`),
        classes: parseClass(`void r6p55522(int a, size_t b, double c, long d, uint16_t e);`),
        funcs: parseFunction(`void r6p55522(int a, size_t b, double c, long d, uint16_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5522 生成结果为空');
      const expectSnippet0 = 'export function r6p55522(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5522 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5522 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5522 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5523
  * @tc.name : h2dts_gen_5523
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5523', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55523(int a, size_t b, double c, long d, uint32_t e);`),
        unions: parseUnion(`void r6p55523(int a, size_t b, double c, long d, uint32_t e);`),
        structs: parseStruct(`void r6p55523(int a, size_t b, double c, long d, uint32_t e);`),
        classes: parseClass(`void r6p55523(int a, size_t b, double c, long d, uint32_t e);`),
        funcs: parseFunction(`void r6p55523(int a, size_t b, double c, long d, uint32_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5523 生成结果为空');
      const expectSnippet0 = 'export function r6p55523(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5523 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5523 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5523 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5524
  * @tc.name : h2dts_gen_5524
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5524', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55524(int a, size_t b, double c, long d, uint64_t e);`),
        unions: parseUnion(`void r6p55524(int a, size_t b, double c, long d, uint64_t e);`),
        structs: parseStruct(`void r6p55524(int a, size_t b, double c, long d, uint64_t e);`),
        classes: parseClass(`void r6p55524(int a, size_t b, double c, long d, uint64_t e);`),
        funcs: parseFunction(`void r6p55524(int a, size_t b, double c, long d, uint64_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5524 生成结果为空');
      const expectSnippet0 = 'export function r6p55524(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5524 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5524 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5524 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5525
  * @tc.name : h2dts_gen_5525
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5525', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55525(int a, size_t b, double c, long d, int8_t e);`),
        unions: parseUnion(`void r6p55525(int a, size_t b, double c, long d, int8_t e);`),
        structs: parseStruct(`void r6p55525(int a, size_t b, double c, long d, int8_t e);`),
        classes: parseClass(`void r6p55525(int a, size_t b, double c, long d, int8_t e);`),
        funcs: parseFunction(`void r6p55525(int a, size_t b, double c, long d, int8_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5525 生成结果为空');
      const expectSnippet0 = 'export function r6p55525(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5525 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5525 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5525 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5526
  * @tc.name : h2dts_gen_5526
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5526', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55526(int a, size_t b, double c, long d, int16_t e);`),
        unions: parseUnion(`void r6p55526(int a, size_t b, double c, long d, int16_t e);`),
        structs: parseStruct(`void r6p55526(int a, size_t b, double c, long d, int16_t e);`),
        classes: parseClass(`void r6p55526(int a, size_t b, double c, long d, int16_t e);`),
        funcs: parseFunction(`void r6p55526(int a, size_t b, double c, long d, int16_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5526 生成结果为空');
      const expectSnippet0 = 'export function r6p55526(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5526 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5526 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5527
  * @tc.name : h2dts_gen_5527
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5527', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55527(int a, size_t b, double c, long d, int32_t e);`),
        unions: parseUnion(`void r6p55527(int a, size_t b, double c, long d, int32_t e);`),
        structs: parseStruct(`void r6p55527(int a, size_t b, double c, long d, int32_t e);`),
        classes: parseClass(`void r6p55527(int a, size_t b, double c, long d, int32_t e);`),
        funcs: parseFunction(`void r6p55527(int a, size_t b, double c, long d, int32_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5527 生成结果为空');
      const expectSnippet0 = 'export function r6p55527(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5527 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5527 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5528
  * @tc.name : h2dts_gen_5528
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5528', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55528(int a, size_t b, double c, long d, int64_t e);`),
        unions: parseUnion(`void r6p55528(int a, size_t b, double c, long d, int64_t e);`),
        structs: parseStruct(`void r6p55528(int a, size_t b, double c, long d, int64_t e);`),
        classes: parseClass(`void r6p55528(int a, size_t b, double c, long d, int64_t e);`),
        funcs: parseFunction(`void r6p55528(int a, size_t b, double c, long d, int64_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5528 生成结果为空');
      const expectSnippet0 = 'export function r6p55528(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5528 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5528 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5529
  * @tc.name : h2dts_gen_5529
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5529', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55529(int a, size_t b, double c, long d, unsigned e);`),
        unions: parseUnion(`void r6p55529(int a, size_t b, double c, long d, unsigned e);`),
        structs: parseStruct(`void r6p55529(int a, size_t b, double c, long d, unsigned e);`),
        classes: parseClass(`void r6p55529(int a, size_t b, double c, long d, unsigned e);`),
        funcs: parseFunction(`void r6p55529(int a, size_t b, double c, long d, unsigned e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5529 生成结果为空');
      const expectSnippet0 = 'export function r6p55529(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5529 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5529 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5529 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5530
  * @tc.name : h2dts_gen_5530
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5530', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55530(int a, size_t b, double c, long d, bool e);`),
        unions: parseUnion(`void r6p55530(int a, size_t b, double c, long d, bool e);`),
        structs: parseStruct(`void r6p55530(int a, size_t b, double c, long d, bool e);`),
        classes: parseClass(`void r6p55530(int a, size_t b, double c, long d, bool e);`),
        funcs: parseFunction(`void r6p55530(int a, size_t b, double c, long d, bool e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5530 生成结果为空');
      const expectSnippet0 = 'export function r6p55530(a: number, b: number, c: number, d: number, e: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5530 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5530 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5531
  * @tc.name : h2dts_gen_5531
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5531', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55531(int a, size_t b, double c, long d, char e);`),
        unions: parseUnion(`void r6p55531(int a, size_t b, double c, long d, char e);`),
        structs: parseStruct(`void r6p55531(int a, size_t b, double c, long d, char e);`),
        classes: parseClass(`void r6p55531(int a, size_t b, double c, long d, char e);`),
        funcs: parseFunction(`void r6p55531(int a, size_t b, double c, long d, char e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5531 生成结果为空');
      const expectSnippet0 = 'export function r6p55531(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5531 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5531 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5531 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5532
  * @tc.name : h2dts_gen_5532
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5532', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55532(int a, size_t b, double c, long d, wchar_t e);`),
        unions: parseUnion(`void r6p55532(int a, size_t b, double c, long d, wchar_t e);`),
        structs: parseStruct(`void r6p55532(int a, size_t b, double c, long d, wchar_t e);`),
        classes: parseClass(`void r6p55532(int a, size_t b, double c, long d, wchar_t e);`),
        funcs: parseFunction(`void r6p55532(int a, size_t b, double c, long d, wchar_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5532 生成结果为空');
      const expectSnippet0 = 'export function r6p55532(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5532 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5532 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5533
  * @tc.name : h2dts_gen_5533
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5533', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55533(int a, size_t b, double c, long d, char8_t e);`),
        unions: parseUnion(`void r6p55533(int a, size_t b, double c, long d, char8_t e);`),
        structs: parseStruct(`void r6p55533(int a, size_t b, double c, long d, char8_t e);`),
        classes: parseClass(`void r6p55533(int a, size_t b, double c, long d, char8_t e);`),
        funcs: parseFunction(`void r6p55533(int a, size_t b, double c, long d, char8_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5533 生成结果为空');
      const expectSnippet0 = 'export function r6p55533(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5533 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5533 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5533 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5534
  * @tc.name : h2dts_gen_5534
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5534', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55534(int a, size_t b, double c, long d, char16_t e);`),
        unions: parseUnion(`void r6p55534(int a, size_t b, double c, long d, char16_t e);`),
        structs: parseStruct(`void r6p55534(int a, size_t b, double c, long d, char16_t e);`),
        classes: parseClass(`void r6p55534(int a, size_t b, double c, long d, char16_t e);`),
        funcs: parseFunction(`void r6p55534(int a, size_t b, double c, long d, char16_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5534 生成结果为空');
      const expectSnippet0 = 'export function r6p55534(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5534 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5534 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5534 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5535
  * @tc.name : h2dts_gen_5535
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5535', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55535(int a, size_t b, double c, uint8_t d, uint16_t e);`),
        unions: parseUnion(`void r6p55535(int a, size_t b, double c, uint8_t d, uint16_t e);`),
        structs: parseStruct(`void r6p55535(int a, size_t b, double c, uint8_t d, uint16_t e);`),
        classes: parseClass(`void r6p55535(int a, size_t b, double c, uint8_t d, uint16_t e);`),
        funcs: parseFunction(`void r6p55535(int a, size_t b, double c, uint8_t d, uint16_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5535 生成结果为空');
      const expectSnippet0 = 'export function r6p55535(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5535 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5535 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5536
  * @tc.name : h2dts_gen_5536
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5536', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55536(int a, size_t b, double c, uint8_t d, uint32_t e);`),
        unions: parseUnion(`void r6p55536(int a, size_t b, double c, uint8_t d, uint32_t e);`),
        structs: parseStruct(`void r6p55536(int a, size_t b, double c, uint8_t d, uint32_t e);`),
        classes: parseClass(`void r6p55536(int a, size_t b, double c, uint8_t d, uint32_t e);`),
        funcs: parseFunction(`void r6p55536(int a, size_t b, double c, uint8_t d, uint32_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5536 生成结果为空');
      const expectSnippet0 = 'export function r6p55536(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5536 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5536 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5537
  * @tc.name : h2dts_gen_5537
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5537', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55537(int a, size_t b, double c, uint8_t d, uint64_t e);`),
        unions: parseUnion(`void r6p55537(int a, size_t b, double c, uint8_t d, uint64_t e);`),
        structs: parseStruct(`void r6p55537(int a, size_t b, double c, uint8_t d, uint64_t e);`),
        classes: parseClass(`void r6p55537(int a, size_t b, double c, uint8_t d, uint64_t e);`),
        funcs: parseFunction(`void r6p55537(int a, size_t b, double c, uint8_t d, uint64_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5537 生成结果为空');
      const expectSnippet0 = 'export function r6p55537(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5537 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5537 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5538
  * @tc.name : h2dts_gen_5538
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5538', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55538(int a, size_t b, double c, uint8_t d, int8_t e);`),
        unions: parseUnion(`void r6p55538(int a, size_t b, double c, uint8_t d, int8_t e);`),
        structs: parseStruct(`void r6p55538(int a, size_t b, double c, uint8_t d, int8_t e);`),
        classes: parseClass(`void r6p55538(int a, size_t b, double c, uint8_t d, int8_t e);`),
        funcs: parseFunction(`void r6p55538(int a, size_t b, double c, uint8_t d, int8_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5538 生成结果为空');
      const expectSnippet0 = 'export function r6p55538(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5538 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5538 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5539
  * @tc.name : h2dts_gen_5539
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5539', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55539(int a, size_t b, double c, uint8_t d, int16_t e);`),
        unions: parseUnion(`void r6p55539(int a, size_t b, double c, uint8_t d, int16_t e);`),
        structs: parseStruct(`void r6p55539(int a, size_t b, double c, uint8_t d, int16_t e);`),
        classes: parseClass(`void r6p55539(int a, size_t b, double c, uint8_t d, int16_t e);`),
        funcs: parseFunction(`void r6p55539(int a, size_t b, double c, uint8_t d, int16_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5539 生成结果为空');
      const expectSnippet0 = 'export function r6p55539(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5539 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5539 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5540
  * @tc.name : h2dts_gen_5540
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5540', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55540(int a, size_t b, double c, uint8_t d, int32_t e);`),
        unions: parseUnion(`void r6p55540(int a, size_t b, double c, uint8_t d, int32_t e);`),
        structs: parseStruct(`void r6p55540(int a, size_t b, double c, uint8_t d, int32_t e);`),
        classes: parseClass(`void r6p55540(int a, size_t b, double c, uint8_t d, int32_t e);`),
        funcs: parseFunction(`void r6p55540(int a, size_t b, double c, uint8_t d, int32_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5540 生成结果为空');
      const expectSnippet0 = 'export function r6p55540(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5540 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5540 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5541
  * @tc.name : h2dts_gen_5541
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5541', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55541(int a, size_t b, double c, uint8_t d, int64_t e);`),
        unions: parseUnion(`void r6p55541(int a, size_t b, double c, uint8_t d, int64_t e);`),
        structs: parseStruct(`void r6p55541(int a, size_t b, double c, uint8_t d, int64_t e);`),
        classes: parseClass(`void r6p55541(int a, size_t b, double c, uint8_t d, int64_t e);`),
        funcs: parseFunction(`void r6p55541(int a, size_t b, double c, uint8_t d, int64_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5541 生成结果为空');
      const expectSnippet0 = 'export function r6p55541(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5541 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5541 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5542
  * @tc.name : h2dts_gen_5542
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5542', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55542(int a, size_t b, double c, uint8_t d, unsigned e);`),
        unions: parseUnion(`void r6p55542(int a, size_t b, double c, uint8_t d, unsigned e);`),
        structs: parseStruct(`void r6p55542(int a, size_t b, double c, uint8_t d, unsigned e);`),
        classes: parseClass(`void r6p55542(int a, size_t b, double c, uint8_t d, unsigned e);`),
        funcs: parseFunction(`void r6p55542(int a, size_t b, double c, uint8_t d, unsigned e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5542 生成结果为空');
      const expectSnippet0 = 'export function r6p55542(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5542 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5542 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5542 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5543
  * @tc.name : h2dts_gen_5543
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5543', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55543(int a, size_t b, double c, uint8_t d, bool e);`),
        unions: parseUnion(`void r6p55543(int a, size_t b, double c, uint8_t d, bool e);`),
        structs: parseStruct(`void r6p55543(int a, size_t b, double c, uint8_t d, bool e);`),
        classes: parseClass(`void r6p55543(int a, size_t b, double c, uint8_t d, bool e);`),
        funcs: parseFunction(`void r6p55543(int a, size_t b, double c, uint8_t d, bool e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5543 生成结果为空');
      const expectSnippet0 = 'export function r6p55543(a: number, b: number, c: number, d: number, e: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5543 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5543 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5543 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5544
  * @tc.name : h2dts_gen_5544
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5544', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55544(int a, size_t b, double c, uint8_t d, char e);`),
        unions: parseUnion(`void r6p55544(int a, size_t b, double c, uint8_t d, char e);`),
        structs: parseStruct(`void r6p55544(int a, size_t b, double c, uint8_t d, char e);`),
        classes: parseClass(`void r6p55544(int a, size_t b, double c, uint8_t d, char e);`),
        funcs: parseFunction(`void r6p55544(int a, size_t b, double c, uint8_t d, char e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5544 生成结果为空');
      const expectSnippet0 = 'export function r6p55544(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5544 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5544 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5544 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5545
  * @tc.name : h2dts_gen_5545
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5545', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55545(int a, size_t b, double c, uint8_t d, wchar_t e);`),
        unions: parseUnion(`void r6p55545(int a, size_t b, double c, uint8_t d, wchar_t e);`),
        structs: parseStruct(`void r6p55545(int a, size_t b, double c, uint8_t d, wchar_t e);`),
        classes: parseClass(`void r6p55545(int a, size_t b, double c, uint8_t d, wchar_t e);`),
        funcs: parseFunction(`void r6p55545(int a, size_t b, double c, uint8_t d, wchar_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5545 生成结果为空');
      const expectSnippet0 = 'export function r6p55545(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5545 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5545 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5545 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5546
  * @tc.name : h2dts_gen_5546
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5546', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55546(int a, size_t b, double c, uint8_t d, char8_t e);`),
        unions: parseUnion(`void r6p55546(int a, size_t b, double c, uint8_t d, char8_t e);`),
        structs: parseStruct(`void r6p55546(int a, size_t b, double c, uint8_t d, char8_t e);`),
        classes: parseClass(`void r6p55546(int a, size_t b, double c, uint8_t d, char8_t e);`),
        funcs: parseFunction(`void r6p55546(int a, size_t b, double c, uint8_t d, char8_t e);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5546 生成结果为空');
      const expectSnippet0 = 'export function r6p55546(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5546 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5546 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5546 执行异常: ${String(err)}`);
    }
  });
});
