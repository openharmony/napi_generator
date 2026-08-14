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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Struct_Suite part05.');

  /**
  * @tc.number dts2cpp_struct_0285
  * @tc.name dts2cpp_struct_0285
  * @tc.desc dts2cpp struct 扩充-泛型/继承：泛型约束 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0285', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0285.ts',
            `interface GIf5<T extends { length: number }> {
        v: T;
        set(a: T): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'GIf5');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'v');
      assert.strictEqual(item_0!.members[0].type, 'T');
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'set');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0285 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0286
  * @tc.name dts2cpp_struct_0286
  * @tc.desc dts2cpp struct 扩充-泛型/继承：泛型继承基接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0286', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0286.ts',
            `interface BaseI6 {
        id: number;
    }
interface GIf6<T> extends BaseI6 {
        v: T;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 2);
      const item_0 = parseObj.structs.find(item => item.name === 'BaseI6');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'id');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'GIf6');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'v');
      assert.strictEqual(item_1!.members[0].type, 'T');
      assert.strictEqual(item_1!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0286 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0287
  * @tc.name dts2cpp_struct_0287
  * @tc.desc dts2cpp struct 扩充-泛型/继承：泛型方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0287', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0287.ts',
            `interface GIf7 {
        get<T>(a: T): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'GIf7');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'get');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0287 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0287 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0288
  * @tc.name dts2cpp_struct_0288
  * @tc.desc dts2cpp struct 扩充-泛型/继承：泛型容器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0288', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0288.ts',
            `interface GIf8<T> {
        m: Map<string, T>;
        s: Set<T>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'GIf8');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'm');
      assert.strictEqual(item_0!.members[0].type, 'Map<string, T>');
      assert.strictEqual(item_0!.members[1].name, 's');
      assert.strictEqual(item_0!.members[1].type, 'Set<T>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0288 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0289
  * @tc.name dts2cpp_struct_0289
  * @tc.desc dts2cpp struct 扩充-泛型/继承：二级继承 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0289', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0289.ts',
            `interface BaseI9 {
        id: number;
    }
interface MidI9 extends BaseI9 {
        name: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 2);
      const item_0 = parseObj.structs.find(item => item.name === 'BaseI9');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'id');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'MidI9');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'name');
      assert.strictEqual(item_1!.members[0].type, 'string');
      assert.strictEqual(item_1!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0289 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0289 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0290
  * @tc.name dts2cpp_struct_0290
  * @tc.desc dts2cpp struct 扩充-泛型/继承：三级继承 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0290', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0290.ts',
            `interface BaseI10 {
        id: number;
    }
interface MidI10 extends BaseI10 {
        name: string;
    }
interface LeafI10 extends MidI10 {
        ok: boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 3);
      const item_0 = parseObj.structs.find(item => item.name === 'BaseI10');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'id');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'MidI10');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'name');
      assert.strictEqual(item_1!.members[0].type, 'string');
      assert.strictEqual(item_1!.functions.length, 0);
      const item_2 = parseObj.structs.find(item => item.name === 'LeafI10');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'ok');
      assert.strictEqual(item_2!.members[0].type, 'boolean');
      assert.strictEqual(item_2!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0290 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0290 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0291
  * @tc.name dts2cpp_struct_0291
  * @tc.desc dts2cpp struct 扩充-泛型/继承：多级继承链 4 层 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0291', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0291.ts',
            `interface L1 { a: number; }
interface L2 extends L1 { b: string; }
interface L3 extends L2 { c: boolean; }
interface L4 extends L3 { d: any; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 4);
      const item_0 = parseObj.structs.find(item => item.name === 'L1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'L2');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'b');
      assert.strictEqual(item_1!.members[0].type, 'string');
      assert.strictEqual(item_1!.functions.length, 0);
      const item_2 = parseObj.structs.find(item => item.name === 'L3');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'c');
      assert.strictEqual(item_2!.members[0].type, 'boolean');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.structs.find(item => item.name === 'L4');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'd');
      assert.strictEqual(item_3!.members[0].type, 'any');
      assert.strictEqual(item_3!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0291 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0291 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0292
  * @tc.name dts2cpp_struct_0292
  * @tc.desc dts2cpp struct 扩充-泛型/继承：菱形继承 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0292', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0292.ts',
            `interface D1 { a: number; }
interface D2 extends D1 { b: string; }
interface D3 extends D1 { c: boolean; }
interface D4 extends D2, D3 { d: any; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 4);
      const item_0 = parseObj.structs.find(item => item.name === 'D1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'D2');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'b');
      assert.strictEqual(item_1!.members[0].type, 'string');
      assert.strictEqual(item_1!.functions.length, 0);
      const item_2 = parseObj.structs.find(item => item.name === 'D3');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'c');
      assert.strictEqual(item_2!.members[0].type, 'boolean');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.structs.find(item => item.name === 'D4');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'd');
      assert.strictEqual(item_3!.members[0].type, 'any');
      assert.strictEqual(item_3!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0292 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0292 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0293
  * @tc.name dts2cpp_struct_0293
  * @tc.desc dts2cpp struct 扩充-泛型/继承：索引签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0293', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0293.ts',
            `interface IdxI13 {
        [k: string]: number;
        [n: number]: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IdxI13');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0293 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0294
  * @tc.name dts2cpp_struct_0294
  * @tc.desc dts2cpp struct 扩充-泛型/继承：方法重载 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0294', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0294.ts',
            `interface OvlI14 {
        f(x: string): string;
        f(x: number): number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'OvlI14');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 2);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'string');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[1].name, 'f');
      assert.strictEqual(item_0!.functions[1].returns, 'number');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0294 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0294 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0295
  * @tc.name dts2cpp_struct_0295
  * @tc.desc dts2cpp struct 扩充-泛型/继承：判别联合接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0295', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0295.ts',
            `interface Shape15 {
        kind: "circle" | "square";
        area(): number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Shape15');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'kind');
      assert.strictEqual(item_0!.members[0].type, '"circle" | "square"');
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'area');
      assert.strictEqual(item_0!.functions[0].returns, 'number');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0295 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0296
  * @tc.name dts2cpp_struct_0296
  * @tc.desc dts2cpp struct 扩充-边界：空接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0296', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0296.ts',
            `interface EdgeI1 {}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0296 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0297
  * @tc.name dts2cpp_struct_0297
  * @tc.desc dts2cpp struct 扩充-边界：单行接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0297', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0297.ts',
            `interface EdgeI2 { a: number; b: string; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'b');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0297 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0297 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0298
  * @tc.name dts2cpp_struct_0298
  * @tc.desc dts2cpp struct 扩充-边界：注释接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0298', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0298.ts',
            `/* interface EdgeI3 { a: number; } */`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0298 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0299
  * @tc.name dts2cpp_struct_0299
  * @tc.desc dts2cpp struct 扩充-边界：成员初始化非法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0299', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0299.ts',
            `interface EdgeI4 {
        a = 1;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI4');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0299 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0300
  * @tc.name dts2cpp_struct_0300
  * @tc.desc dts2cpp struct 扩充-边界：中文接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0300', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0300.ts',
            `interface 边缘接口 {
        数值: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === '边缘接口');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, '数值');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0300 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0301
  * @tc.name dts2cpp_struct_0301
  * @tc.desc dts2cpp struct 扩充-边界：装饰器成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0301', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0301.ts',
            `interface EdgeI6 {
        @dec a: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI6');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0301 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0301 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0302
  * @tc.name dts2cpp_struct_0302
  * @tc.desc dts2cpp struct 扩充-边界：方法参数解构 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0302', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0302.ts',
            `interface EdgeI7 {
        f({ a, b }: { a: number; b: number }): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI7');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, '{ a: number; b: number }');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0302 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0303
  * @tc.name dts2cpp_struct_0303
  * @tc.desc dts2cpp struct 扩充-边界：方法 rest 参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0303', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0303.ts',
            `interface EdgeI8 {
        f(...args: number[]): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI8');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0303 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0304
  * @tc.name dts2cpp_struct_0304
  * @tc.desc dts2cpp struct 扩充-边界：readonly 数组成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0304', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0304.ts',
            `interface EdgeI9 {
        ro: readonly string[];
        ro2: ReadonlyArray<number>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI9');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'ro');
      assert.strictEqual(item_0!.members[0].type, 'readonly string[]');
      assert.strictEqual(item_0!.members[1].name, 'ro2');
      assert.strictEqual(item_0!.members[1].type, 'ReadonlyArray<number>');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0304 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0304 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0305
  * @tc.name dts2cpp_struct_0305
  * @tc.desc dts2cpp struct 扩充-边界：键值对接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0305', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0305.ts',
            `interface EdgeI10 {
        [key: string]: string | number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI10');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0305 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0306
  * @tc.name dts2cpp_struct_0306
  * @tc.desc dts2cpp struct 扩充-边界：混合成员方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0306', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0306.ts',
            `interface EdgeI11 {
        id: number;
        name: string;
        get(): string;
        set(v: string): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI11');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'id');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'name');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 2);
      assert.strictEqual(item_0!.functions[0].name, 'get');
      assert.strictEqual(item_0!.functions[0].returns, 'string');
      assert.strictEqual(item_0!.functions[0].parameters.length, 0);
      assert.strictEqual(item_0!.functions[1].name, 'set');
      assert.strictEqual(item_0!.functions[1].returns, 'void');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0306 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0306 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0307
  * @tc.name dts2cpp_struct_0307
  * @tc.desc dts2cpp struct 扩充-边界：属性为函数类型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0307', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0307.ts',
            `interface EdgeI12 {
        cb: (a: string) => void;
        cb2: (a: number, b: string) => boolean;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'EdgeI12');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'cb');
      assert.strictEqual(item_0!.members[0].type, '(a: string) => void');
      assert.strictEqual(item_0!.members[1].name, 'cb2');
      assert.strictEqual(item_0!.members[1].type, '(a: number, b: string) => boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0307 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0307 执行异常: ${String(err)}`);
    }
  });

});

