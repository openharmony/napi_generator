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
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Func_Suite part17.');

  /**
  * @tc.number : dts2cpp_func_0660
  * @tc.name : dts2cpp_func_0660
  * @tc.desc : dts2cpp func 扩充-R6-on `on` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0660', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6660.ts', `function on(event: string, handler: Function): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'on');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'on');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0660 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0660 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0661
  * @tc.name : dts2cpp_func_0661
  * @tc.desc : dts2cpp func 扩充-R6-off `off` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0661', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6661.ts', `function off(event: string, handler: Function): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'off');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'off');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0661 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0661 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0662
  * @tc.name : dts2cpp_func_0662
  * @tc.desc : dts2cpp func 扩充-R6-on/off `once` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0662', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6662.ts', `function once(event: string, handler: Function): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'once');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'once');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0662 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0662 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0663
  * @tc.name : dts2cpp_func_0663
  * @tc.desc : dts2cpp func 扩充-R6-$ `$` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0663', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6663.ts', `function \$(selector: string): Element { return null as any; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === '$');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, '$');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0663 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0663 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0664
  * @tc.name : dts2cpp_func_0664
  * @tc.desc : dts2cpp func 扩充-R6-static `Config` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0664', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6664.ts', `class Config { static readonly VERSION: string; static port: number; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const clsItem = parseObj.classes!.find(c => c.name === 'Config');
      assert.ok(clsItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0664 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0664 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0665
  * @tc.name : dts2cpp_func_0665
  * @tc.desc : dts2cpp func 扩充-R6-promise `delay` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0665', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6665.ts', `function delay(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'delay');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'delay');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0665 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0665 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0666
  * @tc.name : dts2cpp_func_0666
  * @tc.desc : dts2cpp func 扩充-R6-namespace `init` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0666', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6666.ts', `namespace app { export namespace core { export function init(): void {} export function shutdown(): void {} } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'init');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'init');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0666 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0666 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0667
  * @tc.name : dts2cpp_func_0667
  * @tc.desc : dts2cpp func 扩充-R6-namespace-class `Button` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0667', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6667.ts', `namespace ui { export namespace widgets { export class Button { label: string; click(): void {} } } }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const clsItem = parseObj.classes!.find(c => c.name === 'Button');
      assert.ok(clsItem);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0667 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0667 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0668
  * @tc.name : dts2cpp_func_0668
  * @tc.desc : dts2cpp func 扩充-R6-threadsafe `threadsafeDispatch` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0668', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6668.ts', `function threadsafeDispatch(id: number): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'threadsafeDispatch');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'threadsafeDispatch');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0668 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0668 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0669
  * @tc.name : dts2cpp_func_0669
  * @tc.desc : dts2cpp func 扩充-R6-callback `registerCallback` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0669', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6669.ts', `function registerCallback(cb: (err: Error | null, data: string) => void): void {}`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'registerCallback');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'registerCallback');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0669 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0669 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0670
  * @tc.name : dts2cpp_func_0670
  * @tc.desc : dts2cpp func 扩充-R6-generic-callback `mapValues` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0670', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6670.ts', `function mapValues<T>(arr: T[], fn: (item: T) => number): number[] { return arr.map(fn); }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'mapValues');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'mapValues');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0670 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0670 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0671
  * @tc.name : dts2cpp_func_0671
  * @tc.desc : dts2cpp func 扩充-R6-export `exportedFn` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0671', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6671.ts', `export function exportedFn(x: number): number { return x; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'exportedFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'exportedFn');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0671 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0671 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0672
  * @tc.name : dts2cpp_func_0672
  * @tc.desc : dts2cpp func 扩充-R6-overload `overload` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('dts2cpp_func_0672', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs('parseR6672.ts', `function overload(a: string): string; function overload(a: number): number; function overload(a: string | number): string | number { return a as any; }`);
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === 'overload');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, 'overload');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0672 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0672 执行异常: ${String(err)}`);
    }
  });
});
