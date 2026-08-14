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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Enum_Suite part05.');

  /**
  * @tc.number dts2cpp_enum_0324
  * @tc.name dts2cpp_enum_0324
  * @tc.desc dts2cpp enum 扩充-修饰符：export enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0324', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0324.ts',
            `export enum ModE0 {
        A = 1,
        B = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE0');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0324 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0325
  * @tc.name dts2cpp_enum_0325
  * @tc.desc dts2cpp enum 扩充-修饰符：declare enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0325', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0325.ts',
            `declare enum ModE1 {
        A = 1,
        B = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE1');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0325 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0325 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0326
  * @tc.name dts2cpp_enum_0326
  * @tc.desc dts2cpp enum 扩充-修饰符：const enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0326', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0326.ts',
            `const enum ModE2 {
        A = 1,
        B = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0326 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0327
  * @tc.name dts2cpp_enum_0327
  * @tc.desc dts2cpp enum 扩充-修饰符：export const enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0327', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0327.ts',
            `export const enum ModE3 {
        A = 1,
        B = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE3');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0327 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0328
  * @tc.name dts2cpp_enum_0328
  * @tc.desc dts2cpp enum 扩充-修饰符：declare const enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0328', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0328.ts',
            `declare const enum ModE4 {
        A = 1,
        B = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE4');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0328 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0329
  * @tc.name dts2cpp_enum_0329
  * @tc.desc dts2cpp enum 扩充-修饰符：export declare enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0329', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0329.ts',
            `export declare enum ModE5 {
        A = 1,
        B = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE5');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0329 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0329 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0330
  * @tc.name dts2cpp_enum_0330
  * @tc.desc dts2cpp enum 扩充-修饰符：export declare const enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0330', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0330.ts',
            `export declare const enum ModE6 {
        A = 1,
        B = 2
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE6');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0330 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0330 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0331
  * @tc.name dts2cpp_enum_0331
  * @tc.desc dts2cpp enum 扩充-修饰符：namespace+export enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0331', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0331.ts',
            `namespace ns1 { export enum ModE7 {
            A = 1,
            B = 2
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE7');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0331 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0331 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0332
  * @tc.name dts2cpp_enum_0332
  * @tc.desc dts2cpp enum 扩充-修饰符：namespace+declare enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0332', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0332.ts',
            `namespace ns2 { declare enum ModE8 {
            A = 1,
            B = 2
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE8');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0332 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0332 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0333
  * @tc.name dts2cpp_enum_0333
  * @tc.desc dts2cpp enum 扩充-修饰符：namespace+export const enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0333', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0333.ts',
            `namespace ns3 { export const enum ModE9 {
            A = 1,
            B = 2
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE9');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0333 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0333 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0334
  * @tc.name dts2cpp_enum_0334
  * @tc.desc dts2cpp enum 扩充-修饰符：module+export enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0334', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0334.ts',
            `module md1 { export enum ModE10 {
            A = 1,
            B = 2
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE10');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0334 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0334 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0335
  * @tc.name dts2cpp_enum_0335
  * @tc.desc dts2cpp enum 扩充-修饰符：module+declare const enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0335', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0335.ts',
            `module md2 { declare const enum ModE11 {
            A = 1,
            B = 2
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'ModE11');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0335 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0335 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0336
  * @tc.name dts2cpp_enum_0336
  * @tc.desc dts2cpp enum 扩充-边界：空 enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0336', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0336.ts',
            `enum EmptyE {};`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'EmptyE');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 0);
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0336 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0336 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0337
  * @tc.name dts2cpp_enum_0337
  * @tc.desc dts2cpp enum 扩充-边界：单成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0337', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0337.ts',
            `enum SingleE { Only };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'SingleE');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 1);
      assert.strictEqual(enumItem_0!.members![0], 'Only');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0337 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0337 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0338
  * @tc.name dts2cpp_enum_0338
  * @tc.desc dts2cpp enum 扩充-边界：单成员赋值 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0338', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0338.ts',
            `enum SingleE2 { Only = 7 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'SingleE2');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 1);
      assert.strictEqual(enumItem_0!.members![0], 'Only');
      assert.strictEqual(enumItem_0!.values!.length, 1);
      assert.strictEqual(enumItem_0!.values![0], '7');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0338 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0338 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0339
  * @tc.name dts2cpp_enum_0339
  * @tc.desc dts2cpp enum 扩充-边界：尾逗号 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0339', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0339.ts',
            `enum TrailingE { A, B, };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'TrailingE');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0339 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0339 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0340
  * @tc.name dts2cpp_enum_0340
  * @tc.desc dts2cpp enum 扩充-边界：无分号 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0340', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0340.ts',
            `enum NoSemiE { A, B }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'NoSemiE');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0340 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0340 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0341
  * @tc.name dts2cpp_enum_0341
  * @tc.desc dts2cpp enum 扩充-边界：注释成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0341', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0341.ts',
            `enum CommentE {
        A, // 甲
        B, // 乙
        C  // 丙
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'CommentE');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0341 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0341 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0342
  * @tc.name dts2cpp_enum_0342
  * @tc.desc dts2cpp enum 扩充-边界：块注释 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0342', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0342.ts',
            `enum BlockE { /* 注释 */ A, B };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'BlockE');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0342 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0342 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0343
  * @tc.name dts2cpp_enum_0343
  * @tc.desc dts2cpp enum 扩充-边界：中文成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0343', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0343.ts',
            `enum 中文枚举 {
        甲,
        乙
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === '中文枚举');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], '甲');
      assert.strictEqual(enumItem_0!.members![1], '乙');
      assert.strictEqual(enumItem_0!.values!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0343 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0343 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0344
  * @tc.name dts2cpp_enum_0344
  * @tc.desc dts2cpp enum 扩充-边界：成员引用联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0344', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0344.ts',
            `enum RefE { A = 1, B = 2, C = A | B };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'RefE');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 3);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.members![2], 'C');
      assert.strictEqual(enumItem_0!.values!.length, 3);
      assert.strictEqual(enumItem_0!.values![0], '1');
      assert.strictEqual(enumItem_0!.values![1], '2');
      assert.strictEqual(enumItem_0!.values![2], 'A | B');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0344 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0344 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_enum_0345
  * @tc.name dts2cpp_enum_0345
  * @tc.desc dts2cpp enum 扩充-边界：前向引用 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_enum_0345', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseEnum0345.ts',
            `enum FwdE { A = B, B = 1 };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.enums);
      assert.strictEqual(parseObj.enums.length, 1);
      const enumItem_0 = parseObj.enums.find(item => item.name === 'FwdE');
      assert.ok(enumItem_0);
      assert.strictEqual(enumItem_0!.members!.length, 2);
      assert.strictEqual(enumItem_0!.members![0], 'A');
      assert.strictEqual(enumItem_0!.members![1], 'B');
      assert.strictEqual(enumItem_0!.values!.length, 2);
      assert.strictEqual(enumItem_0!.values![0], 'B');
      assert.strictEqual(enumItem_0!.values![1], '1');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_enum_0345 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_enum_0345 执行异常: ${String(err)}`);
    }
  });

});

