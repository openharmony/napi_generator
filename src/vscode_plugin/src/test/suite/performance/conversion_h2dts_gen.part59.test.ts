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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part59.');

  /**
  * @tc.number : h2dts_gen_1928
  * @tc.name : h2dts_gen_1928
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1928', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1928 { int fieldA; std::queue<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1928 { int fieldA; std::queue<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1928 { int fieldA; std::queue<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1928 { int fieldA; std::queue<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1928 { int fieldA; std::queue<long> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1928 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1928 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1928 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1928 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1928 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1928 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1929
  * @tc.name : h2dts_gen_1929
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1929', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1929 { int fieldA; std::queue<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1929 { int fieldA; std::queue<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1929 { int fieldA; std::queue<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1929 { int fieldA; std::queue<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1929 { int fieldA; std::queue<short> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1929 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1929 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1929 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1929 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1929 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1929 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1930
  * @tc.name : h2dts_gen_1930
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1930', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1930 { int fieldA; std::queue<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1930 { int fieldA; std::queue<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1930 { int fieldA; std::queue<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1930 { int fieldA; std::queue<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1930 { int fieldA; std::queue<uint8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1930 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1930 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1930 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1930 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1930 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1930 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1931
  * @tc.name : h2dts_gen_1931
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1931', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1931 { int fieldA; std::queue<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1931 { int fieldA; std::queue<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1931 { int fieldA; std::queue<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1931 { int fieldA; std::queue<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1931 { int fieldA; std::queue<uint16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1931 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1931 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1931 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1931 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1931 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1931 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1932
  * @tc.name : h2dts_gen_1932
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1932', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1932 { int fieldA; std::queue<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1932 { int fieldA; std::queue<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1932 { int fieldA; std::queue<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1932 { int fieldA; std::queue<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1932 { int fieldA; std::queue<uint32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1932 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1932 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1932 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1932 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1932 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1932 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1933
  * @tc.name : h2dts_gen_1933
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1933', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1933 { int fieldA; std::queue<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1933 { int fieldA; std::queue<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1933 { int fieldA; std::queue<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1933 { int fieldA; std::queue<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1933 { int fieldA; std::queue<uint64_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1933 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1933 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1933 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1933 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1933 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1933 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1934
  * @tc.name : h2dts_gen_1934
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1934', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1934 { int fieldA; std::queue<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1934 { int fieldA; std::queue<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1934 { int fieldA; std::queue<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1934 { int fieldA; std::queue<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1934 { int fieldA; std::queue<int8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1934 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1934 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1934 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1934 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1934 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1934 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1935
  * @tc.name : h2dts_gen_1935
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1935', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1935 { int fieldA; std::queue<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1935 { int fieldA; std::queue<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1935 { int fieldA; std::queue<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1935 { int fieldA; std::queue<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1935 { int fieldA; std::queue<int16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1935 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1935 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1935 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1935 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1935 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1935 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1936
  * @tc.name : h2dts_gen_1936
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1936', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1936 { int fieldA; std::queue<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1936 { int fieldA; std::queue<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1936 { int fieldA; std::queue<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1936 { int fieldA; std::queue<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1936 { int fieldA; std::queue<int32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1936 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1936 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1936 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1936 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1936 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1936 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1937
  * @tc.name : h2dts_gen_1937
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1937', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1937 { int fieldA; std::queue<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1937 { int fieldA; std::queue<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1937 { int fieldA; std::queue<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1937 { int fieldA; std::queue<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1937 { int fieldA; std::queue<int64_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1937 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1937 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1937 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1937 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1937 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1937 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1938
  * @tc.name : h2dts_gen_1938
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1938', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1938 { int fieldA; std::queue<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1938 { int fieldA; std::queue<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1938 { int fieldA; std::queue<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1938 { int fieldA; std::queue<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1938 { int fieldA; std::queue<unsigned> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1938 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1938 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1938 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1938 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1938 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1938 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1939
  * @tc.name : h2dts_gen_1939
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1939', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1939 { int fieldA; std::queue<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1939 { int fieldA; std::queue<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1939 { int fieldA; std::queue<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1939 { int fieldA; std::queue<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1939 { int fieldA; std::queue<bool> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1939 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1939 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1939 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1939 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1939 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1939 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1940
  * @tc.name : h2dts_gen_1940
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1940', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1940 { int fieldA; std::queue<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1940 { int fieldA; std::queue<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1940 { int fieldA; std::queue<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1940 { int fieldA; std::queue<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1940 { int fieldA; std::queue<char> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1940 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1940 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1940 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1940 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1940 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1940 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1941
  * @tc.name : h2dts_gen_1941
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1941', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1941 { int fieldA; std::queue<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1941 { int fieldA; std::queue<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1941 { int fieldA; std::queue<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1941 { int fieldA; std::queue<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1941 { int fieldA; std::queue<wchar_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1941 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1941 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1941 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1941 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1941 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1941 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1942
  * @tc.name : h2dts_gen_1942
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1942', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1942 { int fieldA; std::queue<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1942 { int fieldA; std::queue<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1942 { int fieldA; std::queue<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1942 { int fieldA; std::queue<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1942 { int fieldA; std::queue<char8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1942 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1942 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1942 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1942 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1942 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1942 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1943
  * @tc.name : h2dts_gen_1943
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1943', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1943 { int fieldA; std::queue<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1943 { int fieldA; std::queue<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1943 { int fieldA; std::queue<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1943 { int fieldA; std::queue<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1943 { int fieldA; std::queue<char16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1943 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1943 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1943 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1943 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1943 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1943 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1944
  * @tc.name : h2dts_gen_1944
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1944', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1944 { int fieldA; std::queue<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1944 { int fieldA; std::queue<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1944 { int fieldA; std::queue<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1944 { int fieldA; std::queue<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1944 { int fieldA; std::queue<char32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1944 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1944 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1944 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1944 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1944 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1944 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1945
  * @tc.name : h2dts_gen_1945
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1945', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1945 { int fieldA; std::valarray<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1945 { int fieldA; std::valarray<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1945 { int fieldA; std::valarray<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1945 { int fieldA; std::valarray<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1945 { int fieldA; std::valarray<int> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1945 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1945 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1945 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1945 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1945 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1945 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1946
  * @tc.name : h2dts_gen_1946
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1946', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1946 { int fieldA; std::valarray<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1946 { int fieldA; std::valarray<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1946 { int fieldA; std::valarray<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1946 { int fieldA; std::valarray<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1946 { int fieldA; std::valarray<size_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1946 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1946 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1946 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1946 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1946 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1946 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1947
  * @tc.name : h2dts_gen_1947
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1947', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1947 { int fieldA; std::valarray<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1947 { int fieldA; std::valarray<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1947 { int fieldA; std::valarray<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1947 { int fieldA; std::valarray<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1947 { int fieldA; std::valarray<double> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1947 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1947 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1947 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1947 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1947 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1947 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1948
  * @tc.name : h2dts_gen_1948
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1948', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1948 { int fieldA; std::valarray<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1948 { int fieldA; std::valarray<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1948 { int fieldA; std::valarray<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1948 { int fieldA; std::valarray<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1948 { int fieldA; std::valarray<float> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1948 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1948 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1948 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1948 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1948 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1948 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1949
  * @tc.name : h2dts_gen_1949
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1949', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1949 { int fieldA; std::valarray<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1949 { int fieldA; std::valarray<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1949 { int fieldA; std::valarray<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1949 { int fieldA; std::valarray<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1949 { int fieldA; std::valarray<long> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1949 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1949 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1949 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1949 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1949 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1949 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1950
  * @tc.name : h2dts_gen_1950
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1950', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1950 { int fieldA; std::valarray<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1950 { int fieldA; std::valarray<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1950 { int fieldA; std::valarray<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1950 { int fieldA; std::valarray<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1950 { int fieldA; std::valarray<short> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1950 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1950 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1950 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1950 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1950 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1950 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1951
  * @tc.name : h2dts_gen_1951
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1951', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1951 { int fieldA; std::valarray<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1951 { int fieldA; std::valarray<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1951 { int fieldA; std::valarray<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1951 { int fieldA; std::valarray<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1951 { int fieldA; std::valarray<uint8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1951 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1951 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1951 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1951 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1951 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1951 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1952
  * @tc.name : h2dts_gen_1952
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1952', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1952 { int fieldA; std::valarray<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1952 { int fieldA; std::valarray<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1952 { int fieldA; std::valarray<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1952 { int fieldA; std::valarray<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1952 { int fieldA; std::valarray<uint16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1952 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1952 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1952 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1952 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1952 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1952 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1953
  * @tc.name : h2dts_gen_1953
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1953', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1953 { int fieldA; std::valarray<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1953 { int fieldA; std::valarray<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1953 { int fieldA; std::valarray<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1953 { int fieldA; std::valarray<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1953 { int fieldA; std::valarray<uint32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1953 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1953 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1953 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1953 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1953 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1953 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1954
  * @tc.name : h2dts_gen_1954
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1954', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1954 { int fieldA; std::valarray<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1954 { int fieldA; std::valarray<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1954 { int fieldA; std::valarray<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1954 { int fieldA; std::valarray<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1954 { int fieldA; std::valarray<uint64_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1954 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1954 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1954 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1954 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1954 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1954 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1955
  * @tc.name : h2dts_gen_1955
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1955', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1955 { int fieldA; std::valarray<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1955 { int fieldA; std::valarray<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1955 { int fieldA; std::valarray<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1955 { int fieldA; std::valarray<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1955 { int fieldA; std::valarray<int8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1955 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1955 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1955 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1955 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1955 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1955 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1956
  * @tc.name : h2dts_gen_1956
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1956', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1956 { int fieldA; std::valarray<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1956 { int fieldA; std::valarray<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1956 { int fieldA; std::valarray<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1956 { int fieldA; std::valarray<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1956 { int fieldA; std::valarray<int16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1956 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1956 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1956 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1956 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1956 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1956 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1957
  * @tc.name : h2dts_gen_1957
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1957', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1957 { int fieldA; std::valarray<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1957 { int fieldA; std::valarray<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1957 { int fieldA; std::valarray<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1957 { int fieldA; std::valarray<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1957 { int fieldA; std::valarray<int32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1957 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1957 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1957 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1957 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1957 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1957 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1958
  * @tc.name : h2dts_gen_1958
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1958', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1958 { int fieldA; std::valarray<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1958 { int fieldA; std::valarray<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1958 { int fieldA; std::valarray<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1958 { int fieldA; std::valarray<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1958 { int fieldA; std::valarray<int64_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1958 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1958 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1958 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1958 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1958 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1958 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1959
  * @tc.name : h2dts_gen_1959
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1959', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1959 { int fieldA; std::valarray<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1959 { int fieldA; std::valarray<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1959 { int fieldA; std::valarray<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1959 { int fieldA; std::valarray<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1959 { int fieldA; std::valarray<unsigned> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1959 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1959 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1959 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1959 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1959 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1959 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1960
  * @tc.name : h2dts_gen_1960
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1960', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1960 { int fieldA; std::valarray<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1960 { int fieldA; std::valarray<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1960 { int fieldA; std::valarray<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1960 { int fieldA; std::valarray<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1960 { int fieldA; std::valarray<bool> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1960 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1960 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1960 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1960 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1960 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1960 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1961
  * @tc.name : h2dts_gen_1961
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1961', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1961 { int fieldA; std::valarray<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1961 { int fieldA; std::valarray<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1961 { int fieldA; std::valarray<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1961 { int fieldA; std::valarray<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1961 { int fieldA; std::valarray<char> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1961 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1961 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1961 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1961 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1961 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1961 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1962
  * @tc.name : h2dts_gen_1962
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1962', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1962 { int fieldA; std::valarray<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1962 { int fieldA; std::valarray<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1962 { int fieldA; std::valarray<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1962 { int fieldA; std::valarray<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1962 { int fieldA; std::valarray<wchar_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_1962 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1962 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1962 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1962 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1962 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1962 执行异常: ${String(err)}`);
    }
  });
});
