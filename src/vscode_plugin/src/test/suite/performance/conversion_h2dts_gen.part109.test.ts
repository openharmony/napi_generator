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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part109.');

  /**
  * @tc.number : h2dts_gen_3663
  * @tc.name : h2dts_gen_3663
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3663', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3663 { int fA; short fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3663 { int fA; short fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3663 { int fA; short fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3663 { int fA; short fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3663 { int fA; short fB; int32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3663 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3663 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3663 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3663 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3663 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3663 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3664
  * @tc.name : h2dts_gen_3664
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3664', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3664 { int fA; short fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3664 { int fA; short fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3664 { int fA; short fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3664 { int fA; short fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3664 { int fA; short fB; int64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3664 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3664 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3664 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3664 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3664 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3664 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3665
  * @tc.name : h2dts_gen_3665
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3665', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3665 { int fA; short fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3665 { int fA; short fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3665 { int fA; short fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3665 { int fA; short fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3665 { int fA; short fB; unsigned fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3665 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3665 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3665 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3665 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3665 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3665 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3666
  * @tc.name : h2dts_gen_3666
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3666', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3666 { int fA; short fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3666 { int fA; short fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3666 { int fA; short fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3666 { int fA; short fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3666 { int fA; short fB; bool fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3666 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3666 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3666 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3666 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3666 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3666 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3666 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3667
  * @tc.name : h2dts_gen_3667
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3667', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3667 { int fA; short fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3667 { int fA; short fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3667 { int fA; short fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3667 { int fA; short fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3667 { int fA; short fB; char fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3667 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3667 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3667 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3667 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3667 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3667 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3667 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3668
  * @tc.name : h2dts_gen_3668
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3668', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3668 { int fA; short fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3668 { int fA; short fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3668 { int fA; short fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3668 { int fA; short fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3668 { int fA; short fB; wchar_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3668 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3668 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3668 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3668 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3668 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3668 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3668 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3669
  * @tc.name : h2dts_gen_3669
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3669', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3669 { int fA; short fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3669 { int fA; short fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3669 { int fA; short fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3669 { int fA; short fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3669 { int fA; short fB; char8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3669 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3669 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3669 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3669 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3669 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3669 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3669 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3670
  * @tc.name : h2dts_gen_3670
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3670', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3670 { int fA; short fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3670 { int fA; short fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3670 { int fA; short fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3670 { int fA; short fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3670 { int fA; short fB; char16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3670 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3670 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3670 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3670 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3670 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3670 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3670 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3671
  * @tc.name : h2dts_gen_3671
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3671', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3671 { int fA; short fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3671 { int fA; short fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3671 { int fA; short fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3671 { int fA; short fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3671 { int fA; short fB; char32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3671 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3671 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3671 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3671 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3671 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3671 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3671 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3672
  * @tc.name : h2dts_gen_3672
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3672', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3672 { int fA; short fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3672 { int fA; short fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3672 { int fA; short fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3672 { int fA; short fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3672 { int fA; short fB; std::string::iterator fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3672 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3672 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3672 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3672 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3672 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3672 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3672 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3673
  * @tc.name : h2dts_gen_3673
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3673', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3673 { int fA; short fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3673 { int fA; short fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3673 { int fA; short fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3673 { int fA; short fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3673 { int fA; short fB; std::vector<int> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3673 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3673 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3673 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3673 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3673 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3673 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3674
  * @tc.name : h2dts_gen_3674
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3674', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3674 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3674 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3674 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3674 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3674 { int fA; short fB; std::vector<size_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3674 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3674 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3674 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3674 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3674 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3674 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3675
  * @tc.name : h2dts_gen_3675
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3675', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3675 { int fA; short fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3675 { int fA; short fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3675 { int fA; short fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3675 { int fA; short fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3675 { int fA; short fB; std::vector<double> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3675 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3675 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3675 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3675 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3675 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3675 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3676
  * @tc.name : h2dts_gen_3676
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3676', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3676 { int fA; short fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3676 { int fA; short fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3676 { int fA; short fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3676 { int fA; short fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3676 { int fA; short fB; std::vector<float> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3676 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3676 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3676 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3676 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3676 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3676 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3677
  * @tc.name : h2dts_gen_3677
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3677', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3677 { int fA; short fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3677 { int fA; short fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3677 { int fA; short fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3677 { int fA; short fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3677 { int fA; short fB; std::vector<long> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3677 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3677 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3677 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3677 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3677 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3677 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3678
  * @tc.name : h2dts_gen_3678
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3678', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3678 { int fA; short fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3678 { int fA; short fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3678 { int fA; short fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3678 { int fA; short fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3678 { int fA; short fB; std::vector<short> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3678 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3678 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3678 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3678 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3678 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3678 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3679
  * @tc.name : h2dts_gen_3679
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3679', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3679 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3679 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3679 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3679 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3679 { int fA; short fB; std::vector<uint8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3679 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3679 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3679 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3679 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3679 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3679 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3680
  * @tc.name : h2dts_gen_3680
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3680', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3680 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3680 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3680 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3680 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3680 { int fA; short fB; std::vector<uint16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3680 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3680 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3680 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3680 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3680 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3680 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3681
  * @tc.name : h2dts_gen_3681
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3681', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3681 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3681 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3681 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3681 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3681 { int fA; short fB; std::vector<uint32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3681 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3681 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3681 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3681 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3681 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3681 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3682
  * @tc.name : h2dts_gen_3682
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3682', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3682 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3682 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3682 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3682 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3682 { int fA; short fB; std::vector<uint64_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3682 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3682 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3682 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3682 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3682 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3682 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3683
  * @tc.name : h2dts_gen_3683
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3683', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3683 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3683 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3683 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3683 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3683 { int fA; short fB; std::vector<int8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3683 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3683 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3683 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3683 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3683 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3683 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3684
  * @tc.name : h2dts_gen_3684
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3684', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3684 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3684 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3684 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3684 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3684 { int fA; short fB; std::vector<int16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3684 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3684 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3684 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3684 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3684 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3684 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3685
  * @tc.name : h2dts_gen_3685
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3685', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3685 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3685 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3685 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3685 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3685 { int fA; short fB; std::vector<int32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3685 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3685 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3685 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3685 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3685 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3685 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3686
  * @tc.name : h2dts_gen_3686
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3686', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3686 { int fA; long fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3686 { int fA; long fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3686 { int fA; long fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3686 { int fA; long fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3686 { int fA; long fB; uint8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3686 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3686 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3686 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3686 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3686 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3686 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3687
  * @tc.name : h2dts_gen_3687
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3687', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3687 { int fA; long fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3687 { int fA; long fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3687 { int fA; long fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3687 { int fA; long fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3687 { int fA; long fB; uint16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3687 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3687 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3687 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3687 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3687 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3687 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3688
  * @tc.name : h2dts_gen_3688
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3688', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3688 { int fA; long fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3688 { int fA; long fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3688 { int fA; long fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3688 { int fA; long fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3688 { int fA; long fB; uint32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3688 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3688 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3688 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3688 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3688 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3688 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3689
  * @tc.name : h2dts_gen_3689
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3689', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3689 { int fA; long fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3689 { int fA; long fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3689 { int fA; long fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3689 { int fA; long fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3689 { int fA; long fB; uint64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3689 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3689 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3689 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3689 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3689 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3689 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3690
  * @tc.name : h2dts_gen_3690
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3690', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3690 { int fA; long fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3690 { int fA; long fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3690 { int fA; long fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3690 { int fA; long fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3690 { int fA; long fB; int8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3690 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3690 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3690 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3690 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3690 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3690 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3691
  * @tc.name : h2dts_gen_3691
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3691', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3691 { int fA; long fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3691 { int fA; long fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3691 { int fA; long fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3691 { int fA; long fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3691 { int fA; long fB; int16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3691 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3691 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3691 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3691 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3691 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3691 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3692
  * @tc.name : h2dts_gen_3692
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3692', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3692 { int fA; long fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3692 { int fA; long fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3692 { int fA; long fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3692 { int fA; long fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3692 { int fA; long fB; int32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3692 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3692 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3692 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3692 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3692 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3692 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3693
  * @tc.name : h2dts_gen_3693
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3693', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3693 { int fA; long fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3693 { int fA; long fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3693 { int fA; long fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3693 { int fA; long fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3693 { int fA; long fB; int64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3693 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3693 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3693 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3693 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3693 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3693 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3694
  * @tc.name : h2dts_gen_3694
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3694', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3694 { int fA; long fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3694 { int fA; long fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3694 { int fA; long fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3694 { int fA; long fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3694 { int fA; long fB; unsigned fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3694 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3694 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3694 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3694 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3694 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3694 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3695
  * @tc.name : h2dts_gen_3695
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3695', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3695 { int fA; long fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3695 { int fA; long fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3695 { int fA; long fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3695 { int fA; long fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3695 { int fA; long fB; bool fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3695 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3695 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3695 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3695 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3695 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3695 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3695 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3696
  * @tc.name : h2dts_gen_3696
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3696', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3696 { int fA; long fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3696 { int fA; long fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3696 { int fA; long fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3696 { int fA; long fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3696 { int fA; long fB; char fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3696 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3696 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3696 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3696 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3696 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3696 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3696 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3697
  * @tc.name : h2dts_gen_3697
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3697', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3697 { int fA; long fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3697 { int fA; long fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3697 { int fA; long fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3697 { int fA; long fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3697 { int fA; long fB; wchar_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3697 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3697 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3697 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3697 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3697 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3697 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3697 执行异常: ${String(err)}`);
    }
  });
});
