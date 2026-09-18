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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part83.');

  /**
  * @tc.number : h2dts_gen_2753
  * @tc.name : h2dts_gen_2753
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::pair<double, wchar_t, uint32_t, float, long, short, char32_t>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2753', () => {
    try {
      const DECL = `void r5ts2753(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2753 生成结果为空');
      const expectSnippet0 = 'export function r5ts2753(v: [number, string, number, number, number, number, string]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2753 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2753 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2753 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2754
  * @tc.name : h2dts_gen_2754
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned>` → `[str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2754', () => {
    try {
      const DECL = `void r5ts2754(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2754 生成结果为空');
      const expectSnippet0 = 'export function r5ts2754(v: [string, number, string, number, number]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2754 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2754 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2754 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2755
  * @tc.name : h2dts_gen_2755
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<int, double>` → `{real: number, imag: number}` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2755', () => {
    try {
      const DECL = `void r5ts2755(std::complex<int, double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2755 生成结果为空');
      const expectSnippet0 = 'export function r5ts2755(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2755 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2755 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2755 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2756
  * @tc.name : h2dts_gen_2756
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<float, int32_t>` → `{real: number, imag: number}` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2756', () => {
    try {
      const DECL = `void r5ts2756(std::complex<float, int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2756 生成结果为空');
      const expectSnippet0 = 'export function r5ts2756(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2756 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2756 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2756 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2757
  * @tc.name : h2dts_gen_2757
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<long, uint32_t>` → `{real: number, imag: number}` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2757', () => {
    try {
      const DECL = `void r5ts2757(std::complex<long, uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2757 生成结果为空');
      const expectSnippet0 = 'export function r5ts2757(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2757 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2757 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2757 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2758
  * @tc.name : h2dts_gen_2758
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<unsigned, short>` → `{real: number, imag: number}` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2758', () => {
    try {
      const DECL = `void r5ts2758(std::complex<unsigned, short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2758 生成结果为空');
      const expectSnippet0 = 'export function r5ts2758(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2758 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2758 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2758 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2759
  * @tc.name : h2dts_gen_2759
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<uint8_t, size_t>` → `{real: number, imag: number}` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2759', () => {
    try {
      const DECL = `void r5ts2759(std::complex<uint8_t, size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2759 生成结果为空');
      const expectSnippet0 = 'export function r5ts2759(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2759 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2759 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2759 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2760
  * @tc.name : h2dts_gen_2760
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<uint16_t, uint64_t>` → `{real: number, imag: number}`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2760', () => {
    try {
      const DECL = `void r5ts2760(std::complex<uint16_t, uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2760 生成结果为空');
      const expectSnippet0 = 'export function r5ts2760(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2760 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2760 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2760 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2761
  * @tc.name : h2dts_gen_2761
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<int8_t, int16_t>` → `{real: number, imag: number}` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2761', () => {
    try {
      const DECL = `void r5ts2761(std::complex<int8_t, int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2761 生成结果为空');
      const expectSnippet0 = 'export function r5ts2761(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2761 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2761 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2761 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2762
  * @tc.name : h2dts_gen_2762
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::time_t` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2762', () => {
    try {
      const DECL = `void r5ts2762(std::time_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2762 生成结果为空');
      const expectSnippet0 = 'export function r5ts2762(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2762 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2762 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2762 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2763
  * @tc.name : h2dts_gen_2763
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::clock_t` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2763', () => {
    try {
      const DECL = `void r5ts2763(std::clock_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2763 生成结果为空');
      const expectSnippet0 = 'export function r5ts2763(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2763 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2763 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2763 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2764
  * @tc.name : h2dts_gen_2764
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::tm` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2764', () => {
    try {
      const DECL = `void r5ts2764(std::tm v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2764 生成结果为空');
      const expectSnippet0 = 'export function r5ts2764(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2764 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2764 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2764 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2765
  * @tc.name : h2dts_gen_2765
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::duration<double>` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2765', () => {
    try {
      const DECL = `void r5ts2765(std::chrono::duration<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2765 生成结果为空');
      const expectSnippet0 = 'export function r5ts2765(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2765 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2765 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2765 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2766
  * @tc.name : h2dts_gen_2766
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::system_clock::time_point` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2766', () => {
    try {
      const DECL = `void r5ts2766(std::chrono::system_clock::time_point v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2766 生成结果为空');
      const expectSnippet0 = 'export function r5ts2766(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2766 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2766 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2766 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2767
  * @tc.name : h2dts_gen_2767
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::steady_clock::time_point` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2767', () => {
    try {
      const DECL = `void r5ts2767(std::chrono::steady_clock::time_point v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2767 生成结果为空');
      const expectSnippet0 = 'export function r5ts2767(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2767 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2767 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2767 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2768
  * @tc.name : h2dts_gen_2768
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::seconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2768', () => {
    try {
      const DECL = `void r5ts2768(std::chrono::seconds v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2768 生成结果为空');
      const expectSnippet0 = 'export function r5ts2768(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2768 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2768 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2768 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2769
  * @tc.name : h2dts_gen_2769
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::milliseconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2769', () => {
    try {
      const DECL = `void r5ts2769(std::chrono::milliseconds v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2769 生成结果为空');
      const expectSnippet0 = 'export function r5ts2769(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2769 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2769 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2769 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2770
  * @tc.name : h2dts_gen_2770
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::microseconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2770', () => {
    try {
      const DECL = `void r5ts2770(std::chrono::microseconds v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2770 生成结果为空');
      const expectSnippet0 = 'export function r5ts2770(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2770 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2770 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2770 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2771
  * @tc.name : h2dts_gen_2771
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::nanoseconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2771', () => {
    try {
      const DECL = `void r5ts2771(std::chrono::nanoseconds v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2771 生成结果为空');
      const expectSnippet0 = 'export function r5ts2771(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2771 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2771 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2771 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2772
  * @tc.name : h2dts_gen_2772
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<int(int, int)>` → `(param0: number, param1: numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2772', () => {
    try {
      const DECL = `void r5ts2772(std::function<int(int, int)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2772 生成结果为空');
      const expectSnippet0 = 'export function r5ts2772(v: (param0: number, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2772 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2772 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2772 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2773
  * @tc.name : h2dts_gen_2773
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<void(long, long)>` → `(param0: number, param1: nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2773', () => {
    try {
      const DECL = `void r5ts2773(std::function<void(long, long)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2773 生成结果为空');
      const expectSnippet0 = 'export function r5ts2773(v: (param0: number, param1: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2773 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2773 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2773 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2774
  * @tc.name : h2dts_gen_2774
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<void()>` → `()=>void` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2774', () => {
    try {
      const DECL = `void r5ts2774(std::function<void()> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2774 生成结果为空');
      const expectSnippet0 = 'export function r5ts2774(v: ()=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2774 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2774 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2774 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2775
  * @tc.name : h2dts_gen_2775
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<int(float)>` → `(param0: number)=>number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2775', () => {
    try {
      const DECL = `void r5ts2775(std::function<int(float)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2775 生成结果为空');
      const expectSnippet0 = 'export function r5ts2775(v: (param0: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2775 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2775 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2775 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2776
  * @tc.name : h2dts_gen_2776
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<void(double)>` → `(param0: number)=>void` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2776', () => {
    try {
      const DECL = `void r5ts2776(std::function<void(double)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2776 生成结果为空');
      const expectSnippet0 = 'export function r5ts2776(v: (param0: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2776 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2776 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2776 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2777
  * @tc.name : h2dts_gen_2777
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<void(char, short, short)>` → `(param0: string, pa...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2777', () => {
    try {
      const DECL = `void r5ts2777(std::function<void(char, short, short)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2777 生成结果为空');
      const expectSnippet0 = 'export function r5ts2777(v: (param0: string, param1: number, param2: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2777 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2777 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2777 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2778
  * @tc.name : h2dts_gen_2778
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<void(char16_t, uint16_t)>` → `(param0: string, pa...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2778', () => {
    try {
      const DECL = `void r5ts2778(std::function<void(char16_t, uint16_t)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2778 生成结果为空');
      const expectSnippet0 = 'export function r5ts2778(v: (param0: string, param1: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2778 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2778 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2778 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2779
  * @tc.name : h2dts_gen_2779
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<unsigned(char64_t, size_t)>` → `(param0: string, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2779', () => {
    try {
      const DECL = `void r5ts2779(std::function<unsigned(char64_t, size_t)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2779 生成结果为空');
      const expectSnippet0 = 'export function r5ts2779(v: (param0: string, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2779 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2779 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2779 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2780
  * @tc.name : h2dts_gen_2780
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<char32_t(char8_t, int32_t)>` → `(param0: string, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2780', () => {
    try {
      const DECL = `void r5ts2780(std::function<char32_t(char8_t, int32_t)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2780 生成结果为空');
      const expectSnippet0 = 'export function r5ts2780(v: (param0: string, param1: number)=>string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2780 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2780 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2780 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2781
  * @tc.name : h2dts_gen_2781
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<uint64_t(wchar_t, uint32_t)>` → `(param0: string,...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2781', () => {
    try {
      const DECL = `void r5ts2781(std::function<uint64_t(wchar_t, uint32_t)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2781 生成结果为空');
      const expectSnippet0 = 'export function r5ts2781(v: (param0: string, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2781 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2781 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2781 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2782
  * @tc.name : h2dts_gen_2782
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<int64_t(int8_t, int16_t)>` → `(param0: number, pa...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2782', () => {
    try {
      const DECL = `void r5ts2782(std::function<int64_t(int8_t, int16_t)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2782 生成结果为空');
      const expectSnippet0 = 'export function r5ts2782(v: (param0: number, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2782 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2782 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2782 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2783
  * @tc.name : h2dts_gen_2783
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<bool(int32_t)>` → `(param0: number)=>boolean` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2783', () => {
    try {
      const DECL = `void r5ts2783(std::function<bool(int32_t)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2783 生成结果为空');
      const expectSnippet0 = 'export function r5ts2783(v: (param0: number)=>boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2783 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2783 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2783 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2784
  * @tc.name : h2dts_gen_2784
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<int>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2784', () => {
    try {
      const DECL = `void r5ts2784(std::unique_ptr<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2784 生成结果为空');
      const expectSnippet0 = 'export function r5ts2784(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2784 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2784 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2784 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2785
  * @tc.name : h2dts_gen_2785
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<size_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2785', () => {
    try {
      const DECL = `void r5ts2785(std::unique_ptr<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2785 生成结果为空');
      const expectSnippet0 = 'export function r5ts2785(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2785 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2785 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2785 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2786
  * @tc.name : h2dts_gen_2786
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<double>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2786', () => {
    try {
      const DECL = `void r5ts2786(std::unique_ptr<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2786 生成结果为空');
      const expectSnippet0 = 'export function r5ts2786(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2786 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2786 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2786 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2787
  * @tc.name : h2dts_gen_2787
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<float>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2787', () => {
    try {
      const DECL = `void r5ts2787(std::unique_ptr<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2787 生成结果为空');
      const expectSnippet0 = 'export function r5ts2787(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2787 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2787 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2787 执行异常: ${String(err)}`);
    }
  });
});
