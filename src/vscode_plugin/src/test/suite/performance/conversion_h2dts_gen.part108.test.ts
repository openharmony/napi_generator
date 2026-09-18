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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part108.');

  /**
  * @tc.number : h2dts_gen_3628
  * @tc.name : h2dts_gen_3628
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3628', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3628 { int fA; float fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3628 { int fA; float fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3628 { int fA; float fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3628 { int fA; float fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3628 { int fA; float fB; uint16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3628 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3628 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3628 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3628 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3628 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3628 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3629
  * @tc.name : h2dts_gen_3629
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3629', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3629 { int fA; float fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3629 { int fA; float fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3629 { int fA; float fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3629 { int fA; float fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3629 { int fA; float fB; uint32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3629 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3629 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3629 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3629 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3629 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3629 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3630
  * @tc.name : h2dts_gen_3630
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3630', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3630 { int fA; float fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3630 { int fA; float fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3630 { int fA; float fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3630 { int fA; float fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3630 { int fA; float fB; uint64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3630 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3630 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3630 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3630 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3630 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3630 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3631
  * @tc.name : h2dts_gen_3631
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3631', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3631 { int fA; float fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3631 { int fA; float fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3631 { int fA; float fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3631 { int fA; float fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3631 { int fA; float fB; int8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3631 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3631 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3631 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3631 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3631 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3631 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3632
  * @tc.name : h2dts_gen_3632
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3632', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3632 { int fA; float fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3632 { int fA; float fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3632 { int fA; float fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3632 { int fA; float fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3632 { int fA; float fB; int16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3632 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3632 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3632 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3632 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3632 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3632 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3633
  * @tc.name : h2dts_gen_3633
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3633', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3633 { int fA; float fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3633 { int fA; float fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3633 { int fA; float fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3633 { int fA; float fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3633 { int fA; float fB; int32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3633 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3633 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3633 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3633 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3633 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3633 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3634
  * @tc.name : h2dts_gen_3634
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3634', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3634 { int fA; float fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3634 { int fA; float fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3634 { int fA; float fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3634 { int fA; float fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3634 { int fA; float fB; int64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3634 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3634 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3634 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3634 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3634 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3634 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3635
  * @tc.name : h2dts_gen_3635
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3635', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3635 { int fA; float fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3635 { int fA; float fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3635 { int fA; float fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3635 { int fA; float fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3635 { int fA; float fB; unsigned fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3635 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3635 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3635 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3635 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3635 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3635 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3636
  * @tc.name : h2dts_gen_3636
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3636', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3636 { int fA; float fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3636 { int fA; float fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3636 { int fA; float fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3636 { int fA; float fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3636 { int fA; float fB; bool fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3636 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3636 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3636 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3636 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3636 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3636 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3636 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3637
  * @tc.name : h2dts_gen_3637
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3637', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3637 { int fA; float fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3637 { int fA; float fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3637 { int fA; float fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3637 { int fA; float fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3637 { int fA; float fB; char fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3637 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3637 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3637 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3637 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3637 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3637 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3637 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3638
  * @tc.name : h2dts_gen_3638
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3638', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3638 { int fA; float fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3638 { int fA; float fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3638 { int fA; float fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3638 { int fA; float fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3638 { int fA; float fB; wchar_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3638 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3638 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3638 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3638 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3638 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3638 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3638 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3639
  * @tc.name : h2dts_gen_3639
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3639', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3639 { int fA; float fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3639 { int fA; float fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3639 { int fA; float fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3639 { int fA; float fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3639 { int fA; float fB; char8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3639 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3639 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3639 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3639 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3639 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3639 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3639 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3640
  * @tc.name : h2dts_gen_3640
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3640', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3640 { int fA; float fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3640 { int fA; float fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3640 { int fA; float fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3640 { int fA; float fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3640 { int fA; float fB; char16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3640 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3640 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3640 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3640 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3640 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3640 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3640 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3641
  * @tc.name : h2dts_gen_3641
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3641', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3641 { int fA; float fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3641 { int fA; float fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3641 { int fA; float fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3641 { int fA; float fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3641 { int fA; float fB; char32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3641 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3641 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3641 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3641 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3641 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3641 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3641 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3642
  * @tc.name : h2dts_gen_3642
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3642', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3642 { int fA; float fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3642 { int fA; float fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3642 { int fA; float fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3642 { int fA; float fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3642 { int fA; float fB; std::string::iterator fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3642 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3642 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3642 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3642 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3642 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3642 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3642 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3643
  * @tc.name : h2dts_gen_3643
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3643', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3643 { int fA; float fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3643 { int fA; float fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3643 { int fA; float fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3643 { int fA; float fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3643 { int fA; float fB; std::vector<int> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3643 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3643 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3643 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3643 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3643 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3643 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3644
  * @tc.name : h2dts_gen_3644
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3644', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3644 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3644 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3644 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3644 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3644 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3644 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3644 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3644 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3644 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3644 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3644 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3645
  * @tc.name : h2dts_gen_3645
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3645', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3645 { int fA; float fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3645 { int fA; float fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3645 { int fA; float fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3645 { int fA; float fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3645 { int fA; float fB; std::vector<double> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3645 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3645 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3645 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3645 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3645 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3645 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3646
  * @tc.name : h2dts_gen_3646
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3646', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3646 { int fA; float fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3646 { int fA; float fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3646 { int fA; float fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3646 { int fA; float fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3646 { int fA; float fB; std::vector<float> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3646 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3646 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3646 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3646 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3646 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3646 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3647
  * @tc.name : h2dts_gen_3647
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3647', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3647 { int fA; float fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3647 { int fA; float fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3647 { int fA; float fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3647 { int fA; float fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3647 { int fA; float fB; std::vector<long> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3647 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3647 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3647 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3647 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3647 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3647 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3648
  * @tc.name : h2dts_gen_3648
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3648', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3648 { int fA; float fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3648 { int fA; float fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3648 { int fA; float fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3648 { int fA; float fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3648 { int fA; float fB; std::vector<short> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3648 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3648 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3648 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3648 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3648 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3648 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3649
  * @tc.name : h2dts_gen_3649
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3649', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3649 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3649 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3649 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3649 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3649 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3649 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3649 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3649 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3649 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3649 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3649 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3650
  * @tc.name : h2dts_gen_3650
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3650', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3650 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3650 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3650 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3650 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3650 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3650 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3650 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3650 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3650 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3650 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3650 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3651
  * @tc.name : h2dts_gen_3651
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3651', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3651 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3651 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3651 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3651 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3651 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3651 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3651 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3651 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3651 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3651 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3651 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3652
  * @tc.name : h2dts_gen_3652
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3652', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3652 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3652 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3652 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3652 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3652 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3652 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3652 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3652 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3652 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3652 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3652 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3653
  * @tc.name : h2dts_gen_3653
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3653', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3653 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3653 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3653 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3653 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3653 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3653 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3653 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3653 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3653 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3653 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3653 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3654
  * @tc.name : h2dts_gen_3654
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3654', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3654 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3654 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3654 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3654 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3654 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3654 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3654 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3654 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3654 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3654 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3654 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3655
  * @tc.name : h2dts_gen_3655
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3655', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3655 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3655 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3655 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3655 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3655 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3655 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3655 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3655 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3655 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3655 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3655 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3656
  * @tc.name : h2dts_gen_3656
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3656', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3656 { int fA; short fB; long fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3656 { int fA; short fB; long fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3656 { int fA; short fB; long fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3656 { int fA; short fB; long fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3656 { int fA; short fB; long fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3656 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3656 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3656 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3656 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3656 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3656 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3657
  * @tc.name : h2dts_gen_3657
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3657', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3657 { int fA; short fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3657 { int fA; short fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3657 { int fA; short fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3657 { int fA; short fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3657 { int fA; short fB; uint8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3657 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3657 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3657 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3657 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3657 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3657 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3658
  * @tc.name : h2dts_gen_3658
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3658', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3658 { int fA; short fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3658 { int fA; short fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3658 { int fA; short fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3658 { int fA; short fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3658 { int fA; short fB; uint16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3658 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3658 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3658 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3658 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3658 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3658 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3659
  * @tc.name : h2dts_gen_3659
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3659', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3659 { int fA; short fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3659 { int fA; short fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3659 { int fA; short fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3659 { int fA; short fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3659 { int fA; short fB; uint32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3659 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3659 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3659 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3659 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3659 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3659 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3660
  * @tc.name : h2dts_gen_3660
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3660', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3660 { int fA; short fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3660 { int fA; short fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3660 { int fA; short fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3660 { int fA; short fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3660 { int fA; short fB; uint64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3660 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3660 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3660 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3660 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3660 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3660 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3661
  * @tc.name : h2dts_gen_3661
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3661', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3661 { int fA; short fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3661 { int fA; short fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3661 { int fA; short fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3661 { int fA; short fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3661 { int fA; short fB; int8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3661 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3661 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3661 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3661 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3661 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3661 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3662
  * @tc.name : h2dts_gen_3662
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3662', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3662 { int fA; short fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3662 { int fA; short fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3662 { int fA; short fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3662 { int fA; short fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3662 { int fA; short fB; int16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3662 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3662 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3662 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3662 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3662 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3662 执行异常: ${String(err)}`);
    }
  });
});
