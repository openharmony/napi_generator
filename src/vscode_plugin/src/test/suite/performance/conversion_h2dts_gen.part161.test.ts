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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part161.');

  /**
  * @tc.number : h2dts_gen_5452
  * @tc.name : h2dts_gen_5452
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5452', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5452 { std::string value; void set(int v); } R5St5452;`),
        unions: parseUnion(`typedef struct R5St5452 { std::string value; void set(int v); } R5St5452;`),
        structs: parseStruct(`typedef struct R5St5452 { std::string value; void set(int v); } R5St5452;`),
        classes: parseClass(`typedef struct R5St5452 { std::string value; void set(int v); } R5St5452;`),
        funcs: parseFunction(`typedef struct R5St5452 { std::string value; void set(int v); } R5St5452;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5452 生成结果为空');
      const expectSnippet0 = 'export type R5St5452 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5452 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5452 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5452 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5452 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5453
  * @tc.name : h2dts_gen_5453
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5453', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5453 { float value; void reset(); } R5St5453;`),
        unions: parseUnion(`typedef struct R5St5453 { float value; void reset(); } R5St5453;`),
        structs: parseStruct(`typedef struct R5St5453 { float value; void reset(); } R5St5453;`),
        classes: parseClass(`typedef struct R5St5453 { float value; void reset(); } R5St5453;`),
        funcs: parseFunction(`typedef struct R5St5453 { float value; void reset(); } R5St5453;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5453 生成结果为空');
      const expectSnippet0 = 'export type R5St5453 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5453 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5453 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5453 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5454
  * @tc.name : h2dts_gen_5454
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5454', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5454 { float value; int sum(int a, int b); } R5St5454;`),
        unions: parseUnion(`typedef struct R5St5454 { float value; int sum(int a, int b); } R5St5454;`),
        structs: parseStruct(`typedef struct R5St5454 { float value; int sum(int a, int b); } R5St5454;`),
        classes: parseClass(`typedef struct R5St5454 { float value; int sum(int a, int b); } R5St5454;`),
        funcs: parseFunction(`typedef struct R5St5454 { float value; int sum(int a, int b); } R5St5454;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5454 生成结果为空');
      const expectSnippet0 = 'export type R5St5454 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5454 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5454 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5454 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5455
  * @tc.name : h2dts_gen_5455
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5455', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5455 { float value; bool check() const; } R5St5455;`),
        unions: parseUnion(`typedef struct R5St5455 { float value; bool check() const; } R5St5455;`),
        structs: parseStruct(`typedef struct R5St5455 { float value; bool check() const; } R5St5455;`),
        classes: parseClass(`typedef struct R5St5455 { float value; bool check() const; } R5St5455;`),
        funcs: parseFunction(`typedef struct R5St5455 { float value; bool check() const; } R5St5455;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5455 生成结果为空');
      const expectSnippet0 = 'export type R5St5455 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5455 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5455 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5455 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5455 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5456
  * @tc.name : h2dts_gen_5456
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5456', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5456 { float value; std::string label(); } R5St5456;`),
        unions: parseUnion(`typedef struct R5St5456 { float value; std::string label(); } R5St5456;`),
        structs: parseStruct(`typedef struct R5St5456 { float value; std::string label(); } R5St5456;`),
        classes: parseClass(`typedef struct R5St5456 { float value; std::string label(); } R5St5456;`),
        funcs: parseFunction(`typedef struct R5St5456 { float value; std::string label(); } R5St5456;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5456 生成结果为空');
      const expectSnippet0 = 'export type R5St5456 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5456 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5456 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5456 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5457
  * @tc.name : h2dts_gen_5457
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5457', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5457 { float value; double ratio(); } R5St5457;`),
        unions: parseUnion(`typedef struct R5St5457 { float value; double ratio(); } R5St5457;`),
        structs: parseStruct(`typedef struct R5St5457 { float value; double ratio(); } R5St5457;`),
        classes: parseClass(`typedef struct R5St5457 { float value; double ratio(); } R5St5457;`),
        funcs: parseFunction(`typedef struct R5St5457 { float value; double ratio(); } R5St5457;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5457 生成结果为空');
      const expectSnippet0 = 'export type R5St5457 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5457 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5457 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5457 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5458
  * @tc.name : h2dts_gen_5458
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5458', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5458 { float value; void set(int v); } R5St5458;`),
        unions: parseUnion(`typedef struct R5St5458 { float value; void set(int v); } R5St5458;`),
        structs: parseStruct(`typedef struct R5St5458 { float value; void set(int v); } R5St5458;`),
        classes: parseClass(`typedef struct R5St5458 { float value; void set(int v); } R5St5458;`),
        funcs: parseFunction(`typedef struct R5St5458 { float value; void set(int v); } R5St5458;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5458 生成结果为空');
      const expectSnippet0 = 'export type R5St5458 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5458 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5458 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5458 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5459
  * @tc.name : h2dts_gen_5459
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5459', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5459 { long long value; void reset(); } R5St5459;`),
        unions: parseUnion(`typedef struct R5St5459 { long long value; void reset(); } R5St5459;`),
        structs: parseStruct(`typedef struct R5St5459 { long long value; void reset(); } R5St5459;`),
        classes: parseClass(`typedef struct R5St5459 { long long value; void reset(); } R5St5459;`),
        funcs: parseFunction(`typedef struct R5St5459 { long long value; void reset(); } R5St5459;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5459 生成结果为空');
      const expectSnippet0 = 'export type R5St5459 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5459 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5459 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5459 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5459 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5460
  * @tc.name : h2dts_gen_5460
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5460', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5460 { long long value; int sum(int a, int b); } R5St5460;`),
        unions: parseUnion(`typedef struct R5St5460 { long long value; int sum(int a, int b); } R5St5460;`),
        structs: parseStruct(`typedef struct R5St5460 { long long value; int sum(int a, int b); } R5St5460;`),
        classes: parseClass(`typedef struct R5St5460 { long long value; int sum(int a, int b); } R5St5460;`),
        funcs: parseFunction(`typedef struct R5St5460 { long long value; int sum(int a, int b); } R5St5460;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5460 生成结果为空');
      const expectSnippet0 = 'export type R5St5460 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5460 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5460 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5460 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5461
  * @tc.name : h2dts_gen_5461
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5461', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5461 { long long value; bool check() const; } R5St5461;`),
        unions: parseUnion(`typedef struct R5St5461 { long long value; bool check() const; } R5St5461;`),
        structs: parseStruct(`typedef struct R5St5461 { long long value; bool check() const; } R5St5461;`),
        classes: parseClass(`typedef struct R5St5461 { long long value; bool check() const; } R5St5461;`),
        funcs: parseFunction(`typedef struct R5St5461 { long long value; bool check() const; } R5St5461;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5461 生成结果为空');
      const expectSnippet0 = 'export type R5St5461 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5461 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5461 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5461 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5462
  * @tc.name : h2dts_gen_5462
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5462', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5462 { long long value; std::string label(); } R5St5462;`),
        unions: parseUnion(`typedef struct R5St5462 { long long value; std::string label(); } R5St5462;`),
        structs: parseStruct(`typedef struct R5St5462 { long long value; std::string label(); } R5St5462;`),
        classes: parseClass(`typedef struct R5St5462 { long long value; std::string label(); } R5St5462;`),
        funcs: parseFunction(`typedef struct R5St5462 { long long value; std::string label(); } R5St5462;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5462 生成结果为空');
      const expectSnippet0 = 'export type R5St5462 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5462 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5462 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5462 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5463
  * @tc.name : h2dts_gen_5463
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5463', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5463 { long long value; double ratio(); } R5St5463;`),
        unions: parseUnion(`typedef struct R5St5463 { long long value; double ratio(); } R5St5463;`),
        structs: parseStruct(`typedef struct R5St5463 { long long value; double ratio(); } R5St5463;`),
        classes: parseClass(`typedef struct R5St5463 { long long value; double ratio(); } R5St5463;`),
        funcs: parseFunction(`typedef struct R5St5463 { long long value; double ratio(); } R5St5463;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5463 生成结果为空');
      const expectSnippet0 = 'export type R5St5463 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5463 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5463 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5463 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5464
  * @tc.name : h2dts_gen_5464
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5464', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5464 { long long value; void set(int v); } R5St5464;`),
        unions: parseUnion(`typedef struct R5St5464 { long long value; void set(int v); } R5St5464;`),
        structs: parseStruct(`typedef struct R5St5464 { long long value; void set(int v); } R5St5464;`),
        classes: parseClass(`typedef struct R5St5464 { long long value; void set(int v); } R5St5464;`),
        funcs: parseFunction(`typedef struct R5St5464 { long long value; void set(int v); } R5St5464;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5464 生成结果为空');
      const expectSnippet0 = 'export type R5St5464 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5464 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5464 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5464 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5465
  * @tc.name : h2dts_gen_5465
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5465', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5465 { unsigned int value; void reset(); } R5St5465;`),
        unions: parseUnion(`typedef struct R5St5465 { unsigned int value; void reset(); } R5St5465;`),
        structs: parseStruct(`typedef struct R5St5465 { unsigned int value; void reset(); } R5St5465;`),
        classes: parseClass(`typedef struct R5St5465 { unsigned int value; void reset(); } R5St5465;`),
        funcs: parseFunction(`typedef struct R5St5465 { unsigned int value; void reset(); } R5St5465;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5465 生成结果为空');
      const expectSnippet0 = 'export type R5St5465 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5465 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5465 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5465 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5466
  * @tc.name : h2dts_gen_5466
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5466', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5466 { unsigned int value; int sum(int a, int b); } R5St5466;`),
        unions: parseUnion(`typedef struct R5St5466 { unsigned int value; int sum(int a, int b); } R5St5466;`),
        structs: parseStruct(`typedef struct R5St5466 { unsigned int value; int sum(int a, int b); } R5St5466;`),
        classes: parseClass(`typedef struct R5St5466 { unsigned int value; int sum(int a, int b); } R5St5466;`),
        funcs: parseFunction(`typedef struct R5St5466 { unsigned int value; int sum(int a, int b); } R5St5466;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5466 生成结果为空');
      const expectSnippet0 = 'export type R5St5466 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5466 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5466 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5466 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5467
  * @tc.name : h2dts_gen_5467
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5467', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5467 { unsigned int value; bool check() const; } R5St5467;`),
        unions: parseUnion(`typedef struct R5St5467 { unsigned int value; bool check() const; } R5St5467;`),
        structs: parseStruct(`typedef struct R5St5467 { unsigned int value; bool check() const; } R5St5467;`),
        classes: parseClass(`typedef struct R5St5467 { unsigned int value; bool check() const; } R5St5467;`),
        funcs: parseFunction(`typedef struct R5St5467 { unsigned int value; bool check() const; } R5St5467;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5467 生成结果为空');
      const expectSnippet0 = 'export type R5St5467 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5467 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5467 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5467 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5468
  * @tc.name : h2dts_gen_5468
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5468', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5468 { unsigned int value; std::string label(); } R5St5468;`),
        unions: parseUnion(`typedef struct R5St5468 { unsigned int value; std::string label(); } R5St5468;`),
        structs: parseStruct(`typedef struct R5St5468 { unsigned int value; std::string label(); } R5St5468;`),
        classes: parseClass(`typedef struct R5St5468 { unsigned int value; std::string label(); } R5St5468;`),
        funcs: parseFunction(`typedef struct R5St5468 { unsigned int value; std::string label(); } R5St5468;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5468 生成结果为空');
      const expectSnippet0 = 'export type R5St5468 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5468 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5468 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5468 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5469
  * @tc.name : h2dts_gen_5469
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5469', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5469 { unsigned int value; double ratio(); } R5St5469;`),
        unions: parseUnion(`typedef struct R5St5469 { unsigned int value; double ratio(); } R5St5469;`),
        structs: parseStruct(`typedef struct R5St5469 { unsigned int value; double ratio(); } R5St5469;`),
        classes: parseClass(`typedef struct R5St5469 { unsigned int value; double ratio(); } R5St5469;`),
        funcs: parseFunction(`typedef struct R5St5469 { unsigned int value; double ratio(); } R5St5469;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5469 生成结果为空');
      const expectSnippet0 = 'export type R5St5469 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5469 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5469 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5469 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5470
  * @tc.name : h2dts_gen_5470
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5470', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5470 { unsigned int value; void set(int v); } R5St5470;`),
        unions: parseUnion(`typedef struct R5St5470 { unsigned int value; void set(int v); } R5St5470;`),
        structs: parseStruct(`typedef struct R5St5470 { unsigned int value; void set(int v); } R5St5470;`),
        classes: parseClass(`typedef struct R5St5470 { unsigned int value; void set(int v); } R5St5470;`),
        funcs: parseFunction(`typedef struct R5St5470 { unsigned int value; void set(int v); } R5St5470;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5470 生成结果为空');
      const expectSnippet0 = 'export type R5St5470 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5470 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5470 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5470 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5471
  * @tc.name : h2dts_gen_5471
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5471', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5471 { size_t value; void reset(); } R5St5471;`),
        unions: parseUnion(`typedef struct R5St5471 { size_t value; void reset(); } R5St5471;`),
        structs: parseStruct(`typedef struct R5St5471 { size_t value; void reset(); } R5St5471;`),
        classes: parseClass(`typedef struct R5St5471 { size_t value; void reset(); } R5St5471;`),
        funcs: parseFunction(`typedef struct R5St5471 { size_t value; void reset(); } R5St5471;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5471 生成结果为空');
      const expectSnippet0 = 'export type R5St5471 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5471 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5471 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5471 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5471 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5472
  * @tc.name : h2dts_gen_5472
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5472', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5472 { size_t value; int sum(int a, int b); } R5St5472;`),
        unions: parseUnion(`typedef struct R5St5472 { size_t value; int sum(int a, int b); } R5St5472;`),
        structs: parseStruct(`typedef struct R5St5472 { size_t value; int sum(int a, int b); } R5St5472;`),
        classes: parseClass(`typedef struct R5St5472 { size_t value; int sum(int a, int b); } R5St5472;`),
        funcs: parseFunction(`typedef struct R5St5472 { size_t value; int sum(int a, int b); } R5St5472;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5472 生成结果为空');
      const expectSnippet0 = 'export type R5St5472 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5472 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5472 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5472 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5472 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5473
  * @tc.name : h2dts_gen_5473
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5473', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5473 { size_t value; bool check() const; } R5St5473;`),
        unions: parseUnion(`typedef struct R5St5473 { size_t value; bool check() const; } R5St5473;`),
        structs: parseStruct(`typedef struct R5St5473 { size_t value; bool check() const; } R5St5473;`),
        classes: parseClass(`typedef struct R5St5473 { size_t value; bool check() const; } R5St5473;`),
        funcs: parseFunction(`typedef struct R5St5473 { size_t value; bool check() const; } R5St5473;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5473 生成结果为空');
      const expectSnippet0 = 'export type R5St5473 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5473 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5473 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5473 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5474
  * @tc.name : h2dts_gen_5474
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5474', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5474 { size_t value; std::string label(); } R5St5474;`),
        unions: parseUnion(`typedef struct R5St5474 { size_t value; std::string label(); } R5St5474;`),
        structs: parseStruct(`typedef struct R5St5474 { size_t value; std::string label(); } R5St5474;`),
        classes: parseClass(`typedef struct R5St5474 { size_t value; std::string label(); } R5St5474;`),
        funcs: parseFunction(`typedef struct R5St5474 { size_t value; std::string label(); } R5St5474;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5474 生成结果为空');
      const expectSnippet0 = 'export type R5St5474 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5474 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5474 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5474 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5475
  * @tc.name : h2dts_gen_5475
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5475', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5475 { size_t value; double ratio(); } R5St5475;`),
        unions: parseUnion(`typedef struct R5St5475 { size_t value; double ratio(); } R5St5475;`),
        structs: parseStruct(`typedef struct R5St5475 { size_t value; double ratio(); } R5St5475;`),
        classes: parseClass(`typedef struct R5St5475 { size_t value; double ratio(); } R5St5475;`),
        funcs: parseFunction(`typedef struct R5St5475 { size_t value; double ratio(); } R5St5475;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5475 生成结果为空');
      const expectSnippet0 = 'export type R5St5475 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5475 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5475 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5475 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5476
  * @tc.name : h2dts_gen_5476
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5476', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5476 { size_t value; void set(int v); } R5St5476;`),
        unions: parseUnion(`typedef struct R5St5476 { size_t value; void set(int v); } R5St5476;`),
        structs: parseStruct(`typedef struct R5St5476 { size_t value; void set(int v); } R5St5476;`),
        classes: parseClass(`typedef struct R5St5476 { size_t value; void set(int v); } R5St5476;`),
        funcs: parseFunction(`typedef struct R5St5476 { size_t value; void set(int v); } R5St5476;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsStructs(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_5476 生成结果为空');
      const expectSnippet0 = 'export type R5St5476 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5476 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5476 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5476 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5476 执行异常: ${String(err)}`);
    }
  });
});
