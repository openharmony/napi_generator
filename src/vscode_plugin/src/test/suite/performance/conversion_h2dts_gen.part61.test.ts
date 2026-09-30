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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part61.');

  /**
  * @tc.number : h2dts_gen_1998
  * @tc.name : h2dts_gen_1998
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1998', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1998 { int fieldA; std::set<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1998 { int fieldA; std::set<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1998 { int fieldA; std::set<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1998 { int fieldA; std::set<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1998 { int fieldA; std::set<int16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1998 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1998 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1998 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1998 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1998 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1998 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1998 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1999
  * @tc.name : h2dts_gen_1999
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1999', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1999 { int fieldA; std::set<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1999 { int fieldA; std::set<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1999 { int fieldA; std::set<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1999 { int fieldA; std::set<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1999 { int fieldA; std::set<int32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1999 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1999 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1999 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1999 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_1999 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1999 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1999 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2000
  * @tc.name : h2dts_gen_2000
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2000', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2000 { int fieldA; std::set<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2000 { int fieldA; std::set<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2000 { int fieldA; std::set<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2000 { int fieldA; std::set<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2000 { int fieldA; std::set<int64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2000 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2000 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2000 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2000 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2000 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2000 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2000 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2001
  * @tc.name : h2dts_gen_2001
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2001', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2001 { int fieldA; std::set<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2001 { int fieldA; std::set<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2001 { int fieldA; std::set<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2001 { int fieldA; std::set<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2001 { int fieldA; std::set<unsigned> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2001 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2001 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2001 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2001 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2001 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2002
  * @tc.name : h2dts_gen_2002
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2002', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2002 { int fieldA; std::set<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2002 { int fieldA; std::set<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2002 { int fieldA; std::set<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2002 { int fieldA; std::set<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2002 { int fieldA; std::set<bool> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2002 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2002 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2002 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2002 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<boolean>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2002 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2003
  * @tc.name : h2dts_gen_2003
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2003', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2003 { int fieldA; std::set<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2003 { int fieldA; std::set<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2003 { int fieldA; std::set<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2003 { int fieldA; std::set<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2003 { int fieldA; std::set<char> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2003 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2003 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2003 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2003 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2003 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2004
  * @tc.name : h2dts_gen_2004
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2004', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2004 { int fieldA; std::set<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2004 { int fieldA; std::set<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2004 { int fieldA; std::set<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2004 { int fieldA; std::set<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2004 { int fieldA; std::set<wchar_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2004 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2004 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2004 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2004 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2004 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2005
  * @tc.name : h2dts_gen_2005
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2005', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2005 { int fieldA; std::set<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2005 { int fieldA; std::set<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2005 { int fieldA; std::set<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2005 { int fieldA; std::set<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2005 { int fieldA; std::set<char8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2005 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2005 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2005 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2005 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2005 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2006
  * @tc.name : h2dts_gen_2006
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2006', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2006 { int fieldA; std::set<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2006 { int fieldA; std::set<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2006 { int fieldA; std::set<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2006 { int fieldA; std::set<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2006 { int fieldA; std::set<char16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2006 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2006 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2006 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2006 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2006 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2007
  * @tc.name : h2dts_gen_2007
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::set<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2007', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2007 { int fieldA; std::set<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2007 { int fieldA; std::set<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2007 { int fieldA; std::set<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2007 { int fieldA; std::set<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2007 { int fieldA; std::set<char32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2007 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2007 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2007 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2007 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2007 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2008
  * @tc.name : h2dts_gen_2008
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2008', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2008 { int fieldA; std::unordered_set<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2008 { int fieldA; std::unordered_set<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2008 { int fieldA; std::unordered_set<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2008 { int fieldA; std::unordered_set<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2008 { int fieldA; std::unordered_set<int> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2008 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2008 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2008 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2008 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2008 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2009
  * @tc.name : h2dts_gen_2009
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2009', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2009 { int fieldA; std::unordered_set<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2009 { int fieldA; std::unordered_set<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2009 { int fieldA; std::unordered_set<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2009 { int fieldA; std::unordered_set<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2009 { int fieldA; std::unordered_set<size_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2009 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2009 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2009 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2009 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2009 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2010
  * @tc.name : h2dts_gen_2010
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2010', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2010 { int fieldA; std::unordered_set<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2010 { int fieldA; std::unordered_set<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2010 { int fieldA; std::unordered_set<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2010 { int fieldA; std::unordered_set<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2010 { int fieldA; std::unordered_set<double> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2010 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2010 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2010 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2010 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2010 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2011
  * @tc.name : h2dts_gen_2011
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2011', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2011 { int fieldA; std::unordered_set<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2011 { int fieldA; std::unordered_set<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2011 { int fieldA; std::unordered_set<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2011 { int fieldA; std::unordered_set<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2011 { int fieldA; std::unordered_set<float> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2011 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2011 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2011 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2011 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2011 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2012
  * @tc.name : h2dts_gen_2012
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2012', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2012 { int fieldA; std::unordered_set<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2012 { int fieldA; std::unordered_set<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2012 { int fieldA; std::unordered_set<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2012 { int fieldA; std::unordered_set<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2012 { int fieldA; std::unordered_set<long> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2012 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2012 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2012 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2012 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2012 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2013
  * @tc.name : h2dts_gen_2013
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2013', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2013 { int fieldA; std::unordered_set<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2013 { int fieldA; std::unordered_set<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2013 { int fieldA; std::unordered_set<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2013 { int fieldA; std::unordered_set<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2013 { int fieldA; std::unordered_set<short> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2013 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2013 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2013 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2013 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2013 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2014
  * @tc.name : h2dts_gen_2014
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2014', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2014 { int fieldA; std::unordered_set<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2014 { int fieldA; std::unordered_set<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2014 { int fieldA; std::unordered_set<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2014 { int fieldA; std::unordered_set<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2014 { int fieldA; std::unordered_set<uint8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2014 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2014 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2014 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2014 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2014 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2015
  * @tc.name : h2dts_gen_2015
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2015', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2015 { int fieldA; std::unordered_set<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2015 { int fieldA; std::unordered_set<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2015 { int fieldA; std::unordered_set<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2015 { int fieldA; std::unordered_set<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2015 { int fieldA; std::unordered_set<uint16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2015 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2015 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2015 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2015 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2015 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2016
  * @tc.name : h2dts_gen_2016
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2016', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2016 { int fieldA; std::unordered_set<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2016 { int fieldA; std::unordered_set<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2016 { int fieldA; std::unordered_set<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2016 { int fieldA; std::unordered_set<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2016 { int fieldA; std::unordered_set<uint32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2016 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2016 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2016 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2016 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2016 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2017
  * @tc.name : h2dts_gen_2017
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2017', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2017 { int fieldA; std::unordered_set<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2017 { int fieldA; std::unordered_set<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2017 { int fieldA; std::unordered_set<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2017 { int fieldA; std::unordered_set<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2017 { int fieldA; std::unordered_set<uint64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2017 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2017 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2017 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2017 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2017 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2018
  * @tc.name : h2dts_gen_2018
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2018', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2018 { int fieldA; std::unordered_set<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2018 { int fieldA; std::unordered_set<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2018 { int fieldA; std::unordered_set<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2018 { int fieldA; std::unordered_set<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2018 { int fieldA; std::unordered_set<int8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2018 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2018 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2018 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2018 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2018 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2019
  * @tc.name : h2dts_gen_2019
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2019', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2019 { int fieldA; std::unordered_set<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2019 { int fieldA; std::unordered_set<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2019 { int fieldA; std::unordered_set<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2019 { int fieldA; std::unordered_set<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2019 { int fieldA; std::unordered_set<int16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2019 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2019 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2019 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2019 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2019 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2020
  * @tc.name : h2dts_gen_2020
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2020', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2020 { int fieldA; std::unordered_set<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2020 { int fieldA; std::unordered_set<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2020 { int fieldA; std::unordered_set<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2020 { int fieldA; std::unordered_set<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2020 { int fieldA; std::unordered_set<int32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2020 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2020 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2020 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2020 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2020 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2021
  * @tc.name : h2dts_gen_2021
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2021', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2021 { int fieldA; std::unordered_set<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2021 { int fieldA; std::unordered_set<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2021 { int fieldA; std::unordered_set<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2021 { int fieldA; std::unordered_set<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2021 { int fieldA; std::unordered_set<int64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2021 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2021 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2021 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2021 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2021 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2022
  * @tc.name : h2dts_gen_2022
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2022', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2022 { int fieldA; std::unordered_set<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2022 { int fieldA; std::unordered_set<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2022 { int fieldA; std::unordered_set<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2022 { int fieldA; std::unordered_set<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2022 { int fieldA; std::unordered_set<unsigned> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2022 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2022 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2022 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2022 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2022 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2023
  * @tc.name : h2dts_gen_2023
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2023', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2023 { int fieldA; std::unordered_set<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2023 { int fieldA; std::unordered_set<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2023 { int fieldA; std::unordered_set<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2023 { int fieldA; std::unordered_set<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2023 { int fieldA; std::unordered_set<bool> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2023 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2023 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2023 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2023 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<boolean>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2023 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2024
  * @tc.name : h2dts_gen_2024
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2024', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2024 { int fieldA; std::unordered_set<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2024 { int fieldA; std::unordered_set<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2024 { int fieldA; std::unordered_set<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2024 { int fieldA; std::unordered_set<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2024 { int fieldA; std::unordered_set<char> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2024 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2024 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2024 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2024 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2024 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2025
  * @tc.name : h2dts_gen_2025
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2025', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2025 { int fieldA; std::unordered_set<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2025 { int fieldA; std::unordered_set<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2025 { int fieldA; std::unordered_set<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2025 { int fieldA; std::unordered_set<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2025 { int fieldA; std::unordered_set<wchar_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2025 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2025 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2025 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2025 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2025 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2026
  * @tc.name : h2dts_gen_2026
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2026', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2026 { int fieldA; std::unordered_set<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2026 { int fieldA; std::unordered_set<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2026 { int fieldA; std::unordered_set<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2026 { int fieldA; std::unordered_set<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2026 { int fieldA; std::unordered_set<char8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2026 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2026 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2026 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2026 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2026 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2027
  * @tc.name : h2dts_gen_2027
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2027', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2027 { int fieldA; std::unordered_set<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2027 { int fieldA; std::unordered_set<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2027 { int fieldA; std::unordered_set<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2027 { int fieldA; std::unordered_set<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2027 { int fieldA; std::unordered_set<char16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2027 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2027 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2027 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2027 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2027 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2028
  * @tc.name : h2dts_gen_2028
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::unordered_set<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2028', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2028 { int fieldA; std::unordered_set<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2028 { int fieldA; std::unordered_set<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2028 { int fieldA; std::unordered_set<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2028 { int fieldA; std::unordered_set<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2028 { int fieldA; std::unordered_set<char32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2028 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2028 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2028 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2028 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2028 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2029
  * @tc.name : h2dts_gen_2029
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2029', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2029 { int fieldA; std::multiset<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2029 { int fieldA; std::multiset<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2029 { int fieldA; std::multiset<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2029 { int fieldA; std::multiset<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2029 { int fieldA; std::multiset<int> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2029 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2029 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2029 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2029 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2029 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2030
  * @tc.name : h2dts_gen_2030
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2030', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2030 { int fieldA; std::multiset<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2030 { int fieldA; std::multiset<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2030 { int fieldA; std::multiset<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2030 { int fieldA; std::multiset<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2030 { int fieldA; std::multiset<size_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2030 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2030 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2030 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2030 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2030 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2031
  * @tc.name : h2dts_gen_2031
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2031', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2031 { int fieldA; std::multiset<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2031 { int fieldA; std::multiset<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2031 { int fieldA; std::multiset<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2031 { int fieldA; std::multiset<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2031 { int fieldA; std::multiset<double> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2031 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2031 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2031 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2031 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2031 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_2032
  * @tc.name : h2dts_gen_2032
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::multiset<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_2032', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls2032 { int fieldA; std::multiset<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls2032 { int fieldA; std::multiset<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls2032 { int fieldA; std::multiset<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls2032 { int fieldA; std::multiset<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls2032 { int fieldA; std::multiset<float> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_2032 生成结果为空');
      const expectSnippet0 = 'export class R4Cls2032 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2032 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_2032 生成结果缺少片段 1');
      const expectSnippet2 = 'Set<number>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_2032 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_2032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_2032 执行异常: ${String(err)}`);
    }
  });
});
