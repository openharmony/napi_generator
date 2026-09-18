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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part39.');

  /**
  * @tc.number : h2dts_gen_1273
  * @tc.name : h2dts_gen_1273
  * @tc.desc : h2dts gen：扩充-getDtsStructs API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1273', () => {
    try {
      const DECL = `typedef struct ApiSt01 { int x; float y; int sum(int a, int b); } ApiSt01;`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1273 生成结果为空');
      const expectSnippet0 = 'export type ApiSt01 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1273 生成结果缺少片段 0');
      const expectSnippet1 = 'x: number;';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1273 生成结果缺少片段 1');
      const expectSnippet2 = 'y: number;';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1273 生成结果缺少片段 2');
      const expectSnippet3 = 'sum(a: number, b: number): number;';
      assert.ok(result.includes(expectSnippet3), 'h2dts_gen_1273 生成结果缺少片段 3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1274
  * @tc.name : h2dts_gen_1274
  * @tc.desc : h2dts gen：扩充-getDtsStructs API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1274', () => {
    try {
      const DECL = `typedef struct ApiSt02 { char label[16]; bool active; } ApiSt02;`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1274 生成结果为空');
      const expectSnippet0 = 'export type ApiSt02 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1274 生成结果缺少片段 0');
      const expectSnippet1 = 'label: string;';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1274 生成结果缺少片段 1');
      const expectSnippet2 = 'active: boolean;';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1274 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1275
  * @tc.name : h2dts_gen_1275
  * @tc.desc : h2dts gen：扩充-getDtsEnum API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1275', () => {
    try {
      const DECL = `typedef enum { API_E_A, API_E_B, API_E_C } ApiEnum01;`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsEnum(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1275 生成结果为空');
      const expectSnippet0 = 'export enum ApiEnum01 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1275 生成结果缺少片段 0');
      const expectSnippet1 = 'API_E_A,';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1275 生成结果缺少片段 1');
      const expectSnippet2 = 'API_E_B,';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1275 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1276
  * @tc.name : h2dts_gen_1276
  * @tc.desc : h2dts gen：扩充-getDtsEnum API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1276', () => {
    try {
      const DECL = `enum ApiEnum02 { VAL_0 = 0, VAL_1 = 1, VAL_2 = 2 };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsEnum(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1276 生成结果为空');
      const expectSnippet0 = 'export enum ApiEnum02 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1276 生成结果缺少片段 0');
      const expectSnippet1 = 'VAL_0=0,';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1276 生成结果缺少片段 1');
      const expectSnippet2 = 'VAL_1=1,';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1276 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1276 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1276 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1277
  * @tc.name : h2dts_gen_1277
  * @tc.desc : h2dts gen：扩充-getDtsUnions API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1277', () => {
    try {
      const DECL = `typedef union { int i; float f; char c[4]; } ApiUnion01;`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsUnions(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1277 生成结果为空');
      const expectSnippet0 = 'export type ApiUnion01 =';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1277 生成结果缺少片段 0');
      const expectSnippet1 = 'number | number | string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1277 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1277 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1277 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1278
  * @tc.name : h2dts_gen_1278
  * @tc.desc : h2dts gen：扩充-getDtsFunction API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1278', () => {
    try {
      const DECL = `void apiFn01(int a, std::string b);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1278 生成结果为空');
      const expectSnippet0 = 'export function apiFn01(a: number, b: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1278 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1278 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1279
  * @tc.name : h2dts_gen_1279
  * @tc.desc : h2dts gen：扩充-getDtsFunction API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1279', () => {
    try {
      const DECL = `int apiFn02(std::vector<double> data);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1279 生成结果为空');
      const expectSnippet0 = 'export function apiFn02(data: Array<number>): number;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1279 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1279 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1280
  * @tc.name : h2dts_gen_1280
  * @tc.desc : h2dts gen：扩充-getDtsFunction API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1280', () => {
    try {
      const DECL = `bool apiFn03(std::map<std::string, int> table);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1280 生成结果为空');
      const expectSnippet0 = 'export function apiFn03(table: Map<string, number>): boolean;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1280 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1280 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1280 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1281
  * @tc.name : h2dts_gen_1281
  * @tc.desc : h2dts gen：扩充-getDtsStructs API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1281', () => {
    try {
      const DECL = `typedef struct ApiSt03 { int ids; std::string queue; } ApiSt03;`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1281 生成结果为空');
      const expectSnippet0 = 'export type ApiSt03 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1281 生成结果缺少片段 0');
      const expectSnippet1 = 'ids: number;';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1281 生成结果缺少片段 1');
      const expectSnippet2 = 'queue: string;';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1281 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1281 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1281 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1282
  * @tc.name : h2dts_gen_1282
  * @tc.desc : h2dts gen：扩充-getDtsFunction API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1282', () => {
    try {
      const DECL = `void apiFn04(std::shared_ptr<int> ptr, std::optional<std::string> label);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1282 生成结果为空');
      const expectSnippet0 = 'export function apiFn04(';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1282 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1282 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1282 执行异常: ${String(err)}`);
    }
  });
});
