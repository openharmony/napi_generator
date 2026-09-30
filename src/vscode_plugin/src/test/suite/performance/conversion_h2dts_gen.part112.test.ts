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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part112.');

  /**
  * @tc.number : h2dts_gen_3768
  * @tc.name : h2dts_gen_3768
  * @tc.desc : h2dts gen：扩充-R5-genDtsFile `r5mix02` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3768', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int i; double d; } R5U;
class R5Box { R5U data; bool empty(); };
void r5mixFn2(R5Box& b);`),
        unions: parseUnion(`typedef union { int i; double d; } R5U;
class R5Box { R5U data; bool empty(); };
void r5mixFn2(R5Box& b);`),
        structs: parseStruct(`typedef union { int i; double d; } R5U;
class R5Box { R5U data; bool empty(); };
void r5mixFn2(R5Box& b);`),
        classes: parseClass(`typedef union { int i; double d; } R5U;
class R5Box { R5U data; bool empty(); };
void r5mixFn2(R5Box& b);`),
        funcs: parseFunction(`typedef union { int i; double d; } R5U;
class R5Box { R5U data; bool empty(); };
void r5mixFn2(R5Box& b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r5mix02' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3768 生成结果为空');
      assert.ok(result.includes('r5mix02.d.ts'), 'h2dts_gen_3768 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export type R5U =';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_3768 文件内容缺少片段 0');
      const contentSnippet1 = 'export class R5Box {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_3768 文件内容缺少片段 1');
      const contentSnippet2 = 'export function r5mixFn2(';
      assert.ok(content.includes(contentSnippet2), 'h2dts_gen_3768 文件内容缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3768 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3768 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3769
  * @tc.name : h2dts_gen_3769
  * @tc.desc : h2dts gen：扩充-R5-genDtsFile `r5mix03` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3769', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace r5ns { class Worker { int id; std::string role; void run(); }; }
typedef enum { Idle, Busy } R5State;
int r5mixFn3();`),
        unions: parseUnion(`namespace r5ns { class Worker { int id; std::string role; void run(); }; }
typedef enum { Idle, Busy } R5State;
int r5mixFn3();`),
        structs: parseStruct(`namespace r5ns { class Worker { int id; std::string role; void run(); }; }
typedef enum { Idle, Busy } R5State;
int r5mixFn3();`),
        classes: parseClass(`namespace r5ns { class Worker { int id; std::string role; void run(); }; }
typedef enum { Idle, Busy } R5State;
int r5mixFn3();`),
        funcs: parseFunction(`namespace r5ns { class Worker { int id; std::string role; void run(); }; }
typedef enum { Idle, Busy } R5State;
int r5mixFn3();`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r5mix03' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3769 生成结果为空');
      assert.ok(result.includes('r5mix03.d.ts'), 'h2dts_gen_3769 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export class Worker {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_3769 文件内容缺少片段 0');
      const contentSnippet1 = 'export enum R5State {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_3769 文件内容缺少片段 1');
      const contentSnippet2 = 'export function r5mixFn3(';
      assert.ok(content.includes(contentSnippet2), 'h2dts_gen_3769 文件内容缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3769 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3769 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3770
  * @tc.name : h2dts_gen_3770
  * @tc.desc : h2dts gen：扩充-R5-genDtsFile `r5mix04` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3770', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Svc { std::vector<double> samples; double mean(); };
typedef struct { char name[32]; int port; } R5Endpoint;
bool r5mixFn4(R5Endpoint ep);`),
        unions: parseUnion(`class R5Svc { std::vector<double> samples; double mean(); };
typedef struct { char name[32]; int port; } R5Endpoint;
bool r5mixFn4(R5Endpoint ep);`),
        structs: parseStruct(`class R5Svc { std::vector<double> samples; double mean(); };
typedef struct { char name[32]; int port; } R5Endpoint;
bool r5mixFn4(R5Endpoint ep);`),
        classes: parseClass(`class R5Svc { std::vector<double> samples; double mean(); };
typedef struct { char name[32]; int port; } R5Endpoint;
bool r5mixFn4(R5Endpoint ep);`),
        funcs: parseFunction(`class R5Svc { std::vector<double> samples; double mean(); };
typedef struct { char name[32]; int port; } R5Endpoint;
bool r5mixFn4(R5Endpoint ep);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r5mix04' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3770 生成结果为空');
      assert.ok(result.includes('r5mix04.d.ts'), 'h2dts_gen_3770 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export class R5Svc {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_3770 文件内容缺少片段 0');
      const contentSnippet1 = 'export type R5Endpoint = {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_3770 文件内容缺少片段 1');
      const contentSnippet2 = 'export function r5mixFn4(';
      assert.ok(content.includes(contentSnippet2), 'h2dts_gen_3770 文件内容缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3770 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3770 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3771
  * @tc.name : h2dts_gen_3771
  * @tc.desc : h2dts gen：扩充-R5-genDtsFile `r5mix05` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3771', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5Node { int key; std::string val; R5Node* next; } R5Node;
void r5mixFn5(R5Node* head);`),
        unions: parseUnion(`typedef struct R5Node { int key; std::string val; R5Node* next; } R5Node;
void r5mixFn5(R5Node* head);`),
        structs: parseStruct(`typedef struct R5Node { int key; std::string val; R5Node* next; } R5Node;
void r5mixFn5(R5Node* head);`),
        classes: parseClass(`typedef struct R5Node { int key; std::string val; R5Node* next; } R5Node;
void r5mixFn5(R5Node* head);`),
        funcs: parseFunction(`typedef struct R5Node { int key; std::string val; R5Node* next; } R5Node;
void r5mixFn5(R5Node* head);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r5mix05' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3771 生成结果为空');
      assert.ok(result.includes('r5mix05.d.ts'), 'h2dts_gen_3771 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export type R5Node = {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_3771 文件内容缺少片段 0');
      const contentSnippet1 = 'export function r5mixFn5(';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_3771 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3771 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3771 执行异常: ${String(err)}`);
    }
  });
});
