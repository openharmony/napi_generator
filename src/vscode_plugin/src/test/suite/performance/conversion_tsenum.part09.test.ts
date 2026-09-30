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

suite('Performance_DTS2CPP_Enum_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Enum_Suite part09.');

  /**
  * @tc.number : dts2cpp_enum_0372
  * @tc.name : dts2cpp_enum_0372
  * @tc.desc : dts2cpp enum 扩充-R5-字符串 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0372', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum372.ts', `enum Status { Pending = "P", Active = "A", Done = "D" }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'Status');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 3);
      assert.strictEqual(enumItem!.members![0], 'Pending');
      assert.strictEqual(enumItem!.members![1], 'Active');
      assert.strictEqual(enumItem!.members![2], 'Done');
      assert.strictEqual(enumItem!.values!.length, 3);
      assert.strictEqual(enumItem!.values![0], '"P"');
      assert.strictEqual(enumItem!.values![1], '"A"');
      assert.strictEqual(enumItem!.values![2], '"D"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0372 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0373
  * @tc.name : dts2cpp_enum_0373
  * @tc.desc : dts2cpp enum 扩充-R5-位标志 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0373', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum373.ts', `enum Flags { None = 0, Read = 1, Write = 2, Execute = 4 }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'Flags');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 4);
      assert.strictEqual(enumItem!.members![0], 'None');
      assert.strictEqual(enumItem!.members![1], 'Read');
      assert.strictEqual(enumItem!.members![2], 'Write');
      assert.strictEqual(enumItem!.members![3], 'Execute');
      assert.strictEqual(enumItem!.values!.length, 4);
      assert.strictEqual(enumItem!.values![0], '0');
      assert.strictEqual(enumItem!.values![1], '1');
      assert.strictEqual(enumItem!.values![2], '2');
      assert.strictEqual(enumItem!.values![3], '4');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0373 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0374
  * @tc.name : dts2cpp_enum_0374
  * @tc.desc : dts2cpp enum 扩充-R5-自动递增 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0374', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum374.ts', `enum Direction { Up, Down, Left, Right }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'Direction');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 4);
      assert.strictEqual(enumItem!.members![0], 'Up');
      assert.strictEqual(enumItem!.members![1], 'Down');
      assert.strictEqual(enumItem!.members![2], 'Left');
      assert.strictEqual(enumItem!.members![3], 'Right');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0374 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0375
  * @tc.name : dts2cpp_enum_0375
  * @tc.desc : dts2cpp enum 扩充-R5-const enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0375', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum375.ts', `const enum Mode { Dev, Prod }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'Mode');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 2);
      assert.strictEqual(enumItem!.members![0], 'Dev');
      assert.strictEqual(enumItem!.members![1], 'Prod');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0375 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0375 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_enum_0376
  * @tc.name : dts2cpp_enum_0376
  * @tc.desc : dts2cpp enum 扩充-R5-HTTP 状态码 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_enum_0376', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseEnum376.ts', `enum HttpCode { OK = 200, NotFound = 404, Error = 500 }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem = parseObj.enums.find(item => item.name === 'HttpCode');
      assert.ok(enumItem);
      assert.strictEqual(enumItem!.members!.length, 3);
      assert.strictEqual(enumItem!.members![0], 'OK');
      assert.strictEqual(enumItem!.members![1], 'NotFound');
      assert.strictEqual(enumItem!.members![2], 'Error');
      assert.strictEqual(enumItem!.values!.length, 3);
      assert.strictEqual(enumItem!.values![0], '200');
      assert.strictEqual(enumItem!.values![1], '404');
      assert.strictEqual(enumItem!.values![2], '500');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0376 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0376 执行异常: ${String(err)}`);
    }
  });
});
