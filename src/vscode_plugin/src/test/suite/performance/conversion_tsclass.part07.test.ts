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

suite('Performance_DTS2CPP_Class_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Class_Suite part07.');

  /**
  * @tc.number : dts2cpp_class_0326
  * @tc.name : dts2cpp_class_0326
  * @tc.desc : dts2cpp class 扩充-`class Simple { x: number; y: string; }` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0326', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass326.ts', `class Simple { x: number; y: string; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'Simple');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0326 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0327
  * @tc.name : dts2cpp_class_0327
  * @tc.desc : dts2cpp class 扩充-`class Methods { getId(): number { return 1; } setI` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0327', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass327.ts', `class Methods { getId(): number { return 1; } setId(v: number): void {} }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'Methods');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0327 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0328
  * @tc.name : dts2cpp_class_0328
  * @tc.desc : dts2cpp class 扩充-`class Implements { id: number; name: string; greet` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0328', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass328.ts', `class Implements { id: number; name: string; greet(): string { return this.name; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'Implements');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0328 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0329
  * @tc.name : dts2cpp_class_0329
  * @tc.desc : dts2cpp class 扩充-`class StaticMem { static count: number; static res` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0329', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass329.ts', `class StaticMem { static count: number; static reset(): void {} instance: number; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'StaticMem');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0329 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0329 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0330
  * @tc.name : dts2cpp_class_0330
  * @tc.desc : dts2cpp class 扩充-`class ReadonlyProps { readonly id: number; readonl` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0330', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass330.ts', `class ReadonlyProps { readonly id: number; readonly tag: string; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'ReadonlyProps');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0330 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0330 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0331
  * @tc.name : dts2cpp_class_0331
  * @tc.desc : dts2cpp class 扩充-`class OptionalCtor { constructor(public x?: number` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0331', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass331.ts', `class OptionalCtor { constructor(public x?: number, public y?: string) {} }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'OptionalCtor');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0331 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0331 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0332
  * @tc.name : dts2cpp_class_0332
  * @tc.desc : dts2cpp class 扩充-`class IndexSig { [key: string]: number; count: num` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0332', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass332.ts', `class IndexSig { [key: string]: number; count: number; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'IndexSig');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0332 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0332 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0333
  * @tc.name : dts2cpp_class_0333
  * @tc.desc : dts2cpp class 扩充-`class Nested { inner: { a: number; b: string; }; }` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0333', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass333.ts', `class Nested { inner: { a: number; b: string; }; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'Nested');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0333 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0333 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0334
  * @tc.name : dts2cpp_class_0334
  * @tc.desc : dts2cpp class 扩充-`class UnionField { mode: "a" | "b"; value: number ` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0334', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass334.ts', `class UnionField { mode: "a" | "b"; value: number | string; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'UnionField');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0334 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0334 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0335
  * @tc.name : dts2cpp_class_0335
  * @tc.desc : dts2cpp class 扩充-`export class Exported { public field: boolean; }` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0335', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass335.ts', `export class Exported { public field: boolean; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'Exported');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0335 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0335 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0336
  * @tc.name : dts2cpp_class_0336
  * @tc.desc : dts2cpp class 扩充-`declare class Ambient { foo(): void; }` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0336', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass336.ts', `declare class Ambient { foo(): void; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'Ambient');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0336 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0336 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0337
  * @tc.name : dts2cpp_class_0337
  * @tc.desc : dts2cpp class 扩充-`abstract class AbstractBase { abstract run(): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0337', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass337.ts', `abstract class AbstractBase { abstract run(): void; id: number; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'AbstractBase');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0337 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0337 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0338
  * @tc.name : dts2cpp_class_0338
  * @tc.desc : dts2cpp class 扩充-`class AsyncMethod { async fetch(): Promise<string>` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0338', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass338.ts', `class AsyncMethod { async fetch(): Promise<string> { return ""; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'AsyncMethod');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0338 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0338 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0339
  * @tc.name : dts2cpp_class_0339
  * @tc.desc : dts2cpp class 扩充-`class ArrayHolder { items: number[]; tags: string[` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0339', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass339.ts', `class ArrayHolder { items: number[]; tags: string[]; matrix: number[][]; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'ArrayHolder');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0339 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0339 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0340
  * @tc.name : dts2cpp_class_0340
  * @tc.desc : dts2cpp class 扩充-`class MapHolder { lookup: Map<string, number>; fla` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0340', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass340.ts', `class MapHolder { lookup: Map<string, number>; flags: Set<boolean>; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'MapHolder');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0340 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0340 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0341
  * @tc.name : dts2cpp_class_0341
  * @tc.desc : dts2cpp class 扩充-`class CallbackField { onDone: () => void; handler:` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0341', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass341.ts', `class CallbackField { onDone: () => void; handler: (e: string) => boolean; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'CallbackField');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0341 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0341 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0342
  * @tc.name : dts2cpp_class_0342
  * @tc.desc : dts2cpp class 扩充-`class MultiMethod { add(a: number, b: number): num` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0342', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass342.ts', `class MultiMethod { add(a: number, b: number): number { return a+b; } sub(a: number, b: number): number { return a-b; } mul(a: number, b: number): number { return a*b; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'MultiMethod');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0342 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0342 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0343
  * @tc.name : dts2cpp_class_0343
  * @tc.desc : dts2cpp class 扩充-`class PrivatePublic { private _x: number; public g` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0343', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass343.ts', `class PrivatePublic { private _x: number; public get x(): number { return this._x; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'PrivatePublic');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0343 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0343 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_class_0344
  * @tc.name : dts2cpp_class_0344
  * @tc.desc : dts2cpp class 扩充-`class TemplateLiteral { kind: node-${string}; po` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_class_0344', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseClass344.ts', `class TemplateLiteral { kind: \`node-\${string}\`; port: number; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes!.length, 1);
      assert.strictEqual(parseObj.classes![0].name, 'TemplateLiteral');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0344 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0344 执行异常: ${String(err)}`);
    }
  });
});
