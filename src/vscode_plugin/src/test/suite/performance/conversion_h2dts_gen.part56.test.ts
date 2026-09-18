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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part56.');

  /**
  * @tc.number : h2dts_gen_1823
  * @tc.name : h2dts_gen_1823
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1823', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1823 { int fieldA; std::vector<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1823 { int fieldA; std::vector<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1823 { int fieldA; std::vector<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1823 { int fieldA; std::vector<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1823 { int fieldA; std::vector<long> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1823 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1823 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1823 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1823 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1823 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1823 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1824
  * @tc.name : h2dts_gen_1824
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1824', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1824 { int fieldA; std::vector<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1824 { int fieldA; std::vector<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1824 { int fieldA; std::vector<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1824 { int fieldA; std::vector<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1824 { int fieldA; std::vector<short> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1824 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1824 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1824 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1824 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1824 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1824 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1825
  * @tc.name : h2dts_gen_1825
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1825', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1825 { int fieldA; std::vector<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1825 { int fieldA; std::vector<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1825 { int fieldA; std::vector<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1825 { int fieldA; std::vector<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1825 { int fieldA; std::vector<uint8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1825 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1825 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1825 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1825 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1825 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1825 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1826
  * @tc.name : h2dts_gen_1826
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1826', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1826 { int fieldA; std::vector<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1826 { int fieldA; std::vector<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1826 { int fieldA; std::vector<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1826 { int fieldA; std::vector<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1826 { int fieldA; std::vector<uint16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1826 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1826 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1826 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1826 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1826 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1826 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1827
  * @tc.name : h2dts_gen_1827
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1827', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1827 { int fieldA; std::vector<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1827 { int fieldA; std::vector<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1827 { int fieldA; std::vector<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1827 { int fieldA; std::vector<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1827 { int fieldA; std::vector<uint32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1827 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1827 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1827 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1827 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1827 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1827 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1828
  * @tc.name : h2dts_gen_1828
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1828', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1828 { int fieldA; std::vector<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1828 { int fieldA; std::vector<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1828 { int fieldA; std::vector<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1828 { int fieldA; std::vector<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1828 { int fieldA; std::vector<uint64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1828 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1828 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1828 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1828 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1828 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1828 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1829
  * @tc.name : h2dts_gen_1829
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1829', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1829 { int fieldA; std::vector<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1829 { int fieldA; std::vector<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1829 { int fieldA; std::vector<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1829 { int fieldA; std::vector<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1829 { int fieldA; std::vector<int8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1829 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1829 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1829 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1829 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1829 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1829 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1830
  * @tc.name : h2dts_gen_1830
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1830', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1830 { int fieldA; std::vector<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1830 { int fieldA; std::vector<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1830 { int fieldA; std::vector<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1830 { int fieldA; std::vector<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1830 { int fieldA; std::vector<int16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1830 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1830 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1830 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1830 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1830 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1830 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1831
  * @tc.name : h2dts_gen_1831
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1831', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1831 { int fieldA; std::vector<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1831 { int fieldA; std::vector<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1831 { int fieldA; std::vector<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1831 { int fieldA; std::vector<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1831 { int fieldA; std::vector<int32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1831 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1831 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1831 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1831 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1831 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1831 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1832
  * @tc.name : h2dts_gen_1832
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1832', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1832 { int fieldA; std::vector<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1832 { int fieldA; std::vector<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1832 { int fieldA; std::vector<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1832 { int fieldA; std::vector<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1832 { int fieldA; std::vector<int64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1832 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1832 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1832 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1832 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1832 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1832 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1833
  * @tc.name : h2dts_gen_1833
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1833', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1833 { int fieldA; std::vector<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1833 { int fieldA; std::vector<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1833 { int fieldA; std::vector<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1833 { int fieldA; std::vector<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1833 { int fieldA; std::vector<unsigned> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1833 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1833 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1833 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1833 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1833 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1833 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1834
  * @tc.name : h2dts_gen_1834
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1834', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1834 { int fieldA; std::vector<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1834 { int fieldA; std::vector<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1834 { int fieldA; std::vector<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1834 { int fieldA; std::vector<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1834 { int fieldA; std::vector<bool> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1834 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1834 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1834 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1834 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1834 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1834 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1835
  * @tc.name : h2dts_gen_1835
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1835', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1835 { int fieldA; std::vector<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1835 { int fieldA; std::vector<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1835 { int fieldA; std::vector<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1835 { int fieldA; std::vector<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1835 { int fieldA; std::vector<char> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1835 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1835 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1835 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1835 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1835 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1835 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1836
  * @tc.name : h2dts_gen_1836
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1836', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1836 { int fieldA; std::vector<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1836 { int fieldA; std::vector<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1836 { int fieldA; std::vector<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1836 { int fieldA; std::vector<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1836 { int fieldA; std::vector<wchar_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1836 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1836 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1836 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1836 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1836 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1836 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1837
  * @tc.name : h2dts_gen_1837
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1837', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1837 { int fieldA; std::vector<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1837 { int fieldA; std::vector<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1837 { int fieldA; std::vector<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1837 { int fieldA; std::vector<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1837 { int fieldA; std::vector<char8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1837 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1837 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1837 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1837 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1837 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1837 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1838
  * @tc.name : h2dts_gen_1838
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1838', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1838 { int fieldA; std::vector<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1838 { int fieldA; std::vector<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1838 { int fieldA; std::vector<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1838 { int fieldA; std::vector<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1838 { int fieldA; std::vector<char16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1838 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1838 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1838 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1838 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1838 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1838 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1839
  * @tc.name : h2dts_gen_1839
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::vector<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1839', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1839 { int fieldA; std::vector<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1839 { int fieldA; std::vector<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1839 { int fieldA; std::vector<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1839 { int fieldA; std::vector<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1839 { int fieldA; std::vector<char32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1839 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1839 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1839 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1839 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1839 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1839 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1840
  * @tc.name : h2dts_gen_1840
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1840', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1840 { int fieldA; std::deque<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1840 { int fieldA; std::deque<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1840 { int fieldA; std::deque<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1840 { int fieldA; std::deque<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1840 { int fieldA; std::deque<int> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1840 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1840 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1840 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1840 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1840 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1840 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1841
  * @tc.name : h2dts_gen_1841
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1841', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1841 { int fieldA; std::deque<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1841 { int fieldA; std::deque<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1841 { int fieldA; std::deque<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1841 { int fieldA; std::deque<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1841 { int fieldA; std::deque<size_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1841 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1841 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1841 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1841 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1841 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1841 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1842
  * @tc.name : h2dts_gen_1842
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1842', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1842 { int fieldA; std::deque<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1842 { int fieldA; std::deque<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1842 { int fieldA; std::deque<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1842 { int fieldA; std::deque<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1842 { int fieldA; std::deque<double> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1842 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1842 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1842 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1842 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1842 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1842 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1843
  * @tc.name : h2dts_gen_1843
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1843', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1843 { int fieldA; std::deque<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1843 { int fieldA; std::deque<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1843 { int fieldA; std::deque<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1843 { int fieldA; std::deque<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1843 { int fieldA; std::deque<float> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1843 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1843 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1843 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1843 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1843 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1843 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1844
  * @tc.name : h2dts_gen_1844
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1844', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1844 { int fieldA; std::deque<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1844 { int fieldA; std::deque<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1844 { int fieldA; std::deque<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1844 { int fieldA; std::deque<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1844 { int fieldA; std::deque<long> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1844 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1844 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1844 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1844 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1844 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1844 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1845
  * @tc.name : h2dts_gen_1845
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1845', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1845 { int fieldA; std::deque<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1845 { int fieldA; std::deque<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1845 { int fieldA; std::deque<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1845 { int fieldA; std::deque<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1845 { int fieldA; std::deque<short> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1845 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1845 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1845 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1845 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1845 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1845 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1846
  * @tc.name : h2dts_gen_1846
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1846', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1846 { int fieldA; std::deque<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1846 { int fieldA; std::deque<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1846 { int fieldA; std::deque<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1846 { int fieldA; std::deque<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1846 { int fieldA; std::deque<uint8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1846 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1846 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1846 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1846 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1846 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1846 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1847
  * @tc.name : h2dts_gen_1847
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1847', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1847 { int fieldA; std::deque<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1847 { int fieldA; std::deque<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1847 { int fieldA; std::deque<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1847 { int fieldA; std::deque<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1847 { int fieldA; std::deque<uint16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1847 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1847 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1847 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1847 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1847 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1847 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1848
  * @tc.name : h2dts_gen_1848
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1848', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1848 { int fieldA; std::deque<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1848 { int fieldA; std::deque<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1848 { int fieldA; std::deque<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1848 { int fieldA; std::deque<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1848 { int fieldA; std::deque<uint32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1848 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1848 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1848 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1848 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1848 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1848 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1849
  * @tc.name : h2dts_gen_1849
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1849', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1849 { int fieldA; std::deque<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1849 { int fieldA; std::deque<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1849 { int fieldA; std::deque<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1849 { int fieldA; std::deque<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1849 { int fieldA; std::deque<uint64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1849 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1849 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1849 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1849 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1849 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1849 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1850
  * @tc.name : h2dts_gen_1850
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1850', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1850 { int fieldA; std::deque<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1850 { int fieldA; std::deque<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1850 { int fieldA; std::deque<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1850 { int fieldA; std::deque<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1850 { int fieldA; std::deque<int8_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1850 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1850 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1850 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1850 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1850 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1850 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1851
  * @tc.name : h2dts_gen_1851
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1851', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1851 { int fieldA; std::deque<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1851 { int fieldA; std::deque<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1851 { int fieldA; std::deque<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1851 { int fieldA; std::deque<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1851 { int fieldA; std::deque<int16_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1851 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1851 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1851 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1851 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1851 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1851 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1852
  * @tc.name : h2dts_gen_1852
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1852', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1852 { int fieldA; std::deque<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1852 { int fieldA; std::deque<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1852 { int fieldA; std::deque<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1852 { int fieldA; std::deque<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1852 { int fieldA; std::deque<int32_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1852 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1852 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1852 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1852 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1852 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1852 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1853
  * @tc.name : h2dts_gen_1853
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1853', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1853 { int fieldA; std::deque<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1853 { int fieldA; std::deque<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1853 { int fieldA; std::deque<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1853 { int fieldA; std::deque<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1853 { int fieldA; std::deque<int64_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1853 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1853 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1853 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1853 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1853 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1853 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1854
  * @tc.name : h2dts_gen_1854
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1854', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1854 { int fieldA; std::deque<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1854 { int fieldA; std::deque<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1854 { int fieldA; std::deque<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1854 { int fieldA; std::deque<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1854 { int fieldA; std::deque<unsigned> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1854 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1854 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1854 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1854 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1854 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1854 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1855
  * @tc.name : h2dts_gen_1855
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1855', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1855 { int fieldA; std::deque<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1855 { int fieldA; std::deque<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1855 { int fieldA; std::deque<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1855 { int fieldA; std::deque<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1855 { int fieldA; std::deque<bool> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1855 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1855 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1855 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1855 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1855 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1855 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1856
  * @tc.name : h2dts_gen_1856
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1856', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1856 { int fieldA; std::deque<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1856 { int fieldA; std::deque<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1856 { int fieldA; std::deque<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1856 { int fieldA; std::deque<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1856 { int fieldA; std::deque<char> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1856 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1856 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1856 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1856 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1856 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1856 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1857
  * @tc.name : h2dts_gen_1857
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1857', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1857 { int fieldA; std::deque<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1857 { int fieldA; std::deque<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1857 { int fieldA; std::deque<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1857 { int fieldA; std::deque<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1857 { int fieldA; std::deque<wchar_t> fieldB; void touch(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1857 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1857 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1857 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1857 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1857 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1857 执行异常: ${String(err)}`);
    }
  });
});
