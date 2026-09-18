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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part27.');

  /**
  * @tc.number : h2dts_gen_0886
  * @tc.name : h2dts_gen_0886
  * @tc.desc : h2dts gen：扩充-tuple 类型 `std::pair<double, wchar_t, uint32_t, float, long, short, char32_t>` → `[number,...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0886', () => {
    try {
      const DECL = `void genType886(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0886 生成结果为空');
      const expectSnippet0 = 'export function genType886(v: [number, string, number, number, number, number, string]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0886 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0886 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0886 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0887
  * @tc.name : h2dts_gen_0887
  * @tc.desc : h2dts gen：扩充-tuple 类型 `std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned>` → `[string, number, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0887', () => {
    try {
      const DECL = `void genType887(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0887 生成结果为空');
      const expectSnippet0 = 'export function genType887(v: [string, number, string, number, number]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0887 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0887 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0887 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0888
  * @tc.name : h2dts_gen_0888
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::complex<int, double>` → `{real: number, imag: number}` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0888', () => {
    try {
      const DECL = `void genType888(std::complex<int, double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0888 生成结果为空');
      const expectSnippet0 = 'export function genType888(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0888 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0888 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0888 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0889
  * @tc.name : h2dts_gen_0889
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::complex<float, int32_t>` → `{real: number, imag: number}` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0889', () => {
    try {
      const DECL = `void genType889(std::complex<float, int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0889 生成结果为空');
      const expectSnippet0 = 'export function genType889(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0889 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0889 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0889 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0890
  * @tc.name : h2dts_gen_0890
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::complex<long, uint32_t>` → `{real: number, imag: number}` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0890', () => {
    try {
      const DECL = `void genType890(std::complex<long, uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0890 生成结果为空');
      const expectSnippet0 = 'export function genType890(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0890 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0890 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0890 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0891
  * @tc.name : h2dts_gen_0891
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::complex<unsigned, short>` → `{real: number, imag: number}` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0891', () => {
    try {
      const DECL = `void genType891(std::complex<unsigned, short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0891 生成结果为空');
      const expectSnippet0 = 'export function genType891(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0891 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0891 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0891 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0892
  * @tc.name : h2dts_gen_0892
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::complex<uint8_t, size_t>` → `{real: number, imag: number}` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0892', () => {
    try {
      const DECL = `void genType892(std::complex<uint8_t, size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0892 生成结果为空');
      const expectSnippet0 = 'export function genType892(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0892 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0892 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0892 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0893
  * @tc.name : h2dts_gen_0893
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::complex<uint16_t, uint64_t>` → `{real: number, imag: number}` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0893', () => {
    try {
      const DECL = `void genType893(std::complex<uint16_t, uint64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0893 生成结果为空');
      const expectSnippet0 = 'export function genType893(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0893 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0893 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0893 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0894
  * @tc.name : h2dts_gen_0894
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::complex<int8_t, int16_t>` → `{real: number, imag: number}` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0894', () => {
    try {
      const DECL = `void genType894(std::complex<int8_t, int16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0894 生成结果为空');
      const expectSnippet0 = 'export function genType894(v: {real: number, imag: number}): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0894 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0894 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0894 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0895
  * @tc.name : h2dts_gen_0895
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::time_t` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0895', () => {
    try {
      const DECL = `void genType895(std::time_t v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0895 生成结果为空');
      const expectSnippet0 = 'export function genType895(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0895 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0895 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0895 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0896
  * @tc.name : h2dts_gen_0896
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::clock_t` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0896', () => {
    try {
      const DECL = `void genType896(std::clock_t v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0896 生成结果为空');
      const expectSnippet0 = 'export function genType896(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0896 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0896 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0896 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0897
  * @tc.name : h2dts_gen_0897
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::tm` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0897', () => {
    try {
      const DECL = `void genType897(std::tm v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0897 生成结果为空');
      const expectSnippet0 = 'export function genType897(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0897 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0897 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0897 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0898
  * @tc.name : h2dts_gen_0898
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::chrono::duration<double>` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0898', () => {
    try {
      const DECL = `void genType898(std::chrono::duration<double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0898 生成结果为空');
      const expectSnippet0 = 'export function genType898(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0898 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0898 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0898 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0899
  * @tc.name : h2dts_gen_0899
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::chrono::system_clock::time_point` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0899', () => {
    try {
      const DECL = `void genType899(std::chrono::system_clock::time_point v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0899 生成结果为空');
      const expectSnippet0 = 'export function genType899(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0899 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0899 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0899 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0900
  * @tc.name : h2dts_gen_0900
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::chrono::steady_clock::time_point` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0900', () => {
    try {
      const DECL = `void genType900(std::chrono::steady_clock::time_point v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0900 生成结果为空');
      const expectSnippet0 = 'export function genType900(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0900 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0900 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0900 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0901
  * @tc.name : h2dts_gen_0901
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::chrono::seconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0901', () => {
    try {
      const DECL = `void genType901(std::chrono::seconds v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0901 生成结果为空');
      const expectSnippet0 = 'export function genType901(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0901 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0901 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0901 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0902
  * @tc.name : h2dts_gen_0902
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::chrono::milliseconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0902', () => {
    try {
      const DECL = `void genType902(std::chrono::milliseconds v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0902 生成结果为空');
      const expectSnippet0 = 'export function genType902(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0902 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0902 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0902 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0903
  * @tc.name : h2dts_gen_0903
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::chrono::microseconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0903', () => {
    try {
      const DECL = `void genType903(std::chrono::microseconds v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0903 生成结果为空');
      const expectSnippet0 = 'export function genType903(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0903 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0903 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0903 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0904
  * @tc.name : h2dts_gen_0904
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::chrono::nanoseconds` → `Date` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0904', () => {
    try {
      const DECL = `void genType904(std::chrono::nanoseconds v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0904 生成结果为空');
      const expectSnippet0 = 'export function genType904(v: Date): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0904 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0904 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0904 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0905
  * @tc.name : h2dts_gen_0905
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<int(int, int)>` → `(param0: number, param1: number)=>number` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0905', () => {
    try {
      const DECL = `void genType905(std::function<int(int, int)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0905 生成结果为空');
      const expectSnippet0 = 'export function genType905(v: (param0: number, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0905 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0905 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0905 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0906
  * @tc.name : h2dts_gen_0906
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<void(long, long)>` → `(param0: number, param1: number)=>void` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0906', () => {
    try {
      const DECL = `void genType906(std::function<void(long, long)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0906 生成结果为空');
      const expectSnippet0 = 'export function genType906(v: (param0: number, param1: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0906 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0906 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0906 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0907
  * @tc.name : h2dts_gen_0907
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<void()>` → `()=>void` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0907', () => {
    try {
      const DECL = `void genType907(std::function<void()> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0907 生成结果为空');
      const expectSnippet0 = 'export function genType907(v: ()=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0907 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0907 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0907 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0908
  * @tc.name : h2dts_gen_0908
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<int(float)>` → `(param0: number)=>number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0908', () => {
    try {
      const DECL = `void genType908(std::function<int(float)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0908 生成结果为空');
      const expectSnippet0 = 'export function genType908(v: (param0: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0908 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0908 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0908 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0909
  * @tc.name : h2dts_gen_0909
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<void(double)>` → `(param0: number)=>void` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0909', () => {
    try {
      const DECL = `void genType909(std::function<void(double)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0909 生成结果为空');
      const expectSnippet0 = 'export function genType909(v: (param0: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0909 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0909 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0909 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0910
  * @tc.name : h2dts_gen_0910
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<void(char, short, short)>` → `(param0: string, param1: number,...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0910', () => {
    try {
      const DECL = `void genType910(std::function<void(char, short, short)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0910 生成结果为空');
      const expectSnippet0 = 'export function genType910(v: (param0: string, param1: number, param2: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0910 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0910 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0910 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0911
  * @tc.name : h2dts_gen_0911
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<void(char16_t, uint16_t)>` → `(param0: string, param1: number)...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0911', () => {
    try {
      const DECL = `void genType911(std::function<void(char16_t, uint16_t)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0911 生成结果为空');
      const expectSnippet0 = 'export function genType911(v: (param0: string, param1: number)=>void): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0911 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0911 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0911 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0912
  * @tc.name : h2dts_gen_0912
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<unsigned(char64_t, size_t)>` → `(param0: string, param1: numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0912', () => {
    try {
      const DECL = `void genType912(std::function<unsigned(char64_t, size_t)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0912 生成结果为空');
      const expectSnippet0 = 'export function genType912(v: (param0: string, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0912 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0912 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0912 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0913
  * @tc.name : h2dts_gen_0913
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<char32_t(char8_t, int32_t)>` → `(param0: string, param1: numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0913', () => {
    try {
      const DECL = `void genType913(std::function<char32_t(char8_t, int32_t)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0913 生成结果为空');
      const expectSnippet0 = 'export function genType913(v: (param0: string, param1: number)=>string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0913 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0913 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0913 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0914
  * @tc.name : h2dts_gen_0914
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<uint64_t(wchar_t, uint32_t)>` → `(param0: string, param1: numb...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0914', () => {
    try {
      const DECL = `void genType914(std::function<uint64_t(wchar_t, uint32_t)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0914 生成结果为空');
      const expectSnippet0 = 'export function genType914(v: (param0: string, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0914 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0914 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0914 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0915
  * @tc.name : h2dts_gen_0915
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<int64_t(int8_t, int16_t)>` → `(param0: number, param1: number)...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0915', () => {
    try {
      const DECL = `void genType915(std::function<int64_t(int8_t, int16_t)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0915 生成结果为空');
      const expectSnippet0 = 'export function genType915(v: (param0: number, param1: number)=>number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0915 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0915 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0915 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0916
  * @tc.name : h2dts_gen_0916
  * @tc.desc : h2dts gen：扩充-callback 类型 `std::function<bool(int32_t)>` → `(param0: number)=>boolean` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0916', () => {
    try {
      const DECL = `void genType916(std::function<bool(int32_t)> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0916 生成结果为空');
      const expectSnippet0 = 'export function genType916(v: (param0: number)=>boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0916 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0916 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0916 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0917
  * @tc.name : h2dts_gen_0917
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<int>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0917', () => {
    try {
      const DECL = `void genType917(std::unique_ptr<int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0917 生成结果为空');
      const expectSnippet0 = 'export function genType917(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0917 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0917 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0917 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0918
  * @tc.name : h2dts_gen_0918
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<size_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0918', () => {
    try {
      const DECL = `void genType918(std::unique_ptr<size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0918 生成结果为空');
      const expectSnippet0 = 'export function genType918(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0918 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0918 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0918 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0919
  * @tc.name : h2dts_gen_0919
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<double>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0919', () => {
    try {
      const DECL = `void genType919(std::unique_ptr<double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0919 生成结果为空');
      const expectSnippet0 = 'export function genType919(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0919 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0919 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0919 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0920
  * @tc.name : h2dts_gen_0920
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<float>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_0920', () => {
    try {
      const DECL = `void genType920(std::unique_ptr<float> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          result = getDtsFunction(gi);
        }
      });
      assert.ok(result.length > 0, 'h2dts_gen_0920 生成结果为空');
      const expectSnippet0 = 'export function genType920(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0920 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0920 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0920 执行异常: ${String(err)}`);
    }
  });
});
