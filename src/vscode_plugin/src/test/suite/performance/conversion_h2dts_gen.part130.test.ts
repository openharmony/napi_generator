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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part130.');

  /**
  * @tc.number : h2dts_gen_4367
  * @tc.name : h2dts_gen_4367
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<long>::iterator` → `IterableIterator<Set<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4367', () => {
    try {
      const DECL = `void r5ts4367(std::unordered_set<long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4367 生成结果为空');
      const expectSnippet0 = 'export function r5ts4367(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4367 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4367 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4367 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4368
  * @tc.name : h2dts_gen_4368
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<short>::iterator` → `IterableIterator<Set<nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4368', () => {
    try {
      const DECL = `void r5ts4368(std::unordered_set<short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4368 生成结果为空');
      const expectSnippet0 = 'export function r5ts4368(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4368 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4368 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4368 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4369
  * @tc.name : h2dts_gen_4369
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<uint8_t>::iterator` → `IterableIterator<Set<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4369', () => {
    try {
      const DECL = `void r5ts4369(std::unordered_set<uint8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4369 生成结果为空');
      const expectSnippet0 = 'export function r5ts4369(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4369 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4369 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4369 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4370
  * @tc.name : h2dts_gen_4370
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<uint16_t>::iterator` → `IterableIterator<Set...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4370', () => {
    try {
      const DECL = `void r5ts4370(std::unordered_set<uint16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4370 生成结果为空');
      const expectSnippet0 = 'export function r5ts4370(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4370 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4370 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4371
  * @tc.name : h2dts_gen_4371
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<uint32_t>::iterator` → `IterableIterator<Set...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4371', () => {
    try {
      const DECL = `void r5ts4371(std::unordered_set<uint32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4371 生成结果为空');
      const expectSnippet0 = 'export function r5ts4371(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4371 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4371 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4372
  * @tc.name : h2dts_gen_4372
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<uint64_t>::iterator` → `IterableIterator<Set...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4372', () => {
    try {
      const DECL = `void r5ts4372(std::unordered_set<uint64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4372 生成结果为空');
      const expectSnippet0 = 'export function r5ts4372(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4372 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4372 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4373
  * @tc.name : h2dts_gen_4373
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<int8_t>::iterator` → `IterableIterator<Set<n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4373', () => {
    try {
      const DECL = `void r5ts4373(std::unordered_set<int8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4373 生成结果为空');
      const expectSnippet0 = 'export function r5ts4373(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4373 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4373 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4374
  * @tc.name : h2dts_gen_4374
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<int16_t>::iterator` → `IterableIterator<Set<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4374', () => {
    try {
      const DECL = `void r5ts4374(std::unordered_set<int16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4374 生成结果为空');
      const expectSnippet0 = 'export function r5ts4374(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4374 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4374 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4375
  * @tc.name : h2dts_gen_4375
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<int32_t>::iterator` → `IterableIterator<Set<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4375', () => {
    try {
      const DECL = `void r5ts4375(std::unordered_set<int32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4375 生成结果为空');
      const expectSnippet0 = 'export function r5ts4375(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4375 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4375 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4375 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4376
  * @tc.name : h2dts_gen_4376
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<int64_t>::iterator` → `IterableIterator<Set<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4376', () => {
    try {
      const DECL = `void r5ts4376(std::unordered_set<int64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4376 生成结果为空');
      const expectSnippet0 = 'export function r5ts4376(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4376 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4376 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4376 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4377
  * @tc.name : h2dts_gen_4377
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<unsigned>::iterator` → `IterableIterator<Set...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4377', () => {
    try {
      const DECL = `void r5ts4377(std::unordered_set<unsigned>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4377 生成结果为空');
      const expectSnippet0 = 'export function r5ts4377(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4377 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4377 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4377 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4378
  * @tc.name : h2dts_gen_4378
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<bool>::iterator` → `IterableIterator<Set<boo...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4378', () => {
    try {
      const DECL = `void r5ts4378(std::unordered_set<bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4378 生成结果为空');
      const expectSnippet0 = 'export function r5ts4378(v: IterableIterator<Set<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4378 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4378 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4378 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4379
  * @tc.name : h2dts_gen_4379
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<char>::iterator` → `IterableIterator<Set<str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4379', () => {
    try {
      const DECL = `void r5ts4379(std::unordered_set<char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4379 生成结果为空');
      const expectSnippet0 = 'export function r5ts4379(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4379 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4379 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4379 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4380
  * @tc.name : h2dts_gen_4380
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<wchar_t>::iterator` → `IterableIterator<Set<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4380', () => {
    try {
      const DECL = `void r5ts4380(std::unordered_set<wchar_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4380 生成结果为空');
      const expectSnippet0 = 'export function r5ts4380(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4380 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4380 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4380 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4381
  * @tc.name : h2dts_gen_4381
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<char8_t>::iterator` → `IterableIterator<Set<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4381', () => {
    try {
      const DECL = `void r5ts4381(std::unordered_set<char8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4381 生成结果为空');
      const expectSnippet0 = 'export function r5ts4381(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4381 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4381 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4381 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4382
  * @tc.name : h2dts_gen_4382
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<char16_t>::iterator` → `IterableIterator<Set...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4382', () => {
    try {
      const DECL = `void r5ts4382(std::unordered_set<char16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4382 生成结果为空');
      const expectSnippet0 = 'export function r5ts4382(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4382 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4382 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4382 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4383
  * @tc.name : h2dts_gen_4383
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<char32_t>::iterator` → `IterableIterator<Set...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4383', () => {
    try {
      const DECL = `void r5ts4383(std::unordered_set<char32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4383 生成结果为空');
      const expectSnippet0 = 'export function r5ts4383(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4383 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4383 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4383 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4384
  * @tc.name : h2dts_gen_4384
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<int>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4384', () => {
    try {
      const DECL = `void r5ts4384(std::multiset<int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4384 生成结果为空');
      const expectSnippet0 = 'export function r5ts4384(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4384 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4384 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4384 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4385
  * @tc.name : h2dts_gen_4385
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<size_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4385', () => {
    try {
      const DECL = `void r5ts4385(std::multiset<size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4385 生成结果为空');
      const expectSnippet0 = 'export function r5ts4385(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4385 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4385 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4385 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4386
  * @tc.name : h2dts_gen_4386
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<double>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4386', () => {
    try {
      const DECL = `void r5ts4386(std::multiset<double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4386 生成结果为空');
      const expectSnippet0 = 'export function r5ts4386(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4386 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4386 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4387
  * @tc.name : h2dts_gen_4387
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<float>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4387', () => {
    try {
      const DECL = `void r5ts4387(std::multiset<float> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4387 生成结果为空');
      const expectSnippet0 = 'export function r5ts4387(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4387 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4387 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4388
  * @tc.name : h2dts_gen_4388
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4388', () => {
    try {
      const DECL = `void r5ts4388(std::multiset<long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4388 生成结果为空');
      const expectSnippet0 = 'export function r5ts4388(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4388 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4388 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4389
  * @tc.name : h2dts_gen_4389
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<short>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4389', () => {
    try {
      const DECL = `void r5ts4389(std::multiset<short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4389 生成结果为空');
      const expectSnippet0 = 'export function r5ts4389(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4389 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4389 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4390
  * @tc.name : h2dts_gen_4390
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<uint8_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4390', () => {
    try {
      const DECL = `void r5ts4390(std::multiset<uint8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4390 生成结果为空');
      const expectSnippet0 = 'export function r5ts4390(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4390 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4390 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4391
  * @tc.name : h2dts_gen_4391
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<uint16_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4391', () => {
    try {
      const DECL = `void r5ts4391(std::multiset<uint16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4391 生成结果为空');
      const expectSnippet0 = 'export function r5ts4391(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4391 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4391 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4391 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4392
  * @tc.name : h2dts_gen_4392
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<uint32_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4392', () => {
    try {
      const DECL = `void r5ts4392(std::multiset<uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4392 生成结果为空');
      const expectSnippet0 = 'export function r5ts4392(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4392 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4392 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4393
  * @tc.name : h2dts_gen_4393
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<uint64_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4393', () => {
    try {
      const DECL = `void r5ts4393(std::multiset<uint64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4393 生成结果为空');
      const expectSnippet0 = 'export function r5ts4393(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4393 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4393 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4394
  * @tc.name : h2dts_gen_4394
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<int8_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4394', () => {
    try {
      const DECL = `void r5ts4394(std::multiset<int8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4394 生成结果为空');
      const expectSnippet0 = 'export function r5ts4394(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4394 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4394 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4395
  * @tc.name : h2dts_gen_4395
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<int16_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4395', () => {
    try {
      const DECL = `void r5ts4395(std::multiset<int16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4395 生成结果为空');
      const expectSnippet0 = 'export function r5ts4395(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4395 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4395 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4395 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4396
  * @tc.name : h2dts_gen_4396
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<int32_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4396', () => {
    try {
      const DECL = `void r5ts4396(std::multiset<int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4396 生成结果为空');
      const expectSnippet0 = 'export function r5ts4396(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4396 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4396 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4397
  * @tc.name : h2dts_gen_4397
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<int64_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4397', () => {
    try {
      const DECL = `void r5ts4397(std::multiset<int64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4397 生成结果为空');
      const expectSnippet0 = 'export function r5ts4397(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4397 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4397 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4398
  * @tc.name : h2dts_gen_4398
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<unsigned>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4398', () => {
    try {
      const DECL = `void r5ts4398(std::multiset<unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4398 生成结果为空');
      const expectSnippet0 = 'export function r5ts4398(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4398 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4398 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4399
  * @tc.name : h2dts_gen_4399
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<bool>` → `Set<boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4399', () => {
    try {
      const DECL = `void r5ts4399(std::multiset<bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4399 生成结果为空');
      const expectSnippet0 = 'export function r5ts4399(v: Set<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4399 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4399 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4400
  * @tc.name : h2dts_gen_4400
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<char>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4400', () => {
    try {
      const DECL = `void r5ts4400(std::multiset<char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4400 生成结果为空');
      const expectSnippet0 = 'export function r5ts4400(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4400 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4400 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4401
  * @tc.name : h2dts_gen_4401
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<wchar_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4401', () => {
    try {
      const DECL = `void r5ts4401(std::multiset<wchar_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4401 生成结果为空');
      const expectSnippet0 = 'export function r5ts4401(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4401 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4401 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4401 执行异常: ${String(err)}`);
    }
  });
});
