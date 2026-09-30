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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part41.');

  /**
  * @tc.number : h2dts_gen_1298
  * @tc.name : h2dts_gen_1298
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`size_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1298', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1298(int a, size_t b);`),
        unions: parseUnion(`void r4mp1298(int a, size_t b);`),
        structs: parseStruct(`void r4mp1298(int a, size_t b);`),
        classes: parseClass(`void r4mp1298(int a, size_t b);`),
        funcs: parseFunction(`void r4mp1298(int a, size_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1298 生成结果为空');
      const expectSnippet0 = 'export function r4mp1298(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1298 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1298 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1299
  * @tc.name : h2dts_gen_1299
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`double` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1299', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1299(int a, double b);`),
        unions: parseUnion(`void r4mp1299(int a, double b);`),
        structs: parseStruct(`void r4mp1299(int a, double b);`),
        classes: parseClass(`void r4mp1299(int a, double b);`),
        funcs: parseFunction(`void r4mp1299(int a, double b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1299 生成结果为空');
      const expectSnippet0 = 'export function r4mp1299(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1299 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1299 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1300
  * @tc.name : h2dts_gen_1300
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`float` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1300', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1300(int a, float b);`),
        unions: parseUnion(`void r4mp1300(int a, float b);`),
        structs: parseStruct(`void r4mp1300(int a, float b);`),
        classes: parseClass(`void r4mp1300(int a, float b);`),
        funcs: parseFunction(`void r4mp1300(int a, float b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1300 生成结果为空');
      const expectSnippet0 = 'export function r4mp1300(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1300 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1300 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1301
  * @tc.name : h2dts_gen_1301
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`short` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1301', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1301(int a, short b);`),
        unions: parseUnion(`void r4mp1301(int a, short b);`),
        structs: parseStruct(`void r4mp1301(int a, short b);`),
        classes: parseClass(`void r4mp1301(int a, short b);`),
        funcs: parseFunction(`void r4mp1301(int a, short b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1301 生成结果为空');
      const expectSnippet0 = 'export function r4mp1301(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1301 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1301 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1301 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1302
  * @tc.name : h2dts_gen_1302
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`long` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1302', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1302(int a, long b);`),
        unions: parseUnion(`void r4mp1302(int a, long b);`),
        structs: parseStruct(`void r4mp1302(int a, long b);`),
        classes: parseClass(`void r4mp1302(int a, long b);`),
        funcs: parseFunction(`void r4mp1302(int a, long b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1302 生成结果为空');
      const expectSnippet0 = 'export function r4mp1302(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1302 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1302 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1303
  * @tc.name : h2dts_gen_1303
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`uint8_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1303', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1303(int a, uint8_t b);`),
        unions: parseUnion(`void r4mp1303(int a, uint8_t b);`),
        structs: parseStruct(`void r4mp1303(int a, uint8_t b);`),
        classes: parseClass(`void r4mp1303(int a, uint8_t b);`),
        funcs: parseFunction(`void r4mp1303(int a, uint8_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1303 生成结果为空');
      const expectSnippet0 = 'export function r4mp1303(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1303 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1303 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1304
  * @tc.name : h2dts_gen_1304
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`uint16_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1304', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1304(int a, uint16_t b);`),
        unions: parseUnion(`void r4mp1304(int a, uint16_t b);`),
        structs: parseStruct(`void r4mp1304(int a, uint16_t b);`),
        classes: parseClass(`void r4mp1304(int a, uint16_t b);`),
        funcs: parseFunction(`void r4mp1304(int a, uint16_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1304 生成结果为空');
      const expectSnippet0 = 'export function r4mp1304(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1304 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1304 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1304 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1305
  * @tc.name : h2dts_gen_1305
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`uint32_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1305', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1305(int a, uint32_t b);`),
        unions: parseUnion(`void r4mp1305(int a, uint32_t b);`),
        structs: parseStruct(`void r4mp1305(int a, uint32_t b);`),
        classes: parseClass(`void r4mp1305(int a, uint32_t b);`),
        funcs: parseFunction(`void r4mp1305(int a, uint32_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1305 生成结果为空');
      const expectSnippet0 = 'export function r4mp1305(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1305 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1305 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1306
  * @tc.name : h2dts_gen_1306
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`uint64_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1306', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1306(int a, uint64_t b);`),
        unions: parseUnion(`void r4mp1306(int a, uint64_t b);`),
        structs: parseStruct(`void r4mp1306(int a, uint64_t b);`),
        classes: parseClass(`void r4mp1306(int a, uint64_t b);`),
        funcs: parseFunction(`void r4mp1306(int a, uint64_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1306 生成结果为空');
      const expectSnippet0 = 'export function r4mp1306(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1306 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1306 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1306 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1307
  * @tc.name : h2dts_gen_1307
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`int8_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1307', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1307(int a, int8_t b);`),
        unions: parseUnion(`void r4mp1307(int a, int8_t b);`),
        structs: parseStruct(`void r4mp1307(int a, int8_t b);`),
        classes: parseClass(`void r4mp1307(int a, int8_t b);`),
        funcs: parseFunction(`void r4mp1307(int a, int8_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1307 生成结果为空');
      const expectSnippet0 = 'export function r4mp1307(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1307 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1307 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1307 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1308
  * @tc.name : h2dts_gen_1308
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`int16_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1308', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1308(int a, int16_t b);`),
        unions: parseUnion(`void r4mp1308(int a, int16_t b);`),
        structs: parseStruct(`void r4mp1308(int a, int16_t b);`),
        classes: parseClass(`void r4mp1308(int a, int16_t b);`),
        funcs: parseFunction(`void r4mp1308(int a, int16_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1308 生成结果为空');
      const expectSnippet0 = 'export function r4mp1308(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1308 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1308 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1308 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1309
  * @tc.name : h2dts_gen_1309
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`int32_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1309', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1309(int a, int32_t b);`),
        unions: parseUnion(`void r4mp1309(int a, int32_t b);`),
        structs: parseStruct(`void r4mp1309(int a, int32_t b);`),
        classes: parseClass(`void r4mp1309(int a, int32_t b);`),
        funcs: parseFunction(`void r4mp1309(int a, int32_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1309 生成结果为空');
      const expectSnippet0 = 'export function r4mp1309(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1309 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1309 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1309 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1310
  * @tc.name : h2dts_gen_1310
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`int64_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1310', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1310(int a, int64_t b);`),
        unions: parseUnion(`void r4mp1310(int a, int64_t b);`),
        structs: parseStruct(`void r4mp1310(int a, int64_t b);`),
        classes: parseClass(`void r4mp1310(int a, int64_t b);`),
        funcs: parseFunction(`void r4mp1310(int a, int64_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1310 生成结果为空');
      const expectSnippet0 = 'export function r4mp1310(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1310 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1310 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1310 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1311
  * @tc.name : h2dts_gen_1311
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`unsigned` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1311', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1311(int a, unsigned b);`),
        unions: parseUnion(`void r4mp1311(int a, unsigned b);`),
        structs: parseStruct(`void r4mp1311(int a, unsigned b);`),
        classes: parseClass(`void r4mp1311(int a, unsigned b);`),
        funcs: parseFunction(`void r4mp1311(int a, unsigned b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1311 生成结果为空');
      const expectSnippet0 = 'export function r4mp1311(a: number, b: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1311 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1311 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1311 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1312
  * @tc.name : h2dts_gen_1312
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`bool` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1312', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1312(int a, bool b);`),
        unions: parseUnion(`void r4mp1312(int a, bool b);`),
        structs: parseStruct(`void r4mp1312(int a, bool b);`),
        classes: parseClass(`void r4mp1312(int a, bool b);`),
        funcs: parseFunction(`void r4mp1312(int a, bool b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1312 生成结果为空');
      const expectSnippet0 = 'export function r4mp1312(a: number, b: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1312 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1312 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1312 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1313
  * @tc.name : h2dts_gen_1313
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`char` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1313', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1313(int a, char b);`),
        unions: parseUnion(`void r4mp1313(int a, char b);`),
        structs: parseStruct(`void r4mp1313(int a, char b);`),
        classes: parseClass(`void r4mp1313(int a, char b);`),
        funcs: parseFunction(`void r4mp1313(int a, char b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1313 生成结果为空');
      const expectSnippet0 = 'export function r4mp1313(a: number, b: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1313 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1313 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1313 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1314
  * @tc.name : h2dts_gen_1314
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`wchar_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1314', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1314(int a, wchar_t b);`),
        unions: parseUnion(`void r4mp1314(int a, wchar_t b);`),
        structs: parseStruct(`void r4mp1314(int a, wchar_t b);`),
        classes: parseClass(`void r4mp1314(int a, wchar_t b);`),
        funcs: parseFunction(`void r4mp1314(int a, wchar_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1314 生成结果为空');
      const expectSnippet0 = 'export function r4mp1314(a: number, b: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1314 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1314 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1314 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1315
  * @tc.name : h2dts_gen_1315
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`char8_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1315', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1315(int a, char8_t b);`),
        unions: parseUnion(`void r4mp1315(int a, char8_t b);`),
        structs: parseStruct(`void r4mp1315(int a, char8_t b);`),
        classes: parseClass(`void r4mp1315(int a, char8_t b);`),
        funcs: parseFunction(`void r4mp1315(int a, char8_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1315 生成结果为空');
      const expectSnippet0 = 'export function r4mp1315(a: number, b: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1315 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1315 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1315 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1316
  * @tc.name : h2dts_gen_1316
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`char16_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1316', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1316(int a, char16_t b);`),
        unions: parseUnion(`void r4mp1316(int a, char16_t b);`),
        structs: parseStruct(`void r4mp1316(int a, char16_t b);`),
        classes: parseClass(`void r4mp1316(int a, char16_t b);`),
        funcs: parseFunction(`void r4mp1316(int a, char16_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1316 生成结果为空');
      const expectSnippet0 = 'export function r4mp1316(a: number, b: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1316 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1316 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1316 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1317
  * @tc.name : h2dts_gen_1317
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`char32_t` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1317', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1317(int a, char32_t b);`),
        unions: parseUnion(`void r4mp1317(int a, char32_t b);`),
        structs: parseStruct(`void r4mp1317(int a, char32_t b);`),
        classes: parseClass(`void r4mp1317(int a, char32_t b);`),
        funcs: parseFunction(`void r4mp1317(int a, char32_t b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1317 生成结果为空');
      const expectSnippet0 = 'export function r4mp1317(a: number, b: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1317 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1317 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1317 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1318
  * @tc.name : h2dts_gen_1318
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::string::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1318', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1318(int a, std::string::iterator b);`),
        unions: parseUnion(`void r4mp1318(int a, std::string::iterator b);`),
        structs: parseStruct(`void r4mp1318(int a, std::string::iterator b);`),
        classes: parseClass(`void r4mp1318(int a, std::string::iterator b);`),
        funcs: parseFunction(`void r4mp1318(int a, std::string::iterator b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1318 生成结果为空');
      const expectSnippet0 = 'export function r4mp1318(a: number, b: IterableIterator<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1318 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1318 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1318 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1319
  * @tc.name : h2dts_gen_1319
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1319', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1319(int a, std::vector<int> b);`),
        unions: parseUnion(`void r4mp1319(int a, std::vector<int> b);`),
        structs: parseStruct(`void r4mp1319(int a, std::vector<int> b);`),
        classes: parseClass(`void r4mp1319(int a, std::vector<int> b);`),
        funcs: parseFunction(`void r4mp1319(int a, std::vector<int> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1319 生成结果为空');
      const expectSnippet0 = 'export function r4mp1319(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1319 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1319 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1319 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1320
  * @tc.name : h2dts_gen_1320
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1320', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1320(int a, std::vector<size_t> b);`),
        unions: parseUnion(`void r4mp1320(int a, std::vector<size_t> b);`),
        structs: parseStruct(`void r4mp1320(int a, std::vector<size_t> b);`),
        classes: parseClass(`void r4mp1320(int a, std::vector<size_t> b);`),
        funcs: parseFunction(`void r4mp1320(int a, std::vector<size_t> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1320 生成结果为空');
      const expectSnippet0 = 'export function r4mp1320(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1320 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1320 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1320 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1321
  * @tc.name : h2dts_gen_1321
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1321', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1321(int a, std::vector<double> b);`),
        unions: parseUnion(`void r4mp1321(int a, std::vector<double> b);`),
        structs: parseStruct(`void r4mp1321(int a, std::vector<double> b);`),
        classes: parseClass(`void r4mp1321(int a, std::vector<double> b);`),
        funcs: parseFunction(`void r4mp1321(int a, std::vector<double> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1321 生成结果为空');
      const expectSnippet0 = 'export function r4mp1321(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1321 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1321 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1321 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1322
  * @tc.name : h2dts_gen_1322
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1322', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1322(int a, std::vector<float> b);`),
        unions: parseUnion(`void r4mp1322(int a, std::vector<float> b);`),
        structs: parseStruct(`void r4mp1322(int a, std::vector<float> b);`),
        classes: parseClass(`void r4mp1322(int a, std::vector<float> b);`),
        funcs: parseFunction(`void r4mp1322(int a, std::vector<float> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1322 生成结果为空');
      const expectSnippet0 = 'export function r4mp1322(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1322 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1322 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1323
  * @tc.name : h2dts_gen_1323
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1323', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1323(int a, std::vector<long> b);`),
        unions: parseUnion(`void r4mp1323(int a, std::vector<long> b);`),
        structs: parseStruct(`void r4mp1323(int a, std::vector<long> b);`),
        classes: parseClass(`void r4mp1323(int a, std::vector<long> b);`),
        funcs: parseFunction(`void r4mp1323(int a, std::vector<long> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1323 生成结果为空');
      const expectSnippet0 = 'export function r4mp1323(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1323 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1323 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1323 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1324
  * @tc.name : h2dts_gen_1324
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1324', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1324(int a, std::vector<short> b);`),
        unions: parseUnion(`void r4mp1324(int a, std::vector<short> b);`),
        structs: parseStruct(`void r4mp1324(int a, std::vector<short> b);`),
        classes: parseClass(`void r4mp1324(int a, std::vector<short> b);`),
        funcs: parseFunction(`void r4mp1324(int a, std::vector<short> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1324 生成结果为空');
      const expectSnippet0 = 'export function r4mp1324(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1324 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1324 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1325
  * @tc.name : h2dts_gen_1325
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1325', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1325(int a, std::vector<uint8_t> b);`),
        unions: parseUnion(`void r4mp1325(int a, std::vector<uint8_t> b);`),
        structs: parseStruct(`void r4mp1325(int a, std::vector<uint8_t> b);`),
        classes: parseClass(`void r4mp1325(int a, std::vector<uint8_t> b);`),
        funcs: parseFunction(`void r4mp1325(int a, std::vector<uint8_t> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1325 生成结果为空');
      const expectSnippet0 = 'export function r4mp1325(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1325 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1325 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1325 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1326
  * @tc.name : h2dts_gen_1326
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1326', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1326(int a, std::vector<uint16_t> b);`),
        unions: parseUnion(`void r4mp1326(int a, std::vector<uint16_t> b);`),
        structs: parseStruct(`void r4mp1326(int a, std::vector<uint16_t> b);`),
        classes: parseClass(`void r4mp1326(int a, std::vector<uint16_t> b);`),
        funcs: parseFunction(`void r4mp1326(int a, std::vector<uint16_t> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1326 生成结果为空');
      const expectSnippet0 = 'export function r4mp1326(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1326 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1326 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1327
  * @tc.name : h2dts_gen_1327
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1327', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1327(int a, std::vector<uint32_t> b);`),
        unions: parseUnion(`void r4mp1327(int a, std::vector<uint32_t> b);`),
        structs: parseStruct(`void r4mp1327(int a, std::vector<uint32_t> b);`),
        classes: parseClass(`void r4mp1327(int a, std::vector<uint32_t> b);`),
        funcs: parseFunction(`void r4mp1327(int a, std::vector<uint32_t> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1327 生成结果为空');
      const expectSnippet0 = 'export function r4mp1327(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1327 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1327 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1328
  * @tc.name : h2dts_gen_1328
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1328', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1328(int a, std::vector<uint64_t> b);`),
        unions: parseUnion(`void r4mp1328(int a, std::vector<uint64_t> b);`),
        structs: parseStruct(`void r4mp1328(int a, std::vector<uint64_t> b);`),
        classes: parseClass(`void r4mp1328(int a, std::vector<uint64_t> b);`),
        funcs: parseFunction(`void r4mp1328(int a, std::vector<uint64_t> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1328 生成结果为空');
      const expectSnippet0 = 'export function r4mp1328(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1328 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1328 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1329
  * @tc.name : h2dts_gen_1329
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1329', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1329(int a, std::vector<int8_t> b);`),
        unions: parseUnion(`void r4mp1329(int a, std::vector<int8_t> b);`),
        structs: parseStruct(`void r4mp1329(int a, std::vector<int8_t> b);`),
        classes: parseClass(`void r4mp1329(int a, std::vector<int8_t> b);`),
        funcs: parseFunction(`void r4mp1329(int a, std::vector<int8_t> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1329 生成结果为空');
      const expectSnippet0 = 'export function r4mp1329(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1329 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1329 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1329 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1330
  * @tc.name : h2dts_gen_1330
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1330', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1330(int a, std::vector<int16_t> b);`),
        unions: parseUnion(`void r4mp1330(int a, std::vector<int16_t> b);`),
        structs: parseStruct(`void r4mp1330(int a, std::vector<int16_t> b);`),
        classes: parseClass(`void r4mp1330(int a, std::vector<int16_t> b);`),
        funcs: parseFunction(`void r4mp1330(int a, std::vector<int16_t> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1330 生成结果为空');
      const expectSnippet0 = 'export function r4mp1330(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1330 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1330 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1330 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1331
  * @tc.name : h2dts_gen_1331
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1331', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1331(int a, std::vector<int32_t> b);`),
        unions: parseUnion(`void r4mp1331(int a, std::vector<int32_t> b);`),
        structs: parseStruct(`void r4mp1331(int a, std::vector<int32_t> b);`),
        classes: parseClass(`void r4mp1331(int a, std::vector<int32_t> b);`),
        funcs: parseFunction(`void r4mp1331(int a, std::vector<int32_t> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1331 生成结果为空');
      const expectSnippet0 = 'export function r4mp1331(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1331 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1331 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1331 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1332
  * @tc.name : h2dts_gen_1332
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::vector<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_1332', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1332(int a, std::vector<int64_t> b);`),
        unions: parseUnion(`void r4mp1332(int a, std::vector<int64_t> b);`),
        structs: parseStruct(`void r4mp1332(int a, std::vector<int64_t> b);`),
        classes: parseClass(`void r4mp1332(int a, std::vector<int64_t> b);`),
        funcs: parseFunction(`void r4mp1332(int a, std::vector<int64_t> b);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_1332 生成结果为空');
      const expectSnippet0 = 'export function r4mp1332(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1332 生成结果缺少预期片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_1332 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_1332 执行异常: ${String(err)}`);
    }
  });
});
