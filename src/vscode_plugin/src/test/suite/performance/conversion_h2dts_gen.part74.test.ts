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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part74.');
  /**
  * @tc.number : h2dts_gen_2438
  * @tc.name : h2dts_gen_2438
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<uint8_t>::iterator` → `IterableIterator<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2438', () => {
    try {
      const DECL = `void r5ts2438(std::priority_queue<uint8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2438 生成结果为空');
      const expectSnippet0 = 'export function r5ts2438(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2438 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2438 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2438 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2439
  * @tc.name : h2dts_gen_2439
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<uint16_t>::iterator` → `IterableIterator<nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2439', () => {
    try {
      const DECL = `void r5ts2439(std::priority_queue<uint16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2439 生成结果为空');
      const expectSnippet0 = 'export function r5ts2439(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2439 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2439 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2439 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2440
  * @tc.name : h2dts_gen_2440
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<uint32_t>::iterator` → `IterableIterator<nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2440', () => {
    try {
      const DECL = `void r5ts2440(std::priority_queue<uint32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2440 生成结果为空');
      const expectSnippet0 = 'export function r5ts2440(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2440 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2440 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2440 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2441
  * @tc.name : h2dts_gen_2441
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<uint64_t>::iterator` → `IterableIterator<nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2441', () => {
    try {
      const DECL = `void r5ts2441(std::priority_queue<uint64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2441 生成结果为空');
      const expectSnippet0 = 'export function r5ts2441(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2441 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2441 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2441 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2442
  * @tc.name : h2dts_gen_2442
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<int8_t>::iterator` → `IterableIterator<numb...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2442', () => {
    try {
      const DECL = `void r5ts2442(std::priority_queue<int8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2442 生成结果为空');
      const expectSnippet0 = 'export function r5ts2442(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2442 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2442 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2442 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2443
  * @tc.name : h2dts_gen_2443
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<int16_t>::iterator` → `IterableIterator<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2443', () => {
    try {
      const DECL = `void r5ts2443(std::priority_queue<int16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2443 生成结果为空');
      const expectSnippet0 = 'export function r5ts2443(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2443 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2443 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2443 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2444
  * @tc.name : h2dts_gen_2444
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<int32_t>::iterator` → `IterableIterator<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2444', () => {
    try {
      const DECL = `void r5ts2444(std::priority_queue<int32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2444 生成结果为空');
      const expectSnippet0 = 'export function r5ts2444(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2444 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2444 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2444 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2445
  * @tc.name : h2dts_gen_2445
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<int64_t>::iterator` → `IterableIterator<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2445', () => {
    try {
      const DECL = `void r5ts2445(std::priority_queue<int64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2445 生成结果为空');
      const expectSnippet0 = 'export function r5ts2445(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2445 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2445 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2445 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2446
  * @tc.name : h2dts_gen_2446
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<unsigned>::iterator` → `IterableIterator<nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2446', () => {
    try {
      const DECL = `void r5ts2446(std::priority_queue<unsigned>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2446 生成结果为空');
      const expectSnippet0 = 'export function r5ts2446(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2446 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2446 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2446 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2447
  * @tc.name : h2dts_gen_2447
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<bool>::iterator` → `IterableIterator<boolea...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2447', () => {
    try {
      const DECL = `void r5ts2447(std::priority_queue<bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2447 生成结果为空');
      const expectSnippet0 = 'export function r5ts2447(v: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2447 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2447 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2447 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2448
  * @tc.name : h2dts_gen_2448
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<char>::iterator` → `IterableIterator<string...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2448', () => {
    try {
      const DECL = `void r5ts2448(std::priority_queue<char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2448 生成结果为空');
      const expectSnippet0 = 'export function r5ts2448(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2448 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2448 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2448 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2449
  * @tc.name : h2dts_gen_2449
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<wchar_t>::iterator` → `IterableIterator<str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2449', () => {
    try {
      const DECL = `void r5ts2449(std::priority_queue<wchar_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2449 生成结果为空');
      const expectSnippet0 = 'export function r5ts2449(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2449 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2449 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2449 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2450
  * @tc.name : h2dts_gen_2450
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<char8_t>::iterator` → `IterableIterator<str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2450', () => {
    try {
      const DECL = `void r5ts2450(std::priority_queue<char8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2450 生成结果为空');
      const expectSnippet0 = 'export function r5ts2450(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2450 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2450 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2450 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2451
  * @tc.name : h2dts_gen_2451
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<char16_t>::iterator` → `IterableIterator<st...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2451', () => {
    try {
      const DECL = `void r5ts2451(std::priority_queue<char16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2451 生成结果为空');
      const expectSnippet0 = 'export function r5ts2451(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2451 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2451 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2451 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2452
  * @tc.name : h2dts_gen_2452
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<char32_t>::iterator` → `IterableIterator<st...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2452', () => {
    try {
      const DECL = `void r5ts2452(std::priority_queue<char32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2452 生成结果为空');
      const expectSnippet0 = 'export function r5ts2452(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2452 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2452 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2452 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2453
  * @tc.name : h2dts_gen_2453
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<int, int>` → `Map<number, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2453', () => {
    try {
      const DECL = `void r5ts2453(std::map<int, int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2453 生成结果为空');
      const expectSnippet0 = 'export function r5ts2453(v: Map<number, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2453 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2453 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2453 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2454
  * @tc.name : h2dts_gen_2454
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char, int>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2454', () => {
    try {
      const DECL = `void r5ts2454(std::map<char, int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2454 生成结果为空');
      const expectSnippet0 = 'export function r5ts2454(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2454 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2454 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2454 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2455
  * @tc.name : h2dts_gen_2455
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2455', () => {
    try {
      const DECL = `void r5ts2455(std::map<char, size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2455 生成结果为空');
      const expectSnippet0 = 'export function r5ts2455(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2455 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2455 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2455 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2456
  * @tc.name : h2dts_gen_2456
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char, unsigned>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2456', () => {
    try {
      const DECL = `void r5ts2456(std::map<char, unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2456 生成结果为空');
      const expectSnippet0 = 'export function r5ts2456(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2456 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2456 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2456 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2457
  * @tc.name : h2dts_gen_2457
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char, double>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2457', () => {
    try {
      const DECL = `void r5ts2457(std::map<char, double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2457 生成结果为空');
      const expectSnippet0 = 'export function r5ts2457(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2457 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2457 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2457 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2458
  * @tc.name : h2dts_gen_2458
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char, float>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2458', () => {
    try {
      const DECL = `void r5ts2458(std::map<char, float> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2458 生成结果为空');
      const expectSnippet0 = 'export function r5ts2458(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2458 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2458 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2458 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2459
  * @tc.name : h2dts_gen_2459
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char16_t, int32_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2459', () => {
    try {
      const DECL = `void r5ts2459(std::map<char16_t, int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2459 生成结果为空');
      const expectSnippet0 = 'export function r5ts2459(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2459 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2459 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2459 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2460
  * @tc.name : h2dts_gen_2460
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char32_t, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2460', () => {
    try {
      const DECL = `void r5ts2460(std::map<char32_t, size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2460 生成结果为空');
      const expectSnippet0 = 'export function r5ts2460(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2460 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2460 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2460 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2461
  * @tc.name : h2dts_gen_2461
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char8_t, uint32_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2461', () => {
    try {
      const DECL = `void r5ts2461(std::map<char8_t, uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2461 生成结果为空');
      const expectSnippet0 = 'export function r5ts2461(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2461 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2461 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2461 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2462
  * @tc.name : h2dts_gen_2462
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char32_t, int8_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2462', () => {
    try {
      const DECL = `void r5ts2462(std::map<char32_t, int8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2462 生成结果为空');
      const expectSnippet0 = 'export function r5ts2462(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2462 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2462 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2462 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2463
  * @tc.name : h2dts_gen_2463
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<wchar_t, uint16_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2463', () => {
    try {
      const DECL = `void r5ts2463(std::map<wchar_t, uint16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2463 生成结果为空');
      const expectSnippet0 = 'export function r5ts2463(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2463 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2463 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2463 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2464
  * @tc.name : h2dts_gen_2464
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<int, bool>` → `Map<number, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2464', () => {
    try {
      const DECL = `void r5ts2464(std::map<int, bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2464 生成结果为空');
      const expectSnippet0 = 'export function r5ts2464(v: Map<number, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2464 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2464 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2464 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2465
  * @tc.name : h2dts_gen_2465
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<char, bool>` → `Map<string, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2465', () => {
    try {
      const DECL = `void r5ts2465(std::map<char, bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2465 生成结果为空');
      const expectSnippet0 = 'export function r5ts2465(v: Map<string, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2465 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2465 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2465 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2466
  * @tc.name : h2dts_gen_2466
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<int, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2466', () => {
    try {
      const DECL = `void r5ts2466(std::map<int, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2466 生成结果为空');
      const expectSnippet0 = 'export function r5ts2466(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2466 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2466 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2466 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2467
  * @tc.name : h2dts_gen_2467
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<size_t, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2467', () => {
    try {
      const DECL = `void r5ts2467(std::map<size_t, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2467 生成结果为空');
      const expectSnippet0 = 'export function r5ts2467(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2467 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2467 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2467 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2468
  * @tc.name : h2dts_gen_2468
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::map<unsigned, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2468', () => {
    try {
      const DECL = `void r5ts2468(std::map<unsigned, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2468 生成结果为空');
      const expectSnippet0 = 'export function r5ts2468(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2468 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2468 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2468 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2469
  * @tc.name : h2dts_gen_2469
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<int, int>::iterator` → `IterableIterator<Map<number, n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2469', () => {
    try {
      const DECL = `void r5ts2469(std::map<int, int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2469 生成结果为空');
      const expectSnippet0 = 'export function r5ts2469(v: IterableIterator<Map<number, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2469 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2469 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2469 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2470
  * @tc.name : h2dts_gen_2470
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char, int>::iterator` → `IterableIterator<Map<string, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2470', () => {
    try {
      const DECL = `void r5ts2470(std::map<char, int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2470 生成结果为空');
      const expectSnippet0 = 'export function r5ts2470(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2470 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2470 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2470 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2471
  * @tc.name : h2dts_gen_2471
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char, size_t>::iterator` → `IterableIterator<Map<strin...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2471', () => {
    try {
      const DECL = `void r5ts2471(std::map<char, size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2471 生成结果为空');
      const expectSnippet0 = 'export function r5ts2471(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2471 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2471 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2471 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2472
  * @tc.name : h2dts_gen_2472
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::map<char, unsigned>::iterator` → `IterableIterator<Map<str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2472', () => {
    try {
      const DECL = `void r5ts2472(std::map<char, unsigned>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2472 生成结果为空');
      const expectSnippet0 = 'export function r5ts2472(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2472 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2472 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2472 执行异常: ${String(err)}`);
    }
  });
});
