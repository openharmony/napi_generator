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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part156.');

  /**
  * @tc.number : h2dts_gen_5277
  * @tc.name : h2dts_gen_5277
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5277', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5277(int a, size_t b, uint8_t c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp5277(int a, size_t b, uint8_t c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp5277(int a, size_t b, uint8_t c, std::deque<double> d);`),
        classes: parseClass(`void r5qp5277(int a, size_t b, uint8_t c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp5277(int a, size_t b, uint8_t c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5277 生成结果为空');
      const expectSnippet0 = 'export function r5qp5277(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5277 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5277 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5277 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5278
  * @tc.name : h2dts_gen_5278
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5278', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5278(int a, size_t b, uint8_t c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp5278(int a, size_t b, uint8_t c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp5278(int a, size_t b, uint8_t c, std::deque<float> d);`),
        classes: parseClass(`void r5qp5278(int a, size_t b, uint8_t c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp5278(int a, size_t b, uint8_t c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5278 生成结果为空');
      const expectSnippet0 = 'export function r5qp5278(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5278 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5278 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5279
  * @tc.name : h2dts_gen_5279
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5279', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5279 { int fA; size_t fB; double fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5279 { int fA; size_t fB; double fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5279 { int fA; size_t fB; double fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5279 { int fA; size_t fB; double fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5279 { int fA; size_t fB; double fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5279 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5279 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5279 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5279 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5279 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5280
  * @tc.name : h2dts_gen_5280
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5280', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5280 { int fA; size_t fB; float fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5280 { int fA; size_t fB; float fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5280 { int fA; size_t fB; float fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5280 { int fA; size_t fB; float fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5280 { int fA; size_t fB; float fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5280 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5280 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5280 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5280 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5280 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5280 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5281
  * @tc.name : h2dts_gen_5281
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5281', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5281 { int fA; size_t fB; short fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5281 { int fA; size_t fB; short fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5281 { int fA; size_t fB; short fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5281 { int fA; size_t fB; short fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5281 { int fA; size_t fB; short fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5281 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5281 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5281 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5281 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5281 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5281 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5282
  * @tc.name : h2dts_gen_5282
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5282', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5282 { int fA; size_t fB; long fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5282 { int fA; size_t fB; long fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5282 { int fA; size_t fB; long fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5282 { int fA; size_t fB; long fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5282 { int fA; size_t fB; long fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5282 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5282 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5282 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5282 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5282 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5282 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5283
  * @tc.name : h2dts_gen_5283
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5283', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5283 { int fA; size_t fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5283 { int fA; size_t fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5283 { int fA; size_t fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5283 { int fA; size_t fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5283 { int fA; size_t fB; uint8_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5283 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5283 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5283 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5283 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5283 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5283 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5284
  * @tc.name : h2dts_gen_5284
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5284', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5284 { int fA; size_t fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5284 { int fA; size_t fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5284 { int fA; size_t fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5284 { int fA; size_t fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5284 { int fA; size_t fB; uint16_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5284 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5284 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5284 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5284 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5284 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5284 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5285
  * @tc.name : h2dts_gen_5285
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5285', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5285 { int fA; size_t fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5285 { int fA; size_t fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5285 { int fA; size_t fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5285 { int fA; size_t fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5285 { int fA; size_t fB; uint32_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5285 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5285 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5285 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5285 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5285 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5286
  * @tc.name : h2dts_gen_5286
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5286', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5286 { int fA; size_t fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5286 { int fA; size_t fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5286 { int fA; size_t fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5286 { int fA; size_t fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5286 { int fA; size_t fB; uint64_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5286 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5286 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5286 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5286 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5286 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5287
  * @tc.name : h2dts_gen_5287
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5287', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5287 { int fA; size_t fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5287 { int fA; size_t fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5287 { int fA; size_t fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5287 { int fA; size_t fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5287 { int fA; size_t fB; int8_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5287 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5287 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5287 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5287 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5287 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5287 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5288
  * @tc.name : h2dts_gen_5288
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5288', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5288 { int fA; size_t fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5288 { int fA; size_t fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5288 { int fA; size_t fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5288 { int fA; size_t fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5288 { int fA; size_t fB; int16_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5288 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5288 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5288 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5288 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5288 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5289
  * @tc.name : h2dts_gen_5289
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5289', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5289 { int fA; size_t fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5289 { int fA; size_t fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5289 { int fA; size_t fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5289 { int fA; size_t fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5289 { int fA; size_t fB; int32_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5289 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5289 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5289 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5289 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5289 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5289 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5290
  * @tc.name : h2dts_gen_5290
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5290', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5290 { int fA; size_t fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5290 { int fA; size_t fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5290 { int fA; size_t fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5290 { int fA; size_t fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5290 { int fA; size_t fB; int64_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5290 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5290 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5290 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5290 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5290 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5290 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5291
  * @tc.name : h2dts_gen_5291
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5291', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5291 { int fA; size_t fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5291 { int fA; size_t fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5291 { int fA; size_t fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5291 { int fA; size_t fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5291 { int fA; size_t fB; unsigned fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5291 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5291 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5291 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5291 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5291 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5291 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5292
  * @tc.name : h2dts_gen_5292
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5292', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5292 { int fA; size_t fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5292 { int fA; size_t fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5292 { int fA; size_t fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5292 { int fA; size_t fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5292 { int fA; size_t fB; bool fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5292 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5292 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5292 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5292 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5292 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5292 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5292 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5293
  * @tc.name : h2dts_gen_5293
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5293', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5293 { int fA; size_t fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5293 { int fA; size_t fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5293 { int fA; size_t fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5293 { int fA; size_t fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5293 { int fA; size_t fB; char fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5293 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5293 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5293 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5293 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5293 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5293 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5294
  * @tc.name : h2dts_gen_5294
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5294', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5294 { int fA; size_t fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5294 { int fA; size_t fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5294 { int fA; size_t fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5294 { int fA; size_t fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5294 { int fA; size_t fB; wchar_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5294 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5294 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5294 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5294 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5294 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5294 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5294 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5295
  * @tc.name : h2dts_gen_5295
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5295', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5295 { int fA; size_t fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5295 { int fA; size_t fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5295 { int fA; size_t fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5295 { int fA; size_t fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5295 { int fA; size_t fB; char8_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5295 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5295 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5295 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5295 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5295 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5295 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5296
  * @tc.name : h2dts_gen_5296
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5296', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5296 { int fA; size_t fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5296 { int fA; size_t fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5296 { int fA; size_t fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5296 { int fA; size_t fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5296 { int fA; size_t fB; char16_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5296 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5296 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5296 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5296 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5296 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5296 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5297
  * @tc.name : h2dts_gen_5297
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5297', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5297 { int fA; size_t fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5297 { int fA; size_t fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5297 { int fA; size_t fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5297 { int fA; size_t fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5297 { int fA; size_t fB; char32_t fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5297 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5297 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5297 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5297 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5297 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5297 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5297 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5298
  * @tc.name : h2dts_gen_5298
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5298', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5298 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5298 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5298 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5298 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5298 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5298 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5298 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5298 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5298 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5298 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5298 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5299
  * @tc.name : h2dts_gen_5299
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5299', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5299 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5299 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5299 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5299 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5299 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5299 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5299 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5299 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5299 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5299 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5300
  * @tc.name : h2dts_gen_5300
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5300', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5300 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5300 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5300 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5300 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5300 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5300 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5300 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5300 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5300 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5300 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5301
  * @tc.name : h2dts_gen_5301
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5301', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5301 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5301 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5301 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5301 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5301 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5301 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5301 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5301 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5301 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5301 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5301 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5302
  * @tc.name : h2dts_gen_5302
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5302', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5302 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5302 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5302 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5302 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5302 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5302 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5302 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5302 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5302 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5302 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5303
  * @tc.name : h2dts_gen_5303
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5303', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5303 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5303 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5303 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5303 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5303 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5303 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5303 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5303 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5303 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5303 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5304
  * @tc.name : h2dts_gen_5304
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5304', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5304 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5304 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5304 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5304 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5304 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5304 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5304 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5304 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5304 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5304 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5304 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5305
  * @tc.name : h2dts_gen_5305
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5305', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5305 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5305 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5305 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5305 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5305 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5305 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5305 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5305 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5305 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5305 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5306
  * @tc.name : h2dts_gen_5306
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5306', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5306 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5306 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5306 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5306 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5306 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5306 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5306 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5306 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5306 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5306 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5306 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5307
  * @tc.name : h2dts_gen_5307
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5307', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5307 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5307 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5307 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5307 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5307 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5307 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5307 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5307 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5307 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5307 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5307 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5308
  * @tc.name : h2dts_gen_5308
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5308', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5308 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5308 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5308 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5308 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5308 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5308 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5308 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5308 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5308 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5308 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5308 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5309
  * @tc.name : h2dts_gen_5309
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5309', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5309 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5309 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5309 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5309 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5309 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5309 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5309 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5309 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5309 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5309 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5309 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5310
  * @tc.name : h2dts_gen_5310
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5310', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5310 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5310 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5310 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5310 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5310 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5310 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5310 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5310 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5310 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5310 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5310 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5311
  * @tc.name : h2dts_gen_5311
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5311', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5311 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5311 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5311 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5311 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5311 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5311 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5311 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5311 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5311 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5311 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5311 执行异常: ${String(err)}`);
    }
  });
});
