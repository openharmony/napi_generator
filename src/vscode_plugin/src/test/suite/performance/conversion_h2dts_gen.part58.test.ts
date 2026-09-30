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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part58.');

  /**
  * @tc.number : h2dts_gen_1893
  * @tc.name : h2dts_gen_1893
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1893', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1893 { int fieldA; std::forward_list<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1893 { int fieldA; std::forward_list<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1893 { int fieldA; std::forward_list<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1893 { int fieldA; std::forward_list<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1893 { int fieldA; std::forward_list<int16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1893 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1893 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1893 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1893 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1893 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1893 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1894
  * @tc.name : h2dts_gen_1894
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1894', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1894 { int fieldA; std::forward_list<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1894 { int fieldA; std::forward_list<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1894 { int fieldA; std::forward_list<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1894 { int fieldA; std::forward_list<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1894 { int fieldA; std::forward_list<int32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1894 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1894 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1894 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1894 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1894 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1894 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1895
  * @tc.name : h2dts_gen_1895
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1895', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1895 { int fieldA; std::forward_list<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1895 { int fieldA; std::forward_list<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1895 { int fieldA; std::forward_list<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1895 { int fieldA; std::forward_list<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1895 { int fieldA; std::forward_list<int64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1895 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1895 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1895 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1895 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1895 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1895 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1896
  * @tc.name : h2dts_gen_1896
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1896', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1896 { int fieldA; std::forward_list<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1896 { int fieldA; std::forward_list<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1896 { int fieldA; std::forward_list<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1896 { int fieldA; std::forward_list<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1896 { int fieldA; std::forward_list<unsigned> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1896 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1896 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1896 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1896 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1896 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1896 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1897
  * @tc.name : h2dts_gen_1897
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1897', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1897 { int fieldA; std::forward_list<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1897 { int fieldA; std::forward_list<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1897 { int fieldA; std::forward_list<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1897 { int fieldA; std::forward_list<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1897 { int fieldA; std::forward_list<bool> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1897 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1897 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1897 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1897 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1897 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1897 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1898
  * @tc.name : h2dts_gen_1898
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1898', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1898 { int fieldA; std::forward_list<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1898 { int fieldA; std::forward_list<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1898 { int fieldA; std::forward_list<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1898 { int fieldA; std::forward_list<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1898 { int fieldA; std::forward_list<char> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1898 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1898 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1898 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1898 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1898 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1898 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1899
  * @tc.name : h2dts_gen_1899
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1899', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1899 { int fieldA; std::forward_list<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1899 { int fieldA; std::forward_list<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1899 { int fieldA; std::forward_list<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1899 { int fieldA; std::forward_list<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1899 { int fieldA; std::forward_list<wchar_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1899 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1899 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1899 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1899 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1899 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1899 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1900
  * @tc.name : h2dts_gen_1900
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1900', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1900 { int fieldA; std::forward_list<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1900 { int fieldA; std::forward_list<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1900 { int fieldA; std::forward_list<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1900 { int fieldA; std::forward_list<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1900 { int fieldA; std::forward_list<char8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1900 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1900 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1900 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1900 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1900 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1900 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1901
  * @tc.name : h2dts_gen_1901
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1901', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1901 { int fieldA; std::forward_list<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1901 { int fieldA; std::forward_list<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1901 { int fieldA; std::forward_list<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1901 { int fieldA; std::forward_list<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1901 { int fieldA; std::forward_list<char16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1901 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1901 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1901 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1901 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1901 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1901 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1902
  * @tc.name : h2dts_gen_1902
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1902', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1902 { int fieldA; std::forward_list<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1902 { int fieldA; std::forward_list<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1902 { int fieldA; std::forward_list<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1902 { int fieldA; std::forward_list<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1902 { int fieldA; std::forward_list<char32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1902 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1902 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1902 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1902 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1902 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1902 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1903
  * @tc.name : h2dts_gen_1903
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1903', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1903 { int fieldA; std::stack<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1903 { int fieldA; std::stack<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1903 { int fieldA; std::stack<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1903 { int fieldA; std::stack<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1903 { int fieldA; std::stack<int> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1903 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1903 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1903 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1903 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1903 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1903 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1904
  * @tc.name : h2dts_gen_1904
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1904', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1904 { int fieldA; std::stack<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1904 { int fieldA; std::stack<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1904 { int fieldA; std::stack<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1904 { int fieldA; std::stack<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1904 { int fieldA; std::stack<size_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1904 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1904 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1904 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1904 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1904 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1904 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1905
  * @tc.name : h2dts_gen_1905
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1905', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1905 { int fieldA; std::stack<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1905 { int fieldA; std::stack<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1905 { int fieldA; std::stack<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1905 { int fieldA; std::stack<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1905 { int fieldA; std::stack<double> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1905 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1905 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1905 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1905 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1905 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1905 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1906
  * @tc.name : h2dts_gen_1906
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1906', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1906 { int fieldA; std::stack<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1906 { int fieldA; std::stack<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1906 { int fieldA; std::stack<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1906 { int fieldA; std::stack<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1906 { int fieldA; std::stack<float> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1906 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1906 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1906 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1906 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1906 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1906 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1907
  * @tc.name : h2dts_gen_1907
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1907', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1907 { int fieldA; std::stack<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1907 { int fieldA; std::stack<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1907 { int fieldA; std::stack<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1907 { int fieldA; std::stack<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1907 { int fieldA; std::stack<long> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1907 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1907 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1907 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1907 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1907 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1907 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1908
  * @tc.name : h2dts_gen_1908
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1908', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1908 { int fieldA; std::stack<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1908 { int fieldA; std::stack<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1908 { int fieldA; std::stack<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1908 { int fieldA; std::stack<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1908 { int fieldA; std::stack<short> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1908 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1908 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1908 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1908 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1908 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1908 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1909
  * @tc.name : h2dts_gen_1909
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1909', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1909 { int fieldA; std::stack<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1909 { int fieldA; std::stack<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1909 { int fieldA; std::stack<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1909 { int fieldA; std::stack<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1909 { int fieldA; std::stack<uint8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1909 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1909 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1909 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1909 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1909 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1909 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1910
  * @tc.name : h2dts_gen_1910
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1910', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1910 { int fieldA; std::stack<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1910 { int fieldA; std::stack<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1910 { int fieldA; std::stack<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1910 { int fieldA; std::stack<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1910 { int fieldA; std::stack<uint16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1910 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1910 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1910 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1910 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1910 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1910 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1911
  * @tc.name : h2dts_gen_1911
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1911', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1911 { int fieldA; std::stack<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1911 { int fieldA; std::stack<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1911 { int fieldA; std::stack<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1911 { int fieldA; std::stack<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1911 { int fieldA; std::stack<uint32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1911 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1911 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1911 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1911 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1911 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1911 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1912
  * @tc.name : h2dts_gen_1912
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1912', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1912 { int fieldA; std::stack<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1912 { int fieldA; std::stack<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1912 { int fieldA; std::stack<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1912 { int fieldA; std::stack<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1912 { int fieldA; std::stack<uint64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1912 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1912 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1912 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1912 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1912 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1912 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1913
  * @tc.name : h2dts_gen_1913
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1913', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1913 { int fieldA; std::stack<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1913 { int fieldA; std::stack<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1913 { int fieldA; std::stack<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1913 { int fieldA; std::stack<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1913 { int fieldA; std::stack<int8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1913 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1913 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1913 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1913 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1913 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1913 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1914
  * @tc.name : h2dts_gen_1914
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1914', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1914 { int fieldA; std::stack<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1914 { int fieldA; std::stack<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1914 { int fieldA; std::stack<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1914 { int fieldA; std::stack<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1914 { int fieldA; std::stack<int16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1914 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1914 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1914 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1914 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1914 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1914 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1915
  * @tc.name : h2dts_gen_1915
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1915', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1915 { int fieldA; std::stack<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1915 { int fieldA; std::stack<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1915 { int fieldA; std::stack<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1915 { int fieldA; std::stack<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1915 { int fieldA; std::stack<int32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1915 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1915 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1915 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1915 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1915 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1915 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1916
  * @tc.name : h2dts_gen_1916
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1916', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1916 { int fieldA; std::stack<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1916 { int fieldA; std::stack<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1916 { int fieldA; std::stack<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1916 { int fieldA; std::stack<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1916 { int fieldA; std::stack<int64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1916 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1916 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1916 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1916 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1916 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1916 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1917
  * @tc.name : h2dts_gen_1917
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1917', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1917 { int fieldA; std::stack<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1917 { int fieldA; std::stack<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1917 { int fieldA; std::stack<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1917 { int fieldA; std::stack<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1917 { int fieldA; std::stack<unsigned> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1917 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1917 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1917 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1917 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1917 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1917 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1918
  * @tc.name : h2dts_gen_1918
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1918', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1918 { int fieldA; std::stack<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1918 { int fieldA; std::stack<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1918 { int fieldA; std::stack<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1918 { int fieldA; std::stack<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1918 { int fieldA; std::stack<bool> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1918 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1918 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1918 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1918 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1918 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1918 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1919
  * @tc.name : h2dts_gen_1919
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1919', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1919 { int fieldA; std::stack<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1919 { int fieldA; std::stack<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1919 { int fieldA; std::stack<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1919 { int fieldA; std::stack<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1919 { int fieldA; std::stack<char> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1919 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1919 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1919 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1919 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1919 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1919 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1920
  * @tc.name : h2dts_gen_1920
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1920', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1920 { int fieldA; std::stack<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1920 { int fieldA; std::stack<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1920 { int fieldA; std::stack<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1920 { int fieldA; std::stack<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1920 { int fieldA; std::stack<wchar_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1920 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1920 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1920 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1920 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1920 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1920 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1921
  * @tc.name : h2dts_gen_1921
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1921', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1921 { int fieldA; std::stack<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1921 { int fieldA; std::stack<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1921 { int fieldA; std::stack<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1921 { int fieldA; std::stack<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1921 { int fieldA; std::stack<char8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1921 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1921 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1921 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1921 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1921 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1921 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1922
  * @tc.name : h2dts_gen_1922
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1922', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1922 { int fieldA; std::stack<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1922 { int fieldA; std::stack<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1922 { int fieldA; std::stack<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1922 { int fieldA; std::stack<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1922 { int fieldA; std::stack<char16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1922 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1922 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1922 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1922 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1922 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1922 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1923
  * @tc.name : h2dts_gen_1923
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::stack<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1923', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1923 { int fieldA; std::stack<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1923 { int fieldA; std::stack<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1923 { int fieldA; std::stack<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1923 { int fieldA; std::stack<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1923 { int fieldA; std::stack<char32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1923 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1923 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1923 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1923 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1923 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1923 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1924
  * @tc.name : h2dts_gen_1924
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1924', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1924 { int fieldA; std::queue<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1924 { int fieldA; std::queue<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1924 { int fieldA; std::queue<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1924 { int fieldA; std::queue<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1924 { int fieldA; std::queue<int> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1924 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1924 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1924 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1924 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1924 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1924 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1925
  * @tc.name : h2dts_gen_1925
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1925', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1925 { int fieldA; std::queue<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1925 { int fieldA; std::queue<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1925 { int fieldA; std::queue<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1925 { int fieldA; std::queue<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1925 { int fieldA; std::queue<size_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1925 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1925 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1925 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1925 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1925 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1925 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1926
  * @tc.name : h2dts_gen_1926
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1926', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1926 { int fieldA; std::queue<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1926 { int fieldA; std::queue<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1926 { int fieldA; std::queue<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1926 { int fieldA; std::queue<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1926 { int fieldA; std::queue<double> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1926 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1926 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1926 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1926 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1926 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1926 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1927
  * @tc.name : h2dts_gen_1927
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::queue<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1927', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1927 { int fieldA; std::queue<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1927 { int fieldA; std::queue<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1927 { int fieldA; std::queue<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1927 { int fieldA; std::queue<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1927 { int fieldA; std::queue<float> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1927 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1927 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1927 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1927 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1927 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1927 执行异常: ${String(err)}`);
    }
  });
});
