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
  * @tc.number dts2cpp_union_0186
  * @tc.name dts2cpp_union_0186
  * @tc.desc dts2cpp union type alias Array<Promise<string>> | Promise<string>[] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0186', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0186.ts',
            `type UnionType0213 = Array<Promise<string>> | Promise<string>[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0213');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Array<Promise<string>>');
      assert.strictEqual(typeItem!.types[1], 'Promise<string>[]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0186 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0187
  * @tc.name dts2cpp_union_0187
  * @tc.desc dts2cpp union type alias symbol | unique symbol | typeof Symbol.asyncIterator 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0187', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0187.ts',
            `type UnionType0214 = symbol | unique symbol | typeof Symbol.asyncIterator;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0214');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'symbol');
      assert.strictEqual(typeItem!.types[1], 'unique symbol');
      assert.strictEqual(typeItem!.types[2], 'typeof Symbol.asyncIterator');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0187 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0188
  * @tc.name dts2cpp_union_0188
  * @tc.desc dts2cpp union type alias 三成员 tagged object 联合 type A/B/C 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0188', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0188.ts',
            `type UnionType0215 = { type: "A"; value: string } | { type: "B"; items: number[] } | { type: "C"; ok: boolean };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0215');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], '{ type: "A"; value: string }');
      assert.strictEqual(typeItem!.types[1], '{ type: "B"; items: number[] }');
      assert.strictEqual(typeItem!.types[2], '{ type: "C"; ok: boolean }');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0188 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0189
  * @tc.name dts2cpp_union_0189
  * @tc.desc dts2cpp union type alias 扩展 TypedArray 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0189', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0189.ts',
            `type UnionType0216 = Float32Array | Int8Array | Uint8ClampedArray | BigInt64Array;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0216');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'Float32Array');
      assert.strictEqual(typeItem!.types[1], 'Int8Array');
      assert.strictEqual(typeItem!.types[2], 'Uint8ClampedArray');
      assert.strictEqual(typeItem!.types[3], 'BigInt64Array');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0189 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0190
  * @tc.name dts2cpp_union_0190
  * @tc.desc dts2cpp union type alias never 特殊联合 [never] | never 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0190', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0190.ts',
            `type UnionType0217 = [never] | never;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0217');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '[never]');
      assert.strictEqual(typeItem!.types[1], 'never');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0190 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0191
  * @tc.name dts2cpp_union_0191
  * @tc.desc dts2cpp union type alias Set<Map> | Map<Set> 嵌套联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0191', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0191.ts',
            `type UnionType0218 = Set<Map<string, boolean>> | Map<string, Set<boolean>>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0218');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Set<Map<string, boolean>>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, Set<boolean>>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0191 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0192
  * @tc.name dts2cpp_union_0192
  * @tc.desc dts2cpp union type alias Omit/Pick 同接口联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0192', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0192.ts',
            `interface Options { a: string; b: number; c: boolean; }
type UnionType0219 = Omit<Options, "a" | "b"> | Pick<Options, "a">;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0219');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Omit<Options, "a" | "b">');
      assert.strictEqual(typeItem!.types[1], 'Pick<Options, "a">');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0192 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0193
  * @tc.name dts2cpp_union_0193
  * @tc.desc dts2cpp union type alias keyof + 字面量联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0193', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0193.ts',
            `type UnionType0220 = keyof { a: 1; b: 2; c: 3 } | "a" | "b" | "c";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0220');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'keyof { a: 1; b: 2; c: 3 }');
      assert.strictEqual(typeItem!.types[1], '"a"');
      assert.strictEqual(typeItem!.types[2], '"b"');
      assert.strictEqual(typeItem!.types[3], '"c"');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0194
  * @tc.name dts2cpp_union_0194
  * @tc.desc dts2cpp union type alias TemplateStringsArray | readonly string[] 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0194', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0194.ts',
            `type UnionType0221 = TemplateStringsArray | readonly string[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0221');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'TemplateStringsArray');
      assert.strictEqual(typeItem!.types[1], 'readonly string[]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0195
  * @tc.name dts2cpp_union_0195
  * @tc.desc dts2cpp union type alias HeadersInit | Record<string, string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0195', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0195.ts',
            `type UnionType0222 = Record<string, string> | [string, string][];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0222');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<string, string>');
      assert.strictEqual(typeItem!.types[1], '[string, string][]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0195 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0196
  * @tc.name dts2cpp_union_0196
  * @tc.desc dts2cpp union type alias Blob | ArrayBuffer | string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0196', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0196.ts',
            `type UnionType0223 = Blob | ArrayBuffer | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0223');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 3);
      assert.strictEqual(typeItem!.types[0], 'Blob');
      assert.strictEqual(typeItem!.types[1], 'ArrayBuffer');
      assert.strictEqual(typeItem!.types[2], 'string');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0196 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0197
  * @tc.name dts2cpp_union_0197
  * @tc.desc dts2cpp union type alias NodeJS.Timeout | number 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0197', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0197.ts',
            `type UnionType0224 = NodeJS.Timeout | number;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0224');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'NodeJS.Timeout');
      assert.strictEqual(typeItem!.types[1], 'number');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0197 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0198
  * @tc.name dts2cpp_union_0198
  * @tc.desc dts2cpp union type alias Parameters 含可选/union 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0198', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0198.ts',
            `type UnionType0225 = Parameters<(a: string | number, b?: boolean) => void> | [string | number];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0225');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Parameters<(a: string | number, b?: boolean) => void>');
      assert.strictEqual(typeItem!.types[1], '[string | number]');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0198 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0199
  * @tc.name dts2cpp_union_0199
  * @tc.desc dts2cpp union type alias ReturnType 结果为 union 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0199', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0199.ts',
            `type UnionType0226 = ReturnType<(x: string | number) => string | number> | string;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0226');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReturnType<(x: string | number) => string | number>');
      assert.strictEqual(typeItem!.types[1], 'string');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0199 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0200
  * @tc.name dts2cpp_union_0200
  * @tc.desc dts2cpp union type alias Awaited 嵌套 Promise union | null 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0200', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0200.ts',
            `type UnionType0227 = Awaited<Promise<string> | Promise<number> | Promise<boolean>> | null;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0227');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Awaited<Promise<string> | Promise<number> | Promise<boolean>>');
      assert.strictEqual(typeItem!.types[1], 'null');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0200 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0201
  * @tc.name dts2cpp_union_0201
  * @tc.desc dts2cpp union type alias mapped as 模板 key 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0201', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0201.ts',
            `type UnionType0228 = { [P in "x" | "y" as \`prop-\${P}\`]: number } | { "prop-x": number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0228');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ [P in "x" | "y" as `prop-${P}`]: number }');
      assert.strictEqual(typeItem!.types[1], '{ "prop-x": number }');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0201 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0202
  * @tc.name dts2cpp_union_0202
  * @tc.desc dts2cpp union type alias readonly tuple 两种写法联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0202', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0202.ts',
            `type UnionType0229 = readonly [string, number] | Readonly<[boolean, boolean]>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0229');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'readonly [string, number]');
      assert.strictEqual(typeItem!.types[1], 'Readonly<[boolean, boolean]>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0202 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0203
  * @tc.name dts2cpp_union_0203
  * @tc.desc dts2cpp union type alias Map<readonly string[], number> | Map<string[], number> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0203', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0203.ts',
            `type UnionType0230 = Map<readonly string[], number> | Map<string[], number>;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0230');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Map<readonly string[], number>');
      assert.strictEqual(typeItem!.types[1], 'Map<string[], number>');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0203 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0204
  * @tc.name dts2cpp_union_0204
  * @tc.desc dts2cpp union type alias 四成员 HTTP method 字面量联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0204', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0204.ts',
            `type UnionType0231 = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0231');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 5);
      assert.strictEqual(typeItem!.types[0], '"GET"');
      assert.strictEqual(typeItem!.types[1], '"POST"');
      assert.strictEqual(typeItem!.types[2], '"PUT"');
      assert.strictEqual(typeItem!.types[3], '"DELETE"');
      assert.strictEqual(typeItem!.types[4], '"PATCH"');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0205
  * @tc.name dts2cpp_union_0205
  * @tc.desc dts2cpp union type alias 深浅嵌套 union 括号组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0205', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0205.ts',
            `type UnionType0232 = ((string | number) | boolean) | (null | undefined);`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0232');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '((string | number) | boolean)');
      assert.strictEqual(typeItem!.types[1], '(null | undefined)');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0206
  * @tc.name dts2cpp_union_0206
  * @tc.desc dts2cpp union type alias 双泛型 alias 组合联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0206', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0206.ts',
            `type StrOrNum = string | number;
type BoolOrNull = boolean | null;
type UnionType0233 = StrOrNum | BoolOrNull;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0233');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'StrOrNum');
      assert.strictEqual(typeItem!.types[1], 'BoolOrNull');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0207
  * @tc.name dts2cpp_union_0207
  * @tc.desc dts2cpp union type alias interface 方法签名返回 union 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0207', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0207.ts',
            `interface Service { run(): string | number; }
interface Worker { run(): boolean | null; }
type UnionType0234 = Service | Worker;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0234');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Service');
      assert.strictEqual(typeItem!.types[1], 'Worker');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0207 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0208
  * @tc.name dts2cpp_union_0208
  * @tc.desc dts2cpp union type alias class 实例 | 字面量 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0208', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0208.ts',
            `class Point { x = 0; y = 0; }
type UnionType0235 = Point | { x: number; y: number };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0235');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Point');
      assert.strictEqual(typeItem!.types[1], '{ x: number; y: number }');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0208 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0208 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0209
  * @tc.name dts2cpp_union_0209
  * @tc.desc dts2cpp union type alias enum 成员 | 数字字面量 联合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0209', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0209.ts',
            `enum Level { Low = 0, High = 1 }
type UnionType0236 = Level | 0 | 1 | 2;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0236');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 4);
      assert.strictEqual(typeItem!.types[0], 'Level');
      assert.strictEqual(typeItem!.types[1], '0');
      assert.strictEqual(typeItem!.types[2], '1');
      assert.strictEqual(typeItem!.types[3], '2');

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0209 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0209 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0210
  * @tc.name dts2cpp_union_0210
  * @tc.desc dts2cpp union type alias 同文件多 union 批量（T1/T2/T3）的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_union_0210', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseUnion0210.ts',
            `type UnionType0237 = string | number;
type UnionType0238 = boolean | null;
type UnionType0239 = string[] | number[];`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 3);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0237'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0238'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0239'));

      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_union_0210 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_union_0210 执行异常: ${String(err)}`);
    }
  });

});
