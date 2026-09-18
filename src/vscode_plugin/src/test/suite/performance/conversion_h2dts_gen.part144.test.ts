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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part144.');

  /**
  * @tc.number : h2dts_gen_4857
  * @tc.name : h2dts_gen_4857
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `MyType` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4857', () => {
    try {
      const DECL = `void r5ts4857(MyType v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4857 生成结果为空');
      const expectSnippet0 = 'export function r5ts4857(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4857 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4857 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4857 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4858
  * @tc.name : h2dts_gen_4858
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `defined type` → `any` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4858', () => {
    try {
      const DECL = `void r5ts4858(defined type v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_4858 生成结果为空');
      const expectSnippet0 = 'export function r5ts4858(v: any): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4858 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4858 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4858 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4859
  * @tc.name : h2dts_gen_4859
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4859', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int r5ret4859(int seed);`),
        unions: parseUnion(`int r5ret4859(int seed);`),
        structs: parseStruct(`int r5ret4859(int seed);`),
        classes: parseClass(`int r5ret4859(int seed);`),
        funcs: parseFunction(`int r5ret4859(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4859 生成结果为空');
      const expectSnippet0 = 'export function r5ret4859(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4859 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4859 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4859 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4860
  * @tc.name : h2dts_gen_4860
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `size_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4860', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`size_t r5ret4860(int seed);`),
        unions: parseUnion(`size_t r5ret4860(int seed);`),
        structs: parseStruct(`size_t r5ret4860(int seed);`),
        classes: parseClass(`size_t r5ret4860(int seed);`),
        funcs: parseFunction(`size_t r5ret4860(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4860 生成结果为空');
      const expectSnippet0 = 'export function r5ret4860(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4860 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4860 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4860 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4861
  * @tc.name : h2dts_gen_4861
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `double` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4861', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`double r5ret4861(int seed);`),
        unions: parseUnion(`double r5ret4861(int seed);`),
        structs: parseStruct(`double r5ret4861(int seed);`),
        classes: parseClass(`double r5ret4861(int seed);`),
        funcs: parseFunction(`double r5ret4861(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4861 生成结果为空');
      const expectSnippet0 = 'export function r5ret4861(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4861 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4861 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4861 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4862
  * @tc.name : h2dts_gen_4862
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `float` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4862', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`float r5ret4862(int seed);`),
        unions: parseUnion(`float r5ret4862(int seed);`),
        structs: parseStruct(`float r5ret4862(int seed);`),
        classes: parseClass(`float r5ret4862(int seed);`),
        funcs: parseFunction(`float r5ret4862(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4862 生成结果为空');
      const expectSnippet0 = 'export function r5ret4862(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4862 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4862 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4862 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4863
  * @tc.name : h2dts_gen_4863
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `short` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4863', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`short r5ret4863(int seed);`),
        unions: parseUnion(`short r5ret4863(int seed);`),
        structs: parseStruct(`short r5ret4863(int seed);`),
        classes: parseClass(`short r5ret4863(int seed);`),
        funcs: parseFunction(`short r5ret4863(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4863 生成结果为空');
      const expectSnippet0 = 'export function r5ret4863(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4863 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4863 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4863 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4864
  * @tc.name : h2dts_gen_4864
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4864', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`long r5ret4864(int seed);`),
        unions: parseUnion(`long r5ret4864(int seed);`),
        structs: parseStruct(`long r5ret4864(int seed);`),
        classes: parseClass(`long r5ret4864(int seed);`),
        funcs: parseFunction(`long r5ret4864(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4864 生成结果为空');
      const expectSnippet0 = 'export function r5ret4864(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4864 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4864 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4864 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4865
  * @tc.name : h2dts_gen_4865
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `uint8_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4865', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint8_t r5ret4865(int seed);`),
        unions: parseUnion(`uint8_t r5ret4865(int seed);`),
        structs: parseStruct(`uint8_t r5ret4865(int seed);`),
        classes: parseClass(`uint8_t r5ret4865(int seed);`),
        funcs: parseFunction(`uint8_t r5ret4865(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4865 生成结果为空');
      const expectSnippet0 = 'export function r5ret4865(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4865 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4865 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4865 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4866
  * @tc.name : h2dts_gen_4866
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `uint16_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4866', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint16_t r5ret4866(int seed);`),
        unions: parseUnion(`uint16_t r5ret4866(int seed);`),
        structs: parseStruct(`uint16_t r5ret4866(int seed);`),
        classes: parseClass(`uint16_t r5ret4866(int seed);`),
        funcs: parseFunction(`uint16_t r5ret4866(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4866 生成结果为空');
      const expectSnippet0 = 'export function r5ret4866(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4866 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4866 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4866 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4867
  * @tc.name : h2dts_gen_4867
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `uint32_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4867', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint32_t r5ret4867(int seed);`),
        unions: parseUnion(`uint32_t r5ret4867(int seed);`),
        structs: parseStruct(`uint32_t r5ret4867(int seed);`),
        classes: parseClass(`uint32_t r5ret4867(int seed);`),
        funcs: parseFunction(`uint32_t r5ret4867(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4867 生成结果为空');
      const expectSnippet0 = 'export function r5ret4867(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4867 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4867 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4867 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4868
  * @tc.name : h2dts_gen_4868
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `uint64_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4868', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint64_t r5ret4868(int seed);`),
        unions: parseUnion(`uint64_t r5ret4868(int seed);`),
        structs: parseStruct(`uint64_t r5ret4868(int seed);`),
        classes: parseClass(`uint64_t r5ret4868(int seed);`),
        funcs: parseFunction(`uint64_t r5ret4868(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4868 生成结果为空');
      const expectSnippet0 = 'export function r5ret4868(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4868 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4868 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4868 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4869
  * @tc.name : h2dts_gen_4869
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int8_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4869', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int8_t r5ret4869(int seed);`),
        unions: parseUnion(`int8_t r5ret4869(int seed);`),
        structs: parseStruct(`int8_t r5ret4869(int seed);`),
        classes: parseClass(`int8_t r5ret4869(int seed);`),
        funcs: parseFunction(`int8_t r5ret4869(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4869 生成结果为空');
      const expectSnippet0 = 'export function r5ret4869(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4869 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4869 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4869 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4870
  * @tc.name : h2dts_gen_4870
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int16_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4870', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int16_t r5ret4870(int seed);`),
        unions: parseUnion(`int16_t r5ret4870(int seed);`),
        structs: parseStruct(`int16_t r5ret4870(int seed);`),
        classes: parseClass(`int16_t r5ret4870(int seed);`),
        funcs: parseFunction(`int16_t r5ret4870(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4870 生成结果为空');
      const expectSnippet0 = 'export function r5ret4870(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4870 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4870 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4870 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4871
  * @tc.name : h2dts_gen_4871
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int32_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4871', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int32_t r5ret4871(int seed);`),
        unions: parseUnion(`int32_t r5ret4871(int seed);`),
        structs: parseStruct(`int32_t r5ret4871(int seed);`),
        classes: parseClass(`int32_t r5ret4871(int seed);`),
        funcs: parseFunction(`int32_t r5ret4871(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4871 生成结果为空');
      const expectSnippet0 = 'export function r5ret4871(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4871 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4871 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4871 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4872
  * @tc.name : h2dts_gen_4872
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `int64_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4872', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int64_t r5ret4872(int seed);`),
        unions: parseUnion(`int64_t r5ret4872(int seed);`),
        structs: parseStruct(`int64_t r5ret4872(int seed);`),
        classes: parseClass(`int64_t r5ret4872(int seed);`),
        funcs: parseFunction(`int64_t r5ret4872(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4872 生成结果为空');
      const expectSnippet0 = 'export function r5ret4872(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4872 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4872 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4872 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4873
  * @tc.name : h2dts_gen_4873
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `unsigned` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4873', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`unsigned r5ret4873(int seed);`),
        unions: parseUnion(`unsigned r5ret4873(int seed);`),
        structs: parseStruct(`unsigned r5ret4873(int seed);`),
        classes: parseClass(`unsigned r5ret4873(int seed);`),
        funcs: parseFunction(`unsigned r5ret4873(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4873 生成结果为空');
      const expectSnippet0 = 'export function r5ret4873(seed: number): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4873 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4873 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4873 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4874
  * @tc.name : h2dts_gen_4874
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `bool` → `boolean` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4874', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`bool r5ret4874(int seed);`),
        unions: parseUnion(`bool r5ret4874(int seed);`),
        structs: parseStruct(`bool r5ret4874(int seed);`),
        classes: parseClass(`bool r5ret4874(int seed);`),
        funcs: parseFunction(`bool r5ret4874(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4874 生成结果为空');
      const expectSnippet0 = 'export function r5ret4874(seed: number): boolean;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4874 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4874 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4874 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4875
  * @tc.name : h2dts_gen_4875
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `char` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4875', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char r5ret4875(int seed);`),
        unions: parseUnion(`char r5ret4875(int seed);`),
        structs: parseStruct(`char r5ret4875(int seed);`),
        classes: parseClass(`char r5ret4875(int seed);`),
        funcs: parseFunction(`char r5ret4875(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4875 生成结果为空');
      const expectSnippet0 = 'export function r5ret4875(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4875 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4875 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4875 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4876
  * @tc.name : h2dts_gen_4876
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `wchar_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4876', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`wchar_t r5ret4876(int seed);`),
        unions: parseUnion(`wchar_t r5ret4876(int seed);`),
        structs: parseStruct(`wchar_t r5ret4876(int seed);`),
        classes: parseClass(`wchar_t r5ret4876(int seed);`),
        funcs: parseFunction(`wchar_t r5ret4876(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4876 生成结果为空');
      const expectSnippet0 = 'export function r5ret4876(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4876 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4876 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4876 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4877
  * @tc.name : h2dts_gen_4877
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `char8_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4877', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char8_t r5ret4877(int seed);`),
        unions: parseUnion(`char8_t r5ret4877(int seed);`),
        structs: parseStruct(`char8_t r5ret4877(int seed);`),
        classes: parseClass(`char8_t r5ret4877(int seed);`),
        funcs: parseFunction(`char8_t r5ret4877(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4877 生成结果为空');
      const expectSnippet0 = 'export function r5ret4877(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4877 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4877 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4877 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4878
  * @tc.name : h2dts_gen_4878
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `char16_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4878', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char16_t r5ret4878(int seed);`),
        unions: parseUnion(`char16_t r5ret4878(int seed);`),
        structs: parseStruct(`char16_t r5ret4878(int seed);`),
        classes: parseClass(`char16_t r5ret4878(int seed);`),
        funcs: parseFunction(`char16_t r5ret4878(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4878 生成结果为空');
      const expectSnippet0 = 'export function r5ret4878(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4878 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4878 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4878 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4879
  * @tc.name : h2dts_gen_4879
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `char32_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4879', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char32_t r5ret4879(int seed);`),
        unions: parseUnion(`char32_t r5ret4879(int seed);`),
        structs: parseStruct(`char32_t r5ret4879(int seed);`),
        classes: parseClass(`char32_t r5ret4879(int seed);`),
        funcs: parseFunction(`char32_t r5ret4879(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4879 生成结果为空');
      const expectSnippet0 = 'export function r5ret4879(seed: number): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4879 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4879 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4879 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4880
  * @tc.name : h2dts_gen_4880
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::string::iterator` → `IterableIterator<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4880', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::string::iterator r5ret4880(int seed);`),
        unions: parseUnion(`std::string::iterator r5ret4880(int seed);`),
        structs: parseStruct(`std::string::iterator r5ret4880(int seed);`),
        classes: parseClass(`std::string::iterator r5ret4880(int seed);`),
        funcs: parseFunction(`std::string::iterator r5ret4880(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4880 生成结果为空');
      const expectSnippet0 = 'export function r5ret4880(seed: number): IterableIterator<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4880 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4880 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4880 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4881
  * @tc.name : h2dts_gen_4881
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4881', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int> r5ret4881(int seed);`),
        unions: parseUnion(`std::vector<int> r5ret4881(int seed);`),
        structs: parseStruct(`std::vector<int> r5ret4881(int seed);`),
        classes: parseClass(`std::vector<int> r5ret4881(int seed);`),
        funcs: parseFunction(`std::vector<int> r5ret4881(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4881 生成结果为空');
      const expectSnippet0 = 'export function r5ret4881(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4881 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4881 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4881 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4882
  * @tc.name : h2dts_gen_4882
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4882', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<size_t> r5ret4882(int seed);`),
        unions: parseUnion(`std::vector<size_t> r5ret4882(int seed);`),
        structs: parseStruct(`std::vector<size_t> r5ret4882(int seed);`),
        classes: parseClass(`std::vector<size_t> r5ret4882(int seed);`),
        funcs: parseFunction(`std::vector<size_t> r5ret4882(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4882 生成结果为空');
      const expectSnippet0 = 'export function r5ret4882(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4882 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4882 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4882 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4883
  * @tc.name : h2dts_gen_4883
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4883', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<double> r5ret4883(int seed);`),
        unions: parseUnion(`std::vector<double> r5ret4883(int seed);`),
        structs: parseStruct(`std::vector<double> r5ret4883(int seed);`),
        classes: parseClass(`std::vector<double> r5ret4883(int seed);`),
        funcs: parseFunction(`std::vector<double> r5ret4883(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4883 生成结果为空');
      const expectSnippet0 = 'export function r5ret4883(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4883 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4883 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4883 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4884
  * @tc.name : h2dts_gen_4884
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4884', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<float> r5ret4884(int seed);`),
        unions: parseUnion(`std::vector<float> r5ret4884(int seed);`),
        structs: parseStruct(`std::vector<float> r5ret4884(int seed);`),
        classes: parseClass(`std::vector<float> r5ret4884(int seed);`),
        funcs: parseFunction(`std::vector<float> r5ret4884(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4884 生成结果为空');
      const expectSnippet0 = 'export function r5ret4884(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4884 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4884 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4884 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4885
  * @tc.name : h2dts_gen_4885
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4885', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<long> r5ret4885(int seed);`),
        unions: parseUnion(`std::vector<long> r5ret4885(int seed);`),
        structs: parseStruct(`std::vector<long> r5ret4885(int seed);`),
        classes: parseClass(`std::vector<long> r5ret4885(int seed);`),
        funcs: parseFunction(`std::vector<long> r5ret4885(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4885 生成结果为空');
      const expectSnippet0 = 'export function r5ret4885(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4885 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4885 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4885 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4886
  * @tc.name : h2dts_gen_4886
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4886', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<short> r5ret4886(int seed);`),
        unions: parseUnion(`std::vector<short> r5ret4886(int seed);`),
        structs: parseStruct(`std::vector<short> r5ret4886(int seed);`),
        classes: parseClass(`std::vector<short> r5ret4886(int seed);`),
        funcs: parseFunction(`std::vector<short> r5ret4886(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4886 生成结果为空');
      const expectSnippet0 = 'export function r5ret4886(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4886 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4886 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4886 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4887
  * @tc.name : h2dts_gen_4887
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4887', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint8_t> r5ret4887(int seed);`),
        unions: parseUnion(`std::vector<uint8_t> r5ret4887(int seed);`),
        structs: parseStruct(`std::vector<uint8_t> r5ret4887(int seed);`),
        classes: parseClass(`std::vector<uint8_t> r5ret4887(int seed);`),
        funcs: parseFunction(`std::vector<uint8_t> r5ret4887(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4887 生成结果为空');
      const expectSnippet0 = 'export function r5ret4887(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4887 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4887 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4887 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4888
  * @tc.name : h2dts_gen_4888
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4888', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint16_t> r5ret4888(int seed);`),
        unions: parseUnion(`std::vector<uint16_t> r5ret4888(int seed);`),
        structs: parseStruct(`std::vector<uint16_t> r5ret4888(int seed);`),
        classes: parseClass(`std::vector<uint16_t> r5ret4888(int seed);`),
        funcs: parseFunction(`std::vector<uint16_t> r5ret4888(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4888 生成结果为空');
      const expectSnippet0 = 'export function r5ret4888(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4888 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4888 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4888 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4889
  * @tc.name : h2dts_gen_4889
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4889', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint32_t> r5ret4889(int seed);`),
        unions: parseUnion(`std::vector<uint32_t> r5ret4889(int seed);`),
        structs: parseStruct(`std::vector<uint32_t> r5ret4889(int seed);`),
        classes: parseClass(`std::vector<uint32_t> r5ret4889(int seed);`),
        funcs: parseFunction(`std::vector<uint32_t> r5ret4889(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4889 生成结果为空');
      const expectSnippet0 = 'export function r5ret4889(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4889 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4889 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4889 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4890
  * @tc.name : h2dts_gen_4890
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4890', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint64_t> r5ret4890(int seed);`),
        unions: parseUnion(`std::vector<uint64_t> r5ret4890(int seed);`),
        structs: parseStruct(`std::vector<uint64_t> r5ret4890(int seed);`),
        classes: parseClass(`std::vector<uint64_t> r5ret4890(int seed);`),
        funcs: parseFunction(`std::vector<uint64_t> r5ret4890(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4890 生成结果为空');
      const expectSnippet0 = 'export function r5ret4890(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4890 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4890 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4890 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4891
  * @tc.name : h2dts_gen_4891
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::vector<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4891', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int8_t> r5ret4891(int seed);`),
        unions: parseUnion(`std::vector<int8_t> r5ret4891(int seed);`),
        structs: parseStruct(`std::vector<int8_t> r5ret4891(int seed);`),
        classes: parseClass(`std::vector<int8_t> r5ret4891(int seed);`),
        funcs: parseFunction(`std::vector<int8_t> r5ret4891(int seed);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_4891 生成结果为空');
      const expectSnippet0 = 'export function r5ret4891(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4891 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4891 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4891 执行异常: ${String(err)}`);
    }
  });
});
