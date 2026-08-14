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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part04.');

  /**
  * @tc.number h2dts_gen_0103
  * @tc.name h2dts_gen_0103
  * @tc.desc h2dts gen：扩充-gen 新类型：std::shared_ptr<int> → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0103', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::shared_ptr<int> genNT000();`),
        unions: parseUnion(`std::shared_ptr<int> genNT000();`),
        structs: parseStruct(`std::shared_ptr<int> genNT000();`),
        classes: parseClass(`std::shared_ptr<int> genNT000();`),
        funcs: parseFunction(`std::shared_ptr<int> genNT000();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0103 生成结果为空');
      assert.ok(result.includes('export function genNT000(): number;'), 'h2dts_gen_0103 生成结果缺少片段 0: ' + 'export function genNT000(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0104
  * @tc.name h2dts_gen_0104
  * @tc.desc h2dts gen：扩充-gen 新类型：std::shared_ptr<std::string> → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0104', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::shared_ptr<std::string> genNT001();`),
        unions: parseUnion(`std::shared_ptr<std::string> genNT001();`),
        structs: parseStruct(`std::shared_ptr<std::string> genNT001();`),
        classes: parseClass(`std::shared_ptr<std::string> genNT001();`),
        funcs: parseFunction(`std::shared_ptr<std::string> genNT001();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0104 生成结果为空');
      assert.ok(result.includes('export function genNT001(): string;'), 'h2dts_gen_0104 生成结果缺少片段 0: ' + 'export function genNT001(): string;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0105
  * @tc.name h2dts_gen_0105
  * @tc.desc h2dts gen：扩充-gen 新类型：std::unique_ptr<int> → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0105', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::unique_ptr<int> genNT002();`),
        unions: parseUnion(`std::unique_ptr<int> genNT002();`),
        structs: parseStruct(`std::unique_ptr<int> genNT002();`),
        classes: parseClass(`std::unique_ptr<int> genNT002();`),
        funcs: parseFunction(`std::unique_ptr<int> genNT002();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0105 生成结果为空');
      assert.ok(result.includes('export function genNT002(): number;'), 'h2dts_gen_0105 生成结果缺少片段 0: ' + 'export function genNT002(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0106
  * @tc.name h2dts_gen_0106
  * @tc.desc h2dts gen：扩充-gen 新类型：std::optional<int> → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0106', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::optional<int> genNT003();`),
        unions: parseUnion(`std::optional<int> genNT003();`),
        structs: parseStruct(`std::optional<int> genNT003();`),
        classes: parseClass(`std::optional<int> genNT003();`),
        funcs: parseFunction(`std::optional<int> genNT003();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0106 生成结果为空');
      assert.ok(result.includes('export function genNT003(): number;'), 'h2dts_gen_0106 生成结果缺少片段 0: ' + 'export function genNT003(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0107
  * @tc.name h2dts_gen_0107
  * @tc.desc h2dts gen：扩充-gen 新类型：std::optional<std::string> → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0107', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::optional<std::string> genNT004();`),
        unions: parseUnion(`std::optional<std::string> genNT004();`),
        structs: parseStruct(`std::optional<std::string> genNT004();`),
        classes: parseClass(`std::optional<std::string> genNT004();`),
        funcs: parseFunction(`std::optional<std::string> genNT004();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0107 生成结果为空');
      assert.ok(result.includes('export function genNT004(): string;'), 'h2dts_gen_0107 生成结果缺少片段 0: ' + 'export function genNT004(): string;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0108
  * @tc.name h2dts_gen_0108
  * @tc.desc h2dts gen：扩充-gen 新类型：std::variant<int, std::string> → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0108', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::variant<int, std::string> genNT005();`),
        unions: parseUnion(`std::variant<int, std::string> genNT005();`),
        structs: parseStruct(`std::variant<int, std::string> genNT005();`),
        classes: parseClass(`std::variant<int, std::string> genNT005();`),
        funcs: parseFunction(`std::variant<int, std::string> genNT005();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0108 生成结果为空');
      assert.ok(result.includes('export function genNT005(): string;'), 'h2dts_gen_0108 生成结果缺少片段 0: ' + 'export function genNT005(): string;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0109
  * @tc.name h2dts_gen_0109
  * @tc.desc h2dts gen：扩充-gen 新类型：std::string_view → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0109', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::string_view genNT006();`),
        unions: parseUnion(`std::string_view genNT006();`),
        structs: parseStruct(`std::string_view genNT006();`),
        classes: parseClass(`std::string_view genNT006();`),
        funcs: parseFunction(`std::string_view genNT006();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0109 生成结果为空');
      assert.ok(result.includes('export function genNT006(): string;'), 'h2dts_gen_0109 生成结果缺少片段 0: ' + 'export function genNT006(): string;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0110
  * @tc.name h2dts_gen_0110
  * @tc.desc h2dts gen：扩充-gen 新类型：std::bitset<8> → any 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0110', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::bitset<8> genNT007();`),
        unions: parseUnion(`std::bitset<8> genNT007();`),
        structs: parseStruct(`std::bitset<8> genNT007();`),
        classes: parseClass(`std::bitset<8> genNT007();`),
        funcs: parseFunction(`std::bitset<8> genNT007();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0110 生成结果为空');
      assert.ok(result.includes('export function genNT007(): any;'), 'h2dts_gen_0110 生成结果缺少片段 0: ' + 'export function genNT007(): any;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0111
  * @tc.name h2dts_gen_0111
  * @tc.desc h2dts gen：扩充-gen 新类型：std::span<int> → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0111', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::span<int> genNT008();`),
        unions: parseUnion(`std::span<int> genNT008();`),
        structs: parseStruct(`std::span<int> genNT008();`),
        classes: parseClass(`std::span<int> genNT008();`),
        funcs: parseFunction(`std::span<int> genNT008();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0111 生成结果为空');
      assert.ok(result.includes('export function genNT008(): number;'), 'h2dts_gen_0111 生成结果缺少片段 0: ' + 'export function genNT008(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0112
  * @tc.name h2dts_gen_0112
  * @tc.desc h2dts gen：扩充-gen 新类型：std::atomic<int> → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0112', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::atomic<int> genNT009();`),
        unions: parseUnion(`std::atomic<int> genNT009();`),
        structs: parseStruct(`std::atomic<int> genNT009();`),
        classes: parseClass(`std::atomic<int> genNT009();`),
        funcs: parseFunction(`std::atomic<int> genNT009();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0112 生成结果为空');
      assert.ok(result.includes('export function genNT009(): number;'), 'h2dts_gen_0112 生成结果缺少片段 0: ' + 'export function genNT009(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0113
  * @tc.name h2dts_gen_0113
  * @tc.desc h2dts gen：扩充-gen 新类型：std::basic_string<char> → string 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0113', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::basic_string<char> genNT010();`),
        unions: parseUnion(`std::basic_string<char> genNT010();`),
        structs: parseStruct(`std::basic_string<char> genNT010();`),
        classes: parseClass(`std::basic_string<char> genNT010();`),
        funcs: parseFunction(`std::basic_string<char> genNT010();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0113 生成结果为空');
      assert.ok(result.includes('export function genNT010(): string;'), 'h2dts_gen_0113 生成结果缺少片段 0: ' + 'export function genNT010(): string;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0114
  * @tc.name h2dts_gen_0114
  * @tc.desc h2dts gen：扩充-gen 新类型：std::byte → any 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0114', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::byte genNT011();`),
        unions: parseUnion(`std::byte genNT011();`),
        structs: parseStruct(`std::byte genNT011();`),
        classes: parseClass(`std::byte genNT011();`),
        funcs: parseFunction(`std::byte genNT011();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0114 生成结果为空');
      assert.ok(result.includes('export function genNT011(): any;'), 'h2dts_gen_0114 生成结果缺少片段 0: ' + 'export function genNT011(): any;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0115
  * @tc.name h2dts_gen_0115
  * @tc.desc h2dts gen：扩充-gen 新类型：std::chrono::milliseconds → Date 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0115', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::chrono::milliseconds genNT012();`),
        unions: parseUnion(`std::chrono::milliseconds genNT012();`),
        structs: parseStruct(`std::chrono::milliseconds genNT012();`),
        classes: parseClass(`std::chrono::milliseconds genNT012();`),
        funcs: parseFunction(`std::chrono::milliseconds genNT012();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0115 生成结果为空');
      assert.ok(result.includes('export function genNT012(): Date;'), 'h2dts_gen_0115 生成结果缺少片段 0: ' + 'export function genNT012(): Date;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0116
  * @tc.name h2dts_gen_0116
  * @tc.desc h2dts gen：扩充-gen 新类型：std::filesystem::path → any 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0116', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::filesystem::path genNT013();`),
        unions: parseUnion(`std::filesystem::path genNT013();`),
        structs: parseStruct(`std::filesystem::path genNT013();`),
        classes: parseClass(`std::filesystem::path genNT013();`),
        funcs: parseFunction(`std::filesystem::path genNT013();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0116 生成结果为空');
      assert.ok(result.includes('export function genNT013(): any;'), 'h2dts_gen_0116 生成结果缺少片段 0: ' + 'export function genNT013(): any;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0117
  * @tc.name h2dts_gen_0117
  * @tc.desc h2dts gen：扩充-gen 新类型：std::map<int,int> → Map<number, number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0117', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::map<int,int> genNT014();`),
        unions: parseUnion(`std::map<int,int> genNT014();`),
        structs: parseStruct(`std::map<int,int> genNT014();`),
        classes: parseClass(`std::map<int,int> genNT014();`),
        funcs: parseFunction(`std::map<int,int> genNT014();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0117 生成结果为空');
      assert.ok(result.includes('export function genNT014(): Map<number, number>;'), 'h2dts_gen_0117 生成结果缺少片段 0: ' + 'export function genNT014(): Map<number, number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0118
  * @tc.name h2dts_gen_0118
  * @tc.desc h2dts gen：扩充-gen 新类型：std::map<double,std::string> → Map<number, string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0118', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::map<double,std::string> genNT015();`),
        unions: parseUnion(`std::map<double,std::string> genNT015();`),
        structs: parseStruct(`std::map<double,std::string> genNT015();`),
        classes: parseClass(`std::map<double,std::string> genNT015();`),
        funcs: parseFunction(`std::map<double,std::string> genNT015();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0118 生成结果为空');
      assert.ok(result.includes('export function genNT015(): Map<number, string>;'), 'h2dts_gen_0118 生成结果缺少片段 0: ' + 'export function genNT015(): Map<number, string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0119
  * @tc.name h2dts_gen_0119
  * @tc.desc h2dts gen：扩充-gen 新类型：std::map<std::string,std::string> → Map<string, string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0119', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::map<std::string,std::string> genNT016();`),
        unions: parseUnion(`std::map<std::string,std::string> genNT016();`),
        structs: parseStruct(`std::map<std::string,std::string> genNT016();`),
        classes: parseClass(`std::map<std::string,std::string> genNT016();`),
        funcs: parseFunction(`std::map<std::string,std::string> genNT016();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0119 生成结果为空');
      assert.ok(result.includes('export function genNT016(): Map<string, string>;'), 'h2dts_gen_0119 生成结果缺少片段 0: ' + 'export function genNT016(): Map<string, string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0120
  * @tc.name h2dts_gen_0120
  * @tc.desc h2dts gen：扩充-gen 新类型：std::vector<char> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0120', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<char> genNT017();`),
        unions: parseUnion(`std::vector<char> genNT017();`),
        structs: parseStruct(`std::vector<char> genNT017();`),
        classes: parseClass(`std::vector<char> genNT017();`),
        funcs: parseFunction(`std::vector<char> genNT017();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0120 生成结果为空');
      assert.ok(result.includes('export function genNT017(): Array<string>;'), 'h2dts_gen_0120 生成结果缺少片段 0: ' + 'export function genNT017(): Array<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0121
  * @tc.name h2dts_gen_0121
  * @tc.desc h2dts gen：扩充-gen 新类型：std::vector<float> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0121', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<float> genNT018();`),
        unions: parseUnion(`std::vector<float> genNT018();`),
        structs: parseStruct(`std::vector<float> genNT018();`),
        classes: parseClass(`std::vector<float> genNT018();`),
        funcs: parseFunction(`std::vector<float> genNT018();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0121 生成结果为空');
      assert.ok(result.includes('export function genNT018(): Array<number>;'), 'h2dts_gen_0121 生成结果缺少片段 0: ' + 'export function genNT018(): Array<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0122
  * @tc.name h2dts_gen_0122
  * @tc.desc h2dts gen：扩充-gen 新类型：std::vector<long> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0122', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<long> genNT019();`),
        unions: parseUnion(`std::vector<long> genNT019();`),
        structs: parseStruct(`std::vector<long> genNT019();`),
        classes: parseClass(`std::vector<long> genNT019();`),
        funcs: parseFunction(`std::vector<long> genNT019();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0122 生成结果为空');
      assert.ok(result.includes('export function genNT019(): Array<number>;'), 'h2dts_gen_0122 生成结果缺少片段 0: ' + 'export function genNT019(): Array<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0123
  * @tc.name h2dts_gen_0123
  * @tc.desc h2dts gen：扩充-gen 新类型：std::vector<unsigned int> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0123', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<unsigned int> genNT020();`),
        unions: parseUnion(`std::vector<unsigned int> genNT020();`),
        structs: parseStruct(`std::vector<unsigned int> genNT020();`),
        classes: parseClass(`std::vector<unsigned int> genNT020();`),
        funcs: parseFunction(`std::vector<unsigned int> genNT020();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0123 生成结果为空');
      assert.ok(result.includes('export function genNT020(): Array<number>;'), 'h2dts_gen_0123 生成结果缺少片段 0: ' + 'export function genNT020(): Array<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0124
  * @tc.name h2dts_gen_0124
  * @tc.desc h2dts gen：扩充-gen 新类型：std::vector<std::wstring> → Array<string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0124', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<std::wstring> genNT021();`),
        unions: parseUnion(`std::vector<std::wstring> genNT021();`),
        structs: parseStruct(`std::vector<std::wstring> genNT021();`),
        classes: parseClass(`std::vector<std::wstring> genNT021();`),
        funcs: parseFunction(`std::vector<std::wstring> genNT021();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0124 生成结果为空');
      assert.ok(result.includes('export function genNT021(): Array<string>;'), 'h2dts_gen_0124 生成结果缺少片段 0: ' + 'export function genNT021(): Array<string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0125
  * @tc.name h2dts_gen_0125
  * @tc.desc h2dts gen：扩充-gen 新类型：std::vector<short> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0125', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<short> genNT022();`),
        unions: parseUnion(`std::vector<short> genNT022();`),
        structs: parseStruct(`std::vector<short> genNT022();`),
        classes: parseClass(`std::vector<short> genNT022();`),
        funcs: parseFunction(`std::vector<short> genNT022();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0125 生成结果为空');
      assert.ok(result.includes('export function genNT022(): Array<number>;'), 'h2dts_gen_0125 生成结果缺少片段 0: ' + 'export function genNT022(): Array<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0126
  * @tc.name h2dts_gen_0126
  * @tc.desc h2dts gen：扩充-gen 新类型：std::vector<int64_t> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0126', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<int64_t> genNT023();`),
        unions: parseUnion(`std::vector<int64_t> genNT023();`),
        structs: parseStruct(`std::vector<int64_t> genNT023();`),
        classes: parseClass(`std::vector<int64_t> genNT023();`),
        funcs: parseFunction(`std::vector<int64_t> genNT023();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0126 生成结果为空');
      assert.ok(result.includes('export function genNT023(): Array<number>;'), 'h2dts_gen_0126 生成结果缺少片段 0: ' + 'export function genNT023(): Array<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0127
  * @tc.name h2dts_gen_0127
  * @tc.desc h2dts gen：扩充-gen 新类型：std::pair<double,double> → [number, number] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0127', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::pair<double,double> genNT024();`),
        unions: parseUnion(`std::pair<double,double> genNT024();`),
        structs: parseStruct(`std::pair<double,double> genNT024();`),
        classes: parseClass(`std::pair<double,double> genNT024();`),
        funcs: parseFunction(`std::pair<double,double> genNT024();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0127 生成结果为空');
      assert.ok(result.includes('export function genNT024(): [number, number];'), 'h2dts_gen_0127 生成结果缺少片段 0: ' + 'export function genNT024(): [number, number];');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0128
  * @tc.name h2dts_gen_0128
  * @tc.desc h2dts gen：扩充-gen 新类型：std::tuple<int,std::string,bool> → [number, string, boolean] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0128', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::tuple<int,std::string,bool> genNT025();`),
        unions: parseUnion(`std::tuple<int,std::string,bool> genNT025();`),
        structs: parseStruct(`std::tuple<int,std::string,bool> genNT025();`),
        classes: parseClass(`std::tuple<int,std::string,bool> genNT025();`),
        funcs: parseFunction(`std::tuple<int,std::string,bool> genNT025();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0128 生成结果为空');
      assert.ok(result.includes('export function genNT025(): [number, string, boolean];'), 'h2dts_gen_0128 生成结果缺少片段 0: ' + 'export function genNT025(): [number, string, boolean];');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0129
  * @tc.name h2dts_gen_0129
  * @tc.desc h2dts gen：扩充-gen 新类型：std::tuple<double,double,double> → [number, number, number] 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0129', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::tuple<double,double,double> genNT026();`),
        unions: parseUnion(`std::tuple<double,double,double> genNT026();`),
        structs: parseStruct(`std::tuple<double,double,double> genNT026();`),
        classes: parseClass(`std::tuple<double,double,double> genNT026();`),
        funcs: parseFunction(`std::tuple<double,double,double> genNT026();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0129 生成结果为空');
      assert.ok(result.includes('export function genNT026(): [number, number, number];'), 'h2dts_gen_0129 生成结果缺少片段 0: ' + 'export function genNT026(): [number, number, number];');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0130
  * @tc.name h2dts_gen_0130
  * @tc.desc h2dts gen：扩充-gen 新类型：std::map<wchar_t,int> → Map<string, number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0130', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::map<wchar_t,int> genNT027();`),
        unions: parseUnion(`std::map<wchar_t,int> genNT027();`),
        structs: parseStruct(`std::map<wchar_t,int> genNT027();`),
        classes: parseClass(`std::map<wchar_t,int> genNT027();`),
        funcs: parseFunction(`std::map<wchar_t,int> genNT027();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0130 生成结果为空');
      assert.ok(result.includes('export function genNT027(): Map<string, number>;'), 'h2dts_gen_0130 生成结果缺少片段 0: ' + 'export function genNT027(): Map<string, number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0131
  * @tc.name h2dts_gen_0131
  * @tc.desc h2dts gen：扩充-gen 新类型：std::map<size_t,std::string> → Map<number, string> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0131', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::map<size_t,std::string> genNT028();`),
        unions: parseUnion(`std::map<size_t,std::string> genNT028();`),
        structs: parseStruct(`std::map<size_t,std::string> genNT028();`),
        classes: parseClass(`std::map<size_t,std::string> genNT028();`),
        funcs: parseFunction(`std::map<size_t,std::string> genNT028();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0131 生成结果为空');
      assert.ok(result.includes('export function genNT028(): Map<number, string>;'), 'h2dts_gen_0131 生成结果缺少片段 0: ' + 'export function genNT028(): Map<number, string>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0132
  * @tc.name h2dts_gen_0132
  * @tc.desc h2dts gen：扩充-gen 新类型：std::optional<bool> → boolean 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0132', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::optional<bool> genNT029();`),
        unions: parseUnion(`std::optional<bool> genNT029();`),
        structs: parseStruct(`std::optional<bool> genNT029();`),
        classes: parseClass(`std::optional<bool> genNT029();`),
        funcs: parseFunction(`std::optional<bool> genNT029();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0132 生成结果为空');
      assert.ok(result.includes('export function genNT029(): boolean;'), 'h2dts_gen_0132 生成结果缺少片段 0: ' + 'export function genNT029(): boolean;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0133
  * @tc.name h2dts_gen_0133
  * @tc.desc h2dts gen：扩充-gen 新类型：std::atomic<bool> → boolean 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0133', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::atomic<bool> genNT030();`),
        unions: parseUnion(`std::atomic<bool> genNT030();`),
        structs: parseStruct(`std::atomic<bool> genNT030();`),
        classes: parseClass(`std::atomic<bool> genNT030();`),
        funcs: parseFunction(`std::atomic<bool> genNT030();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0133 生成结果为空');
      assert.ok(result.includes('export function genNT030(): boolean;'), 'h2dts_gen_0133 生成结果缺少片段 0: ' + 'export function genNT030(): boolean;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0134
  * @tc.name h2dts_gen_0134
  * @tc.desc h2dts gen：扩充-gen 新类型：std::span<double> → number 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0134', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::span<double> genNT031();`),
        unions: parseUnion(`std::span<double> genNT031();`),
        structs: parseStruct(`std::span<double> genNT031();`),
        classes: parseClass(`std::span<double> genNT031();`),
        funcs: parseFunction(`std::span<double> genNT031();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0134 生成结果为空');
      assert.ok(result.includes('export function genNT031(): number;'), 'h2dts_gen_0134 生成结果缺少片段 0: ' + 'export function genNT031(): number;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0135
  * @tc.name h2dts_gen_0135
  * @tc.desc h2dts gen：扩充-gen 新类型：std::bitset<16> → any 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0135', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::bitset<16> genNT032();`),
        unions: parseUnion(`std::bitset<16> genNT032();`),
        structs: parseStruct(`std::bitset<16> genNT032();`),
        classes: parseClass(`std::bitset<16> genNT032();`),
        funcs: parseFunction(`std::bitset<16> genNT032();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0135 生成结果为空');
      assert.ok(result.includes('export function genNT032(): any;'), 'h2dts_gen_0135 生成结果缺少片段 0: ' + 'export function genNT032(): any;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0136
  * @tc.name h2dts_gen_0136
  * @tc.desc h2dts gen：扩充-gen 新类型：std::vector<size_t> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0136', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<size_t> genNT033();`),
        unions: parseUnion(`std::vector<size_t> genNT033();`),
        structs: parseStruct(`std::vector<size_t> genNT033();`),
        classes: parseClass(`std::vector<size_t> genNT033();`),
        funcs: parseFunction(`std::vector<size_t> genNT033();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0136 生成结果为空');
      assert.ok(result.includes('export function genNT033(): Array<number>;'), 'h2dts_gen_0136 生成结果缺少片段 0: ' + 'export function genNT033(): Array<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0137
  * @tc.name h2dts_gen_0137
  * @tc.desc h2dts gen：扩充-gen 新类型：std::vector<uint8_t> → Array<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0137', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::vector<uint8_t> genNT034();`),
        unions: parseUnion(`std::vector<uint8_t> genNT034();`),
        structs: parseStruct(`std::vector<uint8_t> genNT034();`),
        classes: parseClass(`std::vector<uint8_t> genNT034();`),
        funcs: parseFunction(`std::vector<uint8_t> genNT034();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0137 生成结果为空');
      assert.ok(result.includes('export function genNT034(): Array<number>;'), 'h2dts_gen_0137 生成结果缺少片段 0: ' + 'export function genNT034(): Array<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dts_gen_0138
  * @tc.name h2dts_gen_0138
  * @tc.desc h2dts gen：扩充-gen 新类型：std::set<double> → Set<number> 的生成结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dts_gen_0138', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::set<double> genNT035();`),
        unions: parseUnion(`std::set<double> genNT035();`),
        structs: parseStruct(`std::set<double> genNT035();`),
        classes: parseClass(`std::set<double> genNT035();`),
        funcs: parseFunction(`std::set<double> genNT035();`),
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
      assert.ok(result.length > 0, 'h2dts_gen_0138 生成结果为空');
      assert.ok(result.includes('export function genNT035(): Set<number>;'), 'h2dts_gen_0138 生成结果缺少片段 0: ' + 'export function genNT035(): Set<number>;');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_0138 执行异常: ${String(err)}`);
    }
  });

});
