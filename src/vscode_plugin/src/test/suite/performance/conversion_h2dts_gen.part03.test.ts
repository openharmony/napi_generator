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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part03.');

  /**
  * @tc.number h2dts_gen_0064
  * @tc.name h2dts_gen_0064
  * @tc.desc h2dts gen：扩充-gen：入参 float → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0064', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP005(float v);`),
        unions: parseUnion(`void genP005(float v);`),
        structs: parseStruct(`void genP005(float v);`),
        classes: parseClass(`void genP005(float v);`),
        funcs: parseFunction(`void genP005(float v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0064 生成结果为空');
      assert.ok(result.includes('export function genP005(v: number): void;'), 'h2dts_gen_0064 生成结果缺少片段 0: ' + 'export function genP005(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0064 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0065
  * @tc.name h2dts_gen_0065
  * @tc.desc h2dts gen：扩充-gen：入参 long → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0065', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP006(long v);`),
        unions: parseUnion(`void genP006(long v);`),
        structs: parseStruct(`void genP006(long v);`),
        classes: parseClass(`void genP006(long v);`),
        funcs: parseFunction(`void genP006(long v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0065 生成结果为空');
      assert.ok(result.includes('export function genP006(v: number): void;'), 'h2dts_gen_0065 生成结果缺少片段 0: ' + 'export function genP006(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0065 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0066
  * @tc.name h2dts_gen_0066
  * @tc.desc h2dts gen：扩充-gen：入参 short → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0066', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP007(short v);`),
        unions: parseUnion(`void genP007(short v);`),
        structs: parseStruct(`void genP007(short v);`),
        classes: parseClass(`void genP007(short v);`),
        funcs: parseFunction(`void genP007(short v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0066 生成结果为空');
      assert.ok(result.includes('export function genP007(v: number): void;'), 'h2dts_gen_0066 生成结果缺少片段 0: ' + 'export function genP007(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0066 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0067
  * @tc.name h2dts_gen_0067
  * @tc.desc h2dts gen：扩充-gen：入参 unsigned int → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0067', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP008(unsigned int v);`),
        unions: parseUnion(`void genP008(unsigned int v);`),
        structs: parseStruct(`void genP008(unsigned int v);`),
        classes: parseClass(`void genP008(unsigned int v);`),
        funcs: parseFunction(`void genP008(unsigned int v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0067 生成结果为空');
      assert.ok(result.includes('export function genP008(v: number): void;'), 'h2dts_gen_0067 生成结果缺少片段 0: ' + 'export function genP008(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0067 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0068
  * @tc.name h2dts_gen_0068
  * @tc.desc h2dts gen：扩充-gen：入参 size_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0068', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP009(size_t v);`),
        unions: parseUnion(`void genP009(size_t v);`),
        structs: parseStruct(`void genP009(size_t v);`),
        classes: parseClass(`void genP009(size_t v);`),
        funcs: parseFunction(`void genP009(size_t v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0068 生成结果为空');
      assert.ok(result.includes('export function genP009(v: number): void;'), 'h2dts_gen_0068 生成结果缺少片段 0: ' + 'export function genP009(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0068 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0069
  * @tc.name h2dts_gen_0069
  * @tc.desc h2dts gen：扩充-gen：入参 std::vector<int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0069', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP010(std::vector<int> v);`),
        unions: parseUnion(`void genP010(std::vector<int> v);`),
        structs: parseStruct(`void genP010(std::vector<int> v);`),
        classes: parseClass(`void genP010(std::vector<int> v);`),
        funcs: parseFunction(`void genP010(std::vector<int> v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0069 生成结果为空');
      assert.ok(result.includes('export function genP010(v: Array<number>): void;'), 'h2dts_gen_0069 生成结果缺少片段 0: ' + 'export function genP010(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0069 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0070
  * @tc.name h2dts_gen_0070
  * @tc.desc h2dts gen：扩充-gen：入参 std::vector<std::string> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0070', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP011(std::vector<std::string> v);`),
        unions: parseUnion(`void genP011(std::vector<std::string> v);`),
        structs: parseStruct(`void genP011(std::vector<std::string> v);`),
        classes: parseClass(`void genP011(std::vector<std::string> v);`),
        funcs: parseFunction(`void genP011(std::vector<std::string> v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0070 生成结果为空');
      assert.ok(result.includes('export function genP011(v: Array<string>): void;'), 'h2dts_gen_0070 生成结果缺少片段 0: ' + 'export function genP011(v: Array<string>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0070 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0071
  * @tc.name h2dts_gen_0071
  * @tc.desc h2dts gen：扩充-gen：入参 std::map<std::string,int> → Map<string, number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0071', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP012(std::map<std::string,int> v);`),
        unions: parseUnion(`void genP012(std::map<std::string,int> v);`),
        structs: parseStruct(`void genP012(std::map<std::string,int> v);`),
        classes: parseClass(`void genP012(std::map<std::string,int> v);`),
        funcs: parseFunction(`void genP012(std::map<std::string,int> v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0071 生成结果为空');
      assert.ok(result.includes('export function genP012(v: Map<string, number>): void;'), 'h2dts_gen_0071 生成结果缺少片段 0: ' + 'export function genP012(v: Map<string, number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0071 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0072
  * @tc.name h2dts_gen_0072
  * @tc.desc h2dts gen：扩充-gen：入参 std::set<int> → Set<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0072', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP013(std::set<int> v);`),
        unions: parseUnion(`void genP013(std::set<int> v);`),
        structs: parseStruct(`void genP013(std::set<int> v);`),
        classes: parseClass(`void genP013(std::set<int> v);`),
        funcs: parseFunction(`void genP013(std::set<int> v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0072 生成结果为空');
      assert.ok(result.includes('export function genP013(v: Set<number>): void;'), 'h2dts_gen_0072 生成结果缺少片段 0: ' + 'export function genP013(v: Set<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0072 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0073
  * @tc.name h2dts_gen_0073
  * @tc.desc h2dts gen：扩充-gen：入参 char* → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0073', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP014(char* v);`),
        unions: parseUnion(`void genP014(char* v);`),
        structs: parseStruct(`void genP014(char* v);`),
        classes: parseClass(`void genP014(char* v);`),
        funcs: parseFunction(`void genP014(char* v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0073 生成结果为空');
      assert.ok(result.includes('export function genP014(v: string): void;'), 'h2dts_gen_0073 生成结果缺少片段 0: ' + 'export function genP014(v: string): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0073 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0074
  * @tc.name h2dts_gen_0074
  * @tc.desc h2dts gen：扩充-gen：入参 std::wstring → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0074', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP015(std::wstring v);`),
        unions: parseUnion(`void genP015(std::wstring v);`),
        structs: parseStruct(`void genP015(std::wstring v);`),
        classes: parseClass(`void genP015(std::wstring v);`),
        funcs: parseFunction(`void genP015(std::wstring v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0074 生成结果为空');
      assert.ok(result.includes('export function genP015(v: string): void;'), 'h2dts_gen_0074 生成结果缺少片段 0: ' + 'export function genP015(v: string): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0074 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0075
  * @tc.name h2dts_gen_0075
  * @tc.desc h2dts gen：扩充-gen：入参 int64_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0075', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP016(int64_t v);`),
        unions: parseUnion(`void genP016(int64_t v);`),
        structs: parseStruct(`void genP016(int64_t v);`),
        classes: parseClass(`void genP016(int64_t v);`),
        funcs: parseFunction(`void genP016(int64_t v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0075 生成结果为空');
      assert.ok(result.includes('export function genP016(v: number): void;'), 'h2dts_gen_0075 生成结果缺少片段 0: ' + 'export function genP016(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0075 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0076
  * @tc.name h2dts_gen_0076
  * @tc.desc h2dts gen：扩充-gen：入参 uint32_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0076', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP017(uint32_t v);`),
        unions: parseUnion(`void genP017(uint32_t v);`),
        structs: parseStruct(`void genP017(uint32_t v);`),
        classes: parseClass(`void genP017(uint32_t v);`),
        funcs: parseFunction(`void genP017(uint32_t v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0076 生成结果为空');
      assert.ok(result.includes('export function genP017(v: number): void;'), 'h2dts_gen_0076 生成结果缺少片段 0: ' + 'export function genP017(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0076 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0077
  * @tc.name h2dts_gen_0077
  * @tc.desc h2dts gen：扩充-gen：入参 long long → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0077', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP018(long long v);`),
        unions: parseUnion(`void genP018(long long v);`),
        structs: parseStruct(`void genP018(long long v);`),
        classes: parseClass(`void genP018(long long v);`),
        funcs: parseFunction(`void genP018(long long v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0077 生成结果为空');
      assert.ok(result.includes('export function genP018(v: number): void;'), 'h2dts_gen_0077 生成结果缺少片段 0: ' + 'export function genP018(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0077 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0078
  * @tc.name h2dts_gen_0078
  * @tc.desc h2dts gen：扩充-gen：入参 std::pair<int,int> → [number, number] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0078', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP019(std::pair<int,int> v);`),
        unions: parseUnion(`void genP019(std::pair<int,int> v);`),
        structs: parseStruct(`void genP019(std::pair<int,int> v);`),
        classes: parseClass(`void genP019(std::pair<int,int> v);`),
        funcs: parseFunction(`void genP019(std::pair<int,int> v);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0078 生成结果为空');
      assert.ok(result.includes('export function genP019(v: [number, number]): void;'), 'h2dts_gen_0078 生成结果缺少片段 0: ' + 'export function genP019(v: [number, number]): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0078 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0079
  * @tc.name h2dts_gen_0079
  * @tc.desc h2dts gen：扩充-gen：class 成员 int/float 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0079', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls000 {
    int a;
    float b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls000 {
    int a;
    float b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls000 {
    int a;
    float b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls000 {
    int a;
    float b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls000 {
    int a;
    float b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0079 生成结果为空');
      assert.ok(result.includes('export class GenCls000 {'), 'h2dts_gen_0079 生成结果缺少片段 0: ' + 'export class GenCls000 {');
      assert.ok(result.includes('a: number;'), 'h2dts_gen_0079 生成结果缺少片段 1: ' + 'a: number;');
      assert.ok(result.includes('b: number;'), 'h2dts_gen_0079 生成结果缺少片段 2: ' + 'b: number;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0079 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0079 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0080
  * @tc.name h2dts_gen_0080
  * @tc.desc h2dts gen：扩充-gen：class 成员 char/double 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0080', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls001 {
    char a;
    double b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls001 {
    char a;
    double b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls001 {
    char a;
    double b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls001 {
    char a;
    double b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls001 {
    char a;
    double b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0080 生成结果为空');
      assert.ok(result.includes('export class GenCls001 {'), 'h2dts_gen_0080 生成结果缺少片段 0: ' + 'export class GenCls001 {');
      assert.ok(result.includes('a: string;'), 'h2dts_gen_0080 生成结果缺少片段 1: ' + 'a: string;');
      assert.ok(result.includes('b: number;'), 'h2dts_gen_0080 生成结果缺少片段 2: ' + 'b: number;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0080 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0080 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0081
  * @tc.name h2dts_gen_0081
  * @tc.desc h2dts gen：扩充-gen：class 成员 short/bool 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0081', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls002 {
    short a;
    bool b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls002 {
    short a;
    bool b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls002 {
    short a;
    bool b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls002 {
    short a;
    bool b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls002 {
    short a;
    bool b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0081 生成结果为空');
      assert.ok(result.includes('export class GenCls002 {'), 'h2dts_gen_0081 生成结果缺少片段 0: ' + 'export class GenCls002 {');
      assert.ok(result.includes('a: number;'), 'h2dts_gen_0081 生成结果缺少片段 1: ' + 'a: number;');
      assert.ok(result.includes('b: boolean;'), 'h2dts_gen_0081 生成结果缺少片段 2: ' + 'b: boolean;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0081 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0081 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0082
  * @tc.name h2dts_gen_0082
  * @tc.desc h2dts gen：扩充-gen：class 成员 long/unsigned int 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0082', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls003 {
    long a;
    unsigned int b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls003 {
    long a;
    unsigned int b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls003 {
    long a;
    unsigned int b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls003 {
    long a;
    unsigned int b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls003 {
    long a;
    unsigned int b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0082 生成结果为空');
      assert.ok(result.includes('export class GenCls003 {'), 'h2dts_gen_0082 生成结果缺少片段 0: ' + 'export class GenCls003 {');
      assert.ok(result.includes('a: number;'), 'h2dts_gen_0082 生成结果缺少片段 1: ' + 'a: number;');
      assert.ok(result.includes('b: number;'), 'h2dts_gen_0082 生成结果缺少片段 2: ' + 'b: number;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0082 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0082 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0083
  * @tc.name h2dts_gen_0083
  * @tc.desc h2dts gen：扩充-gen：class 成员 long long/unsigned char 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0083', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls004 {
    long long a;
    unsigned char b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls004 {
    long long a;
    unsigned char b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls004 {
    long long a;
    unsigned char b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls004 {
    long long a;
    unsigned char b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls004 {
    long long a;
    unsigned char b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0083 生成结果为空');
      assert.ok(result.includes('export class GenCls004 {'), 'h2dts_gen_0083 生成结果缺少片段 0: ' + 'export class GenCls004 {');
      assert.ok(result.includes('a: number;'), 'h2dts_gen_0083 生成结果缺少片段 1: ' + 'a: number;');
      assert.ok(result.includes('b: string;'), 'h2dts_gen_0083 生成结果缺少片段 2: ' + 'b: string;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0083 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0083 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0084
  * @tc.name h2dts_gen_0084
  * @tc.desc h2dts gen：扩充-gen：class 成员 float/unsigned short 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0084', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls005 {
    float a;
    unsigned short b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls005 {
    float a;
    unsigned short b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls005 {
    float a;
    unsigned short b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls005 {
    float a;
    unsigned short b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls005 {
    float a;
    unsigned short b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0084 生成结果为空');
      assert.ok(result.includes('export class GenCls005 {'), 'h2dts_gen_0084 生成结果缺少片段 0: ' + 'export class GenCls005 {');
      assert.ok(result.includes('a: number;'), 'h2dts_gen_0084 生成结果缺少片段 1: ' + 'a: number;');
      assert.ok(result.includes('b: number;'), 'h2dts_gen_0084 生成结果缺少片段 2: ' + 'b: number;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0084 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0084 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0085
  * @tc.name h2dts_gen_0085
  * @tc.desc h2dts gen：扩充-gen：class 成员 double/unsigned long 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0085', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls006 {
    double a;
    unsigned long b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls006 {
    double a;
    unsigned long b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls006 {
    double a;
    unsigned long b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls006 {
    double a;
    unsigned long b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls006 {
    double a;
    unsigned long b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0085 生成结果为空');
      assert.ok(result.includes('export class GenCls006 {'), 'h2dts_gen_0085 生成结果缺少片段 0: ' + 'export class GenCls006 {');
      assert.ok(result.includes('a: number;'), 'h2dts_gen_0085 生成结果缺少片段 1: ' + 'a: number;');
      assert.ok(result.includes('b: number;'), 'h2dts_gen_0085 生成结果缺少片段 2: ' + 'b: number;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0085 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0085 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0086
  * @tc.name h2dts_gen_0086
  * @tc.desc h2dts gen：扩充-gen：class 成员 bool/unsigned long long 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0086', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls007 {
    bool a;
    unsigned long long b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls007 {
    bool a;
    unsigned long long b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls007 {
    bool a;
    unsigned long long b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls007 {
    bool a;
    unsigned long long b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls007 {
    bool a;
    unsigned long long b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0086 生成结果为空');
      assert.ok(result.includes('export class GenCls007 {'), 'h2dts_gen_0086 生成结果缺少片段 0: ' + 'export class GenCls007 {');
      assert.ok(result.includes('a: boolean;'), 'h2dts_gen_0086 生成结果缺少片段 1: ' + 'a: boolean;');
      assert.ok(result.includes('b: number;'), 'h2dts_gen_0086 生成结果缺少片段 2: ' + 'b: number;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0086 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0086 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0087
  * @tc.name h2dts_gen_0087
  * @tc.desc h2dts gen：扩充-gen：class 成员 unsigned int/signed char 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0087', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls008 {
    unsigned int a;
    signed char b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls008 {
    unsigned int a;
    signed char b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls008 {
    unsigned int a;
    signed char b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls008 {
    unsigned int a;
    signed char b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls008 {
    unsigned int a;
    signed char b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0087 生成结果为空');
      assert.ok(result.includes('export class GenCls008 {'), 'h2dts_gen_0087 生成结果缺少片段 0: ' + 'export class GenCls008 {');
      assert.ok(result.includes('a: number;'), 'h2dts_gen_0087 生成结果缺少片段 1: ' + 'a: number;');
      assert.ok(result.includes('b: string;'), 'h2dts_gen_0087 生成结果缺少片段 2: ' + 'b: string;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0087 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0087 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0088
  * @tc.name h2dts_gen_0088
  * @tc.desc h2dts gen：扩充-gen：class 成员 unsigned char/signed short 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0088', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class GenCls009 {
    unsigned char a;
    signed short b;
    int get();
    void set(int v);
};`),
        unions: parseUnion(`class GenCls009 {
    unsigned char a;
    signed short b;
    int get();
    void set(int v);
};`),
        structs: parseStruct(`class GenCls009 {
    unsigned char a;
    signed short b;
    int get();
    void set(int v);
};`),
        classes: parseClass(`class GenCls009 {
    unsigned char a;
    signed short b;
    int get();
    void set(int v);
};`),
        funcs: parseFunction(`class GenCls009 {
    unsigned char a;
    signed short b;
    int get();
    void set(int v);
};`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0088 生成结果为空');
      assert.ok(result.includes('export class GenCls009 {'), 'h2dts_gen_0088 生成结果缺少片段 0: ' + 'export class GenCls009 {');
      assert.ok(result.includes('a: string;'), 'h2dts_gen_0088 生成结果缺少片段 1: ' + 'a: string;');
      assert.ok(result.includes('b: number;'), 'h2dts_gen_0088 生成结果缺少片段 2: ' + 'b: number;');
      assert.ok(result.includes('get(): number;'), 'h2dts_gen_0088 生成结果缺少片段 3: ' + 'get(): number;');
      assert.ok(result.includes('set(v: number): void;'), 'h2dts_gen_0088 生成结果缺少片段 4: ' + 'set(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0089
  * @tc.name h2dts_gen_0089
  * @tc.desc h2dts gen：扩充-gen：struct 成员 long 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0089', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct GenSt000 {
    long v;
    int n;
} GenSt000;`),
        unions: parseUnion(`typedef struct GenSt000 {
    long v;
    int n;
} GenSt000;`),
        structs: parseStruct(`typedef struct GenSt000 {
    long v;
    int n;
} GenSt000;`),
        classes: parseClass(`typedef struct GenSt000 {
    long v;
    int n;
} GenSt000;`),
        funcs: parseFunction(`typedef struct GenSt000 {
    long v;
    int n;
} GenSt000;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0089 生成结果为空');
      assert.ok(result.includes('export type GenSt000 = {'), 'h2dts_gen_0089 生成结果缺少片段 0: ' + 'export type GenSt000 = {');
      assert.ok(result.includes('v: number;'), 'h2dts_gen_0089 生成结果缺少片段 1: ' + 'v: number;');
      assert.ok(result.includes('n: number;'), 'h2dts_gen_0089 生成结果缺少片段 2: ' + 'n: number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0090
  * @tc.name h2dts_gen_0090
  * @tc.desc h2dts gen：扩充-gen：struct 成员 long long 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0090', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct GenSt001 {
    long long v;
    int n;
} GenSt001;`),
        unions: parseUnion(`typedef struct GenSt001 {
    long long v;
    int n;
} GenSt001;`),
        structs: parseStruct(`typedef struct GenSt001 {
    long long v;
    int n;
} GenSt001;`),
        classes: parseClass(`typedef struct GenSt001 {
    long long v;
    int n;
} GenSt001;`),
        funcs: parseFunction(`typedef struct GenSt001 {
    long long v;
    int n;
} GenSt001;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0090 生成结果为空');
      assert.ok(result.includes('export type GenSt001 = {'), 'h2dts_gen_0090 生成结果缺少片段 0: ' + 'export type GenSt001 = {');
      assert.ok(result.includes('v: number;'), 'h2dts_gen_0090 生成结果缺少片段 1: ' + 'v: number;');
      assert.ok(result.includes('n: number;'), 'h2dts_gen_0090 生成结果缺少片段 2: ' + 'n: number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0091
  * @tc.name h2dts_gen_0091
  * @tc.desc h2dts gen：扩充-gen：struct 成员 float 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0091', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct GenSt002 {
    float v;
    int n;
} GenSt002;`),
        unions: parseUnion(`typedef struct GenSt002 {
    float v;
    int n;
} GenSt002;`),
        structs: parseStruct(`typedef struct GenSt002 {
    float v;
    int n;
} GenSt002;`),
        classes: parseClass(`typedef struct GenSt002 {
    float v;
    int n;
} GenSt002;`),
        funcs: parseFunction(`typedef struct GenSt002 {
    float v;
    int n;
} GenSt002;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0091 生成结果为空');
      assert.ok(result.includes('export type GenSt002 = {'), 'h2dts_gen_0091 生成结果缺少片段 0: ' + 'export type GenSt002 = {');
      assert.ok(result.includes('v: number;'), 'h2dts_gen_0091 生成结果缺少片段 1: ' + 'v: number;');
      assert.ok(result.includes('n: number;'), 'h2dts_gen_0091 生成结果缺少片段 2: ' + 'n: number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0092
  * @tc.name h2dts_gen_0092
  * @tc.desc h2dts gen：扩充-gen：struct 成员 double 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0092', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct GenSt003 {
    double v;
    int n;
} GenSt003;`),
        unions: parseUnion(`typedef struct GenSt003 {
    double v;
    int n;
} GenSt003;`),
        structs: parseStruct(`typedef struct GenSt003 {
    double v;
    int n;
} GenSt003;`),
        classes: parseClass(`typedef struct GenSt003 {
    double v;
    int n;
} GenSt003;`),
        funcs: parseFunction(`typedef struct GenSt003 {
    double v;
    int n;
} GenSt003;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0092 生成结果为空');
      assert.ok(result.includes('export type GenSt003 = {'), 'h2dts_gen_0092 生成结果缺少片段 0: ' + 'export type GenSt003 = {');
      assert.ok(result.includes('v: number;'), 'h2dts_gen_0092 生成结果缺少片段 1: ' + 'v: number;');
      assert.ok(result.includes('n: number;'), 'h2dts_gen_0092 生成结果缺少片段 2: ' + 'n: number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0093
  * @tc.name h2dts_gen_0093
  * @tc.desc h2dts gen：扩充-gen：struct 成员 bool 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0093', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct GenSt004 {
    bool v;
    int n;
} GenSt004;`),
        unions: parseUnion(`typedef struct GenSt004 {
    bool v;
    int n;
} GenSt004;`),
        structs: parseStruct(`typedef struct GenSt004 {
    bool v;
    int n;
} GenSt004;`),
        classes: parseClass(`typedef struct GenSt004 {
    bool v;
    int n;
} GenSt004;`),
        funcs: parseFunction(`typedef struct GenSt004 {
    bool v;
    int n;
} GenSt004;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0093 生成结果为空');
      assert.ok(result.includes('export type GenSt004 = {'), 'h2dts_gen_0093 生成结果缺少片段 0: ' + 'export type GenSt004 = {');
      assert.ok(result.includes('v: boolean;'), 'h2dts_gen_0093 生成结果缺少片段 1: ' + 'v: boolean;');
      assert.ok(result.includes('n: number;'), 'h2dts_gen_0093 生成结果缺少片段 2: ' + 'n: number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0094
  * @tc.name h2dts_gen_0094
  * @tc.desc h2dts gen：扩充-gen：struct 成员 unsigned int 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0094', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct GenSt005 {
    unsigned int v;
    int n;
} GenSt005;`),
        unions: parseUnion(`typedef struct GenSt005 {
    unsigned int v;
    int n;
} GenSt005;`),
        structs: parseStruct(`typedef struct GenSt005 {
    unsigned int v;
    int n;
} GenSt005;`),
        classes: parseClass(`typedef struct GenSt005 {
    unsigned int v;
    int n;
} GenSt005;`),
        funcs: parseFunction(`typedef struct GenSt005 {
    unsigned int v;
    int n;
} GenSt005;`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0094 生成结果为空');
      assert.ok(result.includes('export type GenSt005 = {'), 'h2dts_gen_0094 生成结果缺少片段 0: ' + 'export type GenSt005 = {');
      assert.ok(result.includes('v: number;'), 'h2dts_gen_0094 生成结果缺少片段 1: ' + 'v: number;');
      assert.ok(result.includes('n: number;'), 'h2dts_gen_0094 生成结果缺少片段 2: ' + 'n: number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0095
  * @tc.name h2dts_gen_0095
  * @tc.desc h2dts gen：扩充-gen：enum GenEn000 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0095', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { GA0, GB0, GC0 } GenEn000;`),
        unions: parseUnion(`typedef enum { GA0, GB0, GC0 } GenEn000;`),
        structs: parseStruct(`typedef enum { GA0, GB0, GC0 } GenEn000;`),
        classes: parseClass(`typedef enum { GA0, GB0, GC0 } GenEn000;`),
        funcs: parseFunction(`typedef enum { GA0, GB0, GC0 } GenEn000;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsEnum(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0095 生成结果为空');
      assert.ok(result.includes('export enum GenEn000 {'), 'h2dts_gen_0095 生成结果缺少片段 0: ' + 'export enum GenEn000 {');
      assert.ok(result.includes('GA0,'), 'h2dts_gen_0095 生成结果缺少片段 1: ' + 'GA0,');
      assert.ok(result.includes('GB0,'), 'h2dts_gen_0095 生成结果缺少片段 2: ' + 'GB0,');
      assert.ok(result.includes('GC0,'), 'h2dts_gen_0095 生成结果缺少片段 3: ' + 'GC0,');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0096
  * @tc.name h2dts_gen_0096
  * @tc.desc h2dts gen：扩充-gen：enum GenEn001 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0096', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { GA1, GB1, GC1 } GenEn001;`),
        unions: parseUnion(`typedef enum { GA1, GB1, GC1 } GenEn001;`),
        structs: parseStruct(`typedef enum { GA1, GB1, GC1 } GenEn001;`),
        classes: parseClass(`typedef enum { GA1, GB1, GC1 } GenEn001;`),
        funcs: parseFunction(`typedef enum { GA1, GB1, GC1 } GenEn001;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsEnum(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0096 生成结果为空');
      assert.ok(result.includes('export enum GenEn001 {'), 'h2dts_gen_0096 生成结果缺少片段 0: ' + 'export enum GenEn001 {');
      assert.ok(result.includes('GA1,'), 'h2dts_gen_0096 生成结果缺少片段 1: ' + 'GA1,');
      assert.ok(result.includes('GB1,'), 'h2dts_gen_0096 生成结果缺少片段 2: ' + 'GB1,');
      assert.ok(result.includes('GC1,'), 'h2dts_gen_0096 生成结果缺少片段 3: ' + 'GC1,');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0097
  * @tc.name h2dts_gen_0097
  * @tc.desc h2dts gen：扩充-gen：enum GenEn002 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0097', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { GA2, GB2, GC2 } GenEn002;`),
        unions: parseUnion(`typedef enum { GA2, GB2, GC2 } GenEn002;`),
        structs: parseStruct(`typedef enum { GA2, GB2, GC2 } GenEn002;`),
        classes: parseClass(`typedef enum { GA2, GB2, GC2 } GenEn002;`),
        funcs: parseFunction(`typedef enum { GA2, GB2, GC2 } GenEn002;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsEnum(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0097 生成结果为空');
      assert.ok(result.includes('export enum GenEn002 {'), 'h2dts_gen_0097 生成结果缺少片段 0: ' + 'export enum GenEn002 {');
      assert.ok(result.includes('GA2,'), 'h2dts_gen_0097 生成结果缺少片段 1: ' + 'GA2,');
      assert.ok(result.includes('GB2,'), 'h2dts_gen_0097 生成结果缺少片段 2: ' + 'GB2,');
      assert.ok(result.includes('GC2,'), 'h2dts_gen_0097 生成结果缺少片段 3: ' + 'GC2,');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0098
  * @tc.name h2dts_gen_0098
  * @tc.desc h2dts gen：扩充-gen：enum GenEn003 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0098', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { GA3, GB3, GC3 } GenEn003;`),
        unions: parseUnion(`typedef enum { GA3, GB3, GC3 } GenEn003;`),
        structs: parseStruct(`typedef enum { GA3, GB3, GC3 } GenEn003;`),
        classes: parseClass(`typedef enum { GA3, GB3, GC3 } GenEn003;`),
        funcs: parseFunction(`typedef enum { GA3, GB3, GC3 } GenEn003;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsEnum(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0098 生成结果为空');
      assert.ok(result.includes('export enum GenEn003 {'), 'h2dts_gen_0098 生成结果缺少片段 0: ' + 'export enum GenEn003 {');
      assert.ok(result.includes('GA3,'), 'h2dts_gen_0098 生成结果缺少片段 1: ' + 'GA3,');
      assert.ok(result.includes('GB3,'), 'h2dts_gen_0098 生成结果缺少片段 2: ' + 'GB3,');
      assert.ok(result.includes('GC3,'), 'h2dts_gen_0098 生成结果缺少片段 3: ' + 'GC3,');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0099
  * @tc.name h2dts_gen_0099
  * @tc.desc h2dts gen：扩充-gen：union GenUn000 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0099', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int a; double b; } GenUn000;`),
        unions: parseUnion(`typedef union { int a; double b; } GenUn000;`),
        structs: parseStruct(`typedef union { int a; double b; } GenUn000;`),
        classes: parseClass(`typedef union { int a; double b; } GenUn000;`),
        funcs: parseFunction(`typedef union { int a; double b; } GenUn000;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsUnions(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0099 生成结果为空');
      assert.ok(result.includes('export type GenUn000'), 'h2dts_gen_0099 生成结果缺少片段 0: ' + 'export type GenUn000');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0100
  * @tc.name h2dts_gen_0100
  * @tc.desc h2dts gen：扩充-gen：union GenUn001 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0100', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int a; double b; } GenUn001;`),
        unions: parseUnion(`typedef union { int a; double b; } GenUn001;`),
        structs: parseStruct(`typedef union { int a; double b; } GenUn001;`),
        classes: parseClass(`typedef union { int a; double b; } GenUn001;`),
        funcs: parseFunction(`typedef union { int a; double b; } GenUn001;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsUnions(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0100 生成结果为空');
      assert.ok(result.includes('export type GenUn001'), 'h2dts_gen_0100 生成结果缺少片段 0: ' + 'export type GenUn001');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0101
  * @tc.name h2dts_gen_0101
  * @tc.desc h2dts gen：扩充-gen：union GenUn002 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0101', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int a; double b; } GenUn002;`),
        unions: parseUnion(`typedef union { int a; double b; } GenUn002;`),
        structs: parseStruct(`typedef union { int a; double b; } GenUn002;`),
        classes: parseClass(`typedef union { int a; double b; } GenUn002;`),
        funcs: parseFunction(`typedef union { int a; double b; } GenUn002;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsUnions(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0101 生成结果为空');
      assert.ok(result.includes('export type GenUn002'), 'h2dts_gen_0101 生成结果缺少片段 0: ' + 'export type GenUn002');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0102
  * @tc.name h2dts_gen_0102
  * @tc.desc h2dts gen：扩充-gen：union GenUn003 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0102', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef union { int a; double b; } GenUn003;`),
        unions: parseUnion(`typedef union { int a; double b; } GenUn003;`),
        structs: parseStruct(`typedef union { int a; double b; } GenUn003;`),
        classes: parseClass(`typedef union { int a; double b; } GenUn003;`),
        funcs: parseFunction(`typedef union { int a; double b; } GenUn003;`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsUnions(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0102 生成结果为空');
      assert.ok(result.includes('export type GenUn003'), 'h2dts_gen_0102 生成结果缺少片段 0: ' + 'export type GenUn003');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0102 执行异常: ${String(err)}`);
    }
  });

});
