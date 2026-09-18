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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part93.');

  /**
  * @tc.number : h2dts_gen_3103
  * @tc.name : h2dts_gen_3103
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<unsigned short>::iterator` → `IterableI...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3103', () => {
    try {
      const DECL = `void r5ts3103(std::unordered_multiset<unsigned short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3103 生成结果为空');
      const expectSnippet0 = 'export function r5ts3103(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3103 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3104
  * @tc.name : h2dts_gen_3104
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<unsigned long>::iterator` → `IterableIt...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3104', () => {
    try {
      const DECL = `void r5ts3104(std::unordered_multiset<unsigned long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3104 生成结果为空');
      const expectSnippet0 = 'export function r5ts3104(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3104 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3105
  * @tc.name : h2dts_gen_3105
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<unsigned long long>::iterator` → `Itera...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3105', () => {
    try {
      const DECL = `void r5ts3105(std::unordered_multiset<unsigned long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3105 生成结果为空');
      const expectSnippet0 = 'export function r5ts3105(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3105 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3106
  * @tc.name : h2dts_gen_3106
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<int *>::iterator` → `IterableIterator<S...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3106', () => {
    try {
      const DECL = `void r5ts3106(std::unordered_multiset<int *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3106 生成结果为空');
      const expectSnippet0 = 'export function r5ts3106(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3106 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3107
  * @tc.name : h2dts_gen_3107
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3107', () => {
    try {
      const DECL = `void r5ts3107(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3107 生成结果为空');
      const expectSnippet0 = 'export function r5ts3107(v: [number, boolean, number, string, number, string, number]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3107 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3108
  * @tc.name : h2dts_gen_3108
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, i...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3108', () => {
    try {
      const DECL = `void r5ts3108(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3108 生成结果为空');
      const expectSnippet0 = 'export function r5ts3108(v: [number, boolean, number, string, number, string, number]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3108 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3109
  * @tc.name : h2dts_gen_3109
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<long long, int *>` → `{real: number, imag: number}` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3109', () => {
    try {
      const DECL = `void r5ts3109(std::complex<long long, int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3109 生成结果为空');
      const expectSnippet0 = 'export function r5ts3109(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3109 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3110
  * @tc.name : h2dts_gen_3110
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<unsigned short, unsigned long>` → `{real: number, ima...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3110', () => {
    try {
      const DECL = `void r5ts3110(std::complex<unsigned short, unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3110 生成结果为空');
      const expectSnippet0 = 'export function r5ts3110(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3110 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3111
  * @tc.name : h2dts_gen_3111
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<int64_t, unsigned long long>` → `{real: number, imag:...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3111', () => {
    try {
      const DECL = `void r5ts3111(std::complex<int64_t, unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3111 生成结果为空');
      const expectSnippet0 = 'export function r5ts3111(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3111 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3112
  * @tc.name : h2dts_gen_3112
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::hours` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3112', () => {
    try {
      const DECL = `void r5ts3112(std::chrono::hours v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3112 生成结果为空');
      const expectSnippet0 = 'export function r5ts3112(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3112 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3113
  * @tc.name : h2dts_gen_3113
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::minutes` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3113', () => {
    try {
      const DECL = `void r5ts3113(std::chrono::minutes v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3113 生成结果为空');
      const expectSnippet0 = 'export function r5ts3113(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3113 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3114
  * @tc.name : h2dts_gen_3114
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<std::string(char *)>` → `(param0: string)=>string...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3114', () => {
    try {
      const DECL = `void r5ts3114(std::function<std::string(char *)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3114 生成结果为空');
      const expectSnippet0 = 'export function r5ts3114(v: (param0: string)=>string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3114 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3115
  * @tc.name : h2dts_gen_3115
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<unsigned short(long long, unsigned long)>` → `(pa...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3115', () => {
    try {
      const DECL = `void r5ts3115(std::function<unsigned short(long long, unsigned long)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3115 生成结果为空');
      const expectSnippet0 = 'export function r5ts3115(v: (param0: number, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3115 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3116
  * @tc.name : h2dts_gen_3116
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<void(int *, unsigned long long)>` → `(param0: num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3116', () => {
    try {
      const DECL = `void r5ts3116(std::function<void(int *, unsigned long long)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3116 生成结果为空');
      const expectSnippet0 = 'export function r5ts3116(v: (param0: number, param1: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3116 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3117
  * @tc.name : h2dts_gen_3117
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<std::string>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3117', () => {
    try {
      const DECL = `void r5ts3117(std::unique_ptr<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3117 生成结果为空');
      const expectSnippet0 = 'export function r5ts3117(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3117 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3118
  * @tc.name : h2dts_gen_3118
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<char *>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3118', () => {
    try {
      const DECL = `void r5ts3118(std::unique_ptr<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3118 生成结果为空');
      const expectSnippet0 = 'export function r5ts3118(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3118 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3119
  * @tc.name : h2dts_gen_3119
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3119', () => {
    try {
      const DECL = `void r5ts3119(std::unique_ptr<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3119 生成结果为空');
      const expectSnippet0 = 'export function r5ts3119(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3119 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3120
  * @tc.name : h2dts_gen_3120
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<unsigned short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3120', () => {
    try {
      const DECL = `void r5ts3120(std::unique_ptr<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3120 生成结果为空');
      const expectSnippet0 = 'export function r5ts3120(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3120 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3121
  * @tc.name : h2dts_gen_3121
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<unsigned long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3121', () => {
    try {
      const DECL = `void r5ts3121(std::unique_ptr<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3121 生成结果为空');
      const expectSnippet0 = 'export function r5ts3121(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3121 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3122
  * @tc.name : h2dts_gen_3122
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<unsigned long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3122', () => {
    try {
      const DECL = `void r5ts3122(std::unique_ptr<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3122 生成结果为空');
      const expectSnippet0 = 'export function r5ts3122(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3122 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3123
  * @tc.name : h2dts_gen_3123
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<int *>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3123', () => {
    try {
      const DECL = `void r5ts3123(std::unique_ptr<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3123 生成结果为空');
      const expectSnippet0 = 'export function r5ts3123(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3123 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3124
  * @tc.name : h2dts_gen_3124
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<std::string>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3124', () => {
    try {
      const DECL = `void r5ts3124(std::shared_ptr<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3124 生成结果为空');
      const expectSnippet0 = 'export function r5ts3124(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3124 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3125
  * @tc.name : h2dts_gen_3125
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<char *>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3125', () => {
    try {
      const DECL = `void r5ts3125(std::shared_ptr<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3125 生成结果为空');
      const expectSnippet0 = 'export function r5ts3125(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3125 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3126
  * @tc.name : h2dts_gen_3126
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3126', () => {
    try {
      const DECL = `void r5ts3126(std::shared_ptr<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3126 生成结果为空');
      const expectSnippet0 = 'export function r5ts3126(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3126 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3127
  * @tc.name : h2dts_gen_3127
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<unsigned short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3127', () => {
    try {
      const DECL = `void r5ts3127(std::shared_ptr<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3127 生成结果为空');
      const expectSnippet0 = 'export function r5ts3127(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3127 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3128
  * @tc.name : h2dts_gen_3128
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<unsigned long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3128', () => {
    try {
      const DECL = `void r5ts3128(std::shared_ptr<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3128 生成结果为空');
      const expectSnippet0 = 'export function r5ts3128(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3128 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3129
  * @tc.name : h2dts_gen_3129
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<unsigned long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3129', () => {
    try {
      const DECL = `void r5ts3129(std::shared_ptr<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3129 生成结果为空');
      const expectSnippet0 = 'export function r5ts3129(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3129 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3130
  * @tc.name : h2dts_gen_3130
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<int *>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3130', () => {
    try {
      const DECL = `void r5ts3130(std::shared_ptr<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3130 生成结果为空');
      const expectSnippet0 = 'export function r5ts3130(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3130 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3131
  * @tc.name : h2dts_gen_3131
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<std::string>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3131', () => {
    try {
      const DECL = `void r5ts3131(std::weak_ptr<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3131 生成结果为空');
      const expectSnippet0 = 'export function r5ts3131(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3131 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3132
  * @tc.name : h2dts_gen_3132
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char *>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3132', () => {
    try {
      const DECL = `void r5ts3132(std::weak_ptr<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3132 生成结果为空');
      const expectSnippet0 = 'export function r5ts3132(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3132 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3133
  * @tc.name : h2dts_gen_3133
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3133', () => {
    try {
      const DECL = `void r5ts3133(std::weak_ptr<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3133 生成结果为空');
      const expectSnippet0 = 'export function r5ts3133(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3133 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3134
  * @tc.name : h2dts_gen_3134
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<unsigned short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3134', () => {
    try {
      const DECL = `void r5ts3134(std::weak_ptr<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3134 生成结果为空');
      const expectSnippet0 = 'export function r5ts3134(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3134 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3135
  * @tc.name : h2dts_gen_3135
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<unsigned long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3135', () => {
    try {
      const DECL = `void r5ts3135(std::weak_ptr<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3135 生成结果为空');
      const expectSnippet0 = 'export function r5ts3135(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3135 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3136
  * @tc.name : h2dts_gen_3136
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<unsigned long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3136', () => {
    try {
      const DECL = `void r5ts3136(std::weak_ptr<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3136 生成结果为空');
      const expectSnippet0 = 'export function r5ts3136(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3136 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3137
  * @tc.name : h2dts_gen_3137
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int *>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3137', () => {
    try {
      const DECL = `void r5ts3137(std::weak_ptr<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3137 生成结果为空');
      const expectSnippet0 = 'export function r5ts3137(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3137 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3137 执行异常: ${String(err)}`);
    }
  });
});
