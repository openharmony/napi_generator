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
import { getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions, genDtsFile } from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 执行 10 次 ≤ 6s（实测约 0.1~3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_H2DTS_Gen_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part05.');
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part05.');

  /**
  * @tc.number h2dts_gen_0139
  * @tc.name h2dts_gen_0139
  * @tc.desc h2dts gen：数组入参 std::vector<double> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0139', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA01(std::vector<double> v);`),
        unions: parseUnion(`void genDA01(std::vector<double> v);`),
        structs: parseStruct(`void genDA01(std::vector<double> v);`),
        classes: parseClass(`void genDA01(std::vector<double> v);`),
        funcs: parseFunction(`void genDA01(std::vector<double> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0139 生成结果为空');
      assert.ok(result.includes('export function genDA01(v: Array<number>): void;'), 'h2dts_gen_0139 生成结果缺少片段 0: ' + 'export function genDA01(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0140
  * @tc.name h2dts_gen_0140
  * @tc.desc h2dts gen：数组入参 std::vector<bool> → Array<boolean> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0140', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA02(std::vector<bool> v);`),
        unions: parseUnion(`void genDA02(std::vector<bool> v);`),
        structs: parseStruct(`void genDA02(std::vector<bool> v);`),
        classes: parseClass(`void genDA02(std::vector<bool> v);`),
        funcs: parseFunction(`void genDA02(std::vector<bool> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0140 生成结果为空');
      assert.ok(result.includes('export function genDA02(v: Array<boolean>): void;'), 'h2dts_gen_0140 生成结果缺少片段 0: ' + 'export function genDA02(v: Array<boolean>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0141
  * @tc.name h2dts_gen_0141
  * @tc.desc h2dts gen：数组入参 std::vector<wchar_t> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0141', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA03(std::vector<wchar_t> v);`),
        unions: parseUnion(`void genDA03(std::vector<wchar_t> v);`),
        structs: parseStruct(`void genDA03(std::vector<wchar_t> v);`),
        classes: parseClass(`void genDA03(std::vector<wchar_t> v);`),
        funcs: parseFunction(`void genDA03(std::vector<wchar_t> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0141 生成结果为空');
      assert.ok(result.includes('export function genDA03(v: Array<string>): void;'), 'h2dts_gen_0141 生成结果缺少片段 0: ' + 'export function genDA03(v: Array<string>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0142
  * @tc.name h2dts_gen_0142
  * @tc.desc h2dts gen：数组入参 std::vector<std::wstring> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0142', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA04(std::vector<std::wstring> v);`),
        unions: parseUnion(`void genDA04(std::vector<std::wstring> v);`),
        structs: parseStruct(`void genDA04(std::vector<std::wstring> v);`),
        classes: parseClass(`void genDA04(std::vector<std::wstring> v);`),
        funcs: parseFunction(`void genDA04(std::vector<std::wstring> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0142 生成结果为空');
      assert.ok(result.includes('export function genDA04(v: Array<string>): void;'), 'h2dts_gen_0142 生成结果缺少片段 0: ' + 'export function genDA04(v: Array<string>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0143
  * @tc.name h2dts_gen_0143
  * @tc.desc h2dts gen：数组入参 std::vector<unsigned int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0143', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA05(std::vector<unsigned int> v);`),
        unions: parseUnion(`void genDA05(std::vector<unsigned int> v);`),
        structs: parseStruct(`void genDA05(std::vector<unsigned int> v);`),
        classes: parseClass(`void genDA05(std::vector<unsigned int> v);`),
        funcs: parseFunction(`void genDA05(std::vector<unsigned int> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0143 生成结果为空');
      assert.ok(result.includes('export function genDA05(v: Array<number>): void;'), 'h2dts_gen_0143 生成结果缺少片段 0: ' + 'export function genDA05(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0144
  * @tc.name h2dts_gen_0144
  * @tc.desc h2dts gen：数组入参 std::vector<short> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0144', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA06(std::vector<short> v);`),
        unions: parseUnion(`void genDA06(std::vector<short> v);`),
        structs: parseStruct(`void genDA06(std::vector<short> v);`),
        classes: parseClass(`void genDA06(std::vector<short> v);`),
        funcs: parseFunction(`void genDA06(std::vector<short> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0144 生成结果为空');
      assert.ok(result.includes('export function genDA06(v: Array<number>): void;'), 'h2dts_gen_0144 生成结果缺少片段 0: ' + 'export function genDA06(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0145
  * @tc.name h2dts_gen_0145
  * @tc.desc h2dts gen：数组入参 std::vector<int64_t> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0145', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA07(std::vector<int64_t> v);`),
        unions: parseUnion(`void genDA07(std::vector<int64_t> v);`),
        structs: parseStruct(`void genDA07(std::vector<int64_t> v);`),
        classes: parseClass(`void genDA07(std::vector<int64_t> v);`),
        funcs: parseFunction(`void genDA07(std::vector<int64_t> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0145 生成结果为空');
      assert.ok(result.includes('export function genDA07(v: Array<number>): void;'), 'h2dts_gen_0145 生成结果缺少片段 0: ' + 'export function genDA07(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0146
  * @tc.name h2dts_gen_0146
  * @tc.desc h2dts gen：数组入参 std::vector<uint8_t> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0146', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA08(std::vector<uint8_t> v);`),
        unions: parseUnion(`void genDA08(std::vector<uint8_t> v);`),
        structs: parseStruct(`void genDA08(std::vector<uint8_t> v);`),
        classes: parseClass(`void genDA08(std::vector<uint8_t> v);`),
        funcs: parseFunction(`void genDA08(std::vector<uint8_t> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0146 生成结果为空');
      assert.ok(result.includes('export function genDA08(v: Array<number>): void;'), 'h2dts_gen_0146 生成结果缺少片段 0: ' + 'export function genDA08(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0147
  * @tc.name h2dts_gen_0147
  * @tc.desc h2dts gen：数组入参 std::vector<size_t> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0147', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA09(std::vector<size_t> v);`),
        unions: parseUnion(`void genDA09(std::vector<size_t> v);`),
        structs: parseStruct(`void genDA09(std::vector<size_t> v);`),
        classes: parseClass(`void genDA09(std::vector<size_t> v);`),
        funcs: parseFunction(`void genDA09(std::vector<size_t> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0147 生成结果为空');
      assert.ok(result.includes('export function genDA09(v: Array<number>): void;'), 'h2dts_gen_0147 生成结果缺少片段 0: ' + 'export function genDA09(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0148
  * @tc.name h2dts_gen_0148
  * @tc.desc h2dts gen：数组入参 std::vector<char> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0148', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA10(std::vector<char> v);`),
        unions: parseUnion(`void genDA10(std::vector<char> v);`),
        structs: parseStruct(`void genDA10(std::vector<char> v);`),
        classes: parseClass(`void genDA10(std::vector<char> v);`),
        funcs: parseFunction(`void genDA10(std::vector<char> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0148 生成结果为空');
      assert.ok(result.includes('export function genDA10(v: Array<string>): void;'), 'h2dts_gen_0148 生成结果缺少片段 0: ' + 'export function genDA10(v: Array<string>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0149
  * @tc.name h2dts_gen_0149
  * @tc.desc h2dts gen：数组入参 std::vector<float> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0149', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA11(std::vector<float> v);`),
        unions: parseUnion(`void genDA11(std::vector<float> v);`),
        structs: parseStruct(`void genDA11(std::vector<float> v);`),
        classes: parseClass(`void genDA11(std::vector<float> v);`),
        funcs: parseFunction(`void genDA11(std::vector<float> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0149 生成结果为空');
      assert.ok(result.includes('export function genDA11(v: Array<number>): void;'), 'h2dts_gen_0149 生成结果缺少片段 0: ' + 'export function genDA11(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0150
  * @tc.name h2dts_gen_0150
  * @tc.desc h2dts gen：数组入参 std::vector<long> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0150', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA12(std::vector<long> v);`),
        unions: parseUnion(`void genDA12(std::vector<long> v);`),
        structs: parseStruct(`void genDA12(std::vector<long> v);`),
        classes: parseClass(`void genDA12(std::vector<long> v);`),
        funcs: parseFunction(`void genDA12(std::vector<long> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0150 生成结果为空');
      assert.ok(result.includes('export function genDA12(v: Array<number>): void;'), 'h2dts_gen_0150 生成结果缺少片段 0: ' + 'export function genDA12(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0151
  * @tc.name h2dts_gen_0151
  * @tc.desc h2dts gen：数组入参 std::array<int,10> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0151', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA13(std::array<int,10> v);`),
        unions: parseUnion(`void genDA13(std::array<int,10> v);`),
        structs: parseStruct(`void genDA13(std::array<int,10> v);`),
        classes: parseClass(`void genDA13(std::array<int,10> v);`),
        funcs: parseFunction(`void genDA13(std::array<int,10> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0151 生成结果为空');
      assert.ok(result.includes('export function genDA13(v: Array<number>): void;'), 'h2dts_gen_0151 生成结果缺少片段 0: ' + 'export function genDA13(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0152
  * @tc.name h2dts_gen_0152
  * @tc.desc h2dts gen：数组入参 std::array<std::string,5> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0152', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA14(std::array<std::string,5> v);`),
        unions: parseUnion(`void genDA14(std::array<std::string,5> v);`),
        structs: parseStruct(`void genDA14(std::array<std::string,5> v);`),
        classes: parseClass(`void genDA14(std::array<std::string,5> v);`),
        funcs: parseFunction(`void genDA14(std::array<std::string,5> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0152 生成结果为空');
      assert.ok(result.includes('export function genDA14(v: Array<string>): void;'), 'h2dts_gen_0152 生成结果缺少片段 0: ' + 'export function genDA14(v: Array<string>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0153
  * @tc.name h2dts_gen_0153
  * @tc.desc h2dts gen：数组入参 std::deque<int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0153', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA15(std::deque<int> v);`),
        unions: parseUnion(`void genDA15(std::deque<int> v);`),
        structs: parseStruct(`void genDA15(std::deque<int> v);`),
        classes: parseClass(`void genDA15(std::deque<int> v);`),
        funcs: parseFunction(`void genDA15(std::deque<int> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0153 生成结果为空');
      assert.ok(result.includes('export function genDA15(v: Array<number>): void;'), 'h2dts_gen_0153 生成结果缺少片段 0: ' + 'export function genDA15(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0154
  * @tc.name h2dts_gen_0154
  * @tc.desc h2dts gen：数组入参 std::deque<std::string> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0154', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA16(std::deque<std::string> v);`),
        unions: parseUnion(`void genDA16(std::deque<std::string> v);`),
        structs: parseStruct(`void genDA16(std::deque<std::string> v);`),
        classes: parseClass(`void genDA16(std::deque<std::string> v);`),
        funcs: parseFunction(`void genDA16(std::deque<std::string> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0154 生成结果为空');
      assert.ok(result.includes('export function genDA16(v: Array<string>): void;'), 'h2dts_gen_0154 生成结果缺少片段 0: ' + 'export function genDA16(v: Array<string>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0155
  * @tc.name h2dts_gen_0155
  * @tc.desc h2dts gen：数组入参 std::list<int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0155', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA17(std::list<int> v);`),
        unions: parseUnion(`void genDA17(std::list<int> v);`),
        structs: parseStruct(`void genDA17(std::list<int> v);`),
        classes: parseClass(`void genDA17(std::list<int> v);`),
        funcs: parseFunction(`void genDA17(std::list<int> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0155 生成结果为空');
      assert.ok(result.includes('export function genDA17(v: Array<number>): void;'), 'h2dts_gen_0155 生成结果缺少片段 0: ' + 'export function genDA17(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0156
  * @tc.name h2dts_gen_0156
  * @tc.desc h2dts gen：数组入参 std::list<std::string> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0156', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA18(std::list<std::string> v);`),
        unions: parseUnion(`void genDA18(std::list<std::string> v);`),
        structs: parseStruct(`void genDA18(std::list<std::string> v);`),
        classes: parseClass(`void genDA18(std::list<std::string> v);`),
        funcs: parseFunction(`void genDA18(std::list<std::string> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0156 生成结果为空');
      assert.ok(result.includes('export function genDA18(v: Array<string>): void;'), 'h2dts_gen_0156 生成结果缺少片段 0: ' + 'export function genDA18(v: Array<string>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0157
  * @tc.name h2dts_gen_0157
  * @tc.desc h2dts gen：数组入参 std::forward_list<int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0157', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA19(std::forward_list<int> v);`),
        unions: parseUnion(`void genDA19(std::forward_list<int> v);`),
        structs: parseStruct(`void genDA19(std::forward_list<int> v);`),
        classes: parseClass(`void genDA19(std::forward_list<int> v);`),
        funcs: parseFunction(`void genDA19(std::forward_list<int> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0157 生成结果为空');
      assert.ok(result.includes('export function genDA19(v: Array<number>): void;'), 'h2dts_gen_0157 生成结果缺少片段 0: ' + 'export function genDA19(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0158
  * @tc.name h2dts_gen_0158
  * @tc.desc h2dts gen：数组入参 std::queue<int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0158', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA20(std::queue<int> v);`),
        unions: parseUnion(`void genDA20(std::queue<int> v);`),
        structs: parseStruct(`void genDA20(std::queue<int> v);`),
        classes: parseClass(`void genDA20(std::queue<int> v);`),
        funcs: parseFunction(`void genDA20(std::queue<int> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0158 生成结果为空');
      assert.ok(result.includes('export function genDA20(v: Array<number>): void;'), 'h2dts_gen_0158 生成结果缺少片段 0: ' + 'export function genDA20(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0159
  * @tc.name h2dts_gen_0159
  * @tc.desc h2dts gen：数组入参 std::stack<int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0159', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA21(std::stack<int> v);`),
        unions: parseUnion(`void genDA21(std::stack<int> v);`),
        structs: parseStruct(`void genDA21(std::stack<int> v);`),
        classes: parseClass(`void genDA21(std::stack<int> v);`),
        funcs: parseFunction(`void genDA21(std::stack<int> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0159 生成结果为空');
      assert.ok(result.includes('export function genDA21(v: Array<number>): void;'), 'h2dts_gen_0159 生成结果缺少片段 0: ' + 'export function genDA21(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0160
  * @tc.name h2dts_gen_0160
  * @tc.desc h2dts gen：数组入参 std::priority_queue<int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0160', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA22(std::priority_queue<int> v);`),
        unions: parseUnion(`void genDA22(std::priority_queue<int> v);`),
        structs: parseStruct(`void genDA22(std::priority_queue<int> v);`),
        classes: parseClass(`void genDA22(std::priority_queue<int> v);`),
        funcs: parseFunction(`void genDA22(std::priority_queue<int> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0160 生成结果为空');
      assert.ok(result.includes('export function genDA22(v: Array<number>): void;'), 'h2dts_gen_0160 生成结果缺少片段 0: ' + 'export function genDA22(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0161
  * @tc.name h2dts_gen_0161
  * @tc.desc h2dts gen：数组入参 std::valarray<double> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0161', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA23(std::valarray<double> v);`),
        unions: parseUnion(`void genDA23(std::valarray<double> v);`),
        structs: parseStruct(`void genDA23(std::valarray<double> v);`),
        classes: parseClass(`void genDA23(std::valarray<double> v);`),
        funcs: parseFunction(`void genDA23(std::valarray<double> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0161 生成结果为空');
      assert.ok(result.includes('export function genDA23(v: Array<number>): void;'), 'h2dts_gen_0161 生成结果缺少片段 0: ' + 'export function genDA23(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0162
  * @tc.name h2dts_gen_0162
  * @tc.desc h2dts gen：数组入参 std::basic_string<char> → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0162', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA24(std::basic_string<char> v);`),
        unions: parseUnion(`void genDA24(std::basic_string<char> v);`),
        structs: parseStruct(`void genDA24(std::basic_string<char> v);`),
        classes: parseClass(`void genDA24(std::basic_string<char> v);`),
        funcs: parseFunction(`void genDA24(std::basic_string<char> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0162 生成结果为空');
      assert.ok(result.includes('export function genDA24(v: string): void;'), 'h2dts_gen_0162 生成结果缺少片段 0: ' + 'export function genDA24(v: string): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0162 执行异常: ${String(err)}`);
    }
  });
});
