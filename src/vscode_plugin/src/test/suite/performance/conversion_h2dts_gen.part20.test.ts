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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part20.');

  /**
  * @tc.number : h2dts_gen_0641
  * @tc.name : h2dts_gen_0641
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_map<char32_t, size_t>::iterator` → `IterableIterator<Map<stri...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0641', () => {
    try {
      const DECL = `void genType641(std::unordered_map<char32_t, size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0641 生成结果为空');
      const expectSnippet0 = 'export function genType641(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0641 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0641 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0641 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0642
  * @tc.name : h2dts_gen_0642
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_map<char8_t, uint32_t>::iterator` → `IterableIterator<Map<str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0642', () => {
    try {
      const DECL = `void genType642(std::unordered_map<char8_t, uint32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0642 生成结果为空');
      const expectSnippet0 = 'export function genType642(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0642 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0642 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0642 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0643
  * @tc.name : h2dts_gen_0643
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_map<char32_t, int8_t>::iterator` → `IterableIterator<Map<stri...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0643', () => {
    try {
      const DECL = `void genType643(std::unordered_map<char32_t, int8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0643 生成结果为空');
      const expectSnippet0 = 'export function genType643(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0643 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0643 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0643 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0644
  * @tc.name : h2dts_gen_0644
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_map<wchar_t, uint16_t>::iterator` → `IterableIterator<Map<str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0644', () => {
    try {
      const DECL = `void genType644(std::unordered_map<wchar_t, uint16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0644 生成结果为空');
      const expectSnippet0 = 'export function genType644(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0644 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0644 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0644 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0645
  * @tc.name : h2dts_gen_0645
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_map<int, bool>::iterator` → `IterableIterator<Map<number, boo...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0645', () => {
    try {
      const DECL = `void genType645(std::unordered_map<int, bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0645 生成结果为空');
      const expectSnippet0 = 'export function genType645(v: IterableIterator<Map<number, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0645 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0645 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0645 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0646
  * @tc.name : h2dts_gen_0646
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_map<char, bool>::iterator` → `IterableIterator<Map<string, bo...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0646', () => {
    try {
      const DECL = `void genType646(std::unordered_map<char, bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0646 生成结果为空');
      const expectSnippet0 = 'export function genType646(v: IterableIterator<Map<string, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0646 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0646 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0646 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0647
  * @tc.name : h2dts_gen_0647
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_map<int, char>::iterator` → `IterableIterator<Map<number, str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0647', () => {
    try {
      const DECL = `void genType647(std::unordered_map<int, char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0647 生成结果为空');
      const expectSnippet0 = 'export function genType647(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0647 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0647 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0647 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0648
  * @tc.name : h2dts_gen_0648
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_map<size_t, char>::iterator` → `IterableIterator<Map<number, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0648', () => {
    try {
      const DECL = `void genType648(std::unordered_map<size_t, char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0648 生成结果为空');
      const expectSnippet0 = 'export function genType648(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0648 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0648 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0648 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0649
  * @tc.name : h2dts_gen_0649
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_map<unsigned, char>::iterator` → `IterableIterator<Map<number...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0649', () => {
    try {
      const DECL = `void genType649(std::unordered_map<unsigned, char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0649 生成结果为空');
      const expectSnippet0 = 'export function genType649(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0649 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0649 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0649 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0650
  * @tc.name : h2dts_gen_0650
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<int, int>` → `Map<number, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0650', () => {
    try {
      const DECL = `void genType650(std::multimap<int, int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0650 生成结果为空');
      const expectSnippet0 = 'export function genType650(v: Map<number, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0650 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0650 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0650 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0651
  * @tc.name : h2dts_gen_0651
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char, int>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0651', () => {
    try {
      const DECL = `void genType651(std::multimap<char, int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0651 生成结果为空');
      const expectSnippet0 = 'export function genType651(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0651 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0651 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0651 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0652
  * @tc.name : h2dts_gen_0652
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0652', () => {
    try {
      const DECL = `void genType652(std::multimap<char, size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0652 生成结果为空');
      const expectSnippet0 = 'export function genType652(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0652 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0652 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0652 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0653
  * @tc.name : h2dts_gen_0653
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char, unsigned>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0653', () => {
    try {
      const DECL = `void genType653(std::multimap<char, unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0653 生成结果为空');
      const expectSnippet0 = 'export function genType653(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0653 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0653 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0653 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0654
  * @tc.name : h2dts_gen_0654
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char, double>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0654', () => {
    try {
      const DECL = `void genType654(std::multimap<char, double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0654 生成结果为空');
      const expectSnippet0 = 'export function genType654(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0654 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0654 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0654 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0655
  * @tc.name : h2dts_gen_0655
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char, float>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0655', () => {
    try {
      const DECL = `void genType655(std::multimap<char, float> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0655 生成结果为空');
      const expectSnippet0 = 'export function genType655(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0655 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0655 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0655 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0656
  * @tc.name : h2dts_gen_0656
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char16_t, int32_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0656', () => {
    try {
      const DECL = `void genType656(std::multimap<char16_t, int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0656 生成结果为空');
      const expectSnippet0 = 'export function genType656(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0656 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0656 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0656 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0657
  * @tc.name : h2dts_gen_0657
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char32_t, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0657', () => {
    try {
      const DECL = `void genType657(std::multimap<char32_t, size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0657 生成结果为空');
      const expectSnippet0 = 'export function genType657(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0657 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0657 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0657 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0658
  * @tc.name : h2dts_gen_0658
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char8_t, uint32_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0658', () => {
    try {
      const DECL = `void genType658(std::multimap<char8_t, uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0658 生成结果为空');
      const expectSnippet0 = 'export function genType658(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0658 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0658 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0658 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0659
  * @tc.name : h2dts_gen_0659
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char32_t, int8_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0659', () => {
    try {
      const DECL = `void genType659(std::multimap<char32_t, int8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0659 生成结果为空');
      const expectSnippet0 = 'export function genType659(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0659 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0659 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0659 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0660
  * @tc.name : h2dts_gen_0660
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<wchar_t, uint16_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0660', () => {
    try {
      const DECL = `void genType660(std::multimap<wchar_t, uint16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0660 生成结果为空');
      const expectSnippet0 = 'export function genType660(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0660 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0660 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0660 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0661
  * @tc.name : h2dts_gen_0661
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<int, bool>` → `Map<number, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0661', () => {
    try {
      const DECL = `void genType661(std::multimap<int, bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0661 生成结果为空');
      const expectSnippet0 = 'export function genType661(v: Map<number, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0661 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0661 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0661 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0662
  * @tc.name : h2dts_gen_0662
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<char, bool>` → `Map<string, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0662', () => {
    try {
      const DECL = `void genType662(std::multimap<char, bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0662 生成结果为空');
      const expectSnippet0 = 'export function genType662(v: Map<string, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0662 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0662 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0662 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0663
  * @tc.name : h2dts_gen_0663
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<int, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0663', () => {
    try {
      const DECL = `void genType663(std::multimap<int, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0663 生成结果为空');
      const expectSnippet0 = 'export function genType663(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0663 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0663 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0663 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0664
  * @tc.name : h2dts_gen_0664
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<size_t, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0664', () => {
    try {
      const DECL = `void genType664(std::multimap<size_t, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0664 生成结果为空');
      const expectSnippet0 = 'export function genType664(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0664 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0664 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0664 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0665
  * @tc.name : h2dts_gen_0665
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multimap<unsigned, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0665', () => {
    try {
      const DECL = `void genType665(std::multimap<unsigned, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0665 生成结果为空');
      const expectSnippet0 = 'export function genType665(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0665 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0665 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0665 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0666
  * @tc.name : h2dts_gen_0666
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<int, int>::iterator` → `IterableIterator<Map<number, number>>`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0666', () => {
    try {
      const DECL = `void genType666(std::multimap<int, int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0666 生成结果为空');
      const expectSnippet0 = 'export function genType666(v: IterableIterator<Map<number, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0666 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0666 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0666 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0667
  * @tc.name : h2dts_gen_0667
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char, int>::iterator` → `IterableIterator<Map<string, number>>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0667', () => {
    try {
      const DECL = `void genType667(std::multimap<char, int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0667 生成结果为空');
      const expectSnippet0 = 'export function genType667(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0667 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0667 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0667 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0668
  * @tc.name : h2dts_gen_0668
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char, size_t>::iterator` → `IterableIterator<Map<string, numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0668', () => {
    try {
      const DECL = `void genType668(std::multimap<char, size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0668 生成结果为空');
      const expectSnippet0 = 'export function genType668(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0668 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0668 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0668 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0669
  * @tc.name : h2dts_gen_0669
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char, unsigned>::iterator` → `IterableIterator<Map<string, num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0669', () => {
    try {
      const DECL = `void genType669(std::multimap<char, unsigned>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0669 生成结果为空');
      const expectSnippet0 = 'export function genType669(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0669 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0669 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0669 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0670
  * @tc.name : h2dts_gen_0670
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char, double>::iterator` → `IterableIterator<Map<string, numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0670', () => {
    try {
      const DECL = `void genType670(std::multimap<char, double>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0670 生成结果为空');
      const expectSnippet0 = 'export function genType670(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0670 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0670 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0670 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0671
  * @tc.name : h2dts_gen_0671
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char, float>::iterator` → `IterableIterator<Map<string, number...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0671', () => {
    try {
      const DECL = `void genType671(std::multimap<char, float>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0671 生成结果为空');
      const expectSnippet0 = 'export function genType671(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0671 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0671 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0671 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0672
  * @tc.name : h2dts_gen_0672
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char16_t, int32_t>::iterator` → `IterableIterator<Map<string, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0672', () => {
    try {
      const DECL = `void genType672(std::multimap<char16_t, int32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0672 生成结果为空');
      const expectSnippet0 = 'export function genType672(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0672 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0672 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0672 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0673
  * @tc.name : h2dts_gen_0673
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char32_t, size_t>::iterator` → `IterableIterator<Map<string, n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0673', () => {
    try {
      const DECL = `void genType673(std::multimap<char32_t, size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0673 生成结果为空');
      const expectSnippet0 = 'export function genType673(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0673 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0673 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0673 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0674
  * @tc.name : h2dts_gen_0674
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char8_t, uint32_t>::iterator` → `IterableIterator<Map<string, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0674', () => {
    try {
      const DECL = `void genType674(std::multimap<char8_t, uint32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0674 生成结果为空');
      const expectSnippet0 = 'export function genType674(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0674 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0674 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0674 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0675
  * @tc.name : h2dts_gen_0675
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char32_t, int8_t>::iterator` → `IterableIterator<Map<string, n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0675', () => {
    try {
      const DECL = `void genType675(std::multimap<char32_t, int8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0675 生成结果为空');
      const expectSnippet0 = 'export function genType675(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0675 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0675 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0675 执行异常: ${String(err)}`);
    }
  });
});
