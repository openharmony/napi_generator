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

suite('Performance_DTS2CPP_Type_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Type_Suite part03.');

  /**
  * @tc.number dts2cpp_type_0079
  * @tc.name dts2cpp_type_0079
  * @tc.desc dts2cpp type 扩充-成员矩阵：object × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0079', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0079.ts',
            `type TpP09M3 = {
        p0: (a: object) => void;
        p1: (a: object) => void;
        p2: (a: object) => void;
        p3: (a: object) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP09M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: object) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: object) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: object) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: object) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0079 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0080
  * @tc.name dts2cpp_type_0080
  * @tc.desc dts2cpp type 扩充-成员矩阵：number[] × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0080', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0080.ts',
            `type TpP10M0 = {
        p0: number[];
        p1: number[];
        p2: number[];
        p3: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP10M0');
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
        `dts2cpp_type_0080 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0081
  * @tc.name dts2cpp_type_0081
  * @tc.desc dts2cpp type 扩充-成员矩阵：number[] × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0081', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0081.ts',
            `type TpP10M1 = {
        readonly p0: number[];
        readonly p1: number[];
        readonly p2: number[];
        readonly p3: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP10M1');
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
        `dts2cpp_type_0081 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0082
  * @tc.name dts2cpp_type_0082
  * @tc.desc dts2cpp type 扩充-成员矩阵：number[] × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0082', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0082.ts',
            `type TpP10M2 = {
        p0?: number[];
        p1?: number[];
        p2?: number[];
        p3?: number[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP10M2');
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
        `dts2cpp_type_0082 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0083
  * @tc.name dts2cpp_type_0083
  * @tc.desc dts2cpp type 扩充-成员矩阵：number[] × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0083', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0083.ts',
            `type TpP10M3 = {
        p0: (a: number[]) => void;
        p1: (a: number[]) => void;
        p2: (a: number[]) => void;
        p3: (a: number[]) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP10M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: number[]) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: number[]) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: number[]) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: number[]) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0083 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0084
  * @tc.name dts2cpp_type_0084
  * @tc.desc dts2cpp type 扩充-成员矩阵：string[] × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0084', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0084.ts',
            `type TpP11M0 = {
        p0: string[];
        p1: string[];
        p2: string[];
        p3: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP11M0');
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
        `dts2cpp_type_0084 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0085
  * @tc.name dts2cpp_type_0085
  * @tc.desc dts2cpp type 扩充-成员矩阵：string[] × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0085', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0085.ts',
            `type TpP11M1 = {
        readonly p0: string[];
        readonly p1: string[];
        readonly p2: string[];
        readonly p3: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP11M1');
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
        `dts2cpp_type_0085 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0086
  * @tc.name dts2cpp_type_0086
  * @tc.desc dts2cpp type 扩充-成员矩阵：string[] × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0086', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0086.ts',
            `type TpP11M2 = {
        p0?: string[];
        p1?: string[];
        p2?: string[];
        p3?: string[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP11M2');
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
        `dts2cpp_type_0086 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0087
  * @tc.name dts2cpp_type_0087
  * @tc.desc dts2cpp type 扩充-成员矩阵：string[] × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0087', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0087.ts',
            `type TpP11M3 = {
        p0: (a: string[]) => void;
        p1: (a: string[]) => void;
        p2: (a: string[]) => void;
        p3: (a: string[]) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP11M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: string[]) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: string[]) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: string[]) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: string[]) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0087 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0088
  * @tc.name dts2cpp_type_0088
  * @tc.desc dts2cpp type 扩充-成员矩阵：boolean[] × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0088', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0088.ts',
            `type TpP12M0 = {
        p0: boolean[];
        p1: boolean[];
        p2: boolean[];
        p3: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP12M0');
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
        `dts2cpp_type_0088 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0089
  * @tc.name dts2cpp_type_0089
  * @tc.desc dts2cpp type 扩充-成员矩阵：boolean[] × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0089', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0089.ts',
            `type TpP12M1 = {
        readonly p0: boolean[];
        readonly p1: boolean[];
        readonly p2: boolean[];
        readonly p3: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP12M1');
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
        `dts2cpp_type_0089 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0090
  * @tc.name dts2cpp_type_0090
  * @tc.desc dts2cpp type 扩充-成员矩阵：boolean[] × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0090', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0090.ts',
            `type TpP12M2 = {
        p0?: boolean[];
        p1?: boolean[];
        p2?: boolean[];
        p3?: boolean[];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP12M2');
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
        `dts2cpp_type_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0091
  * @tc.name dts2cpp_type_0091
  * @tc.desc dts2cpp type 扩充-成员矩阵：boolean[] × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0091', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0091.ts',
            `type TpP12M3 = {
        p0: (a: boolean[]) => void;
        p1: (a: boolean[]) => void;
        p2: (a: boolean[]) => void;
        p3: (a: boolean[]) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP12M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: boolean[]) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: boolean[]) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: boolean[]) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: boolean[]) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0092
  * @tc.name dts2cpp_type_0092
  * @tc.desc dts2cpp type 扩充-成员矩阵：Array<number> × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0092', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0092.ts',
            `type TpP13M0 = {
        p0: Array<number>;
        p1: Array<number>;
        p2: Array<number>;
        p3: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP13M0');
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
        `dts2cpp_type_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0093
  * @tc.name dts2cpp_type_0093
  * @tc.desc dts2cpp type 扩充-成员矩阵：Array<number> × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0093', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0093.ts',
            `type TpP13M1 = {
        readonly p0: Array<number>;
        readonly p1: Array<number>;
        readonly p2: Array<number>;
        readonly p3: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP13M1');
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
        `dts2cpp_type_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0094
  * @tc.name dts2cpp_type_0094
  * @tc.desc dts2cpp type 扩充-成员矩阵：Array<number> × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0094', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0094.ts',
            `type TpP13M2 = {
        p0?: Array<number>;
        p1?: Array<number>;
        p2?: Array<number>;
        p3?: Array<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP13M2');
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
        `dts2cpp_type_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0095
  * @tc.name dts2cpp_type_0095
  * @tc.desc dts2cpp type 扩充-成员矩阵：Array<number> × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0095', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0095.ts',
            `type TpP13M3 = {
        p0: (a: Array<number>) => void;
        p1: (a: Array<number>) => void;
        p2: (a: Array<number>) => void;
        p3: (a: Array<number>) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP13M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: Array<number>) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: Array<number>) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: Array<number>) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: Array<number>) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0096
  * @tc.name dts2cpp_type_0096
  * @tc.desc dts2cpp type 扩充-成员矩阵：Map<string, number> × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0096', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0096.ts',
            `type TpP14M0 = {
        p0: Map<string, number>;
        p1: Map<string, number>;
        p2: Map<string, number>;
        p3: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP14M0');
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
        `dts2cpp_type_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0097
  * @tc.name dts2cpp_type_0097
  * @tc.desc dts2cpp type 扩充-成员矩阵：Map<string, number> × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0097', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0097.ts',
            `type TpP14M1 = {
        readonly p0: Map<string, number>;
        readonly p1: Map<string, number>;
        readonly p2: Map<string, number>;
        readonly p3: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP14M1');
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
        `dts2cpp_type_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0098
  * @tc.name dts2cpp_type_0098
  * @tc.desc dts2cpp type 扩充-成员矩阵：Map<string, number> × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0098', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0098.ts',
            `type TpP14M2 = {
        p0?: Map<string, number>;
        p1?: Map<string, number>;
        p2?: Map<string, number>;
        p3?: Map<string, number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP14M2');
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
        `dts2cpp_type_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0099
  * @tc.name dts2cpp_type_0099
  * @tc.desc dts2cpp type 扩充-成员矩阵：Map<string, number> × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0099', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0099.ts',
            `type TpP14M3 = {
        p0: (a: Map<string, number>) => void;
        p1: (a: Map<string, number>) => void;
        p2: (a: Map<string, number>) => void;
        p3: (a: Map<string, number>) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP14M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: Map<string, number>) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: Map<string, number>) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: Map<string, number>) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: Map<string, number>) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0100
  * @tc.name dts2cpp_type_0100
  * @tc.desc dts2cpp type 扩充-成员矩阵：Set<number> × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0100', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0100.ts',
            `type TpP15M0 = {
        p0: Set<number>;
        p1: Set<number>;
        p2: Set<number>;
        p3: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP15M0');
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
        `dts2cpp_type_0100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0101
  * @tc.name dts2cpp_type_0101
  * @tc.desc dts2cpp type 扩充-成员矩阵：Set<number> × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0101', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0101.ts',
            `type TpP15M1 = {
        readonly p0: Set<number>;
        readonly p1: Set<number>;
        readonly p2: Set<number>;
        readonly p3: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP15M1');
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
        `dts2cpp_type_0101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0102
  * @tc.name dts2cpp_type_0102
  * @tc.desc dts2cpp type 扩充-成员矩阵：Set<number> × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0102', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0102.ts',
            `type TpP15M2 = {
        p0?: Set<number>;
        p1?: Set<number>;
        p2?: Set<number>;
        p3?: Set<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP15M2');
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
        `dts2cpp_type_0102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0103
  * @tc.name dts2cpp_type_0103
  * @tc.desc dts2cpp type 扩充-成员矩阵：Set<number> × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0103', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0103.ts',
            `type TpP15M3 = {
        p0: (a: Set<number>) => void;
        p1: (a: Set<number>) => void;
        p2: (a: Set<number>) => void;
        p3: (a: Set<number>) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP15M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: Set<number>) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: Set<number>) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: Set<number>) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: Set<number>) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0104
  * @tc.name dts2cpp_type_0104
  * @tc.desc dts2cpp type 扩充-成员矩阵：Record<string, string> × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0104', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0104.ts',
            `type TpP16M0 = {
        p0: Record<string, string>;
        p1: Record<string, string>;
        p2: Record<string, string>;
        p3: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP16M0');
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
        `dts2cpp_type_0104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0105
  * @tc.name dts2cpp_type_0105
  * @tc.desc dts2cpp type 扩充-成员矩阵：Record<string, string> × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0105', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0105.ts',
            `type TpP16M1 = {
        readonly p0: Record<string, string>;
        readonly p1: Record<string, string>;
        readonly p2: Record<string, string>;
        readonly p3: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP16M1');
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
        `dts2cpp_type_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0106
  * @tc.name dts2cpp_type_0106
  * @tc.desc dts2cpp type 扩充-成员矩阵：Record<string, string> × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0106', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0106.ts',
            `type TpP16M2 = {
        p0?: Record<string, string>;
        p1?: Record<string, string>;
        p2?: Record<string, string>;
        p3?: Record<string, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP16M2');
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
        `dts2cpp_type_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0107
  * @tc.name dts2cpp_type_0107
  * @tc.desc dts2cpp type 扩充-成员矩阵：Record<string, string> × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0107', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0107.ts',
            `type TpP16M3 = {
        p0: (a: Record<string, string>) => void;
        p1: (a: Record<string, string>) => void;
        p2: (a: Record<string, string>) => void;
        p3: (a: Record<string, string>) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP16M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: Record<string, string>) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: Record<string, string>) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: Record<string, string>) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: Record<string, string>) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0108
  * @tc.name dts2cpp_type_0108
  * @tc.desc dts2cpp type 扩充-成员矩阵：Promise<string> × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0108', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0108.ts',
            `type TpP17M0 = {
        p0: Promise<string>;
        p1: Promise<string>;
        p2: Promise<string>;
        p3: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP17M0');
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
        `dts2cpp_type_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0109
  * @tc.name dts2cpp_type_0109
  * @tc.desc dts2cpp type 扩充-成员矩阵：Promise<string> × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0109', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0109.ts',
            `type TpP17M1 = {
        readonly p0: Promise<string>;
        readonly p1: Promise<string>;
        readonly p2: Promise<string>;
        readonly p3: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP17M1');
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
        `dts2cpp_type_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0110
  * @tc.name dts2cpp_type_0110
  * @tc.desc dts2cpp type 扩充-成员矩阵：Promise<string> × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0110', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0110.ts',
            `type TpP17M2 = {
        p0?: Promise<string>;
        p1?: Promise<string>;
        p2?: Promise<string>;
        p3?: Promise<string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP17M2');
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
        `dts2cpp_type_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0111
  * @tc.name dts2cpp_type_0111
  * @tc.desc dts2cpp type 扩充-成员矩阵：Promise<string> × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0111', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0111.ts',
            `type TpP17M3 = {
        p0: (a: Promise<string>) => void;
        p1: (a: Promise<string>) => void;
        p2: (a: Promise<string>) => void;
        p3: (a: Promise<string>) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP17M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: Promise<string>) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: Promise<string>) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: Promise<string>) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: Promise<string>) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0112
  * @tc.name dts2cpp_type_0112
  * @tc.desc dts2cpp type 扩充-成员矩阵：[string, number] × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0112', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0112.ts',
            `type TpP18M0 = {
        p0: [string, number];
        p1: [string, number];
        p2: [string, number];
        p3: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP18M0');
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
        `dts2cpp_type_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0113
  * @tc.name dts2cpp_type_0113
  * @tc.desc dts2cpp type 扩充-成员矩阵：[string, number] × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0113', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0113.ts',
            `type TpP18M1 = {
        readonly p0: [string, number];
        readonly p1: [string, number];
        readonly p2: [string, number];
        readonly p3: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP18M1');
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
        `dts2cpp_type_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0114
  * @tc.name dts2cpp_type_0114
  * @tc.desc dts2cpp type 扩充-成员矩阵：[string, number] × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0114', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0114.ts',
            `type TpP18M2 = {
        p0?: [string, number];
        p1?: [string, number];
        p2?: [string, number];
        p3?: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP18M2');
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
        `dts2cpp_type_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0115
  * @tc.name dts2cpp_type_0115
  * @tc.desc dts2cpp type 扩充-成员矩阵：[string, number] × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0115', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0115.ts',
            `type TpP18M3 = {
        p0: (a: [string, number]) => void;
        p1: (a: [string, number]) => void;
        p2: (a: [string, number]) => void;
        p3: (a: [string, number]) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP18M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: [string, number]) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: [string, number]) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: [string, number]) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: [string, number]) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0116
  * @tc.name dts2cpp_type_0116
  * @tc.desc dts2cpp type 扩充-成员矩阵：(a: number) => void × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0116', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0116.ts',
            `type TpP19M0 = {
        p0: (a: number) => void;
        p1: (a: number) => void;
        p2: (a: number) => void;
        p3: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP19M0');
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
        `dts2cpp_type_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0117
  * @tc.name dts2cpp_type_0117
  * @tc.desc dts2cpp type 扩充-成员矩阵：(a: number) => void × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0117', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0117.ts',
            `type TpP19M1 = {
        readonly p0: (a: number) => void;
        readonly p1: (a: number) => void;
        readonly p2: (a: number) => void;
        readonly p3: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP19M1');
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
        `dts2cpp_type_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0117 执行异常: ${String(err)}`);
    }
  });

});

