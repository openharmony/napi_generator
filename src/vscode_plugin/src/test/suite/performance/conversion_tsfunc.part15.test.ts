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

suite('Performance_DTS2CPP_Func_Suite', function () {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Func_Suite part15.');

  /**
  * @tc.number : dts2cpp_func_0629
  * @tc.name : dts2cpp_func_0629
  * @tc.desc : dts2cpp func 扩充-R5-readonly `f` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0629', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5629.ts', `function f(v: ReadonlyArray<number>): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'f');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0629 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0629 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0630
  * @tc.name : dts2cpp_func_0630
  * @tc.desc : dts2cpp func 扩充-R5-record `g` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0630', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5630.ts', `function g(r: Record<string, number>): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'g');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'g');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0630 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0630 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0631
  * @tc.name : dts2cpp_func_0631
  * @tc.desc : dts2cpp func 扩充-R5-partial `h` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0631', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5631.ts', `function h(p: Partial<{a:number,b:string}>): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'h');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'h');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0631 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0631 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0632
  * @tc.name : dts2cpp_func_0632
  * @tc.desc : dts2cpp func 扩充-R5-bigint `i` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0632', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5632.ts', `function i(x: bigint): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'i');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'i');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0632 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0632 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0633
  * @tc.name : dts2cpp_func_0633
  * @tc.desc : dts2cpp func 扩充-R5-union `j` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0633', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5633.ts', `type T = string | number | boolean;
function j(v: T): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'j');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'j');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0633 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0633 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0634
  * @tc.name : dts2cpp_func_0634
  * @tc.desc : dts2cpp func 扩充-R5-rest `emit` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0634', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5634.ts', `function emit(event: string, ...args: any[]): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'emit');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'emit');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0634 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0634 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0635
  * @tc.name : dts2cpp_func_0635
  * @tc.desc : dts2cpp func 扩充-R5-class `Emitter` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0635', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5635.ts', `class Emitter { addListener(e: string, fn: Function): void {} removeListener(e: string, fn: Function): void {} }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const clsItem = parseObj.classes!.find(c => c.name === 'Emitter');
      assert.ok(clsItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0635 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0635 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0636
  * @tc.name : dts2cpp_func_0636
  * @tc.desc : dts2cpp func 扩充-R5-namespace `deep` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0636', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5636.ts', `namespace a { namespace b { namespace c { export function deep(): number { return 0; } } } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'deep');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'deep');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0636 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0636 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0637
  * @tc.name : dts2cpp_func_0637
  * @tc.desc : dts2cpp func 扩充-R5-promise `preconnect` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0637', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5637.ts', `function preconnect(url: string): Promise<void> { return Promise.resolve(); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'preconnect');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'preconnect');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0637 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0637 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0638
  * @tc.name : dts2cpp_func_0638
  * @tc.desc : dts2cpp func 扩充-R5-callback `listen` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0638', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5638.ts', `function listen(port: number, cb: (err: Error | null) => void): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'listen');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'listen');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0638 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0638 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0639
  * @tc.name : dts2cpp_func_0639
  * @tc.desc : dts2cpp func 扩充-R5-threadsafe `threadsafeWorker` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0639', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5639.ts', `function threadsafeWorker(id: number): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'threadsafeWorker');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'threadsafeWorker');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0639 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0639 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0640
  * @tc.name : dts2cpp_func_0640
  * @tc.desc : dts2cpp func 扩充-R5-$ `$$` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0640', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5640.ts', `function \$\$(sel: string): Element { return null as any; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === '$$');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, '$$');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0640 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0640 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0641
  * @tc.name : dts2cpp_func_0641
  * @tc.desc : dts2cpp func 扩充-R5-on/off `removeAllListeners` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0641', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5641.ts', `function removeAllListeners(event?: string): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'removeAllListeners');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'removeAllListeners');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0641 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0641 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0642
  * @tc.name : dts2cpp_func_0642
  * @tc.desc : dts2cpp func 扩充-R5-on/off `addEventListener` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0642', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5642.ts', `function addEventListener(type: string, handler: EventListener): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'addEventListener');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'addEventListener');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0642 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0642 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0643
  * @tc.name : dts2cpp_func_0643
  * @tc.desc : dts2cpp func 扩充-R5-callback `pipe` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0643', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5643.ts', `type Handler = (x: number, y: string) => boolean;
function pipe(h: Handler): Handler { return h; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'pipe');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'pipe');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0643 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0643 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0644
  * @tc.name : dts2cpp_func_0644
  * @tc.desc : dts2cpp func 扩充-R5-readonly `apply` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0644', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5644.ts', `interface Config { readonly host: string; port: number; }
function apply(cfg: Config): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'apply');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'apply');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0644 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0644 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0645
  * @tc.name : dts2cpp_func_0645
  * @tc.desc : dts2cpp func 扩充-R5-never `required` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0645', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5645.ts', `function required(msg: string): never { throw new Error(msg); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'required');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'required');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0645 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0645 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0646
  * @tc.name : dts2cpp_func_0646
  * @tc.desc : dts2cpp func 扩充-R5-unknown `unknownVal` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0646', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5646.ts', `function unknownVal(v: unknown): boolean { return v != null; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'unknownVal');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'unknownVal');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0646 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0646 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0647
  * @tc.name : dts2cpp_func_0647
  * @tc.desc : dts2cpp func 扩充-R5-symbol `symKey` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0647', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5647.ts', `function symKey(k: symbol): string { return String(k); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'symKey');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'symKey');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0647 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0647 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0648
  * @tc.name : dts2cpp_func_0648
  * @tc.desc : dts2cpp func 扩充-R5-object `objKeys` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0648', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5648.ts', `function objKeys(o: object): string[] { return Object.keys(o); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'objKeys');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'objKeys');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0648 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0648 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0649
  * @tc.name : dts2cpp_func_0649
  * @tc.desc : dts2cpp func 扩充-R5-export `defExp` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0649', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5649.ts', `export default function defExp(): number { return 0; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'defExp');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'defExp');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0649 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0649 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0650
  * @tc.name : dts2cpp_func_0650
  * @tc.desc : dts2cpp func 扩充-R5-declare `libFn` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0650', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5650.ts', `declare function libFn(x: number): string;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'libFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'libFn');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0650 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0650 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0651
  * @tc.name : dts2cpp_func_0651
  * @tc.desc : dts2cpp func 扩充-R5-tuple `tupleFn` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0651', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5651.ts', `function tupleFn(t: [number, string, boolean]): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'tupleFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'tupleFn');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0651 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0651 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0652
  * @tc.name : dts2cpp_func_0652
  * @tc.desc : dts2cpp func 扩充-R5-map `mapFn` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0652', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5652.ts', `function mapFn(m: Map<symbol, bigint>): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'mapFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'mapFn');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0652 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0652 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0653
  * @tc.name : dts2cpp_func_0653
  * @tc.desc : dts2cpp func 扩充-R5-set `setFn` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0653', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5653.ts', `function setFn(s: Set<unknown>): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'setFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'setFn');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0653 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0653 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0654
  * @tc.name : dts2cpp_func_0654
  * @tc.desc : dts2cpp func 扩充-R5-promise `asyncMain` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0654', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5654.ts', `async function asyncMain(): Promise<number> { return 1; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'asyncMain');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'asyncMain');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0654 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0654 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0655
  * @tc.name : dts2cpp_func_0655
  * @tc.desc : dts2cpp func 扩充-R5-static `StaticOnly` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0655', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5655.ts', `class StaticOnly { static version: number; static build: string; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const clsItem = parseObj.classes!.find(c => c.name === 'StaticOnly');
      assert.ok(clsItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0655 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0655 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0656
  * @tc.name : dts2cpp_func_0656
  * @tc.desc : dts2cpp func 扩充-R5-namespace `trim` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0656', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5656.ts', `namespace util { export namespace str { export function trim(s: string): string { return s.trim(); } } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'trim');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'trim');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0656 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0656 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0657
  * @tc.name : dts2cpp_func_0657
  * @tc.desc : dts2cpp func 扩充-R5-readonly `save` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0657', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5657.ts', `type RO = Readonly<{ id: number; name: string; }>;
function save(ro: RO): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'save');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'save');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0657 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0657 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0658
  * @tc.name : dts2cpp_func_0658
  * @tc.desc : dts2cpp func 扩充-R5-generic `pickId` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0658', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR5658.ts', `function pickId<T extends { id: number }>(obj: T): number { return obj.id; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'pickId');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'pickId');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0658 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0658 执行异常: ${String(err)}`);
    }
  });
});
