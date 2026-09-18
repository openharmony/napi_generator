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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part110.');

  /**
  * @tc.number : h2dts_gen_3698
  * @tc.name : h2dts_gen_3698
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3698', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3698 { int fA; long fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3698 { int fA; long fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3698 { int fA; long fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3698 { int fA; long fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3698 { int fA; long fB; char8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3698 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3698 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3698 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3698 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3698 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3698 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3698 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3699
  * @tc.name : h2dts_gen_3699
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3699', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3699 { int fA; long fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3699 { int fA; long fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3699 { int fA; long fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3699 { int fA; long fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3699 { int fA; long fB; char16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3699 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3699 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3699 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3699 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3699 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3699 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3699 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3700
  * @tc.name : h2dts_gen_3700
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3700', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3700 { int fA; long fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3700 { int fA; long fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3700 { int fA; long fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3700 { int fA; long fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3700 { int fA; long fB; char32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3700 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3700 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3700 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3700 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3700 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3700 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3700 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3701
  * @tc.name : h2dts_gen_3701
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3701', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3701 { int fA; long fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3701 { int fA; long fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3701 { int fA; long fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3701 { int fA; long fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3701 { int fA; long fB; std::string::iterator fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3701 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3701 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3701 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3701 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3701 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3701 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3701 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3702
  * @tc.name : h2dts_gen_3702
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3702', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3702 { int fA; long fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3702 { int fA; long fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3702 { int fA; long fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3702 { int fA; long fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3702 { int fA; long fB; std::vector<int> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3702 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3702 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3702 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3702 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3702 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3702 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3703
  * @tc.name : h2dts_gen_3703
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3703', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3703 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3703 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3703 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3703 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3703 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3703 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3703 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3703 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3703 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3703 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3703 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3704
  * @tc.name : h2dts_gen_3704
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3704', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3704 { int fA; long fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3704 { int fA; long fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3704 { int fA; long fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3704 { int fA; long fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3704 { int fA; long fB; std::vector<double> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3704 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3704 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3704 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3704 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3704 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3704 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3705
  * @tc.name : h2dts_gen_3705
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3705', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3705 { int fA; long fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3705 { int fA; long fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3705 { int fA; long fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3705 { int fA; long fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3705 { int fA; long fB; std::vector<float> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3705 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3705 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3705 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3705 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3705 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3705 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3706
  * @tc.name : h2dts_gen_3706
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3706', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3706 { int fA; long fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3706 { int fA; long fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3706 { int fA; long fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3706 { int fA; long fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3706 { int fA; long fB; std::vector<long> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3706 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3706 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3706 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3706 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3706 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3706 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3707
  * @tc.name : h2dts_gen_3707
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3707', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3707 { int fA; long fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3707 { int fA; long fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3707 { int fA; long fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3707 { int fA; long fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3707 { int fA; long fB; std::vector<short> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3707 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3707 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3707 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3707 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3707 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3707 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3708
  * @tc.name : h2dts_gen_3708
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3708', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3708 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3708 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3708 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3708 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3708 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3708 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3708 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3708 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3708 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3708 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3708 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3709
  * @tc.name : h2dts_gen_3709
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3709', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3709 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3709 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3709 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3709 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3709 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3709 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3709 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3709 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3709 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3709 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3709 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3710
  * @tc.name : h2dts_gen_3710
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3710', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3710 { int value; void reset(); } R5St3710;`),
        unions: parseUnion(`typedef struct R5St3710 { int value; void reset(); } R5St3710;`),
        structs: parseStruct(`typedef struct R5St3710 { int value; void reset(); } R5St3710;`),
        classes: parseClass(`typedef struct R5St3710 { int value; void reset(); } R5St3710;`),
        funcs: parseFunction(`typedef struct R5St3710 { int value; void reset(); } R5St3710;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3710 生成结果为空');
      const expectSnippet0 = 'export type R5St3710 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3710 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3710 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3710 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3710 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3711
  * @tc.name : h2dts_gen_3711
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3711', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3711 { int value; int sum(int a, int b); } R5St3711;`),
        unions: parseUnion(`typedef struct R5St3711 { int value; int sum(int a, int b); } R5St3711;`),
        structs: parseStruct(`typedef struct R5St3711 { int value; int sum(int a, int b); } R5St3711;`),
        classes: parseClass(`typedef struct R5St3711 { int value; int sum(int a, int b); } R5St3711;`),
        funcs: parseFunction(`typedef struct R5St3711 { int value; int sum(int a, int b); } R5St3711;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3711 生成结果为空');
      const expectSnippet0 = 'export type R5St3711 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3711 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3711 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3711 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3711 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3712
  * @tc.name : h2dts_gen_3712
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3712', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3712 { int value; bool check() const; } R5St3712;`),
        unions: parseUnion(`typedef struct R5St3712 { int value; bool check() const; } R5St3712;`),
        structs: parseStruct(`typedef struct R5St3712 { int value; bool check() const; } R5St3712;`),
        classes: parseClass(`typedef struct R5St3712 { int value; bool check() const; } R5St3712;`),
        funcs: parseFunction(`typedef struct R5St3712 { int value; bool check() const; } R5St3712;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3712 生成结果为空');
      const expectSnippet0 = 'export type R5St3712 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3712 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3712 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3712 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3712 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3713
  * @tc.name : h2dts_gen_3713
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3713', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3713 { int value; std::string label(); } R5St3713;`),
        unions: parseUnion(`typedef struct R5St3713 { int value; std::string label(); } R5St3713;`),
        structs: parseStruct(`typedef struct R5St3713 { int value; std::string label(); } R5St3713;`),
        classes: parseClass(`typedef struct R5St3713 { int value; std::string label(); } R5St3713;`),
        funcs: parseFunction(`typedef struct R5St3713 { int value; std::string label(); } R5St3713;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3713 生成结果为空');
      const expectSnippet0 = 'export type R5St3713 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3713 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3713 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3713 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3713 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3714
  * @tc.name : h2dts_gen_3714
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3714', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3714 { int value; double ratio(); } R5St3714;`),
        unions: parseUnion(`typedef struct R5St3714 { int value; double ratio(); } R5St3714;`),
        structs: parseStruct(`typedef struct R5St3714 { int value; double ratio(); } R5St3714;`),
        classes: parseClass(`typedef struct R5St3714 { int value; double ratio(); } R5St3714;`),
        funcs: parseFunction(`typedef struct R5St3714 { int value; double ratio(); } R5St3714;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3714 生成结果为空');
      const expectSnippet0 = 'export type R5St3714 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3714 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3714 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3714 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3714 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3715
  * @tc.name : h2dts_gen_3715
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3715', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3715 { int value; void set(int v); } R5St3715;`),
        unions: parseUnion(`typedef struct R5St3715 { int value; void set(int v); } R5St3715;`),
        structs: parseStruct(`typedef struct R5St3715 { int value; void set(int v); } R5St3715;`),
        classes: parseClass(`typedef struct R5St3715 { int value; void set(int v); } R5St3715;`),
        funcs: parseFunction(`typedef struct R5St3715 { int value; void set(int v); } R5St3715;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3715 生成结果为空');
      const expectSnippet0 = 'export type R5St3715 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3715 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3715 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3715 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3715 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3716
  * @tc.name : h2dts_gen_3716
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3716', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3716 { double value; void reset(); } R5St3716;`),
        unions: parseUnion(`typedef struct R5St3716 { double value; void reset(); } R5St3716;`),
        structs: parseStruct(`typedef struct R5St3716 { double value; void reset(); } R5St3716;`),
        classes: parseClass(`typedef struct R5St3716 { double value; void reset(); } R5St3716;`),
        funcs: parseFunction(`typedef struct R5St3716 { double value; void reset(); } R5St3716;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3716 生成结果为空');
      const expectSnippet0 = 'export type R5St3716 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3716 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3716 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3716 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3716 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3717
  * @tc.name : h2dts_gen_3717
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3717', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3717 { double value; int sum(int a, int b); } R5St3717;`),
        unions: parseUnion(`typedef struct R5St3717 { double value; int sum(int a, int b); } R5St3717;`),
        structs: parseStruct(`typedef struct R5St3717 { double value; int sum(int a, int b); } R5St3717;`),
        classes: parseClass(`typedef struct R5St3717 { double value; int sum(int a, int b); } R5St3717;`),
        funcs: parseFunction(`typedef struct R5St3717 { double value; int sum(int a, int b); } R5St3717;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3717 生成结果为空');
      const expectSnippet0 = 'export type R5St3717 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3717 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3717 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3717 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3717 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3718
  * @tc.name : h2dts_gen_3718
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3718', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3718 { double value; bool check() const; } R5St3718;`),
        unions: parseUnion(`typedef struct R5St3718 { double value; bool check() const; } R5St3718;`),
        structs: parseStruct(`typedef struct R5St3718 { double value; bool check() const; } R5St3718;`),
        classes: parseClass(`typedef struct R5St3718 { double value; bool check() const; } R5St3718;`),
        funcs: parseFunction(`typedef struct R5St3718 { double value; bool check() const; } R5St3718;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3718 生成结果为空');
      const expectSnippet0 = 'export type R5St3718 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3718 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3718 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3718 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3718 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3719
  * @tc.name : h2dts_gen_3719
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3719', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3719 { double value; std::string label(); } R5St3719;`),
        unions: parseUnion(`typedef struct R5St3719 { double value; std::string label(); } R5St3719;`),
        structs: parseStruct(`typedef struct R5St3719 { double value; std::string label(); } R5St3719;`),
        classes: parseClass(`typedef struct R5St3719 { double value; std::string label(); } R5St3719;`),
        funcs: parseFunction(`typedef struct R5St3719 { double value; std::string label(); } R5St3719;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3719 生成结果为空');
      const expectSnippet0 = 'export type R5St3719 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3719 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3719 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3719 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3719 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3720
  * @tc.name : h2dts_gen_3720
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3720', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3720 { double value; double ratio(); } R5St3720;`),
        unions: parseUnion(`typedef struct R5St3720 { double value; double ratio(); } R5St3720;`),
        structs: parseStruct(`typedef struct R5St3720 { double value; double ratio(); } R5St3720;`),
        classes: parseClass(`typedef struct R5St3720 { double value; double ratio(); } R5St3720;`),
        funcs: parseFunction(`typedef struct R5St3720 { double value; double ratio(); } R5St3720;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3720 生成结果为空');
      const expectSnippet0 = 'export type R5St3720 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3720 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3720 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3720 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3720 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3721
  * @tc.name : h2dts_gen_3721
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3721', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3721 { double value; void set(int v); } R5St3721;`),
        unions: parseUnion(`typedef struct R5St3721 { double value; void set(int v); } R5St3721;`),
        structs: parseStruct(`typedef struct R5St3721 { double value; void set(int v); } R5St3721;`),
        classes: parseClass(`typedef struct R5St3721 { double value; void set(int v); } R5St3721;`),
        funcs: parseFunction(`typedef struct R5St3721 { double value; void set(int v); } R5St3721;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3721 生成结果为空');
      const expectSnippet0 = 'export type R5St3721 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3721 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3721 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3721 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3721 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3722
  * @tc.name : h2dts_gen_3722
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3722', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3722 { bool value; void reset(); } R5St3722;`),
        unions: parseUnion(`typedef struct R5St3722 { bool value; void reset(); } R5St3722;`),
        structs: parseStruct(`typedef struct R5St3722 { bool value; void reset(); } R5St3722;`),
        classes: parseClass(`typedef struct R5St3722 { bool value; void reset(); } R5St3722;`),
        funcs: parseFunction(`typedef struct R5St3722 { bool value; void reset(); } R5St3722;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3722 生成结果为空');
      const expectSnippet0 = 'export type R5St3722 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3722 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3722 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3722 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3722 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3723
  * @tc.name : h2dts_gen_3723
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3723', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3723 { bool value; int sum(int a, int b); } R5St3723;`),
        unions: parseUnion(`typedef struct R5St3723 { bool value; int sum(int a, int b); } R5St3723;`),
        structs: parseStruct(`typedef struct R5St3723 { bool value; int sum(int a, int b); } R5St3723;`),
        classes: parseClass(`typedef struct R5St3723 { bool value; int sum(int a, int b); } R5St3723;`),
        funcs: parseFunction(`typedef struct R5St3723 { bool value; int sum(int a, int b); } R5St3723;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3723 生成结果为空');
      const expectSnippet0 = 'export type R5St3723 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3723 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3723 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3723 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3723 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3724
  * @tc.name : h2dts_gen_3724
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3724', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3724 { bool value; bool check() const; } R5St3724;`),
        unions: parseUnion(`typedef struct R5St3724 { bool value; bool check() const; } R5St3724;`),
        structs: parseStruct(`typedef struct R5St3724 { bool value; bool check() const; } R5St3724;`),
        classes: parseClass(`typedef struct R5St3724 { bool value; bool check() const; } R5St3724;`),
        funcs: parseFunction(`typedef struct R5St3724 { bool value; bool check() const; } R5St3724;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3724 生成结果为空');
      const expectSnippet0 = 'export type R5St3724 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3724 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3724 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3724 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3724 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3725
  * @tc.name : h2dts_gen_3725
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3725', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3725 { bool value; std::string label(); } R5St3725;`),
        unions: parseUnion(`typedef struct R5St3725 { bool value; std::string label(); } R5St3725;`),
        structs: parseStruct(`typedef struct R5St3725 { bool value; std::string label(); } R5St3725;`),
        classes: parseClass(`typedef struct R5St3725 { bool value; std::string label(); } R5St3725;`),
        funcs: parseFunction(`typedef struct R5St3725 { bool value; std::string label(); } R5St3725;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3725 生成结果为空');
      const expectSnippet0 = 'export type R5St3725 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3725 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3725 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3725 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3725 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3726
  * @tc.name : h2dts_gen_3726
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3726', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3726 { bool value; double ratio(); } R5St3726;`),
        unions: parseUnion(`typedef struct R5St3726 { bool value; double ratio(); } R5St3726;`),
        structs: parseStruct(`typedef struct R5St3726 { bool value; double ratio(); } R5St3726;`),
        classes: parseClass(`typedef struct R5St3726 { bool value; double ratio(); } R5St3726;`),
        funcs: parseFunction(`typedef struct R5St3726 { bool value; double ratio(); } R5St3726;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3726 生成结果为空');
      const expectSnippet0 = 'export type R5St3726 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3726 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3726 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3726 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3726 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3727
  * @tc.name : h2dts_gen_3727
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3727', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3727 { bool value; void set(int v); } R5St3727;`),
        unions: parseUnion(`typedef struct R5St3727 { bool value; void set(int v); } R5St3727;`),
        structs: parseStruct(`typedef struct R5St3727 { bool value; void set(int v); } R5St3727;`),
        classes: parseClass(`typedef struct R5St3727 { bool value; void set(int v); } R5St3727;`),
        funcs: parseFunction(`typedef struct R5St3727 { bool value; void set(int v); } R5St3727;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3727 生成结果为空');
      const expectSnippet0 = 'export type R5St3727 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3727 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3727 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3727 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3727 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3728
  * @tc.name : h2dts_gen_3728
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3728', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3728 { std::string value; void reset(); } R5St3728;`),
        unions: parseUnion(`typedef struct R5St3728 { std::string value; void reset(); } R5St3728;`),
        structs: parseStruct(`typedef struct R5St3728 { std::string value; void reset(); } R5St3728;`),
        classes: parseClass(`typedef struct R5St3728 { std::string value; void reset(); } R5St3728;`),
        funcs: parseFunction(`typedef struct R5St3728 { std::string value; void reset(); } R5St3728;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3728 生成结果为空');
      const expectSnippet0 = 'export type R5St3728 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3728 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3728 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3728 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3728 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3729
  * @tc.name : h2dts_gen_3729
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3729', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3729 { std::string value; int sum(int a, int b); } R5St3729;`),
        unions: parseUnion(`typedef struct R5St3729 { std::string value; int sum(int a, int b); } R5St3729;`),
        structs: parseStruct(`typedef struct R5St3729 { std::string value; int sum(int a, int b); } R5St3729;`),
        classes: parseClass(`typedef struct R5St3729 { std::string value; int sum(int a, int b); } R5St3729;`),
        funcs: parseFunction(`typedef struct R5St3729 { std::string value; int sum(int a, int b); } R5St3729;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3729 生成结果为空');
      const expectSnippet0 = 'export type R5St3729 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3729 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3729 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3729 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3729 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3730
  * @tc.name : h2dts_gen_3730
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3730', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3730 { std::string value; bool check() const; } R5St3730;`),
        unions: parseUnion(`typedef struct R5St3730 { std::string value; bool check() const; } R5St3730;`),
        structs: parseStruct(`typedef struct R5St3730 { std::string value; bool check() const; } R5St3730;`),
        classes: parseClass(`typedef struct R5St3730 { std::string value; bool check() const; } R5St3730;`),
        funcs: parseFunction(`typedef struct R5St3730 { std::string value; bool check() const; } R5St3730;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3730 生成结果为空');
      const expectSnippet0 = 'export type R5St3730 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3730 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3730 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3730 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3730 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3731
  * @tc.name : h2dts_gen_3731
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3731', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3731 { std::string value; std::string label(); } R5St3731;`),
        unions: parseUnion(`typedef struct R5St3731 { std::string value; std::string label(); } R5St3731;`),
        structs: parseStruct(`typedef struct R5St3731 { std::string value; std::string label(); } R5St3731;`),
        classes: parseClass(`typedef struct R5St3731 { std::string value; std::string label(); } R5St3731;`),
        funcs: parseFunction(`typedef struct R5St3731 { std::string value; std::string label(); } R5St3731;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3731 生成结果为空');
      const expectSnippet0 = 'export type R5St3731 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3731 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3731 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3731 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3731 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3732
  * @tc.name : h2dts_gen_3732
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3732', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3732 { std::string value; double ratio(); } R5St3732;`),
        unions: parseUnion(`typedef struct R5St3732 { std::string value; double ratio(); } R5St3732;`),
        structs: parseStruct(`typedef struct R5St3732 { std::string value; double ratio(); } R5St3732;`),
        classes: parseClass(`typedef struct R5St3732 { std::string value; double ratio(); } R5St3732;`),
        funcs: parseFunction(`typedef struct R5St3732 { std::string value; double ratio(); } R5St3732;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3732 生成结果为空');
      const expectSnippet0 = 'export type R5St3732 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3732 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3732 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3732 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3732 执行异常: ${String(err)}`);
    }
  });
});
