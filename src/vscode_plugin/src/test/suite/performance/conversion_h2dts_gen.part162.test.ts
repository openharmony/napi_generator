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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part162.');

  /**
  * @tc.number : h2dts_gen_5477
  * @tc.name : h2dts_gen_5477
  * @tc.desc : h2dts gen：扩充-R6-时间函数 `std::strftime` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5477', () => {
    try {
      const DECL = `void r6time5477(std::strftime v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5477 生成结果为空');
      const expectSnippet0 = 'export function r6time5477(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5477 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5477 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5478
  * @tc.name : h2dts_gen_5478
  * @tc.desc : h2dts gen：扩充-R6-时间函数 `std::localtime` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5478', () => {
    try {
      const DECL = `void r6time5478(std::localtime v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5478 生成结果为空');
      const expectSnippet0 = 'export function r6time5478(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5478 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5478 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5478 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5479
  * @tc.name : h2dts_gen_5479
  * @tc.desc : h2dts gen：扩充-R6-时间函数 `std::gmtime` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5479', () => {
    try {
      const DECL = `void r6time5479(std::gmtime v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5479 生成结果为空');
      const expectSnippet0 = 'export function r6time5479(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5479 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5479 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5479 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5480
  * @tc.name : h2dts_gen_5480
  * @tc.desc : h2dts gen：扩充-R6-时间函数 `std::mktime` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5480', () => {
    try {
      const DECL = `void r6time5480(std::mktime v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5480 生成结果为空');
      const expectSnippet0 = 'export function r6time5480(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5480 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5480 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5480 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5481
  * @tc.name : h2dts_gen_5481
  * @tc.desc : h2dts gen：扩充-R6-chrono `std::chrono::time_point<std::chrono::system_clock>` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5481', () => {
    try {
      const DECL = `void r6chr5481(std::chrono::time_point<std::chrono::system_clock> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5481 生成结果为空');
      const expectSnippet0 = 'export function r6chr5481(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5481 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5481 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5481 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5482
  * @tc.name : h2dts_gen_5482
  * @tc.desc : h2dts gen：扩充-R6-chrono `std::chrono::steady_clock::time_point` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5482', () => {
    try {
      const DECL = `void r6chr5482(std::chrono::steady_clock::time_point v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5482 生成结果为空');
      const expectSnippet0 = 'export function r6chr5482(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5482 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5482 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5482 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5483
  * @tc.name : h2dts_gen_5483
  * @tc.desc : h2dts gen：扩充-R6-chrono `std::chrono::high_resolution_clock::time_point` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5483', () => {
    try {
      const DECL = `void r6chr5483(std::chrono::high_resolution_clock::time_point v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5483 生成结果为空');
      const expectSnippet0 = 'export function r6chr5483(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5483 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5483 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5483 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5484
  * @tc.name : h2dts_gen_5484
  * @tc.desc : h2dts gen：扩充-R6-chrono `std::chrono::hours` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5484', () => {
    try {
      const DECL = `void r6chr5484(std::chrono::hours v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5484 生成结果为空');
      const expectSnippet0 = 'export function r6chr5484(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5484 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5484 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5484 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5485
  * @tc.name : h2dts_gen_5485
  * @tc.desc : h2dts gen：扩充-R6-chrono `std::chrono::minutes` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5485', () => {
    try {
      const DECL = `void r6chr5485(std::chrono::minutes v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5485 生成结果为空');
      const expectSnippet0 = 'export function r6chr5485(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5485 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5485 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5485 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5486
  * @tc.name : h2dts_gen_5486
  * @tc.desc : h2dts gen：扩充-R6-chrono `std::chrono::seconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5486', () => {
    try {
      const DECL = `void r6chr5486(std::chrono::seconds v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5486 生成结果为空');
      const expectSnippet0 = 'export function r6chr5486(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5486 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5486 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5486 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5487
  * @tc.name : h2dts_gen_5487
  * @tc.desc : h2dts gen：扩充-R6-chrono `std::chrono::milliseconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5487', () => {
    try {
      const DECL = `void r6chr5487(std::chrono::milliseconds v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5487 生成结果为空');
      const expectSnippet0 = 'export function r6chr5487(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5487 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5487 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5487 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5488
  * @tc.name : h2dts_gen_5488
  * @tc.desc : h2dts gen：扩充-R6-chrono `std::chrono::microseconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5488', () => {
    try {
      const DECL = `void r6chr5488(std::chrono::microseconds v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5488 生成结果为空');
      const expectSnippet0 = 'export function r6chr5488(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5488 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5488 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5488 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5489
  * @tc.name : h2dts_gen_5489
  * @tc.desc : h2dts gen：扩充-R6-chrono `std::chrono::nanoseconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5489', () => {
    try {
      const DECL = `void r6chr5489(std::chrono::nanoseconds v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5489 生成结果为空');
      const expectSnippet0 = 'export function r6chr5489(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5489 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5489 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5489 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5490
  * @tc.name : h2dts_gen_5490
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5490', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55490(int a, size_t b, double c, float d, short e);`),
        unions: parseUnion(`void r6p55490(int a, size_t b, double c, float d, short e);`),
        structs: parseStruct(`void r6p55490(int a, size_t b, double c, float d, short e);`),
        classes: parseClass(`void r6p55490(int a, size_t b, double c, float d, short e);`),
        funcs: parseFunction(`void r6p55490(int a, size_t b, double c, float d, short e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5490 生成结果为空');
      const expectSnippet0 = 'export function r6p55490(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5490 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5490 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5490 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5491
  * @tc.name : h2dts_gen_5491
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5491', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55491(int a, size_t b, double c, float d, long e);`),
        unions: parseUnion(`void r6p55491(int a, size_t b, double c, float d, long e);`),
        structs: parseStruct(`void r6p55491(int a, size_t b, double c, float d, long e);`),
        classes: parseClass(`void r6p55491(int a, size_t b, double c, float d, long e);`),
        funcs: parseFunction(`void r6p55491(int a, size_t b, double c, float d, long e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5491 生成结果为空');
      const expectSnippet0 = 'export function r6p55491(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5491 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5491 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5491 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5492
  * @tc.name : h2dts_gen_5492
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5492', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55492(int a, size_t b, double c, float d, uint8_t e);`),
        unions: parseUnion(`void r6p55492(int a, size_t b, double c, float d, uint8_t e);`),
        structs: parseStruct(`void r6p55492(int a, size_t b, double c, float d, uint8_t e);`),
        classes: parseClass(`void r6p55492(int a, size_t b, double c, float d, uint8_t e);`),
        funcs: parseFunction(`void r6p55492(int a, size_t b, double c, float d, uint8_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5492 生成结果为空');
      const expectSnippet0 = 'export function r6p55492(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5492 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5492 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5492 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5493
  * @tc.name : h2dts_gen_5493
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5493', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55493(int a, size_t b, double c, float d, uint16_t e);`),
        unions: parseUnion(`void r6p55493(int a, size_t b, double c, float d, uint16_t e);`),
        structs: parseStruct(`void r6p55493(int a, size_t b, double c, float d, uint16_t e);`),
        classes: parseClass(`void r6p55493(int a, size_t b, double c, float d, uint16_t e);`),
        funcs: parseFunction(`void r6p55493(int a, size_t b, double c, float d, uint16_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5493 生成结果为空');
      const expectSnippet0 = 'export function r6p55493(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5493 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5493 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5493 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5494
  * @tc.name : h2dts_gen_5494
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5494', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55494(int a, size_t b, double c, float d, uint32_t e);`),
        unions: parseUnion(`void r6p55494(int a, size_t b, double c, float d, uint32_t e);`),
        structs: parseStruct(`void r6p55494(int a, size_t b, double c, float d, uint32_t e);`),
        classes: parseClass(`void r6p55494(int a, size_t b, double c, float d, uint32_t e);`),
        funcs: parseFunction(`void r6p55494(int a, size_t b, double c, float d, uint32_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5494 生成结果为空');
      const expectSnippet0 = 'export function r6p55494(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5494 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5494 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5494 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5495
  * @tc.name : h2dts_gen_5495
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5495', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55495(int a, size_t b, double c, float d, uint64_t e);`),
        unions: parseUnion(`void r6p55495(int a, size_t b, double c, float d, uint64_t e);`),
        structs: parseStruct(`void r6p55495(int a, size_t b, double c, float d, uint64_t e);`),
        classes: parseClass(`void r6p55495(int a, size_t b, double c, float d, uint64_t e);`),
        funcs: parseFunction(`void r6p55495(int a, size_t b, double c, float d, uint64_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5495 生成结果为空');
      const expectSnippet0 = 'export function r6p55495(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5495 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5495 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5495 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5496
  * @tc.name : h2dts_gen_5496
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5496', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55496(int a, size_t b, double c, float d, int8_t e);`),
        unions: parseUnion(`void r6p55496(int a, size_t b, double c, float d, int8_t e);`),
        structs: parseStruct(`void r6p55496(int a, size_t b, double c, float d, int8_t e);`),
        classes: parseClass(`void r6p55496(int a, size_t b, double c, float d, int8_t e);`),
        funcs: parseFunction(`void r6p55496(int a, size_t b, double c, float d, int8_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5496 生成结果为空');
      const expectSnippet0 = 'export function r6p55496(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5496 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5496 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5496 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5497
  * @tc.name : h2dts_gen_5497
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5497', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55497(int a, size_t b, double c, float d, int16_t e);`),
        unions: parseUnion(`void r6p55497(int a, size_t b, double c, float d, int16_t e);`),
        structs: parseStruct(`void r6p55497(int a, size_t b, double c, float d, int16_t e);`),
        classes: parseClass(`void r6p55497(int a, size_t b, double c, float d, int16_t e);`),
        funcs: parseFunction(`void r6p55497(int a, size_t b, double c, float d, int16_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5497 生成结果为空');
      const expectSnippet0 = 'export function r6p55497(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5497 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5497 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5497 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5498
  * @tc.name : h2dts_gen_5498
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5498', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55498(int a, size_t b, double c, float d, int32_t e);`),
        unions: parseUnion(`void r6p55498(int a, size_t b, double c, float d, int32_t e);`),
        structs: parseStruct(`void r6p55498(int a, size_t b, double c, float d, int32_t e);`),
        classes: parseClass(`void r6p55498(int a, size_t b, double c, float d, int32_t e);`),
        funcs: parseFunction(`void r6p55498(int a, size_t b, double c, float d, int32_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5498 生成结果为空');
      const expectSnippet0 = 'export function r6p55498(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5498 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5498 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5498 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5499
  * @tc.name : h2dts_gen_5499
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5499', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55499(int a, size_t b, double c, float d, int64_t e);`),
        unions: parseUnion(`void r6p55499(int a, size_t b, double c, float d, int64_t e);`),
        structs: parseStruct(`void r6p55499(int a, size_t b, double c, float d, int64_t e);`),
        classes: parseClass(`void r6p55499(int a, size_t b, double c, float d, int64_t e);`),
        funcs: parseFunction(`void r6p55499(int a, size_t b, double c, float d, int64_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5499 生成结果为空');
      const expectSnippet0 = 'export function r6p55499(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5499 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5499 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5499 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5500
  * @tc.name : h2dts_gen_5500
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5500', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55500(int a, size_t b, double c, float d, unsigned e);`),
        unions: parseUnion(`void r6p55500(int a, size_t b, double c, float d, unsigned e);`),
        structs: parseStruct(`void r6p55500(int a, size_t b, double c, float d, unsigned e);`),
        classes: parseClass(`void r6p55500(int a, size_t b, double c, float d, unsigned e);`),
        funcs: parseFunction(`void r6p55500(int a, size_t b, double c, float d, unsigned e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5500 生成结果为空');
      const expectSnippet0 = 'export function r6p55500(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5500 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5500 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5500 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5501
  * @tc.name : h2dts_gen_5501
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5501', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55501(int a, size_t b, double c, float d, bool e);`),
        unions: parseUnion(`void r6p55501(int a, size_t b, double c, float d, bool e);`),
        structs: parseStruct(`void r6p55501(int a, size_t b, double c, float d, bool e);`),
        classes: parseClass(`void r6p55501(int a, size_t b, double c, float d, bool e);`),
        funcs: parseFunction(`void r6p55501(int a, size_t b, double c, float d, bool e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5501 生成结果为空');
      const expectSnippet0 = 'export function r6p55501(a: number, b: number, c: number, d: number, e: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5501 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5501 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5501 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5502
  * @tc.name : h2dts_gen_5502
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5502', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55502(int a, size_t b, double c, float d, char e);`),
        unions: parseUnion(`void r6p55502(int a, size_t b, double c, float d, char e);`),
        structs: parseStruct(`void r6p55502(int a, size_t b, double c, float d, char e);`),
        classes: parseClass(`void r6p55502(int a, size_t b, double c, float d, char e);`),
        funcs: parseFunction(`void r6p55502(int a, size_t b, double c, float d, char e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5502 生成结果为空');
      const expectSnippet0 = 'export function r6p55502(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5502 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5502 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5502 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5503
  * @tc.name : h2dts_gen_5503
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5503', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55503(int a, size_t b, double c, float d, wchar_t e);`),
        unions: parseUnion(`void r6p55503(int a, size_t b, double c, float d, wchar_t e);`),
        structs: parseStruct(`void r6p55503(int a, size_t b, double c, float d, wchar_t e);`),
        classes: parseClass(`void r6p55503(int a, size_t b, double c, float d, wchar_t e);`),
        funcs: parseFunction(`void r6p55503(int a, size_t b, double c, float d, wchar_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5503 生成结果为空');
      const expectSnippet0 = 'export function r6p55503(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5503 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5503 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5503 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5504
  * @tc.name : h2dts_gen_5504
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5504', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55504(int a, size_t b, double c, float d, char8_t e);`),
        unions: parseUnion(`void r6p55504(int a, size_t b, double c, float d, char8_t e);`),
        structs: parseStruct(`void r6p55504(int a, size_t b, double c, float d, char8_t e);`),
        classes: parseClass(`void r6p55504(int a, size_t b, double c, float d, char8_t e);`),
        funcs: parseFunction(`void r6p55504(int a, size_t b, double c, float d, char8_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5504 生成结果为空');
      const expectSnippet0 = 'export function r6p55504(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5504 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5504 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5504 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5505
  * @tc.name : h2dts_gen_5505
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5505', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55505(int a, size_t b, double c, float d, char16_t e);`),
        unions: parseUnion(`void r6p55505(int a, size_t b, double c, float d, char16_t e);`),
        structs: parseStruct(`void r6p55505(int a, size_t b, double c, float d, char16_t e);`),
        classes: parseClass(`void r6p55505(int a, size_t b, double c, float d, char16_t e);`),
        funcs: parseFunction(`void r6p55505(int a, size_t b, double c, float d, char16_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5505 生成结果为空');
      const expectSnippet0 = 'export function r6p55505(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5505 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5505 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5505 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5506
  * @tc.name : h2dts_gen_5506
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5506', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55506(int a, size_t b, double c, short d, long e);`),
        unions: parseUnion(`void r6p55506(int a, size_t b, double c, short d, long e);`),
        structs: parseStruct(`void r6p55506(int a, size_t b, double c, short d, long e);`),
        classes: parseClass(`void r6p55506(int a, size_t b, double c, short d, long e);`),
        funcs: parseFunction(`void r6p55506(int a, size_t b, double c, short d, long e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5506 生成结果为空');
      const expectSnippet0 = 'export function r6p55506(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5506 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5506 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5506 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5507
  * @tc.name : h2dts_gen_5507
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5507', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55507(int a, size_t b, double c, short d, uint8_t e);`),
        unions: parseUnion(`void r6p55507(int a, size_t b, double c, short d, uint8_t e);`),
        structs: parseStruct(`void r6p55507(int a, size_t b, double c, short d, uint8_t e);`),
        classes: parseClass(`void r6p55507(int a, size_t b, double c, short d, uint8_t e);`),
        funcs: parseFunction(`void r6p55507(int a, size_t b, double c, short d, uint8_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5507 生成结果为空');
      const expectSnippet0 = 'export function r6p55507(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5507 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5507 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5507 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5508
  * @tc.name : h2dts_gen_5508
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5508', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55508(int a, size_t b, double c, short d, uint16_t e);`),
        unions: parseUnion(`void r6p55508(int a, size_t b, double c, short d, uint16_t e);`),
        structs: parseStruct(`void r6p55508(int a, size_t b, double c, short d, uint16_t e);`),
        classes: parseClass(`void r6p55508(int a, size_t b, double c, short d, uint16_t e);`),
        funcs: parseFunction(`void r6p55508(int a, size_t b, double c, short d, uint16_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5508 生成结果为空');
      const expectSnippet0 = 'export function r6p55508(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5508 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5508 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5508 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5509
  * @tc.name : h2dts_gen_5509
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5509', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55509(int a, size_t b, double c, short d, uint32_t e);`),
        unions: parseUnion(`void r6p55509(int a, size_t b, double c, short d, uint32_t e);`),
        structs: parseStruct(`void r6p55509(int a, size_t b, double c, short d, uint32_t e);`),
        classes: parseClass(`void r6p55509(int a, size_t b, double c, short d, uint32_t e);`),
        funcs: parseFunction(`void r6p55509(int a, size_t b, double c, short d, uint32_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5509 生成结果为空');
      const expectSnippet0 = 'export function r6p55509(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5509 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5509 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5509 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5510
  * @tc.name : h2dts_gen_5510
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5510', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55510(int a, size_t b, double c, short d, uint64_t e);`),
        unions: parseUnion(`void r6p55510(int a, size_t b, double c, short d, uint64_t e);`),
        structs: parseStruct(`void r6p55510(int a, size_t b, double c, short d, uint64_t e);`),
        classes: parseClass(`void r6p55510(int a, size_t b, double c, short d, uint64_t e);`),
        funcs: parseFunction(`void r6p55510(int a, size_t b, double c, short d, uint64_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5510 生成结果为空');
      const expectSnippet0 = 'export function r6p55510(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5510 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5510 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5510 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5511
  * @tc.name : h2dts_gen_5511
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5511', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55511(int a, size_t b, double c, short d, int8_t e);`),
        unions: parseUnion(`void r6p55511(int a, size_t b, double c, short d, int8_t e);`),
        structs: parseStruct(`void r6p55511(int a, size_t b, double c, short d, int8_t e);`),
        classes: parseClass(`void r6p55511(int a, size_t b, double c, short d, int8_t e);`),
        funcs: parseFunction(`void r6p55511(int a, size_t b, double c, short d, int8_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5511 生成结果为空');
      const expectSnippet0 = 'export function r6p55511(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5511 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5511 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5511 执行异常: ${String(err)}`);
    }
  });
});
