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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part16.');
  /**
  * @tc.number : h2dts_gen_0501
  * @tc.name : h2dts_gen_0501
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::queue<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0501', () => {
    try {
      const DECL = `void genType501(std::queue<char32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0501 生成结果为空');
      const expectSnippet0 = 'export function genType501(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0501 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0501 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0501 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0502
  * @tc.name : h2dts_gen_0502
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0502', () => {
    try {
      const DECL = `void genType502(std::valarray<int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0502 生成结果为空');
      const expectSnippet0 = 'export function genType502(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0502 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0502 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0502 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0503
  * @tc.name : h2dts_gen_0503
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0503', () => {
    try {
      const DECL = `void genType503(std::valarray<size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0503 生成结果为空');
      const expectSnippet0 = 'export function genType503(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0503 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0503 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0503 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0504
  * @tc.name : h2dts_gen_0504
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0504', () => {
    try {
      const DECL = `void genType504(std::valarray<double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0504 生成结果为空');
      const expectSnippet0 = 'export function genType504(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0504 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0504 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0504 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0505
  * @tc.name : h2dts_gen_0505
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0505', () => {
    try {
      const DECL = `void genType505(std::valarray<float> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0505 生成结果为空');
      const expectSnippet0 = 'export function genType505(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0505 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0505 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0505 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0506
  * @tc.name : h2dts_gen_0506
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0506', () => {
    try {
      const DECL = `void genType506(std::valarray<long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0506 生成结果为空');
      const expectSnippet0 = 'export function genType506(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0506 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0506 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0506 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0507
  * @tc.name : h2dts_gen_0507
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0507', () => {
    try {
      const DECL = `void genType507(std::valarray<short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0507 生成结果为空');
      const expectSnippet0 = 'export function genType507(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0507 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0507 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0507 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0508
  * @tc.name : h2dts_gen_0508
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0508', () => {
    try {
      const DECL = `void genType508(std::valarray<uint8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0508 生成结果为空');
      const expectSnippet0 = 'export function genType508(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0508 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0508 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0508 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0509
  * @tc.name : h2dts_gen_0509
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0509', () => {
    try {
      const DECL = `void genType509(std::valarray<uint16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0509 生成结果为空');
      const expectSnippet0 = 'export function genType509(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0509 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0509 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0509 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0510
  * @tc.name : h2dts_gen_0510
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0510', () => {
    try {
      const DECL = `void genType510(std::valarray<uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0510 生成结果为空');
      const expectSnippet0 = 'export function genType510(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0510 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0510 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0510 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0511
  * @tc.name : h2dts_gen_0511
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0511', () => {
    try {
      const DECL = `void genType511(std::valarray<uint64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0511 生成结果为空');
      const expectSnippet0 = 'export function genType511(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0511 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0511 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0511 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0512
  * @tc.name : h2dts_gen_0512
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0512', () => {
    try {
      const DECL = `void genType512(std::valarray<int8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0512 生成结果为空');
      const expectSnippet0 = 'export function genType512(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0512 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0512 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0512 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0513
  * @tc.name : h2dts_gen_0513
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0513', () => {
    try {
      const DECL = `void genType513(std::valarray<int16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0513 生成结果为空');
      const expectSnippet0 = 'export function genType513(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0513 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0513 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0513 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0514
  * @tc.name : h2dts_gen_0514
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0514', () => {
    try {
      const DECL = `void genType514(std::valarray<int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0514 生成结果为空');
      const expectSnippet0 = 'export function genType514(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0514 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0514 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0514 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0515
  * @tc.name : h2dts_gen_0515
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0515', () => {
    try {
      const DECL = `void genType515(std::valarray<int64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0515 生成结果为空');
      const expectSnippet0 = 'export function genType515(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0515 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0515 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0515 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0516
  * @tc.name : h2dts_gen_0516
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0516', () => {
    try {
      const DECL = `void genType516(std::valarray<unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0516 生成结果为空');
      const expectSnippet0 = 'export function genType516(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0516 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0516 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0516 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0517
  * @tc.name : h2dts_gen_0517
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0517', () => {
    try {
      const DECL = `void genType517(std::valarray<bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0517 生成结果为空');
      const expectSnippet0 = 'export function genType517(v: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0517 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0517 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0517 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0518
  * @tc.name : h2dts_gen_0518
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0518', () => {
    try {
      const DECL = `void genType518(std::valarray<char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0518 生成结果为空');
      const expectSnippet0 = 'export function genType518(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0518 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0518 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0518 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0519
  * @tc.name : h2dts_gen_0519
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0519', () => {
    try {
      const DECL = `void genType519(std::valarray<wchar_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0519 生成结果为空');
      const expectSnippet0 = 'export function genType519(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0519 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0519 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0519 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0520
  * @tc.name : h2dts_gen_0520
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0520', () => {
    try {
      const DECL = `void genType520(std::valarray<char8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0520 生成结果为空');
      const expectSnippet0 = 'export function genType520(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0520 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0520 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0520 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0521
  * @tc.name : h2dts_gen_0521
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0521', () => {
    try {
      const DECL = `void genType521(std::valarray<char16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0521 生成结果为空');
      const expectSnippet0 = 'export function genType521(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0521 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0521 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0521 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0522
  * @tc.name : h2dts_gen_0522
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::valarray<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0522', () => {
    try {
      const DECL = `void genType522(std::valarray<char32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0522 生成结果为空');
      const expectSnippet0 = 'export function genType522(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0522 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0522 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0522 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0523
  * @tc.name : h2dts_gen_0523
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0523', () => {
    try {
      const DECL = `void genType523(std::valarray<int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0523 生成结果为空');
      const expectSnippet0 = 'export function genType523(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0523 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0523 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0523 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0524
  * @tc.name : h2dts_gen_0524
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0524', () => {
    try {
      const DECL = `void genType524(std::valarray<size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0524 生成结果为空');
      const expectSnippet0 = 'export function genType524(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0524 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0524 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0524 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0525
  * @tc.name : h2dts_gen_0525
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0525', () => {
    try {
      const DECL = `void genType525(std::valarray<double>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0525 生成结果为空');
      const expectSnippet0 = 'export function genType525(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0525 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0525 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0525 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0526
  * @tc.name : h2dts_gen_0526
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0526', () => {
    try {
      const DECL = `void genType526(std::valarray<float>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0526 生成结果为空');
      const expectSnippet0 = 'export function genType526(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0526 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0526 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0526 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0527
  * @tc.name : h2dts_gen_0527
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0527', () => {
    try {
      const DECL = `void genType527(std::valarray<long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0527 生成结果为空');
      const expectSnippet0 = 'export function genType527(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0527 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0527 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0527 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0528
  * @tc.name : h2dts_gen_0528
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0528', () => {
    try {
      const DECL = `void genType528(std::valarray<short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0528 生成结果为空');
      const expectSnippet0 = 'export function genType528(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0528 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0528 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0528 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0529
  * @tc.name : h2dts_gen_0529
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0529', () => {
    try {
      const DECL = `void genType529(std::valarray<uint8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0529 生成结果为空');
      const expectSnippet0 = 'export function genType529(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0529 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0529 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0529 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0530
  * @tc.name : h2dts_gen_0530
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0530', () => {
    try {
      const DECL = `void genType530(std::valarray<uint16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0530 生成结果为空');
      const expectSnippet0 = 'export function genType530(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0530 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0530 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0530 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0531
  * @tc.name : h2dts_gen_0531
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0531', () => {
    try {
      const DECL = `void genType531(std::valarray<uint32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0531 生成结果为空');
      const expectSnippet0 = 'export function genType531(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0531 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0531 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0531 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0532
  * @tc.name : h2dts_gen_0532
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0532', () => {
    try {
      const DECL = `void genType532(std::valarray<uint64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0532 生成结果为空');
      const expectSnippet0 = 'export function genType532(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0532 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0532 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0532 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0533
  * @tc.name : h2dts_gen_0533
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0533', () => {
    try {
      const DECL = `void genType533(std::valarray<int8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0533 生成结果为空');
      const expectSnippet0 = 'export function genType533(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0533 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0533 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0533 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0534
  * @tc.name : h2dts_gen_0534
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0534', () => {
    try {
      const DECL = `void genType534(std::valarray<int16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0534 生成结果为空');
      const expectSnippet0 = 'export function genType534(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0534 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0534 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0534 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0535
  * @tc.name : h2dts_gen_0535
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::valarray<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0535', () => {
    try {
      const DECL = `void genType535(std::valarray<int32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0535 生成结果为空');
      const expectSnippet0 = 'export function genType535(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0535 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0535 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0535 执行异常: ${String(err)}`);
    }
  });
});
