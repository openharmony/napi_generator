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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part10.');
  /**
  * @tc.number : h2dts_gen_0291
  * @tc.name : h2dts_gen_0291
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::array<char32_t, 10>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0291', () => {
    try {
      const DECL = `void genType291(std::array<char32_t, 10>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0291 生成结果为空');
      const expectSnippet0 = 'export function genType291(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0291 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0291 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0291 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0292
  * @tc.name : h2dts_gen_0292
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0292', () => {
    try {
      const DECL = `void genType292(std::deque<int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0292 生成结果为空');
      const expectSnippet0 = 'export function genType292(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0292 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0292 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0292 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0293
  * @tc.name : h2dts_gen_0293
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0293', () => {
    try {
      const DECL = `void genType293(std::deque<size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0293 生成结果为空');
      const expectSnippet0 = 'export function genType293(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0293 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0293 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0293 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0294
  * @tc.name : h2dts_gen_0294
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0294', () => {
    try {
      const DECL = `void genType294(std::deque<double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0294 生成结果为空');
      const expectSnippet0 = 'export function genType294(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0294 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0294 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0294 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0295
  * @tc.name : h2dts_gen_0295
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0295', () => {
    try {
      const DECL = `void genType295(std::deque<float> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0295 生成结果为空');
      const expectSnippet0 = 'export function genType295(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0295 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0295 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0295 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0296
  * @tc.name : h2dts_gen_0296
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0296', () => {
    try {
      const DECL = `void genType296(std::deque<long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0296 生成结果为空');
      const expectSnippet0 = 'export function genType296(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0296 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0296 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0296 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0297
  * @tc.name : h2dts_gen_0297
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0297', () => {
    try {
      const DECL = `void genType297(std::deque<short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0297 生成结果为空');
      const expectSnippet0 = 'export function genType297(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0297 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0297 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0297 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0298
  * @tc.name : h2dts_gen_0298
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0298', () => {
    try {
      const DECL = `void genType298(std::deque<uint8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0298 生成结果为空');
      const expectSnippet0 = 'export function genType298(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0298 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0298 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0298 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0299
  * @tc.name : h2dts_gen_0299
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0299', () => {
    try {
      const DECL = `void genType299(std::deque<uint16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0299 生成结果为空');
      const expectSnippet0 = 'export function genType299(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0299 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0299 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0299 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0300
  * @tc.name : h2dts_gen_0300
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0300', () => {
    try {
      const DECL = `void genType300(std::deque<uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0300 生成结果为空');
      const expectSnippet0 = 'export function genType300(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0300 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0300 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0300 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0301
  * @tc.name : h2dts_gen_0301
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0301', () => {
    try {
      const DECL = `void genType301(std::deque<uint64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0301 生成结果为空');
      const expectSnippet0 = 'export function genType301(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0301 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0301 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0301 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0302
  * @tc.name : h2dts_gen_0302
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0302', () => {
    try {
      const DECL = `void genType302(std::deque<int8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0302 生成结果为空');
      const expectSnippet0 = 'export function genType302(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0302 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0302 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0302 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0303
  * @tc.name : h2dts_gen_0303
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0303', () => {
    try {
      const DECL = `void genType303(std::deque<int16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0303 生成结果为空');
      const expectSnippet0 = 'export function genType303(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0303 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0303 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0303 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0304
  * @tc.name : h2dts_gen_0304
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0304', () => {
    try {
      const DECL = `void genType304(std::deque<int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0304 生成结果为空');
      const expectSnippet0 = 'export function genType304(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0304 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0304 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0304 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0305
  * @tc.name : h2dts_gen_0305
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0305', () => {
    try {
      const DECL = `void genType305(std::deque<int64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0305 生成结果为空');
      const expectSnippet0 = 'export function genType305(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0305 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0305 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0305 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0306
  * @tc.name : h2dts_gen_0306
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0306', () => {
    try {
      const DECL = `void genType306(std::deque<unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0306 生成结果为空');
      const expectSnippet0 = 'export function genType306(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0306 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0306 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0306 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0307
  * @tc.name : h2dts_gen_0307
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0307', () => {
    try {
      const DECL = `void genType307(std::deque<bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0307 生成结果为空');
      const expectSnippet0 = 'export function genType307(v: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0307 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0307 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0307 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0308
  * @tc.name : h2dts_gen_0308
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0308', () => {
    try {
      const DECL = `void genType308(std::deque<char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0308 生成结果为空');
      const expectSnippet0 = 'export function genType308(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0308 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0308 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0308 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0309
  * @tc.name : h2dts_gen_0309
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0309', () => {
    try {
      const DECL = `void genType309(std::deque<wchar_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0309 生成结果为空');
      const expectSnippet0 = 'export function genType309(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0309 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0309 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0309 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0310
  * @tc.name : h2dts_gen_0310
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0310', () => {
    try {
      const DECL = `void genType310(std::deque<char8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0310 生成结果为空');
      const expectSnippet0 = 'export function genType310(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0310 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0310 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0310 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0311
  * @tc.name : h2dts_gen_0311
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0311', () => {
    try {
      const DECL = `void genType311(std::deque<char16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0311 生成结果为空');
      const expectSnippet0 = 'export function genType311(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0311 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0311 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0311 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0312
  * @tc.name : h2dts_gen_0312
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::deque<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0312', () => {
    try {
      const DECL = `void genType312(std::deque<char32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0312 生成结果为空');
      const expectSnippet0 = 'export function genType312(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0312 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0312 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0312 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0313
  * @tc.name : h2dts_gen_0313
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0313', () => {
    try {
      const DECL = `void genType313(std::deque<int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0313 生成结果为空');
      const expectSnippet0 = 'export function genType313(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0313 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0313 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0313 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0314
  * @tc.name : h2dts_gen_0314
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0314', () => {
    try {
      const DECL = `void genType314(std::deque<size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0314 生成结果为空');
      const expectSnippet0 = 'export function genType314(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0314 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0314 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0314 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0315
  * @tc.name : h2dts_gen_0315
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0315', () => {
    try {
      const DECL = `void genType315(std::deque<double>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0315 生成结果为空');
      const expectSnippet0 = 'export function genType315(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0315 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0315 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0315 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0316
  * @tc.name : h2dts_gen_0316
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0316', () => {
    try {
      const DECL = `void genType316(std::deque<float>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0316 生成结果为空');
      const expectSnippet0 = 'export function genType316(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0316 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0316 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0316 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0317
  * @tc.name : h2dts_gen_0317
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0317', () => {
    try {
      const DECL = `void genType317(std::deque<long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0317 生成结果为空');
      const expectSnippet0 = 'export function genType317(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0317 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0317 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0317 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0318
  * @tc.name : h2dts_gen_0318
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0318', () => {
    try {
      const DECL = `void genType318(std::deque<short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0318 生成结果为空');
      const expectSnippet0 = 'export function genType318(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0318 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0318 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0318 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0319
  * @tc.name : h2dts_gen_0319
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0319', () => {
    try {
      const DECL = `void genType319(std::deque<uint8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0319 生成结果为空');
      const expectSnippet0 = 'export function genType319(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0319 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0319 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0319 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0320
  * @tc.name : h2dts_gen_0320
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0320', () => {
    try {
      const DECL = `void genType320(std::deque<uint16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0320 生成结果为空');
      const expectSnippet0 = 'export function genType320(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0320 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0320 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0320 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0321
  * @tc.name : h2dts_gen_0321
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0321', () => {
    try {
      const DECL = `void genType321(std::deque<uint32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0321 生成结果为空');
      const expectSnippet0 = 'export function genType321(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0321 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0321 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0321 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0322
  * @tc.name : h2dts_gen_0322
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0322', () => {
    try {
      const DECL = `void genType322(std::deque<uint64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0322 生成结果为空');
      const expectSnippet0 = 'export function genType322(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0322 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0322 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0322 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0323
  * @tc.name : h2dts_gen_0323
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0323', () => {
    try {
      const DECL = `void genType323(std::deque<int8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0323 生成结果为空');
      const expectSnippet0 = 'export function genType323(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0323 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0323 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0323 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0324
  * @tc.name : h2dts_gen_0324
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0324', () => {
    try {
      const DECL = `void genType324(std::deque<int16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0324 生成结果为空');
      const expectSnippet0 = 'export function genType324(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0324 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0324 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0324 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0325
  * @tc.name : h2dts_gen_0325
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::deque<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0325', () => {
    try {
      const DECL = `void genType325(std::deque<int32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0325 生成结果为空');
      const expectSnippet0 = 'export function genType325(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0325 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0325 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0325 执行异常: ${String(err)}`);
    }
  });
});
