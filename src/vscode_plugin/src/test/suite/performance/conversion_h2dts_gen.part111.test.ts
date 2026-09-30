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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part111.');
  /**
  * @tc.number : h2dts_gen_3733
  * @tc.name : h2dts_gen_3733
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3733', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3733 { std::string value; void set(int v); } R5St3733;`),
        unions: parseUnion(`typedef struct R5St3733 { std::string value; void set(int v); } R5St3733;`),
        structs: parseStruct(`typedef struct R5St3733 { std::string value; void set(int v); } R5St3733;`),
        classes: parseClass(`typedef struct R5St3733 { std::string value; void set(int v); } R5St3733;`),
        funcs: parseFunction(`typedef struct R5St3733 { std::string value; void set(int v); } R5St3733;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3733 生成结果为空');
      const expectSnippet0 = 'export type R5St3733 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3733 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3733 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3733 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3733 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3734
  * @tc.name : h2dts_gen_3734
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3734', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3734 { float value; void reset(); } R5St3734;`),
        unions: parseUnion(`typedef struct R5St3734 { float value; void reset(); } R5St3734;`),
        structs: parseStruct(`typedef struct R5St3734 { float value; void reset(); } R5St3734;`),
        classes: parseClass(`typedef struct R5St3734 { float value; void reset(); } R5St3734;`),
        funcs: parseFunction(`typedef struct R5St3734 { float value; void reset(); } R5St3734;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3734 生成结果为空');
      const expectSnippet0 = 'export type R5St3734 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3734 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3734 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3734 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3734 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3735
  * @tc.name : h2dts_gen_3735
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3735', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3735 { float value; int sum(int a, int b); } R5St3735;`),
        unions: parseUnion(`typedef struct R5St3735 { float value; int sum(int a, int b); } R5St3735;`),
        structs: parseStruct(`typedef struct R5St3735 { float value; int sum(int a, int b); } R5St3735;`),
        classes: parseClass(`typedef struct R5St3735 { float value; int sum(int a, int b); } R5St3735;`),
        funcs: parseFunction(`typedef struct R5St3735 { float value; int sum(int a, int b); } R5St3735;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3735 生成结果为空');
      const expectSnippet0 = 'export type R5St3735 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3735 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3735 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3735 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3735 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3736
  * @tc.name : h2dts_gen_3736
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3736', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3736 { float value; bool check() const; } R5St3736;`),
        unions: parseUnion(`typedef struct R5St3736 { float value; bool check() const; } R5St3736;`),
        structs: parseStruct(`typedef struct R5St3736 { float value; bool check() const; } R5St3736;`),
        classes: parseClass(`typedef struct R5St3736 { float value; bool check() const; } R5St3736;`),
        funcs: parseFunction(`typedef struct R5St3736 { float value; bool check() const; } R5St3736;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3736 生成结果为空');
      const expectSnippet0 = 'export type R5St3736 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3736 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3736 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3736 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3736 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3737
  * @tc.name : h2dts_gen_3737
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3737', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3737 { float value; std::string label(); } R5St3737;`),
        unions: parseUnion(`typedef struct R5St3737 { float value; std::string label(); } R5St3737;`),
        structs: parseStruct(`typedef struct R5St3737 { float value; std::string label(); } R5St3737;`),
        classes: parseClass(`typedef struct R5St3737 { float value; std::string label(); } R5St3737;`),
        funcs: parseFunction(`typedef struct R5St3737 { float value; std::string label(); } R5St3737;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3737 生成结果为空');
      const expectSnippet0 = 'export type R5St3737 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3737 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3737 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3737 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3737 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3738
  * @tc.name : h2dts_gen_3738
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3738', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3738 { float value; double ratio(); } R5St3738;`),
        unions: parseUnion(`typedef struct R5St3738 { float value; double ratio(); } R5St3738;`),
        structs: parseStruct(`typedef struct R5St3738 { float value; double ratio(); } R5St3738;`),
        classes: parseClass(`typedef struct R5St3738 { float value; double ratio(); } R5St3738;`),
        funcs: parseFunction(`typedef struct R5St3738 { float value; double ratio(); } R5St3738;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3738 生成结果为空');
      const expectSnippet0 = 'export type R5St3738 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3738 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3738 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3738 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3738 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3739
  * @tc.name : h2dts_gen_3739
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3739', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3739 { float value; void set(int v); } R5St3739;`),
        unions: parseUnion(`typedef struct R5St3739 { float value; void set(int v); } R5St3739;`),
        structs: parseStruct(`typedef struct R5St3739 { float value; void set(int v); } R5St3739;`),
        classes: parseClass(`typedef struct R5St3739 { float value; void set(int v); } R5St3739;`),
        funcs: parseFunction(`typedef struct R5St3739 { float value; void set(int v); } R5St3739;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3739 生成结果为空');
      const expectSnippet0 = 'export type R5St3739 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3739 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3739 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3739 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3739 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3740
  * @tc.name : h2dts_gen_3740
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3740', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3740 { long long value; void reset(); } R5St3740;`),
        unions: parseUnion(`typedef struct R5St3740 { long long value; void reset(); } R5St3740;`),
        structs: parseStruct(`typedef struct R5St3740 { long long value; void reset(); } R5St3740;`),
        classes: parseClass(`typedef struct R5St3740 { long long value; void reset(); } R5St3740;`),
        funcs: parseFunction(`typedef struct R5St3740 { long long value; void reset(); } R5St3740;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3740 生成结果为空');
      const expectSnippet0 = 'export type R5St3740 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3740 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3740 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3740 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3740 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3741
  * @tc.name : h2dts_gen_3741
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3741', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3741 { long long value; int sum(int a, int b); } R5St3741;`),
        unions: parseUnion(`typedef struct R5St3741 { long long value; int sum(int a, int b); } R5St3741;`),
        structs: parseStruct(`typedef struct R5St3741 { long long value; int sum(int a, int b); } R5St3741;`),
        classes: parseClass(`typedef struct R5St3741 { long long value; int sum(int a, int b); } R5St3741;`),
        funcs: parseFunction(`typedef struct R5St3741 { long long value; int sum(int a, int b); } R5St3741;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3741 生成结果为空');
      const expectSnippet0 = 'export type R5St3741 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3741 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3741 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3741 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3741 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3742
  * @tc.name : h2dts_gen_3742
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3742', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3742 { long long value; bool check() const; } R5St3742;`),
        unions: parseUnion(`typedef struct R5St3742 { long long value; bool check() const; } R5St3742;`),
        structs: parseStruct(`typedef struct R5St3742 { long long value; bool check() const; } R5St3742;`),
        classes: parseClass(`typedef struct R5St3742 { long long value; bool check() const; } R5St3742;`),
        funcs: parseFunction(`typedef struct R5St3742 { long long value; bool check() const; } R5St3742;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3742 生成结果为空');
      const expectSnippet0 = 'export type R5St3742 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3742 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3742 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3742 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3742 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3743
  * @tc.name : h2dts_gen_3743
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3743', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3743 { long long value; std::string label(); } R5St3743;`),
        unions: parseUnion(`typedef struct R5St3743 { long long value; std::string label(); } R5St3743;`),
        structs: parseStruct(`typedef struct R5St3743 { long long value; std::string label(); } R5St3743;`),
        classes: parseClass(`typedef struct R5St3743 { long long value; std::string label(); } R5St3743;`),
        funcs: parseFunction(`typedef struct R5St3743 { long long value; std::string label(); } R5St3743;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3743 生成结果为空');
      const expectSnippet0 = 'export type R5St3743 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3743 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3743 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3743 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3743 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3744
  * @tc.name : h2dts_gen_3744
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3744', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3744 { long long value; double ratio(); } R5St3744;`),
        unions: parseUnion(`typedef struct R5St3744 { long long value; double ratio(); } R5St3744;`),
        structs: parseStruct(`typedef struct R5St3744 { long long value; double ratio(); } R5St3744;`),
        classes: parseClass(`typedef struct R5St3744 { long long value; double ratio(); } R5St3744;`),
        funcs: parseFunction(`typedef struct R5St3744 { long long value; double ratio(); } R5St3744;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3744 生成结果为空');
      const expectSnippet0 = 'export type R5St3744 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3744 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3744 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3744 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3744 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3745
  * @tc.name : h2dts_gen_3745
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `long long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3745', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3745 { long long value; void set(int v); } R5St3745;`),
        unions: parseUnion(`typedef struct R5St3745 { long long value; void set(int v); } R5St3745;`),
        structs: parseStruct(`typedef struct R5St3745 { long long value; void set(int v); } R5St3745;`),
        classes: parseClass(`typedef struct R5St3745 { long long value; void set(int v); } R5St3745;`),
        funcs: parseFunction(`typedef struct R5St3745 { long long value; void set(int v); } R5St3745;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3745 生成结果为空');
      const expectSnippet0 = 'export type R5St3745 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3745 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3745 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3745 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3745 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3746
  * @tc.name : h2dts_gen_3746
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3746', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3746 { unsigned int value; void reset(); } R5St3746;`),
        unions: parseUnion(`typedef struct R5St3746 { unsigned int value; void reset(); } R5St3746;`),
        structs: parseStruct(`typedef struct R5St3746 { unsigned int value; void reset(); } R5St3746;`),
        classes: parseClass(`typedef struct R5St3746 { unsigned int value; void reset(); } R5St3746;`),
        funcs: parseFunction(`typedef struct R5St3746 { unsigned int value; void reset(); } R5St3746;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3746 生成结果为空');
      const expectSnippet0 = 'export type R5St3746 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3746 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3746 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3746 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3746 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3747
  * @tc.name : h2dts_gen_3747
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3747', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3747 { unsigned int value; int sum(int a, int b); } R5St3747;`),
        unions: parseUnion(`typedef struct R5St3747 { unsigned int value; int sum(int a, int b); } R5St3747;`),
        structs: parseStruct(`typedef struct R5St3747 { unsigned int value; int sum(int a, int b); } R5St3747;`),
        classes: parseClass(`typedef struct R5St3747 { unsigned int value; int sum(int a, int b); } R5St3747;`),
        funcs: parseFunction(`typedef struct R5St3747 { unsigned int value; int sum(int a, int b); } R5St3747;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3747 生成结果为空');
      const expectSnippet0 = 'export type R5St3747 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3747 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3747 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3747 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3747 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3748
  * @tc.name : h2dts_gen_3748
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3748', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3748 { unsigned int value; bool check() const; } R5St3748;`),
        unions: parseUnion(`typedef struct R5St3748 { unsigned int value; bool check() const; } R5St3748;`),
        structs: parseStruct(`typedef struct R5St3748 { unsigned int value; bool check() const; } R5St3748;`),
        classes: parseClass(`typedef struct R5St3748 { unsigned int value; bool check() const; } R5St3748;`),
        funcs: parseFunction(`typedef struct R5St3748 { unsigned int value; bool check() const; } R5St3748;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3748 生成结果为空');
      const expectSnippet0 = 'export type R5St3748 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3748 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3748 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3748 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3748 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3749
  * @tc.name : h2dts_gen_3749
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3749', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3749 { unsigned int value; std::string label(); } R5St3749;`),
        unions: parseUnion(`typedef struct R5St3749 { unsigned int value; std::string label(); } R5St3749;`),
        structs: parseStruct(`typedef struct R5St3749 { unsigned int value; std::string label(); } R5St3749;`),
        classes: parseClass(`typedef struct R5St3749 { unsigned int value; std::string label(); } R5St3749;`),
        funcs: parseFunction(`typedef struct R5St3749 { unsigned int value; std::string label(); } R5St3749;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3749 生成结果为空');
      const expectSnippet0 = 'export type R5St3749 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3749 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3749 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3749 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3749 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3750
  * @tc.name : h2dts_gen_3750
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3750', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3750 { unsigned int value; double ratio(); } R5St3750;`),
        unions: parseUnion(`typedef struct R5St3750 { unsigned int value; double ratio(); } R5St3750;`),
        structs: parseStruct(`typedef struct R5St3750 { unsigned int value; double ratio(); } R5St3750;`),
        classes: parseClass(`typedef struct R5St3750 { unsigned int value; double ratio(); } R5St3750;`),
        funcs: parseFunction(`typedef struct R5St3750 { unsigned int value; double ratio(); } R5St3750;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3750 生成结果为空');
      const expectSnippet0 = 'export type R5St3750 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3750 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3750 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3750 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3750 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3751
  * @tc.name : h2dts_gen_3751
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `unsigned int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3751', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3751 { unsigned int value; void set(int v); } R5St3751;`),
        unions: parseUnion(`typedef struct R5St3751 { unsigned int value; void set(int v); } R5St3751;`),
        structs: parseStruct(`typedef struct R5St3751 { unsigned int value; void set(int v); } R5St3751;`),
        classes: parseClass(`typedef struct R5St3751 { unsigned int value; void set(int v); } R5St3751;`),
        funcs: parseFunction(`typedef struct R5St3751 { unsigned int value; void set(int v); } R5St3751;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3751 生成结果为空');
      const expectSnippet0 = 'export type R5St3751 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3751 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3751 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3751 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3751 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3752
  * @tc.name : h2dts_gen_3752
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3752', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3752 { size_t value; void reset(); } R5St3752;`),
        unions: parseUnion(`typedef struct R5St3752 { size_t value; void reset(); } R5St3752;`),
        structs: parseStruct(`typedef struct R5St3752 { size_t value; void reset(); } R5St3752;`),
        classes: parseClass(`typedef struct R5St3752 { size_t value; void reset(); } R5St3752;`),
        funcs: parseFunction(`typedef struct R5St3752 { size_t value; void reset(); } R5St3752;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3752 生成结果为空');
      const expectSnippet0 = 'export type R5St3752 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3752 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3752 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3752 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3752 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3753
  * @tc.name : h2dts_gen_3753
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3753', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3753 { size_t value; int sum(int a, int b); } R5St3753;`),
        unions: parseUnion(`typedef struct R5St3753 { size_t value; int sum(int a, int b); } R5St3753;`),
        structs: parseStruct(`typedef struct R5St3753 { size_t value; int sum(int a, int b); } R5St3753;`),
        classes: parseClass(`typedef struct R5St3753 { size_t value; int sum(int a, int b); } R5St3753;`),
        funcs: parseFunction(`typedef struct R5St3753 { size_t value; int sum(int a, int b); } R5St3753;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3753 生成结果为空');
      const expectSnippet0 = 'export type R5St3753 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3753 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3753 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3753 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3753 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3754
  * @tc.name : h2dts_gen_3754
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3754', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3754 { size_t value; bool check() const; } R5St3754;`),
        unions: parseUnion(`typedef struct R5St3754 { size_t value; bool check() const; } R5St3754;`),
        structs: parseStruct(`typedef struct R5St3754 { size_t value; bool check() const; } R5St3754;`),
        classes: parseClass(`typedef struct R5St3754 { size_t value; bool check() const; } R5St3754;`),
        funcs: parseFunction(`typedef struct R5St3754 { size_t value; bool check() const; } R5St3754;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3754 生成结果为空');
      const expectSnippet0 = 'export type R5St3754 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3754 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3754 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3754 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3754 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3755
  * @tc.name : h2dts_gen_3755
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3755', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3755 { size_t value; std::string label(); } R5St3755;`),
        unions: parseUnion(`typedef struct R5St3755 { size_t value; std::string label(); } R5St3755;`),
        structs: parseStruct(`typedef struct R5St3755 { size_t value; std::string label(); } R5St3755;`),
        classes: parseClass(`typedef struct R5St3755 { size_t value; std::string label(); } R5St3755;`),
        funcs: parseFunction(`typedef struct R5St3755 { size_t value; std::string label(); } R5St3755;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3755 生成结果为空');
      const expectSnippet0 = 'export type R5St3755 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3755 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3755 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3755 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3755 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3756
  * @tc.name : h2dts_gen_3756
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3756', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3756 { size_t value; double ratio(); } R5St3756;`),
        unions: parseUnion(`typedef struct R5St3756 { size_t value; double ratio(); } R5St3756;`),
        structs: parseStruct(`typedef struct R5St3756 { size_t value; double ratio(); } R5St3756;`),
        classes: parseClass(`typedef struct R5St3756 { size_t value; double ratio(); } R5St3756;`),
        funcs: parseFunction(`typedef struct R5St3756 { size_t value; double ratio(); } R5St3756;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3756 生成结果为空');
      const expectSnippet0 = 'export type R5St3756 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3756 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3756 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3756 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3756 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3757
  * @tc.name : h2dts_gen_3757
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3757', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St3757 { size_t value; void set(int v); } R5St3757;`),
        unions: parseUnion(`typedef struct R5St3757 { size_t value; void set(int v); } R5St3757;`),
        structs: parseStruct(`typedef struct R5St3757 { size_t value; void set(int v); } R5St3757;`),
        classes: parseClass(`typedef struct R5St3757 { size_t value; void set(int v); } R5St3757;`),
        funcs: parseFunction(`typedef struct R5St3757 { size_t value; void set(int v); } R5St3757;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_3757 生成结果为空');
      const expectSnippet0 = 'export type R5St3757 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3757 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3757 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3757 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3757 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3758
  * @tc.name : h2dts_gen_3758
  * @tc.desc : h2dts gen：扩充-R5-getDtsStructs API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3758', () => {
    try {
      const DECL = `typedef struct R5ApiSt1 { int x; void reset(); int add(int a); } R5ApiSt1;`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3758 生成结果为空');
      const expectSnippet0 = 'reset(): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3758 生成结果缺少片段 0');
      const expectSnippet1 = 'export type R5ApiSt1 = {';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3758 生成结果缺少片段 1');
      const expectSnippet2 = 'x: number;';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3758 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3758 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3758 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3759
  * @tc.name : h2dts_gen_3759
  * @tc.desc : h2dts gen：扩充-R5-getDtsStructs API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3759', () => {
    try {
      const DECL = `typedef struct R5ApiSt2 { double lat; double lon; bool valid; } R5ApiSt2;`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3759 生成结果为空');
      const expectSnippet0 = 'export type R5ApiSt2 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3759 生成结果缺少片段 0');
      const expectSnippet1 = 'lat: number;';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3759 生成结果缺少片段 1');
      const expectSnippet2 = 'valid: boolean;';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3759 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3759 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3759 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3760
  * @tc.name : h2dts_gen_3760
  * @tc.desc : h2dts gen：扩充-R5-getDtsEnum API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3760', () => {
    try {
      const DECL = `enum R5ApiEn1 { Alpha, Beta, Gamma, Delta };`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3760 生成结果为空');
      const expectSnippet0 = 'export enum R5ApiEn1 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3760 生成结果缺少片段 0');
      const expectSnippet1 = 'Alpha,';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3760 生成结果缺少片段 1');
      const expectSnippet2 = 'Beta,';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_3760 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3760 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3760 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3761
  * @tc.name : h2dts_gen_3761
  * @tc.desc : h2dts gen：扩充-R5-getDtsEnum API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3761', () => {
    try {
      const DECL = `typedef enum { R5_E1, R5_E2, R5_E3 } R5ApiEn2;`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3761 生成结果为空');
      const expectSnippet0 = 'export enum R5ApiEn2 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3761 生成结果缺少片段 0');
      const expectSnippet1 = 'R5_E1,';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_3761 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3761 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3761 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3762
  * @tc.name : h2dts_gen_3762
  * @tc.desc : h2dts gen：扩充-R5-getDtsUnions API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3762', () => {
    try {
      const DECL = `typedef union { int iv; double dv; char tag[8]; } R5ApiU1;`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3762 生成结果为空');
      const expectSnippet0 = 'export type R5ApiU1 =';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3762 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3762 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3762 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3763
  * @tc.name : h2dts_gen_3763
  * @tc.desc : h2dts gen：扩充-R5-getDtsUnions API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3763', () => {
    try {
      const DECL = `typedef union { bool flag; int code; float score; } R5ApiU2;`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3763 生成结果为空');
      const expectSnippet0 = 'export type R5ApiU2 =';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3763 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3763 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3763 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3764
  * @tc.name : h2dts_gen_3764
  * @tc.desc : h2dts gen：扩充-R5-getDtsFunction API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3764', () => {
    try {
      const DECL = `std::string r5apiFn1(int code, bool ok);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3764 生成结果为空');
      const expectSnippet0 = 'export function r5apiFn1(code: number, ok: boolean): string;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3764 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3764 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3764 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3765
  * @tc.name : h2dts_gen_3765
  * @tc.desc : h2dts gen：扩充-R5-getDtsFunction API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3765', () => {
    try {
      const DECL = `bool r5apiFn2(std::vector<std::string> names, int limit);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3765 生成结果为空');
      const expectSnippet0 = 'export function r5apiFn2(names: Array<string>, limit: number): boolean;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3765 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3765 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3765 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3766
  * @tc.name : h2dts_gen_3766
  * @tc.desc : h2dts gen：扩充-R5-getDtsFunction API 场景 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3766', () => {
    try {
      const DECL = `void r5apiFn3(const std::string& label, int& counter);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3766 生成结果为空');
      const expectSnippet0 = 'export function r5apiFn3(): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3766 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3766 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3766 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_3767
  * @tc.name : h2dts_gen_3767
  * @tc.desc : h2dts gen：扩充-R5-genDtsFile `r5mix01` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_3767', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5Mix1 { int x; float y; void norm(); } R5Mix1;
enum R5Mode { Fast, Slow };
void r5mixFn1(R5Mode m);`),
        unions: parseUnion(`typedef struct R5Mix1 { int x; float y; void norm(); } R5Mix1;
enum R5Mode { Fast, Slow };
void r5mixFn1(R5Mode m);`),
        structs: parseStruct(`typedef struct R5Mix1 { int x; float y; void norm(); } R5Mix1;
enum R5Mode { Fast, Slow };
void r5mixFn1(R5Mode m);`),
        classes: parseClass(`typedef struct R5Mix1 { int x; float y; void norm(); } R5Mix1;
enum R5Mode { Fast, Slow };
void r5mixFn1(R5Mode m);`),
        funcs: parseFunction(`typedef struct R5Mix1 { int x; float y; void norm(); } R5Mix1;
enum R5Mode { Fast, Slow };
void r5mixFn1(R5Mode m);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r5mix01' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_3767 生成结果为空');
      assert.ok(result.includes('r5mix01.d.ts'), 'h2dts_gen_3767 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export type R5Mix1 = {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_3767 文件内容缺少片段 0');
      const contentSnippet1 = 'export enum R5Mode {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_3767 文件内容缺少片段 1');
      const contentSnippet2 = 'export function r5mixFn1(';
      assert.ok(content.includes(contentSnippet2), 'h2dts_gen_3767 文件内容缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_3767 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_3767 执行异常: ${String(err)}`);
    }
  });
});
