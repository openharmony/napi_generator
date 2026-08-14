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

suite('Performance_DTS2CPP_Class_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Class_Suite.');

  /**
  * @tc.number dts2cpp_class_0027
  * @tc.name dts2cpp_class_0027
  * @tc.desc dts2cpp class 对齐 test_69：可选/非空断言属性与 rest 参数方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0027', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0027.ts',
            `class OTC {
        public len?: number;
        private name!: string;
        contruct(...a: number[]) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'contruct');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0028
  * @tc.name dts2cpp_class_0028
  * @tc.desc dts2cpp class 对齐 test_70：函数重载（3 个重载签名） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0028', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0028.ts',
            `class OTC {
        len(s: string): number;
        len(arr: any[]): number;
        len(x: any) {
          return x.length;
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'len');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].name, 'len');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'any[]');
      assert.strictEqual(classItem_0!.functionList[2].name, 'len');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0029
  * @tc.name dts2cpp_class_0029
  * @tc.desc dts2cpp class 对齐 test_72：static/abstract/protected/this 参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0029', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0029.ts',
            `class User {
        static id: number;
        const admin: boolean;
    }
abstract class Animal {
        protected name: string;
        isAlive(this: User): boolean {
          return true;
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 2);
      const classItem_0 = parseObj.classes.find(item => item.name === 'User');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'id');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'admin');
      assert.strictEqual(classItem_0!.variableList[1].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'Animal');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'name');
      assert.strictEqual(classItem_1!.variableList[0].type, 'string');
      assert.strictEqual(classItem_1!.functionList.length, 1);
      assert.strictEqual(classItem_1!.functionList[0].name, 'isAlive');
      assert.strictEqual(classItem_1!.functionList[0].returns, 'boolean');
      assert.strictEqual(classItem_1!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_1!.functionList[0].parameters[0].type, 'User');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0030
  * @tc.name dts2cpp_class_0030
  * @tc.desc dts2cpp class 对齐 test_74：getter/setter 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0030', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0030.ts',
            `class OTC {
        private _length = 0;
        get length() {
          return this._length;
        }
        set length(value) {
          this._length = value;
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, '_length');
      assert.strictEqual(classItem_0!.variableList[0].type, undefined);
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0031
  * @tc.name dts2cpp_class_0031
  * @tc.desc dts2cpp class 对齐 test_75：implements 接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0031', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0031.ts',
            `interface Pingable {
        ping(): void;
    }
class Sonar implements Pingable {
        ping() {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Sonar');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'ping');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0032
  * @tc.name dts2cpp_class_0032
  * @tc.desc dts2cpp class 扩充：20 属性全基本类型/容器/元组矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0032', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0032.ts',
            `class OTC {
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
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 20);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'any');
      assert.strictEqual(classItem_0!.variableList[4].name, 'p4');
      assert.strictEqual(classItem_0!.variableList[4].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[5].name, 'p5');
      assert.strictEqual(classItem_0!.variableList[5].type, 'void');
      assert.strictEqual(classItem_0!.variableList[6].name, 'p6');
      assert.strictEqual(classItem_0!.variableList[6].type, 'never');
      assert.strictEqual(classItem_0!.variableList[7].name, 'p7');
      assert.strictEqual(classItem_0!.variableList[7].type, 'null');
      assert.strictEqual(classItem_0!.variableList[8].name, 'p8');
      assert.strictEqual(classItem_0!.variableList[8].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[9].name, 'p9');
      assert.strictEqual(classItem_0!.variableList[9].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[10].name, 'p10');
      assert.strictEqual(classItem_0!.variableList[10].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[11].name, 'p11');
      assert.strictEqual(classItem_0!.variableList[11].type, 'object');
      assert.strictEqual(classItem_0!.variableList[12].name, 'p12');
      assert.strictEqual(classItem_0!.variableList[12].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[13].name, 'p13');
      assert.strictEqual(classItem_0!.variableList[13].type, 'string[][]');
      assert.strictEqual(classItem_0!.variableList[14].name, 'p14');
      assert.strictEqual(classItem_0!.variableList[14].type, 'Array<boolean>');
      assert.strictEqual(classItem_0!.variableList[15].name, 'p15');
      assert.strictEqual(classItem_0!.variableList[15].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[16].name, 'p16');
      assert.strictEqual(classItem_0!.variableList[16].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[17].name, 'p17');
      assert.strictEqual(classItem_0!.variableList[17].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[18].name, 'p18');
      assert.strictEqual(classItem_0!.variableList[18].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[19].name, 'p19');
      assert.strictEqual(classItem_0!.variableList[19].type, '[string, number]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0032 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0033
  * @tc.name dts2cpp_class_0033
  * @tc.desc dts2cpp class 扩充：30 属性进阶类型矩阵（含内置对象/容器嵌套） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0033', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0033.ts',
            `class OTC {
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
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 30);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'any');
      assert.strictEqual(classItem_0!.variableList[4].name, 'p4');
      assert.strictEqual(classItem_0!.variableList[4].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[5].name, 'p5');
      assert.strictEqual(classItem_0!.variableList[5].type, 'null');
      assert.strictEqual(classItem_0!.variableList[6].name, 'p6');
      assert.strictEqual(classItem_0!.variableList[6].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[7].name, 'p7');
      assert.strictEqual(classItem_0!.variableList[7].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[8].name, 'p8');
      assert.strictEqual(classItem_0!.variableList[8].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[9].name, 'p9');
      assert.strictEqual(classItem_0!.variableList[9].type, 'object');
      assert.strictEqual(classItem_0!.variableList[10].name, 'p10');
      assert.strictEqual(classItem_0!.variableList[10].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[11].name, 'p11');
      assert.strictEqual(classItem_0!.variableList[11].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[12].name, 'p12');
      assert.strictEqual(classItem_0!.variableList[12].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[13].name, 'p13');
      assert.strictEqual(classItem_0!.variableList[13].type, 'any[]');
      assert.strictEqual(classItem_0!.variableList[14].name, 'p14');
      assert.strictEqual(classItem_0!.variableList[14].type, 'unknown[]');
      assert.strictEqual(classItem_0!.variableList[15].name, 'p15');
      assert.strictEqual(classItem_0!.variableList[15].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[16].name, 'p16');
      assert.strictEqual(classItem_0!.variableList[16].type, 'Map<number, string>');
      assert.strictEqual(classItem_0!.variableList[17].name, 'p17');
      assert.strictEqual(classItem_0!.variableList[17].type, 'Set<string>');
      assert.strictEqual(classItem_0!.variableList[18].name, 'p18');
      assert.strictEqual(classItem_0!.variableList[18].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[19].name, 'p19');
      assert.strictEqual(classItem_0!.variableList[19].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[20].name, 'p20');
      assert.strictEqual(classItem_0!.variableList[20].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[21].name, 'p21');
      assert.strictEqual(classItem_0!.variableList[21].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[22].name, 'p22');
      assert.strictEqual(classItem_0!.variableList[22].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[23].name, 'p23');
      assert.strictEqual(classItem_0!.variableList[23].type, '(a: string) => void');
      assert.strictEqual(classItem_0!.variableList[24].name, 'p24');
      assert.strictEqual(classItem_0!.variableList[24].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[25].name, 'p25');
      assert.strictEqual(classItem_0!.variableList[25].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[26].name, 'p26');
      assert.strictEqual(classItem_0!.variableList[26].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[27].name, 'p27');
      assert.strictEqual(classItem_0!.variableList[27].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[28].name, 'p28');
      assert.strictEqual(classItem_0!.variableList[28].type, 'ArrayBuffer');
      assert.strictEqual(classItem_0!.variableList[29].name, 'p29');
      assert.strictEqual(classItem_0!.variableList[29].type, 'WeakMap<object, string>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0033 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0034
  * @tc.name dts2cpp_class_0034
  * @tc.desc dts2cpp class 扩充：50 属性全类型矩阵（规模压测） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0034', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0034.ts',
            `class OTC {
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
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 50);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'any');
      assert.strictEqual(classItem_0!.variableList[4].name, 'p4');
      assert.strictEqual(classItem_0!.variableList[4].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[5].name, 'p5');
      assert.strictEqual(classItem_0!.variableList[5].type, 'null');
      assert.strictEqual(classItem_0!.variableList[6].name, 'p6');
      assert.strictEqual(classItem_0!.variableList[6].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[7].name, 'p7');
      assert.strictEqual(classItem_0!.variableList[7].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[8].name, 'p8');
      assert.strictEqual(classItem_0!.variableList[8].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[9].name, 'p9');
      assert.strictEqual(classItem_0!.variableList[9].type, 'object');
      assert.strictEqual(classItem_0!.variableList[10].name, 'p10');
      assert.strictEqual(classItem_0!.variableList[10].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[11].name, 'p11');
      assert.strictEqual(classItem_0!.variableList[11].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[12].name, 'p12');
      assert.strictEqual(classItem_0!.variableList[12].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[13].name, 'p13');
      assert.strictEqual(classItem_0!.variableList[13].type, 'any[]');
      assert.strictEqual(classItem_0!.variableList[14].name, 'p14');
      assert.strictEqual(classItem_0!.variableList[14].type, 'unknown[]');
      assert.strictEqual(classItem_0!.variableList[15].name, 'p15');
      assert.strictEqual(classItem_0!.variableList[15].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[16].name, 'p16');
      assert.strictEqual(classItem_0!.variableList[16].type, 'Map<number, string>');
      assert.strictEqual(classItem_0!.variableList[17].name, 'p17');
      assert.strictEqual(classItem_0!.variableList[17].type, 'Set<string>');
      assert.strictEqual(classItem_0!.variableList[18].name, 'p18');
      assert.strictEqual(classItem_0!.variableList[18].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[19].name, 'p19');
      assert.strictEqual(classItem_0!.variableList[19].type, 'Record<string, string>');
      assert.strictEqual(classItem_0!.variableList[20].name, 'p20');
      assert.strictEqual(classItem_0!.variableList[20].type, 'Promise<string>');
      assert.strictEqual(classItem_0!.variableList[21].name, 'p21');
      assert.strictEqual(classItem_0!.variableList[21].type, '[string, number]');
      assert.strictEqual(classItem_0!.variableList[22].name, 'p22');
      assert.strictEqual(classItem_0!.variableList[22].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[23].name, 'p23');
      assert.strictEqual(classItem_0!.variableList[23].type, '(a: string) => void');
      assert.strictEqual(classItem_0!.variableList[24].name, 'p24');
      assert.strictEqual(classItem_0!.variableList[24].type, 'Date');
      assert.strictEqual(classItem_0!.variableList[25].name, 'p25');
      assert.strictEqual(classItem_0!.variableList[25].type, 'RegExp');
      assert.strictEqual(classItem_0!.variableList[26].name, 'p26');
      assert.strictEqual(classItem_0!.variableList[26].type, 'Error');
      assert.strictEqual(classItem_0!.variableList[27].name, 'p27');
      assert.strictEqual(classItem_0!.variableList[27].type, 'Uint8Array');
      assert.strictEqual(classItem_0!.variableList[28].name, 'p28');
      assert.strictEqual(classItem_0!.variableList[28].type, 'ArrayBuffer');
      assert.strictEqual(classItem_0!.variableList[29].name, 'p29');
      assert.strictEqual(classItem_0!.variableList[29].type, 'WeakMap<object, string>');
      assert.strictEqual(classItem_0!.variableList[30].name, 'p30');
      assert.strictEqual(classItem_0!.variableList[30].type, 'string[][]');
      assert.strictEqual(classItem_0!.variableList[31].name, 'p31');
      assert.strictEqual(classItem_0!.variableList[31].type, 'Array<Array<number>>');
      assert.strictEqual(classItem_0!.variableList[32].name, 'p32');
      assert.strictEqual(classItem_0!.variableList[32].type, 'Map<string, Set<number>>');
      assert.strictEqual(classItem_0!.variableList[33].name, 'p33');
      assert.strictEqual(classItem_0!.variableList[33].type, 'readonly [string, number]');
      assert.strictEqual(classItem_0!.variableList[34].name, 'p34');
      assert.strictEqual(classItem_0!.variableList[34].type, 'keyof Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[35].name, 'p35');
      assert.strictEqual(classItem_0!.variableList[35].type, 'typeof Date');
      assert.strictEqual(classItem_0!.variableList[36].name, 'p36');
      assert.strictEqual(classItem_0!.variableList[36].type, '{ a: string }');
      assert.strictEqual(classItem_0!.variableList[37].name, 'p37');
      assert.strictEqual(classItem_0!.variableList[37].type, '{ readonly b: number }');
      assert.strictEqual(classItem_0!.variableList[38].name, 'p38');
      assert.strictEqual(classItem_0!.variableList[38].type, 'string & { x: number }');
      assert.strictEqual(classItem_0!.variableList[39].name, 'p39');
      assert.strictEqual(classItem_0!.variableList[39].type, '"lit" | 1');
      assert.strictEqual(classItem_0!.variableList[40].name, 'p40');
      assert.strictEqual(classItem_0!.variableList[40].type, 'Array<string | number>');
      assert.strictEqual(classItem_0!.variableList[41].name, 'p41');
      assert.strictEqual(classItem_0!.variableList[41].type, 'Set<Map<string, number>>');
      assert.strictEqual(classItem_0!.variableList[42].name, 'p42');
      assert.strictEqual(classItem_0!.variableList[42].type, 'Promise<Promise<string>>');
      assert.strictEqual(classItem_0!.variableList[43].name, 'p43');
      assert.strictEqual(classItem_0!.variableList[43].type, 'Uint16Array');
      assert.strictEqual(classItem_0!.variableList[44].name, 'p44');
      assert.strictEqual(classItem_0!.variableList[44].type, 'WeakSet<object>');
      assert.strictEqual(classItem_0!.variableList[45].name, 'p45');
      assert.strictEqual(classItem_0!.variableList[45].type, '{ m(): void }');
      assert.strictEqual(classItem_0!.variableList[46].name, 'p46');
      assert.strictEqual(classItem_0!.variableList[46].type, 'new () => Date');
      assert.strictEqual(classItem_0!.variableList[47].name, 'p47');
      assert.strictEqual(classItem_0!.variableList[47].type, '() => Promise<string>');
      assert.strictEqual(classItem_0!.variableList[48].name, 'p48');
      assert.strictEqual(classItem_0!.variableList[48].type, 'null | undefined');
      assert.strictEqual(classItem_0!.variableList[49].name, 'p49');
      assert.strictEqual(classItem_0!.variableList[49].type, 'symbol | string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0034 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0035
  * @tc.name dts2cpp_class_0035
  * @tc.desc dts2cpp class 扩充：20 方法返回类型矩阵（基本/数组/元组/联合/函数/对象） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0035', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0035.ts',
            `class OTC {
        m0(): void {}
        m1(): number {}
        m2(): string {}
        m3(): boolean {}
        m4(): any {}
        m5(): unknown {}
        m6(): never {}
        m7(): null {}
        m8(): undefined {}
        m9(): symbol {}
        m10(): bigint {}
        m11(): object {}
        m12(): number[] {}
        m13(): string[][] {}
        m14(): [string, number] {}
        m15(): string | number {}
        m16(): boolean | null {}
        m17(): (a: string) => void {}
        m18(): { a: number } {}
        m19(): void {}
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 20);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[3].name, 'm3');
      assert.strictEqual(classItem_0!.functionList[3].returns, 'boolean');
      assert.strictEqual(classItem_0!.functionList[3].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[4].name, 'm4');
      assert.strictEqual(classItem_0!.functionList[4].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[4].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[5].name, 'm5');
      assert.strictEqual(classItem_0!.functionList[5].returns, 'unknown');
      assert.strictEqual(classItem_0!.functionList[5].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[6].name, 'm6');
      assert.strictEqual(classItem_0!.functionList[6].returns, 'never');
      assert.strictEqual(classItem_0!.functionList[6].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[7].name, 'm7');
      assert.strictEqual(classItem_0!.functionList[7].returns, 'null');
      assert.strictEqual(classItem_0!.functionList[7].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[8].name, 'm8');
      assert.strictEqual(classItem_0!.functionList[8].returns, 'undefined');
      assert.strictEqual(classItem_0!.functionList[8].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[9].name, 'm9');
      assert.strictEqual(classItem_0!.functionList[9].returns, 'symbol');
      assert.strictEqual(classItem_0!.functionList[9].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[10].name, 'm10');
      assert.strictEqual(classItem_0!.functionList[10].returns, 'bigint');
      assert.strictEqual(classItem_0!.functionList[10].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[11].name, 'm11');
      assert.strictEqual(classItem_0!.functionList[11].returns, 'object');
      assert.strictEqual(classItem_0!.functionList[11].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[12].name, 'm12');
      assert.strictEqual(classItem_0!.functionList[12].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[12].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[13].name, 'm13');
      assert.strictEqual(classItem_0!.functionList[13].returns, 'string[][]');
      assert.strictEqual(classItem_0!.functionList[13].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[14].name, 'm14');
      assert.strictEqual(classItem_0!.functionList[14].returns, '[string, number]');
      assert.strictEqual(classItem_0!.functionList[14].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[15].name, 'm15');
      assert.strictEqual(classItem_0!.functionList[15].returns, 'string | number');
      assert.strictEqual(classItem_0!.functionList[15].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[16].name, 'm16');
      assert.strictEqual(classItem_0!.functionList[16].returns, 'boolean | null');
      assert.strictEqual(classItem_0!.functionList[16].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[17].name, 'm17');
      assert.strictEqual(classItem_0!.functionList[17].returns, '(a: string) => void');
      assert.strictEqual(classItem_0!.functionList[17].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[18].name, 'm18');
      assert.strictEqual(classItem_0!.functionList[18].returns, '{ a: number }');
      assert.strictEqual(classItem_0!.functionList[18].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[19].name, 'm19');
      assert.strictEqual(classItem_0!.functionList[19].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[19].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0035 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0036
  * @tc.name dts2cpp_class_0036
  * @tc.desc dts2cpp class 扩充：10 方法参数形态矩阵（多参/可选/rest/默认/解构/联合/容器） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0036', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0036.ts',
            `class OTC {
        f1(a: number) {}
        f2(a: number, b: string) {}
        f3(a: number, b: string, c: boolean) {}
        f4(a?: number) {}
        f5(...a: number[]) {}
        f6(a: number = 0) {}
        f7({ a, b }: { a: number; b: number }) {}
        f8([x, y]: [number, number]) {}
        f9(a: string | null) {}
        f10(a: Map<string, number>) {}
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 10);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f1');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'f2');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].parameters[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].name, 'f3');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 3);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[2].parameters[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList[2].parameters[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList[3].name, 'f4');
      assert.strictEqual(classItem_0!.functionList[3].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[3].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[3].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[4].name, 'f5');
      assert.strictEqual(classItem_0!.functionList[4].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[4].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[4].parameters[0].type, 'number[]');
      assert.strictEqual(classItem_0!.functionList[5].name, 'f6');
      assert.strictEqual(classItem_0!.functionList[5].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[5].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[5].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[6].name, 'f7');
      assert.strictEqual(classItem_0!.functionList[6].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[6].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[6].parameters[0].type, '{ a: number; b: number }');
      assert.strictEqual(classItem_0!.functionList[7].name, 'f8');
      assert.strictEqual(classItem_0!.functionList[7].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[7].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[7].parameters[0].type, '[number, number]');
      assert.strictEqual(classItem_0!.functionList[8].name, 'f9');
      assert.strictEqual(classItem_0!.functionList[8].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[8].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[8].parameters[0].type, 'string | null');
      assert.strictEqual(classItem_0!.functionList[9].name, 'f10');
      assert.strictEqual(classItem_0!.functionList[9].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[9].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[9].parameters[0].type, 'Map');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0036 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0037
  * @tc.name dts2cpp_class_0037
  * @tc.desc dts2cpp class 扩充：多参数 + 返回注解方法组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0037', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0037.ts',
            `class OTC {
        f1(a: number, b: string, c: boolean, d: any, e: unknown): string {
          return "";
        }
        f2(a: number[]): number[] {
          return [];
        }
        f3(a: string | number): boolean | null {
          return null;
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f1');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 5);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList[0].parameters[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList[0].parameters[3].type, 'any');
      assert.strictEqual(classItem_0!.functionList[0].parameters[4].type, 'unknown');
      assert.strictEqual(classItem_0!.functionList[1].name, 'f2');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'number[]');
      assert.strictEqual(classItem_0!.functionList[2].name, 'f3');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'boolean | null');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'string | number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0037 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0038
  * @tc.name dts2cpp_class_0038
  * @tc.desc dts2cpp class 扩充：同文件两个完整类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0038', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0038.ts',
            `class OTC1 {
        len: number;
        add(a: number): number {
          return a;
        }
    }
class OTC2 {
        name: string;
        get(): string {
          return this.name;
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 2);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'add');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      const classItem_1 = parseObj.classes.find(item => item.name === 'OTC2');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'name');
      assert.strictEqual(classItem_1!.variableList[0].type, 'string');
      assert.strictEqual(classItem_1!.functionList.length, 1);
      assert.strictEqual(classItem_1!.functionList[0].name, 'get');
      assert.strictEqual(classItem_1!.functionList[0].returns, 'string');
      assert.strictEqual(classItem_1!.functionList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0038 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0039
  * @tc.name dts2cpp_class_0039
  * @tc.desc dts2cpp class 扩充：同文件三个类（多声明吞吐） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0039', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0039.ts',
            `class OTC1 { a: number; }
class OTC2 { b: string; }
class OTC3 { c: boolean; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 3);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'OTC2');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'b');
      assert.strictEqual(classItem_1!.variableList[0].type, 'string');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      const classItem_2 = parseObj.classes.find(item => item.name === 'OTC3');
      assert.ok(classItem_2);
      assert.strictEqual(classItem_2!.variableList.length, 1);
      assert.strictEqual(classItem_2!.variableList[0].name, 'c');
      assert.strictEqual(classItem_2!.variableList[0].type, 'boolean');
      assert.strictEqual(classItem_2!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0039 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0040
  * @tc.name dts2cpp_class_0040
  * @tc.desc dts2cpp class 扩充：双泛型类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0040', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0040.ts',
            `class Pair<A, B> {
        first: A;
        second: B;
        get() {
          return this.first;
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Pair');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'first');
      assert.strictEqual(classItem_0!.variableList[0].type, 'A');
      assert.strictEqual(classItem_0!.variableList[1].name, 'second');
      assert.strictEqual(classItem_0!.variableList[1].type, 'B');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'get');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0040 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0041
  * @tc.name dts2cpp_class_0041
  * @tc.desc dts2cpp class 扩充：属性默认值初始化 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0041', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0041.ts',
            `class OTC {
        len = 0;
        name = "default";
        ok = true;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 3);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, undefined);
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, undefined);
      assert.strictEqual(classItem_0!.variableList[2].name, 'ok');
      assert.strictEqual(classItem_0!.variableList[2].type, undefined);
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0041 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0042
  * @tc.name dts2cpp_class_0042
  * @tc.desc dts2cpp class 扩充：三重重载方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0042', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0042.ts',
            `class OTC {
        f(x: string): string;
        f(x: number): number;
        f(x: boolean): boolean;
        f(x: any): any {
          return x;
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 4);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].name, 'f');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[2].name, 'f');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'boolean');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList[3].name, 'f');
      assert.strictEqual(classItem_0!.functionList[3].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[3].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[3].parameters[0].type, 'any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0042 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0043
  * @tc.name dts2cpp_class_0043
  * @tc.desc dts2cpp class 扩充：中文类名/属性/方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0043', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0043.ts',
            `class 人 {
        名字: string;
        年龄: number;
        打招呼() {
          return "hi";
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === '人');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, '名字');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string');
      assert.strictEqual(classItem_0!.variableList[1].name, '年龄');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, '打招呼');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0043 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0044
  * @tc.name dts2cpp_class_0044
  * @tc.desc dts2cpp class 扩充：空类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0044', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0044.ts',
            `class Empty {}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Empty');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0044 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0045
  * @tc.name dts2cpp_class_0045
  * @tc.desc dts2cpp class 扩充：implements 多接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0045', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0045.ts',
            `interface A { a(): void; }
interface B { b(): void; }
class C implements A, B {
        a() {}
        b() {}
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'C');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'a');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'b');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0045 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0046
  * @tc.name dts2cpp_class_0046
  * @tc.desc dts2cpp class 扩充：三级继承链 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0046', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0046.ts',
            `class Base {
        id: number;
    }
class Mid extends Base {
        name: string;
    }
class Leaf extends Mid {
        ok: boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 3);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Base');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'id');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'Mid');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'name');
      assert.strictEqual(classItem_1!.variableList[0].type, 'string');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      const classItem_2 = parseObj.classes.find(item => item.name === 'Leaf');
      assert.ok(classItem_2);
      assert.strictEqual(classItem_2!.variableList.length, 1);
      assert.strictEqual(classItem_2!.variableList[0].name, 'ok');
      assert.strictEqual(classItem_2!.variableList[0].type, 'boolean');
      assert.strictEqual(classItem_2!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0046 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0047
  * @tc.name dts2cpp_class_0047
  * @tc.desc dts2cpp class 扩充：10 属性 + 10 方法混合大集合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0047', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0047.ts',
            `class OTC {
        p0: number; p1: string; p2: boolean; p3: any; p4: unknown;
        p5: null; p6: undefined; p7: symbol; p8: bigint; p9: object;
        m0() {} m1() {} m2() {} m3() {} m4() {}
        m5() {} m6() {} m7() {} m8() {} m9() {}
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 10);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[3].name, 'p3');
      assert.strictEqual(classItem_0!.variableList[3].type, 'any');
      assert.strictEqual(classItem_0!.variableList[4].name, 'p4');
      assert.strictEqual(classItem_0!.variableList[4].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[5].name, 'p5');
      assert.strictEqual(classItem_0!.variableList[5].type, 'null');
      assert.strictEqual(classItem_0!.variableList[6].name, 'p6');
      assert.strictEqual(classItem_0!.variableList[6].type, 'undefined');
      assert.strictEqual(classItem_0!.variableList[7].name, 'p7');
      assert.strictEqual(classItem_0!.variableList[7].type, 'symbol');
      assert.strictEqual(classItem_0!.variableList[8].name, 'p8');
      assert.strictEqual(classItem_0!.variableList[8].type, 'bigint');
      assert.strictEqual(classItem_0!.variableList[9].name, 'p9');
      assert.strictEqual(classItem_0!.variableList[9].type, 'object');
      assert.strictEqual(classItem_0!.functionList.length, 10);
      assert.strictEqual(classItem_0!.functionList[0].name, 'm0');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'm1');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'm2');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[3].name, 'm3');
      assert.strictEqual(classItem_0!.functionList[3].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[3].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[4].name, 'm4');
      assert.strictEqual(classItem_0!.functionList[4].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[4].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[5].name, 'm5');
      assert.strictEqual(classItem_0!.functionList[5].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[5].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[6].name, 'm6');
      assert.strictEqual(classItem_0!.functionList[6].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[6].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[7].name, 'm7');
      assert.strictEqual(classItem_0!.functionList[7].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[7].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[8].name, 'm8');
      assert.strictEqual(classItem_0!.functionList[8].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[8].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[9].name, 'm9');
      assert.strictEqual(classItem_0!.functionList[9].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[9].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0047 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0048
  * @tc.name dts2cpp_class_0048
  * @tc.desc dts2cpp class 扩充：字面量/交集/模板/联合属性矩阵 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0048', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0048.ts',
            `class OTC {
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
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 8);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string | number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'b');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string & { brand: "x" }');
      assert.strictEqual(classItem_0!.variableList[2].name, 'c');
      assert.strictEqual(classItem_0!.variableList[2].type, '"lit"');
      assert.strictEqual(classItem_0!.variableList[3].name, 'd');
      assert.strictEqual(classItem_0!.variableList[3].type, '42');
      assert.strictEqual(classItem_0!.variableList[4].name, 'e');
      assert.strictEqual(classItem_0!.variableList[4].type, 'true');
      assert.strictEqual(classItem_0!.variableList[5].name, 'f');
      assert.strictEqual(classItem_0!.variableList[5].type, '`tpl-${string}`');
      assert.strictEqual(classItem_0!.variableList[6].name, 'g');
      assert.strictEqual(classItem_0!.variableList[6].type, 'Date | null');
      assert.strictEqual(classItem_0!.variableList[7].name, 'h');
      assert.strictEqual(classItem_0!.variableList[7].type, '{ x: number } | { y: string }');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0048 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0049
  * @tc.name dts2cpp_class_0049
  * @tc.desc dts2cpp class 扩充：字面量联合参数与返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0049', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0049.ts',
            `class OTC {
        f(a: "on" | "off"): "yes" | "no" {
          return "yes";
        }
        g(x: 1 | 2): 3 | 4 {
          return 3;
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, '"yes" | "no"');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, '"on" | "off"');
      assert.strictEqual(classItem_0!.functionList[1].name, 'g');
      assert.strictEqual(classItem_0!.functionList[1].returns, '3 | 4');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, '1 | 2');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0049 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0050
  * @tc.name dts2cpp_class_0050
  * @tc.desc dts2cpp class 扩充：内置对象引用联合参数/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0050', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0050.ts',
            `class OTC {
        get(): Date | null {
          return null;
        }
        set(v: Date | null) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'get');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'Date | null');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'set');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'Date | null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0050 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0051
  * @tc.name dts2cpp_class_0051
  * @tc.desc dts2cpp class 扩充：数组参数/多维数组返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0051', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0051.ts',
            `class OTC {
        f(a: number): number[] {
          return [];
        }
        g(a: string[]): string[][] {
          return [];
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'g');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'string[][]');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'string[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0051 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0051 执行异常: ${String(err)}`);
    }
  });

});
