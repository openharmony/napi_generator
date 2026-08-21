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
  * @tc.number dts2cpp_union_0090
  * @tc.name dts2cpp_union_0090
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0090 = '${EmailLocaleIDs | FooterLocaleIDs}_id';` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0090', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0090.ts',
            `type UnionType0090 = \`\${EmailLocaleIDs | FooterLocaleIDs}_id\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0090');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0090 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0091
  * @tc.name dts2cpp_union_0091
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0091 = Awaited<boolean | Promise<number>>;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0091', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0091.ts',
            `type UnionType0091 = Awaited<boolean | Promise<number>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0091');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0091 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0092
  * @tc.name dts2cpp_union_0092
  * @tc.desc dts2cpp union type alias 补充用例 `interface Todo { title: string; completed: boolean; createdAt: number; }` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0092', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0092.ts',
            `interface Todo { title: string; completed: boolean; createdAt: number; }
type UnionType0092 = Pick<Todo, "title" | "completed">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0092');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0092 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0093
  * @tc.name dts2cpp_union_0093
  * @tc.desc dts2cpp union type alias 补充用例 `interface Todo { title: string; completed: boolean; createdAt: number; }` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0093', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0093.ts',
            `interface Todo { title: string; completed: boolean; createdAt: number; }
type UnionType0093 = Omit<Todo, "completed" | "createdAt">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0093');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0093 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0094
  * @tc.name dts2cpp_union_0094
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0094 = Exclude<"a" | "b" | "c", "a">;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0094', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0094.ts',
            `type UnionType0094 = Exclude<"a" | "b" | "c", "a">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0094');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0094 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0095
  * @tc.name dts2cpp_union_0095
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0095 = Extract<"a" | "b" | "c", "a" | "f">;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0095', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0095.ts',
            `type UnionType0095 = Extract<"a" | "b" | "c", "a" | "f">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0095');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0095 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0096
  * @tc.name dts2cpp_union_0096
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0096 = NonNullable<string | number | undefined>;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0096', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0096.ts',
            `type UnionType0096 = NonNullable<string | number | undefined>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0096');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0096 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0097
  * @tc.name dts2cpp_union_0097
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0097 = boolean | (s: string) => boolean;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0097', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0097.ts',
            `type UnionType0097 = boolean | (s: string) => boolean;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0097');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'boolean');
      assert.strictEqual(typeItem!.types[1], '(s: string) => boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0097 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0098
  * @tc.name dts2cpp_union_0098
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0098 = string | undefined & null;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0098', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0098.ts',
            `type UnionType0098 = string | undefined & null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0098');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string');
      assert.strictEqual(typeItem!.types[1], 'undefined & null');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0098 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0099
  * @tc.name dts2cpp_union_0099
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0099 = (string | number) | boolean;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0099', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0099.ts',
            `type UnionType0099 = (string | number) | boolean;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0099');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(string | number)');
      assert.strictEqual(typeItem!.types[1], 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0099 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0100
  * @tc.name dts2cpp_union_0100
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0100 = void | string;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0100', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0100.ts',
            `type UnionType0100 = void | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0100');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'void');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0100 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0101
  * @tc.name dts2cpp_union_0101
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0101 = (Map<string, number> | Record<string, number>) | Set<string>;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0101', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0101.ts',
            `type UnionType0101 = (Map<string, number> | Record<string, number>) | Set<string>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0101');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(Map<string, number> | Record<string, number>)');
      assert.strictEqual(typeItem!.types[1], 'Set<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0101 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0102
  * @tc.name dts2cpp_union_0102
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0102 = "a" | "b" | "c" | "d" | "e" | "f";` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0102', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0102.ts',
            `type UnionType0102 = "a" | "b" | "c" | "d" | "e" | "f";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0102');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 6);
      assert.strictEqual(typeItem!.types[0], '"a"');
      assert.strictEqual(typeItem!.types[1], '"b"');
      assert.strictEqual(typeItem!.types[2], '"c"');
      assert.strictEqual(typeItem!.types[3], '"d"');
      assert.strictEqual(typeItem!.types[4], '"e"');
      assert.strictEqual(typeItem!.types[5], '"f"');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0102 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0103
  * @tc.name dts2cpp_union_0103
  * @tc.desc dts2cpp union type alias 补充用例 `declare function f1(): { a: number; b: string };` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0103', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0103.ts',
            `declare function f1(): { a: number; b: string };
type UnionType0103 = Parameters<() => string>;
type UnionType0104 = Parameters<(s: string) => void>;
type UnionType0105 = Parameters<typeof f1>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 3);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0103'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0104'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0105'));
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0103 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0104
  * @tc.name dts2cpp_union_0104
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0106 = ConstructorParameters<ErrorConstructor>;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0104', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0104.ts',
            `type UnionType0106 = ConstructorParameters<ErrorConstructor>;
type UnionType0107 = ConstructorParameters<RegExpConstructor>;
type UnionType0108 = ConstructorParameters<any>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 3);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0106'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0107'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0108'));
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0104 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0105
  * @tc.name dts2cpp_union_0105
  * @tc.desc dts2cpp union type alias 补充用例 `declare function f1(): { a: number; b: string };` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0105', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0105.ts',
            `declare function f1(): { a: number; b: string };
type UnionType0109 = ReturnType<() => string>;
type UnionType0110 = ReturnType<(s: string) => void>;
type UnionType0111 = ReturnType<typeof f1>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 3);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0109'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0110'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0111'));
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0105 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0106
  * @tc.name dts2cpp_union_0106
  * @tc.desc dts2cpp union type alias 补充用例 `class C { x = 0; y = 0; }` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0106', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0106.ts',
            `class C { x = 0; y = 0; }
type UnionType0112 = InstanceType<typeof C>;
type UnionType0113 = InstanceType<any>;
type UnionType0114 = InstanceType<never>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 3);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0112'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0113'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0114'));
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0106 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0107
  * @tc.name dts2cpp_union_0107
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0115 = Exclude<"a" | "b" | "c", "a"> | Exclude<"x" | "y", "x">;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0107', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0107.ts',
            `type UnionType0115 = Exclude<"a" | "b" | "c", "a"> | Exclude<"x" | "y", "x">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0115');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Exclude<"a" | "b" | "c", "a">');
      assert.strictEqual(typeItem!.types[1], 'Exclude<"x" | "y", "x">');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0107 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0108
  * @tc.name dts2cpp_union_0108
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0116 = Extract<string | number | (() => void), Function> | string;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0108', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0108.ts',
            `type UnionType0116 = Extract<string | number | (() => void), Function> | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0116');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Extract<string | number | (() => void), Function>');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0108 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0109
  * @tc.name dts2cpp_union_0109
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0117 = NonNullable<string[] | null | undefined> | number;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0109', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0109.ts',
            `type UnionType0117 = NonNullable<string[] | null | undefined> | number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0117');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'NonNullable<string[] | null | undefined>');
      assert.strictEqual(typeItem!.types[1], 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0109 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0110
  * @tc.name dts2cpp_union_0110
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0118 = Awaited<Promise<string> | Promise<number>> | boolean;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0110', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0110.ts',
            `type UnionType0118 = Awaited<Promise<string> | Promise<number>> | boolean;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0118');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Awaited<Promise<string> | Promise<number>>');
      assert.strictEqual(typeItem!.types[1], 'boolean');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0110 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0111
  * @tc.name dts2cpp_union_0111
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0119 = 'T_${EmailLocaleIDs | FooterLocaleIDs}_id';` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0111', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0111.ts',
            `type UnionType0119 = \`T_\${EmailLocaleIDs | FooterLocaleIDs}_id\`;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0119');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0111 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0112
  * @tc.name dts2cpp_union_0112
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0120 = Readonly<[string, number]> | [number, string];` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0112', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0112.ts',
            `type UnionType0120 = Readonly<[string, number]> | [number, string];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0120');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Readonly<[string, number]>');
      assert.strictEqual(typeItem!.types[1], '[number, string]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0112 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0113
  * @tc.name dts2cpp_union_0113
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0121 = readonly (string | number)[] | Array<string | number>;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0113', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0113.ts',
            `type UnionType0121 = readonly (string | number)[] | Array<string | number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0121');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly (string | number)[]');
      assert.strictEqual(typeItem!.types[1], 'Array<string | number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0113 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0114
  * @tc.name dts2cpp_union_0114
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0122 = WeakRef<object> | FinalizationRegistry<object>;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0114', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0114.ts',
            `type UnionType0122 = WeakRef<object> | FinalizationRegistry<object>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0122');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'WeakRef<object>');
      assert.strictEqual(typeItem!.types[1], 'FinalizationRegistry<object>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0114 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0115
  * @tc.name dts2cpp_union_0115
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0123 = DataView | Uint8ClampedArray | Float64Array;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0115', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0115.ts',
            `type UnionType0123 = DataView | Uint8ClampedArray | Float64Array;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0123');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'DataView');
      assert.strictEqual(typeItem!.types[1], 'Uint8ClampedArray');
      assert.strictEqual(typeItem!.types[2], 'Float64Array');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0115 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0116
  * @tc.name dts2cpp_union_0116
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0124 = unique symbol | typeof Symbol.iterator;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0116', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0116.ts',
            `type UnionType0124 = unique symbol | typeof Symbol.iterator;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0124');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'unique symbol');
      assert.strictEqual(typeItem!.types[1], 'typeof Symbol.iterator');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0116 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0117
  * @tc.name dts2cpp_union_0117
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0125 = import("node:fs").Stats | string;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0117', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0117.ts',
            `type UnionType0125 = import("node:fs").Stats | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0125');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'import("node:fs").Stats');
      assert.strictEqual(typeItem!.types[1], 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0117 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0118
  * @tc.name dts2cpp_union_0118
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0126 = { [K in "a" | "b"]: number } | Record<string, never>;` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0118', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0118.ts',
            `type UnionType0126 = { [K in "a" | "b"]: number } | Record<string, never>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0126');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ [K in "a" | "b"]: number }');
      assert.strictEqual(typeItem!.types[1], 'Record<string, never>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0118 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0119
  * @tc.name dts2cpp_union_0119
  * @tc.desc dts2cpp union type alias 补充用例 `type UnionType0127 = ((...args: never[]) => void) | ((value: string) => number);` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0119', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0119.ts',
            `type UnionType0127 = ((...args: never[]) => void) | ((value: string) => number);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0127');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((...args: never[]) => void)');
      assert.strictEqual(typeItem!.types[1], '((value: string) => number)');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0119 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0119 执行异常: ${String(err)}`);
    }
  });

});
