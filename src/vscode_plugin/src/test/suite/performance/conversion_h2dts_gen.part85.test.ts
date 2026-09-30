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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part85.');
  /**
  * @tc.number : h2dts_gen_2823
  * @tc.name : h2dts_gen_2823
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<char8_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2823', () => {
    try {
      const DECL = `void r5ts2823(std::shared_ptr<char8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2823 生成结果为空');
      const expectSnippet0 = 'export function r5ts2823(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2823 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2823 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2823 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2824
  * @tc.name : h2dts_gen_2824
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<char16_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2824', () => {
    try {
      const DECL = `void r5ts2824(std::shared_ptr<char16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2824 生成结果为空');
      const expectSnippet0 = 'export function r5ts2824(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2824 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2824 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2824 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2825
  * @tc.name : h2dts_gen_2825
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<char32_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2825', () => {
    try {
      const DECL = `void r5ts2825(std::shared_ptr<char32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2825 生成结果为空');
      const expectSnippet0 = 'export function r5ts2825(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2825 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2825 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2825 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2826
  * @tc.name : h2dts_gen_2826
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2826', () => {
    try {
      const DECL = `void r5ts2826(std::weak_ptr<int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2826 生成结果为空');
      const expectSnippet0 = 'export function r5ts2826(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2826 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2826 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2826 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2827
  * @tc.name : h2dts_gen_2827
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<size_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2827', () => {
    try {
      const DECL = `void r5ts2827(std::weak_ptr<size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2827 生成结果为空');
      const expectSnippet0 = 'export function r5ts2827(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2827 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2827 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2827 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2828
  * @tc.name : h2dts_gen_2828
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<double>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2828', () => {
    try {
      const DECL = `void r5ts2828(std::weak_ptr<double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2828 生成结果为空');
      const expectSnippet0 = 'export function r5ts2828(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2828 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2828 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2828 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2829
  * @tc.name : h2dts_gen_2829
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<float>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2829', () => {
    try {
      const DECL = `void r5ts2829(std::weak_ptr<float> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2829 生成结果为空');
      const expectSnippet0 = 'export function r5ts2829(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2829 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2829 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2829 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2830
  * @tc.name : h2dts_gen_2830
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2830', () => {
    try {
      const DECL = `void r5ts2830(std::weak_ptr<long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2830 生成结果为空');
      const expectSnippet0 = 'export function r5ts2830(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2830 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2830 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2830 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2831
  * @tc.name : h2dts_gen_2831
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2831', () => {
    try {
      const DECL = `void r5ts2831(std::weak_ptr<short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2831 生成结果为空');
      const expectSnippet0 = 'export function r5ts2831(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2831 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2831 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2831 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2832
  * @tc.name : h2dts_gen_2832
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<uint8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2832', () => {
    try {
      const DECL = `void r5ts2832(std::weak_ptr<uint8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2832 生成结果为空');
      const expectSnippet0 = 'export function r5ts2832(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2832 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2832 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2832 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2833
  * @tc.name : h2dts_gen_2833
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<uint16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2833', () => {
    try {
      const DECL = `void r5ts2833(std::weak_ptr<uint16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2833 生成结果为空');
      const expectSnippet0 = 'export function r5ts2833(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2833 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2833 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2833 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2834
  * @tc.name : h2dts_gen_2834
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<uint32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2834', () => {
    try {
      const DECL = `void r5ts2834(std::weak_ptr<uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2834 生成结果为空');
      const expectSnippet0 = 'export function r5ts2834(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2834 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2834 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2834 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2835
  * @tc.name : h2dts_gen_2835
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<uint64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2835', () => {
    try {
      const DECL = `void r5ts2835(std::weak_ptr<uint64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2835 生成结果为空');
      const expectSnippet0 = 'export function r5ts2835(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2835 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2835 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2835 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2836
  * @tc.name : h2dts_gen_2836
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2836', () => {
    try {
      const DECL = `void r5ts2836(std::weak_ptr<int8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2836 生成结果为空');
      const expectSnippet0 = 'export function r5ts2836(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2836 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2836 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2836 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2837
  * @tc.name : h2dts_gen_2837
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2837', () => {
    try {
      const DECL = `void r5ts2837(std::weak_ptr<int16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2837 生成结果为空');
      const expectSnippet0 = 'export function r5ts2837(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2837 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2837 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2837 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2838
  * @tc.name : h2dts_gen_2838
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2838', () => {
    try {
      const DECL = `void r5ts2838(std::weak_ptr<int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2838 生成结果为空');
      const expectSnippet0 = 'export function r5ts2838(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2838 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2838 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2838 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2839
  * @tc.name : h2dts_gen_2839
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2839', () => {
    try {
      const DECL = `void r5ts2839(std::weak_ptr<int64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2839 生成结果为空');
      const expectSnippet0 = 'export function r5ts2839(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2839 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2839 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2839 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2840
  * @tc.name : h2dts_gen_2840
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<unsigned>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2840', () => {
    try {
      const DECL = `void r5ts2840(std::weak_ptr<unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2840 生成结果为空');
      const expectSnippet0 = 'export function r5ts2840(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2840 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2840 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2840 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2841
  * @tc.name : h2dts_gen_2841
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<bool>` → `boolean` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2841', () => {
    try {
      const DECL = `void r5ts2841(std::weak_ptr<bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2841 生成结果为空');
      const expectSnippet0 = 'export function r5ts2841(v: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2841 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2841 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2841 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2842
  * @tc.name : h2dts_gen_2842
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2842', () => {
    try {
      const DECL = `void r5ts2842(std::weak_ptr<char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2842 生成结果为空');
      const expectSnippet0 = 'export function r5ts2842(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2842 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2842 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2842 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2843
  * @tc.name : h2dts_gen_2843
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<wchar_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2843', () => {
    try {
      const DECL = `void r5ts2843(std::weak_ptr<wchar_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2843 生成结果为空');
      const expectSnippet0 = 'export function r5ts2843(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2843 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2843 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2843 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2844
  * @tc.name : h2dts_gen_2844
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char8_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2844', () => {
    try {
      const DECL = `void r5ts2844(std::weak_ptr<char8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2844 生成结果为空');
      const expectSnippet0 = 'export function r5ts2844(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2844 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2844 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2844 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2845
  * @tc.name : h2dts_gen_2845
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char16_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2845', () => {
    try {
      const DECL = `void r5ts2845(std::weak_ptr<char16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2845 生成结果为空');
      const expectSnippet0 = 'export function r5ts2845(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2845 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2845 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2845 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2846
  * @tc.name : h2dts_gen_2846
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char32_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2846', () => {
    try {
      const DECL = `void r5ts2846(std::weak_ptr<char32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2846 生成结果为空');
      const expectSnippet0 = 'export function r5ts2846(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2846 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2846 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2846 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2847
  * @tc.name : h2dts_gen_2847
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::string` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2847', () => {
    try {
      const DECL = `void r5ts2847(std::string v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2847 生成结果为空');
      const expectSnippet0 = 'export function r5ts2847(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2847 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2847 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2847 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2848
  * @tc.name : h2dts_gen_2848
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<std::string>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2848', () => {
    try {
      const DECL = `void r5ts2848(std::vector<std::string> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2848 生成结果为空');
      const expectSnippet0 = 'export function r5ts2848(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2848 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2848 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2848 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2849
  * @tc.name : h2dts_gen_2849
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `char *` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2849', () => {
    try {
      const DECL = `void r5ts2849(char * v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2849 生成结果为空');
      const expectSnippet0 = 'export function r5ts2849(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2849 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2849 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2849 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2850
  * @tc.name : h2dts_gen_2850
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `long long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2850', () => {
    try {
      const DECL = `void r5ts2850(long long v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2850 生成结果为空');
      const expectSnippet0 = 'export function r5ts2850(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2850 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2850 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2850 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2851
  * @tc.name : h2dts_gen_2851
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `unsigned short` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2851', () => {
    try {
      const DECL = `void r5ts2851(unsigned short v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2851 生成结果为空');
      const expectSnippet0 = 'export function r5ts2851(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2851 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2851 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2851 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2852
  * @tc.name : h2dts_gen_2852
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `unsigned long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2852', () => {
    try {
      const DECL = `void r5ts2852(unsigned long v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2852 生成结果为空');
      const expectSnippet0 = 'export function r5ts2852(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2852 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2852 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2852 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2853
  * @tc.name : h2dts_gen_2853
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `unsigned long long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2853', () => {
    try {
      const DECL = `void r5ts2853(unsigned long long v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2853 生成结果为空');
      const expectSnippet0 = 'export function r5ts2853(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2853 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2853 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2853 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2854
  * @tc.name : h2dts_gen_2854
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2854', () => {
    try {
      const DECL = `void r5ts2854(std::vector<long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2854 生成结果为空');
      const expectSnippet0 = 'export function r5ts2854(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2854 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2854 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2854 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2855
  * @tc.name : h2dts_gen_2855
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<unsigned short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2855', () => {
    try {
      const DECL = `void r5ts2855(std::vector<unsigned short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2855 生成结果为空');
      const expectSnippet0 = 'export function r5ts2855(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2855 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2855 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2855 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2856
  * @tc.name : h2dts_gen_2856
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<unsigned long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2856', () => {
    try {
      const DECL = `void r5ts2856(std::vector<unsigned long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2856 生成结果为空');
      const expectSnippet0 = 'export function r5ts2856(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2856 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2856 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2856 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2857
  * @tc.name : h2dts_gen_2857
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<unsigned long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2857', () => {
    try {
      const DECL = `void r5ts2857(std::vector<unsigned long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2857 生成结果为空');
      const expectSnippet0 = 'export function r5ts2857(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2857 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2857 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2857 执行异常: ${String(err)}`);
    }
  });
});
