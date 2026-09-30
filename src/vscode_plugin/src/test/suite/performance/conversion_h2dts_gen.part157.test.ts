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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part157.');

  /**
  * @tc.number : h2dts_gen_5312
  * @tc.name : h2dts_gen_5312
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5312', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5312 { int fA; double fB; float fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5312 { int fA; double fB; float fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5312 { int fA; double fB; float fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5312 { int fA; double fB; float fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5312 { int fA; double fB; float fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5312 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5312 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5312 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5312 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5312 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5312 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5313
  * @tc.name : h2dts_gen_5313
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5313', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5313 { int fA; double fB; short fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5313 { int fA; double fB; short fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5313 { int fA; double fB; short fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5313 { int fA; double fB; short fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5313 { int fA; double fB; short fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5313 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5313 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5313 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5313 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5313 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5313 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5314
  * @tc.name : h2dts_gen_5314
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5314', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5314 { int fA; double fB; long fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5314 { int fA; double fB; long fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5314 { int fA; double fB; long fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5314 { int fA; double fB; long fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5314 { int fA; double fB; long fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5314 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5314 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5314 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5314 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5314 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5314 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5315
  * @tc.name : h2dts_gen_5315
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5315', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5315 { int fA; double fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5315 { int fA; double fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5315 { int fA; double fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5315 { int fA; double fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5315 { int fA; double fB; uint8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5315 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5315 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5315 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5315 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5315 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5315 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5316
  * @tc.name : h2dts_gen_5316
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5316', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5316 { int fA; double fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5316 { int fA; double fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5316 { int fA; double fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5316 { int fA; double fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5316 { int fA; double fB; uint16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5316 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5316 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5316 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5316 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5316 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5316 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5317
  * @tc.name : h2dts_gen_5317
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5317', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5317 { int fA; double fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5317 { int fA; double fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5317 { int fA; double fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5317 { int fA; double fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5317 { int fA; double fB; uint32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5317 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5317 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5317 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5317 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5317 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5317 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5318
  * @tc.name : h2dts_gen_5318
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5318', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5318 { int fA; double fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5318 { int fA; double fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5318 { int fA; double fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5318 { int fA; double fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5318 { int fA; double fB; uint64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5318 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5318 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5318 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5318 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5318 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5318 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5319
  * @tc.name : h2dts_gen_5319
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5319', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5319 { int fA; double fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5319 { int fA; double fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5319 { int fA; double fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5319 { int fA; double fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5319 { int fA; double fB; int8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5319 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5319 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5319 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5319 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5319 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5319 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5320
  * @tc.name : h2dts_gen_5320
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5320', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5320 { int fA; double fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5320 { int fA; double fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5320 { int fA; double fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5320 { int fA; double fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5320 { int fA; double fB; int16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5320 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5320 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5320 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5320 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5320 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5320 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5321
  * @tc.name : h2dts_gen_5321
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5321', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5321 { int fA; double fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5321 { int fA; double fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5321 { int fA; double fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5321 { int fA; double fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5321 { int fA; double fB; int32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5321 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5321 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5321 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5321 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5321 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5321 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5322
  * @tc.name : h2dts_gen_5322
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5322', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5322 { int fA; double fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5322 { int fA; double fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5322 { int fA; double fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5322 { int fA; double fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5322 { int fA; double fB; int64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5322 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5322 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5322 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5322 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5322 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5323
  * @tc.name : h2dts_gen_5323
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5323', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5323 { int fA; double fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5323 { int fA; double fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5323 { int fA; double fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5323 { int fA; double fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5323 { int fA; double fB; unsigned fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5323 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5323 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5323 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5323 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5323 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5323 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5324
  * @tc.name : h2dts_gen_5324
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5324', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5324 { int fA; double fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5324 { int fA; double fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5324 { int fA; double fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5324 { int fA; double fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5324 { int fA; double fB; bool fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5324 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5324 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5324 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5324 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5324 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5324 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5325
  * @tc.name : h2dts_gen_5325
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5325', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5325 { int fA; double fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5325 { int fA; double fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5325 { int fA; double fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5325 { int fA; double fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5325 { int fA; double fB; char fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5325 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5325 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5325 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5325 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5325 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5325 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5325 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5326
  * @tc.name : h2dts_gen_5326
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5326', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5326 { int fA; double fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5326 { int fA; double fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5326 { int fA; double fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5326 { int fA; double fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5326 { int fA; double fB; wchar_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5326 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5326 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5326 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5326 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5326 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5326 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5327
  * @tc.name : h2dts_gen_5327
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5327', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5327 { int fA; double fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5327 { int fA; double fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5327 { int fA; double fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5327 { int fA; double fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5327 { int fA; double fB; char8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5327 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5327 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5327 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5327 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5327 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5327 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5328
  * @tc.name : h2dts_gen_5328
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5328', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5328 { int fA; double fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5328 { int fA; double fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5328 { int fA; double fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5328 { int fA; double fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5328 { int fA; double fB; char16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5328 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5328 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5328 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5328 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5328 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5328 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5329
  * @tc.name : h2dts_gen_5329
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5329', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5329 { int fA; double fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5329 { int fA; double fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5329 { int fA; double fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5329 { int fA; double fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5329 { int fA; double fB; char32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5329 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5329 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5329 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5329 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5329 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5329 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5329 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5330
  * @tc.name : h2dts_gen_5330
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5330', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5330 { int fA; double fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5330 { int fA; double fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5330 { int fA; double fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5330 { int fA; double fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5330 { int fA; double fB; std::string::iterator fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5330 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5330 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5330 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5330 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5330 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5330 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5330 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5331
  * @tc.name : h2dts_gen_5331
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5331', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5331 { int fA; double fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5331 { int fA; double fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5331 { int fA; double fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5331 { int fA; double fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5331 { int fA; double fB; std::vector<int> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5331 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5331 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5331 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5331 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5331 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5331 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5332
  * @tc.name : h2dts_gen_5332
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5332', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5332 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5332 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5332 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5332 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5332 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5332 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5332 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5332 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5332 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5332 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5332 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5333
  * @tc.name : h2dts_gen_5333
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5333', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5333 { int fA; double fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5333 { int fA; double fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5333 { int fA; double fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5333 { int fA; double fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5333 { int fA; double fB; std::vector<double> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5333 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5333 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5333 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5333 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5333 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5333 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5334
  * @tc.name : h2dts_gen_5334
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5334', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5334 { int fA; double fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5334 { int fA; double fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5334 { int fA; double fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5334 { int fA; double fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5334 { int fA; double fB; std::vector<float> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5334 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5334 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5334 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5334 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5334 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5334 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5335
  * @tc.name : h2dts_gen_5335
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5335', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5335 { int fA; double fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5335 { int fA; double fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5335 { int fA; double fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5335 { int fA; double fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5335 { int fA; double fB; std::vector<long> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5335 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5335 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5335 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5335 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5335 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5335 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5336
  * @tc.name : h2dts_gen_5336
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5336', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5336 { int fA; double fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5336 { int fA; double fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5336 { int fA; double fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5336 { int fA; double fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5336 { int fA; double fB; std::vector<short> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5336 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5336 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5336 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5336 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5336 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5336 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5337
  * @tc.name : h2dts_gen_5337
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5337', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5337 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5337 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5337 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5337 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5337 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5337 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5337 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5337 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5337 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5337 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5337 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5338
  * @tc.name : h2dts_gen_5338
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5338', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5338 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5338 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5338 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5338 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5338 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5338 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5338 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5338 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5338 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5338 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5338 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5339
  * @tc.name : h2dts_gen_5339
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5339', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5339 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5339 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5339 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5339 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5339 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5339 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5339 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5339 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5339 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5339 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5339 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5340
  * @tc.name : h2dts_gen_5340
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5340', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5340 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5340 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5340 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5340 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5340 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5340 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5340 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5340 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5340 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5340 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5340 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5341
  * @tc.name : h2dts_gen_5341
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5341', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5341 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5341 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5341 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5341 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5341 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5341 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5341 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5341 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5341 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5341 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5341 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5342
  * @tc.name : h2dts_gen_5342
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5342', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5342 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5342 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5342 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5342 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5342 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5342 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5342 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5342 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5342 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5342 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5342 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5343
  * @tc.name : h2dts_gen_5343
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5343', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5343 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5343 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5343 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5343 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5343 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5343 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5343 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5343 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5343 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5343 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5343 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5344
  * @tc.name : h2dts_gen_5344
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5344', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5344 { int fA; float fB; short fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5344 { int fA; float fB; short fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5344 { int fA; float fB; short fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5344 { int fA; float fB; short fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5344 { int fA; float fB; short fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5344 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5344 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5344 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5344 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5344 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5344 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5345
  * @tc.name : h2dts_gen_5345
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5345', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5345 { int fA; float fB; long fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5345 { int fA; float fB; long fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5345 { int fA; float fB; long fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5345 { int fA; float fB; long fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5345 { int fA; float fB; long fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5345 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5345 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5345 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5345 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5345 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5345 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5346
  * @tc.name : h2dts_gen_5346
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5346', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5346 { int fA; float fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5346 { int fA; float fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5346 { int fA; float fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5346 { int fA; float fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5346 { int fA; float fB; uint8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5346 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5346 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5346 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5346 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5346 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5346 执行异常: ${String(err)}`);
    }
  });
});
