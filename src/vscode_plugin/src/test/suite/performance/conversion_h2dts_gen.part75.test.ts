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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part75.');

  /**
  * @tc.number : h2dts_gen_2473
  * @tc.name : h2dts_gen_2473
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char, double>::iterator` → `IterableIterator<Map<strin...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2473', () => {
    try {
      const DECL = `void r5ts2473(std::map<char, double>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2473 生成结果为空');
      const expectSnippet0 = 'export function r5ts2473(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2473 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2473 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2474
  * @tc.name : h2dts_gen_2474
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char, float>::iterator` → `IterableIterator<Map<string...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2474', () => {
    try {
      const DECL = `void r5ts2474(std::map<char, float>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2474 生成结果为空');
      const expectSnippet0 = 'export function r5ts2474(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2474 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2474 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2475
  * @tc.name : h2dts_gen_2475
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char16_t, int32_t>::iterator` → `IterableIterator<Map<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2475', () => {
    try {
      const DECL = `void r5ts2475(std::map<char16_t, int32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2475 生成结果为空');
      const expectSnippet0 = 'export function r5ts2475(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2475 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2475 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2476
  * @tc.name : h2dts_gen_2476
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char32_t, size_t>::iterator` → `IterableIterator<Map<s...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2476', () => {
    try {
      const DECL = `void r5ts2476(std::map<char32_t, size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2476 生成结果为空');
      const expectSnippet0 = 'export function r5ts2476(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2476 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2476 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2476 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2477
  * @tc.name : h2dts_gen_2477
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char8_t, uint32_t>::iterator` → `IterableIterator<Map<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2477', () => {
    try {
      const DECL = `void r5ts2477(std::map<char8_t, uint32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2477 生成结果为空');
      const expectSnippet0 = 'export function r5ts2477(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2477 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2477 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2478
  * @tc.name : h2dts_gen_2478
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char32_t, int8_t>::iterator` → `IterableIterator<Map<s...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2478', () => {
    try {
      const DECL = `void r5ts2478(std::map<char32_t, int8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2478 生成结果为空');
      const expectSnippet0 = 'export function r5ts2478(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2478 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2478 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2478 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2479
  * @tc.name : h2dts_gen_2479
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<wchar_t, uint16_t>::iterator` → `IterableIterator<Map<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2479', () => {
    try {
      const DECL = `void r5ts2479(std::map<wchar_t, uint16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2479 生成结果为空');
      const expectSnippet0 = 'export function r5ts2479(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2479 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2479 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2479 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2480
  * @tc.name : h2dts_gen_2480
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<int, bool>::iterator` → `IterableIterator<Map<number, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2480', () => {
    try {
      const DECL = `void r5ts2480(std::map<int, bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2480 生成结果为空');
      const expectSnippet0 = 'export function r5ts2480(v: IterableIterator<Map<number, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2480 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2480 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2480 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2481
  * @tc.name : h2dts_gen_2481
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char, bool>::iterator` → `IterableIterator<Map<string,...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2481', () => {
    try {
      const DECL = `void r5ts2481(std::map<char, bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2481 生成结果为空');
      const expectSnippet0 = 'export function r5ts2481(v: IterableIterator<Map<string, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2481 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2481 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2481 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2482
  * @tc.name : h2dts_gen_2482
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<int, char>::iterator` → `IterableIterator<Map<number, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2482', () => {
    try {
      const DECL = `void r5ts2482(std::map<int, char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2482 生成结果为空');
      const expectSnippet0 = 'export function r5ts2482(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2482 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2482 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2482 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2483
  * @tc.name : h2dts_gen_2483
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<size_t, char>::iterator` → `IterableIterator<Map<numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2483', () => {
    try {
      const DECL = `void r5ts2483(std::map<size_t, char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2483 生成结果为空');
      const expectSnippet0 = 'export function r5ts2483(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2483 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2483 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2483 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2484
  * @tc.name : h2dts_gen_2484
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<unsigned, char>::iterator` → `IterableIterator<Map<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2484', () => {
    try {
      const DECL = `void r5ts2484(std::map<unsigned, char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2484 生成结果为空');
      const expectSnippet0 = 'export function r5ts2484(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2484 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2484 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2484 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2485
  * @tc.name : h2dts_gen_2485
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<int, int>` → `Map<number, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2485', () => {
    try {
      const DECL = `void r5ts2485(std::unordered_map<int, int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2485 生成结果为空');
      const expectSnippet0 = 'export function r5ts2485(v: Map<number, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2485 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2485 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2485 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2486
  * @tc.name : h2dts_gen_2486
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char, int>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2486', () => {
    try {
      const DECL = `void r5ts2486(std::unordered_map<char, int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2486 生成结果为空');
      const expectSnippet0 = 'export function r5ts2486(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2486 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2486 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2486 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2487
  * @tc.name : h2dts_gen_2487
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2487', () => {
    try {
      const DECL = `void r5ts2487(std::unordered_map<char, size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2487 生成结果为空');
      const expectSnippet0 = 'export function r5ts2487(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2487 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2487 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2487 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2488
  * @tc.name : h2dts_gen_2488
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char, unsigned>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2488', () => {
    try {
      const DECL = `void r5ts2488(std::unordered_map<char, unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2488 生成结果为空');
      const expectSnippet0 = 'export function r5ts2488(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2488 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2488 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2488 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2489
  * @tc.name : h2dts_gen_2489
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char, double>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2489', () => {
    try {
      const DECL = `void r5ts2489(std::unordered_map<char, double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2489 生成结果为空');
      const expectSnippet0 = 'export function r5ts2489(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2489 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2489 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2489 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2490
  * @tc.name : h2dts_gen_2490
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char, float>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2490', () => {
    try {
      const DECL = `void r5ts2490(std::unordered_map<char, float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2490 生成结果为空');
      const expectSnippet0 = 'export function r5ts2490(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2490 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2490 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2490 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2491
  * @tc.name : h2dts_gen_2491
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char16_t, int32_t>` → `Map<string, number>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2491', () => {
    try {
      const DECL = `void r5ts2491(std::unordered_map<char16_t, int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2491 生成结果为空');
      const expectSnippet0 = 'export function r5ts2491(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2491 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2491 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2491 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2492
  * @tc.name : h2dts_gen_2492
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char32_t, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2492', () => {
    try {
      const DECL = `void r5ts2492(std::unordered_map<char32_t, size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2492 生成结果为空');
      const expectSnippet0 = 'export function r5ts2492(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2492 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2492 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2492 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2493
  * @tc.name : h2dts_gen_2493
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char8_t, uint32_t>` → `Map<string, number>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2493', () => {
    try {
      const DECL = `void r5ts2493(std::unordered_map<char8_t, uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2493 生成结果为空');
      const expectSnippet0 = 'export function r5ts2493(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2493 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2493 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2493 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2494
  * @tc.name : h2dts_gen_2494
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char32_t, int8_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2494', () => {
    try {
      const DECL = `void r5ts2494(std::unordered_map<char32_t, int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2494 生成结果为空');
      const expectSnippet0 = 'export function r5ts2494(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2494 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2494 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2494 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2495
  * @tc.name : h2dts_gen_2495
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<wchar_t, uint16_t>` → `Map<string, number>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2495', () => {
    try {
      const DECL = `void r5ts2495(std::unordered_map<wchar_t, uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2495 生成结果为空');
      const expectSnippet0 = 'export function r5ts2495(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2495 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2495 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2495 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2496
  * @tc.name : h2dts_gen_2496
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<int, bool>` → `Map<number, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2496', () => {
    try {
      const DECL = `void r5ts2496(std::unordered_map<int, bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2496 生成结果为空');
      const expectSnippet0 = 'export function r5ts2496(v: Map<number, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2496 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2496 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2496 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2497
  * @tc.name : h2dts_gen_2497
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char, bool>` → `Map<string, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2497', () => {
    try {
      const DECL = `void r5ts2497(std::unordered_map<char, bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2497 生成结果为空');
      const expectSnippet0 = 'export function r5ts2497(v: Map<string, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2497 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2497 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2497 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2498
  * @tc.name : h2dts_gen_2498
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<int, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2498', () => {
    try {
      const DECL = `void r5ts2498(std::unordered_map<int, char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2498 生成结果为空');
      const expectSnippet0 = 'export function r5ts2498(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2498 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2498 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2498 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2499
  * @tc.name : h2dts_gen_2499
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<size_t, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2499', () => {
    try {
      const DECL = `void r5ts2499(std::unordered_map<size_t, char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2499 生成结果为空');
      const expectSnippet0 = 'export function r5ts2499(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2499 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2499 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2499 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2500
  * @tc.name : h2dts_gen_2500
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<unsigned, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2500', () => {
    try {
      const DECL = `void r5ts2500(std::unordered_map<unsigned, char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2500 生成结果为空');
      const expectSnippet0 = 'export function r5ts2500(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2500 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2500 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2500 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2501
  * @tc.name : h2dts_gen_2501
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<int, int>::iterator` → `IterableIterator<Map...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2501', () => {
    try {
      const DECL = `void r5ts2501(std::unordered_map<int, int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2501 生成结果为空');
      const expectSnippet0 = 'export function r5ts2501(v: IterableIterator<Map<number, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2501 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2501 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2501 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2502
  * @tc.name : h2dts_gen_2502
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char, int>::iterator` → `IterableIterator<Ma...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2502', () => {
    try {
      const DECL = `void r5ts2502(std::unordered_map<char, int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2502 生成结果为空');
      const expectSnippet0 = 'export function r5ts2502(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2502 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2502 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2502 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2503
  * @tc.name : h2dts_gen_2503
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char, size_t>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2503', () => {
    try {
      const DECL = `void r5ts2503(std::unordered_map<char, size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2503 生成结果为空');
      const expectSnippet0 = 'export function r5ts2503(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2503 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2503 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2503 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2504
  * @tc.name : h2dts_gen_2504
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char, unsigned>::iterator` → `IterableIterat...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2504', () => {
    try {
      const DECL = `void r5ts2504(std::unordered_map<char, unsigned>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2504 生成结果为空');
      const expectSnippet0 = 'export function r5ts2504(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2504 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2504 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2504 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2505
  * @tc.name : h2dts_gen_2505
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char, double>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2505', () => {
    try {
      const DECL = `void r5ts2505(std::unordered_map<char, double>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2505 生成结果为空');
      const expectSnippet0 = 'export function r5ts2505(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2505 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2505 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2505 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2506
  * @tc.name : h2dts_gen_2506
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char, float>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2506', () => {
    try {
      const DECL = `void r5ts2506(std::unordered_map<char, float>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2506 生成结果为空');
      const expectSnippet0 = 'export function r5ts2506(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2506 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2506 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2506 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2507
  * @tc.name : h2dts_gen_2507
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char16_t, int32_t>::iterator` → `IterableIte...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2507', () => {
    try {
      const DECL = `void r5ts2507(std::unordered_map<char16_t, int32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2507 生成结果为空');
      const expectSnippet0 = 'export function r5ts2507(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2507 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2507 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2507 执行异常: ${String(err)}`);
    }
  });
});
