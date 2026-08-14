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
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Struct_Suite.');

  /**
  * @tc.number dts2cpp_struct_0025
  * @tc.name dts2cpp_struct_0025
  * @tc.desc dts2cpp struct 对齐 test_49：两个空 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0025', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0025.ts',
            `interface OTC1 {}
interface OTC2 {}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 2);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC1');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 0);
      const structItem_1 = parseObj.structs.find(item => item.name === 'OTC2');
      assert.ok(structItem_1);
      assert.strictEqual(structItem_1!.members.length, 0);
      assert.strictEqual(structItem_1!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0026
  * @tc.name dts2cpp_struct_0026
  * @tc.desc dts2cpp struct 对齐 test_64：单行 export interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0026', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0026.ts',
            `export interface OTC { len: number; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 1);
      assert.strictEqual(structItem_0!.members[0].name, 'len');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0027
  * @tc.name dts2cpp_struct_0027
  * @tc.desc dts2cpp struct 对齐 test_69：可选/非空断言成员与 rest 参数方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0027', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0027.ts',
            `interface OTC {
        public len?: number;
        private name!: string;
        contruct(...a: number[]): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 1);
      assert.strictEqual(structItem_0!.members[0].name, 'len');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0028
  * @tc.name dts2cpp_struct_0028
  * @tc.desc dts2cpp struct 对齐 test_70：重载方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0028', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0028.ts',
            `interface OTC {
        len(s: string): number;
        len(arr: any[]): number;
        len(x: any): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 3);
      assert.strictEqual(structItem_0!.functions[0].name, 'len');
      assert.strictEqual(structItem_0!.functions[0].returns, 'number');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[0].parameters[0].type, 'string');
      assert.strictEqual(structItem_0!.functions[1].name, 'len');
      assert.strictEqual(structItem_0!.functions[1].returns, 'number');
      assert.strictEqual(structItem_0!.functions[1].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[1].parameters[0].type, 'any[]');
      assert.strictEqual(structItem_0!.functions[2].name, 'len');
      assert.strictEqual(structItem_0!.functions[2].returns, 'void');
      assert.strictEqual(structItem_0!.functions[2].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[2].parameters[0].type, 'any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0029
  * @tc.name dts2cpp_struct_0029
  * @tc.desc dts2cpp struct 对齐 test_72：const 前缀成员与 this 参数方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0029', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0029.ts',
            `interface User {
        id: number;
        const admin: boolean;
    }
interface Animal {
        name: string;
        isAlive(this: User): boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 2);
      const structItem_0 = parseObj.structs.find(item => item.name === 'User');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 3);
      assert.strictEqual(structItem_0!.members[0].name, 'id');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.members[1].name, 'const');
      assert.strictEqual(structItem_0!.members[1].type, 'any');
      assert.strictEqual(structItem_0!.members[2].name, 'admin');
      assert.strictEqual(structItem_0!.members[2].type, 'boolean');
      assert.strictEqual(structItem_0!.functions.length, 0);
      const structItem_1 = parseObj.structs.find(item => item.name === 'Animal');
      assert.ok(structItem_1);
      assert.strictEqual(structItem_1!.members.length, 1);
      assert.strictEqual(structItem_1!.members[0].name, 'name');
      assert.strictEqual(structItem_1!.members[0].type, 'string');
      assert.strictEqual(structItem_1!.functions.length, 1);
      assert.strictEqual(structItem_1!.functions[0].name, 'isAlive');
      assert.strictEqual(structItem_1!.functions[0].returns, 'boolean');
      assert.strictEqual(structItem_1!.functions[0].parameters.length, 1);
      assert.strictEqual(structItem_1!.functions[0].parameters[0].type, 'User');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0030
  * @tc.name dts2cpp_struct_0030
  * @tc.desc dts2cpp struct 扩充：interface 继承链（Pingable/Sonar 均计入 structs） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0030', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0030.ts',
            `interface Pingable {
        ping(): void;
    }
interface Sonar extends Pingable {
        ping(): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 2);
      const structItem_0 = parseObj.structs.find(item => item.name === 'Pingable');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 1);
      assert.strictEqual(structItem_0!.functions[0].name, 'ping');
      assert.strictEqual(structItem_0!.functions[0].returns, 'void');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 0);
      const structItem_1 = parseObj.structs.find(item => item.name === 'Sonar');
      assert.ok(structItem_1);
      assert.strictEqual(structItem_1!.members.length, 0);
      assert.strictEqual(structItem_1!.functions.length, 1);
      assert.strictEqual(structItem_1!.functions[0].name, 'ping');
      assert.strictEqual(structItem_1!.functions[0].returns, 'void');
      assert.strictEqual(structItem_1!.functions[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0031
  * @tc.name dts2cpp_struct_0031
  * @tc.desc dts2cpp struct 扩充：20 成员全基本类型/容器/元组矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0031', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0031.ts',
            `interface OTC {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: void;
        p6: never;
        p7: null;
        p8: undefined;
        p9: symbol;
        p10: bigint;
        p11: object;
        p12: number[];
        p13: string[][];
        p14: Array<boolean>;
        p15: Map<string, number>;
        p16: Set<number>;
        p17: Record<string, string>;
        p18: Promise<string>;
        p19: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 20);
      assert.strictEqual(structItem_0!.members[0].name, 'p0');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.members[1].name, 'p1');
      assert.strictEqual(structItem_0!.members[1].type, 'string');
      assert.strictEqual(structItem_0!.members[2].name, 'p2');
      assert.strictEqual(structItem_0!.members[2].type, 'boolean');
      assert.strictEqual(structItem_0!.members[3].name, 'p3');
      assert.strictEqual(structItem_0!.members[3].type, 'any');
      assert.strictEqual(structItem_0!.members[4].name, 'p4');
      assert.strictEqual(structItem_0!.members[4].type, 'unknown');
      assert.strictEqual(structItem_0!.members[5].name, 'p5');
      assert.strictEqual(structItem_0!.members[5].type, 'void');
      assert.strictEqual(structItem_0!.members[6].name, 'p6');
      assert.strictEqual(structItem_0!.members[6].type, 'never');
      assert.strictEqual(structItem_0!.members[7].name, 'p7');
      assert.strictEqual(structItem_0!.members[7].type, 'null');
      assert.strictEqual(structItem_0!.members[8].name, 'p8');
      assert.strictEqual(structItem_0!.members[8].type, 'undefined');
      assert.strictEqual(structItem_0!.members[9].name, 'p9');
      assert.strictEqual(structItem_0!.members[9].type, 'symbol');
      assert.strictEqual(structItem_0!.members[10].name, 'p10');
      assert.strictEqual(structItem_0!.members[10].type, 'bigint');
      assert.strictEqual(structItem_0!.members[11].name, 'p11');
      assert.strictEqual(structItem_0!.members[11].type, 'object');
      assert.strictEqual(structItem_0!.members[12].name, 'p12');
      assert.strictEqual(structItem_0!.members[12].type, 'number[]');
      assert.strictEqual(structItem_0!.members[13].name, 'p13');
      assert.strictEqual(structItem_0!.members[13].type, 'string[][]');
      assert.strictEqual(structItem_0!.members[14].name, 'p14');
      assert.strictEqual(structItem_0!.members[14].type, 'Array<boolean>');
      assert.strictEqual(structItem_0!.members[15].name, 'p15');
      assert.strictEqual(structItem_0!.members[15].type, 'Map<string, number>');
      assert.strictEqual(structItem_0!.members[16].name, 'p16');
      assert.strictEqual(structItem_0!.members[16].type, 'Set<number>');
      assert.strictEqual(structItem_0!.members[17].name, 'p17');
      assert.strictEqual(structItem_0!.members[17].type, 'Record<string, string>');
      assert.strictEqual(structItem_0!.members[18].name, 'p18');
      assert.strictEqual(structItem_0!.members[18].type, 'Promise<string>');
      assert.strictEqual(structItem_0!.members[19].name, 'p19');
      assert.strictEqual(structItem_0!.members[19].type, '[string, number]');
      assert.strictEqual(structItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0032
  * @tc.name dts2cpp_struct_0032
  * @tc.desc dts2cpp struct 扩充：30 成员进阶类型矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0032', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0032.ts',
            `interface OTC {
        p0: number; p1: string; p2: boolean; p3: any; p4: unknown;
        p5: null; p6: undefined; p7: symbol; p8: bigint; p9: object;
        p10: number[]; p11: string[]; p12: boolean[]; p13: any[]; p14: unknown[];
        p15: Map<string, number>; p16: Map<number, string>; p17: Set<string>; p18: Set<number>; p19: Record<string, string>;
        p20: Promise<string>; p21: [string, number]; p22: string | number; p23: (a: string) => void; p24: Date;
        p25: RegExp; p26: Error; p27: Uint8Array; p28: ArrayBuffer; p29: WeakMap<object, string>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 30);
      assert.strictEqual(structItem_0!.members[0].name, 'p0');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.members[1].name, 'p1');
      assert.strictEqual(structItem_0!.members[1].type, 'string');
      assert.strictEqual(structItem_0!.members[2].name, 'p2');
      assert.strictEqual(structItem_0!.members[2].type, 'boolean');
      assert.strictEqual(structItem_0!.members[3].name, 'p3');
      assert.strictEqual(structItem_0!.members[3].type, 'any');
      assert.strictEqual(structItem_0!.members[4].name, 'p4');
      assert.strictEqual(structItem_0!.members[4].type, 'unknown');
      assert.strictEqual(structItem_0!.members[5].name, 'p5');
      assert.strictEqual(structItem_0!.members[5].type, 'null');
      assert.strictEqual(structItem_0!.members[6].name, 'p6');
      assert.strictEqual(structItem_0!.members[6].type, 'undefined');
      assert.strictEqual(structItem_0!.members[7].name, 'p7');
      assert.strictEqual(structItem_0!.members[7].type, 'symbol');
      assert.strictEqual(structItem_0!.members[8].name, 'p8');
      assert.strictEqual(structItem_0!.members[8].type, 'bigint');
      assert.strictEqual(structItem_0!.members[9].name, 'p9');
      assert.strictEqual(structItem_0!.members[9].type, 'object');
      assert.strictEqual(structItem_0!.members[10].name, 'p10');
      assert.strictEqual(structItem_0!.members[10].type, 'number[]');
      assert.strictEqual(structItem_0!.members[11].name, 'p11');
      assert.strictEqual(structItem_0!.members[11].type, 'string[]');
      assert.strictEqual(structItem_0!.members[12].name, 'p12');
      assert.strictEqual(structItem_0!.members[12].type, 'boolean[]');
      assert.strictEqual(structItem_0!.members[13].name, 'p13');
      assert.strictEqual(structItem_0!.members[13].type, 'any[]');
      assert.strictEqual(structItem_0!.members[14].name, 'p14');
      assert.strictEqual(structItem_0!.members[14].type, 'unknown[]');
      assert.strictEqual(structItem_0!.members[15].name, 'p15');
      assert.strictEqual(structItem_0!.members[15].type, 'Map<string, number>');
      assert.strictEqual(structItem_0!.members[16].name, 'p16');
      assert.strictEqual(structItem_0!.members[16].type, 'Map<number, string>');
      assert.strictEqual(structItem_0!.members[17].name, 'p17');
      assert.strictEqual(structItem_0!.members[17].type, 'Set<string>');
      assert.strictEqual(structItem_0!.members[18].name, 'p18');
      assert.strictEqual(structItem_0!.members[18].type, 'Set<number>');
      assert.strictEqual(structItem_0!.members[19].name, 'p19');
      assert.strictEqual(structItem_0!.members[19].type, 'Record<string, string>');
      assert.strictEqual(structItem_0!.members[20].name, 'p20');
      assert.strictEqual(structItem_0!.members[20].type, 'Promise<string>');
      assert.strictEqual(structItem_0!.members[21].name, 'p21');
      assert.strictEqual(structItem_0!.members[21].type, '[string, number]');
      assert.strictEqual(structItem_0!.members[22].name, 'p22');
      assert.strictEqual(structItem_0!.members[22].type, 'string | number');
      assert.strictEqual(structItem_0!.members[23].name, 'p23');
      assert.strictEqual(structItem_0!.members[23].type, '(a: string) => void');
      assert.strictEqual(structItem_0!.members[24].name, 'p24');
      assert.strictEqual(structItem_0!.members[24].type, 'Date');
      assert.strictEqual(structItem_0!.members[25].name, 'p25');
      assert.strictEqual(structItem_0!.members[25].type, 'RegExp');
      assert.strictEqual(structItem_0!.members[26].name, 'p26');
      assert.strictEqual(structItem_0!.members[26].type, 'Error');
      assert.strictEqual(structItem_0!.members[27].name, 'p27');
      assert.strictEqual(structItem_0!.members[27].type, 'Uint8Array');
      assert.strictEqual(structItem_0!.members[28].name, 'p28');
      assert.strictEqual(structItem_0!.members[28].type, 'ArrayBuffer');
      assert.strictEqual(structItem_0!.members[29].name, 'p29');
      assert.strictEqual(structItem_0!.members[29].type, 'WeakMap<object, string>');
      assert.strictEqual(structItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0033
  * @tc.name dts2cpp_struct_0033
  * @tc.desc dts2cpp struct 扩充：50 成员全类型矩阵（规模压测） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0033', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0033.ts',
            `interface OTC {
        p0: number; p1: string; p2: boolean; p3: any; p4: unknown;
        p5: null; p6: undefined; p7: symbol; p8: bigint; p9: object;
        p10: number[]; p11: string[]; p12: boolean[]; p13: any[]; p14: unknown[];
        p15: Map<string, number>; p16: Map<number, string>; p17: Set<string>; p18: Set<number>; p19: Record<string, string>;
        p20: Promise<string>; p21: [string, number]; p22: string | number; p23: (a: string) => void; p24: Date;
        p25: RegExp; p26: Error; p27: Uint8Array; p28: ArrayBuffer; p29: WeakMap<object, string>;
        p30: string[][]; p31: Array<Array<number>>; p32: Map<string, Set<number>>; p33: readonly [string, number]; p34: keyof Map<string, number>;
        p35: typeof Date; p36: { a: string }; p37: { readonly b: number }; p38: string & { x: number }; p39: "lit" | 1;
        p40: Array<string | number>; p41: Set<Map<string, number>>; p42: Promise<Promise<string>>; p43: Uint16Array; p44: WeakSet<object>;
        p45: { m(): void }; p46: new () => Date; p47: () => Promise<string>; p48: null | undefined; p49: symbol | string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 50);
      assert.strictEqual(structItem_0!.members[0].name, 'p0');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.members[1].name, 'p1');
      assert.strictEqual(structItem_0!.members[1].type, 'string');
      assert.strictEqual(structItem_0!.members[2].name, 'p2');
      assert.strictEqual(structItem_0!.members[2].type, 'boolean');
      assert.strictEqual(structItem_0!.members[3].name, 'p3');
      assert.strictEqual(structItem_0!.members[3].type, 'any');
      assert.strictEqual(structItem_0!.members[4].name, 'p4');
      assert.strictEqual(structItem_0!.members[4].type, 'unknown');
      assert.strictEqual(structItem_0!.members[5].name, 'p5');
      assert.strictEqual(structItem_0!.members[5].type, 'null');
      assert.strictEqual(structItem_0!.members[6].name, 'p6');
      assert.strictEqual(structItem_0!.members[6].type, 'undefined');
      assert.strictEqual(structItem_0!.members[7].name, 'p7');
      assert.strictEqual(structItem_0!.members[7].type, 'symbol');
      assert.strictEqual(structItem_0!.members[8].name, 'p8');
      assert.strictEqual(structItem_0!.members[8].type, 'bigint');
      assert.strictEqual(structItem_0!.members[9].name, 'p9');
      assert.strictEqual(structItem_0!.members[9].type, 'object');
      assert.strictEqual(structItem_0!.members[10].name, 'p10');
      assert.strictEqual(structItem_0!.members[10].type, 'number[]');
      assert.strictEqual(structItem_0!.members[11].name, 'p11');
      assert.strictEqual(structItem_0!.members[11].type, 'string[]');
      assert.strictEqual(structItem_0!.members[12].name, 'p12');
      assert.strictEqual(structItem_0!.members[12].type, 'boolean[]');
      assert.strictEqual(structItem_0!.members[13].name, 'p13');
      assert.strictEqual(structItem_0!.members[13].type, 'any[]');
      assert.strictEqual(structItem_0!.members[14].name, 'p14');
      assert.strictEqual(structItem_0!.members[14].type, 'unknown[]');
      assert.strictEqual(structItem_0!.members[15].name, 'p15');
      assert.strictEqual(structItem_0!.members[15].type, 'Map<string, number>');
      assert.strictEqual(structItem_0!.members[16].name, 'p16');
      assert.strictEqual(structItem_0!.members[16].type, 'Map<number, string>');
      assert.strictEqual(structItem_0!.members[17].name, 'p17');
      assert.strictEqual(structItem_0!.members[17].type, 'Set<string>');
      assert.strictEqual(structItem_0!.members[18].name, 'p18');
      assert.strictEqual(structItem_0!.members[18].type, 'Set<number>');
      assert.strictEqual(structItem_0!.members[19].name, 'p19');
      assert.strictEqual(structItem_0!.members[19].type, 'Record<string, string>');
      assert.strictEqual(structItem_0!.members[20].name, 'p20');
      assert.strictEqual(structItem_0!.members[20].type, 'Promise<string>');
      assert.strictEqual(structItem_0!.members[21].name, 'p21');
      assert.strictEqual(structItem_0!.members[21].type, '[string, number]');
      assert.strictEqual(structItem_0!.members[22].name, 'p22');
      assert.strictEqual(structItem_0!.members[22].type, 'string | number');
      assert.strictEqual(structItem_0!.members[23].name, 'p23');
      assert.strictEqual(structItem_0!.members[23].type, '(a: string) => void');
      assert.strictEqual(structItem_0!.members[24].name, 'p24');
      assert.strictEqual(structItem_0!.members[24].type, 'Date');
      assert.strictEqual(structItem_0!.members[25].name, 'p25');
      assert.strictEqual(structItem_0!.members[25].type, 'RegExp');
      assert.strictEqual(structItem_0!.members[26].name, 'p26');
      assert.strictEqual(structItem_0!.members[26].type, 'Error');
      assert.strictEqual(structItem_0!.members[27].name, 'p27');
      assert.strictEqual(structItem_0!.members[27].type, 'Uint8Array');
      assert.strictEqual(structItem_0!.members[28].name, 'p28');
      assert.strictEqual(structItem_0!.members[28].type, 'ArrayBuffer');
      assert.strictEqual(structItem_0!.members[29].name, 'p29');
      assert.strictEqual(structItem_0!.members[29].type, 'WeakMap<object, string>');
      assert.strictEqual(structItem_0!.members[30].name, 'p30');
      assert.strictEqual(structItem_0!.members[30].type, 'string[][]');
      assert.strictEqual(structItem_0!.members[31].name, 'p31');
      assert.strictEqual(structItem_0!.members[31].type, 'Array<Array<number>>');
      assert.strictEqual(structItem_0!.members[32].name, 'p32');
      assert.strictEqual(structItem_0!.members[32].type, 'Map<string, Set<number>>');
      assert.strictEqual(structItem_0!.members[33].name, 'p33');
      assert.strictEqual(structItem_0!.members[33].type, 'readonly [string, number]');
      assert.strictEqual(structItem_0!.members[34].name, 'p34');
      assert.strictEqual(structItem_0!.members[34].type, 'keyof Map<string, number>');
      assert.strictEqual(structItem_0!.members[35].name, 'p35');
      assert.strictEqual(structItem_0!.members[35].type, 'typeof Date');
      assert.strictEqual(structItem_0!.members[36].name, 'p36');
      assert.strictEqual(structItem_0!.members[36].type, '{ a: string }');
      assert.strictEqual(structItem_0!.members[37].name, 'p37');
      assert.strictEqual(structItem_0!.members[37].type, '{ readonly b: number }');
      assert.strictEqual(structItem_0!.members[38].name, 'p38');
      assert.strictEqual(structItem_0!.members[38].type, 'string & { x: number }');
      assert.strictEqual(structItem_0!.members[39].name, 'p39');
      assert.strictEqual(structItem_0!.members[39].type, '"lit" | 1');
      assert.strictEqual(structItem_0!.members[40].name, 'p40');
      assert.strictEqual(structItem_0!.members[40].type, 'Array<string | number>');
      assert.strictEqual(structItem_0!.members[41].name, 'p41');
      assert.strictEqual(structItem_0!.members[41].type, 'Set<Map<string, number>>');
      assert.strictEqual(structItem_0!.members[42].name, 'p42');
      assert.strictEqual(structItem_0!.members[42].type, 'Promise<Promise<string>>');
      assert.strictEqual(structItem_0!.members[43].name, 'p43');
      assert.strictEqual(structItem_0!.members[43].type, 'Uint16Array');
      assert.strictEqual(structItem_0!.members[44].name, 'p44');
      assert.strictEqual(structItem_0!.members[44].type, 'WeakSet<object>');
      assert.strictEqual(structItem_0!.members[45].name, 'p45');
      assert.strictEqual(structItem_0!.members[45].type, '{ m(): void }');
      assert.strictEqual(structItem_0!.members[46].name, 'p46');
      assert.strictEqual(structItem_0!.members[46].type, 'new () => Date');
      assert.strictEqual(structItem_0!.members[47].name, 'p47');
      assert.strictEqual(structItem_0!.members[47].type, '() => Promise<string>');
      assert.strictEqual(structItem_0!.members[48].name, 'p48');
      assert.strictEqual(structItem_0!.members[48].type, 'null | undefined');
      assert.strictEqual(structItem_0!.members[49].name, 'p49');
      assert.strictEqual(structItem_0!.members[49].type, 'symbol | string');
      assert.strictEqual(structItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0034
  * @tc.name dts2cpp_struct_0034
  * @tc.desc dts2cpp struct 扩充：20 方法签名返回类型矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0034', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0034.ts',
            `interface OTC {
        m0(): void;
        m1(): number;
        m2(): string;
        m3(): boolean;
        m4(): any;
        m5(): unknown;
        m6(): never;
        m7(): null;
        m8(): undefined;
        m9(): symbol;
        m10(): bigint;
        m11(): object;
        m12(): number[];
        m13(): string[][];
        m14(): [string, number];
        m15(): string | number;
        m16(): boolean | null;
        m17(): (a: string) => void;
        m18(): { a: number };
        m19(): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 20);
      assert.strictEqual(structItem_0!.functions[0].name, 'm0');
      assert.strictEqual(structItem_0!.functions[0].returns, 'void');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[1].name, 'm1');
      assert.strictEqual(structItem_0!.functions[1].returns, 'number');
      assert.strictEqual(structItem_0!.functions[1].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[2].name, 'm2');
      assert.strictEqual(structItem_0!.functions[2].returns, 'string');
      assert.strictEqual(structItem_0!.functions[2].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[3].name, 'm3');
      assert.strictEqual(structItem_0!.functions[3].returns, 'boolean');
      assert.strictEqual(structItem_0!.functions[3].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[4].name, 'm4');
      assert.strictEqual(structItem_0!.functions[4].returns, 'any');
      assert.strictEqual(structItem_0!.functions[4].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[5].name, 'm5');
      assert.strictEqual(structItem_0!.functions[5].returns, 'unknown');
      assert.strictEqual(structItem_0!.functions[5].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[6].name, 'm6');
      assert.strictEqual(structItem_0!.functions[6].returns, 'never');
      assert.strictEqual(structItem_0!.functions[6].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[7].name, 'm7');
      assert.strictEqual(structItem_0!.functions[7].returns, 'null');
      assert.strictEqual(structItem_0!.functions[7].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[8].name, 'm8');
      assert.strictEqual(structItem_0!.functions[8].returns, 'undefined');
      assert.strictEqual(structItem_0!.functions[8].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[9].name, 'm9');
      assert.strictEqual(structItem_0!.functions[9].returns, 'symbol');
      assert.strictEqual(structItem_0!.functions[9].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[10].name, 'm10');
      assert.strictEqual(structItem_0!.functions[10].returns, 'bigint');
      assert.strictEqual(structItem_0!.functions[10].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[11].name, 'm11');
      assert.strictEqual(structItem_0!.functions[11].returns, 'object');
      assert.strictEqual(structItem_0!.functions[11].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[12].name, 'm12');
      assert.strictEqual(structItem_0!.functions[12].returns, 'number[]');
      assert.strictEqual(structItem_0!.functions[12].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[13].name, 'm13');
      assert.strictEqual(structItem_0!.functions[13].returns, 'string[][]');
      assert.strictEqual(structItem_0!.functions[13].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[14].name, 'm14');
      assert.strictEqual(structItem_0!.functions[14].returns, '[string, number]');
      assert.strictEqual(structItem_0!.functions[14].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[15].name, 'm15');
      assert.strictEqual(structItem_0!.functions[15].returns, 'string | number');
      assert.strictEqual(structItem_0!.functions[15].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[16].name, 'm16');
      assert.strictEqual(structItem_0!.functions[16].returns, 'boolean | null');
      assert.strictEqual(structItem_0!.functions[16].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[17].name, 'm17');
      assert.strictEqual(structItem_0!.functions[17].returns, '(a: string) => void');
      assert.strictEqual(structItem_0!.functions[17].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[18].name, 'm18');
      assert.strictEqual(structItem_0!.functions[18].returns, '{ a: number }');
      assert.strictEqual(structItem_0!.functions[18].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[19].name, 'm19');
      assert.strictEqual(structItem_0!.functions[19].returns, 'void');
      assert.strictEqual(structItem_0!.functions[19].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0035
  * @tc.name dts2cpp_struct_0035
  * @tc.desc dts2cpp struct 扩充：10 方法签名参数形态矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0035', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0035.ts',
            `interface OTC {
        f1(a: number): void;
        f2(a: number, b: string): void;
        f3(a: number, b: string, c: boolean): void;
        f4(a?: number): void;
        f5(...a: number[]): void;
        f6(a: number): number;
        f7({ a, b }: { a: number; b: number }): void;
        f8([x, y]: [number, number]): void;
        f9(a: string | null): void;
        f10(a: Map<string, number>): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 10);
      assert.strictEqual(structItem_0!.functions[0].name, 'f1');
      assert.strictEqual(structItem_0!.functions[0].returns, 'void');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(structItem_0!.functions[1].name, 'f2');
      assert.strictEqual(structItem_0!.functions[1].returns, 'void');
      assert.strictEqual(structItem_0!.functions[1].parameters.length, 2);
      assert.strictEqual(structItem_0!.functions[1].parameters[0].type, 'number');
      assert.strictEqual(structItem_0!.functions[1].parameters[1].type, 'string');
      assert.strictEqual(structItem_0!.functions[2].name, 'f3');
      assert.strictEqual(structItem_0!.functions[2].returns, 'void');
      assert.strictEqual(structItem_0!.functions[2].parameters.length, 3);
      assert.strictEqual(structItem_0!.functions[2].parameters[0].type, 'number');
      assert.strictEqual(structItem_0!.functions[2].parameters[1].type, 'string');
      assert.strictEqual(structItem_0!.functions[2].parameters[2].type, 'boolean');
      assert.strictEqual(structItem_0!.functions[3].name, 'f4');
      assert.strictEqual(structItem_0!.functions[3].returns, 'void');
      assert.strictEqual(structItem_0!.functions[3].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[3].parameters[0].type, 'number');
      assert.strictEqual(structItem_0!.functions[4].name, 'f5');
      assert.strictEqual(structItem_0!.functions[4].returns, 'void');
      assert.strictEqual(structItem_0!.functions[4].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[4].parameters[0].type, 'number[]');
      assert.strictEqual(structItem_0!.functions[5].name, 'f6');
      assert.strictEqual(structItem_0!.functions[5].returns, 'number');
      assert.strictEqual(structItem_0!.functions[5].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[5].parameters[0].type, 'number');
      assert.strictEqual(structItem_0!.functions[6].name, 'f7');
      assert.strictEqual(structItem_0!.functions[6].returns, 'void');
      assert.strictEqual(structItem_0!.functions[6].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[6].parameters[0].type, '{ a: number; b: number }');
      assert.strictEqual(structItem_0!.functions[7].name, 'f8');
      assert.strictEqual(structItem_0!.functions[7].returns, 'void');
      assert.strictEqual(structItem_0!.functions[7].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[7].parameters[0].type, '[number, number]');
      assert.strictEqual(structItem_0!.functions[8].name, 'f9');
      assert.strictEqual(structItem_0!.functions[8].returns, 'void');
      assert.strictEqual(structItem_0!.functions[8].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[8].parameters[0].type, 'string | null');
      assert.strictEqual(structItem_0!.functions[9].name, 'f10');
      assert.strictEqual(structItem_0!.functions[9].returns, 'void');
      assert.strictEqual(structItem_0!.functions[9].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[9].parameters[0].type, 'Map<string, number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0036
  * @tc.name dts2cpp_struct_0036
  * @tc.desc dts2cpp struct 扩充：多参数 + 返回注解方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0036', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0036.ts',
            `interface OTC {
        f1(a: number, b: string, c: boolean, d: any, e: unknown): string;
        f2(a: number[]): number[];
        f3(a: string | number): boolean | null;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 3);
      assert.strictEqual(structItem_0!.functions[0].name, 'f1');
      assert.strictEqual(structItem_0!.functions[0].returns, 'string');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 5);
      assert.strictEqual(structItem_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(structItem_0!.functions[0].parameters[1].type, 'string');
      assert.strictEqual(structItem_0!.functions[0].parameters[2].type, 'boolean');
      assert.strictEqual(structItem_0!.functions[0].parameters[3].type, 'any');
      assert.strictEqual(structItem_0!.functions[0].parameters[4].type, 'unknown');
      assert.strictEqual(structItem_0!.functions[1].name, 'f2');
      assert.strictEqual(structItem_0!.functions[1].returns, 'number[]');
      assert.strictEqual(structItem_0!.functions[1].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[1].parameters[0].type, 'number[]');
      assert.strictEqual(structItem_0!.functions[2].name, 'f3');
      assert.strictEqual(structItem_0!.functions[2].returns, 'boolean | null');
      assert.strictEqual(structItem_0!.functions[2].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[2].parameters[0].type, 'string | number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0037
  * @tc.name dts2cpp_struct_0037
  * @tc.desc dts2cpp struct 扩充：同文件两个完整 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0037', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0037.ts',
            `interface OTC1 {
        len: number;
        add(a: number): number;
    }
interface OTC2 {
        name: string;
        get(): string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 2);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC1');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 1);
      assert.strictEqual(structItem_0!.members[0].name, 'len');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.functions.length, 1);
      assert.strictEqual(structItem_0!.functions[0].name, 'add');
      assert.strictEqual(structItem_0!.functions[0].returns, 'number');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[0].parameters[0].type, 'number');
      const structItem_1 = parseObj.structs.find(item => item.name === 'OTC2');
      assert.ok(structItem_1);
      assert.strictEqual(structItem_1!.members.length, 1);
      assert.strictEqual(structItem_1!.members[0].name, 'name');
      assert.strictEqual(structItem_1!.members[0].type, 'string');
      assert.strictEqual(structItem_1!.functions.length, 1);
      assert.strictEqual(structItem_1!.functions[0].name, 'get');
      assert.strictEqual(structItem_1!.functions[0].returns, 'string');
      assert.strictEqual(structItem_1!.functions[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0038
  * @tc.name dts2cpp_struct_0038
  * @tc.desc dts2cpp struct 扩充：同文件三个 interface（多声明吞吐） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0038', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0038.ts',
            `interface OTC1 { a: number; }
interface OTC2 { b: string; }
interface OTC3 { c: boolean; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 3);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC1');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 1);
      assert.strictEqual(structItem_0!.members[0].name, 'a');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.functions.length, 0);
      const structItem_1 = parseObj.structs.find(item => item.name === 'OTC2');
      assert.ok(structItem_1);
      assert.strictEqual(structItem_1!.members.length, 1);
      assert.strictEqual(structItem_1!.members[0].name, 'b');
      assert.strictEqual(structItem_1!.members[0].type, 'string');
      assert.strictEqual(structItem_1!.functions.length, 0);
      const structItem_2 = parseObj.structs.find(item => item.name === 'OTC3');
      assert.ok(structItem_2);
      assert.strictEqual(structItem_2!.members.length, 1);
      assert.strictEqual(structItem_2!.members[0].name, 'c');
      assert.strictEqual(structItem_2!.members[0].type, 'boolean');
      assert.strictEqual(structItem_2!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0039
  * @tc.name dts2cpp_struct_0039
  * @tc.desc dts2cpp struct 扩充：双泛型 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0039', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0039.ts',
            `interface Pair<A, B> {
        first: A;
        second: B;
        get(): A;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'Pair');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 2);
      assert.strictEqual(structItem_0!.members[0].name, 'first');
      assert.strictEqual(structItem_0!.members[0].type, 'A');
      assert.strictEqual(structItem_0!.members[1].name, 'second');
      assert.strictEqual(structItem_0!.members[1].type, 'B');
      assert.strictEqual(structItem_0!.functions.length, 1);
      assert.strictEqual(structItem_0!.functions[0].name, 'get');
      assert.strictEqual(structItem_0!.functions[0].returns, 'A');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0040
  * @tc.name dts2cpp_struct_0040
  * @tc.desc dts2cpp struct 扩充：中文 interface/成员/方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0040', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0040.ts',
            `interface 人 {
        名字: string;
        年龄: number;
        打招呼(): string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === '人');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 2);
      assert.strictEqual(structItem_0!.members[0].name, '名字');
      assert.strictEqual(structItem_0!.members[0].type, 'string');
      assert.strictEqual(structItem_0!.members[1].name, '年龄');
      assert.strictEqual(structItem_0!.members[1].type, 'number');
      assert.strictEqual(structItem_0!.functions.length, 1);
      assert.strictEqual(structItem_0!.functions[0].name, '打招呼');
      assert.strictEqual(structItem_0!.functions[0].returns, 'string');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0041
  * @tc.name dts2cpp_struct_0041
  * @tc.desc dts2cpp struct 扩充：空 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0041', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0041.ts',
            `interface Empty {}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'Empty');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0042
  * @tc.name dts2cpp_struct_0042
  * @tc.desc dts2cpp struct 扩充：三级继承链 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0042', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0042.ts',
            `interface Base {
        id: number;
    }
interface Mid extends Base {
        name: string;
    }
interface Leaf extends Mid {
        ok: boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 3);
      const structItem_0 = parseObj.structs.find(item => item.name === 'Base');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 1);
      assert.strictEqual(structItem_0!.members[0].name, 'id');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.functions.length, 0);
      const structItem_1 = parseObj.structs.find(item => item.name === 'Mid');
      assert.ok(structItem_1);
      assert.strictEqual(structItem_1!.members.length, 1);
      assert.strictEqual(structItem_1!.members[0].name, 'name');
      assert.strictEqual(structItem_1!.members[0].type, 'string');
      assert.strictEqual(structItem_1!.functions.length, 0);
      const structItem_2 = parseObj.structs.find(item => item.name === 'Leaf');
      assert.ok(structItem_2);
      assert.strictEqual(structItem_2!.members.length, 1);
      assert.strictEqual(structItem_2!.members[0].name, 'ok');
      assert.strictEqual(structItem_2!.members[0].type, 'boolean');
      assert.strictEqual(structItem_2!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0043
  * @tc.name dts2cpp_struct_0043
  * @tc.desc dts2cpp struct 扩充：10 成员 + 10 方法签名混合大集合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0043', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0043.ts',
            `interface OTC {
        p0: number; p1: string; p2: boolean; p3: any; p4: unknown;
        p5: null; p6: undefined; p7: symbol; p8: bigint; p9: object;
        m0(): void; m1(): void; m2(): void; m3(): void; m4(): void;
        m5(): void; m6(): void; m7(): void; m8(): void; m9(): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 10);
      assert.strictEqual(structItem_0!.members[0].name, 'p0');
      assert.strictEqual(structItem_0!.members[0].type, 'number');
      assert.strictEqual(structItem_0!.members[1].name, 'p1');
      assert.strictEqual(structItem_0!.members[1].type, 'string');
      assert.strictEqual(structItem_0!.members[2].name, 'p2');
      assert.strictEqual(structItem_0!.members[2].type, 'boolean');
      assert.strictEqual(structItem_0!.members[3].name, 'p3');
      assert.strictEqual(structItem_0!.members[3].type, 'any');
      assert.strictEqual(structItem_0!.members[4].name, 'p4');
      assert.strictEqual(structItem_0!.members[4].type, 'unknown');
      assert.strictEqual(structItem_0!.members[5].name, 'p5');
      assert.strictEqual(structItem_0!.members[5].type, 'null');
      assert.strictEqual(structItem_0!.members[6].name, 'p6');
      assert.strictEqual(structItem_0!.members[6].type, 'undefined');
      assert.strictEqual(structItem_0!.members[7].name, 'p7');
      assert.strictEqual(structItem_0!.members[7].type, 'symbol');
      assert.strictEqual(structItem_0!.members[8].name, 'p8');
      assert.strictEqual(structItem_0!.members[8].type, 'bigint');
      assert.strictEqual(structItem_0!.members[9].name, 'p9');
      assert.strictEqual(structItem_0!.members[9].type, 'object');
      assert.strictEqual(structItem_0!.functions.length, 10);
      assert.strictEqual(structItem_0!.functions[0].name, 'm0');
      assert.strictEqual(structItem_0!.functions[0].returns, 'void');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[1].name, 'm1');
      assert.strictEqual(structItem_0!.functions[1].returns, 'void');
      assert.strictEqual(structItem_0!.functions[1].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[2].name, 'm2');
      assert.strictEqual(structItem_0!.functions[2].returns, 'void');
      assert.strictEqual(structItem_0!.functions[2].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[3].name, 'm3');
      assert.strictEqual(structItem_0!.functions[3].returns, 'void');
      assert.strictEqual(structItem_0!.functions[3].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[4].name, 'm4');
      assert.strictEqual(structItem_0!.functions[4].returns, 'void');
      assert.strictEqual(structItem_0!.functions[4].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[5].name, 'm5');
      assert.strictEqual(structItem_0!.functions[5].returns, 'void');
      assert.strictEqual(structItem_0!.functions[5].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[6].name, 'm6');
      assert.strictEqual(structItem_0!.functions[6].returns, 'void');
      assert.strictEqual(structItem_0!.functions[6].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[7].name, 'm7');
      assert.strictEqual(structItem_0!.functions[7].returns, 'void');
      assert.strictEqual(structItem_0!.functions[7].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[8].name, 'm8');
      assert.strictEqual(structItem_0!.functions[8].returns, 'void');
      assert.strictEqual(structItem_0!.functions[8].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[9].name, 'm9');
      assert.strictEqual(structItem_0!.functions[9].returns, 'void');
      assert.strictEqual(structItem_0!.functions[9].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0044
  * @tc.name dts2cpp_struct_0044
  * @tc.desc dts2cpp struct 扩充：字面量/交集/模板/联合成员矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0044', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0044.ts',
            `interface OTC {
        a: string | number;
        b: string & { brand: "x" };
        c: "lit";
        d: 42;
        e: true;
        f: \`tpl-\${string}\`;
        g: Date | null;
        h: { x: number } | { y: string };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 8);
      assert.strictEqual(structItem_0!.members[0].name, 'a');
      assert.strictEqual(structItem_0!.members[0].type, 'string | number');
      assert.strictEqual(structItem_0!.members[1].name, 'b');
      assert.strictEqual(structItem_0!.members[1].type, 'string & { brand: "x" }');
      assert.strictEqual(structItem_0!.members[2].name, 'c');
      assert.strictEqual(structItem_0!.members[2].type, '"lit"');
      assert.strictEqual(structItem_0!.members[3].name, 'd');
      assert.strictEqual(structItem_0!.members[3].type, '42');
      assert.strictEqual(structItem_0!.members[4].name, 'e');
      assert.strictEqual(structItem_0!.members[4].type, 'true');
      assert.strictEqual(structItem_0!.members[5].name, 'f');
      assert.strictEqual(structItem_0!.members[5].type, '`tpl-${string}`');
      assert.strictEqual(structItem_0!.members[6].name, 'g');
      assert.strictEqual(structItem_0!.members[6].type, 'Date | null');
      assert.strictEqual(structItem_0!.members[7].name, 'h');
      assert.strictEqual(structItem_0!.members[7].type, '{ x: number } | { y: string }');
      assert.strictEqual(structItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0045
  * @tc.name dts2cpp_struct_0045
  * @tc.desc dts2cpp struct 扩充：字面量联合参数与返回方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0045', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0045.ts',
            `interface OTC {
        f(a: "on" | "off"): "yes" | "no";
        g(x: 1 | 2): 3 | 4;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 2);
      assert.strictEqual(structItem_0!.functions[0].name, 'f');
      assert.strictEqual(structItem_0!.functions[0].returns, '"yes" | "no"');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[0].parameters[0].type, '"on" | "off"');
      assert.strictEqual(structItem_0!.functions[1].name, 'g');
      assert.strictEqual(structItem_0!.functions[1].returns, '3 | 4');
      assert.strictEqual(structItem_0!.functions[1].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[1].parameters[0].type, '1 | 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0046
  * @tc.name dts2cpp_struct_0046
  * @tc.desc dts2cpp struct 扩充：内置对象引用联合参数/返回方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0046', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0046.ts',
            `interface OTC {
        get(): Date | null;
        set(v: Date | null): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 2);
      assert.strictEqual(structItem_0!.functions[0].name, 'get');
      assert.strictEqual(structItem_0!.functions[0].returns, 'Date | null');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 0);
      assert.strictEqual(structItem_0!.functions[1].name, 'set');
      assert.strictEqual(structItem_0!.functions[1].returns, 'void');
      assert.strictEqual(structItem_0!.functions[1].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[1].parameters[0].type, 'Date | null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0047
  * @tc.name dts2cpp_struct_0047
  * @tc.desc dts2cpp struct 扩充：数组参数/多维数组返回方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0047', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0047.ts',
            `interface OTC {
        f(a: number): number[];
        g(a: string[]): string[][];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const structItem_0 = parseObj.structs.find(item => item.name === 'OTC');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 0);
      assert.strictEqual(structItem_0!.functions.length, 2);
      assert.strictEqual(structItem_0!.functions[0].name, 'f');
      assert.strictEqual(structItem_0!.functions[0].returns, 'number[]');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(structItem_0!.functions[1].name, 'g');
      assert.strictEqual(structItem_0!.functions[1].returns, 'string[][]');
      assert.strictEqual(structItem_0!.functions[1].parameters.length, 1);
      assert.strictEqual(structItem_0!.functions[1].parameters[0].type, 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0048
  * @tc.name dts2cpp_struct_0048
  * @tc.desc dts2cpp struct 扩充：判别联合 interface 继承体系 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0048', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0048.ts',
            `interface Shape {
        kind: "circle" | "square";
        area(): number;
    }
interface Circle extends Shape {
        radius: number;
    }
interface Square extends Shape {
        side: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 3);
      const structItem_0 = parseObj.structs.find(item => item.name === 'Shape');
      assert.ok(structItem_0);
      assert.strictEqual(structItem_0!.members.length, 1);
      assert.strictEqual(structItem_0!.members[0].name, 'kind');
      assert.strictEqual(structItem_0!.members[0].type, '"circle" | "square"');
      assert.strictEqual(structItem_0!.functions.length, 1);
      assert.strictEqual(structItem_0!.functions[0].name, 'area');
      assert.strictEqual(structItem_0!.functions[0].returns, 'number');
      assert.strictEqual(structItem_0!.functions[0].parameters.length, 0);
      const structItem_1 = parseObj.structs.find(item => item.name === 'Circle');
      assert.ok(structItem_1);
      assert.strictEqual(structItem_1!.members.length, 1);
      assert.strictEqual(structItem_1!.members[0].name, 'radius');
      assert.strictEqual(structItem_1!.members[0].type, 'number');
      assert.strictEqual(structItem_1!.functions.length, 0);
      const structItem_2 = parseObj.structs.find(item => item.name === 'Square');
      assert.ok(structItem_2);
      assert.strictEqual(structItem_2!.members.length, 1);
      assert.strictEqual(structItem_2!.members[0].name, 'side');
      assert.strictEqual(structItem_2!.members[0].type, 'number');
      assert.strictEqual(structItem_2!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0048 执行异常: ${String(err)}`);
    }
  });

});
