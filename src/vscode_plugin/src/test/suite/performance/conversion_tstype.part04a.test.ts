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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Type_Suite part04.');

  /**
  * @tc.number dts2cpp_type_0122
  * @tc.name dts2cpp_type_0122
  * @tc.desc dts2cpp type 扩充-成员矩阵：Date × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0122', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0122.ts',
            `type TpP20M2 = {
        p0?: Date;
        p1?: Date;
        p2?: Date;
        p3?: Date;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP20M2');
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
        `dts2cpp_type_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0123
  * @tc.name dts2cpp_type_0123
  * @tc.desc dts2cpp type 扩充-成员矩阵：Date × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0123', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0123.ts',
            `type TpP20M3 = {
        p0: (a: Date) => void;
        p1: (a: Date) => void;
        p2: (a: Date) => void;
        p3: (a: Date) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP20M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: Date) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: Date) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: Date) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: Date) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0124
  * @tc.name dts2cpp_type_0124
  * @tc.desc dts2cpp type 扩充-成员矩阵：RegExp × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0124', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0124.ts',
            `type TpP21M0 = {
        p0: RegExp;
        p1: RegExp;
        p2: RegExp;
        p3: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP21M0');
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
        `dts2cpp_type_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0125
  * @tc.name dts2cpp_type_0125
  * @tc.desc dts2cpp type 扩充-成员矩阵：RegExp × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0125', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0125.ts',
            `type TpP21M1 = {
        readonly p0: RegExp;
        readonly p1: RegExp;
        readonly p2: RegExp;
        readonly p3: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP21M1');
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
        `dts2cpp_type_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0126
  * @tc.name dts2cpp_type_0126
  * @tc.desc dts2cpp type 扩充-成员矩阵：RegExp × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0126', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0126.ts',
            `type TpP21M2 = {
        p0?: RegExp;
        p1?: RegExp;
        p2?: RegExp;
        p3?: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP21M2');
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
        `dts2cpp_type_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0127
  * @tc.name dts2cpp_type_0127
  * @tc.desc dts2cpp type 扩充-成员矩阵：RegExp × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0127', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0127.ts',
            `type TpP21M3 = {
        p0: (a: RegExp) => void;
        p1: (a: RegExp) => void;
        p2: (a: RegExp) => void;
        p3: (a: RegExp) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP21M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: RegExp) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: RegExp) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: RegExp) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: RegExp) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0128
  * @tc.name dts2cpp_type_0128
  * @tc.desc dts2cpp type 扩充-成员矩阵：Error × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0128', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0128.ts',
            `type TpP22M0 = {
        p0: Error;
        p1: Error;
        p2: Error;
        p3: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP22M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Error');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Error');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Error');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Error');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0129
  * @tc.name dts2cpp_type_0129
  * @tc.desc dts2cpp type 扩充-成员矩阵：Error × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0129', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0129.ts',
            `type TpP22M1 = {
        readonly p0: Error;
        readonly p1: Error;
        readonly p2: Error;
        readonly p3: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP22M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Error');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Error');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Error');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Error');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0130
  * @tc.name dts2cpp_type_0130
  * @tc.desc dts2cpp type 扩充-成员矩阵：Error × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0130', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0130.ts',
            `type TpP22M2 = {
        p0?: Error;
        p1?: Error;
        p2?: Error;
        p3?: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP22M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Error');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Error');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Error');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Error');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0131
  * @tc.name dts2cpp_type_0131
  * @tc.desc dts2cpp type 扩充-成员矩阵：Error × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0131', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0131.ts',
            `type TpP22M3 = {
        p0: (a: Error) => void;
        p1: (a: Error) => void;
        p2: (a: Error) => void;
        p3: (a: Error) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP22M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: Error) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: Error) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: Error) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: Error) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0132
  * @tc.name dts2cpp_type_0132
  * @tc.desc dts2cpp type 扩充-成员矩阵：Uint8Array × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0132', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0132.ts',
            `type TpP23M0 = {
        p0: Uint8Array;
        p1: Uint8Array;
        p2: Uint8Array;
        p3: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP23M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Uint8Array');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Uint8Array');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Uint8Array');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Uint8Array');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0133
  * @tc.name dts2cpp_type_0133
  * @tc.desc dts2cpp type 扩充-成员矩阵：Uint8Array × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0133', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0133.ts',
            `type TpP23M1 = {
        readonly p0: Uint8Array;
        readonly p1: Uint8Array;
        readonly p2: Uint8Array;
        readonly p3: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP23M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Uint8Array');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Uint8Array');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Uint8Array');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Uint8Array');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0134
  * @tc.name dts2cpp_type_0134
  * @tc.desc dts2cpp type 扩充-成员矩阵：Uint8Array × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0134', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0134.ts',
            `type TpP23M2 = {
        p0?: Uint8Array;
        p1?: Uint8Array;
        p2?: Uint8Array;
        p3?: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP23M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'Uint8Array');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'Uint8Array');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'Uint8Array');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'Uint8Array');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0135
  * @tc.name dts2cpp_type_0135
  * @tc.desc dts2cpp type 扩充-成员矩阵：Uint8Array × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0135', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0135.ts',
            `type TpP23M3 = {
        p0: (a: Uint8Array) => void;
        p1: (a: Uint8Array) => void;
        p2: (a: Uint8Array) => void;
        p3: (a: Uint8Array) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP23M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: Uint8Array) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: Uint8Array) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: Uint8Array) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: Uint8Array) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0136
  * @tc.name dts2cpp_type_0136
  * @tc.desc dts2cpp type 扩充-成员矩阵："lit" × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0136', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0136.ts',
            `type TpP24M0 = {
        p0: "lit";
        p1: "lit";
        p2: "lit";
        p3: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP24M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '"lit"');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '"lit"');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '"lit"');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '"lit"');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0137
  * @tc.name dts2cpp_type_0137
  * @tc.desc dts2cpp type 扩充-成员矩阵："lit" × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0137', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0137.ts',
            `type TpP24M1 = {
        readonly p0: "lit";
        readonly p1: "lit";
        readonly p2: "lit";
        readonly p3: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP24M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '"lit"');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '"lit"');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '"lit"');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '"lit"');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0138
  * @tc.name dts2cpp_type_0138
  * @tc.desc dts2cpp type 扩充-成员矩阵："lit" × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0138', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0138.ts',
            `type TpP24M2 = {
        p0?: "lit";
        p1?: "lit";
        p2?: "lit";
        p3?: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP24M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '"lit"');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '"lit"');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '"lit"');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '"lit"');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0139
  * @tc.name dts2cpp_type_0139
  * @tc.desc dts2cpp type 扩充-成员矩阵："lit" × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0139', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0139.ts',
            `type TpP24M3 = {
        p0: (a: "lit") => void;
        p1: (a: "lit") => void;
        p2: (a: "lit") => void;
        p3: (a: "lit") => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP24M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: "lit") => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: "lit") => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: "lit") => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: "lit") => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0140
  * @tc.name dts2cpp_type_0140
  * @tc.desc dts2cpp type 扩充-成员矩阵：42 × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0140', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0140.ts',
            `type TpP25M0 = {
        p0: 42;
        p1: 42;
        p2: 42;
        p3: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP25M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '42');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '42');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '42');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '42');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0141
  * @tc.name dts2cpp_type_0141
  * @tc.desc dts2cpp type 扩充-成员矩阵：42 × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0141', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0141.ts',
            `type TpP25M1 = {
        readonly p0: 42;
        readonly p1: 42;
        readonly p2: 42;
        readonly p3: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP25M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '42');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '42');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '42');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '42');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0142
  * @tc.name dts2cpp_type_0142
  * @tc.desc dts2cpp type 扩充-成员矩阵：42 × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0142', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0142.ts',
            `type TpP25M2 = {
        p0?: 42;
        p1?: 42;
        p2?: 42;
        p3?: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP25M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '42');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '42');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '42');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '42');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0143
  * @tc.name dts2cpp_type_0143
  * @tc.desc dts2cpp type 扩充-成员矩阵：42 × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0143', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0143.ts',
            `type TpP25M3 = {
        p0: (a: 42) => void;
        p1: (a: 42) => void;
        p2: (a: 42) => void;
        p3: (a: 42) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP25M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: 42) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: 42) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: 42) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: 42) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0144
  * @tc.name dts2cpp_type_0144
  * @tc.desc dts2cpp type 扩充-成员矩阵：true × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0144', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0144.ts',
            `type TpP26M0 = {
        p0: true;
        p1: true;
        p2: true;
        p3: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP26M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'true');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'true');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'true');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'true');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0145
  * @tc.name dts2cpp_type_0145
  * @tc.desc dts2cpp type 扩充-成员矩阵：true × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0145', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0145.ts',
            `type TpP26M1 = {
        readonly p0: true;
        readonly p1: true;
        readonly p2: true;
        readonly p3: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP26M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'true');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'true');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'true');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'true');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0146
  * @tc.name dts2cpp_type_0146
  * @tc.desc dts2cpp type 扩充-成员矩阵：true × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0146', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0146.ts',
            `type TpP26M2 = {
        p0?: true;
        p1?: true;
        p2?: true;
        p3?: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP26M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'true');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'true');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'true');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'true');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0147
  * @tc.name dts2cpp_type_0147
  * @tc.desc dts2cpp type 扩充-成员矩阵：true × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0147', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0147.ts',
            `type TpP26M3 = {
        p0: (a: true) => void;
        p1: (a: true) => void;
        p2: (a: true) => void;
        p3: (a: true) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP26M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: true) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: true) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: true) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: true) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0148
  * @tc.name dts2cpp_type_0148
  * @tc.desc dts2cpp type 扩充-成员矩阵：string | number × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0148', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0148.ts',
            `type TpP27M0 = {
        p0: string | number;
        p1: string | number;
        p2: string | number;
        p3: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP27M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string | number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string | number');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string | number');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string | number');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0149
  * @tc.name dts2cpp_type_0149
  * @tc.desc dts2cpp type 扩充-成员矩阵：string | number × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0149', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0149.ts',
            `type TpP27M1 = {
        readonly p0: string | number;
        readonly p1: string | number;
        readonly p2: string | number;
        readonly p3: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP27M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string | number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string | number');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string | number');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string | number');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0150
  * @tc.name dts2cpp_type_0150
  * @tc.desc dts2cpp type 扩充-成员矩阵：string | number × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0150', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0150.ts',
            `type TpP27M2 = {
        p0?: string | number;
        p1?: string | number;
        p2?: string | number;
        p3?: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP27M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string | number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string | number');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string | number');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string | number');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0151
  * @tc.name dts2cpp_type_0151
  * @tc.desc dts2cpp type 扩充-成员矩阵：string | number × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0151', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0151.ts',
            `type TpP27M3 = {
        p0: (a: string | number) => void;
        p1: (a: string | number) => void;
        p2: (a: string | number) => void;
        p3: (a: string | number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP27M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: string | number) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: string | number) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: string | number) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: string | number) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0152
  * @tc.name dts2cpp_type_0152
  * @tc.desc dts2cpp type 扩充-成员矩阵：string & {} × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0152', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0152.ts',
            `type TpP28M0 = {
        p0: string & {};
        p1: string & {};
        p2: string & {};
        p3: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP28M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string & {}');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string & {}');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string & {}');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string & {}');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0153
  * @tc.name dts2cpp_type_0153
  * @tc.desc dts2cpp type 扩充-成员矩阵：string & {} × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0153', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0153.ts',
            `type TpP28M1 = {
        readonly p0: string & {};
        readonly p1: string & {};
        readonly p2: string & {};
        readonly p3: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP28M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string & {}');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string & {}');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string & {}');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string & {}');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0154
  * @tc.name dts2cpp_type_0154
  * @tc.desc dts2cpp type 扩充-成员矩阵：string & {} × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0154', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0154.ts',
            `type TpP28M2 = {
        p0?: string & {};
        p1?: string & {};
        p2?: string & {};
        p3?: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP28M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'string & {}');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string & {}');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'string & {}');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, 'string & {}');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0155
  * @tc.name dts2cpp_type_0155
  * @tc.desc dts2cpp type 扩充-成员矩阵：string & {} × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0155', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0155.ts',
            `type TpP28M3 = {
        p0: (a: string & {}) => void;
        p1: (a: string & {}) => void;
        p2: (a: string & {}) => void;
        p3: (a: string & {}) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP28M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: string & {}) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: string & {}) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: string & {}) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: string & {}) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0156
  * @tc.name dts2cpp_type_0156
  * @tc.desc dts2cpp type 扩充-成员矩阵：{ id: number } × plain 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0156', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0156.ts',
            `type TpP29M0 = {
        p0: { id: number };
        p1: { id: number };
        p2: { id: number };
        p3: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP29M0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '{ id: number }');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '{ id: number }');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '{ id: number }');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '{ id: number }');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0157
  * @tc.name dts2cpp_type_0157
  * @tc.desc dts2cpp type 扩充-成员矩阵：{ id: number } × readonly 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0157', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0157.ts',
            `type TpP29M1 = {
        readonly p0: { id: number };
        readonly p1: { id: number };
        readonly p2: { id: number };
        readonly p3: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP29M1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '{ id: number }');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '{ id: number }');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '{ id: number }');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '{ id: number }');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0158
  * @tc.name dts2cpp_type_0158
  * @tc.desc dts2cpp type 扩充-成员矩阵：{ id: number } × optional 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0158', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0158.ts',
            `type TpP29M2 = {
        p0?: { id: number };
        p1?: { id: number };
        p2?: { id: number };
        p3?: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP29M2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '{ id: number }');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '{ id: number }');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '{ id: number }');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '{ id: number }');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0159
  * @tc.name dts2cpp_type_0159
  * @tc.desc dts2cpp type 扩充-成员矩阵：{ id: number } × arrow-prop 形态（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0159', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0159.ts',
            `type TpP29M3 = {
        p0: (a: { id: number }) => void;
        p1: (a: { id: number }) => void;
        p2: (a: { id: number }) => void;
        p3: (a: { id: number }) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpP29M3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 4);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, '(a: { id: number }) => void');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, '(a: { id: number }) => void');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, '(a: { id: number }) => void');
      assert.strictEqual(item_0!.members[3].name, 'p3');
      assert.strictEqual(item_0!.members[3].type, '(a: { id: number }) => void');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0160
  * @tc.name dts2cpp_type_0160
  * @tc.desc dts2cpp type 扩充-返回矩阵：方法签名返回 number（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0160', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0160.ts',
            `type TpR00N0 = {
        m0(): number;
        m1(): number;
        m2(): number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpR00N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'number');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'number');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'number');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0160 执行异常: ${String(err)}`);
    }
  });

});

