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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part02.');

  /**
  * @tc.number h2dts_gen_0015
  * @tc.name h2dts_gen_0015
  * @tc.desc h2dts gen：扩充-gen：返回 int → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0015', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int genT000();`),
        unions: parseUnion(`int genT000();`),
        structs: parseStruct(`int genT000();`),
        classes: parseClass(`int genT000();`),
        funcs: parseFunction(`int genT000();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0015 生成结果为空');
      assert.ok(result.includes('export function genT000(): number;'), 'h2dts_gen_0015 生成结果缺少片段 0: ' + 'export function genT000(): number;');
      assert.ok(result.includes('export function genT000Promise(): Promise<number>;'), 'h2dts_gen_0015 生成结果缺少片段 1: ' + 'export function genT000Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0016
  * @tc.name h2dts_gen_0016
  * @tc.desc h2dts gen：扩充-gen：返回 char → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0016', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char genT001();`),
        unions: parseUnion(`char genT001();`),
        structs: parseStruct(`char genT001();`),
        classes: parseClass(`char genT001();`),
        funcs: parseFunction(`char genT001();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0016 生成结果为空');
      assert.ok(result.includes('export function genT001(): string;'), 'h2dts_gen_0016 生成结果缺少片段 0: ' + 'export function genT001(): string;');
      assert.ok(result.includes('export function genT001Promise(): Promise<string>;'), 'h2dts_gen_0016 生成结果缺少片段 1: ' + 'export function genT001Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0017
  * @tc.name h2dts_gen_0017
  * @tc.desc h2dts gen：扩充-gen：返回 short → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0017', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`short genT002();`),
        unions: parseUnion(`short genT002();`),
        structs: parseStruct(`short genT002();`),
        classes: parseClass(`short genT002();`),
        funcs: parseFunction(`short genT002();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0017 生成结果为空');
      assert.ok(result.includes('export function genT002(): number;'), 'h2dts_gen_0017 生成结果缺少片段 0: ' + 'export function genT002(): number;');
      assert.ok(result.includes('export function genT002Promise(): Promise<number>;'), 'h2dts_gen_0017 生成结果缺少片段 1: ' + 'export function genT002Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0018
  * @tc.name h2dts_gen_0018
  * @tc.desc h2dts gen：扩充-gen：返回 long → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0018', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`long genT003();`),
        unions: parseUnion(`long genT003();`),
        structs: parseStruct(`long genT003();`),
        classes: parseClass(`long genT003();`),
        funcs: parseFunction(`long genT003();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0018 生成结果为空');
      assert.ok(result.includes('export function genT003(): number;'), 'h2dts_gen_0018 生成结果缺少片段 0: ' + 'export function genT003(): number;');
      assert.ok(result.includes('export function genT003Promise(): Promise<number>;'), 'h2dts_gen_0018 生成结果缺少片段 1: ' + 'export function genT003Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0019
  * @tc.name h2dts_gen_0019
  * @tc.desc h2dts gen：扩充-gen：返回 long long → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0019', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`long long genT004();`),
        unions: parseUnion(`long long genT004();`),
        structs: parseStruct(`long long genT004();`),
        classes: parseClass(`long long genT004();`),
        funcs: parseFunction(`long long genT004();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0019 生成结果为空');
      assert.ok(result.includes('export function genT004(): number;'), 'h2dts_gen_0019 生成结果缺少片段 0: ' + 'export function genT004(): number;');
      assert.ok(result.includes('export function genT004Promise(): Promise<number>;'), 'h2dts_gen_0019 生成结果缺少片段 1: ' + 'export function genT004Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0020
  * @tc.name h2dts_gen_0020
  * @tc.desc h2dts gen：扩充-gen：返回 float → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0020', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`float genT005();`),
        unions: parseUnion(`float genT005();`),
        structs: parseStruct(`float genT005();`),
        classes: parseClass(`float genT005();`),
        funcs: parseFunction(`float genT005();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0020 生成结果为空');
      assert.ok(result.includes('export function genT005(): number;'), 'h2dts_gen_0020 生成结果缺少片段 0: ' + 'export function genT005(): number;');
      assert.ok(result.includes('export function genT005Promise(): Promise<number>;'), 'h2dts_gen_0020 生成结果缺少片段 1: ' + 'export function genT005Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0021
  * @tc.name h2dts_gen_0021
  * @tc.desc h2dts gen：扩充-gen：返回 double → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0021', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`double genT006();`),
        unions: parseUnion(`double genT006();`),
        structs: parseStruct(`double genT006();`),
        classes: parseClass(`double genT006();`),
        funcs: parseFunction(`double genT006();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0021 生成结果为空');
      assert.ok(result.includes('export function genT006(): number;'), 'h2dts_gen_0021 生成结果缺少片段 0: ' + 'export function genT006(): number;');
      assert.ok(result.includes('export function genT006Promise(): Promise<number>;'), 'h2dts_gen_0021 生成结果缺少片段 1: ' + 'export function genT006Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0022
  * @tc.name h2dts_gen_0022
  * @tc.desc h2dts gen：扩充-gen：返回 bool → boolean 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0022', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`bool genT007();`),
        unions: parseUnion(`bool genT007();`),
        structs: parseStruct(`bool genT007();`),
        classes: parseClass(`bool genT007();`),
        funcs: parseFunction(`bool genT007();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0022 生成结果为空');
      assert.ok(result.includes('export function genT007(): boolean;'), 'h2dts_gen_0022 生成结果缺少片段 0: ' + 'export function genT007(): boolean;');
      assert.ok(result.includes('export function genT007Promise(): Promise<boolean>;'), 'h2dts_gen_0022 生成结果缺少片段 1: ' + 'export function genT007Promise(): Promise<boolean>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0023
  * @tc.name h2dts_gen_0023
  * @tc.desc h2dts gen：扩充-gen：返回 unsigned int → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0023', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`unsigned int genT008();`),
        unions: parseUnion(`unsigned int genT008();`),
        structs: parseStruct(`unsigned int genT008();`),
        classes: parseClass(`unsigned int genT008();`),
        funcs: parseFunction(`unsigned int genT008();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0023 生成结果为空');
      assert.ok(result.includes('export function genT008(): number;'), 'h2dts_gen_0023 生成结果缺少片段 0: ' + 'export function genT008(): number;');
      assert.ok(result.includes('export function genT008Promise(): Promise<number>;'), 'h2dts_gen_0023 生成结果缺少片段 1: ' + 'export function genT008Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0024
  * @tc.name h2dts_gen_0024
  * @tc.desc h2dts gen：扩充-gen：返回 unsigned char → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0024', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`unsigned char genT009();`),
        unions: parseUnion(`unsigned char genT009();`),
        structs: parseStruct(`unsigned char genT009();`),
        classes: parseClass(`unsigned char genT009();`),
        funcs: parseFunction(`unsigned char genT009();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0024 生成结果为空');
      assert.ok(result.includes('export function genT009(): string;'), 'h2dts_gen_0024 生成结果缺少片段 0: ' + 'export function genT009(): string;');
      assert.ok(result.includes('export function genT009Promise(): Promise<string>;'), 'h2dts_gen_0024 生成结果缺少片段 1: ' + 'export function genT009Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0025
  * @tc.name h2dts_gen_0025
  * @tc.desc h2dts gen：扩充-gen：返回 unsigned short → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0025', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`unsigned short genT010();`),
        unions: parseUnion(`unsigned short genT010();`),
        structs: parseStruct(`unsigned short genT010();`),
        classes: parseClass(`unsigned short genT010();`),
        funcs: parseFunction(`unsigned short genT010();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0025 生成结果为空');
      assert.ok(result.includes('export function genT010(): number;'), 'h2dts_gen_0025 生成结果缺少片段 0: ' + 'export function genT010(): number;');
      assert.ok(result.includes('export function genT010Promise(): Promise<number>;'), 'h2dts_gen_0025 生成结果缺少片段 1: ' + 'export function genT010Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0026
  * @tc.name h2dts_gen_0026
  * @tc.desc h2dts gen：扩充-gen：返回 unsigned long → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0026', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`unsigned long genT011();`),
        unions: parseUnion(`unsigned long genT011();`),
        structs: parseStruct(`unsigned long genT011();`),
        classes: parseClass(`unsigned long genT011();`),
        funcs: parseFunction(`unsigned long genT011();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0026 生成结果为空');
      assert.ok(result.includes('export function genT011(): number;'), 'h2dts_gen_0026 生成结果缺少片段 0: ' + 'export function genT011(): number;');
      assert.ok(result.includes('export function genT011Promise(): Promise<number>;'), 'h2dts_gen_0026 生成结果缺少片段 1: ' + 'export function genT011Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0027
  * @tc.name h2dts_gen_0027
  * @tc.desc h2dts gen：扩充-gen：返回 unsigned long long → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0027', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`unsigned long long genT012();`),
        unions: parseUnion(`unsigned long long genT012();`),
        structs: parseStruct(`unsigned long long genT012();`),
        classes: parseClass(`unsigned long long genT012();`),
        funcs: parseFunction(`unsigned long long genT012();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0027 生成结果为空');
      assert.ok(result.includes('export function genT012(): number;'), 'h2dts_gen_0027 生成结果缺少片段 0: ' + 'export function genT012(): number;');
      assert.ok(result.includes('export function genT012Promise(): Promise<number>;'), 'h2dts_gen_0027 生成结果缺少片段 1: ' + 'export function genT012Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0028
  * @tc.name h2dts_gen_0028
  * @tc.desc h2dts gen：扩充-gen：返回 signed char → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0028', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`signed char genT013();`),
        unions: parseUnion(`signed char genT013();`),
        structs: parseStruct(`signed char genT013();`),
        classes: parseClass(`signed char genT013();`),
        funcs: parseFunction(`signed char genT013();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0028 生成结果为空');
      assert.ok(result.includes('export function genT013(): string;'), 'h2dts_gen_0028 生成结果缺少片段 0: ' + 'export function genT013(): string;');
      assert.ok(result.includes('export function genT013Promise(): Promise<string>;'), 'h2dts_gen_0028 生成结果缺少片段 1: ' + 'export function genT013Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0029
  * @tc.name h2dts_gen_0029
  * @tc.desc h2dts gen：扩充-gen：返回 signed short → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0029', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`signed short genT014();`),
        unions: parseUnion(`signed short genT014();`),
        structs: parseStruct(`signed short genT014();`),
        classes: parseClass(`signed short genT014();`),
        funcs: parseFunction(`signed short genT014();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0029 生成结果为空');
      assert.ok(result.includes('export function genT014(): number;'), 'h2dts_gen_0029 生成结果缺少片段 0: ' + 'export function genT014(): number;');
      assert.ok(result.includes('export function genT014Promise(): Promise<number>;'), 'h2dts_gen_0029 生成结果缺少片段 1: ' + 'export function genT014Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0030
  * @tc.name h2dts_gen_0030
  * @tc.desc h2dts gen：扩充-gen：返回 signed long → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0030', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`signed long genT015();`),
        unions: parseUnion(`signed long genT015();`),
        structs: parseStruct(`signed long genT015();`),
        classes: parseClass(`signed long genT015();`),
        funcs: parseFunction(`signed long genT015();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0030 生成结果为空');
      assert.ok(result.includes('export function genT015(): number;'), 'h2dts_gen_0030 生成结果缺少片段 0: ' + 'export function genT015(): number;');
      assert.ok(result.includes('export function genT015Promise(): Promise<number>;'), 'h2dts_gen_0030 生成结果缺少片段 1: ' + 'export function genT015Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0031
  * @tc.name h2dts_gen_0031
  * @tc.desc h2dts gen：扩充-gen：返回 wchar_t → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0031', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`wchar_t genT016();`),
        unions: parseUnion(`wchar_t genT016();`),
        structs: parseStruct(`wchar_t genT016();`),
        classes: parseClass(`wchar_t genT016();`),
        funcs: parseFunction(`wchar_t genT016();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0031 生成结果为空');
      assert.ok(result.includes('export function genT016(): string;'), 'h2dts_gen_0031 生成结果缺少片段 0: ' + 'export function genT016(): string;');
      assert.ok(result.includes('export function genT016Promise(): Promise<string>;'), 'h2dts_gen_0031 生成结果缺少片段 1: ' + 'export function genT016Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0032
  * @tc.name h2dts_gen_0032
  * @tc.desc h2dts gen：扩充-gen：返回 char16_t → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0032', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char16_t genT017();`),
        unions: parseUnion(`char16_t genT017();`),
        structs: parseStruct(`char16_t genT017();`),
        classes: parseClass(`char16_t genT017();`),
        funcs: parseFunction(`char16_t genT017();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0032 生成结果为空');
      assert.ok(result.includes('export function genT017(): string;'), 'h2dts_gen_0032 生成结果缺少片段 0: ' + 'export function genT017(): string;');
      assert.ok(result.includes('export function genT017Promise(): Promise<string>;'), 'h2dts_gen_0032 生成结果缺少片段 1: ' + 'export function genT017Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0033
  * @tc.name h2dts_gen_0033
  * @tc.desc h2dts gen：扩充-gen：返回 char32_t → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0033', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char32_t genT018();`),
        unions: parseUnion(`char32_t genT018();`),
        structs: parseStruct(`char32_t genT018();`),
        classes: parseClass(`char32_t genT018();`),
        funcs: parseFunction(`char32_t genT018();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0033 生成结果为空');
      assert.ok(result.includes('export function genT018(): string;'), 'h2dts_gen_0033 生成结果缺少片段 0: ' + 'export function genT018(): string;');
      assert.ok(result.includes('export function genT018Promise(): Promise<string>;'), 'h2dts_gen_0033 生成结果缺少片段 1: ' + 'export function genT018Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0034
  * @tc.name h2dts_gen_0034
  * @tc.desc h2dts gen：扩充-gen：返回 size_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0034', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`size_t genT019();`),
        unions: parseUnion(`size_t genT019();`),
        structs: parseStruct(`size_t genT019();`),
        classes: parseClass(`size_t genT019();`),
        funcs: parseFunction(`size_t genT019();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0034 生成结果为空');
      assert.ok(result.includes('export function genT019(): number;'), 'h2dts_gen_0034 生成结果缺少片段 0: ' + 'export function genT019(): number;');
      assert.ok(result.includes('export function genT019Promise(): Promise<number>;'), 'h2dts_gen_0034 生成结果缺少片段 1: ' + 'export function genT019Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0035
  * @tc.name h2dts_gen_0035
  * @tc.desc h2dts gen：扩充-gen：返回 int8_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0035', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int8_t genT020();`),
        unions: parseUnion(`int8_t genT020();`),
        structs: parseStruct(`int8_t genT020();`),
        classes: parseClass(`int8_t genT020();`),
        funcs: parseFunction(`int8_t genT020();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0035 生成结果为空');
      assert.ok(result.includes('export function genT020(): number;'), 'h2dts_gen_0035 生成结果缺少片段 0: ' + 'export function genT020(): number;');
      assert.ok(result.includes('export function genT020Promise(): Promise<number>;'), 'h2dts_gen_0035 生成结果缺少片段 1: ' + 'export function genT020Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0036
  * @tc.name h2dts_gen_0036
  * @tc.desc h2dts gen：扩充-gen：返回 int16_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0036', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int16_t genT021();`),
        unions: parseUnion(`int16_t genT021();`),
        structs: parseStruct(`int16_t genT021();`),
        classes: parseClass(`int16_t genT021();`),
        funcs: parseFunction(`int16_t genT021();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0036 生成结果为空');
      assert.ok(result.includes('export function genT021(): number;'), 'h2dts_gen_0036 生成结果缺少片段 0: ' + 'export function genT021(): number;');
      assert.ok(result.includes('export function genT021Promise(): Promise<number>;'), 'h2dts_gen_0036 生成结果缺少片段 1: ' + 'export function genT021Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0037
  * @tc.name h2dts_gen_0037
  * @tc.desc h2dts gen：扩充-gen：返回 int32_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0037', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int32_t genT022();`),
        unions: parseUnion(`int32_t genT022();`),
        structs: parseStruct(`int32_t genT022();`),
        classes: parseClass(`int32_t genT022();`),
        funcs: parseFunction(`int32_t genT022();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0037 生成结果为空');
      assert.ok(result.includes('export function genT022(): number;'), 'h2dts_gen_0037 生成结果缺少片段 0: ' + 'export function genT022(): number;');
      assert.ok(result.includes('export function genT022Promise(): Promise<number>;'), 'h2dts_gen_0037 生成结果缺少片段 1: ' + 'export function genT022Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0038
  * @tc.name h2dts_gen_0038
  * @tc.desc h2dts gen：扩充-gen：返回 int64_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0038', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int64_t genT023();`),
        unions: parseUnion(`int64_t genT023();`),
        structs: parseStruct(`int64_t genT023();`),
        classes: parseClass(`int64_t genT023();`),
        funcs: parseFunction(`int64_t genT023();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0038 生成结果为空');
      assert.ok(result.includes('export function genT023(): number;'), 'h2dts_gen_0038 生成结果缺少片段 0: ' + 'export function genT023(): number;');
      assert.ok(result.includes('export function genT023Promise(): Promise<number>;'), 'h2dts_gen_0038 生成结果缺少片段 1: ' + 'export function genT023Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0039
  * @tc.name h2dts_gen_0039
  * @tc.desc h2dts gen：扩充-gen：返回 uint8_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0039', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint8_t genT024();`),
        unions: parseUnion(`uint8_t genT024();`),
        structs: parseStruct(`uint8_t genT024();`),
        classes: parseClass(`uint8_t genT024();`),
        funcs: parseFunction(`uint8_t genT024();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0039 生成结果为空');
      assert.ok(result.includes('export function genT024(): number;'), 'h2dts_gen_0039 生成结果缺少片段 0: ' + 'export function genT024(): number;');
      assert.ok(result.includes('export function genT024Promise(): Promise<number>;'), 'h2dts_gen_0039 生成结果缺少片段 1: ' + 'export function genT024Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0040
  * @tc.name h2dts_gen_0040
  * @tc.desc h2dts gen：扩充-gen：返回 uint16_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0040', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint16_t genT025();`),
        unions: parseUnion(`uint16_t genT025();`),
        structs: parseStruct(`uint16_t genT025();`),
        classes: parseClass(`uint16_t genT025();`),
        funcs: parseFunction(`uint16_t genT025();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0040 生成结果为空');
      assert.ok(result.includes('export function genT025(): number;'), 'h2dts_gen_0040 生成结果缺少片段 0: ' + 'export function genT025(): number;');
      assert.ok(result.includes('export function genT025Promise(): Promise<number>;'), 'h2dts_gen_0040 生成结果缺少片段 1: ' + 'export function genT025Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0041
  * @tc.name h2dts_gen_0041
  * @tc.desc h2dts gen：扩充-gen：返回 uint32_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0041', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint32_t genT026();`),
        unions: parseUnion(`uint32_t genT026();`),
        structs: parseStruct(`uint32_t genT026();`),
        classes: parseClass(`uint32_t genT026();`),
        funcs: parseFunction(`uint32_t genT026();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0041 生成结果为空');
      assert.ok(result.includes('export function genT026(): number;'), 'h2dts_gen_0041 生成结果缺少片段 0: ' + 'export function genT026(): number;');
      assert.ok(result.includes('export function genT026Promise(): Promise<number>;'), 'h2dts_gen_0041 生成结果缺少片段 1: ' + 'export function genT026Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0042
  * @tc.name h2dts_gen_0042
  * @tc.desc h2dts gen：扩充-gen：返回 uint64_t → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0042', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`uint64_t genT027();`),
        unions: parseUnion(`uint64_t genT027();`),
        structs: parseStruct(`uint64_t genT027();`),
        classes: parseClass(`uint64_t genT027();`),
        funcs: parseFunction(`uint64_t genT027();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0042 生成结果为空');
      assert.ok(result.includes('export function genT027(): number;'), 'h2dts_gen_0042 生成结果缺少片段 0: ' + 'export function genT027(): number;');
      assert.ok(result.includes('export function genT027Promise(): Promise<number>;'), 'h2dts_gen_0042 生成结果缺少片段 1: ' + 'export function genT027Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0043
  * @tc.name h2dts_gen_0043
  * @tc.desc h2dts gen：扩充-gen：返回 std::string → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0043', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::string genT028();`),
        unions: parseUnion(`std::string genT028();`),
        structs: parseStruct(`std::string genT028();`),
        classes: parseClass(`std::string genT028();`),
        funcs: parseFunction(`std::string genT028();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0043 生成结果为空');
      assert.ok(result.includes('export function genT028(): string;'), 'h2dts_gen_0043 生成结果缺少片段 0: ' + 'export function genT028(): string;');
      assert.ok(result.includes('export function genT028Promise(): Promise<string>;'), 'h2dts_gen_0043 生成结果缺少片段 1: ' + 'export function genT028Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0044
  * @tc.name h2dts_gen_0044
  * @tc.desc h2dts gen：扩充-gen：返回 string → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0044', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`string genT029();`),
        unions: parseUnion(`string genT029();`),
        structs: parseStruct(`string genT029();`),
        classes: parseClass(`string genT029();`),
        funcs: parseFunction(`string genT029();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0044 生成结果为空');
      assert.ok(result.includes('export function genT029(): string;'), 'h2dts_gen_0044 生成结果缺少片段 0: ' + 'export function genT029(): string;');
      assert.ok(result.includes('export function genT029Promise(): Promise<string>;'), 'h2dts_gen_0044 生成结果缺少片段 1: ' + 'export function genT029Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0045
  * @tc.name h2dts_gen_0045
  * @tc.desc h2dts gen：扩充-gen：返回 std::wstring → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0045', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::wstring genT030();`),
        unions: parseUnion(`std::wstring genT030();`),
        structs: parseStruct(`std::wstring genT030();`),
        classes: parseClass(`std::wstring genT030();`),
        funcs: parseFunction(`std::wstring genT030();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0045 生成结果为空');
      assert.ok(result.includes('export function genT030(): string;'), 'h2dts_gen_0045 生成结果缺少片段 0: ' + 'export function genT030(): string;');
      assert.ok(result.includes('export function genT030Promise(): Promise<string>;'), 'h2dts_gen_0045 生成结果缺少片段 1: ' + 'export function genT030Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0046
  * @tc.name h2dts_gen_0046
  * @tc.desc h2dts gen：扩充-gen：返回 long double → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0046', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`long double genT031();`),
        unions: parseUnion(`long double genT031();`),
        structs: parseStruct(`long double genT031();`),
        classes: parseClass(`long double genT031();`),
        funcs: parseFunction(`long double genT031();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0046 生成结果为空');
      assert.ok(result.includes('export function genT031(): number;'), 'h2dts_gen_0046 生成结果缺少片段 0: ' + 'export function genT031(): number;');
      assert.ok(result.includes('export function genT031Promise(): Promise<number>;'), 'h2dts_gen_0046 生成结果缺少片段 1: ' + 'export function genT031Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0047
  * @tc.name h2dts_gen_0047
  * @tc.desc h2dts gen：扩充-gen：返回 void → void 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0047', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genT032();`),
        unions: parseUnion(`void genT032();`),
        structs: parseStruct(`void genT032();`),
        classes: parseClass(`void genT032();`),
        funcs: parseFunction(`void genT032();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0047 生成结果为空');
      assert.ok(result.includes('export function genT032(): void;'), 'h2dts_gen_0047 生成结果缺少片段 0: ' + 'export function genT032(): void;');
      assert.ok(result.includes('export function genT032Promise(): Promise<void>;'), 'h2dts_gen_0047 生成结果缺少片段 1: ' + 'export function genT032Promise(): Promise<void>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0048
  * @tc.name h2dts_gen_0048
  * @tc.desc h2dts gen：扩充-gen：返回 std::vector<int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0048', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int> genT033();`),
        unions: parseUnion(`std::vector<int> genT033();`),
        structs: parseStruct(`std::vector<int> genT033();`),
        classes: parseClass(`std::vector<int> genT033();`),
        funcs: parseFunction(`std::vector<int> genT033();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0048 生成结果为空');
      assert.ok(result.includes('export function genT033(): Array<number>;'), 'h2dts_gen_0048 生成结果缺少片段 0: ' + 'export function genT033(): Array<number>;');
      assert.ok(result.includes('export function genT033Promise(): Promise<Array<number>>;'), 'h2dts_gen_0048 生成结果缺少片段 1: ' + 'export function genT033Promise(): Promise<Array<number>>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0049
  * @tc.name h2dts_gen_0049
  * @tc.desc h2dts gen：扩充-gen：返回 std::vector<std::string> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0049', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<std::string> genT034();`),
        unions: parseUnion(`std::vector<std::string> genT034();`),
        structs: parseStruct(`std::vector<std::string> genT034();`),
        classes: parseClass(`std::vector<std::string> genT034();`),
        funcs: parseFunction(`std::vector<std::string> genT034();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0049 生成结果为空');
      assert.ok(result.includes('export function genT034(): Array<string>;'), 'h2dts_gen_0049 生成结果缺少片段 0: ' + 'export function genT034(): Array<string>;');
      assert.ok(result.includes('export function genT034Promise(): Promise<Array<string>>;'), 'h2dts_gen_0049 生成结果缺少片段 1: ' + 'export function genT034Promise(): Promise<Array<string>>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0050
  * @tc.name h2dts_gen_0050
  * @tc.desc h2dts gen：扩充-gen：返回 std::map<std::string,int> → Map<string, number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0050', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::map<std::string,int> genT035();`),
        unions: parseUnion(`std::map<std::string,int> genT035();`),
        structs: parseStruct(`std::map<std::string,int> genT035();`),
        classes: parseClass(`std::map<std::string,int> genT035();`),
        funcs: parseFunction(`std::map<std::string,int> genT035();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0050 生成结果为空');
      assert.ok(result.includes('export function genT035(): Map<string, number>;'), 'h2dts_gen_0050 生成结果缺少片段 0: ' + 'export function genT035(): Map<string, number>;');
      assert.ok(result.includes('export function genT035Promise(): Promise<Map<string, number>>;'), 'h2dts_gen_0050 生成结果缺少片段 1: ' + 'export function genT035Promise(): Promise<Map<string, number>>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0051
  * @tc.name h2dts_gen_0051
  * @tc.desc h2dts gen：扩充-gen：返回 std::set<int> → Set<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0051', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::set<int> genT036();`),
        unions: parseUnion(`std::set<int> genT036();`),
        structs: parseStruct(`std::set<int> genT036();`),
        classes: parseClass(`std::set<int> genT036();`),
        funcs: parseFunction(`std::set<int> genT036();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0051 生成结果为空');
      assert.ok(result.includes('export function genT036(): Set<number>;'), 'h2dts_gen_0051 生成结果缺少片段 0: ' + 'export function genT036(): Set<number>;');
      assert.ok(result.includes('export function genT036Promise(): Promise<Set<number>>;'), 'h2dts_gen_0051 生成结果缺少片段 1: ' + 'export function genT036Promise(): Promise<Set<number>>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0052
  * @tc.name h2dts_gen_0052
  * @tc.desc h2dts gen：扩充-gen：返回 std::pair<int,int> → [number, number] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0052', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::pair<int,int> genT037();`),
        unions: parseUnion(`std::pair<int,int> genT037();`),
        structs: parseStruct(`std::pair<int,int> genT037();`),
        classes: parseClass(`std::pair<int,int> genT037();`),
        funcs: parseFunction(`std::pair<int,int> genT037();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0052 生成结果为空');
      assert.ok(result.includes('export function genT037(): [number, number];'), 'h2dts_gen_0052 生成结果缺少片段 0: ' + 'export function genT037(): [number, number];');
      assert.ok(result.includes('export function genT037Promise(): Promise<[number, number]>;'), 'h2dts_gen_0052 生成结果缺少片段 1: ' + 'export function genT037Promise(): Promise<[number, number]>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0052 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0053
  * @tc.name h2dts_gen_0053
  * @tc.desc h2dts gen：扩充-gen：返回 char* → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0053', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`char* genT038();`),
        unions: parseUnion(`char* genT038();`),
        structs: parseStruct(`char* genT038();`),
        classes: parseClass(`char* genT038();`),
        funcs: parseFunction(`char* genT038();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0053 生成结果为空');
      assert.ok(result.includes('export function genT038(): string;'), 'h2dts_gen_0053 生成结果缺少片段 0: ' + 'export function genT038(): string;');
      assert.ok(result.includes('export function genT038Promise(): Promise<string>;'), 'h2dts_gen_0053 生成结果缺少片段 1: ' + 'export function genT038Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0053 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0054
  * @tc.name h2dts_gen_0054
  * @tc.desc h2dts gen：扩充-gen：返回 int* → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0054', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int* genT039();`),
        unions: parseUnion(`int* genT039();`),
        structs: parseStruct(`int* genT039();`),
        classes: parseClass(`int* genT039();`),
        funcs: parseFunction(`int* genT039();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0054 生成结果为空');
      assert.ok(result.includes('export function genT039(): number;'), 'h2dts_gen_0054 生成结果缺少片段 0: ' + 'export function genT039(): number;');
      assert.ok(result.includes('export function genT039Promise(): Promise<number>;'), 'h2dts_gen_0054 生成结果缺少片段 1: ' + 'export function genT039Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0054 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0055
  * @tc.name h2dts_gen_0055
  * @tc.desc h2dts gen：扩充-gen：返回 double* → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0055', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`double* genT040();`),
        unions: parseUnion(`double* genT040();`),
        structs: parseStruct(`double* genT040();`),
        classes: parseClass(`double* genT040();`),
        funcs: parseFunction(`double* genT040();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0055 生成结果为空');
      assert.ok(result.includes('export function genT040(): number;'), 'h2dts_gen_0055 生成结果缺少片段 0: ' + 'export function genT040(): number;');
      assert.ok(result.includes('export function genT040Promise(): Promise<number>;'), 'h2dts_gen_0055 生成结果缺少片段 1: ' + 'export function genT040Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0055 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0056
  * @tc.name h2dts_gen_0056
  * @tc.desc h2dts gen：扩充-gen：返回 std::string* → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0056', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::string* genT041();`),
        unions: parseUnion(`std::string* genT041();`),
        structs: parseStruct(`std::string* genT041();`),
        classes: parseClass(`std::string* genT041();`),
        funcs: parseFunction(`std::string* genT041();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0056 生成结果为空');
      assert.ok(result.includes('export function genT041(): string;'), 'h2dts_gen_0056 生成结果缺少片段 0: ' + 'export function genT041(): string;');
      assert.ok(result.includes('export function genT041Promise(): Promise<string>;'), 'h2dts_gen_0056 生成结果缺少片段 1: ' + 'export function genT041Promise(): Promise<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0056 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0057
  * @tc.name h2dts_gen_0057
  * @tc.desc h2dts gen：扩充-gen：返回 void* → void 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0057', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void* genT042();`),
        unions: parseUnion(`void* genT042();`),
        structs: parseStruct(`void* genT042();`),
        classes: parseClass(`void* genT042();`),
        funcs: parseFunction(`void* genT042();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0057 生成结果为空');
      assert.ok(result.includes('export function genT042(): void;'), 'h2dts_gen_0057 生成结果缺少片段 0: ' + 'export function genT042(): void;');
      assert.ok(result.includes('export function genT042Promise(): Promise<void>;'), 'h2dts_gen_0057 生成结果缺少片段 1: ' + 'export function genT042Promise(): Promise<void>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0057 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0058
  * @tc.name h2dts_gen_0058
  * @tc.desc h2dts gen：扩充-gen：返回 int[10] → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0058', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int[10] genT043();`),
        unions: parseUnion(`int[10] genT043();`),
        structs: parseStruct(`int[10] genT043();`),
        classes: parseClass(`int[10] genT043();`),
        funcs: parseFunction(`int[10] genT043();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0058 生成结果为空');
      assert.ok(result.includes('export function genT043(): number;'), 'h2dts_gen_0058 生成结果缺少片段 0: ' + 'export function genT043(): number;');
      assert.ok(result.includes('export function genT043Promise(): Promise<number>;'), 'h2dts_gen_0058 生成结果缺少片段 1: ' + 'export function genT043Promise(): Promise<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0058 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0059
  * @tc.name h2dts_gen_0059
  * @tc.desc h2dts gen：扩充-gen：入参 int → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0059', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP000(int v);`),
        unions: parseUnion(`void genP000(int v);`),
        structs: parseStruct(`void genP000(int v);`),
        classes: parseClass(`void genP000(int v);`),
        funcs: parseFunction(`void genP000(int v);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0059 生成结果为空');
      assert.ok(result.includes('export function genP000(v: number): void;'), 'h2dts_gen_0059 生成结果缺少片段 0: ' + 'export function genP000(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0059 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0060
  * @tc.name h2dts_gen_0060
  * @tc.desc h2dts gen：扩充-gen：入参 double → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0060', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP001(double v);`),
        unions: parseUnion(`void genP001(double v);`),
        structs: parseStruct(`void genP001(double v);`),
        classes: parseClass(`void genP001(double v);`),
        funcs: parseFunction(`void genP001(double v);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0060 生成结果为空');
      assert.ok(result.includes('export function genP001(v: number): void;'), 'h2dts_gen_0060 生成结果缺少片段 0: ' + 'export function genP001(v: number): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0060 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0061
  * @tc.name h2dts_gen_0061
  * @tc.desc h2dts gen：扩充-gen：入参 std::string → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0061', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP002(std::string v);`),
        unions: parseUnion(`void genP002(std::string v);`),
        structs: parseStruct(`void genP002(std::string v);`),
        classes: parseClass(`void genP002(std::string v);`),
        funcs: parseFunction(`void genP002(std::string v);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0061 生成结果为空');
      assert.ok(result.includes('export function genP002(v: string): void;'), 'h2dts_gen_0061 生成结果缺少片段 0: ' + 'export function genP002(v: string): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0061 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0062
  * @tc.name h2dts_gen_0062
  * @tc.desc h2dts gen：扩充-gen：入参 bool → boolean 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0062', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP003(bool v);`),
        unions: parseUnion(`void genP003(bool v);`),
        structs: parseStruct(`void genP003(bool v);`),
        classes: parseClass(`void genP003(bool v);`),
        funcs: parseFunction(`void genP003(bool v);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0062 生成结果为空');
      assert.ok(result.includes('export function genP003(v: boolean): void;'), 'h2dts_gen_0062 生成结果缺少片段 0: ' + 'export function genP003(v: boolean): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0062 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0063
  * @tc.name h2dts_gen_0063
  * @tc.desc h2dts gen：扩充-gen：入参 char → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0063', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void genP004(char v);`),
        unions: parseUnion(`void genP004(char v);`),
        structs: parseStruct(`void genP004(char v);`),
        classes: parseClass(`void genP004(char v);`),
        funcs: parseFunction(`void genP004(char v);`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0063 生成结果为空');
      assert.ok(result.includes('export function genP004(v: string): void;'), 'h2dts_gen_0063 生成结果缺少片段 0: ' + 'export function genP004(v: string): void;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0063 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0063 执行异常: ${String(err)}`);
    }
  });

});
