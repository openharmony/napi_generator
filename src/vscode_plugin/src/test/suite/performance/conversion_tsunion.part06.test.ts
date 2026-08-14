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
const PARSE_TOTAL_MS = 6000;      // 解析 10 次 ≤ 6s（实测约 4.2~4.7s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_DTS2CPP_Union_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Union_Suite.');

  /**
  * @tc.number dts2cpp_union_0151
  * @tc.name dts2cpp_union_0151
  * @tc.desc dts2cpp union type alias `type UnionType0178 = null | undefined` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0151', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0151.ts',
            `type UnionType0178 = null | undefined;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0178');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'null');
      assert.strictEqual(typeItem!.types[1], 'undefined');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0151 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0151 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0152
  * @tc.name dts2cpp_union_0152
  * @tc.desc dts2cpp union type alias bigint 字面量联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0152', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0152.ts',
            `type UnionType0179 = 0n | 1n | 2n;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0179');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '0n');
      assert.strictEqual(typeItem!.types[1], '1n');
      assert.strictEqual(typeItem!.types[2], '2n');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0152 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0152 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0153
  * @tc.name dts2cpp_union_0153
  * @tc.desc dts2cpp union type alias 浮点字面量联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0153', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0153.ts',
            `type UnionType0180 = 1.5 | 2.5 | 3.5;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0180');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '1.5');
      assert.strictEqual(typeItem!.types[1], '2.5');
      assert.strictEqual(typeItem!.types[2], '3.5');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0153 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0154
  * @tc.name dts2cpp_union_0154
  * @tc.desc dts2cpp union type alias 三接口联合 Err | Warn | Info 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0154', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0154.ts',
            `interface Err { msg: string; }
interface Warn { code: number; }
interface Info { detail: boolean; }
type UnionType0181 = Err | Warn | Info;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0181');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Err');
      assert.strictEqual(typeItem!.types[1], 'Warn');
      assert.strictEqual(typeItem!.types[2], 'Info');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0154 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0155
  * @tc.name dts2cpp_union_0155
  * @tc.desc dts2cpp union type alias Error 继承链联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0155', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0155.ts',
            `type UnionType0182 = Error | TypeError | RangeError;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0182');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Error');
      assert.strictEqual(typeItem!.types[1], 'TypeError');
      assert.strictEqual(typeItem!.types[2], 'RangeError');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0155 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0156
  * @tc.name dts2cpp_union_0156
  * @tc.desc dts2cpp union type alias Date | number | string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0156', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0156.ts',
            `type UnionType0183 = Date | number | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0183');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Date');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], 'string');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0156 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0157
  * @tc.name dts2cpp_union_0157
  * @tc.desc dts2cpp union type alias RegExp | string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0157', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0157.ts',
            `type UnionType0184 = RegExp | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0184');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'RegExp');
      assert.strictEqual(typeItem!.types[1], 'string');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0157 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0157 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0158
  * @tc.name dts2cpp_union_0158
  * @tc.desc dts2cpp union type alias ArrayBuffer 系列联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0158', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0158.ts',
            `type UnionType0185 = ArrayBuffer | SharedArrayBuffer | ArrayBufferView;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0185');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'ArrayBuffer');
      assert.strictEqual(typeItem!.types[1], 'SharedArrayBuffer');
      assert.strictEqual(typeItem!.types[2], 'ArrayBufferView');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0158 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0159
  * @tc.name dts2cpp_union_0159
  * @tc.desc dts2cpp union type alias Map 泛型参数内含 union 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0159', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0159.ts',
            `type UnionType0186 = Map<string, string | number> | Map<string, boolean>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0186');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<string, string | number>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, boolean>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0159 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0160
  * @tc.name dts2cpp_union_0160
  * @tc.desc dts2cpp union type alias Array 泛型参数内含 union 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0160', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0160.ts',
            `type UnionType0187 = Array<string | number> | Array<boolean | null>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0187');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<string | number>');
      assert.strictEqual(typeItem!.types[1], 'Array<boolean | null>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0160 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0161
  * @tc.name dts2cpp_union_0161
  * @tc.desc dts2cpp union type alias Record key/value 含 union 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0161', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0161.ts',
            `type UnionType0188 = Record<"a" | "b", string | number> | Record<"c" | "d", boolean>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0188');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<"a" | "b", string | number>');
      assert.strictEqual(typeItem!.types[1], 'Record<"c" | "d", boolean>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0161 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0162
  * @tc.name dts2cpp_union_0162
  * @tc.desc dts2cpp union type alias Promise<void> | void 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0162', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0162.ts',
            `type UnionType0189 = Promise<void> | void;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0189');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Promise<void>');
      assert.strictEqual(typeItem!.types[1], 'void');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0162 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0163
  * @tc.name dts2cpp_union_0163
  * @tc.desc dts2cpp union type alias never/void 返回函数联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0163', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0163.ts',
            `type UnionType0190 = (() => never) | (() => void);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0190');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(() => never)');
      assert.strictEqual(typeItem!.types[1], '(() => void)');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0163 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0164
  * @tc.name dts2cpp_union_0164
  * @tc.desc dts2cpp union type alias 索引签名对象联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0164', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0164.ts',
            `type UnionType0191 = { [key: string]: number | string } | { [key: number]: boolean };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0191');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ [key: string]: number | string }');
      assert.strictEqual(typeItem!.types[1], '{ [key: number]: boolean }');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0164 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0164 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0165
  * @tc.name dts2cpp_union_0165
  * @tc.desc dts2cpp union type alias 可选属性对象联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0165', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0165.ts',
            `type UnionType0192 = { a?: string } | { b?: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0192');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ a?: string }');
      assert.strictEqual(typeItem!.types[1], '{ b?: number }');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0165 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0165 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0166
  * @tc.name dts2cpp_union_0166
  * @tc.desc dts2cpp union type alias 泛型 Box 接口联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0166', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0166.ts',
            `interface Box<T> { value: T; }
type UnionType0193 = Box<string> | Box<number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0193');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Box<string>');
      assert.strictEqual(typeItem!.types[1], 'Box<number>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0166 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0166 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0167
  * @tc.name dts2cpp_union_0167
  * @tc.desc dts2cpp union type alias (string|number)[] 与成员混联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0167', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0167.ts',
            `type UnionType0194 = (string | number)[] | string | number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0194');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '(string | number)[]');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.strictEqual(typeItem!.types[2], 'number');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0167 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0167 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0168
  * @tc.name dts2cpp_union_0168
  * @tc.desc dts2cpp union type alias readonly 数组两种写法联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0168', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0168.ts',
            `type UnionType0195 = readonly string[] | ReadonlyArray<number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0195');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly string[]');
      assert.strictEqual(typeItem!.types[1], 'ReadonlyArray<number>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0168 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0168 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0169
  * @tc.name dts2cpp_union_0169
  * @tc.desc dts2cpp union type alias 可选元素 tuple 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0169', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0169.ts',
            `type UnionType0196 = [string, number, boolean?] | [number];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0196');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[string, number, boolean?]');
      assert.strictEqual(typeItem!.types[1], '[number]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0170
  * @tc.name dts2cpp_union_0170
  * @tc.desc dts2cpp union type alias 状态字面量联合 idle/loading/success/error/cancelled 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0170', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0170.ts',
            `type UnionType0197 = "idle" | "loading" | "success" | "error" | "cancelled";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0197');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '"idle"');
      assert.strictEqual(typeItem!.types[1], '"loading"');
      assert.strictEqual(typeItem!.types[2], '"success"');
      assert.strictEqual(typeItem!.types[3], '"error"');
      assert.strictEqual(typeItem!.types[4], '"cancelled"');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0171
  * @tc.name dts2cpp_union_0171
  * @tc.desc dts2cpp union type alias 平台字面量联合 web/ios/other/harmony/windows 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0171', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0171.ts',
            `type UnionType0198 = "web" | "ios" | "other" | "harmony" | "windows";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0198');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '"web"');
      assert.strictEqual(typeItem!.types[1], '"ios"');
      assert.strictEqual(typeItem!.types[2], '"other"');
      assert.strictEqual(typeItem!.types[3], '"harmony"');
      assert.strictEqual(typeItem!.types[4], '"windows"');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0172
  * @tc.name dts2cpp_union_0172
  * @tc.desc dts2cpp union type alias Pick | Omit 组合联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0172', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0172.ts',
            `interface Todo { title: string; completed: boolean; createdAt: number; }
type UnionType0199 = Pick<Todo, "title" | "completed"> | Omit<Todo, "title">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0199');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Pick<Todo, "title" | "completed">');
      assert.strictEqual(typeItem!.types[1], 'Omit<Todo, "title">');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0173
  * @tc.name dts2cpp_union_0173
  * @tc.desc dts2cpp union type alias prefix/suffix 模板字面量联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0173', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0173.ts',
            `type UnionType0200 = \`prefix-\${string}\` | \`suffix-\${number}\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0200');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`prefix-${string}`');
      assert.strictEqual(typeItem!.types[1], '`suffix-${number}`');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0174
  * @tc.name dts2cpp_union_0174
  * @tc.desc dts2cpp union type alias CSS 单位模板字面量联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0174', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0174.ts',
            `type UnionType0201 = \`\${number}px\` | \`\${number}%\` | \`\${number}em\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0201');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '`${number}px`');
      assert.strictEqual(typeItem!.types[1], '`${number}%`');
      assert.strictEqual(typeItem!.types[2], '`${number}em`');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0175
  * @tc.name dts2cpp_union_0175
  * @tc.desc dts2cpp union type alias Function | string | number 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0175', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0175.ts',
            `type UnionType0202 = Function | string | number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0202');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Function');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.strictEqual(typeItem!.types[2], 'number');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0176
  * @tc.name dts2cpp_union_0176
  * @tc.desc dts2cpp union type alias IArguments | unknown[] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0176', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0176.ts',
            `type UnionType0203 = IArguments | unknown[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0203');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'IArguments');
      assert.strictEqual(typeItem!.types[1], 'unknown[]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0177
  * @tc.name dts2cpp_union_0177
  * @tc.desc dts2cpp union type alias URL | string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0177', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0177.ts',
            `type UnionType0204 = URL | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0204');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'URL');
      assert.strictEqual(typeItem!.types[1], 'string');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0178
  * @tc.name dts2cpp_union_0178
  * @tc.desc dts2cpp union type alias 构造签名 | Date 联合（alias 形态）的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0178', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0178.ts',
            `type UnionType0205 = new (s: string) => Date | Date;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0205');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(typeItem!.alias.includes('new (s: string) => Date'));
      assert.ok(typeItem!.alias.includes('Date'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0179
  * @tc.name dts2cpp_union_0179
  * @tc.desc dts2cpp union type alias typeof globalThis | typeof window 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0179', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0179.ts',
            `type UnionType0206 = typeof globalThis | typeof window;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0206');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'typeof globalThis');
      assert.strictEqual(typeItem!.types[1], 'typeof window');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0180
  * @tc.name dts2cpp_union_0180
  * @tc.desc dts2cpp union type alias kind 判别联合 circle/rect/tri 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0180', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0180.ts',
            `interface A { kind: "circle"; r: number; }
interface B { kind: "rect"; w: number; h: number; }
interface C { kind: "tri"; base: number; height: number; }
type UnionType0207 = A | B | C;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0207');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'A');
      assert.strictEqual(typeItem!.types[1], 'B');
      assert.strictEqual(typeItem!.types[2], 'C');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0181
  * @tc.name dts2cpp_union_0181
  * @tc.desc dts2cpp union type alias 权限字面量 read/write/execute/admin 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0181', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0181.ts',
            `type UnionType0208 = "read" | "write" | "execute" | "admin";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0208');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], '"read"');
      assert.strictEqual(typeItem!.types[1], '"write"');
      assert.strictEqual(typeItem!.types[2], '"execute"');
      assert.strictEqual(typeItem!.types[3], '"admin"');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0182
  * @tc.name dts2cpp_union_0182
  * @tc.desc dts2cpp union type alias 通道数字字面量 1|2|3|4|5|6 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0182', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0182.ts',
            `type UnionType0209 = 1 | 2 | 3 | 4 | 5 | 6;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0209');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 6);
      assert.strictEqual(typeItem!.types[0], '1');
      assert.strictEqual(typeItem!.types[1], '2');
      assert.strictEqual(typeItem!.types[2], '3');
      assert.strictEqual(typeItem!.types[3], '4');
      assert.strictEqual(typeItem!.types[4], '5');
      assert.strictEqual(typeItem!.types[5], '6');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0183
  * @tc.name dts2cpp_union_0183
  * @tc.desc dts2cpp union type alias branded intersection 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0183', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0183.ts',
            `type UnionType0210 = string & { readonly __brand: "USD" } | number & { readonly __brand: "EUR" };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0210');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string & { readonly __brand: "USD" }');
      assert.strictEqual(typeItem!.types[1], 'number & { readonly __brand: "EUR" }');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0184
  * @tc.name dts2cpp_union_0184
  * @tc.desc dts2cpp union type alias 类型别名引用 U|V|boolean 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0184', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0184.ts',
            `type U = string;
type V = number;
type UnionType0211 = U | V | boolean;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0211');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'U');
      assert.strictEqual(typeItem!.types[1], 'V');
      assert.strictEqual(typeItem!.types[2], 'boolean');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0185
  * @tc.name dts2cpp_union_0185
  * @tc.desc dts2cpp union type alias ReadonlySet | ReadonlyMap | readonly array 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0185', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0185.ts',
            `type UnionType0212 = ReadonlySet<string> | ReadonlyMap<string, number> | readonly string[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0212');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'ReadonlySet<string>');
      assert.strictEqual(typeItem!.types[1], 'ReadonlyMap<string, number>');
      assert.strictEqual(typeItem!.types[2], 'readonly string[]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0185 执行异常: ${String(err)}`);
    }
  });

});
