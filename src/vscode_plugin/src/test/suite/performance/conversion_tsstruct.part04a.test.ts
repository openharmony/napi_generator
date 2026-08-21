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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Struct_Suite part04.');

  /**
  * @tc.number dts2cpp_struct_0136
  * @tc.name dts2cpp_struct_0136
  * @tc.desc dts2cpp struct 扩充-成员矩阵：RegExp × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0136', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0136.ts',
            `interface IfP21M3 {
        p0?: RegExp;
        p1?: RegExp;
        p2?: RegExp;
        p3?: RegExp;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP21M3');
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
        `dts2cpp_struct_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0137
  * @tc.name dts2cpp_struct_0137
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Error × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0137', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0137.ts',
            `interface IfP22M0 {
        p0: Error;
        p1: Error;
        p2: Error;
        p3: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP22M0');
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
        `dts2cpp_struct_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0138
  * @tc.name dts2cpp_struct_0138
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Error × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0138', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0138.ts',
            `interface IfP22M1 {
        public p0: Error;
        public p1: Error;
        public p2: Error;
        public p3: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP22M1');
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
        `dts2cpp_struct_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0139
  * @tc.name dts2cpp_struct_0139
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Error × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0139', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0139.ts',
            `interface IfP22M2 {
        readonly p0: Error;
        readonly p1: Error;
        readonly p2: Error;
        readonly p3: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP22M2');
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
        `dts2cpp_struct_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0140
  * @tc.name dts2cpp_struct_0140
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Error × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0140', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0140.ts',
            `interface IfP22M3 {
        p0?: Error;
        p1?: Error;
        p2?: Error;
        p3?: Error;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP22M3');
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
        `dts2cpp_struct_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0141
  * @tc.name dts2cpp_struct_0141
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Uint8Array × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0141', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0141.ts',
            `interface IfP23M0 {
        p0: Uint8Array;
        p1: Uint8Array;
        p2: Uint8Array;
        p3: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP23M0');
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
        `dts2cpp_struct_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0142
  * @tc.name dts2cpp_struct_0142
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Uint8Array × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0142', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0142.ts',
            `interface IfP23M1 {
        public p0: Uint8Array;
        public p1: Uint8Array;
        public p2: Uint8Array;
        public p3: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP23M1');
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
        `dts2cpp_struct_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0143
  * @tc.name dts2cpp_struct_0143
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Uint8Array × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0143', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0143.ts',
            `interface IfP23M2 {
        readonly p0: Uint8Array;
        readonly p1: Uint8Array;
        readonly p2: Uint8Array;
        readonly p3: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP23M2');
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
        `dts2cpp_struct_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0144
  * @tc.name dts2cpp_struct_0144
  * @tc.desc dts2cpp struct 扩充-成员矩阵：Uint8Array × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0144', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0144.ts',
            `interface IfP23M3 {
        p0?: Uint8Array;
        p1?: Uint8Array;
        p2?: Uint8Array;
        p3?: Uint8Array;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP23M3');
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
        `dts2cpp_struct_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0145
  * @tc.name dts2cpp_struct_0145
  * @tc.desc dts2cpp struct 扩充-成员矩阵："lit" × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0145', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0145.ts',
            `interface IfP24M0 {
        p0: "lit";
        p1: "lit";
        p2: "lit";
        p3: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP24M0');
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
        `dts2cpp_struct_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0146
  * @tc.name dts2cpp_struct_0146
  * @tc.desc dts2cpp struct 扩充-成员矩阵："lit" × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0146', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0146.ts',
            `interface IfP24M1 {
        public p0: "lit";
        public p1: "lit";
        public p2: "lit";
        public p3: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP24M1');
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
        `dts2cpp_struct_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0147
  * @tc.name dts2cpp_struct_0147
  * @tc.desc dts2cpp struct 扩充-成员矩阵："lit" × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0147', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0147.ts',
            `interface IfP24M2 {
        readonly p0: "lit";
        readonly p1: "lit";
        readonly p2: "lit";
        readonly p3: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP24M2');
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
        `dts2cpp_struct_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0148
  * @tc.name dts2cpp_struct_0148
  * @tc.desc dts2cpp struct 扩充-成员矩阵："lit" × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0148', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0148.ts',
            `interface IfP24M3 {
        p0?: "lit";
        p1?: "lit";
        p2?: "lit";
        p3?: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP24M3');
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
        `dts2cpp_struct_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0149
  * @tc.name dts2cpp_struct_0149
  * @tc.desc dts2cpp struct 扩充-成员矩阵：42 × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0149', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0149.ts',
            `interface IfP25M0 {
        p0: 42;
        p1: 42;
        p2: 42;
        p3: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP25M0');
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
        `dts2cpp_struct_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0150
  * @tc.name dts2cpp_struct_0150
  * @tc.desc dts2cpp struct 扩充-成员矩阵：42 × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0150', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0150.ts',
            `interface IfP25M1 {
        public p0: 42;
        public p1: 42;
        public p2: 42;
        public p3: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP25M1');
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
        `dts2cpp_struct_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0150 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0151
  * @tc.name dts2cpp_struct_0151
  * @tc.desc dts2cpp struct 扩充-成员矩阵：42 × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0151', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0151.ts',
            `interface IfP25M2 {
        readonly p0: 42;
        readonly p1: 42;
        readonly p2: 42;
        readonly p3: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP25M2');
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
        `dts2cpp_struct_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0152
  * @tc.name dts2cpp_struct_0152
  * @tc.desc dts2cpp struct 扩充-成员矩阵：42 × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0152', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0152.ts',
            `interface IfP25M3 {
        p0?: 42;
        p1?: 42;
        p2?: 42;
        p3?: 42;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP25M3');
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
        `dts2cpp_struct_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0153
  * @tc.name dts2cpp_struct_0153
  * @tc.desc dts2cpp struct 扩充-成员矩阵：true × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0153', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0153.ts',
            `interface IfP26M0 {
        p0: true;
        p1: true;
        p2: true;
        p3: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP26M0');
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
        `dts2cpp_struct_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0154
  * @tc.name dts2cpp_struct_0154
  * @tc.desc dts2cpp struct 扩充-成员矩阵：true × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0154', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0154.ts',
            `interface IfP26M1 {
        public p0: true;
        public p1: true;
        public p2: true;
        public p3: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP26M1');
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
        `dts2cpp_struct_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0155
  * @tc.name dts2cpp_struct_0155
  * @tc.desc dts2cpp struct 扩充-成员矩阵：true × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0155', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0155.ts',
            `interface IfP26M2 {
        readonly p0: true;
        readonly p1: true;
        readonly p2: true;
        readonly p3: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP26M2');
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
        `dts2cpp_struct_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0156
  * @tc.name dts2cpp_struct_0156
  * @tc.desc dts2cpp struct 扩充-成员矩阵：true × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0156', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0156.ts',
            `interface IfP26M3 {
        p0?: true;
        p1?: true;
        p2?: true;
        p3?: true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP26M3');
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
        `dts2cpp_struct_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0157
  * @tc.name dts2cpp_struct_0157
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string | number × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0157', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0157.ts',
            `interface IfP27M0 {
        p0: string | number;
        p1: string | number;
        p2: string | number;
        p3: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP27M0');
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
        `dts2cpp_struct_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0158
  * @tc.name dts2cpp_struct_0158
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string | number × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0158', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0158.ts',
            `interface IfP27M1 {
        public p0: string | number;
        public p1: string | number;
        public p2: string | number;
        public p3: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP27M1');
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
        `dts2cpp_struct_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0159
  * @tc.name dts2cpp_struct_0159
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string | number × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0159', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0159.ts',
            `interface IfP27M2 {
        readonly p0: string | number;
        readonly p1: string | number;
        readonly p2: string | number;
        readonly p3: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP27M2');
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
        `dts2cpp_struct_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0160
  * @tc.name dts2cpp_struct_0160
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string | number × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0160', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0160.ts',
            `interface IfP27M3 {
        p0?: string | number;
        p1?: string | number;
        p2?: string | number;
        p3?: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP27M3');
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
        `dts2cpp_struct_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0161
  * @tc.name dts2cpp_struct_0161
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string & {} × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0161', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0161.ts',
            `interface IfP28M0 {
        p0: string & {};
        p1: string & {};
        p2: string & {};
        p3: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP28M0');
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
        `dts2cpp_struct_0161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0162
  * @tc.name dts2cpp_struct_0162
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string & {} × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0162', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0162.ts',
            `interface IfP28M1 {
        public p0: string & {};
        public p1: string & {};
        public p2: string & {};
        public p3: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP28M1');
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
        `dts2cpp_struct_0162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0163
  * @tc.name dts2cpp_struct_0163
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string & {} × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0163', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0163.ts',
            `interface IfP28M2 {
        readonly p0: string & {};
        readonly p1: string & {};
        readonly p2: string & {};
        readonly p3: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP28M2');
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
        `dts2cpp_struct_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0164
  * @tc.name dts2cpp_struct_0164
  * @tc.desc dts2cpp struct 扩充-成员矩阵：string & {} × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0164', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0164.ts',
            `interface IfP28M3 {
        p0?: string & {};
        p1?: string & {};
        p2?: string & {};
        p3?: string & {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP28M3');
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
        `dts2cpp_struct_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0165
  * @tc.name dts2cpp_struct_0165
  * @tc.desc dts2cpp struct 扩充-成员矩阵：{ id: number } × plain 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0165', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0165.ts',
            `interface IfP29M0 {
        p0: { id: number };
        p1: { id: number };
        p2: { id: number };
        p3: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP29M0');
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
        `dts2cpp_struct_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0166
  * @tc.name dts2cpp_struct_0166
  * @tc.desc dts2cpp struct 扩充-成员矩阵：{ id: number } × public 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0166', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0166.ts',
            `interface IfP29M1 {
        public p0: { id: number };
        public p1: { id: number };
        public p2: { id: number };
        public p3: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP29M1');
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
        `dts2cpp_struct_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0167
  * @tc.name dts2cpp_struct_0167
  * @tc.desc dts2cpp struct 扩充-成员矩阵：{ id: number } × readonly 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0167', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0167.ts',
            `interface IfP29M2 {
        readonly p0: { id: number };
        readonly p1: { id: number };
        readonly p2: { id: number };
        readonly p3: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP29M2');
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
        `dts2cpp_struct_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0168
  * @tc.name dts2cpp_struct_0168
  * @tc.desc dts2cpp struct 扩充-成员矩阵：{ id: number } × optional 修饰（4 成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0168', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0168.ts',
            `interface IfP29M3 {
        p0?: { id: number };
        p1?: { id: number };
        p2?: { id: number };
        p3?: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfP29M3');
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
        `dts2cpp_struct_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0169
  * @tc.name dts2cpp_struct_0169
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 number（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0169', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0169.ts',
            `interface IfR00N0 {
        m0(): number;
        m1(): number;
        m2(): number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR00N0');
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
        `dts2cpp_struct_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0170
  * @tc.name dts2cpp_struct_0170
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 number（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0170', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0170.ts',
            `interface IfR00N1 {
        m0(a: number): number;
        m1(a: string): number;
        m2(a: boolean): number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR00N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'number');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'number');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'number');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0171
  * @tc.name dts2cpp_struct_0171
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 string（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0171', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0171.ts',
            `interface IfR01N0 {
        m0(): string;
        m1(): string;
        m2(): string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR01N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'string');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'string');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'string');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0172
  * @tc.name dts2cpp_struct_0172
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 string（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0172', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0172.ts',
            `interface IfR01N1 {
        m0(a: number): string;
        m1(a: string): string;
        m2(a: boolean): string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR01N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'string');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'string');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'string');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0173
  * @tc.name dts2cpp_struct_0173
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean（无参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0173', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0173.ts',
            `interface IfR02N0 {
        m0(): boolean;
        m1(): boolean;
        m2(): boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR02N0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'boolean');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'boolean');
      assert.strictEqual(item_0!.functions[1].parameters.length, 0);
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'boolean');
      assert.strictEqual(item_0!.functions[2].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0174
  * @tc.name dts2cpp_struct_0174
  * @tc.desc dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0174', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0174.ts',
            `interface IfR02N1 {
        m0(a: number): boolean;
        m1(a: string): boolean;
        m2(a: boolean): boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfR02N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, 'boolean');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, 'boolean');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, 'boolean');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0174 执行异常: ${String(err)}`);
    }
  });

});

