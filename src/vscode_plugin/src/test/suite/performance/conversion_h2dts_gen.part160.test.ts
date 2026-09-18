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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part160.');

  /**
  * @tc.number : h2dts_gen_5417
  * @tc.name : h2dts_gen_5417
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5417', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5417 { int fA; long fB; char8_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5417 { int fA; long fB; char8_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5417 { int fA; long fB; char8_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5417 { int fA; long fB; char8_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5417 { int fA; long fB; char8_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5417 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5417 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5417 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5417 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5417 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5417 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5417 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5418
  * @tc.name : h2dts_gen_5418
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5418', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5418 { int fA; long fB; char16_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5418 { int fA; long fB; char16_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5418 { int fA; long fB; char16_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5418 { int fA; long fB; char16_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5418 { int fA; long fB; char16_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5418 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5418 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5418 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5418 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5418 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5418 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5418 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5419
  * @tc.name : h2dts_gen_5419
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5419', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5419 { int fA; long fB; char32_t fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5419 { int fA; long fB; char32_t fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5419 { int fA; long fB; char32_t fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5419 { int fA; long fB; char32_t fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5419 { int fA; long fB; char32_t fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5419 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5419 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5419 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5419 生成结果缺少片段 1');
      const expectSnippet2 = 'string';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5419 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5419 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5419 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5420
  * @tc.name : h2dts_gen_5420
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5420', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5420 { int fA; long fB; std::string::iterator fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5420 { int fA; long fB; std::string::iterator fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5420 { int fA; long fB; std::string::iterator fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5420 { int fA; long fB; std::string::iterator fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5420 { int fA; long fB; std::string::iterator fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5420 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5420 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5420 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5420 生成结果缺少片段 1');
      const expectSnippet2 = 'IterableIterator<string>';
      assert.ok(result.includes(expectSnippet2), 'h2dts_gen_5420 生成结果缺少片段 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5420 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5420 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5421
  * @tc.name : h2dts_gen_5421
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5421', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5421 { int fA; long fB; std::vector<int> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5421 { int fA; long fB; std::vector<int> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5421 { int fA; long fB; std::vector<int> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5421 { int fA; long fB; std::vector<int> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5421 { int fA; long fB; std::vector<int> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5421 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5421 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5421 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5421 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5421 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5421 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5422
  * @tc.name : h2dts_gen_5422
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5422', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5422 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5422 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5422 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5422 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5422 { int fA; long fB; std::vector<size_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5422 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5422 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5422 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5422 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5422 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5422 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5423
  * @tc.name : h2dts_gen_5423
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5423', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5423 { int fA; long fB; std::vector<double> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5423 { int fA; long fB; std::vector<double> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5423 { int fA; long fB; std::vector<double> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5423 { int fA; long fB; std::vector<double> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5423 { int fA; long fB; std::vector<double> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5423 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5423 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5423 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5423 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5423 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5423 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5424
  * @tc.name : h2dts_gen_5424
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5424', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5424 { int fA; long fB; std::vector<float> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5424 { int fA; long fB; std::vector<float> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5424 { int fA; long fB; std::vector<float> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5424 { int fA; long fB; std::vector<float> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5424 { int fA; long fB; std::vector<float> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5424 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5424 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5424 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5424 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5424 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5424 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5425
  * @tc.name : h2dts_gen_5425
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5425', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5425 { int fA; long fB; std::vector<long> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5425 { int fA; long fB; std::vector<long> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5425 { int fA; long fB; std::vector<long> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5425 { int fA; long fB; std::vector<long> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5425 { int fA; long fB; std::vector<long> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5425 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5425 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5425 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5425 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5425 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5425 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5426
  * @tc.name : h2dts_gen_5426
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5426', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5426 { int fA; long fB; std::vector<short> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5426 { int fA; long fB; std::vector<short> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5426 { int fA; long fB; std::vector<short> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5426 { int fA; long fB; std::vector<short> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5426 { int fA; long fB; std::vector<short> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5426 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5426 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5426 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5426 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5426 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5426 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5427
  * @tc.name : h2dts_gen_5427
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5427', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5427 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5427 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5427 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5427 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5427 { int fA; long fB; std::vector<uint8_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5427 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5427 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5427 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5427 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5427 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5427 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5428
  * @tc.name : h2dts_gen_5428
  * @tc.desc : h2dts gen：扩充-R5-class 三成员类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5428', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R5Cls3_5428 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
        unions: parseUnion(`class R5Cls3_5428 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
        structs: parseStruct(`class R5Cls3_5428 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
        classes: parseClass(`class R5Cls3_5428 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
        funcs: parseFunction(`class R5Cls3_5428 { int fA; long fB; std::vector<uint16_t> fC; void sync(); };`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5428 生成结果为空');
      const expectSnippet0 = 'export class R5Cls3_5428 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5428 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5428 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5428 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5428 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5429
  * @tc.name : h2dts_gen_5429
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5429', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5429 { int value; void reset(); } R5St5429;`),
        unions: parseUnion(`typedef struct R5St5429 { int value; void reset(); } R5St5429;`),
        structs: parseStruct(`typedef struct R5St5429 { int value; void reset(); } R5St5429;`),
        classes: parseClass(`typedef struct R5St5429 { int value; void reset(); } R5St5429;`),
        funcs: parseFunction(`typedef struct R5St5429 { int value; void reset(); } R5St5429;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5429 生成结果为空');
      const expectSnippet0 = 'export type R5St5429 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5429 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5429 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5429 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5429 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5430
  * @tc.name : h2dts_gen_5430
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5430', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5430 { int value; int sum(int a, int b); } R5St5430;`),
        unions: parseUnion(`typedef struct R5St5430 { int value; int sum(int a, int b); } R5St5430;`),
        structs: parseStruct(`typedef struct R5St5430 { int value; int sum(int a, int b); } R5St5430;`),
        classes: parseClass(`typedef struct R5St5430 { int value; int sum(int a, int b); } R5St5430;`),
        funcs: parseFunction(`typedef struct R5St5430 { int value; int sum(int a, int b); } R5St5430;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5430 生成结果为空');
      const expectSnippet0 = 'export type R5St5430 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5430 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5430 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5430 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5430 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5431
  * @tc.name : h2dts_gen_5431
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5431', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5431 { int value; bool check() const; } R5St5431;`),
        unions: parseUnion(`typedef struct R5St5431 { int value; bool check() const; } R5St5431;`),
        structs: parseStruct(`typedef struct R5St5431 { int value; bool check() const; } R5St5431;`),
        classes: parseClass(`typedef struct R5St5431 { int value; bool check() const; } R5St5431;`),
        funcs: parseFunction(`typedef struct R5St5431 { int value; bool check() const; } R5St5431;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5431 生成结果为空');
      const expectSnippet0 = 'export type R5St5431 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5431 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5431 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5431 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5431 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5432
  * @tc.name : h2dts_gen_5432
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5432', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5432 { int value; std::string label(); } R5St5432;`),
        unions: parseUnion(`typedef struct R5St5432 { int value; std::string label(); } R5St5432;`),
        structs: parseStruct(`typedef struct R5St5432 { int value; std::string label(); } R5St5432;`),
        classes: parseClass(`typedef struct R5St5432 { int value; std::string label(); } R5St5432;`),
        funcs: parseFunction(`typedef struct R5St5432 { int value; std::string label(); } R5St5432;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5432 生成结果为空');
      const expectSnippet0 = 'export type R5St5432 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5432 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5432 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5432 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5432 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5433
  * @tc.name : h2dts_gen_5433
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5433', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5433 { int value; double ratio(); } R5St5433;`),
        unions: parseUnion(`typedef struct R5St5433 { int value; double ratio(); } R5St5433;`),
        structs: parseStruct(`typedef struct R5St5433 { int value; double ratio(); } R5St5433;`),
        classes: parseClass(`typedef struct R5St5433 { int value; double ratio(); } R5St5433;`),
        funcs: parseFunction(`typedef struct R5St5433 { int value; double ratio(); } R5St5433;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5433 生成结果为空');
      const expectSnippet0 = 'export type R5St5433 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5433 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5433 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5433 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5433 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5434
  * @tc.name : h2dts_gen_5434
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `int` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5434', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5434 { int value; void set(int v); } R5St5434;`),
        unions: parseUnion(`typedef struct R5St5434 { int value; void set(int v); } R5St5434;`),
        structs: parseStruct(`typedef struct R5St5434 { int value; void set(int v); } R5St5434;`),
        classes: parseClass(`typedef struct R5St5434 { int value; void set(int v); } R5St5434;`),
        funcs: parseFunction(`typedef struct R5St5434 { int value; void set(int v); } R5St5434;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5434 生成结果为空');
      const expectSnippet0 = 'export type R5St5434 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5434 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5434 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5434 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5434 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5435
  * @tc.name : h2dts_gen_5435
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5435', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5435 { double value; void reset(); } R5St5435;`),
        unions: parseUnion(`typedef struct R5St5435 { double value; void reset(); } R5St5435;`),
        structs: parseStruct(`typedef struct R5St5435 { double value; void reset(); } R5St5435;`),
        classes: parseClass(`typedef struct R5St5435 { double value; void reset(); } R5St5435;`),
        funcs: parseFunction(`typedef struct R5St5435 { double value; void reset(); } R5St5435;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5435 生成结果为空');
      const expectSnippet0 = 'export type R5St5435 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5435 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5435 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5435 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5435 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5436
  * @tc.name : h2dts_gen_5436
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5436', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5436 { double value; int sum(int a, int b); } R5St5436;`),
        unions: parseUnion(`typedef struct R5St5436 { double value; int sum(int a, int b); } R5St5436;`),
        structs: parseStruct(`typedef struct R5St5436 { double value; int sum(int a, int b); } R5St5436;`),
        classes: parseClass(`typedef struct R5St5436 { double value; int sum(int a, int b); } R5St5436;`),
        funcs: parseFunction(`typedef struct R5St5436 { double value; int sum(int a, int b); } R5St5436;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5436 生成结果为空');
      const expectSnippet0 = 'export type R5St5436 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5436 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5436 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5436 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5436 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5437
  * @tc.name : h2dts_gen_5437
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5437', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5437 { double value; bool check() const; } R5St5437;`),
        unions: parseUnion(`typedef struct R5St5437 { double value; bool check() const; } R5St5437;`),
        structs: parseStruct(`typedef struct R5St5437 { double value; bool check() const; } R5St5437;`),
        classes: parseClass(`typedef struct R5St5437 { double value; bool check() const; } R5St5437;`),
        funcs: parseFunction(`typedef struct R5St5437 { double value; bool check() const; } R5St5437;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5437 生成结果为空');
      const expectSnippet0 = 'export type R5St5437 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5437 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5437 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5437 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5437 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5438
  * @tc.name : h2dts_gen_5438
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5438', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5438 { double value; std::string label(); } R5St5438;`),
        unions: parseUnion(`typedef struct R5St5438 { double value; std::string label(); } R5St5438;`),
        structs: parseStruct(`typedef struct R5St5438 { double value; std::string label(); } R5St5438;`),
        classes: parseClass(`typedef struct R5St5438 { double value; std::string label(); } R5St5438;`),
        funcs: parseFunction(`typedef struct R5St5438 { double value; std::string label(); } R5St5438;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5438 生成结果为空');
      const expectSnippet0 = 'export type R5St5438 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5438 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5438 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5438 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5438 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5439
  * @tc.name : h2dts_gen_5439
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5439', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5439 { double value; double ratio(); } R5St5439;`),
        unions: parseUnion(`typedef struct R5St5439 { double value; double ratio(); } R5St5439;`),
        structs: parseStruct(`typedef struct R5St5439 { double value; double ratio(); } R5St5439;`),
        classes: parseClass(`typedef struct R5St5439 { double value; double ratio(); } R5St5439;`),
        funcs: parseFunction(`typedef struct R5St5439 { double value; double ratio(); } R5St5439;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5439 生成结果为空');
      const expectSnippet0 = 'export type R5St5439 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5439 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5439 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5439 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5439 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5440
  * @tc.name : h2dts_gen_5440
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5440', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5440 { double value; void set(int v); } R5St5440;`),
        unions: parseUnion(`typedef struct R5St5440 { double value; void set(int v); } R5St5440;`),
        structs: parseStruct(`typedef struct R5St5440 { double value; void set(int v); } R5St5440;`),
        classes: parseClass(`typedef struct R5St5440 { double value; void set(int v); } R5St5440;`),
        funcs: parseFunction(`typedef struct R5St5440 { double value; void set(int v); } R5St5440;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5440 生成结果为空');
      const expectSnippet0 = 'export type R5St5440 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5440 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5440 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5440 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5440 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5441
  * @tc.name : h2dts_gen_5441
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5441', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5441 { bool value; void reset(); } R5St5441;`),
        unions: parseUnion(`typedef struct R5St5441 { bool value; void reset(); } R5St5441;`),
        structs: parseStruct(`typedef struct R5St5441 { bool value; void reset(); } R5St5441;`),
        classes: parseClass(`typedef struct R5St5441 { bool value; void reset(); } R5St5441;`),
        funcs: parseFunction(`typedef struct R5St5441 { bool value; void reset(); } R5St5441;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5441 生成结果为空');
      const expectSnippet0 = 'export type R5St5441 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5441 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5441 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5441 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5441 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5442
  * @tc.name : h2dts_gen_5442
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5442', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5442 { bool value; int sum(int a, int b); } R5St5442;`),
        unions: parseUnion(`typedef struct R5St5442 { bool value; int sum(int a, int b); } R5St5442;`),
        structs: parseStruct(`typedef struct R5St5442 { bool value; int sum(int a, int b); } R5St5442;`),
        classes: parseClass(`typedef struct R5St5442 { bool value; int sum(int a, int b); } R5St5442;`),
        funcs: parseFunction(`typedef struct R5St5442 { bool value; int sum(int a, int b); } R5St5442;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5442 生成结果为空');
      const expectSnippet0 = 'export type R5St5442 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5442 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5442 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5442 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5442 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5443
  * @tc.name : h2dts_gen_5443
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5443', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5443 { bool value; bool check() const; } R5St5443;`),
        unions: parseUnion(`typedef struct R5St5443 { bool value; bool check() const; } R5St5443;`),
        structs: parseStruct(`typedef struct R5St5443 { bool value; bool check() const; } R5St5443;`),
        classes: parseClass(`typedef struct R5St5443 { bool value; bool check() const; } R5St5443;`),
        funcs: parseFunction(`typedef struct R5St5443 { bool value; bool check() const; } R5St5443;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5443 生成结果为空');
      const expectSnippet0 = 'export type R5St5443 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5443 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5443 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5443 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5443 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5444
  * @tc.name : h2dts_gen_5444
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5444', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5444 { bool value; std::string label(); } R5St5444;`),
        unions: parseUnion(`typedef struct R5St5444 { bool value; std::string label(); } R5St5444;`),
        structs: parseStruct(`typedef struct R5St5444 { bool value; std::string label(); } R5St5444;`),
        classes: parseClass(`typedef struct R5St5444 { bool value; std::string label(); } R5St5444;`),
        funcs: parseFunction(`typedef struct R5St5444 { bool value; std::string label(); } R5St5444;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5444 生成结果为空');
      const expectSnippet0 = 'export type R5St5444 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5444 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5444 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5444 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5444 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5445
  * @tc.name : h2dts_gen_5445
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5445', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5445 { bool value; double ratio(); } R5St5445;`),
        unions: parseUnion(`typedef struct R5St5445 { bool value; double ratio(); } R5St5445;`),
        structs: parseStruct(`typedef struct R5St5445 { bool value; double ratio(); } R5St5445;`),
        classes: parseClass(`typedef struct R5St5445 { bool value; double ratio(); } R5St5445;`),
        funcs: parseFunction(`typedef struct R5St5445 { bool value; double ratio(); } R5St5445;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5445 生成结果为空');
      const expectSnippet0 = 'export type R5St5445 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5445 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5445 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5445 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5445 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5446
  * @tc.name : h2dts_gen_5446
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5446', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5446 { bool value; void set(int v); } R5St5446;`),
        unions: parseUnion(`typedef struct R5St5446 { bool value; void set(int v); } R5St5446;`),
        structs: parseStruct(`typedef struct R5St5446 { bool value; void set(int v); } R5St5446;`),
        classes: parseClass(`typedef struct R5St5446 { bool value; void set(int v); } R5St5446;`),
        funcs: parseFunction(`typedef struct R5St5446 { bool value; void set(int v); } R5St5446;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5446 生成结果为空');
      const expectSnippet0 = 'export type R5St5446 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5446 生成结果缺少片段 0');
      const expectSnippet1 = 'boolean';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5446 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5446 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5446 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5447
  * @tc.name : h2dts_gen_5447
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5447', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5447 { std::string value; void reset(); } R5St5447;`),
        unions: parseUnion(`typedef struct R5St5447 { std::string value; void reset(); } R5St5447;`),
        structs: parseStruct(`typedef struct R5St5447 { std::string value; void reset(); } R5St5447;`),
        classes: parseClass(`typedef struct R5St5447 { std::string value; void reset(); } R5St5447;`),
        funcs: parseFunction(`typedef struct R5St5447 { std::string value; void reset(); } R5St5447;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5447 生成结果为空');
      const expectSnippet0 = 'export type R5St5447 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5447 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5447 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5447 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5447 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5448
  * @tc.name : h2dts_gen_5448
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5448', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5448 { std::string value; int sum(int a, int b); } R5St5448;`),
        unions: parseUnion(`typedef struct R5St5448 { std::string value; int sum(int a, int b); } R5St5448;`),
        structs: parseStruct(`typedef struct R5St5448 { std::string value; int sum(int a, int b); } R5St5448;`),
        classes: parseClass(`typedef struct R5St5448 { std::string value; int sum(int a, int b); } R5St5448;`),
        funcs: parseFunction(`typedef struct R5St5448 { std::string value; int sum(int a, int b); } R5St5448;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5448 生成结果为空');
      const expectSnippet0 = 'export type R5St5448 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5448 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5448 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5448 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5448 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5449
  * @tc.name : h2dts_gen_5449
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5449', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5449 { std::string value; bool check() const; } R5St5449;`),
        unions: parseUnion(`typedef struct R5St5449 { std::string value; bool check() const; } R5St5449;`),
        structs: parseStruct(`typedef struct R5St5449 { std::string value; bool check() const; } R5St5449;`),
        classes: parseClass(`typedef struct R5St5449 { std::string value; bool check() const; } R5St5449;`),
        funcs: parseFunction(`typedef struct R5St5449 { std::string value; bool check() const; } R5St5449;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5449 生成结果为空');
      const expectSnippet0 = 'export type R5St5449 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5449 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5449 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5449 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5449 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5450
  * @tc.name : h2dts_gen_5450
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5450', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5450 { std::string value; std::string label(); } R5St5450;`),
        unions: parseUnion(`typedef struct R5St5450 { std::string value; std::string label(); } R5St5450;`),
        structs: parseStruct(`typedef struct R5St5450 { std::string value; std::string label(); } R5St5450;`),
        classes: parseClass(`typedef struct R5St5450 { std::string value; std::string label(); } R5St5450;`),
        funcs: parseFunction(`typedef struct R5St5450 { std::string value; std::string label(); } R5St5450;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5450 生成结果为空');
      const expectSnippet0 = 'export type R5St5450 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5450 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5450 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5450 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5450 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5451
  * @tc.name : h2dts_gen_5451
  * @tc.desc : h2dts gen：扩充-R5-struct 带方法 `std::string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5451', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct R5St5451 { std::string value; double ratio(); } R5St5451;`),
        unions: parseUnion(`typedef struct R5St5451 { std::string value; double ratio(); } R5St5451;`),
        structs: parseStruct(`typedef struct R5St5451 { std::string value; double ratio(); } R5St5451;`),
        classes: parseClass(`typedef struct R5St5451 { std::string value; double ratio(); } R5St5451;`),
        funcs: parseFunction(`typedef struct R5St5451 { std::string value; double ratio(); } R5St5451;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5451 生成结果为空');
      const expectSnippet0 = 'export type R5St5451 = {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5451 生成结果缺少片段 0');
      const expectSnippet1 = 'string';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_5451 生成结果缺少片段 1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5451 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5451 执行异常: ${String(err)}`);
    }
  });
});
