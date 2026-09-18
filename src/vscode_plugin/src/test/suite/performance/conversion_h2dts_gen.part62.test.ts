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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part62.');

  /**
  * @tc.number : h2dts_gen_2033
  * @tc.name : h2dts_gen_2033
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2033', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2033 { int fieldA; std::multiset<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2033 { int fieldA; std::multiset<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2033 { int fieldA; std::multiset<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2033 { int fieldA; std::multiset<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2033 { int fieldA; std::multiset<long> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2033 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2033 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2033 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2033 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2033 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2034
  * @tc.name : h2dts_gen_2034
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2034', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2034 { int fieldA; std::multiset<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2034 { int fieldA; std::multiset<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2034 { int fieldA; std::multiset<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2034 { int fieldA; std::multiset<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2034 { int fieldA; std::multiset<short> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2034 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2034 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2034 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2034 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2034 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2035
  * @tc.name : h2dts_gen_2035
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2035', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2035 { int fieldA; std::multiset<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2035 { int fieldA; std::multiset<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2035 { int fieldA; std::multiset<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2035 { int fieldA; std::multiset<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2035 { int fieldA; std::multiset<uint8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2035 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2035 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2035 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2035 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2035 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2036
  * @tc.name : h2dts_gen_2036
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2036', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2036 { int fieldA; std::multiset<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2036 { int fieldA; std::multiset<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2036 { int fieldA; std::multiset<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2036 { int fieldA; std::multiset<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2036 { int fieldA; std::multiset<uint16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2036 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2036 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2036 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2036 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2036 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2037
  * @tc.name : h2dts_gen_2037
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2037', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2037 { int fieldA; std::multiset<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2037 { int fieldA; std::multiset<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2037 { int fieldA; std::multiset<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2037 { int fieldA; std::multiset<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2037 { int fieldA; std::multiset<uint32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2037 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2037 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2037 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2037 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2037 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2038
  * @tc.name : h2dts_gen_2038
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2038', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2038 { int fieldA; std::multiset<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2038 { int fieldA; std::multiset<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2038 { int fieldA; std::multiset<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2038 { int fieldA; std::multiset<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2038 { int fieldA; std::multiset<uint64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2038 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2038 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2038 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2038 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2038 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2039
  * @tc.name : h2dts_gen_2039
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2039', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2039 { int fieldA; std::multiset<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2039 { int fieldA; std::multiset<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2039 { int fieldA; std::multiset<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2039 { int fieldA; std::multiset<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2039 { int fieldA; std::multiset<int8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2039 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2039 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2039 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2039 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2039 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2040
  * @tc.name : h2dts_gen_2040
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2040', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2040 { int fieldA; std::multiset<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2040 { int fieldA; std::multiset<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2040 { int fieldA; std::multiset<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2040 { int fieldA; std::multiset<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2040 { int fieldA; std::multiset<int16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2040 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2040 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2040 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2040 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2040 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2041
  * @tc.name : h2dts_gen_2041
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2041', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2041 { int fieldA; std::multiset<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2041 { int fieldA; std::multiset<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2041 { int fieldA; std::multiset<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2041 { int fieldA; std::multiset<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2041 { int fieldA; std::multiset<int32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2041 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2041 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2041 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2041 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2041 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2042
  * @tc.name : h2dts_gen_2042
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2042', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2042 { int fieldA; std::multiset<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2042 { int fieldA; std::multiset<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2042 { int fieldA; std::multiset<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2042 { int fieldA; std::multiset<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2042 { int fieldA; std::multiset<int64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2042 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2042 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2042 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2042 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2042 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2043
  * @tc.name : h2dts_gen_2043
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2043', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2043 { int fieldA; std::multiset<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2043 { int fieldA; std::multiset<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2043 { int fieldA; std::multiset<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2043 { int fieldA; std::multiset<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2043 { int fieldA; std::multiset<unsigned> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2043 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2043 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2043 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2043 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2043 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2044
  * @tc.name : h2dts_gen_2044
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2044', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2044 { int fieldA; std::multiset<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2044 { int fieldA; std::multiset<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2044 { int fieldA; std::multiset<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2044 { int fieldA; std::multiset<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2044 { int fieldA; std::multiset<bool> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2044 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2044 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2044 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2044 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<boolean>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2044 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2045
  * @tc.name : h2dts_gen_2045
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2045', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2045 { int fieldA; std::multiset<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2045 { int fieldA; std::multiset<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2045 { int fieldA; std::multiset<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2045 { int fieldA; std::multiset<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2045 { int fieldA; std::multiset<char> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2045 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2045 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2045 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2045 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2045 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2046
  * @tc.name : h2dts_gen_2046
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2046', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2046 { int fieldA; std::multiset<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2046 { int fieldA; std::multiset<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2046 { int fieldA; std::multiset<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2046 { int fieldA; std::multiset<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2046 { int fieldA; std::multiset<wchar_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2046 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2046 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2046 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2046 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2046 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2047
  * @tc.name : h2dts_gen_2047
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2047', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2047 { int fieldA; std::multiset<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2047 { int fieldA; std::multiset<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2047 { int fieldA; std::multiset<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2047 { int fieldA; std::multiset<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2047 { int fieldA; std::multiset<char8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2047 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2047 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2047 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2047 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2047 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2048
  * @tc.name : h2dts_gen_2048
  * @tc.desc : h2dts gen：扩充-R4-genDtsFile `r4mix01` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2048', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4A { int a; std::string b; };
void r4aFn(int x);`),
        unions: parseUnion(`class R4A { int a; std::string b; };
void r4aFn(int x);`),
        structs: parseStruct(`class R4A { int a; std::string b; };
void r4aFn(int x);`),
        classes: parseClass(`class R4A { int a; std::string b; };
void r4aFn(int x);`),
        funcs: parseFunction(`class R4A { int a; std::string b; };
void r4aFn(int x);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r4mix01' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2048 生成结果为空');
      assert.ok(result.includes('r4mix01.d.ts'), 'h2dts_gen_2048 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export class R4A {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_2048 文件内容缺少片段 0');
      const contentSnippet1 = 'export function r4aFn(';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_2048 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2049
  * @tc.name : h2dts_gen_2049
  * @tc.desc : h2dts gen：扩充-R4-genDtsFile `r4mix02` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2049', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { R4E1, R4E2 } R4E;
class R4B { R4E mode; int v; };`),
        unions: parseUnion(`typedef enum { R4E1, R4E2 } R4E;
class R4B { R4E mode; int v; };`),
        structs: parseStruct(`typedef enum { R4E1, R4E2 } R4E;
class R4B { R4E mode; int v; };`),
        classes: parseClass(`typedef enum { R4E1, R4E2 } R4E;
class R4B { R4E mode; int v; };`),
        funcs: parseFunction(`typedef enum { R4E1, R4E2 } R4E;
class R4B { R4E mode; int v; };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r4mix02' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2049 生成结果为空');
      assert.ok(result.includes('r4mix02.d.ts'), 'h2dts_gen_2049 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export enum R4E {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_2049 文件内容缺少片段 0');
      const contentSnippet1 = 'export class R4B {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_2049 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2050
  * @tc.name : h2dts_gen_2050
  * @tc.desc : h2dts gen：扩充-R4-genDtsFile `r4mix03` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2050', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R4S { double x, y; } R4S;
class R4C { R4S pos; void move(); };`),
        unions: parseUnion(`typedef struct R4S { double x, y; } R4S;
class R4C { R4S pos; void move(); };`),
        structs: parseStruct(`typedef struct R4S { double x, y; } R4S;
class R4C { R4S pos; void move(); };`),
        classes: parseClass(`typedef struct R4S { double x, y; } R4S;
class R4C { R4S pos; void move(); };`),
        funcs: parseFunction(`typedef struct R4S { double x, y; } R4S;
class R4C { R4S pos; void move(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r4mix03' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2050 生成结果为空');
      assert.ok(result.includes('r4mix03.d.ts'), 'h2dts_gen_2050 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export type R4S = {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_2050 文件内容缺少片段 0');
      const contentSnippet1 = 'export class R4C {';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_2050 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2051
  * @tc.name : h2dts_gen_2051
  * @tc.desc : h2dts gen：扩充-R4-genDtsFile `r4mix04` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2051', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int i; float f; } R4U;
void r4uFn(R4U u);`),
        unions: parseUnion(`typedef union { int i; float f; } R4U;
void r4uFn(R4U u);`),
        structs: parseStruct(`typedef union { int i; float f; } R4U;
void r4uFn(R4U u);`),
        classes: parseClass(`typedef union { int i; float f; } R4U;
void r4uFn(R4U u);`),
        funcs: parseFunction(`typedef union { int i; float f; } R4U;
void r4uFn(R4U u);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r4mix04' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2051 生成结果为空');
      assert.ok(result.includes('r4mix04.d.ts'), 'h2dts_gen_2051 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export type R4U =';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_2051 文件内容缺少片段 0');
      const contentSnippet1 = 'export function r4uFn(';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_2051 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2052
  * @tc.name : h2dts_gen_2052
  * @tc.desc : h2dts gen：扩充-R4-genDtsFile `r4mix05` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2052', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace r4ns { class Worker { int id; void work(); }; }
int r4main();`),
        unions: parseUnion(`namespace r4ns { class Worker { int id; void work(); }; }
int r4main();`),
        structs: parseStruct(`namespace r4ns { class Worker { int id; void work(); }; }
int r4main();`),
        classes: parseClass(`namespace r4ns { class Worker { int id; void work(); }; }
int r4main();`),
        funcs: parseFunction(`namespace r4ns { class Worker { int id; void work(); }; }
int r4main();`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'r4mix05' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = genDtsFile(gi, 'out');
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_2052 生成结果为空');
      assert.ok(result.includes('r4mix05.d.ts'), 'h2dts_gen_2052 输出路径不正确');
      const content = require('fs').readFileSync(result, 'utf8');
      const contentSnippet0 = 'export class Worker {';
      assert.ok(content.includes(contentSnippet0), 'h2dts_gen_2052 文件内容缺少片段 0');
      const contentSnippet1 = 'export function r4main(';
      assert.ok(content.includes(contentSnippet1), 'h2dts_gen_2052 文件内容缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2052 执行异常: ${String(err)}`);
    }
  });
});
