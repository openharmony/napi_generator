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

suite('Performance_DTS2CPP_Enum_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Enum_Suite part06.');

  /**
  * @tc.number dts2cpp_enum_0346
  * @tc.name dts2cpp_enum_0346
  * @tc.desc dts2cpp enum import-自定义文件：import + enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0346', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0346.ts',
            `import { Foo } from './mod';
enum E { A, B }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'E');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0346 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0346 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0347
  * @tc.name dts2cpp_enum_0347
  * @tc.desc dts2cpp enum import-自定义文件：import + export enum 赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0347', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0347.ts',
            `import { Data } from './d';
export enum Status { Ok = 200, NotFound = 404 }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Status');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'Ok');
      assert.strictEqual(enumItem_0!.members![1], 'NotFound');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '200');
      assert.strictEqual(enumItem_0!.values![1], '404');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0347 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0347 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0348
  * @tc.name dts2cpp_enum_0348
  * @tc.desc dts2cpp enum namespace-变量+枚举：namespace 内变量 + enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0348', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0348.ts',
            `namespace ns {
  const flag = true;
  enum Inner { A, B, C }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Inner');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0348 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0348 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0349
  * @tc.name dts2cpp_enum_0349
  * @tc.desc dts2cpp enum namespace-变量+枚举：export namespace 内变量 + enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0349', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0349.ts',
            `export namespace api {
  const version = "2.0";
  enum Level { Low = 1, Mid = 2, High = 3 }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Level');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'Low');
      assert.strictEqual(enumItem_0!.members![1], 'Mid');
      assert.strictEqual(enumItem_0!.members![2], 'High');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.strictEqual(enumItem_0!.values![2], '3');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0349 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0349 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0350
  * @tc.name dts2cpp_enum_0350
  * @tc.desc dts2cpp enum import-自定义文件：import + const enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0350', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0350.ts',
            `import { Foo } from './mod';
const enum ConstE { X, Y }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ConstE');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'X');
      assert.strictEqual(enumItem_0!.members![1], 'Y');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0350 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0350 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0351
  * @tc.name dts2cpp_enum_0351
  * @tc.desc dts2cpp enum namespace-变量+枚举+函数：多枚举混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0351', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0351.ts',
            `namespace ns {
  const a = 1;
  enum E1 { A }
  enum E2 { B }
  function f() {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 2);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'E1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 1);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      const enumItem_1 = parseObj.enums.find(item => item.name === 'E2');
      assert.ok(enumItem_1);
      assert.strictEqual(enumItem_1!.members!.length, 1);
      assert.strictEqual(enumItem_1!.members![0], 'B');
      assert.strictEqual(enumItem_1!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0351 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0351 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0352
  * @tc.name dts2cpp_enum_0352
  * @tc.desc dts2cpp enum import-自定义文件：枚举值引用导入枚举 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0352', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0352.ts',
            `import { Code } from './code';
enum ErrCode { OK = Code.OK, Fail = 1 }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ErrCode');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'OK');
      assert.strictEqual(enumItem_0!.members![1], 'Fail');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], 'Code.OK');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0352 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0352 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0353
  * @tc.name dts2cpp_enum_0353
  * @tc.desc dts2cpp enum namespace-变量+枚举：declare namespace 枚举 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0353', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0353.ts',
            `declare namespace ns {
  const a: number;
  enum Decl { A = 1, B = 2 }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'Decl');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0353 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0353 执行异常: ${String(err)}`);
    }
  });

});
