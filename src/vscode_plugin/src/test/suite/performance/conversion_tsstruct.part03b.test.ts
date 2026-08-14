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
import { doParseTs } from '../../../parse/parsets';
import { ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse：同一源码解析 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 解析 10 次 ≤ 6s（实测约 4.0~4.3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_DTS2CPP_Struct_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Struct_Suite part03.');

  /**
  * @tc.number dts2cpp_struct_0088
  * @tc.name dts2cpp_struct_0088
  * @tc.desc dts2cpp struct 扩充-成员矩阵：object × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0088', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0088.ts',
            `interface IfP09M3 {
        p0?: object;
        p1?: object;
        p2?: object;
        p3?: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP09M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'object');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'object');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'object');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'object');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0089
  * @tc.name dts2cpp_struct_0089
  * @tc.desc dts2cpp struct 扩充-成员矩阵：number[] × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0089', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0089.ts',
            `interface IfP10M0 {
        p0: number[];
        p1: number[];
        p2: number[];
        p3: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP10M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'number[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'number[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'number[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0090
  * @tc.name dts2cpp_struct_0090
  * @tc.desc dts2cpp struct 扩充-成员矩阵：number[] × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0090', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0090.ts',
            `interface IfP10M1 {
        public p0: number[];
        public p1: number[];
        public p2: number[];
        public p3: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP10M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'number[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'number[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'number[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0091
  * @tc.name dts2cpp_struct_0091
  * @tc.desc dts2cpp struct 扩充-成员矩阵：number[] × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0091', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0091.ts',
            `interface IfP10M2 {
        readonly p0: number[];
        readonly p1: number[];
        readonly p2: number[];
        readonly p3: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP10M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'number[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'number[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'number[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0092
  * @tc.name dts2cpp_struct_0092
  * @tc.desc dts2cpp struct 扩充-成员矩阵：number[] × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0092', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0092.ts',
            `interface IfP10M3 {
        p0?: number[];
        p1?: number[];
        p2?: number[];
        p3?: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP10M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'number[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'number[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'number[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0093
  * @tc.name dts2cpp_struct_0093
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string[] × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0093', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0093.ts',
            `interface IfP11M0 {
        p0: string[];
        p1: string[];
        p2: string[];
        p3: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP11M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0094
  * @tc.name dts2cpp_struct_0094
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string[] × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0094', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0094.ts',
            `interface IfP11M1 {
        public p0: string[];
        public p1: string[];
        public p2: string[];
        public p3: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP11M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0095
  * @tc.name dts2cpp_struct_0095
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string[] × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0095', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0095.ts',
            `interface IfP11M2 {
        readonly p0: string[];
        readonly p1: string[];
        readonly p2: string[];
        readonly p3: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP11M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0096
  * @tc.name dts2cpp_struct_0096
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string[] × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0096', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0096.ts',
            `interface IfP11M3 {
        p0?: string[];
        p1?: string[];
        p2?: string[];
        p3?: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP11M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0097
  * @tc.name dts2cpp_struct_0097
  * @tc.desc dts2cpp struct 扩充-成员矩阵：boolean[] × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0097', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0097.ts',
            `interface IfP12M0 {
        p0: boolean[];
        p1: boolean[];
        p2: boolean[];
        p3: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP12M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'boolean[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'boolean[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'boolean[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0098
  * @tc.name dts2cpp_struct_0098
  * @tc.desc dts2cpp struct 扩充-成员矩阵：boolean[] × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0098', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0098.ts',
            `interface IfP12M1 {
        public p0: boolean[];
        public p1: boolean[];
        public p2: boolean[];
        public p3: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP12M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'boolean[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'boolean[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'boolean[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0099
  * @tc.name dts2cpp_struct_0099
  * @tc.desc dts2cpp struct 扩充-成员矩阵：boolean[] × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0099', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0099.ts',
            `interface IfP12M2 {
        readonly p0: boolean[];
        readonly p1: boolean[];
        readonly p2: boolean[];
        readonly p3: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP12M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'boolean[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'boolean[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'boolean[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0100
  * @tc.name dts2cpp_struct_0100
  * @tc.desc dts2cpp struct 扩充-成员矩阵：boolean[] × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0100', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0100.ts',
            `interface IfP12M3 {
        p0?: boolean[];
        p1?: boolean[];
        p2?: boolean[];
        p3?: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP12M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'boolean[]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'boolean[]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean[]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'boolean[]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0101
  * @tc.name dts2cpp_struct_0101
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Array<number> × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0101', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0101.ts',
            `interface IfP13M0 {
        p0: Array<number>;
        p1: Array<number>;
        p2: Array<number>;
        p3: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP13M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Array<number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Array<number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Array<number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Array<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0102
  * @tc.name dts2cpp_struct_0102
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Array<number> × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0102', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0102.ts',
            `interface IfP13M1 {
        public p0: Array<number>;
        public p1: Array<number>;
        public p2: Array<number>;
        public p3: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP13M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Array<number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Array<number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Array<number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Array<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0103
  * @tc.name dts2cpp_struct_0103
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Array<number> × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0103', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0103.ts',
            `interface IfP13M2 {
        readonly p0: Array<number>;
        readonly p1: Array<number>;
        readonly p2: Array<number>;
        readonly p3: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP13M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Array<number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Array<number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Array<number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Array<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0104
  * @tc.name dts2cpp_struct_0104
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Array<number> × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0104', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0104.ts',
            `interface IfP13M3 {
        p0?: Array<number>;
        p1?: Array<number>;
        p2?: Array<number>;
        p3?: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP13M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Array<number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Array<number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Array<number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Array<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0105
  * @tc.name dts2cpp_struct_0105
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Map<string, number> × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0105', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0105.ts',
            `interface IfP14M0 {
        p0: Map<string, number>;
        p1: Map<string, number>;
        p2: Map<string, number>;
        p3: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP14M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Map<string, number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0106
  * @tc.name dts2cpp_struct_0106
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Map<string, number> × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0106', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0106.ts',
            `interface IfP14M1 {
        public p0: Map<string, number>;
        public p1: Map<string, number>;
        public p2: Map<string, number>;
        public p3: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP14M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Map<string, number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0107
  * @tc.name dts2cpp_struct_0107
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Map<string, number> × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0107', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0107.ts',
            `interface IfP14M2 {
        readonly p0: Map<string, number>;
        readonly p1: Map<string, number>;
        readonly p2: Map<string, number>;
        readonly p3: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP14M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Map<string, number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0108
  * @tc.name dts2cpp_struct_0108
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Map<string, number> × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0108', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0108.ts',
            `interface IfP14M3 {
        p0?: Map<string, number>;
        p1?: Map<string, number>;
        p2?: Map<string, number>;
        p3?: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP14M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Map<string, number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Map<string, number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0109
  * @tc.name dts2cpp_struct_0109
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Set<number> × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0109', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0109.ts',
            `interface IfP15M0 {
        p0: Set<number>;
        p1: Set<number>;
        p2: Set<number>;
        p3: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP15M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Set<number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Set<number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Set<number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Set<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0110
  * @tc.name dts2cpp_struct_0110
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Set<number> × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0110', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0110.ts',
            `interface IfP15M1 {
        public p0: Set<number>;
        public p1: Set<number>;
        public p2: Set<number>;
        public p3: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP15M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Set<number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Set<number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Set<number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Set<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0111
  * @tc.name dts2cpp_struct_0111
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Set<number> × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0111', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0111.ts',
            `interface IfP15M2 {
        readonly p0: Set<number>;
        readonly p1: Set<number>;
        readonly p2: Set<number>;
        readonly p3: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP15M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Set<number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Set<number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Set<number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Set<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0112
  * @tc.name dts2cpp_struct_0112
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Set<number> × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0112', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0112.ts',
            `interface IfP15M3 {
        p0?: Set<number>;
        p1?: Set<number>;
        p2?: Set<number>;
        p3?: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP15M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Set<number>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Set<number>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Set<number>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Set<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0113
  * @tc.name dts2cpp_struct_0113
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Record<string, string> × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0113', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0113.ts',
            `interface IfP16M0 {
        p0: Record<string, string>;
        p1: Record<string, string>;
        p2: Record<string, string>;
        p3: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP16M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Record<string, string>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0114
  * @tc.name dts2cpp_struct_0114
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Record<string, string> × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0114', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0114.ts',
            `interface IfP16M1 {
        public p0: Record<string, string>;
        public p1: Record<string, string>;
        public p2: Record<string, string>;
        public p3: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP16M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Record<string, string>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0115
  * @tc.name dts2cpp_struct_0115
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Record<string, string> × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0115', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0115.ts',
            `interface IfP16M2 {
        readonly p0: Record<string, string>;
        readonly p1: Record<string, string>;
        readonly p2: Record<string, string>;
        readonly p3: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP16M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Record<string, string>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0116
  * @tc.name dts2cpp_struct_0116
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Record<string, string> × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0116', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0116.ts',
            `interface IfP16M3 {
        p0?: Record<string, string>;
        p1?: Record<string, string>;
        p2?: Record<string, string>;
        p3?: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP16M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Record<string, string>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Record<string, string>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0117
  * @tc.name dts2cpp_struct_0117
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Promise<string> × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0117', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0117.ts',
            `interface IfP17M0 {
        p0: Promise<string>;
        p1: Promise<string>;
        p2: Promise<string>;
        p3: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP17M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Promise<string>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0118
  * @tc.name dts2cpp_struct_0118
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Promise<string> × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0118', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0118.ts',
            `interface IfP17M1 {
        public p0: Promise<string>;
        public p1: Promise<string>;
        public p2: Promise<string>;
        public p3: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP17M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Promise<string>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0119
  * @tc.name dts2cpp_struct_0119
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Promise<string> × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0119', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0119.ts',
            `interface IfP17M2 {
        readonly p0: Promise<string>;
        readonly p1: Promise<string>;
        readonly p2: Promise<string>;
        readonly p3: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP17M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Promise<string>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0120
  * @tc.name dts2cpp_struct_0120
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Promise<string> × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0120', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0120.ts',
            `interface IfP17M3 {
        p0?: Promise<string>;
        p1?: Promise<string>;
        p2?: Promise<string>;
        p3?: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP17M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Promise<string>');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Promise<string>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0121
  * @tc.name dts2cpp_struct_0121
  * @tc.desc dts2cpp struct 扩充-成员矩阵：[string, number] × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0121', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0121.ts',
            `interface IfP18M0 {
        p0: [string, number];
        p1: [string, number];
        p2: [string, number];
        p3: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP18M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '[string, number]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '[string, number]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '[string, number]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '[string, number]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0122
  * @tc.name dts2cpp_struct_0122
  * @tc.desc dts2cpp struct 扩充-成员矩阵：[string, number] × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0122', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0122.ts',
            `interface IfP18M1 {
        public p0: [string, number];
        public p1: [string, number];
        public p2: [string, number];
        public p3: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP18M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '[string, number]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '[string, number]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '[string, number]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '[string, number]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0123
  * @tc.name dts2cpp_struct_0123
  * @tc.desc dts2cpp struct 扩充-成员矩阵：[string, number] × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0123', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0123.ts',
            `interface IfP18M2 {
        readonly p0: [string, number];
        readonly p1: [string, number];
        readonly p2: [string, number];
        readonly p3: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP18M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '[string, number]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '[string, number]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '[string, number]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '[string, number]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0124
  * @tc.name dts2cpp_struct_0124
  * @tc.desc dts2cpp struct 扩充-成员矩阵：[string, number] × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0124', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0124.ts',
            `interface IfP18M3 {
        p0?: [string, number];
        p1?: [string, number];
        p2?: [string, number];
        p3?: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP18M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '[string, number]');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '[string, number]');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '[string, number]');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '[string, number]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0125
  * @tc.name dts2cpp_struct_0125
  * @tc.desc dts2cpp struct 扩充-成员矩阵：(a: number) => void × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0125', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0125.ts',
            `interface IfP19M0 {
        p0: (a: number) => void;
        p1: (a: number) => void;
        p2: (a: number) => void;
        p3: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP19M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: number) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0126
  * @tc.name dts2cpp_struct_0126
  * @tc.desc dts2cpp struct 扩充-成员矩阵：(a: number) => void × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0126', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0126.ts',
            `interface IfP19M1 {
        public p0: (a: number) => void;
        public p1: (a: number) => void;
        public p2: (a: number) => void;
        public p3: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP19M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: number) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0126 执行异常: ${String(err)}`);
    }
  });

});

