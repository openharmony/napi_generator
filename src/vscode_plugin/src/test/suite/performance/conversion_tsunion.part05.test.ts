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
const PARSE_TOTAL_MS = 6000;      // 解析 10 次 ≤ 6s（实测约 4.5~6s/用例）

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
  * @tc.number dts2cpp_union_0120
  * @tc.name dts2cpp_union_0120
  * @tc.desc dts2cpp union type alias Exclude 批量（3 个 type，对齐 parsetsunion test_16）
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0120', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0120.ts',
            `type UnionType0120 = Exclude<"a" | "b" | "c", "a">;
type UnionType0121 = Exclude<"a" | "b" | "c", "a" | "b">;
type UnionType0122 = Exclude<string | number | (() => void), Function>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 3);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0120'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0121'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0122'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0120 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0121
  * @tc.name dts2cpp_union_0121
  * @tc.desc dts2cpp union type alias Parameters 全量批量 T0-T7（对齐 parsetsunion test_19）
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0121', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0121.ts',
            `declare function f1(): { a: number; b: string };
type UnionType0123 = Parameters<() => string>;
type UnionType0124 = Parameters<(s: string) => void>;
type UnionType0125 = Parameters<<T>(arg: T) => T>;
type UnionType0126 = Parameters<typeof f1>;
type UnionType0127 = Parameters<any>;
type UnionType0128 = Parameters<never>;
type UnionType0129 = Parameters<string>;
type UnionType0130 = Parameters<Function>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 8);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0123'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0124'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0125'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0126'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0127'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0128'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0129'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0130'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0121 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0122
  * @tc.name dts2cpp_union_0122
  * @tc.desc dts2cpp union type alias ReturnType 全量批量 T0-T8（对齐 parsetsunion test_21）
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0122', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0122.ts',
            `declare function f1(): { a: number; b: string };
type UnionType0131 = ReturnType<() => string>;
type UnionType0132 = ReturnType<(s: string) => void>;
type UnionType0133 = ReturnType<<T>() => T>;
type UnionType0134 = ReturnType<<T extends U, U extends number[]>() => T>;
type UnionType0135 = ReturnType<typeof f1>;
type UnionType0136 = ReturnType<any>;
type UnionType0137 = ReturnType<never>;
type UnionType0138 = ReturnType<string>;
type UnionType0139 = ReturnType<Function>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 9);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0131'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0132'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0133'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0134'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0135'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0136'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0137'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0138'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0139'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0122 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0123
  * @tc.name dts2cpp_union_0123
  * @tc.desc dts2cpp union type alias ConstructorParameters 全量批量（对齐 parsetsunion test_20）
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0123', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0123.ts',
            `type UnionType0140 = ConstructorParameters<ErrorConstructor>;
type UnionType0141 = ConstructorParameters<FunctionConstructor>;
type UnionType0142 = ConstructorParameters<RegExpConstructor>;
type UnionType0143 = ConstructorParameters<any>;
type UnionType0144 = ConstructorParameters<Function>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 5);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0140'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0141'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0142'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0143'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0144'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0123 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0124
  * @tc.name dts2cpp_union_0124
  * @tc.desc dts2cpp union type alias InstanceType 全量批量（对齐 parsetsunion test_22）
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0124', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0124.ts',
            `class C { x = 0; y = 0; }
type UnionType0145 = InstanceType<typeof C>;
type UnionType0146 = InstanceType<any>;
type UnionType0147 = InstanceType<never>;
type UnionType0148 = InstanceType<string>;
type UnionType0149 = InstanceType<Function>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 5);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0145'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0146'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0147'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0148'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0149'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0124 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0125
  * @tc.name dts2cpp_union_0125
  * @tc.desc dts2cpp union type alias Extract 批量（对齐 parsetsunion test_17）
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0125', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0125.ts',
            `type UnionType0150 = Extract<"a" | "b" | "c", "a" | "f">;
type UnionType0151 = Extract<string | number | (() => void), Function>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 2);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0150'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0151'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0125 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0126
  * @tc.name dts2cpp_union_0126
  * @tc.desc dts2cpp union type alias NonNullable 批量（对齐 parsetsunion test_18）
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0126', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0126.ts',
            `type UnionType0152 = NonNullable<string | number | undefined>;
type UnionType0153 = NonNullable<string[] | null | undefined>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 2);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0152'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0153'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0126 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0126 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0127
  * @tc.name dts2cpp_union_0127
  * @tc.desc dts2cpp union type alias `type UnionType0154 = Float32Array | Float64Array | Int16Array | Int32Array` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0127', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0127.ts',
            `type UnionType0154 = Float32Array | Float64Array | Int16Array | Int32Array;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0154');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'Float32Array');
      assert.strictEqual(typeItem!.types[1], 'Float64Array');
      assert.strictEqual(typeItem!.types[2], 'Int16Array');
      assert.strictEqual(typeItem!.types[3], 'Int32Array');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0127 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0127 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0128
  * @tc.name dts2cpp_union_0128
  * @tc.desc dts2cpp union type alias `type UnionType0155 = Generator<string, number, boolean> | AsyncGenerator<string, number, boolean>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0128', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0128.ts',
            `type UnionType0155 = Generator<string, number, boolean> | AsyncGenerator<string, number, boolean>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0155');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Generator<string, number, boolean>');
      assert.strictEqual(typeItem!.types[1], 'AsyncGenerator<string, number, boolean>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0128 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0128 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0129
  * @tc.name dts2cpp_union_0129
  * @tc.desc dts2cpp union type alias `type UnionType0156 = Iterator<string> | Iterable<string> | IterableIterator<string>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0129', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0129.ts',
            `type UnionType0156 = Iterator<string> | Iterable<string> | IterableIterator<string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0156');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Iterator<string>');
      assert.strictEqual(typeItem!.types[1], 'Iterable<string>');
      assert.strictEqual(typeItem!.types[2], 'IterableIterator<string>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0129 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0129 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0130
  * @tc.name dts2cpp_union_0130
  * @tc.desc dts2cpp union type alias 接口判别联合 Node | Leaf | Branch 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0130', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0130.ts',
            `interface Node { kind: "node"; id: string; }
interface Leaf { kind: "leaf"; value: number; }
interface Branch { kind: "branch"; children: Node[]; }
type UnionType0157 = Node | Leaf | Branch;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0157');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Node');
      assert.strictEqual(typeItem!.types[1], 'Leaf');
      assert.strictEqual(typeItem!.types[2], 'Branch');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0130 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0130 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0131
  * @tc.name dts2cpp_union_0131
  * @tc.desc dts2cpp union type alias enum + 字面量 + 模板字面量联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0131', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0131.ts',
            `enum Color { Red, Green, Blue }
type UnionType0158 = Color | "transparent" | \`#\${string}\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0158');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Color');
      assert.strictEqual(typeItem!.types[1], '"transparent"');
      assert.strictEqual(typeItem!.types[2], '`#${string}`');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0131 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0131 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0132
  * @tc.name dts2cpp_union_0132
  * @tc.desc dts2cpp union type alias Map/Record 字面量 key 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0132', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0132.ts',
            `type UnionType0159 = Map<"a" | "b" | "c", number> | Record<"a" | "b" | "c", number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0159');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<"a" | "b" | "c", number>');
      assert.strictEqual(typeItem!.types[1], 'Record<"a" | "b" | "c", number>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0132 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0132 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0133
  * @tc.name dts2cpp_union_0133
  * @tc.desc dts2cpp union type alias Partial/Required Record 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0133', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0133.ts',
            `type UnionType0160 = Partial<Record<"a" | "b" | "c", number>> | Required<Record<"x" | "y", string>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0160');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Partial<Record<"a" | "b" | "c", number>>');
      assert.strictEqual(typeItem!.types[1], 'Required<Record<"x" | "y", string>>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0133 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0133 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0134
  * @tc.name dts2cpp_union_0134
  * @tc.desc dts2cpp union type alias 可变/只读 rest tuple 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0134', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0134.ts',
            `type UnionType0161 = [number, ...string[]] | readonly [number, ...string[]];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0161');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[number, ...string[]]');
      assert.strictEqual(typeItem!.types[1], 'readonly [number, ...string[]]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0134 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0134 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0135
  * @tc.name dts2cpp_union_0135
  * @tc.desc dts2cpp union type alias Awaited<Promise<union>> | boolean 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0135', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0135.ts',
            `type UnionType0162 = Awaited<Promise<string | number>> | boolean;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0162');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Awaited<Promise<string | number>>');
      assert.strictEqual(typeItem!.types[1], 'boolean');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0135 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0135 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0136
  * @tc.name dts2cpp_union_0136
  * @tc.desc dts2cpp union type alias Omit/Pick 组合联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0136', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0136.ts',
            `interface Options { width: number; title: string; }
type UnionType0163 = Omit<Pick<Options, "width" | "title">, "width"> | Pick<Options, "title">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0163');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Omit<Pick<Options, "width" | "title">, "width">');
      assert.strictEqual(typeItem!.types[1], 'Pick<Options, "title">');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0136 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0136 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0137
  * @tc.name dts2cpp_union_0137
  * @tc.desc dts2cpp union type alias Extract/Exclude 组合联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0137', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0137.ts',
            `type UnionType0164 = Extract<"a" | "b" | "c" | "d", "a" | "c"> | Exclude<"a" | "b" | "c" | "d", "b" | "d">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0164');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Extract<"a" | "b" | "c" | "d", "a" | "c">');
      assert.strictEqual(typeItem!.types[1], 'Exclude<"a" | "b" | "c" | "d", "b" | "d">');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0137 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0137 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0138
  * @tc.name dts2cpp_union_0138
  * @tc.desc dts2cpp union type alias Record<number,string> | Record<string,number> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0138', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0138.ts',
            `type UnionType0165 = Record<number, string> | Record<string, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0165');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<number, string>');
      assert.strictEqual(typeItem!.types[1], 'Record<string, number>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0138 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0138 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0139
  * @tc.name dts2cpp_union_0139
  * @tc.desc dts2cpp union type alias 抽象/具体构造签名联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0139', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0139.ts',
            `type UnionType0166 = abstract new (...args: any[]) => object | (new () => object);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0166');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(typeItem!.alias.includes('abstract new'));
      assert.ok(typeItem!.alias.includes('(new () => object)'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0139 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0139 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0140
  * @tc.name dts2cpp_union_0140
  * @tc.desc dts2cpp union type alias unique symbol / typeof Symbol / symbol 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0140', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0140.ts',
            `type UnionType0167 = unique symbol | typeof Symbol.toStringTag | symbol;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0167');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'unique symbol');
      assert.strictEqual(typeItem!.types[1], 'typeof Symbol.toStringTag');
      assert.strictEqual(typeItem!.types[2], 'symbol');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0140 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0140 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0141
  * @tc.name dts2cpp_union_0141
  * @tc.desc dts2cpp union type alias WeakRef/WeakSet/WeakMap/FinalizationRegistry 四元联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0141', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0141.ts',
            `type UnionType0168 = WeakRef<object> | FinalizationRegistry<object> | WeakSet<object> | WeakMap<object, string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0168');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'WeakRef<object>');
      assert.strictEqual(typeItem!.types[1], 'FinalizationRegistry<object>');
      assert.strictEqual(typeItem!.types[2], 'WeakSet<object>');
      assert.strictEqual(typeItem!.types[3], 'WeakMap<object, string>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0141 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0141 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0142
  * @tc.name dts2cpp_union_0142
  * @tc.desc dts2cpp union type alias 嵌套模板字面量联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0142', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0142.ts',
            `type UnionType0169 = \`\${"get" | "set"}\${Capitalize<"name" | "age">}\` | "reset";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0169');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`${"get" | "set"}${Capitalize<"name" | "age">}`');
      assert.strictEqual(typeItem!.types[1], '"reset"');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0142 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0142 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0143
  * @tc.name dts2cpp_union_0143
  * @tc.desc dts2cpp union type alias mapped type 与对象类型联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0143', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0143.ts',
            `type UnionType0170 = { [P in keyof { a: string; b: number }]: string | number } | { a: string } | { b: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0170');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '{ [P in keyof { a: string; b: number }]: string | number }');
      assert.strictEqual(typeItem!.types[1], '{ a: string }');
      assert.strictEqual(typeItem!.types[2], '{ b: number }');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0143 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0143 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0144
  * @tc.name dts2cpp_union_0144
  * @tc.desc dts2cpp union type alias 模板字面量前缀 T_（对齐 parsetsunion test_41）
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0144', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0144.ts',
            `type UnionType0171 = \`T_\${EmailLocaleIDs | FooterLocaleIDs}_id\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0171');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0144 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0144 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0145
  * @tc.name dts2cpp_union_0145
  * @tc.desc dts2cpp union type alias 八成员 mega union（基本+容器+tuple）的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0145', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0145.ts',
            `type UnionType0172 = string | number | boolean | string[] | number[] | Set<string> | Map<string, number> | [string, number];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0172');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 8);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.strictEqual(typeItem!.types[2], 'boolean');
      assert.strictEqual(typeItem!.types[3], 'string[]');
      assert.strictEqual(typeItem!.types[4], 'number[]');
      assert.strictEqual(typeItem!.types[5], 'Set<string>');
      assert.strictEqual(typeItem!.types[6], 'Map<string, number>');
      assert.strictEqual(typeItem!.types[7], '[string, number]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0145 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0145 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0146
  * @tc.name dts2cpp_union_0146
  * @tc.desc dts2cpp union type alias ReadonlyMap | Map 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0146', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0146.ts',
            `type UnionType0173 = ReadonlyMap<string, number> | Map<string, number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0173');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReadonlyMap<string, number>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, number>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0146 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0146 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0147
  * @tc.name dts2cpp_union_0147
  * @tc.desc dts2cpp union type alias ProxyHandler | object 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0147', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0147.ts',
            `type UnionType0174 = ProxyHandler<any> | object;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0174');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ProxyHandler<any>');
      assert.strictEqual(typeItem!.types[1], 'object');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0147 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0147 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0148
  * @tc.name dts2cpp_union_0148
  * @tc.desc dts2cpp union type alias 条件类型结果联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0148', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0148.ts',
            `type IsString<T> = T extends string ? "yes" : "no";
type UnionType0175 = IsString<string> | IsString<number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0175');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'IsString<string>');
      assert.strictEqual(typeItem!.types[1], 'IsString<number>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0148 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0148 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0149
  * @tc.name dts2cpp_union_0149
  * @tc.desc dts2cpp union type alias 泛型默认 union 参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0149', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0149.ts',
            `type UnionType0176<T = string | number> = T | T[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0176');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'T');
      assert.strictEqual(typeItem!.types[1], 'T[]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0149 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0149 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0150
  * @tc.name dts2cpp_union_0150
  * @tc.desc dts2cpp union type alias keyof + indexed access 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0150', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0150.ts',
            `interface Shape { width: number; height: number; label: string; }
type UnionType0177 = keyof Shape | Shape[keyof Shape];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0177');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'keyof Shape');
      assert.strictEqual(typeItem!.types[1], 'Shape[keyof Shape]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0150 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0150 执行异常: ${String(err)}`);
    }
  });

});
