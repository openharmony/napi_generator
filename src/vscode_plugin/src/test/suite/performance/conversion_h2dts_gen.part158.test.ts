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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part158.');

  /**
  * @tc.number : h2dts_gen_5347
  * @tc.name : h2dts_gen_5347
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5347', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5347 { int fA; float fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5347 { int fA; float fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5347 { int fA; float fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5347 { int fA; float fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5347 { int fA; float fB; uint16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5347 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5347 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5347 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5347 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5347 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5347 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5348
  * @tc.name : h2dts_gen_5348
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5348', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5348 { int fA; float fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5348 { int fA; float fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5348 { int fA; float fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5348 { int fA; float fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5348 { int fA; float fB; uint32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5348 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5348 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5348 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5348 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5348 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5348 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5349
  * @tc.name : h2dts_gen_5349
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5349', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5349 { int fA; float fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5349 { int fA; float fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5349 { int fA; float fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5349 { int fA; float fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5349 { int fA; float fB; uint64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5349 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5349 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5349 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5349 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5349 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5349 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5350
  * @tc.name : h2dts_gen_5350
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5350', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5350 { int fA; float fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5350 { int fA; float fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5350 { int fA; float fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5350 { int fA; float fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5350 { int fA; float fB; int8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5350 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5350 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5350 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5350 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5350 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5350 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5351
  * @tc.name : h2dts_gen_5351
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5351', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5351 { int fA; float fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5351 { int fA; float fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5351 { int fA; float fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5351 { int fA; float fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5351 { int fA; float fB; int16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5351 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5351 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5351 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5351 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5351 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5351 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5352
  * @tc.name : h2dts_gen_5352
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5352', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5352 { int fA; float fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5352 { int fA; float fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5352 { int fA; float fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5352 { int fA; float fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5352 { int fA; float fB; int32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5352 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5352 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5352 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5352 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5352 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5352 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5353
  * @tc.name : h2dts_gen_5353
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5353', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5353 { int fA; float fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5353 { int fA; float fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5353 { int fA; float fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5353 { int fA; float fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5353 { int fA; float fB; int64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5353 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5353 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5353 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5353 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5353 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5353 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5354
  * @tc.name : h2dts_gen_5354
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5354', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5354 { int fA; float fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5354 { int fA; float fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5354 { int fA; float fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5354 { int fA; float fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5354 { int fA; float fB; unsigned fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5354 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5354 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5354 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5354 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5354 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5355
  * @tc.name : h2dts_gen_5355
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5355', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5355 { int fA; float fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5355 { int fA; float fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5355 { int fA; float fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5355 { int fA; float fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5355 { int fA; float fB; bool fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5355 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5355 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5355 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5355 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5355 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5355 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5356
  * @tc.name : h2dts_gen_5356
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5356', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5356 { int fA; float fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5356 { int fA; float fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5356 { int fA; float fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5356 { int fA; float fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5356 { int fA; float fB; char fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5356 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5356 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5356 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5356 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5356 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5356 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5356 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5357
  * @tc.name : h2dts_gen_5357
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5357', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5357 { int fA; float fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5357 { int fA; float fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5357 { int fA; float fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5357 { int fA; float fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5357 { int fA; float fB; wchar_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5357 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5357 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5357 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5357 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5357 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5357 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5358
  * @tc.name : h2dts_gen_5358
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5358', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5358 { int fA; float fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5358 { int fA; float fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5358 { int fA; float fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5358 { int fA; float fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5358 { int fA; float fB; char8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5358 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5358 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5358 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5358 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5358 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5358 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5359
  * @tc.name : h2dts_gen_5359
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5359', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5359 { int fA; float fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5359 { int fA; float fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5359 { int fA; float fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5359 { int fA; float fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5359 { int fA; float fB; char16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5359 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5359 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5359 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5359 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5359 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5359 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5360
  * @tc.name : h2dts_gen_5360
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5360', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5360 { int fA; float fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5360 { int fA; float fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5360 { int fA; float fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5360 { int fA; float fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5360 { int fA; float fB; char32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5360 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5360 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5360 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5360 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5360 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5360 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5360 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5361
  * @tc.name : h2dts_gen_5361
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5361', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5361 { int fA; float fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5361 { int fA; float fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5361 { int fA; float fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5361 { int fA; float fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5361 { int fA; float fB; std::string::iterator fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5361 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5361 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5361 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5361 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5361 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5361 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5361 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5362
  * @tc.name : h2dts_gen_5362
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5362', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5362 { int fA; float fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5362 { int fA; float fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5362 { int fA; float fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5362 { int fA; float fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5362 { int fA; float fB; std::vector<int> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5362 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5362 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5362 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5362 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5362 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5363
  * @tc.name : h2dts_gen_5363
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5363', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5363 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5363 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5363 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5363 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5363 { int fA; float fB; std::vector<size_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5363 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5363 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5363 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5363 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5363 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5363 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5364
  * @tc.name : h2dts_gen_5364
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5364', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5364 { int fA; float fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5364 { int fA; float fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5364 { int fA; float fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5364 { int fA; float fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5364 { int fA; float fB; std::vector<double> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5364 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5364 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5364 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5364 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5364 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5364 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5365
  * @tc.name : h2dts_gen_5365
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5365', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5365 { int fA; float fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5365 { int fA; float fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5365 { int fA; float fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5365 { int fA; float fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5365 { int fA; float fB; std::vector<float> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5365 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5365 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5365 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5365 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5365 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5365 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5366
  * @tc.name : h2dts_gen_5366
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5366', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5366 { int fA; float fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5366 { int fA; float fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5366 { int fA; float fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5366 { int fA; float fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5366 { int fA; float fB; std::vector<long> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5366 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5366 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5366 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5366 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5366 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5366 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5367
  * @tc.name : h2dts_gen_5367
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5367', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5367 { int fA; float fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5367 { int fA; float fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5367 { int fA; float fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5367 { int fA; float fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5367 { int fA; float fB; std::vector<short> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5367 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5367 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5367 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5367 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5367 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5367 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5368
  * @tc.name : h2dts_gen_5368
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5368', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5368 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5368 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5368 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5368 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5368 { int fA; float fB; std::vector<uint8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5368 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5368 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5368 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5368 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5368 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5368 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5369
  * @tc.name : h2dts_gen_5369
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5369', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5369 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5369 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5369 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5369 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5369 { int fA; float fB; std::vector<uint16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5369 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5369 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5369 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5369 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5369 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5369 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5370
  * @tc.name : h2dts_gen_5370
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5370', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5370 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5370 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5370 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5370 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5370 { int fA; float fB; std::vector<uint32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5370 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5370 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5370 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5370 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5370 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5371
  * @tc.name : h2dts_gen_5371
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5371', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5371 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5371 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5371 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5371 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5371 { int fA; float fB; std::vector<uint64_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5371 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5371 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5371 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5371 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5371 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5372
  * @tc.name : h2dts_gen_5372
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5372', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5372 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5372 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5372 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5372 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5372 { int fA; float fB; std::vector<int8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5372 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5372 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5372 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5372 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5372 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5373
  * @tc.name : h2dts_gen_5373
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5373', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5373 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5373 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5373 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5373 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5373 { int fA; float fB; std::vector<int16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5373 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5373 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5373 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5373 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5373 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5374
  * @tc.name : h2dts_gen_5374
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5374', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5374 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5374 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5374 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5374 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5374 { int fA; float fB; std::vector<int32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5374 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5374 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5374 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5374 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5374 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5375
  * @tc.name : h2dts_gen_5375
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5375', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5375 { int fA; short fB; long fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5375 { int fA; short fB; long fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5375 { int fA; short fB; long fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5375 { int fA; short fB; long fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5375 { int fA; short fB; long fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5375 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5375 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5375 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5375 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5375 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5375 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5376
  * @tc.name : h2dts_gen_5376
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5376', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5376 { int fA; short fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5376 { int fA; short fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5376 { int fA; short fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5376 { int fA; short fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5376 { int fA; short fB; uint8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5376 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5376 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5376 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5376 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5376 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5376 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5377
  * @tc.name : h2dts_gen_5377
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5377', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5377 { int fA; short fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5377 { int fA; short fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5377 { int fA; short fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5377 { int fA; short fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5377 { int fA; short fB; uint16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5377 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5377 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5377 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5377 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5377 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5377 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5378
  * @tc.name : h2dts_gen_5378
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5378', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5378 { int fA; short fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5378 { int fA; short fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5378 { int fA; short fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5378 { int fA; short fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5378 { int fA; short fB; uint32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5378 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5378 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5378 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5378 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5378 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5378 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5379
  * @tc.name : h2dts_gen_5379
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5379', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5379 { int fA; short fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5379 { int fA; short fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5379 { int fA; short fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5379 { int fA; short fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5379 { int fA; short fB; uint64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5379 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5379 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5379 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5379 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5379 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5379 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5380
  * @tc.name : h2dts_gen_5380
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5380', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5380 { int fA; short fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5380 { int fA; short fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5380 { int fA; short fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5380 { int fA; short fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5380 { int fA; short fB; int8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5380 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5380 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5380 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5380 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5380 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5380 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5381
  * @tc.name : h2dts_gen_5381
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5381', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5381 { int fA; short fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5381 { int fA; short fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5381 { int fA; short fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5381 { int fA; short fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5381 { int fA; short fB; int16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5381 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5381 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5381 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5381 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5381 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5381 执行异常: ${String(err)}`);
    }
  });
});
