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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part164.');

  /**
  * @tc.number : h2dts_gen_5547
  * @tc.name : h2dts_gen_5547
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5547', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55547(int a, size_t b, double c, uint8_t d, char16_t e);`),
        unions: parseUnion(`void r6p55547(int a, size_t b, double c, uint8_t d, char16_t e);`),
        structs: parseStruct(`void r6p55547(int a, size_t b, double c, uint8_t d, char16_t e);`),
        classes: parseClass(`void r6p55547(int a, size_t b, double c, uint8_t d, char16_t e);`),
        funcs: parseFunction(`void r6p55547(int a, size_t b, double c, uint8_t d, char16_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5547 生成结果为空');
      const expectSnippet0 = 'export function r6p55547(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5547 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5547 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5547 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5548
  * @tc.name : h2dts_gen_5548
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5548', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55548(int a, size_t b, double c, uint16_t d, uint32_t e);`),
        unions: parseUnion(`void r6p55548(int a, size_t b, double c, uint16_t d, uint32_t e);`),
        structs: parseStruct(`void r6p55548(int a, size_t b, double c, uint16_t d, uint32_t e);`),
        classes: parseClass(`void r6p55548(int a, size_t b, double c, uint16_t d, uint32_t e);`),
        funcs: parseFunction(`void r6p55548(int a, size_t b, double c, uint16_t d, uint32_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5548 生成结果为空');
      const expectSnippet0 = 'export function r6p55548(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5548 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5548 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5548 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5549
  * @tc.name : h2dts_gen_5549
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5549', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55549(int a, size_t b, double c, uint16_t d, uint64_t e);`),
        unions: parseUnion(`void r6p55549(int a, size_t b, double c, uint16_t d, uint64_t e);`),
        structs: parseStruct(`void r6p55549(int a, size_t b, double c, uint16_t d, uint64_t e);`),
        classes: parseClass(`void r6p55549(int a, size_t b, double c, uint16_t d, uint64_t e);`),
        funcs: parseFunction(`void r6p55549(int a, size_t b, double c, uint16_t d, uint64_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5549 生成结果为空');
      const expectSnippet0 = 'export function r6p55549(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5549 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5549 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5549 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5550
  * @tc.name : h2dts_gen_5550
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5550', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55550(int a, size_t b, double c, uint16_t d, int8_t e);`),
        unions: parseUnion(`void r6p55550(int a, size_t b, double c, uint16_t d, int8_t e);`),
        structs: parseStruct(`void r6p55550(int a, size_t b, double c, uint16_t d, int8_t e);`),
        classes: parseClass(`void r6p55550(int a, size_t b, double c, uint16_t d, int8_t e);`),
        funcs: parseFunction(`void r6p55550(int a, size_t b, double c, uint16_t d, int8_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5550 生成结果为空');
      const expectSnippet0 = 'export function r6p55550(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5550 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5550 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5550 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5551
  * @tc.name : h2dts_gen_5551
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5551', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55551(int a, size_t b, double c, uint16_t d, int16_t e);`),
        unions: parseUnion(`void r6p55551(int a, size_t b, double c, uint16_t d, int16_t e);`),
        structs: parseStruct(`void r6p55551(int a, size_t b, double c, uint16_t d, int16_t e);`),
        classes: parseClass(`void r6p55551(int a, size_t b, double c, uint16_t d, int16_t e);`),
        funcs: parseFunction(`void r6p55551(int a, size_t b, double c, uint16_t d, int16_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5551 生成结果为空');
      const expectSnippet0 = 'export function r6p55551(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5551 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5551 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5551 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5552
  * @tc.name : h2dts_gen_5552
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5552', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55552(int a, size_t b, double c, uint16_t d, int32_t e);`),
        unions: parseUnion(`void r6p55552(int a, size_t b, double c, uint16_t d, int32_t e);`),
        structs: parseStruct(`void r6p55552(int a, size_t b, double c, uint16_t d, int32_t e);`),
        classes: parseClass(`void r6p55552(int a, size_t b, double c, uint16_t d, int32_t e);`),
        funcs: parseFunction(`void r6p55552(int a, size_t b, double c, uint16_t d, int32_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5552 生成结果为空');
      const expectSnippet0 = 'export function r6p55552(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5552 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5552 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5552 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5553
  * @tc.name : h2dts_gen_5553
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5553', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55553(int a, size_t b, double c, uint16_t d, int64_t e);`),
        unions: parseUnion(`void r6p55553(int a, size_t b, double c, uint16_t d, int64_t e);`),
        structs: parseStruct(`void r6p55553(int a, size_t b, double c, uint16_t d, int64_t e);`),
        classes: parseClass(`void r6p55553(int a, size_t b, double c, uint16_t d, int64_t e);`),
        funcs: parseFunction(`void r6p55553(int a, size_t b, double c, uint16_t d, int64_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5553 生成结果为空');
      const expectSnippet0 = 'export function r6p55553(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5553 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5553 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5553 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5554
  * @tc.name : h2dts_gen_5554
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5554', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55554(int a, size_t b, double c, uint16_t d, unsigned e);`),
        unions: parseUnion(`void r6p55554(int a, size_t b, double c, uint16_t d, unsigned e);`),
        structs: parseStruct(`void r6p55554(int a, size_t b, double c, uint16_t d, unsigned e);`),
        classes: parseClass(`void r6p55554(int a, size_t b, double c, uint16_t d, unsigned e);`),
        funcs: parseFunction(`void r6p55554(int a, size_t b, double c, uint16_t d, unsigned e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5554 生成结果为空');
      const expectSnippet0 = 'export function r6p55554(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5554 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5554 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5554 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5555
  * @tc.name : h2dts_gen_5555
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5555', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55555(int a, size_t b, double c, uint16_t d, bool e);`),
        unions: parseUnion(`void r6p55555(int a, size_t b, double c, uint16_t d, bool e);`),
        structs: parseStruct(`void r6p55555(int a, size_t b, double c, uint16_t d, bool e);`),
        classes: parseClass(`void r6p55555(int a, size_t b, double c, uint16_t d, bool e);`),
        funcs: parseFunction(`void r6p55555(int a, size_t b, double c, uint16_t d, bool e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5555 生成结果为空');
      const expectSnippet0 = 'export function r6p55555(a: number, b: number, c: number, d: number, e: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5555 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5555 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5555 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5556
  * @tc.name : h2dts_gen_5556
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5556', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55556(int a, size_t b, double c, uint16_t d, char e);`),
        unions: parseUnion(`void r6p55556(int a, size_t b, double c, uint16_t d, char e);`),
        structs: parseStruct(`void r6p55556(int a, size_t b, double c, uint16_t d, char e);`),
        classes: parseClass(`void r6p55556(int a, size_t b, double c, uint16_t d, char e);`),
        funcs: parseFunction(`void r6p55556(int a, size_t b, double c, uint16_t d, char e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5556 生成结果为空');
      const expectSnippet0 = 'export function r6p55556(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5556 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5556 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5556 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5557
  * @tc.name : h2dts_gen_5557
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5557', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55557(int a, size_t b, double c, uint16_t d, wchar_t e);`),
        unions: parseUnion(`void r6p55557(int a, size_t b, double c, uint16_t d, wchar_t e);`),
        structs: parseStruct(`void r6p55557(int a, size_t b, double c, uint16_t d, wchar_t e);`),
        classes: parseClass(`void r6p55557(int a, size_t b, double c, uint16_t d, wchar_t e);`),
        funcs: parseFunction(`void r6p55557(int a, size_t b, double c, uint16_t d, wchar_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5557 生成结果为空');
      const expectSnippet0 = 'export function r6p55557(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5557 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5557 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5557 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5558
  * @tc.name : h2dts_gen_5558
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5558', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55558(int a, size_t b, double c, uint16_t d, char8_t e);`),
        unions: parseUnion(`void r6p55558(int a, size_t b, double c, uint16_t d, char8_t e);`),
        structs: parseStruct(`void r6p55558(int a, size_t b, double c, uint16_t d, char8_t e);`),
        classes: parseClass(`void r6p55558(int a, size_t b, double c, uint16_t d, char8_t e);`),
        funcs: parseFunction(`void r6p55558(int a, size_t b, double c, uint16_t d, char8_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5558 生成结果为空');
      const expectSnippet0 = 'export function r6p55558(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5558 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5558 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5558 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5559
  * @tc.name : h2dts_gen_5559
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5559', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55559(int a, size_t b, double c, uint16_t d, char16_t e);`),
        unions: parseUnion(`void r6p55559(int a, size_t b, double c, uint16_t d, char16_t e);`),
        structs: parseStruct(`void r6p55559(int a, size_t b, double c, uint16_t d, char16_t e);`),
        classes: parseClass(`void r6p55559(int a, size_t b, double c, uint16_t d, char16_t e);`),
        funcs: parseFunction(`void r6p55559(int a, size_t b, double c, uint16_t d, char16_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5559 生成结果为空');
      const expectSnippet0 = 'export function r6p55559(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5559 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5559 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5559 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5560
  * @tc.name : h2dts_gen_5560
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5560', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55560(int a, size_t b, double c, uint32_t d, uint64_t e);`),
        unions: parseUnion(`void r6p55560(int a, size_t b, double c, uint32_t d, uint64_t e);`),
        structs: parseStruct(`void r6p55560(int a, size_t b, double c, uint32_t d, uint64_t e);`),
        classes: parseClass(`void r6p55560(int a, size_t b, double c, uint32_t d, uint64_t e);`),
        funcs: parseFunction(`void r6p55560(int a, size_t b, double c, uint32_t d, uint64_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5560 生成结果为空');
      const expectSnippet0 = 'export function r6p55560(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5560 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5560 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5560 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5561
  * @tc.name : h2dts_gen_5561
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5561', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55561(int a, size_t b, double c, uint32_t d, int8_t e);`),
        unions: parseUnion(`void r6p55561(int a, size_t b, double c, uint32_t d, int8_t e);`),
        structs: parseStruct(`void r6p55561(int a, size_t b, double c, uint32_t d, int8_t e);`),
        classes: parseClass(`void r6p55561(int a, size_t b, double c, uint32_t d, int8_t e);`),
        funcs: parseFunction(`void r6p55561(int a, size_t b, double c, uint32_t d, int8_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5561 生成结果为空');
      const expectSnippet0 = 'export function r6p55561(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5561 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5561 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5561 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5562
  * @tc.name : h2dts_gen_5562
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5562', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55562(int a, size_t b, double c, uint32_t d, int16_t e);`),
        unions: parseUnion(`void r6p55562(int a, size_t b, double c, uint32_t d, int16_t e);`),
        structs: parseStruct(`void r6p55562(int a, size_t b, double c, uint32_t d, int16_t e);`),
        classes: parseClass(`void r6p55562(int a, size_t b, double c, uint32_t d, int16_t e);`),
        funcs: parseFunction(`void r6p55562(int a, size_t b, double c, uint32_t d, int16_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5562 生成结果为空');
      const expectSnippet0 = 'export function r6p55562(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5562 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5562 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5562 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5563
  * @tc.name : h2dts_gen_5563
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5563', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55563(int a, size_t b, double c, uint32_t d, int32_t e);`),
        unions: parseUnion(`void r6p55563(int a, size_t b, double c, uint32_t d, int32_t e);`),
        structs: parseStruct(`void r6p55563(int a, size_t b, double c, uint32_t d, int32_t e);`),
        classes: parseClass(`void r6p55563(int a, size_t b, double c, uint32_t d, int32_t e);`),
        funcs: parseFunction(`void r6p55563(int a, size_t b, double c, uint32_t d, int32_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5563 生成结果为空');
      const expectSnippet0 = 'export function r6p55563(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5563 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5563 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5563 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5564
  * @tc.name : h2dts_gen_5564
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5564', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55564(int a, size_t b, double c, uint32_t d, int64_t e);`),
        unions: parseUnion(`void r6p55564(int a, size_t b, double c, uint32_t d, int64_t e);`),
        structs: parseStruct(`void r6p55564(int a, size_t b, double c, uint32_t d, int64_t e);`),
        classes: parseClass(`void r6p55564(int a, size_t b, double c, uint32_t d, int64_t e);`),
        funcs: parseFunction(`void r6p55564(int a, size_t b, double c, uint32_t d, int64_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5564 生成结果为空');
      const expectSnippet0 = 'export function r6p55564(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5564 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5564 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5564 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5565
  * @tc.name : h2dts_gen_5565
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5565', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55565(int a, size_t b, double c, uint32_t d, unsigned e);`),
        unions: parseUnion(`void r6p55565(int a, size_t b, double c, uint32_t d, unsigned e);`),
        structs: parseStruct(`void r6p55565(int a, size_t b, double c, uint32_t d, unsigned e);`),
        classes: parseClass(`void r6p55565(int a, size_t b, double c, uint32_t d, unsigned e);`),
        funcs: parseFunction(`void r6p55565(int a, size_t b, double c, uint32_t d, unsigned e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5565 生成结果为空');
      const expectSnippet0 = 'export function r6p55565(a: number, b: number, c: number, d: number, e: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5565 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5565 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5565 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5566
  * @tc.name : h2dts_gen_5566
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5566', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55566(int a, size_t b, double c, uint32_t d, bool e);`),
        unions: parseUnion(`void r6p55566(int a, size_t b, double c, uint32_t d, bool e);`),
        structs: parseStruct(`void r6p55566(int a, size_t b, double c, uint32_t d, bool e);`),
        classes: parseClass(`void r6p55566(int a, size_t b, double c, uint32_t d, bool e);`),
        funcs: parseFunction(`void r6p55566(int a, size_t b, double c, uint32_t d, bool e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5566 生成结果为空');
      const expectSnippet0 = 'export function r6p55566(a: number, b: number, c: number, d: number, e: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5566 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5566 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5566 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5567
  * @tc.name : h2dts_gen_5567
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5567', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55567(int a, size_t b, double c, uint32_t d, char e);`),
        unions: parseUnion(`void r6p55567(int a, size_t b, double c, uint32_t d, char e);`),
        structs: parseStruct(`void r6p55567(int a, size_t b, double c, uint32_t d, char e);`),
        classes: parseClass(`void r6p55567(int a, size_t b, double c, uint32_t d, char e);`),
        funcs: parseFunction(`void r6p55567(int a, size_t b, double c, uint32_t d, char e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5567 生成结果为空');
      const expectSnippet0 = 'export function r6p55567(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5567 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5567 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5567 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5568
  * @tc.name : h2dts_gen_5568
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5568', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55568(int a, size_t b, double c, uint32_t d, wchar_t e);`),
        unions: parseUnion(`void r6p55568(int a, size_t b, double c, uint32_t d, wchar_t e);`),
        structs: parseStruct(`void r6p55568(int a, size_t b, double c, uint32_t d, wchar_t e);`),
        classes: parseClass(`void r6p55568(int a, size_t b, double c, uint32_t d, wchar_t e);`),
        funcs: parseFunction(`void r6p55568(int a, size_t b, double c, uint32_t d, wchar_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5568 生成结果为空');
      const expectSnippet0 = 'export function r6p55568(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5568 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5568 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5568 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5569
  * @tc.name : h2dts_gen_5569
  * @tc.desc : h2dts gen：扩充-R6-五参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_5569', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r6p55569(int a, size_t b, double c, uint32_t d, char8_t e);`),
        unions: parseUnion(`void r6p55569(int a, size_t b, double c, uint32_t d, char8_t e);`),
        structs: parseStruct(`void r6p55569(int a, size_t b, double c, uint32_t d, char8_t e);`),
        classes: parseClass(`void r6p55569(int a, size_t b, double c, uint32_t d, char8_t e);`),
        funcs: parseFunction(`void r6p55569(int a, size_t b, double c, uint32_t d, char8_t e);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_5569 生成结果为空');
      const expectSnippet0 = 'export function r6p55569(a: number, b: number, c: number, d: number, e: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5569 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_5569 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_5569 执行异常: ${String(err)}`);
    }
  });
});
