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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part107.');

  /**
  * @tc.number : h2dts_gen_3593
  * @tc.name : h2dts_gen_3593
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3593', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3593 { int fA; double fB; float fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3593 { int fA; double fB; float fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3593 { int fA; double fB; float fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3593 { int fA; double fB; float fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3593 { int fA; double fB; float fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3593 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3593 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3593 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3593 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3593 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3593 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3594
  * @tc.name : h2dts_gen_3594
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3594', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3594 { int fA; double fB; short fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3594 { int fA; double fB; short fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3594 { int fA; double fB; short fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3594 { int fA; double fB; short fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3594 { int fA; double fB; short fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3594 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3594 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3594 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3594 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3594 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3594 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3595
  * @tc.name : h2dts_gen_3595
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3595', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3595 { int fA; double fB; long fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3595 { int fA; double fB; long fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3595 { int fA; double fB; long fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3595 { int fA; double fB; long fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3595 { int fA; double fB; long fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3595 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3595 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3595 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3595 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3595 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3595 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3596
  * @tc.name : h2dts_gen_3596
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3596', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3596 { int fA; double fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3596 { int fA; double fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3596 { int fA; double fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3596 { int fA; double fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3596 { int fA; double fB; uint8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3596 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3596 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3596 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3596 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3596 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3596 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3597
  * @tc.name : h2dts_gen_3597
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3597', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3597 { int fA; double fB; uint16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3597 { int fA; double fB; uint16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3597 { int fA; double fB; uint16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3597 { int fA; double fB; uint16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3597 { int fA; double fB; uint16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3597 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3597 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3597 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3597 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3597 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3597 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3598
  * @tc.name : h2dts_gen_3598
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3598', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3598 { int fA; double fB; uint32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3598 { int fA; double fB; uint32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3598 { int fA; double fB; uint32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3598 { int fA; double fB; uint32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3598 { int fA; double fB; uint32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3598 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3598 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3598 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3598 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3598 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3598 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3599
  * @tc.name : h2dts_gen_3599
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3599', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3599 { int fA; double fB; uint64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3599 { int fA; double fB; uint64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3599 { int fA; double fB; uint64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3599 { int fA; double fB; uint64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3599 { int fA; double fB; uint64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3599 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3599 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3599 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3599 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3599 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3599 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3600
  * @tc.name : h2dts_gen_3600
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3600', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3600 { int fA; double fB; int8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3600 { int fA; double fB; int8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3600 { int fA; double fB; int8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3600 { int fA; double fB; int8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3600 { int fA; double fB; int8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3600 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3600 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3600 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3600 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3600 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3600 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3601
  * @tc.name : h2dts_gen_3601
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3601', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3601 { int fA; double fB; int16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3601 { int fA; double fB; int16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3601 { int fA; double fB; int16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3601 { int fA; double fB; int16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3601 { int fA; double fB; int16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3601 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3601 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3601 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3601 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3601 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3601 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3602
  * @tc.name : h2dts_gen_3602
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3602', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3602 { int fA; double fB; int32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3602 { int fA; double fB; int32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3602 { int fA; double fB; int32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3602 { int fA; double fB; int32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3602 { int fA; double fB; int32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3602 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3602 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3602 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3602 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3602 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3602 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3603
  * @tc.name : h2dts_gen_3603
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3603', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3603 { int fA; double fB; int64_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3603 { int fA; double fB; int64_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3603 { int fA; double fB; int64_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3603 { int fA; double fB; int64_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3603 { int fA; double fB; int64_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3603 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3603 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3603 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3603 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3603 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3603 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3604
  * @tc.name : h2dts_gen_3604
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3604', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3604 { int fA; double fB; unsigned fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3604 { int fA; double fB; unsigned fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3604 { int fA; double fB; unsigned fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3604 { int fA; double fB; unsigned fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3604 { int fA; double fB; unsigned fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3604 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3604 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3604 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3604 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3604 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3604 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3605
  * @tc.name : h2dts_gen_3605
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3605', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3605 { int fA; double fB; bool fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3605 { int fA; double fB; bool fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3605 { int fA; double fB; bool fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3605 { int fA; double fB; bool fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3605 { int fA; double fB; bool fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3605 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3605 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3605 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3605 生成结果缺少片段 1');
      const expectSnippet2 = 'boolean';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3605 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3605 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3605 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3606
  * @tc.name : h2dts_gen_3606
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3606', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3606 { int fA; double fB; char fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3606 { int fA; double fB; char fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3606 { int fA; double fB; char fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3606 { int fA; double fB; char fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3606 { int fA; double fB; char fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3606 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3606 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3606 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3606 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3606 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3606 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3606 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3607
  * @tc.name : h2dts_gen_3607
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3607', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3607 { int fA; double fB; wchar_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3607 { int fA; double fB; wchar_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3607 { int fA; double fB; wchar_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3607 { int fA; double fB; wchar_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3607 { int fA; double fB; wchar_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3607 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3607 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3607 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3607 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3607 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3607 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3607 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3608
  * @tc.name : h2dts_gen_3608
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3608', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3608 { int fA; double fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3608 { int fA; double fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3608 { int fA; double fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3608 { int fA; double fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3608 { int fA; double fB; char8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3608 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3608 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3608 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3608 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3608 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3608 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3608 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3609
  * @tc.name : h2dts_gen_3609
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3609', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3609 { int fA; double fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3609 { int fA; double fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3609 { int fA; double fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3609 { int fA; double fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3609 { int fA; double fB; char16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3609 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3609 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3609 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3609 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3609 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3609 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3609 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3610
  * @tc.name : h2dts_gen_3610
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3610', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3610 { int fA; double fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3610 { int fA; double fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3610 { int fA; double fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3610 { int fA; double fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3610 { int fA; double fB; char32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3610 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3610 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3610 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3610 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3610 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3610 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3610 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3611
  * @tc.name : h2dts_gen_3611
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3611', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3611 { int fA; double fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3611 { int fA; double fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3611 { int fA; double fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3611 { int fA; double fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3611 { int fA; double fB; std::string::iterator fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3611 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3611 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3611 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3611 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3611 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3611 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3611 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3612
  * @tc.name : h2dts_gen_3612
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3612', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3612 { int fA; double fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3612 { int fA; double fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3612 { int fA; double fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3612 { int fA; double fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3612 { int fA; double fB; std::vector<int> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3612 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3612 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3612 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3612 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3612 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3612 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3613
  * @tc.name : h2dts_gen_3613
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3613', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3613 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3613 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3613 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3613 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3613 { int fA; double fB; std::vector<size_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3613 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3613 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3613 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3613 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3613 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3613 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3614
  * @tc.name : h2dts_gen_3614
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3614', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3614 { int fA; double fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3614 { int fA; double fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3614 { int fA; double fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3614 { int fA; double fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3614 { int fA; double fB; std::vector<double> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3614 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3614 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3614 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3614 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3614 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3614 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3615
  * @tc.name : h2dts_gen_3615
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3615', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3615 { int fA; double fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3615 { int fA; double fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3615 { int fA; double fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3615 { int fA; double fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3615 { int fA; double fB; std::vector<float> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3615 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3615 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3615 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3615 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3615 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3615 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3616
  * @tc.name : h2dts_gen_3616
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3616', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3616 { int fA; double fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3616 { int fA; double fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3616 { int fA; double fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3616 { int fA; double fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3616 { int fA; double fB; std::vector<long> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3616 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3616 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3616 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3616 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3616 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3616 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3617
  * @tc.name : h2dts_gen_3617
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3617', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3617 { int fA; double fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3617 { int fA; double fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3617 { int fA; double fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3617 { int fA; double fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3617 { int fA; double fB; std::vector<short> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3617 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3617 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3617 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3617 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3617 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3617 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3618
  * @tc.name : h2dts_gen_3618
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3618', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3618 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3618 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3618 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3618 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3618 { int fA; double fB; std::vector<uint8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3618 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3618 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3618 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3618 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3618 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3618 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3619
  * @tc.name : h2dts_gen_3619
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3619', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3619 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3619 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3619 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3619 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3619 { int fA; double fB; std::vector<uint16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3619 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3619 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3619 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3619 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3619 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3619 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3620
  * @tc.name : h2dts_gen_3620
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3620', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3620 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3620 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3620 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3620 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3620 { int fA; double fB; std::vector<uint32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3620 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3620 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3620 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3620 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3620 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3620 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3621
  * @tc.name : h2dts_gen_3621
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3621', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3621 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3621 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3621 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3621 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3621 { int fA; double fB; std::vector<uint64_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3621 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3621 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3621 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3621 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3621 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3621 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3622
  * @tc.name : h2dts_gen_3622
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3622', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3622 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3622 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3622 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3622 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3622 { int fA; double fB; std::vector<int8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3622 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3622 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3622 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3622 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3622 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3622 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3623
  * @tc.name : h2dts_gen_3623
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3623', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3623 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3623 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3623 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3623 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3623 { int fA; double fB; std::vector<int16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3623 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3623 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3623 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3623 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3623 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3623 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3624
  * @tc.name : h2dts_gen_3624
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3624', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3624 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3624 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3624 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3624 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3624 { int fA; double fB; std::vector<int32_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3624 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3624 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3624 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3624 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3624 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3624 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3625
  * @tc.name : h2dts_gen_3625
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3625', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3625 { int fA; float fB; short fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3625 { int fA; float fB; short fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3625 { int fA; float fB; short fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3625 { int fA; float fB; short fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3625 { int fA; float fB; short fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3625 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3625 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3625 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3625 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3625 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3625 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3626
  * @tc.name : h2dts_gen_3626
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3626', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3626 { int fA; float fB; long fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3626 { int fA; float fB; long fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3626 { int fA; float fB; long fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3626 { int fA; float fB; long fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3626 { int fA; float fB; long fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3626 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3626 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3626 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3626 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3626 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3626 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3627
  * @tc.name : h2dts_gen_3627
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3627', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_3627 { int fA; float fB; uint8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_3627 { int fA; float fB; uint8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_3627 { int fA; float fB; uint8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_3627 { int fA; float fB; uint8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_3627 { int fA; float fB; uint8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3627 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_3627 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3627 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3627 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3627 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3627 执行异常: ${String(err)}`);
    }
  });
});
