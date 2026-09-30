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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part143.');

  /**
  * @tc.number : h2dts_gen_4822
  * @tc.name : h2dts_gen_4822
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<unsigned short>::iterator` → `IterableI...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4822', () => {
    try {
      const DECL = `void r5ts4822(std::unordered_multiset<unsigned short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4822 生成结果为空');
      const expectSnippet0 = 'export function r5ts4822(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4822 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4822 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4822 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4823
  * @tc.name : h2dts_gen_4823
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<unsigned long>::iterator` → `IterableIt...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4823', () => {
    try {
      const DECL = `void r5ts4823(std::unordered_multiset<unsigned long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4823 生成结果为空');
      const expectSnippet0 = 'export function r5ts4823(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4823 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4823 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4823 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4824
  * @tc.name : h2dts_gen_4824
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<unsigned long long>::iterator` → `Itera...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4824', () => {
    try {
      const DECL = `void r5ts4824(std::unordered_multiset<unsigned long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4824 生成结果为空');
      const expectSnippet0 = 'export function r5ts4824(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4824 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4824 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4824 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4825
  * @tc.name : h2dts_gen_4825
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<int *>::iterator` → `IterableIterator<S...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4825', () => {
    try {
      const DECL = `void r5ts4825(std::unordered_multiset<int *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4825 生成结果为空');
      const expectSnippet0 = 'export function r5ts4825(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4825 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4825 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4825 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4826
  * @tc.name : h2dts_gen_4826
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4826', () => {
    try {
      const DECL = `void r5ts4826(std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4826 生成结果为空');
      const expectSnippet0 = 'export function r5ts4826(v: [number, boolean, number, string, number, string, number]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4826 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4826 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4826 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4827
  * @tc.name : h2dts_gen_4827
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, i...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4827', () => {
    try {
      const DECL = `void r5ts4827(std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4827 生成结果为空');
      const expectSnippet0 = 'export function r5ts4827(v: [number, boolean, number, string, number, string, number]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4827 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4827 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4827 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4828
  * @tc.name : h2dts_gen_4828
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<long long, int *>` → `{real: number, imag: number}` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4828', () => {
    try {
      const DECL = `void r5ts4828(std::complex<long long, int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4828 生成结果为空');
      const expectSnippet0 = 'export function r5ts4828(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4828 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4828 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4828 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4829
  * @tc.name : h2dts_gen_4829
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<unsigned short, unsigned long>` → `{real: number, ima...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4829', () => {
    try {
      const DECL = `void r5ts4829(std::complex<unsigned short, unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4829 生成结果为空');
      const expectSnippet0 = 'export function r5ts4829(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4829 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4829 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4829 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4830
  * @tc.name : h2dts_gen_4830
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::complex<int64_t, unsigned long long>` → `{real: number, imag:...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4830', () => {
    try {
      const DECL = `void r5ts4830(std::complex<int64_t, unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4830 生成结果为空');
      const expectSnippet0 = 'export function r5ts4830(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4830 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4830 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4830 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4831
  * @tc.name : h2dts_gen_4831
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::hours` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4831', () => {
    try {
      const DECL = `void r5ts4831(std::chrono::hours v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4831 生成结果为空');
      const expectSnippet0 = 'export function r5ts4831(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4831 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4831 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4831 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4832
  * @tc.name : h2dts_gen_4832
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::chrono::minutes` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4832', () => {
    try {
      const DECL = `void r5ts4832(std::chrono::minutes v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4832 生成结果为空');
      const expectSnippet0 = 'export function r5ts4832(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4832 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4832 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4832 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4833
  * @tc.name : h2dts_gen_4833
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<std::string(char *)>` → `(param0: string)=>string...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4833', () => {
    try {
      const DECL = `void r5ts4833(std::function<std::string(char *)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4833 生成结果为空');
      const expectSnippet0 = 'export function r5ts4833(v: (param0: string)=>string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4833 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4833 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4833 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4834
  * @tc.name : h2dts_gen_4834
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<unsigned short(long long, unsigned long)>` → `(pa...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4834', () => {
    try {
      const DECL = `void r5ts4834(std::function<unsigned short(long long, unsigned long)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4834 生成结果为空');
      const expectSnippet0 = 'export function r5ts4834(v: (param0: number, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4834 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4834 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4834 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4835
  * @tc.name : h2dts_gen_4835
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-callback `std::function<void(int *, unsigned long long)>` → `(param0: num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4835', () => {
    try {
      const DECL = `void r5ts4835(std::function<void(int *, unsigned long long)> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4835 生成结果为空');
      const expectSnippet0 = 'export function r5ts4835(v: (param0: number, param1: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4835 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4835 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4835 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4836
  * @tc.name : h2dts_gen_4836
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<std::string>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4836', () => {
    try {
      const DECL = `void r5ts4836(std::unique_ptr<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4836 生成结果为空');
      const expectSnippet0 = 'export function r5ts4836(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4836 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4836 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4836 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4837
  * @tc.name : h2dts_gen_4837
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<char *>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4837', () => {
    try {
      const DECL = `void r5ts4837(std::unique_ptr<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4837 生成结果为空');
      const expectSnippet0 = 'export function r5ts4837(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4837 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4837 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4837 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4838
  * @tc.name : h2dts_gen_4838
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4838', () => {
    try {
      const DECL = `void r5ts4838(std::unique_ptr<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4838 生成结果为空');
      const expectSnippet0 = 'export function r5ts4838(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4838 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4838 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4838 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4839
  * @tc.name : h2dts_gen_4839
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<unsigned short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4839', () => {
    try {
      const DECL = `void r5ts4839(std::unique_ptr<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4839 生成结果为空');
      const expectSnippet0 = 'export function r5ts4839(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4839 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4839 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4839 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4840
  * @tc.name : h2dts_gen_4840
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<unsigned long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4840', () => {
    try {
      const DECL = `void r5ts4840(std::unique_ptr<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4840 生成结果为空');
      const expectSnippet0 = 'export function r5ts4840(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4840 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4840 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4840 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4841
  * @tc.name : h2dts_gen_4841
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<unsigned long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4841', () => {
    try {
      const DECL = `void r5ts4841(std::unique_ptr<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4841 生成结果为空');
      const expectSnippet0 = 'export function r5ts4841(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4841 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4841 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4841 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4842
  * @tc.name : h2dts_gen_4842
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::unique_ptr<int *>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4842', () => {
    try {
      const DECL = `void r5ts4842(std::unique_ptr<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4842 生成结果为空');
      const expectSnippet0 = 'export function r5ts4842(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4842 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4842 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4842 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4843
  * @tc.name : h2dts_gen_4843
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<std::string>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4843', () => {
    try {
      const DECL = `void r5ts4843(std::shared_ptr<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4843 生成结果为空');
      const expectSnippet0 = 'export function r5ts4843(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4843 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4843 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4843 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4844
  * @tc.name : h2dts_gen_4844
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<char *>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4844', () => {
    try {
      const DECL = `void r5ts4844(std::shared_ptr<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4844 生成结果为空');
      const expectSnippet0 = 'export function r5ts4844(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4844 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4844 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4844 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4845
  * @tc.name : h2dts_gen_4845
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4845', () => {
    try {
      const DECL = `void r5ts4845(std::shared_ptr<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4845 生成结果为空');
      const expectSnippet0 = 'export function r5ts4845(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4845 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4845 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4845 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4846
  * @tc.name : h2dts_gen_4846
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<unsigned short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4846', () => {
    try {
      const DECL = `void r5ts4846(std::shared_ptr<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4846 生成结果为空');
      const expectSnippet0 = 'export function r5ts4846(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4846 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4846 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4846 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4847
  * @tc.name : h2dts_gen_4847
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<unsigned long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4847', () => {
    try {
      const DECL = `void r5ts4847(std::shared_ptr<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4847 生成结果为空');
      const expectSnippet0 = 'export function r5ts4847(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4847 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4847 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4847 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4848
  * @tc.name : h2dts_gen_4848
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<unsigned long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4848', () => {
    try {
      const DECL = `void r5ts4848(std::shared_ptr<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4848 生成结果为空');
      const expectSnippet0 = 'export function r5ts4848(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4848 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4848 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4848 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4849
  * @tc.name : h2dts_gen_4849
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<int *>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4849', () => {
    try {
      const DECL = `void r5ts4849(std::shared_ptr<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4849 生成结果为空');
      const expectSnippet0 = 'export function r5ts4849(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4849 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4849 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4849 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4850
  * @tc.name : h2dts_gen_4850
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<std::string>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4850', () => {
    try {
      const DECL = `void r5ts4850(std::weak_ptr<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4850 生成结果为空');
      const expectSnippet0 = 'export function r5ts4850(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4850 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4850 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4850 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4851
  * @tc.name : h2dts_gen_4851
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char *>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4851', () => {
    try {
      const DECL = `void r5ts4851(std::weak_ptr<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4851 生成结果为空');
      const expectSnippet0 = 'export function r5ts4851(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4851 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4851 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4851 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4852
  * @tc.name : h2dts_gen_4852
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4852', () => {
    try {
      const DECL = `void r5ts4852(std::weak_ptr<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4852 生成结果为空');
      const expectSnippet0 = 'export function r5ts4852(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4852 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4852 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4852 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4853
  * @tc.name : h2dts_gen_4853
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<unsigned short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4853', () => {
    try {
      const DECL = `void r5ts4853(std::weak_ptr<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4853 生成结果为空');
      const expectSnippet0 = 'export function r5ts4853(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4853 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4853 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4853 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4854
  * @tc.name : h2dts_gen_4854
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<unsigned long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4854', () => {
    try {
      const DECL = `void r5ts4854(std::weak_ptr<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4854 生成结果为空');
      const expectSnippet0 = 'export function r5ts4854(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4854 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4854 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4854 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4855
  * @tc.name : h2dts_gen_4855
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<unsigned long long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4855', () => {
    try {
      const DECL = `void r5ts4855(std::weak_ptr<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4855 生成结果为空');
      const expectSnippet0 = 'export function r5ts4855(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4855 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4855 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4855 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4856
  * @tc.name : h2dts_gen_4856
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int *>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4856', () => {
    try {
      const DECL = `void r5ts4856(std::weak_ptr<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4856 生成结果为空');
      const expectSnippet0 = 'export function r5ts4856(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4856 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4856 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4856 执行异常: ${String(err)}`);
    }
  });
});
