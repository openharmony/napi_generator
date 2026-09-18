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
  vscode.window.showInformationMessage('Start Performance_H2DTS_Gen_Suite part141.');

  /**
  * @tc.number : h2dts_gen_4752
  * @tc.name : h2dts_gen_4752
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multimap<std::string, int>` → `Map<string, number>`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4752', () => {
    try {
      const DECL = `void r5ts4752(std::unordered_multimap<std::string, int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4752 生成结果为空');
      const expectSnippet0 = 'export function r5ts4752(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4752 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4752 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4752 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4753
  * @tc.name : h2dts_gen_4753
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multimap<charb *, size_t>` → `Map<string, number>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4753', () => {
    try {
      const DECL = `void r5ts4753(std::unordered_multimap<charb *, size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4753 生成结果为空');
      const expectSnippet0 = 'export function r5ts4753(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4753 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4753 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4753 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4754
  * @tc.name : h2dts_gen_4754
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multimap<std::string, long long>` → `Map<string, nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4754', () => {
    try {
      const DECL = `void r5ts4754(std::unordered_multimap<std::string, long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4754 生成结果为空');
      const expectSnippet0 = 'export function r5ts4754(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4754 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4754 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4754 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4755
  * @tc.name : h2dts_gen_4755
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multimap<char *, int *>` → `Map<string, number>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4755', () => {
    try {
      const DECL = `void r5ts4755(std::unordered_multimap<char *, int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4755 生成结果为空');
      const expectSnippet0 = 'export function r5ts4755(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4755 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4755 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4755 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4756
  * @tc.name : h2dts_gen_4756
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multimap<char *, unsigned long long>` → `Map<string...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4756', () => {
    try {
      const DECL = `void r5ts4756(std::unordered_multimap<char *, unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4756 生成结果为空');
      const expectSnippet0 = 'export function r5ts4756(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4756 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4756 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4756 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4757
  * @tc.name : h2dts_gen_4757
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multimap<std::string, unsigned short>` → `Map<strin...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4757', () => {
    try {
      const DECL = `void r5ts4757(std::unordered_multimap<std::string, unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4757 生成结果为空');
      const expectSnippet0 = 'export function r5ts4757(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4757 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4757 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4757 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4758
  * @tc.name : h2dts_gen_4758
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multimap<int *, std::string>` → `Map<number, string...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4758', () => {
    try {
      const DECL = `void r5ts4758(std::unordered_multimap<int *, std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4758 生成结果为空');
      const expectSnippet0 = 'export function r5ts4758(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4758 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4758 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4758 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4759
  * @tc.name : h2dts_gen_4759
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multimap<double, char *>` → `Map<number, string>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4759', () => {
    try {
      const DECL = `void r5ts4759(std::unordered_multimap<double, char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4759 生成结果为空');
      const expectSnippet0 = 'export function r5ts4759(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4759 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4759 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4759 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4760
  * @tc.name : h2dts_gen_4760
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multimap<int *, char>` → `Map<number, string>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4760', () => {
    try {
      const DECL = `void r5ts4760(std::unordered_multimap<int *, char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4760 生成结果为空');
      const expectSnippet0 = 'export function r5ts4760(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4760 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4760 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4760 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4761
  * @tc.name : h2dts_gen_4761
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multimap<std::string, int>::iterator` → `Iterabl...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4761', () => {
    try {
      const DECL = `void r5ts4761(std::unordered_multimap<std::string, int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4761 生成结果为空');
      const expectSnippet0 = 'export function r5ts4761(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4761 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4761 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4761 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4762
  * @tc.name : h2dts_gen_4762
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multimap<charb *, size_t>::iterator` → `Iterable...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4762', () => {
    try {
      const DECL = `void r5ts4762(std::unordered_multimap<charb *, size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4762 生成结果为空');
      const expectSnippet0 = 'export function r5ts4762(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4762 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4762 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4762 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4763
  * @tc.name : h2dts_gen_4763
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multimap<std::string, long long>::iterator` → `I...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4763', () => {
    try {
      const DECL = `void r5ts4763(std::unordered_multimap<std::string, long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4763 生成结果为空');
      const expectSnippet0 = 'export function r5ts4763(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4763 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4763 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4763 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4764
  * @tc.name : h2dts_gen_4764
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multimap<char *, int *>::iterator` → `IterableIt...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4764', () => {
    try {
      const DECL = `void r5ts4764(std::unordered_multimap<char *, int *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4764 生成结果为空');
      const expectSnippet0 = 'export function r5ts4764(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4764 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4764 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4764 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4765
  * @tc.name : h2dts_gen_4765
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multimap<char *, unsigned long long>::iterator` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4765', () => {
    try {
      const DECL = `void r5ts4765(std::unordered_multimap<char *, unsigned long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4765 生成结果为空');
      const expectSnippet0 = 'export function r5ts4765(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4765 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4765 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4765 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4766
  * @tc.name : h2dts_gen_4766
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multimap<std::string, unsigned short>::iterator`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4766', () => {
    try {
      const DECL = `void r5ts4766(std::unordered_multimap<std::string, unsigned short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4766 生成结果为空');
      const expectSnippet0 = 'export function r5ts4766(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4766 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4766 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4766 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4767
  * @tc.name : h2dts_gen_4767
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multimap<int *, std::string>::iterator` → `Itera...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4767', () => {
    try {
      const DECL = `void r5ts4767(std::unordered_multimap<int *, std::string>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4767 生成结果为空');
      const expectSnippet0 = 'export function r5ts4767(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4767 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4767 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4767 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4768
  * @tc.name : h2dts_gen_4768
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multimap<double, char *>::iterator` → `IterableI...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4768', () => {
    try {
      const DECL = `void r5ts4768(std::unordered_multimap<double, char *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4768 生成结果为空');
      const expectSnippet0 = 'export function r5ts4768(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4768 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4768 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4768 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4769
  * @tc.name : h2dts_gen_4769
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multimap<int *, char>::iterator` → `IterableIter...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4769', () => {
    try {
      const DECL = `void r5ts4769(std::unordered_multimap<int *, char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4769 生成结果为空');
      const expectSnippet0 = 'export function r5ts4769(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4769 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4769 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4769 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4770
  * @tc.name : h2dts_gen_4770
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::set<std::string>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4770', () => {
    try {
      const DECL = `void r5ts4770(std::set<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4770 生成结果为空');
      const expectSnippet0 = 'export function r5ts4770(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4770 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4770 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4770 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4771
  * @tc.name : h2dts_gen_4771
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::set<char *>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4771', () => {
    try {
      const DECL = `void r5ts4771(std::set<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4771 生成结果为空');
      const expectSnippet0 = 'export function r5ts4771(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4771 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4771 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4771 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4772
  * @tc.name : h2dts_gen_4772
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::set<long long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4772', () => {
    try {
      const DECL = `void r5ts4772(std::set<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4772 生成结果为空');
      const expectSnippet0 = 'export function r5ts4772(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4772 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4772 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4772 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4773
  * @tc.name : h2dts_gen_4773
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::set<unsigned short>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4773', () => {
    try {
      const DECL = `void r5ts4773(std::set<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4773 生成结果为空');
      const expectSnippet0 = 'export function r5ts4773(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4773 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4773 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4773 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4774
  * @tc.name : h2dts_gen_4774
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::set<unsigned long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4774', () => {
    try {
      const DECL = `void r5ts4774(std::set<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4774 生成结果为空');
      const expectSnippet0 = 'export function r5ts4774(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4774 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4774 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4774 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4775
  * @tc.name : h2dts_gen_4775
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::set<unsigned long long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4775', () => {
    try {
      const DECL = `void r5ts4775(std::set<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4775 生成结果为空');
      const expectSnippet0 = 'export function r5ts4775(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4775 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4775 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4775 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4776
  * @tc.name : h2dts_gen_4776
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::set<int *>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4776', () => {
    try {
      const DECL = `void r5ts4776(std::set<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4776 生成结果为空');
      const expectSnippet0 = 'export function r5ts4776(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4776 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4776 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4776 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4777
  * @tc.name : h2dts_gen_4777
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<std::string>::iterator` → `IterableIterator<Set<string...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4777', () => {
    try {
      const DECL = `void r5ts4777(std::set<std::string>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4777 生成结果为空');
      const expectSnippet0 = 'export function r5ts4777(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4777 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4777 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4777 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4778
  * @tc.name : h2dts_gen_4778
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<char *>::iterator` → `IterableIterator<Set<string>>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4778', () => {
    try {
      const DECL = `void r5ts4778(std::set<char *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4778 生成结果为空');
      const expectSnippet0 = 'export function r5ts4778(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4778 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4778 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4778 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4779
  * @tc.name : h2dts_gen_4779
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<long long>::iterator` → `IterableIterator<Set<number>>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4779', () => {
    try {
      const DECL = `void r5ts4779(std::set<long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4779 生成结果为空');
      const expectSnippet0 = 'export function r5ts4779(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4779 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4779 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4779 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4780
  * @tc.name : h2dts_gen_4780
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<unsigned short>::iterator` → `IterableIterator<Set<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4780', () => {
    try {
      const DECL = `void r5ts4780(std::set<unsigned short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4780 生成结果为空');
      const expectSnippet0 = 'export function r5ts4780(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4780 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4780 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4780 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4781
  * @tc.name : h2dts_gen_4781
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<unsigned long>::iterator` → `IterableIterator<Set<numb...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4781', () => {
    try {
      const DECL = `void r5ts4781(std::set<unsigned long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4781 生成结果为空');
      const expectSnippet0 = 'export function r5ts4781(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4781 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4781 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4781 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4782
  * @tc.name : h2dts_gen_4782
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<unsigned long long>::iterator` → `IterableIterator<Set...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4782', () => {
    try {
      const DECL = `void r5ts4782(std::set<unsigned long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4782 生成结果为空');
      const expectSnippet0 = 'export function r5ts4782(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4782 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4782 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4782 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4783
  * @tc.name : h2dts_gen_4783
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<int *>::iterator` → `IterableIterator<Set<number>>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4783', () => {
    try {
      const DECL = `void r5ts4783(std::set<int *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4783 生成结果为空');
      const expectSnippet0 = 'export function r5ts4783(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4783 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4783 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4783 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4784
  * @tc.name : h2dts_gen_4784
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<std::string>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4784', () => {
    try {
      const DECL = `void r5ts4784(std::unordered_set<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4784 生成结果为空');
      const expectSnippet0 = 'export function r5ts4784(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4784 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4784 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4784 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4785
  * @tc.name : h2dts_gen_4785
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<char *>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4785', () => {
    try {
      const DECL = `void r5ts4785(std::unordered_set<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4785 生成结果为空');
      const expectSnippet0 = 'export function r5ts4785(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4785 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4785 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4785 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4786
  * @tc.name : h2dts_gen_4786
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<long long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('h2dts_gen_4786', () => {
    try {
      const DECL = `void r5ts4786(std::unordered_set<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4786 生成结果为空');
      const expectSnippet0 = 'export function r5ts4786(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4786 生成结果缺少期望片段');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dts_gen_4786 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dts_gen_4786 执行异常: ${String(err)}`);
    }
  });
});
