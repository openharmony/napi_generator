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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part89.');
  /**
  * @tc.number : h2dts_gen_2963
  * @tc.name : h2dts_gen_2963
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<unsigned long long>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2963', () => {
    try {
      const DECL = `void r5ts2963(std::valarray<unsigned long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2963 生成结果为空');
      const expectSnippet0 = 'export function r5ts2963(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2963 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2963 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2963 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2964
  * @tc.name : h2dts_gen_2964
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<int *>::iterator` → `IterableIterator<number[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2964', () => {
    try {
      const DECL = `void r5ts2964(std::valarray<int *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2964 生成结果为空');
      const expectSnippet0 = 'export function r5ts2964(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2964 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2964 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2964 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2965
  * @tc.name : h2dts_gen_2965
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<std::string>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2965', () => {
    try {
      const DECL = `void r5ts2965(std::priority_queue<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2965 生成结果为空');
      const expectSnippet0 = 'export function r5ts2965(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2965 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2965 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2965 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2966
  * @tc.name : h2dts_gen_2966
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<char *>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2966', () => {
    try {
      const DECL = `void r5ts2966(std::priority_queue<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2966 生成结果为空');
      const expectSnippet0 = 'export function r5ts2966(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2966 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2966 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2966 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2967
  * @tc.name : h2dts_gen_2967
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2967', () => {
    try {
      const DECL = `void r5ts2967(std::priority_queue<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2967 生成结果为空');
      const expectSnippet0 = 'export function r5ts2967(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2967 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2967 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2967 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2968
  * @tc.name : h2dts_gen_2968
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<unsigned short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2968', () => {
    try {
      const DECL = `void r5ts2968(std::priority_queue<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2968 生成结果为空');
      const expectSnippet0 = 'export function r5ts2968(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2968 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2968 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2968 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2969
  * @tc.name : h2dts_gen_2969
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<unsigned long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2969', () => {
    try {
      const DECL = `void r5ts2969(std::priority_queue<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2969 生成结果为空');
      const expectSnippet0 = 'export function r5ts2969(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2969 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2969 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2969 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2970
  * @tc.name : h2dts_gen_2970
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<unsigned long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2970', () => {
    try {
      const DECL = `void r5ts2970(std::priority_queue<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2970 生成结果为空');
      const expectSnippet0 = 'export function r5ts2970(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2970 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2970 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2970 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2971
  * @tc.name : h2dts_gen_2971
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<int *>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2971', () => {
    try {
      const DECL = `void r5ts2971(std::priority_queue<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2971 生成结果为空');
      const expectSnippet0 = 'export function r5ts2971(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2971 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2971 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2971 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2972
  * @tc.name : h2dts_gen_2972
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<std::string>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2972', () => {
    try {
      const DECL = `void r5ts2972(std::priority_queue<std::string>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2972 生成结果为空');
      const expectSnippet0 = 'export function r5ts2972(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2972 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2972 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2972 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2973
  * @tc.name : h2dts_gen_2973
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<char *>::iterator` → `IterableIterator<stri...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2973', () => {
    try {
      const DECL = `void r5ts2973(std::priority_queue<char *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2973 生成结果为空');
      const expectSnippet0 = 'export function r5ts2973(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2973 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2973 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2973 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2974
  * @tc.name : h2dts_gen_2974
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<long long>::iterator` → `IterableIterator<n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2974', () => {
    try {
      const DECL = `void r5ts2974(std::priority_queue<long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2974 生成结果为空');
      const expectSnippet0 = 'export function r5ts2974(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2974 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2974 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2974 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2975
  * @tc.name : h2dts_gen_2975
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<unsigned short>::iterator` → `IterableItera...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2975', () => {
    try {
      const DECL = `void r5ts2975(std::priority_queue<unsigned short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2975 生成结果为空');
      const expectSnippet0 = 'export function r5ts2975(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2975 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2975 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2975 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2976
  * @tc.name : h2dts_gen_2976
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<unsigned long>::iterator` → `IterableIterat...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2976', () => {
    try {
      const DECL = `void r5ts2976(std::priority_queue<unsigned long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2976 生成结果为空');
      const expectSnippet0 = 'export function r5ts2976(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2976 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2976 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2976 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2977
  * @tc.name : h2dts_gen_2977
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<unsigned long long>::iterator` → `IterableI...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2977', () => {
    try {
      const DECL = `void r5ts2977(std::priority_queue<unsigned long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2977 生成结果为空');
      const expectSnippet0 = 'export function r5ts2977(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2977 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2977 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2977 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2978
  * @tc.name : h2dts_gen_2978
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<int *>::iterator` → `IterableIterator<numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2978', () => {
    try {
      const DECL = `void r5ts2978(std::priority_queue<int *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2978 生成结果为空');
      const expectSnippet0 = 'export function r5ts2978(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2978 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2978 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2978 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2979
  * @tc.name : h2dts_gen_2979
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<std::string, int>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2979', () => {
    try {
      const DECL = `void r5ts2979(std::map<std::string, int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2979 生成结果为空');
      const expectSnippet0 = 'export function r5ts2979(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2979 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2979 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2979 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2980
  * @tc.name : h2dts_gen_2980
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<charb *, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2980', () => {
    try {
      const DECL = `void r5ts2980(std::map<charb *, size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2980 生成结果为空');
      const expectSnippet0 = 'export function r5ts2980(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2980 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2980 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2980 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2981
  * @tc.name : h2dts_gen_2981
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<std::string, long long>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2981', () => {
    try {
      const DECL = `void r5ts2981(std::map<std::string, long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2981 生成结果为空');
      const expectSnippet0 = 'export function r5ts2981(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2981 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2981 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2981 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2982
  * @tc.name : h2dts_gen_2982
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char *, int *>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2982', () => {
    try {
      const DECL = `void r5ts2982(std::map<char *, int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2982 生成结果为空');
      const expectSnippet0 = 'export function r5ts2982(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2982 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2982 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2982 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2983
  * @tc.name : h2dts_gen_2983
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char *, unsigned long long>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2983', () => {
    try {
      const DECL = `void r5ts2983(std::map<char *, unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2983 生成结果为空');
      const expectSnippet0 = 'export function r5ts2983(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2983 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2983 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2983 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2984
  * @tc.name : h2dts_gen_2984
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<std::string, unsigned short>` → `Map<string, number>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2984', () => {
    try {
      const DECL = `void r5ts2984(std::map<std::string, unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2984 生成结果为空');
      const expectSnippet0 = 'export function r5ts2984(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2984 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2984 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2984 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2985
  * @tc.name : h2dts_gen_2985
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<int *, std::string>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2985', () => {
    try {
      const DECL = `void r5ts2985(std::map<int *, std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2985 生成结果为空');
      const expectSnippet0 = 'export function r5ts2985(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2985 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2985 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2985 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2986
  * @tc.name : h2dts_gen_2986
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<double, char *>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2986', () => {
    try {
      const DECL = `void r5ts2986(std::map<double, char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2986 生成结果为空');
      const expectSnippet0 = 'export function r5ts2986(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2986 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2986 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2986 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2987
  * @tc.name : h2dts_gen_2987
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<int *, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2987', () => {
    try {
      const DECL = `void r5ts2987(std::map<int *, char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2987 生成结果为空');
      const expectSnippet0 = 'export function r5ts2987(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2987 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2987 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2987 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2988
  * @tc.name : h2dts_gen_2988
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<std::string, int>::iterator` → `IterableIterator<Map<s...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2988', () => {
    try {
      const DECL = `void r5ts2988(std::map<std::string, int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2988 生成结果为空');
      const expectSnippet0 = 'export function r5ts2988(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2988 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2988 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2988 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2989
  * @tc.name : h2dts_gen_2989
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<charb *, size_t>::iterator` → `IterableIterator<Map<st...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2989', () => {
    try {
      const DECL = `void r5ts2989(std::map<charb *, size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2989 生成结果为空');
      const expectSnippet0 = 'export function r5ts2989(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2989 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2989 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2989 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2990
  * @tc.name : h2dts_gen_2990
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<std::string, long long>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2990', () => {
    try {
      const DECL = `void r5ts2990(std::map<std::string, long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2990 生成结果为空');
      const expectSnippet0 = 'export function r5ts2990(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2990 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2990 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2990 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2991
  * @tc.name : h2dts_gen_2991
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char *, int *>::iterator` → `IterableIterator<Map<stri...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2991', () => {
    try {
      const DECL = `void r5ts2991(std::map<char *, int *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2991 生成结果为空');
      const expectSnippet0 = 'export function r5ts2991(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2991 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2991 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2991 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2992
  * @tc.name : h2dts_gen_2992
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char *, unsigned long long>::iterator` → `IterableIter...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2992', () => {
    try {
      const DECL = `void r5ts2992(std::map<char *, unsigned long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2992 生成结果为空');
      const expectSnippet0 = 'export function r5ts2992(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2992 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2992 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2992 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2993
  * @tc.name : h2dts_gen_2993
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<std::string, unsigned short>::iterator` → `IterableIte...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2993', () => {
    try {
      const DECL = `void r5ts2993(std::map<std::string, unsigned short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2993 生成结果为空');
      const expectSnippet0 = 'export function r5ts2993(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2993 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2993 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2993 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2994
  * @tc.name : h2dts_gen_2994
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<int *, std::string>::iterator` → `IterableIterator<Map...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2994', () => {
    try {
      const DECL = `void r5ts2994(std::map<int *, std::string>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2994 生成结果为空');
      const expectSnippet0 = 'export function r5ts2994(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2994 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2994 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2994 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2995
  * @tc.name : h2dts_gen_2995
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<double, char *>::iterator` → `IterableIterator<Map<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2995', () => {
    try {
      const DECL = `void r5ts2995(std::map<double, char *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2995 生成结果为空');
      const expectSnippet0 = 'export function r5ts2995(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2995 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2995 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2995 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2996
  * @tc.name : h2dts_gen_2996
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<int *, char>::iterator` → `IterableIterator<Map<number...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2996', () => {
    try {
      const DECL = `void r5ts2996(std::map<int *, char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2996 生成结果为空');
      const expectSnippet0 = 'export function r5ts2996(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2996 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2996 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2996 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2997
  * @tc.name : h2dts_gen_2997
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<std::string, int>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2997', () => {
    try {
      const DECL = `void r5ts2997(std::unordered_map<std::string, int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2997 生成结果为空');
      const expectSnippet0 = 'export function r5ts2997(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2997 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2997 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2997 执行异常: ${String(err)}`);
    }
  });
});
