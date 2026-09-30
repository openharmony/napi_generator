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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part60.');

  /**
  * @tc.number : h2dts_gen_1963
  * @tc.name : h2dts_gen_1963
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1963', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1963 { int fieldA; std::valarray<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1963 { int fieldA; std::valarray<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1963 { int fieldA; std::valarray<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1963 { int fieldA; std::valarray<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1963 { int fieldA; std::valarray<char8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1963 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1963 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1963 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1963 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1963 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1963 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1964
  * @tc.name : h2dts_gen_1964
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1964', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1964 { int fieldA; std::valarray<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1964 { int fieldA; std::valarray<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1964 { int fieldA; std::valarray<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1964 { int fieldA; std::valarray<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1964 { int fieldA; std::valarray<char16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1964 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1964 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1964 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1964 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1964 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1964 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1965
  * @tc.name : h2dts_gen_1965
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::valarray<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1965', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1965 { int fieldA; std::valarray<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1965 { int fieldA; std::valarray<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1965 { int fieldA; std::valarray<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1965 { int fieldA; std::valarray<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1965 { int fieldA; std::valarray<char32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1965 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1965 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1965 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1965 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1965 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1965 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1966
  * @tc.name : h2dts_gen_1966
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1966', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1966 { int fieldA; std::priority_queue<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1966 { int fieldA; std::priority_queue<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1966 { int fieldA; std::priority_queue<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1966 { int fieldA; std::priority_queue<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1966 { int fieldA; std::priority_queue<int> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1966 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1966 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1966 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1966 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1966 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1966 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1967
  * @tc.name : h2dts_gen_1967
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1967', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1967 { int fieldA; std::priority_queue<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1967 { int fieldA; std::priority_queue<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1967 { int fieldA; std::priority_queue<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1967 { int fieldA; std::priority_queue<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1967 { int fieldA; std::priority_queue<size_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1967 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1967 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1967 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1967 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1967 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1967 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1968
  * @tc.name : h2dts_gen_1968
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1968', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1968 { int fieldA; std::priority_queue<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1968 { int fieldA; std::priority_queue<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1968 { int fieldA; std::priority_queue<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1968 { int fieldA; std::priority_queue<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1968 { int fieldA; std::priority_queue<double> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1968 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1968 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1968 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1968 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1968 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1968 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1969
  * @tc.name : h2dts_gen_1969
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1969', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1969 { int fieldA; std::priority_queue<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1969 { int fieldA; std::priority_queue<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1969 { int fieldA; std::priority_queue<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1969 { int fieldA; std::priority_queue<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1969 { int fieldA; std::priority_queue<float> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1969 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1969 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1969 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1969 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1969 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1969 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1970
  * @tc.name : h2dts_gen_1970
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1970', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1970 { int fieldA; std::priority_queue<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1970 { int fieldA; std::priority_queue<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1970 { int fieldA; std::priority_queue<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1970 { int fieldA; std::priority_queue<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1970 { int fieldA; std::priority_queue<long> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1970 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1970 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1970 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1970 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1970 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1970 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1971
  * @tc.name : h2dts_gen_1971
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1971', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1971 { int fieldA; std::priority_queue<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1971 { int fieldA; std::priority_queue<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1971 { int fieldA; std::priority_queue<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1971 { int fieldA; std::priority_queue<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1971 { int fieldA; std::priority_queue<short> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1971 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1971 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1971 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1971 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1971 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1971 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1972
  * @tc.name : h2dts_gen_1972
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1972', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1972 { int fieldA; std::priority_queue<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1972 { int fieldA; std::priority_queue<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1972 { int fieldA; std::priority_queue<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1972 { int fieldA; std::priority_queue<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1972 { int fieldA; std::priority_queue<uint8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1972 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1972 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1972 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1972 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1972 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1972 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1973
  * @tc.name : h2dts_gen_1973
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1973', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1973 { int fieldA; std::priority_queue<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1973 { int fieldA; std::priority_queue<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1973 { int fieldA; std::priority_queue<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1973 { int fieldA; std::priority_queue<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1973 { int fieldA; std::priority_queue<uint16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1973 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1973 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1973 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1973 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1973 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1973 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1974
  * @tc.name : h2dts_gen_1974
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1974', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1974 { int fieldA; std::priority_queue<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1974 { int fieldA; std::priority_queue<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1974 { int fieldA; std::priority_queue<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1974 { int fieldA; std::priority_queue<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1974 { int fieldA; std::priority_queue<uint32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1974 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1974 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1974 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1974 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1974 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1974 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1975
  * @tc.name : h2dts_gen_1975
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1975', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1975 { int fieldA; std::priority_queue<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1975 { int fieldA; std::priority_queue<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1975 { int fieldA; std::priority_queue<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1975 { int fieldA; std::priority_queue<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1975 { int fieldA; std::priority_queue<uint64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1975 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1975 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1975 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1975 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1975 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1975 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1976
  * @tc.name : h2dts_gen_1976
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1976', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1976 { int fieldA; std::priority_queue<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1976 { int fieldA; std::priority_queue<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1976 { int fieldA; std::priority_queue<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1976 { int fieldA; std::priority_queue<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1976 { int fieldA; std::priority_queue<int8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1976 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1976 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1976 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1976 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1976 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1976 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1977
  * @tc.name : h2dts_gen_1977
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1977', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1977 { int fieldA; std::priority_queue<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1977 { int fieldA; std::priority_queue<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1977 { int fieldA; std::priority_queue<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1977 { int fieldA; std::priority_queue<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1977 { int fieldA; std::priority_queue<int16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1977 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1977 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1977 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1977 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1977 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1977 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1978
  * @tc.name : h2dts_gen_1978
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1978', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1978 { int fieldA; std::priority_queue<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1978 { int fieldA; std::priority_queue<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1978 { int fieldA; std::priority_queue<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1978 { int fieldA; std::priority_queue<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1978 { int fieldA; std::priority_queue<int32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1978 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1978 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1978 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1978 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1978 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1978 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1979
  * @tc.name : h2dts_gen_1979
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1979', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1979 { int fieldA; std::priority_queue<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1979 { int fieldA; std::priority_queue<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1979 { int fieldA; std::priority_queue<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1979 { int fieldA; std::priority_queue<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1979 { int fieldA; std::priority_queue<int64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1979 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1979 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1979 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1979 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1979 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1979 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1980
  * @tc.name : h2dts_gen_1980
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1980', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1980 { int fieldA; std::priority_queue<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1980 { int fieldA; std::priority_queue<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1980 { int fieldA; std::priority_queue<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1980 { int fieldA; std::priority_queue<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1980 { int fieldA; std::priority_queue<unsigned> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1980 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1980 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1980 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1980 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1980 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1980 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1981
  * @tc.name : h2dts_gen_1981
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1981', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1981 { int fieldA; std::priority_queue<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1981 { int fieldA; std::priority_queue<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1981 { int fieldA; std::priority_queue<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1981 { int fieldA; std::priority_queue<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1981 { int fieldA; std::priority_queue<bool> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1981 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1981 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1981 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1981 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1981 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1981 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1982
  * @tc.name : h2dts_gen_1982
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1982', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1982 { int fieldA; std::priority_queue<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1982 { int fieldA; std::priority_queue<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1982 { int fieldA; std::priority_queue<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1982 { int fieldA; std::priority_queue<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1982 { int fieldA; std::priority_queue<char> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1982 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1982 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1982 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1982 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1982 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1982 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1983
  * @tc.name : h2dts_gen_1983
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1983', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1983 { int fieldA; std::priority_queue<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1983 { int fieldA; std::priority_queue<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1983 { int fieldA; std::priority_queue<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1983 { int fieldA; std::priority_queue<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1983 { int fieldA; std::priority_queue<wchar_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1983 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1983 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1983 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1983 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1983 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1983 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1984
  * @tc.name : h2dts_gen_1984
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1984', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1984 { int fieldA; std::priority_queue<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1984 { int fieldA; std::priority_queue<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1984 { int fieldA; std::priority_queue<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1984 { int fieldA; std::priority_queue<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1984 { int fieldA; std::priority_queue<char8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1984 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1984 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1984 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1984 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1984 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1984 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1985
  * @tc.name : h2dts_gen_1985
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1985', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1985 { int fieldA; std::priority_queue<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1985 { int fieldA; std::priority_queue<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1985 { int fieldA; std::priority_queue<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1985 { int fieldA; std::priority_queue<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1985 { int fieldA; std::priority_queue<char16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1985 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1985 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1985 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1985 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1985 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1985 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1986
  * @tc.name : h2dts_gen_1986
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::priority_queue<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1986', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1986 { int fieldA; std::priority_queue<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1986 { int fieldA; std::priority_queue<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1986 { int fieldA; std::priority_queue<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1986 { int fieldA; std::priority_queue<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1986 { int fieldA; std::priority_queue<char32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1986 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1986 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1986 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1986 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1986 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1986 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1987
  * @tc.name : h2dts_gen_1987
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1987', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1987 { int fieldA; std::set<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1987 { int fieldA; std::set<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1987 { int fieldA; std::set<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1987 { int fieldA; std::set<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1987 { int fieldA; std::set<int> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1987 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1987 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1987 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1987 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1987 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1987 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1987 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1988
  * @tc.name : h2dts_gen_1988
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1988', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1988 { int fieldA; std::set<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1988 { int fieldA; std::set<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1988 { int fieldA; std::set<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1988 { int fieldA; std::set<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1988 { int fieldA; std::set<size_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1988 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1988 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1988 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1988 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1988 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1988 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1988 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1989
  * @tc.name : h2dts_gen_1989
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1989', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1989 { int fieldA; std::set<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1989 { int fieldA; std::set<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1989 { int fieldA; std::set<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1989 { int fieldA; std::set<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1989 { int fieldA; std::set<double> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1989 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1989 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1989 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1989 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1989 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1989 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1989 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1990
  * @tc.name : h2dts_gen_1990
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1990', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1990 { int fieldA; std::set<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1990 { int fieldA; std::set<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1990 { int fieldA; std::set<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1990 { int fieldA; std::set<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1990 { int fieldA; std::set<float> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1990 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1990 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1990 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1990 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1990 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1990 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1990 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1991
  * @tc.name : h2dts_gen_1991
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1991', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1991 { int fieldA; std::set<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1991 { int fieldA; std::set<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1991 { int fieldA; std::set<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1991 { int fieldA; std::set<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1991 { int fieldA; std::set<long> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1991 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1991 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1991 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1991 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1991 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1991 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1991 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1992
  * @tc.name : h2dts_gen_1992
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1992', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1992 { int fieldA; std::set<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1992 { int fieldA; std::set<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1992 { int fieldA; std::set<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1992 { int fieldA; std::set<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1992 { int fieldA; std::set<short> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1992 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1992 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1992 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1992 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1992 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1992 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1992 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1993
  * @tc.name : h2dts_gen_1993
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1993', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1993 { int fieldA; std::set<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1993 { int fieldA; std::set<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1993 { int fieldA; std::set<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1993 { int fieldA; std::set<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1993 { int fieldA; std::set<uint8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1993 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1993 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1993 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1993 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1993 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1993 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1993 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1994
  * @tc.name : h2dts_gen_1994
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1994', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1994 { int fieldA; std::set<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1994 { int fieldA; std::set<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1994 { int fieldA; std::set<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1994 { int fieldA; std::set<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1994 { int fieldA; std::set<uint16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1994 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1994 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1994 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1994 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1994 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1994 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1994 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1995
  * @tc.name : h2dts_gen_1995
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1995', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1995 { int fieldA; std::set<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1995 { int fieldA; std::set<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1995 { int fieldA; std::set<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1995 { int fieldA; std::set<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1995 { int fieldA; std::set<uint32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1995 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1995 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1995 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1995 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1995 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1995 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1995 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1996
  * @tc.name : h2dts_gen_1996
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1996', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1996 { int fieldA; std::set<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1996 { int fieldA; std::set<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1996 { int fieldA; std::set<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1996 { int fieldA; std::set<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1996 { int fieldA; std::set<uint64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1996 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1996 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1996 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1996 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1996 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1996 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1996 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1997
  * @tc.name : h2dts_gen_1997
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1997', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1997 { int fieldA; std::set<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1997 { int fieldA; std::set<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1997 { int fieldA; std::set<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1997 { int fieldA; std::set<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1997 { int fieldA; std::set<int8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1997 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1997 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1997 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1997 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1997 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1997 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1997 执行异常: ${String(err)}`);
    }
  });
});
