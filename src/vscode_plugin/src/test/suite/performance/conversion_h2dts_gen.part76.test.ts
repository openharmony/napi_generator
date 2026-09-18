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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part76.');

  /**
  * @tc.number : h2dts_gen_2508
  * @tc.name : h2dts_gen_2508
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char32_t, size_t>::iterator` → `IterableIter...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2508', () => {
    try {
      const DECL = `void r5ts2508(std::unordered_map<char32_t, size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2508 生成结果为空');
      const expectSnippet0 = 'export function r5ts2508(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2508 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2508 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2508 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2509
  * @tc.name : h2dts_gen_2509
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char8_t, uint32_t>::iterator` → `IterableIte...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2509', () => {
    try {
      const DECL = `void r5ts2509(std::unordered_map<char8_t, uint32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2509 生成结果为空');
      const expectSnippet0 = 'export function r5ts2509(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2509 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2509 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2509 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2510
  * @tc.name : h2dts_gen_2510
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char32_t, int8_t>::iterator` → `IterableIter...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2510', () => {
    try {
      const DECL = `void r5ts2510(std::unordered_map<char32_t, int8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2510 生成结果为空');
      const expectSnippet0 = 'export function r5ts2510(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2510 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2510 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2510 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2511
  * @tc.name : h2dts_gen_2511
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<wchar_t, uint16_t>::iterator` → `IterableIte...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2511', () => {
    try {
      const DECL = `void r5ts2511(std::unordered_map<wchar_t, uint16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2511 生成结果为空');
      const expectSnippet0 = 'export function r5ts2511(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2511 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2511 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2511 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2512
  * @tc.name : h2dts_gen_2512
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<int, bool>::iterator` → `IterableIterator<Ma...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2512', () => {
    try {
      const DECL = `void r5ts2512(std::unordered_map<int, bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2512 生成结果为空');
      const expectSnippet0 = 'export function r5ts2512(v: IterableIterator<Map<number, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2512 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2512 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2512 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2513
  * @tc.name : h2dts_gen_2513
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char, bool>::iterator` → `IterableIterator<M...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2513', () => {
    try {
      const DECL = `void r5ts2513(std::unordered_map<char, bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2513 生成结果为空');
      const expectSnippet0 = 'export function r5ts2513(v: IterableIterator<Map<string, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2513 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2513 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2513 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2514
  * @tc.name : h2dts_gen_2514
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<int, char>::iterator` → `IterableIterator<Ma...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2514', () => {
    try {
      const DECL = `void r5ts2514(std::unordered_map<int, char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2514 生成结果为空');
      const expectSnippet0 = 'export function r5ts2514(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2514 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2514 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2514 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2515
  * @tc.name : h2dts_gen_2515
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<size_t, char>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2515', () => {
    try {
      const DECL = `void r5ts2515(std::unordered_map<size_t, char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2515 生成结果为空');
      const expectSnippet0 = 'export function r5ts2515(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2515 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2515 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2515 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2516
  * @tc.name : h2dts_gen_2516
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<unsigned, char>::iterator` → `IterableIterat...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2516', () => {
    try {
      const DECL = `void r5ts2516(std::unordered_map<unsigned, char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2516 生成结果为空');
      const expectSnippet0 = 'export function r5ts2516(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2516 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2516 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2516 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2517
  * @tc.name : h2dts_gen_2517
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<int, int>` → `Map<number, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2517', () => {
    try {
      const DECL = `void r5ts2517(std::multimap<int, int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2517 生成结果为空');
      const expectSnippet0 = 'export function r5ts2517(v: Map<number, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2517 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2517 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2517 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2518
  * @tc.name : h2dts_gen_2518
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char, int>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2518', () => {
    try {
      const DECL = `void r5ts2518(std::multimap<char, int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2518 生成结果为空');
      const expectSnippet0 = 'export function r5ts2518(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2518 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2518 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2518 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2519
  * @tc.name : h2dts_gen_2519
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2519', () => {
    try {
      const DECL = `void r5ts2519(std::multimap<char, size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2519 生成结果为空');
      const expectSnippet0 = 'export function r5ts2519(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2519 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2519 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2519 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2520
  * @tc.name : h2dts_gen_2520
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char, unsigned>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2520', () => {
    try {
      const DECL = `void r5ts2520(std::multimap<char, unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2520 生成结果为空');
      const expectSnippet0 = 'export function r5ts2520(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2520 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2520 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2520 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2521
  * @tc.name : h2dts_gen_2521
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char, double>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2521', () => {
    try {
      const DECL = `void r5ts2521(std::multimap<char, double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2521 生成结果为空');
      const expectSnippet0 = 'export function r5ts2521(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2521 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2521 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2521 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2522
  * @tc.name : h2dts_gen_2522
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char, float>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2522', () => {
    try {
      const DECL = `void r5ts2522(std::multimap<char, float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2522 生成结果为空');
      const expectSnippet0 = 'export function r5ts2522(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2522 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2522 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2522 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2523
  * @tc.name : h2dts_gen_2523
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char16_t, int32_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2523', () => {
    try {
      const DECL = `void r5ts2523(std::multimap<char16_t, int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2523 生成结果为空');
      const expectSnippet0 = 'export function r5ts2523(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2523 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2523 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2523 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2524
  * @tc.name : h2dts_gen_2524
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char32_t, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2524', () => {
    try {
      const DECL = `void r5ts2524(std::multimap<char32_t, size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2524 生成结果为空');
      const expectSnippet0 = 'export function r5ts2524(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2524 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2524 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2524 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2525
  * @tc.name : h2dts_gen_2525
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char8_t, uint32_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2525', () => {
    try {
      const DECL = `void r5ts2525(std::multimap<char8_t, uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2525 生成结果为空');
      const expectSnippet0 = 'export function r5ts2525(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2525 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2525 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2525 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2526
  * @tc.name : h2dts_gen_2526
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char32_t, int8_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2526', () => {
    try {
      const DECL = `void r5ts2526(std::multimap<char32_t, int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2526 生成结果为空');
      const expectSnippet0 = 'export function r5ts2526(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2526 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2526 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2527
  * @tc.name : h2dts_gen_2527
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<wchar_t, uint16_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2527', () => {
    try {
      const DECL = `void r5ts2527(std::multimap<wchar_t, uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2527 生成结果为空');
      const expectSnippet0 = 'export function r5ts2527(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2527 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2527 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2528
  * @tc.name : h2dts_gen_2528
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<int, bool>` → `Map<number, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2528', () => {
    try {
      const DECL = `void r5ts2528(std::multimap<int, bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2528 生成结果为空');
      const expectSnippet0 = 'export function r5ts2528(v: Map<number, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2528 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2528 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2529
  * @tc.name : h2dts_gen_2529
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char, bool>` → `Map<string, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2529', () => {
    try {
      const DECL = `void r5ts2529(std::multimap<char, bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2529 生成结果为空');
      const expectSnippet0 = 'export function r5ts2529(v: Map<string, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2529 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2529 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2529 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2530
  * @tc.name : h2dts_gen_2530
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<int, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2530', () => {
    try {
      const DECL = `void r5ts2530(std::multimap<int, char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2530 生成结果为空');
      const expectSnippet0 = 'export function r5ts2530(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2530 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2530 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2531
  * @tc.name : h2dts_gen_2531
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<size_t, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2531', () => {
    try {
      const DECL = `void r5ts2531(std::multimap<size_t, char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2531 生成结果为空');
      const expectSnippet0 = 'export function r5ts2531(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2531 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2531 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2531 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2532
  * @tc.name : h2dts_gen_2532
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<unsigned, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2532', () => {
    try {
      const DECL = `void r5ts2532(std::multimap<unsigned, char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2532 生成结果为空');
      const expectSnippet0 = 'export function r5ts2532(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2532 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2532 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2533
  * @tc.name : h2dts_gen_2533
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<int, int>::iterator` → `IterableIterator<Map<numb...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2533', () => {
    try {
      const DECL = `void r5ts2533(std::multimap<int, int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2533 生成结果为空');
      const expectSnippet0 = 'export function r5ts2533(v: IterableIterator<Map<number, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2533 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2533 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2533 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2534
  * @tc.name : h2dts_gen_2534
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char, int>::iterator` → `IterableIterator<Map<str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2534', () => {
    try {
      const DECL = `void r5ts2534(std::multimap<char, int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2534 生成结果为空');
      const expectSnippet0 = 'export function r5ts2534(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2534 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2534 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2534 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2535
  * @tc.name : h2dts_gen_2535
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char, size_t>::iterator` → `IterableIterator<Map<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2535', () => {
    try {
      const DECL = `void r5ts2535(std::multimap<char, size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2535 生成结果为空');
      const expectSnippet0 = 'export function r5ts2535(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2535 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2535 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2536
  * @tc.name : h2dts_gen_2536
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char, unsigned>::iterator` → `IterableIterator<Ma...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2536', () => {
    try {
      const DECL = `void r5ts2536(std::multimap<char, unsigned>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2536 生成结果为空');
      const expectSnippet0 = 'export function r5ts2536(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2536 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2536 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2537
  * @tc.name : h2dts_gen_2537
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char, double>::iterator` → `IterableIterator<Map<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2537', () => {
    try {
      const DECL = `void r5ts2537(std::multimap<char, double>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2537 生成结果为空');
      const expectSnippet0 = 'export function r5ts2537(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2537 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2537 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2538
  * @tc.name : h2dts_gen_2538
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char, float>::iterator` → `IterableIterator<Map<s...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2538', () => {
    try {
      const DECL = `void r5ts2538(std::multimap<char, float>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2538 生成结果为空');
      const expectSnippet0 = 'export function r5ts2538(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2538 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2538 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2539
  * @tc.name : h2dts_gen_2539
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char16_t, int32_t>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2539', () => {
    try {
      const DECL = `void r5ts2539(std::multimap<char16_t, int32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2539 生成结果为空');
      const expectSnippet0 = 'export function r5ts2539(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2539 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2539 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2540
  * @tc.name : h2dts_gen_2540
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char32_t, size_t>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2540', () => {
    try {
      const DECL = `void r5ts2540(std::multimap<char32_t, size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2540 生成结果为空');
      const expectSnippet0 = 'export function r5ts2540(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2540 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2540 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2541
  * @tc.name : h2dts_gen_2541
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char8_t, uint32_t>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2541', () => {
    try {
      const DECL = `void r5ts2541(std::multimap<char8_t, uint32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2541 生成结果为空');
      const expectSnippet0 = 'export function r5ts2541(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2541 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2541 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2542
  * @tc.name : h2dts_gen_2542
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char32_t, int8_t>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2542', () => {
    try {
      const DECL = `void r5ts2542(std::multimap<char32_t, int8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2542 生成结果为空');
      const expectSnippet0 = 'export function r5ts2542(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2542 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2542 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2542 执行异常: ${String(err)}`);
    }
  });
});
