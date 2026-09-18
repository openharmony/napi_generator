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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part68.');
  /**
  * @tc.number : h2dts_gen_2228
  * @tc.name : h2dts_gen_2228
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<uint8_t>::iterator` → `IterableIterator<number[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2228', () => {
    try {
      const DECL = `void r5ts2228(std::list<uint8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2228 生成结果为空');
      const expectSnippet0 = 'export function r5ts2228(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2228 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2228 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2228 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2229
  * @tc.name : h2dts_gen_2229
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<uint16_t>::iterator` → `IterableIterator<number[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2229', () => {
    try {
      const DECL = `void r5ts2229(std::list<uint16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2229 生成结果为空');
      const expectSnippet0 = 'export function r5ts2229(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2229 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2229 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2229 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2230
  * @tc.name : h2dts_gen_2230
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<uint32_t>::iterator` → `IterableIterator<number[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2230', () => {
    try {
      const DECL = `void r5ts2230(std::list<uint32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2230 生成结果为空');
      const expectSnippet0 = 'export function r5ts2230(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2230 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2230 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2230 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2231
  * @tc.name : h2dts_gen_2231
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<uint64_t>::iterator` → `IterableIterator<number[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2231', () => {
    try {
      const DECL = `void r5ts2231(std::list<uint64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2231 生成结果为空');
      const expectSnippet0 = 'export function r5ts2231(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2231 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2231 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2231 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2232
  * @tc.name : h2dts_gen_2232
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<int8_t>::iterator` → `IterableIterator<number[]>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2232', () => {
    try {
      const DECL = `void r5ts2232(std::list<int8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2232 生成结果为空');
      const expectSnippet0 = 'export function r5ts2232(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2232 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2232 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2232 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2233
  * @tc.name : h2dts_gen_2233
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<int16_t>::iterator` → `IterableIterator<number[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2233', () => {
    try {
      const DECL = `void r5ts2233(std::list<int16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2233 生成结果为空');
      const expectSnippet0 = 'export function r5ts2233(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2233 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2233 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2233 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2234
  * @tc.name : h2dts_gen_2234
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<int32_t>::iterator` → `IterableIterator<number[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2234', () => {
    try {
      const DECL = `void r5ts2234(std::list<int32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2234 生成结果为空');
      const expectSnippet0 = 'export function r5ts2234(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2234 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2234 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2234 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2235
  * @tc.name : h2dts_gen_2235
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<int64_t>::iterator` → `IterableIterator<number[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2235', () => {
    try {
      const DECL = `void r5ts2235(std::list<int64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2235 生成结果为空');
      const expectSnippet0 = 'export function r5ts2235(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2235 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2235 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2235 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2236
  * @tc.name : h2dts_gen_2236
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<unsigned>::iterator` → `IterableIterator<number[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2236', () => {
    try {
      const DECL = `void r5ts2236(std::list<unsigned>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2236 生成结果为空');
      const expectSnippet0 = 'export function r5ts2236(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2236 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2236 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2236 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2237
  * @tc.name : h2dts_gen_2237
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2237', () => {
    try {
      const DECL = `void r5ts2237(std::list<bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2237 生成结果为空');
      const expectSnippet0 = 'export function r5ts2237(v: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2237 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2237 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2237 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2238
  * @tc.name : h2dts_gen_2238
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<char>::iterator` → `IterableIterator<string[]>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2238', () => {
    try {
      const DECL = `void r5ts2238(std::list<char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2238 生成结果为空');
      const expectSnippet0 = 'export function r5ts2238(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2238 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2238 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2238 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2239
  * @tc.name : h2dts_gen_2239
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<wchar_t>::iterator` → `IterableIterator<string[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2239', () => {
    try {
      const DECL = `void r5ts2239(std::list<wchar_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2239 生成结果为空');
      const expectSnippet0 = 'export function r5ts2239(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2239 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2239 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2239 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2240
  * @tc.name : h2dts_gen_2240
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<char8_t>::iterator` → `IterableIterator<string[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2240', () => {
    try {
      const DECL = `void r5ts2240(std::list<char8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2240 生成结果为空');
      const expectSnippet0 = 'export function r5ts2240(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2240 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2240 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2240 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2241
  * @tc.name : h2dts_gen_2241
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<char16_t>::iterator` → `IterableIterator<string[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2241', () => {
    try {
      const DECL = `void r5ts2241(std::list<char16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2241 生成结果为空');
      const expectSnippet0 = 'export function r5ts2241(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2241 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2241 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2241 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2242
  * @tc.name : h2dts_gen_2242
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<char32_t>::iterator` → `IterableIterator<string[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2242', () => {
    try {
      const DECL = `void r5ts2242(std::list<char32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2242 生成结果为空');
      const expectSnippet0 = 'export function r5ts2242(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2242 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2242 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2242 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2243
  * @tc.name : h2dts_gen_2243
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2243', () => {
    try {
      const DECL = `void r5ts2243(std::forward_list<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2243 生成结果为空');
      const expectSnippet0 = 'export function r5ts2243(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2243 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2243 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2243 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2244
  * @tc.name : h2dts_gen_2244
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2244', () => {
    try {
      const DECL = `void r5ts2244(std::forward_list<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2244 生成结果为空');
      const expectSnippet0 = 'export function r5ts2244(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2244 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2244 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2244 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2245
  * @tc.name : h2dts_gen_2245
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2245', () => {
    try {
      const DECL = `void r5ts2245(std::forward_list<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2245 生成结果为空');
      const expectSnippet0 = 'export function r5ts2245(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2245 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2245 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2245 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2246
  * @tc.name : h2dts_gen_2246
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2246', () => {
    try {
      const DECL = `void r5ts2246(std::forward_list<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2246 生成结果为空');
      const expectSnippet0 = 'export function r5ts2246(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2246 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2246 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2246 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2247
  * @tc.name : h2dts_gen_2247
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2247', () => {
    try {
      const DECL = `void r5ts2247(std::forward_list<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2247 生成结果为空');
      const expectSnippet0 = 'export function r5ts2247(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2247 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2247 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2247 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2248
  * @tc.name : h2dts_gen_2248
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2248', () => {
    try {
      const DECL = `void r5ts2248(std::forward_list<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2248 生成结果为空');
      const expectSnippet0 = 'export function r5ts2248(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2248 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2248 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2248 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2249
  * @tc.name : h2dts_gen_2249
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2249', () => {
    try {
      const DECL = `void r5ts2249(std::forward_list<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2249 生成结果为空');
      const expectSnippet0 = 'export function r5ts2249(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2249 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2249 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2249 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2250
  * @tc.name : h2dts_gen_2250
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2250', () => {
    try {
      const DECL = `void r5ts2250(std::forward_list<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2250 生成结果为空');
      const expectSnippet0 = 'export function r5ts2250(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2250 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2250 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2250 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2251
  * @tc.name : h2dts_gen_2251
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2251', () => {
    try {
      const DECL = `void r5ts2251(std::forward_list<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2251 生成结果为空');
      const expectSnippet0 = 'export function r5ts2251(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2251 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2251 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2251 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2252
  * @tc.name : h2dts_gen_2252
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2252', () => {
    try {
      const DECL = `void r5ts2252(std::forward_list<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2252 生成结果为空');
      const expectSnippet0 = 'export function r5ts2252(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2252 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2252 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2252 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2253
  * @tc.name : h2dts_gen_2253
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2253', () => {
    try {
      const DECL = `void r5ts2253(std::forward_list<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2253 生成结果为空');
      const expectSnippet0 = 'export function r5ts2253(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2253 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2253 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2253 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2254
  * @tc.name : h2dts_gen_2254
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2254', () => {
    try {
      const DECL = `void r5ts2254(std::forward_list<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2254 生成结果为空');
      const expectSnippet0 = 'export function r5ts2254(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2254 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2254 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2255
  * @tc.name : h2dts_gen_2255
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2255', () => {
    try {
      const DECL = `void r5ts2255(std::forward_list<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2255 生成结果为空');
      const expectSnippet0 = 'export function r5ts2255(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2255 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2255 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2256
  * @tc.name : h2dts_gen_2256
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2256', () => {
    try {
      const DECL = `void r5ts2256(std::forward_list<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2256 生成结果为空');
      const expectSnippet0 = 'export function r5ts2256(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2256 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2256 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2257
  * @tc.name : h2dts_gen_2257
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2257', () => {
    try {
      const DECL = `void r5ts2257(std::forward_list<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2257 生成结果为空');
      const expectSnippet0 = 'export function r5ts2257(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2257 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2257 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2258
  * @tc.name : h2dts_gen_2258
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2258', () => {
    try {
      const DECL = `void r5ts2258(std::forward_list<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2258 生成结果为空');
      const expectSnippet0 = 'export function r5ts2258(v: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2258 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2258 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2259
  * @tc.name : h2dts_gen_2259
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2259', () => {
    try {
      const DECL = `void r5ts2259(std::forward_list<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2259 生成结果为空');
      const expectSnippet0 = 'export function r5ts2259(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2259 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2259 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2260
  * @tc.name : h2dts_gen_2260
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2260', () => {
    try {
      const DECL = `void r5ts2260(std::forward_list<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2260 生成结果为空');
      const expectSnippet0 = 'export function r5ts2260(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2260 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2260 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2261
  * @tc.name : h2dts_gen_2261
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2261', () => {
    try {
      const DECL = `void r5ts2261(std::forward_list<char8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2261 生成结果为空');
      const expectSnippet0 = 'export function r5ts2261(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2261 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2261 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2262
  * @tc.name : h2dts_gen_2262
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::forward_list<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2262', () => {
    try {
      const DECL = `void r5ts2262(std::forward_list<char16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2262 生成结果为空');
      const expectSnippet0 = 'export function r5ts2262(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2262 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2262 执行异常: ${String(err)}`);
    }
  });
});
