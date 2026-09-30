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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Func_Suite part13.');

  /**
  * @tc.number : dts2cpp_func_0593
  * @tc.name : dts2cpp_func_0593
  * @tc.desc : dts2cpp func 扩充-R4-交付项-on/off `on` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0593', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery593.ts', `function on(event: string, handler: () => void): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'on');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'on');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0593 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0593 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0594
  * @tc.name : dts2cpp_func_0594
  * @tc.desc : dts2cpp func 扩充-R4-交付项-on/off `off` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0594', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery594.ts', `function off(event: string, handler: () => void): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'off');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'off');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0594 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0594 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0595
  * @tc.name : dts2cpp_func_0595
  * @tc.desc : dts2cpp func 扩充-R4-交付项-on/off `once` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0595', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery595.ts', `function once(event: string, handler: () => void): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'once');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'once');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0595 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0595 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0596
  * @tc.name : dts2cpp_func_0596
  * @tc.desc : dts2cpp func 扩充-R4-交付项-promise `fetchData` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0596', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery596.ts', `function fetchData(): Promise<string> { return Promise.resolve(""); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'fetchData');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'fetchData');
      assert.strictEqual(funcItem!.returns, 'Promise<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0596 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0596 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0597
  * @tc.name : dts2cpp_func_0597
  * @tc.desc : dts2cpp func 扩充-R4-交付项-promise `load` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0597', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery597.ts', `function load(): Promise<number> { return Promise.resolve(0); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'load');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'load');
      assert.strictEqual(funcItem!.returns, 'Promise<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0597 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0597 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0598
  * @tc.name : dts2cpp_func_0598
  * @tc.desc : dts2cpp func 扩充-R4-交付项-promise `save` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0598', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery598.ts', `function save(v: string): Promise<void> { return Promise.resolve(); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'save');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'save');
      assert.strictEqual(funcItem!.returns, 'Promise<void>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0598 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0598 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0599
  * @tc.name : dts2cpp_func_0599
  * @tc.desc : dts2cpp func 扩充-R4-交付项-threadsafe_func `threadsafeRegister` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0599', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery599.ts', `function threadsafeRegister(cb: () => void): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'threadsafeRegister');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'threadsafeRegister');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0599 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0599 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0600
  * @tc.name : dts2cpp_func_0600
  * @tc.desc : dts2cpp func 扩充-R4-交付项-threadsafe_func `threadsafeCall` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0600', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery600.ts', `function threadsafeCall(id: number): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'threadsafeCall');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'threadsafeCall');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0600 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0600 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0601
  * @tc.name : dts2cpp_func_0601
  * @tc.desc : dts2cpp func 扩充-R4-交付项-namespace `boot` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0601', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery601.ts', `namespace app { export function boot(): number { return 1; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'boot');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'boot');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0601 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0601 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0602
  * @tc.name : dts2cpp_func_0602
  * @tc.desc : dts2cpp func 扩充-R4-交付项-namespace `Panel` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0602', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery602.ts', `namespace ui { export class Panel { title: string; show(): void {} } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0602 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0602 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0603
  * @tc.name : dts2cpp_func_0603
  * @tc.desc : dts2cpp func 扩充-R4-交付项-namespace `Row` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0603', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery603.ts', `namespace data { export interface Row { id: number; label: string; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0603 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0603 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0604
  * @tc.name : dts2cpp_func_0604
  * @tc.desc : dts2cpp func 扩充-R4-交付项-import `open` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0604', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery604.ts', `type PathLike = import("fs").PathLike;
function open(p: PathLike): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'open');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'open');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0604 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0604 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0605
  * @tc.name : dts2cpp_func_0605
  * @tc.desc : dts2cpp func 扩充-R4-交付项-$ `$` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0605', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery605.ts', `function \$(sel: string): Element { return null as any; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === '$');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, '$');
      assert.strictEqual(funcItem!.returns, 'Element');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0605 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0605 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0606
  * @tc.name : dts2cpp_func_0606
  * @tc.desc : dts2cpp func 扩充-R4-交付项-$ `$id` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0606', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery606.ts', `function \$id(name: string): HTMLElement { return null as any; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === '$id');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, '$id');
      assert.strictEqual(funcItem!.returns, 'HTMLElement');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0606 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0606 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0607
  * @tc.name : dts2cpp_func_0607
  * @tc.desc : dts2cpp func 扩充-R4-交付项-promise `AsyncSvc` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0607', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery607.ts', `class AsyncSvc { async run(): Promise<number> { return 1; } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0607 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0607 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0608
  * @tc.name : dts2cpp_func_0608
  * @tc.desc : dts2cpp func 扩充-R4-交付项-callback `CallbackHolder` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0608', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery608.ts', `class CallbackHolder { onDone: () => void; handler: (e: string) => boolean; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0608 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0608 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0609
  * @tc.name : dts2cpp_func_0609
  * @tc.desc : dts2cpp func 扩充-R4-交付项-callback `map` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0609', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery609.ts', `function map<T, U>(arr: T[], fn: (item: T) => U): U[] { return []; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'map');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'map');
      assert.strictEqual(funcItem!.returns, 'U[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0609 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0609 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0610
  * @tc.name : dts2cpp_func_0610
  * @tc.desc : dts2cpp func 扩充-R4-交付项-callback `reduce` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0610', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery610.ts', `function reduce(acc: number, cur: number): number { return acc + cur; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'reduce');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'reduce');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0610 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0610 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0611
  * @tc.name : dts2cpp_func_0611
  * @tc.desc : dts2cpp func 扩充-R4-交付项-export `exportedFn` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0611', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery611.ts', `export function exportedFn(x: number): string { return String(x); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'exportedFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'exportedFn');
      assert.strictEqual(funcItem!.returns, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0611 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0611 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0612
  * @tc.name : dts2cpp_func_0612
  * @tc.desc : dts2cpp func 扩充-R4-交付项-declare `ambientFn` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0612', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery612.ts', `declare function ambientFn(): void;`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'ambientFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'ambientFn');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0612 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0612 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0613
  * @tc.name : dts2cpp_func_0613
  * @tc.desc : dts2cpp func 扩充-R4-交付项-overload `overload` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0613', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery613.ts', `function overload(a: number): number;
function overload(a: string): string;
function overload(a: number | string): number | string { return a as any; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'overload');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'overload');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0613 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0613 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0614
  * @tc.name : dts2cpp_func_0614
  * @tc.desc : dts2cpp func 扩充-R4-交付项-static `StaticField` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0614', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery614.ts', `class StaticField { static readonly version: string; instanceId: number; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0614 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0614 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0615
  * @tc.name : dts2cpp_func_0615
  * @tc.desc : dts2cpp func 扩充-R4-交付项-promise `connect` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0615', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery615.ts', `interface Config { host: string; port: number; ssl?: boolean; }
function connect(cfg: Config): Promise<void> { return Promise.resolve(); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'connect');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'connect');
      assert.strictEqual(funcItem!.returns, 'Promise<void>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0615 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0615 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0616
  * @tc.name : dts2cpp_func_0616
  * @tc.desc : dts2cpp func 扩充-R4-交付项-multi `setMode` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0616', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery616.ts', `enum Mode { A, B, C }
function setMode(m: Mode): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'setMode');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'setMode');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0616 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0616 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0617
  * @tc.name : dts2cpp_func_0617
  * @tc.desc : dts2cpp func 扩充-R4-交付项-callback `wrap` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0617', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery617.ts', `type Handler = (x: number) => string;
function wrap(h: Handler): Handler { return h; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'wrap');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'wrap');
      assert.strictEqual(funcItem!.returns, 'Handler');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0617 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0617 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0618
  * @tc.name : dts2cpp_func_0618
  * @tc.desc : dts2cpp func 扩充-R4-交付项-namespace `get` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0618', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseDelivery618.ts', `namespace net { export namespace http { export function get(url: string): Promise<string> { return Promise.resolve(""); } } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes || parseObj.structs);
      const funcItem = parseObj.funcs!.find(f => f.name === 'get');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'get');
      assert.strictEqual(funcItem!.returns, 'Promise<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0618 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0618 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0619
  * @tc.name : dts2cpp_func_0619
  * @tc.desc : dts2cpp func 扩充-R4-多声明同文件 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0619', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseMulti619.ts', `enum E { A, B }
interface I { x: number; }
function f(v: I): E { return E.A; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0619 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0619 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0620
  * @tc.name : dts2cpp_func_0620
  * @tc.desc : dts2cpp func 扩充-R4-多声明同文件 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0620', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseMulti620.ts', `type U = string | number;
function g(v: U): boolean { return true; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0620 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0620 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0621
  * @tc.name : dts2cpp_func_0621
  * @tc.desc : dts2cpp func 扩充-R4-多声明同文件 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0621', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseMulti621.ts', `class C { id: number; }
function h(c: C): string { return ""; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0621 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0621 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0622
  * @tc.name : dts2cpp_func_0622
  * @tc.desc : dts2cpp func 扩充-R4-多声明同文件 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0622', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseMulti622.ts', `namespace ns { export function inner(): number { return 0; } }
function outer(): number { return ns.inner(); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 2);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0622 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0622 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0623
  * @tc.name : dts2cpp_func_0623
  * @tc.desc : dts2cpp func 扩充-R4-多声明同文件 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0623', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseMulti623.ts', `interface A { a: number; }
interface B extends A { b: string; }
function merge(x: B): A { return x; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0623 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0623 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0624
  * @tc.name : dts2cpp_func_0624
  * @tc.desc : dts2cpp func 扩充-R4-多声明同文件 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0624', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseMulti624.ts', `type M = Map<string, number>;
function keys(m: M): string[] { return []; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0624 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0624 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0625
  * @tc.name : dts2cpp_func_0625
  * @tc.desc : dts2cpp func 扩充-R4-多声明同文件 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0625', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseMulti625.ts', `enum Color { Red, Green }
class Box { color: Color; size: number; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0625 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0625 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0626
  * @tc.name : dts2cpp_func_0626
  * @tc.desc : dts2cpp func 扩充-R4-多声明同文件 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0626', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseMulti626.ts', `interface Point { x: number; y: number; }
type Line = [Point, Point];
function len(l: Line): number { return 0; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0626 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0626 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0627
  * @tc.name : dts2cpp_func_0627
  * @tc.desc : dts2cpp func 扩充-R4-多声明同文件 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0627', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseMulti627.ts', `class Svc { run(): Promise<void> { return Promise.resolve(); } }
function boot(s: Svc): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0627 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0627 执行异常: ${String(err)}`);
    }
  });
});
