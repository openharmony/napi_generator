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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part159.');

  /**
  * @tc.number : h2dts_gen_5382
  * @tc.name : h2dts_gen_5382
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5382', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5382 { int fA; short fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5382 { int fA; short fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5382 { int fA; short fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5382 { int fA; short fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5382 { int fA; short fB; int32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5382 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5382 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5382 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5382 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5382 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5382 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5383
  * @tc.name : h2dts_gen_5383
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5383', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5383 { int fA; short fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5383 { int fA; short fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5383 { int fA; short fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5383 { int fA; short fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5383 { int fA; short fB; int64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5383 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5383 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5383 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5383 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5383 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5383 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5384
  * @tc.name : h2dts_gen_5384
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5384', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5384 { int fA; short fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5384 { int fA; short fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5384 { int fA; short fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5384 { int fA; short fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5384 { int fA; short fB; unsigned fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5384 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5384 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5384 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5384 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5384 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5384 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5385
  * @tc.name : h2dts_gen_5385
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5385', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5385 { int fA; short fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5385 { int fA; short fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5385 { int fA; short fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5385 { int fA; short fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5385 { int fA; short fB; bool fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5385 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5385 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5385 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5385 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5385 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5385 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5385 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5386
  * @tc.name : h2dts_gen_5386
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5386', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5386 { int fA; short fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5386 { int fA; short fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5386 { int fA; short fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5386 { int fA; short fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5386 { int fA; short fB; char fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5386 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5386 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5386 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5386 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5386 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5386 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5387
  * @tc.name : h2dts_gen_5387
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5387', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5387 { int fA; short fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5387 { int fA; short fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5387 { int fA; short fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5387 { int fA; short fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5387 { int fA; short fB; wchar_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5387 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5387 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5387 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5387 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5387 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5387 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5388
  * @tc.name : h2dts_gen_5388
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5388', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5388 { int fA; short fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5388 { int fA; short fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5388 { int fA; short fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5388 { int fA; short fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5388 { int fA; short fB; char8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5388 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5388 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5388 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5388 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5388 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5388 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5389
  * @tc.name : h2dts_gen_5389
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5389', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5389 { int fA; short fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5389 { int fA; short fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5389 { int fA; short fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5389 { int fA; short fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5389 { int fA; short fB; char16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5389 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5389 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5389 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5389 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5389 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5389 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5390
  * @tc.name : h2dts_gen_5390
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5390', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5390 { int fA; short fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5390 { int fA; short fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5390 { int fA; short fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5390 { int fA; short fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5390 { int fA; short fB; char32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5390 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5390 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5390 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5390 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5390 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5390 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5391
  * @tc.name : h2dts_gen_5391
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5391', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5391 { int fA; short fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5391 { int fA; short fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5391 { int fA; short fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5391 { int fA; short fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5391 { int fA; short fB; std::string::iterator fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5391 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5391 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5391 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5391 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5391 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5391 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5391 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5392
  * @tc.name : h2dts_gen_5392
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5392', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5392 { int fA; short fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5392 { int fA; short fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5392 { int fA; short fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5392 { int fA; short fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5392 { int fA; short fB; std::vector<int> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5392 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5392 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5392 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5392 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5392 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5393
  * @tc.name : h2dts_gen_5393
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5393', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5393 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5393 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5393 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5393 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5393 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5393 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5393 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5393 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5393 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5393 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5394
  * @tc.name : h2dts_gen_5394
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5394', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5394 { int fA; short fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5394 { int fA; short fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5394 { int fA; short fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5394 { int fA; short fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5394 { int fA; short fB; std::vector<double> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5394 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5394 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5394 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5394 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5394 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5395
  * @tc.name : h2dts_gen_5395
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5395', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5395 { int fA; short fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5395 { int fA; short fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5395 { int fA; short fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5395 { int fA; short fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5395 { int fA; short fB; std::vector<float> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5395 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5395 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5395 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5395 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5395 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5395 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5396
  * @tc.name : h2dts_gen_5396
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5396', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5396 { int fA; short fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5396 { int fA; short fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5396 { int fA; short fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5396 { int fA; short fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5396 { int fA; short fB; std::vector<long> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5396 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5396 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5396 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5396 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5396 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5397
  * @tc.name : h2dts_gen_5397
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5397', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5397 { int fA; short fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5397 { int fA; short fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5397 { int fA; short fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5397 { int fA; short fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5397 { int fA; short fB; std::vector<short> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5397 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5397 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5397 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5397 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5397 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5398
  * @tc.name : h2dts_gen_5398
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5398', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5398 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5398 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5398 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5398 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5398 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5398 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5398 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5398 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5398 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5398 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5399
  * @tc.name : h2dts_gen_5399
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5399', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5399 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5399 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5399 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5399 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5399 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5399 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5399 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5399 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5399 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5399 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5400
  * @tc.name : h2dts_gen_5400
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5400', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5400 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5400 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5400 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5400 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5400 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5400 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5400 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5400 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5400 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5400 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5401
  * @tc.name : h2dts_gen_5401
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5401', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5401 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5401 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5401 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5401 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5401 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5401 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5401 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5401 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5401 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5401 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5401 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5402
  * @tc.name : h2dts_gen_5402
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5402', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5402 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5402 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5402 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5402 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5402 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5402 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5402 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5402 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5402 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5402 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5402 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5403
  * @tc.name : h2dts_gen_5403
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5403', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5403 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5403 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5403 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5403 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5403 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5403 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5403 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5403 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5403 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5403 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5403 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5404
  * @tc.name : h2dts_gen_5404
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5404', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5404 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5404 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5404 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5404 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5404 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5404 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5404 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5404 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5404 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5404 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5404 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5405
  * @tc.name : h2dts_gen_5405
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5405', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5405 { int fA; long fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5405 { int fA; long fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5405 { int fA; long fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5405 { int fA; long fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5405 { int fA; long fB; uint8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5405 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5405 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5405 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5405 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5405 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5405 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5406
  * @tc.name : h2dts_gen_5406
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5406', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5406 { int fA; long fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5406 { int fA; long fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5406 { int fA; long fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5406 { int fA; long fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5406 { int fA; long fB; uint16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5406 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5406 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5406 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5406 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5406 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5406 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5407
  * @tc.name : h2dts_gen_5407
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5407', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5407 { int fA; long fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5407 { int fA; long fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5407 { int fA; long fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5407 { int fA; long fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5407 { int fA; long fB; uint32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5407 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5407 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5407 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5407 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5407 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5407 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5408
  * @tc.name : h2dts_gen_5408
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5408', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5408 { int fA; long fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5408 { int fA; long fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5408 { int fA; long fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5408 { int fA; long fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5408 { int fA; long fB; uint64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5408 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5408 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5408 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5408 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5408 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5408 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5409
  * @tc.name : h2dts_gen_5409
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5409', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5409 { int fA; long fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5409 { int fA; long fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5409 { int fA; long fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5409 { int fA; long fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5409 { int fA; long fB; int8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5409 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5409 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5409 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5409 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5409 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5409 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5410
  * @tc.name : h2dts_gen_5410
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5410', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5410 { int fA; long fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5410 { int fA; long fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5410 { int fA; long fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5410 { int fA; long fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5410 { int fA; long fB; int16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5410 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5410 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5410 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5410 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5410 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5410 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5411
  * @tc.name : h2dts_gen_5411
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5411', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5411 { int fA; long fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5411 { int fA; long fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5411 { int fA; long fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5411 { int fA; long fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5411 { int fA; long fB; int32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5411 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5411 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5411 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5411 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5411 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5411 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5412
  * @tc.name : h2dts_gen_5412
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5412', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5412 { int fA; long fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5412 { int fA; long fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5412 { int fA; long fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5412 { int fA; long fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5412 { int fA; long fB; int64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5412 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5412 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5412 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5412 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5412 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5413
  * @tc.name : h2dts_gen_5413
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5413', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5413 { int fA; long fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5413 { int fA; long fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5413 { int fA; long fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5413 { int fA; long fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5413 { int fA; long fB; unsigned fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5413 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5413 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5413 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5413 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5413 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5414
  * @tc.name : h2dts_gen_5414
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5414', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5414 { int fA; long fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5414 { int fA; long fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5414 { int fA; long fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5414 { int fA; long fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5414 { int fA; long fB; bool fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5414 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5414 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5414 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5414 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5414 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5414 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5415
  * @tc.name : h2dts_gen_5415
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5415', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5415 { int fA; long fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5415 { int fA; long fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5415 { int fA; long fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5415 { int fA; long fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5415 { int fA; long fB; char fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5415 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5415 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5415 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5415 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5415 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5415 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5416
  * @tc.name : h2dts_gen_5416
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5416', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5416 { int fA; long fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5416 { int fA; long fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5416 { int fA; long fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5416 { int fA; long fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5416 { int fA; long fB; wchar_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5416 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5416 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5416 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5416 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5416 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5416 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5416 执行异常: ${String(err)}`);
    }
  });
});
