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
  * @tc.number dts2cpp_struct_0127
  * @tc.name dts2cpp_struct_0127
  * @tc.desc dts2cpp struct 扩充-成员矩阵：(a: number) => void × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0127', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0127.ts',
            `interface IfP19M2 {
        readonly p0: (a: number) => void;
        readonly p1: (a: number) => void;
        readonly p2: (a: number) => void;
        readonly p3: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP19M2');
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
        `dts2cpp_struct_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0128
  * @tc.name dts2cpp_struct_0128
  * @tc.desc dts2cpp struct 扩充-成员矩阵：(a: number) => void × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0128', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0128.ts',
            `interface IfP19M3 {
        p0?: (a: number) => void;
        p1?: (a: number) => void;
        p2?: (a: number) => void;
        p3?: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP19M3');
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
        `dts2cpp_struct_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0129
  * @tc.name dts2cpp_struct_0129
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Date × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0129', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0129.ts',
            `interface IfP20M0 {
        p0: Date;
        p1: Date;
        p2: Date;
        p3: Date;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP20M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Date');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Date');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Date');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Date');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0130
  * @tc.name dts2cpp_struct_0130
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Date × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0130', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0130.ts',
            `interface IfP20M1 {
        public p0: Date;
        public p1: Date;
        public p2: Date;
        public p3: Date;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP20M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Date');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Date');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Date');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Date');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0131
  * @tc.name dts2cpp_struct_0131
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Date × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0131', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0131.ts',
            `interface IfP20M2 {
        readonly p0: Date;
        readonly p1: Date;
        readonly p2: Date;
        readonly p3: Date;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP20M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Date');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Date');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Date');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Date');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0132
  * @tc.name dts2cpp_struct_0132
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Date × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0132', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0132.ts',
            `interface IfP20M3 {
        p0?: Date;
        p1?: Date;
        p2?: Date;
        p3?: Date;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP20M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Date');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Date');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Date');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Date');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0133
  * @tc.name dts2cpp_struct_0133
  * @tc.desc dts2cpp struct 扩充-成员矩阵：RegExp × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0133', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0133.ts',
            `interface IfP21M0 {
        p0: RegExp;
        p1: RegExp;
        p2: RegExp;
        p3: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP21M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'RegExp');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'RegExp');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'RegExp');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'RegExp');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0134
  * @tc.name dts2cpp_struct_0134
  * @tc.desc dts2cpp struct 扩充-成员矩阵：RegExp × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0134', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0134.ts',
            `interface IfP21M1 {
        public p0: RegExp;
        public p1: RegExp;
        public p2: RegExp;
        public p3: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP21M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'RegExp');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'RegExp');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'RegExp');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'RegExp');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0135
  * @tc.name dts2cpp_struct_0135
  * @tc.desc dts2cpp struct 扩充-成员矩阵：RegExp × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0135', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0135.ts',
            `interface IfP21M2 {
        readonly p0: RegExp;
        readonly p1: RegExp;
        readonly p2: RegExp;
        readonly p3: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP21M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'RegExp');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'RegExp');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'RegExp');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'RegExp');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0135 执行异常: ${String(err)}`);
    }
  });

});

