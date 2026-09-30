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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part94.');

  /**
  * @tc.number : h2dts_gen_3138
  * @tc.name : h2dts_gen_3138
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `MyType` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3138', () => {
    try {
      const DECL = `void r5ts3138(MyType v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3138 生成结果为空');
      const expectSnippet0 = 'export function r5ts3138(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3138 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3139
  * @tc.name : h2dts_gen_3139
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `defined type` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3139', () => {
    try {
      const DECL = `void r5ts3139(defined type v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3139 生成结果为空');
      const expectSnippet0 = 'export function r5ts3139(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3139 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3140
  * @tc.name : h2dts_gen_3140
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3140', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int r5ret3140(int seed);`),
        unions: parseUnion(`int r5ret3140(int seed);`),
        structs: parseStruct(`int r5ret3140(int seed);`),
        classes: parseClass(`int r5ret3140(int seed);`),
        funcs: parseFunction(`int r5ret3140(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3140 生成结果为空');
      const expectSnippet0 = 'export function r5ret3140(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3140 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3141
  * @tc.name : h2dts_gen_3141
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `size_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3141', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`size_t r5ret3141(int seed);`),
        unions: parseUnion(`size_t r5ret3141(int seed);`),
        structs: parseStruct(`size_t r5ret3141(int seed);`),
        classes: parseClass(`size_t r5ret3141(int seed);`),
        funcs: parseFunction(`size_t r5ret3141(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3141 生成结果为空');
      const expectSnippet0 = 'export function r5ret3141(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3141 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3142
  * @tc.name : h2dts_gen_3142
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `double` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3142', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`double r5ret3142(int seed);`),
        unions: parseUnion(`double r5ret3142(int seed);`),
        structs: parseStruct(`double r5ret3142(int seed);`),
        classes: parseClass(`double r5ret3142(int seed);`),
        funcs: parseFunction(`double r5ret3142(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3142 生成结果为空');
      const expectSnippet0 = 'export function r5ret3142(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3142 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3143
  * @tc.name : h2dts_gen_3143
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `float` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3143', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`float r5ret3143(int seed);`),
        unions: parseUnion(`float r5ret3143(int seed);`),
        structs: parseStruct(`float r5ret3143(int seed);`),
        classes: parseClass(`float r5ret3143(int seed);`),
        funcs: parseFunction(`float r5ret3143(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3143 生成结果为空');
      const expectSnippet0 = 'export function r5ret3143(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3143 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3144
  * @tc.name : h2dts_gen_3144
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `short` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3144', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`short r5ret3144(int seed);`),
        unions: parseUnion(`short r5ret3144(int seed);`),
        structs: parseStruct(`short r5ret3144(int seed);`),
        classes: parseClass(`short r5ret3144(int seed);`),
        funcs: parseFunction(`short r5ret3144(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3144 生成结果为空');
      const expectSnippet0 = 'export function r5ret3144(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3144 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3145
  * @tc.name : h2dts_gen_3145
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3145', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`long r5ret3145(int seed);`),
        unions: parseUnion(`long r5ret3145(int seed);`),
        structs: parseStruct(`long r5ret3145(int seed);`),
        classes: parseClass(`long r5ret3145(int seed);`),
        funcs: parseFunction(`long r5ret3145(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3145 生成结果为空');
      const expectSnippet0 = 'export function r5ret3145(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3145 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3146
  * @tc.name : h2dts_gen_3146
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `uint8_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3146', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint8_t r5ret3146(int seed);`),
        unions: parseUnion(`uint8_t r5ret3146(int seed);`),
        structs: parseStruct(`uint8_t r5ret3146(int seed);`),
        classes: parseClass(`uint8_t r5ret3146(int seed);`),
        funcs: parseFunction(`uint8_t r5ret3146(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3146 生成结果为空');
      const expectSnippet0 = 'export function r5ret3146(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3146 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3147
  * @tc.name : h2dts_gen_3147
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `uint16_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3147', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint16_t r5ret3147(int seed);`),
        unions: parseUnion(`uint16_t r5ret3147(int seed);`),
        structs: parseStruct(`uint16_t r5ret3147(int seed);`),
        classes: parseClass(`uint16_t r5ret3147(int seed);`),
        funcs: parseFunction(`uint16_t r5ret3147(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3147 生成结果为空');
      const expectSnippet0 = 'export function r5ret3147(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3147 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3148
  * @tc.name : h2dts_gen_3148
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `uint32_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3148', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint32_t r5ret3148(int seed);`),
        unions: parseUnion(`uint32_t r5ret3148(int seed);`),
        structs: parseStruct(`uint32_t r5ret3148(int seed);`),
        classes: parseClass(`uint32_t r5ret3148(int seed);`),
        funcs: parseFunction(`uint32_t r5ret3148(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3148 生成结果为空');
      const expectSnippet0 = 'export function r5ret3148(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3148 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3149
  * @tc.name : h2dts_gen_3149
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `uint64_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3149', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint64_t r5ret3149(int seed);`),
        unions: parseUnion(`uint64_t r5ret3149(int seed);`),
        structs: parseStruct(`uint64_t r5ret3149(int seed);`),
        classes: parseClass(`uint64_t r5ret3149(int seed);`),
        funcs: parseFunction(`uint64_t r5ret3149(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3149 生成结果为空');
      const expectSnippet0 = 'export function r5ret3149(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3149 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3150
  * @tc.name : h2dts_gen_3150
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int8_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3150', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int8_t r5ret3150(int seed);`),
        unions: parseUnion(`int8_t r5ret3150(int seed);`),
        structs: parseStruct(`int8_t r5ret3150(int seed);`),
        classes: parseClass(`int8_t r5ret3150(int seed);`),
        funcs: parseFunction(`int8_t r5ret3150(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3150 生成结果为空');
      const expectSnippet0 = 'export function r5ret3150(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3150 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3151
  * @tc.name : h2dts_gen_3151
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int16_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3151', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int16_t r5ret3151(int seed);`),
        unions: parseUnion(`int16_t r5ret3151(int seed);`),
        structs: parseStruct(`int16_t r5ret3151(int seed);`),
        classes: parseClass(`int16_t r5ret3151(int seed);`),
        funcs: parseFunction(`int16_t r5ret3151(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3151 生成结果为空');
      const expectSnippet0 = 'export function r5ret3151(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3151 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3152
  * @tc.name : h2dts_gen_3152
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int32_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3152', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int32_t r5ret3152(int seed);`),
        unions: parseUnion(`int32_t r5ret3152(int seed);`),
        structs: parseStruct(`int32_t r5ret3152(int seed);`),
        classes: parseClass(`int32_t r5ret3152(int seed);`),
        funcs: parseFunction(`int32_t r5ret3152(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3152 生成结果为空');
      const expectSnippet0 = 'export function r5ret3152(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3152 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3153
  * @tc.name : h2dts_gen_3153
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int64_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3153', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int64_t r5ret3153(int seed);`),
        unions: parseUnion(`int64_t r5ret3153(int seed);`),
        structs: parseStruct(`int64_t r5ret3153(int seed);`),
        classes: parseClass(`int64_t r5ret3153(int seed);`),
        funcs: parseFunction(`int64_t r5ret3153(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3153 生成结果为空');
      const expectSnippet0 = 'export function r5ret3153(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3153 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3154
  * @tc.name : h2dts_gen_3154
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `unsigned` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3154', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`unsigned r5ret3154(int seed);`),
        unions: parseUnion(`unsigned r5ret3154(int seed);`),
        structs: parseStruct(`unsigned r5ret3154(int seed);`),
        classes: parseClass(`unsigned r5ret3154(int seed);`),
        funcs: parseFunction(`unsigned r5ret3154(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3154 生成结果为空');
      const expectSnippet0 = 'export function r5ret3154(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3154 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3155
  * @tc.name : h2dts_gen_3155
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `bool` → `boolean` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3155', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`bool r5ret3155(int seed);`),
        unions: parseUnion(`bool r5ret3155(int seed);`),
        structs: parseStruct(`bool r5ret3155(int seed);`),
        classes: parseClass(`bool r5ret3155(int seed);`),
        funcs: parseFunction(`bool r5ret3155(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3155 生成结果为空');
      const expectSnippet0 = 'export function r5ret3155(seed: number): boolean;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3155 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3156
  * @tc.name : h2dts_gen_3156
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `char` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3156', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char r5ret3156(int seed);`),
        unions: parseUnion(`char r5ret3156(int seed);`),
        structs: parseStruct(`char r5ret3156(int seed);`),
        classes: parseClass(`char r5ret3156(int seed);`),
        funcs: parseFunction(`char r5ret3156(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3156 生成结果为空');
      const expectSnippet0 = 'export function r5ret3156(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3156 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3157
  * @tc.name : h2dts_gen_3157
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `wchar_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3157', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`wchar_t r5ret3157(int seed);`),
        unions: parseUnion(`wchar_t r5ret3157(int seed);`),
        structs: parseStruct(`wchar_t r5ret3157(int seed);`),
        classes: parseClass(`wchar_t r5ret3157(int seed);`),
        funcs: parseFunction(`wchar_t r5ret3157(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3157 生成结果为空');
      const expectSnippet0 = 'export function r5ret3157(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3157 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3158
  * @tc.name : h2dts_gen_3158
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `char8_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3158', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char8_t r5ret3158(int seed);`),
        unions: parseUnion(`char8_t r5ret3158(int seed);`),
        structs: parseStruct(`char8_t r5ret3158(int seed);`),
        classes: parseClass(`char8_t r5ret3158(int seed);`),
        funcs: parseFunction(`char8_t r5ret3158(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3158 生成结果为空');
      const expectSnippet0 = 'export function r5ret3158(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3158 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3159
  * @tc.name : h2dts_gen_3159
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `char16_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3159', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char16_t r5ret3159(int seed);`),
        unions: parseUnion(`char16_t r5ret3159(int seed);`),
        structs: parseStruct(`char16_t r5ret3159(int seed);`),
        classes: parseClass(`char16_t r5ret3159(int seed);`),
        funcs: parseFunction(`char16_t r5ret3159(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3159 生成结果为空');
      const expectSnippet0 = 'export function r5ret3159(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3159 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3160
  * @tc.name : h2dts_gen_3160
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `char32_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3160', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char32_t r5ret3160(int seed);`),
        unions: parseUnion(`char32_t r5ret3160(int seed);`),
        structs: parseStruct(`char32_t r5ret3160(int seed);`),
        classes: parseClass(`char32_t r5ret3160(int seed);`),
        funcs: parseFunction(`char32_t r5ret3160(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3160 生成结果为空');
      const expectSnippet0 = 'export function r5ret3160(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3160 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3161
  * @tc.name : h2dts_gen_3161
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::string::iterator` → `IterableIterator<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3161', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::string::iterator r5ret3161(int seed);`),
        unions: parseUnion(`std::string::iterator r5ret3161(int seed);`),
        structs: parseStruct(`std::string::iterator r5ret3161(int seed);`),
        classes: parseClass(`std::string::iterator r5ret3161(int seed);`),
        funcs: parseFunction(`std::string::iterator r5ret3161(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3161 生成结果为空');
      const expectSnippet0 = 'export function r5ret3161(seed: number): IterableIterator<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3161 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3162
  * @tc.name : h2dts_gen_3162
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3162', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int> r5ret3162(int seed);`),
        unions: parseUnion(`std::vector<int> r5ret3162(int seed);`),
        structs: parseStruct(`std::vector<int> r5ret3162(int seed);`),
        classes: parseClass(`std::vector<int> r5ret3162(int seed);`),
        funcs: parseFunction(`std::vector<int> r5ret3162(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3162 生成结果为空');
      const expectSnippet0 = 'export function r5ret3162(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3162 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3163
  * @tc.name : h2dts_gen_3163
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3163', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<size_t> r5ret3163(int seed);`),
        unions: parseUnion(`std::vector<size_t> r5ret3163(int seed);`),
        structs: parseStruct(`std::vector<size_t> r5ret3163(int seed);`),
        classes: parseClass(`std::vector<size_t> r5ret3163(int seed);`),
        funcs: parseFunction(`std::vector<size_t> r5ret3163(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3163 生成结果为空');
      const expectSnippet0 = 'export function r5ret3163(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3163 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3164
  * @tc.name : h2dts_gen_3164
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3164', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<double> r5ret3164(int seed);`),
        unions: parseUnion(`std::vector<double> r5ret3164(int seed);`),
        structs: parseStruct(`std::vector<double> r5ret3164(int seed);`),
        classes: parseClass(`std::vector<double> r5ret3164(int seed);`),
        funcs: parseFunction(`std::vector<double> r5ret3164(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3164 生成结果为空');
      const expectSnippet0 = 'export function r5ret3164(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3164 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3165
  * @tc.name : h2dts_gen_3165
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3165', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<float> r5ret3165(int seed);`),
        unions: parseUnion(`std::vector<float> r5ret3165(int seed);`),
        structs: parseStruct(`std::vector<float> r5ret3165(int seed);`),
        classes: parseClass(`std::vector<float> r5ret3165(int seed);`),
        funcs: parseFunction(`std::vector<float> r5ret3165(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3165 生成结果为空');
      const expectSnippet0 = 'export function r5ret3165(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3165 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3166
  * @tc.name : h2dts_gen_3166
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3166', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<long> r5ret3166(int seed);`),
        unions: parseUnion(`std::vector<long> r5ret3166(int seed);`),
        structs: parseStruct(`std::vector<long> r5ret3166(int seed);`),
        classes: parseClass(`std::vector<long> r5ret3166(int seed);`),
        funcs: parseFunction(`std::vector<long> r5ret3166(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3166 生成结果为空');
      const expectSnippet0 = 'export function r5ret3166(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3166 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3167
  * @tc.name : h2dts_gen_3167
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3167', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<short> r5ret3167(int seed);`),
        unions: parseUnion(`std::vector<short> r5ret3167(int seed);`),
        structs: parseStruct(`std::vector<short> r5ret3167(int seed);`),
        classes: parseClass(`std::vector<short> r5ret3167(int seed);`),
        funcs: parseFunction(`std::vector<short> r5ret3167(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3167 生成结果为空');
      const expectSnippet0 = 'export function r5ret3167(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3167 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3168
  * @tc.name : h2dts_gen_3168
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3168', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint8_t> r5ret3168(int seed);`),
        unions: parseUnion(`std::vector<uint8_t> r5ret3168(int seed);`),
        structs: parseStruct(`std::vector<uint8_t> r5ret3168(int seed);`),
        classes: parseClass(`std::vector<uint8_t> r5ret3168(int seed);`),
        funcs: parseFunction(`std::vector<uint8_t> r5ret3168(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3168 生成结果为空');
      const expectSnippet0 = 'export function r5ret3168(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3168 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3169
  * @tc.name : h2dts_gen_3169
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3169', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint16_t> r5ret3169(int seed);`),
        unions: parseUnion(`std::vector<uint16_t> r5ret3169(int seed);`),
        structs: parseStruct(`std::vector<uint16_t> r5ret3169(int seed);`),
        classes: parseClass(`std::vector<uint16_t> r5ret3169(int seed);`),
        funcs: parseFunction(`std::vector<uint16_t> r5ret3169(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3169 生成结果为空');
      const expectSnippet0 = 'export function r5ret3169(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3169 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3170
  * @tc.name : h2dts_gen_3170
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3170', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint32_t> r5ret3170(int seed);`),
        unions: parseUnion(`std::vector<uint32_t> r5ret3170(int seed);`),
        structs: parseStruct(`std::vector<uint32_t> r5ret3170(int seed);`),
        classes: parseClass(`std::vector<uint32_t> r5ret3170(int seed);`),
        funcs: parseFunction(`std::vector<uint32_t> r5ret3170(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3170 生成结果为空');
      const expectSnippet0 = 'export function r5ret3170(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3170 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3171
  * @tc.name : h2dts_gen_3171
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3171', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint64_t> r5ret3171(int seed);`),
        unions: parseUnion(`std::vector<uint64_t> r5ret3171(int seed);`),
        structs: parseStruct(`std::vector<uint64_t> r5ret3171(int seed);`),
        classes: parseClass(`std::vector<uint64_t> r5ret3171(int seed);`),
        funcs: parseFunction(`std::vector<uint64_t> r5ret3171(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3171 生成结果为空');
      const expectSnippet0 = 'export function r5ret3171(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3171 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3172
  * @tc.name : h2dts_gen_3172
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3172', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int8_t> r5ret3172(int seed);`),
        unions: parseUnion(`std::vector<int8_t> r5ret3172(int seed);`),
        structs: parseStruct(`std::vector<int8_t> r5ret3172(int seed);`),
        classes: parseClass(`std::vector<int8_t> r5ret3172(int seed);`),
        funcs: parseFunction(`std::vector<int8_t> r5ret3172(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3172 生成结果为空');
      const expectSnippet0 = 'export function r5ret3172(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3172 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3172 执行异常: ${String(err)}`);
    }
  });
});
