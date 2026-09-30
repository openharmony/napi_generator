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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part106.');

  /**
  * @tc.number : h2dts_gen_3558
  * @tc.name : h2dts_gen_3558
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3558', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3558(int a, size_t b, uint8_t c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp3558(int a, size_t b, uint8_t c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp3558(int a, size_t b, uint8_t c, std::deque<double> d);`),
        classes: parseClass(`void r5qp3558(int a, size_t b, uint8_t c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp3558(int a, size_t b, uint8_t c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3558 生成结果为空');
      const expectSnippet0 = 'export function r5qp3558(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3558 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3558 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3558 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3559
  * @tc.name : h2dts_gen_3559
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3559', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp3559(int a, size_t b, uint8_t c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp3559(int a, size_t b, uint8_t c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp3559(int a, size_t b, uint8_t c, std::deque<float> d);`),
        classes: parseClass(`void r5qp3559(int a, size_t b, uint8_t c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp3559(int a, size_t b, uint8_t c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3559 生成结果为空');
      const expectSnippet0 = 'export function r5qp3559(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3559 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3559 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3559 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3560
  * @tc.name : h2dts_gen_3560
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3560', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3560 { int fA; size_t fB; double fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3560 { int fA; size_t fB; double fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3560 { int fA; size_t fB; double fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3560 { int fA; size_t fB; double fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3560 { int fA; size_t fB; double fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3560 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3560 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3560 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3560 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3560 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3560 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3561
  * @tc.name : h2dts_gen_3561
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3561', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3561 { int fA; size_t fB; float fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3561 { int fA; size_t fB; float fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3561 { int fA; size_t fB; float fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3561 { int fA; size_t fB; float fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3561 { int fA; size_t fB; float fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3561 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3561 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3561 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3561 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3561 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3561 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3562
  * @tc.name : h2dts_gen_3562
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3562', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3562 { int fA; size_t fB; short fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3562 { int fA; size_t fB; short fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3562 { int fA; size_t fB; short fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3562 { int fA; size_t fB; short fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3562 { int fA; size_t fB; short fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3562 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3562 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3562 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3562 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3562 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3562 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3563
  * @tc.name : h2dts_gen_3563
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3563', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3563 { int fA; size_t fB; long fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3563 { int fA; size_t fB; long fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3563 { int fA; size_t fB; long fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3563 { int fA; size_t fB; long fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3563 { int fA; size_t fB; long fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3563 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3563 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3563 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3563 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3563 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3563 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3564
  * @tc.name : h2dts_gen_3564
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3564', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3564 { int fA; size_t fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3564 { int fA; size_t fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3564 { int fA; size_t fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3564 { int fA; size_t fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3564 { int fA; size_t fB; uint8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3564 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3564 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3564 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3564 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3564 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3564 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3565
  * @tc.name : h2dts_gen_3565
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3565', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3565 { int fA; size_t fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3565 { int fA; size_t fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3565 { int fA; size_t fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3565 { int fA; size_t fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3565 { int fA; size_t fB; uint16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3565 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3565 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3565 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3565 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3565 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3565 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3566
  * @tc.name : h2dts_gen_3566
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3566', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3566 { int fA; size_t fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3566 { int fA; size_t fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3566 { int fA; size_t fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3566 { int fA; size_t fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3566 { int fA; size_t fB; uint32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3566 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3566 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3566 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3566 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3566 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3566 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3567
  * @tc.name : h2dts_gen_3567
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3567', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3567 { int fA; size_t fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3567 { int fA; size_t fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3567 { int fA; size_t fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3567 { int fA; size_t fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3567 { int fA; size_t fB; uint64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3567 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3567 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3567 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3567 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3567 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3567 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3568
  * @tc.name : h2dts_gen_3568
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3568', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3568 { int fA; size_t fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3568 { int fA; size_t fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3568 { int fA; size_t fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3568 { int fA; size_t fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3568 { int fA; size_t fB; int8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3568 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3568 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3568 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3568 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3568 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3568 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3569
  * @tc.name : h2dts_gen_3569
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3569', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3569 { int fA; size_t fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3569 { int fA; size_t fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3569 { int fA; size_t fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3569 { int fA; size_t fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3569 { int fA; size_t fB; int16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3569 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3569 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3569 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3569 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3569 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3569 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3570
  * @tc.name : h2dts_gen_3570
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3570', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3570 { int fA; size_t fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3570 { int fA; size_t fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3570 { int fA; size_t fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3570 { int fA; size_t fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3570 { int fA; size_t fB; int32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3570 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3570 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3570 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3570 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3570 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3570 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3571
  * @tc.name : h2dts_gen_3571
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3571', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3571 { int fA; size_t fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3571 { int fA; size_t fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3571 { int fA; size_t fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3571 { int fA; size_t fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3571 { int fA; size_t fB; int64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3571 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3571 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3571 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3571 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3571 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3571 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3572
  * @tc.name : h2dts_gen_3572
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3572', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3572 { int fA; size_t fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3572 { int fA; size_t fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3572 { int fA; size_t fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3572 { int fA; size_t fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3572 { int fA; size_t fB; unsigned fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3572 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3572 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3572 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3572 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3572 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3572 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3573
  * @tc.name : h2dts_gen_3573
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3573', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3573 { int fA; size_t fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3573 { int fA; size_t fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3573 { int fA; size_t fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3573 { int fA; size_t fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3573 { int fA; size_t fB; bool fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3573 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3573 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3573 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3573 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3573 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3573 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3573 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3574
  * @tc.name : h2dts_gen_3574
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3574', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3574 { int fA; size_t fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3574 { int fA; size_t fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3574 { int fA; size_t fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3574 { int fA; size_t fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3574 { int fA; size_t fB; char fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3574 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3574 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3574 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3574 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3574 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3574 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3574 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3575
  * @tc.name : h2dts_gen_3575
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3575', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3575 { int fA; size_t fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3575 { int fA; size_t fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3575 { int fA; size_t fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3575 { int fA; size_t fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3575 { int fA; size_t fB; wchar_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3575 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3575 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3575 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3575 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3575 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3575 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3575 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3576
  * @tc.name : h2dts_gen_3576
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3576', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3576 { int fA; size_t fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3576 { int fA; size_t fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3576 { int fA; size_t fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3576 { int fA; size_t fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3576 { int fA; size_t fB; char8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3576 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3576 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3576 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3576 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3576 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3576 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3576 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3577
  * @tc.name : h2dts_gen_3577
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3577', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3577 { int fA; size_t fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3577 { int fA; size_t fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3577 { int fA; size_t fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3577 { int fA; size_t fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3577 { int fA; size_t fB; char16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3577 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3577 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3577 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3577 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3577 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3577 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3577 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3578
  * @tc.name : h2dts_gen_3578
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3578', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3578 { int fA; size_t fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3578 { int fA; size_t fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3578 { int fA; size_t fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3578 { int fA; size_t fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3578 { int fA; size_t fB; char32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3578 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3578 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3578 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3578 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3578 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3578 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3578 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3579
  * @tc.name : h2dts_gen_3579
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3579', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3579 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3579 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3579 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3579 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3579 { int fA; size_t fB; std::string::iterator fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3579 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3579 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3579 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3579 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3579 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3579 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3579 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3580
  * @tc.name : h2dts_gen_3580
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3580', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3580 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3580 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3580 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3580 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3580 { int fA; size_t fB; std::vector<int> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3580 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3580 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3580 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3580 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3580 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3580 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3581
  * @tc.name : h2dts_gen_3581
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3581', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3581 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3581 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3581 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3581 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3581 { int fA; size_t fB; std::vector<size_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3581 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3581 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3581 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3581 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3581 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3581 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3582
  * @tc.name : h2dts_gen_3582
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3582', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3582 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3582 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3582 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3582 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3582 { int fA; size_t fB; std::vector<double> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3582 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3582 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3582 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3582 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3582 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3582 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3583
  * @tc.name : h2dts_gen_3583
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3583', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3583 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3583 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3583 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3583 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3583 { int fA; size_t fB; std::vector<float> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3583 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3583 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3583 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3583 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3583 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3583 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3584
  * @tc.name : h2dts_gen_3584
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3584', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3584 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3584 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3584 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3584 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3584 { int fA; size_t fB; std::vector<long> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3584 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3584 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3584 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3584 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3584 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3584 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3585
  * @tc.name : h2dts_gen_3585
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3585', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3585 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3585 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3585 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3585 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3585 { int fA; size_t fB; std::vector<short> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3585 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3585 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3585 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3585 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3585 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3585 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3586
  * @tc.name : h2dts_gen_3586
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3586', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3586 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3586 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3586 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3586 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3586 { int fA; size_t fB; std::vector<uint8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3586 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3586 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3586 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3586 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3586 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3586 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3587
  * @tc.name : h2dts_gen_3587
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3587', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3587 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3587 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3587 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3587 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3587 { int fA; size_t fB; std::vector<uint16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3587 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3587 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3587 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3587 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3587 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3587 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3588
  * @tc.name : h2dts_gen_3588
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3588', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3588 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3588 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3588 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3588 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3588 { int fA; size_t fB; std::vector<uint32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3588 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3588 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3588 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3588 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3588 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3588 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3589
  * @tc.name : h2dts_gen_3589
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3589', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3589 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3589 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3589 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3589 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3589 { int fA; size_t fB; std::vector<uint64_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3589 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3589 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3589 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3589 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3589 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3589 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3590
  * @tc.name : h2dts_gen_3590
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3590', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3590 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3590 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3590 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3590 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3590 { int fA; size_t fB; std::vector<int8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3590 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3590 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3590 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3590 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3590 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3590 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3591
  * @tc.name : h2dts_gen_3591
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3591', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3591 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3591 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3591 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3591 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3591 { int fA; size_t fB; std::vector<int16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3591 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3591 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3591 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3591 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3591 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3591 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3592
  * @tc.name : h2dts_gen_3592
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3592', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3592 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3592 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3592 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3592 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3592 { int fA; size_t fB; std::vector<int32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3592 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3592 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3592 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3592 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3592 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3592 执行异常: ${String(err)}`);
    }
  });
});
