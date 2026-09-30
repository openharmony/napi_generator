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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part40.');

  /**
  * @tc.number : h2dts_gen_1283
  * @tc.name : h2dts_gen_1283
  * @tc.desc : h2dts gen：扩充-genDtsFile 混合场景 `r3mix01` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1283', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r3Fn01(int a, std::string b);
class R3Cls01 { int id; std::string name; };`),
        unions: parseUnion(`void r3Fn01(int a, std::string b);
class R3Cls01 { int id; std::string name; };`),
        structs: parseStruct(`void r3Fn01(int a, std::string b);
class R3Cls01 { int id; std::string name; };`),
        classes: parseClass(`void r3Fn01(int a, std::string b);
class R3Cls01 { int id; std::string name; };`),
        funcs: parseFunction(`void r3Fn01(int a, std::string b);
class R3Cls01 { int id; std::string name; };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r3mix01' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1283 生成结果为空');
      assert.ok(result.includes('r3mix01.d.ts'), 'h2dts_gen_1283 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export function r3Fn01(';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_1283 文件内容缺少片段 0');
      const contentSnippet1 = 'export class R3Cls01 {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_1283 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1283 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1283 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1284
  * @tc.name : h2dts_gen_1284
  * @tc.desc : h2dts gen：扩充-genDtsFile 混合场景 `r3mix02` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1284', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { R3_A, R3_B } R3E;
typedef struct { int x; int y; } R3S;`),
        unions: parseUnion(`typedef enum { R3_A, R3_B } R3E;
typedef struct { int x; int y; } R3S;`),
        structs: parseStruct(`typedef enum { R3_A, R3_B } R3E;
typedef struct { int x; int y; } R3S;`),
        classes: parseClass(`typedef enum { R3_A, R3_B } R3E;
typedef struct { int x; int y; } R3S;`),
        funcs: parseFunction(`typedef enum { R3_A, R3_B } R3E;
typedef struct { int x; int y; } R3S;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r3mix02' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1284 生成结果为空');
      assert.ok(result.includes('r3mix02.d.ts'), 'h2dts_gen_1284 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export enum R3E {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_1284 文件内容缺少片段 0');
      const contentSnippet1 = 'export type R3S = {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_1284 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1284 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1284 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1285
  * @tc.name : h2dts_gen_1285
  * @tc.desc : h2dts gen：扩充-genDtsFile 混合场景 `r3mix03` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1285', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int i; float f; } R3U;
void r3Fn02(R3U u);`),
        unions: parseUnion(`typedef union { int i; float f; } R3U;
void r3Fn02(R3U u);`),
        structs: parseStruct(`typedef union { int i; float f; } R3U;
void r3Fn02(R3U u);`),
        classes: parseClass(`typedef union { int i; float f; } R3U;
void r3Fn02(R3U u);`),
        funcs: parseFunction(`typedef union { int i; float f; } R3U;
void r3Fn02(R3U u);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r3mix03' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1285 生成结果为空');
      assert.ok(result.includes('r3mix03.d.ts'), 'h2dts_gen_1285 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export type R3U =';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_1285 文件内容缺少片段 0');
      const contentSnippet1 = 'export function r3Fn02(';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_1285 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1285 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1286
  * @tc.name : h2dts_gen_1286
  * @tc.desc : h2dts gen：扩充-genDtsFile 混合场景 `r3mix04` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1286', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R3Cls02 { std::vector<int> data; bool empty(); };
int r3Fn03(std::vector<double> v);`),
        unions: parseUnion(`class R3Cls02 { std::vector<int> data; bool empty(); };
int r3Fn03(std::vector<double> v);`),
        structs: parseStruct(`class R3Cls02 { std::vector<int> data; bool empty(); };
int r3Fn03(std::vector<double> v);`),
        classes: parseClass(`class R3Cls02 { std::vector<int> data; bool empty(); };
int r3Fn03(std::vector<double> v);`),
        funcs: parseFunction(`class R3Cls02 { std::vector<int> data; bool empty(); };
int r3Fn03(std::vector<double> v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r3mix04' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1286 生成结果为空');
      assert.ok(result.includes('r3mix04.d.ts'), 'h2dts_gen_1286 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export class R3Cls02 {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_1286 文件内容缺少片段 0');
      const contentSnippet1 = 'export function r3Fn03(';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_1286 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1286 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1287
  * @tc.name : h2dts_gen_1287
  * @tc.desc : h2dts gen：扩充-genDtsFile 混合场景 `r3mix05` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1287', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R3St { int a; float b; int sum(int x); } R3St;
enum R3Mode { Fast, Slow };`),
        unions: parseUnion(`typedef struct R3St { int a; float b; int sum(int x); } R3St;
enum R3Mode { Fast, Slow };`),
        structs: parseStruct(`typedef struct R3St { int a; float b; int sum(int x); } R3St;
enum R3Mode { Fast, Slow };`),
        classes: parseClass(`typedef struct R3St { int a; float b; int sum(int x); } R3St;
enum R3Mode { Fast, Slow };`),
        funcs: parseFunction(`typedef struct R3St { int a; float b; int sum(int x); } R3St;
enum R3Mode { Fast, Slow };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r3mix05' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1287 生成结果为空');
      assert.ok(result.includes('r3mix05.d.ts'), 'h2dts_gen_1287 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export type R3St = {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_1287 文件内容缺少片段 0');
      const contentSnippet1 = 'export enum R3Mode {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_1287 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1287 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1287 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1288
  * @tc.name : h2dts_gen_1288
  * @tc.desc : h2dts gen：扩充-genDtsFile 混合场景 `r3mix06` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1288', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace r3ns { class Inner { int v; void run(); }; }
void r3Fn04();`),
        unions: parseUnion(`namespace r3ns { class Inner { int v; void run(); }; }
void r3Fn04();`),
        structs: parseStruct(`namespace r3ns { class Inner { int v; void run(); }; }
void r3Fn04();`),
        classes: parseClass(`namespace r3ns { class Inner { int v; void run(); }; }
void r3Fn04();`),
        funcs: parseFunction(`namespace r3ns { class Inner { int v; void run(); }; }
void r3Fn04();`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r3mix06' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1288 生成结果为空');
      assert.ok(result.includes('r3mix06.d.ts'), 'h2dts_gen_1288 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export class Inner {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_1288 文件内容缺少片段 0');
      const contentSnippet1 = 'export function r3Fn04(';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_1288 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1288 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1289
  * @tc.name : h2dts_gen_1289
  * @tc.desc : h2dts gen：扩充-genDtsFile 混合场景 `r3mix07` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1289', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R3Cls03 { static int count; int getId(); };
typedef struct { char label[32]; bool ok; } R3Lbl;`),
        unions: parseUnion(`class R3Cls03 { static int count; int getId(); };
typedef struct { char label[32]; bool ok; } R3Lbl;`),
        structs: parseStruct(`class R3Cls03 { static int count; int getId(); };
typedef struct { char label[32]; bool ok; } R3Lbl;`),
        classes: parseClass(`class R3Cls03 { static int count; int getId(); };
typedef struct { char label[32]; bool ok; } R3Lbl;`),
        funcs: parseFunction(`class R3Cls03 { static int count; int getId(); };
typedef struct { char label[32]; bool ok; } R3Lbl;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r3mix07' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1289 生成结果为空');
      assert.ok(result.includes('r3mix07.d.ts'), 'h2dts_gen_1289 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export class R3Cls03 {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_1289 文件内容缺少片段 0');
      const contentSnippet1 = 'export type R3Lbl = {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_1289 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1289 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1289 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1290
  * @tc.name : h2dts_gen_1290
  * @tc.desc : h2dts gen：扩充-genDtsFile 混合场景 `r3mix08` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1290', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r3Fn05(std::map<std::string, int> table);
class R3Cls04 { std::map<int, std::string> rev; };`),
        unions: parseUnion(`void r3Fn05(std::map<std::string, int> table);
class R3Cls04 { std::map<int, std::string> rev; };`),
        structs: parseStruct(`void r3Fn05(std::map<std::string, int> table);
class R3Cls04 { std::map<int, std::string> rev; };`),
        classes: parseClass(`void r3Fn05(std::map<std::string, int> table);
class R3Cls04 { std::map<int, std::string> rev; };`),
        funcs: parseFunction(`void r3Fn05(std::map<std::string, int> table);
class R3Cls04 { std::map<int, std::string> rev; };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r3mix08' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1290 生成结果为空');
      assert.ok(result.includes('r3mix08.d.ts'), 'h2dts_gen_1290 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export function r3Fn05(';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_1290 文件内容缺少片段 0');
      const contentSnippet1 = 'export class R3Cls04 {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_1290 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1290 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1290 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1291
  * @tc.name : h2dts_gen_1291
  * @tc.desc : h2dts gen：扩充-R3-getDtsStructs 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1291', () => {
    try {
      const DECL = `typedef struct ApiSt04 { long ts; int code; std::string msg; } ApiSt04;`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
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
      assert.ok(result.length > 0, 'h2dts_gen_1291 生成结果为空');
      const expectSnippet0 = 'export type ApiSt04 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1291 生成结果缺少片段 0');
      const expectSnippet1 = 'ts: number;';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1291 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1291 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1291 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1292
  * @tc.name : h2dts_gen_1292
  * @tc.desc : h2dts gen：扩充-R3-getDtsStructs 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1292', () => {
    try {
      const DECL = `typedef struct ApiSt05 { bool ok; int errno; char detail[64]; } ApiSt05;`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
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
      assert.ok(result.length > 0, 'h2dts_gen_1292 生成结果为空');
      const expectSnippet0 = 'export type ApiSt05 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1292 生成结果缺少片段 0');
      const expectSnippet1 = 'ok: boolean;';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1292 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1292 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1292 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1293
  * @tc.name : h2dts_gen_1293
  * @tc.desc : h2dts gen：扩充-R3-getDtsEnum 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1293', () => {
    try {
      const DECL = `enum ApiEnum03 { Idle, Busy, Done, Error };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
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
      assert.ok(result.length > 0, 'h2dts_gen_1293 生成结果为空');
      const expectSnippet0 = 'export enum ApiEnum03 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1293 生成结果缺少片段 0');
      const expectSnippet1 = 'Idle,';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1293 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1293 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1294
  * @tc.name : h2dts_gen_1294
  * @tc.desc : h2dts gen：扩充-R3-getDtsEnum 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1294', () => {
    try {
      const DECL = `typedef enum { OPT_A = 1, OPT_B = 2, OPT_C = 4 } ApiEnum04;`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
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
      assert.ok(result.length > 0, 'h2dts_gen_1294 生成结果为空');
      const expectSnippet0 = 'export enum ApiEnum04 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1294 生成结果缺少片段 0');
      const expectSnippet1 = 'OPT_A=1,';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1294 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1294 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1294 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1295
  * @tc.name : h2dts_gen_1295
  * @tc.desc : h2dts gen：扩充-R3-getDtsUnions 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1295', () => {
    try {
      const DECL = `typedef union { int iv; double dv; } ApiUnion02;`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
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
      assert.ok(result.length > 0, 'h2dts_gen_1295 生成结果为空');
      const expectSnippet0 = 'export type ApiUnion02 = number | number ;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1295 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1295 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1296
  * @tc.name : h2dts_gen_1296
  * @tc.desc : h2dts gen：扩充-R3-getDtsFunction 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1296', () => {
    try {
      const DECL = `std::string apiFn05(int code, const char* msg);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
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
      assert.ok(result.length > 0, 'h2dts_gen_1296 生成结果为空');
      const expectSnippet0 = 'export function apiFn05(code: number, msg: string): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1296 生成结果缺少片段 0');
      const expectSnippet1 = 'export function apiFn05Async(code: number, msg: string, cbf: (param: string) => void): void;';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1296 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1296 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1297
  * @tc.name : h2dts_gen_1297
  * @tc.desc : h2dts gen：扩充-R3-getDtsFunction 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1297', () => {
    try {
      const DECL = `bool apiFn06(long a, long b, long c);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
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
      assert.ok(result.length > 0, 'h2dts_gen_1297 生成结果为空');
      const expectSnippet0 = 'export function apiFn06(a: number, b: number, c: number): boolean;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1297 生成结果缺少片段 0');
      const expectSnippet1 = 'export function apiFn06Async(a: number, b: number, c: number, cbf: (param: boolean) => void): void;';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1297 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1297 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1297 执行异常: ${String(err)}`);
    }
  });
});
