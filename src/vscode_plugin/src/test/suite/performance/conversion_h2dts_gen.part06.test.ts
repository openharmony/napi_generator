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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part06.');

  /**
  * @tc.number h2dts_gen_0163
  * @tc.name h2dts_gen_0163
  * @tc.desc h2dts gen：数组入参 C 数组 char[8] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0163', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA25(char data[8]);`),
        unions: parseUnion(`void genDA25(char data[8]);`),
        structs: parseStruct(`void genDA25(char data[8]);`),
        classes: parseClass(`void genDA25(char data[8]);`),
        funcs: parseFunction(`void genDA25(char data[8]);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0163 生成结果为空');
      assert.ok(result.includes('export function genDA25(data: string): void;'), 'h2dts_gen_0163 生成结果缺少片段 0: ' + 'export function genDA25(data: string): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0164
  * @tc.name h2dts_gen_0164
  * @tc.desc h2dts gen：数组入参 C 数组 double[4] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0164', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA26(double data[4]);`),
        unions: parseUnion(`void genDA26(double data[4]);`),
        structs: parseStruct(`void genDA26(double data[4]);`),
        classes: parseClass(`void genDA26(double data[4]);`),
        funcs: parseFunction(`void genDA26(double data[4]);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0164 生成结果为空');
      assert.ok(result.includes('export function genDA26(data: number): void;'), 'h2dts_gen_0164 生成结果缺少片段 0: ' + 'export function genDA26(data: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0165
  * @tc.name h2dts_gen_0165
  * @tc.desc h2dts gen：数组入参 C 数组 bool[2] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0165', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA27(bool data[2]);`),
        unions: parseUnion(`void genDA27(bool data[2]);`),
        structs: parseStruct(`void genDA27(bool data[2]);`),
        classes: parseClass(`void genDA27(bool data[2]);`),
        funcs: parseFunction(`void genDA27(bool data[2]);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0165 生成结果为空');
      assert.ok(result.includes('export function genDA27(data: boolean): void;'), 'h2dts_gen_0165 生成结果缺少片段 0: ' + 'export function genDA27(data: boolean): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0166
  * @tc.name h2dts_gen_0166
  * @tc.desc h2dts gen：数组入参 C 数组 long[3] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0166', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA28(long data[3]);`),
        unions: parseUnion(`void genDA28(long data[3]);`),
        structs: parseStruct(`void genDA28(long data[3]);`),
        classes: parseClass(`void genDA28(long data[3]);`),
        funcs: parseFunction(`void genDA28(long data[3]);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0166 生成结果为空');
      assert.ok(result.includes('export function genDA28(data: number): void;'), 'h2dts_gen_0166 生成结果缺少片段 0: ' + 'export function genDA28(data: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0167
  * @tc.name h2dts_gen_0167
  * @tc.desc h2dts gen：数组入参 C 数组 std::string[5] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0167', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genDA29(std::string names[5]);`),
        unions: parseUnion(`void genDA29(std::string names[5]);`),
        structs: parseStruct(`void genDA29(std::string names[5]);`),
        classes: parseClass(`void genDA29(std::string names[5]);`),
        funcs: parseFunction(`void genDA29(std::string names[5]);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0167 生成结果为空');
      assert.ok(result.includes('export function genDA29(names: string): void;'), 'h2dts_gen_0167 生成结果缺少片段 0: ' + 'export function genDA29(names: string): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0168
  * @tc.name h2dts_gen_0168
  * @tc.desc h2dts gen：static 函数 int 返回 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0168', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`static int addStatic(int a, int b);`),
        unions: parseUnion(`static int addStatic(int a, int b);`),
        structs: parseStruct(`static int addStatic(int a, int b);`),
        classes: parseClass(`static int addStatic(int a, int b);`),
        funcs: parseFunction(`static int addStatic(int a, int b);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0168 生成结果为空');
      assert.ok(result.includes('export function addStatic(a: number, b: number): number;'), 'h2dts_gen_0168 生成结果缺少片段 0: ' + 'export function addStatic(a: number, b: number): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0169
  * @tc.name h2dts_gen_0169
  * @tc.desc h2dts gen：static 函数 std::string 返回 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0169', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`static std::string getNameStatic();`),
        unions: parseUnion(`static std::string getNameStatic();`),
        structs: parseStruct(`static std::string getNameStatic();`),
        classes: parseClass(`static std::string getNameStatic();`),
        funcs: parseFunction(`static std::string getNameStatic();`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0169 生成结果为空');
      assert.ok(result.includes('export function getNameStatic(): string;'), 'h2dts_gen_0169 生成结果缺少片段 0: ' + 'export function getNameStatic(): string;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0170
  * @tc.name h2dts_gen_0170
  * @tc.desc h2dts gen：static 函数容器入参 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0170', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`static void setStatic(std::vector<int> v);`),
        unions: parseUnion(`static void setStatic(std::vector<int> v);`),
        structs: parseStruct(`static void setStatic(std::vector<int> v);`),
        classes: parseClass(`static void setStatic(std::vector<int> v);`),
        funcs: parseFunction(`static void setStatic(std::vector<int> v);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0170 生成结果为空');
      assert.ok(result.includes('export function setStatic(v: Array<number>): void;'), 'h2dts_gen_0170 生成结果缺少片段 0: ' + 'export function setStatic(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0171
  * @tc.name h2dts_gen_0171
  * @tc.desc h2dts gen：static 函数多参 char+double 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0171', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`static bool checkStatic(char c, double d);`),
        unions: parseUnion(`static bool checkStatic(char c, double d);`),
        structs: parseStruct(`static bool checkStatic(char c, double d);`),
        classes: parseClass(`static bool checkStatic(char c, double d);`),
        funcs: parseFunction(`static bool checkStatic(char c, double d);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0171 生成结果为空');
      assert.ok(result.includes('export function checkStatic(c: string, d: number): boolean;'), 'h2dts_gen_0171 生成结果缺少片段 0: ' + 'export function checkStatic(c: string, d: number): boolean;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0172
  * @tc.name h2dts_gen_0172
  * @tc.desc h2dts gen：static 函数多参 float 返回 double 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0172', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`static double scaleStatic(float x, float y);`),
        unions: parseUnion(`static double scaleStatic(float x, float y);`),
        structs: parseStruct(`static double scaleStatic(float x, float y);`),
        classes: parseClass(`static double scaleStatic(float x, float y);`),
        funcs: parseFunction(`static double scaleStatic(float x, float y);`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0172 生成结果为空');
      assert.ok(result.includes('export function scaleStatic(x: number, y: number): number;'), 'h2dts_gen_0172 生成结果缺少片段 0: ' + 'export function scaleStatic(x: number, y: number): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0173
  * @tc.name h2dts_gen_0173
  * @tc.desc h2dts gen：namespace 内函数 int 返回 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0173', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace ns {` + '\n' +
`int add(int a, int b);` + '\n' +
`}`),
        unions: parseUnion(`namespace ns {` + '\n' +
`int add(int a, int b);` + '\n' +
`}`),
        structs: parseStruct(`namespace ns {` + '\n' +
`int add(int a, int b);` + '\n' +
`}`),
        classes: parseClass(`namespace ns {` + '\n' +
`int add(int a, int b);` + '\n' +
`}`),
        funcs: parseFunction(`namespace ns {` + '\n' +
`int add(int a, int b);` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0173 生成结果为空');
      assert.ok(result.includes('export function add(a: number, b: number): number;'), 'h2dts_gen_0173 生成结果缺少片段 0: ' + 'export function add(a: number, b: number): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0174
  * @tc.name h2dts_gen_0174
  * @tc.desc h2dts gen：namespace 内函数 std::string 返回 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0174', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace ns {` + '\n' +
`std::string getName();` + '\n' +
`}`),
        unions: parseUnion(`namespace ns {` + '\n' +
`std::string getName();` + '\n' +
`}`),
        structs: parseStruct(`namespace ns {` + '\n' +
`std::string getName();` + '\n' +
`}`),
        classes: parseClass(`namespace ns {` + '\n' +
`std::string getName();` + '\n' +
`}`),
        funcs: parseFunction(`namespace ns {` + '\n' +
`std::string getName();` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0174 生成结果为空');
      assert.ok(result.includes('export function getName(): string;'), 'h2dts_gen_0174 生成结果缺少片段 0: ' + 'export function getName(): string;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0175
  * @tc.name h2dts_gen_0175
  * @tc.desc h2dts gen：namespace 内多函数 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0175', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace ns {` + '\n' +
`void cleanup();` + '\n' +
`double calc(double x, float y);` + '\n' +
`}`),
        unions: parseUnion(`namespace ns {` + '\n' +
`void cleanup();` + '\n' +
`double calc(double x, float y);` + '\n' +
`}`),
        structs: parseStruct(`namespace ns {` + '\n' +
`void cleanup();` + '\n' +
`double calc(double x, float y);` + '\n' +
`}`),
        classes: parseClass(`namespace ns {` + '\n' +
`void cleanup();` + '\n' +
`double calc(double x, float y);` + '\n' +
`}`),
        funcs: parseFunction(`namespace ns {` + '\n' +
`void cleanup();` + '\n' +
`double calc(double x, float y);` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0175 生成结果为空');
      assert.ok(result.includes('export function cleanup(): void;'), 'h2dts_gen_0175 生成结果缺少片段 0: ' + 'export function cleanup(): void;');
      assert.ok(result.includes('export function calc(x: number, y: number): number;'), 'h2dts_gen_0175 生成结果缺少片段 1: ' + 'export function calc(x: number, y: number): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0176
  * @tc.name h2dts_gen_0176
  * @tc.desc h2dts gen：namespace 嵌套函数 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0176', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`int mul(int a, int b);` + '\n' +
`}` + '\n' +
`}`),
        unions: parseUnion(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`int mul(int a, int b);` + '\n' +
`}` + '\n' +
`}`),
        structs: parseStruct(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`int mul(int a, int b);` + '\n' +
`}` + '\n' +
`}`),
        classes: parseClass(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`int mul(int a, int b);` + '\n' +
`}` + '\n' +
`}`),
        funcs: parseFunction(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`int mul(int a, int b);` + '\n' +
`}` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0176 生成结果为空');
      assert.ok(result.includes('export function mul(a: number, b: number): number;'), 'h2dts_gen_0176 生成结果缺少片段 0: ' + 'export function mul(a: number, b: number): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0177
  * @tc.name h2dts_gen_0177
  * @tc.desc h2dts gen：namespace 内数组入参函数 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0177', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace ns {` + '\n' +
`void processArr(std::vector<double> vals);` + '\n' +
`std::string first(std::list<std::string> items);` + '\n' +
`}`),
        unions: parseUnion(`namespace ns {` + '\n' +
`void processArr(std::vector<double> vals);` + '\n' +
`std::string first(std::list<std::string> items);` + '\n' +
`}`),
        structs: parseStruct(`namespace ns {` + '\n' +
`void processArr(std::vector<double> vals);` + '\n' +
`std::string first(std::list<std::string> items);` + '\n' +
`}`),
        classes: parseClass(`namespace ns {` + '\n' +
`void processArr(std::vector<double> vals);` + '\n' +
`std::string first(std::list<std::string> items);` + '\n' +
`}`),
        funcs: parseFunction(`namespace ns {` + '\n' +
`void processArr(std::vector<double> vals);` + '\n' +
`std::string first(std::list<std::string> items);` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0177 生成结果为空');
      assert.ok(result.includes('export function processArr(vals: Array<number>): void;'), 'h2dts_gen_0177 生成结果缺少片段 0: ' + 'export function processArr(vals: Array<number>): void;');
      assert.ok(result.includes('export function first(items: Array<string>): string;'), 'h2dts_gen_0177 生成结果缺少片段 1: ' + 'export function first(items: Array<string>): string;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0178
  * @tc.name h2dts_gen_0178
  * @tc.desc h2dts gen：namespace 内 class 变量+方法 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0178', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace api {` + '\n' +
`class Client {` + '\n' +
`int id;` + '\n' +
`std::string name;` + '\n' +
`void connect();` + '\n' +
`void disconnect();` + '\n' +
`int query(int q);` + '\n' +
`};` + '\n' +
`}`),
        unions: parseUnion(`namespace api {` + '\n' +
`class Client {` + '\n' +
`int id;` + '\n' +
`std::string name;` + '\n' +
`void connect();` + '\n' +
`void disconnect();` + '\n' +
`int query(int q);` + '\n' +
`};` + '\n' +
`}`),
        structs: parseStruct(`namespace api {` + '\n' +
`class Client {` + '\n' +
`int id;` + '\n' +
`std::string name;` + '\n' +
`void connect();` + '\n' +
`void disconnect();` + '\n' +
`int query(int q);` + '\n' +
`};` + '\n' +
`}`),
        classes: parseClass(`namespace api {` + '\n' +
`class Client {` + '\n' +
`int id;` + '\n' +
`std::string name;` + '\n' +
`void connect();` + '\n' +
`void disconnect();` + '\n' +
`int query(int q);` + '\n' +
`};` + '\n' +
`}`),
        funcs: parseFunction(`namespace api {` + '\n' +
`class Client {` + '\n' +
`int id;` + '\n' +
`std::string name;` + '\n' +
`void connect();` + '\n' +
`void disconnect();` + '\n' +
`int query(int q);` + '\n' +
`};` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0178 生成结果为空');
      assert.ok(result.includes('export class Client {'), 'h2dts_gen_0178 生成结果缺少片段 0: ' + 'export class Client {');
      assert.ok(result.includes('id: number;'), 'h2dts_gen_0178 生成结果缺少片段 1: ' + 'id: number;');
      assert.ok(result.includes('name: string;'), 'h2dts_gen_0178 生成结果缺少片段 2: ' + 'name: string;');
      assert.ok(result.includes('connect(): void;'), 'h2dts_gen_0178 生成结果缺少片段 3: ' + 'connect(): void;');
      assert.ok(result.includes('query(q: number): number;'), 'h2dts_gen_0178 生成结果缺少片段 4: ' + 'query(q: number): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0179
  * @tc.name h2dts_gen_0179
  * @tc.desc h2dts gen：namespace 嵌套 class 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0179', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`class Engine {` + '\n' +
`double power;` + '\n' +
`int start();` + '\n' +
`};` + '\n' +
`}` + '\n' +
`}`),
        unions: parseUnion(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`class Engine {` + '\n' +
`double power;` + '\n' +
`int start();` + '\n' +
`};` + '\n' +
`}` + '\n' +
`}`),
        structs: parseStruct(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`class Engine {` + '\n' +
`double power;` + '\n' +
`int start();` + '\n' +
`};` + '\n' +
`}` + '\n' +
`}`),
        classes: parseClass(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`class Engine {` + '\n' +
`double power;` + '\n' +
`int start();` + '\n' +
`};` + '\n' +
`}` + '\n' +
`}`),
        funcs: parseFunction(`namespace outer {` + '\n' +
`namespace inner {` + '\n' +
`class Engine {` + '\n' +
`double power;` + '\n' +
`int start();` + '\n' +
`};` + '\n' +
`}` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0179 生成结果为空');
      assert.ok(result.includes('export class Engine {'), 'h2dts_gen_0179 生成结果缺少片段 0: ' + 'export class Engine {');
      assert.ok(result.includes('power: number;'), 'h2dts_gen_0179 生成结果缺少片段 1: ' + 'power: number;');
      assert.ok(result.includes('start(): number;'), 'h2dts_gen_0179 生成结果缺少片段 2: ' + 'start(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0180
  * @tc.name h2dts_gen_0180
  * @tc.desc h2dts gen：namespace 内 class static 变量+方法 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0180', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace util {` + '\n' +
`class Counter {` + '\n' +
`static int count;` + '\n' +
`int inc();` + '\n' +
`};` + '\n' +
`}`),
        unions: parseUnion(`namespace util {` + '\n' +
`class Counter {` + '\n' +
`static int count;` + '\n' +
`int inc();` + '\n' +
`};` + '\n' +
`}`),
        structs: parseStruct(`namespace util {` + '\n' +
`class Counter {` + '\n' +
`static int count;` + '\n' +
`int inc();` + '\n' +
`};` + '\n' +
`}`),
        classes: parseClass(`namespace util {` + '\n' +
`class Counter {` + '\n' +
`static int count;` + '\n' +
`int inc();` + '\n' +
`};` + '\n' +
`}`),
        funcs: parseFunction(`namespace util {` + '\n' +
`class Counter {` + '\n' +
`static int count;` + '\n' +
`int inc();` + '\n' +
`};` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0180 生成结果为空');
      assert.ok(result.includes('export class Counter {'), 'h2dts_gen_0180 生成结果缺少片段 0: ' + 'export class Counter {');
      assert.ok(result.includes('count: number;'), 'h2dts_gen_0180 生成结果缺少片段 1: ' + 'count: number;');
      assert.ok(result.includes('inc(): number;'), 'h2dts_gen_0180 生成结果缺少片段 2: ' + 'inc(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0181
  * @tc.name h2dts_gen_0181
  * @tc.desc h2dts gen：class 容器数组变量+方法 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0181', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class Holder {` + '\n' +
`std::vector<double> vals;` + '\n' +
`std::list<std::string> names;` + '\n' +
`std::array<int,10> ids;` + '\n' +
`std::queue<int> q;` + '\n' +
`int run(std::vector<float> in);` + '\n' +
`};`),
        unions: parseUnion(`class Holder {` + '\n' +
`std::vector<double> vals;` + '\n' +
`std::list<std::string> names;` + '\n' +
`std::array<int,10> ids;` + '\n' +
`std::queue<int> q;` + '\n' +
`int run(std::vector<float> in);` + '\n' +
`};`),
        structs: parseStruct(`class Holder {` + '\n' +
`std::vector<double> vals;` + '\n' +
`std::list<std::string> names;` + '\n' +
`std::array<int,10> ids;` + '\n' +
`std::queue<int> q;` + '\n' +
`int run(std::vector<float> in);` + '\n' +
`};`),
        classes: parseClass(`class Holder {` + '\n' +
`std::vector<double> vals;` + '\n' +
`std::list<std::string> names;` + '\n' +
`std::array<int,10> ids;` + '\n' +
`std::queue<int> q;` + '\n' +
`int run(std::vector<float> in);` + '\n' +
`};`),
        funcs: parseFunction(`class Holder {` + '\n' +
`std::vector<double> vals;` + '\n' +
`std::list<std::string> names;` + '\n' +
`std::array<int,10> ids;` + '\n' +
`std::queue<int> q;` + '\n' +
`int run(std::vector<float> in);` + '\n' +
`};`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0181 生成结果为空');
      assert.ok(result.includes('export class Holder {'), 'h2dts_gen_0181 生成结果缺少片段 0: ' + 'export class Holder {');
      assert.ok(result.includes('vals: Array<number>;'), 'h2dts_gen_0181 生成结果缺少片段 1: ' + 'vals: Array<number>;');
      assert.ok(result.includes('names: Array<string>;'), 'h2dts_gen_0181 生成结果缺少片段 2: ' + 'names: Array<string>;');
      assert.ok(result.includes('ids: Array<number>;'), 'h2dts_gen_0181 生成结果缺少片段 3: ' + 'ids: Array<number>;');
      assert.ok(result.includes('q: Array<number>;'), 'h2dts_gen_0181 生成结果缺少片段 4: ' + 'q: Array<number>;');
      assert.ok(result.includes('run(in: Array<number>): number;'), 'h2dts_gen_0181 生成结果缺少片段 5: ' + 'run(in: Array<number>): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0182
  * @tc.name h2dts_gen_0182
  * @tc.desc h2dts gen：class 多维数组/容器数组变量 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0182', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class Matrix {` + '\n' +
`int grid[3][4];` + '\n' +
`double mat[2][3][2];` + '\n' +
`std::vector<int> lines[4];` + '\n' +
`void set(std::vector<float> v);` + '\n' +
`};`),
        unions: parseUnion(`class Matrix {` + '\n' +
`int grid[3][4];` + '\n' +
`double mat[2][3][2];` + '\n' +
`std::vector<int> lines[4];` + '\n' +
`void set(std::vector<float> v);` + '\n' +
`};`),
        structs: parseStruct(`class Matrix {` + '\n' +
`int grid[3][4];` + '\n' +
`double mat[2][3][2];` + '\n' +
`std::vector<int> lines[4];` + '\n' +
`void set(std::vector<float> v);` + '\n' +
`};`),
        classes: parseClass(`class Matrix {` + '\n' +
`int grid[3][4];` + '\n' +
`double mat[2][3][2];` + '\n' +
`std::vector<int> lines[4];` + '\n' +
`void set(std::vector<float> v);` + '\n' +
`};`),
        funcs: parseFunction(`class Matrix {` + '\n' +
`int grid[3][4];` + '\n' +
`double mat[2][3][2];` + '\n' +
`std::vector<int> lines[4];` + '\n' +
`void set(std::vector<float> v);` + '\n' +
`};`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0182 生成结果为空');
      assert.ok(result.includes('export class Matrix {'), 'h2dts_gen_0182 生成结果缺少片段 0: ' + 'export class Matrix {');
      assert.ok(result.includes('grid: number;'), 'h2dts_gen_0182 生成结果缺少片段 1: ' + 'grid: number;');
      assert.ok(result.includes('mat: number;'), 'h2dts_gen_0182 生成结果缺少片段 2: ' + 'mat: number;');
      assert.ok(result.includes('lines: Array<number>;'), 'h2dts_gen_0182 生成结果缺少片段 3: ' + 'lines: Array<number>;');
      assert.ok(result.includes('set(v: Array<number>): void;'), 'h2dts_gen_0182 生成结果缺少片段 4: ' + 'set(v: Array<number>): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0183
  * @tc.name h2dts_gen_0183
  * @tc.desc h2dts gen：class 多容器变量 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0183', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class Store {` + '\n' +
`std::vector<bool> flags;` + '\n' +
`std::deque<int> items;` + '\n' +
`std::stack<std::string> buf;` + '\n' +
`std::priority_queue<double> heap;` + '\n' +
`std::forward_list<int> head;` + '\n' +
`std::valarray<double> vals;` + '\n' +
`};`),
        unions: parseUnion(`class Store {` + '\n' +
`std::vector<bool> flags;` + '\n' +
`std::deque<int> items;` + '\n' +
`std::stack<std::string> buf;` + '\n' +
`std::priority_queue<double> heap;` + '\n' +
`std::forward_list<int> head;` + '\n' +
`std::valarray<double> vals;` + '\n' +
`};`),
        structs: parseStruct(`class Store {` + '\n' +
`std::vector<bool> flags;` + '\n' +
`std::deque<int> items;` + '\n' +
`std::stack<std::string> buf;` + '\n' +
`std::priority_queue<double> heap;` + '\n' +
`std::forward_list<int> head;` + '\n' +
`std::valarray<double> vals;` + '\n' +
`};`),
        classes: parseClass(`class Store {` + '\n' +
`std::vector<bool> flags;` + '\n' +
`std::deque<int> items;` + '\n' +
`std::stack<std::string> buf;` + '\n' +
`std::priority_queue<double> heap;` + '\n' +
`std::forward_list<int> head;` + '\n' +
`std::valarray<double> vals;` + '\n' +
`};`),
        funcs: parseFunction(`class Store {` + '\n' +
`std::vector<bool> flags;` + '\n' +
`std::deque<int> items;` + '\n' +
`std::stack<std::string> buf;` + '\n' +
`std::priority_queue<double> heap;` + '\n' +
`std::forward_list<int> head;` + '\n' +
`std::valarray<double> vals;` + '\n' +
`};`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsClasses(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0183 生成结果为空');
      assert.ok(result.includes('export class Store {'), 'h2dts_gen_0183 生成结果缺少片段 0: ' + 'export class Store {');
      assert.ok(result.includes('flags: Array<boolean>;'), 'h2dts_gen_0183 生成结果缺少片段 1: ' + 'flags: Array<boolean>;');
      assert.ok(result.includes('items: Array<number>;'), 'h2dts_gen_0183 生成结果缺少片段 2: ' + 'items: Array<number>;');
      assert.ok(result.includes('buf: Array<string>;'), 'h2dts_gen_0183 生成结果缺少片段 3: ' + 'buf: Array<string>;');
      assert.ok(result.includes('heap: Array<number>;'), 'h2dts_gen_0183 生成结果缺少片段 4: ' + 'heap: Array<number>;');
      assert.ok(result.includes('head: Array<number>;'), 'h2dts_gen_0183 生成结果缺少片段 5: ' + 'head: Array<number>;');
      assert.ok(result.includes('vals: Array<number>;'), 'h2dts_gen_0183 生成结果缺少片段 6: ' + 'vals: Array<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0184
  * @tc.name h2dts_gen_0184
  * @tc.desc h2dts gen：namespace 内 static 函数 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0184', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace util {` + '\n' +
`static int addStatic(int a, int b);` + '\n' +
`static std::string tagStatic();` + '\n' +
`}`),
        unions: parseUnion(`namespace util {` + '\n' +
`static int addStatic(int a, int b);` + '\n' +
`static std::string tagStatic();` + '\n' +
`}`),
        structs: parseStruct(`namespace util {` + '\n' +
`static int addStatic(int a, int b);` + '\n' +
`static std::string tagStatic();` + '\n' +
`}`),
        classes: parseClass(`namespace util {` + '\n' +
`static int addStatic(int a, int b);` + '\n' +
`static std::string tagStatic();` + '\n' +
`}`),
        funcs: parseFunction(`namespace util {` + '\n' +
`static int addStatic(int a, int b);` + '\n' +
`static std::string tagStatic();` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0184 生成结果为空');
      assert.ok(result.includes('export function addStatic(a: number, b: number): number;'), 'h2dts_gen_0184 生成结果缺少片段 0: ' + 'export function addStatic(a: number, b: number): number;');
      assert.ok(result.includes('export function tagStatic(): string;'), 'h2dts_gen_0184 生成结果缺少片段 1: ' + 'export function tagStatic(): string;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0185
  * @tc.name h2dts_gen_0185
  * @tc.desc h2dts gen：namespace 内 static 函数容器入参 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0185', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`namespace util {` + '\n' +
`static void logStatic(std::string msg);` + '\n' +
`static int countStatic(std::vector<int> v);` + '\n' +
`}`),
        unions: parseUnion(`namespace util {` + '\n' +
`static void logStatic(std::string msg);` + '\n' +
`static int countStatic(std::vector<int> v);` + '\n' +
`}`),
        structs: parseStruct(`namespace util {` + '\n' +
`static void logStatic(std::string msg);` + '\n' +
`static int countStatic(std::vector<int> v);` + '\n' +
`}`),
        classes: parseClass(`namespace util {` + '\n' +
`static void logStatic(std::string msg);` + '\n' +
`static int countStatic(std::vector<int> v);` + '\n' +
`}`),
        funcs: parseFunction(`namespace util {` + '\n' +
`static void logStatic(std::string msg);` + '\n' +
`static int countStatic(std::vector<int> v);` + '\n' +
`}`),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0185 生成结果为空');
      assert.ok(result.includes('export function logStatic(msg: string): void;'), 'h2dts_gen_0185 生成结果缺少片段 0: ' + 'export function logStatic(msg: string): void;');
      assert.ok(result.includes('export function countStatic(v: Array<number>): number;'), 'h2dts_gen_0185 生成结果缺少片段 1: ' + 'export function countStatic(v: Array<number>): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0185 执行异常: ${String(err)}`);
    }
  });
});
