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

suite('Performance_DTS2CPP_Func_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Func_Suite part08.');

  /**
  * @tc.number dts2cpp_func_0434
  * @tc.name dts2cpp_func_0434
  * @tc.desc dts2cpp funcs 签名 `(selector: string): Element`（1 参数 [string] → 返回 Element）的解析结果与性能。函数类型-$：$ 命名的选择器函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0434', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0434.ts',
            `function $(selector: string): Element { return null as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === '$');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'selector');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'Element');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0434 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0434 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0435
  * @tc.name dts2cpp_func_0435
  * @tc.desc dts2cpp funcs 签名 `(id: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。函数类型-$：$get/$set 命名函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0435', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0435.ts',
            `function $get(id: number): string { return ""; }
function $set(id: number, v: string): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === '$get');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'id');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0435 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0435 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0436
  * @tc.name dts2cpp_func_0436
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: number): number`（2 参数 [number, number] → 返回 number）的解析结果与性能。函数类型-$：$$ 双美元命名。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0436', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0436.ts',
            `function $$(a: number, b: number): number { return a + b; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === '$$');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0436 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0436 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0437
  * @tc.name dts2cpp_func_0437
  * @tc.desc dts2cpp funcs 签名 `(key: string): any`（1 参数 [string] → 返回 any）的解析结果与性能。函数类型-$：$ 包裹命名。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0437', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0437.ts',
            `function $query$(key: string): any { return null; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === '$query$');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'key');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'any');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0437 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0437 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0438
  * @tc.name dts2cpp_func_0438
  * @tc.desc dts2cpp funcs 签名 `(a: string): void`（1 参数 [string] → 返回 void）的解析结果与性能。函数类型-$：后缀 $ 命名函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0438', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0438.ts',
            `function f$(a: string): void { }
function g$(b: number): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f$');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0438 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0438 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0439
  * @tc.name dts2cpp_func_0439
  * @tc.desc dts2cpp funcs 签名 `(event: string, cb: () => void): void`（2 参数 [string, () => void] → 返回 void）的解析结果与性能。函数类型-on/off：独立 on/off 事件函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0439', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0439.ts',
            `function on(event: string, cb: () => void): void { }
function off(event: string, cb: () => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'on');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'event');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'cb');
      assert.strictEqual(funcItem!.parameters[1].type, '() => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0439 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0439 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0440
  * @tc.name dts2cpp_func_0440
  * @tc.desc dts2cpp funcs 签名 `(event: string, cb: (data: any) => void): void`（2 参数 [string, (data: any) => void] → 返回 void）的解析结果与性能。函数类型-on/off：带 data 回调的 on/off。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0440', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0440.ts',
            `function on(event: string, cb: (data: any) => void): void { }
function off(event: string, cb: (data: any) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'off');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'event');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'cb');
      assert.strictEqual(funcItem!.parameters[1].type, '(data: any) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0440 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0440 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0441
  * @tc.name dts2cpp_func_0441
  * @tc.desc dts2cpp funcs 签名 `(event: string, cb: () => void): void`（2 参数 [string, () => void] → 返回 void）的解析结果与性能。函数类型-on/off：once/on 组合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0441', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0441.ts',
            `function once(event: string, cb: () => void): void { }
function on(event: string, cb: () => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'once');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'event');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'cb');
      assert.strictEqual(funcItem!.parameters[1].type, '() => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0441 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0441 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0442
  * @tc.name dts2cpp_func_0442
  * @tc.desc dts2cpp funcs 签名 `(cb: (data: string) => void): void`（1 参数 [(data: string) => void] → 返回 void）的解析结果与性能。函数类型-on/off：onX/offX 命名模式。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0442', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0442.ts',
            `function onData(cb: (data: string) => void): void { }
function offData(cb: (data: string) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'onData');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'cb');
      assert.strictEqual(funcItem!.parameters[0].type, '(data: string) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0442 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0442 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0443
  * @tc.name dts2cpp_func_0443
  * @tc.desc dts2cpp funcs 签名 `(event: string, cb: () => void): void`（2 参数 [string, () => void] → 返回 void）的解析结果与性能。函数类型-on/off：addListener/removeListener 事件模式。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0443', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0443.ts',
            `function addListener(event: string, cb: () => void): void { }
function removeListener(event: string, cb: () => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'addListener');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'event');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.parameters[1].name, 'cb');
      assert.strictEqual(funcItem!.parameters[1].type, '() => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0443 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0443 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0444
  * @tc.name dts2cpp_func_0444
  * @tc.desc dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。函数类型-arrowfunc：独立箭头函数常量（解析不产出 funcs）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0444', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0444.ts',
            `const arrowFn = (a: number): number => a * 2;`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs.length, 0);
      assert.strictEqual(parseObj.classes.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0444 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0444 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0445
  * @tc.name dts2cpp_func_0445
  * @tc.desc dts2cpp funcs 签名 `(fn: (a: number) => number, v: number): number`（2 参数 [(a: number) => number, number] → 返回 number）的解析结果与性能。函数类型-arrowfunc：箭头函数类型入参。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0445', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0445.ts',
            `function applyFn(fn: (a: number) => number, v: number): number { return fn(v); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'applyFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'fn');
      assert.strictEqual(funcItem!.parameters[0].type, '(a: number) => number');
      assert.strictEqual(funcItem!.parameters[1].name, 'v');
      assert.strictEqual(funcItem!.parameters[1].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0445 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0445 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0446
  * @tc.name dts2cpp_func_0446
  * @tc.desc dts2cpp funcs 签名 `(): (a: string) => void`（0 参数 [] → 返回 (a: string) => void）的解析结果与性能。函数类型-arrowfunc：箭头函数类型返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0446', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0446.ts',
            `function makeFn(): (a: string) => void { return () => {}; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'makeFn');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, '(a: string) => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0446 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0446 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0447
  * @tc.name dts2cpp_func_0447
  * @tc.desc dts2cpp funcs 签名 `(h: Handler): void`（1 参数 [Handler] → 返回 void）的解析结果与性能。函数类型-arrowfunc：箭头函数类型 alias 入参。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0447', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0447.ts',
            `type Handler = (a: number, b: string) => boolean;
function useHandler(h: Handler): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'useHandler');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'h');
      assert.strictEqual(funcItem!.parameters[0].type, 'Handler');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0447 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0447 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0448
  * @tc.name dts2cpp_func_0448
  * @tc.desc dts2cpp funcs 签名 `(arr: number[], fn: (v: number, i: number) => number): number[]`（2 参数 [number[], (v: number, i: number) => number] → 返回 number[]）的解析结果与性能。函数类型-arrowfunc：双参箭头回调。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0448', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0448.ts',
            `function mapArr(arr: number[], fn: (v: number, i: number) => number): number[] { return []; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'mapArr');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'arr');
      assert.strictEqual(funcItem!.parameters[0].type, 'number[]');
      assert.strictEqual(funcItem!.parameters[1].name, 'fn');
      assert.strictEqual(funcItem!.parameters[1].type, '(v: number, i: number) => number');
      assert.strictEqual(funcItem!.returns, 'number[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0448 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0448 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0449
  * @tc.name dts2cpp_func_0449
  * @tc.desc dts2cpp funcs 签名 `(cb: (data: string) => void): void`（1 参数 [(data: string) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：createThreadSafeFunction。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0449', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0449.ts',
            `function createThreadSafeFunction(cb: (data: string) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'createThreadSafeFunction');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'cb');
      assert.strictEqual(funcItem!.parameters[0].type, '(data: string) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0449 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0449 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0450
  * @tc.name dts2cpp_func_0450
  * @tc.desc dts2cpp funcs 签名 `(a: number, cb: (err: Error | null, result: number) => void): void`（2 参数 [number, (err: Error | null, result: number) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：threadsafeFunc 回调参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0450', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0450.ts',
            `function threadsafeFunc(a: number, cb: (err: Error | null, result: number) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'threadsafeFunc');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'cb');
      assert.strictEqual(funcItem!.parameters[1].type, '(err: Error | null, result: number) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0450 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0450 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0451
  * @tc.name dts2cpp_func_0451
  * @tc.desc dts2cpp funcs 签名 `(cb: (err: Error | null, result: number[]) => void): Promise<number>`（1 参数 [(err: Error | null, result: number[]) => void] → 返回 Promise<number>）的解析结果与性能。函数类型-threadsafe_func：异步回调 + Promise 返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0451', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0451.ts',
            `function runAsync(cb: (err: Error | null, result: number[]) => void): Promise<number> { return Promise.resolve(0); }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'runAsync');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'cb');
      assert.strictEqual(funcItem!.parameters[0].type, '(err: Error | null, result: number[]) => void');
      assert.strictEqual(funcItem!.returns, 'Promise<number>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0451 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0451 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0452
  * @tc.name dts2cpp_func_0452
  * @tc.desc dts2cpp funcs 签名 `(cb: (err: Error | null, data: string) => void): void`（1 参数 [(err: Error | null, data: string) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：callback/callbackWithError。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0452', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0452.ts',
            `function callback(cb: (data: string) => void): void { }
function callbackWithError(cb: (err: Error | null, data: string) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'callbackWithError');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'cb');
      assert.strictEqual(funcItem!.parameters[0].type, '(err: Error | null, data: string) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0452 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0452 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0453
  * @tc.name dts2cpp_func_0453
  * @tc.desc dts2cpp funcs 签名 `(data: any, cb: (err: Error | null) => void): void`（2 参数 [any, (err: Error | null) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：消息线程回调模式。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0453', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0453.ts',
            `function postMessage(data: any, cb: (err: Error | null) => void): void { }
function onMessage(cb: (data: any) => void): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'postMessage');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'data');
      assert.strictEqual(funcItem!.parameters[0].type, 'any');
      assert.strictEqual(funcItem!.parameters[1].name, 'cb');
      assert.strictEqual(funcItem!.parameters[1].type, '(err: Error | null) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0453 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0454
  * @tc.name dts2cpp_func_0454
  * @tc.desc dts2cpp funcs 签名 `(cb: (err: Error | null, handle: number) => void): void`（1 参数 [(err: Error | null, handle: number) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：资源句柄回调模式。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0454', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0454.ts',
            `function acquire(cb: (err: Error | null, handle: number) => void): void { }
function release(handle: number): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'acquire');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'cb');
      assert.strictEqual(funcItem!.parameters[0].type, '(err: Error | null, handle: number) => void');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0454 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0455
  * @tc.name dts2cpp_func_0455
  * @tc.desc dts2cpp funcs 签名 `(a: Foo): void`（1 参数 [Foo] → 返回 void）的解析结果与性能。import-自定义文件：具名导入 + 函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0455', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0455.ts',
            `import { Foo } from './foo';
function useFoo(a: Foo): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'useFoo');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Foo');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0455 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0455 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0456
  * @tc.name dts2cpp_func_0456
  * @tc.desc dts2cpp funcs 签名 `(a: Foo): void`（1 参数 [Foo] → 返回 void）的解析结果与性能。import-自定义文件：默认导入 + 函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0456', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0456.ts',
            `import Foo from './foo';
function useFoo(a: Foo): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'useFoo');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Foo');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0456 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0457
  * @tc.name dts2cpp_func_0457
  * @tc.desc dts2cpp funcs 签名 `(): ns.Bar`（0 参数 [] → 返回 ns.Bar）的解析结果与性能。import-自定义文件：命名空间导入 + 限定返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0457', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0457.ts',
            `import * as ns from './ns';
function useNs(): ns.Bar { return {} as any; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'useNs');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'ns.Bar');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0457 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0458
  * @tc.name dts2cpp_func_0458
  * @tc.desc dts2cpp funcs 签名 `(a: B): void`（1 参数 [B] → 返回 void）的解析结果与性能。import-自定义文件：别名导入。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0458', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0458.ts',
            `import { A as B } from './mod';
function f(a: B): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'B');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0458 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0459
  * @tc.name dts2cpp_func_0459
  * @tc.desc dts2cpp funcs 签名 `(): void`（0 参数 [] → 返回 void）的解析结果与性能。import-自定义文件：副作用导入。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0459', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0459.ts',
            `import './side-effect';
function f(): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0459 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0459 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0460
  * @tc.name dts2cpp_func_0460
  * @tc.desc dts2cpp funcs 签名 `(a: Foo): Foo`（1 参数 [Foo] → 返回 Foo）的解析结果与性能。import-自定义文件：导入 + export 函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0460', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0460.ts',
            `import { Foo } from './mod';
export function g(a: Foo): Foo { return a; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'g');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Foo');
      assert.strictEqual(funcItem!.returns, 'Foo');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0460 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0461
  * @tc.name dts2cpp_func_0461
  * @tc.desc dts2cpp funcs 签名 `(a: Map<string, number>): void`（1 参数 [Map<string, number>] → 返回 void）的解析结果与性能。import-自定义文件：导入同名类型 + 泛型参数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0461', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0461.ts',
            `import { Map } from './mod';
function f(a: Map<string, number>): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'Map<string, number>');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0461 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0462
  * @tc.name dts2cpp_func_0462
  * @tc.desc dts2cpp funcs 签名 `(id: number): Data`（1 参数 [number] → 返回 Data）的解析结果与性能。import-自定义文件：导入类型作参数/返回。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0462', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0462.ts',
            `import { Data } from './data';
function load(id: number): Data { return {} as any; }
function save(d: Data): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'load');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'id');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'Data');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0462 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0463
  * @tc.name dts2cpp_func_0463
  * @tc.desc dts2cpp funcs 签名 `(a: A, b: B, c: C): void`（3 参数 [A, B, C] → 返回 void）的解析结果与性能。import-自定义文件：三类型导入 + 三参函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0463', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0463.ts',
            `import { A, B, C } from './abc';
function f(a: A, b: B, c: C): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 3);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'A');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'B');
      assert.strictEqual(funcItem!.parameters[2].name, 'c');
      assert.strictEqual(funcItem!.parameters[2].type, 'C');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0463 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0464
  * @tc.name dts2cpp_func_0464
  * @tc.desc dts2cpp funcs 签名 `(cb: Callback): void`（1 参数 [Callback] → 返回 void）的解析结果与性能。import-自定义文件：导入回调类型。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0464', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0464.ts',
            `import { Callback } from './cb';
function onEvent(cb: Callback): void { }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'onEvent');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'cb');
      assert.strictEqual(funcItem!.parameters[0].type, 'Callback');
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0464 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0465
  * @tc.name dts2cpp_func_0465
  * @tc.desc dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。namespace-变量：const/let/var 变量声明（不产出对象）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0465', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0465.ts',
            `namespace ns {
  const a = 1;
  let b = 2;
  var c = 3;
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs.length, 0);
      assert.strictEqual(parseObj.classes.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0465 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0466
  * @tc.name dts2cpp_func_0466
  * @tc.desc dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。namespace-变量+函数：变量声明 + 函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0466', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0466.ts',
            `namespace ns {
  const a: number = 1;
  const b: string = "x";
  function f() {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, undefined);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0466 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0467
  * @tc.name dts2cpp_func_0467
  * @tc.desc dts2cpp funcs 签名 `(b: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。namespace-变量+函数：export namespace 混合。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0467', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0467.ts',
            `export namespace ns {
  const a = 1;
  function f(b: number): string { return ""; }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'b');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0467 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0468
  * @tc.name dts2cpp_func_0468
  * @tc.desc dts2cpp funcs 签名 `(b: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。namespace-变量+函数：declare namespace 签名。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0468', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0468.ts',
            `declare namespace ns {
  const a: number;
  function f(b: number): string;
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'b');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.returns, 'string');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0468 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0469
  * @tc.name dts2cpp_func_0469
  * @tc.desc dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。namespace-变量+函数：嵌套 namespace。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0469', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0469.ts',
            `namespace outer {
  const x = 1;
  namespace inner {
    const y = 2;
    function f() {
    }
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'f');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, undefined);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0469 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0470
  * @tc.name dts2cpp_func_0470
  * @tc.desc dts2cpp funcs 签名 `(): void`（0 参数 [] → 返回 void）的解析结果与性能。namespace-变量+函数：容器变量 + 函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0470', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0470.ts',
            `namespace ns {
  const arr: number[] = [1, 2, 3];
  const map: Map<string, number> = new Map();
  function g(): void {
  }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'g');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 0);
      assert.strictEqual(funcItem!.returns, 'void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0470 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0471
  * @tc.name dts2cpp_func_0471
  * @tc.desc dts2cpp funcs 签名 `(a: number, b: number): number`（2 参数 [number, number] → 返回 number）的解析结果与性能。namespace-变量+函数：工具 namespace 双函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0471', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0471.ts',
            `namespace util {
  const version = "1.0";
  function add(a: number, b: number): number { return a + b; }
  function sub(a: number, b: number): number { return a - b; }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'add');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 2);
      assert.strictEqual(funcItem!.parameters[0].name, 'a');
      assert.strictEqual(funcItem!.parameters[0].type, 'number');
      assert.strictEqual(funcItem!.parameters[1].name, 'b');
      assert.strictEqual(funcItem!.parameters[1].type, 'number');
      assert.strictEqual(funcItem!.returns, 'number');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0471 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0471 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_func_0472
  * @tc.name dts2cpp_func_0472
  * @tc.desc dts2cpp funcs 签名 `(path: string): Promise<string>`（1 参数 [string] → 返回 Promise<string>）的解析结果与性能。namespace-变量+函数：Promise 返回的 namespace 函数。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_func_0472', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseFunc0472.ts',
            `namespace api {
  const baseUrl = "https://x";
  function get(path: string): Promise<string> { return Promise.resolve(""); }
  function post(path: string, body: any): Promise<any> { return Promise.resolve(null); }
}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      const funcItem = parseObj.funcs.find(item => item.name === 'get');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.parameters.length, 1);
      assert.strictEqual(funcItem!.parameters[0].name, 'path');
      assert.strictEqual(funcItem!.parameters[0].type, 'string');
      assert.strictEqual(funcItem!.returns, 'Promise<string>');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_func_0472 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_func_0472 执行异常: ${String(err)}`);
    }
  });

});
