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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part121.');
  /**
  * @tc.number : h2dts_gen_4052
  * @tc.name : h2dts_gen_4052
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4052', () => {
    try {
      const DECL = `void r5ts4052(std::queue<uint8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4052 生成结果为空');
      const expectSnippet0 = 'export function r5ts4052(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4052 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4052 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4053
  * @tc.name : h2dts_gen_4053
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4053', () => {
    try {
      const DECL = `void r5ts4053(std::queue<uint16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4053 生成结果为空');
      const expectSnippet0 = 'export function r5ts4053(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4053 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4053 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4054
  * @tc.name : h2dts_gen_4054
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4054', () => {
    try {
      const DECL = `void r5ts4054(std::queue<uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4054 生成结果为空');
      const expectSnippet0 = 'export function r5ts4054(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4054 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4054 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4055
  * @tc.name : h2dts_gen_4055
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4055', () => {
    try {
      const DECL = `void r5ts4055(std::queue<uint64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4055 生成结果为空');
      const expectSnippet0 = 'export function r5ts4055(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4055 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4055 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4056
  * @tc.name : h2dts_gen_4056
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4056', () => {
    try {
      const DECL = `void r5ts4056(std::queue<int8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4056 生成结果为空');
      const expectSnippet0 = 'export function r5ts4056(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4056 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4056 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4057
  * @tc.name : h2dts_gen_4057
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4057', () => {
    try {
      const DECL = `void r5ts4057(std::queue<int16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4057 生成结果为空');
      const expectSnippet0 = 'export function r5ts4057(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4057 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4057 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4058
  * @tc.name : h2dts_gen_4058
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4058', () => {
    try {
      const DECL = `void r5ts4058(std::queue<int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4058 生成结果为空');
      const expectSnippet0 = 'export function r5ts4058(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4058 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4058 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4059
  * @tc.name : h2dts_gen_4059
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4059', () => {
    try {
      const DECL = `void r5ts4059(std::queue<int64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4059 生成结果为空');
      const expectSnippet0 = 'export function r5ts4059(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4059 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4059 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4060
  * @tc.name : h2dts_gen_4060
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4060', () => {
    try {
      const DECL = `void r5ts4060(std::queue<unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4060 生成结果为空');
      const expectSnippet0 = 'export function r5ts4060(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4060 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4060 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4061
  * @tc.name : h2dts_gen_4061
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4061', () => {
    try {
      const DECL = `void r5ts4061(std::queue<bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4061 生成结果为空');
      const expectSnippet0 = 'export function r5ts4061(v: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4061 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4061 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4062
  * @tc.name : h2dts_gen_4062
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4062', () => {
    try {
      const DECL = `void r5ts4062(std::queue<char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4062 生成结果为空');
      const expectSnippet0 = 'export function r5ts4062(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4062 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4062 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4063
  * @tc.name : h2dts_gen_4063
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4063', () => {
    try {
      const DECL = `void r5ts4063(std::queue<wchar_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4063 生成结果为空');
      const expectSnippet0 = 'export function r5ts4063(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4063 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4063 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4064
  * @tc.name : h2dts_gen_4064
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4064', () => {
    try {
      const DECL = `void r5ts4064(std::queue<char8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4064 生成结果为空');
      const expectSnippet0 = 'export function r5ts4064(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4064 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4064 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4065
  * @tc.name : h2dts_gen_4065
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4065', () => {
    try {
      const DECL = `void r5ts4065(std::queue<char16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4065 生成结果为空');
      const expectSnippet0 = 'export function r5ts4065(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4065 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4065 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4066
  * @tc.name : h2dts_gen_4066
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4066', () => {
    try {
      const DECL = `void r5ts4066(std::queue<char32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4066 生成结果为空');
      const expectSnippet0 = 'export function r5ts4066(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4066 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4066 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4067
  * @tc.name : h2dts_gen_4067
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<int>::iterator` → `IterableIterator<number[]>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4067', () => {
    try {
      const DECL = `void r5ts4067(std::queue<int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4067 生成结果为空');
      const expectSnippet0 = 'export function r5ts4067(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4067 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4067 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4068
  * @tc.name : h2dts_gen_4068
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<size_t>::iterator` → `IterableIterator<number[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4068', () => {
    try {
      const DECL = `void r5ts4068(std::queue<size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4068 生成结果为空');
      const expectSnippet0 = 'export function r5ts4068(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4068 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4068 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4069
  * @tc.name : h2dts_gen_4069
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<double>::iterator` → `IterableIterator<number[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4069', () => {
    try {
      const DECL = `void r5ts4069(std::queue<double>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4069 生成结果为空');
      const expectSnippet0 = 'export function r5ts4069(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4069 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4069 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4070
  * @tc.name : h2dts_gen_4070
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<float>::iterator` → `IterableIterator<number[]>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4070', () => {
    try {
      const DECL = `void r5ts4070(std::queue<float>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4070 生成结果为空');
      const expectSnippet0 = 'export function r5ts4070(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4070 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4070 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4071
  * @tc.name : h2dts_gen_4071
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<long>::iterator` → `IterableIterator<number[]>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4071', () => {
    try {
      const DECL = `void r5ts4071(std::queue<long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4071 生成结果为空');
      const expectSnippet0 = 'export function r5ts4071(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4071 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4071 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4072
  * @tc.name : h2dts_gen_4072
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<short>::iterator` → `IterableIterator<number[]>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4072', () => {
    try {
      const DECL = `void r5ts4072(std::queue<short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4072 生成结果为空');
      const expectSnippet0 = 'export function r5ts4072(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4072 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4072 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4073
  * @tc.name : h2dts_gen_4073
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<uint8_t>::iterator` → `IterableIterator<number[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4073', () => {
    try {
      const DECL = `void r5ts4073(std::queue<uint8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4073 生成结果为空');
      const expectSnippet0 = 'export function r5ts4073(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4073 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4073 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4074
  * @tc.name : h2dts_gen_4074
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<uint16_t>::iterator` → `IterableIterator<number[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4074', () => {
    try {
      const DECL = `void r5ts4074(std::queue<uint16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4074 生成结果为空');
      const expectSnippet0 = 'export function r5ts4074(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4074 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4074 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4075
  * @tc.name : h2dts_gen_4075
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<uint32_t>::iterator` → `IterableIterator<number[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4075', () => {
    try {
      const DECL = `void r5ts4075(std::queue<uint32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4075 生成结果为空');
      const expectSnippet0 = 'export function r5ts4075(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4075 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4075 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4076
  * @tc.name : h2dts_gen_4076
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<uint64_t>::iterator` → `IterableIterator<number[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4076', () => {
    try {
      const DECL = `void r5ts4076(std::queue<uint64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4076 生成结果为空');
      const expectSnippet0 = 'export function r5ts4076(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4076 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4076 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4077
  * @tc.name : h2dts_gen_4077
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<int8_t>::iterator` → `IterableIterator<number[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4077', () => {
    try {
      const DECL = `void r5ts4077(std::queue<int8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4077 生成结果为空');
      const expectSnippet0 = 'export function r5ts4077(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4077 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4077 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4077 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4078
  * @tc.name : h2dts_gen_4078
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<int16_t>::iterator` → `IterableIterator<number[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4078', () => {
    try {
      const DECL = `void r5ts4078(std::queue<int16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4078 生成结果为空');
      const expectSnippet0 = 'export function r5ts4078(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4078 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4078 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4079
  * @tc.name : h2dts_gen_4079
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<int32_t>::iterator` → `IterableIterator<number[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4079', () => {
    try {
      const DECL = `void r5ts4079(std::queue<int32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4079 生成结果为空');
      const expectSnippet0 = 'export function r5ts4079(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4079 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4079 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4080
  * @tc.name : h2dts_gen_4080
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<int64_t>::iterator` → `IterableIterator<number[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4080', () => {
    try {
      const DECL = `void r5ts4080(std::queue<int64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4080 生成结果为空');
      const expectSnippet0 = 'export function r5ts4080(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4080 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4080 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4081
  * @tc.name : h2dts_gen_4081
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<unsigned>::iterator` → `IterableIterator<number[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4081', () => {
    try {
      const DECL = `void r5ts4081(std::queue<unsigned>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4081 生成结果为空');
      const expectSnippet0 = 'export function r5ts4081(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4081 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4081 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4082
  * @tc.name : h2dts_gen_4082
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<bool>::iterator` → `IterableIterator<boolean[]>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4082', () => {
    try {
      const DECL = `void r5ts4082(std::queue<bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4082 生成结果为空');
      const expectSnippet0 = 'export function r5ts4082(v: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4082 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4082 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4083
  * @tc.name : h2dts_gen_4083
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<char>::iterator` → `IterableIterator<string[]>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4083', () => {
    try {
      const DECL = `void r5ts4083(std::queue<char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4083 生成结果为空');
      const expectSnippet0 = 'export function r5ts4083(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4083 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4083 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4084
  * @tc.name : h2dts_gen_4084
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<wchar_t>::iterator` → `IterableIterator<string[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4084', () => {
    try {
      const DECL = `void r5ts4084(std::queue<wchar_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4084 生成结果为空');
      const expectSnippet0 = 'export function r5ts4084(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4084 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4084 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4085
  * @tc.name : h2dts_gen_4085
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<char8_t>::iterator` → `IterableIterator<string[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4085', () => {
    try {
      const DECL = `void r5ts4085(std::queue<char8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4085 生成结果为空');
      const expectSnippet0 = 'export function r5ts4085(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4085 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4085 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4086
  * @tc.name : h2dts_gen_4086
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<char16_t>::iterator` → `IterableIterator<string[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4086', () => {
    try {
      const DECL = `void r5ts4086(std::queue<char16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4086 生成结果为空');
      const expectSnippet0 = 'export function r5ts4086(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4086 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4086 执行异常: ${String(err)}`);
    }
  });
});
